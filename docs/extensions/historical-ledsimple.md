---
layout: default
title: "LedSimple"
description: "Seven-LED signal indicator board: pinout, test wiring and configuration."
permalink: /extensions/historical-ledsimple
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Indicators</p>
    <h1 id="historical-ledsimple">LedSimple</h1>
    <p class="xb-lead">Seven LEDs, one per header signal, to watch digital outputs during a bench test.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/historical-ledsimple/directory-board-render.png" alt="Top view of the LedSimple board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>7</b><span>LEDs</span></div>
  <div class="xb-stat"><b>7</b><span>signals</span></div>
  <div class="xb-stat"><b>330 Ω</b><span>per LED</span></div>
  <div class="xb-stat"><b>active high</b><span>logic</span></div>
  <div class="xb-stat"><b>37 × 10 mm</b><span>board size</span></div>
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
  <b>Leave header contacts 1 and 2 unconnected.</b> The netlist names them as supply rails, but the board connects them to nothing. The LEDs are for observation only, not for driving loads. This is a historical Smoothieboard2 design, not a current board.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>Seven-channel logic indicator</td></tr>
    <tr><td>Header</td><td>P1, ten contacts, on the underside</td></tr>
    <tr><td>Signals</td><td>Contacts 3–9</td></tr>
    <tr><td>Ground</td><td>Contact 10</td></tr>
    <tr><td>Series resistor</td><td>330 Ω per LED</td></tr>
    <tr><td>Size</td><td>37 × 10 mm</td></tr>
    <tr><td>Licence</td><td>CERN-OHL-1.2</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/historical-ledsimple/directory-board-render.png" alt="Annotated top view of the LedSimple board">
      <a class="xb-mk" href="#tour-1" style="left:28.1%;top:50.0%" aria-label="1: D1 (contact 3)">1<span class="xb-pop"><b>D1 (contact 3)</b> — Lights when P1 contact 3 is high.</span></a>
      <a class="xb-mk" href="#tour-2" style="left:50.0%;top:50.0%" aria-label="2: D4 (contact 6)">2<span class="xb-pop"><b>D4 (contact 6)</b> — Middle of the row.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:71.9%;top:50.0%" aria-label="3: D7 (contact 9)">3<span class="xb-pop"><b>D7 (contact 9)</b> — Lights when P1 contact 9 is high.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:35.4%;top:50.0%" aria-label="4: LED D2">4<span class="xb-pop"><b>LED D2</b> — LED D2, marked <code>P4</code> in the board file. Connects to <code>GND</code>.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:42.7%;top:50.0%" aria-label="5: LED D3">5<span class="xb-pop"><b>LED D3</b> — LED D3, marked <code>P5</code> in the board file. Connects to <code>GND</code>.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:57.3%;top:50.0%" aria-label="6: LED D5">6<span class="xb-pop"><b>LED D5</b> — LED D5, marked <code>P7</code> in the board file. Connects to <code>GND</code>.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:64.6%;top:50.0%" aria-label="7: LED D6">7<span class="xb-pop"><b>LED D6</b> — LED D6, marked <code>P8</code> in the board file. Connects to <code>GND</code>.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>D1 (contact 3)</b> — Lights when P1 contact 3 is high.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>D4 (contact 6)</b> — Middle of the row.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>D7 (contact 9)</b> — Lights when P1 contact 9 is high.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>LED D2</b> — LED D2, marked <code>P4</code> in the board file. Connects to <code>GND</code>.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>LED D3</b> — LED D3, marked <code>P5</code> in the board file. Connects to <code>GND</code>.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>LED D5</b> — LED D5, marked <code>P7</code> in the board file. Connects to <code>GND</code>.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>LED D6</b> — LED D6, marked <code>P8</code> in the board file. Connects to <code>GND</code>.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

### Lights {#lights}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th>Lit means</th><th>Disable it</th></tr></thead>
  <tbody>
    <tr><td>D1–D7</td><td>The signal on P1 contacts 3–9 (D1 = contact 3) is high</td><td>Disconnect that signal</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Pinout {#pinout}

<span id="connect-and-try-it"></span>

### Header P1

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>P1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>not connected</td></tr>
    <tr><td>2</td><td>not connected</td></tr>
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

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>LedSimple board</b><span>Built from the design files</span></div>
  <div class="xb-card"><b>Two leads</b><span>One signal and ground</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

A one-channel test on Smoothieboard V2 Prime.

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Wire two leads</h3>
    <p>With power off, connect Prime J37 contact 3 (PB1) to P1 contact 3 and J37 contact 10 (ground) to P1 contact 10.</p>
  </li>
  <li class="xb-step">
    <h3>Configure</h3>
    <p>Add the switch from <a href="#configuration">Configuration</a> and restart.</p>
    <p class="xb-expect">D1 is dark.</p>
  </li>
  <li class="xb-step">
    <h3>Switch it</h3>
    <p>Send <code>M106.9</code>, then <code>M107.9</code>.</p>
    <p class="xb-expect">D1 lights, then goes out.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

<span id="smoothieware-use"></span>

A switch that drives PB1 from G-code. See [switch](/switch). Syntax checked against firmware commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`.

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

Each signal contact drives one LED to ground through its own 330 Ω resistor, so a high level lights the LED. The current comes from the host pin: check that your host can supply it on every lit pin at once.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Nothing responds</td><td>With power off, check continuity along each lead and board path against the pinout tables. Confirm which end of the connector is contact 1.</td></tr>
    <tr><td>One LED stays dark</td><td>Check that its signal is really high and that the LED is fitted the right way round.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/LedSimple">Smoothieboard2 design source</a></td><td>Design source</td></tr>
    <tr><td><a href="/images/extensions/historical-ledsimple/guides/native-contact-reference/native-source-and-notices.zip">Matching design source, licence and drawing notice</a></td><td>Download</td></tr>
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
  <svg viewBox="0 0 1000 302" role="img" aria-labelledby="xb-al-ledsimple-mount-t">
  <title id="xb-al-ledsimple-mount-t">Mounting drawing of the historical-ledsimple, component side: outline 37 by 10 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="180.0" y="78.0" width="600.0" height="162.2" rx="56.8" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M180.0 56H780.0"/><path d="M180.0 50V62"/><path d="M780.0 50V62"/><path d="M806.0 78.0V240.2"/><path d="M800.0 78.0h12"/><path d="M800.0 240.2h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">37</text>
  <text x="818.0" y="164.1" font-size="15" font-weight="700" fill="#e6ebf2">10</text>
  <circle cx="180.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="168.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M122.0 104.0h30" fill="none"/><path d="M156.0 104.0l-8 -4v8z"/><path d="M122.0 104.0v30" fill="none"/><path d="M122.0 138.0l-4 -8h8z"/></g>
  <text x="160.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="118.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="236.8" cy="159.1" r="25.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M206.8 159.1h59.9M236.8 129.1v59.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="210.8" y="123.1" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  3.50, 5.00</text>
  <circle cx="723.2" cy="159.1" r="25.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M693.3 159.1h59.9M723.2 129.1v59.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="749.2" y="123.1" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  33.50, 5.00</text>
  <text x="480.0" y="270.2" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 37 × 10&nbsp;mm, corners rounded to a 3.5&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>3.50</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>33.50</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Only what the design source states or the circuit fixes. Blank cells are not specified.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>LED series resistance</td><td>Each channel</td><td>—</td><td>330 Ω</td><td>—</td><td>Design file value</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Design source {#origin}

This board comes from the [original design files](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/LedSimple). It is licensed CERN-OHL-1.2. It was drawn for an earlier controller generation than Smoothieboard V2 Prime; match connections contact by contact.
See all boards on the [extension boards](/extension-boards) page.
