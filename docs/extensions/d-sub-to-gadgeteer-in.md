---
layout: default
title: "D-sub-to-Gadgeteer IN adapter"
description: "The controller end of a DE-9 extension for a Gadgeteer socket: seven signals, 5 V and ground onto a DE-9 cable."
permalink: /extensions/d-sub-to-gadgeteer-in
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Cabling adapters</p>
    <h1 id="d-sub-to-gadgeteer-in">D-sub-to-Gadgeteer IN adapter</h1>
    <p class="xb-lead">The controller end of a DE-9 cable extension: seven signals, 5&nbsp;V and ground leave a ten-contact socket on one DE-9 cable to the matching <a href="/extensions/d-sub-to-gadgeteer-out">OUT adapter</a>.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/d-sub-to-gadgeteer-in/v24/d-sub-to-gadgeteer-in-diagram.webp" alt="Top view of the D-sub-to-Gadgeteer IN adapter.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>7 signals</b><span>direct</span></div>
  <div class="xb-stat"><b>DE-9</b><span>pins</span></div>
  <div class="xb-stat"><b>5 V</b><span>carried</span></div>
  <div class="xb-stat"><b>ESD</b><span>every line</span></div>
  <div class="xb-stat"><b>Qwiic</b><span>I²C branch</span></div>
  <div class="xb-stat"><b>23 × 29</b><span>millimetres</span></div>
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
    <tr><td>Protection</td><td><a href="/images/extensions/d-sub-to-gadgeteer-in/datasheets/tpd1e05u06.pdf">TPD1E05U06</a> on each signal; surge diode on 5&nbsp;V</td></tr>
    <tr><td>3.3 V</td><td>Stays on the host side; not sent down the cable</td></tr>
    <tr><td>Qwiic (J3)</td><td>Underside; contacts 8 and 9 as SDA and SCL, for sockets of type I</td></tr>
    <tr><td>Size</td><td>23 &times; 29&nbsp;mm</td></tr>
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
      <img src="/images/extensions/d-sub-to-gadgeteer-in/v24/d-sub-to-gadgeteer-in-diagram.webp" alt="Top view of the D-sub-to-Gadgeteer IN adapter with numbered markers explained in the list below.">
      <a class="xb-mk" href="#tour-1" style="left:26.5%;top:57.6%" aria-label="1: Controller socket (J1)">1<span class="xb-pop"><b>Controller socket (J1)</b> — ten contacts.</span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:50.3%;top:25.5%" aria-label="2: DE-9 plug (J2)">2<span class="xb-pop"><b>DE-9 plug (J2)</b> — to the cable.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-3" style="left:7.8%;top:32.1%" aria-label="3: Protection diode D2">3<span class="xb-pop"><b>Protection diode D2</b> — signal 3.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-4" style="left:16.5%;top:32.1%" aria-label="4: Protection diode D3">4<span class="xb-pop"><b>Protection diode D3</b> — signal 4.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:25.2%;top:32.1%" aria-label="5: Protection diode D4">5<span class="xb-pop"><b>Protection diode D4</b> — signal 5.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:33.9%;top:32.1%" aria-label="6: Protection diode D5">6<span class="xb-pop"><b>Protection diode D5</b> — signal 6.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:42.6%;top:32.1%" aria-label="7: Protection diode D6">7<span class="xb-pop"><b>Protection diode D6</b> — signal 7.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:60.0%;top:32.1%" aria-label="8: Protection diode D8">8<span class="xb-pop"><b>Protection diode D8</b> — signal 9.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Controller socket (J1)</b> — ten contacts.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>DE-9 plug (J2)</b> — to the cable.</div></li>
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

### J2: DE-9

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

### J1: controller socket

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td></tr>
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

This example reads a button through the IN adapter alone, on Smoothieboard V2 Prime GF/J37.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 666" role="img" aria-labelledby="xb-d-sub-to-gadgeteer-in-wire"><title id="xb-d-sub-to-gadgeteer-in-wire">Wiring: controller contact 3 to J1 contact 3; controller contact 10 to J1 contact 10; J2 contact 1 to button leg 1; J2 contact 5 to button leg 2.</title><image href="/images/extensions/d-sub-to-gadgeteer-in/v24/d-sub-to-gadgeteer-in-diagram.webp" x="404" y="14" width="191" height="230"/><circle cx="455" cy="146" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="436" y="165" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="455" y="179" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J1</text><circle cx="501" cy="73" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="482" y="92" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="501" y="106" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J2</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Prime header GF/J37</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J1 on this board</text><rect x="30" y="304" width="200" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="130" y="375" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Smoothieboard</text><text x="130" y="395" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">V2 Prime</text><rect x="770" y="304" width="200" height="150" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 364.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">3</text><text x="784" y="369" text-anchor="start" font-size="14" fill="#e6ebf2">3  </text><rect x="400" y="353" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">3 to 3</text><path d="M230 394.0H770" fill="none" stroke="#8b949e" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="394" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">10</text><text x="784" y="399" text-anchor="start" font-size="14" fill="#e6ebf2">10  GND</text><rect x="400" y="383" width="200" height="22" rx="11" fill="#8b949e" stroke="#8b949e" stroke-width="1.5"/><text x="500" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#111">10 to 10: GND</text><text x="130" y="486" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J2 on this board</text><text x="870" y="486" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Normally-open button</text><rect x="700" y="498" width="270" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><rect x="828" y="521" width="104" height="104" rx="12" fill="#2c3036" stroke="#9aa2ad" stroke-width="1.5"/><circle cx="880" cy="573" r="36" fill="#e23b32" stroke="#7d120d" stroke-width="5"/><rect x="30" y="498" width="200" height="150" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 558.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="558" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="558" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="563" text-anchor="end" font-size="14" fill="#e6ebf2">  1</text><text x="712" y="563" text-anchor="start" font-size="13" fill="#e6ebf2">button leg 1</text><rect x="340" y="547" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="563" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1: button leg 1</text><path d="M230 588.0H700" fill="none" stroke="#8b949e" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="588" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="588" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><text x="216" y="593" text-anchor="end" font-size="14" fill="#e6ebf2">GND  5</text><text x="712" y="593" text-anchor="start" font-size="13" fill="#e6ebf2">button leg 2</text><rect x="340" y="577" width="220" height="22" rx="11" fill="#8b949e" stroke="#8b949e" stroke-width="1.5"/><text x="450" y="593" text-anchor="middle" font-size="13" font-weight="700" fill="#111">5: button leg 2</text></svg>
  </div>
  <figcaption>Wiring for this procedure. Yellow rings mark the connectors used. Make and change connections with the power off. Equipment is drawn as a typical unit, not a specific model.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Wire the controller side</h3>
    <p>With power off: Prime GF/J37.3 (PB1) to J1 contact 3, and GF/J37.10 to J1 contact 10.</p>
  </li>
  <li class="xb-step">
    <h3>Wire the button</h3>
    <p>Wire a normally-open button between DE-9 contacts 1 and 5.</p>
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
    <tr><td>A button at the end of a cable</td><td><a href="/button-box">Button box</a></td><td><a href="#config-main">Setup</a></td></tr>
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

<code>^</code> turns on the pull-up, <code>!</code> makes the grounded button active. <code>KILL</code> is a software halt, not a safety emergency stop. See <a href="/button-box">button box</a>.

## How it works {#how-it-works}

Signals pass straight through, each with an ESD diode to ground. The matching OUT adapter rebuilds 3.3&nbsp;V at the far end. The direction of each signal is set by the attached devices.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 142" role="img" aria-labelledby="xb-d-sub-to-gadgeteer-in-path"><title id="xb-d-sub-to-gadgeteer-in-path">J1 signals then Straight through, ESD diode to ground on each then DE-9 cable then Matching OUT adapter, rebuilds 3.3 V.</title><rect x="20" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="127" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">J1 signals</text><text x="127" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="268" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="376" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Straight through</text><text x="376" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2">ESD diode to ground on each</text><path d="M238.5 70H259.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M258 63L266 70L258 77Z" fill="#5fb3ff"/><rect x="517" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="624" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">DE-9 cable</text><text x="624" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M487.0 70H508.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M506 63L515 70L506 77Z" fill="#5fb3ff"/><rect x="766" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="873" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Matching OUT adapter</text><text x="873" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2">rebuilds 3.3 V</text><path d="M735.5 70H756.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M754 63L764 70L754 77Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board.</figcaption>
</figure>
{:/nomarkdown}


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
    <tr><td><a href="/images/extensions/d-sub-to-gadgeteer-in/v24/d-sub-to-gadgeteer-in-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/d-sub-to-gadgeteer-in/v24/d-sub-to-gadgeteer-in-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/d-sub-to-gadgeteer-in/v24/d-sub-to-gadgeteer-in-diagram.webp">Board drawing (WebP)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

The board is 23 × 29 mm with square corners, 1.6 mm thick. It has no mounting holes.

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
  <a href="/images/extensions/d-sub-to-gadgeteer-in/datasheets/tpd1e05u06.pdf"><img src="/images/extensions/d-sub-to-gadgeteer-in/datasheets/tpd1e05u06-page1.png" alt="First page of the TPD1E05U06 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/d-sub-to-gadgeteer-in/datasheets/tpd1e05u06.pdf">TPD1E05U06 single-channel ESD protection diode</a> — Texas Instruments, 39 pages.</figcaption>
</figure>
{:/nomarkdown}


See all boards on the [extension boards](/extension-boards) page.
