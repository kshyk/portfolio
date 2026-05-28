---
title: "Switch theme then verify all sections render in new theme"
description: "Verify that switching to dark theme correctly applies dark styling to every section of the page"
criticality: critical
scenario: standard
flow: "Journey"
---

# Test: Switch theme then verify all sections render in new theme

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`.

After setup, you should see the Hero section in light theme (default).

## Steps

1. Assert that the page is in light theme (no "dark" class on `<html>`)
2. Click the theme toggler button in the top-right of the Hero card
3. Click the "Dark" option in the dropdown menu
4. Assert that the `<html>` element now has the class "dark"
5. Assert that the Hero section background has changed to a dark color
6. Assert that the text "Jakub Turkiewicz" is displayed in a light color against the dark background
7. Assert that the GitHub, LinkedIn, and Resume buttons are visible and styled for dark mode
8. Scroll down to the Skills section
9. Assert that the Skills card has a dark background
10. Assert that skill labels are displayed in a light color
11. Assert that skill SVG icons are visible against the dark background
12. Scroll down to the Projects section
13. Assert that project cards have dark-themed backgrounds
14. Assert that project titles and descriptions are in light-colored text
15. Assert that the "GitHub Repository" and "Live Demo" links are visible and readable
16. Scroll down to the Contact section
17. Assert that the "Subject" input field has dark-themed styling (dark background, light text)
18. Assert that the "Message" textarea has dark-themed styling
19. Assert that the "Submit" button is visible and styled for dark mode
20. Scroll down to the Footer
21. Assert that the footer text is displayed in a muted light color against the dark background

## Expected result

After switching to dark theme, every section of the page (Hero, Skills, Projects, Contact, Footer) renders with dark backgrounds and light text. All interactive elements remain visible and usable. The theme is consistently applied across all components.

## What bug this might catch

Incomplete dark theme CSS variable coverage in `globals.css`, causing some components to retain light styling while others switch to dark. This is especially common with card components and form inputs that may have hardcoded background colors.
