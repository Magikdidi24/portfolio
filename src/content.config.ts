import { defineCollection, z } from "astro:content";

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  stack: z.array(z.string()),
  link: z.string().url(),
  cover: z.string().optional(),
});

export const collections = {
  projects: defineCollection({ schema: projectSchema }),
};
