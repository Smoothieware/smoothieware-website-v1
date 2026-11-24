---
permalink: /
layout: default
title: Smoothieware and Smoothieboard Documentation
description: "Set up Smoothieboard with Smoothieware for laser cutters, CNC mills, 3D printers, and other machines. Find wiring, configuration, and firmware guides."
---

# Smoothieware

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Smoothie</strong> is a <strong><a href="start">free, opensource, high performance</a></strong> and modular <strong>G-code</strong> interpreter and <strong>CNC</strong> control system for the powerful <strong><a href="smoothieboards">SmoothieBoard</a></strong> 32bit controller. It's designed to be very user-friendly and hacker-friendly. Source code: <a href="https://github.com/Smoothieware/Smoothieware">Smoothieware V1 (LPC17xx)</a> and <a href="https://github.com/Smoothieware/SmoothieV2">Smoothieware V2 (STM32H7)</a> on GitHub. ヾ(❀◦◡◦)彡
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

Retrofitting a K40 laser cutter? Start with the [K40 controller upgrade overview](/landing-page-k40-laser-upgrade) and the [laser cutter installation guide](/laser-cutter-guide).

## Firmware documentation

{::nomarkdown}
<a href="/images/sprout-2.png">
  <img src="/images/sprout-2.png" alt="Tools" style="width: 75px; height: 75px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

- **[Getting Started](getting-started)**: Complete guide to setting up your Smoothieboard from unboxing to first operation
- [Basics](basics): Fundamental concepts, terminology, and technical background
- [Glossary](glossary): Definitions of common terms used in CNC and 3D printing
- [Migrating](migrating): Migration guides from other firmware
  - [From GRBL](from-grbl): Porting your GRBL configuration to Smoothie
  - [From Marlin](from-marlin): Porting your Marlin configuration to Smoothie

{::nomarkdown}
<a href="/images/board.png">
  <img src="/images/board.png" alt="Board" style="width: 75px; height: 75px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

- [Configuring Smoothie](configuring-smoothie): Configuration and use, by module
  - [List of all configuration options](configuration-options)
  - [Motion control](motion-control): All things related to gcode interpolation, motion and acceleration planning, and step generation
  - [Arm Solutions](arm-solutions): [Cartesian](cartesian), [Delta](delta), [Hbot](hbot), [Core-XY](Core-XY), [Rotary Delta](rotary-delta), [Morgan Scara](morgan-scara)
  - [6axis](6axis): Using A, B and C axes, for 4, 5 or 6 axis motion.
  - [Grbl mode](grbl-mode): Using Smoothie in CNC-specific mode instead of 3D printing mode

### Fall 2026 feature documentation

The [Fall 2026 feature inventory](new-features#fall-2026) records source and maturity status for this set.

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

The Fall 2026 feature inventory below covers V2 additions. Backlash compensation is still experimental in both branches; see [its status](/backlash-compensation).

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

- **Motion:** [real-time feed hold and cycle start](feed-hold), [slaved internal-driver axes](actuator-slaving), [NIST G30/G30.1](g30#nist-stored-position-in-v2-grbl-mode), [Lathe G33](lathe), and [Electronic Leadscrew](els)
- **Machine controls:** [direct and shared MPG control](mpg#axis-selector-optional), [Button Box macros](button-box), [FAULT inputs](button-box#fault-inputs), and the current [matrix-keypad limitation](button-box#matrix-keypads)
- **Console and programs:** [`ed` file editing](console-commands#ed), [`le` command-line editing and history](console-commands#le), and [O-word subroutines](subroutines)
- **Communication and display:** [auxiliary UART targeting](uart#send-text-to-a-connected-device-v2-only), [V2 network services](network#v2-network-services), and [MAX7219 DRO displays](max7219-dro)

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

- **Experimental backlash compensation:** [V1 branch and pending V2 PR](backlash-compensation); neither implementation is merged into normal firmware

{::nomarkdown}
<a href="/images/tool-belt.png">
  <img src="/images/tool-belt.png" alt="Tools" style="width: 75px; height: 75px; float: right; margin-left: 1rem;"/>
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
    - [Using FSRs](using-fsrs): Force Sensing Resistors for bed leveling

{::nomarkdown}
<a href="/images/settings.png">
  <img src="/images/settings.png" alt="Tools" style="width: 75px; height: 75px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}


  - [Utilities](utils)
    - [Smoopi](smoopi): **New and Recommended** drive Smoothie using a color touch screen on [Raspberry Pi](https://www.raspberrypi.com/) 
    - [Player](player): Play files from the SD card
    - [Currentcontrol](currentcontrol): Digitally control your stepper motors current
    - [AdvancedMotorDriver](advancedmotordriver): For controlling SPI based stepper motor controllers like DRV8711 and TMC26X
    - [Configurator](configurator): Manipulate configuration using console commands
    - [Kill Button](killbutton) and [Play LED](play-led): S/W based kill and play activity LED
    - [Panel](panel): Drive smoothie directly without a host using monochrome lcd screens and click encoders
{::nomarkdown}<versioned><v1><div class="versioned-list-item" style="margin-left:1.25em;"><a href="jogger">Jogger</a>: Joystick-based jogging control for manual machine movement</div><div class="versioned-list-item" style="margin-left:1.25em;"><a href="joystick">Joystick</a>: Analog input from joysticks, sliders, and knobs</div></v1><v2><div class="versioned-list-item" style="margin-left:1.25em;"><a href="tm1638-display">TM1638 Display</a>: 7-segment LED display with buttons</div><div class="versioned-list-item" style="margin-left:1.25em;"><a href="button-box">Button Box</a>: Programmable button panel for macros and machine control</div><div class="versioned-list-item" style="margin-left:1.25em;"><a href="mpg">MPG</a>: Manual Pulse Generator hand wheels for axis jogging</div><div class="versioned-list-item" style="margin-left:1.25em;"><a href="voltage-monitor">Voltage Monitor</a>: Monitor power supply voltages</div></v2></versioned>{:/nomarkdown}
    - [on_boot.gcode File](on-boot-gcode): Execute G-codes every time the board boots
{::nomarkdown}<versioned><v2><div class="versioned-list-item" style="margin-left:1.25em;"><a href="actuator-slaving">Slaved Axes</a>: Drive two motors from one axis (dual Y or Z) and square them independently</div></v2></versioned>{:/nomarkdown}

{::nomarkdown}
<a href="/images/console.png">
  <img src="/images/console.png" alt="Tools" style="width: 75px; height: 75px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}



- [Using Smoothie](using-smoothie): General firmware use
  - [Console Commands](console-commands)
  - [Supported G-Codes](supported-g-codes)
  - [Stopping Smoothie](stopping-smoothie)
    - [Emergency Stop](emergencystop)
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
<a href="/images/message.png">
  <img src="/images/message.png" alt="Binary Code" style="width: 75px; height: 75px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}


- [Communication](communication)
  - [Network](network)
  - [USB](usb)
  - [UART](uart)
  - [Bluetooth](bluetooth-serial)
  - [Wifi](wifi) (new)

{::nomarkdown}
<a href="/images/binary-code.png">
  <img src="/images/binary-code.png" alt="Binary Code" style="width: 75px; height: 75px; float: right; margin-left: 1rem;"/>
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

**Available now**: [SmoothieBoard](smoothieboards), the modular and awesome, smoothie-dedicated CNC controller.

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
- [Forth on Smoothieboard V2](forth): Experimental onboard programming and scripting; requires the `add/forth` firmware branch

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
  <img src="/images/worker.png" alt="Worker" style="width: 75px; height: 75px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

- {::nomarkdown}<versioned><v1>{:/nomarkdown}Powerful (120Mhz, 32bit) [micro-controller](http://www.embeddedartists.com/products/lpcxpresso/lpc1769_xpr.php).{::nomarkdown}</v1><v2>{:/nomarkdown}Powerful (480MHz dual-core, 32bit) [micro-controller](https://www.st.com/en/microcontrollers-microprocessors/stm32h745xi.html).{::nomarkdown}</v2></versioned>{:/nomarkdown}
- Easy to use and [configure](configuring-smoothie).
- Smooth, jerk-free motion and enabling higher speeds
- Can be used for CNC milling, laser cutting, and 3D printing.
- [Opensource/hardware all-included controller board](smoothieboards)
- [SD-Card](sd-card) support for configuration and executing G-code.
- Composite USB Mass Storage + Serial interface to host.
- Free [email support (✿◠‿◠)](mailto:wolf.arthur@gmail.com)

## For hackers

{::nomarkdown}
<a href="/images/blueprint-1.png">
  <img src="/images/blueprint-1.png" alt="Hackers" style="width: 75px; height: 75px; float: right; margin-left: 1rem;"/>
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
  <img src="/images/coding.png" alt="Coding" style="width: 75px; height: 75px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

- **[Todo](todo)**: List of the things that are being worked on in the project. We need your help!
- [HowItWorks](howitworks): Walk-through the inner workings of Smoothie (°٢°)
- [ModuleExample](moduleexample): Basics of working with Modules in Smoothie
- [Listofevents](listofevents): List of all Events you can register for
- [Developers-Guide](developers-guide): Information useful to smoothie coders
- [LPC1769 pin usage](lpc1769-pin-usage): Documents all the pins used and which are spare
- [STM32H7 pin usage](stm32h7-pin-usage): Pin assignments for the STM32H7 microcontroller (V2)
- [DebuggingSmoothie](debuggingsmoothie): Using the built-in MRI serial debugger
- [Coding-Standards](coding-standards)
- [Contribution Guidelines](contribution-guidlines)
- [Eclipse](eclipse): Using Eclipse IDE to build and debug
- [Github](github): How to submit pull requests for Smoothie
- [Third Party Branches](third-party-branches): a list of useful branches to smoothie that may be helpful to some but are not included in the main branch
- Smoothie development chat: [IRC](irc), #smoothiedev on irc.libera.chat. General help: #smoothieware.
- [Logo Proposals](logo-proposals)

Current edge build status: [![Build Status](https://app.travis-ci.com/Smoothieware/Smoothieware.svg?branch=edge)](https://app.travis-ci.com/Smoothieware/Smoothieware)

<!-- extension-board-directory:start -->
## Extension boards

The [complete extension-board directory](/extension-boards) covers 80 modern design families and 39 historical or related source records, with descriptions and guide status. Documentation and instructional diagrams are being completed; no board has yet passed the complete reader checklist. Select the exact revision before wiring.

{::nomarkdown}
<style>
  .homepage-extension-groups { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0 1.5rem; }
  .homepage-extension-groups section { min-width: 0; }
  @media (max-width: 800px) { .homepage-extension-groups { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
  @media (max-width: 520px) { .homepage-extension-groups { grid-template-columns: 1fr; } }
</style>
<div class="homepage-extension-groups">
{:/nomarkdown}

{::nomarkdown}
<section markdown="1">
{:/nomarkdown}

### Motor and motion control

- [Advanced H-bridge encoder board](/extensions/advanced-h-bridge-encoder-board)
- [Bouni analog spindle control](/extensions/bouni-analog-spindle-control)
- [External STEP/DIR signal breakout](/extensions/historical-external-stepper-signal-breakout)¹
- [Six-axis interface board](/extensions/historical-six-axis-breakout)¹
- [Leadshine-like external servo drivers](/extensions/leadshine-like-external-servo-drivers)
- [Leadshine-like external stepper drivers](/extensions/leadshine-like-external-stepper-drivers)
- [Multi-motor single-axis command splitter](/extensions/historical-multi-motor-single-axis-splitter)¹
- [Pololu driver breakout board](/extensions/pololu-driver-breakout-board)
- [Servo control](/extensions/servo-control)
- [Stepper motor driver breakout board (Allegro)](/extensions/stepper-driver-breakout-allegro)
- [Stepper motor driver breakout board (Trinamic)](/extensions/stepper-driver-breakout-trinamic)
- [Position feedback board](/extensions/position-feedback-board)

{::nomarkdown}
</section>
{:/nomarkdown}

{::nomarkdown}
<section markdown="1">
{:/nomarkdown}

### Sensors and inputs

- [Additional endstop inputs breakout](/extensions/additional-endstop-inputs-breakout)
- [BLTouch-like probe](/extensions/bltouch-like-probe)
- [BounceStop hardware debounce](/extensions/historical-bounce-stop)¹
- [Filament encoder board](/extensions/filament-encoder-board)
- [Filament progress sensor](/extensions/filament-progress-sensor)
- [FSR breakout board](/extensions/fsr-breakout-board)
- [Hall endstop breakout](/extensions/hall-endstop-breakout)
- [HX711 load-cell amplifier](/extensions/hx711-load-cell-amplifier)
- [Inductive proximity sensor adapter (level shifter)](/extensions/inductive-proximity-sensor-adapter)
- [Input protector](/extensions/input-protector)
- [Laser barrier board](/extensions/laser-barrier-board)
- [Mechanical endstop breakout](/extensions/mechanical-endstop-breakout)
- [OptoIsoStop isolated endstop interface](/extensions/historical-opto-isolated-endstop-adapter)¹
- [Pressure sensor](/extensions/pressure-sensor)
- [Simple PT100 amplifier board](/extensions/simple-pt100-amplifier-board)
- [Smoke detector](/extensions/smoke-detector)
- [Spectral analysis board](/extensions/spectral-analysis-board)
- [SPI PT100 amplifier board](/extensions/spi-pt100-amplifier-board)
- [SPI thermocouple breakout](/extensions/spi-thermocouple-breakout)
- [ThermistorTrigger — Dual thermistor hardware setpoint trigger](/extensions/historical-thermistortrigger)¹
- [Water-flow sensor adapter](/extensions/water-flow-sensor-adapter)

{::nomarkdown}
</section>
{:/nomarkdown}

{::nomarkdown}
<section markdown="1">
{:/nomarkdown}

### Power, relays and outputs

- [AC SSR board](/extensions/ac-ssr-board)
- [ATX connector board](/extensions/atx-connector-board)
- [DC SSR board](/extensions/dc-ssr-board)
- [Extruder toolhead harness with motor provision](/extensions/historical-extruder-toolhead-harness-with-motor)¹
- [Extruder toolhead harness without motor](/extensions/historical-extruder-toolhead-harness-without-motor)¹
- [Flambegate — High-side heater shutoff](/extensions/historical-flambegate)¹
- [Flambehub — Hardware trigger and power-disconnect hub](/extensions/historical-flambehub)¹
- [Four-PWM/two-input/probe interface](/extensions/historical-gadgeteer-pwm-io-board)¹
- [Gate boards](/extensions/gate-boards)
- [Additional general purpose outputs breakout / Servo board](/extensions/general-purpose-output-servo-board)
- [Laser diode driver breakout](/extensions/laser-diode-driver-breakout)
- [Laser PSU adapter board](/extensions/laser-psu-adapter-board)
- [PiPower — Pi power, UART and button shield](/extensions/historical-pipower)¹
- [Power supply connector board](/extensions/power-supply-connector-board)
- [Seven-channel AC mechanical relay](/extensions/seven-channel-ac-mechanical-relay)
- [Seven-channel DC mechanical relay](/extensions/seven-channel-dc-mechanical-relay)
- [Single-channel AC mechanical relay](/extensions/single-channel-ac-mechanical-relay)
- [Single-channel DC mechanical relay](/extensions/single-channel-dc-mechanical-relay)
- [Single-Channel Large MOSFET output](/extensions/single-channel-large-mosfet-output)
- [Single-Channel Small MOSFET advanced output](/extensions/single-channel-small-mosfet-advanced-output)
- [Single-Channel Small MOSFET basic output](/extensions/single-channel-small-mosfet-basic-output)
- [Single-channel solid state relay output](/extensions/single-channel-solid-state-relay-output)

{::nomarkdown}
</section>
{:/nomarkdown}

{::nomarkdown}
<section markdown="1">
{:/nomarkdown}

### Communication and signal interfaces

- [Bidirectional level shifting board](/extensions/bidirectional-level-shifting-board)
- [Bouni RS-485 spindle control](/extensions/bouni-rs485-spindle-control)
- [Cheap UART adapter breakout](/extensions/cheap-uart-adapter-breakout)
- [Differential signal extender](/extensions/differential-signal-extender)
- [Differential SPI LVDS extender](/extensions/historical-differential-spi-lvds-extender)¹
- [Differential SPI signal extender](/extensions/differential-spi-signal-extender)
- [Differential STEP/DIR/ENABLE extender](/extensions/differential-step-dir-en-extender)
- [Fourteen channel 3.3/5 V level shifter](/extensions/historical-gadgeteer-3v3-5v-level-shifter)¹
- [Gadgeteer RS-232 level adapter](/extensions/historical-gadgeteer-rs232-adapter)¹
- [Gadgeteer-to-CAN adapter](/extensions/gadgeteer-to-can)
- [Gadgeteer Qwiic hub](/extensions/historical-gadgeteer-qwiic-adapter)¹
- [jaUART CP2104 USB-UART adapter](/extensions/historical-jauart-usb-uart-adapter)¹
- [Long distance extender](/extensions/long-distance-extender)
- [Opto-isolation pass-through board](/extensions/opto-isolation-pass-through-board)
- [Qwiic-to-Gadgeteer adapter](/extensions/qwiic-to-gadgeteer-adapter)
- [Serial to WiFi board](/extensions/serial-to-wifi-board)
- [SPI hub](/extensions/spi-hub)
- [UART breakout](/extensions/uart-breakout)
- [USB/Serial breakout](/extensions/usb-serial-breakout)
- [Wireless Gadgeteer extender](/extensions/wireless-gadgeteer-extender)
- [Wireless series Smoothieboard-side master](/extensions/wireless-series-master)

{::nomarkdown}
</section>
{:/nomarkdown}

{::nomarkdown}
<section markdown="1">
{:/nomarkdown}

### Displays, controls and accessories

- [Button boards](/extensions/button-boards)
- [Buzzer module](/extensions/buzzer-module)
- [Camera trigger board](/extensions/camera-trigger-board)
- [Debug probe](/extensions/debug-probe)
- [DIP-switch and debounced-input board](/extensions/historical-gadgeteer-dip-switch-board)¹
- [GLCD breakout](/extensions/glcd-breakout)
- [Seven-LED GPIO board](/extensions/historical-gadgeteer-led-breakout)¹
- [LED breakout](/extensions/led-breakout)
- [SD card breakout](/extensions/sd-card-breakout)
- [Universal panel adapter](/extensions/universal-panel-adapter)

{::nomarkdown}
</section>
{:/nomarkdown}

{::nomarkdown}
<section markdown="1">
{:/nomarkdown}

### Host adapters and prototyping

- [Arduino adapter](/extensions/arduino-adapter)
- [Arduino-to-Gadgeteer shield](/extensions/arduino-to-gadgeteer-shield)
- [BeagleBone breakout](/extensions/beaglebone-breakout)
- [Breadboard board](/extensions/breadboard-board)
- [C.H.I.P. breakout board](/extensions/chip-breakout-board)
- [CPLD adapter](/extensions/cpld-adapter)
- [D-sub-to-Gadgeteer IN adapter](/extensions/d-sub-to-gadgeteer-in)
- [D-sub-to-Gadgeteer OUT adapter](/extensions/d-sub-to-gadgeteer-out)
- [Dual-device I2C digital potentiometer](/extensions/historical-dual-digital-potentiometer)¹
- [ESP32 DevKit to Gadgeteer host board](/extensions/esp32-to-gadgeteer-host)
- [Five-port Gadgeteer header adapter](/extensions/historical-five-port-gadgeteer-header-adapter)¹
- [Intel Edison breakout](/extensions/intel-edison-breakout)
- [Papilio adapter](/extensions/papilio-adapter)
- [Parallel port breakout](/extensions/parallel-port-breakout)
- [Gadgeteer perma-proto breadboard](/extensions/perma-proto-gadgeteer)
- [Raspberry Pi 40-pin to Gadgeteer HAT](/extensions/raspberry-pi-to-gadgeteer-hat)
- [Raspberry Pi Zero breakout](/extensions/raspberry-pi-zero-breakout)
- [Raw pins breakout](/extensions/raw-pins-breakout)
- [Raw pins screw terminal breakout](/extensions/raw-pins-screw-terminal-breakout)
- [Teensy 4.1 to Gadgeteer host board](/extensions/teensy-to-gadgeteer-host)

{::nomarkdown}
</section>
{:/nomarkdown}

{::nomarkdown}
</div>
{:/nomarkdown}
<!-- extension-board-directory:end -->

# Smoothie in Research

- [PARA: A one-meter reach, two-kg payload, three-DoF open source robotic arm with customizable end effector](https://pmc.ncbi.nlm.nih.gov/articles/PMC9123426/)
- [OpenWorkstation: A modular open-source technology for automated in vitro workflows](https://pmc.ncbi.nlm.nih.gov/articles/PMC9041211/)
- [Automated melt electrowritting platform with real-time process monitoring](https://pmc.ncbi.nlm.nih.gov/articles/PMC9123438/)
- [Additive manufacturing of metallic glass from powder in space](https://www.nature.com/articles/s41526-023-00327-7)
- [GPCR signaling measurement and drug profiling with an automated live-cell microscopy system](https://pmc.ncbi.nlm.nih.gov/articles/PMC9994309/)
- [FusX: A Rapid One-Step Transcription Activator-Like Effector Assembly System for Genome Science](https://pmc.ncbi.nlm.nih.gov/articles/PMC4931509/)
- [MAPLE (modular automated platform for large-scale experiments), a robot for integrated organism-handling and phenotyping](https://elifesciences.org/articles/37166)
- [Continuous, long-term crawling behavior characterized by a robotic transport system](https://elifesciences.org/articles/86585)
- [Precision cooking for printed foods via multiwavelength lasers](https://www.nature.com/articles/s41538-021-00107-1)
- [Multi-Material Three-Dimensional Food Printing with Simultaneous Infrared Cooking](https://doi.org/10.1089/3dp.2018.0042)
- [MVO Automation Platform: Addressing Unmet Needs in Clinical Laboratories with Microcontrollers, 3D Printing, and Open-Source Hardware/Software](https://journals.sagepub.com/doi/10.1177/2472630318773693)
- [A screw extrusion-based system for additive manufacturing of wood: Sodium silicate thermoset composites](https://journals.sagepub.com/doi/10.1177/16878132231210373)
- [Effect of Biochar Reinforcement on the Wettability, Mechanical, and Thermal Properties of Extrudable Wood–Sodium Silicate Composites](https://www.mdpi.com/2227-9717/14/13/2094)
- [Inverted laser sintering of metal powders](https://www.nature.com/articles/s41598-023-47184-8)
- [Modular Approach in CNC Kernel Development](https://www.fruct.org/files/publications/volume-28/fruct28/Zim.pdf)
- [Diseño e Implementación de una Impresora 3D Core XY multifuncional](https://doi.org/10.18050/td.v16i1.1960)
- [Bridging Engineering and Biochemistry: Hands-On Automation Laboratory Modules with an Open-Source Pipetting Robot](https://peer.asee.org/59251)
- [A Digital Manufacturing Process For Three-Dimensional Electronics](https://etheses.whiterose.ac.uk/id/eprint/27196/)
- [Particle flow analysis for multi-material 3D food printing](https://pure.tue.nl/ws/portalfiles/portal/244136648/20221206_CO_Klomp_hf.pdf)
- [Electronics and control system for Laser cutter](https://dspace.cvut.cz/entities/publication/9d354a36-bb15-4aa1-855d-c3ad33629c3d)
- [3D Printing of Wood-Sodium Silicate Composites](https://verso.uidaho.edu/esploro/outputs/graduate/3D-Printing-of-Wood-Sodium-Silicate-Composites/996638044601851)
- [Dopaminergic Regulation of Nicotine-Evoked Locomotor States in Drosophila Larvae](https://scholarship.miami.edu/esploro/outputs/doctoral/Dopaminergic-Regulation-of-Nicotine-Evoked-Locomotor-States/991033051934702976)
- [Adaptação de fresadora CNC 3 eixos para uso em processos de biofabricação](https://riut.utfpr.edu.br/jspui/bitstream/1/10636/1/CT_DAMEC_2018_1_37.pdf)
- [Identifying Features in Forks](https://www.cs.cmu.edu/~ckaestne/pdf/icse18forks.pdf)
- [What the Fork: A Study of Inefficient and Efficient Forking Practices in Social Coding](https://cmustrudel.github.io/papers/fse19forks.pdf)
- [Imaging-guided platform for real-time intervention in complex in vitro models](https://assets-eu.researchsquare.com/files/rs-7179174/v1/017e0c5b-c17e-4478-b9ce-88a21e1b9789.pdf?c=1758892117)
- [Development of Open Source 3D Bioprinters For Low-Cost and High-Fidelity Biofabrication](https://abstracts.biomaterials.org/data/papers/2019/abstracts/511.pdf)
- [Feature-based insight for forks in social coding platforms](https://www.sciencedirect.com/science/article/abs/pii/S0950584921001373)

# Reviews

[Watch a review](http://www.youtube.com/embed/vsu_vAKvRO0?hd=1)

{::nomarkdown}
<a href="/images/oshw-logo.png">
  <img src="/images/oshw-logo.png" alt="OSHW logo" style="width:75px; height:auto;"/>
</a>
{:/nomarkdown}

¹ Historical design from the original extension-board collection.
