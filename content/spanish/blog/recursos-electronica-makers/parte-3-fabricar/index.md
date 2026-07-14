---
title: "Recursos para fabricar, comunidad y recorrido (3/3)"
description: "Fabricantes de PCBs, repositorios Open Source, comunidades técnicas y un recorrido paso a paso para aprender electrónica desde cero hasta fabricar tus propias placas."
date: 2026-07-14T10:10:00+02:00
cover: comunidad.jpg
draft: false
tags: ["electrónica", "pcb", "fabricación", "comunidad", "open source", "recursos"]
author: "Hackerspace Valencia"
---
Una vez terminado el diseño llega el momento de convertir los archivos del proyecto en un circuito real. Gracias a la evolución de la fabricación electrónica, hoy es posible producir PCBs profesionales en pocos días y por un coste muy reducido, algo impensable hace apenas unos años.

Además de fabricar las placas, muchos proveedores ofrecen **ensamblaje SMT** (montaje automático de componentes en superficie), compra de componentes, fabricación de plantillas (*stencils*) e incluso mecanizado e impresión 3D. Esto permite desarrollar un producto completo utilizando prácticamente un único proveedor.

Esta es la **parte 3 de 3** de nuestra [guía de recursos para electrónica](/blog/recursos-electronica-makers/). Si te perdiste las anteriores, empieza por la [parte 1: aprender electrónica](/blog/recursos-electronica-makers/parte-1-aprender/) o la [parte 2: diseñar hardware](/blog/recursos-electronica-makers/parte-2-disenar/).

{{< figure src="comunidad.jpg" alt="Taller de electrónica DIY" caption="Compartir proyectos y dudas con otros makers es una de las formas más eficaces de aprender." >}}

## Fabricantes de PCBs

Elegir un fabricante depende principalmente del presupuesto, el plazo de entrega, la complejidad del diseño y el volumen de producción. No existe una opción perfecta para todos los proyectos, pero sí plataformas especialmente interesantes según las necesidades de cada caso.

### JLCPCB

En pocos años [JLCPCB](https://jlcpcb.com) se ha convertido en el fabricante de PCBs más utilizado por la comunidad maker y por miles de pequeñas empresas de ingeniería. Su combinación de precios muy competitivos, tiempos de fabricación reducidos y un enorme catálogo de componentes para ensamblaje SMT lo convierten en una de las mejores opciones para desarrollar prototipos.

**Especialmente útil para:** primeros prototipos, producción de pequeñas series, ensamblaje SMT, fabricación económica, productos comerciales.

### PCBWay

[PCBWay](https://www.pcbway.com) es otra de las grandes referencias internacionales. Además de producir PCBs, ofrece mecanizado CNC, impresión 3D, inyección de plástico, fabricación metálica y ensamblaje electrónico, convirtiéndose en una plataforma muy interesante cuando un proyecto combina electrónica y mecánica. Su apoyo a proyectos Open Source también la ha convertido en una empresa muy conocida dentro de la comunidad maker.

**Especialmente útil para:** PCB multicapa, PCB flexibles, mecanizado CNC, impresión 3D, desarrollo integral de prototipos.

### Seeed Studio Fusion

[Seeed Studio Fusion](https://www.seeedstudio.com/fusion.html) permite fabricar PCBs, ensamblarlas y producir pequeñas series, integrándose con plataformas como Grove o XIAO. Resulta especialmente interesante para proyectos educativos, IoT y hardware abierto.

**Especialmente útil para:** hardware abierto, educación, IoT, prototipos, producción de pequeñas series.

### Eurocircuits

Cuando el proyecto requiere fabricar dentro de Europa, [Eurocircuits](https://www.eurocircuits.com) continúa siendo una de las referencias del sector. Aunque su precio suele ser superior al de algunos fabricantes asiáticos, ofrece soporte técnico cercano, excelentes tiempos de entrega y herramientas de validación del diseño.

**Especialmente útil para:** desarrollo industrial, empresas de ingeniería, prototipos europeos, validación avanzada.

### Aisler

[Aisler](https://aisler.net) ha ganado una gran popularidad entre universidades, startups y desarrolladores europeos gracias a la sencillez de su plataforma. Además de fabricar PCBs, ofrece ensamblaje electrónico para pequeñas series y un proceso de pedido muy intuitivo.

**Especialmente útil para:** prototipos rápidos, makers europeos, universidades, producción de bajo volumen.

### OSH Park

Dentro del movimiento Open Hardware pocas empresas son tan conocidas como [OSH Park](https://oshpark.com). Sus características placas de color púrpura se han convertido en un símbolo dentro de la comunidad maker y continúan siendo una excelente opción para fabricar pequeñas cantidades con una calidad muy elevada.

**Especialmente útil para:** hardware abierto, proyectos personales, prototipos, pequeñas series.

### Otras alternativas

- [ALLPCB](https://www.allpcb.com) — fabricación rápida, ensamblaje SMT y producción electrónica.
- [NextPCB](https://www.nextpcb.com) — combina fabricación, ensamblaje, compra de componentes y pruebas funcionales.
- [PCBGoGo](https://www.pcbgogo.com) — útil para comparar presupuestos y configuraciones.

### ¿Qué fabricante debería elegir?

No existe un fabricante perfecto para todos los proyectos.

Si buscas fabricar unos pocos prototipos al menor coste posible, **JLCPCB** y **PCBWay** suelen ser las opciones preferidas por la mayoría de makers. Si trabajas con hardware abierto o plataformas como Grove y XIAO, **Seeed Fusion** ofrece una integración muy interesante. Cuando la fabricación dentro de Europa, el soporte técnico o la trazabilidad son prioritarios, **Eurocircuits** y **Aisler** representan excelentes alternativas. Por su parte, **OSH Park** continúa siendo una referencia para pequeños proyectos Open Hardware.

{{< figure src="fabricacion-pcb.jpg" alt="Placa de circuito impreso con componentes SMT" caption="Hoy es posible producir PCBs profesionales en pocos días y por un coste muy reducido." >}}

## Repositorios Open Source: aprende de proyectos reales

La mejor forma de mejorar como diseñador electrónico no consiste únicamente en construir tus propios circuitos. Analizar cómo otros ingenieros han resuelto problemas similares permite descubrir nuevas técnicas de diseño, comparar distintas soluciones y aprender buenas prácticas.

Gracias al movimiento Open Source, hoy es posible acceder gratuitamente a miles de proyectos completos que incluyen esquemáticos, diseños de PCB, firmware, listas de materiales, modelos 3D e incluso documentación de fabricación.

### GitHub

[GitHub](https://github.com) se ha convertido en la mayor biblioteca de proyectos electrónicos del mundo. Además del firmware, miles de desarrolladores publican esquemáticos, archivos de KiCad, listas de materiales y documentación completa de sus productos.

**Especialmente útil para:** hardware Open Source, firmware, diseños de referencia, KiCad, librerías, proyectos completos.

### GitLab

Aunque menos popular que GitHub, [GitLab](https://gitlab.com) también alberga numerosos proyectos relacionados con hardware abierto y sistemas embebidos. Muchas empresas lo utilizan como plataforma de desarrollo colaborativo y control de versiones.

**Especialmente útil para:** desarrollo colaborativo, hardware abierto, control de versiones, gestión de proyectos.

### Kitspace

[Kitspace](https://kitspace.org) facilita la distribución de proyectos Open Hardware completos. Muchos desarrolladores publican allí sus diseños junto con la lista de materiales, enlaces a distribuidores y archivos de fabricación, permitiendo reproducir fácilmente sus proyectos.

**Especialmente útil para:** hardware abierto, BOM, KiCad, fabricación.

### Awesome Electronics

Dentro de GitHub existen numerosas recopilaciones conocidas como *Awesome Lists*. Entre ellas, [Awesome Electronics](https://github.com/kitspace/awesome-electronics) reúne cientos de herramientas, programas CAD, simuladores, fabricantes, tutoriales y proyectos Open Source relacionados con la electrónica.

**Especialmente útil para:** herramientas, simulación, hardware abierto, formación, recursos técnicos.

### Crowd Supply

[Crowd Supply](https://www.crowdsupply.com) es mucho más que una plataforma para lanzar productos electrónicos. Muchos de los proyectos publicados incluyen una documentación técnica excelente y, en numerosos casos, tanto el hardware como el firmware son completamente abiertos.

{{< figure src="github-os.jpg" alt="Pistas de circuito impreso" caption="El movimiento Open Source pone miles de proyectos electrónicos completos al alcance de cualquiera." >}}

## Aprende junto a la comunidad

Por muy completa que sea la documentación o por mucha experiencia que acumules, siempre llegará un momento en el que aparecerá un problema que no habías previsto. Un convertidor que genera demasiado ruido, una interfaz de comunicación que no funciona como esperabas o una PCB que necesita una segunda revisión antes de enviarla a fabricar.

En esas situaciones, las comunidades técnicas se convierten en uno de los recursos más valiosos.

### Comunidades y foros técnicos

Durante décadas, miles de ingenieros, estudiantes y aficionados han compartido conocimientos en foros especializados. Antes de publicar una pregunta, merece la pena utilizar el buscador del propio foro: es muy probable que otro usuario se haya encontrado con el mismo problema.

**EEVblog Forum.** Si hubiera que recomendar un único foro para electrónica profesional, sería el [EEVblog Forum](https://www.eevblog.com/forum). Reúne a miles de ingenieros especializados en diseño analógico, electrónica de potencia, instrumentación, EMC, RF y fabricación de PCBs.

**Electronics Stack Exchange.** [Electronics Stack Exchange](https://electronics.stackexchange.com) forma parte de la red Stack Exchange y está orientado a preguntas técnicas. Las respuestas son valoradas por la comunidad, lo que facilita localizar rápidamente las soluciones mejor documentadas.

**All About Circuits.** Además de su biblioteca de artículos y cursos, [All About Circuits](https://forum.allaboutcircuits.com) mantiene una comunidad muy activa, especialmente recomendable para quienes están comenzando.

**KiCad Forum.** El foro oficial de [KiCad](https://forum.kicad.info) es el lugar ideal para resolver dudas relacionadas con footprints, reglas de diseño, generación de Gerbers, modelos 3D o librerías.

**Arduino Forum.** El foro oficial de [Arduino](https://forum.arduino.cc) continúa siendo una referencia para resolver dudas de hardware y programación.

**Espressif Developer Community.** La [comunidad de Espressif](https://developer.espressif.com) es excelente para resolver dudas sobre ESP32, ESP-IDF, Wi-Fi, Bluetooth y Matter.

**Raspberry Pi Forums.** Los foros oficiales de [Raspberry Pi](https://forums.raspberrypi.com) reúnen una enorme comunidad dedicada tanto a Raspberry Pi como a Raspberry Pi Pico.

### Comunidades en Reddit

- [r/AskElectronics](https://www.reddit.com/r/AskElectronics) — consultas sobre diseño, componentes, reparación e instrumentación.
- [r/PrintedCircuitBoard](https://www.reddit.com/r/PrintedCircuitBoard) — diseño y revisión de PCBs antes de fabricar.

### Compartir proyectos también es una forma de aprender

No tengas miedo de pedir una revisión de un esquemático, compartir el diseño de una PCB antes de fabricarla o preguntar por qué un circuito no funciona. La mayoría de ingenieros han aprendido exactamente igual y muchas comunidades mantienen una actitud muy abierta hacia quienes muestran interés por mejorar.

## Conclusión

Aprender electrónica nunca había sido tan accesible. Internet pone al alcance de cualquier persona cursos gratuitos, documentación oficial, herramientas profesionales, repositorios Open Source, comunidades técnicas y fabricantes capaces de producir una PCB en cuestión de días.

No es necesario dominar todas estas herramientas desde el principio. Lo importante es incorporarlas poco a poco, utilizarlas cuando realmente las necesites y construir nuevos proyectos de forma constante. Cada circuito terminado, cada error corregido y cada PCB fabricada contribuirán a ampliar tu experiencia.

Y si quieres ponerlo en práctica, te esperamos en el [Hackerspace Valencia](/). Si no sabes qué es un hackerspace, lee nuestra [guía para entenderlo](/blog/que-es-un-hackerspace/).

---

← [Parte 2: Diseñar hardware](/blog/recursos-electronica-makers/parte-2-disenar/) · [Parte 1: Aprender electrónica](/blog/recursos-electronica-makers/parte-1-aprender/)

## Preguntas frecuentes

### ¿Cuál es el mejor recurso para empezar a aprender electrónica?

[Adafruit Learning System](https://learn.adafruit.com) y [SparkFun Learn](https://learn.sparkfun.com) ofrecen algunos de los tutoriales más completos. Combinados con pequeños proyectos de Arduino constituyen un excelente punto de partida.

### ¿Qué programa debería utilizar para diseñar mis primeras PCBs?

[KiCad](https://www.kicad.org) es la mejor opción para comenzar: gratuito, multiplataforma y con todas las funciones necesarias para proyectos profesionales.

### ¿Dónde puedo buscar componentes electrónicos?

[DigiKey](https://www.digikey.es) y [Mouser](https://www.mouser.es) son los buscadores más completos. Para comparar precios entre distribuidores, [Octopart](https://octopart.com).

### ¿Qué fabricante de PCBs es recomendable para principiantes?

[JLCPCB](https://jlcpcb.com) y [PCBWay](https://www.pcbway.com): precios competitivos, tiempos reducidos y plataforma sencilla.

### ¿Cómo puedo encontrar símbolos y footprints para KiCad?

[SnapMagic](https://www.snapmagic.com), [Ultra Librarian](https://www.ultralibrarian.com) y [Component Search Engine](https://componentsearchengine.com).

### ¿Es suficiente con leer la hoja de datos de un componente?

No. Las hojas de datos son solo una parte. Conviene consultar también las notas de aplicación y los diseños de referencia del fabricante.

### ¿Cuál es la mejor forma de seguir mejorando?

Construir proyectos propios. Ningún tutorial sustituye la experiencia de diseñar un circuito, fabricar una PCB, localizar errores y mejorar el diseño en la siguiente versión.

## Créditos de imágenes

Todas las imágenes proceden de [Wikimedia Commons](https://commons.wikimedia.org) y se utilizan bajo sus respectivas licencias:

- **Portada y taller DIY** — *DIY Electronics for Music – Workshop with Brian Bamanya aka Afrorack* — CC BY-SA 2.0 — [fuente](https://commons.wikimedia.org/wiki/File:DIY_Electronics_for_Music_%E2%80%93_Workshop_with_Brian_Bamanya_aka_Afrorack.jpg)
- **Placa de circuito impreso** — *Caviar 2340 Hard Drive Circuit Board Side 1* — CC0 — [fuente](https://commons.wikimedia.org/wiki/File:Caviar_2340_Hard_Drive_Circuit_Board_Side_1.jpg)
- **Pistas de circuito impreso** — *Labyrinthine circuit board lines* — CC BY 2.0 — [fuente](https://commons.wikimedia.org/wiki/File:Labyrinthine_circuit_board_lines_-_Flickr_-_quapan.jpg)
