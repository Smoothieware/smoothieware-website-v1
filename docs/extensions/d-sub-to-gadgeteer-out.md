---
layout: default
title: "D-sub-to-Gadgeteer OUT adapter"
description: "The remote end of a DE-9 extension for a Gadgeteer socket: seven signals and 5 V in, a socket and a locally made 3.3 V out."
permalink: /extensions/d-sub-to-gadgeteer-out
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Cabling adapters</p>
    <h1 id="d-sub-to-gadgeteer-out">D-sub-to-Gadgeteer OUT adapter</h1>
    <p class="xb-lead">The far end of a DE-9 cable extension: it receives seven signals and 5&nbsp;V, makes its own 3.3&nbsp;V and presents a ten-contact socket to a module.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/d-sub-to-gadgeteer-out/v26/d-sub-to-gadgeteer-out-diagram.png" alt="Top view of the D-sub-to-Gadgeteer OUT adapter.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>7 signals</b><span>direct</span></div>
  <div class="xb-stat"><b>DE-9</b><span>socket</span></div>
  <div class="xb-stat"><b>5 V</b><span>carried</span></div>
  <div class="xb-stat"><b>ESD</b><span>every line</span></div>
  <div class="xb-stat"><b>Qwiic</b><span>I²C branch</span></div>
  <div class="xb-stat"><b>33 × 26</b><span>millimetres</span></div>
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
  This is not a serial port. Never connect a computer, an RS-232 or null-modem cable, or network equipment. A wrong or shorted cable can put 5&nbsp;V on a signal pin. No isolation or level conversion.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>Extend one socket over a nine-wire cable</td></tr>
    <tr><td>DE-9</td><td>1&ndash;4: signals 3&ndash;6; 5: ground; 6&ndash;8: signals 7&ndash;9; 9: 5&nbsp;V</td></tr>
    <tr><td>Protection</td><td><a href="/images/extensions/d-sub-to-gadgeteer-out/datasheets/tpd1e05u06.pdf">TPD1E05U06</a> on each signal; surge diode on 5&nbsp;V</td></tr>
    <tr><td>3.3 V</td><td>Made on this board by a <a href="/images/extensions/d-sub-to-gadgeteer-out/datasheets/tps709.pdf">TPS70933</a> from the cable 5&nbsp;V</td></tr>
    <tr><td>Qwiic (J3)</td><td>Underside; contacts 8 and 9 as SDA and SCL, for sockets of type I</td></tr>
    <tr><td>Size</td><td>33 &times; 26&nbsp;mm</td></tr>
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
      <img src="/images/extensions/d-sub-to-gadgeteer-out/v26/d-sub-to-gadgeteer-out-diagram.png" alt="Top view of the D-sub-to-Gadgeteer OUT adapter with numbered markers explained in the list below.">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:34.1%;top:27.4%" aria-label="1: DE-9 socket (J1)">1<span class="xb-pop"><b>DE-9 socket (J1)</b> — from the IN adapter.</span></a>
      <a class="xb-mk" href="#tour-2" style="left:29.9%;top:60.6%" aria-label="2: Module socket (J2)">2<span class="xb-pop"><b>Module socket (J2)</b> — ten contacts.</span></a>
      <a class="xb-mk xb-pb" href="#tour-3" style="left:25.6%;top:34.5%" aria-label="3: Protection diode D2">3<span class="xb-pop"><b>Protection diode D2</b> — signal 3.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:33.9%;top:34.5%" aria-label="4: Protection diode D3">4<span class="xb-pop"><b>Protection diode D3</b> — signal 4.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:42.2%;top:34.5%" aria-label="5: Protection diode D4">5<span class="xb-pop"><b>Protection diode D4</b> — signal 5.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:50.5%;top:34.5%" aria-label="6: Protection diode D5">6<span class="xb-pop"><b>Protection diode D5</b> — signal 6.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:58.8%;top:34.5%" aria-label="7: Protection diode D6">7<span class="xb-pop"><b>Protection diode D6</b> — signal 7.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:75.4%;top:34.5%" aria-label="8: Protection diode D8">8<span class="xb-pop"><b>Protection diode D8</b> — signal 9.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>DE-9 socket (J1)</b> — from the IN adapter.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Module socket (J2)</b> — ten contacts.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Protection diode D2</b> — signal 3.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Protection diode D3</b> — signal 4.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Protection diode D4</b> — signal 5.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Protection diode D5</b> — signal 6.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Protection diode D6</b> — signal 7.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Protection diode D8</b> — signal 9.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1: DE-9

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1, 2, 3, 4</td><td>Signals 3 to 6</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>6, 7, 8</td><td>Signals 7 to 9</td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-5v">5 V</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J2: module socket

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">Local 3.3 V</span></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td></tr>
    <tr><td>3 to 9</td><td>Signals 3 to 9</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J3: Qwiic (underside)

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td></tr>
    <tr><td>3</td><td>Signal 8 (SDA)</td></tr>
    <tr><td>4</td><td>Signal 9 (SCL)</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This adapter</b><span>And leads or the matching cable.</span></div>
  <div class="xb-card"><b>A DE-9 cable</b><span>Wired straight, contact for contact, for use with the pair.</span></div>
  <div class="xb-card"><b>A push button</b><span>For the example.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

This example reads a button through the OUT adapter alone, on Smoothieboard V2 Prime GF/J37.

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Wire the controller side</h3>
    <p>With power off: Prime GF/J37.3 (PB1) to DE-9 contact 1, and GF/J37.10 to DE-9 contact 5.</p>
  </li>
  <li class="xb-step">
    <h3>Wire the button</h3>
    <p>Wire a normally-open button between socket J2 contacts 3 and 10.</p>
  </li>
  <li class="xb-step">
    <h3>Configure</h3>
    <p>Add the settings below; PB1 must be free.</p>
  </li>
  <li class="xb-step">
    <h3>Test</h3>
    <p>With machine loads disabled, power up and press.</p>
    <p class="xb-expect">The controller halts.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>A button at the end of a cable</td><td><a href="/buttons">Button box</a></td><td><a href="#config-main">Setup</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Setup {#config-main}

```ini
[button box]
extension_button.enable = true
extension_button.pin = PB1!^
extension_button.press = KILL
```

<code>^</code> turns on the pull-up, <code>!</code> makes the grounded button active. <code>KILL</code> is a software halt, not a safety emergency stop. See <a href="/buttons">buttons</a>.

## How it works {#how-it-works}

Signals pass straight through, each with an ESD diode to ground. The regulator turns the cable&rsquo;s 5&nbsp;V into the module&rsquo;s 3.3&nbsp;V. In the button example it stays unpowered. The direction of each signal is set by the attached devices.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Button does nothing</td><td>Both wires, PB1 free, <code>^</code> and <code>!</code> present.</td></tr>
    <tr><td>Unreliable I²C</td><td>Long cables need slower speeds and suitable pull-ups.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/d-sub-to-gadgeteer-out/v26/d-sub-to-gadgeteer-out-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/d-sub-to-gadgeteer-out/v26/d-sub-to-gadgeteer-out-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/d-sub-to-gadgeteer-out/v26/d-sub-to-gadgeteer-out-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-do-mount-t">
  <title id="xb-do-mount-t">Mounting drawing of the do, component side: outline 33 by 26 millimetres with 0 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="264.2" y="78.0" width="431.5" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M264.2 56H695.8"/><path d="M264.2 50V62"/><path d="M695.8 50V62"/><path d="M721.8 78.0V418.0"/><path d="M715.8 78.0h12"/><path d="M715.8 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">33</text>
  <text x="733.8" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">26</text>
  <circle cx="264.2" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="252.2" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M206.2 104.0h30" fill="none"/><path d="M240.2 104.0l-8 -4v8z"/><path d="M206.2 104.0v30" fill="none"/><path d="M206.2 138.0l-4 -8h8z"/></g>
  <text x="244.2" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="202.2" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 33 × 26&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Signal levels.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Signals</td><td>All seven</td><td>—</td><td>3.3 V</td><td>—</td><td>No level conversion</td></tr>
    <tr><td>Supply</td><td>DE-9 contact 9</td><td>—</td><td>5 V</td><td>—</td><td>From the controller socket</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: datasheets {#datasheets}

The first page of each important chip&rsquo;s datasheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/d-sub-to-gadgeteer-out/datasheets/tpd1e05u06.pdf"><img src="/images/extensions/d-sub-to-gadgeteer-out/datasheets/tpd1e05u06-page1.png" alt="First page of the TPD1E05U06 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/d-sub-to-gadgeteer-out/datasheets/tpd1e05u06.pdf">TPD1E05U06 single-channel ESD protection diode</a> — Texas Instruments, 39 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/d-sub-to-gadgeteer-out/datasheets/tps709.pdf"><img src="/images/extensions/d-sub-to-gadgeteer-out/datasheets/tps709-page1.png" alt="First page of the TPS70933 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/d-sub-to-gadgeteer-out/datasheets/tps709.pdf">TPS709 150 mA low-dropout regulator</a> — Texas Instruments, 43 pages.</figcaption>
</figure>
{:/nomarkdown}


See all boards on the [extension boards](/extension-boards) page.
