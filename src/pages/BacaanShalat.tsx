import { BACAAN_SHALAT_CHAPTERS } from "@/data/bacaan-shalat";
import { ChapterPage } from "./ChapterPage";

export function BacaanShalat() {
	return (
		<ChapterPage
			chapters={BACAAN_SHALAT_CHAPTERS}
			kicker="Panduan · Bab II"
			title="Bacaan Shalat"
			subtitle="Lengkap sesuai sunnah"
			searchPlaceholder="Cari bab atau bagian…"
		/>
	);
}
