# LulzBot TAZ 6

Research status: wiki-sourced model dossier; SoMakeIt records multiple differently configured instances. Captured 2026-09-23.

## Identity and instance distinction

The SoMakeIt wiki lists SMI TAZ 01 as a LulzBot TAZ 6 and says TAZ 03 and TAZ 04 are also standard TAZ 6 units. TAZ 01 is listed functional, with a webcam, enclosure, 280 × 280 × 250 mm print volume, PEI surface, 1.2 mm nozzle, PLA/ABS/PETG, and Cura slicing with Cura, SD card, or OctoPrint transfer. TAZ 02 is described as a TAZ 6 with a 0.8 mm hardened-steel E3D hot end for flexible, abrasive, or high-temperature materials in addition to the TAZ 01 material list.

The wiki has an unresolved naming conflict: it says “TAZ 3 and 4” are standard TAZ 6s, then labels “SMI TAZ 03” as “Prusa i3 MK3.” The two statements cannot safely be merged. This dossier attributes only the unambiguous TAZ 01/02 and the unambiguous TAZ 04 statement to the TAZ 6 model; TAZ 03 remains unresolved.

## Workflow and safety

The page names Cura, SD-card transfer, and OctoPrint. It does not include a full print-start procedure. Follow the current machine-specific induction before use; this captured wiki page does not prove current status for every unit.

## Connections and pinout

The SoMakeIt page does not publish electronics or pinout details. Separate official LulzBot documents add source-scoped wiring evidence, but the local units are not tied to a documented hardware revision or toolhead generation.

The official **TAZ 6 — Nutmeg Generation Extruder Assembly** gives a 1–16 plugging order for a 16-pin Molex toolhead connector. It documents motor wires at 1–4 (red, white, green, black); heater cartridge at 5–6 (red); dual fan at 7–8 (white, blue); heat-sink fan at 9–10 (red, black); switch at 11–12 (purple); position 13 empty; a ground wire at 14 (red); and thermistor at 15–16 (red, black). The document also says the Hexagon hot-end ground wire connects to this connector. The source text does not define a mating-face view or electrical ratings; retain its unusual “Pin 14 red ground” label without normalizing it.

| Source-defined position | Source-stated wire/device role | Evidence type | Limits |
|---|---|---|---|
| 1–4 | Red/white/green/black extruder motor wires | Connector-position sequence in Nutmeg assembly instructions | No motor phase assignment or connector view stated in extracted source text |
| 5–6 | Red heater-cartridge wires | Connector-position sequence | No polarity or rating stated |
| 7–8 | White/blue dual-fan wires | Connector-position sequence | No fan polarity stated |
| 9–10 | Red/black heat-sink-fan wires | Connector-position sequence | No polarity stated |
| 11–12 | Purple switch wires | Connector-position sequence | Switch function/contact state not specified in this sequence |
| 13 | Empty | Connector-position sequence | — |
| 14 | Red ground wire | Connector-position sequence | Preserve source wording; no connector view or rating stated |
| 15–16 | Red/black thermistor wires | Connector-position sequence | No polarity or sensor curve stated |

The official **TAZ 6 Wiring Diagram** (`TAZ6_Wiring.pdf`) under the TAZ/6.03 documentation path separately shows X/Y/Z0/Z1/E0/E1 stepper groups, NC max/min limit switches, bed heater and thermistor, chassis grounds, extruder connectors, and wire gauges/insulation classes. The drawing identifies EL-MS0329 as a 5 V, 1500 W TVS diode part number; it is not the drawing's document ID. Its one-page schematic has now been visually traced for the six NC endstop branches below; these are source-defined C-grid reference pins, not confirmation of the locally installed machines. Do not merge them with the Nutmeg connector sequence. A separate **TAZ6 CB Extruder Harness EL-HR0087 Rev E**, drawn 2016-08-25, describes a 20-position controller-box housing and harness branches. This is a distinct harness/revision scope, not an alternate view of the same 16-position toolhead connector.

| Source-labeled NC switch | `P/O C-GRID CONN` contacts shown | Interpretation boundary |
|---|---:|---|
| X-MAX LIMIT SWITCH NC (`SW1`, `SW2`) | 1:13, 1:14 | Two source-numbered harness contacts lead to the two NC switch terminals; contact polarity/view is not stated. |
| X-MIN LIMIT SWITCH NC (`SW1`, `SW2`) | 2:10, 2:11 | Same limitation. |
| Y-MAX LIMIT SWITCH NC (`SW1`, `SW2`) | 3:6, 3:7 | Same limitation. |
| Y-MIN LIMIT SWITCH NC (`SW1`, `SW2`) | 3:4, 3:5 | Same limitation. |
| Z-MAX LIMIT SWITCH NC (`SW1`, `SW2`) | 2:7, 2:8 | Same limitation. |
| Z-MIN LIMIT SWITCH NC (`SW1`, `SW2`) | 3:1, 3:2 | Same limitation. |

The schematic also traces the named C-grid positions into the legacy RAMBo and peripheral circuits. This is a source-only net/contact map: it does not make the old motor outputs compatible with SmoothieBox driver inputs, establish a fitted harness, or prove contact-face orientation. Explicit shield/chassis marks and no-connects are retained separately from circuit contacts.

| Schematic connector position | Source-labeled role / net | Destination shown |
|---|---|---|
| C-GRID 1:1–4 | E0 stepper motor 2B, 2A, 1A, 1B | Extruder 0 stepper motor; former-controller output |
| C-GRID 1:5 | Cable shield / chassis-ground mark | Shield termination shown |
| C-GRID 1:6 | +24V2_OUT | Extruder 0 heater supply feed (EH2); not the switched return |
| C-GRID 1:7 | EXT_HEAT0_OUT | Extruder 0 heater |
| C-GRID 1:8 | +24V2_OUT | FAN0 feed |
| C-GRID 1:9 | FAN0_OUT | 24 V control-box cooling fan |
| C-GRID 1:10 | FAN1_OUT | Extruder 0 24 V print-cooling fan branch, as drawn |
| C-GRID 1:11 | +24V2_OUT | FAN1 feed |
| C-GRID 1:12 | Z_PROBE / ZP1 | Probe signal leg |
| C-GRID 1:13–14 | X-MAX NC switch SW1/SW2 | Switch loop; contact-to-GND/SIGNAL order unspecified |
| C-GRID 1:15–16 | E0 thermistor RT2/RT1 | THERM0_IN/GND circuit; sensor curve not stated |
| C-GRID 2:1–4 | X stepper motor 2B, 2A, 1A, 1B | X stepper motor; former-controller output |
| C-GRID 2:5 | Cable shield / chassis-ground mark | Shield termination shown |
| C-GRID 2:7–8 | Z-MAX NC switch SW1/SW2 | Switch loop; contact-to-GND/SIGNAL order unspecified |
| C-GRID 2:10–11 | X-MIN NC switch SW1/SW2 | Switch loop; contact-to-GND/SIGNAL order unspecified |
| C-GRID 3:1–2 | Z-MIN NC switch SW1/SW2 | Switch loop; contact-to-GND/SIGNAL order unspecified |
| C-GRID 3:3 | Z_PROBE / Z_GND | Probe return net also shown on C-GRID 3:10 through a TVS-to-chassis branch; not established as interchangeable with SmoothieBox GND |
| C-GRID 3:4–5 | Y-MIN NC switch SW1/SW2 | Switch loop; contact-to-GND/SIGNAL order unspecified |
| C-GRID 3:6–7 | Y-MAX NC switch SW1/SW2 | Switch loop; contact-to-GND/SIGNAL order unspecified |
| C-GRID 3:10 | Z_GND branch, shared with position 3 / RAMBo GND | Separate TVS shunt to chassis; circuit GND is not established as protective earth |
| C-GRID 4:1–4 | Y stepper motor 2B, 2A, 1A, 1B | Y stepper motor; former-controller output |
| C-GRID 4:5 | Cable shield / chassis-ground mark | Shield termination shown |
| C-GRID 4:6–9 | Z1 stepper motor 2B, 2A, 1A, 1B | Z stepper motor 1; former-controller output |
| C-GRID 4:10–11 | Cable shield / chassis-ground marks | Shield terminations shown |
| C-GRID 4:12–15 | Z2 stepper motor 2B, 2A, 1A, 1B | Z stepper motor 2; former-controller output |
| C-GRID 4:16 | Explicit no-connect mark | No circuit connection shown |
| EXTRUDER 2 CONN:1,4 | E1 thermistor RT1/RT2 | THERM1_IN/GND circuit; preserve unusual printed connector label |
| EXTRUDER 2 CONN:2 | Cable shield / chassis-ground mark | Shield termination shown |
| EXTRUDER 2 CONN:3,7,11,14 | E1 stepper motor 2B, 2A, 1A, 1B | Extruder 1 stepper motor; former-controller output |
| EXTRUDER 2 CONN:5–6 | AUX +5V / GND | Extruder 1 5 V cooling fan circuit |
| EXTRUDER 2 CONN:9–10 | FAN2_OUT / +24V2_OUT | 24 V print-cooling fan branch |
| EXTRUDER 2 CONN:12–13 | +24V2_OUT / EXT_HEAT1_OUT | Extruder 1 heater branch |
| BED HEATER CONN:1–2 | BED_HEAT_OUT / +24V3_OUT | Bed heater; legacy power output |
| Unlabeled bed sensor fragment:9,8 | RT1/RT2 | THERM2_IN/GND circuit; connector identity is not printed |

All omitted positions in these source connector groups remain unassigned unless the row above states an explicit no-connect. The sheet's former-controller motor output wires must remain OPEN to SmoothieBox STEP/DIR/ENABLE inputs; the motor contact sequence alone is not a driver input pinout. Heater outputs also remain OPEN. Candidate passive-switch and thermistor pairings are still only functional guesses; the Z-probe branch stays OPEN because its ground/protection relationship requires separate electrical verification.

The schematic supports a candidate functional pairing from each passive NC switch loop to the similarly named SmoothieBox min/max input's **SIGNAL** and **GND** contacts. That is an inference only: the diagram maps each switch to the legacy RAMBo harness, while neither fitted TAZ revision nor SmoothieBox input electrical behavior is established here. Any such routes must be violet dotted `GUESS` lines and must instruct the reader to verify the installed switch wiring, continuity, input voltage/pull-up/common reference, and fail-safe behavior before use. Do not connect the switch to `SENSOR +` based on this inference.

The same schematic maps three two-wire thermistor devices to these printed positions:

| Source-named sensor | Source connector positions | Source wire marks |
|---|---|---|
| Extruder 0 thermistor | `P/O C-GRID CONN 1` pins 16 and 15 | RT1 and RT2 (respectively) |
| Extruder 1 thermistor | `P/O EXTRUDER 2 CONN` pins 1 and 4 | RT1 and RT2 (respectively); preserve this unusual connector label |
| Bed heat thermistor | Two-position schematic fragment marked 9 and 8; connector designator is not shown in the reviewed crop | RT1 and RT2 (respectively) |

A one-to-one candidate pairing with SmoothieBox `TEMP` sensor/GND terminals is plausible because both source and carrier name matching temperature channels, but the bed fragment's connector identity, thermistor curve, measured resistance, source revision, and wiring assignment on each SoMakeIt unit are unverified. Show any such mapping only as violet dotted `GUESS`; confirm sensor type/curve, connector identity and channel identity before energizing. Neither thermistor conductor has source-specified polarity.

The separate 2016 EL-HR0087 Rev E controller-box harness drawing lists a 20-position PC-CN0056 housing, 16 female crimp contacts, wire colours, and each drawn branch endpoint. The drawing assigns no controller function to these harness positions; they are source-reference contacts, not TAZ/6.03 schematic nets or proof of an installed harness. Positions 17–20 are not individually drawn or assigned, so they remain source-unlisted rather than being called empty. Position 5 terminates in a ring lug, not a branch connector cavity.

| PC-CN0056 housing position | Wire / termination shown | Branch endpoint shown | What the drawing does not establish |
|---:|---|---|---|
| 1 | Red, 22 AWG four-conductor cable | Female 4-position housing position 1 | Circuit function, connector mating view, installed fit |
| 2 | White, 22 AWG four-conductor cable | Female 4-position housing position 2 | Same |
| 3 | Green, 22 AWG four-conductor cable | Female 4-position housing position 3 | Same |
| 4 | Black, 22 AWG four-conductor cable | Female 4-position housing position 4 | Same |
| 5 | Black, 24 AWG, 100 mm | Non-insulated ring terminal, EL-MS0141 | Grounding purpose/bond destination beyond the ring termination |
| 6 | Red, 24 AWG | First 2-position terminal-block plug, position 1 | Electrical function and load rating |
| 7 | Red, 24 AWG | First 2-position terminal-block plug, position 2 | Same |
| 8 | White, 24 AWG | Second 2-position terminal-block plug, position 2 | Same |
| 9 | Blue, 24 AWG | Second 2-position terminal-block plug, position 1 | Same |
| 10 | Yellow, 24 AWG | Female 2-position Molex housing, position 1 | Electrical function and polarity |
| 11 | Green, 24 AWG | Female 2-position Molex housing, position 2 | Same |
| 12 | Black, 24 AWG | EL-MS0075 8-position housing, position 3 | Circuit function; the six factory preloads are not assigned electrical roles |
| 13 | Purple, 24 AWG | Female 3-position Molex housing, position 1 | Electrical function and polarity |
| 14 | Purple, 24 AWG | Female 3-position Molex housing, position 2 | Same |
| 15 | Orange, 24 AWG | Female 2-position Molex housing, position 1 | Electrical function and polarity |
| 16 | Orange, 24 AWG | Female 2-position Molex housing, position 2 | Same |
| 17 | No lead or position assignment drawn | None shown | Cavity population and function unknown |
| 18 | No lead or position assignment drawn | None shown | Same |
| 19 | No lead or position assignment drawn | None shown | Same |
| 20 | No lead or position assignment drawn | None shown | Same |

The EL-MS0075 note says six female crimp pins are preloaded into positions 1, 2, 4, 6, 7, and 8; the harness wire is at position 3. Position 5 has no assigned lead in the drawing. Those preloaded contacts have no source-defined circuit roles. The branch list above preserves the drawing's differing connector sizes instead of treating them as interchangeable with the Nutmeg toolhead connector or the schematic's C-grid contacts. No branch function can yet be mapped to SmoothieBox from this harness drawing alone.

| Official source | Scope and safe use |
|---|---|
| [TAZ 6 — Nutmeg Generation Extruder Assembly (PDF)](https://download.lulzbot.com/TAZ/6.0/production_docs/OHAI/05_Extruder_OHAI-T6.pdf) | Source for the 16-position toolhead plugging order above; four pages, Nutmeg generation. |
| [TAZ 6 Wiring Diagram (PDF)](https://download.lulzbot.com/TAZ/6.03/production_parts/electronics/TAZ6_Wiring.pdf) | TAZ/6.03 machine wiring schematic; EL-MS0329 is the 5 V, 1500 W TVS diode part number shown on the sheet, not its document ID. |
| [TAZ6 CB Extruder Harness EL-HR0087 Rev E (PDF)](https://download.lulzbot.com/retail_parts/Completed_Parts/TAZ_6_Controller_Box_KT-EL0058/Internal_Wiring/TAZ6_CB_Extruder_Harness_revE.pdf) | Controller-box harness drawing dated 2016-08-25; keep separate from the Nutmeg toolhead map and TAZ/6.03 schematic. |

## Visual evidence and source

The local wiki dossier includes captions for the TAZ 01 and TAZ 02 hot-end close-up, but no machine wiring diagram. The six TAZ/6.03 NC-switch contact pairs above have been visually transcribed; the remaining schematic contacts and the Rev E harness still need terminal-by-terminal tracing before further assignments are added. [SoMakeIt printer-model wiki page](https://wiki.somakeit.org.uk/index.php?title=3D_Printers_Models&oldid=325).

## Evidence limits

This dossier records the wiki’s configuration differences and conflict; it does not assert that the printer fleet is currently active or that one instance’s settings fit another. No local unit serial or revision has been matched to the Nutmeg toolhead, TAZ/6.03 schematic, or 2016 Rev E harness. These manufacturer documents must remain source-scoped; they do not prove the wiring of SMI TAZ 01/02/04.

## Additional TAZ/6.03 display connector inventory

The same schematic separately shows the RRD_LCD_MODULE peripheral connected by two 10-conductor ribbon cables. Its E1/E2 connector-position marks below are schematic locators, not a verified mating-face drawing or proof of the installed display. All remain OPEN to SmoothieBox; display protocol, supply, direction, pin compatibility and any replacement display adapter are unestablished. A source no-connect cross says no schematic connection is drawn; it does not prove an empty cavity.

| Peripheral source mark | Source signal label | Connection state on this sheet |
|---|---|---|
| E1-1 | BEEP | Conductor drawn to legacy controller circuit; no SmoothieBox route selected |
| E1-2 | EBTN_ENC | Conductor drawn to legacy controller circuit; no SmoothieBox route selected |
| E1-3 | LCDE | Conductor drawn to legacy controller circuit; no SmoothieBox route selected |
| E1-4 | LCDRS | Conductor drawn to legacy controller circuit; no SmoothieBox route selected |
| E1-5 | LCD4 | Conductor drawn to legacy controller circuit; no SmoothieBox route selected |
| E1-6 | LCD5 | Conductor drawn to legacy controller circuit; no SmoothieBox route selected |
| E1-7 | LCD6 | Conductor drawn to legacy controller circuit; no SmoothieBox route selected |
| E1-8 | LCD7 | Conductor drawn to legacy controller circuit; no SmoothieBox route selected |
| E1-9 | GND | Conductor drawn to legacy controller circuit; no SmoothieBox route selected |
| E1-10 | +5V_VCC | Conductor drawn to legacy controller circuit; no SmoothieBox route selected |
| E2-1 | PB3_MISO | Conductor drawn to legacy controller circuit; no SmoothieBox route selected |
| E2-2 | PB1_SCK | Conductor drawn to legacy controller circuit; no SmoothieBox route selected |
| E2-3 | BTN_EN2 | Conductor drawn to legacy controller circuit; no SmoothieBox route selected |
| E2-4 | SD_CSEL | Conductor drawn to legacy controller circuit; no SmoothieBox route selected |
| E2-5 | BTN_EN1 | Conductor drawn to legacy controller circuit; no SmoothieBox route selected |
| E2-6 | PB2_MOSI | Conductor drawn to legacy controller circuit; no SmoothieBox route selected |
| E2-7 | SD_DET | Conductor drawn to legacy controller circuit; no SmoothieBox route selected |
| E2-8 | RESET | Conductor drawn to legacy controller circuit; no SmoothieBox route selected |
| E2-9 | GND | Explicit no-connect X; physical population unknown |
| E2-10 | KILL | Explicit no-connect X; physical population unknown |

This adds 20 source-marked display endpoints. Together with the 66 previously inventoried TAZ/6.03 harness/bed marks, the diagram carries 86 TAZ/6.03 positions, 43 separate Rev E positions and 16 separate Nutmeg positions: 145 source/reference positions in 18 cards, including four Rev E nominal form slots. These are reference positions across different source scopes, not 145 unique fitted-machine conductors or a complete machine netlist. RAMBo controller-board pins, internal mains/filter/switch/supply terminals and repeated device-terminal views are not included in this connector-card count; the Rev E ring lug is recorded as the termination of main-housing position 5, not an invented numbered branch cavity.
