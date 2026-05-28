---
title: "Scroll through all sections from Hero to Footer"
description: "Verify the full page renders all sections in order (Hero, Skills, Projects, Contact, Footer) and is fully scrollable"
criticality: critical
scenario: standard
flow: "Journey"
---

# Test: Scroll through all sections from Hero to Footer

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`.

After setup, you should see the Hero section at the top of the page.

## Steps

1. Assert that the Hero section is visible at the top of the page
2. Assert that the text "Jakub Turkiewicz" is visible in the Hero section
3. Assert that the GitHub, LinkedIn, and Resume buttons are visible
4. Scroll down to the Skills section
5. Assert that the heading "Skills" is visible
6. Assert that the "Languages" category heading is visible inside the Skills card
7. Scroll down to the Projects section
8. Assert that the heading "Projects" is visible
9. Assert that the card titled "Portfolio" is visible
10. Assert that the card titled "TestCafe Testing Framework" is visible (last project card)
11. Scroll down to the Contact section
12. Assert that the heading "Contact" is visible and centered
13. Assert that the "Subject" input field is visible
14. Assert that the "Message" textarea is visible
15. Assert that the "Submit" button is visible
16. Scroll down to the Footer
17. Assert that the footer copyright text containing "kshyk" is visible
18. Assert that you have reached the bottom of the page

## Expected result

All five sections (Hero, Skills, Projects, Contact, Footer) render in the correct order on a single page. The page is fully scrollable from top to bottom with no sections missing, overlapping, or causing layout breaks.

## What bug this might catch

A missing section import in `app/page.tsx`, a z-index issue causing sections to overlap, or a CSS height constraint preventing the page from being fully scrollable.
