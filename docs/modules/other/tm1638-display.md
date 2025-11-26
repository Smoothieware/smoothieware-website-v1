---
permalink: /tm1638-display
title: TM1638 Display Module
---

# TM1638 Display Module

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Smoothieware V2 Only:</strong> The TM1638 Display module is only available in Smoothieware V2. It is not supported on Smoothieboard V1 hardware.
</sl-alert>
{:/nomarkdown}

The TM1638 module provides support for inexpensive TM1638-based LED display boards. These modules combine an 8-digit 7-segment display, 8 LEDs, and 8 buttons in a single compact unit, making them ideal for machine status displays and control panels.

## Overview

TM1638 display modules are widely available and very affordable. They provide:

- **8-digit 7-segment display** - Show numeric values, text, and status
- **8 bi-color LEDs** - Status indicators (red/green on some modules)
- **8 push buttons** - User input
- **3-wire interface** - Simple Clock, Data, Strobe connection

These displays are commonly used with the [ELS (Electronic Leadscrew)](/els) module for lathe control.

## Hardware

### TM1638 Module Types

Several variants exist, but the most common "Model 1" type is supported:

{::nomarkdown}
<a href="/images/tm1638-module.png">
  <img src="/images/tm1638-module.png" alt="TM1638 Display Module" style="max-width: 400px;"/>
</a>
{:/nomarkdown}

| Feature | Model 1 (Supported) |
|---------|---------------------|
| Digits | 8 x 7-segment |
| LEDs | 8 (single color or bi-color) |
| Buttons | 8 |
| Interface | 3-wire serial |
| Voltage | 5V (can work with 3.3V logic) |

### Pinout

| TM1638 Pin | Description | Connect To |
|------------|-------------|------------|
| VCC | Power supply | 5V |
| GND | Ground | GND |
| STB | Strobe (chip select) | GPIO pin |
| CLK | Clock | GPIO pin |
| DIO | Data I/O | GPIO pin |

## Wiring

Connect the TM1638 module to the Smoothieboard:

```
TM1638          Smoothieboard V2
──────          ────────────────
VCC  ─────────► 5V
GND  ─────────► GND
STB  ─────────► GPIO (strobe_pin)
CLK  ─────────► GPIO (clock_pin)
DIO  ─────────► GPIO (data_pin)
```

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Logic Levels:</strong> The TM1638 is a 5V device. While it often works with 3.3V logic, some modules may require level shifters for reliable operation. The STM32H7 GPIO pins are 5V tolerant on most pins.
</sl-alert>
{:/nomarkdown}

## Configuration

```ini
[tm1638]
enable = true
clock_pin = PG1
data_pin = PG0
strobe_pin = PG2
```

### Configuration Options

| Option | Description | Default |
|--------|-------------|---------|
| `enable` | Enable the TM1638 module | `false` |
| `clock_pin` | Clock signal pin | Required |
| `data_pin` | Data I/O pin | Required |
| `strobe_pin` | Strobe/chip select pin | Required |

## Display Features

### 7-Segment Display

The 8-digit display can show:

- **Numbers** - Integer and decimal values
- **Text** - Limited alphabet (some letters like M, W cannot be displayed)
- **Hex values** - 0-9, A-F
- **Decimal points** - Individual control per digit

#### Available Characters

```
0123456789
AbCdEFGHIJLnoPqrStUy-_
```

Some letters cannot be displayed well on 7-segment displays (M, W, X, etc.).

### LED Indicators

The 8 LEDs can be individually controlled:

| LED | Function (typical usage) |
|-----|--------------------------|
| 1 | Status indicator |
| 2 | Mode indicator |
| 3-8 | User-defined |

LED colors depend on the specific module:
- Single color (red or green)
- Bi-color (red and green controllable separately)

### Button Reading

The 8 buttons return a bitmap where each bit corresponds to a button:

| Button | Hex Value | Binary |
|--------|-----------|--------|
| S1 | 0x01 | 0000 0001 |
| S2 | 0x02 | 0000 0010 |
| S3 | 0x04 | 0000 0100 |
| S4 | 0x08 | 0000 1000 |
| S5 | 0x10 | 0001 0000 |
| S6 | 0x20 | 0010 0000 |
| S7 | 0x40 | 0100 0000 |
| S8 | 0x80 | 1000 0000 |

## Usage with ELS

The TM1638 is primarily used with the [ELS (Electronic Leadscrew)](/els) module for lathe control:

```ini
[tm1638]
enable = true
clock_pin = PG1
data_pin = PG0
strobe_pin = PG2

[lathe]
enable = true
encoder_ppr = 1000

[els]
enable = true
```

When used with ELS, the display automatically shows:
- Current RPM (left 4 digits)
- Selected pitch (right 4 digits)
- Status LEDs for running/mode/direction

## API for Module Developers

The TM1638 module provides methods that can be used by other modules:

```cpp
// Display text on all 8 digits
void displayText(const char* text);

// Display a number with optional leading zeros
void displayIntNum(unsigned long number, bool leadingZeros, AlignTextType_e alignment);

// Display two 4-digit numbers
void DisplayDecNumNibble(uint16_t upper, uint16_t lower, bool leadingZeros, AlignTextType_e alignment);

// Set individual LED
void setLED(uint8_t position, uint8_t value);

// Set all LEDs using a 16-bit value
void setLEDs(uint16_t ledvalues);

// Read button states
uint8_t readButtons();

// Set brightness (0-7)
void brightness(uint8_t level);

// Reset display
void reset();
```

Modules can look up the TM1638 instance:
```cpp
Module* m = Module::lookup("tm1638");
TM1638* display = static_cast<TM1638*>(m);
```

## Troubleshooting

### Display Shows Nothing

1. **Check power**: Verify 5V is connected
2. **Check wiring**: Verify CLK, DIO, STB connections
3. **Enable module**: Ensure `enable = true` in config
4. **Check pins**: Verify pin assignments are correct

### Display Shows Garbage

- Check for loose connections
- Verify clock/data/strobe pin assignments aren't swapped
- Try reducing communication speed (requires source modification)

### Buttons Not Working

1. **No other module using them**: Buttons require another module (like ELS) to read them
2. **Check module load order**: TM1638 must be loaded before modules that use it
3. **Button bounce**: Rapid repeated presses may be button bounce

### Dim Display

- Brightness defaults to a moderate level
- Some modules have adjustable brightness via potentiometer
- Source code modification can change default brightness

## Alternative Displays

If you need a different display type, consider:

- [Panel](/panel) - LCD with encoder (V1 compatible)
- [ST7920](/st7920) - Graphical LCD (V2)
- Network interface - Web-based display

## Related Modules

- [ELS (Electronic Leadscrew)](/els) - Primary use case for TM1638
- [Lathe Module](/lathe) - Threading and turning control
- [Button Box](/button-box) - Alternative button interface

## References

- [TM1638 Datasheet](https://www.titanmec.com/index.php/product/view/id/531.html)
- [Arduino TM1638 Library](https://github.com/gavinlyonsrepo/TM1638plus) - Source library this implementation is based on

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  If you want to learn more about this module, or are curious how it works, Smoothie is Open-Source and you can simply go look at the code, <a href="https://github.com/Smoothieware/SmoothieV2/blob/master/Firmware/src/modules/utils/display/tm1638/TM1638.cpp">here</a>.
</sl-alert>
{:/nomarkdown}
