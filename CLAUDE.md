# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Irumi Pocket is an Islamic learning PWA (Progressive Web App) based on **manhaj Salafi**. It consolidates three source materials — Panduan Adab Sunnah (JSX), Bacaan Shalat (PDF), and Panduan Tajweed (PDF) — into a unified, mobile-first offline reading app. Primary target is iPhone; desktop is secondary.

## Islamic Content Guidelines

This app follows **manhaj Salafi** exclusively. When working with content:
- Only include hadith that are **shahih** (authentic) or **hasan** (good). Never include hadith that are **dhaif** (weak), **maudhu** (fabricated), or of questionable authenticity.
- If there is **khilaf** (scholarly disagreement) among the ulama on a ruling or practice, note it explicitly rather than presenting one opinion as absolute.
- All references must cite their source (hadith book, narrator chain grade). The existing `ref` field in `Dua` types serves this purpose.
- The app includes a report mechanism (`ReportButton` → `mailto:ikalam89@gmail.com`) for users to flag potentially inauthentic content.

## Commands

```bash
pnpm dev        # Dev server with HMR
pnpm build      # TypeScript check + Vite production build
pnpm lint       # ESLint
pnpm preview    # Preview production build locally
```

## Architecture

**No router** — tab navigation is managed via `useState<TabId>` in `App.tsx`. Each tab conditionally renders its page component. Tabs: `adab`, `shalat`, `tajweed`, `favorites`.

**Data layer** — All content lives as static TypeScript arrays in `src/data/`. No API, no database. Content types are defined in `src/lib/types.ts` with discriminated unions (`ContentBlock.t` field: `dua | p | sub | warn | note | highlight | steps`). Tajweed has its own parallel type hierarchy (`TajweedSection` → `TajweedRule` → `TajweedExample`).

**State** — Bookmarks use `useSyncExternalStore` with localStorage (key: `irumi-pocket-bookmarks`), stored as a `Set<string>` of IDs. No global state library.

**PWA** — `vite-plugin-pwa` with Workbox auto-update strategy. Service worker caches all assets matching `**/*.{js,css,html,ico,png,svg,woff2}`. Manifest configured for standalone display, portrait orientation.

**Styling** — Tailwind 4 with CSS variables (oklch color space). Dark-only theme with green accent (`--primary: oklch(0.55 0.14 155)`). shadcn/ui (new-york style) for base components. Arabic text uses self-hosted Amiri font (`font-amiri` class, served from `/public/fonts/`).

## Key Conventions

- Path alias: `@/` → `src/`
- Page components render content from their corresponding data file (e.g., `AdabSunnah.tsx` → `adab-sunnah.ts`)
- Each page has its own search/filter, collapsible TOC, and IntersectionObserver for active chapter tracking
- `DuaCard` is the primary content card — displays Arabic (Amiri font), transliteration, meaning, hadith reference, optional fadl (virtue)
- iOS safe areas handled via `env(safe-area-inset-*)` in AppShell and BottomNav
- Share uses Web Share API with clipboard fallback (`useShare` hook)
- Report content via mailto: URI builder (`useReport` hook → `openReport()`)

## Plan & Progress

See `PLAN.md` for the full implementation plan with a progress tracker checklist. Check it at the start of each session to see what's done and what remains.

## Deployment

Hosted on Netlify. Config in `netlify.toml` — builds with `pnpm build`, publishes `dist/`, SPA fallback redirect configured.
