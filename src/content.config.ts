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

const produse = defineCollection({
  loader: pocketbaseLoader({
    collectionName: "v_produse",
    ...pocketOptions,
    improveTypes: true,
  }),
})

const categorii = defineCollection({
  loader: pocketbaseLoader({
    collectionName: "categorii",
    ...pocketOptions,
    idField: "slug",
    improveTypes: true,
    contentFields: "icon",
  }),
})

const materiale = defineCollection({
  loader: pocketbaseLoader({
    collectionName: "v_materiale",
    ...pocketOptions,
    improveTypes: true,
  }),
})

const parteneri = defineCollection({
  loader: pocketbaseLoader({
    collectionName: "v_parteneri",
    ...pocketOptions,
    idField: "cod",
    improveTypes: true,
  }),
})

const linii_produse = defineCollection({
  loader: pocketbaseLoader({
    collectionName: "linii_produse",
    ...pocketOptions,
    improveTypes: true,
  }),
})

// for prods grid
const lista_produse = defineCollection({
  loader: pocketbaseLoader({
    collectionName: "v_produse",
    ...pocketOptions,
    improveTypes: true,
    fields: [
      "id",
      "nume",
      "descriere",
      "imagini",
      "promo",
      "parteneri_cod",
      "categorii_slug",
      "materiale",
      "created",
      "updated",
    ],
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
  parteneri,
  produse,
  blog,
  materiale,
  linii_produse,
  lista_produse,
}
