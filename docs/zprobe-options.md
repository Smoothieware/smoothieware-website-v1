
# Z-Probe Options

The Z-probe module in Smoothieware is used to scan surfaces, calibrate machine parameters, and compensate for non-planar surfaces.

This is essential for features like bed leveling, height mapping, and automated calibration.

## Configuration Options

The following table lists the configuration options for the Z-probe module:

| Option | Value | Description |
| ------ | ----- | ----------- |
| `zprobe.enable` | `true` | Set to true to enable the Z-probe module. This is used to scan surfaces, and to calibrate parameters and compensate for non-planar surfaces. |
| `zprobe.probe_pin` | `1.28!^` | Pin the probe is connected to. |
| `zprobe.slow_feedrate` | `5` | Speed in millimetres/second at which the probe seeks a surface. |
| `zprobe.fast_feedrate` | `100` | Speed in millimetres/second at which the probe does fast moves. |
| `zprobe.return_feedrate` | `50` | Speed in millimetres/second at which the probe does the return after a probe. |
| `zprobe.debounce_ms` | `1` | Debounce the probe pin over this number of milliseconds. Set to 1 or 2 if your probe is too noisy and gives false readings. |
| `zprobe.probe_height` | `5` | Distance above the bed at which the probing is started, once the bed's height is known. |
| `zprobe.max_z` | `200` | Maximum Z (was gamma_max) |
| `zprobe.dwell_before_probing` | `0.2` | Dwell time in seconds before probing. Useful for piezo Z-probe to avoid false trigger. |

## Understanding Probe Speeds

The Z-probe module uses different speeds for different operations:

- **fast_feedrate**: Used for quick travel moves to the probing area
- **slow_feedrate**: Used when actually approaching and touching the surface (for accuracy)
- **return_feedrate**: Used when retracting after a successful probe

Using a slower speed for the actual probing ensures more accurate measurements.

## Pin Configuration

The `probe_pin` setting uses special suffixes:

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
- May need `dwell_before_probing` setting

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
