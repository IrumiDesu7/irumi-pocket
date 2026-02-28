import {
  BookOpen,
  BookText,
  Heart,
  type LucideIcon,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

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
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-xl pb-[env(safe-area-inset-bottom)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="flex h-14 items-center justify-around">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "relative flex min-w-0 flex-1 flex-col items-center gap-0.5 px-3 py-1.5 transition-all duration-200",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground active:scale-95",
              )}
            >
              {isActive && (
                <span className="absolute -top-0.5 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-primary" />
              )}
              <tab.icon
                className={cn(
                  "size-5 transition-all duration-200",
                  isActive &&
                    "drop-shadow-[0_0_6px_rgba(45,138,85,0.5)]",
                )}
                strokeWidth={isActive ? 2.5 : 1.75}
              />
              <span
                className={cn(
                  "truncate text-[10px] transition-all duration-200",
                  isActive ? "font-semibold" : "font-medium",
                )}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
