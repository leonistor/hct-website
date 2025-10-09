import { defineConfig, globalIgnores } from "eslint/config"
import eslintPluginAstro from "eslint-plugin-astro"

export default [
  ...eslintPluginAstro.configs.recommended,
  globalIgnores([".astro"]),
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
]
