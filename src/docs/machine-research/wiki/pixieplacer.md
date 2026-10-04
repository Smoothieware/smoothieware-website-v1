# PixiePlacer

> Scope update — 2026-09-26: The Appropedia-only paragraphs below remain the historical capture. The appended original-project evidence extends the current dossier, without establishing a fitted machine harness.

**Evidence depth:** benchtop pick-and-place machine. This dossier is grounded in the Appropedia wiki entry only; references from that page to vendor, GitHub, or other non-wiki pages were not used as evidence.

## Wiki-supported identity and facts

The wiki catalogue identifies a named machine project and notes MGN12 rails. It does not provide work area, nozzle count, vision setup, or pinout in the row.

## Use, visuals, and electrical connections

The captured wiki catalogue row does not provide a machine-specific operating procedure, connector table, electrical pinout, or transcribable wiring diagram for this model. Those items are recorded as unknown, rather than inferred from the model name or from the page's external links. The source may link further documentation, but that non-wiki content is outside this source-only research scope.

## Source

- [Tolocar / Open Source Machine Tools — Appropedia wiki](https://www.appropedia.org/Open_Source_Machine_Tools) — machine catalogue entry.

## Original PixiePlacer project wiring reference — 2026-09-26

The original [PixiePlacer electronics diagram](https://github.com/PixiePlacer/PixiePlacer/blob/87bffc013bbd635a1baa26d848d688d89592b233/Electronics/PixiePlacer_Electronics_Wiring_Diagramm.jpg) is a functional block drawing, not a cable pinout. The original 3933 × 2115 image captured for this research has SHA-256 `28f7eec737e27e3cbce9a8bbe708a67e1eb7c24a9a0762332213ada2cc74d74e`. Its red data and black power lines do not define conductors, terminals, mating views, common returns, protective earth or a qualified emergency-stop circuit. The original project's SKR 1.4 Turbo/Marlin design is a source reference; neither the fitted controller revision nor an installed SmoothieBox harness has been verified.

The [Electronics Diagram table](https://github.com/PixiePlacer/PixiePlacer/wiki/Electronics-Diagram/fd6e8a48d2466d7fc1f58270d7e6b1f03d95c522) associates X, Y and Z motors with X-Motor, Y-Motor and Z-Motor outputs; A and B rotation motors with E0-Motor and E1-Motor; and the Z limit with Z-Stop. The [Marlin motion-controller notes](https://github.com/PixiePlacer/PixiePlacer/wiki/Marlin-%E2%80%90-Motion-Controller/8bd2591304f9a3f3bb4874794bb38baeecec8ace) identify TMC5160 drivers for X/Y/Z, TMC2208 for A/B and X/Y sensorless homing. The diagram calls the rotation motors left/right, but it does not prove which is A or B. These five motor functions use **former-controller winding outputs**, not STEP/DIR inputs for SmoothieBox. The original motor plugs, coil phases, cable assignments and machine-end terminals remain OPEN.

The [PixiePlacer-hosted SKR 1.4 Turbo pin map](https://github.com/PixiePlacer/PixiePlacer/blob/87bffc013bbd635a1baa26d848d688d89592b233/Electronics/Pictures/SKR-V1.4-Turbo-pinout.jpg) marks X, Y, **two Z**, E0 and E1 motor-output positions `2B`, `2A`, `1A`, `1B`, and the Z-STOP board header positions `5V`, `GND`, `1.27`. The captured 2048 × 1336 image has SHA-256 `05c7105324d32508204b3521e18ed3502ac6c548002641d07200fd7883b01655`. This is a credited board pin-map redraw, not a verified PixiePlacer harness. The two Z sockets are distinct board positions; no source establishes use of both. These literal marks are not numeric cavity numbers or motor-end pin roles. The [BTT SKR V1.4 maker schematic](https://github.com/bigtreetech/BIGTREETECH-SKR-V1.3/blob/b238aa402753e81d551b7d34a181a262a138ae9e/BTT%20SKR%20V1.4/Hardware/BTT%20SKR%20V1.4-SCH.pdf), locally captured as SHA-256 `7837849876b4a6b339c2fd9920db83f7acf1914cd2956da4d0a158beaf5109a7`, is separate board-design evidence. The [maker-hosted copy of the pin map](https://github.com/bigtreetech/BIGTREETECH-SKR-V1.3/blob/b238aa402753e81d551b7d34a181a262a138ae9e/BTT%20SKR%20V1.4/Hardware/SKR-V1.4-Turbo-pinout.jpg) has the same Git blob as the project-hosted copy, so it is the same drawing, not an independent hardware validation.

The 27 readable source-board positions are these **OPEN former-controller references**. “Y-side” and “E0-side” locate the two Z sockets in the picture; they are not manufacturer connector designators or second-machine-axis claims. None is a verified machine-cable cavity or a SmoothieBox wire.

| Former SKR board socket | Printed position labels | Boundary |
| --- | --- | --- |
| X motor output | `2B`, `2A`, `1A`, `1B` | Board winding outputs, not STEP/DIR inputs |
| Y motor output | `2B`, `2A`, `1A`, `1B` | Board winding outputs, not STEP/DIR inputs |
| Z motor output, Y-side | `2B`, `2A`, `1A`, `1B` | Which Z socket the machine used is unknown |
| Z motor output, E0-side | `2B`, `2A`, `1A`, `1B` | Which Z socket the machine used is unknown |
| E0 motor output | `2B`, `2A`, `1A`, `1B` | Project A rotation association; left/right cable unknown |
| E1 motor output | `2B`, `2A`, `1A`, `1B` | Project B rotation association; left/right cable unknown |
| Z-STOP | `5V`, `GND`, `1.27` | Board contact labels, not switch-side cavities; voltage tolerance and installed conductors unknown |

The [project's Marlin pin definitions](https://github.com/PixiePlacer/PixiePlacer/blob/87bffc013bbd635a1baa26d848d688d89592b233/Software/Motion_Controller_Marlin/Marlin_PixiePlacer_11.07.2023/Marlin/src/pins/lpc1768/pins_BTT_SKR_V1_4.h) identify X_DIAG as `P1_29`, Y_DIAG as `P1_28` and Z-STOP as `P1_27`. E0DET/E1DET (`P1_26`/`P1_25`) appear in conditional alternate X/Y min/max aliases; they are not proof of installed X/Y sensorless wires to E0/E1. MCU identifiers are software/design labels, not machine connector contact numbers. The Z-STOP `5V` board label does not prove a powered switch or compatible SmoothieBox supply path.

The functional drawing names up-facing and down-facing camera lights, two cameras, left/right nozzle valves, a vacuum pump, two vacuum-sensing modules, a relay module, step-down converters, a separate feeder controller, a vacuum-pump switch, mains entry, a 24 V supply and an emergency-stop device. The [Electronics text](https://github.com/PixiePlacer/PixiePlacer/wiki/Electronics) additionally mentions a solder-dispenser valve; it is not visible in the cited JPEG. All of these are peripheral identities only: connector housings, contact positions, ratings, relay channels, polarity and fitted paths remain OPEN. The drawing's 230 V and 24 V annotations are source labels, not an installation specification. The emergency-stop topology and safety function are not established.

The Electronics Diagram table assigns both the down-facing LED and vacuum pump to `2.05`. The Electronics text describes the down-facing LED as `Probe`; the [July 2023 OpenPnP driver settings](https://github.com/PixiePlacer/PixiePlacer/blob/87bffc013bbd635a1baa26d848d688d89592b233/Software/OpenPnP/GCode_Driver_Settings_12.07.2023.txt) use `P0205` for the pump and separate `P0010`/`P0126` light resources. This makes a table error plausible, but the physical Up/Down association and installed wiring are unverified. Keep the conflict visible; no correction or direct SmoothieBox line follows from those commands. The [Marlin change log](https://github.com/PixiePlacer/PixiePlacer/blob/87bffc013bbd635a1baa26d848d688d89592b233/Software/Motion_Controller_Marlin/Change%20Log%20Marlin%2011.07.2023.txt) assigns `SERVO0_PIN` and `SERVO1_PIN` to the same `P2_00` identifier, so it cannot prove two separate physical outputs.

**Wiring conclusion:** No exact PixiePlacer machine-side terminal-to-SmoothieBox exterior pin pair is established. The peripheral cards and former-controller board marks are OPEN source references. No solid or dotted guessed conductor should be drawn from these records alone.
