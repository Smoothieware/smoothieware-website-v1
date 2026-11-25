---
layout: default
title: "Parallel-port bench test jig (v22)"
permalink: /extensions/parallel-port-breakout
---

# Parallel-port bench test jig (v22)

The selected v22 design is a **parallel-port bench test jig**, not a machine interface ready for installation. Its PCB explicitly states **“NOT FOR HOST OR MACHINE CONNECTION”** and **“FUNCTIONAL ISOLATION ONLY”**. J4 is marked **“DUMMY DB25 ONLY – FOOTPRINT PROVISIONAL”**. Do not connect this revision to Smoothieboard V2 Prime or a machine. The retained circuit explores twelve output and five return channels using ISO7760 digital isolators; these are capacitive isolators, not optical couplers.

## Revision and availability

This guide selects **v22**, matching the revision selected by the retained abstract-diagram inventory. This is a design candidate; availability and operating ratings are unverified. The selected revision and contact map govern this guide; older specifications may describe another circuit.

The selected v22 source package retains schematic title-block revision **v21**. The package number does not rename the schematic or establish a released hardware revision.

## Interfaces, power and operating limits

J1 carries DB25 outputs2–8 on host contacts 3–9. J2 carries DB25 outputs9/1/14/16/17 on contacts 3–7 and returns DB25 inputs10/11 on contacts 8/9. J3 returns DB25 inputs12/13/15 on contacts 3/4/5. Host1/2 are explicitly unconnected on these sockets; power comes from J6 host 5 V and J5 field 5 V, each positive/ground. J7/J8 are field/host enable contacts. DB25 pins18–25 and mounting contacts are field ground in selected CAD. Never casually join field and host returns across the barrier.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the source contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Green: Signal — use the printed function label.
- Near-black: Circuit ground.
- Grey: Not routed in this board revision.
- Cyan: Selected supply — check the jumper or rail-selection instructions.
- Dark grey: Other source-labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

Start with the overview, then use all focused sheets for exact contacts, controls and links. Source footprint defaults do not prove assembled continuity.

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-overview" src="/images/extensions/parallel-port-breakout/guides/reader-compact-overview.png" title="Parallel-port TEST JIG — overview" alt="Parallel-port TEST JIG — overview for parallel-port-breakout v22" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-j1-1-5" src="/images/extensions/parallel-port-breakout/guides/reader-compact-j1-1-5-central-pills.png" title="J1 · Test host-side header — j1 1 5" alt="J1 · Test host-side header — j1 1 5 for parallel-port-breakout v22" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-j1-6-10" src="/images/extensions/parallel-port-breakout/guides/reader-compact-j1-6-10-central-pills.png" title="J1 · Test host-side header — j1 6 10" alt="J1 · Test host-side header — j1 6 10 for parallel-port-breakout v22" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-j2-1-5" src="/images/extensions/parallel-port-breakout/guides/reader-compact-j2-1-5-central-pills.png" title="J2 · Test host-side header — j2 1 5" alt="J2 · Test host-side header — j2 1 5 for parallel-port-breakout v22" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-j2-6-10" src="/images/extensions/parallel-port-breakout/guides/reader-compact-j2-6-10-central-pills.png" title="J2 · Test host-side header — j2 6 10" alt="J2 · Test host-side header — j2 6 10 for parallel-port-breakout v22" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-j3-1-5" src="/images/extensions/parallel-port-breakout/guides/reader-compact-j3-1-5-central-pills.png" title="J3 · Test host-side header — j3 1 5" alt="J3 · Test host-side header — j3 1 5 for parallel-port-breakout v22" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-j3-6-10" src="/images/extensions/parallel-port-breakout/guides/reader-compact-j3-6-10-central-pills.png" title="J3 · Test host-side header — j3 6 10" alt="J3 · Test host-side header — j3 6 10 for parallel-port-breakout v22" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-db25-0-4" src="/images/extensions/parallel-port-breakout/guides/reader-compact-db25-0-4-central-pills.png" title="J4 · Dummy DB25 test — db25 0 4" alt="J4 · Dummy DB25 test — db25 0 4 for parallel-port-breakout v22" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-db25-5-9" src="/images/extensions/parallel-port-breakout/guides/reader-compact-db25-5-9-central-pills.png" title="J4 · Dummy DB25 test — db25 5 9" alt="J4 · Dummy DB25 test — db25 5 9 for parallel-port-breakout v22" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-db25-10-14" src="/images/extensions/parallel-port-breakout/guides/reader-compact-db25-10-14-central-pills.png" title="J4 · Dummy DB25 test — db25 10 14" alt="J4 · Dummy DB25 test — db25 10 14 for parallel-port-breakout v22" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-db25-15-19" src="/images/extensions/parallel-port-breakout/guides/reader-compact-db25-15-19-central-pills.png" title="J4 · Dummy DB25 test — db25 15 19" alt="J4 · Dummy DB25 test — db25 15 19 for parallel-port-breakout v22" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-db25-20-24" src="/images/extensions/parallel-port-breakout/guides/reader-compact-db25-20-24-central-pills.png" title="J4 · Dummy DB25 test — db25 20 24" alt="J4 · Dummy DB25 test — db25 20 24 for parallel-port-breakout v22" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-db25-25-25" src="/images/extensions/parallel-port-breakout/guides/reader-compact-db25-25-25-central-pills.png" title="J4 · Dummy DB25 test — db25 25 25" alt="J4 · Dummy DB25 test — db25 25 25 for parallel-port-breakout v22" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-field-power-1-2" src="/images/extensions/parallel-port-breakout/guides/reader-compact-field-power-1-2-central-pills.png" title="J5 · Field bench inlet — field power 1 2" alt="J5 · Field bench inlet — field power 1 2 for parallel-port-breakout v22" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-host-power-1-2" src="/images/extensions/parallel-port-breakout/guides/reader-compact-host-power-1-2-central-pills.png" title="J6 · Host bench inlet — host power 1 2" alt="J6 · Host bench inlet — host power 1 2 for parallel-port-breakout v22" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-field-enable-1-2" src="/images/extensions/parallel-port-breakout/guides/reader-compact-field-enable-1-2-central-pills.png" title="J7 · Field outputs enable — field enable 1 2" alt="J7 · Field outputs enable — field enable 1 2 for parallel-port-breakout v22" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-host-enable-1-2" src="/images/extensions/parallel-port-breakout/guides/reader-compact-host-enable-1-2-central-pills.png" title="J8 · Host returns enable — host enable 1 2" alt="J8 · Host returns enable — host enable 1 2 for parallel-port-breakout v22" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-restriction" src="/images/extensions/parallel-port-breakout/guides/reader-compact-restriction.png" title="Revision restriction — restriction" alt="Revision restriction — restriction for parallel-port-breakout v22" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-forward" src="/images/extensions/parallel-port-breakout/guides/reader-compact-forward.png" title="Forward signal isolation — forward" alt="Forward signal isolation — forward for parallel-port-breakout v22" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-returns" src="/images/extensions/parallel-port-breakout/guides/reader-compact-returns.png" title="Five return signals — returns" alt="Five return signals — returns for parallel-port-breakout v22" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-conditioning" src="/images/extensions/parallel-port-breakout/guides/reader-compact-conditioning.png" title="Signal conditioning — conditioning" alt="Signal conditioning — conditioning for parallel-port-breakout v22" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-enable" src="/images/extensions/parallel-port-breakout/guides/reader-compact-enable.png" title="Enable default and control — enable" alt="Enable default and control — enable for parallel-port-breakout v22" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-power" src="/images/extensions/parallel-port-breakout/guides/reader-compact-power.png" title="Separate power domains — power" alt="Separate power domains — power for parallel-port-breakout v22" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-tests1" src="/images/extensions/parallel-port-breakout/guides/reader-compact-tests1.png" title="Supply and enable tests — tests1" alt="Supply and enable tests — tests1 for parallel-port-breakout v22" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-tests6" src="/images/extensions/parallel-port-breakout/guides/reader-compact-tests6.png" title="Supply and enable tests — tests6" alt="Supply and enable tests — tests6 for parallel-port-breakout v22" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-mounts" src="/images/extensions/parallel-port-breakout/guides/reader-compact-mounts.png" title="Mounting holes — mounts" alt="Mounting holes — mounts for parallel-port-breakout v22" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

**Reference status:** the selected-revision annotated sheets above have passed source review. Read the overview and all focused sheets together. Practical wiring and actual desktop/narrow viewer acceptance are separate checks; use the connection section for the current installation limits.

The following is the exact selected PCB’s intended pad-to-net schedule. Net labels identify circuit nodes; they are not wire colours or measured voltage/current ratings. Explicit unconnected contacts must remain unused. Duplicate physical pads with the same contact number represent alternative lands, not extra channels. Selector bridge/default population must be confirmed from the selected assembly record before alteration.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Member / reference | Label / control | Kind | Numbered contacts / assigned nodes |
|---|---|---|---|
| parallel-port-breakout / J1 | SHF-105-01-L-D-TH-LC | Connector | 1: unconnected-(J1-Pad1); 2: unconnected-(J1-Pad2); 3: /h_db02; 4: /h_db03; 5: /h_db04; 6: /h_db05; 7: /h_db06; 8: /h_db07; 9: /h_db08; 10: /host_gnd |
| parallel-port-breakout / J2 | SHF-105-01-L-D-TH-LC | Connector | 1: unconnected-(J2-Pad1); 2: unconnected-(J2-Pad2); 3: /h_db09; 4: /h_db01; 5: /h_db14; 6: /h_db16; 7: /h_db17; 8: /h_db10; 9: /h_db11; 10: /host_gnd |
| parallel-port-breakout / J3 | SHF-105-01-L-D-TH-LC | Connector | 1: unconnected-(J3-Pad1); 2: unconnected-(J3-Pad2); 3: /h_db12; 4: /h_db13; 5: /h_db15; 6: unconnected-(J3-Pad6); 7: unconnected-(J3-Pad7); 8: unconnected-(J3-Pad8); 9: unconnected-(J3-Pad9); 10: /host_gnd |
| parallel-port-breakout / J4 | 5747846-6 | Connector | 0: /field_gnd; 1: /f_db01; 2: /f_db02; 3: /f_db03; 4: /f_db04; 5: /f_db05; 6: /f_db06; 7: /f_db07; 8: /f_db08; 9: /f_db09; 10: /f_db10; 11: /f_db11; 12: /f_db12; 13: /f_db13; 14: /f_db14; 15: /f_db15; 16: /f_db16; 17: /f_db17; 18: /field_gnd; 19: /field_gnd; 20: /field_gnd; 21: /field_gnd; 22: /field_gnd; 23: /field_gnd; 24: /field_gnd; 25: /field_gnd |
| parallel-port-breakout / J5 | B2B-XH-A(LF)(SN) | Connector | 1: /field_5v_input; 2: /field_gnd |
| parallel-port-breakout / J6 | B2B-XH-A(LF)(SN) | Connector | 1: /host_5v_input; 2: /host_gnd |
| parallel-port-breakout / J7 | TSW-102-07-G-S | Connector | 1: /field_5v; 2: /field_enable_contact |
| parallel-port-breakout / J8 | TSW-102-07-G-S | Connector | 1: /host_3v3; 2: /host_enable_contact |
| parallel-port-breakout / TP1 | test_pad | Observation only | 1: /host_gnd |
| parallel-port-breakout / TP2 | test_pad | Observation only | 1: /host_3v3 |
| parallel-port-breakout / TP3 | test_pad | Observation only | 1: /field_gnd |
| parallel-port-breakout / TP4 | test_pad | Observation only | 1: /field_5v |
| parallel-port-breakout / TP5 | test_pad | Observation only | 1: /host_5v |
| parallel-port-breakout / TP6 | test_pad | Observation only | 1: /field_output_oe_n |
| parallel-port-breakout / TP7 | test_pad | Observation only | 1: /host_return_oe_n |
| parallel-port-breakout / TP8 | test_pad | Observation only | 1: /field_test_enable |
| parallel-port-breakout / TP9 | test_pad | Observation only | 1: /host_test_enable |

</div>

</details>



## Practical connection to Smoothieboard V2 Prime

**No operational Prime-to-machine wiring diagram is provided for v22:** drawing one would contradict the selected PCB’s explicit connection prohibition. The bench-jig reference can explain its connectors and circuit, but cannot qualify a provisional connector footprint or turn this revision into an installable interface.

The source labels J5 and J6 as separate field-side and host-side bench supply inputs, each marked 5.25 V and source limit 150 mA. Those are jig instructions, not qualified operating ratings for a machine adapter. It also says to remove both test-enable shorts before changing power and prohibits a host/field ground link. This guide does not supply an energization procedure while schematic, footprint and bench-validation questions remain unresolved.

### De-energized host-ground inspection

This supplementary plan does **not** connect the board to Prime or a machine. Remove every supply, USB and host/machine cable; discharge capacitors and verify the board is de-energized before selecting resistance. A **Fluke 115** uses **COM → J6.2** and **V/Ω → TP1.1**, two native-PCB points on the same `/host_gnd` net. Do not use the current terminal, probe a live board or join host and field grounds. No numerical continuity threshold or successful hardware test is claimed.

TP1 is explicitly marked `board_only` in the selected native PCB, so its absence from the retained schematic component list is consistent with that source designation. Its contact 1 belongs to `/host_gnd`, as does J6.2; use the numbered PCB key to locate it. The source hides the TP1 reference on the silkscreen, so do not rely on finding a printed “TP1” label. Confirm that the actual board matches this revision and that the pad is accessible before probing. Leave J6.1, J5, J1/J2/J3, provisional J4 and both enable connectors J7/J8 disconnected; remove the enable shorts before any future power change as the source instructs. Disconnect meter leads after inspection. This neither tests the buffers nor qualifies the insulation barrier.

{% include _includes/extension-instruction-diagram.html id="parallel-v22-inspection-Jig-J6-key" src="/images/extensions/parallel-port-breakout/guides/unpowered-inspection/Jig-J6-key.png" title="Unpowered inspection — Jig-J6 · numbered pad key" alt="De-energized parallel v22 source inspection; Prime remains disconnected" caption="Same host-ground net only. All power, USB, host and machine cables removed; discharge and verify de-energized before resistance measurement. Not an isolation test or a Prime installation. Contact projections are not mating faces; actual hardware and viewer checks remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-v22-inspection-Jig-TP1-key" src="/images/extensions/parallel-port-breakout/guides/unpowered-inspection/Jig-TP1-key.png" title="Unpowered inspection — Jig-TP1 · numbered pad key" alt="De-energized parallel v22 source inspection; Prime remains disconnected" caption="Same host-ground net only. All power, USB, host and machine cables removed; discharge and verify de-energized before resistance measurement. Not an isolation test or a Prime installation. Contact projections are not mating faces; actual hardware and viewer checks remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-v22-inspection-external-installation" src="/images/extensions/parallel-port-breakout/guides/unpowered-inspection/unpowered-meter.png" title="Unpowered inspection — meter" alt="De-energized parallel v22 source inspection; Prime remains disconnected" caption="Same host-ground net only. All power, USB, host and machine cables removed; discharge and verify de-energized before resistance measurement. Not an isolation test or a Prime installation. Contact projections are not mating faces; actual hardware and viewer checks remain open." width=420 %}

## Smoothieware behaviour and commissioning

No runnable machine configuration applies to this selected test-jig revision. Allocating motion or limit pins would not resolve its explicit prohibition on host or machine connection. An operational adapter needs a separately identified and verified revision, complete connector and power validation, and a source-backed firmware allocation. If the required parallel-interface support is absent, email **wolf.arthur@gamil.com**.

## What remains unresolved

The selected PCB marks TP1–TP9 as board-only test pads, so their absence from the retained schematic component list is expected. Every listed test-pad net name exists in that schematic; the table records the native PCB assignments for observation only. This source consistency does not establish assembled continuity or accessible physical probe points. The provisional DB25 footprint, bench-only identity, buffer behaviour and power/enable validation remain unresolved. A future operational revision would additionally require a complete host allocation and the named machine’s DB25 contract. The board-reference drawings explain the selected source revision. A complete practical wiring recipe is still pending; source-link availability and desktop/narrow page usability also remain to be verified.

## Sources and revision notes

- [Selected v22 parallel-port-breakout PCB](https://github.com/arthurwolf/extension-boards/blob/main/src/parallel-port-breakout/attempt/versions/v22/parallel-port-breakout.kicad_pcb)
- [Specification and retained limitations](https://github.com/arthurwolf/extension-boards/blob/main/src/parallel-port-breakout/specs.md)
- [Architecture and source decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/parallel-port-breakout/design.md)
- [Component review](https://github.com/arthurwolf/extension-boards/blob/main/src/parallel-port-breakout/component-review.md)
- [V2 configuration example](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/ConfigSamples/config-3d.ini)
- [All extension boards](/extension-boards)

The selected-revision engineering repository was unavailable to anonymous readers when checked. Its source links are retained for provenance; an accessible matching source release has not been verified. Firmware and historical-board links are separate sources.

<details markdown="1">
<summary>Supplementary views and development history</summary>

{% include _includes/extension-board-visuals.html slug="parallel-port-breakout" %}

Older source amendments, component substitution trials and future connector upgrade requests are development history. They do not change the revision selected by this guide.

</details>
