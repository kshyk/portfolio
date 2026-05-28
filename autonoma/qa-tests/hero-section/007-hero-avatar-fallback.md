---
title: "Avatar shows fallback when image fails to load"
description: "Verify the avatar displays a text fallback when the GitHub avatar image cannot be loaded"
criticality: mid
scenario: standard
flow: "Hero Section"
---

# Test: Avatar shows fallback when image fails to load

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`. Simulate a network condition where the GitHub avatars CDN is unreachable or block the avatar image URL.

After setup, you should see the Hero section where the avatar image fails to load.

## Steps

1. Assert that the avatar area is still visible (not collapsed or hidden)
2. Assert that a text fallback is displayed in the avatar area showing the first letter of the developer's name
3. Assert that the fallback text is visually centered within a circular container

## Expected result

When the avatar image fails to load, the Avatar component displays a circular fallback with the letter "J" (the first letter of "Jakub Turkiewicz") instead of showing a broken image icon or empty space.

## What bug this might catch

Missing `AvatarFallback` implementation in the Avatar component, or the fallback text not being derived from the developer's name correctly.
