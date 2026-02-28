import {
	BookOpen,
	BookText,
	Heart,
	type LucideIcon,
	Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

export type TabId = "adab" | "shalat" | "tajweed" | "favorites";

interface Tab {
	id: TabId;
	label: string;
	icon: LucideIcon;
}

const TABS: Tab[] = [
	{ id: "adab", label: "Adab Sunnah", icon: Sparkles },
	{ id: "shalat", label: "Bacaan Shalat", icon: BookOpen },
	{ id: "tajweed", label: "Tajweed", icon: BookText },
	{ id: "favorites", label: "Favorit", icon: Heart },
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
				"bg-card/90 backdrop-blur-xl",
				"pb-[env(safe-area-inset-bottom)]",
				"lg:top-0 lg:bottom-0 lg:right-auto lg:w-56",
				"lg:flex lg:flex-col",
				"lg:border-r lg:border-border/50 lg:bg-card lg:backdrop-blur-none",
				"lg:pb-0",
			)}
		>
			{/* Top edge border — mobile only */}
			<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent lg:hidden" />

			{/* Subtle tint — desktop sidebar only */}
			<div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-b from-primary/[0.02] to-transparent lg:block" />

			{/* Sidebar header — desktop only */}
			<div className="relative hidden lg:block lg:px-5 lg:pt-7 lg:pb-5">
				<div className="flex items-center gap-2.5">
					<div className="size-1.5 rotate-45 rounded-[1px] bg-primary/50" />
					<p className="text-[11px] font-bold tracking-[0.25em] text-primary/60 uppercase">
						Irumi Pocket
					</p>
				</div>
				<div className="mt-4 h-px bg-gradient-to-r from-primary/20 via-border/50 to-transparent" />
			</div>

			{/* Navigation tabs */}
			<div
				className={cn(
					"flex h-14 items-center justify-around",
					"lg:relative lg:h-auto lg:flex-col lg:items-stretch lg:justify-start lg:gap-0.5 lg:px-3",
				)}
			>
				{TABS.map((tab) => {
					const isActive = activeTab === tab.id;
					return (
						<button
							type="button"
							key={tab.id}
							onClick={() => onTabChange(tab.id)}
							className={cn(
								"relative flex min-w-0 transition-all duration-200",
								"flex-1 flex-col items-center gap-0.5 px-3 py-1.5",
								"lg:flex-none lg:flex-row lg:items-center lg:gap-3 lg:rounded-lg lg:px-3 lg:py-2.5",
								isActive
									? "text-primary lg:bg-primary/10"
									: "text-muted-foreground active:scale-95 lg:active:scale-100 lg:hover:bg-muted/30 lg:hover:text-foreground",
							)}
						>
							{/* Mobile active indicator — top bar */}
							{isActive && (
								<span className="absolute -top-0.5 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-primary lg:hidden" />
							)}
							{/* Desktop active indicator — left bar */}
							{isActive && (
								<span className="absolute left-0 top-1/2 hidden h-5 w-0.5 -translate-y-1/2 rounded-full bg-primary lg:block" />
							)}
							<tab.icon
								className={cn(
									"size-5 transition-all duration-200",
									isActive && "drop-shadow-[0_0_6px_rgba(45,138,85,0.5)]",
								)}
								strokeWidth={isActive ? 2.5 : 1.75}
							/>
							<span
								className={cn(
									"truncate transition-all duration-200",
									"text-[10px] lg:text-sm",
									isActive ? "font-semibold" : "font-medium",
								)}
							>
								{tab.label}
							</span>
						</button>
					);
				})}
			</div>

			{/* Theme toggle — desktop sidebar bottom */}
			<div className="mt-auto hidden lg:flex lg:items-center lg:gap-2.5 lg:border-t lg:border-border/30 lg:px-5 lg:py-4">
				<ThemeToggle />
				<span className="text-xs text-muted-foreground">Tema</span>
			</div>
		</nav>
	);
}
