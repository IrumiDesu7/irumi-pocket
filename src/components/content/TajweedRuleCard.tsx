import type { TajweedRule } from "@/lib/types";
import { BookmarkButton } from "./BookmarkButton";

interface TajweedRuleCardProps {
	rule: TajweedRule;
}

export function TajweedRuleCard({ rule }: TajweedRuleCardProps) {
	return (
		<div className="my-6">
			<div className="mb-3 flex items-start justify-between gap-3">
				<h4 className="font-display text-[17px] font-medium leading-snug text-foreground">
					{rule.title}
				</h4>
				<BookmarkButton id={rule.id} className="-mt-1 flex-none" />
			</div>

			{rule.huruf && (
				<div className="relative mb-3 overflow-hidden rounded-xl bg-arabic-bg border border-arabic-border/70 px-4 py-5">
					<div
						aria-hidden
						className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-transparent via-gold/60 to-transparent"
					/>
					<div
						aria-hidden
						className="absolute inset-y-0 right-0 w-[3px] bg-gradient-to-b from-transparent via-gold/60 to-transparent"
					/>
					<p
						className="font-amiri text-[28px] leading-normal text-foreground tracking-wider text-center"
						dir="rtl"
						lang="ar"
					>
						{rule.huruf}
					</p>
				</div>
			)}

			<p className="mb-4 text-[14px] leading-relaxed text-foreground/80">
				{rule.caraBaca}
			</p>

			{rule.examples.length > 0 && (
				<div className="overflow-hidden rounded-xl border border-border/70">
					<div className="grid grid-cols-[1fr_auto_1.2fr] gap-px bg-border/40 font-kicker text-[9px] text-muted-foreground">
						<div className="bg-muted/60 px-3 py-2 text-right">Contoh</div>
						<div className="bg-muted/60 px-3 py-2">Latin</div>
						<div className="bg-muted/60 px-3 py-2">Keterangan</div>
					</div>
					{rule.examples.map((ex, i) => (
						<div
							key={i}
							className="grid grid-cols-[1fr_auto_1.2fr] gap-px bg-border/30"
						>
							<div className="bg-card/80 px-3 py-3 flex items-center justify-end">
								<span
									className="font-amiri text-[19px] leading-relaxed text-foreground"
									dir="rtl"
									lang="ar"
								>
									{ex.ayat}
								</span>
							</div>
							<div className="bg-card/80 px-3 py-3 flex items-center">
								<span className="font-display-italic text-[12.5px] text-primary/85">
									{ex.latin}
								</span>
							</div>
							<div className="bg-card/80 px-3 py-3 flex items-center">
								<span className="text-[12px] leading-snug text-muted-foreground">
									{ex.keterangan}
								</span>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
