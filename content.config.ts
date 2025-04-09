import { defineCollection, defineContentConfig, z } from "@nuxt/content";
import { asSitemapCollection } from '@nuxtjs/sitemap/content';

export default defineContentConfig({
  collections: {
    navigation: defineCollection({
      type: "data",
      source: "navigation.yml",
      schema: z.object({
        navigation: z.record(
          z.string(),
          z.object({
            name: z.string(),
            path: z.string(),
          })
        ),
      }),
    }),
    blogPosts: defineCollection(
      asSitemapCollection({
      type: "page",
      source: "blog/*.md",
      schema: z.object({
        featured: z.boolean().optional(),
        tags: z.array(z.string()),
        author: z.string(),
        published_date: z.string(),
        category: z.string(),
        image: z.string(),
      })
      })
    )
  },
});
