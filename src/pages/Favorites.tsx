import { useMemo } from "react";
import { Heart, Sparkles, BookOpen, BookText } from "lucide-react";
import { useBookmarks } from "@/hooks/useBookmarks";
import { ADAB_SUNNAH_CHAPTERS } from "@/data/adab-sunnah";
import { BACAAN_SHALAT_CHAPTERS } from "@/data/bacaan-shalat";
import { TAJWEED_SECTIONS } from "@/data/tajweed";
import { DuaCard } from "@/components/content/DuaCard";
import { TajweedRuleCard } from "@/components/content/TajweedRuleCard";
import type { Dua, TajweedRule, Chapter } from "@/lib/types";

function extractDuas(chapters: Chapter[]): Dua[] {
  const result: Dua[] = [];
  for (const chapter of chapters) {
    for (const section of chapter.sections) {
      for (const block of section.content) {
        if (block.t === "dua") result.push(block.dua);
      }
    }
  }
  return result;
}

function extractRules(): TajweedRule[] {
  const result: TajweedRule[] = [];
  for (const section of TAJWEED_SECTIONS) {
    for (const rule of section.rules) {
      result.push(rule);
    }
  }
  return result;
}

const MATERIAL_GROUPS = [
  {
    id: "adab" as const,
    label: "Adab Sunnah",
    icon: Sparkles,
  },
  {
    id: "shalat" as const,
    label: "Bacaan Shalat",
    icon: BookOpen,
  },
  {
    id: "tajweed" as const,
    label: "Tajweed",
    icon: BookText,
  },
];

export function Favorites() {
  const { bookmarks } = useBookmarks();

  const { adabDuas, shalatDuas, tajweedRules, total } = useMemo(() => {
    const ids = bookmarks;
    const adab = extractDuas(ADAB_SUNNAH_CHAPTERS).filter((d) => ids.has(d.id));
    const shalat = extractDuas(BACAAN_SHALAT_CHAPTERS).filter((d) =>
      ids.has(d.id),
    );
    const rules = extractRules().filter((r) => ids.has(r.id));
    return {
      adabDuas: adab,
      shalatDuas: shalat,
      tajweedRules: rules,
      total: adab.length + shalat.length + rules.length,
    };
  }, [bookmarks]);

  const groups: {
    id: string;
    label: string;
    icon: typeof Sparkles;
    items: Dua[] | TajweedRule[];
    type: "dua" | "tajweed";
  }[] = [
    { ...MATERIAL_GROUPS[0], items: adabDuas, type: "dua" },
    { ...MATERIAL_GROUPS[1], items: shalatDuas, type: "dua" },
    { ...MATERIAL_GROUPS[2], items: tajweedRules, type: "tajweed" },
  ];

  const activeGroups = groups.filter((g) => g.items.length > 0);

  return (
    <div className="pb-8 pt-6">
      <div className="mb-6 px-5 text-center">
        <div className="mx-auto mb-3 h-px w-12 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <h1 className="text-xl font-semibold text-foreground">Favorit</h1>
        <p className="mt-1 text-xs tracking-wider text-muted-foreground uppercase">
          {total > 0 ? `${total} item tersimpan` : "Koleksi Pribadi"}
        </p>
      </div>

      {total === 0 ? (
        <div className="flex flex-col items-center justify-center px-8 pt-20">
          <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-muted/40">
            <Heart className="size-7 text-muted-foreground/40" />
          </div>
          <p className="text-base font-medium text-foreground/70">
            Belum ada favorit
          </p>
          <p className="mt-2 max-w-[260px] text-center text-sm leading-relaxed text-muted-foreground">
            Ketuk ikon{" "}
            <Heart className="inline size-3.5 align-text-bottom text-muted-foreground" />{" "}
            pada doa atau aturan tajweed untuk menyimpannya di sini.
          </p>
        </div>
      ) : (
        <div className="space-y-10 px-5">
          {activeGroups.map((group) => (
            <section key={group.id}>
              <div className="mb-4 flex items-center gap-2.5">
                <group.icon className="size-4 text-primary" />
                <h2 className="text-sm font-semibold tracking-wide text-foreground/80">
                  {group.label}
                </h2>
                <span className="text-xs text-muted-foreground">
                  ({group.items.length})
                </span>
              </div>

              {group.type === "dua"
                ? (group.items as Dua[]).map((dua) => (
                    <DuaCard key={dua.id} dua={dua} />
                  ))
                : (group.items as TajweedRule[]).map((rule) => (
                    <TajweedRuleCard key={rule.id} rule={rule} />
                  ))}
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
