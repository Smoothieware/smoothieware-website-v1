---
permalink: /smoothieboard-beta-guide
---

# Smoothieboard Beta Guide

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Historical Document</strong>: This guide was written for the first beta batch of Smoothieboards from January 2013.

  While the information is still useful, newer boards may have different characteristics.

  For current information, see the main <a href="smoothieboard">Smoothieboard</a> documentation.
</sl-alert>

The original beta status of the first batch of [Smoothieboards](smoothieboard) led to new users having many of the same questions, which were not fully answered in the documentation at the time.

This is a guide for new users of Smoothieboard in general, with specific information about what was specific to that first beta batch.

## Unpacking

When unpacking your Smoothieboard, you'll see it looking something much like this:

<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Note</strong>: Beta boards lacked most connectors so users could solder whatever connector type best suited their setup.

  For reference images of the beta board, see the <a href="https://www.flickr.com/photos/arthurwolf/7759993256/">Flickr photo archive</a>.
</sl-alert>

As you can see from historical photos, beta boards lacked most of their connectors.

This was so you had the choice to solder whatever connectors were best for your particular setup.

This also meant you had to solder them yourself.

## Connectors

A great way to see what connector options you have for each connection is to look at reference pictures (see the [connector options photo](https://www.flickr.com/photos/arthurwolf/7832149516/)).

- **Blue screw terminals**: 3.5mm pitch screw terminals (except for the bigger one at the power input, that is 5mm). Those are extremely common.
- **Green screw terminals**: 2.54mm screw terminals. They are nice but more difficult to come by.
- **Black 2.54mm pins**: Much cheaper alternative for 2.54mm connections.

You can find links to buy those connectors on the [Smoothieboard](smoothieboard) page, in the "border connectors" section.

The cheapest option is simply to use 2.54mm pins for everything (except power), but your choice really depends on what is at the end of the wires on your printer: screw terminals are a more "universal" option.

### Required Connectors for 3D Printing

To run a 3D printer with Smoothie, you'll need to solder connectors to the following:

- Stepper motor 4-pin connectors
- VBB power input
- All small and big MOSFET inputs and outputs
- Small and big MOSFET power select (see [power select reference](http://www.flickr.com/photos/arthurwolf/7831724724/))
- Endstop connectors
- Thermistor connectors

Once the connectors are soldered, you can start actually doing stuff with your Smoothieboard.

## MicroSD Card

Smoothieboard doesn't come with a microSD card, but it needs one.

If you don't already have one, you want to get one (they are a few dollars on eBay).

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Beta Board Limitation</strong>: The bootloader that was flashed on the beta boards did not support SDHC cards.

  This means that if your card is more than 2GB in size, it won't work.
</sl-alert>

If your microSD card is bigger than 2GB, you have two options:

- Flash a newer bootloader that supports SDHC cards, see [flashing-the-bootloader](flashing-the-bootloader)
- Or get a 2GB or smaller microSD card

## Firmware

Now that you have a bootloader installed, you can update the firmware.

<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  You very probably want to update the firmware. The firmware on beta boards corresponds to the old "master" branch in the GitHub repo.

  While it works for most things, it's quite old, and the USB functionality may give you trouble. It also does not support SDHC cards.

  The edge branch (<a href="https://github.com/arthurwolf/Smoothie/tree/edge">GitHub edge branch</a>) has all of the latest features, including SDHC support and the new USB stack.
</sl-alert>

Getting, compiling, and flashing Smoothie is well documented. Just remember you want the "edge" branch:

- [Getting Smoothie](getting-smoothie)
- [Compiling Smoothie](compiling-smoothie)

Once the firmware is flashed onto the board (you know it is because the firmware file is renamed on the SD card), you can move on to configuration.

## Configuration

Smoothie gets its configuration from a small file named "config" that you place in the root of the SD card.

You can find detailed information on the [Configuring Smoothie](configuring-smoothie) page.

Once you have copied the configuration file under the name "config" on the SD card, you can move on to connecting your computer.

## Windows Drivers

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  If you are a Windows user, you need to install drivers to get USB to work on your Smoothieboard.

  See the <a href="windows-drivers">Windows Drivers</a> page for detailed instructions.

  If something does not work, you can contact the team via <a href="/irc">IRC</a>.
</sl-alert>

If you are a Linux or Mac user, don't worry about drivers - it'll all work out of the box.

## Talking to Smoothie

Now Smoothie is flashed on your Smoothieboard, and your computer is ready to talk to it.

Plug Smoothieboard in using the USB-mini cable.

You will see a USB mass-storage device (much like USB flash drives) pop up.

It shows you the contents of the microSD card. You can use it at any time to access/modify files, drop G-code files, etc.

### Serial Terminal Software

Now you will want to install a serial terminal program to talk to your Smoothieboard:

- **Windows**: [Teraterm](http://ttssh2.sourceforge.jp/index.html.en) works well
- **Linux, FreeBSD, Mac OS X**: [Cutecom](http://cutecom.sourceforge.net/) is pretty nice
- **All platforms**: [Pronterface](https://github.com/kliment/Printrun) provides a more "control-oriented" interface and lets you start printing right away

### Connecting

Use your program of choice to talk to Smoothie. The interface will be named:

- **COM1** or something similar in Windows
- **/dev/ttyACM0** or something similar in Linux
- **/dev/tty.usbmodem412** or something similar in OS X

Once the serial terminal is up and running, resetting the board should display `smoothie ok` in the terminal.

### Basic Commands

You are now connected to Smoothie and you can start talking to it. Here are a few basic commands:

- `ls /sd/` - Lists files in the current folder or the "/sd/" folder
- `cd /sd/` - Changes the path to the "/sd/" folder
- `play /sd/file.g -q` - Plays the G-code file indicated. The `-q` option is optional and makes the play silent
- `G1 X10 F100` - Moves the machine 10 millimeters in the X axis, at 100mm/minute

<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>You're all set!</strong> Your Smoothieboard is now configured and ready to use.

  For more information, see the main documentation and have fun building!
</sl-alert>
