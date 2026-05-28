---
title: "Hero section adapts layout on mobile viewport"
description: "Verify the Hero section switches to a centered mobile layout on narrow viewports"
criticality: low
scenario: standard
flow: "Hero Section"
---

# Test: Hero section adapts layout on mobile viewport

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/` with a mobile viewport width (below 768px).

After setup, you should see the Hero section rendered in mobile layout.

## Steps

1. Assert that the Hero section is visible on the page
2. Assert that the avatar image is centered above the name text (not beside it)
3. Assert that the name "Jakub Turkiewicz" is center-aligned
4. Assert that the GitHub, LinkedIn, and Resume buttons are visible and not cut off
5. Scroll down to confirm the entire Hero section content is accessible without horizontal scrolling

## Expected result

On a mobile viewport, the Hero section displays in a stacked centered layout with the avatar above the name, rather than the side-by-side desktop layout. All buttons remain visible and tappable.

## What bug this might catch

Missing or incorrect responsive breakpoint classes (md: prefix) causing the desktop side-by-side layout to persist on mobile, leading to cramped or overflowing content.
