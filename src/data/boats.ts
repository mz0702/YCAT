export type BoatGroup = {
  group: string;
  blurb: string;
  classes: string[];
};

export const boatGroups: BoatGroup[] = [
  {
    group: "Jugendboote",
    blurb: "Der Einstieg und die Talentschmiede – vom Optimist bis zum sportlichen 29er.",
    classes: ["Optimist", "RS Feva XXL", "Europe", "420er", "29er"],
  },
  {
    group: "Jollen",
    blurb: "Schnelle, anspruchsvolle Boote für Segler, die das Trapez und die Gleitfahrt suchen.",
    classes: ["470er", "FD", "Korsar", "49er", "Finn Dinghy", "Laser"],
  },
  {
    group: "Kielboote",
    blurb: "Traditionsreiche Klassen mit starken Flotten und großer Regatta-Geschichte am See.",
    classes: ["KZV", "Tempest", "Dyas", "Starboot", "H-Boot", "Drachen"],
  },
];

export const förderklassen = ["J70", "J80", "Streamline", "Esse 750", "Esse 850", "Traditionsklassen"];

export const bootsklassenIntro =
  "Der YCaT hat eine sportliche Ausrichtung und fördert daher die Entstehung und Beibehaltung von Flotten im Verein. Bootsklassen innerhalb dieser sogenannten Klassenpolitik erhalten bevorzugt Liegeplätze. Dies sind im Wesentlichen reviergeeignete Einheitsklassen. Damit wird zu großen und attraktiven Feldern bei Regatten beigetragen.";

export const klassenpolitik =
  "Die Klassenpolitik wird bei neuen nationalen und internationalen Tendenzen den Wünschen der Segler angepasst. Zur Erprobung der Eignung neuer Klassen können u. U. auf Antrag einzelne, als geeignet eingeschätzte Boote je nach Verfügbarkeit saisonweise einen Liegeplatz erhalten. Außerhalb der Klassenpolitik gibt es moderne, sportliche Klassen, deren Verbreitung innerhalb des Clubs forciert wird mit dem Ziel, Flottenstärke zu erreichen.";
