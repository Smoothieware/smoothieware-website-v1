
# TemperatureSwitch Options

The TemperatureSwitch module automatically toggles a Switch module at a specified temperature (read from a TemperatureControl module).

## Configuration Options

| Option | Default Value | Description |
| ------ | ------------- | ----------- |
| `temperatureswitch.module_name.enable` | `true` | Create and enable a new TemperatureSwitch module if set to true. |
| `temperatureswitch.module_name.designator` | `T` | Specify which TemperatureControl module to read temperature from, must match the designator for that module. |
| `temperatureswitch.module_name.switch` | `misc` | Specify the name of the Switch module to be toggled. |
| `temperatureswitch.module_name.threshold_temp` | `60` | Turn the switch ON above this temperature (in °C), and OFF below this temperature. |
| `temperatureswitch.module_name.heatup_poll` | `15` | Poll temperature at this frequency (in seconds) when heating up. |
| `temperatureswitch.module_name.cooldown_poll` | `60` | Poll temperature at this frequency (in seconds) when cooling down. |
| `temperatureswitch.module_name.trigger` | `level` | Can be `level`, `rising`, `falling` - `level` is the default. |
| `temperatureswitch.module_name.inverted` | `false` | Will turn the switch off when the temp > target and vice versa when set to `true`. |
| `temperatureswitch.module_name.arm_mcode` | `1100` | M code used to arm the edge triggered switch, e.g., `M1100 S1` arms it. |
