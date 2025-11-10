import { defineConfig, devices } from "@playwright/test"

export default defineConfig({
  webServer: {
    command: "task dev",
    url: "http://localhost:4321/",
    timeout: 120 * 1000,
    reuseExistingServer: true,
  },
  reporter: "list",
  testDir: "tests",
  use: {
    baseURL: "http://localhost:4321/",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
})
