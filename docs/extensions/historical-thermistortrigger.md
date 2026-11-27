---
layout: default
title: "ThermistorTrigger — dual thermistor setpoint trigger"
description: "Two-channel thermistor comparator board: connectors and voltage warning."
permalink: /extensions/historical-thermistortrigger
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Safety add-on</p>
    <h1 id="historical-thermistortrigger">ThermistorTrigger — dual thermistor setpoint trigger</h1>
    <p class="xb-lead">Buffers two thermistor signals and compares them against hardware-set thresholds, intended to drive an independent shutoff.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/historical-thermistortrigger/historical-thermistortrigger-diagram.png" alt="Top view of the ThermistorTrigger — dual thermistor setpoint trigger board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>2</b><span>channels</span></div>
  <div class="xb-stat"><b>LMV324</b><span>buffer/comparator</span></div>
  <div class="xb-stat"><b>MAX6070</b><span>reference</span></div>
  <div class="xb-stat"><b>5 V</b><span>supply</span></div>
  <div class="xb-stat"><b>30 × 30 mm</b><span>board size</span></div>
  <div class="xb-stat"><b>4</b><span>mounting holes</span></div>
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
  <b>The trigger outputs swing at 5 V: do not connect them straight to a 3.3 V input.</b> This is not a certified safety device, and no threshold adjustment procedure is given. Third-party design by Chris Cecil.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>Thermistor comparator</td></tr>
    <tr><td>Sensors</td><td>J1, J2: signal, analog ground</td></tr>
    <tr><td>Buffered outputs</td><td>J3, J4</td></tr>
    <tr><td>Trigger outputs</td><td>J5, J6: ground, 5 V, trigger</td></tr>
    <tr><td>Parts</td><td>LMV324, MAX6070BAUT33+T, TPD4E1U06 protection</td></tr>
    <tr><td>Size</td><td>30 × 30 mm</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/historical-thermistortrigger/historical-thermistortrigger-diagram.png" alt="Annotated top view of the ThermistorTrigger — dual thermistor setpoint trigger board">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:21.7%;top:22.3%" aria-label="1: Sensor 1">1<span class="xb-pop"><b>Sensor 1</b> — Thermistor input.</span></a>
      <a class="xb-mk" href="#tour-2" style="left:21.7%;top:69.1%" aria-label="2: Sensor 2">2<span class="xb-pop"><b>Sensor 2</b> — Thermistor input.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-3" style="left:81.9%;top:42.7%" aria-label="3: Trigger output 1">3<span class="xb-pop"><b>Trigger output 1</b> — 5 V logic.</span></a>
      <a class="xb-mk xb-pr" href="#tour-4" style="left:81.9%;top:75.1%" aria-label="4: Trigger output 2">4<span class="xb-pop"><b>Trigger output 2</b> — 5 V logic.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:52.6%;top:50.0%" aria-label="5: LMV324">5<span class="xb-pop"><b>LMV324</b> — Buffer and comparator.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:29.1%;top:49.3%" aria-label="6: Reference">6<span class="xb-pop"><b>Reference</b> — MAX6070.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:47.6%;top:25.9%" aria-label="7: Connector J3">7<span class="xb-pop"><b>Connector J3</b> — Connector J3. Connects to <code>A1_out</code>, <code>AGND</code>.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:22.0%;top:38.7%" aria-label="8: Resistor R1">8<span class="xb-pop"><b>Resistor R1</b> — Resistor R1, marked <code>4.7k</code> in the board file. Connects to <code>+3.3V</code>.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Sensor 1</b> — Thermistor input.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Sensor 2</b> — Thermistor input.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Trigger output 1</b> — 5 V logic.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Trigger output 2</b> — 5 V logic.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>LMV324</b> — Buffer and comparator.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Reference</b> — MAX6070.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Connector J3</b> — Connector J3. Connects to <code>A1_out</code>, <code>AGND</code>.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Resistor R1</b> — Resistor R1, marked <code>4.7k</code> in the board file. Connects to <code>+3.3V</code>.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

<span id="connect-and-try-it"></span>

### Sensor J1

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>joined to C2 pad 1, R1 pad 2, U1 pad 10, U2 pad 6</td></tr>
    <tr><td>2</td><td><code>AGND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Sensor J2

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J2 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>joined to C3 pad 1, R2 pad 2, U1 pad 12, U2 pad 1</td></tr>
    <tr><td>2</td><td><code>AGND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Buffered output J3

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J3 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>A1_out</code></td></tr>
    <tr><td>2</td><td><code>AGND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Buffered output J4

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J4 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>A2_out</code></td></tr>
    <tr><td>2</td><td><code>AGND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Trigger output J5

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J5 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>GND</code></td></tr>
    <tr><td>2</td><td><code>+5V</code></td></tr>
    <tr><td>3</td><td>joined to U1 pad 7</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Trigger output J6

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J6 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>GND</code></td></tr>
    <tr><td>2</td><td><code>+5V</code></td></tr>
    <tr><td>3</td><td>joined to U1 pad 1</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Trigger board</b><span>Built from the design files</span></div>
  <div class="xb-card"><b>Two thermistors</b><span>Matched to your thresholds</span></div>
  <div class="xb-card"><b>Level conversion</b><span>For 3.3 V inputs</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

The minimum wiring first, then the order to do it in. Facts about each contact are in the [pinout](#pinout).

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 472" role="img" aria-labelledby="xb-historical-thermistortrigger-wire"><title id="xb-historical-thermistortrigger-wire">Wiring: J1 contact 1 to sensor; J1 contact 2 to AGND.</title><image href="/images/extensions/historical-thermistortrigger/historical-thermistortrigger-diagram.png" x="385" y="14" width="230" height="230"/><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J1 on this board</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Thermistor 1</text><rect x="700" y="304" width="270" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><path d="M820 387.0H900M820 371.0H900" fill="none" stroke="#c4cad3" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="916" cy="379" r="20" fill="#b5251e" stroke="#7d120d" stroke-width="3"/><rect x="30" y="304" width="200" height="150" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 364.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" fill="#e6ebf2">  1</text><text x="712" y="369" text-anchor="start" font-size="13" fill="#e6ebf2">sensor</text><rect x="340" y="353" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1: sensor</text><path d="M230 394.0H700" fill="none" stroke="#8b949e" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="394" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" fill="#e6ebf2">AGND  2</text><text x="712" y="399" text-anchor="start" font-size="13" fill="#e6ebf2">AGND</text><rect x="340" y="383" width="220" height="22" rx="11" fill="#8b949e" stroke="#8b949e" stroke-width="1.5"/><text x="450" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#111">2: AGND</text></svg>
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
    <p>Match the thermistors to your thresholds.</p>
  </li>
  <li class="xb-step">
    <h3>Set up and check</h3>
    <p>Never connect a 5 V trigger output to a 3.3 V input without level conversion.</p>
  </li>
  <li class="xb-step">
    <h3>Configure and power up</h3>
    <p>Apply the settings under <a href="#configuration">Configuration</a>, then power up.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

<span id="smoothieware-use"></span>

Reading a level-converted trigger output. Never connect the 5 V output directly.

A mechanical contact read as an input that does not limit motion. See [endstops](/endstops). Syntax checked against firmware commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`.

```ini
[endstops]
thermal_comparator_observation.enable = true
thermal_comparator_observation.pin = PB1-
thermal_comparator_observation.axis = X
thermal_comparator_observation.homing_direction = none
thermal_comparator_observation.limit_enable = false
```

## How it works {#how-it-works}

Each thermistor signal is buffered, brought out on J3 or J4, and compared with a threshold; the result appears on J5 or J6, intended to go low on overtemperature. See the [MAX6070 datasheet](https://www.analog.com/en/products/max6070.html).

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 142" role="img" aria-labelledby="xb-historical-thermistortrigger-path"><title id="xb-historical-thermistortrigger-path">Thermistor signal then Buffer, also out on J3 or J4 then Comparator, against a threshold then J5 or J6, low on overtemperature, as intended.</title><rect x="20" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="127" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Thermistor signal</text><text x="127" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="268" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="376" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Buffer</text><text x="376" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2">also out on J3 or J4</text><path d="M238.5 70H259.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M258 63L266 70L258 77Z" fill="#5fb3ff"/><rect x="517" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="624" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Comparator</text><text x="624" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2">against a threshold</text><path d="M487.0 70H508.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M506 63L515 70L506 77Z" fill="#5fb3ff"/><rect x="766" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="873" y="57" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">J5 or J6</text><text x="873" y="77" text-anchor="middle" font-size="13" fill="#a9b4c2">low on overtemperature, as</text><text x="873" y="93" text-anchor="middle" font-size="13" fill="#a9b4c2">intended</text><path d="M735.5 70H756.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M754 63L764 70L754 77Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Output never trips</td><td>Check the sensor wiring and the threshold.</td></tr>
    <tr><td>Output always low</td><td>Check for an open or shorted sensor.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="https://raw.githubusercontent.com/Ccecil/ThermistorTrigger/625eb1ab9a780d41ef6dac5576418ab81ab8065c/ThermistorComparator.kicad_pcb">ThermistorComparator.kicad_pcb</a></td><td>Design source</td></tr>
    <tr><td><a href="/images/extensions/historical-thermistortrigger/guides/native-contact-reference/native-source-and-notices.zip">Download the board source, upstream licence and drawing notice</a></td><td>Download</td></tr>
    <tr><td><a href="https://raw.githubusercontent.com/Ccecil/ThermistorTrigger/625eb1ab9a780d41ef6dac5576418ab81ab8065c/README.md">README.md</a></td><td>Design source</td></tr>
    <tr><td><a href="https://raw.githubusercontent.com/Ccecil/ThermistorTrigger/625eb1ab9a780d41ef6dac5576418ab81ab8065c/ThermistorComparator.kicad_sch">ThermistorComparator.kicad_sch</a></td><td>Design source</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

Outline and holes from the original board file. Millimetres, seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-istortrigger-mount-t">
  <title id="xb-istortrigger-mount-t">Mounting drawing of the historical-thermistortrigger, component side: outline 30 by 30 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="310.0" y="78.0" width="340.0" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M310.0 56H650.0"/><path d="M310.0 50V62"/><path d="M650.0 50V62"/><path d="M676.0 78.0V418.0"/><path d="M670.0 78.0h12"/><path d="M670.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">30</text>
  <text x="688.0" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">30</text>
  <circle cx="310.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="298.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M252.0 104.0h30" fill="none"/><path d="M286.0 104.0l-8 -4v8z"/><path d="M252.0 104.0v30" fill="none"/><path d="M252.0 138.0l-4 -8h8z"/></g>
  <text x="290.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="248.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="338.3" cy="106.3" r="14.2" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M320.2 106.3h36.3M338.3 88.2v36.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="324.2" y="140.5" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  2.50, 2.50</text>
  <circle cx="621.7" cy="106.3" r="14.2" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M603.5 106.3h36.3M621.7 88.2v36.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="635.8" y="140.5" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  27.50, 2.50</text>
  <circle cx="338.3" cy="389.7" r="14.2" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M320.2 389.7h36.3M338.3 371.5v36.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="324.2" y="365.5" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  2.50, 27.50</text>
  <circle cx="621.7" cy="389.7" r="14.2" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M603.5 389.7h36.3M621.7 371.5v36.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="635.8" y="365.5" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  27.50, 27.50</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 30 × 30&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>2.50</td><td>2.50</td><td>2.5&nbsp;mm, not plated</td><td>Mounting</td></tr>
    <tr><td>2</td><td>27.50</td><td>2.50</td><td>2.5&nbsp;mm, not plated</td><td>Mounting</td></tr>
    <tr><td>3</td><td>2.50</td><td>27.50</td><td>2.5&nbsp;mm, not plated</td><td>Mounting</td></tr>
    <tr><td>4</td><td>27.50</td><td>27.50</td><td>2.5&nbsp;mm, not plated</td><td>Mounting</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Only what the design source states or the circuit fixes. Blank cells are not specified.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Output swing</td><td>J5, J6</td><td>—</td><td>5 V</td><td>—</td><td>Comparator supply in the design file</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Design source {#origin}

Third-party design by Chris Cecil: [original board file](https://raw.githubusercontent.com/Ccecil/ThermistorTrigger/625eb1ab9a780d41ef6dac5576418ab81ab8065c/ThermistorComparator.kicad_pcb) (<code>ThermistorComparator.kicad_pcb</code>). It is a separate hardware design, not a current Smoothieware board.
See all boards on the [extension boards](/extension-boards) page.
