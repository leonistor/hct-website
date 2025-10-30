# HCT site astro + svelte + pocketbase

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
