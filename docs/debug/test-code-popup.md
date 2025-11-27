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

- <gcode>G0</gcode> - Rapid movement (related: <gcode>G1</gcode>, <gcode>G90</gcode>, <gcode>G91</gcode>)
- <gcode>G1</gcode> - Linear movement with tool active (related: <gcode>G0</gcode>, <gcode>G2</gcode>, <gcode>G3</gcode>, <gcode>G90</gcode>, <gcode>G91</gcode>)
- <gcode>G28</gcode> - Home axes (related: <gcode>G28.1</gcode>, <gcode>G30</gcode>, <mcode>M119</mcode>, <mcode>M306</mcode>, <mcode>M665</mcode>)
- <gcode>G2</gcode> - Clockwise arc (related: <gcode>G1</gcode>, <gcode>G3</gcode>, <gcode>G17</gcode>)

## G-codes from Source Analysis

These codes were found in source code:

- <gcode>G10</gcode> - Tool offset / Retract
- <gcode>G11</gcode> - Unretract filament
- <gcode>G38</gcode> - Probe towards workpiece
- <gcode>G53</gcode> - Machine coordinates

## M-codes with Rich Documentation

Hover over these codes to see detailed popups with **related codes**:

- <mcode>M112</mcode> - Emergency stop (related: <mcode>M999</mcode>)
- <mcode>M500</mcode> - Save to EEPROM (related: <mcode>M501</mcode>, <mcode>M503</mcode>, <mcode>M306</mcode>, <mcode>M665</mcode>)
- <mcode>M600</mcode> - Filament change (related: <mcode>M601</mcode>, <mcode>M24</mcode>, <mcode>M25</mcode>, <mcode>M0</mcode>, <mcode>M1</mcode>)
- <mcode>M306</mcode> - Set homing offset (related: <mcode>M665</mcode>, <mcode>M500</mcode>, <gcode>G28</gcode>, <gcode>G92</gcode>, <mcode>M119</mcode>)

## M-codes from Source Analysis

- <mcode>M951</mcode> - LED test
- <mcode>M952</mcode> - Error dump
- <mcode>M957</mcode> - Report spindle
- <mcode>M958</mcode> - Set spindle

## Mixed Usage in Context

Example G-code sequence with cross-referenced codes:

1. Send <gcode>G28</gcode> to home all axes (click to see <mcode>M119</mcode>, <mcode>M306</mcode>, <mcode>M665</mcode> related codes)
2. Use <gcode>G0</gcode> to rapid move to start position (click to see <gcode>G1</gcode>, <gcode>G90</gcode>, <gcode>G91</gcode>)
3. Use <gcode>G1</gcode> with F parameter to cut (click to see <gcode>G0</gcode>, <gcode>G2</gcode>, <gcode>G3</gcode>)
4. Send <mcode>M114</mcode> to check position (click to see <gcode>G28</gcode>, <gcode>G92</gcode>)
5. Use <mcode>M500</mcode> to save settings (click to see <mcode>M501</mcode>, <mcode>M503</mcode>, <mcode>M306</mcode>)

## Test Related Code Navigation

Try this navigation path to test the feature:

1. Hover over <gcode>G10</gcode> (Retract)
2. Click on related code **<gcode>G11</gcode>** in the popup
3. From <gcode>G11</gcode>, click on related code **<mcode>M207</mcode>**
4. From <mcode>M207</mcode>, click on related code **<mcode>M208</mcode>**
5. From <mcode>M208</mcode>, click back to **<gcode>G10</gcode>** to complete the circle

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
