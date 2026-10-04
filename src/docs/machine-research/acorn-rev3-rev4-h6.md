# Centroid Acorn Rev 3/4 H6 DB25 reference

Research capture: 2026-09-26. Scope: the H6 connector pictured on the Acorn controller in the manufacturer's Rev 3 and Rev 4 specification manuals. This is a controller reference, not a verified machine-side input or an installed SmoothieBox interface.

## Primary sources

- [Centroid Acorn Rev 3 specification manual](https://www.centroidcnc.com/centroid_diy/downloads/acorn_documentation/centroid_acorn_rev3_spec_manual.pdf), PDF page 3 (printed page 3 of 9), downloaded SHA-256 `7b092526fde1405a85c3a358e960e86fa1fcfffe54ed8b038fd53b54246bfa7c`.
- [Centroid Acorn Rev 4 specification manual](https://centroidcnc.com/centroid_diy/downloads/acorn_documentation/centroid_acorn_rev4_spec_manual.pdf), PDF page 3 (printed page 3 of 10), downloaded SHA-256 `ca43487c34442447176b6abca6aad5ffecebae8f9f08338aa1ea04d5b0fb5253`.

The two pictured H6 schedules agree at all 25 numbered positions. Both manuals call H6 a female DB25 and describe its I/O as 5 V compatible. Their separate H2/H3 motor-drive example uses open-collector outputs and must not be conflated with the H6 logic schedule.

## H6 numbered contacts

| Position | Manufacturer label |
|---:|---|
| 1 | Output 1 |
| 2 | Step 1 |
| 3 | Direction 1 |
| 4 | Step 2 |
| 5 | Direction 2 |
| 6 | Step 3 |
| 7 | Direction 3 |
| 8 | Step 4 |
| 9 | Direction 4 |
| 10 | Input 1 |
| 11 | Input 2 |
| 12 | Input 3 |
| 13 | Input 4 |
| 14 | Output 2 |
| 15 | Input 5 |
| 16 | Output 3 |
| 17 | Output 4 |
| 18–25 | 24V COM, a common bus across eight numbered contacts |

The illustrated connector shell is separately marked **Chassis GND**. It is not numbered contact 18, 25, or a proven SmoothieBox signal return. The manuals give a connector illustration; the current machine's mating cable and contact-face view are not established by this atlas record.

## Connection boundary

H6 is an Acorn controller I/O connector. The drawing establishes its own pins, not an existing machine's DB25 receiving input. In particular, connecting a SmoothieBox STEP/DIR output directly to Acorn H6 STEP/DIR outputs would be output-to-output and is not proposed. A machine-specific downstream driver-box pinout and electrical compatibility evidence are required before any candidate SmoothieBox route can be selected.
