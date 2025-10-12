---
layout: default
title: Extruder Guide
---

# Extruder

Extruders are used to push plastic filament through a hotend, to achieve the awesome feat of [3D Printing](http://en.wikipedia.org/wiki/3D_printing).

This module controls the motor that pushes the filament, it does not take care of the hotend itself, which is the job of [TemperatureControl](temperature-control).

The most important parameter to get your extruder module to work properly, is `extruder.[module-name].steps_per_mm`.


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

A very good guide on how to find this value can be found here: [Triffid Hunter's Calibration Guide](http://reprap.org/wiki/Triffid_Hunter%27s_Calibration_Guide#E_steps)


```markdown
extruder.hotend.steps_per_mm 140
```

### Filament diameter

This is an optional parameter for those who want to use volumetric extrusion, but are too lazy to do their own math. ;)

Simply enter the machine's filament diameter here and set your slicer's filament diameter to 1.128379mm (2*sqrt(1/pi)) and enjoy portable gcode!

Further explanation can be found in Triffid Hunter's guide, linked above.

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  In the current <strong>edge</strong> builds, when a filament diameter is specified either from M200 Dxxx or the config setting Smoothie expects all E values specified to be in mm³, so when you click extrude 10mm in Pronterface Smoothie will actually extrude 10mm³. And E values in a gcode file will all be expected to be mm³.
  <br><br>
  Note that when firmware retraction is specified via M207 the retraction length is still in mm not mm³, but will be converted to mm³ based on the filament diameter at the time of extrusion.
  <br><br>
  In the current <strong>master</strong> builds, only print moves have E specified in mm³, retract or extrude only moves are still in mm. The change in edge is to be more compliant with other firmwares and user expectations.
</sl-alert>

```markdown
extruder.hotend.filament_diameter 3.0
```

The filament diameter can also be saved at runtime with this M code:

| `M200` | Set E units for volumetric extrusion - D<filament diameter> set to 0 to disable volumetric extrusion | `M200 D3.0` |

and saved with `M500`.

### Firmware Retract

`G10`/`G11` will cause the filament to retract and unretract, this option can be set in most current slicers.

Note this is optional, you are not obligated to set this up, but it is a nice feature if you want to use it.

The amounts of extrusion and speed can be set with the following M codes:

| `M207` | set retract length S[positive\|mm] F[feedrate\|mm/min] Z[additional\|zlift/hop] Q[zlift\|feedrate mm/min] | `M207 S4 F30 Z1` |
| `M208` | set retract recover length S[positive\|mm surplus to the M207 S*] F[feedrate\|mm/min] | `M208 S0 F8` |

or can be set in config with the following settings:

```markdown
extruder.hotend.retract_length 3 # retract length in mm
extruder.hotend.retract_feedrate 45 # retract feedrate in mm/sec
extruder.hotend.retract_recover_length 0 # additional length for recover
extruder.hotend.retract_recover_feedrate 8 # recover feedrate in mm/sec (should be less than retract feedrate)
extruder.hotend.retract_zlift_length 0 # zlift on retract in mm, 0 disables
extruder.hotend.retract_zlift_feedrate 6000 # zlift feedrate in mm/min (Note mm/min NOT mm/sec)
```

These can be set differently for each extruder defined.

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Please note the inconsistency here with the config specifying mm/sec and the M206/207 specifying mm/min. Sorry about that.
</sl-alert>

### Pins

As all stepper motors, the extruder stepper motor needs 3 pins to be controlled: **step**, **direction**, and **enable** (See [Pin Reference](http://smoothieware.org/lpc1769-pin-usage) and [Pinout](pinout)):

**1st Extruder** (delta, or M4)

```markdown
extruder.hotend.step_pin 2.3
extruder.hotend.dir_pin 0.22
extruder.hotend.en_pin 0.21
```

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  These pins are for the delta (4th) driver on a Smoothieboard. This is what is most commonly used, but in another board or setup, you may have to use other pins.
</sl-alert>

**2nd Extruder** (epsilon, or M5)

```markdown
extruder.hotend2.step_pin 2.8
extruder.hotend2.dir_pin 2.13
extruder.hotend2.en_pin 4.29
```

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  These pins are for the epsilon (5th) driver on a Smoothieboard. This is what is most commonly used, but in another board or setup, you may have to use other pins.
</sl-alert>

<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  You can do special things to Smoothie pins, for example, you can invert them, which is useful to revert the direction of your extruder if it is wired the wrong way around on your board, see <a href="pin-configuration">Pin Configuration</a>.
  <br><br>
  You can make your extruder module use any other stepper motor driver, or even an external stepper motor driver, simply by providing the adequate pins for that driver, see <a href="pinout">Pinout</a>.
</sl-alert>

### Current

On boards which feature current control of the stepper motor drivers (Smoothieboard or 4pi), you have to set that value for the extruder too.

This is handled by the [Currentcontrol](currentcontrol) module, but usually, the line for the configuration of a given stepper motor is written along with its pins, for clarity.

```markdown
delta_current 1.5
```

Set the value to the exact value your stepper motor is rated for (or less, for less noise, but less torque).

Setting the current to a value higher than the recommended one causes overheating, and skipped steps.

## Example

Here is an example of a common configuration and wiring of an extruder with a Smoothieboard.

This example setup is of an extruder (stepper motor) connected to the M4 stepper motor driver.

If your machine has multiple extruders, you also want to look at [multiple-extruders](multiple-extruders).

### Configuration

The default Smoothie [configuration example](configuring-smoothie) contains an example extruder section, this means you do not need to create a new one, but you can just re-use the sample one.

The configuration looks like this:

```markdown
## Extruder module configuration
# See http://smoothieware.org/extruder
extruder.hotend.enable true # Whether to activate the extruder module at all. All configuration is ignored if false
extruder.hotend.steps_per_mm 140 # Steps per mm for extruder stepper
extruder.hotend.default_feed_rate 600 # Default rate (mm/minute) for moves where only the extruder moves
extruder.hotend.acceleration 500 # Acceleration for the stepper motor mm/sec²
extruder.hotend.max_speed 50 # Maximum speed in mm/s

extruder.hotend.step_pin 2.3 # Pin for extruder step signal
extruder.hotend.dir_pin 0.22 # Pin for extruder dir signal (add '!' to reverse direction)
extruder.hotend.en_pin 0.21 # Pin for extruder enable signal

delta_current 1.5 # Current setting in Amperes for this motor driver
```

Now that your extruder is configured, you can wire it:

### Wiring

Wiring your extruder stepper motor is very similar to how you wire your X, Y, and Z stepper motors (see adequate documentation):

you just wire the 4 wires of the stepper motor, to the output connector of the M4 stepper motor driver.
