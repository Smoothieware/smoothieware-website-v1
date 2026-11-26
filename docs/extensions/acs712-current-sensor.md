---
layout: default
title: "ACS712 current sensor"
description: "A 20 A Hall-effect current sensor for low-voltage DC circuits on a Gadgeteer analog socket: wiring, scaling, limits, hazards and files."
permalink: /extensions/acs712-current-sensor
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Sensors and inputs</p>
    <h1 id="acs712-current-sensor">ACS712 current sensor</h1>
    <p class="xb-lead">Measures the current in a low-voltage DC wire, such as a spindle or heater supply, and reports it as a voltage the controller can read. The measured circuit stays isolated from the signal side inside the sensor.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/acs712-current-sensor/acs712-current-sensor-diagram.png" alt="Top view of the current sensor board: a two-way screw terminal beside a wide copper path to the sensor, and a socket on each short edge of the signal side.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>
<div class="xb-stats">
  <div class="xb-stat"><b>&plusmn;20 A</b><span>sensor range</span></div>
  <div class="xb-stat"><b>15 A</b><span>continuous design target</span></div>
  <div class="xb-stat"><b>30 V DC</b><span>maximum measured circuit</span></div>
  <div class="xb-stat"><b>64.3 mV/A</b><span>at the controller pin</span></div>
  <div class="xb-stat"><b>1.61 V</b><span>output at zero current</span></div>
  <div class="xb-stat"><b>60 &times; 40</b><span>millimetres, four M3 holes</span></div>
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
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>High current hazard.</strong> A loose terminal or thin wire can overheat and start a fire. Never connect mains or any circuit above 30&nbsp;V DC. Fuse the measured circuit at 15&nbsp;A or less.
</sl-alert>
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Do not rely on this reading as the only overcurrent protection.
</sl-alert>
{:/nomarkdown}

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>Watching the current of a 12 or 24&nbsp;V load, or detecting a stalled or open load</td></tr>
    <tr><td>Sensor</td><td>Allegro ACS712ELCTR-20A-T, 1.2&nbsp;m&Omega; path, 100&nbsp;mV/A nominal (96 to 104)</td></tr>
    <tr><td>Outputs</td><td>Contact 3: current signal; contact 4: monitor of the 5&nbsp;V supply, both scaled by 18/28</td></tr>
    <tr><td>Bandwidth</td><td>About 2.5&nbsp;kHz</td></tr>
    <tr><td>Supply</td><td>4.5 to 5.5&nbsp;V from the socket, about 10&nbsp;mA</td></tr>
    <tr><td>Connectors</td><td>Two-way 5&nbsp;mm screw terminal in series with one conductor; two Gadgeteer type A sockets</td></tr>
    <tr><td>Size</td><td>60 &times; 40&nbsp;mm, four M3 holes on a 50 &times; 30&nbsp;mm pattern; 2&nbsp;oz copper recommended</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> header GH electrically; no firmware module scales the reading</td></tr>
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
      <img src="/images/extensions/acs712-current-sensor/acs712-current-sensor-diagram.png" alt="Top view of the current sensor board with 10 numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:16.1%;top:44.0%" aria-label="1: current terminal (j3)">1<span class="xb-pop"><b>Current terminal (J3)</b> — One wire of the measured circuit goes in at IN and leaves at OUT.</span></a>
      <a class="xb-mk" href="#tour-2" style="left:45.2%;top:50.0%" aria-label="2: current sensor (u1)">2<span class="xb-pop"><b>Current sensor (U1)</b> — Current flows through one side; the signal leaves isolated on the other.</span></a>
      <a class="xb-mk xb-pb" href="#tour-3" style="left:69.4%;top:14.3%" aria-label="3: input socket a in (j1)">3<span class="xb-pop"><b>Input socket A IN (J1)</b> — Current on contact 3, supply monitor on 4.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:69.4%;top:85.7%" aria-label="4: chain socket chain (j2)">4<span class="xb-pop"><b>Chain socket CHAIN (J2)</b> — Contacts 5 to 9 pass through.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:64.5%;top:51.2%" aria-label="5: signal divider (r1, r2)">5<span class="xb-pop"><b>Signal divider (R1, R2)</b> — 10&nbsp;k&Omega; and 18&nbsp;k&Omega;, 0.1&nbsp;%.</span></a>
      <a class="xb-mk xb-pr" href="#tour-6" style="left:77.4%;top:51.2%" aria-label="6: monitor divider (r3, r4)">6<span class="xb-pop"><b>Monitor divider (R3, R4)</b> — Reports the 5&nbsp;V rail with the same ratio.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:56.5%;top:52.4%" aria-label="7: filter capacitor (c3)">7<span class="xb-pop"><b>Filter capacitor (C3)</b> — Sets the sensor bandwidth.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:56.5%;top:40.5%" aria-label="8: supply capacitors (c1, c2)">8<span class="xb-pop"><b>Supply capacitors (C1, C2)</b> — On the sensor 5&nbsp;V.</span></a>
      <a class="xb-mk xb-pb" href="#tour-9" style="left:54.8%;top:27.4%" aria-label="9: chain links (jp3, jp4)">9<span class="xb-pop"><b>Chain links (JP3, JP4)</b> — Open as delivered.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-10" style="left:9.7%;top:14.3%" aria-label="10: mounting hole">10<span class="xb-pop"><b>Mounting hole</b> — One of four M3 holes. Keep hardware clear of the current copper.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Current terminal (J3)</b> — One wire of the measured circuit goes in at IN and leaves at OUT.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Current sensor (U1)</b> — Current flows through one side; the signal leaves isolated on the other.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Input socket A IN (J1)</b> — Current on contact 3, supply monitor on 4.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Chain socket CHAIN (J2)</b> — Contacts 5 to 9 pass through.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Signal divider (R1, R2)</b> — 10&nbsp;k&Omega; and 18&nbsp;k&Omega;, 0.1&nbsp;%.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Monitor divider (R3, R4)</b> — Reports the 5&nbsp;V rail with the same ratio.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Filter capacitor (C3)</b> — Sets the sensor bandwidth.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Supply capacitors (C1, C2)</b> — On the sensor 5&nbsp;V.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Chain links (JP3, JP4)</b> — Open as delivered.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Mounting hole</b> — One of four M3 holes. Keep hardware clear of the current copper.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

The terminal side and the socket side must never be connected to each other.

### J3: measured conductor

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Terminal</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>IN</td><td>From the supply side. Current entering here reads positive</td></tr>
    <tr><td>OUT</td><td>To the load side</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J1: input socket (A IN)

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>Use</th><th>Prime header GH</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Passed to the chain</td><td>3.3 V</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Sensor supply</td><td>5 V</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">I_OUT</span></td><td>Current signal</td><td>PC3 (ADC1_5)</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">V_MON</span></td><td>5 V monitor</td><td>PA3 (ADC1_6)</td></tr>
    <tr><td>5 to 9</td><td>Passed through</td><td>Not used</td><td>PC2, PF2, PI10, PH7, PB12</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Signal ground</td><td>GND</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>A DC circuit of 30 V or less</b><span>Fused at 15&nbsp;A or less.</span></div>
  <div class="xb-card"><b>Heavy wire and ferrules</b><span>Rated for the current; up to the terminal&rsquo;s limit.</span></div>
  <div class="xb-card"><b>Two analog inputs</b><span>Prime header GH contacts 3 and 4.</span></div>
  <div class="xb-card"><b>A multimeter</b><span>To record the zero reading and check the scale.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Minimum wiring">
<svg viewBox="0 0 1000 166" role="img" aria-labelledby="xb-amps-wire-t">
<title id="xb-amps-wire-t">Minimum wiring: supply +, after fuse to IN, current in; to load + to OUT, current out.</title>
<rect x="20" y="20" width="280" height="126" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="160.0" y="88.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2"></text>
<rect x="700" y="20" width="280" height="126" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="840.0" y="88.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2"></text>
<text x="160" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Measured circuit</text>
<text x="840" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Terminal J3</text>
<path d="M300 84H700" stroke="#ff9f43" stroke-width="3" fill="none"/><circle cx="300" cy="84" r="5" fill="#ff9f43"/><circle cx="700" cy="84" r="5" fill="#ff9f43"/><text x="286" y="89" text-anchor="end" font-size="13" fill="#e6ebf2">supply +, after fuse</text><text x="714" y="89" font-size="13" fill="#e6ebf2">IN</text><text x="500" y="77" text-anchor="middle" font-size="12" fill="#a9b4c2">current in</text>
<path d="M300 122H700" stroke="#ff9f43" stroke-width="3" fill="none"/><circle cx="300" cy="122" r="5" fill="#ff9f43"/><circle cx="700" cy="122" r="5" fill="#ff9f43"/><text x="286" y="127" text-anchor="end" font-size="13" fill="#e6ebf2">to load +</text><text x="714" y="127" font-size="13" fill="#e6ebf2">OUT</text><text x="500" y="115" text-anchor="middle" font-size="12" fill="#a9b4c2">current out</text>
</svg>
  </div>
  <figcaption>Only one conductor passes through the board. Never connect both supply poles to J3.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Remove all power</h3>
    <p>Switch off and discharge the measured circuit and the controller.</p>
  </li>
  <li class="xb-step">
    <h3>Insert the board</h3>
    <p>Break one conductor; supply side to IN, load side to OUT. Tighten firmly and relieve strain.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the signal side</h3>
    <p>Plug J1 into header GH.</p>
  </li>
  <li class="xb-step">
    <h3>Read zero</h3>
    <p>Power the controller with the load off and measure test points I_OUT and V_MON.</p>
    <p class="xb-expect">By design about 1.61&nbsp;V and 3.21&nbsp;V.</p>
  </li>
  <li class="xb-step">
    <h3>Check with load</h3>
    <p>Apply a known current and compare. Watch the temperature of terminals and copper on the first long run.</p>
    <p class="xb-expect">I_OUT should rise by about 0.064&nbsp;V per ampere.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Show amperes</td><td>None</td><td>No SmoothieV2 module scales this sensor</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

There is nothing to add to `config.ini`. Your own software computes the current as `(V3 - zero) / (0.0643 * V4 / 3.214)`, where `V3` and `V4` are the voltages on contacts 3 and 4 and `zero` is the contact 3 reading at no current, scaled the same way.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
<svg viewBox="0 0 1000 200" role="img" aria-labelledby="xb-amps-how-t">
<title id="xb-amps-how-t">Current through the sensor makes a magnetic field that is turned into a scaled voltage.</title>
<rect x="20.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="120.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J3 IN</text><text x="120.0" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">measured current</text>
<path d="M220.0 51H400.0" stroke="#a9b4c2" stroke-width="3"/><path d="M400.0 51l-9 -5v10z" fill="#a9b4c2"/>
<rect x="400.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="500.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">U1 path</text><text x="500.0" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">1.2 milliohm</text>
<path d="M600.0 51H780.0" stroke="#a9b4c2" stroke-width="3"/><path d="M780.0 51l-9 -5v10z" fill="#a9b4c2"/>
<rect x="780.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="880.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J3 OUT</text><text x="880.0" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">to load</text>
<rect x="20.0" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="120.0" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">U1 Hall</text><text x="120.0" y="157.0" text-anchor="middle" font-size="12" fill="#a9b4c2">isolated</text>
<path d="M220.0 141H400.0" stroke="#a9b4c2" stroke-width="3"/><path d="M400.0 141l-9 -5v10z" fill="#a9b4c2"/>
<rect x="400.0" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="500.0" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">10 k / 18 k</text><text x="500.0" y="157.0" text-anchor="middle" font-size="12" fill="#a9b4c2">scale</text>
<path d="M600.0 141H780.0" stroke="#a9b4c2" stroke-width="3"/><path d="M780.0 141l-9 -5v10z" fill="#a9b4c2"/>
<rect x="780.0" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="880.0" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J1.3</text><text x="880.0" y="157.0" text-anchor="middle" font-size="12" fill="#a9b4c2">to ADC</text>
</svg>
  </div>
  <figcaption>Power path above, signal path below.</figcaption>
</figure>
{:/nomarkdown}

The sensor senses the magnetic field of the current in its internal conductor, so no electrical connection exists between the two sides. Its output sits at half the 5&nbsp;V supply and moves by 100&nbsp;mV per ampere. The divider keeps it under 3.3&nbsp;V even if it reaches the supply rail. Because both zero and scale follow the 5&nbsp;V supply, the second divider lets software correct for it.

## Solder links {#options}

Leave both links open unless another board is meant to read the same signals.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Solder links">
<svg viewBox="0 0 1000 114" role="img" aria-labelledby="xb-amps-jp-t">
<title id="xb-amps-jp-t">Solder links as delivered: JP3 open; JP4 open.</title>
<rect x="20" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="72" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="114" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="108" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP3 · open</text><text x="108" y="90" text-anchor="middle" font-size="11" fill="#a9b4c2">chain contact 3</text>
<rect x="216" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="268" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="310" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="304" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP4 · open</text><text x="304" y="90" text-anchor="middle" font-size="11" fill="#a9b4c2">chain contact 4</text>
</svg>
  </div>
  <figcaption>The links as delivered. Close one with a small blob of solder across both pads; open it by removing the solder or cutting the copper between the pads.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>What it does</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>JP3</td><td>Joins the current signal to the chain</td><td>Open</td></tr>
    <tr><td>JP4</td><td>Joins the monitor to the chain</td><td>Open</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Chaining {#chaining}

Contacts 5 to 9 are free for a further board.

{::nomarkdown}
{% include _includes/extension-chain-figure.html id="xb-amps" board="current sensor board" in_label="A IN" chain_label="CHAIN" lane1="pin 3, current" lane2="pin 4, monitor" lane3="pin 5, free" s1="open" s2="open" s3="closed" caption="The two signals stop here; pin 5 is wired straight through." %}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>On CHAIN</th></tr></thead>
  <tbody>
    <tr><td>1, 2, 10</td><td>Power and ground</td><td>Passed on</td></tr>
    <tr><td>3, 4</td><td>Signals</td><td>Stopped by open links</td></tr>
    <tr><td>5 to 9</td><td>Free</td><td>Passed on</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Likely cause</th><th>What to check</th></tr></thead>
  <tbody>
    <tr><td>Reading stuck near zero volts</td><td>No 5 V</td><td>Test point +5V</td></tr>
    <tr><td>Zero is not exactly 1.61 V</td><td>5 V tolerance and sensor offset</td><td>Record the zero and use the monitor</td></tr>
    <tr><td>Current reads negative</td><td>IN and OUT exchanged</td><td>Swap with the power off, or invert in software</td></tr>
    <tr><td>Noisy reading</td><td>Switching loads</td><td>Average many samples</td></tr>
    <tr><td>Terminal or copper hot</td><td>Loose connection or too much current</td><td>Switch off at once</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The board has no indicator lights; use the test points.

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/acs712-current-sensor/acs712-current-sensor-schematic.pdf">Schematic (PDF)</a></td><td>The circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/acs712-current-sensor/acs712-current-sensor-bom.csv">Parts list (CSV)</a></td><td>Every component with its value, footprint and part number where one is chosen</td></tr>
    <tr><td><a href="/images/extensions/acs712-current-sensor/acs712-current-sensor-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
    <tr><td><a href="/images/extensions/acs712-current-sensor/acs712-current-sensor-populated-top.png">3D view, top (PNG)</a></td><td>Rendered from the design files</td></tr>
    <tr><td><a href="/images/extensions/acs712-current-sensor/acs712-current-sensor-populated-isometric.png">3D view, angled (PNG)</a></td><td>Rendered from the design files</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side. Keep metal spacers and wiring away from the current terminal and copper; keep strong magnets and heavy wires away from the sensor.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-amps-mount-t">
  <title id="xb-amps-mount-t">Mounting drawing of the current sensor board, component side: outline 60 by 40 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="225.0" y="78.0" width="510.0" height="340.0" rx="8.5" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M225.0 56H735.0"/><path d="M225.0 50V62"/><path d="M735.0 50V62"/><path d="M761.0 78.0V418.0"/><path d="M755.0 78.0h12"/><path d="M755.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">60</text>
  <text x="773.0" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">40</text>
  <circle cx="225.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="213.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M167.0 104.0h30" fill="none"/><path d="M201.0 104.0l-8 -4v8z"/><path d="M167.0 104.0v30" fill="none"/><path d="M167.0 138.0l-4 -8h8z"/></g>
  <text x="205.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="163.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="267.5" cy="120.5" r="13.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M249.9 120.5h35.2M267.5 102.9v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="253.9" y="154.1" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.00</text>
  <circle cx="692.5" cy="120.5" r="13.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M674.9 120.5h35.2M692.5 102.9v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="706.1" y="154.1" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  55.00, 5.00</text>
  <circle cx="267.5" cy="375.5" r="13.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M249.9 375.5h35.2M267.5 357.9v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="253.9" y="351.9" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 35.00</text>
  <circle cx="692.5" cy="375.5" r="13.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M674.9 375.5h35.2M692.5 357.9v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="706.1" y="351.9" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  55.00, 35.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 60 × 40&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>55.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>5.00</td><td>35.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>55.00</td><td>35.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Every figure is a design value, a calculated or simulated value, or a manufacturer&rsquo;s data sheet value, as the last column says. A dash means no figure is given.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis</th></tr></thead>
  <tbody>
    <tr><td>Measured circuit voltage</td><td>J3</td><td>&mdash;</td><td>&mdash;</td><td>30 V DC</td><td>Design limit</td></tr>
    <tr><td>Continuous current</td><td>J3</td><td>&mdash;</td><td>&mdash;</td><td>15 A</td><td>Design target</td></tr>
    <tr><td>Supply</td><td>5 V</td><td>4.5 V</td><td>5 V</td><td>5.5 V</td><td>Allegro data sheet</td></tr>
    <tr><td>Zero-current output</td><td>Contact 3</td><td>1.59 V</td><td>1.607 V</td><td>1.62 V</td><td>Simulated at 5.00 V</td></tr>
    <tr><td>Output with VIOUT at 4.5 V</td><td>Contact 3</td><td>2.85 V</td><td>2.89 V</td><td>2.93 V</td><td>Simulated</td></tr>
    <tr><td>Highest possible output</td><td>Contact 3</td><td>&mdash;</td><td>3.21 V</td><td>3.3 V</td><td>Simulated</td></tr>
    <tr><td>Filter step response, 90 %</td><td>Contact 3</td><td>&mdash;</td><td>0.15 ms</td><td>0.3 ms</td><td>Simulated</td></tr>
    <tr><td>Heat in the sensor path at 15 A</td><td>U1</td><td>&mdash;</td><td>0.27 W</td><td>&mdash;</td><td>Calculated</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Component stress limits

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Part</th><th>Limit</th><th>Use on this board</th></tr></thead>
  <tbody>
    <tr><td>Measured voltage</td><td>30 V DC</td><td>12 or 24 V circuits</td></tr>
    <tr><td>Current</td><td>15 A target</td><td>Fuse upstream</td></tr>
    <tr><td>Isolation</td><td>Not certified</td><td>Low voltage only</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: simulation {#simulation}

The output dividers and filter were simulated with ngspice.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Simulated results against limits">
<svg viewBox="0 0 1000 290" role="img" aria-labelledby="xb-amps-sim-t">
<title id="xb-amps-sim-t">Each simulated value (yellow mark) against its allowed range (green band).</title>
<text x="385" y="41" text-anchor="end" font-size="13" fill="#e6ebf2">Output at zero current</text><path d="M400 36H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M444.5 36H815.5" stroke="#2f8f5b" stroke-width="10"/><path d="M656.5 23v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="41" font-size="13" font-weight="700" fill="#ffcc33">1.61&nbsp;V</text>
<text x="385" y="93" text-anchor="end" font-size="13" fill="#e6ebf2">Output with VIOUT at 4.5 V (+20 A)</text><path d="M400 88H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M444.5 88H815.5" stroke="#2f8f5b" stroke-width="10"/><path d="M643.2 75v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="93" font-size="13" font-weight="700" fill="#ffcc33">2.89&nbsp;V</text>
<text x="385" y="145" text-anchor="end" font-size="13" fill="#e6ebf2">Divider gain</text><path d="M400 140H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M444.5 140H815.5" stroke="#2f8f5b" stroke-width="10"/><path d="M621.2 127v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="145" font-size="13" font-weight="700" fill="#ffcc33">643&nbsp;mV/V</text>
<text x="385" y="197" text-anchor="end" font-size="13" fill="#e6ebf2">90 % step response of the output filter</text><path d="M400 192H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M400.0 192H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M602.0 179v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="197" font-size="13" font-weight="700" fill="#ffcc33">148&nbsp;&micro;s</text>
<text x="385" y="249" text-anchor="end" font-size="13" fill="#e6ebf2">Highest output with VIOUT at the 5 V rail</text><path d="M400 244H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M400.0 244H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M800.0 231v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="249" font-size="13" font-weight="700" fill="#ffcc33">3.21&nbsp;V</text>
</svg>
  </div>
  <figcaption>Simulated value (yellow) against the limit used for it (green). Each bar has its own scale.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Result</th><th>Simulated value</th><th>Limit</th><th>Outcome</th></tr></thead>
  <tbody>
    <tr><td>Output at zero current</td><td>1.61&nbsp;V</td><td>1.59&nbsp;V to 1.62&nbsp;V</td><td>Within</td></tr>
    <tr><td>Output with VIOUT at 4.5 V (+20 A)</td><td>2.89&nbsp;V</td><td>2.85&nbsp;V to 2.93&nbsp;V</td><td>Within</td></tr>
    <tr><td>Divider gain</td><td>643&nbsp;mV/V</td><td>640&nbsp;mV/V to 646&nbsp;mV/V</td><td>Within</td></tr>
    <tr><td>90 % step response of the output filter</td><td>148&nbsp;&micro;s</td><td>at most 300&nbsp;&micro;s</td><td>Within</td></tr>
    <tr><td>Highest output with VIOUT at the 5 V rail</td><td>3.21&nbsp;V</td><td>at most 3.3&nbsp;V</td><td>Within</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Not simulated: the temperature rise of the current path, which sets the real current limit, and the sensor itself.

## Appendix: datasheet {#datasheets}

The first page of the sensor data sheet. Click the page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/acs712-current-sensor/datasheets/acs712.pdf"><img src="/images/extensions/acs712-current-sensor/datasheets/acs712-page1.png" alt="First page of the ACS712 Hall-effect current sensor datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/acs712-current-sensor/datasheets/acs712.pdf">ACS712 Hall-effect current sensor</a> — Allegro MicroSystems, 16 pages.</figcaption>
</figure>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
