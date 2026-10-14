// Page setup shared by every printable HTML. Load it as a classic, blocking
// <script> in <head>: it writes the @page rule before the body is laid out.
//
// ?size=a4 sets an A4 sheet (210 x 297 mm); the default is A3 (297 x 420 mm).
// ?bleed=3 grows the sheet by 3 mm on each side; artwork stays on the trim box.
const params = new URLSearchParams(location.search);
const bleed = Number(params.get('bleed') || 0);
const SIZES = { a3: [297, 420], a4: [210, 297] };
const [w, h] = SIZES[params.get('size')] || SIZES.a3;
document.documentElement.style.setProperty('--bleed', bleed + 'mm');
document.documentElement.style.setProperty('--trim-w', w + 'mm');
document.documentElement.style.setProperty('--trim-h', h + 'mm');
// The @page is OVERSIZE mm larger than the sheet: Chromium snaps page and
// layout sizes to whole CSS px, which left an unpainted hairline on the
// bottom/right edge. build.mjs crops the PDF back to the exact sheet size.
const OVERSIZE = 2;
document.write(`<style>@page { size: ${w + 2 * bleed + OVERSIZE}mm ${h + 2 * bleed + OVERSIZE}mm; margin: 0; }</style>`);
