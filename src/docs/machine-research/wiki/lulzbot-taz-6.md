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

The official **TAZ 6 Wiring Diagram**, part EL-MS0329 under the TAZ/6.03 documentation path, separately shows X/Y/Z0/Z1/E0/E1 stepper groups, NC max/min limit switches, bed heater and thermistor, chassis grounds, extruder connectors, and wire gauges/insulation classes. Its one-page schematic must be visually traced before adding any further terminal-to-terminal rows; do not merge it with the Nutmeg connector sequence. A separate **TAZ6 CB Extruder Harness EL-HR0087 Rev E**, drawn 2016-08-25, describes a 20-pin controller-box housing and harness branches. This is a distinct harness/revision scope, not an alternate view of the same 16-position toolhead connector.

| Official source | Scope and safe use |
|---|---|
| [TAZ 6 — Nutmeg Generation Extruder Assembly (PDF)](https://download.lulzbot.com/TAZ/6.0/production_docs/OHAI/05_Extruder_OHAI-T6.pdf) | Source for the 16-position toolhead plugging order above; four pages, Nutmeg generation. |
| [TAZ 6 Wiring Diagram EL-MS0329 (PDF)](https://download.lulzbot.com/TAZ/6.03/production_parts/electronics/TAZ6_Wiring.pdf) | TAZ/6.03 machine wiring schematic; visually trace before adding terminal assignments. |
| [TAZ6 CB Extruder Harness EL-HR0087 Rev E (PDF)](https://download.lulzbot.com/retail_parts/Completed_Parts/TAZ_6_Controller_Box_KT-EL0058/Internal_Wiring/TAZ6_CB_Extruder_Harness_revE.pdf) | Controller-box harness drawing dated 2016-08-25; keep separate from the Nutmeg toolhead map and TAZ/6.03 schematic. |

## Visual evidence and source

The local wiki dossier includes captions for the TAZ 01 and TAZ 02 hot-end close-up, but no machine wiring diagram. The manufacturer PDFs above contain assembly and wiring drawings; the TAZ/6.03 schematic and Rev E harness still need visual terminal-by-terminal tracing before more detailed assignments are transcribed. [SoMakeIt printer-model wiki page](https://wiki.somakeit.org.uk/index.php?title=3D_Printers_Models&oldid=325).

## Evidence limits

This dossier records the wiki’s configuration differences and conflict; it does not assert that the printer fleet is currently active or that one instance’s settings fit another. No local unit serial or revision has been matched to the Nutmeg toolhead, TAZ/6.03 schematic, or 2016 Rev E harness. These manufacturer documents must remain source-scoped; they do not prove the wiring of SMI TAZ 01/02/04.
