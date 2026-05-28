---
title: "Technology icons render correctly on project cards"
description: "Verify that technology stack icons are rendered on project cards using the simple-icons library"
criticality: high
scenario: standard
flow: "Projects Section"
---

# Test: Technology icons render correctly on project cards

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`.

After setup, you should be on the portfolio page. Scroll down to the Projects section.

## Steps

1. Scroll down to the Projects section and locate the card titled "Cypress Testing Framework"
2. Assert that technology icons are displayed between two horizontal separators on the card
3. Assert that SVG icons are rendered (not broken image placeholders or empty spaces)
4. Assert that the number of technology icons on the "Cypress Testing Framework" card corresponds to its 9 technologies
5. Scroll to the card titled "API Testing Framework"
6. Assert that technology icons are also visible on this card
7. Assert that the number of technology icons on the "API Testing Framework" card corresponds to its 7 technologies

## Expected result

Each project card displays its technology stack as SVG icons rendered via the SimpleIcon component. The icon count matches the number of technologies defined for each project.

## What bug this might catch

Incorrect icon slugs in the project's technologies array causing empty fragments to render, or the SimpleIcon component failing to resolve certain icon names from the simple-icons library.
