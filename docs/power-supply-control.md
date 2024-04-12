
# Power Supply Control

Here is how to control an ATX power supply's ON/OFF signal from a bare pin connected to the PS_ON signal, so that your board can tell it to turn off when needed:

```markdown
switch.psu.enable                            true             # turn atx on/off
switch.psu.input_on_command                  M80              #
switch.psu.input_off_command                 M81              #
switch.psu.output_pin                        0.25o!           # open drain, inverted
switch.psu.output_type                       digital          # on/off only
switch.psu.failsafe_set_to                   1                # so the ATX turns off on a system crash
#switch.psu.ignore_on_halt                    true             # so the ATX does not turn off on a HALT condition (like limit trigger)
                                                               # However leave commented or set to false if you want the ATX to turn off for an over heat fault condition
```

Note: this uses the PSON pin on the power supply, which should be open-drain, thus the `o` in `0.25o!`.

Here is how to control an ATX power supply's ON/OFF signal from a small mosfet connected to the PS_ON signal, or to an SSR which powers the non ATX PSU:

```markdown
switch.psu.enable                            true             # turn atx on/off
switch.psu.input_on_command                  M80              #
switch.psu.input_off_command                 M81              #
switch.psu.output_pin                        2.4              # small mosfet (NB not inverted)
switch.psu.output_type                       digital          # on/off only
#switch.psu.ignore_on_halt                    true             # so the PSU does not turn off on a HALT condition (like limit trigger)
                                                               # However leave commented or set to false if you want the PSU to turn off for an over heat fault condition
```
