# schuetzbuilds' MAHO MH600T LinuxCNC retrofit

## Machine and retrofit state

LinuxCNC Forum member schuetzbuilds and his brother identify their machine as a MAHO MH600T originally fitted with a Heidenhain 332 control. The compact control module also contained EXE interfaces; the owners replaced those with three EXE602 modules to read the machine's linear scales. The thread says the C axis was initially ignored.

The owners report using Mesa 5i25, 7i77, and 7i84 hardware with Gmoccapy. By August 2024, the LinuxCNC endstop chain and X/Y/Z linear motion with the Indramat drives were working. They also got the flood-coolant relay and spindle-start functions working after finding that the 7i84 field supply and relay-board 24 V supply were separate and had no common ground. A drawbar function was adapted from the centralized-lubrication component and interlocked against spindle operation.

By September 2024, the owners had added the fourth axis, made a new monitor enclosure, and started writing a Python HAL component for the 18-speed gearbox. They reported that the hydraulic pump was then tripping the machine's stop chain and blocking further testing. The inspected thread page does not report a later resolution or completed commissioning.

## Logical output evidence from the forum-posted HAL

The owner's snippets identify these logical Mesa channels in their configuration:

| Function | HAL channel in the posted snippet |
|---|---|
| Flood-coolant relay | `hm2_5i25.0.7i84.0.2.output-15` |
| Spindle enable relay 1K8 | `hm2_5i25.0.7i84.0.2.output-12` |
| Spindle CW relay 1K9 | `hm2_5i25.0.7i84.0.2.output-13` |
| Spindle CCW relay 1K10 | `hm2_5i25.0.7i84.0.2.output-14` |
| Drawbar open output | `hm2_5i25.0.7i84.0.2.output-03` |
| Drawbar-open switch input | `hm2_5i25.0.7i77.0.0.input-00` |

The owners name relay and logical I/O roles, but the inspected forum text does not establish physical 7i84 terminal-to-channel assignments, field wiring, voltage and polarity at each machine relay, or a full spindle/gearbox circuit. These HAL names are not screw-terminal numbers. The relay common issue is a case-specific owner report about separate 24 V supplies; it should not be generalized into a wiring prescription.

## Forum source

- schuetzbuilds, “[Retrofitting a MAHO MH600T](https://www.forum.linuxcnc.org/12-milling/53592-retrofitting-a-maho-mh600t),” LinuxCNC Forum, inspected page 1, posts dated 2024-08-20 through 2024-09-20.
