---
layout: default
title: "Ultrasonic distance sensor"
description: "A carrier that adapts an HC-SR04 ultrasonic module to a Gadgeteer socket: pinout, wiring, level adaptation, limits and files."
permalink: /extensions/ultrasonic-distance-sensor
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Sensors and inputs</p>
    <h1 id="ultrasonic-distance-sensor">Ultrasonic distance sensor</h1>
    <p class="xb-lead">A carrier for the common HC-SR04 ultrasonic distance module. It powers the module from 5&nbsp;V and brings its echo signal down to a level the controller accepts. Measuring distance means timing a pulse, which needs your own driver.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/ultrasonic-distance-sensor/ultrasonic-distance-sensor-diagram.png" alt="Top view of the ultrasonic sensor board: a ten-contact socket on the left and right edges and a four-way module socket near the bottom edge.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>
<div class="xb-stats">
  <div class="xb-stat"><b>2 cm to 4 m</b><span>range stated for the module</span></div>
  <div class="xb-stat"><b>Trigger + echo</b><span>contacts 3 and 4</span></div>
  <div class="xb-stat"><b>3.38 V</b><span>echo at the controller for a 5.25&nbsp;V module output</span></div>
  <div class="xb-stat"><b>15 mA</b><span>module current at 5&nbsp;V</span></div>
  <div class="xb-stat"><b>2 sockets</b><span>type X input and chain</span></div>
  <div class="xb-stat"><b>60 &times; 50</b><span>millimetres, four M3 holes</span></div>
</div>
<nav class="xb-nav" aria-label="On this page">
  <a href="#specs">Tech specs</a>
  <a href="#tour">Board tour</a>
  <a href="#pinout">Pinout</a>
  <a href="#what-you-need">What you need</a>
  <a href="#get-started">Get started</a>
  <a href="#configuration">Configuration</a>
  <a href="#how-it-works">How it works</a>
  <a href="#options">Solder links</a>
  <a href="#chaining">Chaining</a>
  <a href="#troubleshooting">Troubleshooting</a>
  <a href="#downloads">Downloads</a>
  <a href="#mounting">Mounting</a>
  <a href="#electrical">Electrical</a>
  <a href="#simulation">Simulation</a>
  <a href="#datasheets">Datasheets</a>
</nav>
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Do not plug a module in or out while powered. This is not a safety or collision-protection sensor.
</sl-alert>
{:/nomarkdown}

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>Coarse non-contact distance or presence sensing, for example a material or enclosure check</td></tr>
    <tr><td>Module</td><td>HC-SR04 with 5V, TRIG, ECHO, GND pins; bought separately</td></tr>
    <tr><td>Module connectors</td><td>J3: four-way 2.54&nbsp;mm right-angle socket. J4: alternative four-way JST PH footprint, not fitted; use only one</td></tr>
    <tr><td>Signals</td><td>Trigger through 220&nbsp;&Omega; with 100&nbsp;k&Omega; pull-down; echo through a 10&nbsp;k&Omega; / 18&nbsp;k&Omega; divider</td></tr>
    <tr><td>Supply</td><td>5&nbsp;V from the socket</td></tr>
    <tr><td>Sockets</td><td>Two 10-contact Gadgeteer type X sockets (Samtec SHF-105, 1.27&nbsp;mm): input and chain</td></tr>
    <tr><td>Size</td><td>60 &times; 50&nbsp;mm, four M3 holes on a 50 &times; 40&nbsp;mm pattern; the module overhangs the edge</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> header GF electrically; no firmware driver</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/ultrasonic-distance-sensor/ultrasonic-distance-sensor-diagram.png" alt="Top view of the ultrasonic sensor board with 11 numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:9.0%;top:40.4%" aria-label="1: input socket x in (j1)">1<span class="xb-pop"><b>Input socket X IN (J1)</b> — Trigger on contact 3, echo on contact 4.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-2" style="left:91.0%;top:40.4%" aria-label="2: chain socket chain (j2)">2<span class="xb-pop"><b>Chain socket CHAIN (J2)</b> — Passes the unused contacts on.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:43.5%;top:69.2%" aria-label="3: module socket (j3)">3<span class="xb-pop"><b>Module socket (J3)</b> — The module plugs in here, matching the printed order 5V, TRIG, ECHO, GND.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:74.2%;top:73.1%" aria-label="4: cable connector position (j4)">4<span class="xb-pop"><b>Cable connector position (J4)</b> — Alternative footprint for a module on a cable.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:40.3%;top:38.5%" aria-label="5: trigger parts (r1, r2)">5<span class="xb-pop"><b>Trigger parts (R1, R2)</b> — Series resistor, and a pull-down that keeps the module idle while the pin floats.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:56.5%;top:46.1%" aria-label="6: echo divider (r3, r4)">6<span class="xb-pop"><b>Echo divider (R3, R4)</b> — Brings the 5&nbsp;V echo down to about 3.3&nbsp;V.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:36.3%;top:57.7%" aria-label="7: supply capacitors (c1, c2)">7<span class="xb-pop"><b>Supply capacitors (C1, C2)</b> — 100&nbsp;nF and 10&nbsp;&micro;F on 5&nbsp;V.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:74.2%;top:50.0%" aria-label="8: power light (d1, r5)">8<span class="xb-pop"><b>Power light (D1, R5)</b> — Green, lit when 5&nbsp;V is present.</span></a>
      <a class="xb-mk xb-pb" href="#tour-9" style="left:74.2%;top:40.4%" aria-label="9: led link (jp9)">9<span class="xb-pop"><b>LED link (JP9)</b> — Closed as delivered.</span></a>
      <a class="xb-mk xb-pb" href="#tour-10" style="left:24.2%;top:38.5%" aria-label="10: chain links (jp3, jp4)">10<span class="xb-pop"><b>Chain links (JP3, JP4)</b> — Open as delivered, keeping trigger and echo off the chain.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-11" style="left:9.7%;top:11.5%" aria-label="11: mounting hole">11<span class="xb-pop"><b>Mounting hole</b> — One of four M3 holes.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Input socket X IN (J1)</b> — Trigger on contact 3, echo on contact 4.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket CHAIN (J2)</b> — Passes the unused contacts on.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Module socket (J3)</b> — The module plugs in here, matching the printed order 5V, TRIG, ECHO, GND.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Cable connector position (J4)</b> — Alternative footprint for a module on a cable.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Trigger parts (R1, R2)</b> — Series resistor, and a pull-down that keeps the module idle while the pin floats.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Echo divider (R3, R4)</b> — Brings the 5&nbsp;V echo down to about 3.3&nbsp;V.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Supply capacitors (C1, C2)</b> — 100&nbsp;nF and 10&nbsp;&micro;F on 5&nbsp;V.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Power light (D1, R5)</b> — Green, lit when 5&nbsp;V is present.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>LED link (JP9)</b> — Closed as delivered.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Chain links (JP3, JP4)</b> — Open as delivered, keeping trigger and echo off the chain.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Mounting hole</b> — One of four M3 holes.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

Check contact numbering and the module&rsquo;s pin order before applying power.

### J1: input socket (X IN)

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>Use</th><th>Prime header GF</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Passed to the chain</td><td>3.3 V</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Module supply</td><td>5 V</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">TRIG</span></td><td>Output from controller</td><td>PB1</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">ECHO</span></td><td>Input to controller</td><td>PJ4</td></tr>
    <tr><td>5 to 9</td><td>Passed through</td><td>Not used</td><td>PA4, PG0, PJ3, PG1, PJ2</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Ground</td><td>GND</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J3 and J4: module

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Pin</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5 V</td></tr>
    <tr><td>2</td><td>TRIG</td></tr>
    <tr><td>3</td><td>ECHO</td></tr>
    <tr><td>4</td><td>GND</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>An HC-SR04 module</b><span>Check the pin order and that it accepts a 3.3&nbsp;V trigger; copies differ.</span></div>
  <div class="xb-card"><b>A ten-way cable</b><span>1.27&nbsp;mm Gadgeteer ribbon cable.</span></div>
  <div class="xb-card"><b>A support</b><span>The module overhangs the board.</span></div>
  <div class="xb-card"><b>Your own driver</b><span>It must pulse the trigger and time the echo.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Minimum wiring">
<svg viewBox="0 0 1000 242" role="img" aria-labelledby="xb-sonar-wire-t">
<title id="xb-sonar-wire-t">Minimum wiring: contact 2 to contact 2, 5 V; PB1, contact 3 to contact 3, trigger; PJ4, contact 4 to contact 4, echo; contact 10 to contact 10, ground.</title>
<rect x="20" y="20" width="280" height="202" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="160.0" y="126.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2"></text>
<rect x="700" y="20" width="280" height="202" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="840.0" y="126.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2"></text>
<text x="160" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Prime header GF (J37)</text>
<text x="840" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Ultrasonic J1</text>
<path d="M300 84H700" stroke="#ff9f43" stroke-width="3" fill="none"/><circle cx="300" cy="84" r="5" fill="#ff9f43"/><circle cx="700" cy="84" r="5" fill="#ff9f43"/><text x="286" y="89" text-anchor="end" font-size="13" fill="#e6ebf2">contact 2</text><text x="714" y="89" font-size="13" fill="#e6ebf2">contact 2</text><text x="500" y="77" text-anchor="middle" font-size="12" fill="#a9b4c2">5 V</text>
<path d="M300 122H700" stroke="#5fb3ff" stroke-width="3" fill="none"/><circle cx="300" cy="122" r="5" fill="#5fb3ff"/><circle cx="700" cy="122" r="5" fill="#5fb3ff"/><text x="286" y="127" text-anchor="end" font-size="13" fill="#e6ebf2">PB1, contact 3</text><text x="714" y="127" font-size="13" fill="#e6ebf2">contact 3</text><text x="500" y="115" text-anchor="middle" font-size="12" fill="#a9b4c2">trigger</text>
<path d="M300 160H700" stroke="#6fe08a" stroke-width="3" fill="none"/><circle cx="300" cy="160" r="5" fill="#6fe08a"/><circle cx="700" cy="160" r="5" fill="#6fe08a"/><text x="286" y="165" text-anchor="end" font-size="13" fill="#e6ebf2">PJ4, contact 4</text><text x="714" y="165" font-size="13" fill="#e6ebf2">contact 4</text><text x="500" y="153" text-anchor="middle" font-size="12" fill="#a9b4c2">echo</text>
<path d="M300 198H700" stroke="#a9b4c2" stroke-width="3" fill="none"/><circle cx="300" cy="198" r="5" fill="#a9b4c2"/><circle cx="700" cy="198" r="5" fill="#a9b4c2"/><text x="286" y="203" text-anchor="end" font-size="13" fill="#e6ebf2">contact 10</text><text x="714" y="203" font-size="13" fill="#e6ebf2">contact 10</text><text x="500" y="191" text-anchor="middle" font-size="12" fill="#a9b4c2">ground</text>
</svg>
  </div>
  <figcaption>Four connections.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Plug in the module</h3>
    <p>With the power off, match 5V, TRIG, ECHO and GND to the printing.</p>
  </li>
  <li class="xb-step">
    <h3>Mount</h3>
    <p>Point the module at a flat target and keep the beam clear of the machine frame.</p>
  </li>
  <li class="xb-step">
    <h3>Connect and power</h3>
    <p>Plug J1 into header GF.</p>
    <p class="xb-expect">The green LED should light.</p>
  </li>
  <li class="xb-step">
    <h3>Measure</h3>
    <p>Pulse the trigger for at least 10&nbsp;&micro;s and time the echo pulse; wait 60&nbsp;ms or more between measurements.</p>
    <p class="xb-expect">By the module data sheet, the pulse width in microseconds divided by 58 gives the distance in centimetres.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Read distance</td><td>None</td><td>No SmoothieV2 module drives an HC-SR04</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

There is nothing to add to `config.ini`.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
<svg viewBox="0 0 1000 200" role="img" aria-labelledby="xb-sonar-how-t">
<title id="xb-sonar-how-t">The controller triggers the module; the echo pulse returns through a divider.</title>
<rect x="20.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="120.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J1 contact 3</text><text x="120.0" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">trigger pulse</text>
<path d="M220.0 51H400.0" stroke="#a9b4c2" stroke-width="3"/><path d="M400.0 51l-9 -5v10z" fill="#a9b4c2"/>
<rect x="400.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="500.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">R1 220 ohm</text><text x="500.0" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">protect</text>
<path d="M600.0 51H780.0" stroke="#a9b4c2" stroke-width="3"/><path d="M780.0 51l-9 -5v10z" fill="#a9b4c2"/>
<rect x="780.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="880.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Module</text><text x="880.0" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">sends burst</text>
<rect x="20.0" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="120.0" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Module</text><text x="120.0" y="157.0" text-anchor="middle" font-size="12" fill="#a9b4c2">echo 5 V</text>
<path d="M220.0 141H400.0" stroke="#a9b4c2" stroke-width="3"/><path d="M400.0 141l-9 -5v10z" fill="#a9b4c2"/>
<rect x="400.0" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="500.0" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">10 k / 18 k</text><text x="500.0" y="157.0" text-anchor="middle" font-size="12" fill="#a9b4c2">divide</text>
<path d="M600.0 141H780.0" stroke="#a9b4c2" stroke-width="3"/><path d="M780.0 141l-9 -5v10z" fill="#a9b4c2"/>
<rect x="780.0" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="880.0" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J1 contact 4</text><text x="880.0" y="157.0" text-anchor="middle" font-size="12" fill="#a9b4c2">about 3.3 V</text>
</svg>
  </div>
  <figcaption>Trigger above, echo below.</figcaption>
</figure>
{:/nomarkdown}

The module sends an ultrasonic burst after each trigger and holds its echo output high for as long as the sound takes to return. The two resistors scale that 5&nbsp;V signal by 18/28. Their effect on timing is small: the simulated rise time of 0.42&nbsp;&micro;s corresponds to well under a tenth of a millimetre.

## Solder links {#options}

Leave JP3 and JP4 open while the module is in use.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Solder links">
<svg viewBox="0 0 1000 114" role="img" aria-labelledby="xb-sonar-jp-t">
<title id="xb-sonar-jp-t">Solder links as delivered: JP3 open; JP4 open; JP9 closed.</title>
<rect x="20" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="72" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="114" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="108" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP3 · open</text><text x="108" y="90" text-anchor="middle" font-size="11" fill="#a9b4c2">chain contact 3</text>
<rect x="216" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="268" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="310" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="304" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP4 · open</text><text x="304" y="90" text-anchor="middle" font-size="11" fill="#a9b4c2">chain contact 4</text>
<rect x="412" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="464" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="506" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="490" y="34" width="20" height="10" fill="#e0b84a"/>
<text x="500" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP9 · closed</text><text x="500" y="90" text-anchor="middle" font-size="11" fill="#a9b4c2">power light</text>
</svg>
  </div>
  <figcaption>The links as delivered. Close one with a small blob of solder across both pads; open it by removing the solder or cutting the copper between the pads.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>What it does</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>JP3</td><td>Joins contact 3 to the chain socket</td><td>Open</td></tr>
    <tr><td>JP4</td><td>Joins contact 4 to the chain socket</td><td>Open</td></tr>
    <tr><td>JP9</td><td>Powers the green LED</td><td>Closed</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Chaining {#chaining}

A further board on CHAIN can use contacts 5 to 9.

{::nomarkdown}
{% include _includes/extension-chain-figure.html id="xb-sonar" board="ultrasonic sensor board" in_label="X IN" chain_label="CHAIN" lane1="pin 3, trigger" lane2="pin 4, echo" lane3="pin 5, free" s1="open" s2="open" s3="closed" caption="Pins 3 and 4 stop here; pin 5 is wired straight through." %}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>On CHAIN</th></tr></thead>
  <tbody>
    <tr><td>1, 2, 10</td><td>Power and ground</td><td>Passed on</td></tr>
    <tr><td>3, 4</td><td>Trigger, echo</td><td>Stopped by open links</td></tr>
    <tr><td>5 to 9</td><td>Free</td><td>Passed on</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Likely cause</th><th>What to check</th></tr></thead>
  <tbody>
    <tr><td>No echo at all</td><td>No 5 V, module plugged in wrongly, or trigger too short</td><td>LED, pin order, a 10 &micro;s or longer pulse</td></tr>
    <tr><td>Module ignores the trigger</td><td>Module needs a 5 V trigger level</td><td>Try another module</td></tr>
    <tr><td>Erratic distance</td><td>Soft or angled target, or measurements too close together</td><td>Use a flat target and wait 60 ms</td></tr>
    <tr><td>Distance slightly off</td><td>Air temperature changes the speed of sound</td><td>Calibrate in place</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

| Light | Meaning |
|---|---|
| Green (D1) | 5 V present |
{: .xb-leds}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/ultrasonic-distance-sensor/ultrasonic-distance-sensor-schematic.pdf">Schematic (PDF)</a></td><td>The circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/ultrasonic-distance-sensor/ultrasonic-distance-sensor-bom.csv">Parts list (CSV)</a></td><td>Every component with its value, footprint and part number where one is chosen</td></tr>
    <tr><td><a href="/images/extensions/ultrasonic-distance-sensor/ultrasonic-distance-sensor-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
    <tr><td><a href="/images/extensions/ultrasonic-distance-sensor/ultrasonic-distance-sensor-populated-top.png">3D view, top (PNG)</a></td><td>Rendered from the design files; the module itself is not shown</td></tr>
    <tr><td><a href="/images/extensions/ultrasonic-distance-sensor/ultrasonic-distance-sensor-populated-isometric.png">3D view, angled (PNG)</a></td><td>Rendered from the design files; the module itself is not shown</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side. Allow for the module overhanging the board edge.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-sonar-mount-t">
  <title id="xb-sonar-mount-t">Mounting drawing of the ultrasonic sensor board, component side: outline 60 by 50 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="276.0" y="78.0" width="408.0" height="340.0" rx="6.8" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M276.0 56H684.0"/><path d="M276.0 50V62"/><path d="M684.0 50V62"/><path d="M710.0 78.0V418.0"/><path d="M704.0 78.0h12"/><path d="M704.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">60</text>
  <text x="722.0" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">50</text>
  <circle cx="276.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="264.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M218.0 104.0h30" fill="none"/><path d="M252.0 104.0l-8 -4v8z"/><path d="M218.0 104.0v30" fill="none"/><path d="M218.0 138.0l-4 -8h8z"/></g>
  <text x="256.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="214.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="310.0" cy="112.0" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M295.1 112.0h29.8M310.0 97.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="299.1" y="142.9" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.00</text>
  <circle cx="650.0" cy="112.0" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M635.1 112.0h29.8M650.0 97.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="660.9" y="142.9" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  55.00, 5.00</text>
  <circle cx="310.0" cy="384.0" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M295.1 384.0h29.8M310.0 369.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="299.1" y="363.1" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 45.00</text>
  <circle cx="650.0" cy="384.0" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M635.1 384.0h29.8M650.0 369.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="660.9" y="363.1" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  55.00, 45.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 60 × 50&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>55.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>5.00</td><td>45.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>55.00</td><td>45.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Every figure is a design value, a calculated or simulated value, or a manufacturer&rsquo;s data sheet value, as the last column says. A dash means no figure is given.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis</th></tr></thead>
  <tbody>
    <tr><td>Module supply</td><td>5 V</td><td>&mdash;</td><td>5 V</td><td>&mdash;</td><td>Design</td></tr>
    <tr><td>Module current</td><td>5 V</td><td>&mdash;</td><td>15 mA</td><td>&mdash;</td><td>Module data sheet</td></tr>
    <tr><td>Range</td><td>Module</td><td>2 cm</td><td>&mdash;</td><td>4 m</td><td>Module data sheet</td></tr>
    <tr><td>Trigger pulse</td><td>Contact 3</td><td>10 &micro;s</td><td>&mdash;</td><td>&mdash;</td><td>Module data sheet</td></tr>
    <tr><td>Measurement interval</td><td>Module</td><td>60 ms</td><td>&mdash;</td><td>&mdash;</td><td>Module data sheet</td></tr>
    <tr><td>Echo high at controller</td><td>Contact 4</td><td>2.83 V</td><td>&mdash;</td><td>3.37 V</td><td>Simulated for 4.4 to 5.25 V from the module</td></tr>
    <tr><td>Echo rise time</td><td>Contact 4</td><td>&mdash;</td><td>0.42 &micro;s</td><td>&mdash;</td><td>Simulated</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Component stress limits

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Part</th><th>Limit</th><th>Use on this board</th></tr></thead>
  <tbody>
    <tr><td>Echo divider</td><td>Limits current into the controller through 10 k&Omega;</td><td>5 V module signal</td></tr>
    <tr><td>Capacitors</td><td>10 V and 16 V</td><td>5 V</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: simulation {#simulation}

The echo divider was simulated with ngspice at the highest and a low module output voltage.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Simulated results against limits">
<svg viewBox="0 0 1000 186" role="img" aria-labelledby="xb-sonar-sim-t">
<title id="xb-sonar-sim-t">Each simulated value (yellow mark) against its allowed range (green band).</title>
<text x="385" y="41" text-anchor="end" font-size="13" fill="#e6ebf2">Host input high level at 5.25 V echo</text><path d="M400 36H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M444.5 36H815.5" stroke="#2f8f5b" stroke-width="10"/><path d="M786.9 23v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="41" font-size="13" font-weight="700" fill="#ffcc33">3.37&nbsp;V</text>
<text x="385" y="93" text-anchor="end" font-size="13" fill="#e6ebf2">Echo rise time (1 us equals 0.17 mm of range)</text><path d="M400 88H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M400.0 88H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M574.0 75v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="93" font-size="13" font-weight="700" fill="#ffcc33">424&nbsp;ns</text>
<text x="385" y="145" text-anchor="end" font-size="13" fill="#e6ebf2">Host input high level at 4.4 V echo</text><path d="M400 140H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M444.5 140H860.0" stroke="#2f8f5b" stroke-width="10"/><path d="M585.2 127v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="145" font-size="13" font-weight="700" fill="#ffcc33">2.83&nbsp;V</text>
</svg>
  </div>
  <figcaption>Simulated value (yellow) against the limit used for it (green). Each bar has its own scale.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Result</th><th>Simulated value</th><th>Limit</th><th>Outcome</th></tr></thead>
  <tbody>
    <tr><td>Host input high level at 5.25 V echo</td><td>3.37&nbsp;V</td><td>2.4&nbsp;V to 3.45&nbsp;V</td><td>Within</td></tr>
    <tr><td>Echo rise time (1 us equals 0.17 mm of range)</td><td>424&nbsp;ns</td><td>at most 1&nbsp;&micro;s</td><td>Within</td></tr>
    <tr><td>Host input high level at 4.4 V echo</td><td>2.83&nbsp;V</td><td>at least 2.31&nbsp;V</td><td>Within</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Not simulated: the module itself, its acoustics and its timing.

## Appendix: datasheet {#datasheets}

The first page of the module data sheet. Click the page to open the PDF. It is a copy distributed by a reseller.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/ultrasonic-distance-sensor/datasheets/hc-sr04.pdf"><img src="/images/extensions/ultrasonic-distance-sensor/datasheets/hc-sr04-page1.png" alt="First page of the HC-SR04 ultrasonic ranging module datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/ultrasonic-distance-sensor/datasheets/hc-sr04.pdf">HC-SR04 ultrasonic ranging module</a> — ElecFreaks, 3 pages.</figcaption>
</figure>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
