---
permalink: /morgan-scara
---

# Morgan SCARA

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Version Support:</strong> This arm solution is supported in both Smoothieware v1 ✅ and v2 ✅
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Limited Documentation:</strong> This arm solution is not fully documented yet. The information below is based on code analysis and may be incomplete. Community contributions to improve this documentation are welcome.
</sl-alert>
{:/nomarkdown}

## What is Morgan SCARA?

Morgan SCARA is an arm solution implementation for SCARA (Selective Compliance Assembly Robot Arm or Selective Compliance Articulated Robot Arm) type robots.

SCARA robots use two parallel rotary joints to provide compliance in a plane while maintaining rigidity in the vertical direction. This makes them ideal for pick-and-place operations, assembly tasks, and other applications where vertical rigidity is important but horizontal compliance is beneficial.

### SCARA Characteristics

- **Two rotary joints**: Alpha (proximal) and Beta (distal) joints rotate in parallel planes
- **Linear Z axis**: Vertical movement via a linear actuator
- **Horizontal compliance**: The arm can flex horizontally but remains rigid vertically
- **Fast operation**: Rotary joints allow quick movements in the horizontal plane
- **Compact workspace**: Semicircular or annular work envelope
- **High repeatability**: Excellent for repetitive assembly tasks

### SCARA Workspace

A SCARA robot's workspace is typically:
- **Shape**: Semicircular or annular (ring-shaped) in the horizontal plane
- **Inner radius**: Minimum reach determined by arm lengths
- **Outer radius**: Maximum reach when both arms are extended
- **Height**: Determined by the Z axis travel

## Morgan SCARA Variant

The "Morgan" variant is a specific SCARA implementation that was designed and contributed to the Smoothieware project. It may have specific geometric or kinematic characteristics that differ from standard SCARA implementations.

## Configuration



To configure your machine to use the Morgan SCARA arm solution, add this to your configuration file:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```
arm_solution morgan
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[general]
arm_solution = morgan
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}



### Configuration Parameters



Based on the source code, Morgan SCARA likely requires the following parameters (exact names may vary - refer to the source code for definitive information):

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```
arm_solution                                 morgan

# Arm geometry (example values - adjust for your machine)
# These parameters define the physical dimensions of your SCARA arm
arm1_length                                  150.0    # Length of proximal arm segment (mm)
arm2_length                                  150.0    # Length of distal arm segment (mm)

# Alpha motor (proximal joint - rotary)
alpha_step_pin                               2.0
alpha_dir_pin                                0.5
alpha_en_pin                                 0.4
alpha_steps_per_mm                           # Steps per degree of rotation
alpha_max_rate                               # Maximum rotation speed

# Beta motor (distal joint - rotary)
beta_step_pin                                2.1
beta_dir_pin                                 0.11
beta_en_pin                                  0.10
beta_steps_per_mm                            # Steps per degree of rotation
beta_max_rate                                # Maximum rotation speed

# Gamma motor (Z axis - linear)
gamma_step_pin                               2.2
gamma_dir_pin                                0.20
gamma_en_pin                                 0.19
gamma_steps_per_mm                           400      # Linear steps per mm
gamma_max_rate                               300      # Linear speed in mm/min
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[motion control]
arm_solution = morgan

# Arm geometry
[arm_solution]
arm1_length = 150.0    # Length of proximal arm segment (mm)
arm2_length = 150.0    # Length of distal arm segment (mm)

# Alpha motor (proximal joint - rotary)
[actuator.alpha]
step_pin = 2.0
dir_pin = 0.5
en_pin = 0.4
steps_per_mm = xxx     # Steps per degree of rotation
max_rate = xxx         # Maximum rotation speed

# Beta motor (distal joint - rotary)
[actuator.beta]
step_pin = 2.1
dir_pin = 0.11
en_pin = 0.10
steps_per_mm = xxx
max_rate = xxx

# Gamma motor (Z axis - linear)
[actuator.gamma]
step_pin = 2.2
dir_pin = 0.20
en_pin = 0.19
steps_per_mm = 400
max_rate = 300
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Note:</strong> The exact parameter names and requirements should be verified in the source code. The above configuration is based on typical SCARA requirements and may need adjustment for Morgan SCARA specifically.
</sl-alert>
{:/nomarkdown}



## When to Use Morgan SCARA

SCARA robots are ideal for:

### Applications ✅

- **Pick and place operations**: Electronic component placement, assembly line work
- **Assembly tasks**: Screw driving, part insertion, snap-fit assembly
- **Dispensing**: Adhesive dispensing, solder paste application
- **Inspection**: Camera-based inspection of parts
- **Testing**: Probing and testing of electronic assemblies
- **Packaging**: Placing items into containers or trays

### Advantages

- **High speed**: Rotary joints allow very fast horizontal movements
- **Excellent repeatability**: Ideal for repetitive tasks
- **Vertical rigidity**: Strong in the Z direction for pressing and insertion
- **Compact footprint**: Takes up less space than Cartesian robots
- **Good reach**: Can access a large area relative to its size

### Disadvantages

- **Complex kinematics**: Inverse kinematics calculations required
- **Difficult calibration**: Requires precise knowledge of arm lengths and joint offsets
- **Limited workspace**: Semicircular reach, cannot reach behind itself
- **Singularities**: Certain positions may be unreachable or unstable
- **Not intuitive**: G-code commands don't directly correspond to joint movements

## Calibration Considerations

SCARA robots require careful calibration:

1. **Arm lengths**: Precise measurement of proximal and distal arm segments
2. **Joint offsets**: Angular offset when joints are at "zero" position
3. **Z-axis offset**: Height of tool tip relative to base
4. **Steps per degree**: Calibration of rotary joint steps
5. **Joint limits**: Physical rotation limits to avoid collisions

## Comparison with Other Arm Solutions

| Feature | Morgan SCARA | Cartesian | Linear Delta |
|---------|--------------|-----------|--------------|
| Setup complexity | Very high | Low | High |
| Calibration difficulty | Very hard | Easy | Hard |
| Speed (horizontal) | Very high | Medium | High |
| Speed (vertical) | Medium | Low | Very high |
| Workspace shape | Semicircular | Rectangular | Cylindrical |
| Best for | Pick & place | General purpose | 3D printing |
| Repeatability | Excellent | Good | Good |
| Mechanical precision | Very high | Medium | High |

## Troubleshooting

### Problem: Cannot reach certain positions

**Solution:** You may be trying to reach a position outside the robot's workspace or at a singularity. Check that your target positions are within the reachable annular region.

### Problem: Jerky or unexpected movements

**Solution:** SCARA kinematics can produce non-linear joint movements for linear Cartesian movements. This is normal but may require tuning of acceleration and jerk settings.

### Problem: Position errors or inaccuracy

**Solution:** Verify your arm length parameters are accurate. Even small errors in arm lengths can cause significant position errors at maximum reach.

## Source Code

For developers or those interested in the implementation details:

- **v1:** [MorganSCARASolution.cpp](https://github.com/Smoothieware/Smoothieware/blob/edge/src/modules/robot/arm_solutions/MorganSCARASolution.cpp)
- **v2:** [MorganSCARASolution.cpp](https://github.com/Smoothieware/Smoothieware-v2/blob/main/Firmware/src/robot/arm_solutions/MorganSCARASolution.cpp)

Reading the source code is highly recommended if you're implementing a Morgan SCARA system, as it contains the exact kinematic equations and parameter names.

## Calibration Tool

There is a SCARA calibration tool available in the Smoothieware repository:

- [SCARAcal Module](https://github.com/Smoothieware/Smoothieware/tree/edge/src/modules/tools/scaracal)

This tool can help with the calibration process for SCARA robots.

## Related Documentation

For other arm solutions and robot configurations, see:

- [Arm Solutions Overview](arm-solutions)
- [Cartesian](cartesian)
- [Linear Delta](delta)
- [Rotary Delta](rotary-delta)
- [CoreXY](hbot)

## Contributing

If you have experience with Morgan SCARA robots and would like to contribute to this documentation, please:

- Submit improvements via [GitHub pull request](https://github.com/Smoothieware/smoothieware-website-v1)
- Share your configuration and calibration process
- Contact the project maintainer at [wolf.arthur@gmail.com](mailto:wolf.arthur@gmail.com)

Your contributions would be valuable in improving this documentation for the community!
