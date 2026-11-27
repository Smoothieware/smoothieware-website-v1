---
layout: default
title: "SPI opto-isolator"
description: "Seven-channel 6N137 optocoupler isolator for SPI-like signals: pinout and limits."
permalink: /extensions/historical-spi-opto-isolator
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Signals</p>
    <h1 id="historical-spi-opto-isolator">SPI opto-isolator</h1>
    <p class="xb-lead">Carries six signals out and one back across two separate supply domains with 6N137 optocouplers.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/historical-spi-opto-isolator/historical-spi-opto-isolator-diagram.png" alt="Top view of the SPI opto-isolator board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>7</b><span>channels</span></div>
  <div class="xb-stat"><b>6N137</b><span>optocouplers</span></div>
  <div class="xb-stat"><b>6 + 1</b><span>out and back</span></div>
  <div class="xb-stat"><b>2</b><span>supply domains</span></div>
  <div class="xb-stat"><b>50.8 × 80 mm</b><span>board size</span></div>
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
  <b>All seven channels invert, the host MISO pull-up goes to 5 V, and the board silk shows a 5 V and ground link that defeats isolation.</b> Do not connect MISO straight to a 3.3 V controller. The board file also lacks C2 and C6 from the schematic. This is a historical Smoothieboard2 design, not a current board.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>Directional optical isolator</td></tr>
    <tr><td>Host side</td><td>Conn1 (netlist C2), supply on P1</td></tr>
    <tr><td>External side</td><td>Conn2 (netlist C6), supply on P2</td></tr>
    <tr><td>Channels</td><td>U1–U3, U5–U7 outwards; U4 returns MISO</td></tr>
    <tr><td>Polarity</td><td>Each channel inverts</td></tr>
    <tr><td>Size</td><td>50.8 × 80.01 mm</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/historical-spi-opto-isolator/historical-spi-opto-isolator-diagram.png" alt="Annotated top view of the SPI opto-isolator board">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:18.8%;top:30.1%" aria-label="1: Host connector">1<span class="xb-pop"><b>Host connector</b> — Labelled C2 in the netlist.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-2" style="left:83.7%;top:30.1%" aria-label="2: External connector">2<span class="xb-pop"><b>External connector</b> — Labelled C6 in the netlist.</span></a>
      <a class="xb-mk xb-pb" href="#tour-3" style="left:25.5%;top:4.8%" aria-label="3: Host supply">3<span class="xb-pop"><b>Host supply</b> — Ground and 5 V.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:75.0%;top:4.8%" aria-label="4: External supply">4<span class="xb-pop"><b>External supply</b> — Ground and 5 V.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:52.5%;top:9.6%" aria-label="5: Optocouplers">5<span class="xb-pop"><b>Optocouplers</b> — U1–U7, one per channel.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:52.5%;top:50.0%" aria-label="6: Return channel">6<span class="xb-pop"><b>Return channel</b> — Carries MISO back.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:37.5%;top:11.1%" aria-label="7: Resistor R1">7<span class="xb-pop"><b>Resistor R1</b> — Resistor R1, marked <code>330R</code> in the board file. Connects to <code>GND</code>.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:37.5%;top:51.6%" aria-label="8: Capacitor C1">8<span class="xb-pop"><b>Capacitor C1</b> — Capacitor C1, marked <code>u10</code> in the board file. Connects to <code>+5V</code>, <code>GND</code>.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host connector</b> — Labelled C2 in the netlist.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>External connector</b> — Labelled C6 in the netlist.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Host supply</b> — Ground and 5 V.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>External supply</b> — Ground and 5 V.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Optocouplers</b> — U1–U7, one per channel.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Return channel</b> — Carries MISO back.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Resistor R1</b> — Resistor R1, marked <code>330R</code> in the board file. Connects to <code>GND</code>.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Capacitor C1</b> — Capacitor C1, marked <code>u10</code> in the board file. Connects to <code>+5V</code>, <code>GND</code>.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

<span id="connect-and-try-it"></span>

### Host connector Conn1

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Conn1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+3V3</code></td></tr>
    <tr><td>2</td><td><code>+5V</code></td></tr>
    <tr><td>3</td><td><code>GPIO0</code></td></tr>
    <tr><td>4</td><td><code>GPIO1</code></td></tr>
    <tr><td>5</td><td><code>GPIO2</code></td></tr>
    <tr><td>6</td><td><code>CS</code></td></tr>
    <tr><td>7</td><td><code>MOSI</code></td></tr>
    <tr><td>8</td><td><code>MISO</code></td></tr>
    <tr><td>9</td><td><code>SCK</code></td></tr>
    <tr><td>10</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### External connector Conn2

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Conn2 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>External3V3</code></td></tr>
    <tr><td>2</td><td><code>External5V</code></td></tr>
    <tr><td>3</td><td><code>GPIOOpto</code></td></tr>
    <tr><td>4</td><td><code>GPIO1Opto</code></td></tr>
    <tr><td>5</td><td><code>GPIO2Opto</code></td></tr>
    <tr><td>6</td><td><code>CSOpto</code></td></tr>
    <tr><td>7</td><td><code>MOSIOpto</code></td></tr>
    <tr><td>8</td><td><code>MISOOpto</code></td></tr>
    <tr><td>9</td><td><code>SCKOpto</code></td></tr>
    <tr><td>10</td><td><code>ExternalGND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Host supply P1

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>P1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>GND</code></td></tr>
    <tr><td>2</td><td><code>+5V</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### External supply P2

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>P2 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>ExternalGND</code></td></tr>
    <tr><td>2</td><td><code>External5V</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Isolator board</b><span>Built from the design files</span></div>
  <div class="xb-card"><b>Two supplies</b><span>One per side</span></div>
  <div class="xb-card"><b>Meter and scope</b><span>To check levels and polarity</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

The minimum wiring first, then the order to do it in. Facts about each contact are in the [pinout](#pinout).

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 666" role="img" aria-labelledby="xb-historical-spi-opto-isolator-wire"><title id="xb-historical-spi-opto-isolator-wire">Wiring: P2 contact 1 to ExternalGND; P2 contact 2 to External5V; P1 contact 1 to GND; P1 contact 2 to +5V.</title><image href="/images/extensions/historical-spi-opto-isolator/historical-spi-opto-isolator-diagram.png" x="423" y="14" width="155" height="230"/><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">P2 on this board</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">External-side supply</text><rect x="700" y="304" width="270" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><rect x="810" y="334" width="140" height="90" rx="8" fill="#cfd3d9" stroke="#3a3f46" stroke-width="1.5"/><rect x="824" y="345" width="112" height="34" rx="3" fill="#101418" stroke="#101418" stroke-width="1.5"/><text x="880" y="369" text-anchor="middle" font-size="18" fill="#5df07a">00.0 V</text><circle cx="840" cy="401" r="11" fill="#2c3036" stroke="#0d0f12" stroke-width="1.5"/><circle cx="894" cy="401" r="8" fill="#c0262c" stroke="#0d0f12" stroke-width="1.5"/><circle cx="924" cy="401" r="8" fill="#23262b" stroke="#0d0f12" stroke-width="1.5"/><rect x="30" y="304" width="200" height="150" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 364.0H700" fill="none" stroke="#8b949e" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="364" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" fill="#e6ebf2">  1</text><text x="712" y="369" text-anchor="start" font-size="13" fill="#e6ebf2">ExternalGND</text><rect x="340" y="353" width="220" height="22" rx="11" fill="#8b949e" stroke="#8b949e" stroke-width="1.5"/><text x="450" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#111">1: ExternalGND</text><path d="M230 394.0H700" fill="none" stroke="#e8820c" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="394" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" fill="#e6ebf2">  2</text><text x="712" y="399" text-anchor="start" font-size="13" fill="#e6ebf2">External5V</text><rect x="340" y="383" width="220" height="22" rx="11" fill="#e8820c" stroke="#e8820c" stroke-width="1.5"/><text x="450" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#111">2: External5V</text><text x="130" y="486" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">P1 on this board</text><text x="870" y="486" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Host-side supply</text><rect x="700" y="498" width="270" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><rect x="810" y="528" width="140" height="90" rx="8" fill="#cfd3d9" stroke="#3a3f46" stroke-width="1.5"/><rect x="824" y="539" width="112" height="34" rx="3" fill="#101418" stroke="#101418" stroke-width="1.5"/><text x="880" y="563" text-anchor="middle" font-size="18" fill="#5df07a">00.0 V</text><circle cx="840" cy="595" r="11" fill="#2c3036" stroke="#0d0f12" stroke-width="1.5"/><circle cx="894" cy="595" r="8" fill="#c0262c" stroke="#0d0f12" stroke-width="1.5"/><circle cx="924" cy="595" r="8" fill="#23262b" stroke="#0d0f12" stroke-width="1.5"/><rect x="30" y="498" width="200" height="150" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 558.0H700" fill="none" stroke="#8b949e" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="558" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="558" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><text x="216" y="563" text-anchor="end" font-size="14" fill="#e6ebf2">  1</text><text x="712" y="563" text-anchor="start" font-size="13" fill="#e6ebf2">GND</text><rect x="340" y="547" width="220" height="22" rx="11" fill="#8b949e" stroke="#8b949e" stroke-width="1.5"/><text x="450" y="563" text-anchor="middle" font-size="13" font-weight="700" fill="#111">1: GND</text><path d="M230 588.0H700" fill="none" stroke="#e8820c" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="588" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="588" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><text x="216" y="593" text-anchor="end" font-size="14" fill="#e6ebf2">+5V  2</text><text x="712" y="593" text-anchor="start" font-size="13" fill="#e6ebf2">+5V</text><rect x="340" y="577" width="220" height="22" rx="11" fill="#e8820c" stroke="#e8820c" stroke-width="1.5"/><text x="450" y="593" text-anchor="middle" font-size="13" font-weight="700" fill="#111">2: +5V</text></svg>
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
    <p>Use one supply per side and check levels and polarity with a meter and oscilloscope. Every channel inverts.</p>
  </li>
  <li class="xb-step">
    <h3>Check with a meter</h3>
    <p>Check continuity and the rail voltages with a meter before connecting anything else.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

<span id="smoothieware-use"></span>

Smoothieware has no verified configuration for this board: not specified. Because every channel inverts, an SPI device does not work through it without further inversion.

## How it works {#how-it-works}

A signal drives an LED inside a 6N137, which switches an open-collector output pulled up by 330 Ω on the other side. The [6N137 series datasheet](https://media.digikey.com/pdf/Data%20Sheets/Lite-On%20PDFs/6N137%20Series.pdf) gives a 5 mA maximum input threshold and up to 0.6 V output low at 13 mA.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 142" role="img" aria-labelledby="xb-historical-spi-opto-isolator-path"><title id="xb-historical-spi-opto-isolator-path">Input signal then LED inside a 6N137 then Light across the barrier then Open-collector output, 330 Ω pull-up.</title><rect x="20" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="127" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Input signal</text><text x="127" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="268" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="376" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">LED inside a 6N137</text><text x="376" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M238.5 70H259.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M258 63L266 70L258 77Z" fill="#5fb3ff"/><rect x="517" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="624" y="56" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Light across the</text><text x="624" y="74" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">barrier</text><text x="624" y="94" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M487.0 70H508.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M506 63L515 70L506 77Z" fill="#5fb3ff"/><rect x="766" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="873" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Open-collector output</text><text x="873" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2">330 Ω pull-up</text><path d="M735.5 70H756.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M754 63L764 70L754 77Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Data inverted</td><td>Expected: every channel inverts.</td></tr>
    <tr><td>No isolation measured</td><td>Look for the 5 V and ground connection shown on the silk, or a shared supply.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/SPIOpto">Smoothieboard2 design source</a></td><td>Design source</td></tr>
    <tr><td><a href="/images/extensions/historical-spi-opto-isolator/guides/native-contact-reference/native-source-and-notices.zip">Download the design source, upstream licence and drawing notice</a></td><td>Download</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

Outline and holes from the original board file. Millimetres, seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-pto-isolator-mount-t">
  <title id="xb-pto-isolator-mount-t">Mounting drawing of the historical-spi-opto-isolator, component side: outline 50.8 by 80.01 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="372.1" y="78.0" width="215.9" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M372.1 56H587.9"/><path d="M372.1 50V62"/><path d="M587.9 50V62"/><path d="M613.9 78.0V418.0"/><path d="M607.9 78.0h12"/><path d="M607.9 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">50.8</text>
  <text x="625.9" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">80.01</text>
  <circle cx="372.1" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="360.1" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M314.1 104.0h30" fill="none"/><path d="M348.1 104.0l-8 -4v8z"/><path d="M314.1 104.0v30" fill="none"/><path d="M314.1 138.0l-4 -8h8z"/></g>
  <text x="352.1" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="310.1" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="393.3" cy="99.3" r="6.4" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M382.9 99.3h20.7M393.3 88.9v20.7" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="386.9" y="125.7" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.01</text>
  <circle cx="563.3" cy="99.3" r="6.4" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M552.9 99.3h20.7M563.3 88.9v20.7" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="569.7" y="125.7" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  45.00, 5.01</text>
  <circle cx="393.3" cy="396.4" r="6.4" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M382.9 396.4h20.7M393.3 386.0v20.7" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="386.9" y="380.0" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 74.93</text>
  <circle cx="563.3" cy="396.4" r="6.4" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M552.9 396.4h20.7M563.3 386.0v20.7" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="569.7" y="380.0" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  45.00, 74.93</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 50.8 × 80.01&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>5.01</td><td>3&nbsp;mm, plated</td><td>Mounting</td></tr>
    <tr><td>2</td><td>45.00</td><td>5.01</td><td>3&nbsp;mm, plated</td><td>Mounting</td></tr>
    <tr><td>3</td><td>5.00</td><td>74.93</td><td>3&nbsp;mm, plated</td><td>Mounting</td></tr>
    <tr><td>4</td><td>45.00</td><td>74.93</td><td>3&nbsp;mm, plated</td><td>Mounting</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Only what the design source states or the circuit fixes. Blank cells are not specified.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Input threshold current</td><td>6N137 LED</td><td>—</td><td>—</td><td>5 mA</td><td>Manufacturer datasheet, stated test conditions</td></tr>
    <tr><td>Output low voltage</td><td>6N137 output</td><td>—</td><td>—</td><td>0.6 V</td><td>At 13 mA, manufacturer datasheet</td></tr>
    <tr><td>Output pull-up</td><td>Each channel</td><td>—</td><td>330 Ω</td><td>—</td><td>Design file value</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Design source {#origin}

This board comes from the [original design files](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/SPIOpto). It was drawn for an earlier controller generation than Smoothieboard V2 Prime; match connections contact by contact.
See all boards on the [extension boards](/extension-boards) page.
