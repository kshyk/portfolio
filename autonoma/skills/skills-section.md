# Skills Section

## Overview
Displays the developer's technical skills organized into five categories, each rendered with an icon and label.

## Component
- **File**: `components/skills.tsx`
- **Type**: Server component
- **Parent**: `app/page.tsx`

## Categories
1. **Languages** (7 items): JavaScript, TypeScript, Java, Python, Swift, Kotlin, Groovy
2. **Technologies** (24 items): GNU Bash, Bootstrap, ESLint, Prettier, Yarn, Markdown, MySQL, PostgreSQL, JUnit5, Selenium, Cypress, TestCafe, WebdriverIO, Firebase, Gradle, GitHub Actions, AWS, Docker, Git, GitHub, Jenkins, SonarQube Cloud, Renovate, Dependabot
3. **Systems** (8 items): macOS, Linux, Linux Mint, Ubuntu, Alpine Linux, Windows, iOS, Android
4. **Editors** (4 items): IntelliJ IDEA, Visual Studio Code, Xcode, Android Studio
5. **AI** (4 items): OpenAI, GitHub Copilot, Google Gemini, CodeRabbit

## Data Source
- `data/skills.json` -- static JSON file with arrays of `{ name, icon }` objects

## Visual Structure
- Section heading "Skills" above a single Card
- Each category has a CardTitle header and a flex-wrap grid of icon+label pairs
- Categories are separated by horizontal Separator components (except the last one)

## Key Behaviors
- Icons are rendered via `SimpleIcon` component using the simple-icons library
- If an icon name does not match a known simple-icons entry, an empty fragment is rendered
- All content is static; no user interaction beyond scrolling
