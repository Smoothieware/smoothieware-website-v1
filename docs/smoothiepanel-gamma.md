
# SmoothiePanel

SmoothiePanel is an [Open Source Hardware](http://en.wikipedia.org/wiki/Open-source_hardware) control interface for industrial robotic machinery. It adds a screen and user interface to allow easy control of a Smoothieboard. The current design brings a graphic LCD with RGB Backlight and changeable interface panel down to a port, optionally SPI, UART, or USB.

It is intended to control a [Smoothieboard](http://smoothieware.org/Smoothieboard) ( [GPL](http://en.wikipedia.org/wiki/Gpl) too ), though could easily be connected to almost any logic control system.

The [original plan to use an ARM Cortex-M0 MCU](smoothiepanelalpha.md) has been brought back out and dusted off because the open source tool-chain is ready! Also, there were some periodic issues with the [Beta design](smoothiepanel-beta.md) that used I2C port expanders. In the end came down to line noise from using I2C over cables in a noisy environment. So that brings us to our newest prototype! I've gone back to using an MCU but this time I've gone with a USB capable chip. It still has the Nunchuck port of course but has also gone back to the original idea of customizable / replaceable interface panel.

## Preview

![Smoothiepanel Prototype](/images/external/https.dl.dropboxusercontent.com.u.45859274.smoothiepanel.proto3.asm.sm.jpg)

## Status
The current status of this board is prototyping: I'm now on the 3rd prototype of the board. Having completed the software side of the Beta board is really making it much easier to do both sides now (i.e. coding both the master and slave sides).

## Getting one
There are several pcbs of the newest Smoothiepanel gamma available but I don't actually have the custom graphic lcd screens yet. :)

There are currently a couple pcbs of the beta Smoothiepanel still available. These boards work, but the current Smoothieboard uses a blocking I2C library that can sometimes lock up for a moment with a bit of noise. If you are interested in playing with one [email me ( reprap at logxen dot com )](mailto:reprap@logxen.com) and we can talk about getting you a parts kit and pcb.

Or you can simply make yourself known by [email here ( reprap at logxen dot com )](mailto:reprap@logxen.com) and you'll be added to the list of interested people. No strings attached, it's just to help us plan.
