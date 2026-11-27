---
layout: default
title: "PiPower — Pi power, UART and button shield"
description: "Raspberry Pi shield for 5 V power, serial pins and a button: pinout."
permalink: /extensions/historical-pipower
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Computer</p>
    <h1 id="historical-pipower">PiPower — Pi power, UART and button shield</h1>
    <p class="xb-lead">A small Raspberry Pi header shield that distributes 5 V, brings out the serial pins and provides a button input.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/historical-pipower/directory-board-render.png" alt="Top view of the PiPower — Pi power, UART and button shield board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>5 V</b><span>supply</span></div>
  <div class="xb-stat"><b>UART</b><span>Tx and Rx</span></div>
  <div class="xb-stat"><b>1</b><span>button</span></div>
  <div class="xb-stat"><b>10</b><span>header contacts</span></div>
  <div class="xb-stat"><b>20.15 × 25 mm</b><span>board size</span></div>
  <div class="xb-stat"><b>0</b><span>regulators</span></div>
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
  <b>Feed it 5 V only:</b> there is no regulator on the board. The button is a logic input and does not disconnect power. Third-party design by Chris Cecil, not a current Smoothieware board.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>Pi power and serial shield</td></tr>
    <tr><td>Power</td><td>J5 in, J6 out: 1 5 V, 2 ground</td></tr>
    <tr><td>Pi header</td><td>J4, ten contacts</td></tr>
    <tr><td>Serial</td><td>J7: ground, Tx, Rx</td></tr>
    <tr><td>Button</td><td>SW1 on board, J8 remote</td></tr>
    <tr><td>Parts</td><td>R1 10 kΩ pull-up, C2 1 µF</td></tr>
    <tr><td>Size</td><td>20.15 × 25 mm</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/historical-pipower/directory-board-render.png" alt="Annotated top view of the PiPower — Pi power, UART and button shield board">
      <a class="xb-mk xb-pb xb-pr" href="#tour-1" style="left:85.4%;top:49.5%" aria-label="1: Connector J6">1<span class="xb-pop"><b>Connector J6</b> — Connector J6, marked <code>5v Out</code> in the board file. Connects to <code>+5V</code>, <code>GND</code>.</span></a>
      <a class="xb-mk xb-pr" href="#tour-2" style="left:85.4%;top:73.7%" aria-label="2: Connector J7">2<span class="xb-pop"><b>Connector J7</b> — Connector J7. Connects to <code>GND</code>, <code>Tx</code>, <code>Rx</code>.</span></a>
      <a class="xb-mk xb-pl" href="#tour-3" style="left:14.8%;top:84.0%" aria-label="3: Connector J8">3<span class="xb-pop"><b>Connector J8</b> — Connector J8, marked <code>On/Off</code> in the board file. Connects to <code>GND</code>.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:29.8%;top:62.9%" aria-label="4: Resistor J1">4<span class="xb-pop"><b>Resistor J1</b> — Resistor J1. Connects to <code>ON\\OFF</code>.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:47.4%;top:53.1%" aria-label="5: Resistor J4">5<span class="xb-pop"><b>Resistor J4</b> — Resistor J4. Connects to <code>+5V</code>, <code>ON\\OFF</code>, <code>GND</code>, <code>Tx</code>, <code>Rx</code>.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-6" style="left:14.9%;top:49.1%" aria-label="6: Resistor R1">6<span class="xb-pop"><b>Resistor R1</b> — Resistor R1, marked <code>10k</code> in the board file. Connects to <code>+5V</code>.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-7" style="left:18.8%;top:19.6%" aria-label="7: Capacitor C1">7<span class="xb-pop"><b>Capacitor C1</b> — Capacitor C1, marked <code>100uf</code> in the board file. Connects to <code>+5V</code>, <code>GND</code>.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-8" style="left:5.1%;top:49.1%" aria-label="8: Capacitor C2">8<span class="xb-pop"><b>Capacitor C2</b> — Capacitor C2, marked <code>1uf</code> in the board file. Connects to <code>GND</code>.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Connector J6</b> — Connector J6, marked <code>5v Out</code> in the board file. Connects to <code>+5V</code>, <code>GND</code>.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Connector J7</b> — Connector J7. Connects to <code>GND</code>, <code>Tx</code>, <code>Rx</code>.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Connector J8</b> — Connector J8, marked <code>On/Off</code> in the board file. Connects to <code>GND</code>.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Resistor J1</b> — Resistor J1. Connects to <code>ON\\OFF</code>.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Resistor J4</b> — Resistor J4. Connects to <code>+5V</code>, <code>ON\\OFF</code>, <code>GND</code>, <code>Tx</code>, <code>Rx</code>.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Resistor R1</b> — Resistor R1, marked <code>10k</code> in the board file. Connects to <code>+5V</code>.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Capacitor C1</b> — Capacitor C1, marked <code>100uf</code> in the board file. Connects to <code>+5V</code>, <code>GND</code>.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Capacitor C2</b> — Capacitor C2, marked <code>1uf</code> in the board file. Connects to <code>GND</code>.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

<span id="connect-and-try-it"></span>

### Power input J5

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J5 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+5V</code></td></tr>
    <tr><td>2</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Pi header J4

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J4 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>not connected</td></tr>
    <tr><td>2</td><td><code>+5V</code></td></tr>
    <tr><td>3</td><td>joined to J2 pad 1</td></tr>
    <tr><td>4</td><td><code>+5V</code></td></tr>
    <tr><td>5</td><td><code>ON\\OFF</code></td></tr>
    <tr><td>6</td><td><code>GND</code></td></tr>
    <tr><td>7</td><td>joined to J3 pad 1</td></tr>
    <tr><td>8</td><td><code>Tx</code></td></tr>
    <tr><td>9</td><td><code>GND</code></td></tr>
    <tr><td>10</td><td><code>Rx</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Serial J7

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J7 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>GND</code></td></tr>
    <tr><td>2</td><td><code>Tx</code></td></tr>
    <tr><td>3</td><td><code>Rx</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Remote button J8

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J8 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>joined to C2 pad 1, JP1 pad 2, R1 pad 2, SW1 pad 2</td></tr>
    <tr><td>2</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>PiPower board</b><span>Built from the design files</span></div>
  <div class="xb-card"><b>5 V supply</b><span>Sized for the Pi</span></div>
  <div class="xb-card"><b>Raspberry Pi</b><span>Model checked against the header</span></div>
</div>
{:/nomarkdown}

## Configuration {#configuration}

<span id="smoothieware-use"></span>

A UART console on the controller side. The shield does not install any shutdown service on the Pi.

```ini
[uart console]
enable = true
console = true
channel = 1
baudrate = 115200
bits = 8
stop_bits = 1
parity = none
```

On Smoothieboard V2 Prime, channel 1 transmits on PB9 and receives on PH14. See [UART](/uart). Syntax checked against firmware commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`.

## How it works {#how-it-works}

R1 pulls the button node to 5 V and C2 filters it; SW1 or a switch on J8 grounds it. Bridging JP1 connects the node to the Pi header. The node is pulled to 5 V: check that your Pi input tolerates it before bridging.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Pi does not start</td><td>Check the 5 V supply and polarity.</td></tr>
    <tr><td>No serial data</td><td>Cross Tx and Rx and share ground.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="https://raw.githubusercontent.com/Ccecil/PiPower/2747efeb41382769bcc09857d3e5fbcc05d891d4/PiPower/PiPower.kicad_pcb">PiPower/PiPower.kicad_pcb</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/PiPower/blob/2747efeb41382769bcc09857d3e5fbcc05d891d4/PiPower/PiPower.kicad_pcb">selected original circuit</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Smoothieware/SmoothieV2/tree/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src">SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`</a></td><td>Design source</td></tr>
    <tr><td><a href="https://raw.githubusercontent.com/Ccecil/PiPower/2747efeb41382769bcc09857d3e5fbcc05d891d4/PiPower/PiPower.kicad_sch">PiPower/PiPower.kicad_sch</a></td><td>Design source</td></tr>
    <tr><td><a href="https://raw.githubusercontent.com/Ccecil/PiPower/2747efeb41382769bcc09857d3e5fbcc05d891d4/Pi_Power/RaspiSmoopiShield%20v11.fsch">Pi_Power/RaspiSmoopiShield v11.fsch</a></td><td>Design source</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

Outline and holes from the original board file. Millimetres, seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-ical-pipower-mount-t">
  <title id="xb-ical-pipower-mount-t">Mounting drawing of the historical-pipower, component side: outline 20.15 by 25 millimetres with 1 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="343.0" y="78.0" width="274.0" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M343.0 56H617.0"/><path d="M343.0 50V62"/><path d="M617.0 50V62"/><path d="M643.0 78.0V418.0"/><path d="M637.0 78.0h12"/><path d="M637.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">20.15</text>
  <text x="655.0" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">25</text>
  <circle cx="343.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="331.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M285.0 104.0h30" fill="none"/><path d="M319.0 104.0l-8 -4v8z"/><path d="M285.0 104.0v30" fill="none"/><path d="M285.0 138.0l-4 -8h8z"/></g>
  <text x="323.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="281.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="491.9" cy="192.9" r="17.0" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M470.9 192.9h42.0M491.9 171.9v42.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="508.9" y="229.9" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  10.95, 8.45</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 20.15 × 25&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>10.95</td><td>8.45</td><td>2.5&nbsp;mm, not plated</td><td>Mounting</td></tr>
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

Third-party design by Chris Cecil: [original board file](https://raw.githubusercontent.com/Ccecil/PiPower/2747efeb41382769bcc09857d3e5fbcc05d891d4/PiPower/PiPower.kicad_pcb) (<code>PiPower.kicad_pcb</code>). It is a separate hardware design, not a current Smoothieware board.
See all boards on the [extension boards](/extension-boards) page.
