import { ADAB_SUNNAH_CHAPTERS } from "@/data/adab-sunnah";
import { ChapterPage } from "./ChapterPage";

export function AdabSunnah() {
	return (
		<ChapterPage
			chapters={ADAB_SUNNAH_CHAPTERS}
			kicker="Panduan · Bab I"
			title="Adab & Sunnah"
			subtitle="Berdasarkan hadits shahih"
			searchPlaceholder="Cari bab atau bagian…"
		/>
	);
}
