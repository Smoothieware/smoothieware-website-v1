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


## 2026-09-28 pin-level supplement

The STEPCRAFT 2 v4 manual (version dated 12 March 2020; applies to 210/300/420/600/840) lists X1 as an optional parallel-port LPT adapter. Its overview describes connecting the computer to the controller through that optional module, but the pin schedule itself gives no per-contact input/output direction, voltage, or logic threshold. The table below transcribes every numbered X1 position individually so repeated ground positions stay distinct. “PE shield” is a separate shield entry, not a numbered contact. The adjacent extracted “5V VCC” phrase is not unambiguously associated with a numbered X1 contact and is deliberately not assigned.

| X1 position | Manual label |
|---:|---|
| 1 | Relay 1 |
| 2 | Direction X |
| 3 | Step X |
| 4 | Direction Y |
| 5 | Step Y |
| 6 | Direction Z |
| 7 | Step Z |
| 8 | Direction 4th axis |
| 9 | Step 4th axis |
| 10 | Tool-length sensor |
| 11 | Error |
| 12 | Reference switch X/Y/Z (one grouped contact; axes are not individually separated) |
| 13 | Reference switch 4th axis |
| 14 | Relay 2 |
| 15 | Free (In) |
| 16 | Relay 3 |
| 17 | Free (Out) |
| 18 | GND |
| 19 | GND |
| 20 | GND |
| 21 | GND |
| 22 | GND |
| 23 | GND |
| 24 | GND |
| 25 | GND |
| PE shield | Cable shield |

This X1 schedule, X2 external-signals schedule, and optional X101 fourth-axis schedule are separate manufacturer reference interfaces. The local wiki identifies a StepCraft 2/600 build but not the fitted control-card revision or optional module set. No contact schedule here proves local hardware fitment, mating orientation, or a SmoothieBox conductor. Every position remains OPEN pending hardware identification and continuity/electrical checks. The manual does not establish X1 shell style or gender; describe it as a 25-position reference peripheral only.

Source: [STEPCRAFT 2 Operating Manual v4](https://www.stepcraft-systems.com/images/SC-Service/Anleitungen/DE-Betriebsanleitung-SC2-v4.pdf), §§6.5.1–6.5.3, pp.17–18.


## 2026-09-28 cross-version manufacturer note

The official English STEPCRAFT 2 v5.1 manual also covers sizes 210/300/420/600/840 and independently reproduces the same X1/X2/X101 position schedules. At X1 position 11, it labels the function “Emergency stop,” while the German v4 manual labels it “Fehler” (“Error”). Because the local 2016 project wiki does not identify the installed control-card revision, keep both version-labelled source terms visible and do not assign an electrical behavior or route to pin 11. The v5.1 source still does not specify the shell form, gender, or mating view of the 25-position X1 LPT connector.

Source: [STEPCRAFT 2 Operating Instructions v5.1, English](https://www.stepcraft-systems.com/images/SC-Service/Anleitungen-EN/EN-Operating-Instructions-SC2-v5-1.pdf), §§6.5.1–6.5.3, pp. 15–17. Its X1, X2, and optional X101 reference assignments agree with v4 apart from the stated X1.11 label variation.


## 2026-09-28 route-candidate review

This later review supersedes the all-OPEN drawing disposition in the preceding pin-level supplement only for the candidates below. The source contact functions and cross-version note remain preserved. Manufacturer labels are facts of the selected reference schedules; the SmoothieBox associations, receiving/status directions, return allocations and A-to-fourth-axis binding below are inferences or illustrative design choices. No fitted card, optional module, installed harness, mating view or electrical compatibility is established.

### Exact dotted hypotheses

| Review ID | Exact endpoint association | Drawing disposition |
|---|---|---|
| G01 | SSR1.1 ↔ X1.1 | DOTTED_CONDITIONAL_COMMAND |
| G02 | DRVX.3 ↔ X1.2 | DOTTED_FUNCTION |
| G03 | DRVX.1 ↔ X1.3 | DOTTED_FUNCTION |
| G04 | DRVY.3 ↔ X1.4 | DOTTED_FUNCTION |
| G05 | DRVY.1 ↔ X1.5 | DOTTED_FUNCTION |
| G06 | DRVZ.3 ↔ X1.6 | DOTTED_FUNCTION |
| G07 | DRVZ.1 ↔ X1.7 | DOTTED_FUNCTION |
| G08 | DRVA.3 ↔ X1.8 | DOTTED_OPTIONAL_AXIS |
| G09 | DRVA.1 ↔ X1.9 | DOTTED_OPTIONAL_AXIS |
| G10 | PROBE.4 ↔ X1.10 | DOTTED_CONDITIONAL_STATUS |
| G11 | SSR2.1 ↔ X1.14 | DOTTED_CONDITIONAL_COMMAND |
| G12 | DRVX.2 ↔ X1.18 | DOTTED_ILLUSTRATIVE_RETURN |
| G13 | DRVX.4 ↔ X1.19 | DOTTED_ILLUSTRATIVE_RETURN |
| G14 | DRVY.2 ↔ X1.20 | DOTTED_ILLUSTRATIVE_RETURN |
| G15 | DRVY.4 ↔ X1.21 | DOTTED_ILLUSTRATIVE_RETURN |
| G16 | DRVZ.2 ↔ X1.22 | DOTTED_ILLUSTRATIVE_RETURN |
| G17 | DRVZ.4 ↔ X1.23 | DOTTED_ILLUSTRATIVE_RETURN |
| G18 | DRVA.2 ↔ X1.24 | DOTTED_ILLUSTRATIVE_OPTIONAL_RETURN |
| G19 | DRVA.4 ↔ X1.25 | DOTTED_ILLUSTRATIVE_OPTIONAL_RETURN |

The eight motion signal candidates match independently named axis STEP/DIR functions on X1. G08/G09 additionally depend on a selected optional fourth-axis path. G01/G11 are conditional relay-command hypotheses; the carrier's switched 5 V control contact is not a dry relay contact or a qualified LPT driver. G10 is a conditional card-to-host tool-length-status hypothesis feeding PROBE.4, not PROBE IN driving X1.10 and not a connection to X2.8. Retain that sketch only as an explicitly unproved status-source hypothesis; the physical route stays OPEN until this direction is established.

For G12–G19, every numbered X1 GND position remains distinct. The exact pairing sequence 18–25 is an arbitrary illustrative cable assignment, not a probable manufacturer harness allocation. The manufacturer supplies GND functions but no dedicated STEP/DIR pair allocation; no ground bus, inter-device bond or PE-to-GND connection is inferred. G18/G19 share the optional-axis condition. Motor-return guesses do not silently qualify the relay or probe return circuits.

Every candidate requires fitted revision/option identity, both contact identities and view, direction and reset-state evidence, electrical thresholds/voltage/current/topology/polarity qualification, any buffer or isolation design, return-path qualification and exclusive controller ownership. STEP additionally requires pulse timing/rate; DIR requires setup/hold and polarity; relays require actual command-input and fail-off behavior; G10 requires a real compatible status source and a separately qualified probe return. Driver enable/inhibit, emergency-stop, spindle and enclosure engineering remains separate. These are **drawing hypotheses only and are not safe to wire from**.

### OPEN exclusions and inventory

X1.11, .12, .13, .15, .16, .17 and its PE shield remain OPEN: seven X1 entries. X1.12 is one grouped X/Y/Z reference-switch function; no per-axis or min/max fan-out is inferred. No A-min signal or A-min GND exists in the preserved 82-contact exterior schedule. All sixteen X2 entries and ten X101 entries remain OPEN; reject carrier PWM/STEP/DIR outputs to the corresponding X2 outputs, and do not reinterpret X101 motor winding contacts as logic inputs. The unnumbered X1 5V VCC text receives no contact or route.

The current reference study therefore has 49 numbered manufacturer contacts plus three distinct PE shields, 82 proposed exterior contacts, 19 dotted drawing candidates and 33 unrouted source entries. There are zero qualified physical conductors. OPEN describes this study's routing disposition, not measured disconnection or authorization to remove existing protective earth.

Source basis: the manufacturer [German v4 manual](https://www.stepcraft-systems.com/images/SC-Service/Anleitungen/DE-Betriebsanleitung-SC2-v4.pdf), §§6.5.1–6.5.3, and the separately retained [English v5.1 reference](https://www.stepcraft-systems.com/images/SC-Service/Anleitungen-EN/EN-Operating-Instructions-SC2-v5-1.pdf). The X1.11 Error/Emergency-stop variation remains version-labelled and unassigned; these references do not identify the local 2016 machine's fitted controller.
