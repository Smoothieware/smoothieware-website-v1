---
permalink: /motion-control
---


# Motion control

Smoothie reads G-code instructions and converts those into movement, typically by turning motors.

While that might sound pretty trivial to do, the laws of physics actually make this a bit more challenging than one might expect.

This page explains how to configure the different motion control parameters you can tune in Smoothie.


{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>IMPORTANT:</strong> You <strong>MUST</strong> define at least alpha, beta, and gamma in a valid config file. Do not comment out gamma even if you are not using it.
</sl-alert>
{:/nomarkdown}

## Acceleration

Or "the increase of speed". You experience it every day.

When you ask Smoothie to move a certain distance at a certain speed, it starts at a speed of 0 (not moving).

If it goes instantly to the requested speed, in most cases, that won't work: A motor cannot go from a speed of 0 to several rotations per second instantly.

It needs to accelerate to that speed.

Similarly, the axis which is controlled itself has a given weight that needs to be moved.

The faster you accelerate, the more force is required to accelerate the mass to the target speed.

This means that for any given machine, you must tune your acceleration.

And that acceleration's value is a function of the torque of your motors and the weight of whatever needs to move.

You set the acceleration value by modifying the `acceleration` value in your configuration file:

```plaintext
acceleration                                 3000             # Acceleration in mm/second/second.
```

The units are millimeters per second per second, which means how many "millimeters per second" worth of speed is added every second.

`3000` is a pretty common value for a 3D printer or laser cutter since they have very little mass to move.

`200` is a common value for CNC mills or routers since they have much more mass to move and have to apply forces to their tool.

There is no mathematical/easy way of determining a perfect value: you are going to need to try values and find the one that works best for you.

If you feel like your machine is too slow, you increase acceleration.

If your machine starts losing steps, losing its position, or shakes too much, you reduce acceleration.

Note that you do not need to reset your Smoothieboard to try new values.

You can start a "job", and while the job is executing, try new values using the {::nomarkdown}<mcode>M204</mcode>{:/nomarkdown} M-code.

For example, {::nomarkdown}<mcode>M204</mcode>{:/nomarkdown} S2000 sets acceleration to 2000 (it takes a few seconds for this to take effect after the command is sent).

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  On some machines, your Z axis is very different from the others and has different requirements and capabilities.<br><br>
  On those machines, you can set the acceleration for Z separately, by editing the <code>gamma.acceleration</code> value.
</sl-alert>
{:/nomarkdown}

## Junction deviation

Smoothie accelerates when it starts a move and decelerates when it stops the move.

But what about if you move forward, then need to move somewhat to the right?

Do you really want to decelerate to a speed of zero before moving to the right?

That'd be a huge waste of time.

Junction deviation determines how much to slow down, proportional to how much the direction changes.

It doesn't really have a unit, it's just an arbitrary ratio.

The smaller junction deviation is, the more we slow down on direction changes.

The larger it is, the less we slow down on direction changes.

This generally means you can configure how much the machine "shakes" when moving: The less the machine slows down when changing direction, the more force is transferred to the structure of the machine, and the more the machine will shake.

But the more sturdy the machine it is, the higher junction deviation it will be able to handle without shaking.

Like acceleration, this is a value you will have to "play with" to find the right value for you.

You change it by changing the `junction_deviation` value in config.

```plaintext
junction_deviation       0.05       # Similar to the old "max_jerk", in millimeters,
```

`0.05` is a typical value for a 3D printer.

If your printer is very sturdy, you could use `0.1`.

`0.005` is a typical value for a CNC mill or router, though for some machine you might need to go to smaller values like `0.001`.

You can learn more about Junction Deviation in [this forum post](https://reprap.org/forum/read.php?1,739819).

## Maximum speeds

Where speeds are concerned, Smoothie makes the distinction between two very important things: axes and actuators.

An actuator and an axis are two different things.

An actuator is the thing that the motor causes to move directly.

The axes are pretty much the coordinate system for the "tool", and the system the Gcode uses.

On a cartesian machine, they are the same thing (X is alpha, Y is beta, etc. See [Greek_alphabet](https://en.wikipedia.org/wiki/Greek_alphabet)).

But on a linear delta machine, for example, they are different.

On a linear delta, the actuator is the linear axis that moves along a tower, while the axis (or effector) is the thing at the end of the arms that moves the tool.

In Smoothie, you can set maximum speeds for both of those systems separately.

Setting a maximum speed ensures that Smoothie will never go higher than that speed for that axis or actuator.

This is useful if the machine would "skip" steps or have other problems if too high a speed was required, which is the case in most machines.

To set the maximum speed for an axis, edit the `max_speed` configuration option for that axis:

```plaintext
x_axis_max_speed            30000      # mm/min
```

The units for the speed limit are millimeters per minute.

To limit the speed for an actuator, set the `max_rate` for that actuator:

```plaintext
alpha_max_rate       30000.0         # mm/min
```

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  Note that increasing acceleration allows reaching higher maximum speeds, in general.<br><br>
  But decreasing acceleration also decreases the average movement speed over a whole G-code file.<br><br>
  This is because of physics and inertia.
</sl-alert>
{:/nomarkdown}

## Adjusting Z once printing starts (sometimes called babysteps)

You can adjust the Z while it is printing by using the WCS offsets.

For instance, to raise the head 0.1mm:

1. {::nomarkdown}<gcode>G10</gcode>{:/nomarkdown} P0 L2 Z0.1 - this will set the Z WCS to 0.1mm higher, however, it will NOT move the head immediately as it only takes effect on the next {::nomarkdown}<gcode>G1</gcode>{:/nomarkdown} that has a Z in it
2. {::nomarkdown}<gcode>G0</gcode>{:/nomarkdown} Znnn - this will move the Z after the last received G-code to nnn, you will need to make sure that nnn is the actual Z height you want right now (usually the Z it is currently at, as 0.1mm will be added to that due to step 1)

A better and easier way is in the very latest edge build.

{::nomarkdown}<gcode>G43.2</gcode>{:/nomarkdown} Z0.1 will raise the Z by 0.1mm by setting the Z tool offset and also queuing a move by 0.1mm, this is not instant but will happen when the previous G-codes have executed.

It can be canceled with {::nomarkdown}<gcode>G49</gcode>{:/nomarkdown}.

{::nomarkdown}
<strong>NOTE</strong> as this uses tool offsets a multi-extruder setup executing a T0 or T1 will reset the offset to the default for that tool.
{:/nomarkdown}

If you want to do baby steps from the panel menus, you can easily do this using the custom_menu (see [panel](/panel#all-configuration-options)) feature of panels:

```plaintext
custom_menu.babystepup.enable               true              #
custom_menu.babystepup.name                 Baby step up      #
custom_menu.babystepup.command              G43.2 Z0.05       #

custom_menu.babystepdown.enable             true              #
custom_menu.babystepdown.name               Baby step down    #
custom_menu.babystepdown.command            G43.2 Z-0.05      #
```

## All options

Here are all the options related to motion control:

| Option | Example value | Explanation |
| ------ | ------------- | ----------- |
{% include modules/motion/motion-control-options-for-include.md %}

## For devs

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  Smoothie's main job is to convert G-code into movement. Motion control modules (in the source code <a href="https://github.com/arthurwolf/Smoothie/tree/edge/src/modules/robot">src/modules/robot</a>) are the various steps in that process. For more on that process, see <a href="howitworks">Howitworks</a>, for general use and configuration documentation on Smoothie's motion control, see below.
</sl-alert>
{:/nomarkdown}

## External resources

### Video about maximum speeds

{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <iframe width="100%" height="720" src="https://www.youtube.com/embed/7HsIZuj9vOs" frameborder="0" allowfullscreen></iframe>
</div>
{:/nomarkdown}
