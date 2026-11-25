---
layout: default
title: "Arduino-to-Gadgeteer shield"
permalink: /extensions/arduino-to-gadgeteer-shield
---

# Arduino-to-Gadgeteer shield

This shield makes an Arduino Due act as a host for Gadgeteer modules. It is the opposite direction from the Uno-shield adapter: its six Gadgeteer sockets are outputs from the Due. It is not an extension board that should be cabled directly between two powered hosts.

This guide selects **v23** from the existing abstract-export record. It is an engineering candidate, not a fabricated, released or hardware-qualified product. Historical and older revision prose does not establish the illustrated revision's behavior.

The selected v23 source package retains schematic title-block revision **WIP**. The package number does not rename the schematic or establish a released hardware revision.

## How it works

J1–J6 export Y/A/P/S/U/I interfaces; J7 branches the I socket's I2C bus as 3.3 V Qwiic. Host-powered TMUX1511 switches isolate signal paths when disabled. The selected v23 rail stages are labelled TPS259631 auto-retry 125 mA; root prose describing latching limiter recovery is older and must not be used as a v23 recovery instruction. JP1 arms the board through the host power-enable net.

## Power, signals and limits

The Due is the source of the exported rails. Never connect the shield's Gadgeteer power pins to a separately powered Smoothieboard socket as if both were peripherals. The root contract's 80 mA-per-rail exported-load target, 3.3 V I/O domain and cable/timing targets need revision-local confirmation before use. The shield provides no general 5 V signal translation. J7 is GND, 3.3 V, SDA, SCL and shares the J6 bus.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the source contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Orange: 5 V supply.
- Near-black: Circuit ground.
- Grey: Not routed in this board revision.
- Dark grey: Other source-labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

Start with the overview, then use all focused sheets for exact contacts, controls and links. Source footprint defaults do not prove assembled continuity.

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-overview" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-overview.png" title="Due to Gadgeteer shield — overview" alt="Due to Gadgeteer shield — overview for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-j1-1-5" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-j1-1-5-central-pills.png" title="J1 · Gadgeteer Y — j1 1 5" alt="J1 · Gadgeteer Y — j1 1 5 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-j1-6-10" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-j1-6-10-central-pills.png" title="J1 · Gadgeteer Y — j1 6 10" alt="J1 · Gadgeteer Y — j1 6 10 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-j2-1-5" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-j2-1-5-central-pills.png" title="J2 · Gadgeteer A — j2 1 5" alt="J2 · Gadgeteer A — j2 1 5 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-j2-6-10" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-j2-6-10-central-pills.png" title="J2 · Gadgeteer A — j2 6 10" alt="J2 · Gadgeteer A — j2 6 10 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-j3-1-5" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-j3-1-5-central-pills.png" title="J3 · Gadgeteer P — j3 1 5" alt="J3 · Gadgeteer P — j3 1 5 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-j3-6-10" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-j3-6-10-central-pills.png" title="J3 · Gadgeteer P — j3 6 10" alt="J3 · Gadgeteer P — j3 6 10 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-j4-1-5" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-j4-1-5-central-pills.png" title="J4 · Gadgeteer S — j4 1 5" alt="J4 · Gadgeteer S — j4 1 5 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-j4-6-10" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-j4-6-10-central-pills.png" title="J4 · Gadgeteer S — j4 6 10" alt="J4 · Gadgeteer S — j4 6 10 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-j5-1-5" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-j5-1-5-central-pills.png" title="J5 · Gadgeteer U — j5 1 5" alt="J5 · Gadgeteer U — j5 1 5 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-j5-6-10" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-j5-6-10-central-pills.png" title="J5 · Gadgeteer U — j5 6 10" alt="J5 · Gadgeteer U — j5 6 10 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-j6-1-5" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-j6-1-5-central-pills.png" title="J6 · Gadgeteer I — j6 1 5" alt="J6 · Gadgeteer I — j6 1 5 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-j6-6-10" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-j6-6-10-central-pills.png" title="J6 · Gadgeteer I — j6 6 10" alt="J6 · Gadgeteer I — j6 6 10 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-j7-1-4" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-j7-1-4-central-pills.png" title="J7 · Qwiic I2C — j7 1 4" alt="J7 · Qwiic I2C — j7 1 4 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-jh1-1-5" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-jh1-1-5-central-pills.png" title="JH1 · Due power — jh1 1 5" alt="JH1 · Due power — jh1 1 5 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-jh1-6-8" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-jh1-6-8-central-pills.png" title="JH1 · Due power — jh1 6 8" alt="JH1 · Due power — jh1 6 8 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-jh2-1-5" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-jh2-1-5-central-pills.png" title="JH2 · Due analog low — jh2 1 5" alt="JH2 · Due analog low — jh2 1 5 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-jh2-6-8" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-jh2-6-8-central-pills.png" title="JH2 · Due analog low — jh2 6 8" alt="JH2 · Due analog low — jh2 6 8 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-jh3-1-5" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-jh3-1-5-central-pills.png" title="JH3 · Due analog high — jh3 1 5" alt="JH3 · Due analog high — jh3 1 5 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-jh3-6-8" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-jh3-6-8-central-pills.png" title="JH3 · Due analog high — jh3 6 8" alt="JH3 · Due analog high — jh3 6 8 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-jh4-1-5" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-jh4-1-5-central-pills.png" title="JH4 · Due digital low — jh4 1 5" alt="JH4 · Due digital low — jh4 1 5 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-jh4-6-8" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-jh4-6-8-central-pills.png" title="JH4 · Due digital low — jh4 6 8" alt="JH4 · Due digital low — jh4 6 8 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-jh5-1-5" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-jh5-1-5-central-pills.png" title="JH5 · Due PWM high — jh5 1 5" alt="JH5 · Due PWM high — jh5 1 5 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-jh5-6-10" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-jh5-6-10-central-pills.png" title="JH5 · Due PWM high — jh5 6 10" alt="JH5 · Due PWM high — jh5 6 10 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-jh6-1-5" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-jh6-1-5-central-pills.png" title="JH6 · Due communication — jh6 1 5" alt="JH6 · Due communication — jh6 1 5 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-jh6-6-8" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-jh6-6-8-central-pills.png" title="JH6 · Due communication — jh6 6 8" alt="JH6 · Due communication — jh6 6 8 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-jh7-1-5" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-jh7-1-5-central-pills.png" title="JH7 · Due extended GPIO — jh7 1 5" alt="JH7 · Due extended GPIO — jh7 1 5 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-jh7-6-10" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-jh7-6-10-central-pills.png" title="JH7 · Due extended GPIO — jh7 6 10" alt="JH7 · Due extended GPIO — jh7 6 10 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-jh7-11-15" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-jh7-11-15-central-pills.png" title="JH7 · Due extended GPIO — jh7 11 15" alt="JH7 · Due extended GPIO — jh7 11 15 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-jh7-16-20" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-jh7-16-20-central-pills.png" title="JH7 · Due extended GPIO — jh7 16 20" alt="JH7 · Due extended GPIO — jh7 16 20 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-jh7-21-25" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-jh7-21-25-central-pills.png" title="JH7 · Due extended GPIO — jh7 21 25" alt="JH7 · Due extended GPIO — jh7 21 25 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-jh7-26-30" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-jh7-26-30-central-pills.png" title="JH7 · Due extended GPIO — jh7 26 30" alt="JH7 · Due extended GPIO — jh7 26 30 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-jh7-31-35" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-jh7-31-35-central-pills.png" title="JH7 · Due extended GPIO — jh7 31 35" alt="JH7 · Due extended GPIO — jh7 31 35 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-jh7-36-36" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-jh7-36-36-central-pills.png" title="JH7 · Due extended GPIO — jh7 36 36" alt="JH7 · Due extended GPIO — jh7 36 36 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-jh8-1-5" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-jh8-1-5-central-pills.png" title="JH8 · Due SPI — jh8 1 5" alt="JH8 · Due SPI — jh8 1 5 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-jh8-6-6" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-jh8-6-6-central-pills.png" title="JH8 · Due SPI — jh8 6 6" alt="JH8 · Due SPI — jh8 6 6 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-switches" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-switches.png" title="Signal-path architecture — switches" alt="Signal-path architecture — switches for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-analog" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-analog.png" title="Analog input series/filter — analog" alt="Analog input series/filter — analog for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-series" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-series.png" title="Digital port series paths — series" alt="Digital port series paths — series for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-pullups" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-pullups.png" title="Port pull-ups — pullups" alt="Port pull-ups — pullups for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-enable" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-enable-underside-caption.png" title="User power-enable header — enable" alt="User power-enable header — enable for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-supervision" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-supervision.png" title="Signal enable supervision — supervision" alt="Signal enable supervision — supervision for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-rail0" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-rail0-underside-caption.png" title="Port3.3V power path — rail0" alt="Port3.3V power path — rail0 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-rail1" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-rail1-underside-caption.png" title="Port5V power path — rail1" alt="Port5V power path — rail1 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-sense" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-sense.png" title="Port rail sense dividers — sense" alt="Port rail sense dividers — sense for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-fault" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-fault-underside-caption.png" title="Fault / isolated indication — fault" alt="Fault / isolated indication — fault for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-esd" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-esd.png" title="Signal ESD networks — esd" alt="Signal ESD networks — esd for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-tests0" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-tests0.png" title="Supply / signal test pads — tests0" alt="Supply / signal test pads — tests0 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-tests4" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-tests4.png" title="Supply / signal test pads — tests4" alt="Supply / signal test pads — tests4 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-tests8" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-tests8.png" title="Supply / signal test pads — tests8" alt="Supply / signal test pads — tests8 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-tests12" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-tests12.png" title="Supply / signal test pads — tests12" alt="Supply / signal test pads — tests12 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-tests16" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-tests16.png" title="Supply / signal test pads — tests16" alt="Supply / signal test pads — tests16 for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

{% include _includes/extension-instruction-diagram.html id="arduino-to-gadgeteer-shield-v23-reader-compact-mounts" src="/images/extensions/arduino-to-gadgeteer-shield/guides/reader-compact-mounts.png" title="Mechanical supports — mounts" alt="Mechanical supports — mounts for arduino-to-gadgeteer-shield v23" caption="Reference for the documented revision. Use the overview and focused sheets together; each drawing identifies its view or projection. Follow the wiring section before making connections." width=420 %}

The annotated board-reference sheets above describe the selected source revision; the contact table below is a companion source aid. Actual desktop and narrow-view page/viewer acceptance remains open. Follow the wiring section for the connection procedure and its remaining installation limitations.

### arduino-to-gadgeteer-shield — saved connector contacts

Contact numbering below is the selected PCB's pad numbering, viewed using the final board-reference drawing. Same-numbered duplicate lands are collapsed in this electrical table. Mechanical unnumbered pads are omitted here. Physical connector-population and mating qualification remains open. `NC` means unconnected in this saved source, not a spare supported function. Named nets alone do not establish direction; use the signal-path explanation above.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Connector | Contact(s) | Saved-source function/net |
| --- | --- | --- |
| J7 — SM04B-SRSS-TB(LF)(SN) | 1 | `gnd` |
| J7 — SM04B-SRSS-TB(LF)(SN) | 2 | `port_3v3` |
| J7 — SM04B-SRSS-TB(LF)(SN) | 3 | `i_8` |
| J7 — SM04B-SRSS-TB(LF)(SN) | 4 | `i_9` |
| J7 — SM04B-SRSS-TB(LF)(SN) | MP | `gnd` |
| J3 — SHF-105-01-L-D-TH | 1 | `port_3v3` |
| J3 — SHF-105-01-L-D-TH | 2 | `port_5v` |
| J3 — SHF-105-01-L-D-TH | 3 | `p_3` |
| J3 — SHF-105-01-L-D-TH | 6 | `p_6` |
| J3 — SHF-105-01-L-D-TH | 7 | `p_7` |
| J3 — SHF-105-01-L-D-TH | 8 | `p_8` |
| J3 — SHF-105-01-L-D-TH | 9 | `p_9` |
| J3 — SHF-105-01-L-D-TH | 10 | `gnd` |
| J3 | 4, 5 | NC |
| J4 — SHF-105-01-L-D-TH | 1 | `port_3v3` |
| J4 — SHF-105-01-L-D-TH | 2 | `port_5v` |
| J4 — SHF-105-01-L-D-TH | 3 | `s_3` |
| J4 — SHF-105-01-L-D-TH | 4 | `s_4` |
| J4 — SHF-105-01-L-D-TH | 5 | `s_5` |
| J4 — SHF-105-01-L-D-TH | 6 | `s_6` |
| J4 — SHF-105-01-L-D-TH | 7 | `s_7` |
| J4 — SHF-105-01-L-D-TH | 8 | `s_8` |
| J4 — SHF-105-01-L-D-TH | 9 | `s_9` |
| J4 — SHF-105-01-L-D-TH | 10 | `gnd` |
| J2 — SHF-105-01-L-D-TH | 1 | `port_3v3` |
| J2 — SHF-105-01-L-D-TH | 2 | `port_5v` |
| J2 — SHF-105-01-L-D-TH | 3 | `a_3` |
| J2 — SHF-105-01-L-D-TH | 4 | `a_4` |
| J2 — SHF-105-01-L-D-TH | 5 | `a_5` |
| J2 — SHF-105-01-L-D-TH | 6 | `a_6` |
| J2 — SHF-105-01-L-D-TH | 10 | `gnd` |
| J2 | 7, 8, 9 | NC |
| J1 — SHF-105-01-L-D-TH | 1 | `port_3v3` |
| J1 — SHF-105-01-L-D-TH | 2 | `port_5v` |
| J1 — SHF-105-01-L-D-TH | 3 | `y_3` |
| J1 — SHF-105-01-L-D-TH | 4 | `y_4` |
| J1 — SHF-105-01-L-D-TH | 5 | `y_5` |
| J1 — SHF-105-01-L-D-TH | 6 | `y_6` |
| J1 — SHF-105-01-L-D-TH | 7 | `y_7` |
| J1 — SHF-105-01-L-D-TH | 8 | `y_8` |
| J1 — SHF-105-01-L-D-TH | 9 | `y_9` |
| J1 — SHF-105-01-L-D-TH | 10 | `gnd` |
| J6 — SHF-105-01-L-D-TH | 1 | `port_3v3` |
| J6 — SHF-105-01-L-D-TH | 2 | `port_5v` |
| J6 — SHF-105-01-L-D-TH | 3 | `i_3` |
| J6 — SHF-105-01-L-D-TH | 6 | `i_6` |
| J6 — SHF-105-01-L-D-TH | 8 | `i_8` |
| J6 — SHF-105-01-L-D-TH | 9 | `i_9` |
| J6 — SHF-105-01-L-D-TH | 10 | `gnd` |
| J6 | 4, 5, 7 | NC |
| J5 — SHF-105-01-L-D-TH | 1 | `port_3v3` |
| J5 — SHF-105-01-L-D-TH | 2 | `port_5v` |
| J5 — SHF-105-01-L-D-TH | 3 | `u_3` |
| J5 — SHF-105-01-L-D-TH | 4 | `u_4` |
| J5 — SHF-105-01-L-D-TH | 5 | `u_5` |
| J5 — SHF-105-01-L-D-TH | 6 | `u_6` |
| J5 — SHF-105-01-L-D-TH | 10 | `gnd` |
| J5 | 7, 8, 9 | NC |
| JH1 — TSW-108-07-L-S | 3 | `host_reset_n` |
| JH1 — TSW-108-07-L-S | 4 | `host_3v3` |
| JH1 — TSW-108-07-L-S | 5 | `host_5v` |
| JH1 — TSW-108-07-L-S | 6 | `gnd` |
| JH1 — TSW-108-07-L-S | 7 | `gnd` |
| JH1 | 1, 2, 8 | NC |
| JH7 — TSW-118-07-G-D | 3 | `host_d22` |
| JH7 — TSW-118-07-G-D | 4 | `host_d23` |
| JH7 — TSW-118-07-G-D | 5 | `host_d24` |
| JH7 — TSW-118-07-G-D | 6 | `host_d25` |
| JH7 — TSW-118-07-G-D | 7 | `host_d26` |
| JH7 — TSW-118-07-G-D | 8 | `host_d27` |
| JH7 — TSW-118-07-G-D | 9 | `host_d28` |
| JH7 — TSW-118-07-G-D | 10 | `host_d29` |
| JH7 — TSW-118-07-G-D | 11 | `host_d30` |
| JH7 — TSW-118-07-G-D | 12 | `host_d31` |
| JH7 — TSW-118-07-G-D | 13 | `host_d32` |
| JH7 — TSW-118-07-G-D | 14 | `host_d33` |
| JH7 — TSW-118-07-G-D | 15 | `host_d34` |
| JH7 — TSW-118-07-G-D | 16 | `host_d35` |
| JH7 — TSW-118-07-G-D | 17 | `host_d36` |
| JH7 — TSW-118-07-G-D | 18 | `host_d37` |
| JH7 — TSW-118-07-G-D | 19 | `host_d38` |
| JH7 — TSW-118-07-G-D | 35 | `gnd` |
| JH7 — TSW-118-07-G-D | 36 | `gnd` |
| JH7 | 1, 2, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34 | NC |
| JH3 | 1, 2, 3, 4, 5, 6, 7, 8 | NC |
| JH2 — TSW-108-07-L-S | 1 | `host_a0` |
| JH2 — TSW-108-07-L-S | 2 | `host_a1` |
| JH2 — TSW-108-07-L-S | 3 | `host_a2` |
| JH2 | 4, 5, 6, 7, 8 | NC |
| JH5 — TSW-110-07-L-S | 1 | `host_d8` |
| JH5 — TSW-110-07-L-S | 3 | `host_d10` |
| JH5 — TSW-110-07-L-S | 7 | `gnd` |
| JH5 | 2, 4, 5, 6, 8, 9, 10 | NC |
| JH6 — TSW-108-07-L-S | 5 | `host_d18` |
| JH6 — TSW-108-07-L-S | 6 | `host_d19` |
| JH6 — TSW-108-07-L-S | 7 | `host_d20` |
| JH6 — TSW-108-07-L-S | 8 | `host_d21` |
| JH6 | 1, 2, 3, 4 | NC |
| JH8 — SSW-103-01-G-D | 1 | `host_miso` |
| JH8 — SSW-103-01-G-D | 3 | `host_sck` |
| JH8 — SSW-103-01-G-D | 4 | `host_mosi` |
| JH8 — SSW-103-01-G-D | 6 | `gnd` |
| JH8 | 2, 5 | NC |
| JH4 — TSW-108-07-L-S | 7 | `host_d6` |
| JH4 — TSW-108-07-L-S | 8 | `host_d7` |
| JH4 | 1, 2, 3, 4, 5, 6 | NC |

</div>

</details>


### Links, controls and indicators

The selected footprint values identify the intended control or indication. A cut-to-disable LED link affects indication, not the protected circuit's electrical qualification. Link population, default state and any reused older labels still need schematic/BOM reconciliation before instructions to cut or bridge are accepted.

| Item | Selected source label | Contact nets / observation |
| --- | --- | --- |
| JP1 | TSW-102-07-L-S | 1 = host_3v3; 2 = power_enable |
| D89 | RED FAULT OR ISOLATED | 1 = signal_enable; 2 = FAULT_ISOLATED_LED_R |
| JP83 | CUT TO DISABLE FAULT_ISOLATED | 1 = host_3v3; 2 = FAULT_ISOLATED_LED |
| D134 | BAT54HGW-Q FAULT LED ANTIPARALLEL | 1 = FAULT_ISOLATED_LED_R; 2 = signal_enable |



## Practical use with Smoothieboard V2 Prime

Use the board to test a compatible low-power I2C Gadgeteer/Qwiic module from an Arduino Due. The Smoothieboard-use requirement is not directly applicable to that host role; communicating with Smoothieboard would require a separately specified host-to-host interface.

**Wiring remains incomplete:** the source-backed candidates below do not yet provide an accepted, complete host → board → peripheral installation. Any candidate P12 Prime2590 allocation below is limited to that revision and must not be copied to a different Prime revision. Its rail contacts are 1 = limited 3.3 V, 2 = limited 5 V, 10 = ground; verify the actual unshrouded host header and cable orientation before applying power.

1. Confirm the host is the intended Due revision and inspect the downward perimeter and central SPI connector orientation before fitting the shield.
2. Leave JP1 unarmed while selecting safe Due pin modes and checking each attached module's power ownership.
3. Use only one powered host. J6.8/J7.3 are the same SDA net and J6.9/J7.4 the same SCL net; account for both branches' pull-ups and addresses.
4. The retained source assigns Due Serial1 D18/D19 to the U socket and central SPI to the S socket. These assignments require the exact shield-to-Due contact reconciliation before a runnable sketch is published.

## Smoothieware use

This is an Arduino Due host shield, so a Smoothieware extension-board driver is not its normal control mechanism. Due application software must configure the exported pins and each peripheral protocol. No verified Smoothieware-on-Due port or safe direct Prime connection is established here. If that is the required use and support is absent, email **wolf.arthur@gamil.com**.

The firmware application/configuration evidence was checked against SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`. This identifies the reviewed source, not the firmware installed on a user’s controller. Source-checked syntax does not establish physical operation.

## Sources and revision notes

The selected-revision engineering repository was unavailable to anonymous readers when checked. Its source links are retained for provenance; an accessible matching source release has not been verified. Firmware and historical-board links are separate sources.

- [Selected v23 source directory](https://github.com/arthurwolf/extension-boards/tree/main/src/arduino-to-gadgeteer-shield/attempt/versions/v23)
- [Design specification](https://github.com/arthurwolf/extension-boards/blob/main/src/arduino-to-gadgeteer-shield/specs.md) — historical design intent where it names an older revision.
- [Design discussion](https://github.com/arthurwolf/extension-boards/blob/main/src/arduino-to-gadgeteer-shield/design.md)
- [All extension boards](/extension-boards)

Upstream source-link availability has **not** been verified for publication.

**Remaining board-specific uncertainty:** Host-role exception, selected v23 protection behavior, complete Due contact reconciliation and actual peripheral example remain open.

<details markdown="1">
<summary>Additional board views and engineering history</summary>

Selected active-component identities: `U4 TMUX1511PWR`; `U3 TMUX1511PWR`; `U6 TMUX1511PWR`; `U1 TMUX1511PWR`; `U11 MAX40200AUK+T`; `U13 TPS3808G33DBVR`; `U5 TMUX1511PWR`; `U15 TPS3808G01DBVR`; `U8 TMUX1511PWR`; `U14 TPS3808G01DBVR`; `U12 MAX40200AUK+T`; `U2 TMUX1511PWR`; `U7 TMUX1511PWR`; `U10 TPS259631DDAR AUTO RETRY 125mA`; `U9 TPS259631DDAR AUTO RETRY 125mA`. These identities are not a substitute for matching datasheet limits.

{% include _includes/extension-board-visuals.html slug="arduino-to-gadgeteer-shield" %}

The retained gallery is supplementary. It is not either required instructional diagram, and it may include older or different populations whose captions must remain explicit. Development iteration and qualification records remain engineering history rather than operating instructions.

</details>
