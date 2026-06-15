import { load } from 'cheerio';
import { writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const BASE = 'https://www.ycat.de';

const PAGES = [
  ['home', 'https://www.ycat.de/'],
  ['der-ycat', 'https://www.ycat.de/der-ycat/'],
  ['vorstand', 'https://www.ycat.de/der-ycat/vorstand/'],
  ['erweiterter-vorstand', 'https://www.ycat.de/der-ycat/erweiterter-vorstand/'],
  ['obleute', 'https://www.ycat.de/der-ycat/obleute/'],
  ['bootsklassen', 'https://www.ycat.de/der-ycat/bootsklassen/'],
  ['sponsoren', 'https://www.ycat.de/der-ycat/sponsoren/'],
  ['kontakt', 'https://www.ycat.de/kontakt/'],
  ['aktuelles', 'https://www.ycat.de/aktuelles/'],
  ['regatten-am-tegernsee', 'https://www.ycat.de/regatten-am-tegernsee/'],
  ['jugend', 'https://www.ycat.de/jugend-aktivitaeten.html'],
  ['segelkurse', 'https://www.ycat.de/jugend-aktivitaeten-html/segelkurse/'],
  ['training', 'https://www.ycat.de/jugend-aktivitaeten-html/training/'],
  ['bootsleihe', 'https://www.ycat.de/mitglieder/bootsleihe-2/'],
  ['hafen', 'https://www.ycat.de/hafen/'],
  ['arbeitsdienst', 'https://www.ycat.de/hafen/arbeitsdienst/'],
  ['kran-service', 'https://www.ycat.de/hafen/kran-service/'],
  ['liegeplaetze', 'https://www.ycat.de/hafen/liegeplaetze/'],
  ['wind-und-wetter', 'https://www.ycat.de/wind-und-wetter/'],
  ['wetter', 'https://www.ycat.de/wind-und-wetter/wetter/'],
  ['webcam', 'https://www.ycat.de/wind-und-wetter/webcam/'],
  ['mitglieder', 'https://www.ycat.de/mitglieder/'],
  ['links', 'https://www.ycat.de/links/'],
  ['rechtlicher-hinweis', 'https://www.ycat.de/rechtlicher-hinweis/'],
  ['impressum', 'https://www.ycat.de/impressum/'],
];

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36';

async function fetchHtml(url) {
  const res = await fetch(url, { headers: { 'User-Agent': UA, 'Accept': 'text/html' } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return await res.text();
}

const allImages = new Set();
const summary = [];

for (const [slug, url] of PAGES) {
  try {
    const html = await fetchHtml(url);
    await writeFile(`raw/${slug}.html`, html);
    const $ = load(html);

    // Remove chrome we don't want in the text extract
    $('script, style, noscript, header#top, #colophon, footer, .widget-area, nav, .sub-menu, #masthead, .site-header, .site-footer').remove();

    // Find the main content region (Avada/WP themes)
    let $main = $('#content, main, .post-content, article, .fusion-fullwidth').first();
    if (!$main.length) $main = $('body');

    const title = $('title').first().text().trim();
    const metaDesc = load(html)('meta[name="description"]').attr('content') || '';

    // Headings + paragraphs in order
    const blocks = [];
    $main.find('h1, h2, h3, h4, h5, p, li, td, th, figcaption, blockquote, a, address').each((_, el) => {
      const tag = el.tagName.toLowerCase();
      let txt = $(el).text().replace(/\s+/g, ' ').trim();
      if (tag === 'a') {
        const href = $(el).attr('href') || '';
        if (txt && href && !href.startsWith('#')) txt = `[LINK] ${txt} -> ${href}`;
        else txt = '';
      }
      if (txt && txt.length > 1) blocks.push(`<${tag}> ${txt}`);
    });

    // De-dup consecutive identical lines
    const lines = [];
    for (const b of blocks) if (b !== lines[lines.length - 1]) lines.push(b);

    const textOut = [
      `URL: ${url}`,
      `TITLE: ${title}`,
      `META: ${metaDesc}`,
      '',
      ...lines,
    ].join('\n');
    await writeFile(`text/${slug}.txt`, textOut);

    // Images (full document, including header/footer for completeness)
    const $full = load(html);
    const imgs = new Set();
    $full('img').each((_, el) => {
      let src = $full(el).attr('data-orig-src') || $full(el).attr('data-lazy-src') || $full(el).attr('src') || '';
      const srcset = $full(el).attr('data-srcset') || $full(el).attr('srcset') || '';
      if (src) imgs.add(src);
      if (srcset) srcset.split(',').forEach(s => { const u = s.trim().split(' ')[0]; if (u) imgs.add(u); });
    });
    // background images in inline styles
    $full('[style*="background"]').each((_, el) => {
      const st = $full(el).attr('style') || '';
      const m = [...st.matchAll(/url\(["']?([^"')]+)["']?\)/g)];
      m.forEach(x => imgs.add(x[1]));
    });

    const norm = [...imgs]
      .map(s => s.startsWith('//') ? 'https:' + s : s.startsWith('/') ? BASE + s : s)
      .filter(s => /^https?:/.test(s))
      .filter(s => !/(emoji|gravatar|\.svg$|data:)/i.test(s));
    norm.forEach(s => allImages.add(s));

    summary.push({ slug, url, ok: true, lines: lines.length, images: norm.length });
    console.log(`OK   ${slug.padEnd(24)} ${lines.length} blocks, ${norm.length} imgs`);
  } catch (e) {
    summary.push({ slug, url, ok: false, error: String(e) });
    console.log(`FAIL ${slug.padEnd(24)} ${e}`);
  }
}

await writeFile('images-manifest.json', JSON.stringify([...allImages].sort(), null, 2));
await writeFile('summary.json', JSON.stringify(summary, null, 2));
console.log(`\nTotal unique images: ${allImages.size}`);
console.log('Manifest -> _scrape/images-manifest.json');
