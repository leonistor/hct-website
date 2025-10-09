// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
// https://github.com/Zastinian/astro-bun
import bun from "@hedystia/astro-bun"

import alpinejs from "@astrojs/alpinejs"

// https://astro.build/config
export default defineConfig({
  adapter: bun(),
  output: "server",
  devToolbar: { enabled: false },

  vite: {
    plugins: [tailwindcss()],
    clearScreen: false,
    server: {
      host: "0.0.0.0",
      watch: {
        ignored: ["pocket/**"],
      },
    },
  },

  integrations: [alpinejs({ entrypoint: "./src/alpine.ts" })],
})
