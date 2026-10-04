# Universal Laser Systems VLS6.60

**Evidence depth:** catalogue identity plus a current manufacturer platform guide that explicitly includes discontinued VLS6.60. It documents optional Automation Interface behavior, not the internal wiring of a specific local machine.

## Wiki-supported identity and facts

The Appropedia wiki names the Universal Laser Systems VLS6.60 as a laser-cutter example. ULS's [VLS Platform User Guide, version 2020.09.01022](https://www.ulsinc.com/assets/pdf/vls_platform_user_guide.pdf) explicitly says it also covers discontinued models VLS3.60, VLS4.60 and VLS6.60.

## Use, visuals, and electrical connections

The catalogue row still does not establish a particular VLS6.60 installation or its installed option cards. The manufacturer guide describes an optional Automation Interface board that is detected at power-up, connects by an included patch cable to a rear accessory port, and has `PWR/COM IN` on an RJ9 connector.

| Optional interface | Source-described connector/function | Electrical limits stated in the guide | Contact map |
|---|---|---|---|
| Automation Interface J2 | Six programmable inputs trigger configured laser functions. | Apply 5–24 V DC; pulse high for more than 5 ms. Manual says no series current-limiting resistor is required at these inputs. | Exact J2 contact numbering/order not transcribed; retain as unknown. |
| Automation Interface J6 | Two programmable status outputs; board switch selects PNP or NPN mode. | User supplies current-limiting resistors; limit output current to 25 mA or less and voltage to 32 V DC maximum. | Exact J6 contact numbering/order not transcribed; retain as unknown. |
| Board PWR/COM IN | RJ9 connection from the included patch cable, whose other end plugs into either rear machine accessory port. | No RJ9 contact assignment or supply rating transcribed here. | Unknown. |

The manual warns that ULS does not authorize or support third-party safety devices through the Automation Interface; output ports are for status information, not to drive external devices. Treat all these as an optional-board reference, not base-machine wiring or safety-rated I/O. The guide's diagrams contain contact details not recoverable in the accessible text, so they are not reconstructed by inference.

## Source

- [Tolocar / Open Source Machine Tools — Appropedia wiki](https://www.appropedia.org/Open_Source_Machine_Tools) — machine catalogue entry.
- [ULS VLS Platform User Guide, version 2020.09.01022](https://www.ulsinc.com/assets/pdf/vls_platform_user_guide.pdf) — manufacturer says it covers VLS6.60 and documents the optional Automation Interface (sections on pages 77–80 of the PDF).

**Unknowns:** local machine serial/generation, installed laser cartridge, controller and option-board revisions, exact J2/J6/RJ9 contact numbers, and any installed external automation wiring.
