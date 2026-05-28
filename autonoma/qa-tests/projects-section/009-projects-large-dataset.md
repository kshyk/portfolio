---
title: "Projects grid handles 20 cards without layout breakage"
description: "Verify the Projects grid renders correctly with 20 project cards from the large dataset"
criticality: low
scenario: large
flow: "Projects Section"
---

# Test: Projects grid handles 20 cards without layout breakage

## Setup

Using scenario: `large`

Navigate to the portfolio home page at `/`.

After setup, you should be on the portfolio page with the large dataset containing 20 projects.

## Steps

1. Scroll down to the Projects section
2. Assert that the heading "Projects" is visible
3. Assert that 20 project cards are rendered in the grid
4. Assert that the cards maintain the 2-column grid layout on desktop viewport
5. Scroll through all project cards to confirm none are cut off or hidden by overflow
6. Assert that the last project card ("WebdriverIO Mobile Suite") is visible and fully rendered
7. Assert that the "GitHub Repository" and "Live Demo" links are present on the last card

## Expected result

The Projects grid renders all 20 cards in a 2-column layout (10 rows). All cards display their full content including title, description, technology icons, and links. The page scrolls smoothly to accommodate the additional cards.

## What bug this might catch

The grid layout may break with a large number of cards, causing cards to overflow the container, technology icons to misalign, or the page to become excessively slow to render.
