interface MenuItem {
  href: string
  label: string
  description?: string
  items?: MenuItem[]
}

export const navigationLinks: Partial<MenuItem>[] = [
  {
    label: "Companie",
    items: [
      {
        href: "/despre",
        label: "Despre noi",
      },
      {
        href: "/parteneri",
        label: "Parteneri",
      },
      {
        href: "/clienti",
        label: "Clienți și proiecte",
      },
      {
        href: "/echipa",
        label: "Echipa",
      },
    ],
  },
  {
    label: "Produse",
    items: [
      {
        href: "/produse",
        label: "Toate produsele",
        description: "Selecție produse după partener, categorie, materiale.",
      },
      {
        href: "/categorii",
        label: "Categorii",
        description:
          "Echipamente pentru tăiere, dezmembrare tocare, mărunțire și granulare. Prese de balotat și compactoare. Dezmembrare vehicule și motoare. Recuperare, stocare și analiză fluide. Sisteme de sortare",
      },
      {
        href: "/materiale",
        label: "Materiale",
        description:
          "Reciclarea metalelor, aluminiului, cablurilor. Vehicule scoase din uz, Motoare, DEEE, Hidrapulper. Deșeuri solide urbane. Conserve. Metale mixte.",
      },
    ],
  },
  {
    label: "Servicii",
    items: [
      { label: "Instalare și montaj", href: "/servicii-instalare" },
      { label: "Întreținere și recondiționare", href: "/servicii-intretinere" },
      { label: "Consumabile", href: "/consumabile" },
    ],
  },
  { href: "/noutati", label: "Noutăți" },
  { href: "/contact", label: "Contact" },
]
