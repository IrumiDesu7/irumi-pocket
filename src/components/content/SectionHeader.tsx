import { StarGlyph } from "./ornaments";

interface SectionHeaderProps {
	heading: string;
}

export function SectionHeader({ heading }: SectionHeaderProps) {
	return (
		<div className="mb-4 mt-9 first:mt-0">
			<div className="mb-2 flex items-center gap-2">
				<StarGlyph size={10} className="text-primary/60" />
				<div className="h-px flex-1 bg-gradient-to-r from-primary/30 via-border to-transparent" />
			</div>
			<h3 className="font-display text-[19px] font-medium leading-snug text-primary">
				{heading}
			</h3>
		</div>
	);
}
