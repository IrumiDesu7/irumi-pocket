import { Monitor, Moon, Sun } from "lucide-react";
import type { Theme } from "@/components/theme-provider";
import { useTheme } from "@/components/theme-provider";

const CYCLE: Theme[] = ["dark", "light", "system"];

const ICONS = {
	dark: Moon,
	light: Sun,
	system: Monitor,
} as const;

const LABELS: Record<Theme, string> = {
	dark: "Mode gelap aktif — ketuk untuk mode terang",
	light: "Mode terang aktif — ketuk untuk mode sistem",
	system: "Mode sistem aktif — ketuk untuk mode gelap",
};

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	const next = CYCLE[(CYCLE.indexOf(theme) + 1) % CYCLE.length];
	const Icon = ICONS[theme];

	return (
		<button
			type="button"
			onClick={() => setTheme(next)}
			aria-label={LABELS[theme]}
			title={LABELS[theme]}
			className="group relative flex size-8 items-center justify-center rounded-full text-muted-foreground transition-all duration-300 hover:bg-muted/60 hover:text-foreground active:scale-90"
		>
			<Icon className="size-[16px]" strokeWidth={1.75} />
		</button>
	);
}
