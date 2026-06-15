import puppeteer from "puppeteer-core";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE = process.env.BASE || "http://localhost:4322";
// args: node shoot.mjs <path> <outname> [full|view] [width] [height]
const [, , routePath = "/", outName = "shot", mode = "full", w = "1440", h = "1000", selector = ""] = process.argv;

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--hide-scrollbars", "--force-color-profile=srgb"],
});
const page = await browser.newPage();
await page.setViewport({ width: +w, height: +h, deviceScaleFactor: 1 });
await page.goto(BASE + routePath, { waitUntil: "networkidle2", timeout: 45000 });
// Reveal everything + settle fonts/images.
await page.evaluate(() => {
  document.querySelectorAll("[data-reveal]").forEach((e) => e.classList.add("is-visible"));
  document.querySelectorAll("[data-count]").forEach((e) => { e.textContent = (e.dataset.count || "") + (e.dataset.suffix || ""); });
});
await new Promise((r) => setTimeout(r, 900));
if (mode === "el" && selector) {
  const el = await page.$(selector);
  await el.scrollIntoViewIfNeeded?.();
  await new Promise((r) => setTimeout(r, 300));
  await el.screenshot({ path: `/tmp/${outName}.png` });
} else {
  await page.screenshot({ path: `/tmp/${outName}.png`, fullPage: mode === "full" });
}
const dims = await page.evaluate(() => ({ h: document.documentElement.scrollHeight, w: innerWidth }));
console.log(`${outName}.png  ${routePath}  ${mode}  page=${dims.w}x${dims.h}`);
await browser.close();
