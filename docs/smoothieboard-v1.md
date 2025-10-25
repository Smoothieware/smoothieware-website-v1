
# Smoothieboard v1

Smoothieboard is an [Open-Source Hardware](http://www.oshwa.org/definition/) CNC controller designed by the Smoothie community to run the [Smoothieware](http://smoothieware.org) firmware.

Its main design goals are:

- Uses as powerful hardware as possible at the time
- Can control several machine types (3D printers, lasers, CNC mills/routers)
- Easy to setup and use
- Easy to do weird, new and exciting things with
- Easy to develop for

This page is for v1, the [first version](https://www.kickstarter.com/projects/logxen/smoothieboard-the-future-of-cnc-motion-control) of the Smoothieboard hardware.

To find out where to purchase a Smoothieboard, see **[Getting Smoothieboard](getting-smoothieboard)**.

{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <a href="/images/smoothieboard-fritzing.png">
    <img src="/images/smoothieboard-fritzing.png" alt="Smoothieboard Fritzing Diagram" style="min-width: 640px; width: 80%; height: auto;"/>
  </a>
</div>
{:/nomarkdown}

## Microcontroller

The board uses the LPC1769 microcontroller, an ARM Cortex-M3 chip:

- 32-bit architecture
- 120Mhz frequency
- 512kB ROM (program space)
- 64kB RAM (execution memory)

Compared to lots of other boards, this allows for faster/smoother movement, more features, and more extensibility.

The board runs the Smoothie firmware, which has been designed and perfected to take the best advantage of the hardware, to make the board easy to configure and use, and to add cool features.

{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <img src="http://mbed.org/media/uploads/synvox/lpc1768_mbed_pinout.gif" alt="LPC1768 Pinout" style="width: auto; height: auto; max-width: 100%;"/>
  <p><em>LPC1768 Pinout Diagram</em></p>
</div>
{:/nomarkdown}

See [Firmware](http://smoothieware.org)

## USB

The USB interface connects to a host (your computer), and can be used:

- Via its USB/MSD (Mass storage) interface to directly access the SD card in the board (read, edit, copy/paste files)
- Via its USB/CDC (Serial) interface to send commands (like [Gcodes](http://smoothieware.org/supported-g-codes)) for execution, for example using host software

This allows for pretty neat things like:

- Editing the [configuration](http://smoothieware.org/configuring-smoothie) without having to edit source file or reflash the firmware
- Dropping Gcode files to the board and [executing them](http://smoothieware.org/player)
- Dropping firmware upgrade files to the board for easy [flashing](http://smoothieware.org/flashing-smoothie-firmware)


{::nomarkdown}
<a href="/images/recovered/usb-cable.png">
  <img src="/images/recovered/usb-cable.png" alt="USB Cable" style="width: 300px;"/>
</a>
{:/nomarkdown}
See [USB](http://smoothieware.org/usb)

## Ethernet

The Ethernet interface allows you to connect the board to your local network (LAN).

You can then use different protocols to talk to the board:
- HTTP to use web interfaces hosted on the board, or via using host software that supports this
- Telnet to send commands via a serial interface, or via using host software that supports this

{::nomarkdown}
<a href="/images/recovered/ethernet-cable.png">
  <img src="/images/recovered/ethernet-cable.png" alt="Ethernet Cable"/>
</a>
{:/nomarkdown}
See [Network](http://smoothieware.org/network)

## SD Card

The board comes with a SD card slot containing a 2GB card.

The card is used for:
- The [configuration file](configuring-smoothie) that the firmware reads at boot time to set up everything
- The [firmware file](flashing-smoothie-firmware), which you can replace to upgrade the firmware
- A [boot gcode file](player) that is executed when the board starts
- [Web interfaces](install-web-interface) for access via the [ethernet interface](network)
- A bundle of software and documentation we prepared for you for those days when you don't have Internet access

You can also add Gcode files to it and then [play them from the SD card](player), which is useful for files so dense that streaming them to the board isn't convenient.

{::nomarkdown}
<a href="/images/temporary/sd-card-slot-generic.jpg">
  <img src="/images/temporary/sd-card-slot-generic.jpg" alt="SD Card"/>
</a>
{:/nomarkdown}
See [SD Card](sd-card)

## Stepper Motor Drivers

Stepper motors are used to move axes on your machine, or turn extruders.

You plug them into stepper motor drivers on your Smoothieboard.

The drivers on the v1 board are [A5984](https://www.allegromicro.com/en/search?q=A5984%20DMOS%20Microstepping%20Driver") drivers which offer:

- 1/32 (quieter) micro-stepping
- Several protections making them sturdier
- Digital (configuration-file set) current values, no potentiometer manipulation
- Great heat-sinking allowing use of their full 2A current rating, for more torque/speed

The Smoothieboard 3X has 3 drivers, the 4X has 4 drivers, and the 5X has 5 drivers, thus their names.

See [Current Control](currentcontrol).

<a href="/images/temporary/stepper-motor-generic.jpg">
  <img src="/images/temporary/stepper-motor-generic.jpg" alt="Stepper Motor Driver"/>
</a>

## Mosfets

Mosfets are transistors for high loads. They are essentially digitally controlled "switches".

Your microcontroller can choose if they let electricity pass or not. This is useful to control heating elements (like hotends and heated beds), fans, and other power-oriented peripherals.

Smoothieboard v1 has two types of Mosfets:
- Small ones for fans, hotends, and other low loads (5A, up to 24V)
- Large ones for heated beds, powerful hotends, and other high loads (12A, up to 24V)

Smoothieboard 3X has two small mosfets, Smoothieboard 4X has two small and two big mosfets, and Smoothieboard 5X has three small and three big mosfets.

This is more than you need, which is nice if you ever break one, and also means a Smoothieboard 4X can be used for dual extrusion just by adding an external stepper driver, and a Smoothieboard 5X can be used for triple extrusion the same way, because you already have extra thermistor inputs and mosfets.

See [Mosfets](mosfets).
<a href="/images/temporary/mosfet-generic.jpg">
  <img src="/images/temporary/mosfet-generic.jpg" alt="Mosfet"/>
</a>  

## Temperature Reading

All v1 boards come with 4 temperature reading inputs.

These can be used to read the resistance of thermistors in your hotend or heated bed, inferring from it its current temperature, and from this the [temperature control](temperature-control) module can regulate the temperature by choosing whether to heat it or not.


See [Temperature Control](temperature-control)<br/>

<a href="/images/temporary/circuit-board-generic.jpg">
  <img src="/images/temporary/circuit-board-generic.jpg" alt="Temperature Reading"/>
</a>


## Endstops

The board has 6 endstop inputs. These can be used for [limit switches](endstops) at the end of the axes, used to limit motion within the work area, or for homing to origin.

They can also be used to connect probes, for example for bed leveling or [automated machine calibration](zprobe).

See [Endstops](endstops) and [Probes](zprobe).
<a href="/images/recovered/limit-switch.png">
  <img src="/images/recovered/limit-switch.png" alt="Limit Switches"/>
</a>

## Power Inputs

Smoothieboard has a main power input that supports from 12 to 24V.

Each mosfet pair must also be powered via its own, separate input, supporting from 12 to 24V.

The board's logic power can be provided via USB, via the 5V power input, or by adding the [voltage regulator](voltageregulator) to the board. The board will automatically select the best power input amongst those you provide.

See [Main power input](main-power-input) and [Logic power](logic-power).

<a href="/images/temporary/voltage-regulator-generic.jpg">
  <img src="/images/temporary/voltage-regulator-generic.jpg" alt="UPS"/>
</a>

## Extensibility

The board is designed to make it as easy as possible to add things to it.

As such, most pins are broken out to connectors, and great care is taken to make sure extending the board is as easy as possible

See [Pinout](pinout).

![Smoothieboard Wiring](https://github.com/Bouni/smoothieboard-graphics/blob/master/smoothieboard-wiring.png?raw=true)

## Sources

Oh and by the way, it's all [Open Hardware](http://en.wikipedia.org/wiki/Open-source_hardware) (CERN OHL and GPL-licensed).

You can find the Eagle files on [GitHub](https://github.com/arthurwolf/SmoothieBoard):

- If you are just hunting for part numbers, the bill of materials is [also available](https://github.com/arthurwolf/SmoothieBoard/blob/master/bom.xls?raw=true) in *.xls format on [GitHub](https://github.com/arthurwolf/SmoothieBoard)
- [Components BOM](https://docs.google.com/spreadsheet/ccc?key=0Api7_ZbfikkKdGRDblUwMDFWcm1CT2M2bENkQWpZZ0E#gid=0)
- [Connectors BOM](https://docs.google.com/spreadsheet/ccc?key=0Api7_ZbfikkKdHR5VkdXMFFwcHRFOG5CXzdpOGhqM3c#gid=0)

You can find the old version of this Smoothieboard v1 page [here](http://smoothieware.org/smoothieboard-v1-old).
<a href="/images/oshw-logo.png">
  <img src="/images/oshw-logo.png" alt="Open Hardware Logo"/>
</a>
