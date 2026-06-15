// Post-build: rewrite root-absolute internal links (href="/…", src="/…") to
// include the GitHub Pages project base "/YCAT". Astro already prefixes its own
// emitted assets (/YCAT/_astro/…) and the <Image> srcset, so those are skipped.
// External (http, //), anchors (#), mailto:, tel: and data: are untouched.
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const BASE = process.env.SITE_BASE || "/YCAT";
const DIST = "dist";

if (BASE === "/" || BASE === "") {
  console.log("fix-base: base is root, nothing to do.");
  process.exit(0);
}

let changed = 0;
function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const s = statSync(p);
    if (s.isDirectory()) walk(p);
    else if (p.endsWith(".html")) fix(p);
  }
}
function fix(file) {
  const html = readFileSync(file, "utf8");
  // attr="/foo"  ->  attr="/YCAT/foo"   (not //, not already /YCAT/)
  const out = html.replace(
    /\b(href|src)="\/(?!\/)(?!YCAT\/)([^"]*)"/g,
    (_m, attr, rest) => `${attr}="${BASE}/${rest}"`
  );
  if (out !== html) {
    writeFileSync(file, out);
    changed++;
  }
}
walk(DIST);
console.log(`fix-base: rewrote internal links in ${changed} HTML file(s) with base ${BASE}`);
