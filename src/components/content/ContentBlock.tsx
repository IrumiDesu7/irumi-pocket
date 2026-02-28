import type { ContentBlock as ContentBlockType } from "@/lib/types";
import { DuaCard } from "./DuaCard";

interface ContentBlockProps {
  block: ContentBlockType;
}

export function ContentBlock({ block }: ContentBlockProps) {
  switch (block.t) {
    case "dua":
      return <DuaCard dua={block.dua} />;

    case "sub":
      return (
        <h4 className="mt-5 mb-1.5 text-sm font-semibold text-foreground">
          {block.text}
        </h4>
      );

    case "p":
      return (
        <p className="mb-2 text-sm leading-relaxed text-foreground/70">
          {block.text}
          {block.src && (
            <span className="text-[11px] text-muted-foreground">
              {" "}
              ({block.src})
            </span>
          )}
        </p>
      );

    case "warn":
      return (
        <div className="my-2.5 rounded-r-md border-l-[3px] border-gold bg-gold/10 px-3.5 py-2.5">
          <p className="text-[13px] leading-relaxed text-gold/90">
            {"\u26A0"} {block.text}
          </p>
        </div>
      );

    case "note":
      return (
        <div className="my-2.5 rounded-r-md border-l-[3px] border-border bg-muted/40 px-3.5 py-2.5">
          <p className="text-[13px] leading-relaxed text-muted-foreground">
            {block.text}
          </p>
        </div>
      );

    case "highlight":
      return (
        <div className="my-3 rounded-lg bg-primary/10 px-4 py-3.5 text-center">
          <p className="text-[15px] font-semibold leading-snug text-primary">
            {block.text}
          </p>
        </div>
      );

    case "steps":
      return (
        <ol className="my-2.5 list-decimal space-y-1 pl-5">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="text-sm leading-relaxed text-foreground/70 marker:font-semibold marker:text-primary"
            >
              {item}
            </li>
          ))}
        </ol>
      );
  }
}
