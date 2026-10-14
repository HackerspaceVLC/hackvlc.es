// Builds every printable piece listed in posters.json: generates its QR code
// as vector SVG (when it has one), then prints <name>.html to PDF with headless
// Chromium (Playwright).
//
//   npm install && npx playwright install chromium   # once
//   npm run build                                    # all pieces
//   npm run build -- taller-git-a3                   # only the named ones
//
// Outputs per piece (next to this file):
//   <qr>              vector QR for <url> (committed, referenced by the HTML)
//   <name>.pdf        trim size, no bleed (A3 297 x 420 mm, or A4 210 x 297 mm)
//   <name>-bleed.pdf  trim size + 3 mm bleed on every side, for print shops
//
// The page size of each piece comes from its optional "size" field in
// posters.json ("a3" by default, "a4" for the membership form).
//
// If an HTML marks elements with data-f="name" (and data-t="check" for
// checkboxes), the PDF gets real AcroForm fields over those boxes, so the form
// can be filled in any PDF reader and not only by hand. Positions come from
// measuring the live layout in Chromium.

import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
import QRCode from 'qrcode';
import { chromium } from 'playwright';
import { PDFDocument, StandardFonts, rgb, drawLine, PDFName, PDFDict } from 'pdf-lib';

const here = path.dirname(fileURLToPath(import.meta.url));
const all = JSON.parse(await readFile(path.join(here, 'posters.json'), 'utf8'));
const only = process.argv.slice(2);
const unknown = only.filter((n) => !all.some((p) => p.name === n));
if (unknown.length) throw new Error(`unknown piece(s): ${unknown.join(', ')}`);
const pieces = only.length ? all.filter((p) => only.includes(p.name)) : all;

const MM = 72 / 25.4;
const PX_TO_PT = 72 / 96; // CSS px -> PDF pt
const BLEED = 3;
const SIZES = {
  a3: { w: 297 * MM, h: 420 * MM },
  a4: { w: 210 * MM, h: 297 * MM },
};

// Error correction H (30 %) so the code survives tape, scratches and glare on
// the door.
for (const { qr, url } of pieces) {
  if (!qr) continue;
  const qrSvg = await QRCode.toString(url, {
    type: 'svg',
    errorCorrectionLevel: 'H',
    margin: 4, // 4-module quiet zone (ISO/IEC 18004 minimum), baked into the SVG
    color: { dark: '#000000', light: '#ffffff' },
  });
  await writeFile(path.join(here, qr), qrSvg);
}

// Rects (in CSS px, relative to the sheet) of every field marked in the HTML.
const FIELD_SELECTOR = '[data-f]';
const collectFields = () => {
  const px = (v) => v * (72 / 96);
  return [...document.querySelectorAll('[data-f]')].map((el) => {
    const r = el.getBoundingClientRect();
    return {
      name: el.dataset.f,
      check: el.dataset.t === 'check',
      checked: el.dataset.checked === '1',
      comb: el.dataset.comb ? Number(el.dataset.comb) : 0,
      x: px(r.left),
      top: px(r.top),
      w: px(r.width),
      h: px(r.height),
    };
  });
};

// The HTML asks for a page OVERSIZE mm larger than the sheet (see sheet.js)
// and paints the extra in the background colour, because Chromium snaps page
// and layout sizes to whole CSS px and would otherwise leave an unpainted
// hairline on the bottom/right edge. Content is anchored at the top-left
// corner, so crop the boxes to the exact sheet from there and declare
// TrimBox/BleedBox so print software knows where to cut.
async function finish(file, bleed, title, size, fields, embed) {
  const doc = await PDFDocument.load(await readFile(file));
  const [pg] = doc.getPages();
  const top = pg.getHeight(); // before cropping: page top in user space

  if (embed) {
    const [ep] = await doc.embedPdf(await readFile(path.join(here, embed.file)));
    const w = embed.w * MM;
    const h = (w * ep.height) / ep.width;
    pg.drawPage(ep, { x: embed.x * MM, y: top - embed.top * MM - h, width: w, height: h });
  }

  if (fields?.length) {
    const form = doc.getForm();
    const font = await doc.embedFont(StandardFonts.Helvetica);
    const checkBoxes = [];
    for (const f of fields) {
      // y measured from the top; PDF origin is the bottom-left corner.
      const y = top - f.top - f.h;
      if (f.check) {
        const m = 0.6 * MM; // a little slack around the printed square
        const box = form.createCheckBox(f.name);
        box.addToPage(pg, {
          x: f.x - m, y: y - m, width: f.h + 2 * m, height: f.h + 2 * m,
          borderWidth: 0,
        });
        if (f.checked) box.check(); // e.g. "pago recurrente", always marked
        checkBoxes.push(box);
      } else {
        const field = form.createTextField(f.name);
        field.addToPage(pg, {
          x: f.x, y, width: f.w, height: f.h, borderWidth: 0,
          font, textColor: rgb(0.1, 0.12, 0.17),
        });
        field.setFontSize(Math.max(7, Math.min(10, f.h * 0.72)));
        if (f.comb) {
          // Combed field: one cell per character (the IBAN, 24 cells).
          field.setMaxLength(f.comb);
          field.enableCombing(f.comb);
          // pdf-lib gives fields a white /MK background; on the IBAN it would
          // cover the printed cells. Drop it so the page shows through.
          const mk = field.acroField.getWidgets()[0].dict.lookupMaybe(PDFName.of('MK'), PDFDict);
          if (mk) mk.delete(PDFName.of('BG'));
          // Draw the cell grid as vector lines: Chromium does not print the
          // borders of the CSS cells, so the visible cells in the PDF come
          // from here and line up with the combed characters.
          const ink = rgb(0.36, 0.39, 0.44);
          const lw = 0.4 * MM;
          pg.drawRectangle({ x: f.x, y, width: f.w, height: f.h, borderColor: ink, borderWidth: lw });
          for (let i = 1; i < f.comb; i++) {
            const cx = f.x + (f.w * i) / f.comb;
            pg.drawLine({ start: { x: cx, y }, end: { x: cx, y: y + f.h }, thickness: lw, color: ink });
          }
        }
      }
    }
    form.updateFieldAppearances(font);
    // pdf-lib's default checkbox paints a white background; that would cover
    // the square printed on the form. Draw only an "X", so the printed square
    // stays and the cross appears over it when checked.
    const ink = rgb(0.078, 0.098, 0.165);
    const crossOnly = (cb, widget) => {
      const { width, height } = widget.getRectangle();
      const m = 0.6 * MM; // margin that addToPage() added around the square
      const p = Math.min(width - 2 * m, height - 2 * m) * 0.16;
      const x0 = m + p, x1 = width - m - p, y0 = m + p, y1 = height - m - p;
      const line = (a, b, c, d) =>
        drawLine({ start: { x: a, y: b }, end: { x: c, y: d }, thickness: 1.1, color: ink });
      const on = [...line(x0, y0, x1, y1), ...line(x1, y0, x0, y1)];
      return { normal: { on, off: [] } };
    };
    for (const box of checkBoxes) box.updateAppearances(crossOnly);
  }

  const b = bleed * MM;
  const w = size.w + 2 * b;
  const h = size.h + 2 * b;
  const y0 = pg.getMediaBox().height - h;
  pg.setMediaBox(0, y0, w, h);
  pg.setCropBox(0, y0, w, h);
  pg.setBleedBox(0, y0, w, h);
  pg.setTrimBox(b, y0 + b, size.w, size.h);
  doc.setTitle(title);
  doc.setCreator('posters/build.mjs');
  await writeFile(file, await doc.save());
}

const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  for (const { name, title, size: sizeName = 'a3', embed } of pieces) {
    const size = SIZES[sizeName];
    if (!size) throw new Error(`unknown size "${sizeName}" for ${name}`);
    const src = pathToFileURL(path.join(here, `${name}.html`)).href;
    const url = (bleed) => `${src}?size=${sizeName}${bleed ? `&bleed=${bleed}` : ''}`;

    await page.goto(url(0));
    await page.evaluate(() => document.fonts.ready);
    const fields = await page.evaluate(collectFields);

    for (const { file, bleed } of [
      { file: `${name}.pdf`, bleed: 0 },
      { file: `${name}-bleed.pdf`, bleed: BLEED },
    ]) {
      await page.goto(url(bleed));
      await page.evaluate(() => document.fonts.ready);
      await page.pdf({
        path: path.join(here, file),
        preferCSSPageSize: true, // @page size is set by the HTML from ?bleed
        printBackground: true,
      });
      await finish(path.join(here, file), bleed, title, size, fields, embed);
      console.log(`wrote ${file}${fields.length ? ` (${fields.length} campos)` : ''}`);
    }
  }
} finally {
  await browser.close();
}
