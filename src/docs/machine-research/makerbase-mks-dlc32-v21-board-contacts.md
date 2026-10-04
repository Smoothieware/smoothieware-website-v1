# Makerbase MKS DLC32 V2.1_001 board contact inventory

Research capture: 2026-09-26. Atlas profile: `base-22` (standalone MKS DLC32 V2.1 controller reference, not a machine installation). Primary source: Makerbase's [revision V2.1_001 PIN drawing](https://github.com/makerbase-mks/MKS-DLC32/blob/main/MKS-DLC32-main/hardware/MKS%20DLC32%20V2.1_001/MKS%20DLC32%20V2.1_001%20PIN.pdf), captured at `/tmp/atlas-mks-dlc32-v21-pin.pdf`, SHA-256 `8a0f188e52a617af56929a4c6a3bc86d4c5e41541b68120c4320d51413a6a5e2`; cross-check against its [V2.1_001 schematic](https://github.com/makerbase-mks/MKS-DLC32/blob/main/MKS-DLC32-main/hardware/MKS%20DLC32%20V2.1_001/MKS%20DLC32%20V2.1_001%20SCH.pdf), captured at `/tmp/atlas-mks-dlc32-v21-sch.pdf`, SHA-256 `fe20981608bb0ea65d31a70ed580916e9c7c508634278a25ca18313ee9c4b8cb`. The separate [MKS DLC32 V2 wiring manual](https://github.com/makerbase-mks/MKS-DLC32/blob/main/MKS-DLC32-main/doc/DLC32%20wiring%20manual.pdf), captured at `/tmp/atlas-mks-dlc32-wiring.pdf`, SHA-256 `c49d4046ff4743ba8b9e21283c30e580419420c6e67afbc6d5ed50a97c474348`, describes functions but pictures a **V2.0** board; its geometry is not imported into the V2.1 map. The pin drawing and schematic are the revision-matched basis for every selected position below.

## Selected board-view positions

The V2.1 PIN sheet supports **77 selected visible/reference positions** in 20 cards. Position order is the manufacturer's drawing order, not an observed cable mating face. Where no stamped cavity number is visible, atlas ordinals identify individual marks without claiming physical pin numbering. Every position is **REFERENCE ONLY / OPEN** to SmoothieBox. No board population, machine harness, external driver, laser head, supply rating, return path or direct wire is established by a standalone board drawing.

| Source card | Count | Individual source marks and boundary |
| --- | ---: | --- |
| X motor J27 | 4 | Board-view left-to-right `2B, 2A, 1A, 1B`; former-controller winding output. |
| Y1 motor J29 | 4 | Same phase-mark order; former-controller winding output. |
| Y2 motor J28 | 4 | Same phase-mark order; second Y output after the Y driver; no fitted second motor inferred. |
| Z motor J30 | 4 | Same phase-mark order; former-controller winding output. |
| X external-drive footprint J34 | 4 | `E, S, D, G` left-to-right; board logic output pads for an optional external drive, not a proved fitted external driver input. |
| Y external-drive footprint J35 | 4 | `E, S, D, G`; same caution. |
| Z external-drive footprint J36 | 4 | `E, S, D, G`; same caution. |
| X− endstop J9 | 3 | Board marks `5V, GND, IO36` from top to bottom in PIN sheet; manual calls `-S` signal on older V2 drawing. No fitted sensor or SmoothieBox voltage contract. |
| Y− endstop J10 | 3 | `5V, GND, IO35`; same boundary. |
| Z− endstop J11 | 3 | `5V, GND, IO34`; same boundary. |
| Probe J12 | 3 | `5V, GND, IO22`; probe versus flame-detection function depends on firmware mode. |
| Laser J18 | 3 | PIN-sheet left-to-right net labels `IO32`, `GND`, `12/24V`. The nearby silk reads `S–TTL–V`; the V2.0 manual describes separate TTL and supply-switched laser modes. Do not assign a module-side wire or a 5 V TTL contract from that overlap alone. |
| 12/24 V auxiliary J13 | 2 | `+` and `−` printed; output current limit and load use need installed configuration. |
| Spindle J7 | 2 | Source table lists `IO32` and `12/24V`; old-controller output, not a SmoothieBox logic input. Exact screw-side mating view unverified. |
| Beeper J4 | 2 | Source table lists `S` and `12/24V`; optional beeper output, fitted device unverified. |
| I2C header | 4 | Top-to-bottom `3V3, GND, IO0/SDA, IO4/SCL` in the V2.1 drawing; no attached module inferred. |
| Power switch | 2 | Two board-view positions. The V2 manual says an external switch can control power and requires fuse removal; its circuit is **not** a machine emergency-stop safety contract. |
| Reset J5 | 2 | `G, S` marks; MCU reset, not a qualified emergency-stop safety circuit. |
| EXP1 display | 10 | Drawing top row left-to-right `GND, IO25, IO26, IO5, BEEPER`; bottom row `5V, IO33, NC, IO27, NC`. Board-source `NC` marks do not mean a SmoothieBox wire. |
| EXP2 display | 10 | Top row `GND, NC, NC, NC, IO39`; bottom row `3V3, RESET, IO23, NC, IO18`. No fitted screen inferred. |

The drawing also shows a DC power jack, USB, TF/microSD slot, driver-carrier sockets and local microstep switches. Their contact geometry is not part of these 77 positions. Plug-in driver carrier pins are **inside the former controller**; only the separate J34/J35/J36 E/S/D/G pads are listed as source-side external-drive options. Neither those pads nor the motor winding outputs are a proposed SmoothieBox-to-driver wire. Confirm the actual machine peripherals, installed board, voltage domains, protection, signal returns and safety design before selecting any dotted candidate or direct connection.
