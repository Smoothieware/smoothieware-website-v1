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
  <a href="#get-started">Get started</a>
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

## Get started {#get-started}

The minimum wiring first, then the order to do it in. Facts about each contact are in the [pinout](#pinout).

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 472" role="img" aria-labelledby="xb-historical-chip-dip-computer-carrier-wire"><title id="xb-historical-chip-dip-computer-carrier-wire">Wiring: P1 contact 1 to GND; P1 contact 2 to positive input.</title><image href="/images/extensions/historical-chip-dip-computer-carrier/directory-board-render.png" x="419" y="14" width="161" height="230"/><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">P1 on this board</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Power supply</text><rect x="700" y="304" width="270" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><rect x="810" y="334" width="140" height="90" rx="8" fill="#cfd3d9" stroke="#3a3f46" stroke-width="1.5"/><rect x="824" y="345" width="112" height="34" rx="3" fill="#101418" stroke="#101418" stroke-width="1.5"/><text x="880" y="369" text-anchor="middle" font-size="18" fill="#5df07a">00.0 V</text><circle cx="840" cy="401" r="11" fill="#2c3036" stroke="#0d0f12" stroke-width="1.5"/><circle cx="894" cy="401" r="8" fill="#c0262c" stroke="#0d0f12" stroke-width="1.5"/><circle cx="924" cy="401" r="8" fill="#23262b" stroke="#0d0f12" stroke-width="1.5"/><rect x="30" y="304" width="200" height="150" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 364.0H700" fill="none" stroke="#8b949e" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="364" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" fill="#e6ebf2">  1</text><text x="712" y="369" text-anchor="start" font-size="13" fill="#e6ebf2">GND</text><rect x="340" y="353" width="220" height="22" rx="11" fill="#8b949e" stroke="#8b949e" stroke-width="1.5"/><text x="450" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#111">1: GND</text><path d="M230 394.0H700" fill="none" stroke="#f2d024" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#f2d024" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="394" r="5" fill="#f2d024" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" fill="#e6ebf2">  2</text><text x="712" y="399" text-anchor="start" font-size="13" fill="#e6ebf2">positive input</text><rect x="340" y="383" width="220" height="22" rx="11" fill="#f2d024" stroke="#f2d024" stroke-width="1.5"/><text x="450" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#111">2: positive input</text></svg>
  </div>
  <figcaption>Wiring drawn from the original design files. Make connections with all power off. Equipment is drawn as a typical unit, not a specific model.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Check the contacts</h3>
    <p>With all power off, find contact 1 on each connector and check every wire against the <a href="#pinout">pinout</a>.</p>
  </li>
  <li class="xb-step">
    <h3>Set up and check</h3>
    <p>Keep the supply within the regulator rating.</p>
  </li>
  <li class="xb-step">
    <h3>Set up and check</h3>
    <p>Check logic levels and the crossed serial wires before joining the controller to P4.</p>
  </li>
  <li class="xb-step">
    <h3>Configure and power up</h3>
    <p>Apply the settings under <a href="#configuration">Configuration</a>, then power up.</p>
  </li>
</ol>
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

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 398" role="img" aria-labelledby="xb-historical-chip-dip-computer-carrier-path"><title id="xb-historical-chip-dip-computer-carrier-path">Supply then Regulator and diode D1 then Computer 5 V. Computer UART1 then Transistor and LED per direction then P4. SW1 and SW2 then Ground computer pins.</title><rect x="46" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="186" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Supply</text><text x="186" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="360" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Regulator and diode D1</text><text x="500" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M330.0 70H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 63L358 70L349 77Z" fill="#5fb3ff"/><rect x="674" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="814" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Computer 5 V</text><text x="814" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M644.0 70H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 63L672 70L663 77Z" fill="#5fb3ff"/><rect x="46" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="186" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Computer UART1</text><text x="186" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="360" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="500" y="184" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Transistor and LED per</text><text x="500" y="202" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">direction</text><text x="500" y="222" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M330.0 198H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 191L358 198L349 205Z" fill="#5fb3ff"/><rect x="674" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="814" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">P4</text><text x="814" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M644.0 198H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 191L672 198L663 205Z" fill="#5fb3ff"/><rect x="203" y="270" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="343" y="321" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">SW1 and SW2</text><text x="343" y="341" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="517" y="270" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="657" y="321" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Ground computer pins</text><text x="657" y="341" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M487.0 326H508.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M506 319L515 326L506 333Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board, one path per row.</figcaption>
</figure>
{:/nomarkdown}


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
