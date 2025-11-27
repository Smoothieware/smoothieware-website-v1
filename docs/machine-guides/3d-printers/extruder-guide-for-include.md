
# Extruder

Extruders are used to push plastic filament through a hotend, to achieve the awesome feat of [3D Printing](http://en.wikipedia.org/wiki/3D_printing).

This module controls the motor that pushes the filament, it does not take care of the hotend itself, which is the job of [TemperatureControl](temperature-control).



**Steps Per Millimeter Configuration:**

The most important parameter to get your extruder module to work properly is the steps per millimeter setting:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```markdown
extruder.hotend.steps_per_mm 140
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[extruder]
hotend.steps_per_mm = 140
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}



You can create as many Extruder modules as you want (although you may run out of memory and Smoothie will no longer boot), as long as you give them different module names.

You can name those modules whatever you want (as long as you stick to only alphanumerical characters).

<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>NOTE</strong> that the default build of Smoothie only supports 2 extruders (5 axis), if you need 3 extruders you need to compile with <code>make AXIS=6</code>.
</sl-alert>

## Configuration

### Steps per millimeter

We need to find the number of steps the stepper motor drivers have to generate in order to move the filament 1 millimeter.

This value depends on your stepper motor, the microstepping on your stepper motor drivers, the gear reduction ratio on the extruder assembly if any, and the diameter of your hobbed pulley/bolt.

A very good guide on how to find this value can be found here: [Triffid Hunter's Calibration Guide](http://reprap.org/wiki/Triffid_Hunter%27s_Calibration_Guide#E_steps).

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```
extruder.hotend.steps_per_mm                    140
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[extruder]
hotend.steps_per_mm = 140
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

### Filament diameter

This is an optional parameter for those who want to use volumetric extrusion, but are too lazy to do their own math. ;)

Simply enter the machine's filament diameter here and set your slicer's filament diameter to 1.128379mm (2*sqrt(1/pi)) and enjoy portable gcode!

Further explanation can be found in Triffid Hunter's guide, linked above.

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  In the current <strong>edge</strong> builds, when a filament diameter is specified either from {::nomarkdown}<mcode>M200</mcode>{:/nomarkdown} Dxxx or the config setting Smoothie expects all E values specified to be in mm³, so when you click extrude 10mm in Pronterface Smoothie will actually extrude 10mm³. And E values in a gcode file will all be expected to be mm³.
  <br><br>
  Note that when firmware retraction is specified via {::nomarkdown}<mcode>M207</mcode>{:/nomarkdown} the retraction length is still in mm not mm³, but will be converted to mm³ based on the filament diameter at the time of extrusion.
  <br><br>
  In the current <strong>master</strong> builds, only print moves have E specified in mm³, retract or extrude only moves are still in mm. The change in edge is to be more compliant with other firmwares and user expectations.
</sl-alert>

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```
extruder.hotend.filament_diameter               3.0
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[extruder]
hotend.filament_diameter = 3.0
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

The filament diameter can also be saved at runtime with this M code:

| {::nomarkdown}<mcode>M200</mcode>{:/nomarkdown} | Set E units for volumetric extrusion - D<filament diameter> set to 0 to disable volumetric extrusion | {::nomarkdown}<mcode>M200</mcode>{:/nomarkdown} D3.0 |

and saved with {::nomarkdown}<mcode>M500</mcode>{:/nomarkdown}.

### Firmware Retract

{::nomarkdown}<gcode>G10</gcode>{:/nomarkdown}/{::nomarkdown}<gcode>G11</gcode>{:/nomarkdown} will cause the filament to retract and unretract, this option can be set in most current slicers.

Note this is optional, you are not obligated to set this up, but it is a nice feature if you want to use it.

The amounts of extrusion and speed can be set with the following M codes:

| {::nomarkdown}<mcode>M207</mcode>{:/nomarkdown} | set retract length S[positive\|mm] F[feedrate\|mm/min] Z[additional\|zlift/hop] Q[zlift\|feedrate mm/min] | {::nomarkdown}<mcode>M207</mcode>{:/nomarkdown} S4 F30 Z1 |
| {::nomarkdown}<mcode>M208</mcode>{:/nomarkdown} | set retract recover length S[positive\|mm surplus to the M207 S*] F[feedrate\|mm/min] | {::nomarkdown}<mcode>M208</mcode>{:/nomarkdown} S0 F8 |

or can be set in config with the following settings:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```
extruder.hotend.retract_length                  3       # retract length in mm
extruder.hotend.retract_feedrate                45      # retract feedrate in mm/sec
extruder.hotend.retract_recover_length          0       # additional length for recover
extruder.hotend.retract_recover_feedrate        8       # recover feedrate in mm/sec (should be less than retract feedrate)
extruder.hotend.retract_zlift_length            0       # zlift on retract in mm, 0 disables
extruder.hotend.retract_zlift_feedrate          6000    # zlift feedrate in mm/min (Note mm/min NOT mm/sec)
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[extruder]
hotend.retract_length = 3                       # retract length in mm
hotend.retract_feedrate = 45                    # retract feedrate in mm/sec
hotend.retract_recover_length = 0               # additional length for recover
hotend.retract_recover_feedrate = 8             # recover feedrate in mm/sec (should be less than retract feedrate)
hotend.retract_zlift_length = 0                 # zlift on retract in mm, 0 disables
hotend.retract_zlift_feedrate = 6000            # zlift feedrate in mm/min (Note mm/min NOT mm/sec)
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

These can be set differently for each extruder defined.

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Please note the inconsistency here with the config specifying mm/sec and the M206/207 specifying mm/min. Sorry about that.
</sl-alert>

### Pins

As all stepper motors, the extruder stepper motor needs 3 pins to be controlled: **step**, **direction**, and **enable** (See [Pin Reference](/lpc1769-pin-usage) and [Pinout](pinout)):

**1st Extruder** (delta, or M4)

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```
extruder.hotend.step_pin                        2.3
extruder.hotend.dir_pin                         0.22
extruder.hotend.en_pin                          0.21
```

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  These pins are for the delta (4th) driver on a Smoothieboard V1. This is what is most commonly used, but in another board or setup, you may have to use other pins.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[extruder]
hotend.step_pin = PD3
hotend.dir_pin = PD4
hotend.en_pin = PD5
```

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  These pins are for the delta (4th) driver on a Smoothieboard V2 Prime. Pin assignments vary by board variant.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

**2nd Extruder** (epsilon, or M5)

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```
extruder.hotend2.step_pin                       2.8
extruder.hotend2.dir_pin                        2.13
extruder.hotend2.en_pin                         4.29
```

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  These pins are for the epsilon (5th) driver on a Smoothieboard V1. This is what is most commonly used, but in another board or setup, you may have to use other pins.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Smoothieboard V2 Prime has 4 onboard stepper drivers. For a 5th driver, use an external driver connected via a Gadgeteer expansion header. See the V2 documentation for details.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  You can do special things to Smoothie pins, for example, you can invert them, which is useful to revert the direction of your extruder if it is wired the wrong way around on your board, see <a href="pin-configuration">Pin Configuration</a>.
  <br><br>
  You can make your extruder module use any other stepper motor driver, or even an external stepper motor driver, simply by providing the adequate pins for that driver, see <a href="pinout">Pinout</a>.
</sl-alert>

### Current

On boards which feature current control of the stepper motor drivers (Smoothieboard or 4pi), you have to set that value for the extruder too.

This is handled by the [Currentcontrol](currentcontrol) module, but usually, the line for the configuration of a given stepper motor is written along with its pins, for clarity.

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```
delta_current                                   1.5
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
[tmc2660]
delta.current = 1500                            # Current in milliamps (mA), not Amps
```

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>V2 Note:</strong> Current is specified in milliamps (mA) in V2, not Amps. So 1.5A becomes 1500mA. The setting is configured in the <code>[tmc2660]</code> or <code>[tmc2590]</code> section depending on your driver type.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

Set the value to the exact value your stepper motor is rated for (or less, for less noise, but less torque).

Setting the current to a value higher than the recommended one causes overheating, and skipped steps.

## Example

Here is an example of a common configuration and wiring of an extruder with a Smoothieboard.

This example setup is of an extruder (stepper motor) connected to the M4 stepper motor driver.

If your machine has multiple extruders, you also want to look at [multiple-extruders](multiple-extruders).

### Configuration

The default Smoothie [configuration example](configuring-smoothie) contains an example extruder section, this means you do not need to create a new one, but you can just re-use the sample one.

The configuration looks like this:

{::nomarkdown}
<versioned orientation="vertical">
<v1>
{:/nomarkdown}

```
## Extruder module configuration
# See /extruder
extruder.hotend.enable                          true    # Whether to activate the extruder module at all. All configuration is ignored if false
extruder.hotend.steps_per_mm                    140     # Steps per mm for extruder stepper
extruder.hotend.acceleration                    500     # Acceleration for the stepper motor mm/sec²
extruder.hotend.max_speed                       50      # Maximum speed in mm/s

extruder.hotend.step_pin                        2.3     # Pin for extruder step signal
extruder.hotend.dir_pin                         0.22    # Pin for extruder dir signal (add '!' to reverse direction)
extruder.hotend.en_pin                          0.21    # Pin for extruder enable signal

delta_current                                   1.5     # Current setting in Amperes for this motor driver
```

{::nomarkdown}
</v1>
<v2>
{:/nomarkdown}

```ini
## Extruder module configuration
# See /extruder
[extruder]
hotend.enable = true                            # Whether to activate the extruder module at all
hotend.steps_per_mm = 140                       # Steps per mm for extruder stepper
hotend.step_pin = PD3                           # Pin for extruder step signal
hotend.dir_pin = PD4                            # Pin for extruder dir signal (add '!' to reverse direction)
hotend.en_pin = PD5                             # Pin for extruder enable signal

[actuator delta]
acceleration = 500                              # Acceleration for the stepper motor mm/sec²

[motion control]
max_speed = 50                                  # Maximum speed in mm/s

[tmc2660]
delta.current = 1500                            # Current setting in milliamps for this motor driver
```

{::nomarkdown}
</v2>
</versioned>
{:/nomarkdown}

Now that your extruder is configured, you can wire it:

### Wiring

Wiring your extruder stepper motor is very similar to how you wire your X, Y, and Z stepper motors (see adequate documentation):

you just wire the 4 wires of the stepper motor, to the output connector of the M4 stepper motor driver.
