---
permalink: /endstops-reworked
title: "Endstops — reworked"
---

> **Temporary comparison page:** this is the reworked version. [Open the current Endstops page in another tab](/endstops){:target="_blank" rel="noopener"} to compare them side by side.

{% include modules/endstops-probes/guide-endstops-reworked-for-include.md %}

## Configuration

Wire and test the switch with {::nomarkdown}<mcode>M119</mcode>{:/nomarkdown} first. Once Smoothie reliably sees it change between pressed and released, tell the firmware which direction to home, what coordinate it has found, and how far it may travel while looking for the switch.

### Quick migration guide

Here is the same basic three-axis, home-to-min setup in V1 and V2 format:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

**V1 flat configuration:**

```
alpha_min_endstop                            1.24^!
alpha_homing_direction                       home_to_min
alpha_min                                    0
alpha_max                                    200
alpha_max_travel                             500

beta_min_endstop                             1.26^!
beta_homing_direction                        home_to_min
beta_min                                     0
beta_max                                     200
beta_max_travel                              500

gamma_min_endstop                            1.28^!
gamma_homing_direction                       home_to_min
gamma_min                                    0
gamma_max                                    200
gamma_max_travel                             500
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

**V2 INI configuration:**

```ini
[endstops]
minx.enable = true
minx.pin = PD0^
minx.homing_direction = home_to_min
minx.homing_position = 0
minx.axis = X
minx.max_travel = 500

miny.enable = true
miny.pin = PI1^
miny.homing_direction = home_to_min
miny.homing_position = 0
miny.axis = Y
miny.max_travel = 500

minz.enable = true
minz.pin = PI0^
minz.homing_direction = home_to_min
minz.homing_position = 0
minz.axis = Z
minz.max_travel = 500
```

Those pins are the ones used by the bundled V2 reference configurations. Confirm them against the configuration and pinout for your exact board before copying the block.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

Set `home_to_max` and configure the maximum input instead if the switch is at the far end of the axis. Do not enable homing on an axis which has no homing switch.

<span id="configuration-options"></span>

### All configuration options

The large setting table has been split into the [complete Endstop configuration reference](endstops-options). It contains every V1 and V2 setting from the original page: homing modes and order, debounce, delta and SCARA trim, all six input pins, positions, maximum travel, hard limits, fast and slow rates, and retract distances. It also contains the endstop signal diagram. Nothing in that table has been summarized away.

Use the short example above to get the ordinary case running. Open the full table when you need to change rates, retract distance, debounce, trim, a maximum switch, or a less common kinematics setup.

## Homing

Once {::nomarkdown}<mcode>M119</mcode>{:/nomarkdown} changes correctly when you press the switch, you can test homing with motor power on. Stay ready to cut the power the first time.

In RepRap mode, home one axis first. For example:

```
G28 Z0
```

will home the Z axis.

And:

```
G28
```

will home all axes which have endstops enabled, which is all three in the standard V1 configuration.

If your axis moves until it hits the end-stop, stops, moves a small distance back, then goes a bit slower back to the end-stop and stops again, that end-stop is working fine.

If the axis moves a small distance in the wrong direction and stops, Smoothie most probably thinks the endstop is already pressed. Check {::nomarkdown}<mcode>M119</mcode>{:/nomarkdown}; if the reading is inverted, add or remove `!` on the pin.

If the axis moves and never stops, even after the end-stop is physically hit, Smoothie never sees the end-stop as pressed. Cut motor power and go back to the wiring and {::nomarkdown}<mcode>M119</mcode>{:/nomarkdown} test.

If the axis moves away from the switch, correct the homing direction or the motor direction before trying again.

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  The <code>firmware-cnc.bin</code> firmware is in CNC mode and uses GRBL compatibility mode by default. In that mode <gcode>G28</gcode> does <strong>not</strong> home; it goes to a predefined park position set with <gcode>G28.1</gcode>. To home in CNC/GRBL mode, issue <code>$H</code> or <gcode>G28.2</gcode>. See the <a href="g28">G28 page</a> for the complete distinction.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Currently only the minimum <strong>or</strong> maximum endstop can be used for homing an axis. Do not set endstops for axes that shall not be homed.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Note for deltas using M666 to set soft trim:</strong><br><br>
  When you home a delta that has non-zero trim values, you will find that X and Y are not 0 after homing. This is normal.<br><br>
  If you want X0 Y0 after homing, set <setting v1="move_to_origin_after_home" v2="endstops.common.move_to_origin_after_home"></setting> to <code>true</code>. This moves the effector to 0,0 after homing and applying the trim. Make absolutely sure the carriages can come off the switches and make that move safely; otherwise it may crash into your endstops.
</sl-alert>
{:/nomarkdown}

## Limit switches

Endstops may also act as limit switches. During normal operation, triggering any enabled limit switch halts the system and stops all operations. Smoothie sends `!!` to the host so it stops sending more data; recent development versions of OctoPrint and [Pronterface](pronterface) support this.

Sending `$X`, sending {::nomarkdown}<mcode>M999</mcode>{:/nomarkdown}, or resetting the board is required to continue.

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>Jog away from the switch, not farther into it.</strong><br><br>
  While a limit switch is still triggered, the limits are disabled so that you can jog off it. This is far from perfect but it is a compromise: otherwise the only option would be to push the axis off the switch by hand. Jog slowly and be ready to cut motor power, because a move in the wrong direction can crash the machine into the limit.
</sl-alert>
{:/nomarkdown}

To enable hard limits, use the following options. They are disabled by default.

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```
alpha_limit_enable   true   # enable X min and max limit switches
beta_limit_enable    true   # enable Y min and max limit switches
gamma_limit_enable   true   # enable Z min and max limit switches
```

In V1, enabling an axis enables both its minimum and maximum inputs as limits. Set an absent input pin to `nc` to disable that end.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[endstops]
minx.limit_enable = true
miny.limit_enable = true
minz.limit_enable = true
```

V2 enables the limit role per input. Enable `maxx.limit_enable`, `maxy.limit_enable`, or `maxz.limit_enable` only if that maximum input is configured and physically present.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

After homing, the axis is usually left pressing the switch. When limits are enabled, Smoothie backs off by <setting v1="{axis}_homing_retract_mm" v2="endstops.{min/max}{axis}.retract"></setting> so it can release.

The downside is that if you home to 0 and the switch is still triggered at 0, moving to 0,0 will fire the limit again. Set a homing offset such as `M206 X-5 Y-5`, using enough distance to come off the switch. An alternative is to set the minimum or maximum X and Y coordinates to -5 instead of 0. That way you can home and still safely go to 0 without triggering another limit event.

You can also enable software endstops and configure them to refuse moves beyond the work area. This makes the recovery compromise a bit safer, but it only helps after the machine has homed and knows where it is.

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Boards with few endstop connectors:</strong><br><br>
  Some boards have only three connectors, which is not enough for one switch at each end of all three axes. You can still put two switches on one connector:
  <ul>
    <li>Connect two normally-closed switches in series</li>
    <li>Or connect two normally-open switches in parallel</li>
  </ul>
  This allows minimum and maximum limit switches to work from the same input. Normally-closed series wiring keeps the useful broken-wire behavior described above.
</sl-alert>
{:/nomarkdown}

## Soft endstops

Soft(ware) endstops allow the board to refuse any command that would put the tool outside the bounds of the work area.

This only functions once the machine has been homed; until then it cannot know where it is. After homing, send {::nomarkdown}<mcode>M211</mcode>{:/nomarkdown} to see the current state. Use {::nomarkdown}<mcode>M211 S0</mcode>{:/nomarkdown} to disable soft endstops temporarily and {::nomarkdown}<mcode>M211 S1</mcode>{:/nomarkdown} to enable them again.

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```
soft_endstop.enable   true   # enable soft endstops
soft_endstop.xmin     1      # minimum X position
soft_endstop.xmax     999    # maximum X position
soft_endstop.ymin     1      # minimum Y position
soft_endstop.ymax     499    # maximum Y position
soft_endstop.zmin     1      # minimum Z position
soft_endstop.zmax     199    # maximum Z position
soft_endstop.halt     true   # halt instead of ignoring an out-of-bounds command
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

The old page contained a V2 `[soft_endstop]` block obtained by translating the V1 names. The bundled V2 configurations do not contain that block, so it is not reproduced here as working configuration. Do not guess configuration syntax on a machine that can damage itself: use a V2 firmware version which documents software limits, or verify the feature against the exact firmware you are running.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

It is highly recommended that you always enable HALT when a soft endstop is hit. The “ignore command” option is VERY dangerous: later commands inside the limits continue from a position the host did not expect, which can cause untold damage.

## Usage example with home offsets

Here is a common sequence you may use to set bed height. This need not be repeated unless the bed changes.

```
; Home
G28
; move to 5mm above bed
G0 Z5
; then manually jog down until nozzle is on bed or just traps a sheet of thin paper
; sets the Z homing offset based on current position
M306 Z0
G28
G0 Z0
; check nozzle still captures thin sheet of paper
M500
; saves the results in EEPROM equivalent
```

See [Gamma max](gamma-max) for the complete Z-height procedure.

## Changing the origin

The homing position, or origin, is the 0,0 position relative to which the machine moves.

On a delta, the homing position is automatically the center of the bed.

On a Cartesian machine, however, it is the point at which the end-stops are hit, generally a corner of the machine. You might want to have a different origin point though.

For example, if your X axis homes to the maximum endstop, and that endstop is 200 mm away from the machine origin, tell Smoothie where that switch is with:

```
alpha_max   200
```

If X homes to the minimum endstop, the work area is 200 mm wide, and you want the origin at the center, use:

```
alpha_min   -100
```

By default, the machine homes and sets the current position as configured, but does not move to 0,0 afterward. Set `move_to_origin_after_home` to `true` if you want that move, once you have made sure the path is clear.

## Powered endstops wiring

Mechanical endstops are simple switches: they let a signal pass through, or not. They have no intelligence of their own.

There are more sophisticated endstops, for example Hall-effect or optical sensors. These are powered endstops. Besides Signal and Ground, they need a power supply—but not necessarily 5 V. Check the data sheet for the required supply voltage, the output voltage, and the output type before connecting anything.

Different powered endstops behave differently. Some pull Signal to Ground when triggered; others produce a high voltage. Some have open-collector outputs and need a pull-up. To know exactly what your endstop does, see its documentation. In particular, do not assume that an inductive or capacitive sensor powered at 24 V produces a voltage which is safe for a Smoothieboard input.

If {::nomarkdown}<mcode>M119</mcode>{:/nomarkdown} reports the opposite of what it should, invert the input with `!` just as you would for a mechanical switch.

Some powered endstops need the internal pull-up removed. On V1 X min, change:

```
alpha_min_endstop   1.24^
```

to:

```
alpha_min_endstop   1.24
```

If the input needs a pull-down, use:

```
alpha_min_endstop   1.24v
```

In some very rare cases, the endstop reading circuit on the Smoothieboard will not suit the sensor. Use a compatible free GPIO only after checking the [pinout](pinout) and [pin configuration rules](pin-configuration).

<span id="sensor-types"></span>
<span id="recommendations"></span>

## Types of endstops

The sensor comparison has been split into the [complete Endstop and probe sensor types table](sensor-types). It keeps all eight original rows—mechanical, optical, Hall effect, inductive, capacitive, force-sensitive resistor, IR probe, and BLTouch—with their uses, pros, cons, ratings, advice, and the Reprap Z-probe link.

The short version is that mechanical switches are the simplest, cheapest, and most reliable option. Don't use anything else unless you have a very good reason to. Just getting a fancier sensor because it feels cool to do so is most likely going to bite you in the back quickly. For a retractable Z probe, BLTouch is essentially a servo-mounted mechanical switch and is also a good option.

<span id="additional-resources"></span>
<span id="external-resources"></span>

## Going further

Smoothie is Open Source, so if you are curious how the module works, you can simply [look at the V1 endstop code](https://github.com/Smoothieware/Smoothieware/blob/edge/src/modules/tools/endstops/Endstops.cpp).

Useful pages to keep nearby:

- [Complete Endstop configuration reference](endstops-options)
- [Endstop and probe sensor types](sensor-types)
- [G28 command reference](g28)
- [Smoothieboard V1 pinout](pinout)
- [Smoothieboard V2 Prime board page](smoothieboard-v2-prime)
- [STM32H7 pin-use reference](stm32h7-pin-usage)
- [Z probe setup](zprobe)

### General video about mechanical endstops

If you would rather see a mechanical endstop explained, this video may help:

{::nomarkdown}
<div style="max-width: 720px; margin: 1.5rem auto; aspect-ratio: 16 / 9;">
  <iframe title="Mechanical endstop overview" width="560" height="315" src="https://www.youtube.com/embed/FrYdAiSLKig" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="display: block; width: 100%; height: 100%;"></iframe>
</div>
{:/nomarkdown}
