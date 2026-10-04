# Ooznest WorkBee CNC router — CoMakingSpace configuration

**Wiki evidence status:** exact WorkBee-family installation with substantial local mechanical and controls information. The wiki identifies this installation as a 1500 × 1500 mm WorkBee based on the OpenBuilds OX; it does not identify a specific WorkBee hardware revision.

## Machine and installed components

The wiki reports a roughly 1280 × 1200 mm cutting area and material up to 50 mm thick. Its surfaced spoilboard area is 1260 × 1160 mm, within a 1445 × 1370 mm total spoilboard. In the first half of 2024 it received an electrical overhaul: Duet 3 6HC+ controller, RepRapFirmware, web and touch interfaces, MT-2303HS280AW 2.8 A NEMA23 stepper motors, and a DeWalt D26200 router. The wiki calls the machine based on the OpenBuilds OX; this documents the local assembly, not a claim that all WorkBee kits use these electronics.

## Motion and calibration notes

The CoMakingSpace change log says X travel was about 1.1% off and records a later `M92` configuration change from `X3.361 Y3.331 Z400` to `X3.324 Y3.331 Z400`. Treat these as a dated local configuration note, not portable settings. The page says the FreeCAD RRF post-processor needs special settings; Fusion 360 also has machine-specific settings.

## Operation

The wiki describes a CNC-router introduction prerequisite, CAM toolpath generation, workpiece clamping, appropriate collet and bit selection, homing, setting the workpiece origin, uploading G-code, personal protection, and keeping an emergency stop available. The DeWalt D26200 router is reported to run at 16,000–27,000 RPM, with 8 mm, 6 mm, 1/4-inch, and 1/8-inch collets listed. Extraction starts with the spindle; a cyclone separator is fitted before the shop vacuum.

## Pinouts and diagrams

The wiki names the Duet 3 6HC+ mainboard and stepper type but supplies no connector-to-axis assignment, motor coil pinout, limit-switch map, spindle control wiring, or complete electrical schematic. The dated change log mentions defective crimps on the Duet board and their replacement. Do not infer connector contacts from the controller model alone. The retrieved wiki pages provided textual specifications and operation notes, but no connection diagram suitable for pinout transcription.

## Sources

- [WorkBee](https://wiki.comakingspace.de/WorkBee) — installation size, work area, router, motors/controller, calibration log and extraction.
- [CNC Router](https://wiki.comakingspace.de/CNC_Router) — local installation overview, router RPM/collets, spoilboard and postprocessor notes.
- [CNC Mills and Routers](https://wiki.comakingspace.de/CNC_Mills_and_Routers) — current machine-category index.

**Unknowns:** kit/hardware revision, complete wiring and pin assignments, controller firmware build, and the currently loaded exact machine-configuration file.

## Official Duet 3 Mainboard 6HC source check · 2026-09-29

The pinned CoMakingSpace [WorkBee page, revision 20480](https://wiki.comakingspace.de/index.php?title=WorkBee&oldid=20480) reports a Duet 3 6HC+ installed during the machine's 2024 electrical overhaul. It does not state the board revision or publish this machine's complete wiring, connector-to-axis assignment, motor coil order, endstop map, or DeWalt router control wiring.

Duet3D's [official Mainboard 6HC repository](https://github.com/Duet3D/Duet3-Mainboard-6HC) supplies a separate board-family source: the official [Mainboard 6HC v1.02 schematic](https://raw.githubusercontent.com/Duet3D/Duet3-Mainboard-6HC/master/Duet3_Mainboard_6HC_v1.02/Duet3_MB_6HC_Schematic_v1.02.pdf), titled Duet3 Mainboard, Rev 1.02, dated 2022-10-05 (retrieved PDF SHA-256 `b65f68d9ecb539b8325d5d61b7cf649e37b2e6342638d13bcd76117b757d6962`), and its [hardware overview](https://docs.duet3d.com/Duet3D_hardware/Duet_3_family/Duet_3_Mainboard_6HC_Hardware_Overview). The matching v1.02 wiring illustration is a board reference, not a machine harness drawing. It can only support a separately labeled v1.02 board-contact inventory; it cannot identify the revision fitted to this WorkBee or connect any board signal to its mechanics, limit devices, router, or safety controls.

The local schematic copy is `/tmp/wiki-225-duet3-6hc-v1.02.pdf`. The matching official wiring image is `/tmp/wiki-225-duet3_mb_6hc_v1.02_d1.1_wiring.png` (board v1.02, drawing version 1.1 dated 2023-12-20; SHA-256 `3820bf029f91d09fcdeb4f0a551736a24fa7c9dc7a840c599d42e10ec583b2cd`). Do not substitute the separate later v1.02d wiring artwork for this revision-scoped schedule.

Current decision boundary: the board-family reference may enumerate source-numbered external board connectors as OPEN references. The installed board revision and harness, motor/axis mapping, endstop circuit assignment, router control, and all SmoothieBox routes remain unknown. A dotted line is not warranted without a supported endpoint and interface. No DB25 is evidenced.

### Pinned manufacturer CAD snapshot

The Duet3D v1.02 source folder is pinned to repository commit [`e19bf75ebb6a777963d69182e72e1b582f9c334d`](https://github.com/Duet3D/Duet3-Mainboard-6HC/tree/e19bf75ebb6a777963d69182e72e1b582f9c334d/Duet3_Mainboard_6HC_v1.02). It contains the exact schematic PDF and the official [interactive BOM](https://github.com/Duet3D/Duet3-Mainboard-6HC/blob/e19bf75ebb6a777963d69182e72e1b582f9c334d/Duet3_Mainboard_6HC_v1.02/Duet%203%20MB%206HC_1.02_ibom.html); the downloaded iBOM SHA-256 is `559d31db2c8c39d27e2fe5aa3f0a3ac79cff540cebc05107448f8e329dcdf7d7`. The iBOM is used to cross-check connector footprints and pad positions; net/function labels remain grounded in the v1.02 schematic and wiring drawing. Board module pads, MCU pins, jumpers, and RJ45 socket pins are distinct reference domains and are not WorkBee harness contacts.


## Duet 3 Mainboard 6HC v1.02 complete source contact reference

This is a separately revision-scoped board reference. The complete inventory contains 48 J references and nine JP references with 264 board marks, plus eight separately labelled RJ45 socket contacts. It establishes no fitted WorkBee contact or route. The selected diagram shows 233 source positions on 46 individually identified interfaces; all 39 excluded module/configuration positions are still listed below.

Function and NC evidence comes from the [exact Rev 1.02 schematic](https://raw.githubusercontent.com/Duet3D/Duet3-Mainboard-6HC/e19bf75ebb6a777963d69182e72e1b582f9c334d/Duet3_Mainboard_6HC_v1.02/Duet3_MB_6HC_Schematic_v1.02.pdf), dated 2022-10-05. The [pinned native CAD](https://github.com/Duet3D/Duet3-Mainboard-6HC/tree/e19bf75ebb6a777963d69182e72e1b582f9c334d/Duet3_Mainboard_6HC_v1.02/CAD) and [pinned iBOM](https://github.com/Duet3D/Duet3-Mainboard-6HC/blob/e19bf75ebb6a777963d69182e72e1b582f9c334d/Duet3_Mainboard_6HC_v1.02/Duet%203%20MB%206HC_1.02_ibom.html) support physical footprint and pad identities only. The matching wiring picture is board v1.02 / drawing 1.1 dated 2023-12-20, not the separate later v1.02d artwork.

The RJ45 module's solder pins 1–14 are not its cable cavity numbers. Its socket contacts are printed as J1–J8 inside the /Comms/J46 symbol. They are not the /Headers/J1 SWD connector. Source reference paths remain fully qualified by schematic sheet/file. Module interface headers are physical board connectors; the MCU and TMC2160 package leads are internal component pins and are excluded. Configuration positions identify board settings, not retrofit terminals.

All SmoothieBox routes are OPEN. No GUESS route is warranted: motor-to-axis assignment, motor coil-to-cable mapping, endstop/probe functions, router control and exact fitted revision remain unknown. No DB25 appears in the inspected evidence. A future supported guess must be shown as a dotted route with the visible GUESS legend.

### J1 · SWD service header

**Classification:** machine-accessible service connector/port (SWD).

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J1:1` | SWDIO · serial-wire debug data | source · OPEN |
| `J1:2` | SWCLK · serial-wire debug clock | source · OPEN |
| `J1:3` | +3.3V · board logic rail | source · OPEN |
| `J1:4` | RESET · first reset contact | source · OPEN |
| `J1:5` | RESET · second reset contact, same board net as pin 4 | source · OPEN |
| `J1:6` | GND · board signal/power return | source · OPEN |

### J2 · Always-on board cooling fan

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J2:1` | V_FUSED · fused board supply rail | source · OPEN |
| `J2:2` | GND · board signal/power return | source · OPEN |

### J3 · OUT 7

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J3:1` | V_OUTLC2 · selected positive supply for OUT7–9 | source · OPEN |
| `J3:2` | OUT_7_NEG · OUT7 switched negative load output | source · OPEN |

### J4 · OUT 8

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J4:1` | V_OUTLC2 · selected positive supply for OUT7–9 | source · OPEN |
| `J4:2` | OUT_8_NEG · OUT8 switched negative load output | source · OPEN |

### J5 · OUT 9

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J5:1` | V_OUTLC2 · selected positive supply for OUT7–9 | source · OPEN |
| `J5:2` | OUT_9_NEG · OUT9 switched negative load output | source · OPEN |

### J6 · OUT 4

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J6:1` | GND · board signal/power return | source · OPEN |
| `J6:2` | V_OUTLC1 · selected positive supply for OUT4–6 | source · OPEN |
| `J6:3` | OUT_4_TACHO · OUT4 tachometer input | source · OPEN |
| `J6:4` | OUT_4_NEG · OUT4 switched negative load output | source · OPEN |

### J7 · OUT 5

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J7:1` | GND · board signal/power return | source · OPEN |
| `J7:2` | V_OUTLC1 · selected positive supply for OUT4–6 | source · OPEN |
| `J7:3` | OUT_5_TACHO · OUT5 tachometer input | source · OPEN |
| `J7:4` | OUT_5_NEG · OUT5 switched negative load output | source · OPEN |

### J8 · OUT 6

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J8:1` | GND · board signal/power return | source · OPEN |
| `J8:2` | V_OUTLC1 · selected positive supply for OUT4–6 | source · OPEN |
| `J8:3` | OUT_6_TACHO · OUT6 tachometer input | source · OPEN |
| `J8:4` | OUT_6_NEG · OUT6 switched negative load output | source · OPEN |

### J9 · VIN, OUT0 input and OUT0 power output

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J9:1` | GND · board signal/power return | source · OPEN |
| `J9:2` | V_IN · board DC supply input | source · OPEN |
| `J9:3` | GND · board signal/power return | source · OPEN |
| `J9:4` | V_OUT0_IN · separately supplied OUT0 rail input | source · OPEN |
| `J9:5` | V_OUT0_OUT · fused OUT0 positive rail | source · OPEN |
| `J9:6` | OUT_0_NEG · OUT0 switched negative load output | source · OPEN |

### J10 · OUT 1

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J10:1` | OUT_1_NEG · OUT1 switched negative load output | source · OPEN |
| `J10:2` | V_FUSED · fused board supply rail | source · OPEN |

### J11 · OUT 2

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J11:1` | OUT_2_NEG · OUT2 switched negative load output | source · OPEN |
| `J11:2` | V_FUSED · fused board supply rail | source · OPEN |

### J12 · OUT 3

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J12:1` | OUT_3_NEG · OUT3 switched negative load output | source · OPEN |
| `J12:2` | V_FUSED · fused board supply rail | source · OPEN |

### J13 · TEMP 0

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J13:1` | VSSA · analog sensor return | source · OPEN |
| `J13:2` | THERMISTOR_0 · TEMP0 sensor input | source · OPEN |

### J14 · TEMP 1

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J14:1` | VSSA · analog sensor return | source · OPEN |
| `J14:2` | THERMISTOR_1 · TEMP1 sensor input | source · OPEN |

### J15 · TEMP 2

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J15:1` | VSSA · analog sensor return | source · OPEN |
| `J15:2` | THERMISTOR_2 · TEMP2 sensor input | source · OPEN |

### J16 · IO 3

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J16:1` | 3.3V_EXT · external 3.3 V rail | source · OPEN |
| `J16:2` | IO_3_IN · IO3 input; machine function unassigned | source · OPEN |
| `J16:3` | GND · board signal/power return | source · OPEN |
| `J16:4` | IO_3_OUT · IO3 output; machine function unassigned | source · OPEN |
| `J16:5` | 5V_EXT · external 5 V rail | source · OPEN |

### J17 · IO 4

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J17:1` | 3.3V_EXT · external 3.3 V rail | source · OPEN |
| `J17:2` | IO_4_IN · IO4 input; machine function unassigned | source · OPEN |
| `J17:3` | GND · board signal/power return | source · OPEN |
| `J17:4` | IO_4_OUT · IO4 output; machine function unassigned | source · OPEN |
| `J17:5` | 5V_EXT · external 5 V rail | source · OPEN |

### J18 · IO 5

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J18:1` | 3.3V_EXT · external 3.3 V rail | source · OPEN |
| `J18:2` | IO_5_IN · IO5 input; machine function unassigned | source · OPEN |
| `J18:3` | GND · board signal/power return | source · OPEN |
| `J18:4` | IO_5_OUT · IO5 output; machine function unassigned | source · OPEN |
| `J18:5` | 5V_EXT · external 5 V rail | source · OPEN |

### J19 · IO 0

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J19:1` | 3.3V_EXT · external 3.3 V rail | source · OPEN |
| `J19:2` | IO_0_IN · IO0 input; machine function unassigned | source · OPEN |
| `J19:3` | GND · board signal/power return | source · OPEN |
| `J19:4` | IO_0_OUT · IO0 output; machine function unassigned | source · OPEN |
| `J19:5` | 5V_EXT · external 5 V rail | source · OPEN |

### J20 · IO 1

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J20:1` | 3.3V_EXT · external 3.3 V rail | source · OPEN |
| `J20:2` | IO_1_IN · IO1 input; machine function unassigned | source · OPEN |
| `J20:3` | GND · board signal/power return | source · OPEN |
| `J20:4` | IO_1_OUT · IO1 output; machine function unassigned | source · OPEN |
| `J20:5` | 5V_EXT · external 5 V rail | source · OPEN |

### J21 · IO 2

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J21:1` | 3.3V_EXT · external 3.3 V rail | source · OPEN |
| `J21:2` | IO_2_IN · IO2 input; machine function unassigned | source · OPEN |
| `J21:3` | GND · board signal/power return | source · OPEN |
| `J21:4` | IO_2_OUT · IO2 output; machine function unassigned | source · OPEN |
| `J21:5` | 5V_EXT · external 5 V rail | source · OPEN |

### J22 · 12 V accessory supply

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J22:1` | 12V_EXT · external 12 V accessory rail | source · OPEN |
| `J22:2` | GND · board signal/power return | source · OPEN |

### J23 · CAN1 RJ11 6P6C socket and shield tabs

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J23:1` | NC · explicit schematic no-connect | source_empty · OPEN |
| `J23:2` | NC · explicit schematic no-connect | source_empty · OPEN |
| `J23:3` | Source net CAN1_H | source · OPEN |
| `J23:4` | Source net CAN1_L | source · OPEN |
| `J23:5` | NC · explicit schematic no-connect | source_empty · OPEN |
| `J23:6` | NC · explicit schematic no-connect | source_empty · OPEN |
| `J23:7` | SHIELD_1 · CAN_SHD_GND shield solder tab; not a cable cavity | source · OPEN |
| `J23:8` | SHIELD_2 · CAN_SHD_GND shield solder tab; not a cable cavity | source · OPEN |

### J24 · DRIVER 2

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J24:1` | DRIVER_2_A2 · driver 2 winding A2 (A+ in schematic); axis and motor-lead assignment unknown | source · OPEN |
| `J24:2` | DRIVER_2_A1 · driver 2 winding A1 (A− in schematic); axis and motor-lead assignment unknown | source · OPEN |
| `J24:3` | DRIVER_2_B2 · driver 2 winding B2 (B+ in schematic); axis and motor-lead assignment unknown | source · OPEN |
| `J24:4` | DRIVER_2_B1 · driver 2 winding B1 (B− in schematic); axis and motor-lead assignment unknown | source · OPEN |

### J25 · DRIVER 1

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J25:1` | DRIVER_1_A2 · driver 1 winding A2 (A+ in schematic); axis and motor-lead assignment unknown | source · OPEN |
| `J25:2` | DRIVER_1_A1 · driver 1 winding A1 (A− in schematic); axis and motor-lead assignment unknown | source · OPEN |
| `J25:3` | DRIVER_1_B2 · driver 1 winding B2 (B+ in schematic); axis and motor-lead assignment unknown | source · OPEN |
| `J25:4` | DRIVER_1_B1 · driver 1 winding B1 (B− in schematic); axis and motor-lead assignment unknown | source · OPEN |

### J26 · DRIVER 0

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J26:1` | DRIVER_0_A2 · driver 0 winding A2 (A+ in schematic); axis and motor-lead assignment unknown | source · OPEN |
| `J26:2` | DRIVER_0_A1 · driver 0 winding A1 (A− in schematic); axis and motor-lead assignment unknown | source · OPEN |
| `J26:3` | DRIVER_0_B2 · driver 0 winding B2 (B+ in schematic); axis and motor-lead assignment unknown | source · OPEN |
| `J26:4` | DRIVER_0_B1 · driver 0 winding B1 (B− in schematic); axis and motor-lead assignment unknown | source · OPEN |

### J27 · microSD socket, detect switch and shield

**Classification:** machine-accessible service connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J27:1` | DAT2 · microSD data 2 | source · OPEN |
| `J27:2` | DAT3 · microSD data 3 | source · OPEN |
| `J27:3` | CMD · microSD command | source · OPEN |
| `J27:4` | +3.3V · board logic rail | source · OPEN |
| `J27:5` | CLK · microSD clock | source · OPEN |
| `J27:6` | GND · board signal/power return | source · OPEN |
| `J27:7` | DAT0/DO · microSD data 0 | source · OPEN |
| `J27:8` | DAT1 · microSD data 1 | source · OPEN |
| `J27:9` | Card_Detect · socket switch contact (SD_cd); not microSD card pin 9 | source · OPEN |
| `J27:G` | GND · socket shield mark G; not a card data/power contact | source · OPEN |

### J28 · SPI daughterboard interface header

**Classification:** internal module interface header; physical board connector, not MCU package pins.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J28:1` | Source net U0_CS1 | source · OPEN |
| `J28:2` | GND · board signal/power return | source · OPEN |
| `J28:3` | Source net U0_CS0 | source · OPEN |
| `J28:4` | Source net SCK0 | source · OPEN |
| `J28:5` | MOSI / TXD0 · shared source pin function | source · OPEN |
| `J28:6` | MISO / RXD0 · shared source pin function | source · OPEN |
| `J28:7` | Source net U0_CS2 | source · OPEN |
| `J28:8` | +3.3V · board logic rail | source · OPEN |
| `J28:9` | Source net U0_CS3 | source · OPEN |
| `J28:10` | NC · explicit schematic no-connect | source_empty · OPEN |

### J29 · OUT7–9 supply voltage selection header

**Classification:** jumper/configuration.

**Diagram:** Board-internal/configuration appendix only; these marks are not machine cable contacts.

| Source mark | Source function / node | State |
|---|---|---|
| `J29:1` | V_FUSED · fused board supply rail | source · OPEN |
| `J29:2` | V_OUTLC2 · selected positive supply for OUT7–9 | source · OPEN |
| `J29:3` | 12V_EXT · external 12 V accessory rail | source · OPEN |

### J30 · Buffered OUT9 VFD/laser/servo interface

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J30:1` | Buffered OUT9 output via R108 (150 ohm), source out9buff; no WorkBee router assignment | source · OPEN |
| `J30:2` | 5V_EXT · external 5 V rail | source · OPEN |
| `J30:3` | GND · board signal/power return | source · OPEN |

### J31 · Auxiliary CAN0 header

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J31:1` | Source net CAN0_H | source · OPEN |
| `J31:2` | Source net CAN0_L | source · OPEN |

### J32 · IO 6

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J32:1` | 3.3V_EXT · external 3.3 V rail | source · OPEN |
| `J32:2` | IO_6_IN · IO6 input; machine function unassigned | source · OPEN |
| `J32:3` | GND · board signal/power return | source · OPEN |
| `J32:4` | IO_6_OUT · IO6 output; machine function unassigned | source · OPEN |
| `J32:5` | 5V_EXT · external 5 V rail | source · OPEN |

### J33 · IO 7

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J33:1` | 3.3V_EXT · external 3.3 V rail | source · OPEN |
| `J33:2` | IO_7_IN · IO7 input; machine function unassigned | source · OPEN |
| `J33:3` | GND · board signal/power return | source · OPEN |
| `J33:4` | IO_7_OUT · IO7 output; machine function unassigned | source · OPEN |
| `J33:5` | 5V_EXT · external 5 V rail | source · OPEN |

### J34 · IO 8

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J34:1` | 3.3V_EXT · external 3.3 V rail | source · OPEN |
| `J34:2` | IO_8_IN · IO8 input; machine function unassigned | source · OPEN |
| `J34:3` | GND · board signal/power return | source · OPEN |
| `J34:4` | IO_8_OUT · IO8 output; machine function unassigned | source · OPEN |
| `J34:5` | 5V_EXT · external 5 V rail | source · OPEN |

### J35 · DRIVER 3

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J35:1` | DRIVER_3_A2 · driver 3 winding A2 (A+ in schematic); axis and motor-lead assignment unknown | source · OPEN |
| `J35:2` | DRIVER_3_A1 · driver 3 winding A1 (A− in schematic); axis and motor-lead assignment unknown | source · OPEN |
| `J35:3` | DRIVER_3_B2 · driver 3 winding B2 (B+ in schematic); axis and motor-lead assignment unknown | source · OPEN |
| `J35:4` | DRIVER_3_B1 · driver 3 winding B1 (B− in schematic); axis and motor-lead assignment unknown | source · OPEN |

### J36 · DRIVER 4

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J36:1` | DRIVER_4_A2 · driver 4 winding A2 (A+ in schematic); axis and motor-lead assignment unknown | source · OPEN |
| `J36:2` | DRIVER_4_A1 · driver 4 winding A1 (A− in schematic); axis and motor-lead assignment unknown | source · OPEN |
| `J36:3` | DRIVER_4_B2 · driver 4 winding B2 (B+ in schematic); axis and motor-lead assignment unknown | source · OPEN |
| `J36:4` | DRIVER_4_B1 · driver 4 winding B1 (B− in schematic); axis and motor-lead assignment unknown | source · OPEN |

### J37 · DRIVER 5

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J37:1` | DRIVER_5_A2 · driver 5 winding A2 (A+ in schematic); axis and motor-lead assignment unknown | source · OPEN |
| `J37:2` | DRIVER_5_A1 · driver 5 winding A1 (A− in schematic); axis and motor-lead assignment unknown | source · OPEN |
| `J37:3` | DRIVER_5_B2 · driver 5 winding B2 (B+ in schematic); axis and motor-lead assignment unknown | source · OPEN |
| `J37:4` | DRIVER_5_B1 · driver 5 winding B1 (B− in schematic); axis and motor-lead assignment unknown | source · OPEN |

### J38 · PanelDue / external SD interface header

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J38:1` | 5V_EXT · external 5 V rail | source · OPEN |
| `J38:2` | GND · board signal/power return | source · OPEN |
| `J38:3` | Source net U0_CS4 | source · OPEN |
| `J38:4` | Source net SCK0 | source · OPEN |
| `J38:5` | MOSI / TXD0 · PanelDue/external SD source function | source · OPEN |
| `J38:6` | MISO / RXD0 · PanelDue/external SD source function | source · OPEN |
| `J38:7` | PD_SD_CD · external SD card detect | source · OPEN |
| `J38:8` | 3.3V_EXT · external 3.3 V rail | source · OPEN |
| `J38:9` | IO_0_IN · shared IO0 / PanelDue UART input node | source · OPEN |
| `J38:10` | IO_0_OUT · shared IO0 / PanelDue UART output node | source · OPEN |

### J39 · ESP daughterboard interface header

**Classification:** internal module interface header; physical board connector, not MCU package pins.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J39:1` | +3.3V · board logic rail | source · OPEN |
| `J39:2` | GND · board signal/power return | source · OPEN |
| `J39:3` | Source net SPI1_MOSI_BUFF | source · OPEN |
| `J39:4` | Source net SPI1_DATA_RDY | source · OPEN |
| `J39:5` | Source net SPI1_MISO | source · OPEN |
| `J39:6` | Source net SPI1_NPCS0 | source · OPEN |
| `J39:7` | Source net SPI1_SPCK_BUFF | source · OPEN |
| `J39:8` | Source net ESP_DATA_RDY | source · OPEN |
| `J39:9` | Source net UTXD4 | source · OPEN |
| `J39:10` | Source net ESP_EN | source · OPEN |
| `J39:11` | Source net URXD4 | source · OPEN |
| `J39:12` | GND · board signal/power return | source · OPEN |

### J41 · TEMP 3

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J41:1` | VSSA · analog sensor return | source · OPEN |
| `J41:2` | THERMISTOR_3 · TEMP3 sensor input | source · OPEN |

### J42 · DotStar LED header

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J42:1` | 5V_EXT · external 5 V rail | source · OPEN |
| `J42:2` | DS_LED_DO_BUFF · buffered DotStar data output | source · OPEN |
| `J42:3` | DS_LED_CK_BUFF · buffered DotStar clock output | source · OPEN |
| `J42:4` | GND · board signal/power return | source · OPEN |

### J43 · USB-C USB2.0 receptacle and shield

**Classification:** machine-accessible service connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J43:A1` | GND · board signal/power return | source · OPEN |
| `J43:A12` | GND · board signal/power return | source · OPEN |
| `J43:A4` | VBUS · USB power contact | source · OPEN |
| `J43:A5` | CC1 · USB-C configuration contact | source · OPEN |
| `J43:A6` | D+ · USB2.0 data contact | source · OPEN |
| `J43:A7` | D− · USB2.0 data contact | source · OPEN |
| `J43:A8` | SBU1 · NC · explicit schematic no-connect | source_empty · OPEN |
| `J43:A9` | VBUS · USB power contact | source · OPEN |
| `J43:B1` | GND · board signal/power return | source · OPEN |
| `J43:B12` | GND · board signal/power return | source · OPEN |
| `J43:B4` | VBUS · USB power contact | source · OPEN |
| `J43:B5` | CC2 · USB-C configuration contact | source · OPEN |
| `J43:B6` | D+ · USB2.0 data contact | source · OPEN |
| `J43:B7` | D− · USB2.0 data contact | source · OPEN |
| `J43:B8` | SBU2 · NC · explicit schematic no-connect | source_empty · OPEN |
| `J43:B9` | VBUS · USB power contact | source · OPEN |
| `J43:S1` | SHIELD · USBshield, shared S1 shell-pad mark; not signal GND | source · OPEN |

### J45 · Ethernet shield ESD spade

**Classification:** machine-accessible connector/port (2.8 mm shield spade; not signal GND).

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J45:1` | SHIELD_GND · Ethernet shield ESD connection; source spade contact, not signal GND | source · OPEN |

### J46 · Ethernet magjack PCB/module solder leads

**Classification:** internal magjack module solder leads; external socket contacts are separate.

**Diagram:** Module solder leads belong in the board appendix; separate socket contacts J1–J8 appear in the diagram.

| Source mark | Source function / node | State |
|---|---|---|
| `J46:1` | TD+ · transmit transformer primary, module solder lead 1 | source · OPEN |
| `J46:2` | TD− · transmit transformer primary, module solder lead 2 | source · OPEN |
| `J46:3` | RD+ · receive transformer primary, module solder lead 3 | source · OPEN |
| `J46:4` | TCT · transmit transformer centre tap, via C192; module solder lead 4 | source · OPEN |
| `J46:5` | RCT · receive transformer centre tap, via C193; module solder lead 5 | source · OPEN |
| `J46:6` | RD− · receive transformer primary, module solder lead 6 | source · OPEN |
| `J46:7` | NC · explicit schematic no-connect | source_empty · OPEN |
| `J46:8` | Module GND pin · source SHIELD_GND node; not RJ45 cable pin 8 | source · OPEN |
| `J46:9` | LEDG_A · green LED anode, source LEDG_A node | source · OPEN |
| `J46:10` | LEDG_K · green LED cathode, source LED0 node | source · OPEN |
| `J46:11` | LEDY_K · yellow LED cathode, source LEDY_K node | source · OPEN |
| `J46:12` | LEDY_A · yellow LED anode, source PHY_RESET node | source · OPEN |
| `J46:13` | SHIELD · module shield solder lead 13, source SHIELD_GND node | source · OPEN |
| `J46:14` | SHIELD · module shield solder lead 14, source SHIELD_GND node | source · OPEN |

### J48 · SBC 26-position interface header

**Classification:** internal module interface header; physical board connector, not MCU package pins.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J48:1` | NC · explicit schematic no-connect | source_empty · OPEN |
| `J48:2` | 5V_SBC · SBC 5 V supply node | source · OPEN |
| `J48:3` | NC · explicit schematic no-connect | source_empty · OPEN |
| `J48:4` | 5V_SBC · SBC 5 V supply node | source · OPEN |
| `J48:5` | NC · explicit schematic no-connect | source_empty · OPEN |
| `J48:6` | GND · board signal/power return | source · OPEN |
| `J48:7` | NC · explicit schematic no-connect | source_empty · OPEN |
| `J48:8` | NC · explicit schematic no-connect | source_empty · OPEN |
| `J48:9` | GND · board signal/power return | source · OPEN |
| `J48:10` | NC · explicit schematic no-connect | source_empty · OPEN |
| `J48:11` | NC · explicit schematic no-connect | source_empty · OPEN |
| `J48:12` | NC · explicit schematic no-connect | source_empty · OPEN |
| `J48:13` | NC · explicit schematic no-connect | source_empty · OPEN |
| `J48:14` | GND · board signal/power return | source · OPEN |
| `J48:15` | NC · explicit schematic no-connect | source_empty · OPEN |
| `J48:16` | NC · explicit schematic no-connect | source_empty · OPEN |
| `J48:17` | SBC_3.3V · SBC 3.3 V supply node | source · OPEN |
| `J48:18` | NC · explicit schematic no-connect | source_empty · OPEN |
| `J48:19` | Source net SPI1_MOSI | source · OPEN |
| `J48:20` | GND · board signal/power return | source · OPEN |
| `J48:21` | Source net SPI1_MISO_BUFF | source · OPEN |
| `J48:22` | Source net SPI1_DATA_RDY_BUFF | source · OPEN |
| `J48:23` | Source net SPI1_SPCK | source · OPEN |
| `J48:24` | Source net SPI1_NPCS0 | source · OPEN |
| `J48:25` | GND · board signal/power return | source · OPEN |
| `J48:26` | NC · explicit schematic no-connect | source_empty · OPEN |

### J49 · External reset service header

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J49:1` | RESET_EXT · external reset input; not an emergency-stop circuit | source · OPEN |
| `J49:2` | GND · board signal/power return | source · OPEN |

### J50 · External 5 V input / PSU control header

**Classification:** machine-accessible board connector/port.

**Diagram:** Shown as an individually scoped board-reference connector; no installed WorkBee pin or route is established.

| Source mark | Source function / node | State |
|---|---|---|
| `J50:1` | 5V_EXT_INPUT · external 5 V input | source · OPEN |
| `J50:2` | PS_ON_SW · PSU control switch node | source · OPEN |
| `J50:3` | GND · board signal/power return | source · OPEN |

### J52 · OUT4–6 supply voltage selection header

**Classification:** jumper/configuration.

**Diagram:** Board-internal/configuration appendix only; these marks are not machine cable contacts.

| Source mark | Source function / node | State |
|---|---|---|
| `J52:1` | V_FUSED · fused board supply rail | source · OPEN |
| `J52:2` | V_OUTLC1 · selected positive supply for OUT4–6 | source · OPEN |
| `J52:3` | 12V_EXT · external 12 V accessory rail | source · OPEN |

### JP1 · 12 V regulator enable solder jumper

**Classification:** jumper/configuration.

**Diagram:** Board-internal/configuration appendix only; these marks are not machine cable contacts.

| Source mark | Source function / node | State |
|---|---|---|
| `JP1:1` | 12v_en · MAX25208 enable side of the solder link | source · OPEN |
| `JP1:2` | 12v_sup · supply side of the solder link | source · OPEN |

### JP2 · MCU ERASE configuration jumper

**Classification:** jumper/configuration.

**Diagram:** Board-internal/configuration appendix only; these marks are not machine cable contacts.

| Source mark | Source function / node | State |
|---|---|---|
| `JP2:1` | +3.3V · board logic rail | source · OPEN |
| `JP2:2` | ERASE · MCU configuration input | source · OPEN |

### JP3 · CAN0 high termination disconnect solder jumper

**Classification:** jumper/configuration.

**Diagram:** Board-internal/configuration appendix only; these marks are not machine cable contacts.

| Source mark | Source function / node | State |
|---|---|---|
| `JP3:1` | CAN0_H_TR · termination resistor side of solder link | source · OPEN |
| `JP3:2` | CAN0_H · CAN bus high side of solder link | source · OPEN |

### JP4 · PanelDue external SD card-detect override jumper

**Classification:** jumper/configuration.

**Diagram:** Board-internal/configuration appendix only; these marks are not machine cable contacts.

| Source mark | Source function / node | State |
|---|---|---|
| `JP4:1` | PD_SD_CD · external SD card detect | source · OPEN |
| `JP4:2` | GND · board signal/power return | source · OPEN |

### JP5 · IO2 input-divider bypass jumper

**Classification:** jumper/configuration.

**Diagram:** Board-internal/configuration appendix only; these marks are not machine cable contacts.

| Source mark | Source function / node | State |
|---|---|---|
| `JP5:1` | IO2 MCU-input side of bypass link, via R140 (470 ohm); unnamed net Net-(JP5-Pad1) | source · OPEN |
| `JP5:2` | IO_2_IN · board connector-input side of bypass link | source · OPEN |

### JP6 · CAN0 low termination disconnect solder jumper

**Classification:** jumper/configuration.

**Diagram:** Board-internal/configuration appendix only; these marks are not machine cable contacts.

| Source mark | Source function / node | State |
|---|---|---|
| `JP6:1` | CAN0_L_TR · termination resistor side of solder link | source · OPEN |
| `JP6:2` | CAN0_L · CAN bus low side of solder link | source · OPEN |

### JP7 · CAN1 low termination disconnect solder jumper

**Classification:** jumper/configuration.

**Diagram:** Board-internal/configuration appendix only; these marks are not machine cable contacts.

| Source mark | Source function / node | State |
|---|---|---|
| `JP7:1` | CAN1_L_TR · termination resistor side of solder link | source · OPEN |
| `JP7:2` | CAN1_L · CAN bus low side of solder link | source · OPEN |

### JP8 · CAN1 high termination disconnect solder jumper

**Classification:** jumper/configuration.

**Diagram:** Board-internal/configuration appendix only; these marks are not machine cable contacts.

| Source mark | Source function / node | State |
|---|---|---|
| `JP8:1` | CAN1_H_TR · termination resistor side of solder link | source · OPEN |
| `JP8:2` | CAN1_H · CAN bus high side of solder link | source · OPEN |

### JP9 · 5 V supply selector jumper

**Classification:** jumper/configuration.

**Diagram:** Board-internal/configuration appendix only; these marks are not machine cable contacts.

| Source mark | Source function / node | State |
|---|---|---|
| `JP9:1` | 5V_EXT_INPUT · external 5 V input | source · OPEN |
| `JP9:2` | 5V_SELECT · common selector contact; protected supply-selection node | source · OPEN |
| `JP9:3` | 5V_SBC · SBC 5 V supply node | source · OPEN |

### J46.socket · Ethernet RJ45 socket contacts (one physical J46 magjack)

**Classification:** machine-accessible connector/port; external socket domain, not module solder pins.

**Diagram:** Shown as the external socket domain of J46; not a second fitted connector.

| Source mark | Source function / node | State |
|---|---|---|
| `J46.socket:J1` | XMIT transformer secondary end J1 as drawn; not a direct TD+ board net | source · OPEN |
| `J46.socket:J2` | XMIT transformer secondary end J2 as drawn; not a direct TD− board net | source · OPEN |
| `J46.socket:J3` | RCV transformer secondary end J3 as drawn; not a direct RD+ board net | source · OPEN |
| `J46.socket:J4` | Internal termination node J4 as drawn, paired with socket contact J5 | source · OPEN |
| `J46.socket:J5` | Internal termination node J5 as drawn, paired with socket contact J4 | source · OPEN |
| `J46.socket:J6` | RCV transformer secondary end J6 as drawn; not a direct RD− board net | source · OPEN |
| `J46.socket:J7` | Internal termination node J7 as drawn, paired with socket contact J8 | source · OPEN |
| `J46.socket:J8` | Internal termination node J8 as drawn, paired with socket contact J7 | source · OPEN |

### Inventory exclusions

- J40, J44, J47 and J51 are absent from this revision, not invented empty connectors.
- Processor and TMC2160 package pins, MOSFET/transceiver/PHY leads, mounting holes, fiducials, fuses and component terminals are not external board connector inventories.
- TP1–TP39 are schematic test points marked DNP on Headers sheet 2/8; they are not fitted external connectors and are not plotted as machine endpoints.
- USB-C A2/A3/A10/A11/B2/B3/B10/B11 are not instantiated in the exact 16-contact USB2.0 symbol/footprint; no 24-pin generic USB-C inventory is substituted.
- J46 internal module solder pins 1–14, J29/J52 configuration header pins, and JP1–JP9 remain individually listed in the board appendix rather than the external machine reference diagram.
- No DB25, installed motor-to-axis binding, endstop assignment, router-control contact, safety-chain route or SmoothieBox conductor is established.
