---
title: "Submit contact form with valid subject and message"
description: "Verify the contact form opens a mailto link when submitted with valid subject and message values"
criticality: critical
scenario: standard
flow: "Contact Form"
---

# Test: Submit contact form with valid subject and message

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`.

After setup, you should be on the portfolio page. Scroll down to the Contact section.

## Steps

1. Scroll down to the Contact section
2. Assert that the heading "Contact" is visible and centered
3. Click on the "Subject" input field
4. Type "Project collaboration inquiry" into the "Subject" field
5. Click on the "Message" textarea
6. Type "Hello Jakub, I would like to discuss a potential collaboration on test automation." into the "Message" field
7. Click the "Submit" button
8. Assert that no validation error messages are displayed
9. Assert that the form fields are reset to empty after submission

## Expected result

The form accepts the valid input, constructs a mailto link with the encoded subject and message body, and resets both form fields to empty. The mailto link opens the user's email client (or triggers a navigation to the mailto URL).

## What bug this might catch

The form submission handler failing to construct the mailto URL correctly, the zod validation schema rejecting valid input, or the form not resetting after successful submission.
