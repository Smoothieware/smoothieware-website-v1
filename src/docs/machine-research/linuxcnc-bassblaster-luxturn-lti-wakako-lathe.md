# Bassblaster's Luxturn LTI lathe (“Wakako”)

## Machine and retrofit state

LinuxCNC Forum member Bassblaster identifies the machine as a roughly 30-year-old Japanese lathe and calls it “Wakako.” The thread is titled “Luxturn LTI Lathe Retrofit”; the exact model plate, serial number, motor models, and axis travel are not transcribed in the inspected posts.

The owner reports using a Mesa 7i96 Ethernet card with a Dell Optiplex running Debian 10 and LinuxCNC 2.8. Initial X and Z motion was working. A later update says the PNCconf-generated setup had the limit switches and coolant pump working. The owner also retained the original spindle encoder, which they identify as single-ended: it had eight wires, four of which the owner says needed to be grounded. They changed Mesa jumpers according to the 7i96 manual and verified the encoder in HAL Show.

The spindle PWM output initially did not work, including during a test on TB2 pins 1 and 3. After a forum reply suggested the missing HAL connection between the spindle PID output and PWM generator, the owner confirmed that the change worked and “the old lady is spinning up.” The turret tool changer remained unfinished in the inspected discussion. It is described as an eight-station revolver turret with ratchet-like stops and no index switch at that time; a stepgen or the LinuxCNC carousel component was being considered.

## Logical I/O and spindle-control evidence

The owner's posted HAL configuration uses these Mesa 7i96 logical outputs:

| Function in posted HAL | Logical channel |
|---|---|
| Flood coolant | `hm2_7i96.0.ssr.00.out-00` |
| Spindle enable | `hm2_7i96.0.ssr.00.out-01` |
| Spindle clockwise | `hm2_7i96.0.ssr.00.out-02` |
| Spindle counterclockwise | `hm2_7i96.0.ssr.00.out-03` |
| Machine-enabled indicator | `hm2_7i96.0.ssr.00.out-04` |
| General digital output 00 | `hm2_7i96.0.ssr.00.out-05` |
| Spindle encoder | `hm2_7i96.0.encoder.00` |
| Spindle PWM | `hm2_7i96.0.pwmgen.00` |

In the thread, a forum responder suggested enabling `pwmgen.00` from the spindle-enable signal, feeding the spindle PID output to `pwmgen.00.value`, and setting the PWM scale to the machine's maximum RPM. The owner explicitly reports that this change worked. These HAL names identify logical channels; they do not give the corresponding terminal assignments or cable-core mapping. The thread does not publish a complete machine-specific electrical drawing, encoder contact map, limit-switch map, drive-enable circuit, or tool-turret I/O sequence.

## Forum source

- Bassblaster, “[Luxturn LTI Lathe Retrofit](https://forum.linuxcnc.org/26-turning/42686-luxturn-lti-lathe-retrofit),” LinuxCNC Forum, posts dated 2021-05-27 through 2021-05-30. The forum page was inspected directly; configuration code was read from the forum post without running it.
