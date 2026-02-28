import { useState } from "react";
import { ChevronDown, List } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Chapter } from "@/lib/types";

interface CollapsibleTOCProps {
  chapters: Chapter[];
  activeChapterId: number | null;
  onChapterSelect: (id: number) => void;
}

export function CollapsibleTOC({
  chapters,
  activeChapterId,
  onChapterSelect,
}: CollapsibleTOCProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-4 mb-6 rounded-xl border border-border bg-card overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-4 py-3 text-left active:bg-muted/30 transition-colors"
      >
        <div className="flex items-center gap-2.5">
          <List className="size-4 text-primary" />
          <span className="text-sm font-medium text-foreground">
            Daftar Isi
          </span>
          <span className="text-xs text-muted-foreground">
            ({chapters.length} bab)
          </span>
        </div>
        <ChevronDown
          className={cn(
            "size-4 text-muted-foreground transition-transform duration-300",
            isOpen && "rotate-180",
          )}
        />
      </button>

      <div
        className="grid"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 300ms ease-out",
        }}
      >
        <div className="overflow-hidden">
          <div className="space-y-0.5 px-2 pb-2">
            {chapters.map((chapter) => {
              const isActive = activeChapterId === chapter.id;
              return (
                <button
                  key={chapter.id}
                  onClick={() => {
                    onChapterSelect(chapter.id);
                    setIsOpen(false);
                  }}
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
                    {chapter.id}
                  </span>
                  <span className="truncate text-sm">{chapter.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
