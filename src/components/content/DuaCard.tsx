import type { Dua } from "@/lib/types";

interface DuaCardProps {
  dua: Dua;
}

export function DuaCard({ dua }: DuaCardProps) {
  return (
    <div className="my-4">
      <div className="relative rounded-lg bg-arabic-bg border border-arabic-border px-5 py-5 overflow-hidden">
        <div className="absolute inset-y-2 right-0 w-[3px] rounded-l-full bg-primary/70" />
        <p
          className="font-amiri text-[22px] leading-[2.1] text-foreground/85 text-right pr-1.5"
          dir="rtl"
        >
          {dua.ar}
        </p>
      </div>

      {dua.latin && (
        <p className="mt-2.5 text-[13px] italic leading-relaxed text-primary/70">
          {dua.latin}
        </p>
      )}

      <p className="mt-2 text-sm leading-relaxed text-foreground/85">
        <span className="font-semibold">Artinya:</span> &ldquo;{dua.arti}
        &rdquo;
      </p>

      <p className="mt-1.5 text-[11px] leading-snug text-muted-foreground">
        {dua.ref}
      </p>

      {dua.fadl && (
        <div className="mt-3 rounded-md border-l-[3px] border-gold bg-gold/10 px-3.5 py-2.5">
          <p className="text-[13px] leading-relaxed text-gold">
            <span className="font-semibold">{"\u2726"} Keutamaan:</span>{" "}
            {dua.fadl}
          </p>
        </div>
      )}
    </div>
  );
}
