# Lasersaur 14.03 — Winti build

Research capture: 2026-09-23. Status: wiki-grounded draft; integration and whole-repository deduplication pending.

## Identity, use and deduplication

Winti’s 2015 build based on Lasersaur 14.03, with a taller frame intended to accommodate a future Z arrangement. This is one Lasersaur machine/design entry, not a separate count for every build or controller. No Lasersaur entry appears in the frozen atlas laser families.

## Wiki-supported machine facts

Wiki states 100 W CO₂ laser, 1220 × 550 mm working area, stock envelope up to 1400 × 700 mm and maximum feed 8000 mm/min. A taller frame does not prove a completed motorized Z axis. Controller-board revision is unknown. [Community machine page](https://www.profs.ch/flwiki/LaserCutter).

## Control, setup and use

Workflow uses browser-based local control, SVG vectors and separate PNG/JPEG raster handling. Embedded SVG bitmaps are ignored. Home, verify imported scale, assign color passes and preview boundaries before a job. The page requires authorized materials and continuous attendance. [Community machine page](https://www.profs.ch/flwiki/LaserCutter).

## Connections and pinout

| Circuit / connector | Pin/contact and signal | Direction / polarity | Electrical details | Evidence status |
|---|---|---|---|---|
| Controller logic and communication | Unknown physical connector pin assignments | Unknown | Unknown | No machine-specific contact map found in inspected wiki sources |
| Motors and spindle | Unknown contact assignments | Unknown | Only the separately cited component ratings are known | Do not translate a motor rating into logic voltage |
| Limits, probe, E-stop and protective circuits | Unknown | Unknown | Unknown | Button appearance and workflow do not identify safety wiring |

### Original Driveboard v14.03 cable reference, distinct from Winti's build

Checked 2026-09-26. The Lasersaur project's own [Driveboard v14.03 wiring page](https://github.com/nortd/lasersaur/wiki/driveboard_v1403) provides **source-board RJ45 contact assignments**. Captured raw Markdown `/tmp/atlas-lasersaur-driveboard-v1403.md`, SHA-256 `095610b734e9271f75fb8cc0c7b1ed9e308cd35d4b33647e2496c83f125e2074`. Its required-parts list counts twelve shielded Cat5 patch cables, and its sensor/control section assigns the following 12 separate eight-position harness connectors (96 positions):

| Source v14.03 cable | Contact functions given by the project | Boundary |
| --- | --- | --- |
| X1 left, X2 right, Y1 rear, Y2 front limits | 1/3 VCC, 2/6 SIG, 4/5 SIG, 7/8 GND on the former Driveboard; the source cautions against bridging the latter SIG and GND groups | These are original controller net names, not a SmoothieBox input/return wiring approval. |
| X and Y Nanotec stepper cables | 1/3 A, 2/6 A′, 4/8 B, 5/7 B′; source records motor wire colours separately for X and Y | These are motor winding connections downstream of a drive, not STEP/DIR logic. Winti motor identity and current ratings are unverified. |
| Door 1 and Door 2 | 1/3 VCC, 2/6 SIG, 4/5 SIG, 7/8 GND on the original Driveboard, with the same bridge caution | Original hard-logic safety path, not a control software substitute. |
| Laser control | 2/6 DIS to PSU P/WP, 4 PWM to H/TH, 7/8 GND; 1/3 and 5 listed unused | Power-supply make/revision, high-voltage isolation, polarity and electrical contract on Winti's 100 W unit are unverified. The original page separately mentions a 5V-to-IN PSU jumper; this is **not** transferred as a SmoothieBox connection. |
| Chiller | 1/3 to source H3, 2/6 to source H1, 4/5 SIG, 7/8 GND with the bridge caution | The original chiller interlock is part of the hardware laser-disable chain. Winti's installed chiller pins are unknown. |
| E-stop interlock | 1/3 E-STOP_1, 2/6 E-STOP_2; 4/5/7/8 not listed for this cable | The original E-stop cuts board/laser-PSU/24V-PSU power using an SSR. It must not be depicted as a mere SmoothieBox GPIO. |
| Optional E-valve | 1/3 air_assist+, 2/4/6/8 GND, 5/7 aux1_assist+ | Optional source design only; Winti's actual valve fit is not established. |

The source says its board is **Z ready**, but Z1/Z2/stepper-Z are optional and only “analogous” to X/Y; those connectors are not numbered in this drawing. Winti says it raised the frame to *allow a future* motorized Z axis, which does not prove the axis was installed. The two Gecko G201X (or compatible G203V) drivers and original hard-logic interlocks are source-design references, not verified components of Winti's modified 100 W machine.

The primary SVG presents the 96 source-scoped cable contacts as **REFERENCE ONLY / OPEN**. No line, even a dotted functional guess, is selected between any cable mark and a SmoothieBox exterior terminal: RJ45 pin roles alone do not qualify signal levels, returns, driver interface, fitted Winti harness, laser PSU or safety design. Any future proposed connection would need a revision-matched installed harness survey and an independently engineered laser interlock. The Winti page does confirm a 100 W CO2 laser, water cooling, ventilation and an E-stop, but not their contact maps. Those local peripherals remain distinct from the original Driveboard reference.

## Visual evidence and transcription

[Wiki source page](https://www.profs.ch/flwiki/LaserCutter) · [Original wiki-hosted media](https://www.profs.ch/flwiki/images/d/d3/LaserSaur_VersionWinti.png) · [Retained original](images/lasersaur.png).

CAD rendering: raised open lid on two struts, rectangular extrusion frame, front-to-back side rails, transverse gantry/head, honeycomb-looking bed and elongated rear tube-shaped component. It contains no contact numbers or electrical labels. This is a design rendering, not proof of every completed modification.

The image belongs to its source; retaining it records research evidence and does not assert ownership or a reuse license. Consult the source for licensing before republication.

## Conflicts and open questions

Page revision is historical (last edited 2022-07-25). Treat power and dimensions as this wiki build’s statements. High-voltage supply pins and interlock wiring are unknown.

## Evidence limits and integration gate

This is a wiki-derived dossier, not a manufacturer-certified wiring instruction. `Unknown` means the inspected sources did not establish that field. A photographed stop button does not establish its contact logic, safety rating, or interlock circuit. Do not infer a machine pinout from its software, controller family, cable color, or connector appearance.

Deduplication was checked against the complete frozen atlas-label inventory supplied in the native fallback payload, including the prior controller leads. The rest of the repository and concurrent new dossiers were not inspected by this advisor. The parent must perform that broader check before crediting this toward 100 new machines.
