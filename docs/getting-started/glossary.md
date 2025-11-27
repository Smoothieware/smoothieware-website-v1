---
permalink: /glossary
---


# Glossary

This page provides definitions for common terms used in the Smoothieware documentation.

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  This glossary is being actively expanded. If you find a term that needs clarification, please <a href="mailto:wolf.arthur@gmail.com">contact us</a>.
</sl-alert>

<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Version-Specific Terms:</strong> This glossary includes hardware terms specific to both Smoothieboard V1 and V2. As Smoothieboard V2 development progresses, additional V2-specific terminology may be added.
</sl-alert>
{:/nomarkdown}

## A

### AC
**Alternating Current**

In AC, the electric current periodically reverses direction and changes its magnitude continuously with time. This creates a sinusoidal waveform.

AC is the type of electricity delivered through wall sockets in homes and businesses. It is used because it can be easily transformed to different voltages for efficient long-distance transmission. Most [PSUs](#psu) convert AC from the wall to DC for use by electronics like [Smoothieboard](/smoothieboards).

### Axis
An axis represents a direction of movement in a machine. Most machines have three axes: X (left-right), Y (front-back), and Z (up-down). Some machines have additional axes for features like tool rotation or multiple [extruders](#extruder).

See the [motion control](/motion-control) documentation for configuration options.

## B

### Baud Rate
The speed at which data is transmitted over a serial connection, measured in bits per second. Common baud rates for [Smoothieboard](/smoothieboards) communication include 115200 and 250000. The baud rate must match between the board and the host software for communication to work.

See the [USB](/usb) documentation for more details.

### Bed
The flat surface on which parts are built or machined. In [3D printers](/3d-printer-guide), the bed is often heated to help prints adhere and reduce warping. In [CNC mills](/cnc-mill-guide), the bed holds the workpiece. In [laser cutters](/laser-cutter-guide), the bed supports the material being cut or engraved.

### Big MOSFET
See [MOSFETs](#mosfets).

## C

### CAM Software
**Computer-Aided Manufacturing Software**

Software that converts designs (from CAD software) into machine instructions ([G-code](#g-code)). Examples include [Simplify3D](/simplify3d) for 3D printing, [Fusion 360](/fusion360) for CNC milling, and [LaserWeb](/laserweb) for laser cutting.

See the [software](/software) page for a list of compatible CAM applications.

### Cases/Enclosures
Protective housings for electronics like [Smoothieboard](/smoothieboards). Cases protect the board from dust, debris, and accidental contact. They also provide mounting points and can help with heat dissipation. Cases can be 3D printed, laser cut from acrylic, or purchased ready-made.

### CNC
**Computer Numerical Control**

CNC refers to the automated control of machining tools by means of a computer. CNC machines read [G-code](#g-code) instructions and precisely control motors to move tools or workpieces. Smoothieware supports various CNC applications including [3D printers](/3d-printer-guide), [laser cutters](/laser-cutter-guide), [CNC mills](/cnc-mill-guide), and [pick-and-place machines](/pick-and-place).

### Current
Current is the flow of electric charge (electrons) through a conductor, measured in Amperes (Amps or A). In the context of [Smoothieboard](/smoothieboards), current settings are important for [stepper motors](/stepper-motors) - too little current and the motor won't have enough torque; too much current can overheat and damage the motor.

See the [current control](/currentcontrol) documentation for configuration.

## D

### DC
**Direct Current**

In DC, electric current flows in only one direction, maintaining a constant polarity. Batteries produce DC power, and most electronics (including [Smoothieboard](/smoothieboards)) operate on DC. A [PSU](#psu) converts [AC](#ac) from the wall outlet into the DC voltage required by the board (typically 12V or 24V).

### Delta
A type of [3D printer](/3d-printer-guide) or robot with three arms connected to a moving platform. Delta printers use trigonometric calculations to convert Cartesian coordinates into arm movements. They can achieve very fast print speeds but require careful calibration.

See the [delta guide](/delta) for setup instructions.

## E

### Endstop
An endstop is a sensor (usually a mechanical switch or optical sensor) placed at the end of an axis to detect when the moving parts reach their limit. Smoothieboard has 6 endstop inputs: two for each of the three primary axes (min and max positions).

Endstops serve two main purposes:
- **[Homing](#homing)**: Finding a known reference position
- **Limit protection**: Preventing the machine from moving beyond safe boundaries

See the [endstops documentation](/endstops) for wiring and configuration.

### Ethernet
A networking standard for wired local area networks. [Smoothieboard](/smoothieboards) includes an Ethernet port for network connectivity, allowing you to control the machine over a local network, access the web interface, and transfer files.

See the [network documentation](/network) for setup instructions.

### Extruder
The component of a [3D printer](/3d-printer-guide) that pushes filament into the [hotend](#hotend) to be melted and deposited. An extruder typically consists of a motor, drive gear, and idler that grip and push the filament.

Some printers have multiple extruders for multi-color or multi-material printing. See the [extruder documentation](/extruder) and [multiple extruders guide](/multiple-extruders).

## F

### Firmware
The software that runs directly on [Smoothieboard](/smoothieboards), interpreting [G-code](#g-code) commands and controlling the hardware. Smoothieware is the firmware, and it can be updated by copying a new `firmware.bin` file to the [SD card](/sd-card).

See [flashing the firmware](/flashing-smoothie-firmware) for update instructions.

### Flashing
The process of updating the [firmware](#firmware) on [Smoothieboard](/smoothieboards). To flash new firmware:

1. Download the latest `firmware.bin` file from the [firmware page](/latest-firmware)
2. Copy it to the [SD card](/sd-card)
3. Reset the board (the file will be renamed to `FIRMWARE.CUR` after successful flashing)

See the [flashing guide](/flashing-smoothie-firmware) for detailed instructions.

## G

### G-code
G-code is the programming language used to control CNC machines. It consists of commands that tell the machine where to move, how fast, and what actions to perform (like heating, extruding, or firing a laser).

Examples:
- `G0 X10 Y20` - Rapid move to position X=10, Y=20
- `G1 F1000 E10` - Extrude 10mm of filament at 1000mm/min
- `M104 S200` - Set hotend temperature to 200°C

See the [supported G-codes](/supported-g-codes) documentation for a complete reference.

### GitHub
GitHub is a web-based platform for version control and collaboration. The Smoothieware project uses GitHub to host its source code, track issues, and manage contributions from the community.

- **Firmware repository**: [github.com/Smoothieware/Smoothieware](https://github.com/Smoothieware/Smoothieware)
- **Documentation**: [github.com/Smoothieware/smoothieware-website-v1](https://github.com/Smoothieware/smoothieware-website-v1)

See the [GitHub guide](/github) for how to contribute.

### GPIO
**General Purpose Input/Output**

GPIO pins on [Smoothieboard](/smoothieboards) can be configured as either inputs (to read signals) or outputs (to control devices). They are used for various purposes including [endstops](#endstop), [switches](/switch), fans, and custom sensors.

See the [pinout](/pinout) and [pin configuration](/pin-configuration) documentation for available pins and how to use them.

## H

### Hall Effect Sensor
A type of sensor that detects magnetic fields. Hall effect sensors are used in some [endstop](#endstop) implementations where a magnet on the moving carriage triggers the sensor. They are contactless, meaning they don't wear out like mechanical switches, and can be very precise.

### Heated Bed
A build platform that can be heated, commonly used in [3D printers](/3d-printer-guide). Heating the bed helps prints adhere better and reduces warping, especially with materials like ABS. Smoothieboard can control heated beds through its [big MOSFETs](#mosfets).

See the [temperature control](/temperaturecontrol) documentation for configuration.

### Homing
Homing is the process of moving each axis until it triggers an [endstop](#endstop), establishing a known reference position (usually called "home" or "origin"). Before printing or machining, homing ensures the machine knows its exact position.

The `G28` command triggers homing. See the [G28 documentation](/g28) for details.

### Host Software
Software running on a computer that communicates with [Smoothieboard](/smoothieboards) to send commands and monitor status. Examples include:

- **[Pronterface](/pronterface)**: Simple, reliable host for 3D printing
- **[OctoPrint](/octoprint)**: Web-based print server
- **[LaserWeb](/laserweb)**: Specialized for laser cutting
- **[bCNC](/bcnc)**: CNC-focused with visualization

See the [software page](/software) for a complete list.

### Hotend
The component of a [3D printer](/3d-printer-guide) that melts filament for extrusion. A hotend typically consists of:

- **Heater block**: Contains the heating element
- **Heat break**: Thermal barrier preventing heat from traveling up
- **Heat sink**: Dissipates heat from the cold end
- **[Nozzle](#nozzle)**: The opening through which molten plastic exits

See the [extruder documentation](/extruder) for configuration.

## L

### Limit Switch
A switch used to define the boundaries of machine movement. While similar to [endstops](#endstop), the term "limit switch" often specifically refers to using endstop switches as safety limits to prevent the machine from crashing into mechanical stops.

See the [endstops documentation](/endstops) for wiring and configuration.

### LPC1769
The ARM Cortex-M3 microcontroller used in Smoothieboard V1. This 32-bit microcontroller runs at 120MHz and provides the processing power for interpreting [G-code](#g-code), controlling [stepper motors](#stepper-motor), and managing all board peripherals. The LPC1769 has extensive [GPIO](#gpio) capabilities and built-in peripherals including USB, Ethernet, and [PWM](#pwm) controllers.

See the [LPC1769 pin usage](/lpc1769-pin-usage) documentation for detailed pin mapping.

## M

### Module
In Smoothieware, a module is a self-contained piece of code that handles a specific function. Examples include the [extruder module](/extruder), [laser module](/laser), [spindle module](/spindle-module), and [temperature control module](/temperaturecontrol).

Modules can be enabled or disabled through the [configuration file](/configuring-smoothie). See the [module development guide](/moduleexample) for creating custom modules.

### MOSFETs
**Metal-Oxide-Semiconductor Field-Effect Transistors**

MOSFETs are electronic switches used on [Smoothieboard](/smoothieboards) to control high-current devices. Smoothieboard has two types:

- **Small MOSFETs**: For lower-power devices like fans and [hotends](#hotend) (typically up to 5A)
- **Big MOSFETs**: For higher-power devices like [heated beds](#heated-bed) (typically up to 15-20A)

These are controlled via [PWM](#pwm) for variable power output or simple on/off switching.

## N

### NC, NO
**NC = Normally Closed** and **NO = Normally Open**

These terms describe the default state of a switch:

- **NC (Normally Closed)**: The circuit is connected when the switch is not activated. Opening the circuit triggers detection. NC is preferred for [endstops](#endstop) because a broken wire is detected as a triggered endstop (fail-safe).
- **NO (Normally Open)**: The circuit is disconnected when the switch is not activated. Closing the circuit triggers detection.

See the [endstops documentation](/endstops) for configuration of NC and NO switches.

### Nozzle
The small opening at the end of a [hotend](#hotend) through which molten filament is extruded. Nozzles come in various diameters (0.2mm to 1.0mm are common), with 0.4mm being standard. Smaller nozzles produce finer detail but slower prints; larger nozzles print faster but with less detail.

## O

### On/Off Switch
A simple switch for controlling power to the machine or specific components. Can be used with the [Switch module](/switch) to control devices via [G-code](#g-code) or [GPIO](#gpio) pins.

## P

### Panel
An LCD display with buttons or encoder for controlling [Smoothieboard](/smoothieboards) without a computer. Panels allow you to start prints from the [SD card](/sd-card), adjust settings, and monitor status.

Smoothieboard supports various panel types including RepRap Discount panels and custom SmoothiePanel designs. See the [panel documentation](/panel) for supported models and configuration.

### PID
**Proportional-Integral-Derivative**

A control algorithm used to maintain temperature stability in [hotends](#hotend) and [heated beds](#heated-bed). PID tuning adjusts how aggressively the heater responds to temperature differences:

- **P (Proportional)**: Response proportional to current error
- **I (Integral)**: Response based on accumulated error over time
- **D (Derivative)**: Response based on rate of change

See the [PID tuning guide](/temperaturecontrol-pid-autotuning) for automatic tuning.

### Pinout
The mapping of functions to specific pins on [Smoothieboard](/smoothieboards). Understanding the pinout is essential for wiring [endstops](#endstop), motors, heaters, and other peripherals.

See the [pinout documentation](/pinout) and [LPC1769 pin usage](/lpc1769-pin-usage) for detailed pin maps.

### Power
Electrical power is measured in Watts (W) and equals [voltage](#voltage) multiplied by [current](#current) (P = V x I). Understanding power requirements is important for:

- Selecting an appropriate [PSU](#psu)
- Sizing wires correctly
- Ensuring [MOSFETs](#mosfets) aren't overloaded

See the [getting started guide](/getting-started) for power requirements.

### Pronterface
A popular open-source [host software](#host-software) for controlling 3D printers. Pronterface provides a graphical interface for sending [G-code](#g-code), monitoring temperatures, and manually controlling the machine.

See the [Pronterface documentation](/pronterface) for setup and usage.

### PSU
**Power Supply Unit**

A device that converts mains [AC](#ac) power to low-voltage [DC](#dc) for electronics. [Smoothieboard](/smoothieboards) typically requires 12V or 24V DC power.

Common PSU types:
- **Brick/Laptop style**: Compact, enclosed units with barrel connectors
- **ATX**: Computer power supplies, provide multiple voltages
- **Switching/Industrial**: Open-frame supplies with screw terminals

Choose a PSU with sufficient wattage for your [stepper motors](/stepper-motors), heaters, and other loads.

### Pullup, Pulldown
Resistors used to ensure a [GPIO](#gpio) pin has a defined logic state when not actively driven:

- **Pullup resistor**: Connects the pin to the positive voltage, defaulting to HIGH
- **Pulldown resistor**: Connects the pin to ground, defaulting to LOW

[Smoothieboard](/smoothieboards) has internal pullup resistors that can be enabled in the [pin configuration](/pin-configuration). These are commonly used with [endstop](#endstop) switches.

### PWM
**Pulse Width Modulation**

A technique for controlling power by rapidly switching a device on and off. The ratio of on-time to off-time (duty cycle) determines the effective power delivered. PWM is used to control:

- [Hotend](#hotend) and [bed](#bed) heaters
- Fan speeds
- [Laser](/laser) power
- [Spindle](/spindle-module) speed

See the [PWM-capable pins](/pwm-capable) documentation for which pins support PWM.

## R

### Resistance
Resistance is opposition to the flow of electric [current](#current), measured in Ohms. In the context of Smoothieware, resistance values are important for [thermistors](#thermistor) (temperature sensors) which change resistance with temperature.

See the [thermistor choice guide](/temperaturecontrol-thermistor-choice) for selecting and configuring thermistors.

## S

### SD Card
Smoothieboard uses an SD card for storing [configuration files](/configuring-smoothie), [G-code](#g-code) files, and the [firmware](#firmware). The SD card acts as the board's filesystem.

Key files on the SD card:
- `config.txt` or `config` - Configuration file
- `firmware.bin` - New firmware (renamed after flashing)
- G-code files for printing

See the [SD card documentation](/sd-card) for formatting and usage.

### Sensor
A device that detects physical properties and converts them to electrical signals. Common sensors in CNC applications include:

- **[Thermistors](#thermistor)**: Measure temperature
- **[Endstops](#endstop)**: Detect position limits
- **[Z-probe](#z-probe)**: Measure bed distance
- **[Hall effect sensors](#hall-effect-sensor)**: Detect magnetic fields
- **Optical sensors**: Detect light/objects

See the [sensor types documentation](/sensor-types) for configuration options.

### Small MOSFET
See [MOSFETs](#mosfets).

### Spindle
A rotating tool holder used in [CNC mills](/cnc-mill-guide) and routers. Unlike a stationary [laser](#laser) or [hotend](#hotend), spindles rotate cutting tools at high speeds to remove material. Smoothieware can control spindle speed via [PWM](#pwm) or RS485.

See the [spindle module documentation](/spindle-module) for configuration.

### Stepper Motor
A type of motor that moves in discrete steps, allowing precise position control without feedback sensors. [Smoothieboard](/smoothieboards) can control up to 5 stepper motors (or more with external drivers).

Each step moves the motor a fixed angle (typically 1.8 degrees or 0.9 degrees). Microstepping divides these steps further for smoother motion.

See the [stepper motor documentation](/stepper-motors) for wiring and configuration.

### STM32H745
The dual-core ARM Cortex-M7/M4 microcontroller used in Smoothieboard V2. This advanced microcontroller features a 480MHz Cortex-M7 core for high-performance processing and a 240MHz Cortex-M4 core for secondary tasks. The STM32H745 provides significantly more processing power than the [LPC1769](#lpc1769), enabling advanced features, faster [G-code](#g-code) processing, and smoother motion control.

See the [Smoothieboard V2 documentation](/smoothieboard-v2) for board-specific information.

## T

### Thermistor
A temperature sensor that changes [resistance](#resistance) with temperature. Thermistors are commonly used to measure [hotend](#hotend) and [heated bed](#heated-bed) temperatures. Different thermistor types have different resistance curves, so the correct type must be configured in Smoothieware.

See the [thermistor choice guide](/temperaturecontrol-thermistor-choice) and [sensor types](/sensor-types) for configuration.

### TMC2590
An advanced stepper motor driver used in Smoothieboard V2. The TMC2590 is a high-performance driver that supports up to 1/256 microstepping for exceptionally smooth and quiet motor operation. It features [current](#current) control, thermal protection, stall detection, and diagnostics capabilities. The TMC2590's advanced features enable quieter operation and more precise motion control compared to the [TMC2660](#tmc2660) used in V1.

See the [stepper motor documentation](/stepper-motors) for driver configuration.

### TMC2660
A stepper motor driver used in Smoothieboard V1. The TMC2660 supports up to 1/32 microstepping and provides [current](#current) control for smooth motor operation. It includes features like stallGuard (stall detection) and coolStep (energy-efficient operation). The TMC2660 enables quiet operation and precise motion control for [stepper motors](#stepper-motor).

See the [stepper motor documentation](/stepper-motors) for driver configuration.

## U

### USB
**Universal Serial Bus**

A standard for connecting computers to peripherals. [Smoothieboard](/smoothieboards) appears as a serial device when connected via USB, allowing [host software](#host-software) to communicate with the board.

See the [USB documentation](/usb) for drivers and troubleshooting.

## V

### VBB
**Voltage Bus for Big (high-power) devices**

The main power input on [Smoothieboard](/smoothieboards) that supplies [stepper motors](/stepper-motors) and high-power outputs. VBB typically accepts 12-24V DC from a [PSU](#psu). The voltage you choose affects motor torque, speed, and heater performance.

See the [Smoothieboard documentation](/smoothieboard) for power input specifications.

### Voltage
Voltage is the electrical potential difference between two points, measured in Volts (V). It can be thought of as the "pressure" pushing [current](#current) through a circuit. Common voltages in Smoothieboard setups:

- **5V**: Logic level for signals, USB power
- **12V**: Common for 3D printers
- **24V**: Higher performance, faster heating, more motor torque

## Z

### Z-probe
A sensor used to measure the distance between the tool (typically a [nozzle](#nozzle)) and the [bed](#bed). Z-probes enable automatic bed leveling and mesh compensation, improving print quality on uneven surfaces.

Types of Z-probes:
- **Inductive/capacitive**: Detect metal beds
- **BLTouch/servo probes**: Mechanical touch sensor
- **[FSR](/using-fsrs)**: Force-sensitive resistors
- **Conductive nozzle**: Uses the nozzle itself

See the [Z-probe documentation](/zprobe) for wiring and configuration.
