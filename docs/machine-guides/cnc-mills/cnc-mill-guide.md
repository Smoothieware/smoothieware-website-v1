---
permalink: /cnc-mill-guide
---


# Your guide to installing Smoothieboard in a CNC Milling Machine

{::nomarkdown}
<a href="/images/guide-cnc-mill.png">
  <img src="/images/guide-cnc-mill.png" alt="CNC mill icon" width="100" height="100" style="float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

Although not as common as the Smoothiefied 3D printer, the CNC mill machine is fairly simple to Smoothiefy.

This is a step-by-step guide to connecting your board to the various components of the CNC mill machine, configuring everything, from the beginning to actually milling material.

This guide is a [community](/irc) effort, and this page is a Wiki. Please don't hesitate to [edit it](#_editpage) to fix mistakes and add information, any help is very welcome.

{::nomarkdown}
<a href="/images/smoothieboard-fritzing.png">
  <img src="/images/smoothieboard-fritzing.png" alt="Smoothieboard Fritzing" style="float: right; margin-left: 1rem; width: 500px;"/>
</a>
{:/nomarkdown}

## Installation overview

On a typical CNC mill or CNC router setup, installing a Smoothieboard will mean you do the following things:

- Read all of the guide before you start, best way to avoid mistakes

- Install some [Software](software) to talk to your board

- Install the [Windows drivers](windows-drivers) if using that OS

- Connect your board via [USB](usb) and practice talking to it

- Take a look at the [configuration](configuring-smoothie)

- Upgrade your [firmware](flashing-smoothie-firmware) to the latest version if you feel like it

- Wire your power supply and provide it with power

- Wire the power supply to [Smoothieboard](smoothieboard)'s motor input

- Connect motors to the stepper motor driver outputs

- Edit your configuration to match your motors

- Test the motors, and admire your accomplishment for hours

- Connect [Endstops](endstops) to the endstop inputs

- Edit your configuration to match your endstops

- Test your endstops by homing the machine

- Connect any spindle controller you may have

- Configure your Smoothieboard to control your spindle and test it

- Connect, configure and test any probes you may have

- Setup leveling if relevant

- Configure your CAM [software](software) and generate a G-code file

- Use your host [software](software) to send your new G-code file to the Smoothieboard

- Watch as the machine cuts using your new Smoothieboard system

- Be happy

This guide will walk through everything you need to accomplish to successfully perform these steps.

At the end of this guide, you should have a fully working machine.

{% include getting-started/unboxing.md %}

{% include migration/migrating.md %}

{% include hardware/wiring/warning.md %}

## CNC firmware

Smoothie firmware tries to create a single firmware for all types of machines (you then adapt the firmware to your machine type by changing the configuration).

However, due to lack of flash space on the v1 hardware, the v1 Smoothie firmware has an optional special "CNC" build.

It includes:

- A special CNC version of the [Panel](/panel) screens

- `grbl_mode` enabled by default (which means Smoothie interprets G-code as CNC G-code rather than 3D-printing G-code)

- The Spindle module

You will find information on flashing the firmware at [getting-smoothie](/getting-smoothie)

You will find more information on `grbl_mode` on the [grbl_mode](/grbl-mode) page.

{% include hardware/power/logic-power-for-include.md %}

{% include hardware/power/main-power-input-for-include.md %}

{% include hardware/wiring/stepper-motors.md %}

{% include modules/endstops-probes/guide-endstops-for-include.md %}

{% include modules/spindle/spindle-control.md %}

{% include modules/endstops-probes/z-probe-guide-for-include.md %}

{% include hardware/panels/panel-guide.md %}

# Appendixes

### External stepper drivers

When using external stepper driver, along with adding the 'o' to set the breakout pins to open drain you also need to add '!' to invert the step and enable pins.

### Drilling canning cycles

Smoothie now supports drilling canning cycles, using the [Drillingcycles module](drillingcycles)

However, if you do not want to use the module, there are solutions to convert those into "normal" G-codes:

- [Online converter](http://www.onlfait.ch/CCDCC.js/) to convert your files

- Another [Online converter](http://drillsconversion.appspot.com/#)

- [Python script](https://github.com/garciasa/grbl-drills-cambam/blob/master/convertDrills.py)

- If you are using Cambam you can use [this post-processor script](http://chibidibidiwah.wdfiles.com/local--files/cnc-mill-guide/SmoothiePCB.cbpp)

{% include hardware/wiring/general-appendixes.md %}

## Troubleshooting

If you run into trouble, something doesn't work as it should, head over to the [Troubleshooting](troubleshooting) page for a list of common problems and means of diagnosis.

You can also contact the [Community](/irc) for help if you can't find an answer in the documentation.

# bCNC configuration

{% include software/host-software/bcnc-for-include.md %}

# Software

See the comprehensive [Software Compatibility List](software) for all software that works with Smoothieware.
