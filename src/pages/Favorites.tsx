import { BookOpen, BookText, Heart, Sparkles } from "lucide-react";
import { useMemo } from "react";
import { DuaCard } from "@/components/content/DuaCard";
import { OrnamentDivider } from "@/components/content/ornaments";
import { PageMasthead } from "@/components/content/PageMasthead";
import { TajweedRuleCard } from "@/components/content/TajweedRuleCard";
import { ADAB_SUNNAH_CHAPTERS } from "@/data/adab-sunnah";
import { BACAAN_SHALAT_CHAPTERS } from "@/data/bacaan-shalat";
import { TAJWEED_SECTIONS } from "@/data/tajweed";
import { useBookmarks } from "@/hooks/useBookmarks";
import type { Chapter, Dua, TajweedRule } from "@/lib/types";

function extractDuas(chapters: Chapter[]): Dua[] {
	const result: Dua[] = [];
	for (const chapter of chapters) {
		for (const section of chapter.sections) {
			for (const block of section.content) {
				if (block.t === "dua") result.push(block.dua);
			}
		}
	}
	return result;
}

function extractRules(): TajweedRule[] {
	const result: TajweedRule[] = [];
	for (const section of TAJWEED_SECTIONS) {
		for (const rule of section.rules) {
			result.push(rule);
		}
	}
	return result;
}

const ALL_ADAB_DUAS = extractDuas(ADAB_SUNNAH_CHAPTERS);
const ALL_SHALAT_DUAS = extractDuas(BACAAN_SHALAT_CHAPTERS);
const ALL_TAJWEED_RULES = extractRules();

const MATERIAL_GROUPS = [
	{ id: "adab" as const, label: "Adab Sunnah", icon: Sparkles },
	{ id: "shalat" as const, label: "Bacaan Shalat", icon: BookOpen },
	{ id: "tajweed" as const, label: "Tajweed", icon: BookText },
];

export function Favorites() {
	const { bookmarks } = useBookmarks();

	const { adabDuas, shalatDuas, tajweedRules, total } = useMemo(() => {
		const adab = ALL_ADAB_DUAS.filter((d) => bookmarks.has(d.id));
		const shalat = ALL_SHALAT_DUAS.filter((d) => bookmarks.has(d.id));
		const rules = ALL_TAJWEED_RULES.filter((r) => bookmarks.has(r.id));
		return {
			adabDuas: adab,
			shalatDuas: shalat,
			tajweedRules: rules,
			total: adab.length + shalat.length + rules.length,
		};
	}, [bookmarks]);

	const groups: {
		id: string;
		label: string;
		icon: typeof Sparkles;
		items: Dua[] | TajweedRule[];
		type: "dua" | "tajweed";
	}[] = [
		{ ...MATERIAL_GROUPS[0], items: adabDuas, type: "dua" },
		{ ...MATERIAL_GROUPS[1], items: shalatDuas, type: "dua" },
		{ ...MATERIAL_GROUPS[2], items: tajweedRules, type: "tajweed" },
	];

	const activeGroups = groups.filter((g) => g.items.length > 0);

	return (
		<div className="pb-8 pt-8 lg:pt-14">
			<PageMasthead
				kicker={total > 0 ? `${total} item tersimpan` : "Koleksi Pribadi"}
				title="Favorit"
				subtitle="Ter-bookmark untuk dibaca ulang"
			/>

			{total === 0 ? (
				<div className="mx-4 flex flex-col items-center px-6 pt-12 text-center">
					<div className="relative mb-6">
						<div
							aria-hidden
							className="absolute inset-0 -m-4 rounded-full bg-gold/5 blur-2xl"
						/>
						<div className="relative flex size-20 items-center justify-center rounded-full border border-gold/30 bg-gold/[0.06]">
							<Heart className="size-7 text-gold/60" strokeWidth={1.5} />
						</div>
					</div>

					<p className="font-display text-[20px] font-medium text-foreground">
						Belum ada favorit
					</p>
					<p className="mt-3 max-w-[300px] text-[13.5px] leading-relaxed text-muted-foreground">
						Ketuk ikon{" "}
						<Heart
							className="inline size-3.5 align-[-2px] text-muted-foreground"
							strokeWidth={2}
						/>{" "}
						pada doa atau aturan tajweed untuk menyimpannya ke sini sebagai
						koleksi pribadi.
					</p>

					<OrnamentDivider
						starSize={7}
						className="mt-8 w-[80px] opacity-50"
						starClassName="text-gold/50"
						railClassName="from-transparent to-gold/40"
					/>
				</div>
			) : (
				<div className="space-y-12 px-5">
					{activeGroups.map((group) => (
						<section key={group.id}>
							<div className="mb-4 flex items-center gap-3">
								<div className="flex size-7 items-center justify-center rounded-full border border-primary/25 bg-primary/[0.08]">
									<group.icon
										className="size-[13px] text-primary"
										strokeWidth={2}
									/>
								</div>
								<h2 className="font-display text-[17px] font-medium leading-tight text-foreground">
									{group.label}
								</h2>
								<span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
									{group.items.length} item
								</span>
								<div className="ml-1 h-px flex-1 bg-gradient-to-r from-border to-transparent" />
							</div>

							{group.type === "dua"
								? (group.items as Dua[]).map((dua) => (
										<DuaCard key={dua.id} dua={dua} />
									))
								: (group.items as TajweedRule[]).map((rule) => (
										<TajweedRuleCard key={rule.id} rule={rule} />
									))}
						</section>
					))}
				</div>
			)}
		</div>
	);
}
