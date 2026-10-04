# RepRapPro Huxley

## Identity

RepRapPro Huxley is the RepRapPro-specific Huxley implementation. Its wiki explicitly supplies a complete build, wiring, commissioning, printing and maintenance guide set. Do not merge its wiring with other Huxley builds.

## Wiki evidence

- [RepRapPro Huxley](https://www.reprap.org/wiki/RepRapPro_Huxley): model-specific frame/axis assembly and wiring navigation.
- [RepRapPro Huxley printing](https://wiki.reprap.org/wiki/RepRapPro_Huxley_printing): slicer workflow, print-start sequence, filament change and operation.

## Operation

The wiki recommends starting with the machine's tuned PLA/ABS profiles. It describes preparing STL to G-code in Slic3r/Pronterface, copying G-code to microSD, selecting SD Print, homing X/Y/Z, heating the nozzle and laying down an outline before the part. It cautions that USB printing can be interrupted by host scheduling or electrical noise.

## Wiring and diagram status

The archived RepRapPro manufacturer guide has a dedicated wiring section for the pictured Melzi build. Its source-scoped machine-side contact positions are transcribed below, including the bed-control contact at the Melzi expansion header. They describe that illustrated kit and controller context, not every RepRapPro Huxley revision or the installed wiring of another printer. Motor conductor sequences conflict with some community Huxley sources; do not normalize them into one generic Huxley order. The guide identifies 41 source contact positions across the shown peripheral leads and connector marks; the Melzi expansion-header contact is relative-positioned, not numbered. It does not provide a full pin schedule for each Melzi header, state the exact cavities inside the HOTBED, FAN, HOTEND, ETEMP and BTEMP controller connectors, or establish a SmoothieBox electrical interface or motor mating-face orientation.

| Pictured interface | Manufacturer-guide contact or position | Guide-described role |
|---|---|---|
| 19 V power plug | Pin 1; pin 2; pin 3 | Pins 1 and 2: 0 V returns for the board and heated bed; pin 3: +19 V. These are plug pins in the guide image, not SmoothieBox terminals. |
| Heated-bed power screw strip | Left; middle; right | Left unused; middle 0 V/GND; right +19 V. |
| Heated-bed 4-way control header | 1; 2; 3; 4, counted from board edge | 1 unused/bed-levelling reserve; 2 bed MOSFET control; 3 thermistor signal; 4 thermistor signal/ground. The guide says only positions 2–4 are used. |
| X, Y, extruder and Z motor connections to pictured Melzi | Four left-to-right conductor positions per motor | Each is Black, Green, Blue, Red at its named Melzi motor connector. The guide says the two Z motors are in series; it does not assign an independent four-contact Z-motor plug for each. This is conductor order, not an A+/A−/B+/B− polarity claim. |
| X, Y and Z endstop switches | Two outer switch terminals per axis | The guide uses the normally closed contact pair and says each pair has no polarity; terminal cavity numbers and COM/NC side order are not specified. |
| Hotend assembly | Heater pair; thermistor pair; fan positive/red and negative/black | Heater and thermistor pairs are unpolarized in the guide. Its hotend fan connects to the 19 V input, not the connector marked FAN on the Melzi. No ribbon-cable conductor numbers are supplied. |

| Melzi expansion header | Top row, second position from the left | Heated-bed MOSFET control signal from bed-header position 2. The guide gives this relative location, not a connector cavity number or complete expansion-header pinout. |

These are reference marks only. The power plug, heated-bed supply, heater, and fan require their own rated power and protection design; no direct carrier path is inferred from matching signal names.

- [RepRapPro Huxley wiring guide](https://reprapltd.com/reprappro/documentation/huxley/wiring/index.html) — manufacturer-authored archived wiring guide, pictured Melzi build scope.
- [RepRapPro Huxley guide index](https://reprapltd.com/reprappro/documentation/huxley/index.html) — archived build documentation.

Keep these sources separate from the community-designed [RepRap Huxley](huxley-reprap.md) dossier and from any specific local machine unless its installed board/build is matched to this guide.

## Safety and limits

The wiki instructs builders to read the complete build instructions before assembly. Temperatures and wiring must be matched to the installed hotend, bed and Melzi revision.
