import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

import { pocketbaseLoader } from "astro-loader-pocketbase"
import type { PocketBaseLoaderOptions } from "astro-loader-pocketbase"

import { TypedPocketBase } from "@tigawanna/typed-pocketbase"
import { type Schema } from "@/lib/pb-types"

export const pb = new TypedPocketBase<Schema>(
  process.env.PUBLIC_ASTRO_POCKETBASE_URL,
)

// const auth = await pb
//   .collection("_superusers")
//   .authWithPassword(
//     process.env.POCKET_ADMIN_EMAIL!,
//     process.env.POCKET_ADMIN_PASSWORD!,
//   )

/*
function pbLoader(options: {
  collection: string
  expand?: string
  schema?: any
}): Loader {
  // Return a loader object
  return {
    name: "pboader",
    // Called when updating the collection.
    load: async () => {
      // Load data and update the store
      const response = await pb
        .collection(options.collection)
        .getFullList({ expand: options.expand })
      return response
    },
    // Define the schema of an entry.
    schema: options.schema,
  }
}
*/

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

/*
const produse = defineCollection({
  loader: pbLoader({
    collection: "produse",
    expand: "materiale,categorie,partener",
    schema: ProduseResponseZodSchema,
  }),
})
*/

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
  lista_produse,
}
