---
layout: default
title: "Wireless gadgeteer extender"
permalink: /extensions/wireless-gadgeteer-extender
---

# Wireless gadgeteer extender

This candidate uses paired nRF52832 radio endpoints to sample and reproduce seven deliberately directed digital channels. It is for slow, non-safety I/O. It is not a transparent cable replacement or a deterministic motor/step link.

This guide selects **v19**, the PCB revision named by the existing abstract export. It is a prototype/design candidate; no release, physical operation or current rating is established by a clean CAD check. Older root specifications are design history where they name another revision.

The selected v19 source package retains schematic title-block revision **v12**. The package number does not rename the schematic or establish a released hardware revision.

## How it works

The selected MDBT42Q-512KV2 module combines MCU and radio. J1 contacts 3–9 connect channels 1–7. Each endpoint must know whether each channel is an input or output; the peer must use a complementary configuration. J3 programs/debugs the module and J2 is an external 5 V inlet with a local TPS70933 supply path.

## Power, signal direction and limits

Channel directions, power source, update rate, radio pairing and timeout values are local-firmware contract items, not determined by connector labels. Never let both peers drive the same logical channel or bridge host/external sources without source review. Boot, link loss, stale/replayed packets and brownout outputs must have explicit safe states. No emergency-stop, step pulse or safety function is established.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the source contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Orange: 5 V supply.
- Near-black: Circuit ground.
- Dark grey: Other source-labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

Start with the overview, then use all focused sheets for exact contacts, controls and links. Source footprint defaults do not prove assembled continuity.

{% include _includes/extension-instruction-diagram.html id="wireless-gadgeteer-extender-v19-reader-compact-overview" src="/images/extensions/wireless-gadgeteer-extender/guides/reader-compact-overview.png" title="Wireless channel extender — overview" alt="Wireless channel extender — overview for wireless-gadgeteer-extender v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-gadgeteer-extender-v19-reader-compact-host-1-5" src="/images/extensions/wireless-gadgeteer-extender/guides/reader-compact-host-1-5-central-pills.png" title="J1 · Seven-channel interface — host 1 5" alt="J1 · Seven-channel interface — host 1 5 for wireless-gadgeteer-extender v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-gadgeteer-extender-v19-reader-compact-host-6-10" src="/images/extensions/wireless-gadgeteer-extender/guides/reader-compact-host-6-10-central-pills.png" title="J1 · Seven-channel interface — host 6 10" alt="J1 · Seven-channel interface — host 6 10 for wireless-gadgeteer-extender v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-gadgeteer-extender-v19-reader-compact-external-1-2" src="/images/extensions/wireless-gadgeteer-extender/guides/reader-compact-external-1-2-central-pills.png" title="J2 · External5V input — external 1 2" alt="J2 · External5V input — external 1 2 for wireless-gadgeteer-extender v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-gadgeteer-extender-v19-reader-compact-swd-1-5" src="/images/extensions/wireless-gadgeteer-extender/guides/reader-compact-swd-1-5-central-pills.png" title="J3 · MCU programming — swd 1 5" alt="J3 · MCU programming — swd 1 5 for wireless-gadgeteer-extender v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-gadgeteer-extender-v19-reader-compact-module" src="/images/extensions/wireless-gadgeteer-extender/guides/reader-compact-module.png" title="Wireless channel module — module" alt="Wireless channel module — module for wireless-gadgeteer-extender v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-gadgeteer-extender-v19-reader-compact-signals" src="/images/extensions/wireless-gadgeteer-extender/guides/reader-compact-signals.png" title="Channel resistors and bias — signals" alt="Channel resistors and bias — signals for wireless-gadgeteer-extender v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-gadgeteer-extender-v19-reader-compact-bias" src="/images/extensions/wireless-gadgeteer-extender/guides/reader-compact-bias.png" title="Shared bias selector — bias" alt="Shared bias selector — bias for wireless-gadgeteer-extender v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-gadgeteer-extender-v19-reader-compact-power" src="/images/extensions/wireless-gadgeteer-extender/guides/reader-compact-power.png" title="External regulator link — power" alt="External regulator link — power for wireless-gadgeteer-extender v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-gadgeteer-extender-v19-reader-compact-5v-feed" src="/images/extensions/wireless-gadgeteer-extender/guides/reader-compact-5v-feed-underside-caption.png" title="Optional5V outward feed — 5v feed" alt="Optional5V outward feed — 5v feed for wireless-gadgeteer-extender v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-gadgeteer-extender-v19-reader-compact-button" src="/images/extensions/wireless-gadgeteer-extender/guides/reader-compact-button.png" title="Pairing-labelled button — button" alt="Pairing-labelled button — button for wireless-gadgeteer-extender v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-gadgeteer-extender-v19-reader-compact-directions1" src="/images/extensions/wireless-gadgeteer-extender/guides/reader-compact-directions1.png" title="Direction request links — directions1" alt="Direction request links — directions1 for wireless-gadgeteer-extender v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-gadgeteer-extender-v19-reader-compact-directions5" src="/images/extensions/wireless-gadgeteer-extender/guides/reader-compact-directions5.png" title="Direction request links — directions5" alt="Direction request links — directions5 for wireless-gadgeteer-extender v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-gadgeteer-extender-v19-reader-compact-led-LED1" src="/images/extensions/wireless-gadgeteer-extender/guides/reader-compact-led-LED1.png" title="Link indicator — led LED1" alt="Link indicator — led LED1 for wireless-gadgeteer-extender v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-gadgeteer-extender-v19-reader-compact-led-LED2" src="/images/extensions/wireless-gadgeteer-extender/guides/reader-compact-led-LED2.png" title="Fault indicator — led LED2" alt="Fault indicator — led LED2 for wireless-gadgeteer-extender v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-gadgeteer-extender-v19-reader-compact-tests" src="/images/extensions/wireless-gadgeteer-extender/guides/reader-compact-tests-underside-caption.png" title="Power test pads — tests" alt="Power test pads — tests for wireless-gadgeteer-extender v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-gadgeteer-extender-v19-reader-compact-mounts" src="/images/extensions/wireless-gadgeteer-extender/guides/reader-compact-mounts.png" title="Mounting holes — mounts" alt="Mounting holes — mounts for wireless-gadgeteer-extender v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

The annotated source references above cover the selected revision. Complete installation wiring and review in the actual page viewer remain open.

### wireless-gadgeteer-extender — selected connector contact map

The following is saved PCB pad/net readback. It proves neither physical continuity nor mating orientation/current capacity. Same-numbered duplicate lands are collapsed in this electrical table. Physical connector-population and mating qualification remains open. `NC` is explicitly unconnected, not a supported spare.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Connector | Contact | Saved function/net |
| --- | --- | --- |
| J1 — GADGETEER Y | 1 | `+3V3` |
| J1 — GADGETEER Y | 2 | `/J1_5V` |
| J1 — GADGETEER Y | 3 | `/CH1_LINE` |
| J1 — GADGETEER Y | 4 | `/CH2_LINE` |
| J1 — GADGETEER Y | 5 | `/CH3_LINE` |
| J1 — GADGETEER Y | 6 | `/CH4_LINE` |
| J1 — GADGETEER Y | 7 | `/CH5_LINE` |
| J1 — GADGETEER Y | 8 | `/CH6_LINE` |
| J1 — GADGETEER Y | 9 | `/CH7_LINE` |
| J1 — GADGETEER Y | 10 | `GND` |
| J2 — EXT 5V IN | 1 | `/EXT5V_IN` |
| J2 — EXT 5V IN | 2 | `GND` |
| J3 — SWD VREF IO CLK RST GND | 1 | `+3V3` |
| J3 — SWD VREF IO CLK RST GND | 2 | `/SWDIO` |
| J3 — SWD VREF IO CLK RST GND | 3 | `/SWDCLK` |
| J3 — SWD VREF IO CLK RST GND | 4 | `/NRST` |
| J3 — SWD VREF IO CLK RST GND | 5 | `GND` |

</div>

</details>


### Links, indicators and controls

The table identifies this selected board's actual links and indicators. Default population and complete circuit meaning must be reconciled before cut/bridge instructions are accepted. Indicator labels describe observed circuit signals, not physical load or safety qualification.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

| Item | Selected label | Contact nets |
| --- | --- | --- |
| SW1 | PAIR | 1=/PAIR_N; 2=GND |
| LED1 | LINK green | 1=GND; 2=LED_LED1_DISABLE |
| JP12 | CUT TO DISABLE LED1 | 1=LED_LED1_DISABLE; 2=/LED_LINK_A |
| JP5 | DIR3 | 1=/DIR3; 2=GND |
| JP9 | DIR7 | 1=/DIR7; 2=GND |
| JP1 | LDO>3V3 | 1=/LDO_3V3; 2=+3V3 |
| JP3 | DIR1 | 1=/DIR1; 2=GND |
| JP11 | CUT TO DISABLE LED2 | 1=LED_LED2_DISABLE; 2=/LED_FAULT_A |
| LED2 | FAULT red | 1=GND; 2=LED_LED2_DISABLE |
| JP7 | DIR5 | 1=/DIR5; 2=GND |
| JP6 | DIR4 | 1=/DIR4; 2=GND |
| JP4 | DIR2 | 1=/DIR2; 2=GND |
| JP2 | SAFE LOW\|HIGH | 1=GND; 2=/BIAS; 3=+3V3 |
| JP8 | DIR6 | 1=/DIR6; 2=GND |
| JP10 | 5V>J1.2 | 1=/EXT5V_D; 2=/J1_5V |

</details>


Selected active components: `U2 TPS70933DBVR`; `U1 MDBT42Q-512KV2`. Part identities do not establish an assembled rating.



## Practical use with Smoothieboard V2 Prime

The intended example is a remote ordinary switch and indicator under a bounded update/timeout contract. No complete functional example exists without matched endpoint firmware images.

**Pending:** the complete autorouted Prime → board → peripheral diagram has not been composed or accepted. A connector contact map or standalone board illustration does not satisfy it. Do not transfer a host allocation between Prime revisions without matching source evidence.

1. Identify both endpoint firmware images and complementary channel-direction maps before wiring either host.
2. Choose a reviewed power mode at each endpoint and verify J1/J2 source ownership with all power removed.
3. Assign only low-rate, non-safety host functions to the selected channel contacts.
4. Verify peer mismatch, disconnect, radio interference, reboot and stale-data behavior before using any output.

## Smoothieware configuration and use

No matching endpoint firmware/protocol and V2 integration were verified for v19. Generic GPIO settings cannot implement a sampled wireless link or its fail-safe policy. If required radio/remote-I/O support is absent, email **wolf.arthur@gamil.com**.

The V2 implementation reviewed for this documentation is pinned to SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`; it is not proven to be the installed controller firmware. Source support, configured operation and physical/system qualification are separate checks. No arbitrary pin, driver setting or command is substituted for a missing contract.

## Sources and revision notes

- [Selected v19 source directory](https://github.com/arthurwolf/extension-boards/tree/main/src/wireless-gadgeteer-extender/attempt/versions/v19)
- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/wireless-gadgeteer-extender/specs.md) — retain older revision boundaries.
- [Design discussion](https://github.com/arthurwolf/extension-boards/blob/main/src/wireless-gadgeteer-extender/design.md)
- [All extension boards](/extension-boards)

The selected-revision engineering repository was unavailable to anonymous readers when checked. Its source links are retained for provenance; an accessible matching source release has not been verified. Firmware and historical-board links are separate sources.

**Remaining board-specific issue:** Paired firmware/protocol, direction maps, latency/timeout/stale-data behavior, power ownership and radio qualification.

<details markdown="1">
<summary>Supplementary board views and engineering history</summary>

{% include _includes/extension-board-visuals.html slug="wireless-gadgeteer-extender" %}

These gallery views are supplementary; they are not the two required instructional diagrams. Their captions must preserve any older/different revision or population. Iteration logs, trial results and future upgrade proposals remain engineering history rather than operating instructions.

</details>
