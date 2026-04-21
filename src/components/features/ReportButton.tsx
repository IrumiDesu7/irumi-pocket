import { Flag } from "lucide-react";
import { openReport } from "@/hooks/useReport";
import { cn } from "@/lib/utils";

interface ReportButtonProps {
  materialTitle: string;
  chapterTitle?: string;
  sectionTitle?: string;
  duaAr?: string;
  duaRef?: string;
  className?: string;
}

export function ReportButton({
  materialTitle,
  chapterTitle,
  sectionTitle,
  duaAr,
  duaRef,
  className,
}: ReportButtonProps) {
  return (
    <button
      onClick={() =>
        openReport({ materialTitle, chapterTitle, sectionTitle, duaAr, duaRef })
      }
      aria-label="Laporkan konten"
      title="Laporkan konten dhaif/maudhu"
      className={cn(
        "flex items-center gap-1 rounded-md px-2 py-1 text-[11px] text-muted-foreground/50 transition-colors hover:text-muted-foreground active:scale-95",
        className,
      )}
    >
      <Flag className="size-3" />
      Laporkan
    </button>
  );
}
