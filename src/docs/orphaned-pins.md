# Orphaned Pins Report (Final)

This report lists pin references in the documentation that are NOT wrapped in `<pin>...</pin>` tags.

**Generated:** 2025-11-26 23:30:29

**Total:** 14 files, 50 pin references

---

## docs/gcode-reference/m-codes/m3.md - m3

- **Line 122**: `PA5`
  - Context: `...tion uses STM32H7xx pin notation (e.g., PA5, PB12) instead of LPC1769 format (e.g.,...`

## docs/gcode-reference/m-codes/m5.md - {::nomarkdown}<mcode>M5</mcode>{:/nomarkdown} G-code

- **Line 133**: `PA5`
  - Context: `...te output pin (STM32 format: PXn, e.g., PA5)`
- **Line 136**: `PA5`
  - Context: `...tion uses STM32H7xx pin notation (e.g., PA5, PB12) instead of LPC1769 format (e.g.,...`

## docs/hardware/boards/smoothie-on-a-breadboard.md - Smoothie on a Breadboard

- **Line 115**: `p2.12`
  - Context: `...the firmware, this is connected to pin p2.12, and is not shown in the following diag...`


## docs/hardware/boards/smoothieboard-v2-schematic.md - Smoothieboard V2 Prime Schematic Reference

- **Line 297**: `PF3`
  - Context: `**Board Detection:** 4-bit ID via PF3, PF5, PF7, PE10 determines driver varia...`
- **Line 297**: `PF5`
  - Context: `**Board Detection:** 4-bit ID via PF3, PF5, PF7, PE10 determines driver variant (T...`
- **Line 297**: `PF7`
  - Context: `...ard Detection:** 4-bit ID via PF3, PF5, PF7, PE10 determines driver variant (TMC259...`
- **Line 297**: `PE10`
  - Context: `...etection:** 4-bit ID via PF3, PF5, PF7, PE10 determines driver variant (TMC2590 vs T...`

## docs/machine-guides/laser-cutters/blue-box-guide.md - SmoothK40 Guide

- **Line 304**: `2.5`
  - Context: `- Verify correct PWM pin (2.5 or other PWM-capable pin)`
- **Line 309**: `2.5`
  - Context: `- Verify Pin 2.5 output voltage with multimeter`

## docs/modules/extruders/filament-detector.md - Filament detector

- **Line 84**: `P2.5`
  - Context: `...kdown}<mcode>M404</mcode>{:/nomarkdown} P2.5 to check before changing it in config.`
- **Line 99**: `2.11`
  - Context: `.... Common interrupt-capable pins include 2.11, 2.12, 2.13, and others. Consult the [S...`
- **Line 99**: `2.12`
  - Context: `...on interrupt-capable pins include 2.11, 2.12, 2.13, and others. Consult the [Smoothi...`
- **Line 99**: `2.13`
  - Context: `...errupt-capable pins include 2.11, 2.12, 2.13, and others. Consult the [Smoothieboard...`

## docs/modules/input-controls/joystick-options-for-include.md - joystick options for include

- **Line 20**: `0.2`
  - Context: `...e of the analog-capable pins (typically 0.2, 0.3, 0.23-0.26, 1.30, 1.31). Connect t...`
- **Line 20**: `0.3`
  - Context: `...the analog-capable pins (typically 0.2, 0.3, 0.23-0.26, 1.30, 1.31). Connect the jo...`
- **Line 20**: `0.23`
  - Context: `...nalog-capable pins (typically 0.2, 0.3, 0.23-0.26, 1.30, 1.31). Connect the joystick...`
- **Line 20**: `0.26`
  - Context: `...-capable pins (typically 0.2, 0.3, 0.23-0.26, 1.30, 1.31). Connect the joystick wipe...`
- **Line 20**: `1.30`
  - Context: `...le pins (typically 0.2, 0.3, 0.23-0.26, 1.30, 1.31). Connect the joystick wiper (out...`
- **Line 20**: `1.31`
  - Context: `...s (typically 0.2, 0.3, 0.23-0.26, 1.30, 1.31). Connect the joystick wiper (output) t...`

## docs/modules/input-controls/mpg.md - MPG - Manual Pulse Generator Module

- **Line 172**: `PA10`
  - Context: `- EXTI line = last digit of pin number (PA10 and PB10 conflict - both line 10)`
- **Line 172**: `PB10`
  - Context: `...ne = last digit of pin number (PA10 and PB10 conflict - both line 10)`

## docs/modules/motion/conveyor-options-for-include.md - conveyor options for include

- **Line 45**: `2.1`
  - Context: `...r moves in the wrong direction (e.g., '!2.1'). This is hardware-specific and depend...`
- **Line 98**: `2.3`
  - Context: `...r moves in the wrong direction (e.g., '!2.3'). This is hardware-specific and depend...`
- **Line 151**: `2.5`
  - Context: `...r moves in the wrong direction (e.g., '!2.5'). This is hardware-specific and depend...`

## docs/modules/spindle/spindle-options-for-include.md - spindle options for include

- **Line 24**: `P2.0`
  - Context: `...control. Must be hardware PWM-capable (P2.0-P2.5, P1.18, P1.20, P1.21, P1.23, P1.24...`
- **Line 24**: `P2.5`
  - Context: `...rol. Must be hardware PWM-capable (P2.0-P2.5, P1.18, P1.20, P1.21, P1.23, P1.24, P1....`
- **Line 24**: `P1.18`
  - Context: `...ust be hardware PWM-capable (P2.0-P2.5, P1.18, P1.20, P1.21, P1.23, P1.24, P1.26, P3....`
- **Line 24**: `P1.20`
  - Context: `...hardware PWM-capable (P2.0-P2.5, P1.18, P1.20, P1.21, P1.23, P1.24, P1.26, P3.25, P3....`
- **Line 24**: `P1.21`
  - Context: `...e PWM-capable (P2.0-P2.5, P1.18, P1.20, P1.21, P1.23, P1.24, P1.26, P3.25, P3.26 on S...`
- **Line 24**: `P1.23`
  - Context: `...apable (P2.0-P2.5, P1.18, P1.20, P1.21, P1.23, P1.24, P1.26, P3.25, P3.26 on Smoothie...`
- **Line 24**: `P1.24`
  - Context: `...(P2.0-P2.5, P1.18, P1.20, P1.21, P1.23, P1.24, P1.26, P3.25, P3.26 on Smoothieboard)....`
- **Line 24**: `P1.26`
  - Context: `...2.5, P1.18, P1.20, P1.21, P1.23, P1.24, P1.26, P3.25, P3.26 on Smoothieboard). Contro...`
- **Line 24**: `P3.25`
  - Context: `....18, P1.20, P1.21, P1.23, P1.24, P1.26, P3.25, P3.26 on Smoothieboard). Controls spin...`
- **Line 24**: `P3.26`
  - Context: `....20, P1.21, P1.23, P1.24, P1.26, P3.25, P3.26 on Smoothieboard). Controls spindle spe...`

