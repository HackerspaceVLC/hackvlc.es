---
title: "How to reduce ESP32 power consumption: deep sleep and other techniques"
description: "With the radio active, an ESP32 can draw several hundred milliamps. This guide reviews low power techniques: shunt measurement, disabling peripherals, deep sleep, wake sources and the ULP coprocessor."
date: 2026-07-20T00:00:00Z
tags: ["esp32", "low-power", "electronics", "iot"]
author: "Hackerspace Valencia"
based_on: '<a href="https://kensocircuits.com/">Kenso Circuits</a>'
---
The ESP32 offers remarkable performance for connected projects, but that performance has an energy cost: with WiFi transmitting it can draw several hundred milliamps. Powered from the mains this figure is irrelevant; on batteries or a solar panel it reduces autonomy to a few days. The chip does however provide low power modes that bring consumption down to microamps whenever there are no tasks to run.

## Measure the real consumption

Before changing anything, measure how much your setup actually draws. You need a low current meter or, preferably, a low value sense resistor in series with the supply, reading the voltage drop across it with an oscilloscope or a sensitive multimeter. Without measurement there is no diagnosis: a board assumed to sit at microamps can have a power LED permanently drawing twenty milliamps.

## Disable unused peripherals

Low consumption starts with controlling what remains powered. The power LED on many development boards draws more than an ESP32 in low power mode: remove it or cut its trace if possible. Apply the same criterion to auxiliary regulators, the USB to UART converter and any circuit that stays active while the ESP32 sleeps. In low power mode the chip drops to a few microamps; the problem is usually the surrounding peripherals.

## Deep sleep mode

In deep sleep the ESP32 halts its cores and keeps only the RTC and the memory that retains state. Consumption drops to tens of microamps under ideal conditions. Entry is a single call from your program specifying the sleep duration or the wake event. On wake the chip boots from the beginning, so any data that must survive across cycles has to be stored in RTC memory.

## Wake sources

The ESP32 supports several wake sources:

- **RTC timer**: the most common. The device sleeps for a fixed interval, say ten minutes, wakes, measures, transmits and sleeps again. With this scheme a weather station reporting every few minutes is active only a minimal fraction of the time.
- **External pins**: useful for presence sensors or buttons.
- **Touch pins**.
- **External interrupts**.

Several sources can be combined in one design.

## Light sleep mode

Light sleep keeps more of the chip alive and wakes faster, at the cost of higher consumption than deep sleep. It is appropriate when the device must react within milliseconds and cannot afford the reboot that deep sleep implies. For most battery powered projects, deep sleep is the more efficient option.

## Clock reduction and radio management

Even while awake, consumption can be reduced. Lowering the clock frequency cuts core consumption whenever full computing power is not required. The radio, WiFi or Bluetooth, should only be active while transmitting: power it up, send your data and power it down before sleeping again. Keeping it scanning for networks continuously is the main cause of premature battery drain.

## The ULP coprocessor

The ESP32 includes an ultra low power coprocessor (ULP) that can keep running while the main cores sleep. Programming it is more advanced, but it can read a sensor periodically and wake the main system only when the data meets a condition. For autonomous monitoring projects it is the most effective tool to extend battery life.

## Summary

The path to minimal consumption has four steps: measure real consumption, eliminate peripheral leaks, use deep sleep and power the radio only to transmit. With these techniques a project that lasted days can last months.

If you are building a battery powered project and the numbers do not add up, bring it to Hackerspace Valencia: we analyse consumption with the multimeter and the oscilloscope and help you locate the leaks.
