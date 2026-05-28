---
title: "Skills section renders gracefully with no skill data"
description: "Verify the Skills section does not crash or display broken UI when all skill categories are empty"
criticality: mid
scenario: empty
flow: "Skills Section"
---

# Test: Skills section renders gracefully with no skill data

## Setup

Using scenario: `empty`

Navigate to the portfolio home page at `/`.

After setup, you should be on the portfolio page with empty data files.

## Steps

1. Scroll down to where the Skills section would normally appear
2. Assert that the page does not show any JavaScript errors or broken layout
3. Assert that either the "Skills" heading is still visible with an empty card, or the section is gracefully hidden
4. Assert that no broken icon placeholders or error messages are displayed in the Skills area
5. Scroll down further to confirm the rest of the page (Contact section) still renders correctly below

## Expected result

The Skills section renders without crashing when all skill category arrays are empty. The page layout remains intact and subsequent sections are not affected.

## What bug this might catch

An unhandled empty array causing a crash in the map/iteration logic, or the Skills card rendering with broken layout when there are zero items to display.
