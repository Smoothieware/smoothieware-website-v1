---
layout: default
title: "Differential SPI signal extender"
description: "A host and a remote board that carry one SPI connection over four differential pairs, with a separate 12 V feed."
permalink: /extensions/differential-spi-signal-extender
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Signal interfaces</p>
    <h1 id="differential-spi-signal-extender">Differential SPI signal extender</h1>
    <p class="xb-lead">Put one low-speed SPI peripheral far from the controller. Clock, data and chip select each travel on their own differential pair, and a separate 12&nbsp;V lead powers the far end.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/differential-spi-signal-extender/v18/differential-spi-signal-extender-host-diagram.webp" alt="Top view of the host board: a ten-contact socket, two green terminals and a cable jack.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>4 pairs</b><span>SCK, CS, MOSI, MISO</span></div>
  <div class="xb-stat"><b>≤ 500 kHz</b><span>SPI clock</span></div>
  <div class="xb-stat"><b>≤ 25 m</b><span>Cat5e cable</span></div>
  <div class="xb-stat"><b>12 V</b><span>separate power lead</span></div>
  <div class="xb-stat"><b>0.5 A</b><span>12 V output to the remote</span></div>
  <div class="xb-stat"><b>50 × 50</b><span>millimetres, each board</span></div>
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
  500&nbsp;kHz maximum clock and 25&nbsp;m maximum Cat5e cable. Not Ethernet. The remote socket outputs power: never plug it into the controller. Grounds are common, with no isolation.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>Extend one SPI peripheral</td></tr>
    <tr><td>Link</td><td>Four <a href="/images/extensions/differential-spi-signal-extender/datasheets/thvd1451.pdf">THVD1451</a> channels per board with 100&nbsp;&Omega; terminations at the receiving ends</td></tr>
    <tr><td>Power</td><td>12&nbsp;V (10.8 to 13.2&nbsp;V) into the host, passed on to the remote on two wires</td></tr>
    <tr><td>Protection</td><td>Electronic fuses for reverse polarity, overvoltage and overcurrent, with fault lights</td></tr>
    <tr><td>Remote supplies</td><td>3.3&nbsp;V and 5&nbsp;V for the peripheral</td></tr>
    <tr><td>MISO</td><td>The host releases it when chip select is high</td></tr>
    <tr><td>Size</td><td>50 &times; 50&nbsp;mm each, four M3 holes</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The host board sits by the controller, the remote board by the peripheral.

### Host

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/differential-spi-signal-extender/v18/differential-spi-signal-extender-host-diagram.webp" alt="Top view of the host board with numbered markers.">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:50.0%;top:11.8%" aria-label="1: Controller socket (J1)">1<span class="xb-pop"><b>Controller socket (J1)</b> — SPI from the controller.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-2" style="left:12.2%;top:37.0%" aria-label="2: 12 V input (J3)">2<span class="xb-pop"><b>12 V input (J3)</b> — positive and ground.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-3" style="left:87.7%;top:43.7%" aria-label="3: 12 V output (J4)">3<span class="xb-pop"><b>12 V output (J4)</b> — to the remote board.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:43.1%;top:81.9%" aria-label="4: Link jack (J2)">4<span class="xb-pop"><b>Link jack (J2)</b> — data pairs.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:29.8%;top:53.0%" aria-label="5: Transceivers">5<span class="xb-pop"><b>Transceivers</b> — U1 to U4.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:67.7%;top:18.7%" aria-label="6: MISO buffer (U5)">6<span class="xb-pop"><b>MISO buffer (U5)</b> — releases the line when not selected.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-7" style="left:19.2%;top:4.3%" aria-label="7: Power light (D3)">7<span class="xb-pop"><b>Power light (D3)</b> — 12&nbsp;V present.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Controller socket (J1)</b> — SPI from the controller.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>12 V input (J3)</b> — positive and ground.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>12 V output (J4)</b> — to the remote board.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Link jack (J2)</b> — data pairs.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Transceivers</b> — U1 to U4.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>MISO buffer (U5)</b> — releases the line when not selected.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Power light (D3)</b> — 12&nbsp;V present.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

### Remote

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/differential-spi-signal-extender/v18/differential-spi-signal-extender-remote-diagram.webp" alt="Top view of the remote board with numbered markers.">
      <a class="xb-mk xb-pb" href="#tour-8" style="left:50.0%;top:11.8%" aria-label="8: Peripheral socket (J1)">8<span class="xb-pop"><b>Peripheral socket (J1)</b> — supplies and SPI.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-9" style="left:12.2%;top:37.0%" aria-label="9: 12 V input (J3)">9<span class="xb-pop"><b>12 V input (J3)</b> — from the host&rsquo;s J4.</span></a>
      <a class="xb-mk" href="#tour-10" style="left:43.1%;top:81.9%" aria-label="10: Link jack (J2)">10<span class="xb-pop"><b>Link jack (J2)</b> — data pairs.</span></a>
      <a class="xb-mk" href="#tour-11" style="left:29.8%;top:53.0%" aria-label="11: Transceivers">11<span class="xb-pop"><b>Transceivers</b> — U1 to U4.</span></a>
      <a class="xb-mk xb-pb" href="#tour-12" style="left:49.3%;top:28.8%" aria-label="12: Regulator">12<span class="xb-pop"><b>Regulator</b> — makes the local supplies from 12&nbsp;V.</span></a>
      <a class="xb-mk xb-pb" href="#tour-13" style="left:74.5%;top:4.3%" aria-label="13: Power light (D3)">13<span class="xb-pop"><b>Power light (D3)</b> — 3.3&nbsp;V present.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="8">
    <li id="tour-8"><span class="xb-n">8</span><div><b>Peripheral socket (J1)</b> — supplies and SPI.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>12 V input (J3)</b> — from the host&rsquo;s J4.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Link jack (J2)</b> — data pairs.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Transceivers</b> — U1 to U4.</div></li>
    <li id="tour-12"><span class="xb-n">12</span><div><b>Regulator</b> — makes the local supplies from 12&nbsp;V.</div></li>
    <li id="tour-13"><span class="xb-n">13</span><div><b>Power light (D3)</b> — 3.3&nbsp;V present.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

### Lights {#lights}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th>Lit means</th><th>Disable it</th></tr></thead>
  <tbody>
    <tr><td>Host D3</td><td>12&nbsp;V present</td><td>Cut JP1</td></tr>
    <tr><td>Remote D3</td><td>3.3&nbsp;V present</td><td>Cut JP1</td></tr>
    <tr><td>Protection lights (back of the board)</td><td>Fuse fault, overvoltage or reverse polarity</td><td>Cut the SJ link of that light</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Pinout {#pinout}

### J1 sockets

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Host (from controller)</th><th>Remote (to peripheral)</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span> input</td><td><span class="xb-pill xb-p-3v3">3.3 V</span> output</td></tr>
    <tr><td>2</td><td>Not connected</td><td><span class="xb-pill xb-p-5v">5 V</span> output</td></tr>
    <tr><td>3</td><td>Status, only if SJ1 is closed</td><td>Not connected</td></tr>
    <tr><td>4, 5</td><td>Not connected</td><td>Not connected</td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">CS</span></td><td><span class="xb-pill xb-p-sig">CS</span></td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-sig">MOSI</span></td><td><span class="xb-pill xb-p-sig">MOSI</span></td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">MISO</span></td><td><span class="xb-pill xb-p-sig">MISO</span></td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">SCK</span></td><td><span class="xb-pill xb-p-sig">SCK</span></td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Link jack

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1, 2</td><td>SCK pair</td></tr>
    <tr><td>3, 6</td><td>CS pair</td></tr>
    <tr><td>4, 5</td><td>MOSI pair</td></tr>
    <tr><td>7, 8</td><td>MISO pair</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The cable carries no power or ground: the 12&nbsp;V lead and its return are needed too.

### Solder links

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Board</th><th>Link</th><th>Effect</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>Host</td><td>SJ1</td><td>Status signal to J1 contact 3</td><td>Open</td></tr>
    <tr><td>Host</td><td>SJ2</td><td>Shield to ground</td><td>Open</td></tr>
    <tr><td>Host</td><td>SJ3</td><td>12&nbsp;V to J4</td><td>Closed</td></tr>
    <tr><td>Remote</td><td>SJ1</td><td>Shield to ground</td><td>Open</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Both boards</b><span>One pair, built from the design files in Downloads</span></div>
  <div class="xb-card"><b>A Cat5e cable</b><span>Straight-through, 25&nbsp;m at most.</span></div>
  <div class="xb-card"><b>A two-wire power lead</b><span>Host J4 to remote J3.</span></div>
  <div class="xb-card"><b>A 12 V supply</b><span>10.8 to 13.2&nbsp;V, into host J3.</span></div>
  <div class="xb-card"><b>An SPI peripheral</b><span>Works at 500&nbsp;kHz or below.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

Wire everything with the power off.

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Wire the controller</h3>
    <p>3.3&nbsp;V, ground, CS, MOSI, MISO and SCK to host J1 contacts 1, 10, 6, 7, 8 and 9.</p>
  </li>
  <li class="xb-step">
    <h3>Join the boards</h3>
    <p>Cable between the J2 jacks; J4 to J3 with matching polarity.</p>
  </li>
  <li class="xb-step">
    <h3>Power up without the peripheral</h3>
    <p>Apply 12&nbsp;V to host J3 and check the remote supplies.</p>
    <p class="xb-expect">Both power lights are on and no fault light is lit.</p>
  </li>
  <li class="xb-step">
    <h3>Add the peripheral</h3>
    <p>With the power off, wire it to remote J1, then communicate at 500&nbsp;kHz or less.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Reach a distant SPI peripheral</td><td>The attached device&rsquo;s own module</td><td><a href="#config-main">Setup</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Setup {#config-main}

The pair needs no driver. Configure the peripheral&rsquo;s own driver on the SPI channel you wired, and make sure it clocks at 500&nbsp;kHz or less. Smoothieware&rsquo;s [MAX31855 thermocouple driver](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/temperaturecontrol/max31855.cpp#L25-L68) clocks at a fixed 1&nbsp;MHz, which is above this link&rsquo;s limit: do not use it through these boards.

## How it works {#how-it-works}

Each SPI line is converted to a differential pair and back. The clock is delayed on the way out and the reply is delayed on the way back, which is why the clock rate is limited. The host buffer drives MISO only while chip select is low; the remote board holds its return pair high while chip select is high.

{% include _includes/extender-board-comparison.html %}

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Remote light off</td><td>12&nbsp;V at remote J3 and the fault lights.</td></tr>
    <tr><td>No data</td><td>Cable straight through, contacts 6 to 9 at both sockets.</td></tr>
    <tr><td>Corrupt data</td><td>Lower the clock; shorten the cable.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/differential-spi-signal-extender/v18/differential-spi-signal-extender-host-schematic.pdf">Schematic (PDF, host)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/differential-spi-signal-extender/v18/differential-spi-signal-extender-host-bom.csv">Parts list (CSV, host)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/differential-spi-signal-extender/v18/differential-spi-signal-extender-host-diagram.webp">Board drawing (PNG, host)</a></td><td>The top view used on this page</td></tr>
    <tr><td><a href="/images/extensions/differential-spi-signal-extender/v18/differential-spi-signal-extender-remote-schematic.pdf">Schematic (PDF, remote)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/differential-spi-signal-extender/v18/differential-spi-signal-extender-remote-bom.csv">Parts list (CSV, remote)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/differential-spi-signal-extender/v18/differential-spi-signal-extender-remote-diagram.webp">Board drawing (PNG, remote)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

### Host dimensions

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-sph-mount-t">
  <title id="xb-sph-mount-t">Mounting drawing of the sph, component side: outline 50 by 50 millimetres with 6 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="310.0" y="78.0" width="340.0" height="340.0" rx="13.6" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M310.0 56H650.0"/><path d="M310.0 50V62"/><path d="M650.0 50V62"/><path d="M676.0 78.0V418.0"/><path d="M670.0 78.0h12"/><path d="M670.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">50</text>
  <text x="688.0" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">50</text>
  <circle cx="310.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="298.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M252.0 104.0h30" fill="none"/><path d="M286.0 104.0l-8 -4v8z"/><path d="M252.0 104.0v30" fill="none"/><path d="M252.0 138.0l-4 -8h8z"/></g>
  <text x="290.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="248.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="344.0" cy="146.0" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M329.1 146.0h29.8M344.0 131.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="333.1" y="176.9" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 10.00</text>
  <circle cx="616.0" cy="146.0" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M601.1 146.0h29.8M616.0 131.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="626.9" y="176.9" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  45.00, 10.00</text>
  <circle cx="344.0" cy="282.0" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M329.1 282.0h29.8M344.0 267.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="333.1" y="261.1" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 30.00</text>
  <circle cx="616.0" cy="282.0" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M601.1 282.0h29.8M616.0 267.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="626.9" y="261.1" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  45.00, 30.00</text>
  <circle cx="392.1" cy="393.5" r="8.5" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M379.6 393.5h25.0M392.1 381.0v25.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="383.6" y="375.0" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">5</tspan>  12.07, 46.40</text>
  <circle cx="567.9" cy="393.5" r="8.5" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M555.4 393.5h25.0M567.9 381.0v25.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="576.4" y="375.0" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">6</tspan>  37.92, 46.40</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 50 × 50&nbsp;mm, corners rounded to a 2&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>10.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>45.00</td><td>10.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>5.00</td><td>30.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>45.00</td><td>30.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>5</td><td>12.07</td><td>46.40</td><td>2.5&nbsp;mm, not plated</td><td>Mounting</td></tr>
    <tr><td>6</td><td>37.92</td><td>46.40</td><td>2.5&nbsp;mm, not plated</td><td>Mounting</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Remote dimensions

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-spr-mount-t">
  <title id="xb-spr-mount-t">Mounting drawing of the spr, component side: outline 50 by 50 millimetres with 6 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="310.0" y="78.0" width="340.0" height="340.0" rx="13.6" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M310.0 56H650.0"/><path d="M310.0 50V62"/><path d="M650.0 50V62"/><path d="M676.0 78.0V418.0"/><path d="M670.0 78.0h12"/><path d="M670.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">50</text>
  <text x="688.0" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">50</text>
  <circle cx="310.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="298.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M252.0 104.0h30" fill="none"/><path d="M286.0 104.0l-8 -4v8z"/><path d="M252.0 104.0v30" fill="none"/><path d="M252.0 138.0l-4 -8h8z"/></g>
  <text x="290.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="248.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="344.0" cy="146.0" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M329.1 146.0h29.8M344.0 131.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="333.1" y="176.9" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 10.00</text>
  <circle cx="616.0" cy="146.0" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M601.1 146.0h29.8M616.0 131.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="626.9" y="176.9" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  45.00, 10.00</text>
  <circle cx="626.9" cy="214.0" r="8.5" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M614.4 214.0h25.0M626.9 201.5v25.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="635.4" y="242.5" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  46.60, 20.00</text>
  <circle cx="344.0" cy="282.0" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M329.1 282.0h29.8M344.0 267.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="333.1" y="261.1" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  5.00, 30.00</text>
  <circle cx="616.0" cy="282.0" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M601.1 282.0h29.8M616.0 267.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="626.9" y="261.1" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">5</tspan>  45.00, 30.00</text>
  <circle cx="567.9" cy="393.5" r="8.5" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M555.4 393.5h25.0M567.9 381.0v25.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="576.4" y="375.0" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">6</tspan>  37.92, 46.40</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 50 × 50&nbsp;mm, corners rounded to a 2&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>10.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>45.00</td><td>10.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>46.60</td><td>20.00</td><td>2.5&nbsp;mm, not plated</td><td>Mounting</td></tr>
    <tr><td>4</td><td>5.00</td><td>30.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>5</td><td>45.00</td><td>30.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>6</td><td>37.92</td><td>46.40</td><td>2.5&nbsp;mm, not plated</td><td>Mounting</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Board values come from the silk screen.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Supply</td><td>Host J3</td><td>10.8 V</td><td>12 V</td><td>13.2 V</td><td>Board silk</td></tr>
    <tr><td>12 V output</td><td>Host J4</td><td>—</td><td>—</td><td>0.5 A</td><td>Board silk</td></tr>
    <tr><td>SPI clock</td><td>Link</td><td>—</td><td>—</td><td>500 kHz</td><td>Board silk</td></tr>
    <tr><td>Cable</td><td>Cat5e</td><td>—</td><td>—</td><td>25 m</td><td>Board silk</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: datasheets {#datasheets}

The first page of each important chip&rsquo;s datasheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/differential-spi-signal-extender/datasheets/thvd1451.pdf"><img src="/images/extensions/differential-spi-signal-extender/datasheets/thvd1451-page1.png" alt="First page of the THVD1451 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/differential-spi-signal-extender/datasheets/thvd1451.pdf">THVD1451 3.3 V to 5 V RS-485 transceiver, full duplex</a> — Texas Instruments, 54 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/differential-spi-signal-extender/datasheets/sn74lvc1g125.pdf"><img src="/images/extensions/differential-spi-signal-extender/datasheets/sn74lvc1g125-page1.png" alt="First page of the SN74LVC1G125 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/differential-spi-signal-extender/datasheets/sn74lvc1g125.pdf">SN74LVC1G125 single bus buffer with 3-state output</a> — Texas Instruments, 52 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/differential-spi-signal-extender/datasheets/sn74lvc1g32.pdf"><img src="/images/extensions/differential-spi-signal-extender/datasheets/sn74lvc1g32-page1.png" alt="First page of the SN74LVC1G32 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/differential-spi-signal-extender/datasheets/sn74lvc1g32.pdf">SN74LVC1G32 single OR gate</a> — Texas Instruments, 51 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/differential-spi-signal-extender/datasheets/tps2660.pdf"><img src="/images/extensions/differential-spi-signal-extender/datasheets/tps2660-page1.png" alt="First page of the TPS26600 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/differential-spi-signal-extender/datasheets/tps2660.pdf">TPS2660x 60 V eFuse with reverse polarity protection</a> — Texas Instruments, 55 pages.</figcaption>
</figure>
{:/nomarkdown}


See all boards on the [extension boards](/extension-boards) page.
