---
title: "Beekeeper company name is a clickable link"
description: "Verify that the Beekeeper company name in the Hero description is a link to the company website"
criticality: high
scenario: standard
flow: "Hero Section"
---

# Test: Beekeeper company name is a clickable link

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`.

After setup, you should see the Hero section with the professional title containing the word "Beekeeper".

## Steps

1. Assert that the text "Beekeeper" in the description is rendered as a hyperlink
2. Assert that the "Beekeeper" link has an href attribute pointing to "https://www.beekeeper.io"
3. Assert that the "Beekeeper" link opens in a new tab (has `target="_blank"` attribute)

## Expected result

The word "Beekeeper" in "Principal Automation QA Architect @ Beekeeper" is a clickable link that opens the Beekeeper company website in a new tab.

## What bug this might catch

The company name might be rendered as plain text instead of a link if the component template fails to wrap it in an anchor tag, or the `links.company` value in `siteConfig` could be missing.
