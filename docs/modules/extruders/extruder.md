---
permalink: /extruder
---


{% include machine-guides/3d-printers/extruder-guide-for-include.md %}

## All options

All of the options currently supported by the Extruder module:

{% include modules/extruders/extruder-options-for-include.md %}

<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  This is the new format which allows multiple extruders. The old format is deprecated. The old "one-extruder-only" configuration options will still be valid for backward compatibility, but it is recommended not to use them.<br><br>
  For example where before you used `extruder_steps_per_mm` you must now use <setting v1="extruder.{name}.steps_per_mm" v2="extruder.{name}.steps_per_mm"></setting>.
</sl-alert>

## G-code

Here are the G-code commands currently supported by the Extruder module:

{::nomarkdown}
<table>
<thead>
<tr>
<th>Code</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><gcode>G0</gcode>/<gcode>G1</gcode></td>
<td>Move to the given coordinates. The <raw>F</raw> parameter defines speed and is remembered by subsequent commands (specified in millimetres/minute) (command is modal)</td>
</tr>
<tr>
<td><gcode>G10</gcode></td>
<td>Do firmware extruder retract</td>
</tr>
<tr>
<td><gcode>G11</gcode></td>
<td>Do firmware extruder un-retract</td>
</tr>
<tr>
<td><gcode>G90</gcode></td>
<td>Absolute mode (default): passed coordinates will be considered absolute (command is modal)</td>
</tr>
<tr>
<td><gcode>G91</gcode></td>
<td>Relative mode: passed coordinates will be considered relative to the current point (command is modal). Make sure you use <gcode>G92 E0</gcode> to reset the extruder position every layer.</td>
</tr>
<tr>
<td><gcode>G92</gcode></td>
<td>Set current position to specified coordinates (example: <gcode>G92 E0</gcode>)</td>
</tr>
<tr>
<td><mcode>M17</mcode></td>
<td>Turn the active stepper motor driver's off</td>
</tr>
<tr>
<td><mcode>M18</mcode></td>
<td>Turn the active stepper motor driver's on</td>
</tr>
<tr>
<td><mcode>M82</mcode></td>
<td>Set absolute mode for extruder only</td>
</tr>
<tr>
<td><mcode>M83</mcode></td>
<td>Set relative mode for extruder only</td>
</tr>
<tr>
<td><mcode>M84</mcode></td>
<td>Turn off stepper motor drivers</td>
</tr>
<tr>
<td><mcode>M92</mcode></td>
<td>Set this axis' steps per millimetre. For example <mcode>M92 E100</mcode> to set for the currently active Extruder, or <raw>T1</raw> <mcode>M92 E100</mcode> to set for the second extruder.</td>
</tr>
<tr>
<td><mcode>M114</mcode></td>
<td>Displays <raw>XYZ</raw> position, as well as the <raw>E</raw> position of the currently active Extruder</td>
</tr>
<tr>
<td><mcode>M200</mcode></td>
<td>Set <raw>E</raw> units for volumetric extrusion - <raw>D&lt;filament diameter&gt;</raw> set to 0 to disable volumetric extrusion, for example: <mcode>M200 D3.0</mcode> to set for the currently active Extruder, and <mcode>M200 D3.0 P3</mcode> to set for the third Extruder.</td>
</tr>
<tr>
<td><mcode>M203</mcode></td>
<td>Set maximum rate for axis, set <raw>E</raw> for Extruder axis or <raw>V</raw> for volumetric extrusion limit, for example: <mcode>M203 V10</mcode> will limit extrusion moves to no faster than 10mm³/s. <mcode>M203 V0</mcode> disables.</td>
</tr>
<tr>
<td><mcode>M204</mcode></td>
<td>Set acceleration in mm/sec², <raw>E&lt;nnn&gt;</raw> sets extruder only move acceleration, for example: <mcode>M204 E500</mcode>. <raw>P</raw> selects the extruder, uses the currently active extruder if omitted.</td>
</tr>
<tr>
<td><mcode>M207</mcode></td>
<td>Set retract length <raw>S&lt;positive|mm&gt;</raw> <raw>F&lt;feedrate|mm/min&gt;</raw> <raw>Z&lt;additional|zlift/hop&gt;</raw> <raw>Q&lt;zlift|feedrate mm/min&gt;</raw>, for example: <mcode>M207 S4 F30 Z1</mcode></td>
</tr>
<tr>
<td><mcode>M208</mcode></td>
<td>Set retract recover length <raw>S&lt;positive|mm surplus to the <mcode>M207</mcode> S*&gt;</raw> <raw>F&lt;feedrate|mm/min&gt;</raw>, for example: <mcode>M208 S0 F8</mcode></td>
</tr>
<tr>
<td><mcode>M221</mcode></td>
<td><raw>S&lt;flow rate factor in percent&gt;</raw>: Set flow rate factor override percentage for current extruder</td>
</tr>
<tr>
<td><mcode>M500</mcode></td>
<td>Save volatile settings to an override file</td>
</tr>
<tr>
<td><mcode>M503</mcode></td>
<td>Display volatile settings</td>
</tr>
</tbody>
</table>
{:/nomarkdown}

<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  If you want to learn more about this module, or are curious how it works, Smoothie is Open-Source and you can simply go look at the code, <a href="https://github.com/Smoothieware/Smoothieware/blob/edge/src/modules/tools/extruder/Extruder.cpp">here</a>.
</sl-alert>

### External resources

<iframe width="100%" height="720" src="https://www.youtube.com/embed/YUPfBJz3I6Y" frameborder="0" allowfullscreen></iframe>
