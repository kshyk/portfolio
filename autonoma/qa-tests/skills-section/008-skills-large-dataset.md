---
title: "Skills section handles 120 skills without layout breakage"
description: "Verify the Skills section renders correctly with 120 skills across all categories without overflow or visual breakage"
criticality: low
scenario: large
flow: "Skills Section"
---

# Test: Skills section handles 120 skills without layout breakage

## Setup

Using scenario: `large`

Navigate to the portfolio home page at `/`.

After setup, you should be on the portfolio page with the large dataset containing 120 skills.

## Steps

1. Scroll down to the Skills section
2. Assert that the "Skills" heading is visible
3. Assert that the "Languages" category shows 20 skill items
4. Assert that the "Technologies" category shows 40 skill items
5. Scroll through the entire Skills card to confirm all categories are visible
6. Assert that no skill items are cut off or hidden by overflow
7. Assert that the flex-wrap layout correctly wraps skill items onto multiple rows without horizontal scrolling

## Expected result

The Skills section renders all 120 skills across 5 categories. The flex-wrap layout wraps items onto multiple rows as needed. No items are hidden by overflow, and vertical scrolling is sufficient to view all content.

## What bug this might catch

The flex-wrap container may not handle a large number of items gracefully, causing horizontal overflow, items being pushed outside the card boundaries, or excessive vertical height that breaks the page layout.
