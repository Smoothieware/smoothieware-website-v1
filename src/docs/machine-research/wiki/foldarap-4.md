# FoldaRap 4.0

## Identity

FoldaRap 4.0 is a foldable, portable RepRap printer design. The wiki describes several historical generations; this dossier uses the 4.0 entry and does not merge its older 1.0–3.5 variants.

## Wiki evidence

- [RepRap FoldaRap](https://reprap.org/wiki/FoldaRap): design history, variant sections, features, specifications and media.
- [RepRap FoldaRap machine listing](https://reprap.org/wiki/RepRap_Machines): independent index of the design.

## Specifications and operation

The wiki lists a nominal 140 × 140 × 140 mm print area, 21 × 35 cm footprint, approximately 3–4 kg mass, 1.75 mm Bowden/direct-drive arrangement and 40–110 W power. Its described folding frame uses 20 × 20 mm aluminium extrusion. The page links build and user documentation; it says the design is intended for transport and storage.

## Pinout and visuals

No electronics revision-specific pinout was found on the overview. Source images show folded and assembled forms; those are mechanical visuals, not wiring diagrams.

## 4.0 electronics and source-scoped machine interfaces

The maker's repository README identifies version 4.0 as released in winter 2017 and version 3.5 as a separate autumn 2017 release. The wiki's FoldaRap 4.0 notes describe replacing the last NEMA 14 motor with a NEMA 17, external 12 V or 24 V power-supply rear-plate options, an internal-supply option, a front LCD option, and a possible Wi-Fi controller such as Duet. These are design options, not proof of the hardware in a specific machine.

The maker repository includes a bill-of-materials spreadsheet and distinct Minitronics, Melzi, and Duet 2 WiFi firmware configurations. In the spreadsheet's `Item F 4.0` column, the motor entries identify one short NEMA 17 for X and four NEMA 17 motors for Y, two Z positions, and the extruder. The same column identifies two lever microswitches assigned to X and Y sensors, two-pin Dupont leads for X and Y sensors and one fan, an E3D Lite6 hotend, two 30 × 30 × 10 mm fans, and a 100 × 100 mm, 90 W bed-film assembly with a 100 kΩ probe. The wiki describes external 12 V or 24 V rear-plate PSU choices and an internal-supply option. The maker BOM assigns quantity one to an external 12 V 138 W Meanwell PSU; its external 24 V 160 W Meanwell entries have no quantity. A single KPJX-PM-4S panel jack is listed under the rear-plate placement; a shielded KPJX-PM-4S-S version is also listed without a quantity, so its fitment is not established. The Item F 4.0 column also lists one EU power cord, one LCD for Minitronics, and one USB cable, without interface/contact schedules. The spreadsheet does not give a connector-face drawing, motor-coil order, endstop COM/NO/NC selection, individual switch-lead assignment, fan polarity/voltage, hotend/bed terminal order, or a revision-specific contact map.

The repository's alternative Minitronics and Melzi Marlin configurations each declare one extruder, X/Y/Z negative homing, and their temperature-sensor types. A separate Duet 2 WiFi configuration names X/Y/Z/E drives and X/Y low-endstop inputs. The inspected files are `firmware/Marlin-10sep2018_FR4_Minitronics_RRW-LCD/Configuration.h` (SHA-256 `f854ae3b6ea9d0bd6a645f4c27f226b59090ada672575b2e5692fece8d666149`), `firmware/Marlin-25jan2018_FR4_Melzi/Configuration.h` (SHA-256 `db3bcc747b6d2bb62fcaaec69ae5a613b9a4822bb49c3b1a3e63bb1c9875b52a`), and `firmware/Duet2_Wifi/config.g` (SHA-256 `54b66d0a7949240b432d0d7da6069ac66e7aa9e762bb0376bc4ff924caec8388`). These configurations indicate possible controller functions only; they do not establish which controller or firmware is fitted. Do not combine their connector or pin names into a machine-side connector schedule.

### Diagram contact scope

- Show the five listed stepper motors as machine peripherals, while leaving each motor's connector contacts and coil pairs unknown. SmoothieBox MOTOR CONTROL STEP/DIR/ENABLE are driver-side logic outputs; they are not motor-winding terminals, and no external-driver input connector is identified in the inspected FoldaRap 4.0 sources.
- Show the X and Y two-pin sensor harnesses with two individually listed, unnumbered harness positions each. The BOM associates a lead with each axis sensor but does not identify the switch-terminal pair or conductor orientation. Dotted paths to the corresponding SmoothieBox MIN `SIGNAL` and `GND` positions may be shown only as function guesses, based on the source's X/Y sensor assignment and negative-homing configurations. The exact controller fitment, switch COM/NO/NC, harness order, polarity/logic, and electrical compatibility remain unverified; do not connect `SENSOR +`.
- Show the listed fan, hotend, bed-film/100 kΩ probe, EU power cord, Minitronics LCD, and USB cable as source-supported peripherals, but leave unknown contact counts, exact interfaces, and every SmoothieBox route open. Distinguish the BOM-counted external 12 V 138 W PSU from unquantified 24 V 160 W BOM entries and the separate wiki internal-PSU option. The bed's 90 W rating and unknown fitted voltage prohibit presenting it as a direct SmoothieBox load. SmoothieBox BED SWITCH CONTROL is not a bed-heater output: the Chapter 18 source shows its Q3 switch rated 60 V / 0.3 A.
- Show the four Kycon KPJX-PM-4S numbered jack contacts as reference positions with FoldaRap electrical roles OPEN. The manufacturer drawing for the shielded `-S` variant also shows two shield/ground tabs; mark these conditional on that variant, with their FoldaRap connections OPEN. The FoldaRap BOM does not assign any of these contacts to supply polarity or another circuit.
- No inspected source identifies a DB25 connector on FoldaRap 4.0; do not add one.

## Sources checked 2026-09-27

- [RepRap FoldaRap](https://reprap.org/wiki/FoldaRap): generation-specific FoldaRap 4.0 entry, design options, specifications, and separate 3.5/3.0 notes.
- [EmmanuelG/Foldarap maker repository](https://github.com/EmmanuelG/Foldarap): README version history, bill-of-materials spreadsheet, firmware alternatives, and hardware resources. The `F3.0_BOM` worksheet also contains an `Item F 4.0` column; worksheet title alone is not evidence that each row applies to 4.0.
- [Kycon KPJX-PM-4S-S manufacturer drawing](https://www.kycon.com/Pub_Eng_Draw/KPJX-PM-4S-S.pdf): numbered four-contact jack geometry and the two tabs on its shielded variant. It is connector reference data only, not FoldaRap contact-function evidence.
- `/home/arthur/dev/smoothie-box/docs/smoothie-central.html`, Chapter 18: source for the SmoothieBox exterior terminal labels and load-stage limits; it does not identify FoldaRap compatibility.

## Variant caveat

The wiki and maker repository cover several generations and mutually exclusive controller/power configurations. This contact inventory describes the published FoldaRap 4.0 design and alternatives only. Verify the exact machine, fitted controller, PSU, connector housings, and individual contacts before physical wiring.
