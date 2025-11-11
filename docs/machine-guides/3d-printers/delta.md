---
permalink: /delta
---

# Configuring a Smoothieboard for Linear Delta Kinematics

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Version Support:</strong> This arm solution is supported in both Smoothieware v1 ✅ and v2 ✅
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<a href="/images/board.png">
  <img src="/images/board.png" alt="Delta Configuration" style="width: 150px; height: 150px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

Linear delta 3D printers use the power of mathematics to move your extruder.

They tend to have less diverse parts, but be more difficult to build correctly.

This page will walk you through how to configure Smoothie to control a linear delta printer, how to tune its different parameters, and how to calibrate them automatically or manually.

## What is a Linear Delta?

Linear delta machines such as the Rostock and Kossel use three linear axes in a triangular configuration, arms, and some clever math to move a tool in three dimensions.

{::nomarkdown}
<div style="text-align: center; margin: 20px 0;">
  <a href="https://store.atom3dp.com/uploads/d415cab3efa35ca8796ebcaa2a26ac374cf44ff5.png">
    <img src="https://store.atom3dp.com/uploads/d415cab3efa35ca8796ebcaa2a26ac374cf44ff5.png" alt="Delta Printer" style="max-width: 400px; height: auto;"/>
  </a>
  <p><em>A typical linear delta 3D printer</em></p>
</div>
{:/nomarkdown}

They can be quite fast due to the low moving mass, in particular in the Z direction, which is usually slower in typical Cartesian 3D printer designs.

## Start with this file!

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Use the Delta Configuration File</strong>
  <p>You can find an example linear delta configuration on GitHub <a href="https://github.com/Smoothieware/Smoothieware/blob/edge/ConfigSamples/Smoothieboard.delta/config">here</a>.</p>
  <p>It is <strong>strongly recommended</strong> you start from this example configuration file instead of modifying the default cartesian configuration file.</p>
</sl-alert>
{:/nomarkdown}

## Enabling the Arm Solution

To setup your Smoothieboard for control of a linear delta machine, you must select the <setting v1="arm_solution" v2="motion control.arm_solution"></setting> arm solution.

This is true for all linear delta type bots - older versions of the firmware included separate configurations for Rostock and Kossel printers, but these have been unified.

To modify your configuration file for a linear delta arm solution, change/add the following:

```markdown
arm_solution                                 linear_delta
arm_length                                   250.0            # this is the length of an arm from hinge to hinge
arm_radius                                   124.0            # this is the horizontal distance from hinge to hinge when the effector is centered
```

## Base Parameters

Here is a labelled schematic of a normal linear delta:

{::nomarkdown}
<div style="text-align: center; margin: 20px 0;">
  <a href="https://reprap.org/mediawiki/images/4/40/Delta_geometry1.png">
    <img src="https://reprap.org/mediawiki/images/4/40/Delta_geometry1.png" alt="Delta kinematics basic" style="min-width: 640px; max-width: 100%; height: auto;"/>
  </a>
  <p><em>Delta printer geometry and terminology</em></p>
</div>
{:/nomarkdown}

This shows the basic terminology and structure of delta machines.

The two most important parameters are as follows:

### Arm Radius

You need to set <setting v1="arm_radius" v2="linear delta.arm_radius"></setting> to be the horizontal distance between the joints on the arm rod when in the home position.

An incorrect value for <setting v1="arm_radius" v2="linear delta.arm_radius"></setting> will cause the effector's height above the bed to change as it moves around on the X-Y plane.

### Arm Length

Set <setting v1="arm_length" v2="linear delta.arm_length"></setting> to the length between joints of the arms.

An incorrect value for <setting v1="arm_length" v2="linear delta.arm_length"></setting> will affect the scaling of movements in the X-Y plane - printed parts will come out smaller (<setting v1="arm_length" v2="linear delta.arm_length"></setting> needs to be reduced) or larger (<setting v1="arm_length" v2="linear delta.arm_length"></setting> needs to be increased) than intended.

### Critical Construction Notes

These are the two main parameters you must get right for Smoothie to move your extruder around precisely.

Beyond that, precise construction of your delta printer is critical:

- The towers need to be 120° apart and perfectly vertical
- The three arms (including their carriages) must all be the same length to the center of the effector platform

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Coming from Marlin?</strong>
  <p>These two parameters correspond to the following in your Marlin configuration:</p>
  <ul>
    <li><code>arm_length</code> is <code>DELTA_DIAGONAL_ROD</code></li>
    <li><code>arm_radius</code> is <code>DELTA_RADIUS</code>, which is calculated as follows: <code>DELTA_RADIUS</code> = <code>DELTA_SMOOTH_ROD_OFFSET</code> - <code>DELTA_EFFECTOR_OFFSET</code> - <code>DELTA_CARRIAGE_OFFSET</code></li>
  </ul>
</sl-alert>
{:/nomarkdown}

## Homing

The linear delta arm solution is pretty much useless without homing.

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>Endstops Required</strong>
  <p><strong>Do not try to set up a printer without endstops, and do not try to do anything with your printer before you home it.</strong></p>
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
Test the endstops with <mcode>M119</mcode>, and make sure the X endstop triggers when the endstop on the X tower is activated, and same for Y and Z towers.
{:/nomarkdown}

Here is a generic delta homing configuration:

{::nomarkdown}
```markdown
endstops_enable                              false            # The endstop module is enabled by default and can be disabled here
delta_homing                                 true             # Forces all three axis to home at the same time regardless of what is specified in G28
alpha_min_endstop                            nc               # Pin to read min endstop, add a ! to invert if endstop is NO connected to ground
alpha_max_endstop                            <pin>1.25</pin>^            # Pin to read max endstop, uncomment this and comment the above if using max endstops
alpha_homing_direction                       home_to_max      # Or set to home_to_max and set alpha_max and uncomment the alpha_max_endstop
alpha_max                                    0                # This gets loaded as the current position after homing when home_to_max is set
beta_min_endstop                             nc               # Pin to read min endstop, add a ! to invert if endstop is NO connected to ground
beta_max_endstop                             <pin>1.27</pin>^            # Pin to read max endstop, uncomment this and comment the above if using max endstops
beta_homing_direction                        home_to_max      # Or set to home_to_max and set alpha_max and uncomment the alpha_max_endstop
beta_max                                     0                # This gets loaded as the current position after homing when home_to_max is set
gamma_min_endstop                            nc               # Pin to read min endstop, add a ! to invert if endstop is NO connected to ground
gamma_max_endstop                            <pin>1.29</pin>^            # Pin to read max endstop, uncomment this and comment the above if using max endstops
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
{:/nomarkdown}

### Gamma Max

`gamma_max` is the height the head is above the bed when homed to the top endstops.

Homing the printer to the endstops establishes your printer's maximum Z position, as well as establishing the origin of the XY plane.

Ideally, this should also coincide with the exact center of your printer's physical build surface.

`alpha_max` and `beta_max` should be left at 0.

`alpha_max_travel`, `beta_max_travel`, `gamma_max_travel` is the max distance the carriage will travel while homing.

These **MUST** be set to at least the total height of your towers and **NOT** the same as `gamma_max`, usually it is at least twice `gamma_max`.

### Trim

The `alpha_trim_mm`, `beta_trim_mm` and `gamma_trim_mm` settings are a way to tweak endstop positions in software and simplify the process of tramming the effector (making sure that moves in the XY plane remain parallel to the print surface).

The trim values are the distance in millimeters from the point where your endstop is triggered.

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Migrating from Repetier-Firmware?</strong>
  <p>If you are migrating a printer from Repetier-Firmware, your endstop offsets are defined in terms of steps for your stepper motors. To convert, divide the number of steps by your steps_per_mm for that axis.</p>
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<mcode>M666</mcode> Xnnn Ynnn Znnn allow you to adjust the trim values on a live system.

You need to home after setting <mcode>M666</mcode>.
{:/nomarkdown}

Negative values adjust the endstops down by that number of mm. Positive values are up.

{::nomarkdown}
When you have found the correct values for your endstop settings (see the suggested workflow near the bottom of this page for one process to adjust the trim values), edit the config file and reboot, or save the <mcode>M666</mcode> values with <mcode>M500</mcode>.
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Note for Deltas using M666 to set soft trim</strong>
  <p>The latest edge now uses soft trim, this allows positive and negative trim values without crashing your endstops.</p>
  <p>(Note the old suggestion of adding -5 to all your trim values is no longer valid and will do nothing other than lose 5mm from your build height).</p>
  <p>When you home a delta that has non zero trim values, you will find that X and Y are not 0 after homing. This is normal.</p>
  <p>If you want X0 Y0 after homing you can set <setting v1="move_to_origin_after_home" v2="endstops.common.move_to_origin_after_home"></setting> to true in the config (this is the default now), this will move the effector to 0,0 after it homes and sets the trim. Note that the carriages will move off the endstops a little bit after homing so the head can move without crashing into the endstops.</p>
</sl-alert>
{:/nomarkdown}

## Arm Parameters

{::nomarkdown}
<code>arm_length</code> and <code>arm_radius</code> can be set live using:
{:/nomarkdown}

```markdown
M665 L340.0 R240.5
```

{::nomarkdown}
Where L is the <code>arm_length</code> and R is the <code>arm_radius</code>
{:/nomarkdown}

**NOTE: You MUST do a Home after setting these.**

{::nomarkdown}
Simply doing:
{:/nomarkdown}

```markdown
M665
```

{::nomarkdown}
On its own will just report the current settings.

These can also be saved with <mcode>M500</mcode>.
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>It's all relative</strong>
  <p>Changing <code>arm_radius</code> actually changes the <em>relative</em> height of the center to the edges, so after changing the <code>arm_radius</code> you <strong>MUST</strong> measure both the outer edges and the center, the center alone will appear to not change.</p>
  <p>This is <strong>NOT</strong> a bug.</p>
  <p>A suggested workflow for calibrating <code>arm_radius</code> and <code>gamma_max</code> when you first set up a delta printer would be:</p>
  <ol>
    <li>Home, then adjust <code>gamma_max</code> until the z-height is correct at the center of the print bed (lightly holding down a sheet of paper).</li>
    <li>Re-home, then jog the effector platform near the alpha tower. Adjust <code>alpha_trim_mm</code> using M666 or a physical endstop screw, re-home, and repeat until the paper is held down with equal force at Z=0. (tip: you may want to write some G-code snippets to automate this process, or else you may find yourself doing a lot of jogging - sample scripts developed by Gene Buckle (author of the Rostock Max assembly manual) are at the bottom of this page.)</li>
    <li>Repeat step #2 to set <code>beta_trim_mm</code> and <code>gamma_trim_mm</code> (or physical endstop screws) appropriately near the beta and gamma towers.</li>
    <li>Re-check the z-height at the center of the bed. If the effector is too high, increase <code>arm_radius</code> slightly, and return to step 1 of this sequence. If the effector is too low, decrease <code>arm_radius</code> slightly, and return to step 1.</li>
  </ol>
  <p>Once the z-height is correct, your printer should be well-calibrated. You should not need to re-do these calibration steps unless you change hardware on your printer.</p>
</sl-alert>
{:/nomarkdown}

## Height Calibration

Your printer homes by "seeking" the endstops at the top.

When that is done, your printer is always at the same position, every time: The Z axis is at its maximal position, and the X and Y axes are at the center of the work area (0,0).

But it doesn't know how high above the bed it is, unless you tell it.

And it needs to know this, so that when you tell it to go to Z 0 (the bed), it knows how much to move from its position at the Z maximum.

{::nomarkdown}
<div style="text-align: center; margin: 20px 0;">
  <a href="/images/temporary/delta-printer-generic.jpg">
    <img src="/images/temporary/delta-printer-generic.jpg" alt="Delta machine coordinates" style="max-width: 500px; height: auto;"/>
  </a>
  <p><em>Understanding delta printer coordinates - it's basically a cylinder and you position things around its center</em></p>
</div>
{:/nomarkdown}

There are several ways to tell Smoothie how high the hotend is from the bed after homing:

{% include troubleshooting/gamma-max-for-include.md %}

## Automated Calibration

See [ZProbe](zprobe) for how to use zprobe to calibrate a delta.

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

### Additional Resources

* See http://minow.blogspot.com/ for more details of manually calibrating a delta **and how to adjust for dimension errors**
* See [here](https://plus.google.com/u/0/+AlexSkoruppa/posts/MtphkuQM1uJ?cfem=1) if you are curious what automatic delta calibration looks like

## Manual Calibration

This process will allow you to manually calibrate your delta printer:

{::nomarkdown}
1. Set <code>gamma_max</code> so the 0 position in Z is 20mm above the bed. See [gamma_max](gamma-max).

2. Home, with <gcode>G28</gcode>.

3. **Point A**: Move to a point at the edge of the bed, in front of the X (alpha) tower.

4. Get the head set just right at the 0 position (so that a piece of paper can just slide between the hotend and bed plate).

5. Do <mcode>M306</mcode> Z0.

6. Home again, with <gcode>G28</gcode>.

7. Repeat the same process (go back to Point A), and check it produces the same results.
{:/nomarkdown}

8. **Point B**: Move to a point at the edge of the bed, in front of the Y (beta) tower.

{::nomarkdown}
9. Tune the Y (beta) endstop offset value by entering <mcode>M666</mcode> Ynnn where `nnn` is the distance between the hotend and bed at this point.

10. Home the machine with <gcode>G28</gcode>

11. Go back to point B, and keep this loop until the height is perfectly adjusted, and the hotend always touches the bed at this point.

12. **Point C**: Move to a point at the edge of the bed, in front of the Z (gamma) tower.

13. Tune the Z endstop offset value by entering <mcode>M666</mcode> Znnn where `nnn` is the distance between the hotend and bed at this point.

14. Home the machine with <gcode>G28</gcode>.

15. Go back to point C, and keep this loop until the height is perfectly adjusted, and the hotend always touches the bed at this point.

16. Now that all three towers' endstop offsets are tuned, save them with <mcode>M500</mcode>.

17. Test the height is now the same at the three points as it is at the center, if it is not, Adjust your arm radius with <mcode>M665</mcode> Rnnn.

18. Continue adjusting arm radius until the three points and the center of the bed are all at the same height.

19. Finally, go to the center of the bed, move the head until it touches the bed, and issue <mcode>M306</mcode> Z0.

20. Save all your new settings with <mcode>M500</mcode>.
{:/nomarkdown}

If this is too much work, use the automated calibration which does exactly that procedure automatically. (Except for the Z height which you still need to do after calibration). See [the zprobe documentation page](zprobe).

### Manual Calibration Scripts

The following scripts were written for a Rostock Max (280mm diameter bed).

If your printer's bed is much larger or smaller than that, adjust the X/Y parameters in each script as needed to put the effector near each tower (so that one arm is nearly vertical).

These scripts can be copy/pasted repeatedly into a terminal window, or run from your host program of choice (Pronterface, Repetier-Host, Octoprint, etc.)

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

### Manual Calibration Video Tutorial

Here's a manual calibration tutorial video:

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Note:</strong> The second video mentioned in this video has a technique which is NOT a good fine-tuning method - the one where he measures the first layer thickness. This is not a good way to adjust trim.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<div style="text-align: center; margin: 20px 0;">
  <iframe width="100%" height="360" src="https://www.youtube.com/embed/tDLbqLve128" frameborder="0" allowfullscreen></iframe>
</div>
{:/nomarkdown}

## Advanced Settings

The following settings can be set in the config, or via M665.

They are used to compensate for a frame that is not perfectly aligned. **It is recommended the frame be fixed rather than using these to compensate.**

Generally speaking adjusting any of these to anything other than 0.0 will fix one thing but throw another thing off.

**NOTE:** These are usually used with an offline program that calculates the values by doing some form of error minimization.

```markdown
delta_tower1_offset
delta_tower2_offset
delta_tower3_offset
delta_tower1_angle
delta_tower2_angle
delta_tower3_angle
```

{::nomarkdown}
Alternatively, the values can be changed live (and saved with <mcode>M500</mcode>):
{:/nomarkdown}

```markdown
M665 Axxx Bxxx Cxxx Dxxx Exxx Hxxx
```

Where:
- A is delta_tower1_offset
- B is delta_tower2_offset
- C is delta_tower3_offset
- D is delta_tower1_angle
- E is delta_tower2_angle
- H is delta_tower3_angle

## Source Code

For developers or those interested in the implementation details, the Linear Delta solution is implemented in:

- **v1:** [LinearDeltaSolution.cpp](https://github.com/Smoothieware/Smoothieware/blob/edge/src/modules/robot/arm_solutions/LinearDeltaSolution.cpp)
- **v2:** [LinearDeltaSolution.cpp](https://github.com/Smoothieware/Smoothieware-v2/blob/main/Firmware/src/robot/arm_solutions/LinearDeltaSolution.cpp)

The source code contains the kinematic equations used to convert between Cartesian coordinates and delta tower positions.

## See Also

- [Arm Solutions](arm-solutions) - Overview of all arm solution types
- [Rotary Delta](rotary-delta) - Alternative delta design with rotating joints
- [Cartesian](cartesian) - Standard Cartesian configuration
- [ZProbe](zprobe) - Automatic bed leveling and calibration
- [Delta Calibration Strategy](delta-calibration-strategy) - Automated delta calibration
- [Motion Control](motion-control) - General motion control configuration
