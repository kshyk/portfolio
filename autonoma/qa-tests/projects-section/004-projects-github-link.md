---
title: "GitHub Repository link opens correct URL"
description: "Verify that the GitHub Repository link on a project card points to the correct repository URL"
criticality: high
scenario: standard
flow: "Projects Section"
---

# Test: GitHub Repository link opens correct URL

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`.

After setup, you should be on the portfolio page. Scroll down to the Projects section.

## Steps

1. Scroll down to the Projects section and locate the card titled "Portfolio"
2. Assert that a link labeled "GitHub Repository" is visible on the "Portfolio" card
3. Assert that the "GitHub Repository" link has an href attribute pointing to "https://github.com/kshyk/portfolio"
4. Assert that the "GitHub Repository" link opens in a new tab (has `target="_blank"` attribute)
5. Assert that the "GitHub Repository" link has `rel="noopener noreferrer"` for security

## Expected result

The "GitHub Repository" link on the Portfolio card points to `https://github.com/kshyk/portfolio`, opens in a new tab, and includes security attributes.

## What bug this might catch

Incorrect repository URL in `projects.json`, missing `target="_blank"` causing in-page navigation, or missing `rel="noopener noreferrer"` creating a security vulnerability.
