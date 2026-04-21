import { cn } from "@/lib/utils";

interface StarGlyphProps {
	size?: number;
	className?: string;
}

export function StarGlyph({ size = 9, className }: StarGlyphProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 9 9"
			aria-hidden
			className={cn("flex-none", className)}
		>
			<path
				d="M4.5 0 L5.6 3.4 L9 4.5 L5.6 5.6 L4.5 9 L3.4 5.6 L0 4.5 L3.4 3.4 Z"
				fill="currentColor"
			/>
		</svg>
	);
}

type Corner = "tl" | "tr" | "bl" | "br";

const CORNER_POSITION: Record<Corner, string> = {
	tl: "left-2 top-2",
	tr: "right-2 top-2",
	bl: "left-2 bottom-2",
	br: "right-2 bottom-2",
};

const CORNER_PATH: Record<Corner, string> = {
	tl: "M0 0 L6 0 L6 1.5 L1.5 1.5 L1.5 6 L0 6 Z",
	tr: "M14 0 L8 0 L8 1.5 L12.5 1.5 L12.5 6 L14 6 Z",
	bl: "M0 14 L6 14 L6 12.5 L1.5 12.5 L1.5 8 L0 8 Z",
	br: "M14 14 L8 14 L8 12.5 L12.5 12.5 L12.5 8 L14 8 Z",
};

interface CornerGlyphProps {
	corner: Corner;
	className?: string;
}

export function CornerGlyph({ corner, className }: CornerGlyphProps) {
	return (
		<svg
			aria-hidden
			width="14"
			height="14"
			viewBox="0 0 14 14"
			className={cn("absolute", CORNER_POSITION[corner], className)}
		>
			<path d={CORNER_PATH[corner]} fill="currentColor" />
		</svg>
	);
}

interface OrnamentDividerProps {
	starSize?: number;
	className?: string;
	starClassName?: string;
	railClassName?: string;
}

export function OrnamentDivider({
	starSize = 9,
	className,
	starClassName = "text-gold",
	railClassName = "from-transparent to-gold/50",
}: OrnamentDividerProps) {
	return (
		<div className={cn("flex items-center gap-2", className)}>
			<div className={cn("h-px flex-1 bg-gradient-to-r", railClassName)} />
			<StarGlyph size={starSize} className={starClassName} />
			<div className={cn("h-px flex-1 bg-gradient-to-l", railClassName)} />
		</div>
	);
}
