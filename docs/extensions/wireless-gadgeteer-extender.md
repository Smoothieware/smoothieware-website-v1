---
layout: default
title: "Wireless gadgeteer extender"
permalink: /extensions/wireless-gadgeteer-extender
---

# Wireless gadgeteer extender

This board uses paired nRF52832 radio endpoints to sample and reproduce seven deliberately directed digital channels. It is for slow, non-safety I/O. It is not a transparent cable replacement or a deterministic motor/step link.

## How it works

The MDBT42Q-512KV2 module combines MCU and radio. J1 contacts 3–9 connect channels 1–7. Each endpoint must know whether each channel is an input or output; the peer must use a complementary configuration. J3 programs/debugs the module and J2 is an external 5 V inlet with a local TPS70933 supply path.

## Power, signal direction and limits

Channel directions, power source, update rate, radio pairing and timeout values are set by your endpoint firmware, not by connector labels. Never let both peers drive the same logical channel, and never join host and external supply sources. Give boot, link loss, stale or replayed packets and brownout safe output states. Do not use the link for emergency stop, step pulses or any safety function.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Orange: 5 V supply.
- Near-black: Circuit ground.
- Dark grey: Other labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

Start with the overview, then use all focused sheets for exact contacts, controls and links. Check continuity on your board.

{% include _includes/extension-instruction-diagram.html id="wireless-gadgeteer-extender-v19-reader-compact-overview" src="/images/extensions/wireless-gadgeteer-extender/guides/reader-compact-overview.png" title="Wireless channel extender — overview" alt="Wireless channel extender — overview" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-gadgeteer-extender-v19-reader-compact-host-1-5" src="/images/extensions/wireless-gadgeteer-extender/guides/reader-compact-host-1-5-central-pills.png" title="J1 · Seven-channel interface — host 1 5" alt="J1 · Seven-channel interface — host 1 5" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-gadgeteer-extender-v19-reader-compact-host-6-10" src="/images/extensions/wireless-gadgeteer-extender/guides/reader-compact-host-6-10-central-pills.png" title="J1 · Seven-channel interface — host 6 10" alt="J1 · Seven-channel interface — host 6 10" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-gadgeteer-extender-v19-reader-compact-external-1-2" src="/images/extensions/wireless-gadgeteer-extender/guides/reader-compact-external-1-2-central-pills.png" title="J2 · External5V input — external 1 2" alt="J2 · External5V input — external 1 2" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-gadgeteer-extender-v19-reader-compact-swd-1-5" src="/images/extensions/wireless-gadgeteer-extender/guides/reader-compact-swd-1-5-central-pills.png" title="J3 · MCU programming — swd 1 5" alt="J3 · MCU programming — swd 1 5" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-gadgeteer-extender-v19-reader-compact-module" src="/images/extensions/wireless-gadgeteer-extender/guides/reader-compact-module.png" title="Wireless channel module — module" alt="Wireless channel module — module" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-gadgeteer-extender-v19-reader-compact-signals" src="/images/extensions/wireless-gadgeteer-extender/guides/reader-compact-signals.png" title="Channel resistors and bias — signals" alt="Channel resistors and bias — signals" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-gadgeteer-extender-v19-reader-compact-bias" src="/images/extensions/wireless-gadgeteer-extender/guides/reader-compact-bias.png" title="Shared bias selector — bias" alt="Shared bias selector — bias" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-gadgeteer-extender-v19-reader-compact-power" src="/images/extensions/wireless-gadgeteer-extender/guides/reader-compact-power.png" title="External regulator link — power" alt="External regulator link — power" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-gadgeteer-extender-v19-reader-compact-5v-feed" src="/images/extensions/wireless-gadgeteer-extender/guides/reader-compact-5v-feed-underside-caption.png" title="Optional5V outward feed — 5v feed" alt="Optional5V outward feed — 5v feed" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-gadgeteer-extender-v19-reader-compact-button" src="/images/extensions/wireless-gadgeteer-extender/guides/reader-compact-button.png" title="Pairing-labelled button — button" alt="Pairing-labelled button — button" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-gadgeteer-extender-v19-reader-compact-directions1" src="/images/extensions/wireless-gadgeteer-extender/guides/reader-compact-directions1.png" title="Direction request links — directions1" alt="Direction request links — directions1" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-gadgeteer-extender-v19-reader-compact-directions5" src="/images/extensions/wireless-gadgeteer-extender/guides/reader-compact-directions5.png" title="Direction request links — directions5" alt="Direction request links — directions5" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-gadgeteer-extender-v19-reader-compact-led-LED1" src="/images/extensions/wireless-gadgeteer-extender/guides/reader-compact-led-LED1.png" title="Link indicator — led LED1" alt="Link indicator — led LED1" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-gadgeteer-extender-v19-reader-compact-led-LED2" src="/images/extensions/wireless-gadgeteer-extender/guides/reader-compact-led-LED2.png" title="Fault indicator — led LED2" alt="Fault indicator — led LED2" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-gadgeteer-extender-v19-reader-compact-tests" src="/images/extensions/wireless-gadgeteer-extender/guides/reader-compact-tests-underside-caption.png" title="Power test pads — tests" alt="Power test pads — tests" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="wireless-gadgeteer-extender-v19-reader-compact-mounts" src="/images/extensions/wireless-gadgeteer-extender/guides/reader-compact-mounts.png" title="Mounting holes — mounts" alt="Mounting holes — mounts" caption="Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

### Connector contact map

Same-numbered duplicate lands are collapsed in this electrical table. `NC` is explicitly unconnected, not a spare. The table does not show mating orientation or current capacity.

<details markdown="1">
<summary>Contact list</summary>

<div class="extension-contact-table" role="region" aria-label="Contact list; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Connector | Contact | Function/net |
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

The table identifies the links and indicators on the board. Indicator labels describe circuit signals, not physical load.

<details markdown="1">
<summary>Link and indicator list</summary>

| Item | Label | Contact nets |
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

Active components: `U2 TPS70933DBVR`; `U1 MDBT42Q-512KV2`.

## Practical use with Smoothieboard V2 Prime

A typical use is a remote ordinary switch and indicator with a bounded update and timeout behaviour. It needs matched endpoint firmware images, which are not supplied.

Check host pin allocations against your own Prime before moving them between boards.

1. Identify both endpoint firmware images and complementary channel-direction maps before wiring either host.
2. Choose a power mode at each endpoint and verify J1/J2 source ownership with all power removed.
3. Assign only low-rate, non-safety host functions to the channel contacts.
4. Verify peer mismatch, disconnect, radio interference, reboot and stale-data behavior before using any output.

## Smoothieware configuration and use

No endpoint firmware, radio protocol or Smoothieware integration is supplied. Generic GPIO settings cannot implement a sampled wireless link or its fail-safe policy.

## Sources

- [Source files](https://github.com/arthurwolf/extension-boards/tree/main/src/wireless-gadgeteer-extender/attempt/versions/v19)
- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/wireless-gadgeteer-extender/specs.md)
- [Design discussion](https://github.com/arthurwolf/extension-boards/blob/main/src/wireless-gadgeteer-extender/design.md)
- [All extension boards](/extension-boards)

<details markdown="1">
<summary>Additional board views</summary>

{% include _includes/extension-board-visuals.html slug="wireless-gadgeteer-extender" %}

</details>
