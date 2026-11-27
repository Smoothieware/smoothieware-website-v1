---
layout: default
title: "Extruder toolhead harness with motor provision"
description: "Passive toolhead wiring board: pad names, connectors and the unconnected motor connector."
permalink: /extensions/historical-extruder-toolhead-harness-with-motor
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Wiring</p>
    <h1 id="historical-extruder-toolhead-harness-with-motor">Extruder toolhead harness with motor provision</h1>
    <p class="xb-lead">Gathers heater, fan, thermistor, probe, servo and 5 V wiring of a printer toolhead into one harness.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/historical-extruder-toolhead-harness-with-motor/directory-board-render.png" alt="Top view of the Extruder toolhead harness with motor provision board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>1</b><span>harness connector</span></div>
  <div class="xb-stat"><b>2</b><span>fan outputs</span></div>
  <div class="xb-stat"><b>1</b><span>heater</span></div>
  <div class="xb-stat"><b>1</b><span>thermistor</span></div>
  <div class="xb-stat"><b>50 × 50 mm</b><span>board size</span></div>
  <div class="xb-stat"><b>0</b><span>active parts</span></div>
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
  <b>J2, the motor connector, is not connected to anything.</b> Do not route motor current through it. Heater and fans share one positive supply conductor. This is a design by Chris Cecil, not a current Smoothieware board.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>Passive toolhead distribution</td></tr>
    <tr><td>Harness</td><td>J1: VBB, H−, F1, F2, T+, T−, P, S, 5V, GND</td></tr>
    <tr><td>Heater</td><td>J3</td></tr>
    <tr><td>Thermistor</td><td>J4</td></tr>
    <tr><td>Fans</td><td>J8, J9</td></tr>
    <tr><td>Probe and servo</td><td>J5, J6</td></tr>
    <tr><td>Size</td><td>50 × 50 mm</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/historical-extruder-toolhead-harness-with-motor/directory-board-render.png" alt="Annotated top view of the Extruder toolhead harness with motor provision board">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:20.8%;top:15.2%" aria-label="1: Connector J4">1<span class="xb-pop"><b>Connector J4</b> — Connector J4.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-2" style="left:7.0%;top:19.5%" aria-label="2: Connector J6">2<span class="xb-pop"><b>Connector J6</b> — Connector J6.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:70.7%;top:64.5%" aria-label="3: Connector J7">3<span class="xb-pop"><b>Connector J7</b> — Connector J7.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:69.6%;top:82.1%" aria-label="4: Connector J8">4<span class="xb-pop"><b>Connector J8</b> — Connector J8.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-5" style="left:7.0%;top:7.0%" aria-label="5: Connector J5">5<span class="xb-pop"><b>Connector J5</b> — Connector J5.</span></a>
      <a class="xb-mk xb-pr" href="#tour-6" style="left:89.0%;top:81.9%" aria-label="6: Connector J9">6<span class="xb-pop"><b>Connector J9</b> — Connector J9.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-7" style="left:20.2%;top:29.6%" aria-label="7: Connector J10">7<span class="xb-pop"><b>Connector J10</b> — Connector J10.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Connector J4</b> — Connector J4.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Connector J6</b> — Connector J6.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Connector J7</b> — Connector J7.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Connector J8</b> — Connector J8.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Connector J5</b> — Connector J5.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Connector J9</b> — Connector J9.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Connector J10</b> — Connector J10.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

<span id="connect-and-try-it"></span>

### Harness J1

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>5V</td><td>joined to J6 pad 2, J10 pad 1</td></tr>
    <tr><td>F1</td><td>joined to J8 pad 2</td></tr>
    <tr><td>F2</td><td>joined to J9 pad 2</td></tr>
    <tr><td>GND</td><td>joined to J5 pad 2, J6 pad 1, J7 pad 2, J10 pad 2</td></tr>
    <tr><td>H-</td><td>joined to J3 pad 1</td></tr>
    <tr><td>P</td><td>joined to J5 pad 1</td></tr>
    <tr><td>S</td><td>joined to J6 pad 3</td></tr>
    <tr><td>T+</td><td>joined to J4 pad 1</td></tr>
    <tr><td>T-</td><td>joined to J4 pad 2</td></tr>
    <tr><td>VBB</td><td>joined to J3 pad 2, J7 pad 1, J8 pad 1, J9 pad 1</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Heater J3

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J3 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>joined to J1 pad H-</td></tr>
    <tr><td>2</td><td>joined to J1 pad VBB, J7 pad 1, J8 pad 1, J9 pad 1</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Thermistor J4

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J4 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>joined to J1 pad T+</td></tr>
    <tr><td>2</td><td>joined to J1 pad T-</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Probe J5

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J5 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>joined to J1 pad P</td></tr>
    <tr><td>2</td><td>joined to J1 pad GND, J6 pad 1, J7 pad 2, J10 pad 2</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Servo J6

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J6 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>joined to J1 pad GND, J5 pad 2, J7 pad 2, J10 pad 2</td></tr>
    <tr><td>2</td><td>joined to J1 pad 5V, J10 pad 1</td></tr>
    <tr><td>3</td><td>joined to J1 pad S</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Fan 1, J8

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J8 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>joined to J1 pad VBB, J3 pad 2, J7 pad 1, J9 pad 1</td></tr>
    <tr><td>2</td><td>joined to J1 pad F1</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Fan 2, J9

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J9 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>joined to J1 pad VBB, J3 pad 2, J7 pad 1, J8 pad 1</td></tr>
    <tr><td>2</td><td>joined to J1 pad F2</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Harness board</b><span>Built from the design files</span></div>
  <div class="xb-card"><b>Toolhead wiring</b><span>Rated for heater current</span></div>
  <div class="xb-card"><b>Mating parts</b><span>Checked against the board</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

The minimum wiring first, then the order to do it in. Facts about each contact are in the [pinout](#pinout).

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 666" role="img" aria-labelledby="xb-historical-extruder-toolhead-harness-with-motor-wire"><title id="xb-historical-extruder-toolhead-harness-with-motor-wire">Wiring: J4 contact 1 to T+ pad; J4 contact 2 to T− pad; J3 contact 1 to H− pad; J3 contact 2 to VBB pad.</title><image href="/images/extensions/historical-extruder-toolhead-harness-with-motor/directory-board-render.png" x="385" y="14" width="230" height="230"/><circle cx="433" cy="49" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="414" y="68" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="433" y="82" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J4</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J4 on this board</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Thermistor</text><rect x="700" y="304" width="270" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><path d="M820 387.0H900M820 371.0H900" fill="none" stroke="#c4cad3" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="916" cy="379" r="20" fill="#b5251e" stroke="#7d120d" stroke-width="3"/><rect x="30" y="304" width="200" height="150" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 364.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" fill="#e6ebf2">  1</text><text x="712" y="369" text-anchor="start" font-size="13" fill="#e6ebf2">T+ pad</text><rect x="340" y="353" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1: T+ pad</text><path d="M230 394.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" fill="#e6ebf2">  2</text><text x="712" y="399" text-anchor="start" font-size="13" fill="#e6ebf2">T− pad</text><rect x="340" y="383" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">2: T− pad</text><text x="130" y="486" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J3 on this board</text><text x="870" y="486" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Heater</text><rect x="700" y="498" width="270" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><rect x="815" y="523" width="130" height="100" rx="8" fill="#20365c" stroke="#7fa6e0" stroke-width="1.5"/><rect x="858" y="553" width="44" height="40" rx="3" fill="#14171c" stroke="#8b949e" stroke-width="1.5"/><circle cx="828" cy="539" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="556" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="573" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="590" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="607" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="930" cy="537" r="6" fill="#0d0f12" stroke="#c4cad3" stroke-width="1.5"/><circle cx="930" cy="609" r="6" fill="#0d0f12" stroke="#c4cad3" stroke-width="1.5"/><rect x="908" y="567" width="18" height="10" rx="1" fill="#c9a66b" stroke="#c9a66b" stroke-width="1.5"/><rect x="30" y="498" width="200" height="150" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 558.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="558" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="558" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="563" text-anchor="end" font-size="14" fill="#e6ebf2">  1</text><text x="712" y="563" text-anchor="start" font-size="13" fill="#e6ebf2">H− pad</text><rect x="340" y="547" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="563" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1: H− pad</text><path d="M230 588.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="588" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="588" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="593" text-anchor="end" font-size="14" fill="#e6ebf2">  2</text><text x="712" y="593" text-anchor="start" font-size="13" fill="#e6ebf2">VBB pad</text><rect x="340" y="577" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="593" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">2: VBB pad</text></svg>
  </div>
  <figcaption>Wiring drawn from the original design files. Make connections with all power off. Equipment is drawn as a typical unit, not a specific model.</figcaption>
</figure>
{:/nomarkdown}

1. With all power off, find contact 1 on each connector and check every wire against the [pinout](#pinout).
2. Use toolhead wiring rated for the heater current and check the mating parts.
3. Check continuity and the rail voltages with a meter before connecting anything else.

## Configuration {#configuration}

<span id="smoothieware-use"></span>

This passive board needs no setting of its own. Configure the pin each signal comes from as you would without the board.

## How it works {#how-it-works}

Every connector is a copper path from a named J1 pad. The heater and both fans share VBB and return separately.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 270" role="img" aria-labelledby="xb-historical-extruder-toolhead-harness-with-motor-path"><title id="xb-historical-extruder-toolhead-harness-with-motor-path">Named J1 pads then Copper paths only then Heater, fan, sensor and motor connectors. Shared VBB then Heater and both fans then Separate returns.</title><rect x="46" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="186" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Named J1 pads</text><text x="186" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="360" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Copper paths only</text><text x="500" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M330.0 70H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 63L358 70L349 77Z" fill="#5fb3ff"/><rect x="674" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="814" y="56" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Heater, fan, sensor and motor</text><text x="814" y="74" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">connectors</text><text x="814" y="94" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M644.0 70H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 63L672 70L663 77Z" fill="#5fb3ff"/><rect x="46" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="186" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Shared VBB</text><text x="186" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="360" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="500" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Heater and both fans</text><text x="500" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M330.0 198H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 191L358 198L349 205Z" fill="#5fb3ff"/><rect x="674" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="814" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Separate returns</text><text x="814" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M644.0 198H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 191L672 198L663 205Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board, one path per row.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Nothing responds</td><td>With power off, check continuity along each lead and board path against the pinout tables. Confirm which end of the connector is contact 1.</td></tr>
    <tr><td>Motor does not run</td><td>J2 carries nothing.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="https://github.com/Ccecil/ExtruderBoardMotor-V0.1/tree/d8bdb5473508d71ce422fd9ebc1819611b4c32f7">original Ccecil design</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/ExtruderBoardMotor-V0.1/blob/d8bdb5473508d71ce422fd9ebc1819611b4c32f7/ExtruderBoard.kicad_pcb">original circuit</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/ExtruderBoardMotor-V0.1">Ccecil upstream project</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/ExtruderBoardMotor-V0.1/blob/d8bdb5473508d71ce422fd9ebc1819611b4c32f7/ExtruderBoard.kicad_sch">Original ExtruderBoard.kicad_sch</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/ExtruderBoardMotor-V0.1/blob/d8bdb5473508d71ce422fd9ebc1819611b4c32f7/README.md">Original README.md</a></td><td>Design source</td></tr>
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

Related boards, each with its own pinout and limits: [Extruder toolhead harness without motor](/extensions/historical-extruder-toolhead-harness-without-motor).

## Design source {#origin}

Designed by Chris Cecil: [original design files](https://github.com/Ccecil/ExtruderBoardMotor-V0.1/tree/d8bdb5473508d71ce422fd9ebc1819611b4c32f7). It was drawn for the Smoothieboard V2 Gadgeteer era; check every connection against your own controller.
See all boards on the [extension boards](/extension-boards) page.
