---
translationKey: "blog-radio-esp32-internet"
title: "How I built an internet radio with an ESP32 and a MAX98357 DAC"
description: "Building an internet radio with an ESP32 and a cheap MAX98357 DAC: MP3/AAC streaming, rotary encoder control, a web UI and HTTP firmware updates when OTA stopped working."
date: 2026-07-01T00:00:00Z
draft: true
cover: cover.jpeg
tags: ["esp32", "radio", "streaming", "dac", "iot", "arduino", "tutorial"]
author: "A Hackerspace Valencia member"
---
*Notes from an afternoon fighting with OTA, and an HTTP firmware update workaround*

---

This project started in the workshop, in front of a pile of unused ESP32 boards. The goal was to build a radio that played stations over internet streaming, rather than a conventional FM radio, and that would be genuinely useful day to day. The radio is now installed and running at the hackerspace.

## Hardware

The bill of materials is short:

- **ESP32**: any dev board; in this case, a DevKit.
- **MAX98357 DAC** (about €2): a DAC with a built-in class D amplifier that turns I2S audio straight into speaker output.
- **KY-040 rotary encoder** (about €1): volume control and station switching without needing a display.
- A small low-power speaker.
- Breadboard and jumper wires.

The MAX98357 is the heart of the project: a DAC with a class D amplifier that connects over I2S using three pins (BCLK, LRC and DIN) plus power, and delivers up to 3 W per speaker with no external components.

Main connections:

```
BCLK → GPIO 26
LRC  → GPIO 25
DIN  → GPIO 22
```

The rotary encoder connects to GPIO 4 and GPIO 2, and its push button to GPIO 15.

## Software

The firmware is developed with PlatformIO, on the Arduino framework, and uses Earle Philhower's `ESP8266Audio` library.

### Why ESP8266Audio on an ESP32

The library keeps its name for historical reasons, but it works fine on the ESP32. It supports MP3, AAC and ICY streams, the usual format for internet radio stations. It does not support HTTPS, as I found out during development.

### Firmware features

1. **Audio stream playback** in MP3 or AAC.
2. **WiFi management**: automatic connection to the last network used, storage of up to 3 networks and an access point with a captive portal to set up credentials from your phone.
3. **Web server** with a browser control interface, no app to install.
4. **Rotary encoder**: turn for volume, short press for play/pause and long press to change station.
5. **mDNS**: the device answers as `ESP32-RADIO.local`.

## Building it in stages

### Stage 1: audio output

The first goal was to get audio out of the DAC. Wiring the MAX98357 over I2S is straightforward: ESP8266Audio's `AudioOutputI2S` class handles the pin configuration and the MP3/AAC/ICY format.

The first problem came up when testing an HTTPS stream: total silence. The library uses `WiFiClient`, which doesn't implement SSL. The fix was to use the stations' HTTP URLs. Most Spanish stations (Cadena SER, Los 40, RNE) serve their streams over HTTP without any trouble.

### Stage 2: rotary encoder

The rotary encoder produces two signals (CLK and DT) whose phase shift depends on the direction of rotation, and it reads reliably using interrupts on the ESP32. An interrupt was also added for the push button.

Implementation detail: use `IRAM_ATTR` on the interrupt service routines and declare shared variables as `static` so they live in DRAM.

```
Turn right → volume up
Turn left → volume down
Press < 1 s → play/pause
Press > 1 s → next station
```

### Stage 3: web interface

The web server, built on `WebServer`, includes:

- A station list with the active one highlighted.
- A volume slider.
- A play/pause button.
- Adding custom URLs, stored in the ESP32's NVS memory.

The interface refreshes its state every 2 seconds with AJAX requests to the `/status` endpoint, so the browser always shows the station that's playing.

### Stage 4: firmware updates

OTA (Over-The-Air) lets you update the firmware without a USB cable, which is handy once the device is installed in its enclosure.

ArduinoOTA is the standard library for this: you configure it, it opens port 3232 and from PlatformIO you run `pio run --target upload --upload-port ESP32-RADIO.local`.

On this build it didn't work: mDNS resolved correctly and the ESP32 answered pings, but port 3232 refused the connection. One by one I ruled out a conflict with WiFiManager, a bug in Arduino core 2.0.16 and a missing call to `ArduinoOTA.handle()`.

The workaround was to implement updates over HTTP. The ESP32 has the `Update` class, which can flash firmware from any data source. I added an `/update` endpoint to the web server that accepts a multipart POST with the `.bin` file.

The result works reliably: you open `http://192.168.1.75/update` in the browser, pick the `.bin` file and the ESP32 flashes itself and reboots automatically, with no cables and no port 3232.

## Using it

When powered on, the radio connects to the stored network and starts playing within a few seconds. From the encoder you adjust the volume (turn), pause and resume playback (short press) and change station (long press). The full web interface is available at `http://192.168.1.75` from any browser on the local network.

## Gallery

{{< figure src="foto-1.jpeg" alt="The assembled radio" >}}
{{< figure src="foto-2.jpeg" alt="Close-up of the build" >}}
{{< figure src="foto-3.jpeg" alt="Close-up of the build" >}}
{{< figure src="foto-4.jpeg" alt="The radio in action" >}}

## Takeaways

1. **I2S makes audio simple**: three pins give you good-quality audio. The MAX98357 packs a DAC and a class D amplifier into a tiny package.
2. **HTTP streams are still alive and well**: stations have been serving unencrypted audio over HTTP for decades and that doesn't look like changing any time soon.
3. **HTTP updates are a solid alternative to OTA**: when ArduinoOTA fails, an update endpoint is simple to implement and easier to debug.
4. **The ESP32 has plenty of headroom**: with 240 MHz, 320 KB of RAM and WiFi, this project uses a tiny fraction of its resources.

## Code

The full project lives in `~/ESP32_RADIO/` and hasn't been published on GitHub yet. Any member who wants to look through it or build one can find me in the workshop. It's laid out as a standard PlatformIO project:

- `include/config.h`: pins and streams.
- `src/main.cpp`: firmware core.
- `src/web_interface.cpp`: web interface.
- `src/audio_player.cpp`: audio player.
- `src/encoder.cpp`: rotary encoder.
- `src/wifi_manager.cpp`: multi-network WiFi management.

## Possible improvements

- **OLED display** to show the station and the ICY metadata, when the stream includes it.
- **A2DP sink** to work as a Bluetooth speaker.
- **Battery power**: the low power draw allows hours of use from a small power bank.
- **Home Assistant integration** to switch it on and off through automations.

They're noted down for future work sessions at the hackerspace.
