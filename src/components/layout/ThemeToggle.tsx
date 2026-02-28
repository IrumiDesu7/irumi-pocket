import { Monitor, Moon, Sun } from "lucide-react";
import type { Theme } from "@/components/theme-provider";
import { useTheme } from "@/components/theme-provider";

const CYCLE: Theme[] = ["dark", "light", "system"];

const ICONS = {
	dark: Sun,
	light: Moon,
	system: Monitor,
} as const;

const LABELS: Record<Theme, string> = {
	dark: "Beralih ke mode terang",
	light: "Beralih ke mode sistem",
	system: "Beralih ke mode gelap",
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
			className="flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground active:scale-90"
		>
			<Icon className="size-[18px]" />
		</button>
	);
}
