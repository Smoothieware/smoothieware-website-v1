# Original Prusa XL — Bristol Hackspace configuration

**Wiki evidence status:** exact printer model and five-tool local profile documented. The page does not identify the installed unit's serial number or firmware revision.

## Identity and configuration

The Bristol Hackspace wiki describes a CoreXY Original Prusa XL with five tool positions and a 360 × 360 × 360 mm build volume. The documented local profile is “Prusa XL Original Prusa XL - 5T Input Shaper 0.4mm Nozzle.” It says the installation uses four high-flow ObXidian nozzles on tools 1–4 and a standard-flow ObXidian nozzle on tool 5. The machine uses 1.75 mm filament and a segmented bed with 16 independently controlled segments.

## Use notes

The local wiki instructs users to slice with PrusaSlicer and use G-code or BG-code. For USB media it specifies FAT32 with an MBR partition table. It describes the five filament paths and recommends assigning the first colour and supports in the indicated tool lines, checking that slicer assignments match loaded material. The page cautions against ABS, ASA, HIPS, and PA unless an enclosure and advanced filtration system are in place; the bench-top filtration is stated to be insufficient.

The page also records load/unload guidance, three available sheet types (smooth PEI, textured, and satin), and warns that inter-tool offsets can drift. It points users to the printer's tool-offset calibration wizard when this occurs. Induction is required.

## Pinouts and visual evidence

The wiki describes a 32-bit custom control board, an expansion slot, and single-cable toolhead communication, but gives no board identity, connector pin map, or expansion-slot assignment. These architectural descriptions are not enough to identify electrical contacts. No wiring or pinout is inferred.

The linked English XL handbook revision 1.04 (80 pages; PDF metadata modified 2024-06-11) says the mainboard has two extruder ports, but gives no connector designators, contact count, or contact assignments for those ports. Its tool-head overview labels the toolchanger connector without providing its contacts. The Bristol page describes built-in Ethernet and Wi-Fi, a USB port, and one-cable tool-head communication, but does not provide pin tables for them. These are model-family references, not proof of the installed Bristol board or harness.

Prusa's open-source index currently marks the Original Prusa XL electronic schematics and the listed Dwarf, XLBuddy, XL Enclosure, and Modular bed board drawings as pending. I checked the linked handbook and current manufacturer index; no source-backed numbered peripheral contacts could be transcribed for this local profile. The atlas therefore shows the two documented mainboard extruder-port groups as an OPEN reference card with zero fabricated pin rows. No SmoothieBox routes or dotted guesses are proposed.

## Sources

- [Prusa XL](https://wiki.bristolhackspace.org/equipment/3d_printer_room/prusaxl) — local 5-tool profile, operating guidance, materials, safety, and stated machine features.
- [Equipment catalogue](https://wiki.bristolhackspace.org/equipment/home) — corroborates the Prusa XL listing.
- [Bristol-hosted Prusa XL handbook, English revision 1.04](https://wiki.bristolhackspace.org/_media/equipment/laser/prusa3d_manual_xl_104_en.pdf) — model-family handbook; two mainboard extruder ports are mentioned without contact assignments.
- [Prusa open-source electronics index](https://www.prusa3d.com/page/open-source-at-prusa-research_236812/) — current XL schematic and board-drawing publication status.

**Unknowns:** serial number, firmware and hardware revisions, exact five-tool hardware configuration beyond the wiki note, control-board part number, the extruder-port contact counts and pinouts, and every other electrical connector pinout.
