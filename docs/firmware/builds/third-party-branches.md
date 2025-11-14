---
permalink: /third-party-branches
---

# Third Party Branches

This page lists community-maintained branches and forks of Smoothie firmware that provide additional features or optimizations for specific use cases.

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Note to developers</strong>: Please add links to branches of the Smoothie firmware that others may be interested in.
</sl-alert>
{:/nomarkdown}

## Available Branches

- [Simulated annealing](https://github.com/626Pilot/Smoothieware): Simulated annealing (AI) auto-calibration for Deltas, plus depth-map Z correction & probe calibration ([discussion](http://forum.seemecnc.com/viewtopic.php?f=82&t=7640&p=62978)).
- [Least squares levelling](https://github.com/purplefabr/SmoothiewareLSQ): Another auto-calibration method, originally by DC42 in ReprapFirmware.
- [OpenTrons](https://github.com/OpenTrons/SmoothiewareOT): A custom fork that supports 6-axis movement ( but is not yet stable ) and some opentron-specific features
- [Multiple Grids](https://github.com/pyjamasam/Smoothieware): Allows use of multiple grids for grid levelling
- [Reprap Morgan](https://github.com/RepRapMorgan/Smoothieware): A fork with features optimized for the Reprap Morgan architecture
- [Ditto Printing](https://github.com/RTimothyEdwards/Smoothieware): A fork with branch features/ditto-printing to enable one or more secondary extruders to duplicate the movements of the primary, using RepRap gcode "{::nomarkdown}<mcode>M605</mcode>{:/nomarkdown} S2"
- [Joystick Jogging](https://groups.google.com/forum/#!topic/smoothie-dev/fWqX3zo7EPo): A new module to allow jogging with a joystick. Needs testing, so if you are interested by this feature, please help.
- [Dual X, Y, Z, E](https://github.com/3DMS/Smoothieware): Mimics the Dual X, Y or Dual Z feature of Marlin. You will need to add new parameters into your configuration file in order to make it work.
- [Dual motor AND Endstops for homing](https://github.com/Smoothieware/Smoothieware/pull/1431): Much like the above, but allows you to add a second endstop that stops the second motor independently to square the two motors during the homing operation.
- [FTP server](https://github.com/DavidJRobertson/Smoothieware/tree/ftp-server): allows the use of a commodity FTP client (e.g. Filezilla) to manage files on the SD card
- [Motor branch](https://github.com/Smoothieware/Smoothieware/tree/feature/motor): Adds a new module that allows controlling DC motors with cw/ccw pins, and both homing and "tick count" movement. Useful for some automated tool changers, some powder printing wipers, and some pick and place head mechanisms.
- [Spindle reverse rotation](https://github.com/Smoothieware/Smoothieware/tree/feature/slaveswitch): Adds M4 to the Spindle module to allow counter rotation.
- [Slave Switch](https://github.com/Smoothieware/Smoothieware/tree/feature/slaveswitch): Allows a Switch module ( for a hobby servo typically ), to be controlled exactly like a normal axis ( like your Z axis say ), allowing for example hobby servos to be controlled exactly like normal axes, making them now about to do things like homing or probing, which they couldn't before just as a switch.
- [OpenPNP branch](https://github.com/markmaker/Smoothieware/tree/feature/best-for-pnp): A [branch by Mark Maker](https://makr.zone/smoothieware-new-firmware-for-pnp/500/) with features specific for OpenPNP, recommended by the OpenPNP project to be able to use it to the fullest extent.

## Using a Third-Party Branch in Your Machine

1. First, go to the link for the GitHub page of that branch
2. Click the green `Clone or Download` button
3. Click on `Download ZIP`
4. Decompress the ZIP file
5. You can now follow the instructions at [compiling-smoothie](compiling-smoothie) exactly as you would for the edge branch

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  If you run into any kind of trouble using one of those branches, please make sure you test the normal Smoothie before reporting a problem.

  If the problem exists only in the third party branch but not in the main Smoothie, please contact the branch's author instead of the main team.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>Outdated Code Warning</strong>

  Most or all of those branches are not regularly (or ever) updated to the latest Smoothie releases.

  This means they will probably lack most recent features (possibly a lot of them) and bug fixes.

  It is also likely that trying to update those branches/forks to the latest version of Smoothie would be a lot of work, or even in some cases close to impossible.
</sl-alert>
{:/nomarkdown}

### Checking Out Pull Requests

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  Not everything is a branch or a fork, sometimes code can also be stored/presented in the form of a "Pull request".

  If you are confused by what that means, you need to read up on git and GitHub (GitHub has extensive documentation on everything. Jim also recommends <a href="http://rogerdudler.github.io/git-guide/">this simple guide</a>).
</sl-alert>
{:/nomarkdown}

Here is for example how you would check out the pull request for the jogger feature:

```bash
git checkout -b skaterzero807-feature/Jogger edge
git pull git://github.com/skaterzero807/Smoothieware.git feature/Jogger
```

## Ports to other platforms or MCU

- [SmoothieV2](https://github.com/Smoothieware/SmoothieV2): A port to the LPC43XX microcontroller, used on the Smoothie2 and Smoothie2-pro boards
- [Smoothie STM32](https://github.com/clementleger/Smoothieware-STM32): A port to the STM32 microcontroller
- [Smoohieware CHMT](https://github.com/mattthebaker/Smoothieware-CHMT): A port to STM32F4 for running smoothieware on CharmHigh pick and place machines.

## Ports of other firmwares to Smoothieboard

- [grbl-LPC](https://github.com/gnea/grbl-LPC) is a version of GRBL 1.1 that runs on the Smoothieboard

## Automated builds

Some branches are automatically built for every new commit to the repository.

You can find these automatic builds below with different possible configurations, in particular the default build (for 3D printers), and the CNC build for different amounts of axes:

### Motor branch

This branch adds the "motor" module, that lets you control a DC motor, including and encoder and endstop feature, which is very helpful for DC-motor-controlled "carousel" systems in ATC CNC mills.

If you have an ATC CNC mill and want to use this module, contact wolf.arthur@gmail.com for help setting it up/showing interest in documentation being written for it.

{% include firmware/builds/builds-feature-motor-for-include.md %}
