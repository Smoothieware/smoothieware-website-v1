---
permalink: /laser-cutter-guide
---


# Your guide to installing Smoothieboard in a Laser Cutting machine

{::nomarkdown}
<a href="/images/guide-laser.png">
  <img src="/images/guide-laser.png" alt="Laser icon" width="100" height="100" style="float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

A Laser Cutter is pretty much a [CNC router](cnc-mill-guide) with a weird and very very thin tool.

As far as installing Smoothieboard in a machine goes, they are probably the simplest machine to set up.

They can also be quite dangerous, so, be cautious.

This is a step-by-step guide to connecting your board to the various components of the laser cutter, configuring everything, from the beginning to actually cutting material.

This guide is a [community](irc) effort, and this page is a Wiki.

Please don't hesitate to [edit it](#_editpage) to fix mistakes and add information, any help is very welcome.



{::nomarkdown}
<a href="/images/smoothieboard-fritzing.png">
  <img src="/images/smoothieboard-fritzing.png" alt="Smoothieboard Fritzing" style="float: right; margin-left: 1rem; width: 500px;"/>
</a>
{:/nomarkdown}

On a typical laser cutter setup, installing a Smoothieboard will mean you do the following things:



- Read all of the guide before you start, best way to avoid mistakes
- Install some [Software](software) to talk to your board
- Install the [Windows drivers](windows-drivers) if using that OS
- Connect your board via [USB](usb) and practice talking to it
- Take a look at the [configuration](configuring-smoothie)
- Upgrade your [firmware](flashing-smoothie-firmware) to the latest version if you feel like it
- Wire your power supply and provide it with power
- Wire the power supply to Smoothieboard's motor input
- Connect motors to the stepper motor driver outputs
- Edit your configuration to match your motors
- Test the motors, and admire your accomplishment for hours
- Connect [Endstops](guide-endstops) to the endstop inputs
- Edit your configuration to match your endstops
- Test your endstops by homing the machine
- Connect your laser power supply and your Smoothieboard together
- Configure it so you can control the power supply's output, and test
- Connect, configure and test any probes you may have
- Setup leveling if relevant
- Configure your CAM [software](software) and generate a G-code file
- Use your host [software](software) to send your new G-code file to the Smoothieboard
- Watch as the machine cuts using your new Smoothieboard system
- Be happy

This guide will walk through everything you need to accomplish to successfully perform these steps.

At the end of this guide, you should have a fully working machine.



{% include machine-guides/laser-cutters/laser-guides-for-include.md %}

{% include getting-started/unboxing.md %}

{% include migration/migrating.md %}

# Safety

{% include machine-guides/laser-cutters/laser-warning.md %}

{% include hardware/wiring/warning.md %}

{% include hardware/power/logic-power-for-include.md %}

{% include hardware/power/main-power-input-for-include.md %}

{% include hardware/wiring/stepper-motors.md %}

{% include modules/endstops-probes/guide-endstops-for-include.md %}

{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <a href="/images/recovered/firebrick-laser-tube.jpg">
    <img src="/images/recovered/firebrick-laser-tube.jpg" alt="A laser tube" style="min-width: 640px; width: 80%; height: auto;"/>
  </a>
  <p><em>They look nice but they are dangerous</em></p>
</div>
{:/nomarkdown}

# Laser control



{% include modules/laser/laser-for-include.md %}

{% include modules/endstops-probes/z-probe-guide-for-include.md %}

{% include hardware/panels/panel-guide.md %}

# Appendixes

{% include hardware/wiring/general-appendixes.md %}

### Laser engraving

Smoothie does not ( yet, it's being worked on ) support native laser raster engraving.

However, as Smoothie interprets G-code unusually fast, a method to do raster engraving is to convert bitmap images into G-code files.

Here are some tools that allow to do this:

- [Raster2Gcode](http://fablabo.net/wiki/Raster2Gcode)
- [PicEngrave](http://www.picengrave.com/)

The main issue here is sending the gcode fast enough, and there is a tool on the github called `fast-stream.py` that will send it as fast as possible.

I have managed over `100mm/sec` feedrate using this script to send the gcode.



## Troubleshooting

If you run into trouble, something doesn't work as it should, head over to the [Troubleshooting](troubleshooting) page for a list of common problems and means of diagnosis.

You can also contact the [Community](irc) for help if you can't find an answer in the documentation.

# bCNC configuration

{% include software/host-software/bcnc-for-include.md %}

# Software

See the comprehensive [Software Compatibility List](software) for all software that works with Smoothieware.
