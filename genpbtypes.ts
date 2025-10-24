import { generateTypes } from "@tigawanna/typed-pocketbase/src/codegen"
import fs from "node:fs"

const BASE = "src/lib/"

const result = await generateTypes({
  url: process.env.PUBLIC_ASTRO_POCKETBASE_URL!,
  email: process.env.POCKETBASE_ADMIN_EMAIL!,
  password: process.env.POCKETBASE_ADMIN_PASSWORD!,
  ignorePattern: "^_.*",
  //   includePattern: '^(users|posts).*'
})

// Write generated files
await fs.writeFileSync(BASE + "pb-types.ts", result.types)
await fs.writeFileSync(BASE + "pb-zod.ts", result.zodSchemas)
