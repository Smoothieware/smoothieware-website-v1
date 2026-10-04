# Sienci SLB-EXT machine peripheral pinout

Checked: 2026-09-27. Atlas profiles: `base-29` (AltMill + SLB-EXT) and `base-30` (closed-loop LongMill + SLB-EXT).

## Source scope

The pinout is the Sienci SLB-EXT B9 source reference, not proof that a particular unit has that board revision or every listed optional connector populated. The official SLB/SLB-EXT Technical Manual is dated 2024-04-03. The B9 schematic identifies the board as the Sienci AltMill 32-bit controller, Rev B9, dated 2024-06-09. The connector list is used for connector families and quantities; signal names and pin orders are taken from the official manual and annotated pinout. No LongBoard MK2 pin assignment is transferred.

## External motor drivers

The SLB-EXT uses external drivers. Sienci describes the AltMill drivers as integrated with the motors; its LongMill closed-loop upgrade includes four motors, four inductive sensors, and an SLB-EXT. The motor-driver signal contract shown for the SLB-EXT is differential: `S+` / `S−` for step/pulse, `D+` / `D−` for direction, `E+` (5 V) / `E−` for enable, and `AL+(GD)` / `AL−` for the driver alarm. These are driver-side signal functions, not a numbered or oriented motor plug drawing.

The SLB-EXT’s five 2×4 motor signal headers are controller outputs labelled for `X`, `Y1`, `Y2`, `Z`, and `A`; each header lists `AL−, GD, E−, 5V, D−, D+, S−, S+`. The board also has five separate two-position motor power outputs, each labelled `GND` and `+48 VDC`. They remain separate from the SmoothieBox logic diagram: the SLB-EXT output header is not a passive input and must not be wired in parallel with SmoothieBox outputs. The driver-side contacts are the possible machine endpoints after the SLB-EXT signal cables are disconnected.

The dotted STEP/DIR routes in the two diagrams are functional guesses that require a compatible differential line-driver interface between SmoothieBox’s single-ended STEP/DIR/GND outputs and the motor’s differential driver inputs. They are not direct wires. The SmoothieBox’s output level, interface conversion, polarity, pulse timing, isolation, grounding, input current, and fitted motor/driver revision must all be checked before selecting hardware. `ENABLE`, alarm, and driver-ground paths remain open because the available evidence does not establish a safe, compatible connection for them.

For the closed-loop LongMill’s two Y motors, each motor has its own driver input. The diagram shows a dotted shared STEP/DIR fan-out from SmoothieBox Y to the Y1 and Y2 differential inputs only as a candidate that requires separate buffering/line-driver channels, load validation, and a control configuration that gives up independent Y1/Y2 homing. The LongMill source documents independent Y1/Y2 homing; SmoothieBox’s single Y STEP/DIR bank does not reproduce that behavior.

## Endstops, probe, spindle, and safety

The manual gives the seven-position green limits order as `VCC, X, Y1, Y2, Z, A, GND`, and the six four-position white JST headers (X/Y1/Y2/Z/A/Door) as `VCC, GND, N/A, LIM`, top-to-bottom. The default VCC is 5 V but can be changed to 24 V by board resistor modification. The pin inventory is therefore shown as source-reference connectors and has no VCC or limit routes to the former controller. The exact sensors, polarity, installed resistor configuration, homing side, and machine harness are not established for each profile.

The source identifies Touch Plate (`GND`, `PROBE`), laser (`EN`, `PW`, `GND`), Tool Length Sensor (`+5 V`, `TLS`, `GND`), and five-pin spindle (`GND`, `PWM`, `DIR`, `EN`, `SPEED`) groups. Their presence on the controller is not evidence of a fitted touch plate, TLS, laser, or particular spindle/VFD. No spindle power or VFD control route is selected. Keep the safety-sensitive seven-position E-stop/action-button connector fully open; do not bypass or replace the E-stop chain.

The remaining shown connectors preserve source-labelled contacts where the official drawing names them. Count-only positions are labelled OPEN and do not acquire guessed functions. Pins whose source names a connector but gives no individual function are retained as `Function not established`; `OPEN` is not treated as source NC.

## Sources

- Sienci, [SLB/SLB-EXT Technical Manual](https://resources.sienci.com/view/slb-manual/?print=print), current online manual, dated 2024-04-03.
- Sienci, [SLB-EXT pinout list](https://sienci.com/wp-content/uploads/2025/09/slb-ext-Pinout-list.pdf), annotated board pinout; the same official pinout is also linked from Sienci Resources; local capture SHA-256 `765bd070c962b2fe4b8c553bf7c756d5834b77b5cb6c8dbf588a50a9e72824ab`.
- Sienci, [SLB-EXT connector list](https://sienci.com/wp-content/uploads/2025/09/SLB-EXT-Connector-List.pdf), local capture SHA-256 `67e48043f008c3ec858c6aaa4bbe50bd7aa48eef019d914fdb9700cc56483e3d`.
- Sienci, [SLB-EXT Rev B9 schematic](https://sienci.com/wp-content/uploads/2025/09/Longboard_32bit_ext_Schematic_B9_FULL_PLACE-9-1.pdf), local capture SHA-256 `8a8a9f7057771815b7cd516519ee978aaf6d99638affca5378d1f0504ae2d07f`.
- Sienci, [closed-loop motor installation](https://resources.sienci.com/view/vx-closed-loop-motor/?print=print).
- Sienci, [closed-loop LongMill upgrade guide](https://resources.sienci.com/view/addons-closed-loop-steppers/), kit and X/Y1/Y2/Z motor/sensor configuration.
- Sienci, [AltMill 4×8 open-source controller notes](https://resources.sienci.com/view/am4x8-open-source/?print=print), describing buffered differential step/direction outputs for external motor drivers.

Live sources checked 2026-09-27. The selected captures and source references are family/controller evidence; installed board and harness revisions remain unverified.
