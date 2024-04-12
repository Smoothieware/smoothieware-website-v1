
# Basics

The Spindle is the main effector on your CNC Mill/Router. It holds the end mill or drill bit, makes it turn and remove material.

While manual control is sometimes fine (turn it on before starting your G-code, off when you are done), it is so much neater to have G-codes to control it automatically: simply put an ON G-code at the beginning of your G-code file, and an off G-code at the end of your G-code file, and you don't have to think about it anymore.

The spindle module supports different types of spindles which are described in the following subsections.

> [!NOTE]
> **NOTE** the spindle module is NOT compiled into the normal smoothie build, you need to use the CNC build.

## General

The spindle module has an option which lets you enable or disable the entire module:

```markdown
spindle.enable                                   true   # set this to false to disable the spindle module
```

## G-code

Available G-code commands:
- `M3` will start the spindle. `M3 S5000` will start the spindle and set speed to 5000 RPM.
- `M5` will stop the spindle. Last set RPM is remembered and used for next `M3` command if S argument is not given.
- `M957` will report the current spindle speed and PWM value. This returns not the actual value but the value that was set through M3.
- `M958` will report the current PID parameters. `M958 Px.xxx Ix.xxx Dx.xxx` will set them (to save the new values, you need to edit config file manually).

## PWM Spindle

> [!NOTE]
> The PWM spindle is generic for all spindles that use a direct PWM signal to control the spindle speed directly with a MOSFet.
> It needs a feedback sensor to adjust the speed using a PID control.

### Example config options

```markdown
spindle.type                                 pwm               # sets the spindle module to PWM mode
spindle.pwm_pin                              2.5               # Big Mosfet Q7. Pin must be hardware PWM capable.
spindle.pwm_period                           1000              # default 1000, sets the PWM frequency
spindle.feedback_pin                         2.7               # Pin must be interrupt capable. 
spindle.pulses_per_rev                       1.0               # default 1. Defines the number of pulses occur for each rotation 
spindle.default_rpm                          5000              # default 5000. Defines a default RPM value in case no RPM value is provided.
spindle.control_P                            0.1               # default 0.0001. P value for the PID controller              
spindle.control_I                            0.1               # default 0.0001. I value for the PID controller
spindle.control_D                            0.1               # default 0.0001. D value for the PID controller
spindle.control_smoothing                    0.1               # default 0.1. This value is low pass filter time constant in seconds.
```

> [!NOTE]
> Check the [pinout](http://smoothieware.org/pinout) to verify if a pin is capable for a certain functionality!

> [!TIP]
> **Hobby servo ESC as spindle control**
> Since I'm experimenting with hobby ESC+motor combos (1:8 scale 3 phase 4068 like motor) I wanted to share its config. ESCs act like hobby servos - 20 ms period time, 1.5-2ms duty cycle time -, so instead of having modified the spindle code, I've created a switch for commands M3/M5. Due to the very small duty cycle window, you won't have much control over the motor: S7.5 is neutral, S12.5 is "fastest" after calibrating the ESC manually with bCNC (read ESC's manual; below S7.5 is breaking for now).
>
> The following code is working, setting neutral upon boot - ESC init.
> ```markdown
> switch.servo.enable                          true             # Servo module for PWM control
> switch.servo.input_on_command                M3
> switch.servo.input_off_command               M5
> switch.servo.output_pin                      1.23o!             # spare pin with PWM capability, 3.25 should also work from EXP2, maybe needed to set it to 1.23o!
> switch.servo.output_type                     hwpwm
> #switch.servo.pwm_period_ms                  20                #set PWM period to 20ms (50 Hz)
> switch.servo.startup_state                   true                # turn on the output to have neutral for ESC
> switch.servo.startup_value                   7.5               # this is default_off_value
> switch.servo.default_on_value                7.5
> switch.servo.failsafe_set_to                 0
> ```

> [!NOTE]
> If you want to learn more about this module, or are curious how it works, Smoothie is Open-Source and you can simply go look at the code, [here](https://github.com/Smoothieware/Smoothieware/blob/edge/src/modules/tools/spindle/PWMSpindleControl.cpp).

## Analog Spindle

This module is used to control a [VFD](http://en.wikipedia.org/wiki/Variable-frequency_drive) with a PWM that is converted to a 0-10V analog signal by an additional circuit. That circuit also provides an optocoupler for switching the VFD RUN signal. It is also the mode of choice if you run a brushless motor spindle driven by an [ESC](https://en.wikipedia.org/wiki/Electronic_speed_control), in that case, you will not need any additional circuitry.

> [!NOTE]
> The analog spindle is generic for all VFD's that use a 0-10V speed reference signal, so it doesn't need a special implementation for a certain VFD.
> The downside is that the signal is not completely linear and may be interfered with by noise.
> If you can use a VFD that supports Modbus/RS485, it's highly recommended to use that technique!

### Example config options

```markdown
spindle.type                                     analog   # set the spindle type to analog, can also be used for ESC spindles controlled by a PWM
spindle.max_rpm                                  24000    # set the max spindle speed that is achieved at 100% PWM
spindle.pwm_pin                                  2.4      # the pin which emits the PWM signal
spindle.pwm_period                               1000     # the PWM frequency
spindle.switch_on_pin                            2.6      # the pin which is used to enable the VFD (optional)
```

### PWM to analog converter circuit

> [!NOTE]
> If you're using a brushless motor + ESC that takes the PWM directly as a speed reference, you don't need an additional circuit.

![VFD adapter board](/images/spindle-module/analog-vfd-board-pcb.png)
*VFD adapter board PCB*
Used to talk to your VFD via an analog signal

This is an example of a small extension PCB that contains a circuit to convert the 3.3V PWM signal into a 0-10V analog signal.

![VFD adapter board schematic](/images/spindle-module/analog-vfd-board-schematic.png)
*VFD adapter board schematic*
For the curious

This is the related circuit diagram for the converter

![VFD adapter board wiring](/images/spindle-module/analogwiring.png)
*VFD adapter board wiring*
How to connect it to your Smoothieboard and VFD

This example shows how to wire the Smoothieboard to a Huanyang VFD using the PCB shown above.

> [!WARNING]
> Unfortunately, the circuit does not create a completely linear output signal. As you can see in the graph, the signal is better at the beginning and at the end.

> [!NOTE]
> If you want to learn more about this module, or are curious how it works, Smoothie is Open-Source and you can simply go look at the code, [here](https://github.com/Smoothieware/Smoothieware/blob/edge/src/modules/tools/spindle/AnalogSpindleControl.cpp).

## Modbus Spindle

This module is used to control a [VFD](http://en.wikipedia.org/wiki/Variable-frequency_drive) using an [RS485](http://en.wikipedia.org/wiki/RS-485) communication bus.
It provides a Modbus implementation and is easily extendable to support a wide range of [Modbus](http://en.wikipedia.org/wiki/Modbus) compliant VFDs.
But it also can support VFDs that are not compliant with the Modbus standard such as the widely used [Huanyang VFD](http://www.hy-electrical.com/productshow_e.asp?id=12) that is popular and cheap on eBay.

> [!NOTE]
> The modbus spindle needs a separate implementation for every VFD model. At the time of writing only the Huanyang is implemented, but it is very easy to extend the module for many other models.

### Example config options

```markdown
spindle.type                                     modbus   # set the spindle type to modbus/RS485
spindle.vfd_type                                 huanyang # set the VFD type, this is necessary because each inverter uses its own commands
spindle.rx_pin                                   2.6      # TX pin for the soft serial
spindle.tx_pin                                   2.4      # RX pin for the soft serial
spindle.dir_pin                                  2.5      # RS485 is only half-duplex, so we need a pin to switch between sending and receiving 
```

### Huanyang VFD Modbus Parameters

In order to get the Huanyang VFD accepting commands via ModBus, you need to change a few parameters:

> [!NOTE]
> - PD001: 2 (Source of run commands: communication port)
> - PD002: 2 (Source of operating frequency: communication port)
> - PD163: 1 (Communication address: 1)
> - PD164: 1 (Communication Baud Rate: 9600)
> - PD165: 3 (Communication Data Method: 8N1 RTU)

### RS485 extension board
Like an analog spindle, the Modbus spindle needs an external circuit, but that is much simpler.

![VFD Modbus signal adapter PCB](/images/spindle-module/modbus-vfd-board-pcb.png)
*VFD Modbus signal adapter PCB*
Used to talk to your spindle over RS485 differential signals

This is an example of a small extension PCB that contains a circuit to convert the 3.3V UART signal into an RS485 signal.

![VFD Modbus signal adapter schematic](/images/spindle-module/modbus-vfd-board-schematic.png)
*VFD Modbus signal adapter schematic*
For the curious

This is the related circuit diagram for the converter

![VFD Modbus wiring](/images/spindle-module/rs485wiring.png)
*VFD Modbus wiring*
How to connect it to the Smoothieboard and the VFD

This example shows how to wire the Smoothieboard to a Huanyang VFD using the PCB shown above.

> [!NOTE]
> If you want to learn more about this module, or are curious how it works, Smoothie is Open-Source and you can simply go look at the code, [here](https://github.com/Smoothieware/Smoothieware/blob/edge/src/modules/tools/spindle/ModbusSpindleControl.cpp).
