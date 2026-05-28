---
title: "Footer displays copyright with current year"
description: "Verify the footer shows the copyright notice with the dynamically computed current year"
criticality: high
scenario: standard
flow: "Footer"
---

# Test: Footer displays copyright with current year

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`.

After setup, you should be on the portfolio page. Scroll to the bottom of the page.

## Steps

1. Scroll to the bottom of the page to the footer area
2. Assert that the footer is visible at the bottom of the page
3. Assert that the footer contains the text "2023-"
4. Assert that the footer contains the text "by kshyk. All Rights Reserved."
5. Assert that the year after the dash is the current year (2026)
6. Assert that the full copyright text reads "(c) 2023-2026 by kshyk. All Rights Reserved." or similar with the copyright symbol

## Expected result

The footer displays the copyright notice with the year range starting from 2023 and ending with the current year, dynamically computed by `new Date().getFullYear()`.

## What bug this might catch

A hardcoded year value that does not update automatically, or the `getFullYear()` call being replaced with a static string during a refactor.
