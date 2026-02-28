import { useCallback, useEffect, useRef, useState } from "react";
import { BACAAN_SHALAT_CHAPTERS } from "@/data/bacaan-shalat";
import { CollapsibleTOC } from "@/components/layout/CollapsibleTOC";
import { ContentBlock } from "@/components/content/ContentBlock";
import { SectionHeader } from "@/components/content/SectionHeader";

export function BacaanShalat() {
  const [activeChapterId, setActiveChapterId] = useState<number | null>(null);
  const chapterRefs = useRef<Map<number, HTMLElement>>(new Map());

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
          Panduan Bacaan Shalat
        </h1>
        <p className="mt-1 text-xs tracking-wider text-muted-foreground uppercase">
          Lengkap Sesuai Sunnah
        </p>
      </div>

      <CollapsibleTOC
        chapters={BACAAN_SHALAT_CHAPTERS}
        activeChapterId={activeChapterId}
        onChapterSelect={handleChapterSelect}
      />

      <div className="space-y-14 px-5">
        {BACAAN_SHALAT_CHAPTERS.map((chapter) => (
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
      </div>
    </div>
  );
}
