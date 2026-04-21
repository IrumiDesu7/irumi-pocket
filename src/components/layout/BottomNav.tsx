import {
	BookOpen,
	BookText,
	Heart,
	type LucideIcon,
	Sparkles,
} from "lucide-react";
import { StarGlyph } from "@/components/content/ornaments";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

export type TabId = "adab" | "shalat" | "tajweed" | "favorites";

interface Tab {
	id: TabId;
	label: string;
	icon: LucideIcon;
	short: string;
}

const TABS: Tab[] = [
	{ id: "adab", label: "Adab Sunnah", short: "Adab", icon: Sparkles },
	{ id: "shalat", label: "Bacaan Shalat", short: "Shalat", icon: BookOpen },
	{ id: "tajweed", label: "Tajweed", short: "Tajweed", icon: BookText },
	{ id: "favorites", label: "Favorit", short: "Favorit", icon: Heart },
];

interface BottomNavProps {
	activeTab: TabId;
	onTabChange: (tab: TabId) => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
	return (
		<nav
			className={cn(
				"fixed z-50",
				"bottom-0 left-0 right-0",
				"border-t border-border/60",
				"bg-background/85 backdrop-blur-xl",
				"pb-[env(safe-area-inset-bottom)]",
				"lg:top-0 lg:bottom-0 lg:right-auto lg:w-60",
				"lg:flex lg:flex-col",
				"lg:border-t-0 lg:border-r lg:border-border/50 lg:bg-card/60",
				"lg:pb-0",
			)}
		>
			{/* Top hairline gradient — mobile */}
			<div
				aria-hidden
				className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent lg:hidden"
			/>

			{/* Sidebar masthead — desktop only */}
			<div className="relative hidden lg:block lg:px-6 lg:pt-9 lg:pb-6">
				<div className="flex items-baseline gap-2">
					<span className="font-display-italic text-[22px] leading-none text-foreground">
						Irumi
					</span>
					<span className="font-kicker text-[9px] text-gold">
						Pocket
					</span>
				</div>
				<p className="mt-2 font-kicker text-[9px] text-muted-foreground/80">
					Manhaj · Salafus Shalih
				</p>
				<div className="mt-5 flex items-center gap-1.5">
					<div className="h-px flex-1 bg-gradient-to-r from-gold/40 via-border to-transparent" />
					<StarGlyph size={8} className="text-gold/70" />
					<div className="h-px flex-1 bg-gradient-to-l from-gold/40 via-border to-transparent" />
				</div>
			</div>

			{/* Navigation tabs */}
			<div
				className={cn(
					"flex h-16 items-stretch justify-around px-1",
					"lg:relative lg:h-auto lg:flex-col lg:items-stretch lg:justify-start lg:gap-1 lg:px-3",
				)}
			>
				{TABS.map((tab) => {
					const isActive = activeTab === tab.id;
					return (
						<button
							type="button"
							key={tab.id}
							onClick={() => onTabChange(tab.id)}
							aria-pressed={isActive}
							className={cn(
								"group relative flex min-w-0 transition-all duration-300",
								"flex-1 flex-col items-center justify-center gap-1 px-2",
								"lg:flex-none lg:flex-row lg:items-center lg:gap-3 lg:rounded-xl lg:px-3.5 lg:py-2.5",
								isActive
									? "text-primary lg:bg-primary/10"
									: "text-muted-foreground active:scale-95 lg:active:scale-100 lg:hover:bg-muted/40 lg:hover:text-foreground",
							)}
						>
							{/* Mobile active pill — behind icon */}
							{isActive && (
								<span
									aria-hidden
									className="absolute inset-x-4 top-1.5 h-9 rounded-full bg-primary/10 lg:hidden"
								/>
							)}
							{/* Mobile top marker */}
							{isActive && (
								<span
									aria-hidden
									className="absolute left-1/2 top-0 h-[3px] w-8 -translate-x-1/2 rounded-b-full bg-primary lg:hidden"
								/>
							)}
							{/* Desktop active rail */}
							{isActive && (
								<span
									aria-hidden
									className="absolute left-0 top-1/2 hidden h-6 w-[3px] -translate-y-1/2 rounded-r-full bg-primary lg:block"
								/>
							)}
							<tab.icon
								className={cn(
									"relative z-10 transition-all duration-300",
									"size-[19px] lg:size-[17px]",
									isActive && "drop-shadow-[0_0_8px_color-mix(in_oklch,var(--primary)_60%,transparent)]",
								)}
								strokeWidth={isActive ? 2.2 : 1.6}
							/>
							<span
								className={cn(
									"relative z-10 truncate transition-all duration-300",
									"text-[10px] lg:text-[13px]",
									isActive
										? "font-semibold tracking-tight"
										: "font-medium tracking-tight",
								)}
							>
								<span className="lg:hidden">{tab.short}</span>
								<span className="hidden lg:inline">{tab.label}</span>
							</span>
						</button>
					);
				})}
			</div>

			{/* Desktop footer — theme + support */}
			<div className="mt-auto hidden lg:block lg:px-6 lg:pb-6 lg:pt-4">
				<div className="mb-4 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
				<div className="flex items-center justify-between gap-2">
					<div className="flex items-center gap-2">
						<ThemeToggle />
						<span className="font-kicker text-[9px] text-muted-foreground">
							Tema
						</span>
					</div>
					<a
						href="https://saweria.co/irumid"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-1.5 rounded-full border border-gold/25 px-2.5 py-1 text-muted-foreground/70 transition-all duration-200 hover:border-gold/60 hover:bg-gold/10 hover:text-gold"
						aria-label="Dukung Kami"
					>
						<Heart className="size-3" strokeWidth={2} />
						<span className="font-kicker text-[9px]">Dukung</span>
					</a>
				</div>
			</div>
		</nav>
	);
}
