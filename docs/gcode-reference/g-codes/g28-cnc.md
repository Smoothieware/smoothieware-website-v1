---
permalink: /g28-cnc
---

{::nomarkdown}
# <gcode>G28</gcode> G-code
{:/nomarkdown}

{::nomarkdown}
<a href="/images/temporary/cnc-spindle-generic.jpg">
  <img src="/images/temporary/cnc-spindle-generic.jpg" alt="Returning To Origin" style="width: 200px; height: 200px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

{::nomarkdown}
On a CNC mill, <gcode>G28</gcode> means "go to the recorded origin point in the machine coordinates workspace".

The machine coordinates are the position of the machine relative to the point at which the [endstops](endstops) are hit.

This is by opposition to the workspace coordinates, which are the coordinates you use to position a job you want to do.

The origin point is a recorded position, it is arbitrary and you choose it, but it is generally the point you want the tool to be at when it is not doing anything.

It is not necessarily the `0,0,0` point of the workspace coordinates, but it can be if you want it to.
{:/nomarkdown}

### Format

The command is used as such:

```
G28
```

Which means: go to the origin position.

Note: This G-code currently only works for the X and Y axes, but ignores the Z axis. This might change in the future, if you are not sure, just try it out manually on your machine.

### Parameters

No parameters.

### Friend Gcodes

{::nomarkdown}
The <gcode>G28.1</gcode> Gcode is used to set the origin position for the machine.
{:/nomarkdown}

### Configuration

See the [endstops](endstops) module.

### Speeds

{::nomarkdown}
The speed at which the movement to the origin point will occur is the "seek" speed, which is the speed of the last <gcode>G0</gcode> command issued, or if none was ever issued, the value of the <setting v1="default_seek_rate" v2="motion control.default_seek_rate"></setting> configuration [option](configuring-smoothie).
{:/nomarkdown}

### Endstop seeking

{::nomarkdown}
If you are looking for a way to "home" to the endstops, the same way <gcode>G28</gcode> does on 3D printers, use the `$H` command to trigger this behavior, and configure it using the [Endstop](endstops) module.
{:/nomarkdown}

### Further reading

These resources are used as references for Gcode:
* [LinuxCNC Gcode list](http://linuxcnc.org/docs/html/gcode.html)
* [Reprap Gcode list](http://reprap.org/wiki/G-code)
