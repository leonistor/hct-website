import { windowed } from "es-toolkit"

export function stripTags(text: string | undefined): string {
  if (!text) {
    return ""
  }
  return text.replace(/(<([^>]+)>)/gi, "")
}
