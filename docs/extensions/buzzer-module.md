---
layout: default
title: "Buzzer module"
description: "A 5 V active buzzer with a MOSFET driver, a Gadgeteer input and chain socket, and an alternative three-pin input."
permalink: /extensions/buzzer-module
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Indicators</p>
    <h1 id="buzzer-module">Buzzer module</h1>
    <p class="xb-lead">A small sounder for end-of-job and status signals: one logic output switches it on, and it makes its own tone.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/buzzer-module/v14/buzzer-module-diagram.png" alt="Top view of the Buzzer module.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>5 V</b><span>buzzer</span></div>
  <div class="xb-stat"><b>30 mA</b><span>maximum</span></div>
  <div class="xb-stat"><b>1 output</b><span>on or off</span></div>
  <div class="xb-stat"><b>2 inputs</b><span>socket or header</span></div>
  <div class="xb-stat"><b>Chain</b><span>pass-on socket</span></div>
  <div class="xb-stat"><b>38 × 36</b><span>millimetres</span></div>
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
  <a href="#mounting">Mounting</a>
  <a href="#electrical">Electrical</a>
  <a href="#datasheets">Datasheets</a>
</nav>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Not a safety alarm. Bridge only one pair on JP1, so two 5&nbsp;V supplies are never joined. J3 is wired ground, 5&nbsp;V, signal.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>Audible signal</td></tr>
    <tr><td>Buzzer</td><td><a href="/images/extensions/buzzer-module/datasheets/cmi-1295-0585t.pdf">CMI-1295-0585T</a>, internally driven, 5&nbsp;V, up to 30&nbsp;mA</td></tr>
    <tr><td>Driver</td><td><a href="/images/extensions/buzzer-module/datasheets/dmn2056u.pdf">DMN2056U</a> MOSFET; high on contact 3 sounds the buzzer</td></tr>
    <tr><td>Inputs</td><td>J1 socket contact 3, or J3 signal</td></tr>
    <tr><td>Chain</td><td>J2; JP2 forwards contact 3 (bridged)</td></tr>
    <tr><td>Supply select</td><td>JP1 pads 1&ndash;2: socket 5&nbsp;V (as delivered); 2&ndash;3: header 5&nbsp;V</td></tr>
    <tr><td>Size</td><td>38 &times; 36&nbsp;mm</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/buzzer-module/v14/buzzer-module-diagram.png" alt="Top view of the Buzzer module with numbered markers explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:22.4%;top:17.5%" aria-label="1: Input socket (J1)">1<span class="xb-pop"><b>Input socket (J1)</b> — from the controller.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-2" style="left:77.4%;top:17.5%" aria-label="2: Chain socket (J2)">2<span class="xb-pop"><b>Chain socket (J2)</b> — to the next module.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:72.9%;top:83.3%" aria-label="3: Header input (J3)">3<span class="xb-pop"><b>Header input (J3)</b> — ground, 5&nbsp;V, signal.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:37.9%;top:67.7%" aria-label="4: Buzzer (BZ1)">4<span class="xb-pop"><b>Buzzer (BZ1)</b> — the sounder.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:61.2%;top:40.1%" aria-label="5: Driver (Q1)">5<span class="xb-pop"><b>Driver (Q1)</b> — switches it.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:27.4%;top:40.1%" aria-label="6: Input diodes (D1)">6<span class="xb-pop"><b>Input diodes (D1)</b> — combine the two inputs.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-7" style="left:82.4%;top:38.9%" aria-label="7: Supply select (JP1)">7<span class="xb-pop"><b>Supply select (JP1)</b> — one pair only.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:47.4%;top:32.6%" aria-label="8: Chain link (JP2)">8<span class="xb-pop"><b>Chain link (JP2)</b> — forwards contact 3.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Input socket (J1)</b> — from the controller.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket (J2)</b> — to the next module.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Header input (J3)</b> — ground, 5&nbsp;V, signal.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Buzzer (BZ1)</b> — the sounder.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Driver (Q1)</b> — switches it.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Input diodes (D1)</b> — combine the two inputs.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Supply select (JP1)</b> — one pair only.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Chain link (JP2)</b> — forwards contact 3.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1: input socket

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">Control</span></td></tr>
    <tr><td>4 to 9</td><td>Passed to J2</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J3: header input

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">Control</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This module</b><span>And a ten-wire cable or three leads.</span></div>
  <div class="xb-card"><b>A free output</b><span>PB1 in the example.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

This example uses PB1 on Smoothieboard V2 Prime GF/J37 (the 2590 version; check the pin on other boards).

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Check JP1</h3>
    <p>Pads 1&ndash;2 bridged.</p>
  </li>
  <li class="xb-step">
    <h3>Connect</h3>
    <p>With power off, cable GF/J37 to J1 contact for contact, or wire only contacts 2, 3 and 10. Leave J2 and J3 empty.</p>
  </li>
  <li class="xb-step">
    <h3>Configure</h3>
    <p>Add the settings below.</p>
  </li>
  <li class="xb-step">
    <h3>Test</h3>
    <p>Send <code>M106.9</code>, then <code>M107.9</code>.</p>
    <p class="xb-expect">Sound, then silence.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>A command that sounds the buzzer</td><td><a href="/switch">Switch</a>, digital output</td><td><a href="#config-main">Setup</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Setup {#config-main}

```ini
[switch]
bench_buzzer.enable = true
bench_buzzer.output_pin = PB1
bench_buzzer.output_type = digital
bench_buzzer.input_on_command = M106
bench_buzzer.input_off_command = M107
bench_buzzer.startup_state = false
bench_buzzer.subcode = 9
bench_buzzer.halt_set_to = false
```

PB1, the name and <code>M106.9</code>/<code>M107.9</code> must be unused. Merge into an existing <code>[switch]</code> section.

## How it works {#how-it-works}

Either input passes through a diode and 100&nbsp;&Omega; to the MOSFET gate, which has a 10&nbsp;k&Omega; pull-down. A high level connects the buzzer to ground.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>No sound</td><td>JP1 bridged on one pair, 5&nbsp;V on contact 2, PB1 changes.</td></tr>
    <tr><td>Always on</td><td>A second control source on J3 or a command conflict.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/buzzer-module/v14/buzzer-module-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/buzzer-module/v14/buzzer-module-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/buzzer-module/v14/buzzer-module-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-bz-mount-t">
  <title id="xb-bz-mount-t">Mounting drawing of the bz, component side: outline 38 by 36 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="300.6" y="78.0" width="358.9" height="340.0" rx="9.4" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M300.6 56H659.4"/><path d="M300.6 50V62"/><path d="M659.4 50V62"/><path d="M685.4 78.0V418.0"/><path d="M679.4 78.0h12"/><path d="M679.4 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">38</text>
  <text x="697.4" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">36</text>
  <circle cx="300.6" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="288.6" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M242.6 104.0h30" fill="none"/><path d="M276.6 104.0l-8 -4v8z"/><path d="M242.6 104.0v30" fill="none"/><path d="M242.6 138.0l-4 -8h8z"/></g>
  <text x="280.6" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="238.6" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="376.1" cy="285.8" r="15.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M357.0 285.8h38.2M376.1 266.7v38.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="361.0" y="260.7" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  8.00, 22.00</text>
  <circle cx="565.0" cy="285.8" r="15.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M545.9 285.8h38.2M565.0 266.7v38.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="580.1" y="260.7" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  28.00, 22.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 38 × 36&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>8.00</td><td>22.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>28.00</td><td>22.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Buzzer values from its datasheet.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Buzzer supply</td><td>5 V</td><td>—</td><td>5 V</td><td>—</td><td>Nominal</td></tr>
    <tr><td>Buzzer current</td><td>At rated voltage</td><td>—</td><td>—</td><td>30 mA</td><td>Datasheet maximum</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: datasheets {#datasheets}

The first page of each important chip&rsquo;s datasheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/buzzer-module/datasheets/cmi-1295-0585t.pdf"><img src="/images/extensions/buzzer-module/datasheets/cmi-1295-0585t-page1.png" alt="First page of the CMI-1295-0585T datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/buzzer-module/datasheets/cmi-1295-0585t.pdf">CMI-1295-0585T magnetic buzzer datasheet</a> — Same Sky, 4 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/buzzer-module/datasheets/dmn2056u.pdf"><img src="/images/extensions/buzzer-module/datasheets/dmn2056u-page1.png" alt="First page of the DMN2056U datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/buzzer-module/datasheets/dmn2056u.pdf">DMN2056U N-channel MOSFET datasheet</a> — Diodes Incorporated, 8 pages.</figcaption>
</figure>
{:/nomarkdown}


See all boards on the [extension boards](/extension-boards) page.
