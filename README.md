# YCaT — Yacht-Club am Tegernsee

Neugestaltete Website für den Yacht-Club am Tegernsee e.V. — gebaut mit
[Astro](https://astro.build), Lenis (Smooth-Scroll) und einem eigenen Design-System.

Inhalte und Bilder stammen von der bestehenden Website **ycat.de** und wurden
1:1 übernommen. Struktur und Seitenanzahl entsprechen exakt dem Original (25 Seiten).

## Entwicklung

```bash
npm install        # Abhängigkeiten installieren
npm run dev        # Dev-Server (http://localhost:4321)
npm run build      # Statische Seite nach dist/ bauen
npm run preview    # Build lokal ansehen
```

## Design

- **Palette (OKLCH):** Alpine Pine-Green (das Burgee + die bewaldeten Hänge),
  Tegernsee-Lake-Teal, warmes Signal-Brass als Akzent. Cooles Segel-Weiß als
  Hintergrund — kein Cream.
- **Typografie:** Fraunces (Display-Serif) + Plus Jakarta Sans (Fließtext).
- **Motion:** Lenis-Smooth-Scroll, Scroll-Reveals via IntersectionObserver,
  GPU-only Transforms, vollständige `prefers-reduced-motion`-Fallbacks.

## Struktur

```
src/
  components/   Layout, Nav, Footer, PageHero, Karten, Icons, Burgee …
  data/         site, club, boats, schedule, partners, news  (Inhalte)
  pages/        25 Seiten + 404, gespiegelte Navigationsstruktur
  styles/       global.css (Design-Tokens & Basis)
  assets/       Fotos, Porträts, Sponsoren-Logos (Astro-optimiert → WebP)
public/         Favicon, OG-Image, robots.txt
_scrape/        Arbeitsordner: Scraper + Original-Assets (nicht Teil der Seite)
```

## Seitenübersicht

Home · Der YCaT (Vorstand, Erweiterter Vorstand, Obleute, Bootsklassen,
Sponsoren) · Kontakt · Aktuelles · Regatten am Tegernsee · Jugend (Segelkurse,
Training) · Bootsleihe · Hafen (Arbeitsdienst, Kran-Service, Liegeplätze) ·
Wind & Wetter (Vorhersage, Webcam) · Mitglieder · Links · Datenschutz · Impressum
