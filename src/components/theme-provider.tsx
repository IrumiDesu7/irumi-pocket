import { createContext, useContext, useEffect, useState } from "react";

export type Theme = "dark" | "light" | "system";

interface ThemeProviderProps {
	children: React.ReactNode;
	defaultTheme?: Theme;
	storageKey?: string;
}

interface ThemeProviderState {
	theme: Theme;
	resolvedTheme: "dark" | "light";
	setTheme: (theme: Theme) => void;
}

const THEME_COLORS = {
	dark: "#1e1e1e",
	light: "#fafafa",
} as const;

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
	undefined,
);

function getSystemTheme(): "dark" | "light" {
	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
}

function resolveTheme(theme: Theme): "dark" | "light" {
	return theme === "system" ? getSystemTheme() : theme;
}

function applyTheme(resolved: "dark" | "light"): void {
	const root = document.documentElement;
	root.classList.remove("light", "dark");
	root.classList.add(resolved);
	root.style.colorScheme = resolved;

	const meta = document.querySelector('meta[name="theme-color"]');
	if (meta) meta.setAttribute("content", THEME_COLORS[resolved]);
}

export function ThemeProvider({
	children,
	defaultTheme = "system",
	storageKey = "irumi-pocket-theme",
}: ThemeProviderProps) {
	const [theme, setThemeState] = useState<Theme>(
		() => (localStorage.getItem(storageKey) as Theme) || defaultTheme,
	);
	const [resolvedTheme, setResolvedTheme] = useState<"dark" | "light">(() =>
		resolveTheme(theme),
	);

	useEffect(() => {
		const resolved = resolveTheme(theme);
		setResolvedTheme(resolved);
		applyTheme(resolved);
	}, [theme]);

	useEffect(() => {
		if (theme !== "system") return;

		const mq = window.matchMedia("(prefers-color-scheme: dark)");
		const handler = () => {
			const resolved = getSystemTheme();
			setResolvedTheme(resolved);
			applyTheme(resolved);
		};
		mq.addEventListener("change", handler);
		return () => mq.removeEventListener("change", handler);
	}, [theme]);

	const setTheme = (t: Theme) => {
		localStorage.setItem(storageKey, t);
		setThemeState(t);
	};

	return (
		<ThemeProviderContext.Provider value={{ theme, resolvedTheme, setTheme }}>
			{children}
		</ThemeProviderContext.Provider>
	);
}

export function useTheme(): ThemeProviderState {
	const context = useContext(ThemeProviderContext);
	if (!context) throw new Error("useTheme must be used within a ThemeProvider");
	return context;
}
