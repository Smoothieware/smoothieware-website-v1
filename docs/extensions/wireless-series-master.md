---
layout: default
title: 'Wireless series — Smoothieboard-side "Master"'
permalink: /extensions/wireless-series-master
---

# Wireless series — Smoothieboard-side "Master"

This host-side radio controller is an experimental remote-I/O master, using an ATSAMD21 and nRF24L01+ module. The family's Y/U/S/I/P/A modes are configuration concepts, not evidence that arbitrary buses can be transported transparently.

This guide selects **v14**, the PCB revision named by the existing abstract export. It is a prototype/design candidate; no release, physical operation or current rating is established by a clean CAD check. Older root specifications are design history where they name another revision.

The selected v14 source package retains schematic title-block revision **v10**. The package number does not rename the schematic or establish a released hardware revision.

## How it works

J1 contacts 3–9 reach local HOST_P3–P9 through the selected interface. The MCU communicates with the E01-ML01S radio module. J2 programs the MCU. J3 branches contacts 8/9 as Qwiic only when the chosen host mode actually assigns those nets to I2C.

## Power, signal direction and limits

J1.1 is host 3.3 V, .2 is NC and .10 ground. Radio/MCU current allocation, input/output direction and timing must be mode-specific. J3 is 3.3 V only; it must not be attached as I2C while the same contacts are driven as another mode. Link-loss, stale-data, host reset and protocol reliability remain unresolved. No safety or deterministic motion transport is claimed.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the source contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Near-black: Circuit ground.
- Grey: Not routed in this board revision.
- Dark grey: Other source-labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

Start with the overview, then use all focused sheets for exact contacts, controls and links. Source footprint defaults do not prove assembled continuity.

{% include _includes/extension-instruction-diagram.html id="wireless-series-master-v14-reader-compact-overview" src="/images/extensions/wireless-series-master/guides/reader-compact-overview.png" title="Wireless series master — overview" alt="Wireless series master — overview for wireless-series-master v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-series-master-v14-reader-compact-host-1-5" src="/images/extensions/wireless-series-master/guides/reader-compact-host-1-5-central-pills.png" title="J1 · Configurable host port — host 1 5" alt="J1 · Configurable host port — host 1 5 for wireless-series-master v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-series-master-v14-reader-compact-host-6-10" src="/images/extensions/wireless-series-master/guides/reader-compact-host-6-10-central-pills.png" title="J1 · Configurable host port — host 6 10" alt="J1 · Configurable host port — host 6 10 for wireless-series-master v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-series-master-v14-reader-compact-swd-1-5" src="/images/extensions/wireless-series-master/guides/reader-compact-swd-1-5-central-pills.png" title="J2 · MCU programming — swd 1 5" alt="J2 · MCU programming — swd 1 5 for wireless-series-master v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-series-master-v14-reader-compact-qwiic-1-4" src="/images/extensions/wireless-series-master/guides/reader-compact-qwiic-1-4-central-pills.png" title="J3 · Shared Qwiic connector — qwiic 1 4" alt="J3 · Shared Qwiic connector — qwiic 1 4 for wireless-series-master v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-series-master-v14-reader-compact-bus" src="/images/extensions/wireless-series-master/guides/reader-compact-bus-underside-caption.png" title="Host signal bus switch — bus" alt="Host signal bus switch — bus for wireless-series-master v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-series-master-v14-reader-compact-signals" src="/images/extensions/wireless-series-master/guides/reader-compact-signals.png" title="Seven host signal paths — signals" alt="Seven host signal paths — signals for wireless-series-master v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-series-master-v14-reader-compact-power" src="/images/extensions/wireless-series-master/guides/reader-compact-power.png" title="3.3V supply feed — power" alt="3.3V supply feed — power for wireless-series-master v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-series-master-v14-reader-compact-controller" src="/images/extensions/wireless-series-master/guides/reader-compact-controller.png" title="SAMD21 wireless controller — controller" alt="SAMD21 wireless controller — controller for wireless-series-master v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-series-master-v14-reader-compact-radio" src="/images/extensions/wireless-series-master/guides/reader-compact-radio.png" title="Radio module interface — radio" alt="Radio module interface — radio for wireless-series-master v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-series-master-v14-reader-compact-button" src="/images/extensions/wireless-series-master/guides/reader-compact-button.png" title="Provisioning button — button" alt="Provisioning button — button for wireless-series-master v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-series-master-v14-reader-compact-led-D1" src="/images/extensions/wireless-series-master/guides/reader-compact-led-D1.png" title="Provisioning indicator — led D1" alt="Provisioning indicator — led D1 for wireless-series-master v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-series-master-v14-reader-compact-led-D2" src="/images/extensions/wireless-series-master/guides/reader-compact-led-D2.png" title="Radio-link indicator — led D2" alt="Radio-link indicator — led D2 for wireless-series-master v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-series-master-v14-reader-compact-led-D3" src="/images/extensions/wireless-series-master/guides/reader-compact-led-D3.png" title="Fault indicator — led D3" alt="Fault indicator — led D3 for wireless-series-master v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-series-master-v14-reader-compact-tests" src="/images/extensions/wireless-series-master/guides/reader-compact-tests-underside-caption.png" title="Power and logic test pads — tests" alt="Power and logic test pads — tests for wireless-series-master v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-series-master-v14-reader-compact-mounts" src="/images/extensions/wireless-series-master/guides/reader-compact-mounts.png" title="Mounting holes — mounts" alt="Mounting holes — mounts for wireless-series-master v14" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

The annotated source references above cover the selected revision. Complete installation wiring and review in the actual page viewer remain open.

### wireless-series-master — selected connector contact map

The following is saved PCB pad/net readback. It proves neither physical continuity nor mating orientation/current capacity. Same-numbered duplicate lands are collapsed in this electrical table. Physical connector-population and mating qualification remains open. `NC` is explicitly unconnected, not a supported spare.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Connector | Contact | Saved function/net |
| --- | --- | --- |
| J1 — GADGETEER Y/U/S/I/P/A (config-selected) | 1 | `/+3V3_HOST` |
| J1 — GADGETEER Y/U/S/I/P/A (config-selected) | 3 | `/HOST_P3` |
| J1 — GADGETEER Y/U/S/I/P/A (config-selected) | 4 | `/HOST_P4` |
| J1 — GADGETEER Y/U/S/I/P/A (config-selected) | 5 | `/HOST_P5` |
| J1 — GADGETEER Y/U/S/I/P/A (config-selected) | 6 | `/HOST_P6` |
| J1 — GADGETEER Y/U/S/I/P/A (config-selected) | 7 | `/HOST_P7` |
| J1 — GADGETEER Y/U/S/I/P/A (config-selected) | 8 | `/HOST_P8` |
| J1 — GADGETEER Y/U/S/I/P/A (config-selected) | 9 | `/HOST_P9` |
| J1 — GADGETEER Y/U/S/I/P/A (config-selected) | 10 | `GND` |
| J1 | 2 | NC |
| J2 — SWD | 1 | `+3V3` |
| J2 — SWD | 2 | `/SWDIO` |
| J2 — SWD | 3 | `/SWCLK` |
| J2 — SWD | 4 | `/NRST` |
| J2 — SWD | 5 | `GND` |
| J3 — QWIIC 3V3 SAME I2C BUS | 1 | `GND` |
| J3 — QWIIC 3V3 SAME I2C BUS | 2 | `/+3V3_HOST` |
| J3 — QWIIC 3V3 SAME I2C BUS | 3 | `/HOST_P8` |
| J3 — QWIIC 3V3 SAME I2C BUS | 4 | `/HOST_P9` |
| J3 | MP | NC |

</div>

</details>


### Links, indicators and controls

The table identifies this selected board's actual links and indicators. Default population and complete circuit meaning must be reconciled before cut/bridge instructions are accepted. Indicator labels describe observed circuit signals, not physical load or safety qualification.

| Item | Selected label | Contact nets |
| --- | --- | --- |
| JP2 | CUT TO DISABLE D3 | 1=LED_D3_DISABLE; 2=/LED_FAULT_A |
| JP3 | CUT TO DISABLE D2 | 1=LED_D2_DISABLE; 2=/LED_LINK_A |
| D1 | PROV amber | 1=GND; 2=LED_D1_DISABLE |
| SW1 | PROV button | 1=/PROV_BTN; 2=GND |
| D3 | FAULT red | 1=GND; 2=LED_D3_DISABLE |
| JP1 | CUT TO DISABLE D1 | 1=LED_D1_DISABLE; 2=/LED_PROV_A |
| D2 | LINK green | 1=GND; 2=LED_D2_DISABLE |

### wireless-series-master — additional selected solder links

These are distinct physical solder-link footprints, including links whose references begin `SJ` rather than `JP`. Their labels and nets must be included in the annotated reference; none is silently omitted because of its reference prefix.

| Link | Selected label | Pad nets |
| --- | --- | --- |
| SJ1 | 3V3_FEED | 1=/+3V3_HOST; 2=+3V3 |



## Practical use with Smoothieboard V2 Prime

The intended example is one configured slow digital remote-I/O link with a matching remote endpoint. A nominal master board without a peer image and protocol is not a usable example.

**Pending:** the complete autorouted Prime → board → peripheral diagram has not been composed or accepted. A connector contact map or standalone board illustration does not satisfy it. Do not transfer a host allocation between Prime revisions without matching source evidence.

1. Select exactly one mode and its complete host/peer contact schedule before connecting J1.
2. Identify the matching radio peer and firmware/protocol versions; do not mix this nRF24L01+ architecture with the nRF52832 endpoint family.
3. Use J3 only for an explicitly configured I2C mode, with one host bus and a verified pull-up/power budget.
4. Test reset, missing peer, interference and timeout outputs before allowing the link to control a machine function.

## Smoothieware configuration and use

The source specification explicitly leaves firmware/protocol outside the hardware deliverables. No matching master/peer implementation or V2 mode driver was verified. If required support is absent, email **wolf.arthur@gamil.com**. No invented wireless mode or pairing command is supplied.

The V2 implementation reviewed for this documentation is pinned to SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`; it is not proven to be the installed controller firmware. Source support, configured operation and physical/system qualification are separate checks. No arbitrary pin, driver setting or command is substituted for a missing contract.

## Sources and revision notes

- [Selected v14 source directory](https://github.com/arthurwolf/extension-boards/tree/main/src/wireless-series-master/attempt/versions/v14)
- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/wireless-series-master/specs.md) — retain older revision boundaries.
- [Design discussion](https://github.com/arthurwolf/extension-boards/blob/main/src/wireless-series-master/design.md)
- [All extension boards](/extension-boards)

The selected-revision engineering repository was unavailable to anonymous readers when checked. Its source links are retained for provenance; an accessible matching source release has not been verified. Firmware and historical-board links are separate sources.

**Remaining board-specific issue:** Master/peer firmware, mode-specific host protocol, channel directions, link-loss behavior and power budget.

<details markdown="1">
<summary>Supplementary board views and engineering history</summary>

Selected active components: `U2 E01-ML01S nRF24L01+ module`; `U1 ATSAMD21E18A-AU`; `U3 SN74CB3Q3245PWR`. Part identities do not establish an assembled rating.

{% include _includes/extension-board-visuals.html slug="wireless-series-master" %}

These gallery views are supplementary; they are not the two required instructional diagrams. Their captions must preserve any older/different revision or population. Iteration logs, trial results and future upgrade proposals remain engineering history rather than operating instructions.

</details>
