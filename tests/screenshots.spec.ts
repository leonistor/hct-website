import { test } from "@playwright/test"
import { navigationLinks } from "@/config/menu"

test.use({ colorScheme: "dark" })

const targets = navigationLinks.flatMap((item) => (item.items ? item.items : item))
targets.push({ label: "Home", href: "/" })

targets.forEach(({ href, label }) => {
  const page_slug = href!.substring(1)
  const screenshot_path = `test-results/dark-${page_slug}.png`

  test(`screenshot dark ${href}`, async ({ page }) => {
    await page.goto(href!)
    await page.screenshot({ path: screenshot_path, fullPage: true })
  })
})
