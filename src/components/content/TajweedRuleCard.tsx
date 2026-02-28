import type { TajweedRule } from "@/lib/types";
import { BookmarkButton } from "./BookmarkButton";

interface TajweedRuleCardProps {
  rule: TajweedRule;
}

export function TajweedRuleCard({ rule }: TajweedRuleCardProps) {
  return (
    <div className="my-5">
      <div className="mb-2.5">
        <div className="flex items-start justify-between gap-2">
          <h4 className="text-[15px] font-semibold leading-snug text-foreground">
            {rule.title}
          </h4>
          <BookmarkButton id={rule.id} className="-mt-1 -mr-1 flex-none" />
        </div>
        {rule.huruf && (
          <div className="mt-2 rounded-lg bg-arabic-bg border border-arabic-border px-4 py-3 overflow-hidden relative">
            <div className="absolute inset-y-2 left-0 w-[3px] rounded-r-full bg-primary/60" />
            <p
              className="font-amiri text-[26px] leading-normal text-foreground/80 tracking-wider text-center"
              dir="rtl"
            >
              {rule.huruf}
            </p>
          </div>
        )}
      </div>

      <p className="text-sm leading-relaxed text-foreground/70 mb-3">
        {rule.caraBaca}
      </p>

      {rule.examples.length > 0 && (
        <div className="rounded-lg border border-border/60 overflow-hidden">
          <div className="grid grid-cols-[1fr_auto_1fr] gap-px bg-border/30 text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
            <div className="bg-muted/40 px-3 py-1.5 text-right">Contoh</div>
            <div className="bg-muted/40 px-3 py-1.5">Latin</div>
            <div className="bg-muted/40 px-3 py-1.5">Keterangan</div>
          </div>
          {rule.examples.map((ex, i) => (
            <div
              key={i}
              className="grid grid-cols-[1fr_auto_1fr] gap-px bg-border/30"
            >
              <div className="bg-card px-3 py-2.5 flex items-center justify-end">
                <span
                  className="font-amiri text-lg leading-relaxed text-foreground/85"
                  dir="rtl"
                >
                  {ex.ayat}
                </span>
              </div>
              <div className="bg-card px-3 py-2.5 flex items-center">
                <span className="text-[12px] italic text-primary/70">
                  {ex.latin}
                </span>
              </div>
              <div className="bg-card px-3 py-2.5 flex items-center">
                <span className="text-[12px] leading-snug text-muted-foreground">
                  {ex.keterangan}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
