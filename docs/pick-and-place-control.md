# Pick and Place Tool Control

{::nomarkdown}
<a href="/images/pick-and-place-nozzle.png">
  <img src="/images/pick-and-place-nozzle.png" alt="A pick and place nozzle" width="350" height="auto" style="float: right; margin-left: 1rem;" onerror="this.style.display='none'"/>
</a>
{:/nomarkdown}

The Pick and Place machine's main effectors are the vacuum nozzles that pick up components and place them on PCBs.

Unlike a CNC mill with a spindle, a Pick and Place machine uses:
- Vacuum systems to grip components
- Servos or stepper motors to control nozzle height (Z axis)
- Multiple nozzles for different component sizes

This section covers how to configure and control these systems with Smoothieboard.

## Vacuum System Overview

Pick and Place machines use vacuum to pick up and hold components during placement.

The vacuum system typically consists of:
- A vacuum pump or venturi system
- Solenoid valves to control vacuum to each nozzle
- Vacuum sensors to detect when a component is picked up or lost

## Vacuum Sensor Configuration

Many Pick and Place machines use vacuum sensors to detect whether a component has been successfully picked up.

These sensors read vacuum pressure through ADCs (Analog to Digital Converters) on the Smoothieboard.

To read vacuum sensors, you can use the [Temperature Control](temperaturecontrol) module configured to read ADC values directly, bypassing the thermistor math for linear reading.

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Firmware Requirement:</strong> Using vacuum sensors requires the Temperature Control module, which is not included by default in the CNC build. See the firmware compilation section earlier in this guide for instructions on how to include it.
</sl-alert>
{:/nomarkdown}

### Example Configuration

Here is an example vacuum sensor configuration for a dual-nozzle setup:

```plaintext
# VACUUM SENSING

# LEFT Nozzle Vacuum configuration

temperature_control.vac_n1.enable                 true             # Whether to activate this ( "hotend" ) module at all.
temperature_control.vac_n1.sensor                 ad8495           #
temperature_control.vac_n1.ad8495_pin             0.23             # Pin for the thermistor to read
temperature_control.vac_n1.ad8495_offset          0                #
temperature_control.vac_n1.heater_pin             nc               # Pin to controls the heater, nc if a read only thermistor.
temperature_control.vac_n1.readings_per_second    500              # How many times per second to read temperature from the sensor.
temperature_control.vac_n1.get_m_code             104              # Calling this M-code will return the current temperature.
temperature_control.vac_n1.designator             VAC              # Designator letter for this module
temperature_control.vac_n1.rt_curve               20.0,220,120,6000,220,120000

# RIGHT Nozzle Vacuum configuration

temperature_control.vac_n2.enable                 true             # Whether to activate this ( "hotend" ) module at all.
temperature_control.vac_n2.sensor                 ad8495           #
temperature_control.vac_n2.ad8495_pin             0.24             # Pin for the thermistor to read
temperature_control.vac_n2.ad8495_offset          0                #
temperature_control.vac_n2.heater_pin             nc               # Pin to controls the heater, nc if a read only thermistor.
temperature_control.vac_n2.readings_per_second    500              # How many times per second to read temperature from the sensor.
temperature_control.vac_n2.get_m_code             105              # Calling this M-code will return the current temperature.
temperature_control.vac_n2.designator             VAC              # Designator letter for this module
temperature_control.vac_n2.rt_curve               20.0,220,120,6000,220,120000
```

### Wiring Vacuum Sensors

Connect your vacuum sensor to one of the thermistor inputs on the Smoothieboard (T0-T3).

In the example above:
- Left nozzle sensor connects to T0 (pin 0.23)
- Right nozzle sensor connects to T1 (pin 0.24)

You can then read the vacuum level using the configured M-codes (M104 for left nozzle, M105 for right nozzle in this example).

## Vacuum Solenoid Control

To control vacuum solenoids that turn vacuum on and off to each nozzle, you can use the [Switch](switch) module.

Here's an example configuration for controlling vacuum solenoids:

```plaintext
# Left nozzle vacuum solenoid
switch.vacuum_left.enable                        true             #
switch.vacuum_left.input_on_command              M42              # M42 with S parameter to control
switch.vacuum_left.input_off_command             M43              # Or use M42 S0
switch.vacuum_left.output_pin                    2.4              # Small mosfet output pin
switch.vacuum_left.output_type                   digital          # Digital on/off control

# Right nozzle vacuum solenoid
switch.vacuum_right.enable                       true             #
switch.vacuum_right.input_on_command             M44              #
switch.vacuum_right.input_off_command            M45              #
switch.vacuum_right.output_pin                   2.5              # Small mosfet output pin
switch.vacuum_right.output_type                  digital          #
```

Wire your solenoid valve to one of the small mosfet outputs on the Smoothieboard. Make sure to respect polarity and add a protection diode if not already present on newer boards.

## Nozzle Height Control with Servos

On some Pick and Place machines, the nozzle head (Z axis) is controlled by a hobby servo motor rather than a stepper motor.

By default in Smoothie, hobby servos are controlled via the [Switch](switch) module using M-codes such as `M280`.

This works, but that's not how you usually address a Z axis.

### Using Servos as Axes

If you want extra convenience by being able to talk to your hobby servo as if it was a Z axis (which means you will also be able to use it in places like homing or probing the way you typically use a Z axis), then you can use this special branch of Smoothie that implements this feature:

* [Slave Switch](https://github.com/Smoothieware/Smoothieware/tree/feature/slaveswitch)

Once you compile this branch, you will be able to use your hobby servo as a Z axis (and other such switch <-> axis associations).

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Note:</strong> This feature is not documented extensively yet, but the configuration is straightforward to extract from the source code. If you have trouble figuring it out, the community can help you easily—just ask!
</sl-alert>
{:/nomarkdown}

### Standard Servo Control

For standard servo control using M-codes, configure as follows:

```plaintext
# Servo control for nozzle Z axis
switch.servo_z.enable                            true             #
switch.servo_z.input_on_command                  M280             # Standard servo control command
switch.servo_z.output_pin                        2.5              # Servo signal pin
switch.servo_z.output_type                       hwpwm            # Hardware PWM for servo
switch.servo_z.pwm_period_ms                     20               # 20ms period for standard servos
```

Use `M280 S90` to set the servo to 90 degrees, for example.

## Multiple Nozzles

If your Pick and Place machine has multiple nozzles, you'll need to configure:
- Multiple vacuum sensors (one per nozzle)
- Multiple vacuum solenoids (one per nozzle)
- Possibly multiple Z axes or a nozzle changer mechanism

Use the Switch module's ability to create multiple named instances to control each nozzle independently.

## Testing Your Pick and Place Tools

Once configured, test your vacuum system:

1. **Test vacuum sensors**: Use the configured M-codes to read vacuum levels with and without a component on the nozzle
2. **Test solenoids**: Turn vacuum on and off using the configured commands
3. **Test servos**: Move servos through their full range of motion
4. **Test pick operation**: Attempt to pick up a component and verify the vacuum sensor detects it
5. **Test place operation**: Place a component and verify vacuum releases properly

Always test carefully with low-value components first before running production jobs.

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Safety Note:</strong> Pick and Place machines move quickly and with precision. Always ensure your machine is properly calibrated and tested before running production jobs. A misconfigured machine can damage expensive components or the PCB.
</sl-alert>
{:/nomarkdown}
