---
layout: default
title: "Universal panel adapter"
permalink: /extensions/universal-panel-adapter
---

# Universal panel adapter

This candidate connects selected legacy LCD/encoder panels through a local ATmega328P. The selected architecture is an active panel controller, not a passive connector converter. Use only a panel covered by a verified compatibility entry.

This guide selects **v20**, the PCB revision named by the existing abstract export. It is a prototype/design candidate; no release, physical operation or current rating is established by a clean CAD check. Older root specifications are design history where they name another revision.

The selected v20 source package retains schematic title-block revision **v04 (study)**. The package number does not rename the schematic or establish a released hardware revision.

## How it works

J1 receives a host SPI link with BUSY/KILL and chain-select signals. The local AVR drives a four-bit HD44780 interface on J3 or RRD2004-style EXP1/EXP2 on J4/J5. J6 exposes encoder/I2C-related UI contacts. J8 programs the AVR. Local panel firmware must translate host requests and user events.

## Power, signal direction and limits

J3 D0–D3 contacts 7–10 are NC because the selected parallel LCD uses D4–D7. EXP2's SD contacts are mostly NC; do not promise a panel SD slot merely because EXP2 fits. J7 is external 5 V and requires a defined source-selection/backfeed contract. Panel backlight current, contrast polarity, cable orientation and kill behavior remain unqualified.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the source contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Orange: 5 V supply.
- Green: Control signal.
- Violet: Control signal.
- Green: Signal — use the printed function label.
- Near-black: Circuit ground.
- Grey: Not routed in this board revision.
- Dark grey: Other source-labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

Start with the overview, then use all focused sheets for exact contacts, controls and links. Source footprint defaults do not prove assembled continuity.

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-overview" src="/images/extensions/universal-panel-adapter/guides/reader-compact-overview.svg" title="Universal panel adapter — overview" alt="Universal panel adapter — overview for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-j1-1-5" src="/images/extensions/universal-panel-adapter/guides/reader-compact-j1-1-5-central-pills.svg" title="J1 · Host SPI / controls — j1 1 5" alt="J1 · Host SPI / controls — j1 1 5 for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-j1-6-10" src="/images/extensions/universal-panel-adapter/guides/reader-compact-j1-6-10-central-pills.svg" title="J1 · Host SPI / controls — j1 6 10" alt="J1 · Host SPI / controls — j1 6 10 for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-j2-1-5" src="/images/extensions/universal-panel-adapter/guides/reader-compact-j2-1-5-central-pills.svg" title="J2 · Chain SPI — j2 1 5" alt="J2 · Chain SPI — j2 1 5 for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-j2-6-10" src="/images/extensions/universal-panel-adapter/guides/reader-compact-j2-6-10-central-pills.svg" title="J2 · Chain SPI — j2 6 10" alt="J2 · Chain SPI — j2 6 10 for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-j3-1-5" src="/images/extensions/universal-panel-adapter/guides/reader-compact-j3-1-5-central-pills.svg" title="J3 · HD44780 LCD — j3 1 5" alt="J3 · HD44780 LCD — j3 1 5 for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-j3-6-10" src="/images/extensions/universal-panel-adapter/guides/reader-compact-j3-6-10-central-pills.svg" title="J3 · HD44780 LCD — j3 6 10" alt="J3 · HD44780 LCD — j3 6 10 for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-j3-11-15" src="/images/extensions/universal-panel-adapter/guides/reader-compact-j3-11-15-central-pills.svg" title="J3 · HD44780 LCD — j3 11 15" alt="J3 · HD44780 LCD — j3 11 15 for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-j3-16-16" src="/images/extensions/universal-panel-adapter/guides/reader-compact-j3-16-16-central-pills.svg" title="J3 · HD44780 LCD — j3 16 16" alt="J3 · HD44780 LCD — j3 16 16 for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-j4-1-5" src="/images/extensions/universal-panel-adapter/guides/reader-compact-j4-1-5-central-pills.svg" title="J4 · RRD2004 EXP1 — j4 1 5" alt="J4 · RRD2004 EXP1 — j4 1 5 for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-j4-6-10" src="/images/extensions/universal-panel-adapter/guides/reader-compact-j4-6-10-central-pills.svg" title="J4 · RRD2004 EXP1 — j4 6 10" alt="J4 · RRD2004 EXP1 — j4 6 10 for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-j5-1-5" src="/images/extensions/universal-panel-adapter/guides/reader-compact-j5-1-5-central-pills.svg" title="J5 · RRD2004 EXP2 — j5 1 5" alt="J5 · RRD2004 EXP2 — j5 1 5 for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-j5-6-10" src="/images/extensions/universal-panel-adapter/guides/reader-compact-j5-6-10-central-pills.svg" title="J5 · RRD2004 EXP2 — j5 6 10" alt="J5 · RRD2004 EXP2 — j5 6 10 for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-j6-1-5" src="/images/extensions/universal-panel-adapter/guides/reader-compact-j6-1-5-central-pills.svg" title="J6 · Encoder / I2C UI — j6 1 5" alt="J6 · Encoder / I2C UI — j6 1 5 for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-j6-6-8" src="/images/extensions/universal-panel-adapter/guides/reader-compact-j6-6-8-central-pills.svg" title="J6 · Encoder / I2C UI — j6 6 8" alt="J6 · Encoder / I2C UI — j6 6 8 for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-j7-1-2" src="/images/extensions/universal-panel-adapter/guides/reader-compact-j7-1-2-central-pills.svg" title="J7 · External5V input — j7 1 2" alt="J7 · External5V input — j7 1 2 for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-j8-1-5" src="/images/extensions/universal-panel-adapter/guides/reader-compact-j8-1-5-central-pills.svg" title="J8 · AVR programming — j8 1 5" alt="J8 · AVR programming — j8 1 5 for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-j8-6-6" src="/images/extensions/universal-panel-adapter/guides/reader-compact-j8-6-6-central-pills.svg" title="J8 · AVR programming — j8 6 6" alt="J8 · AVR programming — j8 6 6 for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-cautions" src="/images/extensions/universal-panel-adapter/guides/reader-compact-cautions.svg" title="Native connection cautions — cautions" alt="Native connection cautions — cautions for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-controller" src="/images/extensions/universal-panel-adapter/guides/reader-compact-controller.svg" title="Panel controller — controller" alt="Panel controller — controller for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-forward" src="/images/extensions/universal-panel-adapter/guides/reader-compact-forward.svg" title="Host forward buffers — forward" alt="Host forward buffers — forward for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-return" src="/images/extensions/universal-panel-adapter/guides/reader-compact-return.svg" title="Host return buffers — return" alt="Host return buffers — return for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-lcd" src="/images/extensions/universal-panel-adapter/guides/reader-compact-lcd.svg" title="LCD data and controls — lcd" alt="LCD data and controls — lcd for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-contrast" src="/images/extensions/universal-panel-adapter/guides/reader-compact-contrast.svg" title="Contrast control — contrast" alt="Contrast control — contrast for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-encoder" src="/images/extensions/universal-panel-adapter/guides/reader-compact-encoder.svg" title="Encoder / click inputs — encoder" alt="Encoder / click inputs — encoder for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-kill" src="/images/extensions/universal-panel-adapter/guides/reader-compact-kill.svg" title="Kill switch node — kill" alt="Kill switch node — kill for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-panel-power" src="/images/extensions/universal-panel-adapter/guides/reader-compact-panel-power.svg" title="Panel supply selection — panel power" alt="Panel supply selection — panel power for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-logic-power" src="/images/extensions/universal-panel-adapter/guides/reader-compact-logic-power.svg" title="Logic supply feed — logic power" alt="Logic supply feed — logic power for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-i2c" src="/images/extensions/universal-panel-adapter/guides/reader-compact-i2c.svg" title="UI I2C pull-ups — i2c" alt="UI I2C pull-ups — i2c for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-bl15" src="/images/extensions/universal-panel-adapter/guides/reader-compact-bl15.svg" title="Backlight pin15 — bl15" alt="Backlight pin15 — bl15 for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-bl16" src="/images/extensions/universal-panel-adapter/guides/reader-compact-bl16.svg" title="Backlight pin16 — bl16" alt="Backlight pin16 — bl16 for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-chain-power" src="/images/extensions/universal-panel-adapter/guides/reader-compact-chain-power.svg" title="Chain supply links — chain power" alt="Chain supply links — chain power for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-chain-a" src="/images/extensions/universal-panel-adapter/guides/reader-compact-chain-a.svg" title="Chain select / MOSI — chain a" alt="Chain select / MOSI — chain a for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-chain-b" src="/images/extensions/universal-panel-adapter/guides/reader-compact-chain-b.svg" title="Chain MISO / clock — chain b" alt="Chain MISO / clock — chain b for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-panel-led" src="/images/extensions/universal-panel-adapter/guides/reader-compact-panel-led.svg" title="Panel supply indication — panel led" alt="Panel supply indication — panel led for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-logic-led" src="/images/extensions/universal-panel-adapter/guides/reader-compact-logic-led.svg" title="Logic supply indication — logic led" alt="Logic supply indication — logic led for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-input-power" src="/images/extensions/universal-panel-adapter/guides/reader-compact-input-power-underside-caption.svg" title="External input protection — input power" alt="External input protection — input power for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-fault" src="/images/extensions/universal-panel-adapter/guides/reader-compact-fault-underside-caption.svg" title="Fault LED and disable — fault" alt="Fault LED and disable — fault for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-ov" src="/images/extensions/universal-panel-adapter/guides/reader-compact-ov-underside-caption.svg" title="Overvoltage indication — ov" alt="Overvoltage indication — ov for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-reverse" src="/images/extensions/universal-panel-adapter/guides/reader-compact-reverse-underside-caption.svg" title="Reverse input indication — reverse" alt="Reverse input indication — reverse for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-tests0" src="/images/extensions/universal-panel-adapter/guides/reader-compact-tests0-underside-caption.svg" title="Supply / signal test pads — tests0" alt="Supply / signal test pads — tests0 for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-tests4" src="/images/extensions/universal-panel-adapter/guides/reader-compact-tests4-underside-caption.svg" title="Supply / signal test pads — tests4" alt="Supply / signal test pads — tests4 for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-tests8" src="/images/extensions/universal-panel-adapter/guides/reader-compact-tests8-underside-caption.svg" title="Supply / signal test pads — tests8" alt="Supply / signal test pads — tests8 for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-tests12" src="/images/extensions/universal-panel-adapter/guides/reader-compact-tests12-underside-caption.svg" title="Supply / signal test pads — tests12" alt="Supply / signal test pads — tests12 for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="universal-panel-adapter-v20-reader-compact-mounts" src="/images/extensions/universal-panel-adapter/guides/reader-compact-mounts.svg" title="Mounting / cable supports — mounts" alt="Mounting / cable supports — mounts for universal-panel-adapter v20" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

The annotated source references above cover the selected revision. Complete installation wiring and review in the actual page viewer remain open.

### universal-panel-adapter — selected connector contact map

The following is saved PCB pad/net readback. It proves neither physical continuity nor mating orientation/current capacity. Same-numbered duplicate lands are collapsed in this electrical table. Physical connector-population and mating qualification remains open. `NC` is explicitly unconnected, not a supported spare.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Connector | Contact | Saved function/net |
| --- | --- | --- |
| J8 — AVR ISP | 1 | `/MISO_AVR` |
| J8 — AVR ISP | 2 | `+5V_LOGIC` |
| J8 — AVR ISP | 3 | `/SCK_AVR` |
| J8 — AVR ISP | 4 | `/MOSI_AVR` |
| J8 — AVR ISP | 5 | `/RESET_N` |
| J8 — AVR ISP | 6 | `GND` |
| J3 — LCD 1x16 (HD44780) | 1 | `GND` |
| J3 — LCD 1x16 (HD44780) | 2 | `+5V_PANEL` |
| J3 — LCD 1x16 (HD44780) | 3 | `/LCD_VO` |
| J3 — LCD 1x16 (HD44780) | 4 | `/LCD_RS` |
| J3 — LCD 1x16 (HD44780) | 5 | `/LCD_RW` |
| J3 — LCD 1x16 (HD44780) | 6 | `/LCD_E` |
| J3 — LCD 1x16 (HD44780) | 11 | `/LCD_D4` |
| J3 — LCD 1x16 (HD44780) | 12 | `/LCD_D5` |
| J3 — LCD 1x16 (HD44780) | 13 | `/LCD_D6` |
| J3 — LCD 1x16 (HD44780) | 14 | `/LCD_D7` |
| J3 — LCD 1x16 (HD44780) | 15 | `/LCD_BL15` |
| J3 — LCD 1x16 (HD44780) | 16 | `/LCD_BL16` |
| J3 | 7, 8, 9, 10 | NC |
| J4 — EXP1 (RRD 2004) | 1 | `/BEEP` |
| J4 — EXP1 (RRD 2004) | 2 | `/CLICK` |
| J4 — EXP1 (RRD 2004) | 3 | `/LCD_E` |
| J4 — EXP1 (RRD 2004) | 4 | `/LCD_RS` |
| J4 — EXP1 (RRD 2004) | 5 | `/LCD_D4` |
| J4 — EXP1 (RRD 2004) | 6 | `/LCD_D5` |
| J4 — EXP1 (RRD 2004) | 7 | `/LCD_D6` |
| J4 — EXP1 (RRD 2004) | 8 | `/LCD_D7` |
| J4 — EXP1 (RRD 2004) | 9 | `GND` |
| J4 — EXP1 (RRD 2004) | 10 | `+5V_PANEL` |
| J2 — GADGETEER S CHAIN | 1 | `/CH_3V3` |
| J2 — GADGETEER S CHAIN | 2 | `/CH_5V` |
| J2 — GADGETEER S CHAIN | 6 | `/CH_CS` |
| J2 — GADGETEER S CHAIN | 7 | `/CH_MOSI` |
| J2 — GADGETEER S CHAIN | 8 | `/CH_MISO` |
| J2 — GADGETEER S CHAIN | 9 | `/CH_SCK` |
| J2 — GADGETEER S CHAIN | 10 | `GND` |
| J2 | 3, 4, 5 | NC |
| J1 — GADGETEER S HOST | 1 | `+3V3` |
| J1 — GADGETEER S HOST | 2 | `+5V_H` |
| J1 — GADGETEER S HOST | 3 | `/BUSY_H` |
| J1 — GADGETEER S HOST | 4 | `/KILL_H` |
| J1 — GADGETEER S HOST | 5 | `/CS_CHAIN_H` |
| J1 — GADGETEER S HOST | 6 | `/CS_H` |
| J1 — GADGETEER S HOST | 7 | `/MOSI_H` |
| J1 — GADGETEER S HOST | 8 | `/MISO_H` |
| J1 — GADGETEER S HOST | 9 | `/SCK_H` |
| J1 — GADGETEER S HOST | 10 | `GND` |
| J7 — 5V EXT IN | 1 | `/PWR_IN` |
| J7 — 5V EXT IN | 2 | `GND` |
| J5 — EXP2 (RRD 2004) | 3 | `/ENCB` |
| J5 — EXP2 (RRD 2004) | 5 | `/ENCA` |
| J5 — EXP2 (RRD 2004) | 8 | `/KILL_P` |
| J5 — EXP2 (RRD 2004) | 9 | `GND` |
| J5 | 1, 2, 4, 6, 7, 10 | NC |
| J6 — UI 1x8 (enc/I2C) | 1 | `+5V_PANEL` |
| J6 — UI 1x8 (enc/I2C) | 2 | `GND` |
| J6 — UI 1x8 (enc/I2C) | 3 | `/ENCA` |
| J6 — UI 1x8 (enc/I2C) | 4 | `/ENCB` |
| J6 — UI 1x8 (enc/I2C) | 5 | `/CLICK` |
| J6 — UI 1x8 (enc/I2C) | 6 | `/SDA` |
| J6 — UI 1x8 (enc/I2C) | 7 | `/SCL` |
| J6 — UI 1x8 (enc/I2C) | 8 | `/BEEP` |

</div>

</details>


### Links, indicators and controls

The table identifies this selected board's actual links and indicators. Default population and complete circuit meaning must be reconciled before cut/bridge instructions are accepted. Indicator labels describe observed circuit signals, not physical load or safety qualification.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

| Item | Selected label | Contact nets |
| --- | --- | --- |
| D4 | LED green 5V PANEL | 1=GND; 2=LED_D4_DISABLE |
| JP9 | C_MOSI | 1=/MOSI_H; 2=/CH_MOSI |
| JP2 | FEED_5V | 1=+5V_H; 2=+5V_LOGIC |
| JP1 | PANEL_PWR | 1=+5V_EXT; 2=+5V_PANEL; 3=+5V_LOGIC |
| JP4 | BL15 | 1=/LCD_BLA; 2=/LCD_BL15; 3=GND |
| JP12 | CUT TO DISABLE D4 | 1=LED_D4_DISABLE; 2=/LED_P_A |
| JP13 | CUT TO DISABLE D3 | 1=LED_D3_DISABLE; 2=/LED_L_A |
| JP10 | C_MISO | 1=/MISO_H; 2=/CH_MISO |
| JP7 | C_5V | 1=+5V_H; 2=/CH_5V |
| JP5 | BL16 | 1=GND; 2=/LCD_BL16; 3=/LCD_BLA |
| JP3 | I2C_PULLUP | 1=+5V_PANEL; 2=/I2C_PU |
| D3 | LED green 5V LOGIC | 1=GND; 2=LED_D3_DISABLE |
| JP6 | C_3V3 | 1=+3V3; 2=/CH_3V3 |
| JP8 | C_CS | 1=/CS_CHAIN_H; 2=/CH_CS |
| JP11 | C_SCK | 1=/SCK_H; 2=/CH_SCK |

</details>


Selected active components: `U1 ATmega328P-AU`; `U4 TPD4E1U06DCKR`; `U3 SN74LVC125APW`; `U2 SN74AHCT125PW`; `UF2 TL431BIDBZR`; `UF1 TPS26600PWPR`. Part identities do not establish an assembled rating.

### universal-panel-adapter — additional selected solder links

These are distinct physical solder-link footprints, including links whose references begin `SJ` rather than `JP`. Their labels and nets must be included in the annotated reference; none is silently omitted because of its reference prefix.

| Link | Selected label | Pad nets |
| --- | --- | --- |
| SJF2 | CUT OV LED | 1=/P5_OV_R; 2=/P5_OV_A |
| SJF1 | CUT FAULT LED | 1=/P5_FLT_R; 2=/P5_FLT_A |
| SJF3 | CUT REVERSE LED | 1=/P5_REV_R; 2=/P5_REV_A |



## Practical use with Smoothieboard V2 Prime

The intended example is one RRD2004-compatible display/rotary encoder panel. Its local AVR image and matching host protocol must be fixed before the guide can provide runnable control instructions.

**Pending:** the complete autorouted Prime → board → peripheral diagram has not been composed or accepted. A connector contact map or standalone board illustration does not satisfy it. Do not transfer a host allocation between Prime revisions without matching source evidence.

1. Identify the exact panel PCB/revision and both EXP cable orientations, including reversed headers on clones.
2. Choose the applicable panel connector family; do not attach multiple panel loads without a reviewed power/interface budget.
3. Allocate host SPI, CS, BUSY and KILL separately; do not omit the feedback paths from the wiring schedule.
4. Program only a verified local AVR image through J8, then verify encoder direction, click, display and kill behavior with machine loads disabled.

## Smoothieware configuration and use

### v20 panel backend and AVR image contract
This panel is not established as a direct ST7920/TM1638/MAX7219 display. The selected J1 SPI interface includes3BUSY_H/4KILL_H/5CS_CHAIN_H/6CS_H/7MOSI_H/8MISO_H/9SCK_H; the AVR translates that transport into local LCD/UI interfaces. The pinned170-file application/config snapshot contains actual display drivers, but none establishes the selected AVR image or a matching V2 UniversalAdapter backend. A legacy V1 host protocol is available, but its compatibility with the v20 AVR population is not established.

#### Original AVR application and selected-board correspondence

The original [Universal Panel Adapter project](https://github.com/wolfmanjm/universal-panel-adapter/tree/9068926646c89f1375ade245dfcc130d9c19db90) contains actual AVR application source and two prebuilt Intel HEX files, not only a Smoothieware host driver. The revision is commit `9068926646c89f1375ade245dfcc130d9c19db90` dated 2015-07-12. Its source prints `UPA V0.98` at startup. These are original application images; compatibility with the selected v20 board and a matching V2 host backend remain unverified.

#### Choose the original display population

The upstream README assigns `parallel_panel_adapter.hex` to a parallel LCD and `viki_panel_adapter.hex` to Viki/Panelolu2. The retained source defaults to `#define VIKI 1`; its parallel build branch is separate. Do not flash a Viki image merely because the current source defaults to Viki when using an HD44780 parallel display.

Both retained HEX files have valid per-record checksums, non-overlapping data addresses, and an end-of-file record. Parallel carries 4,870 program bytes at addresses 0–4,869; Viki carries 7,364 bytes at 0–7,363. These checks prove file structure, not executable behavior, source-to-binary reproducibility, clock/fuse settings, bootloader compatibility or support for the selected v20 board.

#### Selected v20 source correspondence

The selected PCB contains U1 ATmega328P-AU, Y1 labelled 16 MHz resonator, and the following saved nets. The Arduino names in the last column are the upstream source requirements, not a target-executed pin test. Confirm the ATmega/Arduino package mapping and selected programming profile before reusing the images.

| v20 physical pad | Selected net | Original application requirement |
|---|---|---|
| U1.32 / U1.1 | ENCA / ENCB | Encoder D2 / D3 |
| U1.2 | BUSY_AVR | BUSY D4 |
| U1.14/.15/.16/.17 | SS_AVR / MOSI_AVR / MISO_AVR / SCK_AVR | D10 / D11 / D12 / D13 |
| U1.13/.23/.24 | LCD_RS_A / LCD_RW_A / LCD_E_A | D9 / A0 / A1 |
| U1.9/.10/.11/.12 | LCD_D4_A / LCD_D5_A / LCD_D6_A / LCD_D7_A | D5 / D6 / D7 / D8 |
| U1.25/.26 | CLICK / BEEP_A | A2 / A3 |
| U1.27/.28 | SDA / SCL | A4 / A5 for Viki I2C; optional LED outputs in the parallel source |

The physical source has separate 3.3 V host and 5 V AVR domains. U2 is SN74AHCT125PW, U3 SN74LVC125APW; J1.3 is BUSY_H, .4 KILL_H, .5 CS_CHAIN_H, .6 CS_H, .7 MOSI_H, .8 MISO_H, .9 SCK_H, .10 GND. JP2 connects host 5 V to logic 5 V; JP1 selects the panel supply. Those paths require the existing electrical/power contract; an AVR image does not authorize arbitrary link populations, power ordering or LCD/backlight loading. The upstream code does not by itself define this board's KILL or CS-chain behavior.

#### Build and programming boundary

The original source requires Arduino, PJRC Encoder, digitalWriteFast, LiquidTWI2/Wire for Viki and LiquidCrystalFast for the parallel branch. RingBuffer and digitalWriteFast are present in the upstream tree. The repository does not pin the external library revisions. Retain the selected display branch and resolve dependencies before claiming a reproducible build.

The upstream `upload` helper targets `m328p`, Arduino serial protocol and 57,600 baud, with hard-coded Arduino 1.0.5 paths and `/dev/ttyUSB0`; it even contains trailing `// Viki Panel` shell arguments. It is provenance, not a ready-to-run v20 command. No selected v20 bootloader/fuse/provisioning record has been established here. Do not copy that helper into a programming instruction or guess fuse values.

#### Legacy protocol reference for porting

The [V1 UniversalAdapter implementation](https://github.com/Smoothieware/Smoothieware/blob/38e2cc083db0e4f768535a9bf2d32cdf104ea980/src/modules/utils/panel/panels/UniversalAdapter.cpp) identifies protocol version 0.97 or newer. Its command bytes are:

| Operation | Byte |
|---|---|
| Read status | `0x20` |
| Set cursor | `0x40` |
| Write LCD | `0x60` |
| Clear LCD | `0x80` |
| Set LEDs | `0xA0` |
| Buzzer | `0xC0` |
| Initialize adapter | `0xFE` |
| Poll | `0xFF` |

That implementation asserts chip select LOW, waits while BUSY is HIGH with 100 ms polling and poll writes, and delays 40 µs after each SPI byte. Its default clock is 500 kHz. The legacy `panel.spi_frequency`, `panel.spi_channel` and `panel.lcd universal_adapter` settings belong to the LPC-based V1 [panel implementation](https://github.com/Smoothieware/Smoothieware/blob/38e2cc083db0e4f768535a9bf2d32cdf104ea980/src/modules/utils/panel/Panel.cpp); **they are not V2 configuration instructions**. A port needs the matching AVR image and full framing, BUSY and CS-chain behavior, rather than just these command bytes.

The original AVR Universal Panel Adapter source and parallel/Viki images have been recovered, but these are not a Smoothieboard V2 display driver. In the reviewed SmoothieV2 application and configuration source at commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`, a matching UniversalAdapter host protocol implementation is absent. Existing ST7920, TM1638 and MAX7219 drivers do not implement the AVR command/response, BUSY and initialization contract. No `display.type` value in this reviewed implementation enables that original UniversalAdapter protocol. Required matching V2 firmware support is therefore absent from this pinned reviewed source: email **wolf.arthur@gamil.com** for the matching implementation. This statement is limited to that source revision and does not claim that no external fork or unpublished implementation exists.

The recovered original AVR images still require selected-v20 programming/clock/fuse, display population and physical/electrical qualification. Those open issues do not turn the recovered legacy V1 application into a V2 driver and are independent of the unsupported-device firmware-documentation fallback.

These instructions identify source behavior at SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`; they do not identify the installed build or prove target execution. Reserve every listed pin and command in the complete configuration. Merge entries into existing sections rather than duplicating sections. These software instructions do not verify powered hardware or provide a complete wiring diagram.

Implementation references: [display implementations](https://github.com/Smoothieware/SmoothieV2/tree/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/utils/display).

## Sources and revision notes

- [Selected v20 source directory](https://github.com/arthurwolf/extension-boards/tree/main/src/universal-panel-adapter/attempt/versions/v20)
- [Board specification](https://github.com/arthurwolf/extension-boards/blob/main/src/universal-panel-adapter/specs.md) — retain older revision boundaries.
- [Design discussion](https://github.com/arthurwolf/extension-boards/blob/main/src/universal-panel-adapter/design.md)
- [All extension boards](/extension-boards)

The selected-revision engineering repository was unavailable to anonymous readers when checked. Its source links are retained for provenance; an accessible matching source release has not been verified. Firmware and historical-board links are separate sources.

**Remaining board-specific issue:** AVR image/protocol, exact panel matrix, host driver, power/backlight budget and kill behavior.

<details markdown="1">
<summary>Supplementary board views and engineering history</summary>

{% include _includes/extension-board-visuals.html slug="universal-panel-adapter" %}

These gallery views are supplementary; they are not the two required instructional diagrams. Their captions must preserve any older/different revision or population. Iteration logs, trial results and future upgrade proposals remain engineering history rather than operating instructions.

</details>
