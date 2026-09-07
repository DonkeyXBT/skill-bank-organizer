import { useState } from "react";
import { itemIconUrl, skillCode, skillIconUrl } from "@/lib/organize";
import { cn } from "@/lib/cn";

export function ItemIcon({
  id,
  name,
  size = "md",
}: {
  id: number;
  name: string;
  size?: "sm" | "md";
}) {
  const [failed, setFailed] = useState(id <= 0);
  const dim = size === "sm" ? "size-7" : "size-9";
  if (failed) {
    return (
      <span
        className={cn(
          dim,
          "grid shrink-0 place-items-center rounded-sm bg-slot text-[10px] font-medium uppercase tracking-wide text-muted",
        )}
        aria-hidden
      >
        {name.slice(0, 1)}
      </span>
    );
  }
  return (
    <img
      src={itemIconUrl(id)}
      alt=""
      width={size === "sm" ? 28 : 36}
      height={size === "sm" ? 28 : 36}
      className={cn(dim, "shrink-0 image-pixelated object-contain")}
      onError={() => setFailed(true)}
    />
  );
}

export function SkillGlyph({
  id,
  rsSkill,
  name,
}: {
  id: string;
  rsSkill: string | null;
  name: string;
}) {
  const [failed, setFailed] = useState(!rsSkill);
  const src = skillIconUrl(rsSkill);
  if (failed || !src) {
    return (
      <span className="grid size-8 shrink-0 place-items-center rounded-md bg-slot text-[10px] font-semibold tracking-wide text-gold">
        {skillCode(id)}
      </span>
    );
  }
  return (
    <img
      src={src}
      alt=""
      width={32}
      height={32}
      className="size-8 shrink-0 object-contain"
      onError={() => setFailed(true)}
    />
  );
}
