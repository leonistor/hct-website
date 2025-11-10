import { test, expect } from "@playwright/test"

import { conf } from "@/config/site"

test("title is correct", async ({ page }) => {
  await page.goto("/")

  await expect(page).toHaveTitle(conf.title)
})
