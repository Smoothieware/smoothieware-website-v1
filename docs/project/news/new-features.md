---
permalink: /new-features
---


# New Features

This page documents new features that were added to Smoothie in 2013.

## 2013/04

- Implemented support for [Octoprint](https://github.com/foosel/octoprint) host software.

## 2013/03

- Added native [HBot](https://github.com/arthurwolf/smoothie/pull/152/files) support to edge. Set <setting v1="arm_solution" v2="motion control.arm_solution"></setting> to "hbot" in your config to enable.

- Added [FirmConfigSource](https://github.com/arthurwolf/smoothie/pull/142/files) to edge. Now src/config.default gets compiled into the rom and read at each boot. The src/config.default file uses the same format as a normal sd config file.

- Added <setting v1="delta_segments_per_second" v2="motion control.delta_segments_per_second"></setting> to edge. This provides a segmentation based on the current feedrate and speed override, where the number of segments is inversely proportional to feedrate.

- The config file on the sd card can now be named either `config` or `config.txt`.

## 2013/02

- `reset` and `dfu` commands added to SimpleShell.

- Added support for [onboot.gcode](https://github.com/arthurwolf/smoothie/pull/124/files) to run automatically at power up by setting <setting v1="on_boot_gcode_enable"></setting> to true in config. The name of the file to be run can also be changed by setting <setting v1="on_boot_gcode"></setting>.

- Added [button](https://github.com/arthurwolf/smoothie/pull/123/files), which in a sense is the other half of the Switch module. This module will trigger custom m-codes when a pin is toggled. The combination of Button and Switch modules allows for 'programming' of basic behaviors with only simple config changes. An example would be a physical button that turns a fan, heater, or other tool on and off.

- Added [break](https://github.com/arthurwolf/smoothie/pull/121/files) command to enter debug mode from command line.

- Added [rotatable_cartesian](https://github.com/arthurwolf/smoothie/pull/115/files) arm solution which allows the print bed to be rotated arbitrarily. Setting this arm solution to 45deg is one way of making an h-bot print straight, but it wouldn't have working endstops.

- Added per axis [homing direction](https://github.com/arthurwolf/smoothie/pull/114/files) config option.

- Added initial [Rostock](https://github.com/arthurwolf/smoothie/pull/110/files) support!

- Now to enable the second usb serial port set <setting v1="second_usb_serial_enable" v2="consoles.second_usb_serial_enable"></setting> to true in config.

- Added `progress`, `abort`, and `help` commands to SimpleShell.


