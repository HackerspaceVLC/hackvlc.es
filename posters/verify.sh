#!/usr/bin/env bash
# Checks the built posters: page boxes of both PDFs, that they are fully vector
# (no raster images), and the QR payload, decoded with zbar from the SVG and
# from a 300 dpi render of each PDF. Finally reports whether the QR URL answers
# (informative only: the domain may not be provisioned yet).
# Needs: zbarimg + rsvg-convert (brew install zbar librsvg), python3, curl.
set -euo pipefail
cd "$(dirname "$0")"

EXPECTED='https://sign.hackvlc.es'
tmp=$(mktemp -d); trap 'rm -rf "$tmp"' EXIT

python3 -m venv "$tmp/venv"
"$tmp/venv/bin/pip" -q install pymupdf==1.26.4

"$tmp/venv/bin/python" - "$tmp" <<'PY'
import sys, pymupdf
out = sys.argv[1]
mm = lambda v: round(v * 25.4 / 72, 2)
for f, want in [("poster-a3.pdf", (297, 420)), ("poster-a3-bleed.pdf", (303, 426))]:
    doc = pymupdf.open(f)
    p = doc[0]
    size = (mm(p.mediabox.width), mm(p.mediabox.height))
    trim = (mm(p.trimbox.width), mm(p.trimbox.height))
    images = [x for x in range(1, doc.xref_length())
              if "/Subtype/Image" in doc.xref_object(x, compressed=True)]
    print(f"{f}: pages={len(doc)} media={size[0]}x{size[1]} mm "
          f"trim={trim[0]}x{trim[1]} mm raster_images={len(images)}")
    assert len(doc) == 1 and size == want and trim == (297, 420), f
    assert not images, f"{f} has raster images: xrefs {images}"
    p.get_pixmap(dpi=300).save(f"{out}/{f[:-4]}-300dpi.png")
PY

rsvg-convert -w 1200 qr-sign.svg -o "$tmp/qr-sign.png"
for img in "$tmp/qr-sign.png" "$tmp/poster-a3-300dpi.png" "$tmp/poster-a3-bleed-300dpi.png"; do
  got=$(zbarimg --quiet --raw -Sdisable -Sqrcode.enable "$img")
  echo "QR $(basename "$img"): $got"
  [ "$got" = "$EXPECTED" ] || { echo "QR mismatch: expected $EXPECTED" >&2; exit 1; }
done

if status=$(curl -sfI --max-time 10 -o /dev/null -w '%{http_code}' "$EXPECTED" 2>/dev/null); then
  echo "URL $EXPECTED: responde (HTTP $status)"
else
  echo "URL $EXPECTED: AVISO, no responde (curl exit $?; ¿DNS sin aprovisionar?). El cartel es correcto, pero el QR aún no lleva a ningún sitio."
fi
echo OK
