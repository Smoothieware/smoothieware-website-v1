---
permalink: /cartesian
---

# Cartesian Arm Solution

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Version Support:</strong> This arm solution is supported in both Smoothieware v1 ✅ and v2 ✅
</sl-alert>
{:/nomarkdown}

The Cartesian arm solution is the most common type of machine configuration used in 3D printers and CNC machines.

In a Cartesian machine, each actuator (motor and linear rail) directly corresponds to an axis in Cartesian space:

- **Alpha actuator** controls the **X axis**
- **Beta actuator** controls the **Y axis**
- **Gamma actuator** controls the **Z axis**

This is the simplest arm solution, as there is a direct 1:1 relationship between the motors and the movement in space - no mathematical conversion is needed.

## Why Cartesian?

Cartesian is the default and most straightforward arm solution for several reasons:

- **Simple to understand**: Direct motor-to-axis mapping makes troubleshooting easy
- **Easy to calibrate**: Steps-per-mm calculation is straightforward for each axis
- **Predictable behavior**: What you command is exactly what moves
- **Wide support**: Almost all CAM software and G-code assumes Cartesian by default
- **Proven reliability**: Decades of industrial and hobbyist use

## Configuration

To configure your machine to use the Cartesian arm solution, add this to your configuration file:

```
arm_solution cartesian
```

This is the default setting in Smoothieware, so if you don't specify an arm solution, Cartesian will be used automatically.

### Complete Configuration Example

Here's a typical Cartesian configuration:

```
# Cartesian arm solution (can be omitted as it's the default)
arm_solution                                 cartesian

# Alpha (X axis)
alpha_step_pin                               2.0
alpha_dir_pin                                0.5
alpha_en_pin                                 0.4
alpha_steps_per_mm                           80
alpha_max_rate                               12000

# Beta (Y axis)
beta_step_pin                                2.1
beta_dir_pin                                 0.11
beta_en_pin                                  0.10
beta_steps_per_mm                            80
beta_max_rate                                12000

# Gamma (Z axis)
gamma_step_pin                               2.2
gamma_dir_pin                                0.20
gamma_en_pin                                 0.19
gamma_steps_per_mm                           400
gamma_max_rate                               300
```

## Common Cartesian Machines

Cartesian configurations are used in:

- **Most desktop 3D printers** - Prusa i3, Creality Ender, Ultimaker, MakerBot, etc.
- **CNC routers and mills** - ShopBot, X-Carve, Shapeoko, industrial mills
- **Laser cutters** - Most CO2 and diode laser cutters
- **Pick and place machines** - SMT assembly machines
- **Vinyl cutters** - Cricut, Silhouette, Roland cutters
- **Plasma cutters** - CNC plasma tables

## Advantages and Disadvantages

### Advantages ✅

- **Simplicity**: Easiest to understand and troubleshoot
- **Direct control**: Each motor controls exactly one axis
- **Easy calibration**: Straightforward steps-per-mm calculation
- **Large build volume**: Can be scaled easily in any direction
- **Well documented**: Extensive community knowledge and resources
- **Predictable costs**: Standard linear rails and components
- **Universal G-code**: Works with all standard G-code without modification

### Disadvantages ❌

- **Moving mass**: Often requires moving the bed (Z) or entire gantry (X/Y)
- **Speed limitations**: Limited by the mass being moved
- **Workspace shape**: Rectangular workspace may not be optimal for all applications
- **Mechanical complexity**: Requires precise alignment of perpendicular axes
- **Belt stretch**: Long X or Y belts can stretch under acceleration

## Comparison with Other Arm Solutions

| Feature | Cartesian | Linear Delta | CoreXY | SCARA |
|---------|-----------|--------------|--------|-------|
| Setup complexity | Low | Medium | Medium | High |
| Calibration difficulty | Easy | Medium | Medium | Hard |
| Build volume shape | Rectangular | Cylindrical | Rectangular | Semicircular |
| Speed potential | Medium | High | High | High |
| Z-axis speed | Low | High | Low | Medium |
| Moving mass | High | Low | Medium | Low |
| Mechanical precision needed | Medium | High | High | Very high |

## Troubleshooting

### Problem: One axis moves in the wrong direction

**Solution:** Invert the direction pin for that axis by adding or removing '!' from the dir_pin configuration:

```
# Change this:
alpha_dir_pin    0.5

# To this:
alpha_dir_pin    0.5!
```

### Problem: Movements are the wrong distance

**Solution:** Calibrate your `steps_per_mm` for each axis. Measure actual movement and adjust:

```
new_steps_per_mm = current_steps_per_mm × (commanded_distance / actual_distance)
```

### Problem: Axes are not perpendicular

**Solution:** This is a mechanical issue. Check that your frame is square using a carpenter's square or by measuring diagonals.

## See Also

- [Arm Solutions](arm-solutions) - Overview of all arm solution types
- [Delta](delta) - Linear Delta arm solution
- [CoreXY](hbot) - Crossed-belt alternative
- [Rotatable Cartesian](rotatable-cartesian) - Rotated coordinate system variant
- [Motion Control](motion-control) - General motion control configuration
