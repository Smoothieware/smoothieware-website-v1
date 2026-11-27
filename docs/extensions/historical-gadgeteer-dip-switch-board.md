---
layout: default
title: "DIP-switch and debounced-input board"
description: "Four DIP switches and three filtered external inputs: pinout, jumpers and configuration."
permalink: /extensions/historical-gadgeteer-dip-switch-board
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Inputs</p>
    <h1 id="historical-gadgeteer-dip-switch-board">DIP-switch and debounced-input board</h1>
    <p class="xb-lead">Four DIP switches and three filtered, protected external inputs give seven digital states on one header.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/historical-gadgeteer-dip-switch-board/directory-board-render.png" alt="Top view of the DIP-switch and debounced-input board board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>4</b><span>DIP switches</span></div>
  <div class="xb-stat"><b>3</b><span>external inputs</span></div>
  <div class="xb-stat"><b>6</b><span>supply and pull-up jumpers</span></div>
  <div class="xb-stat"><b>3.3/5 V</b><span>selectable</span></div>
  <div class="xb-stat"><b>40 × 35 mm</b><span>board size</span></div>
  <div class="xb-stat"><b>10</b><span>header contacts</span></div>
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
  <b>This is not an emergency-stop circuit.</b> The <code>E_STOP_</code> label is an ordinary input name. Check the fitted jumpers before connecting an external signal. This is a design by Chris Cecil, not a current Smoothieware board.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>Switch and input board</td></tr>
    <tr><td>Headers</td><td>J1, J2</td></tr>
    <tr><td>External inputs</td><td>J3–J5: supply or pull-up, ground, input</td></tr>
    <tr><td>Jumpers (underside)</td><td>JP1, JP3, JP5 select 5 V or 3.3 V; JP2, JP4, JP6 connect or disconnect the pull-up path</td></tr>
    <tr><td>Size</td><td>40 × 35 mm</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/historical-gadgeteer-dip-switch-board/directory-board-render.png" alt="Annotated top view of the DIP-switch and debounced-input board board">
      <a class="xb-mk" href="#tour-1" style="left:62.8%;top:60.3%" aria-label="1: DIP switches">1<span class="xb-pop"><b>DIP switches</b> — Four ground switches.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-2" style="left:11.1%;top:47.3%" aria-label="2: Header J1">2<span class="xb-pop"><b>Header J1</b> — Host connection.</span></a>
      <a class="xb-mk xb-pb" href="#tour-3" style="left:27.5%;top:16.7%" aria-label="3: Header J2">3<span class="xb-pop"><b>Header J2</b> — Same contacts.</span></a>
      <a class="xb-mk xb-pr" href="#tour-4" style="left:78.7%;top:82.1%" aria-label="4: External input 1">4<span class="xb-pop"><b>External input 1</b> — To contact 7.</span></a>
      <a class="xb-mk xb-pr" href="#tour-5" style="left:78.6%;top:57.1%" aria-label="5: External input 2">5<span class="xb-pop"><b>External input 2</b> — To contact 8.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-6" style="left:78.7%;top:32.1%" aria-label="6: External input 3">6<span class="xb-pop"><b>External input 3</b> — To contact 9.</span></a>
      <a class="xb-mk xb-pr" href="#tour-7" style="left:92.6%;top:50.3%" aria-label="7: Protection array">7<span class="xb-pop"><b>Protection array</b> — Guards the external inputs.</span></a>
      <a class="xb-mk xb-pr" href="#tour-8" style="left:91.2%;top:67.0%" aria-label="8: Resistor R1">8<span class="xb-pop"><b>Resistor R1</b> — Resistor R1, marked <code>10k</code> in the board file. Connects to <code>E_STOP_</code>.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>DIP switches</b> — Four ground switches.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Header J1</b> — Host connection.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Header J2</b> — Same contacts.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>External input 1</b> — To contact 7.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>External input 2</b> — To contact 8.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>External input 3</b> — To contact 9.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Protection array</b> — Guards the external inputs.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Resistor R1</b> — Resistor R1, marked <code>10k</code> in the board file. Connects to <code>E_STOP_</code>.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

<span id="connect-and-try-it"></span>

### Headers J1 and J2

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+3V3</code></td></tr>
    <tr><td>2</td><td><code>+5V</code></td></tr>
    <tr><td>3</td><td><code>P3</code></td></tr>
    <tr><td>4</td><td><code>P4</code></td></tr>
    <tr><td>5</td><td><code>P5</code></td></tr>
    <tr><td>6</td><td><code>P6</code></td></tr>
    <tr><td>7</td><td><code>E_STOP_</code></td></tr>
    <tr><td>8</td><td><code>SW1</code></td></tr>
    <tr><td>9</td><td><code>SW2</code></td></tr>
    <tr><td>10</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

J3, J4, J5: contact 1 selected supply, contact 2 ground, contact 3 input (to header contacts 7, 8 and 9).

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>DIP board</b><span>Built from the design files</span></div>
  <div class="xb-card"><b>Ribbon cable or leads</b><span>Verified contact by contact</span></div>
  <div class="xb-card"><b>Sensors</b><span>Contacts or 3.3 V-safe outputs</span></div>
</div>
{:/nomarkdown}

## Configuration {#configuration}

<span id="smoothieware-use"></span>

Example for the switch on header contact 3, wired to PB1. Repeat with PJ4, PA4 and PG0 for contacts 4–6.

A mechanical contact read as an input that does not limit motion. See [endstops](/endstops). Syntax checked against firmware commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`.

```ini
[endstops]
dip_contact3_diagnostic.enable = true
dip_contact3_diagnostic.pin = PB1-
dip_contact3_diagnostic.axis = X
dip_contact3_diagnostic.homing_direction = none
dip_contact3_diagnostic.limit_enable = false
```

## How it works {#how-it-works}

Closing a DIP switch grounds its contact; the resistor networks connect the other side towards header contacts 3–6. Each external input passes through filtering, series resistance and a protection array before reaching contacts 7–9.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 270" role="img" aria-labelledby="xb-historical-gadgeteer-dip-switch-board-path"><title id="xb-historical-gadgeteer-dip-switch-board-path">DIP switch, grounds its contact then Resistor networks then Header contacts 3 to 6. External input then Filter, series resistance, protection then Header contacts 7 to 9.</title><rect x="46" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="186" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">DIP switch</text><text x="186" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2">grounds its contact</text><rect x="360" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Resistor networks</text><text x="500" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M330.0 70H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 63L358 70L349 77Z" fill="#5fb3ff"/><rect x="674" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="814" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Header contacts 3 to 6</text><text x="814" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M644.0 70H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 63L672 70L663 77Z" fill="#5fb3ff"/><rect x="46" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="186" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">External input</text><text x="186" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="360" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="500" y="184" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Filter, series resistance,</text><text x="500" y="202" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">protection</text><text x="500" y="222" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M330.0 198H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 191L358 198L349 205Z" fill="#5fb3ff"/><rect x="674" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="814" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Header contacts 7 to 9</text><text x="814" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M644.0 198H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 191L672 198L663 205Z" fill="#5fb3ff"/></svg>
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
    <tr><td>A DIP switch reads the wrong bit</td><td>Check which lever drives which contact with a meter.</td></tr>
    <tr><td>External sensor has no supply</td><td>Check JP1/JP3/JP5 and JP2/JP4/JP6 on the underside.</td></tr>
    <tr><td>Signal exceeds 3.3 V</td><td>Select 3.3 V before connecting to a 3.3 V input.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="https://github.com/Ccecil/GDGT_DIP/blob/5d9241dde89d567bd8386762743478f9c7e650c0/GDGT_DIP.kicad_pcb">original circuit</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/GDGT_DIP">Ccecil upstream project</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/GDGT_DIP/tree/5d9241dde89d567bd8386762743478f9c7e650c0">Original source</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/GDGT_DIP/blob/5d9241dde89d567bd8386762743478f9c7e650c0/GDGT_DIP.kicad_sch">Original GDGT_DIP.kicad_sch</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/GDGT_DIP/blob/5d9241dde89d567bd8386762743478f9c7e650c0/README.md">Original README.md</a></td><td>Design source</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

Outline and holes from the original board file. Millimetres, seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-switch-board-mount-t">
  <title id="xb-switch-board-mount-t">Mounting drawing of the historical-gadgeteer-dip-switch-board, component side: outline 40 by 35 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="285.7" y="78.0" width="388.6" height="340.0" rx="29.1" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M285.7 56H674.3"/><path d="M285.7 50V62"/><path d="M674.3 50V62"/><path d="M700.3 78.0V418.0"/><path d="M694.3 78.0h12"/><path d="M694.3 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">40</text>
  <text x="712.3" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">35</text>
  <circle cx="285.7" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="273.7" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M227.7 104.0h30" fill="none"/><path d="M261.7 104.0l-8 -4v8z"/><path d="M227.7 104.0v30" fill="none"/><path d="M227.7 138.0l-4 -8h8z"/></g>
  <text x="265.7" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="223.7" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="480.0" cy="126.6" r="15.5" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M460.5 126.6h39.1M480.0 107.0v39.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="495.5" y="162.1" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  20.00, 5.00</text>
  <circle cx="480.0" cy="369.4" r="15.5" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M460.5 369.4h39.1M480.0 349.9v39.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="495.5" y="343.9" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  20.00, 30.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 40 × 35&nbsp;mm, corners rounded to a 3&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>20.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>20.00</td><td>30.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
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

Designed by Chris Cecil: [original design files](https://github.com/Ccecil/GDGT_DIP/tree/5d9241dde89d567bd8386762743478f9c7e650c0). It was drawn for the Smoothieboard V2 Gadgeteer era; check every connection against your own controller.
See all boards on the [extension boards](/extension-boards) page.
