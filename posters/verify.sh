#!/usr/bin/env bash
# Checks the built poster: page size of both PDFs and the QR payload, decoded
# with zbar from the SVG and from a 300 dpi render of the actual PDF.
# Needs: zbarimg + rsvg-convert (brew install zbar librsvg), python3.
set -euo pipefail
cd "$(dirname "$0")"

EXPECTED='https://sign.hackvlc.es'
tmp=$(mktemp -d); trap 'rm -rf "$tmp"' EXIT

python3 -m venv "$tmp/venv"
"$tmp/venv/bin/pip" -q install pymupdf==1.26.4

"$tmp/venv/bin/python" - "$tmp" <<'PY'
import sys, pymupdf
out = sys.argv[1]
for f, want in [("poster-a3.pdf", (297, 420)), ("poster-a3-bleed.pdf", (303, 426))]:
    doc = pymupdf.open(f)
    p = doc[0]
    mm = lambda v: round(v * 25.4 / 72, 2)
    size = (mm(p.mediabox.width), mm(p.mediabox.height))
    trim = (mm(p.trimbox.width), mm(p.trimbox.height))
    print(f"{f}: pages={len(doc)} media={size[0]}x{size[1]} mm trim={trim[0]}x{trim[1]} mm")
    assert len(doc) == 1 and size == want and trim == (297, 420), f
p = pymupdf.open("poster-a3.pdf")[0]
p.get_pixmap(dpi=300).save(f"{out}/poster-300dpi.png")
PY

rsvg-convert -w 1200 qr-sign.svg -o "$tmp/qr.png"
for img in "$tmp/qr.png" "$tmp/poster-300dpi.png"; do
  got=$(zbarimg --quiet --raw -Sdisable -Sqrcode.enable "$img")
  echo "$(basename "$img"): $got"
  [ "$got" = "$EXPECTED" ] || { echo "QR mismatch: expected $EXPECTED" >&2; exit 1; }
done
echo OK
