---
layout: default
title: "Qwiic hub"
description: "Passive I2C hub with four Qwiic-style connectors: pinout and limits."
permalink: /extensions/historical-qwiic-hub
redirect_from:
  - /extensions/historical-gadgeteer-qwiic-adapter
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Wiring</p>
    <h1 id="historical-qwiic-hub">Qwiic hub</h1>
    <p class="xb-lead">Puts one header I2C bus on four Qwiic-style connectors and keeps a second header to continue the chain.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/historical-qwiic-hub/historical-qwiic-hub-diagram.png" alt="Top view of the Qwiic hub board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>4</b><span>Qwiic-style ports</span></div>
  <div class="xb-stat"><b>1</b><span>shared bus</span></div>
  <div class="xb-stat"><b>3.3 V</b><span>port supply</span></div>
  <div class="xb-stat"><b>2</b><span>headers</span></div>
  <div class="xb-stat"><b>25 × 35 mm</b><span>board size</span></div>
  <div class="xb-stat"><b>3</b><span>mounting holes</span></div>
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
  <b>All four connectors share one bus.</b> Two devices with the same address still clash. Never put 5 V on the 3.3 V Qwiic contacts. This is a design by Chris Cecil, not a current Smoothieware board.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>Passive I2C distribution</td></tr>
    <tr><td>Headers</td><td>J5, J6</td></tr>
    <tr><td>Ports</td><td>J1–J4: ground, 3.3 V, SDA, SCL</td></tr>
    <tr><td>Indicator</td><td>D1</td></tr>
    <tr><td>Size</td><td>25 × 35 mm</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/historical-qwiic-hub/historical-qwiic-hub-diagram.png" alt="Annotated top view of the Qwiic hub board">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:22.2%;top:32.9%" aria-label="1: Header J5">1<span class="xb-pop"><b>Header J5</b> — From the host.</span></a>
      <a class="xb-mk xb-pl" href="#tour-2" style="left:22.2%;top:70.0%" aria-label="2: Header J6">2<span class="xb-pop"><b>Header J6</b> — Continues the header.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-3" style="left:85.2%;top:16.9%" aria-label="3: Qwiic port 1">3<span class="xb-pop"><b>Qwiic port 1</b> — J2–J4 are identical.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:58.0%;top:30.0%" aria-label="4: Indicator">4<span class="xb-pop"><b>Indicator</b> — Onboard LED.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:46.9%;top:30.0%" aria-label="5: Resistor R1">5<span class="xb-pop"><b>Resistor R1</b> — Resistor R1, marked <code>1k</code> in the board file. Connects to <code>+3V3</code>.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-6" style="left:82.6%;top:39.2%" aria-label="6: Qwiic port J2">6<span class="xb-pop"><b>Qwiic port J2</b> — Contacts 1 to 4: <code>GND</code>, <code>+3V3</code>, <code>SDA</code>, <code>SCL</code>.</span></a>
      <a class="xb-mk xb-pr" href="#tour-7" style="left:82.6%;top:59.8%" aria-label="7: Qwiic port J3">7<span class="xb-pop"><b>Qwiic port J3</b> — Same four contacts as J2.</span></a>
      <a class="xb-mk xb-pr" href="#tour-8" style="left:82.6%;top:80.4%" aria-label="8: Qwiic port J4">8<span class="xb-pop"><b>Qwiic port J4</b> — Same four contacts as J2.</span></a>
      <a class="xb-mk xb-pb" href="#tour-9" style="left:51.9%;top:15.5%" aria-label="9: Mounting hole H1">9<span class="xb-pop"><b>Mounting hole H1</b> — 3.2 mm hole for an M3 screw.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Header J5</b> — From the host.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Header J6</b> — Continues the header.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Qwiic port 1</b> — J2–J4 are identical.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Indicator</b> — Onboard LED.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Resistor R1</b> — Resistor R1, marked <code>1k</code> in the board file. Connects to <code>+3V3</code>.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Qwiic port J2</b> — Contacts 1 to 4: <code>GND</code>, <code>+3V3</code>, <code>SDA</code>, <code>SCL</code>.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Qwiic port J3</b> — Same four contacts as J2.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Qwiic port J4</b> — Same four contacts as J2.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Mounting hole H1</b> — 3.2 mm hole for an M3 screw.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

<span id="connect-and-try-it"></span>

### Headers J5 and J6

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J5 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+3V3</code></td></tr>
    <tr><td>2</td><td><code>+5V</code></td></tr>
    <tr><td>3</td><td><code>P3</code></td></tr>
    <tr><td>4</td><td><code>P4</code></td></tr>
    <tr><td>5</td><td><code>P5</code></td></tr>
    <tr><td>6</td><td><code>P6</code></td></tr>
    <tr><td>7</td><td><code>P7</code></td></tr>
    <tr><td>8</td><td><code>SDA</code></td></tr>
    <tr><td>9</td><td><code>SCL</code></td></tr>
    <tr><td>10</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Ports J1–J4

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>GND</code></td></tr>
    <tr><td>2</td><td><code>+3V3</code></td></tr>
    <tr><td>3</td><td><code>SDA</code></td></tr>
    <tr><td>4</td><td><code>SCL</code></td></tr>
    <tr><td>MP</td><td>not connected</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Qwiic hub</b><span>Built from the design files</span></div>
  <div class="xb-card"><b>3.3 V I2C devices</b><span>With distinct addresses</span></div>
  <div class="xb-card"><b>Host cable</b><span>Ten contacts, checked</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

The minimum wiring first, then the order to do it in. Facts about each contact are in the [pinout](#pinout).

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 472" role="img" aria-labelledby="xb-historical-qwiic-hub-wire"><title id="xb-historical-qwiic-hub-wire">Wiring: J1 contact 1 to GND; J1 contact 2 to +3V3; J1 contact 3 to SDA; J1 contact 4 to SCL.</title><image href="/images/extensions/historical-qwiic-hub/historical-qwiic-hub-diagram.png" x="414" y="14" width="172" height="230"/><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J1 on this board</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Qwiic device</text><rect x="700" y="304" width="270" height="150" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><rect x="815" y="329" width="130" height="100" rx="8" fill="#20365c" stroke="#7fa6e0" stroke-width="1.5"/><rect x="858" y="359" width="44" height="40" rx="3" fill="#171717" stroke="#939393" stroke-width="1.5"/><circle cx="828" cy="345" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="362" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="379" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="396" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="413" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="930" cy="343" r="6" fill="#0d0f12" stroke="#c9c9c9" stroke-width="1.5"/><circle cx="930" cy="415" r="6" fill="#0d0f12" stroke="#c9c9c9" stroke-width="1.5"/><rect x="908" y="373" width="18" height="10" rx="1" fill="#c9a66b" stroke="#c9a66b" stroke-width="1.5"/><rect x="30" y="304" width="200" height="150" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 334.0H700" fill="none" stroke="#939393" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="334" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="334" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><text x="216" y="339" text-anchor="end" font-size="14" fill="#eaeaea">  1</text><text x="712" y="339" text-anchor="start" font-size="13" fill="#eaeaea">GND</text><rect x="340" y="323" width="220" height="22" rx="11" fill="#939393" stroke="#939393" stroke-width="1.5"/><text x="450" y="339" text-anchor="middle" font-size="13" font-weight="700" fill="#111">1: GND</text><path d="M230 364.0H700" fill="none" stroke="#d92d2d" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="364" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" fill="#eaeaea">  2</text><text x="712" y="369" text-anchor="start" font-size="13" fill="#eaeaea">+3V3</text><rect x="340" y="353" width="220" height="22" rx="11" fill="#d92d2d" stroke="#d92d2d" stroke-width="1.5"/><text x="450" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">2: +3V3</text><path d="M230 394.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" fill="#eaeaea">  3</text><text x="712" y="399" text-anchor="start" font-size="13" fill="#eaeaea">SDA</text><rect x="340" y="383" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">3: SDA</text><path d="M230 424.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="429" text-anchor="end" font-size="14" fill="#eaeaea">  4</text><text x="712" y="429" text-anchor="start" font-size="13" fill="#eaeaea">SCL</text><rect x="340" y="413" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="429" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">4: SCL</text></svg>
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
    <p>Use 3.3 V I2C devices with distinct addresses and a ten-contact host cable checked contact by contact.</p>
  </li>
  <li class="xb-step">
    <h3>Check with a meter</h3>
    <p>Check continuity and the rail voltages with a meter before connecting anything else.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

<span id="smoothieware-use"></span>

No setting for the hub. Each attached device needs a matching Smoothieware driver, and generic I2C pins alone give no device support. On Smoothieboard V2 Prime, GB/J33 contacts 8 and 9 are I2C3 SDA and SCL, and GH/J38 carries I2C2.

## How it works {#how-it-works}

SDA, SCL, 3.3 V and ground run straight from the headers to the four ports. Pull-ups and bus length come from your devices and cables.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 142" role="img" aria-labelledby="xb-historical-qwiic-hub-path"><title id="xb-historical-qwiic-hub-path">Header SDA, SCL, 3.3 V, ground then Straight tracks, no pull-ups added then Four Qwiic ports.</title><rect x="46" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="186" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Header SDA, SCL, 3.3 V, ground</text><text x="186" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><rect x="360" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Straight tracks</text><text x="500" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3">no pull-ups added</text><path d="M330.0 70H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 63L358 70L349 77Z" fill="#5fb3ff"/><rect x="674" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="814" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Four Qwiic ports</text><text x="814" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M644.0 70H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 63L672 70L663 77Z" fill="#5fb3ff"/></svg>
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
    <tr><td>A device does not answer</td><td>Check its address against the others and the total pull-up resistance.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="https://github.com/Ccecil/GDGT_Qwiic/blob/43cffcc31de8b1ee70fa9682c5a553adc4cc90b4/GDGT_Qwiic.kicad_pcb">original circuit</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/GDGT_Qwiic">Ccecil upstream project</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/GDGT_Qwiic/tree/43cffcc31de8b1ee70fa9682c5a553adc4cc90b4">Original source</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/GDGT_Qwiic/blob/43cffcc31de8b1ee70fa9682c5a553adc4cc90b4/GDGT_Qwiic.kicad_sch">Original GDGT_Qwiic.kicad_sch</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/GDGT_Qwiic/blob/43cffcc31de8b1ee70fa9682c5a553adc4cc90b4/README.md">Original README.md</a></td><td>Design source</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

Outline and holes from the original board file. Millimetres, seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-wiic-adapter-mount-t">
  <title id="xb-wiic-adapter-mount-t">Mounting drawing of the historical-qwiic-hub, component side: outline 25 by 35 millimetres with 3 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="358.6" y="78.0" width="242.9" height="340.0" rx="0.0" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M358.6 56H601.4"/><path d="M358.6 50V62"/><path d="M601.4 50V62"/><path d="M627.4 78.0V418.0"/><path d="M621.4 78.0h12"/><path d="M621.4 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">25</text>
  <text x="639.4" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">35</text>
  <circle cx="358.6" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="346.6" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M300.6 104.0h30" fill="none"/><path d="M334.6 104.0l-8 -4v8z"/><path d="M300.6 104.0v30" fill="none"/><path d="M300.6 138.0l-4 -8h8z"/></g>
  <text x="338.6" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="296.6" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="484.9" cy="129.0" r="15.5" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M465.3 129.0h39.1M484.9 109.5v39.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="500.4" y="164.5" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  13.00, 5.25</text>
  <circle cx="484.9" cy="250.4" r="12.1" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M468.7 250.4h32.3M484.9 234.3v32.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="497.0" y="228.3" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  13.00, 17.75</text>
  <circle cx="484.9" cy="371.9" r="15.5" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M465.3 371.9h39.1M484.9 352.3v39.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="500.4" y="346.3" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">3</tspan>  13.00, 30.25</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 25 × 35&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>13.00</td><td>5.25</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>13.00</td><td>17.75</td><td>2.5&nbsp;mm, not plated</td><td>Mounting</td></tr>
    <tr><td>3</td><td>13.00</td><td>30.25</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
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

Designed by Chris Cecil: [original design files](https://github.com/Ccecil/GDGT_Qwiic/tree/43cffcc31de8b1ee70fa9682c5a553adc4cc90b4). It was drawn for the Smoothieboard V2 Gadgeteer era; check every connection against your own controller.
See all boards on the [extension boards](/extension-boards) page.
