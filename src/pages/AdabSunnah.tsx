import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { ADAB_SUNNAH_CHAPTERS } from "@/data/adab-sunnah";
import { CollapsibleTOC } from "@/components/layout/CollapsibleTOC";
import { ContentBlock } from "@/components/content/ContentBlock";
import { SectionHeader } from "@/components/content/SectionHeader";

export function AdabSunnah() {
  const [activeChapterId, setActiveChapterId] = useState<number | null>(null);
  const [query, setQuery] = useState("");
  const chapterRefs = useRef<Map<number, HTMLElement>>(new Map());

  const filtered = useMemo(() => {
    if (!query.trim()) return ADAB_SUNNAH_CHAPTERS;
    const q = query.toLowerCase();
    return ADAB_SUNNAH_CHAPTERS.filter(
      (ch) =>
        ch.title.toLowerCase().includes(q) ||
        ch.sub.toLowerCase().includes(q) ||
        ch.sections.some((s) => s.heading.toLowerCase().includes(q)),
    );
  }, [query]);

  const handleChapterSelect = useCallback((id: number) => {
    const el = chapterRefs.current.get(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute("data-chapter-id"));
            if (!isNaN(id)) setActiveChapterId(id);
          }
        }
      },
      { rootMargin: "-10% 0px -70% 0px", threshold: 0 },
    );

    chapterRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pb-8 pt-6">
      <div className="mb-6 px-5 text-center">
        <div className="mx-auto mb-3 h-px w-12 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <h1 className="text-xl font-semibold text-foreground">
          Panduan Adab & Sunnah
        </h1>
        <p className="mt-1 text-xs tracking-wider text-muted-foreground uppercase">
          Berdasarkan Hadits Shahih
        </p>
      </div>

      <div className="mx-4 mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground/60" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari bab atau bagian..."
            className="w-full rounded-lg border border-border bg-card py-2.5 pl-9 pr-9 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-0.5 text-muted-foreground hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          )}
        </div>
      </div>

      {!query && (
        <CollapsibleTOC
          chapters={ADAB_SUNNAH_CHAPTERS}
          activeChapterId={activeChapterId}
          onChapterSelect={handleChapterSelect}
        />
      )}

      <div className="space-y-14 px-5">
        {filtered.map((chapter) => (
          <article
            key={chapter.id}
            ref={(el) => {
              if (el) chapterRefs.current.set(chapter.id, el);
            }}
            data-chapter-id={chapter.id}
            className="scroll-mt-20"
          >
            <div className="mb-6 border-b border-border/50 pb-5 text-center">
              <div className="mb-3 inline-flex size-8 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                {chapter.id}
              </div>
              <h2 className="text-lg font-semibold leading-tight text-foreground">
                {chapter.title}
              </h2>
              <p className="mt-1 text-sm italic text-gold/80">{chapter.sub}</p>
            </div>

            {chapter.sections.map((section, si) => (
              <div key={si} className="mb-6">
                <SectionHeader heading={section.heading} />
                {section.content.map((block, bi) => (
                  <ContentBlock key={bi} block={block} />
                ))}
              </div>
            ))}
          </article>
        ))}

        {filtered.length === 0 && query && (
          <div className="py-16 text-center">
            <p className="text-sm text-muted-foreground">
              Tidak ditemukan hasil untuk "{query}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
