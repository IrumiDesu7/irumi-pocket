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
      onClick={() => toggle(id)}
      aria-label={active ? "Hapus dari favorit" : "Tambah ke favorit"}
      className={cn(
        "flex size-8 items-center justify-center rounded-full transition-colors active:scale-90",
        active
          ? "text-red-400"
          : "text-muted-foreground/50 hover:text-muted-foreground",
        className,
      )}
    >
      <Heart
        className={cn("size-[18px] transition-all", active && "fill-current")}
      />
    </button>
  );
}
