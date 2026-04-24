# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Next Friday 13th** is a React 19 + TypeScript SPA that displays when the next Friday the 13th will occur, along with an almanac, lore section, and scrolling ticker. Deployed as a static site at `www.nextfriday13th.com`.

## Common Commands

```bash
npm run dev        # Start dev server at http://localhost:5173
npm run build      # Type-check (tsc -b) then bundle (vite build) → dist/
npm run preview    # Serve the production build locally
npm run typecheck  # Type-check only, no emit
```

## Architecture

### Technology Stack

- **React 19** with `<StrictMode>` — entry point is `src/main.tsx`
- **TypeScript** — `tsconfig.app.json` covers `src/`, `tsconfig.node.json` covers `vite.config.ts`
- **Vite** with `@vitejs/plugin-react`
- **Plain CSS** in `src/styles.css` — no Tailwind, no CSS modules; all design tokens are CSS custom properties on `:root` (`--paper`, `--ink`, `--accent`, `--display`, `--gothic`, `--mono`, etc.)
- **Google Fonts**: Cormorant Garamond (body), JetBrains Mono (labels/meta), Pirata One (display headings)

### Data Flow

`App.tsx` is the composition root. It calls `useNow(1000)` for a live clock, computes `thisYear`/`nextYear` arrays via `useMemo`, derives `next` (the next upcoming Friday the 13th), builds the `footnote` ReactNode, then passes everything down as props to section components.

```
App.tsx
├── useNow(1000)            → live Date, re-renders every second
├── useMemo(fridaysThe13th) → Date[] for this year and next
├── derives: next Date, footnote ReactNode
└── renders sections in order:
    TopBar → Masthead → Hero → Ticker → Almanac → Lore → PageFooter
```

### Key Files

| File | Purpose |
|------|---------|
| `src/utils/dates.ts` | Pure date utilities: `fridaysThe13th(year)`, `startOfDay`, `ord`, `moonPhase`, `formatTopBarDate` |
| `src/hooks/useNow.ts` | `useNow(intervalMs)` — `useState` + `setInterval` hook returning a live `Date` |
| `src/data/facts.ts` | Static content: `tickerFacts` (TickerFact[]) and `loreItems` (LoreItem[]) |
| `src/styles.css` | All global styles; imported once in `main.tsx` |

### Component Conventions

- Components in `src/components/` use **named exports** (not default exports)
- Each section component receives only the props it needs from `App.tsx`; there is no shared state or context
- All date math stays in `src/utils/dates.ts` — components don't manipulate Date objects directly

### Legacy Files (not active)

The repo contains leftover files from the original Vue 3 version. They are not imported by the active app:
- `src/main.js`, `src/App.vue`, `src/style.css`, `src/nextfriday13th.css`
- `src/composables/useFriday13th.js`, `src/utils/dateUtils.js`
- `src/components/countdown/*.vue`, `src/components/layout/*.vue`, `src/components/ui/*.vue`
- `src/components/*.tsx` stubs (Countdown, Hero, etc.) that may be incomplete drafts

### Static Assets

`public/assets/` contains video loops (`Jason_square.mp4/webm`, `Nervous_square.mp4/webm`) with poster images used in the Hero section's flanking character columns.
