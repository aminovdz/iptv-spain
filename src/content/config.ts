import { defineCollection, z } from 'astro:content';

const guidesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Equipo Editorial IPTV España'),
    image: z.string().default('/images/hero-bg.webp'),
    imageAlt: z.string().default('IPTV España — Guía y Tutorial'),
    tags: z.array(z.string()).default(['IPTV España', 'Streaming 4K', 'LaLiga', 'Smart TV']),
    featured: z.boolean().default(false),
    readingTime: z.string().default('6 min de lectura'),
    category: z.string().default('Guías & Consejos'),
    targetKeyword: z.string().optional(),
    quickSummary: z.string().optional(),
    toc: z.array(z.object({
      title: z.string(),
      anchor: z.string()
    })).optional(),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string()
    })).optional()
  })
});

export const collections = {
  guides: guidesCollection
};
