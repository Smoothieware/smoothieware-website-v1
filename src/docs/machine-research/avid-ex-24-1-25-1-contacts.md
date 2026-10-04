# Avid EX controller 24.1 / 25.1 source contact tables

Manufacturer sources read on 2026-09-26:

- [EX stepper 24.1 schematics](https://www.avidcnc.com/support/instructions/electronics/ex/manual/stepper/24.1/schematics/)
- [EX stepper 25.1 schematics](https://www.avidcnc.com/support/instructions/electronics/ex/manual/stepper/25.1/schematics/)
- [EX servo 24.1 schematics](https://www.avidcnc.com/support/instructions/electronics/ex/manual/servo/24.1/schematics/) and its [CRP5310-01E servo board PDF](https://www.avidcnc.com/support/instructions/electronics/ex/manual/pdf/schematics/24.1/Avid_CNC_EX_Servo_Board_24.1.PDF)
- [EX servo 25.1 schematics](https://www.avidcnc.com/support/instructions/electronics/ex/manual/servo/25.1/schematics/) and its [CRP5310-01E servo board PDF](https://www.avidcnc.com/support/instructions/electronics/ex/manual/pdf/schematics/25.1/Avid_CNC_EX_Servo_Board_25.1.PDF)

All four schematic pages show the same individual 14-pin cable table. The stepper pages also show the same DB9 and XLR motor tables. These are source-revision hardware references, not evidence of a particular installed harness or electrical compatibility with SmoothieBox. Preserve 24.1 and 25.1, stepper and servo, as separate profile scopes even where tables agree.

## 14-pin control cable, all four EX pages

| Contact | Source function | Harness color |
| --- | --- | --- |
| 1 | Spindle OK ground | Blue |
| 2 | Spindle OK input | White |
| 3 | Plasma torch ON output | Orange/black |
| 4 | Plasma torch ON output | Green/black |
| 5 | Plasma divided-voltage negative input | Red/black |
| 6 | Plasma divided-voltage positive input | Red/white |
| 7 | Spindle FWD output | Orange |
| 8 | Spindle DCM output | Green |
| 9 | Spindle analog control-voltage output | Red |
| 10 | Spindle analog common | Black |
| 11–14 | Not in use in these EX schematic tables | Not specified |

The manufacturer warns that a cable labelled `PLASMA ONLY` leaves positions 1–2 disconnected. A cable labelled `SPINDLE ONLY` has all pins connected and should not be used for EX plasma. Source colors describe the manufacturer's harness, not a verified retrofit cable. The table's CNC12 assignment for divided-voltage positive position 6 is `GND`; preserve that as a manufacturer table entry without reinterpreting the named voltage polarity or proposing a SmoothieBox analog path. These EX cable roles differ from the older PnP 17.4/22.2 cable roles at positions 1–2 and 11–14.

## Stepper variants: DB9 and XLR motor outputs

For both 24.1 and 25.1 stepper sources, the NEMA23 DB9 table gives 1 and 5 current-set resistor contacts, 2–4 not connected, 6 B+ yellow, 7 B− blue, 8 A+ red, 9 A− green. The NEMA34 XLR table gives 1 A+ red, 2 A− green, 3 B+ yellow, 4 B− blue. The manufacturer shows male and female numbering views separately. These are motor-side phases after the driver, not STEP/DIR inputs from SmoothieBox.

## Servo variants: CRP5310-01E board PDF

The 24.1 and 25.1 servo board PDFs each list J1–J5 as eight-contact connectors to Teknic ClearPath SDSK motors. J1 is X, J2 Y1, J3 A, J4 Y2, J5 Z. For each: position 1 is that axis's HLFB+, positions 2–4 are +5 V, position 5 is HLFB−, position 6 is step, position 7 direction, and position 8 enable. J2/Y1 and J4/Y2 share the source's ST2/DR2/ENA1 assignments, but the board's Y2 direction-inversion jumper matters; do not infer a direct shared conductor.

The PDFs also list J6 positions 1–2 as VFD fault common (blue) and VFD fault (white); J7 positions 1–3 as COM/GND, +5V, and HLFB to the CRP5210-01E interconnect board; J8 positions 1–4 as Acorn ST1 X step (white), DR1 X direction (black), ST2 Y step (green), DR2 Y direction (blue); J9 positions 1–4 as Acorn ST3 Z step (yellow), DR3 Z direction (orange), ST4 A step (brown), DR4 A direction (red). J12 position 1 is Acorn ENA1 (grey); position 2 is jumpered from Y Step for Y2 Step, and position 3 is jumpered from Y2 Step for Y1 Step according to the source table. These internal jumper descriptions do not establish an independent SmoothieBox input at positions 2–3. J10 and J13 are configuration jumpers, not external retrofit cable endpoints. The PDF's named Acorn signals are historical controller-side outputs to the servo board; no installed SmoothieBox wiring, signal levels, polarity, shared return, or isolation are established.

## Atlas reconciliation

The portable graph contains all 14 EX cable positions for each profile but repeats group descriptions on several rows. The two stepper profiles also contain all DB9 and XLR numbers with some repeated phase-group descriptions. The new diagram reference cards replace these with exact individual source labels and keep all SmoothieBox routes OPEN. The two servo profiles currently have an unnumbered `servo board harness` group; the manufacturer PDF provides actual J1–J9/J12 contact numbers for source-scoped expansion. Preserve the graph snapshot and legacy diagrams as historical evidence while adding the source-specific cards.
