---
layout: default
title: "Differential SPI LVDS extender"
description: "Paired-board LVDS extender for SPI signals: connectors and power warning."
permalink: /extensions/historical-differential-spi-lvds-extender
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Signals</p>
    <h1 id="historical-differential-spi-lvds-extender">Differential SPI LVDS extender</h1>
    <p class="xb-lead">Sends SPI clock, data and chip select over differential pairs to a distant peripheral and brings the reply back.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/historical-differential-spi-lvds-extender/directory-board-render.png" alt="Top view of the Differential SPI LVDS extender board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>4</b><span>signals</span></div>
  <div class="xb-stat"><b>LVDS</b><span>differential pairs</span></div>
  <div class="xb-stat"><b>RJ45</b><span>link connectors</span></div>
  <div class="xb-stat"><b>3.3 V</b><span>part supply range</span></div>
  <div class="xb-stat"><b>53 × 35 mm</b><span>board size</span></div>
  <div class="xb-stat"><b>2</b><span>halves</span></div>
</div>

<nav class="xb-nav" aria-label="On this page">
  <a href="#specs">Tech specs</a>
  <a href="#tour">Board tour</a>
  <a href="#pinout">Pinout</a>
  <a href="#what-you-need">What you need</a>
  <a href="#configuration">Configuration</a>
  <a href="#how-it-works">How it works</a>
  <a href="#troubleshooting">Troubleshooting</a>
  <a href="#downloads">Downloads</a>
  <a href="#electrical">Electrical specifications</a>
</nav>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <b>Do not power this board from 5 V.</b> All line drivers and receivers take their supply from the net named <code>5V0</code>, but they are 3.3 V parts, and the separate 3V3 net does not power them. The receivers also have a second 100 Ω resistor across their built-in termination. This is a design by Chris Cecil, not a current Smoothieware board.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>LVDS extension of SPI</td></tr>
    <tr><td>Host connectors</td><td>G1, G2</td></tr>
    <tr><td>Link connectors</td><td>J1, J2 (RJ45, not Ethernet)</td></tr>
    <tr><td>Local headers</td><td>JP1, JP2</td></tr>
    <tr><td>Drivers and receivers</td><td>DSLVDS1001 and DS90LT012</td></tr>
    <tr><td>Size</td><td>53 × 35 mm</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/historical-differential-spi-lvds-extender/directory-board-render.png" alt="Annotated top view of the Differential SPI LVDS extender board">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:9.6%;top:47.0%" aria-label="1: Integrated circuit U2">1<span class="xb-pop"><b>Integrated circuit U2</b> — Integrated circuit U2, marked <code>DSLVDS1001DBVR</code> in the board file. Connects to <code>5V0</code>, <code>GND</code>, <code>MOSI_N</code>, <code>MOSI_P</code>, <code>MOSI</code>.</span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:72.4%;top:47.0%" aria-label="2: Integrated circuit U6">2<span class="xb-pop"><b>Integrated circuit U6</b> — Integrated circuit U6, marked <code>DS90LT012ATMF</code> in the board file. Connects to <code>5V0</code>, <code>GND</code>, <code>SCK_S_P</code>, <code>SCK_S_N</code>, <code>SCK_</code>.</span></a>
      <a class="xb-mk xb-pb" href="#tour-3" style="left:75.7%;top:7.8%" aria-label="3: Header or jumper JP1">3<span class="xb-pop"><b>Header or jumper JP1</b> — Header or jumper JP1. Connects to <code>5V0</code>, <code>3V3</code>, <code>GND</code>, <code>SCK_</code>, <code>MISO_</code> and more.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:62.8%;top:52.8%" aria-label="4: Resistor R1">4<span class="xb-pop"><b>Resistor R1</b> — Resistor R1, marked <code>100</code> in the board file. Connects to <code>MOSI_S_N</code>, <code>MOSI_S_P</code>.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:67.6%;top:45.6%" aria-label="5: Capacitor C1">5<span class="xb-pop"><b>Capacitor C1</b> — Capacitor C1. Connects to <code>5V0</code>, <code>GND</code>.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:29.2%;top:47.0%" aria-label="6: Integrated circuit U3">6<span class="xb-pop"><b>Integrated circuit U3</b> — Integrated circuit U3, marked <code>DSLVDS1001DBVR</code> in the board file. Connects to <code>5V0</code>, <code>GND</code>, <code>CS_N</code>, <code>CS_P</code>, <code>CS</code>.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-7" style="left:19.6%;top:47.0%" aria-label="7: Integrated circuit U4">7<span class="xb-pop"><b>Integrated circuit U4</b> — Integrated circuit U4, marked <code>DSLVDS1001DBVR</code> in the board file. Connects to <code>5V0</code>, <code>GND</code>, <code>SCK_N</code>, <code>SCK_P</code>, <code>SCK</code>.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-8" style="left:91.5%;top:47.0%" aria-label="8: Integrated circuit U5">8<span class="xb-pop"><b>Integrated circuit U5</b> — Integrated circuit U5, marked <code>DSLVDS1001DBVR</code> in the board file. Connects to <code>5V0</code>, <code>GND</code>, <code>MISO_N</code>, <code>MISO_P</code>, <code>MISO_</code>.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Integrated circuit U2</b> — Integrated circuit U2, marked <code>DSLVDS1001DBVR</code> in the board file. Connects to <code>5V0</code>, <code>GND</code>, <code>MOSI_N</code>, <code>MOSI_P</code>, <code>MOSI</code>.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Integrated circuit U6</b> — Integrated circuit U6, marked <code>DS90LT012ATMF</code> in the board file. Connects to <code>5V0</code>, <code>GND</code>, <code>SCK_S_P</code>, <code>SCK_S_N</code>, <code>SCK_</code>.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Header or jumper JP1</b> — Header or jumper JP1. Connects to <code>5V0</code>, <code>3V3</code>, <code>GND</code>, <code>SCK_</code>, <code>MISO_</code> and more.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Resistor R1</b> — Resistor R1, marked <code>100</code> in the board file. Connects to <code>MOSI_S_N</code>, <code>MOSI_S_P</code>.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Capacitor C1</b> — Capacitor C1. Connects to <code>5V0</code>, <code>GND</code>.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Integrated circuit U3</b> — Integrated circuit U3, marked <code>DSLVDS1001DBVR</code> in the board file. Connects to <code>5V0</code>, <code>GND</code>, <code>CS_N</code>, <code>CS_P</code>, <code>CS</code>.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Integrated circuit U4</b> — Integrated circuit U4, marked <code>DSLVDS1001DBVR</code> in the board file. Connects to <code>5V0</code>, <code>GND</code>, <code>SCK_N</code>, <code>SCK_P</code>, <code>SCK</code>.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Integrated circuit U5</b> — Integrated circuit U5, marked <code>DSLVDS1001DBVR</code> in the board file. Connects to <code>5V0</code>, <code>GND</code>, <code>MISO_N</code>, <code>MISO_P</code>, <code>MISO_</code>.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

<span id="connect-and-try-it"></span>

### Host connector G1

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>G1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>not connected</td></tr>
    <tr><td>2</td><td><code>5V0</code></td></tr>
    <tr><td>3</td><td><code>GPIO2</code></td></tr>
    <tr><td>4</td><td><code>GPIO3</code></td></tr>
    <tr><td>5</td><td><code>GPIO1</code></td></tr>
    <tr><td>6</td><td><code>CS</code></td></tr>
    <tr><td>7</td><td><code>MOSI</code></td></tr>
    <tr><td>8</td><td><code>MISO</code></td></tr>
    <tr><td>9</td><td><code>SCK</code></td></tr>
    <tr><td>10</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Link connector J1

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>MOSI_P</code></td></tr>
    <tr><td>2</td><td><code>MOSI_N</code></td></tr>
    <tr><td>3</td><td><code>CS_P</code></td></tr>
    <tr><td>4</td><td><code>SCK_P</code></td></tr>
    <tr><td>5</td><td><code>SCK_N</code></td></tr>
    <tr><td>6</td><td><code>CS_N</code></td></tr>
    <tr><td>7</td><td><code>MISO_M_N</code></td></tr>
    <tr><td>8</td><td><code>MISO_M_P</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Link connector J2

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J2 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>MOSI_S_P</code></td></tr>
    <tr><td>2</td><td><code>MOSI_S_N</code></td></tr>
    <tr><td>3</td><td><code>CS_S_P</code></td></tr>
    <tr><td>4</td><td><code>SCK_S_P</code></td></tr>
    <tr><td>5</td><td><code>SCK_S_N</code></td></tr>
    <tr><td>6</td><td><code>CS_S_N</code></td></tr>
    <tr><td>7</td><td><code>MISO_N</code></td></tr>
    <tr><td>8</td><td><code>MISO_P</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Local header JP1

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>JP1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>5V0</code></td></tr>
    <tr><td>2</td><td><code>3V3</code></td></tr>
    <tr><td>3</td><td><code>GND</code></td></tr>
    <tr><td>4</td><td><code>SCK_</code></td></tr>
    <tr><td>5</td><td><code>MISO_</code></td></tr>
    <tr><td>6</td><td><code>MOSI_</code></td></tr>
    <tr><td>7</td><td><code>CS_</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Local header JP2

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>JP2 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>5V0</code></td></tr>
    <tr><td>2</td><td><code>3V3</code></td></tr>
    <tr><td>3</td><td><code>GND</code></td></tr>
    <tr><td>4</td><td><code>SCK</code></td></tr>
    <tr><td>5</td><td><code>MISO</code></td></tr>
    <tr><td>6</td><td><code>MOSI</code></td></tr>
    <tr><td>7</td><td><code>CS</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Extender board</b><span>Built from the design files</span></div>
  <div class="xb-card"><b>3.3 V supply</b><span>On the 5V0 net</span></div>
  <div class="xb-card"><b>Link cable</b><span>Not an Ethernet link</span></div>
</div>
{:/nomarkdown}

## Configuration {#configuration}

<span id="smoothieware-use"></span>

Smoothieware has no verified configuration for this board: not specified.

## How it works {#how-it-works}

Each signal has a driver at one end and a receiver at the other. MOSI, clock and chip select travel towards the peripheral; MISO travels back. See the [DS90LT012A datasheet](https://www.ti.com/lit/ds/symlink/ds90lt012a.pdf).

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Nothing is received</td><td>Check the supply on the 5V0 net, pair polarity and that the cable joins J1 to the matching half.</td></tr>
    <tr><td>Corrupt data</td><td>Lower the SPI rate and check the doubled termination.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="https://github.com/Ccecil/LVDS_SPI/tree/da5f05c83be2a4cb1d0fb3b8869efeebea22bc6d">Ccecil design source</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/LVDS_SPI/blob/da5f05c83be2a4cb1d0fb3b8869efeebea22bc6d/LVDS_SPI/LVDS_SPI%20v28.f3z">original Fusion archive</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/LVDS_SPI">Ccecil upstream project</a></td><td>Design source</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Only what the design source states or the circuit fixes. Blank cells are not specified.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Supply</td><td>Driver / receiver operating range</td><td>2.7–3.0 V</td><td>—</td><td>3.6 V</td><td>Manufacturer datasheets</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Design source {#origin}

Designed by Chris Cecil: [original design files](https://github.com/Ccecil/LVDS_SPI/tree/da5f05c83be2a4cb1d0fb3b8869efeebea22bc6d). It was drawn for the Smoothieboard V2 Gadgeteer era; check every connection against your own controller.
See all boards on the [extension boards](/extension-boards) page.
