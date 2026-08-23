# AGENTS.md — Azmee Store

## Project

Indonesian Muslim fashion e-commerce landing page. Single-page React app, no routing, no backend logic in repo.

## Stack

- React 18, TypeScript, Vite 5, Tailwind CSS 3
- Supabase client installed but not actively used yet
- Lucide React for icons
- Language: Indonesian (id)

## Commands

```bash
npm run dev          # Vite dev server
npm run build        # production build
npm run typecheck    # tsc --noEmit -p tsconfig.app.json
npm run lint         # eslint .
npm run preview      # preview production build
```

No test suite exists. No CI workflows.

## Path alias

`@/` maps to `src/`. Use it for all imports: `import { X } from '@/components/X'`. Configured in both `vite.config.ts` and `tsconfig.app.json`.

## Tailwind conventions

Custom colors are defined in `tailwind.config.js` under `theme.extend.colors`:
- `coksu` (50–950 scale) — primary brown palette
- `cream`, `beige`, `offwhite`, `charcoal` — semantic surface/text colors

Use these instead of raw hex. Animations `fade-up` and `fade-in` are also custom.

## Content/data

All product data, testimonials, FAQ, pricing, and navigation live in `src/data/content.ts`. Components are presentation-only; data is not fetched from APIs.

## Scroll reveal

`src/components/Reveal.tsx` + `src/hooks/useReveal.ts` implement Intersection Observer-based fade-in animations. The `.reveal` class is defined in `src/index.css`. Respects `prefers-reduced-motion`.

## Component structure

`App.tsx` renders sections in order: Navbar → Hero → ProblemSection → ValueProposition → ProductCatalog → SocialProof → PricingPackages → Testimonials → FAQ → FinalCTA → Footer. All components are in `src/components/`.

## Gotchas

- `index.html` lang is `id`, not `en`.
- `optimizeDeps.exclude` includes `lucide-react` — intentional for tree-shaking.
- `noUnusedLocals` and `noUnusedParameters` are disabled in tsconfig — don't re-enable without team buy-in.
- No `.env` file exists. Supabase dependency is present but no env vars are configured.
