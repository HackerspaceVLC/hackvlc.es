---
title: "ARGUS-1"
date: 2026-11-15
image: /images/portfolio/argus-1.webp
summary: "Autonomous tracked rover with a robotic arm that prepares an astronaut's route on Mars at night. NASA Space Apps Challenge 2026."
description: "Tracked rover with a CNC-machined chassis and an aluminium arm that autonomously moves small rocks off a route, goes around big ones and photographs science rocks without touching them. Our own YOLO rock detector on a Raspberry Pi 5, and an ESP32 for motors and servos. Built for the NASA Space Apps Challenge 2026."
tags: ["rover", "robotics", "robotic-arm", "computer-vision", "yolo", "raspberry-pi-5", "esp32", "nasa-space-apps", "mars"]
categories: ["robotics", "electronics"]
featured: true
status: "completed"
difficulty: "advanced"
tech_stack: ["Raspberry Pi 5", "ESP32", "YOLO", "ONNX Runtime", "Python", "FastAPI", "PlatformIO", "three.js"]
repo_url: "https://gitlab.com/hackerspacevlc1/space-apps-2026"
demo_url: "https://argus1.earth"
---

> While the crew sleeps, a rover drives the route an astronaut will walk on Mars tomorrow: it moves the small rocks aside, goes around the big ones and never touches the science rocks.

A project by a hackerspace team for the **NASA Space Apps Challenge 2026**, challenge *"Interplanetary Survival Guide: Martian Map"*. The full story is on the blog: [ARGUS-1: our rover for the NASA Space Apps Challenge 2026](/en/blog/argus-1-nasa-space-apps/).

{{< clip src="/videos/argus-1/demo-table-x2.mp4" poster="/videos/argus-1/demo-table-x2-poster.webp" caption="Real demo at 2x speed: the rover finds the orange block, picks it up and moves it off the route." narrow="true" >}}

## What it does

On a 100×60 cm table that stands for a real 10×6 m plot at Airfield Tau (Jezero crater) at 1:10 scale, the rover drives the route from A to B and decides what to do with each rock:

| Rock | What the rover does |
|---|---|
| Small, on the path (orange block) | Picks it up with the arm and puts it aside. Photo before and after. |
| Big | Marks it and the route goes around it. |
| Science (gold) | Photographs it and never touches it. |
| Landmark (black) | Uses it to find its way. |

Everything it sees ends up on a shared map over real NASA imagery.

{{< figure src="images/zoom-jezero.webp" alt="Jezero crater, Airfield Tau and the 10 by 6 metre plot in HiRISE imagery" caption="From Jezero crater to Airfield Tau to the 10×6 m plot. Imagery: NASA/JPL-Caltech/University of Arizona (MRO HiRISE)." >}}

## Hardware

- **Tracked chassis** machined on a CNC.
- **Aluminium robotic arm** with servos, a gripper and a webcam mounted on the arm.
- **3D-printed parts:** gripper pads and a sample box (PETG HF).
- **Raspberry Pi 5:** vision, decisions and the rover's API.
- **ESP32:** motors and servos. Takes commands over USB or Bluetooth LE and stops everything if the Pi stops sending its heartbeat.
- **Xbox controller** over Bluetooth to drive it by hand and switch on autonomous mode.

{{< figure src="images/rover.webp" alt="The rover from the side, the front and the back" caption="The rover on the hackathon table." >}}

## Software

- **Our own rock detector:** a small YOLO model trained on frames recorded by the rover itself, with three classes (movable, science and landmark). Quantized to INT8 with ONNX Runtime, it takes about 30 ms per frame on the Pi.
- **Pilot (Python, FastAPI):** a deterministic executor that finds the rock, approaches it guided by the camera, grabs it and moves it aside. It keeps going if the connection drops.
- **Mission control:** a web dashboard with a map, telemetry and voice commands. The language model only picks the task; it never moves the hardware.
- **Firmware (PlatformIO):** a line protocol over serial or BLE, arm poses and controller input.
- **Digital twin (three.js):** the same rover in 3D, for testing without hardware.

{{< figure src="images/det-frame-1.webp" alt="Rover webcam frame with a box on each rock" caption="Detector output on a rover frame: movable blocks, one science rock and landmark rocks." >}}

{{< clip src="/videos/argus-1/real-vs-mars.mp4" poster="/videos/argus-1/real-vs-mars-poster.webp" caption="The real table from an overhead camera and the same run placed at Airfield Tau, with the shared map." narrow="true" >}}

## Team

Danielyss, Ignacio, José, Lua, Enrique and Eugeni.

## Links

- **Website with interactive demos and a 3D twin:** [argus1.earth](https://argus1.earth)
- **Pitch deck:** [slides.argus1.earth](https://slides.argus1.earth)
- **Source code:** [gitlab.com/hackerspacevlc1/space-apps-2026](https://gitlab.com/hackerspacevlc1/space-apps-2026)

*An independent team project, not affiliated with or endorsed by NASA.*
