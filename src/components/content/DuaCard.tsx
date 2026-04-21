import { Check, Copy, type LucideIcon, Share2 } from "lucide-react";
import { ReportButton } from "@/components/features/ReportButton";
import { useShare } from "@/hooks/useShare";
import type { Dua } from "@/lib/types";
import { BookmarkButton } from "./BookmarkButton";
import { CornerGlyph, StarGlyph } from "./ornaments";

interface DuaCardProps {
	dua: Dua;
}

const RLM = "\u200F";
const LRM = "\u200E";

function formatShareText(dua: Dua): string {
	const lines: string[] = [];

	lines.push(`${RLM}${dua.ar}${LRM}`);
	lines.push("");

	if (dua.latin) {
		lines.push(dua.latin);
		lines.push("");
	}

	lines.push(`Artinya: "${dua.arti}"`);
	lines.push("");
	lines.push(dua.ref);

	if (dua.fadl) {
		lines.push("");
		lines.push(`Keutamaan: ${dua.fadl}`);
	}

	lines.push("");
	lines.push("— Irumi Pocket");

	return lines.join("\n");
}

type ShareStatus = "idle" | "copied" | "shared";

const SHARE_STATUS: Record<
	ShareStatus,
	{ Icon: LucideIcon; label: string; iconStroke: number; tone: "muted" | "primary" }
> = {
	idle: { Icon: Share2, label: "Bagikan", iconStroke: 2, tone: "muted" },
	copied: { Icon: Copy, label: "Tersalin", iconStroke: 2, tone: "primary" },
	shared: { Icon: Check, label: "Dibagikan", iconStroke: 2.5, tone: "primary" },
};

export function DuaCard({ dua }: DuaCardProps) {
	const { share, status } = useShare();
	const shareState = SHARE_STATUS[status];
	const toneClass =
		shareState.tone === "primary" ? "text-primary" : "text-muted-foreground";

	return (
		<div className="my-5 group">
			<div className="relative overflow-hidden rounded-xl bg-arabic-bg border border-arabic-border/70 px-5 pt-6 pb-5 shadow-[0_1px_0_0_color-mix(in_oklch,var(--gold)_18%,transparent)_inset]">
				<div className="text-gold/40">
					<CornerGlyph corner="tl" />
					<CornerGlyph corner="tr" />
					<CornerGlyph corner="bl" />
					<CornerGlyph corner="br" />
				</div>

				<div className="absolute right-1 top-1 z-10">
					<BookmarkButton id={dua.id} />
				</div>

				<p
					className="font-amiri text-[23px] leading-[2.1] text-foreground text-right px-2"
					dir="rtl"
					lang="ar"
				>
					{dua.ar}
				</p>
			</div>

			{dua.latin && (
				<p className="mt-3 font-display-italic text-[14px] leading-relaxed text-primary/80">
					{dua.latin}
				</p>
			)}

			<p className="mt-2.5 text-[14px] leading-relaxed text-foreground/90">
				<span className="font-kicker text-[9px] text-muted-foreground mr-2 align-[3px]">
					Artinya
				</span>
				&ldquo;{dua.arti}&rdquo;
			</p>

			<p className="mt-2 font-mono text-[10.5px] uppercase leading-snug tracking-wider text-muted-foreground">
				{dua.ref}
			</p>

			{dua.fadl && (
				<div className="mt-3.5 relative overflow-hidden rounded-lg border border-gold/40 bg-gradient-to-br from-gold/[0.08] to-gold/[0.02] px-4 py-3">
					<div
						aria-hidden
						className="absolute -right-6 -top-6 size-20 rounded-full bg-gold/10 blur-2xl"
					/>
					<div className="flex items-baseline gap-2">
						<StarGlyph size={10} className="translate-y-[1px] text-gold" />
						<span className="font-kicker text-[9px] text-gold-deep dark:text-gold">
							Keutamaan
						</span>
					</div>
					<p className="mt-1.5 text-[13px] leading-relaxed text-foreground/85">
						{dua.fadl}
					</p>
				</div>
			)}

			<div className="mt-3 flex items-center justify-between">
				<ReportButton
					materialTitle="Irumi Pocket"
					duaAr={dua.ar}
					duaRef={dua.ref}
				/>
				<button
					type="button"
					onClick={() => share({ title: "Doa", text: formatShareText(dua) })}
					className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary active:scale-95"
				>
					<shareState.Icon
						className={`size-3 ${toneClass}`}
						strokeWidth={shareState.iconStroke}
					/>
					<span className={`font-medium tracking-tight ${toneClass}`}>
						{shareState.label}
					</span>
				</button>
			</div>
		</div>
	);
}
