---
permalink: /temperatureswitch
---


# TemperatureSwitch

TemperatureSwitch is an optional module that automatically controls an output (typically to control one of the small MOSFETs) through a [Switch](switch) module, based on a configurable threshold temperature.

It is commonly used to turn on/off a cooling fan or water pump to cool a 3D printer [extruder](extruder) hot end's cold zone.

Simply, TemperatureSwitch turns on/off the `switch.xxx` where `xxx` is the user-defined `switch.xxx` = `fan` or `misc` in the default configuration files.

If the printer has multiple hot ends, TemperatureSwitch will monitor all of them and if any one goes over the threshold, will turn on the switch. It will only turn the switch off if all of them are below the threshold temperature.

Since hot ends heat up relatively quickly and cool off slowly, the polling interval for heatup and cooldown are independently configurable in the [configuration file](configuring-smoothie). This is done to minimize processor load during printing.



Here's a description of the configurable parameters:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**Basic hotend cooling fan configuration (V1):**

```
# automatically toggle a switch at a specified temperature
# useful to turn on a fan or water pump to cool the hotend
temperatureswitch.hotend.enable              true             # enable this module
temperatureswitch.hotend.switch              fan2             # select which MOSFET to use, must match a switch configuration (fan2 below)
temperatureswitch.hotend.designator          T                # first character of the temperature control designator to use as the temperature sensor to monitor
temperatureswitch.hotend.threshold_temp      60.0             # temperature to turn on (if rising) or off the switch
temperatureswitch.hotend.heatup_poll         15               # poll heatup at 15 sec intervals
temperatureswitch.hotend.cooldown_poll       60               # poll cooldown at 60 sec intervals

switch.fan2.enable                           true             # enable
switch.fan2.input_on_command                 M42              # gcode to turn on
switch.fan2.input_off_command                M43              # gcode to turn off
switch.fan2.output_pin                       2.4              # pin that controls the fan
```

Many temperatureswitch instances can be defined that monitor different temperatures and trigger different switches. For instance, one to turn a motor fan on and off. Also note that a readonly temperature control can be defined:

```
temperatureswitch.motor.enable               true             #
temperatureswitch.motor.switch               motorfan         #
temperatureswitch.motor.designator           M                #

switch.motorfan.enable                       true             # enable
switch.motorfan.input_on_command             M42              # gcode to turn on
switch.motorfan.input_off_command            M43              # gcode to turn off
switch.motorfan.output_pin                   2.4              # pin that controls the fan

# define a readonly temperaturecontrol for a motor
temperature_control.motor.enable             true             # Whether to activate this ( "hotend" ) module at all. All configuration is ignored if false.
temperature_control.motor.thermistor_pin     0.24             # Pin for the thermistor to read
temperature_control.motor.heater_pin         nc               # set to nc to make it a readonly temperature control
temperature_control.motor.thermistor         EPCOS100K        # thermistor name
temperature_control.motor.designator         M                # designator
```

**Advanced example - PSU auto-shutdown:**

Turn the PSU off when the hotend temp cools below 50°C, only after M1100 S1 has been executed to arm it:

```
temperatureswitch.psu_off.enable              true             #
temperatureswitch.psu_off.designator          T                # first character of the temperature control designator to use as the temperature sensor to monitor
temperatureswitch.psu_off.switch              psu              # select which switch to use, matches the name of the defined switch
temperatureswitch.psu_off.threshold_temp      50.0             # temperature to trigger at when falling
temperatureswitch.psu_off.heatup_poll         30               # poll heatup every 30 seconds
temperatureswitch.psu_off.cooldown_poll       30               # poll cooldown every 30 seconds
temperatureswitch.psu_off.arm_mcode           1100             # M1100 S1 will arm it
temperatureswitch.psu_off.trigger             falling          # only trigger when the temp falls below after being above
temperatureswitch.psu_off.inverted            false            # turn the switch off when we trigger (by default switches on when rising and off when falling)
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**Basic hotend cooling fan configuration (V2):**

```ini
[temperature switch]
# automatically toggle a switch at a specified temperature
# useful to turn on a fan or water pump to cool the hotend
hotend.enable = true                    # enable this module
hotend.switch = fan2                    # select which switch to use, must match a switch configuration (fan2 below)
hotend.designator = T                   # first character of the temperature control designator to use as the temperature sensor to monitor
hotend.threshold_temp = 60.0            # temperature to turn on (if rising) or off the switch
hotend.heatup_poll = 15                 # poll heatup at 15 sec intervals
hotend.cooldown_poll = 60               # poll cooldown at 60 sec intervals
hotend.trigger = level                  # continuous control (on when above, off when below)
hotend.inverted = false                 # normal operation (fan on when hot)

[switch]
fan2.enable = true                      # enable
fan2.input_on_command = M42             # gcode to turn on
fan2.input_off_command = M43            # gcode to turn off
fan2.output_pin = 2.4                   # pin that controls the fan
```

Many temperatureswitch instances can be defined that monitor different temperatures and trigger different switches. For instance, one to turn a motor fan on and off. Also note that a readonly temperature control can be defined:

```ini
[temperature switch]
motor.enable = true                     #
motor.switch = motorfan                 #
motor.designator = M                    #

[switch]
motorfan.enable = true                  # enable
motorfan.input_on_command = M42         # gcode to turn on
motorfan.input_off_command = M43        # gcode to turn off
motorfan.output_pin = 2.4               # pin that controls the fan

[temperature control]
# define a readonly temperaturecontrol for a motor
motor.enable = true                     # Whether to activate this ( "hotend" ) module at all. All configuration is ignored if false.
motor.thermistor_pin = 0.24             # Pin for the thermistor to read
motor.heater_pin = nc                   # set to nc to make it a readonly temperature control
motor.thermistor = EPCOS100K            # thermistor name
motor.designator = M                    # designator
```

**Advanced example - PSU auto-shutdown:**

Turn the PSU off when the hotend temp cools below 50°C, only after M1100 S1 has been executed to arm it:

```ini
[temperature switch]
psu_off.enable = true                   #
psu_off.designator = T                  # first character of the temperature control designator to use as the temperature sensor to monitor
psu_off.switch = psu                    # select which switch to use, matches the name of the defined switch
psu_off.threshold_temp = 50.0           # temperature to trigger at when falling
psu_off.heatup_poll = 30                # poll heatup every 30 seconds
psu_off.cooldown_poll = 30              # poll cooldown every 30 seconds
psu_off.arm_mcode = 1100                # M1100 S1 will arm it
psu_off.trigger = falling               # only trigger when the temp falls below after being above
psu_off.inverted = false                # turn the switch off when we trigger (by default switches on when rising and off when falling)
psu_off.start_armed = false             # NEW IN V2: starts disarmed, must be armed manually
```

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>New in V2: start_armed Setting</strong><br>
  Smoothieware V2 introduces the <code>start_armed</code> parameter to control the initial armed state when using <code>arm_mcode</code>. Set to <code>true</code> to have the switch start armed on boot, or <code>false</code> to require manual arming.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}



## All options

{% include modules/temperature/temperatureswitch-options-for-include.md %}

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  If you want to learn more about this module, or are curious how it works, Smoothie is Open-Source and you can simply go look at the code, <a href="https://github.com/Smoothieware/Smoothieware/blob/edge/src/modules/tools/temperatureswitch/TemperatureSwitch.cpp">here</a>.
</sl-alert>
{:/nomarkdown}
