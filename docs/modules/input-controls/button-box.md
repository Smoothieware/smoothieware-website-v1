---
permalink: /button-box
title: Button Box
---

# Button Box Module

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Smoothieware V2 Only:</strong> The Button Box module is only available in Smoothieware V2. It is not supported on Smoothieboard V1 hardware.
</sl-alert>
{:/nomarkdown}

> Need general-purpose input/output control, or support for Smoothieware V1? See the [Switch module](/switch). Button Box is the V2-focused choice for programmable button panels.

The Button Box module allows you to create programmable button panels for your CNC machine. Each button can execute G-code commands, M-codes, or special actions when pressed or released. This is ideal for:

- **Jogging controls** - Buttons for X+, X-, Y+, Y-, Z+, Z-
- **Machine control** - Start, stop, pause, resume buttons
- **Macro execution** - Custom operation sequences
- **Tool changes** - Pre-programmed tool change routines
- **Spindle control** - Start/stop spindle with preset speeds

## Overview

A button box is simply a panel with multiple buttons, each wired to GPIO pins on the Smoothieboard. When a button is pressed or released, the configured command is executed. This provides a simple, reliable way to control your machine without needing a computer keyboard or touch screen.

## Hardware

### Button Types

Any momentary push button can be used:

| Type | Description | Typical Use |
|------|-------------|-------------|
| Momentary push button | Returns to off when released | Jog, commands |
| Illuminated button | Push button with built-in LED | Status indication |
| E-stop button (latching) | Stays engaged until reset | Emergency stop |

### Wiring

Connect buttons between a GPIO pin and ground (GND):

```
Button ──┬── GPIO Pin (with pull-up)
         └── GND
```

Use the `^` suffix in configuration to enable the internal pull-up resistor, which is required for this wiring scheme.

## Configuration

Buttons are configured as sub-sections under `[button box]`. Each button has a unique name and defines its pin, press action, and optional release action.

### Basic Example

```ini
[button box]
# Common settings
common.poll_frequency_hz = 20    # Button polling rate in Hz (default: 20)

# Jog X positive
xplus.enable = true
xplus.pin = PA5^                 # ^ enables pull-up
xplus.press = $J X10 F1000       # Jog X +10mm at 1000mm/min
xplus.release = $J STOP          # Stop jogging when released

# Jog X negative
xminus.enable = true
xminus.pin = PA6^
xminus.press = $J X-10 F1000
xminus.release = $J STOP
```

### Configuration Options

| Option | Description | Default |
|--------|-------------|---------|
| `common.poll_frequency_hz` | How often to check button states | `20` |
| `name.enable` | Enable this button | `true` |
| `name.pin` | GPIO pin for button | Required |
| `name.press` | Command to execute on press | Required |
| `name.release` | Command to execute on release | Optional |

### Pin Configuration

- Use `^` suffix for internal pull-up (typical for buttons to GND)
- Use `!` suffix for inverted logic (normally-closed buttons)
- Use `external` instead of a pin for buttons provided by other modules

### Matrix keypads

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Matrix scanning is not implemented in the checked V2 source.</strong> The sample <code>button-box.ini</code> contains a 4-by-4 keypad example, but the Button Box implementation still marks matrix scanning as TODO at commit <a href="https://github.com/Smoothieware/SmoothieV2/commit/2a21c0108b1d095ecd8b2b9358e94055f053c003"><code>2a21c010</code></a>. Use one GPIO input per button. Sample configuration alone does not establish firmware support.
</sl-alert>
{:/nomarkdown}

## Send text to the auxiliary UART (V2 only)

With the V2 auxiliary UART configured as described on the [UART port](/uart) page, a Button Box can send a distinct serial message on press and release. This is useful for giving an external feeder, PLC, or another controller a simple command interface.

```ini
[button box]
# PA5 is illustrative: choose a free GPIO appropriate for your board.
feeder_request.enable = true
feeder_request.pin = PA5^!
feeder_request.press = echo -1 feeder advance
feeder_request.release = echo -1 feeder idle
```

Connect a normally open button between the selected input and GND. `^` enables the internal pull-up and `!` makes the grounded pressed state active. `press` and `release` run the shown commands through `echo -1`, which sends them only to the configured auxiliary UART. Do not configure this Button Box and a Switch to use the same GPIO pin.

For the `echo -1` option, auxiliary-UART setup, newline control, and channel limits, see the [echo command](/console-commands#echo).

## Special Commands

The Button Box module recognizes several special commands:

| Command | Action |
|---------|--------|
| `$J STOP` | Stop jogging motion |
| `KILL` | Halt the machine (emergency stop) |
| `FAULT` | Halt the machine and report the name of the input that detected the fault |
| `SUSPEND` | Toggle suspend/resume (M600/M601) |

Standard G-code and M-code commands are also supported and queued for execution.

### Fault inputs

Use `FAULT` for fault outputs from servo drives and other controllers. The input causes a software halt and sends `FAULT detected: <button-name>` to every console, which identifies the device that reported the fault.

```ini
[button box]
x_servo_fault.enable = true
x_servo_fault.pin = PG0^!
x_servo_fault.press = FAULT
```

Choose pull-up and inversion suffixes that match the external device's output circuit. Test the inactive, faulted, disconnected-wire, and power-off states before depending on the input.

`FAULT` is a polled software input. It does not replace a hard-wired emergency-stop circuit or a safety-rated drive chain. Set `common.poll_frequency_hz` according to the response time your non-safety monitoring needs.

## Examples

### Complete Jog Panel

```ini
[button box]
common.poll_frequency_hz = 20

# X axis
xplus.pin = PA5^
xplus.press = $J X10 F1000
xplus.release = $J STOP

xminus.pin = PA6^
xminus.press = $J X-10 F1000
xminus.release = $J STOP

# Y axis
yplus.pin = PA7^
yplus.press = $J Y10 F1000
yplus.release = $J STOP

yminus.pin = PA8^
yminus.press = $J Y-10 F1000
yminus.release = $J STOP

# Z axis (slower feed rate)
zplus.pin = PA9^
zplus.press = $J Z5 F500
zplus.release = $J STOP

zminus.pin = PA10^
zminus.press = $J Z-5 F500
zminus.release = $J STOP
```

### Machine Control Panel

```ini
[button box]
# Home all axes
home.pin = PB0^
home.press = G28

# Go to work zero
goto_zero.pin = PB1^
goto_zero.press = G0 X0 Y0 Z0

# Pause/Resume toggle
pause.pin = PB2^
pause.press = SUSPEND

# Emergency stop
estop.pin = PB3^
estop.press = KILL
```

### Spindle Control

```ini
[button box]
# Start spindle at 10000 RPM
spindle_on.pin = PC0^
spindle_on.press = M3 S10000

# Stop spindle
spindle_off.pin = PC1^
spindle_off.press = M5

# Spindle speed presets
speed_low.pin = PC2^
speed_low.press = S5000

speed_med.pin = PC3^
speed_med.press = S12000

speed_high.pin = PC4^
speed_high.press = S20000
```

### Tool Change Macro

```ini
[button box]
# Tool change position
tool_change.pin = PD0^
tool_change.press = G0 Z50 G0 X0 Y0 M5    # Raise Z, go to corner, stop spindle
```

## External Buttons

The Button Box can also respond to "virtual" buttons provided by other modules (like the [TM1638 display](/tm1638-display)). Use `external` as the pin value:

```ini
[button box]
tm1638_btn1.pin = external
tm1638_btn1.press = M3 S1000
tm1638_btn1.release = M5
```

The external module must call the Button Box API to register and trigger these virtual buttons.

## Troubleshooting

### Button Not Responding

1. **Check wiring**: Button should connect pin to GND
2. **Verify pull-up**: Use `^` suffix in pin configuration
3. **Check pin conflicts**: Ensure pin isn't used by another module
4. **Verify enable**: Button must have `enable = true` (default)

### Command Not Executing

1. **Machine busy**: Commands queue if machine is running
2. **Queue full**: A normal queued command is retried on the next poll while the button remains in its triggering state
3. **Invalid command**: Check G-code/M-code syntax
4. **Check console**: Error messages appear in console output

### Button Triggers Multiple Times

- Mechanical bounce - add hardware debouncing or reduce `poll_frequency_hz` after checking the required response time
- Electrical noise - use shorter wires or shielded cable
- Floating pin - ensure pull-up is enabled with `^`

### Jog Doesn't Stop on Release

- Ensure `release` action is configured
- Verify `release = $J STOP` syntax is correct
- Check button wiring isn't intermittent

## Comparison with Switch Module

The Button Box module differs from the [Switch module](/switch):

| Feature | Button Box | Switch |
|---------|------------|--------|
| V2 only | Yes | V1 and V2 |
| Multiple buttons | Yes, unlimited | Yes, multiple instances |
| Output control | No | Yes (PWM, digital) |
| Special actions | `$J STOP`, `KILL`, `FAULT`, `SUSPEND` | Limited |
| Matrix keypads | Not implemented in checked source | No |
| External buttons | Yes | No |
| Polling | Configurable rate | Fixed |

Use Button Box for input-only button panels on V2. Use Switch for input/output control or V1 compatibility.

## Related Modules

- [Switch](/switch) - Input/output control (V1 and V2)
- [Kill Button](/killbutton) - Dedicated emergency stop
- [Jogger](/jogger) - Software jogging interface
- [MPG](/mpg) - Manual pulse generator (hand wheel)
- [TM1638 Display](/tm1638-display) - Display with buttons

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  Verify button state handling and special actions in the checked <a href="https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/utils/buttonbox/buttonbox.cpp">V2 Button Box source</a>.
</sl-alert>
{:/nomarkdown}
