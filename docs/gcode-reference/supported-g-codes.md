---
permalink: /supported-g-codes
---


# Supported G-Codes

Smoothie is primarily a [G-code](http://en.wikipedia.org/wiki/G-code) interpreter.

Here is a list of the G-codes that are currently supported:

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  Make sure your Gcode is in uppercase, separation by space characters is optional, as shown everywhere on this wiki. For example:<br><br>

  <code><gcode>G1</gcode> X10 F100</code><br><br>

  Lowercase is reserved for commands.
</sl-alert>
{:/nomarkdown}

## G codes

<style>
table {
  table-layout: fixed;
  width: 100%;
}
table th:nth-child(1),
table td:nth-child(1) {
  width: 15%;
}
table th:nth-child(2),
table td:nth-child(2) {
  width: 70%;
}
table th:nth-child(3),
table td:nth-child(3) {
  width: 15%;
}
</style>

{::nomarkdown}
<review id="supported-g-codes:g-code-table">
<proposal>
{:/nomarkdown}

| G-Code | Description | Example |
| ------ | ----------- | ------- |
| <gcode>G0</gcode> [→](g0) | Move to the given coordinates. To the contrary of <gcode>G1</gcode>, if there is a tool it will most of the time be off during this kind of move. This is a "go to" move rather than a "do while going to" move. The F parameter defines speed and is remembered by subsequent commands ( specified in millimetres/minute ) (command is modal) | <gcode>G0</gcode> X10 Y5 F100 |
| <gcode>G1</gcode> [→](g1) | Move to the given coordinates, see above for difference with <gcode>G0</gcode>. Takes the same F parameter as <gcode>G0</gcode>. (command is modal) | <gcode>G1</gcode> X20 Y2.3 F200 |
| <gcode>G2</gcode> [→](g2) | Clockwise circular motion: go to point with coordinates XYZ while rotating around point with relative coordinates IJ (command is not modal)| <gcode>G2</gcode> X10 J5 |
| <gcode>G3</gcode> [→](g3) | Counter-clockwise motion: see above (command is not modal)| <gcode>G3</gcode> Y5 X10 I2 |
| <gcode>G4</gcode> [→](g4) | Dwell S<seconds> or P<milliseconds>, In grbl mode P is float seconds to comply with gcode standards | <gcode>G4</gcode> P1000 |
| <gcode>G10</gcode> [→](g10) | Do firmware extruder retract | <gcode>G10</gcode> |
| <gcode>G11</gcode> [→](g11) | Do firmware extruder un-retract | <gcode>G11</gcode> |
| <gcode>G10</gcode> L1 | Set extruder tool offset for specified extruder where Pn is the extruder number + 1 (T0 is P1, T1 is P2), This stays set until reset. Permanent change must be added to config, Only active when multiple extruders have been defined | <gcode>G10</gcode> L1 P2 X10 |
| <gcode>G10</gcode> L2, <gcode>G10</gcode> L20 | Set workspace coordinates [LinuxCNC <gcode>G10</gcode> L2](http://linuxcnc.org/docs/html/gcode/coordinates.html) and [LinuxCNC <gcode>G10</gcode>](http://linuxcnc.org/docs/html/gcode/g-code.html#gcode:g10-l2)| <gcode>G10</gcode> L2 P1 X0 |
| <gcode>G17</gcode> [→](g17) | Select XY plane for arc commands (G2/G3) (command is modal)| <gcode>G17</gcode> |
| <gcode>G18</gcode> [→](g18) | Select XZ plane (command is modal)| <gcode>G18</gcode> |
| <gcode>G19</gcode> [→](g19) | Select YZ plane (command is modal)| <gcode>G19</gcode> |
| <gcode>G20</gcode> [→](g20) | Inch mode: passed coordinates will be considered as Inches, so internally translated to millimeters (command is modal) | <gcode>G20</gcode> |
| <gcode>G21</gcode> [→](g21) | Millimeter mode (default) : passed coordinates will be considered as millimeters (command is modal)| <gcode>G21</gcode> |
| <gcode>G28</gcode> [→](g28) | Home The given axis, or if no axis specified home all axis at the same time (edge) **NOTE** in CNC/grbl mode this is move to park position, use `$H` to home  | <gcode>G28</gcode> |
| <gcode>G28.1</gcode> | Set Predefined Position - This position will be returned to by <gcode>G28.2</gcode> | <gcode>G28.1</gcode> |
| <gcode>G28.2</gcode> | Move to Predefined Position - This perform a rapid move to the Predefined position set by <gcode>G28.1</gcode> (in grbl mode this will do a home) | <gcode>G28.2</gcode> |
| <gcode>G28.3</gcode> | Manual Homing - This allows you to set a home position manually without moving to limit switches | <gcode>G28.3</gcode> |
| <gcode>G28.4</gcode> | **V2 Only** - Manual Homing based on actuator position. This allows you to set a home position manually based on actuator position (used for rotary delta) | <gcode>G28.4</gcode> |
| <gcode>G28.5</gcode> | Clears the homed flag for the specified axis, or all if not specifed | <gcode>G28.5</gcode> <gcode>G28.5</gcode> Z0 |
| <gcode>G28.6</gcode> | Shows the homing status of each axis | <gcode>G28.6</gcode> |
| <gcode>G28.7</gcode> | **V2 Only** - Home slaved axis. For dual-motor axes (e.g., dual Z motors), homes the secondary motor independently | <gcode>G28.7</gcode> Z |
| <gcode>G29</gcode> | Bed probe test - probes bed and reports heights. Behavior depends on levelling strategy (ThreePoint/DeltaGrid/CartGrid), see [ZProbe](zprobe)  | <gcode>G29</gcode> |
| <gcode>G30</gcode> [→](g30) | Simple Z probe at current XY, reports distance moved down until probe triggers. optional F parameter defines the speed of probing, zprobe.slow_feedrate is used when not supplied | <gcode>G30</gcode> <gcode>G30</gcode> F100 |
| <gcode>G31</gcode> | Leveling strategy command - probes grid and activates compensation, or reports status (ThreePoint). Depends on levelling strategy, see [ZProbe](zprobe)  | <gcode>G31</gcode> |
| <gcode>G32</gcode> | Depends on levelling strategy selected, see [ZProbe](zprobe). For calibration on delta, uses Z probe to calibrate delta endstops and arm radius, use R parameter to select only arm radius calibration and E to select only endstop calibration. I to set target precision, J to set probe_radius, K to keep current endstop trim settings.  In Zgrid module, it starts the grid probing | <gcode>G32</gcode> <gcode>G32</gcode> R <gcode>G32</gcode> E <gcode>G32</gcode> EK <gcode>G32</gcode> I0.02 |
| <gcode>G33</gcode> | **V2 Only** - Lathe threading with spindle synchronization. For CNC lathe operations, synchronizes tool feed with spindle rotation for cutting uniform threads | <gcode>G33</gcode> Z10 K2.0 |
| <gcode>G38.2</gcode> <gcode>G38.3</gcode> <gcode>G38.4</gcode> <gcode>G38.5</gcode> | Standard probe commands implemented as documented [here](http://linuxcnc.org/docs/2.6/html/gcode/gcode.html#sec:G38-probe) | <gcode>G38.2</gcode> Z-10 |
| <gcode>G43.2</gcode> | [Baby steps](motion-control#adjusting-z-once-printing-starts-sometimes-called-babysteps) | <gcode>G43.2</gcode> Z0.05 |
| <gcode>G53</gcode> | Must be on a line by itself OR the first G code on a line, the directly following <gcode>G0</gcode>/<gcode>G1</gcode> will be executed in MCS coordinates | <gcode>G53</gcode> <gcode>G0</gcode> X0 Y0 |
| <gcode>G54</gcode> [→](g54) | Select work coordinate system 1 (default) | <gcode>G54</gcode> |
| <gcode>G55</gcode> | Select work coordinate system 2 | <gcode>G55</gcode> |
| <gcode>G56</gcode> | Select work coordinate system 3 | <gcode>G56</gcode> |
| <gcode>G57</gcode> | Select work coordinate system 4 | <gcode>G57</gcode> |
| <gcode>G58</gcode> | Select work coordinate system 5 | <gcode>G58</gcode> |
| <gcode>G59</gcode> | Select work coordinate system 6 | <gcode>G59</gcode> |
| <gcode>G59.1</gcode> | Select work coordinate system 7 | <gcode>G59.1</gcode> |
| <gcode>G59.2</gcode> | Select work coordinate system 8 | <gcode>G59.2</gcode> |
| <gcode>G59.3</gcode> | Select work coordinate system 9 | <gcode>G59.3</gcode> |
| <gcode>G90</gcode> [→](g90) | Absolute mode (default) (command is modal)| <gcode>G90</gcode> |
| <gcode>G91</gcode> [→](g91) | Relative mode (command is modal)| <gcode>G91</gcode> |
| <gcode>G92</gcode> [→](g92) | Set global workspace coordinate system to specified coordinates [LinuxCNC <gcode>G92</gcode>](http://linuxcnc.org/docs/html/gcode/g-code.html#gcode:g92) | <gcode>G92</gcode> X0 Y0 Z0 |
| <gcode>G92.1</gcode> | Clear the <gcode>G92</gcode> and <gcode>G30</gcode> Znnn offsets | <gcode>G92.1</gcode> |
| <gcode>G92.4</gcode> | manually set homing (MCS) for XYZ  | <gcode>G92.4</gcode> X0 Y0 Z0 |
| <gcode>G94</gcode> | Feedrate mode (motion per minute) - standard modal command for feedrate units (mm/min) | <gcode>G94</gcode> |

</proposal>
<original>
{:/nomarkdown}

Original table without version-specific annotations and missing G33 (V2-only lathe threading command).

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>G Code comments</strong><br><br>

  G Code comments begin at a semicolon, and end at the end of the line.<br><br>

  Example:<br>
  <code><gcode>G0</gcode> X7 Y8 ;this is the comment</code>
</sl-alert>
{:/nomarkdown}

## M codes

| M-Code | Description | Example |
| ------ | ----------- | ------- |
| <gcode>M0</gcode> | Program stop - pauses execution unconditionally until user intervention | <gcode>M0</gcode> |
| <gcode>M1</gcode> | Sleep or conditional stop - pauses execution (may be ignored if optional stop disabled) | <gcode>M1</gcode> |
| <gcode>M3</gcode> [→](m3) | Spindle on, clockwise - starts spindle or laser at specified speed (S parameter in RPM or %) | <gcode>M3</gcode> S12000 |
| <gcode>M5</gcode> [→](m5) | Spindle/laser/tool stop | <gcode>M5</gcode> |
| <gcode>M9</gcode> | Turn off coolant/auxiliary output | <gcode>M9</gcode> |
| <gcode>M17</gcode> | Enable/power all stepper motors | <gcode>M17</gcode> |
| <gcode>M18</gcode> | Disable all stepper motors (same as M84) | <gcode>M18</gcode> |
| <gcode>M20</gcode> [→](m20) | List SD card contents. Optional S parameter for output style, P for directory path | <gcode>M20</gcode> S0 |
| <gcode>M21</gcode> [→](m21) | Initialize/mount SD card | <gcode>M21</gcode> |
| <gcode>M23</gcode> [→](m23) | Select SD file for printing (must be followed by M24 to start) | <gcode>M23</gcode> filename.gcode |
| <gcode>M24</gcode> [→](m24) | Start or resume SD print | <gcode>M24</gcode> |
| <gcode>M25</gcode> | Pause SD print | <gcode>M25</gcode> |
| <gcode>M26</gcode> | Abort SD print. Optional S parameter for byte position in file | <gcode>M26</gcode> S1024 |
| <gcode>M27</gcode> | Report SD print progress | <gcode>M27</gcode> |
| <gcode>M30</gcode> | Delete file from SD card | <gcode>M30</gcode> old_file.gcode |
| <gcode>M32</gcode> | Select and immediately start SD file | <gcode>M32</gcode> print.gcode |
| <gcode>M82</gcode> | Set extruder to absolute mode | <gcode>M82</gcode> |
| <gcode>M83</gcode> | Set extruder to relative mode | <gcode>M83</gcode> |
| <gcode>M84</gcode> | Stop idle hold - disable stepper motors (S parameter sets timeout in seconds) | <gcode>M84</gcode> S600 |
| <gcode>M92</gcode> | Set axis steps per unit - calibrate steps/mm for X, Y, Z, E axes | <gcode>M92</gcode> X80 Y80 Z400 E93 |
| <gcode>M104</gcode> | Set extruder temperature without waiting (S parameter in °C) | <gcode>M104</gcode> S200 |
| <gcode>M105</gcode> | Get temperature reading - reports current and target temps for all modules | <gcode>M105</gcode> |
| <gcode>M109</gcode> | Set extruder temperature and wait until reached (S parameter in °C) | <gcode>M109</gcode> S190 |
| <gcode>M112</gcode> | Emergency stop - instantly halts all operations, turns off heaters, loses position | <gcode>M112</gcode> |
| <gcode>M114</gcode> | Report current position of all axes | <gcode>M114</gcode> |
| <gcode>M119</gcode> | Get endstop status - reports state of all endstop switches | <gcode>M119</gcode> |
| <gcode>M140</gcode> | Set bed temperature without waiting (S parameter in °C) | <gcode>M140</gcode> S60 |
| <gcode>M143</gcode> | Set maximum allowable temperature (S parameter in °C) | <gcode>M143</gcode> S250 |
| <gcode>M190</gcode> | Set bed temperature and wait until reached (S parameter in °C) | <gcode>M190</gcode> S60 |
| <gcode>M200</gcode> | Set filament diameter for volumetric extrusion (D parameter in mm) | <gcode>M200</gcode> D1.75 |
| <gcode>M203</gcode> | Set maximum feedrate for axes (X, Y, Z, E in mm/min) | <gcode>M203</gcode> X18000 Y18000 Z1000 E9000 |
| <gcode>M204</gcode> | Set acceleration - S for default, P for print, T for travel (in mm/s²) | <gcode>M204</gcode> S3000 P3000 T3000 |
| <gcode>M207</gcode> | Configure firmware retraction - S length, F feedrate, Z lift | <gcode>M207</gcode> S4 F3000 Z0.5 |
| <gcode>M208</gcode> | Configure firmware unretraction - S recover length, F feedrate | <gcode>M208</gcode> S0 F3000 |
| <gcode>M220</gcode> | Set speed factor override percentage (S100 = normal speed) | <gcode>M220</gcode> S100 |
| <gcode>M221</gcode> | Set flow rate/extrusion percentage override (S100 = normal flow) | <gcode>M221</gcode> S95 |
| <gcode>M301</gcode> | Set PID controller parameters - P (Kp), I (Ki), D (Kd) | <gcode>M301</gcode> P22.2 I1.08 D114.0 |
| <gcode>M303</gcode> | PID autotune - automatically calibrate PID. E for extruder (-1=bed), S target temp, C cycles | <gcode>M303</gcode> E0 S200 C8 |
| <gcode>M305</gcode> | Configure temperature sensor - P heater number, T thermistor resistance, B beta | <gcode>M305</gcode> P0 T100000 B4138 |
| <gcode>M306</gcode> | Set homing offset using current position (Z parameter in mm). Must follow with M500 to save | <gcode>M306</gcode> Z0 |
| <gcode>M408</gcode> | Status query command - returns machine status for PanelDue (S parameter for response type) | <gcode>M408</gcode> S0 |
| <gcode>M500</gcode> | Save configuration to SD card - persists calibration and config changes | <gcode>M500</gcode> |
| <gcode>M501</gcode> | Restore settings from SD card | <gcode>M501</gcode> |
| <gcode>M503</gcode> | Report current settings | <gcode>M503</gcode> |
| <gcode>M600</gcode> | Suspend print - pauses execution, turns off heaters (configurable), allows jogging | <gcode>M600</gcode> |
| <gcode>M601</gcode> | Resume print after M600 suspension | <gcode>M601</gcode> |
| <gcode>M665</gcode> | Config override (Delta) - set Z height, diagonal rod (L), delta radius (R). Use M500 to save | <gcode>M665</gcode> L250 R140 Z297.5 |
| <gcode>M951</gcode> | LED test - diagnostics command | <gcode>M951</gcode> |
| <gcode>M952</gcode> | Error dump - output error statistics | <gcode>M952</gcode> |
| <gcode>M957</gcode> | Report spindle status | <gcode>M957</gcode> |
| <gcode>M958</gcode> | Set spindle parameters (P for PWM percentage) | <gcode>M958</gcode> P50 |
| <gcode>M911</gcode> | **V2 Only** - Direct TMC stepper driver register access via SPI. Read all driver status with no parameters, write/read specific registers with S and V parameters | <gcode>M911</gcode> |
| <gcode>M911.1</gcode> | **V2 Only** - Write TMC register. S parameter specifies register, V parameter specifies value to write | <gcode>M911.1</gcode> S<register> V<value> |
| <gcode>M999</gcode> | Clear halt state after emergency stop (M112) or kill button. Position lost - must re-home | <gcode>M999</gcode> |
| <gcode>M1000</gcode> | Generic command wrapper - send console commands from G-code | <gcode>M1000</gcode> fire 50 |
| <gcode>M1234</gcode> [→](m1234) | Undocumented M-code (purpose unknown) | <gcode>M1234</gcode> |

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

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Important:</strong> In smoothie there must be a space in front of a line that is affected by a modal G code. Some G code processors like HeeksCNC don't prefix the space neither do they prefix each line with the modal G code.
</sl-alert>
{:/nomarkdown}
