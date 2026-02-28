import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, List, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { TAJWEED_SECTIONS } from "@/data/tajweed";
import { TajweedRuleCard } from "@/components/content/TajweedRuleCard";

export function Tajweed() {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [tocOpen, setTocOpen] = useState(false);
  const [query, setQuery] = useState("");
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  const filtered = useMemo(() => {
    if (!query.trim()) return TAJWEED_SECTIONS;
    const q = query.toLowerCase();
    return TAJWEED_SECTIONS.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.rules.some(
          (r) =>
            r.title.toLowerCase().includes(q) ||
            r.caraBaca.toLowerCase().includes(q),
        ),
    );
  }, [query]);

  const handleSectionSelect = useCallback((id: string) => {
    const el = sectionRefs.current.get(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setTocOpen(false);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-section-id");
            if (id) setActiveSectionId(id);
          }
        }
      },
      { rootMargin: "-10% 0px -70% 0px", threshold: 0 },
    );

    sectionRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pb-8 pt-6">
      <div className="mb-6 px-5 text-center">
        <div className="mx-auto mb-3 h-px w-12 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <h1 className="text-xl font-semibold text-foreground">
          Panduan Tajweed
        </h1>
        <p className="mt-1 text-xs tracking-wider text-muted-foreground uppercase">
          Dasar-Dasar Hukum Bacaan Al-Qur'an
        </p>
      </div>

      <div className="mx-4 mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground/60" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari hukum tajweed..."
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
        <div className="mx-4 mb-6 rounded-xl border border-border bg-card overflow-hidden">
          <button
            onClick={() => setTocOpen(!tocOpen)}
            className="flex w-full items-center justify-between px-4 py-3 text-left active:bg-muted/30 transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <List className="size-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Daftar Isi
              </span>
              <span className="text-xs text-muted-foreground">
                ({TAJWEED_SECTIONS.length} bab)
              </span>
            </div>
            <ChevronDown
              className={cn(
                "size-4 text-muted-foreground transition-transform duration-300",
                tocOpen && "rotate-180",
              )}
            />
          </button>

          <div
            className="grid"
            style={{
              gridTemplateRows: tocOpen ? "1fr" : "0fr",
              transition: "grid-template-rows 300ms ease-out",
            }}
          >
            <div className="overflow-hidden">
              <div className="space-y-0.5 px-2 pb-2">
                {TAJWEED_SECTIONS.map((section, i) => {
                  const isActive = activeSectionId === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => handleSectionSelect(section.id)}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-muted/30 hover:text-foreground",
                      )}
                    >
                      <span
                        className={cn(
                          "flex size-6 flex-none items-center justify-center rounded-full text-xs font-medium",
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground",
                        )}
                      >
                        {i}
                      </span>
                      <span className="truncate text-sm">{section.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-14 px-5">
        {filtered.map((section, i) => (
          <article
            key={section.id}
            ref={(el) => {
              if (el) sectionRefs.current.set(section.id, el);
            }}
            data-section-id={section.id}
            className="scroll-mt-20"
          >
            <div className="mb-6 border-b border-border/50 pb-5 text-center">
              <div className="mb-3 inline-flex size-8 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                {i}
              </div>
              <h2 className="text-lg font-semibold leading-tight text-foreground">
                {section.title}
              </h2>
            </div>

            {section.intro && (
              <p className="mb-5 text-sm leading-relaxed text-foreground/70">
                {section.intro}
              </p>
            )}

            {section.rules.map((rule) => (
              <TajweedRuleCard key={rule.id} rule={rule} />
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
