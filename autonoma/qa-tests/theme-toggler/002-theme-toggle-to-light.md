---
title: "Switching to Light theme applies light styling"
description: "Verify that selecting Light from the theme dropdown switches back to light mode after being in dark mode"
criticality: high
scenario: standard
flow: "Theme Toggler"
---

# Test: Switching to Light theme applies light styling

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`.

After setup, you should see the Hero section. Switch to Dark mode first by clicking the theme toggler and selecting "Dark".

## Steps

1. Click the theme toggler button in the top-right of the Hero card
2. Click the "Dark" option to switch to dark mode
3. Assert that the page is now in dark theme (the `<html>` element has the class "dark")
4. Click the theme toggler button again
5. Assert that the dropdown menu appears with "Light", "Dark", and "System" options
6. Click the "Light" option in the dropdown menu
7. Assert that the `<html>` element no longer has the class "dark"
8. Assert that the page background has returned to a light color
9. Assert that text on the page is now displayed in a dark color against the light background

## Expected result

After switching from Dark to Light, the page returns to light mode. The "dark" class is removed from the `<html>` element and the CSS variables revert to light theme values.

## What bug this might catch

The theme toggle not correctly removing the "dark" class when switching back to light mode, or the CSS variables not reverting properly causing a mixed theme state.
