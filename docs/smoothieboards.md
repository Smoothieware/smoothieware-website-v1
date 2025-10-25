---
layout: default
title: Smoothieboards
---

# Smoothieboards

The Smoothieboards are numerical fabrication controllers designed to run the Open-Source [Smoothieware](http://smoothieware.org) firmware, by a community of volunteers.

They come in a range of different versions, with different feature sets and advantages.

All Smoothieboards are designed to run on the most powerful hardware in their price range at the time of their conception, to be easy to expand for new and adventurous uses, to be easy to develop on, and to be simple to use for normal users.

## Available Boards Quick Reference

| Board | Status | Processor | Drivers | Best For |
|-------|--------|-----------|---------|----------|
| **v1** | ✅ In Production | LPC1769 (120MHz) | 3-5× A5984 | Budget builds, proven reliability |
| **v2-prime** | ✅ In Production | STM32H745 (480MHz) | 4× TMC2660/2590 | High-performance, quiet operation |
| **v2-mini** | ⏸️ Postponed | LPC4330 | 4× Heroic | Budget v2 experience |
| **v2-pro** | ❌ Never Produced | LPC4330 + FPGA | 5× TMC drivers | High-end experimentation |

---

## Smoothieboard v1

{::nomarkdown}
<sl-badge variant="success" pill>In Production Since 2013</sl-badge>
{:/nomarkdown}

Smoothieboard v1 was the first released Smoothieboard and has received several updates over the years.

It has gone from an experimental project to a widely used and acclaimed system trusted by thousands of makers worldwide.

{::nomarkdown}
<a href="/images/smoothieboard-fritzing.png">
  <img src="/images/smoothieboard-fritzing.png" alt="Smoothieboard v1" style="width: 640px; height: auto; display: block; margin: 2rem auto;"/>
</a>
{:/nomarkdown}

### Features

- 32-bit [Cortex-M3 LPC1769](http://www.nxp.com/products/microcontrollers-and-processors/arm-processors/lpc-cortex-m-mcus/lpc-cortex-m3/lpc1700-cortex-m3/512kb-flash-64kb-sram-ethernet-usb-lqfp100-package:LPC1769FBD100) @ 120MHz with 512kB flash and 64kB RAM
- 3 to 5 [A5984](http://www.allegromicro.com/en/Products/Motor-Driver-And-Interface-ICs/Bipolar-Stepper-Motor-Drivers/A5984.aspx) stepper drivers with 1/32 microstepping
- Thermistors and MOSFETs to control heaters and fans
- Ethernet and USB connections
- SD card to store configuration and G-code files
- Various inputs and outputs for extensibility
- Available in 3 versions: 3X, 4X, and 5X (different peripheral sets)

### Documentation & Purchase

- **Getting Started**: [Smoothieboard v1 Guide](smoothieboard-v1)
- **Technical Details**: [Smoothieboard v1 Specifications](smoothieboard-v1-specifications)

{::nomarkdown}
<sl-alert variant="success" open>
  <sl-icon slot="icon" name="cart"></sl-icon>
  <strong>Get Smoothieboard v1:</strong> Available at <a href="https://www.robosprout.com/" target="_blank" rel="noopener">RoboSprout</a>
</sl-alert>
{:/nomarkdown}

---

## Smoothieboard v2 (v2-prime)

{::nomarkdown}
<sl-badge variant="success" pill>In Production Since 2023</sl-badge>
{:/nomarkdown}

The successor to the v1 board in the version 2 line of Smoothieboards. This is the current flagship board with significantly more power and advanced features.

{::nomarkdown}
<a href="/images/v2-prime.png">
  <img src="/images/v2-prime.png" alt="Smoothieboard v2 prime" style="width: 640px; height: auto; display: block; margin: 2rem auto;"/>
</a>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Design Change:</strong> The v2 board was originally designed around an LPC4330 processor, but was redesigned with an STM32H745 due to chip shortages during COVID. See <a href="smoothieboard-v2-original">Smoothieboard v2 Original (LPC4330)</a> for historical information about the cancelled design.
</sl-alert>
{:/nomarkdown}

### Features

- **Dual-core STM32H745** (Cortex-M7 @ 480MHz + Cortex-M4 @ 240MHz) with 2MB flash and 1MB RAM
- **4× Advanced Stepper Drivers** - [TMC2660](http://www.trinamic.com/products/integrated-circuits/details/tmc2660-pa/) or TMC2590 with 1/256 microstepping
- **Silent Operation** - StealthChop2 for near-silent stepper motors
- **Powerful MOSFETs** - Control heaters, fans, and high-current devices
- **Dual USB** - USB-B (computer connection) and USB-A (thumb drive)
- **Fast Ethernet** - Built-in web interface, Telnet, and FTP
- **SDIO SD Card** - High-speed SD card interface
- **Gadgeteer Expansion** - 8× 10-pin expansion ports for plug-and-play daughterboards

### Documentation & Purchase

- **Technical Details**: [Smoothieboard v2 Prime Specifications](smoothieboard-v2-prime)

{::nomarkdown}
<sl-alert variant="success" open>
  <sl-icon slot="icon" name="cart"></sl-icon>
  <strong>Get Smoothieboard v2-Prime:</strong> Available at <a href="https://www.robosprout.com/product-category/smoothieboards/v2-smoothieboard/" target="_blank" rel="noopener">RoboSprout Smoothieboard v2</a>
</sl-alert>
{:/nomarkdown}

---

## Smoothieboard v2-mini

{::nomarkdown}
<sl-badge variant="warning" pill>Development Postponed</sl-badge>
{:/nomarkdown}

{::nomarkdown}
<a href="/images/v2-mini.png">
  <img src="/images/v2-mini.png" alt="Smoothieboard v2 mini" style="width: 640px; height: auto; display: block; margin: 2rem auto;"/>
</a>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Status:</strong> Because of COVID and tariffs, the development of v2-mini has been postponed, and partially replaced by the main v2 board (v2-prime). The specifications below were based on the cancelled <a href="smoothieboard-v2-original">LPC4330 design</a>.
</sl-alert>
{:/nomarkdown}

A minimalistic version of the v2 board, designed to be as inexpensive as possible while still delivering the v2 experience.

It's essentially just enough to run a 3D printer with no heated bed, a small laser cutter, or a CNC router. No extra goodies, and you have to solder the connectors yourself.

### Planned Features

- 32-bit [Cortex-M4 LPC4330](http://www.nxp.com/products/microcontrollers-and-processors/arm-processors/lpc-cortex-m-mcus/lpc-cortex-m4/lpc4300-cortex-m4-m0/32-bit-arm-cortex-m4-m0-mcu-up-to-1-mb-flash-and-136-kb-sram-ethernet-two-high-speed-usb-lcd-emc:LPC4337FET256) with 8MB flash, 264kB RAM, and M0 co-processor
- 4× Heroic drivers with 1/128 microstepping
- Thermistors and MOSFETs to control heaters and fans
- USB-B (computer connection)
- SD card with fast access
- Standard expansion ports with a [series of plug-and-play boards](https://docs.google.com/document/d/1PKwoEB4zZQWxT4tJm48W-1_lBEOAGzk7noKMVmRszs4/edit?usp=sharing)
- No connectors pre-installed (DIY soldering required)

{::nomarkdown}
<a href="/images/recovered/smoothieboard-v2-mini.png">
  <img src="/images/recovered/smoothieboard-v2-mini.png" alt="Smoothieboard v2-mini render" style="width: 640px; height: auto; display: block; margin: 2rem auto;"/>
</a>
{:/nomarkdown}

Currently being designed, see [blog post](blog_15).

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  Because v2 is being developed by awesome volunteers, we have no timetable or planned release date, so please stop asking.
</sl-alert>
{:/nomarkdown}

---

## Smoothieboard v2-pro

{::nomarkdown}
<sl-badge variant="danger" pill>Never Produced</sl-badge>
{:/nomarkdown}

{::nomarkdown}
<a href="/images/v2-pro.png">
  <img src="/images/v2-pro.png" alt="Smoothieboard v2 pro" style="width: 640px; height: auto; display: block; margin: 2rem auto;"/>
</a>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Status:</strong> The v2-pro board was never produced. The specifications below were based on the cancelled <a href="smoothieboard-v2-original">LPC4330 design</a>.
</sl-alert>
{:/nomarkdown}

An overpowered version of v2, designed for experimenting with intergalactic features and use on high-end machines.

### Planned Features

- 32-bit [Cortex-M4 LPC4330](http://www.nxp.com/products/microcontrollers-and-processors/arm-processors/lpc-cortex-m-mcus/lpc-cortex-m4/lpc4300-cortex-m4-m0/32-bit-arm-cortex-m4-m0-mcu-up-to-1-mb-flash-and-136-kb-sram-ethernet-two-high-speed-usb-lcd-emc:LPC4337FET256) with 8MB flash, 264kB RAM, and M0 co-processor
- **FPGA** for step generation at insane rates and experimental features
- **5× High-Power Drivers** - 3× [TMC262](http://15006.dcpserver.de/download.php?file=_articles/products/integrated-circuits/tmc262/_datasheet/TMC262_datasheet.pdf) (high power) + 2× [TMC2660](http://www.trinamic.com/products/integrated-circuits/details/tmc2660-pa/) with 1/256 microstepping
- Many thermistors and MOSFETs to control heaters and fans
- Ethernet, USB-B (computer), and USB-A (thumb drive) connections
- SD card with fast access
- Many standard expansion ports with a [series of plug-and-play boards](https://docs.google.com/document/d/1PKwoEB4zZQWxT4tJm48W-1_lBEOAGzk7noKMVmRszs4/edit?usp=sharing)

Currently being designed, see [blog post](blog_15).

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  Because v2 is being developed by awesome volunteers, we have no timetable or planned release date, so please stop asking.
</sl-alert>
{:/nomarkdown}

---

## Choosing a Board

**For most users**, we recommend:

- **Budget-conscious or proven stability** → [Smoothieboard v1](#smoothieboard-v1)
- **High performance and quiet operation** → [Smoothieboard v2-prime](#smoothieboard-v2-v2-prime)

Both boards are in active production and fully supported by the community.
