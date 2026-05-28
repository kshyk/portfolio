---
title: "Form fields reset after successful submission"
description: "Verify that the subject and message fields are cleared after a successful form submission"
criticality: mid
scenario: standard
flow: "Contact Form"
---

# Test: Form fields reset after successful submission

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`.

After setup, you should be on the portfolio page. Scroll down to the Contact section.

## Steps

1. Scroll down to the Contact section
2. Click on the "Subject" input field
3. Type "Meeting request" into the "Subject" field
4. Click on the "Message" textarea
5. Type "I would like to schedule a meeting to discuss your portfolio." into the "Message" field
6. Assert that the "Subject" field contains the text "Meeting request"
7. Assert that the "Message" textarea contains the typed message
8. Click the "Submit" button
9. Assert that the "Subject" field is now empty (contains no text)
10. Assert that the "Message" textarea is now empty (contains no text)
11. Assert that the placeholder text "Enter the subject" is visible in the Subject field
12. Assert that the placeholder text "Enter your message" is visible in the Message field

## Expected result

After a successful form submission, both the Subject and Message fields are reset to empty, showing their original placeholder text. The form is ready for a new submission.

## What bug this might catch

The `form.reset()` call being missing or placed before the mailto URL construction, or the reset not clearing react-hook-form's internal state correctly.
