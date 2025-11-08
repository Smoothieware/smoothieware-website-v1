---
layout: default
title: Code Tag Popup Test
---

# Code Tag Popup Test

This page tests the G-code and M-code popup functionality including the new **related codes** feature.

## Features to Test

1. **Popup Placement**: Popups always appear at bottom (never above), matching setting tag behavior
2. **Larger Title**: Code header is 24px with bold font
3. **Colored Letter**: G (orange #ffd966), M (blue #7ec8ed), number in white
4. **Fancy Parameters**: Interactive parameter cards with:
   - Letter badge with orange background
   - Required/Optional status badge
   - Type tag (coordinate, speed, temperature, etc.)
   - Unit tag (mm, mm/min, °C, etc.)
   - Hover effect with subtle animation
5. **Generated Examples**: All codes now have realistic usage examples
6. **Related Codes Section**: Clickable buttons that update the popup content
7. **Navigation**: Click through related codes to explore connections

## G-codes with Rich Documentation

Hover over these codes to see detailed popups with **related codes**:

- <gcode>G0</gcode> - Rapid movement (related: G1, G90, G91)
- <gcode>G1</gcode> - Linear movement with tool active (related: G0, G2, G3, G90, G91)
- <gcode>G28</gcode> - Home axes (related: G28.1, G30, M119, M306, M665)
- <gcode>G2</gcode> - Clockwise arc (related: G1, G3, G17)

## G-codes from Source Analysis

These codes were found in source code:

- <gcode>G10</gcode> - Tool offset / Retract
- <gcode>G11</gcode> - Unretract filament
- <gcode>G38</gcode> - Probe towards workpiece
- <gcode>G53</gcode> - Machine coordinates

## M-codes with Rich Documentation

Hover over these codes to see detailed popups with **related codes**:

- <mcode>M112</mcode> - Emergency stop (related: M999)
- <mcode>M500</mcode> - Save to EEPROM (related: M501, M503, M306, M665)
- <mcode>M600</mcode> - Filament change (related: M601, M24, M25, M0, M1)
- <mcode>M306</mcode> - Set homing offset (related: M665, M500, G28, G92, M119)

## M-codes from Source Analysis

- <mcode>M951</mcode> - LED test
- <mcode>M952</mcode> - Error dump
- <mcode>M957</mcode> - Report spindle
- <mcode>M958</mcode> - Set spindle

## Mixed Usage in Context

Example G-code sequence with cross-referenced codes:

1. Send <gcode>G28</gcode> to home all axes (click to see M119, M306, M665 related codes)
2. Use <gcode>G0</gcode> to rapid move to start position (click to see G1, G90, G91)
3. Use <gcode>G1</gcode> with F parameter to cut (click to see G0, G2, G3)
4. Send <mcode>M114</mcode> to check position (click to see G28, G92)
5. Use <mcode>M500</mcode> to save settings (click to see M501, M503, M306)

## Test Related Code Navigation

Try this navigation path to test the feature:

1. Hover over <gcode>G10</gcode> (Retract)
2. Click on related code **G11** in the popup
3. From G11, click on related code **M207**
4. From M207, click on related code **M208**
5. From M208, click back to **G10** to complete the circle

This tests that the popup updates correctly and all related code links work bidirectionally.

## Test Fancy Parameters

Hover over these codes to see the beautiful parameter cards:

### G-codes with Rich Parameters
- <gcode>G1</gcode> - 9 parameters: X, Y, Z, A, B, C, E, F, S (coordinate, speed, percentage types)
- <gcode>G2</gcode> - Arc motion with I, J, K offset parameters
- <gcode>G92</gcode> - Set position with X, Y, Z, E parameters

### M-codes with Rich Parameters
- <mcode>M92</mcode> - Steps per mm for all axes (X, Y, Z, E with steps/mm unit)
- <mcode>M203</mcode> - Maximum feedrate with speed parameters (mm/min units)
- <mcode>M301</mcode> - PID tuning with P, I, D decimal parameters
- <mcode>M207</mcode> - Retraction with S (distance), F (speed), Z (lift) parameters

Each parameter card shows:
- **Letter** in orange badge
- **Required/Optional** status
- **Type** (coordinate, speed, temperature, etc.)
- **Unit** (mm, mm/min, °C, steps/mm, etc.)
- **Description** of what the parameter does

## Edge Cases

Test codes with decimals:
- <gcode>G28.1</gcode> - Set home position
- <gcode>G38.3</gcode> - Probe without error

Test high M-codes:
- <mcode>M999</mcode> - Reset / resume after halt
- <mcode>M1000</mcode> - Generic command wrapper
- <mcode>M1234</mcode> - Undocumented M-code

## Total Coverage

The database now includes:
- **23 G-codes** (expanded from 16)
- **44 M-codes** (expanded from 17)
- **67 total codes** (doubled from 33)

All codes should display popups with at least a description. Codes from documentation have rich information including parameters, examples, and notes.
