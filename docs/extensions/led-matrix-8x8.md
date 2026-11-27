---
layout: default
title: "8x8 LED matrix"
description: "A red 8x8 LED matrix with a MAX7219 driver and 3.3 V to 5 V buffering on a Gadgeteer SPI socket: pinout, wiring, limits and files."
permalink: /extensions/led-matrix-8x8
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Controls and displays</p>
    <h1 id="led-matrix-8x8">8x8 LED matrix</h1>
    <p class="xb-lead">A square of 64 red LEDs for icons, a progress bar or an error code visible across a workshop. A driver chip refreshes the display, so the controller only sends eight bytes. Showing something needs your own driver.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/led-matrix-8x8/led-matrix-8x8-diagram.png" alt="Top view of the LED matrix board: the 8x8 matrix in the upper area, driver and buffer chips below and a socket on the left and right edges.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>
<div class="xb-stats">
  <div class="xb-stat"><b>8 &times; 8</b><span>red 1088AS matrix</span></div>
  <div class="xb-stat"><b>MAX7219</b><span>refreshes and dims</span></div>
  <div class="xb-stat"><b>3 wires</b><span>load, data, clock</span></div>
  <div class="xb-stat"><b>&asymp; 20 mA</b><span>peak per segment</span></div>
  <div class="xb-stat"><b>&asymp; 200 mA</b><span>estimated, all lit</span></div>
  <div class="xb-stat"><b>70 &times; 80</b><span>millimetres, four M3 holes</span></div>
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
    <tr><td>Purpose</td><td>Small pictures and codes. Not a safety indicator</td></tr>
    <tr><td>Matrix</td><td>1088AS type, 32&nbsp;mm, common-cathode rows; 1088BS types do not work</td></tr>
    <tr><td>Driver</td><td>Maxim MAX7219 with a 28&nbsp;k&Omega; current-set resistor</td></tr>
    <tr><td>Interface</td><td>Load on contact 6, data on 7, clock on 9, 10&nbsp;MHz maximum; buffered to 5&nbsp;V by an SN74AHCT125. No data returns</td></tr>
    <tr><td>Supply</td><td>5&nbsp;V from the socket, up to about 200&nbsp;mA</td></tr>
    <tr><td>Sockets</td><td>Two Gadgeteer type S sockets (Samtec SHF-105, 1.27&nbsp;mm)</td></tr>
    <tr><td>Size</td><td>70 &times; 80&nbsp;mm, four M3 holes on a 60 &times; 70&nbsp;mm pattern</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> header GE electrically; no firmware driver</td></tr>
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
      <img src="/images/extensions/led-matrix-8x8/led-matrix-8x8-diagram.png" alt="Top view of the LED matrix board with 10 numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:50.0%;top:35.4%" aria-label="1: led matrix (ds1)">1<span class="xb-pop"><b>LED matrix (DS1)</b> — Fit with its pin 1 at the lower left.</span></a>
      <a class="xb-mk xb-pl" href="#tour-2" style="left:7.8%;top:72.0%" aria-label="2: input socket s in (j1)">2<span class="xb-pop"><b>Input socket S IN (J1)</b> — Load 6, data 7, clock 9, 5&nbsp;V on 2.</span></a>
      <a class="xb-mk xb-pr" href="#tour-3" style="left:92.2%;top:72.0%" aria-label="3: chain socket chain (j2)">3<span class="xb-pop"><b>Chain socket CHAIN (J2)</b> — Data and clock continue.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:59.7%;top:76.8%" aria-label="4: display driver (u1)">4<span class="xb-pop"><b>Display driver (U1)</b> — MAX7219.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:33.3%;top:76.8%" aria-label="5: level buffer (u2)">5<span class="xb-pop"><b>Level buffer (U2)</b> — Turns 3.3&nbsp;V signals into 5&nbsp;V.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:75.0%;top:86.6%" aria-label="6: brightness resistor (r1)">6<span class="xb-pop"><b>Brightness resistor (R1)</b> — Sets the peak LED current.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:25.0%;top:87.8%" aria-label="7: load pull-up (r2)">7<span class="xb-pop"><b>Load pull-up (R2)</b> — Keeps chip select idle while the controller starts.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:75.0%;top:68.3%" aria-label="8: supply capacitors (c1 to c3)">8<span class="xb-pop"><b>Supply capacitors (C1 to C3)</b> — On 5&nbsp;V.</span></a>
      <a class="xb-mk xb-pl" href="#tour-9" style="left:19.4%;top:70.7%" aria-label="9: chain links">9<span class="xb-pop"><b>Chain links</b> — Load open; data and clock closed.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-10" style="left:8.3%;top:7.3%" aria-label="10: mounting hole">10<span class="xb-pop"><b>Mounting hole</b> — One of four M3 holes.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>LED matrix (DS1)</b> — Fit with its pin 1 at the lower left.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Input socket S IN (J1)</b> — Load 6, data 7, clock 9, 5&nbsp;V on 2.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Chain socket CHAIN (J2)</b> — Data and clock continue.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Display driver (U1)</b> — MAX7219.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Level buffer (U2)</b> — Turns 3.3&nbsp;V signals into 5&nbsp;V.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Brightness resistor (R1)</b> — Sets the peak LED current.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Load pull-up (R2)</b> — Keeps chip select idle while the controller starts.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Supply capacitors (C1 to C3)</b> — On 5&nbsp;V.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Chain links</b> — Load open; data and clock closed.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Mounting hole</b> — One of four M3 holes.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

Check the purchased matrix against the 1088AS pin diagram in the data sheets: sellers differ.

### J1: input socket (S IN)

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>Use</th><th>Prime header GE</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Pull-up supply</td><td>3.3 V</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Display supply</td><td>5 V</td></tr>
    <tr><td>3 to 5</td><td>Passed through</td><td>Not used</td><td>PE8, PJ7, PJ8</td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">CS</span></td><td>Load (latches on rising edge)</td><td>PD15</td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-sig">MOSI</span></td><td>Data</td><td>PB5 (SPI1_MOSI)</td></tr>
    <tr><td>8</td><td>Passed through</td><td>No data returns</td><td>PA6 (SPI1_MISO)</td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">SCK</span></td><td>Clock</td><td>PA5 (SPI1_SCK)</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Ground</td><td>GND</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>A 1088AS matrix</b><span>32 &times; 32&nbsp;mm, 16 pins.</span></div>
  <div class="xb-card"><b>An SPI port</b><span>Prime header GE.</span></div>
  <div class="xb-card"><b>A ten-way cable</b><span>1.27&nbsp;mm Gadgeteer ribbon cable.</span></div>
  <div class="xb-card"><b>Your own driver</b><span>None is supplied.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Minimum wiring">
<svg viewBox="0 0 1000 318" role="img" aria-labelledby="xb-matrix-wire-t">
<title id="xb-matrix-wire-t">Minimum wiring: contact 1 to contact 1, 3.3 V; contact 2 to contact 2, 5 V; PD15, contact 6 to contact 6, load; PB5, contact 7 to contact 7, data; PA5, contact 9 to contact 9, clock; contact 10 to contact 10, ground.</title>
<rect x="20" y="20" width="280" height="278" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="160.0" y="164.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea"></text>
<rect x="700" y="20" width="280" height="278" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="840.0" y="164.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea"></text>
<text x="160" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Prime header GE (J36)</text>
<text x="840" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Matrix J1</text>
<path d="M300 84H700" stroke="#ff9f43" stroke-width="3" fill="none"/><circle cx="300" cy="84" r="5" fill="#ff9f43"/><circle cx="700" cy="84" r="5" fill="#ff9f43"/><text x="286" y="89" text-anchor="end" font-size="13" fill="#eaeaea">contact 1</text><text x="714" y="89" font-size="13" fill="#eaeaea">contact 1</text><text x="500" y="77" text-anchor="middle" font-size="12" fill="#b3b3b3">3.3 V</text>
<path d="M300 122H700" stroke="#ff6b6b" stroke-width="3" fill="none"/><circle cx="300" cy="122" r="5" fill="#ff6b6b"/><circle cx="700" cy="122" r="5" fill="#ff6b6b"/><text x="286" y="127" text-anchor="end" font-size="13" fill="#eaeaea">contact 2</text><text x="714" y="127" font-size="13" fill="#eaeaea">contact 2</text><text x="500" y="115" text-anchor="middle" font-size="12" fill="#b3b3b3">5 V</text>
<path d="M300 160H700" stroke="#ffd75f" stroke-width="3" fill="none"/><circle cx="300" cy="160" r="5" fill="#ffd75f"/><circle cx="700" cy="160" r="5" fill="#ffd75f"/><text x="286" y="165" text-anchor="end" font-size="13" fill="#eaeaea">PD15, contact 6</text><text x="714" y="165" font-size="13" fill="#eaeaea">contact 6</text><text x="500" y="153" text-anchor="middle" font-size="12" fill="#b3b3b3">load</text>
<path d="M300 198H700" stroke="#5fb3ff" stroke-width="3" fill="none"/><circle cx="300" cy="198" r="5" fill="#5fb3ff"/><circle cx="700" cy="198" r="5" fill="#5fb3ff"/><text x="286" y="203" text-anchor="end" font-size="13" fill="#eaeaea">PB5, contact 7</text><text x="714" y="203" font-size="13" fill="#eaeaea">contact 7</text><text x="500" y="191" text-anchor="middle" font-size="12" fill="#b3b3b3">data</text>
<path d="M300 236H700" stroke="#c792ea" stroke-width="3" fill="none"/><circle cx="300" cy="236" r="5" fill="#c792ea"/><circle cx="700" cy="236" r="5" fill="#c792ea"/><text x="286" y="241" text-anchor="end" font-size="13" fill="#eaeaea">PA5, contact 9</text><text x="714" y="241" font-size="13" fill="#eaeaea">contact 9</text><text x="500" y="229" text-anchor="middle" font-size="12" fill="#b3b3b3">clock</text>
<path d="M300 274H700" stroke="#b3b3b3" stroke-width="3" fill="none"/><circle cx="300" cy="274" r="5" fill="#b3b3b3"/><circle cx="700" cy="274" r="5" fill="#b3b3b3"/><text x="286" y="279" text-anchor="end" font-size="13" fill="#eaeaea">contact 10</text><text x="714" y="279" font-size="13" fill="#eaeaea">contact 10</text><text x="500" y="267" text-anchor="middle" font-size="12" fill="#b3b3b3">ground</text>
</svg>
  </div>
  <figcaption>Six connections.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Fit the matrix</h3>
    <p>Check type and pin 1 position.</p>
  </li>
  <li class="xb-step">
    <h3>Connect with the power off</h3>
    <p>Plug J1 into header GE.</p>
  </li>
  <li class="xb-step">
    <h3>Initialise the driver</h3>
    <p>Set decode mode off (register 0x09 = 0), scan limit 7 (0x0B = 7), a low intensity (0x0A = 1), display test off (0x0F = 0), then leave shutdown (0x0C = 1).</p>
  </li>
  <li class="xb-step">
    <h3>Draw</h3>
    <p>Write one byte to each of registers 1 to 8.</p>
    <p class="xb-expect">By design each byte lights one row, most significant bit on the left.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Show a picture</td><td>None</td><td>No SmoothieV2 driver for the MAX7219</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

There is nothing to add to `config.ini`.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
<svg viewBox="0 0 1000 110" role="img" aria-labelledby="xb-matrix-how-t">
<title id="xb-matrix-how-t">Buffered SPI data goes to a driver that multiplexes the matrix.</title>
<rect x="20.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="120.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J1 SPI</text><text x="120.0" y="67.0" text-anchor="middle" font-size="12" fill="#b3b3b3">3.3 V</text>
<path d="M220.0 51H273.3" stroke="#b3b3b3" stroke-width="3"/><path d="M273.3 51l-9 -5v10z" fill="#b3b3b3"/>
<rect x="273.3" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="373.3" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">U2 buffer</text><text x="373.3" y="67.0" text-anchor="middle" font-size="12" fill="#b3b3b3">to 5 V</text>
<path d="M473.3 51H526.6" stroke="#b3b3b3" stroke-width="3"/><path d="M526.6 51l-9 -5v10z" fill="#b3b3b3"/>
<rect x="526.7" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="626.7" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">U1 MAX7219</text><text x="626.7" y="67.0" text-anchor="middle" font-size="12" fill="#b3b3b3">multiplex</text>
<path d="M726.7 51H780.0" stroke="#b3b3b3" stroke-width="3"/><path d="M780.0 51l-9 -5v10z" fill="#b3b3b3"/>
<rect x="780.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="880.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">DS1</text><text x="880.0" y="67.0" text-anchor="middle" font-size="12" fill="#b3b3b3">64 LEDs</text>
</svg>
  </div>
  <figcaption>One signal path.</figcaption>
</figure>
{:/nomarkdown}

The driver stores the eight bytes and lights one row after another fast enough that the picture looks steady. The resistor R1 sets the current, and the intensity register dims it further. The buffer is a logic family that reads 3.3&nbsp;V as high while driving 5&nbsp;V, which the driver needs.

## Solder links {#options}

The driver has no data output wired onward, so matrices cannot be daisy-chained into one long display. A second board needs its own load signal.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Solder links">
<svg viewBox="0 0 1000 114" role="img" aria-labelledby="xb-matrix-jp-t">
<title id="xb-matrix-jp-t">Solder links as delivered: JP6 open; JP7 closed; JP9 closed.</title>
<rect x="20" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="72" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="114" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="108" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP6 · open</text><text x="108" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">chain load</text>
<rect x="216" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="268" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="310" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="294" y="34" width="20" height="10" fill="#e0b84a"/>
<text x="304" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP7 · closed</text><text x="304" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">chain data</text>
<rect x="412" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="464" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="506" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="490" y="34" width="20" height="10" fill="#e0b84a"/>
<text x="500" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP9 · closed</text><text x="500" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">chain clock</text>
</svg>
  </div>
  <figcaption>The links as delivered. Close one with a small blob of solder across both pads; open it by removing the solder or cutting the copper between the pads.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>What it does</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>JP6</td><td>Joins load to the chain</td><td>Open</td></tr>
    <tr><td>JP7</td><td>Continues data</td><td>Closed</td></tr>
    <tr><td>JP9</td><td>Continues clock</td><td>Closed</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Chaining {#chaining}

Another SPI device can follow with its own chip select.

{::nomarkdown}
{% include _includes/extension-chain-figure.html id="xb-matrix" board="LED matrix board" in_label="S IN" chain_label="CHAIN" lane1="pin 6, load" lane2="pin 7, data" lane3="pin 9, clock" s1="open" s2="closed" s3="closed" caption="Data and clock continue; load stops here." %}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>On CHAIN</th></tr></thead>
  <tbody>
    <tr><td>1, 2, 10</td><td>Power and ground</td><td>Passed on</td></tr>
    <tr><td>3 to 5, 8</td><td>Free</td><td>Passed on</td></tr>
    <tr><td>6</td><td>Load</td><td>Stopped by open JP6</td></tr>
    <tr><td>7, 9</td><td>Data, clock</td><td>Passed on through closed links</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Likely cause</th><th>What to check</th></tr></thead>
  <tbody>
    <tr><td>Dark display</td><td>Driver still in shutdown, or no 5 V</td><td>Initialisation; test point +5V</td></tr>
    <tr><td>All LEDs lit</td><td>Display test mode on</td><td>Write 0 to register 0x0F</td></tr>
    <tr><td>Scrambled picture</td><td>Wrong matrix type or orientation</td><td>Compare with the 1088AS pin diagram</td></tr>
    <tr><td>Random changes</td><td>Noise or long cable</td><td>Shorten cable, lower SPI clock</td></tr>
    <tr><td>Controller supply dips</td><td>Full brightness draws much current</td><td>Lower the intensity</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-red"></span>Matrix LEDs</th></tr></thead>
  <tbody>
    <tr><td>Lit means</td><td>Whatever the driver last wrote</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/led-matrix-8x8/led-matrix-8x8-schematic.pdf">Schematic (PDF)</a></td><td>The circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/led-matrix-8x8/led-matrix-8x8-bom.csv">Parts list (CSV)</a></td><td>Every component with its value, footprint and part number where one is chosen</td></tr>
    <tr><td><a href="/images/extensions/led-matrix-8x8/led-matrix-8x8-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side. 

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-matrix-mount-t">
  <title id="xb-matrix-mount-t">Mounting drawing of the LED matrix board, component side: outline 70 by 80 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="331.2" y="78.0" width="297.5" height="340.0" rx="4.2" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M331.2 56H628.8"/><path d="M331.2 50V62"/><path d="M628.8 50V62"/><path d="M654.8 78.0V418.0"/><path d="M648.8 78.0h12"/><path d="M648.8 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">70</text>
  <text x="666.8" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">80</text>
  <circle cx="331.2" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="319.2" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M273.2 104.0h30" fill="none"/><path d="M307.2 104.0l-8 -4v8z"/><path d="M273.2 104.0v30" fill="none"/><path d="M273.2 138.0l-4 -8h8z"/></g>
  <text x="311.2" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="269.2" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="352.5" cy="99.2" r="6.8" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M341.7 99.2h21.6M352.5 88.5v21.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="345.7" y="126.0" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.00</text>
  <circle cx="607.5" cy="99.2" r="6.8" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M596.7 99.2h21.6M607.5 88.5v21.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="614.3" y="126.0" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  65.00, 5.00</text>
  <circle cx="352.5" cy="396.8" r="6.8" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M341.7 396.8h21.6M352.5 385.9v21.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="345.7" y="379.9" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 75.00</text>
  <circle cx="607.5" cy="396.8" r="6.8" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M596.7 396.8h21.6M607.5 385.9v21.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="614.3" y="379.9" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">4</tspan>  65.00, 75.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 70 × 80&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>65.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>5.00</td><td>75.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>65.00</td><td>75.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Every figure is a design value, a calculated or simulated value, or a manufacturer&rsquo;s data sheet value, as the last column says. A dash means no figure is given.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis</th></tr></thead>
  <tbody>
    <tr><td>Supply</td><td>5 V</td><td>&mdash;</td><td>5 V</td><td>&mdash;</td><td>Design</td></tr>
    <tr><td>Peak segment current</td><td>LED</td><td>&mdash;</td><td>20 mA</td><td>&mdash;</td><td>MAX7219 data sheet table</td></tr>
    <tr><td>Supply current, all lit</td><td>5 V</td><td>&mdash;</td><td>&mdash;</td><td>200 mA</td><td>Estimate</td></tr>
    <tr><td>SPI clock</td><td>J1</td><td>&mdash;</td><td>&mdash;</td><td>10 MHz</td><td>Data sheet</td></tr>
    <tr><td>Buffered high level</td><td>Driver inputs</td><td>3.5 V</td><td>5 V</td><td>5.05 V</td><td>Simulated</td></tr>
    <tr><td>Buffered edge time</td><td>Driver inputs</td><td>&mdash;</td><td>1.4 ns</td><td>5 ns</td><td>Simulated</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Component stress limits

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Part</th><th>Limit</th><th>Use on this board</th></tr></thead>
  <tbody>
    <tr><td>5 V supply</td><td>Shared host regulator</td><td>About 0.2 A at full brightness</td></tr>
    <tr><td>Capacitors</td><td>10 V and 16 V</td><td>5 V</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: simulation {#simulation}

A buffered signal edge was simulated with ngspice.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Simulated results against limits">
<svg viewBox="0 0 1000 134" role="img" aria-labelledby="xb-matrix-sim-t">
<title id="xb-matrix-sim-t">Each simulated value (yellow mark) against its allowed range (green band).</title>
<text x="385" y="41" text-anchor="end" font-size="13" fill="#eaeaea">Edge from low to high threshold at the driver</text>
<path d="M400 36H860" stroke="#404040" stroke-width="10" stroke-linecap="round"/><path d="M400.0 36H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M519.1 23v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="41" font-size="13" font-weight="700" fill="#ffcc33">1.4&nbsp;ns</text>
<text x="385" y="93" text-anchor="end" font-size="13" fill="#eaeaea">High level against 3.5 V minimum</text>
<path d="M400 88H860" stroke="#404040" stroke-width="10" stroke-linecap="round"/><path d="M444.5 88H815.5" stroke="#2f8f5b" stroke-width="10"/><path d="M803.5 75v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="93" font-size="13" font-weight="700" fill="#ffcc33">5&nbsp;V</text>
</svg>
  </div>
  <figcaption>Simulated value (yellow) against the limit used for it (green). Each bar has its own scale.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Result</th><th>Simulated value</th><th>Limit</th><th>Outcome</th></tr></thead>
  <tbody>
    <tr><td>Edge from low to high threshold at the driver</td><td>1.4&nbsp;ns</td><td>at most 5&nbsp;ns</td><td>Within</td></tr>
    <tr><td>High level against 3.5 V minimum</td><td>5&nbsp;V</td><td>3.5&nbsp;V to 5.05&nbsp;V</td><td>Within</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Not simulated: the matrix, driver temperature and brightness.

## Appendix: datasheet {#datasheets}

The first page of each data sheet. Click a page to open the PDF. The matrix drawings are reseller documents.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/led-matrix-8x8/datasheets/max7219.pdf"><img src="/images/extensions/led-matrix-8x8/datasheets/max7219-page1.png" alt="First page of the MAX7219 serial display driver datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/led-matrix-8x8/datasheets/max7219.pdf">MAX7219 serial display driver</a> — Maxim, 16 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/led-matrix-8x8/datasheets/1088as.pdf"><img src="/images/extensions/led-matrix-8x8/datasheets/1088as-page1.png" alt="First page of the 1088AS matrix pin diagram datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/led-matrix-8x8/datasheets/1088as.pdf">1088AS matrix pin diagram</a> — reseller document, 1 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/led-matrix-8x8/datasheets/1088-size.pdf"><img src="/images/extensions/led-matrix-8x8/datasheets/1088-size-page1.png" alt="First page of the 1088 matrix dimensions datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/led-matrix-8x8/datasheets/1088-size.pdf">1088 matrix dimensions</a> — reseller document, 2 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/led-matrix-8x8/datasheets/ahct125.pdf"><img src="/images/extensions/led-matrix-8x8/datasheets/ahct125-page1.png" alt="First page of the SN74AHCT125 quadruple buffer datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/led-matrix-8x8/datasheets/ahct125.pdf">SN74AHCT125 quadruple buffer</a> — Texas Instruments, 41 pages.</figcaption>
</figure>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
