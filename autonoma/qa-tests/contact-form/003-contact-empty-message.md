---
title: "Submitting with empty message shows validation error"
description: "Verify that submitting the contact form with an empty message field shows the validation error message"
criticality: high
scenario: standard
flow: "Contact Form"
---

# Test: Submitting with empty message shows validation error

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`.

After setup, you should be on the portfolio page. Scroll down to the Contact section.

## Steps

1. Scroll down to the Contact section
2. Click on the "Subject" input field
3. Type "Test subject line" into the "Subject" field
4. Leave the "Message" textarea empty
5. Click the "Submit" button
6. Assert that the text "Message is required" appears below the Message textarea
7. Assert that no mailto link is opened (form submission is prevented)

## Expected result

The form rejects the submission because the Message field is empty. An inline validation error "Message is required" appears below the Message textarea. The form is not submitted.

## What bug this might catch

Missing required validation on the Message field in the zod schema, or the error message component not rendering below the textarea element.
