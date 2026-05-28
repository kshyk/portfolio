---
title: "Projects section heading is displayed"
description: "Verify the Projects section renders with the heading text 'Projects' visible on the page"
criticality: critical
scenario: standard
flow: "Projects Section"
---

# Test: Projects section heading is displayed

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`.

After setup, you should be on the portfolio page. Scroll down past the Hero and Skills sections.

## Steps

1. Scroll down to the Projects section below the Skills section
2. Assert that the heading "Projects" is visible on the page
3. Assert that project cards are rendered below the "Projects" heading

## Expected result

The Projects section is visible below the Skills section with the heading text "Projects" and a grid of project cards below it.

## What bug this might catch

The conditional rendering logic (`projects.length > 0`) could have a bug that hides the heading even when projects exist, or the component could fail to import the projects data.
