{::nomarkdown}
<a href="/images/temporary/laser-cutter-generic.jpg">
  <img src="/images/temporary/laser-cutter-generic.jpg" alt="High Voltage Warning" style="width: 300px; height: 427px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

The Laser module is the part of Smoothie that allows you to control laser cutters and engravers.

Laser cutters can use different types of laser sources:

**CO2 Lasers** use a sealed gas tube containing CO2, nitrogen, and helium. A high-voltage Power Supply Unit (≈<raw>40kV</raw>) passes electricity through the gas, generating an infrared beam at <raw>10.6μm</raw> wavelength (invisible to the human eye). {::nomarkdown}<span style="background-color: #4a1515; padding: 2px 4px; border-radius: 2px;">CO2 tubes typically last 2000-8000 hours depending on power level - higher power tubes have shorter lifespans and require water cooling.</span>{:/nomarkdown}

**Diode Lasers** use semiconductor laser diodes that emit light at <raw>405-980nm</raw> wavelengths. They are powered by low-voltage DC (<raw>12-48V</raw>) constant-current drivers and controlled via PWM signals. {::nomarkdown}<span style="background-color: #4a1515; padding: 2px 4px; border-radius: 2px;">Blue diode lasers (<raw>445nm</raw>) are visible but still extremely dangerous - visible beam does NOT mean safe.</span>{:/nomarkdown}

**Fiber Lasers** use optical fiber doped with rare-earth elements (typically ytterbium), pumped by laser diodes. They emit at <raw>1064nm</raw> (invisible infrared) and are excellent for metal marking and cutting. {::nomarkdown}<span style="background-color: #4a1515; padding: 2px 4px; border-radius: 2px;">Fiber lasers are highly efficient and have long lifespans (50,000+ hours) but are more expensive than CO2 or diode lasers.</span>{:/nomarkdown}

Using G-code, you tell Smoothie where to move and when to cut.

Smoothie moves the motors, and the Laser module talks to the laser power supply to tell it when to turn off and on, and using how much power.

---

<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Safety Warning - Electrical Hazards:</strong><br><br>

  <strong>CO2 Lasers:</strong> Power supplies operate at extremely high voltage (≈<raw>40,000V</raw>). This is instantly lethal. If you are not qualified to handle high voltage, contact a professional.<br><br>

  <strong>Diode/Fiber Lasers:</strong> While lower voltage (<raw>12-48V</raw>), improper wiring can still cause fires or equipment damage. Follow manufacturer specifications exactly.<br><br>

  <strong>Always</strong> disconnect power before working on any electrical connections.
</sl-alert>

<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  For laser cutters, you will get some extra features (in particular nice laser-specific screen information on panels) if you use the "cnc" version of the firmware.

  Though the normal (edge) version will work fine.

  See <a href="flashing-smoothie-firmware">flashing the firmware</a> and choose the file called <code>firmware-cnc.bin</code>.
</sl-alert>


## Wiring

### Understanding Laser Power Supply Pinouts

Different laser types have different power supply control interfaces.

**CO2 Laser Power Supplies (<raw>H</raw>/<raw>L</raw>/<raw>P</raw>/<raw>G</raw>/<raw>IN</raw>/<raw>5V</raw>):**

Most Chinese CO2 laser power supplies use a standard pinout with <raw>H</raw>/<raw>L</raw>/<raw>P</raw>/<raw>G</raw>/<raw>IN</raw>/<raw>5V</raw> connections. Understanding these pins is essential for proper wiring:

**Standard laser PSU pins**:

1. **<raw>H</raw> (High)**: Enable signal - laser won't power unless tied HIGH (to <raw>3.3V</raw> or <raw>5V</raw>)
   - Purpose: Master enable for the laser power supply
   - Typical connection: Tie to <raw>3.3V+</raw> or <raw>5V</raw> to enable laser operation

2. **<raw>L</raw> (Low)**: Safety interlock - laser won't power unless tied LOW (to <raw>GND</raw>)
   - Purpose: Safety interlock signal
   - Typical connection: Tie to <raw>GND</raw> to enable laser operation

3. **<raw>P</raw> (Protect)**: Water protect circuit - PSU shuts off unless connected to <raw>GND</raw>
   - Purpose: Water cooling safety - connects through water flow/temperature switch
   - Typical connection: Connect to <raw>GND</raw> via flow sensor or temperature switch
   - When water flow fails or temperature is too high, circuit opens and laser shuts down

4. **<raw>G</raw> (Ground)**: Ground reference
   - Purpose: Common ground for control signals
   - Connection: Connect to Smoothieboard <raw>GND</raw>

5. **<raw>IN</raw> (Input)**: <raw>0-5V</raw> PWM or analog power control signal
   - Purpose: Controls laser power output (<raw>0V</raw> = off, <raw>5V</raw> = maximum power)
   - Connection: Connect to Smoothieboard PWM pin
   - Note: Some PSUs can be adjusted for <raw>0-3.3V</raw> operation via internal potentiometer

6. **<raw>5V</raw>**: <raw>5V</raw> output from PSU
   - Purpose: Can power external circuits (red dot pointer, sensors, etc.)
   - Typical capacity: <raw>100-500mA</raw> depending on PSU model

**TTL vs PWM Signal Distinction**:
- **<raw>TTL</raw> pin**: Turns entire power supply on/off at beginning/end of moves (digital on/off)
- **<raw>PWM</raw> pin**: Modulates laser power during operation (analog <raw>0-100%</raw> power control)
- Smoothieboard provides hardware PWM for smooth power modulation

**Water Protect Circuit Operation**:

The <raw>P</raw> (Protect) pin provides critical safety by monitoring water cooling:
- Connect <raw>P</raw> pin to GND through a normally-closed flow switch or temperature switch
- If water flow stops or temperature exceeds safe limits, switch opens
- PSU detects open circuit and immediately shuts down laser
- This prevents expensive laser tube damage from cooling failure

**Recommended Wiring Method**:

Use Ethernet cable (CAT5/CAT6) without connectors for signal wiring:
- Readily available and inexpensive
- Contains multiple twisted pairs (reduces electromagnetic interference)
- Color-coded wires for easy identification
- Twist pairs together for EMI reduction

**Example cable color mapping**:
- Ground: Brown wires → <raw>G</raw> pin and Smoothieboard <raw>GND</raw>
- <raw>TTL</raw>/Enable: Yellow + Green wires → <raw>H</raw> pin (if using <raw>TTL</raw> enable)
- <raw>PWM</raw> Power: Blue wire → <raw>IN</raw> pin and Smoothieboard <raw>PWM</raw> pin

{::nomarkdown}
<a href="/images/draft/laser-psu-wiring-diagram.jpeg">
  <img src="/images/draft/laser-psu-wiring-diagram.jpeg" alt="CO2 Laser PSU wiring diagram showing H/L/P/G/IN/5V connections" class="draft-image" style="width: 100%; max-width: 800px; display: block; margin: 2rem auto;"/>
</a>
<p style="text-align: center;"><em>Typical CO2 laser PSU wiring diagram showing standard <raw>H</raw>/<raw>L</raw>/<raw>P</raw>/<raw>G</raw>/<raw>IN</raw>/<raw>5V</raw> pinout and connections to controller</em></p>
{:/nomarkdown}

**Diode Laser Drivers:**

Diode lasers use constant-current drivers with simpler control interfaces:

**Typical diode driver pins:**
- **<raw>V+</raw> / <raw>VIN</raw>**: Power input (typically <raw>12-48V</raw> DC)
- **<raw>GND</raw>**: Ground reference
- **<raw>PWM</raw>**: PWM control input (<raw>0-5V</raw> or <raw>0-12V</raw> depending on driver)
- **<raw>TTL</raw>**: Optional enable/disable signal (some drivers)
- **<raw>OUT+</raw> / <raw>OUT-</raw>**: Laser diode connection (DO NOT reverse polarity - will destroy diode)

**Important differences from CO2:**
- No high voltage (<raw>12-48V</raw> is typical)
- PWM signal directly controls laser current (<raw>0V</raw> = off, max voltage = max current)
- Many drivers accept <raw>0-5V</raw> PWM (Smoothieboard compatible)
- Some require <raw>0-12V</raw> PWM (may need level shifter)
- Polarity protection: reversing laser diode wires destroys the diode instantly

**Fiber Laser Drivers:**

Fiber lasers typically use similar control to diode lasers:
- Low-voltage DC power input
- PWM control signal (<raw>0-5V</raw> or <raw>0-10V</raw>)
- Enable/disable signals
- Fiber lasers often include more sophisticated control interfaces (<raw>RS232</raw>, Ethernet, proprietary)

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Diode Laser Polarity Warning:</strong><br><br>
  Laser diodes are extremely sensitive to reverse polarity. Connecting power backwards even momentarily will instantly destroy the laser diode. Always verify polarity before connecting power.
</sl-alert>
{:/nomarkdown}

In order to control the power of the laser, the power supply or driver reads a PWM signal as its input. {::nomarkdown}<span style="background-color: #4a1515; padding: 2px 4px; border-radius: 2px;">CO2 laser PSUs use standard <raw>H</raw>/<raw>L</raw>/<raw>P</raw>/<raw>G</raw>/<raw>IN</raw>/<raw>5V</raw> pinout with PWM on <raw>IN</raw> pin. Diode/fiber laser drivers typically have dedicated PWM input accepting 0-5V or 0-12V.</span>{:/nomarkdown}

Please look at the datasheet for your power supply or driver to know which connection that signal is wired to. {::nomarkdown}<span style="background-color: #4a1515; padding: 2px 4px; border-radius: 2px;">For CO2 lasers, the <raw>P</raw> (protect) pin is critical for safety - it should connect to ground through your water flow/temperature switch to shut down the laser if cooling fails.</span>{:/nomarkdown}

From the Smoothieboard, you need to connect:

* One <raw>GND</raw> pin to the Ground connection on the power supply or driver
* One of Smoothie's <raw>PWM</raw> pins to the PWM input on the power supply or driver {::nomarkdown}<span style="background-color: #4a1515; padding: 2px 4px; border-radius: 2px;">Use Ethernet cable (<raw>CAT5</raw>/<raw>CAT6</raw>) for signal wiring - the twisted pairs provide excellent EMI protection and it's readily available.</span>{:/nomarkdown}

Both Ground pins are easy to find, and the power supply input you find in the manual/datasheet, now all you need is to find a PWM pin on the Smoothieboard.

There are 6 of them, but 4 of them are used for the step pins for stepper motor drivers.

Those for alpha and beta you won't be able to use as you use those drivers to control the <raw>X</raw> and <raw>Y</raw> axes.

Depending on whether you have a <raw>Z</raw> axis, your gamma axis step pin could be used.

It is labelled <raw>ST3</raw>, on the <raw>JP12</raw> header, near the <raw>M3</raw> stepper motor driver.

You probably do not use your delta (<raw>M4</raw>) stepper motor driver on a laser cutter, so that pin can also be used, it is labelled <raw>ST4</raw> on the <raw>JP15</raw> header near the <raw>M4</raw> stepper motor driver.

The other two are found near the microcontroller and the MOSFETS, on the <raw>JP33</raw> header, and are labelled <raw>PWM0</raw> and <raw>PWM1</raw>.

Choose which you will use, all have a <raw>GND</raw> header close-by (all are unlabelled) to make it convenient for wiring. {::nomarkdown}<span style="background-color: #4a1515; padding: 2px 4px; border-radius: 2px;">Only pins <pin>2.0</pin>-<pin>2.5</pin> support hardware PWM required for smooth laser power modulation - software PWM is not suitable for laser control.</span>{:/nomarkdown}

Now you need to find which GPIO pin/port number corresponds to the PWM pin you chose, so you can tell Smoothie which you'll be using in the configuration file.

<table>
<thead>
<tr>
<th>Pin number for configuration</th>
<th>Label on the board</th>
<th>Comment</th>
</tr>
</thead>
<tbody>
<tr>
<td><pin>2.2</pin></td>
<td><raw>STP3</raw></td>
<td>Only if you are not using a <raw>Z</raw> axis/the gamma driver. Make sure you set <setting v1="gamma_step_pin" v2="gamma.step_pin"></setting> to the <raw>nc</raw> value. The unlabelled pin in <raw>JP12</raw> is <raw>GND</raw>.</td>
</tr>
<tr>
<td><pin>2.3</pin></td>
<td><raw>STP4</raw></td>
<td>Only if you are not using the delta driver. Make sure you set <setting v1="delta_step_pin" v2="delta.step_pin"></setting> to the <raw>nc</raw> value. The unlabelled pin in <raw>JP15</raw> is <raw>GND</raw>.</td>
</tr>
<tr>
<td><pin>2.4</pin></td>
<td><raw>PWM0</raw></td>
<td>Only if you are not using the first small MOSFET (<raw>X8</raw>). All pins of <raw>JP10</raw> are <raw>GND</raw>.</td>
</tr>
<tr>
<td><pin>2.5</pin></td>
<td><raw>PWM1</raw></td>
<td>Only if you are not using the second big MOSFET (<raw>X15</raw>). All pins of <raw>JP10</raw> are <raw>GND</raw>.</td>
</tr>
</tbody>
</table>

Now that the PSU is wired to the Smoothieboard and that you know which pin you are using for control, you can change the configuration file to setup laser control.

## Configuration

You now need to edit the "config" file on the SD card (the default configuration file already contains example laser lines so you may only need to edit/enable those) to add or setup the laser part as follows: {::nomarkdown}<span style="background-color: #4a1515; padding: 2px 4px; border-radius: 2px;">The <setting v1="laser_module_enable" v2="laser.enable"></setting> must be set to "true" to activate laser control - it's disabled by default for safety.</span>{:/nomarkdown} 

```markdown
# Laser module configuration
laser_module_enable                          false            # Whether to activate the laser module at all. All configuration is
                                                              # ignored if false.
laser_module_pwm_pin                         2.5              # this pin will be PWMed to control the laser. Only P2.0 - P2.5
                                                              # can be used since laser requires hardware PWM
#laser_module_maximum_power                  1.0              # this is the maximum duty cycle that will be applied to the laser
#laser_module_minimum_power                  0.0              # this duty cycle will be used for travel moves to keep the laser
                                                              # active without actually burning
#laser_module_pwm_period                     20               # this sets the pwm frequency as the period in microseconds
```

If needed, replace the <pin>2.5</pin> value for <setting v1="laser_module_pwm_pin" v2="laser.pwm_pin"></setting> with the pin you chose in the wiring section. {::nomarkdown}<span style="background-color: #4a1515; padding: 2px 4px; border-radius: 2px;">Remember to use the <raw>o!</raw> suffix (e.g., "<pin>1.23o!</pin>") if your PSU requires open-drain inverted signaling.</span>{:/nomarkdown}

Save the file, reset the board, you are now ready for laser testing. {::nomarkdown}<span style="background-color: #4a1515; padding: 2px 4px; border-radius: 2px;">Always verify cooling system is running and ventilation is operating before any laser testing.</span>{:/nomarkdown}

### All options

{% include modules/laser/laser-options-for-include.md %}

## Example setup

Exactly how to wire your Smoothieboard to control your laser power supply is going to depend on the PSU itself, so we highly recommend you read the documentation for yours. {::nomarkdown}<span style="background-color: #4a1515; padding: 2px 4px; border-radius: 2px;">Most Chinese CO2 laser PSUs follow the same standard <raw>H</raw>/<raw>L</raw>/<raw>P</raw>/<raw>G</raw>/<raw>IN</raw>/<raw>5V</raw> pinout, making wiring fairly consistent across brands.</span>{:/nomarkdown}

This is an example that should be the most common case, which you are most likely to encounter: the Chinese power supply with <raw>H</raw> <raw>L</raw> <raw>P</raw> <raw>G</raw> <raw>IN</raw> <raw>5V</raw> connections.

In this example a RECI power supply but this should apply to most Chinese power supplies.

The basic idea is this: pin <pin>1.23</pin> (hardware PWM-capable) is configured as open-drain and inverted (<pin>1.23o!</pin>), then connected to the <raw>L</raw> (Low) TTL input on the power supply. {::nomarkdown}<span style="background-color: #4a1515; padding: 2px 4px; border-radius: 2px;">The <raw>o!</raw> suffix configures the pin as open-drain and inverted, which is necessary to provide proper voltage levels for the PSU control input.</span>{:/nomarkdown}

Ground from the Smoothieboard is connected to ground on the Power Supply.

The rest is specific to the supply: <raw>P</raw> is connected to <raw>G</raw> through the door switch and water protect circuits, this ensures that if the door is opened or the water chiller turns off, the laser is turned off. {::nomarkdown}<span style="background-color: #4a1515; padding: 2px 4px; border-radius: 2px;">This safety interlock is critical - it prevents laser operation if cooling fails or the door is open, protecting both the tube and the operator.</span>{:/nomarkdown}

{::nomarkdown}
<div style="margin: 2rem 0;">
<h4>Safe vs Unsafe Relay Wiring</h4>
<p>When wiring safety interlocks using relays, proper wiring is critical for safety. Incorrect wiring can result in the laser remaining powered even when safety conditions are not met.</p>
<p style="margin-top: 1rem;"><strong>Important:</strong> Always use normally-closed (NC) contacts for safety interlocks. If power is lost to the relay coil, a NC contact will open, cutting power to the laser. A normally-open (NO) contact would close on power loss, potentially enabling the laser in unsafe conditions.</p>
</div>
{:/nomarkdown}

Finally, <raw>IN</raw> is connected to <raw>5V</raw>, setting the laser power at full (but it can still be modulated by Smoothie's PWM). {::nomarkdown}<span style="background-color: #4a1515; padding: 2px 4px; border-radius: 2px;">Alternatively, you can connect the PWM output directly to <raw>IN</raw> for full power control, or use a potentiometer between <raw>IN</raw> and <raw>5V</raw> to manually set maximum power.</span>{:/nomarkdown}

Here you could in theory replace the jumper by a potentiometer, allowing you to manually adjust the maximum laser power.

The wiring looks like this:

{::nomarkdown}
<a href="/images/temporary/voltage-regulator-generic.jpg">
  <img src="/images/temporary/voltage-regulator-generic.jpg" alt="Laser Power Supply Wiring" style="width: 100%; max-width: 800px; display: block; margin: 2rem auto;"/>
</a>
{:/nomarkdown}

You then also need to configure the laser module accordingly:

```markdown
# Laser module configuration
laser_module_enable                          false            # Whether to activate the laser module at all. All configuration is
                                                              # ignored if false.
laser_module_pwm_pin                         1.23o!           # this pin will be PWMed to control the laser. Only P2.0 - P2.5
                                                              # can be used since laser requires hardware PWM
```

### Note on K40

The wiring above probably won't work on a K40, which are fairly weird machines (cheap comes at a cost). {::nomarkdown}<span style="background-color: #4a1515; padding: 2px 4px; border-radius: 2px;">K40 lasers often use non-standard PSU wiring and may require PWM frequency adjustment (typically <raw>500Hz</raw> to <raw>20kHz</raw>) for proper operation.</span>{:/nomarkdown}

For K40, see the several build logs linked to at the top of this page.

In particular, you'll likely need to increase the <raw>pwm frequency</raw>, and wiring might need to be different depending on your model.

## Testing

<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Make sure your laser cutter enclosure is closed and that everything is safe.

  Wear laser protection googles, even if the machine is properly closed.

  Make sure your machine has a proper enclosure, and a switch on the door that turns it off when the door is opened.

  Do not do anything until this is properly setup.

  Lasers can make you blind. And bionic eyes are not there just yet.
</sl-alert>

Here is how Smoothie laser control works: <gcode>G0</gcode> and <gcode>G1</gcode> are exactly the same command, they take positional parameters (X10 Y5 Z3 for example) and move the tool to that position. {::nomarkdown}<span style="background-color: #4a1515; padding: 2px 4px; border-radius: 2px;">This is fundamental laser safety - <gcode>G0</gcode> is for rapid positioning without cutting, <gcode>G1</gcode> enables the laser during the move.</span>{:/nomarkdown}

The only difference is that when using <gcode>G0</gcode> the laser stays off, and when using <gcode>G1</gcode> the laser is on, only during movement.

To test, try moving your laser with <gcode>G0</gcode> and try moving it with <gcode>G1</gcode>:

```markdown
G0 X10 F300
G1 X20 F300
```

You can set the power for the laser by using the <raw>S</raw> parameter. Values go from <raw>0</raw> (<raw>0%</raw>) to <raw>1</raw> (<raw>100%</raw>). {::nomarkdown}<span style="background-color: #4a1515; padding: 2px 4px; border-radius: 2px;">Always start testing with very low power (<raw>S0.05</raw> to <raw>S0.10</raw>) on toilet paper to verify laser operation safely before increasing power.</span>{:/nomarkdown}

For example:

```markdown
G1 X10 F300 S0.2
```


## EMI Protection

Electromagnetic interference (EMI) from the laser power supply and stepper motors can cause random errors, USB disconnects, and positioning problems.

### Ferrite Bead Placement

Ferrite beads suppress high-frequency electrical noise on cables. Add ferrites to:

**Critical cables to protect**:
1. **Stepper motor wires**: Place ferrite near motor and near controller
2. **Endstop wires**: Ferrite near controller end prevents false triggers
3. **USB cable**: Ferrite at both ends (computer and Smoothieboard)
4. **Ethernet cable** (if using network): Ferrite near Smoothieboard
5. **Laser PSU control wires**: Ferrite near Smoothieboard

**Ferrite installation**:
- Wrap cable through ferrite core 2-3 times for maximum effect
- Place ferrite as close to noise source as practical
- Use appropriately-sized ferrite for cable thickness
- Secure with zip tie or tape to prevent sliding

**Ferrite sizes**:
- Small ferrites (<raw>10-15mm</raw> inner diameter): Signal cables, USB, endstops
- Medium ferrites (<raw>20-25mm</raw> inner diameter): Stepper motor cables
- Large ferrites (<raw>30mm+</raw> inner diameter): Power cables if needed

### Cable Routing Best Practices

**Separate high-power from signal cables**:
- Route stepper motor power cables away from signal cables
- Laser PSU high-voltage cables should be isolated from control cables
- Minimum <raw>50mm</raw> (<raw>2 inches</raw>) separation between power and signal cables
- Cross power and signal cables at <raw>90°</raw> angles (never parallel runs)

**Cable organization**:
- Use cable ties or cable chains to organize cables
- Keep cables neat and secured (prevents snagging on moving parts)
- Avoid sharp bends (can damage wires internally)
- Label cables for easy identification during troubleshooting

**Shielded cables**:
- Use shielded cables for long runs (<raw>>1 meter</raw>)
- Connect shield to ground at one end only (prevents ground loops)
- Stepper cables should be shielded in electrically noisy environments

### Twisted Pair Recommendations

**Why twisted pairs reduce EMI**:
- Twisting cancels electromagnetic fields from each wire
- External interference affects both wires equally (differential signal rejects noise)
- Simple and effective noise reduction method

**Where to use twisted pairs**:
- Endstop signal wires (twist signal and ground together)
- Laser PSU control signals (twist PWM and ground together)
- Thermistor wires if used (twist + and - together)
- Any long signal cable runs

**How to create twisted pairs**:
1. Cut two wires to same length
2. Clamp one end in drill chuck or vise
3. Hold other end and twist wires together
4. Aim for <raw>10-20 twists per foot</raw> (more twisting = better noise rejection)
5. Don't over-twist (wires can break if too tight)

**Pre-twisted options**:
- Ethernet cable (<raw>CAT5</raw>/<raw>CAT6</raw>) contains 4 twisted pairs - excellent for signal wiring
- Telephone cable contains twisted pairs
- Stepper motor cables are often pre-twisted and shielded

## Supported G-codes

The following G-codes are supported by the Laser module:

* <gcode>G0</gcode>: Move without activating the laser
* <gcode>G1</gcode>/<gcode>G2</gcode>/<gcode>G3</gcode>: Move with the laser activated
* <raw>S</raw>: The <raw>S</raw> parameter sets the current power of the laser, when it is activated, from <raw>0</raw> (<raw>0%</raw>) to <raw>1</raw> (<raw>100%</raw>).
* <mcode>M221 Snnn</mcode> globally scales the laser power provided by <gcode>G1</gcode> by <raw>nnn</raw> percent. So <mcode>M221 S75</mcode> will scale the laser power to <raw>75%</raw>. {::nomarkdown}<span style="background-color: #4a1515; padding: 2px 4px; border-radius: 2px;">This is useful for quick power adjustments without modifying your G-code file - ideal for test cuts on different material batches.</span>{:/nomarkdown}
* <mcode>M221 Rxxx</mcode>: Set the PWM frequency to <raw>xxx Hz</raw> (Hertz). This specifies frequency, and **not** period, be aware and careful. {::nomarkdown}<span style="background-color: #4a1515; padding: 2px 4px; border-radius: 2px;">K40 lasers typically require higher frequencies (<raw>500Hz-20kHz</raw>) while larger lasers work well at lower frequencies (<raw>50-500Hz</raw>).</span>{:/nomarkdown}
* <mcode>M221 P1</mcode>: Temporarily disable proportional laser power (as per the <setting v1="laser_module_proportional_power" v2="laser.proportional_power"></setting> configuration option, see its description for more details). This is **not** saved by the <mcode>M500</mcode> command.

## Supported commands

The following commands are available for testing (prepend <raw>@</raw> in pronterface or <mcode>M1000</mcode> in other hosts) {::nomarkdown}<span style="background-color: #4a1515; padding: 2px 4px; border-radius: 2px;">Manual <raw>fire</raw> commands are for alignment and testing only - never use them for actual cutting as they bypass safety features.</span>{:/nomarkdown}

* <raw>fire nnn</raw> where <raw>nnn</raw> is <raw>0-100</raw> percentage of power (example <raw>fire 10</raw> will turn on laser at <raw>10%</raw>) {::nomarkdown}<span style="background-color: #4a1515; padding: 2px 4px; border-radius: 2px;">Start with very low values (<raw>5-10</raw>) for initial tests - even <raw>10%</raw> power can burn paper.</span>{:/nomarkdown}
* <raw>fire off</raw> turn off the test fire and return to automatic mode. {::nomarkdown}<span style="background-color: #4a1515; padding: 2px 4px; border-radius: 2px;">Always use <raw>fire off</raw> to disable manual mode before running G-code - otherwise power control won't work correctly.</span>{:/nomarkdown}

<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  If you want to learn more about this module, or are curious how it works, Smoothie is Open-Source and you can simply go look at the code, <a href="https://github.com/Smoothieware/Smoothieware/blob/edge/src/modules/tools/laser/Laser.cpp">here</a>.
</sl-alert>
