
# Joystick Options

The joystick module allows you to control Smoothie using analog joystick inputs. Below are the configuration options available.

## Basic Options

| Option | Example Value | Explanation |
| ------ | :-----------: | ----------- |
| <setting v1="joystick.{name}.enable"></setting> | {::nomarkdown}<raw>true</raw>{:/nomarkdown} | If true, create and enable a new Joystick module with the name "module_name" |
| <setting v1="joystick.{name}.pin"></setting>| <pin>1.30</pin> | Which SmoothieBoard pin should be used to read the value. See table above for allowable pins. |
| <setting v1="joystick.{name}.refresh_rate"></setting> | {::nomarkdown}<raw>10</raw>{:/nomarkdown} | Sets how many times per second to update the joystick reading |
| <setting v1="joystick.{name}.zero_offset"></setting> | {::nomarkdown}<raw>1.65</raw>{:/nomarkdown} | Sets what voltage will map to zero output |
| <setting v1="joystick.{name}.endpoint"></setting> | {::nomarkdown}<raw>3.3</raw>{:/nomarkdown} | Sets what voltage will map to +/- 1. If <setting v1="joystick.{name}.endpoint"></setting> is greater than <setting v1="joystick.{name}.zero_offset"></setting>, it specifies what voltage maps to 1. If <setting v1="joystick.{name}.endpoint"></setting> is less than <setting v1="joystick.{name}.zero_offset"></setting>, it specifies what voltage maps to -1 |

## Auto-Zero Configurations

The auto-zero feature automatically determines the center position of your joystick on startup.

| Option | Example Value | Explanation |
| ------ | :-----------: | ----------- |
| <setting v1="joystick.{name}.auto_zero"></setting> | {::nomarkdown}<raw>true</raw>{:/nomarkdown} | If true, enables the auto-zeroing feature, which automatically determines the <setting v1="joystick.{name}.zero_offset"></setting> |
| <setting v1="joystick.{name}.startup_time"></setting> | {::nomarkdown}<raw>1000</raw>{:/nomarkdown} | Sets how long (in milliseconds) after SmoothieBoard resets to obtain readings to average for <setting v1="joystick.{name}.zero_offset"></setting>. It must be at least 1000 / <setting v1="joystick.{name}.refresh_rate"></setting>, but shouldn't be too long, otherwise the joystick might be moved during the measurement. |
| <setting v1="joystick.{name}.start_value"></setting> | {::nomarkdown}<raw>0</raw>{:/nomarkdown} | Sets the default value of the joystick output during the startup time. Should be between -1 and 1 |
