import { OrnamentDivider } from "./ornaments";

interface ChapterMastheadProps {
	numeral: number | string;
	title: string;
	subtitle?: string;
}

export function ChapterMasthead({
	numeral,
	title,
	subtitle,
}: ChapterMastheadProps) {
	return (
		<div className="relative mb-8 pb-6">
			<div className="flex items-start gap-5">
				<span
					className="chapter-numeral flex-none text-[68px] text-primary/80 lg:text-[84px]"
					aria-hidden
				>
					{numeral}
				</span>
				<div className="flex-1 pt-2">
					<p className="font-kicker text-[9px] text-muted-foreground">Bab</p>
					<h2 className="mt-1 font-display text-[21px] font-medium leading-[1.2] text-foreground lg:text-[24px]">
						{title}
					</h2>
					{subtitle && (
						<p className="mt-1.5 font-display-italic text-[14px] leading-snug text-gold-deep dark:text-gold">
							{subtitle}
						</p>
					)}
				</div>
			</div>

			<OrnamentDivider
				starSize={7}
				className="mt-6"
				starClassName="text-gold/60"
				railClassName="from-transparent to-border"
			/>
		</div>
	);
}
