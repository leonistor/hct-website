import { windowed } from "es-toolkit"

export function stripTags(text: string | undefined): string {
  if (!text) {
    return ""
  }
  return text.replace(/(<([^>]+)>)/gi, "")
}

export function pb_to_proxy(url: string): string {
  return url.replace("http://127.0.0.1:8090", "/pocket")
}
