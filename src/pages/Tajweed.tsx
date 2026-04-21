import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChapterMasthead } from "@/components/content/ChapterMasthead";
import { PageMasthead } from "@/components/content/PageMasthead";
import { SearchBar } from "@/components/content/SearchBar";
import { TajweedRuleCard } from "@/components/content/TajweedRuleCard";
import { CollapsibleTOC } from "@/components/layout/CollapsibleTOC";
import { TAJWEED_SECTIONS } from "@/data/tajweed";

export function Tajweed() {
	const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
	const [query, setQuery] = useState("");
	const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

	const filtered = useMemo(() => {
		if (!query.trim()) return TAJWEED_SECTIONS;
		const q = query.toLowerCase();
		return TAJWEED_SECTIONS.filter(
			(s) =>
				s.title.toLowerCase().includes(q) ||
				s.rules.some(
					(r) =>
						r.title.toLowerCase().includes(q) ||
						r.caraBaca.toLowerCase().includes(q),
				),
		);
	}, [query]);

	const tocItems = useMemo(
		() =>
			TAJWEED_SECTIONS.map((s, i) => ({
				id: s.id,
				title: s.title,
				numeral: i,
			})),
		[],
	);

	const handleSectionSelect = useCallback((id: string | number) => {
		const el = sectionRefs.current.get(String(id));
		if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						const id = entry.target.getAttribute("data-section-id");
						if (id) setActiveSectionId(id);
					}
				}
			},
			{ rootMargin: "-10% 0px -70% 0px", threshold: 0 },
		);

		for (const el of sectionRefs.current.values()) observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<div className="pb-8 pt-8 lg:pt-14">
			<PageMasthead
				kicker="Panduan · Bab III"
				title="Tajweed"
				subtitle="Dasar-dasar hukum bacaan Al-Qur'an"
			/>

			<SearchBar
				value={query}
				onChange={setQuery}
				placeholder="Cari hukum tajweed…"
			/>

			{!query && (
				<CollapsibleTOC
					items={tocItems}
					activeId={activeSectionId}
					onSelect={handleSectionSelect}
				/>
			)}

			<div className="space-y-16 px-5">
				{filtered.map((section, i) => (
					<article
						key={section.id}
						ref={(el) => {
							if (el) sectionRefs.current.set(section.id, el);
						}}
						data-section-id={section.id}
						className="scroll-mt-24"
					>
						<ChapterMasthead numeral={i} title={section.title} />

						{section.intro && (
							<p className="mb-6 text-[14px] leading-relaxed text-foreground/75">
								{section.intro}
							</p>
						)}

						{section.rules.map((rule) => (
							<TajweedRuleCard key={rule.id} rule={rule} />
						))}
					</article>
				))}

				{filtered.length === 0 && query && (
					<div className="py-20 text-center">
						<p className="font-display-italic text-base text-muted-foreground">
							Tidak ditemukan hasil untuk &ldquo;{query}&rdquo;
						</p>
					</div>
				)}
			</div>
		</div>
	);
}
