# resources

## migrate to directus+nuxt:

- Content - Nuxt UI: https://ui.nuxt.com/docs/getting-started/integrations/content
  Installation - Nuxt Content: https://content.nuxt.com/docs/getting-started/installation
- Nuxt Studio - Edit your Nuxt Content website in production - Nuxt Studio Documentation: https://nuxt.studio/
- Directus MCP - AI-Powered Collaborative CMS: https://directus.io/mcp
- Installation | Directus Docs: https://directus.io/docs/guides/ai/mcp/installation
- Local Mcp | Directus Docs: https://directus.io/docs/guides/ai/mcp/local-mcp
- Working with AI: Nuxt MCP Server v4: https://nuxt.com/docs/4.x/guide/ai/mcp
- Installation | Directus Sync: https://tractr.github.io/directus-sync/docs/getting-started/installation

## insp

- https://www.shadcnui-blocks.com/blocks
- https://github.com/starwind-ui/starwind-ui
- https://www.luckymedia.dev/services/web-application-development
- https://news.mit.edu/2025/unpacking-large-language-model-bias-0617

## ui

- https://basis.zhengyishen.com/docs/components/carousel/
- https://orbitui-docs.vercel.app/getting-started/installation/
- https://tailkits.com/ui/

## dev

- lightbox alt: https://github.com/biati-digital/glightbox, https://github.com/feimosi/baguetteBox.js, https://photoswipe.com/getting-started/
- Astro component for Splide slider/carousel: https://pascal-brand38.github.io/astro-dev/packages/astro-splide/
- search: https://github.com/shishkin/astro-pagefind
- SEO!: https://developers.google.com/search/docs/crawling-indexing/special-tags

## meilisearch

- https://www.meilisearch.com/docs/learn/security/basic_security#obtaining-api-keys-in-a-self-hosted-instance
- gen admin key `openssl rand -base64 16`
- get api key: `xh :7700/keys 'Authorization:Bearer <ADMIN_KEY>'`

## playwright

- https://www.browsercat.com/post/ultimate-guide-visual-testing-playwright
- https://css-tricks.com/automated-visual-regression-testing-with-playwright/

---

- API test: `xh -A bearer -a "<TOKEN>" :8090/api/collections/v_categorii/records?fields=slug | fx '.items[].slug' | less`

## prod deploy caddy

```
hct.vitrina.promo {
	handle_path /pocket/* {
		reverse_proxy localhost:8090
	}
	reverse_proxy localhost:4321
}
```

## images from cms

```jsx
<Image
  src={content.image.full}
  srcset={`${content.image.medium} 640w, ${content.image.large} 1280w, ${content.image.full} 1920w`}
  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 1920px"
  width={content.image.width}
  height={content.image.height}
  alt={content.image.alt}
  priority
/>
```
