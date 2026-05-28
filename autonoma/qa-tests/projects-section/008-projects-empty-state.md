---
title: "Projects section heading is hidden when no projects exist"
description: "Verify the Projects section heading is not rendered when the projects data array is empty"
criticality: mid
scenario: empty
flow: "Projects Section"
---

# Test: Projects section heading is hidden when no projects exist

## Setup

Using scenario: `empty`

Navigate to the portfolio home page at `/`.

After setup, you should be on the portfolio page with empty data files.

## Steps

1. Scroll down past the Skills section to where the Projects section would normally appear
2. Assert that the heading "Projects" is NOT visible on the page
3. Assert that no project cards are rendered
4. Assert that the Contact section appears directly after the Skills section area without a visible gap from a hidden Projects section
5. Assert that the page layout is not broken by the absence of the Projects section

## Expected result

When the projects array is empty, the Projects section heading is not rendered due to the conditional check (`projects.length > 0`). The page transitions directly from the Skills area to the Contact section.

## What bug this might catch

The conditional rendering check failing to hide the "Projects" heading when the array is empty, leaving an orphaned heading with no content below it.
