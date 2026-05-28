---
title: "Browse projects and skills then submit contact form"
description: "Verify a complete user journey: review the developer's skills and projects, then send a contact message"
criticality: critical
scenario: standard
flow: "Journey"
---

# Test: Browse projects and skills then submit contact form

## Setup

Using scenario: `standard`

Navigate to the portfolio home page at `/`.

After setup, you should see the Hero section at the top of the page.

## Steps

1. Assert that the text "Jakub Turkiewicz" is visible in the Hero section
2. Assert that the text "Principal Automation QA Architect" is visible
3. Scroll down to the Skills section
4. Assert that the heading "Skills" is visible
5. Assert that the "Languages" category contains the text "TypeScript"
6. Assert that the "Technologies" category contains the text "Cypress"
7. Assert that the "Technologies" category contains the text "Selenium"
8. Scroll down to the Projects section
9. Assert that the heading "Projects" is visible
10. Assert that a card with the title "Cypress Testing Framework" is visible
11. Assert that the description "Collection of automated tests for web applications using CypressIO framework" is visible on the Cypress card
12. Assert that the "GitHub Repository" link on the Cypress card has an href containing "cypress-fw"
13. Assert that a card with the title "Playwright Testing Framework" is visible
14. Scroll down to the Contact section
15. Assert that the heading "Contact" is visible
16. Assert that the text "Your message will be sent to jj.turkiewicz@gmail.com via email." is visible
17. Click on the "Subject" input field
18. Type "Interested in your Cypress Testing Framework" into the "Subject" field
19. Click on the "Message" textarea
20. Type "Hi Jakub, I reviewed your projects and I am particularly interested in the Cypress Testing Framework. Could we discuss how you structured the test suite?" into the "Message" field
21. Click the "Submit" button
22. Assert that no validation error messages are displayed
23. Assert that the "Subject" field is now empty (form has been reset)
24. Assert that the "Message" textarea is now empty (form has been reset)

## Expected result

The user can browse through the developer's skills and projects, see specific details about each project, and then successfully submit a contact message referencing what they found. The form accepts the input, triggers the mailto link, and resets. This validates the complete portfolio browsing and contact journey.

## What bug this might catch

Cross-section rendering issues where scrolling through data-heavy sections (Skills with 47 items, Projects with 6 cards) could cause performance degradation or state issues that affect the Contact form's ability to submit. Also catches issues where the form fails to submit after extensive page scrolling.
