# CNC Mogul restored with a Sienci SuperLongBoard

**Machine identity:** CNC Mogul, a legacy rack-and-pinion router being restored by forum member hSolo/Nathan. The title does not identify a revision; do not assume all CNC Mogul units share this wiring.  
**Evidence state:** a 2025 owner build/restoration thread reports removal of the original controller, integration of an SLB, direction rewiring, limit setup, and calibration. Connector details are incomplete and some advice in the thread is explicitly tentative.  
**Novelty check:** exact machine name not found in the current machine-control survey HTML or its sibling assets on 2026-09-23.

## Machine and controller

The owner says the original machine used dual-drive Y steppers and rack-and-pinion motion. In the restoration, the old power supply and serial control board were removed; a Sienci gControl panel computer and SuperLongBoard (SLB) were installed. The owner added a drag-chain carrier and later reported that limit switches were set and the machine calibrated. The thread says 100 mm initially commanded 522 mm during calibration; after repeating the calibration routine about five times, the owner described repeatability as “spot on,” but supplied no measured tolerance or calibration log.

## Forum-reported motor wiring and direction

The owner identifies the existing motor as **KL23H2100-35-4A**, a 4-wire bipolar stepper, and records this color assignment:

| Coil/signal | Wire color reported by owner |
|---|---|
| A+ | Black |
| A− | Green |
| B+ | Red |
| B− | Blue |

The owner also notes that the separate LongMill MK2 diagram uses different color names (red/green for one coil and blue/yellow for the other) and labels A+/A−/B+/B− differently. Do not mix those two motor harness mappings.

Because this Mogul is rack-and-pinion driven, the forum discussion says mirrored Y motors need opposite rotation to move the gantry in the same linear direction. A participant proposed GRBL settings `$3=6` and `$8=1`, but the owner did not validate those settings. The owner reports instead that changing firmware settings had not produced the desired result and that rewiring was used to reverse Y2 and X so motion away from the lower-left home corner became positive. This is the owner’s reported result; the exact pin swap at the SLB plug is not specified.

## Setup / operation notes from owner

- The owner moved the machine to a new shop, replaced the original controller and power supply, routed wiring/drag chain, then performed calibration.
- The owner reports setting up limit switches and repeating the calibration routine.
- The thread does not provide verified travel limits, switch terminal numbers, full home sequence, spoilboard surfacing parameters, or a verified spindle/VFD pin map.
- The owner had an E-stop installed, but the thread does not demonstrate its safety function or document the complete circuit.

## Visual evidence

The [forum thread](https://forum.sienci.com/t/resurrecting-a-cnc-mogul/16837) embeds photos of the machine, the original serial controller, the retrofit, and a motor-wiring diagram. The specific [motor-wire diagram image](https://forum.sienci.com/uploads/default/original/2X/8/885f05d65def27eea17e2d9aeee8aa6ca6421206.jpeg) is linked directly from the post. The text transcription above follows the owner's accompanying written description; this pass did not independently read every pixel of that image. Original-controller photos are useful for historical identification only and should not be treated as a complete schematic.

## Safety / confidence boundary

The discussion mixes owner observations with community suggestions. Only the owner’s statements are treated as the build state. Proposed firmware settings and advice from participants without the machine are not verified settings. This record is not a wiring instruction; compare a physical motor label, coil continuity, controller pinout, and machine-specific documentation before any rewire.

## Sources (forum posts only)

1. hSolo/Nathan and replies, “Resurrecting a CNC Mogul,” Sienci Community Forum, April–June 2025: [thread](https://forum.sienci.com/t/resurrecting-a-cnc-mogul/16837). Posts 9, 12–20 contain the retrofit, motor colors, direction discussion, and calibration report.
2. Motor wiring diagram embedded in the same forum thread: [forum-hosted image](https://forum.sienci.com/uploads/default/original/2X/8/885f05d65def27eea17e2d9aeee8aa6ca6421206.jpeg).
