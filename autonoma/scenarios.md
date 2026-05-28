---
scenario_count: 3
scenarios:
  - name: standard
    description: "Full static dataset matching the live portfolio: 1 SiteConfig, 47 skills across 5 categories, and 6 projects with embedded technologies"
    entity_types: 3
    total_entities: 54
  - name: empty
    description: "Zero data for empty state and onboarding testing -- verifies the page renders gracefully when data files are empty"
    entity_types: 0
    total_entities: 0
  - name: large
    description: "High-volume dataset with 20 projects and 120 skills to test rendering performance, grid layout overflow, and icon-loading at scale"
    entity_types: 3
    total_entities: 141
entity_types:
  - name: "SiteConfig"
  - name: "Skill"
  - name: "Project"
variable_fields: []
planning_sections:
  - schema_summary
  - relationship_map
  - variable_data_strategy
  - scoping_analysis
---

## Scoping Analysis

This application is a **static portfolio website** built with Next.js 15 using static export (`output: 'export'`). It has no backend, no database, no API routes, and no runtime data mutations. All data is defined in static JSON files (`data/skills.json`, `data/projects.json`) and a TypeScript config module (`config/site.ts`), imported at build time.

**There is no scope entity in the traditional sense.** The closest equivalent is `SiteConfig`, which is a singleton holding the site owner's identity. It does not partition data across tenants or test runs because the entire site is a single immutable deployment. Skills and Projects are independent static collections with no FK relationships to SiteConfig or to each other.

**Per-run isolation is not applicable.** Since no data is created, mutated, or deleted at runtime, parallel test runs cannot collide. Every test run reads the same static HTML/JSON. There is no need to slug fields with `{{testRunId}}` because there are no database writes, no uniqueness constraints, and no shared mutable state.

**Conclusion:** The app has no natural per-run isolation because it does not need any. All data is immutable at build time. Variable fields are unnecessary -- every value is a fixed literal that tests can assert against directly.

## Schema Summary

Three data models exist, all statically defined with no runtime creation path:

### SiteConfig (singleton)
- **Source**: `config/site.ts`
- **Fields**: `project` (string), `name` (string), `description` (string), `company` (string), `links.github` (URL), `links.linkedin` (URL), `links.company` (URL), `links.cv` (URL), `avatar` (URL), `email` (email string)
- **Consumed by**: Hero section (name, description, company, links, avatar), Contact form (email)
- **Creation**: Static TypeScript constant, no factory

### Skill
- **Source**: `data/skills.json`
- **Fields**: `name` (string), `icon` (string -- simple-icons slug)
- **Categories**: `languages` (7 items), `technologies` (24 items), `os` (8 items), `editors` (4 items), `ai` (4 items) -- total 47 skills
- **Consumed by**: Skills section component
- **Creation**: Static JSON import, no factory

### Project
- **Source**: `data/projects.json`
- **Fields**: `name` (string), `description` (string), `repository` (URL), `demo` (URL), `technologies` (optional array of `{ name: string, icon: string }`)
- **Consumed by**: Projects section component
- **Creation**: Static JSON import, no factory
- **Embedded sub-type**: `Technology` is nested within each Project, not a separate model

## Relationship Map

```
SiteConfig (singleton)
  -- no FK children --

Skill (standalone collection, categorized by JSON key)
  -- no FK parent or children --

Project (standalone collection)
  └── Technology[] (embedded array, not a separate model)
```

There are **no foreign key relationships** between the three models. SiteConfig, Skill, and Project are independent roots. Technology is an embedded sub-type within Project (an array of `{ name, icon }` objects), not a separately addressable entity.

Since all three models are independent roots with no FK edges, the "nested tree" for this application is trivially flat: each entity type is its own root node. There is no nesting hierarchy to enforce.

## Variable Data Strategy

**No variable fields are needed.** Every value in every scenario is a fixed literal.

Rationale:
- All data is static and immutable at build time -- there are no runtime writes, no database, and no API mutations
- There are no uniqueness constraints that could cause collisions between parallel test runs
- There are no time-sensitive fields (the only dynamic value in the app is the footer year, which is computed client-side from `new Date().getFullYear()` and is not part of any data entity)
- There are no backend-generated values since there is no backend
- Tests can assert directly against all hardcoded values (e.g., assert the page shows "Jakub Turkiewicz", assert there are 6 project cards, assert the Skills heading exists)

Tests reference all values as concrete literals. For example: "Verify the hero section displays the name 'Jakub Turkiewicz'" -- no variable indirection needed.

---

## Scenario: standard

**Purpose**: Mirrors the exact production dataset of the portfolio site. Tests verify that all sections render correctly with the real data.

**Credentials**: None required. The site is publicly accessible with no authentication.

### SiteConfig (1 entity)

| Field | Value |
|-------|-------|
| project | Portfolio |
| name | Jakub Turkiewicz |
| description | Principal Automation QA Architect |
| company | Beekeeper |
| links.github | https://github.com/kshyk |
| links.linkedin | https://www.linkedin.com/in/jakub-turkiewicz-39bb5729/ |
| links.company | https://www.beekeeper.io |
| links.cv | https://www.canva.com/design/DAF1T4lUogI/K_oACKYcQyLVuP02YYGRrA/view |
| avatar | https://avatars.githubusercontent.com/u/7526511?s=400&u=d0dde83aabfbff90ac8fe5edc828e762af72ddf9&v=4 |
| email | jj.turkiewicz@gmail.com |

### Skills (47 entities across 5 categories)

**Languages (7)**:

| name | icon |
|------|------|
| JavaScript | javascript |
| TypeScript | typescript |
| Java | openjdk |
| Python | python |
| Swift | swift |
| Kotlin | kotlin |
| Groovy | apachegroovy |

**Technologies (24)**:

| name | icon |
|------|------|
| GNU Bash | gnubash |
| Bootstrap | bootstrap |
| ESLint | eslint |
| Prettier | prettier |
| Yarn | yarn |
| Markdown | markdown |
| MySQL | mysql |
| PostgreSQL | postgresql |
| JUnit5 | junit5 |
| Selenium | selenium |
| Cypress | cypress |
| TestCafe | testcafe |
| WebdriverIO | webdriverio |
| Firebase | firebase |
| Gradle | gradle |
| GitHub Actions | githubactions |
| AWS | amazonwebservices |
| Docker | docker |
| Git | git |
| GitHub | github |
| Jenkins | jenkins |
| SonarQube Cloud | sonarqubecloud |
| Renovate | renovate |
| Dependabot | dependabot |

**Systems (8)**:

| name | icon |
|------|------|
| macOS | macos |
| Linux | linux |
| Linux Mint | linuxmint |
| Ubuntu | ubuntu |
| Alpine Mint | alpinelinux |
| Windows | windows |
| iOS | ios |
| Android | android |

**Editors (4)**:

| name | icon |
|------|------|
| IntelliJ IDEA | intellijidea |
| Visual Studio Code | visualstudiocode |
| Xcode | xcode |
| Android Studio | androidstudio |

**AI (4)**:

| name | icon |
|------|------|
| OpenAI | openai |
| GitHub Copilot | githubcopilot |
| Google Gemini | googlegemini |
| CodeRabbit | coderabbit |

### Projects (6 entities, each with embedded technologies)

**Project 1: Portfolio**

| Field | Value |
|-------|-------|
| name | Portfolio |
| description | About me and my projects |
| repository | https://github.com/kshyk/portfolio |
| demo | https://kshyk.github.io/portfolio/ |
| technologies | TypeScript, JavaScript, Tailwind CSS, ESLint, Prettier, Markdown, Yarn, Git, GitHub Actions, Renovate (10 items) |

**Project 2: API Testing Framework**

| Field | Value |
|-------|-------|
| name | API Testing Framework |
| description | Collection of automated tests for API endpoints using REST Assured framework |
| repository | https://github.com/kshyk/api-tests |
| demo | https://github.com/kshyk/api-tests/actions/workflows/main.yml |
| technologies | Java, JUnit5, Markdown, Gradle, Git, GitHub Actions, Renovate (7 items) |

**Project 3: Cypress Testing Framework**

| Field | Value |
|-------|-------|
| name | Cypress Testing Framework |
| description | Collection of automated tests for web applications using CypressIO framework |
| repository | https://github.com/kshyk/cypress-fw |
| demo | https://github.com/kshyk/cypress-fw/actions/workflows/main.yml |
| technologies | TypeScript, Cypress, ESLint, Prettier, Markdown, Yarn, Git, GitHub Actions, Renovate (9 items) |

**Project 4: Playwright Testing Framework**

| Field | Value |
|-------|-------|
| name | Playwright Testing Framework |
| description | Collection of automated tests for web applications using MS Playwright framework |
| repository | https://github.com/kshyk/playwright-fw |
| demo | https://github.com/kshyk/playwright-fw/actions/workflows/main.yml |
| technologies | TypeScript, ESLint, Prettier, Markdown, Yarn, Git, GitHub Actions, Renovate (8 items) |

**Project 5: Selenide Testing Framework**

| Field | Value |
|-------|-------|
| name | Selenide Testing Framework |
| description | Collection of automated tests for web applications using Selenide framework |
| repository | https://github.com/kshyk/selenium-fw |
| demo | https://github.com/kshyk/selenium-fw/actions/workflows/main.yml |
| technologies | Java, JUnit5, Selenium, Markdown, Gradle, Git, GitHub Actions, Renovate (8 items) |

**Project 6: TestCafe Testing Framework**

| Field | Value |
|-------|-------|
| name | TestCafe Testing Framework |
| description | Collection of automated tests for web applications using TestCafe framework |
| repository | https://github.com/kshyk/testcafe-fw |
| demo | https://github.com/kshyk/testcafe-fw/actions/workflows/main.yml |
| technologies | TypeScript, JavaScript, TestCafe, ESLint, Prettier, Markdown, Yarn, Git, GitHub Actions, Renovate (10 items) |

### Aggregate Counts

| Entity Type | Count |
|-------------|-------|
| SiteConfig | 1 |
| Skill | 47 |
| Project | 6 |
| **Total** | **54** |

---

## Scenario: empty

**Purpose**: Tests how the application renders when data sources contain no entries. Verifies graceful handling of empty states -- the Skills section shows no icons, the Projects section heading is hidden (conditional render), and the Hero/Contact sections still render from SiteConfig.

**Credentials**: None required.

**Note**: In this static application, an "empty" scenario means the JSON data files contain empty arrays/objects. The SiteConfig singleton is excluded because it is required for the Hero and Contact sections to function at all -- without it, the page would not render meaningfully.

### SiteConfig

None -- excluded to test full empty state.

### Skills

None -- `data/skills.json` contains empty category arrays: `{ "languages": [], "technologies": [], "os": [], "editors": [], "ai": [] }`.

### Projects

None -- `data/projects.json` contains an empty array: `[]`. The Projects section heading should not render (conditional: `projects.length > 0`).

### Aggregate Counts

| Entity Type | Count |
|-------------|-------|
| SiteConfig | 0 |
| Skill | 0 |
| Project | 0 |
| **Total** | **0** |

---

## Scenario: large

**Purpose**: Tests rendering performance and layout behavior with a high volume of data. Verifies that the Skills section handles many icon entries without layout breakage, the Projects grid scales correctly with many cards, and the page remains scrollable and responsive under load.

**Credentials**: None required.

### SiteConfig (1 entity)

Same as `standard` -- the SiteConfig is a singleton and does not vary by volume.

| Field | Value |
|-------|-------|
| project | Portfolio |
| name | Jakub Turkiewicz |
| description | Principal Automation QA Architect |
| company | Beekeeper |
| links.github | https://github.com/kshyk |
| links.linkedin | https://www.linkedin.com/in/jakub-turkiewicz-39bb5729/ |
| links.company | https://www.beekeeper.io |
| links.cv | https://www.canva.com/design/DAF1T4lUogI/K_oACKYcQyLVuP02YYGRrA/view |
| avatar | https://avatars.githubusercontent.com/u/7526511?s=400&u=d0dde83aabfbff90ac8fe5edc828e762af72ddf9&v=4 |
| email | jj.turkiewicz@gmail.com |

### Skills (120 entities across 5 categories)

The standard 47 skills are retained. Additional skills are added to each category to test flex-wrap layout overflow and icon rendering at scale:

- **Languages**: 7 standard + 13 additional = **20 total** (added: Ruby, Go, Rust, C, C++, C#, PHP, Perl, Scala, Haskell, Elixir, Dart, R)
- **Technologies**: 24 standard + 16 additional = **40 total** (added: Terraform, Ansible, Kubernetes, Helm, Nginx, Redis, MongoDB, RabbitMQ, Kafka, GraphQL, Prometheus, Grafana, Vault, Consul, Traefik, ArgoCD)
- **Systems**: 8 standard + 12 additional = **20 total** (added: Debian, Fedora, CentOS, Arch Linux, FreeBSD, OpenBSD, ChromeOS, Tizen, HarmonyOS, Red Hat, SUSE, Solaris)
- **Editors**: 4 standard + 16 additional = **20 total** (added: Neovim, Vim, Emacs, Sublime Text, Atom, Eclipse, NetBeans, CLion, PyCharm, WebStorm, GoLand, RubyMine, DataGrip, Rider, Fleet, Nova)
- **AI**: 4 standard + 16 additional = **20 total** (added: Anthropic, Mistral, Meta AI, Hugging Face, Stability AI, Midjourney, Cursor, Tabnine, Amazon Q, Sourcegraph Cody, Replit AI, Perplexity, Cohere, AI21, DeepSeek, Qwen)

### Projects (20 entities)

The standard 6 projects are retained. 14 additional projects are added to test grid layout with many cards:

| # | name | description | repository | demo | technologies count |
|---|------|-------------|------------|------|--------------------|
| 1 | Portfolio | About me and my projects | https://github.com/kshyk/portfolio | https://kshyk.github.io/portfolio/ | 10 |
| 2 | API Testing Framework | Collection of automated tests for API endpoints using REST Assured framework | https://github.com/kshyk/api-tests | https://github.com/kshyk/api-tests/actions/workflows/main.yml | 7 |
| 3 | Cypress Testing Framework | Collection of automated tests for web applications using CypressIO framework | https://github.com/kshyk/cypress-fw | https://github.com/kshyk/cypress-fw/actions/workflows/main.yml | 9 |
| 4 | Playwright Testing Framework | Collection of automated tests for web applications using MS Playwright framework | https://github.com/kshyk/playwright-fw | https://github.com/kshyk/playwright-fw/actions/workflows/main.yml | 8 |
| 5 | Selenide Testing Framework | Collection of automated tests for web applications using Selenide framework | https://github.com/kshyk/selenium-fw | https://github.com/kshyk/selenium-fw/actions/workflows/main.yml | 8 |
| 6 | TestCafe Testing Framework | Collection of automated tests for web applications using TestCafe framework | https://github.com/kshyk/testcafe-fw | https://github.com/kshyk/testcafe-fw/actions/workflows/main.yml | 10 |
| 7 | Appium Mobile Framework | Automated mobile testing suite for iOS and Android using Appium | https://github.com/kshyk/appium-fw | https://github.com/kshyk/appium-fw/actions/workflows/main.yml | 6 |
| 8 | Detox React Native Tests | End-to-end testing framework for React Native applications | https://github.com/kshyk/detox-fw | https://github.com/kshyk/detox-fw/actions/workflows/main.yml | 7 |
| 9 | k6 Performance Framework | Load testing and performance benchmarking with Grafana k6 | https://github.com/kshyk/k6-fw | https://github.com/kshyk/k6-fw/actions/workflows/main.yml | 5 |
| 10 | Artillery Load Tests | Cloud-scale load testing with Artillery | https://github.com/kshyk/artillery-fw | https://github.com/kshyk/artillery-fw/actions/workflows/main.yml | 5 |
| 11 | Robot Framework Suite | Keyword-driven acceptance testing with Robot Framework | https://github.com/kshyk/robot-fw | https://github.com/kshyk/robot-fw/actions/workflows/main.yml | 5 |
| 12 | Karate API Tests | BDD-style API testing with Karate DSL | https://github.com/kshyk/karate-fw | https://github.com/kshyk/karate-fw/actions/workflows/main.yml | 6 |
| 13 | Gatling Performance Suite | Scala-based performance testing with Gatling | https://github.com/kshyk/gatling-fw | https://github.com/kshyk/gatling-fw/actions/workflows/main.yml | 5 |
| 14 | Puppeteer Scraping Tests | Browser automation and scraping tests with Puppeteer | https://github.com/kshyk/puppeteer-fw | https://github.com/kshyk/puppeteer-fw/actions/workflows/main.yml | 7 |
| 15 | Nightwatch E2E Tests | End-to-end browser testing with Nightwatch.js | https://github.com/kshyk/nightwatch-fw | https://github.com/kshyk/nightwatch-fw/actions/workflows/main.yml | 7 |
| 16 | Vitest Unit Framework | Unit and integration testing with Vitest | https://github.com/kshyk/vitest-fw | https://github.com/kshyk/vitest-fw/actions/workflows/main.yml | 6 |
| 17 | Jest Testing Suite | Comprehensive unit testing with Jest | https://github.com/kshyk/jest-fw | https://github.com/kshyk/jest-fw/actions/workflows/main.yml | 6 |
| 18 | Storybook Component Tests | Visual component testing with Storybook | https://github.com/kshyk/storybook-fw | https://github.com/kshyk/storybook-fw/actions/workflows/main.yml | 7 |
| 19 | Pact Contract Tests | Consumer-driven contract testing with Pact | https://github.com/kshyk/pact-fw | https://github.com/kshyk/pact-fw/actions/workflows/main.yml | 5 |
| 20 | WebdriverIO Mobile Suite | Cross-platform mobile automation with WebdriverIO | https://github.com/kshyk/wdio-mobile-fw | https://github.com/kshyk/wdio-mobile-fw/actions/workflows/main.yml | 7 |

### Aggregate Counts

| Entity Type | Count |
|-------------|-------|
| SiteConfig | 1 |
| Skill | 120 |
| Project | 20 |
| **Total** | **141** |
