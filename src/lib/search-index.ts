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
    host: "http://127.0.0.1:7700",
    apiKey: "aSampleMasterKey",
  })

  console.dir(await client.getVersion())

  const sitemapXml = await fetch("http://localhost:4321/sitemap.xml").then((response) => {
    if (!response.ok) throw new Error("Dev server not running!")
    return response.text()
  })

  const parser = new XMLParser()
  const sitemap = parser.parse(sitemapXml).urlset.url as Array<SitemapURL>

  for (const item of sitemap) {
    const pageURL = item.loc
    const page = await fetch(pageURL).then((response) => {
      if (!response.ok) throw new Error(`Error fetching ${pageURL}`)
      return response.text()
    })

    const $ = cheerio.load(page)
    console.dir($("title").text())
    //   console.dir($("main").text())
  }

  /*
  const index = client.index("movies")

  const documents = [
    { id: 1, title: "Carol", genres: ["Romance", "Drama"] },
    { id: 2, title: "Wonder Woman", genres: ["Action", "Adventure"] },
    { id: 3, title: "Life of Pi", genres: ["Adventure", "Drama"] },
    { id: 4, title: "Mad Max: Fury Road", genres: ["Adventure", "Science Fiction"] },
    { id: 5, title: "Moana", genres: ["Fantasy", "Action"] },
    { id: 6, title: "Philadelphia", genres: ["Drama"] },
  ]

  let response = await index.addDocuments(documents)

  console.log(response) // => { "uid": 0 }
*/
})()
