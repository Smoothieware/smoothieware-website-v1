# TwoTrees TS1 board-view contact inventory

Research capture: 2026-09-26. Atlas profile: `primary-twotrees-ts1`. The [manufacturer TS1 motherboard page](https://wiki.twotrees3d.com/en/LaserEngravingMachine/TS1/Motherboard-diagram) supplies an [English-labelled board image](https://ttsbucketen.oss-us-west-1.aliyuncs.com/LaserEngravingMachine/TS1/TS1%E4%B8%BB%E6%9D%BF%E5%9B%BE-%E8%8B%B1.png), 2000 × 1123 PNG, captured at `/tmp/atlas-twotrees-ts1-board.png` with SHA-256 `8ea76f077f4c1a9b4770da546fbb2dbe8cf2c0811de49ac9367667e5eec023ec`. The enlarged and rotated connector crop at `/tmp/atlas-twotrees-ts1-ports-rotated.png` was used only to read that same manufacturer image. This is a **board-component view**, not a mating-face, installed harness or revision-confirmed machine inspection.

## Selected outside machine-control sockets

The photo supports **20 visible board-socket positions in six groups**. Numbered positions below mean left-to-right in the original upright photo; they are image ordinals, **not stamped cavity numbers**. The Y-limit literal marks read `Y−`, `G`, `5V` left-to-right in the original upright view. `Y−` is the board's printed mark, not an independently verified sensor electrical contract. All positions remain REFERENCE ONLY / OPEN to SmoothieBox.

| Photo-labelled socket | Positions | Source reading and unresolved boundary |
| --- | ---: | --- |
| Y limit | 3 | Board silk `Y−`, `G`, `5V` in original photo order. Sensor type, output topology, fitted wire and voltage verification are absent. |
| Laser | 5 | Five visible contacts under `LASER`; no individual contact functions, module-side mating view, rail, enable, PWM or return contract published in this image. |
| Y motor | 4 | Former-controller winding output after the on-board driver; coil/cable order unknown. |
| X motor | 4 | Former-controller winding output after the on-board driver; coil/cable order unknown. |
| Fan | 2 | Two visible board positions; source does not mark individual polarity, fan rating or fitted circuit. |
| Switch | 2 | Two visible board positions under `SW`; circuit role and safety function unverified. |

The same source names a power-source barrel jack and USB-C COM port, but does not expose a trustworthy contact schedule for either. The Bluetooth module and directional keys are mounted on the former controller rather than an established retrofit peripheral interface. These named groups remain OPEN without invented pins. The image does not show an X-limit socket, which is a source-image observation rather than proof that no other TS1 revision has one. No SmoothieBox route is selected: the X/Y motor sockets are winding outputs, not STEP/DIR driver inputs, and the Y-limit and laser electrical contracts remain unqualified.
