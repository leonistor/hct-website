import { type TypedPocketBase } from "pocket/_pocketbase-types"
import PocketBase from "pocketbase"

import { parseArgs } from "node:util"

// no args for clean, exit
if (process.argv.length === 2) {
  console.error(
    "Invoke with prods filter to be used:\n" +
      `bun run clean ` +
      "--promo --isat"
  )
  process.exit(1)
}
// parse args
const { values } = parseArgs({
  options: {
    promo: { type: "boolean" },
    isat: { type: "boolean" },
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

// clean prods with promo=true
if (values.promo) {
  const promo_prods = await pb
    .collection("produse")
    .getFullList({ filter: "promo=true", fields: "id" })
  //   console.dir(promo_prods)
  promo_prods.map((p) => batch.collection("produse").delete(p.id))
  await batch.send()
  console.info("✅ prodsall")
}

// clean prods with name starts with @
if (values.isat) {
  const promo_prods = await pb
    .collection("produse")
    .getFullList({ filter: "nume ~ '@%'", fields: "id" })
  //   console.dir(promo_prods)
  promo_prods.map((p) => batch.collection("produse").delete(p.id))
  await batch.send()
  console.info("✅ prodsall")
}
