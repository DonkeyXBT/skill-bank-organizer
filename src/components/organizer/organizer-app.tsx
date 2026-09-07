import { useMemo, useState, type ReactNode } from "react";
import {
  ArrowLeft,
  Check,
  Download,
  Minus,
  ScanLine,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ItemIcon, SkillGlyph } from "@/components/organizer/item-icon";
import {
  buildPages,
  catalog,
  demoBank,
  demoBankMeta,
  formatGp,
  formatQty,
  skillsForItem,
  tagName,
  type BankStack,
  type SkillDef,
  type SkillPage,
} from "@/lib/organize";
import { cn } from "@/lib/cn";

type View = { kind: "home" } | { kind: "skill"; id: string } | { kind: "tab"; id: number };

export function OrganizerApp() {
  const pages = useMemo(() => buildPages(demoBank), []);
  const [view, setView] = useState<View>({ kind: "home" });
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [menu, setMenu] = useState<{ x: number; y: number; item: BankStack } | null>(null);
  const [tagged, setTagged] = useState<Record<number, string[]>>({});

  function openItemMenu(item: BankStack, x: number, y: number) {
    setMenu({ item, x, y });
  }

  function sendTo(skill: SkillDef, item: BankStack) {
    const tag = tagName(skill);
    setTagged((prev) => {
      const cur = new Set(prev[item.id] ?? []);
      cur.add(tag);
      return { ...prev, [item.id]: [...cur] };
    });
    setView({ kind: "skill", id: skill.id });
    setMenu(null);
    const tab = catalog.tabs.find((t) => t.skills.includes(skill.id));
    setToast(
      `${item.name} → ${skill.name}${tab ? ` · tab ${tab.id}` : ""}. Tagged #${tag}. Plugins cannot drag bank items — move it by hand.`,
    );
    window.setTimeout(() => setToast(null), 4200);
  }

  const filtered = pages.filter((p) =>
    query.trim() ? p.skill.name.toLowerCase().includes(query.trim().toLowerCase()) : true,
  );
  const active = view.kind === "skill" ? pages.find((p) => p.skill.id === view.id) : undefined;
  const totals = pages.reduce(
    (acc, p) => {
      acc.stacks += p.stackCount;
      acc.gp += p.geValue;
      return acc;
    },
    { stacks: 0, gp: 0 },
  );

  async function copyRebuild(page: SkillPage) {
    const lines = page.rebuild.map((s, i) => `${i + 1}. ${s.name} x${s.qty}`);
    const tab = page.tab ? `Tab ${page.tab.id} · ${page.tab.name}` : "Any tab";
    await navigator.clipboard.writeText(`${page.skill.name} — ${tab}\n${lines.join("\n")}`);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="min-h-dvh overflow-x-hidden bg-bg text-ink">
      <header className="border-b border-line bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-6">
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">RuneLite plugin</p>
            <h1 className="mt-1 break-words font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Skill Bank Organizer
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              {demoBankMeta.note}
            </p>
          </div>
          <Button asChild size="lg">
            <a href="/skill-bank-organizer.zip" download>
              <Download />
              Download plugin
            </a>
          </Button>
        </div>
      </header>

      <main className="mx-auto grid min-w-0 max-w-6xl gap-4 px-4 py-5 sm:px-6 lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)]">
        <aside className="min-w-0 rounded-xl border border-line bg-panel p-3 lg:rounded-2xl">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter skills"
              className="h-11 w-full rounded-lg border border-line bg-slot pl-10 pr-3 text-sm text-ink placeholder:text-muted focus:border-gold focus:outline-none"
            />
          </label>
          <div className="mt-3 flex min-w-0 gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
            <button
              type="button"
              onClick={() => setView({ kind: "home" })}
              className={cn(
                "flex min-h-11 min-w-36 shrink-0 items-center gap-2 rounded-lg px-3 text-left text-sm lg:min-w-0",
                view.kind === "home" ? "bg-slot text-ink" : "text-muted hover:bg-slot/70 hover:text-ink",
              )}
            >
              <ScanLine className="size-4 shrink-0" />
              All skills
            </button>
            {filtered.map((page) => (
              <button
                key={page.skill.id}
                type="button"
                onClick={() => setView({ kind: "skill", id: page.skill.id })}
                className={cn(
                  "flex min-h-11 min-w-44 shrink-0 items-center gap-2 rounded-lg px-2 text-left lg:min-w-0 lg:w-full",
                  view.kind === "skill" && view.id === page.skill.id
                    ? "bg-slot text-ink"
                    : "text-muted hover:bg-slot/70 hover:text-ink",
                )}
              >
                <SkillGlyph id={page.skill.id} rsSkill={page.skill.rsSkill} name={page.skill.name} />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm text-ink">{page.skill.name}</span>
                  <span className="block text-xs text-muted">
                    {page.stackCount} · {formatGp(page.geValue)}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </aside>

        <section className="min-w-0 overflow-x-hidden">
          {view.kind === "home" && (
            <Home
              pages={pages}
              totals={totals}
              onOpenSkill={(id) => setView({ kind: "skill", id })}
              onOpenTab={(id) => setView({ kind: "tab", id })}
            />
          )}
          {view.kind === "tab" && (
            <TabGuide
              tabId={view.id}
              pages={pages}
              onBack={() => setView({ kind: "home" })}
              onOpenSkill={(id) => setView({ kind: "skill", id })}
              onItemMenu={openItemMenu}
              tagged={tagged}
            />
          )}
          {active && (
            <SkillDetail
              page={active}
              copied={copied}
              onBack={() => setView({ kind: "home" })}
              onCopy={() => void copyRebuild(active)}
              onItemMenu={openItemMenu}
              tagged={tagged}
            />
          )}
        </section>
      </main>
      {menu && (
        <ItemSendMenu
          menu={menu}
          onClose={() => setMenu(null)}
          onSend={sendTo}
        />
      )}
      {toast && (
        <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center px-4">
          <p className="max-w-lg rounded-xl border border-line bg-panel px-4 py-3 text-sm leading-relaxed text-ink shadow-lg">
            {toast}
          </p>
        </div>
      )}
    </div>
  );
}

function Home({
  pages,
  totals,
  onOpenSkill,
  onOpenTab,
}: {
  pages: SkillPage[];
  totals: { stacks: number; gp: number };
  onOpenSkill: (id: string) => void;
  onOpenTab: (id: number) => void;
}) {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-line bg-panel p-5">
        <p className="text-xs uppercase tracking-[0.16em] text-gold">Last scan</p>
        <h2 className="mt-1 font-display text-2xl">{demoBankMeta.label}</h2>
        <p className="mt-2 text-sm text-muted">
          {totals.stacks} stacks · {formatGp(totals.gp)} gp · {pages.length} pages
        </p>
        <ol className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
          <li>1. Open your bank. The plugin reads every stack and files it onto a skill page, including Raids.</li>
          <li>2. Right-click (or tap) an item → Send to Woodcutting / Raids / Magic. That opens the page and writes a Bank Tag.</li>
          <li>3. Plugins are not allowed to drag your bank. Search #raids in the bank, or pull the item onto that tab yourself.</li>
        </ol>
      </div>

      <div className="rounded-2xl border border-line bg-panel p-5">
        <h2 className="font-display text-xl">Suggested bank tabs</h2>
        <p className="mt-1 text-sm text-muted">Nine tabs. Skills share a tab; leave a placeholder gap between them.</p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {catalog.tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => onOpenTab(tab.id)}
              className="rounded-xl border border-line bg-slot p-4 text-left hover:border-gold/50"
            >
              <p className="text-xs text-gold">Tab {tab.id}</p>
              <p className="mt-1 font-medium text-ink">{tab.name}</p>
              <p className="mt-1 text-xs capitalize text-muted">
                {tab.skills.map((s) => s.toLowerCase()).join(" · ")}
              </p>
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-line bg-panel p-5">
        <h2 className="font-display text-xl">How to run the plugin</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted">
          <li>Download the zip and open the folder in IntelliJ as a Gradle project.</li>
          <li>Run the Gradle task named <span className="text-ink">run</span>. RuneLite starts in developer mode.</li>
          <li>Enable Skill Bank Organizer, open your bank, press Scan if it does not auto-fill.</li>
          <li>Rebuild each tab from the page order. Nothing is automated.</li>
        </ol>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        {pages.map((page) => (
          <button
            key={page.skill.id}
            type="button"
            onClick={() => onOpenSkill(page.skill.id)}
            className="flex min-h-16 items-center gap-3 rounded-xl border border-line bg-panel px-3 py-3 text-left hover:border-gold/50"
          >
            <SkillGlyph id={page.skill.id} rsSkill={page.skill.rsSkill} name={page.skill.name} />
            <span className="min-w-0 flex-1">
              <span className="block truncate font-medium">{page.skill.name}</span>
              <span className="block text-xs text-muted">
                {page.stackCount} stacks
                {page.missingCount ? ` · ${page.missingCount} missing` : " · ready"}
              </span>
            </span>
            <span className="text-xs tabular-nums text-gold">{formatGp(page.geValue)}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function TabGuide({
  tabId,
  pages,
  onBack,
  onOpenSkill,
  onItemMenu,
  tagged,
}: {
  tabId: number;
  pages: SkillPage[];
  onBack: () => void;
  onOpenSkill: (id: string) => void;
  onItemMenu: (item: BankStack, x: number, y: number) => void;
  tagged: Record<number, string[]>;
}) {
  const tab = catalog.tabs.find((t) => t.id === tabId);
  if (!tab) return null;
  const group = tab.skills
    .map((id) => pages.find((p) => p.skill.id === id))
    .filter((p): p is SkillPage => Boolean(p));
  const items = group.flatMap((p) => p.rebuild);

  return (
    <div className="space-y-4">
      <Back onClick={onBack} label="All skills" />
      <div className="rounded-2xl border border-line bg-panel p-5">
        <p className="text-xs uppercase tracking-[0.16em] text-gold">Rebuild tab {tab.id}</p>
        <h2 className="mt-1 font-display text-2xl">{tab.name}</h2>
        <p className="mt-2 text-sm text-muted">
          Lay these left to right, top to bottom. Start a new row when the skill changes.
        </p>
      </div>
      {group.map((page) => (
        <button
          key={page.skill.id}
          type="button"
          onClick={() => onOpenSkill(page.skill.id)}
          className="flex w-full items-center justify-between rounded-xl border border-line bg-panel px-4 py-3 text-left"
        >
          <span className="font-medium">{page.skill.name}</span>
          <span className="text-xs text-muted">{page.stackCount} stacks</span>
        </button>
      ))}
      <BankGrid items={items} onItemMenu={onItemMenu} tagged={tagged} />
    </div>
  );
}

function SkillDetail({
  page,
  copied,
  onBack,
  onCopy,
  onItemMenu,
  tagged,
}: {
  page: SkillPage;
  copied: boolean;
  onBack: () => void;
  onCopy: () => void;
  onItemMenu: (item: BankStack, x: number, y: number) => void;
  tagged: Record<number, string[]>;
}) {
  const tab = page.tab ? `tab ${page.tab.id} · ${page.tab.name}` : "any tab";
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Back onClick={onBack} label="All skills" />
        <Button variant="secondary" size="sm" onClick={onCopy}>
          {copied ? "Copied" : "Copy rebuild list"}
        </Button>
      </div>

      <div className="rounded-2xl border border-line bg-panel p-5">
        <div className="flex items-start gap-3">
          <SkillGlyph id={page.skill.id} rsSkill={page.skill.rsSkill} name={page.skill.name} />
          <div>
            <h2 className="font-display text-2xl">{page.skill.name}</h2>
            <p className="mt-1 text-sm text-muted">
              {page.stackCount} stacks · {formatGp(page.geValue)} · {tab}
            </p>
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted">{page.skill.blurb}</p>
      </div>

      {page.tools.length > 0 && (
        <Block title="Tools — keep the best, drop the rest">
          <ul className="space-y-1">
            {page.tools.map((tool) => (
              <Line
                key={tool.id}
                id={tool.id}
                name={tool.name}
                qty={tool.qty}
                extra={tool.owned ? (tool.bestOwned ? "best owned" : "owned") : `need ${tool.level}+`}
                ok={tool.owned}
              />
            ))}
          </ul>
        </Block>
      )}

      {page.methods.map((method) => (
        <Block
          key={method.name}
          title={`${method.name}  (${method.level})`}
          eyebrow={method.ready ? "Ready" : "Missing supplies"}
        >
          <p className="mb-3 text-sm leading-relaxed text-muted">{method.why}</p>
          <ul className="space-y-1">
            {method.items.map((need) => (
              <Line
                key={need.name}
                id={need.id ?? 0}
                name={need.name}
                qty={need.qty}
                extra={
                  need.optional
                    ? need.owned
                      ? "optional · have"
                      : `optional${need.hint ? ` · ${need.hint}` : ""}`
                    : need.owned
                      ? "have"
                      : need.hint ?? "need"
                }
                ok={need.owned}
              />
            ))}
          </ul>
        </Block>
      ))}

      <Block title="In your bank">
        {page.stacks.length === 0 ? (
          <p className="text-sm text-muted">Nothing for this skill in the sample bank.</p>
        ) : (
          <>
            <p className="mb-3 text-sm text-muted">Click or right-click a stack → Send to page. Same menu the plugin adds in game.</p>
            <BankGrid items={page.rebuild} onItemMenu={onItemMenu} tagged={tagged} />
          </>
        )}
      </Block>

      <Block title="Rebuild order (top to bottom)">
        <p className="mb-3 text-sm text-muted">
          Drag these into {tab} in this order. Placeholders keep the section from collapsing.
        </p>
        <ol className="space-y-1">
          {page.rebuild.map((stack, i) => (
            <li key={stack.id} className="flex min-h-11 items-center gap-3 rounded-lg bg-slot px-2">
              <span className="w-6 text-right text-xs tabular-nums text-gold">{i + 1}</span>
              <ItemIcon id={stack.id} name={stack.name} size="sm" />
              <span className="min-w-0 flex-1 truncate text-sm">{stack.name}</span>
              <span className="text-xs tabular-nums text-muted">×{formatQty(stack.qty)}</span>
            </li>
          ))}
        </ol>
      </Block>
    </div>
  );
}

function BankGrid({
  items,
  onItemMenu,
  tagged,
}: {
  items: BankStack[];
  onItemMenu?: (item: BankStack, x: number, y: number) => void;
  tagged?: Record<number, string[]>;
}) {
  const slots = Math.max(24, Math.ceil(items.length / 8) * 8);
  return (
    <div className="grid grid-cols-4 gap-1 sm:grid-cols-8">
      {Array.from({ length: slots }, (_, i) => {
        const item = items[i];
        const isTagged = item ? (tagged?.[item.id]?.length ?? 0) > 0 : false;
        return (
          <div
            key={i}
            className={cn(
              "flex aspect-square items-center justify-center rounded-md bg-slot",
              isTagged && "ring-1 ring-gold",
            )}
            title={item ? `${item.name} × ${item.qty}` : undefined}
            onContextMenu={
              item && onItemMenu
                ? (e) => {
                    e.preventDefault();
                    onItemMenu(item, e.clientX, e.clientY);
                  }
                : undefined
            }
            onClick={
              item && onItemMenu
                ? (e) => onItemMenu(item, e.clientX, e.clientY)
                : undefined
            }
          >
            {item ? (
              <span className="relative">
                <ItemIcon id={item.id} name={item.name} />
                {item.qty > 1 && (
                  <span className="absolute -bottom-1 -right-1 rounded-sm bg-bg/90 px-1 text-[10px] tabular-nums text-ink">
                    {formatQty(item.qty)}
                  </span>
                )}
              </span>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

function ItemSendMenu({
  menu,
  onClose,
  onSend,
}: {
  menu: { x: number; y: number; item: BankStack };
  onClose: () => void;
  onSend: (skill: SkillDef, item: BankStack) => void;
}) {
  const skills = skillsForItem(menu.item);
  const dest = skills.length > 0 ? skills : catalog.skills.filter((s) => s.id === "OTHER");
  return (
    <div className="fixed inset-0 z-50" onClick={onClose} onContextMenu={(e) => e.preventDefault()}>
      <div
        className="absolute min-w-48 rounded-lg border border-line bg-panel py-1 shadow-lg"
        style={{ left: Math.min(menu.x, window.innerWidth - 220), top: Math.min(menu.y, window.innerHeight - 200) }}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="truncate px-3 py-2 text-xs text-muted">{menu.item.name}</p>
        {dest.map((skill) => (
          <button
            key={skill.id}
            type="button"
            className="flex min-h-11 w-full items-center px-3 text-left text-sm text-ink hover:bg-slot"
            onClick={() => onSend(skill, menu.item)}
          >
            Send to {skill.name}
          </button>
        ))}
        <p className="px-3 py-2 text-[11px] leading-snug text-muted">
          Cannot move the item for you. Tags it and opens the page.
        </p>
      </div>
    </div>
  );
}

function Block({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-line bg-panel p-5">
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.16em] text-gold">{eyebrow}</p>
      )}
      <h3 className="font-display text-lg text-ink">{title}</h3>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function Line({
  id,
  name,
  qty,
  extra,
  ok,
}: {
  id: number;
  name: string;
  qty: number;
  extra: string;
  ok: boolean;
}) {
  return (
    <li className="flex min-h-11 items-center gap-3 rounded-lg bg-slot px-2">
      <ItemIcon id={id} name={name} size="sm" />
      <span className="min-w-0 flex-1 truncate text-sm">{name}</span>
      <span className={cn("flex items-center gap-1 text-xs", ok ? "text-ok" : "text-miss")}>
        {ok ? <Check className="size-3.5" /> : <Minus className="size-3.5" />}
        {qty > 0 ? `${formatQty(qty)} · ${extra}` : extra}
      </span>
    </li>
  );
}

function Back({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-ink"
    >
      <ArrowLeft className="size-4" />
      {label}
    </button>
  );
}
