---
title: "CNC mill guide"
permalink: /cnc-mill-guide
---

{::nomarkdown}
<span id="your-guide-to-installing-smoothieboard-in-a-cnc-milling-machine"></span>
{:/nomarkdown}

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

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

Backlash compensation remains experimental on V1 and is not included in the normal firmware build. See [Backlash Compensation](/backlash-compensation).

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

Smoothieware V2 CNC installations can also use [slaved axes](/actuator-slaving), [shared MPG hand wheels](/mpg#axis-selector-optional), [NIST G30/G30.1](/g30#nist-stored-position-in-v2-grbl-mode), and [real-time feed hold](/feed-hold). Backlash compensation remains confined to an unmerged V2 PR and is not included in normal V2 firmware builds; see [Backlash Compensation](/backlash-compensation).

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{% include _includes/chapter.md file="getting-started/unboxing-for-include.md" title="Unboxing" anchor="unboxing" %}

{% include _includes/chapter.md file="migration/migrating-for-include.md" title="Migrating to Smoothie" anchor="migrating-to-smoothie" %}

## Safety warnings

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Make sure you read this. Seriously. Not kidding. Do it. It's important.</strong>
  <ul>
    <li>Check the polarity of every power input, and check it again. Reversed polarity can damage or destroy all or part of your board. The 3.5mm and 5mm power connectors are inverted, so rely on the diagrams.</li>
    <li>Never connect or disconnect stepper motors while the board is powered.</li>
    <li>Keep anything metallic away from the board, a short will destroy it.</li>
    <li>Never put 12V or 24V into a 5V, endstop or thermistor input.</li>
    <li>If your machine has heaters, set up <a href="/temperaturecontrol#safety">the heater safety measures</a>. Fires will kill you if you don't.</li>
  </ul>
  Before you wire anything, read <a href="/warning">all the wiring safety warnings</a>.
</sl-alert>
{:/nomarkdown}

## CNC firmware

Smoothie firmware tries to create a single firmware for all types of machines (you then adapt the firmware to your machine type by changing the configuration).

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

V1 has limited flash space, so CNC users can choose an optional "CNC" firmware build. It includes a CNC version of the [Panel](/panel) screens.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

The V2 GRBL mode setting uses the INI-style configuration shown below.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

**GRBL Mode Configuration:**

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```markdown
grbl_mode true
```

This setting is enabled by default in the CNC firmware build, which means Smoothie interprets G-code as CNC G-code rather than 3D-printing G-code.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[general]
grbl_mode = true
```

This setting is enabled by default in the CNC firmware build, which means Smoothie interprets G-code as CNC G-code rather than 3D-printing G-code.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

- The Spindle module

You will find information on flashing the firmware at [getting-smoothie](/getting-smoothie)

You will find more information on GRBL mode on the [grbl_mode](/grbl-mode) page.

{% include _includes/chapter.md file="hardware/power/logic-power-for-include.md" title="Logic Power Inputs" anchor="logic-power-inputs" %}

{% include _includes/chapter.md file="hardware/power/main-power-input-for-include.md" title="Main Power Input" %}

{% include _includes/chapter.md file="hardware/wiring/stepper-motors-for-include.md" title="Stepper Motors" anchor="stepper-motors" %}

{% include _includes/chapter.md file="modules/endstops-probes/guide-endstops-for-include.md" title="Endstops" anchor="endstops" %}

## Endstop Configuration Differences

When configuring endstops, note that the configuration syntax differs between v1 and v2:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**V1 Endstop Config:**

In v1, endstops are configured with individual settings for each axis:

```
alpha_min_endstop                            1.24^!
alpha_max_endstop                            1.25^
beta_min_endstop                             1.26^!
beta_max_endstop                             1.27^
gamma_min_endstop                            1.28^!
gamma_max_endstop                            1.29^
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**V2 Endstop Config:**

In v2, endstops are configured using section syntax:

```ini
[alpha endstop]
pin = 1.24^!
type = min

[beta endstop]
pin = 1.26^!
type = min

[gamma endstop]
pin = 1.28^!
type = min
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

For more details on motion control configuration differences between v1 and v2, see the [Motion Control documentation](/motion-control).

{% include _includes/chapter.md file="modules/spindle/spindle-control-for-include.md" title="Spindle Control" anchor="spindle-control" %}

{% include _includes/chapter.md file="modules/endstops-probes/z-probe-guide-for-include.md" title="Z-Probe Guide" anchor="z-probe-guide" %}

{% include _includes/chapter.md file="hardware/panels/panel-guide-for-include.md" title="Panel Guide" anchor="panel-guide" %}

## Startup Automation

For CNC mills, automating startup tasks can improve safety and workflow efficiency.

### Safe Startup Sequence

You can configure your mill to automatically run a safe startup sequence when it boots. Create a file called `on_boot.gcode` in the root of your SD card.

For example, a safe CNC startup might include:

```gcode
G21          ; Metric units
G90          ; Absolute positioning
G17          ; XY plane selection
M5           ; Ensure spindle is off
```

{::nomarkdown}
Note: For CNC mills, it's often safer to NOT automatically home axes on boot, especially if you have a mounted workpiece. Instead, you can set safe defaults and then manually home when ready.
{:/nomarkdown}

Enable the on_boot.gcode file in your config:

```
on_boot_gcode_enable true
on_boot_gcode /sd/on_boot.gcode
```

See the [on_boot.gcode documentation](/on-boot-gcode) for more details and examples specific to CNC applications.

## Appendixes

### External stepper drivers

When using external stepper driver, along with adding the 'o' to set the breakout pins to open drain you also need to add '!' to invert the step and enable pins.

### Drilling canning cycles

Smoothie now supports drilling canning cycles, using the [Drillingcycles module](drillingcycles)

However, if you do not want to use the module, there are solutions to convert those into "normal" G-codes:

- [Online converter](http://www.onlfait.ch/CCDCC.js/) to convert your files

- Another [Online converter](http://drillsconversion.appspot.com/#)

- [Python script](https://github.com/garciasa/grbl-drills-cambam/blob/master/convertDrills.py)

- If you are using Cambam you can use [this post-processor script](http://chibidibidiwah.wdfiles.com/local--files/cnc-mill-guide/SmoothiePCB.cbpp)

The appendixes cover the practical wiring work you may need along the way : 

* [Wiring](/general-appendixes#wiring)
* [Crimping connectors](/general-appendixes#crimping-connectors)
* [Soldering connectors](/general-appendixes#soldering-connectors)
* [Using two steppers motor on a single driver](/general-appendixes#using-two-steppers-motor-on-a-single-driver)
* [Doubling stepper motor drivers](/general-appendixes#doubling-stepper-motor-drivers)
* [External Stepper Drivers](/general-appendixes#external-stepper-drivers)
* [Solid State Relays](/general-appendixes#solid-state-relays)
* [Swapping stepper motor drivers](/general-appendixes#swapping-stepper-motor-drivers)
* [Which pins are which](/general-appendixes#which-pins-are-which)
* [Protecting a power input with a fuse](/general-appendixes#protecting-a-power-input-with-a-fuse)

### Troubleshooting

If you run into trouble, something doesn't work as it should, head over to the [Troubleshooting](troubleshooting) page for a list of common problems and means of diagnosis.

You can also contact the [Community](/irc) for help if you can't find an answer in the documentation.

## bCNC configuration

{% include software/host-software/bcnc-for-include.md %}

## Software

See the comprehensive [Software Compatibility List](software) for all software that works with Smoothieware.
