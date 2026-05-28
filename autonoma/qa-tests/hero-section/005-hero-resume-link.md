---
title: "Resume button links to Canva CV"
description: "Verify the Resume button in the Hero section links to the Canva resume document"
criticality: high
scenario: standard
flow: "Hero Section"
---

# Test: Resume button links to Canva CV

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`.

After setup, you should see the Hero section with three buttons below the name and title.

## Steps

1. Assert that a button labeled "Resume" is visible in the Hero section
2. Assert that the "Resume" button has an href attribute containing "canva.com/design"
3. Assert that the "Resume" button opens in a new tab (has `target="_blank"` attribute)

## Expected result

The Resume button is visible, styled with the secondary variant, and links to the Canva-hosted CV document. It opens in a new tab.

## What bug this might catch

Stale or broken resume link in `siteConfig` -- Canva document URLs can change if the document is recreated or the sharing settings are modified.
