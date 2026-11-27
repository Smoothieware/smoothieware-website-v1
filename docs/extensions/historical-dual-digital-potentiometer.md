---
layout: default
title: "Dual-device I2C digital potentiometer"
description: "Two MCP44X1 digital potentiometers on I2C: pinout, addresses straps and limits."
permalink: /extensions/historical-dual-digital-potentiometer
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Analog</p>
    <h1 id="historical-dual-digital-potentiometer">Dual-device I2C digital potentiometer</h1>
    <p class="xb-lead">Two MCP44X1-family digital potentiometers on an I2C bus give eight adjustable setpoint voltages.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/historical-dual-digital-potentiometer/directory-board-render.png" alt="Top view of the Dual-device I2C digital potentiometer board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>2</b><span>potentiometer ICs</span></div>
  <div class="xb-stat"><b>8</b><span>wiper outputs</span></div>
  <div class="xb-stat"><b>I2C</b><span>control</span></div>
  <div class="xb-stat"><b>3.3 V</b><span>reference</span></div>
  <div class="xb-stat"><b>50 × 50 mm</b><span>board size</span></div>
  <div class="xb-stat"><b>1.1 kΩ</b><span>effective pull-ups</span></div>
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
  <a href="#mounting">Mounting dimensions</a>
  <a href="#electrical">Electrical specifications</a>
</nav>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <b>Check the fitted chip and the output you need before use.</b> The schematic and board file disagree on some output nets, and only the eight wipers are brought out: the potentiometers share one 3.3 V reference. This is a design by Chris Cecil, not a current Smoothieware board.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>Eight adjustable voltage setpoints</td></tr>
    <tr><td>Chips</td><td>Two MCP44X1 family (resolution and resistance depend on the fitted part)</td></tr>
    <tr><td>Host headers</td><td>J1, J4: ten contacts</td></tr>
    <tr><td>I2C connectors</td><td>J2, J3: four contacts</td></tr>
    <tr><td>Outputs</td><td>J5–J12: ground and wiper</td></tr>
    <tr><td>Size</td><td>50 × 50 mm</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/historical-dual-digital-potentiometer/directory-board-render.png" alt="Annotated top view of the Dual-device I2C digital potentiometer board">
      <a class="xb-mk" href="#tour-1" style="left:31.2%;top:64.3%" aria-label="1: Host header J1">1<span class="xb-pop"><b>Host header J1</b> — Supplies, spare signals and I2C.</span></a>
      <a class="xb-mk" href="#tour-2" style="left:57.9%;top:89.1%" aria-label="2: I2C connector J2">2<span class="xb-pop"><b>I2C connector J2</b> — Ground, 3.3 V, SDA, SCL; J3 is the same.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:52.8%;top:66.4%" aria-label="3: IC1">3<span class="xb-pop"><b>IC1</b> — Drives J5–J8.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:53.0%;top:34.0%" aria-label="4: IC2">4<span class="xb-pop"><b>IC2</b> — Drives J9–J12.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:73.7%;top:62.1%" aria-label="5: Wiper outputs">5<span class="xb-pop"><b>Wiper outputs</b> — J5–J12, two contacts each.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-6" style="left:13.1%;top:29.9%" aria-label="6: Connector J4">6<span class="xb-pop"><b>Connector J4</b> — Connector J4. Connects to <code>+3V3</code>, <code>+5V</code>, <code>P3</code>, <code>P4</code>, <code>P5</code> and more.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:73.7%;top:74.3%" aria-label="7: Connector J6">7<span class="xb-pop"><b>Connector J6</b> — Connector J6. Connects to <code>GND</code>, <code>P1W1</code>.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:54.0%;top:76.5%" aria-label="8: Resistor R1">8<span class="xb-pop"><b>Resistor R1</b> — Resistor R1, marked <code>2.2k</code> in the board file. Connects to <code>I2C_SDA</code>, <code>+3V3</code>.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host header J1</b> — Supplies, spare signals and I2C.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>I2C connector J2</b> — Ground, 3.3 V, SDA, SCL; J3 is the same.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>IC1</b> — Drives J5–J8.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>IC2</b> — Drives J9–J12.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Wiper outputs</b> — J5–J12, two contacts each.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Connector J4</b> — Connector J4. Connects to <code>+3V3</code>, <code>+5V</code>, <code>P3</code>, <code>P4</code>, <code>P5</code> and more.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Connector J6</b> — Connector J6. Connects to <code>GND</code>, <code>P1W1</code>.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Resistor R1</b> — Resistor R1, marked <code>2.2k</code> in the board file. Connects to <code>I2C_SDA</code>, <code>+3V3</code>.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

<span id="connect-and-try-it"></span>

### Host headers J1 and J4

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+3V3</code></td></tr>
    <tr><td>2</td><td><code>+5V</code></td></tr>
    <tr><td>3</td><td><code>P3</code></td></tr>
    <tr><td>4</td><td><code>P4</code></td></tr>
    <tr><td>5</td><td><code>P5</code></td></tr>
    <tr><td>6</td><td><code>P6</code></td></tr>
    <tr><td>7</td><td><code>P7</code></td></tr>
    <tr><td>8</td><td><code>I2C_SDA</code></td></tr>
    <tr><td>9</td><td><code>I2C_SCL</code></td></tr>
    <tr><td>10</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### I2C connectors J2 and J3

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J2 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>GND</code></td></tr>
    <tr><td>2</td><td><code>+3V3</code></td></tr>
    <tr><td>3</td><td><code>I2C_SDA</code></td></tr>
    <tr><td>4</td><td><code>I2C_SCL</code></td></tr>
    <tr><td>MP</td><td>not connected</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

J5–J8 carry IC1 wipers 0–3 and J9–J12 IC2 wipers 0–3: contact 1 ground, contact 2 wiper. The design files label one pin-function and net name inconsistently (P3A and P0A), so verify output order with a meter.

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Digipot board</b><span>Built from the design files</span></div>
  <div class="xb-card"><b>I2C leads</b><span>3.3 V, ground, SDA, SCL</span></div>
  <div class="xb-card"><b>Multimeter</b><span>To confirm each output</span></div>
</div>
{:/nomarkdown}

## Configuration {#configuration}

<span id="smoothieware-use"></span>

Smoothieware has no verified configuration for this board: not specified.

## How it works {#how-it-works}

Each chip has its four A terminals tied together and fed from 3.3 V through 33 kΩ (R3 for IC1, R7 for IC2); the B terminals go to ground. Each wiper therefore outputs a fraction of a shared reference. IC1 has address pins A0 and A1 tied to ground; IC2 has A0 at 3.3 V and A1 at ground. Both bus lines carry two 2.2 kΩ pull-ups each. See the [MCP44X1 datasheet](https://ww1.microchip.com/downloads/en/DeviceDoc/22265a.pdf).

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Nothing responds</td><td>With power off, check continuity along each lead and board path against the pinout tables. Confirm which end of the connector is contact 1.</td></tr>
    <tr><td>No I2C answer</td><td>Check ground, 3.3 V, SDA and SCL, then scan for the two addresses of your fitted chip.</td></tr>
    <tr><td>Setpoints interact</td><td>All wipers of one chip share the 33 kΩ reference resistor, so loading one changes the others. Use high-impedance inputs.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="https://github.com/Ccecil/DualDigipot/tree/f0c2f72fed83810b2d6defd8ab13097b317a3a39">The upstream source</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/DualDigipot/blob/f0c2f72fed83810b2d6defd8ab13097b317a3a39/GDGT_Digipot.kicad_pcb">original circuit</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/DualDigipot">Ccecil upstream project</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/DualDigipot/blob/f0c2f72fed83810b2d6defd8ab13097b317a3a39/GDGT_Digipot.kicad_sch">Original GDGT_Digipot.kicad_sch</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/DualDigipot/blob/f0c2f72fed83810b2d6defd8ab13097b317a3a39/README.md">Original README.md</a></td><td>Design source</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

Outline and holes from the original board file. Millimetres, seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-otentiometer-mount-t">
  <title id="xb-otentiometer-mount-t">Mounting drawing of the historical-dual-digital-potentiometer, component side: outline 50 by 50 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="310.0" y="78.0" width="340.0" height="340.0" rx="20.4" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M310.0 56H650.0"/><path d="M310.0 50V62"/><path d="M650.0 50V62"/><path d="M676.0 78.0V418.0"/><path d="M670.0 78.0h12"/><path d="M670.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">50</text>
  <text x="688.0" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">50</text>
  <circle cx="310.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="298.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M252.0 104.0h30" fill="none"/><path d="M286.0 104.0l-8 -4v8z"/><path d="M252.0 104.0v30" fill="none"/><path d="M252.0 138.0l-4 -8h8z"/></g>
  <text x="290.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="248.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="344.0" cy="112.0" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M329.1 112.0h29.8M344.0 97.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="333.1" y="142.9" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.00</text>
  <circle cx="616.0" cy="112.0" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M601.1 112.0h29.8M616.0 97.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="626.9" y="142.9" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  45.00, 5.00</text>
  <circle cx="344.0" cy="384.0" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M329.1 384.0h29.8M344.0 369.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="333.1" y="363.1" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 45.00</text>
  <circle cx="616.0" cy="384.0" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M601.1 384.0h29.8M616.0 369.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="626.9" y="363.1" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  45.00, 45.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 50 × 50&nbsp;mm, corners rounded to a 3&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>45.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>5.00</td><td>45.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>45.00</td><td>45.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
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

Designed by Chris Cecil: [original design files](https://github.com/Ccecil/DualDigipot/tree/f0c2f72fed83810b2d6defd8ab13097b317a3a39). It was drawn for the Smoothieboard V2 Gadgeteer era; check every connection against your own controller.
See all boards on the [extension boards](/extension-boards) page.
