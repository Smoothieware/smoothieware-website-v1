---
layout: default
title: Pin Tag Popup Test
---

# Pin Tag Popup Test

This page tests the `<pin>` custom tag functionality with interactive hover popups showing detailed pin information.

{::nomarkdown}
<review id="test-pin-popup:intro-version">
<proposal>
{:/nomarkdown}

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

This version shows **Smoothieboard V1** pins in the standard V1 format (Port.Pin, e.g., `2.0`, `0.5`).

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

This version shows pin information for **Smoothieboard V2**. V2 uses a different pin naming convention (Port+Pin, e.g., PA0, PB15) compared to V1.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

This version shows **Smoothieboard V1** pins in the standard V1 format (Port.Pin, e.g., `2.0`, `0.5`).

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

## Features to Test

1. **Popup Placement**: Popups appear at bottom with proper positioning
2. **Pin Display**: Pills with gold pin connector icon and pin number
3. **Interactive Popups**: Hover to see detailed pin information including:
   - Pin assignment (what it's used for)
   - Full description
   - Capabilities (PWM, ADC, interrupt)
   - Peripheral associations
   - Configuration examples
   - Usage warnings
   - Related pins

## Common GPIO Pins

{::nomarkdown}
<review id="test-pin-popup:common-gpio">
<proposal>
{:/nomarkdown}

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

These are the most commonly used pins on Smoothieboard V1:

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

This section shows Smoothieboard V1 pin examples. V2 uses different pin naming conventions (PA0, PB15, etc.) and has different hardware layouts due to the STM32H7xx microcontroller. Refer to the V2 hardware documentation for pin assignments.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

These are the most commonly used pins on Smoothieboard V1:

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

- <pin>2.0</pin> - Alpha axis step pin (PWM capable)
- <pin>2.1</pin> - Alpha axis direction pin
- <pin>2.2</pin> - Beta axis step pin (PWM capable)
- <pin>2.3</pin> - Beta axis direction pin
- <pin>2.4</pin> - Gamma axis step pin (PWM capable)
- <pin>2.5</pin> - Gamma axis direction pin

## Stepper Motor Pins

All stepper motor control pins:

### Alpha Axis (X)
- <pin>2.0</pin> - Step
- <pin>0.5</pin> - Direction
- <pin>0.4</pin> - Enable

### Beta Axis (Y)
- <pin>2.1</pin> - Step
- <pin>0.11</pin> - Direction
- <pin>0.10</pin> - Enable

### Gamma Axis (Z)
- <pin>2.2</pin> - Step
- <pin>0.20</pin> - Direction
- <pin>0.19</pin> - Enable

## PWM-Capable Pins

Pins with hardware PWM capability:

- <pin>2.0</pin> - Alpha step (PWM1.1)
- <pin>2.1</pin> - Beta step (PWM1.2)
- <pin>2.2</pin> - Gamma step (PWM1.3)
- <pin>2.3</pin> - Heater 1 (PWM1.4)
- <pin>2.4</pin> - Heater 2 (PWM1.5)
- <pin>2.5</pin> - Bed heater (PWM1.6)
- <pin>1.18</pin> - LED 1
- <pin>1.20</pin> - LED 2

## ADC Pins (Thermistor Inputs)

Temperature sensor input pins:

- <pin>0.23</pin> - ADC0 (Hotend thermistor)
- <pin>0.24</pin> - ADC1 (Bed thermistor)
- <pin>0.25</pin> - ADC2
- <pin>0.26</pin> - ADC3
- <pin>1.30</pin> - ADC4
- <pin>1.31</pin> - ADC5

## I2C Pins

Internal and external I2C buses:

### I2C1 (Internal)
- <pin>0.0</pin> - SDA1 (for digipots and port expander)
- <pin>0.1</pin> - SCL1

### I2C2 (External)
- <pin>0.10</pin> - SDA2 (also beta enable)
- <pin>0.11</pin> - SCL2 (also beta direction)

## SPI Pins

SPI bus for SD card and peripherals:

- <pin>0.15</pin> - SCK0 (SD card clock)
- <pin>0.17</pin> - MISO0 (SD card data in)
- <pin>0.18</pin> - MOSI0 (SD card data out)
- <pin>0.16</pin> - SSEL0 (SD card select)

## Special Function Pins

### Endstops
- <pin>1.24</pin> - X min endstop
- <pin>1.25</pin> - X max endstop
- <pin>1.26</pin> - Y min endstop
- <pin>1.27</pin> - Y max endstop
- <pin>1.28</pin> - Z min endstop
- <pin>1.29</pin> - Z max endstop

### LEDs
- <pin>1.18</pin> - LED 1 (PWM capable)
- <pin>1.19</pin> - LED 2
- <pin>1.20</pin> - LED 3 (PWM capable)
- <pin>1.21</pin> - LED 4

### Buttons
- <pin>2.12</pin> - Play button
- <pin>2.11</pin> - ISP button (hardwired)

## Mosfet Outputs

Large mosfet outputs for heaters and fans:

- <pin>2.7</pin> - Large mosfet 1
- <pin>2.6</pin> - Large mosfet 2
- <pin>2.5</pin> - Bed heater (PWM capable)
- <pin>2.4</pin> - Small mosfet 1
- <pin>2.3</pin> - Small mosfet 2

## Servo/Fan Pins

- <pin>2.4</pin> - PWM output for fan/servo
- <pin>2.5</pin> - PWM output for fan/servo

## USB and Ethernet Pins

These are hardwired and not user-configurable:

- <pin>0.29</pin> - USB D+ (hardwired)
- <pin>0.30</pin> - USB D- (hardwired)
- <pin>1.0</pin> - ENET_TXD0
- <pin>1.1</pin> - ENET_TXD1
- <pin>1.4</pin> - ENET_TX_EN

## Edge Cases

{::nomarkdown}
<review id="test-pin-popup:edge-cases">
<proposal>
{:/nomarkdown}

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

Test pins that might not be documented:

- <pin>99.99</pin> - This pin doesn't exist (should show "not found" popup)
- <pin>P1.18</pin> - V2 format pin (should not be found in V1 database)

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

This section shows V1-style edge cases. V2 uses different pin naming conventions. For V2 testing, refer to the V2 hardware documentation which covers the STM32H7xx pin layout.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

Test pins that might not be documented:

- <pin>99.99</pin> - This pin doesn't exist (should show "not found" popup)
- <pin>P1.18</pin> - V2 format pin (should not be found in V1 database)

{::nomarkdown}
</original>
</review>
{:/nomarkdown}

## Pin Usage Examples

Example configuration snippets are shown in the popups. Hover over these pins to see examples:

- <pin>2.0</pin> - See alpha step pin config example
- <pin>0.23</pin> - See thermistor ADC config example
- <pin>1.24</pin> - See endstop config example

## Test Coverage

{::nomarkdown}
<review id="test-pin-popup:test-coverage">
<proposal>
{:/nomarkdown}

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

The V1 pin database includes:
- **161 total pins** (70 GPIO + 91 special/peripheral)
- **GPIO ports**: P0 (32 pins), P1 (32 pins), P2 (14 pins), P3 (26 pins), P4 (32 pins)
- **PWM-capable**: 8+ pins documented
- **ADC channels**: 8 channels (0.23-0.26, 1.30-1.31, plus more)
- **Special peripherals**: USB, Ethernet, I2C, SPI, UART, etc.

All pins should display informative popups. GPIO pins have configuration details, while special function pins explain their hardwired purpose.

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

This page shows test coverage for the **Smoothieboard V1** pin database and popup functionality. V2 uses a completely different microcontroller (STM32H745) with different pin naming and layout. A V2-specific test page would be needed to test V2 pins.

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

{::nomarkdown}
</proposal>
<original>
{:/nomarkdown}

The V1 pin database includes:
- **161 total pins** (70 GPIO + 91 special/peripheral)
- **GPIO ports**: P0 (32 pins), P1 (32 pins), P2 (14 pins), P3 (26 pins), P4 (32 pins)
- **PWM-capable**: 8+ pins documented
- **ADC channels**: 8 channels (0.23-0.26, 1.30-1.31, plus more)
- **Special peripherals**: USB, Ethernet, I2C, SPI, UART, etc.

All pins should display informative popups. GPIO pins have configuration details, while special function pins explain their hardwired purpose.

{::nomarkdown}
</original>
</review>
{:/nomarkdown}
