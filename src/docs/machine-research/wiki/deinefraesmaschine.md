# DeineFraesmaschine

**Evidence depth:** machine-specific manufacturer electrical plan and technical data, document 012, revision A, dated 2020-09-01. This is a source drawing of the design, not proof that a particular build matches it.

## Identity and machine data

The manufacturer identifies X/Y/Z travel as 350/380/160 mm, a water-cooled 2.2 kW spindle (maximum speed 25,000 min⁻¹), Mach3 control and 230 V mains. Its parts list identifies four stepper motors, three reference switches and six end switches. The electrical plan title block is `Elektroplan`, document `012-001-001-01`, revision A, 2020-09-01.

## Source-mapped machine contacts

Pages 2–6 of the manufacturer's six-page electrical plan provide the equipment overview, axis layout, four driver-to-motor circuits, PC breakout, switches and relay, and spindle/VFD circuit. The audited diagram lists 188 machine-side positions in 31 groups: 163 source-drawn terminals plus 25 editorial form slots. Page 2 adds five terminals each for the 12 V/10 A and 36 V/10 A supplies and eight for the Hauptschalter; page 5 adds two for the separate NOT-Aus switch. The source's marks include breakout P1/P17/P15/P13/P12/P10, main-switch 5/T3, and VFD PCL. These marks are retained literally, not corrected from generic equipment conventions or treated as PC connector cavities. Motor A+/A−/B+/B− are winding labels without a supplied housing view. Display indices and switch A/B descriptions are editorial; no min/max or mating-face orientation is assigned.

Page 5 names SUB-D / PC, SUB-D, normalized as `PC_SUB-D`, without shell size, cavity count, mating view or a cavity/function table. The diagram keeps this machine-side PC peripheral as a possible 25-position form only, with 25 function-unknown editorial slots and no mapping to the breakout P marks. The USB boundary has no invented slots. The breakout reference arrows for P13 and P12 both read `RS, X`, while separate switch symbols associate Y with P13 and Z with P12. Both observations remain visible; the installed assignment is unverified. The plan depicts three reference switches, six end switches, a separate NOT-Aus switch and a relay with distinct P10/GND sensing contact and +12V/coil chain. It does not establish switch polarity, input conditioning, terminal-block IDs, connector housings, continuity, reset behavior or safety performance.

Page 4 labels PUL+/DIR+ with +5V references and driver GND/VDC with supply nets printed −36V/+36V. It does not establish a bond between driver supply GND and signal common or measure those minus-labelled nets relative to PC-GND. Page 6 draws the line-filter L1/N outputs to the VFD L1/N inputs; they are not identified as DC outputs. Six STEP/DIR connections are shown as dotted function guesses from SmoothieBox X/Y/Z motor-control outputs to conditional PC parallel-port positions 2–7. The basis is limited: the manufacturer identifies Mach3 and a PC_SUB-D-to-breakout boundary, while the official Mach3Mill Setup tutorial demonstrates X STEP/DIR on pins 2/3, Y on 4/5 and Z on 6/7 in one three-axis example. That tutorial explicitly warns that an actual machine pinout may differ. The machine plan does not establish a DB25 shell, the exact port-to-breakout pin assignment, the fitted breakout inputs, or compatibility with SmoothieBox. The diagram therefore labels the six paths GUESS and leaves A-axis, enables, returns, all machine power/motor/switch contacts and every other conditional form slot OPEN. Do not treat these dotted candidates as wiring directions. The source warns that electrical work must be performed only by authorized electrical personnel; this atlas is not wiring instruction or approval.

## Primary manufacturer sources

- [Electrical plan page](https://www.deinefraesmaschine.de/eplan/), with the six-page [direct plan PDF](https://www.deinefraesmaschine.de/wp-content/uploads/2020/09/ePlan-CNC-Fraese.pdf) — document 012, revision A, dated 2020-09-01; downloaded copy SHA-256 `2a87e93b730493e882db742f5b5c514b6901088517ef375a3370a21e72e050cb`.
- [Technical data](https://www.deinefraesmaschine.de/technische-daten/) — axis travel, spindle rating/speed/cooling, Mach3, and 230 V mains.
- [Parts list](https://www.deinefraesmaschine.de/stuckliste/) — three reference switches, six end switches, one spindle and four stepper motors.
- [Appropedia catalogue](https://www.appropedia.org/Open_Source_Machine_Tools) — cross-reference identifying the project and author Christoph Loibl; not used for electrical assignments.

## Scope and unresolved evidence

This plan supplies source-drawn design terminals, including some unmarked switch contacts, not a measured machine instance. Installed revision, PC peripheral housing and cavity map, breakout-board make/revision, switch-contact states/polarity, motor winding continuity, drive input logic/ratings, VFD control-input configuration, and actual SmoothieBox compatibility remain unverified. The WJ200 appears in the plan as 200 V equipment while the technical-data page states 230 V household supply; this source-level rating tension is retained for review rather than resolved by assumption. Do not connect from this transcription.

## Retained first-pass research note

The initial catalogue-only pass recorded the following limitation before manufacturer research was added. It is retained as chronology; it does not describe the expanded evidence above.

> **Evidence depth:** gantry CNC mill; open-source-inspired catalogue entry. This dossier is grounded in the Appropedia wiki entry only; references from that page to vendor, GitHub, or other non-wiki pages were not used as evidence.
>
> The wiki catalogue lists 350 × 380 × 160 mm, a water-cooled spindle, and Mach3 software. It describes the construction as well documented, but this research pass does not use the linked non-wiki documentation.
>
> The captured wiki catalogue row does not provide a machine-specific operating procedure, connector table, electrical pinout, or transcribable wiring diagram for this model. Those items are recorded as unknown, rather than inferred from the model name or from the page's external links. The source may link further documentation, but that non-wiki content is outside this source-only research scope.
>
> Source: [Tolocar / Open Source Machine Tools — Appropedia wiki](https://www.appropedia.org/Open_Source_Machine_Tools) — machine catalogue entry.


## Dotted STEP/DIR function hypotheses

The official [Mach3Mill Setup tutorial](https://www.machsupport.com/ftp/Docs/Mach3Mill_Setup.pdf), pp. 2–3, shows one three-axis example using PC parallel-port pins 2/3 for X STEP/DIR, 4/5 for Y and 6/7 for Z. It says the actual machine pinout may differ and directs users to machine-specific documentation. This is used only as a smart function hypothesis for six dotted paths into the possible PC_SUB-D peripheral. It does not identify this machine's shell as DB25 or prove pin functions in its five-axis breakout. No A-axis, enable, return, spindle, switch, relay or power route is inferred. Validate exact fitted port, breakout manual/configuration, signal levels, current, timing, polarity, reference/isolation and safety design before any connection.
