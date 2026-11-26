---
layout: default
title: "64-pin SPI I/O expander"
description: "Four MCP23S17 expanders give 64 protected 3.3 V inputs or outputs from one SPI chip select: pinout, wiring, addressing, limits and files."
permalink: /extensions/spi-io-expander
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Controls and displays</p>
    <h1 id="spi-io-expander">64-pin SPI I/O expander</h1>
    <p class="xb-lead">Sixty-four extra 3.3&nbsp;V input or output lines on four headers, controlled over SPI with one chip select. Each line has a series resistor against wiring faults. Using it needs your own driver.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/spi-io-expander/spi-io-expander-diagram.png" alt="Top view of the I/O expander: four expander chips, resistor arrays and four 20-way pin headers, with sockets on the left and right edges.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>
<div class="xb-stats">
  <div class="xb-stat"><b>64 lines</b><span>each input or output</span></div>
  <div class="xb-stat"><b>4 &times; MCP23S17</b><span>one chip select</span></div>
  <div class="xb-stat"><b>220 &Omega;</b><span>in series with every line</span></div>
  <div class="xb-stat"><b>10 MHz</b><span>maximum SPI clock</span></div>
  <div class="xb-stat"><b>&lt; 100 mA</b><span>recommended total load</span></div>
  <div class="xb-stat"><b>110 &times; 80</b><span>millimetres, four M3 holes</span></div>
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
  Every line is 3.3&nbsp;V only. 12 or 24&nbsp;V on any line destroys the expander. Do not drive relays, motors or solenoids directly, and do not use these lines for safety inputs.
</sl-alert>
{:/nomarkdown}

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>Many switches, indicator drivers or logic signals from one SPI port</td></tr>
    <tr><td>Expanders</td><td>Four Microchip MCP23S17 at hardware addresses 0 to 3, software-enabled input pull-ups</td></tr>
    <tr><td>Lines</td><td>64 at 3.3&nbsp;V, 220&nbsp;&Omega; in series; about 7&nbsp;mA into a short</td></tr>
    <tr><td>Interrupt</td><td>One shared line on contact 3, 10&nbsp;k&Omega; pull-up</td></tr>
    <tr><td>Supply</td><td>3.3&nbsp;V from the socket; stay under 100&nbsp;mA of external load</td></tr>
    <tr><td>Connectors</td><td>Four 2 &times; 10 pin headers; two Gadgeteer type S sockets (Samtec SHF-105, 1.27&nbsp;mm)</td></tr>
    <tr><td>Size</td><td>110 &times; 80&nbsp;mm, four M3 holes on a 100 &times; 70&nbsp;mm pattern</td></tr>
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
      <img src="/images/extensions/spi-io-expander/spi-io-expander-diagram.png" alt="Top view of the I/O expander board with 11 numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pl" href="#tour-1" style="left:5.0%;top:50.0%" aria-label="1: input socket s in (j1)">1<span class="xb-pop"><b>Input socket S IN (J1)</b> — Chip select 6, MOSI 7, MISO 8, clock 9, interrupt 3, reset 4.</span></a>
      <a class="xb-mk xb-pr" href="#tour-2" style="left:95.0%;top:50.0%" aria-label="2: chain socket chain (j2)">2<span class="xb-pop"><b>Chain socket CHAIN (J2)</b> — SPI data and clock continue.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-3" style="left:20.2%;top:9.1%" aria-label="3: port 1 header (j3)">3<span class="xb-pop"><b>Port 1 header (J3)</b> — Lines of expander U1.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:59.4%;top:9.1%" aria-label="4: port 2 header (j4)">4<span class="xb-pop"><b>Port 2 header (J4)</b> — Lines of U2.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:40.6%;top:90.9%" aria-label="5: port 3 header (j5)">5<span class="xb-pop"><b>Port 3 header (J5)</b> — Lines of U3.</span></a>
      <a class="xb-mk xb-pr" href="#tour-6" style="left:79.8%;top:90.9%" aria-label="6: port 4 header (j6)">6<span class="xb-pop"><b>Port 4 header (J6)</b> — Lines of U4.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:30.4%;top:29.3%" aria-label="7: expanders (u1 to u4)">7<span class="xb-pop"><b>Expanders (U1 to U4)</b> — Hardware addresses 0 to 3.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-8" style="left:22.3%;top:26.9%" aria-label="8: series resistor arrays (rn1 to rn16)">8<span class="xb-pop"><b>Series resistor arrays (RN1 to RN16)</b> — 220&nbsp;&Omega; on every line.</span></a>
      <a class="xb-mk xb-pb" href="#tour-9" style="left:36.6%;top:37.8%" aria-label="9: interrupt resistors (r1 to r4)">9<span class="xb-pop"><b>Interrupt resistors (R1 to R4)</b> — Join the four interrupt outputs safely.</span></a>
      <a class="xb-mk xb-pl" href="#tour-10" style="left:14.3%;top:50.0%" aria-label="10: chain links">10<span class="xb-pop"><b>Chain links</b> — Data and clock closed; interrupt, reset and chip select open.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-11" style="left:5.4%;top:7.3%" aria-label="11: mounting hole">11<span class="xb-pop"><b>Mounting hole</b> — One of four M3 holes.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Input socket S IN (J1)</b> — Chip select 6, MOSI 7, MISO 8, clock 9, interrupt 3, reset 4.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket CHAIN (J2)</b> — SPI data and clock continue.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Port 1 header (J3)</b> — Lines of expander U1.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Port 2 header (J4)</b> — Lines of U2.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Port 3 header (J5)</b> — Lines of U3.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Port 4 header (J6)</b> — Lines of U4.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Expanders (U1 to U4)</b> — Hardware addresses 0 to 3.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Series resistor arrays (RN1 to RN16)</b> — 220&nbsp;&Omega; on every line.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Interrupt resistors (R1 to R4)</b> — Join the four interrupt outputs safely.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Chain links</b> — Data and clock closed; interrupt, reset and chip select open.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Mounting hole</b> — One of four M3 holes.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

Check pin 1 of each header against the board printing before wiring.

### J3 to J6: port headers (same pattern on each)

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Pins</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1 to 8</td><td>Port B, bit 7 down to bit 0</td></tr>
    <tr><td>9 to 16</td><td>Port A, bit 7 down to bit 0</td></tr>
    <tr><td>17, 18</td><td>3.3 V</td></tr>
    <tr><td>19, 20</td><td>Ground</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J1: input socket (S IN)

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>Use</th><th>Prime header GE</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Board supply</td><td>3.3 V</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Passed to the chain only</td><td>5 V</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">INT</span></td><td>Interrupt</td><td>PE8</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">RESET</span></td><td>Low resets all expanders</td><td>PJ7</td></tr>
    <tr><td>5</td><td>Passed through</td><td>Not used</td><td>PJ8</td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">CS</span></td><td>Chip select</td><td>PD15</td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-sig">MOSI</span></td><td>Data to board</td><td>PB5 (SPI1_MOSI)</td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">MISO</span></td><td>Data from board</td><td>PA6 (SPI1_MISO)</td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">SCK</span></td><td>Clock</td><td>PA5 (SPI1_SCK)</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Ground</td><td>GND</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>An SPI port</b><span>Prime header GE.</span></div>
  <div class="xb-card"><b>A ten-way cable</b><span>1.27&nbsp;mm Gadgeteer ribbon cable.</span></div>
  <div class="xb-card"><b>Header cables</b><span>2 &times; 10 way, 2.54&nbsp;mm.</span></div>
  <div class="xb-card"><b>Your own driver</b><span>None is supplied.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Minimum wiring">
<svg viewBox="0 0 1000 318" role="img" aria-labelledby="xb-io-wire-t">
<title id="xb-io-wire-t">Minimum wiring: contact 1 to contact 1, 3.3 V; PD15, contact 6 to contact 6, chip select; PB5, contact 7 to contact 7, MOSI; PA6, contact 8 to contact 8, MISO; PA5, contact 9 to contact 9, clock; contact 10 to contact 10, ground.</title>
<rect x="20" y="20" width="280" height="278" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="160.0" y="164.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2"></text>
<rect x="700" y="20" width="280" height="278" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="840.0" y="164.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2"></text>
<text x="160" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Prime header GE (J36)</text>
<text x="840" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Expander J1</text>
<path d="M300 84H700" stroke="#ff9f43" stroke-width="3" fill="none"/><circle cx="300" cy="84" r="5" fill="#ff9f43"/><circle cx="700" cy="84" r="5" fill="#ff9f43"/><text x="286" y="89" text-anchor="end" font-size="13" fill="#e6ebf2">contact 1</text><text x="714" y="89" font-size="13" fill="#e6ebf2">contact 1</text><text x="500" y="77" text-anchor="middle" font-size="12" fill="#a9b4c2">3.3 V</text>
<path d="M300 122H700" stroke="#ffd75f" stroke-width="3" fill="none"/><circle cx="300" cy="122" r="5" fill="#ffd75f"/><circle cx="700" cy="122" r="5" fill="#ffd75f"/><text x="286" y="127" text-anchor="end" font-size="13" fill="#e6ebf2">PD15, contact 6</text><text x="714" y="127" font-size="13" fill="#e6ebf2">contact 6</text><text x="500" y="115" text-anchor="middle" font-size="12" fill="#a9b4c2">chip select</text>
<path d="M300 160H700" stroke="#5fb3ff" stroke-width="3" fill="none"/><circle cx="300" cy="160" r="5" fill="#5fb3ff"/><circle cx="700" cy="160" r="5" fill="#5fb3ff"/><text x="286" y="165" text-anchor="end" font-size="13" fill="#e6ebf2">PB5, contact 7</text><text x="714" y="165" font-size="13" fill="#e6ebf2">contact 7</text><text x="500" y="153" text-anchor="middle" font-size="12" fill="#a9b4c2">MOSI</text>
<path d="M300 198H700" stroke="#6fe08a" stroke-width="3" fill="none"/><circle cx="300" cy="198" r="5" fill="#6fe08a"/><circle cx="700" cy="198" r="5" fill="#6fe08a"/><text x="286" y="203" text-anchor="end" font-size="13" fill="#e6ebf2">PA6, contact 8</text><text x="714" y="203" font-size="13" fill="#e6ebf2">contact 8</text><text x="500" y="191" text-anchor="middle" font-size="12" fill="#a9b4c2">MISO</text>
<path d="M300 236H700" stroke="#c792ea" stroke-width="3" fill="none"/><circle cx="300" cy="236" r="5" fill="#c792ea"/><circle cx="700" cy="236" r="5" fill="#c792ea"/><text x="286" y="241" text-anchor="end" font-size="13" fill="#e6ebf2">PA5, contact 9</text><text x="714" y="241" font-size="13" fill="#e6ebf2">contact 9</text><text x="500" y="229" text-anchor="middle" font-size="12" fill="#a9b4c2">clock</text>
<path d="M300 274H700" stroke="#a9b4c2" stroke-width="3" fill="none"/><circle cx="300" cy="274" r="5" fill="#a9b4c2"/><circle cx="700" cy="274" r="5" fill="#a9b4c2"/><text x="286" y="279" text-anchor="end" font-size="13" fill="#e6ebf2">contact 10</text><text x="714" y="279" font-size="13" fill="#e6ebf2">contact 10</text><text x="500" y="267" text-anchor="middle" font-size="12" fill="#a9b4c2">ground</text>
</svg>
  </div>
  <figcaption>Minimum connections. Interrupt and reset are optional.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Mount the board</h3>
    <p>Keep I/O wires short and away from motor wiring.</p>
  </li>
  <li class="xb-step">
    <h3>Connect with the power off</h3>
    <p>Plug J1 into header GE.</p>
  </li>
  <li class="xb-step">
    <h3>Enable hardware addressing</h3>
    <p>Before any read, write the IOCON register with HAEN (together with MIRROR and ODR) to address 0 and also address 4.</p>
    <p class="xb-expect">Then devices 0 to 3 answer individually.</p>
  </li>
  <li class="xb-step">
    <h3>Test one line</h3>
    <p>Set one line as output and toggle it while measuring the header pin.</p>
    <p class="xb-expect">About 0 and 3.3&nbsp;V.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Use the extra lines</td><td>None</td><td>No SmoothieV2 module drives this expander; its pins cannot be named in config.ini</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

There is nothing to add to `config.ini`.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
<svg viewBox="0 0 1000 200" role="img" aria-labelledby="xb-io-how-t">
<title id="xb-io-how-t">One SPI bus and chip select serve four addressed expanders.</title>
<rect x="20.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="120.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J1 SPI</text><text x="120.0" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">one chip select</text>
<path d="M220.0 51H273.3" stroke="#a9b4c2" stroke-width="3"/><path d="M273.3 51l-9 -5v10z" fill="#a9b4c2"/>
<rect x="273.3" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="373.3" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">U1 to U4</text><text x="373.3" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">addresses 0 to 3</text>
<path d="M473.3 51H526.6" stroke="#a9b4c2" stroke-width="3"/><path d="M526.6 51l-9 -5v10z" fill="#a9b4c2"/>
<rect x="526.7" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="626.7" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">220 ohm</text><text x="626.7" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">per line</text>
<path d="M726.7 51H780.0" stroke="#a9b4c2" stroke-width="3"/><path d="M780.0 51l-9 -5v10z" fill="#a9b4c2"/>
<rect x="780.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="880.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J3 to J6</text><text x="880.0" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">64 lines</text>
<rect x="20.0" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="120.0" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">4 interrupts</text><text x="120.0" y="157.0" text-anchor="middle" font-size="12" fill="#a9b4c2">open drain</text>
<path d="M220.0 141H273.3" stroke="#a9b4c2" stroke-width="3"/><path d="M273.3 141l-9 -5v10z" fill="#a9b4c2"/>
<rect x="273.3" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="373.3" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">1 k each</text><text x="373.3" y="157.0" text-anchor="middle" font-size="12" fill="#a9b4c2">isolate</text>
<path d="M473.3 141H526.6" stroke="#a9b4c2" stroke-width="3"/><path d="M526.6 141l-9 -5v10z" fill="#a9b4c2"/>
<rect x="526.7" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="626.7" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">10 k pull-up</text><text x="626.7" y="157.0" text-anchor="middle" font-size="12" fill="#a9b4c2">shared</text>
<path d="M726.7 141H780.0" stroke="#a9b4c2" stroke-width="3"/><path d="M780.0 141l-9 -5v10z" fill="#a9b4c2"/>
<rect x="780.0" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="880.0" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J1.3</text><text x="880.0" y="157.0" text-anchor="middle" font-size="12" fill="#a9b4c2">to controller</text>
</svg>
  </div>
  <figcaption>Data path above, interrupt below.</figcaption>
</figure>
{:/nomarkdown}

Each SPI transfer starts with a byte containing the device address, so four chips share the chip select once hardware addressing is on. Port B and port A of each chip appear on one header. The interrupt outputs default to push-pull, so each has a 1&nbsp;k&Omega; resistor that makes that harmless until software selects open drain.

## Solder links {#options}

A further SPI device on the chain needs its own chip select; leave JP6 open unless you know why it should share.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Solder links">
<svg viewBox="0 0 1000 218" role="img" aria-labelledby="xb-io-jp-t">
<title id="xb-io-jp-t">Solder links as delivered: JP3 open; JP4 open; JP6 open; JP7 closed; JP8 closed; JP9 closed.</title>
<rect x="20" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="72" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="114" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="108" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP3 · open</text><text x="108" y="90" text-anchor="middle" font-size="11" fill="#a9b4c2">chain interrupt</text>
<rect x="216" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="268" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="310" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="304" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP4 · open</text><text x="304" y="90" text-anchor="middle" font-size="11" fill="#a9b4c2">chain reset</text>
<rect x="412" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="464" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="506" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="500" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP6 · open</text><text x="500" y="90" text-anchor="middle" font-size="11" fill="#a9b4c2">chain chip select</text>
<rect x="608" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="660" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="702" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="686" y="34" width="20" height="10" fill="#e0b84a"/>
<text x="696" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP7 · closed</text><text x="696" y="90" text-anchor="middle" font-size="11" fill="#a9b4c2">chain MOSI</text>
<rect x="804" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="856" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="898" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="882" y="34" width="20" height="10" fill="#e0b84a"/>
<text x="892" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP8 · closed</text><text x="892" y="90" text-anchor="middle" font-size="11" fill="#a9b4c2">chain MISO</text>
<rect x="20" y="114" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="72" y="128" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="114" y="128" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="98" y="138" width="20" height="10" fill="#e0b84a"/>
<text x="108" y="176" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP9 · closed</text><text x="108" y="194" text-anchor="middle" font-size="11" fill="#a9b4c2">chain clock</text>
</svg>
  </div>
  <figcaption>The links as delivered. Close one with a small blob of solder across both pads; open it by removing the solder or cutting the copper between the pads.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>What it does</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>JP3</td><td>Joins the interrupt to the chain</td><td>Open</td></tr>
    <tr><td>JP4</td><td>Joins reset to the chain</td><td>Open</td></tr>
    <tr><td>JP6</td><td>Joins chip select to the chain</td><td>Open</td></tr>
    <tr><td>JP7</td><td>Continues MOSI</td><td>Closed</td></tr>
    <tr><td>JP8</td><td>Continues MISO</td><td>Closed</td></tr>
    <tr><td>JP9</td><td>Continues clock</td><td>Closed</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Chaining {#chaining}

SPI data and clock continue to another board with a separate chip select.

{::nomarkdown}
{% include _includes/extension-chain-figure.html id="xb-io" board="I/O expander board" in_label="S IN" chain_label="CHAIN" lane1="pin 6, select" lane2="pin 7, MOSI" lane3="pin 9, clock" s1="open" s2="closed" s3="closed" caption="Data and clock continue; chip select stops here." %}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>On CHAIN</th></tr></thead>
  <tbody>
    <tr><td>1, 2, 10</td><td>Power and ground</td><td>Passed on</td></tr>
    <tr><td>3, 4, 6</td><td>Interrupt, reset, select</td><td>Stopped by open links</td></tr>
    <tr><td>5</td><td>Free</td><td>Passed on</td></tr>
    <tr><td>7 to 9</td><td>SPI</td><td>Passed on through closed links</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Likely cause</th><th>What to check</th></tr></thead>
  <tbody>
    <tr><td>All reads are 0 or 255</td><td>Wiring, chip select or reset held low</td><td>Test points CS and SCK</td></tr>
    <tr><td>All four chips answer together</td><td>HAEN not enabled</td><td>Write IOCON first</td></tr>
    <tr><td>One chip unreachable</td><td>Address bits</td><td>Check the Microchip errata for address handling</td></tr>
    <tr><td>LED dim on an output</td><td>Series resistor drops voltage</td><td>Use less current or a driver</td></tr>
    <tr><td>Interrupt never clears</td><td>A port not read</td><td>Read the captured port registers</td></tr>
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
    <tr><td><a href="/images/extensions/spi-io-expander/spi-io-expander-schematic.pdf">Schematic (PDF)</a></td><td>The circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/spi-io-expander/spi-io-expander-bom.csv">Parts list (CSV)</a></td><td>Every component with its value, footprint and part number where one is chosen</td></tr>
    <tr><td><a href="/images/extensions/spi-io-expander/spi-io-expander-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side. 

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-io-mount-t">
  <title id="xb-io-mount-t">Mounting drawing of the I/O expander board, component side: outline 110 by 80 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="246.2" y="78.0" width="467.5" height="340.0" rx="4.2" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M246.2 56H713.8"/><path d="M246.2 50V62"/><path d="M713.8 50V62"/><path d="M739.8 78.0V418.0"/><path d="M733.8 78.0h12"/><path d="M733.8 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">110</text>
  <text x="751.8" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">80</text>
  <circle cx="246.2" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="234.2" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M188.2 104.0h30" fill="none"/><path d="M222.2 104.0l-8 -4v8z"/><path d="M188.2 104.0v30" fill="none"/><path d="M188.2 138.0l-4 -8h8z"/></g>
  <text x="226.2" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="184.2" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="267.5" cy="99.2" r="6.8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M256.7 99.2h21.6M267.5 88.5v21.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="260.7" y="126.0" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.00</text>
  <circle cx="692.5" cy="99.2" r="6.8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M681.7 99.2h21.6M692.5 88.5v21.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="699.3" y="126.0" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  105.00, 5.00</text>
  <circle cx="267.5" cy="396.8" r="6.8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M256.7 396.8h21.6M267.5 385.9v21.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="260.7" y="379.9" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 75.00</text>
  <circle cx="692.5" cy="396.8" r="6.8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M681.7 396.8h21.6M692.5 385.9v21.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="699.3" y="379.9" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  105.00, 75.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 110 × 80&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>105.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>5.00</td><td>75.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>105.00</td><td>75.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Every figure is a design value, a calculated or simulated value, or a manufacturer&rsquo;s data sheet value, as the last column says. A dash means no figure is given.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis</th></tr></thead>
  <tbody>
    <tr><td>Supply and signals</td><td>All lines</td><td>&mdash;</td><td>3.3 V</td><td>&mdash;</td><td>Design</td></tr>
    <tr><td>SPI clock</td><td>J1</td><td>&mdash;</td><td>&mdash;</td><td>10 MHz</td><td>Microchip data sheet</td></tr>
    <tr><td>Current per line</td><td>Any line</td><td>&mdash;</td><td>&mdash;</td><td>25 mA</td><td>Absolute maximum</td></tr>
    <tr><td>Current into a shorted output</td><td>One line</td><td>&mdash;</td><td>7.3 mA</td><td>25 mA</td><td>Simulated</td></tr>
    <tr><td>Current with 5 V applied to a line</td><td>One line</td><td>&mdash;</td><td>4.6 mA</td><td>25 mA</td><td>Simulated, generic clamp diode</td></tr>
    <tr><td>Shared interrupt low level</td><td>Contact 3</td><td>&mdash;</td><td>0.40 V</td><td>0.66 V</td><td>Simulated</td></tr>
    <tr><td>Total external load</td><td>3.3 V</td><td>&mdash;</td><td>&mdash;</td><td>100 mA</td><td>Design budget</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Component stress limits

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Part</th><th>Limit</th><th>Use on this board</th></tr></thead>
  <tbody>
    <tr><td>Line voltage</td><td>3.3 V</td><td>Resistors are not overvoltage protection</td></tr>
    <tr><td>Per expander</td><td>125 mA in, 150 mA out</td><td>Add up all loads</td></tr>
    <tr><td>3.3 V rail</td><td>100 mA budget</td><td>External loads</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: simulation {#simulation}

Fault and interrupt cases were simulated with ngspice.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Simulated results against limits">
<svg viewBox="0 0 1000 238" role="img" aria-labelledby="xb-io-sim-t">
<title id="xb-io-sim-t">Each simulated value (yellow mark) against its allowed range (green band).</title>
<text x="385" y="41" text-anchor="end" font-size="13" fill="#e6ebf2">Shared interrupt low level</text>
<path d="M400 36H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M400.0 36H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M648.2 23v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="41" font-size="13" font-weight="700" fill="#ffcc33">0.40&nbsp;V</text>
<text x="385" y="85" text-anchor="end" font-size="13" fill="#e6ebf2">Current into the low INT output during</text>
<text x="385" y="101" text-anchor="end" font-size="13" fill="#e6ebf2">misconfiguration</text>
<path d="M400 88H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M400.0 88H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M430.6 75v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="93" font-size="13" font-weight="700" fill="#ffcc33">1.86&nbsp;mA</text>
<text x="385" y="145" text-anchor="end" font-size="13" fill="#e6ebf2">Output shorted to ground</text>
<path d="M400 140H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M400.0 140H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M519.7 127v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="145" font-size="13" font-weight="700" fill="#ffcc33">7.3&nbsp;mA</text>
<text x="385" y="197" text-anchor="end" font-size="13" fill="#e6ebf2">External 5 V on one line (generic clamp diode)</text>
<path d="M400 192H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M400.0 192H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M475.4 179v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="197" font-size="13" font-weight="700" fill="#ffcc33">4.6&nbsp;mA</text>
</svg>
  </div>
  <figcaption>Simulated value (yellow) against the limit used for it (green). Each bar has its own scale.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Result</th><th>Simulated value</th><th>Limit</th><th>Outcome</th></tr></thead>
  <tbody>
    <tr><td>Shared interrupt low level</td><td>0.40&nbsp;V</td><td>at most 660&nbsp;mV</td><td>Within</td></tr>
    <tr><td>Current into the low INT output during misconfiguration</td><td>1.86&nbsp;mA</td><td>at most 25&nbsp;mA</td><td>Within</td></tr>
    <tr><td>Output shorted to ground</td><td>7.3&nbsp;mA</td><td>at most 25&nbsp;mA</td><td>Within</td></tr>
    <tr><td>External 5 V on one line (generic clamp diode)</td><td>4.6&nbsp;mA</td><td>at most 25&nbsp;mA</td><td>Within</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Not simulated: the expanders themselves, SPI signal quality and electrostatic discharge.

## Appendix: datasheet {#datasheets}

The first page of the expander data sheet. Click the page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/spi-io-expander/datasheets/mcp23s17.pdf"><img src="/images/extensions/spi-io-expander/datasheets/mcp23s17-page1.png" alt="First page of the MCP23017 / MCP23S17 16-bit I/O expander datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/spi-io-expander/datasheets/mcp23s17.pdf">MCP23017 / MCP23S17 16-bit I/O expander</a> — Microchip, 40 pages.</figcaption>
</figure>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
