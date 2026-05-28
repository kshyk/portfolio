---
title: "LinkedIn button links to correct profile"
description: "Verify the LinkedIn button in the Hero section links to the correct LinkedIn profile URL"
criticality: high
scenario: standard
flow: "Hero Section"
---

# Test: LinkedIn button links to correct profile

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`.

After setup, you should see the Hero section with three buttons below the name and title.

## Steps

1. Assert that a button labeled "LinkedIn" is visible in the Hero section
2. Assert that the "LinkedIn" button has an href attribute pointing to "https://www.linkedin.com/in/jakub-turkiewicz-39bb5729/"
3. Assert that the "LinkedIn" button opens in a new tab (has `target="_blank"` attribute)

## Expected result

The LinkedIn button is visible and links to the correct LinkedIn profile URL, configured to open in a new browser tab.

## What bug this might catch

Incorrect LinkedIn URL in `siteConfig` -- a common issue when URLs are copy-pasted and the profile slug is wrong or the link format has changed.
