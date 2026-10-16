---
title: "Cómo reducir el consumo del ESP32: modo deep sleep y otras técnicas"
description: "Con la radio activa, el ESP32 puede demandar varios cientos de miliamperios. Esta guía repasa las técnicas de bajo consumo: medición con resistencia shunt, desactivación de periféricos, deep sleep, fuentes de despertar y coprocesador ULP."
date: 2026-07-20T00:00:00Z
draft: true
tags: ["esp32", "bajo-consumo", "electrónica", "iot"]
author: "Hackerspace Valencia"
based_on: '<a href="https://kensocircuits.com/">Kenso Circuits</a>'
---
El ESP32 ofrece un rendimiento notable para proyectos conectados, pero ese rendimiento tiene un coste energético: con la WiFi transmitiendo puede demandar varios cientos de miliamperios. Alimentado desde la red, ese consumo es irrelevante; con baterías o un panel solar reduce la autonomía a pocos días. El chip dispone, sin embargo, de modos de bajo consumo que lo sitúan en microamperios cuando no hay tareas que ejecutar.

## Medir el consumo real

Antes de modificar nada, mide cuánto consume tu montaje. Necesitas un medidor de bajo consumo o, preferiblemente, una resistencia shunt de bajo valor en serie con la alimentación, leyendo la caída de tensión con un osciloscopio o un multímetro sensible. Sin medición no hay diagnóstico: una placa que se supone en microamperios puede tener un LED de alimentación consumiendo veinte miliamperios de forma permanente.

## Desactivar periféricos innecesarios

El consumo bajo empieza por controlar lo que permanece alimentado. El LED de alimentación de muchas placas de desarrollo consume más que el ESP32 en modo de bajo consumo: si es posible, retíralo o corta su pista. Aplica el mismo criterio a los reguladores auxiliares, al conversor USB a UART y a cualquier circuito que permanezca activo mientras el ESP32 duerme. En modo de bajo consumo el chip desciende a pocos microamperios; el problema suele estar en los periféricos que lo rodean.

## Modo deep sleep

En deep sleep el ESP32 detiene sus núcleos y mantiene únicamente el RTC y la memoria que conserva el estado. El consumo baja a decenas de microamperios en condiciones ideales. La entrada al modo se realiza con una llamada desde el programa indicando el tiempo de sueño o el evento que debe despertarlo. Al despertar, el chip arranca desde el principio, por lo que los datos que deban conservarse entre ciclos deben guardarse en memoria RTC.

## Fuentes de despertar

El ESP32 admite varias fuentes de despertar:

- **Temporizador del RTC**: la más utilizada. El dispositivo duerme un intervalo fijo, por ejemplo diez minutos, despierta, mide, transmite y vuelve a dormir. Con este esquema, una estación meteorológica que informa cada varios minutos pasa a estar activa solo una fracción mínima del tiempo.
- **Pines externos**: útiles para sensores de presencia o pulsadores.
- **Pines táctiles**.
- **Interrupciones externas**.

Pueden combinarse varias fuentes en un mismo diseño.

## Modo light sleep

El light sleep mantiene alimentadas más funciones del chip y despierta más rápido, a cambio de un consumo mayor que el deep sleep. Es adecuado cuando el dispositivo debe reaccionar en milisegundos y no puede asumir el reinicio que implica el deep sleep. Para la mayoría de proyectos alimentados por batería, el deep sleep es la opción más eficiente.

## Reducción de frecuencia de reloj y gestión de la radio

Incluso en activo, el consumo puede reducirse. Bajar la frecuencia del reloj disminuye el consumo de los núcleos cuando no se necesita toda la capacidad de cálculo. La radio, WiFi o Bluetooth, debe estar activa únicamente durante la transmisión: actívala, envía los datos y desactívala antes de volver a dormir. Mantenerla buscando redes de forma continua es la principal causa de descarga prematura de la batería.

## Coprocesador ULP

El ESP32 incorpora un coprocesador de ultrabajo consumo (ULP) que puede seguir operativo mientras los núcleos principales duermen. Su programación es más avanzada, pero permite leer un sensor de forma periódica y despertar al sistema principal únicamente cuando el dato cumple una condición. En proyectos de monitorización autónoma es la herramienta más eficaz para extender la autonomía.

## Resumen

El camino hacia un consumo mínimo tiene cuatro pasos: medir el consumo real, eliminar las fugas de los periféricos, utilizar deep sleep y activar la radio solo para transmitir. Con estas técnicas, un proyecto con autonomía de días puede alcanzar meses.

Si estás desarrollando un proyecto con baterías y los números no cuadran, tráelo al Hackerspace Valencia: analizamos el consumo con multímetro y osciloscopio y te ayudamos a localizar las fugas.
