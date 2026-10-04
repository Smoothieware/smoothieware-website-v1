# Prusa MK4S — FabLab Region Nürnberg

Research capture: 2026-09-23. The FabLab Region Nürnberg wiki lists three Prusa MK4S printers as part of its FDM service. This dossier records the local inventory statement only; it does not claim three unique models or count the MK4S as a new product family relative to the separate MK4 dossier.

## Wiki-recorded operation

The local 3D-printing page says these printers use 1.75 mm filament and a 0.4 mm nozzle as the FabLab's general FDM setup. Its general guidance requests STEP, STL, or 3MF input and lists FreeCAD, Blender, and OpenSCAD among software used. PLA and PETG are stocked; ABS, TPU, and ASA are not stocked and must be brought by the user. It requires a print form when starting a job and says charges depend on filament consumed, including failed prints. Time limits differ by event: KidsLab jobs are limited to 15 minutes or must start after 17:45; OpenLab jobs are limited to two hours or must start at the end of OpenLab.

The wiki lists three Prusa MK4S units, each with a 250 × 210 × 220 mm build volume. It gives no unit identifiers, firmware versions, machine photos, controller/connector information, maintenance history, or machine-specific startup steps. The 1.75 mm filament and 0.4 mm nozzle values are stated in the shared FabLab printing section rather than a dedicated MK4S spec sheet.

## Pinout and visuals

No electrical pinout or wiring diagram was found in the inspected wiki page. The page embeds a general 3D-printing video, which is not evidence of the three local printers' exact hardware. No local machine photograph or diagram is transcribed here.

## Manufacturer schematic reference (in progress)

Prusa's [open-source electronics page](https://www.prusa3d.com/page/open-source-at-prusa-research_236812/) links the same electronics schematic ZIP for both Original Prusa MK4S and MK4. The captured xBuddy drawing is titled `FDM-MK4-xBuddy`, revision 44, dated 2023-08-31. It is a manufacturer-family reference, not evidence of the control-board revision or installed harnesses in any of the three Nürnberg printers. The Prusa [Accessory connectors (MK4)](https://help.prusa3d.com/article/accessory-connectors-mk4_622345) article is explicitly MK4-only and is not used to assign MK4S contacts.

The xBuddy revision 44 peripherals sheet labels J8 as a 24-position LCD connector, part `9-338069-4`. Its 24 schematic positions are being transcribed individually as OPEN reference contacts. These labels identify the schematic nets at the connector; they do not prove a fitted display, cable, local pin orientation, or connection to a SmoothieBox. The remaining xBuddy, LoveBoard, heatbed, and xLCD sheets are still under review, so this partial inventory is not a complete MK4S machine interface map. The separate xLCD drawing marks P11 `dnf`; it is not treated as an installed connector.

The xBuddy root sheet also labels four motor-driver output connectors: J20 (X), J12 (Y), and J13/J14 (both connected to the schematic's DRIVER_Z1 winding outputs). Each has numbered contacts 1–4 labelled B1, B2, A1, and A2, plus a separate MP mark connected to GND. The MP is recorded as a mounting point, not numbered as a fifth signal pin. These are motor-winding output contacts, not step/direction inputs; shared schematic nets do not prove that both Z connectors are used or wired on any local unit.

Three further xBuddy reference connectors transcribed from their titled sheets are J15 A_TEMP (pins 1 `PF5_THERM3`, 2 GND, plus separate MP-to-GND; CPU sheet, PDF page 9/18), J23 I2C (pins 1 SCL, 2 SDA, 3 +3V3, 4 GND, plus separate MP-to-GND; EEPROM sheet, page 14/18), and J29 accelerometer (pins 1 ACCEL-CS, 2 SCLD, 3 SDI, 4 SDO, 5 +3V3, 6 GND, plus separate MP-to-GND; accelerometer sheet, page 17/18). These are source net labels only; no local connector fit or electrical route is established.

The linked archive also contains `FDM-XL-MKx-xLCD` Rev 29. Its xLCD sheet P11 has six numbered schematic positions labelled 1 +3.3V, 2 1wire, 3 SCL, 4 SDA, 5 GND, 6 +5V; the P11 symbol is explicitly marked `dnf`. This is recorded as a cross-model archive reference with an unpopulated marker, not as a fitted MK4S port or local accessory.

The xBuddy PERIPHERALS sheet labels all twelve J6 MMU positions: 1 E-STEP, 2 RS485−, 3 E-DIR, 4 RS485+, 5 MMU_5V, 6 MMU_RESET, 7 GND, 8 nAC_FAULT, 9 GND, 10 MMU_24V, 11 GND, 12 MMU_24V, plus a separate MP-to-GND. These are schematic-side assignments; the MMU hardware and harness on the three local units are unverified. J6 pins 1 and 3 are described only as E-STEP/E-DIR signals at this reference connector; no SmoothieBox or local route is established.

## Source and identity limits

Source: [FabLab Region Nürnberg 3D printers wiki page](https://wiki.fablab-nuernberg.de/w/3D-Drucker). This is one local inventory/configuration record for three same-model units. A separate MakeICT dossier covers the MK4 generation; the Nürnberg MK4S is a distinct model revision but is conservatively treated as a family overlap for strict novel-machine counting.


### LoveBoard Rev 38 reference contacts (incremental source review)

The official archive also contains `FDM-MK4-LoveBoard`, Rev 38 (2023-04-03). These are separate manufacturer-reference connectors, not evidence of fitted local LoveBoards or cables. The catalog records J13 (22 positions and a distinct GNDA mounting point), J4 (four Z-motor output positions), J2 filament sensor (three positions and GNDA MP), J14 pressure sensor (four positions and GNDA MP), J5/FAN1 and J6/FAN2 (three positions each; each MP is explicitly on HEATER_24V), and J1/J12 thermistor harnesses (two positions each; their MPs are explicitly +24V). In the J13 schedule the two numbered GNDPWR contacts remain distinct from the separate GNDA MP. J14 filter components obscure some direct connector-adjacent net labels, so its source-position schedule is identified as a filtered pressure-sensor path and all routes remain OPEN. This is not a complete LoveBoard pinout: other visible items, including DNF elements, remain under review.


### Additional LoveBoard and heatbed references (incremental)

LoveBoard Rev 38 also shows orphaned P1 with positions HEATER_24V and HEATER_GND plus a separate GNDA MP; its external purpose is not identified. The captured FDM-MKx-Heatbed Rev 15 sheet has P1 VCC and P2 GND one-position terminals, both explicitly marked DNF. They are cross-model source references only and are not represented as fitted MK4S contacts. The LoveBoard heater-terminal intended load, local assembly, and all candidate routes remain unknown/OPEN.


### Source-trace corrections (2026-09-28)

High-resolution traces refine three xBuddy/LoveBoard labels. LoveBoard J14 pin 2 is HX-717 INNA (U2 pin 7) through R3/L6, and pin 4 is HX-717 INPA (U2 pin 8) through R4/L5; the blue Pressure_S graphic is a bridge annotation, not a connector net. On xBuddy J29 pin 2 is SCL. On J6, pins 1 and 3 are TX-1 through R13 and RX-1 through R168/R182; each has a branch through a DNF transistor toward the E-STEP or E-DIR net, respectively. The contact labels now preserve those branches instead of assigning the DNF-side net name as the connector contact.


### Source-label boundary: J15 temperature input

The xBuddy Rev 44 CPU sheet labels J15 pin 1 upstream as PF5_THERM3 and pin 2 GND; the visible A_TEMP text is not printed at this connector. The connector is now named as a source temperature-sensor input without assigning an MK4 accessory name. The nearby MK3.5 PINDA_THERM/PULLUP_SWITCH annotation is not used as an MK4S contact mapping.

## Complete supplied-PDF source audit (2026-09-28)

The earlier incremental manufacturer notes are retained as review history. The complete schedule below supersedes their provisional contact labels and counts. The wiki inventory and operating statements remain a separate local source scope; the manufacturer schematics do not establish the fitted revision, assembly, or harness on any of the three Nürnberg printers. The common MK4/MK4S archive linkage is the primary agent's captured page evidence. The MK4-only accessory article is not used to assign MK4S contacts.

The supplied drawings contain 48 inventoried connector/attachment groups and 329 individually recorded source marks: xBuddy 27/181, LoveBoard 10/55, heatbed 2/2, xLCD 9/91. This includes 20 distinct MP marks and four other shell/shield marks. Forty-two entries belong to symbols explicitly marked DNF; twenty-five have explicit source no-connect crosses. These counts overlap. DNF is the source population mark, NC is the drawn net condition, and OPEN is the absence of a selected SmoothieBox route. All 329 source entries remain OPEN, with no routed conductors or guesses. All 82 proposed SmoothieBox exterior contacts remain present.

The xLCD PDF contains physical page 1/1 titled logical sheet 1/2; logical sheet 2/2 is absent. Its 91 visible entries are cross-model archive references, not a complete board-wide xLCD inventory or evidence of a fitted MK4S display. xBuddy physical page 18 is titled OSCILLATOR and carries Id 19/18; physical page and logical sheet identities are kept distinct.

### Exact-label and path corrections

- LoveBoard J4 has no source Z-axis label and includes a distinct GNDA MP. J14 pin 1 is AVDD via L4, pin 2 reaches HX-717 U2 INNA pin 7 through R3/L6, pin 3 returns through L3 to GNDA, and pin 4 reaches INPA pin 8 through R4/L5; MP is separately GNDA. Pressure_S is a bridge graphic annotation, not a net. Load orientation and firmware sign remain unknown.
- xBuddy J15 is a source temperature input with PF5_THERM3 via R77/R118, GND, and a separate GND MP; A_TEMP is not printed there. J29 pin 2 is SCL via R60, not SCLD. J6 pins 1/3 are TX-1/RX-1 paths with DNF E-STEP/E-DIR branches; pin 6 is a Q16-switched MMU_RESET path. Upstream names are not asserted as direct connector-node names.
- J8 pin 13 preserves the exact source spelling TOUCH-INTTERUPT; pin 19 is +5V via L16 and pin 21 is GND. The differing xLCD P2 LCD-CS, TOUCH-INT-1W and LCDpin32 labels are preserved without inferring cable continuity.
- xBuddy J10 is not marked DNF. Its pin 3 is explicitly NC and pins 4/8 are +3V3. J9, J21, J1 and numbered chassis points J16/J19 are DNF. J1 pin 1 is directly +3V3; pin 2 reaches BOOT0 through R85. J21 pin 2 is printed SWDIO yet has a drawn GND branch in this exact source; that apparent conflict remains unresolved rather than being repaired from a conventional debug-header assumption.
- xBuddy J2 A6/B6 and A7/B7 are expanded as individual source contacts on USB-FS_P and USB-FS_N. A8 is nAC_FAULT_USB, B8 is GND. S1 is the chassis-symbol node coupled to circuit GND through C183. The source has sixteen USB contacts plus S1; absent superspeed positions are not invented.
- Ethernet J3 PCB pads P1–P10 and jack marks J1–J8 are distinct source numbering domains. P3/P4 and P7/P8 couple through magnetics to J1/J2 and J3/J6. J4/J5/J7/J8 belong to the source termination network; they are neither NC nor direct circuit GND. SH is the source chassis/earth symbol. P2/P10 LED returns reach GND through R94/R95.
- xLCD P1 has every position 1–50 plus shell/contact mark 0. Pins 9/10/11 share the +3.3V path through R38; pin 10 is not GND. NC crosses appear at 6, 13, 26–40 and 47. P16 has positions 1–4 plus Shield 0; the shield is a chassis/earth symbol, not direct circuit GND. DNF P18/P6/P8 are explicitly NC, P5 is a circled chassis/earth symbol and P12 is GND.
- MP is not a universal ground. LoveBoard J5/J6 MPs are HEATER_24V, J1/J12 MPs are +24V, and J13/J4/J2/J14/P1 MPs are GNDA. Source-numbered mounting/chassis attachment points are not represented as signal harness pins.

### Source provenance

| Source | Revision/date | PDF SHA-256 | Coverage |
| --- | --- | --- | --- |
| FDM-xBUDDY-44.pdf | 44 / 2023-08-31 | `603999a70183f96e68469915890e1403fe5f5907983853fb760a316915931f1e` | 27 groups / 181 entries; Physical PDF page 18 has logical Id 19/18. |
| FDM-MK4-LoveBoard-38.pdf | 38 / 2023-04-03 | `5c3824222a2e03b5f7f017b071b5fbaacae824a8c135d230cc7727c0c2200283` | 10 groups / 55 entries; One supplied sheet. |
| FDM-MKx-Heatbed-15.pdf | 15 / 2023-08-21 | `24c3530165c2b53f7b54f2dd1aeea227e1850210804e0c43df7caa106dfa0c73` | 2 groups / 2 entries; One supplied sheet. |
| FDM-XL-MKx-xLCD-29.pdf | 29 / 2023-05-24 | `abda3d38c8d8d30e3e6f2ca7f0e439d7a2e09145a18963d268c658e415e744eb` | 9 groups / 91 entries; Only logical sheet 1/2 is supplied. |

Official archive: [MK4 electronics schematic ZIP](https://www.prusa3d.com/downloads/Electronics_drawings/MK4_electronics_schematics.zip), SHA-256 `dd08ada5e34da09bcf26bd4a59fa3b49df6bfecd6c77699980e03ac34dcb528f`. Manufacturer index: [Prusa open-source electronics](https://www.prusa3d.com/page/open-source-at-prusa-research_236812/).

### Remaining source checks

Obtain logical xLCD sheet 2/2 and the revision-matched xBuddy CPU KiCad netlist/ERC needed to resolve J21 pin 2. Local fitted revisions, populated options, mating views, connector current/voltage limits, bridge sign and cable continuity remain unknown; no wiring-ready claim is made. No DB25 is supplied or proposed. Unnumbered mechanical holes, component pins and on-board testpoints/configuration solder jumpers are explicitly excluded from the external connector schedule.

### Individual supplied-source marks

## xBuddy J8 — J8 LCD harness · xBuddy reference

Source: `FDM-xBUDDY-44.pdf`, Rev 44, PERIPHERALS, physical PDF page 2/18, logical sheet 2/18. Local fit unknown. Connector DNF: no marker at this connector. Kind: connector.

Schematic numbering only. J8 label differences from xLCD P2 do not establish a cable mapping.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | LCD-1wire | numbered_contact | no | no | OPEN |
| 2 | LCD-SW | numbered_contact | no | no | OPEN |
| 3 | LCD-RST | numbered_contact | no | no | OPEN |
| 4 | LCD-RS | numbered_contact | no | no | OPEN |
| 5 | LCD-ENCA | numbered_contact | no | no | OPEN |
| 6 | LCD-ENCB | numbered_contact | no | no | OPEN |
| 7 | SCK_P | numbered_contact | no | no | OPEN |
| 8 | SCK_N | numbered_contact | no | no | OPEN |
| 9 | MISO_N | numbered_contact | no | no | OPEN |
| 10 | MISO_P | numbered_contact | no | no | OPEN |
| 11 | MOSI_P | numbered_contact | no | no | OPEN |
| 12 | MOSI_N | numbered_contact | no | no | OPEN |
| 13 | TOUCH-INTTERUPT | numbered_contact | no | no | OPEN |
| 14 | SCL | numbered_contact | no | no | OPEN |
| 15 | GND | numbered_contact | no | no | OPEN |
| 16 | SDA | numbered_contact | no | no | OPEN |
| 17 | xLCD_nRST | numbered_contact | no | no | OPEN |
| 18 | LCD-BUZZER | numbered_contact | no | no | OPEN |
| 19 | +5V | numbered_contact | no | no | OPEN |
| 20 | Tearing_effect_output | numbered_contact | no | no | OPEN |
| 21 | GND | numbered_contact | no | no | OPEN |
| 22 | USB-HS_P | numbered_contact | no | no | OPEN |
| 23 | USB-HS_N | numbered_contact | no | no | OPEN |
| 24 | 5V_USB_HS | numbered_contact | no | no | OPEN |

## xBuddy J20 — J20 X motor winding output · xBuddy reference

Source: `FDM-xBUDDY-44.pdf`, Rev 44, ROOT, physical PDF page 1/18, logical sheet 1/18. Local fit unknown. Connector DNF: no marker at this connector. Kind: connector.

Motor winding contacts, not STEP/DIR inputs. J13/J14 share source DRIVER_Z1 nets; local use unknown.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | B1 | numbered_contact | no | no | OPEN |
| 2 | B2 | numbered_contact | no | no | OPEN |
| 3 | A1 | numbered_contact | no | no | OPEN |
| 4 | A2 | numbered_contact | no | no | OPEN |
| MP | MP mounting point · GND | mounting_point_mark | no | no | OPEN |

## xBuddy J12 — J12 Y motor winding output · xBuddy reference

Source: `FDM-xBUDDY-44.pdf`, Rev 44, ROOT, physical PDF page 1/18, logical sheet 1/18. Local fit unknown. Connector DNF: no marker at this connector. Kind: connector.

Motor winding contacts, not STEP/DIR inputs. J13/J14 share source DRIVER_Z1 nets; local use unknown.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | B1 | numbered_contact | no | no | OPEN |
| 2 | B2 | numbered_contact | no | no | OPEN |
| 3 | A1 | numbered_contact | no | no | OPEN |
| 4 | A2 | numbered_contact | no | no | OPEN |
| MP | MP mounting point · GND | mounting_point_mark | no | no | OPEN |

## xBuddy J13 — J13 DRIVER_Z1 output A motor winding output · xBuddy reference

Source: `FDM-xBUDDY-44.pdf`, Rev 44, ROOT, physical PDF page 1/18, logical sheet 1/18. Local fit unknown. Connector DNF: no marker at this connector. Kind: connector.

Motor winding contacts, not STEP/DIR inputs. J13/J14 share source DRIVER_Z1 nets; local use unknown.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | B1 | numbered_contact | no | no | OPEN |
| 2 | B2 | numbered_contact | no | no | OPEN |
| 3 | A1 | numbered_contact | no | no | OPEN |
| 4 | A2 | numbered_contact | no | no | OPEN |
| MP | MP mounting point · GND | mounting_point_mark | no | no | OPEN |

## xBuddy J14 — J14 DRIVER_Z1 output B motor winding output · xBuddy reference

Source: `FDM-xBUDDY-44.pdf`, Rev 44, ROOT, physical PDF page 1/18, logical sheet 1/18. Local fit unknown. Connector DNF: no marker at this connector. Kind: connector.

Motor winding contacts, not STEP/DIR inputs. J13/J14 share source DRIVER_Z1 nets; local use unknown.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | B1 | numbered_contact | no | no | OPEN |
| 2 | B2 | numbered_contact | no | no | OPEN |
| 3 | A1 | numbered_contact | no | no | OPEN |
| 4 | A2 | numbered_contact | no | no | OPEN |
| MP | MP mounting point · GND | mounting_point_mark | no | no | OPEN |

## xBuddy J15 — J15 temperature input · xBuddy source reference

Source: `FDM-xBUDDY-44.pdf`, Rev 44, CPU, physical PDF page 9/18, logical sheet 9/18. Local fit unknown. Connector DNF: no marker at this connector. Kind: connector.

A_TEMP is not printed at J15. The nearby MK3.5 PINDA_THERM/PULLUP_SWITCH note does not assign an MK4S harness.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | PF5_THERM3 via R77/R118 | numbered_contact | no | no | OPEN |
| 2 | GND | numbered_contact | no | no | OPEN |
| MP | MP mounting point · GND | mounting_point_mark | no | no | OPEN |

## xBuddy J23 — J23 I2C · xBuddy reference

Source: `FDM-xBUDDY-44.pdf`, Rev 44, EEPROM, physical PDF page 14/18, logical sheet 14/18. Local fit unknown. Connector DNF: no marker at this connector. Kind: connector.

Numbering follows the source symbol; physical mating view is unverified.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | SCL | numbered_contact | no | no | OPEN |
| 2 | SDA | numbered_contact | no | no | OPEN |
| 3 | +3V3 | numbered_contact | no | no | OPEN |
| 4 | GND | numbered_contact | no | no | OPEN |
| MP | MP mounting point · GND | mounting_point_mark | no | no | OPEN |

## xBuddy J29 — J29 accelerometer · xBuddy reference

Source: `FDM-xBUDDY-44.pdf`, Rev 44, ACCELEROMETER, physical PDF page 17/18, logical sheet 17/18. Local fit unknown. Connector DNF: no marker at this connector. Kind: connector.

The hierarchy outline after SCL is not a D suffix. No fitted local accelerometer is established.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | ACCEL-CS via R59/D1 | numbered_contact | no | no | OPEN |
| 2 | SCL via R60 | numbered_contact | no | no | OPEN |
| 3 | SDI via R134 | numbered_contact | no | no | OPEN |
| 4 | SDO via R202 | numbered_contact | no | no | OPEN |
| 5 | +3V3 via L22 | numbered_contact | no | no | OPEN |
| 6 | GND | numbered_contact | no | no | OPEN |
| MP | MP mounting point · GND | mounting_point_mark | no | no | OPEN |

## xLCD P11 — P11 DNF six-position reference · cross-model xLCD

Source: `FDM-XL-MKx-xLCD-29.pdf`, Rev 29, ROOT, physical PDF page 1/1, logical sheet 1/2. Local fit unknown. Connector DNF: yes. Kind: connector.

Cross-model drawing; logical sheet 2/2 is not supplied.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | +3.3V | numbered_contact | yes | no | OPEN |
| 2 | 1wire | numbered_contact | yes | no | OPEN |
| 3 | SCL | numbered_contact | yes | no | OPEN |
| 4 | SDA | numbered_contact | yes | no | OPEN |
| 5 | GND | numbered_contact | yes | no | OPEN |
| 6 | +5V | numbered_contact | yes | no | OPEN |

## xBuddy J6 — J6 MMU harness · xBuddy reference

Source: `FDM-xBUDDY-44.pdf`, Rev 44, PERIPHERALS, physical PDF page 2/18, logical sheet 2/18. Local fit unknown. Connector DNF: no marker at this connector. Kind: connector.

No local MMU harness or population state is established.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | TX-1 via R13 · DNF E-STEP branch | numbered_contact | no | no | OPEN |
| 2 | RS485- | numbered_contact | no | no | OPEN |
| 3 | RX-1 via R168/R182 · DNF E-DIR branch | numbered_contact | no | no | OPEN |
| 4 | RS485+ | numbered_contact | no | no | OPEN |
| 5 | MMU_5V via L2 | numbered_contact | no | no | OPEN |
| 6 | MMU_RESET switched node via Q16 | numbered_contact | no | no | OPEN |
| 7 | GND | numbered_contact | no | no | OPEN |
| 8 | nAC_FAULT via R198 | numbered_contact | no | no | OPEN |
| 9 | GND | numbered_contact | no | no | OPEN |
| 10 | MMU_24V | numbered_contact | no | no | OPEN |
| 11 | GND | numbered_contact | no | no | OPEN |
| 12 | MMU_24V | numbered_contact | no | no | OPEN |
| MP | MP mounting point · GND | mounting_point_mark | no | no | OPEN |

## LoveBoard J13 — J13 xBuddy/LoveBoard harness · LoveBoard reference

Source: `FDM-MK4-LoveBoard-38.pdf`, Rev 38, ROOT, physical PDF page 1/1, logical sheet 1/1. Local fit unknown. Connector DNF: no marker at this connector. Kind: connector.

GNDPWR numbered contacts and the GNDA MP remain separate. Similarity to xBuddy J5 is not verified cable continuity.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | B2 | numbered_contact | no | no | OPEN |
| 2 | A2 | numbered_contact | no | no | OPEN |
| 3 | B1 | numbered_contact | no | no | OPEN |
| 4 | A1 | numbered_contact | no | no | OPEN |
| 5 | MULTIWIRE | numbered_contact | no | no | OPEN |
| 6 | E_DATA_P | numbered_contact | no | no | OPEN |
| 7 | GNDPWR | numbered_contact | no | no | OPEN |
| 8 | E_DATA_N | numbered_contact | no | no | OPEN |
| 9 | GNDPWR | numbered_contact | no | no | OPEN |
| 10 | E_SCK_N | numbered_contact | no | no | OPEN |
| 11 | NTC_HEATSINK | numbered_contact | no | no | OPEN |
| 12 | E_SCK_P | numbered_contact | no | no | OPEN |
| 13 | NTC_HOTEND | numbered_contact | no | no | OPEN |
| 14 | +5V | numbered_contact | no | no | OPEN |
| 15 | FANS-TACH-IN | numbered_contact | no | no | OPEN |
| 16 | HEATER_GND | numbered_contact | no | no | OPEN |
| 17 | EXT_REF_3V3 | numbered_contact | no | no | OPEN |
| 18 | HEATER_GND | numbered_contact | no | no | OPEN |
| 19 | FAN-0-OUT | numbered_contact | no | no | OPEN |
| 20 | HEATER_24V | numbered_contact | no | no | OPEN |
| 21 | FAN-1-OUT | numbered_contact | no | no | OPEN |
| 22 | HEATER_24V | numbered_contact | no | no | OPEN |
| MP | MP mounting point · GNDA | mounting_point_mark | no | no | OPEN |

## LoveBoard J4 — J4 motor winding output · LoveBoard reference

Source: `FDM-MK4-LoveBoard-38.pdf`, Rev 38, ROOT, physical PDF page 1/1, logical sheet 1/1. Local fit unknown. Connector DNF: no marker at this connector. Kind: connector.

No Z axis label appears at this connector in the source.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | A2 | numbered_contact | no | no | OPEN |
| 2 | B2 | numbered_contact | no | no | OPEN |
| 3 | B1 | numbered_contact | no | no | OPEN |
| 4 | A1 | numbered_contact | no | no | OPEN |
| MP | MP mounting point · GNDA | mounting_point_mark | no | no | OPEN |

## LoveBoard J2 — J2 filament sensor · LoveBoard reference

Source: `FDM-MK4-LoveBoard-38.pdf`, Rev 38, ROOT, physical PDF page 1/1, logical sheet 1/1. Local fit unknown. Connector DNF: no marker at this connector. Kind: connector.

Numbering follows the source symbol; physical mating view is unverified.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | +3V3 via L1 | numbered_contact | no | no | OPEN |
| 2 | OUT · Filament_S annotation | numbered_contact | no | no | OPEN |
| 3 | GND via L7 to GNDA | numbered_contact | no | no | OPEN |
| MP | MP mounting point · GNDA | mounting_point_mark | no | no | OPEN |

## LoveBoard J14 — J14 bridge interface · LoveBoard reference

Source: `FDM-MK4-LoveBoard-38.pdf`, Rev 38, ROOT, physical PDF page 1/1, logical sheet 1/1. Local fit unknown. Connector DNF: no marker at this connector. Kind: connector.

Pressure_S is a blue bridge annotation, not a net. Supply, input and return paths are confirmed. Bridge mechanical orientation, load polarity, calibration and firmware sign remain unknown; no force-direction inference is made.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | AVDD (+5V-fed) via L4 | numbered_contact | no | no | OPEN |
| 2 | INNA via R3/L6 · U2 HX-717 pin 7 | numbered_contact | no | no | OPEN |
| 3 | GNDA via L3 | numbered_contact | no | no | OPEN |
| 4 | INPA via R4/L5 · U2 HX-717 pin 8 | numbered_contact | no | no | OPEN |
| MP | MP mounting point · GNDA | mounting_point_mark | no | no | OPEN |

## LoveBoard J5 — J5 FAN1 · LoveBoard reference

Source: `FDM-MK4-LoveBoard-38.pdf`, Rev 38, ROOT, physical PDF page 1/1, logical sheet 1/1. Local fit unknown. Connector DNF: no marker at this connector. Kind: connector.

Numbering follows the source symbol; physical mating view is unverified.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | FAN1 | numbered_contact | no | no | OPEN |
| 2 | +5V | numbered_contact | no | no | OPEN |
| 3 | TACH1 | numbered_contact | no | no | OPEN |
| MP | MP mounting point · HEATER_24V | mounting_point_mark | no | no | OPEN |

## LoveBoard J6 — J6 FAN2 · LoveBoard reference

Source: `FDM-MK4-LoveBoard-38.pdf`, Rev 38, ROOT, physical PDF page 1/1, logical sheet 1/1. Local fit unknown. Connector DNF: no marker at this connector. Kind: connector.

TACH1 is the source spelling on both fan connectors; do not normalize this to TACH2.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | FAN2 | numbered_contact | no | no | OPEN |
| 2 | +5V | numbered_contact | no | no | OPEN |
| 3 | TACH1 | numbered_contact | no | no | OPEN |
| MP | MP mounting point · HEATER_24V | mounting_point_mark | no | no | OPEN |

## LoveBoard J1 — J1 hotend thermistor harness · LoveBoard reference

Source: `FDM-MK4-LoveBoard-38.pdf`, Rev 38, ROOT, physical PDF page 1/1, logical sheet 1/1. Local fit unknown. Connector DNF: no marker at this connector. Kind: connector.

Numbering follows the source symbol; physical mating view is unverified.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | NTC_HOTEND via L2 | numbered_contact | no | no | OPEN |
| 2 | NTC return via L11 to GNDA | numbered_contact | no | no | OPEN |
| MP | MP mounting point · +24V | mounting_point_mark | no | no | OPEN |

## LoveBoard J12 — J12 heatsink thermistor harness · LoveBoard reference

Source: `FDM-MK4-LoveBoard-38.pdf`, Rev 38, ROOT, physical PDF page 1/1, logical sheet 1/1. Local fit unknown. Connector DNF: no marker at this connector. Kind: connector.

Numbering follows the source symbol; physical mating view is unverified.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | NTC_HEATSINK via L10 | numbered_contact | no | no | OPEN |
| 2 | NTC return via L11 to GNDA | numbered_contact | no | no | OPEN |
| MP | MP mounting point · +24V | mounting_point_mark | no | no | OPEN |

## LoveBoard P1 — P1 orphaned heater terminal · LoveBoard reference

Source: `FDM-MK4-LoveBoard-38.pdf`, Rev 38, ROOT, physical PDF page 1/1, logical sheet 1/1. Local fit unknown. Connector DNF: no marker at this connector. Kind: connector.

Intended external load and local fit are not identified in the supplied evidence.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | HEATER_24V | numbered_contact | no | no | OPEN |
| 2 | HEATER_GND | numbered_contact | no | no | OPEN |
| MP | MP mounting point · GNDA | mounting_point_mark | no | no | OPEN |

## Heatbed P1 — P1 VCC terminal · DNF heatbed reference

Source: `FDM-MKx-Heatbed-15.pdf`, Rev 15, ROOT, physical PDF page 1/1, logical sheet 1/1. Local fit unknown. Connector DNF: yes. Kind: screw_terminal.

Numbering follows the source symbol; physical mating view is unverified.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | VCC | numbered_contact | yes | no | OPEN |

## Heatbed P2 — P2 GND terminal · DNF heatbed reference

Source: `FDM-MKx-Heatbed-15.pdf`, Rev 15, ROOT, physical PDF page 1/1, logical sheet 1/1. Local fit unknown. Connector DNF: yes. Kind: screw_terminal.

Numbering follows the source symbol; physical mating view is unverified.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | GND | numbered_contact | yes | no | OPEN |

## xBuddy J9 — J9 extension header · DNF xBuddy reference

Source: `FDM-xBUDDY-44.pdf`, Rev 44, PERIPHERALS, physical PDF page 2/18, logical sheet 2/18. Local fit unknown. Connector DNF: yes. Kind: connector.

Connector symbol and named optional signal resistors are DNF; no separate MP mark is drawn.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | +24VMOT | numbered_contact | yes | no | OPEN |
| 2 | +24VMOT | numbered_contact | yes | no | OPEN |
| 3 | GND | numbered_contact | yes | no | OPEN |
| 4 | GND | numbered_contact | yes | no | OPEN |
| 5 | nAC_FAULT via DNF R143 | numbered_contact | yes | no | OPEN |
| 6 | PA15_TDI via DNF R167 | numbered_contact | yes | no | OPEN |
| 7 | PE2_SPI4_SCK_TRACE_CLK via DNF R144 | numbered_contact | yes | no | OPEN |
| 8 | PE4_SPI4_NSS_TRACE_DATA1 via DNF R169 | numbered_contact | yes | no | OPEN |
| 9 | PE3_TRACE_DATA0 via DNF R152 | numbered_contact | yes | no | OPEN |
| 10 | PE6_SPI4_MOSI_TRACE_DATA3 via DNF R170 | numbered_contact | yes | no | OPEN |
| 11 | PE5_SPI4_MISO_TRACE_DATA2 via DNF R164 | numbered_contact | yes | no | OPEN |
| 12 | +5V | numbered_contact | yes | no | OPEN |
| 13 | PE12 via DNF R174 | numbered_contact | yes | no | OPEN |
| 14 | +3V3 | numbered_contact | yes | no | OPEN |

## xBuddy J10 — J10 ESP header · xBuddy reference

Source: `FDM-xBUDDY-44.pdf`, Rev 44, PERIPHERALS, physical PDF page 2/18, logical sheet 2/18. Local fit unknown. Connector DNF: no marker at this connector. Kind: connector.

J10 has no DNF marker in the supplied source. Pin 3 is explicitly NC; pins 4 and 8 are +3V3.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | GND | numbered_contact | no | no | OPEN |
| 2 | ESP-Tx via R142 | numbered_contact | no | no | OPEN |
| 3 | NC · explicit source no-connect | numbered_contact | no | yes | OPEN |
| 4 | +3V3 | numbered_contact | no | no | OPEN |
| 5 | ESP-GPIO0 via R97 | numbered_contact | no | no | OPEN |
| 6 | ESP-RST via R141 | numbered_contact | no | no | OPEN |
| 7 | ESP-Rx via R21 | numbered_contact | no | no | OPEN |
| 8 | +3V3 | numbered_contact | no | no | OPEN |

## xBuddy J4 — J4 single power screw · xBuddy reference

Source: `FDM-xBUDDY-44.pdf`, Rev 44, POWER, physical PDF page 4/18, logical sheet 4/18. Local fit unknown. Connector DNF: no marker at this connector. Kind: screw_terminal.

Source mark 1 is a physical screw contact. The upstream positive feed is not the downstream named rail; local power wiring is unknown.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | Positive power feed before L12/F3/F6 to +24VMOT | numbered_contact | no | no | OPEN |

## xBuddy J24 — J24 single power screw · xBuddy reference

Source: `FDM-xBUDDY-44.pdf`, Rev 44, POWER, physical PDF page 4/18, logical sheet 4/18. Local fit unknown. Connector DNF: no marker at this connector. Kind: screw_terminal.

Source mark 1 is a physical screw contact. The upstream positive feed is not the downstream named rail; local power wiring is unknown.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | GND power return | numbered_contact | no | no | OPEN |

## xBuddy J25 — J25 single power screw · xBuddy reference

Source: `FDM-xBUDDY-44.pdf`, Rev 44, POWER, physical PDF page 4/18, logical sheet 4/18. Local fit unknown. Connector DNF: no marker at this connector. Kind: screw_terminal.

Source mark 1 is a physical screw contact. The upstream positive feed is not the downstream named rail; local power wiring is unknown.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | Positive power feed before L17/F1/F5/Q6 to 24V2 | numbered_contact | no | no | OPEN |

## xBuddy J26 — J26 single power screw · xBuddy reference

Source: `FDM-xBUDDY-44.pdf`, Rev 44, POWER, physical PDF page 4/18, logical sheet 4/18. Local fit unknown. Connector DNF: no marker at this connector. Kind: screw_terminal.

Source mark 1 is a physical screw contact. The upstream positive feed is not the downstream named rail; local power wiring is unknown.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | GND power return | numbered_contact | no | no | OPEN |

## xBuddy J21 — J21 debug header · DNF xBuddy reference

Source: `FDM-xBUDDY-44.pdf`, Rev 44, CPU, physical PDF page 9/18, logical sheet 9/18. Local fit unknown. Connector DNF: yes. Kind: connector.

Source conflict at pin 2 is unresolved. DNF header; this is a drawn reference, not a populated service connector.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | +3V3 | numbered_contact | yes | no | OPEN |
| 2 | SWDIO · drawn GND-branch conflict | numbered_contact | yes | no | OPEN |
| 3 | GND | numbered_contact | yes | no | OPEN |
| 4 | SWCLK | numbered_contact | yes | no | OPEN |
| 5 | GND | numbered_contact | yes | no | OPEN |
| 6 | SWO | numbered_contact | yes | no | OPEN |
| 7 | NC · explicit source no-connect | numbered_contact | yes | yes | OPEN |
| 8 | NC · explicit source no-connect | numbered_contact | yes | yes | OPEN |
| 9 | NC · explicit source no-connect | numbered_contact | yes | yes | OPEN |
| 10 | NRST | numbered_contact | yes | no | OPEN |

## xBuddy J1 — J1 boot strap · DNF xBuddy reference

Source: `FDM-xBUDDY-44.pdf`, Rev 44, CPU, physical PDF page 9/18, logical sheet 9/18. Local fit unknown. Connector DNF: yes. Kind: connector.

Numbering follows the source symbol; physical mating view is unverified.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | +3V3 | numbered_contact | yes | no | OPEN |
| 2 | BOOT0 through R85 | numbered_contact | yes | no | OPEN |

## xBuddy J16 — J16 chassis attachment mark · DNF xBuddy reference

Source: `FDM-xBUDDY-44.pdf`, Rev 44, CPU, physical PDF page 9/18, logical sheet 9/18. Local fit unknown. Connector DNF: yes. Kind: physical_attachment.

Source numbered mounting point, not a harness pin. C182 couples the chassis-symbol node to circuit GND; no direct protective-earth bond is established.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | Chassis/earth symbol · C182 coupling to GND | numbered_physical_attachment | yes | no | OPEN |

## xBuddy J19 — J19 chassis attachment mark · DNF xBuddy reference

Source: `FDM-xBUDDY-44.pdf`, Rev 44, CPU, physical PDF page 9/18, logical sheet 9/18. Local fit unknown. Connector DNF: yes. Kind: physical_attachment.

Source numbered mounting point, not a harness pin. C182 couples the chassis-symbol node to circuit GND; no direct protective-earth bond is established.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | Chassis/earth symbol · C182 coupling to GND | numbered_physical_attachment | yes | no | OPEN |

## xBuddy J5 — J5 extruder harness · xBuddy reference

Source: `FDM-xBUDDY-44.pdf`, Rev 44, EXTRUDER, physical PDF page 11/18, logical sheet 11/18. Local fit unknown. Connector DNF: no marker at this connector. Kind: connector.

Each repeated return/supply remains an individual numbered position. No xBuddy–LoveBoard cable is verified.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | B2 | numbered_contact | no | no | OPEN |
| 2 | A2 | numbered_contact | no | no | OPEN |
| 3 | B1 | numbered_contact | no | no | OPEN |
| 4 | A1 | numbered_contact | no | no | OPEN |
| 5 | MULTIWIRE_OUT | numbered_contact | no | no | OPEN |
| 6 | E_DATA_P | numbered_contact | no | no | OPEN |
| 7 | GND | numbered_contact | no | no | OPEN |
| 8 | E_DATA_N | numbered_contact | no | no | OPEN |
| 9 | GND | numbered_contact | no | no | OPEN |
| 10 | E_SCK_N | numbered_contact | no | no | OPEN |
| 11 | NTC_HEATSINK_OUT | numbered_contact | no | no | OPEN |
| 12 | E_SCK_P | numbered_contact | no | no | OPEN |
| 13 | NTC_HOTEND | numbered_contact | no | no | OPEN |
| 14 | +5V | numbered_contact | no | no | OPEN |
| 15 | FANS-TACH-IN | numbered_contact | no | no | OPEN |
| 16 | HEATER_GND | numbered_contact | no | no | OPEN |
| 17 | EXT_REF_3V3 | numbered_contact | no | no | OPEN |
| 18 | HEATER_GND | numbered_contact | no | no | OPEN |
| 19 | FAN-0-OUT | numbered_contact | no | no | OPEN |
| 20 | HEATER_24V | numbered_contact | no | no | OPEN |
| 21 | FAN-1-OUT | numbered_contact | no | no | OPEN |
| 22 | HEATER_24V | numbered_contact | no | no | OPEN |
| MP | MP mounting point · GND | mounting_point_mark | no | no | OPEN |

## xBuddy P1 — P1 power-panic reference · xBuddy

Source: `FDM-xBUDDY-44.pdf`, Rev 44, LEVEL_CONVERTER, physical PDF page 12/18, logical sheet 12/18. Local fit unknown. Connector DNF: no marker at this connector. Kind: connector.

Pin 2 is a connector-side switched node; an upstream signal label is not direct continuity.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | GND | numbered_contact | no | no | OPEN |
| 2 | nAC_FAULT_USB switched path via R196/Q12 | numbered_contact | no | no | OPEN |
| MP | MP mounting point · GND | mounting_point_mark | no | no | OPEN |

## xBuddy P2 — P2 heatbed thermistor · xBuddy reference

Source: `FDM-xBUDDY-44.pdf`, Rev 44, HEATBED, physical PDF page 13/18, logical sheet 13/18. Local fit unknown. Connector DNF: no marker at this connector. Kind: connector.

Numbering follows the source symbol; physical mating view is unverified.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | THERM-BED via R57/R58 | numbered_contact | no | no | OPEN |
| 2 | Return via L1 to GND | numbered_contact | no | no | OPEN |
| MP | MP mounting point · GND | mounting_point_mark | no | no | OPEN |

## xBuddy J7 — J7 bed power screw · xBuddy reference

Source: `FDM-xBUDDY-44.pdf`, Rev 44, HEATBED, physical PDF page 13/18, logical sheet 13/18. Local fit unknown. Connector DNF: no marker at this connector. Kind: screw_terminal.

Numbering follows the source symbol; physical mating view is unverified.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | 24V3 | numbered_contact | no | no | OPEN |

## xBuddy J27 — J27 bed switched-return screw · xBuddy reference

Source: `FDM-xBUDDY-44.pdf`, Rev 44, HEATBED, physical PDF page 13/18, logical sheet 13/18. Local fit unknown. Connector DNF: no marker at this connector. Kind: screw_terminal.

Unlabelled switched node, not direct GND; BED_GND is not a printed net name.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | Switched bed return · Q4 drain | numbered_contact | no | no | OPEN |

## xBuddy J11 — J11 U.FL/NFC reference · xBuddy

Source: `FDM-xBUDDY-44.pdf`, Rev 44, EEPROM, physical PDF page 14/18, logical sheet 14/18. Local fit unknown. Connector DNF: no marker at this connector. Kind: connector.

No DNF marker on J11 itself. Do not substitute GND for the AC0 reference contact.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | AC1 through DNF C49 | numbered_contact | no | no | OPEN |
| 2 | AC0 | numbered_contact | no | no | OPEN |

## xBuddy J3 — J3 integrated RJ45 · PCB and jack source marks

Source: `FDM-xBUDDY-44.pdf`, Rev 44, ETHERNET, physical PDF page 15/18, logical sheet 15/18. Local fit unknown. Connector DNF: no marker at this connector. Kind: connector.

P1–P10 are PCB pads; J1–J8 are mating jack marks. P3/P4 couple magnetically to J1/J2 and P7/P8 to J3/J6. P5/P6 are primary center taps. The J4/J5/J7/J8 termination network reaches SH through 1000 pF/2 kV; it is neither direct circuit GND nor explicit NC. No pin-for-pin cable continuity is implied.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| P1 | ETH_LED1 | pcb_pad | no | no | OPEN |
| P2 | GND through R94 (LED return) | pcb_pad | no | no | OPEN |
| P3 | TD_P | pcb_pad | no | no | OPEN |
| P4 | TD_N | pcb_pad | no | no | OPEN |
| P5 | +3V3 · TCT | pcb_pad | no | no | OPEN |
| P6 | +3V3 · RCT | pcb_pad | no | no | OPEN |
| P7 | RD_P | pcb_pad | no | no | OPEN |
| P8 | RD_N | pcb_pad | no | no | OPEN |
| P9 | ETH_LED2 | pcb_pad | no | no | OPEN |
| P10 | GND through R95 (LED return) | pcb_pad | no | no | OPEN |
| SH | Chassis/earth shield symbol | shield_mark | no | no | OPEN |
| J1 | Transmit winding + · transformer-coupled P3 | mating_jack_contact | no | no | OPEN |
| J2 | Transmit winding - · transformer-coupled P4 | mating_jack_contact | no | no | OPEN |
| J3 | Receive winding + · transformer-coupled P7 | mating_jack_contact | no | no | OPEN |
| J4 | 75 ohm termination node | mating_jack_contact | no | no | OPEN |
| J5 | 75 ohm termination node | mating_jack_contact | no | no | OPEN |
| J6 | Receive winding - · transformer-coupled P8 | mating_jack_contact | no | no | OPEN |
| J7 | 75 ohm termination node | mating_jack_contact | no | no | OPEN |
| J8 | 75 ohm termination node | mating_jack_contact | no | no | OPEN |

## xBuddy J2 — J2 USB-C · expanded source contact marks

Source: `FDM-xBUDDY-44.pdf`, Rev 44, USB, physical PDF page 16/18, logical sheet 16/18. Local fit unknown. Connector DNF: no marker at this connector. Kind: connector.

Sixteen contacts shown by the source plus S1. Superspeed positions absent from this connector symbol are not invented. A8 is repurposed as nAC_FAULT_USB; B8 is GND.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| A1 | GND | numbered_contact | no | no | OPEN |
| A4 | VBUS | numbered_contact | no | no | OPEN |
| A5 | CC1 | numbered_contact | no | no | OPEN |
| A6 | USB-FS_P · D+ | numbered_contact | no | no | OPEN |
| A7 | USB-FS_N · D- | numbered_contact | no | no | OPEN |
| A8 | nAC_FAULT_USB · SBU1 | numbered_contact | no | no | OPEN |
| A9 | VBUS | numbered_contact | no | no | OPEN |
| A12 | GND | numbered_contact | no | no | OPEN |
| B1 | GND | numbered_contact | no | no | OPEN |
| B4 | VBUS | numbered_contact | no | no | OPEN |
| B5 | CC2 | numbered_contact | no | no | OPEN |
| B6 | USB-FS_P · D+ | numbered_contact | no | no | OPEN |
| B7 | USB-FS_N · D- | numbered_contact | no | no | OPEN |
| B8 | GND · SBU2 | numbered_contact | no | no | OPEN |
| B9 | VBUS | numbered_contact | no | no | OPEN |
| B12 | GND | numbered_contact | no | no | OPEN |
| S1 | Chassis/earth shield symbol · C183 coupling to GND | shield_mark | no | no | OPEN |

## LoveBoard J3 — J3 numbered mounting point · DNF LoveBoard reference

Source: `FDM-MK4-LoveBoard-38.pdf`, Rev 38, ROOT, physical PDF page 1/1, logical sheet 1/1. Local fit unknown. Connector DNF: yes. Kind: physical_attachment.

Physical mounting point, not a harness pin.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | GNDA | numbered_physical_attachment | yes | no | OPEN |

## xLCD P1 — P1 FPC 1–50 plus shell mark 0 · cross-model xLCD

Source: `FDM-XL-MKx-xLCD-29.pdf`, Rev 29, ROOT, physical PDF page 1/1, logical sheet 1/2. Local fit unknown. Connector DNF: no marker at this connector. Kind: connector.

Logical sheet 1/2 only; source labels do not establish an MK4S fitted display. Eighteen explicit NC numbered positions are retained individually.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | GND | numbered_contact | no | no | OPEN |
| 2 | LED-K | numbered_contact | no | no | OPEN |
| 3 | LED-K | numbered_contact | no | no | OPEN |
| 4 | LED-A | numbered_contact | no | no | OPEN |
| 5 | LED-A | numbered_contact | no | no | OPEN |
| 6 | NC · explicit source no-connect | numbered_contact | no | yes | OPEN |
| 7 | GND | numbered_contact | no | no | OPEN |
| 8 | LCD-PWM | numbered_contact | no | no | OPEN |
| 9 | +3.3V via R38 | numbered_contact | no | no | OPEN |
| 10 | +3.3V via R38 | numbered_contact | no | no | OPEN |
| 11 | +3.3V via R38 | numbered_contact | no | no | OPEN |
| 12 | LCD-RST | numbered_contact | no | no | OPEN |
| 13 | NC · explicit source no-connect | numbered_contact | no | yes | OPEN |
| 14 | MISO | numbered_contact | no | no | OPEN |
| 15 | MOSI | numbered_contact | no | no | OPEN |
| 16 | SCK | numbered_contact | no | no | OPEN |
| 17 | LCD-RS | numbered_contact | no | no | OPEN |
| 18 | LCDpin32 | numbered_contact | no | no | OPEN |
| 19 | LCD-CS | numbered_contact | no | no | OPEN |
| 20 | +3.3V | numbered_contact | no | no | OPEN |
| 21 | +3.3V | numbered_contact | no | no | OPEN |
| 22 | +3.3V | numbered_contact | no | no | OPEN |
| 23 | +3.3V | numbered_contact | no | no | OPEN |
| 24 | GND | numbered_contact | no | no | OPEN |
| 25 | GND | numbered_contact | no | no | OPEN |
| 26 | NC · explicit source no-connect | numbered_contact | no | yes | OPEN |
| 27 | NC · explicit source no-connect | numbered_contact | no | yes | OPEN |
| 28 | NC · explicit source no-connect | numbered_contact | no | yes | OPEN |
| 29 | NC · explicit source no-connect | numbered_contact | no | yes | OPEN |
| 30 | NC · explicit source no-connect | numbered_contact | no | yes | OPEN |
| 31 | NC · explicit source no-connect | numbered_contact | no | yes | OPEN |
| 32 | NC · explicit source no-connect | numbered_contact | no | yes | OPEN |
| 33 | NC · explicit source no-connect | numbered_contact | no | yes | OPEN |
| 34 | NC · explicit source no-connect | numbered_contact | no | yes | OPEN |
| 35 | NC · explicit source no-connect | numbered_contact | no | yes | OPEN |
| 36 | NC · explicit source no-connect | numbered_contact | no | yes | OPEN |
| 37 | NC · explicit source no-connect | numbered_contact | no | yes | OPEN |
| 38 | NC · explicit source no-connect | numbered_contact | no | yes | OPEN |
| 39 | NC · explicit source no-connect | numbered_contact | no | yes | OPEN |
| 40 | NC · explicit source no-connect | numbered_contact | no | yes | OPEN |
| 41 | GND | numbered_contact | no | no | OPEN |
| 42 | +3.3V | numbered_contact | no | no | OPEN |
| 43 | SCL | numbered_contact | no | no | OPEN |
| 44 | SDA | numbered_contact | no | no | OPEN |
| 45 | TOUCH-INTERRUPT | numbered_contact | no | no | OPEN |
| 46 | LCD-RST via R47 | numbered_contact | no | no | OPEN |
| 47 | NC · explicit source no-connect | numbered_contact | no | yes | OPEN |
| 48 | GND | numbered_contact | no | no | OPEN |
| 49 | GND | numbered_contact | no | no | OPEN |
| 50 | GND | numbered_contact | no | no | OPEN |
| 0 | GND shell/contact mark | shell_contact_mark | no | no | OPEN |

## xLCD P2 — P2 24-position harness · cross-model xLCD

Source: `FDM-XL-MKx-xLCD-29.pdf`, Rev 29, ROOT, physical PDF page 1/1, logical sheet 1/2. Local fit unknown. Connector DNF: no marker at this connector. Kind: connector.

No separate MP is drawn. Net-name differences with xBuddy J8 remain explicit; no matched cable is claimed.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | LCD-CS via R7 | numbered_contact | no | no | OPEN |
| 2 | LCD-SW | numbered_contact | no | no | OPEN |
| 3 | LCD-RST via R19 | numbered_contact | no | no | OPEN |
| 4 | LCD-RS via R14 | numbered_contact | no | no | OPEN |
| 5 | LCD-ENCA via R10 | numbered_contact | no | no | OPEN |
| 6 | LCD-ENCB | numbered_contact | no | no | OPEN |
| 7 | SCK_P | numbered_contact | no | no | OPEN |
| 8 | SCK_N | numbered_contact | no | no | OPEN |
| 9 | MISO_N | numbered_contact | no | no | OPEN |
| 10 | MISO_P | numbered_contact | no | no | OPEN |
| 11 | MOSI_P | numbered_contact | no | no | OPEN |
| 12 | MOSI_N | numbered_contact | no | no | OPEN |
| 13 | TOUCH-INT-1W via R6 | numbered_contact | no | no | OPEN |
| 14 | SCL via R26 | numbered_contact | no | no | OPEN |
| 15 | GND | numbered_contact | no | no | OPEN |
| 16 | SDA via R27 | numbered_contact | no | no | OPEN |
| 17 | xLCD_nRST | numbered_contact | no | no | OPEN |
| 18 | LCD-BUZZER via R16 | numbered_contact | no | no | OPEN |
| 19 | +5V | numbered_contact | no | no | OPEN |
| 20 | LCDpin32 via R21 | numbered_contact | no | no | OPEN |
| 21 | GND | numbered_contact | no | no | OPEN |
| 22 | USB-HS_P | numbered_contact | no | no | OPEN |
| 23 | USB-HS_N | numbered_contact | no | no | OPEN |
| 24 | 5V_USB_HS | numbered_contact | no | no | OPEN |

## xLCD P16 — P16 USB-A plus Shield mark 0 · cross-model xLCD

Source: `FDM-XL-MKx-xLCD-29.pdf`, Rev 29, ROOT, physical PDF page 1/1, logical sheet 1/2. Local fit unknown. Connector DNF: no marker at this connector. Kind: connector.

Numbering follows the source symbol; physical mating view is unverified.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | VBUS | numbered_contact | no | no | OPEN |
| 2 | D- | numbered_contact | no | no | OPEN |
| 3 | D+ | numbered_contact | no | no | OPEN |
| 4 | GND | numbered_contact | no | no | OPEN |
| 0 | Shield · chassis/earth symbol | shield_mark | no | no | OPEN |

## xLCD P12 — P12 ground screw mark · DNF cross-model xLCD

Source: `FDM-XL-MKx-xLCD-29.pdf`, Rev 29, ROOT, physical PDF page 1/1, logical sheet 1/2. Local fit unknown. Connector DNF: yes. Kind: screw_terminal.

Numbering follows the source symbol; physical mating view is unverified.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | GND | numbered_contact | yes | no | OPEN |

## xLCD P5 — P5 mounting point · DNF cross-model xLCD

Source: `FDM-XL-MKx-xLCD-29.pdf`, Rev 29, ROOT, physical PDF page 1/1, logical sheet 1/2. Local fit unknown. Connector DNF: yes. Kind: physical_attachment.

The source symbol is not a printed circuit-GND label.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | Circled chassis/earth symbol | numbered_physical_attachment | yes | no | OPEN |

## xLCD P18 — P18 mounting point · DNF cross-model xLCD

Source: `FDM-XL-MKx-xLCD-29.pdf`, Rev 29, ROOT, physical PDF page 1/1, logical sheet 1/2. Local fit unknown. Connector DNF: yes. Kind: physical_attachment.

Explicit source no-connect cross. Do not assign GND to an unconnected mounting point.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | NC · explicit source no-connect | numbered_physical_attachment | yes | yes | OPEN |

## xLCD P6 — P6 mounting point · DNF cross-model xLCD

Source: `FDM-XL-MKx-xLCD-29.pdf`, Rev 29, ROOT, physical PDF page 1/1, logical sheet 1/2. Local fit unknown. Connector DNF: yes. Kind: physical_attachment.

Explicit source no-connect cross. Do not assign GND to an unconnected mounting point.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | NC · explicit source no-connect | numbered_physical_attachment | yes | yes | OPEN |

## xLCD P8 — P8 mounting point · DNF cross-model xLCD

Source: `FDM-XL-MKx-xLCD-29.pdf`, Rev 29, ROOT, physical PDF page 1/1, logical sheet 1/2. Local fit unknown. Connector DNF: yes. Kind: physical_attachment.

Explicit source no-connect cross. Do not assign GND to an unconnected mounting point.

| Source mark | Assignment/path | Domain | DNF | Source NC | Route |
| --- | --- | --- | --- | --- | --- |
| 1 | NC · explicit source no-connect | numbered_physical_attachment | yes | yes | OPEN |

## Excluded source features

- xBuddy, page 9/18: J17, J18, J22, J28. DNF unnumbered unconnected mechanical holes; preserve identity but do not invent pin 1.
- xBuddy, page 9/18: TP3. DNF NRST testpoint; service/test probe point, outside external machine connector/harness contact scope.
- xBuddy, page 14/18: TP1, TP2. DNF AC0/AC1 testpoints; service/test probe points, not external harness connectors.
- xBuddy, page 16/18: JP1. DNF two-position on-board solder jumper; configuration element, not an external connector. Its two source pad positions are acknowledged but excluded from the 329 connector/attachment entries.
- xBuddy, page all: IC pins, IC exposed pads/MP, battery and holder, switches, fiducials, cutter/service holes, resistors, capacitors, inductors, diodes, transistors, silkscreen/tab elements. Component internals or unnumbered fabrication/assembly references; not external connector contact assignments. Component DNF/NC marks remain source facts and do not turn upstream optional paths into fitted nets.
- LoveBoard, page 1/1: U2 HX-717 package pins, other IC/passive pins, fiducials, tab and mechanical elements. Components/internal fabrication references; the U2 inputs are cited only to trace J14, not added as external contacts.
- Heatbed, page 1/1: LED/resistor pins, T1–T8 mechanical/tab/silkscreen elements. Not connector terminals. The sheet does not provide a thermistor harness or an independently specified resistive heater element contact schedule.
- xLCD, page 1/1, logical 1/2: SW1 encoder, S1 reset switch, PZ3 buzzer, U8 panel/component, drivers, LEDs, IC/passive pins, unnumbered fabrication marks. On-board components rather than external connector contacts; arbitrary package positions are not harness cavities.
- xLCD, page logical 2/2: unprovided sheet. Absent from this one-page PDF; board-wide coverage cannot be claimed.
