---
title: "Hero displays developer name and title"
description: "Verify the Hero section shows the developer's full name and professional title with company link"
criticality: critical
scenario: standard
flow: "Hero Section"
---

# Test: Hero displays developer name and title

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`.

After setup, you should see the Hero section at the top of the page with an avatar, name, and description.

## Steps

1. Assert that the text "Jakub Turkiewicz" is visible as a heading in the Hero section
2. Assert that the text "Principal Automation QA Architect" is visible below the name
3. Assert that the text "Beekeeper" is visible as part of the description
4. Assert that "Beekeeper" is rendered as a clickable link

## Expected result

The Hero section displays the full name "Jakub Turkiewicz" as a prominent heading, with the professional title "Principal Automation QA Architect @ Beekeeper" below it. "Beekeeper" is a hyperlink.

## What bug this might catch

Missing or incorrect data binding from `siteConfig` -- the name or description fields could be empty, swapped, or referencing a stale config value.
