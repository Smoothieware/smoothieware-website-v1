# Stepcraft 840

Research capture: 2026-09-23. Status: wiki-grounded draft; integration and whole-repository deduplication pending.

## Identity, use and deduplication

FabLab Winti’s Stepcraft 840. Generation, drive/controller revision and spindle model are unknown. Checked against Shapeoko, OpenBuilds, Avid, Genmitsu and other atlas routers; Stepcraft 840 is separately named, not an alias or controller change.

## Wiki-supported machine facts

Community page documents a gantry mill/router. Its cutting examples are explicitly anecdotal and depend on tooling/material condition, so this dossier does not promote them to machine limits or universal feeds. [Community machine page](https://www.profs.ch/flwiki/Portalfr%C3%A4se_Stepcraft_840).

## Control, setup and use

The annotated bed image can support fixture planning only after checking units and the actual installation. The wiki’s material-specific examples are starting evidence for a later setup guide; controller initialization, postprocessor and safe homing sequence remain unknown in inspected sources. [Community machine page](https://www.profs.ch/flwiki/Portalfr%C3%A4se_Stepcraft_840).

## Connections and pinout

| Circuit / connector | Pin/contact and signal | Direction / polarity | Electrical details | Evidence status |
|---|---|---|---|---|
| Controller logic and communication | Unknown physical connector pin assignments | Unknown | Unknown | No machine-specific contact map found in inspected wiki sources |
| Motors and spindle | Unknown contact assignments | Unknown | Only the separately cited component ratings are known | Do not translate a motor rating into logic voltage |
| Limits, probe, E-stop and protective circuits | Unknown | Unknown | Unknown | Button appearance and workflow do not identify safety wiring |

STEPCRAFT's [SC2 Operating Manual v4](https://www.stepcraft-systems.com/images/SC-Service/Anleitungen/DE-Betriebsanleitung-SC2-v4.pdf) says it applies to the 210/300/420/600/840 size series and provides optional controller-card mappings for SUB-D 15 X2 and SUB-D 9 X101, plus an optional LPT adapter. The captured FabLab Winti page does not identify whether its 840 is a STEPCRAFT 2 generation or carries this controller-card revision. Therefore those manufacturer tables remain a lead for variant resolution and are not copied as the local machine's pinout.

## Visual evidence and transcription

[Wiki source page](https://www.profs.ch/flwiki/Portalfr%C3%A4se_Stepcraft_840) · [Original wiki-hosted media](https://www.profs.ch/flwiki/images/c/c5/Stepcraft-dimensions.jpg) · [Retained original](images/stepcraft.jpg).

Image transcription: green dashed rectangle “600 × 840”; green diagonal “140”; blue overall arrows “612” across and “920” along; hole pitch arrows “80” in both directions and “M6”; coordinate arrows x right, y up, z out of page. Red mushrooms appear at opposite corners. Units and the meaning of diagonal 140 are not written in the image: do not silently call it Z travel.

The image belongs to its source; retaining it records research evidence and does not assert ownership or a reuse license. Consult the source for licensing before republication.

## Conflicts and open questions

Visual dimensions are labels, not an independently checked travel specification. Connector and stop-contact assignments are absent.

## Evidence limits and integration gate

This is a wiki-derived dossier, not a manufacturer-certified wiring instruction. `Unknown` means the inspected sources did not establish that field. A photographed stop button does not establish its contact logic, safety rating, or interlock circuit. Do not infer a machine pinout from its software, controller family, cable color, or connector appearance.

Deduplication was checked against the complete frozen atlas-label inventory supplied in the native fallback payload, including the prior controller leads. The rest of the repository and concurrent new dossiers were not inspected by this advisor. The parent must perform that broader check before crediting this toward 100 new machines.

The manufacturer v4 source is a separate series reference. It does not establish this installation's controller/drive revision or wiring, and its connector map must not be attached to this machine until identity and configuration are reconciled.


## Separate manufacturer pin-schedule references added 2026-09-28

The local FabLab Winti page still does not identify this unit's STEPCRAFT generation, fitted controller, or option set. A second authoritative source is the STEPCRAFT SC2 English Operating Instructions v5.1, §6.5, pages 16–17. It explicitly covers the STEPCRAFT 840 size and gives these unit-control/optional-module schedules. This is a source-family reference only, separate from the earlier SC2 v4 series lead; neither manual establishes the Winti installation's revision or actual cabling. Every position below remains OPEN to SmoothieBox unless a later individually reviewed dotted guess is stated.

Source: [SC2 v5.1 English Operating Instructions](https://www.stepcraft-systems.com/images/SC-Service/Anleitungen-EN/EN-Operating-Instructions-SC2-v5-1.pdf).

### X1 · optional parallel-port LPT adapter

The manual frames X1 as the computer-to-unit-control parallel module. It supplies no X1 direction, voltage or threshold column and does not establish the physical shell, gender or mating-face orientation.

| X1 position | SC2 v5.1 signal | Source status |
|---:|---|---|
| 1 | Relay 1 | Listed |
| 2 | Direction X | Listed |
| 3 | Step X | Listed |
| 4 | Direction Y | Listed |
| 5 | Step Y | Listed |
| 6 | Direction Z | Listed |
| 7 | Step Z | Listed |
| 8 | Direction 4th axis | Listed |
| 9 | Step 4th axis | Listed |
| 10 | Tool length sensor | Listed; direction unstated |
| 11 | Emergency stop | Listed; circuit/polarity/rating unstated |
| 12 | Reference switch X/Y/Z | Combined source label; no individual axes/contact mapping |
| 13 | Reference switch 4th axis | Listed |
| 14 | Relay 2 | Listed |
| 15 | n.a. (In) | Source-empty; not an electrical NC declaration |
| 16 | Relay 3 | Listed |
| 17 | n.a. (out) | Source-empty; not an electrical NC declaration |
| 18 | GND | Listed |
| 19 | GND | Listed |
| 20 | GND | Listed |
| 21 | GND | Listed |
| 22 | GND | Listed |
| 23 | GND | Listed |
| 24 | GND | Listed |
| 25 | GND | Listed |
| Shield | PE | Separate protective-earth shield, not a numbered contact |

The nearby 5V / VCC text has no unambiguous numbered association and is not assigned to a contact.

### X2 · external signals, Sub-D 15

| X2 position | SC2 v5.1 signal | Direction |
|---:|---|---|
| 1 | 19 V / 30 V VCC | Output |
| 2 | GND | Output |
| 3 | +5 V / VCC Logic | Output |
| 4 | Direction 4th axis | Output |
| 5 | Step 4th axis | Output |
| 6 | Relay 2 | Output |
| 7 | PWM | Output |
| 8 | Tool length sensor | Input |
| 9 | 19 V / 30 V VCC | Output |
| 10 | GND | Output |
| 11 | Disable | Input |
| 12 | Reference switch 4th axis | Input |
| 13 | Relay 1 | Output |
| 14 | Relay 2 | Output |
| 15 | Enclosure | Input |
| Shield | PE | Separate protective-earth shield, not a numbered contact |

The current STEPCRAFT [D-series parameter page](https://www.stepcraft-systems.com/en/services/maschinenparameter-en) is a separate manufacturer schedule and differs at X1.15 (Enclosure vs. SC2 v5.1 n.a. (In)), X1.17 (PWM vs. n.a. (out)) and X2.14 (Relay 3 vs. Relay 2). Until the installed generation/controller is identified, these are variant conflicts, not merged pin labels or local-unit claims.

### X101 · optional 4th-axis connector, Sub-D 9

The SC2 v5.1 manual identifies this option for connection of a 4th-axis motor and reference switch. Fitment on the Winti machine is unverified.

| X101 position | SC2 v5.1 signal | Source status |
|---:|---|---|
| 1 | Winding 1A | Listed; electrical drive details unstated |
| 2 | Winding 1B | Listed; electrical drive details unstated |
| 3 | n.a. | Source-empty; not an electrical NC declaration |
| 4 | n.a. | Source-empty; not an electrical NC declaration |
| 5 | Reference switch 4th axis | Listed |
| 6 | Winding 2A | Listed; electrical drive details unstated |
| 7 | Winding 2B | Listed; electrical drive details unstated |
| 8 | n.a. | Source-empty; not an electrical NC declaration |
| 9 | GND | Listed |
| Shield | PE | Separate protective-earth shield, not a numbered contact |

No source states X1/X2/X101 electrical compatibility with the SmoothieBox, local connector fitment, connector shell/gender where unstated, mating view, installed continuity, common ground, external spindle control, or a safe cable. Do not route power, PE, GND, emergency-stop, disable or grouped reference-switch contacts by visual resemblance alone.
