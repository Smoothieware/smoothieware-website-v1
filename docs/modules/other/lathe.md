---
permalink: /lathe
title: Lathe Module
---

# Lathe Module

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Smoothieware V2 Only:</strong> The Lathe module is only available in Smoothieware V2. It is not supported on Smoothieboard V1 hardware.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Work in progress:</strong> Lathe support is present in the current V2 source, but its direct-synchronization path still has documented limitations. Prove direction, stopping, and thread registration at low speed before using it on a machine.
</sl-alert>
{:/nomarkdown}

The Lathe module enables spindle-synchronized turning operations on CNC lathes. It allows the carriage (typically Z-axis) to move in precise synchronization with the spindle rotation, enabling threading and other turning operations.

## Overview

The Lathe module uses a quadrature encoder attached to the spindle to track its rotation. The carriage movement is then synchronized to the spindle position, allowing for:

- **Threading operations** - Cut threads at a specified pitch (mm per revolution)
- **Spindle-synchronized feeds** - Move the tool at a rate proportional to spindle speed
- **Manual "half-nut" mode** - Engage/disengage the electronic leadscrew like a traditional lathe

## G-code support

The current firmware has two different motion paths. They are not interchangeable:

| Command | Encoder | Behaviour |
|---------|---------|-----------|
| `G33 K... Z...` | Index pulse required | Measures RPM, waits for two index pulses, rejects a speed change greater than 5%, then runs an ordinary accelerated Z move at the calculated feed rate. It does not correct for later spindle-speed changes during that move. |
| `G33.1 K... Z...` | Quadrature encoder required | Drives Z directly from encoder position. An index pin, if configured, aligns the start. The current finite-distance implementation is marked in source as working only for negative-Z moves. |
| `G33.1 K...` | Quadrature encoder required | Engages direct synchronization without a distance. Send a console stop request, normally Ctrl+Y, to disengage. This test/manual mode may change or be removed. |

### Syntax

```gcode
G33 K<pitch> Z<distance>
G33.1 K<pitch> [Z<distance>]
```

| Parameter | Description |
|-----------|-------------|
| `K` | Distance per revolution in mm (required). Negative values reverse direction. |
| `Z` | Relative Z distance in mm. It may be omitted only from `G33.1` manual mode. |

#### RPM-derived move

```gcode
G33 K1.5 Z-20    ; Thread 20mm at 1.5mm pitch
```

Use this path when acceleration and deceleration matter more than correction for changing spindle speed. The spindle must be running, an index pin is mandatory, and the requested feed must remain within the Z actuator's maximum rate.

#### Direct quadrature synchronization

```gcode
G33.1 K1.5 Z-20  ; Directly synchronized finite negative-Z move
G33.1 K1.0       ; Manual electronic half-nut mode
```

`G33.1` follows the encoder position rather than taking one RPM measurement. The code begins and ends this direct mode abruptly, without the planner's acceleration profile. The finite-distance path currently has a known positive-Z stopping defect; treat negative-Z as the only supported finite direction until that source limitation is removed.

## Hardware Requirements

### Spindle Encoder

A quadrature encoder is required for `G33.1`. On Smoothieboard V2 Prime it uses the fixed hardware quadrature inputs `PJ8` and `PJ10`; defining PWM2 conflicts with that hardware timer and must be avoided.

| Specification | Recommended Value |
|---------------|-------------------|
| **Type** | Incremental quadrature encoder |
| **Resolution** | Set the effective resolution with `encoder_ppr` |
| **Output** | A, B channels (and optionally Index/Z) |
| **Voltage** | 3.3V or 5V with level shifting |

### Index Pin (Optional)

An index pin provides a once-per-revolution reference pulse. It is mandatory for `G33 K... Z...` and optional for `G33.1`. With direct synchronization, it aligns the beginning of repeated moves only when the spindle and encoder have a suitable 1:1 or integer relationship.

## Configuration

```ini
[lathe]
enable = true              # Enable the lathe module
encoder_ppr = 1000         # Encoder pulses per revolution (after any gearing)
use_qe = true              # Use the fixed PJ8/PJ10 quadrature inputs
qe_pullup = false          # Enable pull-ups on the quadrature inputs
index_pin = PD15-          # Optional index pulse pin
index_edge = rising        # rising, falling, or both
index_debounce_us = 300    # Reject index edges closer than this
index_minimum_us = 0       # With both edges, requested minimum pulse width
```

### Configuration Options

| Option | Description | Default |
|--------|-------------|---------|
| `enable` | Enable the lathe module | `false` |
| `encoder_ppr` | Encoder pulses per revolution (including any gearing ratio) | `1000` |
| `index_pin` | Pin for index/Z channel pulse | `nc` |
| `index_edge` | Index interrupt edge: `rising`, `falling`, or `both` | `falling` |
| `index_debounce_us` | Minimum interval between accepted index edges | `300` |
| `index_minimum_us` | Intended minimum pulse width when both edges are selected; enforcement is still a source TODO | `0` |
| `use_qe` | Use the hardware quadrature encoder | `true` |
| `qe_pullup` | Enable pull-ups on the fixed quadrature inputs | `false` |

### Encoder PPR Calculation

If your spindle has a gear ratio between the motor/encoder and the chuck:

```
encoder_ppr = encoder_resolution × gear_ratio
```

For example, with a 500 PPR encoder and 2:1 gearing (encoder turns twice per spindle revolution):
```
encoder_ppr = 500 × 2 = 1000
```

## Console Commands

### rpm

Display the current spindle RPM:

```
> rpm
1250.5
```

The RPM is calculated from the encoder pulses. If an index pin is configured and available, it provides more accurate RPM readings.

## Example Workflow

### RPM-derived Z move

```gcode
G28 Z0          ; Home Z axis
G0 X10          ; Position tool
M3 S1000        ; Start spindle at 1000 RPM
G33 K1.5 Z-25   ; Measure RPM, then run an accelerated Z move
M5              ; Stop spindle
G0 X15 Z5       ; Retract
```

### Direct synchronized negative-Z move

```gcode
G28 Z0
G0 X10.2        ; First pass depth
M3 S800
G33.1 K2.0 Z-30 ; First pass
G0 X15 Z5       ; Retract
G0 X10.0        ; Second pass depth
G33.1 K2.0 Z-30 ; Second pass, aligned by the index pulse
G0 X15 Z5
M5
```

### Manual Half-Nut Mode

```gcode
M3 S600         ; Start spindle
G33.1 K1.0      ; Engage electronic leadscrew
                ; Press Ctrl+Y to disengage
M5
```

## Troubleshooting

### "Spindle must be running" error

Finite `G33` and `G33.1` moves require a non-zero RPM reading. Ensure:
- Spindle is started with <mcode>M3</mcode> command
- Encoder is properly connected and reading pulses
- Sufficient time has passed for RPM calculation

### Inconsistent thread start position

If threads don't align on multi-pass operations:
- Configure and verify the index pin
- Check index pulse is generating once per revolution
- Ensure encoder PPR setting matches your hardware

### RPM reading is zero or erratic

- Verify encoder connections (A, B channels)
- Check encoder PPR setting
- Ensure spindle is actually rotating
- Confirm PWM2 is not configured when using the hardware quadrature encoder

## Related Modules

- [ELS (Electronic Leadscrew)](/els) - Advanced UI for lathe operations with TM1638 display
- [TM1638 Display](/tm1638-display) - 7-segment display module used by ELS
- [Spindle Control](/spindle-module) - Spindle motor control

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  Verify evolving behaviour in the <a href="https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/lathe/Lathe.cpp">Lathe source</a> and the <a href="https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/ConfigSamples/config-lathe.ini">V2 sample configuration</a> used for this page.
</sl-alert>
{:/nomarkdown}
