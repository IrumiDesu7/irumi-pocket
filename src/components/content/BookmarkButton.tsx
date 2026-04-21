import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useBookmarks } from "@/hooks/useBookmarks";

interface BookmarkButtonProps {
	id: string;
	className?: string;
}

export function BookmarkButton({ id, className }: BookmarkButtonProps) {
	const { isBookmarked, toggle } = useBookmarks();
	const active = isBookmarked(id);

	return (
		<button
			type="button"
			onClick={() => toggle(id)}
			aria-label={active ? "Hapus dari favorit" : "Tambah ke favorit"}
			className={cn(
				"flex size-8 items-center justify-center rounded-full transition-all active:scale-90",
				active
					? "text-destructive hover:bg-destructive/10"
					: "text-muted-foreground/50 hover:bg-muted/50 hover:text-muted-foreground",
				className,
			)}
		>
			<Heart
				key={active ? "active" : "inactive"}
				className={cn(
					"size-[17px] transition-all",
					active && "fill-current animate-heart-pop",
				)}
				strokeWidth={1.75}
			/>
		</button>
	);
}
