
# Using the touchprobe

> [!NOTE]
> This module is no longer supported, and is not compiled in. If someone fixes this let us know.
> 
> Left here for historical purposes....

![Touchprobe Image](/images/external/http.chibidibidiwah.wdfiles.com.local.files.gallery.cbr5vb7odykexwcunqz7lxb.vph8znhd2neevo.nsxg.png)

Currently, the only operation regarding touchprobes supported by Smoothie is `G31`. `G31` works similarly to `G1` codes but stops if the probe is touched. Please note that coordinated moves are not supported. This means only moves along a single axis will work. Some examples:

This will move to Z-10 and stop when a touch happens during that move:
```gcode
G90
G31 Z-10 F150
```

This will probe at a fast speed, retract, probe at a slow speed, and report the position:
```gcode
G91
G31 Z-10 F300
G0 Z0.2
G31 Z-0.3 F50
M114
```

In addition to the `M114`, every touch is logged to a file (for more information see: [Using log files](#using-log-files))

## Configuration

The touchprobe module has the following configuration values (the values here are the default):

```ini
touchprobe_enable                   false              # enables/disables the module the other config values are ignored if this is false
touchprobe_log_enable               false              # should the touches be logged
touchprobe_logfile_name             /sd/probe_log.csv  # location of the log file
touchprobe_log_rotate_mcode         0                  # adds a spacer to the logfile if Mxxx is issued
touchprobe_pin                      nc                 # selects the pin where the probe is connected
touchprobe_debounce_count           100                # reports a touch if the probe is active for this number of ticks (prevents false positives) 
```

## Using log files

The log file is an easy way to create point clouds of the probed objects. Due to bugs in mbed, the log file isn't created automatically, so you have to create it first and restart Smoothie in order to update the file-handle properly. You should also properly unmount (safely remove) the SD card before logging. This is because the file-system is dual-mounted: by your operating system and by Smoothie. As a consequence, desynchronization is possible. If you forget this, try to remount the SD card afterward; most of the time, no data loss will happen.

### Convert to a Stanford PLY file

It's very easy to convert the logfile to a PLY file, which is supported by most point cloud applications. Note this only works if there are no spacers in the file, that are generated by the "log-rotation" M-code.

1. Find out how many points have been logged (*nix users can use `wc -l` for that).
2. Append the following header:
   ```ply
   ply
   format ascii 1.0
   comment smoothie cloud
   element vertex xxxxxxxx
   property float x
   property float y
   property float z
   element face 0
   property list uchar int vertex_indices
   end_header
   ```
3. Replace 'xxxxxxxx' with the number you found in step 1.
4. You're done.

## Finding the center of round objects

1. Probe along the Y-axis for P1 and P2.
2. Calculate the center between them: 
   $$P3=(P1.x, P1.y + \frac{(P2.y-P1.y)}{2})$$
3. Probe along the X-axis for P4 and P5, make sure the Y-axis is at P3.y.
4. Calculate the center between them: 
   $$M=(P4.x+\frac{(P5.x-P4.x)}{2},P3.y)$$
5. M is the center.

![Midpoint Image](/images/touchprobe/midpoint.png)