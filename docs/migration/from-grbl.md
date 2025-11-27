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

## Configuration Format Comparison

Before diving into specific options, here's a quick overview of how configuration formats differ between GRBL, Smoothie V1, and Smoothie V2:

| Aspect | GRBL | Smoothie V1 | Smoothie V2 |
| ------ | ---- | ----------- | ----------- |
| **Format** | Runtime parameters (`$` commands) | Flat config file | INI-style sections |
| **File Location** | Stored in EEPROM | `/sd/config` or `/sd/config.txt` | `/sd/config.ini` |
| **Syntax** | `$100=80.0` | `alpha_steps_per_mm 80` | `[actuator.alpha]`<br>`steps_per_mm = 80` |
| **Editing** | Serial commands | Text editor | Text editor |
| **Grouping** | None (flat numbers) | Dotted prefixes | INI sections |
| **Comments** | N/A | `#` prefix | `#` or `;` prefix |

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Note on Command Compatibility:</strong> Most G-code commands and M-codes work identically across Smoothie V1 and V2. The main differences are in the configuration file format and some advanced features. Console commands like <code>help</code>, <code>version</code>, and <code>cat /sd/config</code> work in both versions.
</sl-alert>
{:/nomarkdown}

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

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```markdown
beta_step_pin                                2.1              # Pin for beta stepper step signal
```

Becomes:

```markdown
beta_step_pin                                2.1!             # Pin for beta stepper step signal
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[actuator.beta]
step_pin = 2.1              # Pin for beta stepper step signal
```

Becomes:

```ini
[actuator.beta]
step_pin = 2.1!             # Pin for beta stepper step signal
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

## $3 – Direction port invert mask:binary

In GRBL, you modify `$3` to invert a direction pin, while in Smoothie, you add a `!` character to the pin for that axis, for example:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```markdown
beta_dir_pin                                 0.11             # Pin for beta stepper dir signal
```

Becomes:

```markdown
beta_dir_pin                                 0.11!            # Pin for beta stepper dir signal
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[actuator.beta]
dir_pin = 0.11             # Pin for beta stepper dir signal
```

Becomes:

```ini
[actuator.beta]
dir_pin = 0.11!            # Pin for beta stepper dir signal
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

## $4 – Enable port invert mask:binary

In GRBL, you modify `$4` to invert a direction pin, while in Smoothie, you add a `!` character to the pin for that axis, for example:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```markdown
beta_en_pin                                 0.10              # Pin for beta stepper en signal
```

Becomes:

```markdown
beta_en_pin                                 0.10!             # Pin for beta stepper en signal
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[actuator.beta]
en_pin = 0.10              # Pin for beta stepper enable signal
```

Becomes:

```ini
[actuator.beta]
en_pin = 0.10!             # Pin for beta stepper enable signal
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

## $5 – Limit pins invert, bool

In GRBL, you modify `$5` to invert an endstop port, while in Smoothie, you add a `!` character to the pin for that endstop, for example:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```markdown
alpha_min_endstop                            1.24^            # Pin to read min endstop, add a ! to invert if endstop is NO connected to ground
```

Becomes:

```markdown
alpha_min_endstop                            1.24!^           # Pin to read min endstop, add a ! to invert if endstop is NO connected to ground
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[endstop.alpha.min]
pin = 1.24^            # Pin to read min endstop, add a ! to invert if endstop is NO connected to ground
```

Becomes:

```ini
[endstop.alpha.min]
pin = 1.24!^           # Pin to read min endstop, add a ! to invert if endstop is NO connected to ground
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

## $6 – Probe pin invert, bool

In GRBL, you modify `$6` to invert the probing port, while in Smoothie, you add a `!` character to the pin for the probe, for example:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```markdown
zprobe.probe_pin                             1.28^           # Pin probe is attached to
```

Becomes:

```markdown
zprobe.probe_pin                             1.28!^          # Pin probe is attached to
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[zprobe]
probe_pin = 1.28^           # Pin probe is attached to
```

Becomes:

```ini
[zprobe]
probe_pin = 1.28!^          # Pin probe is attached to
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

## $11 - Junction deviation, mm

In GRBL, you set the junction deviation parameter by modifying the `$11` option, while in Smoothie you edit:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```markdown
junction_deviation                           0.05             # See /motion-control#junction-deviation
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[planner]
junction_deviation = 0.05             # See /motion-control#junction-deviation
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

## $12 – Arc tolerance, mm

In GRBL, you set the arc tolerance parameter by modifying the `$12` option, while in Smoothie you edit:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```markdown
mm_max_arc_error                             0.01             # The maximum error for line segments that divide arcs 0 to disable
                                                              # note it is invalid for both the above be 0
                                                              # if both are used, will use largest segment length based on radius
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[planner]
mm_max_arc_error = 0.01             # The maximum error for line segments that divide arcs 0 to disable
                                    # note it is invalid for both the above be 0
                                    # if both are used, will use largest segment length based on radius
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

## $21 - Hard limits, bool

In GRBL, you enable hard limit switches by modifying the `$21` option, while in Smoothie you uncomment and set to true:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```markdown
# Optional enable limit switches, actions will stop if any enabled limit switch is triggered (all are set for delta)
alpha_limit_enable                          true            # Set to true to enable X min and max limit switches
beta_limit_enable                           true            # Set to true to enable Y min and max limit switches
gamma_limit_enable                          true            # Set to true to enable Z min and max limit switches
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
# Optional enable limit switches, actions will stop if any enabled limit switch is triggered
[endstop.alpha.min]
limit_enable = true            # Set to true to enable X min limit switch

[endstop.alpha.max]
limit_enable = true            # Set to true to enable X max limit switch

[endstop.beta.min]
limit_enable = true            # Set to true to enable Y min limit switch

[endstop.beta.max]
limit_enable = true            # Set to true to enable Y max limit switch

[endstop.gamma.min]
limit_enable = true            # Set to true to enable Z min limit switch

[endstop.gamma.max]
limit_enable = true            # Set to true to enable Z max limit switch
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

## $22 - Homing cycle, bool

In GRBL, you enable homing by modifying the `$22` option, while in Smoothie enable the endstops module:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```markdown
endstops_enable                              false            # The endstop module is enabled by default and can be disabled here
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[endstops]
enabled = true            # The endstop module is enabled by default and can be disabled here
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

## $23 - Homing dir invert mask, int:binary

In GRBL, you set the homing direction for each axis by modifying the `$23` option, while in Smoothie instead change:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```markdown
alpha_homing_direction                       home_to_min      # Or set to home_to_max and set alpha_max and uncomment the alpha_max_endstop
```

To:

```markdown
alpha_homing_direction                       home_to_max      # Or set to home_to_max and set alpha_max and uncomment the alpha_max_endstop
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[actuator.alpha]
homing_direction = home_to_min      # Or set to home_to_max and set alpha_max
```

To:

```ini
[actuator.alpha]
homing_direction = home_to_max      # Or set to home_to_max and set alpha_max
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

## $24 - Homing feed, mm/min

In GRBL, you set the slow homing speed by modifying the `$24` option, while in Smoothie instead modify:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```markdown
alpha_slow_homing_rate_mm_s                  25               # Alpha/X slow homing feedrate in mm/second
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[actuator.alpha]
slow_homing_rate_mm_s = 25               # Alpha/X slow homing feedrate in mm/second
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

## $25 - Homing seek, mm/min

In GRBL, you set the fast homing speed by modifying the `$25` option, while in Smoothie instead modify:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```markdown
alpha_fast_homing_rate_mm_s                  50               # Alpha/X fast homing feedrate in mm/second
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[actuator.alpha]
fast_homing_rate_mm_s = 50               # Alpha/X fast homing feedrate in mm/second
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

## $26 - Homing debounce, ms

In GRBL, you set the homing debounce by modifying the `$26` option, while in Smoothie instead modify:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```markdown
endstop_debounce_ms                          0                # Uncomment if you get noise on your endstops, default is 0 millisecond debounce
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[endstops]
debounce_ms = 0                # Uncomment if you get noise on your endstops, default is 0 millisecond debounce
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

## $27 - Homing pull-off, mm

In GRBL, you set the homing retract by modifying the `$27` option, while in Smoothie instead modify:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```markdown
alpha_homing_retract_mm                      5                # Distance to retract from the endstop after it is hit for alpha/X
beta_homing_retract_mm                       5                # Distance to retract from the endstop after it is hit for beta/Y
gamma_homing_retract_mm                      1                # Distance to retract from the endstop after it is hit for gamma/Z
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[actuator.alpha]
homing_retract_mm = 5                # Distance to retract from the endstop after it is hit for alpha/X

[actuator.beta]
homing_retract_mm = 5                # Distance to retract from the endstop after it is hit for beta/Y

[actuator.gamma]
homing_retract_mm = 1                # Distance to retract from the endstop after it is hit for gamma/Z
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

## $100, $101 and $102 – X, Y, Z steps/mm

In GRBL, you set the steps per millimeter for the primary axes by modifying the `$100`, `$101` and `$102` options, while in Smoothie instead modify:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```markdown
# Arm solution configuration: Cartesian robot. Translates mm positions into stepper positions
# See /stepper-motors
alpha_steps_per_mm                           80               # Steps per mm for alpha (X) stepper
beta_steps_per_mm                            80               # Steps per mm for beta (Y) stepper
gamma_steps_per_mm                           1600             # Steps per mm for gamma (Z) stepper
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
# Arm solution configuration: Cartesian robot. Translates mm positions into stepper positions
# See /stepper-motors
[actuator.alpha]
steps_per_mm = 80               # Steps per mm for alpha (X) stepper

[actuator.beta]
steps_per_mm = 80               # Steps per mm for beta (Y) stepper

[actuator.gamma]
steps_per_mm = 1600             # Steps per mm for gamma (Z) stepper
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

## $110, $111 and $112 – X, Y, Z Max rate, mm/min

In GRBL, you set the max rates for the primary axes by modifying the `$110`, `$111` and `$112` options.

Note the unit is millimeters per minute.

In Smoothie, we can specify maximum values for the axes and for the actuators, which allows to more finely respecting the machine's limits.

We change the maximum feed rate for the main axes by changing:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

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

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
# Cartesian axis speed limits
[axis.x]
max_speed = 30000            # Maximum speed in mm/min

[axis.y]
max_speed = 30000            # Maximum speed in mm/min

[axis.z]
max_speed = 300              # Maximum speed in mm/min
```

Note the unit is millimeters per minute.

And the maximum feed rates for the main actuators is changed with:

```ini
[actuator.alpha]
max_rate = 30000.0          # Maximum rate in mm/min

[actuator.beta]
max_rate = 30000.0          # Maximum rate in mm/min

[actuator.gamma]
max_rate = 300.0            # Maximum rate in mm/min
```

Note the unit is millimeters per minute.

We can also set the maximum feedrate for each extruder by modifying each extruder's module configuration:

```ini
[extruder.hotend]
max_speed = 50            # Maximum speed in mm/s
```

Note the unit is millimeters per second.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

## $120, $121, $122 – X, Y, Z Acceleration, mm/sec^2

In GRBL, you set the acceleration for the primary axes by modifying the `$120`, `$121` and `$122` options.

While in Smoothie you modify:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```markdown
acceleration    3000
```

To set separate values for each axis, see [Motion control](motion-control).

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[planner]
acceleration = 3000
```

To set separate values for each axis, see [Motion control](motion-control).

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

## $130, $131, $132 – X, Y, Z Max travel, mm

In GRBL, you set the max travel for the primary axes by modifying the `$130`, `$131` and `$132` options.

In Smoothie, there are two separate sets of matching options.

The `axis_max` values are useful to set the length of an axis in case its homing direction is set to homing to max:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```markdown
alpha_max                                    200              # This gets loaded as the current position after homing when home_to_max is set
beta_max                                     200              # This gets loaded as the current position after homing when home_to_max is set
gamma_max                                    200              # This gets loaded as the current position after homing when home_to_max is set
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[actuator.alpha]
max = 200              # This gets loaded as the current position after homing when home_to_max is set

[actuator.beta]
max = 200              # This gets loaded as the current position after homing when home_to_max is set

[actuator.gamma]
max = 200              # This gets loaded as the current position after homing when home_to_max is set
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

While the `max_travel` options are useful to make sure the axis doesn't move forever if there is a problem with homing missing the endstop for some reason:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```markdown
alpha_max_travel                             500              # Max travel in mm for alpha/X axis when homing
beta_max_travel                              500              # Max travel in mm for beta/Y axis when homing
gamma_max_travel                             500              # Max travel in mm for gamma/Z axis when homing
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[actuator.alpha]
max_travel = 500              # Max travel in mm for alpha/X axis when homing

[actuator.beta]
max_travel = 500              # Max travel in mm for beta/Y axis when homing

[actuator.gamma]
max_travel = 500              # Max travel in mm for gamma/Z axis when homing
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}
