---
permalink: /corexz
---

# CoreXZ Arm Solution

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Version Support:</strong> This arm solution is supported in both Smoothieware v1 ✅ and v2 ✅
</sl-alert>
{:/nomarkdown}

CoreXZ is a motion system variant of CoreXY that uses a crossed-belt configuration to control the X and Z axes instead of X and Y.

In a CoreXZ system, two motors work together to control both X and Z movement, while the Y axis remains independent and is controlled by a single motor.

## How CoreXZ Works

Unlike traditional Cartesian systems where each motor directly controls one axis, CoreXZ uses both motors to contribute to movement in the X and Z directions:

- **Alpha motor** (Motor 1): Controls both X and Z movement
- **Beta motor** (Motor 2): Controls both X and Z movement (in a different combination)
- **Gamma motor** (Motor 3): Controls Y movement independently

The mathematical relationship is:
- Alpha position = (x_reduction × X) + (z_reduction × Z)
- Beta position = (x_reduction × X) - (z_reduction × Z)
- Gamma position = Y

This crossed-belt configuration allows for:
- Reduced moving mass on the X axis (motors can be stationary)
- Potentially higher speeds in X direction
- Different dynamics compared to traditional Cartesian

## When to Use CoreXZ

CoreXZ is useful for machines where:

- You want to reduce the moving mass in the X direction
- The Z axis doesn't need to move as frequently or as fast as Y
- You're building a machine with a fixed gantry for X/Z and moving bed for Y
- You want the benefits of a crossed-belt system but need Y to be the fast-moving axis

**Common applications:**
- Specialized CNC routers
- Custom 3D printer designs
- Plotters with moving beds

## Configuration

{::nomarkdown}
<review id="corexz:configuration">
<proposal>
{:/nomarkdown}

To configure your machine to use the CoreXZ arm solution, add this to your configuration file:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```
arm_solution corexz
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[general]
arm_solution = corexz
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

To configure your machine to use the CoreXZ arm solution, add this to your configuration file:

```
arm_solution corexz
```

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

### Reduction Parameters

CoreXZ uses two reduction parameters that scale the contribution of each axis to the motor positions:

```
x_reduction    1.0    # Scaling factor for X axis contribution (default: 1.0)
z_reduction    3.0    # Scaling factor for Z axis contribution (default: 3.0)
```

These parameters allow you to adjust for different pulley sizes or gear ratios in your X and Z drive systems.

**Default values:**
- `x_reduction`: 1.0 (no reduction)
- `z_reduction`: 3.0 (3:1 reduction)

The default `z_reduction` of 3.0 assumes that the Z axis typically needs more torque and less speed than the X axis.

### Complete Configuration Example

{::nomarkdown}
<review id="corexz:complete-config">
<proposal>
{:/nomarkdown}

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```
# CoreXZ arm solution
arm_solution                                 corexz
x_reduction                                  1.0
z_reduction                                  3.0

# Alpha (X/Z motor 1)
alpha_step_pin                               2.0
alpha_dir_pin                                0.5
alpha_en_pin                                 0.4
alpha_steps_per_mm                           80
alpha_max_rate                               12000

# Beta (X/Z motor 2)
beta_step_pin                                2.1
beta_dir_pin                                 0.11
beta_en_pin                                  0.10
beta_steps_per_mm                            80
beta_max_rate                                12000

# Gamma (Y motor - independent)
gamma_step_pin                               2.2
gamma_dir_pin                                0.20
gamma_en_pin                                 0.19
gamma_steps_per_mm                           80
gamma_max_rate                               6000
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[general]
arm_solution = corexz
x_reduction = 1.0
z_reduction = 3.0

[actuator]
alpha.step_pin = PG0
alpha.dir_pin = PG1
alpha.en_pin = PJ2
alpha.steps_per_mm = 80
alpha.max_rate = 12000
alpha.microsteps = 32
alpha.driver = tmc2660

beta.step_pin = PG2
beta.dir_pin = PG3
beta.en_pin = PJ3
beta.steps_per_mm = 80
beta.max_rate = 12000
beta.microsteps = 32
beta.driver = tmc2660

gamma.step_pin = PG4
gamma.dir_pin = PG5
gamma.en_pin = PJ4
gamma.steps_per_mm = 80
gamma.max_rate = 6000
gamma.microsteps = 32
gamma.driver = tmc2660
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

```
# CoreXZ arm solution
arm_solution                                 corexz
x_reduction                                  1.0
z_reduction                                  3.0

# Alpha (X/Z motor 1)
alpha_step_pin                               2.0
alpha_dir_pin                                0.5
alpha_en_pin                                 0.4
alpha_steps_per_mm                           80
alpha_max_rate                               12000

# Beta (X/Z motor 2)
beta_step_pin                                2.1
beta_dir_pin                                 0.11
beta_en_pin                                  0.10
beta_steps_per_mm                            80
beta_max_rate                                12000

# Gamma (Y motor - independent)
gamma_step_pin                               2.2
gamma_dir_pin                                0.20
gamma_en_pin                                 0.19
gamma_steps_per_mm                           80
gamma_max_rate                               6000
```

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

## Speed Settings

It is recommended to set the `alpha_max_rate` and `beta_max_rate` to the highest speed your steppers can achieve.

These settings refer to the actuator speed (the X/Z stepper motors), which on a CoreXZ system can run faster than the requested Cartesian speed when moving in certain directions.

The motors need to be able to handle combined X and Z movements, which can require nearly the sum of both speeds.

## Getting Direction Right

Movement in the X or Z direction always involves both alpha and beta motors, which can make configuring a CoreXZ solution confusing.

If you find that movement is incorrect after wiring and configuring your machine, the following solutions may help:

| Problem | Possible Solution |
| ------- | ----------------- |
| My X and Z axes are swapped | Swap the alpha and beta motor cables, or swap the pin assignments |
| One of my axes goes in the wrong direction | Invert the signal of one motor by adding or removing '!' from the dir_pin |
| Both X and Z go the wrong direction | Invert both alpha and beta dir_pins by adding or removing '!' |
| Movement is scaled incorrectly | Adjust the `x_reduction` and/or `z_reduction` parameters |

## Homing

If you are using homing, make sure your endstop configuration matches your CoreXZ setup:

- X endstops trigger based on X position
- Y endstops trigger based on Y position (independent)
- Z endstops trigger based on Z position

The firmware will automatically handle the coordination of the alpha and beta motors during homing operations.

## Comparison with Other Arm Solutions

| Feature | CoreXZ | CoreXY | Cartesian |
|---------|--------|--------|-----------|
| Crossed axes | X and Z | X and Y | None |
| Independent axis | Y | Z | All |
| Moving mass | Lower X mass | Lower X/Y mass | Higher |
| Complexity | Medium | Medium | Low |
| Common usage | Rare | Common | Very common |

## Troubleshooting

### Problem: Movements are skewed or distorted

**Solution:** Check your `x_reduction` and `z_reduction` values. These should match the mechanical advantage of your drive system.

### Problem: One direction moves twice as fast as expected

**Solution:** One of your motors may be running in the wrong direction. Check the dir_pin configuration and add or remove '!' as needed.

### Problem: Homing fails or moves in wrong direction

**Solution:** Verify your endstop configuration and ensure that X and Z endstops are correctly assigned.

## Source Code

For developers or those interested in the implementation details, the CoreXZ solution is implemented in:

- **v1:** [CoreXZSolution.cpp](https://github.com/Smoothieware/Smoothieware/blob/edge/src/modules/robot/arm_solutions/CoreXZSolution.cpp)
- **v2:** [CoreXZSolution.cpp](https://github.com/Smoothieware/Smoothieware-v2/blob/main/Firmware/src/robot/arm_solutions/CoreXZSolution.cpp)

## See Also

- [Arm Solutions](arm-solutions) - Overview of all arm solution types
- [HBot/CoreXY](hbot) - Similar crossed-belt system for X and Y
- [Cartesian](cartesian) - Standard Cartesian configuration
- [Motion Control](motion-control) - General motion control configuration
