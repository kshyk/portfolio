---
title: "Skill icons render as SVG images"
description: "Verify that skill items display SVG icons from the simple-icons library alongside their text labels"
criticality: high
scenario: standard
flow: "Skills Section"
---

# Test: Skill icons render as SVG images

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`.

After setup, you should be on the portfolio page. Scroll down to the Skills section.

## Steps

1. Scroll down to the Skills section and locate the "Languages" category
2. Assert that each skill item under "Languages" has an SVG icon rendered next to its label
3. Assert that the SVG icon next to "JavaScript" is visible and not an empty placeholder
4. Assert that the SVG icon next to "TypeScript" is visible and not an empty placeholder
5. Scroll to the "Technologies" category
6. Assert that the SVG icon next to "Docker" is visible and not an empty placeholder

## Expected result

Each skill item displays an SVG icon loaded from the simple-icons library alongside its text label. Icons are not missing, broken, or replaced by empty space.

## What bug this might catch

Incorrect icon slug mapping in `skills.json` (e.g., "java" instead of "openjdk"), a broken `SimpleIcon` component that fails to resolve icon paths, or a missing simple-icons package dependency.
