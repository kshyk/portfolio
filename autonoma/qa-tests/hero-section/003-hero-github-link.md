---
title: "GitHub button links to correct profile"
description: "Verify the GitHub button in the Hero section links to the correct GitHub profile URL"
criticality: critical
scenario: standard
flow: "Hero Section"
---

# Test: GitHub button links to correct profile

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`.

After setup, you should see the Hero section with three buttons below the name and title.

## Steps

1. Assert that a button labeled "GitHub" is visible in the Hero section
2. Assert that the "GitHub" button has an href attribute pointing to "https://github.com/kshyk"
3. Assert that the "GitHub" button opens in a new tab (has `target="_blank"` attribute)

## Expected result

The GitHub button is visible and links to `https://github.com/kshyk`, configured to open in a new browser tab.

## What bug this might catch

Incorrect or missing `links.github` value in `siteConfig`, or missing `target="_blank"` causing the link to navigate away from the portfolio instead of opening a new tab.
