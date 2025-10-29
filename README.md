# HCT site astro + svelte + pocketbase

## insp

- https://www.luckymedia.dev/services/web-application-development
- https://news.mit.edu/2025/unpacking-large-language-model-bias-0617

## dev

- API test: `xh -A bearer -a "<TOKEN>" :8090/api/collections/v_categorii/records?fields=slug | fx '.items[].slug' | less`
- lightbox alt: https://github.com/biati-digital/glightbox, https://github.com/feimosi/baguetteBox.js, https://photoswipe.com/getting-started/

## ui

- https://basis.zhengyishen.com/docs/components/carousel/
- https://orbitui-docs.vercel.app/getting-started/installation/

## prod deploy caddy

```
hct.vitrina.promo {
	handle_path /pocket/* {
		reverse_proxy localhost:8090
	}
	reverse_proxy localhost:4321
}
```
