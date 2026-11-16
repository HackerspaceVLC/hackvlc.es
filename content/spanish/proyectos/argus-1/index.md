---
title: "ARGUS-1"
date: 2026-11-15
image: /images/portfolio/argus-1.webp
summary: "Rover autónomo de orugas con brazo robótico que prepara de noche la ruta de un astronauta en Marte. NASA Space Apps Challenge 2026."
description: "Rover de orugas con chasis mecanizado en CNC y brazo de aluminio que, de forma autónoma, aparta las rocas pequeñas de una ruta, rodea las grandes y fotografía sin tocarlas las rocas científicas. Detector de rocas YOLO propio en una Raspberry Pi 5 y un ESP32 para motores y servos. Hecho para el NASA Space Apps Challenge 2026."
tags: ["rover", "robotica", "brazo-robotico", "vision-artificial", "yolo", "raspberry-pi-5", "esp32", "nasa-space-apps", "marte"]
categories: ["robotica", "electronica"]
featured: true
status: "completado"
difficulty: "avanzado"
tech_stack: ["Raspberry Pi 5", "ESP32", "YOLO", "ONNX Runtime", "Python", "FastAPI", "PlatformIO", "three.js"]
repo_url: "https://gitlab.com/hackerspacevlc1/space-apps-2026"
demo_url: "https://argus1.earth"
---

> Mientras la tripulación duerme, un rover recorre la ruta que un astronauta caminará mañana en Marte: aparta las rocas pequeñas, rodea las grandes y no toca nunca las de interés científico.

Proyecto de un equipo del hackerspace para el **NASA Space Apps Challenge 2026**, reto *"Interplanetary Survival Guide: Martian Map"*. La historia completa está en el blog: [ARGUS-1: nuestro rover para el NASA Space Apps Challenge 2026](/blog/argus-1-nasa-space-apps/).

{{< clip src="/videos/argus-1/demo-table-x2.mp4" poster="/videos/argus-1/demo-table-x2-poster.webp" caption="Demo real a velocidad x2: el rover encuentra el bloque naranja, lo coge y lo aparta de la ruta." narrow="true" >}}

## Qué hace

Sobre una mesa de 100×60 cm que representa una parcela real de 10×6 m en Airfield Tau (cráter Jezero) a escala 1:10, el rover recorre la ruta de A a B y decide qué hacer con cada roca:

| Roca | Qué hace el rover |
|---|---|
| Pequeña, en el camino (bloque naranja) | La coge con el brazo y la deja a un lado. Foto antes y después. |
| Grande | La marca y la ruta la rodea. |
| Científica (dorada) | La fotografía y no la toca nunca. |
| Referencia (negra) | La usa para orientarse. |

Todo lo que ve acaba en un mapa compartido sobre imágenes reales de la NASA.

{{< figure src="images/zoom-jezero.webp" alt="El cráter Jezero, Airfield Tau y la parcela de 10 por 6 metros con imágenes HiRISE" caption="Del cráter Jezero a Airfield Tau y a la parcela de 10×6 m. Imágenes: NASA/JPL-Caltech/University of Arizona (MRO HiRISE)." >}}

## Hardware

- **Chasis** de orugas mecanizado en CNC.
- **Brazo robótico de aluminio** con servos, pinza y una webcam montada en el brazo.
- **Piezas impresas en 3D:** almohadillas para la pinza y caja de muestras (PETG HF).
- **Raspberry Pi 5:** visión, decisiones y API del rover.
- **ESP32:** motores y servos. Recibe órdenes por USB o Bluetooth LE y para todo si la Pi deja de enviar su latido.
- **Mando de Xbox** por Bluetooth para conducirlo a mano y activar el modo autónomo.

{{< figure src="images/rover.webp" alt="El rover de lado, de frente y por detrás" caption="El rover en la mesa del hackathon." >}}

## Software

- **Detector de rocas propio:** YOLO pequeño entrenado con imágenes grabadas por el propio rover, con tres clases (movible, científica y referencia). Cuantizado a INT8 con ONNX Runtime, tarda unos 30 ms por imagen en la Pi.
- **Piloto (Python, FastAPI):** un ejecutor determinista que busca la roca, se acerca guiándose por la cámara, la agarra y la aparta. Sigue con la misión aunque se pierda la conexión.
- **Control de misión:** panel web con mapa, telemetría y órdenes de voz. El modelo de lenguaje solo elige la tarea; nunca mueve el hardware.
- **Firmware (PlatformIO):** protocolo de líneas por serie o BLE, poses del brazo y lectura del mando.
- **Gemelo digital (three.js):** el mismo rover en 3D, para probar sin hardware.

{{< figure src="images/det-frame-1.webp" alt="Imagen de la webcam del rover con recuadros sobre cada roca" caption="Salida del detector en una imagen del rover: bloques movibles, una roca científica y rocas de referencia." >}}

{{< clip src="/videos/argus-1/real-vs-mars.mp4" poster="/videos/argus-1/real-vs-mars-poster.webp" caption="La mesa real desde una cámara cenital y la misma pasada situada en Airfield Tau, con el mapa compartido." narrow="true" >}}

## Equipo

Danielyss, Ignacio, José, Lua, Enrique y Eugeni.

## Enlaces

- **Web con demos interactivas y gemelo 3D:** [argus1.earth](https://argus1.earth)
- **Presentación:** [slides.argus1.earth](https://slides.argus1.earth)
- **Código fuente:** [gitlab.com/hackerspacevlc1/space-apps-2026](https://gitlab.com/hackerspacevlc1/space-apps-2026)

*Proyecto independiente del equipo, sin afiliación ni respaldo de la NASA.*
