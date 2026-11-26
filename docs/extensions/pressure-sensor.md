---
layout: default
title: "Pressure sensor"
description: "An analogue vacuum-sensor board (MPXV6115V) with a scaled output for one controller analogue input: pinout, limits and what is and is not provided."
permalink: /extensions/pressure-sensor
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Sensors</p>
    <h1 id="pressure-sensor">Pressure sensor</h1>
    <p class="xb-lead">A vacuum sensor on a board: the MPXV6115VC6U turns the pressure at its port into an analogue voltage, scaled down for a 3.3&nbsp;V analogue input. It is meant for experiments such as watching a pickup nozzle&rsquo;s vacuum. It does not switch a pump or valve, and no pressure or pickup firmware is supplied.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/pressure-sensor/pressure-sensor-diagram.png" alt="Top view of the pressure sensor board: two ten-contact sockets along the top and the square pressure sensor with its round port in the middle.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>MPXV6115V</b><span>analogue vacuum sensor, 0 to &minus;115&nbsp;kPa gauge</span></div>
  <div class="xb-stat"><b>≈ 2.944 V</b><span>calculated upper output at the divider, rated conditions</span></div>
  <div class="xb-stat"><b>5 V</b><span>sensor supply, 4.75 to 5.25&nbsp;V, 10&nbsp;mA maximum from its data sheet</span></div>
  <div class="xb-stat"><b>Dry air only</b><span>marked on the board; no liquids</span></div>
  <div class="xb-stat"><b>No driver</b><span>no pressure acquisition or pickup logic in SmoothieV2</span></div>
  <div class="xb-stat"><b>36 × 31.6</b><span>millimetres, two M3 holes and two tube-tie slots</span></div>
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
</nav>
{:/nomarkdown}

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>Monitor vacuum or pressure change, for example nozzle pickup in a pick-and-place experiment, or a vacuum pump</td></tr>
    <tr><td>Sensor</td><td>NXP MPXV6115VC6U integrated vacuum sensor with a single pneumatic port; temperature compensated, analogue output</td></tr>
    <tr><td>Range</td><td>0 to &minus;115&nbsp;kPa gauge, as the sensor&rsquo;s data sheet; the reachable vacuum is limited by ambient pressure</td></tr>
    <tr><td>Supply</td><td>4.75 to 5.25&nbsp;V, 10&nbsp;mA maximum for the sensor itself, from the controller&rsquo;s 5&nbsp;V</td></tr>
    <tr><td>Output</td><td>A divider of 40.2&nbsp;k&Omega; and 60.4&nbsp;k&Omega; (0.1&nbsp;%) and a 33&nbsp;nF filter feed the signal to J1 contact 3, read on PC3 of the Prime</td></tr>
    <tr><td>Sockets</td><td>Two 10-contact Gadgeteer A sockets (Samtec SHF-105, 1.27&nbsp;mm): input and a shifted chain. Not for hot-plugging.</td></tr>
    <tr><td>Test points</td><td>Six: 5&nbsp;V, 3.3&nbsp;V, sensor output, divided output and two grounds (not drawn in the top view)</td></tr>
    <tr><td>Size</td><td>36 &times; 31.6&nbsp;mm with two M3 mounting holes and two 3.2 &times; 1.4&nbsp;mm tie slots</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> (needs a driver)</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side. The mounting holes and test points are not marked on the drawing.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/pressure-sensor/pressure-sensor-diagram.png" alt="Top view of the pressure sensor board with nine numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:25.5%;top:13.6%" aria-label="1: input socket">1<span class="xb-pop"><b>Input socket A IN (J1)</b> — the Gadgeteer A socket to the controller. Contact 3 carries the pressure signal. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:73.5%;top:13.6%" aria-label="2: chain socket">2<span class="xb-pop"><b>Chain socket A CHAIN (J2)</b> — a second socket that passes some lines on to another board. It is a shifted chain, not a same-numbered extension.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:49.7%;top:56.6%" aria-label="3: pressure sensor">3<span class="xb-pop"><b>Pressure sensor (U1)</b> — an MPXV6115VC6U vacuum sensor with a single port on top (the round opening). Its conditioned output goes to the divider. The board silk reads DRY AIR ONLY and NO LIQUID.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-4" style="left:21%;top:26.6%" aria-label="4: divider resistors">4<span class="xb-pop"><b>Divider resistors (R1, R2)</b> — a 40.2&nbsp;k&Omega; and a 60.4&nbsp;k&Omega; resistor, 0.1&nbsp;%, that scale the sensor output down for the 3.3&nbsp;V analogue input.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-5" style="left:22.5%;top:32.8%" aria-label="5: filter capacitors">5<span class="xb-pop"><b>Output filter capacitor (C4)</b> — a 33&nbsp;nF capacitor that filters the signal on contact 3 of the input socket.</span></a>
      <a class="xb-mk xb-pl" href="#tour-6" style="left:21.8%;top:56%" aria-label="6: supply capacitors">6<span class="xb-pop"><b>Supply and sensor capacitors (C1 to C3)</b> — 1&nbsp;&micro;F and 100&nbsp;nF capacitors on the 5&nbsp;V supply and a 470&nbsp;pF capacitor on the sensor output.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:49.5%;top:36.4%" aria-label="7: chain links">7<span class="xb-pop"><b>Chain links (JP4 to JP6)</b> — three solder links under the sensor housing, marked on the silk: JP4 and JP5 shift the analogue inputs into the chain, JP6 passes GPIO6. All are bridged as delivered.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:50%;top:86.5%" aria-label="8: tie slots">8<span class="xb-pop"><b>Tube tie slots (S1, S2)</b> — two 3.2 by 1.4&nbsp;mm slots for a cable tie that holds the vacuum tube.</span></a>
      <a class="xb-mk" href="#tour-9" style="left:50%;top:78.6%" aria-label="9: port marking">9<span class="xb-pop"><b>Port marking</b> — the silk PORT = VACUUM, with an arrow, marks the pneumatic port on the sensor as the vacuum port.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Input socket A IN (J1)</b> — the Gadgeteer A socket to the controller. Contact 3 carries the pressure signal. <i>See the pinout.</i></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket A CHAIN (J2)</b> — a second socket that passes some lines on to another board. It is a shifted chain, not a same-numbered extension.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Pressure sensor (U1)</b> — an MPXV6115VC6U vacuum sensor with a single port on top (the round opening). Its conditioned output goes to the divider. The board silk reads DRY AIR ONLY and NO LIQUID.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Divider resistors (R1, R2)</b> — a 40.2&nbsp;k&Omega; and a 60.4&nbsp;k&Omega; resistor, 0.1&nbsp;%, that scale the sensor output down for the 3.3&nbsp;V analogue input.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Output filter capacitor (C4)</b> — a 33&nbsp;nF capacitor that filters the signal on contact 3 of the input socket.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Supply and sensor capacitors (C1 to C3)</b> — 1&nbsp;&micro;F and 100&nbsp;nF capacitors on the 5&nbsp;V supply and a 470&nbsp;pF capacitor on the sensor output.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Chain links (JP4 to JP6)</b> — three solder links under the sensor housing, marked on the silk: JP4 and JP5 shift the analogue inputs into the chain, JP6 passes GPIO6. All are bridged as delivered.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Tube tie slots (S1, S2)</b> — two 3.2 by 1.4&nbsp;mm slots for a cable tie that holds the vacuum tube.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Port marking</b> — the silk PORT = VACUUM, with an arrow, marks the pneumatic port on the sensor as the vacuum port.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1: input socket (A IN)

Contact 1 is at the lower left of the socket in the tour (the arrow marks the lower row), contact 2 directly above it, and odd contacts are in the lower row.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Function</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Passed to the chain socket; the sensor does not use it</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Sensor supply</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">AIN_OUT</span></td><td>Divided, filtered sensor output, read on PC3 of the Prime</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">AIN1</span></td><td>Not used here; passed to chain contact 3 through JP4</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">AIN2</span></td><td>Not used here; passed to chain contact 4 through JP5</td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">GPIO6</span></td><td>Not used here; passed to chain contact 6 through JP6</td></tr>
    <tr><td>7, 8, 9</td><td>Not connected</td><td>Leave unused</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Ground</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J2: chain socket (A CHAIN)

The chain is shifted: J1 contact 4 appears on J2 contact 3 and J1 contact 5 on J2 contact 4. Do not treat it as a same-number extension. Contacts 1, 2 and 10 (3.3&nbsp;V, 5&nbsp;V, ground) are joined directly; JP6 passes GPIO6 to contact 6.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>Joins</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>JP4 (AIN1 &gt; CH0)</td><td>J1 contact 4 to J2 contact 3</td><td>Bridged</td></tr>
    <tr><td>JP5 (AIN2 &gt; CH1)</td><td>J1 contact 5 to J2 contact 4</td><td>Bridged</td></tr>
    <tr><td>JP6 (GPIO6)</td><td>J1 contact 6 to J2 contact 6</td><td>Bridged</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Confirm the delivered state on the assembled board before changing a link.

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>A vacuum tube</b><span>Tube and fitting for the sensor port, secured at the tie slots; dry air only.</span></div>
  <div class="xb-card"><b>Three wires</b><span>5&nbsp;V, the signal on PC3 and ground to the controller.</span></div>
  <div class="xb-card"><b>An acquisition driver</b><span>Code that converts the voltage to pressure and applies your own pickup policy. None is supplied.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Check the supply</h3>
    <p>Check the 5&nbsp;V budget of the controller&rsquo;s limited rail before connecting the board; the sensor can draw up to 10&nbsp;mA.</p>
  </li>
  <li class="xb-step">
    <h3>Wire three leads</h3>
    <p>With the power off, connect header GH (J39) contacts 2 (5&nbsp;V), 3 (PC3) and 10 (ground) to J1 contacts 2, 3 and 10. Leave every other contact and the chain socket unconnected. Check numbered continuity and the connector orientation first.</p>
    <p class="xb-expect">The rail positions on the Prime&rsquo;s physical header need checking before powering; see the Prime header note in the electrical appendix.</p>
  </li>
  <li class="xb-step">
    <h3>Measure the rail and the output</h3>
    <p>With the sensor rail between 4.75 and 5.25&nbsp;V, measure the signal at test point TP4 open to air and note the reading. Do not drive a pump or valve from this signal header.</p>
  </li>
  <li class="xb-step">
    <h3>Calibrate for your use</h3>
    <p>Compare a known open nozzle with a known sealed pickup and record the supply, the pressure reference and the settled readings. Choose thresholds and timing yourself; the board gives no threshold value.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Read the pressure</td><td>None</td><td>No driver exists; no example is given</td></tr>
    <tr><td>Decide a part is picked up</td><td>None</td><td>No pickup logic exists</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

There is no configuration to give. SmoothieV2 (source commit [2a21c0108b1d095ecd8b2b9358e94055f053c003](https://github.com/Smoothieware/SmoothieV2/tree/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src)) has no pressure acquisition or threshold module, and generic analogue input alone gives neither pressure units nor a pickup decision. The same source&rsquo;s [analogue input lookup](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/Hal/src/Adc.cpp#L104-L123) uses logical names: PC3 is the logical `ADC1_5`, hardware channel 13. PB1 is not in its seven-input lookup.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 170" role="img" aria-labelledby="xb-how-t">
    <title id="xb-how-t">Pressure at the sensor port becomes a voltage, scaled by a resistor divider and filtered before reaching the controller analogue input.</title>
    <g font-size="13" font-weight="700" text-anchor="middle" fill="#e6ebf2">
      <rect x="20" y="55" width="170" height="60" rx="8" fill="#1f2226" stroke="#e0a877"/><text x="105" y="80">Vacuum port</text><text x="105" y="100" font-weight="400" fill="#a9b4c2">pneumatic input</text>
      <rect x="250" y="55" width="170" height="60" rx="8" fill="#212936" stroke="#6fe08a"/><text x="335" y="80">MPXV6115V</text><text x="335" y="100" font-weight="400" fill="#a9b4c2">analogue voltage</text>
      <rect x="480" y="55" width="170" height="60" rx="8" fill="#212936" stroke="#e0a877"/><text x="565" y="80">Divider</text><text x="565" y="100" font-weight="400" fill="#a9b4c2">40.2 k and 60.4 k</text>
      <rect x="710" y="55" width="130" height="60" rx="8" fill="#212936" stroke="#5fb3ff"/><text x="775" y="80">Filter</text><text x="775" y="100" font-weight="400" fill="#a9b4c2">33 nF</text>
      <rect x="880" y="55" width="100" height="60" rx="8" fill="#1f2226" stroke="#dfe4ee"/><text x="930" y="90">J1.3</text>
    </g>
    <g stroke-width="3" fill="none" stroke="#a9b4c2"><path d="M190 85H250"/><path d="M420 85H480"/><path d="M650 85H710"/><path d="M840 85H880"/></g>
  </svg>
  </div>
  <figcaption>The path from the pressure port to the controller input. There is no converter or comparator on the board.</figcaption>
</figure>
{:/nomarkdown}

The sensor conditions and compensates its own signal. The divider scales its output so that, with the sensor&rsquo;s upper output and a 5.25&nbsp;V supply over 0 to 85&nbsp;&deg;C, the node reaches about 2.944&nbsp;V at most, which suits a 3.3&nbsp;V analogue input. That is a rated-condition calculation, not a bound on a fault voltage. A driver would convert the divided voltage back with the fitted divider and the sensor&rsquo;s transfer curve, then apply thresholds and timing that you choose.

The sensor values come from the manufacturer&rsquo;s [MPXV6115V data sheet](https://www.nxp.com/docs/en/data-sheet/MPXV6115V.pdf) (September 2015). They do not give the assembled board&rsquo;s accuracy, sample rate or fault tolerance.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Reading never changes</td><td>No 5&nbsp;V on TP1, or the port is not connected to the vacuum. Check the tube.</td></tr>
    <tr><td>Reading is out of range</td><td>Supply outside 4.75 to 5.25&nbsp;V, or ambient pressure assumed wrongly.</td></tr>
    <tr><td>Noisy reading</td><td>Cable pickup on the analogue line, or an unsettled average; filter in the driver.</td></tr>
    <tr><td>Chain board does not see AIN1</td><td>The chain is shifted by one contact; check JP4 and JP5.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

This board has no indicator lights. Use the test points: TP1 (5&nbsp;V), TP2 (3.3&nbsp;V), TP3 (sensor output) and TP4 (divided output), with TP5 and TP6 at ground.

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/pressure-sensor/pressure-sensor-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram.</td></tr>
    <tr><td><a href="/images/extensions/pressure-sensor/pressure-sensor-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/pressure-sensor/pressure-sensor-diagram.png">Board drawing (SVG)</a></td><td>The top view used on this page, at full resolution</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side. The two tie slots are oval, 3.2 by 1.4&nbsp;mm; the figure shows their centres.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-psn-mount-t">
  <title id="xb-psn-mount-t">Mounting drawing of the pressure sensor board, component side: outline 36 by 31.6 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="286.3" y="78.0" width="387.3" height="340.0" rx="10.8" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M286.3 56H673.7"/><path d="M286.3 50V62"/><path d="M673.7 50V62"/><path d="M699.7 78.0V418.0"/><path d="M693.7 78.0h12"/><path d="M693.7 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">36</text>
  <text x="711.7" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">31.6</text>
  <circle cx="286.3" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="274.3" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M228.3 104.0h30" fill="none"/><path d="M262.3 104.0l-8 -4v8z"/><path d="M228.3 104.0v30" fill="none"/><path d="M228.3 138.0l-4 -8h8z"/></g>
  <text x="266.3" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="224.3" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="372.4" cy="379.3" r="17.2" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M351.2 379.3h42.4M372.4 358.1v42.4" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="355.2" y="352.1" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  8.00, 28.00</text>
  <circle cx="587.6" cy="379.3" r="17.2" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M566.4 379.3h42.4M587.6 358.1v42.4" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="604.8" y="352.1" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  28.00, 28.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 36 × 31.6&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>8.00</td><td>28.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>28.00</td><td>28.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>

{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Every figure is a design value, a value from the sensor&rsquo;s data sheet or a value from the parts list, as the last column says. A dash means no figure is given.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Sensor supply</td><td>J1 contact 2</td><td>4.75 V</td><td>5 V</td><td>5.25 V</td><td>Data sheet; check the Prime&rsquo;s limited rail</td></tr>
    <tr><td>Sensor current</td><td>U1</td><td>—</td><td>—</td><td>10 mA</td><td>Data sheet maximum for the sensor only</td></tr>
    <tr><td>Pressure range</td><td>U1 port</td><td>&minus;115 kPa</td><td>—</td><td>0 kPa</td><td>Gauge range from the data sheet; ambient pressure limits what can be reached</td></tr>
    <tr><td>Divider</td><td>R1, R2</td><td>—</td><td>40.2 k&Omega; and 60.4 k&Omega;</td><td>—</td><td>0.1&nbsp;% parts from the parts list</td></tr>
    <tr><td>Divided output</td><td>J1 contact 3</td><td>—</td><td>—</td><td>about 2.944 V</td><td>Calculated at the sensor&rsquo;s upper output, 5.25&nbsp;V and 0 to 85&nbsp;&deg;C; not a fault-voltage bound</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Prime header GH (J39)

Use header GH (J39) for the three leads: contact 2 is 5&nbsp;V, contact 3 is PC3 (the analogue input) and contact 10 is ground. Verify numbered continuity with the power removed.

See all boards on the [extension boards](/extension-boards) page.
