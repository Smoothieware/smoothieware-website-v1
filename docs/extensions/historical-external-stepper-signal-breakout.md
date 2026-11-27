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
    <img src="/images/extensions/historical-external-stepper-signal-breakout/historical-external-stepper-signal-breakout-diagram.png" alt="Top view of the External STEP/DIR signal breakout board">
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
      <img src="/images/extensions/historical-external-stepper-signal-breakout/historical-external-stepper-signal-breakout-diagram.png" alt="Annotated top view of the External STEP/DIR signal breakout board">
      <a class="xb-mk" href="#tour-1" style="left:50.0%;top:72.0%" aria-label="1: Host header J1">1<span class="xb-pop"><b>Host header J1</b> — All signals arrive here.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-2" style="left:96.2%;top:20.7%" aria-label="2: Output 1">2<span class="xb-pop"><b>Output 1</b> — STEP1 and DIR1.</span></a>
      <a class="xb-mk xb-pb" href="#tour-3" style="left:62.7%;top:20.7%" aria-label="3: Output 2">3<span class="xb-pop"><b>Output 2</b> — STEP2 and DIR2.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:29.2%;top:20.7%" aria-label="4: Output 3">4<span class="xb-pop"><b>Output 3</b> — STEP3 and DIR3.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:56.3%;top:57%" aria-label="5: 3.3 V input">5<span class="xb-pop"><b>3.3 V input</b> — J1 contact 1, <code>+3V3</code>.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:56.3%;top:86%" aria-label="6: 5 V input">6<span class="xb-pop"><b>5 V input</b> — J1 contact 2, <code>+5V</code>.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:43.5%;top:86%" aria-label="7: Ground input">7<span class="xb-pop"><b>Ground input</b> — J1 contact 10, <code>GND</code>.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:43.7%;top:20.7%" aria-label="8: Enable output">8<span class="xb-pop"><b>Enable output</b> — Contact 4 of output 2, <code>EN</code>; the same signal reaches contact 4 of all three outputs.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host header J1</b> — All signals arrive here.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Output 1</b> — STEP1 and DIR1.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Output 2</b> — STEP2 and DIR2.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Output 3</b> — STEP3 and DIR3.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>3.3 V input</b> — J1 contact 1, <code>+3V3</code>.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>5 V input</b> — J1 contact 2, <code>+5V</code>.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Ground input</b> — J1 contact 10, <code>GND</code>.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Enable output</b> — Contact 4 of output 2, <code>EN</code>; the same signal reaches contact 4 of all three outputs.</div></li>
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
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 666" role="img" aria-labelledby="xb-historical-external-stepper-signal-breakout-wire"><title id="xb-historical-external-stepper-signal-breakout-wire">Wiring: controller contact 3 to J1 contact 3; controller contact 4 to J1 contact 4; controller contact 9 to J1 contact 9; controller contact 10 to J1 contact 10; J2 contact 2 to STEP input; J2 contact 3 to DIR input; J2 contact 4 to ENABLE input; J2 contact 5 to logic ground.</title><image href="/images/extensions/historical-external-stepper-signal-breakout/historical-external-stepper-signal-breakout-diagram.png" x="240" y="14" width="521" height="230"/><circle cx="500" cy="168" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="481" y="187" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="500" y="201" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J1</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Prime header J37</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J1 on this board</text><rect x="30" y="304" width="200" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="130" y="375" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Smoothieboard</text><text x="130" y="395" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">V2 Prime</text><rect x="770" y="304" width="200" height="150" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 334.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="334" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="334" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="339" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">3</text><text x="784" y="339" text-anchor="start" font-size="14" fill="#e6ebf2">3  DIR1</text><rect x="400" y="323" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="339" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">3 to 3: DIR1</text><path d="M230 364.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">4</text><text x="784" y="369" text-anchor="start" font-size="14" fill="#e6ebf2">4  STP1</text><rect x="400" y="353" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">4 to 4: STP1</text><path d="M230 394.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">9</text><text x="784" y="399" text-anchor="start" font-size="14" fill="#e6ebf2">9  EN</text><rect x="400" y="383" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">9 to 9: EN</text><path d="M230 424.0H770" fill="none" stroke="#8b949e" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="424" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="424" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><text x="216" y="429" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">10</text><text x="784" y="429" text-anchor="start" font-size="14" fill="#e6ebf2">10  GND</text><rect x="400" y="413" width="200" height="22" rx="11" fill="#8b949e" stroke="#8b949e" stroke-width="1.5"/><text x="500" y="429" text-anchor="middle" font-size="13" font-weight="700" fill="#111">10 to 10: GND</text><text x="130" y="486" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J2 on this board</text><text x="870" y="486" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">External stepper drive</text><rect x="700" y="498" width="270" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><rect x="815" y="515" width="130" height="116" rx="8" fill="#30343a" stroke="#9aa2ad" stroke-width="1.5"/><rect x="825" y="523" width="8" height="48" rx="2" fill="#565c65" stroke="#565c65" stroke-width="1.5"/><rect x="841" y="523" width="8" height="48" rx="2" fill="#565c65" stroke="#565c65" stroke-width="1.5"/><rect x="857" y="523" width="8" height="48" rx="2" fill="#565c65" stroke="#565c65" stroke-width="1.5"/><rect x="873" y="523" width="8" height="48" rx="2" fill="#565c65" stroke="#565c65" stroke-width="1.5"/><rect x="889" y="523" width="8" height="48" rx="2" fill="#565c65" stroke="#565c65" stroke-width="1.5"/><rect x="905" y="523" width="8" height="48" rx="2" fill="#565c65" stroke="#565c65" stroke-width="1.5"/><rect x="921" y="523" width="8" height="48" rx="2" fill="#565c65" stroke="#565c65" stroke-width="1.5"/><rect x="828" y="587" width="104" height="32" rx="3" fill="#2f9e57" stroke="#1c6a39" stroke-width="1.5"/><circle cx="844" cy="603" r="7" fill="#c4cad3" stroke="#0d0f12" stroke-width="1.5"/><circle cx="868" cy="603" r="7" fill="#c4cad3" stroke="#0d0f12" stroke-width="1.5"/><circle cx="892" cy="603" r="7" fill="#c4cad3" stroke="#0d0f12" stroke-width="1.5"/><circle cx="916" cy="603" r="7" fill="#c4cad3" stroke="#0d0f12" stroke-width="1.5"/><rect x="30" y="498" width="200" height="150" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 528.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="528" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="528" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="533" text-anchor="end" font-size="14" fill="#e6ebf2">STP1  2</text><text x="712" y="533" text-anchor="start" font-size="13" fill="#e6ebf2">STEP input</text><rect x="340" y="517" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="533" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">2: STEP input</text><path d="M230 558.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="558" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="558" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="563" text-anchor="end" font-size="14" fill="#e6ebf2">DIR1  3</text><text x="712" y="563" text-anchor="start" font-size="13" fill="#e6ebf2">DIR input</text><rect x="340" y="547" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="563" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">3: DIR input</text><path d="M230 588.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="588" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="588" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="593" text-anchor="end" font-size="14" fill="#e6ebf2">EN  4</text><text x="712" y="593" text-anchor="start" font-size="13" fill="#e6ebf2">ENABLE input</text><rect x="340" y="577" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="593" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">4: ENABLE input</text><path d="M230 618.0H700" fill="none" stroke="#8b949e" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="618" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="618" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><text x="216" y="623" text-anchor="end" font-size="14" fill="#e6ebf2">GND  5</text><text x="712" y="623" text-anchor="start" font-size="13" fill="#e6ebf2">logic ground</text><rect x="340" y="607" width="220" height="22" rx="11" fill="#8b949e" stroke="#8b949e" stroke-width="1.5"/><text x="450" y="623" text-anchor="middle" font-size="13" font-weight="700" fill="#111">5: logic ground</text></svg>
  </div>
  <figcaption>Wiring for this procedure. Yellow rings mark the connectors used. Make and change connections with the power off. Equipment is drawn as a typical unit, not a specific model.</figcaption>
</figure>
{:/nomarkdown}

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

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 270" role="img" aria-labelledby="xb-historical-external-stepper-signal-breakout-path"><title id="xb-historical-external-stepper-signal-breakout-path">Controller pins, STEP, DIR and ENABLE on J1 then Straight copper tracks, no active parts, no level shifting then J2, J3, J4, one connector per drive, ENABLE shared. Host 3.3 V or 5 V, J1 contacts 1 and 2 then Selector JP1, picks one rail then +V, contact 1 of J2 to J4.</title><rect x="46" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="186" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Controller pins</text><text x="186" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2">STEP, DIR and ENABLE on J1</text><rect x="360" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Straight copper tracks</text><text x="500" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2">no active parts, no level shifting</text><path d="M330.0 70H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 63L358 70L349 77Z" fill="#5fb3ff"/><rect x="674" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="814" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">J2, J3, J4</text><text x="814" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2">one connector per drive, ENABLE shared</text><path d="M644.0 70H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 63L672 70L663 77Z" fill="#5fb3ff"/><rect x="46" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="186" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Host 3.3 V or 5 V</text><text x="186" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2">J1 contacts 1 and 2</text><rect x="360" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="500" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Selector JP1</text><text x="500" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2">picks one rail</text><path d="M330.0 198H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 191L358 198L349 205Z" fill="#5fb3ff"/><rect x="674" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="814" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">+V</text><text x="814" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2">contact 1 of J2 to J4</text><path d="M644.0 198H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 191L672 198L663 205Z" fill="#5fb3ff"/></svg>
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
