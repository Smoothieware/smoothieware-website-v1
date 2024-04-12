
# Laser Module Configuration

The following table outlines the configuration options for the laser module in Smoothieware:

| Option | Default Value | Description |
| ------ | ------------- | ----------- |
| `laser_module_enable` | `true` | Whether to activate the laser module at all. All configuration is ignored if false. The laser module is used for laser cutting using a laser diode or CO2 laser tube. |
| `laser_module_pwm_pin` | `2.5` | This pin will control the laser. Pulse width will be modulated to vary power output (PWM). Note: PWM is available only on pins `2.0` to `2.5`, `1.18`, `1.20`, `1.21`, `1.23`, `1.24`, `1.26`, `3.25` and `3.26`. |
| `laser_module_ttl_pin` | `1.30` | This pin turns on when the laser turns on, and off when the laser turns off. |
| `laser_module_maximum_power` | `0.8` | This is the maximum duty cycle that will be applied to the laser. Value is from `0` to `1`. |
| `laser_module_minimum_power` | `0.0` | This duty cycle will be used for travel moves to keep the laser active without actually burning. Useful for some diode setups. Value is from `0` to `1`. |
| `laser_module_pwm_period` | `20` | PWM frequency expressed as the period in microseconds. |
| `laser_module_proportional_power` | `true` | Whether the laser power should be proportional to the current speed, so as speed of movement ramps up (and down), laser power is proportionally adjusted, so that the amount of laser power/quantity of photons for a given distance/area is always constant, even if speed has to increase/decrease progressively. This is true by default, but in some situations you might want to disable this feature. |
