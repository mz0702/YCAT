import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const manifest = JSON.parse(await readFile('images-manifest.json', 'utf8'));
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36';

// Only YCaT-hosted content photos; skip theme chrome / placeholders / external feeds.
const wanted = manifest.filter(u =>
  u.includes('ycat.de/wp-content/uploads') &&
  !/dummy|placeholder|thumb-placeholder/i.test(u)
);

// Also derive the full-resolution original for any cropped variant (-WxH or -scaled / -eNNN).
const set = new Set();
for (const u of wanted) {
  set.add(u);
  const orig = u.replace(/-\d+x\d+(?=\.[a-z]+$)/i, '');
  set.add(orig);
}

await mkdir('images', { recursive: true });
const results = [];
for (const url of set) {
  const name = url.split('/uploads/')[1].replace(/[\/]/g, '__');
  const out = `images/${name}`;
  if (existsSync(out)) { results.push({ url, out, ok: true, cached: true }); continue; }
  try {
    const res = await fetch(url, { headers: { 'User-Agent': UA } });
    if (!res.ok) { results.push({ url, ok: false, status: res.status }); console.log(`MISS ${res.status} ${name}`); continue; }
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(out, buf);
    results.push({ url, out, ok: true, bytes: buf.length });
    console.log(`OK   ${name.padEnd(48)} ${(buf.length/1024).toFixed(0)}kb`);
  } catch (e) {
    results.push({ url, ok: false, error: String(e) });
    console.log(`FAIL ${name} ${e}`);
  }
}
await writeFile('download-results.json', JSON.stringify(results, null, 2));
const ok = results.filter(r => r.ok).length;
console.log(`\nDownloaded ${ok}/${results.length} files into _scrape/images/`);
