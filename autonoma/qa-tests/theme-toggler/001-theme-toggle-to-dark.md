---
title: "Switching to Dark theme applies dark styling"
description: "Verify that selecting Dark from the theme dropdown applies the dark CSS class to the page"
criticality: critical
scenario: standard
flow: "Theme Toggler"
---

# Test: Switching to Dark theme applies dark styling

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`.

After setup, you should see the Hero section with the theme toggler button in the top-right corner of the Hero card. The default theme should be Light.

## Steps

1. Assert that the page is currently in light theme (the `<html>` element does not have the class "dark")
2. Click the theme toggler button (the button with the sun/moon icon labeled "Toggle theme") in the top-right of the Hero card
3. Assert that a dropdown menu appears with three options: "Light", "Dark", and "System"
4. Click the "Dark" option in the dropdown menu
5. Assert that the dropdown menu closes
6. Assert that the `<html>` element now has the class "dark"
7. Assert that the page background has changed to a dark color
8. Assert that text on the page is now displayed in a light color against the dark background

## Expected result

After selecting "Dark" from the theme dropdown, the page switches to dark mode. The `<html>` element receives the "dark" class, CSS variables update to dark theme values, and the entire page renders with dark backgrounds and light text.

## What bug this might catch

The `setTheme('dark')` call not being wired to the dropdown menu item, the ThemeProvider not applying the class attribute correctly, or the dark CSS variables not being defined in `globals.css`.
