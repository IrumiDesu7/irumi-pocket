interface SectionHeaderProps {
  heading: string;
}

export function SectionHeader({ heading }: SectionHeaderProps) {
  return (
    <div className="mb-3 mt-7 first:mt-0">
      <h3 className="text-[17px] font-semibold leading-tight text-primary">
        {heading}
      </h3>
      <div className="mt-1.5 flex items-center gap-1.5">
        <div className="h-0.5 w-8 rounded-full bg-primary/50" />
        <div className="size-1 rounded-full bg-primary/30" />
      </div>
    </div>
  );
}
