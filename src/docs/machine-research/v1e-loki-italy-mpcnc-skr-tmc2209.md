# Gabriele Ercole's Italian MPCNC with SKR 1.3 and TMC2209

**Machine identity:** Gabriele Ercole (`loki`)'s individual MPCNC build, posted from Italy in December 2019. The same thread follows this machine through its first crown plot, initial Dremel 4000 use, TFT firmware change, and construction of a long timber bench.

**Novelty check:** On 2026-09-23, the repository dossiers were searched for `Gabriele Ercole`, `CNC Newbie from Italy build`, `TFT35 V2.0`, the posted 500 mm square area, and the machine photo filename. No matching individual-machine dossier was found. This is a distinct owner build, not the other Italian Primo MPCNC dossier (different user, thread, size, and hardware).

## Build and reported use

Ercole reported a 500 × 500 mm work area and 80 mm Z axis. The frame uses 25 mm outside-diameter stainless pipes. The opening post says the crown plot was complete; on 21 December he posted that he had made his first cut, describing it as a tribute to V1 Engineering. In February 2020, he reported building a bench from three 70 × 70 mm timber beams, each 4 m long, and carving the V1 Engineering logo on it. These are owner-reported dimensions and work; the thread gives no independent dimensional or accuracy measurements.

## Control and toolchain

| Function | Owner-reported setup | Evidence limits |
|---|---|---|
| Controller | BIGTREETECH SKR V1.3, 32-bit | No firmware configuration or board revision evidence beyond the owner's description. |
| Stepper drivers | TMC2209 | No current, microstep, UART, or motor-coil settings stated. |
| Motors | NEMA 17, 17HS19-2004S1, 59 N·cm, 2 A | No winding/contact assignment is published. |
| Display | BIGTREETECH TFT35 V2.0 | Owner initially disliked its behavior for CNC use; later installed Dan Blom's CNC-oriented TFT binaries. |
| Firmware | Marlin; owner says disabling `AUTO_BED_LEVELING` in `Configuration.h` resolved an initialization error | Exact Marlin revision and full configuration are not supplied. |
| Initial tool | Dremel 4000 | In December 2019 the owner said he would start cutting with it and later consider a more suitable spindle. The thread does not identify a subsequent spindle installation. |
| Spindle control | Owner said the next step was connecting a relay to start/stop the spindle | No relay type, controller output, wiring, or completed test is documented. |

## Forum visuals reviewed

The opening image is a close view of the blue printed Z/tool mount, stainless round rails, and pen touching a sheet with a plotted V1 Engineering logo. It supports the reported machine geometry and crown-plot context. It does not reveal electronics wiring, connector pin assignments, spindle relay connections, or measured accuracy.

![Close view of the MPCNC Z assembly making a pen plot](https://us1.dh-cdn.net/uploads/db5587/original/3X/b/a/baefad7f4b13a577a5866fa4acc1ec0e9166ec05.jpeg)

The thread also contains full-machine photos, a later first-cut update, a TFT screen photo, and the timber bench/logo result. Images are linked from the source thread rather than mirrored in this dossier. The reviewed opening-image copy has SHA-256 `2b13ea4429669845bbbd5291853d077825172de6c319ef484d36c92fe05ad6b5`.

## Commissioning notes and limits

The display was not initially satisfactory to the owner. He then installed CNC-specific binaries published by another forum user. During that sequence, he reported an initialization error; disabling Marlin's `AUTO_BED_LEVELING` option resolved it for his setup. His next stated step was adding relay-based spindle start/stop, but no completed implementation is shown.

The thread supplies no machine wiring diagram, SKR contact map, driver-to-motor assignments, limit-switch scheme, relay circuit, protective-earth information, or independently measured work envelope. Neither the photograph nor the forum discussion should be treated as wiring instructions.

## Forum source

V1E.com Forum, Gabriele Ercole (`loki`), [“CNC Newbie from Italy build”](https://forum.v1e.com/t/cnc-newbie-from-italy-build/13421), opening post and replies 6, 12, 14, 17–20, 13 December 2019–21 February 2020. The opening post identifies dimensions, pipes, controller, drivers, display, and motors; later owner posts document the first cut, TFT update and configuration workaround, and bench/logo project.
