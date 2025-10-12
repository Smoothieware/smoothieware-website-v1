
# Z-Probe Guide

Smoothie allows you to use a probe to do a variety of tasks that improve precision and automation in your CNC operations.

## What is a Z-Probe?

A Z-probe is a sensor that detects when the tool (or nozzle) makes contact with a surface.

This allows the machine to automatically determine positions and heights without manual measurement.

## Common Uses

### Machine Calibration

Calibrate machine geometry, particularly important for [delta machines](delta) where precise geometry is critical for accurate printing.

### Bed Leveling

Automatically level un-even or non-level surfaces using either:

- **Grid method** - Probes multiple points across the surface to create a height map
- **Three-point method** - Probes three points to determine the plane of the surface

### Tool Height Detection

Automatically find the distance between the tool and either the workpiece or the build surface.

This is essential for:

- Setting Z-zero accurately
- Compensating for different tool lengths
- Ensuring proper first layer height in 3D printing

### Tool Length Detection

Automatically detect tool lengths when using multiple tools or when tools are changed.

## Types of Probes

Common probe types include:

- **Touch probes** - Physical contact sensors
- **Inductive probes** - Detect metal surfaces without contact
- **Capacitive probes** - Can detect various materials
- **BLTouch/servo probes** - Deployable mechanical probes

## Getting Started

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Full Documentation:</strong> For complete information about configuring and using probes with Smoothie, read the <a href="zprobe">ZProbe module documentation</a>.
</sl-alert>
{:/nomarkdown}

The ZProbe documentation covers:

- Hardware connection and wiring
- Configuration options
- Calibration procedures
- G-code commands for probing
- Troubleshooting tips

## Related Documentation

- [ZProbe Module](zprobe) - Complete probe configuration guide
- [Endstops](endstops) - Related to homing operations
- [Delta](delta) - Delta printer calibration using probes
- [Gamma Max](gamma-max) - Setting Z-height with and without probes
