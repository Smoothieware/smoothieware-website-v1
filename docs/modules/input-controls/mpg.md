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

Multiple MPG encoders can be configured, one per axis. Each MPG instance is defined as a sub-section under `[mpg]`.

### Basic Single-Axis Configuration

```ini
[mpg]
xaxis.enable = true
xaxis.enca_pin = PF10^    # Encoder A channel (^ enables pull-up)
xaxis.encb_pin = PF6^     # Encoder B channel
xaxis.axis = 0            # X axis (0=X, 1=Y, 2=Z, 3=A, 4=B, 5=C)
```

### Multi-Axis Configuration

```ini
[mpg]
# X-axis MPG
xaxis.enable = true
xaxis.enca_pin = PF10^
xaxis.encb_pin = PF6^
xaxis.axis = 0

# Y-axis MPG
yaxis.enable = true
yaxis.enca_pin = PA3^
yaxis.encb_pin = PA4^
yaxis.axis = 1

# Z-axis MPG
zaxis.enable = true
zaxis.enca_pin = PB7^
zaxis.encb_pin = PB8^
zaxis.axis = 2
```

### Configuration Options

| Option | Description | Values |
|--------|-------------|--------|
| `name.enable` | Enable this MPG instance | `true` / `false` |
| `name.enca_pin` | Encoder A channel pin | Pin specification |
| `name.encb_pin` | Encoder B channel pin | Pin specification |
| `name.axis` | Axis to control | 0-5 (X=0, Y=1, Z=2, A=3, B=4, C=5) |

### Pin Specifications

- Use `^` suffix for internal pull-up (recommended for open-collector outputs)
- Use `!` suffix for inverted logic if needed
- Ensure A and B pins use different EXTI line numbers

## Operation

### Basic Usage

1. Configure the MPG module in your config file
2. The machine should be idle (not running a job)
3. Rotate the hand wheel to jog the axis
4. Each encoder pulse moves the axis by one step

### Movement Behavior

- **Step size**: Each encoder pulse = one motor step (depends on your steps/mm)
- **Direction**: Clockwise typically moves positive, counter-clockwise negative
- **Speed**: Movement speed is limited by the encoder rotation speed
- **Idle only**: MPG is ignored while the machine is running a job

### Typical Step Sizes

With typical configurations:

| Steps/mm | Step Distance |
|----------|---------------|
| 80 | 0.0125mm (12.5µm) |
| 100 | 0.01mm (10µm) |
| 200 | 0.005mm (5µm) |
| 400 | 0.0025mm (2.5µm) |

## Axis Selector (Optional)

For single-MPG setups that can control multiple axes, you can use a [Button Box](/button-box) or rotary selector switch to change which axis the MPG controls. This requires custom integration but allows a single hand wheel to control X, Y, or Z axis.

## Troubleshooting

### No Movement When Turning Encoder

1. **Check wiring**: Verify A and B connections
2. **Verify pins**: Ensure pins are interrupt-capable
3. **Check EXTI lines**: A and B pins must use different line numbers
4. **Machine must be idle**: MPG is disabled during job execution
5. **Check axis number**: Ensure the axis exists (0-5)

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
- EXTI line = last digit of pin number (PA10 and PB10 conflict - both line 10)

## Example Complete Setup

Here's a complete configuration for a 3-axis CNC mill with MPG hand wheels:

```ini
[mpg]
# X-axis hand wheel
x.enable = true
x.enca_pin = PF10^
x.encb_pin = PF6^
x.axis = 0

# Y-axis hand wheel
y.enable = true
y.enca_pin = PA3^
y.encb_pin = PA4^
y.axis = 1

# Z-axis hand wheel
z.enable = true
z.enca_pin = PB7^
z.encb_pin = PD2^
z.axis = 2
```

## Related Modules

- [Jogger](/jogger) - Alternative software-based jogging
- [Button Box](/button-box) - Programmable button panel
- [Joystick](/joystick) - Analog joystick control

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  If you want to learn more about this module, or are curious how it works, Smoothie is Open-Source and you can simply go look at the code, <a href="https://github.com/Smoothieware/SmoothieV2/blob/master/Firmware/src/modules/utils/mpg/mpg.cpp">here</a>.
</sl-alert>
{:/nomarkdown}
