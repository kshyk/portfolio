---
app_name: "Jakub Turkiewicz Portfolio"
app_description: "A personal portfolio website for Jakub Turkiewicz, a Principal Automation QA Architect. The site showcases professional identity, technical skills across multiple categories, open-source projects with links to repositories and live demos, and provides a contact form that opens a mailto link. It is a single-page static Next.js application with light/dark theme support."
core_flows:
  - feature: "Hero Section"
    description: "Displays the developer's name, title, avatar, company link, and social/resume links (GitHub, LinkedIn, Resume)"
    core: true
  - feature: "Skills Section"
    description: "Renders categorized technical skills (Languages, Technologies, Systems, Editors, AI) with icons loaded from simple-icons"
    core: true
  - feature: "Projects Section"
    description: "Shows a grid of project cards with name, description, technology icons, and links to GitHub repositories and live demos"
    core: true
  - feature: "Contact Form"
    description: "A validated form (Subject + Message) that opens a mailto link to send an email to the site owner"
    core: false
  - feature: "Theme Toggler"
    description: "A dropdown menu in the hero card that switches between Light, Dark, and System themes using next-themes"
    core: false
  - feature: "Footer"
    description: "Displays copyright notice with a dynamic year and a link to the developer's GitHub profile"
    core: false
feature_count: 6
skill_count: 6
---

# Jakub Turkiewicz Portfolio

## Application Description

A personal portfolio website built with Next.js 15 (App Router, static export) and styled with Tailwind CSS 4 and shadcn/ui components. The site serves as a professional landing page for Jakub Turkiewicz, Principal Automation QA Architect at Beekeeper. It is a single-page application (`/`) that renders four main sections vertically: Hero, Skills, Projects, and Contact. The site supports light and dark themes via next-themes.

## User Roles

- **Visitor**: Any person viewing the portfolio. There is no authentication. All content is public and read-only except for the contact form interaction.

## Entry Point

- **URL**: `/` (single page, statically exported)
- The page renders `<Hero />`, `<Skills />`, `<Projects />`, and `<Contact />` in sequence inside a `<main>` element.

## Navigation Structure

There is no traditional navigation menu. The site is a single scrollable page with sections stacked vertically. The only interactive navigation elements are:
- External links in the Hero section (GitHub, LinkedIn, Resume)
- External links in each Project card (GitHub Repository, Live Demo)
- The Theme Toggler dropdown in the top-right of the Hero card

## Core Flows

### 1. Hero Section (core)
**Location**: Top of the page
**Component**: `components/hero.tsx`
**What it shows**:
- Avatar image loaded from GitHub
- Full name: "Jakub Turkiewicz"
- Title/description: "Principal Automation QA Architect @ Beekeeper"
- Three buttons linking externally: GitHub, LinkedIn, Resume (Canva)
- Theme toggler button (top-right corner)

**Data source**: `config/site.ts` (siteConfig object with name, description, company, links, avatar, email)

### 2. Skills Section (core)
**Location**: Below Hero
**Component**: `components/skills.tsx`
**What it shows**:
- Section heading: "Skills"
- A single Card with five categorized subsections separated by horizontal rules:
  - **Languages** (7 items): JavaScript, TypeScript, Java, Python, Swift, Kotlin, Groovy
  - **Technologies** (24 items): Bash, Bootstrap, ESLint, Prettier, Yarn, Markdown, MySQL, PostgreSQL, JUnit5, Selenium, Cypress, TestCafe, WebdriverIO, Firebase, Gradle, GitHub Actions, AWS, Docker, Git, GitHub, Jenkins, SonarQube Cloud, Renovate, Dependabot
  - **Systems** (8 items): macOS, Linux, Linux Mint, Ubuntu, Alpine Linux, Windows, iOS, Android
  - **Editors** (4 items): IntelliJ IDEA, Visual Studio Code, Xcode, Android Studio
  - **AI** (4 items): OpenAI, GitHub Copilot, Google Gemini, CodeRabbit
- Each skill renders as an SVG icon (from simple-icons library) with label text below

**Data source**: `data/skills.json`

### 3. Projects Section (core)
**Location**: Below Skills
**Component**: `components/projects.tsx`
**What it shows**:
- Section heading: "Projects" (only shown if projects array is non-empty)
- A responsive grid (1 column on mobile, 2 columns on sm+) of project cards
- Each card contains:
  - Project name (title)
  - Project description
  - Technology icons (from simple-icons)
  - "GitHub Repository" link (external)
  - "Live Demo" link (external)
- Currently 6 projects: Portfolio, API Testing Framework, Cypress Testing Framework, Playwright Testing Framework, Selenide Testing Framework, TestCafe Testing Framework

**Data source**: `data/projects.json`

### 4. Contact Form
**Location**: Below Projects
**Component**: `components/contact.tsx` (client component)
**What it shows**:
- Section heading: "Contact" (centered)
- A form with two fields:
  - Subject (text input, required, min 1 char)
  - Message (textarea, required, min 1 char)
- Helper text: "Your message will be sent to jj.turkiewicz@gmail.com via email."
- Submit button with envelope icon
- On submit: opens `mailto:` link with encoded subject and body, then resets the form
- Validation: Uses react-hook-form with zod resolver; shows inline error messages

### 5. Theme Toggler
**Location**: Top-right corner of the Hero card
**Component**: `components/theme-toggler.tsx` (client component)
**Behavior**:
- Button with sun/moon icons that toggles based on current theme
- Dropdown menu with three options: Light, Dark, System
- Uses next-themes `setTheme()` to apply the selection
- Default theme is "light" (set in layout.tsx ThemeProvider)

### 6. Footer
**Location**: Bottom of every page (rendered in layout.tsx)
**Component**: `components/footer.tsx`
**What it shows**:
- Copyright text: "(c) 2023-{current year} by kshyk. All Rights Reserved."
- "kshyk" is a link to https://github.com/kshyk

## UI Patterns

### Component Library
- **shadcn/ui** components via Radix UI primitives: Card, Button, Avatar, Separator, DropdownMenu, Form, Input, Textarea, Label
- All UI components live in `components/ui/`

### Icons
- **simple-icons** library rendered via custom `SimpleIcon` component (`components/simple-icons.tsx`)
- Maps icon name strings to SVG paths from the simple-icons package
- **Radix Icons** for UI elements (SunIcon, MoonIcon, EnvelopeClosedIcon)
- **Lucide React** is a dependency but not directly used in visible components

### Styling
- Tailwind CSS 4 with CSS variables for theming (light/dark mode)
- Responsive: mobile-first, switches to wider layout at `md` breakpoint (40vw width for main cards)
- CSS variables defined in `globals.css` for both `:root` (light) and `.dark` themes

### Data Architecture
- Static JSON files in `data/` directory for skills and projects
- Site configuration in `config/site.ts` (name, description, links, avatar, email)
- No database, no API routes, no server-side data fetching
- Static export (`output: 'export'` in next.config.js), deployed to GitHub Pages

### Form Handling
- react-hook-form with zod validation schema
- No backend submission -- uses `mailto:` protocol via `window.location.href`
- Form resets after submission

## Preferences

- **Framework**: Next.js 15 (App Router) with static export
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 + shadcn/ui (Radix primitives)
- **Package Manager**: Yarn 4 (Berry)
- **Linting**: ESLint with next config
- **Commit conventions**: Conventional Commits (commitlint)
- **Git hooks**: Husky
- **Analytics**: Vercel Analytics
- **Deployment**: Static export to `dist/` directory
