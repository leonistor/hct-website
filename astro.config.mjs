// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

// https://github.com/Zastinian/astro-bun
import bun from "@hedystia/astro-bun"

import alpinejs from "@astrojs/alpinejs"

import mdx from "@astrojs/mdx"

export default defineConfig({
  // TODO: change in production!
  site: "https://hct.vitrina.promo",

  devToolbar: { enabled: false },
  adapter: bun(),
  output: "server",
  // devToolbar: { enabled: false },
  server: {
    host: "0.0.0.0",
  },

  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
    clearScreen: false,
    server: {
      watch: {
        ignored: ["pocket/**", "*.txt", "TODO.md", "import_data/*"],
      },
      proxy: {
        "/pocket": {
          target: "http://localhost:8090",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/pocket/, ""),
        },
      },
    },
  },

  integrations: [alpinejs({ entrypoint: "./src/alpine.ts" }), mdx()],
})
