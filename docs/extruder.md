
{% include_relative extruder-guide.md %}

## All options

All of the options currently supported by the Extruder module:

| Option | Example value | Explanation |
| ------ | ------------- | ----------- |
{% include_relative extruder-options.md %}

> [!NOTE]
> This is the new format which allows multiple extruders. The old format is deprecated. The old "one-extruder-only" configuration options will still be valid for backward compatibility, but it is recommended not to use them.
>
> For example where before you used `extruder_steps_per_mm` you must now use `extruder.[module-name].steps_per_mm`.

## G-code

Here are the G-code commands currently supported by the Extruder module:

- `G0`/`G1`: Move to the given coordinates. The F parameter defines speed and is remembered by subsequent commands (specified in millimetres/minute) (command is modal)
- `G10`: Do firmware extruder retract
- `G11`: Do firmware extruder un-retract
- `G90`: Absolute mode (default): passed coordinates will be considered absolute (command is modal)
- `G91`: Relative mode: passed coordinates will be considered relative to the current point (command is modal). Make sure you use `G92 E0` to reset the extruder position every layer.
- `G92`: Set current position to specified coordinates (example: `G92 E0`)
- `M17`: Turn the active stepper motor driver's off
- `M18`: Turn the active stepper motor driver's on
- `M82`: Set absolute mode for extruder only
- `M83`: Set relative mode for extruder only
- `M84`: Turn off stepper motor drivers
- `M92`: Set this axis' steps per millimetre. For example `M92 E100` to set for the currently active Extruder, or `T1 M92 E100` to set for the second extruder.
- `M114`: Displays XYZ position, as well as the E position of the currently active Extruder
- `M200`: Set E units for volumetric extrusion - D<filament diameter> set to 0 to disable volumetric extrusion, for example: `M200 D3.0` to set for the currently active Extruder, and `M200 D3.0 P3` to set for the third Extruder.
- `M203`: Set maximum rate for axis, set E for Extruder axis or V for volumetric extrusion limit, for example: `M203 V10` will limit extrusion moves to no faster than 10mm^3/s. `M203 V0` disables.
- `M204`: Set acceleration in mm/sec^2, E<nnn> sets extruder only move acceleration, for example: `M204 E500`. P selects the extruder, uses the currently active extruder if omitted.
- `M207`: Set retract length S<positive|mm> F<feedrate|mm/min> Z<additional|zlift/hop> Q<zlift|feedrate mm/min>, for example: `M207 S4 F30 Z1`
- `M208`: Set retract recover length S<positive|mm surplus to the M207 S*> F<feedrate|mm/min>, for example: `M208 S0 F8`
- `M221`: S<flow rate factor in percent>: Set flow rate factor override percentage for current extruder
- `M500`: Save volatile settings to an override file
- `M503`: Display volatile settings

> [!TIP]
> If you want to learn more about this module, or are curious how it works, Smoothie is Open-Source and you can simply go look at the code, [here](https://github.com/Smoothieware/Smoothieware/blob/edge/src/modules/tools/extruder/Extruder.cpp).

### External resources

<iframe width="100%" height="720" src="https://www.youtube.com/embed/YUPfBJz3I6Y" frameborder="0" allowfullscreen></iframe>
