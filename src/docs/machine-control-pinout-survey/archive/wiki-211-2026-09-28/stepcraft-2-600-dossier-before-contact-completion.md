# StepCraft 2/600

Research status: wiki-sourced CNC build/maintenance dossier; distinct model size from the already-documented StepCraft 840. Captured 2026-09-23.

## Identity and wiki history

FabLab Karlsruhe’s project wiki calls the machine “Step-Craft 600 CNC-Fräse” and identifies the product variant as “Step-Craft 2/600.” The wiki records a 432 × 680 mm clamping area, 420 × 600 × 140 mm working envelope, and 175 mm clearance height. Its HF spindle is listed at 500 W maximum with 0.1–6 mm collets; the page lists 220 V supply.

## Use and maintenance evidence

The page records WinPC NC and Autodesk Fusion 360 in the software section. The historical build log reports alignment work, Y-axis step-loss problems, rebuilding/adjusting the axis system, and an eventual successful 2 mm aluminium trial, followed later by another failed trial with step loss and removal for investigation. The wiki explicitly says there is no regular operating log and that the machine was handed to experienced users. Treat it as an archived/project machine, not as confirmed operational today.

## Connections and pinout

The project wiki mentions USB full version and a powered HF spindle but supplies no local wiring schematic. A separate manufacturer [STEPCRAFT 2 operating manual, v4](https://www.stepcraft-systems.com/images/SC-Service/Anleitungen/DE-Betriebsanleitung-SC2-v4.pdf) states that it applies to STEPCRAFT 210, 300, 420, 600 and 840 systems. It documents optional modular controller-card connectors. These are manufacturer-reference mappings for that manual's control-card generation; the project page does not identify the local controller board or prove it has that card.

### Manufacturer SC2 controller reference — external signals, SUB-D 15 (X2)

| X2 contact | Signal | Direction stated by manual |
|---:|---|---|
| 1 | 19 V / 30 V VCC | Output |
| 2 | GND | Output |
| 3 | +5 V / VCC Logic | Output |
| 4 | Direction, 4th axis | Output |
| 5 | Step, 4th axis | Output |
| 6 | Relay 2 | Output |
| 7 | PWM | Output |
| 8 | Tool-length sensor | Input |
| 9 | 19 V / 30 V VCC | Output |
| 10 | GND | Output |
| 11 | Disable | Input |
| 12 | 4th-axis limit switch | Input |
| 13 | Relay 1 | Output |
| 14 | Relay 2 | Output |
| 15 | Enclosure | Input |
| Shield | PE | Shield |

### Manufacturer SC2 controller reference — optional 4th-axis SUB-D 9 (X101)

| X101 contact | Signal |
|---:|---|
| 1 | Winding 1A |
| 2 | Winding 1B |
| 3 | Not connected |
| 4 | Not connected |
| 5 | 4th-axis limit switch |
| 6 | Winding 2A |
| 7 | Winding 2B |
| 8 | Not connected |
| 9 | GND |
| Shield | PE shield |

The manual also lists an optional parallel-port LPT adapter X1. It assigns contacts 1–17 to relay, axis direction/step, tool-length, error, limit-switch and free input/output roles; contacts 18–25 are shown as GND with a PE shield. The source extraction also places a “5V VCC” label beside this table without a clear contact association, so no X1 5 V pin is assigned here. The parallel-module pin map, X2 map and optional X101 map are separate interfaces and must not be merged.

The current SC2 manual gives the 600-size working dimensions and names this series; that supports a model-family reference for StepCraft 2/600 but does not prove the historical installation retains this control-card revision. The wiki's table/outlet E-stop has no local circuit details. Do not present these reference tables as verified local wiring.

## Visual evidence and source

The wiki page includes a machine image and maintenance/build records. No local electrical diagram was present in the inspected text. [FabLab Karlsruhe Step-Craft 600 project wiki](https://wiki.fablab-karlsruhe.de/doku.php?id=projekte%3A2016%3Acncfraese).

## Evidence limits

All performance/history claims are attributed to the project wiki and date-specific entries. The separate manufacturer manual is a revision-scoped reference, not evidence that the dated local machine has that controller card. Exact installed drive/controller revision and current location/status are not established.

Manufacturer source: [STEPCRAFT 2 Operating Manual v4](https://www.stepcraft-systems.com/images/SC-Service/Anleitungen/DE-Betriebsanleitung-SC2-v4.pdf), especially sections 6.5.1–6.5.3; it applies to named 210/300/420/600/840 size series and provides X1, X2 and optional X101 maps.
