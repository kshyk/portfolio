---
title: "Footer kshyk link points to GitHub profile"
description: "Verify the kshyk text in the footer is a link to the correct GitHub profile"
criticality: mid
scenario: standard
flow: "Footer"
---

# Test: Footer kshyk link points to GitHub profile

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`.

After setup, you should be on the portfolio page. Scroll to the bottom of the page.

## Steps

1. Scroll to the bottom of the page to the footer area
2. Assert that the text "kshyk" in the footer is rendered as a hyperlink
3. Assert that the "kshyk" link has an href attribute pointing to "https://github.com/kshyk"
4. Assert that the "kshyk" link opens in a new tab (has `target="_blank"` attribute)

## Expected result

The "kshyk" text in the footer is a clickable link that opens the GitHub profile at `https://github.com/kshyk` in a new browser tab.

## What bug this might catch

The "kshyk" text being rendered as plain text instead of a link, or the href pointing to the wrong GitHub URL.
