---
translationKey: "blog-argus-1-nasa-space-apps"
title: "ARGUS-1: our rover for the NASA Space Apps Challenge 2026"
description: "A team from the hackerspace built, in one weekend, a tracked rover that prepares an astronaut's route on Mars at night: it moves rocks aside, goes around obstacles and never touches the science rocks."
date: 2026-11-16T12:00:00+01:00
publishDate: 2026-11-16T12:00:00+01:00
draft: false
tags: ["robotics", "esp32", "raspberry-pi", "computer-vision", "hackathon"]
author: "Hackerspace Valencia"
cover: cover.webp
---
In November, six hackerspace members took part in the **NASA Space Apps Challenge 2026**, NASA's international hackathon. We chose the challenge **"Interplanetary Survival Guide: Martian Map"** and in one weekend built **ARGUS-1**: a real rover with a robotic arm that drives, at night, the route an astronaut will walk on Mars the next day.

We didn't win a prize, but we came back with a working rover, a lot learned and very good memories.

{{< clip src="/videos/argus-1/demo-table-x2.mp4" poster="/videos/argus-1/demo-table-x2-poster.webp" caption="The rover on the demo table at 2x speed: it finds the orange block, picks it up and moves it aside, without touching the gold rocks." narrow="true" >}}

## The problem

The best orbital camera at Mars, HiRISE, sees about **25 cm per pixel**: a ball-sized rock is a single pixel. For an astronaut on foot, in a suit and carrying a load, that pixel can be a fall. And with the signal taking **3 to 22 minutes** to arrive from Earth, nobody can drive a rover live to check the path.

{{< figure src="zoom-jezero.webp" alt="Three real NASA images: Jezero crater, the Airfield Tau area and our 10 by 6 metre plot at HiRISE resolution" caption="From Jezero crater to Airfield Tau to our 10×6 m plot. At that scale, the best orbital image is a handful of pixels." >}}

We set the story at **Airfield Tau** in Jezero crater, where the Ingenuity helicopter landed and the Perseverance rover passed by.

## The idea: a night shift

While the crew sleeps, small and cheap rovers drive the next day's route and decide what to do with each rock:

- **Small rock on the path:** they pick it up with the arm, put it aside and photograph it before and after.
- **Big rock:** they mark it and the route goes around it.
- **Science rock:** they photograph it and **never touch it**, so nothing a geologist wants to study gets spoiled.

In the morning, the astronaut checks a map on a tablet with every stretch already checked on the ground.

{{< clip src="/videos/argus-1/night-shift.mp4" poster="/videos/argus-1/night-shift-poster.webp" caption="The night shift in the digital twin. The 3D rover is modelled on the real one, shown in the corner." >}}

## The rover

It is a tracked rover with a **CNC-machined chassis** and an **aluminium robotic arm**, plus a few 3D-printed parts (the gripper pads and a sample box). A **Raspberry Pi 5** handles vision and decisions, and an **ESP32** drives the motors and servos. If the Pi stops sending its heartbeat, the ESP32 stops everything. It can be driven with an Xbox controller and switched to autonomous mode with two buttons.

{{< figure src="rover.webp" alt="The rover from the side, the front and the back: tracked chassis, aluminium arm and the webcam mounted on the arm" caption="The rover on the hackathon table. The webcam rides on the arm, so the arm is also its neck." >}}

The demo runs on a **100×60 cm** table that stands for a real 10×6 m plot at 1:10 scale. The rocks are props: the black ones are landmarks, the gold ones are science targets and the orange block is the one the arm is allowed to move.

{{< clip src="/videos/argus-1/real-vs-mars.mp4" poster="/videos/argus-1/real-vs-mars-poster.webp" caption="Left, the real table from an overhead camera. Right, the same run placed at Airfield Tau, with the shared map updating." narrow="true" >}}

## A rock detector of our own

No off-the-shelf model knows what a "science rock" is, so we trained our own. We recorded thousands of frames from the rover's webcam, auto-labelled them by colour and shape, reviewed the doubtful ones by hand and trained a small **YOLO** model with three classes: movable, science and landmark. Quantized to INT8, it runs **on the Raspberry Pi itself at about 30 ms per frame**, with no internet connection.

{{< figure src="det-frame-1.webp" alt="Rover webcam frame with a box on each rock: movable blocks, one science rock and landmark rocks" caption="What the rover sees: movable blocks in yellow, the science rock in purple and landmarks in white." >}}

When the lighting at the venue changed, the gold rocks started to look like the block. We recorded and trained again until the model stopped confusing them in our tests. It mattered: a misclassified science rock is a rock the arm would grab.

## The AI doesn't move the hardware

The system has a language model to understand voice commands and narrate the mission, but it only chooses which task to run. Driving, approaching and grabbing are done by a deterministic program that finishes its route even if the connection drops. On Mars, the connection drops.

{{< figure src="morning-brief.webp" alt="Map of the plot with the route from A to B, rocks coloured by state and before and after photos" caption="The night-shift demo on argus1.earth: place rocks, run the shift and check the route in the morning." >}}

## Thanks

Thanks to the organisers of the NASA Space Apps Challenge in Valencia for making it possible, and to the team: Danielyss, Ignacio, José, Lua, Enrique and Eugeni.

The whole project is open:

- **Website with interactive demos and a 3D twin:** [argus1.earth](https://argus1.earth)
- **Pitch deck:** [slides.argus1.earth](https://slides.argus1.earth)
- **Source code:** [gitlab.com/hackerspacevlc1/space-apps-2026](https://gitlab.com/hackerspacevlc1/space-apps-2026)

If you want to see it in person or join the next one, come by the hackerspace on an [open-doors](/en/#contact) Tuesday.

*An independent team project, not affiliated with or endorsed by NASA. Orbital imagery: NASA/JPL-Caltech/University of Arizona (MRO HiRISE), via Mars Trek.*
