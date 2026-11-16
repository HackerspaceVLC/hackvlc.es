---
translationKey: "blog-argus-1-nasa-space-apps"
title: "ARGUS-1: nuestro rover para el NASA Space Apps Challenge 2026"
description: "Un equipo del hackerspace construyó en un fin de semana un rover de orugas que prepara de noche la ruta de un astronauta en Marte: aparta rocas, rodea obstáculos y no toca las de interés científico."
date: 2026-11-16T12:00:00+01:00
publishDate: 2026-11-16T12:00:00+01:00
draft: false
tags: ["robótica", "esp32", "raspberry-pi", "visión-artificial", "hackathon"]
author: "Hackerspace Valencia"
cover: cover.webp
---
En noviembre, seis miembros del hackerspace participamos en el **NASA Space Apps Challenge 2026**, el hackathon internacional de la NASA. Elegimos el reto **"Interplanetary Survival Guide: Martian Map"** y en un fin de semana construimos **ARGUS-1**: un rover real, con brazo robótico, que recorre de noche la ruta que un astronauta caminará al día siguiente en Marte.

No ganamos ningún premio, pero volvimos con un rover que funciona, mucho aprendido y muy buenos recuerdos.

{{< clip src="/videos/argus-1/demo-table-x2.mp4" poster="/videos/argus-1/demo-table-x2-poster.webp" caption="El rover en la mesa de la demo, a velocidad x2: encuentra el bloque naranja, lo coge y lo aparta, sin tocar las rocas doradas." narrow="true" >}}

## El problema

La mejor cámara en órbita de Marte, HiRISE, ve unos **25 cm por píxel**: una roca del tamaño de una pelota es un solo píxel. Para un astronauta a pie, con traje y cargado, ese píxel puede ser una caída. Y como la señal tarda **entre 3 y 22 minutos** en llegar desde la Tierra, nadie puede conducir un rover en directo para revisar el camino.

{{< figure src="zoom-jezero.webp" alt="Tres imágenes reales de la NASA: el cráter Jezero, la zona de Airfield Tau y nuestra parcela de 10 por 6 metros a resolución HiRISE" caption="Del cráter Jezero a Airfield Tau y a nuestra parcela de 10×6 m. A esa escala, la mejor imagen orbital son unos pocos píxeles." >}}

Situamos la historia en **Airfield Tau**, en el cráter Jezero, donde aterrizó el helicóptero Ingenuity y por donde pasó el rover Perseverance.

## La idea: un turno de noche

Mientras la tripulación duerme, rovers pequeños y baratos recorren la ruta del día siguiente y deciden qué hacer con cada roca:

- **Roca pequeña en el camino:** la cogen con el brazo, la dejan a un lado y la fotografían antes y después.
- **Roca grande:** la marcan y la ruta la rodea.
- **Roca científica:** la fotografían y **no la tocan nunca**, para no estropear lo que un geólogo quiere estudiar.

Por la mañana, el astronauta consulta en una tablet un mapa con cada tramo ya comprobado sobre el terreno.

{{< clip src="/videos/argus-1/night-shift.mp4" poster="/videos/argus-1/night-shift-poster.webp" caption="El turno de noche en el gemelo digital. El rover 3D está modelado a partir del real, que aparece en la esquina." >}}

## El rover

Es un rover de orugas con **chasis mecanizado en CNC** y **brazo robótico de aluminio**, con algunas piezas impresas en 3D (las almohadillas de la pinza y una caja para muestras). Una **Raspberry Pi 5** se encarga de la visión y de las decisiones, y un **ESP32** mueve los motores y los servos. Si la Pi deja de enviar su latido, el ESP32 lo para todo. Se puede conducir con un mando de Xbox y pasar a modo autónomo con dos botones.

{{< figure src="rover.webp" alt="El rover de lado, de frente y por detrás: chasis de orugas, brazo de aluminio y la webcam montada en el brazo" caption="El rover en la mesa del hackathon. La webcam va en el brazo, así que el brazo también hace de cuello." >}}

La demo se hace en una mesa de **100×60 cm** que representa una parcela real de 10×6 m a escala 1:10. Las rocas son atrezo: las negras sirven de referencia, las doradas son las científicas y el bloque naranja es la que el brazo puede mover.

{{< clip src="/videos/argus-1/real-vs-mars.mp4" poster="/videos/argus-1/real-vs-mars-poster.webp" caption="A la izquierda, la mesa real desde una cámara cenital. A la derecha, la misma pasada situada en Airfield Tau, con el mapa compartido actualizándose." narrow="true" >}}

## Un detector de rocas hecho por nosotros

Ningún modelo genérico sabe qué es una "roca científica", así que entrenamos el nuestro. Grabamos miles de imágenes con la webcam del rover, las etiquetamos automáticamente por color y forma, revisamos a mano las dudosas y entrenamos un modelo **YOLO** pequeño con tres clases: movible, científica y de referencia. Cuantizado a INT8, funciona **en la propia Raspberry Pi en unos 30 ms por imagen**, sin conexión a internet.

{{< figure src="det-frame-1.webp" alt="Imagen de la webcam del rover con recuadros sobre cada roca: bloques movibles, una roca científica y rocas de referencia" caption="Lo que ve el rover: bloques movibles en amarillo, la roca científica en violeta y las de referencia en blanco." >}}

Cuando cambió la luz del local, las rocas doradas empezaron a confundirse con el bloque. Volvimos a grabar y a entrenar hasta que el modelo dejó de confundirlas en nuestras pruebas. Era importante: una roca científica mal clasificada es una roca que el brazo cogería.

## La IA no mueve el hardware

El sistema tiene un modelo de lenguaje para entender órdenes de voz y narrar la misión, pero solo elige qué tarea hacer. La conducción, la aproximación y el agarre los hace un programa determinista, que termina su ruta aunque se pierda la conexión. En Marte, la conexión se pierde.

{{< figure src="morning-brief.webp" alt="Mapa de la parcela con la ruta de A a B, rocas coloreadas según su estado y fotos de antes y después" caption="La demo del turno de noche en argus1.earth: pon rocas, lanza el turno y revisa la ruta por la mañana." >}}

## Gracias

Gracias a la organización del NASA Space Apps Challenge en Valencia por hacerlo posible, y al equipo: Danielyss, Ignacio, José, Lua, Enrique y Eugeni.

Todo el proyecto es abierto:

- **Web con demos interactivas y gemelo 3D:** [argus1.earth](https://argus1.earth)
- **Presentación:** [slides.argus1.earth](https://slides.argus1.earth)
- **Código fuente:** [gitlab.com/hackerspacevlc1/space-apps-2026](https://gitlab.com/hackerspacevlc1/space-apps-2026)

Si quieres verlo en persona o te apetece meterte en el próximo, pásate por el hackerspace en las [puertas abiertas](/#contact) de los martes.

*Proyecto independiente del equipo, sin afiliación ni respaldo de la NASA. Imágenes orbitales: NASA/JPL-Caltech/University of Arizona (MRO HiRISE), vía Mars Trek.*
