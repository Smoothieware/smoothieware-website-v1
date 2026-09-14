---
permalink: /new-features
---


# New Features

This page records feature announcements by date. Topic pages provide the configuration and operating instructions.

## Fall 2026

The table reconciles the [SmoothieV2 New features wiki](https://github.com/Smoothieware/SmoothieV2/wiki/New-features) and the [2026-09-13 Maker Forums announcement](https://forum.makerforums.info/t/new-and-upcoming-features-for-smoothieware-fall-2026/95442) with firmware source. The V2 source check used commit [`2a21c010`](https://github.com/Smoothieware/SmoothieV2/commit/2a21c0108b1d095ecd8b2b9358e94055f053c003), dated 2026-08-17. Source presence confirms an implementation, but it does not confirm that an older installed firmware build contains it.

| Feature | Source status | Documentation |
|---------|---------------|---------------|
| Lathe spindle synchronization and `G33` | V2 implementation | [Lathe Module](/lathe) |
| Electronic Leadscrew with TM1638 | V2 implementation; upstream notes retain a work-in-progress label | [ELS](/els) |
| Individual Button Box inputs, press/release macros, `KILL`, `SUSPEND`, and `$J STOP` | V2 implementation | [Button Box](/button-box) |
| Button Box `FAULT` inputs | V2 implementation; polled software halt input | [Fault inputs](/button-box#fault-inputs) |
| Button Box matrix keypads | Not implemented in checked V2 source; sample configuration is ahead of the implementation | [Matrix keypad status](/button-box#matrix-keypads) |
| Direct MPG axis control and shared hand wheel with pushbutton axis selection | V2 implementation | [MPG](/mpg#axis-selector-optional) |
| Slaved internal-driver axes and independent alignment | V2 implementation | [Slaved Axes](/actuator-slaving) |
| Auxiliary UART console or `echo -1` target | V2 implementation | [UART target mode](/uart#send-text-to-a-connected-device-v2-only) |
| NIST `G30` and `G30.1` in GRBL mode | V2 implementation | [G30 stored position](/g30#nist-stored-position-in-v2-grbl-mode) |
| ECCE `ed` file editor | V2 implementation | [`ed`](/console-commands#ed) |
| Interactive `le` command editor and session history | V2 implementation | [`le`](/console-commands#le) |
| Network shell, FTP, HTTP/WebSocket, and NTP | V2 implementation | [V2 network services](/network#v2-network-services) |
| O-word subroutines | V2 limited implementation | [O-word Subroutines](/subroutines) |
| MAX7219 seven-segment DRO | V2 implementation | [MAX7219 DRO](/max7219-dro) |
| Real-time `!` feed hold and `~` cycle start | V2 implementation; forum announcement labels it work in progress | [Feed Hold and Cycle Start](/feed-hold) |
| Backlash compensation | Experimental, unmerged V1 `add/backlash` branch; absent from V2 master | [Backlash Compensation](/backlash-compensation) |

Firmware development can change these statuses. Check each linked page's source and maturity notice before configuring a machine.

## 2013/04

- Implemented support for [Octoprint](https://github.com/foosel/octoprint) host software.

## 2013/03

- Added native [HBot](https://github.com/arthurwolf/smoothie/pull/152/files) support to edge. Set {::nomarkdown}<setting v1="arm_solution" v2="motion control.arm_solution"></setting>{:/nomarkdown} to "hbot" in your config to enable.

- Added [FirmConfigSource](https://github.com/arthurwolf/smoothie/pull/142/files) to edge. Now src/config.default gets compiled into the rom and read at each boot. The src/config.default file uses the same format as a normal sd config file.

- Added {::nomarkdown}<setting v1="delta_segments_per_second" v2="motion control.delta_segments_per_second"></setting>{:/nomarkdown} to edge. This provides a segmentation based on the current feedrate and speed override, where the number of segments is inversely proportional to feedrate.

- The config file on the sd card can now be named either `config` or `config.txt`.

## 2013/02

- `reset` and `dfu` commands added to SimpleShell.

- Added support for [onboot.gcode](https://github.com/arthurwolf/smoothie/pull/124/files) to run automatically at power up by setting {::nomarkdown}<versioned><v1><setting v1="on_boot_gcode_enable"></setting></v1><v2>Not supported in v2</v2></versioned>{:/nomarkdown} to true in config. The name of the file to be run can also be changed by setting {::nomarkdown}<versioned><v1><setting v1="on_boot_gcode"></setting></v1><v2>Not supported in v2</v2></versioned>{:/nomarkdown}.

- Added [button](https://github.com/arthurwolf/smoothie/pull/123/files), which in a sense is the other half of the Switch module. This module will trigger custom m-codes when a pin is toggled. The combination of Button and Switch modules allows for 'programming' of basic behaviors with only simple config changes. An example would be a physical button that turns a fan, heater, or other tool on and off.

- Added [break](https://github.com/arthurwolf/smoothie/pull/121/files) command to enter debug mode from command line.

- Added [rotatable_cartesian](https://github.com/arthurwolf/smoothie/pull/115/files) arm solution which allows the print bed to be rotated arbitrarily. Setting this arm solution to 45deg is one way of making an h-bot print straight, but it wouldn't have working endstops.

- Added per axis [homing direction](https://github.com/arthurwolf/smoothie/pull/114/files) config option.

- Added initial [Rostock](https://github.com/arthurwolf/smoothie/pull/110/files) support!

- Now to enable the second usb serial port set {::nomarkdown}<setting v1="second_usb_serial_enable" v2="consoles.second_usb_serial_enable"></setting>{:/nomarkdown} to true in config.

- Added `progress`, `abort`, and `help` commands to SimpleShell.

