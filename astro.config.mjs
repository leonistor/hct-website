// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig, fontProviders } from "astro/config"
// https://github.com/Zastinian/astro-bun
import bun from "@hedystia/astro-bun"

import alpinejs from "@astrojs/alpinejs"

// https://astro.build/config
export default defineConfig({
  site: "https://h-ct.ro",

  adapter: bun(),
  output: "server",
  // devToolbar: { enabled: false },

  vite: {
    plugins: [tailwindcss()],
    clearScreen: false,
    server: {
      host: "0.0.0.0",
      watch: {
        ignored: ["pocket/**", "TODO.txt", "import_data/*"],
      },
    },
  },

  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Work Sans",
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        cssVariable: "--font-work-sans",
      },
    ],
  },

  integrations: [alpinejs({ entrypoint: "./src/alpine.ts" })],
})
