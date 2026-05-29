# Agent Instructions — Portfolio

Operational rules for AI agents working in this repository. These are hard constraints, not suggestions.

---

## Behavioral Directives

**Edit minimally.** Prefer surgical edits to file rewrites. If only one section of a component changes, edit only that section. Never regenerate an entire file when a diff suffices.

**Verify types after every change.** After modifying any `.ts` or `.tsx` file, confirm no new type errors were introduced by running `npx tsc --noEmit`. If type errors appear, fix them before reporting the task complete.

**Read before writing.** Always read the current state of a file before editing it. Never assume file contents from memory.

**Follow existing patterns.** Before introducing a new abstraction (hook, utility, component), check whether a similar one already exists in `lib/`, `components/ui/`, or existing feature components.

**Never add dependencies without explicit user approval.** Do not add entries to `package.json`. If a dependency would help, name it and ask first.

**Respect the data layer.** Content (copy, links, tech names) lives in `data/*.json` and `config/site.ts`. Do not hardcode user-facing strings into components.

---

## TypeScript Rules

- `strict: true` is non-negotiable. Never introduce `any`. If a type is genuinely unknown, use `unknown` and narrow it.
- No `// @ts-ignore` or `// @ts-expect-error` without a code comment explaining the specific reason.
- Explicit return types on all exported functions and components.
- Props typed as `interface <Name>Props` at the top of the file, exported if consumed elsewhere.
- Generics over duplication — if two components share a shape, extract a shared type.

```ts
// correct
interface HeroProps {
  headline: string
  subline?: string
}
export function Hero({ headline, subline }: HeroProps): React.JSX.Element {
    // code
}

// wrong
export function Hero({ headline, subline }: { headline: string; subline?: string }) {
    // code
}
```

---

## CSS / Styling Rules

**Tailwind v4 syntax only.** This project uses `@import 'tailwindcss'` — never write `@tailwind base`, `@tailwind components`, or `@tailwind utilities`.

**Design tokens via `@theme {}`.** Custom colors, radii, and animations are declared in the `@theme {}` block in `app/globals.css`. Never hardcode raw hex or hsl values in components — reference CSS custom properties via Tailwind tokens.

**No CSS-in-JS.** Do not introduce `styled-components`, `emotion`, or any runtime CSS-in-JS library.

**Class merging via `cn()`.** Conditional or merged class names must use `cn()` from `lib/utils.ts` (clsx + tailwind-merge). Never string-concatenate Tailwind classes.

```ts
// correct
<div className={cn('flex items-center gap-4', isActive && 'text-primary')} />

// wrong
<div className={`flex items-center gap-4 ${isActive ? 'text-primary' : ''}`} />
```

**Responsive design.** Mobile-first. Use Tailwind breakpoint prefixes (`sm:`, `md:`, `lg:`) rather than arbitrary `min-width` media queries in CSS files.

---

## UI/UX Directives

**Minimalist luxury aesthetic.** Every element earns its place. When in doubt, remove rather than add. Negative space is a design element.

**Typography discipline.** Font sizes, weights, and line-heights must follow the type scale defined in `@theme {}`. Do not introduce ad-hoc `text-[17px]` arbitrary values.

**Micro-animations.** Transitions should be subtle and purposeful — `duration-200` to `duration-300`, `ease-out` or `ease-in-out`. No `duration-1000` unless it is a page-level entrance. Animations must respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  /* disable or simplify transitions */
}
```

**Scroll-triggered entrances.** Use CSS `@keyframes` + `animation-timeline: scroll()` or the Intersection Observer API for entrance animations. Do not add an animation library for this.

**Consistent spacing.** All spacing uses Tailwind's spacing scale. If you need a value not in the scale, declare it as a custom token in `@theme {}` — do not use arbitrary `p-[13px]` values in markup.

---

## Component Architecture Rules

**Feature components** (`components/*.tsx`) own layout and composition. They import from `components/ui/` and `data/`.

**UI primitives** (`components/ui/*.tsx`) are shadcn/ui generated files. Treat as library code — do not modify unless you are intentionally overriding a primitive for this project's design system, and comment why.

**No prop drilling beyond two levels.** If a value needs to travel more than two component levels, lift it to `config/site.ts`, a JSON data file, or a React context.

**Server components by default.** App Router components are server components unless they need interactivity. Only add `'use client'` when the component uses browser APIs, event handlers, or React state/effects.

---

## Workflow for Adding a New Section / Feature

1. Check `config/site.ts` and `data/*.json` — does the content already exist or belong there?
2. Read `app/page.tsx` and the adjacent component that is most similar to what you are building.
3. Create the component in `components/<name>.tsx` following the existing naming and structure pattern.
4. Wire data from `data/` or `config/` — no hardcoded strings in the component.
5. Import and place the component in `app/page.tsx` or the appropriate layout file.
6. Run `npx tsc --noEmit` — fix any errors.
7. Run `yarn build` — confirm the static export succeeds.
8. Visually verify: check mobile (≤640px), tablet (641–1024px), and desktop (>1024px) widths.

## Workflow for Updating Content Only

1. Edit the relevant entry in `data/*.json` or `config/site.ts`.
2. If the JSON shape is changed, update the consuming component's type definitions.
3. Run `npx tsc --noEmit` to confirm type safety.
4. No build required for content-only changes verified via `yarn dev`.
