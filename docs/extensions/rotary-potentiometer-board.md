---
layout: default
title: "Rotary potentiometer"
description: "One 10 kOhm rotary potentiometer on a selectable analogue contact of a chainable Gadgeteer socket: pinout, wiring, links, limits and files."
permalink: /extensions/rotary-potentiometer-board
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Controls and displays</p>
    <h1 id="rotary-potentiometer-board">Rotary potentiometer</h1>
    <p class="xb-lead">One knob that gives the controller a voltage between 0 and 3.3&nbsp;V. Solder links choose which of three analogue contacts it uses, so up to three of these boards can share one socket. No firmware module reads a general analogue input yet, so using the value takes your own driver.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/rotary-potentiometer-board/rotary-potentiometer-board-diagram.png" alt="Top view of the rotary potentiometer board: a ten-contact socket on the left and right edges and the potentiometer below the middle.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>
<div class="xb-stats">
  <div class="xb-stat"><b>1 knob</b><span>Bourns PTV09A, 10&nbsp;k&Omega; linear</span></div>
  <div class="xb-stat"><b>0 to 3.3 V</b><span>ratiometric output</span></div>
  <div class="xb-stat"><b>280&deg;</b><span>mechanical angle, &plusmn;10&deg;</span></div>
  <div class="xb-stat"><b>3 contacts</b><span>selectable: 3, 4 or 5</span></div>
  <div class="xb-stat"><b>2 sockets</b><span>type A input and chain</span></div>
  <div class="xb-stat"><b>50 &times; 50</b><span>millimetres, four M3 holes</span></div>
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
    <tr><td>Purpose</td><td>A manual override knob, for example for a feed rate or fan speed in your own software</td></tr>
    <tr><td>Control</td><td>Bourns PTV09A vertical series, 10&nbsp;k&Omega; linear taper; choose the shaft and detent when ordering</td></tr>
    <tr><td>Output</td><td>0 to 3.3&nbsp;V through 1&nbsp;k&Omega;, with 100&nbsp;nF to ground</td></tr>
    <tr><td>Supply</td><td>3.3&nbsp;V from the socket, about 0.33&nbsp;mA</td></tr>
    <tr><td>Sockets</td><td>Two 10-contact Gadgeteer type A sockets (Samtec SHF-105, 1.27&nbsp;mm): input and chain</td></tr>
    <tr><td>Test points</td><td>On the underside: 3.3&nbsp;V, ground and wiper</td></tr>
    <tr><td>Size</td><td>50 &times; 50&nbsp;mm, four M3 mounting holes</td></tr>
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
      <img src="/images/extensions/rotary-potentiometer-board/rotary-potentiometer-board-diagram.png" alt="Top view of the rotary potentiometer board with 8 numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:10.8%;top:44.2%" aria-label="1: input socket a in (j1)">1<span class="xb-pop"><b>Input socket A IN (J1)</b> — The type A socket to the controller. As delivered the knob is on contact 3.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-2" style="left:89.2%;top:44.2%" aria-label="2: chain socket chain (j2)">2<span class="xb-pop"><b>Chain socket CHAIN (J2)</b> — Passes the other contacts to the next board.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:36.5%;top:69.2%" aria-label="3: potentiometer (rv1)">3<span class="xb-pop"><b>Potentiometer (RV1)</b> — The wiper voltage rises from 0 to 3.3&nbsp;V over its travel.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:40.4%;top:34.6%" aria-label="4: series resistor (r1)">4<span class="xb-pop"><b>Series resistor (R1)</b> — 1&nbsp;k&Omega; in the wiper path; it also limits current if two boards drive one contact by mistake.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:51.9%;top:34.6%" aria-label="5: filter capacitor (c1)">5<span class="xb-pop"><b>Filter capacitor (C1)</b> — 100&nbsp;nF to ground, smoothing the wiper signal.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:65.4%;top:32.7%" aria-label="6: contact selectors (jp23 to jp25)">6<span class="xb-pop"><b>Contact selectors (JP23 to JP25)</b> — Close exactly one: it sends the knob to contact 3, 4 or 5. JP23 is closed as delivered.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:26.9%;top:32.7%" aria-label="7: chain links (jp3 to jp5)">7<span class="xb-pop"><b>Chain links (JP3 to JP5)</b> — Connect contacts 3, 4 and 5 on to the chain socket. JP3 is open, JP4 and JP5 closed as delivered.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-8" style="left:11.5%;top:11.5%" aria-label="8: mounting hole">8<span class="xb-pop"><b>Mounting hole</b> — One of four M3 holes, not connected to ground.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Input socket A IN (J1)</b> — The type A socket to the controller. As delivered the knob is on contact 3.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket CHAIN (J2)</b> — Passes the other contacts to the next board.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Potentiometer (RV1)</b> — The wiper voltage rises from 0 to 3.3&nbsp;V over its travel.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Series resistor (R1)</b> — 1&nbsp;k&Omega; in the wiper path; it also limits current if two boards drive one contact by mistake.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Filter capacitor (C1)</b> — 100&nbsp;nF to ground, smoothing the wiper signal.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Contact selectors (JP23 to JP25)</b> — Close exactly one: it sends the knob to contact 3, 4 or 5. JP23 is closed as delivered.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Chain links (JP3 to JP5)</b> — Connect contacts 3, 4 and 5 on to the chain socket. JP3 is open, JP4 and JP5 closed as delivered.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Mounting hole</b> — One of four M3 holes, not connected to ground.</div></li>
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
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Potentiometer supply</td><td>3.3 V</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Passed to the chain only</td><td>5 V</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">WIPER</span></td><td>Knob voltage as delivered (JP23)</td><td>PC3 (ADC1_5)</td></tr>
    <tr><td>4</td><td>Selectable</td><td>Knob voltage with JP24</td><td>PA3 (ADC1_6)</td></tr>
    <tr><td>5</td><td>Selectable</td><td>Knob voltage with JP25</td><td>PC2 (ADC1_4)</td></tr>
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
  <div class="xb-card"><b>A knob</b><span>To suit the shaft of the potentiometer you order.</span></div>
  <div class="xb-card"><b>Your own driver</b><span>Code that reads one analogue input; none is supplied.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Minimum wiring">
<svg viewBox="0 0 1000 204" role="img" aria-labelledby="xb-rpot-wire-t">
<title id="xb-rpot-wire-t">Minimum wiring: contact 1 to contact 1, 3.3 V; PC3, contact 3 to contact 3, knob voltage; contact 10 to contact 10, ground.</title>
<rect x="20" y="20" width="280" height="164" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="160.0" y="107.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea"></text>
<rect x="700" y="20" width="280" height="164" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="840.0" y="107.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea"></text>
<text x="160" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Prime header GH (J39)</text>
<text x="840" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Potentiometer J1</text>
<path d="M300 84H700" stroke="#ff9f43" stroke-width="3" fill="none"/><circle cx="300" cy="84" r="5" fill="#ff9f43"/><circle cx="700" cy="84" r="5" fill="#ff9f43"/><text x="286" y="89" text-anchor="end" font-size="13" fill="#eaeaea">contact 1</text><text x="714" y="89" font-size="13" fill="#eaeaea">contact 1</text><text x="500" y="77" text-anchor="middle" font-size="12" fill="#b3b3b3">3.3 V</text>
<path d="M300 122H700" stroke="#5fb3ff" stroke-width="3" fill="none"/><circle cx="300" cy="122" r="5" fill="#5fb3ff"/><circle cx="700" cy="122" r="5" fill="#5fb3ff"/><text x="286" y="127" text-anchor="end" font-size="13" fill="#eaeaea">PC3, contact 3</text><text x="714" y="127" font-size="13" fill="#eaeaea">contact 3</text><text x="500" y="115" text-anchor="middle" font-size="12" fill="#b3b3b3">knob voltage</text>
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
    <p>Use the four M3 holes. A panel needs a hole for the shaft and spacers to suit its height.</p>
  </li>
  <li class="xb-step">
    <h3>Connect with the power off</h3>
    <p>Plug J1 into header GH. Never feed the potentiometer from 5&nbsp;V.</p>
  </li>
  <li class="xb-step">
    <h3>Check the output</h3>
    <p>Power up and measure between the ground and wiper test points while turning the knob.</p>
    <p class="xb-expect">By design the voltage moves smoothly between about 0 and 3.3&nbsp;V. Note which end of travel gives 0&nbsp;V.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Read the knob position</td><td>None</td><td>No SmoothieV2 module reads a general analogue input</td></tr>
    <tr><td>Use it as a speed override</td><td>None</td><td>Needs your own driver or host script</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

There is nothing to add to `config.ini`. The analogue contacts of header GH are `ADC1_5`, `ADC1_6` and `ADC1_4` in SmoothieV2.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
<svg viewBox="0 0 1000 110" role="img" aria-labelledby="xb-rpot-how-t">
<title id="xb-rpot-how-t">The potentiometer divides the 3.3 V supply; a resistor and capacitor filter the wiper before the selector link.</title>
<rect x="20.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="120.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">3.3 V</text><text x="120.0" y="67.0" text-anchor="middle" font-size="12" fill="#b3b3b3">across the element</text>
<path d="M220.0 51H273.3" stroke="#b3b3b3" stroke-width="3"/><path d="M273.3 51l-9 -5v10z" fill="#b3b3b3"/>
<rect x="273.3" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="373.3" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">RV1</text><text x="373.3" y="67.0" text-anchor="middle" font-size="12" fill="#b3b3b3">position sets ratio</text>
<path d="M473.3 51H526.6" stroke="#b3b3b3" stroke-width="3"/><path d="M526.6 51l-9 -5v10z" fill="#b3b3b3"/>
<rect x="526.7" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="626.7" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">1 k + 100 nF</text><text x="626.7" y="67.0" text-anchor="middle" font-size="12" fill="#b3b3b3">filter</text>
<path d="M726.7 51H780.0" stroke="#b3b3b3" stroke-width="3"/><path d="M780.0 51l-9 -5v10z" fill="#b3b3b3"/>
<rect x="780.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="880.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">JP23 to JP25</text><text x="880.0" y="67.0" text-anchor="middle" font-size="12" fill="#b3b3b3">contact 3, 4 or 5</text>
</svg>
  </div>
  <figcaption>One signal path, no active parts.</figcaption>
</figure>
{:/nomarkdown}

The wiper gives a fraction of the 3.3&nbsp;V supply that follows the knob. The controller&rsquo;s converter measures against the same rail, so the reading depends on position, not on the exact voltage. A controller input draws very little current: with a 1&nbsp;M&Omega; load the simulated error is below 0.2&nbsp;% of the range.

## Solder links {#options}

To move the knob to contact 4: open JP23, close JP24, close JP3 so contact 3 passes on, and open JP4. For contact 5: open JP23, close JP25, close JP3 and open JP5. Every board in one chain must use a different contact.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Solder links">
<svg viewBox="0 0 1000 218" role="img" aria-labelledby="xb-rpot-jp-t">
<title id="xb-rpot-jp-t">Solder links as delivered: JP3 open; JP4 closed; JP5 closed; JP23 closed; JP24 open; JP25 open.</title>
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
<text x="696" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP23 · closed</text><text x="696" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">knob to contact 3</text>
<rect x="804" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="856" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="898" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="892" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP24 · open</text><text x="892" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">knob to contact 4</text>
<rect x="20" y="114" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="72" y="128" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="114" y="128" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="108" y="176" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP25 · open</text><text x="108" y="194" text-anchor="middle" font-size="11" fill="#b3b3b3">knob to contact 5</text>
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
    <tr><td>JP23</td><td>Puts the knob on contact 3</td><td>Closed</td></tr>
    <tr><td>JP24</td><td>Puts the knob on contact 4</td><td>Open</td></tr>
    <tr><td>JP25</td><td>Puts the knob on contact 5</td><td>Open</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Chaining {#chaining}

Up to three analogue boards of this kind can share one socket, each on its own contact.

{::nomarkdown}
{% include _includes/extension-chain-figure.html id="xb-rpot" board="rotary potentiometer board" in_label="A IN" chain_label="CHAIN" lane1="pin 3, knob" lane2="pin 4, free" lane3="pin 5, free" s1="open" s2="closed" s3="closed" caption="As delivered, pin 3 stops here and pins 4 and 5 pass on." %}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>On CHAIN</th></tr></thead>
  <tbody>
    <tr><td>1, 2, 10</td><td>Power and ground</td><td>Passed on</td></tr>
    <tr><td>3</td><td>Knob</td><td>Stopped by open JP3</td></tr>
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
    <tr><td>Two knobs move one reading</td><td>Both boards on the same contact</td><td>Give each board its own contact</td></tr>
    <tr><td>Knob not seen by the next board</td><td>Chain link still closed on the used contact</td><td>Open the chain link of the contact this board uses</td></tr>
    <tr><td>Reading is noisy</td><td>Long cable or motor interference</td><td>Shorten the cable, route it away from motor wires, average in software</td></tr>
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
    <tr><td><a href="/images/extensions/rotary-potentiometer-board/rotary-potentiometer-board-schematic.pdf">Schematic (PDF)</a></td><td>The circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/rotary-potentiometer-board/rotary-potentiometer-board-bom.csv">Parts list (CSV)</a></td><td>Every component with its value, footprint and part number where one is chosen</td></tr>
    <tr><td><a href="/images/extensions/rotary-potentiometer-board/rotary-potentiometer-board-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side. 

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-rpot-mount-t">
  <title id="xb-rpot-mount-t">Mounting drawing of the rotary potentiometer board, component side: outline 50 by 50 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="310.0" y="78.0" width="340.0" height="340.0" rx="6.8" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M310.0 56H650.0"/><path d="M310.0 50V62"/><path d="M650.0 50V62"/><path d="M676.0 78.0V418.0"/><path d="M670.0 78.0h12"/><path d="M670.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">50</text>
  <text x="688.0" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">50</text>
  <circle cx="310.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="298.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M252.0 104.0h30" fill="none"/><path d="M286.0 104.0l-8 -4v8z"/><path d="M252.0 104.0v30" fill="none"/><path d="M252.0 138.0l-4 -8h8z"/></g>
  <text x="290.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="248.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="344.0" cy="112.0" r="10.9" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M329.1 112.0h29.8M344.0 97.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="333.1" y="142.9" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.00</text>
  <circle cx="616.0" cy="112.0" r="10.9" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M601.1 112.0h29.8M616.0 97.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="626.9" y="142.9" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  45.00, 5.00</text>
  <circle cx="344.0" cy="384.0" r="10.9" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M329.1 384.0h29.8M344.0 369.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="333.1" y="363.1" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 45.00</text>
  <circle cx="616.0" cy="384.0" r="10.9" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M601.1 384.0h29.8M616.0 369.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="626.9" y="363.1" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">4</tspan>  45.00, 45.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 50 × 50&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
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
    <tr><td>Supply voltage</td><td>J1 contact 1</td><td>&mdash;</td><td>3.3 V</td><td>&mdash;</td><td>Design</td></tr>
    <tr><td>Element resistance</td><td>RV1</td><td>8 k&Omega;</td><td>10 k&Omega;</td><td>12 k&Omega;</td><td>Bourns data sheet, &plusmn;20 %</td></tr>
    <tr><td>Supply current</td><td>3.3 V</td><td>&mdash;</td><td>0.33 mA</td><td>0.41 mA</td><td>Calculated</td></tr>
    <tr><td>Output voltage</td><td>Selected contact</td><td>0 V</td><td>&mdash;</td><td>3.3 V</td><td>Design; end resistance leaves a small offset</td></tr>
    <tr><td>Mechanical angle</td><td>Shaft</td><td>270&deg;</td><td>280&deg;</td><td>290&deg;</td><td>Bourns data sheet</td></tr>
    <tr><td>Rotational life</td><td>RV1</td><td>&mdash;</td><td>10 000 cycles</td><td>&mdash;</td><td>Bourns data sheet</td></tr>
    <tr><td>Operating temperature</td><td>RV1</td><td>&minus;10 &deg;C</td><td>&mdash;</td><td>+50 &deg;C</td><td>Bourns data sheet</td></tr>
    <tr><td>Settling to within 1.4 %</td><td>Selected contact</td><td>&mdash;</td><td>1.6 ms</td><td>&mdash;</td><td>Simulated</td></tr>
    <tr><td>Loading error, 1 M&Omega; input</td><td>Selected contact</td><td>&mdash;</td><td>0.17 %</td><td>&mdash;</td><td>Simulated</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Component stress limits

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Part</th><th>Limit</th><th>Use on this board</th></tr></thead>
  <tbody>
    <tr><td>Element power</td><td>0.05 W</td><td>About 1.1 mW (calculated)</td></tr>
    <tr><td>Element voltage</td><td>20 V DC</td><td>3.3 V</td></tr>
    <tr><td>Filter capacitor</td><td>16 V</td><td>3.3 V</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: simulation {#simulation}

The wiper filter was simulated with ngspice at mid travel, where the potentiometer&rsquo;s source resistance is highest, with a 1&nbsp;M&Omega; input load.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Simulated results against limits">
<svg viewBox="0 0 1000 134" role="img" aria-labelledby="xb-rpot-sim-t">
<title id="xb-rpot-sim-t">Each simulated value (yellow mark) against its allowed range (green band).</title>
<text x="385" y="41" text-anchor="end" font-size="13" fill="#eaeaea">Settling to within 1.4 % after a step</text>
<path d="M400 36H860" stroke="#404040" stroke-width="10" stroke-linecap="round"/><path d="M400.0 36H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M531.4 23v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="41" font-size="13" font-weight="700" fill="#ffcc33">1.6&nbsp;ms</text>
<text x="385" y="93" text-anchor="end" font-size="13" fill="#eaeaea">Loading error with a 1 Mohm input, percent of range</text>
<path d="M400 88H860" stroke="#404040" stroke-width="10" stroke-linecap="round"/><path d="M400.0 88H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M543.3 75v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="93" font-size="13" font-weight="700" fill="#ffcc33">0.17&nbsp;%</text>
</svg>
  </div>
  <figcaption>Simulated value (yellow) against the limit used for it (green). Each bar has its own scale.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Result</th><th>Simulated value</th><th>Limit</th><th>Outcome</th></tr></thead>
  <tbody>
    <tr><td>Settling to within 1.4 % after a step</td><td>1.6&nbsp;ms</td><td>at most 5&nbsp;ms</td><td>Within</td></tr>
    <tr><td>Loading error with a 1 Mohm input, percent of range</td><td>0.17&nbsp;%</td><td>at most 0.5&nbsp;%</td><td>Within</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Not simulated: the element&rsquo;s linearity, noise and wear, and the controller&rsquo;s input sampling.

## Appendix: datasheet {#datasheets}

The first page of the manufacturer data sheet. Click the page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/rotary-potentiometer-board/datasheets/bourns-ptv09.pdf"><img src="/images/extensions/rotary-potentiometer-board/datasheets/bourns-ptv09-page1.png" alt="First page of the PTV09 series 9 mm potentiometer datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/rotary-potentiometer-board/datasheets/bourns-ptv09.pdf">PTV09 series 9 mm potentiometer</a> — Bourns, 5 pages.</figcaption>
</figure>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
