---
total_tests: 44
total_folders: 7
folders:
  - name: "hero-section"
    description: "Hero section displaying avatar, name, title, and external profile links"
    test_count: 8
    critical: 3
    high: 3
    mid: 1
    low: 1
  - name: "skills-section"
    description: "Skills section with five categorized skill groups rendered as icon-label pairs"
    test_count: 8
    critical: 2
    high: 3
    mid: 2
    low: 1
  - name: "projects-section"
    description: "Projects section showing a responsive grid of project cards with links and technology icons"
    test_count: 9
    critical: 3
    high: 3
    mid: 2
    low: 1
  - name: "contact-form"
    description: "Contact form with subject and message fields that opens a mailto link"
    test_count: 8
    critical: 1
    high: 3
    mid: 3
    low: 1
  - name: "theme-toggler"
    description: "Theme toggle dropdown with Light, Dark, and System options"
    test_count: 5
    critical: 1
    high: 2
    mid: 1
    low: 1
  - name: "footer"
    description: "Footer with dynamic copyright year and GitHub profile link"
    test_count: 3
    critical: 0
    high: 1
    mid: 1
    low: 1
  - name: "journey"
    description: "End-to-end journey tests chaining multiple flows across the full page"
    test_count: 3
    critical: 3
    high: 0
    mid: 0
    low: 0
coverage_correlation:
  routes_or_features: 9
  expected_test_range_min: 27
  expected_test_range_max: 50
---

# E2E Test Suite -- Jakub Turkiewicz Portfolio

## Summary

This test suite provides exhaustive E2E coverage for a single-page static portfolio built with Next.js 15. The site has 9 distinct features (1 page, 6 components, 2 interaction flows) rendered on a single route (`/`). Four features are core (Home Page, Hero Section, Skills Section, Projects Section) and receive 57% of test coverage. Two supporting features (Contact Form, Theme Toggler) with their associated interaction flows (Contact Form Submission, Theme Switching) receive 30% of coverage. The Footer receives minimal coverage as an administrative element. Three journey tests validate cross-flow interactions.

All data is static (no variable fields). Tests reference hardcoded values from scenario data directly. Three scenarios are used: `standard` (production mirror with 54 entities), `empty` (graceful degradation with 0 entities), and `large` (overflow/scaling with 141 entities).

## Test Distribution

| Tier | Category | Test Count | Percentage |
|------|----------|------------|------------|
| Tier 1 | Core flows (Hero, Skills, Projects) | 25 | 57% |
| Tier 2 | Supporting flows (Contact Form, Theme Toggler) | 13 | 30% |
| Tier 3 | Administrative (Footer) | 3 | 7% |
| -- | Journey tests | 3 | 7% |
| **Total** | | **44** | **100%** |

## Folder Summary

| Folder | Description | Tests | Critical | High | Mid | Low |
|--------|-------------|-------|----------|------|-----|-----|
| hero-section | Avatar, name, title, external links | 8 | 3 | 3 | 1 | 1 |
| skills-section | Categorized skills with icons | 8 | 2 | 3 | 2 | 1 |
| projects-section | Project cards grid with links | 9 | 3 | 3 | 2 | 1 |
| contact-form | Validated mailto form | 8 | 1 | 3 | 3 | 1 |
| theme-toggler | Light/Dark/System theme switcher | 5 | 1 | 2 | 1 | 1 |
| footer | Copyright and GitHub link | 3 | 0 | 1 | 1 | 1 |
| journey | Cross-flow E2E journeys | 3 | 3 | 0 | 0 | 0 |

## Complete Test Index

| # | File | Title | Criticality | Scenario | Flow |
|---|------|-------|-------------|----------|------|
| 1 | hero-section/001-hero-name-and-title.md | Hero displays developer name and title | critical | standard | Hero Section |
| 2 | hero-section/002-hero-avatar-renders.md | Hero avatar image loads from GitHub | critical | standard | Hero Section |
| 3 | hero-section/003-hero-github-link.md | GitHub button links to correct profile | critical | standard | Hero Section |
| 4 | hero-section/004-hero-linkedin-link.md | LinkedIn button links to correct profile | high | standard | Hero Section |
| 5 | hero-section/005-hero-resume-link.md | Resume button links to Canva CV | high | standard | Hero Section |
| 6 | hero-section/006-hero-beekeeper-link.md | Beekeeper company name is a clickable link | high | standard | Hero Section |
| 7 | hero-section/007-hero-avatar-fallback.md | Avatar shows fallback when image fails to load | mid | standard | Hero Section |
| 8 | hero-section/008-hero-responsive-layout.md | Hero section adapts layout on mobile viewport | low | standard | Hero Section |
| 9 | skills-section/001-skills-heading-visible.md | Skills section heading is displayed | critical | standard | Skills Section |
| 10 | skills-section/002-skills-all-categories.md | All five skill categories are rendered with correct headings | critical | standard | Skills Section |
| 11 | skills-section/003-skills-languages-items.md | Languages category displays all 7 skill items | high | standard | Skills Section |
| 12 | skills-section/004-skills-technologies-items.md | Technologies category displays all 24 skill items | high | standard | Skills Section |
| 13 | skills-section/005-skills-icons-render.md | Skill icons render as SVG images | high | standard | Skills Section |
| 14 | skills-section/006-skills-category-separators.md | Horizontal separators appear between skill categories | mid | standard | Skills Section |
| 15 | skills-section/007-skills-empty-state.md | Skills section renders gracefully with no skill data | mid | empty | Skills Section |
| 16 | skills-section/008-skills-large-dataset.md | Skills section handles 120 skills without layout breakage | low | large | Skills Section |
| 17 | projects-section/001-projects-heading-visible.md | Projects section heading is displayed | critical | standard | Projects Section |
| 18 | projects-section/002-projects-card-count.md | All 6 project cards are rendered | critical | standard | Projects Section |
| 19 | projects-section/003-projects-card-content.md | Project card shows name, description, and technology icons | critical | standard | Projects Section |
| 20 | projects-section/004-projects-github-link.md | GitHub Repository link opens correct URL | high | standard | Projects Section |
| 21 | projects-section/005-projects-demo-link.md | Live Demo link opens correct URL | high | standard | Projects Section |
| 22 | projects-section/006-projects-tech-icons.md | Technology icons render correctly on project cards | high | standard | Projects Section |
| 23 | projects-section/007-projects-grid-layout.md | Projects grid shows 2 columns on desktop | mid | standard | Projects Section |
| 24 | projects-section/008-projects-empty-state.md | Projects section heading is hidden when no projects exist | mid | empty | Projects Section |
| 25 | projects-section/009-projects-large-dataset.md | Projects grid handles 20 cards without layout breakage | low | large | Projects Section |
| 26 | contact-form/001-contact-happy-path.md | Submit contact form with valid subject and message | critical | standard | Contact Form |
| 27 | contact-form/002-contact-empty-subject.md | Submitting with empty subject shows validation error | high | standard | Contact Form |
| 28 | contact-form/003-contact-empty-message.md | Submitting with empty message shows validation error | high | standard | Contact Form |
| 29 | contact-form/004-contact-both-empty.md | Submitting with both fields empty shows both errors | high | standard | Contact Form |
| 30 | contact-form/005-contact-form-reset.md | Form fields reset after successful submission | mid | standard | Contact Form |
| 31 | contact-form/006-contact-special-chars.md | Special characters in subject and message are handled | mid | standard | Contact Form |
| 32 | contact-form/007-contact-long-input.md | Extremely long input in message field does not break layout | mid | standard | Contact Form |
| 33 | contact-form/008-contact-helper-text.md | Helper text displays correct email address | low | standard | Contact Form |
| 34 | theme-toggler/001-theme-toggle-to-dark.md | Switching to Dark theme applies dark styling | critical | standard | Theme Toggler |
| 35 | theme-toggler/002-theme-toggle-to-light.md | Switching to Light theme applies light styling | high | standard | Theme Toggler |
| 36 | theme-toggler/003-theme-toggle-to-system.md | Switching to System theme respects OS preference | high | standard | Theme Toggler |
| 37 | theme-toggler/004-theme-dropdown-options.md | Theme dropdown shows Light, Dark, and System options | mid | standard | Theme Toggler |
| 38 | theme-toggler/005-theme-default-light.md | Default theme is Light on first visit | low | standard | Theme Toggler |
| 39 | footer/001-footer-copyright-text.md | Footer displays copyright with current year | high | standard | Footer |
| 40 | footer/002-footer-github-link.md | Footer kshyk link points to GitHub profile | mid | standard | Footer |
| 41 | footer/003-footer-always-visible.md | Footer is visible at the bottom of the page | low | standard | Footer |
| 42 | journey/001-full-page-scroll.md | Scroll through all sections from Hero to Footer | critical | standard | Journey |
| 43 | journey/002-theme-switch-and-browse.md | Switch theme then verify all sections render in new theme | critical | standard | Journey |
| 44 | journey/003-contact-after-browsing.md | Browse projects and skills then submit contact form | critical | standard | Journey |

## Adversarial Review Summary

**Gaps identified**: 4
**Gaps addressed**: 4

1. **Empty state coverage** -- Added tests for empty scenario (skills-section/007, projects-section/008) to verify graceful degradation when data files are empty.
2. **Large dataset coverage** -- Added tests for large scenario (skills-section/008, projects-section/009) to verify layout handles overflow with 120 skills and 20 projects.
3. **Form validation completeness** -- Added test for both fields empty simultaneously (contact-form/004) in addition to individual field validation.
4. **Journey tests** -- Added 3 journey tests covering full page traversal, theme switching across sections, and the complete browse-then-contact flow.

No gaps were deferred. All high-value gaps were addressed in the final suite.
