---
permalink: /error
---

# List of Smoothie Firmware Errors

When Smoothie encounters a problem, it will report an error number to help you diagnose and fix the issue.

This page lists all possible error codes, their causes, solutions, and any associated parameters.

## Error Reference

| Error Number | Cause | Solution | Parameters |
| ------------ | ----- | -------- | ---------- |
| 1 | Invalid configuration line | Check there is no typo or other syntax error for that line | The line for which there is an error |
| 2 | Configuration line has no value | Check why Smoothie can not find a value for that line | The line for which there is no value found |
| 3 | A line was too long | The line was truncated, check why it is so long | The line that was found to be too long |
| 4 | Unable to find included config file | Check the config file exists and there is no typo | The file name for the included config file |
| 5 | No config file found | Make sure there is actually a config file to be found | |
| 6 | Calling value after config cache has been cleared | This shouldn't happen, if it does please contact the dev team on GitHub | |
| 7 | Duplicate config line replaced | A config line is present twice in the config file, the second one overwrote the first one | Value of the config option |
| 8 | Could not find this config setting | A config setting is required but not found in your config | |
| 9 | Config option is not a valid number | A syntax error makes it so a number cannot be read, check values for errors | Value and checksums for this option |
| 10 | Config option is not a valid integer | A syntax error makes it so an integer cannot be read, check values for errors | Value and checksums for this option |
| 11 | A motor is not defined in config | Make sure the motor which's letter is given is defined in the config | The letter for the problematic motor |
| 12 | Motor doesn't match index | A motor has been declared but doesn't have the right index | Motor number, index number |
| 13 | Too many motors | Reduce the number of motors, or increase `k_max_actuators` and recompile | |
| 14 | Actuator rate (max speed times steps per millimeter) exceeds base step frequency | Set the rate for this motor lower | Actuator number, requested rate, rate it was finally set to |
| 15 | A soft endstop was hit | Retract from the soft endstop and send `M999` or reset | The axis endstop that was hit |
| 17 | Homing cycle failed | Check if the `max_travel` setting isn't too large, or if there isn't a mechanical problem | |
| 18 | Laser pin chosen isn't hardware-pwm-capable | Choose a pin that is hardware-pwm capable for your laser PWM pin (`P2.0 - P2.5`, `P1.18`, `P1.20`, `P1.21`, `P1.23`, `P1.24`, `P1.26`, `P3.25`, `P3.26` only) | The pin number currently chosen |
| 20 | Probe failed or not run | Make sure everything is alright with your probe system | |
| 21 | Spindle pin chosen isn't hardware-pwm-capable | Choose a pin that is hardware-pwm capable for your spindle PWM pin (`P2.0 - P2.5`, `P1.18`, `P1.20`, `P1.21`, `P1.23`, `P1.24`, `P1.26`, `P3.25`, `P3.26` only) | The pin number currently chosen |
| 22 | Spindle pin chosen isn't hardware-pwm-capable | Choose a pin that is hardware-pwm capable for your spindle PWM pin (`P2.0 - P2.5`, `P1.18`, `P1.20`, `P1.21`, `P1.23`, `P1.24`, `P1.26`, `P3.25`, `P3.26` only) | The pin number currently chosen |
| 23 | Spindle feedback pin must be on port 0 or port 2 | Make sure your spindle feedback pin looks like `P0.xx` or `P2...` | |
| 24 | No valid spindle type defined | Make sure you typed the spindle type correctly, check configuration to make sure | |
| 26 | Selected switch output pin is not hardware-pwm-capable | Choose a pin that is hardware-pwm capable for your switch PWM pin (`P2.0 - P2.5`, `P1.18`, `P1.20`, `P1.21`, `P1.23`, `P1.24`, `P1.26`, `P3.25`, `P3.26` only) | |
| 27 | Autopid did not resolve within the allotted number of cycles | Something is wrong with your PID autotuning, maybe check your parameters | The number of cycles tried |
| 30 | Max temp or min temp triggered on a temperature control module | Check that the specified module is alright, for example, check the thermistor connection for shorts or problems | The designator for this temp control module |
| 31 | Temperature reading unreliable | Check that the specified module is alright, for example, check the thermistor connection for shorts or problems | The designator for this temp control module |
| 32 | Temperature took too long to be reached | Check the heater is alright, and if it is, you need to adjust your temperature safety parameters | Designator for this temp control module |
| 33 | Temperature runaway | Check this heater is alright, and if it is, you need to adjust your temperature safety parameters | Designator for this temp control module, delta in temperature that caused the error to trigger |
| 34 | Thermistor config needs 6 numbers for Steinhart-Hart | Provide the right configuration for your thermistor | |
| 35 | Thermistor config needs 3 Steinhart-Hart coefficients | Provide the right configuration for your thermistor | |
| 36 | Thermistor config needs `rt_curve`, coefficients, beta or a valid predefined thermistor defined | Provide the right configuration for your thermistor | |
| 37 | Negative coefficient in `calculate_steinhart_hart_coefficients` | Something may be wrong with the measurements | |
| 38 | Beta cannot be 0 | Set your temperature control thermistor beta to a value above zero | |
| 39 | The config is bad for this temperature sensor | Check your thermistor configuration options | |
| 40 | No switch specified for temperature switch module | Define a switch module as the target of your temperature switch module | |
| 45 | You used the `T` command with an invalid tool number | Only use tools that exist | The number of the tool that was requested |
| 50 | Invalid config, `x_size` and `y_size` must be defined | Define these options | |
| 51 | Not enough memory in grid strategy | Modify config to use less memory or otherwise free memory | |
| 52 | Unable to save grid in `only_by_two_corners` mode | Don't try to do this | |
| 53 | No grid to save | Only save grids that exist | |
| 54 | Unable to save grid with size different from configured | Only save grids with the same size as you configured | |
| 55 | Failed to open grid file | Make sure the file exists | The name of the grid file |
| 56 | Failed to write grid x size | Make sure your SD card is ok | |
| 57 | Failed to write grid y size | Make sure your SD card is ok | |
| 58 | Failed to write `x_size` | Make sure your SD card is ok | |
| 59 | Failed to write `y_size` | Make sure your SD card is ok | |
| 60 | Failed to write grid | Make sure your SD card is ok | |
| 62 | Failed to open grid | Make sure your SD card is ok | |
| 63 | Failed to read grid size | Make sure your SD card is ok | |
| 64 | Grid size x is different in config and in the file read | Make sure config and grid file match | Loaded grid size, configured grid size |
| 66 | Grid size y is different in config and in the file read | Make sure config and grid file match | Loaded grid size, configured grid size |
| 67 | Failed to read grid x size | Make sure your SD card is ok | |
| 68 | Failed to read grid y size | Make sure your SD card is ok | |
| 69 | Bed dimensions changed | Read bed dimensions and config bed dimensions are different | X size read, Y size read, X size in config, Y size in config |
| 70 | Failed to read grid | Make sure your SD card is ok | |
| 71 | Need at least a 5x5 grid to probe | Make sure your grid is at least 5x5 | |
| 74 | Probe failed to complete | Check the initial probe height and/or `initial_height` settings | |
| 76 | Finding bed failed | Check the initial height setting | |
| 77 | Calibration failed to complete | Check the initial probe height and/or `initial_height` settings | |
| 80 | Could not get current trim | Check if endstops are enabled | |
| 81 | Probe was not repeatable | Improve your probe or reduce your probing tolerance | The distance to which the probe was not repeatable |
| 83 | Trim did not resolve to within required parameters | | The trim delta |
| 85 | Delta radius did not resolve to within required parameters | | Resolution target |
| 87 | No grid to save | Make sure you have a grid before trying to save it | |
| 88 | Failed to open grid file | Make sure the file exists | The name of the grid file |
| 89 | Failed to write grid size | Make sure your SD card is ok | |
| 90 | Failed to write grid radius | Make sure your SD card is ok | |
| 91 | Failed to write grid | Make sure your SD card is ok | |
| 94 | Grid size is different in config and in the file read | Make sure config and grid file match | Loaded grid size, configured grid size |
| 95 | Failed to read grid radius | Make sure your SD card is ok | |
| 96 | Grid radius is different in config and in file | Check your config and your file | Radius in file, Radius in config |
| 98 | Need at least a 5x5 grid to probe | Make sure your grid is at least 5x5 | |
| 99 | `Is_square` has been removed | Use the new `rectangular_grid` strategy instead | |
| 100 | Probe failed to complete | Check the initial probe height and/or `initial_height` settings | |
| 105 | Finding bed failed | Check the `maxz` and initial height settings | |
| 106 | Probe failed to complete, probe not triggered or other error | There is probably something wrong with your probe | |
| 107 | Only 3 probe points allowed `P0-P2` | Check your three-point config | |
| 110 | Probe is not within tolerance | Check your probe | Tolerance |
| 111 | ZProbe pin not configured | Configure a zprobe pin | |
| 112 | ZProbe triggered before move, aborting command | Make sure your probe isn't triggered when you start a probe | |
| 113 | ZProbe not triggered | Make sure your zprobe can trigger correctly | |
| 114 | No strategy found to handle a Gcode | Make sure this strategy supports this Gcode | The Gcode |
| 120 | Probe fail | Check your probe | |
| 125 | Kill button pressed | | |
| 126 | Overtemperature shutdown | Your stepper driver is getting too hot | Motor designator |
| 127 | Channel A over current shutdown | Your stepper driver is in over-current | Motor designator |
| 128 | Channel B over current shutdown | Your stepper driver is in over-current | Motor designator |
| 129 | Channel A predriver fault | Your stepper driver had a predriver fault | Motor designator |
| 130 | Channel B predriver fault | Your stepper driver had a predriver fault | Motor designator |
| 131 | Overtemperature Prewarning | Your driver might get too hot very soon | Motor designator |
| 132 | Overtemperature Shutdown | Your driver is too hot | Motor designator |
| 133 | SHORT to ground on channel A | Your driver has a short | Motor designator |
| 134 | SHORT to ground on channel B | Your driver has a short | Motor designator |
| 135 | Channel A seems to be unconnected | Your driver is disconnected | Motor designator |
| 136 | Channel B seems to be unconnected | Your driver is disconnected | Motor designator |
| 137 | MotorDriverControl error: axis not defined | | |
| 138 | MotorDriverControl error: axis must be one of XYZABC | | |
| 139 | MotorDriverControl error: chip select not defined | Define your chip select pin | The axis name |
| 140 | MotorDriverControl error: chip type not defined | Define a chip type | The axis name |
| 141 | MotorDriverControl error: Unknown chip type | Check your chip type | The axis name |
| 142 | MotorDriverControl error: Unknown SPI Channel | Check the SPI channel | The axis name |
| 145 | Motor driver alarm | There is something wrong with the driver | |
| 150 | Not enough memory available for panel frame buffer | Free some RAM before using panel | |
| 151 | Bad SPI channel for external SDCard | Check your SPI channel | |
| 200 | SD card not initializing | Check if the SD card is correctly inserted, the state of the SD card socket, and maybe try reformatting the card | |
| 201 | Not enough room in line to insert value | Try editing the configuration file manually instead of using commands | The setting you tried to edit |
| 215 | A hard endstop was hit | Retract from the hard endstop and send `M999` or reset | The axis endstop that was hit |
