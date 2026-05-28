---
title: "Switching to System theme respects OS preference"
description: "Verify that selecting System from the theme dropdown defers to the operating system color scheme preference"
criticality: high
scenario: standard
flow: "Theme Toggler"
---

# Test: Switching to System theme respects OS preference

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`.

After setup, you should see the Hero section with the theme toggler button.

## Steps

1. Click the theme toggler button in the top-right of the Hero card
2. Assert that the dropdown menu appears with "Light", "Dark", and "System" options
3. Click the "System" option in the dropdown menu
4. Assert that the dropdown menu closes
5. Assert that the page theme matches the operating system's color scheme preference
6. Assert that the page renders without any visual glitches or theme flickering

## Expected result

After selecting "System", the page theme matches the OS preference. If the OS is set to dark mode, the page shows dark styling; if set to light mode, the page shows light styling. The `enableSystem` prop on the ThemeProvider handles this delegation.

## What bug this might catch

The `enableSystem` prop not being set on the ThemeProvider, or the `prefers-color-scheme` media query not being read correctly, causing the System option to do nothing or always default to light.
