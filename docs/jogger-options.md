
# Jogger Options

The Jogger module allows you to control machine movement using joystick input.

This page lists all configuration options for the Jogger module.

## Configuration Options

| Option | Example Value | Explanation |
| ------ | ------------- | ----------- |
| `jogger.enable` | true | If true, enable the Jogger module |
| `jogger.data_source_alpha` | horizontal | Specifies the [module name](module-name) of the Joystick module the alpha/first jog axis will read from |
| `jogger.data_source_beta` | vertical | Specifies the [module name](module-name) of the Joystick module the beta/second jog axis will read from |
| `jogger.jog_axes` | Xy,XZ,-Z | Sets a list of the machine axes which will be controlled by the jogger. Axis letters are given in order of jog axis alpha, beta, etc. The first item in the list will be used on startup. Issuing the `toggle axes` command (`M778` by default) will cycle between the items in the list. Valid machine letters are X, Y, Z, A, B, C. Use "-" for no axis controlled. **Do not use spaces in the list**. |
| `jogger.m_code_set` | 777 | Sets which M-code number the `set axes` command will use (`777` means use `M777` to set the jog axes) |
| `jogger.m_code_toggle` | 778 | Sets which M-code number the `toggle axes` command will use (`778` means use `M778` to toggle the jog axes) |
| `jogger.max_speed` | 600 | Sets the maximum speed the machine will jog. If not given, the Jogger uses the general configuration "default_seek_rate" (`G0` speed) |
| `jogger.dead_zone` | 0.05 | Sets the threshold the joystick must cross before movement occurs (see description below) |
| `jogger.nonlinearity` | 1.5 | Sets the non-linearity of the joystick to speed conversion function (see description below) |
| `jogger.refresh_rate` | 100 | Specifies how many times per second to read the joysticks |
| `jogger.segment_frequency` | 10 | Sets the number of tiny movement segments per second while jogging |
