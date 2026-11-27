---
layout: default
title: "Carvera wireless-probe interface"
description: "Connector roles and firmware support for a Carvera wireless probe interface."
permalink: /extensions/carvera-wireless-probe-interface
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Probing</p>
    <h1 id="carvera-wireless-probe-interface">Carvera wireless-probe interface</h1>
    <p class="xb-lead">An interface meant to let a Smoothieboard V2 use a Makera Carvera wireless Z probe.</p>
  </div>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>3.3 V</b><span>logic</span></div>
  <div class="xb-stat"><b>type U</b><span>Gadgeteer socket</span></div>
  <div class="xb-stat"><b>1</b><span>contact signal</span></div>
  <div class="xb-stat"><b>1</b><span>fault signal</span></div>
</div>

<nav class="xb-nav" aria-label="On this page">
  <a href="#specs">Tech specs</a>
  <a href="#pinout">Pinout</a>
  <a href="#configuration">Configuration</a>
  <a href="#how-it-works">How it works</a>
  <a href="#references">References</a>
</nav>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <b>No board design is available and Smoothieware has no support for the probe receiver.</b> Do not connect anything built from this description to a controller or machine.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-table-scroll" tabindex="0">
<table>
  <thead><tr><th>Item</th><th>Value</th></tr></thead>
  <tbody>
    <tr><td>Function</td><td>Receiver for a wireless Z probe</td></tr>
    <tr><td>Connector</td><td>One keyed type-U Gadgeteer connector</td></tr>
    <tr><td>Logic level</td><td>3.3 V</td></tr>
    <tr><td>Radio</td><td>Raw IEEE 802.15.4 frames in the open-source probe example, despite the &ldquo;Zigbee&rdquo; name</td></tr>
    <tr><td>Design files</td><td>None</td></tr>
  </tbody>
</table>
</div>
{:/nomarkdown}

## Pinout {#pinout}

{::nomarkdown}
<div class="xb-table-scroll" tabindex="0">
<table>
  <thead><tr><th>Contact</th><th>Role</th><th>State and direction</th></tr></thead>
  <tbody>
    <tr><td>U1</td><td>3.3 V</td><td>Host rail</td></tr>
    <tr><td>U2</td><td>5 V</td><td>Host rail</td></tr>
    <tr><td>U3</td><td>Contact</td><td>Interrupt-capable host input</td></tr>
    <tr><td>U4</td><td>Host TX</td><td>Management data, host to receiver</td></tr>
    <tr><td>U5</td><td>Host RX</td><td>Management data, receiver to host</td></tr>
    <tr><td>U6</td><td>Readiness/fault</td><td>Separate host input</td></tr>
    <tr><td>U7–U9</td><td>Reserved</td><td>Reserved</td></tr>
    <tr><td>U10</td><td>Ground</td><td>Circuit return</td></tr>
  </tbody>
</table>
</div>
{:/nomarkdown}

Never apply 5 V to 3.3 V logic. The approximately 3 A host 5 V budget is shared between the controller and all extensions. Do not connect an external supply or parallel the rails.

## Configuration {#configuration}

Smoothieware has no receiver driver, contact or fault input integration, probing configuration or command for this interface. A generic probe setting cannot supply those functions.

## How it works {#how-it-works}

The receiver checks the paired probe and each radio frame, latches a valid contact before answering, and drives two separate host inputs: contact, and readiness or fault. A serial link carries management data and is not the stop path. A lost, stale, malformed or reordered message must not clear a contact or allow a probing move; the host firmware must stop in a bounded way on contact or loss of readiness and discard the measurement on a fault.

## References {#references}

- [Makera Carvera wireless probe](https://global.makera.com/products/wireless-probe): product reference.
- [Makera Carvera firmware](https://github.com/MakeraInc/CarveraFirmware/tree/83c669154df7b02718a0eecb9032de84eca5c7ad)
- [Carvera Community firmware](https://github.com/Carvera-Community/Carvera_Community_Firmware/tree/2c97111cb0bbd6d3edfac2c138963c0255248865)
- [Open-source three-axis touch probe](https://github.com/faecorrigan/Open-Source-3-axis-CNC-Touch-Probe/tree/44bad0ca307874b23b5c5c119c0a5868bd112c24)

See all boards on the [extension boards](/extension-boards) page.
