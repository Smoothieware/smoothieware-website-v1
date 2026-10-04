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

## Proposed SmoothieBox motion-function hypotheses · review 2026-09-29

SC2 v5.1 §§1.3 and 4.3 describe the required control/main board and computer connection through a USB or parallel module/socket, depending on the interface variant; §6.5.1 specifically names X1 as the optional parallel-port LPT adapter and labels X1.2–X1.9 with matching axis/direction or step functions. The SmoothieBox exterior inventory labels DRVX/Y/Z/A.1 STEP and .3 DIR. Matching axis and function makes the following eight associations reasonable candidates for a documentation diagram. The manual does not provide per-contact electrical direction data, logic thresholds, drive topology, or proof that this LPT option/controller is installed at FabLab Winti. These are therefore **GUESS ONLY** relationships, shown in **dotted violet**, not direct-wire instructions or a claim of compatibility.

| ID | STEPCRAFT contact | SmoothieBox exterior terminal | Reason and route-specific check |
|---|---|---|---|
| M01 | X1.2 · Direction X | DRVX.3 · X-axis DIR pin | Matching X-axis direction labels; identify and qualify the exact X direction receiver, polarity and setup/hold timing. |
| M02 | X1.3 · Step X | DRVX.1 · X-axis STEP pin | Matching X-axis step labels; identify and qualify the exact X step receiver, active edge, pulse width and maximum rate. |
| M03 | X1.4 · Direction Y | DRVY.3 · Y-axis DIR pin | Matching Y-axis direction labels; identify and qualify receiver, polarity and setup/hold timing. |
| M04 | X1.5 · Step Y | DRVY.1 · Y-axis STEP pin | Matching Y-axis step labels; identify and qualify receiver, active edge, pulse width and maximum rate. |
| M05 | X1.6 · Direction Z | DRVZ.3 · Z-axis DIR pin | Matching Z-axis direction labels; qualify receiver, polarity and timing, including unintended vertical motion. |
| M06 | X1.7 · Step Z | DRVZ.1 · Z-axis STEP pin | Matching Z-axis step labels; qualify pulse behavior and unintended vertical motion. |
| M07 | X1.8 · Direction 4th axis | DRVA.3 · A-axis DIR pin | Matching fourth-axis direction labels; conditional on the optional axis path being fitted and explicitly bound to A; qualify receiver, polarity and timing. |
| M08 | X1.9 · Step 4th axis | DRVA.1 · A-axis STEP pin | Matching fourth-axis step labels; conditional on the optional axis path being fitted and explicitly bound to A; qualify receiver, active edge, pulse width and rate. |

### Required checks before any route could be qualified

For each candidate, identify the installed controller/interface generation and confirm that the optional X1 adapter is actually fitted. Verify the numbered-contact view, connector sides and orientation, mating cable, endpoint identities and point-to-point continuity. Establish which endpoint drives and which receives in powered, unpowered, reset and disconnect states. Measure or source-verify voltage limits, thresholds, source/sink current, output topology, polarity, loading and any needed buffering or isolation. Check pulse/direction timing, axis binding, reset/power-loss states, current host versus historical USB control, contention and backfeed. Separately establish circuit returns, reference potentials, isolation and permitted bonds: no X1 GND or PE/shield return is assigned by this proposal. Keep emergency-stop, enclosure, disable/inhibit and other safety behavior independent until their circuits are identified and qualified.

The route set intentionally excludes X1 relays, tool-length sensor and reference-switch contacts; all X1 GND positions and the PE shield; every X2 and X101 contact and PE shield; the unnumbered X1 5V/VCC marking; and the three source-empty X1/X101 positions. X1.12 remains one grouped reference contact and is not split into axis/min/max inputs. X2 is not substituted for X1 because its listed fourth-axis STEP/DIR and PWM are outputs, so they are not plausible destinations for the SmoothieBox’s corresponding outputs. X101 winding contacts are not STEP/DIR logic. Grounds are not paired by contact-number analogy.

There are eight dotted hypotheses and 44 OPEN contact/PE entries among the 52 listed X1/X2/X101 marks. No complete electrical circuit, local fitment, safe cable or electrically qualified route is established.

## Reviewed SC2 v5.1 reference and route disposition · 2026-09-29

This review follows the retained 2026-09-23 dossier, 2026-09-28 staged schedule and earlier 2026-09-29 M01–M08 review above. The historical M01–M08 associations correspond to the same endpoints as the generated G01–G08 identifiers used below. It establishes a current source-reference study, while the installed Winti generation, controller, options, connector view and cable continuity remain unresolved. The earlier OPEN-only stage is retained as historical evidence. Its “pages 16–17” shorthand is incomplete for the PE mark of X101: the relevant §6.5 schedule continues onto printed p.18. The earlier route review’s “three source-empty” shorthand is also superseded: two X1 positions plus three X101 positions make five source_empty entries, all retained individually below.

The current study has **three distinct manufacturer-reference peripherals, 49 individually numbered contacts, three separate PE/shield marks, eight dotted function guesses and 44 entries with no selected route**. The 44 comprise 41 numbered contacts and three shields. Source `n.a.` occurs at X1.15, X1.17, X101.3, X101.4 and X101.8; these are `source_empty`, with no electrical NC declaration. OPEN means no SmoothieBox route selected; it does not mean an electrically open circuit, unused contact or source NC.

### Source boundaries

- [FabLab Winti community machine page](https://www.profs.ch/flwiki/Portalfr%C3%A4se_Stepcraft_840) identifies the local 840 router but supplies no installation-specific connector schedule. The local generation, controller, spindle and option fitment remain unknown.
- [STEPCRAFT SC2 English Operating Instructions v5.1](https://www.stepcraft-systems.com/images/SC-Service/Anleitungen-EN/EN-Operating-Instructions-SC2-v5-1.pdf), §6.5, printed pp.16–18, includes the 840 size and describes unit-control/optional-module schedules. These tables are manufacturer-family references, not a fitted Winti harness or board identity.
- [Current STEPCRAFT machine-parameters page](https://www.stepcraft-systems.com/en/services/maschinenparameter-en) gives a separate schedule alongside D-series parameters. X1.15, X1.17 and X2.14 differ from the v5.1 labels. The disagreement is retained; no typo, correction, changed board revision or cause is established.
- [SC2 German operating manual v4](https://www.stepcraft-systems.com/images/SC-Service/Anleitungen/DE-Betriebsanleitung-SC2-v4.pdf) remains an earlier family lead only. This study selects v5.1 labels and does not silently merge v4, the current parameter page, or the installation.

X1 is an optional 25-position LPT adapter represented as a machine-side peripheral beside SmoothieBox. Its shell style, gender and mating-face orientation are unspecified. The diagram must not promote “LPT” to an evidenced DB25 shell/gender claim. X2 is source-described Sub-D 15, and X101 is source-described optional Sub-D 9; their fitment and view remain unknown. All three contact strips preserve source order, not physical connector geometry.

### X1 · optional LPT adapter · full reviewed schedule

| Position | SC2 v5.1 label | Source direction/status | SmoothieBox study |
|---|---|---|---|
| X1.1 | Relay 1 | No I/O column | OPEN |
| X1.2 | Direction X | No I/O column | G01 DOTTED GUESS ↔ DRVX.3 |
| X1.3 | Step X | No I/O column | G02 DOTTED GUESS ↔ DRVX.1 |
| X1.4 | Direction Y | No I/O column | G03 DOTTED GUESS ↔ DRVY.3 |
| X1.5 | Step Y | No I/O column | G04 DOTTED GUESS ↔ DRVY.1 |
| X1.6 | Direction Z | No I/O column | G05 DOTTED GUESS ↔ DRVZ.3 |
| X1.7 | Step Z | No I/O column | G06 DOTTED GUESS ↔ DRVZ.1 |
| X1.8 | Direction 4th axis | No I/O column | G07 DOTTED GUESS ↔ DRVA.3; conditional on selected fourth-axis drive/binding |
| X1.9 | Step 4th axis | No I/O column | G08 DOTTED GUESS ↔ DRVA.1; conditional on selected fourth-axis drive/binding |
| X1.10 | Tool length sensor | No I/O column | OPEN |
| X1.11 | Emergency stop | No I/O column | OPEN |
| X1.12 | Reference switch X/Y/Z | No I/O column | OPEN |
| X1.13 | Reference switch 4th axis | No I/O column | OPEN |
| X1.14 | Relay 2 | No I/O column | OPEN |
| X1.15 | n.a. (In) | No I/O column; source_empty; not NC | OPEN |
| X1.16 | Relay 3 | No I/O column | OPEN |
| X1.17 | n.a. (out) | No I/O column; source_empty; not NC | OPEN |
| X1.18 | GND | No I/O column | OPEN |
| X1.19 | GND | No I/O column | OPEN |
| X1.20 | GND | No I/O column | OPEN |
| X1.21 | GND | No I/O column | OPEN |
| X1.22 | GND | No I/O column | OPEN |
| X1.23 | GND | No I/O column | OPEN |
| X1.24 | GND | No I/O column | OPEN |
| X1.25 | GND | No I/O column | OPEN |
| X1.shield | PE | Separate unnumbered shield mark | OPEN |

No X1 electrical I/O column is supplied. The annotations `(In)` and `(out)` in the two `n.a.` rows are retained as source wording; they do not qualify the driving/receiving stages of the populated contacts. The adjacent **5 V / VCC has no unambiguous numbered association**, so it is unassigned and is not counted as an additional contact. X1.18 through X1.25 are eight individually enumerated GND labels; none receives an arbitrary return pairing or a drawn bus. The PE shield is separate from each of those GND positions.

### X2 · external signals · Sub-D 15 · full reviewed schedule

| Position | SC2 v5.1 label | Source direction/status | SmoothieBox study |
|---|---|---|---|
| X2.1 | 19 V / 30 V VCC | Output | OPEN |
| X2.2 | GND | Output | OPEN |
| X2.3 | +5 V / VCC Logic | Output | OPEN |
| X2.4 | Direction 4th axis | Output | OPEN |
| X2.5 | Step 4th axis | Output | OPEN |
| X2.6 | Relay 2 | Output | OPEN |
| X2.7 | PWM | Output | OPEN |
| X2.8 | Tool length sensor | Input | OPEN |
| X2.9 | 19 V / 30 V VCC | Output | OPEN |
| X2.10 | GND | Output | OPEN |
| X2.11 | Disable | Input | OPEN |
| X2.12 | Reference switch 4th axis | Input | OPEN |
| X2.13 | Relay 1 | Output | OPEN |
| X2.14 | Relay 2 | Output | OPEN |
| X2.15 | Enclosure | Input | OPEN |
| X2.shield | PE | Separate unnumbered shield mark | OPEN |

Input/Output is retained from the unit-control table. In particular, X2.4 Direction fourth axis, X2.5 Step fourth axis and X2.7 PWM are labelled outputs. They cannot be substituted as receiving terminals for SmoothieBox outputs by a name match. X2.14 remains **Relay 2 Output** under v5.1; the current parameter-page Relay 3 label is kept in the conflict table below.

### X101 · optional fourth axis · Sub-D 9 · full reviewed schedule

| Position | SC2 v5.1 label | Source direction/status | SmoothieBox study |
|---|---|---|---|
| X101.1 | Winding 1A | No I/O column | OPEN |
| X101.2 | Winding 1B | No I/O column | OPEN |
| X101.3 | n.a. | No I/O column; source_empty; not NC | OPEN |
| X101.4 | n.a. | No I/O column; source_empty; not NC | OPEN |
| X101.5 | Reference switch 4th axis | No I/O column | OPEN |
| X101.6 | Winding 2A | No I/O column | OPEN |
| X101.7 | Winding 2B | No I/O column | OPEN |
| X101.8 | n.a. | No I/O column; source_empty; not NC | OPEN |
| X101.9 | GND | No I/O column | OPEN |
| X101.shield | PE | Separate unnumbered shield mark; printed p.18 | OPEN |

The option is described for a fourth-axis motor and reference switch. The PE line is on printed p.18. The winding labels do not provide a motor-drive electrical contract and are not STEP/DIR logic contacts. All X101 entries remain OPEN.

### Explicit source-label conflicts

| Locator | SC2 v5.1 | Separate current parameter page | Disposition |
|---|---|---|---|
| X1.15 | n.a. (In) | Enclosure | Keep v5.1 source_empty; do not infer fitted enclosure input |
| X1.17 | n.a. (out) | PWM | Keep v5.1 source_empty; do not infer fitted PWM output |
| X2.14 | Relay 2 Output | Relay 3 Output | Keep v5.1 Relay 2; cause and installed applicability unresolved |

The current web page is another manufacturer source schedule; “current” does not establish its applicability to the Winti controller. Do not claim that it corrects the manual or identifies an actual local hardware revision without further evidence.

### Eight conditional drawing hypotheses

**DOTTED VIOLET = GUESS ONLY.** A route is an axis/function hypothesis through an unqualified interface, not a direct cable, installed conductor, known receiving pin or permission to construct wiring. The X/Y/Z matches are conditional on a selected replacement-control/drive-input architecture and the fitted X1 module. The A pair additionally requires a selected fourth-axis drive/module and documented A-axis binding.

| Drawing route | SC2 v5.1 contact | SmoothieBox exterior contact | Disposition |
|---|---|---|---|
| G01 | X1.2 Direction X | DRVX.3 | Dotted function guess |
| G02 | X1.3 Step X | DRVX.1 | Dotted function guess |
| G03 | X1.4 Direction Y | DRVY.3 | Dotted function guess |
| G04 | X1.5 Step Y | DRVY.1 | Dotted function guess |
| G05 | X1.6 Direction Z | DRVZ.3 | Dotted function guess |
| G06 | X1.7 Step Z | DRVZ.1 | Dotted function guess |
| G07 | X1.8 Direction 4th axis | DRVA.3 | Dotted function guess; conditional on selected fourth-axis drive/binding |
| G08 | X1.9 Step 4th axis | DRVA.1 | Dotted function guess; conditional on selected fourth-axis drive/binding |

The detailed reason, proposed architecture and checks for every route follow. Each candidate must pass its full set independently; copying one qualified endpoint's result to another is not evidence.

#### G01 · X1.2 ↔ DRVX.3

SC2 v5.1 X1.2 is labelled Direction X; SmoothieBox exterior DRVX.3 is the X axis DIR terminal. The axis and function names justify a limited drawing hypothesis for a replacement control source feeding a qualified receiving stage. X1 has no per-contact electrical direction data, and the Winti generation, fitted controller and X1 option are unknown; this is a function match only.

DOTTED VIOLET = GUESS ONLY. Hypothesis: DRVX.3 DIR, through a yet-to-be-qualified interface, would command a confirmed receiving X1.2 stage. Electrical direction is unproved; this text does not identify X1.2 as an established input. No direct cable, fitted conductor or safe wiring is asserted.

- FIT X1.2: identify the installed STEPCRAFT generation, control-board revision and optional X1 LPT module; select the applicable source schedule. The Winti name and SC2 size-family coverage do not prove fitment.
- ENDPOINT X1.2 / DRVX.3: establish both exact endpoint identities, numbered-contact view, connector side, gender where relevant, mating orientation and measured end-to-end cable continuity. Source-order strips are not mating-face drawings.
- DIRECTION AND POWER STATES X1.2: establish driving and receiving stages at X1.2 and DRVX.3 while powered, unpowered, starting, reset, faulted and disconnected; reject any output-to-output connection, backfeed or uncontrolled state. X1 has no per-contact I/O column.
- VOLTAGE AND CURRENT X1.2 / DRVX.3: qualify absolute voltage limits, logic thresholds, source/sink currents, input loading and all power-supply states at both exact endpoints.
- TOPOLOGY, POLARITY AND ISOLATION X1.2 / DRVX.3: identify push-pull, open-collector/open-drain or optoisolated stages, active polarity, buffering, level conversion and required isolation; select and document a supported interface instead of assuming a direct wire.
- TIMING X1.2: qualify the paired STEP pulse width, active edge, maximum rate and DIR setup/hold timing for the selected X axis receiving drive; check startup and fault transitions at both X1.2 and DRVX.3.
- RETURN AND BONDING X1.2 / DRVX.3: independently identify the valid reference and return-current path, permitted bonding and isolation for this signal. No X1 GND number is assigned; repeated GND labels prove neither continuity nor a dedicated pair, and PE must not be treated as circuit GND.
- RESET, FAULT AND SAFETY X1.2: establish deterministic reset, disconnection, power-loss and fault behaviour, including the separate enable/inhibit, emergency-stop, spindle and enclosure design. A dotted STEP/DIR candidate supplies no safety function.
- CONTROL-SOURCE CONTENTION X1.2: select one authoritative motion-control source and prevent contention or backfeed from USB, an existing host, another controller or an option module. Document the replacement/coexistence boundary before physical integration.
- AXIS BINDING X1.2: verify the selected X drive uses the paired X1.2 Direction / X1.3 Step positions and that DRVX.3 is assigned to that same physical axis; validate the whole pair before enabling motion.

#### G02 · X1.3 ↔ DRVX.1

SC2 v5.1 X1.3 is labelled Step X; SmoothieBox exterior DRVX.1 is the X axis STEP terminal. The axis and function names justify a limited drawing hypothesis for a replacement control source feeding a qualified receiving stage. X1 has no per-contact electrical direction data, and the Winti generation, fitted controller and X1 option are unknown; this is a function match only.

DOTTED VIOLET = GUESS ONLY. Hypothesis: DRVX.1 STEP, through a yet-to-be-qualified interface, would command a confirmed receiving X1.3 stage. Electrical direction is unproved; this text does not identify X1.3 as an established input. No direct cable, fitted conductor or safe wiring is asserted.

- FIT X1.3: identify the installed STEPCRAFT generation, control-board revision and optional X1 LPT module; select the applicable source schedule. The Winti name and SC2 size-family coverage do not prove fitment.
- ENDPOINT X1.3 / DRVX.1: establish both exact endpoint identities, numbered-contact view, connector side, gender where relevant, mating orientation and measured end-to-end cable continuity. Source-order strips are not mating-face drawings.
- DIRECTION AND POWER STATES X1.3: establish driving and receiving stages at X1.3 and DRVX.1 while powered, unpowered, starting, reset, faulted and disconnected; reject any output-to-output connection, backfeed or uncontrolled state. X1 has no per-contact I/O column.
- VOLTAGE AND CURRENT X1.3 / DRVX.1: qualify absolute voltage limits, logic thresholds, source/sink currents, input loading and all power-supply states at both exact endpoints.
- TOPOLOGY, POLARITY AND ISOLATION X1.3 / DRVX.1: identify push-pull, open-collector/open-drain or optoisolated stages, active polarity, buffering, level conversion and required isolation; select and document a supported interface instead of assuming a direct wire.
- TIMING X1.3: qualify the paired STEP pulse width, active edge, maximum rate and DIR setup/hold timing for the selected X axis receiving drive; check startup and fault transitions at both X1.3 and DRVX.1.
- RETURN AND BONDING X1.3 / DRVX.1: independently identify the valid reference and return-current path, permitted bonding and isolation for this signal. No X1 GND number is assigned; repeated GND labels prove neither continuity nor a dedicated pair, and PE must not be treated as circuit GND.
- RESET, FAULT AND SAFETY X1.3: establish deterministic reset, disconnection, power-loss and fault behaviour, including the separate enable/inhibit, emergency-stop, spindle and enclosure design. A dotted STEP/DIR candidate supplies no safety function.
- CONTROL-SOURCE CONTENTION X1.3: select one authoritative motion-control source and prevent contention or backfeed from USB, an existing host, another controller or an option module. Document the replacement/coexistence boundary before physical integration.
- AXIS BINDING X1.3: verify the selected X drive uses the paired X1.2 Direction / X1.3 Step positions and that DRVX.1 is assigned to that same physical axis; validate the whole pair before enabling motion.

#### G03 · X1.4 ↔ DRVY.3

SC2 v5.1 X1.4 is labelled Direction Y; SmoothieBox exterior DRVY.3 is the Y axis DIR terminal. The axis and function names justify a limited drawing hypothesis for a replacement control source feeding a qualified receiving stage. X1 has no per-contact electrical direction data, and the Winti generation, fitted controller and X1 option are unknown; this is a function match only.

DOTTED VIOLET = GUESS ONLY. Hypothesis: DRVY.3 DIR, through a yet-to-be-qualified interface, would command a confirmed receiving X1.4 stage. Electrical direction is unproved; this text does not identify X1.4 as an established input. No direct cable, fitted conductor or safe wiring is asserted.

- FIT X1.4: identify the installed STEPCRAFT generation, control-board revision and optional X1 LPT module; select the applicable source schedule. The Winti name and SC2 size-family coverage do not prove fitment.
- ENDPOINT X1.4 / DRVY.3: establish both exact endpoint identities, numbered-contact view, connector side, gender where relevant, mating orientation and measured end-to-end cable continuity. Source-order strips are not mating-face drawings.
- DIRECTION AND POWER STATES X1.4: establish driving and receiving stages at X1.4 and DRVY.3 while powered, unpowered, starting, reset, faulted and disconnected; reject any output-to-output connection, backfeed or uncontrolled state. X1 has no per-contact I/O column.
- VOLTAGE AND CURRENT X1.4 / DRVY.3: qualify absolute voltage limits, logic thresholds, source/sink currents, input loading and all power-supply states at both exact endpoints.
- TOPOLOGY, POLARITY AND ISOLATION X1.4 / DRVY.3: identify push-pull, open-collector/open-drain or optoisolated stages, active polarity, buffering, level conversion and required isolation; select and document a supported interface instead of assuming a direct wire.
- TIMING X1.4: qualify the paired STEP pulse width, active edge, maximum rate and DIR setup/hold timing for the selected Y axis receiving drive; check startup and fault transitions at both X1.4 and DRVY.3.
- RETURN AND BONDING X1.4 / DRVY.3: independently identify the valid reference and return-current path, permitted bonding and isolation for this signal. No X1 GND number is assigned; repeated GND labels prove neither continuity nor a dedicated pair, and PE must not be treated as circuit GND.
- RESET, FAULT AND SAFETY X1.4: establish deterministic reset, disconnection, power-loss and fault behaviour, including the separate enable/inhibit, emergency-stop, spindle and enclosure design. A dotted STEP/DIR candidate supplies no safety function.
- CONTROL-SOURCE CONTENTION X1.4: select one authoritative motion-control source and prevent contention or backfeed from USB, an existing host, another controller or an option module. Document the replacement/coexistence boundary before physical integration.
- AXIS BINDING X1.4: verify the selected Y drive uses the paired X1.4 Direction / X1.5 Step positions and that DRVY.3 is assigned to that same physical axis; validate the whole pair before enabling motion.

#### G04 · X1.5 ↔ DRVY.1

SC2 v5.1 X1.5 is labelled Step Y; SmoothieBox exterior DRVY.1 is the Y axis STEP terminal. The axis and function names justify a limited drawing hypothesis for a replacement control source feeding a qualified receiving stage. X1 has no per-contact electrical direction data, and the Winti generation, fitted controller and X1 option are unknown; this is a function match only.

DOTTED VIOLET = GUESS ONLY. Hypothesis: DRVY.1 STEP, through a yet-to-be-qualified interface, would command a confirmed receiving X1.5 stage. Electrical direction is unproved; this text does not identify X1.5 as an established input. No direct cable, fitted conductor or safe wiring is asserted.

- FIT X1.5: identify the installed STEPCRAFT generation, control-board revision and optional X1 LPT module; select the applicable source schedule. The Winti name and SC2 size-family coverage do not prove fitment.
- ENDPOINT X1.5 / DRVY.1: establish both exact endpoint identities, numbered-contact view, connector side, gender where relevant, mating orientation and measured end-to-end cable continuity. Source-order strips are not mating-face drawings.
- DIRECTION AND POWER STATES X1.5: establish driving and receiving stages at X1.5 and DRVY.1 while powered, unpowered, starting, reset, faulted and disconnected; reject any output-to-output connection, backfeed or uncontrolled state. X1 has no per-contact I/O column.
- VOLTAGE AND CURRENT X1.5 / DRVY.1: qualify absolute voltage limits, logic thresholds, source/sink currents, input loading and all power-supply states at both exact endpoints.
- TOPOLOGY, POLARITY AND ISOLATION X1.5 / DRVY.1: identify push-pull, open-collector/open-drain or optoisolated stages, active polarity, buffering, level conversion and required isolation; select and document a supported interface instead of assuming a direct wire.
- TIMING X1.5: qualify the paired STEP pulse width, active edge, maximum rate and DIR setup/hold timing for the selected Y axis receiving drive; check startup and fault transitions at both X1.5 and DRVY.1.
- RETURN AND BONDING X1.5 / DRVY.1: independently identify the valid reference and return-current path, permitted bonding and isolation for this signal. No X1 GND number is assigned; repeated GND labels prove neither continuity nor a dedicated pair, and PE must not be treated as circuit GND.
- RESET, FAULT AND SAFETY X1.5: establish deterministic reset, disconnection, power-loss and fault behaviour, including the separate enable/inhibit, emergency-stop, spindle and enclosure design. A dotted STEP/DIR candidate supplies no safety function.
- CONTROL-SOURCE CONTENTION X1.5: select one authoritative motion-control source and prevent contention or backfeed from USB, an existing host, another controller or an option module. Document the replacement/coexistence boundary before physical integration.
- AXIS BINDING X1.5: verify the selected Y drive uses the paired X1.4 Direction / X1.5 Step positions and that DRVY.1 is assigned to that same physical axis; validate the whole pair before enabling motion.

#### G05 · X1.6 ↔ DRVZ.3

SC2 v5.1 X1.6 is labelled Direction Z; SmoothieBox exterior DRVZ.3 is the Z axis DIR terminal. The axis and function names justify a limited drawing hypothesis for a replacement control source feeding a qualified receiving stage. X1 has no per-contact electrical direction data, and the Winti generation, fitted controller and X1 option are unknown; this is a function match only.

DOTTED VIOLET = GUESS ONLY. Hypothesis: DRVZ.3 DIR, through a yet-to-be-qualified interface, would command a confirmed receiving X1.6 stage. Electrical direction is unproved; this text does not identify X1.6 as an established input. No direct cable, fitted conductor or safe wiring is asserted.

- FIT X1.6: identify the installed STEPCRAFT generation, control-board revision and optional X1 LPT module; select the applicable source schedule. The Winti name and SC2 size-family coverage do not prove fitment.
- ENDPOINT X1.6 / DRVZ.3: establish both exact endpoint identities, numbered-contact view, connector side, gender where relevant, mating orientation and measured end-to-end cable continuity. Source-order strips are not mating-face drawings.
- DIRECTION AND POWER STATES X1.6: establish driving and receiving stages at X1.6 and DRVZ.3 while powered, unpowered, starting, reset, faulted and disconnected; reject any output-to-output connection, backfeed or uncontrolled state. X1 has no per-contact I/O column.
- VOLTAGE AND CURRENT X1.6 / DRVZ.3: qualify absolute voltage limits, logic thresholds, source/sink currents, input loading and all power-supply states at both exact endpoints.
- TOPOLOGY, POLARITY AND ISOLATION X1.6 / DRVZ.3: identify push-pull, open-collector/open-drain or optoisolated stages, active polarity, buffering, level conversion and required isolation; select and document a supported interface instead of assuming a direct wire.
- TIMING X1.6: qualify the paired STEP pulse width, active edge, maximum rate and DIR setup/hold timing for the selected Z axis receiving drive; check startup and fault transitions at both X1.6 and DRVZ.3.
- RETURN AND BONDING X1.6 / DRVZ.3: independently identify the valid reference and return-current path, permitted bonding and isolation for this signal. No X1 GND number is assigned; repeated GND labels prove neither continuity nor a dedicated pair, and PE must not be treated as circuit GND.
- RESET, FAULT AND SAFETY X1.6: establish deterministic reset, disconnection, power-loss and fault behaviour, including the separate enable/inhibit, emergency-stop, spindle and enclosure design. A dotted STEP/DIR candidate supplies no safety function.
- CONTROL-SOURCE CONTENTION X1.6: select one authoritative motion-control source and prevent contention or backfeed from USB, an existing host, another controller or an option module. Document the replacement/coexistence boundary before physical integration.
- AXIS BINDING X1.6: verify the selected Z drive uses the paired X1.6 Direction / X1.7 Step positions and that DRVZ.3 is assigned to that same physical axis; validate the whole pair before enabling motion.

#### G06 · X1.7 ↔ DRVZ.1

SC2 v5.1 X1.7 is labelled Step Z; SmoothieBox exterior DRVZ.1 is the Z axis STEP terminal. The axis and function names justify a limited drawing hypothesis for a replacement control source feeding a qualified receiving stage. X1 has no per-contact electrical direction data, and the Winti generation, fitted controller and X1 option are unknown; this is a function match only.

DOTTED VIOLET = GUESS ONLY. Hypothesis: DRVZ.1 STEP, through a yet-to-be-qualified interface, would command a confirmed receiving X1.7 stage. Electrical direction is unproved; this text does not identify X1.7 as an established input. No direct cable, fitted conductor or safe wiring is asserted.

- FIT X1.7: identify the installed STEPCRAFT generation, control-board revision and optional X1 LPT module; select the applicable source schedule. The Winti name and SC2 size-family coverage do not prove fitment.
- ENDPOINT X1.7 / DRVZ.1: establish both exact endpoint identities, numbered-contact view, connector side, gender where relevant, mating orientation and measured end-to-end cable continuity. Source-order strips are not mating-face drawings.
- DIRECTION AND POWER STATES X1.7: establish driving and receiving stages at X1.7 and DRVZ.1 while powered, unpowered, starting, reset, faulted and disconnected; reject any output-to-output connection, backfeed or uncontrolled state. X1 has no per-contact I/O column.
- VOLTAGE AND CURRENT X1.7 / DRVZ.1: qualify absolute voltage limits, logic thresholds, source/sink currents, input loading and all power-supply states at both exact endpoints.
- TOPOLOGY, POLARITY AND ISOLATION X1.7 / DRVZ.1: identify push-pull, open-collector/open-drain or optoisolated stages, active polarity, buffering, level conversion and required isolation; select and document a supported interface instead of assuming a direct wire.
- TIMING X1.7: qualify the paired STEP pulse width, active edge, maximum rate and DIR setup/hold timing for the selected Z axis receiving drive; check startup and fault transitions at both X1.7 and DRVZ.1.
- RETURN AND BONDING X1.7 / DRVZ.1: independently identify the valid reference and return-current path, permitted bonding and isolation for this signal. No X1 GND number is assigned; repeated GND labels prove neither continuity nor a dedicated pair, and PE must not be treated as circuit GND.
- RESET, FAULT AND SAFETY X1.7: establish deterministic reset, disconnection, power-loss and fault behaviour, including the separate enable/inhibit, emergency-stop, spindle and enclosure design. A dotted STEP/DIR candidate supplies no safety function.
- CONTROL-SOURCE CONTENTION X1.7: select one authoritative motion-control source and prevent contention or backfeed from USB, an existing host, another controller or an option module. Document the replacement/coexistence boundary before physical integration.
- AXIS BINDING X1.7: verify the selected Z drive uses the paired X1.6 Direction / X1.7 Step positions and that DRVZ.1 is assigned to that same physical axis; validate the whole pair before enabling motion.

#### G07 · X1.8 ↔ DRVA.3

SC2 v5.1 X1.8 is labelled Direction 4th axis; SmoothieBox exterior DRVA.3 is the selected A/fourth axis DIR terminal. The axis and function names justify a limited drawing hypothesis for a replacement control source feeding a qualified receiving stage. X1 has no per-contact electrical direction data, and the Winti generation, fitted controller and X1 option are unknown; this is a function match only. Retain this candidate only after choosing and documenting the optional fourth-axis drive path and its A-axis binding; the local machine is not shown to have a fourth axis.

DOTTED VIOLET = GUESS ONLY. Hypothesis: DRVA.3 DIR, through a yet-to-be-qualified interface, would command a confirmed receiving X1.8 stage. Electrical direction is unproved; this text does not identify X1.8 as an established input. No direct cable, fitted conductor or safe wiring is asserted. CONDITIONAL FOURTH AXIS: select one complete STEP/DIR pair and document its drive/module and A-axis binding before retaining either candidate.

- FIT X1.8: identify the installed STEPCRAFT generation, control-board revision and optional X1 LPT module; select the applicable source schedule. The Winti name and SC2 size-family coverage do not prove fitment.
- ENDPOINT X1.8 / DRVA.3: establish both exact endpoint identities, numbered-contact view, connector side, gender where relevant, mating orientation and measured end-to-end cable continuity. Source-order strips are not mating-face drawings.
- DIRECTION AND POWER STATES X1.8: establish driving and receiving stages at X1.8 and DRVA.3 while powered, unpowered, starting, reset, faulted and disconnected; reject any output-to-output connection, backfeed or uncontrolled state. X1 has no per-contact I/O column.
- VOLTAGE AND CURRENT X1.8 / DRVA.3: qualify absolute voltage limits, logic thresholds, source/sink currents, input loading and all power-supply states at both exact endpoints.
- TOPOLOGY, POLARITY AND ISOLATION X1.8 / DRVA.3: identify push-pull, open-collector/open-drain or optoisolated stages, active polarity, buffering, level conversion and required isolation; select and document a supported interface instead of assuming a direct wire.
- TIMING X1.8: qualify the paired STEP pulse width, active edge, maximum rate and DIR setup/hold timing for the selected selected A/fourth axis receiving drive; check startup and fault transitions at both X1.8 and DRVA.3.
- RETURN AND BONDING X1.8 / DRVA.3: independently identify the valid reference and return-current path, permitted bonding and isolation for this signal. No X1 GND number is assigned; repeated GND labels prove neither continuity nor a dedicated pair, and PE must not be treated as circuit GND.
- RESET, FAULT AND SAFETY X1.8: establish deterministic reset, disconnection, power-loss and fault behaviour, including the separate enable/inhibit, emergency-stop, spindle and enclosure design. A dotted STEP/DIR candidate supplies no safety function.
- CONTROL-SOURCE CONTENTION X1.8: select one authoritative motion-control source and prevent contention or backfeed from USB, an existing host, another controller or an option module. Document the replacement/coexistence boundary before physical integration.
- OPTIONAL A AXIS X1.8: confirm the fitted fourth-axis drive/module, axis binding, paired X1.8 Direction / X1.9 Step path and the selected architecture; X2.4/X2.5 outputs and X101 winding contacts are not substitutes or additional fan-outs.

#### G08 · X1.9 ↔ DRVA.1

SC2 v5.1 X1.9 is labelled Step 4th axis; SmoothieBox exterior DRVA.1 is the selected A/fourth axis STEP terminal. The axis and function names justify a limited drawing hypothesis for a replacement control source feeding a qualified receiving stage. X1 has no per-contact electrical direction data, and the Winti generation, fitted controller and X1 option are unknown; this is a function match only. Retain this candidate only after choosing and documenting the optional fourth-axis drive path and its A-axis binding; the local machine is not shown to have a fourth axis.

DOTTED VIOLET = GUESS ONLY. Hypothesis: DRVA.1 STEP, through a yet-to-be-qualified interface, would command a confirmed receiving X1.9 stage. Electrical direction is unproved; this text does not identify X1.9 as an established input. No direct cable, fitted conductor or safe wiring is asserted. CONDITIONAL FOURTH AXIS: select one complete STEP/DIR pair and document its drive/module and A-axis binding before retaining either candidate.

- FIT X1.9: identify the installed STEPCRAFT generation, control-board revision and optional X1 LPT module; select the applicable source schedule. The Winti name and SC2 size-family coverage do not prove fitment.
- ENDPOINT X1.9 / DRVA.1: establish both exact endpoint identities, numbered-contact view, connector side, gender where relevant, mating orientation and measured end-to-end cable continuity. Source-order strips are not mating-face drawings.
- DIRECTION AND POWER STATES X1.9: establish driving and receiving stages at X1.9 and DRVA.1 while powered, unpowered, starting, reset, faulted and disconnected; reject any output-to-output connection, backfeed or uncontrolled state. X1 has no per-contact I/O column.
- VOLTAGE AND CURRENT X1.9 / DRVA.1: qualify absolute voltage limits, logic thresholds, source/sink currents, input loading and all power-supply states at both exact endpoints.
- TOPOLOGY, POLARITY AND ISOLATION X1.9 / DRVA.1: identify push-pull, open-collector/open-drain or optoisolated stages, active polarity, buffering, level conversion and required isolation; select and document a supported interface instead of assuming a direct wire.
- TIMING X1.9: qualify the paired STEP pulse width, active edge, maximum rate and DIR setup/hold timing for the selected selected A/fourth axis receiving drive; check startup and fault transitions at both X1.9 and DRVA.1.
- RETURN AND BONDING X1.9 / DRVA.1: independently identify the valid reference and return-current path, permitted bonding and isolation for this signal. No X1 GND number is assigned; repeated GND labels prove neither continuity nor a dedicated pair, and PE must not be treated as circuit GND.
- RESET, FAULT AND SAFETY X1.9: establish deterministic reset, disconnection, power-loss and fault behaviour, including the separate enable/inhibit, emergency-stop, spindle and enclosure design. A dotted STEP/DIR candidate supplies no safety function.
- CONTROL-SOURCE CONTENTION X1.9: select one authoritative motion-control source and prevent contention or backfeed from USB, an existing host, another controller or an option module. Document the replacement/coexistence boundary before physical integration.
- OPTIONAL A AXIS X1.9: confirm the fitted fourth-axis drive/module, axis binding, paired X1.8 Direction / X1.9 Step path and the selected architecture; X2.4/X2.5 outputs and X101 winding contacts are not substitutes or additional fan-outs.

### Why the other entries stay OPEN

- X1.1, X1.14 and X1.16 are relay labels with unproved direction, topology, polarity, ratings, purpose and return; SSR control hypotheses are not selected.
- X1.10 is a tool-length label without a proven receiving/sending stage, sensor circuit or probe return; no PROBE.4 mapping is selected.
- X1.11 emergency stop, X1.13 fourth-axis reference, X2.8 tool length, X2.11 Disable, X2.12 fourth-axis reference, X2.15 Enclosure and X101.5 reference are control/safety-related labels with unresolved circuit and installation details; a named function establishes no safety interface.
- X1.12 is one combined X/Y/Z reference-switch label. It cannot be fanned out into separate SmoothieBox min/max signals without a disclosed and qualified combining/decoding architecture.
- X1.15, X1.17, X101.3, X101.4 and X101.8 preserve source_empty status and cannot be routed as an inferred function or a source NC contact.
- Every X1 GND, X2 GND, X101 GND and all three PE shields remain OPEN. Neither common reference continuity, dedicated signal-return pairs nor a permitted PE/circuit-GND bond is established.
- Every X2 entry stays OPEN. Output-to-output motion/PWM substitutions, named power-rail matches and unsupported input substitutions are rejected.
- Every X101 entry stays OPEN. Motor-winding-to-logic paths, unspecified return paths and an unproved fourth-axis architecture are rejected.
- No spindle, enable/inhibit, machine supply or safety circuit is completed by the eight hypotheses. Missing circuit parts are explicit open boundaries.

### Evidence still needed

Identify the actual machine generation, control-board revision, X1 option, fourth-axis fitment and spindle; capture connector identifiers and mating views; measure the proposed harness and references; establish endpoint directions and powered/unpowered behaviour; qualify voltages, currents, polarity, topology, timing, returns, bonding, isolation and safety states; select one motion-control source and prevent contention. Until then, none of this study qualifies physical wiring.
