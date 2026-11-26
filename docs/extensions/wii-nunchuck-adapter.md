---
layout: default
title: "Wii Nunchuck adapter"
description: "Plug a Wii Nunchuk controller into a Gadgeteer I2C socket or Qwiic: pinout, wiring, solder links, limits and files."
permalink: /extensions/wii-nunchuck-adapter
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Controls and displays</p>
    <h1 id="wii-nunchuck-adapter">Wii Nunchuck adapter</h1>
    <p class="xb-lead">A small adapter whose board edge takes the plug of a Wii Nunchuk, putting its thumb stick, two buttons and accelerometer on an I2C bus. Reading it needs your own driver.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/wii-nunchuck-adapter/wii-nunchuck-adapter-diagram.png" alt="Top view of the adapter: a shaped tongue at one end that enters the controller plug, a socket on the left and right edges and a Qwiic connector.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>
<div class="xb-stats">
  <div class="xb-stat"><b>Stick + 2 buttons</b><span>plus an accelerometer</span></div>
  <div class="xb-stat"><b>0x52</b><span>usual controller I2C address</span></div>
  <div class="xb-stat"><b>3.3 V</b><span>only</span></div>
  <div class="xb-stat"><b>I2C + Qwiic</b><span>two ways in</span></div>
  <div class="xb-stat"><b>1.6 mm</b><span>board thickness at the tongue</span></div>
  <div class="xb-stat"><b>40 &times; 50</b><span>millimetres, four M3 holes</span></div>
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
  A hand controller can disconnect at any time. Never use it for safety or emergency stop. This product is not affiliated with Nintendo.
</sl-alert>
{:/nomarkdown}

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>A cabled hand controller as a jog stick with buttons</td></tr>
    <tr><td>Controller</td><td>Wii Nunchuk or compatible; bought separately. Address 0x52 is the widely documented value; third-party controllers differ</td></tr>
    <tr><td>Interface</td><td>I2C with removable 3.3&nbsp;k&Omega; pull-ups</td></tr>
    <tr><td>Controller plug</td><td>The shaped board edge (J4); no purchased connector. Gold (ENIG) contact finish recommended</td></tr>
    <tr><td>Supply</td><td>3.3&nbsp;V from the socket; allow 10&nbsp;mA for the controller</td></tr>
    <tr><td>Connectors</td><td>Two Gadgeteer type I sockets (Samtec SHF-105, 1.27&nbsp;mm) and one Qwiic</td></tr>
    <tr><td>Size</td><td>40 &times; 50&nbsp;mm, four M3 holes on a 30 &times; 40&nbsp;mm pattern</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> header GG electrically; no firmware driver</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0; the tongue contact geometry derives from Adafruit&rsquo;s adapter, published under CC BY-SA 3.0</td></tr>
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
      <img src="/images/extensions/wii-nunchuck-adapter/wii-nunchuck-adapter-diagram.png" alt="Top view of the Nunchuck adapter with 10 numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:50.0%;top:11.9%" aria-label="1: controller tongue (j4)">1<span class="xb-pop"><b>Controller tongue (J4)</b> — The controller plug pushes onto this edge.</span></a>
      <a class="xb-mk xb-pl" href="#tour-2" style="left:13.3%;top:50.0%" aria-label="2: input socket i in (j1)">2<span class="xb-pop"><b>Input socket I IN (J1)</b> — SDA on contact 8, SCL on 9.</span></a>
      <a class="xb-mk xb-pr" href="#tour-3" style="left:86.7%;top:50.0%" aria-label="3: chain socket chain (j2)">3<span class="xb-pop"><b>Chain socket CHAIN (J2)</b> — Continues the bus.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:50.0%;top:85.6%" aria-label="4: qwiic connector (j3)">4<span class="xb-pop"><b>Qwiic connector (J3)</b> — The same bus on a four-way cable.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:45.2%;top:49.0%" aria-label="5: bus pull-ups (r1, r2)">5<span class="xb-pop"><b>Bus pull-ups (R1, R2)</b> — 3.3&nbsp;k&Omega;.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:35.7%;top:49.0%" aria-label="6: pull-up links (jp1, jp2)">6<span class="xb-pop"><b>Pull-up links (JP1, JP2)</b> — Closed as delivered.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:70.2%;top:43.3%" aria-label="7: chain links (jp8, jp9)">7<span class="xb-pop"><b>Chain links (JP8, JP9)</b> — Closed as delivered.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:50.0%;top:32.7%" aria-label="8: supply link (fb1)">8<span class="xb-pop"><b>Supply link (FB1)</b> — A 0&nbsp;&Omega; part in the controller supply, useful for measuring current.</span></a>
      <a class="xb-mk xb-pb" href="#tour-9" style="left:61.9%;top:32.7%" aria-label="9: supply capacitors (c1, c2)">9<span class="xb-pop"><b>Supply capacitors (C1, C2)</b> — Next to the controller feed.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-10" style="left:14.3%;top:11.5%" aria-label="10: mounting hole">10<span class="xb-pop"><b>Mounting hole</b> — One of four M3 holes.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Controller tongue (J4)</b> — The controller plug pushes onto this edge.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Input socket I IN (J1)</b> — SDA on contact 8, SCL on 9.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Chain socket CHAIN (J2)</b> — Continues the bus.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Qwiic connector (J3)</b> — The same bus on a four-way cable.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Bus pull-ups (R1, R2)</b> — 3.3&nbsp;k&Omega;.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Pull-up links (JP1, JP2)</b> — Closed as delivered.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Chain links (JP8, JP9)</b> — Closed as delivered.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Supply link (FB1)</b> — A 0&nbsp;&Omega; part in the controller supply, useful for measuring current.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Supply capacitors (C1, C2)</b> — Next to the controller feed.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Mounting hole</b> — One of four M3 holes.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

Check contact numbering with the power removed before wiring by hand.

### J1: input socket (I IN)

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>Use</th><th>Prime header GG</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Board and controller supply</td><td>3.3 V</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Passed to the chain only</td><td>5 V</td></tr>
    <tr><td>3 to 7</td><td>Passed through</td><td>Not used</td><td>PH2, PH4, PC0, PF15, PH3</td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">SDA</span></td><td>I2C data</td><td>PF0 (I2C2_SDA)</td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">SCL</span></td><td>I2C clock</td><td>PF1 (I2C2_SCL)</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Ground</td><td>GND</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J4: controller tongue

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Ground</td></tr>
    <tr><td>2</td><td>Controller detect, not used</td></tr>
    <tr><td>3</td><td>SCL</td></tr>
    <tr><td>4</td><td>3.3 V</td></tr>
    <tr><td>5</td><td>SDA</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>A Nunchuk</b><span>Original or compatible.</span></div>
  <div class="xb-card"><b>An I2C port</b><span>Prime header GG or a 3.3&nbsp;V Qwiic host.</span></div>
  <div class="xb-card"><b>A cable</b><span>Gadgeteer ten-way or Qwiic.</span></div>
  <div class="xb-card"><b>Your own driver</b><span>None is supplied.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Minimum wiring">
<svg viewBox="0 0 1000 242" role="img" aria-labelledby="xb-nunchuk-wire-t">
<title id="xb-nunchuk-wire-t">Minimum wiring: contact 1 to contact 1, 3.3 V; PF0, contact 8 to contact 8, SDA; PF1, contact 9 to contact 9, SCL; contact 10 to contact 10, ground.</title>
<rect x="20" y="20" width="280" height="202" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="160.0" y="126.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2"></text>
<rect x="700" y="20" width="280" height="202" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="840.0" y="126.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2"></text>
<text x="160" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Prime header GG (J38)</text>
<text x="840" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Adapter J1</text>
<path d="M300 84H700" stroke="#ff9f43" stroke-width="3" fill="none"/><circle cx="300" cy="84" r="5" fill="#ff9f43"/><circle cx="700" cy="84" r="5" fill="#ff9f43"/><text x="286" y="89" text-anchor="end" font-size="13" fill="#e6ebf2">contact 1</text><text x="714" y="89" font-size="13" fill="#e6ebf2">contact 1</text><text x="500" y="77" text-anchor="middle" font-size="12" fill="#a9b4c2">3.3 V</text>
<path d="M300 122H700" stroke="#5fb3ff" stroke-width="3" fill="none"/><circle cx="300" cy="122" r="5" fill="#5fb3ff"/><circle cx="700" cy="122" r="5" fill="#5fb3ff"/><text x="286" y="127" text-anchor="end" font-size="13" fill="#e6ebf2">PF0, contact 8</text><text x="714" y="127" font-size="13" fill="#e6ebf2">contact 8</text><text x="500" y="115" text-anchor="middle" font-size="12" fill="#a9b4c2">SDA</text>
<path d="M300 160H700" stroke="#6fe08a" stroke-width="3" fill="none"/><circle cx="300" cy="160" r="5" fill="#6fe08a"/><circle cx="700" cy="160" r="5" fill="#6fe08a"/><text x="286" y="165" text-anchor="end" font-size="13" fill="#e6ebf2">PF1, contact 9</text><text x="714" y="165" font-size="13" fill="#e6ebf2">contact 9</text><text x="500" y="153" text-anchor="middle" font-size="12" fill="#a9b4c2">SCL</text>
<path d="M300 198H700" stroke="#a9b4c2" stroke-width="3" fill="none"/><circle cx="300" cy="198" r="5" fill="#a9b4c2"/><circle cx="700" cy="198" r="5" fill="#a9b4c2"/><text x="286" y="203" text-anchor="end" font-size="13" fill="#e6ebf2">contact 10</text><text x="714" y="203" font-size="13" fill="#e6ebf2">contact 10</text><text x="500" y="191" text-anchor="middle" font-size="12" fill="#a9b4c2">ground</text>
</svg>
  </div>
  <figcaption>Four connections.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Mount the adapter</h3>
    <p>Leave the tongue accessible and relieve the controller cable.</p>
  </li>
  <li class="xb-step">
    <h3>Connect with the power off</h3>
    <p>Use J1 or Qwiic.</p>
  </li>
  <li class="xb-step">
    <h3>Plug in the controller</h3>
    <p>Push it on squarely, in the same orientation as on the Adafruit adapter. Do not force it.</p>
  </li>
  <li class="xb-step">
    <h3>Read it</h3>
    <p>Your driver initialises the controller and reads six bytes at address 0x52.</p>
    <p class="xb-expect">Moving the stick should change the first two bytes.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Read the controller</td><td>None</td><td>No SmoothieV2 driver for it</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

There is nothing to add to `config.ini`.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
<svg viewBox="0 0 1000 110" role="img" aria-labelledby="xb-nunchuk-how-t">
<title id="xb-nunchuk-how-t">The adapter simply connects the controller to the I2C bus and 3.3 V.</title>
<rect x="20.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="120.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Nunchuk</text><text x="120.0" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">stick, buttons</text>
<path d="M220.0 51H273.3" stroke="#a9b4c2" stroke-width="3"/><path d="M273.3 51l-9 -5v10z" fill="#a9b4c2"/>
<rect x="273.3" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="373.3" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J4 tongue</text><text x="373.3" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">four contacts</text>
<path d="M473.3 51H526.6" stroke="#a9b4c2" stroke-width="3"/><path d="M526.6 51l-9 -5v10z" fill="#a9b4c2"/>
<rect x="526.7" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="626.7" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">I2C bus</text><text x="626.7" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">with pull-ups</text>
<path d="M726.7 51H780.0" stroke="#a9b4c2" stroke-width="3"/><path d="M780.0 51l-9 -5v10z" fill="#a9b4c2"/>
<rect x="780.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="880.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Your driver</text><text x="880.0" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">read data</text>
</svg>
  </div>
  <figcaption>One digital path.</figcaption>
</figure>
{:/nomarkdown}

The controller already contains the converter and accelerometer and answers as an I2C device. The adapter provides power, ground, the two bus lines and pull-up resistors. Because the controller address is fixed, only one controller can sit on a bus.

## Solder links {#options}

Open JP1 and JP2 when another board on the bus already provides pull-ups.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Solder links">
<svg viewBox="0 0 1000 114" role="img" aria-labelledby="xb-nunchuk-jp-t">
<title id="xb-nunchuk-jp-t">Solder links as delivered: JP1 closed; JP2 closed; JP8 closed; JP9 closed.</title>
<rect x="20" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="72" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="114" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="98" y="34" width="20" height="10" fill="#e0b84a"/>
<text x="108" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP1 · closed</text><text x="108" y="90" text-anchor="middle" font-size="11" fill="#a9b4c2">SDA pull-up</text>
<rect x="216" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="268" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="310" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="294" y="34" width="20" height="10" fill="#e0b84a"/>
<text x="304" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP2 · closed</text><text x="304" y="90" text-anchor="middle" font-size="11" fill="#a9b4c2">SCL pull-up</text>
<rect x="412" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="464" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="506" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="490" y="34" width="20" height="10" fill="#e0b84a"/>
<text x="500" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP8 · closed</text><text x="500" y="90" text-anchor="middle" font-size="11" fill="#a9b4c2">chain SDA</text>
<rect x="608" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="660" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="702" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="686" y="34" width="20" height="10" fill="#e0b84a"/>
<text x="696" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP9 · closed</text><text x="696" y="90" text-anchor="middle" font-size="11" fill="#a9b4c2">chain SCL</text>
</svg>
  </div>
  <figcaption>The links as delivered. Close one with a small blob of solder across both pads; open it by removing the solder or cutting the copper between the pads.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>What it does</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>JP1</td><td>Connects the SDA pull-up</td><td>Closed</td></tr>
    <tr><td>JP2</td><td>Connects the SCL pull-up</td><td>Closed</td></tr>
    <tr><td>JP8</td><td>Continues SDA</td><td>Closed</td></tr>
    <tr><td>JP9</td><td>Continues SCL</td><td>Closed</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Chaining {#chaining}

Other I2C devices with different addresses can follow.

{::nomarkdown}
{% include _includes/extension-chain-figure.html id="xb-nunchuk" board="Nunchuck adapter" in_label="I IN" chain_label="CHAIN" lane1="pin 7, free" lane2="pin 8, SDA" lane3="pin 9, SCL" s1="closed" s2="closed" s3="closed" caption="All three continue; pin 7 is wired straight through." %}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>On CHAIN</th></tr></thead>
  <tbody>
    <tr><td>1, 2, 10</td><td>Power and ground</td><td>Passed on</td></tr>
    <tr><td>3 to 7</td><td>Free</td><td>Passed on</td></tr>
    <tr><td>8, 9</td><td>I2C</td><td>Passed on through closed links</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Likely cause</th><th>What to check</th></tr></thead>
  <tbody>
    <tr><td>No answer on the bus</td><td>Controller not seated or reversed</td><td>Reseat it; test points</td></tr>
    <tr><td>Reads all 0xFF</td><td>Controller not initialised</td><td>Send its initialisation first</td></tr>
    <tr><td>Intermittent data</td><td>Plug loose or long cable</td><td>Seat the plug; lower the bus clock</td></tr>
    <tr><td>Second controller conflicts</td><td>Same fixed address</td><td>Use a separate bus</td></tr>
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
    <tr><td><a href="/images/extensions/wii-nunchuck-adapter/wii-nunchuck-adapter-schematic.pdf">Schematic (PDF)</a></td><td>The circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/wii-nunchuck-adapter/wii-nunchuck-adapter-bom.csv">Parts list (CSV)</a></td><td>Every component with its value, footprint and part number where one is chosen</td></tr>
    <tr><td><a href="/images/extensions/wii-nunchuck-adapter/wii-nunchuck-adapter-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side. Keep the tongue end clear of the enclosure so the plug can seat.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-nunchuk-mount-t">
  <title id="xb-nunchuk-mount-t">Mounting drawing of the Nunchuck adapter, component side: outline 40 by 50 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="344.0" y="78.0" width="272.0" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M344.0 56H616.0"/><path d="M344.0 50V62"/><path d="M616.0 50V62"/><path d="M642.0 78.0V418.0"/><path d="M636.0 78.0h12"/><path d="M636.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">40</text>
  <text x="654.0" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">50</text>
  <circle cx="344.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="332.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M286.0 104.0h30" fill="none"/><path d="M320.0 104.0l-8 -4v8z"/><path d="M286.0 104.0v30" fill="none"/><path d="M286.0 138.0l-4 -8h8z"/></g>
  <text x="324.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="282.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="378.0" cy="112.0" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M363.1 112.0h29.8M378.0 97.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="367.1" y="142.9" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.00</text>
  <circle cx="582.0" cy="112.0" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M567.1 112.0h29.8M582.0 97.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="592.9" y="142.9" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  35.00, 5.00</text>
  <circle cx="378.0" cy="384.0" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M363.1 384.0h29.8M378.0 369.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="367.1" y="363.1" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 45.00</text>
  <circle cx="582.0" cy="384.0" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M567.1 384.0h29.8M582.0 369.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="592.9" y="363.1" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  35.00, 45.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 40 × 50&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>35.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>5.00</td><td>45.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>35.00</td><td>45.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Every figure is a design value, a calculated or simulated value, or a manufacturer&rsquo;s data sheet value, as the last column says. A dash means no figure is given.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis</th></tr></thead>
  <tbody>
    <tr><td>Supply</td><td>J1 contact 1</td><td>&mdash;</td><td>3.3 V</td><td>&mdash;</td><td>Design</td></tr>
    <tr><td>Controller current allowance</td><td>3.3 V</td><td>&mdash;</td><td>&mdash;</td><td>10 mA</td><td>Design assumption</td></tr>
    <tr><td>Pull-up current, both lines low</td><td>3.3 V</td><td>&mdash;</td><td>2.0 mA</td><td>&mdash;</td><td>Calculated</td></tr>
    <tr><td>Bus rise time at 250 pF</td><td>SDA, SCL</td><td>&mdash;</td><td>0.70 &micro;s</td><td>1 &micro;s</td><td>Simulated</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Component stress limits

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Part</th><th>Limit</th><th>Use on this board</th></tr></thead>
  <tbody>
    <tr><td>Any signal</td><td>3.3 V</td><td>No ESD protection on the contacts</td></tr>
    <tr><td>Contacts</td><td>Board edge</td><td>Wear with repeated plugging</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: simulation {#simulation}

The I2C bus rise time with a long controller cable was simulated with ngspice.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Simulated results against limits">
<svg viewBox="0 0 1000 82" role="img" aria-labelledby="xb-nunchuk-sim-t">
<title id="xb-nunchuk-sim-t">Each simulated value (yellow mark) against its allowed range (green band).</title>
<text x="385" y="41" text-anchor="end" font-size="13" fill="#e6ebf2">I2C rise time 30 to 70 % at an assumed 250 pF</text>
<path d="M400 36H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M400.0 36H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M687.1 23v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="41" font-size="13" font-weight="700" fill="#ffcc33">0.70&nbsp;&micro;s</text>
</svg>
  </div>
  <figcaption>Simulated value (yellow) against the limit used for it (green). Each bar has its own scale.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Result</th><th>Simulated value</th><th>Limit</th><th>Outcome</th></tr></thead>
  <tbody>
    <tr><td>I2C rise time 30 to 70 % at an assumed 250 pF</td><td>0.70&nbsp;&micro;s</td><td>at most 1&nbsp;&micro;s</td><td>Within</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Not simulated: the controller, plug fit and electrostatic discharge.

## Appendix: datasheet {#datasheets}

No data sheet is linked: the controller has no published one, and the adapter uses only resistors and capacitors.

See all boards on the [extension boards](/extension-boards) page.
