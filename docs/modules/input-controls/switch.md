---
permalink: /switch
---


# Switch module

The Switch module takes care of basic input from things like buttons and switches and controls simple devices like fans and pumps.

It is an incredibly versatile tool that allows you to setup a lot of on-off type systems. It listens to input pins and outputs custom G/M-codes or accepts custom G/M-codes and set outputs to GPIO pins.

This allows you to do one of the following:
- Make a G-code control an output GPIO pin
- Make a GPIO input pin cause a G/M-code to be executed
- Make a GPIO pin control another GPIO pin (this may not work anymore)

You can create several different switch modules to fit your needs, within the same configuration file.

If you come from the industry, the Switch module is Smoothie's implementation of a [Programmable Logic Controller](https://en.wikipedia.org/wiki/Programmable_logic_controller) feature.

## Configuration

Like [TemperatureControl](temperature-control), there can be multiple Switch modules. All you need to do is give each module its own name in the config file.

```markdown
switch.fan1.enable                        false
switch.fan1.output_pin                    2.7
etc ...

switch.fan2.enable                        false
switch.fan2.output_pin                    2.6
etc ...

switch.zplus10.enable                     true
switch.zplus10.input_pin                  1.7
switch.zplus10.output_on_command          G91G0Z10G90      # G90 and G91 switch to relative positioning then back to absolute

etc ...
```

### All options

| Option | Example value | Explanation |
| ------ | ------------- | ----------- |
{% include modules/input-controls/switch-options.md %}

### Startup State

The initial internal state of the switch at boot is set by the <setting v1="switch.{name}.startup_state" v2="switch.{name}.startup_state"></setting> setting, which should be set to "true" or "false".

Also remember that individual pins can be inverted with a `!` ( see [Pin Configuration](/pin-configuration) ). Default is false.

There is also a <setting v1="switch.{name}.startup_value" v2="switch.{name}.startup_value"></setting> setting that sets the default analog value used for pwm on an output pin. This value defaults to always on.

```markdown
switch.fan1.startup_state                 false
switch.fan1.startup_value                 127
```

### Input and Output Pins
**NOTE** a switch can have either an input pin defined or an output pin but not both.
If for some reason you needed an input pin to control one or more output pins you could define two (or more) switches, one input and one or more outputs. Then the input pin would define the M-codes that turn on/off the output pins in its output_on_command (and/or its output_off_command).

### Input Pin

This setting will enable a pin that can be used to change the state of the switch. For example, a button can be configured that toggles the state of a fan. By default input_pin is set to "nc" which stands for "not connected". 

There is also a behavior setting for the input pin. Currently the valid options are `momentary` (default) and `toggle`. 

The `toggle` behavior allows a momentary button to behave like an on-off toggle switch. If you are connecting a physical toggle switch you would probably want the behavior set to `momentary`.

```markdown
switch.fan1.input_pin                     1.7!
switch.fan1.input_pin_behavior            toggle
```

### Output Pin

Set this config value to drive an output pin based on the internal state of the Switch module. Remember that the pin can always be inverted with a `!` ( see [Pin Configuration](/pin-configuration) ).

```markdown
switch.fan1.output_pin                    2.7
switch.fan1.output_type                  pwm             # pwm output settable with S parameter on the on command
switch.fan1.max_pwm                     255               # sets the max pwm for this pin
```

To set an output pin to be non-pwm so it just turns on or off set output_type digital

```markdown
switch.psu.output_type                    digital           # just on or off
switch.psu.output_pin                      1.30o!          # set to open drain, inverted to control an ATX PSON signal
```

### Output type

There are four different output types: `digital`, `pwm`, `swpwm` and `hwpwm`, the default is `pwm` so a PWM output pin is configured by default.
(The names MUST be lower case)

Note that `pwm` is actually SigmaDelta Modulation and will allow you to set PWM intensity via the `S` parameter to your G-codes, values between 0 and `max_pwm` are accepted, which is usually 255.

`hwpwm` is PWM controlled by the Hardware, and is PWM compatible with Hobby servos/bltouch and ESCs. The `S` parameter specifies the duty cycle in percent, and for a typical servo will be between 5% and 10% (1ms to 2ms when running at 50Hz) for a 180° turn. the default frequency is 50Hz but can be set with the `pwm_period_ms` config setting.

`swpwm` is PWM emulated by the software, and is PWM compatible with Hobby servos/bltouch and ESCs. And is otherwise similar to hwpwm. This is useful if your hwpwm clock must be set to a very high value for example for the laser module, as this would mean a hwpwm switch would need to have the same high value which can be incompatible with some hardware. Having a lower frequency swpwm allows for both the laser module and servos/bltouch control.

### Commands and Gcodes

There are also a set of config settings that allow the Switch module to both generate and react to Gcodes as necessary. The `input_on_command` is also able to read an S parameter to set an analog value for pwm over the output pin. This allows things like driving a fan at less than full speed or dimming an led.

```markdown
switch.fan1.input_on_command              M106     # any command that starts with this exact string turns this switch on
switch.fan1.input_off_command             M107     # any command starting with this exact string turns off the switch
```

In addition to `input_on_command` and `input_off_command` there are also corresponding config settings `output_on_command` and `output_off_command`. Offhand, it seems unlikely that a single switch module would need to use both input_ and output_ commands.

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  If you want to learn more about this module, or are curious how it works, Smoothie is Open-Source and you can simply go look at the code, <a href="https://github.com/Smoothieware/Smoothieware/blob/edge/src/modules/tools/switch/Switch.cpp">here</a>.
</sl-alert>
{:/nomarkdown}

## Examples

### Fan

This configuration will allow you to control a fan using the standard reprap G-codes for controlling a fan

This is already present in the default configuration file

```markdown
# Switch module for fan control
switch.fan.enable                            true             # Enable this module
switch.fan.input_on_command                  M106             # This switch is turned on when M106 is sent
switch.fan.input_off_command                 M107             # This switch is turned off when M107 is sent
switch.fan.output_pin                        2.6              # This pin is turned on when this switch is turned on, and vice-versa
switch.fan.output_type                       pwm              # PWM output settable with S parameter in the input_on_comand
#switch.fan.max_pwm                          255              # Set max PWM for the pin default is 255
```

### Hobby Servo

This configuration will allow you to control a servo using the standard reprap G-codes for controlling a servo.

`M280 S5` would be fully to the left and `M280 S10` would be fully to the right.

```markdown
# Switch module for servo control using S/W PWM
switch.servo.enable                            true             # Enable this module
switch.servo.input_on_command                  M280             # M280 S7.5 would be midway
switch.servo.input_off_command                 M281             # Same as M280 S0 0% duty cycle, effectively off
switch.servo.output_pin                        3.25             # May be any spare pin
switch.servo.output_type                       swpwm            # Software pwm output settable with S parameter in the input_on_command
#switch.servo.pwm_period_ms                    20               # set period to 20ms (50Hz) default is 50Hz
#switch.servo.startup_state                    false            # false uses startup_value on boot true uses default_on_value
#switch.servo.startup_value                    7.43             # On boot and HALT it will set this PWM value
#switch.servo.default_on_value                 3.3              # This PWM value will be set if M280 doe snot have an S parameter, it is also the value used if startup_state is true
```

```markdown
# Switch module for a second servo control using H/W PWM
switch.servo2.enable                            true             # Enable this module
switch.servo2.input_on_command                  M280             # M280.1 S7.5 would be midway
switch.servo2.input_off_command                 M281             # Same as M280.1 S0 0% duty cycle, effectively off
switch.servo2.subcode                           1                # M280.1 will trigger this switch
switch.servo2.output_pin                        3.26             # Must be a PWM capable pin
switch.servo2.output_type                       hwpwm            # H/W pwm output settable with S parameter in the input_on_command
```

To find a PWM-capable pins, see [Pinout](pinout)

### Power supply control

{% include hardware/power/power-supply-control-for-include.md %}

### Pause when out of filament

This configuration allows you to use a pin to detect when the machine is out of filament. When the switch is hit by the filament not being present, the machine is put into pause. 

Another switch is configured to allow you to resume the machine once the button is pressed.

Additional configuration allows you to specify commands that are executed when the machine suspends, and when it resumes.

```markdown
switch.filamentout.enable                true                     # Enable this module
switch.filamentout.input_pin             1.30^                    # Pin where filament out button is connected
switch.filamentout.output_on_command     suspend                  # Suspend command

switch.resume.enable                     true                     # Enable this module
switch.resume.input_pin                  1.31^                    # Pin where resume button is connected
switch.resume.output_on_command          resume                   # Resume command

after_suspend_gcode                      G91_G0E-5_G0Z10_G90_G0X-50Y-50        # Gcode to run after suspend, retract then get head out of way
before_resume_gcode                      G91_G1E1_G90                          # Gcode to run after temp is reached but before resume - do a prime
```

Note, there is a real filament detector module which works much better than this, see [filament-detector](/filament-detector).

### Suspend and resume buttons

This configuration allows you to set a suspend button, and a resume button.

```markdown
switch.suspend.enable                true                     # Enable this module
switch.suspend.input_pin             1.30^                    # Pin where pause button is connected
switch.suspend.output_on_command     suspend                  # Suspend command

switch.resume.enable                 true                     # Enable this module
switch.resume.input_pin              1.31^                    # Pin where resume button is connected
switch.resume.output_on_command      resume                   # Resume command

after_suspend_gcode                  G91_G0E-5_G0Z10_G90_G0X-50Y-50        # Gcode to run after suspend, retract then get head out of way
before_resume_gcode                  G91_G1E1_G90                          # Gcode to run after temp is reached but before resume - do a prime
```

{% include troubleshooting/stopping-smoothie-for-include.md %}

### Suspend/resume single button

This configuration allows you to set a single button to both pause and resume the machine

```markdown
switch.pause.enable                true                     # Enable this module
switch.pause.input_pin             1.30^                    # Pin where pause button is connected
switch.pause.output_on_command     suspend                  # Suspend command
switch.pause.output_off_command    resume                   # Resume command
switch.pause.input_pin_behavior    toggle                   # This pin toggles between it's on and off states each time it is pressed and released

after_suspend_gcode                  G91_G0E-5_G0Z10_G90_G0X-50Y-50        # Gcode to run after suspend, retract then get head out of way
before_resume_gcode                  G91_G1E1_G90                          # Gcode to run after temp is reached but before resume - do a prime
```

### Spindle control button

This configuration allows you to set a single button to start and stop your [spindle](spindle-module).

```markdown
switch.spindle.enable                true                     # Enable this module
switch.spindle.input_pin             1.30^                    # Pin where pause button is connected
switch.spindle.output_on_command     M3                       # Command to turn the spindle ON eg M3 S1000  
switch.spindle.output_off_command    M5                       # Command to turn the spindle OFF
switch.spindle.input_pin_behavior    toggle                   # This pin toggles between it's on and off states each time it is pressed and released
```

### Laser power supply

For the enable ( TTL ) pin on a CO2 laser PSU, for power control use the [Laser](laser) module.

```markdown
# Switch module for laser TTL control
switch.laser.enable                            true             # Enable this module
switch.laser.input_on_command                  M106             # Turn ON when M106 is sent
switch.laser.input_off_command                 M107             # Turn OFF when M107 is sent
switch.laser.output_pin                        1.31             # Pin to control, to be connected to the laser power supply's TTL input
```

Note this is now supported by the [laser module](laser) itself, where the pin is automatically toggled, using the `laser_module_ttl_pin` configuration option.

However, if you are not using that functionality, this allows you to turn the laser power supply using G-codes.

### Setting up a reset button

Smoothie has a reset button, and you can wire an external button to that ( see [Pinout](pinout) ).

However, maybe you have an existing [Panel](panel), which has a button on it, and you want to turn that into a reset button.

If that's the case, you can setup a switch module to read whatever pin you wired that button to, and make it trigger the `reset` command whenever it is pressed, like this:

```markdown
switch.reset.enable                true                     # Enable this module
switch.reset.input_pin             1.30^                    # Pin where reset button is connected
switch.reset.output_on_command     reset                    # Command to reset the board
```

### Homing a multi-motor axis.

Let's say your machine has a Y or Z axis that has not one, but two or more stepper motors.

If each of those has a separate stepper motor driver, and a separate endstop at the end, you can do something neat: multi-stage homing for auto-levelling/axis alignment.

The way this is accomplished is fairly simple:

- Set up switch modules to control the enable pin of each motor
- Enable and home each axis in turn

Here is how you would set up switch modules for two stepper motor drivers:

```markdown
# Switch module for first Z stepper motor driver
switch.z-1.enable                            true             # Enable this module
switch.z-1.input_on_command                  M1001            # Turn ON 
switch.z-1.input_off_command                 M1011            # Turn OFF 
switch.z-1.output_pin                        1.31             # Pin to control enable pin of driver

# Switch module for second Z stepper motor driver
switch.z-2.enable                            true             # Enable this module
switch.z-2.input_on_command                  M1002            # Turn ON 
switch.z-2.input_off_command                 M1012            # Turn OFF 
switch.z-2.output_pin                        1.30             # Pin to control enable pin of driver
```

For wiring, simply wire pin 1.31 to the enable pin of the first stepper driver and pin 1.30 to the enable pin of the second stepper driver. 

Wiring the same way you'd wire step and direction signals in the [external|drivers documentation](/general-appendixes#external-drivers). ( note that if you will be using Open-Drain wiring, you need to add "o!" to your pin numbers, same as for step and dir ).

You also need to wire the endstops so that a trigger is detected when *either* is triggered. This means if your endstops are wired as NC, you wire them in series, and if they are wiride as NO, you wire them in parralel.

And of course, both step and dir pins for the two stepper drivers must be wired in parralel to the same pins on the Smoothieboard.

Finally, when homing, you can't simply issue G28, you have to issue a series of commands, which you can put at the beginning of your gcode files, or in your on_boot.gcode file ( which will be executed at boot time ).

Here is an example:

```markdown
M1001        ; Activate both stepper drivers
M1002        ; Same
G1 Z10       ; Go up to make sure no endstop is hit
G28 Z0       ; Home the Z axis ( two motors together ) until one of the two endstops is hit
M1012        ; Desactivate the second stepper driver so we can home only the first one
G28 Z0       ; Home the first stepper motor/driver alone. First Z is now level
M1002        ; Re-activate second stepper driver so we can home only the second one
M1011        ; Desactivate the first stepper driver
G28 Z0       ; Home the second stepper motor driver. Second Z is now level.
M1001        ; Re-activate the first stepper driver, both stepper drivers are now active
             ; Z is now level relative to it's two endstops, and can be used normally as if it were a single axis.
```

Note if both your endstops are wired in parralel, you'll need to retract off one endstop before you can use the next one. As long as you retract by the same length for each endstop you'll be fine.

#### Alternative wiring

Note that with the first wiring, we rely on the enable pin to make sure that the drivers ignore step-dir instructions when we want to home the other axis.

However on some drivers, this will also turn off power to the motors