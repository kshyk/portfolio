---
title: "Languages category displays all 7 skill items"
description: "Verify the Languages category shows all 7 programming language skills with their labels"
criticality: high
scenario: standard
flow: "Skills Section"
---

# Test: Languages category displays all 7 skill items

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`.

After setup, you should be on the portfolio page. Scroll down to the Skills section.

## Steps

1. Scroll down to the Skills section and locate the "Languages" category
2. Assert that the text "JavaScript" is visible under the Languages category
3. Assert that the text "TypeScript" is visible under the Languages category
4. Assert that the text "Java" is visible under the Languages category
5. Assert that the text "Python" is visible under the Languages category
6. Assert that the text "Swift" is visible under the Languages category
7. Assert that the text "Kotlin" is visible under the Languages category
8. Assert that the text "Groovy" is visible under the Languages category
9. Assert that there are exactly 7 skill items displayed under the Languages category

## Expected result

The Languages category displays all 7 programming languages (JavaScript, TypeScript, Java, Python, Swift, Kotlin, Groovy) with their names visible as labels.

## What bug this might catch

Missing entries in the `languages` array of `skills.json`, or a rendering bug that truncates the list or fails to iterate over all items.
