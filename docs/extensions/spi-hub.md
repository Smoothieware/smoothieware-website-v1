---
layout: default
title: "SPI Hub"
description: "One SPI bus shared by four sockets, each with its own chip select and bus switch."
permalink: /extensions/spi-hub
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Signal interfaces</p>
    <h1 id="spi-hub">SPI Hub</h1>
    <p class="xb-lead">Share one SPI bus between four peripherals. Each socket has its own chip select, and a bus switch connects that socket&rsquo;s clock and data lines only while it is selected.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/spi-hub/v14/spi-hub-diagram.png" alt="Top view of the SPI hub: one input socket at the top, four output sockets along the bottom and four lights in a row.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>4 sockets</b><span>one chip select each</span></div>
  <div class="xb-stat"><b>3.3 V</b><span>SPI signals</span></div>
  <div class="xb-stat"><b>≤ 10 MHz</b><span>SPI modes 0 to 3</span></div>
  <div class="xb-stat"><b>≤ 150 mm</b><span>cable length</span></div>
  <div class="xb-stat"><b>4 lights</b><span>chip select activity</span></div>
  <div class="xb-stat"><b>88 × 52</b><span>millimetres, four M3 holes</span></div>
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
  <a href="#datasheets">Datasheets</a>
</nav>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  3.3&nbsp;V SPI with active-low chip selects only. Select one socket at a time, do not hot-plug, and never use it for 5&nbsp;V devices.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>Connect four SPI peripherals to one host bus</td></tr>
    <tr><td>Bus switches</td><td>One <a href="/images/extensions/spi-hub/datasheets/sn74cb3q3125.pdf">SN74CB3Q3125</a> per socket (U1 to U4), controlled by that socket&rsquo;s chip select</td></tr>
    <tr><td>Input</td><td>J1, ten contacts: rails, CS1 to CS4, MOSI, MISO, SCK, ground</td></tr>
    <tr><td>Outputs</td><td>J2 to J5, ten contacts each; the socket&rsquo;s chip select is on contact 6</td></tr>
    <tr><td>Clock idle level</td><td>One link per socket (JP1 to JP4): low for modes 0 and 1, high for modes 2 and 3</td></tr>
    <tr><td>Power</td><td>Host rails passed to all sockets; the host&rsquo;s limit applies to all of them together</td></tr>
    <tr><td>Protection</td><td><a href="/images/extensions/spi-hub/datasheets/tpd4e1u06.pdf">TPD4E1U06</a> arrays at all five sockets</td></tr>
    <tr><td>Size</td><td>88 &times; 52&nbsp;mm, four M3 holes, two cable-tie points</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/spi-hub/v14/spi-hub-diagram.png" alt="Top view of the SPI hub with numbered markers explained in the list below.">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:50.0%;top:10.3%" aria-label="1: Host socket (J1)">1<span class="xb-pop"><b>Host socket (J1)</b> — the shared bus and the four chip selects.</span></a>
      <a class="xb-mk xb-pl" href="#tour-2" style="left:19.1%;top:90.3%" aria-label="2: Output 1 (J2)">2<span class="xb-pop"><b>Output 1 (J2)</b> — selected by CS1.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:39.7%;top:90.3%" aria-label="3: Output 2 (J3)">3<span class="xb-pop"><b>Output 2 (J3)</b> — selected by CS2.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:60.2%;top:90.3%" aria-label="4: Output 3 (J4)">4<span class="xb-pop"><b>Output 3 (J4)</b> — selected by CS3.</span></a>
      <a class="xb-mk xb-pr" href="#tour-5" style="left:80.8%;top:90.3%" aria-label="5: Output 4 (J5)">5<span class="xb-pop"><b>Output 4 (J5)</b> — selected by CS4.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-6" style="left:19.1%;top:43.5%" aria-label="6: Bus switches">6<span class="xb-pop"><b>Bus switches</b> — U1 to U4 connect SCK, MOSI and MISO to outputs 1 to 4.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:24.5%;top:62.2%" aria-label="7: Chip-select lights">7<span class="xb-pop"><b>Chip-select lights</b> — D1 to D4, one per output. Links JP5 to JP8 disable them.</span></a>
      <a class="xb-mk xb-pl" href="#tour-8" style="left:11.1%;top:70.7%" aria-label="8: Clock idle links">8<span class="xb-pop"><b>Clock idle links</b> — JP1 to JP4, one per output.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host socket (J1)</b> — the shared bus and the four chip selects.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Output 1 (J2)</b> — selected by CS1.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Output 2 (J3)</b> — selected by CS2.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Output 3 (J4)</b> — selected by CS3.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Output 4 (J5)</b> — selected by CS4.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Bus switches</b> — U1 to U4 connect SCK, MOSI and MISO to outputs 1 to 4.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Chip-select lights</b> — D1 to D4, one per output. Links JP5 to JP8 disable them.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Clock idle links</b> — JP1 to JP4, one per output.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

### Lights {#lights}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th>Lit means</th><th>Disable it</th></tr></thead>
  <tbody>
    <tr><td>D1, green</td><td>Activity of chip select CS1</td><td>Cut JP6</td></tr>
    <tr><td>D2, green</td><td>Activity of chip select CS2</td><td>Cut JP5</td></tr>
    <tr><td>D3, green</td><td>Activity of chip select CS3</td><td>Cut JP7</td></tr>
    <tr><td>D4, green</td><td>Activity of chip select CS4</td><td>Cut JP8</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Pinout {#pinout}

### J1: host

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td></tr>
    <tr><td>3 to 6</td><td><span class="xb-pill xb-p-sig">CS1 to CS4</span></td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-sig">MOSI</span></td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">MISO</span></td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">SCK</span></td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J2 to J5: outputs

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td></tr>
    <tr><td>3 to 5</td><td>Not connected</td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">CS</span> of this output</td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-sig">MOSI</span></td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">MISO</span></td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">SCK</span></td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

A ten-core ribbon from J1 to a single host socket is not enough by itself: contacts 3, 4, 5 and 6 each need a host pin that acts as a chip select.

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>And one cable per peripheral.</span></div>
  <div class="xb-card"><b>Four chip selects</b><span>One host output for every socket you use; keep the others high.</span></div>
  <div class="xb-card"><b>SPI peripherals</b><span>3.3&nbsp;V, active-low chip select, with firmware support.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

Connect one peripheral first, then add the others.

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Set the clock idle level</h3>
    <p>With the power off, set the link of each socket you use: L for SPI mode 0 or 1, H for mode 2 or 3.</p>
  </li>
  <li class="xb-step">
    <h3>Wire the host</h3>
    <p>Connect 3.3&nbsp;V, ground, SCK, MOSI, MISO and one chip select per socket to J1. Tie unused chip selects high.</p>
  </li>
  <li class="xb-step">
    <h3>Connect one peripheral</h3>
    <p>Plug it into OUT1 and check which rails and contacts it needs.</p>
  </li>
  <li class="xb-step">
    <h3>Talk to it</h3>
    <p>Select only CS1 and use the peripheral&rsquo;s driver.</p>
    <p class="xb-expect">Light D1 shows activity on CS1; the peripheral answers.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Use several SPI peripherals</td><td>The attached device&rsquo;s own module</td><td><a href="#config-main">Setup</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Setup {#config-main}

The hub needs no driver. Configure each peripheral&rsquo;s own module with the shared SPI channel and a separate chip-select pin. The hub adds no way to tell apart devices that share one chip select.

## How it works {#how-it-works}

When a chip select is high, the <a href="/images/extensions/spi-hub/datasheets/sn74cb3q3125.pdf">SN74CB3Q3125</a> of that socket is off, so the peripheral&rsquo;s clock and data pins are disconnected from the bus. When it goes low the switch closes. There is no decoder: if two chip selects are low together, two peripherals drive MISO at once.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>No answer from one peripheral</td><td>Its chip select reaches the right J1 contact, and its clock idle link matches its SPI mode.</td></tr>
    <tr><td>Corrupt data</td><td>Only one chip select low at a time; lower the clock; shorten cables.</td></tr>
    <tr><td>Nothing works</td><td>3.3&nbsp;V and ground at J1, and the combined current of all peripherals.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/spi-hub/v14/spi-hub-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/spi-hub/v14/spi-hub-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/spi-hub/v14/spi-hub-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-sh-mount-t">
  <title id="xb-sh-mount-t">Mounting drawing of the sh, component side: outline 88 by 52 millimetres with 4 mounting holes and 2 cable-tie holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="192.3" y="78.0" width="575.4" height="340.0" rx="13.1" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M192.3 56H767.7"/><path d="M192.3 50V62"/><path d="M767.7 50V62"/><path d="M793.7 78.0V418.0"/><path d="M787.7 78.0h12"/><path d="M787.7 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">88</text>
  <text x="805.7" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">52</text>
  <circle cx="192.3" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="180.3" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M134.3 104.0h30" fill="none"/><path d="M168.3 104.0l-8 -4v8z"/><path d="M134.3 104.0v30" fill="none"/><path d="M134.3 138.0l-4 -8h8z"/></g>
  <text x="172.3" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="130.3" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="218.5" cy="104.2" r="10.5" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M204.0 104.2h28.9M218.5 89.7v28.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="208.0" y="134.6" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  4.00, 4.00</text>
  <circle cx="741.5" cy="104.2" r="10.5" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M727.1 104.2h28.9M741.5 89.7v28.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="752.0" y="134.6" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  84.00, 4.00</text>
  <circle cx="218.5" cy="365.7" r="10.5" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M204.0 365.7h28.9M218.5 351.2v28.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="208.0" y="345.2" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  4.00, 44.00</text>
  <circle cx="741.5" cy="365.7" r="10.5" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M727.1 365.7h28.9M741.5 351.2v28.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="752.0" y="345.2" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  84.00, 44.00</text>
  <circle cx="264.2" cy="97.6" r="8.2" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <circle cx="296.9" cy="97.6" r="8.2" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <text x="313.1" y="101.6" text-anchor="start" font-size="12" fill="#a9b4c2">cable tie</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 88 × 52&nbsp;mm, corners rounded to a 2&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>4.00</td><td>4.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>84.00</td><td>4.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>4.00</td><td>44.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>84.00</td><td>44.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>–</td><td>11.00</td><td>3.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
    <tr><td>–</td><td>16.00</td><td>3.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Board values come from the silk screen.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Signal level</td><td>All SPI lines</td><td>—</td><td>3.3 V</td><td>—</td><td>Board silk</td></tr>
    <tr><td>Clock rate</td><td>SCK</td><td>—</td><td>—</td><td>10 MHz</td><td>Board silk</td></tr>
    <tr><td>Cable length</td><td>Each output</td><td>—</td><td>—</td><td>150 mm</td><td>Board silk</td></tr>
    <tr><td>Supply current</td><td>All sockets together</td><td>—</td><td>—</td><td>Host limit</td><td>Board silk: power shared from the host</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: datasheets {#datasheets}

The first page of each important chip&rsquo;s datasheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/spi-hub/datasheets/sn74cb3q3125.pdf"><img src="/images/extensions/spi-hub/datasheets/sn74cb3q3125-page1.png" alt="First page of the SN74CB3Q3125 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/spi-hub/datasheets/sn74cb3q3125.pdf">SN74CB3Q3125 quadruple FET bus switch</a> — Texas Instruments, 27 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/spi-hub/datasheets/tpd4e1u06.pdf"><img src="/images/extensions/spi-hub/datasheets/tpd4e1u06-page1.png" alt="First page of the TPD4E1U06 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/spi-hub/datasheets/tpd4e1u06.pdf">TPD4E1U06 quad-channel ESD protection device</a> — Texas Instruments, 27 pages.</figcaption>
</figure>
{:/nomarkdown}


See all boards on the [extension boards](/extension-boards) page.
