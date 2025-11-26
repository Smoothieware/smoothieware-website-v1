---
permalink: /6axis
layout: default
title: 6 Axis Configuration
---

# 6 axis

{::nomarkdown}
<a href="/images/circuit.png">
  <img src="/images/circuit.png" alt="Circuit diagram" style="width: 300px; height: 300px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

Smoothieboard can be made to work for more than 3 axes.

We are not talking about extruders here (these are supported separately, see [Extruder](extruder)), but rotational axes, like those for example used for 4 or 5-axis machining.

This feature is one of the rare ones that requires compiling Smoothie.

Because it increases the size of the movement planning queue significantly, we were unfortunately not able to fit it in the "normal" firmware.

## Background Resources

There are two resources that were written about this feature when it was released that you might want to read:

* [ABC pull request](https://github.com/Smoothieware/Smoothieware/pull/1055) on GitHub.
* [Smoothie's upgrade notes](https://github.com/smoothieware/smoothieware/blob/edge/upgrade-notes.md)

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>NOTE</strong> that currently WCS is not supported for ABC axis (<gcode>G10</gcode> L2...). <gcode>G92</gcode> A0 resets the A axis and does not set the WCS for it (same for B and C).
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>NOTE</strong> You cannot define extruders AND ABC axis they are mutually exclusive and Smoothie will not run if they are both defined.
</sl-alert>
{:/nomarkdown}

## Compiling 6-axis

Before attempting this, please read [compiling smoothie](compiling-smoothie), and compile Smoothie "normally" for practice.

Once that is done (and only once that is done), you need to do the same process, but instead of doing:

```bash
make
```



You now do:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**V1 Compilation:**

```bash
make clean
make AXIS=6 CNC=1
```

You can change this number to 5 or 4 if you do not need all 6 axes.

It saves memory and allows you to use more of it for other things.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**V2 Compilation:**

SmoothieV2 has native support for up to 6 axes without special compilation flags. The build system is different from V1:

```bash
# V2 uses rake instead of make
rake build
```

Multi-axis support is built-in by default. Check the [SmoothieV2 repository](https://github.com/Smoothieware/SmoothieV2) for the latest build instructions.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}



### Primary Axis Configuration

By default, Smoothie calculates distances only on the first three (XYZ) axes.

You can change this behavior by setting the `PAXIS` compilation parameter, for example:

```bash
make AXIS=5 PAXIS=4 CNC=1
```

Means Smoothie is compiled with XYZAB axes, and distances are calculated in the XYZA space.

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>NOTE</strong> that in most cases you <strong>DO NOT</strong> need to set PAXIS. Only do this if you fully understand the difference between a Cartesian (primary) axis and say a rotary axis.
</sl-alert>
{:/nomarkdown}

Once your firmware is compiled, you can now flash it to the board and start using it.

## Using additional axes

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>NOTE</strong> You MUST fully define the alpha, beta, and gamma (XYZ) axis before the other axis. They MUST have valid pin definitions for the step and dir pins (enable is optional). If you do not define valid pins for these first three axes, Smoothie will not boot.
</sl-alert>
{:/nomarkdown}

### Configuration



You can now add the following to your configuration file:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**V1 Configuration:**

```plaintext
# A axis
delta_steps_per_mm                    100     # may be steps per degree for example
delta_step_pin                        xx      # Pin for delta stepper step signal
delta_dir_pin                         xx      # Pin for delta stepper direction
delta_en_pin                          xx      # Pin for delta enable
delta_current                         1.5     # Z stepper motor current
delta_max_rate                        300.0   # mm/min
delta_acceleration                    500.0   # mm/sec²

# B axis
epsilon_steps_per_mm                  100     # may be steps per degree for example
epsilon_step_pin                      xx      # Pin for delta stepper step signal
epsilon_dir_pin                       xx      # Pin for delta stepper direction
epsilon_en_pin                        xx      # Pin for delta enable
epsilon_current                       1.5     # Z stepper motor current
epsilon_max_rate                      300.0   # mm/min
epsilon_acceleration                  500.0   # mm/sec²

# C axis
zeta_steps_per_mm                     100     # may be steps per degree for example
zeta_step_pin                         xx      # Pin for delta stepper step signal
zeta_dir_pin                          xx      # Pin for delta stepper direction
zeta_en_pin                           xx      # Pin for delta enable
zeta_current                          1.5     # Z stepper motor current
zeta_max_rate                         300.0   # mm/min
zeta_acceleration                     500.0   # mm/sec²
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**V2 Configuration:**

```ini
[delta]
steps_per_mm = 100     # may be steps per degree for example
step_pin = xx          # Pin for delta stepper step signal
dir_pin = xx           # Pin for delta stepper direction
en_pin = xx            # Pin for delta enable
current = 1.5          # Motor current
max_rate = 300.0       # mm/min
acceleration = 500.0   # mm/sec²

[epsilon]
steps_per_mm = 100     # may be steps per degree for example
step_pin = xx          # Pin for epsilon stepper step signal
dir_pin = xx           # Pin for epsilon stepper direction
en_pin = xx            # Pin for epsilon enable
current = 1.5          # Motor current
max_rate = 300.0       # mm/min
acceleration = 500.0   # mm/sec²

[zeta]
steps_per_mm = 100     # may be steps per degree for example
step_pin = xx          # Pin for zeta stepper step signal
dir_pin = xx           # Pin for zeta stepper direction
en_pin = xx            # Pin for zeta enable
current = 1.5          # Motor current
max_rate = 300.0       # mm/min
acceleration = 500.0   # mm/sec²
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

This configuration is very similar to that of your XYZ axes, and you need to change the values to fit your setup.



### Endstop Configuration

Optionally if you are using endstops on the A, B, or C axis, you need to **replace** your endstops section with the following (it is also found in the [snippets example](https://github.com/Smoothieware/Smoothieware/blob/edge/ConfigSamples/Snippets/abc-endstop.config)):

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>NOTE</strong> DO NOT use the following syntax if you only have XYZ axis! Use the regular endstop config syntax.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>NOTE</strong> If you define a homing axis then there MUST be a defined axis with the same designation (e.g., B endstop MUST have B axis defined)
</sl-alert>
{:/nomarkdown}

**NOTE** The ABC axis will always home after the XYZ axis home and will home individually, unless `homing_order` is defined in which case all axes will home individually in the order specified.



{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**V1 Endstop Configuration:**

```plaintext
## Endstops new syntax (the name is not significant)
# NOTE only a min or a max homing endstop may be defined
endstop.minx.enable                          true             # enable an endstop
endstop.minx.pin                             1.24             # pin
endstop.minx.homing_direction                home_to_min      # direction it moves to the endstop
endstop.minx.homing_position                 0                # the cartesian coordinate this is set to when it homes
endstop.minx.axis                            X                # the axis designator
endstop.minx.max_travel                      500              # the maximum travel in mm before it times out
endstop.minx.fast_rate                       50               # fast homing rate in mm/sec
endstop.minx.slow_rate                       25               # slow homing rate in mm/sec
endstop.minx.retract                         5                # bounce off endstop in mm

# ... (similar configuration for other axes) ...

# For ABC axes, use the same syntax:
endstop.mina.enable                          true
endstop.mina.pin                             x.xx
endstop.mina.homing_direction                home_to_min
endstop.mina.homing_position                 0
endstop.mina.axis                            A
endstop.mina.max_travel                      360              # degrees for rotary axis
endstop.mina.fast_rate                       50
endstop.mina.slow_rate                       25
endstop.mina.retract                         5

# type of machine
# corexy_homing                               false            # set to true if homing on an hbot or corexy

# optional order in which axis will home, default is they all home at the same time,
# if this is set it will force each axis to home one at a time in the specified order
# homing_order                                 XYZ              # x axis followed by y then z last
# move_to_origin_after_home                    false            # move XY to 0,0 after homing
# endstop_debounce_count                       100              # uncomment if you get noise on your endstops, default is 100
# endstop_debounce_ms                          0                # uncomment if you get noise on your endstops, default is 0 millisecond debounce
# home_z_first true # uncomment and set to true to home the Z first, otherwise Z homes after XY
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**V2 Endstop Configuration:**

```ini
[endstops]
common.debounce_ms = 0

minx.enable = true
minx.pin = 1.24
minx.homing_direction = home_to_min
minx.homing_position = 0
minx.axis = X
minx.max_travel = 500
minx.fast_rate = 50
minx.slow_rate = 25
minx.retract = 5

# ... (similar configuration for Y and Z axes) ...

# For ABC axes, use the same pattern:
mina.enable = true
mina.pin = x.xx
mina.homing_direction = home_to_min
mina.homing_position = 0
mina.axis = A
mina.max_travel = 360          # degrees for rotary axis
mina.fast_rate = 50
mina.slow_rate = 25
mina.retract = 5

minb.enable = true
minb.pin = x.xx
minb.homing_direction = home_to_min
minb.homing_position = 0
minb.axis = B
minb.max_travel = 360
minb.fast_rate = 50
minb.slow_rate = 25
minb.retract = 5

minc.enable = true
minc.pin = x.xx
minc.homing_direction = home_to_min
minc.homing_position = 0
minc.axis = C
minc.max_travel = 360
minc.fast_rate = 50
minc.slow_rate = 25
minc.retract = 5

# Optional settings:
# corexy_homing = false            # set to true if homing on an hbot or corexy
# homing_order = XYZ               # x axis followed by y then z last
# move_to_origin_after_home = false
# home_z_first = true              # uncomment and set to true to home the Z first
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}


