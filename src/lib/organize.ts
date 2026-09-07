import catalogJson from "@/data/skill-catalog.json";
import demoBankJson from "@/data/demo-bank.json";

export type Matcher = {
  ids?: number[];
  nameContains?: string[];
  nameExclude?: string[];
};

export type ToolDef = {
  id: number;
  name: string;
  level: number;
};

export type MethodItemDef = {
  id?: number;
  name: string;
  optional?: boolean;
  hint?: string;
};

export type MethodDef = {
  name: string;
  level: string;
  why: string;
  items: MethodItemDef[];
};

export type SkillDef = {
  id: string;
  name: string;
  rsSkill: string | null;
  blurb: string;
  tools: ToolDef[];
  methods: MethodDef[];
  matchAny: Matcher[];
};

export type TabDef = {
  id: number;
  name: string;
  skills: string[];
};

export type Catalog = {
  version: number;
  tabs: TabDef[];
  skills: SkillDef[];
};

export type BankStack = {
  id: number;
  name: string;
  qty: number;
  price: number;
};

export type ToolStatus = ToolDef & {
  owned: boolean;
  qty: number;
  bestOwned: boolean;
};

export type NeedStatus = MethodItemDef & {
  owned: boolean;
  qty: number;
};

export type MethodStatus = Omit<MethodDef, "items"> & {
  items: NeedStatus[];
  ready: boolean;
};

export type SkillPage = {
  skill: SkillDef;
  tab: TabDef | null;
  stacks: BankStack[];
  stackCount: number;
  totalQty: number;
  geValue: number;
  tools: ToolStatus[];
  methods: MethodStatus[];
  rebuild: BankStack[];
  missingCount: number;
};

export const catalog = catalogJson as Catalog;
export const demoBank: BankStack[] = demoBankJson.stacks;
export const demoBankMeta = {
  label: demoBankJson.label,
  note: demoBankJson.note,
};

function matchesMatcher(stack: BankStack, matcher: Matcher): boolean {
  const name = stack.name.toLowerCase();
  const idHit = matcher.ids?.includes(stack.id) ?? false;
  const containsHit =
    matcher.nameContains?.some((token) => name.includes(token.toLowerCase())) ??
    false;
  if (!idHit && !containsHit) return false;
  if (matcher.nameExclude?.some((token) => name.includes(token.toLowerCase()))) {
    return false;
  }
  return true;
}

export function skillOwns(skill: SkillDef, stack: BankStack): boolean {
  if (skill.id === "OTHER") return false;
  return skill.matchAny.some((matcher) => matchesMatcher(stack, matcher));
}

export function skillsForItem(stack: BankStack): SkillDef[] {
  return catalog.skills.filter((skill) => skill.id !== "OTHER" && skillOwns(skill, stack));
}

export function tagName(skill: SkillDef): string {
  return skill.name.toLowerCase().replace(/\s+/g, "-");
}

function findStack(stacks: BankStack[], item: { id?: number; name: string }): BankStack | undefined {
  const needle = item.name.toLowerCase();
  if (item.id != null) {
    const byId = stacks.find((s) => s.id === item.id);
    if (byId) return byId;
  }
  return stacks.find((s) => {
    const n = s.name.toLowerCase();
    return n === needle || n.includes(needle);
  });
}

export function buildPages(stacks: BankStack[]): SkillPage[] {
  const claimed = new Set<number>();
  const pages: SkillPage[] = catalog.skills
    .filter((skill) => skill.id !== "OTHER")
    .map((skill) => buildPage(skill, stacks, claimed));

  const otherStacks = stacks.filter((s) => !claimed.has(s.id));
  const other = catalog.skills.find((s) => s.id === "OTHER");
  if (other) {
    pages.push(buildPage(other, otherStacks, claimed, true));
  }
  return pages;
}

function buildPage(
  skill: SkillDef,
  stacks: BankStack[],
  claimed: Set<number>,
  takeAll = false,
): SkillPage {
  const owned = takeAll ? stacks : stacks.filter((s) => skillOwns(skill, s));
  for (const s of owned) claimed.add(s.id);

  const tools: ToolStatus[] = skill.tools.map((tool) => {
    const hit = findStack(owned, tool) ?? findStack(stacks, tool);
    return {
      ...tool,
      owned: Boolean(hit),
      qty: hit?.qty ?? 0,
      bestOwned: false,
    };
  });
  const best = [...tools].reverse().find((t) => t.owned);
  if (best) best.bestOwned = true;

  const methods: MethodStatus[] = skill.methods.map((method) => {
    const items: NeedStatus[] = method.items.map((need) => {
      const hit = findStack(stacks, need);
      return {
        ...need,
        owned: Boolean(hit),
        qty: hit?.qty ?? 0,
      };
    });
    const required = items.filter((i) => !i.optional);
    const ready = required.length === 0 || required.every((i) => i.owned);
    return { ...method, items, ready };
  });

  const missingCount = methods.reduce(
    (n, m) => n + m.items.filter((i) => !i.optional && !i.owned).length,
    0,
  );

  const toolIds = new Set(skill.tools.map((t) => t.id));
  const rebuild = [...owned].sort((a, b) => {
    const at = toolIds.has(a.id) ? 0 : 1;
    const bt = toolIds.has(b.id) ? 0 : 1;
    if (at !== bt) return at - bt;
    const av = a.price * a.qty;
    const bv = b.price * b.qty;
    return bv - av;
  });

  const tab = catalog.tabs.find((t) => t.skills.includes(skill.id)) ?? null;
  const geValue = owned.reduce((sum, s) => sum + s.price * s.qty, 0);
  const totalQty = owned.reduce((sum, s) => sum + s.qty, 0);

  return {
    skill,
    tab,
    stacks: owned,
    stackCount: owned.length,
    totalQty,
    geValue,
    tools,
    methods,
    rebuild,
    missingCount,
  };
}

export function formatGp(value: number): string {
  if (value >= 10_000_000) return `${(value / 1_000_000).toFixed(1)}m`;
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(2)}m`;
  if (value >= 10_000) return `${Math.round(value / 1000)}k`;
  return value.toLocaleString();
}

export function formatQty(qty: number): string {
  if (qty >= 10_000_000) return `${(qty / 1_000_000).toFixed(1)}m`;
  if (qty >= 100_000) return `${Math.round(qty / 1000)}k`;
  return qty.toLocaleString();
}

export function itemIconUrl(id: number): string {
  return `https://static.runelite.net/cache/item/icon/${id}.png`;
}

export function skillIconUrl(rsSkill: string | null): string | null {
  if (!rsSkill) return null;
  const file = rsSkill.charAt(0) + rsSkill.slice(1).toLowerCase();
  return `https://oldschool.runescape.wiki/w/Special:FilePath/${file}_icon.png`;
}

export function skillCode(id: string): string {
  switch (id) {
    case "HITPOINTS":
      return "HP";
    case "RUNECRAFT":
      return "RC";
    case "CONSTRUCTION":
      return "CO";
    case "HERBLORE":
      return "HER";
    case "FIREMAKING":
      return "FM";
    case "WOODCUTTING":
      return "WC";
    case "RAIDS":
      return "RD";
    case "OTHER":
      return "?";
    default:
      return id.slice(0, 2);
  }
}
