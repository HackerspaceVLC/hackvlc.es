---
title: "Errores habituales al diseñar una PCB con ESP32 y cómo evitarlos"
description: "El salto de la protoboard a la PCB propia introduce fallos que solo aparecen cuando la placa fabricada no arranca: antena, desacoplo, pines de strapping y alimentación. Repasamos los errores más frecuentes y su prevención."
date: 2026-07-22T00:00:00+02:00
publishDate: 2026-07-22T00:00:00+02:00
draft: true
tags: ["esp32", "pcb", "electrónica", "kicad"]
author: "Hackerspace Valencia"
based_on: '<a href="https://kensocircuits.com/">Kenso Circuits</a>'
---
El ESP32 es una opción habitual en proyectos maker: bajo coste, WiFi y Bluetooth integrados y documentación abundante. Sin embargo, existe una diferencia importante entre un montaje en protoboard y un diseño propio en placa de circuito impreso. En ese salto aparecen errores que solo se manifiestan cuando la placa llega fabricada y no arranca. Esta guía repasa los más frecuentes para que tu próxima PCB funcione a la primera.

## Zona de la antena

El módulo WROOM o WROVER integra una antena impresa en uno de sus bordes. Esta antena requiere espacio libre de cobre y de metal en todas las capas; de lo contrario, el alcance de la WiFi se degrada de forma notable. Respeta el área de exclusión (keepout) que documenta el fabricante y no dispongas pistas, planos de masa ni componentes bajo esa zona. Evita además instalar el módulo dentro de una caja metálica cerrada. Es el error más frecuente y el más difícil de diagnosticar, porque la placa funciona, aunque con cobertura reducida.

## Condensadores de desacoplo

Durante los picos de transmisión WiFi el ESP32 puede demandar cientos de miliamperios en microsegundos. Si la alimentación no llega limpia, el chip se reinicia sin previo aviso. Cada par VCC/GND del módulo necesita su condensador de desacoplo junto al pin: habitualmente un condensador de 100 nF más otro de 10 µF en las proximidades. La distancia correcta se mide en milímetros, no en centímetros: un desacoplo alejado equivale a reinicios aleatorios.

## Alimentación a 3,3 V

El ESP32 funciona a 3,3 V, no a 5 V. Aplicar 5 V en el pin de alimentación daña el chip de forma permanente. Además de la tensión correcta, el regulador debe suministrar la corriente de los picos: un LDO de 100 mA resulta insuficiente. Considera demandas del orden de 500 mA en ráfagas y dimensiona el regulador en consecuencia. Con alimentación de batería o cuando la eficiencia es crítica, un regulador conmutado reduce el calentamiento y extiende la autonomía.

## Pines de arranque (strapping)

Durante el encendido, varios pines deben encontrarse en un nivel determinado para que el chip arranque en modo normal y lea la memoria flash: GPIO0, GPIO2, GPIO5, GPIO12 y GPIO15. Si tu diseño utiliza alguno de ellos como entrada conectada a un pulsador o a un sensor que lo fija en el nivel contrario, la placa no arrancará o lo hará en un modo incorrecto. GPIO12 (MTDI) requiere atención especial: si está a nivel alto durante el arranque, la memoria flash interna se alimenta a 1,8 V en lugar de 3,3 V y el módulo no arranca correctamente. Consulta la tabla de strapping del fabricante antes de asignar estos pines a funciones críticas.

## Circuito de reset y programación

Para flashear por USB sin intervención manual, las líneas EN y BOOT deben gobernarse automáticamente desde el conversor USB a UART. Se implementa con dos transistores y un par de resistencias: el circuito de reset automático. Si lo omites, tendrás que pulsar los botones físicos en cada grabación. Incluye también una resistencia de pull-up en EN y un condensador de valor reducido para evitar resets inducidos por ruido.

## Gestión térmica

El ESP32 disipa calor, especialmente con la WiFi activa. Un plano de masa continuo bajo el módulo ayuda a distribuir esa temperatura. Planos fragmentados o con abundantes cortes agravan los problemas térmicos y de integridad de señal. Diseña con un plano de masa sólido y devuelve las corrientes por caminos cortos.

## Resumen práctico

La mayoría de incidencias en placas con ESP32 se resumen en cuatro puntos: respetar la zona de la antena, colocar correctamente los condensadores de desacoplo, alimentar con la tensión y corriente adecuadas y verificar los pines de strapping. Con esos puntos controlados, el resto del diseño suele funcionar correctamente.

Si te estás iniciando en el diseño de placas y tienes dudas, acércate al Hackerspace Valencia un martes de puertas abiertas: revisamos tu esquemático entre varios miembros y te ayudamos a evitar encargar una placa que no va a arrancar.
