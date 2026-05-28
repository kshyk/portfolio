---
title: "Extremely long input in message field does not break layout"
description: "Verify that entering a very long message (500+ characters) does not cause layout overflow or UI breakage"
criticality: mid
scenario: standard
flow: "Contact Form"
---

# Test: Extremely long input in message field does not break layout

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`.

After setup, you should be on the portfolio page. Scroll down to the Contact section.

## Steps

1. Scroll down to the Contact section
2. Click on the "Subject" input field
3. Type "A very long subject line that exceeds typical length to test overflow handling in the input field and see if it truncates or wraps correctly" into the "Subject" field
4. Click on the "Message" textarea
5. Type a 600-character message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac." into the "Message" field
6. Assert that the textarea does not overflow its container horizontally
7. Assert that the "Submit" button remains visible and is not pushed off-screen
8. Click the "Submit" button
9. Assert that the form submits successfully (fields are reset to empty)

## Expected result

The textarea accommodates the long message by expanding vertically or providing internal scroll. The form layout is not broken, the submit button remains accessible, and the form submits successfully.

## What bug this might catch

The textarea or its container lacking proper overflow handling, causing horizontal scroll or pushing other elements off-screen. The mailto URL construction could also break with very long encoded strings.
