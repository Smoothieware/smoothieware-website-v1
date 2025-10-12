# G28 G-code

{::nomarkdown}
<a href="images/cnc-returning-to-origin.png">
  <img src="images/cnc-returning-to-origin.png" alt="Returning To Origin" width="200" height="200" style="float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

On a CNC mill, `G28` means "go to the recorded origin point in the machine coordinates workspace".

The machine coordinates are the position of the machine relative to the point at which the [endstops](endstops) are hit.

This is by opposition to the workspace coordinates, which are the coordinates you use to position a job you want to do.

The origin point is a recorded position, it is arbitrary and you choose it, but it is generally the point you want the tool to be at when it is not doing anything.

It is not necessarily the `0,0,0` point of the workspace coordinates, but it can be if you want it to.

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

The [`G28.1`](g28-1) Gcode is used to set the origin position for the machine.

### Configuration

See the [endstops](endstops) module.

### Speeds

The speed at which the movement to the origin point will occur is the "seek" speed, which is the speed of the last `G0` command issued, or if none was ever issued, the value of the `default_seek_rate` configuration [option](configuring-smoothie).

### Endstop seeking

If you are looking for a way to "home" to the endstops, the same way `G28` does on 3D printers, use the `$H` command to trigger this behavior, and configure it using the [Endstop](endstops) module.

### Further reading

These resources are used as references for Gcode:
* [LinuxCNC Gcode list](http://linuxcnc.org/docs/html/gcode.html)
* [Reprap Gcode list](http://reprap.org/wiki/G-code)
