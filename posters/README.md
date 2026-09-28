# Carteles impresos

Todos los carteles son A3 vertical en tema claro, comparten `base.css` (paleta, tipografías,
hoja y caja de corte) y `sheet.js` (tamaño de página y sangrado), y se generan con el mismo
`build.mjs` a partir de la lista `posters.json` (nombre, título del PDF, fichero del QR y URL).

| Cartel | QR a |
| --- | --- |
| `poster-a3` - puerta del hackerspace | `https://sign.hackvlc.es` |
| `taller-ia-agentica-a3` - taller IA desde 0 a programar con IA agéntica | `https://hackvlc.es/workshops/taller-ia-agentica/` |
| `taller-merendojo-a3` - Merendojo: Code & Coffee | `https://hackvlc.es/workshops/merendojo/` |
| `taller-git-a3` - taller Fundamentos de Git | `https://hackvlc.es/workshops/git/` |

## `poster-a3` - cartel de puerta

Cartel A3 vertical a color, en tema claro, para la puerta del local: presenta el hackerspace
(qué hacemos, horario de puertas abiertas, web y dirección). Como extra, un QR pequeño abajo a la derecha
apunta a `https://sign.hackvlc.es`, donde vive el contenido interactivo del cartel.

| Fichero | Qué es |
| --- | --- |
| `poster-a3.html` + `poster-a3.css` | Fuente editable (medidas en mm, textos, colores) |
| `base.css` + `sheet.js` | Base común a todos los carteles (paleta, tipografías, página y sangrado) |
| `posters.json` | Lista de carteles con la URL de su QR; la leen `build.mjs` y `verify.sh` |
| `qr-sign.svg` | QR vectorial generado por `build.mjs` |
| `poster-a3.pdf` | **A3 exacto, 297 x 420 mm, sin sangrado.** Para imprimir en casa o en la oficina |
| `poster-a3-bleed.pdf` | 303 x 426 mm: A3 + **3 mm de sangrado** por lado, con TrimBox en 297 x 420. Para imprenta |
| `build.mjs` | Genera el QR y los dos PDF de cada cartel de `posters.json` |
| `verify.sh` | Comprueba en todos los carteles cajas de página, que no haya imágenes rasterizadas, el QR del SVG y de los dos PDF, y si la página del QR existe |
| `package-lock.json` | Versiones exactas de las dependencias del build |

La identidad visual sale del sitio: logo `static/images/logo.svg` (se enlaza, no se copia),
paleta de `themes/hackvlc/assets/css/maker-theme.css` (en `base.css`) y las mismas tipografías
(Space Grotesk, Inter, Fira Mono, servidas en local desde `@fontsource`). Los textos salen de
`i18n/es.yaml`, `data/es/` y `config.toml`.

### Regenerar

```bash
cd posters
npm ci
npx playwright install chromium   # solo la primera vez
npm run build                     # todos los carteles
npm run build -- taller-git-a3    # o solo los que se nombren
./verify.sh                       # necesita zbar y librsvg: brew install zbar librsvg
```

Todo se genera en local: el QR con la librería `qrcode` (nivel de corrección H, zona de
silencio de 4 módulos incluida en el SVG) y el PDF con Chromium headless vía Playwright.
Chromium redondea página y maquetación a píxeles CSS enteros y dejaba un filete sin pintar
en el borde inferior/derecho. Por eso el HTML pide una página 2 mm mayor, pintada con el
color de fondo, y `build.mjs` recorta MediaBox, CropBox, TrimBox y BleedBox con `pdf-lib` a la
medida exacta desde la esquina superior izquierda.

Para cambiar la URL de un QR, edita su `url` en `posters.json` y vuelve a generar.
Para previsualizar mientras editas, abre el `.html` del cartel en el navegador (tras `npm install`).

### Medidas y QR

- Formato: A3 vertical, 297 x 420 mm. Margen de seguridad de 18 mm para todo el texto.
- PDF 100 % vectorial: texto con fuentes incrustadas y ninguna imagen rasterizada
  (`verify.sh` lo comprueba). Sin transparencias ni degradados, que Chromium rasteriza.
- Tema claro para ahorrar tinta: el fondo es el papel, el texto va en casi negro y el color
  solo aparece en filetes finos, contornos, el logo y los titulares; ninguna superficie
  rellena de color. Cobertura media estimada ~13 % (C+M+Y+K sobre 400 %) frente a ~127 % de
  la versión oscura anterior, unas 10 veces menos tinta.
- QR: versión 3 (29 x 29 módulos), corrección H (aguanta ~30 % de daño).
  64 x 64 mm con la zona de silencio; el código en sí mide ~50 x 50 mm (módulo de ~1,7 mm),
  cómodo de escanear a 0,5-1 m. Negro sobre blanco, enmarcado por un contorno naranja fino.

### Imprimir

- **Impresora propia**: `poster-a3.pdf`, papel A3, escala **100 %** ("tamaño real", no "ajustar").
  Con fondo blanco, el margen sin imprimir de las impresoras de oficina no se nota.
- **Imprenta**: `poster-a3-bleed.pdf`, pedir A3 a color con 3 mm de sangrado y corte.
  Papel mate de 170 g o más reduce reflejos sobre el QR detrás de un cristal.
- Después de imprimir, escanea el QR con un par de móviles desde 1 metro antes de colgarlo.

## `taller-*-a3` - carteles de talleres

Un cartel A3 por taller para colgar en la puerta. **No llevan fecha**: el gancho es el QR, que
lleva a la página del taller en la web, donde están la fecha y la inscripción. Así el mismo
cartel sirve para todas las ediciones.

Cada cartel tiene **su propio diseño**, coherente con su tema, y por eso su propio CSS; solo
comparten `base.css` y `sheet.js`:

| Cartel | Concepto | Tipografía | Paleta (acentos) |
| --- | --- | --- | --- |
| `taller-ia-agentica-a3` | El camino de 0 a agente: ruta de nodos que acaba abriéndose en herramientas, un chip "LLM" cableado a sus herramientas, una sesión de agente en terminal y el QR en un visor de cámara. Referencia: la imagen del taller de DeepSeek | Space Grotesk + Fira Mono | Azul DeepSeek sobre azul marino |
| `taller-merendojo-a3` | Cartel de tienda de ramen: composición centrada, título y katakana en Dela Gothic One, cuenco de ramen a línea (vapor, palillos, naruto, huevo, nori), sello 道場, menú お品書き con líneas de puntos y el QR como ticket 食券 | Dela Gothic One + Zen Maru Gothic | Bermellón y yema |
| `taller-git-a3` | Sesión de terminal: todo en monoespaciada, el temario contado como `git log --graph` con una rama que sale y vuelve a `main`, y el QR dentro de una ventana de terminal | JetBrains Mono | Naranja Git, verde de rama y azul de remoto |

| Fichero | Qué es |
| --- | --- |
| `taller-*-a3.html` + `taller-*-a3.css` | Fuente de cada cartel. Textos sacados de `content/spanish/workshops/<slug>.md` |
| `qr-<slug>.svg` | QR vectorial de la página del taller (`<slug>` = slug de la web), generado por `build.mjs` |
| `taller-*-a3.pdf` | A3 exacto, 297 x 420 mm, sin sangrado |
| `taller-*-a3-bleed.pdf` | 303 x 426 mm, 3 mm de sangrado por lado, TrimBox en 297 x 420 |

- Las ilustraciones son SVG en línea: siguen siendo vectoriales y `verify.sh` comprueba que no
  haya imágenes rasterizadas. Nada de transparencias, degradados ni sombras (Chromium las
  rasteriza); para tapar trazos se rellena con el blanco del papel.
- QR con corrección H, de 102 a 112 mm con la zona de silencio (versiones 4 a 6, módulo de
  ~2,3-2,7 mm), sobrado para escanear a 1 m o más. Siempre negro sobre blanco.
- Mismas reglas de tinta que el cartel de puerta: fondo de papel, color solo en trazos, contornos,
  titulares y pequeños detalles.
- Se imprimen igual que el cartel de puerta (ver "Imprimir"): `taller-*-a3.pdf` en casa al 100 %,
  `taller-*-a3-bleed.pdf` en imprenta.

### Añadir un cartel de taller

1. Crea `taller-<slug>-a3.html` y su `.css` (importando `base.css`), con el QR en `qr-<slug>.svg`.
2. Añade una entrada a `posters.json` con `name`, `title`, `qr` y `url`.
3. `npm run build -- <name>`, `./verify.sh` y revisa el PDF a ojo antes de imprimir: que nada
   pase del margen de seguridad de 18 mm.

`verify.sh` avisa si la página del taller aún no existe: hackvlc.es responde HTTP 200 también
en su página de "no encontrado", así que distingue una página real por su `<title>`.
Publica la página del taller antes de colgar el cartel.
