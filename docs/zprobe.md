
# Probing with Smoothie

A probe is a switch (much like an [Endstop](endstop)) used to find where something is located automatically.

Smoothie will use it to move until the probe is "triggered" and stop there.

It can be used on CNC mills to:
- Find the length of a tool and how far its bottom is from the 0 position in Z
- Find the touching point between the workpiece and the tool

It can be used on 3D printers to:
- Find the touching point between the actuator and the bed
- Calibrate [Delta](delta) geometry
- Do grid-based bed leveling to compensate for bed height irregularities

Different strategies are useful for different geometries of machines, click on one to go to it:
- For [Delta](delta) machines, you can do [grid leveling](#delta-grid) **and** [calibration](#delta-calibration)
- For [Cartesian](cartesian) machines, you can do [grid leveling](#rectangular-grid-compensation) **or** [three-point leveling](#three-point)

**NOTE** When G30 stores the probe position or prints out the value, it is in actuator units not necessarily in mm. This is only an issue for rotary deltas where the actuator units are degrees not mm. Most other configurations it will be mm.

{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <a href="https://lh5.ggpht.com/ZRHoohRN9Q4ZsIV-apYxqMg8CH-Imum2uEhoehLqtA2PuzoeIov4MzS3NVafLcOIPGO9vkMsv3tet98HR1YVlkwYqQ">
    <img src="https://lh5.ggpht.com/ZRHoohRN9Q4ZsIV-apYxqMg8CH-Imum2uEhoehLqtA2PuzoeIov4MzS3NVafLcOIPGO9vkMsv3tet98HR1YVlkwYqQ" alt="A servo-controlled retractable probe" style="min-width: 640px; max-width: 100%; height: auto;"/>
  </a>
  <p style="margin-top: 0.5rem; font-style: italic;">Making the probe retractable allows the probe not to be in the way of the plastic when it is not used.</p>
</div>
{:/nomarkdown}

## Hardware requirements

You will need a probe switch attached to the machine's actuator, or a bed able to trigger an end stop input when the hotend touches it. A point detection is best as the actual position is important for probing. (proximity probes are suboptimal as they do not detect the point position).

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  A probe is <strong>not</strong> an endstop and therefore cannot be used to Home the Z axis. You need a Z endstop to use G28 to home the Z axis.

  Below are some instructions on how you can set the bed Z height using a probe (G30).

  <strong>NOTE</strong> that gamma_max in the endstop configuration <strong>IS</strong> used to set the maximum default travel for a probe command (G30) <strong>ONLY IF</strong> zprobe.max_z is not defined.
</sl-alert>

A bit more: You have two choices:

- Configure your probe as an endstop (in the endstop module), in which case you can use G28 to use it to seek the bed, but you can't use it in the zprobe module
- Configure your probe as a probe (in the probe module), in which case you can't use it with G28 (the endstop module) to seek the bed, **but** you can use it with G30 to seek the bed, and you can use it with G31/G32 etc to level/calibrate (this is likely what you want to do).

The point is you configure your sensor as *either* a probe or an endstop, **not both**. You can still use it for both leveling/calibration *and* bed seeking, it's just that if it's a probe (and not an endstop), you use a different Gcode (G30) than if it were an endstop (G28).

## Types of probes

{% include_relative sensor-types.md %}

## Configuration

Add the following to the config file:

```markdown
gamma_min_endstop            nc                 # normally 1.28. Change to nc to prevent conflict, not needed on Azteeg X5

zprobe.enable                true               # set to true to enable a zprobe
zprobe.probe_pin             1.28!^             # pin probe is attached to if NC remove the !, Azteeg X5 this is 1.29
zprobe.slow_feedrate         5                  # mm/sec probe feed rate
#zprobe.debounce_ms          1                  # set if noisy
zprobe.fast_feedrate         100                # move feedrate
zprobe.probe_height          5                  # how much above bed to start probe NB only needed for G32 on delta
zprobe.return_feedrate       0                  # feedrate after a probe, default 0 is double of slow_feedrate (mm/s)
zprobe.max_z                 200                # maximum default travel for the probe command, will use gamma_max if not defined
```

<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  The <code>slow_feedrate</code> is the speed the probe moves down to find the bed, it returns (probe up) at 2 * <code>slow_feedrate</code> or <code>return_feedrate</code>.

  <code>fast_feedrate</code> is only used for any XY moves done during probing.
</sl-alert>

First test the zprobe with `M119`, make sure that the probe is 1 when triggered and 0 when not triggered.

`G30` will probe from the current position until it hits the bed and the probe triggers, it will report the distance traveled then return to where it started.

`G30 Znnn` will probe until it hits the bed then sets Z to nnn (by doing G92 Znnn), this can be used to set the nozzle height if nnn is the probes Z offset from the nozzle in the Z direction.

`G30 Fxxx` will run the probe at xxx mm/min overriding the slow_feedrate.

`G38.2`, `G38.3`, `G38.4`, `G38.5` (for probing in X and Y) are also implemented as documented [here](http://linuxcnc.org/docs/2.6/html/gcode/gcode.html#sec:G38-probe) **NOTE** probing in X or Y on a delta is not recommended due to non-linear movement issues.

If there are multiple leveling strategies selected the `Pn` parameter will select which one to send leveling codes to, 0 being the first defined one, 1 the second and so on. eg `G29 P1` will send G29 to the second defined leveling strategy.

There are several M670 parameters that can set different settings for zprobe overriding the config settings, these are all saved with M500

| `M670 S0.50 K2.00 R2.5` | Set Probe feedrates slow/fast/return (mm/sec) |
| `M670 Z200.00` | Set Probe max_z (mm) |
| `M670 H2.00` | Set Probe height (mm) |
| `M670 I1` | Temporarily invert the sense of the probe pin (Not saved with M500) |

<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  If a <code>leveling-strategy.xxx.enable</code> is set to <code>true</code> this enables one of the bed leveling strategies described below.

  <strong>NOTE</strong> that most leveling strategies cannot be run from a web interface. If using network, use telnet to run them, or use the USB serial port.
</sl-alert>

### Configuration options

| Option | Example value | Explanation |
| --- | --- | --- |
{% include_relative zprobe-options.md %}

# Probing for linear delta machines

## Delta calibration

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  This calibrates the endstops and delta radius only, it is designed to be run once and done, no need to run it before each print.<br><br>Just run it and save the results.<br><br>It does <strong>not</strong> set the Z height, that can be done in several different ways as described later.
</sl-alert>

Make sure the config has `delta_homing` true set and that `zprobe.max_z` is set to about 20-30mm shorter than the distance to the bed, otherwise it will crash into the bed at high speed.

Also in the config set:

```markdown
leveling-strategy.delta-calibration.enable   true            # basic delta calibration
leveling-strategy.delta-calibration.radius   100             # the probe radius
leveling-strategy.delta-calibration.initial_height 10        # height above bed to stop initial move
#the initial height above the bed we stop the initial move down after home to find the bed
#this should be a height that is enough that the probe will not hit the bed and is an offset from zprobe.max_z (can be set to 0 if zprobe.max_z takes into account the probe offset)
```

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Note that <code>leveling-strategy.delta-calibration.radius</code> should optimally be set such that the probe points are on the circumference of a circle that is equidistant from the center of the bed to the towers.<br><br>This minimizes the effect one endstop has on the others when adjusted.<br><br>This will usually put the probe points close to the edge of the glass bed.
</sl-alert>

### Calibration routine

Issuing the `G32` command will run the full calibration sequence automatically.

It will cycle several times to converge on a good result.

If the result is good use `M500` to save the `M666` settings.

What will happen is it will home the probe down to find the bed, then home again then move down to 5mm above the bed (or whatever you set `zprobe.probe_height` to).

Then it will probe the three towers at the specified `leveling-strategy.delta-calibration.radius` from the center, and will print out the results, it will set the endstop trims and home, this will repeat 3-4 times, each time the difference between the three probes should get smaller, once it has completed 4 probes or the difference is under 0.03mm it will home one last time then probe the three points to confirm the calibration, then probe the center.

It will also adjust the delta radius (`M665 Rnnn`) to get the center the same height as the outside points.

### Configuration options

| Option | Example value | Explanation |
| --- | --- | --- |
{% include_relative delta-calibration-strategy-options.md %}

### Example configuration

To activate this leveling strategy, copy/paste the following to your [configuration file](configuring-smoothie) and edit it accordingly:

```markdown
leveling-strategy.delta-calibration.enable                true      # Set to true to enable the delta calibration leveling strategy.
                                                                    # This uses the probe to figure out the plane's tilt and arm's radius
                                                                    # in a delta machine
leveling-strategy.delta-calibration.radius                100       # Radius at which to probe the three points
leveling-strategy.delta-calibration.initial_height        10        # The initial height above the bed we stop the initial move down after home
                                                                    # to find the bed. This should be a height that is enough that the probe
                                                                    # will not hit the bed
```

### Uses

These are the different ways to use the calibration routine:

| `G29` | will probe the seven points on your bed, you can use this to see how well the bed is leveled. |
| `G29.1` | will probe the seven points on your bed, and output the data that can be fed into some offline least errors scripts to adjust tower offsets |
| `G32` | Does the full calibration sequence, endstop and delta radius |
| `G32 R0` | Will only do delta radius calibration |
| `G32 E0` | Will only do endstop calibration |
| `G32 I0.02` | Will set the target to within 0.02mm |
| `G32 K0` | Will keep the current endstop trim settings and check them, without K the trims are cleared to zero and a full calibration is performed |
| `G32 J110.0` | will set the probe radius to 110.0 mm for this session |
| `M500` | saves the probe points |
| `M503` | displays the current settings |

Example use:

```markdown
    G28 (Home XYZ)
    (Move Z at least 30mm away from the bed if it's not, and attach probe if you have a removable probe)
    G32 (Calibrate the machine)
    (Remove probe if you have a removable probe)
    M500 (to save probe results)
    G28 (Home XYZ)
    (Manually: jog down to touch the plate)
    M306 Z0
    M500 (to save homing offset)
    G28
    (Machine is now calibrated and knows its correct height above the bed)
```

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  You will need to set the Z height after calibration using one of the several methods available mentioned here <a href="delta">Delta</a>
</sl-alert>

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  There are <strong>NO</strong> probe offsets for delta calibration, so the probe should be within 10-20mm of the nozzle.<br><br>This is by design as the calibration works solely on relative positions.<br><br>To be clear: there are no offsets in Smoothie, and they would not be useful as calibration is relative.<br><br>This can be confusing to Marlin users.<br><br>Just use it and you'll see.
</sl-alert>

<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  If you are getting the <code>Calibration failed to complete</code> error, or the probe crashes into the bed on the initial probe, it usually means you need to increase the <code>leveling-strategy.delta-calibration.initial_height</code> config setting to a bigger value, try 10 or 20 or bigger.<br><br>With the recent version it should move fast to just above the bed then move to the bed slowly, if it hits the bed on the first fast move then you need to set initial-height bigger.
</sl-alert>

See [http://minow.blogspot.com/](http://minow.blogspot.com/) for more details of calibrating a delta.

![A probing height map](http://boim.com/DeltaUtil/flatBed.png)

Nothing is perfect

## Delta Grid Compensation

Probes delta_grid.size points in X and Y (total probes size * size) and stores the relative offsets from the 0,0 Z height.
When enabled every move will calculate the Z offset based on interpolating the height offset within the grids nearest 4 points.

Should be used in conjunction with the delta calibration strategy above.

First calibrate with G32 then if needed do G31 to set the grid compensation. If you want to save the grid, do M374.

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>For use on linear delta machines only, do not use for a cartesian machine.</strong> The <code>delta-grid.radius</code> specified should be at least as big as the largest X,Y position likely to be moved to.<br><br>It gets very inaccurate if you try to print outside of the radius you specified.
</sl-alert>

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <code>G31</code> is the probe command on this not <code>G32</code>.
</sl-alert>

### Configuration

The strategy must be enabled in the config as well as zprobe.

```markdown
leveling-strategy.delta-grid.enable         true
```

The radius of the bed must be specified with...

```markdown
leveling-strategy.delta-grid.radius        50
```

This needs to be at least as big as the maximum printing radius as moves outside of this will not be compensated for correctly

The size of the grid can be set with...

```markdown
leveling-strategy.delta-grid.size        7
```

This is the X and Y size of the grid, it must be an odd number, the default is 7 which is 49 probe points

```markdown
leveling-strategy.delta-grid.do_home         true
```

This must be set on a Delta printer (although it should default to true).

If you are not using all 3 endstops (or prefer to home manually before G32):

```markdown
leveling-strategy.delta-grid.do_home        false
```

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  You are responsible to make sure that (0,0) is in a repeatable location if <code>do_home</code> is set to <code>false</code>.
</sl-alert>

Optionally probe offsets from the nozzle or tool head can be defined with...

```markdown
leveling-strategy.delta-grid.probe_offsets  0,0,0  # probe offsets x,y,z  (Z should always be 0)
```

They may also be set with M565 X0 Y0 Z0.

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Setting probe offsets on a delta will make the grid less effective the further the probe is from the head, this is especially true if you are using it to correct geometry errors, as they depend on the actuator position not the head position.<br><br>So having a probe offset from the head will try to compensate for errors which are offset from where the head actually is.<br><br>There is no easy way to overcome this other than have the probe as close to the nozzle as possible.
</sl-alert>

If the saved grid is to be loaded on boot then this must be set in the config...

```markdown
leveling-strategy.delta-grid.save        true
```

Then when M500 is issued it will save M375 which will cause the grid to be loaded on boot. The default is to not autoload the grid on boot.

<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  The grid size and the radius is saved in the file, and restored when it is loaded with M375.<br><br>If the grid size is different from the one in config it will <strong>NOT</strong> load.<br><br>If the radius is different, then the radius will be set to whatever was saved overriding the one set in config.<br><br><strong>DO NOT</strong> call M375 from a gcode file as that will cause the system to run out of memory and crash.
</sl-alert>

Optionally an initial_height can be set that tell the initial probe where to stop the fast descent before it probes, this should be around 5-10mm above the bed

```markdown
leveling-strategy.delta-grid.initial_height  10
```

### Configuration options

| Option | Example value | Explanation |
| --- | --- | --- |
{% include_relative delta-grid-calibration-options.md %}

### Example configuration

To activate this leveling strategy, copy/paste the following to your [configuration file](configuring-smoothie) and edit it accordingly:

```markdown
leveling-strategy.delta-grid.enable               true     # The strategy must be enabled in the config, as well as the zprobe module.
leveling-strategy.delta-grid.radius               50       # Radius of the bed, must be specified. This needs to be at least as big as
                                                           # the maximum printing radius as moves outside of this will not
                                                           # be compensated for correctly
leveling-strategy.delta-grid.size                 7        # The size of the grid, for example, 7 causes a 7x7 grid with 49 points.
                                                           # Must be an odd number.
leveling-strategy.delta-grid.probe_offsets        0,0,0    # Optional probe offsets from the nozzle or tool head
leveling-strategy.delta-grid.save                 false    # If the saved grid is to be loaded on boot then this must be set to true
leveling-strategy.delta-grid.initial_height       10       # Optionally an initial_height can be set that tell the initial probe
                                                           # where to stop the fast descent before it probes, this should be
                                                           # around 5-10mm above the bed
```

### Usage

| `G29` | test probes in a grid pattern within the radius producing a map of offsets, this can be imported into a graphing program to visualize the bed (