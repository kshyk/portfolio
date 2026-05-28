---
title: "Footer is visible at the bottom of the page"
description: "Verify the footer is always rendered at the bottom of the page after all content sections"
criticality: low
scenario: standard
flow: "Footer"
---

# Test: Footer is visible at the bottom of the page

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`.

After setup, you should be on the portfolio page.

## Steps

1. Scroll to the very bottom of the page
2. Assert that the footer is the last visible element on the page
3. Assert that the footer appears below the Contact section
4. Assert that the footer text is visible and not hidden or overlapped by other elements
5. Assert that the footer has muted/subtle text styling (smaller font size, muted color)

## Expected result

The footer is consistently rendered at the very bottom of the page, below all content sections. It uses `mt-auto` to push itself to the bottom of the viewport even when content is short. The text has muted styling.

## What bug this might catch

The `mt-auto` class being removed causing the footer to not push to the bottom on short pages, or a CSS stacking issue where the Contact section overlaps the footer.
