---
translationKey: "blog-kicad-10-novedades"
title: "KiCad 10: new features and improvements for PCB design"
description: "What KiCad 10 really brings: design variants, a graphical rule editor, time-domain tuning, jumpers and Allegro and PADS importers, explained for makers."
date: 2026-10-30T08:00:00+01:00
publishDate: 2026-10-30T08:00:00+01:00
draft: false
tags: ["kicad", "pcb", "open-source", "electronics"]
author: "Hackerspace Valencia"
cover: cover.jpg
based_on: '<a href="https://kensocircuits.com/archivos/kicad-10-novedades-y-evolucion/">"KiCad 10 novedades y evolución"</a>, by <a href="https://kensocircuits.com/">Kenso Circuits</a>'
---
[KiCad](https://www.kicad.org/) is a free (GPL-licensed) suite for designing electronics: schematic capture, PCB editor, 3D viewer and generation of the [fabrication files](/en/blog/pcb-fabrication-checklist/), all in one package for Linux, Windows and macOS. It started in 1992 as a personal project by Jean-Pierre Charras and took off from 2013, when CERN began assigning developers to bring it on par with commercial tools. Today it is part of the Linux Foundation and has been used professionally for years, in companies and research centres alike ([full history on Wikipedia](https://en.wikipedia.org/wiki/KiCad)).

Its role in open hardware is key, and not just because there is no licence cost. A design is only truly open if anyone can open its source files, modify them and build it again. Publish it in a proprietary tool and everyone else has to buy a licence or make do with a PDF and some Gerbers. KiCad projects, on the other hand, are plain-text files in an open format that you can version in Git and anyone can open. That is why it has become the usual format for sharing open boards, and why it is the tool we use in our [KiCad workshops](/en/workshops/kicad/).

[Version 10 was released in March 2026](https://www.kicad.org/blog/2026/03/Version-10.0.0-Released/). It does not change the way you design, but it adds features people had been requesting for years and polishes everyday work a lot. Here we go through what is new compared with KiCad 9 and what it brings when you design boards in a makerspace.

## New features at a glance

| Area | What is new in KiCad 10 |
|---|---|
| Interface | Dark mode on Windows, customisable toolbars, lasso selection, undo inside dialogs |
| Schematic | Design variants, hop-over crossings, jumpers, groups, CSV pin table |
| PCB | Graphical rule editor, time-domain track tuning, PCB Design Blocks, inner-layer objects in footprints, pin and gate swap |
| Import | Allegro, PADS and gEDA / Lepton designs |
| Libraries | STEP-only 3D models, hundreds of new symbols, footprints and models |

## A more comfortable interface for everyday work

In KiCad you route the traces yourself: deciding where each signal goes, where to drop a via or how to spread the ground is still design work. What improves with every release is everything around that work, so you spend your time deciding rather than fighting the tool. KiCad 10 brings several improvements of this kind:

- **Customisable toolbars:** rearrange and pick the buttons in each editor to suit the way you work.
- **Lasso selection:** freehand selection instead of a rectangle, in both the schematic and PCB editors. Very handy for grabbing a group of parts surrounded by others.
- **Undo inside dialogs:** try changes in a properties window and undo them before closing it.
- **Dark mode on Windows**, which follows the system theme automatically.

On top of that there is what it already had: the [interactive router](https://docs.kicad.org/10.0/en/pcbnew/pcbnew.html#routing-tracks), which shoves neighbouring traces aside while you draw yours and respects the design rules, and keyboard shortcuts (`X` to start a trace, `V` to drop a via and switch layer without letting go). And the [Plugin and Content Manager](https://docs.kicad.org/10.0/en/kicad/kicad.html#plugin-content-manager), which installs community extensions from inside KiCad. Some that are very popular with makers:

- [Interactive HTML BOM](https://github.com/openscopeproject/InteractiveHtmlBom): generates a web page with the bill of materials that highlights each part on the board. Ideal for [hand soldering](/en/blog/smd-hand-soldering/) without getting lost.
- [KiKit](https://github.com/yaqwsx/KiKit): panelisation and automation of fabrication outputs.
- [Fabrication Toolkit](https://github.com/bennymeg/Fabrication-Toolkit): one-click export of Gerbers, BOM and placement file in the format manufacturers such as JLCPCB ask for.

## Schematic: variants, jumpers and readable crossings

### Design variants

This is the most awaited feature. A [variant](https://docs.kicad.org/10.0/en/eeschema/eeschema.html#schematic-design-variants) lets you keep several versions of one project that share the schematic and the board but change part properties: which parts are fitted, what value they have or which manufacturer part number gets bought. Each variant produces its own bill of materials (BOM).

In maker projects this is more common than it seems: the same board with or without a radio module, with an [LDO or a DC/DC regulator](/en/blog/ldo-vs-dcdc/) depending on the power source, or a "full" version for the workshop and a minimal one for a kit. Until now you had to duplicate the project or edit the BOM by hand, with the risk of the two copies drifting apart.

### Jumpers

You can now define **jumpers**: groups of symbol pins and footprint pads that are treated as internally connected. They always share the same net and show no ratsnest line in the PCB. They are useful for parts such as terminal blocks with bridged contacts or components with electrical connections that do not go through the board.

{{< figure src="jumpers-kicad10.png" alt="KiCad 10 screenshot with a schematic of two parts, TB1 and U1, with internal jumpers, and their view in the PCB editor with the pads connected" caption="Jumpers in the schematic and the PCB: bridged pads share a net without needing a trace. Image: KiCad Development Team, CC BY 3.0." >}}

### Hop-over crossings and other improvements

Wires that cross without connecting can be drawn with a **hop-over arc**, as in classic schematics, so there is no doubt about what is joined and what is not. Also, junctions update live while you drag items, and KiCad warns you when a move is about to short one wire to another.

{{< figure src="cruces-hopover-kicad10.png" alt="Part of a KiCad 10 schematic with resistors, a transistor and capacitors where wires that cross without connecting draw a small arc" caption="Hop-over crossings: wires that do not connect are easy to tell apart at a glance. Image: KiCad Development Team, CC BY 3.0." >}}

The section is rounded off by **groups** (which already existed in the PCB editor), CSV import and export of the symbol editor **pin table** (very practical for microcontrollers with dozens of pins), local power symbols, drag and drop of images into the schematic and better plots in the simulator.

## PCB: visual rules and time-domain tuning

### Graphical design rule editor

KiCad has had a very powerful custom rules language for years, but writing rules by hand put people off. KiCad 10 adds a [graphical rule editor](https://docs.kicad.org/10.0/en/pcbnew/pcbnew.html#graphical-design-rule-editor): you pick the type of constraint, see a drawing of what it means and set the conditions with drop-down menus. Rules created this way are compatible with the usual language, so you can start with the editor and move to text when you need to.

For beginners it is a good way to apply what we explain in the [checklist before sending a board to fab](/en/blog/pcb-fabrication-checklist/): match the rules to the manufacturer's capabilities and let DRC warn you.

{{< figure src="editor-reglas-kicad10.jpg" alt="KiCad 10 Design Rule Editor window with a 0.1 mm minimum clearance rule, a dimensioned drawing of two copper shapes and conditions based on board areas" caption="The graphical rule editor: the constraint is drawn and the conditions are picked from drop-down menus. Image: KiCad Development Team, CC BY 3.0." >}}

KiCad 10 also suggests actions to fix some DRC errors.

### Time-domain track tuning

The track tuning system (the meanders that lengthen a trace) has been completely reworked. Besides lengths, you can now set [delay constraints](https://docs.kicad.org/10.0/en/pcbnew/pcbnew.html#how_time_domain_tuning_works) in picoseconds and define tuning profiles with per-layer parameters. A typical ESP32 project will not need it, but if you get into fast memory, high-speed USB or parallel buses, it is exactly what you need.

{{< figure src="ajuste-tiempo-kicad10.png" alt="Red trace between two resistors with a meander and a label showing a current delay of 94.01 ps against a minimum of 119.9 and a maximum of 120.1" caption="Time-domain tuning: KiCad shows the current delay of the trace against the target while you lengthen it. Image: KiCad Development Team, CC BY 3.0." >}}

### Design Blocks, inner layers and pin swap

- **Design Blocks in the PCB:** the reusable blocks KiCad 9 brought to the schematic now reach the PCB editor. You can save a solved piece of board (a power supply, the area around a radio module) in a library and reuse it in another project with its placement and routing.
- **Inner-layer objects in footprints:** graphics, keepouts and more, no longer only on the outer layers.
- **Pin and gate swap:** swap pads or units of a part in the PCB and back-annotate the change to the schematic. Very useful for untangling a bus on a two-layer board.
- **More details:** barcodes, hatched fills in graphic shapes, precise point editing for polygons, native rounded rectangles and 3D PDF export.

## Importing designs from other tools

KiCad 10 [imports Allegro, PADS and gEDA / Lepton projects](https://www.kicad.org/blog/2026/03/Version-10.0.0-Released/), adding to the importers it already had. For a maker this is useful when you want to modify an open board published in a commercial tool, or when doing [reverse engineering](/en/blog/pcb-reverse-engineering/) starting from old files.

## Lighter, more complete libraries

The official libraries now ship 3D models **in STEP format only**, lighter to install and more accurate when you export the board to a mechanical CAD program. That way you can check the board fits the enclosure before you [3D print it](/en/blog/getting-started-3d-printing/). Since KiCad 9, 952 symbols, 1,216 footprints and 386 3D models have been added, and over 78% of the footprints are now generated from data rather than drawn by hand, which reduces errors.

{{< figure src="visor-3d-kicad.jpg" alt="KiCad 3D viewer showing a purple expansion board with two ICs, connectors and white silkscreen" caption="The 3D viewer shows the board with its components before fabrication. Screenshot: VectorVoyager, CC BY-SA 4.0." >}}

## Is it worth upgrading?

For new projects, yes: start straight in KiCad 10 and use variants and the rule editor from day one. For a project halfway through, bear in mind that once you save it in KiCad 10 the files move to the new format and no longer open in KiCad 9. Make a Git commit or a copy first, and if you work with other people, agree to upgrade at the same time.

## KiCad in the makerspace

The value of KiCad in a hackerspace is not just that it is free: anyone can open the files, understand the board and improve it. That is the [open hardware culture](/en/blog/why-open-culture/) we stand for. If you have always wanted to [design your first board](/en/blog/from-dev-kit-to-custom-pcb/), KiCad 10 is a good time to start.

Hackerspace Valencia runs [KiCad workshops](/en/workshops/kicad/) regularly. Come to an open doors session and we will work through a simple example so you leave with your first board designed. And if you want to come and design whenever it suits you, [become a member](/en/pages/alta/).

## Resources for learning KiCad

- [Official KiCad documentation](https://docs.kicad.org/): manuals for each tool, in several languages.
- [Official Getting Started guide](https://docs.kicad.org/10.0/en/getting_started_in_kicad/getting_started_in_kicad.html): a complete project, from schematic to Gerbers.
- [KiCad 10 announcement](https://www.kicad.org/blog/2026/03/Version-10.0.0-Released/): the new features as told by the development team.
- [Official KiCad forum](https://forum.kicad.info/): a very active community for questions and sharing libraries.
- [Official GitLab repository](https://gitlab.com/kicad/code/kicad): follow development and report bugs.
- [Official KiCad YouTube channel](https://www.youtube.com/@kicadeda): demos and talks by the team.
- [KiCad desde cero](https://www.youtube.com/playlist?list=PL-Hb9zZP9qC7-j4MKZNYg5i8rwu_ejkwW): a complete course in Spanish on YouTube.

## Image credits

- **Cover** - *Multi-Monitor KiCad* - AKK - CC BY 4.0 - [source](https://commons.wikimedia.org/wiki/File:Multi-Monitor_KiCad.jpg)
- **Jumpers, hop-over crossings, rule editor and time-domain tuning** - screenshots from the KiCad 10 announcement - KiCad Development Team - CC BY 3.0 - [source](https://www.kicad.org/blog/2026/03/Version-10.0.0-Released/)
- **3D viewer** - *KiCad 3D Viewer Render Screenshot RP2350 Expansion Card* - VectorVoyager - CC BY-SA 4.0 - [source](https://commons.wikimedia.org/wiki/File:KiCad_3D_Viewer_Render_Screenshot_RP2350_Expansion_Card.png)
