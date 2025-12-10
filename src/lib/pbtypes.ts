// using https://transform.tools/json-to-typescript

export interface Produs {
  categorie: string
  collectionId: string
  collectionName: string
  created: string
  descriere: string
  descriere_extra: string
  descriere_extra_tip: string
  expand: Expand
  id: string
  imagini: string[]
  index_imagine_principala: number
  materiale: string[]
  nume: string
  partener: string
  promo: boolean
  publicat: boolean
  specificatii: string
  updated: string
  url_producator: string
  variante: any[]
  variante_scurt: any[]
  videos: any[]
}

export interface Expand {
  categorie: Categorie
  materiale: Materiale[]
  partener: Partener
  variante_scurt: Variante_produs[]
}

export interface Categorie {
  _order: number
  collectionId: string
  collectionName: string
  created: string
  descriere: string
  icon: string
  id: string
  imagine: string
  nume: string
  slug: string
  updated: string
}

export interface Materiale {
  _order: number
  collectionId: string
  collectionName: string
  created: string
  denumire: string
  denumire_en: string
  descriere: string
  icon: string
  id: string
  imagine: string
  slug: string
  updated: string
}

export interface Partener {
  _order: number
  cod: string
  collectionId: string
  collectionName: string
  created: string
  descriere: string
  id: string
  logo: string
  nume: string
  publicat: boolean
  updated: string
  url: string
}

export interface Client {
  _order: number
  collectionId: string
  collectionName: string
  created: string
  descriere: string
  id: string
  locatie: string
  logo: string
  nume: string
  publicat: boolean
  updated: string
  url: string
}

export interface Variante_produs {
  _ord: number
  collectionId: string
  collectionName: string
  created: string
  descriere: string
  id: string
  imagine: string
  nume: string
  produs: string
  updated: string
  url_producator: string
}
