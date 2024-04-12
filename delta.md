
# Configuring a Smoothieboard for linear delta kinematics

Linear delta 3D printers use the power of mathematics to move your extruder. They tend to have less diverse parts, but be more difficult to build correctly.

This page will walk you through how to configure Smoothie to control a linear delta printer, how to tune its different parameters, and how to calibrate them automatically or manually.

Linear delta machines such as the [Rostock](http://reprap.org/wiki/Rostock) and the [Kossel](http://reprap.org/wiki/Kossel) use three linear axes in a triangular configuration, arms, and some clever math to move a tool in three dimensions.

They can be quite fast due to the low moving mass, in particular in the Z direction, which is usually slower in typical Cartesian 3D printer designs.

![Delta Printer](/_media///external/https.atom3dp.com.wp.content.uploads.2017.09.2atomfx.png)

## Start with this file!

> [!NOTE]
> You can find an example linear delta configuration on GitHub [here](https://github.com/Smoothieware/Smoothieware/blob/edge/ConfigSamples/Smoothieboard.delta/config). 
> 
> It is recommended you start from this example configuration file instead of modifying the default cartesian configuration file.

### Enabling the arm solution

To setup your Smoothieboard for control of a linear delta machine, you must select the linear_delta arm solution (this is true for all linear delta type bots - older versions of the firmware included separate configurations for Rostock and Kossel printers).

To modify your configuration file for a linear delta arm solution, change/add the following:

```markdown
arm_solution                                 linear_delta
arm_length                                   250.0            # this is the length of an arm from hinge to hinge
arm_radius                                   124.0            # this is the horizontal distance from hinge to hinge when the effector is centered
```

### Base parameters

Here is a labelled schematic of a normal linear delta:

![Delta kinematics basic](/_media//delta/delta.png)

This shows the basic terminology and structure of delta machines.

The two most important parameters are as follows:

You need to set `arm_radius` to be the horizontal distance between the joints on the arm rod when in the home position. An incorrect value for `arm_radius` will cause the effector's height above the bed to change as it moves around on the X-Y plane.

Set `arm_length` to the length between joints of the arms. An incorrect value for `arm_length` will affect the scaling of movements in the X-Y plane - printed parts will come out smaller (`arm_length` needs to be reduced) or larger (`arm_length` needs to be increased) than intended.

These are the two main parameters you must get right for Smoothie to move your extruder around precisely. Beyond that, precise construction of your delta printer is critical - in particular, the towers need to be 120° apart and perfectly vertical, and the three arms (including their carriages) must all be the same length to the center of the effector platform.

> [!TIP]
> Coming from Marlin?
> 
> These two parameters correspond to the following in your Marlin configuration:
> 
> - `arm_length` is `DELTA_DIAGONAL_ROD`
> - `arm_radius` is `DELTA_RADIUS`, which is calculated as follows: `DELTA_RADIUS` = `DELTA_SMOOTH_ROD_OFFSET` - `DELTA_EFFECTOR_OFFSET` - `DELTA_CARRIAGE_OFFSET`

## Homing

The linear delta arm solution is pretty much useless without homing.

**Do not try to set up a printer without endstops, and do not try to do anything with your printer before you home it.**

Test the endstops with M119, and make sure the X endstop triggers when the endstop on the X tower is activated, and same for Y and Z towers.

Here is a generic delta homing configuration:

```markdown
endstops_enable                              true             # The endstop module is enabled by default and can be disabled here
delta_homing                                 true             # Forces all three axis to home at the same time regardless of what is specified in G28
alpha_min_endstop                            nc               # Pin to read min endstop, add a ! to invert if endstop is NO connected to ground
alpha_max_endstop                            1.25^            # Pin to read max endstop, uncomment this and comment the above if using max endstops
alpha_homing_direction                       home_to_max      # Or set to home_to_max and set alpha_max and uncomment the alpha_max_endstop
alpha_max                                    0                # This gets loaded as the current position after homing when home_to_max is set
beta_min_endstop                             nc               # Pin to read min endstop, add a ! to invert if endstop is NO connected to ground
beta_max_endstop                             1.27^            # Pin to read max endstop, uncomment this and comment the above if using max endstops
beta_homing_direction                        home_to_max      # Or set to home_to_max and set alpha_max and uncomment the alpha_max_endstop
beta_max                                     0                # This gets loaded as the current position after homing when home_to_max is set
gamma_min_endstop                            nc               # Pin to read min endstop, add a ! to invert if endstop is NO connected to ground
gamma_max_endstop                            1.29^            # Pin to read max endstop, uncomment this and comment the above if using max endstops
gamma_homing_direction                       home_to_max      # Or set to home_to_max and set alpha_max and uncomment the alpha_max_endstop
gamma_max                                    300              # This gets loaded as the current position after homing when home_to_max is set

alpha_max_travel                             1000             # Max travel in mm for alpha/X axis when homing
beta_max_travel                              1000             # Max travel in mm for beta/Y axis when homing
gamma_max_travel                             1000             # Max travel in mm for gamma/Z axis when homing

# Endstops home at their fast feedrate first, then once the endstop is found they home again at their slow feedrate for accuracy
alpha_fast_homing_rate_mm_s                  200              # Alpha tower fast homing feedrate in mm/second
alpha_slow_homing_rate_mm_s                  20               # Alpha tower slow homing feedrate in mm/second
beta_fast_homing_rate_mm_s                   200              # Beta  tower fast homing feedrate in mm/second
beta_slow_homing_rate_mm_s                   20               # Beta  tower slow homing feedrate in mm/second
gamma_fast_homing_rate_mm_s                  200              # Gamma tower fast homing feedrate in mm/second
gamma_slow_homing_rate_mm_s                  20               # Gamma tower slow homing feedrate in mm/second

alpha_homing_retract_mm                      5                # Distance to retract from the endstop after it is hit for alpha/X
beta_homing_retract_mm                       5                # Distance to retract from the endstop after it is hit for beta/Y
gamma_homing_retract_mm                      5                # Distance to retract from the endstop after it is hit for gamma/Z
```

### Gamma max

`gamma_max` is the height the head is above the bed when homed to the top endstops.

Homing the printer to the endstops establishes your printer's maximum Z position, as well as establishing the origin of the XY plane. Ideally, this should also coincide with the exact center of your printer's physical build surface.

`alpha_max` and `beta_max` should be left at 0.

`alpha_max_travel, beta_max_travel, gamma_max_travel` is the max distance the carriage will travel while homing, these **MUST** be set to at least the total height of your towers and **NOT** the same as `gamma_max`, usually it is at least twice `gamma_max`

### Trim

The `alpha_trim_mm`, `beta_trim_mm` and `gamma_trim_mm` settings are a way to tweak endstop positions in software and simplify the process of tramming the effector (making sure that moves in the XY plane remain parallel to the print surface).

The trim values are the distance in millimeters from the point where your endstop is triggered.

> [!NOTE]
> Note: if you are migrating a printer from Repetier-Firmware, your endstop offsets are defined in terms of steps for your stepper motors. To convert, divide the number of steps by your steps_per_mm for that axis.

`M666 Xnnn Ynnn Znnn` allow you to adjust the trim values on a live system.

You need to home after setting `M666`.

Negative values adjust the endstops down by that number of mm. Positive values are up.

When you have found the correct values for your endstop settings (see the suggested workflow near the bottom of this page for one process to adjust the trim values), edit the config file and reboot, or save the `M666` values with `M500`.

> [!WARNING]
> Note for Deltas using M666 to set soft trim
> The latest edge now uses soft trim, this allows positive and negative trim values without crashing your endstops.
> (Note the old suggestion of adding -5 to all your trim values is no longer valid and will do nothing other than lose 5mm from your build height).
> 
> When you home a delta that has non zero trim values, you will find that X and Y are not 0 after homing. This is normal.
> If you want X0 Y0 after homing you can set `move_to_origin_after_home  true` in the config (this is the default now), this will move the effector to 0,0 after it homes and sets the trim. Note that the carriages will move off the endstops a little bit after homing so the head can move without crashing into the endstops.

## Arm parameters

`arm_length` and `arm_radius` can be set live using:

```markdown
M665 L340.0 R240.5
```

Where L is the `arm_length` and R is the `arm_radius`

**NOTE You MUST do a Home after setting these.**

Simply doing:

```markdown
M665
```

On its own will just report the current settings.

These can also be saved with M500.

> [!WARNING]
> It's all relative
> Changing `arm_radius` actually changes the //relative// height of the center to the edges, so after changing the `arm_radius` you **MUST** measure both the outer edges and the center, the center alone will appear to not change.
> 
> This is **NOT** a bug.
> 
> A suggested workflow for calibrating `arm_radius` and `gamma_max` when you first set up a delta printer would be:
> 1. Home, then adjust `gamma_max` until the z-height is correct at the center of the print bed (lightly holding down a sheet of paper).
> 2. Re-home, then jog the effector platform near the alpha tower. Adjust `alpha_trim_mm` using M666 or a physical endstop screw, re-home, and repeat until the paper is held down with equal force at Z=0. (tip: you may want to write some G-code snippets to automate this process, or else you may find yourself doing a lot of jogging - sample scripts developed by Gene Buckle (author of the Rostock Max assembly manual) are at the bottom of this page.)
> 3. Repeat step #2 to set `beta_trim_mm` and `gamma_trim_mm` (or physical endstop screws) appropriately near the beta and gamma towers.
> 4. Re-check the z-height at the center of the bed. If the effector is too high, increase `arm_radius` slightly, and return to step 1 of this sequence. If the effector is too low, decrease `arm_radius` slightly, and return to step 1.
> 
> Once the z-height is correct, your printer should be well-calibrated. You should not need to re-do these calibration steps unless you change hardware on your printer.

## Height calibration

Your printer homes by "seeking" the endstops at the top.

When that is done, your printer is always at the same position, every time: The Z axis is at its maximal position, and the X and Y axes are at the center of the work area (0,0).

But it doesn't know how high above the bed it is, unless you tell it. And it needs to know this, so that when you tell it to go to Z 0 (the bed), it knows how much to move from its position at the Z maximum.

![Delta machine coordinates](/_media///external/http.i.imgur.com.9iwkw92.png)

This shows how to get your bearings around a delta 3D printer. It's basically a cylinder and you position things around its center.

There are several ways to tell Smoothie how high the hotend is from the bed after homing:

{% include_relative gamma_max.md %}

## Automated calibration

See [ZProbe](zprobe.md) for how to use zprobe to calibrate a delta.

Here is a common sequence that you may do to auto calibrate the delta for the first time, this need not be repeated unless the bed changes.

```markdown
; do endstop and delta radius calibration
G32
; Home
G28
; move to 5mm above bed
G0 Z5
; then manually jog down until nozzle is on bed or just traps a sheet of thin paper
; sets the Z homing offset based on current position
M306 Z0
G28
G0 Z1
; check nozzle is 1mm above bed
M500
; saves the results in EEPROM equivalent
```

Full example configurations (including zprobe) can be found at [https://github.com/Smoothieware/Smoothieware/blob/edge/ConfigSamples/Smoothieboard.delta/config](https://github.com/Smoothieware/Smoothieware/blob/edge/ConfigSamples/Smoothieboard.delta/config)

* See http://minow.blogspot.com/ for more details of manually calibrating a delta **and how to adjust for dimension errors**
* See [here](https://plus.google.com/u/0/+AlexSkoruppa/posts/MtphkuQM1uJ?cfem=1) if you are curious what automatic delta calibration looks like

## Manual Calibration

This process will allow you to manually calibrate your delta printer:

* Set `gamma_max` so the 0 position in Z is 20mm above the bed. See [gamma_max](gamma-max.md).
* Home, with `G28`.
* **Point A**: Move to a point at the edge of the bed, in front of the X (alpha) tower.
* Get the head set just right at the 0 position (so that a piece of paper can just slide between the hotend and bed plate).
* Do `M306 Z0`.
* Home again, with `G28`.
* Repeat the same process (go back to Point A), and check it produces the same results.
* **Point B**: Move to a point at the edge of the bed, in front of the Y (beta) tower.
* Tune the Y (beta) endstop offset value by entering `M666 Ynnn` where `nnn` is the distance between the hotend and bed at this point.
* Home the machine with `G28`
* Go back to point B, and keep this loop until the height is perfectly adjusted, and the hotend always touches the bed at this point.
* **Point C**: Move to a point at the edge of the bed, in front of the Z (gamma) tower.
* Tune the Z endstop offset value by entering `M666 Znnn` where `nnn` is the distance between the hotend and bed at this point.
* Home the machine with `G28`.
* Go back to point C, and keep this loop until the height is perfectly adjusted, and the hotend always touches the bed at this point.
* Now that all three towers' endstop offsets are tuned, save them with `M500`.
* Test the height is now the same at the three points as it is at the center, if it is not, Adjust your arm radius with `M665 Rnnn`.
* Continue adjusting arm radius until the three points and the center of the bed are all at the same height.
* Finally, go to the center of the bed, move the head until it touches the bed, and issue `M306 Z0`.
* Save all your new settings with `M500`.

If this is too much work, use the automated calibration which does exactly that procedure automatically. (Except for the Z height which you still need to do after calibration). See [the zprobe documentation page](zprobe.md).

### Manual calibration scripts

The following scripts were written for a Rostock Max (280mm diameter bed). If your printer's bed is much larger or smaller than that, adjust the X/Y parameters in each script as needed to put the effector near each tower (so that one arm is nearly vertical). These scripts can be copy/pasted repeatedly into a terminal window, or run from your host program of choice (Pronterface, Repetier-Host, Octoprint, etc.)

**Script 1: Center of bed**
```markdown
G28
G0 Z0 F3500
```

**Script 2: Alpha tower**
```markdown
G28
G0 Z0 X-77.94 Y-45 F3500
```

**Script 3: Beta tower**
```markdown
G28
G0 Z0 X77.94 Y-45 F3500
```

**Script 4: Gamma tower**
```markdown
G28
G0 Z0 X0 Y90 F3500
```

Here's a manual calibration tutorial video: (NOTE the second video mentioned in this video has a technique which IMO is NOT a good fine-tuning method, the one where he measures the first layer thickness, this is not a good way to adjust trim).

<iframe width="100%" height="360" src="https://www.youtube.com/embed/tDLbqLve128" frameborder="0" allowfullscreen></iframe>

## Advanced settings

The following settings can be set in the config, or via M665. They are used to compensate for a frame that is not perfectly aligned, it is recommended the frame be fixed rather than using these to compensate. Generally speaking adjusting any of these to anything other than 0.0 will fix one thing but throw another thing off. **NOTE** these are usually used with an offline program that calculates the values by doing some form of error minimization.

```markdown
delta_tower1_offset   
delta_tower2_offset
delta_tower3_offset
delta_tower1_angle
delta_tower2_angle
delta_tower3_angle
```

Alternatively, the values can be changed live (and saved with M500):

```markdown
M665 Axxx Bxxx Cxxx Dxxx Exxx Hxxx
```

where A is delta_tower1_offset, B is delta_tower2_offset, C is delta_tower3_offset
where D is