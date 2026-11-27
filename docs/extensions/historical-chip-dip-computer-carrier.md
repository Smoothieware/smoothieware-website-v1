---
layout: default
title: "C.H.I.P. DIP computer carrier"
description: "Carrier for a C.H.I.P. Linux computer: regulator, serial indicators, buttons and pinout."
permalink: /extensions/historical-chip-dip-computer-carrier
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Computer</p>
    <h1 id="historical-chip-dip-computer-carrier">C.H.I.P. DIP computer carrier</h1>
    <p class="xb-lead">Carries a C.H.I.P. Linux computer with a 5 V regulator, serial activity LEDs and two push buttons.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/historical-chip-dip-computer-carrier/directory-board-render.png" alt="Top view of the C.H.I.P. DIP computer carrier board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>1</b><span>C.H.I.P. socket</span></div>
  <div class="xb-stat"><b>R-78HB5.0</b><span>regulator</span></div>
  <div class="xb-stat"><b>2</b><span>buttons</span></div>
  <div class="xb-stat"><b>2</b><span>serial LEDs</span></div>
  <div class="xb-stat"><b>40.9 × 60.2 mm</b><span>board size</span></div>
  <div class="xb-stat"><b>115200</b><span>example baud rate</span></div>
</div>

<nav class="xb-nav" aria-label="On this page">
  <a href="#specs">Tech specs</a>
  <a href="#tour">Board tour</a>
  <a href="#pinout">Pinout</a>
  <a href="#what-you-need">What you need</a>
  <a href="#configuration">Configuration</a>
  <a href="#how-it-works">How it works</a>
  <a href="#troubleshooting">Troubleshooting</a>
  <a href="#downloads">Downloads</a>
  <a href="#electrical">Electrical specifications</a>
</nav>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <b>Do not use a straight-through serial cable:</b> P4 contact 4 is the computer&rsquo;s transmit and contact 5 its receive, whatever the net names suggest. This is a historical Smoothieboard2 design, not a current board.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>Companion computer carrier</td></tr>
    <tr><td>Power input</td><td>P1: 1 ground, 2 regulator input</td></tr>
    <tr><td>Host connector</td><td>P4</td></tr>
    <tr><td>Computer socket</td><td>U3</td></tr>
    <tr><td>Regulator</td><td>U1, R-78HB5.0-0.5L</td></tr>
    <tr><td>Size</td><td>40.894 × 60.198 mm</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/historical-chip-dip-computer-carrier/directory-board-render.png" alt="Annotated top view of the C.H.I.P. DIP computer carrier board">
      <a class="xb-mk" href="#tour-1" style="left:50.0%;top:53.0%" aria-label="1: Computer socket">1<span class="xb-pop"><b>Computer socket</b> — The C.H.I.P. plugs here.</span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:70.9%;top:8.9%" aria-label="2: Power input">2<span class="xb-pop"><b>Power input</b> — Regulator supply.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:59.6%;top:68.2%" aria-label="3: Regulator">3<span class="xb-pop"><b>Regulator</b> — 5 V output.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:46.8%;top:20.7%" aria-label="4: Host connector">4<span class="xb-pop"><b>Host connector</b> — Serial and supplies.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:31.0%;top:43.8%" aria-label="5: Button 1">5<span class="xb-pop"><b>Button 1</b> — Grounds a computer pin.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:70.6%;top:33.2%" aria-label="6: Button 2">6<span class="xb-pop"><b>Button 2</b> — Grounds a computer pin.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:56.5%;top:89.8%" aria-label="7: Serial LED HTX">7<span class="xb-pop"><b>Serial LED HTX</b> — Activity indicator.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:43.5%;top:89.8%" aria-label="8: Serial LED HRX">8<span class="xb-pop"><b>Serial LED HRX</b> — Activity indicator.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Computer socket</b> — The C.H.I.P. plugs here.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Power input</b> — Regulator supply.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Regulator</b> — 5 V output.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Host connector</b> — Serial and supplies.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Button 1</b> — Grounds a computer pin.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Button 2</b> — Grounds a computer pin.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Serial LED HTX</b> — Activity indicator.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Serial LED HRX</b> — Activity indicator.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

<span id="connect-and-try-it"></span>

### Power input P1

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>P1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>GND</code></td></tr>
    <tr><td>2</td><td>joined to C1 pad 1, U1 pad 1</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Host connector P4

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>P4 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+3V3</code></td></tr>
    <tr><td>2</td><td>joined to D2 pad 2</td></tr>
    <tr><td>3</td><td>joined to P2 pad 1</td></tr>
    <tr><td>4</td><td>computer transmit</td></tr>
    <tr><td>5</td><td>computer receive</td></tr>
    <tr><td>6</td><td>joined to P3 pad 1</td></tr>
    <tr><td>7</td><td>not connected</td></tr>
    <tr><td>8</td><td>not connected</td></tr>
    <tr><td>9</td><td>not connected</td></tr>
    <tr><td>10</td><td><code>GND</code></td></tr>
    <tr><td>11</td><td>not connected</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Carrier board</b><span>Built from the design files</span></div>
  <div class="xb-card"><b>C.H.I.P. computer</b><span>The companion computer</span></div>
  <div class="xb-card"><b>Power supply</b><span>Within the regulator rating</span></div>
</div>
{:/nomarkdown}

## Configuration {#configuration}

<span id="smoothieware-use"></span>

A UART console on the controller side. Check logic levels and the crossed wiring first.

```ini
[uart console]
enable = true
console = true
channel = 1
baudrate = 115200
bits = 8
stop_bits = 1
parity = none
```

On Smoothieboard V2 Prime, channel 1 transmits on PB9 and receives on PH14. See [UART](/uart). Syntax checked against firmware commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`.

## How it works {#how-it-works}

The regulator feeds 5 V to the computer through D1. The computer&rsquo;s UART1 goes to P4, with a transistor and LED on each direction. SW1 and SW2 ground computer pins.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Computer does not start</td><td>Check the regulator input and 5 V output.</td></tr>
    <tr><td>No serial data</td><td>Cross transmit and receive as described above.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/C.H.I.P-DIP">original Smoothieboard2 files</a></td><td>Design source</td></tr>
    <tr><td><a href="/images/extensions/historical-native-source-package-20261018.zip">Download the editable historical diagram and source package</a></td><td>Download</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Only what the design source states or the circuit fixes. Blank cells are not specified.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Voltage, current and temperature limits</td><td>Whole board</td><td>—</td><td>—</td><td>—</td><td>Not specified in the source</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Design source {#origin}

This board comes from the [original design files](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/C.H.I.P-DIP). It was drawn for an earlier controller generation than Smoothieboard V2 Prime; match connections contact by contact.
See all boards on the [extension boards](/extension-boards) page.
