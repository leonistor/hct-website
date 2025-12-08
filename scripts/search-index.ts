import { Meilisearch } from "meilisearch"
import { XMLParser } from "fast-xml-parser"
import * as cheerio from "cheerio"

interface SitemapURL {
  loc: string
  changefreq: string
  priority: string
}
//
;(async () => {
  const client = new Meilisearch({
    host: import.meta.env.MEILI_HOST,
    apiKey: import.meta.env.MEILI_ADMIN_KEY,
  })

  console.dir(await client.getVersion())

  const sitemapXml = await fetch("http://localhost:4321/sitemap.xml").then((response) => {
    if (!response.ok) throw new Error("Dev server not running!")
    return response.text()
  })

  const parser = new XMLParser()
  const sitemap = parser.parse(sitemapXml).urlset.url as Array<SitemapURL>

  const hct_pages = []

  for (const item of sitemap) {
    const base_prod = "https://hct.vitrina.promo/"
    const base_dev = "http://localhost:4321/"
    const fetchURL = item.loc.replace(base_prod, base_dev)

    const page = await fetch(fetchURL).then((response) => {
      if (!response.ok) throw new Error(`Error fetching ${fetchURL}`)
      return response.text()
    })

    const $ = cheerio.load(page)
    console.debug(item.loc)

    const href = item.loc.substring(base_prod.length - 1)
    const id = href.replaceAll("/", "_")
    hct_pages.push({
      id,
      loc: href,
      title: $("title").text(),
      text: $("main").text(),
    })
  }
  console.log("------")
  console.dir(hct_pages[7])
  console.log("------")

  const index = client.index("hctpages")
  await index.deleteAllDocuments()
  let response = await index.addDocuments(hct_pages)

  console.log(response) // => { "uid": 0 }
})()
