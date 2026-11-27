---
layout: default
title: "Hall effect sensor"
description: "A DRV5055 linear Hall sensor on a selectable analogue contact of a chainable Gadgeteer socket: pinout, wiring, links, limits and files."
permalink: /extensions/hall-effect-sensor-board
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Sensors and inputs</p>
    <h1 id="hall-effect-sensor-board">Hall effect sensor</h1>
    <p class="xb-lead">A magnetic field sensor whose output voltage rises and falls with the field of a nearby magnet, for sensing distance or a passing magnet. It sits at half supply with no magnet. No firmware module reads a general analogue input yet, so using the value takes your own driver.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/hall-effect-sensor-board/hall-effect-sensor-board-diagram.webp" alt="Top view of the Hall sensor board: a ten-contact socket on the left and right edges and a small sensor near the bottom edge.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>
<div class="xb-stats">
  <div class="xb-stat"><b>Analogue field</b><span>TI DRV5055A3 linear Hall sensor</span></div>
  <div class="xb-stat"><b>1.65 V</b><span>output with no magnet, typical</span></div>
  <div class="xb-stat"><b>15 mV/mT</b><span>typical sensitivity at 3.3&nbsp;V</span></div>
  <div class="xb-stat"><b>&plusmn;88 mT</b><span>linear range at 3.3&nbsp;V</span></div>
  <div class="xb-stat"><b>3 contacts</b><span>selectable: 3, 4 or 5</span></div>
  <div class="xb-stat"><b>50 &times; 55</b><span>millimetres, four M3 holes</span></div>
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
{:/nomarkdown}

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>Measuring the distance to a magnet or detecting a passing magnet. For an on/off endstop use an endstop board instead; not for safety interlocks</td></tr>
    <tr><td>Sensor</td><td>Texas Instruments DRV5055A3QDBZR, senses the field perpendicular to the board</td></tr>
    <tr><td>Output</td><td>About 1.65&nbsp;V with no field, rising for a south pole at the top face, through 1&nbsp;k&Omega; and 100&nbsp;nF</td></tr>
    <tr><td>Supply</td><td>3.3&nbsp;V from the socket, 2&nbsp;mA typical, 4&nbsp;mA maximum</td></tr>
    <tr><td>Sockets</td><td>Two 10-contact Gadgeteer type A sockets (Samtec SHF-105, 1.27&nbsp;mm): input and chain</td></tr>
    <tr><td>Test points</td><td>On the underside: 3.3&nbsp;V, ground and output</td></tr>
    <tr><td>Size</td><td>50 &times; 55&nbsp;mm, four M3 holes on a 40 &times; 40&nbsp;mm pattern</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> header GH electrically; no firmware module reads the value</td></tr>
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
      <img src="/images/extensions/hall-effect-sensor-board/hall-effect-sensor-board-diagram.webp" alt="Top view of the Hall sensor board with 8 numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:10.8%;top:40.4%" aria-label="1: input socket a in (j1)">1<span class="xb-pop"><b>Input socket A IN (J1)</b> — The type A socket to the controller. As delivered the sensor is on contact 3.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-2" style="left:89.2%;top:40.4%" aria-label="2: chain socket chain (j2)">2<span class="xb-pop"><b>Chain socket CHAIN (J2)</b> — Passes the other contacts to the next board.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:50.0%;top:84.2%" aria-label="3: hall sensor (u1)">3<span class="xb-pop"><b>Hall sensor (U1)</b> — Bring the magnet to its top face, at the SENSOR marking.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:40.4%;top:77.2%" aria-label="4: supply capacitor (c1)">4<span class="xb-pop"><b>Supply capacitor (C1)</b> — 100&nbsp;nF next to the sensor.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:58.6%;top:64.9%" aria-label="5: output filter (r1, c2)">5<span class="xb-pop"><b>Output filter (R1, C2)</b> — 1&nbsp;k&Omega; and 100&nbsp;nF, a corner near 1.6&nbsp;kHz.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:65.4%;top:29.8%" aria-label="6: contact selectors (jp23 to jp25)">6<span class="xb-pop"><b>Contact selectors (JP23 to JP25)</b> — Close exactly one: contact 3, 4 or 5. JP23 is closed as delivered.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:26.9%;top:29.8%" aria-label="7: chain links (jp3 to jp5)">7<span class="xb-pop"><b>Chain links (JP3 to JP5)</b> — JP3 is open, JP4 and JP5 closed as delivered.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-8" style="left:11.5%;top:10.5%" aria-label="8: mounting hole">8<span class="xb-pop"><b>Mounting hole</b> — One of four M3 holes, not connected to ground. Use non-magnetic screws near the sensor.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Input socket A IN (J1)</b> — The type A socket to the controller. As delivered the sensor is on contact 3.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket CHAIN (J2)</b> — Passes the other contacts to the next board.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Hall sensor (U1)</b> — Bring the magnet to its top face, at the SENSOR marking.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Supply capacitor (C1)</b> — 100&nbsp;nF next to the sensor.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Output filter (R1, C2)</b> — 1&nbsp;k&Omega; and 100&nbsp;nF, a corner near 1.6&nbsp;kHz.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Contact selectors (JP23 to JP25)</b> — Close exactly one: contact 3, 4 or 5. JP23 is closed as delivered.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Chain links (JP3 to JP5)</b> — JP3 is open, JP4 and JP5 closed as delivered.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Mounting hole</b> — One of four M3 holes, not connected to ground. Use non-magnetic screws near the sensor.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

Check contact numbering with the power removed before wiring by hand.

### J1: input socket (A IN)

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>Use</th><th>Prime header GH</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Sensor supply</td><td>3.3 V</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Passed to the chain only</td><td>5 V</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">OUT</span></td><td>Field voltage as delivered (JP23)</td><td>PC3 (ADC1_5)</td></tr>
    <tr><td>4</td><td>Selectable</td><td>Field voltage with JP24</td><td>PA3 (ADC1_6)</td></tr>
    <tr><td>5</td><td>Selectable</td><td>Field voltage with JP25</td><td>PC2 (ADC1_4)</td></tr>
    <tr><td>6 to 9</td><td>Passed through</td><td>Not used</td><td>PF2, PI10, PH7, PB12</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Ground</td><td>GND</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>A controller socket</b><span>Prime header GH has analogue inputs on contacts 3, 4 and 5.</span></div>
  <div class="xb-card"><b>A ten-way cable</b><span>1.27&nbsp;mm Gadgeteer ribbon cable.</span></div>
  <div class="xb-card"><b>A magnet</b><span>Type and distance decide the signal size; try yours before fixing the mounting.</span></div>
  <div class="xb-card"><b>Your own driver</b><span>Code that reads one analogue input; none is supplied.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Minimum wiring">
<svg viewBox="0 0 1000 204" role="img" aria-labelledby="xb-hall-wire-t">
<title id="xb-hall-wire-t">Minimum wiring: contact 1 to contact 1, 3.3 V; PC3, contact 3 to contact 3, field voltage; contact 10 to contact 10, ground.</title>
<rect x="20" y="20" width="280" height="164" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="160.0" y="107.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea"></text>
<rect x="700" y="20" width="280" height="164" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="840.0" y="107.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea"></text>
<text x="160" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Prime header GH (J39)</text>
<text x="840" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Hall sensor J1</text>
<path d="M300 84H700" stroke="#ff9f43" stroke-width="3" fill="none"/><circle cx="300" cy="84" r="5" fill="#ff9f43"/><circle cx="700" cy="84" r="5" fill="#ff9f43"/><text x="286" y="89" text-anchor="end" font-size="13" fill="#eaeaea">contact 1</text><text x="714" y="89" font-size="13" fill="#eaeaea">contact 1</text><text x="500" y="77" text-anchor="middle" font-size="12" fill="#b3b3b3">3.3 V</text>
<path d="M300 122H700" stroke="#5fb3ff" stroke-width="3" fill="none"/><circle cx="300" cy="122" r="5" fill="#5fb3ff"/><circle cx="700" cy="122" r="5" fill="#5fb3ff"/><text x="286" y="127" text-anchor="end" font-size="13" fill="#eaeaea">PC3, contact 3</text><text x="714" y="127" font-size="13" fill="#eaeaea">contact 3</text><text x="500" y="115" text-anchor="middle" font-size="12" fill="#b3b3b3">field voltage</text>
<path d="M300 160H700" stroke="#b3b3b3" stroke-width="3" fill="none"/><circle cx="300" cy="160" r="5" fill="#b3b3b3"/><circle cx="700" cy="160" r="5" fill="#b3b3b3"/><text x="286" y="165" text-anchor="end" font-size="13" fill="#eaeaea">contact 10</text><text x="714" y="165" font-size="13" fill="#eaeaea">contact 10</text><text x="500" y="153" text-anchor="middle" font-size="12" fill="#b3b3b3">ground</text>
</svg>
  </div>
  <figcaption>Three connections as delivered.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Mount the board</h3>
    <p>Keep steel parts and motors away from the sensor, and fix the magnet so its path is repeatable.</p>
  </li>
  <li class="xb-step">
    <h3>Connect with the power off</h3>
    <p>Plug J1 into header GH.</p>
  </li>
  <li class="xb-step">
    <h3>Check the rest voltage</h3>
    <p>Power up with no magnet nearby and measure between the ground and output test points.</p>
    <p class="xb-expect">The data sheet gives 1.59 to 1.71&nbsp;V at 3.3&nbsp;V and 25&nbsp;&deg;C.</p>
  </li>
  <li class="xb-step">
    <h3>Bring the magnet close</h3>
    <p>Approach the top of the board above the marking SENSOR and watch the voltage.</p>
    <p class="xb-expect">By the data sheet a south pole raises the output and a north pole lowers it.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Read the field strength</td><td>None</td><td>No SmoothieV2 module reads a general analogue input</td></tr>
    <tr><td>Use it as an endstop</td><td>None</td><td>Use an endstop board with an on/off output</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

There is nothing to add to `config.ini`. The analogue contacts of header GH are `ADC1_5`, `ADC1_6` and `ADC1_4` in SmoothieV2.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
<svg viewBox="0 0 1000 110" role="img" aria-labelledby="xb-hall-how-t">
<title id="xb-hall-how-t">The sensor converts the magnetic field to a voltage, which a resistor and capacitor filter before the selector link.</title>
<rect x="20.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="120.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Magnet</text><text x="120.0" y="67.0" text-anchor="middle" font-size="12" fill="#b3b3b3">field through board</text>
<path d="M220.0 51H273.3" stroke="#b3b3b3" stroke-width="3"/><path d="M273.3 51l-9 -5v10z" fill="#b3b3b3"/>
<rect x="273.3" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="373.3" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">U1 DRV5055</text><text x="373.3" y="67.0" text-anchor="middle" font-size="12" fill="#b3b3b3">field to voltage</text>
<path d="M473.3 51H526.6" stroke="#b3b3b3" stroke-width="3"/><path d="M526.6 51l-9 -5v10z" fill="#b3b3b3"/>
<rect x="526.7" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="626.7" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">1 k + 100 nF</text><text x="626.7" y="67.0" text-anchor="middle" font-size="12" fill="#b3b3b3">filter</text>
<path d="M726.7 51H780.0" stroke="#b3b3b3" stroke-width="3"/><path d="M780.0 51l-9 -5v10z" fill="#b3b3b3"/>
<rect x="780.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="880.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">JP23 to JP25</text><text x="880.0" y="67.0" text-anchor="middle" font-size="12" fill="#b3b3b3">contact 3, 4 or 5</text>
</svg>
  </div>
  <figcaption>One signal path.</figcaption>
</figure>
{:/nomarkdown}

The output sits at half the supply with no field and moves about 15&nbsp;mV for each millitesla. Both the rest voltage and the sensitivity scale with the supply, and so does the controller&rsquo;s converter. Field strength falls steeply and non-linearly with distance, so calibrate with your own magnet if you want millimetres. Sensitivity also rises with temperature, about 0.12&nbsp;% per degree typically.

## Solder links {#options}

To move the sensor to contact 4: open JP23, close JP24, close JP3 so contact 3 passes on, and open JP4. For contact 5: open JP23, close JP25, close JP3 and open JP5.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Solder links">
<svg viewBox="0 0 1000 218" role="img" aria-labelledby="xb-hall-jp-t">
<title id="xb-hall-jp-t">Solder links as delivered: JP3 open; JP4 closed; JP5 closed; JP23 closed; JP24 open; JP25 open.</title>
<rect x="20" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="72" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="114" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="108" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP3 · open</text><text x="108" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">chain contact 3</text>
<rect x="216" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="268" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="310" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="294" y="34" width="20" height="10" fill="#e0b84a"/>
<text x="304" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP4 · closed</text><text x="304" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">chain contact 4</text>
<rect x="412" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="464" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="506" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="490" y="34" width="20" height="10" fill="#e0b84a"/>
<text x="500" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP5 · closed</text><text x="500" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">chain contact 5</text>
<rect x="608" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="660" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="702" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="686" y="34" width="20" height="10" fill="#e0b84a"/>
<text x="696" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP23 · closed</text><text x="696" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">output to contact 3</text>
<rect x="804" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="856" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="898" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="892" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP24 · open</text><text x="892" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">output to contact 4</text>
<rect x="20" y="114" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="72" y="128" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="114" y="128" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="108" y="176" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP25 · open</text><text x="108" y="194" text-anchor="middle" font-size="11" fill="#b3b3b3">output to contact 5</text>
</svg>
  </div>
  <figcaption>The links as delivered. Close one with a small blob of solder across both pads; open it by removing the solder or cutting the copper between the pads.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>What it does</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>JP3</td><td>Joins contact 3 to the chain socket</td><td>Open</td></tr>
    <tr><td>JP4</td><td>Joins contact 4 to the chain socket</td><td>Closed</td></tr>
    <tr><td>JP5</td><td>Joins contact 5 to the chain socket</td><td>Closed</td></tr>
    <tr><td>JP23</td><td>Puts the sensor on contact 3</td><td>Closed</td></tr>
    <tr><td>JP24</td><td>Puts the sensor on contact 4</td><td>Open</td></tr>
    <tr><td>JP25</td><td>Puts the sensor on contact 5</td><td>Open</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Chaining {#chaining}

Further analogue boards can share the socket, each on a different contact.

{::nomarkdown}
{% include _includes/extension-chain-figure.html id="xb-hall" board="Hall sensor board" in_label="A IN" chain_label="CHAIN" lane1="pin 3, sensor" lane2="pin 4, free" lane3="pin 5, free" s1="open" s2="closed" s3="closed" caption="As delivered, pin 3 stops here and pins 4 and 5 pass on." %}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>On CHAIN</th></tr></thead>
  <tbody>
    <tr><td>1, 2, 10</td><td>Power and ground</td><td>Passed on</td></tr>
    <tr><td>3</td><td>Sensor</td><td>Stopped by open JP3</td></tr>
    <tr><td>4, 5</td><td>Free analogue inputs</td><td>Passed on</td></tr>
    <tr><td>6 to 9</td><td>Free</td><td>Passed on</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Likely cause</th><th>What to check</th></tr></thead>
  <tbody>
    <tr><td>Output stays at 0 V</td><td>No selector closed, or no 3.3 V</td><td>Exactly one of JP23 to JP25 closed; test point 3.3 V</td></tr>
    <tr><td>No change with a magnet</td><td>Field parallel to the board, or magnet too weak or far</td><td>Turn a pole towards the top of the sensor and move closer</td></tr>
    <tr><td>Output moves the wrong way</td><td>Opposite pole facing the sensor</td><td>Turn the magnet over</td></tr>
    <tr><td>Output stuck near a rail</td><td>Field beyond the linear range</td><td>Move the magnet away or use a weaker one</td></tr>
    <tr><td>Reading shifts without the magnet moving</td><td>Nearby steel, motor fields or temperature</td><td>Relocate the board and calibrate in place</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The board has no indicator lights; measure at the test points.

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/hall-effect-sensor-board/hall-effect-sensor-board-schematic.pdf">Schematic (PDF)</a></td><td>The circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/hall-effect-sensor-board/hall-effect-sensor-board-bom.csv">Parts list (CSV)</a></td><td>Every component with its value, footprint and part number where one is chosen</td></tr>
    <tr><td><a href="/images/extensions/hall-effect-sensor-board/hall-effect-sensor-board-diagram.webp">Board drawing (WebP)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side. 

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-hall-mount-t">
  <title id="xb-hall-mount-t">Mounting drawing of the Hall sensor board, component side: outline 50 by 55 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="325.5" y="78.0" width="309.1" height="340.0" rx="6.2" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M325.5 56H634.5"/><path d="M325.5 50V62"/><path d="M634.5 50V62"/><path d="M660.5 78.0V418.0"/><path d="M654.5 78.0h12"/><path d="M654.5 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">50</text>
  <text x="672.5" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">55</text>
  <circle cx="325.5" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="313.5" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M267.5 104.0h30" fill="none"/><path d="M301.5 104.0l-8 -4v8z"/><path d="M267.5 104.0v30" fill="none"/><path d="M267.5 138.0l-4 -8h8z"/></g>
  <text x="305.5" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="263.5" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="356.4" cy="108.9" r="9.9" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M342.5 108.9h27.8M356.4 95.0v27.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="346.5" y="138.8" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.00</text>
  <circle cx="603.6" cy="108.9" r="9.9" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M589.7 108.9h27.8M603.6 95.0v27.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="613.5" y="138.8" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  45.00, 5.00</text>
  <circle cx="356.4" cy="356.2" r="9.9" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M342.5 356.2h27.8M356.4 342.3v27.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="346.5" y="336.3" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 45.00</text>
  <circle cx="603.6" cy="356.2" r="9.9" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M589.7 356.2h27.8M603.6 342.3v27.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="613.5" y="336.3" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">4</tspan>  45.00, 45.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 50 × 55&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>45.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>5.00</td><td>45.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>45.00</td><td>45.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Every figure is a design value, a calculated or simulated value, or a manufacturer&rsquo;s data sheet value, as the last column says. A dash means no figure is given.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis</th></tr></thead>
  <tbody>
    <tr><td>Supply voltage</td><td>J1 contact 1</td><td>3.0 V</td><td>3.3 V</td><td>3.63 V</td><td>TI data sheet, 3.3 V operating range</td></tr>
    <tr><td>Supply current</td><td>3.3 V</td><td>&mdash;</td><td>2 mA</td><td>4 mA</td><td>TI data sheet</td></tr>
    <tr><td>Output with no field</td><td>U1, 25 &deg;C</td><td>1.59 V</td><td>1.65 V</td><td>1.71 V</td><td>TI data sheet</td></tr>
    <tr><td>Sensitivity</td><td>U1</td><td>&mdash;</td><td>15 mV/mT</td><td>&mdash;</td><td>TI data sheet, A3 at 3.3 V</td></tr>
    <tr><td>Linear range</td><td>U1</td><td>&mdash;</td><td>&plusmn;88 mT</td><td>&mdash;</td><td>TI data sheet</td></tr>
    <tr><td>Linear output swing</td><td>U1</td><td>0.2 V</td><td>&mdash;</td><td>3.1 V</td><td>TI data sheet</td></tr>
    <tr><td>Filter corner</td><td>Selected contact</td><td>&mdash;</td><td>1.6 kHz</td><td>&mdash;</td><td>Calculated and simulated</td></tr>
    <tr><td>Settling after a field step</td><td>Selected contact</td><td>&mdash;</td><td>0.46 ms</td><td>&mdash;</td><td>Simulated</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Component stress limits

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Part</th><th>Limit</th><th>Use on this board</th></tr></thead>
  <tbody>
    <tr><td>Sensor supply</td><td>7 V absolute maximum</td><td>3.3 V</td></tr>
    <tr><td>Sensor output current</td><td>&plusmn;1 mA</td><td>Limited by controller input; keep the load high</td></tr>
    <tr><td>Capacitors</td><td>16 V</td><td>3.3 V</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: simulation {#simulation}

The output filter was simulated with ngspice with a 0.9&nbsp;V step, as a sudden field change would produce.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Simulated results against limits">
<svg viewBox="0 0 1000 134" role="img" aria-labelledby="xb-hall-sim-t">
<title id="xb-hall-sim-t">Each simulated value (yellow mark) against its allowed range (green band).</title>
<text x="385" y="41" text-anchor="end" font-size="13" fill="#eaeaea">Settling after a field step</text>
<path d="M400 36H860" stroke="#404040" stroke-width="10" stroke-linecap="round"/><path d="M400.0 36H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M590.1 23v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="41" font-size="13" font-weight="700" fill="#ffcc33">0.46&nbsp;ms</text>
<text x="385" y="93" text-anchor="end" font-size="13" fill="#eaeaea">Filter corner frequency</text>
<path d="M400 88H860" stroke="#404040" stroke-width="10" stroke-linecap="round"/><path d="M444.5 88H815.5" stroke="#2f8f5b" stroke-width="10"/><path d="M664.0 75v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="93" font-size="13" font-weight="700" fill="#ffcc33">1.6&nbsp;kHz</text>
</svg>
  </div>
  <figcaption>Simulated value (yellow) against the limit used for it (green). Each bar has its own scale.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Result</th><th>Simulated value</th><th>Limit</th><th>Outcome</th></tr></thead>
  <tbody>
    <tr><td>Settling after a field step</td><td>0.46&nbsp;ms</td><td>at most 1&nbsp;ms</td><td>Within</td></tr>
    <tr><td>Filter corner frequency</td><td>1.6&nbsp;kHz</td><td>1&nbsp;kHz to 2&nbsp;kHz</td><td>Within</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Not simulated: the magnetic response, offset and temperature drift, because no sensor model is available.

## Appendix: datasheet {#datasheets}

The first page of the manufacturer data sheet. Click the page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/hall-effect-sensor-board/datasheets/ti-drv5055.pdf"><img src="/images/extensions/hall-effect-sensor-board/datasheets/ti-drv5055-page1.png" alt="First page of the DRV5055 ratiometric linear Hall effect sensor datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/hall-effect-sensor-board/datasheets/ti-drv5055.pdf">DRV5055 ratiometric linear Hall effect sensor</a> — Texas Instruments, 35 pages.</figcaption>
</figure>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
