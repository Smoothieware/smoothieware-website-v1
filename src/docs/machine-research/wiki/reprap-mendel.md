# RepRap Mendel

## Identity

RepRap Mendel is the second major RepRap printer design, succeeding Darwin. The wiki distinguishes Ed Sells' original “Sells Mendel” from subsequent variations.

## Wiki evidence

- [RepRap Mendel](https://reprap.org/wiki/Mendel): model specifications, design changes and build/user documentation links.
- [RepRap machine list](https://reprap.org/wiki/RepRap_Machines): classifies Mendel among printer designs.

## Specifications and operation

The wiki lists a nominal 200 × 200 × 140 mm build envelope, 7 kg weight, 500 × 400 × 360 mm outer dimensions, 3 mm filament, USB interface and nominal 12 V supply. It describes FFF thermoplastic extrusion and says Mendel improved on Darwin with a larger print area, smaller footprint, better Z-axis constraint and simpler assembly. Use the model-specific build/user guides linked on the wiki for construction and operation.

## Source-scoped wiring evidence

The pinned [RepRap Mendel Electronic Wiring guide, revision 190453](https://reprap.org/w/index.php?title=Mendel_Electronic_Wiring&oldid=190453) is explicitly for a RepRap Version II Mendel build. A separate pinned [Mendel USB and power connector page, revision 190235](https://reprap.org/w/index.php?title=Mendel_USB_and_power_connector&oldid=190235) documents the same build family. These are reference peripherals, not evidence that any specific Mendel has these exact boards or cables.

| Reference peripheral | Contact | Source assignment | Source view / scope |
|---|---:|---|---|
| Version II panel-mounted male 3-pin XLR power input | 1 | Ground / negative | The source describes its illustration as looking into the female socket and at the male pins; a corresponding source cable socket mates with the panel plug. |
| Version II panel-mounted male 3-pin XLR power input | 2 | +12 V | Same source illustration and build scope. |
| Version II panel-mounted male 3-pin XLR power input | 3 | Unused | Same source illustration and build scope. |
| USB-to-TTL 6-way 2.54 mm header | 1 | GND | The source wire-order diagram labels the six header positions 1–6. The cable is shown connecting a USB-to-TTL module to the Mendel motherboard. |
| USB-to-TTL 6-way 2.54 mm header | 2 | CTS# | Same source wire-order diagram. |
| USB-to-TTL 6-way 2.54 mm header | 3 | VCC | Same source wire-order diagram; the source does not identify a compatible installed host-board voltage for an arbitrary machine. |
| USB-to-TTL 6-way 2.54 mm header | 4 | TXD | Same source wire-order diagram. |
| USB-to-TTL 6-way 2.54 mm header | 5 | RXD | Same source wire-order diagram. |
| USB-to-TTL 6-way 2.54 mm header | 6 | RTS# | Same source wire-order diagram; the guide later marks this cable end green. |
| Version II opto-endstop connector A | top | VCC | Board connector as pictured; the guide says to verify VCC is the stepper-controller board's 5 V regulator output. |
| Version II opto-endstop connector A | middle | SIG | Same source-image orientation; no connector pin numbers are supplied. |
| Version II opto-endstop connector A | bottom | GND | Same source-image orientation; no connector pin numbers are supplied. |

The guide describes three stepper-driver boards, one or more extruder controllers, 10-way ribbon control wiring, and named motherboard signals RS485, SDA, SCL, GRN and BLK. Its linked overall schematic illustrates multi-wire board interconnects, but does not provide a complete numbered pin schedule for each motherboard, driver, or extruder-controller header in the extracted guide text. Those board-level headers remain outside this contact inventory pending a revision-specific drawing. Do not turn names from the illustrated wiring into guessed connector cavities.

No SmoothieBox connection is established. The XLR power input and opto-endstop are from a Version II build guide; the USB header is a specific USB-to-TTL cable wiring reference. Installed boards, cable wiring, connector mating views, compatibility, supply ratings, and endstop electrical contract must be verified independently. The old guide's operational wiring instructions are not reproduced here.

## Diagram guidance

Show the 3-pin XLR, six-way USB-to-TTL header, and opto-endstop connector A as separate machine-side reference peripherals. Preserve XLR numbering, USB header pin numbering and signal labels, and top/middle/bottom opto positions. Mark all SmoothieBox paths OPEN; never treat these as a universal Mendel pinout. Keep unrelated RepRapPro Mendel cable tables separate.

## Limits

Specifications and the two wiring tables are scoped to their respective wiki reference design/build sources and must not be applied to a commercial “Mendel-style” printer without checking its revision. The overview's USB/power facts do not establish the connector-specific reference tables by themselves.
