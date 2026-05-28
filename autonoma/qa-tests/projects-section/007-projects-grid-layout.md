---
title: "Projects grid shows 2 columns on desktop"
description: "Verify the Projects section displays cards in a 2-column grid layout on desktop viewports"
criticality: mid
scenario: standard
flow: "Projects Section"
---

# Test: Projects grid shows 2 columns on desktop

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/` with a desktop viewport width (above 640px).

After setup, you should be on the portfolio page at desktop width. Scroll down to the Projects section.

## Steps

1. Scroll down to the Projects section
2. Assert that the project cards are arranged in a grid layout
3. Assert that 2 project cards appear side by side in the same row on a desktop viewport
4. Assert that the "Portfolio" card and the "API Testing Framework" card are in the first row
5. Assert that the grid has 3 rows of 2 cards each to display all 6 projects

## Expected result

On a desktop viewport (sm+ breakpoint), the Projects section displays project cards in a 2-column grid. All 6 cards are arranged in 3 rows of 2 cards each.

## What bug this might catch

Missing `sm:grid-cols-2` class on the grid container, causing all cards to stack in a single column even on desktop viewports.
