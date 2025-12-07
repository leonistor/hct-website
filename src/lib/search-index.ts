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
  // https://www.meilisearch.com/docs/learn/security/basic_security#obtaining-api-keys-in-a-self-hosted-instance
  // openssl rand -base64 16
  const client = new Meilisearch({
    host: "http://127.0.0.1:7700",
    apiKey: "nqh4/olngWgSzF62vVjcdw==",
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
    const pageURL = item.loc.replace("https://hct.vitrina.promo/", "http://localhost:4321/")

    const page = await fetch(pageURL).then((response) => {
      if (!response.ok) throw new Error(`Error fetching ${pageURL}`)
      return response.text()
    })

    const $ = cheerio.load(page)
    console.debug(item.loc)
    hct_pages.push({
      id: item.loc.substring(25).replaceAll("/", "_"),
      loc: item.loc,
      title: $("title").text(),
      text: $("main").text(),
    })
  }

  const index = client.index("hctpages")
  await index.deleteAllDocuments()
  let response = await index.addDocuments(hct_pages)

  console.log(response) // => { "uid": 0 }
})()
