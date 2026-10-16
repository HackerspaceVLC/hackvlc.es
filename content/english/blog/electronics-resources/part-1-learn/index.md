---
translationKey: "blog-recursos-electronica-makers-parte-1-aprender"
title: "Resources for learning electronics (1/3): platforms, boards and projects"
description: "The best platforms to get started in electronics from scratch: Adafruit, SparkFun, Arduino, ESP32, Raspberry Pi Pico and repositories of real projects to learn from."
date: 2026-07-14T10:30:00+02:00
cover: cover-parte1.jpg
draft: false
tags: ["electronics", "arduino", "esp32", "raspberry-pi", "resources", "learning"]
author: "Hackerspace Valencia"
---
It has never been easier to learn electronics than it is today. The maker community has spent decades sharing projects, documentation and experience that let you build up knowledge without needing a professional lab to start from.

The key isn't to check hundreds of different sites, but to know which ones to use at each stage. In this first part we bring together the most useful resources for getting started, learning the fundamentals and building your first projects.

This is **part 1 of 3** of our [guide to electronics resources](/en/blog/electronics-resources/). In [part 2](/en/blog/electronics-resources/part-2-design/) we cover hardware design, and in [part 3](/en/blog/electronics-resources/part-3-fabricate/) fabrication, community and frequently asked questions.

## A path to learn electronics from scratch

After seeing all these resources, it's natural to wonder where to start. The good news is that you don't need to learn everything at once. If you're a beginner, this path can serve as a reference.

### Level 1. Understand the fundamentals

Learn what a resistor does, how a capacitor behaves, how a bipolar transistor differs from a MOSFET or how protocols like I²C, SPI and UART work.

- [All About Circuits Textbook](https://www.allaboutcircuits.com/textbook/) - a complete, free theory reference (on the denser side)
- *The Art of Electronics* by Paul Horowitz and Winfield Hill - the electronics reference book. It's neither free nor light, but if you take it seriously it's the investment that pays off most.
- *Electronics* by Allan R. Hambley - a very approachable university textbook with worked examples. Ideal for a structured foundation without too much theory.
- *Practical Electronics for Inventors* by Paul Scherz and Simon Monk - very practical and visual, with hundreds of real circuits and little maths.
- [Adafruit Learning System](https://learn.adafruit.com)
- [SparkFun Learn](https://learn.sparkfun.com)
- [Falstad Circuit Simulator](https://falstad.com/circuit/)

### Level 2. Build simple projects

Arduino is the best platform to start with. Once you feel comfortable, explore the ESP32, Raspberry Pi Pico or STM32.

- [Arduino Project Hub](https://projecthub.arduino.cc)
- [Hackster.io](https://www.hackster.io)
- [DFRobot Wiki](https://wiki.dfrobot.com)
- [M5Stack](https://docs.m5stack.com)

### Level 3. Design your first PCB

Start with [KiCad](https://www.kicad.org) or [EasyEDA](https://easyeda.com) and design simple circuits. You'll learn to find components and read datasheets.

- [KiCad](https://www.kicad.org)
- [DigiKey](https://www.digikey.com)
- [SnapMagic](https://www.snapmagic.com)
- [AllDatasheet](https://www.alldatasheet.com)

### Level 4. Read the official documentation

Get into the habit of going straight to the documentation from manufacturers like [Texas Instruments](https://www.ti.com), [STMicroelectronics](https://www.st.com), [Microchip](https://www.microchip.com) or [Espressif](https://www.espressif.com).

### Level 5. Simulate before you fabricate

Use [LTspice](https://www.analog.com/ltspice), [QUCS](https://qucs.sourceforge.io/), [SimulIDE](https://simulide.com/p/) or [Falstad](https://falstad.com/circuit/) to validate your circuit before fabricating it.

### Level 6. Fabricate your first prototypes

Send your designs to [JLCPCB](https://jlcpcb.com) or [PCBWay](https://www.pcbway.com) and get professional boards back in a few days. Don't be afraid to fabricate an imperfect first revision.

### Level 7. Learn from other engineers

Explore projects on [GitHub](https://github.com), review designs on [Kitspace](https://kitspace.org) and join the [EEVblog Forum](https://www.eevblog.com/forum) or the [KiCad Forum](https://forum.kicad.info).

### Level 8. Never stop learning

Electronics keeps evolving. The best investment you can make isn't buying the most expensive equipment, but staying curious and learning something new with every project.

---

Below we go through the resources for each stage in detail. We start with **part 1: learning electronics**.

## Learn the fundamentals

Before building circuits or designing a PCB, it's worth understanding how electronic components and the most common technologies work. These platforms stand out for the quality of their explanations and for combining theory with practical examples.

If you've never picked up a soldering iron or built a circuit, don't worry: the resources in this section are designed precisely for starting from zero.

{{< figure src="aprende.jpg" alt="Breadboard with electronic components" caption="A breadboard lets you build circuits without soldering, perfect for your first experiments." >}}

### All About Circuits - Textbook

If you're after a solid theoretical grounding in analogue electronics, the [All About Circuits textbook](https://www.allaboutcircuits.com/textbook/) is one of the best free references available. It covers DC, AC, semiconductors, digital circuits and analogue electronics in a level of detail you rarely find in a tutorial.

Start with [static electricity and the fundamentals of direct current](https://www.allaboutcircuits.com/textbook/direct-current/chpt-1/static-electricity/) and work your way up to filter design and op-amps. It's denser and more theoretical than Adafruit or SparkFun, so there's no need to read it cover to cover: use it as a reference to really understand a concept when the more hands-on tutorials fall short.

**Especially useful for:** analogue electronics, theoretical fundamentals, DC and AC, semiconductors, reference lookups.

### Adafruit Learning System

If we had to recommend a single site for starting to learn practical electronics, it would probably be the [Adafruit Learning System](https://learn.adafruit.com).

Although it started as Adafruit's educational portal, it now hosts hundreds of tutorials on sensors, displays, communications, microcontrollers, IoT and open hardware. Most of its guides explain not only how to use a component, but also why it works and what the best practices are for integrating it into a project.

**Especially useful for:** first projects, sensors and breakout modules, displays, IoT, open hardware.

### SparkFun Learn

[SparkFun Learn](https://learn.sparkfun.com) complements Adafruit perfectly, with a slightly stronger focus on electronics fundamentals.

Its tutorials clearly explain concepts like voltage regulation, communication protocols, sensors or embedded systems, backed up with schematics, examples and easily reproducible projects.

**Especially useful for:** electronics fundamentals, communication protocols, sensors, embedded systems, hands-on projects.

## Learn by building projects

Theory matters, but electronics is learnt by building circuits. The following platforms offer official documentation, examples and tools that let you get going quickly with some of the ecosystems most widely used by makers and professionals alike.

### Arduino

[Arduino](https://docs.arduino.cc) has been the gateway to electronics for millions of people. Its ecosystem combines open hardware boards, carefully written documentation and thousands of examples that let you build projects from day one.

**Especially useful for:** learning electronics, automation, sensors and actuators, education, rapid prototyping.

You can also explore thousands of community projects on the [Arduino Project Hub](https://projecthub.arduino.cc).

{{< figure src="arduino.jpg" alt="Arduino UNO board" caption="Arduino is the most widely used platform for getting started in electronics." >}}

### ESP32 and Espressif

When a project needs Wi-Fi or Bluetooth connectivity, the ESP32 has become one of the most popular platforms on the market. Beyond the hardware, [Espressif](https://www.espressif.com) provides high-quality technical documentation with reference schematics, design notes and examples that are very useful both for learning and for developing commercial products.

**Especially useful for:** IoT, Wi-Fi and Bluetooth, reference hardware, electronic design, connected products.

The official documentation for ESP-IDF (the development framework) is at [docs.espressif.com](https://docs.espressif.com).

{{< figure src="esp32.jpg" alt="ESP32-C3 module" caption="The ESP32 brings Wi-Fi and Bluetooth to your projects for very little money." >}}

### Raspberry Pi Pico

The [Raspberry Pi Pico](https://www.raspberrypi.com/documentation/) family offers a simple, affordable way into embedded systems. Its documentation stands out for the clarity of its examples and for explaining in detail how the RP2040 microcontroller works, which makes it easier to grasp concepts you can later apply to other platforms.

{{< figure src="raspberry-pi.jpg" alt="Raspberry Pi family" caption="The Raspberry Pi family, from the Pico to the Pi 5, spans everything from microcontrollers to complete computers." >}}

### STM32 and STMicroelectronics

STM32 microcontrollers are a benchmark in professional electronics. [STMicroelectronics](https://www.st.com) backs its products with extensive documentation, evaluation boards and application notes that let you make the leap from maker projects to industrial designs.

## Manufacturers with excellent documentation

One of the biggest changes electronics has seen over the last two decades is the rise of manufacturers that, as well as selling hardware, invest huge amounts of resources in producing quality technical documentation.

Step-by-step tutorials, schematics, wiring examples, complete projects and user guides let you learn new components far faster than by reading a datasheet alone. Although much of this content focuses on their own products, the concepts and techniques they explain apply to practically any electronics project.

### DFRobot Wiki

After Adafruit and SparkFun, [DFRobot](https://wiki.dfrobot.com) probably maintains one of the largest documentation repositories for makers. Its wiki brings together hundreds of tutorials on sensors, robotics, computer vision, artificial intelligence, IoT and embedded systems. Most articles include photos, wiring diagrams, code examples and very detailed explanations.

**Especially useful for:** sensors, robotics, Arduino and ESP32, artificial intelligence, STEM education.

### Pololu

Although [Pololu](https://www.pololu.com) is best known for its motor drivers, voltage regulators and electronic modules, many engineers regularly check its documentation even when they don't use its products.

Every module comes with explanations of how it works internally, performance curves, design recommendations and application examples. Its tutorials on power electronics, motor control and robotics are especially instructive.

**Especially useful for:** motor drivers, power electronics, DC/DC converters, robotics, voltage regulators.

### Pimoroni

[Pimoroni](https://shop.pimoroni.com) makes a wide range of boards and accessories for the Raspberry Pi, Raspberry Pi Pico and various microcontrollers. Beyond the hardware, it publishes plenty of documentation, examples and projects that make learning much easier. It's a great reference for anyone working with displays, sensors, LED lighting and interactive devices.

**Especially useful for:** Raspberry Pi, Raspberry Pi Pico, displays, sensors, LEDs.

### M5Stack

[M5Stack](https://docs.m5stack.com) has built one of the most complete ecosystems around the ESP32, with dozens of compatible modules that let you put together IoT devices, industrial automation or HMI interfaces in very little time. The whole platform comes with very extensive documentation and plenty of examples.

**Especially useful for:** ESP32, IoT, automation, Industry 4.0, rapid prototyping.

### Waveshare

[Waveshare](https://www.waveshare.com/wiki) makes hundreds of modules compatible with platforms like Raspberry Pi, ESP32, STM32, Jetson or Arduino. Practically all its products include schematics, technical documentation and usage examples, making it an excellent source for discovering new peripherals and learning to integrate them properly.

**Especially useful for:** TFT and e-paper displays, cameras, sensors, communications, Raspberry Pi.

### Seeed Studio Wiki

As well as making hardware, [Seeed Studio](https://wiki.seeedstudio.com) maintains one of the most complete documentation libraries for its products. The guides for the XIAO, Grove and SenseCAP boards include schematics, practical examples and design recommendations.

**Especially useful for:** IoT, Grove, XIAO, sensors, open hardware.

## Learn by studying real projects

Once you've mastered the basics, the next step is to analyse how other developers solve real problems. Studying complete projects helps you understand design decisions, discover new technologies and learn different ways of tackling the same challenge.

### Hackster.io

[Hackster.io](https://www.hackster.io) is one of the best platforms for learning by building complete projects. Each post usually includes the schematic, the parts list, photos of the build, detailed explanations and the code needed to reproduce the project.

**Especially useful for:** IoT, robotics, ESP32 and Arduino, artificial intelligence, complete projects.

### Hackaday

[Hackaday](https://hackaday.com) has become a go-to for anyone interested in open hardware and tech innovation. Every day it publishes surprising projects covering electronics, reverse engineering, digital fabrication, scientific instrumentation and embedded systems.

**Especially useful for:** open hardware, innovation, reverse engineering, digital fabrication, inspiration.

### Hackaday.io

Alongside the well-known blog, [Hackaday.io](https://hackaday.io) hosts a community where thousands of developers document how their projects evolve. Many of them share schematics, PCB designs, KiCad files, bills of materials and 3D models.

**Especially useful for:** open hardware, PCB design, IoT, robotics, collaborative projects.

### Instructables

[Instructables](https://www.instructables.com) has been a reference in the Do It Yourself movement for years. Although it covers projects from very diverse disciplines, its electronics section includes a huge number of thoroughly documented builds, from small educational circuits to robots, weather stations, 3D printers and home automation systems.

**Especially useful for:** step-by-step projects, educational electronics, robotics, home automation, makers.

### Arduino Project Hub

The [Arduino Project Hub](https://projecthub.arduino.cc) collects thousands of projects built by the community and by the Arduino team itself. It's a superb complement to the official documentation, since it shows how other users combine sensors, actuators and electronic modules into complete solutions.

**Especially useful for:** Arduino, sensors, automation, educational projects, prototypes.

---

## Next step

You now know where to learn the fundamentals and where to find real projects. In **[part 2](/en/blog/electronics-resources/part-2-design/)** we'll look at the tools for designing your own hardware: PCB software, component search engines, CAD libraries, manufacturer documentation and simulation.

## Image credits

All images come from [Wikimedia Commons](https://commons.wikimedia.org) and are used under their respective licences:

- **Cover** - *DIY Arduino LED screen for audio spectrum analyzer 1* - CC0 - [source](https://commons.wikimedia.org/wiki/File:DIY_Arduino_LED_screen_for_audio_spectrum_analyzer_1.jpg)
- **Breadboard** - *400 points breadboard* - CC BY-SA 2.0 - [source](https://commons.wikimedia.org/wiki/File:400_points_breadboard.jpg)
- **Arduino UNO** - *Arduino UNO RTC* - CC BY 4.0 - [source](https://commons.wikimedia.org/wiki/File:Arduino_UNO_RTC.jpg)
- **ESP32-C3** - *ESP32-C3 with Traffic Light Module* - CC0 - [source](https://commons.wikimedia.org/wiki/File:ESP32-C3_with_Traffic_Light_Module.jpg)
- **Raspberry Pi family** - *Raspberry Pi 1, Pi 5, Pi 400, Pico and Zero 2* - CC BY-SA 4.0 - [source](https://commons.wikimedia.org/wiki/File:Raspberry_Pi_1,_Pi_5,_Pi_400,_Pico_and_Zero_2.jpg)
