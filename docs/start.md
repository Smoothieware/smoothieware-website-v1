
> [!NOTE]
> <img src="images/oshw-logo.png" style="width:50px; height:50px;">
> <img src="images/info-1.png" style="width:50px; height:50px;">
> **Smoothie** is a **[free, opensource, high performance](start.md)** and modular **G-code** interpreter and **CNC** control system for the powerful **[Smoothieboard](smoothieboard.md)** 32bits controller. It's designed to be very user-friendly and hacker-friendly. The Source code is on [GitHub](https://github.com/Smoothieware/Smoothieware). ヾ(❀◦◡◦)彡 

> [!WARNING]
> <img src="images/festa-junina.png" style="width:50px; height:50px;">
> Smoothieboard v2 is now on Kickstarter! Get your board [here](https://www.kickstarter.com/projects/arthurwolf/smoothieboard-v2).

The Smoothie project is always looking for help, whatever your skills are, there are things you can do to improve the project with the other volunteers, if you feel like you could give us some of your free time, please [contact us](mailto:wolf.arthur@gmail.com), **help and working together** is what has made this project so neat, advanced and precious over the years, and is **very welcome**.

<br>

## Documentation

### Step by step guides

![3D Printer Icon](images/icon-3d-printer-big-round.png)

[3D printer guide](3d-printer-guide.md)

![Laser Cutter Icon](images/icon-laser-big-round.png)

[Laser cutter guide](laser-cutter-guide.md)

![CNC Mill Icon](images/icon-cnc-mill-big-round.png)

[CNC mill guide](cnc-mill-guide.md)

There is also a [Pick and Place](pick-and-place.md) guide.

### Firmware documentation

- [Basics](basics.md)
- [Communication](communication.md)
  - [Network](network.md)
  - [USB](usb.md)
  - [UART](uart.md)
  - [Bluetooth](bluetooth-serial.md)
  - [Wifi](wifi.md) (new)
- ![Configuration Icon](images/board.png)
  - [Configuring Smoothie](configuring-smoothie.md): Configuration and use, by module
  - [List of all configuration options](configuration-options.md)
  - [Motion control](motion-control.md): All things related to gcode interpolation, motion and acceleration planning, and step generation
    - [Arm Solutions](Arm-Solutions.md): [Cartesian](Cartesian.md), [Delta](delta.md), [Hbot](Hbot.md), [Core-XY](Core-XY.md), [Rotary Delta](Rotary-Delta.md), [Morgan Scara](morgan-scara.md)
    - [6axis](6axis.md): Using A, B and C axes, for 4, 5 or 6 axis motion.
    - [Grbl mode](grbl-mode.md): Using Smoothie in CNC-specific mode instead of 3D printing mode
- !<img src="images/glove.png" alt="Tools Icon" width=200>
  - [Tools](tools.md)
    - [Extruder](extruder.md): Control extruders for 3D printing
    - [Temperaturecontrol](temperaturecontrol.md): Heat and cool things like hotends and heated beds
    - [Laser](laser.md): For cutting
    - [Endstops](endstops.md): For homing
    - [Spindle](spindle-module.md): Control your spindle motor with G-code
    - [Switch](switch.md): Quickly create custom G-code ⇆ Input/Output mapping without needing to write a custom module, like to control a fan
    - [TemperatureSwitch](temperatureswitch.md): Automatically turn/on a device based on a threshold temperature
    - [ZProbe](zprobe.md): For probing, levelling, and automated calibration
      - [PCB milling](pcb-milling.md): For PCB milling
    - [Drillingcycles](drillingcycles.md): Canned drilling cycles support
    - [Filament-detector](filament-detector.md): Use an encoder to check filament is pushed correctly
  - [Utils](utils.md)
    - [Player](player.md): Play files from the SD card
    - [Currentcontrol](currentcontrol.md): Digitally control your stepper motors current 
    - [AdvancedMotorDriver](advancedmotordriver.md): For controlling SPI based stepper motor controllers like DRV8711 and TMC26X
    - [Configurator](configurator.md): Manipulate configuration using console commands
    - [Kill Button](killbutton.md) and [Play LED](play-led.md): S/W based kill and play activity LED
    - [Panel](panel.md): Drive smoothie directly without a host using monochrome lcd screens and click encoders
    - [Smoopi](smoopi.md): **New** drive Smoothie using a color touch screen on rpi
    - [on_boot.gcode](on_boot.gcode.md): Execute G-codes every time the board boots
- [Using Smoothie](using-smoothie.md): General firmware use
  - [Console Commands](console-commands.md)
  - [Supported G-Codes](supported-g-codes.md)
  - [Stopping Smoothie](stopping-smoothie.md)
  - [Software](software.md)
    - [Pronterface](pronterface.md)
    - [Octoprint](octoprint.md)
    - [bCNC](bcnc.md)
    - [Smoopi](smoopi.md): **New** drive Smoothie using a color touch screen on rpi
    - [Fusion360](fusion360.md)
- **[Troubleshooting](troubleshooting.md)**: It doesn't work (ノo益o)ノ彡┻━┻ ! What to do ∩(︶▽︶)∩.
  - [MRI](mri-debugging.md): In the very rare case smoothie code crashes
- [Contributing](contributing.md): We need your help!
  - [Todo](todo.md): List of the things that are being worked on in the project.
  - [Editing the Wiki](editing-the-wiki.md): How to edit this documentation and improve it.

> [!NOTE]
> !<img src="images/binary-code.png" alt="Binary Code Icon" width=200>
> **The firmware.bin file**
> 
> Note, Smoothieboards come completely pre-flashed, you do not need to compile or flash the firmware, unless you want to upgrade to a newer version, or to contribute to the code.
> 
> - [Getting Smoothie](getting-smoothie.md)
> - [Flashing Smoothie](flashing-smoothie.md)
> - [Compiling Smoothie](compiling-smoothie.md)
> - [Setting up a SD-Card](sd-card.md)
> - [How to file an Issue on Github](https://github.com/smoothieware/smoothieware/blob/edge/issue_template.md)
> - [Flashing the Bootloader](flashing-the-bootloader.md)

More: [Windows Drivers](Windows-Drivers.md), [Linux Drivers](Linux-Drivers.md), [Mac Drivers](Mac-Drivers.md), [New Features](New-Features.md), [Gallery](Gallery.md), [Smoothieboard Beta Guide](smoothieboard-beta-guide.md)

### Hardware documentation

**Available now**: [SmoothieBoard](smoothieboard.md), the modular and awesome, smoothie-dedicated CNC controller.

- [Smoothieboards](smoothieboards.md): all versions of the Smoothieboard hardware
- [Running Smoothie on a Breadboard](smoothie-on-a-breadboard.md)
- [Pinout](pinout.md) has diagrams of all pins on the board
- [Pin usage](lpc1769-pin-usage.md) has information on the use and capability of all pins
- [How to wire](how-to-wire.md) describes tutorials, tools and best practices for wiring and cabling work when installing your Smoothieboard in a new machine.

![Smoothieboard Fritzing](images/smoothieboard-fritzing.png)

[Get a Smoothieboard here](getting-smoothieboard.md)

## Features

### For users

!<img src="images/worker.png" alt="Worker Icon" width=200>

- Powerful (120Mhz, 32bit) [micro-controller](http://www.embeddedartists.com/products/lpcxpresso/lpc1769_xpr.php).
- Easy to use and [configure](configuring-smoothie.md).
- Smooth, jerk-free motion and enabling higher speeds
- Can be used for CNC milling, laser cutting, and 3D printing.
- [Opensource/hardware all-included controller board](smoothieboard.md)
- [SD-Card](sd-card.md) support for configuration and executing G-code.
- Composite USB Mass Storage + Serial interface to host.
- Free [email support (✿◠‿◠)](mailto:wolf.arthur@gmail.com)

### For hackers

!<img src="images/blueprint-1.png" alt="Blueprint Icon" width = 200>

- Modular, event-driven design, allowing to add functionality easily without modifying the core. See the [ModuleExample](moduleexample.md)
- Designed to support non-Cartesian machines
- LPC1769 leaves lots of room for additional functionality.
- The mBed [functions](http://mbed.org/handbook/Homepage) and [additional libraries](http://mbed.org/cookbook/Homepage) are available for easy and fast prototyping. But compiles off-line (using GCC), not dependent on the mBed online compiler
- Strict process for acceptance of new code, to keep the project at high quality
- Heavily commented code

{% include_relative donate.md %}

### Developer documentation

!<img src="images/coding.png" alt="Coding Icon" width=200>

- **[Todo](todo.md)**: List of the things that are being worked on in the project. We need your help!
- [HowItWorks](howitworks.md): Walk-through the inner workings of Smoothie (°٢°)
- [ModuleExample](moduleexample.md): Basics of working with Modules in Smoothie
- [Listofevents](listofevents.md): List of all Events you can register for
- [Developers-Guide](developers-guide.md): Information useful to smoothie coders
- [LPC1769 pin usage](lpc1769-pin-usage.md): Documents all the pins used and which are spare
- [DebuggingSmoothie](debuggingsmoothie.md): Using the built-in MRI serial debugger
- [Coding-Standards](coding-standards.md)
- [Contribution Guidelines](contribution-guidlines.md)
- [Eclipse](eclipse.md): Using Eclipse IDE to build and debug
- [Github](github.md): How to submit pull requests for Smoothie
- [Third Party Branches](third-party-branches.md): a list of useful branches to smoothie that may be helpful to some but are not included in the main branch
- Smoothie developer IRC forum on [IRC](irc.md) in #smoothiedev @ irc.freenode.net
- [Logo Proposals](logo-proposals.md)
- Current edge build status: ![Build Status](https://travis-ci.org/Smoothieware/Smoothieware.svg?branch=edge)

## Review

<iframe width="100%" height="400" src="http://www.youtube.com/embed/vsu_vAKvRO0?hd=1" frameborder="0" allowfullscreen></iframe>
