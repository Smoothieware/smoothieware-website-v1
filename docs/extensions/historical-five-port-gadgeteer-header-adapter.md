---
layout: default
title: "Five-port Gadgeteer header adapter"
description: "Passive carrier turning five ten-contact ports into 2.54 mm socket rows: pinout."
permalink: /extensions/historical-five-port-gadgeteer-header-adapter
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Wiring</p>
    <h1 id="historical-five-port-gadgeteer-header-adapter">Five-port Gadgeteer header adapter</h1>
    <p class="xb-lead">Brings the signals of five ten-contact ports out to socket rows, with shared power breakouts.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/historical-five-port-gadgeteer-header-adapter/directory-board-render.png" alt="Top view of the Five-port Gadgeteer header adapter board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>5</b><span>ports</span></div>
  <div class="xb-stat"><b>35</b><span>signal sockets</span></div>
  <div class="xb-stat"><b>2.54 mm</b><span>socket rows</span></div>
  <div class="xb-stat"><b>2.50 mm</b><span>J6/J7 pitch</span></div>
  <div class="xb-stat"><b>40 × 65 mm</b><span>board size</span></div>
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
  <a href="#mounting">Mounting dimensions</a>
  <a href="#electrical">Electrical specifications</a>
</nav>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <b>The supply rails of all five ports are joined.</b> Do not connect two separately powered hosts, or you will back-feed one from the other. This is a design by Chris Cecil, not a current Smoothieware board.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>Passive port-to-socket carrier</td></tr>
    <tr><td>Ports</td><td>J1–J5, ten contacts</td></tr>
    <tr><td>Signal rows</td><td>J8, J9, J11, J12, J13</td></tr>
    <tr><td>Power</td><td>J6 (3.3 V), J7 (5 V), and three five-contact footprints all marked J10</td></tr>
    <tr><td>Pitch</td><td>J6 and J7 are JST XH, 2.50 mm</td></tr>
    <tr><td>Size</td><td>40 × 65 mm</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/historical-five-port-gadgeteer-header-adapter/directory-board-render.png" alt="Annotated top view of the Five-port Gadgeteer header adapter board">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:31.7%;top:27.2%" aria-label="1: Port 1">1<span class="xb-pop"><b>Port 1</b> — Feeds row J8.</span></a>
      <a class="xb-mk" href="#tour-2" style="left:31.6%;top:75.2%" aria-label="2: Port 5">2<span class="xb-pop"><b>Port 5</b> — Feeds row J13.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-3" style="left:83.9%;top:29.9%" aria-label="3: Row J8">3<span class="xb-pop"><b>Row J8</b> — Port 1 signals 3–9.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-4" style="left:18.2%;top:11.9%" aria-label="4: J6">4<span class="xb-pop"><b>J6</b> — 3.3 V and ground.</span></a>
      <a class="xb-mk xb-pl" href="#tour-5" style="left:18.1%;top:86.4%" aria-label="5: J7">5<span class="xb-pop"><b>J7</b> — 5 V and ground.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-6" style="left:87.5%;top:9.2%" aria-label="6: J10 power sockets">6<span class="xb-pop"><b>J10 power sockets</b> — Three footprints share this name.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-7" style="left:83.9%;top:41.0%" aria-label="7: Connector J9">7<span class="xb-pop"><b>Connector J9</b> — Connector J9. Connects to <code>J2P3</code>, <code>J2P4</code>, <code>J2P5</code>, <code>J2P6</code>, <code>J2P7</code> and more.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:31.8%;top:39.1%" aria-label="8: Resistor J2">8<span class="xb-pop"><b>Resistor J2</b> — Resistor J2. Connects to <code>+3.3V</code>, <code>+5V</code>, <code>J2P3</code>, <code>J2P4</code>, <code>J2P5</code> and more.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Port 1</b> — Feeds row J8.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Port 5</b> — Feeds row J13.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Row J8</b> — Port 1 signals 3–9.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>J6</b> — 3.3 V and ground.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>J7</b> — 5 V and ground.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>J10 power sockets</b> — Three footprints share this name.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Connector J9</b> — Connector J9. Connects to <code>J2P3</code>, <code>J2P4</code>, <code>J2P5</code>, <code>J2P6</code>, <code>J2P7</code> and more.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Resistor J2</b> — Resistor J2. Connects to <code>+3.3V</code>, <code>+5V</code>, <code>J2P3</code>, <code>J2P4</code>, <code>J2P5</code> and more.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

<span id="connect-and-try-it"></span>

### Port J1

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+3.3V</code></td></tr>
    <tr><td>2</td><td><code>+5V</code></td></tr>
    <tr><td>3</td><td><code>J1P3</code></td></tr>
    <tr><td>4</td><td><code>J1P4</code></td></tr>
    <tr><td>5</td><td><code>J1P5</code></td></tr>
    <tr><td>6</td><td><code>J1P6</code></td></tr>
    <tr><td>7</td><td><code>J1P7</code></td></tr>
    <tr><td>8</td><td><code>J1P8</code></td></tr>
    <tr><td>9</td><td><code>J1P9</code></td></tr>
    <tr><td>10</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Signal row J8

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J8 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>J1P3</code></td></tr>
    <tr><td>2</td><td><code>J1P4</code></td></tr>
    <tr><td>3</td><td><code>J1P5</code></td></tr>
    <tr><td>4</td><td><code>J1P6</code></td></tr>
    <tr><td>5</td><td><code>J1P7</code></td></tr>
    <tr><td>6</td><td><code>J1P8</code></td></tr>
    <tr><td>7</td><td><code>J1P9</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

J2–J5 and J9, J11–J13 follow the same pattern.

### Power J6

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J6 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+3.3V</code></td></tr>
    <tr><td>2</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Power J7

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J7 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+5V</code></td></tr>
    <tr><td>2</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Each J10 footprint

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J10 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+3.3V</code></td></tr>
    <tr><td>2</td><td><code>+3.3V</code></td></tr>
    <tr><td>3</td><td><code>+5V</code></td></tr>
    <tr><td>4</td><td><code>GND</code></td></tr>
    <tr><td>5</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Adapter board</b><span>Built from the design files</span></div>
  <div class="xb-card"><b>Ribbon cable or leads</b><span>Verified contact by contact</span></div>
</div>
{:/nomarkdown}

## Configuration {#configuration}

<span id="smoothieware-use"></span>

This passive board needs no setting of its own. Configure the pin each signal comes from as you would without the board.

## How it works {#how-it-works}

Contacts 3–9 of each port run straight to one seven-contact row: J1 to J8, J2 to J9, J3 to J11, J4 to J12 and J5 to J13. All 3.3 V, 5 V and ground contacts are common.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 270" role="img" aria-labelledby="xb-historical-five-port-gadgeteer-header-adapter-path"><title id="xb-historical-five-port-gadgeteer-header-adapter-path">J1 to J5, contacts 3 to 9 then Straight tracks then J8, J9, J11, J12, J13, one row per port. All ports then Common 3.3 V, 5 V and ground.</title><rect x="46" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="186" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">J1 to J5, contacts 3 to 9</text><text x="186" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="360" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Straight tracks</text><text x="500" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M330.0 70H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 63L358 70L349 77Z" fill="#5fb3ff"/><rect x="674" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="814" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">J8, J9, J11, J12, J13</text><text x="814" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2">one row per port</text><path d="M644.0 70H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 63L672 70L663 77Z" fill="#5fb3ff"/><rect x="203" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="343" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">All ports</text><text x="343" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="517" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="657" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Common 3.3 V, 5 V and ground</text><text x="657" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M487.0 198H508.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M506 191L515 198L506 205Z" fill="#5fb3ff"/></svg>
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
    <tr><td>Signal appears on the wrong row</td><td>J10 is skipped in the row numbering: check the mapping above.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="https://github.com/Ccecil/HeaderAdapter/tree/aa50fd44325f95268834b9adbace3fd9e585a2f7">original source</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/HeaderAdapter/blob/aa50fd44325f95268834b9adbace3fd9e585a2f7/HeaderAdapter.kicad_pcb">original circuit</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/HeaderAdapter">Ccecil upstream project</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/HeaderAdapter/blob/aa50fd44325f95268834b9adbace3fd9e585a2f7/HeaderAdapter.kicad_sch">Original HeaderAdapter.kicad_sch</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/HeaderAdapter/blob/aa50fd44325f95268834b9adbace3fd9e585a2f7/README.md">Original README.md</a></td><td>Design source</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

Outline and holes from the original board file. Millimetres, seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-ader-adapter-mount-t">
  <title id="xb-ader-adapter-mount-t">Mounting drawing of the historical-five-port-gadgeteer-header-adapter, component side: outline 40 by 65 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="375.4" y="78.0" width="209.2" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M375.4 56H584.6"/><path d="M375.4 50V62"/><path d="M584.6 50V62"/><path d="M610.6 78.0V418.0"/><path d="M604.6 78.0h12"/><path d="M604.6 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">40</text>
  <text x="622.6" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">65</text>
  <circle cx="375.4" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="363.4" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M317.4 104.0h30" fill="none"/><path d="M351.4 104.0l-8 -4v8z"/><path d="M317.4 104.0v30" fill="none"/><path d="M317.4 138.0l-4 -8h8z"/></g>
  <text x="355.4" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="313.4" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="473.7" cy="104.2" r="8.4" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M461.4 104.2h24.7M473.7 91.8v24.7" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="465.4" y="132.5" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  18.80, 5.00</text>
  <circle cx="473.7" cy="391.8" r="8.4" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M461.4 391.8h24.7M473.7 379.5v24.7" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="465.4" y="373.5" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  18.80, 60.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 40 × 65&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>18.80</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>18.80</td><td>60.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
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

Designed by Chris Cecil: [original design files](https://github.com/Ccecil/HeaderAdapter/tree/aa50fd44325f95268834b9adbace3fd9e585a2f7). It was drawn for the Smoothieboard V2 Gadgeteer era; check every connection against your own controller.
See all boards on the [extension boards](/extension-boards) page.
