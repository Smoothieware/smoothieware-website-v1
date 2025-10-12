
# Supported G-Codes

Smoothie is primarily a [G-code](http://en.wikipedia.org/wiki/G-code) interpreter.

Here is a list of the G-codes that are currently supported:

<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  Make sure your Gcode is in uppercase, separation by space characters is optional, as shown everywhere on this wiki. For example:<br><br>

  <code>G1 X10 F100</code><br><br>

  Lowercase is reserved for commands.
</sl-alert>

## G codes

| G-Code | Description | Example |
| ------ | ----------- | ------- |
| [G0](g0) | Move to the given coordinates. To the contrary of G1, if there is a tool it will most of the time be off during this kind of move. This is a "go to" move rather than a "do while going to" move. The F parameter defines speed and is remembered by subsequent commands ( specified in millimetres/minute ) (command is modal) | `G0 X10 Y5 F100` |
| [G1](g1) | Move to the given coordinates, see above for difference with G0. Takes the same F parameter as G0. (command is modal) | `G1 X20 Y2.3 F200` |
| [G2](g2) | Clockwise circular motion: go to point with coordinates XYZ while rotating around point with relative coordinates IJ (command is not modal)| `G2 X10 J5` |
| [G3](g3) | Counter-clockwise motion: see above (command is not modal)| `G3 Y5 X10 I2` |
| [G4](g4) | Dwell S<seconds> or P<milliseconds>, In grbl mode P is float seconds to comply with gcode standards | `G4 P1000` |
| [G10](g10) | Do firmware extruder retract | `G10` |
| [G11](g11) | Do firmware extruder un-retract | `G11` |
| G10 L1 | Set extruder tool offset for specified extruder where Pn is the extruder number + 1 (T0 is P1, T1 is P2), This stays set until reset. Permanent change must be added to config, Only active when multiple extruders have been defined | `G10 L1 P2 X10` |
| G10 L2, G10 L20 | Set workspace coordinates [LinuxCNC G10 L2](http://linuxcnc.org/docs/html/gcode/coordinates.html) and [LinuxCNC G10](http://linuxcnc.org/docs/html/gcode/g-code.html#gcode:g10-l2)| `G10 L2 P1 X0` |
| [G17](g17) | Select XYZ plane (command is modal)| `G17` |
| [G18](g18) | Select XZY plane (command is modal)| `G18` |
| [G19](g19) | Select YZX plane (command is modal)| `G19` |
| [G20](g20) | Inch mode: passed coordinates will be considered as Inches, so internally translated to millimeters (command is modal) | `G20` |
| [G21](g21) | Millimeter mode (default) : passed coordinates will be considered as millimeters (command is modal)| `G21` |
| [G28](g28) | Home The given axis, or if no axis specified home all axis at the same time (edge) **NOTE** in CNC/grbl mode this is move to park position, use `$H` to home  | `G28` |
| G28.1 | Set Predefined Position - This position will be returned to by G28.2 | `G28.1` |
| G28.2 | Move to Predefined Position - This perform a rapid move to the Predefined position set by G28.1 (in grbl mode this will do a home) | `G28.2` |
| G28.3 | Manual Homing - This allows you to set a home position manually without moving to limit switches | `G28.3` |
| G28.4 | Manual Homing based on actuator position- This allows you to set a home position manually based on actuator position (used for rotary delta) | `G28.4` |
| G28.5 | Clears the homed flag for the specified axis, or all if not specifed | `G28.5` `G28.5 Z0` |
| G28.6 | Shows the homing status of each axis | `G28.6` |
| G29 | Probes the bed and outputs the bed heights depending on levelling strategy selected, see [ZProbe](zprobe)  | `G29` |
| [G30](g30) | Simple Z probe at current XY, reports distance moved down until probe triggers. optional F parameter defines the speed of probing, zprobe.slow_feedrate is used when not supplied | `G30` `G30 F100` |
| G31 | Depends on levelling strategy selected, see [ZProbe](zprobe)  | `G31` |
| G32 | Depends on levelling strategy selected, see [ZProbe](zprobe). For calibration on delta, uses Z probe to calibrate delta endstops and arm radius, use R parameter to select only arm radius calibration and E to select only endstop calibration. I to set target precision, J to set probe_radius, K to keep current endstop trim settings.  In Zgrid module, it starts the grid probing | `G32` `G32 R` `G32 E` `G32 EK` `G32 I0.02` |
| G38.2 G38.3 G38.4 G38.5 | Standard probe commands implemented as documented [here](http://linuxcnc.org/docs/2.6/html/gcode/gcode.html#sec:G38-probe) | `'G38.2 Z-10'`|
| G43.2 | [Baby steps](motion-control#adjusting-z-once-printing-starts-sometimes-called-babysteps) | `G43.2 Z0.05` |
| G53 | Must be on a line by itself OR the first G code on a line, the directly following G0/G1 will be executed in MCS coordinates | `G53 G0 X0 Y0` |
| [G54](g54)-G59.3 | use workspace coordinates [LinuxCNC G54-G59.3](http://linuxcnc.org/docs/html/gcode/coordinates.html) and [LinuxCNC G54-G59.3](http://linuxcnc.org/docs/html/gcode/g-code.html#gcode:g54-g59.3) | `G54` |
| [G90](g90) | Absolute mode (default) (command is modal)| `G90` |
| [G91](g91) | Relative mode (command is modal)| `G91` |
| [G92](g92) | Set global workspace coordinate system to specified coordinates [LinuxCNC G92](http://linuxcnc.org/docs/html/gcode/g-code.html#gcode:g92) | `G92 X0 Y0 Z0` |
| G92.1 | Clear the G92 and G30 Znnn offsets | `G92.1`|
| G92.4 | manually set homing (MCS) for XYZ  | `G92.4 X0 Y0 Z0`|

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>G Code comments</strong><br><br>

  G Code comments begin at a semicolon, and end at the end of the line.<br><br>

  Example:<br>
  <code>G0 X7 Y8 ;this is the comment</code>
</sl-alert>

## Additional Codes
The Smoothieware configuration file permits the association of additional codes with some tool functions.  For example, for a [Switch module](switch), you can specify an arbitrary command in the 'input_on_command' and 'input_off_command'.  This means that some additional codes may be available, depending on your specific configuration file.

For example, if you are using servos, then you will likely have configured the following commands:

| G-Code | Description | Example |
| ------ | ----------- | ------- |
| M280 | Move servo to S<position> where position is 0-100| M280 S20 ; move servo to position 20 = 20% duty cycle |
| M281 | Turn off servo | M281 ; Same as M280 S0 0% duty cycle, effectively off | |

Additionally, in your configuration, you can assign sub-commands to deal with multiple tools of the same type, for example:

| G-Code | Description  |
| ------ | -----------  |
| M280.1 | Move your first servo |
| M280.2 | Move your second servo | |

## Tool change

Tn will change the tool to n for all future commands, it may appear anywhere on the line or on a line by itself:

`T1 M200`

`M200 T1`

**NOTE** This is not compatible with the G-code spec, but unfortunately most slicers create incorrect Gcode for tool change.

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Important:</strong> In smoothie there must be a space in front of a line that is affected by a modal G code. Some G code processors like HeeksCNC don't prefix the space neither do they prefix each line with the modal G code.
</sl-alert>
