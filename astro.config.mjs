// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
// https://github.com/Zastinian/astro-bun
import bun from "@hedystia/astro-bun"

import alpinejs from "@astrojs/alpinejs"

import mdx from "@astrojs/mdx"

// https://astro.build/config
export default defineConfig({
  site: "https://h-ct.ro",

  adapter: bun(),
  output: "server",
  // devToolbar: { enabled: false },
  server: {
    host: "0.0.0.0",
  },

  vite: {
    plugins: [tailwindcss()],
    clearScreen: false,
    server: {
      watch: {
        ignored: ["pocket/**", "*.txt", "TODO.md", "import_data/*"],
      },
    },
  },

  integrations: [alpinejs({ entrypoint: "./src/alpine.ts" }), mdx()],
})
