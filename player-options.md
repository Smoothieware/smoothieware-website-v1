
| Option                | Value                           | Description |
| --------------------- | ------------------------------- | ----------- |
| `on_boot_gcode`       | `/sd/on_boot.gcode`             | G-code file to play when the board boots. This file will automatically be played when the board is done booting up. Useful for example if you want to home your printer when it boots, or do similar tasks. For more information see [on_boot.gcode](on_boot.gcode.md) |
| `on_boot_gcode_enable`| `true`                          | If set to true, play the `on_boot_gcode` file when the board boots up |
| `after_suspend_gcode` | `G91 G0 E-5 G0 Z10 G90 G0 X-50 Y-50` | G-code to execute automatically right after the suspend command is received, this is useful if you want to retract, or turn off heaters etc. The `_` character gets converted into space|
| `before_resume_gcode` | `G91 G1 E1 G90`                 | G-code to execute automatically right after the resume command is received, but before resuming execution. However, NOTE this is generally not needed as the resume will restore the state it was in before the suspend.  The `_` character gets converted into space|
| `leave_heaters_on_suspend` | `false`                   | If set to true, heaters are left ON when `suspend` is received. If set to false, heaters are turned OFF when `suspend` is received, and then turned back ON when `resume` is received. |
