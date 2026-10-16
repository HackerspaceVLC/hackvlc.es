---
translationKey: "blog-recursos-electronica-makers-parte-2-disenar"
title: "Resources for designing hardware (2/3): PCBs, components and simulation"
description: "PCB design software, component search engines, CAD libraries, datasheets, manufacturer documentation and simulation tools to validate your circuit before you fabricate it."
date: 2026-07-14T10:20:00+02:00
cover: diseno-pcb.jpg
draft: false
tags: ["electronics", "pcb", "kicad", "datasheet", "simulation", "resources"]
author: "Hackerspace Valencia"
---
At some point, breadboard prototypes start to feel too small. That's when you need to design your own PCB, choose components, read datasheets and get the circuit ready for fabrication.

A **PCB** (printed circuit board) is the board that holds your circuit's components and connects them electrically through copper traces. A **datasheet** is the technical document in which the manufacturer describes how to use a component. These two concepts will be your travelling companions from here on.

This is **part 2 of 3** of our [guide to electronics resources](/en/blog/electronics-resources/). If you missed the first one, take a look at [part 1: learning electronics](/en/blog/electronics-resources/part-1-learn/). In [part 3](/en/blog/electronics-resources/part-3-fabricate/) we'll talk about fabrication, community and a recommended learning path.

{{< figure src="diseno-pcb.jpg" alt="Printed circuit board schematic" caption="Designing a PCB involves much more than drawing traces: you have to choose components, read datasheets and validate the design." >}}

## PCB design software

The first step is choosing an electronic design tool. These programs let you draw the schematic, lay out the PCB, run design rule checks, view the board in 3D and generate the files needed to fabricate it.

### KiCad

If we had to recommend a single program for getting started with PCB design, it would probably be [KiCad](https://www.kicad.org).

In recent years it has grown into one of the most complete electronic design suites on the market. It lets you build professional projects with no licence cost, and it has a very active community that keeps tutorials, libraries and documentation constantly up to date. As well as schematic capture and PCB layout, it includes a 3D viewer, design rule checking (DRC), library management and direct Gerber output.

**Especially useful for:** PCB design, schematics, 3D visualisation, open source hardware, professional projects.

### EasyEDA

[EasyEDA](https://easyeda.com) is a very interesting alternative for anyone who prefers working straight from the browser. Its biggest advantage is its integration with fabrication services like JLCPCB, which makes the jump from design to prototype much easier. Although it has fewer advanced features than other tools, it's an excellent choice for personal projects and first PCBs.

**Especially useful for:** first PCBs, quick prototypes, working online, integration with fabrication.

### Altium Designer

[Altium Designer](https://www.altium.com) remains one of the industry standards for developing complex electronic products. Many companies use it for projects with hundreds or thousands of components, where team collaboration, advanced stack-up management and design rules play a crucial role. Although its licence is expensive, it's worth knowing because many modern tools have adopted similar concepts.

**Especially useful for:** professional electronics, advanced design, industrial projects, multilayer PCBs.

## Finding components

Choosing the right component goes far beyond checking that it meets a set of electrical specs. You should also weigh up availability, package, price, how easy it is to find alternatives and whether CAD models exist.

### DigiKey

Although most people know [DigiKey](https://www.digikey.com) as one of the largest electronic component distributors in the world, its parametric search is an extraordinary tool even when you don't plan to buy there.

It lets you compare thousands of part numbers with very detailed filters, check official datasheets, find equivalent parts and access CAD models ready for different design programs. DigiKey is often the first place to start looking for any component.

**Especially useful for:** comparing components, finding alternatives, checking datasheets, locating CAD models, seeing availability.

### Mouser Electronics

[Mouser](https://www.mouser.com) offers a very similar experience to DigiKey and stands out for its huge catalogue of specialist manufacturers. As well as comparing components with technical filters, many part numbers include direct links to application notes, evaluation boards and additional documentation.

**Especially useful for:** industrial components, technical comparison, additional documentation, compatible alternatives.

### Octopart

While DigiKey and Mouser mainly show their own catalogue, [Octopart](https://octopart.com) acts as a distributor aggregator. That lets you quickly compare availability, prices and suppliers for the same part number, which is especially useful when a component has long lead times or supply problems.

**Especially useful for:** comparing prices, finding stock, finding alternatives, purchasing.

### OEMsecrets BoM Tool

The [OEMsecrets BoM Tool](https://bomtool.oemsecrets.com/) is built for managing bills of materials (BOMs). Paste in your list of part numbers and it checks stock and prices across multiple distributors at once, so you can compare options and optimise a project's cost before you buy. It's especially handy when you're working with long parts lists and need a quick overview of availability and price.

**Especially useful for:** comparing prices across distributors, BOM management, checking stock for many part numbers at once.

## CAD libraries

Once you've chosen the components, you hit one of the most repetitive tasks in electronic design: tracking down schematic symbols, footprints and 3D models that work with your CAD program.

A **footprint** is the physical drawing of the copper pads where a specific component will be soldered on the PCB. Each package needs its own footprint.

### SnapMagic (formerly SnapEDA)

[SnapMagic](https://www.snapmagic.com) is probably the largest library of schematic symbols, footprints and 3D models available online. You can download components ready for KiCad, Altium, OrCAD, Eagle and many other programs. It's one of those sites that ends up permanently open while you design a PCB.

**Especially useful for:** schematic symbols, footprints, STEP models, KiCad, Altium.

### Ultra Librarian

When a component isn't on SnapMagic, [Ultra Librarian](https://www.ultralibrarian.com) is usually the next stop. Its huge database holds millions of electronic models compatible with most CAD programs on the market.

**Especially useful for:** hard-to-find components, 3D models, footprints, professional libraries.

### Component Search Engine (SamacSys)

[SamacSys](https://componentsearchengine.com) provides verified libraries and offers plugins that import components directly into KiCad, Altium and other design programs. That integration speeds up the workflow enormously.

**Especially useful for:** automatic import, KiCad, Altium, verified libraries.

## Datasheets and technical documentation

Many beginners look for an online tutorial first. With experience, though, you find that the official documentation usually answers most questions.

Datasheets don't just list a component's electrical characteristics; they also include design recommendations, operating limits, application examples and, in many cases, complete circuits. Getting used to reading this documentation from the start will greatly improve the quality of your designs.

### AllDatasheet

When you know a component's exact part number, [AllDatasheet](https://www.alldatasheet.com) is usually the fastest way to find its datasheet. You should always download the latest version from the manufacturer afterwards, but it's very handy for quick lookups.

### Datasheet Archive

[Datasheet Archive](https://www.datasheetarchive.com) is especially useful when you're working with old or obsolete components that are no longer easy to find on official sites.

### Before you go on...

At this point, many designers make a very common mistake: assuming the datasheet contains all the information needed to use a component.

In reality, datasheets are only a small part of the documentation manufacturers publish. Most of them also offer **application notes**, **reference designs**, calculators, PCB examples and simulation tools that are even more useful during the development of a project.

{{< figure src="componentes.jpg" alt="Electronic components" caption="Manufacturers publish documentation that goes far beyond the datasheet: application notes, reference designs and simulation tools." >}}

## Official manufacturer documentation

Over time you'll find that much of an electronics designer's work consists of reading the documentation published by the manufacturers themselves. As well as datasheets, many companies offer application notes, reference designs, simulation tools, calculators, PCB examples and evaluation boards.

### Analogue electronics and power conversion

When you're working with power supplies, DC/DC converters, op-amps, filters or analogue instrumentation, these manufacturers are essential references.

**Texas Instruments.** [TI](https://www.ti.com) has probably one of the largest technical libraries in the industry. As well as thousands of datasheets, it publishes very detailed application notes, SPICE models, design calculators and the TI Designs platform.

**Analog Devices.** [ADI](https://www.analog.com) stands out for the quality of its documentation on data acquisition, instrumentation and precision analogue electronics. As well as publishing excellent application notes, it develops LTspice, one of the most widely used SPICE simulators.

**onsemi.** [onsemi](https://www.onsemi.com) has a wide range of components for power electronics, sensors and automotive. Its application notes are especially recommended for understanding the design of converters and power supplies.

### Microcontrollers and embedded systems

If the project includes a microcontroller, these manufacturers publish a huge amount of documentation that goes well beyond the datasheets.

**Microchip.** [Microchip](https://www.microchip.com) maintains one of the largest collections of documentation for PIC, AVR and SAM microcontrollers. Its application notes have been a reference for decades.

**STMicroelectronics.** [ST](https://www.st.com) backs the STM32 family with application notes, dev boards and technical documentation that include complete schematics and PCB layout recommendations.

**Renesas.** [Renesas](https://www.renesas.com) is one of the largest microcontroller manufacturers in the world, focused on industrial and automotive applications where reliability and long-term support are priorities.

### IoT and wireless communications

Connected devices require extra knowledge about antennas, power consumption, RF certification and wireless protocols.

**Espressif.** [Espressif](https://www.espressif.com) has become a reference for IoT device development thanks to the success of the ESP32. It publishes reference hardware, RF design recommendations and certifications.

**Nordic Semiconductor.** [Nordic](https://www.nordicsemi.com) is one of the most important manufacturers in Bluetooth Low Energy and ultra-low-power devices.

**Silicon Labs.** [Silicon Labs](https://www.silabs.com) develops solutions for wireless communications and low-power IoT systems, with plenty of reference designs for Bluetooth, Zigbee and Matter.

**NXP Semiconductors.** [NXP](https://www.nxp.com) has a very broad catalogue of processors, microcontrollers and connectivity solutions aimed at industrial and automotive applications.

### A tip that will change how you design hardware

There's one habit that quickly sets an experienced designer apart from a beginner: **always check the reference designs published by the manufacturer**.

When a company like Texas Instruments, STMicroelectronics or Espressif publishes an example circuit, that design has been developed and validated by the very engineers who know the component better than anyone. Studying those schematics usually teaches you far more than copying a circuit you stumbled across online.

{{< figure src="simulacion.jpg" alt="Digital oscilloscope in use" caption="Learning to measure is as important as learning to design. An oscilloscope lets you see what's really happening in your circuit." >}}

## Simulation: catch mistakes before you fabricate

Fabricating a PCB only to discover that a filter doesn't behave as expected or that a power supply oscillates can be frustrating and expensive.

Although no simulation fully replaces real-world testing, these tools let you validate much of the circuit's behaviour before you fabricate the first prototype. As well as saving time and money, they help you understand much better how the different blocks of a circuit interact.

### LTspice

[LTspice](https://www.analog.com/ltspice) has for years been one of the SPICE simulators most used by engineers around the world. It particularly shines at analysing power supplies, DC/DC converters, amplifiers, analogue filters and power circuits. Its accuracy and the huge number of models available make it an essential tool.

**Especially useful for:** power supplies, DC/DC converters, analogue filters, amplifiers, power electronics.

### QUCS

[QUCS](https://qucs.sourceforge.io/) (Quite Universal Circuit Simulator) is a free (GPL) circuit simulator that excels at RF and microwave analysis. Unlike LTspice, which focuses on analogue and power circuits, QUCS supports S-parameter, harmonic balance, noise and AC/DC analysis. It can import SPICE models and has a Qt-based graphical interface.

It's the go-to tool for anyone designing RF amplifiers, microwave filters, antennas or wireless communication circuits who needs something more powerful than a generic simulator without paying for a licence.

**Especially useful for:** RF, microwave, S-parameters, harmonic balance, RF filters.

### SimulIDE

[SimulIDE](https://simulide.com/p/) is a simple, fast, real-time electronic circuit simulator aimed at students and hobbyists. Unlike LTspice, which focuses on advanced analogue analysis, SimulIDE lets you drag components in, wire them up and hit the power button to see how the circuit behaves interactively.

It supports analogue and digital components and microcontrollers (PIC, AVR, Arduino), and includes a code editor with a debugger. It also has a virtual oscilloscope, logic analyser and serial monitor. It's free software (AGPLv3) and a fantastic option for beginners who want to experiment without building the physical circuit.

**Especially useful for:** learning electronics, interactive simulation, Arduino and PIC, digital circuits, education.

### Falstad Circuit Simulator

[Falstad](https://falstad.com/circuit/) is one of the best simulators for understanding the fundamentals of electronics. It lets you build small circuits right in the browser and see in real time how current flows, how voltages change and how tweaking any component affects the result.

**Especially useful for:** learning electronics, basic circuits, visualising how things work, education.

### Wokwi

[Wokwi](https://wokwi.com) has become one of the maker community's favourite simulators. It runs firmware for boards like the Arduino, ESP32 or Raspberry Pi Pico, lets you hook up virtual sensors, displays, LEDs and I²C devices, and lets you check your program works before you even have the physical hardware.

**Especially useful for:** Arduino, ESP32, Raspberry Pi Pico, IoT, fast development.

## Test equipment: learning to measure

Designing a circuit is only part of the job. When it's time to check that everything works properly, measurement tools become your best allies.

Learning to use an oscilloscope, a logic analyser or a bench power supply properly helps you understand a circuit's behaviour much better and track down problems that would be impossible to spot just by reviewing the schematic.

{{< figure src="multimetro.jpg" alt="Digital multimeter" caption="The multimeter is the most basic and most widely used measuring tool in electronics." >}}

### EEVblog

[EEVblog](https://www.eevblog.com) is an international reference in professional electronics. For years Dave Jones has been publishing reviews and teardowns of oscilloscopes, multimeters, logic analysers, thermal cameras and all kinds of lab equipment.

**Especially useful for:** oscilloscopes, multimeters, logic analysers, test equipment, professional electronics.

### Keysight Learn

[Keysight](https://www.keysight.com) publishes a huge amount of free documentation on electronic test equipment. Its guides explain concepts like signal integrity, timing analysis, high-speed measurements and spectrum analysers.

**Especially useful for:** oscilloscopes, signal integrity, RF, professional test equipment.

### Tektronix Learn

[Tektronix](https://www.tek.com) maintains one of the most complete educational libraries on test equipment, with articles and guides covering everything from basic oscilloscope use to advanced debugging techniques.

**Especially useful for:** oscilloscopes, electronic measurements, debugging, signal analysis.

---

## Next step

You now have the tools to design hardware and validate your circuits. In **[part 3](/en/blog/electronics-resources/part-3-fabricate/)** we'll see how to turn your design into a real board: PCB manufacturers, open source repositories, technical communities and a complete path for learning electronics from scratch.

← [Part 1: Learning electronics](/en/blog/electronics-resources/part-1-learn/)

## Image credits

All images come from [Wikimedia Commons](https://commons.wikimedia.org) and are used under their respective licences:

- **Cover and PCB schematic** - *Circuit board schematic* - CC BY-SA 3.0 - [source](https://commons.wikimedia.org/wiki/File:Circuit_board_schematic.jpg)
- **Electronic components** - *Componentes* - Public domain - [source](https://commons.wikimedia.org/wiki/File:Componentes.JPG)
- **Digital oscilloscope** - *Digital oscilloscope in use* - CC BY-SA 4.0 - [source](https://commons.wikimedia.org/wiki/File:Digital_oscilloscope_in_use.jpg)
- **Digital multimeter** - *2017 Cyfrowy miernik uniwersalny* - CC BY-SA 4.0 - [source](https://commons.wikimedia.org/wiki/File:2017_Cyfrowy_miernik_uniwersalny.jpg)
