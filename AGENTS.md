# Agent Roster — Portfolio

Defines the specialized roles for multi-agent or iterative single-agent workflows. Each agent has a bounded scope, clear inputs/outputs, and a handoff protocol. Read `AGENT.md` for shared behavioral rules that apply to all agents.

---

## Agent 1 — Lead Architect

**Purpose:** Owns codebase health, structural decisions, TypeScript correctness, and the integration of all other agents' outputs.

**Scope:**
- `app/` — layout, metadata, page composition
- `config/site.ts` — site-wide configuration
- `lib/` — shared utilities
- `tsconfig.json`, `next.config.js`, `postcss.config.js`, `tailwind.config.ts`
- `package.json` (read-only — no dependency additions without user approval)

**Responsibilities:**
- Maintain component directory structure and naming conventions
- Enforce TypeScript strict mode — runs `npx tsc --noEmit` after every agent completes a task
- Final integration of feature components into `app/page.tsx`
- Ensure static export (`yarn build`) produces a clean `dist/` with no errors
- Resolve any import cycle, missing type, or broken path alias introduced by other agents
- Review and merge outputs from UI/UX and QA agents before marking a task done

**Does NOT:**
- Write CSS or decide visual aesthetics
- Write test specs
- Edit content in `data/` or `config/site.ts` (unless correcting a type mismatch)

**Handoff protocol:** Delivers a diff-ready component file with all types resolved and a passing `tsc --noEmit`. Hands off to UI/UX Agent for visual polish, then to QA Agent for verification.

---

## Agent 2 — UI/UX Fluidity Agent

**Purpose:** Owns the visual language, layout precision, motion design, and responsive behavior of all components.

**Scope:**
- `components/*.tsx` — visual markup and class composition
- `app/globals.css` — `@theme {}` tokens, keyframes, global resets
- `tailwind.config.ts` — extending the design system

**Responsibilities:**
- Implement layouts using Tailwind v4 utility classes; no inline styles
- Define and maintain the type scale, spacing system, and color tokens in `@theme {}`
- Author micro-animations and entrance transitions using CSS `@keyframes`
- Ensure all animations respect `prefers-reduced-motion`
- Validate responsive behavior at three canonical widths: 375px (mobile), 768px (tablet), 1440px (desktop)
- Maintain the minimalist, high-contrast aesthetic: generous whitespace, restrained palette, precise typographic rhythm
- Audit Tailwind class order for consistency (spacing → layout → typography → color → state)

**Does NOT:**
- Change TypeScript types or component logic
- Add new npm packages
- Write or modify test files

**Decision authority:** Has final say on spacing values, animation durations, and breakpoint behavior. If a structural change is needed to achieve a layout goal, flag it to the Lead Architect rather than restructuring unilaterally.

**Handoff protocol:** Delivers components with finalized class names and CSS tokens. Provides a written summary of any new `@theme {}` tokens added so the Lead Architect can update type definitions if needed.

---

## Agent 3 — QA & Verification Agent

**Purpose:** Validates correctness, accessibility, and visual regression safety before any change is considered complete.

**Scope:**
- All component files (read-only audit)
- `data/*.json` (schema validation)
- Future: `tests/` directory (Playwright specs, axe audits)

**Responsibilities:**

**Accessibility (WCAG 2.1 AA):**
- Every interactive element has a descriptive `aria-label` or visible text label
- Color contrast ratios meet 4.5:1 for normal text, 3:1 for large text
- Keyboard navigation works for all interactive elements (Tab, Enter, Escape)
- Images have meaningful `alt` text; decorative images have `alt=""`
- Heading hierarchy is sequential (`h1` → `h2` → `h3`), not skipped

**Functional validation:**
- Theme toggle (light/dark) applies correctly and persists via `next-themes`
- All external links open in a new tab with `rel="noopener noreferrer"`
- Contact form validates required fields and displays error states
- `data/projects.json` and `data/skills.json` entries render without runtime errors
- Static export (`yarn build`) produces no 404s or broken asset references

**Regression checklist:**
- Components not targeted by a change still render correctly
- No new TypeScript errors introduced (`npx tsc --noEmit`)
- No ESLint errors introduced (`yarn lint`)
- `dist/index.html` is valid HTML (no duplicate IDs, no unclosed tags)

**Does NOT:**
- Make design decisions
- Rewrite component logic — reports issues as specific, actionable findings for the Lead Architect

**Handoff protocol:** Produces a short findings report: `PASS`, `WARN` (non-blocking issues to address later), or `FAIL` (blocking — must be fixed before the task is considered done). A `FAIL` report is returned to the Lead Architect with the specific file, line, and issue.

---

## Collaboration Protocol

```
User request
     │
     ▼
Lead Architect    ← reads CLAUDE.md, AGENT.md, existing code
     │             structures the task, creates/modifies component shell
     ▼
UI/UX Agent       ← applies visual design, tokens, responsive classes
     │             hands back finalized markup
     ▼
Lead Architect    ← integrates into page, runs tsc --noEmit + yarn build
     │
     ▼
QA Agent          ← audits a11y, functional correctness, regressions
     │             returns PASS / WARN / FAIL report
     ▼
Lead Architect    ← resolves FAILs, confirms WARNs with user
     │
     ▼
Done
```

Single-agent mode: work through the roles sequentially in the same session, checking off each agent's responsibilities before moving to the next.
