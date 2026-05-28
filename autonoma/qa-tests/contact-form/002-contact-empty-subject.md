---
title: "Submitting with empty subject shows validation error"
description: "Verify that submitting the contact form with an empty subject field shows the validation error message"
criticality: high
scenario: standard
flow: "Contact Form"
---

# Test: Submitting with empty subject shows validation error

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`.

After setup, you should be on the portfolio page. Scroll down to the Contact section.

## Steps

1. Scroll down to the Contact section
2. Click on the "Message" textarea
3. Type "This is a test message with content." into the "Message" field
4. Leave the "Subject" field empty
5. Click the "Submit" button
6. Assert that the text "Subject is required" appears below the Subject input field
7. Assert that no mailto link is opened (form submission is prevented)

## Expected result

The form rejects the submission because the Subject field is empty. An inline validation error "Subject is required" appears below the Subject field. The form is not submitted and no mailto link is triggered.

## What bug this might catch

Missing required validation on the Subject field in the zod schema, or the error message not being wired to the correct form field via react-hook-form.
