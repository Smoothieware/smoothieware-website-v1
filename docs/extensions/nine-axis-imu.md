---
layout: default
title: "9-axis IMU"
description: "A Bosch BNO055 orientation sensor on a Gadgeteer I2C socket with Qwiic: pinout, wiring, addresses, solder links, limits and files."
permalink: /extensions/nine-axis-imu
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Sensors and inputs</p>
    <h1 id="nine-axis-imu">9-axis IMU</h1>
    <p class="xb-lead">An orientation sensor board: accelerometer, gyroscope and magnetometer in one chip that can compute heading and tilt itself. It connects to an I2C socket or a Qwiic cable. Reading it needs your own driver.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/nine-axis-imu/nine-axis-imu-diagram.webp" alt="Top view of the IMU board: a ten-contact socket on the left and right edges, a sensor in the middle and a Qwiic connector near the bottom.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>
<div class="xb-stats">
  <div class="xb-stat"><b>9 axes</b><span>Bosch BNO055 with on-chip fusion</span></div>
  <div class="xb-stat"><b>0x28 / 0x29</b><span>I2C address</span></div>
  <div class="xb-stat"><b>INT + reset</b><span>contacts 3 and 6</span></div>
  <div class="xb-stat"><b>I2C + Qwiic</b><span>3.3&nbsp;V only</span></div>
  <div class="xb-stat"><b>25 mA</b><span>supply allowance</span></div>
  <div class="xb-stat"><b>40 &times; 40</b><span>millimetres, four M3 holes</span></div>
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
    <tr><td>Purpose</td><td>Reading orientation, heading and rotation rate in experiments with moving parts or robots. Not a safety sensor</td></tr>
    <tr><td>Sensor</td><td>Bosch BNO055: acceleration, rotation rate and magnetic field, internal oscillator</td></tr>
    <tr><td>Interface</td><td>I2C standard and fast mode, address 0x28, or 0x29 with JP4 closed; interrupt output and reset input</td></tr>
    <tr><td>Supply</td><td>3.3&nbsp;V only; allow 25&nbsp;mA</td></tr>
    <tr><td>Pull-ups</td><td>3.3&nbsp;k&Omega; on SDA and SCL, removable</td></tr>
    <tr><td>Connectors</td><td>Two Gadgeteer type I sockets (Samtec SHF-105, 1.27&nbsp;mm) and one Qwiic</td></tr>
    <tr><td>Size</td><td>40 &times; 40&nbsp;mm, four M3 holes on a 30&nbsp;mm square</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> header GG electrically; no firmware driver</td></tr>
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
      <img src="/images/extensions/nine-axis-imu/nine-axis-imu-diagram.webp" alt="Top view of the 9-axis IMU board with 11 numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pl" href="#tour-1" style="left:13.3%;top:50.0%" aria-label="1: input socket i in (j1)">1<span class="xb-pop"><b>Input socket I IN (J1)</b> — SDA on contact 8, SCL on 9, interrupt on 3, reset on 6.</span></a>
      <a class="xb-mk xb-pr" href="#tour-2" style="left:86.7%;top:50.0%" aria-label="2: chain socket chain (j2)">2<span class="xb-pop"><b>Chain socket CHAIN (J2)</b> — Continues the bus.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:50.0%;top:83.3%" aria-label="3: qwiic connector (j3)">3<span class="xb-pop"><b>Qwiic connector (J3)</b> — The same bus on a four-way cable.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:50.0%;top:48.8%" aria-label="4: orientation sensor (u1)">4<span class="xb-pop"><b>Orientation sensor (U1)</b> — Keep magnets, steel and motor wires away from it.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:45.2%;top:29.8%" aria-label="5: bus pull-ups (r1, r2)">5<span class="xb-pop"><b>Bus pull-ups (R1, R2)</b> — 3.3&nbsp;k&Omega; resistors.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:35.7%;top:29.8%" aria-label="6: pull-up links (jp1, jp2)">6<span class="xb-pop"><b>Pull-up links (JP1, JP2)</b> — Closed as delivered.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:70.2%;top:38.1%" aria-label="7: address link (jp4)">7<span class="xb-pop"><b>Address link (JP4)</b> — Close it for address 0x29.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:31.0%;top:65.5%" aria-label="8: chain links (jp3, jp6)">8<span class="xb-pop"><b>Chain links (JP3, JP6)</b> — Interrupt and reset; open as delivered.</span></a>
      <a class="xb-mk" href="#tour-9" style="left:69.0%;top:65.5%" aria-label="9: bus chain links (jp8, jp9)">9<span class="xb-pop"><b>Bus chain links (JP8, JP9)</b> — Closed as delivered.</span></a>
      <a class="xb-mk" href="#tour-10" style="left:50.0%;top:60.7%" aria-label="10: capacitors (c1 to c4)">10<span class="xb-pop"><b>Capacitors (C1 to C4)</b> — Values follow the Bosch application circuit.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-11" style="left:14.3%;top:14.3%" aria-label="11: mounting hole">11<span class="xb-pop"><b>Mounting hole</b> — One of four M3 holes. Use non-magnetic screws.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Input socket I IN (J1)</b> — SDA on contact 8, SCL on 9, interrupt on 3, reset on 6.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket CHAIN (J2)</b> — Continues the bus.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Qwiic connector (J3)</b> — The same bus on a four-way cable.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Orientation sensor (U1)</b> — Keep magnets, steel and motor wires away from it.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Bus pull-ups (R1, R2)</b> — 3.3&nbsp;k&Omega; resistors.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Pull-up links (JP1, JP2)</b> — Closed as delivered.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Address link (JP4)</b> — Close it for address 0x29.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Chain links (JP3, JP6)</b> — Interrupt and reset; open as delivered.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Bus chain links (JP8, JP9)</b> — Closed as delivered.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Capacitors (C1 to C4)</b> — Values follow the Bosch application circuit.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Mounting hole</b> — One of four M3 holes. Use non-magnetic screws.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

Everything on this board is 3.3&nbsp;V. Check contact numbering with the power removed.

### J1: input socket (I IN)

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>Use</th><th>Prime header GG</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Board supply</td><td>3.3 V</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Passed to the chain only</td><td>5 V</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">INT</span></td><td>Interrupt</td><td>PH2</td></tr>
    <tr><td>4, 5, 7</td><td>Passed through</td><td>Not used</td><td>PH4, PC0, PH3</td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">RESET</span></td><td>Pull low to reset</td><td>PF15</td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">SDA</span></td><td>I2C data</td><td>PF0 (I2C2_SDA)</td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">SCL</span></td><td>I2C clock</td><td>PF1 (I2C2_SCL)</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Ground</td><td>GND</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J3: Qwiic

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Pin</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>GND</td></tr>
    <tr><td>2</td><td>3.3 V</td></tr>
    <tr><td>3</td><td>SDA</td></tr>
    <tr><td>4</td><td>SCL</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>An I2C port</b><span>Prime header GG, or a 3.3&nbsp;V Qwiic host that tolerates clock stretching.</span></div>
  <div class="xb-card"><b>A cable</b><span>Gadgeteer ten-way or Qwiic.</span></div>
  <div class="xb-card"><b>Non-magnetic screws</b><span>Steel disturbs the magnetometer.</span></div>
  <div class="xb-card"><b>Your own driver</b><span>None is supplied.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Minimum wiring">
<svg viewBox="0 0 1000 242" role="img" aria-labelledby="xb-imu-wire-t">
<title id="xb-imu-wire-t">Minimum wiring: contact 1 to contact 1, 3.3 V; PF0, contact 8 to contact 8, SDA; PF1, contact 9 to contact 9, SCL; contact 10 to contact 10, ground.</title>
<rect x="20" y="20" width="280" height="202" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="160.0" y="126.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea"></text>
<rect x="700" y="20" width="280" height="202" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="840.0" y="126.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea"></text>
<text x="160" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Prime header GG (J38)</text>
<text x="840" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">IMU J1</text>
<path d="M300 84H700" stroke="#ff9f43" stroke-width="3" fill="none"/><circle cx="300" cy="84" r="5" fill="#ff9f43"/><circle cx="700" cy="84" r="5" fill="#ff9f43"/><text x="286" y="89" text-anchor="end" font-size="13" fill="#eaeaea">contact 1</text><text x="714" y="89" font-size="13" fill="#eaeaea">contact 1</text><text x="500" y="77" text-anchor="middle" font-size="12" fill="#b3b3b3">3.3 V</text>
<path d="M300 122H700" stroke="#5fb3ff" stroke-width="3" fill="none"/><circle cx="300" cy="122" r="5" fill="#5fb3ff"/><circle cx="700" cy="122" r="5" fill="#5fb3ff"/><text x="286" y="127" text-anchor="end" font-size="13" fill="#eaeaea">PF0, contact 8</text><text x="714" y="127" font-size="13" fill="#eaeaea">contact 8</text><text x="500" y="115" text-anchor="middle" font-size="12" fill="#b3b3b3">SDA</text>
<path d="M300 160H700" stroke="#6fe08a" stroke-width="3" fill="none"/><circle cx="300" cy="160" r="5" fill="#6fe08a"/><circle cx="700" cy="160" r="5" fill="#6fe08a"/><text x="286" y="165" text-anchor="end" font-size="13" fill="#eaeaea">PF1, contact 9</text><text x="714" y="165" font-size="13" fill="#eaeaea">contact 9</text><text x="500" y="153" text-anchor="middle" font-size="12" fill="#b3b3b3">SCL</text>
<path d="M300 198H700" stroke="#b3b3b3" stroke-width="3" fill="none"/><circle cx="300" cy="198" r="5" fill="#b3b3b3"/><circle cx="700" cy="198" r="5" fill="#b3b3b3"/><text x="286" y="203" text-anchor="end" font-size="13" fill="#eaeaea">contact 10</text><text x="714" y="203" font-size="13" fill="#eaeaea">contact 10</text><text x="500" y="191" text-anchor="middle" font-size="12" fill="#b3b3b3">ground</text>
</svg>
  </div>
  <figcaption>Four connections for I2C. Interrupt and reset are optional.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Mount the board</h3>
    <p>Away from motors, magnets and steel, with the orientation you need.</p>
  </li>
  <li class="xb-step">
    <h3>Connect with the power off</h3>
    <p>Use J1 or Qwiic.</p>
  </li>
  <li class="xb-step">
    <h3>Find the device</h3>
    <p>Wait for start-up, then read the chip identity register (0x00).</p>
    <p class="xb-expect">By the data sheet the device answers at 0x28 and the register reads 0xA0.</p>
  </li>
  <li class="xb-step">
    <h3>Calibrate</h3>
    <p>Follow the Bosch calibration movements in your driver before relying on heading.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Read orientation</td><td>None</td><td>No SmoothieV2 driver for this sensor</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

There is nothing to add to `config.ini`.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
<svg viewBox="0 0 1000 110" role="img" aria-labelledby="xb-imu-how-t">
<title id="xb-imu-how-t">The sensor measures motion and magnetic field, fuses them and answers over I2C.</title>
<rect x="20.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="120.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Motion and field</text><text x="120.0" y="67.0" text-anchor="middle" font-size="12" fill="#b3b3b3">9 axes</text>
<path d="M220.0 51H273.3" stroke="#b3b3b3" stroke-width="3"/><path d="M273.3 51l-9 -5v10z" fill="#b3b3b3"/>
<rect x="273.3" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="373.3" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">U1 BNO055</text><text x="373.3" y="67.0" text-anchor="middle" font-size="12" fill="#b3b3b3">measure and fuse</text>
<path d="M473.3 51H526.6" stroke="#b3b3b3" stroke-width="3"/><path d="M526.6 51l-9 -5v10z" fill="#b3b3b3"/>
<rect x="526.7" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="626.7" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">I2C</text><text x="626.7" y="67.0" text-anchor="middle" font-size="12" fill="#b3b3b3">SDA, SCL</text>
<path d="M726.7 51H780.0" stroke="#b3b3b3" stroke-width="3"/><path d="M780.0 51l-9 -5v10z" fill="#b3b3b3"/>
<rect x="780.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="880.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Your driver</text><text x="880.0" y="67.0" text-anchor="middle" font-size="12" fill="#b3b3b3">read angles</text>
</svg>
  </div>
  <figcaption>One digital path.</figcaption>
</figure>
{:/nomarkdown}

The chip contains the three sensors and a small processor that combines them into orientation. Two grounded protocol pins select I2C. The chip stretches the I2C clock, which the host must support. The reset line is held high on the board and can be pulled low by the controller.

## Solder links {#options}

Open JP1 and JP2 when another board on the bus already has pull-ups.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Solder links">
<svg viewBox="0 0 1000 218" role="img" aria-labelledby="xb-imu-jp-t">
<title id="xb-imu-jp-t">Solder links as delivered: JP1 closed; JP2 closed; JP3 open; JP4 open; JP6 open; JP8 closed; JP9 closed.</title>
<rect x="20" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="72" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="114" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="98" y="34" width="20" height="10" fill="#e0b84a"/>
<text x="108" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP1 · closed</text><text x="108" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">SDA pull-up</text>
<rect x="216" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="268" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="310" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="294" y="34" width="20" height="10" fill="#e0b84a"/>
<text x="304" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP2 · closed</text><text x="304" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">SCL pull-up</text>
<rect x="412" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="464" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="506" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="500" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP3 · open</text><text x="500" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">chain interrupt</text>
<rect x="608" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="660" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="702" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="696" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP4 · open</text><text x="696" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">address 0x29</text>
<rect x="804" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="856" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="898" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="892" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP6 · open</text><text x="892" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">chain reset</text>
<rect x="20" y="114" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="72" y="128" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="114" y="128" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="98" y="138" width="20" height="10" fill="#e0b84a"/>
<text x="108" y="176" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP8 · closed</text><text x="108" y="194" text-anchor="middle" font-size="11" fill="#b3b3b3">chain SDA</text>
<rect x="216" y="114" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="268" y="128" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="310" y="128" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="294" y="138" width="20" height="10" fill="#e0b84a"/>
<text x="304" y="176" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP9 · closed</text><text x="304" y="194" text-anchor="middle" font-size="11" fill="#b3b3b3">chain SCL</text>
</svg>
  </div>
  <figcaption>The links as delivered. Close one with a small blob of solder across both pads; open it by removing the solder or cutting the copper between the pads.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>What it does</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>JP1</td><td>Connects the SDA pull-up</td><td>Closed</td></tr>
    <tr><td>JP2</td><td>Connects the SCL pull-up</td><td>Closed</td></tr>
    <tr><td>JP3</td><td>Joins the interrupt to the chain</td><td>Open</td></tr>
    <tr><td>JP4</td><td>Selects address 0x29</td><td>Open</td></tr>
    <tr><td>JP6</td><td>Joins reset to the chain</td><td>Open</td></tr>
    <tr><td>JP8</td><td>Continues SDA to the chain</td><td>Closed</td></tr>
    <tr><td>JP9</td><td>Continues SCL to the chain</td><td>Closed</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Chaining {#chaining}

Further I2C devices can follow, each with its own address.

{::nomarkdown}
{% include _includes/extension-chain-figure.html id="xb-imu" board="9-axis IMU board" in_label="I IN" chain_label="CHAIN" lane1="pin 3, interrupt" lane2="pin 8, SDA" lane3="pin 9, SCL" s1="open" s2="closed" s3="closed" caption="The bus continues; the interrupt stops here." %}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>On CHAIN</th></tr></thead>
  <tbody>
    <tr><td>1, 2, 10</td><td>Power and ground</td><td>Passed on</td></tr>
    <tr><td>3, 6</td><td>Interrupt, reset</td><td>Stopped by open links</td></tr>
    <tr><td>4, 5, 7</td><td>Free</td><td>Passed on</td></tr>
    <tr><td>8, 9</td><td>I2C</td><td>Passed on through closed links</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Likely cause</th><th>What to check</th></tr></thead>
  <tbody>
    <tr><td>No answer on the bus</td><td>Wiring, pull-ups, or start-up not finished</td><td>Test points; wait after power up</td></tr>
    <tr><td>Occasional bus errors</td><td>Host does not handle clock stretching</td><td>Lower the clock or use a host that does</td></tr>
    <tr><td>Heading wrong or drifting</td><td>Magnetic disturbance or no calibration</td><td>Move away from steel and motors; calibrate</td></tr>
    <tr><td>Answers at 0x29</td><td>JP4 closed</td><td>Open it for 0x28</td></tr>
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
    <tr><td><a href="/images/extensions/nine-axis-imu/nine-axis-imu-schematic.pdf">Schematic (PDF)</a></td><td>The circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/nine-axis-imu/nine-axis-imu-bom.csv">Parts list (CSV)</a></td><td>Every component with its value, footprint and part number where one is chosen</td></tr>
    <tr><td><a href="/images/extensions/nine-axis-imu/nine-axis-imu-diagram.webp">Board drawing (WebP)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side. Use non-magnetic hardware.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-imu-mount-t">
  <title id="xb-imu-mount-t">Mounting drawing of the 9-axis IMU board, component side: outline 40 by 40 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="310.0" y="78.0" width="340.0" height="340.0" rx="8.5" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M310.0 56H650.0"/><path d="M310.0 50V62"/><path d="M650.0 50V62"/><path d="M676.0 78.0V418.0"/><path d="M670.0 78.0h12"/><path d="M670.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">40</text>
  <text x="688.0" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">40</text>
  <circle cx="310.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="298.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M252.0 104.0h30" fill="none"/><path d="M286.0 104.0l-8 -4v8z"/><path d="M252.0 104.0v30" fill="none"/><path d="M252.0 138.0l-4 -8h8z"/></g>
  <text x="290.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="248.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="352.5" cy="120.5" r="13.6" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M334.9 120.5h35.2M352.5 102.9v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="338.9" y="154.1" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.00</text>
  <circle cx="607.5" cy="120.5" r="13.6" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M589.9 120.5h35.2M607.5 102.9v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="621.1" y="154.1" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  35.00, 5.00</text>
  <circle cx="352.5" cy="375.5" r="13.6" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M334.9 375.5h35.2M352.5 357.9v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="338.9" y="351.9" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 35.00</text>
  <circle cx="607.5" cy="375.5" r="13.6" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M589.9 375.5h35.2M607.5 357.9v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="621.1" y="351.9" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">4</tspan>  35.00, 35.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 40 × 40&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>35.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>5.00</td><td>35.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>35.00</td><td>35.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Every figure is a design value, a calculated or simulated value, or a manufacturer&rsquo;s data sheet value, as the last column says. A dash means no figure is given.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis</th></tr></thead>
  <tbody>
    <tr><td>Supply</td><td>J1 contact 1</td><td>2.4 V</td><td>3.3 V</td><td>3.6 V</td><td>Bosch data sheet</td></tr>
    <tr><td>Supply current allowance</td><td>3.3 V</td><td>&mdash;</td><td>&mdash;</td><td>25 mA</td><td>Design allowance</td></tr>
    <tr><td>Pull-up current, both lines low</td><td>3.3 V</td><td>&mdash;</td><td>2.0 mA</td><td>&mdash;</td><td>Calculated</td></tr>
    <tr><td>Rise time, one pull-up set, 100 pF</td><td>SDA, SCL</td><td>&mdash;</td><td>280 ns</td><td>300 ns</td><td>Simulated; limit for 400 kHz</td></tr>
    <tr><td>Low level, two pull-up sets</td><td>SDA, SCL</td><td>&mdash;</td><td>0.12 V</td><td>0.4 V</td><td>Simulated</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Component stress limits

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Part</th><th>Limit</th><th>Use on this board</th></tr></thead>
  <tbody>
    <tr><td>Any signal</td><td>3.6 V maximum</td><td>Do not connect 5 V logic</td></tr>
    <tr><td>Capacitors</td><td>10 V and 16 V</td><td>3.3 V</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: simulation {#simulation}

The I2C bus loading was simulated with ngspice with 100&nbsp;pF of bus capacitance.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Simulated results against limits">
<svg viewBox="0 0 1000 186" role="img" aria-labelledby="xb-imu-sim-t">
<title id="xb-imu-sim-t">Each simulated value (yellow mark) against its allowed range (green band).</title>
<text x="385" y="33" text-anchor="end" font-size="13" fill="#eaeaea">Rise time 30 to 70 %, one pull-up set, 100 pF (400</text>
<text x="385" y="49" text-anchor="end" font-size="13" fill="#eaeaea">kHz limit 300 ns)</text>
<path d="M400 36H860" stroke="#404040" stroke-width="10" stroke-linecap="round"/><path d="M400.0 36H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M782.8 23v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="41" font-size="13" font-weight="700" fill="#ffcc33">280&nbsp;ns</text>
<text x="385" y="93" text-anchor="end" font-size="13" fill="#eaeaea">Rise time with two pull-up sets</text>
<path d="M400 88H860" stroke="#404040" stroke-width="10" stroke-linecap="round"/><path d="M400.0 88H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M591.4 75v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="93" font-size="13" font-weight="700" fill="#ffcc33">140&nbsp;ns</text>
<text x="385" y="145" text-anchor="end" font-size="13" fill="#eaeaea">Low level with two pull-up sets</text>
<path d="M400 140H860" stroke="#404040" stroke-width="10" stroke-linecap="round"/><path d="M400.0 140H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M518.9 127v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="145" font-size="13" font-weight="700" fill="#ffcc33">0.12&nbsp;V</text>
</svg>
  </div>
  <figcaption>Simulated value (yellow) against the limit used for it (green). Each bar has its own scale.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Result</th><th>Simulated value</th><th>Limit</th><th>Outcome</th></tr></thead>
  <tbody>
    <tr><td>Rise time 30 to 70 %, one pull-up set, 100 pF (400 kHz limit 300 ns)</td><td>280&nbsp;ns</td><td>at most 300&nbsp;ns</td><td>Within</td></tr>
    <tr><td>Rise time with two pull-up sets</td><td>140&nbsp;ns</td><td>at most 300&nbsp;ns</td><td>Within</td></tr>
    <tr><td>Low level with two pull-up sets</td><td>0.12&nbsp;V</td><td>at most 400&nbsp;mV</td><td>Within</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Not simulated: the sensor, its fusion and magnetic disturbance.

## Appendix: datasheet {#datasheets}

The first page of the sensor data sheet. Click the page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/nine-axis-imu/datasheets/bno055.pdf"><img src="/images/extensions/nine-axis-imu/datasheets/bno055-page1.png" alt="First page of the BNO055 intelligent 9-axis absolute orientation sensor datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/nine-axis-imu/datasheets/bno055.pdf">BNO055 intelligent 9-axis absolute orientation sensor</a> — Bosch Sensortec, 117 pages.</figcaption>
</figure>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
