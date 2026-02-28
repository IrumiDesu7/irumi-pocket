# Irumi Pocket - Islamic Learning PWA

## Session Instructions

**After completing each task, update the Progress Tracker below:**
1. Change `[ ]` to `[x]` for completed items
2. Add the date completed (e.g., `[x] ~~2026-02-28~~`)
3. If a task is partially done, add a note below it describing what's left
4. If new tasks are discovered during implementation, add them under the appropriate phase

This ensures the next session can pick up exactly where the last one left off.

---

## Progress Tracker

### Phase 1: App Shell & Navigation
- [x] ~~2026-02-28~~ Install `vite-plugin-pwa` dependency
- [x] ~~2026-02-28~~ Configure dark theme in `index.css`
- [x] ~~2026-02-28~~ Update `index.html` with PWA meta tags
- [x] ~~2026-02-28~~ Configure `vite.config.ts` with PWA plugin
- [x] ~~2026-02-28~~ Create `src/lib/types.ts`
- [x] ~~2026-02-28~~ Create `src/components/layout/AppShell.tsx`
- [x] ~~2026-02-28~~ Create `src/components/layout/BottomNav.tsx`
- [x] ~~2026-02-28~~ Replace `src/App.tsx` with app shell + tab routing

### Phase 2: Content Components
- [ ] Convert `panduan-adab-sunnah.jsx` → `src/data/adab-sunnah.ts`
- [ ] Create `src/components/content/DuaCard.tsx`
- [ ] Create `src/components/content/SectionHeader.tsx`
- [ ] Create `src/components/content/ContentBlock.tsx`
- [ ] Create `src/components/layout/CollapsibleTOC.tsx`
- [ ] Create `src/pages/AdabSunnah.tsx`

### Phase 3: PDF Content Extraction
- [ ] Extract `bacaan-shalat.pdf` → `src/data/bacaan-shalat.ts`
- [ ] Extract `panduan_tajweed.pdf` → `src/data/tajweed.ts`
- [ ] Create `src/components/content/TajweedRuleCard.tsx`
- [ ] Create `src/pages/BacaanShalat.tsx`
- [ ] Create `src/pages/Tajweed.tsx`

### Phase 4: Features
- [ ] Create `src/hooks/useBookmarks.ts`
- [ ] Create `src/components/content/BookmarkButton.tsx`
- [ ] Create `src/pages/Favorites.tsx`
- [ ] Create `src/hooks/useShare.ts`
- [ ] Create `src/components/features/ShareSheet.tsx`
- [ ] Add quick filter/search within each material page

### Phase 5: Polish & Deploy
- [ ] Self-host Amiri font
- [ ] Add PWA icons and apple splash screens
- [ ] Test offline functionality
- [ ] Remove unused Vite template files
- [ ] Deploy to Netlify

---

## Context

Personal "pocket" reading app for Islamic learning materials based on Salafi manhaj. Consolidates three existing materials (Panduan Adab Sunnah JSX, Bacaan Shalat PDF, Panduan Tajweed PDF) into a unified, mobile-first PWA that works offline. Primary platform is iPhone, with desktop as secondary.

**Problem**: Materials are scattered across different formats (JSX, PDFs) and not optimized for mobile reading on-the-go.

**Goal**: A beautiful, offline-capable PWA with consistent reading experience across all materials, bookmark functionality, and native mobile feel.

---

## Interview Summary

| Decision | Choice |
|----------|--------|
| Primary usage | Both quick reference mid-action AND leisure study |
| PDF handling | Convert to structured TypeScript data (like adab-sunnah.jsx) |
| Offline | PWA with service worker (must work offline) |
| Navigation | Bottom tabs (iOS-native feel) |
| Tabs | Adab Sunnah, Bacaan Shalat, Tajweed, Favorites |
| Typography | Fixed size optimized for mobile, Amiri font for Arabic |
| Progress tracking | Bookmark specific duas (not full progress) |
| Theme | Darker/muted with green accent (#1a6b3c) |
| Notifications | None (reading reference only) |
| Search | Quick filter by chapter/section only |
| Content organization | Collapsible TOC per material |
| Tab icons | Lucide icons |
| Sharing | Native share sheet for duas |
| Hosting | Netlify |

---

## Design Approach

All UI components must be built using the **frontend-design** skill to ensure distinctive, production-grade design quality that avoids generic AI aesthetics. This applies to both layout components (AppShell, BottomNav, CollapsibleTOC) and content components (DuaCard, SectionHeader, ContentBlock, TajweedRuleCard, etc.).

---

## Technical Approach

### 1. Project Structure

```
src/
├── components/
│   ├── ui/                    # shadcn components (Button, Sheet, Tabs, etc.)
│   ├── layout/
│   │   ├── BottomNav.tsx      # Bottom tab navigation
│   │   ├── AppShell.tsx       # PWA shell with safe areas
│   │   └── CollapsibleTOC.tsx # Table of contents component
│   ├── content/
│   │   ├── DuaCard.tsx        # Reusable dua display (Arabic, latin, meaning, ref)
│   │   ├── TajweedRuleCard.tsx # Tajweed rule with examples table
│   │   ├── SectionHeader.tsx  # Chapter/section headers
│   │   ├── ContentBlock.tsx   # Handles different content types (p, note, warn, steps)
│   │   └── BookmarkButton.tsx # Toggle bookmark state
│   └── features/
│       └── ShareSheet.tsx     # Native share integration
├── pages/
│   ├── AdabSunnah.tsx         # Main adab content view
│   ├── BacaanShalat.tsx       # Prayer readings view
│   ├── Tajweed.tsx            # Tajweed rules view
│   └── Favorites.tsx          # Bookmarked items
├── data/
│   ├── adab-sunnah.ts         # Converted from JSX
│   ├── bacaan-shalat.ts       # Extracted from PDF
│   └── tajweed.ts             # Extracted from PDF
├── hooks/
│   ├── useBookmarks.ts        # LocalStorage bookmark management
│   └── useShare.ts            # Web Share API wrapper
├── lib/
│   ├── utils.ts               # Existing shadcn utils
│   └── types.ts               # Content type definitions
└── styles/
    └── theme.ts               # Dark theme with green accent
```

### 2. Data Structure (TypeScript)

```typescript
// lib/types.ts

// === SHARED TYPES ===
interface Dua {
  id: string;
  ar: string;           // Arabic text
  latin?: string;       // Transliteration
  arti: string;         // Indonesian meaning
  ref: string;          // Hadith reference
  fadl?: string;        // Virtue/benefit
}

interface ContentBlock {
  t: 'dua' | 'p' | 'sub' | 'warn' | 'note' | 'highlight' | 'steps';
  // Union of possible content shapes
}

interface Section {
  heading: string;
  content: ContentBlock[];
}

interface Chapter {
  id: number;
  title: string;
  sub: string;
  sections: Section[];
}

// === TAJWEED-SPECIFIC TYPES ===
interface TajweedExample {
  ayat: string;         // Arabic example
  latin: string;        // Transliteration
  keterangan: string;   // Explanation
}

interface TajweedRule {
  id: string;
  title: string;
  huruf?: string;       // Letters involved (e.g., "ء هـ ع ح غ خ")
  caraBaca: string;     // How to pronounce
  examples: TajweedExample[];
}

interface TajweedSection {
  id: string;
  title: string;
  intro?: string;       // Introductory explanation
  rules: TajweedRule[];
}

// === MATERIALS ===
interface Material {
  id: 'adab' | 'shalat' | 'tajweed';
  title: string;
  chapters: Chapter[];  // For adab & shalat
  sections?: TajweedSection[]; // For tajweed
}
```

### 2.1 PDF Content Analysis

**bacaan-shalat.pdf** (11 sections):
1. Takbiratul Ihram
2. Doa Istiftah (3 variations)
3. Isti'adzah, Basmalah, Al-Fatihah
4. Rukuk
5. I'tidal (Bangkit dari Rukuk)
6. Sujud
7. Duduk Antara Dua Sujud
8. Sujud Kedua & Bangkit
9. Tasyahhud Awal
10. Tasyahhud Akhir (Tahiyyat + Shalawat + Isti'adzah + Doa)
11. Salam + Dzikir Ba'da Shalat

**panduan_tajweed.pdf** (8 sections):
0. Pengenalan: Nun Mati & Tanwin
1. Hukum Nun Mati & Tanwin (5 sub-rules: Idzhar, Idgham Bighunnah, Idgham Bilaghunnah, Iqlab, Ikhfa)
2. Hukum Mim Mati (3 sub-rules: Ikhfa Syafawi, Idgham Mimi, Idzhar Syafawi)
3. Hukum Mad (4 types: Thabi'i, Wajib Muttashil, Jaiz Munfashil, Aridh Lissukun)
4. Ghunnah (Dengung)
5. Qalqalah (Memantul)
6. Tanda Waqaf (Berhenti)
7. Adab Membaca Al-Qur'an

### 3. Theme Configuration

Dark/muted theme with green accent:

```typescript
// styles/theme.ts
const theme = {
  background: '#0f0f0f',
  surface: '#1a1a1a',
  surfaceElevated: '#252525',
  text: {
    primary: '#e8e8e8',
    secondary: '#a0a0a0',
    muted: '#666666',
  },
  accent: {
    green: '#2d8a55',      // Primary accent
    greenMuted: '#1a6b3c', // Darker green
    gold: '#c9a94e',       // Highlight
  },
  arabic: {
    background: '#1a2e22', // Muted green tint
    border: '#2d4a38',
  }
};
```

### 4. PWA Configuration

- **vite-plugin-pwa**: Generate service worker and manifest
- **Workbox**: Cache strategies for offline
- **Manifest**: App name, icons, theme color, display: standalone

### 5. Key Components

#### BottomNav.tsx
- 4 tabs: Adab Sunnah, Bacaan Shalat, Tajweed, Favorites
- Lucide icons: BookOpen, HandsPraying (or similar), BookText, Heart
- Active state with green accent
- Safe area padding for iPhone notch

#### DuaCard.tsx
- Arabic text in Amiri font (mobile-optimized size ~20px)
- Transliteration in italic
- Meaning with "Artinya:" prefix
- Hadith reference in muted text
- Optional fadl (virtue) box
- Bookmark button (top-right)
- Share button (bottom)

#### CollapsibleTOC.tsx
- Expandable chapter list
- Current chapter highlighted
- Smooth scroll to section on tap

#### TajweedRuleCard.tsx
- Rule title with huruf involved
- "Cara baca" explanation
- Examples table (Arabic | Transliteration | Keterangan)
- Tips box for practical advice
- Matches Tajweed PDF visual structure

#### useBookmarks.ts
- Save bookmark IDs to localStorage
- `{ materialId, chapterId, duaId }` structure
- Hydrate bookmarks on app load

---

## Implementation Phases

### Phase 1: App Shell & Navigation
1. Install `vite-plugin-pwa` dependency
2. Configure dark theme in `index.css` (replace default shadcn light theme with green-accent dark theme)
3. Update `index.html` with PWA meta tags, viewport, apple-touch-icon
4. Configure `vite.config.ts` with PWA plugin
5. Create `src/lib/types.ts` with all TypeScript interfaces
6. Create `src/components/layout/AppShell.tsx` with safe areas
7. Create `src/components/layout/BottomNav.tsx` with 4 tabs
8. Replace `src/App.tsx` with app shell + tab routing

### Phase 2: Content Components
1. Convert `panduan-adab-sunnah.jsx` data to `src/data/adab-sunnah.ts`
2. Create `src/components/content/DuaCard.tsx`
3. Create `src/components/content/SectionHeader.tsx`
4. Create `src/components/content/ContentBlock.tsx`
5. Create `src/components/layout/CollapsibleTOC.tsx`
6. Create `src/pages/AdabSunnah.tsx` with full content rendering

### Phase 3: PDF Content Extraction
1. Extract `bacaan-shalat.pdf` content → `src/data/bacaan-shalat.ts`
2. Extract `panduan_tajweed.pdf` content → `src/data/tajweed.ts`
3. Create `src/components/content/TajweedRuleCard.tsx`
4. Create `src/pages/BacaanShalat.tsx`
5. Create `src/pages/Tajweed.tsx`

### Phase 4: Features
1. Create `src/hooks/useBookmarks.ts` with localStorage
2. Create `src/components/content/BookmarkButton.tsx`
3. Create `src/pages/Favorites.tsx` showing all bookmarked items
4. Create `src/hooks/useShare.ts` (Web Share API + clipboard fallback)
5. Create `src/components/features/ShareSheet.tsx`
6. Add quick filter/search within each material page

### Phase 5: Polish & Deploy
1. Self-host Amiri font (download + preload)
2. Add PWA icons and apple splash screens
3. Test offline functionality
4. Remove unused Vite template files (`App.css`, `assets/react.svg`, etc.)
5. Deploy to Netlify

---

## Files to Modify/Create

### Existing Files to Modify
- `src/App.tsx` - Replace Vite template with app shell
- `src/index.css` - Add dark theme CSS variables with green accent
- `vite.config.ts` - Add PWA plugin
- `package.json` - Add vite-plugin-pwa dependency
- `index.html` - PWA meta tags, viewport config, Amiri font

### New Files to Create
- `src/lib/types.ts` - TypeScript interfaces for all content
- `src/data/adab-sunnah.ts` - Convert from panduan-adab-sunnah.jsx (13 chapters)
- `src/data/bacaan-shalat.ts` - Extract from PDF (11 sections)
- `src/data/tajweed.ts` - Extract from PDF (8 sections with sub-rules)
- `src/components/layout/BottomNav.tsx` - 4-tab navigation
- `src/components/layout/AppShell.tsx` - PWA shell with safe areas
- `src/components/layout/CollapsibleTOC.tsx` - Expandable table of contents
- `src/components/content/DuaCard.tsx` - Arabic text with translation & reference
- `src/components/content/TajweedRuleCard.tsx` - Rule explanation with examples table
- `src/components/content/SectionHeader.tsx` - Chapter/section headers
- `src/components/content/ContentBlock.tsx` - p, note, warn, steps, highlight blocks
- `src/components/content/BookmarkButton.tsx` - Bookmark toggle
- `src/components/features/ShareSheet.tsx` - Web Share API wrapper
- `src/pages/AdabSunnah.tsx` - Daily adab content
- `src/pages/BacaanShalat.tsx` - Prayer readings
- `src/pages/Tajweed.tsx` - Tajweed rules reference
- `src/pages/Favorites.tsx` - All bookmarked items
- `src/hooks/useBookmarks.ts` - localStorage bookmark state
- `src/hooks/useShare.ts` - Share API with clipboard fallback

### Files to Delete (Vite template cleanup)
- `src/App.css`
- `src/assets/react.svg`
- `public/vite.svg`

### Dependencies to Add
- `vite-plugin-pwa`

---

## Verification

### Local Testing
1. `pnpm dev` - Run development server
2. Test on iPhone via localhost (same network)
3. Test offline by stopping server
4. Verify bookmarks persist across refreshes
5. Test share functionality on mobile

### PWA Testing
1. Lighthouse PWA audit
2. Install app to home screen
3. Test app launch from home screen
4. Verify offline caching works

### Cross-Device
1. Test on iPhone Safari
2. Test on desktop Chrome
3. Verify responsive layout

---

## Notes

- **Amiri Font**: Self-host for offline (not Google Fonts CDN)
- **iOS Safe Areas**: Use `env(safe-area-inset-*)` for bottom nav
- **PDF Extraction**: Content already analyzed, will be converted to TypeScript
- **Share API**: Fallback to clipboard copy on desktop
- **Source Materials**: `panduan-adab-sunnah.jsx`, `bacaan-shalat.pdf`, `panduan_tajweed.pdf` in project root
