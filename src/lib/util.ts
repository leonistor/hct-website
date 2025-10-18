import { windowed } from "es-toolkit"

export function stripTags(text: string): string {
  return text.replace(/(<([^>]+)>)/gi, "")
}
