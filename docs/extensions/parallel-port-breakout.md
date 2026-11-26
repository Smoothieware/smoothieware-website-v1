---
layout: default
title: "Parallel-port bench test jig"
permalink: /extensions/parallel-port-breakout
---

# Parallel-port bench test jig

This board is a **parallel-port bench test jig**, not a machine interface. Its PCB states **“NOT FOR HOST OR MACHINE CONNECTION”** and **“FUNCTIONAL ISOLATION ONLY”**. Do not connect it to Smoothieboard V2 Prime, a host or a machine; J4 is for a dummy DB25 only. The circuit has twelve output and five return channels using ISO7760 digital isolators; these are capacitive isolators, not optical couplers.

## Interfaces, power and operating limits

J1 carries DB25 outputs2–8 on host contacts 3–9. J2 carries DB25 outputs9/1/14/16/17 on contacts 3–7 and returns DB25 inputs10/11 on contacts 8/9. J3 returns DB25 inputs12/13/15 on contacts 3/4/5. Host1/2 are explicitly unconnected on these sockets; power comes from J6 host 5 V and J5 field 5 V, each positive/ground. J7/J8 are field/host enable contacts. DB25 pins18–25 and mounting contacts are field ground. Never casually join field and host returns across the barrier.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Green: Signal — use the printed function label.
- Near-black: Circuit ground.
- Grey: Not routed.
- Cyan: Supply — check the jumper or rail-selection instructions.
- Dark grey: Other labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

Start with the overview, then use all focused sheets for exact contacts, controls and links. Check link continuity on your board; footprint defaults do not prove it.

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-overview" src="/images/extensions/parallel-port-breakout/guides/reader-compact-overview.png" title="Parallel-port TEST JIG — overview" alt="Parallel-port TEST JIG — overview on the parallel-port test jig" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-j1-1-5" src="/images/extensions/parallel-port-breakout/guides/reader-compact-j1-1-5-central-pills.png" title="J1 · Test host-side header — j1 1 5" alt="J1 · Test host-side header — j1 1 5 on the parallel-port test jig" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-j1-6-10" src="/images/extensions/parallel-port-breakout/guides/reader-compact-j1-6-10-central-pills.png" title="J1 · Test host-side header — j1 6 10" alt="J1 · Test host-side header — j1 6 10 on the parallel-port test jig" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-j2-1-5" src="/images/extensions/parallel-port-breakout/guides/reader-compact-j2-1-5-central-pills.png" title="J2 · Test host-side header — j2 1 5" alt="J2 · Test host-side header — j2 1 5 on the parallel-port test jig" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-j2-6-10" src="/images/extensions/parallel-port-breakout/guides/reader-compact-j2-6-10-central-pills.png" title="J2 · Test host-side header — j2 6 10" alt="J2 · Test host-side header — j2 6 10 on the parallel-port test jig" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-j3-1-5" src="/images/extensions/parallel-port-breakout/guides/reader-compact-j3-1-5-central-pills.png" title="J3 · Test host-side header — j3 1 5" alt="J3 · Test host-side header — j3 1 5 on the parallel-port test jig" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-j3-6-10" src="/images/extensions/parallel-port-breakout/guides/reader-compact-j3-6-10-central-pills.png" title="J3 · Test host-side header — j3 6 10" alt="J3 · Test host-side header — j3 6 10 on the parallel-port test jig" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-db25-0-4" src="/images/extensions/parallel-port-breakout/guides/reader-compact-db25-0-4-central-pills.png" title="J4 · Dummy DB25 test — db25 0 4" alt="J4 · Dummy DB25 test — db25 0 4 on the parallel-port test jig" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-db25-5-9" src="/images/extensions/parallel-port-breakout/guides/reader-compact-db25-5-9-central-pills.png" title="J4 · Dummy DB25 test — db25 5 9" alt="J4 · Dummy DB25 test — db25 5 9 on the parallel-port test jig" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-db25-10-14" src="/images/extensions/parallel-port-breakout/guides/reader-compact-db25-10-14-central-pills.png" title="J4 · Dummy DB25 test — db25 10 14" alt="J4 · Dummy DB25 test — db25 10 14 on the parallel-port test jig" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-db25-15-19" src="/images/extensions/parallel-port-breakout/guides/reader-compact-db25-15-19-central-pills.png" title="J4 · Dummy DB25 test — db25 15 19" alt="J4 · Dummy DB25 test — db25 15 19 on the parallel-port test jig" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-db25-20-24" src="/images/extensions/parallel-port-breakout/guides/reader-compact-db25-20-24-central-pills.png" title="J4 · Dummy DB25 test — db25 20 24" alt="J4 · Dummy DB25 test — db25 20 24 on the parallel-port test jig" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-db25-25-25" src="/images/extensions/parallel-port-breakout/guides/reader-compact-db25-25-25-central-pills.png" title="J4 · Dummy DB25 test — db25 25 25" alt="J4 · Dummy DB25 test — db25 25 25 on the parallel-port test jig" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-field-power-1-2" src="/images/extensions/parallel-port-breakout/guides/reader-compact-field-power-1-2-central-pills.png" title="J5 · Field bench inlet — field power 1 2" alt="J5 · Field bench inlet — field power 1 2 on the parallel-port test jig" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-host-power-1-2" src="/images/extensions/parallel-port-breakout/guides/reader-compact-host-power-1-2-central-pills.png" title="J6 · Host bench inlet — host power 1 2" alt="J6 · Host bench inlet — host power 1 2 on the parallel-port test jig" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-field-enable-1-2" src="/images/extensions/parallel-port-breakout/guides/reader-compact-field-enable-1-2-central-pills.png" title="J7 · Field outputs enable — field enable 1 2" alt="J7 · Field outputs enable — field enable 1 2 on the parallel-port test jig" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-host-enable-1-2" src="/images/extensions/parallel-port-breakout/guides/reader-compact-host-enable-1-2-central-pills.png" title="J8 · Host returns enable — host enable 1 2" alt="J8 · Host returns enable — host enable 1 2 on the parallel-port test jig" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-restriction" src="/images/extensions/parallel-port-breakout/guides/reader-compact-restriction.png" title="Connection restriction" alt="Connection restriction on the parallel-port test jig" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-forward" src="/images/extensions/parallel-port-breakout/guides/reader-compact-forward.png" title="Forward signal isolation — forward" alt="Forward signal isolation — forward on the parallel-port test jig" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-returns" src="/images/extensions/parallel-port-breakout/guides/reader-compact-returns.png" title="Five return signals — returns" alt="Five return signals — returns on the parallel-port test jig" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-conditioning" src="/images/extensions/parallel-port-breakout/guides/reader-compact-conditioning.png" title="Signal conditioning — conditioning" alt="Signal conditioning — conditioning on the parallel-port test jig" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-enable" src="/images/extensions/parallel-port-breakout/guides/reader-compact-enable.png" title="Enable default and control — enable" alt="Enable default and control — enable on the parallel-port test jig" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-power" src="/images/extensions/parallel-port-breakout/guides/reader-compact-power.png" title="Separate power domains — power" alt="Separate power domains — power on the parallel-port test jig" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-tests1" src="/images/extensions/parallel-port-breakout/guides/reader-compact-tests1.png" title="Supply and enable tests — tests1" alt="Supply and enable tests — tests1 on the parallel-port test jig" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-tests6" src="/images/extensions/parallel-port-breakout/guides/reader-compact-tests6.png" title="Supply and enable tests — tests6" alt="Supply and enable tests — tests6 on the parallel-port test jig" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-port-breakout-v22-reader-compact-mounts" src="/images/extensions/parallel-port-breakout/guides/reader-compact-mounts.png" title="Mounting holes — mounts" alt="Mounting holes — mounts on the parallel-port test jig" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

The following is the PCB’s pad-to-net schedule. Net labels identify circuit nodes; they are not wire colours or voltage/current ratings. Unconnected contacts must remain unused. Duplicate physical pads with the same contact number are alternative lands, not extra channels. Check selector bridges on your board before altering them.

<details markdown="1">
<summary>Contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

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


## Connection to Smoothieboard V2 Prime

**Do not connect this board to a Prime or to a machine.** The PCB prohibits host and machine connection, so there is no Prime-to-machine wiring diagram.

J5 and J6 are separate field-side and host-side bench supply inputs, each marked 5.25 V with a 150 mA source limit. These are bench-jig markings, not ratings for a machine adapter. Remove both test-enable shorts before changing power, and never link the host and field grounds.

### De-energized host-ground inspection

This inspection does **not** connect the board to a Prime or a machine. Remove every supply, USB and host/machine cable; discharge capacitors and verify the board is de-energized before selecting resistance. A **Fluke 115** uses **COM → J6.2** and **V/Ω → TP1.1**, two points on the same `/host_gnd` net. Do not use the current terminal, probe a live board or join host and field grounds.

TP1 is a board-only test pad, so it does not appear in the schematic component list. Its contact 1 belongs to `/host_gnd`, as does J6.2; use the numbered PCB key to locate it. The TP1 reference is hidden on the silkscreen, so do not rely on finding a printed “TP1” label. Check that the pad is accessible before probing. Leave J6.1, J5, J1/J2/J3, J4 and both enable connectors J7/J8 disconnected; remove the enable shorts before any power change. Disconnect meter leads after inspection. This neither tests the buffers nor the insulation barrier.

{% include _includes/extension-instruction-diagram.html id="parallel-v22-inspection-Jig-J6-key" src="/images/extensions/parallel-port-breakout/guides/unpowered-inspection/Jig-J6-key.png" title="Unpowered inspection — Jig-J6 · numbered pad key" alt="De-energized host-ground inspection; Prime remains disconnected" caption="Same host-ground net only. All power, USB, host and machine cables removed; discharge and verify de-energized before resistance measurement. Not an isolation test or a Prime installation. Contact keys are not mating faces." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-v22-inspection-Jig-TP1-key" src="/images/extensions/parallel-port-breakout/guides/unpowered-inspection/Jig-TP1-key.png" title="Unpowered inspection — Jig-TP1 · numbered pad key" alt="De-energized host-ground inspection; Prime remains disconnected" caption="Same host-ground net only. All power, USB, host and machine cables removed; discharge and verify de-energized before resistance measurement. Not an isolation test or a Prime installation. Contact keys are not mating faces." width=420 %}

{% include _includes/extension-instruction-diagram.html id="parallel-v22-inspection-external-installation" src="/images/extensions/parallel-port-breakout/guides/unpowered-inspection/unpowered-meter.png" title="Unpowered inspection — meter" alt="De-energized host-ground inspection; Prime remains disconnected" caption="Same host-ground net only. All power, USB, host and machine cables removed; discharge and verify de-energized before resistance measurement. Not an isolation test or a Prime installation. Contact keys are not mating faces." width=420 %}

## Smoothieware behaviour

There is no machine configuration for this test jig: it must not be connected to a host or machine, whatever pins are allocated.

## Sources

- [parallel-port-breakout PCB](https://github.com/arthurwolf/extension-boards/blob/main/src/parallel-port-breakout/attempt/versions/v22/parallel-port-breakout.kicad_pcb)
- [Specification](https://github.com/arthurwolf/extension-boards/blob/main/src/parallel-port-breakout/specs.md)
- [Architecture and design decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/parallel-port-breakout/design.md)
- [Component review](https://github.com/arthurwolf/extension-boards/blob/main/src/parallel-port-breakout/component-review.md)
- [V2 configuration example](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/ConfigSamples/config-3d.ini)
- [All extension boards](/extension-boards)

<details markdown="1">
<summary>Additional board views</summary>

{% include _includes/extension-board-visuals.html slug="parallel-port-breakout" %}

</details>
