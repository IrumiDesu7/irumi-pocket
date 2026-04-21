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
				"flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10.5px] text-muted-foreground/60 transition-all hover:bg-destructive/10 hover:text-destructive active:scale-95",
				className,
			)}
		>
			<Flag className="size-3" strokeWidth={2} />
			<span className="font-medium tracking-tight">Laporkan</span>
		</button>
	);
}
