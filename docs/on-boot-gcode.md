---
permalink: /on-boot-gcode
layout: default
title: on_boot.gcode - Startup G-code File
---

# on_boot.gcode - Startup G-code File

The `on_boot.gcode` file is a special G-code file that Smoothieware automatically executes when the board boots up. This feature allows you to run initialization commands, homing sequences, or startup configurations without manual intervention.

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Key Feature:</strong> The on_boot.gcode file executes automatically every time your Smoothieboard powers up or resets, making it ideal for machine initialization and startup routines.
</sl-alert>
{:/nomarkdown}

---

## What is on_boot.gcode?

`on_boot.gcode` is a standard G-code file stored on your Smoothieboard's SD card that runs automatically after the board completes its boot sequence. Think of it as a startup script for your CNC machine, 3D printer, laser cutter, or other Smoothie-controlled device.

### Common Use Cases

- **Automatic homing** on power-up
- **Setting default temperatures** for hotends or heated beds
- **Initializing tool positions** or offsets
- **Loading saved settings** or profiles
- **Running calibration routines**
- **Setting default speeds** and acceleration values
- **Enabling/disabling specific features** for your workflow
- **Moving to a safe parking position** after boot

---

## Location and File Format

### File Location

The file must be placed in the root directory of your Smoothieboard's SD card:

```
/sd/on_boot.gcode
```

When you connect your Smoothieboard via USB, the SD card appears as a removable drive. Simply copy the `on_boot.gcode` file to the root of this drive, alongside your `config` file.

### File Format

The file uses standard G-code format:

- **One command per line**
- **Comments** start with `;` or `()`
- **Standard G-code syntax** (same as any G-code file)
- **Case insensitive** (G28 and g28 are equivalent)
- **Blank lines** are ignored

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Tip:</strong> Keep your on_boot.gcode file simple and fast. Complex routines that take a long time will delay your machine being ready to use.
</sl-alert>
{:/nomarkdown}

---

## Configuration

The `on_boot.gcode` feature is controlled by two configuration options in your `config` file:

| Option | Default Value | Description |
| ------ | ------------- | ----------- |
| <setting v1="on_boot_gcode_enable"></setting> | `true` | Enable or disable automatic execution of the on_boot.gcode file |
| <setting v1="on_boot_gcode"></setting> | `/sd/on_boot.gcode` | Path to the G-code file to execute on boot |

### Enabling on_boot.gcode

Add these lines to your `config` file:

```
on_boot_gcode_enable true
on_boot_gcode /sd/on_boot.gcode
```

### Disabling on_boot.gcode

To temporarily disable the feature without deleting the file:

```
on_boot_gcode_enable false
```

Or simply comment out the line:

```
# on_boot_gcode_enable true
```

---

## Execution Timing

The `on_boot.gcode` file executes:

- **After the board completes booting** (typically 2-3 seconds after power-on)
- **After the configuration file is loaded**
- **Before any other commands** from the console or host software
- **On every reset or power cycle** (not just cold boots)

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Important:</strong> The on_boot.gcode file runs on EVERY boot, including resets and watchdog timer resets. Ensure your commands are safe to run repeatedly.
</sl-alert>
{:/nomarkdown}

---

## Practical Examples

### Example 1: Simple Homing on Startup

The most common use case is to automatically home your machine when it powers up:

```gcode
; Home all axes on startup
G28 ; Home X, Y, and Z axes
```

For 3D printers, you might want to home and then move to a specific position:

```gcode
; Home and move to printing start position
G28          ; Home all axes
G0 Z10       ; Raise Z to 10mm
G0 X0 Y0     ; Move to front-left corner
```

### Example 2: 3D Printer Initialization

A more comprehensive startup sequence for a 3D printer:

```gcode
; 3D Printer startup sequence
G21          ; Set units to millimeters
G90          ; Use absolute positioning
M82          ; Set extruder to absolute mode
G28          ; Home all axes
G0 Z50       ; Raise Z to safe height
G0 X10 Y10   ; Move to safe position
M104 S0      ; Ensure hotend is off
M140 S0      ; Ensure bed is off
```

### Example 3: CNC Mill Initialization

For a CNC mill, you might want to ensure safe startup conditions:

```gcode
; CNC Mill startup sequence
G21          ; Metric units
G90          ; Absolute positioning
G17          ; XY plane selection
M5           ; Ensure spindle is off
G28.2 Z0     ; Home Z axis only (safe for mill)
G53 G0 Z-5   ; Move to machine coordinates Z safe height
M0           ; Pause for user to verify before homing XY
```

### Example 4: Laser Cutter Safe Startup

For laser cutters, safety is critical:

```gcode
; Laser cutter safe startup
G21          ; Metric units
G90          ; Absolute positioning
M5           ; Laser OFF
M3 S0        ; Set laser power to 0
G28 X Y      ; Home X and Y only (not Z for laser)
G0 X5 Y5     ; Move away from origin
```

### Example 5: Loading Saved Settings

You can use `on_boot.gcode` to load settings saved with M500:

```gcode
; Load settings and initialize
M501         ; Load settings from config-override
G28          ; Home all axes
```

---

## Best Practices

### Do's

- **Keep it simple**: Fast, essential commands only
- **Add comments**: Document what each command does
- **Test thoroughly**: Verify commands work as expected before relying on auto-execution
- **Use safe defaults**: Assume unknown machine state at boot
- **Home before moving**: Always home axes before absolute position moves
- **Turn off heaters/spindles**: Ensure tools are off by default

### Don'ts

- **Don't include long delays**: Avoid M0 (pause) or long G4 (dwell) commands
- **Don't assume positions**: Never move without homing first
- **Don't start tools automatically**: Don't turn on spindles, lasers, or heaters without user confirmation
- **Don't use complex macros**: Keep logic simple and straightforward
- **Don't exceed machine limits**: Stay within safe travel ranges

{::nomarkdown}
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>Safety Warning:</strong> Never include commands in on_boot.gcode that could cause damage if the machine state is unknown (e.g., moving axes without homing, turning on heaters to high temperatures, or starting spindles/lasers).
</sl-alert>
{:/nomarkdown}

---

## Troubleshooting

### on_boot.gcode Not Executing

If your `on_boot.gcode` file is not running on boot:

1. **Check the filename**: Must be exactly `on_boot.gcode` (case may matter on some systems)
2. **Verify location**: File must be in the root directory of the SD card (`/sd/on_boot.gcode`)
3. **Check configuration**: Ensure `on_boot_gcode_enable true` is in your config file
4. **Verify the path**: Confirm `on_boot_gcode /sd/on_boot.gcode` matches your file location
5. **Check file format**: Ensure the file is plain text, not a Word document or other format
6. **Look for errors**: Connect via console and watch for error messages during boot

### Commands Not Working as Expected

If commands execute but don't work correctly:

1. **Test individually**: Try each command manually via console to verify syntax
2. **Check prerequisites**: Some commands require specific machine states or modules enabled
3. **Add delays**: Some hardware needs time to respond; add small `G4 P500` (500ms delay) between commands
4. **Verify configuration**: Ensure required modules (endstops, motors, etc.) are configured
5. **Check console output**: Watch the console during boot for error messages

### Partial Execution

If only some commands execute:

1. **Check for errors**: An invalid command may stop execution
2. **Verify G-code syntax**: Use a G-code validator or test commands individually
3. **Look for file corruption**: Try recreating the file from scratch
4. **Check line endings**: Use Unix-style line endings (LF), not Windows (CRLF)

### Debugging Tips

Enable verbose output in your config to see detailed execution:

```
loglevel 4
```

Then watch the console during boot to see what's happening.

You can also test your `on_boot.gcode` file manually by playing it:

```
play /sd/on_boot.gcode
```

---

## Version Compatibility

### Smoothieware v1

The `on_boot.gcode` feature is fully supported in Smoothieware v1 with the configuration options documented above.

### Smoothieware v2

Smoothieware v2 also supports boot-time G-code execution. While the exact implementation may vary slightly, the core concept remains the same. Consult the v2 documentation for specific configuration details.

---

## Related Features

### config-override

The [config-override](configuring-smoothie#config-override) file is created when you use the `M500` command to save settings. You can load these saved settings in your `on_boot.gcode`:

```gcode
M501  ; Load settings from config-override
```

### Suspend and Resume G-code

Similar to `on_boot.gcode`, you can define G-code sequences for suspend and resume events:

- `after_suspend_gcode`: Runs when print is paused
- `before_resume_gcode`: Runs before resuming a paused print

See [Player Options](player-options) for details.

---

## Related Documentation

- [Player Module](player) - Handles G-code file playback
- [Player Options](player-options) - Configuration for boot, suspend, and resume behavior
- [SD Card](sd-card) - SD card setup and file management
- [Supported G-codes](supported-g-codes) - Complete G-code reference
- [Console Commands](console-commands) - Direct control via console
- [Configuring Smoothie](configuring-smoothie) - Main configuration guide

---

## Summary

The `on_boot.gcode` file provides a powerful way to automate your machine's startup sequence:

- **Simple setup**: Just create a G-code file on your SD card
- **Automatic execution**: Runs every time the board boots
- **Flexible configuration**: Enable/disable and customize the file path
- **Standard G-code**: Use familiar G-code commands
- **Safety first**: Design startup sequences with safety in mind

Whether you're running a 3D printer, CNC mill, laser cutter, or other machine, `on_boot.gcode` can save time and ensure consistent initialization every time you power on your Smoothieboard.
