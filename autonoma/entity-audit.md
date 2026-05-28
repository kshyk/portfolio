---
model_count: 3
factory_count: 3
models:
  - name: Skill
    independently_created: true
    creation_file: data/skills.json
    creation_function: static JSON import (build-time, no runtime creation)
    side_effects: []
    created_by: []

  - name: Project
    independently_created: true
    creation_file: data/projects.json
    creation_function: static JSON import (build-time, no runtime creation)
    side_effects: []
    created_by: []

  - name: SiteConfig
    independently_created: true
    creation_file: config/site.ts
    creation_function: static TypeScript export (build-time, no runtime creation)
    side_effects: []
    created_by: []
---

# Entity Creation Audit

## Important Context

This application is a **static portfolio website** built with Next.js 15 using static export (`output: 'export'`). It has **no database, no ORM, no API routes, and no server-side data mutations**. There are no database models in the traditional sense -- no Prisma schema, no Drizzle schema, no migrations, no service layer, no repository layer.

All data entities are defined statically in JSON files or TypeScript config modules and imported at build time. There is no runtime creation, mutation, or deletion of any data. The three models listed below represent the structured data types that the application renders. Their "creation path" is the static file itself -- no factory or runtime function creates them.

### Implications for Testing

- **No Environment Factory needed**: There are no runtime creation functions to wrap. Test fixtures for these models would be static JSON objects matching the type interfaces defined in the components.
- **No teardown needed**: Static data is immutable at runtime. There is nothing to clean up.
- **No side effects**: Loading these data files produces no writes, no network calls, and no state mutations.

## Roots (models with `independently_created: true`)

### Skill

- **creation_file**: `data/skills.json`
- **creation_function**: Static JSON import at build time via `import skillsData from '../data/skills.json'` in `components/skills.tsx`
- **Type definition** (inline in `components/skills.tsx`):
  ```typescript
  interface Skill {
    name: string;
    icon: string;
  }
  interface SkillsData {
    languages: Skill[];
    technologies: Skill[];
    os: Skill[];
    editors: Skill[];
    ai: Skill[];
  }
  ```
- **Description**: The Skills model represents a categorized collection of technical skills. The JSON file contains five arrays (languages, technologies, os, editors, ai), each holding Skill objects with a display name and a simple-icons icon slug. The `Skills` component imports this file directly and renders each category as a labeled icon grid inside a Card.
- **Side effects**: None. Pure static data read at build time.
- **Sibling models minted inline**: None.

### Project

- **creation_file**: `data/projects.json`
- **creation_function**: Static JSON import at build time via `import projectsData from '../data/projects.json'` in `components/projects.tsx`
- **Type definition** (inline in `components/projects.tsx`):
  ```typescript
  type Technology = {
    name: string;
    icon: string;
  }
  type Project = {
    name: string;
    description: string;
    repository: string;
    demo: string;
    technologies?: Technology[];
  }
  ```
- **Description**: The Project model represents an open-source project entry. Each object contains a name, description, GitHub repository URL, live demo URL, and an optional array of Technology objects (name + icon slug). The `Projects` component imports this file and renders a responsive grid of project cards, each showing the project details with technology icons and external links.
- **Side effects**: None. Pure static data read at build time.
- **Sibling models minted inline**: None. The `Technology` sub-type is embedded within each Project object, not a separate model.

### SiteConfig

- **creation_file**: `config/site.ts`
- **creation_function**: Static TypeScript export `siteConfig` consumed by `components/hero.tsx` and `components/contact.tsx`
- **Type definition** (inferred from `config/site.ts`):
  ```typescript
  {
    project: string;
    name: string;
    description: string;
    company: string;
    links: {
      github: string;
      linkedin: string;
      company: string;
      cv: string;
    };
    avatar: string;
    email: string;
  }
  ```
- **Description**: The SiteConfig model is a singleton configuration object that holds the site owner's identity information: name, professional title, company, external profile links (GitHub, LinkedIn, resume), avatar URL, and contact email. It is consumed by the Hero section (to render name, title, avatar, and social links) and the Contact form (to populate the mailto target address).
- **Side effects**: None. Pure static data defined as a TypeScript constant.
- **Sibling models minted inline**: None.

## Dependents (models with `independently_created: false`)

| Model | Owner(s) | Why |
|-------|----------|-----|
| (none) | -- | There are no dependent models. All three data entities are pure roots with no creation-time dependencies on each other. |

## Dual-creation models

There are no dual-creation models. All three models are pure roots (`independently_created: true`, `created_by: []`). Each is defined in exactly one static source file with no alternative creation path and no runtime mutation.
