import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

import { pocketbaseLoader } from "astro-loader-pocketbase"
import type { PocketBaseLoaderOptions } from "astro-loader-pocketbase"

const pocketOptions: Omit<PocketBaseLoaderOptions, "collectionName"> = {
  url: import.meta.env.PB_TYPEGEN_URL,
  updatedField: "updated",
  superuserCredentials: {
    // impersonateToken: import.meta.env.PB_TYPEGEN_TOKEN,
    email: import.meta.env.POCKET_SUPERUSER_EMAIL,
    password: import.meta.env.POCKET_SUPERUSER_PASS,
  },
}

/* pocketbase */

const categorii = defineCollection({
  loader: pocketbaseLoader({
    collectionName: "v_categorii",
    ...pocketOptions,
    improveTypes: true,
    contentFields: "icon",
  }),
})

const produse = defineCollection({
  loader: pocketbaseLoader({
    collectionName: "v_produse",
    ...pocketOptions,
    improveTypes: true,
  }),
})

const materiale = defineCollection({
  loader: pocketbaseLoader({
    collectionName: "v_materiale",
    ...pocketOptions,
    improveTypes: true,
  }),
})

const linii_si_produse = defineCollection({
  loader: pocketbaseLoader({
    collectionName: "v_linii_si_produse",
    ...pocketOptions,
    improveTypes: true,
  }),
})

/* mdx */

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().nullish(),
    pubDate: z.date().nullish(),
    tags: z.array(z.string()),
  }),
})

export const collections = {
  categorii,
  produse,
  blog,
  materiale,
  linii_si_produse,
}
