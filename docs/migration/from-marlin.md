---
layout: default
title: Moving from Marlin to Smoothie
---

# Moving from Marlin to Smoothie

If you are a Marlin user moving to a Smoothie system, you might have an existing configuration you want to port over.

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Please note it is imperative you read the whole documentation before using Smoothie. Skipping this step <strong>will</strong> almost certainly result in damage and danger.
  <br><br>
  Again, read the whole documentation, do not only rely on this guide.
</sl-alert>
{:/nomarkdown}

Assuming you have read the documentation (again: do it, do not skip the documentation), this page is aimed at helping you understand what Marlin options correspond to what Smoothie options.

This guide follows the general structure of the [original Marlin documentation](http://marlinfw.org/docs/configuration/configuration.html)

This assumes you start from the [default configuration file](configuring-smoothie).

## Baud rate

When talking to your Smoothieboard over USB, the baud rate isn't configurable and it will go as fast as USB allows, any baud rate set in your host software is ignored too.

When talking to your Smoothieboard over the UART port, you have to set the baud rate.

In Marlin that is done with:

```cpp
#define BAUDRATE 115200
```

while in Smoothie you change:

```markdown
uart0.baud_rate 115200 # Baud rate for the default hardware (UART) serial port
```

## Extruders

In Marlin, you define the number of extruders by changing this value:

```cpp
#define EXTRUDERS 1
```

in Smoothie, things are much more modular, and you configure extruders by creating new extruder modules.

If you have one extruder, you create one extruder module, if you have three, you create three extruder modules.

For details see [Extruder](extruder) and [Multiple extruders](multiple-extruders).

## Single nozzle

If you have multiple extruders but a single nozzle, in Marlin you set the following value:

```cpp
#define SINGLENOZZLE
```

But in Smoothie, you do this by creating multiple [Extruder modules](multiple-extruders) but only one [Temperaturecontrol module](temperaturecontrol).

## Hotend offsets

If you have multiple nozzles, you need to tell your firmware where they are located relative to each other, in Marlin you do:

```cpp
//#define HOTEND_OFFSET_X {0.0, 20.00} // (in mm) for each extruder, offset of the hotend on the X axis
//#define HOTEND_OFFSET_Y {0.0, 5.00}  // (in mm) for each extruder, offset of the hotend on the Y axis
```

Giving a list of offsets in X, then a list of offsets in Y, in order of the extruders.

While in Smoothie you configure the offset of each Extruder module independently, for example:

```markdown
# Extruder offset
extruder.hotend.x_offset 0 # X offset from origin in mm
extruder.hotend.y_offset 0 # Y offset from origin in mm
extruder.hotend.z_offset 0 # Z offset from origin in mm
```

And for the second extruder:

```markdown
# Extruder offset
extruder.hotend2.x_offset 0 # x offset from origin in mm
extruder.hotend2.y_offset 25.0 # y offset from origin in mm
extruder.hotend2.z_offset 0 # z offset from origin in mm
```

## Power supply

In Marlin, you tell Marlin you want to control a power supply by doing:

```cpp
#define POWER_SUPPLY 1
```

While in Smoothie you use the [Switch module](switch) to associate a Gcode with a specific control pin, giving you much more freedom as to how you configure and wire things.

See the [Switch module](switch) for more details and examples, but here is one possible power supply control configuration:

```markdown
switch.psu.enable true # turn atx on/off
switch.psu.input_on_command M80 #
switch.psu.input_off_command M81 #
switch.psu.output_pin 0.25o! # open drain, inverted
switch.psu.output_type digital # on/off only
switch.psu.failsafe_set_to 1 # so the ATX turns off on a system crash
#switch.psu.ignore_on_halt true # so the ATX does not turn off on a HALT condition (like limit trigger)
# However leave commented or set to false if you want the ATX
# to turn off for an over heat fault condition
```

## Thermal Settings

In Marlin, you associate the number of a thermistor type with a given thermistor input:

```cpp
#define TEMP_SENSOR_0 5
#define TEMP_SENSOR_1 0
#define TEMP_SENSOR_2 0
#define TEMP_SENSOR_3 0
#define TEMP_SENSOR_BED 3
```

In Smoothie, you go to a specific [Temperaturecontrol](temperaturecontrol) module, and edit its sensor type:

For example:

```markdown
temperature_control.hotend.thermistor EPCOS100K
```

See the [Temperaturecontrol](temperaturecontrol) page for a list of possible values, and for other ways to specify the sensor's properties.

There is no direct match between Marlin's "numbers" and Smoothie's "model numbers", you need to know the part number of your thermistor in order to configure it.

## PID

In Marlin, you set the PID parameters for the hotend this way:

```cpp
  #define  DEFAULT_Kp 22.2
  #define  DEFAULT_Ki 1.08
  #define  DEFAULT_Kd 114
```

While in Smoothie, you instead configure that value for each [Temperaturecontrol](temperaturecontrol) module, in that module, for example:

```markdown
# PID configuration
# See http://smoothieware.org/temperaturecontrol#pid
temperature_control.hotend.p_factor 13.7 # P (proportional) factor
temperature_control.hotend.i_factor 0.097 # I (integral) factor
temperature_control.hotend.d_factor 24 # D (derivative) factor
```

## Kinematics

In Marlin, you change kinematics by uncommenting one of the following lines:

```cpp
//#define COREXY
//#define COREXZ
//#define COREYZ
//#define COREYX
//#define COREZX
//#define COREZY
//#define DELTA
//#define SCARA
```

While in Smoothie, you change the value of the `arm_solution` configuration option.

For example:

```markdown
arm_solution linear_delta # Selects the linear delta arm solution
```

You then have to specify the parameters for that arm solution, for example for delta machines you do:

```markdown
arm_length 250.0 # This is the length of an arm from hinge to hinge
arm_radius 124.0 # This is the horizontal distance from hinge to hinge when the effector is centered
```

See the [Delta](delta) page for more details on setting up a delta machine.

## Endstops

In Marlin, you choose which endstops are activated and which are not by changing these values:

```cpp
#define USE_XMIN_PLUG
#define USE_YMIN_PLUG
#define USE_ZMIN_PLUG
//#define USE_XMAX_PLUG
//#define USE_YMAX_PLUG
//#define USE_ZMAX_PLUG
```

While in Smoothie you do so by changing the pin for a given endstop from its normal value (for example `1.25`) to `nc`, for "un-connected", for example:

```markdown
alpha_min_endstop nc # Pin to read min endstop, add a ! to invert if endstop is NO connected to ground
alpha_max_endstop 1.25^ # Pin to read max endstop, uncomment this and comment the above if using max endstops
```

Has the endstop for the alpha tower (X axis) minimum disabled, but the one for the alpha tower (X axis) maximum enabled (as is common for delta machines).

Alpha is X, beta is Y, and gamma is Z.

Smoothie uses these to differentiate "axes" from "actuators".

They are the same thing on cartesian machines, but are different on other machines, and it is important to distinguish them or the configuration would quickly get confusing.

Essentially cartesian users have to suffer a small discomfort so that other users can have a better life.

Thanks Cartesian users!

## Endstop pullups

In Marlin you set the pull-up of an endstop by changing:

```cpp
#define ENDSTOPPULLUPS

#if DISABLED(ENDSTOPPULLUPS)
  // fine endstop settings: Individual pullups. will be ignored if ENDSTOPPULLUPS is defined
  //#define ENDSTOPPULLUP_XMAX
  //#define ENDSTOPPULLUP_YMAX
  //#define ENDSTOPPULLUP_ZMAX
  //#define ENDSTOPPULLUP_XMIN
  //#define ENDSTOPPULLUP_YMIN
  //#define ENDSTOPPULLUP_ZMIN
  //#define ENDSTOPPULLUP_ZMIN_PROBE
#endif
```

While in Smoothie you do it by changing the pin for a given endstop from for example `1.25` to `1.25^`.

## Endstop inverting

In Marlin you invert an endstop by changing:

```cpp
// Mechanical endstop with COM to ground and NC to Signal uses "false" here (most common setup).
#define X_MIN_ENDSTOP_INVERTING false // set to true to invert the logic of the endstop.
#define Y_MIN_ENDSTOP_INVERTING false // set to true to invert the logic of the endstop.
#define Z_MIN_ENDSTOP_INVERTING false // set to true to invert the logic of the endstop.
#define X_MAX_ENDSTOP_INVERTING false // set to true to invert the logic of the endstop.
#define Y_MAX_ENDSTOP_INVERTING false // set to true to invert the logic of the endstop.
#define Z_MAX_ENDSTOP_INVERTING false // set to true to invert the logic of the endstop.
#define Z_MIN_PROBE_ENDSTOP_INVERTING false // set to true to invert the logic of the endstop.
```

While in Smoothie you do it by changing the pin for a given endstop from for example `1.25` to `1.25!`.

## Homing speed

In Marlin, you change the homing speed by modifying:

```cpp
// Homing speeds (mm/m)
#define HOMING_FEEDRATE_XY (50*60)
#define HOMING_FEEDRATE_Z  (4*60)
```

While in Smoothie you modify:

```markdown
# Endstops home at their fast feedrate first, then once the endstop is found they home again at their slow feedrate for accuracy
alpha_fast_homing_rate_mm_s 50 # Alpha/X fast homing feedrate in mm/second
alpha_slow_homing_rate_mm_s 25 # Alpha/X slow homing feedrate in mm/second
beta_fast_homing_rate_mm_s 50 # Beta/Y fast homing feedrate in mm/second
beta_slow_homing_rate_mm_s 25 # Beta/Y slow homing feedrate in mm/second
gamma_fast_homing_rate_mm_s 4 # Gamma/Z fast homing feedrate in mm/second
gamma_slow_homing_rate_mm_s 2 # Gamma/Z slow homing feedrate in mm/second
```

Where alpha is X, beta is Y, and gamma is Z.

## Steps per millimeters

In Marlin, you set the steps per millimeters for each axis by changing:

```cpp
/**
 * Default Axis Steps Per Unit (steps/mm)
 * Override with M92
 *                                      X, Y, Z, E0 [, E1[, E2[, E3]]]
 */
#define DEFAULT_AXIS_STEPS_PER_UNIT   { 80, 80, 4000, 500 }
```

While in Smoothie, you edit the steps for the primary axes by changing:

```markdown
# Arm solution configuration: Cartesian robot. Translates mm positions into stepper positions
# See http://smoothieware.org/stepper-motors
alpha_steps_per_mm 80 # Steps per mm for alpha (X) stepper
beta_steps_per_mm 80 # Steps per mm for beta (Y) stepper
gamma_steps_per_mm 4000 # Steps per mm for gamma (Z) stepper
```

Where alpha is X, beta is Y, and gamma is Z.

And for the extruders, you edit the value in each Extruder's specific module configuration, for example:

```markdown
extruder.hotend.steps_per_mm 500 # Steps per mm for extruder stepper
```

## Default max feed rates

In Marlin, you set the maximum feed rates (speeds) by changing:

```cpp
/**
 * Default Max Feed Rate (mm/s)
 * Override with M203
 *                                      X, Y, Z, E0 [, E1[, E2[, E3]]]
 */
#define DEFAULT_MAX_FEEDRATE { 500, 500, 2.25, 45 }
```

Note the unit is millimeters per seconds.

In Smoothie, we can specify maximum values for the axes and for the actuators, which allows to more finely respecting the machine's limits.

We change the maximum feed rate for the main axes by changing:

```markdown
# Cartesian axis speed limits
x_axis_max_speed 30000 # Maximum speed in mm/min
y_axis_max_speed 30000 # Maximum speed in mm/min
z_axis_max_speed 300 # Maximum speed in mm/min
```

Note the unit is millimeters per minute.

And the maximum feed rates for the main **actuators** is changed with:

```markdown
alpha_max_rate 30000.0 # Maximum rate in mm/min
beta_max_rate 30000.0 # Maxmimum rate in mm/min
gamma_max_rate 300.0 # Maximum rate in mm/min
```

Note the unit is millimeters per minute.

We can also set the maximum feedrate for each extruder by modifying each extruder's module configuration:

```markdown
extruder.hotend.max_speed 50 # Maximum speed in mm/s
```

Note the unit is millimeters per second

## Acceleration

In Marlin you set the acceleration for each axis by doing:

```cpp
#define DEFAULT_MAX_ACCELERATION      { 3000, 3000, 100, 10000 }
```

While in Smoothie you modify:

```markdown
acceleration 3000
```

To set separate values for each axis, see [Motion control](motion-control).

## Jerk

In Marlin, you set how hard axes can accelerate and decelerate at direction changes by modifying:

```cpp
/**
 * Default Jerk (mm/s)
 * Override with M205 X Y Z E
 *
 * "Jerk" specifies the minimum speed change that requires acceleration.
 * When changing speed and direction, if the difference is less than the
 * value set here, it may happen instantaneously.
 */
#define DEFAULT_XJERK                 20.0
#define DEFAULT_YJERK                 20.0
#define DEFAULT_ZJERK                  0.4
#define DEFAULT_EJERK                  5.0
```

However Smoothie uses a different concept, which more finely allows to regulate speeds.

You need to modify the value:

```markdown
junction_deviation 0.05 # See http://smoothieware.org/motion-control#junction-deviation
```

This is not an exact science as smoothie and marlin's methods are different, but if you are looking for a "start" value (that will still likely have to be tuned), you can find your junction_deviation by dividing Marlin's jerk by 60:

(DEFAULT_XYJERK) / (60) = (junction_deviation)

## Zprobe

Marlin and Smoothie are very different in this regard, please carefully read the documentation for the [Probing with Smoothie](zprobe) module.

## Motor direction

In Marlin, you change the direction of an axis by modifying:

```cpp
#define INVERT_X_DIR true
#define INVERT_Y_DIR false
#define INVERT_Z_DIR true

#define INVERT_E0_DIR false
#define INVERT_E1_DIR false
#define INVERT_E2_DIR false
#define INVERT_E3_DIR false
```

While in Smoothie, you do this by adding a `!` to the direction pin of that axis, for example to invert your alpha (X) axis, change its configuration from:

```markdown
# Stepper module configuration
# Pins are defined as ports, and pin numbers, appending "!" to the number will invert a pin
# See http://smoothieware.org/pin-configuration and http://smoothieware.org/pinout
alpha_step_pin 2.0 # Pin for alpha stepper step signal
alpha_dir_pin 0.5 # Pin for alpha stepper direction, add '!' to reverse direction
alpha_en_pin 0.4 # Pin for alpha enable pin
alpha_current 1.5 # X stepper motor current
alpha_max_rate 30000.0 # Maximum rate in mm/min
```

to:

```markdown
# Stepper module configuration
# Pins are defined as ports, and pin numbers, appending "!" to the number will invert a pin
# See http://smoothieware.org/pin-configuration and http://smoothieware.org/pinout
alpha_step_pin 2.0 # Pin for alpha stepper step signal
alpha_dir_pin 0.5! # Pin for alpha stepper direction, add '!' to reverse direction
alpha_en_pin 0.4 # Pin for alpha enable pin
alpha_current 1.5 # X stepper motor current
alpha_max_rate 30000.0 # Maximum rate in mm/min
```

## Homing direction

In Marlin, you change whether an axis is homed to min or homed to max by modifying:

```cpp
#define X_HOME_DIR -1
#define Y_HOME_DIR -1
#define Z_HOME_DIR -1
```

While in Smoothie, you do this by changing the `homing_direction` parameter for each actuator:

```markdown
alpha_homing_direction home_to_min # Or set to home_to_max and set alpha_max and uncomment the alpha_max_endstop
```

changes to:

```markdown
alpha_homing_direction home_to_max # Or set to home_to_max and set alpha_max and uncomment the alpha_max_endstop
```

## Filament runout sensors

In Marlin, you configure this sensor by doing:

```cpp
//#define FILAMENT_RUNOUT_SENSOR
#if ENABLED(FILAMENT_RUNOUT_SENSOR)
  #define FIL_RUNOUT_INVERTING false // set to true to invert the logic of the sensor.
  #define ENDSTOPPULLUP_FIL_RUNOUT // Uncomment to use internal pullup for filament runout pins if the sensor is defined.
  #define FILAMENT_RUNOUT_SCRIPT "M600"
#endif
```

While in Smoothie you use the [Filament detector](filament-detector) module

## Bed levelling

For bed levelling and probing, see the [Zprobe](zprobe) documentation.
