---
layout: default
title: "RFID reader"
description: "A carrier for an RC522 13.56 MHz RFID module on a Gadgeteer SPI socket with shared-bus buffering: pinout, wiring, limits and files."
permalink: /extensions/rfid-reader
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Sensors and inputs</p>
    <h1 id="rfid-reader">RFID reader</h1>
    <p class="xb-lead">A carrier that connects a common RC522 RFID module to an SPI socket, so a controller can identify a tag on a user, tool or material. The radio and antenna are on the bought module. Reading tags needs your own driver.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/rfid-reader/rfid-reader-diagram.png" alt="Top view of the RFID carrier: an eight-way socket for the reader module on one edge, a small buffer chip and sockets on the left and right edges.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>
<div class="xb-stats">
  <div class="xb-stat"><b>13.56 MHz</b><span>ISO 14443A tags</span></div>
  <div class="xb-stat"><b>&asymp; 50 mm</b><span>maximum read distance per module data</span></div>
  <div class="xb-stat"><b>10 MHz</b><span>maximum SPI clock</span></div>
  <div class="xb-stat"><b>26 mA</b><span>module maximum</span></div>
  <div class="xb-stat"><b>Shared bus</b><span>data out released when idle</span></div>
  <div class="xb-stat"><b>60 &times; 55</b><span>millimetres, four M3 holes</span></div>
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
  3.3&nbsp;V only: never power the module from 5&nbsp;V.
</sl-alert>
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Tag identity is easy to copy. Do not use it as access control for anything related to safety.
</sl-alert>
{:/nomarkdown}

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>Identifying a tagged person, tool or material</td></tr>
    <tr><td>Module</td><td>RC522 eight-pin module, order SDA, SCK, MOSI, MISO, IRQ, GND, RST, 3.3V; bought separately</td></tr>
    <tr><td>Interface</td><td>SPI with 100&nbsp;&Omega; series resistors; MISO driven through an SN74LVC1G125 only while chip select is low</td></tr>
    <tr><td>Extra lines</td><td>Interrupt on contact 3, reset on contact 4 with 10&nbsp;k&Omega; pull-up</td></tr>
    <tr><td>Supply</td><td>3.3&nbsp;V from the socket, module 13 to 26&nbsp;mA</td></tr>
    <tr><td>Connectors</td><td>Right-angle eight-way 2.54&nbsp;mm socket; two Gadgeteer type S sockets (Samtec SHF-105, 1.27&nbsp;mm)</td></tr>
    <tr><td>Size</td><td>60 &times; 55&nbsp;mm, four M3 holes on a 50 &times; 40&nbsp;mm pattern; the module overhangs</td></tr>
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
      <img src="/images/extensions/rfid-reader/rfid-reader-diagram.png" alt="Top view of the RFID reader board with 10 numbered markers that are explained in the list below.">
      <a class="xb-mk" href="#tour-1" style="left:35.6%;top:71.9%" aria-label="1: module socket (j3)">1<span class="xb-pop"><b>Module socket (J3)</b> — Match the module&rsquo;s printed pin names to the board printing.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-2" style="left:9.0%;top:40.4%" aria-label="2: input socket s in (j1)">2<span class="xb-pop"><b>Input socket S IN (J1)</b> — Select 6, MOSI 7, MISO 8, clock 9, interrupt 3, reset 4.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-3" style="left:91.0%;top:40.4%" aria-label="3: chain socket chain (j2)">3<span class="xb-pop"><b>Chain socket CHAIN (J2)</b> — SPI data and clock continue.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:59.7%;top:42.1%" aria-label="4: bus buffer (u1)">4<span class="xb-pop"><b>Bus buffer (U1)</b> — Releases MISO when this board is not selected.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:46.4%;top:55.2%" aria-label="5: series resistors (r1 to r6)">5<span class="xb-pop"><b>Series resistors (R1 to R6)</b> — 100&nbsp;&Omega; on module signals.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:69.4%;top:56.1%" aria-label="6: pull-ups (r7, r8)">6<span class="xb-pop"><b>Pull-ups (R7, R8)</b> — Hold reset released and select idle.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:66.1%;top:42.1%" aria-label="7: supply capacitors (c1, c2)">7<span class="xb-pop"><b>Supply capacitors (C1, C2)</b> — On the module supply.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-8" style="left:22.6%;top:33.3%" aria-label="8: chain links, open (jp3, jp4, jp6)">8<span class="xb-pop"><b>Chain links, open (JP3, JP4, JP6)</b> — Interrupt, reset and select.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-9" style="left:77.4%;top:33.3%" aria-label="9: chain links, closed (jp7 to jp9)">9<span class="xb-pop"><b>Chain links, closed (JP7 to JP9)</b> — SPI data and clock.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-10" style="left:9.7%;top:10.5%" aria-label="10: mounting hole">10<span class="xb-pop"><b>Mounting hole</b> — One of four M3 holes.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Module socket (J3)</b> — Match the module&rsquo;s printed pin names to the board printing.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Input socket S IN (J1)</b> — Select 6, MOSI 7, MISO 8, clock 9, interrupt 3, reset 4.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Chain socket CHAIN (J2)</b> — SPI data and clock continue.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Bus buffer (U1)</b> — Releases MISO when this board is not selected.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Series resistors (R1 to R6)</b> — 100&nbsp;&Omega; on module signals.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Pull-ups (R7, R8)</b> — Hold reset released and select idle.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Supply capacitors (C1, C2)</b> — On the module supply.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Chain links, open (JP3, JP4, JP6)</b> — Interrupt, reset and select.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Chain links, closed (JP7 to JP9)</b> — SPI data and clock.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Mounting hole</b> — One of four M3 holes.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

Check the module&rsquo;s pin order before plugging it in: copies differ.

### J1: input socket (S IN)

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>Use</th><th>Prime header GE</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Board and module supply</td><td>3.3 V</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Passed to the chain only</td><td>5 V</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">IRQ_HOST</span></td><td>Interrupt</td><td>PE8</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">RST_HOST</span></td><td>Low resets the module</td><td>PJ7</td></tr>
    <tr><td>5</td><td>Passed through</td><td>Not used</td><td>PJ8</td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">CS</span></td><td>Chip select</td><td>PD15</td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-sig">MOSI</span></td><td>Data to module</td><td>PB5 (SPI1_MOSI)</td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">MISO</span></td><td>Data from module</td><td>PA6 (SPI1_MISO)</td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">SCK</span></td><td>Clock</td><td>PA5 (SPI1_SCK)</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Ground</td><td>GND</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J3: module socket

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Pin</th><th>Module name</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>SDA (chip select)</td></tr>
    <tr><td>2</td><td>SCK</td></tr>
    <tr><td>3</td><td>MOSI</td></tr>
    <tr><td>4</td><td>MISO</td></tr>
    <tr><td>5</td><td>IRQ</td></tr>
    <tr><td>6</td><td>GND</td></tr>
    <tr><td>7</td><td>RST</td></tr>
    <tr><td>8</td><td>3.3V</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>An RC522 module</b><span>With an eight-way pin strip.</span></div>
  <div class="xb-card"><b>An SPI port</b><span>Prime header GE.</span></div>
  <div class="xb-card"><b>A ten-way cable</b><span>1.27&nbsp;mm Gadgeteer ribbon cable.</span></div>
  <div class="xb-card"><b>A support</b><span>For the overhanging module.</span></div>
  <div class="xb-card"><b>Your own driver</b><span>None is supplied.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Minimum wiring">
<svg viewBox="0 0 1000 318" role="img" aria-labelledby="xb-rfid-wire-t">
<title id="xb-rfid-wire-t">Minimum wiring: contact 1 to contact 1, 3.3 V; PD15, contact 6 to contact 6, chip select; PB5, contact 7 to contact 7, MOSI; PA6, contact 8 to contact 8, MISO; PA5, contact 9 to contact 9, clock; contact 10 to contact 10, ground.</title>
<rect x="20" y="20" width="280" height="278" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="160.0" y="164.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea"></text>
<rect x="700" y="20" width="280" height="278" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="840.0" y="164.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea"></text>
<text x="160" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Prime header GE (J36)</text>
<text x="840" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">RFID board J1</text>
<path d="M300 84H700" stroke="#ff9f43" stroke-width="3" fill="none"/><circle cx="300" cy="84" r="5" fill="#ff9f43"/><circle cx="700" cy="84" r="5" fill="#ff9f43"/><text x="286" y="89" text-anchor="end" font-size="13" fill="#eaeaea">contact 1</text><text x="714" y="89" font-size="13" fill="#eaeaea">contact 1</text><text x="500" y="77" text-anchor="middle" font-size="12" fill="#b3b3b3">3.3 V</text>
<path d="M300 122H700" stroke="#ffd75f" stroke-width="3" fill="none"/><circle cx="300" cy="122" r="5" fill="#ffd75f"/><circle cx="700" cy="122" r="5" fill="#ffd75f"/><text x="286" y="127" text-anchor="end" font-size="13" fill="#eaeaea">PD15, contact 6</text><text x="714" y="127" font-size="13" fill="#eaeaea">contact 6</text><text x="500" y="115" text-anchor="middle" font-size="12" fill="#b3b3b3">chip select</text>
<path d="M300 160H700" stroke="#5fb3ff" stroke-width="3" fill="none"/><circle cx="300" cy="160" r="5" fill="#5fb3ff"/><circle cx="700" cy="160" r="5" fill="#5fb3ff"/><text x="286" y="165" text-anchor="end" font-size="13" fill="#eaeaea">PB5, contact 7</text><text x="714" y="165" font-size="13" fill="#eaeaea">contact 7</text><text x="500" y="153" text-anchor="middle" font-size="12" fill="#b3b3b3">MOSI</text>
<path d="M300 198H700" stroke="#6fe08a" stroke-width="3" fill="none"/><circle cx="300" cy="198" r="5" fill="#6fe08a"/><circle cx="700" cy="198" r="5" fill="#6fe08a"/><text x="286" y="203" text-anchor="end" font-size="13" fill="#eaeaea">PA6, contact 8</text><text x="714" y="203" font-size="13" fill="#eaeaea">contact 8</text><text x="500" y="191" text-anchor="middle" font-size="12" fill="#b3b3b3">MISO</text>
<path d="M300 236H700" stroke="#c792ea" stroke-width="3" fill="none"/><circle cx="300" cy="236" r="5" fill="#c792ea"/><circle cx="700" cy="236" r="5" fill="#c792ea"/><text x="286" y="241" text-anchor="end" font-size="13" fill="#eaeaea">PA5, contact 9</text><text x="714" y="241" font-size="13" fill="#eaeaea">contact 9</text><text x="500" y="229" text-anchor="middle" font-size="12" fill="#b3b3b3">clock</text>
<path d="M300 274H700" stroke="#b3b3b3" stroke-width="3" fill="none"/><circle cx="300" cy="274" r="5" fill="#b3b3b3"/><circle cx="700" cy="274" r="5" fill="#b3b3b3"/><text x="286" y="279" text-anchor="end" font-size="13" fill="#eaeaea">contact 10</text><text x="714" y="279" font-size="13" fill="#eaeaea">contact 10</text><text x="500" y="267" text-anchor="middle" font-size="12" fill="#b3b3b3">ground</text>
</svg>
  </div>
  <figcaption>Minimum connections; interrupt and reset are optional.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Fit the module</h3>
    <p>With power off, align its pin names with the order above.</p>
  </li>
  <li class="xb-step">
    <h3>Mount</h3>
    <p>Support the module and keep metal away from its antenna.</p>
  </li>
  <li class="xb-step">
    <h3>Connect and power</h3>
    <p>Plug J1 into header GE.</p>
    <p class="xb-expect">The module&rsquo;s own power light should be on if it has one.</p>
  </li>
  <li class="xb-step">
    <h3>Read the chip</h3>
    <p>Your driver reads the version register, then looks for a tag.</p>
    <p class="xb-expect">A sensible version value confirms the SPI path.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Read tags</td><td>None</td><td>No SmoothieV2 driver for the RC522</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

There is nothing to add to `config.ini`.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
<svg viewBox="0 0 1000 200" role="img" aria-labelledby="xb-rfid-how-t">
<title id="xb-rfid-how-t">SPI reaches the module through resistors; its answer returns through a buffer.</title>
<rect x="20.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="120.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J1 SPI</text><text x="120.0" y="67.0" text-anchor="middle" font-size="12" fill="#b3b3b3">controller</text>
<path d="M220.0 51H273.3" stroke="#b3b3b3" stroke-width="3"/><path d="M273.3 51l-9 -5v10z" fill="#b3b3b3"/>
<rect x="273.3" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="373.3" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">100 ohm</text><text x="373.3" y="67.0" text-anchor="middle" font-size="12" fill="#b3b3b3">series</text>
<path d="M473.3 51H526.6" stroke="#b3b3b3" stroke-width="3"/><path d="M526.6 51l-9 -5v10z" fill="#b3b3b3"/>
<rect x="526.7" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="626.7" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J3 module</text><text x="626.7" y="67.0" text-anchor="middle" font-size="12" fill="#b3b3b3">RF reader</text>
<path d="M726.7 51H780.0" stroke="#b3b3b3" stroke-width="3"/><path d="M780.0 51l-9 -5v10z" fill="#b3b3b3"/>
<rect x="780.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="880.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Tag</text><text x="880.0" y="67.0" text-anchor="middle" font-size="12" fill="#b3b3b3">13.56 MHz</text>
<rect x="20.0" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="120.0" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Module MISO</text><text x="120.0" y="157.0" text-anchor="middle" font-size="12" fill="#b3b3b3">answer</text>
<path d="M220.0 141H400.0" stroke="#b3b3b3" stroke-width="3"/><path d="M400.0 141l-9 -5v10z" fill="#b3b3b3"/>
<rect x="400.0" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="500.0" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">U1 buffer</text><text x="500.0" y="157.0" text-anchor="middle" font-size="12" fill="#b3b3b3">only if selected</text>
<path d="M600.0 141H780.0" stroke="#b3b3b3" stroke-width="3"/><path d="M780.0 141l-9 -5v10z" fill="#b3b3b3"/>
<rect x="780.0" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="880.0" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J1.8</text><text x="880.0" y="157.0" text-anchor="middle" font-size="12" fill="#b3b3b3">shared bus</text>
</svg>
  </div>
  <figcaption>Commands above, replies below.</figcaption>
</figure>
{:/nomarkdown}

Many RC522 modules keep driving their data output even when not selected, which would block other devices on the bus. The buffer passes it on only while chip select is low. The antenna stays on the module, clear of the carrier copper.

## Solder links {#options}

A further SPI device needs its own chip select.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Solder links">
<svg viewBox="0 0 1000 218" role="img" aria-labelledby="xb-rfid-jp-t">
<title id="xb-rfid-jp-t">Solder links as delivered: JP3 open; JP4 open; JP6 open; JP7 closed; JP8 closed; JP9 closed.</title>
<rect x="20" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="72" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="114" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="108" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP3 · open</text><text x="108" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">chain interrupt</text>
<rect x="216" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="268" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="310" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="304" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP4 · open</text><text x="304" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">chain reset</text>
<rect x="412" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="464" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="506" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="500" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP6 · open</text><text x="500" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">chain chip select</text>
<rect x="608" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="660" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="702" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="686" y="34" width="20" height="10" fill="#e0b84a"/>
<text x="696" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP7 · closed</text><text x="696" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">chain MOSI</text>
<rect x="804" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="856" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="898" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="882" y="34" width="20" height="10" fill="#e0b84a"/>
<text x="892" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP8 · closed</text><text x="892" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">chain MISO</text>
<rect x="20" y="114" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="72" y="128" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="114" y="128" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="98" y="138" width="20" height="10" fill="#e0b84a"/>
<text x="108" y="176" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP9 · closed</text><text x="108" y="194" text-anchor="middle" font-size="11" fill="#b3b3b3">chain clock</text>
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

SPI data and clock continue to another device.

{::nomarkdown}
{% include _includes/extension-chain-figure.html id="xb-rfid" board="RFID reader board" in_label="S IN" chain_label="CHAIN" lane1="pin 6, select" lane2="pin 7, MOSI" lane3="pin 9, clock" s1="open" s2="closed" s3="closed" caption="Data and clock continue; select stops here." %}
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
    <tr><td>No reply</td><td>Module pin order wrong or reset held low</td><td>Compare names; test points</td></tr>
    <tr><td>Reply is all zeros or ones</td><td>Chip select or clock problem</td><td>Test points M_SS and M_MISO</td></tr>
    <tr><td>Tag not detected</td><td>Wrong tag type or metal near antenna</td><td>Use a 13.56 MHz tag; move metal</td></tr>
    <tr><td>Errors at speed</td><td>Long cable</td><td>Lower the SPI clock</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The carrier has no indicator lights of its own; use the test points.

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/rfid-reader/rfid-reader-schematic.pdf">Schematic (PDF)</a></td><td>The circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/rfid-reader/rfid-reader-bom.csv">Parts list (CSV)</a></td><td>Every component with its value, footprint and part number where one is chosen</td></tr>
    <tr><td><a href="/images/extensions/rfid-reader/rfid-reader-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side. Support the overhanging module with a non-metal spacer.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-rfid-mount-t">
  <title id="xb-rfid-mount-t">Mounting drawing of the RFID reader board, component side: outline 60 by 55 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="294.5" y="78.0" width="370.9" height="340.0" rx="6.2" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M294.5 56H665.5"/><path d="M294.5 50V62"/><path d="M665.5 50V62"/><path d="M691.5 78.0V418.0"/><path d="M685.5 78.0h12"/><path d="M685.5 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">60</text>
  <text x="703.5" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">55</text>
  <circle cx="294.5" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="282.5" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M236.5 104.0h30" fill="none"/><path d="M270.5 104.0l-8 -4v8z"/><path d="M236.5 104.0v30" fill="none"/><path d="M236.5 138.0l-4 -8h8z"/></g>
  <text x="274.5" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="232.5" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="325.5" cy="108.9" r="9.9" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M311.6 108.9h27.8M325.5 95.0v27.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="315.6" y="138.8" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.00</text>
  <circle cx="634.5" cy="108.9" r="9.9" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M620.7 108.9h27.8M634.5 95.0v27.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="644.4" y="138.8" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  55.00, 5.00</text>
  <circle cx="325.5" cy="356.2" r="9.9" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M311.6 356.2h27.8M325.5 342.3v27.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="315.6" y="336.3" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 45.00</text>
  <circle cx="634.5" cy="356.2" r="9.9" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M620.7 356.2h27.8M634.5 342.3v27.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="644.4" y="336.3" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">4</tspan>  55.00, 45.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 60 × 55&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
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
    <tr><td>Supply</td><td>J1 contact 1</td><td>2.5 V</td><td>3.3 V</td><td>3.3 V</td><td>Module data sheet</td></tr>
    <tr><td>Module current</td><td>3.3 V</td><td>13 mA</td><td>&mdash;</td><td>26 mA</td><td>Module data sheet</td></tr>
    <tr><td>SPI clock</td><td>J1</td><td>&mdash;</td><td>&mdash;</td><td>10 MHz</td><td>Module data sheet</td></tr>
    <tr><td>Read distance</td><td>Antenna</td><td>&mdash;</td><td>&mdash;</td><td>50 mm</td><td>Module data sheet, depends on tag</td></tr>
    <tr><td>Clock rise time at module</td><td>SCK</td><td>&mdash;</td><td>14 ns</td><td>20 ns</td><td>Simulated</td></tr>
    <tr><td>High level at module</td><td>SCK</td><td>2.9 V</td><td>3.30 V</td><td>3.35 V</td><td>Simulated</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Component stress limits

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Part</th><th>Limit</th><th>Use on this board</th></tr></thead>
  <tbody>
    <tr><td>Supply and signals</td><td>3.3 V</td><td>No 5 V anywhere on J3</td></tr>
    <tr><td>Capacitors</td><td>10 V and 16 V</td><td>3.3 V</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: simulation {#simulation}

The clock line through its series resistor was simulated with ngspice.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Simulated results against limits">
<svg viewBox="0 0 1000 134" role="img" aria-labelledby="xb-rfid-sim-t">
<title id="xb-rfid-sim-t">Each simulated value (yellow mark) against its allowed range (green band).</title>
<text x="385" y="33" text-anchor="end" font-size="13" fill="#eaeaea">Clock rise time at the module (10 MHz limit about 20</text>
<text x="385" y="49" text-anchor="end" font-size="13" fill="#eaeaea">ns)</text>
<path d="M400 36H860" stroke="#404040" stroke-width="10" stroke-linecap="round"/><path d="M400.0 36H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M696.6 23v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="41" font-size="13" font-weight="700" fill="#ffcc33">14&nbsp;ns</text>
<text x="385" y="93" text-anchor="end" font-size="13" fill="#eaeaea">High level reached</text>
<path d="M400 88H860" stroke="#404040" stroke-width="10" stroke-linecap="round"/><path d="M444.5 88H815.5" stroke="#2f8f5b" stroke-width="10"/><path d="M772.7 75v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="93" font-size="13" font-weight="700" fill="#ffcc33">3.3&nbsp;V</text>
</svg>
  </div>
  <figcaption>Simulated value (yellow) against the limit used for it (green). Each bar has its own scale.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Result</th><th>Simulated value</th><th>Limit</th><th>Outcome</th></tr></thead>
  <tbody>
    <tr><td>Clock rise time at the module (10 MHz limit about 20 ns)</td><td>14&nbsp;ns</td><td>at most 20&nbsp;ns</td><td>Within</td></tr>
    <tr><td>High level reached</td><td>3.3&nbsp;V</td><td>2.9&nbsp;V to 3.35&nbsp;V</td><td>Within</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Not simulated: the radio module, antenna and read distance.

## Appendix: datasheet {#datasheets}

The first page of each data sheet. Click a page to open the PDF. The module data sheet is a reseller document.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/rfid-reader/datasheets/rc522.pdf"><img src="/images/extensions/rfid-reader/datasheets/rc522-page1.png" alt="First page of the RC522 RFID module datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/rfid-reader/datasheets/rc522.pdf">RC522 RFID module</a> — Handson Technology, 9 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/rfid-reader/datasheets/lvc1g125.pdf"><img src="/images/extensions/rfid-reader/datasheets/lvc1g125-page1.png" alt="First page of the SN74LVC1G125 bus buffer datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/rfid-reader/datasheets/lvc1g125.pdf">SN74LVC1G125 bus buffer</a> — Texas Instruments, 52 pages.</figcaption>
</figure>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
