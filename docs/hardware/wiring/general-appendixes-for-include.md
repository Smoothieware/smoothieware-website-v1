
{% include modules/player/printing-from-sd-card-for-include.md %}

## Wiring
<a name='wiring'></a>

How well your machine is wired is going to determine how long it lives and how resistant it is to breakage.

We have a great guide on different techniques and recommendations, please read the [how to wire page](how-to-wire).

## Crimping connectors
<a name='crimping-connectors'></a>

If your Smoothieboard came with connectors, you got connector casings, and [crimps](http://en.wikipedia.org/wiki/Crimp_connection).

You will need to attach your crimps to your cables, and then insert the crimps into the connector casings.

[This tutorial](http://sparks.gogo.co.nz/crimping/index.html) is a good read about crimping properly.

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Please be careful and patient, if you have never done it before you will probably fail a few times before getting the hang of it. Also be careful to insert the crimp into your connector the right way around.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <iframe width="100%" height="400px" src="https://www.youtube.com/embed/L8Mfvv1PqpY" frameborder="0" allowfullscreen></iframe>
</div>
{:/nomarkdown}

## Soldering connectors
<a name='soldering-connectors'></a>

Please read [this comic](http://mightyohm.com/files/soldercomic/FullSolderComic_EN.pdf) before soldering anything.

## Using two steppers motor on a single driver
<a name='doubling-steppers'></a>

Stepper motor drivers on Smoothieboard can handle up to 2Amps per driver.

If you want to control two separate motors with a single driver ( for example you have two stepper motors for your Y axis like on a [Shapeoko](http://www.shapeoko.com/), or two stepper motors for your Z axis like on a [Reprap Prusa i3](http://reprap.org/wiki/Prusa_i3) ) and have both motors move simultaneously, you have two options.

If the total of the current used by your motors is more than 2Amps ( for example two 1.5Amps motors are 3Amps ), you can not wire them together on a single driver, and you need to look at [doubling drivers just below](#doubling-drivers).

However, if your total current is less than 2Amps, you can wire both motors in parallel to a single driver.

To do so, find for each stepper motor, which wires match which coils, and wire the same coils into the stepper motor connections on the Smoothieboard ( two wires per connection, one from each motor, for each pin ).

If when you test it, the two motors turn in reverse, you need to reverse one of the coils of one of the stepper motors, and they will start turning in the same direction.

You also need to set a current value for that driver that matches the total current your two motors will be using. For example if the motors are each 0.8Amps, your total is 1.6Amps and you need to set for that specific driver ( here gamma driver is shown ) :

```
gamma_current      1.6
```

## Doubling stepper motor drivers
<a name='doubling-drivers'></a>

If you need to drive two motors with a single axis, but the total current used for the motors is more than 2Amps ( for example two 1.5Amps motors add up to 3Amps ), you can not wire the steppers in parallel to a single driver and have it control both motors at the same time like described [above](#doubling-steppers).

This is the case for example for the Y axis of [Shapeoko](http://www.shapeoko.com) machines.

In this case, you will need to use one driver for each of your motors. This means you need a Smoothieboard with one more stepper motor driver than you have axes. If you have 3 axes and need to double one, you will need a 4X or a 5X Smoothieboard.

To enslave a driver to another, you will need to connect the control pins for both drivers together.

For example if you want the epsilon ( M5 ) driver to be the slave to the gamma ( M3 ) driver you will need to connect:

- EN3 to EN5
- ST3 to ST5
- DIR3 to DIR5

The connectors for this can be found close to the stepper motor drivers, and are labelled.

{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/b0dCM0JDYOM" frameborder="0" allowfullscreen></iframe>
</div>
{:/nomarkdown}

Finally you need to do two things in your configuration file:

First, set the current value for **both** drivers. For example if you are using gamma and epsilon set:

```
gamma_current       1.5
epsilon_current      1.5
```

Then, you need to make sure that none of the step, dir and enable configuration values for your slave stepper motor driver, are present in the configuration file.

For example if you are using gamma as a slave, make sure that none of the following values are present in the configuration file:

```
gamma_step_pin
gamma_dir_pin
gamma_en_pin
```

If they are, remove them. And be careful, for the delta driver, if you started from the 3D printer configuration file, they are not referred to as delta_xxx_pin but as extruder_xxx_pin, if they are present you must remove them all.

Only remove the lines for the slave driver.

## External Stepper Drivers
<a name='external-drivers'></a>

The logic pins that control the stepper drivers are broken out on all 5 axes to 1x4 pin headers found near each driver on the board. The 4 pins are EN, DIR, STP, and ground. These pins or their equivalents are found on most external stepper drivers. Many drivers call the STP (step) pin PUL (pulse). Some will call the DIR (direction) pin PHA (phase).

Most external drivers have both a + and - pin for each of EN, DIR, and STP. The simplest way to connect the external driver is to wire Smoothieboard GND to all 3 - pins, and the logic pins of Smoothieboard to the corresponding + pins. Note that Smoothie is 3.3V logic and each pin can only supply a maximum current of 4 mA, which is not usually a problem unless interfacing to very large, or very old external drivers which may need a little more.

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  While this example will show using the pins of one of the on-board drivers to control the external driver, you can use pretty much any free GPIO pin to control the step/direction/enable pins on your external driver.
  <br><br>
  See <a href="pinout">pinout</a> and <a href="lpc1769-pin-usage">pin usage</a> to find free pins.
</sl-alert>
{:/nomarkdown}

All loadouts of Smoothieboard (3x, 4x, 5x) can control 5 external stepper drivers using these ports. The presence or absence of a built-in driver will not affect the external driver.

This shows control of an external driver using the pins on the positive side of the external driver's input.

{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <a href="/images/external-driver.png">
    <img src="/images/external-driver.png" alt="External Driver" style="min-width: 640px; max-width: 100%; height: auto;"/>
  </a>
</div>
{:/nomarkdown}

Please note, if your external driver requires 5V, that Smoothieboard only provides 3.3v on its output pins.

Two solutions to this: either use a [level shifter](https://www.sparkfun.com/products/12009) or use the Smoothieboard's pins as Open-Drain (i.e., linking to ground instead of linking to 3.3v, when closed), and wire accordingly.

For example:

{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <a href="/images/external-driver-open-drain.png">
    <img src="/images/external-driver-open-drain.png" alt="External Driver Open Drain" style="min-width: 640px; max-width: 100%; height: auto;"/>
  </a>
</div>
{:/nomarkdown}

Here, the 5V is taken from an endstop input's positive terminal, taken to the 5V inputs on the external driver. The step/direction/enable pins on the Smoothieboard are taken to the GND inputs on the external driver.

In this case, you will also need to change those pins to be open-drain. To change a pin from being normal to being open-drain, you add a `o` lowercase "o" to the pin's number. For example:

```
alpha_step_pin    2.0      # Pin for alpha stepper step signal
```

becomes

```
alpha_step_pin   2.0o     # Pin for alpha stepper step signal
```

{::nomarkdown}
it's also possible to invert a pin:
{:/nomarkdown}

```
alpha_step_pin   2.0!o     # Pin for alpha stepper step signal
```

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Reprap Discount Silencio Driver</strong><br><br>
  <a href="http://www.reprapdiscount.com">Reprap Discount</a> has a nice <a href="http://www.reprapdiscount.com/electronics/74-rrd-silencioso-128-microstep-driver-pololu-compatible.html">external driver called the Silencio</a>.<br><br>

  It does 1/128 microstepping, so using it with Smoothie makes a lot of sense since Smoothie can do higher <a href="http://reprap.org/wiki/Step_rates">step rates</a>.<br><br>

  It comes with an adapter for pololu-type drivers for RAMPS-type boards. However, you can also simply wire it to Smoothie's external driver connectors.<br><br>

  The only catch is: the pins are not in the same order in Smoothie and on the driver's cable. (Note the colors maybe different on your cable)<br><br>

  <table>
    <tr><th>Silencio cable color</th><td>Black</td><td>Green</td><td>Red</td><td>Blue</td></tr>
    <tr><th>Silencio connector order</th><td>+5v</td><td>Enable</td><td>Direction</td><td>Step</td></tr>
    <tr><th>Smoothie connector order</th><td>Ground</td><td>Step</td><td>Direction</td><td>Enable</td></tr>
  </table><br>

  No big deal though, you simply need to swap the step and enable pins in the configuration file.
  Also DO NOT connect the Black wire to the 4th pin on Smoothie which is GND on Smoothie, it must be connected to a +5v pin elsewhere (e.g., on the endstops)<br><br>

  Additionally, you need to invert (by adding a <code>!</code> to the pin number) the enable pin (that's specific to the Silencio).
  The step pin does not need to be inverted.<br><br>

  For example for your alpha driver, change:<br>
  <pre><code>alpha_step_pin      2.0       # Pin for alpha stepper step signal
alpha_dir_pin       0.5       # Pin for alpha stepper direction
alpha_en_pin        0.4       # Pin for alpha enable pin</code></pre>

  to<br>
  <pre><code>alpha_step_pin      2.0       # Pin for alpha stepper step signal
alpha_dir_pin       0.5       # Pin for alpha stepper direction
alpha_en_pin        0.4!      # Pin for alpha enable pin</code></pre>

  And just wire the Silencio connector to the Smoothieboard external driver connector
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>TB6600 External Drivers</strong><br><br>
  There are more versions labeled TB6600 on the market, but they use different driver chips inside. First of all, you'll need to know if the driver is ok with higher step rates (200 kHz), or you'll have to tune <code>microseconds_per_step_pulse</code> and/or <code>base_stepping_frequency</code>.<br><br>

  Since TB6600 uses 5V signals and Smoothie is 3.3V we should either use TTL converters or open-drain (as mentioned before). My setup uses open-drain with 5V taken from the board (signals are connected to "-" pins, 5V is to all "+" pins).<br><br>

  The config is the following for alpha, but it's the same for the rest:<br>
  <pre><code># Stepper module pins (ports, and pin numbers, appending "!" to the number will invert a pin)
alpha_step_pin                               2.0!o              # Pin for alpha stepper step signal
alpha_dir_pin                                0.5!o              # Pin for alpha stepper direction
alpha_en_pin                                 0.4!o              # Pin for alpha enable pin</code></pre>

  If you want to change the rotating direction, simply leave out the "!":<br>
  <pre><code>alpha_dir_pin                                0.5o              # Pin for alpha stepper direction</code></pre>
</sl-alert>
{:/nomarkdown}

### Multiple drivers in parallel

If one of your axes requires more than one motor and driver, you can wire the control signals for one axis to multiple drivers, like so:

{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <a href="/images/temporary/cable-duct-generic.jpg">
    <img src="/images/temporary/cable-duct-generic.jpg" alt="External drivers wired in parallel" style="min-width: 640px; max-width: 100%; height: auto;"/>
  </a>
</div>
{:/nomarkdown}

## Solid State Relays
<a name='solidstaterelay'></a>

The big mosfets on the Smoothieboard can handle up to 12Amps. Sometimes that's not enough. Say you want to control a big spindle, a gigantic heated bed, or a tesla coil.

Typical Solid State Relays (SSR) can handle up to 40Amps easily, sometimes more. AC ones can run 220V AC, and DC ones up to 60V DC (typically, look at the specs for yours).

To control your Solid State Relay (SSR), you will need one GPIO pin (use one of the free ones on the board ideally), and a connection to GND (plenty of those).

An SSR is essentially a big switch: you cut a wire, plug each end of the cut wire into its two terminals, and then you'll be able to control whether or not those two ends of the wire connect or not.

Simple as that.

{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <a href="/images/ssr-basic.svg">
    <img src="/images/ssr-basic.svg" alt="Wiring a Solid State Relay" style="min-width: 640px; max-width: 100%; height: auto;"/>
  </a>
</div>
{:/nomarkdown}

{::nomarkdown}
You will need to connect GND on the Smoothieboard to the "-" connection on the Input side of the SSR, and the GPIO pin on the Smoothieboard to the "+" connection on the Input side of the SSR.

This example shows using P<pin>1.30</pin>

Then simply configure the module that will be using the SSR to use that pin, for example in the case of [Switch](switch):
{:/nomarkdown}

```
switch.misc.enable                   true #
switch.misc.input_on_command         M42  #
switch.misc.input_off_command        M43  #
switch.misc.output_pin               2.4  # GPIO pin we connected to "+" on the SSR
switch.misc.output_type              digital        # just an on or off pin
```

In the case of [TemperatureControl](temperature-control), where you use the SSR to control a heating element for example, there is a catch.

SSRs have a low maximum frequency they can be switched at. You need to specify that frequency or Smoothie will drive it way too fast. In this example, the maximum frequency is 20Hz.

So, you need to modify your module to both use the correct pin (the free GPIO you wired to the SSR), and to the correct frequency. Here are the two lines to change:

```
temperature_control.swimming_pool_heating.heater_pin               2.4
temperature_control.swimming_pool_heating.pwm_frequency            20
```

Another option, which turns the heaters on/off even less often, is to use bang-bang, where the state is only changed when temperature deviates too much from the set value:

```
temperature_control.bed.bang_bang            true            # set to true to use bang bang control rather than PID
temperature_control.bed.hysteresis           2.0             # set to the temperature in degrees C to use as hysteresis
                                                              # when using bang bang
```

{::nomarkdown}
<div style="text-align: center; margin: 2rem 0;">
  <iframe width="100%" height="720" src="https://www.youtube.com/embed/TiEwNf1H_Tc" frameborder="0" allowfullscreen></iframe>
</div>
{:/nomarkdown}

## Swapping stepper motor drivers

On some boards, you might want to swap two axes.

For example, you have a board that has two connectors on the Z axis, but you want to connect two motors to the Y axis (which has only one connector).

In that case, all you need to do is exchange the 3 pin definitions for these two axes.

{::nomarkdown}
For example:
{:/nomarkdown}

```
beta_step_pin                                2.1              # Pin for beta stepper step signal
beta_dir_pin                                 0.11             # Pin for beta stepper direction
beta_en_pin                                  0.10             # Pin for beta enable

gamma_step_pin                               2.2              # Pin for gamma stepper step signal
gamma_dir_pin                                0.20             # Pin for gamma stepper direction
gamma_en_pin                                 0.19             # Pin for gamma enable
```

{::nomarkdown}
Becomes:
{:/nomarkdown}

```
beta_step_pin                                2.2              # Pin for beta stepper step signal
beta_dir_pin                                 0.20             # Pin for beta stepper direction
beta_en_pin                                  0.19             # Pin for beta enable

gamma_step_pin                               2.1              # Pin for gamma stepper step signal
gamma_dir_pin                                0.11             # Pin for gamma stepper direction
gamma_en_pin                                 0.10             # Pin for gamma enable
```

Now your beta driver becomes your Z axis, and your gamma driver becomes your Y axis.

Please note that the current control parameters do not get swapped: `alpha_current` always controls the current for M1, no matter what you do to the step/direction pins.

## Which pins are which

{% include hardware/pins/pinout-for-include.md %}

## Protecting a power input with a fuse

{% include hardware/power/fuse-protection-for-include.md %}
