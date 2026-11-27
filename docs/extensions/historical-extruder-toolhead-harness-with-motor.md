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

## Configuration {#configuration}

<span id="smoothieware-use"></span>

This passive board needs no setting of its own. Configure the pin each signal comes from as you would without the board.

## How it works {#how-it-works}

Every connector is a copper path from a named J1 pad. The heater and both fans share VBB and return separately.

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
