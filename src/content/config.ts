import { defineCollection, z } from "astro:content";

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  stack: z.array(z.string()),
  link: z.string().url().optional(),
  cover: z.string(),
  teamSize: z.number().int().min(1),
  timeAvailable:z.string(),
});

export const collections = {
  projects: defineCollection({ schema: projectSchema }),
  personalProjects: defineCollection({ schema: projectSchema }),
};
