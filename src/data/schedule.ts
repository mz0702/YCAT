export type Regatta = {
  date: string;
  klasse: string;
  name: string;
  club: string;
  href?: string;
};

export const regatta2026: Regatta[] = [
  { date: "02.05. – 03.05.", klasse: "420er", name: "Silber 420er", club: "YCaT", href: "https://www.manage2sail.com/de-DE/Club/Detail/c23ad5af-dfda-4a10-84f4-c74880236ff2" },
  { date: "16.05. – 17.05.", klasse: "Opti A/B", name: "Silber Opti", club: "YCaT", href: "https://www.manage2sail.com/de-DE/Club/Detail/c23ad5af-dfda-4a10-84f4-c74880236ff2" },
  { date: "04.06.", klasse: "Yardstick", name: "Südwindregatta", club: "SVRE", href: "https://svre.de/#Regatten" },
  { date: "06.06. – 07.06.", klasse: "H-Boot", name: "Woipertinger Cup", club: "YCaT", href: "https://www.manage2sail.com/de-DE/Club/Detail/c23ad5af-dfda-4a10-84f4-c74880236ff2" },
  { date: "13.06. – 14.06.", klasse: "VXOne", name: "Tegernseer Skiff VXOne", club: "SVRE", href: "https://svre.de/#Regatten" },
  { date: "20.06.", klasse: "Yardstick", name: "Oane Gäht No", club: "SVRE", href: "https://svre.de/#Regatten" },
  { date: "20.06. – 21.06.", klasse: "Yardstick", name: "Seemeisterschaft", club: "SVRE", href: "https://svre.de/#Regatten" },
  { date: "27.06. – 28.06.", klasse: "Dyas", name: "Silber Dyas", club: "YCaT", href: "https://www.manage2sail.com/de-DE/Club/Detail/c23ad5af-dfda-4a10-84f4-c74880236ff2" },
  { date: "04.07.", klasse: "Yardstick", name: "Er-Und-Sie-Regatta", club: "YCBW", href: "https://www.ycbw.de/regatten-2025/" },
  { date: "05.07.", klasse: "Yardstick", name: "Frühjahrsregatta Open", club: "TTYC", href: "https://www.ttyc.de/index.php/regatten/meldeformular" },
  { date: "11.07. – 12.07.", klasse: "Star", name: "Silber Star", club: "YCaT", href: "https://www.manage2sail.com/de-DE/Club/Detail/c23ad5af-dfda-4a10-84f4-c74880236ff2" },
  { date: "18.07. – 19.07.", klasse: "Tempest", name: "Silber Tempest", club: "YCaT", href: "https://www.manage2sail.com/de-DE/Club/Detail/c23ad5af-dfda-4a10-84f4-c74880236ff2" },
  { date: "25.07.", klasse: "Yardstick", name: "Clubmeisterschaft & Hafenfest", club: "YCaT", href: "https://www.manage2sail.com/de-DE/Club/Detail/c23ad5af-dfda-4a10-84f4-c74880236ff2" },
  { date: "01.08. – 02.08.", klasse: "FD", name: "IDM mit Silber FD", club: "YCaT", href: "https://www.manage2sail.com/de-DE/Club/Detail/c23ad5af-dfda-4a10-84f4-c74880236ff2" },
  { date: "08.08. – 09.08.", klasse: "Drachen", name: "Silber Drachen", club: "YCaT", href: "https://www.manage2sail.com/de-DE/Club/Detail/c23ad5af-dfda-4a10-84f4-c74880236ff2" },
  { date: "15.08.", klasse: "Yardstick", name: "Bierschiff-Regatta", club: "TTYC", href: "https://www.ttyc.de/index.php/regatten/meldeformular" },
  { date: "15.08. – 16.08.", klasse: "Yardstick", name: "Nachrallye", club: "YCaT", href: "https://www.manage2sail.com/de-DE/Club/Detail/c23ad5af-dfda-4a10-84f4-c74880236ff2" },
  { date: "22.08. – 23.08.", klasse: "Catstick", name: "Bayern Cup", club: "YCBW", href: "https://www.ycbw.de/regatten-2025/" },
  { date: "29.08. – 30.08.", klasse: "KZV", name: "BayMschft / Silber Kieler", club: "YCaT", href: "https://www.manage2sail.com/de-DE/Club/Detail/c23ad5af-dfda-4a10-84f4-c74880236ff2" },
  { date: "06.09.", klasse: "Yardstick", name: "Herbst Open", club: "TTYC", href: "https://www.ttyc.de/index.php/regatten/meldeformular" },
  { date: "19.09. – 20.09.", klasse: "blu26", name: "blu26 Bayern Cup", club: "YCBW", href: "https://www.ycbw.de/regatten-2025/" },
  { date: "26.09.", klasse: "Yardstick", name: "Absegeln", club: "YCBW", href: "https://www.ycbw.de/regatten-2025/" },
  { date: "10.10. – 11.10.", klasse: "Yardstick", name: "Sail und Ski", club: "YCBW", href: "https://www.ycbw.de/regatten-2025/" },
  { date: "06.12.", klasse: "FD/Opti", name: "Nikolaus-Regatta", club: "YCaT", href: "https://www.manage2sail.com/de-DE/Club/Detail/c23ad5af-dfda-4a10-84f4-c74880236ff2" },
];

export type Course = {
  date: string;
  title: string;
  capacity: string;
  status?: "ausgebucht" | "neu";
};

export const courses2026: Course[] = [
  { date: "25.05. – 29.05.", title: "Segelkurs, Pfingsten", capacity: "2 Gruppen je 8 Teilnehmer" },
  { date: "03.08. – 07.08.", title: "Segelkurs, Sommer", capacity: "2 Gruppen je 8 Teilnehmer", status: "ausgebucht" },
  { date: "10.08. – 14.08.", title: "Segelkurs, Sommer", capacity: "2 Gruppen je 8 Teilnehmer" },
  { date: "17.08. – 21.08.", title: "Trainingswoche (Fortgeschrittene)", capacity: "1 Gruppe, 8 Teilnehmer" },
  { date: "31.08. – 04.09.", title: "Regatta-Trainingswoche", capacity: "1 Gruppe, 8 Teilnehmer" },
];

export const ausbildungsinhalte = [
  "Sicheres Segeln auf allen Kursen mit Wende und Halse",
  "An- und Ablegen",
  "Segel- und Bootstrimm",
  "Seglerknoten",
  "Ausrüstung",
  "Bootspflege und Lagerung",
  "Regelkunde und Grundlagen Wettsegeln",
  "Umwelt- und Wetterkunde",
];
