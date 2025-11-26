---
permalink: /
layout: default
title: Smoothieware Home
---

# Smoothieware

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Smoothie</strong> is a <strong><a href="start">free, opensource, high performance</a></strong> and modular <strong>G-code</strong> interpreter and <strong>CNC</strong> control system for the powerful <strong><a href="smoothieboard">SmoothieBoard</a></strong> 32bit controller. It's designed to be very user-friendly and hacker-friendly. The Source code is on <a href="https://github.com/Smoothieware/Smoothieware">GitHub</a>. ヾ(❀◦◡◦)彡
</sl-alert>
{:/nomarkdown}



{::nomarkdown}
<div id="v2-announcement-container" style="position: relative;">
  <sl-alert id="v2-announcement" variant="primary" open>
    <sl-icon slot="icon" name="rocket-takeoff"></sl-icon>
    <div style="display:flex;align-items:center;gap:15px;">
      <a href="https://www.robosprout.com/product-category/smoothieboards" style = "font-size:48px;font-weight:bold;">SmoothieBoard v2 is HERE!</a>
      <a href="/images/fiesta-junina.png">
        <img src="/images/fiesta-junina.png" alt="Party" style="width:50px;height:50px;"/>
      </a>
    </div>
  </sl-alert>
  <canvas id="fireworks-canvas" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 10;"></canvas>
</div>
{:/nomarkdown}



{::nomarkdown}
<script src="https://cdn.jsdelivr.net/npm/fireworks-js@2.10.8/dist/index.umd.min.js"></script>
{:/nomarkdown}

The Smoothie project is always looking for help. Whatever your skills are, there are things you can do to improve the project with the other volunteers. If you feel that you could give us some of your free time, please [contact us](mailto:wolf.arthur@gmail.com), **help and working together** is what has made this project so neat, advanced and precious over the years, and is **very welcome**.

# Documentation

## Step by step guides

<div class="menu">
  <div class="menu-item">
    <a href="3d-printer-guide">
      <img src="/images/guide-3d-printer.png" alt="3D Printer">
      <p><strong>3D Printer</strong> Guide</p>
    </a>
  </div>
  <div class="menu-item">
    <a href="laser-cutter-guide">
      <img src="/images/guide-laser.png" alt="Laser">
      <p><strong>Laser Cutting</strong> Guide</p>
    </a>
  </div>
  <div class="menu-item">
    <a href="cnc-mill-guide">
      <img src = "/images/guide-cnc-mill.png" alt = "CNC Mill">
      <p><strong>CNC Mill</strong> Guide</p>
    </a>
  </div>
  <div class = "menu-item">
  <a   href  = "/pick-and-place-guide">
  <img src   = "/images/guide-pnp.png" alt = "Pick and place">
      <p><strong>Pick and Place</strong> Guide</p>
    </a>
  </div>
</div>

## Firmware documentation

- **[Getting Started](getting-started)**: Complete guide to setting up your Smoothieboard from unboxing to first operation
- [Basics](basics): Fundamental concepts, terminology, and technical background
- [Glossary](glossary): Definitions of common terms used in CNC and 3D printing
- [Communication](communication)
  - [Network](network)
  - [USB](usb)
  - [UART](uart)
  - [Bluetooth](bluetooth-serial)
  - [Wifi](wifi) (new)

{::nomarkdown}
<a href="/images/board.png">
  <img src="/images/board.png" alt="Board" style="width: 100px; height: 100px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

- [Configuring Smoothie](configuring-smoothie): Configuration and use, by module
  - [List of all configuration options](configuration-options)
  - [Motion control](motion-control): All things related to gcode interpolation, motion and acceleration planning, and step generation
  - [Arm Solutions](arm-solutions): [Cartesian](cartesian), [Delta](delta), [Hbot](hbot), [Core-XY](Core-XY), [Rotary Delta](rotary-delta), [Morgan Scara](morgan-scara)
  - [6axis](6axis): Using A, B and C axes, for 4, 5 or 6 axis motion.
  - [Grbl mode](grbl-mode): Using Smoothie in CNC-specific mode instead of 3D printing mode

{::nomarkdown}
<a href="/images/glove.png">
  <img src="/images/glove.png" alt="Tools" style="width: 100px; height: 100px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

- [Tools](tools)
  - [Extruder](extruder): Control extruders for 3D printing
  - [Temperaturecontrol](temperaturecontrol): Heat and cool things like hotends and heated beds
  - [Laser](laser): For cutting
  - [Endstops](endstops): For homing
  - [Spindle](spindle-module): Control your spindle motor with G-code
  - [Switch](switch): Quickly create custom G-code ⇆ Input/Output mapping without needing to write a custom module, like to control a fan
  - [TemperatureSwitch](temperatureswitch): Automatically turn/on a device based on a threshold temperature
  - [Drillingcycles](drillingcycles): Canned drilling cycles support
  - [Filament-detector](filament-detector): Use an encoder to check filament is pushed correctly
{::nomarkdown}<versioned><v1></v1><v2><div class="versioned-list-item" style="margin-left:1.25em;"><a href="lathe">Lathe</a>: Spindle-synchronized turning and threading operations</div><div class="versioned-list-item" style="margin-left:2.5em;"><a href="els">ELS</a>: Electronic Leadscrew with TM1638 display interface</div></v2></versioned>{:/nomarkdown}
  - [ZProbe](zprobe): For probing, levelling, and automated calibration
    - [PCB milling](pcb-milling): For PCB milling
  - [Utilities](utils)
    - [Smoopi](smoopi): **New and Recommended** drive Smoothie using a color touch screen on [Raspberry Pi](https://www.raspberrypi.com/) 
    - [Player](player): Play files from the SD card
    - [Currentcontrol](currentcontrol): Digitally control your stepper motors current
    - [AdvancedMotorDriver](advancedmotordriver): For controlling SPI based stepper motor controllers like DRV8711 and TMC26X
    - [Configurator](configurator): Manipulate configuration using console commands
    - [Kill Button](killbutton) and [Play LED](play-led): S/W based kill and play activity LED
    - [Panel](panel): Drive smoothie directly without a host using monochrome lcd screens and click encoders
{::nomarkdown}<versioned><v1></v1><v2><div class="versioned-list-item" style="margin-left:1.25em;"><a href="tm1638-display">TM1638 Display</a>: 7-segment LED display with buttons</div><div class="versioned-list-item" style="margin-left:1.25em;"><a href="button-box">Button Box</a>: Programmable button panel for macros and machine control</div><div class="versioned-list-item" style="margin-left:1.25em;"><a href="mpg">MPG</a>: Manual Pulse Generator hand wheels for axis jogging</div><div class="versioned-list-item" style="margin-left:1.25em;"><a href="voltage-monitor">Voltage Monitor</a>: Monitor power supply voltages</div></v2></versioned>{:/nomarkdown}
    - [on_boot.gcode File](on-boot-gcode): Execute G-codes every time the board boots
- [Using Smoothie](using-smoothie): General firmware use
  - [Console Commands](console-commands)
  - [Supported G-Codes](supported-g-codes)
  - [Stopping Smoothie](stopping-smoothie)
  - [Software](software)
    - [Smoopi](smoopi): **New and Recommended** drive Smoothie using a color touch screen on [Raspberry Pi](https://www.raspberrypi.com/)
    - [Pronterface](pronterface): Control 3D printers. The OG.
    - [Octoprint](octoprint): Web-page based 3D printer control and management system.
    - [bCNC](bcnc): Control interface for CNC machines.
    - [Fusion360](fusion360): CAD/CAM software with a lot of features and a free/students tier.
- **[Troubleshooting](troubleshooting)**: It doesn't work (ノo益o)ノ彡┻━┻ ! What to do ∩(︶▽︶)∩.
  - [Error Messages Reference](error-messages): Complete documentation of all firmware error messages
  - [MRI](mri-debugging): An amazing tool to help smoothie firmware developers and hackers debug issues using a proper debugging workflow.
- [Contributing](contributing): **We need your help!**
  - [Todo](todo): List of the things that are being worked on in the project.
  - [Editing the Wiki](editing-the-wiki): How to edit this documentation and improve it.

{::nomarkdown}
<a href="/images/binary-code.png">
  <img src="/images/binary-code.png" alt="Binary Code" style="width: 100px; height: 100px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

**The firmware.bin file**
 
Note, Smoothieboards come completely pre-flashed, you do not need to compile or flash the firmware, unless you want to upgrade to a newer version, or to contribute to the code.
 
 - **[Getting the Smoothie Firmware](getting-smoothie)**
 - [Flashing Smoothie](flashing-smoothie)
 - [Compiling Smoothie](compiling-smoothie)
 - [Setting up a SD-Card](sd-card)
 - [How to file an Issue on Github](https://github.com/smoothieware/smoothieware/blob/edge/issue_template)
 - [Flashing the Bootloader](flashing-the-bootloader)
 - [Latest Firmware Commits](latest-firmware)

More: [Windows Drivers](windows-drivers), [Linux Drivers](linux-drivers), [Mac Drivers](mac-drivers), [New Features](new-features), [Gallery](gallery)

{::nomarkdown}
<a id="board-image-link" href="/images/smoothieboard-fritzing-blue.png">
  <img id="board-image" src="/images/smoothieboard-fritzing-blue.png" alt="Smoothieboard Fritzing" style="float: right; margin-left: 1rem; min-width:300px; max-width: 400px"/>
</a>
{:/nomarkdown}

## Hardware documentation

**Available now**: [SmoothieBoard](smoothieboard), the modular and awesome, smoothie-dedicated CNC controller.

- [Smoothieboards](smoothieboards): all versions of the Smoothieboard hardware
- [Running Smoothie on a Breadboard](smoothie-on-a-breadboard)
- [Pin configuration](pin-configuration) details how to configure pins to be inverted, open-drain, pulled-down, pulled-up, etc.
- [How to wire](how-to-wire) describes tutorials, tools and best practices for wiring and cabling work when installing your Smoothieboard in a new machine.
- [Smoothieboard Beta Guide](smoothieboard-beta-guide): Information for beta testers

{::nomarkdown}
<versioned>
<v1>
{:/nomarkdown}

**Smoothieboard v1:**
- [Smoothieboard V1](smoothieboard-v1): Main documentation for the V1 board
- [V1 Specifications](smoothieboard-v1-specifications): Technical specifications
- [V1 Pinout](pinout): Diagrams of all pins on the V1 board
- [LPC1769 Pin Usage](lpc1769-pin-usage): Pin assignments for the LPC1769 microcontroller
- [V1 Schematic](smoothieboard-schematic): Hardware schematic documentation
- [V1 PCB Reference](smoothieboard-pcb): PCB layout and images

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**Smoothieboard v2:**
- [Smoothieboard V2 Prime](smoothieboard-v2-prime): Main documentation for the V2 Prime board
- [V2 vs V1 Differences](smoothieboard-v2-differences): Comparison guide for migration and evaluation
- [STM32H7 Pin Usage](stm32h7-pin-usage): Pin assignments for the STM32H7 microcontroller
- [V2 Schematic](smoothieboard-v2-schematic): Hardware schematic documentation

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

# Getting a Smoothieboard

{::nomarkdown}
<div style="clear: both; text-align: center; margin: 2rem 0;">
  <sl-button variant="primary" size="large" href="getting-smoothieboard">
    <sl-icon slot="prefix" name="cart-fill"></sl-icon>
    Get a Smoothieboard here
  </sl-button>
</div>
{:/nomarkdown}

# Features

## For users

{::nomarkdown}
<a href="/images/worker.png">
  <img src="/images/worker.png" alt="Worker" style="width: 100px; height: 100px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

- {::nomarkdown}<versioned><v1>{:/nomarkdown}Powerful (120Mhz, 32bit) [micro-controller](http://www.embeddedartists.com/products/lpcxpresso/lpc1769_xpr.php).{::nomarkdown}</v1><v2>{:/nomarkdown}Powerful (480MHz dual-core, 32bit) [micro-controller](https://www.st.com/en/microcontrollers-microprocessors/stm32h745xi.html).{::nomarkdown}</v2></versioned>{:/nomarkdown}
- Easy to use and [configure](configuring-smoothie).
- Smooth, jerk-free motion and enabling higher speeds
- Can be used for CNC milling, laser cutting, and 3D printing.
- [Opensource/hardware all-included controller board](smoothieboard)
- [SD-Card](sd-card) support for configuration and executing G-code.
- Composite USB Mass Storage + Serial interface to host.
- Free [email support (✿◠‿◠)](mailto:wolf.arthur@gmail.com)

## For hackers

{::nomarkdown}
<a href="/images/blueprint-1.png">
  <img src="/images/blueprint-1.png" alt="Hackers" style="width: 100px; height: 100px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

- Modular, event-driven design, allowing to add functionality easily without modifying the core. See the [ModuleExample](moduleexample)
- Designed to support non-Cartesian machines
- **V1 (LPC1769)** leaves lots of room for additional functionality. **V2 (STM32H745)** has significantly more resources.
- The mBed [functions](http://mbed.org/handbook/Homepage) and [additional libraries](http://mbed.org/cookbook/Homepage) are available for easy and fast prototyping. But compiles off-line (using GCC), not dependent on the mBed online compiler
- Strict process for acceptance of new code, to keep the project at high quality
- Heavily commented code

{% include project/donate-for-include.md %}

# Developer documentation

{::nomarkdown}
<a href="/images/coding.png">
  <img src="/images/coding.png" alt="Coding" style="width: 100px; height: 100px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

- **[Todo](todo)**: List of the things that are being worked on in the project. We need your help!
- [HowItWorks](howitworks): Walk-through the inner workings of Smoothie (°٢°)
- [ModuleExample](moduleexample): Basics of working with Modules in Smoothie
- [Listofevents](listofevents): List of all Events you can register for
- [Developers-Guide](developers-guide): Information useful to smoothie coders
- [LPC1769 pin usage](lpc1769-pin-usage): Documents all the pins used and which are spare
- [DebuggingSmoothie](debuggingsmoothie): Using the built-in MRI serial debugger
- [Coding-Standards](coding-standards)
- [Contribution Guidelines](contribution-guidlines)
- [Eclipse](eclipse): Using Eclipse IDE to build and debug
- [Github](github): How to submit pull requests for Smoothie
- [Third Party Branches](third-party-branches): a list of useful branches to smoothie that may be helpful to some but are not included in the main branch
- Smoothie developer IRC forum on [IRC](irc) in #smoothiedev @ irc.freenode.net
- [Logo Proposals](logo-proposals)

Current edge build status: [![Build Status](https://app.travis-ci.com/Smoothieware/Smoothieware.svg?branch=edge)](https://app.travis-ci.com/Smoothieware/Smoothieware)

# Reviews

[Watch a review](http://www.youtube.com/embed/vsu_vAKvRO0?hd=1)

{::nomarkdown}
<a href="/images/oshw-logo.png">
  <img src="/images/oshw-logo.png" alt="OSHW logo" style="width:100px; height:auto;"/>
</a>
{:/nomarkdown}
