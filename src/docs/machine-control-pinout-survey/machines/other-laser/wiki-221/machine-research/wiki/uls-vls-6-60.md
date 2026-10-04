# Universal Laser Systems VLS6.60

**Evidence depth:** catalogue identity plus a current manufacturer platform guide that explicitly includes discontinued VLS6.60. It documents optional Automation Interface behavior, not the internal wiring of a specific local machine.

## Wiki-supported identity and facts

The Appropedia wiki names the Universal Laser Systems VLS6.60 as a laser-cutter example. ULS's [VLS Platform User Guide, version 2020.09.01022](https://www.ulsinc.com/assets/pdf/vls_platform_user_guide.pdf) explicitly says it also covers discontinued models VLS3.60, VLS4.60 and VLS6.60.

## Use, visuals, and electrical connections

The catalogue row still does not establish a particular VLS6.60 installation or its installed option cards. The manufacturer guide describes an optional Automation Interface board that is detected at power-up, connects by an included patch cable to a rear accessory port, and has `PWR/COM IN` on an RJ9 connector.

| Optional interface | Source-described connector/function | Electrical limits stated in the guide | Contact map |
|---|---|---|---|
| Automation Interface J2 | Six programmable inputs trigger configured laser functions. | Apply 5–24 V DC; pulse high for more than 5 ms. Manual says no series current-limiting resistor is required at these inputs. | Superseded by the visible J2 pin labels transcribed from the manufacturer diagram in the 2026-09-29 addendum below. |
| Automation Interface J6 | Two programmable status outputs; board switch selects PNP or NPN mode. | User supplies current-limiting resistors; limit output current to 25 mA or less and voltage to 32 V DC maximum. | Superseded by the visible J6 pin labels transcribed from the manufacturer diagram in the 2026-09-29 addendum below. |
| Board PWR/COM IN | RJ9 connection from the included patch cable, whose other end plugs into either rear machine accessory port. | No RJ9 contact assignment or supply rating transcribed here. | Unknown. |

The manual warns that ULS does not authorize or support third-party safety devices through the Automation Interface; output ports are for status information, not to drive external devices. Treat all these as an optional-board reference, not base-machine wiring or safety-rated I/O. The J2/J6/J5/J8 connector labels were transcribed from the rendered original manufacturer-manual diagrams; no undocumented net/function is inferred.

## Source

- [Tolocar / Open Source Machine Tools — Appropedia wiki](https://www.appropedia.org/Open_Source_Machine_Tools) — machine catalogue entry.
- [ULS VLS Platform User Guide, version 2020.09.01022](https://www.ulsinc.com/assets/pdf/vls_platform_user_guide.pdf) — manufacturer says it covers VLS6.60 and documents the optional Automation Interface (sections on pages 77–80 of the PDF).

**Unknowns:** local machine serial/generation, installed laser cartridge, controller and option-board revisions, exact J2/J6/RJ9 contact numbers, and any installed external automation wiring.


## Manufacturer diagram contact transcription · 2026-09-29

The official [ULS VLS Platform User Guide v2020.09.01022](https://www.ulsinc.com/assets/pdf/vls_platform_user_guide.pdf), which explicitly covers discontinued VLS6.60, renders the optional Automation Interface diagrams with readable position labels. The targeted selected SVG and linked contact schedule now show all 18 individually marked positions on J2, J6, J5 and J8. These are option-board reference contacts, not proof that the catalogue machine has the board or that any VLS-to-SmoothieBox harness exists. Every position remains OPEN to SmoothieBox.

| Connector | Position | Source marking / meaning | Evidence limits | Route |
|---|---:|---|---|---|
| Optional ULS Automation Interface · J2 programmable inputs | 1 | INPUT 1 | Universal Laser Systems VLS Platform User Guide v2020.09.01022, printed pp. 78–79; optional Automation Interface board-reference contact label. Manual states six programmable inputs; configured laser action is user-selected and not established for this machine. | OPEN |
| Optional ULS Automation Interface · J2 programmable inputs | 2 | INPUT 2 | Universal Laser Systems VLS Platform User Guide v2020.09.01022, printed pp. 78–79; optional Automation Interface board-reference contact label. Manual states six programmable inputs; configured laser action is user-selected and not established for this machine. | OPEN |
| Optional ULS Automation Interface · J2 programmable inputs | 3 | INPUT 3 | Universal Laser Systems VLS Platform User Guide v2020.09.01022, printed pp. 78–79; optional Automation Interface board-reference contact label. Manual states six programmable inputs; configured laser action is user-selected and not established for this machine. | OPEN |
| Optional ULS Automation Interface · J2 programmable inputs | 4 | I/O GND | Universal Laser Systems VLS Platform User Guide v2020.09.01022, printed pp. 78–79; optional Automation Interface board-reference contact label. The manual diagram labels J2 pin 4 I/O GND; local board wiring is not established. | OPEN |
| Optional ULS Automation Interface · J2 programmable inputs | 5 | INPUT 4 | Universal Laser Systems VLS Platform User Guide v2020.09.01022, printed pp. 78–79; optional Automation Interface board-reference contact label. Manual states six programmable inputs; configured laser action is user-selected and not established for this machine. | OPEN |
| Optional ULS Automation Interface · J2 programmable inputs | 6 | INPUT 5 | Universal Laser Systems VLS Platform User Guide v2020.09.01022, printed pp. 78–79; optional Automation Interface board-reference contact label. Manual states six programmable inputs; configured laser action is user-selected and not established for this machine. | OPEN |
| Optional ULS Automation Interface · J2 programmable inputs | 7 | INPUT 6 | Universal Laser Systems VLS Platform User Guide v2020.09.01022, printed pp. 78–79; optional Automation Interface board-reference contact label. Manual states six programmable inputs; configured laser action is user-selected and not established for this machine. | OPEN |
| Optional ULS Automation Interface · J2 programmable inputs | 8 | I/O GND | Universal Laser Systems VLS Platform User Guide v2020.09.01022, printed pp. 78–79; optional Automation Interface board-reference contact label. The manual diagram labels J2 pin 8 I/O GND; local board wiring is not established. | OPEN |
| Optional ULS Automation Interface · J6 programmable status outputs | 1 | PNP POWER | Universal Laser Systems VLS Platform User Guide v2020.09.01022, printed pp. 78–79; optional Automation Interface board-reference contact label. Diagram note says do not connect J6-1 when the board is in NPN mode. Fitted mode unknown. | OPEN |
| Optional ULS Automation Interface · J6 programmable status outputs | 2 | I/O GND | Universal Laser Systems VLS Platform User Guide v2020.09.01022, printed pp. 78–79; optional Automation Interface board-reference contact label. Diagram notes output I/O GND also connects to input I/O GND on the option board. | OPEN |
| Optional ULS Automation Interface · J6 programmable status outputs | 3 | OUTPUT 1 | Universal Laser Systems VLS Platform User Guide v2020.09.01022, printed pp. 78–79; optional Automation Interface board-reference contact label. One of two programmable status outputs; configured event unknown. | OPEN |
| Optional ULS Automation Interface · J6 programmable status outputs | 4 | OUTPUT 2 | Universal Laser Systems VLS Platform User Guide v2020.09.01022, printed pp. 78–79; optional Automation Interface board-reference contact label. One of two programmable status outputs; configured event unknown. | OPEN |
| Optional ULS Automation Interface · J5 reserved connector | 1 | FUTURE USE · DO NOT USE | Universal Laser Systems VLS Platform User Guide v2020.09.01022, printed pp. 78–79; optional Automation Interface board-reference contact label. Board illustration explicitly marks J5-1 through J5-4 FUTURE USE, DO NOT USE. | OPEN |
| Optional ULS Automation Interface · J5 reserved connector | 2 | FUTURE USE · DO NOT USE | Universal Laser Systems VLS Platform User Guide v2020.09.01022, printed pp. 78–79; optional Automation Interface board-reference contact label. Board illustration explicitly marks J5-1 through J5-4 FUTURE USE, DO NOT USE. | OPEN |
| Optional ULS Automation Interface · J5 reserved connector | 3 | FUTURE USE · DO NOT USE | Universal Laser Systems VLS Platform User Guide v2020.09.01022, printed pp. 78–79; optional Automation Interface board-reference contact label. Board illustration explicitly marks J5-1 through J5-4 FUTURE USE, DO NOT USE. | OPEN |
| Optional ULS Automation Interface · J5 reserved connector | 4 | FUTURE USE · DO NOT USE | Universal Laser Systems VLS Platform User Guide v2020.09.01022, printed pp. 78–79; optional Automation Interface board-reference contact label. Board illustration explicitly marks J5-1 through J5-4 FUTURE USE, DO NOT USE. | OPEN |
| Optional ULS Automation Interface · J8 positions | 1 | Function unspecified · printed J8 pin 1 mark | Universal Laser Systems VLS Platform User Guide v2020.09.01022, printed pp. 78–79; optional Automation Interface board-reference contact label. J8 pin-number mark only; no connector function or electrical assignment in guide. | OPEN |
| Optional ULS Automation Interface · J8 positions | 2 | Function unspecified · printed J8 pin 2 mark | Universal Laser Systems VLS Platform User Guide v2020.09.01022, printed pp. 78–79; optional Automation Interface board-reference contact label. J8 pin-number mark only; no connector function or electrical assignment in guide. | OPEN |

J2 pin map: 1 INPUT1; 2 INPUT2; 3 INPUT3; 4 I/O GND; 5 INPUT4; 6 INPUT5; 7 INPUT6; 8 I/O GND. The six input actions are programmable; the manual lists available actions separately and does not identify this machine’s configured action per input. It specifies 5–24 V DC stimulus and a pulse longer than 5 ms; this does not establish a SmoothieBox signal match.

J6 pin map: 1 PNP POWER; 2 I/O GND; 3 OUTPUT1; 4 OUTPUT2. The board selects PNP/open-collector or NPN mode; J6-1 is not connected in NPN mode. Outputs report programmable status and the manufacturer says they are not intended to drive external devices or support third-party safety devices. No status events are assigned to the local machine.

J5-1 through J5-4 are explicitly labelled FUTURE USE, DO NOT USE. J8 is shown with positions 1 and 2 but no functions are supplied. RJ9 PWR/COM IN, board-marked PWR/COM OUT and VLS rear accessory ports remain separately listed with no contact schedule. No mating-face orientation, fitted-option proof or electrical route to SmoothieBox is claimed.
