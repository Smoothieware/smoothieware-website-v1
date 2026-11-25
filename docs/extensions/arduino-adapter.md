---
layout: default
title: "Arduino adapter"
permalink: /extensions/arduino-adapter
---

# Arduino adapter

This candidate connects selected Uno-format shields to Smoothieboard V2 Prime. It is an active routing and level-interface board, not a universal passive Uno pin adapter. A shield must have its own voltage, protocol, current and pin-use compatibility entry before it can be used.

This guide selects **v19** from the existing abstract-export record. It is an engineering candidate, not a fabricated, released or hardware-qualified product. Historical and older revision prose does not establish the illustrated revision's behavior.

The selected v19 source package retains schematic title-block revision **v18**. The package number does not rename the schematic or establish a released hardware revision.

## How it works

The selected v19 source has five Gadgeteer host connectors, six SN74LV595A shift registers, return-path switches, three SN74LXC8T245 receivers, output drivers, an ADS7138 I2C ADC and a selectable PWM source. These parts configure and observe the shield interface. Older root descriptions of a three-socket A/S/U adapter do not describe this selected assembly.

## Power, signals and limits

J1–J5 are separately labelled GB, GD, GE, GG and GC. They are not interchangeable ribbons. J6/J7/J8/J9 are the Uno digital, power and analogue headers; J10 is the shield ICSP header. J11 and J12 are distinct 3.3 V Qwiic buses from GB and GG, not one bridged bus. Shield IOREF/VIO, RESET, VIN and protected 5 V ownership must be established for the actual shield; physical header fit alone does not establish electrical compatibility.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the source contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Orange: 5 V supply.
- Green: Control signal.
- Green: Signal — use the printed function label.
- Near-black: Circuit ground.
- Grey: Not routed in this board revision.
- Dark grey: Other source-labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

Start with the overview, then use all focused sheets for exact contacts, controls and links. Source footprint defaults do not prove assembled continuity.

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-overview" src="/images/extensions/arduino-adapter/guides/reader-compact-overview.png" title="Active Arduino adapter — overview" alt="Active Arduino adapter — overview for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-j1-1-5" src="/images/extensions/arduino-adapter/guides/reader-compact-j1-1-5-central-pills.png" title="J1 · GB host — j1 1 5" alt="J1 · GB host — j1 1 5 for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-j1-6-10" src="/images/extensions/arduino-adapter/guides/reader-compact-j1-6-10-central-pills.png" title="J1 · GB host — j1 6 10" alt="J1 · GB host — j1 6 10 for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-j2-1-5" src="/images/extensions/arduino-adapter/guides/reader-compact-j2-1-5-central-pills.png" title="J2 · GD host — j2 1 5" alt="J2 · GD host — j2 1 5 for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-j2-6-10" src="/images/extensions/arduino-adapter/guides/reader-compact-j2-6-10-central-pills.png" title="J2 · GD host — j2 6 10" alt="J2 · GD host — j2 6 10 for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-j3-1-5" src="/images/extensions/arduino-adapter/guides/reader-compact-j3-1-5-central-pills.png" title="J3 · GE host — j3 1 5" alt="J3 · GE host — j3 1 5 for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-j3-6-10" src="/images/extensions/arduino-adapter/guides/reader-compact-j3-6-10-central-pills.png" title="J3 · GE host — j3 6 10" alt="J3 · GE host — j3 6 10 for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-j4-1-5" src="/images/extensions/arduino-adapter/guides/reader-compact-j4-1-5-central-pills.png" title="J4 · GG host — j4 1 5" alt="J4 · GG host — j4 1 5 for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-j4-6-10" src="/images/extensions/arduino-adapter/guides/reader-compact-j4-6-10-central-pills.png" title="J4 · GG host — j4 6 10" alt="J4 · GG host — j4 6 10 for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-j5-1-5" src="/images/extensions/arduino-adapter/guides/reader-compact-j5-1-5-central-pills.png" title="J5 · GC host — j5 1 5" alt="J5 · GC host — j5 1 5 for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-j5-6-10" src="/images/extensions/arduino-adapter/guides/reader-compact-j5-6-10-central-pills.png" title="J5 · GC host — j5 6 10" alt="J5 · GC host — j5 6 10 for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-j6-1-5" src="/images/extensions/arduino-adapter/guides/reader-compact-j6-1-5-central-pills.png" title="J6 · Uno digital high — j6 1 5" alt="J6 · Uno digital high — j6 1 5 for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-j6-6-10" src="/images/extensions/arduino-adapter/guides/reader-compact-j6-6-10-central-pills.png" title="J6 · Uno digital high — j6 6 10" alt="J6 · Uno digital high — j6 6 10 for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-j7-1-5" src="/images/extensions/arduino-adapter/guides/reader-compact-j7-1-5-central-pills.png" title="J7 · Uno digital low — j7 1 5" alt="J7 · Uno digital low — j7 1 5 for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-j7-6-8" src="/images/extensions/arduino-adapter/guides/reader-compact-j7-6-8-central-pills.png" title="J7 · Uno digital low — j7 6 8" alt="J7 · Uno digital low — j7 6 8 for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-j8-1-5" src="/images/extensions/arduino-adapter/guides/reader-compact-j8-1-5-central-pills.png" title="J8 · Uno power — j8 1 5" alt="J8 · Uno power — j8 1 5 for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-j8-6-8" src="/images/extensions/arduino-adapter/guides/reader-compact-j8-6-8-central-pills.png" title="J8 · Uno power — j8 6 8" alt="J8 · Uno power — j8 6 8 for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-j9-1-5" src="/images/extensions/arduino-adapter/guides/reader-compact-j9-1-5-central-pills.png" title="J9 · Uno analog — j9 1 5" alt="J9 · Uno analog — j9 1 5 for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-j9-6-6" src="/images/extensions/arduino-adapter/guides/reader-compact-j9-6-6-central-pills.png" title="J9 · Uno analog — j9 6 6" alt="J9 · Uno analog — j9 6 6 for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-j10-1-5" src="/images/extensions/arduino-adapter/guides/reader-compact-j10-1-5-central-pills.png" title="J10 · Uno ICSP — j10 1 5" alt="J10 · Uno ICSP — j10 1 5 for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-j10-6-6" src="/images/extensions/arduino-adapter/guides/reader-compact-j10-6-6-central-pills.png" title="J10 · Uno ICSP — j10 6 6" alt="J10 · Uno ICSP — j10 6 6 for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-j11-1-4" src="/images/extensions/arduino-adapter/guides/reader-compact-j11-1-4-central-pills.png" title="J11 · Qwiic GB — j11 1 4" alt="J11 · Qwiic GB — j11 1 4 for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-j12-1-4" src="/images/extensions/arduino-adapter/guides/reader-compact-j12-1-4-central-pills.png" title="J12 · Qwiic GG — j12 1 4" alt="J12 · Qwiic GG — j12 1 4 for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-identity" src="/images/extensions/arduino-adapter/guides/reader-compact-identity-underside-caption.png" title="Active shield interface — identity" alt="Active shield interface — identity for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-registers" src="/images/extensions/arduino-adapter/guides/reader-compact-registers-underside-caption.png" title="Serial control chain — registers" alt="Serial control chain — registers for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-drivers" src="/images/extensions/arduino-adapter/guides/reader-compact-drivers-underside-caption.png" title="Shield output drivers — drivers" alt="Shield output drivers — drivers for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-return" src="/images/extensions/arduino-adapter/guides/reader-compact-return-underside-caption.png" title="Signal return paths — return" alt="Signal return paths — return for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-receivers" src="/images/extensions/arduino-adapter/guides/reader-compact-receivers-underside-caption.png" title="Shield signal receivers — receivers" alt="Shield signal receivers — receivers for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-route-low" src="/images/extensions/arduino-adapter/guides/reader-compact-route-low-underside-caption.png" title="Route selection low — route low" alt="Route selection low — route low for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-route-high" src="/images/extensions/arduino-adapter/guides/reader-compact-route-high-underside-caption.png" title="Route selection high — route high" alt="Route selection high — route high for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-branches" src="/images/extensions/arduino-adapter/guides/reader-compact-branches-underside-caption.png" title="Analog branch switches — branches" alt="Analog branch switches — branches for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-i2c" src="/images/extensions/arduino-adapter/guides/reader-compact-i2c.png" title="Shield I2C translation — i2c" alt="Shield I2C translation — i2c for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-adc" src="/images/extensions/arduino-adapter/guides/reader-compact-adc-underside-caption.png" title="Analog conversion — adc" alt="Analog conversion — adc for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-pwm" src="/images/extensions/arduino-adapter/guides/reader-compact-pwm-underside-caption.png" title="PWM source selection — pwm" alt="PWM source selection — pwm for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-power" src="/images/extensions/arduino-adapter/guides/reader-compact-power-underside-caption.png" title="Shield5V source path — power" alt="Shield5V source path — power for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-vio" src="/images/extensions/arduino-adapter/guides/reader-compact-vio-underside-caption.png" title="Shield logic selection — vio" alt="Shield logic selection — vio for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-reset" src="/images/extensions/arduino-adapter/guides/reader-compact-reset.png" title="Shield reset output — reset" alt="Shield reset output — reset for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-led1" src="/images/extensions/arduino-adapter/guides/reader-compact-led1.png" title="Signal state indicators — led1" alt="Signal state indicators — led1 for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-led4" src="/images/extensions/arduino-adapter/guides/reader-compact-led4.png" title="Signal state indicators — led4" alt="Signal state indicators — led4 for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-led7" src="/images/extensions/arduino-adapter/guides/reader-compact-led7.png" title="Signal state indicators — led7" alt="Signal state indicators — led7 for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-led10" src="/images/extensions/arduino-adapter/guides/reader-compact-led10.png" title="Signal state indicators — led10" alt="Signal state indicators — led10 for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-led13" src="/images/extensions/arduino-adapter/guides/reader-compact-led13.png" title="Signal state indicators — led13" alt="Signal state indicators — led13 for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-led16" src="/images/extensions/arduino-adapter/guides/reader-compact-led16.png" title="Signal state indicators — led16" alt="Signal state indicators — led16 for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-status" src="/images/extensions/arduino-adapter/guides/reader-compact-status.png" title="Power / fault indicators — status" alt="Power / fault indicators — status for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-esd" src="/images/extensions/arduino-adapter/guides/reader-compact-esd-underside-caption.png" title="Shield signal protection — esd" alt="Shield signal protection — esd for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-tp1" src="/images/extensions/arduino-adapter/guides/reader-compact-tp1-underside-caption.png" title="Supply / reset test pads — tp1" alt="Supply / reset test pads — tp1 for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-tp5" src="/images/extensions/arduino-adapter/guides/reader-compact-tp5-underside-caption.png" title="Supply / reset test pads — tp5" alt="Supply / reset test pads — tp5 for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-tp9" src="/images/extensions/arduino-adapter/guides/reader-compact-tp9-underside-caption.png" title="Supply / reset test pads — tp9" alt="Supply / reset test pads — tp9 for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-adc-filter" src="/images/extensions/arduino-adapter/guides/reader-compact-adc-filter-underside-caption.png" title="Analog input filtering — adc filter" alt="Analog input filtering — adc filter for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-qwiic-mount" src="/images/extensions/arduino-adapter/guides/reader-compact-qwiic-mount.png" title="Qwiic mounting contacts — qwiic mount" alt="Qwiic mounting contacts — qwiic mount for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-cautions" src="/images/extensions/arduino-adapter/guides/reader-compact-cautions.png" title="Source fabrication cautions — cautions" alt="Source fabrication cautions — cautions for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-adapter-v19-reader-compact-mounts" src="/images/extensions/arduino-adapter/guides/reader-compact-mounts.png" title="Mounting supports — mounts" alt="Mounting supports — mounts for arduino-adapter v19" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

The annotated board-reference sheets above describe the selected source revision; the contact table below is a companion source aid. Actual desktop and narrow-view page/viewer acceptance remains open. Follow the wiring section for the connection procedure and its remaining installation limitations.

### arduino-adapter — saved connector contacts

Contact numbering below is the selected PCB's pad numbering, viewed using the final board-reference drawing. Same-numbered duplicate lands are collapsed in this electrical table. Mechanical unnumbered pads are omitted here. Physical connector-population and mating qualification remains open. `NC` means unconnected in this saved source, not a spare supported function. Named nets alone do not establish direction; use the signal-path explanation above.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Connector | Contact(s) | Saved-source function/net |
| --- | --- | --- |
| J10 — UNO ICSP 2x3 MALE | 1 | `/UNO_D12` |
| J10 — UNO ICSP 2x3 MALE | 2 | `+5V_SHD` |
| J10 — UNO ICSP 2x3 MALE | 3 | `/UNO_D13` |
| J10 — UNO ICSP 2x3 MALE | 4 | `/UNO_D11` |
| J10 — UNO ICSP 2x3 MALE | 5 | `/RESET_N` |
| J10 — UNO ICSP 2x3 MALE | 6 | `GND` |
| J7 — UNO DIGITAL LOW 1x8 (D7..D0) | 1 | `/UNO_D7` |
| J7 — UNO DIGITAL LOW 1x8 (D7..D0) | 2 | `/UNO_D6` |
| J7 — UNO DIGITAL LOW 1x8 (D7..D0) | 3 | `/UNO_D5` |
| J7 — UNO DIGITAL LOW 1x8 (D7..D0) | 4 | `/UNO_D4` |
| J7 — UNO DIGITAL LOW 1x8 (D7..D0) | 5 | `/UNO_D3` |
| J7 — UNO DIGITAL LOW 1x8 (D7..D0) | 6 | `/UNO_D2` |
| J7 — UNO DIGITAL LOW 1x8 (D7..D0) | 7 | `/UNO_D1` |
| J7 — UNO DIGITAL LOW 1x8 (D7..D0) | 8 | `/UNO_D0` |
| J12 — QWIIC GG I2C2 (3V3 only) | 1 | `GND` |
| J12 — QWIIC GG I2C2 (3V3 only) | 2 | `+3V3` |
| J12 — QWIIC GG I2C2 (3V3 only) | 3 | `/GG_8` |
| J12 — QWIIC GG I2C2 (3V3 only) | 4 | `/GG_9` |
| J12 — QWIIC GG I2C2 (3V3 only) | MP | `GND` |
| J3 — GADGETEER GE (SPI+GPIO) | 1 | `+3V3` |
| J3 — GADGETEER GE (SPI+GPIO) | 2 | `+5V_HOST` |
| J3 — GADGETEER GE (SPI+GPIO) | 3 | `/GE_3` |
| J3 — GADGETEER GE (SPI+GPIO) | 4 | `/SR_OE_N` |
| J3 — GADGETEER GE (SPI+GPIO) | 5 | `/GE_5` |
| J3 — GADGETEER GE (SPI+GPIO) | 6 | `/GE_6` |
| J3 — GADGETEER GE (SPI+GPIO) | 7 | `/GE_7` |
| J3 — GADGETEER GE (SPI+GPIO) | 8 | `/GE_8` |
| J3 — GADGETEER GE (SPI+GPIO) | 9 | `/GE_9` |
| J3 — GADGETEER GE (SPI+GPIO) | 10 | `GND` |
| J5 — GADGETEER GC (GPIO+TIM8 PWM) | 1 | `+3V3` |
| J5 — GADGETEER GC (GPIO+TIM8 PWM) | 2 | `+5V_HOST` |
| J5 — GADGETEER GC (GPIO+TIM8 PWM) | 3 | `/SR_RCLK` |
| J5 — GADGETEER GC (GPIO+TIM8 PWM) | 4 | `/GC_4` |
| J5 — GADGETEER GC (GPIO+TIM8 PWM) | 5 | `/GC_5` |
| J5 — GADGETEER GC (GPIO+TIM8 PWM) | 6 | `/GC_6` |
| J5 — GADGETEER GC (GPIO+TIM8 PWM) | 7 | `/GC_7` |
| J5 — GADGETEER GC (GPIO+TIM8 PWM) | 8 | `/GC_8` |
| J5 — GADGETEER GC (GPIO+TIM8 PWM) | 9 | `/GC_9` |
| J5 — GADGETEER GC (GPIO+TIM8 PWM) | 10 | `GND` |
| J1 — GADGETEER GB (UART/I2C3) | 1 | `+3V3` |
| J1 — GADGETEER GB (UART/I2C3) | 2 | `+5V_HOST` |
| J1 — GADGETEER GB (UART/I2C3) | 3 | `/SR_SER` |
| J1 — GADGETEER GB (UART/I2C3) | 4 | `/GB_4` |
| J1 — GADGETEER GB (UART/I2C3) | 5 | `/GB_5` |
| J1 — GADGETEER GB (UART/I2C3) | 6 | `/SR_SRCLK` |
| J1 — GADGETEER GB (UART/I2C3) | 7 | `/GB_7` |
| J1 — GADGETEER GB (UART/I2C3) | 8 | `/GB_8` |
| J1 — GADGETEER GB (UART/I2C3) | 9 | `/GB_9` |
| J1 — GADGETEER GB (UART/I2C3) | 10 | `GND` |
| J6 — UNO DIGITAL HIGH 1x10 (SCL..D8) | 1 | `/UNO_A5` |
| J6 — UNO DIGITAL HIGH 1x10 (SCL..D8) | 2 | `/UNO_A4` |
| J6 — UNO DIGITAL HIGH 1x10 (SCL..D8) | 4 | `GND` |
| J6 — UNO DIGITAL HIGH 1x10 (SCL..D8) | 5 | `/UNO_D13` |
| J6 — UNO DIGITAL HIGH 1x10 (SCL..D8) | 6 | `/UNO_D12` |
| J6 — UNO DIGITAL HIGH 1x10 (SCL..D8) | 7 | `/UNO_D11` |
| J6 — UNO DIGITAL HIGH 1x10 (SCL..D8) | 8 | `/UNO_D10` |
| J6 — UNO DIGITAL HIGH 1x10 (SCL..D8) | 9 | `/UNO_D9` |
| J6 — UNO DIGITAL HIGH 1x10 (SCL..D8) | 10 | `/UNO_D8` |
| J6 | 3 | NC |
| J9 — UNO ANALOG 1x6 (A0..A5) | 1 | `/UNO_A0` |
| J9 — UNO ANALOG 1x6 (A0..A5) | 2 | `/UNO_A1` |
| J9 — UNO ANALOG 1x6 (A0..A5) | 3 | `/UNO_A2` |
| J9 — UNO ANALOG 1x6 (A0..A5) | 4 | `/UNO_A3` |
| J9 — UNO ANALOG 1x6 (A0..A5) | 5 | `/UNO_A4` |
| J9 — UNO ANALOG 1x6 (A0..A5) | 6 | `/UNO_A5` |
| J8 — UNO POWER 1x8 (NC..VIN) | 2 | `VIO` |
| J8 — UNO POWER 1x8 (NC..VIN) | 3 | `/RESET_N` |
| J8 — UNO POWER 1x8 (NC..VIN) | 4 | `+3V3_SHD` |
| J8 — UNO POWER 1x8 (NC..VIN) | 5 | `+5V_SHD` |
| J8 — UNO POWER 1x8 (NC..VIN) | 6 | `GND` |
| J8 — UNO POWER 1x8 (NC..VIN) | 7 | `GND` |
| J8 — UNO POWER 1x8 (NC..VIN) | 8 | `/UNO_VIN` |
| J8 | 1 | NC |
| J11 — QWIIC GB I2C3 (3V3 only) | 1 | `GND` |
| J11 — QWIIC GB I2C3 (3V3 only) | 2 | `+3V3` |
| J11 — QWIIC GB I2C3 (3V3 only) | 3 | `/GB_8` |
| J11 — QWIIC GB I2C3 (3V3 only) | 4 | `/GB_9` |
| J11 — QWIIC GB I2C3 (3V3 only) | MP | `GND` |
| J4 — GADGETEER GG (ADC+I2C2) | 1 | `+3V3` |
| J4 — GADGETEER GG (ADC+I2C2) | 2 | `+5V_HOST` |
| J4 — GADGETEER GG (ADC+I2C2) | 3 | `/GG_3` |
| J4 — GADGETEER GG (ADC+I2C2) | 4 | `/GG_4` |
| J4 — GADGETEER GG (ADC+I2C2) | 5 | `/GG_5` |
| J4 — GADGETEER GG (ADC+I2C2) | 6 | `/GG_6` |
| J4 — GADGETEER GG (ADC+I2C2) | 7 | `/GG_7` |
| J4 — GADGETEER GG (ADC+I2C2) | 8 | `/GG_8` |
| J4 — GADGETEER GG (ADC+I2C2) | 9 | `/GG_9` |
| J4 — GADGETEER GG (ADC+I2C2) | 10 | `GND` |
| J2 — GADGETEER GD (UART/PWM) | 1 | `+3V3` |
| J2 — GADGETEER GD (UART/PWM) | 2 | `+5V_HOST` |
| J2 — GADGETEER GD (UART/PWM) | 3 | `/GD_3` |
| J2 — GADGETEER GD (UART/PWM) | 4 | `/GD_4` |
| J2 — GADGETEER GD (UART/PWM) | 5 | `/GD_5` |
| J2 — GADGETEER GD (UART/PWM) | 7 | `/GD_7` |
| J2 — GADGETEER GD (UART/PWM) | 8 | `/GD_8` |
| J2 — GADGETEER GD (UART/PWM) | 9 | `/GD_9` |
| J2 — GADGETEER GD (UART/PWM) | 10 | `GND` |
| J2 | 6 | NC |

</div>

</details>


Selected active-component identities: `U17 SN74LXC8T245 shield-pin receiver 1 of 3 (A to B, 3V3 both sides)`; `U21 TMUX1219 router D3: native GC.4 or F1`; `U31 TMUX1219 router D13: native GE.9 or F7`; `U11 SN74LV4T125 quad output driver 5 of 5 (VCC = VIO)`; `U3 SN74LV595A shift register 3 of 6`; `U23 TMUX1219 router D5: native GD.7 or F0`; `U20 TMUX1219 router D2: native GC.5 or F3`; `U6 SN74LV595A shift register 6 of 6`; `U38 LM66100 ideal diode, backfeed block`; `U25 TMUX1219 router D7: native GB.7 or F7`; `U16 TMUX1511 quad return switch 5 of 5`; `U34 PCA9306 I2C translator (host 3V3 / shield VIO)`; `U26 TMUX1219 router D8: native GG.6 or F7`; `U5 SN74LV595A shift register 5 of 6`; `U24 TMUX1219 router D6: native GD.8 or F3`; `U15 TMUX1511 quad return switch 4 of 5`; `U18 SN74LXC8T245 shield-pin receiver 2 of 3 (A to B, 3V3 both sides)`; `U32 TMUX1511 analog/digital branch switch 1 of 2`; `U35 ADS7138 8-channel 12-bit I2C ADC`; `U4 SN74LV595A shift register 4 of 6`; `U37 TPS2553 shield 5V limiter`; `U13 TMUX1511 quad return switch 2 of 5`; `U28 TMUX1219 router D10: native GE.6 or F1`; `U9 SN74LV4T125 quad output driver 3 of 5 (VCC = VIO)`; `U8 SN74LV4T125 quad output driver 2 of 5 (VCC = VIO)`; `U19 SN74LXC8T245 shield-pin receiver 3 of 3 (A to B, 3V3 both sides)`; `U1 SN74LV595A shift register 1 of 6`; `U10 SN74LV4T125 quad output driver 4 of 5 (VCC = VIO)`; `U22 TMUX1219 router D4: native GE.5 or F2`; `U36 TMUX1208 PWM source selector (GC.6..GC.9 to F7)`; `U7 SN74LV4T125 quad output driver 1 of 5 (VCC = VIO)`; `U27 TMUX1219 router D9: native GD.9 or F6`; `U29 TMUX1219 router D11: native GE.7 or F3`; `U2 SN74LV595A shift register 2 of 6`; `U33 TMUX1511 analog/digital branch switch 2 of 2`; `U12 TMUX1511 quad return switch 1 of 5`; `U30 TMUX1219 router D12: native GE.8 or F1`; `U14 TMUX1511 quad return switch 3 of 5`. These identities are not a substitute for matching datasheet limits.

### arduino-adapter — additional selected solder links

These are distinct physical solder-link footprints, including links whose references begin `SJ` rather than `JP`. Their labels and nets must be included in the annotated reference; none is silently omitted because of its reference prefix.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

| Link | Selected label | Pad nets |
| --- | --- | --- |
| SJ12 | LED D11 link (bridged = lit) | 1=/LED_A_D11; 2=/LED_AN_D11 |
| SJ21 | VIO select: 5V (default) / 3V3 | 1=+5V_SHD; 2=VIO; 3=+3V3_SHD |
| SJ11 | LED D10 link (bridged = lit) | 1=/LED_A_D10; 2=/LED_AN_D10 |
| SJ8 | LED D7 link (bridged = lit) | 1=/LED_A_D7; 2=/LED_AN_D7 |
| SJ4 | LED D3 link (bridged = lit) | 1=/LED_A_D3; 2=/LED_AN_D3 |
| SJ14 | LED D13 link (bridged = lit) | 1=/LED_A_D13; 2=/LED_AN_D13 |
| SJ9 | LED D8 link (bridged = lit) | 1=/LED_A_D8; 2=/LED_AN_D8 |
| SJ10 | LED D9 link (bridged = lit) | 1=/LED_A_D9; 2=/LED_AN_D9 |
| SJ5 | LED D4 link (bridged = lit) | 1=/LED_A_D4; 2=/LED_AN_D4 |
| SJ15 | LED A0 link (bridged = lit) | 1=/LED_A_A0; 2=/LED_AN_A0 |
| SJ17 | LED A2 link (bridged = lit) | 1=/LED_A_A2; 2=/LED_AN_A2 |
| SJ18 | LED A3 link (bridged = lit) | 1=/LED_A_A3; 2=/LED_AN_A3 |
| SJ22 | VIN <- 5V (open by default) | 1=+5V_SHD; 2=/UNO_VIN |
| SJ1 | LED D0 link (bridged = lit) | 1=/LED_A_D0; 2=/LED_AN_D0 |
| SJ3 | LED D2 link (bridged = lit) | 1=/LED_A_D2; 2=/LED_AN_D2 |
| SJ23 | power LED link (bridged = lit) | 1=/LED_PWR_A; 2=/LED_PWR_AN |
| SJ16 | LED A1 link (bridged = lit) | 1=/LED_A_A1; 2=/LED_AN_A1 |
| SJ6 | LED D5 link (bridged = lit) | 1=/LED_A_D5; 2=/LED_AN_D5 |
| SJ2 | LED D1 link (bridged = lit) | 1=/LED_A_D1; 2=/LED_AN_D1 |
| SJ19 | shield SDA pull-up link to VIO (bridged = fitted) | 1=/SDA_PU; 2=VIO |
| SJ20 | shield SCL pull-up link to VIO (bridged = fitted) | 1=/SCL_PU; 2=VIO |
| SJ13 | LED D12 link (bridged = lit) | 1=/LED_A_D12; 2=/LED_AN_D12 |
| SJ7 | LED D6 link (bridged = lit) | 1=/LED_A_D6; 2=/LED_AN_D6 |
| SJ24 | fault LED link (bridged = fitted) | 1=/LED_FLT_A; 2=/LED_FLT_AN |

</details>



## Practical use with Smoothieboard V2 Prime

A low-power Uno-format SPI shield is a possible future example, but it cannot be connected as though D10–D13 were fixed passive host nets. The programmable router state and the shield's own driver are required.

**Uno-shield installation remains incomplete.** The Qwiic-only diagram below covers a separate, limited interface example; it does not configure an Uno shield. Any candidate P12 Prime2590 allocation below is limited to that revision and must not be copied to a different Prime revision. Its rail contacts are 1 = limited 3.3 V, 2 = limited 5 V, 10 = ground; verify the actual unshrouded host header and cable orientation before applying power.

1. Identify the exact shield revision and enumerate every used digital, analogue, power, reset and ICSP contact.
2. Compare those contacts with the selected v19 output tables below; do not use an old Uno adaptation diagram.
3. Before power, specify all five host sockets and the initial routing/output-enable state. Keep the shield isolated until the register-control protocol and supply selection are implemented.
4. Treat J11 and J12 as separate buses; each attached Qwiic device still requires a compatible protocol driver and a combined power/pull-up budget.

### Qwiic-only spectral-sensor connection

This diagram traces the selected v19 adapter’s J11 Qwiic bus to the v31 spectral sensor board. It deliberately leaves Uno shields and J12 disconnected. The wiring is source-backed, but the complete powered installation, physical cable orientation and firmware workflow remain unqualified.

**Unpowered source plan:** do not energize until the stated supply, sequencing and fitted-board checks are resolved.

Use the native-contact circuit and all five contact keys together. Five individual GB/J33 host leads and four Qwiic signal/power leads reach actual source-art contacts. Adapter J11 and sensor J3 use their four surface-mount signal contacts; the sensor’s alternative through-hole row has no separate leads. Confirm these attachment locations are accessible on the selected assembly. Source-coordinate crops preserve every alternative contact and the complete Prime, adapter and sensor abstracts show their locations. The Prime artwork is P11; the separately checked P12 GB/J33 allocation uses **I2C3**, whereas GG/J38 uses I2C2. This is a partial Qwiic application, with no Uno shield or separately powered Arduino attached.

{% include _includes/extension-instruction-diagram.html id="arduino-native-0" src="/images/extensions/arduino-adapter/guides/native-contact/arduino-native-reader.png" title="Prime to Arduino adapter J11 and spectral sensor — nine native-contact leads" alt="Prime to Arduino adapter J11 and spectral sensor — nine native-contact leads" caption="Selected v19 adapter with v31 spectral board. Both host rails are required; retain SJ21 1–2. Unused shield connectors can remain energized. Rail/PCA9306 margins, fitted attachment and matching sensor image/acquisition remain open. No Uno shield support is established." width=900 %}

{% include _includes/extension-instruction-diagram.html id="arduino-native-1" src="/images/extensions/arduino-adapter/guides/native-contact/reader-contact-keys/J33-numbered-pads.png" title="Prime GB/J33 — complete contact key" alt="Prime GB/J33 — complete contact key" caption="Selected v19 adapter with v31 spectral board. Both host rails are required; retain SJ21 1–2. Unused shield connectors can remain energized. Rail/PCA9306 margins, fitted attachment and matching sensor image/acquisition remain open. No Uno shield support is established." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-native-2" src="/images/extensions/arduino-adapter/guides/native-contact/reader-contact-keys/J1-numbered-pads.png" title="Adapter J1 — complete contact key" alt="Adapter J1 — complete contact key" caption="Selected v19 adapter with v31 spectral board. Both host rails are required; retain SJ21 1–2. Unused shield connectors can remain energized. Rail/PCA9306 margins, fitted attachment and matching sensor image/acquisition remain open. No Uno shield support is established." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-native-3" src="/images/extensions/arduino-adapter/guides/native-contact/reader-contact-keys/J11-adapter-numbered-pads.png" title="Adapter J11 — selected surface-mount signal pads" alt="Adapter J11 — selected surface-mount signal pads" caption="Selected v19 adapter with v31 spectral board. Both host rails are required; retain SJ21 1–2. Unused shield connectors can remain energized. Rail/PCA9306 margins, fitted attachment and matching sensor image/acquisition remain open. No Uno shield support is established." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-native-4" src="/images/extensions/arduino-adapter/guides/native-contact/reader-contact-keys/J3-sensor-numbered-pads.png" title="Spectral sensor J3 — selected surface-mount signal pads" alt="Spectral sensor J3 — selected surface-mount signal pads" caption="Selected v19 adapter with v31 spectral board. Both host rails are required; retain SJ21 1–2. Unused shield connectors can remain energized. Rail/PCA9306 margins, fitted attachment and matching sensor image/acquisition remain open. No Uno shield support is established." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-native-5" src="/images/extensions/arduino-adapter/guides/native-contact/reader-contact-keys/SJ21-numbered-pads.png" title="Adapter SJ21 — retain default 1–2 VIO selection" alt="Adapter SJ21 — retain default 1–2 VIO selection" caption="Selected v19 adapter with v31 spectral board. Both host rails are required; retain SJ21 1–2. Unused shield connectors can remain energized. Rail/PCA9306 margins, fitted attachment and matching sensor image/acquisition remain open. No Uno shield support is established." width=420 %}

<details markdown="1">
<summary>Earlier unqualified source comparisons — function-arranged ports</summary>

These retained layouts do not establish native-art wire landings. Use the selected native-contact circuit and all five keys above.

{% include _includes/extension-instruction-diagram.html id="arduino-v19-compact-qwiic" src="/images/extensions/arduino-adapter/guides/compact-individual-leads.png" title="Nine-lead Qwiic-only connection plan" alt="Nine-lead Qwiic-only connection plan for Arduino adapter v19 Qwiic-only plan" caption="Source plan only. Contact keys show PCB pads, not cable mating faces. Read the power and firmware limits below." width=420 %}

### Locate the selected contacts

Read these enlarged PCB contact keys together with the complete connection plan. Filled contacts are selected; leave the others unused. Retain SJ21 contacts 1–2 for this source-default example.

{% include _includes/extension-instruction-diagram.html id="arduino-v19-compact-j33" src="/images/extensions/arduino-adapter/guides/compact-J33-numbered-pads.png" title="Prime GB / J33" alt="Prime GB / J33 for Arduino adapter v19 Qwiic-only plan" caption="Source plan only. Contact keys show PCB pads, not cable mating faces. Read the power and firmware limits below." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-v19-compact-j1" src="/images/extensions/arduino-adapter/guides/compact-J1-numbered-pads.png" title="Adapter J1" alt="Adapter J1 for Arduino adapter v19 Qwiic-only plan" caption="Source plan only. Contact keys show PCB pads, not cable mating faces. Read the power and firmware limits below." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-v19-compact-j11-adapter" src="/images/extensions/arduino-adapter/guides/compact-J11-adapter-numbered-pads.png" title="Adapter J11 Qwiic" alt="Adapter J11 Qwiic for Arduino adapter v19 Qwiic-only plan" caption="Source plan only. Contact keys show PCB pads, not cable mating faces. Read the power and firmware limits below." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-v19-compact-j3-sensor" src="/images/extensions/arduino-adapter/guides/compact-J3-sensor-numbered-pads.png" title="Spectral sensor J3" alt="Spectral sensor J3 for Arduino adapter v19 Qwiic-only plan" caption="Source plan only. Contact keys show PCB pads, not cable mating faces. Read the power and firmware limits below." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-v19-compact-sj21" src="/images/extensions/arduino-adapter/guides/compact-SJ21-numbered-pads.png" title="Adapter SJ21 VIO selection" alt="Adapter SJ21 VIO selection for Arduino adapter v19 Qwiic-only plan" caption="Source plan only. Contact keys show PCB pads, not cable mating faces. Read the power and firmware limits below." width=420 %}

<details markdown="1">
<summary>Additional wide circuit view</summary>

{% include _includes/extension-instruction-diagram.html id="arduino-v19-prime-qwiic-spectral" title="Prime to Arduino adapter J11 and spectral sensor" src="/images/extensions/arduino-adapter/guides/prime-qwiic-spectral-installation.png" alt="Prime GB J33 through Arduino adapter v19 J11 to spectral sensor v31, with five host wires and four Qwiic conductors" caption="Partial Qwiic-only installation: source-default supply selection retained; no Uno shield attached." width=5200 %}

</details>

</details>

Connect Prime GB/J33 contacts **1, 2, 8, 9 and 10** individually to adapter J1 contacts with the same numbers: limited 3.3 V, host 5 V, SDA, SCL and ground. J11 contacts **1 = ground, 2 = 3.3 V, 3 = SDA, 4 = SCL** connect to the same-numbered spectral-board J3 contacts. Verify contact numbers rather than cable colours; the diagram’s PCB-coordinate contact details are not physical mating-face drawings.

**Both host rails are required for this source-default population.** Although J11 supplies the sensor with 3.3 V, adapter SJ21 defaults to contacts 1–2, selecting the shield-side 5 V rail for the PCA9306 level translator’s VIO bias. The host 5 V path runs through the TPS2553 and LM66100. Do not substitute a 3.3 V-only host hookup or apply 5 V to J11’s 3.3 V contact. Adapter and sensor loads share the controller’s rail budget; the complete current/protection margin still needs qualification.

**Bias timing remains unqualified.** The selected source labels C44 at the PCA9306 EN/VREF2 node as 100 nF. [TI’s PCA9306 guidance, sections 9.2.2.1 and 11.1](https://www.ti.com/lit/ds/symlink/pca9306.pdf) recommends a 100 pF filter there and explains that larger capacitance increases turn-on and turn-off time. This source difference requires startup and sequencing assessment of the complete fitted circuit; the wiring plan does not qualify its timing or prescribe a capacitor replacement.

The selected AS7265x sensor chain needs its matching image and acquisition software. Generic I2C connectivity does not provide a spectral measurement command. The pinned Smoothieware application has no named AS7265x driver: email **wolf.arthur@gamil.com** about the required support. No working spectral-sensor or Uno-shield configuration is claimed here.

## Smoothieware use

The v19 adapter needs software that configures its six SN74LV595A routing registers, return-path switches, direction/output enables and ADS7138 ADC before operating a specific shield. The pinned V2 application does not supply this selected router/ADC backend: its actual SPI consumers are TMC2590/TMC26X motor drivers and MAX31855 temperature readout, and the complete inspected application has no I2C device consumer implementing the ADS7138. Those unrelated settings cannot initialize this board. Do not copy shield firmware into Smoothieware or invent a register sequence. Email wolf.arthur@gamil.com about the required v19 router/ADC and named-shield support. Any future/custom implementation needs its own verified pin, voltage and source-ownership contract.

This conclusion is bounded to the complete application/configuration source at [SmoothieV2 revision `2a21c0108b1d095ecd8b2b9358e94055f053c003`](https://github.com/Smoothieware/SmoothieV2/tree/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src). It does not identify the firmware installed on your controller or establish physical operation. The register-chain order, reset state and safe output-enable sequence still need verification before a future implementation can operate a shield.

## Sources and revision notes

The selected-revision engineering repository was unavailable to anonymous readers when checked. Its source links are retained for provenance; an accessible matching source release has not been verified. Firmware and historical-board links are separate sources.

- [Selected v19 source directory](https://github.com/arthurwolf/extension-boards/tree/main/src/arduino-adapter/attempt/versions/v19)
- [Design specification](https://github.com/arthurwolf/extension-boards/blob/main/src/arduino-adapter/specs.md) — historical design intent where it names an older revision.
- [Design discussion](https://github.com/arthurwolf/extension-boards/blob/main/src/arduino-adapter/design.md)
- [All extension boards](/extension-boards)

Upstream source-link availability has **not** been verified for publication.

**Remaining board-specific uncertainty:** Programmable routing protocol, five-socket host ownership, shield compatibility matrix and matching firmware driver remain unresolved.

<details markdown="1">
<summary>Additional board views and engineering history</summary>

{% include _includes/extension-board-visuals.html slug="arduino-adapter" %}

The retained gallery is supplementary. It is not either required instructional diagram, and it may include older or different populations whose captions must remain explicit. Development iteration and qualification records remain engineering history rather than operating instructions.

</details>
