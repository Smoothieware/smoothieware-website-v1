---
layout: default
title: "Gadgeteer-to-CAN adapter"
permalink: /extensions/gadgeteer-to-can
---

# Gadgeteer-to-CAN adapter

The selected adapter provides an isolated CAN physical interface between compatible controller TX/RX signals and a CANH/CANL bus. ISOW1044DFMR includes the isolated converter/transceiver, while an SN74LVC1G32 OR gate forces recessive transmit data when SILENT is high without disabling reception. This is a transceiver board: it neither supplies a CAN controller nor converts arbitrary UART or SPI traffic into CAN frames.

## Revision and availability

This guide selects **v21**, matching the revision selected by the retained abstract-diagram inventory. This is a design candidate; availability and operating ratings are unverified. The selected revision and contact map govern this guide; older specifications may describe another circuit.

The selected v21 source package retains schematic title-block revision **WIP**. The package number does not rename the schematic or establish a released hardware revision.

## Interfaces, power and operating limits

J1 contacts 1/2/10 supply host-domain 3.3 V, 4.5–5.5 V and ground. Contacts3/4/5 are active-high transmit inhibit, controller TX and controller RX respectively. J3 is field-side 1 FIELD_GND, 2 CANL, 3 CANH. Host ground and field ground must remain separated across the barrier. The converter demand is materially greater than the old non-isolated TCAN330 design: the retained engineering record cites 211 mA under its stated dominant-bus condition and pulses to 250 mA. Prime rail/cable capacity is not established. The 500 kbit/s over 20 m figure is a design target, not a measured limit.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the source contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Orange: 5 V supply.
- Green: Signal — use the printed function label.
- Near-black: Circuit ground.
- Dark grey: Other source-labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

Start with the overview, then use all focused sheets for exact contacts, controls and links. Source footprint defaults do not prove assembled continuity.

{% include _includes/extension-instruction-diagram.html id="gadgeteer-to-can-v21-reader-compact-overview" src="/images/extensions/gadgeteer-to-can/guides/reader-compact-overview.svg" title="Isolated CAN interface — overview" alt="Isolated CAN interface — overview for gadgeteer-to-can v21" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="gadgeteer-to-can-v21-reader-compact-host-1-5" src="/images/extensions/gadgeteer-to-can/guides/reader-compact-host-1-5-central-pills.svg" title="J1 · Host logic — host 1 5" alt="J1 · Host logic — host 1 5 for gadgeteer-to-can v21" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="gadgeteer-to-can-v21-reader-compact-host-6-10" src="/images/extensions/gadgeteer-to-can/guides/reader-compact-host-6-10-central-pills.svg" title="J1 · Host logic — host 6 10" alt="J1 · Host logic — host 6 10 for gadgeteer-to-can v21" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="gadgeteer-to-can-v21-reader-compact-chain-1-5" src="/images/extensions/gadgeteer-to-can/guides/reader-compact-chain-1-5-central-pills.svg" title="J2 · Host chain — chain 1 5" alt="J2 · Host chain — chain 1 5 for gadgeteer-to-can v21" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="gadgeteer-to-can-v21-reader-compact-chain-6-10" src="/images/extensions/gadgeteer-to-can/guides/reader-compact-chain-6-10-central-pills.svg" title="J2 · Host chain — chain 6 10" alt="J2 · Host chain — chain 6 10 for gadgeteer-to-can v21" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="gadgeteer-to-can-v21-reader-compact-field-1-3" src="/images/extensions/gadgeteer-to-can/guides/reader-compact-field-1-3-central-pills.svg" title="J3 · Isolated CAN field — field 1 3" alt="J3 · Isolated CAN field — field 1 3 for gadgeteer-to-can v21" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="gadgeteer-to-can-v21-reader-compact-transceiver" src="/images/extensions/gadgeteer-to-can/guides/reader-compact-transceiver.svg" title="Transceiver and power — transceiver" alt="Transceiver and power — transceiver for gadgeteer-to-can v21" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="gadgeteer-to-can-v21-reader-compact-silent" src="/images/extensions/gadgeteer-to-can/guides/reader-compact-silent.svg" title="Silent-command logic — silent" alt="Silent-command logic — silent for gadgeteer-to-can v21" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="gadgeteer-to-can-v21-reader-compact-standby" src="/images/extensions/gadgeteer-to-can/guides/reader-compact-standby.svg" title="Standby pin source strap — standby" alt="Standby pin source strap — standby for gadgeteer-to-can v21" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="gadgeteer-to-can-v21-reader-compact-converter" src="/images/extensions/gadgeteer-to-can/guides/reader-compact-converter.svg" title="Converter enable/fault — converter" alt="Converter enable/fault — converter for gadgeteer-to-can v21" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="gadgeteer-to-can-v21-reader-compact-termination" src="/images/extensions/gadgeteer-to-can/guides/reader-compact-termination-underside-caption.svg" title="CAN termination link — termination" alt="CAN termination link — termination for gadgeteer-to-can v21" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="gadgeteer-to-can-v21-reader-compact-local-chain" src="/images/extensions/gadgeteer-to-can/guides/reader-compact-local-chain-underside-caption.svg" title="Local signal chain links — local chain" alt="Local signal chain links — local chain for gadgeteer-to-can v21" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="gadgeteer-to-can-v21-reader-compact-generic-chain" src="/images/extensions/gadgeteer-to-can/guides/reader-compact-generic-chain-underside-caption.svg" title="Generic signal chain links — generic chain" alt="Generic signal chain links — generic chain for gadgeteer-to-can v21" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="gadgeteer-to-can-v21-reader-compact-tests" src="/images/extensions/gadgeteer-to-can/guides/reader-compact-tests-underside-caption.svg" title="Host supply and data tests — tests" alt="Host supply and data tests — tests for gadgeteer-to-can v21" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="gadgeteer-to-can-v21-reader-compact-mounts" src="/images/extensions/gadgeteer-to-can/guides/reader-compact-mounts-underside-caption.svg" title="Remaining tests and mounts — mounts" alt="Remaining tests and mounts — mounts for gadgeteer-to-can v21" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

**Reference status:** the selected-revision annotated sheets above have passed source review. Read the overview and all focused sheets together. Practical wiring and actual desktop/narrow viewer acceptance are separate checks; use the connection section for the current installation limits.

The following is the exact selected PCB’s intended pad-to-net schedule. Net labels identify circuit nodes; they are not wire colours or measured voltage/current ratings. Explicit unconnected contacts must remain unused. Duplicate physical pads with the same contact number represent alternative lands, not extra channels. Selector bridge/default population must be confirmed from the selected assembly record before alteration.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Member / reference | Label / control | Kind | Numbered contacts / assigned nodes |
|---|---|---|---|
| gadgeteer-to-can / J1 | C HOST | Connector | 1: 3V3; 2: 5V; 3: HOST_SILENT; 4: HOST_TXD; 5: HOST_RXD; 6: HOST_6; 7: HOST_7; 8: HOST_8; 9: HOST_9; 10: GND |
| gadgeteer-to-can / J2 | C CHAIN | Connector | 1: 3V3; 2: 5V; 3: CHAIN_3; 4: CHAIN_4; 5: CHAIN_5; 6: CHAIN_6; 7: CHAIN_7; 8: CHAIN_8; 9: CHAIN_9; 10: GND |
| gadgeteer-to-can / J3 | CAN FIELD | Connector | 1: FIELD_GND; 2: CANL; 3: CANH |
| gadgeteer-to-can / TP1 | 3V3 | Observation only | 1: 3V3 |
| gadgeteer-to-can / TP2 | GND | Observation only | 1: GND |
| gadgeteer-to-can / TP3 | HOST_TXD | Observation only | 1: HOST_TXD |
| gadgeteer-to-can / TP4 | HOST_RXD | Observation only | 1: HOST_RXD |
| gadgeteer-to-can / TP5 | HOST_SILENT | Observation only | 1: HOST_SILENT |
| gadgeteer-to-can / TP6 | 5V observe | Observation only | 1: 5V |
| gadgeteer-to-can / TP7 | GND reference | Observation only | 1: GND |
| gadgeteer-to-can / SJ10 | TERM OPEN | Service link/selector | 1: TERM_LINK; 2: CANL |
| gadgeteer-to-can / SJ3 | C pin 3 OPEN | Service link/selector | 1: HOST_SILENT; 2: CHAIN_3 |
| gadgeteer-to-can / SJ4 | C pin 4 OPEN | Service link/selector | 1: HOST_TXD; 2: CHAIN_4 |
| gadgeteer-to-can / SJ5 | C pin 5 OPEN | Service link/selector | 1: HOST_RXD; 2: CHAIN_5 |
| gadgeteer-to-can / SJ6 | C pin 6 BRIDGED | Service link/selector | 1: HOST_6; 2: CHAIN_6 |
| gadgeteer-to-can / SJ7 | C pin 7 BRIDGED | Service link/selector | 1: HOST_7; 2: CHAIN_7 |
| gadgeteer-to-can / SJ8 | C pin 8 BRIDGED | Service link/selector | 1: HOST_8; 2: CHAIN_8 |
| gadgeteer-to-can / SJ9 | C pin 9 BRIDGED | Service link/selector | 1: HOST_9; 2: CHAIN_9 |

</div>

</details>



## Practical connection to Smoothieboard V2 Prime

**Complete wiring diagram pending:** the source-matched Prime → board → peripheral assembly and autorouted continuous connections are not accepted. Any conditional pin allocation below is a research-backed candidate, not permission to energize unresolved hardware.

For a two-node bench CAN bus, each node needs its own compatible controller and power allocation. Connect CANH to CANH, CANL to CANL and the field references together along the cable. Fit the optional 120-ohm termination only at the two physical bus ends; an interior node remains unterminated. J2 forwards power and unused contacts 6–9, while consumed contacts 3–5 are open by default. Do not chain a second transceiver expecting another CAN controller interface. A possible controller pin pair is established, but no complete Prime-to-J1 harness is accepted.

### Possible Prime controller allocation — custom firmware required

The retained P11 and P12 Prime sources expose PB9 through R74 (100 Ω) at GB/J33.4, and PH14 through R75 (100 Ω) at J33.5. The [ST STM32H745xI/G datasheet, DS12923 Rev 3, Table 9](https://www.st.com/resource/en/datasheet/stm32h745bi.pdf) assigns PB9 to FDCAN1 transmit and PH14 to FDCAN1 receive at alternate function AF9. These are possible controller signals for adapter J1.4 HOST_TXD and J1.5 HOST_RXD. J33.3/PD9 is a possible separate GPIO for J1.3 HOST_SILENT, subject to complete ownership and startup design.

**This is a custom-firmware allocation candidate, not a working configuration.** The current UART4 implementation uses PB9/PH14 at AF8; UART4 and CAN cannot own the same pins simultaneously. Do not disable a console without a replacement communications path and a review of the complete machine configuration. The two 100 Ω series resistors remain in the signal paths, so edge timing and loading require qualification.

The adapter's OR gate combines HOST_TXD with HOST_SILENT: HIGH on SILENT forces the transmitted recessive level but does not disable reception or implement a CAN controller. UART bytes and GPIO commands are not CAN frames. No pinmux, bitrate, filter, frame-command or application configuration is supplied by this candidate.

A named controller-equipped peer is the [PEAK PCAN-USB FD](https://www.peak-system.com/produktcd/Pdf/English/PCAN-USB-FD_UserMan_eng.pdf), manual 2.3.0, pages 14–15: its DB9.7/.2/.3 identify CANH/CANL/CAN ground. These correspond by signal name to adapter J3.3/.2/.1 on the **field side**. Leave the peer's optional supply pin unused. Its internal termination is not active at delivery; any eventual two-node design must establish both bus-end terminations. This identifies a possible peer, not a complete cable, power or commissioning instruction. Never bridge field ground to host ground by assumption.

Where a conditional GF/J37 example is given, it applies only to **V2 P12 Prime2590**: contacts 1/2/10 are limited 3.3 V/limited 5 V/ground, and contacts 3–9 are PB1/PJ4/PA4/PG0/PJ3/PG1/PJ2. The host header is unshrouded; verify numbered continuity and cable orientation with power removed. Reserve pins in the complete machine configuration. No rail-current allowance, alternative Prime revision, timer route or bus mux is implied by this map.

## Smoothieware behaviour and commissioning

The complete [pinned SmoothieV2 application/configuration source](https://github.com/Smoothieware/SmoothieV2/tree/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src) contains no CANbus/FDCAN application implementation. No matching controller configuration, pin mux or application protocol is established for this selected board; an MCU peripheral or HAL implementation alone would not supply that protocol. Generic GPIO and bus-capable MCU silicon are insufficient. If the required CAN support is absent, email **wolf.arthur@gamil.com**; include the desired CAN application, bitrate, host revision and node topology.

## What remains unresolved

The selected v21 is isolated; old non-isolated specifications must not govern its power or grounds. Implemented CAN allocation, UART4 ownership, series-resistor timing, controller/application firmware, rail capacity and physical insulation/EMC remain open. The board-reference drawings explain the selected source revision. A complete practical wiring recipe is still pending; source-link availability and desktop/narrow page usability also remain to be verified.

## Sources and revision notes

- [Selected v21 gadgeteer-to-can PCB](https://github.com/arthurwolf/extension-boards/blob/main/src/gadgeteer-to-can/attempt/versions/v21/gadgeteer-to-can.kicad_pcb)
- [Specification and retained limitations](https://github.com/arthurwolf/extension-boards/blob/main/src/gadgeteer-to-can/specs.md)
- [Architecture and source decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/gadgeteer-to-can/design.md)
- [Component review](https://github.com/arthurwolf/extension-boards/blob/main/src/gadgeteer-to-can/component-review.md)
- [V2 configuration example](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/ConfigSamples/config-3d.ini)
- [All extension boards](/extension-boards)

The selected-revision engineering repository was unavailable to anonymous readers when checked. Its source links are retained for provenance; an accessible matching source release has not been verified. Firmware and historical-board links are separate sources.

<details markdown="1">
<summary>Supplementary views and development history</summary>

{% include _includes/extension-board-visuals.html slug="gadgeteer-to-can" %}

Older source amendments, component substitution trials and future connector upgrade requests are development history. They do not change the revision selected by this guide.

</details>
