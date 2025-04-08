import { defineCollection, defineContentConfig, z } from "@nuxt/content";

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
  },
});
