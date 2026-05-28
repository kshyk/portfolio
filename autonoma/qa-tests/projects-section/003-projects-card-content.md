---
title: "Project card shows name, description, and technology icons"
description: "Verify that a project card displays its full content including name, description, and technology stack icons"
criticality: critical
scenario: standard
flow: "Projects Section"
---

# Test: Project card shows name, description, and technology icons

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`.

After setup, you should be on the portfolio page. Scroll down to the Projects section.

## Steps

1. Scroll down to the Projects section and locate the card titled "Portfolio"
2. Assert that the card title "Portfolio" is visible
3. Assert that the card description "About me and my projects" is visible
4. Assert that technology icons are displayed on the "Portfolio" card
5. Assert that the technology icons section on the "Portfolio" card shows icons for its 10 technologies (including TypeScript, JavaScript, Tailwind CSS)
6. Assert that an SVG icon is rendered for at least one of the displayed technologies

## Expected result

The "Portfolio" project card displays its name as the card title, "About me and my projects" as the description, and a row of technology SVG icons representing its tech stack.

## What bug this might catch

Missing data binding between the project object fields and the card template, or the technology icons array not being iterated and rendered correctly within the card.
