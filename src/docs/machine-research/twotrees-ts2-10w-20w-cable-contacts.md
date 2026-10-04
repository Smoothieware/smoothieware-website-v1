# TwoTrees TS2 10 W and 20 W: machine cable contact inventory

## Source and model scope

- The manufacturer-authored [TS2 10 W manual mirror](https://www.3dfoxshop.cz/user/documents/upload/TS2_10W_Manual_-_English_German_and_Chinese2022-06-30_compressed.pdf), SHA-256 `726caebe947372c8a2b88f387ccf8d96d377e9aee92ea79e517bb3a2436362f3`, PDF page 12, printed page 19, explicitly lists the factory cable markings and contact counts. Its board picture is PDF page 21, printed page 37. The [manufacturer download index](https://nz.twotrees3d.com/pages/download) separately links the TS2-10W manual.
- The manufacturer-authored [TS2 20 W manual mirror](https://probots.co.in/technical_data/Two%20Trees%20%20TS2-20W-Manual.pdf), SHA-256 `02272d19ec02240514e5da2dcb8722a411d10b08688b51159e6db6ea71916af5`, PDF page 11, printed page 18, lists a **different** laser-module cable count. The [manufacturer download index](https://nz.twotrees3d.com/pages/download) also links the TS2-20W manual.
- TwoTrees' [TS2 10 W](https://wiki.twotrees3d.com/en/LaserEngravingMachine/TS210W/MainBoardDiagram) and [TS2 20 W](https://wiki.twotrees3d.com/en/LaserEngravingMachine/TS220W/MainBoardDiagram) mainboard pages supply the manufacturer board drawings. The pictured PCB is marked MKS DLC32 V2.0 and identifies X, Y1, Y2 and Z motor sockets, 12/24 V supply, laser TTL and output, X/Y stops, Z stop/gyroscope, flame detector and other board interfaces. The manuals list **one Y motor cable** for each standard machine; the extra Y board socket is not evidence of a second installed Y motor.
- Makerbase's [MKS DLC32 V2.0_001 PIN drawing](https://raw.githubusercontent.com/makerbase-mks/MKS-DLC32/main/MKS-DLC32-main/hardware/MKS%20DLC32%20V2.0_001/MKS%20DLC32%20V2.0_001%20PIN.pdf), SHA-256 `1c483ba772ea9d7681ca33004fb4658d5449971dfd6755de8f926fba2326fc6e`, and [V2.0_001 schematic](https://raw.githubusercontent.com/makerbase-mks/MKS-DLC32/main/MKS-DLC32-main/hardware/MKS%20DLC32%20V2.0_001/MKS%20DLC32%20V2.0_001%20SCH.pdf), SHA-256 `83a85be20dcc773fef965d17d3095047f4c8c47bbd97a03b8489f16837720b1b`, provide *reference-board* functions. The schematic's PDF pages 6–8 show X/Y/Z input and motor-output nets; the motor sockets are outputs of plug-in stepper drivers, not STEP/DIR inputs. Its page-3 `+12V` net starts at a 12–24 V board input and does not establish a regulated 12 V laser supply. Neither file proves the exact installed PCB subrevision or machine-harness cavity order.

## Individual source-advertised machine cable positions

The manuals specify a **count**, not a numbered cavity view or a wire-by-wire function table. In the atlas, `1 of N`, `2 of N`, and so on are **inventory ordinals only**, not a manufacturer pin number, plug orientation, conductor order, or continuity claim. Every one stays OPEN toward SmoothieBox.

| Factory cable | TS2 10 W manual | TS2 20 W manual | What remains unknown |
| --- | --- | --- | --- |
| `X(4PIN)` X stepper motor | 4 positions | 4 positions | Coil pairs, motor-side pins, cable colour and board-socket cavity correspondence. |
| `Y(4PIN)` Y stepper motor | 4 positions, one Y cable | 4 positions, one Y cable | Which parallel Y board socket is fitted, coils and cavity order. |
| `Z(4PIN)` automatic-focus motor | 4 positions | 4 positions | Coils and physical cavity order. Both standard models have motorized Z focus; this is not the manual-focus TS2 40 W. |
| `X(2PIN)` X endstop | 2 positions | 2 positions | Which conductor is signal/return, contact type and logic. The board's three-contact X input does not turn this into a three-wire machine cable. |
| `Z(2PIN)` Z endstop | 2 positions | 2 positions | Signal/return, contact type, relation to the machine's probe/gyroscope circuit. |
| `E(3PIN)` flame detector | 3 positions | 3 positions | Individual power, ground and signal assignments, sensor electrical behavior and any replacement safety interface. |
| `A(2PIN)` laser signal | 2 positions | Not listed | Signal/return assignment and module electrical input. |
| `1(2PIN)` laser fan line | 2 positions | Not listed separately | Polarity, supply voltage and current. |
| `1(4PIN)` laser module signal | Not listed | 4 positions | Which contact carries modulation, supply or return; whether fan power shares this cable. Do not transfer the 10 W two-cable arrangement. |

Each manual therefore documents **23 machine cable positions**, across eight cables for TS2 10 W and seven for TS2 20 W. The manufacturer [TS2 series introduction](https://wiki.twotrees3d.com/en/LaserEngravingMachine/TS220W/BriefIntroduction) and [calibration guide](https://wiki.twotrees3d.com/en/LaserEngravingMachine/TS220W/Calibration-and-Software-Guide) corroborate automatic Z focus for 10/20 W, while identifying the 40 W machine as manual focus. The manuals do not assign an installed Y endstop cable; the board's Y input remains a board capability, not a verified machine contact. No contact in this inventory is routed to a SmoothieBox screw or to a chosen external stepper driver. A retrofit needs measured harness continuity, verified coil pairs, qualified laser supply/modulation and retained safety functions before physical wiring can be specified.
