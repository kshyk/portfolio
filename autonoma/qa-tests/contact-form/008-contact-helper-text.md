---
title: "Helper text displays correct email address"
description: "Verify the helper text below the message field shows the correct destination email address"
criticality: low
scenario: standard
flow: "Contact Form"
---

# Test: Helper text displays correct email address

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`.

After setup, you should be on the portfolio page. Scroll down to the Contact section.

## Steps

1. Scroll down to the Contact section
2. Assert that the text "Your message will be sent to jj.turkiewicz@gmail.com via email." is visible below the Message textarea
3. Assert that the email address "jj.turkiewicz@gmail.com" is present in the helper text

## Expected result

The helper text below the Message field displays the exact text "Your message will be sent to jj.turkiewicz@gmail.com via email." informing the user where their message will be sent.

## What bug this might catch

The helper text referencing a hardcoded email instead of `siteConfig.email`, or the email address being out of sync between the helper text and the actual mailto link target.
