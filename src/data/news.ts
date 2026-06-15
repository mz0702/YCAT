export type NewsItem = {
  title: string;
  date: string;
  category: "Regatta" | "Jugend" | "Verein";
  excerpt: string;
  result?: { place: string; crew: string }[];
  href: string;
};

export const news: NewsItem[] = [
  {
    title: "Wolpertinger-Cup 2026",
    date: "8. Juni 2026",
    category: "Regatta",
    excerpt:
      "13 H-Boote sind der Einladung des Wolpertinger gefolgt. Bei einem Sonne-Wolken-Mix konnten am Samstag zwei Wettfahrten gesegelt werden, am Sonntag kamen nach einem leckeren Frühstück zwei weitere dazu. Vielen Dank an alle Helfer auf dem Wasser und im Hintergrund!",
    result: [
      { place: "🥇", crew: "GER 1021 – Finn Kenter mit Crew" },
      { place: "🥈", crew: "GER 1737 – Dirk Stadler mit Crew" },
      { place: "🥉", crew: "GER 1663 – Peter Zauner mit Crew" },
    ],
    href: "https://www.facebook.com/458717097630034/posts/1719597916216695",
  },
  {
    title: "Opti & Laser-Liga im Segelclub Chiemsee-Feldwies",
    date: "Juni 2026",
    category: "Jugend",
    excerpt:
      "Erfolgreich nahmen erstmalig Ben im Opti und Louis im Laser an der Liga-Regatta teil – eine tolle Erfahrung für die Kids. Wir gratulieren Ben zu Platz 24 im Opti und Louis zu Platz 8 im Laser.",
    href: "https://www.facebook.com/1716901986486288",
  },
  {
    title: "Der Wolpertinger lädt ein zu seinem Feste",
    date: "6. – 7. Juni 2026",
    category: "Verein",
    excerpt:
      "„Für das Wetter hofft er nur das Beste. Am sechsten und siebten Juni dann, kommt jeder der das H-Boot segeln kann.“ Ein Wochenende voller Segeln, gutem Essen und bester Stimmung am Tegernsee.",
    href: "https://www.facebook.com/1705580514285102",
  },
];
