---
permalink: /getting-started
layout: default
title: Getting Started with Smoothie
---

# Getting Started with Smoothieboard

So you got your Smoothieboard and you want to get it running. Good news: it's not that complicated. Bad news: you still need to read stuff and do things in order.

This guide will walk you through the whole process from plugging in the USB cable for the first time, to actually making your machine do things.

Expected time: 2-4 hours depending on how complicated your machine is and how many times you have to re-read things.

## Quick Links

Already know what you're doing? Jump ahead:

- [I just want to set up my specific machine](#choose-your-machine-guide) - Machine-specific guides
- [I want to understand how it all fits together first](#how-it-works) - System overview
- [Something's broken](#when-things-go-wrong) - Troubleshooting and help

## How it works

Before you start plugging wires everywhere, here's the basic idea of how this whole thing works:

**You want to make a physical object. Here's the chain:**

1. **Design** your thing in CAD software (OpenSCAD, Fusion360, Inkscape, whatever)
2. **Generate G-code** using a slicer/CAM program (Slic3r, CamBam, LightBurn, etc.)
3. **Send commands** to Smoothieboard using host software (Pronterface, Octoprint, bCNC, etc.)
4. **Smoothieboard receives** G-code via USB/Ethernet/SD card
5. **Smoothie firmware executes** the commands by moving motors and controlling tools
6. **Your machine makes** the thing

**The parts of the system:**

- **Smoothie** = The firmware (software) that runs on the board
- **Smoothieboard** = The actual physical board (hardware)
- **G-code** = The language that tells machines what to do
- **Config file** = A text file on the SD card that tells Smoothie how to behave

If you want more details on all this, read [Smoothie Basics](basics).

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Versions</strong><br>
  There are two versions of Smoothieboard: <strong>v1</strong> (LPC1769, widely used, stable) and <strong>v2</strong> (STM32H745, more powerful, newer). Most of this documentation applies to both. Check <a href="smoothieboard">Smoothieboard hardware</a> if you want the details.
</sl-alert>
{:/nomarkdown}

## Choose your machine guide

Different machines need different setup instructions. Pick yours:

{::nomarkdown}
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  <div style="border: 2px solid #ddd; border-radius: 8px; padding: 1.5rem; text-align: center;">
    <a href="3d-printer-guide">
      <img src="/images/guide-3d-printer.png" alt="3D Printer" style="width: 80px; height: 80px;"/>
      <h3 style="margin: 1rem 0 0.5rem 0;">3D Printer</h3>
    </a>
    <p style="margin: 0; color: #666; font-size: 0.9rem;">Extruders, hotends, heated beds</p>
    <a href="3d-printer-guide" style="display: inline-block; margin-top: 0.5rem;">
      <sl-button variant="primary" size="small">Setup Guide</sl-button>
    </a>
  </div>

  <div style="border: 2px solid #ddd; border-radius: 8px; padding: 1.5rem; text-align: center;">
    <a href="laser-cutter-guide">
      <img src="/images/guide-laser.png" alt="Laser" style="width: 80px; height: 80px;"/>
      <h3 style="margin: 1rem 0 0.5rem 0;">Laser Cutter</h3>
    </a>
    <p style="margin: 0; color: #666; font-size: 0.9rem;">Laser power, focusing, safety</p>
    <a href="laser-cutter-guide" style="display: inline-block; margin-top: 0.5rem;">
      <sl-button variant="primary" size="small">Setup Guide</sl-button>
    </a>
  </div>

  <div style="border: 2px solid #ddd; border-radius: 8px; padding: 1.5rem; text-align: center;">
    <a href="cnc-mill-guide">
      <img src="/images/guide-cnc-mill.png" alt="CNC Mill" style="width: 80px; height: 80px;"/>
      <h3 style="margin: 1rem 0 0.5rem 0;">CNC Mill</h3>
    </a>
    <p style="margin: 0; color: #666; font-size: 0.9rem;">Spindles, tool changes, feeds</p>
    <a href="cnc-mill-guide" style="display: inline-block; margin-top: 0.5rem;">
      <sl-button variant="primary" size="small">Setup Guide</sl-button>
    </a>
  </div>

  <div style="border: 2px solid #ddd; border-radius: 8px; padding: 1.5rem; text-align: center;">
    <a href="pick-and-place-guide">
      <img src="/images/guide-pnp.png" alt="Pick and Place" style="width: 80px; height: 80px;"/>
      <h3 style="margin: 1rem 0 0.5rem 0;">Pick and Place</h3>
    </a>
    <p style="margin: 0; color: #666; font-size: 0.9rem;">Vacuum, rotation, placement</p>
    <a href="pick-and-place-guide" style="display: inline-block; margin-top: 0.5rem;">
      <sl-button variant="primary" size="small">Setup Guide</sl-button>
    </a>
  </div>
</div>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Read the whole guide first</strong><br>
  Seriously. Read your machine guide from start to finish before you plug anything in. You'll save yourself time and avoid breaking things. People who don't do this always regret it.
</sl-alert>
{:/nomarkdown}

## The process

Here's what setting up a Smoothieboard looks like. Each machine guide gives you the details, but this is the general flow:

### Before anything else

**You need:**
- Basic electrical knowledge (voltage, current, polarity - see [Electricity Basics](basics#electricity) if you need a refresher)
- Screwdrivers, wire strippers, multimeter
- A power supply appropriate for your machine
- USB cable (usually USB-A to USB-B)
- Ability to crimp or solder wires (depending on your setup)
- Patience

**Windows users:** You'll need to install [Windows Drivers](windows-drivers) for the board to show up properly.

**Time estimate:**
- Software setup: 15-30 minutes
- Wiring everything: 1-2 hours
- Configuration: 1-2 hours
- Testing and calibration: 30 minutes to 1 hour

### Step 1: Software setup (15-30 minutes)

**1. Install drivers (Windows only)**

If you're on Windows, go install the [Windows drivers](windows-drivers) now. Linux and Mac have drivers built in.

**2. Get host software**

You need software on your computer to talk to the board. Pick one:

- **[Smoopi](smoopi)** - Recommended, runs on Raspberry Pi with touchscreen
- **[Pronterface](pronterface)** - Popular for 3D printers, simple and reliable
- **[Octoprint](octoprint)** - Web-based 3D printer control, very nice
- **[bCNC](bcnc)** - Good for CNC mills

See [Software](software) for the full list.

**3. Download configuration file**

You'll need a config file for your machine type:

- [3D printer config](https://github.com/Smoothieware/Smoothieware/raw/edge/ConfigSamples/Smoothieboard/config) - Most common
- [Delta printer config](https://github.com/Smoothieware/Smoothieware/blob/edge/ConfigSamples/Smoothieboard.delta/config) - If you have a delta

Save this somewhere, you'll need it later.

**4. Read your machine guide**

Go read the entire guide for your machine type now. Not kidding. Do it.

### Step 2: First connection (15 minutes)

**Plug in USB**

Connect the USB cable from your computer to the Smoothieboard. The board should power on (you'll see LEDs light up).

Your computer should recognize it as:
- A USB serial device
- A USB mass storage device (the SD card shows up like a USB stick)

**Talk to it**

Open your host software, connect to the serial port, and try some commands:

```
version       (shows firmware version)
help          (lists available commands)
G0 X10        (tries to move X axis - won't work yet, no motors)
```

If you get responses, you're good. If not, check your drivers (Windows) or try a different USB cable.

See [Console Commands](console-commands) for what you can type.

**The SD card**

The SD card appears as a drive on your computer. You can copy files to it like any USB stick. Important:
- The config file goes here
- G-code files go here
- Always "safely eject" before doing anything

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>Never edit the SD card while the machine is running</strong><br>
  Concurrent access corrupts SD cards. Always unmount/eject in your OS before operations. "Unmount" means clicking "safely eject" in your file manager, not physically removing the card.
</sl-alert>
{:/nomarkdown}

### Step 3: Wiring (1-2 hours)

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>Power off!</strong><br>
  Always disconnect power before wiring. Never connect or disconnect anything with power on. Seriously.
</sl-alert>
{:/nomarkdown}

Your machine guide has the detailed wiring instructions. General order:

1. **Power supply** - Wire AC power to your PSU, then PSU outputs to the board power inputs (see [Main Power Input](main-power-input))
2. **Stepper motors** - Connect each motor to a driver output (see [Stepper Motors](stepper-motors))
3. **Endstops** - Wire limit switches to endstop inputs (see [Endstops](endstops))
4. **Sensors** - Thermistors for 3D printers (see [Temperature Control](temperaturecontrol))
5. **Tools** - Heaters, lasers, spindles, whatever your machine uses

**Test each component as you go.** Wire something, test it, then move on. If you wire everything at once and it doesn't work, you'll waste hours troubleshooting.

### Step 4: Configuration (1-2 hours)

Configuration is just editing a text file. No compiling, no fancy tools.

**Copy config to SD card**

1. Plug in your USB cable (board should be powered)
2. The SD card appears as a drive
3. Copy your downloaded config file to it
4. Name it `config` or `config.txt`
5. Safely eject the drive
6. Reset the board (press reset button or power cycle)

**Edit for your machine**

You'll need to change values for your specific setup. Open the config file in any text editor and look for:

- Steps per mm for your motors
- Max speeds and accelerations
- Endstop pin assignments
- Temperature sensor types
- Tool configurations

See [Configuring Smoothie](configuring-smoothie) for complete documentation.

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Always unmount, then reset</strong><br>
  After editing config, safely eject the SD card, then reset the board. Changes only take effect after reset.
</sl-alert>
{:/nomarkdown}

**Test everything**

- Motors: Try `G0 X10` `G0 Y10` etc.
- Endstops: Try homing with `G28`
- Temperature: Check readings (3D printers)
- Tools: Test heaters/lasers/spindles carefully

### Step 5: Calibration (30 mins - 1 hour)

**Motors**

Measure actual distances vs commanded distances, adjust `steps_per_mm` in config until accurate.

**Acceleration**

Start with conservative values, increase gradually until you see problems (ringing, skipping), then back off.

**Tools**

- 3D printers: E-steps calibration, PID tuning
- Lasers: Power calibration, focus
- CNCs: Feed rates, spindle speeds

Your machine guide has the specifics.

### Step 6: First run

Make something simple:

- 3D printer: Small calibration cube
- Laser: Simple square
- CNC: Shallow engraving

Start slow, watch closely, be ready to hit the emergency stop.

If it works: congratulations, you're done!

If it doesn't work: see below.

## When things go wrong

**Board not recognized**

- Windows: Install [Windows drivers](windows-drivers)
- Try different USB cable
- Try different USB port
- Check for LED activity on board

**Motors not moving**

- Check wiring
- Check motor current in config
- Try simple commands like `G0 X10`
- Use `M119` to check endstops aren't triggered

**Endstops not working**

- Check wiring and polarity
- Verify normally-open vs normally-closed in config
- Test with `M119` command

**Temperature wrong**

- Check thermistor type in config
- Verify wiring
- Look for shorts

For more help, see [Troubleshooting](troubleshooting).

## Getting help

When you're stuck:

**First:**
1. Read the [Troubleshooting](troubleshooting) page
2. Search this documentation
3. Check your wiring
4. Double-check your config file

**Then ask the community:**

- **IRC**: #smoothiedev @ irc.freenode.net - Fast, live help
- **Email**: [wolf.arthur@gmail.com](mailto:wolf.arthur@gmail.com) - Be patient, volunteers
- **GitHub**: [Report bugs](https://github.com/Smoothieware/Smoothieware/issues)

**When asking for help, include:**

- Firmware version (run `version` command)
- Your config file (use [pastebin.com](http://pastebin.com/))
- Photos of your setup
- Exact error messages
- What you've already tried

## What's next

**Must read:**
- [Configuring Smoothie](configuring-smoothie) - Complete config reference
- [Console Commands](console-commands) - All available commands
- [Supported G-codes](supported-g-codes) - G-code reference

**Useful stuff:**
- [Motion Control](motion-control) - Fine-tune motion and acceleration
- [Network](network) - Set up Ethernet
- [SD Card](sd-card) - Print without a computer
- [on_boot.gcode](on_boot.gcode) - Automate startup tasks

**Want to help?**
- [Contributing](contributing) - Help improve Smoothieware
- [Editing the Wiki](editing-the-wiki) - Improve these docs

Now go make something cool.
