# RNJFAB's “Homemade, cheap, plasma CNC”

**Machine identity:** an owner-built 1200 × 1200 mm CNC plasma table, later transferred to another owner. The thread title is descriptive rather than a product model.  
**Evidence state:** 27-page LinuxCNC forum build and support thread. The owner reports the machine running and later being sold/transferred after six years. Its design evolved substantially; component snapshots must be kept in sequence.  
**Novelty check:** thread/build name not found in the current machine-control survey HTML or sibling assets on 2026-09-23.

## Initial build and mechanics

The owner says the project began in January 2020 for student access to CNC. The goal was a low-cost machine with a 1200 × 1200 mm work area that could accept either plasma or router tooling. The first configuration used 1200 mm ball screws, 1300 mm linear rails (later called a mistake), NEMA 23 motors, TH6600 stepper drivers, and a Mach3 USB motion board (also later called a mistake). The welded frame used salvaged 75 × 75 × 3 mm RHS; the gantry used the same section with angle to support bearings. The owner used a welded waterbed made from 50 × 50 angle with a 2 mm base.

The owner reports this early version eventually cutting with a Cut50 plasma source on a 1200 × 1200 mm work area and a total cost below AUD 2,000. The Cut50 was described by the owner as capable of cutting 6 mm steel. Over the next six months the owner changed the gantry to address pitching, remade the Z axis several times, deepened the waterbed, added adjustable slat holders, tank/plumbing, a control box, and torch-height control. Treat these as successive revisions, not a single frozen bill of materials.

## Control evolution and failure history

The initial Mach3 USB setup required considerable trial and error because the owner says the board had no manual. Later the owner reports skipped steps and sheet-alignment loss, then migrated to LinuxCNC with a Mesa 7i96 and THCAD10 (10 inputs, 3 outputs). Initial LinuxCNC setup was difficult; after resolving laptop latency and configuration issues, the machine moved accurately and at useful speed. During a later PlasmaC transition, the owner reports mistakenly connecting a 5 V probe wire to a 24 V proximity-sensor path and shorting/damaging the Mesa 7i96. This is a forum-reported failure; it illustrates that sensor-voltage compatibility must be checked from the actual board documentation before wiring.

A later report in 2023 calls the machine an “absolute workhorse” with everything working. The owner said in December 2024 that it was moving to a new home. A separate 2025 arc-OK/THC troubleshooting thread page explicitly refers to the old machine at its new home; the source discusses an arc-OK threshold adjustment but is not a stable configuration recipe. Do not conflate this older Cut50-era build with the owner's separately mentioned newer machine.

## Operation evidence

The machine was built for plasma cutting and optional router use. The owner posted small sign-cutting examples and later reported long-term production use. A waterbed was part of the design. The thread does not expose a complete, verified wiring schematic or terminal-by-terminal pinout in the inspected posts. It also does not provide a complete startup, homing, torch-height, cut-chart, or maintenance procedure.

## Wiring / pinout

| Function | Evidence in thread | Status |
|---|---|---|
| Motion axes | NEMA 23 motors; TH6600 drivers in the initial setup | Components reported; signal pin mapping absent |
| Initial controller | Mach3 USB board, later replaced | Owner reports poor reliability and no useful manual |
| Later motion/I/O | Mesa 7i96 with THCAD10; owner reports 10 inputs and 3 outputs | Board identity/capacity reported, no terminal assignment table in reviewed posts |
| Probe / proximity wiring | A 5 V probe wire was mistakenly placed on a 24 V proximity-sensor path and the board was damaged | Failure report only; do not reuse wiring |
| THC / arc-OK | Added during revisions; later arc-OK troubleshooting appears after transfer | Version-specific and incomplete |

No terminal-to-terminal wiring instruction can be derived from these forum posts alone.

## Forum visuals

The owner attached photos of the frame, control electronics, plasma-cut work, and revisions in the [27-page LinuxCNC build thread](https://forum.linuxcnc.org/show-your-stuff/42411-homemade-cheap-plasma-cnc). The attachment viewer did not expose diagram text in this pass. The source thread is the visual record; no schematic has been transcribed here.

## Sources (forum posts only)

1. RNJFAB and LinuxCNC community replies, “Homemade, cheap, plasma CNC,” LinuxCNC Forum, started 2021-04-30: [thread](https://forum.linuxcnc.org/show-your-stuff/42411-homemade-cheap-plasma-cnc). Early posts record the machine's first configuration; later posts report changes, the control migration, damage, long-term operation, transfer, and follow-on troubleshooting.
