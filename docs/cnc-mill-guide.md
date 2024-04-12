
# Your guide to installing Smoothieboard in a CNC Milling Machine

![CNC Mill Icon](/images/icon.cnc.mill.round.big.png)

Although not as common as the Smoothiefied 3D printer, the CNC mill machine is fairly simple to Smoothiefy.

This is a step-by-step guide to connecting your board to the various components of the CNC mill machine, configuring everything, from the beginning to actually milling material.

This guide is a [community](http://smoothieware.org/irc) effort, and this page is a Wiki. Please don't hesitate to [edit it](#_editpage) to fix mistakes and add information, any help is very welcome.

![Smoothieboard Fritzing](/images/smoothieboard.fritzing.png)

On a typical CNC mill or CNC router setup, installing a Smoothieboard will mean you do the following things:

- Read all of the guide before you start, best way to avoid mistakes
- Install some [Software](software.md) to talk to your board
- Install the [Windows drivers](windows-drivers.md) if using that OS
- Connect your board via [USB](usb.md) and practice talking to it
- Take a look at the [configuration](/configuring-smoothie.md)
- Upgrade your [firmware](/flashing-smoothie-firmware.md) to the latest version if you feel like it
- Wire your power supply and provide it with power
- Wire the power supply to [Smoothieboard](smoothieboard.md)'s motor input
- Connect motors to the stepper motor driver outputs
- Edit your configuration to match your motors
- Test the motors, and admire your accomplishment for hours
- Connect [Endstops](endstops.md) to the endstop inputs
- Edit your configuration to match your endstops
- Test your endstops by homing the machine
- Connect any spindle controller you may have
- Configure your Smoothieboard to control your spindle and test it
- Connect, configure and test any probes you may have
- Setup leveling if relevant
- Configure your CAM [software](software.md) and generate a G-code file
- Use your host [software](software.md) to send your new G-code file to the Smoothieboard
- Watch as the machine cuts using your new Smoothieboard system
- Be happy

This guide will walk through everything you need to accomplish to successfully perform these steps.

At the end of this guide, you should have a fully working machine.

{% include_relative unboxing.md %}

{% include_relative migrating.md %}

{% include_relative warning.md %}

## CNC firmware

Smoothie firmware tries to create a single firmware for all types of machines (you then adapt the firmware to your machine type by changing the configuration).

However, due to lack of flash space on the v1 hardware, the v1 Smoothie firmware has an optional special "CNC" build.

It includes:
- A special CNC version of the [Panel](http://smoothieware.org/panel) screens
- `grbl_mode` enabled by default (which means Smoothie interprets G-code as CNC G-code rather than 3D-printing G-code)
- The Spindle module

You will find information on flashing the firmware at [getting-smoothie](http://smoothieware.org/getting-smoothie)

You will find more information on `grbl_mode` on the [grbl_mode](http://smoothieware.org/grbl-mode) page.

{% include_relative logic-power.md %}

{% include_relative main-power-input.md %}

{% include_relative stepper-motors.md %}

{% include_relative guide-endstops.md %}

{% include_relative spindle-control.md %}

{% include_relative z-probe-guide.md %}

{% include_relative panel-guide.md %}

## Appendixes

When using external stepper driver, along with adding the 'o' to set the breakout pins to open drain you also need to add '!' to invert the step and enable pins.

### Drilling canning cycles

Smoothie now supports drilling canning cycles, using the [Drillingcycles module](drillingcycles.md)

However, if you do not want to use the module, there are solutions to convert those into "normal" G-codes:
- [Online converter](http://www.onlfait.ch/CCDCC.js/) to convert your files
- Another [Online converter](http://drillsconversion.appspot.com/#)
- [Python script](https://github.com/garciasa/grbl-drills-cambam/blob/master/convertDrills.py)
- If you are using Cambam you can use [this post-processor script](http://chibidibidiwah.wdfiles.com/local--files/cnc-mill-guide/SmoothiePCB.cbpp)

{% include_relative general-appendixes.md %}

## Troubleshooting

If you run into trouble, something doesn't work as it should, head over to the [Troubleshooting](troubleshooting.md) page for a list of common problems and means of diagnosis.

You can also contact the [Community](http://smoothieware.org/irc) for help if you can't find an answer in the documentation.

## bCNC configuration

{% include_relative bcnc.md %}

## Software

{% include_relative software.md %}
