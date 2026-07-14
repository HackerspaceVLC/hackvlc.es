---
title: "Errores comunes al diseñar una PCB con ESP32 (y cómo evitarlos)"
description: "El ESP32 es fantástico, pero su placa tiene trampas: antena, condensadores, pines de arranque y alimentación. Repasamos los fallos típicos al diseñar una PCB con ESP32 y cómo evitarlos."
date: 2026-07-22T00:00:00+02:00
publishDate: 2026-07-22T00:00:00+02:00
tags: ["esp32", "pcb", "electrónica", "kicad"]
author: "Hackerspace Valencia"
based_on: '<a href="https://kensocircuits.com/">Kenso Circuits</a>'
---
El ESP32 se ha convertido en el cerebro de media Valencia maker. Sale barato, trae WiFi y Bluetooth de serie y hay tutoriales para casi todo. Pero hay una diferencia enorme entre montar un proyecto en una protoboard y llevarlo a una placa de circuito impreso propia. En ese salto aparecen errores que no se ven hasta que la placa llega fabricada y, simplemente, no arranca.

Repasamos los más habituales para que tu próxima PCB encienda a la primera.

## Descuidar la zona de la antena

El módulo WROOM o WROVER lleva una antena impresa en su borde. Esa antena necesita espacio libre de cobre y de metal en todas las capas, o el alcance del WiFi se desploma. Lo correcto es respetar el área de keepout que indica el fabricante y no colocar pistas, planos de masa ni componentes debajo de esa zona. Tampoco montes el módulo dentro de una caja metálica cerrada. Parece obvio, pero es el error número uno y el más difícil de diagnosticar, porque la placa funciona, solo que con poca cobertura.

## Condensadores de desacoplo colocados lejos

El ESP32 es un glotón. En los picos de transmisión WiFi puede pedir cientos de miliamperios en microsegundos. Si la alimentación no llega limpia, el chip se reinicia sin más. Cada par VCC/GND del módulo quiere su condensador de desacoplo pegado al pin, normalmente un pequeño de 100 nF más uno mayor de 10 µF cerca. Si los pones "en algún sitio por ahí", el reglamento está pidiendo un reinicio aleatorio. Cerca significa a milímetros del pin, no a tres centímetros.

## Alimentar mal a 3,3 V

El ESP32 funciona a 3,3 V, no a 5 V. Meter 5 V en el pin de alimentación es la forma más rápida de cargárselo. Y aunque uses la tensión correcta, el regulador tiene que dar suficiente corriente para esos picos. Un LDO pequeño de 100 mA no vale. Cuenta con que el sistema puede pedir del orden de 500 mA en ráfagas, y elige el regulador en consecuencia. Si vas con pilas o quieres eficiencia, un regulador conmutado te quitará calor y te alargará la autonomía.

## Olvidar los pines de arranque

Durante el encendido, varios pines deben estar a un nivel concreto para que el chip arranque en modo normal y lea la memoria flash. Los clásicos son GPIO0, GPIO2, GPIO5, GPIO12 y GPIO15. Si en tu diseño usas alguno de ellos como entrada conectada a un pulsador o a un sensor que los tira al nivel equivocado, la placa no arrancará o lo hará en un modo raro. GPIO12, además, si está alto en el arranque cambia el voltaje de la flash interna y puede dejar el módulo inservible. La regla es sencilla: revisa la tabla de strapping del fabricante antes de asignar esos pines a nada crítico.

## No preparar el circuito de reset y de programación

Para flashear cómodamente por USB necesitas que las líneas EN y BOOT se manejen solas desde el conversor USB a UART. Esto se hace con dos transistores y un par de resistencias, el circuito automático de reset. Si lo omites, tendrás que pulsar botones cada vez que quieras grabar, y eso cansa enseguida. Pon también una resistencia de pull-up en EN y un condensadito pequeño para evitar resets por ruido.

## No pensar en el calor

El ESP32 calienta, sobre todo con WiFi activo. Un plano de masa continuo debajo del módulo ayuda a repartir esa temperatura. Planos de masa partidos o llenos de cortes convierten tu placa en una pequeña estufa con problemas de integridad de señal. Si puedes, diseña con una masa sólida y devuelve las corrientes por caminos cortos.

## Resumen práctico

Casi todos los sustos con placas de ESP32 se reducen a cuatro cosas: respetar la antena, poner los condensadores donde toca, alimentar con la tensión y la corriente correctas, y no abusar de los pines de arranque. Si controlas eso, el resto suele salir bien.

Si te estás estrenando en el diseño de placas y te atascas, pásate por el Hackerspace Valencia cualquier martes de puertas abiertas. Entre todos le echamos un ojo a tu esquemático y te ayudamos a no pagar una placa que no va a arrancar.
