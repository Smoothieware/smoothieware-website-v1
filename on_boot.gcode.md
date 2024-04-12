
# Using on_boot.gcode

If you create a file on your SD card named `on_boot.gcode`, the contents of that file will be executed every time the machine boots up.

This is useful if you need to set things up a certain way, or perform actions, every time the machine is reset.

## Useful codes

Here are some useful G-codes you might want to use in your `on_boot.gcode`:

- `G28` (3D printer mode) or `$H` (CNC mode), instructs the machine to seek the endstops on all axes, useful if you want your machine to always know where it is. Without this, features such as soft endstops will not work until the user manually issues an endstop seeking (home) command.
- `G92` To set what the current position is
- `G0` To move the head somewhere in the work area
- `G91` or `G90` to set the current mode to absolute or relative
- `G53 G0` to move to a position in absolute machine coordinates instead of the current workspace coordinate system
- `M105` to set a given temperature on a heater so it starts pre-heating
- `M106` to turn a fan on at boot time

See [supported-g-codes](/supported-g-codes.md) for more information on these and other G-codes.
