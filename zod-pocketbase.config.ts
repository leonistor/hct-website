import type { Config } from "zod-pocketbase"

export default {
  ignore: ["_"],
  output: "src/lib/pocketbase/schemas.ts",
} satisfies Config
