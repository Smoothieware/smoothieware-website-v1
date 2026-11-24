---
layout: default
title: "Long distance extender (RJ45 differential)"
permalink: /extensions/long-distance-extender
---

# Long distance extender (RJ45 differential)

This paired transmitter/receiver carries three fixed-direction logic signals over differential twisted pairs. THVD1451 devices and Schmitt conditioning regenerate the signals at the remote board. It is a custom non-Ethernet cable interface, not an Ethernet network adapter or a transparent seven-signal bidirectional Gadgeteer cable. The 10 m-class distance is a design goal requiring rate/cable measurements.

## Revision and availability

This guide selects **v15**, matching the revision selected by the retained abstract-diagram inventory. This is a design candidate; availability and operating ratings are unverified. The selected revision and contact map govern this guide; older specifications may describe another circuit.

## Interfaces, power and operating limits

Emitter J1 contacts 3/4/5 are SIG1/2/3 inputs. Receiver J1 contacts 3/4/5 are reconstructed outputs;6–9 are unconnected. Both RJ45 J4 connectors use1/2 channel 1+/−, 3/6 channel 2+/−, 4/5 channel 3+/−, 7 cable5 V and 8 ground; shield is a separate net. The convenience J3 header is 1 5 V, 2 ground, 3–5 signals. Power selection links separately connect host/port, cable and header supplies; blindly closing every 5 V link can backfeed sources. JP4 bonds shield to ground and requires an explicit grounding plan.

The selected emitter fits the **SOURCE** resistor pair so local power feeds the cable through the controlled power path; the receiver fits the **SINK** pair so cable power feeds its local rail. The opposite direction pair is marked not fitted. Confirm actual population before applying power. **F1 is a zero-ohm feed, not a fuse.** A shared ground remains: differential signalling does not provide galvanic isolation. This RJ45 assignment is neither Ethernet nor PoE.

## Board reference

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the source contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Orange: 5 V supply.
- Green: Signal — use the printed function label.
- Near-black: Circuit ground.
- Grey: Not routed in this board revision.
- Dark grey: Other source-labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

The emitter and receiver have separate source-bound references below. Identify the assembly before using any pin or link instructions. Complete Prime installation wiring and actual page/viewer acceptance remain open.

### Emitter assembly

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-emitter-reader-compact-overview" src="/images/extensions/long-distance-extender/guides/emitter/reader-compact-overview.svg" title="Long-distance emitter" alt="Long-distance emitter on the emitter assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-emitter-reader-compact-host-1-5" src="/images/extensions/long-distance-extender/guides/emitter/reader-compact-host-1-5-central-pills.svg" title="J1 · Host signal input" alt="J1 · Host signal input on the emitter assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-emitter-reader-compact-host-6-10" src="/images/extensions/long-distance-extender/guides/emitter/reader-compact-host-6-10-central-pills.svg" title="J1 · Host signal input" alt="J1 · Host signal input on the emitter assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-emitter-reader-compact-header-1-5" src="/images/extensions/long-distance-extender/guides/emitter/reader-compact-header-1-5-central-pills.svg" title="J3 · Alternate signal header" alt="J3 · Alternate signal header on the emitter assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-emitter-reader-compact-chain-1-5" src="/images/extensions/long-distance-extender/guides/emitter/reader-compact-chain-1-5-central-pills.svg" title="J2 · Host chain output" alt="J2 · Host chain output on the emitter assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-emitter-reader-compact-chain-6-10" src="/images/extensions/long-distance-extender/guides/emitter/reader-compact-chain-6-10-central-pills.svg" title="J2 · Host chain output" alt="J2 · Host chain output on the emitter assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-emitter-reader-compact-cable-1-5" src="/images/extensions/long-distance-extender/guides/emitter/reader-compact-cable-1-5-central-pills.svg" title="J4 · Custom differential cable" alt="J4 · Custom differential cable on the emitter assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-emitter-reader-compact-cable-6-SH" src="/images/extensions/long-distance-extender/guides/emitter/reader-compact-cable-6-SH-central-pills.svg" title="J4 · Custom differential cable" alt="J4 · Custom differential cable on the emitter assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-emitter-reader-compact-signals" src="/images/extensions/long-distance-extender/guides/emitter/reader-compact-signals.svg" title="Three signal channels" alt="Three signal channels on the emitter assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-emitter-reader-compact-line" src="/images/extensions/long-distance-extender/guides/emitter/reader-compact-line.svg" title="Line protection and bias" alt="Line protection and bias on the emitter assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-emitter-reader-compact-regulator" src="/images/extensions/long-distance-extender/guides/emitter/reader-compact-regulator.svg" title="Local logic supply" alt="Local logic supply on the emitter assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-emitter-reader-compact-jp1" src="/images/extensions/long-distance-extender/guides/emitter/reader-compact-jp1.svg" title="Power / chain link" alt="Power / chain link on the emitter assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-emitter-reader-compact-jp2" src="/images/extensions/long-distance-extender/guides/emitter/reader-compact-jp2.svg" title="Power / chain link" alt="Power / chain link on the emitter assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-emitter-reader-compact-jp3" src="/images/extensions/long-distance-extender/guides/emitter/reader-compact-jp3.svg" title="Power / chain link" alt="Power / chain link on the emitter assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-emitter-reader-compact-jp5" src="/images/extensions/long-distance-extender/guides/emitter/reader-compact-jp5.svg" title="Power / chain link" alt="Power / chain link on the emitter assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-emitter-reader-compact-jp6" src="/images/extensions/long-distance-extender/guides/emitter/reader-compact-jp6.svg" title="Power / chain link" alt="Power / chain link on the emitter assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-emitter-reader-compact-jp7" src="/images/extensions/long-distance-extender/guides/emitter/reader-compact-jp7.svg" title="Power / chain link" alt="Power / chain link on the emitter assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-emitter-reader-compact-jp8" src="/images/extensions/long-distance-extender/guides/emitter/reader-compact-jp8.svg" title="Power / chain link" alt="Power / chain link on the emitter assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-emitter-reader-compact-jp9" src="/images/extensions/long-distance-extender/guides/emitter/reader-compact-jp9.svg" title="Power / chain link" alt="Power / chain link on the emitter assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-emitter-reader-compact-jp10" src="/images/extensions/long-distance-extender/guides/emitter/reader-compact-jp10.svg" title="Power / chain link" alt="Power / chain link on the emitter assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-emitter-reader-compact-shield" src="/images/extensions/long-distance-extender/guides/emitter/reader-compact-shield.svg" title="Cable shield connection" alt="Cable shield connection on the emitter assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-emitter-reader-compact-led1" src="/images/extensions/long-distance-extender/guides/emitter/reader-compact-led1.svg" title="Channel1 indication" alt="Channel1 indication on the emitter assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-emitter-reader-compact-led2" src="/images/extensions/long-distance-extender/guides/emitter/reader-compact-led2.svg" title="Channel2 indication" alt="Channel2 indication on the emitter assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-emitter-reader-compact-led3" src="/images/extensions/long-distance-extender/guides/emitter/reader-compact-led3.svg" title="Channel3 indication" alt="Channel3 indication on the emitter assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-emitter-reader-compact-power-led" src="/images/extensions/long-distance-extender/guides/emitter/reader-compact-power-led.svg" title="Local power indication" alt="Local power indication on the emitter assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-emitter-reader-compact-direction" src="/images/extensions/long-distance-extender/guides/emitter/reader-compact-direction-underside-caption.svg" title="Cable power direction" alt="Cable power direction on the emitter assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-emitter-reader-compact-protection" src="/images/extensions/long-distance-extender/guides/emitter/reader-compact-protection-underside-caption.svg" title="Cable supply protection" alt="Cable supply protection on the emitter assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-emitter-reader-compact-warnings" src="/images/extensions/long-distance-extender/guides/emitter/reader-compact-warnings-underside-caption.svg" title="Power warning indicators" alt="Power warning indicators on the emitter assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-emitter-reader-compact-warning-clamps" src="/images/extensions/long-distance-extender/guides/emitter/reader-compact-warning-clamps-underside-caption.svg" title="Power warning clamps" alt="Power warning clamps on the emitter assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-emitter-reader-compact-tests1" src="/images/extensions/long-distance-extender/guides/emitter/reader-compact-tests1-underside-caption.svg" title="Supply and signal tests" alt="Supply and signal tests on the emitter assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-emitter-reader-compact-tests5" src="/images/extensions/long-distance-extender/guides/emitter/reader-compact-tests5-underside-caption.svg" title="Supply and signal tests" alt="Supply and signal tests on the emitter assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-emitter-reader-compact-mounts" src="/images/extensions/long-distance-extender/guides/emitter/reader-compact-mounts.svg" title="Mounting holes" alt="Mounting holes on the emitter assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

### Receiver assembly

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-receiver-reader-compact-overview" src="/images/extensions/long-distance-extender/guides/receiver/reader-compact-overview.svg" title="Long-distance receiver" alt="Long-distance receiver on the receiver assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-receiver-reader-compact-host-1-5" src="/images/extensions/long-distance-extender/guides/receiver/reader-compact-host-1-5-central-pills.svg" title="J1 · Peripheral signal output" alt="J1 · Peripheral signal output on the receiver assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-receiver-reader-compact-host-6-10" src="/images/extensions/long-distance-extender/guides/receiver/reader-compact-host-6-10-central-pills.svg" title="J1 · Peripheral signal output" alt="J1 · Peripheral signal output on the receiver assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-receiver-reader-compact-header-1-5" src="/images/extensions/long-distance-extender/guides/receiver/reader-compact-header-1-5-central-pills.svg" title="J3 · Alternate signal header" alt="J3 · Alternate signal header on the receiver assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-receiver-reader-compact-cable-1-5" src="/images/extensions/long-distance-extender/guides/receiver/reader-compact-cable-1-5-central-pills.svg" title="J4 · Custom differential cable" alt="J4 · Custom differential cable on the receiver assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-receiver-reader-compact-cable-6-SH" src="/images/extensions/long-distance-extender/guides/receiver/reader-compact-cable-6-SH-central-pills.svg" title="J4 · Custom differential cable" alt="J4 · Custom differential cable on the receiver assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-receiver-reader-compact-signals" src="/images/extensions/long-distance-extender/guides/receiver/reader-compact-signals.svg" title="Three signal channels" alt="Three signal channels on the receiver assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-receiver-reader-compact-line" src="/images/extensions/long-distance-extender/guides/receiver/reader-compact-line.svg" title="Line protection and bias" alt="Line protection and bias on the receiver assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-receiver-reader-compact-regulator" src="/images/extensions/long-distance-extender/guides/receiver/reader-compact-regulator.svg" title="Local logic supply" alt="Local logic supply on the receiver assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-receiver-reader-compact-jp1" src="/images/extensions/long-distance-extender/guides/receiver/reader-compact-jp1.svg" title="Power / chain link" alt="Power / chain link on the receiver assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-receiver-reader-compact-jp2" src="/images/extensions/long-distance-extender/guides/receiver/reader-compact-jp2.svg" title="Power / chain link" alt="Power / chain link on the receiver assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-receiver-reader-compact-jp3" src="/images/extensions/long-distance-extender/guides/receiver/reader-compact-jp3.svg" title="Power / chain link" alt="Power / chain link on the receiver assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-receiver-reader-compact-jp5" src="/images/extensions/long-distance-extender/guides/receiver/reader-compact-jp5.svg" title="Power / chain link" alt="Power / chain link on the receiver assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-receiver-reader-compact-shield" src="/images/extensions/long-distance-extender/guides/receiver/reader-compact-shield.svg" title="Cable shield connection" alt="Cable shield connection on the receiver assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-receiver-reader-compact-led1" src="/images/extensions/long-distance-extender/guides/receiver/reader-compact-led1.svg" title="Channel1 indication" alt="Channel1 indication on the receiver assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-receiver-reader-compact-led2" src="/images/extensions/long-distance-extender/guides/receiver/reader-compact-led2.svg" title="Channel2 indication" alt="Channel2 indication on the receiver assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-receiver-reader-compact-led3" src="/images/extensions/long-distance-extender/guides/receiver/reader-compact-led3.svg" title="Channel3 indication" alt="Channel3 indication on the receiver assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-receiver-reader-compact-power-led" src="/images/extensions/long-distance-extender/guides/receiver/reader-compact-power-led.svg" title="Local power indication" alt="Local power indication on the receiver assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-receiver-reader-compact-direction" src="/images/extensions/long-distance-extender/guides/receiver/reader-compact-direction-underside-caption.svg" title="Cable power direction" alt="Cable power direction on the receiver assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-receiver-reader-compact-protection" src="/images/extensions/long-distance-extender/guides/receiver/reader-compact-protection-underside-caption.svg" title="Cable supply protection" alt="Cable supply protection on the receiver assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-receiver-reader-compact-warnings" src="/images/extensions/long-distance-extender/guides/receiver/reader-compact-warnings-underside-caption.svg" title="Power warning indicators" alt="Power warning indicators on the receiver assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-receiver-reader-compact-warning-clamps" src="/images/extensions/long-distance-extender/guides/receiver/reader-compact-warning-clamps-underside-caption.svg" title="Power warning clamps" alt="Power warning clamps on the receiver assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-receiver-reader-compact-termination" src="/images/extensions/long-distance-extender/guides/receiver/reader-compact-termination.svg" title="Receiver termination" alt="Receiver termination on the receiver assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-receiver-reader-compact-tests1" src="/images/extensions/long-distance-extender/guides/receiver/reader-compact-tests1-underside-caption.svg" title="Supply and signal tests" alt="Supply and signal tests on the receiver assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-receiver-reader-compact-tests5" src="/images/extensions/long-distance-extender/guides/receiver/reader-compact-tests5-underside-caption.svg" title="Supply and signal tests" alt="Supply and signal tests on the receiver assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-receiver-reader-compact-mounts" src="/images/extensions/long-distance-extender/guides/receiver/reader-compact-mounts.svg" title="Mounting holes" alt="Mounting holes on the receiver assembly, v15" caption="Selected-source component-side reference for this assembly. Use the overview and focused sheets together. Bridge continuity, cable orientation and complete Prime wiring remain open." width=420 %}

The following is the exact selected PCB’s intended pad-to-net schedule. Net labels identify circuit nodes; they are not wire colours or measured voltage/current ratings. Explicit unconnected contacts must remain unused. Duplicate physical pads with the same contact number represent alternative lands, not extra channels. Selector bridge/default population must be confirmed from the selected assembly record before alteration.

<details markdown="1">
<summary>Selected-source contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Selected-source contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Member / reference | Label / control | Kind | Numbered contacts / assigned nodes |
|---|---|---|---|
| emitter / J1 | GADGETEER Y IN (host) | Connector | 1: +3V3_HOST; 2: +5V_HOST; 3: SIG1_IN; 4: SIG2_IN; 5: SIG3_IN; 6: HOST_P6; 7: HOST_P7; 8: HOST_P8; 9: HOST_P9; 10: GND |
| emitter / J2 | GADGETEER Y CHAIN | Connector | 1: CHAIN_3V3; 2: CHAIN_5V; 3: unconnected-(J2-Pin_3-Pad3); 4: unconnected-(J2-Pin_4-Pad4); 5: unconnected-(J2-Pin_5-Pad5); 6: CHAIN_P6; 7: CHAIN_P7; 8: CHAIN_P8; 9: CHAIN_P9; 10: GND |
| emitter / J3 | HDR 5V GND S1 S2 S3 | Connector | 1: +5V_HDR; 2: GND; 3: SIG1_IN; 4: SIG2_IN; 5: SIG3_IN |
| emitter / J4 | RJ45 NOT ETHERNET EMITTER | Connector | 1: CH1_P; 2: CH1_N; 3: CH2_P; 4: CH3_P; 5: CH3_N; 6: CH2_N; 7: +5V_CABLE; 8: GND; SH: SHIELD |
| emitter / D5 | POWER 3V3 | Indicator | 1: GND; 2: LED_D5_DISABLE |
| emitter / D6 | CH1 lit=HIGH | Indicator | 1: SIG1_INV; 2: LED_D6_DISABLE |
| emitter / D7 | CH2 lit=HIGH | Indicator | 1: SIG2_INV; 2: LED_D7_DISABLE |
| emitter / D8 | CH3 lit=HIGH | Indicator | 1: SIG3_INV; 2: LED_D8_DISABLE |
| emitter / D981 | AMBER OVERVOLTAGE | Indicator | 1: EFP_OV_N; 2: EFP_OV_LED_R |
| emitter / D983 | RED EFUSE FAULT | Indicator | 1: EFP_FAULT_N; 2: EFP_FUSE_FAULT_LED_R |
| emitter / D987 | RED REVERSE BLINK | Indicator | 1: REV_OUT; 2: REVERSE_LED_R |
| emitter / TP1 | GND | Observation only | 1: GND |
| emitter / TP2 | GND | Observation only | 1: GND |
| emitter / TP3 | +5V | Observation only | 1: +5V_LOCAL |
| emitter / TP4 | +3V3 | Observation only | 1: +3V3 |
| emitter / TP5 | S1 | Observation only | 1: SIG1_IN |
| emitter / TP6 | S2 | Observation only | 1: SIG2_IN |
| emitter / TP7 | S3 | Observation only | 1: SIG3_IN |
| emitter / JP1 | 5V GAD link | Service link/selector | 1: +5V_HOST; 2: +5V_LOCAL |
| emitter / JP10 | CHAIN P9 | Service link/selector | 1: HOST_P9; 2: CHAIN_P9 |
| emitter / JP11 | CUT TO DISABLE D6 | Service link/selector | 1: LED_D6_DISABLE; 2: LED1_A |
| emitter / JP12 | CUT TO DISABLE D8 | Service link/selector | 1: LED_D8_DISABLE; 2: LED3_A |
| emitter / JP13 | CUT TO DISABLE D7 | Service link/selector | 1: LED_D7_DISABLE; 2: LED2_A |
| emitter / JP14 | CUT TO DISABLE D5 | Service link/selector | 1: LED_D5_DISABLE; 2: PWR_LED_A |
| emitter / JP2 | 5V CABLE link | Service link/selector | 1: +5V_CPTC; 2: +5V_LOCAL |
| emitter / JP3 | 5V HDR link | Service link/selector | 1: +5V_LOCAL; 2: +5V_HDR |
| emitter / JP4 | SHLD-GND bond | Service link/selector | 1: SHIELD; 2: GND |
| emitter / JP5 | CHAIN 3V3 | Service link/selector | 1: +3V3_HOST; 2: CHAIN_3V3 |
| emitter / JP6 | CHAIN 5V | Service link/selector | 1: +5V_HOST; 2: CHAIN_5V |
| emitter / JP7 | CHAIN P6 | Service link/selector | 1: HOST_P6; 2: CHAIN_P6 |
| emitter / JP8 | CHAIN P7 | Service link/selector | 1: HOST_P7; 2: CHAIN_P7 |
| emitter / JP9 | CHAIN P8 | Service link/selector | 1: HOST_P8; 2: CHAIN_P8 |
| emitter / JP980 | CUT TO DISABLE RAIL0_OV PORT0 | Service link/selector | 1: EFP_FAULT_AUX; 2: EFP_OV_LED |
| emitter / JP981 | CUT TO DISABLE FUSE_FAULT PORT0 | Service link/selector | 1: EFP_FAULT_AUX; 2: EFP_FUSE_FAULT_LED |
| emitter / JP982 | CUT TO DISABLE REVERSE | Service link/selector | 1: REV_VCC; 2: REVERSE_LED |
| receiver / J1 | GADGETEER Y OUT (peripheral) | Connector | 1: +3V3_PORT; 2: +5V_PORT; 3: SIG1_OUT; 4: SIG2_OUT; 5: SIG3_OUT; 6: unconnected-(J1-Pin_6-Pad6); 7: unconnected-(J1-Pin_7-Pad7); 8: unconnected-(J1-Pin_8-Pad8); 9: unconnected-(J1-Pin_9-Pad9); 10: GND |
| receiver / J3 | HDR 5V GND S1 S2 S3 | Connector | 1: +5V_HDR; 2: GND; 3: SIG1_OUT; 4: SIG2_OUT; 5: SIG3_OUT |
| receiver / J4 | RJ45 NOT ETHERNET RECEIVER | Connector | 1: CH1_P; 2: CH1_N; 3: CH2_P; 4: CH3_P; 5: CH3_N; 6: CH2_N; 7: +5V_CABLE; 8: GND; SH: SHIELD |
| receiver / D5 | POWER 3V3 | Indicator | 1: GND; 2: LED_D5_DISABLE |
| receiver / D6 | CH1 lit=HIGH | Indicator | 1: GND; 2: LED_D6_DISABLE |
| receiver / D7 | CH2 lit=HIGH | Indicator | 1: GND; 2: LED_D7_DISABLE |
| receiver / D8 | CH3 lit=HIGH | Indicator | 1: GND; 2: LED_D8_DISABLE |
| receiver / D981 | AMBER OVERVOLTAGE | Indicator | 1: EFP_OV_N; 2: EFP_OV_LED_R |
| receiver / D983 | RED EFUSE FAULT | Indicator | 1: EFP_FAULT_N; 2: EFP_FUSE_FAULT_LED_R |
| receiver / D987 | RED REVERSE BLINK | Indicator | 1: REV_OUT; 2: REVERSE_LED_R |
| receiver / TP1 | GND | Observation only | 1: GND |
| receiver / TP2 | GND | Observation only | 1: GND |
| receiver / TP3 | +5V | Observation only | 1: +5V_LOCAL |
| receiver / TP4 | +3V3 | Observation only | 1: +3V3 |
| receiver / TP5 | S1 | Observation only | 1: SIG1_OUT |
| receiver / TP6 | S2 | Observation only | 1: SIG2_OUT |
| receiver / TP7 | S3 | Observation only | 1: SIG3_OUT |
| receiver / JP1 | 5V PORT link | Service link/selector | 1: +5V_LOCAL; 2: +5V_PORT |
| receiver / JP2 | 5V CABLE link | Service link/selector | 1: +5V_CPTC; 2: +5V_LOCAL |
| receiver / JP3 | 5V HDR link | Service link/selector | 1: +5V_LOCAL; 2: +5V_HDR |
| receiver / JP4 | SHLD-GND bond | Service link/selector | 1: SHIELD; 2: GND |
| receiver / JP5 | 3V3 PORT link | Service link/selector | 1: +3V3; 2: +3V3_PORT |
| receiver / JP6 | CUT TO DISABLE D8 | Service link/selector | 1: LED_D8_DISABLE; 2: LED3_A |
| receiver / JP7 | CUT TO DISABLE D5 | Service link/selector | 1: LED_D5_DISABLE; 2: PWR_LED_A |
| receiver / JP8 | CUT TO DISABLE D7 | Service link/selector | 1: LED_D7_DISABLE; 2: LED2_A |
| receiver / JP9 | CUT TO DISABLE D6 | Service link/selector | 1: LED_D6_DISABLE; 2: LED1_A |
| receiver / JP980 | CUT TO DISABLE RAIL0_OV PORT0 | Service link/selector | 1: EFP_FAULT_AUX; 2: EFP_OV_LED |
| receiver / JP981 | CUT TO DISABLE FUSE_FAULT PORT0 | Service link/selector | 1: EFP_FAULT_AUX; 2: EFP_FUSE_FAULT_LED |
| receiver / JP982 | CUT TO DISABLE REVERSE | Service link/selector | 1: REV_VCC; 2: REVERSE_LED |

</div>

</details>


## Practical connection to Smoothieboard V2 Prime

### Native-contact connection reference — incomplete

The selected v15 emitter and receiver carry one illustrated channel from Prime GF/J37 to a Fluke 117 voltage input. **Keep every supply disconnected; do not energize this circuit.** Supply leads are deliberately omitted because available current, protection behaviour, cable drop, receiver rail margin and backfeed remain unresolved. The drawing is an incomplete source-traced connection reference, not an operating installation. Prime artwork is P11; the P12 J37 assignments were checked separately.

This is the deliberately incomplete seven-lead signal/return subset; the selected ten-lead unpowered continuity/layout plan follows the drawing and safety qualifications. Its 3.3 V and 5 V contact names identify conductors only; those rails remain disconnected from every source.

The seven individual leads are:

1. Prime J37.3 (PB1) → emitter J1.3 (SIG1), and J37.10 (ground) → emitter J1.10. Leave J37.1/.2 and emitter supply contacts disconnected.
2. Emitter J4.1 → receiver J4.1 (channel 1+), J4.2 → J4.2 (channel 1−), and J4.8 → J4.8 (common ground). Leave cable power J4.7 and the other signal pairs disconnected. This custom RJ45 assignment is neither Ethernet nor PoE; it does not authorize fitting an ordinary network cable.
3. Receiver J3.3 (channel-1 output) → the Fluke 117 V input, and J3.2 (ground) → COM. The conditional meter setting is DC volts, with input resistance greater than 10 MΩ; do not use Auto-V LoZ or a current-input configuration. No powered measurement is authorized by this incomplete reference.

Identify emitter and receiver before using a contact key. The selected emitter has SOURCE resistor population and receiver has SINK population; opposite-direction parts are not fitted in the selected source. Verify actual fitted parts and link positions. Each F1 is a zero-ohm feed, not a fuse. The shared return means there is no galvanic isolation. The source circuit preserves polarity through two inversions, but the operating rate and distance have not been established.

Read the main drawing with the five selected-connector sheets. Dashed locators show the enlarged rows on the complete canonical board abstracts. These source PCB views are not plug mating faces.

{% include _includes/extension-instruction-diagram.html id="long-distance-native-long-distance-native-reader" src="/images/extensions/long-distance-extender/guides/native-contact/reader-legibility-corrected/long-distance-native-reader.svg" title="Prime, emitter, receiver and meter — seven-lead signal subset" alt="Prime, emitter, receiver and meter — seven-lead signal subset" caption="Incomplete seven-lead signal/return subset; it omits the four feed conductors in the selected ten-lead test plan below. Keep every supply disconnected. Read the qualifications and all 91 contact keys. Native PCB geometry is not a plug mating view." width=900 %}

#### Connection qualifications

The following restrictions apply to the entire connection reference. Read them before using the contact keys; neither diagram is a powered installation.

{% include _includes/extension-instruction-diagram.html id="long-distance-native-qualifications" src="/images/extensions/long-distance-extender/guides/native-contact/reader-legibility-corrected/qualifications.svg" title="Connection qualifications — all supplies disconnected" alt="Power, isolation, cable, meter and source limitations for the incomplete connection reference" caption="Read with the main reference above. These qualifications preserve the selected-source limits; current, cable rate, rail margins and physical mating remain unqualified." width=900 %}

### Selected unpowered ten-lead test wiring plan

This selected v15 continuity/layout test map connects the emitter and receiver to Prime GF/J37 and a Fluke 117 set to DC volts. **Remove all power sources and keep the entire test unpowered.** The listed 3.3 V and 5 V conductors identify contacts only; they do not authorize powering the boards. Receiver rail margin, protection behaviour and the shared host power budget are unqualified. This is not a commissioning procedure or permission to energize a machine installation. Prime artwork is P11, with the selected P12 J37 contact map checked separately.

{% include _includes/extension-instruction-diagram.html id="long-distance-v15-compact-prime-installation-wiring" src="/images/extensions/long-distance-extender/guides/compact-prime-installation-wiring.svg" title="Single-channel extender · unpowered plan" alt="Single-channel extender · unpowered plan" caption="Ten individual leads; PB1 output, differential channel 1 and receiver measurement. Protection, power margins and complete wiring acceptance remain open." width=420 %}

With every supply disconnected, identify the numbered PCB contacts:

1. Prime J37.1/2/3/10 correspond to emitter J1.1/2/3/10: 3.3 V, 5 V, PB1 and ground. Leave J1.4–9 unused. The selected input has a 1 kΩ series resistor and 47 kΩ bias; unused channels 2 and 3 retain their source pull-downs.
2. Emitter J4.1/2/7/8 correspond to receiver J4.1/2/7/8: S1+, S1−, cable 5 V and ground. Leave the other signal pairs unused. These are four individually identified leads, not an instruction to fit a complete eight-contact network cable. This assignment is **not Ethernet or PoE**.
3. Receiver J3.3 is the channel-1 output and goes to the Fluke 117 V terminal; J3.2 goes to COM. Select DC volts. Leave the other receiver outputs and its unused connectors open. Do not put the meter in a current-input configuration.

Keep the selected JP1/JP2/JP3 bridged defaults and JP4 shield bonds open; verify the actual populations rather than assuming an assembled board matches CAD. Emitter SOURCE and receiver SINK populations must match the selected revision. **Each selected F1 is a zero-ohm link, not a fuse.** Do not inject an external supply. The shared power budget, cable drop, receiver minimum rail and protection behavior remain prerequisites to any powered procedure.

The signal passes through two inversions, so the source circuit preserves logic polarity. This does not establish measured levels, propagation delay, supported cable length or operating rate. Ground remains common: the pair provides no galvanic isolation.

### Enlarged selected-contact keys

These show native PCB-pad geometry, not the mating face of a plug. Filled pads identify selected connections; open pads stay unused. Read them with the complete plan and verify physical orientation before constructing a cable.

{% include _includes/extension-instruction-diagram.html id="long-distance-v15-compact-J1-emitter-numbered-pads" src="/images/extensions/long-distance-extender/guides/compact-J1-emitter-numbered-pads.svg" title="Extender v15 · J1-emitter" alt="Extender v15 · J1-emitter" caption="Selected native PCB pads; not plug-face geometry or powered installation acceptance." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-v15-compact-J3-receiver-numbered-pads" src="/images/extensions/long-distance-extender/guides/compact-J3-receiver-numbered-pads.svg" title="Extender v15 · J3-receiver" alt="Extender v15 · J3-receiver" caption="Selected native PCB pads; not plug-face geometry or powered installation acceptance." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-v15-compact-J37-numbered-pads" src="/images/extensions/long-distance-extender/guides/compact-J37-numbered-pads.svg" title="Extender v15 · J37" alt="Extender v15 · J37" caption="Selected native PCB pads; not plug-face geometry or powered installation acceptance." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-v15-compact-J4-emitter-numbered-pads" src="/images/extensions/long-distance-extender/guides/compact-J4-emitter-numbered-pads.svg" title="Extender v15 · J4-emitter" alt="Extender v15 · J4-emitter" caption="Selected native PCB pads; not plug-face geometry or powered installation acceptance." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-v15-compact-J4-receiver-numbered-pads" src="/images/extensions/long-distance-extender/guides/compact-J4-receiver-numbered-pads.svg" title="Extender v15 · J4-receiver" alt="Extender v15 · J4-receiver" caption="Selected native PCB pads; not plug-face geometry or powered installation acceptance." width=420 %}


{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-j1" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-J1.svg" title="emitter · J1 — native contact key" alt="emitter · J1 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-j4" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-J4.svg" title="emitter · J4 — native contact key" alt="emitter · J4 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-prime-j37" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/prime-J37.svg" title="prime · J37 — native contact key" alt="prime · J37 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-j3" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-J3.svg" title="receiver · J3 — native contact key" alt="receiver · J3 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-j4" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-J4.svg" title="receiver · J4 — native contact key" alt="receiver · J4 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

<details markdown="1">
<summary>All other emitter and receiver contact, jumper and indicator keys</summary>

These reference sheets retain all numbered contacts. They do not add connections to the seven-lead incomplete reference above.

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-d1" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-D1.svg" title="emitter · D1 — native contact key" alt="emitter · D1 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-d1030" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-D1030.svg" title="emitter · D1030 — native contact key" alt="emitter · D1030 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-d1033" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-D1033.svg" title="emitter · D1033 — native contact key" alt="emitter · D1033 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-d1034" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-D1034.svg" title="emitter · D1034 — native contact key" alt="emitter · D1034 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-d1980" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-D1980.svg" title="emitter · D1980 — native contact key" alt="emitter · D1980 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-d1981" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-D1981.svg" title="emitter · D1981 — native contact key" alt="emitter · D1981 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-d1982" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-D1982.svg" title="emitter · D1982 — native contact key" alt="emitter · D1982 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-d1984" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-D1984.svg" title="emitter · D1984 — native contact key" alt="emitter · D1984 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-d2" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-D2.svg" title="emitter · D2 — native contact key" alt="emitter · D2 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-d3" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-D3.svg" title="emitter · D3 — native contact key" alt="emitter · D3 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-d4" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-D4.svg" title="emitter · D4 — native contact key" alt="emitter · D4 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-d5" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-D5.svg" title="emitter · D5 — native contact key" alt="emitter · D5 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-d6" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-D6.svg" title="emitter · D6 — native contact key" alt="emitter · D6 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-d7" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-D7.svg" title="emitter · D7 — native contact key" alt="emitter · D7 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-d8" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-D8.svg" title="emitter · D8 — native contact key" alt="emitter · D8 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-d981" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-D981.svg" title="emitter · D981 — native contact key" alt="emitter · D981 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-d982" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-D982.svg" title="emitter · D982 — native contact key" alt="emitter · D982 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-d983" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-D983.svg" title="emitter · D983 — native contact key" alt="emitter · D983 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-d984" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-D984.svg" title="emitter · D984 — native contact key" alt="emitter · D984 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-d985" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-D985.svg" title="emitter · D985 — native contact key" alt="emitter · D985 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-d986" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-D986.svg" title="emitter · D986 — native contact key" alt="emitter · D986 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-d987" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-D987.svg" title="emitter · D987 — native contact key" alt="emitter · D987 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-f1" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-F1.svg" title="emitter · F1 — native contact key" alt="emitter · F1 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-j2" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-J2.svg" title="emitter · J2 — native contact key" alt="emitter · J2 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-j3" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-J3.svg" title="emitter · J3 — native contact key" alt="emitter · J3 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-jp1" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-JP1.svg" title="emitter · JP1 — native contact key" alt="emitter · JP1 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-jp10" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-JP10.svg" title="emitter · JP10 — native contact key" alt="emitter · JP10 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-jp11" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-JP11.svg" title="emitter · JP11 — native contact key" alt="emitter · JP11 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-jp12" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-JP12.svg" title="emitter · JP12 — native contact key" alt="emitter · JP12 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-jp13" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-JP13.svg" title="emitter · JP13 — native contact key" alt="emitter · JP13 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-jp14" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-JP14.svg" title="emitter · JP14 — native contact key" alt="emitter · JP14 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-jp2" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-JP2.svg" title="emitter · JP2 — native contact key" alt="emitter · JP2 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-jp3" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-JP3.svg" title="emitter · JP3 — native contact key" alt="emitter · JP3 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-jp4" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-JP4.svg" title="emitter · JP4 — native contact key" alt="emitter · JP4 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-jp5" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-JP5.svg" title="emitter · JP5 — native contact key" alt="emitter · JP5 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-jp6" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-JP6.svg" title="emitter · JP6 — native contact key" alt="emitter · JP6 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-jp7" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-JP7.svg" title="emitter · JP7 — native contact key" alt="emitter · JP7 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-jp8" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-JP8.svg" title="emitter · JP8 — native contact key" alt="emitter · JP8 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-jp9" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-JP9.svg" title="emitter · JP9 — native contact key" alt="emitter · JP9 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-jp980" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-JP980.svg" title="emitter · JP980 — native contact key" alt="emitter · JP980 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-jp981" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-JP981.svg" title="emitter · JP981 — native contact key" alt="emitter · JP981 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-jp982" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-JP982.svg" title="emitter · JP982 — native contact key" alt="emitter · JP982 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-r1980" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-R1980.svg" title="emitter · R1980 — native contact key" alt="emitter · R1980 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-r1981" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-R1981.svg" title="emitter · R1981 — native contact key" alt="emitter · R1981 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-r1982" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-R1982.svg" title="emitter · R1982 — native contact key" alt="emitter · R1982 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-emitter-r1983" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/emitter-R1983.svg" title="emitter · R1983 — native contact key" alt="emitter · R1983 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-d1" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-D1.svg" title="receiver · D1 — native contact key" alt="receiver · D1 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-d1030" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-D1030.svg" title="receiver · D1030 — native contact key" alt="receiver · D1030 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-d1033" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-D1033.svg" title="receiver · D1033 — native contact key" alt="receiver · D1033 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-d1034" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-D1034.svg" title="receiver · D1034 — native contact key" alt="receiver · D1034 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-d1980" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-D1980.svg" title="receiver · D1980 — native contact key" alt="receiver · D1980 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-d1981" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-D1981.svg" title="receiver · D1981 — native contact key" alt="receiver · D1981 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-d1982" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-D1982.svg" title="receiver · D1982 — native contact key" alt="receiver · D1982 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-d1984" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-D1984.svg" title="receiver · D1984 — native contact key" alt="receiver · D1984 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-d2" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-D2.svg" title="receiver · D2 — native contact key" alt="receiver · D2 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-d3" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-D3.svg" title="receiver · D3 — native contact key" alt="receiver · D3 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-d4" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-D4.svg" title="receiver · D4 — native contact key" alt="receiver · D4 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-d5" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-D5.svg" title="receiver · D5 — native contact key" alt="receiver · D5 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-d6" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-D6.svg" title="receiver · D6 — native contact key" alt="receiver · D6 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-d7" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-D7.svg" title="receiver · D7 — native contact key" alt="receiver · D7 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-d8" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-D8.svg" title="receiver · D8 — native contact key" alt="receiver · D8 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-d981" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-D981.svg" title="receiver · D981 — native contact key" alt="receiver · D981 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-d982" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-D982.svg" title="receiver · D982 — native contact key" alt="receiver · D982 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-d983" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-D983.svg" title="receiver · D983 — native contact key" alt="receiver · D983 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-d984" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-D984.svg" title="receiver · D984 — native contact key" alt="receiver · D984 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-d985" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-D985.svg" title="receiver · D985 — native contact key" alt="receiver · D985 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-d986" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-D986.svg" title="receiver · D986 — native contact key" alt="receiver · D986 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-d987" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-D987.svg" title="receiver · D987 — native contact key" alt="receiver · D987 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-f1" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-F1.svg" title="receiver · F1 — native contact key" alt="receiver · F1 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-j1" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-J1.svg" title="receiver · J1 — native contact key" alt="receiver · J1 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-jp1" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-JP1.svg" title="receiver · JP1 — native contact key" alt="receiver · JP1 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-jp2" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-JP2.svg" title="receiver · JP2 — native contact key" alt="receiver · JP2 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-jp3" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-JP3.svg" title="receiver · JP3 — native contact key" alt="receiver · JP3 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-jp4" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-JP4.svg" title="receiver · JP4 — native contact key" alt="receiver · JP4 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-jp5" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-JP5.svg" title="receiver · JP5 — native contact key" alt="receiver · JP5 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-jp6" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-JP6.svg" title="receiver · JP6 — native contact key" alt="receiver · JP6 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-jp7" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-JP7.svg" title="receiver · JP7 — native contact key" alt="receiver · JP7 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-jp8" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-JP8.svg" title="receiver · JP8 — native contact key" alt="receiver · JP8 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-jp9" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-JP9.svg" title="receiver · JP9 — native contact key" alt="receiver · JP9 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-jp980" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-JP980.svg" title="receiver · JP980 — native contact key" alt="receiver · JP980 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-jp981" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-JP981.svg" title="receiver · JP981 — native contact key" alt="receiver · JP981 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-jp982" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-JP982.svg" title="receiver · JP982 — native contact key" alt="receiver · JP982 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-r1980" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-R1980.svg" title="receiver · R1980 — native contact key" alt="receiver · R1980 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-r1981" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-R1981.svg" title="receiver · R1981 — native contact key" alt="receiver · R1981 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-r1982" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-R1982.svg" title="receiver · R1982 — native contact key" alt="receiver · R1982 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

{% include _includes/extension-instruction-diagram.html id="long-distance-native-receiver-r1983" src="/images/extensions/long-distance-extender/guides/native-contact/reader-contact-keys/receiver-R1983.svg" title="receiver · R1983 — native contact key" alt="receiver · R1983 — native contact key" caption="Selected v15 source contacts; verify the assembly and numbered position. Unselected pads and supplies remain disconnected in the incomplete main reference." width=420 %}

</details>

<details markdown="1">
<summary>Earlier unqualified wiring studies — retained source comparisons</summary>

These older studies include supply connections whose operating margins remain unresolved. They are not commissioning procedures and do not replace the deliberately unpowered native-contact reference above.



<details>
<summary>Retained wider three-channel source comparison</summary>

{% include _includes/extension-instruction-diagram.html id="long-distance-extender-v15-prime-bench-wiring" src="/images/extensions/long-distance-extender/guides/prime-installation-wiring.svg" title="Paired three-channel bench wiring" alt="Prime GF J37 to v15 emitter, numbered eight-contact cable, receiver and three oscilloscope channels" caption="Source-bound bench candidate. Use the numbered connection steps below; power budget and physical operation remain open." width=1800 %}

This retained drawing includes additional channels and cable positions. It is a source comparison, not the selected ten-lead plan or a commissioning procedure. Power, protection, physical mating and reader acceptance remain unqualified.

</details>


</details>

## Smoothieware behaviour and commissioning

The physical layer needs no protocol driver; the attached signal determines firmware use. A free GPIO digital switch is a candidate, but the selected source has two inversions that preserve polarity, while actual levels and timing must be measured before copying a generic [switch] example. This pair cannot return an endstop signal through a channel wired host-to-remote. If an intended endpoint needs missing firmware support, email **wolf.arthur@gamil.com**.

### Static host request with the extender disconnected

The selected plan uses only PB1. Keep the extender and all loads disconnected while checking this software request. Reserve PB1 and the commands in the complete machine configuration; merge these entries into the existing section.

```ini
[switch]
link_signal1.enable = true
link_signal1.output_pin = PB1
link_signal1.output_type = digital
link_signal1.input_on_command = M42
link_signal1.input_off_command = M43
link_signal1.subcode = 21
link_signal1.startup_state = false
link_signal1.halt_set_to = false
link_signal1.ignore_on_halt = false
```

Send `M43.21` to request LOW, `M42.21` to request HIGH, then `M43.21` to return LOW. These commands establish the software requests; they do not verify the disconnected receiver output. No powered receiver measurement sequence is qualified here. Startup and handled-halt settings do not guarantee levels during boot, reset or disconnection. Channels 2 and 3 are unused in this plan. The physical layer has no register driver; a complete attached-device application still needs its own support. Email **wolf.arthur@gamil.com** for the missing integration.

These instructions identify source behavior at SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`; they do not identify the installed build or prove target execution. Reserve every listed pin and command in the complete configuration. Merge entries into existing sections rather than duplicating sections. These software instructions do not verify powered hardware or provide a complete wiring diagram.

## What remains unresolved

Actual fitted power-link population, cable drop/current, remote load levels, transient protection, measured polarity/timing and actual distance performance remain open. Annotated references and a paired bench-wiring candidate are included; complete installation acceptance, link availability and rendered desktop/narrow usability remain open.

## Sources and revision notes

- [Selected v15 emitter PCB](https://github.com/arthurwolf/extension-boards/blob/main/src/long-distance-extender/attempt/versions/v15/emitter/emitter.kicad_pcb)
- [Selected v15 receiver PCB](https://github.com/arthurwolf/extension-boards/blob/main/src/long-distance-extender/attempt/versions/v15/receiver/receiver.kicad_pcb)
- [Specification and retained limitations](https://github.com/arthurwolf/extension-boards/blob/main/src/long-distance-extender/specs.md)
- [Architecture and source decisions](https://github.com/arthurwolf/extension-boards/blob/main/src/long-distance-extender/design.md)
- [Component review](https://github.com/arthurwolf/extension-boards/blob/main/src/long-distance-extender/component-review.md)
- [V2 configuration example](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/ConfigSamples/config-3d.ini)
- [All extension boards](/extension-boards)

The selected-revision engineering repository was unavailable to anonymous readers when checked. Its source links are retained for provenance; an accessible matching source release has not been verified. Firmware and historical-board links are separate sources.

<details markdown="1">
<summary>Supplementary views and development history</summary>

{% include _includes/extension-board-visuals.html slug="long-distance-extender" %}

Older source amendments, component substitution trials and future connector upgrade requests are development history. They do not change the revision selected by this guide.

</details>
