---
permalink: /mpg
title: MPG (Manual Pulse Generator)
---

# MPG - Manual Pulse Generator Module

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Smoothieware V2 Only:</strong> The MPG module is only available in Smoothieware V2. It is not supported on Smoothieboard V1 hardware.
</sl-alert>
{:/nomarkdown}

The MPG (Manual Pulse Generator) module allows you to use rotary encoders (hand wheels) to manually jog machine axes. This provides precise manual control similar to professional CNC machines, making it ideal for:

- **Tool positioning** - Precisely position tools before operations
- **Touch-off procedures** - Manually approach workpiece surfaces
- **Manual machining** - Fine control during manual operations
- **Setup and alignment** - Accurately position workpieces

## Overview

An MPG typically consists of:
- A rotary encoder (often 100 pulses per revolution)
- A weighted hand wheel for smooth rotation
- Optional detents for tactile feedback

Each encoder pulse translates to a small step movement on the configured axis, allowing very precise positioning control.

## Hardware Requirements

### Rotary Encoder

| Specification | Typical Value |
|---------------|---------------|
| **Type** | Incremental quadrature encoder |
| **Resolution** | 100 PPR (common for hand wheels) |
| **Output** | A, B quadrature channels |
| **Voltage** | 5V or 3.3V |

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Pin Requirements:</strong> The encoder A and B pins must be interrupt-capable pins, and each must use a unique EXTI line number (the last digit of the pin). For example, PF10 and PF6 use lines 10 and 6 (both unique).
</sl-alert>
{:/nomarkdown}

### Wiring

Connect the encoder to the Smoothieboard:

| Encoder Wire | Connection |
|--------------|------------|
| A channel | Interrupt-capable GPIO pin |
| B channel | Interrupt-capable GPIO pin (different EXTI line) |
| VCC | 3.3V or 5V (depending on encoder) |
| GND | Ground |

If using 5V encoders, level shifting may be required for the signal pins.

## Configuration

Configure one MPG per axis, or configure one `shared` MPG and select its active axis with `M922`. Do not mix shared and per-axis instances.

### Basic Single-Axis Configuration

```ini
[mpg]
x.enable = true
x.enca_pin = PF10^       # Encoder A channel (^ enables pull-up)
x.encb_pin = PF6^        # Encoder B channel
x.mmperpulse = 0.01      # Optional; defaults to the axis resolution
```

### Multi-Axis Configuration

```ini
[mpg]
# X-axis MPG
x.enable = true
x.enca_pin = PF10^
x.encb_pin = PF6^
x.mmperpulse = 0.01

# Y-axis MPG
y.enable = true
y.enca_pin = PA3^
y.encb_pin = PA4^
y.mmperpulse = 0.01

# Z-axis MPG
z.enable = true
z.enca_pin = PB7^
z.encb_pin = PD2^
z.mmperpulse = 0.005
```

### Configuration Options

| Option | Description | Values |
|--------|-------------|--------|
| `name` | Axis controlled by this instance | `x`, `y`, `z`, `a`, `b`, `c`, or `shared` |
| `name.enable` | Enable this MPG instance | `true` / `false`; default `false` |
| `name.enca_pin` | Encoder A channel pin | Pin specification |
| `name.encb_pin` | Encoder B channel pin | Pin specification |
| `name.mmperpulse` | Distance moved for each encoder count | Positive millimetres; defaults to rounded motor resolution |

### Pin Specifications

- Use `^` suffix for internal pull-up (recommended for open-collector outputs)
- Use `!` suffix for inverted logic if needed
- Ensure A and B pins use different EXTI line numbers

## Operation

### Basic Usage

1. Configure the MPG module in your config file
2. Rotate the hand wheel to move the configured axis
3. For a shared MPG, select an axis with `M922` before turning the wheel

### Movement Behavior

- **Step size**: Each encoder count moves `mmperpulse`; if omitted, Smoothie derives it from the axis steps/mm and rounds it to four decimal places
- **Direction**: Clockwise typically moves positive, counter-clockwise negative
- **Speed**: Smoothie submits the accumulated movement at the axis maximum rate

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  The checked V2 implementation does not reject MPG movement while other motion is active. Disable a shared MPG with argument-free <code>M922</code>, or prevent access to per-axis hand wheels, before starting an automated job.
</sl-alert>
{:/nomarkdown}

### Typical Step Sizes

With typical configurations:

| Steps/mm | Step Distance |
|----------|---------------|
| 80 | 0.0125mm (12.5µm) |
| 100 | 0.01mm (10µm) |
| 200 | 0.005mm (5µm) |
| 400 | 0.0025mm (2.5µm) |

## Axis Selector (Optional)

Configure the reserved `shared` instance when one hand wheel must control several axes:

```ini
[mpg]
shared.enable = true
shared.enca_pin = PF10^
shared.encb_pin = PF6^
```

Select one axis and its distance per encoder count with `M922`:

```gcode
M922 X0.01   ; select X at 0.01 mm per count
M922 Y0.01   ; switch to Y
M922 Z0.005  ; switch to Z at a finer increment
M922         ; disable all axes
```

Only one axis argument is allowed. The selected axis stays active until another `M922` changes it or an argument-free `M922` disables the hand wheel.

A [Button Box](/button-box) can provide physical selectors:

```ini
[button box]
select_x.pin = PA5^
select_x.press = M922 X0.01
select_y.pin = PA6^
select_y.press = M922 Y0.01
select_z.pin = PA7^
select_z.press = M922 Z0.005
disable_mpg.pin = PA8^
disable_mpg.press = M922
```

## Troubleshooting

### No Movement When Turning Encoder

1. **Check wiring**: Verify A and B connections
2. **Verify pins**: Ensure pins are interrupt-capable
3. **Check EXTI lines**: A and B pins must use different line numbers
4. **Check subsection name**: Use `x`, `y`, `z`, `a`, `b`, `c`, or `shared`; arbitrary names such as `xaxis` are rejected
5. **Shared selector**: A shared MPG starts with no axis selected; send `M922 X<distance>` or another valid axis first

### Wrong Direction

- Swap encoder A and B wires, or
- Use inverted pin specification (`!` suffix), or
- Check if axis is configured as reversed in `[actuator]` section

### Missing Steps or Erratic Movement

- Check for electrical noise on encoder wires
- Use shielded cable for encoder
- Add decoupling capacitors near encoder
- Reduce encoder rotation speed

### "Not valid interrupt pins" Error

The pins you specified don't support interrupts or share the same EXTI line:
- Choose different pins with unique line numbers
- EXTI line = last digit of pin number (<pin>PA10</pin> and <pin>PB10</pin> conflict - both line 10)

## Example Complete Setup

This complete configuration gives a 3-axis CNC mill one hand wheel per axis:

```ini
[mpg]
# X-axis hand wheel
x.enable = true
x.enca_pin = PF10^
x.encb_pin = PF6^
x.mmperpulse = 0.01

# Y-axis hand wheel
y.enable = true
y.enca_pin = PA3^
y.encb_pin = PA4^
y.mmperpulse = 0.01

# Z-axis hand wheel
z.enable = true
z.enca_pin = PB7^
z.encb_pin = PD2^
z.mmperpulse = 0.005
```

## Related Modules

- [Jogger](/jogger) - Alternative software-based jogging
- [Button Box](/button-box) - Programmable button panel
- [Joystick](/joystick) - Analog joystick control

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  Verify the subsection names and motion behaviour in the checked <a href="https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/utils/mpg/mpg.cpp">V2 MPG source</a>.
</sl-alert>
{:/nomarkdown}
