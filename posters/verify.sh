#!/usr/bin/env bash
# Checks every poster listed in posters.json: page boxes of both PDFs, that
# they are fully vector (no raster images), and the QR payload, decoded with
# zbar from the SVG and from a 300 dpi render of each PDF. Finally reports
# whether each QR URL answers (informative only: a page may not be published
# yet).
# Needs: zbarimg + rsvg-convert (brew install zbar librsvg), python3, curl.
set -euo pipefail
cd "$(dirname "$0")"

tmp=$(mktemp -d); trap 'rm -rf "$tmp"' EXIT

python3 -m venv "$tmp/venv"
"$tmp/venv/bin/pip" -q install pymupdf==1.26.4

# One line per poster: name <TAB> qr svg <TAB> url
"$tmp/venv/bin/python" - "$tmp" > "$tmp/posters.tsv" <<'PY'
import json, sys, pymupdf
out = sys.argv[1]
mm = lambda v: round(v * 25.4 / 72, 2)
for poster in json.load(open("posters.json")):
    name = poster["name"]
    for f, want in [(f"{name}.pdf", (297, 420)), (f"{name}-bleed.pdf", (303, 426))]:
        doc = pymupdf.open(f)
        p = doc[0]
        size = (mm(p.mediabox.width), mm(p.mediabox.height))
        trim = (mm(p.trimbox.width), mm(p.trimbox.height))
        images = [x for x in range(1, doc.xref_length())
                  if "/Subtype/Image" in doc.xref_object(x, compressed=True)]
        print(f"{f}: pages={len(doc)} media={size[0]}x{size[1]} mm "
              f"trim={trim[0]}x{trim[1]} mm raster_images={len(images)}", file=sys.stderr)
        assert len(doc) == 1 and size == want and trim == (297, 420), f
        assert not images, f"{f} has raster images: xrefs {images}"
        p.get_pixmap(dpi=300).save(f"{out}/{f[:-4]}-300dpi.png")
    print(f"{name}\t{poster['qr']}\t{poster['url']}")
PY

decode() { zbarimg --quiet --raw -Sdisable -Sqrcode.enable "$1"; }

while IFS=$'\t' read -r name qr url; do
  rsvg-convert -w 1200 "$qr" -o "$tmp/$name-qr.png"
  for img in "$tmp/$name-qr.png" "$tmp/$name-300dpi.png" "$tmp/$name-bleed-300dpi.png"; do
    got=$(decode "$img")
    echo "QR $(basename "$img"): $got"
    [ "$got" = "$url" ] || { echo "QR mismatch: expected $url" >&2; exit 1; }
  done
done < "$tmp/posters.tsv"

# hackvlc.es serves its "not found" page with HTTP 200, whose <title> is the
# bare site name, so a real page is told apart by its own title.
while IFS=$'\t' read -r name qr url; do
  if ! body=$(curl -sfL --max-time 10 "$url" 2>/dev/null); then
    echo "URL $url: AVISO, no responde. El cartel es correcto, pero el QR aún no lleva a ninguna página."
    continue
  fi
  title=$(printf '%s' "$body" | tr '\n' ' ' | sed -n 's/.*<title>\([^<]*\)<\/title>.*/\1/p')
  if [ -z "$title" ] || [ "$title" = 'Hackerspace Valencia' ]; then
    echo "URL $url: AVISO, responde pero es la página de 'no encontrado'. Publica la página del taller antes de colgar el cartel."
  else
    echo "URL $url: OK ($title)"
  fi
done < "$tmp/posters.tsv"
echo OK
