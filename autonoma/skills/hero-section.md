# Hero Section

## Overview
The Hero section is the top-most component on the portfolio page. It introduces the developer with their avatar, name, professional title, and links to external profiles.

## Component
- **File**: `components/hero.tsx`
- **Type**: Server component (no "use client" directive)
- **Parent**: `app/page.tsx`

## Elements
- **Avatar**: Circular image loaded from GitHub avatars URL, with fallback showing first letter of name
- **Name**: "Jakub Turkiewicz" rendered as an h1-level heading (text-3xl/4xl)
- **Description**: "Principal Automation QA Architect @ Beekeeper" with "Beekeeper" as a clickable link
- **GitHub Button**: Outline variant, links to https://github.com/kshyk
- **LinkedIn Button**: Outline variant, links to LinkedIn profile
- **Resume Button**: Secondary variant, links to Canva resume
- **Theme Toggler**: Top-right corner, dropdown with Light/Dark/System options

## Data Source
- `config/site.ts` exports `siteConfig` with all text content and URLs

## Interactions
- All three buttons open external links in new tabs (`target="_blank"`)
- Theme toggler opens a dropdown menu on click
- Avatar shows fallback text if image fails to load

## Responsive Behavior
- Mobile: Centered layout, avatar above name, buttons wrap
- Desktop (md+): Left-aligned row layout, avatar beside name, 40vw max width
