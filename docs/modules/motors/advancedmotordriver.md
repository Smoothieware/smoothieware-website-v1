---
permalink: /advancedmotordriver
---

# Advanced Driver Chip Module

{::nomarkdown}
<a href="/images/circuit.png">
  <img src="/images/circuit.png" alt="Circuit diagram" style="width: 300px; height: 300px; float: right; margin-left: 1rem;"/>
</a>
{:/nomarkdown}

This module is used to control SPI based stepper motor driver chips, like the Panucatt Bigfoot series.

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  This does not work on Smoothieboards or Azteeg X5 Mini as is, as they do not use the required driver chips.
  <br><br>
  If you really know what you are doing, you can hook the drivers to the SPI bus of those old boards.
  <br><br>
  Make sure your drivers have sufficient power filtering.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Note that most of these drivers derive their power from Vbb (12v), not from the 3.3v, so in order to be set up correctly, they need to be powered up before Smoothie boots.
  <br><br>
  This means the Vbb must be on before the 5v power comes on.
  <br><br>
  Alternatively, the Smoothieboard must be hard reset after power is on.
</sl-alert>
{:/nomarkdown}

## Config settings

This module is enabled in config with:

```markdown
motor_driver_control.motor1.enable true  # where motor1 is any name you wish
```

The chip this controls is set with:

```markdown
motor_driver_control.motor1.chip DRV8711    # this can be one of DRV8711 or TMC2660
                                             # The latter can control any TMC26x derivative
```

The SPI channel to use must be set with:

```markdown
motor_driver_control.motor1.spi_channel  0       # or 1
motor_driver_control.motor1.spi_cs_pin   0.10    # any pin
motor_driver_control.motor1.spi_frequency 100000 # the SPI frequency to use
```

Other config settings:

```markdown
motor_driver_control.motor1.axis  X       # for display purposes and for setting in Mxxx commands and telling the system which axis it controls
motor_driver_control.motor1.alarm         true  # enable alarm checking of chip, and report with a console message
motor_driver_control.motor1.halt_on_alarm true  # set to true to force a halt on any alarm condition
motor_driver_control.motor1.current       3000  # set the motor current in milliamps
motor_driver_control.motor1.max_current   4000  # the maximum current the chip allows
motor_driver_control.motor1.microsteps    128   # the microsteps for this driver
```

Some chip-specific configs are...

```markdown
motor_driver_control.motor1.sense_resistor  xxx  # set the sense resistor used, this value is chip specific, set to the default for commonly used drivers
motor_driver_control.motor1.gain  xxx  # set the gain for a DRV8711, leave at default if you do not know what this is
# direct register setting... order and codes are chip dependent, values are in 32-bit Hex
motor_driver_control.motor1.reg 00002,981C0,A0000,C000E,E0060
```

An example of config entries is as follows, this sets two advanced drivers, one is a DRV8711 and the other is a TMC2660.

```markdown
motor_driver_control.alpha.enable           true              # alpha (X) is a TMC26X
motor_driver_control.alpha.axis             X                 # A to set the settings
motor_driver_control.alpha.chip             TMC2660           # chip name
motor_driver_control.alpha.current          1500              # current in milliamps
motor_driver_control.alpha.max_current      2800              # max current in milliamps
motor_driver_control.alpha.microsteps       64                # microsteps
motor_driver_control.alpha.alarm            true              # set to true means the error bits are checked
motor_driver_control.alpha.halt_on_alarm    false             # if set to true means ON_HALT is entered on any error bits being set

motor_driver_control.alpha.spi_channel       1                # SPI channel 1 is sdcard channel
motor_driver_control.alpha.spi_cs_pin        0.10             # SPI CS pin
#motor_driver_control.alpha.spi_frequency     100000          # SPI frequency

motor_driver_control.beta.enable           true              # beta (Y) is a DRV8711
motor_driver_control.beta.axis             Y                 # Y to set the settings
motor_driver_control.beta.chip             DRV8711           # chip name
motor_driver_control.beta.current          4000              # current in milliamps
motor_driver_control.beta.max_current      4000              # max current in milliamps
motor_driver_control.beta.microsteps       64                # microsteps
motor_driver_control.beta.alarm            true              # set to true means the error bits are checked
motor_driver_control.beta.halt_on_alarm    false             # if set to true means ON_HALT is entered on any error bits being set
motor_driver_control.beta.spi_channel       1                # SPI channel 1 is sdcard channel
motor_driver_control.beta.spi_cs_pin        0.19!            # SPI CS pin DRV8711 requires inverted CS
#motor_driver_control.beta.spi_frequency     100000          # SPI frequency
```

**NOTE:** The step and dir must be driven via the step and dir pins and cannot be driven over the SPI interface.

They are configured as normal, for example...

```markdown
alpha_step_pin                               2.0              # Pin for alpha stepper step signal
alpha_dir_pin                                0.5              # Pin for alpha stepper direction
```

{::nomarkdown}
## M code settings

Many settings can be made on the fly with M codes, many of these are specific to certain chips:

- <mcode>M906</mcode> Xnnn change current to nnn in milliamps for motor designator X

- <mcode>M909</mcode> Ynn set microstepping for motor designator Y to 1/nn

- M909.1 Xnnn set microstepping and also change steps/mm accordingly

- <mcode>M911</mcode> will dump all the registers and status of all the motors

- M911.1 Pn (or `X0`) will dump the registers and status of the selected motor. `R0` will request format in processing machine-readable format

- M911.2 Pn (or `Y0`) `Rxxx Vyyy` sets Register xxx to value yyy for motor nnn, xxx == 255 writes the registers, xxx == 0 shows what registers are mapped to what

- M911.3 Pn (or `X0`) will set the options based on the parameters passed as below...
{:/nomarkdown}
  - TMC2660 (& TMC2130 NOT IN EDGE BUILD YET):
    - `M911.3 Onnn Qnnn` set StallGuard Threshold O=stall_guard_threshold, Q=stall_guard_filter_enabled
    - `M911.3 Hnnn Innn Jnnn Knnn Lnnn` set CoolStep Configuration H=lower_SG_threshold, I=SG_hysteresis, J=current_decrement_step_size, K=current_increment_step_size, L=lower_current_limit
    - `M911.3 S0 Unnn Vnnn Wnnn Xnnn Ynnn` set ConstantOffTimeChopper  U=constant_off_time, V=blank_time, W=fast_decay_time_setting, X=sine_wave_offset, Y=use_current_comparator
    - `M911.3 S1 Unnn Vnnn Wnnn Xnnn Ynnn` set SpreadCycleChopper  U=constant_off_time, V=blank_time, W=hysteresis_start, X=hysteresis_end, Y=hysteresis_decrement
    - `M911.3 S2 Zn` set RandomOffTime Z=on|off Z1 is on Z0 is off
    - `M911.3 S3 Zn` set DoubleEdge Z=on|off Z1 is on Z0 is off
    - `M911.3 S4 Zn` set StepInterpolation Z=on|off Z1 is on Z0 is off
    - `M911.3 S5 Zn` set CoolStepEnabled Z=on|off Z1 is on Z0 is off
  - TMC2130: **(NOT IN EDGE BUILD YET)**.
    - `M911.3 S6 Zn` set StealthChopEnabled Z=on|off Z1 is on Z0 is off
    - `M911.3 S7 Unnn Vnnn Wnnn Xnnn Ynnn Znnn` set StealthChop U=freewheel, V=symmetric, W=autoscale, X=freq, Y=grad, Z=ampl
    - `M911.3 S8 Zn` set StealthChopThreshold Z=StealthChopThreshold
    - `M911.3 S9 Zn` set CoolstepThreshold Z=CoolStepThreshold
    - `M911.3 S10 Unnn Vnnn Wnnn` set ConstantOffTimeThreshold U=threshold, V=vhighchm, W=vhighfs
    - `M911.3 S11 Znnn` set sense resistor value Z=sense resistor value in milliohm
    - `M911.3 S12 Znnn` set hold current value Z=holding current as a percentage of run current(0-100)
    - `M911.3 S13 Znnn` set hold delay value Z=holding delay value
    - `M911.3 S14 Znnn` set power down delay value Z=power down delay value
    - `M911.3 S15 Unnn Vnnn Wnnn Xnnn` set GeneralConfiguration U=i_scale_analog, V=internal_rsense, W=shaft, X=small_hysteresis
    - `M911.3 S16 Un Vn Wn Xn` set Diag0options U=error, V=otpw, W=stall, X=pushpull
    - `M911.3 S17 Un Vn Wn Xn` set Diag1options U=stall, V=index, W=onstate, X=pushpull
- DRV8711: has none at the moment, just set the raw register.

{::nomarkdown}
These are saved with <mcode>M500</mcode> and override anything set in config.
{:/nomarkdown}
