---
permalink: /els
title: ELS (Electronic Leadscrew)
---

# ELS - Electronic Leadscrew Module

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Smoothieware V2 Only:</strong> The ELS module is only available in Smoothieware V2. It is not supported on Smoothieboard V1 hardware.
</sl-alert>
{:/nomarkdown}

The ELS (Electronic Leadscrew) module provides a user-friendly interface for lathe operations, inspired by projects like the [Clough42 Electronic Leadscrew](https://github.com/clough42/electronic-leadscrew). It combines the [Lathe module](/lathe) with a [TM1638 display](/tm1638-display) to create a standalone lathe control interface.

## Overview

The ELS module provides:

- **Real-time RPM display** on a 7-segment LED display
- **Pitch/feed rate selection** using physical buttons
- **Visual status indicators** via LEDs
- **Standalone operation** without requiring a host computer

This makes it ideal for manual lathe operations where you want the convenience of electronic leadscrew control without needing to use a computer interface.

## Hardware Requirements

The ELS module requires:

1. **[TM1638 Display Module](/tm1638-display)** - 8-digit 7-segment display with 8 LEDs and 8 buttons
2. **[Lathe Module](/lathe)** - Spindle encoder and threading support
3. **Spindle Encoder** - Quadrature encoder for RPM and position feedback

### TM1638 Display

The TM1638 module is a common, inexpensive display board that includes:
- 8 seven-segment digits
- 8 individual LEDs
- 8 push buttons

These are widely available from electronics suppliers and provide an excellent interface for lathe control.

## Display Layout

```
┌─────────────────────────────────────┐
│  [LED1] [LED2] [LED3] ... [LED8]    │
│                                     │
│  ████  ████  ████  ████  ████ ...   │
│   RPM Display    │  Pitch/Feed     │
│                                     │
│  [S1] [S2] [S3] [S4] [S5] [S6] [S7] [S8]
└─────────────────────────────────────┘
```

### Display Areas

| Digits | Content |
|--------|---------|
| 1-4 (left) | Current spindle RPM |
| 5-8 (right) | Selected pitch/feed value |

### LED Indicators

| LED | Meaning when ON |
|-----|-----------------|
| LED 1 | Lathe operation is running |
| LED 2 | Distance mode (G33 Z specified) |
| LED 3 | Reversed direction |
| LED 4-8 | Reserved for future use |

### Button Functions

| Button | Function |
|--------|----------|
| S1 | Stop current operation |
| S2 | Start threading (G33 K{pitch}) |
| S8 | Increase pitch value |
| S6 | Decrease pitch value |
| S3-S5, S7 | Reserved for future use |

## Configuration

### Enable ELS Module

```ini
[els]
enable = true
```

### Complete Setup

The ELS module requires both the Lathe and TM1638 modules to be configured:

```ini
# Lathe module configuration
[lathe]
enable = true
encoder_ppr = 1000
index_pin = PF10^

# TM1638 display configuration
[tm1638]
enable = true
clock_pin = PG1
data_pin = PG0
strobe_pin = PG2

# ELS module configuration
[els]
enable = true
```

### Configuration Options

| Section | Option | Description | Default |
|---------|--------|-------------|---------|
| `[els]` | `enable` | Enable the ELS module | `false` |

The ELS module automatically discovers and uses the configured Lathe and TM1638 modules.

## Operation

### Basic Usage

1. **Power on** - Display shows current RPM (left) and pitch value (right)
2. **Adjust pitch** - Use S8 (up) and S6 (down) to set desired pitch in mm/rev
3. **Start spindle** - Use your spindle control (M3 command or physical switch)
4. **Engage leadscrew** - Press S2 to start synchronized motion
5. **Stop** - Press S1 to disengage

### Threading Workflow

1. Set up your workpiece and tool
2. Adjust the pitch value on the display (e.g., 1.5 for 1.5mm pitch thread)
3. Start the spindle at appropriate RPM
4. Position the tool at the thread start position
5. Press S2 to engage the electronic leadscrew
6. The carriage will move synchronized to the spindle
7. Press S1 to stop when threading is complete

### Manual Mode vs Distance Mode

- **Manual Mode**: Press S2 to engage, S1 to disengage (like a traditional half-nut)
- **Distance Mode**: Requires using G-code commands directly (G33 K... Z...)

LED 2 indicates whether distance mode is active (specified via G-code).

## Troubleshooting

### Display Shows Nothing

- Verify TM1638 wiring (clock, data, strobe pins)
- Check TM1638 module is enabled in configuration
- Ensure power supply to TM1638 module

### RPM Shows Zero

- Verify spindle encoder is connected and working
- Check Lathe module configuration (encoder_ppr)
- Ensure spindle is actually rotating

### S2 Button Doesn't Start Threading

- Spindle must be running (RPM > 0)
- Lathe module must be properly configured
- Check for error messages in console

### Display is Garbled

- Check for loose wiring connections
- Verify pin assignments in configuration
- Try reducing the display update rate (requires source modification)

## Related Modules

- [Lathe Module](/lathe) - Core lathe threading functionality
- [TM1638 Display](/tm1638-display) - Display hardware interface
- [Button Box](/button-box) - Alternative button panel interface

## See Also

- [Clough42 Electronic Leadscrew](https://github.com/clough42/electronic-leadscrew) - Original inspiration
- [Spindle Control](/spindle-module) - Spindle motor control

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  If you want to learn more about this module, or are curious how it works, Smoothie is Open-Source and you can simply go look at the code, <a href="https://github.com/Smoothieware/SmoothieV2/blob/master/Firmware/src/modules/tools/lathe/els/els.cpp">here</a>.
</sl-alert>
{:/nomarkdown}
