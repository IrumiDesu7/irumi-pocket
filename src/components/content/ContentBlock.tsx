import { AlertTriangle, Info, type LucideIcon } from "lucide-react";
import type { ContentBlock as ContentBlockType } from "@/lib/types";
import { DuaCard } from "./DuaCard";
import { StarGlyph } from "./ornaments";

interface ContentBlockProps {
	block: ContentBlockType;
}

type CalloutVariant = "warn" | "note";

const CALLOUT: Record<
	CalloutVariant,
	{ Icon: LucideIcon; classes: string; textClass: string; iconClass: string }
> = {
	warn: {
		Icon: AlertTriangle,
		classes: "border-destructive/30 bg-destructive/[0.06]",
		textClass: "text-foreground/85",
		iconClass: "text-destructive",
	},
	note: {
		Icon: Info,
		classes: "border-border bg-muted/40",
		textClass: "text-muted-foreground",
		iconClass: "text-muted-foreground",
	},
};

function Callout({ variant, text }: { variant: CalloutVariant; text: string }) {
	const { Icon, classes, textClass, iconClass } = CALLOUT[variant];
	return (
		<div className={`my-3 flex gap-3 rounded-lg border px-4 py-3 ${classes}`}>
			<Icon
				className={`mt-[2px] size-[14px] flex-none ${iconClass}`}
				strokeWidth={2}
			/>
			<p className={`text-[13px] leading-relaxed ${textClass}`}>{text}</p>
		</div>
	);
}

export function ContentBlock({ block }: ContentBlockProps) {
	switch (block.t) {
		case "dua":
			return <DuaCard dua={block.dua} />;

		case "sub":
			return (
				<h4 className="mt-6 mb-2 flex items-baseline gap-2 text-[14px] font-semibold text-foreground">
					<span
						aria-hidden
						className="inline-block size-1.5 translate-y-[-2px] rotate-45 bg-gold"
					/>
					{block.text}
				</h4>
			);

		case "p":
			return (
				<p className="mb-2.5 text-[14px] leading-[1.75] text-foreground/80">
					{block.text}
					{block.src && (
						<span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">
							{" "}
							— {block.src}
						</span>
					)}
				</p>
			);

		case "warn":
			return <Callout variant="warn" text={block.text} />;

		case "note":
			return <Callout variant="note" text={block.text} />;

		case "highlight":
			return (
				<div className="my-4 relative overflow-hidden rounded-xl border border-primary/25 bg-gradient-to-br from-primary/[0.1] via-primary/[0.04] to-transparent px-5 py-4 text-center">
					<div
						aria-hidden
						className="absolute -left-4 -top-4 size-20 rounded-full bg-primary/10 blur-2xl"
					/>
					<div
						aria-hidden
						className="absolute -right-4 -bottom-4 size-20 rounded-full bg-gold/10 blur-2xl"
					/>
					<div className="relative mb-2 flex items-center justify-center gap-2">
						<div className="h-px w-8 bg-gradient-to-r from-transparent to-primary/40" />
						<StarGlyph size={8} className="text-primary/60" />
						<div className="h-px w-8 bg-gradient-to-l from-transparent to-primary/40" />
					</div>
					<p className="relative font-display text-[17px] font-medium leading-snug text-primary">
						{block.text}
					</p>
				</div>
			);

		case "steps":
			return (
				<ol className="my-3 space-y-2">
					{block.items.map((item, i) => (
						<li
							key={i}
							className="flex gap-3 text-[14px] leading-relaxed text-foreground/80"
						>
							<span className="chapter-numeral flex-none pt-[2px] text-[18px] text-primary/70 min-w-[1.1ch] text-right">
								{i + 1}
							</span>
							<span className="flex-1">{item}</span>
						</li>
					))}
				</ol>
			);
	}
}
