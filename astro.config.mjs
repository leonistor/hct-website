// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig, envField } from "astro/config"
// https://github.com/Zastinian/astro-bun
import bun from "@hedystia/astro-bun"

import alpinejs from "@astrojs/alpinejs"

import mdx from "@astrojs/mdx"

import pocketbase from "astro-pocketbase"

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

  integrations: [
    alpinejs({ entrypoint: "./src/alpine.ts" }),
    mdx(),
    pocketbase({ ignore: ["_"] }),
  ],

  env: {
    schema: {
      ASTRO_POCKETBASE_ADMIN_EMAIL: envField.string({
        context: "server",
        access: "secret",
      }),
      ASTRO_POCKETBASE_ADMIN_PASSWORD: envField.string({
        context: "server",
        access: "secret",
      }),
      PUBLIC_ASTRO_POCKETBASE_URL: envField.string({
        context: "server",
        access: "public",
      }),
    },
  },
})
