---
layout: default
title: "SPI Thermocouple Breakout"
description: "A MAX31856 thermocouple-to-digital board: pinout, solder links, probe connection and limitations."
permalink: /extensions/spi-thermocouple-breakout
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Temperature</p>
    <h1 id="spi-thermocouple-breakout">SPI Thermocouple Breakout</h1>
    <p class="xb-lead">A MAX31856 converter that turns the small voltage of a thermocouple into a digital temperature over SPI. It is a sensor interface: it supplies no heater power and no independent over-temperature shutdown. Smoothieware has no driver for this converter.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/spi-thermocouple-breakout/spi-thermocouple-breakout-diagram.png" alt="Top view of the SPI thermocouple breakout: two ten-contact sockets at the top, the converter in the middle and a two-way screw terminal at the bottom.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>MAX31856</b><span>thermocouple converter with SPI</span></div>
  <div class="xb-stat"><b>Type selectable</b><span>set in the converter by the driver</span></div>
  <div class="xb-stat"><b>3.3 V</b><span>converter supply from the host</span></div>
  <div class="xb-stat"><b>No light</b><span>the board has no indicator</span></div>
  <div class="xb-stat"><b>No firmware</b><span>no Smoothieware driver</span></div>
  <div class="xb-stat"><b>40 × 30</b><span>millimetres, two M3 holes</span></div>
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
  <strong>Do not energize this board.</strong> It needs a MAX31856 driver, and Smoothieware has none: do not select the thermocouple driver for a different chip, and do not invent a sensor name. The board provides no galvanic isolation. Keep the thermocouple junction electrically isolated, and never connect heater power or a resistance sensor to J3.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>Read a thermocouple digitally over SPI where a thermistor is inconvenient</td></tr>
    <tr><td>Converter</td><td>MAX31856MUD+, which compensates the cold junction and applies the selected thermocouple curve. It must be configured over MOSI as well as read over MISO, so it is not a drop-in replacement for a read-only MAX31855.</td></tr>
    <tr><td>Interface</td><td>SPI on J1 contacts 6 to 9; the converter needs clock phase 1 with clock polarity 0 (mode 1)</td></tr>
    <tr><td>Input</td><td>Two-way screw terminal J3 (T&minus;, T+). The converter&rsquo;s input bias is tied to T&minus; in the schematic.</td></tr>
    <tr><td>Sockets</td><td>Two 10-contact Gadgeteer S sockets: J1 IN and J2 CHAIN</td></tr>
    <tr><td>Not brought out</td><td>The converter&rsquo;s data-ready and fault outputs are not on any connector</td></tr>
    <tr><td>Lights, test points</td><td>None</td></tr>
    <tr><td>Size</td><td>40 &times; 30&nbsp;mm with two M3 mounting holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a></td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its conditions is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix. The converter&rsquo;s capabilities are in the [manufacturer data sheet](https://www.analog.com/media/en/technical-documentation/data-sheets/MAX31856.pdf); they are not a temperature range or accuracy rating for this board, a probe or an installation.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side. The mounting holes and solder links are not marked on the drawing.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/spi-thermocouple-breakout/spi-thermocouple-breakout-diagram.png" alt="Top view of the SPI thermocouple breakout with nine numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:23.6%;top:16.7%" aria-label="1: host socket">1<span class="xb-pop"><b>Host socket S IN (J1)</b> — the Gadgeteer socket to the controller: 3.3&nbsp;V, 5&nbsp;V through, and the SPI lines. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-2" style="left:76.2%;top:16.7%" aria-label="2: chain socket">2<span class="xb-pop"><b>Chain socket S CHAIN (J2)</b> — a second socket that carries the lines on to the next board. Leave it unconnected for a single sensor.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:50%;top:80%" aria-label="3: thermocouple terminals">3<span class="xb-pop"><b>Thermocouple terminals (J3)</b> — two screw terminals: T&minus; at the left and T+ at the right. Use thermocouple alloy leads, not copper.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:50%;top:47.1%" aria-label="4: converter">4<span class="xb-pop"><b>Thermocouple converter (U1)</b> — a MAX31856 that measures the thermocouple voltage, compensates the cold junction and reports over SPI.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:73.2%;top:46.5%" aria-label="5: chain links">5<span class="xb-pop"><b>Chain links (JP3 to JP5, JP7 to JP9)</b> — solder links, marked P3 to P5 and P7 to P9 on the silk, that pass the host lines through to the chain socket.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:72.3%;top:67.4%" aria-label="6: chip-select link">6<span class="xb-pop"><b>Chip-select link (JP6, CS OPEN)</b> — the chip-select path to the chain socket, open as delivered. Do not bridge it to add a second converter.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-7" style="left:14.1%;top:33.2%" aria-label="7: pull-up resistor">7<span class="xb-pop"><b>Pull-up resistor (R1)</b> — a 10&nbsp;k&Omega; resistor from the 3.3&nbsp;V supply to the chip-select line, so the converter stays deselected when the host does not drive it.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:49.9%;top:61.2%" aria-label="8: input capacitor">8<span class="xb-pop"><b>Input capacitor (C2)</b> — a 100&nbsp;nF capacitor across the two thermocouple lines. Two 10&nbsp;nF capacitors (C4, C5) also join each line to ground; they are not marked on the drawing.</span></a>
      <a class="xb-mk xb-pb" href="#tour-9" style="left:61.4%;top:35%" aria-label="9: bypass capacitors">9<span class="xb-pop"><b>Supply bypass (C3, C1)</b> — 100&nbsp;nF capacitors on the converter&rsquo;s 3.3&nbsp;V supply.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host socket S IN (J1)</b> — the Gadgeteer socket to the controller: 3.3&nbsp;V, 5&nbsp;V through, and the SPI lines. <i>See the pinout.</i></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket S CHAIN (J2)</b> — a second socket that carries the lines on to the next board. Leave it unconnected for a single sensor.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Thermocouple terminals (J3)</b> — two screw terminals: T&minus; at the left and T+ at the right. Use thermocouple alloy leads, not copper.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Thermocouple converter (U1)</b> — a MAX31856 that measures the thermocouple voltage, compensates the cold junction and reports over SPI.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Chain links (JP3 to JP5, JP7 to JP9)</b> — solder links, marked P3 to P5 and P7 to P9 on the silk, that pass the host lines through to the chain socket.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Chip-select link (JP6, CS OPEN)</b> — the chip-select path to the chain socket, open as delivered. Do not bridge it to add a second converter.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Pull-up resistor (R1)</b> — a 10&nbsp;k&Omega; resistor from the 3.3&nbsp;V supply to the chip-select line, so the converter stays deselected when the host does not drive it.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Input capacitor (C2)</b> — a 100&nbsp;nF capacitor across the two thermocouple lines. Two 10&nbsp;nF capacitors (C4, C5) also join each line to ground; they are not marked on the drawing.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Supply bypass (C3, C1)</b> — 100&nbsp;nF capacitors on the converter&rsquo;s 3.3&nbsp;V supply.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1: host socket (S IN) and J2: chain socket (S CHAIN)

Contact 1 is at the left end of the lower row, above the small white arrow under each socket in the tour. The odd contacts are in the lower row and the even contacts in the upper row.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>J1 (from the controller)</th><th>J2 (to the next board)</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span> converter supply</td><td><span class="xb-pill xb-p-3v3">3.3 V</span> passed on</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span> through only</td><td><span class="xb-pill xb-p-5v">5 V</span> passed on</td></tr>
    <tr><td>3, 4, 5</td><td><span class="xb-pill xb-p-sig">P3, P4, P5</span> unused here</td><td>Chain lines P3 to P5</td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">CS</span> chip select (active low)</td><td>Chain chip select</td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-sig">MOSI</span> data to the converter</td><td>Chain MOSI</td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">MISO</span> data from the converter</td><td>Chain MISO</td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">SCK</span> clock</td><td>Chain SCK</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td><span class="xb-pill xb-p-gnd">GND</span> passed on</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The 5&nbsp;V through rail does not rate the board or make its SPI lines 5&nbsp;V compatible: the converter works at 3.3&nbsp;V. The two socket footprints differ, so matching contact numbers do not establish a compatible cable assembly.

### J3: thermocouple terminals

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Terminal</th><th>Function</th></tr></thead>
  <tbody>
    <tr><td>1 (T&minus;)</td><td>Thermocouple negative</td></tr>
    <tr><td>2 (T+)</td><td>Thermocouple positive</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

These are thermocouple alloy leads, not ordinary copper jumpers and not supply wires. Lead colours depend on the standard: the example in this page uses an ANSI type-K lead, where yellow is positive and red is negative; other standards differ.

### Solder links

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>Effect</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>JP3, JP4, JP5</td><td>Pass J1 lines P3, P4, P5 through to the chain socket</td><td>Bridged</td></tr>
    <tr><td>JP7, JP8, JP9</td><td>Pass MOSI, MISO and SCK through to the chain socket</td><td>Bridged</td></tr>
    <tr><td>JP6 (CS OPEN)</td><td>Passes chip select through to the chain socket</td><td>Open</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Do not bridge JP6 to add a second converter: both would be selected at once. A second sensor needs its own chip-select scheme and compatible firmware.

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>The SPI thermocouple breakout.</span></div>
  <div class="xb-card"><b>A thermocouple</b><span>A probe whose type and lead colours you have identified. An ANSI type-K Omega 5TC-TT-K-30-36 is the example.</span></div>
  <div class="xb-card"><b>A ten-core ribbon</b><span>To the host header, checked end to end with the power removed.</span></div>
  <div class="xb-card"><b>A driver</b><span>Matching converter firmware. Smoothieware does not include one.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 846" role="img" aria-labelledby="xb-spi-thermocouple-breakout-wire"><title id="xb-spi-thermocouple-breakout-wire">Wiring: controller contact 1 to J1 contact 1; controller contact 2 to J1 contact 2; controller contact 3 to J1 contact 3; controller contact 4 to J1 contact 4; controller contact 5 to J1 contact 5; controller contact 6 to J1 contact 6; controller contact 7 to J1 contact 7; controller contact 8 to J1 contact 8; controller contact 9 to J1 contact 9; controller contact 10 to J1 contact 10; J3 contact 1 to T−, red lead; J3 contact 2 to T+, yellow lead.</title><image href="/images/extensions/spi-thermocouple-breakout/spi-thermocouple-breakout-diagram.png" x="349" y="14" width="302" height="230"/><circle cx="420" cy="52" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="401" y="71" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="420" y="85" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J1</text><circle cx="500" cy="198" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="481" y="217" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="500" y="231" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J3</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Prime header GE/J36</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J1 on this board</text><rect x="30" y="304" width="200" height="330" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="130" y="465" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Smoothieboard</text><text x="130" y="485" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">V2 Prime</text><rect x="770" y="304" width="200" height="330" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 334.0H770" fill="none" stroke="#d92d2d" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="334" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="334" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><text x="216" y="339" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">1</text><text x="784" y="339" text-anchor="start" font-size="14" fill="#e6ebf2">1  3.3 V</text><rect x="400" y="323" width="200" height="22" rx="11" fill="#d92d2d" stroke="#d92d2d" stroke-width="1.5"/><text x="500" y="339" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1 to 1: 3.3 V</text><path d="M230 364.0H770" fill="none" stroke="#e8820c" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="364" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">2</text><text x="784" y="369" text-anchor="start" font-size="14" fill="#e6ebf2">2  5 V</text><rect x="400" y="353" width="200" height="22" rx="11" fill="#e8820c" stroke="#e8820c" stroke-width="1.5"/><text x="500" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#111">2 to 2: 5 V</text><path d="M230 394.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">3</text><text x="784" y="399" text-anchor="start" font-size="14" fill="#e6ebf2">3  </text><rect x="400" y="383" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">3 to 3</text><path d="M230 424.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="429" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">4</text><text x="784" y="429" text-anchor="start" font-size="14" fill="#e6ebf2">4  </text><rect x="400" y="413" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="429" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">4 to 4</text><path d="M230 454.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="454" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="454" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="459" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">5</text><text x="784" y="459" text-anchor="start" font-size="14" fill="#e6ebf2">5  </text><rect x="400" y="443" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="459" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">5 to 5</text><path d="M230 484.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="484" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="484" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="489" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">6</text><text x="784" y="489" text-anchor="start" font-size="14" fill="#e6ebf2">6  </text><rect x="400" y="473" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="489" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">6 to 6</text><path d="M230 514.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="514" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="514" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="519" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">7</text><text x="784" y="519" text-anchor="start" font-size="14" fill="#e6ebf2">7  </text><rect x="400" y="503" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="519" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">7 to 7</text><path d="M230 544.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="544" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="544" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="549" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">8</text><text x="784" y="549" text-anchor="start" font-size="14" fill="#e6ebf2">8  </text><rect x="400" y="533" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="549" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">8 to 8</text><path d="M230 574.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="574" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="574" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="579" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">9</text><text x="784" y="579" text-anchor="start" font-size="14" fill="#e6ebf2">9  </text><rect x="400" y="563" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="579" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">9 to 9</text><path d="M230 604.0H770" fill="none" stroke="#8b949e" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="604" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="604" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><text x="216" y="609" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">10</text><text x="784" y="609" text-anchor="start" font-size="14" fill="#e6ebf2">10  GND</text><rect x="400" y="593" width="200" height="22" rx="11" fill="#8b949e" stroke="#8b949e" stroke-width="1.5"/><text x="500" y="609" text-anchor="middle" font-size="13" font-weight="700" fill="#111">10 to 10: GND</text><text x="130" y="666" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J3 on this board</text><text x="870" y="666" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Type K thermocouple</text><rect x="700" y="678" width="270" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><path d="M820 761.0H900M820 745.0H900" fill="none" stroke="#c4cad3" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="916" cy="753" r="20" fill="#b5251e" stroke="#7d120d" stroke-width="3"/><rect x="30" y="678" width="200" height="150" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 738.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="738" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="738" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="743" text-anchor="end" font-size="14" fill="#e6ebf2">Thermocouple…  1</text><text x="712" y="743" text-anchor="start" font-size="13" fill="#e6ebf2">T−, red lead</text><rect x="340" y="727" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="743" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1: T−, red lead</text><path d="M230 768.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="768" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="768" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="773" text-anchor="end" font-size="14" fill="#e6ebf2">Thermocouple…  2</text><text x="712" y="773" text-anchor="start" font-size="13" fill="#e6ebf2">T+, yellow lead</text><rect x="340" y="757" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="773" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">2: T+, yellow lead</text></svg>
  </div>
  <figcaption>Check every cable core before connecting. Keep J2 unconnected. Equipment is drawn as a typical unit, not a specific model.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Identify the board</h3>
    <p>Confirm the board uses a MAX31856MUD+. A different board or a MAX31855 module does not have the same circuit.</p>
  </li>
  <li class="xb-step">
    <h3>Check the cable</h3>
    <p>With everything unpowered and the cable detached from both boards, establish contact 1 at each plug and check the ten number-to-number cores, and that no two cores touch. A red stripe or a plug that fits is not enough. The connection is Prime header GE (J36) contacts 1 to 10 to J1 contacts 1 to 10; the board uses 3.3&nbsp;V (1), chip select on PD15 (6), MOSI (7), MISO (8), clock (9) and ground (10).</p>
    <p class="xb-expect">Keep J2 unconnected and do not attach an external supply to the through rails. Do not configure PE8, PJ7 or PJ8 as outputs just because the ribbon carries them.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the probe</h3>
    <p>For the named ANSI type-K probe, the red negative lead goes to J3 terminal 1 (T&minus;) and the yellow positive lead to terminal 2 (T+). Keep the junction isolated from conductive equipment.</p>
  </li>
  <li class="xb-step">
    <h3>Stop at the bench</h3>
    <p>Without a driver there is nothing to read. There is no heater in this example.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>A temperature from this board</td><td>None in Smoothieware</td><td>Not supported</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The SmoothieV2 source recognises <code>thermistor</code> and <code>max31855</code> in its [temperature factory](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/temperaturecontrol/TemperatureControl.cpp#L177-L193); any other name creates a dummy sensor. The thermocouple driver for the other chip cannot substitute, and a pin assignment alone gives neither acquisition nor fault handling. A matching driver would have to allocate the SPI port and the chip select on PD15, select the thermocouple type, enable conversions and fault reporting, and use clock phase 1. The converter resets with conversions off. After support exists, polarity, cold-junction performance, calibration and open-probe behaviour need checking; no settings are given here.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 170" role="img" aria-labelledby="xb-how-t">
    <title id="xb-how-t">A thermocouple on the screw terminal feeds the MAX31856 through a filter, and the converter reports a temperature over SPI to the host socket.</title>
    <g font-size="13" font-weight="700" text-anchor="middle" fill="#e6ebf2">
      <rect x="20" y="55" width="150" height="60" rx="8" fill="#1f2226" stroke="#dfe4ee"/><text x="95" y="80">J3</text><text x="95" y="100" font-weight="400" fill="#a9b4c2">thermocouple</text>
      <rect x="215" y="55" width="160" height="60" rx="8" fill="#212936" stroke="#e0a877"/><text x="295" y="80">Input filter</text><text x="295" y="100" font-weight="400" fill="#a9b4c2">C2, C4, C5</text>
      <rect x="420" y="55" width="170" height="60" rx="8" fill="#212936" stroke="#6fe08a"/><text x="505" y="80">MAX31856</text><text x="505" y="100" font-weight="400" fill="#a9b4c2">cold junction, curve</text>
      <rect x="635" y="55" width="150" height="60" rx="8" fill="#212936" stroke="#5fb3ff"/><text x="710" y="80">SPI</text><text x="710" y="100" font-weight="400" fill="#a9b4c2">CS, MOSI, MISO, SCK</text>
      <rect x="830" y="55" width="150" height="60" rx="8" fill="#1f2226" stroke="#dfe4ee"/><text x="905" y="80">J1</text><text x="905" y="100" font-weight="400" fill="#a9b4c2">host</text>
    </g>
    <g stroke-width="3" fill="none" stroke="#a9b4c2"><path d="M170 85H215"/><path d="M375 85H420"/><path d="M590 85H635"/><path d="M785 85H830"/></g>
  </svg>
  </div>
  <figcaption>The converter measures the thermocouple voltage, compensates the local cold junction and returns the result over SPI.</figcaption>
</figure>
{:/nomarkdown}

Two dissimilar-metal leads meet at the sensing junction, and their small differential voltage enters at T&minus; and T+. The controller must send configuration to the converter as well as read it. The converter supply comes from the host 3.3&nbsp;V rail; check the available current, cable loss and total attached load. The board provides no galvanic isolation, so a grounded or mains-referenced junction must not be connected.

{% include _includes/temperature-board-comparison.html %}

## Troubleshooting {#troubleshooting}

This board has no indicator lights.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>No SPI answer</td><td>3.3&nbsp;V on contact 1, chip select, and the numbered continuity of the ribbon.</td></tr>
    <tr><td>Reading reversed or implausible</td><td>T&minus; and T+ swapped; a probe type that does not match the converter&rsquo;s configured type.</td></tr>
    <tr><td>A following chained board does not answer</td><td>Chip select is not passed on by default (JP6 open).</td></tr>
    <tr><td>Fault or open-probe report</td><td>Probe leads and terminals; open-circuit and fault behaviour depend on the driver.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/spi-thermocouple-breakout/spi-thermocouple-breakout-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram.</td></tr>
    <tr><td><a href="/images/extensions/spi-thermocouple-breakout/spi-thermocouple-breakout-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/spi-thermocouple-breakout/spi-thermocouple-breakout-diagram.png">Board drawing (SVG)</a></td><td>The top view used on this page, at full resolution</td></tr>
    <tr><td><a href="/assets/downloads/extensions/spi-thermocouple-breakout/max31856-cad-study.zip">CAD files (ZIP)</a></td><td>The KiCad project with libraries and licence texts</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-tc-mount-t">
  <title id="xb-tc-mount-t">Mounting drawing of the SPI thermocouple breakout, component side: outline 40 by 30 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="253.3" y="78.0" width="453.3" height="340.0" rx="8.5" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M253.3 56H706.7"/><path d="M253.3 50V62"/><path d="M706.7 50V62"/><path d="M732.7 78.0V418.0"/><path d="M726.7 78.0h12"/><path d="M726.7 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">40</text>
  <text x="744.7" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">30</text>
  <circle cx="253.3" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="241.3" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M195.3 104.0h30" fill="none"/><path d="M229.3 104.0l-8 -4v8z"/><path d="M195.3 104.0v30" fill="none"/><path d="M195.3 138.0l-4 -8h8z"/></g>
  <text x="233.3" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="191.3" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="366.7" cy="387.4" r="18.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M344.5 387.4h44.3M366.7 365.3v44.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="348.5" y="359.3" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  10.00, 27.30</text>
  <circle cx="593.3" cy="387.4" r="18.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M571.2 387.4h44.3M593.3 365.3v44.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="611.5" y="359.3" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  30.00, 27.30</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 40 × 30&nbsp;mm, corners rounded to a 0.75&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>10.00</td><td>27.30</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>30.00</td><td>27.30</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>

{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

A dash means no figure is given.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Conditions</th></tr></thead>
  <tbody>
    <tr><td>Converter supply</td><td>J1 contact 1</td><td>—</td><td>3.3 V</td><td>—</td><td>Supplied by the host</td></tr>
    <tr><td>Chip-select pull-up</td><td>R1</td><td>—</td><td>10 k&Omega;</td><td>—</td><td>Parts list</td></tr>
    <tr><td>Input capacitors</td><td>C2, C4, C5</td><td>—</td><td>100 nF across, 10 nF to ground each</td><td>—</td><td>Parts list</td></tr>
    <tr><td>Isolation</td><td>J3</td><td>—</td><td>None</td><td>—</td><td>Input bias is tied to T&minus; in the schematic</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Prime header GE (J36)

This board connects to the Prime&rsquo;s GE (J36) header, with chip select on PD15. Verify numbered continuity and the available rail current with the power removed.

See all boards on the [extension boards](/extension-boards) page.
