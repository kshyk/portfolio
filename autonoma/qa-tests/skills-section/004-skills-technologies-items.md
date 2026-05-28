---
title: "Technologies category displays all 24 skill items"
description: "Verify the Technologies category renders all 24 technology skills with visible labels"
criticality: high
scenario: standard
flow: "Skills Section"
---

# Test: Technologies category displays all 24 skill items

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`.

After setup, you should be on the portfolio page. Scroll down to the Skills section.

## Steps

1. Scroll down to the Skills section and locate the "Technologies" category
2. Assert that the text "GNU Bash" is visible under the Technologies category
3. Assert that the text "Selenium" is visible under the Technologies category
4. Assert that the text "Cypress" is visible under the Technologies category
5. Assert that the text "Docker" is visible under the Technologies category
6. Assert that the text "GitHub Actions" is visible under the Technologies category
7. Assert that the text "Renovate" is visible under the Technologies category
8. Assert that the text "Dependabot" is visible under the Technologies category
9. Assert that there are exactly 24 skill items displayed under the Technologies category

## Expected result

The Technologies category displays all 24 technology items with their labels visible. The flex-wrap layout accommodates all items without overflow.

## What bug this might catch

A partial load of the `technologies` array in `skills.json`, or a flex-wrap layout issue where items beyond a certain count are pushed off-screen or hidden by overflow.
