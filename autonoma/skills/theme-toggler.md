# Theme Toggler

## Overview
A dropdown button that allows visitors to switch between light, dark, and system color themes.

## Component
- **File**: `components/theme-toggler.tsx`
- **Type**: Client component ("use client")
- **Parent**: `components/hero.tsx` (rendered in the top-right of the Hero card)

## Provider
- **File**: `components/theme-provider.tsx`
- Wraps the entire app in `app/layout.tsx`
- Uses next-themes `ThemeProvider` with:
  - `attribute="class"` (applies theme via CSS class on `<html>`)
  - `defaultTheme="light"`
  - `enableSystem` (respects OS preference when "System" is selected)
  - `disableTransitionOnChange` (prevents flash during theme switch)

## UI Elements
- **Trigger Button**: Outline variant, icon-only, rounded-full
  - Sun icon visible in light mode, hidden in dark mode (via rotate/scale transitions)
  - Moon icon visible in dark mode, hidden in light mode
  - Screen reader text: "Toggle theme"
- **Dropdown Menu** (aligned to end):
  - "Light" option – sets the theme to light
  - "Dark" option – sets the theme to dark
  - "System" option – sets theme to match OS preference

## Theme Variables
- Light and dark CSS variable sets defined in `app/globals.css`
- Variables cover: background, foreground, card, popover, primary, secondary, muted, accent, destructive, border, input, ring
