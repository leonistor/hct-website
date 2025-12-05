import type { APIRoute } from "astro"
export const GET: APIRoute = (context) => {
  const sitemapURL = new URL("/sitemap.xml", context.site)
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${sitemapURL.href}`, {
    headers: { "Content-Type": "text/plain" },
  })
}
