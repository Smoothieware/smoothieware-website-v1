
<img src='/images/external/http.img.alibaba.com.img.pb.960.762.268.1285495147301.hz.cnmyalibaba.web4.68831.jpg' width='430px'><br/>
They use very high voltages and are dangerous

# Laser control

The Laser module is the part of Smoothie that allows you to control laser cutters. 

In general, laser cutters use a CO2 tube to generate the laser beam used for cutting and engraving. 

Those tubes contain CO2 gas, and a high-voltage Power Supply Unit is used to pass electricity through the gas, generating the beam.

Using G-code, you tell Smoothie where to move and when to cut. Smoothie moves the motors, and the Laser module talks to the laser power supply to tell it when to turn off and on, and using how much power.

---

> [!DANGER]
> **Be very careful** with the laser tube side of your Power Supply: voltages there are commonly around 40,000 volts, making it very dangerous. 
> 
> If you are not qualified to handle this kind of voltage, please contact a professional. 
> 
> **Always** make sure everything is powered down before manipulating anything.

> [!SUCCESS]
> For laser cutters, you will get some extra features (in particular nice laser-specific screen information on panels) if you use the "cnc" version of the firmware. 
> Though the normal (edge) version will work fine.
> See [flashing the firmware](http://smoothieware.org/flashing-smoothie-firmware.md) and choose the file called `firmware-cnc.bin`.

## Wiring

In order to control the power of the laser tube, the laser PSU reads a PWM signal as its input.

Please look at the datasheet for your PSU to know which connection that signal is wired to.

From the Smoothieboard, you need to connect: 

* One GND pin to the Ground connection on the PSU
* One of Smoothie's PWM pins to the PWM input on the PSU

Both Ground pins are easy to find, and the PSU input you find in the manual/datasheet, now all you need is to find a PWM pin on the Smoothieboard.

There are 6 of them, but 4 of them are used for the step pins for stepper motor drivers.

Those for alpha and beta you won't be able to use as you use those drivers to control the X and Y axes.

Depending on whether you have a Z axis, your gamma axis step pin could be used. It is labelled ST3, on the JP12 header, near the M3 stepper motor driver.

You probably do not use your delta (M4) stepper motor driver on a laser cutter, so that pin can also be used, it is labelled ST4 on the JP15 header near the M4 stepper motor driver.

The other two are found near the microcontroller and the MOSFETS, on the JP33 header, and are labelled PWM0 and PWM1.

Choose which you will use, all have a GND header close-by (all are unlabelled) to make it convenient for wiring.

Now you need to find which GPIO pin/port number corresponds to the PWM pin you chose, so you can tell Smoothie which you'll be using in the configuration file.

| Pin number for configuration | Label on the board | Comment |
| ---------------------------- | ------------------ | ------- |
| 2.2                          | STP3               | Only if you are not using a Z axis/the gamma driver. Make sure you set gamma_step_pin to the "nc" value. The unlabelled pin in JP12 is GND. |
| 2.3                          | STP4               | Only if you are not using the delta driver. Make sure you set delta_step_pin to the "nc" value. The unlabelled pin in JP15 is GND. |
| 2.4                          | PWM0               | Only if you are not using the first small MOSFET (X8). All pins of JP10 are GND. |
| 2.5                          | PWM1               | Only if you are not using the second big MOSFET (X15). All pins of JP10 are GND. |

Now that the PSU is wired to the Smoothieboard and that you know which pin you are using for control, you can change the configuration file to setup laser control

## Configuration

You now need to edit the "config" file on the SD card (the default configuration file already contains example laser lines so you may only need to edit/enable those) to add or setup the laser part as follows: 

```markdown
# Laser module configuration
laser_module_enable                          true             # Whether to activate the laser module at all. All configuration is 
                                                              # ignored if false.
laser_module_pwm_pin                         2.5              # this pin will be PWMed to control the laser. Only P2.0 - P2.5 
                                                              # can be used since laser requires hardware PWM
#laser_module_maximum_power                  0.8              # this is the maximum duty cycle that will be applied to the laser
#laser_module_minimum_power                  0.0              # this duty cycle will be used for travel moves to keep the laser 
                                                              # active without actually burning
#laser_module_pwm_period                     20               # this sets the pwm frequency as the period in microseconds
```

If needed, replace the 2.5 value for laser_module_pwm_pin with the pin you chose in the wiring section.

Save the file, reset the board, you are now ready for laser testing.

### All options

{% include_relative laser-options.md %}

## Example setup

Exactly how to wire your Smoothieboard to control your laser power supply is going to depend on the PSU itself, so we highly recommend you read the documentation for yours.

This is an example that should be the most common case, which you are most likely to encounter: the Chinese power supply with "H L P G IN 5V" connections. In this example a RECI power supply but this should apply to most Chinese power supplies.

The basic idea is this: pin 1.23 (hardware PWM-capable) is configured as open-drain and inverted (1.23o!), then connected to the L (Low) TTL input on the power supply. Ground from the Smoothieboard is connected to ground on the Power Supply.

The rest is specific to the supply: P is connected to G through the door switch and water protect circuits, this ensures that if the door is opened or the water chiller turns off, the laser is turned off. Finally, IN is connected to 5V, setting the laser power at full (but it can still be modulated by Smoothie's PWM). 

Here you could in theory replace the jumper by a potentiometer, allowing you to manually adjust the maximum laser power.

The wiring looks like this:

<img src='/images/smoothieboard-graphics/schematics/laser-power-supply-l.svg.png' width='100%'><br/>

You then also need to configure the laser module accordingly:

```markdown
# Laser module configuration
laser_module_enable                          true             # Whether to activate the laser module at all. All configuration is 
                                                              # ignored if false.
laser_module_pwm_pin                         1.23o!           # this pin will be PWMed to control the laser. Only P2.0 - P2.5 
                                                              # can be used since laser requires hardware PWM
```

### Note on K40

The wiring above probably won't work on a K40, which are fairly weird machines (cheap comes at a cost).

For K40, see the several build logs linked to at the top of this page. In particular, you'll likely need to increase the pwm frequency, and wiring might need to be different depending on your model.

## Testing

> [!DANGER]
> Make sure your laser cutter enclosure is closed and that everything is safe.
> 
> Wear laser protection googles, even if the machine is properly closed.
> 
> Make sure your machine has a proper enclosure, and a switch on the door that turns it off when the door is opened.
> 
> Do not do anything until this is properly setup.
> 
> Lasers can make you blind. And bionic eyes are not there just yet.

Here is how Smoothie laser control works: G0 and G1 are exactly the same command, they take positional parameters (X10 Y5 Z3 for example) and move the tool to that position.

The only difference is that when using G0 the laser stays off, and when using G1 the laser is on, only during movement.

To test, try moving your laser with G0 and try moving it with G1:

```markdown
G0 X10 F300
G1 X20 F300
```

You can set the power for the laser by using the `S` parameter. Values go from 0 (0%) to 1 (100%).

For example:

```markdown
G1 X10 F300 S0.2
```

## Supported G-codes

The following G-codes are supported by the Laser module:

* `G0`: Move without activating the laser
* `G1`/`G2`/`G3`: Move with the laser activated
* `S`: The S parameter sets the current power of the laser, when it is activated, from 0 (0%) to 1 (100%).
* `M221 Snnn` globally scales the laser power provided by G1 by nnn percent. So M221 S75 will scale the laser power to 75%.
* `M221 Rxxx`: Set the PWM frequency to xxx Hz (Hertz). This specifies frequency, and **not** period, be aware and careful.
* `M221 P1`: Temporarily disable proportional laser power (as per the `laser_module_proportional_power` configuration option, see its description for more details). This is **not** saved by the M500 command.

## Supported commands

The following commands are available for testing (prepend @ in pronterface or M1000 in other hosts)

* `fire nnn` where nnn is 0-100 percentage of power (example fire 10 will turn on laser at 10%)
* `fire off` turn off the test fire and return to automatic mode.

> [!NOTE]
> If you want to learn more about this module, or are curious how it works, Smoothie is Open-Source and you can simply go look at the code, [here](https://github.com/Smoothieware/Smoothieware/blob/edge/src/modules/tools/laser/Laser.cpp).
