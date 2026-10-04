# ulda's Maho MH700 LinuxCNC retrofit

## Machine and retrofit state

LinuxCNC Forum member ulda reports a successful retrofit of a four-axis Maho 700 milling machine. The original 8080 processor control was removed after recurring errors, along with the old Philips glass scales. The owner retained the DC motor amplifiers, installed new glass scales, and rewired the machine to a Motenc-100 motion controller. The electronic gearbox required a custom HAL component and ladder-style state logic using five relays to move the gear-selection motors; ulda notes spindle-motor direction during shifts as a main challenge.

The machine is reported working with four-axis horizontal and vertical milling. In a later reply ulda identifies one Indramat 3TRM2 amplifier for three servos and another for the B/C axis, with ±10 V velocity inputs. The forum report says the industrial display, keyboard, and enclosure work were still planned. The thread does not name a more specific MH700 variant.

## I/O and connector evidence

The source describes high-level control functions and the amplifier's ±10 V velocity interface, but supplies no contact numbers, connector view, terminal assignment, signal voltage/polarity table, or complete wiring schedule. The five-relay gearbox discussion is functional evidence only, not a pinout.

## Forum source

- ulda, [“proudly presenting a Maho MH700 retrofit ..”](https://forum.linuxcnc.org/30-cnc-machines/1529-proudly-presenting-a-maho-mh700-retrofit), LinuxCNC Forum, inspected page 1, posts dated 2010-01-17 through 2010-09-22.
