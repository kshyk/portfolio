---
title: "Special characters in subject and message are handled"
description: "Verify the contact form correctly handles special characters including ampersands, angle brackets, and emoji"
criticality: mid
scenario: standard
flow: "Contact Form"
---

# Test: Special characters in subject and message are handled

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`.

After setup, you should be on the portfolio page. Scroll down to the Contact section.

## Steps

1. Scroll down to the Contact section
2. Click on the "Subject" input field
3. Type "Q&A about <testing> and 'automation'" into the "Subject" field
4. Click on the "Message" textarea
5. Type "Hello! I have questions about: 1) XSS <script>alert('test')</script> 2) SQL '; DROP TABLE users; -- 3) Unicode and special chars" into the "Message" field
6. Click the "Submit" button
7. Assert that no validation error messages are displayed
8. Assert that the form submits successfully (fields are reset to empty)
9. Assert that no JavaScript alert dialog appears on the page

## Expected result

The form accepts special characters including ampersands, angle brackets, single quotes, and script injection strings. The characters are URL-encoded in the mailto link. No XSS or injection attack is triggered.

## What bug this might catch

Missing URL encoding in the mailto link construction causing broken mailto URLs, or XSS vulnerability if special characters are reflected into the DOM without sanitization.
