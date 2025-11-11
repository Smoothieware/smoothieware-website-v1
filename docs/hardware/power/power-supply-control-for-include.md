# Power Supply Control

This page describes how to control your power supply's ON/OFF signal from Smoothie using the Switch module.

This allows your board to automatically turn the power supply on or off when needed, such as at the start or end of a job.

---

## Method 1: Direct Connection to ATX PS_ON

{::nomarkdown}
Here is how to control an ATX power supply's ON/OFF signal from a bare pin connected to the PS_ON signal:
{:/nomarkdown}

```gcode
switch.psu.enable                            true             # turn atx on/off
switch.psu.input_on_command                  M80              # command to turn on
switch.psu.input_off_command                 M81              # command to turn off
switch.psu.output_pin                        0.25o!           # open drain, inverted
switch.psu.output_type                       digital          # on/off only
switch.psu.failsafe_set_to                   1                # so the ATX turns off on a system crash
#switch.psu.ignore_on_halt                    true             # so the ATX does not turn off on a HALT condition (like limit trigger)
                                                               # However leave commented or set to false if you want the ATX to turn off for an over heat fault condition
```

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  <strong>Note:</strong> This uses the PSON pin on the power supply, which should be open-drain, thus the <code>o</code> in <code><pin>0.25o!</pin></code>.
</sl-alert>
{:/nomarkdown}

---

## Method 2: Using a MOSFET or SSR

{::nomarkdown}
Here is how to control an ATX power supply's ON/OFF signal from a small MOSFET connected to the PS_ON signal, or to an SSR which powers a non-ATX PSU:
{:/nomarkdown}

```gcode
switch.psu.enable                            true             # turn atx on/off
switch.psu.input_on_command                  M80              # command to turn on
switch.psu.input_off_command                 M81              # command to turn off
switch.psu.output_pin                        2.4              # small mosfet (NB not inverted)
switch.psu.output_type                       digital          # on/off only
#switch.psu.ignore_on_halt                    true             # so the PSU does not turn off on a HALT condition (like limit trigger)
                                                               # However leave commented or set to false if you want the PSU to turn off for an over heat fault condition
```

{::nomarkdown}
<sl-alert variant="primary" open>
  <sl-icon slot="icon" name="lightbulb"></sl-icon>
  <strong>Tip:</strong> When using a MOSFET, note that the pin is NOT inverted (no <code>!</code> after the pin number), unlike the direct connection method.
</sl-alert>
{:/nomarkdown}

---

{::nomarkdown}
## G-code Commands

Once configured, you can control your power supply with these commands:

| Command | Function |
| ------- | -------- |
| <mcode>M80</mcode> | Turn power supply ON |
| <mcode>M81</mcode> | Turn power supply OFF |
{:/nomarkdown}

---

## Safety Considerations

### Failsafe Behavior

The `failsafe_set_to` parameter ensures that if Smoothie crashes, the power supply will turn off automatically.

This is a critical safety feature.

### Halt Behavior

The `ignore_on_halt` parameter determines whether the power supply should turn off when Smoothie enters a HALT condition (such as when a limit switch is triggered).

**Options:**

- **Commented out or set to false** - Power supply will turn off on HALT conditions, including overheat faults (recommended for safety)
- **Set to true** - Power supply stays on during HALT conditions from limit switches, but this may prevent automatic shutdown during dangerous conditions

---

## Further Reading

- [Switch module documentation](switch)
- [M80 and M81 G-codes](supported-g-codes)
- [Pinout information](pinout)
- [Configuration guide](configuring-smoothie)
