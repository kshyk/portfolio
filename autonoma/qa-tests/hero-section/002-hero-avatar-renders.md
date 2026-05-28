---
title: "Hero avatar image loads from GitHub"
description: "Verify the avatar image in the Hero section loads successfully from the GitHub avatars URL"
criticality: critical
scenario: standard
flow: "Hero Section"
---

# Test: Hero avatar image loads from GitHub

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`.

After setup, you should see the Hero section at the top of the page.

## Steps

1. Assert that a circular avatar image is visible in the Hero section
2. Assert that the avatar image has loaded successfully (not showing a broken image icon)
3. Assert that the avatar image source URL contains "avatars.githubusercontent.com"

## Expected result

The Hero section displays a circular avatar image that has loaded from the GitHub avatars CDN. The image is not broken and renders at the expected size.

## What bug this might catch

Broken avatar URL in `siteConfig`, missing `next/image` configuration for the external domain, or CORS issues preventing the GitHub avatar from loading.
