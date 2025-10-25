---
layout: default
title: Jogger Module
---

# Jogger Module

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Deprecated:</strong> This module no longer works and has been abandoned, and there are no plans to integrate it.
</sl-alert>
{:/nomarkdown}

## What is Jogger?

Jogger is a module for SmoothieBoard which adds the ability to move your machine around: a process referred to as "jogging".

This module is different from most jogging tools in that it accepts input from a [joystick](joystick).

This means your machine will move smoothly in the direction of the joystick, rather than take a small step in a certain direction each time a button is pressed.

Some possible uses for the Jogger module:

- Moving a cutting tool to the origin of a part
- Moving your print head to clear a jam, inspect the nozzle, or perform bed leveling
- Moving extruders to retract the filament
- Moving a laser cutter to focus the beam

## Getting Started

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Work in Progress:</strong> Note this page is a work in progress and the joystick functionality is not yet released in smoothieware.
</sl-alert>
{:/nomarkdown}

You will need some kind of joystick-like device that the Jogger module will use to tell your steppers where to go.

See the [joystick](joystick) page for information on how to set up an analog joystick.

Once you have the [joystick](joystick) modules set up, you will need to know the [module names](module-name) of the joystick axes you want to link to the jogger.

## Configuration

### All Configuration Options

{% include_relative jogger-options.md %}

### Mapping Joystick Position to Jog Speed

The jogger module must figure out how to convert the -1 to 1 range of the joystick into meaningful jog speeds.

To do this, two main configuration parameters come into play: `max_speed` and `nonlinearity`.

- `max_speed`: tells the jogger how fast to go when the joystick is pushed as far as possible
- `nonlinearity`: tells the jogger how to go from not moving to max speed

The maximum speed should be relatively straightforward, however the nonlinearity is more difficult to explain.

To see how it works, consider the following graph:

{::nomarkdown}
<a href="/images/temporary/joystick-generic.jpg">
  <img src="/images/temporary/joystick-generic.jpg" alt="Jogger speed mapping graph showing different nonlinearity values" style="display: block; margin: 2rem auto; min-width: 640px; width: 80%; max-width: 800px;"/>
</a>
{:/nomarkdown}

On the X-axis is the joystick position, from not moved on the left (0.00) to fully moved on the right (1.00).

On the Y-axis is the jogging speed, where 0% is not moving and 100% is moving as fast as possible.

The different colored lines show how the nonlinearity parameter affects the jog speed.

The table below describes the values demonstrated in the chart above:

| Nonlinearity | Comments |
| ------------ | -------- |
| 1.0          | Linear change, moving the joystick halfway will go half of max speed |
| 1.2          | Tiny nonlinearity, will likely be indistinguishable from linear |
| 1.5          | Small nonlinearity, speed will be slightly slower for small joystick movement |
| 2.0          | Normal nonlinearity, jogging will be very slow and controlled for small joystick movement, and quickly gain speed for large movements |
| 3.0          | Large nonlinearity, jogger will barely move until joystick is pushed to ~%20, and speed will gain very quickly from here. This might be too large a value for most users |

Notice for all the example values in the chart above, there is a region below ~0.05 on the joystick axis where the jogger does not move at all.

This is the `dead_zone` configuration, which is used to make sure the joystick has actually moved before jogging.

If undesired jogging occurs, increase the `dead_zone` value.

## Examples

### Set Jog Axes

The command to set the jog axes is `M777` by default, unless changed by the `m_code_set` configuration.

To use the command, type the M-code followed by the letters to use for jog axes (in order of alpha, beta, etc.).

| Example       | Alpha Jog Axis | Beta Jog Axis |
| ------------- | -------------- | ------------- |
| `M777 XY`     | X              | Y             |
| `M777 XZ`     | X              | Z             |
| `M777 -Z`     | none           | Z             |

### Toggle Jog Axes

The command to toggle the jog axes is `M778` by default, unless changed by the `m_code_toggle` configuration.

Toggling the axes will cycle between the axes set in the `jog_axes` configuration.

```
M778
```

An example line of configuration is shown below:

```markdown
jogger.jog_axes             XY,XZ,-Z         #cycle between the joystick horz/vert controlling axes XY, XZ, and nothing/Z when using M778
```

In this example, the jogger will start controlling by controlling XY.

When `M778` is issued, it will change to XZ.

If issued again, it will change to nothing/Z, and if issued once more, go back to XY.

## Developer Documentation

For information on how to write a module which the jogger can read, see the [jogger developer documentation](jogger-dev).
