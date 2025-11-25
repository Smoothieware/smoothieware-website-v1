---
permalink: /pwm-capable
---

# PWM Capable Pins

This page is a summary of [LPC1769 Pin Usage](lpc1769-pin-usage) concerning only hardware PWM capable pins.

Hardware PWM is available only on pins {::nomarkdown}<pin>2.0</pin>{:/nomarkdown} to {::nomarkdown}<pin>2.5</pin>{:/nomarkdown}, {::nomarkdown}<pin>1.18</pin>{:/nomarkdown}, {::nomarkdown}<pin>1.20</pin>{:/nomarkdown}, {::nomarkdown}<pin>1.21</pin>{:/nomarkdown}, {::nomarkdown}<pin>1.23</pin>{:/nomarkdown}, {::nomarkdown}<pin>1.24</pin>{:/nomarkdown}, {::nomarkdown}<pin>1.26</pin>{:/nomarkdown}, {::nomarkdown}<pin>3.25</pin>{:/nomarkdown} and {::nomarkdown}<pin>3.26</pin>{:/nomarkdown}.

If you plan to use a hobby servo, LEDs, lasers or any kind of device which require PWM with the [Switch module](switch), ensure to pick the right pin depending on your board version.

## Available hardware PWM pins

| ARM Pin | 3X/3XC | 4X/4XC | 5X/5XC | Assignment | Comment |
| ------- | ------ | ------ | ------ | ---------- | ------- |
| <raw>P1.18</raw> | <setting v1="leds_disable"></setting> | <setting v1="leds_disable"></setting> | <setting v1="leds_disable"></setting> | <raw>led1</raw> | set <setting v1="leds_disable"></setting> in config to use it |
| <raw>P1.20</raw> | <setting v1="leds_disable"></setting> | <setting v1="leds_disable"></setting> | <setting v1="leds_disable"></setting> | <raw>led3</raw> | set <setting v1="leds_disable"></setting> in config to use it |
| <raw>P1.21</raw> | <setting v1="leds_disable"></setting> | <setting v1="leds_disable"></setting> | <setting v1="leds_disable"></setting> | <raw>led4</raw> | set <setting v1="leds_disable"></setting> in config to use it |
| <raw>P1.23</raw> | <raw>available</raw> | <raw>available</raw> | | <raw>3rd large fet</raw> | |
| <raw>P1.24</raw> | | | | <setting v1="alpha_min_endstop"></setting> | can be used on delta without min endstops |
| <raw>P1.26</raw> | | | | <setting v1="beta_min_endstop"></setting> | can be used on delta without min endstops |
| <raw>P2.0</raw> | | | | <setting v1="alpha_step_pin"></setting> | |
| <raw>P2.1</raw> | | | | <setting v1="beta_step_pin"></setting> | |
| <raw>P2.2</raw> | | | | <setting v1="gamma_step_pin"></setting> | |
| <raw>P2.3</raw> | <raw>available</raw> | | | <setting v1="delta_step_pin"></setting> | |
| <raw>P2.4</raw> | | | | <setting v1="switch.psu.output_pin"></setting> | |
| <raw>P2.5</raw> | | | | <setting v1="temperature_control.bed.heater_pin"></setting> | |
| <raw>P3.25</raw> | <raw>available</raw> | <raw>available</raw> | <raw>available</raw> | | used for encoder pin for all panels |
| <raw>P3.26</raw> | <raw>available</raw> | <raw>available</raw> | <raw>available</raw> | | used for encoder pin for all panels |

## Summary by Board Version

Depending on the configuration:

- The 5X board has 2 to 5 available PWM pins
- The 4X board has 3 to 6 available PWM pins
- The 3X board has 4 to 7 available PWM pins

## Wiring Diagram

{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <a href="https://github.com/Bouni/smoothieboard-graphics/blob/master/smoothieboard-wiring.png?raw=true">
    <img src="https://github.com/Bouni/smoothieboard-graphics/blob/master/smoothieboard-wiring.png?raw=true" alt="Smoothie Wiring Diagram" style="min-width: 640px; width: 80%; height: auto; background-color: #f8f8f8;"/>
  </a>
</div>
{:/nomarkdown}
