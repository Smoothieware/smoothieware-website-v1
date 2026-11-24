---
layout: default
title: "Filament progress sensor"
description: "An optical motion sensor board that watches the surface of moving filament without a contact wheel, read through a three-wire SPI exchange: pinout, chaining links and limits."
permalink: /extensions/filament-progress-sensor
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Sensors</p>
    <h1 id="filament-progress-sensor">Filament progress sensor</h1>
    <p class="xb-lead">An optical motion sensor looks at the surface of moving filament, with no contact encoder wheel. It reports motion counts that must be read from its registers; a motion line tells the controller that data is waiting. It is not a two-wire quadrature encoder, and no firmware module is supplied for it.</p>
    <p class="xb-badge">Design candidate · revision v29 · not yet built or tested</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/filament-progress-sensor/filament-progress-sensor-diagram.svg" alt="Top view of the filament progress sensor: two ten-contact sockets across the top, the optical sensor chip in the lower middle and a row of small capacitors at the bottom.">
    <figcaption>Top view, drawn from the board&rsquo;s design files (revision v29). This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>PAT9125EL</b><span>optical motion sensor, read through SPI registers</span></div>
  <div class="xb-stat"><b>3.3 V</b><span>logic; the 5&nbsp;V contact is present but the sensor is not 5&nbsp;V logic</span></div>
  <div class="xb-stat"><b>2 sockets</b><span>an input socket and a chain socket for the next board</span></div>
  <div class="xb-stat"><b>7 links</b><span>solder links that join the chain lines; two open, five bridged</span></div>
  <div class="xb-stat"><b>No module</b><span>a driver must implement the three-wire exchange</span></div>
  <div class="xb-stat"><b>36 × 26</b><span>millimetres, two M3 mounting holes</span></div>
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

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  This is a design candidate that has not been built or tested, and it does not make a working filament detector on its own. There is no firmware driver for the sensor&rsquo;s bidirectional data line, and the optics (focus, lighting, height above the filament, surface and maximum speed) need a mechanical fixture and calibration that this board does not provide. The silk text reads 850nm LASER CLASS 1; the classification and the exposure limits are not established by the design and must be checked against the sensor&rsquo;s data sheet before use.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>Observe filament surface movement without a mechanical encoder, for example to compare it with commanded extrusion</td></tr>
    <tr><td>Sensor</td><td>PixArt PAT9125EL-TKMT optical motion sensor with a bidirectional data line (SDIO) and a motion interrupt</td></tr>
    <tr><td>Read path</td><td>A 3.3&nbsp;k&Omega; resistor joins the host MOSI line to the sensor data line; an SN74LVC1G125 tri-state buffer returns that line as MISO while chip select is low</td></tr>
    <tr><td>Supply</td><td>3.3&nbsp;V from the controller. The 5&nbsp;V contact is carried to the chain socket and a test point, not used by the sensor.</td></tr>
    <tr><td>Protection</td><td>One TPD4E1U06 surge-protection array</td></tr>
    <tr><td>Sockets</td><td>Two 10-contact Gadgeteer S sockets (Samtec SHF-105, 1.27&nbsp;mm): input and chain. Not for hot-plugging.</td></tr>
    <tr><td>Chain links</td><td>Seven solder links JP3 to JP9; JP3 (motion) and JP6 (chip select) are open, the other five bridged as designed</td></tr>
    <tr><td>Test points</td><td>Seven: 5&nbsp;V, 3.3&nbsp;V, two grounds, the 1.8&nbsp;V analogue supply, the data line and the motion line (not drawn in the top view)</td></tr>
    <tr><td>Size</td><td>36 &times; 26&nbsp;mm with two M3 mounting holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> (not yet usable without a driver)</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side. The mounting holes, test points and solder links are not drawn in this view.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/filament-progress-sensor/filament-progress-sensor-diagram.svg" alt="Top view of the filament progress sensor with nine numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:28.6%;top:20%" aria-label="1: input socket">1<span class="xb-pop"><b>Input socket S IN (J1)</b> — the Gadgeteer S socket that connects to the controller. Contact 3 is the motion interrupt and contact 6 the chip select. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-2" style="left:78%;top:20%" aria-label="2: chain socket">2<span class="xb-pop"><b>Chain socket S CHAIN (J2)</b> — a second S socket that passes the shared lines on to another board. Contacts 3 and 6 are only joined through links JP3 and JP6, which are open as delivered.</span></a>
      <a class="xb-mk xb-pb" href="#tour-3" style="left:32.5%;top:37.1%" aria-label="3: protection array">3<span class="xb-pop"><b>Protection array (D1)</b> — a TPD4E1U06 surge-protection array (it blocks ESD pulses; it is not a current limit).</span></a>
      <a class="xb-mk" href="#tour-4" style="left:47.1%;top:68.8%" aria-label="4: optical sensor">4<span class="xb-pop"><b>Optical sensor (U1)</b> — a PAT9125EL-TKMT optical motion sensor. It looks at the filament surface through the round window; focus, lighting and standoff depend on a mechanical fixture that is not part of the board. The silk reads 850nm LASER CLASS 1.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:37.1%;top:68.1%" aria-label="5: read buffer">5<span class="xb-pop"><b>Read buffer (U2)</b> — an SN74LVC1G125 tri-state buffer. It returns the sensor&rsquo;s bidirectional data line to the host as MISO and is enabled by the chip-select line.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:57.9%;top:60%" aria-label="6: resistors">6<span class="xb-pop"><b>Resistors (R1, R2)</b> — R1 (3.3&nbsp;k&Omega;) joins the host MOSI line to the sensor data line; R2 (10&nbsp;k&Omega;) pulls the chip-select line up to 3.3&nbsp;V.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:58%;top:70.2%" aria-label="7: bulk capacitor">7<span class="xb-pop"><b>Bulk capacitor (C1)</b> — a 10&nbsp;&micro;F capacitor.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:44.5%;top:79.8%" aria-label="8: capacitor row">8<span class="xb-pop"><b>Capacitors (C2 to C6)</b> — C3 (10&nbsp;&micro;F), C5 (4.7&nbsp;&micro;F) and 100&nbsp;nF capacitors C2, C4 and C6 for the supplies; the sensor&rsquo;s analogue supply is brought out to test point TP4.</span></a>
      <a class="xb-mk xb-pb" href="#tour-9" style="left:43%;top:46.6%" aria-label="9: chain links">9<span class="xb-pop"><b>Chain links (JP3 to JP9)</b> — seven solder links between the input and the chain socket, in a row under the label CS OPEN. They are not drawn in the top view. JP3 and JP6 are open as delivered, JP4, JP5, JP7, JP8 and JP9 are bridged.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Input socket S IN (J1)</b> — the Gadgeteer S socket that connects to the controller. Contact 3 is the motion interrupt and contact 6 the chip select. <i>See the pinout.</i></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket S CHAIN (J2)</b> — a second S socket that passes the shared lines on to another board. Contacts 3 and 6 are only joined through links JP3 and JP6, which are open as delivered.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Protection array (D1)</b> — a TPD4E1U06 surge-protection array (it blocks ESD pulses; it is not a current limit).</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Optical sensor (U1)</b> — a PAT9125EL-TKMT optical motion sensor. It looks at the filament surface through the round window; focus, lighting and standoff depend on a mechanical fixture that is not part of the board. The silk reads 850nm LASER CLASS 1.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Read buffer (U2)</b> — an SN74LVC1G125 tri-state buffer. It returns the sensor&rsquo;s bidirectional data line to the host as MISO and is enabled by the chip-select line.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Resistors (R1, R2)</b> — R1 (3.3&nbsp;k&Omega;) joins the host MOSI line to the sensor data line; R2 (10&nbsp;k&Omega;) pulls the chip-select line up to 3.3&nbsp;V.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Bulk capacitor (C1)</b> — a 10&nbsp;&micro;F capacitor.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Capacitors (C2 to C6)</b> — C3 (10&nbsp;&micro;F), C5 (4.7&nbsp;&micro;F) and 100&nbsp;nF capacitors C2, C4 and C6 for the supplies; the sensor&rsquo;s analogue supply is brought out to test point TP4.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Chain links (JP3 to JP9)</b> — seven solder links between the input and the chain socket, in a row under the label CS OPEN. They are not drawn in the top view. JP3 and JP6 are open as delivered, JP4, JP5, JP7, JP8 and JP9 are bridged.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1: input socket (S IN)

Contact 1 is at the lower left of the socket in the tour (the arrow marks the lower row), contact 2 directly above it, and odd contacts are in the lower row.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Function</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Sensor and buffer supply</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Not used by the sensor; passed to J2 and a test point</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">MOTION_N</span></td><td>Motion interrupt from the sensor</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">GAD_P4</span></td><td>Not used on this board; passed to J2 through JP4</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">GAD_P5</span></td><td>Not used on this board; passed to J2 through JP5</td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">SPI_CS_N</span></td><td>Chip select, pulled up by R2</td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-sig">SPI_MOSI</span></td><td>Host data to the sensor through R1</td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">SPI_MISO</span></td><td>Sensor data back, through the buffer</td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">SPI_SCK</span></td><td>Clock to the sensor</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Ground</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J2: chain socket (S CHAIN)

J2 has the same contact order. Contacts 1, 2 and 10 (3.3&nbsp;V, 5&nbsp;V and ground) are joined directly to J1. The others go through the solder links below.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J2 contact</th><th>Joined to J1 through</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>3 (CHAIN_P3)</td><td>JP3 to MOTION_N (J1 contact 3)</td><td>Open</td></tr>
    <tr><td>4 (CHAIN_P4)</td><td>JP4 to J1 contact 4</td><td>Bridged</td></tr>
    <tr><td>5 (CHAIN_P5)</td><td>JP5 to J1 contact 5</td><td>Bridged</td></tr>
    <tr><td>6 (CHAIN_CS_N)</td><td>JP6 to SPI_CS_N (J1 contact 6)</td><td>Open</td></tr>
    <tr><td>7 (CHAIN_MOSI)</td><td>JP7 to SPI_MOSI</td><td>Bridged</td></tr>
    <tr><td>8 (CHAIN_MISO)</td><td>JP8 to SPI_MISO</td><td>Bridged</td></tr>
    <tr><td>9 (CHAIN_SCK)</td><td>JP9 to SPI_SCK</td><td>Bridged</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

With the links as delivered, a board on the chain socket receives clock and data but not this board&rsquo;s motion and chip-select lines. The delivered state comes from the parts list; confirm it on the assembled board before changing a link.

### Test points

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Name</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>TP1</td><td>5&nbsp;V</td></tr>
    <tr><td>TP2</td><td>3.3&nbsp;V</td></tr>
    <tr><td>TP3, TP6</td><td>Ground</td></tr>
    <tr><td>TP4</td><td>Sensor 1.8&nbsp;V analogue supply</td></tr>
    <tr><td>TP5</td><td>Sensor data line (SDIO)</td></tr>
    <tr><td>TP7</td><td>Motion line</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>The design is not yet built.</span></div>
  <div class="xb-card"><b>An optical fixture</b><span>A holder that sets the height, lighting and focus over the filament, and a defined filament surface.</span></div>
  <div class="xb-card"><b>Seven wires</b><span>3.3&nbsp;V, motion, chip select, MOSI, MISO, clock and ground to the controller.</span></div>
  <div class="xb-card"><b>A driver</b><span>Firmware that performs the sensor&rsquo;s three-wire transaction. None is supplied.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Plan the fixture first</h3>
    <p>Decide how the filament will pass under the sensor window, at what distance, and how the sensor is lit. The board does not set any of this.</p>
  </li>
  <li class="xb-step">
    <h3>Wire seven leads</h3>
    <p>With the power off, connect the controller header (GE, J36 in the design notes, with MOTION_N on PE8 and chip select on PD15) to J1 contacts 1, 3, 6, 7, 8, 9 and 10. Leave 5&nbsp;V (contact 2), contacts 4 and 5 and the whole of J2 unconnected. Check numbered continuity and the connector orientation first.</p>
    <p class="xb-expect">The rail positions on the Prime&rsquo;s physical header need checking before powering; see the Prime header note in the electrical appendix. The available current of the 3.3&nbsp;V rail is not established.</p>
  </li>
  <li class="xb-step">
    <h3>Bring up the electrical side only</h3>
    <p>Measure 3.3&nbsp;V at TP2 and the 1.8&nbsp;V analogue supply at TP4 before any transaction. The motion line is TP7.</p>
  </li>
  <li class="xb-step">
    <h3>Wait for a driver</h3>
    <p>The sensor needs a driver that implements the three-wire transaction with its bus turnaround; ordinary SPI pin assignment does not provide it. Until one exists, this board cannot report filament movement.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Read filament movement</td><td>None</td><td>No driver exists; no example is given</td></tr>
    <tr><td>Count pulses on one input</td><td>Filament detector (V2)</td><td>Does not apply: this sensor gives no pulse output</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

There is no configuration to give. The pinned SmoothieV2 source (revision [2a21c0108b1d095ecd8b2b9358e94055f053c003](https://github.com/Smoothieware/SmoothieV2/tree/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src)) has no driver for this sensor, and the existing filament detector counts pulses on one input, which this sensor does not produce. A configuration here would be invented. The motion line (J1 contact 3) is an interrupt that says data are waiting; the movement itself has to be read from the sensor&rsquo;s registers.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 170" role="img" aria-labelledby="xb-how-t">
    <title id="xb-how-t">The host MOSI line reaches the sensor data line through a resistor, and a tri-state buffer returns that data line as MISO when chip select is low.</title>
    <g font-size="13" font-weight="700" text-anchor="middle" fill="#e6ebf2">
      <rect x="20" y="55" width="150" height="60" rx="8" fill="#1f2226" stroke="#dfe4ee"/><text x="95" y="80">Host</text><text x="95" y="100" font-weight="400" fill="#a9b4c2">MOSI, MISO, CS</text>
      <rect x="230" y="55" width="150" height="60" rx="8" fill="#212936" stroke="#e0a877"/><text x="305" y="80">R1 3.3 k</text><text x="305" y="100" font-weight="400" fill="#a9b4c2">MOSI to SDIO</text>
      <rect x="440" y="55" width="170" height="60" rx="8" fill="#212936" stroke="#6fe08a"/><text x="525" y="80">PAT9125EL</text><text x="525" y="100" font-weight="400" fill="#a9b4c2">optical sensor, SDIO</text>
      <rect x="670" y="55" width="150" height="60" rx="8" fill="#212936" stroke="#5fb3ff"/><text x="745" y="80">U2 buffer</text><text x="745" y="100" font-weight="400" fill="#a9b4c2">SDIO to MISO</text>
      <rect x="870" y="55" width="110" height="60" rx="8" fill="#1f2226" stroke="#dfe4ee"/><text x="925" y="90">J1.8</text>
    </g>
    <g stroke-width="3" fill="none" stroke="#a9b4c2"><path d="M170 85H230"/><path d="M380 85H440"/><path d="M610 85H670"/><path d="M820 85H870"/></g>
  </svg>
  </div>
  <figcaption>The sensor uses one bidirectional data line. The resistor feeds it and the buffer reads it back.</figcaption>
</figure>
{:/nomarkdown}

The sensor reports where the filament surface has moved, so a host can in principle compare measured movement with commanded extrusion. Because it uses a single bidirectional data line, the exchange is a three-wire transaction with a turnaround between sending the address and reading the data. The 3.3&nbsp;k&Omega; resistor lets the host drive the line while the buffer, enabled by chip select, returns it as MISO. The motion line goes low to tell the host that data are waiting.

Counts per millimetre, resolution and maximum filament speed depend on the fixture and are not established.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>No 3.3&nbsp;V</td><td>Measure TP2 against TP3; check the wiring of J1 contacts 1 and 10 and the header note.</td></tr>
    <tr><td>No analogue supply</td><td>TP4 should show the sensor&rsquo;s 1.8&nbsp;V supply when the board is powered.</td></tr>
    <tr><td>No motion line activity</td><td>Watch TP7; with no driver reading the sensor it may stay idle.</td></tr>
    <tr><td>A chained board does not respond</td><td>JP3 and JP6 are open as delivered, so motion and chip select are not passed on.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

This board has no indicator lights. Use the test points listed in the pinout.

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>Revision</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/filament-progress-sensor/filament-progress-sensor-schematic.pdf">Schematic (PDF)</a></td><td>v29</td><td>The complete circuit diagram. Its title block reads v25.</td></tr>
    <tr><td><a href="/images/extensions/filament-progress-sensor/filament-progress-sensor-bom.csv">Parts list (CSV)</a></td><td>v29</td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/filament-progress-sensor/filament-progress-sensor-diagram.svg">Board drawing (SVG)</a></td><td>v29</td><td>The top view used on this page, at full resolution</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side. The optical window is a part of U1; its position and the standoff to the filament come from your fixture.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-fps-mount-t">
  <title id="xb-fps-mount-t">Mounting drawing of the filament progress sensor, component side: outline 36 by 26 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="244.6" y="78.0" width="470.8" height="340.0" rx="13.1" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M244.6 56H715.4"/><path d="M244.6 50V62"/><path d="M715.4 50V62"/><path d="M741.4 78.0V418.0"/><path d="M735.4 78.0h12"/><path d="M735.4 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">36</text>
  <text x="753.4" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">26</text>
  <circle cx="244.6" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="232.6" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M186.6 104.0h30" fill="none"/><path d="M220.6 104.0l-8 -4v8z"/><path d="M186.6 104.0v30" fill="none"/><path d="M186.6 138.0l-4 -8h8z"/></g>
  <text x="224.6" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="182.6" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="316.5" cy="310.8" r="20.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M291.6 310.8h49.8M316.5 285.8v49.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="295.6" y="279.8" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.50, 17.80</text>
  <circle cx="578.1" cy="310.8" r="20.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M553.2 310.8h49.8M578.1 285.8v49.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="599.0" y="279.8" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  25.50, 17.80</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 36 × 26&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.50</td><td>17.80</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>25.50</td><td>17.80</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>

{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Every figure is a design value or a value from the parts list, as the last column says. None is a measurement on a built board. **Open** means not established.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Logic supply</td><td>J1 contact 1</td><td>Open</td><td>3.3 V</td><td>Open</td><td>Controller rail allowance Open</td></tr>
    <tr><td>Supply current</td><td>Sensor and buffer</td><td>Open</td><td>Open</td><td>Open</td><td>Depends on the sensor&rsquo;s lighting; not established in the design</td></tr>
    <tr><td>Data line resistor</td><td>R1</td><td>—</td><td>3.3 k&Omega;</td><td>—</td><td>From the parts list</td></tr>
    <tr><td>Chip select pull-up</td><td>R2</td><td>—</td><td>10 k&Omega;</td><td>—</td><td>From the parts list</td></tr>
    <tr><td>Supply capacitors</td><td>C1, C3, C5, C2, C4, C6</td><td>—</td><td>10 &micro;F, 10 &micro;F, 4.7 &micro;F, 100 nF &times; 3</td><td>—</td><td>From the parts list</td></tr>
    <tr><td>SPI rate</td><td>Sensor</td><td>Open</td><td>Open</td><td>Open</td><td>Depends on the sensor data sheet and the driver</td></tr>
    <tr><td>Counts per millimetre, speed, focus tolerance</td><td>Whole board</td><td>Open</td><td>Open</td><td>Open</td><td>Need a named fixture and calibration</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Prime header G_F (J37)

On the Prime, header G_F (J37) has 3.3&nbsp;V on contact 1, 5&nbsp;V on contact 2, PB1 on 3, PJ4 on 4 and ground on 10. A discrepancy in the rail positions on the Prime&rsquo;s physical connector has been noted: verify numbered continuity with the power removed. The header is unshrouded. The design notes for this board name header GE (J36) for the seven leads, which this page does not map further.

See all boards on the [extension boards](/extension-boards) page.
