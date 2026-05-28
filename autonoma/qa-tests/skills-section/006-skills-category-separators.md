---
title: "Horizontal separators appear between skill categories"
description: "Verify that horizontal separator lines are rendered between each pair of adjacent skill categories"
criticality: mid
scenario: standard
flow: "Skills Section"
---

# Test: Horizontal separators appear between skill categories

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`.

After setup, you should be on the portfolio page. Scroll down to the Skills section.

## Steps

1. Scroll down to the Skills section
2. Assert that a horizontal separator line is visible between the "Languages" category and the "Technologies" category
3. Assert that a horizontal separator line is visible between the "Technologies" category and the "Systems" category
4. Assert that a horizontal separator line is visible between the "Systems" category and the "Editors" category
5. Assert that a horizontal separator line is visible between the "Editors" category and the "AI" category
6. Assert that there is no separator after the last category ("AI")

## Expected result

Four horizontal separator lines are rendered between the five skill categories, visually dividing each category. No separator appears after the final "AI" category.

## What bug this might catch

An off-by-one error in the separator rendering logic where the last category incorrectly gets a trailing separator, or separators are missing entirely due to a removed Separator import.
