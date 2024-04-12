
# Configuration options

This is a list of most configuration options currently understood by the Smoothie firmware. Some are omitted from this list as they are advanced and not recommended.

If you want more information about a given module, how it works and how to configure it, (and any advanced options that are not in this list) you can refer to that module's page.

For information on options to settings please refer to [here](http://smoothieware.org/configuring-smoothie) for pull up, pull down, open drain, etc.

| Option | Example value | Explanation |
| ------ | ------------- | ----------- |
| General motion | | |
{% include_relative motion-control-options.md %}
| `alpha_steps_per_mm` | 80 | Steps per millimetre for alpha stepper motor ( this is the `X` axis for a cartesian machine ) |
| `beta_steps_per_mm` | 80 | Steps per millimetre for beta stepper motor ( this is the `Y` axis for a cartesian machine ) |
| `gamma_steps_per_mm` | 1600 | Steps per millimetre for gamma stepper motor ( this is the `Z` axis for a cartesian machine ) |
| `arm_solution` | cartesian | Sets the arm solution for this machine. The arm solution converts position in millimetres into actuator positions ( usually in steps ). On cartesian machines those are proportional to each other, but for example on a linear delta machine, some fancy math is required for the conversion. Possible values : `cartesian`, `corexy`, `linear_delta`, `rotatable_cartesian`, `morgan` |
| `arm_length` | 100 | In the case of a `linear_delta` arm solution, this is the length of an arm from hinge to hinge |
| `arm_radius` | 124 | In the case of a `linear_delta` arm solution, this is the horizontal distance from hinge to hinge when the effector is centered |
| `alpha_angle` | 45 | In the case of a `rotatable_cartesian` arm solution, angle by which the plane is rotated |
| `arm1_length` | 100 | In the case of a `morgan` arm solution, length of the first arm |
| `arm2_length` | 100 | In the case of a `morgan` arm solution, length of the second arm |
| `morgan_offset_x` | 10 | In the case of a `morgan` arm solution, X offset |
| `morgan_offset_y` | 10 | In the case of a `morgan` arm solution, Y offset |
| `axis_scaling_x` | 0.8 | In the case of a `morgan` arm solution, scaling in the X axis |
| `axis_scaling_y` | 0.8 | In the case of a `morgan` arm solution, scaling in the Y axis |
| `x_axis_max_speed` | 30000 | Maximum allowable speed for the `X` axis, in millimetres/minute. Smoothie will never exceed that value for that axis. |
| `y_axis_max_speed` | 30000 | Maximum allowable speed for the `Y` axis, in millimetres/minute. Smoothie will never exceed that value for that axis. |
| `z_axis_max_speed` | 300 | Maximum allowable speed for the `Z` axis, in millimetres/minute. Smoothie will never exceed that value for that axis. |
| `save_g92` | false | set to true to save any G92 offset with M500 (See WCS) |
| `set_g92` | 0,0,0 | set the G92 offset to x,y,z (See WCS) |

| Stepper motors | | |
| `alpha_step_pin` | `2.0` | Pin for alpha stepper step signal |
| `alpha_dir_pin` | `0.5` | Pin for alpha stepper direction |
| `alpha_en_pin` | `0.4` | Pin for alpha enable pin |
| `alpha_current` | 1.5 | M1 stepper motor driver current, in Amperes. |
| `alpha_max_rate` | 30000 | Maximum allowable speed for this actuator ( as opposed to axis, they are the same on a cartesian machine, but not on a delta machine for example ), in millimetres/minute. |
| `beta_step_pin` | `2.1` | Pin for beta stepper step signal |
| `beta_dir_pin` | `0.11` | Pin for beta stepper direction |
| `beta_en_pin` | `0.10` | Pin for beta enable |
| `beta_current` | 1.5 | M2 stepper motor driver current, in Amperes. |
| `beta_max_rate` | 30000 | Maximum allowable speed for this actuator, in millimetres/minute. |
| `gamma_step_pin` | `2.2` | Pin for gamma stepper step signal |
| `gamma_dir_pin` | `0.20` | Pin for gamma stepper direction |
| `gamma_en_pin` | `0.19` | Pin for gamma enable |
| `gamma_current` | 1.5 | M3 stepper motor driver current, in Amperes. |
| `gamma_max_rate` | 300 | Maximum allowable speed for this actuator , in millimetres/minute. |

| Communication | | |
| `uart0.baud_rate` | 115200 | Baud rate for the default hardware serial port ( UART0, labelled "Serial" on the board, close to the USB connector ). Defaults to 9600 if undefined, or if the configuration file can not be read. |
| `second_usb_serial_enable` | false | This enables a second serial port over the USB connection ( for example to have both [Pronterface](http://smoothieware.org/pronterface) and a terminal connected) |

| Miscellaneous | | |
| `leds_disable` | true | Disable the 4 flashing LEDs on the board |
| `play_led_disable` | true | Disable the "play" status LED |
| `kill_button_enable` | false | Enable the "kill" button |
| `kill_button_pin` | `2.12` | Pin for the "kill" button |
| `msd_disable` | false | Disable the MSD ( SD Card access over USB ) when set to true ( requires a special binary, which you can find [here](https://github.com/Smoothieware/Smoothieware/blob/edge/FirmwareBin/firmware-disablemsd.bin), will be ignored without the special binary) |
| `dfu_enable` | false | For Linux developers, set to true to enable DFU, which allows you to flash new firmwares over USB |

| Current control | | |
| `currentcontrol_module_enable` | true | If set to true, enable digital control of the current settings of the stepper motor drivers. **Note** : this is dependent on the physical board type, and unless you are designing a new board you shouldn't have to modify these settings |
| `digipotchip` | mcp4451 | Select the digipot chip with which to control the current for the stepper motor drivers. Supported chips are `mcp4451` and `ad5206` |
| `digipot_max_current` | 2 | Maximum current that can be set |
| `digipot_factor` | 113.33 | Factor for converting the current into digipot values |
| `zeta_current` | 1.5 | Current setting for the 6th stepper motor driver current control |
| `eta_current` | 1.5 | Current setting for the 7th stepper motor driver current control |
| `theta_current` | 1.5 | Current setting for the 8th stepper motor driver current control |

| [Player](http://smoothieware.org/player) | | |
{% include_relative player-options.md %}

| [Extruder](http://smoothieware.org/extruder) | | |
{% include_relative extruder-options.md %}

| [Laser](http://smoothieware.org/laser) | | |
{% include_relative laser-options.md %}

| [Temperature control](http://smoothieware.org/temperaturecontrol) | | |
{% include_relative temperaturecontrol-options.md %}

| [Switch](http://smoothieware.org/switch) | | |
{% include_relative switch-options.md %}

| [Temperature Switch](http://smoothieware.org/temperatureswitch) | | |
{% include_relative temperatureswitch-options.md %}

| [Spindle control](http://smoothieware.org/spindle-control) | | |
{% include_relative spindle-options.md %}

| [Endstops](http://smoothieware.org/endstops) | | |
{% include_relative endstops-options.md %}

| [Z probe](http://smoothieware.org/zprobe) | | |
{% include_relative zprobe-options.md %}

| [Leveling strategy](http://smoothieware.org/zprobe#leveling-strategies) | | |
{% include_relative zprobe-leveling-strategy-options.md %}

| [Panel](http://smoothieware.org/panel) | | |
{% include_relative panel-options.md %}

| [Network](http://smoothieware.org/network) | | |
{% include_relative network-options.md %}
