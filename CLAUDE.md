# Portfolio — Claude Reference

## Stack

| Layer           | Technology                                                   |
|-----------------|--------------------------------------------------------------|
| Framework       | Next.js 16 (App Router, `output: 'export'`)                  |
| Language        | TypeScript 6 — `strict: true`                                |
| Styling         | Tailwind CSS v4 via PostCSS (`@import 'tailwindcss'` syntax) |
| UI Primitives   | Radix UI + shadcn/ui, CVA, clsx, tailwind-merge              |
| Forms           | React Hook Form + Zod v4                                     |
| Package Manager | Yarn 4 (Berry) — use `yarn`, never `npm`/`pnpm`              |
| Output          | Static export to `dist/`                                     |
| Git hooks       | Husky + commitlint (conventional commits)                    |

## Commands

```bash
yarn install          # install dependencies
yarn dev              # dev server (Next.js Turbopack)
yarn build            # production build → dist/
yarn start            # serve production build locally
yarn lint             # ESLint via next lint
```

### Type checking (no separate tsc step — Next.js handles it on build)
```bash
yarn build            # catches type errors
npx tsc --noEmit      # standalone type check without building
```

### E2E / QA (not yet configured — placeholder)
```bash
yarn test:e2e         # Playwright (add when configured)
yarn test:a11y        # axe-core accessibility audit (add when configured)
```

## Project Layout

```
app/                  # Next.js App Router (layout.tsx, page.tsx, globals.css)
components/           # Feature components (hero, skills, projects, contact, …)
components/ui/        # shadcn/ui primitives — do not hand-edit
config/site.ts        # Centralized site metadata (name, links, description)
data/                 # Static JSON data (projects.json, skills.json)
lib/utils.ts          # cn() utility (clsx + tailwind-merge)
public/               # Static assets
dist/                 # Build output (gitignored during dev, committed for GH Pages)
```

## Key Conventions

### TypeScript
- `strict: true` — no `any`, no `@ts-ignore` without a comment explaining why
- All props typed with explicit interfaces or `type` aliases; no inline object types on function signatures
- Path alias `@/*` maps to the repo root — use it everywhere

### CSS / Tailwind
- Tailwind v4 syntax: `@import 'tailwindcss'` at the top of `globals.css`, **not** `@tailwind base/components/utilities`
- Custom design tokens live in the `@theme {}` block in `globals.css`
- CSS custom properties for semantic colors follow the `hsl(var(--token))` pattern
- No inline `style={{}}` for values that can be expressed as Tailwind classes
- Prefer `cn()` from `lib/utils.ts` for conditional class merging

### Components
- Functional components only; no class components
- Props interface named `<ComponentName>Props`
- shadcn/ui components in `components/ui/` — generated via CLI, treat as read-only except for intentional overrides
- Feature components in `components/` — co-locate any component-specific types

### Data
- Content changes go in `data/*.json` or `config/site.ts` — keep components free of hardcoded strings
- JSON data files are imported directly (Next.js resolves them via `resolveJsonModule: true`)

### Commits
- Conventional commits enforced by commitlint: `feat:`, `fix:`, `chore:`, `style:`, `refactor:`, `docs:`
- Scope optional but encouraged: `feat(hero): add scroll-triggered entrance`
