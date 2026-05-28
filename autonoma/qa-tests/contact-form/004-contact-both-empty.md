---
title: "Submitting with both fields empty shows both errors"
description: "Verify that submitting the contact form with both fields empty shows validation errors for both fields simultaneously"
criticality: high
scenario: standard
flow: "Contact Form"
---

# Test: Submitting with both fields empty shows both errors

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`.

After setup, you should be on the portfolio page. Scroll down to the Contact section.

## Steps

1. Scroll down to the Contact section
2. Assert that the "Subject" field is empty
3. Assert that the "Message" textarea is empty
4. Click the "Submit" button
5. Assert that the text "Subject is required" appears below the Subject input field
6. Assert that the text "Message is required" appears below the Message textarea
7. Assert that both error messages are visible simultaneously

## Expected result

Both validation error messages appear at the same time when the form is submitted with both fields empty. The form does not submit and no mailto link is triggered.

## What bug this might catch

A validation implementation that stops at the first error and only shows one message, rather than validating all fields and showing all errors simultaneously.
