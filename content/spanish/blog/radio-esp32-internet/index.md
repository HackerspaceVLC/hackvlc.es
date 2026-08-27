---
title: "Cómo construí una radio por Internet con un ESP32 y un DAC MAX98357"
description: "Construcción de una radio por Internet con un ESP32 y un DAC MAX98357 de bajo coste: streaming MP3/AAC, control mediante encoder rotativo, interfaz web y actualización de firmware por HTTP cuando OTA dejó de funcionar."
date: 2026-07-01T00:00:00Z
draft: true
cover: cover.jpeg
tags: ["esp32", "radio", "streaming", "dac", "iot", "arduino", "tutorial"]
author: "Un miembro del Hackerspace Valencia"
---
*Notas sobre una tarde de trabajo con OTA y una solución de actualización de firmware por HTTP*

---

Este proyecto nació en el taller, ante una pila de placas ESP32 sin uso. El objetivo era construir una radio que reprodujera emisoras mediante streaming por Internet, en lugar de una radio FM convencional, y que resultara útil en el día a día. La radio está instalada y en funcionamiento en el hackerspace.

## Hardware

La lista de materiales es reducida:

- **ESP32**: cualquier placa de desarrollo; en este caso, una DevKit.
- **DAC MAX98357** (unos 2 €): DAC con amplificador clase D integrado que genera audio I2S directamente para un altavoz.
- **Encoder rotativo KY-040** (unos 1 €): control de volumen y cambio de emisora sin necesidad de pantalla.
- Un altavoz de pequeña potencia.
- Protoboard y cables.

El MAX98357 es la pieza central del proyecto: un DAC con amplificador clase D que se conecta por I2S mediante tres pines (BCLK, LRC y DIN) además de la alimentación, y entrega hasta 3 W por altavoz sin componentes externos.

Conexiones principales:

```
BCLK → GPIO 26
LRC  → GPIO 25
DIN  → GPIO 22
```

El encoder rotativo se conecta a GPIO 4 y GPIO 2, y su pulsador a GPIO 15.

## Software

El firmware se desarrolla con PlatformIO, sobre el framework Arduino, y utiliza la librería `ESP8266Audio` de Earle Philhower.

### Por qué ESP8266Audio en un ESP32

La librería conserva el nombre por razones históricas, pero funciona correctamente en ESP32. Soporta MP3, AAC y streams ICY, el formato habitual de las emisoras de radio por Internet. No soporta HTTPS, circunstancia que se comprobó durante el desarrollo.

### Funciones del firmware

1. **Reproducción de streams de audio** en formato MP3 o AAC.
2. **Gestión WiFi**: conexión automática a la última red utilizada, almacenamiento de hasta 3 redes y generación de un punto de acceso con portal cautivo para configurar las credenciales desde el móvil.
3. **Servidor web** con interfaz de control desde el navegador, sin instalar aplicaciones.
4. **Encoder rotativo**: giro para el volumen, pulsación corta para reproducción/pausa y pulsación larga para cambiar de emisora.
5. **mDNS**: el dispositivo responde como `ESP32-RADIO.local`.

## Desarrollo por fases

### Fase 1: salida de audio

El primer objetivo fue obtener salida de audio del DAC. La conexión del MAX98357 por I2S es directa: la clase `AudioOutputI2S` de ESP8266Audio gestiona la configuración de pines y el formato MP3/AAC/ICY.

El primer problema surgió al probar un stream HTTPS: silencio total. La librería emplea `WiFiClient`, que no implementa SSL. La solución consistió en utilizar las URLs en HTTP de las emisoras. La mayoría de emisoras españolas (Cadena SER, Los 40, RNE) sirven sus streams en HTTP sin problema.

### Fase 2: encoder rotativo

El encoder rotativo genera dos señales (CLK y DT) desfasadas según el sentido de giro, y se lee correctamente mediante interrupciones en el ESP32. Se añadió también una interrupción para el pulsador.

Detalle de implementación: conviene usar `IRAM_ATTR` en las rutinas de interrupción y declarar las variables compartidas como `static` para que residan en DRAM.

```
Girar derecha → sube el volumen
Girar izquierda → baja el volumen
Pulsación < 1 s → reproducción/pausa
Pulsación > 1 s → siguiente emisora
```

### Fase 3: interfaz web

El servidor web, construido sobre `WebServer`, incluye:

- Lista de emisoras con la activa resaltada.
- Control deslizante de volumen.
- Botón de reproducción/pausa.
- Alta de URLs personalizadas, almacenadas en la memoria NVS del ESP32.

La interfaz actualiza el estado cada 2 segundos mediante peticiones AJAX al endpoint `/status`, de modo que el navegador muestra en todo momento la emisora en reproducción.

### Fase 4: actualización de firmware

OTA (Over-The-Air) permite actualizar el firmware sin cable USB, lo cual resulta útil cuando el dispositivo está instalado en su carcasa.

ArduinoOTA es la librería estándar para este fin: se configura, abre el puerto 3232 y desde PlatformIO se ejecuta `pio run --target upload --upload-port ESP32-RADIO.local`.

En este montaje no funcionó: mDNS resolvía correctamente y el ESP32 respondía a ping, pero el puerto 3232 rechazaba la conexión. Se descartaron sucesivamente un conflicto con WiFiManager, un defecto del core Arduino 2.0.16 y la ausencia de la llamada a `ArduinoOTA.handle()`.

La solución alternativa fue implementar la actualización por HTTP. El ESP32 dispone de la clase `Update`, que permite flashear el firmware desde cualquier fuente de datos. Se implementó un endpoint `/update` en el servidor web que acepta un POST multipart con el archivo `.bin`.

El resultado funciona de forma fiable: se abre `http://192.168.1.75/update` desde el navegador, se selecciona el archivo `.bin` y el ESP32 se flashea y se reinicia automáticamente, sin cables ni puerto 3232.

## Experiencia de uso

Al encenderla, la radio se conecta a la red almacenada y comienza a emitir en pocos segundos. Desde el encoder se ajusta el volumen (giro), se pausa y reanuda la reproducción (pulsación corta) y se cambia de emisora (pulsación larga). La interfaz web completa está disponible en `http://192.168.1.75` desde cualquier navegador de la red local.

## Galería

{{< figure src="foto-1.jpeg" alt="La radio montada" >}}
{{< figure src="foto-2.jpeg" alt="Detalle del montaje" >}}
{{< figure src="foto-3.jpeg" alt="Detalle del montaje" >}}
{{< figure src="foto-4.jpeg" alt="La radio funcionando" >}}

## Conclusiones

1. **I2S simplifica el audio**: con tres pines se obtiene audio de calidad. El MAX98357 integra DAC y amplificador clase D en un encapsulado mínimo.
2. **Los streams HTTP siguen siendo operativos**: las emisoras llevan décadas sirviendo audio por HTTP sin cifrar y no parece inminente el cambio.
3. **La actualización por HTTP es una alternativa sólida a OTA**: cuando ArduinoOTA falla, un endpoint de actualización es sencillo de implementar y más fácil de diagnosticar.
4. **El ESP32 dispone de margen de sobra**: con 240 MHz, 320 KB de RAM y WiFi, este proyecto consume una fracción mínima de sus recursos.

## Código

El proyecto completo está en `~/ESP32_RADIO/`, pendiente todavía de publicar en GitHub. Cualquier miembro interesado en revisarlo o montar una unidad puede localizarme en el taller. Está organizado como un proyecto PlatformIO estándar:

- `include/config.h`: pines y streams.
- `src/main.cpp`: núcleo del firmware.
- `src/web_interface.cpp`: interfaz web.
- `src/audio_player.cpp`: reproductor de audio.
- `src/encoder.cpp`: encoder rotativo.
- `src/wifi_manager.cpp`: gestión WiFi multired.

## Posibles mejoras

- **Pantalla OLED** para mostrar la emisora y los metadatos ICY, cuando el stream los incluye.
- **Fuente A2DP** para operar como altavoz Bluetooth.
- **Alimentación por batería**: el consumo reducido permite horas de funcionamiento con una batería externa pequeña.
- **Integración con Home Assistant** para encendido y apagado mediante automatizaciones.

Quedan anotadas para próximas sesiones de trabajo en el hackerspace.
