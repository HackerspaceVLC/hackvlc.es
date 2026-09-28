// Page setup shared by every poster HTML. Load it as a classic, blocking
// <script> in <head>: it writes the @page rule before the body is laid out.
//
// ?bleed=3 grows the sheet by 3 mm on each side; artwork stays on the trim box.
const bleed = Number(new URLSearchParams(location.search).get('bleed') || 0);
document.documentElement.style.setProperty('--bleed', bleed + 'mm');
// The @page is OVERSIZE mm larger than the sheet: Chromium snaps page and
// layout sizes to whole CSS px, which left an unpainted hairline on the
// bottom/right edge. build.mjs crops the PDF back to the exact sheet size.
const OVERSIZE = 2;
document.write(`<style>@page { size: ${297 + 2 * bleed + OVERSIZE}mm ${420 + 2 * bleed + OVERSIZE}mm; margin: 0; }</style>`);
