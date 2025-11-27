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

The Lathe module enables spindle-synchronized turning operations on CNC lathes. It allows the carriage (typically Z-axis) to move in precise synchronization with the spindle rotation, enabling threading and other turning operations.

## Overview

The Lathe module uses a quadrature encoder attached to the spindle to track its rotation. The carriage movement is then synchronized to the spindle position, allowing for:

- **Threading operations** - Cut threads at a specified pitch (mm per revolution)
- **Spindle-synchronized feeds** - Move the tool at a rate proportional to spindle speed
- **Manual "half-nut" mode** - Engage/disengage the electronic leadscrew like a traditional lathe

## G-Code Support

The Lathe module implements the **G33** command for spindle-synchronized motion:

### G33 - Spindle Synchronized Motion

```gcode
G33 K<pitch> [Z<distance>]
```

| Parameter | Description |
|-----------|-------------|
| `K` | Distance per revolution in mm (required). Negative values reverse direction. |
| `Z` | Distance to travel in mm. If omitted, enters manual mode. |

#### Threading Mode (with Z parameter)

```gcode
G33 K1.5 Z-20    ; Thread 20mm at 1.5mm pitch
G33 K-2.0 Z15    ; Thread in reverse direction
```

In threading mode:
- The spindle must be running before executing G33
- The carriage moves the specified distance synchronized to spindle rotation
- If an index pin is configured, threading starts at a consistent angular position
- Motion completes when the target distance is reached

#### Manual Mode (without Z parameter)

```gcode
G33 K1.0    ; Start manual half-nut engagement at 1.0mm/rev
```

In manual mode:
- The electronic leadscrew engages like a traditional half-nut
- Press Ctrl+Y or send a stop request to disengage
- Useful for facing operations or manual threading control

## Hardware Requirements

### Spindle Encoder

A quadrature encoder must be attached to the spindle to track rotation. The encoder connects to the hardware quadrature encoder interface on the STM32H7.

| Specification | Recommended Value |
|---------------|-------------------|
| **Type** | Incremental quadrature encoder |
| **Resolution** | 100-2000 PPR (pulses per revolution) |
| **Output** | A, B channels (and optionally Index/Z) |
| **Voltage** | 3.3V or 5V with level shifting |

### Index Pin (Optional)

An index pin provides a once-per-revolution reference pulse. When configured:
- Threading always starts at the same angular position
- Essential for multi-pass threading operations
- Allows consistent thread engagement

## Configuration

```ini
[lathe]
enable = true              # Enable the lathe module
encoder_ppr = 1000         # Encoder pulses per revolution (after any gearing)
index_pin = PF10^          # Optional index pulse pin (use ^ for pull-up)
```

### Configuration Options

| Option | Description | Default |
|--------|-------------|---------|
| `enable` | Enable the lathe module | `false` |
| `encoder_ppr` | Encoder pulses per revolution (including any gearing ratio) | `1000` |
| `index_pin` | Pin for index/Z channel pulse | `nc` |

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

### Single-Pass External Thread

```gcode
G28 Z0          ; Home Z axis
G0 X10          ; Position tool
M3 S1000        ; Start spindle at 1000 RPM
G33 K1.5 Z-25   ; Cut thread at 1.5mm pitch, 25mm length
M5              ; Stop spindle
G0 X15 Z5       ; Retract
```

### Multi-Pass Thread (using index pin)

```gcode
G28 Z0
G0 X10.2        ; First pass depth
M3 S800
G33 K2.0 Z-30   ; First pass
G0 X15 Z5       ; Retract
G0 X10.0        ; Second pass depth
G33 K2.0 Z-30   ; Second pass (starts at same angular position)
G0 X15 Z5
M5
```

### Manual Half-Nut Mode

```gcode
M3 S600         ; Start spindle
G33 K1.0        ; Engage electronic leadscrew
                ; Press Ctrl+Y to disengage
M5
```

## Troubleshooting

### "Spindle must be running" Error

The G33 command requires the spindle to be running (RPM > 0) before execution. Ensure:
- Spindle is started with <mcode>M3</mcode> command
- Encoder is properly connected and reading pulses
- Sufficient time has passed for RPM calculation

### Inconsistent Thread Start Position

If threads don't align on multi-pass operations:
- Configure and verify the index pin
- Check index pulse is generating once per revolution
- Ensure encoder PPR setting matches your hardware

### RPM Reading is Zero or Erratic

- Verify encoder connections (A, B channels)
- Check encoder PPR setting
- Ensure spindle is actually rotating
- Try adjusting the RPM calculation averaging (in source code)

## Related Modules

- [ELS (Electronic Leadscrew)](/els) - Advanced UI for lathe operations with TM1638 display
- [TM1638 Display](/tm1638-display) - 7-segment display module used by ELS
- [Spindle Control](/spindle-module) - Spindle motor control

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  If you want to learn more about this module, or are curious how it works, Smoothie is Open-Source and you can simply go look at the code, <a href="https://github.com/Smoothieware/SmoothieV2/blob/master/Firmware/src/modules/tools/lathe/Lathe.cpp">here</a>.
</sl-alert>
{:/nomarkdown}
