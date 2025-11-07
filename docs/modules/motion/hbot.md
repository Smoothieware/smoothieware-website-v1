---
permalink: /hbot
---


# H-Bot and CoreXY Configuration

H-Bot and CoreXY are two types of motion systems that use a crossed-belt configuration to move the print head or cutting tool in the X and Y directions.

Both systems use two motors to control X and Y movement, with each motor contributing to motion in both axes.

## Configuration

To configure your HBot or Corexy, set the `arm_solution` parameter in your configuration file to either `corexy` or `hbot`.

For example:

```markdown
arm_solution corexy
```

If you are using homing, also uncomment the `corexy_homing` line in the config.

## Speed Settings

It is recommended to set the `alpha_max_rate` and `beta_max_rate` to the highest speed your steppers can achieve.

These settings refer to the actuator speed (the X and Y steppers), which on a corexy can run nearly twice as fast as the requested Cartesian speed when moving in certain directions.

## Getting Direction Right

Movement in the X or Y direction always involves both alpha and beta motors, which can make configuring a corexy solution confusing.

If you find that movement is incorrect after wiring and configuring your printer, the following solutions may help:

| Problem | Possible Solution |
| ------- | ----------------- |
| My axes are swapped | Invert the signal of one motor by adding or removing '!' |
| One of my axes goes in the wrong direction | Swap the alpha and beta cables or swap the pin assignments |
