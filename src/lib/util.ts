export function stripTags(text: string): string {
  return text.replace(/(<([^>]+)>)/gi, "")
}

export function pairs_to_descriere(pairs: string[][]) {
  const inner = pairs.map((pair) => {
    const [x, y] = pair
    return `<h4>${stripTags(x)}</h4>
            <p class"mb-2">${stripTags(y)}</p>`
  })
  return inner.join("")
}
