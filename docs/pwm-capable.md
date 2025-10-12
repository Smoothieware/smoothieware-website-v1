
This page is a summary of [LPC1769 Pin Usage](lpc1769-pin-usage) concerning only hardware PWM capable pins.
Hardware PWM is available only on pins `2.0` to `2.5`, `1.18`, `1.20`, `1.21`, `1.23`, `1.24`, `1.26`, `3.25` and `3.26`

If you plan to use a hobby servo, LEDs, lasers or any kind of device which require PWM with the [Switch module](switch), ensure to pick the right pin depending on your board version.

## Available hardware PWM pins

| ARM Pin | 3X/3XC | 4X/4XC | 5X/5XC | Assignment | Comment |
| ------- | ------ | ------ | ------ | ---------- | ------- |
| P1.18 | leds_disable | leds_disable | leds_disable | led1 | set `leds_disable` in config to use it |
| P1.20 | leds_disable | leds_disable | leds_disable | led3 | set `leds_disable` in config to use it |
| P1.21 | leds_disable | leds_disable | leds_disable | led4 | set `leds_disable` in config to use it |
| P1.23 | `available` | `available` | | 3rd large fet | |
| P1.24 | | | | alpha_min_endstop | can be used on delta without min endstops |
| P1.26 | | | | beta_min_endstop | can be used on delta without min endstops |
| P2.0 | | | | alpha_step_pin | |
| P2.1 | | | | beta_step_pin | |
| P2.2 | | | | gamma_step_pin | |
| P2.3 | `available` | | | delta_step_pin | |
| P2.4 | | | | psu.output_pin | |
| P2.5 | | | | bed.heater_pin | |
| P3.25 | `available` | `available` | `available` | | used for encoder pin for all panels |
| P3.26 | `available` | `available` | `available` | | used for encoder pin for all panels |

Depending on the configuration:
- the 5X board have 2 to 5 available PWM pins
- the 4X board have 3 to 6 available PWM pins
- the 3X board have 4 to 7 available PWM pins

{::nomarkdown}
<img src="https://github.com/Bouni/smoothieboard-graphics/blob/master/smoothieboard-wiring.png?raw=true" alt="Smoothie Wiring Diagram" width=600>
{:/nomarkdown}
