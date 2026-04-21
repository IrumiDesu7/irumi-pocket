import { Search, X } from "lucide-react";

interface SearchBarProps {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
}

export function SearchBar({
	value,
	onChange,
	placeholder = "Cari…",
}: SearchBarProps) {
	return (
		<div className="mx-4 mb-6">
			<div className="group relative">
				<div className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/50 transition-colors group-focus-within:text-primary">
					<Search className="size-[15px]" strokeWidth={2} />
				</div>
				<input
					type="text"
					value={value}
					onChange={(e) => onChange(e.target.value)}
					placeholder={placeholder}
					className="w-full rounded-full border border-border/70 bg-card/80 py-2.5 pl-10 pr-10 text-[14px] text-foreground placeholder:font-display-italic placeholder:text-muted-foreground/60 transition-all focus:border-primary/50 focus:bg-card focus:outline-none focus:ring-2 focus:ring-primary/15"
				/>
				{value && (
					<button
						type="button"
						onClick={() => onChange("")}
						aria-label="Hapus pencarian"
						className="absolute right-2 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
					>
						<X className="size-[14px]" strokeWidth={2} />
					</button>
				)}
			</div>
		</div>
	);
}
