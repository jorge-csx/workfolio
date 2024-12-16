import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        year: z.number(),
        company: z.string(),
        website: z.union([z.string().url(), z.string()]),
        deliverables: z.string(),
        imgs: z.array(z.string()),
    }),
});

export const collections = { projects };
