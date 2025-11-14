---
permalink: /from-grbl
---


# Moving from GRBL to Smoothie

If you are a GRBL user moving to a Smoothie system, you might have an existing configuration you want to port over.

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Read the Documentation First!</strong> Please note it is imperative you read the whole documentation before using Smoothie. Skipping this step <strong>will</strong> almost certainly result in damage and danger.
  <br><br>
  Again, read the whole documentation, do not only rely on this guide.
</sl-alert>
{:/nomarkdown}

Assuming you have read the documentation (again: do it, do not skip the documentation), this page is aimed at helping you understand what GRBL options correspond to what Smoothie options.

This assumes you start from the [default configuration file](configuring-smoothie).

## Commands

Smoothie and GRBL use different commands. Here is a table showing corresponding ways of talking to the boards on both systems:

| GRBL Command | Smoothie alternative | Action |
| ------------ | -------------------- | ------ |
| `$`          | `help`               | Display help |
| `$$`         | `cat /sd/config`     | Display current configuration |
| `$#`         | {::nomarkdown}<mcode>M114</mcode>{:/nomarkdown}, `M114.1`, `M114.2` | Display current positions |
| `$I`         | `version`            | Display build info |
| `$X`         | {::nomarkdown}<mcode>M999</mcode>{:/nomarkdown} | Exit alarm mode |
| `$H`         | `$H`                 | Run homing cycle |

## $2 – Step port invert mask:binary

In GRBL, you modify `$2` to invert a step pin, while in Smoothie, you add a `!` character to the pin for that axis, for example:

```markdown
beta_step_pin                                2.1              # Pin for beta stepper step signal
```

Becomes:

```markdown
beta_step_pin                                2.1!             # Pin for beta stepper step signal
```

## $3 – Direction port invert mask:binary

In GRBL, you modify `$3` to invert a direction pin, while in Smoothie, you add a `!` character to the pin for that axis, for example:

```markdown
beta_dir_pin                                 0.11             # Pin for beta stepper dir signal
```

Becomes:

```markdown
beta_dir_pin                                 0.11!            # Pin for beta stepper dir signal
```

## $4 – Enable port invert mask:binary

In GRBL, you modify `$4` to invert a direction pin, while in Smoothie, you add a `!` character to the pin for that axis, for example:

```markdown
beta_en_pin                                 0.10              # Pin for beta stepper en signal
```

Becomes:

```markdown
beta_en_pin                                 0.10!             # Pin for beta stepper en signal
```

## $5 – Limit pins invert, bool

In GRBL, you modify `$5` to invert an endstop port, while in Smoothie, you add a `!` character to the pin for that endstop, for example:

```markdown
alpha_min_endstop                            1.24^            # Pin to read min endstop, add a ! to invert if endstop is NO connected to ground
```

Becomes:

```markdown
alpha_min_endstop                            1.24!^           # Pin to read min endstop, add a ! to invert if endstop is NO connected to ground
```

## $6 – Probe pin invert, bool

In GRBL, you modify `$6` to invert the probing port, while in Smoothie, you add a `!` character to the pin for the probe, for example:

```markdown
zprobe.probe_pin                             1.28^           # Pin probe is attached to
```

Becomes:

```markdown
zprobe.probe_pin                             1.28!^          # Pin probe is attached to
```

## $11 - Junction deviation, mm

In GRBL, you set the junction deviation parameter by modifying the `$11` option, while in Smoothie you edit:

```markdown
junction_deviation                           0.05             # See /motion-control#junction-deviation
```

## $12 – Arc tolerance, mm

In GRBL, you set the arc tolerance parameter by modifying the `$12` option, while in Smoothie you edit:

```markdown
mm_max_arc_error                             0.01             # The maximum error for line segments that divide arcs 0 to disable
                                                              # note it is invalid for both the above be 0
                                                              # if both are used, will use largest segment length based on radius
```

## $21 - Hard limits, bool

In GRBL, you enable hard limit switches by modifying the `$21` option, while in Smoothie you uncomment and set to true:

```markdown
# Optional enable limit switches, actions will stop if any enabled limit switch is triggered (all are set for delta)
alpha_limit_enable                          true            # Set to true to enable X min and max limit switches
beta_limit_enable                           true            # Set to true to enable Y min and max limit switches
gamma_limit_enable                          true            # Set to true to enable Z min and max limit switches
```

## $22 - Homing cycle, bool

In GRBL, you enable homing by modifying the `$22` option, while in Smoothie enable the endstops module:

```markdown
endstops_enable                              false            # The endstop module is enabled by default and can be disabled here
```

## $23 - Homing dir invert mask, int:binary

In GRBL, you set the homing direction for each axis by modifying the `$23` option, while in Smoothie instead change:

```markdown
alpha_homing_direction                       home_to_min      # Or set to home_to_max and set alpha_max and uncomment the alpha_max_endstop
```

To:

```markdown
alpha_homing_direction                       home_to_max      # Or set to home_to_max and set alpha_max and uncomment the alpha_max_endstop
```

## $24 - Homing feed, mm/min

In GRBL, you set the slow homing speed by modifying the `$24` option, while in Smoothie instead modify:

```markdown
alpha_slow_homing_rate_mm_s                  25               # Alpha/X slow homing feedrate in mm/second
```

## $25 - Homing seek, mm/min

In GRBL, you set the fast homing speed by modifying the `$25` option, while in Smoothie instead modify:

```markdown
alpha_fast_homing_rate_mm_s                  50               # Alpha/X fast homing feedrate in mm/second
```

## $26 - Homing debounce, ms

In GRBL, you set the homing debounce by modifying the `$26` option, while in Smoothie instead modify:

```markdown
endstop_debounce_ms                          0                # Uncomment if you get noise on your endstops, default is 0 millisecond debounce
```

## $27 - Homing pull-off, mm

In GRBL, you set the homing retract by modifying the `$27` option, while in Smoothie instead modify:

```markdown
alpha_homing_retract_mm                      5                # Distance to retract from the endstop after it is hit for alpha/X
beta_homing_retract_mm                       5                # Distance to retract from the endstop after it is hit for beta/Y
gamma_homing_retract_mm                      1                # Distance to retract from the endstop after it is hit for gamma/Z
```

## $100, $101 and $102 – X, Y, Z steps/mm

In GRBL, you set the steps per millimeter for the primary axes by modifying the `$100`, `$101` and `$102` options, while in Smoothie instead modify:

```markdown
# Arm solution configuration: Cartesian robot. Translates mm positions into stepper positions
# See /stepper-motors
alpha_steps_per_mm                           80               # Steps per mm for alpha (X) stepper
beta_steps_per_mm                            80               # Steps per mm for beta (Y) stepper
gamma_steps_per_mm                           1600             # Steps per mm for gamma (Z) stepper
```

## $110, $111 and $112 – X, Y, Z Max rate, mm/min

In GRBL, you set the max rates for the primary axes by modifying the `$110`, `$111` and `$112` options.

Note the unit is millimeters per minute.

In Smoothie, we can specify maximum values for the axes and for the actuators, which allows to more finely respecting the machine's limits.

We change the maximum feed rate for the main axes by changing:

```markdown
# Cartesian axis speed limits
x_axis_max_speed                             30000            # Maximum speed in mm/min
y_axis_max_speed                             30000            # Maximum speed in mm/min
z_axis_max_speed                             300              # Maximum speed in mm/min
```

Note the unit is millimeters per minute.

And the maximum feed rates for the main actuators is changed with:

```markdown
alpha_max_rate                               30000.0          # Maximum rate in mm/min
beta_max_rate                                30000.0          # Maximum rate in mm/min
gamma_max_rate                               300.0            # Maximum rate in mm/min
```

Note the unit is millimeters per minute.

We can also set the maximum feedrate for each extruder by modifying each extruder's module configuration:

```markdown
extruder.hotend.max_speed                       50            # Maximum speed in mm/s
```

Note the unit is millimeters per second.

## $120, $121, $122 – X, Y, Z Acceleration, mm/sec^2

In GRBL, you set the acceleration for the primary axes by modifying the `$120`, `$121` and `$122` options.

While in Smoothie you modify:

```markdown
acceleration    3000
```

To set separate values for each axis, see [Motion control](motion-control).

## $130, $131, $132 – X, Y, Z Max travel, mm

In GRBL, you set the max travel for the primary axes by modifying the `$130`, `$131` and `$132` options.

In Smoothie, there are two separate sets of matching options.

The `axis_max` values are useful to set the length of an axis in case its homing direction is set to homing to max:

```markdown
alpha_max                                    200              # This gets loaded as the current position after homing when home_to_max is set
beta_max                                     200              # This gets loaded as the current position after homing when home_to_max is set
gamma_max                                    200              # This gets loaded as the current position after homing when home_to_max is set
```

While the `max_travel` options are useful to make sure the axis doesn't move forever if there is a problem with homing missing the endstop for some reason:

```markdown
alpha_max_travel                             500              # Max travel in mm for alpha/X axis when homing
beta_max_travel                              500              # Max travel in mm for beta/Y axis when homing
gamma_max_travel                             500              # Max travel in mm for gamma/Z axis when homing
```
