---
layout: default
title: "Extruder toolhead harness without motor"
description: "Passive toolhead wiring board without motor connector: pinout and limits."
permalink: /extensions/historical-extruder-toolhead-harness-without-motor
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Wiring</p>
    <h1 id="historical-extruder-toolhead-harness-without-motor">Extruder toolhead harness without motor</h1>
    <p class="xb-lead">Joins heater and fan supply on one toolhead board with separate switched returns, plus thermistor, probe and servo connectors.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/historical-extruder-toolhead-harness-without-motor/historical-extruder-toolhead-harness-without-motor-diagram.png" alt="Top view of the Extruder toolhead harness without motor board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>2</b><span>fan outputs</span></div>
  <div class="xb-stat"><b>1</b><span>heater</span></div>
  <div class="xb-stat"><b>1</b><span>thermistor</span></div>
  <div class="xb-stat"><b>1</b><span>servo</span></div>
  <div class="xb-stat"><b>30 × 30 mm</b><span>board size</span></div>
  <div class="xb-stat"><b>2</b><span>underside jumpers</span></div>
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
  <a href="#mounting">Mounting dimensions</a>
  <a href="#electrical">Electrical specifications</a>
</nav>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <b>No supply or current rating is specified.</b> Do not energise it before checking copper, connectors and polarity for your heater. This is a design by Chris Cecil, not a current Smoothieware board.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>Passive toolhead distribution</td></tr>
    <tr><td>Harness</td><td>J2 and wire pads</td></tr>
    <tr><td>Loads</td><td>HOTEND0, FAN1, FAN2</td></tr>
    <tr><td>Sensors</td><td>THERM0, PROBE0, SERVO0</td></tr>
    <tr><td>Fan return selectors</td><td>JP1, JP2</td></tr>
    <tr><td>Size</td><td>30 × 30 mm</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/historical-extruder-toolhead-harness-without-motor/historical-extruder-toolhead-harness-without-motor-diagram.png" alt="Annotated top view of the Extruder toolhead harness without motor board">
      <a class="xb-mk" href="#tour-1" style="left:37.6%;top:52.1%" aria-label="1: Hotend connector (HOTEND0)">1<span class="xb-pop"><b>Hotend connector (HOTEND0)</b> — The part labelled HOTEND0 in the board file: an XT30 power connector footprint.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-2" style="left:86.3%;top:29.2%" aria-label="2: Thermistor header (THERM0)">2<span class="xb-pop"><b>Thermistor header (THERM0)</b> — The part labelled THERM0 in the board file: a two-pin right-angle header.</span></a>
      <a class="xb-mk xb-pr" href="#tour-3" style="left:87.7%;top:50.0%" aria-label="3: Probe connector (PROBE0)">3<span class="xb-pop"><b>Probe connector (PROBE0)</b> — The part labelled PROBE0 in the board file: a two-pin Molex header.</span></a>
      <a class="xb-mk xb-pr" href="#tour-4" style="left:87.7%;top:71.4%" aria-label="4: Servo connector (SERVO0)">4<span class="xb-pop"><b>Servo connector (SERVO0)</b> — The part labelled SERVO0 in the board file: a three-pin Molex header.</span></a>
      <a class="xb-mk xb-pl" href="#tour-5" style="left:14.5%;top:63.7%" aria-label="5: Fan 1 connector (FAN1)">5<span class="xb-pop"><b>Fan 1 connector (FAN1)</b> — The part labelled FAN1 in the board file: a two-pin Molex header.</span></a>
      <a class="xb-mk xb-pl" href="#tour-6" style="left:14.5%;top:80.7%" aria-label="6: Fan 2 connector (FAN2)">6<span class="xb-pop"><b>Fan 2 connector (FAN2)</b> — The part labelled FAN2 in the board file: a two-pin Molex header.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:52.5%;top:83.8%" aria-label="7: Eight-pin header J2 (J2)">7<span class="xb-pop"><b>Eight-pin header J2 (J2)</b> — The part labelled J2 in the board file: a 2 × 4 pin header.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-8" style="left:9.0%;top:35.2%" aria-label="8: Indicator F1 (F1)">8<span class="xb-pop"><b>Indicator F1 (F1)</b> — The part labelled F1 in the board file: an 0805 LED footprint.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Hotend connector (HOTEND0)</b> — The part labelled HOTEND0 in the board file: an XT30 power connector footprint.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Thermistor header (THERM0)</b> — The part labelled THERM0 in the board file: a two-pin right-angle header.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Probe connector (PROBE0)</b> — The part labelled PROBE0 in the board file: a two-pin Molex header.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Servo connector (SERVO0)</b> — The part labelled SERVO0 in the board file: a three-pin Molex header.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Fan 1 connector (FAN1)</b> — The part labelled FAN1 in the board file: a two-pin Molex header.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Fan 2 connector (FAN2)</b> — The part labelled FAN2 in the board file: a two-pin Molex header.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Eight-pin header J2 (J2)</b> — The part labelled J2 in the board file: a 2 × 4 pin header.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Indicator F1 (F1)</b> — The part labelled F1 in the board file: an 0805 LED footprint.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

<span id="connect-and-try-it"></span>

### Harness J2

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J2 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>joined to SERVO0 pad 2</td></tr>
    <tr><td>2</td><td>joined to SERVO0 pad 1</td></tr>
    <tr><td>3</td><td>joined to THERM0 pad 1</td></tr>
    <tr><td>4</td><td>joined to PROBE0 pad 1</td></tr>
    <tr><td>5</td><td>joined to THERM0 pad 2</td></tr>
    <tr><td>6</td><td>not connected</td></tr>
    <tr><td>7</td><td>joined to JP2 pad 3</td></tr>
    <tr><td>8</td><td>joined to JP1 pad 3</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Heater HOTEND0

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>HOTEND0 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>joined to F1 pad A, F2 pad A, FAN1 pad 1, FAN2 pad 1, H0 pad A, VBB0 pad 1</td></tr>
    <tr><td>2</td><td>joined to H-0 pad 1, R3 pad 2</td></tr>
    <tr><td>3</td><td>not connected</td></tr>
    <tr><td>4</td><td>not connected</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Fan FAN1

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>FAN1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>joined to F1 pad A, F2 pad A, FAN2 pad 1, H0 pad A, HOTEND0 pad 1, VBB0 pad 1</td></tr>
    <tr><td>2</td><td>joined to JP2 pad 2, R2 pad 2</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Fan FAN2

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>FAN2 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>joined to F1 pad A, F2 pad A, FAN1 pad 1, H0 pad A, HOTEND0 pad 1, VBB0 pad 1</td></tr>
    <tr><td>2</td><td>joined to JP1 pad 2, R1 pad 2</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Thermistor THERM0

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>THERM0 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>joined to J2 pad 3</td></tr>
    <tr><td>2</td><td>joined to J2 pad 5</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Probe PROBE0

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>PROBE0 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>joined to J2 pad 4</td></tr>
    <tr><td>2</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Servo SERVO0

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>SERVO0 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>joined to J2 pad 2</td></tr>
    <tr><td>2</td><td>joined to J2 pad 1</td></tr>
    <tr><td>3</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Harness board</b><span>Built from the design files</span></div>
  <div class="xb-card"><b>Wiring</b><span>Rated for the heater</span></div>
  <div class="xb-card"><b>Meter</b><span>For continuity checks</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

The minimum wiring first, then the order to do it in. Facts about each contact are in the [pinout](#pinout).

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 472" role="img" aria-labelledby="xb-historical-extruder-toolhead-harness-without-motor-wire"><title id="xb-historical-extruder-toolhead-harness-without-motor-wire">Wiring: HOTEND0 contact 1 to heater lead; HOTEND0 contact 2 to heater return.</title><image href="/images/extensions/historical-extruder-toolhead-harness-without-motor/historical-extruder-toolhead-harness-without-motor-diagram.png" x="389" y="14" width="222" height="230"/><circle cx="473" cy="134" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="438" y="153" width="70" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="473" y="167" text-anchor="middle" font-size="13" font-weight="700" fill="#111">HOTEND0</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">HOTEND0 on this board</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Heater</text><rect x="700" y="304" width="270" height="150" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><rect x="815" y="329" width="130" height="100" rx="8" fill="#20365c" stroke="#7fa6e0" stroke-width="1.5"/><rect x="858" y="359" width="44" height="40" rx="3" fill="#171717" stroke="#939393" stroke-width="1.5"/><circle cx="828" cy="345" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="362" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="379" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="396" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="413" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="930" cy="343" r="6" fill="#0d0f12" stroke="#c9c9c9" stroke-width="1.5"/><circle cx="930" cy="415" r="6" fill="#0d0f12" stroke="#c9c9c9" stroke-width="1.5"/><rect x="908" y="373" width="18" height="10" rx="1" fill="#c9a66b" stroke="#c9a66b" stroke-width="1.5"/><rect x="30" y="304" width="200" height="150" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 364.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" fill="#eaeaea">  1</text><text x="712" y="369" text-anchor="start" font-size="13" fill="#eaeaea">heater lead</text><rect x="340" y="353" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1: heater lead</text><path d="M230 394.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" fill="#eaeaea">  2</text><text x="712" y="399" text-anchor="start" font-size="13" fill="#eaeaea">heater return</text><rect x="340" y="383" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">2: heater return</text></svg>
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
    <p>Use wiring rated for the heater.</p>
  </li>
  <li class="xb-step">
    <h3>Set up and check</h3>
    <p>Check every harness contact for continuity with a meter.</p>
  </li>
  <li class="xb-step">
    <h3>Check with a meter</h3>
    <p>Check continuity and the rail voltages with a meter before connecting anything else.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

<span id="smoothieware-use"></span>

This passive board needs no setting of its own. Configure the pin each signal comes from as you would without the board.

## How it works {#how-it-works}

Heater and fans share the positive supply and return separately. LEDs with series resistors show the states.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 270" role="img" aria-labelledby="xb-historical-extruder-toolhead-harness-without-motor-path"><title id="xb-historical-extruder-toolhead-harness-without-motor-path">Shared positive supply then Heater and fans then Separate returns. Powered states then LEDs with series resistors.</title><rect x="46" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="186" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Shared positive supply</text><text x="186" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><rect x="360" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Heater and fans</text><text x="500" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M330.0 70H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 63L358 70L349 77Z" fill="#5fb3ff"/><rect x="674" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="814" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Separate returns</text><text x="814" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M644.0 70H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 63L672 70L663 77Z" fill="#5fb3ff"/><rect x="203" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="343" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Powered states</text><text x="343" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><rect x="517" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="657" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">LEDs with series resistors</text><text x="657" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M487.0 198H508.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M506 191L515 198L506 205Z" fill="#5fb3ff"/></svg>
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
    <tr><td>A fan does not run</td><td>Check its return selector on the underside.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="https://github.com/Ccecil/ExtruderBoards/tree/def3970de38643141e1a6176440cc079c666c853">The upstream source</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/ExtruderBoards/blob/def3970de38643141e1a6176440cc079c666c853/SingleExtruderNoMotor/SingleExtruder_noMotor.f3z">original Fusion archive</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/ExtruderBoards">Ccecil upstream project</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/ExtruderBoards/blob/def3970de38643141e1a6176440cc079c666c853/SingleExtruderNoMotor/readme.md">Original readme.md</a></td><td>Design source</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

The board file has no mounting holes.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-m-extruder-toolhead-harness-without-motor-mount-t">
  <title id="xb-m-extruder-toolhead-harness-without-motor-mount-t">Mounting drawing of the board, component side: outline 30 by 30 millimetres without mounting holes.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="310.0" y="78.0" width="340.0" height="340.0" rx="0.0" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M310.0 56H650.0"/><path d="M310.0 50V62"/><path d="M650.0 50V62"/><path d="M676.0 78.0V418.0"/><path d="M670.0 78.0h12"/><path d="M670.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">30</text>
  <text x="688.0" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">30</text>
  <circle cx="310.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="298.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M252.0 104.0h30" fill="none"/><path d="M286.0 104.0l-8 -4v8z"/><path d="M252.0 104.0v30" fill="none"/><path d="M252.0 138.0l-4 -8h8z"/></g>
  <text x="290.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="248.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  
  </svg>
  </div>
  <figcaption>Board outline 30 × 30&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>
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

Related boards, each with its own pinout and limits: [Extruder toolhead harness with motor provision](/extensions/historical-extruder-toolhead-harness-with-motor).

## Design source {#origin}

Designed by Chris Cecil: [original design files](https://github.com/Ccecil/ExtruderBoards/tree/def3970de38643141e1a6176440cc079c666c853). It was drawn for the Smoothieboard V2 Gadgeteer era; check every connection against your own controller.
See all boards on the [extension boards](/extension-boards) page.
