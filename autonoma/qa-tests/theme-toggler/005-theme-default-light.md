---
title: "Default theme is Light on first visit"
description: "Verify the portfolio page loads with the light theme by default on a fresh visit"
criticality: low
scenario: standard
flow: "Theme Toggler"
---

# Test: Default theme is Light on first visit

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/` in a fresh browser session with no stored theme preference (clear localStorage if needed).

After setup, you should see the portfolio page loading for the first time.

## Steps

1. Assert that the page has finished loading
2. Assert that the `<html>` element does not have the class "dark"
3. Assert that the page background is a light color
4. Assert that the page text is a dark color against the light background
5. Assert that the theme toggler button shows the sun icon (indicating light mode is active)

## Expected result

On a fresh visit with no stored preference, the page loads in light mode as configured by `defaultTheme="light"` in the ThemeProvider.

## What bug this might catch

The `defaultTheme` prop being set to "dark" or "system" instead of "light", or a flash of dark mode before the default theme is applied (FOUC).
