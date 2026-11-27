---
layout: default
title: "External STEP/DIR signal breakout"
description: "Passive three-axis STEP/DIR/ENABLE breakout for external stepper drives: pinout and wiring."
permalink: /extensions/historical-external-stepper-signal-breakout
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Motion</p>
    <h1 id="historical-external-stepper-signal-breakout">External STEP/DIR signal breakout</h1>
    <p class="xb-lead">Splits one control header into three STEP, DIR and ENABLE connectors for separately powered external drivers.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/historical-external-stepper-signal-breakout/directory-board-render.png" alt="Top view of the External STEP/DIR signal breakout board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>3</b><span>drive outputs</span></div>
  <div class="xb-stat"><b>1</b><span>shared ENABLE</span></div>
  <div class="xb-stat"><b>3.3/5 V</b><span>supply selector</span></div>
  <div class="xb-stat"><b>0</b><span>active parts</span></div>
  <div class="xb-stat"><b>40 × 15 mm</b><span>board size</span></div>
  <div class="xb-stat"><b>5</b><span>contacts per output</span></div>
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
  <b>This board carries logic signals only.</b> It cannot drive motor windings, adds no isolation and does not shift levels: choosing 5 V on JP1 changes the supply contact, not the signals. This is a design by Chris Cecil, not a current Smoothieware board.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>Passive STEP/DIR/ENABLE distribution</td></tr>
    <tr><td>Input</td><td>J1: ten contacts</td></tr>
    <tr><td>Outputs</td><td>J2–J4: +V, STEP, DIR, ENABLE, ground</td></tr>
    <tr><td>Selector</td><td>JP1 (underside): +V from host 5 V or 3.3 V</td></tr>
    <tr><td>Size</td><td>40 × 15 mm</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/historical-external-stepper-signal-breakout/directory-board-render.png" alt="Annotated top view of the External STEP/DIR signal breakout board">
      <a class="xb-mk" href="#tour-1" style="left:50.0%;top:67.0%" aria-label="1: Host header J1">1<span class="xb-pop"><b>Host header J1</b> — All signals arrive here.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-2" style="left:91.6%;top:27.3%" aria-label="2: Output 1">2<span class="xb-pop"><b>Output 1</b> — STEP1 and DIR1.</span></a>
      <a class="xb-mk xb-pb" href="#tour-3" style="left:61.4%;top:27.3%" aria-label="3: Output 2">3<span class="xb-pop"><b>Output 2</b> — STEP2 and DIR2.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:31.3%;top:27.3%" aria-label="4: Output 3">4<span class="xb-pop"><b>Output 3</b> — STEP3 and DIR3.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host header J1</b> — All signals arrive here.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Output 1</b> — STEP1 and DIR1.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Output 2</b> — STEP2 and DIR2.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Output 3</b> — STEP3 and DIR3.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

<span id="connect-and-try-it"></span>

### Host header J1

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+3V3</code></td></tr>
    <tr><td>2</td><td><code>+5V</code></td></tr>
    <tr><td>3</td><td><code>DIR1</code></td></tr>
    <tr><td>4</td><td><code>STP1</code></td></tr>
    <tr><td>5</td><td><code>STP2</code></td></tr>
    <tr><td>6</td><td><code>STP3</code></td></tr>
    <tr><td>7</td><td><code>DIR2</code></td></tr>
    <tr><td>8</td><td><code>DIR3</code></td></tr>
    <tr><td>9</td><td><code>EN</code></td></tr>
    <tr><td>10</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Output 1, J2

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J2 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+V</code></td></tr>
    <tr><td>2</td><td><code>STP1</code></td></tr>
    <tr><td>3</td><td><code>DIR1</code></td></tr>
    <tr><td>4</td><td><code>EN</code></td></tr>
    <tr><td>5</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Output 2, J3

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J3 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+V</code></td></tr>
    <tr><td>2</td><td><code>STP2</code></td></tr>
    <tr><td>3</td><td><code>DIR2</code></td></tr>
    <tr><td>4</td><td><code>EN</code></td></tr>
    <tr><td>5</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Output 3, J4

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J4 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+V</code></td></tr>
    <tr><td>2</td><td><code>STP3</code></td></tr>
    <tr><td>3</td><td><code>DIR3</code></td></tr>
    <tr><td>4</td><td><code>EN</code></td></tr>
    <tr><td>5</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Supply selector JP1

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>JP1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+5V</code></td></tr>
    <tr><td>2</td><td><code>+V</code></td></tr>
    <tr><td>3</td><td><code>+3V3</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Breakout board</b><span>Built from the design files</span></div>
  <div class="xb-card"><b>External drive</b><span>With separate motor supply</span></div>
  <div class="xb-card"><b>Leads</b><span>Checked contact by contact</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

One external drive on output 1, wired to Smoothieboard V2 Prime J37. Keep motor power off until the signals are checked.

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Wire the host leads</h3>
    <p>With all power off connect J37 contact 3 to J1.3 (DIR1), 4 to J1.4 (STEP1), 9 to J1.9 (ENABLE) and 10 to J1.10 (ground).</p>
  </li>
  <li class="xb-step">
    <h3>Wire the drive</h3>
    <p>Connect J2.2 to STEP, J2.3 to DIR, J2.4 to ENABLE and J2.5 to logic ground, following the drive manual for its supply and polarity.</p>
  </li>
  <li class="xb-step">
    <h3>Configure and test</h3>
    <p>Apply the settings from <a href="#configuration">Configuration</a>, restart, and with the motor unloaded enter <code>test pulse x 2</code> in the console, then <code>M18</code> to disable the motor.</p>
    <p class="xb-expect">The drive receives pulses.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

<span id="smoothieware-use"></span>

Alpha axis on an external drive. Match the ENABLE inversion to your drive. Syntax checked against firmware commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`.

```ini
[actuator]
alpha.driver = external
alpha.step_pin = PJ4
alpha.dir_pin = PB1
alpha.en_pin = PJ2!
```

## How it works {#how-it-works}

Every output contact is a straight track from J1. JP1 only chooses which host rail reaches the +V contact of J2–J4. Check the drive manual for its logic-high level and pulse timing; a 3.3 V host signal does not meet every 5 V input.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Nothing responds</td><td>With power off, check continuity along each lead and board path against the pinout tables. Confirm which end of the connector is contact 1.</td></tr>
    <tr><td>Drive does not step</td><td>Check the drive input levels, minimum pulse width and the ENABLE polarity.</td></tr>
    <tr><td>All axes disable together</td><td>ENABLE is one shared line.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="https://github.com/Ccecil/StepXternal/tree/4f8760bac438c3a078ac421ea79f2562bbb123f2">upstream project files</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/StepXternal/blob/4f8760bac438c3a078ac421ea79f2562bbb123f2/StepXternal.kicad_pcb">original circuit</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/CommandShell.cpp#L1193">pulse diagnostic</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/robot/Robot.cpp#L1148">motor enable commands</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/robot/StepperMotor.cpp#L8">stepper initialization</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/StepXternal">Ccecil upstream project</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/StepXternal/blob/4f8760bac438c3a078ac421ea79f2562bbb123f2/README.md">Original README.md</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/StepXternal/blob/4f8760bac438c3a078ac421ea79f2562bbb123f2/StepXternal.kicad_sch">Original StepXternal.kicad_sch</a></td><td>Design source</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

Outline and holes from the original board file. Millimetres, seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 365" role="img" aria-labelledby="xb-nal-breakout-mount-t">
  <title id="xb-nal-breakout-mount-t">Mounting drawing of the historical-external-stepper-signal-breakout, component side: outline 40 by 15 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="180.0" y="78.0" width="600.0" height="225.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M180.0 56H780.0"/><path d="M180.0 50V62"/><path d="M780.0 50V62"/><path d="M806.0 78.0V303.0"/><path d="M800.0 78.0h12"/><path d="M800.0 303.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">40</text>
  <text x="818.0" y="195.5" font-size="15" font-weight="700" fill="#e6ebf2">15</text>
  <circle cx="180.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="168.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M122.0 104.0h30" fill="none"/><path d="M156.0 104.0l-8 -4v8z"/><path d="M122.0 104.0v30" fill="none"/><path d="M122.0 138.0l-4 -8h8z"/></g>
  <text x="160.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="118.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="217.5" cy="243.0" r="18.8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M194.8 243.0h45.5M217.5 220.2v45.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="198.8" y="214.2" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  2.50, 11.00</text>
  <circle cx="742.5" cy="243.0" r="18.8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M719.8 243.0h45.5M742.5 220.2v45.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="761.2" y="214.2" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  37.50, 11.00</text>
  <text x="480.0" y="333.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 40 × 15&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>2.50</td><td>11.00</td><td>2.5&nbsp;mm, not plated</td><td>Mounting</td></tr>
    <tr><td>2</td><td>37.50</td><td>11.00</td><td>2.5&nbsp;mm, not plated</td><td>Mounting</td></tr>
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

Designed by Chris Cecil: [original design files](https://github.com/Ccecil/StepXternal/tree/4f8760bac438c3a078ac421ea79f2562bbb123f2). It was drawn for the Smoothieboard V2 Gadgeteer era; check every connection against your own controller.
See all boards on the [extension boards](/extension-boards) page.
