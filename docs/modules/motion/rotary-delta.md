---
permalink: /rotary-delta
---

# Rotary Delta

Rotary delta is a new and relatively uncommon arm solution for robotic systems.

Unlike traditional linear delta robots, rotary deltas use rotating joints instead of sliding carriages.

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Limited Support:</strong> This is an experimental arm solution with limited documentation and testing. It is currently unsupported as no active developers have a rotary delta to test on.
</sl-alert>
{:/nomarkdown}

## What is a Rotary Delta?

A rotary delta robot uses three rotating arms with joints instead of the linear slides used in traditional delta robots.

This design offers some potential advantages:

- **More compact**: No need for tall vertical rails
- **Different workspace**: Can reach different areas compared to linear deltas
- **Interesting kinematics**: Unique motion characteristics

However, rotary deltas come with significant challenges:

- **Complex calibration**: Extremely difficult to calibrate accurately
- **Homing difficulties**: Finding the home position is challenging
- **Limited tooling**: Few resources and tools available
- **Unproven in practice**: Very few working examples exist

## Current Implementation Status

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  The rotary delta implementation in Smoothieware is <strong>experimental and incomplete</strong>. It probably does not fully work and will need coding work to fit your specific needs.
</sl-alert>
{:/nomarkdown}

If you really want to use it, we do not have comprehensive documentation at the moment.

However, the source code may be helpful if you can read C++ code:

- [RotaryDeltaSolution.cpp](https://github.com/Smoothieware/Smoothieware/blob/edge/src/modules/robot/arm_solutions/RotaryDeltaSolution.cpp) - Main arm solution implementation
- [Rotary Delta Calibration](https://github.com/smoothieware/smoothieware/tree/edge/src/modules/tools/rotarydeltacalibration) - Calibration module (note: link may not work, check repository)

## Configuration

To use the rotary delta arm solution, you would set in your config file:

```
arm_solution                             rotary_delta
```

However, be aware that additional configuration parameters will be needed, and these are not well documented.

You will likely need to examine the source code to understand what parameters are required.

## Challenges You Will Face

If you attempt to build and use a rotary delta with Smoothieboard, be prepared for:

1. **Mechanical complexity**: Building the robot itself is challenging
2. **Calibration nightmare**: Getting accurate calibration is extremely difficult
3. **Homing problems**: Establishing a reliable home position is tough
4. **Code debugging**: You will likely need to modify the source code
5. **Limited community support**: Very few people have experience with this

## Alternative Arm Solutions

If you're looking for a delta-style robot, consider these better-supported options:

- [Linear Delta](delta) - Traditional delta robot with linear rails (well-supported)
- [Morgan Scara](morgan-scara) - SCARA-style robot arm
- [Cartesian](cartesian) - Standard X/Y/Z motion (most common)

Linear deltas are well-documented, well-tested, and have excellent community support.

## Contributing

If you have a rotary delta robot and want to help improve the Smoothieware implementation:

1. Join the developer community on IRC (#smoothiedev on Freenode)
2. Document your findings and challenges
3. Submit improvements to the code via GitHub pull requests
4. Help create better documentation based on your experience

Your contributions would be valuable for this experimental feature!

## Related Documentation

- [Arm Solutions](arm-solutions) - Overview of all arm solution types
- [Linear Delta](delta) - Well-supported delta implementation
- [Contributing](contributing) - How to contribute to Smoothieware
- [GitHub](github) - Submitting code improvements
