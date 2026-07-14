---
title: "Recursos para diseñar hardware (2/3): PCBs, componentes y simulación"
description: "Software para diseñar PCBs, buscadores de componentes, librerías CAD, datasheets, documentación de fabricantes y herramientas de simulación para validar tu circuito antes de fabricar."
date: 2026-07-14T10:20:00+02:00
cover: diseno-pcb.jpg
draft: false
tags: ["electrónica", "pcb", "kiCad", "datasheet", "simulación", "recursos"]
author: "Hackerspace Valencia"
---
Llegado un cierto punto, los prototipos sobre protoboard empiezan a quedarse pequeños. Es entonces cuando aparece la necesidad de diseñar una PCB propia, seleccionar componentes, consultar hojas de datos y preparar el circuito para su fabricación.

Una **PCB** (Printed Circuit Board, o placa de circuito impreso) es la placa que sostiene y conecta eléctricamente los componentes de tu circuito mediante pistas de cobre. Un **datasheet** (hoja de datos) es el documento técnico donde el fabricante describe cómo usar un componente. Estos dos conceptos serán tus compañeros de viaje a partir de ahora.

Esta es la **parte 2 de 3** de nuestra [guía de recursos para electrónica](/blog/recursos-electronica-makers/). Si te perdiste la primera, échale un ojo a la [parte 1: aprender electrónica](/blog/recursos-electronica-makers/parte-1-aprender/). En la [parte 3](/blog/recursos-electronica-makers/parte-3-fabricar/) hablaremos de fabricación, comunidad y un recorrido recomendado.

{{< figure src="diseno-pcb.jpg" alt="Esquema de placa de circuito impreso" caption="Diseñar una PCB implica mucho más que dibujar pistas: hay que elegir componentes, consultar datasheets y validar el diseño." >}}

## Software para diseñar PCBs

El primer paso consiste en elegir una herramienta de diseño electrónico. Estos programas permiten crear el esquemático, diseñar la PCB, comprobar reglas de diseño, visualizar el circuito en 3D y generar los archivos necesarios para fabricar la placa.

### KiCad

Si tuviéramos que recomendar un único programa para empezar a diseñar PCBs, probablemente sería [KiCad](https://www.kicad.org).

En los últimos años ha evolucionado hasta convertirse en uno de los programas de diseño electrónico más completos del mercado. Permite desarrollar proyectos profesionales sin coste de licencia y cuenta con una comunidad muy activa que mantiene tutoriales, librerías y documentación constantemente actualizados. Además del esquemático y el diseño de la PCB, incorpora visor 3D, comprobación de reglas de diseño (DRC), gestión de bibliotecas y generación directa de archivos Gerber.

**Especialmente útil para:** diseño de PCBs, esquemáticos, visualización 3D, hardware Open Source, proyectos profesionales.

### EasyEDA

[EasyEDA](https://easyeda.com) ofrece una alternativa muy interesante para quienes prefieren trabajar directamente desde el navegador. Su mayor ventaja es la integración con servicios de fabricación como JLCPCB, lo que facilita enormemente el paso del diseño al prototipo. Aunque dispone de menos funcionalidades avanzadas que otras herramientas, resulta una excelente opción para proyectos personales y primeras PCBs.

**Especialmente útil para:** primeras PCBs, prototipos rápidos, trabajo online, integración con fabricación.

### Altium Designer

[Altium Designer](https://www.altium.com) continúa siendo uno de los estándares de la industria para el desarrollo de productos electrónicos complejos. Muchas empresas lo utilizan para proyectos con cientos o miles de componentes, donde la colaboración entre equipos, la gestión avanzada del *stack-up* o las reglas de diseño desempeñan un papel fundamental. Aunque su licencia tiene un coste elevado, merece la pena conocerlo porque muchas herramientas modernas han adoptado conceptos similares.

**Especialmente útil para:** electrónica profesional, diseño avanzado, proyectos industriales, PCBs multicapa.

## Buscar componentes

Elegir un componente adecuado va mucho más allá de comprobar que cumple unas especificaciones eléctricas. También conviene valorar su disponibilidad, el encapsulado, el precio, la facilidad para encontrar alternativas y la existencia de modelos CAD.

### DigiKey

Aunque la mayoría conoce [DigiKey](https://www.digikey.es) como uno de los mayores distribuidores de componentes electrónicos del mundo, su buscador paramétrico es una herramienta extraordinaria incluso cuando no pensamos comprar allí.

Permite comparar miles de referencias utilizando filtros muy detallados, consultar hojas de datos oficiales, localizar componentes equivalentes y acceder a modelos CAD preparados para distintos programas de diseño. Con frecuencia, DigiKey es el primer lugar donde comenzar la búsqueda de cualquier componente.

**Especialmente útil para:** comparar componentes, buscar alternativas, consultar datasheets, localizar modelos CAD, ver disponibilidad.

### Mouser Electronics

[Mouser](https://www.mouser.es) ofrece una experiencia muy similar a DigiKey y destaca por disponer de un catálogo enorme de fabricantes especializados. Además de comparar componentes mediante filtros técnicos, muchas referencias incluyen enlaces directos a notas de aplicación, placas de evaluación y documentación adicional.

**Especialmente útil para:** componentes industriales, comparación técnica, documentación adicional, alternativas compatibles.

### Octopart

Mientras DigiKey y Mouser muestran principalmente su propio catálogo, [Octopart](https://octopart.com) actúa como un agregador de distribuidores. Esto permite comparar rápidamente disponibilidad, precios y proveedores de una misma referencia, algo especialmente útil cuando un componente presenta largos plazos de entrega o problemas de suministro.

**Especialmente útil para:** comparar precios, buscar stock, encontrar alternativas, gestión de compras.

### OEMsecrets BoM Tool

[OEMsecrets BoM Tool](https://bomtool.oemsecrets.com/) es una herramienta orientada a la gestión de listas de materiales (*Bill of Materials*). Pega tu lista de referencias y el buscador consulta el stock y los precios de múltiples distribuidores a la vez, lo que permite comparar opciones y optimizar el coste de un proyecto antes de comprar. Resulta especialmente práctico cuando trabajas con listas de componentes largas y necesitas una visión rápida de disponibilidad y precio.

**Especialmente útil para:** comparar precios entre distribuidores, gestión de BOM, comprobar stock de múltiples referencias a la vez.

## Librerías CAD

Después de seleccionar los componentes llega una de las tareas más repetitivas del diseño electrónico: localizar símbolos eléctricos, *footprints* y modelos 3D compatibles con nuestro programa CAD.

Un **footprint** (o huella) es el dibujo físico de las pistas y pads de cobre donde se soldará un componente concreto en la PCB. Cada encapsulado necesita su propio footprint.

### SnapMagic (antes SnapEDA)

[SnapMagic](https://www.snapmagic.com) es probablemente la mayor biblioteca de símbolos eléctricos, footprints y modelos 3D disponible en Internet. Permite descargar componentes preparados para KiCad, Altium, OrCAD, Eagle y muchos otros programas. Es una de esas páginas que termina abierta permanentemente mientras se diseña una PCB.

**Especialmente útil para:** símbolos eléctricos, footprints, modelos STEP, KiCad, Altium.

### Ultra Librarian

Cuando un componente no aparece en SnapMagic, [Ultra Librarian](https://www.ultralibrarian.com) suele convertirse en la siguiente parada. Su enorme base de datos reúne millones de modelos electrónicos compatibles con la mayoría de programas CAD del mercado.

**Especialmente útil para:** componentes difíciles de encontrar, modelos 3D, footprints, librerías profesionales.

### Component Search Engine (SamacSys)

[SamacSys](https://componentsearchengine.com) ofrece librerías verificadas e incorpora plugins que permiten importar componentes directamente desde KiCad, Altium y otros programas de diseño. Esta integración agiliza enormemente el flujo de trabajo.

**Especialmente útil para:** importación automática, KiCad, Altium, librerías verificadas.

## Datasheets y documentación técnica

Muchos principiantes buscan primero un tutorial en Internet. Sin embargo, con la experiencia se descubre que la documentación oficial suele responder a la mayoría de las dudas.

Las hojas de datos no solo indican las características eléctricas de un componente; también incluyen recomendaciones de diseño, límites de funcionamiento, ejemplos de aplicación y, en muchos casos, circuitos completos. Acostumbrarte a consultar esta documentación desde el principio mejorará enormemente la calidad de tus diseños.

### AllDatasheet

Cuando conoces la referencia exacta de un componente, [AllDatasheet](https://www.alldatasheet.com) suele ser la forma más rápida de localizar su hoja de datos. Aunque siempre conviene descargar posteriormente la versión más reciente desde el fabricante, resulta muy práctico para búsquedas rápidas.

### Datasheet Archive

[Datasheet Archive](https://www.datasheetarchive.com) resulta especialmente útil cuando trabajamos con componentes antiguos o descatalogados que ya no aparecen fácilmente en las páginas oficiales.

### Antes de continuar...

Llegados a este punto, muchos diseñadores cometen un error muy habitual: pensar que la hoja de datos contiene toda la información necesaria para utilizar un componente.

En realidad, las datasheets son solo una pequeña parte de la documentación publicada por los fabricantes. La mayoría de ellos ofrecen además **notas de aplicación** (*application notes*), **diseños de referencia**, calculadoras, ejemplos de PCB y herramientas de simulación que resultan incluso más útiles durante el desarrollo de un proyecto.

{{< figure src="componentes.jpg" alt="Componentes electrónicos" caption="Los fabricantes publican documentación que va mucho más allá de la hoja de datos: notas de aplicación, diseños de referencia y herramientas de simulación." >}}

## Documentación oficial de fabricantes

Con el tiempo descubrirás que una gran parte del trabajo de un diseñador electrónico consiste en consultar la documentación publicada por los propios fabricantes. Además de las hojas de datos, muchas empresas ofrecen notas de aplicación, diseños de referencia, herramientas de simulación, calculadoras, ejemplos de PCB y placas de evaluación.

### Electrónica analógica y conversión de potencia

Cuando trabajamos con fuentes de alimentación, convertidores DC/DC, amplificadores operacionales, filtros o instrumentación analógica, estos fabricantes son una referencia obligatoria.

**Texas Instruments.** [TI](https://www.ti.com) posee probablemente una de las mayores bibliotecas técnicas del sector. Además de miles de hojas de datos, publica notas de aplicación muy detalladas, modelos SPICE, calculadoras de diseño y la plataforma TI Designs.

**Analog Devices.** [ADI](https://www.analog.com) destaca por la calidad de su documentación sobre adquisición de datos, instrumentación y electrónica analógica de precisión. Además de publicar excelentes notas de aplicación, desarrolla LTspice, uno de los simuladores SPICE más utilizados.

**onsemi.** [onsemi](https://www.onsemi.com) dispone de una amplia gama de componentes relacionados con electrónica de potencia, sensores y automoción. Sus notas de aplicación son especialmente recomendables para comprender el diseño de convertidores y fuentes de alimentación.

### Microcontroladores y sistemas embebidos

Si el proyecto incorpora un microcontrolador, estos fabricantes publican una enorme cantidad de documentación que va mucho más allá de las hojas de datos.

**Microchip.** [Microchip](https://www.microchip.com) mantiene una de las mayores colecciones de documentación relacionada con microcontroladores PIC, AVR y SAM. Sus Application Notes llevan décadas siendo una referencia.

**STMicroelectronics.** [ST](https://www.st.com) acompaña la familia STM32 con notas de aplicación, placas de desarrollo y documentación técnica que incluyen esquemas completos y recomendaciones para el layout de la PCB.

**Renesas.** [Renesas](https://www.renesas.com) es uno de los mayores fabricantes de microcontroladores del mundo, orientado a aplicaciones industriales y de automoción donde la fiabilidad y el soporte a largo plazo son prioritarios.

### IoT y comunicaciones inalámbricas

Los dispositivos conectados requieren conocimientos adicionales relacionados con antenas, consumo energético, certificaciones RF o protocolos inalámbricos.

**Espressif.** [Espressif](https://www.espressif.com) se ha convertido en una referencia para el desarrollo de dispositivos IoT gracias al éxito del ESP32. Publica hardware de referencia, recomendaciones de diseño RF y certificaciones.

**Nordic Semiconductor.** [Nordic](https://www.nordicsemi.com) es uno de los fabricantes más importantes en el ámbito del Bluetooth Low Energy y los dispositivos de muy bajo consumo.

**Silicon Labs.** [Silicon Labs](https://www.silabs.com) desarrolla soluciones para comunicaciones inalámbricas y sistemas IoT de bajo consumo, con abundantes diseños de referencia para Bluetooth, Zigbee y Matter.

**NXP Semiconductors.** [NXP](https://www.nxp.com) dispone de un catálogo muy amplio de procesadores, microcontroladores y soluciones de conectividad orientadas a aplicaciones industriales y de automoción.

### Un consejo que cambiará tu forma de diseñar hardware

Existe un hábito que diferencia rápidamente a un diseñador principiante de uno con experiencia: **consultar siempre los diseños de referencia publicados por el fabricante**.

Cuando una empresa como Texas Instruments, STMicroelectronics o Espressif publica un circuito de ejemplo, ese diseño ha sido desarrollado y validado por los propios ingenieros que conocen el componente mejor que nadie. Analizar esos esquemas suele aportar mucho más conocimiento que copiar un circuito encontrado al azar en Internet.

{{< figure src="simulacion.jpg" alt="Osciloscopio digital en uso" caption="Aprender a medir es tan importante como aprender a diseñar. Un osciloscopio te permite ver lo que realmente ocurre en tu circuito." >}}

## Simulación: detectar errores antes de fabricar

Fabricar una PCB para descubrir que un filtro no funciona como esperabas o que una fuente de alimentación oscila puede resultar frustrante y costoso.

Aunque ninguna simulación sustituye completamente a las pruebas reales, estas herramientas permiten validar gran parte del comportamiento del circuito antes de fabricar el primer prototipo. Además de ahorrar tiempo y dinero, ayudan a comprender mucho mejor cómo interactúan los distintos bloques electrónicos.

### LTspice

[LTspice](https://www.analog.com/ltspice) lleva años siendo uno de los simuladores SPICE más utilizados por ingenieros de todo el mundo. Destaca especialmente en el análisis de fuentes de alimentación, convertidores DC/DC, amplificadores, filtros analógicos y circuitos de potencia. Su precisión y la enorme cantidad de modelos disponibles lo convierten en una herramienta imprescindible.

**Especialmente útil para:** fuentes de alimentación, convertidores DC/DC, filtros analógicos, amplificadores, electrónica de potencia.

### QUCS

[QUCS](https://qucs.sourceforge.io/) (Quite Universal Circuit Simulator) es un simulador de circuitos libre (GPL) que destaca en el análisis de radiofrecuencia y microondas. A diferencia de LTspice, que se centra en circuitos analógicos y de potencia, QUCS soporta análisis de parámetros S, equilibrio armónico (*harmonic balance*), ruido y simulación AC/DC. Puede importar modelos SPICE y dispone de una interfaz gráfica basada en Qt.

Es la herramienta de referencia para quien diseña amplificadores RF, filtros de microondas, antenas o circuitos de comunicación inalámbrica y necesita algo más potente que un simulador genérico sin coste de licencia.

**Especialmente útil para:** radiofrecuencia, microondas, parámetros S, equilibrio armónico, filtros RF.

### SimulIDE

[SimulIDE](https://simulide.com/p/) es un simulador de circuitos electrónico en tiempo real, sencillo y rápido, pensado para estudiantes y aficionados. A diferencia de LTspice, que se centra en el análisis analógico avanzado, SimulIDE permite arrastrar componentes, conectarlos y pulsar el botón de encendido para ver cómo funciona el circuito de forma interactiva.

Soporta componentes analógicos y digitales, microcontroladores (PIC, AVR, Arduino) e incluye un editor de código con depurador. También incorpora osciloscopio, analizador lógico y monitor serie virtuales. Es software libre (AGPLv3) y resulta una opción fantástica para quienes empiezan y quieren experimentar sin necesidad de montar el circuito físico.

**Especialmente útil para:** aprender electrónica, simulación interactiva, Arduino y PIC, circuitos digitales, educación.

### Falstad Circuit Simulator

[Falstad](https://falstad.com/circuit/) es uno de los mejores simuladores para comprender los fundamentos de la electrónica. Permite construir pequeños circuitos directamente desde el navegador y visualizar en tiempo real cómo circula la corriente, cómo evolucionan las tensiones y cómo afecta la modificación de cualquier componente.

**Especialmente útil para:** aprender electrónica, circuitos básicos, visualización del funcionamiento, educación.

### Wokwi

[Wokwi](https://wokwi.com) se ha convertido en uno de los simuladores favoritos de la comunidad maker. Permite ejecutar el firmware de placas como Arduino, ESP32 o Raspberry Pi Pico, conectar sensores virtuales, pantallas, LEDs, dispositivos I²C y comprobar el funcionamiento del programa sin disponer todavía del hardware físico.

**Especialmente útil para:** Arduino, ESP32, Raspberry Pi Pico, IoT, desarrollo rápido.

## Instrumentación: aprender a medir

Diseñar un circuito es solo una parte del trabajo. Cuando llega el momento de comprobar que todo funciona correctamente, las herramientas de medida se convierten en nuestros mejores aliados.

Aprender a utilizar correctamente un osciloscopio, un analizador lógico o una fuente de alimentación de laboratorio permite comprender mucho mejor el comportamiento de un circuito y localizar problemas que resultarían imposibles de detectar únicamente revisando el esquemático.

{{< figure src="multimetro.jpg" alt="Multímetro digital" caption="El multímetro es la herramienta de medida más básica y más utilizada en electrónica." >}}

### EEVblog

[EEVblog](https://www.eevblog.com) es una referencia internacional dentro de la electrónica profesional. Dave Jones publica desde hace años análisis de osciloscopios, multímetros, analizadores lógicos, cámaras térmicas y multitud de equipos de laboratorio.

**Especialmente útil para:** osciloscopios, multímetros, analizadores lógicos, instrumentación, electrónica profesional.

### Keysight Learn

[Keysight](https://www.keysight.com) publica una enorme cantidad de documentación gratuita relacionada con instrumentación electrónica. Sus guías explican conceptos como integridad de señal, análisis temporal, medidas de alta velocidad o analizadores de espectro.

**Especialmente útil para:** osciloscopios, integridad de señal, RF, instrumentación profesional.

### Tektronix Learn

[Tektronix](https://www.tek.com) mantiene una de las bibliotecas educativas más completas sobre equipos de medida, con artículos y guías que explican desde el uso básico de un osciloscopio hasta técnicas avanzadas de depuración.

**Especialmente útil para:** osciloscopios, medidas electrónicas, depuración, análisis de señales.

---

## Siguiente paso

Ya tienes las herramientas para diseñar hardware y validar tus circuitos. En la **[parte 3](/blog/recursos-electronica-makers/parte-3-fabricar/)** descubriremos cómo convertir tu diseño en una placa real: fabricantes de PCBs, repositorios Open Source, comunidades técnicas y un recorrido completo para aprender electrónica desde cero.

← [Parte 1: Aprender electrónica](/blog/recursos-electronica-makers/parte-1-aprender/)

## Créditos de imágenes

Todas las imágenes proceden de [Wikimedia Commons](https://commons.wikimedia.org) y se utilizan bajo sus respectivas licencias:

- **Portada y esquema PCB** — *Circuit board schematic* — CC BY-SA 3.0 — [fuente](https://commons.wikimedia.org/wiki/File:Circuit_board_schematic.jpg)
- **Componentes electrónicos** — *Componentes* — Dominio público — [fuente](https://commons.wikimedia.org/wiki/File:Componentes.JPG)
- **Osciloscopio digital** — *Digital oscilloscope in use* — CC BY-SA 4.0 — [fuente](https://commons.wikimedia.org/wiki/File:Digital_oscilloscope_in_use.jpg)
- **Multímetro digital** — *2017 Cyfrowy miernik uniwersalny* — CC BY-SA 4.0 — [fuente](https://commons.wikimedia.org/wiki/File:2017_Cyfrowy_miernik_uniwersalny.jpg)
