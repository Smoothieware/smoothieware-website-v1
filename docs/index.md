
> [!NOTE]
> ![Smoothie Logo](/images/oshw-logo.png)
> ![Information Icon](/images/info_1_.png)
> **Smoothie** is a **[free, opensource, high performance](start.md)** and modular **G-code** interpreter and **CNC** control system for the powerful **[Smoothieboard](Smoothieboard.md)** 32bits controller. It's designed to be very user-friendly and hacker-friendly. The Source code is on [GitHub](https://github.com/Smoothieware/Smoothieware). ヾ(❀◦◡◦)彡 

> [!WARNING]
> ![Festa Junina Icon](/images/festa-junina.png)
> Smoothieboard v2 is now on Kickstarter! Get your board [here](https://www.kickstarter.com/projects/arthurwolf/smoothieboard-v2).

The Smoothie project is always looking for help, whatever your skills are, there are things you can do to improve the project with the other volunteers, if you feel like you could give us some of your free time, please [contact us](mailto:wolf.arthur@gmail.com), **help and working together** is what has made this project so neat, advanced and precious over the years, and is **very welcome**.

<br>

## Documentation

### Step by step guides

![3D Printer Icon](/images/icon.3dprinter.big.round.png)

[3D printer guide](3D-printer-guide.md)

![Laser Cutter Icon](/images/icon.laser.big.round.png)

[Laser cutter guide](laser-cutter-guide.md)

![CNC Mill Icon](/images/icon.cnc.mill.round.big.png)

[CNC mill guide](cnc-mill-guide.md)

There is also a [Pick and Place](Pick-and-Place.md) guide.

### Firmware documentation

- [Basics](Basics.md)
- [Communication](Communication.md)
  - [Network](Network.md)
  - [USB](USB.md)
  - [UART](UART.md)
  - [Bluetooth](bluetooth-serial.md)
  - [Wifi](Wifi.md) (new)
- ![Configuration Icon](/images/board.png)
  - [Configuring Smoothie](Configuring-Smoothie.md): Configuration and use, by module
  - [List of all configuration options](configuration-options.md)
  - [Motion control](Motion-control.md): All things related to gcode interpolation, motion and acceleration planning, and step generation
    - [Arm Solutions](Arm-Solutions.md): [Cartesian](Cartesian.md), [Delta](delta.md), [Hbot](Hbot.md), [Core-XY](Core-XY.md), [Rotary Delta](Rotary-Delta.md), [Morgan Scara](Morgan-Scara.md)
    - [6axis](6axis.md): Using A, B and C axes, for 4, 5 or 6 axis motion.
    - [Grbl mode](grbl-mode.md): Using Smoothie in CNC-specific mode instead of 3D printing mode
- ![Tools Icon](/images/glove.png)
  - [Tools](Tools.md)
    - [Extruder](Extruder.md): Control extruders for 3D printing
    - [Temperaturecontrol](Temperaturecontrol.md): Heat and cool things like hotends and heated beds
    - [Laser](Laser.md): For cutting
    - [Endstops](Endstops.md): For homing
    - [Spindle](spindle-module.md): Control your spindle motor with G-code
    - [Switch](Switch.md): Quickly create custom G-code ⇆ Input/Output mapping without needing to write a custom module, like to control a fan
    - [TemperatureSwitch](TemperatureSwitch.md): Automatically turn/on a device based on a threshold temperature
    - [ZProbe](ZProbe.md): For probing, levelling, and automated calibration
      - [PCB milling](PCB-milling.md): For PCB milling
    - [Drillingcycles](Drillingcycles.md): Canned drilling cycles support
    - [Filament-detector](Filament-detector.md): Use an encoder to check filament is pushed correctly
  - [Utils](Utils.md)
    - [Player](Player.md): Play files from the SD card
    - [Currentcontrol](Currentcontrol.md): Digitally control your stepper motors current 
    - [AdvancedMotorDriver](AdvancedMotorDriver.md): For controlling SPI based stepper motor controllers like DRV8711 and TMC26X
    - [Configurator](Configurator.md): Manipulate configuration using console commands
    - [Kill Button](killbutton.md) and [Play LED](Play-LED.md): S/W based kill and play activity LED
    - [Panel](Panel.md): Drive smoothie directly without a host using monochrome lcd screens and click encoders
    - [Smoopi](Smoopi.md): **New** drive Smoothie using a color touch screen on rpi
    - [on_boot.gcode](on_boot.gcode.md): Execute G-codes every time the board boots
- [Using Smoothie](Using-Smoothie.md): General firmware use
  - [Console Commands](Console-Commands.md)
  - [Supported G-Codes](Supported-G-Codes.md)
  - [Stopping Smoothie](Stopping-Smoothie.md)
  - [Software](Software.md)
    - [Pronterface](Pronterface.md)
    - [Octoprint](Octoprint.md)
    - [bCNC](bCNC.md)
    - [Smoopi](Smoopi.md): **New** drive Smoothie using a color touch screen on rpi
    - [Fusion360](Fusion360.md)
- **[Troubleshooting](Troubleshooting.md)**: It doesn't work (ノo益o)ノ彡┻━┻ ! What to do ∩(︶▽︶)∩.
  - [MRI](mri-debugging.md): In the very rare case smoothie code crashes
- [Contributing](Contributing.md): We need your help!
  - [Todo](Todo.md): List of the things that are being worked on in the project.
  - [Editing the Wiki](Editing-the-Wiki.md): How to edit this documentation and improve it.

> [!NOTE]
> ![Binary Code Icon](/images/binary-code.png)
> **The firmware.bin file**
> 
> Note, Smoothieboards come completely pre-flashed, you do not need to compile or flash the firmware, unless you want to upgrade to a newer version, or to contribute to the code.
> 
> - [Getting Smoothie](Getting-Smoothie.md)
> - [Flashing Smoothie](Flashing-Smoothie.md)
> - [Compiling Smoothie](Compiling-Smoothie.md)
> - [Setting up a SD-Card](sd-card.md)
> - [How to file an Issue on Github](https://github.com/Smoothieware/Smoothieware/blob/edge/ISSUE_TEMPLATE.md)
> - [Flashing the Bootloader](Flashing-the-Bootloader.md)

More: [Windows Drivers](Windows-Drivers.md), [Linux Drivers](Linux-Drivers.md), [Mac Drivers](Mac-Drivers.md), [New Features](New-Features.md), [Gallery](Gallery.md), [Smoothieboard Beta Guide](Smoothieboard-Beta-Guide.md)

### Hardware documentation

**Available now**: [SmoothieBoard](smoothieboard.md), the modular and awesome, smoothie-dedicated CNC controller.

- [Smoothieboards](Smoothieboards.md): all versions of the Smoothieboard hardware
- [Running Smoothie on a Breadboard](smoothie-on-a-breadboard.md)
- [Pinout](Pinout.md) has diagrams of all pins on the board
- [Pin usage](lpc1769-pin-usage.md) has information on the use and capability of all pins
- [How to wire](How-To-Wire.md) describes tutorials, tools and best practices for wiring and cabling work when installing your Smoothieboard in a new machine.

![Smoothieboard Fritzing](/images/smoothieboard-fritzing.png)

[Get a Smoothieboard here](getting-smoothieboard.md)

## Features

### For users

![Worker Icon](/images/worker.png)

- Powerful (120Mhz, 32bit) [micro-controller](http://www.embeddedartists.com/products/lpcxpresso/lpc1769_xpr.php).
- Easy to use and [configure](configuring-smoothie.md).
- Smooth, jerk-free motion and enabling higher speeds
- Can be used for CNC milling, laser cutting, and 3D printing.
- [Opensource/hardware all-included controller board](smoothieboard.md)
- [SD-Card](SD-Card.md) support for configuration and executing G-code.
- Composite USB Mass Storage + Serial interface to host.
- Free [email support (✿◠‿◠)](mailto:wolf.arthur@gmail.com)

### For hackers

![Blueprint Icon](/images/blueprint_1_.png)

- Modular, event-driven design, allowing to add functionality easily without modifying the core. See the [ModuleExample](ModuleExample.md)
- Designed to support non-Cartesian machines
- LPC1769 leaves lots of room for additional functionality.
- The mBed [functions](http://mbed.org/handbook/Homepage) and [additional libraries](http://mbed.org/cookbook/Homepage) are available for easy and fast prototyping. But compiles off-line (using GCC), not dependent on the mBed online compiler
- Strict process for acceptance of new code, to keep the project at high quality
- Heavily commented code

{% include_relative donate.md %}

### Developer documentation

![Coding Icon](/images/coding.png)

- **[Todo](Todo.md)**: List of the things that are being worked on in the project. We need your help!
- [HowItWorks](HowItWorks.md): Walk-through the inner workings of Smoothie (°٢°)
- [ModuleExample](ModuleExample.md): Basics of working with Modules in Smoothie
- [Listofevents](Listofevents.md): List of all Events you can register for
- [Developers-Guide](Developers-Guide.md): Information useful to smoothie coders
- [LPC1769 pin usage](LPC1769-pin-usage.md): Documents all the pins used and which are spare
- [DebuggingSmoothie](DebuggingSmoothie.md): Using the built-in MRI serial debugger
- [Coding-Standards](Coding-Standards.md)
- [Contribution Guidelines](Contribution-Guidlines.md)
- [Eclipse](Eclipse.md): Using Eclipse IDE to build and debug
- [Github](Github.md): How to submit pull requests for Smoothie
- [Third Party Branches](Third-Party-Branches.md): a list of useful branches to smoothie that may be helpful to some but are not included in the main branch
- Smoothie developer IRC forum on [IRC](IRC.md) in #smoothiedev @ irc.freenode.net
- [Logo Proposals](logo-proposals.md)
- Current edge build status: ![Build Status](https://travis-ci.org/Smoothieware/Smoothieware.svg?branch=edge)

## Review

<iframe width="100%" height="400" src="http://www.youtube.com/embed/vsu_vAKvRO0?hd=1" frameborder="0" allowfullscreen></iframe>
