
# Arm Solutions

On a typical "Cartesian" machine, each actuator (a motor and a linear rail, named alpha, beta, gamma) corresponds to an axis (like X, Y, and Z).

However, on other machines, the position in Cartesian space (X, Y, Z) must be converted, using math, into a more complex position for the actuators.

This is the case, for example, of linear delta (often just called "delta") machines.

## Supported Arm Solutions

Currently, Smoothieware supports the following arm/motion solutions:

- [Cartesian](cartesian)
- [Delta](delta) (Linear Delta)
- [Rotary Delta](rotary-delta)
- [Hbot](hbot) (CoreXY)
- [Morgan Scara](morgan-scara)

## Configuration

To configure your machine for the right type, see its specific page linked above.

Each arm solution has its own configuration parameters and requirements.
