---
layout: default
title: "Three-channel A5984 stepper driver"
description: "Three-channel A5984 bipolar stepper driver board: connectors, limits and configuration."
permalink: /extensions/historical-a5984-stepper-driver
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Motion</p>
    <h1 id="historical-a5984-stepper-driver">Three-channel A5984 stepper driver</h1>
    <p class="xb-lead">Three A5984 stepper drivers that turn step and direction signals into motor current for three bipolar motors.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/historical-a5984-stepper-driver/directory-board-render.webp" alt="Top view of the Three-channel A5984 stepper driver board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>3</b><span>drivers</span></div>
  <div class="xb-stat"><b>A5984</b><span>driver IC</span></div>
  <div class="xb-stat"><b>36 V</b><span>maximum in the use notes</span></div>
  <div class="xb-stat"><b>90 × 90 mm</b><span>board size</span></div>
  <div class="xb-stat"><b>8</b><span>holes, fan holes included</span></div>
  <div class="xb-stat"><b>60 mm</b><span>fan required</span></div>
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
  <b>This board needs a 60 mm fan blowing on its underside, and its capacitor ratings are not specified.</b> Never put motor voltage on the logic connectors C1 or C4. This is a historical Smoothieboard2 design, not a current board.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>Three-channel bipolar stepper driver</td></tr>
    <tr><td>Drivers</td><td>U1–U3, A5984GLP</td></tr>
    <tr><td>Motor supply</td><td>P1: contact 1 supply, contact 2 ground</td></tr>
    <tr><td>Logic connectors</td><td>C1 and C4, in parallel</td></tr>
    <tr><td>Motor outputs</td><td>MotorOutput1–3, four contacts</td></tr>
    <tr><td>Current adjustment</td><td>RV1–RV3</td></tr>
    <tr><td>Microstep selection</td><td>Per-driver MS1–MS3 jumpers</td></tr>
    <tr><td>Size</td><td>90 × 90 mm</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/historical-a5984-stepper-driver/directory-board-render.webp" alt="Annotated top view of the Three-channel A5984 stepper driver board">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:19.5%;top:48.0%" aria-label="1: Motor supply">1<span class="xb-pop"><b>Motor supply</b> — Supply and ground.</span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:52.8%;top:26.9%" aria-label="2: Driver 1">2<span class="xb-pop"><b>Driver 1</b> — A5984.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:52.8%;top:51.9%" aria-label="3: Driver 2">3<span class="xb-pop"><b>Driver 2</b> — A5984.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:52.8%;top:76.9%" aria-label="4: Driver 3">4<span class="xb-pop"><b>Driver 3</b> — A5984.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:64.2%;top:30.4%" aria-label="5: Motor output 1">5<span class="xb-pop"><b>Motor output 1</b> — Four coil contacts.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:57.5%;top:36.5%" aria-label="6: Current adjustment">6<span class="xb-pop"><b>Current adjustment</b> — One potentiometer per driver.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:57.5%;top:61.5%" aria-label="7: Trimmer RV2">7<span class="xb-pop"><b>Trimmer RV2</b> — Trimmer RV2, marked <code>50K</code> in the board file. Connects to <code>GND</code>.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:49.6%;top:14.9%" aria-label="8: Diode D0MS1">8<span class="xb-pop"><b>Diode D0MS1</b> — Diode D0MS1, marked <code>0</code> in the board file. Connects to <code>+3V3</code>, <code>MS1</code>.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Motor supply</b> — Supply and ground.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Driver 1</b> — A5984.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Driver 2</b> — A5984.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Driver 3</b> — A5984.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Motor output 1</b> — Four coil contacts.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Current adjustment</b> — One potentiometer per driver.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Trimmer RV2</b> — Trimmer RV2, marked <code>50K</code> in the board file. Connects to <code>GND</code>.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Diode D0MS1</b> — Diode D0MS1, marked <code>0</code> in the board file. Connects to <code>+3V3</code>, <code>MS1</code>.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

<span id="connect-and-try-it"></span>

### Motor supply P1

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>P1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+36V</code></td></tr>
    <tr><td>2</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Logic connector C1

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>C1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+3V3</code></td></tr>
    <tr><td>2</td><td>not connected</td></tr>
    <tr><td>3</td><td><code>STEP0</code></td></tr>
    <tr><td>4</td><td><code>DIR0</code></td></tr>
    <tr><td>5</td><td><code>STEP1</code></td></tr>
    <tr><td>6</td><td><code>DIR1</code></td></tr>
    <tr><td>7</td><td><code>STEP2</code></td></tr>
    <tr><td>8</td><td><code>DIR2</code></td></tr>
    <tr><td>9</td><td><code>ENABLE</code></td></tr>
    <tr><td>10</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Motor output 1

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>MotorOutput1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>OUT1B</code></td></tr>
    <tr><td>2</td><td><code>OUT1A</code></td></tr>
    <tr><td>3</td><td><code>OUT2A</code></td></tr>
    <tr><td>4</td><td><code>OUT2B</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

MotorOutput2 and MotorOutput3 follow the same coil order. Disconnect power before touching a motor connector.

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Driver board</b><span>Built from the design files</span></div>
  <div class="xb-card"><b>Motor supply</b><span>8–36 V</span></div>
  <div class="xb-card"><b>60 mm fan</b><span>Under the board</span></div>
  <div class="xb-card"><b>Bipolar motors</b><span>Current within the driver limit</span></div>
</div>
{:/nomarkdown}

## Configuration {#configuration}

<span id="smoothieware-use"></span>

The first channel as an external driver from PB1 (step), PJ4 (direction) and PJ2 (enable). Check each wire against the C1 table first. Syntax checked against firmware commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`.

```ini
[actuator]
alpha.driver = external
alpha.step_pin = PB1
alpha.dir_pin = PJ4
alpha.en_pin = PJ2!
beta.en_pin = nc
gamma.en_pin = nc
```

## How it works {#how-it-works}

Each A5984 takes STEP and DIR and regulates the two winding currents of one motor; a shared enable line serves all three. Potentiometers set the current reference. Reset and sleep are tied to 3.3 V. The [A5984 datasheet](https://www.allegromicro.com/-/media/files/datasheets/a5984-datasheet.pdf) gives an 8–40 V motor supply range.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 270" role="img" aria-labelledby="xb-historical-a5984-stepper-driver-path"><title id="xb-historical-a5984-stepper-driver-path">STEP, DIR, shared enable then Three A5984 drivers, regulate both winding currents then Three stepper motors. Potentiometers then Current reference of each driver.</title><rect x="46" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="186" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">STEP, DIR, shared enable</text><text x="186" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="360" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Three A5984 drivers</text><text x="500" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2">regulate both winding currents</text><path d="M330.0 70H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 63L358 70L349 77Z" fill="#5fb3ff"/><rect x="674" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="814" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Three stepper motors</text><text x="814" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M644.0 70H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 63L672 70L663 77Z" fill="#5fb3ff"/><rect x="203" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="343" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Potentiometers</text><text x="343" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="517" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="657" y="184" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Current reference of each</text><text x="657" y="202" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">driver</text><text x="657" y="222" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M487.0 198H508.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M506 191L515 198L506 205Z" fill="#5fb3ff"/></svg>
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
    <tr><td>Motor does not turn</td><td>Check supply, enable level, current setting and coil pairs.</td></tr>
    <tr><td>Driver overheats or stalls</td><td>Check the fan and lower the current.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/A5984Breakout">original Smoothieboard2 source</a></td><td>Design source</td></tr>
    <tr><td><a href="/images/extensions/historical-native-source-package-20261018.zip">Download the editable historical diagram and native-source package</a></td><td>Download</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

Outline and holes from the original board file. Millimetres, seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-epper-driver-mount-t">
  <title id="xb-epper-driver-mount-t">Mounting drawing of the historical-a5984-stepper-driver, component side: outline 90 by 90 millimetres with 8 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="310.0" y="78.0" width="340.0" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M310.0 56H650.0"/><path d="M310.0 50V62"/><path d="M650.0 50V62"/><path d="M676.0 78.0V418.0"/><path d="M670.0 78.0h12"/><path d="M670.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">90</text>
  <text x="688.0" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">90</text>
  <circle cx="310.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="298.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M252.0 104.0h30" fill="none"/><path d="M286.0 104.0l-8 -4v8z"/><path d="M252.0 104.0v30" fill="none"/><path d="M252.0 138.0l-4 -8h8z"/></g>
  <text x="290.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="248.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="328.9" cy="96.9" r="5.7" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M319.2 96.9h19.3M328.9 87.2v19.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="323.2" y="122.6" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.00</text>
  <circle cx="631.1" cy="96.9" r="5.7" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M621.4 96.9h19.3M631.1 87.2v19.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="636.8" y="122.6" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  85.00, 5.00</text>
  <circle cx="366.7" cy="134.7" r="5.7" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M357.0 134.7h19.3M366.7 125.0v19.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="361.0" y="160.3" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  15.00, 15.00</text>
  <circle cx="593.3" cy="134.7" r="5.7" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M583.7 134.7h19.3M593.3 125.0v19.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="599.0" y="160.3" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  75.00, 15.00</text>
  <circle cx="366.7" cy="361.3" r="5.7" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M357.0 361.3h19.3M366.7 351.7v19.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="361.0" y="345.7" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">5</tspan>  15.00, 75.00</text>
  <circle cx="593.3" cy="361.3" r="5.7" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M583.7 361.3h19.3M593.3 351.7v19.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="599.0" y="345.7" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">6</tspan>  75.00, 75.00</text>
  <circle cx="328.9" cy="399.1" r="5.7" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M319.2 399.1h19.3M328.9 389.4v19.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="323.2" y="383.4" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">7</tspan>  5.00, 85.00</text>
  <circle cx="631.1" cy="399.1" r="5.7" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M621.4 399.1h19.3M631.1 389.4v19.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="636.8" y="383.4" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">8</tspan>  85.00, 85.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 90 × 90&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>5.00</td><td>3&nbsp;mm, plated, connected to GND</td><td>Mounting</td></tr>
    <tr><td>2</td><td>85.00</td><td>5.00</td><td>3&nbsp;mm, plated, connected to GND</td><td>Mounting</td></tr>
    <tr><td>3</td><td>15.00</td><td>15.00</td><td>3&nbsp;mm, not plated</td><td>Fan mounting</td></tr>
    <tr><td>4</td><td>75.00</td><td>15.00</td><td>3&nbsp;mm, not plated</td><td>Fan mounting</td></tr>
    <tr><td>5</td><td>15.00</td><td>75.00</td><td>3&nbsp;mm, not plated</td><td>Fan mounting</td></tr>
    <tr><td>6</td><td>75.00</td><td>75.00</td><td>3&nbsp;mm, not plated</td><td>Fan mounting</td></tr>
    <tr><td>7</td><td>5.00</td><td>85.00</td><td>3&nbsp;mm, plated, connected to GND</td><td>Mounting</td></tr>
    <tr><td>8</td><td>85.00</td><td>85.00</td><td>3&nbsp;mm, plated, connected to GND</td><td>Mounting</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Only what the design source states or the circuit fixes. Blank cells are not specified.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Motor supply</td><td>P1</td><td>8 V</td><td>—</td><td>36 V</td><td>Datasheet range limited by the board use notes</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Related boards, each with its own pinout and limits: [Three-channel A5984 stepper driver board](/extensions/three-channel-a5984-stepper-driver).

## Design source {#origin}

This board comes from the [original design files](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/A5984Breakout). It was drawn for an earlier controller generation than Smoothieboard V2 Prime; match connections contact by contact.
See all boards on the [extension boards](/extension-boards) page.
