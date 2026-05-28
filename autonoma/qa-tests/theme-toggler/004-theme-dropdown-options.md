---
title: "Theme dropdown shows Light, Dark, and System options"
description: "Verify the theme toggler dropdown menu contains exactly three options: Light, Dark, and System"
criticality: mid
scenario: standard
flow: "Theme Toggler"
---

# Test: Theme dropdown shows Light, Dark, and System options

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`.

After setup, you should see the Hero section with the theme toggler button in the top-right corner.

## Steps

1. Click the theme toggler button (the button labeled "Toggle theme" for screen readers) in the top-right of the Hero card
2. Assert that a dropdown menu appears
3. Assert that the dropdown menu contains an option labeled "Light"
4. Assert that the dropdown menu contains an option labeled "Dark"
5. Assert that the dropdown menu contains an option labeled "System"
6. Assert that there are exactly 3 options in the dropdown menu
7. Click outside the dropdown menu to close it
8. Assert that the dropdown menu is no longer visible

## Expected result

The theme dropdown displays exactly three options: "Light", "Dark", and "System". The menu opens on click and closes when clicking outside.

## What bug this might catch

A missing dropdown menu item (e.g., "System" option removed during refactoring), extra unexpected options, or the dropdown failing to close when clicking outside.
