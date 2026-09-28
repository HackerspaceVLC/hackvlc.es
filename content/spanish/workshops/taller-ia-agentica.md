---
title: "IA desde 0 a programar con IA agéntica"
date: 2024-01-01
image: /images/workshop/taller-ia-agentica.webp
description: "Taller de unas 3 horas para pasar de pedirle código a un chat a trabajar con agentes que editan, ejecutan tests y abren PRs. Después de la Hackathon NASA del 3 de octubre."
tags: ["IA"]
---

<!-- TODO: poner la fecha real en el frontmatter y en "Cuándo" cuando se confirme -->

**Cuándo:** fecha por confirmar. El meetup y el taller abierto de IA agéntica serán **después de la Hackathon NASA del sábado 3 de octubre**. La anunciaremos en el [Meetup de Hackerspace Valencia](https://www.meetup.com/es-ES/hackerspace-valencia/) y aquí.

Si alguna vez le has pedido a ChatGPT una función y luego la has copiado a mano en tu proyecto, este taller va del paso siguiente: un agente que abre tus ficheros, cambia el código, lanza los tests y, si fallan, vuelve a intentarlo sin que tengas que intervenir. El chat te responde; el agente hace.

Lo da Ignacio LD, que trabaja así a diario, y lo que enseña es su flujo real: las herramientas que usa, cómo reparte el trabajo entre varios agentes y los errores que ya ha cometido para que no los repitas. Lo hemos preparado pensando en la hackathon, donde en un fin de semana saber paralelizar bien te deja hacer el trabajo de tres personas, pero sirve para cualquiera que programe o quiera empezar.

## Para quién

El público es mixto y el taller empieza desde cero. Si nunca has usado un agente, la primera parte es para ti. Si ya usas opencode o Claude Code, a partir de la segunda verás cosas que probablemente no tengas montadas: varios agentes a la vez, worktrees, memoria entre sesiones y MCP.

## Qué vamos a ver

1. **Fundamentos.** Chat frente a agente. El bucle en el que funciona todo agente: percibe, decide, actúa y observa. Las herramientas (leer, editar, ejecutar), la ventana de contexto y por qué el agente se vuelve torpe cuando se llena.
2. **Harness y modelos.** Qué es un harness (opencode, Claude Code, Codex) y cómo elegir modelo según la tarea: locales o gratuitos para borradores, baratos para el volumen y caros solo para lo difícil. Subagentes.
3. **Varios agentes a la vez con Herdr.** Un multiplexor de terminales pensado para agentes: ves cuál está trabajando, cuál ha terminado y cuál está bloqueado esperándote, y saltas directo a ese.
4. **Orquestador y workers.** Partir una tarea en frentes independientes, cada uno en su propio git worktree y con su propio PR. Cómo escribir el encargo, revisar, mergear con cabeza y no disparar el coste.
5. **Memoria entre sesiones con Engram.** Que el agente de hoy sepa lo que decidisteis ayer.
6. **Configuración.** `AGENTS.md`, agentes y comandos propios, skills, hooks y límites de seguridad para no darle a un agente más poder del que toca.
7. **MCP para principiantes.** Qué es el Model Context Protocol y cómo conectar el agente a tus cosas.
8. **Agentes remotos.** Dejar agentes trabajando en otra máquina (un VPS, una Raspberry Pi) y dirigirlos desde el portátil.
9. **Slides con IA.** Las diapositivas del propio taller son Markdown con Slidev y están hechas con agentes.
10. **Cierre.** Una ruta mínima para empezar al día siguiente, una checklist para la hackathon y los errores más caros.

Hay cuatro demos en directo: tres agentes trabajando en paralelo, un orquestador que reparte una tarea en dos workers y acaba con dos PRs, un agente que recupera una decisión guardada en otra sesión y una diapositiva generada en vivo.

## Formato

- Unas 3 horas, con un descanso de 10 minutos a mitad.
- Mucho directo y poca teoría. La idea no es que salgas sabiendo la teoría, sino con tu propio flujo montado. Para empezar basta con un agente y un fichero de reglas; lo demás viene después.
- En castellano.

## Qué necesitas

- Tu portátil.
- No hace falta experiencia previa con IA. Saber algo de programación y moverte un poco por la terminal ayuda, pero no es imprescindible.
- Si quieres ir adelantado, lleva instalados Git y un harness como opencode o Claude Code. No hace falta pagar nada para seguirlo: veremos modelos locales y gratuitos.

## Dónde y cómo apuntarse

- **Lugar:** Hackerspace Valencia, C/ de Francesc Martinez, 19, 46020 València (Benimaclet).
- **Inscripción:** en el [Meetup de Hackerspace Valencia](https://www.meetup.com/es-ES/hackerspace-valencia/), en cuanto publiquemos la fecha.
- Las plazas son limitadas. Si te apuntas y al final no puedes venir, borra tu inscripción para que entre otra persona.
