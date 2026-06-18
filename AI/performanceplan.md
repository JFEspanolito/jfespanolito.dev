# Performance Optimization Plan — jfespanolito.dev

> Generated: 2026-06-12
> Audit context: Astro 6 + React 19 + Tailwind 4 portfolio, single-page architecture

---

## 🔴 Critical (high impact, low effort)

### 1. Certificates: stop eager-loading all 156 images

`src/data/certificates.ts` uses `import.meta.glob({ eager: true })` which forces Vite to bundle **every** certificate image at build time — ~10 MB of WebP in `dist/client/_astro/`.

- **Action**: split imports — eagerly import only 4–6 featured certificates, defer the rest with `{ eager: false }`
- **Est. saving**: ~9 MB off the initial build
- **Effort**: ~30 min

### 2. Remove framer-motion (dead dependency)

Zero imports found across the entire codebase. It's in `package.json` but never used.

- **Action**: `pnpm remove framer-motion`
- **Risk**: none
- **Effort**: 1 min

---

## 🟡 High Impact

### 3. React hydration: shift from `client:load` to `client:idle`

`client.js` weighs **182 KB** — React 19 + ReactDOM + JSX runtime. `CtaButton.tsx` uses `client:load`, forcing hydration on critical load path for a toast button.

- **Action**: change `client:load` → `client:idle` (or `client:visible`) on non-critical React islands
- **Effort**: 5 min

### 4. Clean up placeholders

`src/data/configProject.ts`:
- `email: "correo@placeholder.com"`
- `fromAdmin: "admin@placeholder.com"`
- `marketing.tagline: "<Astro Place holder>"`

`src/i18n/ui.ts`:
- `nav.menu1`, `nav.menu2`, `nav.menu3` — generic template leftovers

- **Impact**: professional image, not performance
- **Effort**: 15 min

---

## 🟢 Medium Term

### 5. Split monolithic index into routes

Currently all sections live in `src/pages/index.astro`. With Astro SSR, separate routes (`/bio`, `/experience`, `/projects`, `/certificates`) would let each page only load its own assets.

- **Trade-off**: loses snap-scroll UX unless simulated with nav
- **Quick win**: move `/certificates` to its own route — it's the heaviest section
- **Effort**: 2–4 h

### 6. Dynamic Sileo import in CtaButton

Sileo is imported statically at the top of `CtaButton.tsx` but only used inside click handlers. `Bio.astro` and `Header.astro` already do dynamic imports — good pattern to follow.

- **Action**: replace `import { sileo } from "sileo"` with `const { sileo } = await import("sileo")` inside the handler
- **Effort**: 10 min

### 7. Resolve src/core/ ambiguity

`src/core/` contains only a `readme.md` describing a Clean Architecture that doesn't exist in the actual code. The project is data-driven, not DDD.

- **Options**: delete the readme, implement the architecture, or keep but mark as aspirational
- **Effort**: 5 min

---

## Impact Summary

| # | Action | Effort | Impact |
|---|--------|--------|--------|
| 1 | Certs lazy loading | 30 min | 🔴 High — ~9 MB build reduction |
| 2 | Remove framer-motion | 1 min | 🟡 Medium — cleaner deps |
| 3 | `client:load` → `client:idle` | 5 min | 🟡 Medium — faster LCP |
| 4 | Clean placeholders | 15 min | 🟢 Low — professional hygiene |
| 5 | Route splitting | 2–4 h | 🟡 Medium — architectural |
| 6 | Dynamic Sileo import | 10 min | 🟢 Low — bundle trimming |
| 7 | core/ readme | 5 min | 🟢 Low — codebase hygiene |
