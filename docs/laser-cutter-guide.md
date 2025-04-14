
# Your guide to installing Smoothieboard in a Laser Cutting machine

![Laser Icon](images/icon-laser-big-round.png)

A Laser Cutter is pretty much a [CNC router](cnc-mill-guide.md) with a weird and very very thin tool. As far as installing Smoothieboard in a machine goes, they are probably the simplest machine to set up. They can also be quite dangerous, so, be cautious.

This is a step-by-step guide to connecting your board to the various components of the laser cutter, configuring everything, from the beginning to actually cutting material.

This guide is a [community](irc.md) effort, and this page is a Wiki. Please don't hesitate to [edit it](#_editpage) to fix mistakes and add information, any help is very welcome.

![Smoothieboard Fritzing](images/smoothieboard-fritzing.png)

On a typical laser cutter setup, installing a Smoothieboard will mean you do the following things:

- Read all of the guide before you start, best way to avoid mistakes
- Install some [Software](software.md) to talk to your board
- Install the [Windows drivers](windows-drivers.md) if using that OS
- Connect your board via [USB](usb.md) and practice talking to it
- Take a look at the [configuration](configuring-smoothie.md)
- Upgrade your [firmware](flashing-smoothie-firmware.md) to the latest version if you feel like it
- Wire your power supply and provide it with power
- Wire the power supply to Smoothieboard's motor input
- Connect motors to the stepper motor driver outputs
- Edit your configuration to match your motors
- Test the motors, and admire your accomplishment for hours
- Connect [Endstops](guide-endstops.md) to the endstop inputs
- Edit your configuration to match your endstops
- Test your endstops by homing the machine
- Connect your laser power supply and your Smoothieboard together
- Configure it so you can control the power supply's output, and test
- Connect, configure and test any probes you may have
- Setup leveling if relevant
- Configure your CAM [software](software.md) and generate a G-code file
- Use your host [software](software.md) to send your new G-code file to the Smoothieboard
- Watch as the machine cuts using your new Smoothieboard system
- Be happy

This guide will walk through everything you need to accomplish to successfully perform these steps.

At the end of this guide, you should have a fully working machine.

{% include_relative laser-guides.md %}

{% include_relative unboxing.md %}

{% include_relative migrating.md %}

## Safety

{% include_relative laser-warning.md %}

{% include_relative warning.md %}

{% include_relative logic-power.md %}

{% include_relative main-power-input.md %}

{% include_relative stepper-motors.md %}

{% include_relative guide-endstops.md %}

![A laser tube](images/firebrick.jpg)
*They look nice but they are dangerous*

## Laser control

{% include_relative laser.md %}

{% include_relative zprobe-guide.md %}

{% include_relative panel-guide.md %}

## Appendixes

{% include_relative general-appendixes.md %}

### Laser engraving

Smoothie does not ( yet, it's being worked on ) support native laser raster engraving.

However, as Smoothie interprets G-code unusually fast, a method to do raster engraving is to convert bitmap images into G-code files.

Here are some tools that allow to do this.

- [Raster2Gcode](http://fablabo.net/wiki/Raster2Gcode)
- [PicEngrave](http://www.picengrave.com/)

The main issue here is sending the gcode fast enough, and there is a tool on the github called `fast-stream.py` that will send it as fast as possible. I have managed over `100mm/sec` feedrate using this script to send the gcode.

## Troubleshooting

If you run into trouble, something doesn't work as it should, head over to the [Troubleshooting](troubleshooting.md) page for a list of common problems and means of diagnosis.

You can also contact the [Community](irc.md) for help if you can't find an answer in the documentation.

## bCNC configuration

{% include_relative bcnc.md %}

## Software

{% include_relative software.md %}
