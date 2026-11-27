---
layout: default
title: "ExtraEndstops"
description: "Seven filtered, indicated three-wire endstop inputs: pinout, jumpers and configuration."
permalink: /extensions/historical-extraendstops
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Inputs</p>
    <h1 id="historical-extraendstops">ExtraEndstops</h1>
    <p class="xb-lead">Turns a ten-contact header into seven powered three-wire endstop inputs, each with a filter and an LED.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/historical-extraendstops/directory-board-render.png" alt="Top view of the ExtraEndstops board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>7</b><span>inputs</span></div>
  <div class="xb-stat"><b>7</b><span>LEDs</span></div>
  <div class="xb-stat"><b>100 nF</b><span>filter per input</span></div>
  <div class="xb-stat"><b>3.3/5 V</b><span>selectable</span></div>
  <div class="xb-stat"><b>77 × 27 mm</b><span>board size</span></div>
  <div class="xb-stat"><b>4</b><span>mounting holes</span></div>
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
  <b>Set JP1 before wiring switches, and never bridge all three of its pads.</b> It selects 3.3 V or 5 V for the switch connectors. This is a historical Smoothieboard2 design, not a current board.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>Seven endstop inputs with filter and indicator</td></tr>
    <tr><td>Host headers</td><td>P1, P2 (same contacts)</td></tr>
    <tr><td>Inputs</td><td>P3–P9: +V, ground, signal</td></tr>
    <tr><td>Voltage selector</td><td>JP1: pads 1–2 give 3.3 V, pads 2–3 give 5 V</td></tr>
    <tr><td>Channel jumpers</td><td>JP2–JP8 connect each channel to host P3–P9</td></tr>
    <tr><td>Size</td><td>77 × 27 mm</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/historical-extraendstops/directory-board-render.png" alt="Annotated top view of the ExtraEndstops board">
      <a class="xb-mk xb-pl" href="#tour-1" style="left:10.3%;top:50.0%" aria-label="1: Host header P1">1<span class="xb-pop"><b>Host header P1</b> — Supplies, seven signals, ground.</span></a>
      <a class="xb-mk xb-pr" href="#tour-2" style="left:89.7%;top:50.0%" aria-label="2: Host header P2">2<span class="xb-pop"><b>Host header P2</b> — Same contacts, for continuing the chain.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-3" style="left:18.4%;top:21.8%" aria-label="3: Input connectors">3<span class="xb-pop"><b>Input connectors</b> — P3 to P9, one per channel.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-4" style="left:18.4%;top:43.0%" aria-label="4: Indicator LEDs">4<span class="xb-pop"><b>Indicator LEDs</b> — One per input.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:45.9%;top:76.8%" aria-label="5: Voltage selector">5<span class="xb-pop"><b>Voltage selector</b> — 3.3 V or 5 V on the +V contacts.</span></a>
      <a class="xb-mk xb-pl" href="#tour-6" style="left:18.7%;top:64.1%" aria-label="6: Channel jumpers">6<span class="xb-pop"><b>Channel jumpers</b> — Connect each channel to the host.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:27.2%;top:64.1%" aria-label="7: Header or jumper JP3">7<span class="xb-pop"><b>Header or jumper JP3</b> — Header or jumper JP3, marked <code>Bridge</code> in the board file. Connects to <code>P4</code>.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:29.0%;top:43.0%" aria-label="8: LED D3">8<span class="xb-pop"><b>LED D3</b> — LED D3, marked <code>LED</code> in the board file.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host header P1</b> — Supplies, seven signals, ground.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Host header P2</b> — Same contacts, for continuing the chain.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Input connectors</b> — P3 to P9, one per channel.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Indicator LEDs</b> — One per input.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Voltage selector</b> — 3.3 V or 5 V on the +V contacts.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Channel jumpers</b> — Connect each channel to the host.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Header or jumper JP3</b> — Header or jumper JP3, marked <code>Bridge</code> in the board file. Connects to <code>P4</code>.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>LED D3</b> — LED D3, marked <code>LED</code> in the board file.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

<span id="connect-and-try-it"></span>

### Host headers P1 and P2

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>P1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+3V3</code></td></tr>
    <tr><td>2</td><td><code>+5V</code></td></tr>
    <tr><td>3</td><td><code>P3</code></td></tr>
    <tr><td>4</td><td><code>P4</code></td></tr>
    <tr><td>5</td><td><code>P5</code></td></tr>
    <tr><td>6</td><td><code>P6</code></td></tr>
    <tr><td>7</td><td><code>P7</code></td></tr>
    <tr><td>8</td><td><code>P8</code></td></tr>
    <tr><td>9</td><td><code>P9</code></td></tr>
    <tr><td>10</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Voltage selector JP1

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>JP1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+3V3</code></td></tr>
    <tr><td>2</td><td><code>+V</code></td></tr>
    <tr><td>3</td><td><code>+5V</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

P3–P9 each have contact 1 +V, contact 2 ground, contact 3 signal; P3 is channel 1 and P9 channel 7.

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>ExtraEndstops board</b><span>Built from the design files</span></div>
  <div class="xb-card"><b>Switches</b><span>Mechanical or compatible sensors</span></div>
  <div class="xb-card"><b>Soldering iron</b><span>For the jumpers</span></div>
</div>
{:/nomarkdown}

## Configuration {#configuration}

<span id="smoothieware-use"></span>

A mechanical contact read as an input that does not limit motion. See [endstops](/endstops). Syntax checked against firmware commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`.

```ini
[endstops]
extra_input1_diagnostic.enable = true
extra_input1_diagnostic.pin = PB1-
extra_input1_diagnostic.axis = X
extra_input1_diagnostic.homing_direction = none
extra_input1_diagnostic.limit_enable = false
```

## How it works {#how-it-works}

Each input has a diode, LED, resistors and a 100 nF capacitor between the switch connector and its channel jumper. Bridging the jumper connects the channel to the matching host contact.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 142" role="img" aria-labelledby="xb-historical-extraendstops-path"><title id="xb-historical-extraendstops-path">Switch connector then Diode, LED, resistors, 100 nF capacitor then Channel jumper, bridged to connect then Host contact.</title><rect x="20" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="127" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Switch connector</text><text x="127" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="268" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="376" y="56" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Diode, LED, resistors,</text><text x="376" y="74" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">100 nF capacitor</text><text x="376" y="94" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M238.5 70H259.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M258 63L266 70L258 77Z" fill="#5fb3ff"/><rect x="517" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="624" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Channel jumper</text><text x="624" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2">bridged to connect</text><path d="M487.0 70H508.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M506 63L515 70L506 77Z" fill="#5fb3ff"/><rect x="766" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="873" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Host contact</text><text x="873" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M735.5 70H756.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M754 63L764 70L754 77Z" fill="#5fb3ff"/></svg>
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
    <tr><td>One input never reaches the host</td><td>Its channel jumper (JP2–JP8) is open.</td></tr>
    <tr><td>No power on the switch connectors</td><td>JP1 is open.</td></tr>
    <tr><td>Halted at startup</td><td>The button is held, wired normally closed, or on the wrong contacts. Turn power off and recheck.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/ExtraEndstops">Smoothieboard2 design source</a></td><td>Design source</td></tr>
    <tr><td><a href="/images/extensions/historical-extraendstops/guides/native-contact-reference/native-source-and-notices.zip">Download the design source, upstream licence and drawing notice</a></td><td>Download</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

Outline and holes from the original board file. Millimetres, seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 350" role="img" aria-labelledby="xb-xtraendstops-mount-t">
  <title id="xb-xtraendstops-mount-t">Mounting drawing of the historical-extraendstops, component side: outline 77 by 27 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="180.0" y="78.0" width="600.0" height="210.4" rx="27.3" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M180.0 56H780.0"/><path d="M180.0 50V62"/><path d="M780.0 50V62"/><path d="M806.0 78.0V288.4"/><path d="M800.0 78.0h12"/><path d="M800.0 288.4h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">77</text>
  <text x="818.0" y="188.2" font-size="15" font-weight="700" fill="#e6ebf2">27</text>
  <circle cx="180.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="168.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M122.0 104.0h30" fill="none"/><path d="M156.0 104.0l-8 -4v8z"/><path d="M122.0 104.0v30" fill="none"/><path d="M122.0 138.0l-4 -8h8z"/></g>
  <text x="160.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="118.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="207.3" cy="105.3" r="12.5" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M190.8 105.3h32.9M207.3 88.8v32.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="194.8" y="137.7" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  3.50, 3.50</text>
  <circle cx="752.7" cy="105.3" r="12.5" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M736.3 105.3h32.9M752.7 88.8v32.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="765.2" y="137.7" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  73.50, 3.50</text>
  <circle cx="207.3" cy="261.1" r="12.5" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M190.8 261.1h32.9M207.3 244.6v32.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="194.8" y="238.6" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  3.50, 23.50</text>
  <circle cx="752.7" cy="261.1" r="12.5" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M736.3 261.1h32.9M752.7 244.6v32.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="765.2" y="238.6" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  73.50, 23.50</text>
  <text x="480.0" y="318.4" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 77 × 27&nbsp;mm, corners rounded to a 3.5&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>3.50</td><td>3.50</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>73.50</td><td>3.50</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>3.50</td><td>23.50</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>73.50</td><td>23.50</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
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

Related boards, each with its own pinout and limits: [Endstop inputs (basic)](/extensions/endstop-inputs-basic).

## Design source {#origin}

This board comes from the [original design files](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/ExtraEndstops). It was drawn for an earlier controller generation than Smoothieboard V2 Prime; match connections contact by contact.
See all boards on the [extension boards](/extension-boards) page.
