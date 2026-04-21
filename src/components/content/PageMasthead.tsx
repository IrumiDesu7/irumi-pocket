import { OrnamentDivider } from "./ornaments";

interface PageMastheadProps {
	kicker: string;
	title: string;
	subtitle?: string;
}

export function PageMasthead({ kicker, title, subtitle }: PageMastheadProps) {
	return (
		<header className="relative mb-8 px-5 pt-4 text-center">
			<p className="font-kicker text-[9.5px] text-gold animate-rise-in">
				{kicker}
			</p>

			<h1
				className="mt-3 font-display text-[32px] font-medium leading-[1.05] tracking-tight text-foreground animate-unfurl lg:text-[42px]"
				style={{ animationDelay: "80ms" }}
			>
				{title}
			</h1>

			{subtitle && (
				<p
					className="mt-2 font-display-italic text-[15px] text-muted-foreground animate-rise-in lg:text-[17px]"
					style={{ animationDelay: "200ms" }}
				>
					{subtitle}
				</p>
			)}

			<div
				className="mt-5 mx-auto w-[120px] animate-ornament-fade"
				style={{ animationDelay: "320ms" }}
			>
				<OrnamentDivider railClassName="from-transparent to-gold/50" />
			</div>
		</header>
	);
}
