# Carteles impresos

## `poster-a3` - cartel de puerta

Cartel A3 vertical a color para la puerta del local. El QR apunta a
`https://sign.hackvlc.es`, donde vive el contenido interactivo del cartel.

| Fichero | Qué es |
| --- | --- |
| `poster-a3.html` + `poster-a3.css` | Fuente editable (medidas en mm, textos, colores) |
| `qr-sign.svg` | QR vectorial generado por `build.mjs` |
| `poster-a3.pdf` | **A3 exacto, 297 x 420 mm, sin sangrado.** Para imprimir en casa o en la oficina |
| `poster-a3-bleed.pdf` | 303 x 426 mm: A3 + **3 mm de sangrado** por lado, con TrimBox en 297 x 420. Para imprenta |
| `build.mjs` | Genera el QR y los dos PDF |
| `verify.sh` | Comprueba tamaños de página y decodifica el QR |

La identidad visual sale del sitio: logo `static/images/logo.svg` (se enlaza, no se copia),
paleta de `themes/hackvlc/assets/css/maker-theme.css` y las mismas tipografías
(Space Grotesk, Inter, Fira Mono, servidas en local desde `@fontsource`). Los textos salen de
`i18n/es.yaml`, `data/es/` y `config.toml`.

### Regenerar

```bash
cd posters
npm install
npx playwright install chromium   # solo la primera vez
npm run build
./verify.sh                       # necesita zbar y librsvg: brew install zbar librsvg
```

Todo se genera en local: el QR con la librería `qrcode` (nivel de corrección H, zona de
silencio de 4 módulos incluida en el SVG) y el PDF con Chromium headless vía Playwright.
Chromium redondea el tamaño de página, así que `build.mjs` ajusta MediaBox, TrimBox y
BleedBox con `pdf-lib` a la medida exacta.

Para cambiar la URL del QR, edita `QR_URL` en `build.mjs` y `EXPECTED` en `verify.sh`.
Para previsualizar mientras editas, abre `poster-a3.html` en el navegador (tras `npm install`).

### Medidas y QR

- Formato: A3 vertical, 297 x 420 mm. Margen de seguridad de 18 mm para todo el texto.
- PDF vectorial (texto con fuentes incrustadas, sin imágenes rasterizadas).
- QR: versión 3 (29 x 29 módulos), corrección H (aguanta ~30 % de daño).
  118 x 118 mm con la zona de silencio; el código en sí mide ~92 x 92 mm (módulo de ~3,2 mm).
  Negro sobre blanco, dentro de una tarjeta blanca.

### Imprimir

- **Impresora propia**: `poster-a3.pdf`, papel A3, escala **100 %** ("tamaño real", no "ajustar").
  Casi ninguna impresora de oficina imprime a sangre, así que quedará un filete blanco fino
  en los bordes; el diseño lo aguanta.
- **Imprenta**: `poster-a3-bleed.pdf`, pedir A3 a color con 3 mm de sangrado y corte.
  Papel mate de 170 g o más reduce reflejos sobre el QR detrás de un cristal.
- Después de imprimir, escanea el QR con un par de móviles desde 1 metro antes de colgarlo.
