import { test } from "@playwright/test"
import { navigationLinks } from "@/config/menu"

const targets = navigationLinks.flatMap((item) => (item.items ? item.items : item))
targets.push({ label: "Home", href: "/" })

test.use({ colorScheme: "dark" })
targets.forEach(({ href, label }) => {
  const page_slug = href === "/" ? "home" : href!.substring(1)

  test(`screenshot dark ${href}`, async ({ page }) => {
    await page.goto(href!)
    await page.screenshot({ path: `test-results/dark-${page_slug}.png`, fullPage: true })
  })
})
