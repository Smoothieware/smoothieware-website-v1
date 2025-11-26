---
permalink: /endstops
---


{% include modules/endstops-probes/guide-endstops-for-include.md %}

## Configuration

The config settings for Endstops are as follows:

{% include modules/endstops-probes/endstops-options-for-include.md %}

## Reading

You can use the {::nomarkdown}<mcode>M119</mcode>{:/nomarkdown} command to show the status of the configured endstops.

{::nomarkdown}<mcode>M119</mcode>{:/nomarkdown} answers this way:

```
min_x:0 min_y:0 min_z:0 max_x:0 max_y:0 max_z:0
ok
```

If an endstop is not connected the pin should be set to « `nc` » (meaning "not connected"), and its value will not be reported.

This is particularly useful when setting up your machine: you can issue the {::nomarkdown}<mcode>M119</mcode>{:/nomarkdown} command with your endstops unpressed, check that the values are 0 (which would be correct), and issue the command again with your endstops pressed, check that the values are all 1 (which is correct for pressed endstops).

If an endstop always reports 0, it probably means that it is not wired correctly.

If an endstop's values are inverted, it probably means you wired the pin as NO when it is NC, or the opposite.

You can reverse a pin in the configuration file by adding or removing a « `!` » character after the pin number (see [Pin Configuration](/pin-configuration)).

For example, if the beta min endstop is inverted in your diagnostics, change:

```
beta_min_endstop   1.26^
```

to:

```
beta_min_endstop   1.26^!
```

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  If, when homing, your endstop moves a few millimeters, and stops, it most probably means it's inverted (it thinks it's already hitting the endstop, and moves back from it). Just invert it in config and see if that helps.
</sl-alert>
{:/nomarkdown}

## Homing

You use the {::nomarkdown}<gcode>G28</gcode>{:/nomarkdown} command to home your machine.

For example:

```
G28 Z0
```

will home the Z axis.

And:

```
G28
```

will home all axes which have endstops enabled (all three by default).

If your axis is moving away from the endstop when homing, you need to invert your min and max endstops, or invert the direction of the axis, depending on your preference.

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  The firmware-cnc.bin is in CNC mode and by default uses grbl compatibility mode in this mode G28 does <strong>not</strong> home, it goes to a predefined park position (defined with G28.1). To home in CNC/GRBL mode you issue $H, (or G28.2).
</sl-alert>

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Currently only min <strong>or</strong> max endstops can be used for homing.<br>
  Do not set endstops for axes that shall not be homed.
</sl-alert>

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Note for Deltas using M666 to set soft trim:</strong><br><br>
  When you home a delta that has non zero trim values, you will find that X and Y are not 0 after homing. This is normal.<br><br>
  If you want X0 Y0 after homing you can set <setting v1="move_to_origin_after_home" v2="endstops.common.move_to_origin_after_home"></setting> to <code>true</code> in the config, this will move the effector to 0,0 after it homes and sets the trim. However, note this may crash into your endstops, so make sure you enable limit switches, as this will force the carriages off the endstops after homing but before moving to 0,0.
</sl-alert>

## Limit switches

Endstops may be configured to act as limit switches, during normal operations if any enabled limit switch is triggered the system will halt and all operations will stop, it will send a `!!` command to the host to stop it sending any more data (a recent dev octoprint and recent [Pronterface](pronterface) support this).
Sending `$X`, or sending {::nomarkdown}<mcode>M999</mcode>{:/nomarkdown}, or a reset will be required to continue. **NOTE** While any limit switch is still triggered the limits are disabled, so make sure you jog away from the limit otherwise you can crash into the limit switch. This is far from perfect but it is a compromise to allow you to jog off the endstop, if this were not the case it would only be possible to manually push the axis off the limit switch. A possible workaround is to also enable soft endstops as described below, and config it to ignore moves that will move past the soft endstop, if you do this then it will only allow the axis to jog away from the endstop.



To enable endstops as limit switches the following config options can be used, they are disabled by default.

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```
alpha_limit_enable                          true            # set to true to enable X min and max limit switches
beta_limit_enable                           true            # set to true to enable Y min and max limit switches
gamma_limit_enable                          true            # set to true to enable Z min and max limit switches
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[endstops.common]
alpha_limit_enable = true            # set to true to enable X min and max limit switches
beta_limit_enable = true             # set to true to enable Y min and max limit switches
gamma_limit_enable = true            # set to true to enable Z min and max limit switches
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}



When one axis is enabled both min and max endstops will be enabled as limit switches, setting an endstop pin to nc will disable it.

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  After homing the axis is usually left triggering the endstop, this would prevent that axis from moving, so when limit switches are enabled after homing the axis will back off the endstop by the <setting v1="{axis}_homing_retract_mm" v2="endstops.{min/max}{axis}.retract"></setting> amount.<br><br>
  The downside is if you home to 0 and at 0 the endstop is triggered going to 0,0 will cause a limit switch to fire. The workaround is to set homing offset to -5 (eg <code>M206 X-5 Y-5</code>) or enough to back off the endstop so when you go to 0,0 it does not trigger the endstop.<br><br>
  That way you can home, and safely go to 0 without triggering a limit switch event. An alternative is to set min/max X/Y to -5 rather than 0.
</sl-alert>

<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Boards with few endstops:</strong><br><br>
  On some boards you have only 3 endstop connectors, which is not enough to have one connector for each end of each axis, but you can still connect two endstops for each end of each axis by connecting the two endstops on a single connector:
  <ul>
    <li>In series and each connected as normally-closed</li>
    <li>Or in parallel and each connected as normally-open</li>
  </ul>
  This will allow for min and max limit switches to still work.
</sl-alert>

## Soft endstops

Soft(ware) endstops is a feature that allows the board to refuse any command that would put it outside the bounds of the work area.

Note that this feature only functions once the machine has been homed (until then it can't know where it is). After the machine has been homed this feature is enabled. it can be temporarily disabled using the `M211 S0` M-code, and can be enabled again using the `M211 S1` M-code.



The configuration is as such:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```
soft_endstop.enable         true         # Enable soft endstops
soft_endstop.x_min          1            # Minimum X position
soft_endstop.x_max          999          # Maximum X position
soft_endstop.y_min          1            # Minimum Y position
soft_endstop.y_max          499          # Maximum Y position
soft_endstop.z_min          1            # Minimum Z position
soft_endstop.z_max          199          # Maximum Z position
soft_endstop.halt           true         # Whether to issue a HALT state when hitting a soft endstop (if false, will just ignore commands that would exceed the limit)
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[soft_endstop]
enable = true         # Enable soft endstops
x_min = 1             # Minimum X position
x_max = 999           # Maximum X position
y_min = 1             # Minimum Y position
y_max = 499           # Maximum Y position
z_min = 1             # Minimum Z position
z_max = 199           # Maximum Z position
halt = true           # Whether to issue a HALT state when hitting a soft endstop (if false, will just ignore commands that would exceed the limit)
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}



Simply add this series of config options to your config file and the machine will start respecting soft endstops.

You can test/debug the feature by issuing the `M211` M-code, which will tell you the current status of the soft endstops.

**NOTE** it is highly recommended that you always enable HALT when a soft endstop is hit, the ignore commands option is VERY dangerous as subsequent commands that are within the soft endstops limit will continue from an arbitrary position causing untold damage.

## Usage example with home offsets

Here is a common sequence that you may do to set bed height, this need not be repeated unless the bed changes.

```
; Home
G28
; move to 5mm above bed
G0 Z5
; then manually jog down until nozzle is on bed or just traps a sheet of thin paper
; sets the Z homing offset based on current position
M306 Z0
G28
G0 Z0
; check nozzle still captures thin sheet of paper
M500
; saves the results in EEPROM equivalent
```

## Changing the origin

The homing position, or origin, is the 0,0 position relative to which the machine moves.

On a delta, the homing position (origin) is automatically the center of the bed.

On a cartesian, however, the homing position (origin) is the point at which the end stops are hit, generally a corner of the machine.

You might want to have a different origin point though.

For example, if your X axis is homing to the max endstop, and that endstop is 200mm away from the machine origin, you can make sure the machine knows where that endstop is relative to your origin point by setting:

```
alpha_max   200
```

If your X axis is homing to the min endstop, your work area is 200mm wide, and you want the origin point to be the center of the work area, you can set the origin point to the center of the work area by doing:

```
alpha_min   -100
```

By default, the machine will home, and set the current position as configured, but will not move to 0,0 after homing. If you want to move to the origin after homing, you need to set `move_to_origin_after_home` to true.

<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Going further:</strong><br><br>
  If you want to learn more about this module, or are curious how it works, Smoothie is Open-Source and you can simply go look at the code, <a href="https://github.com/Smoothieware/Smoothieware/blob/edge/src/modules/tools/endstops/Endstops.cpp">here</a>.
</sl-alert>

## Types of endstops

{% include modules/temperature/sensor-types-for-include.md %}

## External resources

### General video about mechanical endstops

{::nomarkdown}
<div style="text-align: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/FrYdAiSLKig" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
{:/nomarkdown}
