# Smoothieware v1 Config Option Mentions

This document contains all mentions of Smoothieware v1 configuration options found across the documentation in `docs/*.md` files.

**Generated:** 2025-11-04
**Total files scanned:** 265 markdown files
**Total mentions found:** 1269
**Format:** Each file is listed as a chapter with bullet points showing line numbers and context quotes for each config option mention

---

## docs/3d-printer-guide.md
- Line 139: `temperature_control.hotend.thermistor_pin` - "temperature_control.hotend.thermistor_pin    0.23             # Pin for the thermistor to read (here T0)"
- Line 140: `temperature_control.bed.thermistor_pin` - "temperature_control.bed.thermistor_pin       0.24             # Pin for the heated bed to read (here T1)"
- Line 200: `temperature_control.hotend.heater_pin` - "temperature_control.hotend.heater_pin        2.7              # Pin that controls the heater cartridge for the hot-end"
- Line 201: `temperature_control.bed.heater_pin` - "temperature_control.bed.heater_pin           2.5              # Pin that controls the heated bed"
- Line 313: `switch.fan.enable` - "switch.fan.enable                            true             #"
- Line 314: `switch.fan.input_on_command` - "switch.fan.input_on_command                  M106             #"
- Line 315: `switch.fan.input_off_command` - "switch.fan.input_off_command                 M107             #"
- Line 316: `switch.fan.output_pin` - "switch.fan.output_pin                        2.4              # The pin matching the MOSFET we chose"
- Line 317: `switch.fan.output_type` - "switch.fan.output_type                       pwm              # PWM output settable with S parameter in the input_on_comand"
- Line 318: `switch.fan.max_pwm` - "#switch.fan.max_pwm                           255              # set max PWM for the pin default is 255"

## docs/6axis.md
- Line 100: `delta_steps_per_mm` - "delta_steps_per_mm                    100     # may be steps per degree for example"
- Line 101: `delta_step_pin` - "delta_step_pin                        xx      # Pin for delta stepper step signal"
- Line 102: `delta_dir_pin` - "delta_dir_pin                         xx      # Pin for delta stepper direction"
- Line 103: `delta_en_pin` - "delta_en_pin                          xx      # Pin for delta enable"
- Line 104: `delta_current` - "delta_current                         1.5     # Z stepper motor current"
- Line 105: `delta_max_rate` - "delta_max_rate                        300.0   # mm/min"
- Line 106: `delta_acceleration` - "delta_acceleration                    500.0   # mm/sec²"
- Line 109: `epsilon_steps_per_mm` - "epsilon_steps_per_mm                  100     # may be steps per degree for example"
- Line 110: `epsilon_step_pin` - "epsilon_step_pin                      xx      # Pin for delta stepper step signal"
- Line 111: `epsilon_dir_pin` - "epsilon_dir_pin                       xx      # Pin for delta stepper direction"
- Line 112: `epsilon_en_pin` - "epsilon_en_pin                        xx      # Pin for delta enable"
- Line 113: `epsilon_current` - "epsilon_current                       1.5     # Z stepper motor current"
- Line 114: `epsilon_max_rate` - "epsilon_max_rate                      300.0   # mm/min"
- Line 115: `epsilon_acceleration` - "epsilon_acceleration                  500.0   # mm/sec²"
- Line 118: `zeta_steps_per_mm` - "zeta_steps_per_mm                     100     # may be steps per degree for example"
- Line 119: `zeta_step_pin` - "zeta_step_pin                         xx      # Pin for delta stepper step signal"
- Line 120: `zeta_dir_pin` - "zeta_dir_pin                          xx      # Pin for delta stepper direction"
- Line 121: `zeta_en_pin` - "zeta_en_pin                           xx      # Pin for delta enable"
- Line 122: `zeta_current` - "zeta_current                          1.5     # Z stepper motor current"
- Line 123: `zeta_max_rate` - "zeta_max_rate                         300.0   # mm/min"
- Line 124: `zeta_acceleration` - "zeta_acceleration                     500.0   # mm/sec²"
- Line 152: `endstop.minx.enable` - "endstop.minx.enable                          true             # enable an endstop"
- Line 153: `endstop.minx.pin` - "endstop.minx.pin                             1.24             # pin"
- Line 154: `endstop.minx.homing_direction` - "endstop.minx.homing_direction                home_to_min      # direction it moves to the endstop"
- Line 155: `endstop.minx.homing_position` - "endstop.minx.homing_position                 0                # the cartesian coordinate this is set to when it homes"
- Line 156: `endstop.minx.axis` - "endstop.minx.axis                            X                # the axis designator"
- Line 157: `endstop.minx.max_travel` - "endstop.minx.max_travel                      500              # the maximum travel in mm before it times out"
- Line 158: `endstop.minx.fast_rate` - "endstop.minx.fast_rate                       50               # fast homing rate in mm/sec"
- Line 159: `endstop.minx.slow_rate` - "endstop.minx.slow_rate                       25               # slow homing rate in mm/sec"
- Line 160: `endstop.minx.retract` - "endstop.minx.retract                         5                # bounce off endstop in mm"
- Line 165: `corexy_homing` - "# corexy_homing                               false            # set to true if homing on an hbot or corexy"
- Line 169: `homing_order` - "# homing_order                                 XYZ              # x axis followed by y then z last"
- Line 170: `move_to_origin_after_home` - "# move_to_origin_after_home                    false            # move XY to 0,0 after homing"
- Line 171: `endstop_debounce_count` - "# endstop_debounce_count                       100              # uncomment if you get noise on your endstops, default is 100"
- Line 172: `endstop_debounce_ms` - "# endstop_debounce_ms                          1                # uncomment if you get noise on your endstops, default is 1 millisecond debounce"
- Line 173: `home_z_first` - "# home_z_first true # uncomment and set to true to home the Z first, otherwise Z homes after XY"

## docs/advancedmotordriver.md
- Line 38: `motor_driver_control.motor1.enable` - "motor_driver_control.motor1.enable true  # where motor1 is any name you wish"
- Line 44: `motor_driver_control.motor1.chip` - "motor_driver_control.motor1.chip DRV8711    # this can be one of DRV8711 or TMC2660"
- Line 51: `motor_driver_control.motor1.spi_channel` - "motor_driver_control.motor1.spi_channel  0       # or 1"
- Line 52: `motor_driver_control.motor1.spi_cs_pin` - "motor_driver_control.motor1.spi_cs_pin   0.10    # any pin"
- Line 53: `motor_driver_control.motor1.spi_frequency` - "motor_driver_control.motor1.spi_frequency 100000 # the SPI frequency to use"
- Line 59: `motor_driver_control.motor1.axis` - "motor_driver_control.motor1.axis  X       # for display purposes and for setting in Mxxx commands and telling the system which axis it controls"
- Line 60: `motor_driver_control.motor1.alarm` - "motor_driver_control.motor1.alarm         true  # enable alarm checking of chip, and report with a console message"
- Line 61: `motor_driver_control.motor1.halt_on_alarm` - "motor_driver_control.motor1.halt_on_alarm true  # set to true to force a halt on any alarm condition"
- Line 62: `motor_driver_control.motor1.current` - "motor_driver_control.motor1.current       3000  # set the motor current in milliamps"
- Line 63: `motor_driver_control.motor1.max_current` - "motor_driver_control.motor1.max_current   4000  # the maximum current the chip allows"
- Line 64: `motor_driver_control.motor1.microsteps` - "motor_driver_control.motor1.microsteps    128   # the microsteps for this driver"
- Line 70: `motor_driver_control.motor1.sense_resistor` - "motor_driver_control.motor1.sense_resistor  xxx  # set the sense resistor used, this value is chip specific, set to the default for commonly used drivers"
- Line 71: `motor_driver_control.motor1.gain` - "motor_driver_control.motor1.gain  xxx  # set the gain for a DRV8711, leave at default if you do not know what this is"
- Line 73: `motor_driver_control.motor1.reg` - "motor_driver_control.motor1.reg 00002,981C0,A0000,C000E,E0060"
- Line 79-102: Multiple instances shown (alpha and beta) with all the same config options as above
- Line 110: `alpha_step_pin` - "alpha_step_pin                               2.0              # Pin for alpha stepper step signal"
- Line 111: `alpha_dir_pin` - "alpha_dir_pin                                0.5              # Pin for alpha stepper direction"

## docs/blue-box-guide.md (SmoothK40 Guide)
- Line 166: `alpha_steps_per_mm` - "alpha_steps_per_mm                           157.575               # Steps per mm for alpha stepper (based on my measurements)"
- Line 167: `beta_steps_per_mm` - "beta_steps_per_mm                            157.575               # Steps per mm for beta stepper"
- Line 168: `gamma_steps_per_mm` - "gamma_steps_per_mm                           1600                  # Steps per mm for gamma stepper"
- Line 173: `alpha_step_pin` - "alpha_step_pin                               2.0                   # Pin for alpha stepper step signal"
- Line 174: `alpha_dir_pin` - "alpha_dir_pin                                0.5!                  # Pin for alpha stepper direction (inverted with `!`)"
- Line 175: `alpha_en_pin` - "alpha_en_pin                                 0.4                   # Pin for alpha enable pin"
- Line 176: `alpha_current` - "alpha_current                                0.6                   # X stepper motor current"
- Line 177: `alpha_max_rate` - "alpha_max_rate                               30000.0               # mm/min"
- Line 179: `beta_step_pin` - "beta_step_pin                                2.1                   # Pin for beta stepper step signal"
- Line 180: `beta_dir_pin` - "beta_dir_pin                                 0.11                  # Pin for beta stepper direction"
- Line 181: `beta_en_pin` - "beta_en_pin                                  0.10                  # Pin for beta enable"
- Line 182: `beta_current` - "beta_current                                 0.5                   # Y stepper motor current"
- Line 183: `beta_max_rate` - "beta_max_rate                                30000.0               # mm/min"
- Line 190: `laser_module_enable` - "laser_module_enable                          true                  # Whether to activate the laser module at all"
- Line 192: `laser_module_pin` - "laser_module_pin                             2.5!                  # this pin (connect to PSU IN) PWM to control the laser"
- Line 194: `laser_module_max_power` - "laser_module_max_power                       0.8                   # this is the maximum duty cycle that will be applied to the laser"
- Line 195: `laser_module_tickle_power` - "laser_module_tickle_power                    0.0                   # this duty cycle will be used for travel moves"
- Line 197: `laser_module_pwm_period` - "laser_module_pwm_period                      20                    # this sets the pwm frequency as the period in microseconds"
- Line 202: `network.enable` - "network.enable                               true                  # enable the ethernet network services"
- Line 203: `network.webserver.enable` - "network.webserver.enable                     true                  # enable the webserver"
- Line 204: `network.telnet.enable` - "network.telnet.enable                        true                  # enable the telnet server"
- Line 205: `network.ip_address` - "network.ip_address                           auto                  # use dhcp to get ip address"
- Line 206: `network.hostname` - "network.hostname                             SmoothK40             # Some DHCP servers accept a hostname"
- Line 208-211: Additional network config (commented out): `network.ip_address`, `network.ip_mask`, `network.ip_gateway`, `network.mac_override`

## docs/bluebox-guide.md
- Line 195: `alpha_current` - "change `alpha_current` and `beta_current` to the value `1` ( for 1 Ampere )"
- Line 195: `beta_current` - "change `alpha_current` and `beta_current` to the value `1` ( for 1 Ampere )"
- Line 195: `alpha_steps_per_mm` - "change the `alpha_steps_per_mm` and `beta_steps_per_mm` to the value `157.575`"
- Line 195: `beta_steps_per_mm` - "change the `alpha_steps_per_mm` and `beta_steps_per_mm` to the value `157.575`"

## docs/bluetooth-serial.md
- Line 164: `uart0.baud_rate` - "uart0.baud_rate  115200   # Baud rate for the default hardware serial port"

## docs/blog.md
- Line 77: `planner_queue_size` - "Smoothie Edge-0b3e620 and later now pays attention to config option \"planner_queue_size\""


## docs/cartesian.md
- Line 18: `arm_solution` - "To configure your machine to use the Cartesian arm solution, add this to your configuration file: ```arm_solution cartesian```"

## docs/cnc-mill-guide.md
- Line 90: `grbl_mode` - "`grbl_mode` enabled by default (which means Smoothie interprets G-code as CNC G-code rather than 3D-printing G-code)"
- Line 96: `grbl_mode` - "You will find more information on `grbl_mode` on the [grbl_mode](http://smoothieware.org/grbl-mode) page."

## docs/compiling-smoothie.md
- Line 225: `dfu_enable` - "DFU is not enabled by default, to use it you must add the following to your config file: ```bash\ndfu_enable true # enable dfu\n```"

## docs/configuration-options.md
- Line 25: `alpha_steps_per_mm` - "Steps per millimetre for alpha stepper motor ( this is the `X` axis for a cartesian machine )"
- Line 26: `beta_steps_per_mm` - "Steps per millimetre for beta stepper motor ( this is the `Y` axis for a cartesian machine )"
- Line 27: `gamma_steps_per_mm` - "Steps per millimetre for gamma stepper motor ( this is the `Z` axis for a cartesian machine )"
- Line 28: `arm_solution` - "Sets the arm solution for this machine. The arm solution converts position in millimetres into actuator positions ( usually in steps ). On cartesian machines those are proportional to each other, but for example on a linear delta machine, some fancy math is required for the conversion. Possible values : `cartesian`, `corexy`, `linear_delta`, `rotatable_cartesian`, `morgan`"
- Line 29: `arm_length` - "In the case of a `linear_delta` arm solution, this is the length of an arm from hinge to hinge"
- Line 30: `arm_radius` - "In the case of a `linear_delta` arm solution, this is the horizontal distance from hinge to hinge when the effector is centered"
- Line 31: `alpha_angle` - "In the case of a `rotatable_cartesian` arm solution, angle by which the plane is rotated"
- Line 32: `arm1_length` - "In the case of a `morgan` arm solution, length of the first arm"
- Line 33: `arm2_length` - "In the case of a `morgan` arm solution, length of the second arm"
- Line 34: `morgan_offset_x` - "In the case of a `morgan` arm solution, X offset"
- Line 35: `morgan_offset_y` - "In the case of a `morgan` arm solution, Y offset"
- Line 36: `axis_scaling_x` - "In the case of a `morgan` arm solution, scaling in the X axis"
- Line 37: `axis_scaling_y` - "In the case of a `morgan` arm solution, scaling in the Y axis"
- Line 38: `x_axis_max_speed` - "Maximum allowable speed for the `X` axis, in millimetres/minute. Smoothie will never exceed that value for that axis."
- Line 39: `y_axis_max_speed` - "Maximum allowable speed for the `Y` axis, in millimetres/minute. Smoothie will never exceed that value for that axis."
- Line 40: `z_axis_max_speed` - "Maximum allowable speed for the `Z` axis, in millimetres/minute. Smoothie will never exceed that value for that axis."
- Line 41: `save_g92` - "set to true to save any G92 offset with M500 (See WCS)"
- Line 42: `set_g92` - "set the G92 offset to x,y,z (See WCS)"
- Line 45: `alpha_step_pin` - "Pin for alpha stepper step signal"
- Line 46: `alpha_dir_pin` - "Pin for alpha stepper direction"
- Line 47: `alpha_en_pin` - "Pin for alpha enable pin"
- Line 48: `alpha_current` - "M1 stepper motor driver current, in Amperes."
- Line 49: `alpha_max_rate` - "Maximum allowable speed for this actuator ( as opposed to axis, they are the same on a cartesian machine, but not on a delta machine for example ), in millimetres/minute."
- Line 50: `beta_step_pin` - "Pin for beta stepper step signal"
- Line 51: `beta_dir_pin` - "Pin for beta stepper direction"
- Line 52: `beta_en_pin` - "Pin for beta enable"
- Line 53: `beta_current` - "M2 stepper motor driver current, in Amperes."
- Line 54: `beta_max_rate` - "Maximum allowable speed for this actuator, in millimetres/minute."
- Line 55: `gamma_step_pin` - "Pin for gamma stepper step signal"
- Line 56: `gamma_dir_pin` - "Pin for gamma stepper direction"
- Line 57: `gamma_en_pin` - "Pin for gamma enable"
- Line 58: `gamma_current` - "M3 stepper motor driver current, in Amperes."
- Line 59: `gamma_max_rate` - "Maximum allowable speed for this actuator , in millimetres/minute."
- Line 62: `uart0.baud_rate` - "Baud rate for the default hardware serial port ( UART0, labelled 'Serial' on the board, close to the USB connector ). Defaults to 9600 if undefined, or if the configuration file can not be read."
- Line 63: `second_usb_serial_enable` - "This enables a second serial port over the USB connection ( for example to have both [Pronterface](http://smoothieware.org/pronterface) and a terminal connected)"
- Line 66: `leds_disable` - "Disable the 4 flashing LEDs on the board"
- Line 67: `play_led_disable` - "Disable the 'play' status LED"
- Line 68: `kill_button_enable` - "Enable the 'kill' button"
- Line 69: `kill_button_pin` - "Pin for the 'kill' button"
- Line 70: `msd_disable` - "Disable the MSD ( SD Card access over USB ) when set to true ( requires a special binary, which you can find [here](https://github.com/Smoothieware/Smoothieware/blob/edge/FirmwareBin/firmware-disablemsd.bin), will be ignored without the special binary)"
- Line 71: `dfu_enable` - "For Linux developers, set to true to enable DFU, which allows you to flash new firmwares over USB"
- Line 74: `currentcontrol_module_enable` - "If set to true, enable digital control of the current settings of the stepper motor drivers. **Note** : this is dependent on the physical board type, and unless you are designing a new board you shouldn't have to modify these settings"
- Line 75: `digipotchip` - "Select the digipot chip with which to control the current for the stepper motor drivers. Supported chips are `mcp4451` and `ad5206`"
- Line 76: `digipot_max_current` - "Maximum current that can be set"
- Line 77: `digipot_factor` - "Factor for converting the current into digipot values"
- Line 78: `zeta_current` - "Current setting for the 6th stepper motor driver current control"
- Line 79: `eta_current` - "Current setting for the 7th stepper motor driver current control"
- Line 80: `theta_current` - "Current setting for the 8th stepper motor driver current control"


## docs/configuring-smoothie.md
- Line 50: `default_feed_rate` - "default_feed_rate                 4000                 # Default rate ( mm/minute ) for G1/G2/G3 moves"
- Line 180: `acceleration` - "config-get sd acceleration"
- Line 186: `acceleration` - "config-set sd acceleration 1000"
- Line 226: `M92` - "M92 X80.00000 Y80.00000 Z1259.84253" (steps per unit - relates to steps_per_mm config)
- Line 228: `M204` - "M204 S2000.00000" (acceleration)
- Line 230: `M205` - "M205 X0.05000 S0.00000" (Junction Deviation - relates to junction_deviation config)
- Line 232: `M203` - "M203 X333.00000 Y333.00000 Z3.33330 A333.00000 B333.00000 C3.33330" (max feedrates - relates to max_rate config)
- Line 234: `M92` - "M92 E367.0000" (E steps per mm - extruder steps_per_mm)
- Line 236: `M907` - "M907 E1.50000" (Extruder current - relates to current config options)
- Line 238: `M301` - "M301 S1 P35.5000 I2.5830 D122.0000" (PID settings - relates to temperature_control PID)
- Line 240: `M206` - "M206 X-15.00 Y15.00 Z5.90" (Home offset)
- Line 354: `alpha_steps_per_mm` - "config-get sd alpha_steps_per_mm"

## docs/connecting-smoothie.md
## docs/console-commands.md
- Line 354: `alpha_steps_per_mm` - "config-get sd alpha_steps_per_mm"
- Line 386: `acceleration` - "config-set sd acceleration 1000"
- Line 298: `leave_heaters_on_suspend` - "Turn off heaters (unless the config has `leave_heaters_on_suspend true`)"
- Line 298: `after_suspend` - "Optionally run after_suspend gcode (set in config defines gcode to run eg. `after_suspend G91G0E20G90`)"

## docs/contact.md
## docs/contributing.md
## docs/contribution-guidlines.md
## docs/coronavirus.md
## docs/currentcontrol.md
- Line 28: `alpha_current` - "Current setting configuration option | alpha_current"
- Line 28: `beta_current` - "Current setting configuration option | beta_current"
- Line 28: `gamma_current` - "Current setting configuration option | gamma_current"
- Line 28: `delta_current` - "Current setting configuration option | delta_current"
- Line 28: `epsilon_current` - "Current setting configuration option | epsilon_current"
- Line 41: `beta_step_pin` - "beta_step_pin                                2.1              # Pin for beta stepper step signal"
- Line 42: `beta_dir_pin` - "beta_dir_pin                                 0.11             # Pin for beta stepper direction"
- Line 43: `beta_en_pin` - "beta_en_pin                                  0.10             # Pin for beta enable"
- Line 44: `beta_current` - "beta_current                                 1.5              # Y stepper motor current"
- Line 45: `beta_max_rate` - "beta_max_rate                                30000.0          # mm/min"
- Line 48: `M907` - "The current can also be set using `M907` where XYZ set the current for alpha, beta, gamma, and ABC set the current for delta, epsilon, and zeta respectively."

## docs/delta-calibration-strategy-options.md
- Line 28: `leveling-strategy.delta-calibration.enable` - "Set to `true` to enable the delta calibration leveling strategy."
- Line 29: `leveling-strategy.delta-calibration.radius` - "Radius at which to probe the three points."
- Line 30: `leveling-strategy.delta-calibration.initial_height` - "The initial height above the bed where we stop the initial move down after home to find the bed."

## docs/delta-grid-calibration-options.md
- Line 22: `leveling-strategy.delta-grid.enable` - "The strategy must be enabled in the config, as well as the zprobe module."
- Line 23: `leveling-strategy.delta-grid.size` - "The size of the grid, for example, 7 causes a 7x7 grid with 49 points. Must be an odd number."
- Line 24: `leveling-strategy.delta-grid.probe_offsets` - "Optional probe offsets from the nozzle or tool head. **NOTE: Z must be 0**"
- Line 25: `leveling-strategy.delta-grid.save` - "If the saved grid is to be loaded on boot then this must be set to true."
- Line 26: `leveling-strategy.delta-grid.initial_height` - "Optionally, an initial_height can be set that tells the initial probe where to stop the fast descent before it probes."

## docs/delta.md
- Line 50: `arm_solution` - "arm_solution                                 linear_delta"
- Line 51: `arm_length` - "arm_length                                   250.0            # this is the length of an arm from hinge to hinge"
- Line 52: `arm_radius` - "arm_radius                                   124.0            # this is the horizontal distance from hinge to hinge when the effector is centered"
- Line 122: `endstops_enable` - "endstops_enable                              true             # The endstop module is enabled by default and can be disabled here"
- Line 123: `delta_homing` - "delta_homing                                 true             # Forces all three axis to home at the same time regardless of what is specified in G28"
- Line 124: `alpha_min_endstop` - "alpha_min_endstop                            nc               # Pin to read min endstop, add a ! to invert if endstop is NO connected to ground"
- Line 125: `alpha_max_endstop` - "alpha_max_endstop                            1.25^            # Pin to read max endstop, uncomment this and comment the above if using max endstops"
- Line 126: `alpha_homing_direction` - "alpha_homing_direction                       home_to_max      # Or set to home_to_max and set alpha_max and uncomment the alpha_max_endstop"
- Line 127: `alpha_max` - "alpha_max                                    0                # This gets loaded as the current position after homing when home_to_max is set"
- Line 128: `beta_min_endstop` - "beta_min_endstop                             nc               # Pin to read min endstop, add a ! to invert if endstop is NO connected to ground"
- Line 129: `beta_max_endstop` - "beta_max_endstop                             1.27^            # Pin to read max endstop, uncomment this and comment the above if using max endstops"
- Line 130: `beta_homing_direction` - "beta_homing_direction                        home_to_max      # Or set to home_to_max and set alpha_max and uncomment the alpha_max_endstop"
- Line 131: `beta_max` - "beta_max                                     0                # This gets loaded as the current position after homing when home_to_max is set"
- Line 132: `gamma_min_endstop` - "gamma_min_endstop                            nc               # Pin to read min endstop, add a ! to invert if endstop is NO connected to ground"
- Line 133: `gamma_max_endstop` - "gamma_max_endstop                            1.29^            # Pin to read max endstop, uncomment this and comment the above if using max endstops"
- Line 134: `gamma_homing_direction` - "gamma_homing_direction                       home_to_max      # Or set to home_to_max and set alpha_max and uncomment the alpha_max_endstop"
- Line 135: `gamma_max` - "gamma_max                                    300              # This gets loaded as the current position after homing when home_to_max is set"
- Line 137: `alpha_max_travel` - "alpha_max_travel                             1000             # Max travel in mm for alpha/X axis when homing"
- Line 138: `beta_max_travel` - "beta_max_travel                              1000             # Max travel in mm for beta/Y axis when homing"
- Line 139: `gamma_max_travel` - "gamma_max_travel                             1000             # Max travel in mm for gamma/Z axis when homing"
- Line 142: `alpha_fast_homing_rate_mm_s` - "alpha_fast_homing_rate_mm_s                  200              # Alpha tower fast homing feedrate in mm/second"
- Line 143: `alpha_slow_homing_rate_mm_s` - "alpha_slow_homing_rate_mm_s                  20               # Alpha tower slow homing feedrate in mm/second"
- Line 144: `beta_fast_homing_rate_mm_s` - "beta_fast_homing_rate_mm_s                   200              # Beta  tower fast homing feedrate in mm/second"
- Line 145: `beta_slow_homing_rate_mm_s` - "beta_slow_homing_rate_mm_s                   20               # Beta  tower slow homing feedrate in mm/second"
- Line 146: `gamma_fast_homing_rate_mm_s` - "gamma_fast_homing_rate_mm_s                  200              # Gamma tower fast homing feedrate in mm/second"
- Line 147: `gamma_slow_homing_rate_mm_s` - "gamma_slow_homing_rate_mm_s                  20               # Gamma tower slow homing feedrate in mm/second"
- Line 149: `alpha_homing_retract_mm` - "alpha_homing_retract_mm                      5                # Distance to retract from the endstop after it is hit for alpha/X"
- Line 150: `beta_homing_retract_mm` - "beta_homing_retract_mm                       5                # Distance to retract from the endstop after it is hit for beta/Y"
- Line 151: `gamma_homing_retract_mm` - "gamma_homing_retract_mm                      5                # Distance to retract from the endstop after it is hit for gamma/Z"
- Line 170: `alpha_trim_mm` - "The `alpha_trim_mm`, `beta_trim_mm` and `gamma_trim_mm` settings are a way to tweak endstop positions"
- Line 170: `beta_trim_mm` - "The `alpha_trim_mm`, `beta_trim_mm` and `gamma_trim_mm` settings are a way to tweak endstop positions"
- Line 170: `gamma_trim_mm` - "The `alpha_trim_mm`, `beta_trim_mm` and `gamma_trim_mm` settings are a way to tweak endstop positions"
- Line 197: `move_to_origin_after_home` - "If you want X0 Y0 after homing you can set `move_to_origin_after_home  true` in the config"
- Line 403: `delta_tower1_offset` - "delta_tower1_offset"
- Line 404: `delta_tower2_offset` - "delta_tower2_offset"
- Line 405: `delta_tower3_offset` - "delta_tower3_offset"
- Line 406: `delta_tower1_angle` - "delta_tower1_angle"
- Line 407: `delta_tower2_angle` - "delta_tower2_angle"
- Line 408: `delta_tower3_angle` - "delta_tower3_angle"

## docs/developers-guide.md
- Line 39: `maximum_death_star_hourly_power_consumption` - "maximum_death_star_hourly_power_consumption    100000000000" (example config option in documentation)
- Line 153: `acceleration` - "this->acceleration = this->kernel->config->value(acceleration_checksum)->by_default(1)->as_number();"
- Line 154: `extruder_step_pin` - "this->step_pin = this->kernel->config->value(extruder_step_pin_checksum)->by_default(\"1.22\")->as_pin()->as_output();"
- Line 127: `laser_module_enable` - "if( !this->kernel->config->value( laser_module_enable_checksum )->by_default(false)->as_bool() ){ return; }"


## docs/drillingcycles-options.md
- Line 9: `drillingcycles.enable` - "Enable drillingcycles module."
- Line 10: `drillingcycles.dwell_units` - "Dwell units `S` = seconds, `P` = millis."

## docs/endstops.md
- Line 36: `beta_min_endstop` - "beta_min_endstop   1.26^"
- Line 42: `beta_min_endstop` - "beta_min_endstop   1.26^!"
- Line 89: `move_to_origin_after_home` - "If you want X0 Y0 after homing you can set `move_to_origin_after_home  true` in the config"
- Line 100: `alpha_limit_enable` - "alpha_limit_enable                          true            # set to true to enable X min and max limit switches"
- Line 101: `beta_limit_enable` - "beta_limit_enable                           true            # set to true to enable Y min and max limit switches"
- Line 102: `gamma_limit_enable` - "gamma_limit_enable                          true            # set to true to enable Z min and max limit switches"
- Line 134: `soft_endstop.enable` - "soft_endstop.enable         true         # Enable soft endstops"
- Line 135: `soft_endstop.x_min` - "soft_endstop.x_min          1            # Minimum X position"
- Line 136: `soft_endstop.x_max` - "soft_endstop.x_max          999          # Maximum X position"
- Line 137: `soft_endstop.y_min` - "soft_endstop.y_min          1            # Minimum Y position"
- Line 138: `soft_endstop.y_max` - "soft_endstop.y_max          499          # Maximum Y position"
- Line 139: `soft_endstop.z_min` - "soft_endstop.z_min          1            # Minimum Z position"
- Line 140: `soft_endstop.z_max` - "soft_endstop.z_max          199          # Maximum Z position"
- Line 141: `soft_endstop.halt` - "soft_endstop.halt           true         # Whether to issue a HALT state when hitting a soft endstop (if false, will just ignore commands that would exceed the limit)"
- Line 182: `alpha_max` - "alpha_max   200"
- Line 188: `alpha_min` - "alpha_min   -100"

## docs/endstops-options.md
- Line 13: `endstops_enable` - "The endstop module is enabled if this is set to true. All of its parameters are ignored otherwise."
- Line 14: `corexy_homing` - "Set to true if this machine uses a `corexy` or a `h-bot` arm solution"
- Line 15: `delta_homing` - "Set to true if this machine uses a `linear_delta` arm solution"
- Line 16: `rdelta_homing` - "Set to true if this machine uses a `rotary_delta` arm solution"
- Line 17: `scara_homing` - "Set to true if this machine uses a `scara` arm solution"
- Line 18: `alpha_min_endstop` - "Alpha (X axis or alpha tower) minimum limit endstop. Set to `nc` if not installed on your machine."
- Line 19: `alpha_max_endstop` - "Alpha (X axis or alpha tower) maximum limit endstop. Set to `nc` if not installed on your machine."
- Line 20: `alpha_homing_direction` - "In which direction to home. If set to `home_to_min`, homing (using the `G28` G-code) will move until it hits the minimum endstop and then set the current position to `alpha_min`. If set to `home_to_max`, homing will move until it hits the maximum endstop, and then set the current position to `alpha_max`"
- Line 21: `alpha_min` - "This gets loaded after homing when `alpha_homing_direction` is set to `home_to_min` and the minimum endstop is hit. **NOTE** the homing offset is added to this set with `M206 Xnnn`"
- Line 22: `alpha_max` - "This gets loaded after homing when `alpha_homing_direction` is set to `home_to_max` and the maximum endstop is hit."
- Line 23: `alpha_max_travel` - "This determines how far the X axis can travel looking for the endstop before it gives up"
- Line 24: `beta_min_endstop` - "Beta (Y axis or beta tower) minimum limit endstop. Set to `nc` if not installed on your machine."
- Line 25: `beta_max_endstop` - "Beta (Y axis or beta tower) maximum limit endstop. Set to `nc` if not installed on your machine."
- Line 26: `beta_homing_direction` - "In which direction to home. If set to `home_to_min`, homing (using the `G28` G-code) will move until it hits the minimum endstop and then set the current position to `beta_min`. If set to `home_to_max`, homing will move until it hits the maximum endstop, and then set the current position to `beta_max`"
- Line 27: `beta_min` - "This gets loaded after homing when `beta_homing_direction` is set to `home_to_min` and the minimum endstop is hit."
- Line 28: `beta_max` - "This gets loaded after homing when `beta_homing_direction` is set to `home_to_max` and the maximum endstop is hit."
- Line 29: `beta_max_travel` - "This determines how far the Y axis can travel looking for the endstop before it gives up"
- Line 30: `gamma_min_endstop` - "Gamma (Z axis or gamma tower) minimum limit endstop. Set to `nc` if not installed on your machine."
- Line 31: `gamma_max_endstop` - "Gamma (Z axis or gamma tower) maximum limit endstop. Set to `nc` if not installed on your machine."
- Line 32: `gamma_homing_direction` - "In which direction to home. If set to `home_to_min`, homing (using the `G28` G-code) will move until it hits the minimum endstop and then set the current position to `gamma_min`. If set to `home_to_max`, homing will move until it hits the maximum endstop, and then set the current position to `gamma_max`"
- Line 33: `gamma_min` - "This gets loaded after homing when `gamma_homing_direction` is set to `home_to_min` and the minimum endstop is hit."
- Line 34: `gamma_max` - "This gets loaded after homing when `gamma_homing_direction` is set to `home_to_max` and the maximum endstop is hit."
- Line 35: `gamma_max_travel` - "This determines how far the Z axis can travel looking for the endstop before it gives up"
- Line 36: `homing_order` - "Optional order in which axis will home, default is XY home at the same time then Z, then A,B,C. If this is set it will force each axis to home one at a time in the specified order. For example `XZY` means: `X` axis followed by `Z`, then `Y` last. **NOTE** If an axis is not specified here then it will not be homed at all. If ABC are set they must also be specified if they need to be homed."
- Line 37: `alpha_limit_enable` - "If set to true, the machine will stop if one of the alpha (X axis or alpha tower) endstops are hit"
- Line 38: `beta_limit_enable` - "If set to true, the machine will stop if one of the beta (Y axis or beta tower) endstops are hit"
- Line 39: `gamma_limit_enable` - "If set to true, the machine will stop if one of the gamma (Z axis or gamma tower) endstops are hit"
- Line 40: `alpha_fast_homing_rate_mm_s` - "Speed, in millimetres/second, at which to home for the alpha actuator (X axis or alpha tower)"
- Line 41: `beta_fast_homing_rate_mm_s` - "Speed, in millimetres/second, at which to home for the beta actuator (Y axis or beta tower)"
- Line 42: `gamma_fast_homing_rate_mm_s` - "Speed, in millimetres/second, at which to home for the gamma actuator (Z axis or gamma tower)"
- Line 43: `alpha_homing_retract_mm` - "Distance to retract the alpha actuator (X axis or alpha tower) once the endstop is first hit, before re-homing at a slower speed."
- Line 44: `beta_homing_retract_mm` - "Distance to retract the beta actuator (Y axis or beta tower) once the endstop is first hit, before re-homing at a slower speed."
- Line 45: `gamma_homing_retract_mm` - "Distance to retract the alpha actuator (Z axis or gamma tower) once the endstop is first hit, before re-homing at a slower speed."
- Line 46: `alpha_slow_homing_rate_mm_s` - "Speed, in millimetres/second, at which to re-home for the alpha actuator (X axis or alpha tower) once the endstop is hit once."
- Line 47: `beta_slow_homing_rate_mm_s` - "Speed, in millimetres/second, at which to re-home for the beta actuator (Y axis or beta tower) once the endstop is hit once."
- Line 48: `gamma_slow_homing_rate_mm_s` - "Speed, in millimetres/second, at which to re-home for the gamma actuator (Z axis or gamma tower) once the endstop is hit once."
- Line 49: `endstop_debounce_count` - "Debounce each limit switch (not homing endstops) over this number of values. Set to `100` if your endstops are too noisy and give false readings. Used for limit switches only"
- Line 50: `endstop_debounce_ms` - "Debounce each homing endstop for this number of milliseconds. Set to 1 if your endstops are too noisy and give false readings. Used for homing only"
- Line 51: `alpha_trim` - "DELTA ONLY Software trim for alpha (X axis or alpha tower) stepper endstop (in millimetres). When the endstop is hit, the axis will move this distance towards the endstop (negative values move endstop away from the endstop)"
- Line 52: `beta_trim` - "DELTA ONLY Software trim for beta (Y axis or beta tower) stepper endstop (in millimetres). When the endstop is hit, the axis will move this distance towards the endstop (negative values move endstop away from the endstop)"
- Line 53: `gamma_trim` - "DELTA ONLY Software trim for gamma (Z axis or gamma tower) stepper endstop (in millimetres). When the endstop is hit, the axis will move this distance towards the endstop (negative values move endstop away from the endstop)"
- Line 54: `move_to_origin_after_home` - "If set to true, once homing is complete, the machine will move to its origin point"
- Line 55: `home_z_first` - "Set to true to home the Z first, otherwise Z homes after XY"

## docs/extruder-guide.md
- Line 34: `extruder.hotend.steps_per_mm` - "extruder.hotend.steps_per_mm 140"
- Line 55: `extruder.hotend.filament_diameter` - "extruder.hotend.filament_diameter 3.0"
- Line 78: `extruder.hotend.retract_length` - "extruder.hotend.retract_length 3 # retract length in mm"
- Line 79: `extruder.hotend.retract_feedrate` - "extruder.hotend.retract_feedrate 45 # retract feedrate in mm/sec"
- Line 80: `extruder.hotend.retract_recover_length` - "extruder.hotend.retract_recover_length 0 # additional length for recover"
- Line 81: `extruder.hotend.retract_recover_feedrate` - "extruder.hotend.retract_recover_feedrate 8 # recover feedrate in mm/sec (should be less than retract feedrate)"
- Line 82: `extruder.hotend.retract_zlift_length` - "extruder.hotend.retract_zlift_length 0 # zlift on retract in mm, 0 disables"
- Line 83: `extruder.hotend.retract_zlift_feedrate` - "extruder.hotend.retract_zlift_feedrate 6000 # zlift feedrate in mm/min (Note mm/min NOT mm/sec)"
- Line 100: `extruder.hotend.step_pin` - "extruder.hotend.step_pin 2.3"
- Line 101: `extruder.hotend.dir_pin` - "extruder.hotend.dir_pin 0.22"
- Line 102: `extruder.hotend.en_pin` - "extruder.hotend.en_pin 0.21"
- Line 113: `extruder.hotend2.step_pin` - "extruder.hotend2.step_pin 2.8"
- Line 114: `extruder.hotend2.dir_pin` - "extruder.hotend2.dir_pin 2.13"
- Line 115: `extruder.hotend2.en_pin` - "extruder.hotend2.en_pin 4.29"
- Line 137: `delta_current` - "delta_current 1.5"
- Line 161: `extruder.hotend.enable` - "extruder.hotend.enable true # Whether to activate the extruder module at all. All configuration is ignored if false"
- Line 162: `extruder.hotend.steps_per_mm` - "extruder.hotend.steps_per_mm 140 # Steps per mm for extruder stepper"
- Line 163: `extruder.hotend.default_feed_rate` - "extruder.hotend.default_feed_rate 600 # Default rate (mm/minute) for moves where only the extruder moves"
- Line 164: `extruder.hotend.acceleration` - "extruder.hotend.acceleration 500 # Acceleration for the stepper motor mm/sec²"
- Line 165: `extruder.hotend.max_speed` - "extruder.hotend.max_speed 50 # Maximum speed in mm/s"
- Line 167: `extruder.hotend.step_pin` - "extruder.hotend.step_pin 2.3 # Pin for extruder step signal"
- Line 168: `extruder.hotend.dir_pin` - "extruder.hotend.dir_pin 0.22 # Pin for extruder dir signal (add '!' to reverse direction)"
- Line 169: `extruder.hotend.en_pin` - "extruder.hotend.en_pin 0.21 # Pin for extruder enable signal"
- Line 171: `delta_current` - "delta_current 1.5 # Current setting in Amperes for this motor driver"


## docs/extruder-options.md
- Line 12: `extruder.module_name.enable` - "Whether to activate the extruder module at all. All configuration is ignored if false. Each time an `extruder.module_name.enable` line is encountered, an extruder module with the name «module_name» will be created."
- Line 13: `extruder.module_name.steps_per_mm` - "Steps/millimetre for the extruder stepper motor. This is the number of steps to move one millimetre of filament."
- Line 14: `extruder.module_name.filament_diameter` - "Filament diameter, in millimetres, used for volumetric extrusion control."
- Line 15: `extruder.module_name.default_feed_rate` - "Default rate in millimetres/minute for moves where only the extruder moves."
- Line 16: `extruder.module_name.acceleration` - "Acceleration for the extruder stepper motor, in millimetres/second/second"
- Line 17: `extruder.module_name.max_speed` - "Maximum allowable speed for the extruder stepper motor, in millimetres/second"
- Line 18: `extruder.module_name.step_pin` - "Pin for extruder stepper motor driver's step signal"
- Line 19: `extruder.module_name.dir_pin` - "Pin for extruder stepper motor driver's direction signal"
- Line 20: `extruder.module_name.en_pin` - "Pin for extruder stepper motor driver's enable signal"
- Line 21: `extruder.module_name.x_offset` - "Extruder offset from origin in millimetres for the X axis. ONLY used when you have multiple extruders"
- Line 22: `extruder.module_name.y_offset` - "Extruder offset from origin in millimetres for the Y axis. ONLY used for multiple extruders"
- Line 23: `extruder.module_name.z_offset` - "Extruder offset from origin in millimetres for the Z axis. ONLY used for multiple extruders"
- Line 24: `extruder.module_name.retract_length` - "Retract length in millimetres. Retract is a retractation of the filament called using the `G10` G-code."
- Line 25: `extruder.module_name.retract_feedrate` - "Retract feed-rate (filament speed) in millimetres/second"
- Line 26: `extruder.module_name.retract_recover_length` - "Additional length when recovering (if you retract by 1mm, you will be recovering by 1mm plus this value)"
- Line 27: `extruder.module_name.retract_recover_feedrate` - "Recovery feed-rate in millimetres/second (should be less than retract feedrate)"
- Line 28: `extruder.module_name.retract_zlift_length` - "Z-lift on retract in millimeters, set to `0` if you want to disable retraction Z-lift."
- Line 29: `extruder.module_name.retract_zlift_feedrate` - "Z-lift feed-rate in millimetres/minute (Note: mm/min NOT mm/sec)"
- Line 30: `delta_current` - "First extruder stepper motor driver (M4) current in Amperes"
- Line 31: `epsilon_current` - "Second extruder stepper motor driver (M5) current in Amperes"

## docs/filament-detector.md
- Line 30: `filament_detector.enable` - "This module is activated only if this is set to `true`"
- Line 31: `filament_detector.encoder_pin` - "This is the pin the encoder is connected to. Must be an interrupt pin"
- Line 32: `filament_detector.bulge_pin` - "OPTIONAL This is the pin the bulge switch is connected to. If this switch is triggered (by a bulge in the filament) and the filament is moving, this will trigger an alarm"
- Line 33: `filament_detector.seconds_per_check` - "How many seconds between filament position checks, must be long enough for several pulses to be detected, but not too long"
- Line 34: `filament_detector.pulses_per_mm` - "The number of pulses the encoder produces for every millimeter of filament movement"

## docs/flashing-smoothie-firmware.md
## docs/flashing-smoothie.md
## docs/flashing-the-bootloader.md
## docs/forum-guidelines.md
## docs/forum-welcome-mat.md
## docs/from-grbl.md
- Line 37: `beta_step_pin` - "Pin for beta stepper step signal"
- Line 43: `beta_step_pin` - "Pin for beta stepper step signal (example with inverted pin using !)"
- Line 51: `beta_dir_pin` - "Pin for beta stepper dir signal"
- Line 57: `beta_dir_pin` - "Pin for beta stepper dir signal (example with inverted pin using !)"
- Line 65: `beta_en_pin` - "Pin for beta stepper en signal"
- Line 71: `beta_en_pin` - "Pin for beta stepper en signal (example with inverted pin using !)"
- Line 79: `alpha_min_endstop` - "Pin to read min endstop, add a ! to invert if endstop is NO connected to ground"
- Line 85: `alpha_min_endstop` - "Pin to read min endstop (example with inverted pin using !)"
- Line 93: `zprobe.probe_pin` - "Pin probe is attached to"
- Line 99: `zprobe.probe_pin` - "Pin probe is attached to (example with inverted pin using !)"
- Line 107: `junction_deviation` - "See http://smoothieware.org/motion-control#junction-deviation"
- Line 115: `mm_max_arc_error` - "The maximum error for line segments that divide arcs 0 to disable"
- Line 126: `alpha_limit_enable` - "Set to true to enable X min and max limit switches"
- Line 127: `beta_limit_enable` - "Set to true to enable Y min and max limit switches"
- Line 128: `gamma_limit_enable` - "Set to true to enable Z min and max limit switches"
- Line 136: `endstops_enable` - "The endstop module is enabled by default and can be disabled here"
- Line 144: `alpha_homing_direction` - "Or set to home_to_max and set alpha_max and uncomment the alpha_max_endstop"
- Line 150: `alpha_homing_direction` - "Or set to home_to_max and set alpha_max and uncomment the alpha_max_endstop"
- Line 158: `alpha_slow_homing_rate_mm_s` - "Alpha/X slow homing feedrate in mm/second"
- Line 166: `alpha_fast_homing_rate_mm_s` - "Alpha/X fast homing feedrate in mm/second"
- Line 174: `endstop_debounce_ms` - "Uncomment if you get noise on your endstops, default is 1 millisecond debounce"
- Line 182: `alpha_homing_retract_mm` - "Distance to retract from the endstop after it is hit for alpha/X"
- Line 183: `beta_homing_retract_mm` - "Distance to retract from the endstop after it is hit for beta/Y"
- Line 184: `gamma_homing_retract_mm` - "Distance to retract from the endstop after it is hit for gamma/Z"
- Line 194: `alpha_steps_per_mm` - "Steps per mm for alpha (X) stepper"
- Line 195: `beta_steps_per_mm` - "Steps per mm for beta (Y) stepper"
- Line 196: `gamma_steps_per_mm` - "Steps per mm for gamma (Z) stepper"
- Line 211: `x_axis_max_speed` - "Maximum speed in mm/min"
- Line 212: `y_axis_max_speed` - "Maximum speed in mm/min"
- Line 213: `z_axis_max_speed` - "Maximum speed in mm/min"
- Line 221: `alpha_max_rate` - "Maximum rate in mm/min"
- Line 222: `beta_max_rate` - "Maximum rate in mm/min"
- Line 223: `gamma_max_rate` - "Maximum rate in mm/min"
- Line 231: `extruder.hotend.max_speed` - "Maximum speed in mm/s"
- Line 243: `acceleration` - "Acceleration value for all axes"
- Line 257: `alpha_max` - "This gets loaded as the current position after homing when home_to_max is set"
- Line 258: `beta_max` - "This gets loaded as the current position after homing when home_to_max is set"
- Line 259: `gamma_max` - "This gets loaded as the current position after homing when home_to_max is set"
- Line 265: `alpha_max_travel` - "Max travel in mm for alpha/X axis when homing"
- Line 266: `beta_max_travel` - "Max travel in mm for beta/Y axis when homing"
- Line 267: `gamma_max_travel` - "Max travel in mm for gamma/Z axis when homing"

## docs/from-marlin.md
- Line 40: `uart0.baud_rate` - "Baud rate for the default hardware (UART) serial port"
- Line 82: `extruder.hotend.x_offset` - "X offset from origin in mm"
- Line 83: `extruder.hotend.y_offset` - "Y offset from origin in mm"
- Line 84: `extruder.hotend.z_offset` - "Z offset from origin in mm"
- Line 91: `extruder.hotend2.x_offset` - "x offset from origin in mm"
- Line 92: `extruder.hotend2.y_offset` - "y offset from origin in mm"
- Line 93: `extruder.hotend2.z_offset` - "z offset from origin in mm"
- Line 109: `switch.psu.enable` - "turn atx on/off"
- Line 110: `switch.psu.input_on_command` - "Command to turn on (M80)"
- Line 111: `switch.psu.input_off_command` - "Command to turn off (M81)"
- Line 112: `switch.psu.output_pin` - "open drain, inverted"
- Line 113: `switch.psu.output_type` - "on/off only (digital)"
- Line 114: `switch.psu.failsafe_set_to` - "so the ATX turns off on a system crash"
- Line 137: `temperature_control.hotend.thermistor` - "Thermistor type (EPCOS100K)"
- Line 159: `temperature_control.hotend.p_factor` - "P (proportional) factor"
- Line 160: `temperature_control.hotend.i_factor` - "I (integral) factor"
- Line 161: `temperature_control.hotend.d_factor` - "D (derivative) factor"
- Line 184: `arm_solution` - "Selects the linear delta arm solution"
- Line 190: `arm_length` - "This is the length of an arm from hinge to hinge"
- Line 191: `arm_radius` - "This is the horizontal distance from hinge to hinge when the effector is centered"
- Line 212: `alpha_min_endstop` - "Pin to read min endstop, add a ! to invert if endstop is NO connected to ground"
- Line 213: `alpha_max_endstop` - "Pin to read max endstop, uncomment this and comment the above if using max endstops"
- Line 280: `alpha_fast_homing_rate_mm_s` - "Alpha/X fast homing feedrate in mm/second"
- Line 281: `alpha_slow_homing_rate_mm_s` - "Alpha/X slow homing feedrate in mm/second"
- Line 282: `beta_fast_homing_rate_mm_s` - "Beta/Y fast homing feedrate in mm/second"
- Line 283: `beta_slow_homing_rate_mm_s` - "Beta/Y slow homing feedrate in mm/second"
- Line 284: `gamma_fast_homing_rate_mm_s` - "Gamma/Z fast homing feedrate in mm/second"
- Line 285: `gamma_slow_homing_rate_mm_s` - "Gamma/Z slow homing feedrate in mm/second"
- Line 308: `alpha_steps_per_mm` - "Steps per mm for alpha (X) stepper"
- Line 309: `beta_steps_per_mm` - "Steps per mm for beta (Y) stepper"
- Line 310: `gamma_steps_per_mm` - "Steps per mm for gamma (Z) stepper"
- Line 318: `extruder.hotend.steps_per_mm` - "Steps per mm for extruder stepper"
- Line 342: `x_axis_max_speed` - "Maximum speed in mm/min"
- Line 343: `y_axis_max_speed` - "Maximum speed in mm/min"
- Line 344: `z_axis_max_speed` - "Maximum speed in mm/min"
- Line 352: `alpha_max_rate` - "Maximum rate in mm/min"
- Line 353: `beta_max_rate` - "Maxmimum rate in mm/min"
- Line 354: `gamma_max_rate` - "Maximum rate in mm/min"
- Line 362: `extruder.hotend.max_speed` - "Maximum speed in mm/s"
- Line 378: `acceleration` - "Acceleration value"
- Line 407: `junction_deviation` - "See http://smoothieware.org/motion-control#junction-deviation"
- Line 440: `alpha_step_pin` - "Pin for alpha stepper step signal"
- Line 441: `alpha_dir_pin` - "Pin for alpha stepper direction, add '!' to reverse direction"
- Line 442: `alpha_en_pin` - "Pin for alpha enable pin"
- Line 443: `alpha_current` - "X stepper motor current"
- Line 444: `alpha_max_rate` - "Maximum rate in mm/min"
- Line 452: `alpha_step_pin` - "Pin for alpha stepper step signal"
- Line 453: `alpha_dir_pin` - "Pin for alpha stepper direction, add '!' to reverse direction (with ! example)"
- Line 454: `alpha_en_pin` - "Pin for alpha enable pin"
- Line 455: `alpha_current` - "X stepper motor current"
- Line 456: `alpha_max_rate` - "Maximum rate in mm/min"
- Line 472: `alpha_homing_direction` - "Or set to home_to_max and set alpha_max and uncomment the alpha_max_endstop"
- Line 478: `alpha_homing_direction` - "Or set to home_to_max and set alpha_max and uncomment the alpha_max_endstop (set to home_to_max)"

## docs/fuse-protection.md
## docs/fusion360.md
## docs/g0.md
- Line 73: `default_seek_rate` - "Default 'seek' feedrate for G0 moves when no F parameter has been set"

## docs/g10.md
- Line 13: `retract_length` - "Length to retract in extruder module configuration for G10 command"


## docs/g1.md
- Line 103: `default_feed_rate` - "This is set in the [configuration file](configuring-smoothie) by setting the `default_feed_rate` config option."

## docs/g28-cnc.md
- Line 45: `default_seek_rate` - "The speed at which the movement to the origin point will occur is the 'seek' speed, which is the speed of the last `G0` command issued, or if none was ever issued, the value of the `default_seek_rate` configuration [option](configuring-smoothie)."

## docs/g28.md
- Line 21: `grbl_mode` - "In the Smoothie firmware, if you set `grbl_mode` to `true` (and/or have the CNC build), it will have the 'CNC mill' meaning, and if you set it to `false` (or do not set it at all), it will have the Reprap meaning."

## docs/g30.md
- Line 68: `zprobe.slow_feedrate` - "It temporarily overrides the `zprobe.slow_feedrate` [configuration option](configuring-smoothie), see [zprobe](zprobe)."

## docs/g4.md
- Line 30: `grbl_mode` - "Note that if `grbl_mode` is set to `true` then the `P` parameter is the duration to wait in seconds, not milliseconds, as a float value. This is to conform to G-Code standards."

## docs/gamma-max.md
- Line 6: `gamma_max` - "Because of this, it will read the configuration option `gamma_max` or `gamma_min` depending and set the current Z position to that value."
- Line 6: `gamma_min` - "Because of this, it will read the configuration option `gamma_max` or `gamma_min` depending and set the current Z position to that value."
- Line 8: `gamma_max` - "So after homing, the Z position is set to `gamma_max` or `gamma_min`."
- Line 8: `gamma_min` - "So after homing, the Z position is set to `gamma_max` or `gamma_min`."
- Line 10: `gamma_max` - "This means for example if you home to max that if your hotend is 300mm above your bed after homing, and you set `gamma_max` to 300, after homing, you can just tell the machine to go to Z position 0, and it will go to the bed's height."
- Line 12: `gamma_max` - "To put it simply, setting `gamma_max` or `gamma_min` is your way of telling Smoothie what the distance is between your bed, and the hotend, when the machine has just homed."
- Line 12: `gamma_min` - "To put it simply, setting `gamma_max` or `gamma_min` is your way of telling Smoothie what the distance is between your bed, and the hotend, when the machine has just homed."
- Line 14: `gamma_max` - "To find the right value for `gamma_max` or `gamma_min` do one of the following:"
- Line 14: `gamma_min` - "To find the right value for `gamma_max` or `gamma_min` do one of the following:"
- Line 82: `gamma_max` - "The current position of the Z axis is the value you must use as your `gamma_max` value."
- Line 84: `gamma_max` - "Now simply edit the [configuration file](configuring-smoothie) to set this value, and reset the board."
- Line 88: `gamma_max` - "The `gamma_max` value in the configuration file is ignored if `M665` is set and saved."
- Line 121: `gamma_max` - "Your `gamma_max` value is that reported distance, plus the z probe offset ( distance between the probe triggering point, and the bed )."
- Line 123: `gamma_max` - "For example, if you home, then do `G30`, and it reports a height of 311mm, and your probe is 7mm below your hotend, then your `gamma_max` is 311 + 7 = 318mm."
- Line 129: `gamma_max` - "The `gamma_max` value in the configuration file is ignored if `M665` is set and saved."


## docs/general-appendixes.md
- Line 56: `gamma_current` - "your total is 1.6Amps and you need to set for that specific driver ( here gamma driver is shown ) : gamma_current 1.6"
- Line 89: `gamma_current` - "First, set the current value for **both** drivers. For example if you are using gamma and epsilon set: gamma_current 1.5"
- Line 90: `epsilon_current` - "epsilon_current 1.5"
- Line 98: `gamma_step_pin` - "Then, you need to make sure that none of the step, dir and enable configuration values for your slave stepper motor driver, are present in the configuration file. For example if you are using gamma as a slave, make sure that none of the following values are present in the configuration file: gamma_step_pin"
- Line 99: `gamma_dir_pin` - "gamma_dir_pin"
- Line 100: `gamma_en_pin` - "gamma_en_pin"
- Line 154: `alpha_step_pin` - "Pin for alpha stepper step signal - alpha_step_pin 2.0"
- Line 160: `alpha_step_pin` - "becomes alpha_step_pin 2.0o # Pin for alpha stepper step signal"
- Line 166: `alpha_step_pin` - "it's also possible to invert a pin: alpha_step_pin 2.0!o # Pin for alpha stepper step signal"
- Line 194: `alpha_step_pin` - "For example for your alpha driver, change: alpha_step_pin 2.0 # Pin for alpha stepper step signal"
- Line 195: `alpha_dir_pin` - "alpha_dir_pin 0.5 # Pin for alpha stepper direction"
- Line 196: `alpha_en_pin` - "alpha_en_pin 0.4 # Pin for alpha enable pin"
- Line 199: `alpha_step_pin` - "to alpha_step_pin 2.0 # Pin for alpha stepper step signal"
- Line 200: `alpha_dir_pin` - "alpha_dir_pin 0.5 # Pin for alpha stepper direction"
- Line 201: `alpha_en_pin` - "alpha_en_pin 0.4! # Pin for alpha enable pin"
- Line 211: `microseconds_per_step_pulse` - "There are more versions labeled TB6600 on the market, but they use different driver chips inside. First of all, you'll need to know if the driver is ok with higher step rates (200 kHz), or you'll have to tune microseconds_per_step_pulse and/or base_stepping_frequency."
- Line 211: `base_stepping_frequency` - "or you'll have to tune microseconds_per_step_pulse and/or base_stepping_frequency."
- Line 217: `alpha_step_pin` - "The config is the following for alpha, but it's the same for the rest: alpha_step_pin 2.0!o # Pin for alpha stepper step signal"
- Line 218: `alpha_dir_pin` - "alpha_dir_pin 0.5!o # Pin for alpha stepper direction"
- Line 219: `alpha_en_pin` - "alpha_en_pin 0.4!o # Pin for alpha enable pin"
- Line 222: `alpha_dir_pin` - "If you want to change the rotating direction, simply leave out the '!': alpha_dir_pin 0.5o # Pin for alpha stepper direction"
- Line 266: `switch.misc.enable` - "switch.misc.enable true #"
- Line 267: `switch.misc.input_on_command` - "switch.misc.input_on_command M42 #"
- Line 268: `switch.misc.input_off_command` - "switch.misc.input_off_command M43 #"
- Line 269: `switch.misc.output_pin` - "switch.misc.output_pin 2.4 # GPIO pin we connected to '+' on the SSR"
- Line 270: `switch.misc.output_type` - "switch.misc.output_type digital # just an on or off pin"
- Line 280: `temperature_control.swimming_pool_heating.heater_pin` - "So, you need to modify your module to both use the correct pin (the free GPIO you wired to the SSR), and to the correct frequency. Here are the two lines to change: temperature_control.swimming_pool_heating.heater_pin 2.4"
- Line 281: `temperature_control.swimming_pool_heating.pwm_frequency` - "temperature_control.swimming_pool_heating.pwm_frequency 20"
- Line 287: `temperature_control.bed.bang_bang` - "temperature_control.bed.bang_bang true # set to true to use bang bang control rather than PID"
- Line 288: `temperature_control.bed.hysteresis` - "temperature_control.bed.hysteresis 2.0 # set to the temperature in degrees C to use as hysteresis when using bang bang"
- Line 309: `beta_step_pin` - "beta_step_pin 2.1 # Pin for beta stepper step signal"
- Line 310: `beta_dir_pin` - "beta_dir_pin 0.11 # Pin for beta stepper direction"
- Line 311: `beta_en_pin` - "beta_en_pin 0.10 # Pin for beta enable"
- Line 313: `gamma_step_pin` - "gamma_step_pin 2.2 # Pin for gamma stepper step signal"
- Line 314: `gamma_dir_pin` - "gamma_dir_pin 0.20 # Pin for gamma stepper direction"
- Line 315: `gamma_en_pin` - "gamma_en_pin 0.19 # Pin for gamma enable"
- Line 321: `beta_step_pin` - "Becomes: beta_step_pin 2.2 # Pin for beta stepper step signal"
- Line 322: `beta_dir_pin` - "beta_dir_pin 0.20 # Pin for beta stepper direction"
- Line 323: `beta_en_pin` - "beta_en_pin 0.19 # Pin for beta enable"
- Line 325: `gamma_step_pin` - "gamma_step_pin 2.1 # Pin for gamma stepper step signal"
- Line 326: `gamma_dir_pin` - "gamma_dir_pin 0.11 # Pin for gamma stepper direction"
- Line 327: `gamma_en_pin` - "gamma_en_pin 0.10 # Pin for gamma enable"

## docs/getting-help-community.md
## docs/getting-smoothieboard.md
## docs/getting-smoothie.md
## docs/github.md
## docs/glossary.md
## docs/google-plus-welcome-mat.md
## docs/grbl-mode.md
- Line 30: `grbl_mode` - "If you set it to `true`: grbl_mode true"
- Line 38: `grbl_mode` - "If however you set it to `false`: grbl_mode false"

## docs/guide-endstops.md
- Line 129: `alpha_min_endstop` - "Some endstops might require removing their 'pull-up' configuration, in this case, change: alpha_min_endstop 1.28^"
- Line 135: `alpha_min_endstop` - "To: alpha_min_endstop 1.28"
- Line 141: `alpha_min_endstop` - "And if you need it to be a pull-down, change it to: alpha_min_endstop 1.28v"
- Line 185: `alpha_min_endstop` - "You can fix that situation by inverting the digital input pin in your configuration file. For example if your X min endstop pin is inverted, change: alpha_min_endstop 1.28^"
- Line 191: `alpha_min_endstop` - "To: alpha_min_endstop 1.28^!"

## docs/guides.md
## docs/hbot.md
- Line 15: `arm_solution` - "To configure your HBot or Corexy, set the `arm_solution` parameter in your configuration file to either `corexy` or `hbot`. For example: arm_solution corexy"
- Line 18: `corexy_homing` - "If you are using homing, also uncomment the `corexy_homing` line in the config."
- Line 22: `alpha_max_rate` - "It is recommended to set the `alpha_max_rate` and `beta_max_rate` to the highest speed your steppers can achieve."
- Line 22: `beta_max_rate` - "It is recommended to set the `alpha_max_rate` and `beta_max_rate` to the highest speed your steppers can achieve."

## docs/help-guidelines.md
## docs/homepage-draft.md

## docs/killbutton.md
- Line 29: `kill_button_enable` - "kill_button_enable                        true             # set to true to enable a kill button"
- Line 30: `kill_button_pin` - "kill_button_pin                           2.12             # kill button pin. default is same as pause button 2.12 (Add ^ for external buttons)"
- Line 38: `kill_button_toggle_enable` - "kill_button_toggle_enable        true                # allows for latching estop button"
- Line 46: `unkill_enable` - "unkill_enable     false                # do not unkill when button held or released"

## docs/kill-pause-button.md
- Line 37: `kill_button_enable` - "kill_button_enable                        true             # set to true to enable a kill button"
- Line 38: `kill_button_pin` - "kill_button_pin                           2.12             # kill button pin. default is same as pause button 2.12"

## docs/jogger-options.md
- Line 12: `jogger.enable` - "If true, enable the Jogger module"
- Line 13: `jogger.data_source_alpha` - "Specifies the [module name](module-name) of the Joystick module the alpha/first jog axis will read from"
- Line 14: `jogger.data_source_beta` - "Specifies the [module name](module-name) of the Joystick module the beta/second jog axis will read from"
- Line 15: `jogger.jog_axes` - "Sets a list of the machine axes which will be controlled by the jogger. Axis letters are given in order of jog axis alpha, beta, etc."
- Line 16: `jogger.m_code_set` - "Sets which M-code number the `set axes` command will use (`777` means use `M777` to set the jog axes)"
- Line 17: `jogger.m_code_toggle` - "Sets which M-code number the `toggle axes` command will use (`778` means use `M778` to toggle the jog axes)"
- Line 18: `jogger.max_speed` - "Sets the maximum speed the machine will jog. If not given, the Jogger uses the general configuration 'default_seek_rate' (`G0` speed)"
- Line 19: `jogger.dead_zone` - "Sets the threshold the joystick must cross before movement occurs (see description below)"
- Line 20: `jogger.nonlinearity` - "Sets the non-linearity of the joystick to speed conversion function (see description below)"
- Line 21: `jogger.refresh_rate` - "Specifies how many times per second to read the joysticks"
- Line 22: `jogger.segment_frequency` - "Sets the number of tiny movement segments per second while jogging"

## docs/joystick-options.md
- Line 10: `joystick.module-name.enable` - "If true, create and enable a new Joystick module with the name 'module_name'"
- Line 11: `joystick.module-name.pin` - "Which SmoothieBoard pin should be used to read the value. See table above for allowable pins."
- Line 12: `joystick.module-name.refresh_rate` - "Sets how many times per second to update the joystick reading"
- Line 13: `joystick.module-name.zero_offset` - "Sets what voltage will map to zero output"
- Line 14: `joystick.module-name.endpoint` - "Sets what voltage will map to +/- 1. If `endpoint` is greater than `zero_offset`, it specifies what voltage maps to 1."
- Line 22: `joystick.module-name.auto_zero` - "If true, enables the auto-zeroing feature, which automatically determines the `zero_offset`"
- Line 23: `joystick.module-name.startup_time` - "Sets how long (in milliseconds) after SmoothieBoard resets to obtain readings to average for `zero_offset`."
- Line 24: `joystick.module-name.start_value` - "Sets the default value of the joystick output during the startup time. Should be between -1 and 1"

## docs/joystick.md
- Line 149: `joystick.horizontal.enable` - "enable the horizontal axis joystick"
- Line 150: `joystick.horizontal.pin` - "use pin 1.30 connected to potentiometer wiper"
- Line 151: `joystick.horizontal.endpoint` - "3.2 V maps to +1 in joystick reading"
- Line 152: `joystick.horizontal.auto_zero` - "automatically determine the zero point"
- Line 153: `joystick.horizontal.startup_time` - "take readings for 1 second at startup to get auto-zero point"
- Line 154: `joystick.horizontal.refresh_rate` - "update the joystick position 100 times per second"
- Line 155: `joystick.horizontal.start_value` - "when auto-zeroing, force joystick output to be 0"

- Line 194: `joystick.fro.enable` - "enable the feed-rate override joystick"
- Line 195: `joystick.fro.pin` - "use pin 1.30 connected to potentiometer wiper"
- Line 196: `joystick.fro.endpoint` - "3.2 V maps to +1 in joystick reading"
- Line 197: `joystick.fro.zero_offset` - "0 V maps to 0 in joystick reading"
- Line 198: `joystick.fro.refresh_rate` - "update the joystick position 100 times per second"

## docs/landing-page-3d-printer.md
- Line 196: `extruder.hotend.enable` - Enable extruder
- Line 197: `extruder.hotend.steps_per_mm` - Steps per millimeter for extruder
- Line 198: `extruder.hotend.max_speed` - Maximum speed for extruder
- Line 201: `temperature_control.hotend.enable` - Enable temperature control for hotend
- Line 202: `temperature_control.hotend.thermistor_pin` - Pin for thermistor reading
- Line 203: `temperature_control.hotend.heater_pin` - Pin for heater control
- Line 204: `temperature_control.hotend.thermistor` - Thermistor type (EPCOS100K)
- Line 207: `temperature_control.bed.enable` - Enable heated bed
- Line 208: `temperature_control.bed.thermistor_pin` - Pin for bed thermistor
- Line 209: `temperature_control.bed.heater_pin` - Pin for bed heater
- Line 210: `temperature_control.bed.thermistor` - Thermistor type for bed


## docs/landing-page-3d-printing.md
- Line 46: `config.txt` - "Open `config.txt`, edit, save, reboot. Done."
- Line 235: `steps_per_mm` - "Change `steps_per_mm` values"
- Line 300: `extruder.hotend.enable` - "extruder.hotend.enable              true"
- Line 301: `extruder.hotend.steps_per_mm` - "extruder.hotend.steps_per_mm        140"
- Line 302: `extruder.hotend.max_speed` - "extruder.hotend.max_speed           50"
- Line 305: `temperature_control.hotend.enable` - "temperature_control.hotend.enable   true"
- Line 306: `temperature_control.hotend.thermistor_pin` - "temperature_control.hotend.thermistor_pin  0.23"
- Line 307: `temperature_control.hotend.heater_pin` - "temperature_control.hotend.heater_pin      2.7"
- Line 308: `temperature_control.hotend.thermistor` - "temperature_control.hotend.thermistor      EPCOS100K"
- Line 309: `temperature_control.hotend.set_m_code` - "temperature_control.hotend.set_m_code      104"
- Line 310: `temperature_control.hotend.set_and_wait_m_code` - "temperature_control.hotend.set_and_wait_m_code  109"
- Line 313: `temperature_control.bed.enable` - "temperature_control.bed.enable      true"
- Line 314: `temperature_control.bed.thermistor_pin` - "temperature_control.bed.thermistor_pin  0.24"
- Line 315: `temperature_control.bed.heater_pin` - "temperature_control.bed.heater_pin  2.5"
- Line 316: `temperature_control.bed.thermistor` - "temperature_control.bed.thermistor  Honeywell100K"
- Line 317: `temperature_control.bed.set_m_code` - "temperature_control.bed.set_m_code  140"
- Line 318: `temperature_control.bed.set_and_wait_m_code` - "temperature_control.bed.set_and_wait_m_code  190"

## docs/landing-page-cnc-milling.md
- Line 143: `delta_steps_per_mm` - "delta_steps_per_mm     50      # Rotary steps/degree"
- Line 144: `delta_max_rate` - "delta_max_rate         30000   # Rotary speed"

## docs/landing-page-cnc-mill.md
- Line 167: `delta_steps_per_mm` - "delta_steps_per_mm     50      # A-axis steps per degree"
- Line 168: `delta_max_rate` - "delta_max_rate         30000   # A-axis rotary speed"

## docs/landing-page-grbl-alternative.md
- Line 76: `config.txt` - "Open `config.txt`, edit, save, reboot. No compiling."
- Line 116: `delta_steps_per_mm` - "delta_steps_per_mm     50      # Add A axis config"
- Line 117: `delta_max_rate` - "delta_max_rate         30000   # Set A axis speed"

## docs/landing-page-cnc-controller.md
## docs/landing-page-k40-laser-upgrade.md
## docs/landing-page-laser-controller.md
## docs/landing-page-laser-cutting.md

## docs/landing-pages.md
## docs/landing-page-vinyl-cutter.md
## docs/laser-cutter-guide.md
## docs/laser-guides.md
## docs/laser.md
- Line 81: `laser_module_enable` - "laser_module_enable                          true             # Whether to activate the laser module at all."
- Line 83: `laser_module_pwm_pin` - "laser_module_pwm_pin                         2.5              # this pin will be PWMed to control the laser. Only P2.0 - P2.5 can be used since laser requires hardware PWM"
- Line 85: `laser_module_maximum_power` - "#laser_module_maximum_power                  0.8              # this is the maximum duty cycle that will be applied to the laser"
- Line 86: `laser_module_minimum_power` - "#laser_module_minimum_power                  0.0              # this duty cycle will be used for travel moves to keep the laser active without actually burning"
- Line 88: `laser_module_pwm_period` - "#laser_module_pwm_period                     20               # this sets the pwm frequency as the period in microseconds"
- Line 129: `laser_module_enable` - "laser_module_enable                          true             # Whether to activate the laser module at all."
- Line 131: `laser_module_pwm_pin` - "laser_module_pwm_pin                         1.23o!           # this pin will be PWMed to control the laser. Only P2.0 - P2.5 can be used since laser requires hardware PWM"
- Line 186: `laser_module_proportional_power` - "M221 P1: Temporarily disable proportional laser power (as per the `laser_module_proportional_power` configuration option)"

## docs/laser-options.md
- Line 10: `laser_module_enable` - "`laser_module_enable` | `true` | Whether to activate the laser module at all."
- Line 11: `laser_module_pwm_pin` - "`laser_module_pwm_pin` | `2.5` | This pin will control the laser. Pulse width will be modulated to vary power output (PWM). Note: PWM is available only on pins `2.0` to `2.5`, `1.18`, `1.20`, `1.21`, `1.23`, `1.24`, `1.26`, `3.25` and `3.26`."
- Line 12: `laser_module_ttl_pin` - "`laser_module_ttl_pin` | `1.30` | This pin turns on when the laser turns on, and off when the laser turns off."
- Line 13: `laser_module_maximum_power` - "`laser_module_maximum_power` | `0.8` | This is the maximum duty cycle that will be applied to the laser. Value is from `0` to `1`."
- Line 14: `laser_module_minimum_power` - "`laser_module_minimum_power` | `0.0` | This duty cycle will be used for travel moves to keep the laser active without actually burning."
- Line 15: `laser_module_pwm_period` - "`laser_module_pwm_period` | `20` | PWM frequency expressed as the period in microseconds."
- Line 16: `laser_module_proportional_power` - "`laser_module_proportional_power` | `true` | Whether the laser power should be proportional to the current speed"

## docs/laser-warning.md
## docs/laserweb.md
## docs/latest-firmware-compact.md
## docs/latest-firmware.md
## docs/lcd-screen-design.md
## docs/lcjbdz-guide.md
## docs/linux-drivers.md

## docs/lpc1769-pin-usage.md
- Line 23: `alpha_en_pin` - "P0.4 | P30 | 38 | alpha_en_pin"
- Line 24: `alpha_dir_pin` - "P0.5 | P29 | 39 | alpha_dir_pin"
- Line 29: `beta_en_pin` - "P0.10 | P28 | 40 | beta_en_pin | also i2c2 sda"
- Line 30: `beta_dir_pin` - "P0.11 | P27 | 41 | beta_dir_pin | also i2c2 scl"
- Line 35: `gamma_en_pin` - "P0.19 | - | Pad17 | gamma_en_pin | also i2c3 sda on lpcxpresso e2prom"
- Line 36: `gamma_dir_pin` - "P0.20 | - | Pad18 | gamma_dir_pin | also i2c3 scl on lpcxpresso e2prom"
- Line 37: `delta_en_pin` - "P0.21 | - | 23 | delta_en_pin"
- Line 38: `delta_dir_pin` - "P0.22 | - | 24 | delta_dir_pin | lpcxpresso led"
- Line 39: `hotend.thermistor_pin` - "P0.23 | P15 | 15 | hotend.thermistor_pin"
- Line 40: `bed.thermistor_pin` - "P0.24 | P16 | 16 | bed.thermistor_pin"
- Line 57: `leds_disable` - "P1.18 | LED1 | Pad1 | led1 | h/w `PWM` capable. can be free if leds_disable is set true in config."
- Line 58: `leds_disable` - "P1.19 | - | Pad2 | led2 | can be free if leds_disable is set true in config."
- Line 59: `leds_disable` - "P1.20 | LED2 | Pad3 | led3 | h/w `PWM` capable. can be free if leds_disable is set true in config."
- Line 60: `leds_disable` - "P1.21 | LED3 | Pad4 | led4 | h/w `PWM` capable. can be free if leds_disable is set true in config."
- Line 63: `alpha_min_endstop` - "P1.24 | - | Pad7 | alpha_min_endstop | h/w `PWM` capable"
- Line 64: `alpha_max_endstop` - "P1.25 | - | Pad8 | alpha_max_endstop"
- Line 65: `beta_min_endstop` - "P1.26 | - | Pad9 | beta_min_endstop | h/w `PWM` capable"
- Line 66: `beta_max_endstop` - "P1.27 | - | Pad10 | beta_max_endstop"
- Line 67: `gamma_min_endstop` - "P1.28 | - | Pad11 | gamma_min_endstop"
- Line 68: `gamma_max_endstop` - "P1.29 | - | Pad12 | gamma_max_endstop"
- Line 71: `alpha_step_pin` - "P2.0 | P26 | 42 | alpha_step_pin | h/w `PWM` capable"
- Line 72: `beta_step_pin` - "P2.1 | P25 | 43 | beta_step_pin | h/w `PWM` capable"
- Line 73: `gamma_step_pin` - "P2.2 | P24 | 44 | gamma_step_pin | h/w `PWM` capable"
- Line 74: `delta_step_pin` - "P2.3 | P23 | 45 | delta_step_pin | h/w `PWM` capable"
- Line 75: `psu.output_pin` - "P2.4 | P22 | 46 | psu.output_pin | h/w `PWM` capable"
- Line 76: `bed.heater_pin` - "P2.5 | P21 | 47 | bed.heater_pin | h/w `PWM` capable"
- Line 77: `fan.output_pin` - "P2.6 | - | 48 | fan.output_pin"
- Line 78: `hotend.heater_pin` - "P2.7 | - | 49 | hotend.heater_pin"
- Line 79: `epsilon_step_pin` - "P2.8 | - | 50 | epsilon_step_pin | spare on 3 and 4 driver"
- Line 84: `epsilon_dir_pin` - "P2.13 | - | 27 | epsilon_dir_pin | spare on 3 and 4 driver"
- Line 88: `epsilon_en_pin` - "P4.29 | - | Pad16 | epsilon_en_pin | spare on 3 and 4 driver cannot be used in opendrain"

## docs/lpc1769-pin-usage-1-5.md
- Line 14: `uart0 txd` - "P0.2 | USBTX | 21 | `uart0 txd` | `uart0 txd` | All: Used for ISP programming of the bootloader and for debugging."
- Line 15: `uart0 rxd` - "P0.3 | USBRX | 22 | `uart0 rxd` | `uart0 rxd` | All: Used for ISP programming of the bootloader and for debugging."
- Line 16: `alpha_en_pin` - "P0.4 | P30 | 38 | alpha_en_pin | **spare** | 1.5: recommended for encoder"
- Line 17: `alpha_dir_pin` - "P0.5 | P29 | 39 | alpha_dir_pin | **spare** | 1.5: recommended for encoder"
- Line 22: `beta_en_pin` - "P0.10 | P28 | 40 | beta_en_pin | **spare** <br> uart1 txd | 1.5: connected to edison uart1 rxd"
- Line 23: `beta_dir_pin` - "P0.11 | P27 | 41 | beta_dir_pin | **spare** <br> uart1 rxd | 1.5: connected to edison uart1 txd"

## docs/listofevents.md
## docs/logic-power.md
## docs/logo-proposals.md
## docs/lpc4337-pin-usage.md
## docs/m1234.md
## docs/m20.md
## docs/m21.md
## docs/m23.md
## docs/m24.md
## docs/m3.md
## docs/m5.md
## docs/mac-drivers.md
## docs/mailing-lists-welcome-mat.md

## docs/main-power-input.md
## docs/menu.md
## docs/migrating.md
## docs/missing-web-interface.md
## docs/moduleexample.md
## docs/module-name.md
- Line 28: `extruder.first.enable` - "extruder.first.enable     true"
- Line 29: `extruder.second.enable` - "extruder.second.enable    true"
- Line 30: `extruder.third.enable` - "extruder.third.enable     true"
- Line 36: `extruder.first.steps_per_mm` - "extruder.first.steps_per_mm           92.4"
- Line 37: `extruder.first.max_speed` - "extruder.first.max_speed              50"
- Line 39: `extruder.second.steps_per_mm` - "extruder.second.steps_per_mm          90.0"
- Line 40: `extruder.second.max_speed` - "extruder.second.max_speed             50"

## docs/morgan-scara.md
## docs/mosfets.md
## docs/mosfets-table.md
- Line 67: `temperature_control.bed.heater_pin` - "temperature_control.bed.heater_pin     2.7"
- Line 72: `temperature_control.hotend.heater_pin` - "temperature_control.hotend.heater_pin  2.4"

## docs/motion-control.md
- Line 39: `acceleration` - "acceleration                                 3000             # Acceleration in mm/second/second."
- Line 64: `gamma.acceleration` - "On those machines, you can set the acceleration for Z separately, by editing the gamma.acceleration value."
- Line 95: `junction_deviation` - "junction_deviation       0.05       # Similar to the old \"max_jerk\", in millimeters,"
- Line 131: `x_axis_max_speed` - "x_axis_max_speed            30000      # mm/min"
- Line 139: `alpha_max_rate` - "alpha_max_rate       30000.0         # mm/min"
- Line 171: `custom_menu.babystepup.enable` - "custom_menu.babystepup.enable               true              #"
- Line 172: `custom_menu.babystepup.name` - "custom_menu.babystepup.name                 Baby step up      #"
- Line 173: `custom_menu.babystepup.command` - "custom_menu.babystepup.command              G43.2 Z0.05       #"
- Line 175: `custom_menu.babystepdown.enable` - "custom_menu.babystepdown.enable             true              #"
- Line 176: `custom_menu.babystepdown.name` - "custom_menu.babystepdown.name               Baby step down    #"
- Line 177: `custom_menu.babystepdown.command` - "custom_menu.babystepdown.command            G43.2 Z-0.05      #"

## docs/motion-control-options.md
- Line 14: `default_feed_rate` - "Default rate for G1/G2/G3 moves in millimetres/minute. This is overridden by the first F (feedrate) parameter after reset, and never used again."
- Line 15: `default_seek_rate` - "Default rate for G0 moves in millimetres/minute"
- Line 16: `mm_max_arc_error` - "Arcs are cut into segments (lines), This is the maximum error for line segments that divide arcs"
- Line 17: `mm_per_line_segment` - "Lines can be cut into segments (generally not useful with cartesian coordinates robots), this sets the maximum length of any given segment."
- Line 18: `delta_segments_per_second` - "Instead of cutting lines into segments based on a distance, cut them based on time: segments will be cut so that Smoothie executes -about- delta_segments_per_second segments each second."
- Line 19: `planner_queue_size` - "Defines how many blocks (line segments) are stored in RAM for look-ahead acceleration calculation."
- Line 20: `acceleration` - "Acceleration in millimetres/second/second. Higher values make your machine faster and shakier, lower values make your machine slower and sturdier."
- Line 21: `alpha_acceleration` - "Acceleration in millimetres/second/second for the alpha actuator (X axis on cartesian), do not set on deltas"
- Line 22: `beta_acceleration` - "Acceleration in millimetres/second/second for the beta actuator (Y axis on cartesian), do not set on deltas"
- Line 23: `gamma_acceleration` - "Acceleration in millimetres/second/second for the gamma actuator (Z axis on cartesian), do not set on deltas"
- Line 24: `junction_deviation` - "Similar to the old \"max_jerk\", in millimeters. Defines how much the machine slows down when decelerating proportional to the vector angle of change of direction."
- Line 25: `z_junction_deviation` - "Junction deviation for Z only moves, -1 uses junction_deviation, 0 disables junction_deviation on z moves. Do not set this value if you use a delta arm solution."
- Line 26: `minimum_planner_speed` - "Sets the minimum planner speed in millimetres/sec. This is the lowest speed the planner will ever set a move to."
- Line 27: `microseconds_per_step_pulse` - "Duration of step pulses to the stepper motor drivers, in microseconds."
- Line 28: `base_stepping_frequency` - "Base frequency for stepping, higher values gives smoother movement. Do not modify unless you know exactly what you are doing, 100khz is the only officially supported value."

## docs/mri-debugging.md
- Line 213: `watchdog_timeout` - "watchdog_timeout 0 # watchdog timeout in seconds, default is 10, set to 0 to disable the watchdog"
- Line 218: `base_stepping_frequency` - "base_stepping_frequency 50000 # Base frequency for stepping"

## docs/multiple-extruders.md
- Line 37: `extruder.hotend.enable` - "extruder.hotend.enable                          true"
- Line 38: `extruder.hotend.steps_per_mm` - "extruder.hotend.steps_per_mm                    140"
- Line 39: `extruder.hotend.default_feed_rate` - "extruder.hotend.default_feed_rate               600"
- Line 40: `extruder.hotend.acceleration` - "extruder.hotend.acceleration                    500"
- Line 41: `extruder.hotend.max_speed` - "extruder.hotend.max_speed                       50"
- Line 42: `extruder.hotend.step_pin` - "extruder.hotend.step_pin                        2.3"
- Line 43: `extruder.hotend.dir_pin` - "extruder.hotend.dir_pin                         0.22"
- Line 44: `extruder.hotend.en_pin` - "extruder.hotend.en_pin                          0.21"
- Line 45: `delta_current` - "delta_current                                   1.5"
- Line 48: `extruder.hotend2.enable` - "extruder.hotend2.enable                         true"
- Line 49: `extruder.hotend2.steps_per_mm` - "extruder.hotend2.steps_per_mm                   140"
- Line 50: `extruder.hotend2.default_feed_rate` - "extruder.hotend2.default_feed_rate              600"
- Line 51: `extruder.hotend2.acceleration` - "extruder.hotend2.acceleration                   500"
- Line 52: `extruder.hotend2.max_speed` - "extruder.hotend2.max_speed                      50"
- Line 53: `extruder.hotend2.step_pin` - "extruder.hotend2.step_pin                       2.8"
- Line 54: `extruder.hotend2.dir_pin` - "extruder.hotend2.dir_pin                        2.13"
- Line 55: `extruder.hotend2.en_pin` - "extruder.hotend2.en_pin                         4.29"
- Line 56: `epsilon_current` - "epsilon_current                                 1.5"
- Line 69: `temperature_control.hotend.enable` - "temperature_control.hotend.enable            true"
- Line 70: `temperature_control.hotend.thermistor_pin` - "temperature_control.hotend.thermistor_pin    0.23"
- Line 71: `temperature_control.hotend.heater_pin` - "temperature_control.hotend.heater_pin        2.7"
- Line 72: `temperature_control.hotend.thermistor` - "temperature_control.hotend.thermistor        EPCOS100K"
- Line 73: `temperature_control.hotend.set_m_code` - "temperature_control.hotend.set_m_code        104"
- Line 74: `temperature_control.hotend.set_and_wait_m_code` - "temperature_control.hotend.set_and_wait_m_code 109"
- Line 75: `temperature_control.hotend.designator` - "temperature_control.hotend.designator        T0"
- Line 78: `temperature_control.hotend2.enable` - "temperature_control.hotend2.enable            true"
- Line 79: `temperature_control.hotend2.thermistor_pin` - "temperature_control.hotend2.thermistor_pin    0.25"
- Line 80: `temperature_control.hotend2.heater_pin` - "temperature_control.hotend2.heater_pin        1.23"
- Line 81: `temperature_control.hotend2.thermistor` - "temperature_control.hotend2.thermistor        EPCOS100K"
- Line 82: `temperature_control.hotend2.set_m_code` - "temperature_control.hotend2.set_m_code        104"
- Line 83: `temperature_control.hotend2.set_and_wait_m_code` - "temperature_control.hotend2.set_and_wait_m_code 109"
- Line 84: `temperature_control.hotend2.designator` - "temperature_control.hotend2.designator        T1"

## docs/network.md
- Line 12: `network.enable` - "To enable the network, set `network.enable` to `true`."
- Line 22: `network.enable` - "network.enable                               true            # enable the ethernet network services"
- Line 23: `network.webserver.enable` - "network.webserver.enable                     true             # enable the webserver"
- Line 24: `network.telnet.enable` - "network.telnet.enable                        true             # enable the telnet server"
- Line 25: `network.plan9.enable` - "network.plan9.enable                         true             # enable the plan9 network filesystem"
- Line 26: `network.ip_address` - "network.ip_address                           auto             # use dhcp to get ip address"
- Line 34: `network.enable` - "network.enable                               true             # enable the ethernet network services"
- Line 35: `network.webserver.enable` - "network.webserver.enable                     true             # enable the webserver"
- Line 36: `network.telnet.enable` - "network.telnet.enable                        true             # enable the telnet server"
- Line 37: `network.plan9.enable` - "network.plan9.enable                         true             # enable the plan9 network filesystem"
- Line 38: `network.ip_address` - "network.ip_address                           192.168.3.222    # the IP address"
- Line 39: `network.ip_mask` - "network.ip_mask                              255.255.255.0    # the ip mask"
- Line 40: `network.ip_gateway` - "network.ip_gateway                           192.168.3.1      # the gateway address"
- Line 154: `network.plan9.enable` - "First, activate the option `network.plan9.enable` and restart your Smoothie."
- Line 211: `network.ip_address` - "network.ip_address  auto          # use dhcp to get IP address"
- Line 212: `network.hostname` - "network.hostname   smoothie1   # optionally set this hostname for dhcp"
- Line 214: `network.hostname` - "Note the `network.hostname` is optional."

## docs/network-options.md
- Line 12: `network.enable` - "| `network.enable` | `true` | If set to `true`, enable the Ethernet network services |"
- Line 13: `network.webserver.enable` - "| `network.webserver.enable` | `true` | If set to `true`, enable the web server service, on port 80, which provides a control and upload web interface |"
- Line 14: `network.telnet.enable` - "| `network.telnet.enable` | `true` | If set to `true`, enable the telnet service, on port 23, which behaves much like a Serial interface |"
- Line 15: `network.plan9.enable` - "| `network.plan9.enable` | `false` | If set to `true`, enable the plan9 network filesystem on port 564 which allows mounting the Smoothieboard |"
- Line 16: `network.ip_address` - "| `network.ip_address` | `auto` | If set to `auto`, use DHCP to request an IP address. If set to an IP address, use that address as a static IP. |"
- Line 17: `network.ip_mask` - "| `network.ip_mask` | `255.255.255.0` | If using a static IP, define the mask for the network. |"
- Line 18: `network.ip_gateway` - "| `network.ip_gateway` | `192.168.3.1` | If using a static IP, define the gateway for the network. |"
- Line 19: `network.mac_override` - "| `network.mac_override` | `AB.AB.AB.AB.AB.AB` | If set, override the MAC address for the Ethernet interface. Only set this if you have a conflict on your network. |"
- Line 20: `network.hostname` - "| `network.hostname` | `shapeoko17` | Some DHCP servers accept a hostname for the machine, which then allows you to connect to it using that name instead of its IP. |"

## docs/new-features.md
- Line 12: `arm_solution` - "Added native [HBot](https://github.com/arthurwolf/smoothie/pull/152/files) support to edge. Set \"arm_solution\" to \"hbot\" in your config to enable."
- Line 16: `delta_segments_per_second` - "Added [delta_segments_per_second](https://github.com/arthurwolf/smoothie/pull/144/files) to edge. This provides a segmentation based on the current feedrate and speed override, where the number of segments is inversely proportional to feedrate."
- Line 24: `on_boot_gcode_enable` - "Added support for [onboot.gcode](https://github.com/arthurwolf/smoothie/pull/124/files) to run automatically at power up by setting `on_boot_gcode_enable` to true in config."
- Line 24: `on_boot_gcode` - "The name of the file to be run can also be changed by setting `on_boot_gcode`."
- Line 36: `second_usb_serial_enable` - "Now to enable the second usb serial port set `second_usb_serial_enable` to true in config."

## docs/octoprint.md
## docs/override-warning.md
## docs/panel-guide.md
## docs/panel.md
- Line 44: `custom_menu.power_on.enable` - "custom_menu.power_on.enable              true              #"
- Line 45: `custom_menu.power_on.name` - "custom_menu.power_on.name                Power_on          #"
- Line 46: `custom_menu.power_on.command` - "custom_menu.power_on.command             M80               #"
- Line 48: `custom_menu.power_off.enable` - "custom_menu.power_off.enable             true              #"
- Line 49: `custom_menu.power_off.name` - "custom_menu.power_off.name               Power_off         #"
- Line 50: `custom_menu.power_off.command` - "custom_menu.power_off.command            M81               #"
- Line 56: `custom_menu.filament_change_c.enable` - "custom_menu.filament_change_c.enable               true                                                   #"
- Line 57: `custom_menu.filament_change_c.name` - "custom_menu.filament_change_c.name                 Change Filament                                        #"
- Line 58: `custom_menu.filament_change_c.command` - "custom_menu.filament_change_c.command              G91|G1_Z0.6_F12000|G90|G1_X0_Y0|G91|G1_Z-0.6|G90|M25   #"
- Line 60: `custom_menu.filament_change_r.enable` - "custom_menu.filament_change_r.enable               true              #"
- Line 61: `custom_menu.filament_change_r.name` - "custom_menu.filament_change_r.name                 Resume            #"
- Line 62: `custom_menu.filament_change_r.command` - "custom_menu.filament_change_r.command              M24               #"
- Line 79: `panel.external_sd` - "panel.external_sd                         true           # set to true if there is an extrernal sdcard on the panel"
- Line 80: `panel.external_sd.spi_channel` - "panel.external_sd.spi_channel             0              # set spi channel the sdcard is on"
- Line 81: `panel.external_sd.spi_cs_pin` - "panel.external_sd.spi_cs_pin              0.27            # set spi chip select for the sdcard"
- Line 82: `panel.external_sd.sdcd_pin` - "panel.external_sd.sdcd_pin                0.28!^          # sd detect signal (set to nc if no sdcard detect)"
- Line 87: `panel.external_sd` - "panel.external_sd                        true             # set to true if there is an extrernal sdcard on the panel"
- Line 88: `panel.external_sd.spi_channel` - "panel.external_sd.spi_channel            1                # set spi channel the sdcard is on"
- Line 89: `panel.external_sd.spi_cs_pin` - "panel.external_sd.spi_cs_pin             0.27             # set spi chip select for the sdcard (or any spare pin)"
- Line 90: `panel.external_sd.sdcd_pin` - "panel.external_sd.sdcd_pin               0.28!^           # sd detect signal (set to nc if no sdcard detect) (or any spare pin)"
- Line 96: `panel.back_button_pin` - "In that case the `panel.back_button_pin` should be commented out."
- Line 155: `panel.enable` - "panel.enable                          true              # set to true to enable the panel code"
- Line 156: `panel.lcd` - "panel.lcd                             reprap_discount_glcd     # set type of panel"
- Line 157: `panel.spi_channel` - "panel.spi_channel                     0                 # spi channel to use  ; GLCD EXP1 Pins 3,5 (MOSI, SCLK)"
- Line 158: `panel.spi_cs_pin` - "panel.spi_cs_pin                      0.16              # spi chip select     ; GLCD EXP1 Pin 4"
- Line 159: `panel.encoder_a_pin` - "panel.encoder_a_pin                   3.25!^            # encoder pin         ; GLCD EXP2 Pin 3"
- Line 160: `panel.encoder_b_pin` - "panel.encoder_b_pin                   3.26!^            # encoder pin         ; GLCD EXP2 Pin 5"
- Line 161: `panel.click_button_pin` - "panel.click_button_pin                1.30!^            # click button        ; GLCD EXP1 Pin 2"
- Line 162: `panel.buzz_pin` - "panel.buzz_pin                        1.31              # pin for buzzer      ; GLCD EXP1 Pin 1"
- Line 163: `panel.back_button_pin` - "panel.back_button_pin                 2.11!^            # 2.11 menu back      ; GLCD EXP2 Pin 8"
- Line 165: `panel.external_sd` - "panel.external_sd                     true              # set to true if there is an extrernal sdcard on the panel"
- Line 166: `panel.external_sd.spi_channel` - "panel.external_sd.spi_channel         1                 # set spi channel the sdcard is on"
- Line 167: `panel.external_sd.spi_cs_pin` - "panel.external_sd.spi_cs_pin          0.28              # set spi chip select for the sdcard (or any spare pin)"
- Line 168: `panel.external_sd.sdcd_pin` - "panel.external_sd.sdcd_pin            0.27!^            # sd detect signal (set to nc if no sdcard detect) (or any spare pin)"
- Line 218: `panel.enable` - "panel.enable                                 true              # set to true to enable the panel code"
- Line 219: `panel.lcd` - "panel.lcd                                    viki2             # set type of panel"
- Line 220: `panel.spi_channel` - "panel.spi_channel                            0                 # set spi channel to use P0_18,P0_15 MOSI,SCLK"
- Line 221: `panel.spi_cs_pin` - "panel.spi_cs_pin                             0.16              # set spi chip select"
- Line 222: `panel.encoder_a_pin` - "panel.encoder_a_pin                          3.25!^            # encoder pin"
- Line 223: `panel.encoder_b_pin` - "panel.encoder_b_pin                          3.26!^            # encoder pin"
- Line 224: `panel.click_button_pin` - "panel.click_button_pin                       1.30!^            # click button"
- Line 225: `panel.a0_pin` - "panel.a0_pin                                 2.11              # st7565 needs an a0"
- Line 226: `panel.contrast` - "#panel.contrast                              8                 # some panels need contrast set, this is for viki2"
- Line 227: `panel.encoder_resolution` - "#panel.encoder_resolution                    4                 # number of clicks to move 1 item"
- Line 228: `panel.buzz_pin` - "panel.buzz_pin                               1.31              # pin for buzzer"
- Line 229: `panel.red_led_pin` - "panel.red_led_pin                            1.22              # pin for red led on viki2 (5 driver can't use this)"
- Line 230: `panel.blue_led_pin` - "panel.blue_led_pin                           1.23              # pin for blue led on viki2 (5 driver can't use this)"
- Line 231: `panel.back_button_pin` - "#panel.back_button_pin                        1.30!^           # optionally using the red buttin as a back button"
- Line 233: `panel.external_sd` - "panel.external_sd                            true              # set to true if there is an extrernal sdcard on the panel"
- Line 234: `panel.external_sd.spi_channel` - "panel.external_sd.spi_channel                0                 # set spi channel the sdcard is on"
- Line 235: `panel.external_sd.spi_cs_pin` - "panel.external_sd.spi_cs_pin                 2.8               # set spi chip select for the sdcard (NOTE 5 drvier can't use this)"
- Line 236: `panel.external_sd.sdcd_pin` - "panel.external_sd.sdcd_pin                   2.13!^            # sd detect signal (set to nc if no sdcard detect) (NOTE 5 drvier can't use this)"
- Line 267: `panel.enable` - "panel.enable                                 true              # set to true to enable the panel code"
- Line 268: `panel.lcd` - "panel.lcd                                    viki2             # set type of panel"
- Line 269: `panel.spi_channel` - "panel.spi_channel                            0                 # set spi channel to use P0_18,P0_15 MOSI,SCLK"
- Line 270: `panel.spi_cs_pin` - "panel.spi_cs_pin                             0.16              # set spi chip select"
- Line 271: `panel.encoder_a_pin` - "panel.encoder_a_pin                          3.25!^            # encoder pin"
- Line 272: `panel.encoder_b_pin` - "panel.encoder_b_pin                          3.26!^            # encoder pin"
- Line 273: `panel.click_button_pin` - "panel.click_button_pin                       1.30!^            # click button"
- Line 274: `panel.a0_pin` - "panel.a0_pin                                 2.11              # st7565 needs an a0"
- Line 275: `panel.contrast` - "#panel.contrast                              8                 # some panels need contrast set, this is for viki2"
- Line 276: `panel.encoder_resolution` - "#panel.encoder_resolution                    4                 # number of clicks to move 1 item"
- Line 277: `panel.buzz_pin` - "#panel.buzz_pin                              1.31              # pin for buzzer (use red led OR buzzer not both)"
- Line 278: `panel.red_led_pin` - "panel.red_led_pin                            1.31              # pin for red led on viki2"
- Line 279: `panel.blue_led_pin` - "#panel.blue_led_pin                          1.23              # pin for blue led on viki2 (5 driver can't use this)"
- Line 280: `panel.back_button_pin` - "#panel.back_button_pin                       1.30!^            # optionally using the red button as a back button (NOT available on 5 driver)"
- Line 282: `panel.external_sd` - "panel.external_sd                            true              # set to true if there is an extrernal sdcard on the panel"
- Line 283: `panel.external_sd.spi_channel` - "panel.external_sd.spi_channel                0                 # set spi channel the sdcard is on"
- Line 284: `panel.external_sd.spi_cs_pin` - "panel.external_sd.spi_cs_pin                 0.27              # set spi chip select for the sdcard"
- Line 285: `panel.external_sd.sdcd_pin` - "panel.external_sd.sdcd_pin                   0.28!^            # sd detect signal (set to nc if no sdcard detect)"

## docs/panel-options.md
- Line 4: `panel.enable` - "| `panel.enable` | true | Set to true to enable the panel interface. Panels are a screen, an encoder wheel and/or a set of buttons, used to control your machine. |"
- Line 5: `panel.lcd` - "| `panel.lcd` | `reprap_discount_glcd` | Type of panel we are connecting. Each panel has a specific interface so we need to specify which panel we will be connecting. The currently supported panel types are `reprap_discount_glcd`, `st7565_glcd`, `ssd1306_oled`, `viki2`, `mini_viki2` and `universal_adapter`. |"
- Line 6: `panel.spi_channel` - "| `panel.spi_channel` | 0 | SPI channel to use |"
- Line 7: `panel.spi_cs_pin` - "| `panel.spi_cs_pin` | `0.16` | CS (Chip Select) pin to use, this can be used to have several different devices on the same SPI port, as long as each device has a separate CS pin. Note that the RRD GLCD panel does not support this and requires being alone on its port. |"
- Line 8: `panel.spi_frequency` - "| `panel.spi_frequency` | 500000 | SPI port frequency - some panels need it explicitly set |"
- Line 9: `panel.contrast` - "| `panel.contrast` | 9 | Contrast value for panels that support it (`viki2`, `mini_viki2` and `st7565_glcd`) |"
- Line 10: `panel.reverse` - "| `panel.reverse` | false | If set to true, reverse the screen. |"
- Line 11: `panel.busy_pin` - "| `panel.busy_pin` | `nc` | If using the `universal_adapter`, this pin can be connected to the adapter to ask it if it is busy or not. |"
- Line 12: `panel.a0_pin` - "| `panel.a0_pin` | `nc` | If using a viki or SSD1306 this is needed to drive the C/D pin on the display |"
- Line 13: `panel.rst_pin` - "| `panel.rst_pin` | `nc` | If using an SSD1306 this pin is sometimes required and connects to the reset pin on the display |"
- Line 14: `panel.encoder_a_pin` - "| `panel.encoder_a_pin` | `3.25!^` | A pin for the encoder wheel. Encoders have two pins: A and B. Set to `nc` if you use no encoder. ^ defines menu move direction |"
- Line 15: `panel.encoder_b_pin` - "| `panel.encoder_b_pin` | `3.26!^` | B pin for the encoder wheel. Encoders have two pins: A and B. Set to `nc` if you use no encoder. ^ defines menu move direction |"
- Line 16: `panel.encoder_resolution` - "| `panel.encoder_resolution` | `2` | The number of pulses the encoder emits per detent/click |"
- Line 17: `panel.click_button_pin` - "| `panel.click_button_pin` | `1.30!^` | Pin for the click (\"enter\") button |"
- Line 18: `panel.buzz_pin` - "| `panel.buzz_pin` | `1.31` | Pin for the buzzer |"
- Line 19: `panel.back_button_pin` - "| `panel.back_button_pin` | `2.11!^` | Pin for the back button |"
- Line 20: `panel.up_button_pin` - "| `panel.up_button_pin` | `0.1!` | Pin for the up button |"
- Line 21: `panel.down_button_pin` - "| `panel.down_button_pin` | `0.0!` | Pin for the down button |"
- Line 22: `panel.menu_offset` - "| `panel.menu_offset` | 0 | On some panels, this value must be set to 1. This is a number of lines to offset the menu lines by on screen. |"
- Line 23: `panel.alpha_jog_feedrate` - "| `panel.alpha_jog_feedrate` | 6000 | X jogging feedrate in millimetres/minute. This is used when jogging using the panel screen. |"
- Line 24: `panel.beta_jog_feedrate` - "| `panel.beta_jog_feedrate` | 6000 | Y jogging feedrate in millimetres/minute. This is used when jogging using the panel screen. |"
- Line 25: `panel.gamma_jog_feedrate` - "| `panel.gamma_jog_feedrate` | 200 | Z jogging feedrate in millimetres/minute. This is used when jogging using the panel screen. |"
- Line 26: `panel.hotend_temperature` - "| `panel.hotend_temperature` | 185 | Temperature to set the hotend to when using the pre-heating menu item |"
- Line 27: `panel.bed_temperature` - "| `panel.bed_temperature` | 60 | Temperature to set the bed to when using the pre-heating menu item |"
- Line 28: `panel.external_sd` - "| `panel.external_sd` | true | Set to true if your panel has an external SD card slot, or if you want to connect a second SD card slot to one of your Smoothieboard's SPI ports |"
- Line 29: `panel.external_sd.spi_channel` - "| `panel.external_sd.spi_channel` | 0 | Set the SPI channel the external SD card is on |"
- Line 30: `panel.external_sd.spi_cs_pin` - "| `panel.external_sd.spi_cs_pin` | `2.8` | Set the CS (Chip Select) pin for the external SD card, this allows you to use multiple devices on the same SPI port, as long as they each have a CS pin |"
- Line 31: `panel.external_sd.sdcd_pin` - "| `panel.external_sd.sdcd_pin` | `2.13!^` | SD card detect signal pin, set to `nc` if you don't use an SD card detect signal |"
- Line 32: `custom_menu.menu_name.enable` - "| `custom_menu.menu_name.enable` | true | When set to true, create a new custom menu entry for the panel with the name `menu_name`. You can create any number of custom entries as long as they have different names. **NOTE** `menu_name` is case sensitive |"
- Line 33: `custom_menu.menu_name.name` - "| `custom_menu.menu_name.name` | `Power_on` | The name that will be displayed in the panel's menus |"
- Line 34: `custom_menu.menu_name.command` - "| `custom_menu.menu_name.command` | `M80_S30|G1_X10` | The command that will be executed when the menu entry is selected and clicked. Note that the `_` character gets converted to space in the menu and commands (and must be used instead of the space character), and the `|` character is used to separate multiple commands |"

## docs/pcb-milling.md
- Line 28: `leveling-strategy.rectangular-grid.only_by_two_corners` - "leveling-strategy.rectangular-grid.only_by_two_corners        true"

## docs/pick-and-place-control.md
- Line 51: `temperature_control.vac_n1.enable` - "temperature_control.vac_n1.enable                 true             # Whether to activate this ( \"hotend\" ) module at all."
- Line 52: `temperature_control.vac_n1.sensor` - "temperature_control.vac_n1.sensor                 ad8495           #"
- Line 53: `temperature_control.vac_n1.ad8495_pin` - "temperature_control.vac_n1.ad8495_pin             0.23             # Pin for the thermistor to read"
- Line 54: `temperature_control.vac_n1.ad8495_offset` - "temperature_control.vac_n1.ad8495_offset          0                #"
- Line 55: `temperature_control.vac_n1.heater_pin` - "temperature_control.vac_n1.heater_pin             nc               # Pin to controls the heater, nc if a read only thermistor."
- Line 56: `temperature_control.vac_n1.readings_per_second` - "temperature_control.vac_n1.readings_per_second    500              # How many times per second to read temperature from the sensor."
- Line 57: `temperature_control.vac_n1.get_m_code` - "temperature_control.vac_n1.get_m_code             104              # Calling this M-code will return the current temperature."
- Line 58: `temperature_control.vac_n1.designator` - "temperature_control.vac_n1.designator             VAC              # Designator letter for this module"
- Line 59: `temperature_control.vac_n1.rt_curve` - "temperature_control.vac_n1.rt_curve               20.0,220,120,6000,220,120000"
- Line 63: `temperature_control.vac_n2.enable` - "temperature_control.vac_n2.enable                 true             # Whether to activate this ( \"hotend\" ) module at all."
- Line 64: `temperature_control.vac_n2.sensor` - "temperature_control.vac_n2.sensor                 ad8495           #"
- Line 65: `temperature_control.vac_n2.ad8495_pin` - "temperature_control.vac_n2.ad8495_pin             0.24             # Pin for the thermistor to read"
- Line 66: `temperature_control.vac_n2.ad8495_offset` - "temperature_control.vac_n2.ad8495_offset          0                #"
- Line 67: `temperature_control.vac_n2.heater_pin` - "temperature_control.vac_n2.heater_pin             nc               # Pin to controls the heater, nc if a read only thermistor."
- Line 68: `temperature_control.vac_n2.readings_per_second` - "temperature_control.vac_n2.readings_per_second    500              # How many times per second to read temperature from the sensor."
- Line 69: `temperature_control.vac_n2.get_m_code` - "temperature_control.vac_n2.get_m_code             105              # Calling this M-code will return the current temperature."
- Line 70: `temperature_control.vac_n2.designator` - "temperature_control.vac_n2.designator             VAC              # Designator letter for this module"
- Line 71: `temperature_control.vac_n2.rt_curve` - "temperature_control.vac_n2.rt_curve               20.0,220,120,6000,220,120000"
- Line 92: `switch.vacuum_left.enable` - "switch.vacuum_left.enable                        true             #"
- Line 93: `switch.vacuum_left.input_on_command` - "switch.vacuum_left.input_on_command              M42              # M42 with S parameter to control"
- Line 94: `switch.vacuum_left.input_off_command` - "switch.vacuum_left.input_off_command             M43              # Or use M42 S0"
- Line 95: `switch.vacuum_left.output_pin` - "switch.vacuum_left.output_pin                    2.4              # Small mosfet output pin"
- Line 96: `switch.vacuum_left.output_type` - "switch.vacuum_left.output_type                   digital          # Digital on/off control"
- Line 99: `switch.vacuum_right.enable` - "switch.vacuum_right.enable                       true             #"
- Line 100: `switch.vacuum_right.input_on_command` - "switch.vacuum_right.input_on_command             M44              #"
- Line 101: `switch.vacuum_right.input_off_command` - "switch.vacuum_right.input_off_command            M45              #"
- Line 102: `switch.vacuum_right.output_pin` - "switch.vacuum_right.output_pin                   2.5              # Small mosfet output pin"
- Line 103: `switch.vacuum_right.output_type` - "switch.vacuum_right.output_type                  digital          #"
- Line 137: `switch.servo_z.enable` - "switch.servo_z.enable                            true             #"
- Line 138: `switch.servo_z.input_on_command` - "switch.servo_z.input_on_command                  M280             # Standard servo control command"
- Line 139: `switch.servo_z.output_pin` - "switch.servo_z.output_pin                        2.5              # Servo signal pin"
- Line 140: `switch.servo_z.output_type` - "switch.servo_z.output_type                       hwpwm            # Hardware PWM for servo"
- Line 141: `switch.servo_z.pwm_period_ms` - "switch.servo_z.pwm_period_ms                     20               # 20ms period for standard servos"

## docs/pick-and-place.md
- Line 96: `grbl_mode` - "- `grbl_mode` enabled by default (which means Smoothie interprets G-code as CNC G-code rather than 3D-printing G-code)"

## docs/pin-configuration.md
## docs/pinout.md
## docs/player.md
- Line 82: `leave_heaters_on_suspend` - "5. Turn off heaters (unless the config has `leave_heaters_on_suspend true`)"
- Line 83: `after_suspend` - "6. Optionally run after_suspend gcode (set in config defines gcode to run eg. `after_suspend G91G0E20G90`)"
- Line 96: `mm_per_line_segment` - "The queue must drain before it will suspend. If you need to have the system suspend quicker the only way to do it is to set the config variable `mm_per_line_segment 1`."

## docs/player-options.md
- Line 12: `on_boot_gcode` - "| `on_boot_gcode`       | `/sd/on_boot.gcode`             | G-code file to play when the board boots. This file will automatically be played when the board is done booting up. Useful for example if you want to home your printer when it boots, or do similar tasks. For more information see [on_boot.gcode](on_boot.gcode) |"
- Line 13: `on_boot_gcode_enable` - "| `on_boot_gcode_enable`| `true`                          | If set to true, play the `on_boot_gcode` file when the board boots up |"
- Line 14: `after_suspend_gcode` - "| `after_suspend_gcode` | `G91 G0 E-5 G0 Z10 G90 G0 X-50 Y-50` | G-code to execute automatically right after the suspend command is received, this is useful if you want to retract, or turn off heaters etc. The `_` character gets converted into space|"
- Line 15: `before_resume_gcode` - "| `before_resume_gcode` | `G91 G1 E1 G90`                 | G-code to execute automatically right after the resume command is received, but before resuming execution. However, NOTE this is generally not needed as the resume will restore the state it was in before the suspend.  The `_` character gets converted into space|"
- Line 16: `leave_heaters_on_suspend` - "| `leave_heaters_on_suspend` | `false`                   | If set to true, heaters are left ON when `suspend` is received. If set to false, heaters are turned OFF when `suspend` is received, and then turned back ON when `resume` is received. |"

## docs/playled.md
- Line 62: `play_led_disable` - "# Play LED configuration\nplay_led_disable                         false              # Enable the play LED"
- Line 63: `leds_disable` - "leds_disable                             false              # Enable LED support"

## docs/power-supply-control.md
- Line 19: `switch.psu.enable` - "switch.psu.enable                            true             # turn atx on/off"
- Line 20: `switch.psu.input_on_command` - "switch.psu.input_on_command                  M80              # command to turn on"
- Line 21: `switch.psu.input_off_command` - "switch.psu.input_off_command                 M81              # command to turn off"
- Line 22: `switch.psu.output_pin` - "switch.psu.output_pin                        0.25o!           # open drain, inverted"
- Line 23: `switch.psu.output_type` - "switch.psu.output_type                       digital          # on/off only"
- Line 24: `switch.psu.failsafe_set_to` - "switch.psu.failsafe_set_to                   1                # so the ATX turns off on a system crash"
- Line 25: `switch.psu.ignore_on_halt` - "#switch.psu.ignore_on_halt                    true             # so the ATX does not turn off on a HALT condition"
- Line 41: `switch.psu.enable` - "switch.psu.enable                            true             # turn atx on/off"
- Line 42: `switch.psu.input_on_command` - "switch.psu.input_on_command                  M80              # command to turn on"
- Line 43: `switch.psu.input_off_command` - "switch.psu.input_off_command                 M81              # command to turn off"
- Line 44: `switch.psu.output_pin` - "switch.psu.output_pin                        2.4              # small mosfet (NB not inverted)"
- Line 45: `switch.psu.output_type` - "switch.psu.output_type                       digital          # on/off only"
- Line 46: `switch.psu.ignore_on_halt` - "#switch.psu.ignore_on_halt                    true             # so the PSU does not turn off on a HALT condition"

## docs/pt100.md
- Line 37: `temperature_control.hotend.enable` - "temperature_control.hotend.enable              true"
- Line 38: `temperature_control.hotend.sensor` - "temperature_control.hotend.sensor              pt100_e3d"
- Line 39: `temperature_control.hotend.e3d_amplifier_pin` - "temperature_control.hotend.e3d_amplifier_pin   1.30        # must be a free ADC pin, not a temperature input"

## docs/pwm-capable.md
- Line 13: `leds_disable` - "| P1.18 | leds_disable | leds_disable | leds_disable | led1 | set `leds_disable` in config to use it |"
- Line 14: `leds_disable` - "| P1.20 | leds_disable | leds_disable | leds_disable | led3 | set `leds_disable` in config to use it |"
- Line 15: `leds_disable` - "| P1.21 | leds_disable | leds_disable | leds_disable | led4 | set `leds_disable` in config to use it |"

## docs/rectangular-grid-calibration-options.md
- Line 19: `leveling-strategy.rectangular-grid.enable` - "The strategy must be enabled in the config, as well as the zprobe module."
- Line 20: `leveling-strategy.rectangular-grid.x_size` - "The distance from homed position to the right edge of the bed in mm."
- Line 21: `leveling-strategy.rectangular-grid.y_size` - "The distance from homed position to the top edge of the bed in mm."
- Line 22: `leveling-strategy.rectangular-grid.size` - "The size of the grid (X size == Y size), for example, 7 causes a 7x7 grid with 49 points. Must be an odd number."
- Line 23: `leveling-strategy.rectangular-grid.grid_x_size` - "The X size of the grid. For X size != Y size. Must be an odd number."
- Line 24: `leveling-strategy.rectangular-grid.grid_y_size` - "The Y size of the grid. For X size != Y size. Must be an odd number."
- Line 25: `leveling-strategy.rectangular-grid.probe_offsets` - "Optional probe offsets from the nozzle or tool head in mm."
- Line 26: `leveling-strategy.rectangular-grid.save` - "If the saved grid is to be loaded on boot then this must be set to true."
- Line 27: `leveling-strategy.rectangular-grid.initial_height` - "The initial_height (in mm) tells the initial probe where to move to in Z before it probes, this should be around 5-10mm above the bed."
- Line 28: `leveling-strategy.rectangular-grid.human_readable` - "Human readable formatting of probe table."
- Line 29: `leveling-strategy.rectangular-grid.only_by_two_corners` - "G29/31/32 will not work without providing XYAB parameters"
- Line 30: `leveling-strategy.rectangular-grid.dampening_start` - "Compensation normally is applied for all heights, with full power. If you set this setting to a height, the compensation will start to be applied less and less (linearly) until \"height_limit\" is reached."
- Line 31: `leveling-strategy.rectangular-grid.height_limit` - "The compensation algorithm will stop working after this limit, starting from the \"dampening_start\" parameter."
- Line 32: `leveling-strategy.rectangular-grid.before_probe_gcode` - "Automatically deploy a bltouch probe before the probing."
- Line 33: `leveling-strategy.rectangular-grid.after_probe_gcode` - "Automatically stow the bltouch after probing."

## docs/rotary-delta.md
- Line 52: `arm_solution` - "arm_solution                             rotary_delta"


## docs/rrdglcdadapter.md
- Line 146: `panel.enable` - "panel.enable true # set to true to enable the panel code"
- Line 147: `panel.lcd` - "panel.lcd reprap_discount_glcd # set type of panel"
- Line 148: `panel.spi_channel` - "panel.spi_channel 0 # spi channel to use ; GLCD EXP1 Pins 3,5 (MOSI, SCLK)"
- Line 149: `panel.spi_cs_pin` - "panel.spi_cs_pin 0.16 # spi chip select ; GLCD EXP1 Pin 4"
- Line 150: `panel.encoder_a_pin` - "panel.encoder_a_pin 3.25!^ # encoder pin ; GLCD EXP2 Pin 3"
- Line 151: `panel.encoder_b_pin` - "panel.encoder_b_pin 3.26!^ # encoder pin ; GLCD EXP2 Pin 5"
- Line 152: `panel.click_button_pin` - "panel.click_button_pin 1.30!^ # click button ; GLCD EXP1 Pin 2"
- Line 153: `panel.buzz_pin` - "panel.buzz_pin 1.31 # pin for buzzer ; GLCD EXP1 Pin 1"
- Line 154: `panel.back_button_pin` - "panel.back_button_pin 2.11!^ # 2.11 menu back ; GLCD EXP2 Pin 8"
- Line 156: `panel.external_sd` - "panel.external_sd true # set to true if there is an extrernal sdcard on the panel"
- Line 157: `panel.external_sd.spi_channel` - "panel.external_sd.spi_channel 1 # set spi channel the sdcard is on"
- Line 158: `panel.external_sd.spi_cs_pin` - "panel.external_sd.spi_cs_pin 0.28 # set spi chip select for the sdcard (or any spare pin)"
- Line 159: `panel.external_sd.sdcd_pin` - "panel.external_sd.sdcd_pin 0.27!^ # sd detect signal (set to nc if no sdcard detect) (or any spare pin)"
- Line 169: `switch.nonoise.enable` - "switch.nonoise.enable true"
- Line 170: `switch.nonoise.output_pin` - "switch.nonoise.output_pin 1.31v"
- Line 171: `switch.nonoise.output_type` - "switch.nonoise.output_type digital"

## docs/safety-thermistor.md
- Line 30: `temperatureswitch.psu.enable` - "temperatureswitch.psu.enable true # Enable temperatureswitch module for PSU"
- Line 31: `temperatureswitch.psu.switch` - "temperatureswitch.psu.switch psuswitch # Designate switch module to use"
- Line 32: `temperatureswitch.psu.designator` - "temperatureswitch.psu.designator F # Designator for the safety thermistor"
- Line 33: `temperatureswitch.psu.threshold_temp` - "temperatureswitch.psu.threshold_temp 45 # Turn the PSU OFF above this temperature, and ON below this temperature. In °C."
- Line 35: `switch.psuswitch.enable` - "switch.psuswitch.enable true # Enable switch module for PSU"
- Line 36: `switch.psuswitch.input_on_command` - "switch.psuswitch.input_on_command M80 # Command to turn PSU on"
- Line 37: `switch.psuswitch.input_off_command` - "switch.psuswitch.input_off_command M81 # Command to turn PSU off"
- Line 38: `switch.psuswitch.output_pin` - "switch.psuswitch.output_pin 1.22! # Pin for the switch control, 3rd small FET, or pin on header"
- Line 39: `switch.psuswitch.output_type` - "switch.psuswitch.output_type digital # Output type, on/off only"
- Line 42: `temperature_control.psu.enable` - "temperature_control.psu.enable true # Enable temperaturecontrol module for PSU"
- Line 43: `temperature_control.psu.thermistor_pin` - "temperature_control.psu.thermistor_pin 0.25 # Pin for the safety thermistor to read"
- Line 44: `temperature_control.psu.heater_pin` - "temperature_control.psu.heater_pin nc # Set to 'nc' for read-only temperature control"
- Line 45: `temperature_control.psu.thermistor` - "temperature_control.psu.thermistor Semitec # Thermistor type"
- Line 46: `temperature_control.psu.designator` - "temperature_control.psu.designator F # Designator for the safety thermistor"

## docs/sd-card.md
## docs/search_site.md
## docs/sensor-types.md
## docs/simplify3d.md
## docs/smoopi.md
## docs/smoothie-accessory-protocol.md
## docs/smoothieboard-beta-guide.md
## docs/smoothieboard-beta.md
## docs/smoothieboard.md
## docs/smoothieboard-pcb.md
## docs/smoothieboard-schematic.md

## docs/smoothieboards.md
## docs/smoothieboard-v1.md
## docs/smoothieboard-v1-old.md
## docs/smoothieboard-v1-specifications.md
- Line 63: `alpha_current` - "alpha_current   1.5    # X axis motor current in Amps"
- Line 64: `beta_current` - "beta_current    1.5    # Y axis motor current"
- Line 65: `gamma_current` - "gamma_current   1.5    # Z axis motor current"
- Line 66: `delta_current` - "delta_current   1.5    # Extruder motor current"
- Line 76: `microseconds` - "microseconds    16     # 1/16 microstepping"
- Line 912: `alpha_current` - "alpha_current   1.5    # X motor (Amps)"
- Line 913: `beta_current` - "beta_current    1.5    # Y motor"
- Line 914: `gamma_current` - "gamma_current   1.5    # Z motor"
- Line 915: `delta_current` - "delta_current   1.5    # E (extruder) motor"
- Line 916: `epsilon_current` - "epsilon_current 1.5    # E1 (second extruder)"
- Line 921: `microseconds` - "microseconds    16     # 1/16 microstepping"
- Line 924: `microseconds` - "microseconds    32     # 1/32 microstepping (quieter)"
- Line 928: `temperature_control.hotend.enable` - "temperature_control.hotend.enable               true"
- Line 929: `temperature_control.hotend.thermistor_pin` - "temperature_control.hotend.thermistor_pin       0.23"
- Line 930: `temperature_control.hotend.heater_pin` - "temperature_control.hotend.heater_pin           2.7"
- Line 931: `temperature_control.hotend.thermistor` - "temperature_control.hotend.thermistor           Semitec"
- Line 932: `temperature_control.hotend.set_m_code` - "temperature_control.hotend.set_m_code           104"
- Line 933: `temperature_control.hotend.set_and_wait_m_code` - "temperature_control.hotend.set_and_wait_m_code  109"

## docs/smoothieboard-v2-original.md
## docs/smoothieboard-v2-prime.md
## docs/smoothiedriver.md
## docs/smoothie.md
## docs/smoothie-on-a-breadboard.md
- Line 190: `alpha_dir_pin` - "alpha_dir_pin                                2.7             # Pin for alpha stepper direction"
- Line 191: `alpha_step_pin` - "alpha_step_pin                               2.8             # Pin for alpha stepper step signal"
- Line 193: `beta_dir_pin` - "beta_dir_pin                                 2.11            # Pin for beta stepper direction"
- Line 194: `beta_step_pin` - "beta_step_pin                                2.12            # Pin for beta stepper step signal"
- Line 196: `gamma_dir_pin` - "gamma_dir_pin                                0.28!           # Pin for gamma stepper direction"
- Line 197: `gamma_step_pin` - "gamma_step_pin                               2.13            # Pin for gamma stepper step signal"
- Line 202: `currentcontrol_module_enable` - "currentcontrol_module_enable                 false             #"

## docs/smoothiepanelalpha.md

## docs/smoothiepanel-beta-errata.md
## docs/smoothiepanel-beta.md
## docs/smoothiepanel-gamma.md
## docs/smoothiepanel.md
## docs/software.md
## docs/spindle-control.md
## docs/spindle-module.md
- Line 25: `spindle.enable` - "set this to false to disable the spindle module"
- Line 51: `spindle.type` - "sets the spindle module to PWM mode"
- Line 52: `spindle.pwm_pin` - "Big Mosfet Q7. Pin must be hardware PWM capable."
- Line 53: `spindle.pwm_period` - "default 1000, sets the PWM frequency"
- Line 54: `spindle.feedback_pin` - "Pin must be interrupt capable."
- Line 55: `spindle.pulses_per_rev` - "default 1. Defines the number of pulses occur for each rotation"
- Line 56: `spindle.default_rpm` - "default 5000. Defines a default RPM value in case no RPM value is provided."
- Line 57: `spindle.control_P` - "default 0.0001. P value for the PID controller"
- Line 58: `spindle.control_I` - "default 0.0001. I value for the PID controller"
- Line 59: `spindle.control_D` - "default 0.0001. D value for the PID controller"
- Line 60: `spindle.control_smoothing` - "default 0.1. This value is low pass filter time constant in seconds."
- Line 84-92: `switch.servo.enable`, `switch.servo.input_on_command`, `switch.servo.input_off_command`, `switch.servo.output_pin`, `switch.servo.output_type`, `switch.servo.startup_state`, `switch.servo.startup_value`, `switch.servo.default_on_value`, `switch.servo.failsafe_set_to` - "ESCs act like hobby servos - 20 ms period time, 1.5-2ms duty cycle time - so instead of having modified the spindle code, I've created a switch for commands M3/M5."
- Line 126: `spindle.type` - "set the spindle type to analog, can also be used for ESC spindles controlled by a PWM"
- Line 127: `spindle.max_rpm` - "set the max spindle speed that is achieved at 100% PWM"
- Line 128: `spindle.pwm_pin` - "the pin which emits the PWM signal"
- Line 129: `spindle.pwm_period` - "the PWM frequency"
- Line 130: `spindle.switch_on_pin` - "the pin which is used to enable the VFD (optional)"
- Line 211: `spindle.type` - "set the spindle type to modbus/RS485"
- Line 212: `spindle.vfd_type` - "set the VFD type, this is necessary because each inverter uses its own commands"
- Line 213: `spindle.rx_pin` - "TX pin for the soft serial"
- Line 214: `spindle.tx_pin` - "RX pin for the soft serial"
- Line 215: `spindle.dir_pin` - "RS485 is only half-duplex, so we need a pin to switch between sending and receiving"

## docs/spindle-mosfet-control.md
- Line 88: `switch.spindle.enable` - "#"
- Line 89: `switch.spindle.input_on_command` - "M3"
- Line 90: `switch.spindle.input_off_command` - "M5"
- Line 91: `switch.spindle.output_pin` - "Here we are using the first big MOSFET"
- Line 92: `switch.spindle.output_type` - "pwm output settable with S parameter in the input_on_command"
- Line 93: `switch.spindle.max_pwm` - "set max pwm for the pin default is 255"

## docs/spindle-options.md
- Line 18: `spindle_enable` - "If set to true, enables the Spindle module, which uses an encoder to PID-control a PWM-modulated spindle motor"
- Line 19: `spindle_pwm_pin` - "Output PWM pin (uses hardware PWM). Note: hardware PWM is available only on pins 2.0 to 2.5, 1.18, 1.20, 1.21, 1.23, 1.24, 1.26, 3.25 and 3.26"
- Line 20: `spindle_pwm_period` - "PWM period to use in microseconds"
- Line 21: `spindle_feedback_pin` - "Feedback input pin (must be Port 0 or 2, meaning the pin number must be 2.x or 0.x)"
- Line 22: `spindle_pulses_per_rev` - "Number of feedback pulses per revolution on the feedback input pin"
- Line 23: `spindle_default_rpm` - "RPM to use if none given in M3 command, in rotations/minute"
- Line 24: `spindle_control_P` - "PID P factor (unit is 1 / RPM)"
- Line 25: `spindle_control_I` - "PID I factor (unit is 1 / ( RPM x seconds ))"
- Line 26: `spindle_control_D` - "PID D factor (unit is 1 / (R PM / seconds ))"

## docs/start.md
## docs/steinharthart.md
- Line 11: `temperature_control.hotend.rt_curve` - "20.0,126800,150,1360,240,206.5 - Where the 6 numbers are temperature/resistance pairs for three sets of readings."
- Line 48: `temperature_control.hotend.coefficients` - "0.000722376862540841,0.000216302098124288,0.000000092640163984"
- Line 72: `temperature_control.hotend.use_beta_table` - "force predefined thermistors to use the old beta values"

## docs/stepper-motors.md
- Line 116: `alpha_current` - "X stepper motor current - example value 1.68"
- Line 148: `alpha_steps_per_mm` - "Steps per mm for alpha stepper"
- Line 174: `alpha_dir_pin` - "Pin for alpha stepper direction"
- Line 180: `alpha_dir_pin` - "Pin for alpha stepper direction (with inversion example using !)"

## docs/stopping-smoothie.md
## docs/supported-g-codes.md
## docs/switch.md
- Line 22: `switch.fan1.enable` - "switch.fan1.enable                        true"
- Line 23: `switch.fan1.output_pin` - "switch.fan1.output_pin                    2.7"
- Line 26: `switch.fan2.enable` - "switch.fan2.enable                        true"
- Line 27: `switch.fan2.output_pin` - "switch.fan2.output_pin                    2.6"
- Line 30: `switch.zplus10.enable` - "switch.zplus10.enable                     true"
- Line 31: `switch.zplus10.input_pin` - "switch.zplus10.input_pin                  1.7"
- Line 32: `switch.zplus10.output_on_command` - "switch.zplus10.output_on_command          G91G0Z10G90"
- Line 52: `switch.fan1.startup_state` - "switch.fan1.startup_state                 false"
- Line 53: `switch.fan1.startup_value` - "switch.fan1.startup_value                 127"
- Line 69: `switch.fan1.input_pin` - "switch.fan1.input_pin                     1.7!"
- Line 70: `switch.fan1.input_pin_behavior` - "switch.fan1.input_pin_behavior            toggle"
- Line 78: `switch.fan1.output_pin` - "switch.fan1.output_pin                    2.7"
- Line 79: `switch.fan1.output_type` - "switch.fan1.output_type                  pwm"
- Line 80: `switch.fan1.max_pwm` - "switch.fan1.max_pwm                     255"
- Line 86: `switch.psu.output_type` - "switch.psu.output_type                    digital"
- Line 87: `switch.psu.output_pin` - "switch.psu.output_pin                      1.30o!"
- Line 98: `pwm_period_ms` - "the default frequency is 50Hz but can be set with the `pwm_period_ms` config setting"
- Line 106: `switch.fan1.input_on_command` - "switch.fan1.input_on_command              M106"
- Line 107: `switch.fan1.input_off_command` - "switch.fan1.input_off_command             M107"
- Line 129: `switch.fan.enable` - "switch.fan.enable                            true"
- Line 130: `switch.fan.input_on_command` - "switch.fan.input_on_command                  M106"
- Line 131: `switch.fan.input_off_command` - "switch.fan.input_off_command                 M107"
- Line 132: `switch.fan.output_pin` - "switch.fan.output_pin                        2.6"
- Line 133: `switch.fan.output_type` - "switch.fan.output_type                       pwm"
- Line 145: `switch.servo.enable` - "switch.servo.enable                            true"
- Line 146: `switch.servo.input_on_command` - "switch.servo.input_on_command                  M280"
- Line 147: `switch.servo.input_off_command` - "switch.servo.input_off_command                 M281"
- Line 148: `switch.servo.output_pin` - "switch.servo.output_pin                        3.25"
- Line 149: `switch.servo.output_type` - "switch.servo.output_type                       swpwm"
- Line 158: `switch.servo2.enable` - "switch.servo2.enable                            true"
- Line 159: `switch.servo2.input_on_command` - "switch.servo2.input_on_command                  M280"
- Line 160: `switch.servo2.input_off_command` - "switch.servo2.input_off_command                 M281"
- Line 161: `switch.servo2.subcode` - "switch.servo2.subcode                           1"
- Line 162: `switch.servo2.output_pin` - "switch.servo2.output_pin                        3.26"
- Line 163: `switch.servo2.output_type` - "switch.servo2.output_type                       hwpwm"
- Line 181: `switch.filamentout.enable` - "switch.filamentout.enable                true"
- Line 182: `switch.filamentout.input_pin` - "switch.filamentout.input_pin             1.30^"
- Line 183: `switch.filamentout.output_on_command` - "switch.filamentout.output_on_command     suspend"
- Line 185: `switch.resume.enable` - "switch.resume.enable                     true"
- Line 186: `switch.resume.input_pin` - "switch.resume.input_pin                  1.31^"
- Line 187: `switch.resume.output_on_command` - "switch.resume.output_on_command          resume"
- Line 189: `after_suspend_gcode` - "after_suspend_gcode                      G91_G0E-5_G0Z10_G90_G0X-50Y-50"
- Line 190: `before_resume_gcode` - "before_resume_gcode                      G91_G1E1_G90"
- Line 200: `switch.suspend.enable` - "switch.suspend.enable                true"
- Line 201: `switch.suspend.input_pin` - "switch.suspend.input_pin             1.30^"
- Line 202: `switch.suspend.output_on_command` - "switch.suspend.output_on_command     suspend"
- Line 204: `switch.resume.enable` - "switch.resume.enable                 true"
- Line 205: `switch.resume.input_pin` - "switch.resume.input_pin              1.31^"
- Line 206: `switch.resume.output_on_command` - "switch.resume.output_on_command      resume"
- Line 208: `after_suspend_gcode` - "after_suspend_gcode                  G91_G0E-5_G0Z10_G90_G0X-50Y-50"
- Line 209: `before_resume_gcode` - "before_resume_gcode                  G91_G1E1_G90"
- Line 219: `switch.pause.enable` - "switch.pause.enable                true"
- Line 220: `switch.pause.input_pin` - "switch.pause.input_pin             1.30^"
- Line 221: `switch.pause.output_on_command` - "switch.pause.output_on_command     suspend"
- Line 222: `switch.pause.output_off_command` - "switch.pause.output_off_command    resume"
- Line 223: `switch.pause.input_pin_behavior` - "switch.pause.input_pin_behavior    toggle"
- Line 225: `after_suspend_gcode` - "after_suspend_gcode                  G91_G0E-5_G0Z10_G90_G0X-50Y-50"
- Line 226: `before_resume_gcode` - "before_resume_gcode                  G91_G1E1_G90"
- Line 234: `switch.spindle.enable` - "switch.spindle.enable                true"
- Line 235: `switch.spindle.input_pin` - "switch.spindle.input_pin             1.30^"
- Line 236: `switch.spindle.output_on_command` - "switch.spindle.output_on_command     M3"
- Line 237: `switch.spindle.output_off_command` - "switch.spindle.output_off_command    M5"
- Line 238: `switch.spindle.input_pin_behavior` - "switch.spindle.input_pin_behavior    toggle"
- Line 247: `switch.laser.enable` - "switch.laser.enable                            true"
- Line 248: `switch.laser.input_on_command` - "switch.laser.input_on_command                  M106"
- Line 249: `switch.laser.input_off_command` - "switch.laser.input_off_command                 M107"
- Line 250: `switch.laser.output_pin` - "switch.laser.output_pin                        1.31"
- Line 253: `laser_module_ttl_pin` - "using the `laser_module_ttl_pin` configuration option"
- Line 266: `switch.reset.enable` - "switch.reset.enable                true"
- Line 267: `switch.reset.input_pin` - "switch.reset.input_pin             1.30^"
- Line 268: `switch.reset.output_on_command` - "switch.reset.output_on_command     reset"
- Line 286: `switch.z-1.enable` - "switch.z-1.enable                            true"
- Line 287: `switch.z-1.input_on_command` - "switch.z-1.input_on_command                  M1001"
- Line 288: `switch.z-1.input_off_command` - "switch.z-1.input_off_command                 M1011"
- Line 289: `switch.z-1.output_pin` - "switch.z-1.output_pin                        1.31"
- Line 292: `switch.z-2.enable` - "switch.z-2.enable                            true"
- Line 293: `switch.z-2.input_on_command` - "switch.z-2.input_on_command                  M1002"
- Line 294: `switch.z-2.input_off_command` - "switch.z-2.input_off_command                 M1012"
- Line 295: `switch.z-2.output_pin` - "switch.z-2.output_pin                        1.30"

## docs/switch-options.md
- Line 11: `switch.module_name.enable` - "Create and enable a new Switch module if set to true"
- Line 12: `switch.module_name.input_pin` - "When this pin becomes high the switch changes to the ON state"
- Line 13: `switch.module_name.input_pin_behavior` - "If set to momentary when the input pin becomes high the switch changes to the ON state"
- Line 14: `switch.module_name.input_on_command` - "Calling this command sets the switch ON"
- Line 15: `switch.module_name.input_off_command` - "Calling this command sets the switch OFF"
- Line 16: `switch.module_name.subcode` - "the subcode that the input on or input off commands respond to `M106.1`"
- Line 17: `switch.module_name.output_on_command` - "This command is called when the switch changes to the ON state"
- Line 18: `switch.module_name.output_off_command` - "This command is called when the switch changes to the OFF state"
- Line 19: `switch.module_name.output_pin` - "This pin will be set low when the switch is OFF, and high when the switch is ON"
- Line 20: `switch.module_name.output_type` - "Sets the type of output for the `output_pin`, if set to digital the pin can only be low or high"
- Line 21: `switch.module_name.startup_state` - "Startup state of the switch. If set to false the module is initialized OFF"
- Line 22: `switch.module_name.startup_value` - "Startup value of the switch if the `output_type` is any kind of pwm"
- Line 23: `switch.module_name.default_on_value` - "Default on setting value of the switch if the `output_type` is swpwm or hwpwm"
- Line 24: `switch.module_name.max_pwm` - "Maximum value for the PWM output. (only used for pwm output type, not for hwpwm)"
- Line 25: `switch.module_name.pwm_period_ms` - "Period used by the H/W and S/W PWM, 20ms is 50Hz which is the default if not set"
- Line 26: `switch.module_name.failsafe_set_to` - "0 or 1 what to set the output pin to in case of a crash or HALT condition"
- Line 27: `switch.module_name.ignore_on_halt` - "set to true to not set the failsafe or `startup_value` value when a HALT condition is triggered"

## docs/syntax.md
## docs/syringe-covid19-notes.md
## docs/temperaturecontrol-fine-tuning.md
- Line 16: `temperature_control.hotend.max_pwm` - "You need to set `max_pwm` to 64:"
- Line 19: `temperature_control.hotend.max_pwm 64` - "temperature_control.hotend.max_pwm 64"
- Line 24: `i_max` - "If you are getting 10°C or more initial overshoot of temperature, you can set `i_max` to a lower value"
- Line 26: `M301 S0 Xnnn` - "but it can be tuned with `M301 S0 Xnnn`"
- Line 29: `temperature_control.hotend.i_max` - "temperature_control.hotend.i_max 128"
- Line 34: `max_temp` - "To avoid accidental setting of too high a temperature, you can set `max_temp`"
- Line 42: `temperature_control.hotend.max_temp` - "temperature_control.hotend.max_temp 230"

## docs/temperaturecontrol.md
- Line 23: `temperature_control.hotend.enable` - "temperature_control.hotend.enable                    true"
- Line 24: `temperature_control.hotend.thermistor_pin` - "temperature_control.hotend.thermistor_pin            0.23"
- Line 27: `temperature_control.bed.enable` - "temperature_control.bed.enable                       true"
- Line 28: `temperature_control.bed.thermistor_pin` - "temperature_control.bed.thermistor_pin               0.24"
- Line 53: `temperature_control.hotend.thermistor_pin` - "temperature_control.hotend.thermistor_pin        0.23"
- Line 99: `temperature_control.hotend.sensor` - "temperature_control.hotend.sensor        max31855"
- Line 103: `temperature_control.hotend.chip_select_pin` - "temperature_control.hotend.chip_select_pin    0.16"
- Line 104: `temperature_control.hotend.spi_channel` - "temperature_control.hotend.spi_channel         0"
- Line 113: `temperature_control.module_name.readings_per_second` - "temperature_control.module_name.readings_per_second      4"
- Line 123: `temperature_control.hotend.sensor` - "temperature_control.hotend.sensor    ad8495"
- Line 130: `temperature_control.hotend.ad8495_pin` - "temperature_control.hotend.ad8495_pin   0.24"
- Line 139: `temperature_control.hotend.ad8495_offset` - "temperature_control.hotend.ad8495_offset   250"
- Line 169: `temperature_control.hotend.heater_pin` - "temperature_control.hotend.heater_pin        2.7"
- Line 189: `temperature_control.hotend.set_m_code` - "temperature_control.hotend.set_m_code            104"
- Line 190: `temperature_control.hotend.set_and_wait_m_code` - "temperature_control.hotend.set_and_wait_m_code   109"
- Line 209: `temperature_control.hotend.designator` - "temperature_control.hotend.designator        T"
- Line 220: `temperature_control.bed.bang_bang` - "temperature_control.bed.bang_bang            true"
- Line 221: `temperature_control.bed.hysteresis` - "temperature_control.bed.hysteresis            2.0"
- Line 284: `temperature_control.module_name.max_temp` - "temperature_control.module_name.max_temp      300"
- Line 323: `temperature_control.module_name.runaway_heating_timeout` - "temperature_control.module_name.runaway_heating_timeout      120"
- Line 336: `runaway_error_range` - "you can add `runaway_error_range` as a parameter"
- Line 340: `runaway_cooling_timeout` - "NOTE** If you set `runaway_cooling_timeout`"

## docs/temperaturecontrol-options.md
- Line 10: `temperature_control.[module_name].enable` - "Whether to activate this temperaturecontrol module"
- Line 11: `temperature_control.[module_name].thermistor_pin` - "Pin for the thermistor to read. ADC ports TH1 to TH4 are pins 0.23 to 0.26"
- Line 12: `temperature_control.[module_name].readings_per_second` - "How many times per second to read temperature from the sensor"
- Line 13: `temperature_control.[module_name].pwm_frequency` - "How many times per second to switch the heating element on or off"
- Line 14: `temperature_control.[module_name].heater_pin` - "Pin that controls the heater"
- Line 15: `temperature_control.[module_name].thermistor` - "Set the thermistor model for this module"
- Line 16: `temperature_control.[module_name].beta` - "Manually set the `beta` value for your thermistor"
- Line 17: `temperature_control.[module_name].r0` - "Manually set the `r0` resistance value for your thermistor"
- Line 18: `temperature_control.[module_name].get_m_code` - "Calling this M-code will return the current temperature"
- Line 19: `temperature_control.[module_name].set_m_code` - "This is the M-code for simply setting the temperature"
- Line 20: `temperature_control.[module_name].set_and_wait_m_code` - "This is the M-code for setting the temperature then waiting"
- Line 21: `temperature_control.[module_name].designator` - "The letter this module's temperature will be identified as in the M105 command"
- Line 22: `temperature_control.[module_name].p_factor` - "P factor for PID temperature regulation"
- Line 23: `temperature_control.[module_name].i_factor` - "I factor for PID temperature regulation"
- Line 24: `temperature_control.[module_name].d_factor` - "D factor for PID temperature regulation"
- Line 25: `temperature_control.[module_name].max_pwm` - "Maximum PWM value for the heating element"
- Line 26: `temperature_control.[module_name].bang_bang` - "Set to true to use bang bang control rather than PID"
- Line 27: `temperature_control.[module_name].hysteresis` - "Set to the temperature in degrees C to use as hysteresis for bang bang control"
- Line 28: `temperature_control.[module_name].i_max` - "Maximum value for the I variable in the PID control"
- Line 29: `temperature_control.[module_name].sensor` - "Set the type of sensor used to read temperature"
- Line 30: `temperature_control.[module_name].chip_select_pin` - "If the sensor is set to `max31855`, sets the chip select pin for the SPI port"
- Line 31: `temperature_control.[module_name].spi_channel` - "If the sensor is set to `max31855`, SPI channel using which to talk to the thermocouple chip"
- Line 32: `temperature_control.[module_name].max_temp` - "If set, no temperature above this will be accepted"
- Line 33: `temperature_control.[module_name].runaway_heating_timeout` - "If we take longer than this many seconds to heatup"
- Line 34: `temperature_control.[module_name].runaway_cooling_timeout` - "If we take longer than this many seconds to cooldown"
- Line 35: `temperature_control.[module_name].runaway_range` - "If set to non-zero, and the target temperature is reached"

## docs/temperaturecontrol-pid-autotuning.md
- Line 9: `M303 E0 S190` - "M303 E0 S190"
- Line 47: `M500` - "M500"

## docs/temperaturecontrol-pid.md
- Line 52: `temperature_control.hotend.p_factor` - "temperature_control.hotend.p_factor     100"
- Line 53: `temperature_control.hotend.i_factor` - "temperature_control.hotend.i_factor     0.1"
- Line 54: `temperature_control.hotend.d_factor` - "temperature_control.hotend.d_factor     100"
- Line 87: `M303 E0 S200` - "M303 E0 S200"
- Line 111: `p_factor` - "p_factor = 100"
- Line 112: `i_factor` - "i_factor = 0.1"
- Line 113: `d_factor` - "d_factor = 100"
- Line 213: `temperature_control.hotend.pwm_frequency` - "temperature_control.hotend.pwm_frequency    1000"
- Line 223: `temperature_control.hotend.bang_bang` - "temperature_control.hotend.bang_bang    true"


## docs/temperaturecontrol-thermistor-choice.md
- Line 9: `temperature_control.hotend.thermistor` - "```markdown\ntemperature_control.hotend.thermistor        EPCOS100K\n```"
- Line 34: `temperature_control.hotend.beta` - "```markdown\ntemperature_control.hotend.beta       4066   # set beta for thermistor\n```"
- Line 53: `temperature_control.hotend.coefficients` - "```markdown\ntemperature_control.hotend.coefficients 0.000722376862540841,0.000216302098124288,0.000000092640163984\n```"
- Line 61: `temperature_control.hotend.rt_curve` - "```markdown\ntemperature_control.hotend.rt_curve          20.0,126800,150,1360,240,206.5\n```"

## docs/temperatureswitch.md
- Line 19: `temperatureswitch.hotend.enable` - "temperatureswitch.hotend.enable              true             # enable this module"
- Line 20: `temperatureswitch.hotend.switch` - "temperatureswitch.hotend.switch              fan2             # select which MOSFET to use, must match a switch configuration (fan2 below)"
- Line 21: `temperatureswitch.hotend.designator` - "temperatureswitch.hotend.designator          T                # first character of the temperature control designator to use as the temperature sensor to monitor"
- Line 22: `temperatureswitch.hotend.threshold_temp` - "temperatureswitch.hotend.threshold_temp      60.0             # temperature to turn on (if rising) or off the switch"
- Line 23: `temperatureswitch.hotend.heatup_poll` - "temperatureswitch.hotend.heatup_poll         15               # poll heatup at 15 sec intervals"
- Line 24: `temperatureswitch.hotend.cooldown_poll` - "temperatureswitch.hotend.cooldown_poll       60               # poll cooldown at 60 sec intervals"
- Line 26: `switch.fan2.enable` - "switch.fan2.enable                           true             # enable"
- Line 27: `switch.fan2.input_on_command` - "switch.fan2.input_on_command                 M42              # gcode to turn on"
- Line 28: `switch.fan2.input_off_command` - "switch.fan2.input_off_command                M43              # gcode to turn off"
- Line 29: `switch.fan2.output_pin` - "switch.fan2.output_pin                       2.4              # pin that controls the fan"
- Line 35: `temperatureswitch.motor.enable` - "temperatureswitch.motor.enable               true             #"
- Line 36: `temperatureswitch.motor.switch` - "temperatureswitch.motor.switch               motorfan         #"
- Line 37: `temperatureswitch.motor.designator` - "temperatureswitch.motor.designator           M                #"
- Line 39: `switch.motorfan.enable` - "switch.motorfan.enable                       true             # enable"
- Line 40: `switch.motorfan.input_on_command` - "switch.motorfan.input_on_command             M42              # gcode to turn on"
- Line 41: `switch.motorfan.input_off_command` - "switch.motorfan.input_off_command            M43              # gcode to turn off"
- Line 42: `switch.motorfan.output_pin` - "switch.motorfan.output_pin                   2.4              # pin that controls the fan"
- Line 45: `temperature_control.motor.enable` - "temperature_control.motor.enable             true             # Whether to activate this ( \"hotend\" ) module at all. All configuration is ignored if false."
- Line 46: `temperature_control.motor.thermistor_pin` - "temperature_control.motor.thermistor_pin     0.24             # Pin for the thermistor to read"
- Line 47: `temperature_control.motor.heater_pin` - "temperature_control.motor.heater_pin         nc               # set to nc to make it a readonly temperature control"
- Line 48: `temperature_control.motor.thermistor` - "temperature_control.motor.thermistor         EPCOS100K        # thermistor name"
- Line 49: `temperature_control.motor.designator` - "temperature_control.motor.designator         M                # designator"
- Line 55: `temperatureswitch.psu_off.enable` - "temperatureswitch.psu_off.enable              true             #"
- Line 56: `temperatureswitch.psu_off.designator` - "temperatureswitch.psu_off.designator          T                # first character of the temperature control designator to use as the temperature sensor to monitor"
- Line 57: `temperatureswitch.psu_off.switch` - "temperatureswitch.psu_off.switch              psu              # select which switch to use, matches the name of the defined switch"
- Line 58: `temperatureswitch.psu_off.threshold_temp` - "temperatureswitch.psu_off.threshold_temp      50.0             # temperature to trigger at when falling"
- Line 59: `temperatureswitch.psu_off.heatup_poll` - "temperatureswitch.psu_off.heatup_poll         30               # poll heatup every 30 seconds"
- Line 60: `temperatureswitch.psu_off.cooldown_poll` - "temperatureswitch.psu_off.cooldown_poll       30               # poll cooldown every 30 seconds"
- Line 61: `temperatureswitch.psu_off.arm_mcode` - "temperatureswitch.psu_off.arm_mcode           1100             # M1100 S1 will arm it"
- Line 62: `temperatureswitch.psu_off.trigger` - "temperatureswitch.psu_off.trigger             falling          # only trigger when the temp falls below after being above"
- Line 63: `temperatureswitch.psu_off.inverted` - "temperatureswitch.psu_off.inverted            false            # turn the switch off when we trigger (by default switches on when rising and off when falling)"

## docs/temperatureswitch-options.md
- Line 17: `temperatureswitch.module_name.enable` - "Create and enable a new TemperatureSwitch module if set to true."
- Line 18: `temperatureswitch.module_name.designator` - "Specify which TemperatureControl module to read temperature from, must match the designator for that module."
- Line 19: `temperatureswitch.module_name.switch` - "Specify the name of the Switch module to be toggled."
- Line 20: `temperatureswitch.module_name.threshold_temp` - "Turn the switch ON above this temperature (in °C), and OFF below this temperature."
- Line 21: `temperatureswitch.module_name.heatup_poll` - "Poll temperature at this frequency (in seconds) when heating up."
- Line 22: `temperatureswitch.module_name.cooldown_poll` - "Poll temperature at this frequency (in seconds) when cooling down."
- Line 23: `temperatureswitch.module_name.trigger` - "Can be `level`, `rising`, `falling` - `level` is the default."
- Line 24: `temperatureswitch.module_name.inverted` - "Will turn the switch off when the temp > target and vice versa when set to `true`."
- Line 25: `temperatureswitch.module_name.arm_mcode` - "M code used to arm the edge triggered switch, e.g., `M1100 S1` arms it."

## docs/test-components.md
## docs/test.md
- Line 44: `test_parameter` - "| `test_parameter` | `true` | This is a test parameter |" (Note: This appears to be example documentation, not a real config option)

## docs/third-party-branches.md
## docs/three-point-strategy-options.md
- Line 11: `leveling-strategy.three-point-leveling.enable` - "Set to `true` to enable the leveling strategy that probes three points to define a plane and then keeps the Z parallel to that plane."
- Line 12: `leveling-strategy.three-point-leveling.point1` - "The first probe point (X, Y)."
- Line 13: `leveling-strategy.three-point-leveling.point2` - "The second probe point (X, Y)."
- Line 14: `leveling-strategy.three-point-leveling.point3` - "The third probe point (X, Y)."
- Line 15: `leveling-strategy.three-point-leveling.home_first` - "Home the X and Y axes before probing."
- Line 16: `leveling-strategy.three-point-leveling.tolerance` - "The probe tolerance in millimeters, anything less than this will be ignored, default is `0.03mm`."
- Line 17: `leveling-strategy.three-point-leveling.probe_offsets` - "The probe offset from nozzle, must be X,Y,Z (Z should always be 0), default is no offset."
- Line 18: `leveling-strategy.three-point-leveling.save_plane` - "Set to `true` to allow the bed plane to be saved with `M500`, default is `false`."

## docs/todo.md
## docs/tools.md
## docs/touchprobe.md
- Line 92: `touchprobe_enable` - "touchprobe_enable                   false              # enables/disables the module (other values ignored if false)"
- Line 93: `touchprobe_log_enable` - "touchprobe_log_enable               false              # should the touches be logged to file"
- Line 94: `touchprobe_logfile_name` - "touchprobe_logfile_name             /sd/probe_log.csv  # location of the log file"
- Line 95: `touchprobe_log_rotate_mcode` - "touchprobe_log_rotate_mcode         0                  # adds a spacer to logfile if Mxxx is issued"
- Line 96: `touchprobe_pin` - "touchprobe_pin                      nc                 # selects the pin where the probe is connected"
- Line 97: `touchprobe_debounce_count` - "touchprobe_debounce_count           100                # reports touch if probe active for this many ticks (prevents false positives)"

## docs/troubleshooting.md

## docs/uart.md
- Line 24: `uart0.baud_rate` - "You configure the baud rate for the UART port in the [configuration file](configuring-smoothie) by changing the `uart0.baud_rate` configuration option."

## docs/utils.md
- Line 61: `play_led_disable` - "play_led_disable                false              # Enable play LED"
- Line 64: `currentcontrol_module_enable` - "currentcontrol_module_enable    true               # Enable digital current control"

## docs/zprobe.md
- Line 63: `gamma_min_endstop` - "gamma_min_endstop            nc                 # normally 1.28. Change to nc to prevent conflict, not needed on Azteeg X5"
- Line 65: `zprobe.enable` - "zprobe.enable                true               # set to true to enable a zprobe"
- Line 66: `zprobe.probe_pin` - "zprobe.probe_pin             1.28!^             # pin probe is attached to if NC remove the !, Azteeg X5 this is 1.29"
- Line 67: `zprobe.slow_feedrate` - "zprobe.slow_feedrate         5                  # mm/sec probe feed rate"
- Line 68: `zprobe.debounce_ms` - "#zprobe.debounce_ms          1                  # set if noisy"
- Line 69: `zprobe.fast_feedrate` - "zprobe.fast_feedrate         100                # move feedrate"
- Line 70: `zprobe.probe_height` - "zprobe.probe_height          5                  # how much above bed to start probe NB only needed for G32 on delta"
- Line 71: `zprobe.return_feedrate` - "zprobe.return_feedrate       0                  # feedrate after a probe, default 0 is double of slow_feedrate (mm/s)"
- Line 72: `zprobe.max_z` - "zprobe.max_z                 200                # maximum default travel for the probe command, will use gamma_max if not defined"
- Line 129: `delta_homing` - "Make sure the config has `delta_homing` true set and that `zprobe.max_z` is set to about 20-30mm shorter than the distance to the bed"
- Line 134: `leveling-strategy.delta-calibration.enable` - "leveling-strategy.delta-calibration.enable   true            # basic delta calibration"
- Line 135: `leveling-strategy.delta-calibration.radius` - "leveling-strategy.delta-calibration.radius   100             # the probe radius"
- Line 136: `leveling-strategy.delta-calibration.initial_height` - "leveling-strategy.delta-calibration.initial_height 10        # height above bed to stop initial move"
- Line 173: `leveling-strategy.delta-calibration.enable` - "leveling-strategy.delta-calibration.enable                true      # Set to true to enable the delta calibration leveling strategy."
- Line 176: `leveling-strategy.delta-calibration.radius` - "leveling-strategy.delta-calibration.radius                100       # Radius at which to probe the three points"
- Line 177: `leveling-strategy.delta-calibration.initial_height` - "leveling-strategy.delta-calibration.initial_height        10        # The initial height above the bed we stop the initial move down after home"
- Line 268: `leveling-strategy.delta-grid.enable` - "leveling-strategy.delta-grid.enable         true"
- Line 274: `leveling-strategy.delta-grid.radius` - "leveling-strategy.delta-grid.radius        50"
- Line 282: `leveling-strategy.delta-grid.size` - "leveling-strategy.delta-grid.size        7"
- Line 288: `leveling-strategy.delta-grid.do_home` - "leveling-strategy.delta-grid.do_home         true"
- Line 296: `leveling-strategy.delta-grid.do_home` - "leveling-strategy.delta-grid.do_home        false"
- Line 309: `leveling-strategy.delta-grid.probe_offsets` - "leveling-strategy.delta-grid.probe_offsets  0,0,0  # probe offsets x,y,z  (Z should always be 0)"
- Line 324: `leveling-strategy.delta-grid.save` - "leveling-strategy.delta-grid.save        true"
- Line 339: `leveling-strategy.delta-grid.initial_height` - "leveling-strategy.delta-grid.initial_height  10"
- Line 353: `leveling-strategy.delta-grid.enable` - "leveling-strategy.delta-grid.enable               true     # The strategy must be enabled in the config, as well as the zprobe module."
- Line 354: `leveling-strategy.delta-grid.radius` - "leveling-strategy.delta-grid.radius               50       # Radius of the bed, must be specified."
- Line 357: `leveling-strategy.delta-grid.size` - "leveling-strategy.delta-grid.size                 7        # The size of the grid, for example, 7 causes a 7x7 grid with 49 points."
- Line 359: `leveling-strategy.delta-grid.probe_offsets` - "leveling-strategy.delta-grid.probe_offsets        0,0,0    # Optional probe offsets from the nozzle or tool head"
- Line 360: `leveling-strategy.delta-grid.save` - "leveling-strategy.delta-grid.save                 false    # If the saved grid is to be loaded on boot then this must be set to true"
- Line 361: `leveling-strategy.delta-grid.initial_height` - "leveling-strategy.delta-grid.initial_height       10       # Optionally an initial_height can be set that tell the initial probe"

## docs/zprobe-options.md
- Line 14: `zprobe.enable` - "| `zprobe.enable` | `true` | Set to true to enable the Z-probe module. This is used to scan surfaces, and to calibrate parameters and compensate for non-planar surfaces. |"
- Line 15: `zprobe.probe_pin` - "| `zprobe.probe_pin` | `1.28!^` | Pin the probe is connected to. |"
- Line 16: `zprobe.slow_feedrate` - "| `zprobe.slow_feedrate` | `5` | Speed in millimetres/second at which the probe seeks a surface. |"
- Line 17: `zprobe.fast_feedrate` - "| `zprobe.fast_feedrate` | `100` | Speed in millimetres/second at which the probe does fast moves. |"
- Line 18: `zprobe.return_feedrate` - "| `zprobe.return_feedrate` | `50` | Speed in millimetres/second at which the probe does the return after a probe. |"
- Line 19: `zprobe.debounce_ms` - "| `zprobe.debounce_ms` | `1` | Debounce the probe pin over this number of milliseconds. Set to 1 or 2 if your probe is too noisy and gives false readings. |"
- Line 20: `zprobe.probe_height` - "| `zprobe.probe_height` | `5` | Distance above the bed at which the probing is started, once the bed's height is known. |"
- Line 21: `zprobe.max_z` - "| `zprobe.max_z` | `200` | Maximum Z (was gamma_max) |"
- Line 22: `zprobe.dwell_before_probing` - "| `zprobe.dwell_before_probing` | `0.2` | Dwell time in seconds before probing. Useful for piezo Z-probe to avoid false trigger. |"

## docs/unboxing-fr.md
## docs/unboxing.md
## docs/usb.md
## docs/using-fsrs.md
## docs/v1.md
## docs/voltageregulator.md
## docs/warning.md
## docs/welcome.md
## docs/wifi.md
## docs/windows-drivers.md
## docs/windows-systeminfo.md
## docs/z-probe-guide.md


---

**Note:** This document consolidates config option mentions from all markdown files in the docs/ directory. Each entry shows the line number and a context quote where the option was found. Options may appear multiple times across different files as they are referenced in various contexts (examples, guides, specifications, etc.).

**Related Documentation:**
- See `src/docs/smoothieware-v1-config.md` for the comprehensive configuration reference
- See `src/docs/config-comparison-v1-v2.md` for v1 to v2 migration information
