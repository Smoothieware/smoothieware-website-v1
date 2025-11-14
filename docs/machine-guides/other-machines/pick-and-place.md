---
permalink: /pick-and-place
redirect_from:
  - /pick-and-place-guide
  - /pick-and-place-guide.html
---


# Your guide to installing Smoothieboard in a Pick and Place Machine

{::nomarkdown}
<a href="/images/temporary/pick-place-machine-generic.jpg">
  <img src="/images/temporary/pick-place-machine-generic.jpg" alt="Pick and place icon" style="width: 100px; height: 100px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

Pick and Place machines are specialized CNC machines that automate the placement of electronic components onto printed circuit boards (PCBs).

A Pick and Place machine is essentially a very fast and precise CNC machine without a spindle, but with vacuum nozzles to pick up and place components.

This is a step-by-step guide to connecting your board to the various components of the Pick and Place machine, configuring everything, from the beginning to actually placing components.

This guide is a [community](/irc) effort, and this page is a Wiki. Please don't hesitate to [edit it](#_editpage) to fix mistakes and add information, any help is very welcome.

{::nomarkdown}
<a href="/images/smoothieboard-fritzing.png">
  <img src="/images/smoothieboard-fritzing.png" alt="Smoothieboard Fritzing" style="width: 500px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

## Installation overview

On a typical Pick and Place machine setup, installing a Smoothieboard will mean you do the following things:

- Read all of the guide before you start, best way to avoid mistakes

- Install some [Software](software) to talk to your board

- Install the [Windows drivers](windows-drivers) if using that OS

- Connect your board via [USB](usb) and practice talking to it

- Take a look at the [configuration](configuring-smoothie)

- Upgrade your [firmware](flashing-smoothie-firmware) to the latest version if you feel like it

- Wire your power supply and provide it with power

- Wire the power supply to [Smoothieboard](smoothieboard)'s motor input

- Connect motors to the stepper motor driver outputs (X, Y, Z, and rotation axes)

- Edit your configuration to match your motors

- Test the motors, and admire your accomplishment for hours

- Connect [Endstops](endstops) to the endstop inputs

- Edit your configuration to match your endstops

- Test your endstops by homing the machine

- Connect your vacuum system (pump, solenoids, sensors)

- Configure and test vacuum sensing for component detection

- Configure and test vacuum control solenoids

- Connect and configure nozzle servos or Z-axis steppers

- Test pick and place operations with sample components

- Connect, configure and test any probes or cameras you may have

- Configure your OpenPNP software and calibrate the machine

- Run test pick and place jobs with low-value components

- Watch as the machine places components using your new Smoothieboard system

- Be happy

This guide will walk through everything you need to accomplish to successfully perform these steps.

At the end of this guide, you should have a fully working machine.

{% include getting-started/unboxing-for-include.md %}

{% include migration/migrating-for-include.md %}

{% include hardware/wiring/warning-for-include.md %}

## Pick and Place firmware

Smoothie firmware tries to create a single firmware for all types of machines (you then adapt the firmware to your machine type by changing the configuration).

However, for Pick and Place machines, we recommend using the special "CNC" build of the firmware.

The CNC build includes:

- A special CNC version of the [Panel](/panel) screens

- {::nomarkdown}<setting v1="grbl_mode" v2="general.grbl_mode"></setting>{:/nomarkdown} enabled by default (which means Smoothie interprets G-code as CNC G-code rather than 3D-printing G-code)

- Better support for precise positioning and fast movements typical of Pick and Place operations

You will find information on flashing the firmware at [getting-smoothie](/getting-smoothie)

You will find more information on {::nomarkdown}<setting v1="grbl_mode" v2="general.grbl_mode"></setting>{:/nomarkdown} on the [grbl_mode](/grbl-mode) page.

### Including Temperature Control for Vacuum Sensors

If you are using vacuum sensors to detect component pickup, those sensors require you to use the [Temperature Control](temperaturecontrol) module, which is not enabled by default in the CNC build.

Therefore, you will need to build your own firmware, which is very easy if you follow [this simple guide](compiling-smoothie).

Make sure you compile the "CNC build" (`make CNC=1`), not the normal/default build, this is explained in the simple guide.

Once you have used this guide to compile your own CNC build, you need to make one small modification so the next time you compile, it will include the [Temperature Control](temperaturecontrol) module, which the CNC build does not include by default (it's more typical of 3D printer builds, so the flash space for it is wasted if it's included typically).

There are two ways to make it so compilation will include this module, both methods are valid, the first one (user file creation) is preferred:

#### User file method

Just create a file named `src/default_excludes.mk` (that is, it is in the `src/` folder in your copy of Smoothie's source).

Inside of it, add these lines:

```bash
export CNC=1
export EXCLUDE_MODULES = tools/laser tools/filamentdetector tools/scaracal tools/extruder
```

By default, the version of the second line that is present in the CNC build makefile contains `tools/temperaturecontrol`, so here we are removing that item so it's no longer excluded when compiling.

Now every time you compile your firmware, it will use the CNC build, and include the temperature-control module!

Simply do:

```bash
make clean
make
```

Use the resulting `.bin` file, and you're good to go!

#### Command line option

This method does not require creating a file, but it also means you have to remember to add this option to your command line **every time** you compile the firmware, so this is probably not the best method if you are a forgetful person.

In itself, it's very easy though. Instead of compiling your CNC build of the firmware with:

```bash
make clean
make CNC=1
```

You instead use:

```bash
make clean
make CNC=1 INCLUDE_MODULES=tools/temperaturecontrol
```

That's it! Now your firmware will compile with the temperature-control module included, and the resulting `.bin` file can be flashed to give you a CNC build with temperature-control support so you can read vacuum sensors through your ADCs.

Just remember to use the right command instead of the default one next time you update your firmware!

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  Thanks to wolfmanjm for both methods!
</sl-alert>
{:/nomarkdown}

{% include hardware/power/logic-power-for-include.md %}

{% include hardware/power/main-power-input-for-include.md %}

{% include hardware/wiring/stepper-motors-for-include.md %}

{% include modules/endstops-probes/guide-endstops-for-include.md %}

# Pick and Place Tool Control

Pick and Place machines use vacuum nozzles instead of spindles or lasers to manipulate components.

This section covers how to configure and control the vacuum system, sensors, and nozzles.

{% include machine-guides/other-machines/pick-and-place-control-for-include.md %}

{% include modules/endstops-probes/z-probe-guide-for-include.md %}

{% include hardware/panels/panel-guide-for-include.md %}

# Appendixes

{% include hardware/wiring/general-appendixes-for-include.md %}

### Pick and Place Specific Notes

Pick and Place machines typically require:

- **Fast acceleration**: Configure your acceleration values higher than typical CNC machines for quick pick and place operations
- **Precise positioning**: Ensure your steps per millimeter are accurately calibrated
- **Multiple axes**: Many Pick and Place machines have 4+ axes (X, Y, Z, and rotation)
- **Vision systems**: Most modern machines integrate cameras for component and fiducial recognition

### OpenPNP Integration

OpenPNP (Open Source Pick and Place) is the most common software used to control Pick and Place machines with Smoothieboard.

For detailed OpenPNP configuration, see the [OpenPNP documentation](https://github.com/openpnp/openpnp/wiki).

Key integration points:
- Use GcodeDriver in OpenPNP
- Configure your axes in both Smoothie and OpenPNP
- Set up your vacuum sensing through M-codes
- Calibrate your cameras and nozzle offsets

## Troubleshooting

If you run into trouble, something doesn't work as it should, head over to the [Troubleshooting](troubleshooting) page for a list of common problems and means of diagnosis.

You can also contact the [Community](/irc) for help if you can't find an answer in the documentation.

### Pick and Place Specific Issues

**Components not picking up:**
- Check vacuum pressure with sensors
- Verify solenoid is activating
- Ensure nozzle size matches component
- Check for air leaks in vacuum lines

**Placement accuracy issues:**
- Recalibrate steps per millimeter
- Check for mechanical backlash
- Verify vision system alignment
- Ensure proper homing and endstop configuration

**Speed issues:**
- Increase acceleration values in config
- Verify motors have sufficient current
- Check for mechanical binding
- Ensure proper motor cooling

# Software

See the comprehensive [Software Compatibility List](software) for all software that works with Smoothieware.
