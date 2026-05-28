# Contact Form

## Overview
A client-side contact form that composes a mailto link and opens it in the user's email client.

## Component
- **File**: `components/contact.tsx`
- **Type**: Client component ("use client")
- **Parent**: `app/page.tsx`

## Form Fields
1. **Subject** (Input)
   - Label: "Subject"
   - Placeholder: "Enter the subject"
   - Validation: Required, minimum 1 character
   - Error message: "Subject is required"

2. **Message** (Textarea)
   - Label: "Message"
   - Placeholder: "Enter your message"
   - Validation: Required, minimum 1 character
   - Error message: "Message is required"
   - Helper text: "Your message will be sent to jj.turkiewicz@gmail.com via email."

## Submit Button
- Full width, contains an envelope icon and text "Submit"
- On click: validates form, then sets `window.location.href` to a `mailto:` URL with encoded subject and body
- After submission: form fields are reset to empty strings

## Technical Details
- Uses react-hook-form with zodResolver for validation
- Zod schema requires both fields to be non-empty strings
- No server-side submission; purely client-side mailto redirect
- Email address comes from `siteConfig.email` in `config/site.ts`

## Validation Behavior
- Inline error messages appear below each field when validation fails
- Errors shown on submit attempt (not on blur by default with react-hook-form defaults)
