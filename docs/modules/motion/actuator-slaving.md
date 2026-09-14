---
permalink: /actuator-slaving
title: Slaved Axes
---

# Slaved Axes

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Smoothieware V2 only:</strong> Software slaving supports internal TMC2590 or TMC2660 drivers. Smoothie rejects <code>slaved_to</code> on an actuator configured with an external driver.
</sl-alert>
{:/nomarkdown}

A slaved axis uses two motors for one machine axis. Typical machines use two motors on Y for a wide gantry or two motors on Z for a large bed. Smoothie sends the same steps to the primary and secondary motors during normal motion.

The secondary motor occupies an A, B, or C actuator slot. That slot no longer acts as an independent G-code axis.

## Restrictions

- Only `delta`, `epsilon`, or `zeta` can serve as the secondary actuator.
- They can slave only to `alpha`, `beta`, or `gamma`.
- One primary actuator can have one slave.
- Place a slaved actuator after every independent actuator in the contiguous actuator list.
- Both motors need matching steps per millimetre, microsteps, and compatible motion settings.
- Software slaving works only with the internal TMC driver implementations. Wire external step/direction drivers in parallel when the electrical interface supports it.

## Basic configuration

This example uses `delta` as a second Y motor controlled by `beta`:

```ini
[actuator]
alpha.steps_per_mm = 800
alpha.max_rate = 1800

beta.steps_per_mm = 800
beta.max_rate = 1800
beta.microsteps = 32

gamma.steps_per_mm = 800
gamma.max_rate = 1800

delta.microsteps = 32
delta.slaved_to = beta
```

During ordinary Y moves, Smoothie steps both `beta` and `delta`. Commands for the A axis no longer move `delta` independently.

## Squaring with a second endstop

Add an endstop assigned to the secondary actuator's axis letter. For the `delta` example, assign it to A. Do not enable that endstop as a hard limit; `G28.7` refuses an endstop with `limit_enable = true`.

```ini
[endstops]
miny.enable = true
miny.pin = PI1^
miny.homing_direction = home_to_min
miny.homing_position = 0
miny.axis = Y
miny.fast_rate = 30
miny.slow_rate = 5
miny.retract = 5

slave_y.enable = true
slave_y.pin = PI2^
slave_y.axis = A
slave_y.limit_enable = false
```

Align and measure the offset:

1. Square the gantry by hand.
2. Home the primary Y axis.
3. Position the secondary endstop so it has released but lies within 20 mm of its trigger point.
4. Send `G28.7 Y0`. Smoothie moves only the secondary motor to its endstop, reports the travelled distance, then returns it by that distance.
5. Store the reported distance as Y trim with `M666 Y<distance>`, then use `M500` if you want to save it.
6. Home Y again and send `G28.7 Y1`. Smoothie finds the secondary endstop and returns by the stored Y trim, aligning the two motors.

`G28.7` requires one `X`, `Y`, or `Z` argument. A zero value measures without applying trim; a non-zero value applies the stored trim. The primary axis must already be homed, and the secondary endstop must not start in its triggered state.

See the [G28 command family](/g28#g287-slaved-axis-homing-v2-only) for the command reference.

## Source

- [`Robot.cpp` actuator configuration](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/robot/Robot.cpp#L285-L354)
- [`Endstops.cpp` `G28.7` handling](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/endstops/Endstops.cpp#L988-L1003)
