---
layout: default
title: "Large MOSFET — KiCad layout"
description: "Large MOSFET — KiCad layout: single low-side DC switch, pinout, limits and configuration."
permalink: /extensions/historical-large-mosfet-kicad
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Power output</p>
    <h1 id="historical-large-mosfet-kicad">Large MOSFET — KiCad layout</h1>
    <p class="xb-lead">A single low-side switch: a logic input turns the negative side of a DC load on and off.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/historical-large-mosfet-kicad/directory-board-render.png" alt="Top view of the Large MOSFET — KiCad layout board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>1</b><span>channel</span></div>
  <div class="xb-stat"><b>low side</b><span>switching</span></div>
  <div class="xb-stat"><b>10 Ω</b><span>gate resistor</span></div>
  <div class="xb-stat"><b>100 kΩ</b><span>gate pull-down</span></div>
  <div class="xb-stat"><b>36 × 31 mm</b><span>board size</span></div>
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
  <b>The load&rsquo;s positive side is always live, and the transistor fitted decides the limits.</b> The parts list names an IRG4BC15UD-SPBF, which is an IGBT: do not rely on the 3.3–5 V input and 12 A figures of the original notes. This is a historical Smoothieboard2 design, not a current board.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>Low-side DC load switch</td></tr>
    <tr><td>Input</td><td>JP1: ground, spare VCC contact, logic input</td></tr>
    <tr><td>Gate network</td><td>10 Ω series, 100 kΩ pull-down</td></tr>
    <tr><td>Indicator</td><td>LED7 across the output side</td></tr>
    <tr><td>Flyback diode</td><td>D11 between the switched return and supply positive</td></tr>
    <tr><td>Size</td><td>36 × 31 mm</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/historical-large-mosfet-kicad/directory-board-render.png" alt="Annotated top view of the Large MOSFET — KiCad layout board">
      <a class="xb-mk xb-pl" href="#tour-1" style="left:18.1%;top:51.4%" aria-label="1: Supply terminal">1<span class="xb-pop"><b>Supply terminal</b> — Supply positive and ground.</span></a>
      <a class="xb-mk xb-pr" href="#tour-2" style="left:81.9%;top:65.7%" aria-label="2: Load terminal">2<span class="xb-pop"><b>Load terminal</b> — Switched return and supply positive.</span></a>
      <a class="xb-mk xb-pb" href="#tour-3" style="left:48.7%;top:14.3%" aria-label="3: Input JP1">3<span class="xb-pop"><b>Input JP1</b> — Ground and logic input.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:49.5%;top:71.6%" aria-label="4: Transistor">4<span class="xb-pop"><b>Transistor</b> — Identify before use.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:65.0%;top:34.3%" aria-label="5: Indicator">5<span class="xb-pop"><b>Indicator</b> — Shows the output state.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-6" style="left:78.7%;top:37.1%" aria-label="6: Flyback diode">6<span class="xb-pop"><b>Flyback diode</b> — Clamps inductive spikes.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:55.0%;top:34.3%" aria-label="7: Resistor R35">7<span class="xb-pop"><b>Resistor R35</b> — Resistor R35, marked <code>10R</code> in the board file. Connects to <code>FET-LOGIC-IN</code>.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:50.0%;top:34.3%" aria-label="8: Resistor R36">8<span class="xb-pop"><b>Resistor R36</b> — Resistor R36, marked <code>100k</code> in the board file. Connects to <code>GND</code>, <code>FET-LOGIC-IN</code>.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Supply terminal</b> — Supply positive and ground.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Load terminal</b> — Switched return and supply positive.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Input JP1</b> — Ground and logic input.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Transistor</b> — Identify before use.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Indicator</b> — Shows the output state.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Flyback diode</b> — Clamps inductive spikes.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Resistor R35</b> — Resistor R35, marked <code>10R</code> in the board file. Connects to <code>FET-LOGIC-IN</code>.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Resistor R36</b> — Resistor R36, marked <code>100k</code> in the board file. Connects to <code>GND</code>, <code>FET-LOGIC-IN</code>.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

<span id="connect-and-try-it"></span>

### Input JP1

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>JP1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>GND</code></td></tr>
    <tr><td>2</td><td>not connected</td></tr>
    <tr><td>3</td><td><code>FET-LOGIC-IN</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Supply terminal JP2

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>JP2 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>HEATERVIN</code></td></tr>
    <tr><td>2</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Load terminal JP3

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>JP3 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>E1-CONTROL</code></td></tr>
    <tr><td>2</td><td><code>HEATERVIN</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>MOSFET board</b><span>Built from the design files</span></div>
  <div class="xb-card"><b>DC supply and load</b><span>Within checked limits</span></div>
  <div class="xb-card"><b>Fuse</b><span>Sized for the wiring</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

A first test on Smoothieboard V2 Prime with a small load or none, after identifying the fitted transistor.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 472" role="img" aria-labelledby="xb-historical-large-mosfet-kicad-wire"><title id="xb-historical-large-mosfet-kicad-wire">Wiring: controller contact GND to JP1 contact 1; controller contact 3 to JP1 contact 3.</title><image href="/images/extensions/historical-large-mosfet-kicad/directory-board-render.png" x="369" y="14" width="262" height="230"/><circle cx="497" cy="47" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="478" y="66" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="497" y="80" text-anchor="middle" font-size="13" font-weight="700" fill="#111">JP1</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Prime header J37 wires</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">JP1 on this board</text><rect x="30" y="304" width="200" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="130" y="375" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Smoothieboard</text><text x="130" y="395" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">V2 Prime</text><rect x="770" y="304" width="200" height="150" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 364.0H770" fill="none" stroke="#8b949e" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="364" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">GND</text><text x="784" y="369" text-anchor="start" font-size="14" fill="#e6ebf2">1  GND</text><rect x="400" y="353" width="200" height="22" rx="11" fill="#8b949e" stroke="#8b949e" stroke-width="1.5"/><text x="500" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#111">GND to 1: GND</text><path d="M230 394.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">3</text><text x="784" y="399" text-anchor="start" font-size="14" fill="#e6ebf2">3  FET-LOGIC-IN</text><rect x="400" y="383" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">3 to 3: FET-LOGIC-IN</text></svg>
  </div>
  <figcaption>Identify the fitted transistor first; add the fused supply and a small load with power off. D11 clamps inductive spikes.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Identify the transistor</h3>
    <p>Read the part fitted and compare its gate threshold with a 3.3 V logic signal.</p>
  </li>
  <li class="xb-step">
    <h3>Wire it</h3>
    <p>With power off connect controller ground to JP1 contact 1 and PB1 (J37 contact 3) to JP1 contact 3, then the fused supply and a small load.</p>
  </li>
  <li class="xb-step">
    <h3>Configure and switch</h3>
    <p>Add the entry from <a href="#configuration">Configuration</a>, restart, send <code>M106.9</code> then <code>M107.9</code>.</p>
    <p class="xb-expect">The load and LED switch on, then off.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

<span id="smoothieware-use"></span>

See [switch](/switch). Syntax checked against firmware commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`.

```ini
[switch]
board_test.enable = true
board_test.input_on_command = M106
board_test.input_off_command = M107
board_test.subcode = 9
board_test.output_pin = PB1
board_test.output_type = digital
board_test.startup_state = false
board_test.halt_set_to = false
```

## How it works {#how-it-works}

The input drives the transistor gate through 10 Ω, and 100 kΩ holds it off when nothing drives it. The load connects between supply positive and the switched terminal; D11 clamps the voltage spike of an inductive load when it is switched off.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 142" role="img" aria-labelledby="xb-historical-large-mosfet-kicad-path"><title id="xb-historical-large-mosfet-kicad-path">Input on JP1 then 10 Ω to the gate, 100 kΩ holds it off then Transistor then Load between supply positive and switched terminal.</title><rect x="20" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="127" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Input on JP1</text><text x="127" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="268" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="376" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">10 Ω to the gate</text><text x="376" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2">100 kΩ holds it off</text><path d="M238.5 70H259.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M258 63L266 70L258 77Z" fill="#5fb3ff"/><rect x="517" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="624" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Transistor</text><text x="624" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M487.0 70H508.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M506 63L515 70L506 77Z" fill="#5fb3ff"/><rect x="766" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="873" y="47" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Load between supply</text><text x="873" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">positive and switched</text><text x="873" y="83" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">terminal</text><text x="873" y="103" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M735.5 70H756.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M754 63L764 70L754 77Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Load never turns on</td><td>Check the supply, the common ground with the controller and that the input reaches the gate threshold.</td></tr>
    <tr><td>Load always on</td><td>Check for a shorted transistor and for load wiring directly to ground.</td></tr>
    <tr><td>Transistor runs hot</td><td>The gate voltage or the cooling is insufficient for the current. Stop and check.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/Large%20MOSFET_kicad">original Smoothieboard2 source</a></td><td>Design source</td></tr>
    <tr><td><a href="/images/extensions/historical-large-mosfet-kicad/guides/native-contact-reference/native-source-and-notices.zip">Source files, licence and drawing notice</a></td><td>Download</td></tr>
    <tr><td><a href="https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/switch/Switch.cpp">V2 Switch parser</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/switch/Switch.cpp#L115-L438">V2 digital-switch parser and command implementation</a></td><td>Design source</td></tr>
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
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-mosfet-kicad-mount-t">
  <title id="xb-mosfet-kicad-mount-t">Mounting drawing of the historical-large-mosfet-kicad, component side: outline 36 by 31 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="282.6" y="78.0" width="394.8" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M282.6 56H677.4"/><path d="M282.6 50V62"/><path d="M677.4 50V62"/><path d="M703.4 78.0V418.0"/><path d="M697.4 78.0h12"/><path d="M697.4 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">36</text>
  <text x="715.4" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">31</text>
  <circle cx="282.6" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="270.6" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M224.6 104.0h30" fill="none"/><path d="M258.6 104.0l-8 -4v8z"/><path d="M224.6 104.0v30" fill="none"/><path d="M224.6 138.0l-4 -8h8z"/></g>
  <text x="262.6" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="220.6" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="315.5" cy="110.9" r="17.5" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M293.9 110.9h43.1M315.5 89.4v43.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="297.9" y="148.5" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  3.00, 3.00</text>
  <circle cx="644.5" cy="110.9" r="17.5" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M623.0 110.9h43.1M644.5 89.4v43.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="662.1" y="148.5" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  33.00, 3.00</text>
  <circle cx="315.5" cy="385.1" r="17.5" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M293.9 385.1h43.1M315.5 363.5v43.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="297.9" y="357.5" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  3.00, 28.00</text>
  <circle cx="644.5" cy="385.1" r="17.5" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M623.0 385.1h43.1M644.5 363.5v43.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="662.1" y="357.5" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  33.00, 28.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 36 × 31&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>3.00</td><td>3.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>33.00</td><td>3.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>3.00</td><td>28.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>33.00</td><td>28.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Only what the design source states or the circuit fixes. Blank cells are not specified.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Gate series resistor</td><td>Input</td><td>—</td><td>10 Ω</td><td>—</td><td>Design file value</td></tr>
    <tr><td>Gate pull-down</td><td>Input</td><td>—</td><td>100 kΩ</td><td>—</td><td>Design file value</td></tr>
    <tr><td>Supply and current</td><td>Original notes</td><td>12 V</td><td>—</td><td>24 V, 12 A</td><td>Author figures, not verified</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Related boards, each with its own pinout and limits: [Large MOSFET — original Eagle layout](/extensions/historical-large-mosfet-eagle), [Single-Channel Large Mosfet output](/extensions/single-channel-large-mosfet-output).

## Design source {#origin}

This board comes from the [original design files](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/Large%20MOSFET_kicad). It was drawn for an earlier controller generation than Smoothieboard V2 Prime; match connections contact by contact.
See all boards on the [extension boards](/extension-boards) page.
