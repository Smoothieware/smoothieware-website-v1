# T-962 solder reflow oven — Bristol Hackspace

**Wiki evidence status:** exact local T-962, modification description and operator procedure. The linked firmware repository supplies additional revision-bounded controller details, but the local board and flashed commit are not identified.

## Identity and configuration

Bristol Hackspace identifies this as a T-962 solder reflow oven and gives an effective soldering area of 180 × 235 mm. Its local unit differs from an untouched factory configuration: the cardboard insulation was removed and replaced with aluminium tape, a cold-junction temperature sensor was added, and the firmware was flashed. The wiki links the [UnifiedEngineering T-962 improvements repository](https://github.com/UnifiedEngineering/T-962-improvements). That project says it uses the existing controller hardware, adds cold-junction compensation, and tests mainly on a relatively recent small T-962 whose back-panel build-time text was read as `14.07` (interpreted by the project author as possibly July 2014). It identifies the project's sample controller as LPC2134/01, while warning that variants exist. The local wiki does not state that this exact board or a particular repository revision was installed.

## Operation

The local instructions say to place the oven on a heat-proof mat, power it on, and put the PCB on the rack. Press F4 to open profile selection, use F1/F2 to select a profile, press S to choose it, then press S to start. Manual mode opens with F3; F1/F2 set temperature, F3/F4 set a timer, and the countdown begins after preheating. When the timer expires, the oven begins cooling.

## Electrical connections and diagrams

The linked firmware project describes a board-level cold-junction-sensor modification: a DS18B20 data (`Dq`) lead is jumpered to the controller's `GPIO0.7` pad, with a 4.7 kΩ pull-up using an adjacent 3.3 V pad. It also says the spare `ADO` test point is used to control system-fan PWM. These are test-pad/component relationships in that project, not external machine connector pins. The project text's supply sentence says both the sensor `Vcc` and ground pins are soldered to the ground plane, which is electrically ambiguous; do not turn that sentence into a wiring instruction without the exact schematic and board version.

The repo contains `schematic-T962.pdf`, but the Bristol wiki does not identify its installed board revision or flashed commit. The local page gives no external connector map, thermocouple terminal assignments, mains wiring diagram or confirmation that the added sensor follows the repository's exact circuit. No generic T-962 pinout is inferred from this one modification project.

| Source-described node | Assignment | Evidence boundary |
|---|---|---|
| Controller pad `GPIO0.7` | Connected by jumper wire to DS18B20 `Dq` in the linked cold-junction-compensation project. | Controller-pad role for that project's board only; not an oven connector contact. |
| Adjacent 3.3 V pad | Used to supply a 4.7 kΩ pull-up for the `Dq` signal. | Board-test-pad circuit described by project author; exact local modification not electrically verified. |
| Test point `ADO` | Used by project firmware for system-fan PWM. | Project-specific firmware/board function, not a machine terminal. |
| Sensor `Vcc` and GND | Project prose says both are soldered to ground plane. | Ambiguous source statement; do not reproduce as a wiring connection. |

## Safety

The wiki warns that the PCB and oven underside may remain hot after reflow, including during the cooling phase. Use heat-resistant placement and handle the board only after it has cooled.

## Sources

- [Solder Reflow Oven — T-962](https://wiki.bristolhackspace.org/equipment/electronics/reflow_oven) — exact local machine identity, area, modifications, and controls.
- [UnifiedEngineering/T-962-improvements](https://github.com/UnifiedEngineering/T-962-improvements) — linked custom firmware/hardware mod project; board/sample scope, test-pad roles and its schematic are project-scoped, not proof of the local board revision.
- [Electronics Room inventory](https://wiki.bristolhackspace.org/equipment/electronics/home) — corroborates the machine's listing in the room inventory.

**Unknowns:** exact firmware source revision and build, sensor wiring, controller PCB revision, mains/thermal wiring, and any changes made after the wiki page's last revision.

## Separate external controller schematic reference

A source-revision-scoped [UnifiedEngineering T-962 improvements schematic](https://github.com/UnifiedEngineering/T-962-improvements/blob/master/schematic-T962.pdf) names a four-sheet `T962A_0.2`, `REV 0.2` controller drawing dated 4/3/16 11:54 AM. The drawing is for a T-962A project controller. The Bristol Hackspace page does not identify the installed controller PCB revision or the firmware commit, so this is a **separate project reference peripheral**, not evidence of the board fitted to Bristol's oven. Its numbered connector marks are transcribed individually in the atlas and kept OPEN to SmoothieBox.

The four-sheet schematic contains ten connector groups and 50 numbered source marks: KEYPAD 2.54-6P (6), LCD 2.54-2x10P (20), ISP 2.54-5P (5), 9VAC KK 41791 (2), SYSTEM_FAN XH2.54-2P (2), COOLING_FAN KK 41791 (2), AC220 KK 41791 (3), LEDs XH2.54-4P (4), HEATER XH2.54-2P (2), and THERMOCOUPLES PCB 5.0-4P (4). Sheet 4 instead shows two alternative power-line-fix diagrams; their L1/PE/N/GND and A1-A3/B1-B3 annotations are not merged into the connector inventory. Component pins and unnumbered controller test pads are not connector positions.

No listed pin is assigned to a SmoothieBox contact. The drawing alone does not establish which harnesses or controller revision are installed in Bristol's oven, endpoint compatibility, acceptable signal conditioning, thermocouple input compatibility, isolation, heater/fan control safety, or any mains wiring. Do not use these reference marks as a wiring instruction.

