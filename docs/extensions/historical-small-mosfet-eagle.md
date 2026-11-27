---
layout: default
title: "Small MOSFET — original Eagle layout"
description: "Small MOSFET — original Eagle layout: single low-side DC switch, pinout, limits and configuration."
permalink: /extensions/historical-small-mosfet-eagle
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Power output</p>
    <h1 id="historical-small-mosfet-eagle">Small MOSFET — original Eagle layout</h1>
    <p class="xb-lead">A single low-side switch: a logic input turns the negative side of a DC load on and off.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/historical-small-mosfet-eagle/historical-small-mosfet-eagle-diagram.png" alt="Top view of the Small MOSFET — original Eagle layout board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>1</b><span>channel</span></div>
  <div class="xb-stat"><b>low side</b><span>switching</span></div>
  <div class="xb-stat"><b>10 Ω</b><span>gate resistor</span></div>
  <div class="xb-stat"><b>100 kΩ</b><span>gate pull-down</span></div>
  <div class="xb-stat"><b>26 × 26 mm</b><span>board size</span></div>
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
  <b>The load&rsquo;s positive side is always live, and the transistor fitted decides the limits.</b> The part is labelled IRLR024; check it and its gate drive at your logic voltage. This is a historical Smoothieboard2 design, not a current board.
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
    <tr><td>Size</td><td>26 × 26 mm</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/historical-small-mosfet-eagle/historical-small-mosfet-eagle-diagram.png" alt="Annotated top view of the Small MOSFET — original Eagle layout board">
      <a class="xb-mk xb-pl" href="#tour-1" style="left:11.6%;top:53.9%" aria-label="1: Supply terminal">1<span class="xb-pop"><b>Supply terminal</b> — Supply positive and ground.</span></a>
      <a class="xb-mk xb-pr" href="#tour-2" style="left:88.4%;top:67.3%" aria-label="2: Load terminal">2<span class="xb-pop"><b>Load terminal</b> — Switched return and supply positive.</span></a>
      <a class="xb-mk xb-pb" href="#tour-3" style="left:30.8%;top:8.4%" aria-label="3: Input JP1">3<span class="xb-pop"><b>Input JP1</b> — Ground and logic input.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:50.2%;top:66.8%" aria-label="4: Transistor">4<span class="xb-pop"><b>Transistor</b> — Labelled IRLR024.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:64.1%;top:23.9%" aria-label="5: Indicator">5<span class="xb-pop"><b>Indicator</b> — Shows the output state.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-6" style="left:88.4%;top:42.3%" aria-label="6: Flyback diode">6<span class="xb-pop"><b>Flyback diode</b> — Clamps inductive spikes.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:51.1%;top:26.6%" aria-label="7: Resistor R35">7<span class="xb-pop"><b>Resistor R35</b> — Resistor R35, marked <code>10r</code> in the board file. Connects to <code>FET-LOGIC-IN</code>.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:41.6%;top:26.6%" aria-label="8: Resistor R36">8<span class="xb-pop"><b>Resistor R36</b> — Resistor R36, marked <code>100k</code> in the board file. Connects to <code>GND</code>, <code>FET-LOGIC-IN</code>.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Supply terminal</b> — Supply positive and ground.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Load terminal</b> — Switched return and supply positive.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Input JP1</b> — Ground and logic input.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Transistor</b> — Labelled IRLR024.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Indicator</b> — Shows the output state.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Flyback diode</b> — Clamps inductive spikes.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Resistor R35</b> — Resistor R35, marked <code>10r</code> in the board file. Connects to <code>FET-LOGIC-IN</code>.</div></li>
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
    <tr><td>2</td><td><code>VCC</code></td></tr>
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
  <svg viewBox="0 0 1000 472" role="img" aria-labelledby="xb-historical-small-mosfet-eagle-wire"><title id="xb-historical-small-mosfet-eagle-wire">Wiring: controller contact GND to JP1 contact 1; controller contact 3 to JP1 contact 3.</title><image href="/images/extensions/historical-small-mosfet-eagle/historical-small-mosfet-eagle-diagram.png" x="385" y="14" width="230" height="230"/><circle cx="460" cy="43" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="441" y="62" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="460" y="76" text-anchor="middle" font-size="13" font-weight="700" fill="#111">JP1</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Prime header J37 wires</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">JP1 on this board</text><rect x="30" y="304" width="200" height="150" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="130" y="375" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Smoothieboard</text><text x="130" y="395" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">V2 Prime</text><rect x="770" y="304" width="200" height="150" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 364.0H770" fill="none" stroke="#939393" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="364" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">GND</text><text x="784" y="369" text-anchor="start" font-size="14" fill="#eaeaea">1  GND</text><rect x="400" y="353" width="200" height="22" rx="11" fill="#939393" stroke="#939393" stroke-width="1.5"/><text x="500" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#111">GND to 1: GND</text><path d="M230 394.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">3</text><text x="784" y="399" text-anchor="start" font-size="14" fill="#eaeaea">3  FET-LOGIC-IN</text><rect x="400" y="383" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">3 to 3: FET-LOGIC-IN</text></svg>
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
  <svg viewBox="0 0 1000 142" role="img" aria-labelledby="xb-historical-small-mosfet-eagle-path"><title id="xb-historical-small-mosfet-eagle-path">Input on JP1 then 10 Ω to the gate, 100 kΩ holds it off then Transistor then Load between supply positive and switched terminal.</title><rect x="20" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="127" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Input on JP1</text><text x="127" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><rect x="268" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="376" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">10 Ω to the gate</text><text x="376" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3">100 kΩ holds it off</text><path d="M238.5 70H259.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M258 63L266 70L258 77Z" fill="#5fb3ff"/><rect x="517" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="624" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Transistor</text><text x="624" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M487.0 70H508.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M506 63L515 70L506 77Z" fill="#5fb3ff"/><rect x="766" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="873" y="47" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Load between supply</text><text x="873" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">positive and switched</text><text x="873" y="83" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">terminal</text><text x="873" y="103" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M735.5 70H756.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M754 63L764 70L754 77Z" fill="#5fb3ff"/></svg>
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
    <tr><td><a href="https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/Small%20MOSFET">original Smoothieboard2 files</a></td><td>Design source</td></tr>
    <tr><td><a href="/images/extensions/historical-small-mosfet-eagle/guides/native-contact-reference/native-source-and-notices.zip">Download the unmodified source files, upstream licence and drawing notice</a></td><td>Download</td></tr>
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
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-mosfet-eagle-mount-t">
  <title id="xb-mosfet-eagle-mount-t">Mounting drawing of the historical-small-mosfet-eagle, component side: outline 26 by 26 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="310.0" y="78.0" width="340.0" height="340.0" rx="0.0" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M310.0 56H650.0"/><path d="M310.0 50V62"/><path d="M650.0 50V62"/><path d="M676.0 78.0V418.0"/><path d="M670.0 78.0h12"/><path d="M670.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">26</text>
  <text x="688.0" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">26</text>
  <circle cx="310.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="298.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M252.0 104.0h30" fill="none"/><path d="M286.0 104.0l-8 -4v8z"/><path d="M252.0 104.0v30" fill="none"/><path d="M252.0 138.0l-4 -8h8z"/></g>
  <text x="290.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="248.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="349.2" cy="117.2" r="20.9" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M324.3 117.2h49.8M349.2 92.3v49.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="328.3" y="158.2" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  3.00, 3.00</text>
  <circle cx="610.8" cy="117.2" r="20.9" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M585.8 117.2h49.8M610.8 92.3v49.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="631.7" y="158.2" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  23.00, 3.00</text>
  <circle cx="349.2" cy="378.8" r="20.9" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M324.3 378.8h49.8M349.2 353.8v49.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="328.3" y="347.8" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">3</tspan>  3.00, 23.00</text>
  <circle cx="610.8" cy="378.8" r="20.9" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M585.8 378.8h49.8M610.8 353.8v49.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="631.7" y="347.8" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">4</tspan>  23.00, 23.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 26 × 26&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>3.00</td><td>3.00</td><td>3.2&nbsp;mm, plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>23.00</td><td>3.00</td><td>3.2&nbsp;mm, plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>3.00</td><td>23.00</td><td>3.2&nbsp;mm, plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>23.00</td><td>23.00</td><td>3.2&nbsp;mm, plated</td><td>Mounting, M3 screw</td></tr>
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
  </tbody>
</table></div>
{:/nomarkdown}

Related boards, each with its own pinout and limits: [Small MOSFET — KiCad layout](/extensions/historical-small-mosfet-kicad), [Single-channel small MOSFET basic output](/extensions/single-channel-small-mosfet-basic-output).

## Design source {#origin}

This board comes from the [original design files](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/Small%20MOSFET). It was drawn for an earlier controller generation than Smoothieboard V2 Prime; match connections contact by contact.
See all boards on the [extension boards](/extension-boards) page.
