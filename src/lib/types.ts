export interface Dua {
  id: string;
  ar: string;
  latin?: string;
  arti: string;
  ref: string;
  fadl?: string;
}

export type ContentBlock =
  | { t: "dua"; dua: Dua }
  | { t: "p"; text: string; src?: string }
  | { t: "sub"; text: string }
  | { t: "warn"; text: string }
  | { t: "note"; text: string }
  | { t: "highlight"; text: string }
  | { t: "steps"; items: string[] };

export interface Section {
  heading: string;
  content: ContentBlock[];
}

export interface Chapter {
  id: number;
  title: string;
  sub: string;
  sections: Section[];
}

export interface TajweedExample {
  ayat: string;
  latin: string;
  keterangan: string;
}

export interface TajweedRule {
  id: string;
  title: string;
  huruf?: string;
  caraBaca: string;
  examples: TajweedExample[];
}

export interface TajweedSection {
  id: string;
  title: string;
  intro?: string;
  rules: TajweedRule[];
}

export type MaterialId = "adab" | "shalat" | "tajweed";

export interface Material {
  id: MaterialId;
  title: string;
  chapters: Chapter[];
}

export interface TajweedMaterial {
  id: "tajweed";
  title: string;
  sections: TajweedSection[];
}
