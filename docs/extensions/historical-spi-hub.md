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
  <a href="#get-started">Get started</a>
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

## Get started {#get-started}

The minimum wiring first, then the order to do it in. Facts about each contact are in the [pinout](#pinout).

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 562" role="img" aria-labelledby="xb-historical-spi-hub-wire"><title id="xb-historical-spi-hub-wire">Wiring: P1 contact 1 to +3V3; P1 contact 2 to +5V; P1 contact 6 to CS2; P1 contact 7 to MOSI; P1 contact 8 to MISO; P1 contact 9 to SCK; P1 contact 10 to GND.</title><image href="/images/extensions/historical-spi-hub/directory-board-render.png" x="319" y="14" width="362" height="230"/><circle cx="392" cy="129" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="373" y="148" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="392" y="162" text-anchor="middle" font-size="13" font-weight="700" fill="#111">P1</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">P1 on this board</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Host SPI cable</text><rect x="700" y="304" width="270" height="240" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><rect x="870" y="390" width="60" height="68" rx="5" fill="#23262b" stroke="#9aa2ad" stroke-width="1.5"/><path d="M810 412.0H870M810 424.0H870M810 436.0H870" fill="none" stroke="#8b949e" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/><circle cx="888" cy="412" r="3.5" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="888" cy="436" r="3.5" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="900" cy="412" r="3.5" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="900" cy="436" r="3.5" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="912" cy="412" r="3.5" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="912" cy="436" r="3.5" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><rect x="30" y="304" width="200" height="240" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 334.0H700" fill="none" stroke="#d92d2d" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="334" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="334" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><text x="216" y="339" text-anchor="end" font-size="14" fill="#e6ebf2">+3V3  1</text><text x="712" y="339" text-anchor="start" font-size="13" fill="#e6ebf2">+3V3</text><rect x="340" y="323" width="220" height="22" rx="11" fill="#d92d2d" stroke="#d92d2d" stroke-width="1.5"/><text x="450" y="339" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1: +3V3</text><path d="M230 364.0H700" fill="none" stroke="#e8820c" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="364" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" fill="#e6ebf2">+5V  2</text><text x="712" y="369" text-anchor="start" font-size="13" fill="#e6ebf2">+5V</text><rect x="340" y="353" width="220" height="22" rx="11" fill="#e8820c" stroke="#e8820c" stroke-width="1.5"/><text x="450" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#111">2: +5V</text><path d="M230 394.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" fill="#e6ebf2">CS2  6</text><text x="712" y="399" text-anchor="start" font-size="13" fill="#e6ebf2">CS2</text><rect x="340" y="383" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">6: CS2</text><path d="M230 424.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="429" text-anchor="end" font-size="14" fill="#e6ebf2">MOSI  7</text><text x="712" y="429" text-anchor="start" font-size="13" fill="#e6ebf2">MOSI</text><rect x="340" y="413" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="429" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">7: MOSI</text><path d="M230 454.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="454" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="454" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="459" text-anchor="end" font-size="14" fill="#e6ebf2">MISO  8</text><text x="712" y="459" text-anchor="start" font-size="13" fill="#e6ebf2">MISO</text><rect x="340" y="443" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="459" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">8: MISO</text><path d="M230 484.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="484" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="484" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="489" text-anchor="end" font-size="14" fill="#e6ebf2">SCK  9</text><text x="712" y="489" text-anchor="start" font-size="13" fill="#e6ebf2">SCK</text><rect x="340" y="473" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="489" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">9: SCK</text><path d="M230 514.0H700" fill="none" stroke="#8b949e" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="514" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="514" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><text x="216" y="519" text-anchor="end" font-size="14" fill="#e6ebf2">  10</text><text x="712" y="519" text-anchor="start" font-size="13" fill="#e6ebf2">GND</text><rect x="340" y="503" width="220" height="22" rx="11" fill="#8b949e" stroke="#8b949e" stroke-width="1.5"/><text x="450" y="519" text-anchor="middle" font-size="13" font-weight="700" fill="#111">10: GND</text></svg>
  </div>
  <figcaption>Wiring drawn from the original design files. Make connections with all power off. Equipment is drawn as a typical unit, not a specific model.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Check the contacts</h3>
    <p>With all power off, find contact 1 on each connector and check every wire against the <a href="#pinout">pinout</a>.</p>
  </li>
  <li class="xb-step">
    <h3>Set up and check</h3>
    <p>Use peripherals with the same logic voltage and check cables contact by contact.</p>
  </li>
  <li class="xb-step">
    <h3>Check with a meter</h3>
    <p>Check continuity and the rail voltages with a meter before connecting anything else.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

<span id="smoothieware-use"></span>

No setting for the hub. Each sensor needs its own Smoothieware driver entry with the <code>spi_channel</code> of the bus you wired and a distinct select pin.

## How it works {#how-it-works}

MOSI, MISO, SCK and supplies are common to all ports. The upstream contacts 3–6 carry CS5, CS3, CS4 and CS2, and each reaches contact 6 of its port. Contacts 3–5 of P2–P5 are not connected to each other.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 270" role="img" aria-labelledby="xb-historical-spi-hub-path"><title id="xb-historical-spi-hub-path">Upstream MOSI, MISO, SCK, supplies then Common to all ports then P2 to P5. Contacts 3 to 6, CS5, CS3, CS4, CS2 then One per port then Contact 6 of that port.</title><rect x="46" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="186" y="56" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Upstream MOSI, MISO, SCK,</text><text x="186" y="74" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">supplies</text><text x="186" y="94" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="360" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Common to all ports</text><text x="500" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M330.0 70H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 63L358 70L349 77Z" fill="#5fb3ff"/><rect x="674" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="814" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">P2 to P5</text><text x="814" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M644.0 70H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 63L672 70L663 77Z" fill="#5fb3ff"/><rect x="46" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="186" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Contacts 3 to 6</text><text x="186" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2">CS5, CS3, CS4, CS2</text><rect x="360" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="500" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">One per port</text><text x="500" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M330.0 198H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 191L358 198L349 205Z" fill="#5fb3ff"/><rect x="674" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="814" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Contact 6 of that port</text><text x="814" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M644.0 198H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 191L672 198L663 205Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board, one path per row.</figcaption>
</figure>
{:/nomarkdown}


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
