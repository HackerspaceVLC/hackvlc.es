// Builds the A3 door poster: generates the QR code as vector SVG, then prints
// poster-a3.html to PDF with headless Chromium (Playwright).
//
//   npm install && npx playwright install chromium   # once
//   npm run build
//
// Outputs (next to this file):
//   qr-sign.svg          vector QR for QR_URL (committed, referenced by the HTML)
//   poster-a3.pdf        A3 trim size, 297 x 420 mm, no bleed
//   poster-a3-bleed.pdf  303 x 426 mm: A3 + 3 mm bleed on every side, for print shops

import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
import QRCode from 'qrcode';
import { chromium } from 'playwright';
import { PDFDocument } from 'pdf-lib';

const QR_URL = 'https://sign.hackvlc.es';
const here = path.dirname(fileURLToPath(import.meta.url));

// Error correction H (30 %) so the code survives tape, scratches and glare on
// the door.
const qrSvg = await QRCode.toString(QR_URL, {
  type: 'svg',
  errorCorrectionLevel: 'H',
  margin: 4, // 4-module quiet zone (ISO/IEC 18004 minimum), baked into the SVG
  color: { dark: '#000000', light: '#ffffff' },
});
await writeFile(path.join(here, 'qr-sign.svg'), qrSvg);

const BLEED = 3;
const MM = 72 / 25.4;
const TRIM = { w: 297 * MM, h: 420 * MM };

// The HTML asks for a page OVERSIZE mm larger than the sheet (see
// poster-a3.html) and paints the extra in the background colour, because
// Chromium snaps page and layout sizes to whole CSS px and would otherwise
// leave an unpainted hairline on the bottom/right edge. Content is anchored at
// the top-left corner, so crop the boxes to the exact sheet from there and
// declare TrimBox/BleedBox so print software knows where to cut.
async function fixBoxes(file, bleed) {
  const doc = await PDFDocument.load(await readFile(file));
  const [pg] = doc.getPages();
  const b = bleed * MM;
  const w = TRIM.w + 2 * b;
  const h = TRIM.h + 2 * b;
  const y0 = pg.getMediaBox().height - h;
  pg.setMediaBox(0, y0, w, h);
  pg.setCropBox(0, y0, w, h);
  pg.setBleedBox(0, y0, w, h);
  pg.setTrimBox(b, y0 + b, TRIM.w, TRIM.h);
  doc.setTitle('Hackerspace Valencia - cartel A3 puerta');
  doc.setCreator('posters/build.mjs');
  await writeFile(file, await doc.save());
}

const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  const src = pathToFileURL(path.join(here, 'poster-a3.html')).href;

  for (const { file, bleed } of [
    { file: 'poster-a3.pdf', bleed: 0 },
    { file: 'poster-a3-bleed.pdf', bleed: BLEED },
  ]) {
    await page.goto(bleed ? `${src}?bleed=${bleed}` : src);
    await page.evaluate(() => document.fonts.ready);
    await page.pdf({
      path: path.join(here, file),
      preferCSSPageSize: true, // @page size is set by the HTML from ?bleed
      printBackground: true,
    });
    await fixBoxes(path.join(here, file), bleed);
    console.log(`wrote ${file}`);
  }
} finally {
  await browser.close();
}
