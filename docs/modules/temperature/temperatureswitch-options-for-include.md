
# TemperatureSwitch Options

The TemperatureSwitch module automatically toggles a Switch module at a specified temperature.

The temperature is read from a TemperatureControl module.

## How It Works

This module monitors the temperature from a specified TemperatureControl module and automatically activates or deactivates a Switch module when the temperature crosses a threshold.

This is useful for controlling fans, cooling systems, or other temperature-dependent devices.

## Configuration Options

| Option | Default Value | Description |
| ------ | :-----------: | ----------- |
| <setting v1="temperatureswitch.{name}.enable" v2="temperature switch.{name}.enable"></setting> | {::nomarkdown}<raw>`false`</raw>{:/nomarkdown} | Create and enable a new TemperatureSwitch module if set to true. |
| <setting v1="temperatureswitch.{name}.designator" v2="temperature switch.{name}.designator"></setting> | {::nomarkdown}<raw>`""` (empty)</raw>{:/nomarkdown} | Specify which TemperatureControl module to read temperature from, must match the designator for that module. Note: Hotends have special case handling. |
| <setting v1="temperatureswitch.{name}.switch" v2="temperature switch.{name}.switch"></setting> | {::nomarkdown}<raw>`""` (empty)</raw>{:/nomarkdown} | Specify the name of the Switch module to be toggled. |
| <setting v1="temperatureswitch.{name}.threshold_temp" v2="temperature switch.{name}.threshold_temp"></setting> | {::nomarkdown}<raw>`50.0`</raw>{:/nomarkdown} | Turn the switch ON above this temperature (in °C), and OFF below this temperature. |
| <setting v1="temperatureswitch.{name}.heatup_poll" v2="temperature switch.{name}.heatup_poll"></setting> | {::nomarkdown}<raw>`15`</raw>{:/nomarkdown} | Poll temperature at this frequency (in seconds) when heating up. |
| <setting v1="temperatureswitch.{name}.cooldown_poll" v2="temperature switch.{name}.cooldown_poll"></setting> | {::nomarkdown}<raw>`60`</raw>{:/nomarkdown} | Poll temperature at this frequency (in seconds) when cooling down. |
| <setting v1="temperatureswitch.{name}.trigger" v2="temperature switch.{name}.trigger"></setting> | {::nomarkdown}<raw>`level`</raw>{:/nomarkdown} | Can be `level`, `rising`, `falling` - `level` is the default. |
| <setting v1="temperatureswitch.{name}.inverted" v2="temperature switch.{name}.inverted"></setting> | {::nomarkdown}<raw>`false`</raw>{:/nomarkdown} | Will turn the switch off when the temp > target and vice versa when set to `true`. |
| <setting v1="temperatureswitch.{name}.arm_mcode" v2="temperature switch.{name}.arm_mcode"></setting> | {::nomarkdown}<raw>`0`</raw>{:/nomarkdown} | M code used to arm the edge triggered switch, e.g., `M1100 S1` arms it. |

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>V2 Configuration Note:</strong> In Smoothieware v2, this module uses INI-style sections. Replace <code>temperatureswitch.module_name</code> with <code>[temperature switch.module_name]</code> section headers.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  For more information about using the TemperatureSwitch module, see the main <a href="temperatureswitch">TemperatureSwitch</a> documentation page.
</sl-alert>
{:/nomarkdown}
