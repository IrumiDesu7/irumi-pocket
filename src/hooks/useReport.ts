const REPORT_EMAIL = "ikalam89@gmail.com";

interface ReportContext {
  materialTitle: string;
  chapterTitle?: string;
  sectionTitle?: string;
  duaAr?: string;
  duaRef?: string;
}

export function buildReportMailto(ctx: ReportContext): string {
  const subject = `[Laporan] ${ctx.materialTitle}${ctx.chapterTitle ? ` — ${ctx.chapterTitle}` : ""}`;

  const lines = [`Assalamu'alaikum,`, "", `Saya ingin melaporkan konten berikut:`];
  lines.push("", `Materi: ${ctx.materialTitle}`);
  if (ctx.chapterTitle) lines.push(`Bab: ${ctx.chapterTitle}`);
  if (ctx.sectionTitle) lines.push(`Bagian: ${ctx.sectionTitle}`);
  if (ctx.duaAr) lines.push("", `Teks Arab: ${ctx.duaAr}`);
  if (ctx.duaRef) lines.push(`Referensi: ${ctx.duaRef}`);
  lines.push("", "Alasan laporan:", "[Tulis alasan di sini]", "", "Jazakallahu khairan.");

  const body = lines.join("\n");
  return `mailto:${REPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function openReport(ctx: ReportContext): void {
  window.location.href = buildReportMailto(ctx);
}
