---
translationKey: "blog-kicad-10-novedades"
title: "KiCad 10: novedades y mejoras para el diseño de PCB"
description: "Qué trae de verdad KiCad 10: variantes de diseño, editor gráfico de reglas, ajuste por tiempo, jumpers e importadores de Allegro y PADS, explicado para makers."
date: 2026-10-23T08:00:00+02:00
publishDate: 2026-10-23T08:00:00+02:00
draft: false
tags: ["kicad", "pcb", "open-source", "electrónica"]
author: "Hackerspace Valencia"
cover: cover.jpg
based_on: '<a href="https://kensocircuits.com/archivos/kicad-10-novedades-y-evolucion/">«KiCad 10 novedades y evolución»</a>, de <a href="https://kensocircuits.com/">Kenso Circuits</a>'
---
[KiCad](https://www.kicad.org/) es una suite libre (licencia GPL) para diseñar electrónica: esquemático, editor de PCB, visor 3D y generación de los [archivos de fabricación](/blog/checklist-fabricacion-pcb/), todo en un mismo paquete y para Linux, Windows y macOS. Nació en 1992 como proyecto personal de Jean-Pierre Charras y dio el gran salto a partir de 2013, cuando el CERN empezó a dedicarle desarrolladores para ponerlo a la altura de las herramientas comerciales. Hoy forma parte de la Linux Foundation y lleva años usándose de forma profesional, tanto en empresas como en centros de investigación ([historia completa en Wikipedia](https://es.wikipedia.org/wiki/KiCad)).

Para el hardware libre su papel es clave, y no solo por no tener coste de licencia. Un diseño solo es abierto de verdad si cualquiera puede abrir sus archivos fuente, modificarlos y volver a fabricarlo. Si se publica en una herramienta propietaria, el resto tiene que pagar una licencia o conformarse con un PDF y unos Gerber. Los proyectos de KiCad, en cambio, son archivos de texto en formato abierto que se versionan en Git y abre cualquiera. Por eso se ha convertido en el formato habitual para compartir placas abiertas, y por eso es la herramienta que usamos en nuestros [talleres de KiCad](/workshops/kicad/).

La [versión 10 se publicó en marzo de 2026](https://www.kicad.org/blog/2026/03/Version-10.0.0-Released/). No cambia la forma de diseñar, pero añade funciones que se llevaban años pidiendo y pule mucho el trabajo diario. Aquí repasamos lo que trae de nuevo respecto a KiCad 9 y qué aporta cuando diseñas placas en un makerspace.

## Resumen de novedades

| Área | Qué hay nuevo en KiCad 10 |
|---|---|
| Interfaz | Modo oscuro en Windows, barras de herramientas personalizables, selección a lazo, deshacer dentro de los diálogos |
| Esquemático | Variantes de diseño, cruces con salto (hop-over), jumpers, grupos, tabla de pines en CSV |
| PCB | Editor gráfico de reglas, ajuste de pistas por tiempo, Design Blocks de PCB, objetos en capas internas de los footprints, intercambio de pines y puertas |
| Importación | Diseños de Allegro, PADS y gEDA / Lepton |
| Librerías | Modelos 3D solo en STEP, cientos de símbolos, footprints y modelos nuevos |

## Una interfaz más cómoda para el día a día

En KiCad las pistas las trazas tú: decidir por dónde pasa cada señal, dónde poner una vía o cómo repartir la masa sigue siendo trabajo de diseño. Lo que mejora versión a versión es todo lo que rodea a ese trabajo, para que dediques el tiempo a decidir y no a pelearte con la herramienta. En KiCad 10 llegan varias mejoras de este tipo:

- **Barras de herramientas personalizables:** puedes reordenar y elegir los botones de cada editor según tu forma de trabajar.
- **Selección a lazo:** seleccionar a mano alzada en lugar de con un rectángulo, en el esquemático y en la PCB. Muy útil para coger un grupo de componentes rodeado de otros.
- **Deshacer dentro de los diálogos:** puedes probar cambios en una ventana de propiedades y deshacerlos antes de cerrarla.
- **Modo oscuro en Windows**, que sigue automáticamente el tema del sistema.

A esto se suma lo que ya tenía: el [enrutador interactivo](https://docs.kicad.org/10.0/es/pcbnew/pcbnew.html#routing-tracks) que aparta las pistas vecinas mientras trazas la tuya, respetando las reglas de diseño, y los atajos de teclado (`X` para empezar una pista, `V` para meter una vía y cambiar de capa sin soltarla). Y el [gestor de complementos y contenidos](https://docs.kicad.org/10.0/es/kicad/kicad.html#plugin-content-manager), que instala desde el propio KiCad extensiones de la comunidad. Algunas muy populares entre makers:

- [Interactive HTML BOM](https://github.com/openscopeproject/InteractiveHtmlBom): genera una página web con la lista de materiales que resalta cada componente sobre la placa. Ideal para [soldar a mano](/blog/soldar-smd/) sin perderte.
- [KiKit](https://github.com/yaqwsx/KiKit): panelización y automatización de las salidas de fabricación.
- [Fabrication Toolkit](https://github.com/bennymeg/Fabrication-Toolkit): exporta de un clic Gerber, BOM y archivo de posiciones en el formato que piden fabricantes como JLCPCB.

## Esquemático: variantes, jumpers y cruces legibles

### Variantes de diseño

Es la novedad más esperada. Una [variante](https://docs.kicad.org/10.0/es/eeschema/eeschema.html#schematic-design-variants) permite tener varias versiones de un mismo proyecto que comparten esquemático y placa, pero cambian propiedades de los componentes: cuáles se montan, qué valor llevan o qué referencia de fabricante se compra. Cada variante genera su propia lista de materiales (BOM).

En un proyecto maker es más común de lo que parece: la misma placa con o sin módulo de radio, con [regulador LDO o DC/DC](/blog/ldo-vs-dc-dc/) según la alimentación, o una versión "completa" para el taller y otra mínima para un kit. Hasta ahora había que duplicar el proyecto o editar la BOM a mano, con el riesgo de que las dos copias acabaran divergiendo.

### Jumpers

Ahora puedes definir **jumpers**: grupos de pines de un símbolo y pads de un footprint que se consideran conectados internamente. Siempre comparten red y no muestran línea de ratsnest en la PCB. Sirven para piezas como regletas con contactos puenteados o componentes con conexiones eléctricas que no pasan por la placa.

{{< figure src="jumpers-kicad10.png" alt="Captura de KiCad 10 con un esquema de dos componentes TB1 y U1 con jumpers internos y su vista en el editor de PCB con los pads conectados" caption="Jumpers en el esquemático y en la PCB: los pads puenteados comparten red sin necesidad de pista. Imagen: KiCad Development Team, CC BY 3.0." >}}

### Cruces con salto y otras mejoras

Los cables que se cruzan sin conectarse pueden dibujarse con un **salto en arco (hop-over)**, como en los esquemas clásicos, para que no haya dudas de qué está unido y qué no. Además, al arrastrar elementos los puntos de unión se actualizan en directo y KiCad avisa si el movimiento va a cortocircuitar un cable con otro.

{{< figure src="cruces-hopover-kicad10.png" alt="Fragmento de esquema en KiCad 10 con resistencias, un transistor y condensadores donde los cables que se cruzan sin conectarse dibujan un pequeño arco" caption="Cruces con salto: los cables que no se conectan se distinguen de un vistazo. Imagen: KiCad Development Team, CC BY 3.0." >}}

Completan el apartado los **grupos** (que ya existían en la PCB), la importación y exportación en CSV de la **tabla de pines** del editor de símbolos (muy práctico para microcontroladores con decenas de pines), los símbolos de alimentación locales, la posibilidad de arrastrar imágenes al esquema y mejoras en las gráficas del simulador.

## PCB: reglas visuales y ajuste por tiempo

### Editor gráfico de reglas de diseño

KiCad tenía desde hace años un lenguaje de reglas personalizadas muy potente, pero escribirlas a mano echaba para atrás. KiCad 10 añade un [editor gráfico de reglas](https://docs.kicad.org/10.0/es/pcbnew/pcbnew.html#graphical-design-rule-editor): eliges el tipo de restricción, ves un dibujo de lo que significa y defines las condiciones con desplegables. Las reglas creadas así son compatibles con el lenguaje de siempre, así que puedes empezar con el editor y pasar al texto cuando lo necesites.

Para quien empieza es una buena forma de aplicar lo que explicamos en la [checklist antes de mandar a fabricar](/blog/checklist-fabricacion-pcb/): ajustar las reglas a las capacidades del fabricante y dejar que el DRC te avise.

{{< figure src="editor-reglas-kicad10.jpg" alt="Ventana Design Rule Editor de KiCad 10 con una regla de separación mínima de 0,1 mm, un dibujo de dos formas de cobre acotadas y condiciones por áreas de la placa" caption="El editor gráfico de reglas: la restricción se dibuja y las condiciones se eligen con desplegables. Imagen: KiCad Development Team, CC BY 3.0." >}}

KiCad 10 también propone acciones para corregir algunos errores del DRC.

### Ajuste de pistas por tiempo

El sistema de ajuste de pistas (los meandros que alargan una pista) se ha rehecho por completo. Además de longitudes, ahora permite fijar [restricciones de retardo](https://docs.kicad.org/10.0/es/pcbnew/pcbnew.html#how_time_domain_tuning_works), en picosegundos, y definir perfiles de ajuste con parámetros por capa. En un proyecto típico de ESP32 no lo vas a necesitar, pero si te metes con memorias rápidas, USB de alta velocidad o buses paralelos, es justo lo que hace falta.

{{< figure src="ajuste-tiempo-kicad10.png" alt="Pista roja entre dos resistencias con un meandro y una etiqueta que muestra retardo actual de 94,01 ps frente a un mínimo de 119,9 y un máximo de 120,1" caption="Ajuste por tiempo: KiCad muestra el retardo actual de la pista frente al objetivo mientras la alargas. Imagen: KiCad Development Team, CC BY 3.0." >}}

### Design Blocks, capas internas e intercambio de pines

- **Design Blocks en la PCB:** los bloques reutilizables que KiCad 9 trajo al esquemático llegan al editor de PCB. Puedes guardar en una librería un trozo de placa ya resuelto (una fuente de alimentación, la zona de un módulo de radio) y reutilizarlo en otro proyecto con su colocación y su enrutado.
- **Objetos en capas internas de los footprints:** gráficos, zonas prohibidas (keepouts) y más, ya no solo en las capas exteriores.
- **Intercambio de pines y puertas:** permutar pads o unidades de un componente en la PCB y llevar el cambio de vuelta al esquemático. Muy útil para desenredar un bus en una placa de dos capas.
- **Más detalles:** códigos de barras, rellenos rayados en formas gráficas, edición precisa de puntos de polígonos, rectángulos redondeados nativos y exportación a PDF 3D.

## Importar diseños de otros programas

KiCad 10 [importa proyectos de Allegro, PADS y gEDA / Lepton](https://www.kicad.org/blog/2026/03/Version-10.0.0-Released/), que se suman a los importadores que ya tenía. Para un maker es útil cuando quieres modificar una placa abierta publicada en una herramienta comercial, o al hacer [ingeniería inversa](/blog/ingenieria-inversa-pcb/) partiendo de unos archivos antiguos.

## Librerías más ligeras y más completas

Las librerías oficiales ahora incluyen los modelos 3D **solo en formato STEP**, más ligeros de instalar y más precisos al exportar la placa a un programa de CAD mecánico. Así puedes comprobar que la placa encaja en la carcasa antes de [imprimirla en 3D](/blog/empezar-impresion-3d/). Desde KiCad 9 se han añadido 952 símbolos, 1.216 footprints y 386 modelos 3D, y más del 78 % de los footprints se generan ya a partir de datos en lugar de dibujarse a mano, lo que reduce errores.

{{< figure src="visor-3d-kicad.jpg" alt="Visor 3D de KiCad mostrando una placa morada de expansión con dos integrados, conectores y serigrafía blanca" caption="El visor 3D muestra la placa con sus componentes antes de fabricarla. Captura: VectorVoyager, CC BY-SA 4.0." >}}

## ¿Merece la pena actualizar?

Para proyectos nuevos, sí: empieza directamente en KiCad 10 y aprovecha las variantes y el editor de reglas desde el principio. Para un proyecto a medias, ten en cuenta que al guardarlo en KiCad 10 los archivos pasan al formato nuevo y ya no se abren en KiCad 9. Haz antes un commit en Git o una copia, y si colaboras con más gente, poneos de acuerdo para actualizar a la vez.

## KiCad en el makerspace

El valor de KiCad en un hackerspace no es solo que sea gratuito: cualquiera puede abrir los archivos, entender la placa y mejorarla. Esa es la [cultura del hardware libre](/blog/por-que-la-cultura-open/) que defendemos. Si siempre has querido [diseñar tu primera placa](/blog/del-kit-a-la-pcb-propia/), KiCad 10 es un buen momento para empezar.

En el Hackerspace Valencia organizamos [talleres de KiCad](/workshops/kicad/) con periodicidad. Acércate a una sesión de puertas abiertas y trabajaremos sobre un ejemplo sencillo para que salgas con tu primera placa diseñada. Y si quieres venir a diseñar cuando te venga bien, [hazte socio/a](/pages/alta/).

## Recursos para aprender KiCad

- [Documentación oficial de KiCad](https://docs.kicad.org/): manuales de cada herramienta, en varios idiomas.
- [Guía oficial «Getting Started» en español](https://docs.kicad.org/10.0/es/getting_started_in_kicad/getting_started_in_kicad.html): un proyecto completo, del esquemático a los Gerber.
- [Anuncio de KiCad 10](https://www.kicad.org/blog/2026/03/Version-10.0.0-Released/): las novedades contadas por el propio equipo de desarrollo.
- [Foro oficial de KiCad](https://forum.kicad.info/): una comunidad muy activa para resolver dudas y compartir librerías.
- [Repositorio oficial en GitLab](https://gitlab.com/kicad/code/kicad): para seguir el desarrollo y reportar fallos.
- [Canal oficial de KiCad en YouTube](https://www.youtube.com/@kicadeda): demostraciones y charlas del equipo.
- [KiCad desde cero](https://www.youtube.com/playlist?list=PL-Hb9zZP9qC7-j4MKZNYg5i8rwu_ejkwW): curso completo en español en YouTube.

## Créditos de imágenes

- **Portada** - *Multi-Monitor KiCad* - AKK - CC BY 4.0 - [fuente](https://commons.wikimedia.org/wiki/File:Multi-Monitor_KiCad.jpg)
- **Jumpers, cruces con salto, editor de reglas y ajuste por tiempo** - capturas del anuncio de KiCad 10 - KiCad Development Team - CC BY 3.0 - [fuente](https://www.kicad.org/blog/2026/03/Version-10.0.0-Released/)
- **Visor 3D** - *KiCad 3D Viewer Render Screenshot RP2350 Expansion Card* - VectorVoyager - CC BY-SA 4.0 - [fuente](https://commons.wikimedia.org/wiki/File:KiCad_3D_Viewer_Render_Screenshot_RP2350_Expansion_Card.png)
