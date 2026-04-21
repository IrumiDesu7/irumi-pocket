import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChapterMasthead } from "@/components/content/ChapterMasthead";
import { ContentBlock } from "@/components/content/ContentBlock";
import { PageMasthead } from "@/components/content/PageMasthead";
import { SearchBar } from "@/components/content/SearchBar";
import { SectionHeader } from "@/components/content/SectionHeader";
import { CollapsibleTOC } from "@/components/layout/CollapsibleTOC";
import type { Chapter } from "@/lib/types";

interface ChapterPageProps {
	chapters: Chapter[];
	kicker: string;
	title: string;
	subtitle: string;
	searchPlaceholder: string;
}

export function ChapterPage({
	chapters,
	kicker,
	title,
	subtitle,
	searchPlaceholder,
}: ChapterPageProps) {
	const [activeChapterId, setActiveChapterId] = useState<number | null>(null);
	const [query, setQuery] = useState("");
	const chapterRefs = useRef<Map<number, HTMLElement>>(new Map());

	const filtered = useMemo(() => {
		if (!query.trim()) return chapters;
		const q = query.toLowerCase();
		return chapters.filter(
			(ch) =>
				ch.title.toLowerCase().includes(q) ||
				ch.sub.toLowerCase().includes(q) ||
				ch.sections.some((s) => s.heading.toLowerCase().includes(q)),
		);
	}, [chapters, query]);

	const tocItems = useMemo(
		() =>
			chapters.map((ch) => ({
				id: ch.id,
				title: ch.title,
				numeral: ch.id,
			})),
		[chapters],
	);

	const handleChapterSelect = useCallback((id: string | number) => {
		const el = chapterRefs.current.get(Number(id));
		if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						const id = Number(entry.target.getAttribute("data-chapter-id"));
						if (!Number.isNaN(id)) setActiveChapterId(id);
					}
				}
			},
			{ rootMargin: "-10% 0px -70% 0px", threshold: 0 },
		);

		for (const el of chapterRefs.current.values()) observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<div className="pb-8 pt-8 lg:pt-14">
			<PageMasthead kicker={kicker} title={title} subtitle={subtitle} />

			<SearchBar
				value={query}
				onChange={setQuery}
				placeholder={searchPlaceholder}
			/>

			{!query && (
				<CollapsibleTOC
					items={tocItems}
					activeId={activeChapterId}
					onSelect={handleChapterSelect}
				/>
			)}

			<div className="space-y-16 px-5">
				{filtered.map((chapter) => (
					<article
						key={chapter.id}
						ref={(el) => {
							if (el) chapterRefs.current.set(chapter.id, el);
						}}
						data-chapter-id={chapter.id}
						className="scroll-mt-24"
					>
						<ChapterMasthead
							numeral={chapter.id}
							title={chapter.title}
							subtitle={chapter.sub}
						/>

						{chapter.sections.map((section) => (
							<div key={section.heading} className="mb-6">
								<SectionHeader heading={section.heading} />
								{section.content.map((block, bi) => (
									<ContentBlock
										key={`${section.heading}-${bi}`}
										block={block}
									/>
								))}
							</div>
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
