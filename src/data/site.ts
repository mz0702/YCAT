export const site = {
  name: "Yacht-Club am Tegernsee",
  short: "YCaT",
  tagline: "Segelsport und mehr seit 1931",
  founded: 1931,
  address: {
    street: "Seestraße 42",
    zip: "83684",
    city: "Tegernsee",
  },
  phone: "+49 (0)8022 10114",
  fax: "+49 (0)8022 10176",
  email: "info@ycat.de",
  facebook: "https://www.facebook.com/pages/YCAT-Yacht-Club-am-Tegernsee/458717097630034",
  manage2sail: "https://www.manage2sail.com/de-DE/Club/Detail/c23ad5af-dfda-4a10-84f4-c74880236ff2",
  restaurant: "https://bistro-tegernsee.aquaristorante.de/",
};

export type NavChild = { label: string; href: string; external?: boolean; note?: string };
export type NavItem = { label: string; href: string; external?: boolean; children?: NavChild[] };

export const nav: NavItem[] = [
  {
    label: "Der YCaT",
    href: "/der-ycat/",
    children: [
      { label: "Geschäftsführender Vorstand", href: "/der-ycat/vorstand/" },
      { label: "Erweiterter Vorstand", href: "/der-ycat/erweiterter-vorstand/" },
      { label: "Obleute", href: "/der-ycat/obleute/" },
      { label: "Bootsklassen", href: "/der-ycat/bootsklassen/" },
      { label: "Sponsoren", href: "/der-ycat/sponsoren/" },
      { label: "Kontakt & Anfahrt", href: "/kontakt/" },
    ],
  },
  { label: "News", href: "/aktuelles/" },
  {
    label: "Regatta",
    href: "/regatten-am-tegernsee/",
    children: [
      { label: "Regatten des YCaT", href: site.manage2sail, external: true, note: "manage2sail" },
      { label: "Regatten am Tegernsee", href: "/regatten-am-tegernsee/" },
    ],
  },
  {
    label: "Jugend",
    href: "/jugend/",
    children: [
      { label: "Segelkurse", href: "/jugend/segelkurse/" },
      { label: "Training", href: "/jugend/training/" },
      { label: "Bootsleihe", href: "/mitglieder/bootsleihe/", note: "Mitglieder" },
    ],
  },
  {
    label: "Hafen",
    href: "/hafen/",
    children: [
      { label: "Arbeitsdienst", href: "/hafen/arbeitsdienst/" },
      { label: "Kran-Service", href: "/hafen/kran-service/" },
      { label: "Liegeplätze", href: "/hafen/liegeplaetze/" },
    ],
  },
  {
    label: "Wetter & Webcam",
    href: "/wind-und-wetter/",
    children: [
      { label: "Wind & Wetter", href: "/wind-und-wetter/" },
      { label: "Wettervorhersage", href: "/wind-und-wetter/wetter/" },
      { label: "Webcam", href: "/wind-und-wetter/webcam/" },
    ],
  },
  { label: "Mitglieder", href: "/mitglieder/" },
];

export const footerLinks = {
  club: [
    { label: "Der YCaT", href: "/der-ycat/" },
    { label: "Jugend & Segelkurse", href: "/jugend/" },
    { label: "Hafen & Liegeplätze", href: "/hafen/" },
    { label: "Regatten am Tegernsee", href: "/regatten-am-tegernsee/" },
    { label: "Aktuelles", href: "/aktuelles/" },
  ],
  service: [
    { label: "Kontakt & Anfahrt", href: "/kontakt/" },
    { label: "Mitgliederbereich", href: "/mitglieder/" },
    { label: "Sponsoren", href: "/der-ycat/sponsoren/" },
    { label: "Links", href: "/links/" },
  ],
  legal: [
    { label: "Datenschutz & Rechtliches", href: "/rechtlicher-hinweis/" },
    { label: "Impressum", href: "/impressum/" },
  ],
  documents: [
    {
      label: "Aufnahmeantrag (PDF)",
      href: "https://www.ycat.de/wp-content/uploads/2014/04/Aufnahmeantrag-zur-Aufnahme-als-Mitglied-in-den-YCaT-Version-2017.pdf",
    },
    {
      label: "Vereinfachter Spendennachweis (PDF)",
      href: "https://www.ycat.de/wp-content/uploads/2017/02/YCaT-AD-20170209-VereinfachterSpendennachweis.pdf",
    },
  ],
};
