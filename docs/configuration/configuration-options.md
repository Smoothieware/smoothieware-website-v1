---
permalink: /configuration-options
---

# Configuration Options

{::nomarkdown}
<a href="/images/board.png">
  <img src="/images/board.png" alt="Configuration" width="150" height="150" style="float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

This is a comprehensive list of configuration options understood by the Smoothie firmware.

Some advanced options are omitted from this list and are not recommended for general use.

## Getting More Information

If you want more information about a given module, how it works and how to configure it, (and any advanced options that are not in this list) you can refer to that module's specific documentation page.

For information on pin options and electrical settings (pull up, pull down, open drain, etc.), please refer to [configuring-smoothie](configuring-smoothie).

## Configuration Reference Table

| Option | Example value | Explanation |
| ------ | ------------- | ----------- |
| General motion | | |
{% include modules/motion/motion-control-options.md %}
| <setting v1="alpha_steps_per_mm" v2="actuator.alpha.steps_per_mm"></setting> | 80 | Steps per millimetre for alpha stepper motor ( this is the `X` axis for a cartesian machine ) |
| <setting v1="beta_steps_per_mm" v2="actuator.beta.steps_per_mm"></setting> | 80 | Steps per millimetre for beta stepper motor ( this is the `Y` axis for a cartesian machine ) |
| <setting v1="gamma_steps_per_mm" v2="actuator.gamma.steps_per_mm"></setting> | 1600 | Steps per millimetre for gamma stepper motor ( this is the `Z` axis for a cartesian machine ) |
| <setting v1="arm_solution" v2="motion control.arm_solution"></setting> | cartesian | Sets the arm solution for this machine. The arm solution converts position in millimetres into actuator positions ( usually in steps ). On cartesian machines those are proportional to each other, but for example on a linear delta machine, some fancy math is required for the conversion. Possible values : `cartesian`, `corexy`, `linear_delta`, `rotatable_cartesian`, `morgan` |
| <setting v1="arm_length" v2="linear delta.arm_length"></setting> | 100 | In the case of a `linear_delta` arm solution, this is the length of an arm from hinge to hinge |
| <setting v1="arm_radius" v2="linear delta.arm_radius"></setting> | 124 | In the case of a `linear_delta` arm solution, this is the horizontal distance from hinge to hinge when the effector is centered |
| <setting v1="alpha_angle"></setting> | 0.0 / 30.0 | Angle by which the plane is rotated. For `rotatable_cartesian` arm solution: default is 0.0. For `experimental_delta` arm solution: default is 30.0. |
| <setting v1="arm1_length"></setting> | 100 | In the case of a `morgan` arm solution, length of the first arm |
| <setting v1="arm2_length"></setting> | 100 | In the case of a `morgan` arm solution, length of the second arm |
| <setting v1="morgan_offset_x"></setting> | 10 | In the case of a `morgan` arm solution, X offset |
| <setting v1="morgan_offset_y"></setting> | 10 | In the case of a `morgan` arm solution, Y offset |
| <setting v1="axis_scaling_x"></setting> | 0.8 | In the case of a `morgan` arm solution, scaling in the X axis |
| <setting v1="axis_scaling_y"></setting> | 0.8 | In the case of a `morgan` arm solution, scaling in the Y axis |
| <setting v1="x_axis_max_speed"></setting> | 30000 | Maximum allowable speed for the `X` axis, in millimetres/minute. Smoothie will never exceed that value for that axis. |
| <setting v1="y_axis_max_speed"></setting> | 30000 | Maximum allowable speed for the `Y` axis, in millimetres/minute. Smoothie will never exceed that value for that axis. |
| <setting v1="z_axis_max_speed"></setting> | 300 | Maximum allowable speed for the `Z` axis, in millimetres/minute. Smoothie will never exceed that value for that axis. |
| <setting v1="save_g92"></setting> | false | set to true to save any G92 offset with M500 (See WCS) |
| <setting v1="set_g92"></setting> | 0,0,0 | set the G92 offset to x,y,z (See WCS) |

| Stepper motors | | |
| <setting v1="alpha_step_pin" v2="actuator.x.step_pin"></setting> | `2.0` | Pin for alpha stepper step signal |
| <setting v1="alpha_dir_pin" v2="actuator.x.dir_pin"></setting> | `0.5` | Pin for alpha stepper direction |
| <setting v1="alpha_en_pin" v2="actuator.x.en_pin"></setting> | `0.4` | Pin for alpha enable pin |
| <setting v1="alpha_current" v2="current control.alpha.current"></setting> | 1.5 | M1 stepper motor driver current, in Amperes. |
| <setting v1="alpha_max_rate" v2="actuator.alpha.max_rate"></setting> | 30000 | Maximum allowable speed for this actuator ( as opposed to axis, they are the same on a cartesian machine, but not on a delta machine for example ), in millimetres/minute. |
| <setting v1="beta_step_pin" v2="actuator.y.step_pin"></setting> | `2.1` | Pin for beta stepper step signal |
| <setting v1="beta_dir_pin" v2="actuator.y.dir_pin"></setting> | `0.11` | Pin for beta stepper direction |
| <setting v1="beta_en_pin" v2="actuator.y.en_pin"></setting> | `0.10` | Pin for beta enable |
| <setting v1="beta_current" v2="current control.beta.current"></setting> | 1.5 | M2 stepper motor driver current, in Amperes. |
| <setting v1="beta_max_rate" v2="actuator.beta.max_rate"></setting> | 30000 | Maximum allowable speed for this actuator, in millimetres/minute. |
| <setting v1="gamma_step_pin" v2="actuator.z.step_pin"></setting> | `2.2` | Pin for gamma stepper step signal |
| <setting v1="gamma_dir_pin" v2="actuator.z.dir_pin"></setting> | `0.20` | Pin for gamma stepper direction |
| <setting v1="gamma_en_pin" v2="actuator.z.en_pin"></setting> | `0.19` | Pin for gamma enable |
| <setting v1="gamma_current" v2="current control.gamma.current"></setting> | 1.5 | M3 stepper motor driver current, in Amperes. |
| <setting v1="gamma_max_rate" v2="actuator.gamma.max_rate"></setting> | 300 | Maximum allowable speed for this actuator , in millimetres/minute. |

| Communication | | |
| <setting v1="uart0.baud_rate"></setting> | 115200 | Baud rate for the default hardware serial port ( UART0, labelled "Serial" on the board, close to the USB connector ). Defaults to 9600 if undefined, or if the configuration file can not be read. |
| <setting v1="second_usb_serial_enable"></setting> | false | This enables a second serial port over the USB connection ( for example to have both [Pronterface](/pronterface) and a terminal connected) |

| Miscellaneous | | |
| <setting v1="leds_disable"></setting> | true | Disable the 4 flashing LEDs on the board |
| <setting v1="play_led_disable"></setting> | true | Disable the "play" status LED |
| <setting v1="kill_button_enable"></setting> | false | Enable the "kill" button |
| <setting v1="kill_button_pin"></setting> | `2.12` | Pin for the "kill" button |
| <setting v1="msd_disable"></setting> | false | Disable the MSD ( SD Card access over USB ) when set to true ( requires a special binary, which you can find [here](https://github.com/Smoothieware/Smoothieware/blob/edge/FirmwareBin/firmware-disablemsd.bin), will be ignored without the special binary) |
| <setting v1="dfu_enable"></setting> | false | For Linux developers, set to true to enable DFU, which allows you to flash new firmwares over USB |

| Current control | | |
| <setting v1="currentcontrol_module_enable"></setting> | true | If set to true, enable digital control of the current settings of the stepper motor drivers. **Note** : this is dependent on the physical board type, and unless you are designing a new board you shouldn't have to modify these settings |
| <setting v1="digipotchip"></setting> | mcp4451 | Select the digipot chip with which to control the current for the stepper motor drivers. Supported chips are `mcp4451` and `ad5206` |
| <setting v1="digipot_max_current"></setting> | 2 | Maximum current that can be set |
| <setting v1="digipot_factor"></setting> | 113.33 | Factor for converting the current into digipot values |
| <setting v1="zeta_current" v2="current control.zeta.current"></setting> | 1.5 | Current setting for the 6th stepper motor driver current control |
| <setting v1="eta_current"></setting> | 1.5 | Current setting for the 7th stepper motor driver current control |
| <setting v1="theta_current"></setting> | 1.5 | Current setting for the 8th stepper motor driver current control |

| [Player](/player) | | |
{% include modules/player/player-options.md %}

| [Extruder](/extruder) | | |
{% include modules/extruders/extruder-options.md %}

| [Laser](/laser) | | |
{% include modules/laser/laser-options.md %}

| [Temperature control](/temperaturecontrol) | | |
{% include modules/temperature/temperaturecontrol-options.md %}

| [Switch](/switch) | | |
{% include modules/input-controls/switch-options.md %}

| [Temperature Switch](/temperatureswitch) | | |
{% include modules/temperature/temperatureswitch-options.md %}

| [Spindle control](/spindle-control) | | |
{% include modules/spindle/spindle-options.md %}

| [Endstops](/endstops) | | |
{% include modules/endstops-probes/endstops-options-for-include.md %}

| [Z probe](/zprobe) | | |
{% include modules/endstops-probes/zprobe-options-for-include.md %}

| [Leveling strategy](/zprobe#leveling-strategies) | | |
{% include modules/endstops-probes/zprobe-options-for-include.md %}

| [Panel](/panel) | | |
{% include hardware/panels/panel-options.md %}

| [Network](/network) | | |
{% include modules/network/network-options.md %}
