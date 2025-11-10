# Z-Probe Options

The Z-probe module in Smoothieware is used to scan surfaces, calibrate machine parameters, and compensate for non-planar surfaces.

This is essential for features like bed leveling, height mapping, and automated calibration.

## Configuration Options

The following table lists the configuration options for the Z-probe module:

| Option | Value | Description |
| ------ | ----- | ----------- |
| <setting v1="zprobe.enable" v2="zprobe.enable"></setting> | `true` | Set to true to enable the Z-probe module. This is used to scan surfaces, and to calibrate parameters and compensate for non-planar surfaces. |
| <setting v1="zprobe.probe_pin" v2="zprobe.probe_pin"></setting> | `1.28!^` | Pin the probe is connected to. |
| <setting v1="zprobe.slow_feedrate" v2="zprobe.slow_feedrate"></setting> | `5` | Speed in millimetres/second at which the probe seeks a surface. |
| <setting v1="zprobe.fast_feedrate" v2="zprobe.fast_feedrate"></setting> | `100` | Speed in millimetres/second at which the probe does fast moves. |
| <setting v1="zprobe.return_feedrate" v2="zprobe.return_feedrate"></setting> | `50` | Speed in millimetres/second at which the probe does the return after a probe. |
| <setting v1="zprobe.debounce_ms" v2="zprobe.debounce_ms"></setting> | `1` | Debounce the probe pin over this number of milliseconds. Set to 1 or 2 if your probe is too noisy and gives false readings. |
| <setting v1="zprobe.probe_height" v2="zprobe.probe_height"></setting> | `5` | Distance above the bed at which the probing is started, once the bed's height is known. |
| <setting v1="zprobe.max_z" v2="zprobe.max_travel"></setting> | `200` | Maximum Z (was gamma_max) |
| <setting v1="zprobe.dwell_before_probing" v2="zprobe.dwell_before_probing"></setting> | `0.2` | Dwell time in seconds before probing. Useful for piezo Z-probe to avoid false trigger. |

## Understanding Probe Speeds

The Z-probe module uses different speeds for different operations:

- **fast_feedrate**: Used for quick travel moves to the probing area
- **slow_feedrate**: Used when actually approaching and touching the surface (for accuracy)
- **return_feedrate**: Used when retracting after a successful probe

Using a slower speed for the actual probing ensures more accurate measurements.

## Pin Configuration

The <setting v1="zprobe.probe_pin" v2="zprobe.probe_pin"></setting> setting uses special suffixes:

- **`!`** - Inverts the pin logic (useful for normally-open vs normally-closed switches)
- **`^`** - Enables internal pull-up resistor

For example, `1.28!^` means pin 1.28 with inverted logic and pull-up enabled.

## Common Probe Types

Different probe types work with Smoothieware:

### Mechanical Probes

- Simple microswitch-based probes
- Most reliable and simple
- Configure with appropriate debounce settings

### Inductive Probes

- Sense metal surfaces without contact
- Only work with metal beds
- No mechanical wear

### Capacitive Probes

- Can sense various materials
- More complex to set up
- Good for glass beds

### BLTouch / 3DTouch

- Servo-deployed pin probe
- Very popular and accurate
- Requires specific configuration

### Piezo Probes

- Use pressure sensors
- Very fast and accurate
- May need <setting v1="zprobe.dwell_before_probing" v2="zprobe.dwell_before_probing"></setting> setting

## Usage

After configuration, use these G-codes:

- **G30** - Single probe at current XY position
- **G32** - Run bed leveling (if leveling strategy is configured)
- **M119** - Show endstop status (including probe)

## Related Documentation

- [ZProbe](zprobe) - Main Z-probe documentation and setup guide
- [Three Point Leveling](three-point-strategy-options) - Three-point leveling configuration
- [3D Printer Guide](3d-printer-guide) - Complete printer setup guide
- [Configuration Options](configuration-options) - All Smoothieware configuration options
