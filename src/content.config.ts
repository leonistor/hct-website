import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

import { pocketbaseLoader } from "astro-loader-pocketbase"
import type { PocketBaseLoaderOptions } from "astro-loader-pocketbase"

// import { TypedPocketBase } from "@tigawanna/typed-pocketbase"
// import { type Schema } from "@/lib/pb-types"
import PocketBase from "pocketbase"

export const pb = new PocketBase(process.env.PUBLIC_ASTRO_POCKETBASE_URL)

/** ----- */
const pocketOptions: Omit<PocketBaseLoaderOptions, "collectionName"> = {
  url: import.meta.env.PUBLIC_ASTRO_POCKETBASE_URL,
  updatedField: "updated",
  superuserCredentials: {
    email: import.meta.env.POCKETBASE_ADMIN_EMAIL,
    password: import.meta.env.POCKETBASE_ADMIN_PASSWORD,
  },
}

/* pocketbase */

const produse = defineCollection({
  loader: pocketbaseLoader({
    collectionName: "produse",
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
    collectionName: "materiale",
    ...pocketOptions,
    idField: "slug",
    improveTypes: true,
  }),
})

const parteneri = defineCollection({
  loader: pocketbaseLoader({
    collectionName: "parteneri",
    ...pocketOptions,
    idField: "cod",
    improveTypes: true,
  }),
})

// for prods grid
const lista_produse = defineCollection({
  loader: pocketbaseLoader({
    collectionName: "produse",
    ...pocketOptions,
    improveTypes: true,
  }),
})

const clienti = defineCollection({
  loader: pocketbaseLoader({
    collectionName: "clienti",
    ...pocketOptions,
    improveTypes: true,
  }),
})

/* mdx */

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().nullish(),
      cover: image(),
      pubDate: z.date(),
      tags: z.array(z.string()),
    }),
})

export const collections = {
  categorii,
  parteneri,
  produse,
  blog,
  materiale,
  lista_produse,
  clienti,
}
