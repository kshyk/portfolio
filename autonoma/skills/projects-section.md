# Projects Section

## Overview
Displays a grid of the developer's open-source projects, each as a card with description, technology stack icons, and links.

## Component
- **File**: `components/projects.tsx`
- **Type**: Server component
- **Parent**: `app/page.tsx`

## Projects (6 total)
1. **Portfolio** -- "About me and my projects" (this site itself)
2. **API Testing Framework** -- REST Assured-based API test collection
3. **Cypress Testing Framework** -- CypressIO web application tests
4. **Playwright Testing Framework** -- MS Playwright web application tests
5. **Selenide Testing Framework** -- Selenide web application tests
6. **TestCafe Testing Framework** -- TestCafe web application tests

## Data Source
- `data/projects.json` -- static JSON array of project objects
- Each project has: `name`, `description`, `repository` (URL), `demo` (URL), `technologies` (array of `{ name, icon }`)

## Visual Structure
- Section heading "Projects" (conditionally rendered only if projects exist)
- Responsive grid: 1 column on mobile, 2 columns on sm+ breakpoint
- Each Card contains:
  - CardHeader with title and description
  - CardContent with technology icons in a flex-wrap layout, bordered by Separators
  - Bottom section with two external links: "GitHub Repository" and "Live Demo"

## Interactions
- "GitHub Repository" and "Live Demo" are anchor tags opening in new tabs
- All links use `rel="noopener noreferrer"` for security
- Links have hover:underline styling
