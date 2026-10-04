# Trotec Speedy 400

Research capture: 2026-09-23. Status: wiki-grounded draft; integration and whole-repository deduplication pending.

## Identity, use and deduplication

Happylab Speedy 400 installation. The wiki describes CO₂ operation; installed tube power and controller revision are unknown. Checked against K40, LightObject, Ortur, Sculpfun and TwoTrees laser entries; Speedy 400 is a different commercial machine. A shared laser function is not an alias.

## Wiki-supported machine facts

Wiki states a 1000 × 610 × 305 mm envelope and describes cutting/engraving wood, acrylic, cardboard, leather and textiles. The stated Z dimension is not independently validated stock clearance. [Community machine page](https://wiki.happylab.at/w/Speedy400).

## Control, setup and use

RUBY workflow accepts vector formats including DXF, EPS, SVG and CDR and raster JPEG/PNG. The page uses red for cutting and black for engraving, describes homing with the lid closed and focusing, and requires training and continuous attendance. Material settings need a source-supported test for the actual stock. [Community machine page](https://wiki.happylab.at/w/Speedy400).

## Connections and pinout

| Circuit / connector | Pin/contact and signal | Direction / polarity | Electrical details | Evidence status |
|---|---|---|---|---|
| Controller logic and communication | Unknown physical connector pin assignments | Unknown | Unknown | No machine-specific contact map found in inspected wiki sources |
| Motors and spindle | Unknown contact assignments | Unknown | Only the separately cited component ratings are known | Do not translate a motor rating into logic voltage |
| Limits, probe, E-stop and protective circuits | Unknown | Unknown | Unknown | Button appearance and workflow do not identify safety wiring |

## Visual evidence and transcription

[Wiki source page](https://wiki.happylab.at/w/Speedy400) · [Original wiki-hosted media](https://wiki.happylab.at/images/5/57/Speedy_400_.jpg) · [Retained original](images/speedy400.jpg).

Photo reads “Speedy 400” and “trotec”; red/white enclosure, transparent blue lid, red mushroom at the upper right. A “flexx” marking is visible on the crossbar. That marking alone does not confirm a fitted or operational fiber source.

The image belongs to its source; retaining it records research evidence and does not assert ownership or a reuse license. Consult the source for licensing before republication.

## Conflicts and open questions

Prose describes CO₂; the photographed flexx marking leaves the exact laser-source variant unresolved. Do not infer fiber power, dual-source capability or interlock circuitry.

## Evidence limits and integration gate

This is a wiki-derived dossier, not a manufacturer-certified wiring instruction. `Unknown` means the inspected sources did not establish that field. A photographed stop button does not establish its contact logic, safety rating, or interlock circuit. Do not infer a machine pinout from its software, controller family, cable color, or connector appearance.

Deduplication was checked against the complete frozen atlas-label inventory supplied in the native fallback payload, including the prior controller leads. The rest of the repository and concurrent new dossiers were not inspected by this advisor. The parent must perform that broader check before crediting this toward 100 new machines.
