import { Check, Copy, Share2 } from "lucide-react";
import { ReportButton } from "@/components/features/ReportButton";
import { useShare } from "@/hooks/useShare";
import type { Dua } from "@/lib/types";
import { BookmarkButton } from "./BookmarkButton";

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

export function DuaCard({ dua }: DuaCardProps) {
	const { share, status } = useShare();

	return (
		<div className="my-4">
			<div className="relative rounded-lg bg-arabic-bg border border-arabic-border px-5 py-5 overflow-hidden">
				<div className="absolute inset-y-2 inset-e-0 w-0.75 rounded-s-full bg-primary/70" />
				<div className="absolute top-1 inset-s-1">
					<BookmarkButton id={dua.id} />
				</div>
				<p
					className="font-amiri text-[22px] leading-[2.1] text-foreground/85 text-right pe-1.5"
					dir="rtl"
					lang="ar"
				>
					{dua.ar}
				</p>
			</div>

			{dua.latin && (
				<p className="mt-2.5 text-[13px] italic leading-relaxed text-primary/70">
					{dua.latin}
				</p>
			)}

			<p className="mt-2 text-sm leading-relaxed text-foreground/85">
				<span className="font-semibold">Artinya:</span> &ldquo;{dua.arti}
				&rdquo;
			</p>

			<p className="mt-1.5 text-[11px] leading-snug text-muted-foreground">
				{dua.ref}
			</p>

			{dua.fadl && (
				<div className="mt-3 rounded-md border-l-[3px] border-gold bg-gold/10 px-3.5 py-2.5">
					<p className="text-[13px] leading-relaxed text-gold">
						<span className="font-semibold">{"\u2726"} Keutamaan:</span>{" "}
						{dua.fadl}
					</p>
				</div>
			)}

			<div className="mt-2.5 flex items-center justify-between">
				<ReportButton
					materialTitle="Irumi Pocket"
					duaAr={dua.ar}
					duaRef={dua.ref}
				/>
				<button
					type="button"
					onClick={() => share({ title: "Doa", text: formatShareText(dua) })}
					className="flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] text-muted-foreground transition-colors hover:text-foreground active:scale-95"
				>
					{status === "idle" ? (
						<>
							<Share2 className="size-3" />
							Bagikan
						</>
					) : status === "copied" ? (
						<>
							<Copy className="size-3 text-primary" />
							<span className="text-primary">Tersalin</span>
						</>
					) : (
						<>
							<Check className="size-3 text-primary" />
							<span className="text-primary">Dibagikan</span>
						</>
					)}
				</button>
			</div>
		</div>
	);
}
