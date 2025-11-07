# TemperatureSwitch Options

The TemperatureSwitch module automatically toggles a Switch module at a specified temperature.

The temperature is read from a TemperatureControl module.

## How It Works

This module monitors the temperature from a specified TemperatureControl module and automatically activates or deactivates a Switch module when the temperature crosses a threshold.

This is useful for controlling fans, cooling systems, or other temperature-dependent devices.

## Configuration Options

| Option | Default Value | Description |
| ------ | ------------- | ----------- |
| `temperatureswitch.module_name.enable` | `false` | Create and enable a new TemperatureSwitch module if set to true. |
| `temperatureswitch.module_name.designator` | `""` (empty) | Specify which TemperatureControl module to read temperature from, must match the designator for that module. Note: Hotends have special case handling. |
| `temperatureswitch.module_name.switch` | `""` (empty) | Specify the name of the Switch module to be toggled. |
| `temperatureswitch.module_name.threshold_temp` | `50.0` | Turn the switch ON above this temperature (in °C), and OFF below this temperature. |
| `temperatureswitch.module_name.heatup_poll` | `15` | Poll temperature at this frequency (in seconds) when heating up. |
| `temperatureswitch.module_name.cooldown_poll` | `60` | Poll temperature at this frequency (in seconds) when cooling down. |
| `temperatureswitch.module_name.trigger` | `level` | Can be `level`, `rising`, `falling` - `level` is the default. |
| `temperatureswitch.module_name.inverted` | `false` | Will turn the switch off when the temp > target and vice versa when set to `true`. |
| `temperatureswitch.module_name.arm_mcode` | `0` | M code used to arm the edge triggered switch, e.g., `M1100 S1` arms it. |

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  For more information about using the TemperatureSwitch module, see the main <a href="temperatureswitch">TemperatureSwitch</a> documentation page.
</sl-alert>
{:/nomarkdown}
