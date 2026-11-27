---
layout: default
title: "SPI hub"
description: "Passive SPI hub with four chip selects: pinout and use."
permalink: /extensions/historical-spi-hub
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Wiring</p>
    <h1 id="historical-spi-hub">SPI hub</h1>
    <p class="xb-lead">Shares one SPI bus among four peripherals, each with its own chip-select wire.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/historical-spi-hub/directory-board-render.png" alt="Top view of the SPI hub board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>4</b><span>peripheral ports</span></div>
  <div class="xb-stat"><b>4</b><span>chip selects</span></div>
  <div class="xb-stat"><b>4</b><span>LEDs</span></div>
  <div class="xb-stat"><b>0</b><span>active parts</span></div>
  <div class="xb-stat"><b>49 × 29 mm</b><span>board size</span></div>
  <div class="xb-stat"><b>4</b><span>mounting holes</span></div>
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
  <a href="#mounting">Mounting dimensions</a>
  <a href="#electrical">Electrical specifications</a>
</nav>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <b>Only one peripheral may drive MISO at a time,</b> and the hub does not decode addresses. Its connector map is not the Prime GF header: wire it to a hardware SPI port. This is a historical Smoothieboard2 design, not a current board.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>Passive SPI fan-out</td></tr>
    <tr><td>Upstream</td><td>P1</td></tr>
    <tr><td>Peripheral ports</td><td>P2–P5, chip select on contact 6</td></tr>
    <tr><td>LEDs</td><td>D1–D4</td></tr>
    <tr><td>Size</td><td>49 × 29 mm</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/historical-spi-hub/directory-board-render.png" alt="Annotated top view of the SPI hub board">
      <a class="xb-mk xb-pl" href="#tour-1" style="left:20.3%;top:50.0%" aria-label="1: Upstream P1">1<span class="xb-pop"><b>Upstream P1</b> — From the controller.</span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:35.3%;top:23.8%" aria-label="2: Port P2">2<span class="xb-pop"><b>Port P2</b> — Chip select 2.</span></a>
      <a class="xb-mk xb-pb" href="#tour-3" style="left:64.7%;top:23.8%" aria-label="3: Port P3">3<span class="xb-pop"><b>Port P3</b> — Chip select 3.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:35.3%;top:76.2%" aria-label="4: Port P4">4<span class="xb-pop"><b>Port P4</b> — Chip select 4.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:64.7%;top:76.2%" aria-label="5: Port P5">5<span class="xb-pop"><b>Port P5</b> — Chip select 5.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:69.7%;top:54.9%" aria-label="6: LEDs D1–D4">6<span class="xb-pop"><b>LEDs D1–D4</b> — Status indicators.</span></a>
      <a class="xb-mk xb-pr" href="#tour-7" style="left:76.3%;top:54.9%" aria-label="7: LED D2">7<span class="xb-pop"><b>LED D2</b> — LED D2, marked <code>LED</code> in the board file. Connects to <code>+3V3</code>.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:68.4%;top:45.1%" aria-label="8: Resistor R1">8<span class="xb-pop"><b>Resistor R1</b> — Resistor R1, marked <code>200R</code> in the board file. Connects to <code>CS2</code>.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Upstream P1</b> — From the controller.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Port P2</b> — Chip select 2.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Port P3</b> — Chip select 3.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Port P4</b> — Chip select 4.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Port P5</b> — Chip select 5.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>LEDs D1–D4</b> — Status indicators.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>LED D2</b> — LED D2, marked <code>LED</code> in the board file. Connects to <code>+3V3</code>.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Resistor R1</b> — Resistor R1, marked <code>200R</code> in the board file. Connects to <code>CS2</code>.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

<span id="connect-and-try-it"></span>

### Upstream P1

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>P1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+3V3</code></td></tr>
    <tr><td>2</td><td><code>+5V</code></td></tr>
    <tr><td>3</td><td><code>CS5</code></td></tr>
    <tr><td>4</td><td><code>CS3</code></td></tr>
    <tr><td>5</td><td><code>CS4</code></td></tr>
    <tr><td>6</td><td><code>CS2</code></td></tr>
    <tr><td>7</td><td><code>MOSI</code></td></tr>
    <tr><td>8</td><td><code>MISO</code></td></tr>
    <tr><td>9</td><td><code>SCK</code></td></tr>
    <tr><td>10</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Port P2

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>P2 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+3V3</code></td></tr>
    <tr><td>2</td><td><code>+5V</code></td></tr>
    <tr><td>3</td><td>not connected</td></tr>
    <tr><td>4</td><td>not connected</td></tr>
    <tr><td>5</td><td>not connected</td></tr>
    <tr><td>6</td><td><code>CS2</code></td></tr>
    <tr><td>7</td><td><code>MOSI</code></td></tr>
    <tr><td>8</td><td><code>MISO</code></td></tr>
    <tr><td>9</td><td><code>SCK</code></td></tr>
    <tr><td>10</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

P3, P4 and P5 follow P2, with CS3, CS4 and CS5 on contact 6.

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>SPI hub</b><span>Built from the design files</span></div>
  <div class="xb-card"><b>Peripherals</b><span>Same logic voltage</span></div>
  <div class="xb-card"><b>Cables</b><span>Checked contact by contact</span></div>
</div>
{:/nomarkdown}

## Configuration {#configuration}

<span id="smoothieware-use"></span>

No setting for the hub. Each sensor needs its own Smoothieware driver entry with the <code>spi_channel</code> of the bus you wired and a distinct select pin.

## How it works {#how-it-works}

MOSI, MISO, SCK and supplies are common to all ports. The upstream contacts 3–6 carry CS5, CS3, CS4 and CS2, and each reaches contact 6 of its port. Contacts 3–5 of P2–P5 are not connected to each other.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Nothing responds</td><td>With power off, check continuity along each lead and board path against the pinout tables. Confirm which end of the connector is contact 1.</td></tr>
    <tr><td>Sensors read garbage</td><td>Check that each device releases MISO when unselected, and that every device has its own chip select.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/SPIHub">original Smoothieboard2 source</a></td><td>Design source</td></tr>
    <tr><td><a href="/images/extensions/historical-spi-hub/guides/native-contact-reference/native-source-and-notices.zip">Download the unmodified native source, upstream licence and drawing notice</a></td><td>Download</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

Outline and holes from the original board file. Millimetres, seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-ical-spi-hub-mount-t">
  <title id="xb-ical-spi-hub-mount-t">Mounting drawing of the historical-spi-hub, component side: outline 49 by 29 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="192.8" y="78.0" width="574.5" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M192.8 56H767.2"/><path d="M192.8 50V62"/><path d="M767.2 50V62"/><path d="M793.2 78.0V418.0"/><path d="M787.2 78.0h12"/><path d="M787.2 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">49</text>
  <text x="805.2" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">29</text>
  <circle cx="192.8" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="180.8" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M134.8 104.0h30" fill="none"/><path d="M168.8 104.0l-8 -4v8z"/><path d="M134.8 104.0v30" fill="none"/><path d="M134.8 138.0l-4 -8h8z"/></g>
  <text x="172.8" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="130.8" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="245.5" cy="130.8" r="18.8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M222.8 130.8h45.5M245.5 108.0v45.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="226.8" y="169.5" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  4.50, 4.50</text>
  <circle cx="714.5" cy="130.8" r="18.8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M691.7 130.8h45.5M714.5 108.0v45.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="733.2" y="169.5" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  44.50, 4.50</text>
  <circle cx="245.5" cy="365.2" r="18.8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M222.8 365.2h45.5M245.5 342.5v45.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="226.8" y="336.5" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  4.50, 24.50</text>
  <circle cx="714.5" cy="365.2" r="18.8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M691.7 365.2h45.5M714.5 342.5v45.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="733.2" y="336.5" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  44.50, 24.50</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 49 × 29&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>4.50</td><td>4.50</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>44.50</td><td>4.50</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>4.50</td><td>24.50</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>44.50</td><td>24.50</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Only what the design source states or the circuit fixes. Blank cells are not specified.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Voltage, current and temperature limits</td><td>Whole board</td><td>—</td><td>—</td><td>—</td><td>Not specified in the source</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Related boards, each with its own pinout and limits: [SPI Hub](/extensions/spi-hub).

## Design source {#origin}

This board comes from the [original design files](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/SPIHub). It was drawn for an earlier controller generation than Smoothieboard V2 Prime; match connections contact by contact.
See all boards on the [extension boards](/extension-boards) page.
