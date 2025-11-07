---
permalink: /joystick-options
---

# Joystick Options

The joystick module allows you to control Smoothie using analog joystick inputs. Below are the configuration options available.

## Basic Options

| Option | Example Value | Explanation |
| ------ | ------------- | ----------- |
| `joystick.module-name.enable` | true | If true, create and enable a new Joystick module with the name "module_name" |
| `joystick.module-name.pin`| `1.30` | Which SmoothieBoard pin should be used to read the value. See table above for allowable pins. |
| `joystick.module-name.refresh_rate` | 10 | Sets how many times per second to update the joystick reading |
| `joystick.module-name.zero_offset` | 1.65 | Sets what voltage will map to zero output |
| `joystick.module-name.endpoint` | 3.3 | Sets what voltage will map to +/- 1. If `endpoint` is greater than `zero_offset`, it specifies what voltage maps to 1. If `endpoint` is less than `zero_offset`, it specifies what voltage maps to -1 |

## Auto-Zero Configurations

The auto-zero feature automatically determines the center position of your joystick on startup.

| Option | Example Value | Explanation |
| ------ | ------------- | ----------- |
| `joystick.module-name.auto_zero` | true | If true, enables the auto-zeroing feature, which automatically determines the `zero_offset` |
| `joystick.module-name.startup_time` | 1000 | Sets how long (in milliseconds) after SmoothieBoard resets to obtain readings to average for `zero_offset`. It must be at least 1000 / `refresh_rate`, but shouldn't be too long, otherwise the joystick might be moved during the measurement. |
| `joystick.module-name.start_value` | 0 | Sets the default value of the joystick output during the startup time. Should be between -1 and 1 |
