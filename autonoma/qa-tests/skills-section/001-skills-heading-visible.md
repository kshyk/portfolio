---
title: "Skills section heading is displayed"
description: "Verify the Skills section renders with the heading text 'Skills' visible on the page"
criticality: critical
scenario: standard
flow: "Skills Section"
---

# Test: Skills section heading is displayed

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`.

After setup, you should be on the portfolio page. Scroll down past the Hero section.

## Steps

1. Scroll down to the Skills section below the Hero section
2. Assert that the heading "Skills" is visible on the page
3. Assert that a Card component is rendered below the "Skills" heading containing skill items

## Expected result

The Skills section is visible below the Hero section with the heading text "Skills" and a card containing categorized skill entries.

## What bug this might catch

The Skills section heading could be missing if the component fails to render, or the section could be hidden due to a CSS issue or conditional rendering bug.
