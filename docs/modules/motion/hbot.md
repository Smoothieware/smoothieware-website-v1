---
permalink: /hbot
---

# H-Bot and CoreXY Configuration

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Version Support:</strong> This arm solution is supported in both Smoothieware v1 ✅ and v2 ✅
</sl-alert>
{:/nomarkdown}

H-Bot and CoreXY are two types of motion systems that use a crossed-belt configuration to move the print head or cutting tool in the X and Y directions.

Both systems use two motors to control X and Y movement, with each motor contributing to motion in both axes. This design reduces the moving mass and allows for faster, more precise movements compared to traditional Cartesian systems.

## What is H-Bot / CoreXY?

In an H-Bot or CoreXY system:

- **Alpha motor** (Motor 1): Contributes to both X and Y movement
- **Beta motor** (Motor 2): Contributes to both X and Y movement (in different combinations)
- **Gamma motor** (Motor 3): Controls Z movement independently

The key difference from Cartesian is that moving in the X direction requires **both** X/Y motors to move, and moving in the Y direction also requires **both** motors to move (but in different combinations).

### Mathematical Relationship

For CoreXY and HBot:
- Alpha position = X + Y
- Beta position = X - Y
- Gamma position = Z

This means:
- To move +X: Both alpha and beta move forward
- To move +Y: Alpha moves forward, beta moves backward
- To move diagonally: One motor moves, the other stays still

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>CoreXY vs H-Bot:</strong> While the math is the same and Smoothieware uses the same code for both, there are mechanical differences in belt routing. CoreXY uses a specific belt path that eliminates certain artifacts. In Smoothieware configuration, both <code>corexy</code> and <code>hbot</code> select the same implementation.
</sl-alert>
{:/nomarkdown}

## Why Use H-Bot / CoreXY?

CoreXY and H-Bot offer several advantages:

- **Reduced moving mass**: Motors can be mounted to the stationary frame
- **Higher speeds**: Less inertia allows faster acceleration and deceleration
- **Better precision**: Less vibration from moving motors
- **Compact design**: Efficient use of space in the frame
- **Smoother motion**: Belt arrangement can provide better motion characteristics

### Common Applications

- **3D printers** - Especially speed-focused designs (Voron, Hypercube, etc.)
- **Laser cutters and engravers** - Fast, precise X/Y movement
- **Small CNC routers** - Where speed and precision matter
- **Plotters and cutters** - Vinyl cutters, pen plotters

## Configuration

To configure your HBot or CoreXY machine, set the `arm_solution` parameter in your configuration file to either `corexy` or `hbot`:

```
arm_solution corexy
```

or

```
arm_solution hbot
```

Both options use the same implementation in Smoothieware. Choose the name that matches your mechanical belt configuration.

### Complete Configuration Example

```
# CoreXY arm solution
arm_solution                                 corexy

# Alpha motor (X/Y motor 1)
alpha_step_pin                               2.0
alpha_dir_pin                                0.5
alpha_en_pin                                 0.4
alpha_steps_per_mm                           80
alpha_max_rate                               24000    # mm/min - can be very high!

# Beta motor (X/Y motor 2)
beta_step_pin                                2.1
beta_dir_pin                                 0.11
beta_en_pin                                  0.10
beta_steps_per_mm                            80
beta_max_rate                                24000    # mm/min - can be very high!

# Gamma motor (Z motor - independent)
gamma_step_pin                               2.2
gamma_dir_pin                                0.20
gamma_en_pin                                 0.19
gamma_steps_per_mm                           400
gamma_max_rate                               300

# CoreXY homing (optional but recommended)
corexy_homing                                true
```

## Speed Settings

It is recommended to set the `alpha_max_rate` and `beta_max_rate` to the highest speed your steppers can achieve.

These settings refer to the actuator speed (the physical X and Y stepper motors), which on a CoreXY system can run nearly **twice as fast** as the requested Cartesian speed when moving in certain diagonal directions.

For example:
- If you want a maximum Cartesian speed of 200mm/s (12000mm/min)
- Set `alpha_max_rate` and `beta_max_rate` to at least 24000mm/min
- This allows the motors to keep up when moving diagonally

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Important:</strong> If your max rates are too low, diagonal movements will be slower than expected, and you may experience motion artifacts or missed steps.
</sl-alert>
{:/nomarkdown}

## Homing Configuration

If you are using endstops for homing, enable CoreXY homing mode:

```
corexy_homing    true
```

This tells Smoothieware to handle the motor coordination properly during homing operations. Without this setting, homing behavior may be unpredictable.

## Getting Direction Right

Movement in the X or Y direction always involves both alpha and beta motors, which can make configuring a CoreXY solution confusing.

If you find that movement is incorrect after wiring and configuring your printer, the following solutions may help:

| Problem | Possible Solution |
| ------- | ----------------- |
| My axes are swapped | Invert the signal of one motor by adding or removing '!' from its dir_pin |
| One of my axes goes in the wrong direction | Swap the alpha and beta motor cables, or swap the pin assignments in config |
| Both axes are mirrored | Invert both alpha and beta dir_pins by adding or removing '!' |
| Diagonal movements are wrong | Check belt routing - ensure it matches CoreXY or H-Bot topology |

### Systematic Direction Testing

To systematically test and correct directions:

1. **Test X movement**: Command `G0 X10` and verify the toolhead moves in the +X direction
   - If wrong, try inverting one motor's direction pin
2. **Test Y movement**: Command `G0 Y10` and verify the toolhead moves in the +Y direction
   - If wrong, try swapping motor cables or inverting the other motor's direction
3. **Test diagonal**: Command `G0 X10 Y10` to verify coordinated movement
4. **Test homing**: Run `G28` to verify endstops work correctly

## Advantages and Disadvantages

### Advantages ✅

- **High speed**: Reduced moving mass allows for very fast movements
- **Good acceleration**: Motors mounted to frame reduce vibration
- **Precise**: Less flex and wobble compared to moving motor gantries
- **Compact**: Efficient use of frame space
- **Proven design**: Used in many high-performance 3D printers

### Disadvantages ❌

- **Complex setup**: Getting directions right can be confusing initially
- **Belt management**: Long belts require careful routing and tensioning
- **Motor coordination**: Firmware must handle coordinated movements
- **Troubleshooting**: Problems can be harder to diagnose than Cartesian
- **Limited Z performance**: Z axis is still typically a moving bed

## Comparison with Other Arm Solutions

| Feature | CoreXY/H-Bot | Cartesian | Linear Delta |
|---------|--------------|-----------|--------------|
| Setup complexity | Medium | Low | High |
| XY speed potential | Very high | Medium | Very high |
| Z speed potential | Low | Low | High |
| Moving mass | Low | High | Very low |
| Calibration difficulty | Medium | Easy | Hard |
| Build volume shape | Rectangular | Rectangular | Cylindrical |
| Mechanical precision needed | Medium | Medium | High |

## Common CoreXY Machines

Well-known CoreXY designs include:

- **Voron** (V0, V1, V2, Trident) - High-performance 3D printers
- **Hypercube** and **Hypercube Evolution** - DIY CoreXY 3D printers
- **BLV MGN Cube** - Modular CoreXY 3D printer
- **RatRig V-Core** - Large format CoreXY printer
- Many commercial laser engravers and cutters

## Troubleshooting

### Problem: Motors make noise but toolhead doesn't move

**Solution:** One motor may be wired backwards. Check that both motors are energized and swap one motor's cable polarity if needed.

### Problem: Toolhead moves diagonally when commanding straight lines

**Solution:** The motor directions are likely incorrect. Try inverting one motor's dir_pin with '!'.

### Problem: Movements are slower than expected in certain directions

**Solution:** Your `alpha_max_rate` and `beta_max_rate` may be too low. Increase them to at least 2× your desired Cartesian speed.

### Problem: Layer shifts or skipped steps on diagonal moves

**Solution:** This usually indicates the motor speeds are too high for diagonal movements. Either:
- Reduce your Cartesian max speed
- Increase `alpha_max_rate` and `beta_max_rate`
- Increase motor current (if motors are running too cool)

## Source Code

For developers or those interested in the implementation details:

- **v1:** [HBotSolution.cpp](https://github.com/Smoothieware/Smoothieware/blob/edge/src/modules/robot/arm_solutions/HBotSolution.cpp)
- **v2:** [HBotSolution.cpp](https://github.com/Smoothieware/Smoothieware-v2/blob/main/Firmware/src/robot/arm_solutions/HBotSolution.cpp)

## See Also

- [Arm Solutions](arm-solutions) - Overview of all arm solution types
- [CoreXZ](corexz) - Similar crossed-belt system for X and Z axes
- [Cartesian](cartesian) - Traditional motion system
- [Motion Control](motion-control) - General motion control configuration
