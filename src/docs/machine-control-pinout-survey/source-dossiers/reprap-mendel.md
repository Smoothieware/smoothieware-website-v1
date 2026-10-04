# RepRap Mendel

## Identity

RepRap Mendel is the second major RepRap printer design, succeeding Darwin. The wiki distinguishes Ed Sells' original “Sells Mendel” from subsequent variations.

## Wiki evidence

- [RepRap Mendel](https://reprap.org/wiki/Mendel): model specifications, design changes and build/user documentation links.
- [RepRap machine list](https://reprap.org/wiki/RepRap_Machines): classifies Mendel among printer designs.

## Specifications and operation

The wiki lists a nominal 200 × 200 × 140 mm build envelope, 7 kg weight, 500 × 400 × 360 mm outer dimensions, 3 mm filament, USB interface and nominal 12 V supply. It describes FFF thermoplastic extrusion and says Mendel improved on Darwin with a larger print area, smaller footprint, better Z-axis constraint and simpler assembly. Use the model-specific build/user guides linked on the wiki for construction and operation.

## Source-scoped wiring evidence

The separate [RepRap Mendel Electronic Wiring guide](https://reprap.org/wiki/Mendel_Electronic_Wiring) documents a Version II “Mendel” build. Its page revision is `oldid=190453`.

| Connector or terminal | Contact | Assignment | Source scope and view |
|---|---:|---|---|
| 3-pin XLR power input | 1 | Ground / negative | Source image is viewed into the female socket and male pins; this Mendel build has a panel-mounted male plug. |
| 3-pin XLR power input | 2 | +12 V | Same documented connector view and build. |
| 3-pin XLR power input | 3 | Unused | Same documented connector view and build. |
| Opto endstop connector A | top | VCC | Board-connector orientation as shown in the source image; the guide says to verify that VCC is the stepper-controller board's 5 V output. |
| Opto endstop connector A | middle | SIG | Same source-image orientation; board-specific opto-endstop wiring. |
| Opto endstop connector A | bottom | GND | Same source-image orientation. |

The guide also describes a multi-board architecture, using a RepRap motherboard, three stepper-driver boards, and one or more extruder controllers. It is a wiring guide for one Version II build, not proof that every Mendel or the photographed/local candidate uses these boards. The older design does not provide modernized safety ratings or establish an installed machine's condition.

## Diagram guidance

Show the XLR contact view exactly as labeled by the source and mark it “RepRap Version II build guide.” Keep the board-specific opto-endstop connector in a separate block; do not infer machine-wide endstop connector positions from the board drawing. Keep unrelated RepRapPro Mendel cable tables separate.

## Limits

Specifications and the two wiring tables are scoped to their respective wiki reference design/build sources and must not be applied to a commercial “Mendel-style” printer without checking its revision. The overview's USB/power facts do not establish the XLR or opto-endstop table by themselves.
