---
permalink: /cartesian
---

# Cartesian Arm Solution

The Cartesian arm solution is the most common type of machine configuration used in 3D printers and CNC machines.

In a Cartesian machine, each actuator (motor and linear rail) directly corresponds to an axis in Cartesian space:

- **Alpha actuator** controls the **X axis**
- **Beta actuator** controls the **Y axis**
- **Gamma actuator** controls the **Z axis**

This is the simplest arm solution, as there is a direct 1:1 relationship between the motors and the movement in space - no mathematical conversion is needed.

## Configuration

To configure your machine to use the Cartesian arm solution, add this to your configuration file:

```
arm_solution cartesian
```

This is the default setting in Smoothieware, so if you don't specify an arm solution, Cartesian will be used automatically.

## Common Cartesian Machines

Cartesian configurations are used in:

- Most desktop 3D printers (like Prusa i3, Creality Ender, etc.)
- CNC routers and mills
- Laser cutters
- Pick and place machines

## Example: C-Beam Machine

{::nomarkdown}
<div style="text-align: center;">
  <p><em>Image reference: C-Beam Cartesian machine</em></p>
  <p style="color: #666; font-size: 0.9em;">(Original image path: images/cartesian/c-beam.jpg - file not found)</p>
</div>
{:/nomarkdown}

## See Also

- [Arm Solutions](arm-solutions) - Overview of all arm solution types
- [Delta](delta) - Linear Delta arm solution
- [Rotary Delta](rotary-delta) - Rotary Delta arm solution
- [Motion Control](motion-control) - General motion control configuration
