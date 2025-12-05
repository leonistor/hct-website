// https://colinmcnamara.com/blog/fixing-astro-sitemap-ssr-mode

export const prerender = true

import type { APIContext } from "astro"
import { getCollection } from "astro:content"
import { navigationLinks } from "@/config/menu"

export async function GET(context: APIContext) {
  const site = context.site?.toString() || "https://hct.vitrina.promo"

  // Get all collections
  const posts = await getCollection("blog")
  const produse = await getCollection("produse")
  const parteneri = await getCollection("parteneri")
  const categorii = await getCollection("categorii")
  const materiale = await getCollection("materiale")

  // Generate URLs for all content
  const urls: Array<{ loc: string; changefreq?: string; priority?: number }> = []
  // Static pages
  urls.push(
    { loc: `${site}`, changefreq: "weekly", priority: 1.0 },
    /*
    { loc: `${site}/blog/`, changefreq: "weekly", priority: 0.9 },
    { loc: `${site}/projects/`, changefreq: "monthly", priority: 0.8 },
    { loc: `${site}/about/`, changefreq: "monthly", priority: 0.7 },
     */
  )
  // Collect navigation urls
  navigationLinks.forEach((item) => {
    // use substring(1): /despre --> despre
    if (item.items) {
      item.items.forEach((subitem) =>
        urls.push({ loc: `${site}${subitem.href.substring(1)}`, changefreq: "monthly", priority: 0.7 }),
      )
    } else {
      urls.push({ loc: `${site}${item.href!.substring(1)}`, changefreq: "monthly", priority: 0.7 })
    }
  })
  // Blog posts
  posts.forEach((post) => {
    urls.push({
      loc: `${site}n/${post.id}/`,
      changefreq: "monthly",
      priority: 0.8,
    })
  })
  // Produse
  produse
    .filter((prod) => prod.data.publicat)
    .forEach((prod) => {
      urls.push({
        loc: `${site}p/${prod.data.id}/`,
        changefreq: "monthly",
        priority: 0.7,
      })
    })
  // Parteneri
  parteneri
    .filter((part) => part.data.publicat === true)
    .forEach((partener) => {
      urls.push({
        loc: `${site}partener/${partener.data.cod}/`,
        changefreq: "monthly",
        priority: 0.7,
      })
    })
  // Categorii
  categorii.forEach((categ) => {
    urls.push({
      loc: `${site}c/${categ.data.slug}/`,
      changefreq: "monthly",
      priority: 0.7,
    })
  })
  //Materiale
  materiale.forEach((mater) => {
    urls.push({
      loc: `${site}m/${mater.data.slug}/`,
      changefreq: "monthly",
      priority: 0.7,
    })
  })

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>${
      url.changefreq
        ? `
    <changefreq>${url.changefreq}</changefreq>`
        : ""
    }${
      url.priority !== undefined
        ? `
    <priority>${url.priority}</priority>`
        : ""
    }
  </url>`,
  )
  .join("\n")}
</urlset>`

  return new Response(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600", // Cache for 1 hour
    },
  })
}
