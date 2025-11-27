---
permalink: /pcb-milling
layout: default
title: PCB Milling
---

# PCB Milling

<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  When using PCB milling one really needs to fully understand the CNC coordinate systems involved. See the <a href="http://wiki.linuxcnc.org/cgi-bin/wiki.pl?CoordinateSystems">LinuxCNC Coordinate Systems documentation</a> for more information.
</sl-alert>

Build-in leveling made Smoothieware a very powerful tool for PCB milling - no need to recalculate G-codes, just run leveling using {::nomarkdown}<gcode>G31</gcode>{:/nomarkdown}/{::nomarkdown}<gcode>G32</gcode>{:/nomarkdown} and mill.

---

## Grid Leveling "By Two Corners"

Two corners rectangular mode of "rectangular-grid" made leveling even simpler.

You can use any grid position, grid size and number of probing points.

It also allows for changing these parameters on the fly.

Enable it in the configuration with:

```gcode
leveling-strategy.rectangular-grid.only_by_two_corners        true
```



**Configuration:**

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```markdown
leveling-strategy.rectangular-grid.only_by_two_corners true
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[cartesian grid leveling strategy]
only_by_two_corners = true
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

---

## PCB Milling Configuration Examples

When setting up Smoothieware for PCB milling, you'll need to configure several key parameters for optimal performance.

### Basic Motion Settings

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**V1 Configuration:**
```
# PCB milling specific settings
alpha_steps_per_mm                           80        # Steps per mm for X axis
beta_steps_per_mm                            80        # Steps per mm for Y axis
gamma_steps_per_mm                           800       # Steps per mm for Z axis (higher resolution)

default_feed_rate                            500       # Default rate (mm/minute) for G1/G2/G3 moves
default_seek_rate                            1000      # Default rate (mm/minute) for G0 moves

alpha_max_rate                               6000      # Maximum rate in mm/min
beta_max_rate                                6000
gamma_max_rate                               300       # Slower Z for precision
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**V2 Configuration:**
```ini
[actuator.alpha]
steps_per_mm = 80        # Steps per mm for X axis

[actuator.beta]
steps_per_mm = 80        # Steps per mm for Y axis

[actuator.gamma]
steps_per_mm = 800       # Steps per mm for Z axis (higher resolution)

[motion control]
default_feed_rate = 500       # Default rate (mm/minute) for G1/G2/G3 moves
default_seek_rate = 1000      # Default rate (mm/minute) for G0 moves

[actuator.alpha]
max_rate = 6000      # Maximum rate in mm/min

[actuator.beta]
max_rate = 6000

[actuator.gamma]
max_rate = 300       # Slower Z for precision
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

### Z-Probe Configuration

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**V1 Configuration:**
```
# Z-probe settings for PCB milling
zprobe.enable                                true
zprobe.probe_pin                             1.28!^   # Pin probe is attached to
zprobe.slow_feedrate                         5        # Mm/sec probe feed rate
zprobe.fast_feedrate                         100      # Move feedrate
zprobe.probe_height                          5        # How much above the bed to start probe

# Leveling strategy
leveling-strategy.rectangular-grid.enable    true
leveling-strategy.rectangular-grid.x_size    100      # Grid size in X direction
leveling-strategy.rectangular-grid.y_size    100      # Grid size in Y direction
leveling-strategy.rectangular-grid.grid_x_size 10     # Number of probe points in X
leveling-strategy.rectangular-grid.grid_y_size 10     # Number of probe points in Y
leveling-strategy.rectangular-grid.probe_offsets 0,0,0  # Probe offsets from nozzle/spindle
leveling-strategy.rectangular-grid.save      false    # Don't save grid to memory
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**V2 Configuration:**
```ini
[zprobe]
enable = true
probe_pin = 1.28!^   # Pin probe is attached to
slow_feedrate = 5        # Mm/sec probe feed rate
fast_feedrate = 100      # Move feedrate
probe_height = 5        # How much above the bed to start probe

[cartesian grid leveling strategy]
enable = true
x_size = 100      # Grid size in X direction
y_size = 100      # Grid size in Y direction
grid_x_size = 10     # Number of probe points in X
grid_y_size = 10     # Number of probe points in Y
probe_offsets = 0,0,0  # Probe offsets from nozzle/spindle
save = false    # Don't save grid to memory
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

### Acceleration and Jerk Settings

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**V1 Configuration:**
```
# Acceleration settings for smooth PCB milling
acceleration                                 500       # Acceleration in mm/second/second
junction_deviation                           0.01      # Similar to GRBL's "max_jerk" (lower = slower cornering)

# Per-axis acceleration (optional for finer control)
alpha_acceleration                           500
beta_acceleration                            500
gamma_acceleration                           100       # Lower Z acceleration for precision
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**V2 Configuration:**
```ini
[planner]
acceleration = 500       # Acceleration in mm/second/second
junction_deviation = 0.01      # Similar to GRBL's "max_jerk" (lower = slower cornering)

[actuator.alpha]
acceleration = 500

[actuator.beta]
acceleration = 500

[actuator.gamma]
acceleration = 100       # Lower Z acceleration for precision
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

### Spindle Control

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**V1 Configuration:**
```
# Spindle control for PCB milling
spindle.enable                               true
spindle.type                                 pwm       # PWM spindle control
spindle.max_rpm                              10000     # Maximum spindle RPM
spindle.pwm_pin                              2.5       # PWM output pin
spindle.pwm_period                           1000      # PWM period in microseconds
spindle.feedback_pin                         nc        # No feedback pin
spindle.switch_on_pin                        nc        # No switch on pin
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**V2 Configuration:**
```ini
[spindle control]
enable = true
type = pwm       # PWM spindle control
max_rpm = 10000     # Maximum spindle RPM
pwm_pin = 2.5       # PWM output pin
pwm_period = 1000      # PWM period in microseconds
feedback_pin = nc        # No feedback pin
switch_on_pin = nc        # No switch on pin
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

---

Before two corners mode, you had to correct machine (0,0) and bed size according to the desired probing grid position and size.

"Two corners" is not an absolutely correct name for this mode, because it uses only one corner and rectangle size. Name from one of CAD.

<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Important:</strong> All positions for probing are in the MCS (Machine Coordinate System) and not in the WCS (Work Coordinate System).
</sl-alert>

In the latest version, there is a quick way to use two corners mode without enabling it in the configuration.

{::nomarkdown}<gcode>G32</gcode>{:/nomarkdown} R1 X0 Y0 A30 B30

The R1 sets a special two corners mode which uses the current position of the head as the start x and y, the X and Y specified in the {::nomarkdown}<gcode>G32</gcode>{:/nomarkdown} will be offsets from that and would usually be specified as 0.

**NOTE:** If there is a probe offset, which is not recommended, then it will move the probe to where we asked it to start from.

---

### Usage

| Command | Description |
| ------- | ----------- |
| {::nomarkdown}<gcode>G32</gcode>{:/nomarkdown} Xnn Ynn Ann Bnn Inn Jnn | Probes the grid from X, Y (Machine coordinates), with X size = A, Y size = B, with X grid size = I, Y grid size = J. I*J must be <= grid size from configuration. Omitting I or J or both will use grid size from configuration |

---

### Example Commands

```gcode
G32 X0 Y50 A50 B100
```
Probes the grid from X=0, Y=50, X size = 50, Y size = 100, with grid size from configuration

```gcode
G32 X0 Y50 A50 B100 I5 J9
```
Probes the grid from X=0, Y=50, X size = 50, Y size = 100, X grid size = 5, Y grid size = 9

```gcode
G32 X50 Y0 A100 B50
```
Probes the grid from X=50, Y=0, X size = 100, Y size = 50, with grid size from configuration

```gcode
G32 X50 Y0 A100 B50 I9 J5
```
Probes the grid from X=50, Y=0, X size = 100, Y size = 50, X grid size = 9, Y grid size = 5

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Version Note:</strong> Older versions of Smoothieware used <gcode>G31</gcode> for probing when the "two corners" mode was enabled. This has now been changed to <gcode>G32</gcode>.
</sl-alert>
{:/nomarkdown}

---

## Further Reading

- [ZProbe module documentation](zprobe)
- [Leveling strategies](leveling-strategy)
- [CNC Mill Guide](cnc-mill-guide)
- [G31 and G32 G-codes](supported-g-codes)
