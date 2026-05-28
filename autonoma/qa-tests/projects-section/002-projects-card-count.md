---
title: "All 6 project cards are rendered"
description: "Verify that all 6 project cards from the standard dataset are displayed in the Projects section"
criticality: critical
scenario: standard
flow: "Projects Section"
---

# Test: All 6 project cards are rendered

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`.

After setup, you should be on the portfolio page. Scroll down to the Projects section.

## Steps

1. Scroll down to the Projects section
2. Assert that a card with the title "Portfolio" is visible
3. Assert that a card with the title "API Testing Framework" is visible
4. Assert that a card with the title "Cypress Testing Framework" is visible
5. Assert that a card with the title "Playwright Testing Framework" is visible
6. Assert that a card with the title "Selenide Testing Framework" is visible
7. Assert that a card with the title "TestCafe Testing Framework" is visible
8. Assert that there are exactly 6 project cards in the Projects section

## Expected result

All 6 project cards are rendered in the Projects section, each showing its respective project name as the card title.

## What bug this might catch

A missing or malformed entry in `projects.json`, a rendering bug that skips items during iteration, or a filter/slice operation that inadvertently limits the number of displayed projects.
