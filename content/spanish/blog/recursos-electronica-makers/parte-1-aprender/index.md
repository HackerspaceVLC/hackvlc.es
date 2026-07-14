---
title: "Recursos para aprender electrónica (1/3): plataformas, placas y proyectos"
description: "Las mejores plataformas para empezar en la electrónica desde cero: Adafruit, SparkFun, Arduino, ESP32, Raspberry Pi Pico y repositorios de proyectos reales."
date: 2026-07-14T10:30:00+02:00
cover: cover-parte1.jpg
draft: false
tags: ["electrónica", "arduino", "esp32", "raspberry pi", "recursos", "aprender"]
author: "Hackerspace Valencia"
---
Nunca ha sido tan fácil aprender electrónica como en la actualidad. La comunidad maker lleva décadas compartiendo proyectos, documentación y experiencias que permiten adquirir conocimientos sin necesidad de partir de un laboratorio profesional.

La clave no está en consultar cientos de páginas distintas, sino en saber cuáles utilizar en cada momento. En esta primera parte reunimos los recursos más útiles para comenzar, aprender los fundamentos y desarrollar los primeros proyectos.

Esta es la **parte 1 de 3** de nuestra [guía de recursos para electrónica](/blog/recursos-electronica-makers/). En la [parte 2](/blog/recursos-electronica-makers/parte-2-disenar/) abordamos el diseño de hardware, y en la [parte 3](/blog/recursos-electronica-makers/parte-3-fabricar/) la fabricación, la comunidad y las preguntas frecuentes.

## Un recorrido para aprender electrónica desde cero

Después de conocer todos los recursos, es normal preguntarse por dónde empezar. La buena noticia es que no necesitas aprenderlo todo de una vez. Si estás empezando, este recorrido puede servirte como referencia.

### Nivel 1. Comprender los fundamentos

Aprende qué hace una resistencia, cómo se comporta un condensador, qué diferencia hay entre un transistor y un MOSFET o cómo funcionan protocolos como I²C, SPI o UART.

- [All About Circuits Textbook](https://www.allaboutcircuits.com/textbook/) — referencia teórica completa y gratuita (más densa)
- *The Art of Electronics* de Paul Horowitz y Winfield Hill — el libro de referencia de la electrónica. No es gratuito ni ligero, pero si te lo tomas en serio es la inversión que más renta.
- *Electrónica* de Allan R. Hambley — libro de texto universitario muy accesible, con ejemplos resueltos. Ideal para una base estructurada sin excesiva teoría.
- *Practical Electronics for Inventors* de Paul Scherz y Simon Monk — muy práctico y visual, con cientos de circuitos reales y poca matemática.
- [Adafruit Learning System](https://learn.adafruit.com)
- [SparkFun Learn](https://learn.sparkfun.com)
- [Falstad Circuit Simulator](https://falstad.com/circuit/)

### Nivel 2. Construir proyectos sencillos

Arduino es la mejor plataforma para iniciarse. Cuando te sientas cómodo, explora ESP32, Raspberry Pi Pico o STM32.

- [Arduino Project Hub](https://projecthub.arduino.cc)
- [Hackster.io](https://www.hackster.io)
- [DFRobot Wiki](https://wiki.dfrobot.com)
- [M5Stack](https://docs.m5stack.com)

### Nivel 3. Diseñar tu primera PCB

Empieza con [KiCad](https://www.kicad.org) o [EasyEDA](https://easyeda.com) y diseña circuitos sencillos. Aprenderás a buscar componentes y consultar hojas de datos.

- [KiCad](https://www.kicad.org)
- [DigiKey](https://www.digikey.es)
- [SnapMagic](https://www.snapmagic.com)
- [AllDatasheet](https://www.alldatasheet.com)

### Nivel 4. Consultar la documentación oficial

Acostúmbrate a consultar directamente la documentación de fabricantes como [Texas Instruments](https://www.ti.com), [STMicroelectronics](https://www.st.com), [Microchip](https://www.microchip.com) o [Espressif](https://www.espressif.com).

### Nivel 5. Simular antes de fabricar

Usa [LTspice](https://www.analog.com/ltspice), [QUCS](https://qucs.sourceforge.io/), [SimulIDE](https://simulide.com/p/) o [Falstad](https://falstad.com/circuit/) para validar tu circuito antes de fabricar.

### Nivel 6. Fabricar tus primeros prototipos

Envía tus diseños a [JLCPCB](https://jlcpcb.com) o [PCBWay](https://www.pcbway.com) y recibe placas profesionales en pocos días. No tengas miedo de fabricar una primera versión imperfecta.

### Nivel 7. Aprender de otros ingenieros

Explora proyectos en [GitHub](https://github.com), revisa diseños en [Kitspace](https://kitspace.org) y participa en [EEVblog Forum](https://www.eevblog.com/forum) o [KiCad Forum](https://forum.kicad.info).

### Nivel 8. Nunca dejes de aprender

La electrónica evoluciona constantemente. La mejor inversión que puedes hacer no es comprar el equipo más caro, sino mantener la curiosidad y seguir aprendiendo con cada nuevo proyecto.

---

A continuación detallamos los recursos de cada etapa. Empezamos por la **parte 1: aprender electrónica**.

## Aprende los fundamentos

Antes de construir circuitos o diseñar una PCB conviene comprender cómo funcionan los componentes electrónicos y las tecnologías más habituales. Estas plataformas destacan por la calidad de sus explicaciones y por combinar teoría con ejemplos prácticos.

Si nunca has tocado un soldador ni has montado un circuito, no te preocupes: los recursos de esta sección están pensados precisamente para empezar desde cero.

{{< figure src="aprende.jpg" alt="Protoboard con componentes electrónicos" caption="La protoboard permite montar circuitos sin soldar, ideal para los primeros experimentos." >}}

### All About Circuits — Textbook

Si buscas una base teórica sólida en electrónica analógica, el [libro de texto de All About Circuits](https://www.allaboutcircuits.com/textbook/) es una de las mejores referencias gratuitas disponibles. Cubre corriente continua, corriente alterna, semiconductores, circuitos digitales y electrónica analógica con un nivel de detalle que rara vez encuentras en un tutorial.

Empieza desde [la electricidad estática y los fundamentos de la corriente continua](https://www.allaboutcircuits.com/textbook/direct-current/chpt-1/static-electricity/) y avanza hasta el diseño de filtros y amplificadores operacionales. Es más denso y teórico que Adafruit o SparkFun, así que no hace falta leerlo de principio a fin: úsalo como referencia para entender a fondo un concepto cuando los tutoriales más prácticos se queden cortos.

**Especialmente útil para:** electrónica analógica, fundamentos teóricos, corriente continua y alterna, semiconductores, consulta de referencia.

### Adafruit Learning System

Si tuviéramos que recomendar una única página para comenzar a aprender electrónica práctica, probablemente sería [Adafruit Learning System](https://learn.adafruit.com).

Aunque nació como el portal educativo de Adafruit, hoy reúne cientos de tutoriales sobre sensores, pantallas, comunicaciones, microcontroladores, IoT y hardware abierto. La mayoría de sus guías explican no solo cómo utilizar un componente, sino también por qué funciona y cuáles son las mejores prácticas para integrarlo en un proyecto.

**Especialmente útil para:** primeros proyectos, sensores y módulos electrónicos, pantallas, IoT, hardware abierto.

### SparkFun Learn

[SparkFun Learn](https://learn.sparkfun.com) complementa perfectamente a Adafruit con un enfoque ligeramente más orientado a los fundamentos de la electrónica.

Sus tutoriales explican con claridad conceptos como regulación de tensión, protocolos de comunicación, sensores o sistemas embebidos, acompañándolos de esquemas, ejemplos y proyectos fácilmente reproducibles.

**Especialmente útil para:** fundamentos de electrónica, protocolos de comunicación, sensores, sistemas embebidos, proyectos prácticos.

## Aprende construyendo proyectos

La teoría es importante, pero la electrónica se aprende construyendo circuitos. Las siguientes plataformas ofrecen documentación oficial, ejemplos y herramientas que permiten comenzar rápidamente con algunos de los ecosistemas más utilizados tanto por makers como por profesionales.

### Arduino

[Arduino](https://docs.arduino.cc) ha sido la puerta de entrada a la electrónica para millones de personas. Su ecosistema combina placas de hardware abierto, una documentación muy cuidada y miles de ejemplos que permiten desarrollar proyectos desde el primer día.

**Especialmente útil para:** aprender electrónica, automatización, sensores y actuadores, educación, prototipado rápido.

También puedes explorar miles de proyectos de la comunidad en [Arduino Project Hub](https://projecthub.arduino.cc).

{{< figure src="arduino.jpg" alt="Placa Arduino UNO" caption="Arduino es la plataforma más utilizada para iniciarse en la electrónica." >}}

### ESP32 y Espressif

Cuando un proyecto necesita conectividad Wi-Fi o Bluetooth, el ESP32 se ha convertido en una de las plataformas más populares del mercado. Además del hardware, [Espressif](https://www.espressif.com) ofrece una documentación técnica de gran calidad con esquemas de referencia, notas de diseño y ejemplos que resultan muy útiles tanto para aprender como para desarrollar productos comerciales.

**Especialmente útil para:** IoT, Wi-Fi y Bluetooth, hardware de referencia, diseño electrónico, productos conectados.

La documentación oficial del ESP-IDF (el framework de desarrollo) está en [docs.espressif.com](https://docs.espressif.com).

{{< figure src="esp32.jpg" alt="Módulo ESP32-C3" caption="El ESP32 aporta Wi-Fi y Bluetooth a tus proyectos por muy poco dinero." >}}

### Raspberry Pi Pico

La familia [Raspberry Pi Pico](https://www.raspberrypi.com/documentation/) ofrece una forma sencilla y económica de iniciarse en los sistemas embebidos. Su documentación destaca por la claridad de los ejemplos y por explicar con detalle el funcionamiento del microcontrolador RP2040, lo que facilita comprender conceptos que posteriormente pueden aplicarse a otras plataformas.

{{< figure src="raspberry-pi.jpg" alt="Familia Raspberry Pi" caption="La familia Raspberry Pi, desde la Pico hasta la Pi 5, cubre desde microcontroladores hasta ordenadores completos." >}}

### STM32 y STMicroelectronics

Los microcontroladores STM32 son una referencia dentro de la electrónica profesional. [STMicroelectronics](https://www.st.com) acompaña sus productos con abundante documentación, placas de evaluación y notas de aplicación que permiten dar el salto desde proyectos maker hasta desarrollos industriales.

## Fabricantes con una documentación excelente

Uno de los mayores cambios que ha experimentado la electrónica durante las últimas dos décadas ha sido la aparición de fabricantes que, además de vender hardware, invierten una enorme cantidad de recursos en crear documentación técnica de calidad.

Tutoriales paso a paso, esquemas eléctricos, ejemplos de conexión, proyectos completos y guías de uso permiten aprender nuevos componentes mucho más rápido que limitándose a leer una hoja de datos. Aunque gran parte de este contenido está centrado en sus propios productos, los conceptos y técnicas que explican pueden aplicarse a prácticamente cualquier proyecto electrónico.

### DFRobot Wiki

Tras Adafruit y SparkFun, [DFRobot](https://wiki.dfrobot.com) mantiene probablemente uno de los mayores repositorios de documentación para makers. Su Wiki reúne cientos de tutoriales sobre sensores, robótica, visión artificial, inteligencia artificial, IoT y sistemas embebidos. La mayoría de artículos incluyen fotografías, diagramas de conexión, ejemplos de código y explicaciones muy detalladas.

**Especialmente útil para:** sensores, robótica, Arduino y ESP32, inteligencia artificial, educación STEM.

### Pololu

Aunque [Pololu](https://www.pololu.com) es conocida principalmente por sus drivers para motores, reguladores de tensión y módulos electrónicos, muchos ingenieros consultan habitualmente su documentación incluso cuando no utilizan sus productos.

Cada módulo incorpora explicaciones sobre su funcionamiento interno, curvas de rendimiento, recomendaciones de diseño y ejemplos de aplicación. Sus tutoriales sobre alimentación electrónica, control de motores y robótica son especialmente didácticos.

**Especialmente útil para:** drivers para motores, electrónica de potencia, convertidores DC/DC, robótica, reguladores de tensión.

### Pimoroni

[Pimoroni](https://shop.pimoroni.com) desarrolla una amplia gama de placas y accesorios para Raspberry Pi, Raspberry Pi Pico y distintos microcontroladores. Además del hardware, publica abundante documentación, ejemplos y proyectos que facilitan enormemente el aprendizaje. Es una referencia muy interesante para quienes trabajan con pantallas, sensores, iluminación LED y dispositivos interactivos.

**Especialmente útil para:** Raspberry Pi, Raspberry Pi Pico, displays, sensores, LEDs.

### M5Stack

[M5Stack](https://docs.m5stack.com) ha creado uno de los ecosistemas más completos alrededor del ESP32, con decenas de módulos compatibles que permiten desarrollar dispositivos IoT, automatización industrial o interfaces HMI en muy poco tiempo. Toda esta plataforma está acompañada de una documentación muy extensa y numerosos ejemplos.

**Especialmente útil para:** ESP32, IoT, automatización, industria 4.0, prototipado rápido.

### Waveshare

[Waveshare](https://www.waveshare.com/wiki) fabrica cientos de módulos compatibles con plataformas como Raspberry Pi, ESP32, STM32, Jetson o Arduino. Prácticamente todos sus productos incluyen esquemas, documentación técnica y ejemplos de uso, convirtiéndose en una excelente fuente para descubrir nuevos periféricos y aprender a integrarlos correctamente.

**Especialmente útil para:** pantallas TFT y ePaper, cámaras, sensores, comunicaciones, Raspberry Pi.

### Seeed Studio Wiki

Además de fabricar hardware, [Seeed Studio](https://wiki.seeedstudio.com) mantiene una de las bibliotecas de documentación más completas relacionadas con sus productos. Las guías dedicadas a las placas XIAO, Grove o SenseCAP incluyen esquemas, ejemplos prácticos y recomendaciones de diseño.

**Especialmente útil para:** IoT, Grove, XIAO, sensores, hardware abierto.

## Aprende analizando proyectos reales

Una vez dominados los conceptos básicos, el siguiente paso consiste en analizar cómo otros desarrolladores resuelven problemas reales. Estudiar proyectos completos permite comprender decisiones de diseño, descubrir nuevas tecnologías y aprender diferentes formas de abordar un mismo reto.

### Hackster.io

[Hackster.io](https://www.hackster.io) es una de las mejores plataformas para aprender construyendo proyectos completos. Cada publicación suele incluir el esquemático, la lista de componentes, fotografías del montaje, explicaciones detalladas y el código necesario para reproducir el proyecto.

**Especialmente útil para:** IoT, robótica, ESP32 y Arduino, inteligencia artificial, proyectos completos.

### Hackaday

[Hackaday](https://hackaday.com) se ha convertido en una referencia para cualquier persona interesada en el hardware abierto y la innovación tecnológica. Cada día publica proyectos sorprendentes relacionados con electrónica, ingeniería inversa, fabricación digital, instrumentación científica o sistemas embebidos.

**Especialmente útil para:** hardware abierto, innovación, ingeniería inversa, fabricación digital, inspiración.

### Hackaday.io

Además del conocido blog, [Hackaday.io](https://hackaday.io) mantiene una comunidad donde miles de desarrolladores documentan la evolución de sus proyectos. Muchos de ellos comparten esquemáticos, diseños de PCBs, archivos de KiCad, listas de materiales y modelos 3D.

**Especialmente útil para:** hardware abierto, diseño de PCBs, IoT, robótica, proyectos colaborativos.

### Instructables

[Instructables](https://www.instructables.com) lleva años siendo una referencia dentro del movimiento Do It Yourself. Aunque reúne proyectos de disciplinas muy diversas, su sección de electrónica incluye una enorme cantidad de montajes perfectamente documentados, desde pequeños circuitos educativos hasta robots, estaciones meteorológicas, impresoras 3D o sistemas domóticos.

**Especialmente útil para:** proyectos paso a paso, electrónica educativa, robótica, domótica, makers.

### Arduino Project Hub

[Arduino Project Hub](https://projecthub.arduino.cc) recopila miles de proyectos desarrollados por la comunidad y por el propio equipo de Arduino. Es un magnífico complemento a la documentación oficial, ya que permite ver cómo otros usuarios utilizan sensores, actuadores y módulos electrónicos para construir soluciones completas.

**Especialmente útil para:** Arduino, sensores, automatización, proyectos educativos, prototipos.

---

## Siguiente paso

Ya sabes dónde aprender los fundamentos y dónde encontrar proyectos reales. En la **[parte 2](/blog/recursos-electronica-makers/parte-2-disenar/)** descubriremos las herramientas para diseñar tu propio hardware: software de PCBs, buscadores de componentes, librerías CAD, documentación de fabricantes y simulación.

## Créditos de imágenes

Todas las imágenes proceden de [Wikimedia Commons](https://commons.wikimedia.org) y se utilizan bajo sus respectivas licencias:

- **Portada** — *DIY Arduino LED screen for audio spectrum analyzer 1* — CC0 — [fuente](https://commons.wikimedia.org/wiki/File:DIY_Arduino_LED_screen_for_audio_spectrum_analyzer_1.jpg)
- **Protoboard** — *400 points breadboard* — CC BY-SA 2.0 — [fuente](https://commons.wikimedia.org/wiki/File:400_points_breadboard.jpg)
- **Arduino UNO** — *Arduino UNO RTC* — CC BY 4.0 — [fuente](https://commons.wikimedia.org/wiki/File:Arduino_UNO_RTC.jpg)
- **ESP32-C3** — *ESP32-C3 with Traffic Light Module* — CC0 — [fuente](https://commons.wikimedia.org/wiki/File:ESP32-C3_with_Traffic_Light_Module.jpg)
- **Familia Raspberry Pi** — *Raspberry Pi 1, Pi 5, Pi 400, Pico and Zero 2* — CC BY-SA 4.0 — [fuente](https://commons.wikimedia.org/wiki/File:Raspberry_Pi_1,_Pi_5,_Pi_400,_Pico_and_Zero_2.jpg)
