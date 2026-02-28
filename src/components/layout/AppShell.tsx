import type { ReactNode } from "react";
import { ThemeToggle } from "./ThemeToggle";

interface AppShellProps {
	children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
	return (
		<div className="relative min-h-dvh bg-background pt-[env(safe-area-inset-top)] lg:pl-56 lg:pt-0">
			<div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-40 bg-gradient-to-b from-primary/[0.03] to-transparent lg:left-56" />
			{/* Theme toggle — mobile only (desktop toggle lives in sidebar) */}
			<div className="fixed right-4 top-[calc(env(safe-area-inset-top)+0.5rem)] z-40 lg:hidden">
				<ThemeToggle />
			</div>
			<main className="relative z-10 mx-auto max-w-3xl pb-20 lg:pb-8">
				{children}
			</main>
		</div>
	);
}
