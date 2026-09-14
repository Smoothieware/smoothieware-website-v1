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

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Work in progress:</strong> The Fall 2026 announcement and current source both treat this interface as experimental. Button S3 still uses a fixed 20 mm move, and the underlying direct-synchronization path has the limits documented on the <a href="/lathe">Lathe page</a>.
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
| LED 4 | Unused |
| LED 5-8 | Selected digit while editing the pitch |

### Button Functions

| Button | Function |
|--------|----------|
| S1 | Stop current operation |
| S2 | Start manual direct synchronization with `G33.1 K{pitch}` |
| S3 | Start `G33.1 K{pitch} Z20`; the 20 mm distance is currently hard-coded |
| S4 | Enter pitch-edit mode, advance through its four digits, then finish editing |
| S6 | Decrease the selected digit while editing, or decrease the value by 0.1 mm/rev outside edit mode |
| S8 | Increase the selected digit while editing, or increase the value by 0.1 mm/rev outside edit mode |
| S5, S7 | No implemented action in the current source |

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
use_qe = true
qe_pullup = false
index_pin = PD15-
index_edge = rising

# TM1638 display configuration
[tm1638]
enable = true
clock_pin = PJ11
data_pin = PJ6
strobe_pin = PJ9

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
2. **Adjust pitch** - Use S8 and S6 for 0.1 mm/rev changes, or use S4 to edit one of the four digits
3. **Start spindle** - Use your spindle control (<mcode>M3</mcode> command or physical switch)
4. **Engage leadscrew** - Press S2 to start synchronized motion
5. **Stop** - Press S1 to disengage

### Manual electronic leadscrew workflow

1. Set up your workpiece and tool
2. Adjust the pitch value on the display (e.g., 1.5 for 1.5mm pitch thread)
3. Start the spindle at appropriate RPM
4. Position the tool at the thread start position
5. Press S2 to engage the electronic leadscrew
6. The carriage follows the spindle quadrature encoder without a preset distance
7. Press S1 to stop when threading is complete

### Manual Mode vs Distance Mode

- **Manual mode**: Press S2 to issue `G33.1 K...`; press S1 to send its stop request.
- **Fixed test move**: S3 issues `G33.1 K... Z20`. The direction and distance are not configurable in the current ELS interface, so do not treat this as a finished threading cycle.
- **Command-line distance mode**: Issue a supported `G33` or `G33.1` form directly, following the distinctions and limits on the [Lathe page](/lathe#g-code-support).

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

### S2 button does not start synchronization

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
  Verify evolving behaviour in the <a href="https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/lathe/els/els.cpp">ELS source</a> and the <a href="https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/ConfigSamples/config-lathe.ini">V2 sample configuration</a> used for this page.
</sl-alert>
{:/nomarkdown}
