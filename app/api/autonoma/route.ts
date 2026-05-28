import { createHandler } from '@autonoma-ai/server-web'
import { defineFactory } from '@autonoma-ai/sdk'
import { z } from 'zod'

// -- Input schemas ----------------------------------------------------------

const SkillInput = z.object({
  name: z.string(),
  icon: z.string(),
})

const TechnologyInput = z.object({
  name: z.string(),
  icon: z.string(),
})

const ProjectInput = z.object({
  name: z.string(),
  description: z.string(),
  repository: z.string(),
  demo: z.string(),
  technologies: z.array(TechnologyInput).optional(),
})

const SiteConfigInput = z.object({
  project: z.string(),
  name: z.string(),
  description: z.string(),
  company: z.string(),
  links: z.object({
    github: z.string(),
    linkedin: z.string(),
    company: z.string(),
    cv: z.string(),
  }),
  avatar: z.string(),
  email: z.string(),
})

// -- Ref schemas (what create returns) --------------------------------------

const SkillRef = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string(),
})

const ProjectRef = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  repository: z.string(),
  demo: z.string(),
})

const SiteConfigRef = z.object({
  id: z.string(),
  project: z.string(),
  name: z.string(),
})

// -- Counters for generating stable IDs ------------------------------------

let skillCounter = 0
let projectCounter = 0
let siteConfigCounter = 0

// -- Handler ----------------------------------------------------------------
//
// This is a static portfolio site with no database. The "creation path" for
// each model is the static file itself (data/skills.json, data/projects.json,
// config/site.ts). Factories return static data objects with generated IDs,
// matching the app's real data consumption pattern (JSON import at build time).

export const POST = createHandler({
  scopeField: 'testRunId',
  sharedSecret: process.env.AUTONOMA_SHARED_SECRET!,
  signingSecret: process.env.AUTONOMA_SIGNING_SECRET!,
  allowProduction: true,
  factories: {
    Skill: defineFactory({
      inputSchema: SkillInput,
      refSchema: SkillRef,
      create: async (data, ctx) => {
        // The creation path for Skill is the static JSON file data/skills.json.
        // No runtime service exists. We return the data as-is with a generated ID,
        // mirroring how the component imports and renders skills from the JSON file.
        skillCounter++
        return {
          id: `skill-${ctx.testRunId}-${skillCounter}`,
          name: data.name,
          icon: data.icon,
        }
      },
    }),
    Project: defineFactory({
      inputSchema: ProjectInput,
      refSchema: ProjectRef,
      create: async (data, ctx) => {
        // The creation path for Project is the static JSON file data/projects.json.
        // No runtime service exists. We return the data as-is with a generated ID.
        projectCounter++
        return {
          id: `project-${ctx.testRunId}-${projectCounter}`,
          name: data.name,
          description: data.description,
          repository: data.repository,
          demo: data.demo,
        }
      },
    }),
    SiteConfig: defineFactory({
      inputSchema: SiteConfigInput,
      refSchema: SiteConfigRef,
      create: async (data, ctx) => {
        // The creation path for SiteConfig is the static TypeScript export in config/site.ts.
        // No runtime service exists. We return the data as-is with a generated ID.
        siteConfigCounter++
        return {
          id: `siteconfig-${ctx.testRunId}-${siteConfigCounter}`,
          project: data.project,
          name: data.name,
        }
      },
    }),
  },
  auth: async () => {
    return { headers: { 'x-autonoma-public': 'true' } }
  },
})
