---
title: "KiCad 10: novedades y por qué mola para tus placas"
description: "KiCad 10 sigue consolidando el software libre de diseño de placas como opción seria. Repasamos las mejoras más útiles para quien diseña PCBs en un makerspace: ruteo, reglas de diseño, salidas de fabricación y visor 3D."
date: 2026-07-21T00:00:00+02:00
publishDate: 2026-07-21T00:00:00+02:00
tags: ["kicad", "pcb", "open-source", "electrónica"]
author: "Hackerspace Valencia"
based_on: '<a href="https://kensocircuits.com/">Kenso Circuits</a>'
---
Hace unos años, diseñar una placa de circuito impreso en software libre era casi un acto de fe. KiCad existía, pero le faltaba pulir. Hoy la historia es otra: KiCad se ha convertido en una herramienta seria, capaz de llevar un proyecto desde el primer esquema hasta los ficheros de fabricación, sin pagar licencia y sin pedir permiso a nadie. La versión 10 sigue por ese camino, y merece la pena ver qué mejora para quienes diseñamos placas en un makerspace.

## Un ruteo que estorba menos

El enrutamiento, esa tarea de tirar pistas entre componentes, es donde más tiempo pierdes. Las últimas versiones han mejorado bastante el ruteador interactivo: empuja las pistas vecinas, respeta tus anchuras y clearance y se defiende mejor cuando el espacio aprieta. En placas densas se nota sobre todo en la cantidad de veces que tienes que rehacer una pista a mano. También hay más control sobre el embolsado y el ajuste de longitud, algo que importa si te metes con memorias rápidas o señales que requieren igualar.

## Reglas de diseño a tu medida

Durante mucho tiempo, las reglas de diseño eran un menú fijo de valores. Ahora puedes escribir tus propias reglas en un lenguaje sencillo, algo parecido a programar las condiciones que tu placa debe cumplir. ¿Quieres que dos redes concretas se separen el doble de lo normal por ruido? ¿Que un conector concreto tenga siempre un determinado anillo de soldadura? Lo defines una vez y el verificador te avisa si lo incumples. Para quien aprende, esto enseña buenas prácticas; para quien ya domina, ahorra revisions.

## Teardrops y detalles que se agradecen

Los teardrops, esos pequeños engrosamientos en la unión entre una pista y una vía o una almohadilla, ahora se gestionan de forma integrada. Ayudan a que la placa sea más resistente en la fabricación y a que los defectos de grabado no te dejen una pista colgando. Es el tipo de mejora que no cambia tu vida hasta que una placa llega rota por una unión débil y entiendes por qué importan.

## Salidas de fabricación más completas

Cuando envías una placa a fabricar, los Gerber siguen siendo el estándar, pero cada vez hay más fabricantes que aceptan formatos más modernos como ODB++ o IPC-2581, que empaquetan toda la placa en un solo fichero coherente. KiCad ha mejorado estas exportaciones, lo que reduce errores de interpretación por parte del fabricante. También la lista de materiales y la guía de montaje ganan en opciones, útil si alguna vez llevas una placa a ensamblaje.

## El visor 3D y la integración mecánica

Poder ver tu placa en 3D antes de fabricarla ahorba disgustos: compruebas si los componentes chocan, si el conector cae donde creías y si la placa encaja en su caja. La exportación a STEP sirve para llevar el modelo a tu programa de CAD mecánico y comprobar el conjunto completo. Para impresión 3D de carcasas en el makerspace, este puente entre electrónica y mecánica es oro.

## Esquemas jerárquicos y multipágina

Cuando un proyecto crece, meter todo en una sola hoja lo hace ilegible. Los esquemas jerárquicos y multipágina permiten organizar bloques, reutilizar subsistemas y mantener el orden. Va mejorando la gestión de buses y de etiquetas entre hojas, que es lo que termina de convencer cuando un proyecto pasa de prototipo a algo serio.

## Por qué importa en un makerspace

El gran valor de KiCad en un hackerspace no es solo que sea gratis. Es que cualquiera puede abrirlo, copiar tus ficheros, entender tu placa y mejorarla. Esa es la cultura que defendemos. Si siempre has querido diseñar tu primera placa y el software de pago te echaba atrás, KiCad 10 es una excusa perfecta para empezar.

Si quieres estrenarte, en el Hackerspace Valencia organizamos talleres de KiCad de vez en cuando. Pásate por una sesión de puertas abiertas y te ponemos con un ejemplo sencillo para que salgas con tu primera placa diseñada.
