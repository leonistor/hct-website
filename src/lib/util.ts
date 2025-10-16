import { windowed } from "es-toolkit"

export function stripTags(text: string): string {
  return text.replace(/(<([^>]+)>)/gi, "")
}

// TODO: - better https://www.hyperui.dev/components/application/details-list?codeType=html&isRtl=false&previewWidth=340px#component-1
export function descriere_extra_to_html(
  descriere_extra: string | undefined,
  dt_class = "",
  dd_class = "",
) {
  if (!descriere_extra) {
    return ""
  }
  const raw_descriere_extra = descriere_extra.split("\r\n")!
  const pairs = windowed(raw_descriere_extra, 2, 2)
  const inner = pairs.map((pair) => {
    const [x, y] = pair
    return `<dt class="${dt_class}">${stripTags(x)}<dd>
            <dt class="${dd_class}">${stripTags(y)}</dt>`
  })
  return "<dl>" + inner.join("") + "</dl>"
}

export function specificatii_to_html(
  specs: string | undefined,
  dt_class = "",
  dd_class = "",
) {
  if (!specs) {
    return ""
  }
  const raw_specs = specs.split("\r\n").map(stripTags)
  const inner = raw_specs.map((spec) => {
    const [x, y] = spec.split(":")
    return `<dt class="${dt_class}">${x}<dd>
            <dt class="${dd_class}">${y}</dt>`
  })
  return "<dl>" + inner.join("") + "</dl>"
}
