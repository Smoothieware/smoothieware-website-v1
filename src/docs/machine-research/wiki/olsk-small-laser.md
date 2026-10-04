# OLSK Small Laser

**Evidence depth:** CO2 laser cutter. This dossier is grounded in the Appropedia wiki entry only; references from that page to vendor, GitHub, or other non-wiki pages were not used as evidence.

## Wiki-supported identity and facts

The wiki catalogue identifies Inmachines and lists a 600 × 400 mm format with a 40 W CO2 laser.

## Use, visuals, and electrical connections

The captured wiki catalogue row does not provide a machine-specific operating procedure, connector table, electrical pinout, or transcribable wiring diagram for this model. Those items are recorded as unknown, rather than inferred from the model name or from the page's external links. The source may link further documentation, but that non-wiki content is outside this source-only research scope.

## Source

- [Tolocar / Open Source Machine Tools — Appropedia wiki](https://www.appropedia.org/Open_Source_Machine_Tools) — machine catalogue entry.


## Original-project source addendum — 2026-09-23

The small-laser project has separate V1 and V2 electronics generations. The [V1 README](https://github.com/Open-Lab-Starter-Kit/OLSK-Small-Laser/blob/main/OLSK_Small_Laser_V1/README.md) identifies an LPC1768 / grbl-LPC design; the project also exposes a separate [V2 wiring schematic](https://github.com/Open-Lab-Starter-Kit/OLSK-Small-Laser/blob/main/WiringSchematic_OLSK_Small_Laser_V2.pdf) and V2 firmware directory. These references cannot identify which revision the catalogue's 40 W, 600 × 400 mm record describes.

No revision-matched local build, contact schedule, connector orientation, or basis for choosing either project generation was recovered. Keep both source paths as revision leads; do not attach either schematic as the definitive pinout for this catalogue entry.


### V1/V2 identity clarification

The [V1 README](https://github.com/Open-Lab-Starter-Kit/OLSK-Small-Laser/blob/main/OLSK_Small_Laser_V1/README.md) describes a 40 W, 600 × 400 mm design with a 32-bit LPC1768 controller and grbl-LPC firmware. The repository's current root [V2 README](https://github.com/Open-Lab-Starter-Kit/OLSK-Small-Laser/blob/main/README.md) separately identifies a 40 W, 600 × 400 mm V2 design with a Teensy 4.1 and grblHAL, and links the V2 wiring schematic. Because those catalogue dimensions and laser power appear in both generations, they cannot select a pinout for an unspecified catalogue record.

## V2 design-reference contact inventory — 2026-09-28

This dated addendum expands the earlier wiki-only research. The original paragraphs above describe the earlier evidence scope and are retained as history. The current drawing uses the official V2 design as a clearly marked reference; it does not identify the catalogue machine as V2. Both V1 and V2 use a 40 W CO₂ laser and 600 × 400 mm work area. V1 identifies LPC1768/grbl-LPC; V2 identifies Teensy 4.1/grblHAL.

The proposed current drawing contains **39 source/reference groups and 142 schedule entries: 57 printed marks and 85 editorial positions, cable conductors or physical points**. They are not 142 numbered physical connector pins. All 142 entries are OPEN, alongside all 82 proposed SmoothieBox exterior contacts and four separate service ports. There are zero function guesses and zero routes. OPEN means no SmoothieBox route has been selected; it does not mean NC or an electrically open circuit. No DB25 is present in the supplied evidence.

### Source and revision limits

- The [V2 README](https://github.com/Open-Lab-Starter-Kit/OLSK-Small-Laser/blob/e48c823d2652b6898e59fc4f1ac11ca7a4260da0/README.md), [single-sheet V2 wiring drawing](https://github.com/Open-Lab-Starter-Kit/OLSK-Small-Laser/blob/e48c823d2652b6898e59fc4f1ac11ca7a4260da0/WiringSchematic_OLSK_Small_Laser_V2.pdf) and [V2 BOM](https://github.com/Open-Lab-Starter-Kit/OLSK-Small-Laser/blob/e48c823d2652b6898e59fc4f1ac11ca7a4260da0/OLSK_Small_Laser_V2_BOM.pdf) are pinned to commit `e48c823d2652b6898e59fc4f1ac11ca7a4260da0`. The schematic SHA-256 is `4460d299f12b9547facd3990c15bcaece1ccf56b06829b98069ee2e3a79521a8`.
- The separate [V1 README](https://github.com/Open-Lab-Starter-Kit/OLSK-Small-Laser/blob/e48c823d2652b6898e59fc4f1ac11ca7a4260da0/OLSK_Small_Laser_V1/README.md) establishes a different electronics generation. No V1 pin schedule is merged into the V2 reference.
- The [2025 HardwareX design paper](https://doi.org/10.1016/j.ohx.2025.e00664) describes Laser Controller PCB V1.7, 24 V inductive probes, conversion of laser signals from 3.3 V to 5 V, and ATtiny gating delayed by 6 s at startup. The repository README links a shield path named V1-0. The fitted controller revision and its exact connector schedule remain unresolved; pin numbers from that other shield are not transferred here.
- The BOM lists DM556T drivers, LRS-100-24 logic supply, RSP-500-48A motor supply and MYJG50W laser PSU. The two DC supply drawings are labeled by their seven- and nine-terminal inventories. Their icon locations and drawn lines do not independently qualify a fitted model, a supply voltage or an electrical netlist.

### Individual inventory

Ordinal numbers, A/B labels, source-page positions and instance indexes below are editorial. Each is explicitly identified as such in the diagram metadata. Repeated V+/V− marks remain separate entries without an asserted mating-face order.

| Group | Entries | Source marks or editorial identifiers |
| --- | ---: | --- |
| X driver · 12 printed terminal marks · V2 design reference | 12 | PUL+, PUL-, DIR+, DIR-, ENA+, ENA-, GND, VCC, A+, A-, B+, B- |
| Y driver · 12 printed terminal marks · V2 design reference | 12 | PUL+, PUL-, DIR+, DIR-, ENA+, ENA-, GND, VCC, A+, A-, B+, B- |
| Laser PSU · control terminals · V2 design reference | 6 | 5V, IN, G, P, L, H |
| Laser PSU · mains and tube-return block · V2 design reference | 4 | N, L, GND, LASER (-) |
| Seven-terminal supply drawing · V2 design reference | 7 | V+ A, V+ B, V- A, V- B, GND, N, L |
| Nine-terminal supply drawing · V2 design reference | 9 | L, N, G, V- 1, V- 2, V- 3, V+ 1, V+ 2, V+ 3 |
| Power plug · three printed nets · V2 design reference | 3 | L, N, Earth |
| Controller · top four-position block · V2 design reference | 4 | position 1, position 2, position 3, position 4 |
| Controller · LASER group · V2 design reference | 3 | position 1, position 2, position 3 |
| Controller · Y-DRIVER group · V2 design reference | 4 | position 1, position 2, position 3, position 4 |
| Controller · X-DRIVER group · V2 design reference | 4 | position 1, position 2, position 3, position 4 |
| Controller · upper left sensor plug · V2 design reference | 3 | position 1, position 2, position 3 |
| Controller · lower left sensor plug · V2 design reference | 3 | position 1, position 2, position 3 |
| X inductive probe · cable conductors · V2 design reference | 4 | core 1, core 2, core 3, shield |
| X motor · cable conductors · V2 design reference | 5 | core 1, core 2, core 3, core 4, shield |
| Y inductive probe · cable conductors · V2 design reference | 4 | core 1, core 2, core 3, shield |
| Y motor · cable conductors · V2 design reference | 5 | core 1, core 2, core 3, core 4, shield |
| Window sensor · cable conductors · V2 design reference | 3 | core 1, core 2, shield |
| Chiller sensor / three-pole connector reference · V2 design reference | 3 | 1, 3, third pole |
| Laser tube · electrode ends · V2 design reference | 2 | (+), (-) |
| LED strip 1 · lead ends · V2 design reference | 2 | lead 1, lead 2 |
| LED strip 2 · lead ends · V2 design reference | 2 | lead 1, lead 2 |
| Emergency button · depicted lead ends · V2 design reference | 2 | lead 1, lead 2 |
| Wire duct screw · depicted bond point · V2 design reference | 1 | bond point |
| Drawing splice · upper-left · V2 design reference | 2 | entry 1, entry 2 |
| Drawing splice · upper-right · V2 design reference | 5 | entry 1, entry 2, entry 3, entry 4, entry 5 |
| Drawing splice · far-right · V2 design reference | 2 | entry 1, entry 2 |
| Drawing splice · lower-supply-top · V2 design reference | 3 | entry 1, entry 2, entry 3 |
| Drawing splice · lower-supply-middle · V2 design reference | 3 | entry 1, entry 2, entry 3 |
| Drawing splice · lower-supply-bottom · V2 design reference | 3 | entry 1, entry 2, entry 3 |
| Drawing splice · lower-laser · V2 design reference | 3 | entry 1, entry 2, entry 3 |
| Drawing splice · lower-inlet-top · V2 design reference | 2 | entry 1, entry 2 |
| Drawing splice · lower-inlet-middle · V2 design reference | 3 | entry 1, entry 2, entry 3 |
| Drawing splice · lower-inlet-bottom · V2 design reference | 5 | entry 1, entry 2, entry 3, entry 4, entry 5 |
| Laser screw connector 1 · BOM positions · V2 design reference | 2 | position 1, position 2 |
| Laser screw connector 2 · BOM positions · V2 design reference | 2 | position 1, position 2 |
| USB service connection · V2 design reference | 0 | Contact schedule unknown |
| Cable inventory · endpoints already counted · V2 design reference | 0 | Contact schedule unknown |
| External accessories · pin schedules unknown · V2 design reference | 0 | Contact schedule unknown |

### Limits that affect connection choices

The controller LASER, X-DRIVER and Y-DRIVER groups are original-controller interfaces. Their visible unnumbered positions are not external inputs for a second controller. SmoothieBox outputs must not be paralleled with original controller outputs. Direct STEP/DIR guesses would require the exact DM556T input topology, polarity, voltage, input current, timing and return arrangement, plus removal or isolation of original control outputs. No qualified selection is available here.

The probe cable cores are not assigned to 24 V, return or signal; X/Y source labels do not establish min versus max endstops. The window sensor and chiller contacts are part of the existing safety-related circuit and are not recast as direct SmoothieBox inputs. Laser IN/L/H/P names alone do not qualify polarity or permit bypassing the startup gate, window sensor or chiller circuit. Tube voltage, mains and protective-earth paths remain outside the proposed logic interface.

The chiller sheet labels 1 and 3. Its BOM says three-pole connector and “3 cores used” while also describing a two-core cable; a separate chiller cable is two-core. The third pole is retained as **third pole, number/function unresolved**. It is never labeled 2 or NC.

The twelve printed marks per driver are retained. Three extra blank squares per driver icon are excluded because they lack contact/function evidence. Only L/N/Earth are counted on the power-plug symbol; its other rectangles are not a proven numbered contact schedule. Controller screw positions and splice wire entries are visibly distinct endpoints and use editorial IDs without claims of connector model, net assignment or mating geometry. USB and accessory connector schedules remain unknown. Cable core/shield counts do not establish connector-pin counts or terminal assignments. The tube screw-connector entries are BOM position references, separate from the two tube electrodes.

### Acceptance still owed locally

Generate only wiki-180 from the proposed catalog, then reconcile its metadata and visible contact rows with the counts above. Inspect the final raster for clipped labels, overlap and readable source/OPEN text. Preserve the previous primary SVG byte-for-byte and link it inside a closed historical disclosure; keep the pre-existing legacy content closed. The HTML summary, visible figure and full-size link must all identify this V2 reference and use the same counts. Local generation, rendering and public-byte parity have not been performed by this advisor.
