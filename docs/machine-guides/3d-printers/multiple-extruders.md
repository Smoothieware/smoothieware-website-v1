---
permalink: /multiple-extruders
---


# Multiple Extrusion

Smoothie can handle up to 3 extruders (6 defined axes is the maximum the memory can handle).

To add extruders, simply add `Extruder` (controlling the extruder motor) and `TemperatureControl` (controlling the hotend) modules to the configuration file for each new extruder.

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  The default build of Smoothie only supports 2 extruders (5 axes). If you need 3 extruders, you need to compile with <code>make AXIS=6</code>.
</sl-alert>
{:/nomarkdown}

## Hardware Requirements

For each extruder, you will need:

- **One temperature input** for the hotend. Smoothieboard has 4 thermistor inputs, allowing for one heated bed and three hotends, or four hotends and no bed. Additional hotends can be added using thermocouple external boards connected to the SPI port.

- **One MOSFET output**: Smoothieboard has 6 MOSFET outputs that can be used for hotends. External MOSFETs or SSRs can be wired to any free GPIO pin for additional outputs.

- **One stepper motor driver**: Smoothieboard has 5 drivers, with 3 needed for 3-dimensional movement. Additional drivers can be wired using free GPIO pins.

Assuming a heated bed is used, two extruders can be driven with the on-board Smoothieboard. For three extruders, one external stepper motor driver is needed, and so on.

## Configuration

The default configuration is for a single extruder. To set up a second one, use the "module generation" syntax as seen in the `TemperatureControl` and `Switch` modules.

### Extruder Module Configuration

Here is an example configuration for two extruders:

{::nomarkdown}
```plaintext
# Extruder module configuration
extruder.hotend.enable                          true
extruder.hotend.steps_per_mm                    140
extruder.hotend.default_feed_rate               600
extruder.hotend.acceleration                    500
extruder.hotend.max_speed                       50
extruder.hotend.step_pin                        <pin>2.3</pin>
extruder.hotend.dir_pin                         <pin>0.22</pin>
extruder.hotend.en_pin                          <pin>0.21</pin>
delta_current                                   1.5

# Second extruder module configuration
extruder.hotend2.enable                         true
extruder.hotend2.steps_per_mm                   140
extruder.hotend2.default_feed_rate              600
extruder.hotend2.acceleration                   500
extruder.hotend2.max_speed                      50
extruder.hotend2.step_pin                       <pin>2.8</pin>
extruder.hotend2.dir_pin                        <pin>2.13</pin>
extruder.hotend2.en_pin                         <pin>4.29</pin>
epsilon_current                                 1.5
```
{:/nomarkdown}

Replace your current extruder configuration with this in the config file.

### Temperature Control Configuration

Also, configure an additional `TemperatureControl` module for the hotend.

Example configuration for two hotends:

{::nomarkdown}
```plaintext
# Temperature control configuration
temperature_control.hotend.enable            true
temperature_control.hotend.thermistor_pin    <pin>0.23</pin>
temperature_control.hotend.heater_pin        <pin>2.7</pin>
temperature_control.hotend.thermistor        EPCOS100K
temperature_control.hotend.set_m_code        104
temperature_control.hotend.set_and_wait_m_code 109
temperature_control.hotend.designator        T0

# Second hotend configuration
temperature_control.hotend2.enable            true
temperature_control.hotend2.thermistor_pin    <pin>0.25</pin>
temperature_control.hotend2.heater_pin        <pin>1.23</pin>
temperature_control.hotend2.thermistor        EPCOS100K
temperature_control.hotend2.set_m_code        104
temperature_control.hotend2.set_and_wait_m_code 109
temperature_control.hotend2.designator        T1
```
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Do not copy/paste the examples without understanding and adapting them to your specific setup.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Tip:</strong> For two extruders going into one hotend, set up two extruder modules and one temperature control module. Ensure the temperature control is named differently from the extruder modules.
</sl-alert>
{:/nomarkdown}

## Wiring

The first extruder is wired to M4, the second to M5.

For more extruders, external stepper motor drivers are needed. Refer to the [3D printer guide](3d-printer-guide) for more information.
