import { BookOpen, BookText, Heart, type LucideIcon, Sparkles } from "lucide-react";
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
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/80 backdrop-blur-lg pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-center justify-around h-14">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "flex flex-col items-center gap-0.5 px-3 py-1.5 transition-colors min-w-0 flex-1",
                isActive ? "text-primary" : "text-muted-foreground",
              )}
            >
              <tab.icon className="size-5" strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium truncate">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
