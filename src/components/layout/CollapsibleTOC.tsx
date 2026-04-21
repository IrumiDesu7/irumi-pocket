import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { StarGlyph } from "@/components/content/ornaments";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import { cn } from "@/lib/utils";

export interface TOCItem {
	id: string | number;
	title: string;
	numeral: string | number;
}

interface CollapsibleTOCProps {
	items: TOCItem[];
	activeId: string | number | null;
	onSelect: (id: string | number) => void;
}

export function CollapsibleTOC({
	items,
	activeId,
	onSelect,
}: CollapsibleTOCProps) {
	const isDesktop = useIsDesktop();
	const [isOpen, setIsOpen] = useState(isDesktop);

	return (
		<div className="mx-4 mb-8 overflow-hidden rounded-2xl border border-border/70 bg-card/60">
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="flex w-full items-center justify-between px-4 py-3.5 text-left transition-colors active:bg-muted/30"
				aria-expanded={isOpen}
			>
				<div className="flex items-center gap-3">
					<StarGlyph size={12} className="text-gold" />
					<div>
						<p className="font-kicker text-[9px] text-muted-foreground">
							Daftar Isi
						</p>
						<p className="font-display-italic text-[15px] leading-tight text-foreground">
							{items.length} bab
						</p>
					</div>
				</div>
				<ChevronDown
					className={cn(
						"size-4 text-muted-foreground transition-transform duration-300",
						isOpen && "rotate-180",
					)}
					strokeWidth={2}
				/>
			</button>

			<div
				className="grid"
				style={{
					gridTemplateRows: isOpen ? "1fr" : "0fr",
					transition: "grid-template-rows 320ms cubic-bezier(0.2, 0.7, 0.2, 1)",
				}}
			>
				<div className="overflow-hidden">
					<div className="border-t border-border/60 px-2 py-2">
						{items.map((item) => {
							const isActive = activeId === item.id;
							return (
								<button
									type="button"
									key={item.id}
									onClick={() => {
										onSelect(item.id);
										setIsOpen(false);
									}}
									className={cn(
										"group flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-all",
										isActive
											? "bg-primary/10 text-primary"
											: "text-muted-foreground hover:bg-muted/40 hover:text-foreground",
									)}
								>
									<span
										className={cn(
											"chapter-numeral flex-none text-[16px] min-w-[1.6ch] text-right transition-colors",
											isActive
												? "text-primary"
												: "text-muted-foreground/70 group-hover:text-foreground",
										)}
									>
										{item.numeral}
									</span>
									<span className="flex-1 truncate text-[13.5px]">
										{item.title}
									</span>
									{isActive && (
										<span
											aria-hidden
											className="size-1 flex-none rounded-full bg-primary"
										/>
									)}
								</button>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
