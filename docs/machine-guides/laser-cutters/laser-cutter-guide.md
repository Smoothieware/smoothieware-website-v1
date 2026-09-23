---
permalink: /laser-cutter-guide
title: Smoothieboard Laser Cutter Installation Guide
description: "Install and configure Smoothieboard in a laser cutter: controller wiring, power, motors, endstops, laser control, software, and safety checks."
---


# Your guide to installing Smoothieboard in a Laser Cutting machine

{::nomarkdown}
<a href="/images/guide-laser.png">
  <img src="/images/guide-laser.png" alt="Laser icon" width="100" height="100" style="float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

A laser cutter uses CNC motion, but its laser power supply and safety interlocks require separate attention. Identify the exact board, firmware, and laser power supply before following a wiring example.

This is a step-by-step guide to connecting your board to the various components of the laser cutter, configuring everything, from the beginning to actually cutting material.

For a K40 or blue box laser, read the [K40 controller upgrade overview](/landing-page-k40-laser-upgrade) and the [blue box installation guide](/bluebox-guide). Identify your machine's controller and power supply before following any wiring instructions.

See the [Smoothieboard hardware documentation](/smoothieboards) for board identification and the [laser module documentation](/laser) for firmware configuration.

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
- Review the [firmware flashing instructions](/flashing-smoothie-firmware) for your board before changing firmware
- With power isolated, have a qualified installer verify and connect a compatible motor power supply to the board
- Connect motors to the stepper motor driver outputs
- Edit your configuration to match your motors
- Test the motors with laser power disabled
- Connect [Endstops](guide-endstops) to the endstop inputs
- Edit your configuration to match your endstops
- Verify endstop behavior before any supervised homing test with laser power disabled
- Have a qualified installer connect and verify the laser power supply control interface and hardware interlocks
- Configure laser control for the exact firmware and test it only after the interlocks have been verified
- Connect, configure and test any probes you may have
- Setup leveling if relevant
- Configure your CAM [software](software) and generate a G-code file
- Use your host [software](software) to send your new G-code file to the Smoothieboard
- Conduct supervised cutting tests after the complete installation has been checked

This guide will walk through everything you need to accomplish to successfully perform these steps.

This guide is an installation outline, not a safety approval. Check the finished machine and its protective controls before operation.



{% include machine-guides/laser-cutters/laser-guides-for-include.md %}

{% include getting-started/unboxing-for-include.md %}

{% include migration/migrating-for-include.md %}

# Safety

{% include machine-guides/laser-cutters/laser-warning-for-include.md %}

{% include hardware/wiring/warning-for-include.md %}

{% include hardware/power/logic-power-for-include.md %}

{% include hardware/power/main-power-input-for-include.md %}

{% include hardware/wiring/stepper-motors-for-include.md %}

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

{% include hardware/panels/panel-guide-for-include.md %}

# Startup behavior and interlocks

Do not use a startup G-code file as the laser's safety system. The laser power supply and door interlock must prevent unintended firing independently of firmware commands. Verify the inactive laser output and every interlock on your specific machine before enabling laser power.

Avoid automatic laser arming, homing, or travel moves at boot. These depend on the machine's wiring and can be hazardous before its state has been checked. If you use startup G-code for non-motion settings, review the [on_boot.gcode documentation](/on-boot-gcode) for your firmware version and test with laser power disabled.

# Appendixes

{% include hardware/wiring/general-appendixes-for-include.md %}

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
