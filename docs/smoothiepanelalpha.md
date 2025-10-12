
# SmoothiePanel Alpha (Legacy Documentation)

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Historical Project:</strong> This page documents the SmoothiePanel Alpha prototype from 2013. This project was never released to the public and remains in prototype status. For current panel options, see the <a href="panel">Panel documentation</a>.
</sl-alert>

## Overview

SmoothiePanel was an [Open Source Hardware](http://en.wikipedia.org/wiki/Open-source_hardware) integrated panel design using the [LPC 1114](http://www.nxp.com/products/microcontrollers/cortex_m0/lpc1100_x_l/LPC1114FBD48.html) ARM Cortex-M0 chip.

It was designed to bring a 20x4 RGB Character Display, UART, SPI, 4-bit ADC, and 16-bit GPIO down to a single I2C port.

### Planned Features

The basic interface panel was to support:

- **Illuminated pause button**: Visual indicator for pause state
- **Illuminated back button**: Navigation control with LED
- **RGB Click Encoder**: Rotary encoder with push button and RGB LED
- **Lots of extra I/O**: Additional GPIO for expansion

It was intended to control a [Smoothieboard](smoothieboard) though it could easily be connected to any system with available I2C.

## Preview

<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="image"></sl-icon>
  Original prototype images are no longer available.
</sl-alert>

## Status (Historical)

The status of this board as of 2013 was prototyping: design was done, and the first prototypes had arrived and were being assembled by hand.

The firmware was never completed.

This project was never released to the public and remains an abandoned prototype.

## What Was It Intended For?

The Smoothiepanel firmware was designed for maximum usefulness in mind, allowing replaceable and extendable user interface panels.

Since it was all [Open Source Hardware](http://en.wikipedia.org/wiki/Open-source_hardware), the design could have been reworked to support communication styles other than I2C, or custom firmware could have been written to use a Smoothiepanel LCD Backpack as the core of other projects.

## Current Panel Options

Since the SmoothiePanel project was never completed, consider these alternatives:

### RepRapDiscount Smart Controller

The most popular panel option for Smoothieboard.

Features a graphical LCD with SD card slot and rotary encoder.

### Viki2

Advanced panel with larger screen and more features.

### Universal Panel Adapter

Allows connection of various standard RepRap panels to Smoothieboard.

See the [Panel documentation](panel) for complete information on supported panels, wiring, and configuration.

## Related Documentation

- [Panel](panel) - Current panel options and documentation
- [Smoothieboard](smoothieboard) - Main board documentation
- [Smoopi](smoopi) - Modern touchscreen control option using Raspberry Pi
