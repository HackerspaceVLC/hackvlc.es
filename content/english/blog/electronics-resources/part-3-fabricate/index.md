---
translationKey: "blog-recursos-electronica-makers-parte-3-fabricar"
title: "Resources for fabrication, community and a learning path (3/3)"
description: "PCB manufacturers, open source repositories, technical communities and a step-by-step path to learn electronics from scratch all the way to fabricating your own boards."
date: 2026-07-14T10:10:00+02:00
cover: comunidad.jpg
draft: false
tags: ["electronics", "pcb", "fabrication", "community", "open-source", "resources"]
author: "Hackerspace Valencia"
---
Once the design is finished, it's time to turn the project files into a real circuit. Thanks to how far electronics manufacturing has come, today you can get professional PCBs made in a few days and at very low cost, something unthinkable just a few years ago.

As well as fabricating boards, many suppliers offer **SMT assembly** (automated surface-mount component placement), component sourcing, stencils and even machining and 3D printing. That means you can develop a complete product using practically a single supplier.

This is **part 3 of 3** of our [guide to electronics resources](/en/blog/electronics-resources/). If you missed the previous ones, start with [part 1: learning electronics](/en/blog/electronics-resources/part-1-learn/) or [part 2: designing hardware](/en/blog/electronics-resources/part-2-design/).

{{< figure src="comunidad.jpg" alt="DIY electronics workshop" caption="Sharing projects and questions with other makers is one of the most effective ways to learn." >}}

## PCB manufacturers

Choosing a manufacturer mainly depends on budget, lead time, design complexity and production volume. There's no perfect option for every project, but some platforms are especially well suited to particular needs.

### JLCPCB

In just a few years [JLCPCB](https://jlcpcb.com) has become the PCB manufacturer most used by the maker community and by thousands of small engineering companies. Its combination of very competitive prices, short fabrication times and a huge catalogue of parts for SMT assembly makes it one of the best options for prototyping.

**Especially useful for:** first prototypes, small production runs, SMT assembly, low-cost fabrication, commercial products.

### PCBWay

[PCBWay](https://www.pcbway.com) is another major international reference. As well as PCBs, it offers CNC machining, 3D printing, injection moulding, sheet metal fabrication and electronics assembly, which makes it a very interesting platform when a project combines electronics and mechanics. Its support for open source projects has also made it a well-known name in the maker community.

**Especially useful for:** multilayer PCBs, flex PCBs, CNC machining, 3D printing, end-to-end prototype development.

### Seeed Studio Fusion

[Seeed Studio Fusion](https://www.seeedstudio.com/fusion.html) lets you fabricate and assemble PCBs and produce small runs, and integrates with platforms like Grove and XIAO. It's especially interesting for educational, IoT and open hardware projects.

**Especially useful for:** open hardware, education, IoT, prototypes, small production runs.

### Eurocircuits

When a project needs to be manufactured within Europe, [Eurocircuits](https://www.eurocircuits.com) remains one of the industry references. Although it's usually more expensive than some Asian manufacturers, it offers responsive technical support, excellent lead times and design validation tools.

**Especially useful for:** industrial development, engineering companies, European prototypes, advanced validation.

### Aisler

[Aisler](https://aisler.net) has become very popular with European universities, startups and developers thanks to how simple its platform is. As well as fabricating PCBs, it offers electronics assembly for small runs and a very intuitive ordering process.

**Especially useful for:** quick prototypes, European makers, universities, low-volume production.

### OSH Park

Few companies are as well known in the open hardware movement as [OSH Park](https://oshpark.com). Its distinctive purple boards have become a symbol of the maker community, and it's still an excellent choice for fabricating small quantities at very high quality.

**Especially useful for:** open hardware, personal projects, prototypes, small runs.

### Other alternatives

- [ALLPCB](https://www.allpcb.com) - fast fabrication, SMT assembly and electronics production.
- [NextPCB](https://www.nextpcb.com) - combines fabrication, assembly, component sourcing and functional testing.
- [PCBGoGo](https://www.pcbgogo.com) - handy for comparing quotes and configurations.

### Which manufacturer should I choose?

There's no perfect manufacturer for every project.

If you want a few prototypes at the lowest possible cost, **JLCPCB** and **PCBWay** are usually the go-to options for most makers. If you work with open hardware or platforms like Grove and XIAO, **Seeed Fusion** offers very interesting integration. When manufacturing in Europe, technical support or traceability are priorities, **Eurocircuits** and **Aisler** are excellent alternatives. And **OSH Park** is still a reference for small open hardware projects.

{{< figure src="fabricacion-pcb.jpg" alt="Printed circuit board with SMT components" caption="Today you can get professional PCBs made in a few days and at very low cost." >}}

## Open source repositories: learn from real projects

The best way to improve as an electronics designer isn't just building your own circuits. Studying how other engineers have solved similar problems lets you discover new design techniques, compare different solutions and learn good practice.

Thanks to the open source movement, you can now access thousands of complete projects for free, including schematics, PCB designs, firmware, bills of materials, 3D models and even fabrication documentation.

### GitHub

[GitHub](https://github.com) has become the largest library of electronics projects in the world. Beyond firmware, thousands of developers publish schematics, KiCad files, bills of materials and complete documentation for their products.

**Especially useful for:** open source hardware, firmware, reference designs, KiCad, libraries, complete projects.

### GitLab

Although less popular than GitHub, [GitLab](https://gitlab.com) also hosts many open hardware and embedded systems projects. Many companies use it as a platform for collaborative development and version control.

**Especially useful for:** collaborative development, open hardware, version control, project management.

### Kitspace

[Kitspace](https://kitspace.org) makes it easy to share complete open hardware projects. Many developers publish their designs there along with the bill of materials, links to distributors and fabrication files, so their projects are easy to reproduce.

**Especially useful for:** open hardware, BOMs, KiCad, fabrication.

### Awesome Electronics

GitHub hosts many curated collections known as *Awesome Lists*. Among them, [Awesome Electronics](https://github.com/kitspace/awesome-electronics) brings together hundreds of tools, CAD programs, simulators, manufacturers, tutorials and open source projects related to electronics.

**Especially useful for:** tools, simulation, open hardware, training, technical resources.

### Crowd Supply

[Crowd Supply](https://www.crowdsupply.com) is much more than a platform for launching electronic products. Many of its projects come with excellent technical documentation and, in many cases, both the hardware and the firmware are fully open.

{{< figure src="github-os.jpg" alt="Printed circuit board traces" caption="The open source movement puts thousands of complete electronics projects within anyone's reach." >}}

## Learn with the community

However complete the documentation or however much experience you build up, there will always come a point where a problem shows up that you hadn't anticipated. A converter that generates too much noise, a communication interface that doesn't behave as expected or a PCB that needs a second revision before you send it off to be made.

In those situations, technical communities become one of your most valuable resources.

### Technical communities and forums

For decades, thousands of engineers, students and hobbyists have shared knowledge on specialist forums. Before posting a question, it's worth using the forum's own search: it's very likely someone else has run into the same problem.

**EEVblog Forum.** If we had to recommend a single forum for professional electronics, it would be the [EEVblog Forum](https://www.eevblog.com/forum). It brings together thousands of engineers specialising in analogue design, power electronics, test equipment, EMC, RF and PCB fabrication.

**Electronics Stack Exchange.** [Electronics Stack Exchange](https://electronics.stackexchange.com) is part of the Stack Exchange network and is geared towards technical questions. Answers are voted on by the community, which makes it easy to quickly find the best-documented solutions.

**All About Circuits.** As well as its library of articles and courses, [All About Circuits](https://forum.allaboutcircuits.com) has a very active community, especially recommended for beginners.

**KiCad Forum.** The official [KiCad](https://forum.kicad.info) forum is the ideal place to sort out questions about footprints, design rules, Gerber generation, 3D models or libraries.

**Arduino Forum.** The official [Arduino](https://forum.arduino.cc) forum is still a reference for hardware and programming questions.

**Espressif Developer Community.** The [Espressif community](https://developer.espressif.com) is excellent for questions about the ESP32, ESP-IDF, Wi-Fi, Bluetooth and Matter.

**Raspberry Pi Forums.** The official [Raspberry Pi](https://forums.raspberrypi.com) forums host a huge community dedicated to both the Raspberry Pi and the Raspberry Pi Pico.

### Reddit communities

- [r/AskElectronics](https://www.reddit.com/r/AskElectronics) - questions on design, components, repair and test equipment.
- [r/PrintedCircuitBoard](https://www.reddit.com/r/PrintedCircuitBoard) - PCB design and reviews before fabrication.

### Sharing projects is a way of learning too

Don't be afraid to ask for a schematic review, share a PCB design before fabricating it or ask why a circuit doesn't work. Most engineers learnt exactly that way, and many communities are very welcoming to people who show they want to improve.

## Conclusion

Learning electronics has never been so accessible. The internet puts free courses, official documentation, professional tools, open source repositories, technical communities and manufacturers able to produce a PCB in a matter of days within anyone's reach.

You don't need to master all these tools from the start. What matters is picking them up gradually, using them when you actually need them and building new projects consistently. Every finished circuit, every bug fixed and every PCB fabricated adds to your experience.

And if you want to put it into practice, we'll see you at [Hackerspace Valencia](/en/). If you don't know what a hackerspace is, read our [guide to understanding it](/en/blog/what-is-a-hackerspace/).

---

← [Part 2: Designing hardware](/en/blog/electronics-resources/part-2-design/) · [Part 1: Learning electronics](/en/blog/electronics-resources/part-1-learn/)

## Frequently asked questions

### What's the best resource for starting to learn electronics?

The [Adafruit Learning System](https://learn.adafruit.com) and [SparkFun Learn](https://learn.sparkfun.com) offer some of the most complete tutorials. Combined with small Arduino projects, they make an excellent starting point.

### Which program should I use to design my first PCBs?

[KiCad](https://www.kicad.org) is the best option to start with: free, cross-platform and with every feature you need for professional projects.

### Where can I search for electronic components?

[DigiKey](https://www.digikey.com) and [Mouser](https://www.mouser.com) have the most complete search engines. To compare prices across distributors, use [Octopart](https://octopart.com).

### Which PCB manufacturer is recommended for beginners?

[JLCPCB](https://jlcpcb.com) and [PCBWay](https://www.pcbway.com): competitive prices, short lead times and an easy-to-use platform.

### How can I find symbols and footprints for KiCad?

[SnapMagic](https://www.snapmagic.com), [Ultra Librarian](https://www.ultralibrarian.com) and [Component Search Engine](https://componentsearchengine.com).

### Is reading a component's datasheet enough?

No. Datasheets are only one part. You should also check the manufacturer's application notes and reference designs.

### What's the best way to keep improving?

Build your own projects. No tutorial replaces the experience of designing a circuit, fabricating a PCB, tracking down mistakes and improving the design in the next revision.

## Image credits

All images come from [Wikimedia Commons](https://commons.wikimedia.org) and are used under their respective licences:

- **Cover and DIY workshop** - *DIY Electronics for Music – Workshop with Brian Bamanya aka Afrorack* - CC BY-SA 2.0 - [source](https://commons.wikimedia.org/wiki/File:DIY_Electronics_for_Music_%E2%80%93_Workshop_with_Brian_Bamanya_aka_Afrorack.jpg)
- **Printed circuit board** - *Caviar 2340 Hard Drive Circuit Board Side 1* - CC0 - [source](https://commons.wikimedia.org/wiki/File:Caviar_2340_Hard_Drive_Circuit_Board_Side_1.jpg)
- **Printed circuit board traces** - *Labyrinthine circuit board lines* - CC BY 2.0 - [source](https://commons.wikimedia.org/wiki/File:Labyrinthine_circuit_board_lines_-_Flickr_-_quapan.jpg)
