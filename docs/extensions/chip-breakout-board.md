---
layout: default
title: "Chip Breakout Board (C.H.I.P)"
permalink: /extensions/chip-breakout-board
---

# Chip Breakout Board (C.H.I.P)

This archival carrier candidate connects a C.H.I.P. single-board computer to Smoothieboard over UART and provides a proposed power path. It is for an already-owned matching C.H.I.P. module, not a generic 40-pin computer connector.

This guide selects **v19** from the existing abstract-export record. It is an engineering candidate, not a fabricated, released or hardware-qualified product. Historical and older revision prose does not establish the illustrated revision's behavior.

## How it works

J1.4 receives host TX and J1.5 returns host RX through SN74LVC1G126 buffers. The C.H.I.P. UART nets reach J3.3 TX and J3.5 RX. J4 carries the module power/reference subset. An LMR51430 regulator handles the proposed external-input path; the host 5 V path has a separate diode.

## Power, signals and limits

The selected J2 silkscreen says external 7–24 V DC, unlike the root spec's broad 5–24 V proposal. Use neither as a qualified v19 operating range until the actual regulator, fuse, TVS and source-selection contract is reconciled. J4.2 is CHIP_5V and J4.5 CHIP_3V3; they have different purposes. The module's complete header orientation and authoritative power requirements remain unresolved. Never apply external voltage to the Gadgeteer rails.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the source contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Orange: 5 V supply.
- Green: Signal — use the printed function label.
- Near-black: Circuit ground.
- Grey: Not routed in this board revision.
- Cyan: Selected supply — check the jumper or rail-selection instructions.
- Dark grey: Other source-labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

Start with the overview, then use all focused sheets for exact contacts, controls and links. Source footprint defaults do not prove assembled continuity.

{% include _includes/extension-instruction-diagram.html id="chip-breakout-board-v19-reader-compact-overview" src="/images/extensions/chip-breakout-board/guides/reader-compact-overview.png" title="C.H.I.P. serial carrier — overview" alt="C.H.I.P. serial carrier — overview for chip-breakout-board v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-breakout-board-v19-reader-compact-host-1-5" src="/images/extensions/chip-breakout-board/guides/reader-compact-host-1-5-central-pills.png" title="J1 · Host UART — host 1 5" alt="J1 · Host UART — host 1 5 for chip-breakout-board v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-breakout-board-v19-reader-compact-host-6-10" src="/images/extensions/chip-breakout-board/guides/reader-compact-host-6-10-central-pills.png" title="J1 · Host UART — host 6 10" alt="J1 · Host UART — host 6 10 for chip-breakout-board v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-breakout-board-v19-reader-compact-external-1-2" src="/images/extensions/chip-breakout-board/guides/reader-compact-external-1-2-central-pills.png" title="J2 · External supply — external 1 2" alt="J2 · External supply — external 1 2 for chip-breakout-board v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-breakout-board-v19-reader-compact-module-u14-1-5" src="/images/extensions/chip-breakout-board/guides/reader-compact-module-u14-1-5-central-pills.png" title="J3 · Module U14 — module u14 1 5" alt="J3 · Module U14 — module u14 1 5 for chip-breakout-board v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-breakout-board-v19-reader-compact-module-u14-6-10" src="/images/extensions/chip-breakout-board/guides/reader-compact-module-u14-6-10-central-pills.png" title="J3 · Module U14 — module u14 6 10" alt="J3 · Module U14 — module u14 6 10 for chip-breakout-board v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-breakout-board-v19-reader-compact-module-u14-11-15" src="/images/extensions/chip-breakout-board/guides/reader-compact-module-u14-11-15-central-pills.png" title="J3 · Module U14 — module u14 11 15" alt="J3 · Module U14 — module u14 11 15 for chip-breakout-board v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-breakout-board-v19-reader-compact-module-u14-16-20" src="/images/extensions/chip-breakout-board/guides/reader-compact-module-u14-16-20-central-pills.png" title="J3 · Module U14 — module u14 16 20" alt="J3 · Module U14 — module u14 16 20 for chip-breakout-board v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-breakout-board-v19-reader-compact-module-u14-21-25" src="/images/extensions/chip-breakout-board/guides/reader-compact-module-u14-21-25-central-pills.png" title="J3 · Module U14 — module u14 21 25" alt="J3 · Module U14 — module u14 21 25 for chip-breakout-board v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-breakout-board-v19-reader-compact-module-u14-26-30" src="/images/extensions/chip-breakout-board/guides/reader-compact-module-u14-26-30-central-pills.png" title="J3 · Module U14 — module u14 26 30" alt="J3 · Module U14 — module u14 26 30 for chip-breakout-board v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-breakout-board-v19-reader-compact-module-u14-31-35" src="/images/extensions/chip-breakout-board/guides/reader-compact-module-u14-31-35-central-pills.png" title="J3 · Module U14 — module u14 31 35" alt="J3 · Module U14 — module u14 31 35 for chip-breakout-board v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-breakout-board-v19-reader-compact-module-u14-36-40" src="/images/extensions/chip-breakout-board/guides/reader-compact-module-u14-36-40-central-pills.png" title="J3 · Module U14 — module u14 36 40" alt="J3 · Module U14 — module u14 36 40 for chip-breakout-board v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-breakout-board-v19-reader-compact-module-u13-1-5" src="/images/extensions/chip-breakout-board/guides/reader-compact-module-u13-1-5-central-pills.png" title="J4 · Module U13 — module u13 1 5" alt="J4 · Module U13 — module u13 1 5 for chip-breakout-board v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-breakout-board-v19-reader-compact-module-u13-6-10" src="/images/extensions/chip-breakout-board/guides/reader-compact-module-u13-6-10-central-pills.png" title="J4 · Module U13 — module u13 6 10" alt="J4 · Module U13 — module u13 6 10 for chip-breakout-board v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-breakout-board-v19-reader-compact-module-u13-11-12" src="/images/extensions/chip-breakout-board/guides/reader-compact-module-u13-11-12-central-pills.png" title="J4 · Module U13 — module u13 11 12" alt="J4 · Module U13 — module u13 11 12 for chip-breakout-board v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-breakout-board-v19-reader-compact-power-selector" src="/images/extensions/chip-breakout-board/guides/reader-compact-power-selector.png" title="Module power selector — power selector" alt="Module power selector — power selector for chip-breakout-board v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-breakout-board-v19-reader-compact-host-to-module" src="/images/extensions/chip-breakout-board/guides/reader-compact-host-to-module.png" title="Host-to-module UART path — host to module" alt="Host-to-module UART path — host to module for chip-breakout-board v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-breakout-board-v19-reader-compact-module-to-host" src="/images/extensions/chip-breakout-board/guides/reader-compact-module-to-host.png" title="Module-to-host UART path — module to host" alt="Module-to-host UART path — module to host for chip-breakout-board v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-breakout-board-v19-reader-compact-external-power" src="/images/extensions/chip-breakout-board/guides/reader-compact-external-power-underside-caption.png" title="External supply conversion — external power" alt="External supply conversion — external power for chip-breakout-board v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-breakout-board-v19-reader-compact-host-power" src="/images/extensions/chip-breakout-board/guides/reader-compact-host-power.png" title="Host supply and module clamp — host power" alt="Host supply and module clamp — host power for chip-breakout-board v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-breakout-board-v19-reader-compact-activity-leds" src="/images/extensions/chip-breakout-board/guides/reader-compact-activity-leds.png" title="UART activity indicators — activity leds" alt="UART activity indicators — activity leds for chip-breakout-board v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-breakout-board-v19-reader-compact-power-led" src="/images/extensions/chip-breakout-board/guides/reader-compact-power-led.png" title="Module power indicator — power led" alt="Module power indicator — power led for chip-breakout-board v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-breakout-board-v19-reader-compact-warning-leds" src="/images/extensions/chip-breakout-board/guides/reader-compact-warning-leds-underside-caption.png" title="External protection warnings — warning leds" alt="External protection warnings — warning leds for chip-breakout-board v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-breakout-board-v19-reader-compact-power-tests" src="/images/extensions/chip-breakout-board/guides/reader-compact-power-tests-underside-caption.png" title="Power test pads — power tests" alt="Power test pads — power tests for chip-breakout-board v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-breakout-board-v19-reader-compact-signal-tests" src="/images/extensions/chip-breakout-board/guides/reader-compact-signal-tests-underside-caption.png" title="UART and host reference tests — signal tests" alt="UART and host reference tests — signal tests for chip-breakout-board v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-breakout-board-v19-reader-compact-mounts" src="/images/extensions/chip-breakout-board/guides/reader-compact-mounts-underside-caption.png" title="Ground test and mounting — mounts" alt="Ground test and mounting — mounts for chip-breakout-board v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

The annotated reference sheets above use the selected board abstract and source-numbered contacts. Use every focused sheet together with the connector table. Actual desktop/narrow viewer checks and assembled-board verification remain open.

### chip-breakout — saved connector contacts

Contact numbering below is the selected PCB's pad numbering, viewed using the final board-reference drawing. Same-numbered duplicate lands are collapsed in this electrical table. Mechanical unnumbered pads are omitted here. Physical connector-population and mating qualification remains open. `NC` means unconnected in this saved source, not a spare supported function. Named nets alone do not establish direction; use the signal-path explanation above.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Connector | Contact(s) | Saved-source function/net |
| --- | --- | --- |
| J3 — CHIP U14 SOCKET 2x20 | 1 | `GND` |
| J3 — CHIP U14 SOCKET 2x20 | 3 | `/CHIP_TX_IN` |
| J3 — CHIP U14 SOCKET 2x20 | 5 | `/CHIP_RX_OUT` |
| J3 | 2, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40 | NC |
| J2 — EXT + 7-24V DC / - | 1 | `/VEXT_IN` |
| J2 — EXT + 7-24V DC / - | 2 | `GND` |
| J4 — CHIP U13 SOCKET 2x06 | 1 | `GND` |
| J4 — CHIP U13 SOCKET 2x06 | 2 | `/CHIP_5V` |
| J4 — CHIP U13 SOCKET 2x06 | 4 | `GND` |
| J4 — CHIP U13 SOCKET 2x06 | 5 | `/CHIP_3V3` |
| J4 | 3, 6, 7, 8, 9, 10, 11, 12 | NC |
| J1 — GADGETEER U IN | 1 | `/HOST_3V3` |
| J1 — GADGETEER U IN | 2 | `/HOST_5V` |
| J1 — GADGETEER U IN | 4 | `/HOST_TX_IN` |
| J1 — GADGETEER U IN | 5 | `/HOST_RX_OUT` |
| J1 — GADGETEER U IN | 10 | `GND` |
| J1 | 3, 6, 7, 8, 9 | NC |

</div>




### Links, controls and indicators

The selected footprint values identify the intended control or indication. A cut-to-disable LED link affects indication, not the protected circuit's electrical qualification. Link population, default state and any reused older labels still need schematic/BOM reconciliation before instructions to cut or bridge are accepted.

| Item | Selected source label | Contact nets / observation |
| --- | --- | --- |
| JP1 | CUT TO DISABLE D5 | 1 = LED_D5_DISABLE; 2 = /LED_TXD_A |
| JP3 | CUT TO DISABLE D7 | 1 = LED_D7_DISABLE; 2 = /LED_PWR_A |
| D5 | LED amber TXD | 1 = /CHIP_RX_OUT; 2 = LED_D5_DISABLE |
| JP2 | CUT TO DISABLE D6 | 1 = LED_D6_DISABLE; 2 = /LED_RXD_A |
| D6 | LED amber RXD | 1 = /HOST_RX_OUT; 2 = LED_D6_DISABLE |
| D7 | LED green POWER 5V | 1 = GND; 2 = LED_D7_DISABLE |

### chip-breakout — additional selected solder links

These are distinct physical solder-link footprints, including links whose references begin `SJ` rather than `JP`. Their labels and nets must be included in the annotated reference; none is silently omitted because of its reference prefix.

| Link | Selected label | Pad nets |
| --- | --- | --- |
| SJ1 | PWR SRC EXT \| HOST | 1=/BUCK_5V; 2=/CHIP_5V; 3=/HOST_5V_D |
| SJF3 | CUT REVERSE LED | 1=/P_chip_REV_R; 2=/P_chip_REV_A |
| SJF2 | CUT OV LED | 1=/P_chip_OV_R; 2=/P_chip_OV_A |
| SJF1 | CUT FAULT LED | 1=/P_chip_FLT_R; 2=/P_chip_FLT_A |


</details>

## Practical use with Smoothieboard V2 Prime

The intended use is a C.H.I.P. Linux host sending serial G-code to the motion controller. A ready-to-power example remains incomplete because module documentation and the two potential power-source paths are not fully qualified.

**Wiring remains incomplete:** the source-backed candidates below do not yet provide an accepted, complete host → board → peripheral installation. Any candidate P12 Prime2590 allocation below is limited to that revision and must not be copied to a different Prime revision. Its rail contacts are 1 = limited 3.3 V, 2 = limited 5 V, 10 = ground; verify the actual unshrouded host header and cable orientation before applying power.

### Unpowered UART signal study

These drawings trace only the three external transmit, receive and ground conductors between Prime and the selected v19 carrier. All power contacts remain open. They do not show an operable fitted-module installation: exact module mechanical artwork, socket orientation, mating, supply ownership/range, buffer enables, sequencing and backfeed behavior remain unresolved. The module companion identifies native carrier socket contacts, not a verified module body or mating face. Do not energize this study.

Read both whole-board locators, the connection drawing and all setup companions together. Prime P11 artwork uses the checked P12 J33 contact allocation; the source and module sheets identify its UART aliases and internal buffer paths.

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-locator-prime" src="/images/extensions/chip-breakout-board/guides/native-contact/LOCATOR-prime.png" title="Prime whole-board UART locator" alt="Prime whole-board UART locator" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-locator-board" src="/images/extensions/chip-breakout-board/guides/native-contact/LOCATOR-board.png" title="C.H.I.P.carrier whole-board locator" alt="C.H.I.P.carrier whole-board locator" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-chip-native" src="/images/extensions/chip-breakout-board/guides/native-contact/chip-native.png" title="Prime to C.H.I.P.carrier UART signal study" alt="Prime to C.H.I.P.carrier UART signal study" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-setup" src="/images/extensions/chip-breakout-board/guides/native-contact/SETUP.png" title="Setup prerequisites and open power contacts" alt="Setup prerequisites and open power contacts" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-power" src="/images/extensions/chip-breakout-board/guides/native-contact/POWER.png" title="Unresolved power ownership and domains" alt="Unresolved power ownership and domains" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-module" src="/images/extensions/chip-breakout-board/guides/native-contact/MODULE.png" title="Carrier module-socket and buffer source paths" alt="Carrier module-socket and buffer source paths" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-limits" src="/images/extensions/chip-breakout-board/guides/native-contact/LIMITS.png" title="Unresolved installation limits" alt="Unresolved installation limits" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-source" src="/images/extensions/chip-breakout-board/guides/native-contact/SOURCE.png" title="Prime and carrier source identities" alt="Prime and carrier source identities" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

<details markdown="1">
<summary>Individual native contact keys</summary>

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j1-1-2" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J1-1-2.png" title="Native contact board J1 1 2" alt="Native contact board J1 1 2" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j1-10-11" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J1-10-11.png" title="Native contact board J1 10 11" alt="Native contact board J1 10 11" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j1-2-3" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J1-2-3.png" title="Native contact board J1 2 3" alt="Native contact board J1 2 3" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j1-3-4" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J1-3-4.png" title="Native contact board J1 3 4" alt="Native contact board J1 3 4" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j1-4-5" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J1-4-5.png" title="Native contact board J1 4 5" alt="Native contact board J1 4 5" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j1-5-6" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J1-5-6.png" title="Native contact board J1 5 6" alt="Native contact board J1 5 6" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j1-6-7" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J1-6-7.png" title="Native contact board J1 6 7" alt="Native contact board J1 6 7" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j1-7-8" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J1-7-8.png" title="Native contact board J1 7 8" alt="Native contact board J1 7 8" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j1-8-9" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J1-8-9.png" title="Native contact board J1 8 9" alt="Native contact board J1 8 9" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j1-9-10" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J1-9-10.png" title="Native contact board J1 9 10" alt="Native contact board J1 9 10" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j1-mechanical-0" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J1-mechanical-0.png" title="Native contact board J1 mechanical 0" alt="Native contact board J1 mechanical 0" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j1-mechanical-1" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J1-mechanical-1.png" title="Native contact board J1 mechanical 1" alt="Native contact board J1 mechanical 1" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j2-1-0" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J2-1-0.png" title="Native contact board J2 1 0" alt="Native contact board J2 1 0" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j2-2-1" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J2-2-1.png" title="Native contact board J2 2 1" alt="Native contact board J2 2 1" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-1-0" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-1-0.png" title="Native contact board J3 1 0" alt="Native contact board J3 1 0" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-10-9" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-10-9.png" title="Native contact board J3 10 9" alt="Native contact board J3 10 9" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-11-10" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-11-10.png" title="Native contact board J3 11 10" alt="Native contact board J3 11 10" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-12-11" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-12-11.png" title="Native contact board J3 12 11" alt="Native contact board J3 12 11" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-13-12" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-13-12.png" title="Native contact board J3 13 12" alt="Native contact board J3 13 12" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-14-13" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-14-13.png" title="Native contact board J3 14 13" alt="Native contact board J3 14 13" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-15-14" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-15-14.png" title="Native contact board J3 15 14" alt="Native contact board J3 15 14" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-16-15" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-16-15.png" title="Native contact board J3 16 15" alt="Native contact board J3 16 15" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-17-16" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-17-16.png" title="Native contact board J3 17 16" alt="Native contact board J3 17 16" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-18-17" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-18-17.png" title="Native contact board J3 18 17" alt="Native contact board J3 18 17" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-19-18" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-19-18.png" title="Native contact board J3 19 18" alt="Native contact board J3 19 18" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-2-1" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-2-1.png" title="Native contact board J3 2 1" alt="Native contact board J3 2 1" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-20-19" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-20-19.png" title="Native contact board J3 20 19" alt="Native contact board J3 20 19" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-21-20" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-21-20.png" title="Native contact board J3 21 20" alt="Native contact board J3 21 20" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-22-21" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-22-21.png" title="Native contact board J3 22 21" alt="Native contact board J3 22 21" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-23-22" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-23-22.png" title="Native contact board J3 23 22" alt="Native contact board J3 23 22" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-24-23" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-24-23.png" title="Native contact board J3 24 23" alt="Native contact board J3 24 23" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-25-24" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-25-24.png" title="Native contact board J3 25 24" alt="Native contact board J3 25 24" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-26-25" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-26-25.png" title="Native contact board J3 26 25" alt="Native contact board J3 26 25" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-27-26" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-27-26.png" title="Native contact board J3 27 26" alt="Native contact board J3 27 26" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-28-27" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-28-27.png" title="Native contact board J3 28 27" alt="Native contact board J3 28 27" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-29-28" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-29-28.png" title="Native contact board J3 29 28" alt="Native contact board J3 29 28" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-3-2" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-3-2.png" title="Native contact board J3 3 2" alt="Native contact board J3 3 2" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-30-29" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-30-29.png" title="Native contact board J3 30 29" alt="Native contact board J3 30 29" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-31-30" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-31-30.png" title="Native contact board J3 31 30" alt="Native contact board J3 31 30" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-32-31" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-32-31.png" title="Native contact board J3 32 31" alt="Native contact board J3 32 31" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-33-32" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-33-32.png" title="Native contact board J3 33 32" alt="Native contact board J3 33 32" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-34-33" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-34-33.png" title="Native contact board J3 34 33" alt="Native contact board J3 34 33" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-35-34" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-35-34.png" title="Native contact board J3 35 34" alt="Native contact board J3 35 34" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-36-35" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-36-35.png" title="Native contact board J3 36 35" alt="Native contact board J3 36 35" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-37-36" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-37-36.png" title="Native contact board J3 37 36" alt="Native contact board J3 37 36" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-38-37" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-38-37.png" title="Native contact board J3 38 37" alt="Native contact board J3 38 37" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-39-38" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-39-38.png" title="Native contact board J3 39 38" alt="Native contact board J3 39 38" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-4-3" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-4-3.png" title="Native contact board J3 4 3" alt="Native contact board J3 4 3" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-40-39" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-40-39.png" title="Native contact board J3 40 39" alt="Native contact board J3 40 39" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-5-4" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-5-4.png" title="Native contact board J3 5 4" alt="Native contact board J3 5 4" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-6-5" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-6-5.png" title="Native contact board J3 6 5" alt="Native contact board J3 6 5" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-7-6" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-7-6.png" title="Native contact board J3 7 6" alt="Native contact board J3 7 6" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-8-7" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-8-7.png" title="Native contact board J3 8 7" alt="Native contact board J3 8 7" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j3-9-8" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J3-9-8.png" title="Native contact board J3 9 8" alt="Native contact board J3 9 8" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j4-1-0" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J4-1-0.png" title="Native contact board J4 1 0" alt="Native contact board J4 1 0" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j4-10-9" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J4-10-9.png" title="Native contact board J4 10 9" alt="Native contact board J4 10 9" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j4-11-10" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J4-11-10.png" title="Native contact board J4 11 10" alt="Native contact board J4 11 10" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j4-12-11" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J4-12-11.png" title="Native contact board J4 12 11" alt="Native contact board J4 12 11" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j4-2-1" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J4-2-1.png" title="Native contact board J4 2 1" alt="Native contact board J4 2 1" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j4-3-2" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J4-3-2.png" title="Native contact board J4 3 2" alt="Native contact board J4 3 2" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j4-4-3" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J4-4-3.png" title="Native contact board J4 4 3" alt="Native contact board J4 4 3" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j4-5-4" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J4-5-4.png" title="Native contact board J4 5 4" alt="Native contact board J4 5 4" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j4-6-5" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J4-6-5.png" title="Native contact board J4 6 5" alt="Native contact board J4 6 5" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j4-7-6" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J4-7-6.png" title="Native contact board J4 7 6" alt="Native contact board J4 7 6" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j4-8-7" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J4-8-7.png" title="Native contact board J4 8 7" alt="Native contact board J4 8 7" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-j4-9-8" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-J4-9-8.png" title="Native contact board J4 9 8" alt="Native contact board J4 9 8" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-jp1-1-0" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-JP1-1-0.png" title="Native contact board JP1 1 0" alt="Native contact board JP1 1 0" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-jp1-2-1" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-JP1-2-1.png" title="Native contact board JP1 2 1" alt="Native contact board JP1 2 1" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-jp2-1-0" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-JP2-1-0.png" title="Native contact board JP2 1 0" alt="Native contact board JP2 1 0" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-jp2-2-1" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-JP2-2-1.png" title="Native contact board JP2 2 1" alt="Native contact board JP2 2 1" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-jp3-1-0" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-JP3-1-0.png" title="Native contact board JP3 1 0" alt="Native contact board JP3 1 0" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-jp3-2-1" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-JP3-2-1.png" title="Native contact board JP3 2 1" alt="Native contact board JP3 2 1" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-sj1-1-0" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-SJ1-1-0.png" title="Native contact board SJ1 1 0" alt="Native contact board SJ1 1 0" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-sj1-2-1" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-SJ1-2-1.png" title="Native contact board SJ1 2 1" alt="Native contact board SJ1 2 1" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-sj1-3-2" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-SJ1-3-2.png" title="Native contact board SJ1 3 2" alt="Native contact board SJ1 3 2" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-sjf1-1-0" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-SJF1-1-0.png" title="Native contact board SJF1 1 0" alt="Native contact board SJF1 1 0" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-sjf1-2-1" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-SJF1-2-1.png" title="Native contact board SJF1 2 1" alt="Native contact board SJF1 2 1" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-sjf2-1-0" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-SJF2-1-0.png" title="Native contact board SJF2 1 0" alt="Native contact board SJF2 1 0" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-sjf2-2-1" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-SJF2-2-1.png" title="Native contact board SJF2 2 1" alt="Native contact board SJF2 2 1" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-sjf3-1-0" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-SJF3-1-0.png" title="Native contact board SJF3 1 0" alt="Native contact board SJF3 1 0" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-sjf3-2-1" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-SJF3-2-1.png" title="Native contact board SJF3 2 1" alt="Native contact board SJF3 2 1" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-tp1-1-0" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-TP1-1-0.png" title="Native contact board TP1 1 0" alt="Native contact board TP1 1 0" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-tp10-1-0" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-TP10-1-0.png" title="Native contact board TP10 1 0" alt="Native contact board TP10 1 0" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-tp11-1-0" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-TP11-1-0.png" title="Native contact board TP11 1 0" alt="Native contact board TP11 1 0" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-tp2-1-0" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-TP2-1-0.png" title="Native contact board TP2 1 0" alt="Native contact board TP2 1 0" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-tp3-1-0" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-TP3-1-0.png" title="Native contact board TP3 1 0" alt="Native contact board TP3 1 0" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-tp4-1-0" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-TP4-1-0.png" title="Native contact board TP4 1 0" alt="Native contact board TP4 1 0" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-tp5-1-0" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-TP5-1-0.png" title="Native contact board TP5 1 0" alt="Native contact board TP5 1 0" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-tp6-1-0" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-TP6-1-0.png" title="Native contact board TP6 1 0" alt="Native contact board TP6 1 0" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-tp7-1-0" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-TP7-1-0.png" title="Native contact board TP7 1 0" alt="Native contact board TP7 1 0" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-tp8-1-0" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-TP8-1-0.png" title="Native contact board TP8 1 0" alt="Native contact board TP8 1 0" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-board-tp9-1-0" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/board-TP9-1-0.png" title="Native contact board TP9 1 0" alt="Native contact board TP9 1 0" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-prime-j33-1-0" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/prime-J33-1-0.png" title="Native contact prime J33 1 0" alt="Native contact prime J33 1 0" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-prime-j33-10-9" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/prime-J33-10-9.png" title="Native contact prime J33 10 9" alt="Native contact prime J33 10 9" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-prime-j33-2-1" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/prime-J33-2-1.png" title="Native contact prime J33 2 1" alt="Native contact prime J33 2 1" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-prime-j33-3-2" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/prime-J33-3-2.png" title="Native contact prime J33 3 2" alt="Native contact prime J33 3 2" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-prime-j33-4-3" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/prime-J33-4-3.png" title="Native contact prime J33 4 3" alt="Native contact prime J33 4 3" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-prime-j33-5-4" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/prime-J33-5-4.png" title="Native contact prime J33 5 4" alt="Native contact prime J33 5 4" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-prime-j33-6-5" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/prime-J33-6-5.png" title="Native contact prime J33 6 5" alt="Native contact prime J33 6 5" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-prime-j33-7-6" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/prime-J33-7-6.png" title="Native contact prime J33 7 6" alt="Native contact prime J33 7 6" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-prime-j33-8-7" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/prime-J33-8-7.png" title="Native contact prime J33 8 7" alt="Native contact prime J33 8 7" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

{% include _includes/extension-instruction-diagram.html id="chip-v19-native-reader-contact-keys-prime-j33-9-8" src="/images/extensions/chip-breakout-board/guides/native-contact/reader-contact-keys/prime-J33-9-8.png" title="Native contact prime J33 9 8" alt="Native contact prime J33 9 8" caption="Unpowered source signal study; all power open. Module mating, power domains and operating Linux UART setup remain unverified." width=420 %}

</details>

1. Verify the exact C.H.I.P. module and both U13/U14 connector orientations before fitting the carrier. Most mechanically present contacts are deliberately NC.
2. Choose and review a single power-ownership scheme before connecting USB, host 5 V or the external inlet. Do not assume a diode proves every back-power case.
3. Use the conditional GB/J33 console allocation documented below: J33.4 PB9 TX to J1.4, J33.5 PH14 RX to J1.5, and J33.10 ground to J1.10. This signal mapping does not qualify the carrier's separate 3.3 V supplies, cross-domain enables, power ordering or complete cable.
4. Test harmless serial command/response with motor and heater circuits disabled only after power sequencing and voltage limits are verified.

## Smoothieware use

### Host setup still required

The selected v19 carrier uses the C.H.I.P. v1.0 UART1 contacts: U14.3 transmits to the Prime receive path, and U14.5 receives from the Prime transmit path. It needs a Linux serial client, not a C.H.I.P.-specific Smoothieware motion driver. Identify the actual Linux image and UART1 device/pin setup from matching host documentation before choosing client commands or disabling services. Do not borrow the historical C.H.I.P. carrier’s connector order. The pinned Prime console source supports a conditional 115200/8N1 endpoint, but this does not establish the local Linux setup or complete powered installation.


A compatible UART command host needs no C.H.I.P.-specific motion driver. The pinned Prime UART console supports channel 1 on PB9 TX/PH14 RX at 115200/8N1 without hardware flow control; the complete carrier cable, electrical conditions and C.H.I.P. Linux UART setup remain unresolved. The retained firmware mirror is not proof of a working C.H.I.P. installation. If required console or host support is absent, email **wolf.arthur@gamil.com**.

The firmware application/configuration evidence was checked against SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`. This identifies the reviewed source, not the firmware installed on a user’s controller. Source-checked syntax does not establish physical operation.

### Conditional Prime console for the v19 C.H.I.P. carrier

The v19 carrier needs no C.H.I.P.-specific Smoothieware motion driver. Its selected UART path is non-inverting: Prime GB/J33.4 PB9 TX reaches board J1.4, U2 input2/output4, then module U14/J3.5 RX. Module U14/J3.3 TX reaches U3 input2/output4, board J1.5, then Prime GB/J33.5 PH14 RX. This is different from the historical unbuffered carrier. Signal return is J1.10 GND. Do not infer power compatibility from these directions: U2/U3 have separate HOST_3V3/CHIP_3V3 supplies and cross-domain output-enable connections; exact power ownership and supply ordering still require qualification.

After the direction, actual module/header, supplies and complete cable are qualified, configure the Prime endpoint:

```ini
[uart console]
enable = true
console = true
channel = 1
baudrate = 115200
bits = 8
stop_bits = 1
parity = none
```

On the actual C.H.I.P. Linux image, enable the UART1 routed to these contacts, remove any competing console from that port, and select that image's serial device. No universal device name or Linux command is established here. Set its client to 115200 baud, 8 data bits, no parity, 1 stop bit and no hardware flow control. Send `version` followed by LF (`\n`); CRLF also works, while CR alone is ignored. The response requests no motion and proves only that communication succeeded during that test. For missing matching C.H.I.P. image/client integration, email **wolf.arthur@gamil.com**.

These instructions identify source behavior at SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`; they do not identify the installed build or prove target execution. Reserve every listed pin and command in the complete configuration. Merge entries into existing sections rather than duplicating sections. These software instructions do not verify powered hardware or provide a complete wiring diagram.

## Sources and revision notes

The selected-revision engineering repository was unavailable to anonymous readers when checked. Its source links are retained for provenance; an accessible matching source release has not been verified. Firmware and historical-board links are separate sources.

- [Selected v19 source directory](https://github.com/arthurwolf/extension-boards/tree/main/src/chip-breakout-board/attempt/versions/v19)
- [Design specification](https://github.com/arthurwolf/extension-boards/blob/main/src/chip-breakout-board/specs.md) — historical design intent where it names an older revision.
- [Design discussion](https://github.com/arthurwolf/extension-boards/blob/main/src/chip-breakout-board/design.md)
- [All extension boards](/extension-boards)

Upstream source-link availability has **not** been verified for publication.

**Remaining board-specific uncertainty:** C.H.I.P. primary header/power documentation, selected external supply range, backfeed behavior and actual serial setup remain open.

<details markdown="1">
<summary>Additional board views and engineering history</summary>

Selected active-component identities: `U2 SN74LVC1G126DBVR host->CHIP`; `U3 SN74LVC1G126DBVR CHIP->host`; `U1 LMR51430YDDCR`; `UF2 TL431BIDBZR`; `UF1 TPS26600PWPR`. These identities are not a substitute for matching datasheet limits.

{% include _includes/extension-board-visuals.html slug="chip-breakout-board" %}

The retained gallery is supplementary. It is not either required instructional diagram, and it may include older or different populations whose captions must remain explicit. Development iteration and qualification records remain engineering history rather than operating instructions.

</details>
