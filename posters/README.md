# Carteles impresos

## `poster-a3` - cartel de puerta

Cartel A3 vertical a color para la puerta del local: presenta el hackerspace (qué hacemos,
horario de puertas abiertas, web y dirección). Como extra, un QR pequeño abajo a la derecha
apunta a `https://sign.hackvlc.es`, donde vive el contenido interactivo del cartel.

| Fichero | Qué es |
| --- | --- |
| `poster-a3.html` + `poster-a3.css` | Fuente editable (medidas en mm, textos, colores) |
| `qr-sign.svg` | QR vectorial generado por `build.mjs` |
| `poster-a3.pdf` | **A3 exacto, 297 x 420 mm, sin sangrado.** Para imprimir en casa o en la oficina |
| `poster-a3-bleed.pdf` | 303 x 426 mm: A3 + **3 mm de sangrado** por lado, con TrimBox en 297 x 420. Para imprenta |
| `build.mjs` | Genera el QR y los dos PDF |
| `verify.sh` | Comprueba cajas de página, que no haya imágenes rasterizadas, el QR de los dos PDF y si la URL del QR responde |
| `package-lock.json` | Versiones exactas de las dependencias del build |

La identidad visual sale del sitio: logo `static/images/logo.svg` (se enlaza, no se copia),
paleta de `themes/hackvlc/assets/css/maker-theme.css` y las mismas tipografías
(Space Grotesk, Inter, Fira Mono, servidas en local desde `@fontsource`). Los textos salen de
`i18n/es.yaml`, `data/es/` y `config.toml`.

### Regenerar

```bash
cd posters
npm ci
npx playwright install chromium   # solo la primera vez
npm run build
./verify.sh                       # necesita zbar y librsvg: brew install zbar librsvg
```

Todo se genera en local: el QR con la librería `qrcode` (nivel de corrección H, zona de
silencio de 4 módulos incluida en el SVG) y el PDF con Chromium headless vía Playwright.
Chromium redondea página y maquetación a píxeles CSS enteros y dejaba un filete sin pintar
en el borde inferior/derecho. Por eso el HTML pide una página 2 mm mayor, pintada con el
color de fondo, y `build.mjs` recorta MediaBox, CropBox, TrimBox y BleedBox con `pdf-lib` a la
medida exacta desde la esquina superior izquierda.

Para cambiar la URL del QR, edita `QR_URL` en `build.mjs` y `EXPECTED` en `verify.sh`.
Para previsualizar mientras editas, abre `poster-a3.html` en el navegador (tras `npm install`).

### Medidas y QR

- Formato: A3 vertical, 297 x 420 mm. Margen de seguridad de 18 mm para todo el texto.
- PDF 100 % vectorial: texto con fuentes incrustadas y ninguna imagen rasterizada
  (`verify.sh` lo comprueba). La trama de puntos del fondo son círculos opacos generados en el
  HTML, con el color ya mezclado con el fondo: sin transparencias ni degradados, que Chromium
  rasterizaba (antes el fondo salía como imagen a ~74 ppp).
- QR: versión 3 (29 x 29 módulos), corrección H (aguanta ~30 % de daño).
  64 x 64 mm con la zona de silencio; el código en sí mide ~50 x 50 mm (módulo de ~1,7 mm),
  cómodo de escanear a 0,5-1 m. Negro sobre blanco, dentro de una tarjeta blanca.

### Imprimir

- **Impresora propia**: `poster-a3.pdf`, papel A3, escala **100 %** ("tamaño real", no "ajustar").
  Casi ninguna impresora de oficina imprime a sangre, así que quedará un filete blanco fino
  en los bordes; el diseño lo aguanta.
- **Imprenta**: `poster-a3-bleed.pdf`, pedir A3 a color con 3 mm de sangrado y corte.
  Papel mate de 170 g o más reduce reflejos sobre el QR detrás de un cristal.
- Después de imprimir, escanea el QR con un par de móviles desde 1 metro antes de colgarlo.
