---
layout: default
title: "Differential SPI signal extender"
permalink: /extensions/differential-spi-signal-extender
---

# Differential SPI signal extender

This pair extends one SPI peripheral connection using four fixed-direction differential channels. It is intended for one named low-rate peripheral, such as a compatible thermocouple interface. It is not Ethernet, a shared serial network or a protocol converter.

This guide selects **v18** from the existing abstract-export record. It is an engineering candidate, not a fabricated, released or hardware-qualified product. Historical and older revision prose does not establish the illustrated revision's behavior.

## How it works

HOST sends SCK, MOSI and CS to REMOTE, while REMOTE returns MISO. Each direction has a separate balanced pair and THVD1451 physical interface. An independent two-wire 12 V path powers the remote regulators; the RJ45 carries data pairs only. The peripheral keeps its native transaction length and clock edges. HOST U5 releases its MISO output when CS is high. REMOTE U5 instead combines received CS with MISO so its differential return is driven high while CS is high; that remote stage is not tri-state. Clock phase, propagation delay and maximum rate still require analysis.

## Power, signals and limits

HOST J1.1 uses host 3.3 V, .2 is NC, .6 CS, .7 MOSI, .8 MISO, .9 SCK and .10 ground. REMOTE J1.1/.2 source local 3.3 V/5 V to the peripheral. The selected link has separate 12 V in/out terminals. The eight RJ45 contacts all carry signal pairs; none is a power or ground contact. A separate power-and-return cable is required, and the shield is not its signal return. Do not plug REMOTE J1 into Prime: its contacts 1 and 2 are supply outputs, unlike HOST J1. The root contract targets 10.8–13.2 V, 25 m at 500 kHz, and 100 mA per remote peripheral rail; these remain unqualified targets, not measured v18 operation. The link is common-ground rather than galvanically isolated.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the source contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Orange: 5 V supply.
- Green: Signal — use the printed function label.
- Near-black: Circuit ground.
- Yellow: Power feed — check the stated voltage and current limits.
- Grey: Not routed in this board revision.
- Dark grey: Other source-labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

The emitter and receiver have separate source-bound references below. Identify the assembly before using any pin or link instructions. Complete Prime installation wiring and actual page/viewer acceptance remain open.

### Dse-host assembly

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-host-reader-compact-overview" src="/images/extensions/differential-spi-signal-extender/guides/dse-host/reader-compact-overview.svg" title="SPI extender host" alt="SPI extender host on the dse-host assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-host-reader-compact-spi-1-5" src="/images/extensions/differential-spi-signal-extender/guides/dse-host/reader-compact-spi-1-5-central-pills.svg" title="J1 · SPI interface" alt="J1 · SPI interface on the dse-host assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-host-reader-compact-spi-6-10" src="/images/extensions/differential-spi-signal-extender/guides/dse-host/reader-compact-spi-6-10-central-pills.svg" title="J1 · SPI interface" alt="J1 · SPI interface on the dse-host assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-host-reader-compact-link-1-5" src="/images/extensions/differential-spi-signal-extender/guides/dse-host/reader-compact-link-1-5-central-pills.svg" title="J2 · Differential link" alt="J2 · Differential link on the dse-host assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-host-reader-compact-link-6-SH" src="/images/extensions/differential-spi-signal-extender/guides/dse-host/reader-compact-link-6-SH-central-pills.svg" title="J2 · Differential link" alt="J2 · Differential link on the dse-host assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-host-reader-compact-12v-in-1-2" src="/images/extensions/differential-spi-signal-extender/guides/dse-host/reader-compact-12v-in-1-2-central-pills.svg" title="J3 · 12V power input" alt="J3 · 12V power input on the dse-host assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-host-reader-compact-12v-out-1-2" src="/images/extensions/differential-spi-signal-extender/guides/dse-host/reader-compact-12v-out-1-2-central-pills.svg" title="J4 · 12V power output" alt="J4 · 12V power output on the dse-host assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-host-reader-compact-signals" src="/images/extensions/differential-spi-signal-extender/guides/dse-host/reader-compact-signals.svg" title="Differential signal directions" alt="Differential signal directions on the dse-host assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-host-reader-compact-termination" src="/images/extensions/differential-spi-signal-extender/guides/dse-host/reader-compact-termination.svg" title="Receive-end termination" alt="Receive-end termination on the dse-host assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-host-reader-compact-miso" src="/images/extensions/differential-spi-signal-extender/guides/dse-host/reader-compact-miso.svg" title="Host MISO bus release" alt="Host MISO bus release on the dse-host assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-host-reader-compact-power" src="/images/extensions/differential-spi-signal-extender/guides/dse-host/reader-compact-power-underside-caption.svg" title="12V entry and outward feed" alt="12V entry and outward feed on the dse-host assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-host-reader-compact-status" src="/images/extensions/differential-spi-signal-extender/guides/dse-host/reader-compact-status.svg" title="Optional power-status return" alt="Optional power-status return on the dse-host assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-host-reader-compact-shield" src="/images/extensions/differential-spi-signal-extender/guides/dse-host/reader-compact-shield.svg" title="Cable shield bond" alt="Cable shield bond on the dse-host assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-host-reader-compact-power-led" src="/images/extensions/differential-spi-signal-extender/guides/dse-host/reader-compact-power-led.svg" title="Local power indicator" alt="Local power indicator on the dse-host assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-host-reader-compact-indicator-DF2" src="/images/extensions/differential-spi-signal-extender/guides/dse-host/reader-compact-indicator-DF2-underside-caption.svg" title="Supply fault indicator" alt="Supply fault indicator on the dse-host assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-host-reader-compact-indicator-DF5" src="/images/extensions/differential-spi-signal-extender/guides/dse-host/reader-compact-indicator-DF5-underside-caption.svg" title="Overvoltage indicator" alt="Overvoltage indicator on the dse-host assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-host-reader-compact-indicator-DF8" src="/images/extensions/differential-spi-signal-extender/guides/dse-host/reader-compact-indicator-DF8-underside-caption.svg" title="Reverse-input indicator" alt="Reverse-input indicator on the dse-host assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-host-reader-compact-tests1" src="/images/extensions/differential-spi-signal-extender/guides/dse-host/reader-compact-tests1-underside-caption.svg" title="Supply and SPI test pads" alt="Supply and SPI test pads on the dse-host assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-host-reader-compact-tests6" src="/images/extensions/differential-spi-signal-extender/guides/dse-host/reader-compact-tests6-underside-caption.svg" title="Supply and SPI test pads" alt="Supply and SPI test pads on the dse-host assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-host-reader-compact-mounts" src="/images/extensions/differential-spi-signal-extender/guides/dse-host/reader-compact-mounts.svg" title="Mounts and cable ties" alt="Mounts and cable ties on the dse-host assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-host-reader-compact-fiducials" src="/images/extensions/differential-spi-signal-extender/guides/dse-host/reader-compact-fiducials.svg" title="Assembly fiducials" alt="Assembly fiducials on the dse-host assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

### Dse-remote assembly

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-remote-reader-compact-overview" src="/images/extensions/differential-spi-signal-extender/guides/dse-remote/reader-compact-overview.svg" title="SPI extender remote" alt="SPI extender remote on the dse-remote assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-remote-reader-compact-spi-1-5" src="/images/extensions/differential-spi-signal-extender/guides/dse-remote/reader-compact-spi-1-5-central-pills.svg" title="J1 · SPI interface" alt="J1 · SPI interface on the dse-remote assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-remote-reader-compact-spi-6-10" src="/images/extensions/differential-spi-signal-extender/guides/dse-remote/reader-compact-spi-6-10-central-pills.svg" title="J1 · SPI interface" alt="J1 · SPI interface on the dse-remote assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-remote-reader-compact-link-1-5" src="/images/extensions/differential-spi-signal-extender/guides/dse-remote/reader-compact-link-1-5-central-pills.svg" title="J2 · Differential link" alt="J2 · Differential link on the dse-remote assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-remote-reader-compact-link-6-SH" src="/images/extensions/differential-spi-signal-extender/guides/dse-remote/reader-compact-link-6-SH-central-pills.svg" title="J2 · Differential link" alt="J2 · Differential link on the dse-remote assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-remote-reader-compact-12v-in-1-2" src="/images/extensions/differential-spi-signal-extender/guides/dse-remote/reader-compact-12v-in-1-2-central-pills.svg" title="J3 · 12V power input" alt="J3 · 12V power input on the dse-remote assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-remote-reader-compact-signals" src="/images/extensions/differential-spi-signal-extender/guides/dse-remote/reader-compact-signals.svg" title="Differential signal directions" alt="Differential signal directions on the dse-remote assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-remote-reader-compact-termination" src="/images/extensions/differential-spi-signal-extender/guides/dse-remote/reader-compact-termination.svg" title="Receive-end termination" alt="Receive-end termination on the dse-remote assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-remote-reader-compact-miso" src="/images/extensions/differential-spi-signal-extender/guides/dse-remote/reader-compact-miso.svg" title="Remote MISO idle encoding" alt="Remote MISO idle encoding on the dse-remote assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-remote-reader-compact-power" src="/images/extensions/differential-spi-signal-extender/guides/dse-remote/reader-compact-power-underside-caption.svg" title="12V input and local supplies" alt="12V input and local supplies on the dse-remote assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-remote-reader-compact-peripheral-power" src="/images/extensions/differential-spi-signal-extender/guides/dse-remote/reader-compact-peripheral-power-underside-caption.svg" title="Peripheral5V output stage" alt="Peripheral5V output stage on the dse-remote assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-remote-reader-compact-shield" src="/images/extensions/differential-spi-signal-extender/guides/dse-remote/reader-compact-shield.svg" title="Cable shield bond" alt="Cable shield bond on the dse-remote assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-remote-reader-compact-power-led" src="/images/extensions/differential-spi-signal-extender/guides/dse-remote/reader-compact-power-led.svg" title="Local power indicator" alt="Local power indicator on the dse-remote assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-remote-reader-compact-indicator-DF2" src="/images/extensions/differential-spi-signal-extender/guides/dse-remote/reader-compact-indicator-DF2-underside-caption.svg" title="Supply fault indicator" alt="Supply fault indicator on the dse-remote assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-remote-reader-compact-indicator-DF5" src="/images/extensions/differential-spi-signal-extender/guides/dse-remote/reader-compact-indicator-DF5-underside-caption.svg" title="Overvoltage indicator" alt="Overvoltage indicator on the dse-remote assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-remote-reader-compact-indicator-DF8" src="/images/extensions/differential-spi-signal-extender/guides/dse-remote/reader-compact-indicator-DF8-underside-caption.svg" title="Reverse-input indicator" alt="Reverse-input indicator on the dse-remote assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-remote-reader-compact-indicator-DE2" src="/images/extensions/differential-spi-signal-extender/guides/dse-remote/reader-compact-indicator-DE2-underside-caption.svg" title="12V entry fault indicator" alt="12V entry fault indicator on the dse-remote assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-remote-reader-compact-tests1" src="/images/extensions/differential-spi-signal-extender/guides/dse-remote/reader-compact-tests1-underside-caption.svg" title="Supply and SPI test pads" alt="Supply and SPI test pads on the dse-remote assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-remote-reader-compact-tests6" src="/images/extensions/differential-spi-signal-extender/guides/dse-remote/reader-compact-tests6-underside-caption.svg" title="Supply and SPI test pads" alt="Supply and SPI test pads on the dse-remote assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-remote-reader-compact-mounts" src="/images/extensions/differential-spi-signal-extender/guides/dse-remote/reader-compact-mounts.svg" title="Mounts and cable ties" alt="Mounts and cable ties on the dse-remote assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="differential-spi-signal-extender-v18-dse-remote-reader-compact-fiducials" src="/images/extensions/differential-spi-signal-extender/guides/dse-remote/reader-compact-fiducials.svg" title="Assembly fiducials" alt="Assembly fiducials on the dse-remote assembly, v18" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

The annotated board-reference sheets above describe the selected source revision; the contact table below is a companion source aid. Actual desktop and narrow-view page/viewer acceptance remains open. Follow the wiring section for the connection procedure and its remaining installation limitations.

### dse-host — saved connector contacts

Contact numbering below is the selected PCB's pad numbering, viewed using the final board-reference drawing. Same-numbered duplicate lands are collapsed in this electrical table. Mechanical unnumbered pads are omitted here. Physical connector-population and mating qualification remains open. `NC` means unconnected in this saved source, not a spare supported function. Named nets alone do not establish direction; use the signal-path explanation above.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Connector | Contact(s) | Saved-source function/net |
| --- | --- | --- |
| J4 — 12V LINK OUT | 1 | `12V_OUT` |
| J4 — 12V LINK OUT | 2 | `GND_HOST` |
| J2 — LINK CAT5E | 1 | `LNK_SCK_POS` |
| J2 — LINK CAT5E | 2 | `LNK_SCK_NEG` |
| J2 — LINK CAT5E | 3 | `LNK_CS_POS` |
| J2 — LINK CAT5E | 4 | `LNK_MOSI_POS` |
| J2 — LINK CAT5E | 5 | `LNK_MOSI_NEG` |
| J2 — LINK CAT5E | 6 | `LNK_CS_NEG` |
| J2 — LINK CAT5E | 7 | `LNK_MISO_POS` |
| J2 — LINK CAT5E | 8 | `LNK_MISO_NEG` |
| J2 — LINK CAT5E | SH | `SHIELD` |
| J1 — S FROM SMOOTHIE | 1 | `3V3_HOST` |
| J1 — S FROM SMOOTHIE | 3 | `S_STATUS_N` |
| J1 — S FROM SMOOTHIE | 6 | `S_CS_N` |
| J1 — S FROM SMOOTHIE | 7 | `S_MOSI` |
| J1 — S FROM SMOOTHIE | 8 | `S_MISO` |
| J1 — S FROM SMOOTHIE | 9 | `S_SCK` |
| J1 — S FROM SMOOTHIE | 10 | `GND_HOST` |
| J1 | 2, 4, 5 | NC |
| J3 — 12V DC IN | 1 | `12V_IN_RAW` |
| J3 — 12V DC IN | 2 | `GND_HOST` |

</div>

</details>


### Links, controls and indicators

The selected footprint values identify the intended control or indication. A cut-to-disable LED link affects indication, not the protected circuit's electrical qualification. Link population, default state and any reused older labels still need schematic/BOM reconciliation before instructions to cut or bridge are accepted.

| Item | Selected source label | Contact nets / observation |
| --- | --- | --- |
| JP1 | CUT TO DISABLE D3 | 1 = LED_D3_DISABLE; 2 = LED_A |
| D3 | 12V POWER | 1 = GND_HOST; 2 = LED_D3_DISABLE |

### dse-remote — saved connector contacts

Contact numbering below is the selected PCB's pad numbering, viewed using the final board-reference drawing. Same-numbered duplicate lands are collapsed in this electrical table. Mechanical unnumbered pads are omitted here. Physical connector-population and mating qualification remains open. `NC` means unconnected in this saved source, not a spare supported function. Named nets alone do not establish direction; use the signal-path explanation above.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

| Connector | Contact(s) | Saved-source function/net |
| --- | --- | --- |
| J2 — LINK CAT5E | 1 | `LNK_SCK_POS` |
| J2 — LINK CAT5E | 2 | `LNK_SCK_NEG` |
| J2 — LINK CAT5E | 3 | `LNK_CS_POS` |
| J2 — LINK CAT5E | 4 | `LNK_MOSI_POS` |
| J2 — LINK CAT5E | 5 | `LNK_MOSI_NEG` |
| J2 — LINK CAT5E | 6 | `LNK_CS_NEG` |
| J2 — LINK CAT5E | 7 | `LNK_MISO_POS` |
| J2 — LINK CAT5E | 8 | `LNK_MISO_NEG` |
| J2 — LINK CAT5E | SH | `SHIELD` |
| J1 — S TO PERIPHERAL | 1 | `3V3_REMOTE` |
| J1 — S TO PERIPHERAL | 2 | `5V_S` |
| J1 — S TO PERIPHERAL | 6 | `S_CS_N` |
| J1 — S TO PERIPHERAL | 7 | `S_MOSI` |
| J1 — S TO PERIPHERAL | 8 | `S_MISO` |
| J1 — S TO PERIPHERAL | 9 | `S_SCK` |
| J1 — S TO PERIPHERAL | 10 | `GND_REMOTE` |
| J1 | 3, 4, 5 | NC |
| J3 — 12V LINK IN | 1 | `12V_IN_RAW` |
| J3 — 12V LINK IN | 2 | `GND_REMOTE` |

</details>


### Links, controls and indicators

The selected footprint values identify the intended control or indication. A cut-to-disable LED link affects indication, not the protected circuit's electrical qualification. Link population, default state and any reused older labels still need schematic/BOM reconciliation before instructions to cut or bridge are accepted.

| Item | Selected source label | Contact nets / observation |
| --- | --- | --- |
| D3 | 3V3 POWER | 1 = GND_REMOTE; 2 = LED_D3_DISABLE |
| JP1 | CUT TO DISABLE D3 | 1 = LED_D3_DISABLE; 2 = LED_A |

### dse-host — additional selected solder links

These are distinct physical solder-link footprints, including links whose references begin `SJ` rather than `JP`. Their labels and nets must be included in the annotated reference; none is silently omitted because of its reference prefix.

| Link | Selected label | Pad nets |
| --- | --- | --- |
| SJ3 | LINK_12V | 1=12V_LINK; 2=12V_OUT |
| SJ1 | STATUS_EN | 1=STAT_D; 2=STAT_J |
| SJ2 | SHIELD_BOND | 1=SHIELD; 2=GND_HOST |
| SJF1 | CUT FAULT LED | 1=/P_spi_host_FLT_R; 2=/P_spi_host_FLT_A |
| SJF2 | CUT OV LED | 1=/P_spi_host_OV_R; 2=/P_spi_host_OV_A |
| SJF3 | CUT REVERSE LED | 1=/P_spi_host_REV_R; 2=/P_spi_host_REV_A |

### dse-remote — additional selected solder links

These are distinct physical solder-link footprints, including links whose references begin `SJ` rather than `JP`. Their labels and nets must be included in the annotated reference; none is silently omitted because of its reference prefix.

| Link | Selected label | Pad nets |
| --- | --- | --- |
| SJ1 | SHIELD_BOND | 1=SHIELD; 2=GND_REMOTE |
| SJF1 | CUT FAULT LED | 1=/P_spi_remote_FLT_R; 2=/P_spi_remote_FLT_A |
| SJF3 | CUT REVERSE LED | 1=/P_spi_remote_REV_R; 2=/P_spi_remote_REV_A |
| SJF2 | CUT OV LED | 1=/P_spi_remote_OV_R; 2=/P_spi_remote_OV_A |
| SJE1 | CUT FAULT LED | 1=/P_spi_remote_entry_FLT_R; 2=/P_spi_remote_entry_FLT_A |

## Practical use with Smoothieboard V2 Prime

The intended example is reading a MAX31855-class peripheral. A genuine MAX31855 V2 driver exists, but exact chip revision, cable timing and host SPI selection still have to match this assembly.

**Wiring remains incomplete:** the source-backed candidates below do not yet provide an accepted, complete host → board → peripheral installation. Any candidate P12 Prime2590 allocation below is limited to that revision and must not be copied to a different Prime revision. Its rail contacts are 1 = limited 3.3 V, 2 = limited 5 V, 10 = ground; verify the actual unshrouded host header and cable orientation before applying power.

1. With power off, connect HOST to the named Prime SPI socket only after confirming its contact map and firmware bus. J1 contacts 6–9 must remain CS/MOSI/MISO/SCK.
2. Connect the data jacks with the specified straight-through pair-preserving cable; do not connect Ethernet equipment.
3. Connect HOST J3 to the reviewed 12 V supply and HOST J4 to REMOTE J3 using a separate correctly polarized power/return cable. Do not substitute Gadgeteer 5 V.
4. Connect REMOTE J1 to the chosen peripheral, respecting its local supply selection and signal levels. Review CS timing and return propagation before selecting a clock speed.

## Smoothieware use

### v18 MAX31855 monitor software contract
The v18 pair is transparent SPI transport; it needs no accessory register driver. For a named source-qualified3.3 V MAX31855 peripheral, the existing V2 driver is a real monitor implementation. This does not establish a working25 m/500 kHz link: the parser fixes mode0 at 1 MHz and exposes no lower-frequency or chip-select delay setting.

The source-numbered candidate is Prime GE/J36.1 → host J1.1 3V3_HOST, GE.6 PD15 → host J1.6 S_CS_N, GE.7/.8/.9 SPI1 → host J1.7/.8/.9 MOSI/MISO/SCK and GE.10 ground. The host status contact3 is an input/status signal, not an extra driver. At the remote J1, a qualified MAX31855's3.3 V/GND/CS/DO/SCK correspond to 1/10/6/8/9; remote MOSI7 is unused by that sensor. This names electrical functions, not a qualified module or complete physical/power cable. Respect separate remote supply/return and paired-cable power/enable/bias requirements.

Once the entire link and chosen sensor are independently qualified at the fixed driver timing, the software monitor is:

```ini
[temperature control]
extended_tc.enable = true
extended_tc.sensor = max31855
extended_tc.spi_channel = 0
extended_tc.spi_select_pin = PD15
extended_tc.readings_per_second = 20
extended_tc.heater_pin = nc
extended_tc.designator = XT
extended_tc.tool_id = 251
```

Reserve SPI0/channel0 and PD15 for this use and do not share them with an incompatible SPI format. Send `M105` to observe XT. Plain `M305` reports sensor configuration/raw diagnostics across configured controllers; do not use an S form as a read-only selector. The invalid-reading sentinel may be-100 and is not a measured-100degree temperature. Polling frequency20 Hz is not SPI clock. No heater is driven by this instance. Do not energize an unresolved link simply because this configuration parses. If the fixed timing cannot meet the selected link/peripheral contract, a matching driver/timing implementation is required; email **wolf.arthur@gamil.com**.

These instructions identify source behavior at SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`; they do not identify the installed build or prove target execution. Reserve every listed pin and command in the complete configuration. Merge entries into existing sections rather than duplicating sections. These software instructions do not verify powered hardware or provide a complete wiring diagram.

Implementation references: [pinned MAX31855 implementation](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/temperaturecontrol/max31855.cpp#L25-L68).

## Sources and revision notes

The selected-revision engineering repository was unavailable to anonymous readers when checked. Its source links are retained for provenance; an accessible matching source release has not been verified. Firmware and historical-board links are separate sources.

- [Selected v18 source directory](https://github.com/arthurwolf/extension-boards/tree/main/src/differential-spi-signal-extender/attempt/versions/v18)
- [Design specification](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-spi-signal-extender/specs.md) — historical design intent where it names an older revision.
- [Design discussion](https://github.com/arthurwolf/extension-boards/blob/main/src/differential-spi-signal-extender/design.md)
- [All extension boards](/extension-boards)

Upstream source-link availability has **not** been verified for publication.

**Remaining board-specific uncertainty:** Named peripheral revision, exact Prime SPI bus/CS mapping, complete temperature configuration and timing/power qualification remain open.

<details markdown="1">
<summary>Additional board views and engineering history</summary>

Selected active-component identities: `U4 THVD1451D`; `U2 THVD1451D`; `U3 THVD1451D`; `U5 SN74LVC1G125`; `U1 THVD1451D`; `UF2 TL431BIDBZR`; `UF1 TPS26600PWPR`. These identities are not a substitute for matching datasheet limits.

Selected active-component identities: `U1 THVD1451D`; `U7 AP2112K-3.3`; `U6 AP63205WU-7`; `U4 THVD1451D`; `U3 THVD1451D`; `U2 THVD1451D`; `U5 SN74LVC1G32`; `UF1 TPS26600PWPR`; `UF2 TL431BIDBZR`; `UE1 TPS26600PWPR`. These identities are not a substitute for matching datasheet limits.

{% include _includes/extension-board-visuals.html slug="differential-spi-signal-extender" %}

The retained gallery is supplementary. It is not either required instructional diagram, and it may include older or different populations whose captions must remain explicit. Development iteration and qualification records remain engineering history rather than operating instructions.

</details>
