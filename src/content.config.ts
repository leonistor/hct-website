import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

// const produse = defineCollection({
//   loader: pbLoader({
//     collection: "produse",
//     expand: "materiale,categorie,partener",
//     // schema:
//   }),
// })

// // const produse = defineCollection({
// //   loader: pocketbaseLoader({
// //     collectionName: "v_produse",
// //     ...pocketOptions,
// //     improveTypes: true,
// //   }),
// // })

// // const _produse = defineCollection({
// //   loader: async () => {
// //     const prods = await pb
// //       .collection("v_produse")
// //       .getFullList({ expand: "materiale" })
// //   },
// //   // schema: /* ... */
// // })

// const categorii = defineCollection({
//   loader: pocketbaseLoader({
//     collectionName: "categorii",
//     ...pocketOptions,
//     idField: "slug",
//     improveTypes: true,
//     contentFields: "icon",
//   }),
// })

// const materiale = defineCollection({
//   loader: pocketbaseLoader({
//     collectionName: "materiale",
//     ...pocketOptions,
//     idField: "slug",
//     improveTypes: true,
//   }),
// })

// const parteneri = defineCollection({
//   loader: pocketbaseLoader({
//     collectionName: "parteneri",
//     ...pocketOptions,
//     idField: "cod",
//     improveTypes: true,
//   }),
// })

// // for prods grid
// const lista_produse = defineCollection({
//   loader: pocketbaseLoader({
//     collectionName: "produse",
//     ...pocketOptions,
//     improveTypes: true,
//   }),
// })

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
  // categorii,
  // parteneri,
  // produse,
  blog,
  // materiale,
  // lista_produse,
}
