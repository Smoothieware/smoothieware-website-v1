---
permalink: /smoothiepanel-gamma
layout: default
title: SmoothiePanel Gamma
---

# SmoothiePanel Gamma

SmoothiePanel is an [Open Source Hardware](http://en.wikipedia.org/wiki/Open-source_hardware) control interface for industrial robotic machinery.

It adds a screen and user interface to allow easy control of a Smoothieboard.

The current design brings a graphic LCD with RGB Backlight and changeable interface panel down to a port, optionally SPI, UART, or USB.

---

## About SmoothiePanel

It is intended to control a [Smoothieboard](smoothieboard) ([GPL](http://en.wikipedia.org/wiki/Gpl) licensed), though could easily be connected to almost any logic control system.

The [original plan to use an ARM Cortex-M0 MCU](smoothiepanelalpha) has been brought back out and dusted off because the open source tool-chain is ready!

Also, there were some periodic issues with the [Beta design](smoothiepanel-beta) that used I2C port expanders.

In the end it came down to line noise from using I2C over cables in a noisy environment.

So that brings us to our newest prototype! We've gone back to using an MCU but this time with a USB capable chip.

It still has the Nunchuck port of course but has also gone back to the original idea of customizable / replaceable interface panel.

---

## Preview

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="image"></sl-icon>
  <strong>Image Missing:</strong> The preview image for the prototype assembly is currently unavailable.
</sl-alert>
{:/nomarkdown}

---

## Current Status

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  The current status of this board is prototyping: We're now on the 3rd prototype of the board. Having completed the software side of the Beta board is really making it much easier to do both sides now (i.e. coding both the master and slave sides).
</sl-alert>
{:/nomarkdown}

### Development Progress

- **Hardware:** Prototype 3 PCB complete and tested
- **Software:** Both master and slave side code in development
- **LCD Screens:** Custom graphic LCD screens currently on order
- **Interface Panel:** Customizable/replaceable design confirmed working

---

## Getting One

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Beta Status:</strong> This is prototype hardware. Expect potential issues and changes.
</sl-alert>
{:/nomarkdown}

### Gamma Version (Current)

There are several PCBs of the newest SmoothiePanel Gamma available, but we don't actually have the custom graphic LCD screens yet.

If you're interested in getting a Gamma version kit, please [email us (reprap at logxen dot com)](mailto:reprap@logxen.com).

### Beta Version (Previous)

There are currently a couple PCBs of the beta SmoothiePanel still available.

These boards work, but the current Smoothieboard uses a blocking I2C library that can sometimes lock up for a moment with a bit of noise.

If you are interested in playing with one, [email us (reprap at logxen dot com)](mailto:reprap@logxen.com) and we can talk about getting you a parts kit and PCB.

### Interest List

Or you can simply make yourself known by [email here (reprap at logxen dot com)](mailto:reprap@logxen.com) and you'll be added to the list of interested people.

No strings attached, it's just to help us plan.

---

## Technical Features

### Gamma Version Features

- **Microcontroller:** ARM Cortex-M0 with USB support
- **Display:** Graphic LCD with RGB backlight
- **Interface:** Customizable/replaceable interface panel
- **Connectivity:** SPI, UART, or USB options
- **Controller Port:** Wii Nunchuck compatible
- **License:** Open Source Hardware

### Improvements Over Beta

1. **Eliminated I2C issues** - No more noise-related lockups
2. **USB capability** - Direct USB connection option
3. **More reliable** - MCU-based design instead of port expanders
4. **Flexible connectivity** - Multiple connection options

---

## Related Documentation

- [SmoothiePanel Alpha](smoothiepanelalpha) - Original design concept
- [SmoothiePanel Beta](smoothiepanel-beta) - Previous I2C-based version
- [Smoothieboard](smoothieboard) - The main controller board
- [Panel Module](panel) - Firmware support for panels

---

## Contact

For questions, interest in purchasing, or to discuss the project:

**Email:** [reprap@logxen.com](mailto:reprap@logxen.com)

---

## Contributing

This is an open source hardware project! Contributions, feedback, and testing are welcome.

If you build one or make modifications, please share your experience with the community.
