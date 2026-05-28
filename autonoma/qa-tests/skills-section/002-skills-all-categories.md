---
title: "All five skill categories are rendered with correct headings"
description: "Verify that all five skill category headings (Languages, Technologies, Systems, Editors, AI) appear in the Skills section"
criticality: critical
scenario: standard
flow: "Skills Section"
---

# Test: All five skill categories are rendered with correct headings

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`.

After setup, you should be on the portfolio page. Scroll down to the Skills section.

## Steps

1. Scroll down to the Skills section
2. Assert that the category heading "Languages" is visible inside the Skills card
3. Assert that the category heading "Technologies" is visible inside the Skills card
4. Assert that the category heading "Systems" is visible inside the Skills card
5. Assert that the category heading "Editors" is visible inside the Skills card
6. Assert that the category heading "AI" is visible inside the Skills card

## Expected result

All five skill category headings are visible inside the Skills card in the order: Languages, Technologies, Systems, Editors, AI.

## What bug this might catch

A missing category key in `skills.json`, a typo in the category name mapping, or a rendering bug that skips one of the categories during iteration.
