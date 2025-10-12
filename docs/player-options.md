
# Player Options

The Player module in Smoothie allows you to play G-code files from the SD card and control various aspects of playback behavior.

These configuration options control what happens during boot, suspend, and resume operations.

## Configuration Options

| Option                | Value                           | Description |
| --------------------- | ------------------------------- | ----------- |
| `on_boot_gcode`       | `/sd/on_boot.gcode`             | G-code file to play when the board boots. This file will automatically be played when the board is done booting up. Useful for example if you want to home your printer when it boots, or do similar tasks. For more information see [on_boot.gcode](on_boot.gcode) |
| `on_boot_gcode_enable`| `true`                          | If set to true, play the `on_boot_gcode` file when the board boots up |
| `after_suspend_gcode` | `G91 G0 E-5 G0 Z10 G90 G0 X-50 Y-50` | G-code to execute automatically right after the suspend command is received, this is useful if you want to retract, or turn off heaters etc. The `_` character gets converted into space|
| `before_resume_gcode` | `G91 G1 E1 G90`                 | G-code to execute automatically right after the resume command is received, but before resuming execution. However, NOTE this is generally not needed as the resume will restore the state it was in before the suspend.  The `_` character gets converted into space|
| `leave_heaters_on_suspend` | `false`                   | If set to true, heaters are left ON when `suspend` is received. If set to false, heaters are turned OFF when `suspend` is received, and then turned back ON when `resume` is received. |

## Usage Examples

### Boot Sequence

To automatically home your printer on boot, create a file at `/sd/on_boot.gcode` with:

```gcode
G28 ; Home all axes
```

Then enable it in your config:

```
on_boot_gcode_enable true
on_boot_gcode /sd/on_boot.gcode
```

### Suspend and Resume

The suspend/resume feature is useful for:

- Pausing prints to change filament
- Temporarily stopping for inspection
- Emergency stops with state preservation

The `after_suspend_gcode` typically includes commands to:

- Retract filament to prevent oozing
- Raise the Z axis to prevent damage
- Move the toolhead to a safe position

## Related Documentation

- [Player Module](player)
- [on_boot.gcode](on_boot.gcode)
- [Supported G-Codes](supported-g-codes)
