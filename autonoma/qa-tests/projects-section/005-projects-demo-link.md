---
title: "Live Demo link opens correct URL"
description: "Verify that the Live Demo link on a project card points to the correct demo URL"
criticality: high
scenario: standard
flow: "Projects Section"
---

# Test: Live Demo link opens correct URL

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`.

After setup, you should be on the portfolio page. Scroll down to the Projects section.

## Steps

1. Scroll down to the Projects section and locate the card titled "Portfolio"
2. Assert that a link labeled "Live Demo" is visible on the "Portfolio" card
3. Assert that the "Live Demo" link has an href attribute pointing to "https://kshyk.github.io/portfolio/"
4. Assert that the "Live Demo" link opens in a new tab (has `target="_blank"` attribute)
5. Scroll to the card titled "API Testing Framework"
6. Assert that the "Live Demo" link on the "API Testing Framework" card has an href attribute pointing to "https://github.com/kshyk/api-tests/actions/workflows/main.yml"

## Expected result

The "Live Demo" link on each project card points to the correct demo URL as defined in the project data. Both the Portfolio demo (GitHub Pages) and the API Testing Framework demo (GitHub Actions) resolve to their respective URLs.

## What bug this might catch

Swapped or missing demo URLs in `projects.json`, or all demo links pointing to the same URL due to a binding bug in the template iteration.
