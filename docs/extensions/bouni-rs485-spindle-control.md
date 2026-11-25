---
layout: default
title: "Bouni RS-485 spindle control"
permalink: /extensions/bouni-rs485-spindle-control
---

# Bouni RS-485 spindle control

This board provides an isolated RS-485 serial interface between a controller and a compatible variable-frequency drive (VFD). For drives that take an analog speed command, see [Bouni analog spindle control](/extensions/bouni-analog-spindle-control).

This guide covers the **RS-485 revision 17** design carried forward in **export package 19**. The board design and installation remain unqualified.

## How it works

The ISOW1412 provides the isolated serial physical interface. Drive commands depend on the controller software and the drive’s protocol. Match the differential terminals to the actual drive manual because D+ and D− naming varies. Keep host and isolated field returns separate and select termination and bias for the verified link.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the source contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Orange: 5 V supply.
- Violet: Control signal.
- Green: Signal — use the printed function label.
- Near-black: Circuit ground.
- Dark grey: Other source-labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-rs485-reader-compact-overview" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-rs485/reader-compact-overview.png" title="Spindle module RS485" alt="Spindle module RS485 on the bsm-rs485 assembly, v19" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-rs485-reader-compact-j1-1-5" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-rs485/reader-compact-j1-1-5-central-pills.png" title="J1 · Host interface" alt="J1 · Host interface on the bsm-rs485 assembly, v19" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-rs485-reader-compact-j1-6-10" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-rs485/reader-compact-j1-6-10-central-pills.png" title="J1 · Host interface" alt="J1 · Host interface on the bsm-rs485 assembly, v19" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-rs485-reader-compact-j2-1-5" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-rs485/reader-compact-j2-1-5-central-pills.png" title="J2 · Chain interface" alt="J2 · Chain interface on the bsm-rs485 assembly, v19" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-rs485-reader-compact-j2-6-10" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-rs485/reader-compact-j2-6-10-central-pills.png" title="J2 · Chain interface" alt="J2 · Chain interface on the bsm-rs485 assembly, v19" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-rs485-reader-compact-vfd-1-3" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-rs485/reader-compact-vfd-1-3-central-pills.png" title="J3 · RS485 bus" alt="J3 · RS485 bus on the bsm-rs485 assembly, v19" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-rs485-reader-compact-links3" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-rs485/reader-compact-links3.png" title="Chain signal links" alt="Chain signal links on the bsm-rs485 assembly, v19" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-rs485-reader-compact-links6" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-rs485/reader-compact-links6.png" title="Chain signal links" alt="Chain signal links on the bsm-rs485 assembly, v19" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-rs485-reader-compact-links8" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-rs485/reader-compact-links8.png" title="Chain signal links" alt="Chain signal links on the bsm-rs485 assembly, v19" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-rs485-reader-compact-serial" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-rs485/reader-compact-serial.png" title="Serial and direction path" alt="Serial and direction path on the bsm-rs485 assembly, v19" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-rs485-reader-compact-termination" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-rs485/reader-compact-termination.png" title="Bus end termination" alt="Bus end termination on the bsm-rs485 assembly, v19" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-rs485-reader-compact-power" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-rs485/reader-compact-power.png" title="Two supply domains" alt="Two supply domains on the bsm-rs485 assembly, v19" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-rs485-reader-compact-tests0" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-rs485/reader-compact-tests0-underside-caption.png" title="Interface test pads" alt="Interface test pads on the bsm-rs485 assembly, v19" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-rs485-reader-compact-tests5" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-rs485/reader-compact-tests5-underside-caption.png" title="Interface test pads" alt="Interface test pads on the bsm-rs485 assembly, v19" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-rs485-reader-compact-mounts" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-rs485/reader-compact-mounts.png" title="Mounting holes" alt="Mounting holes on the bsm-rs485 assembly, v19" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

The annotated board-reference sheets above describe the selected source revision; the contact table below is a companion source aid. Actual desktop and narrow-view page/viewer acceptance remains open. Follow the wiring section for the connection procedure and its remaining installation limitations.

### Connector contacts

Contact numbering below is the selected PCB's pad numbering, viewed using the final board-reference drawing. Same-numbered duplicate lands are collapsed in this electrical table. Mechanical unnumbered pads are omitted here. Physical connector-population and mating qualification remains open. `NC` means unconnected in this saved source, not a spare supported function. Named nets alone do not establish direction; use the signal-path explanation above.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

| Connector | Contact(s) | Saved-source function/net |
| --- | --- | --- |
| J1 — GADGETEER IN | 1 | `+3V3` |
| J1 — GADGETEER IN | 2 | `+5V` |
| J1 — GADGETEER IN | 3 | `/GAD_P3` |
| J1 — GADGETEER IN | 4 | `/UART_TX` |
| J1 — GADGETEER IN | 5 | `/UART_RX` |
| J1 — GADGETEER IN | 6 | `/RS485_DIR` |
| J1 — GADGETEER IN | 7 | `/GAD_P7` |
| J1 — GADGETEER IN | 8 | `/GAD_P8` |
| J1 — GADGETEER IN | 9 | `/GAD_P9` |
| J1 — GADGETEER IN | 10 | `GND` |
| J2 — GADGETEER CHAIN | 1 | `+3V3` |
| J2 — GADGETEER CHAIN | 2 | `+5V` |
| J2 — GADGETEER CHAIN | 3 | `/CHAIN_P3` |
| J2 — GADGETEER CHAIN | 4 | `/CHAIN_P4` |
| J2 — GADGETEER CHAIN | 5 | `/CHAIN_P5` |
| J2 — GADGETEER CHAIN | 6 | `/CHAIN_P6` |
| J2 — GADGETEER CHAIN | 7 | `/CHAIN_P7` |
| J2 — GADGETEER CHAIN | 8 | `/CHAIN_P8` |
| J2 — GADGETEER CHAIN | 9 | `/CHAIN_P9` |
| J2 — GADGETEER CHAIN | 10 | `GND` |
| J3 — RS485 D+ D- GND | 1 | `/BUS_P` |
| J3 — RS485 D+ D- GND | 2 | `/BUS_N` |
| J3 — RS485 D+ D- GND | 3 | `/GND_ISO` |

</details>


### Links, controls and indicators

The selected footprint values identify the intended control or indication. A cut-to-disable LED link affects indication, not the protected circuit's electrical qualification. Link population, default state and any reused older labels still need schematic/BOM reconciliation before instructions to cut or bridge are accepted.

| Item | Selected source label | Contact nets / observation |
| --- | --- | --- |
| JP4 | CHAIN P4 OPEN | 1 = /UART_TX; 2 = /CHAIN_P4 |
| JP5 | CHAIN P5 OPEN | 1 = /UART_RX; 2 = /CHAIN_P5 |
| JP6 | CHAIN P6 OPEN | 1 = /RS485_DIR; 2 = /CHAIN_P6 |
| JP7 | CHAIN P7 BRIDGED | 1 = /GAD_P7; 2 = /CHAIN_P7 |
| JP9 | CHAIN P9 BRIDGED | 1 = /GAD_P9; 2 = /CHAIN_P9 |
| JP8 | CHAIN P8 BRIDGED | 1 = /GAD_P8; 2 = /CHAIN_P8 |
| JP3 | CHAIN P3 BRIDGED | 1 = /GAD_P3; 2 = /CHAIN_P3 |

### Termination link

These are distinct physical solder-link footprints, including links whose references begin `SJ` rather than `JP`. Their labels and nets must be included in the annotated reference; none is silently omitted because of its reference prefix.

| Link | Selected label | Pad nets |
| --- | --- | --- |
| SJ1 | TERM 120R OPEN | 1=/BUS_P; 2=/TERM_MID |

## Practical use with Smoothieboard V2 Prime

A complete Prime-to-drive installation remains open. Confirm the exact drive terminal mapping, protocol, addressing and direction control, as well as the host header allocation and both supply domains, before attempting installation.

## Smoothieware use

The pinned170-file application/config snapshot and reviewed UART/M3 consumers contain no matching Modbus/VFD command application for this assembly. The UART console is not a half-duplex direction scheduler, Modbus register implementation or VFD fault controller. Matching required VFD support is absent from that pinned application scope; email wolf.arthur@gamil.com with the VFD model and selected RS485 assembly. Do not transfer the analog recipe to the serial board or invent Modbus registers. Availability in other forks/builds is unverified.

The source review covers SmoothieV2 revision `2a21c0108b1d095ecd8b2b9358e94055f053c003`. It does not establish the behavior of an installed version.

## Sources and revision notes

The selected-revision engineering repository was unavailable to anonymous readers when checked. Its source links are retained for provenance; an accessible matching source release has not been verified. Firmware and historical-board links are separate sources.

- [Selected v19 source directory](https://github.com/arthurwolf/extension-boards/tree/main/src/bouni-spindle-module-boards/attempt/versions/v19)
- [Design specification](https://github.com/arthurwolf/extension-boards/blob/main/src/bouni-spindle-module-boards/specs.md) — historical design intent where it names an older revision.
- [Design discussion](https://github.com/arthurwolf/extension-boards/blob/main/src/bouni-spindle-module-boards/design.md)
- [All extension boards](/extension-boards)

Upstream source-link availability has **not** been verified for publication.

Selected active-component identities: `U1 ISOW1412DFMR`. These identities are not a substitute for matching datasheet limits.

{% include _includes/extension-board-visuals.html slug="bouni-spindle-module-boards" role="bsm rs485" %}
