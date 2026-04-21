import type { ReactNode } from "react";
import { Heart } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

interface AppShellProps {
	children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
	return (
		<div className="relative min-h-dvh bg-background pt-[env(safe-area-inset-top)] lg:pl-60 lg:pt-0">
			{/* Ambient atmosphere — radial gradient mesh */}
			<div
				aria-hidden
				className="pointer-events-none fixed inset-0 z-0 bg-grain"
			/>
			{/* Arabesque ornament — barely-there geometric texture */}
			<div
				aria-hidden
				className="pointer-events-none fixed inset-0 z-0 arabesque-pattern opacity-[0.35] dark:opacity-[0.5]"
			/>
			{/* Soft glow at top-center — catches the eye at page start */}
			<div
				aria-hidden
				className="pointer-events-none fixed inset-x-0 top-0 z-0 h-72 bg-[radial-gradient(ellipse_at_top,var(--primary)_0%,transparent_55%)] opacity-[0.08] lg:left-60"
			/>

			{/* Top-right controls — mobile only */}
			<div className="fixed right-4 top-[calc(env(safe-area-inset-top)+0.5rem)] z-40 flex items-center gap-1 lg:hidden">
				<a
					href="https://saweria.co/irumid"
					target="_blank"
					rel="noopener noreferrer"
					className="flex size-8 items-center justify-center rounded-full text-muted-foreground/50 transition-all duration-200 active:scale-90 hover:text-gold hover:bg-gold/10"
					aria-label="Dukung Kami"
				>
					<Heart className="size-[15px]" strokeWidth={1.75} />
				</a>
				<ThemeToggle />
			</div>

			<main className="relative z-10 mx-auto max-w-3xl pb-24 lg:pb-12">
				{children}
			</main>
		</div>
	);
}
