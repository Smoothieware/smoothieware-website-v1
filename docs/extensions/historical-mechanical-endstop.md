---
layout: default
title: "Mechanical endstop"
description: "Three-wire microswitch endstop module with LED and filter: wiring and configuration."
permalink: /extensions/historical-mechanical-endstop
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Inputs</p>
    <h1 id="historical-mechanical-endstop">Mechanical endstop</h1>
    <p class="xb-lead">A microswitch on a small board with an indicator LED, a pull-up and a filter capacitor.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/historical-mechanical-endstop/historical-mechanical-endstop-diagram.png" alt="Top view of the Mechanical endstop board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>3</b><span>wires</span></div>
  <div class="xb-stat"><b>SPDT</b><span>microswitch</span></div>
  <div class="xb-stat"><b>1</b><span>LED</span></div>
  <div class="xb-stat"><b>100 nF</b><span>filter</span></div>
  <div class="xb-stat"><b>40 × 16 mm</b><span>board size</span></div>
  <div class="xb-stat"><b>2</b><span>mounting holes</span></div>
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
  <b>Check the switch and your controller before using it for homing.</b> The parts list names an Omron D2F-L-A: confirm it works at this small signal current, and that the signal voltage suits your input. This is a historical Smoothieboard2 design, not a current board.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>Powered limit switch</td></tr>
    <tr><td>Connector</td><td>P1: VCC, ground, ~SIG</td></tr>
    <tr><td>Switch</td><td>SW1: signal to ground (NO) or VCC (NC)</td></tr>
    <tr><td>Pull-up</td><td>R2, 10 kΩ</td></tr>
    <tr><td>LED resistor</td><td>R1, 1 kΩ</td></tr>
    <tr><td>Size</td><td>40 × 16 mm</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/historical-mechanical-endstop/historical-mechanical-endstop-diagram.png" alt="Annotated top view of the Mechanical endstop board">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:66.2%;top:31.3%" aria-label="1: Microswitch">1<span class="xb-pop"><b>Microswitch</b> — The sensing element.</span></a>
      <a class="xb-mk" href="#tour-2" style="left:32.4%;top:50.0%" aria-label="2: Connector P1">2<span class="xb-pop"><b>Connector P1</b> — Three wires.</span></a>
      <a class="xb-mk xb-pr" href="#tour-3" style="left:91.2%;top:68.7%" aria-label="3: Indicator LED">3<span class="xb-pop"><b>Indicator LED</b> — Follows the signal.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:42.4%;top:18.8%" aria-label="4: Mounting hole">4<span class="xb-pop"><b>Mounting hole</b> — M3.</span></a>
      <a class="xb-mk xb-pr" href="#tour-5" style="left:91.2%;top:53.2%" aria-label="5: Resistor R1">5<span class="xb-pop"><b>Resistor R1</b> — Resistor R1, marked <code>1k</code> in the board file. Connects to <code>VCC</code>.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:47.6%;top:56.2%" aria-label="6: Resistor R2">6<span class="xb-pop"><b>Resistor R2</b> — Resistor R2, marked <code>10k</code> in the board file. Connects to <code>VCC</code>, <code>~SIG</code>.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:42.4%;top:56.2%" aria-label="7: Capacitor C1">7<span class="xb-pop"><b>Capacitor C1</b> — Capacitor C1, marked <code>100n</code> in the board file. Connects to <code>~SIG</code>, <code>GND</code>.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-8" style="left:88.1%;top:18.8%" aria-label="8: Second mounting hole">8<span class="xb-pop"><b>Second mounting hole</b> — M3.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Microswitch</b> — The sensing element.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Connector P1</b> — Three wires.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Indicator LED</b> — Follows the signal.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Mounting hole</b> — M3.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Resistor R1</b> — Resistor R1, marked <code>1k</code> in the board file. Connects to <code>VCC</code>.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Resistor R2</b> — Resistor R2, marked <code>10k</code> in the board file. Connects to <code>VCC</code>, <code>~SIG</code>.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Capacitor C1</b> — Capacitor C1, marked <code>100n</code> in the board file. Connects to <code>~SIG</code>, <code>GND</code>.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Second mounting hole</b> — M3.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

### Lights {#lights}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th>Lit means</th><th>Disable it</th></tr></thead>
  <tbody>
    <tr><td>D1</td><td>The signal is low (the LED sits between VCC and the signal)</td><td>Not specified</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Pinout {#pinout}

<span id="connect-and-try-it"></span>

### Connector P1

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>P1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>VCC</code></td></tr>
    <tr><td>2</td><td><code>GND</code></td></tr>
    <tr><td>3</td><td><code>~SIG</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Switch SW1

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>SW1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>~SIG</code></td></tr>
    <tr><td>2</td><td><code>GND</code></td></tr>
    <tr><td>3</td><td><code>VCC</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Endstop board</b><span>Built from the design files</span></div>
  <div class="xb-card"><b>Three leads</b><span>Supply, ground, signal</span></div>
  <div class="xb-card"><b>3.3 V supply</b><span>From the controller</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

A bench test on Smoothieboard V2 Prime with machine loads disabled.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 472" role="img" aria-labelledby="xb-historical-mechanical-endstop-wire"><title id="xb-historical-mechanical-endstop-wire">Wiring: controller contact 1 to P1 contact 1; controller contact 10 to P1 contact 2; controller contact 3 to P1 contact 3.</title><image href="/images/extensions/historical-mechanical-endstop/historical-mechanical-endstop-diagram.png" x="252" y="14" width="495" height="230"/><circle cx="422" cy="129" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="403" y="148" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="422" y="162" text-anchor="middle" font-size="13" font-weight="700" fill="#111">P1</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Prime header J37</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">P1 on this board</text><rect x="30" y="304" width="200" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="130" y="375" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Smoothieboard</text><text x="130" y="395" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">V2 Prime</text><rect x="770" y="304" width="200" height="150" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 349.0H770" fill="none" stroke="#f2d024" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="349" r="5" fill="#f2d024" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="349" r="5" fill="#f2d024" stroke="#fff" stroke-width="1.5"/><text x="216" y="354" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">1</text><text x="784" y="354" text-anchor="start" font-size="14" fill="#e6ebf2">1  VCC</text><rect x="400" y="338" width="200" height="22" rx="11" fill="#f2d024" stroke="#f2d024" stroke-width="1.5"/><text x="500" y="354" text-anchor="middle" font-size="13" font-weight="700" fill="#111">1 to 1: VCC</text><path d="M230 379.0H770" fill="none" stroke="#8b949e" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="379" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="379" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><text x="216" y="384" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">10</text><text x="784" y="384" text-anchor="start" font-size="14" fill="#e6ebf2">2  GND</text><rect x="400" y="368" width="200" height="22" rx="11" fill="#8b949e" stroke="#8b949e" stroke-width="1.5"/><text x="500" y="384" text-anchor="middle" font-size="13" font-weight="700" fill="#111">10 to 2: GND</text><path d="M230 409.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="409" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="409" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="414" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">3</text><text x="784" y="414" text-anchor="start" font-size="14" fill="#e6ebf2">3  ~SIG</text><rect x="400" y="398" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="414" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">3 to 3: ~SIG</text></svg>
  </div>
  <figcaption>Wiring for this procedure. Yellow rings mark the connectors used. Make and change connections with the power off.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Wire three leads</h3>
    <p>With power off connect J37 contact 1 (3.3 V) to P1.1, contact 10 to P1.2 and contact 3 (PB1) to P1.3.</p>
  </li>
  <li class="xb-step">
    <h3>Configure</h3>
    <p>Add the entry from <a href="#configuration">Configuration</a> and restart.</p>
  </li>
  <li class="xb-step">
    <h3>Press the switch</h3>
    <p>Read the endstop state with <code>M119</code> before and while pressing.</p>
    <p class="xb-expect">The reading changes.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

<span id="smoothieware-use"></span>

A mechanical contact read as an input that does not limit motion. See [endstops](/endstops). Syntax checked against firmware commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`.

```ini
[endstops]
extension_test.enable = true
extension_test.pin = PB1!v
extension_test.axis = X
extension_test.homing_direction = none
extension_test.limit_enable = false
```

## How it works {#how-it-works}

The switch connects the signal to ground or to VCC depending on its position, with a 10 kΩ pull-up and a 100 nF capacitor on the signal. Because the pull-up is on the board, a firmware pull-down does not remove it.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 142" role="img" aria-labelledby="xb-historical-mechanical-endstop-path"><title id="xb-historical-mechanical-endstop-path">Switch position then Signal to ground or VCC then 10 kΩ pull-up and 100 nF capacitor then Controller input.</title><rect x="20" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="127" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Switch position</text><text x="127" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="268" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="376" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Signal to ground or VCC</text><text x="376" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M238.5 70H259.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M258 63L266 70L258 77Z" fill="#5fb3ff"/><rect x="517" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="624" y="56" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">10 kΩ pull-up and 100</text><text x="624" y="74" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">nF capacitor</text><text x="624" y="94" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M487.0 70H508.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M506 63L515 70L506 77Z" fill="#5fb3ff"/><rect x="766" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="873" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Controller input</text><text x="873" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M735.5 70H756.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M754 63L764 70L754 77Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Nothing responds</td><td>With power off, check continuity along each lead and board path against the pinout tables. Confirm which end of the connector is contact 1.</td></tr>
    <tr><td>Reading never changes</td><td>Check supply, the three wires and the switch contacts.</td></tr>
    <tr><td>Reading is inverted</td><td>Add or remove <code>!</code> on the pin.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/MechEndstop">Smoothieboard2 design source</a></td><td>Design source</td></tr>
    <tr><td><a href="/images/extensions/historical-mechanical-endstop/guides/native-contact-reference/native-source-and-notices.zip">Matching native source, licence and drawing notice</a></td><td>Download</td></tr>
    <tr><td><a href="https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/endstops/Endstops.cpp#L130-L200">Endstops parser</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/endstops/Endstops.cpp#L1013-L1030">M119 handler</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/Hal/src/Pin.cpp#L289-L309">Pin state formatter</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Smoothieware/Smoothieboard2/blob/52ab340de33180a975b25f856c161993488e6ace/LICENSE">CERN Open Hardware Licence v1.2</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Smoothieware/Smoothieboard2/blob/52ab340de33180a975b25f856c161993488e6ace/README.md">README</a></td><td>Design source</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

Outline and holes from the original board file. Millimetres, seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 380" role="img" aria-labelledby="xb-ical-endstop-mount-t">
  <title id="xb-ical-endstop-mount-t">Mounting drawing of the historical-mechanical-endstop, component side: outline 40 by 16 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="180.0" y="78.0" width="600.0" height="240.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M180.0 56H780.0"/><path d="M180.0 50V62"/><path d="M780.0 50V62"/><path d="M806.0 78.0V318.0"/><path d="M800.0 78.0h12"/><path d="M800.0 318.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">40</text>
  <text x="818.0" y="203.0" font-size="15" font-weight="700" fill="#e6ebf2">16</text>
  <circle cx="180.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="168.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M122.0 104.0h30" fill="none"/><path d="M156.0 104.0l-8 -4v8z"/><path d="M122.0 104.0v30" fill="none"/><path d="M122.0 138.0l-4 -8h8z"/></g>
  <text x="160.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="118.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="435.0" cy="123.0" r="24.0" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M407.0 123.0h56.0M435.0 95.0v56.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="411.0" y="167.0" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  17.00, 3.00</text>
  <circle cx="720.0" cy="123.0" r="24.0" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M692.0 123.0h56.0M720.0 95.0v56.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="744.0" y="167.0" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  36.00, 3.00</text>
  <text x="480.0" y="348.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 40 × 16&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>17.00</td><td>3.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>36.00</td><td>3.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Only what the design source states or the circuit fixes. Blank cells are not specified.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Signal pull-up</td><td>~SIG</td><td>—</td><td>10 kΩ</td><td>—</td><td>Design file value</td></tr>
    <tr><td>Filter capacitor</td><td>~SIG</td><td>—</td><td>100 nF</td><td>—</td><td>Design file value</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Related boards, each with its own pinout and limits: [Mechanical endstop breakout](/extensions/mechanical-endstop-breakout).

## Design source {#origin}

This board comes from the [original design files](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/MechEndstop). It was drawn for an earlier controller generation than Smoothieboard V2 Prime; match connections contact by contact.
See all boards on the [extension boards](/extension-boards) page.
