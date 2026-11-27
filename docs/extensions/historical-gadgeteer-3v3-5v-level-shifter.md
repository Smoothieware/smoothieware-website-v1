---
layout: default
title: "Fourteen-channel 3.3/5 V level shifter"
description: "Fourteen-channel bidirectional 3.3 V to 5 V level shifter: pinout and limits."
permalink: /extensions/historical-gadgeteer-3v3-5v-level-shifter
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Signals</p>
    <h1 id="historical-gadgeteer-3v3-5v-level-shifter">Fourteen-channel 3.3/5 V level shifter</h1>
    <p class="xb-lead">Translates fourteen digital signals between 3.3 V and 5 V in both directions.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/directory-board-render.png" alt="Top view of the Fourteen-channel 3.3/5 V level shifter board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>14</b><span>channels</span></div>
  <div class="xb-stat"><b>BSS138PS</b><span>transistors</span></div>
  <div class="xb-stat"><b>4.7 kΩ</b><span>pull-up each side</span></div>
  <div class="xb-stat"><b>2</b><span>host ports</span></div>
  <div class="xb-stat"><b>45 × 50 mm</b><span>board size</span></div>
  <div class="xb-stat"><b>3</b><span>mounting holes</span></div>
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
  <b>For low-speed digital signals only.</b> Each channel is a MOSFET with 4.7 kΩ pull-ups; check rise time and drive type before using it for fast or push-pull signals. Not for industrial voltages or loads. This is a design by Chris Cecil, not a current Smoothieware board.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>Bidirectional level translation</td></tr>
    <tr><td>Transistors</td><td>Seven BSS138PS pairs</td></tr>
    <tr><td>Pull-ups</td><td>4.7 kΩ to 3.3 V and to 5 V</td></tr>
    <tr><td>3.3 V side</td><td>J1, J2 host ports; J8, J9 rows</td></tr>
    <tr><td>5 V side</td><td>J3, J4 rows</td></tr>
    <tr><td>Power rows</td><td>J5–J7: 5 V, 3.3 V, 3.3 V, ground, ground</td></tr>
    <tr><td>Size</td><td>45 × 50 mm</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/historical-gadgeteer-3v3-5v-level-shifter/directory-board-render.png" alt="Annotated top view of the Fourteen-channel 3.3/5 V level shifter board">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:31.0%;top:29.5%" aria-label="1: Port J1">1<span class="xb-pop"><b>Port J1</b> — Seven 3.3 V signals.</span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:31.0%;top:45.2%" aria-label="2: Port J2">2<span class="xb-pop"><b>Port J2</b> — Seven more.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-3" style="left:80.7%;top:14.0%" aria-label="3: 5 V row J3">3<span class="xb-pop"><b>5 V row J3</b> — High side.</span></a>
      <a class="xb-mk xb-pr" href="#tour-4" style="left:80.7%;top:59.0%" aria-label="4: 5 V row J4">4<span class="xb-pop"><b>5 V row J4</b> — High side.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:61.8%;top:21.5%" aria-label="5: Transistor pairs">5<span class="xb-pop"><b>Transistor pairs</b> — Q1–Q7, two channels each.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:49.1%;top:58.7%" aria-label="6: Power rows">6<span class="xb-pop"><b>Power rows</b> — 5 V, 3.3 V and ground.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:61.8%;top:27.2%" aria-label="7: Transistor Q2">7<span class="xb-pop"><b>Transistor Q2</b> — Transistor Q2, marked <code>BSS138PS</code> in the board file. Connects to <code>1P5</code>, <code>+3V3</code>, <code>Shifter/3H</code>, <code>1P6</code>, <code>Shifter/2H</code>.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:49.1%;top:65.3%" aria-label="8: Resistor J6">8<span class="xb-pop"><b>Resistor J6</b> — Resistor J6. Connects to <code>+5V</code>, <code>+3V3</code>, <code>GND</code>.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Port J1</b> — Seven 3.3 V signals.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Port J2</b> — Seven more.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>5 V row J3</b> — High side.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>5 V row J4</b> — High side.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Transistor pairs</b> — Q1–Q7, two channels each.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Power rows</b> — 5 V, 3.3 V and ground.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Transistor Q2</b> — Transistor Q2, marked <code>BSS138PS</code> in the board file. Connects to <code>1P5</code>, <code>+3V3</code>, <code>Shifter/3H</code>, <code>1P6</code>, <code>Shifter/2H</code>.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Resistor J6</b> — Resistor J6. Connects to <code>+5V</code>, <code>+3V3</code>, <code>GND</code>.</div></li>
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
    <tr><td>1</td><td><code>+3V3</code></td></tr>
    <tr><td>2</td><td><code>+5V</code></td></tr>
    <tr><td>3</td><td><code>1P3</code></td></tr>
    <tr><td>4</td><td><code>1P4</code></td></tr>
    <tr><td>5</td><td><code>1P5</code></td></tr>
    <tr><td>6</td><td><code>1P6</code></td></tr>
    <tr><td>7</td><td><code>1P7</code></td></tr>
    <tr><td>8</td><td><code>1P8</code></td></tr>
    <tr><td>9</td><td><code>1P9</code></td></tr>
    <tr><td>10</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Port J2

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J2 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+3V3</code></td></tr>
    <tr><td>2</td><td><code>+5V</code></td></tr>
    <tr><td>3</td><td><code>2P3</code></td></tr>
    <tr><td>4</td><td><code>2P4</code></td></tr>
    <tr><td>5</td><td><code>2P5</code></td></tr>
    <tr><td>6</td><td><code>2P6</code></td></tr>
    <tr><td>7</td><td><code>2P7</code></td></tr>
    <tr><td>8</td><td><code>2P8</code></td></tr>
    <tr><td>9</td><td><code>2P9</code></td></tr>
    <tr><td>10</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### 5 V row J3 (channels from port 1)

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J3 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>Shifter/0H</code></td></tr>
    <tr><td>2</td><td><code>Shifter/1H</code></td></tr>
    <tr><td>3</td><td><code>Shifter/2H</code></td></tr>
    <tr><td>4</td><td><code>Shifter/3H</code></td></tr>
    <tr><td>5</td><td><code>Shifter/4H</code></td></tr>
    <tr><td>6</td><td><code>Shifter/5H</code></td></tr>
    <tr><td>7</td><td><code>Shifter/6H</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### 5 V row J4 (channels from port 2)

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J4 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>Shifter/7H</code></td></tr>
    <tr><td>2</td><td><code>Shifter/8H</code></td></tr>
    <tr><td>3</td><td><code>Shifter/9H</code></td></tr>
    <tr><td>4</td><td><code>Shifter/10H</code></td></tr>
    <tr><td>5</td><td><code>Shifter/11H</code></td></tr>
    <tr><td>6</td><td><code>Shifter/12H</code></td></tr>
    <tr><td>7</td><td><code>Shifter/13H</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Power rows J5–J7

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J5 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+5V</code></td></tr>
    <tr><td>2</td><td><code>+3V3</code></td></tr>
    <tr><td>3</td><td><code>+3V3</code></td></tr>
    <tr><td>4</td><td><code>GND</code></td></tr>
    <tr><td>5</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Check the order of J3 and J4 with a meter: the channel numbering does not run in the same order as the port contacts (J1.3 reaches J3.1).

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Level shifter board</b><span>Built from the design files</span></div>
  <div class="xb-card"><b>3.3 V and 5 V supply</b><span>From the host</span></div>
  <div class="xb-card"><b>Leads</b><span>Verified contact by contact</span></div>
</div>
{:/nomarkdown}

## Configuration {#configuration}

<span id="smoothieware-use"></span>

A mechanical contact read as an input that does not limit motion. See [endstops](/endstops). Syntax checked against firmware commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`.

```ini
[endstops]
translated_contact.enable = true
translated_contact.pin = PB1-
translated_contact.axis = X
translated_contact.homing_direction = none
translated_contact.limit_enable = false
```

This example reads a 5 V-side contact through channel 1 on PB1.

## How it works {#how-it-works}

Each channel is the usual single-MOSFET translator: gate on 3.3 V, one pull-up per side. Either side can pull the line low; a high level comes from the resistor, so edges rise slowly on long or capacitive wires. See the [BSS138PS datasheet](https://www.nexperia.com/pip/BSS138PS).

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Nothing responds</td><td>With power off, check continuity along each lead and board path against the pinout tables. Confirm which end of the connector is contact 1.</td></tr>
    <tr><td>Output never goes high</td><td>Check that both 3.3 V and 5 V are present, and ground is shared.</td></tr>
    <tr><td>Slow or corrupt signals</td><td>The pull-ups limit speed; shorten the wires or lower the rate.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="https://github.com/Ccecil/3v3-5v-LevelShifter/tree/355404237201e13c600984ae23b83d124f87c91c">original source</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/3v3-5v-LevelShifter/blob/355404237201e13c600984ae23b83d124f87c91c/LevelShifter.kicad_pcb">original circuit</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/3v3-5v-LevelShifter/blob/355404237201e13c600984ae23b83d124f87c91c/Shifter.kicad_sch">schematic</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/3v3-5v-LevelShifter">Ccecil upstream project</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/3v3-5v-LevelShifter/blob/355404237201e13c600984ae23b83d124f87c91c/LevelShifter.kicad_sch">Original LevelShifter.kicad_sch</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/3v3-5v-LevelShifter/blob/355404237201e13c600984ae23b83d124f87c91c/README.md">Original README.md</a></td><td>Design source</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

Outline and holes from the original board file. Millimetres, seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-evel-shifter-mount-t">
  <title id="xb-evel-shifter-mount-t">Mounting drawing of the historical-gadgeteer-3v3-5v-level-shifter, component side: outline 45 by 50 millimetres with 3 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="327.0" y="78.0" width="306.0" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M327.0 56H633.0"/><path d="M327.0 50V62"/><path d="M633.0 50V62"/><path d="M659.0 78.0V418.0"/><path d="M653.0 78.0h12"/><path d="M653.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">45</text>
  <text x="671.0" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">50</text>
  <circle cx="327.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="315.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M269.0 104.0h30" fill="none"/><path d="M303.0 104.0l-8 -4v8z"/><path d="M269.0 104.0v30" fill="none"/><path d="M269.0 138.0l-4 -8h8z"/></g>
  <text x="307.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="265.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="463.0" cy="112.0" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M448.1 112.0h29.8M463.0 97.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="452.1" y="142.9" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  20.00, 5.00</text>
  <circle cx="599.0" cy="248.0" r="8.5" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M586.5 248.0h25.0M599.0 235.5v25.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="607.5" y="229.5" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  40.00, 25.00</text>
  <circle cx="463.0" cy="384.0" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M448.1 384.0h29.8M463.0 369.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="452.1" y="363.1" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  20.00, 45.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 45 × 50&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>20.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>40.00</td><td>25.00</td><td>2.5&nbsp;mm, not plated</td><td>Mounting</td></tr>
    <tr><td>3</td><td>20.00</td><td>45.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Only what the design source states or the circuit fixes. Blank cells are not specified.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Pull-up resistance</td><td>Each side of each channel</td><td>—</td><td>4.7 kΩ</td><td>—</td><td>Design file value</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Design source {#origin}

Designed by Chris Cecil: [original design files](https://github.com/Ccecil/3v3-5v-LevelShifter/tree/355404237201e13c600984ae23b83d124f87c91c). It was drawn for the Smoothieboard V2 Gadgeteer era; check every connection against your own controller.
See all boards on the [extension boards](/extension-boards) page.
