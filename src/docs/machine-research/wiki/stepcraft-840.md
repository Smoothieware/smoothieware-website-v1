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
