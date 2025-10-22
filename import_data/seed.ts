import {
  type ParteneriRecord,
  type ProduseRecord,
  type TypedPocketBase,
} from "pocket/_pocketbase-types"
import PocketBase from "pocketbase"

import fs from "node:fs"
import { parseArgs } from "node:util"

import src_categorii from "import_data/catalog/categorii.json"
import src_materiale from "import_data/catalog/materiale.json"
import src_parteneri from "import_data/catalog/partners.json"
import src_prods from "import_data/catalog/prods.json"
import src_prodsall from "import_data/catalog/prodsall.json"
import { upperFirst } from "es-toolkit"

// no args for seed, exit
if (process.argv.length === 2) {
  console.error(
    "Invoke with one ore many collections to be seeded:\n" +
      `bun run seed ` +
      "--categ --mater --parte --prods --prodsall"
  )
  process.exit(1)
}
// parse args
const { values } = parseArgs({
  options: {
    categ: { type: "boolean" },
    mater: { type: "boolean" },
    parte: { type: "boolean" },
    prods: { type: "boolean" },
    prodsall: { type: "boolean" },
  },
  allowPositionals: true,
})

// init pocketbase
const pb = new PocketBase(process.env.PB_TYPEGEN_URL!) as TypedPocketBase
const auth = await pb
  .collection("_superusers")
  .authWithPassword(
    process.env.POCKET_SUPERUSER_EMAIL!,
    process.env.POCKET_SUPERUSER_PASS!
  )
let batch = pb.createBatch()

// categorii
if (values.categ) {
  src_categorii.map((src_categ) => {
    const { _order, denumire, icon } = src_categ
    let svg_icon = fs.readFileSync(`import_data/icons/camera.svg`).toString()

    const svg_file = `import_data/icons/${icon}.svg`
    if (fs.existsSync(svg_file)) {
      svg_icon = fs.readFileSync(`import_data/icons/${icon}.svg`).toString()
    }
    batch.collection("categorii").upsert({
      nume: denumire,
      _order: _order,
      icon: svg_icon,
    })
  })
  await batch.send()
  console.info("✅ categ")
}

// materiale
if (values.mater) {
  src_materiale.map((src_mat) => {
    const { _order, denumire, denumire_en, descriere, icon } = src_mat
    let svg_icon = fs.readFileSync(`import_data/icons/camera.svg`).toString()

    const svg_file = `import_data/icons/${icon}.svg`
    if (fs.existsSync(svg_file)) {
      svg_icon = fs.readFileSync(`import_data/icons/${icon}.svg`).toString()
    }
    batch.collection("materiale").upsert({
      denumire,
      denumire_en,
      descriere,
      _order,
      icon: svg_icon,
    })
  })
  await batch.send()
  console.info("✅ mater")
}

// parteneri
if (values.parte) {
  src_parteneri.map((src_par) => {
    const { id, name, descriere, url } = src_par

    // const data = new FormData()
    // data.append("cod", String(id))
    // data.append("nume", String(name))
    // data.append("descriere", String(descriere))

    // TODO: use file_to_blob
    // file
    const logo_file_name = `import_data/partner_logos/logo_${id}.png`
    const logo_file = fs.readFileSync(logo_file_name)
    const blob = new Blob([logo_file], { type: "image/png" })
    // data.append("logo", blob, logo_file_name)

    // data.append("url", String(url))
    // data.append("_publicat", JSON.stringify(false))

    // batch.collection("parteneri").create(data)

    batch.collection("parteneri").create({
      cod: id,
      nume: name,
      descriere,
      logo: new File([blob], logo_file_name),
      url,
      publicat: true,
    })
  })
  await batch.send()
  console.info("✅ parte")
}

// produse leo (selected 35 prods)
if (values.prods) {
  // parteneri lookup
  const parteneri_data = await pb.collection("parteneri").getFullList()
  const parteneri_ids: Record<string, string> = {}
  parteneri_data.map((part) => (parteneri_ids[part.cod] = part.id))

  src_prods.map((prod) => {
    const nume_produs = upperFirst(prod.name_ro)
    const imagini_produs = prod.imgs
    const blobs_imagini = imagini_produs.map((i) => {
      return {
        filename: i.split("/").pop()!,
        imagine: i,
        blob: file_to_blob(`import_data/${i}`),
      }
    })
    const partener_id = parteneri_ids[prod.partner]

    const data: Omit<ProduseRecord, "id"> = {
      nume: nume_produs,
      descriere_extra: prod.content_ro,
      url_producator: prod.url,
      partener: partener_id,
      // @ts-ignore
      imagini: blobs_imagini.map((b) => new File([b.blob], b.filename)),
    }

    // console.dir(data)
    batch.collection("produse").create(data)
  })
  await batch.send()
  console.info("✅ prods")
}

// produse all 255
// name -> @ name
if (values.prodsall) {
  // parteneri lookup
  const parteneri_data = await pb.collection("parteneri").getFullList()
  const parteneri_ids: Record<string, string> = {}
  parteneri_data.map((part) => {
    // fix partener cod in prodsall = iris, tecno
    let cod = part.cod
    if (cod === "irismec") {
      cod = "iris"
    }
    if (cod === "tecnoecology") {
      cod = "tecno"
    }
    parteneri_ids[cod] = part.id
  })
  console.dir(parteneri_ids)

  src_prodsall.map((prod) => {
    const nume_produs = "@ " + upperFirst(prod.name)
    const imagine_blob = file_to_blob(
      `import_data/photos/${prod.partner}/${prod.img}`
    )
    const partener_id = parteneri_ids[prod.partner]
    const descriere_extra = `<p>${prod.partner}: ${prod.categ}</p>`

    const data: Omit<ProduseRecord, "id"> = {
      nume: nume_produs,
      descriere_extra,
      url_producator: prod.url,
      partener: partener_id,
      // @ts-ignore
      imagini: [new File([imagine_blob], prod.img)],
    }

    // console.dir(data)
    batch.collection("produse").create(data)
  })
  await batch.send()
  console.info("✅ prodsall")
}

function file_to_blob(filename: string): Blob {
  const extension = filename.split(".").pop() ?? "png"
  const file = fs.readFileSync(filename)
  return new Blob([file], { type: `image/${extension.toLowerCase()}` })
}
