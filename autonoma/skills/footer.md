# Footer

## Overview
A simple footer rendered at the bottom of every page via the root layout.

## Component
- **File**: `components/footer.tsx`
- **Type**: Server component
- **Parent**: `app/layout.tsx` (rendered after `{children}` inside ThemeProvider)

## Content
- Copyright text: "(c) 2023-{current year} by kshyk. All Rights Reserved."
- The year range end is dynamically computed using `new Date().getFullYear()`
- "kshyk" is an external link to https://github.com/kshyk (opens in new tab)

## Styling
- Uses `mt-auto` to push footer to the bottom of the viewport
- Centered text, small size, muted foreground color
- Max width constrained to `xl` breakpoint
- Padding: `p-6` on mobile, `py-8` on md+
