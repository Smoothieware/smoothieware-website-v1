# RepRap Mendel90

## Identity

Mendel90 is Nophead's sheet-frame redesign of the Prusa Mendel. It uses rigid flat material panels set at 90° and is a distinct open printer design, rather than a simple Mendel revision.

## Wiki evidence

- [RepRap Mendel90](https://reprap.org/wiki/Mendel90): design rationale and mechanical differences.
- [Mendel90 build manual](https://wiki.reprap.org/wiki/Mendel90_Build_Manual): parametric build process, assembly, wiring, electrical checks and calibration sections.
- [Mendel90 buyer's guide](https://wiki.reprap.org/wiki/Mendel90_Buyers_Guide): part-printing recommendations.

## Operation and visuals

The build guide says the OpenSCAD configuration produces bills of materials, drill sheets and 3D assembly views; it describes acrylic (“mendel”) and MDF (“sturdy”) frame configurations. It has explicit sections for wiring and electrical testing of endstops, motors, thermistors and heaters, followed by steps/mm, bed and Z-home calibration.

## Pinout

The design/build manual documents a 26-way ribbon for the heated bed. These are positions in the manual's ribbon assignment, not a universal board or installed-machine pinout:

| 26-way ribbon position | Source-stated circuit | Evidence boundary |
|---|---|---|
| 1–12 | Heater negative | Manual loom/contact assignment; no connector-face orientation stated |
| 13 | Thermistor ground | Same manual build scope |
| 14 | Thermistor signal | Same manual build scope |
| 15–26 | +12 V | Manual loom/contact assignment; do not infer installed controller or protection |

The same manual maps the X/extruder ribbon conductors to the extruder D-sub. Ribbon wire numbers and D-sub pin numbers are separate domains; the source does not identify a mating-face or solder-side view.

| 20-way ribbon wire | Source-stated signal | D-type connector pin |
|---:|---|---:|
| 1 (red) | X limit signal | Not stated |
| 2 | X limit GND | Not stated |
| 3 | Thermistor signal | 1 |
| 4 | Thermistor GND | 9 |
| 5 | Spare | 2 |
| 6 | +12 V | 10 |
| 7 | +12 V | 3 |
| 8 | +12 V | 11 |
| 9 | Heater negative | 4 |
| 10 | Heater negative | 12 |
| 11 | Heater negative | 5 |
| 12 | Fan negative | 13 |
| 13 | Extruder motor red | 6 |
| 14 | Extruder motor blue | 14 |
| 15 | Extruder motor green | 7 |
| 16 | Extruder motor black | 15 |
| 17 | X motor red | Not stated |
| 18 | X motor blue | Not stated |
| 19 | X motor green | Not stated |
| 20 | X motor black | Not stated |

The extruder assembly uses a source-described **male 15-pin D-sub**:

| D-sub pin | Source-stated circuit |
|---:|---|
| 1 | Thermistor signal |
| 2 | Spare |
| 3 | +12 V |
| 4 | Heater negative |
| 5 | Heater negative |
| 6 | Extruder motor red |
| 7 | Extruder motor green |
| 8 | Not listed |
| 9 | Thermistor GND |
| 10 | +12 V |
| 11 | +12 V |
| 12 | Heater negative |
| 13 | Fan negative |
| 14 | Extruder motor blue |
| 15 | Extruder motor black |

Other wiring statements are not additional connector maps: the manual pairs the recommended Y/Z motor coils as red/blue and black/green and says to use the outer two limit-switch pins for normally-closed operation, without numbering those pins or naming a connector. It says the bed heater connects directly to the PSU positive rail and MOSFET tab by ring terminal to avoid the PCB connector it calls underrated. The manual contains alternative electronics configurations and does not identify the controller on any particular Mendel90 build; all these assignments are design/build evidence, not a universal as-built map or a verified current rating.

- [Mendel90 Build Manual](https://wiki.reprap.org/wiki/Mendel90_Build_Manual) — design/build wiring sections; bed 26-way ribbon, X/extruder 20-way ribbon, male 15-contact D-sub, and motor/limit wiring. Captured revision footer: `oldid=186913`.

## Safety and limits

The source says the design is parametric and may change. Preserve the exact configured variant when using the manual.
