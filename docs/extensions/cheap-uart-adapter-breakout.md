---
layout: default
title: "Cheap UART adapter breakout"
description: "A carrier that joins a low-cost six-pin USB serial module to a controller UART through two level translators."
permalink: /extensions/cheap-uart-adapter-breakout
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Signal interfaces</p>
    <h1 id="cheap-uart-adapter-breakout">Cheap UART adapter breakout</h1>
    <p class="xb-lead">Turn an inexpensive six-pin USB serial module into a controller console. Two translators match the module&rsquo;s logic voltage to the controller, one in each direction.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/cheap-uart-adapter-breakout/v14/cheap-uart-adapter-breakout-diagram.webp" alt="Top view of the adapter: a ten-contact host socket at the left and a six-pin module connector at the right.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>2 paths</b><span>TX and RX, translated</span></div>
  <div class="xb-stat"><b>3.3 V</b><span>controller side</span></div>
  <div class="xb-stat"><b>Module VCC</b><span>sets the other side</span></div>
  <div class="xb-stat"><b>6 pins</b><span>GND CTS VCC TXO RXI DTR</span></div>
  <div class="xb-stat"><b>No 5 V</b><span>taken from the controller</span></div>
  <div class="xb-stat"><b>32 × 27.5</b><span>millimetres</span></div>
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
  Plug the module in with its power off, component side as the silk shows: a reversed module is wrong. Check its pin order against the table; similar-looking modules differ.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>USB serial console through a plug-in module</td></tr>
    <tr><td>Translators</td><td>Two <a href="/images/extensions/cheap-uart-adapter-breakout/datasheets/sn74lvc1t45.pdf">SN74LVC1T45</a> with fixed directions</td></tr>
    <tr><td>Host</td><td>J1: 3.3&nbsp;V, transmit (4), receive (5), ground</td></tr>
    <tr><td>Module</td><td>J2, six pins: ground, CTS, VCC, TXO, RXI, DTR</td></tr>
    <tr><td>Module-side supply</td><td>Taken from the module&rsquo;s VCC pin; the board does not power the module</td></tr>
    <tr><td>Not connected</td><td>CTS, DTR and host 5&nbsp;V</td></tr>
    <tr><td>Protection</td><td><a href="/images/extensions/cheap-uart-adapter-breakout/datasheets/tpd4e1u06.pdf">TPD4E1U06</a> arrays on both sides</td></tr>
    <tr><td>Size</td><td>32 &times; 27.5&nbsp;mm, two M3 holes</td></tr>
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
      <img src="/images/extensions/cheap-uart-adapter-breakout/v14/cheap-uart-adapter-breakout-diagram.webp" alt="Top view of the adapter with numbered markers explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:15.4%;top:40.4%" aria-label="1: Host socket (J1)">1<span class="xb-pop"><b>Host socket (J1)</b> — connects to a controller UART socket.</span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:55.7%;top:18.9%" aria-label="2: Module connector (J2)">2<span class="xb-pop"><b>Module connector (J2)</b> — the six module pins.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:35.1%;top:60.1%" aria-label="3: Transmit translator (U2)">3<span class="xb-pop"><b>Transmit translator (U2)</b> — controller to module.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:35.1%;top:40.4%" aria-label="4: Receive translator (U1)">4<span class="xb-pop"><b>Receive translator (U1)</b> — module to controller.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:45.1%;top:59.4%" aria-label="5: Series resistors">5<span class="xb-pop"><b>Series resistors</b> — R1 and R2, 100&nbsp;&Omega;.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:31.2%;top:70.6%" aria-label="6: Resistors">6<span class="xb-pop"><b>Resistors</b> — R3 and R4, 10&nbsp;k&Omega;.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:31.2%;top:31.3%" aria-label="7: Supply capacitors">7<span class="xb-pop"><b>Supply capacitors</b> — C1 to C4, 100&nbsp;nF.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-8" style="left:11.5%;top:6.5%" aria-label="8: Mounting holes">8<span class="xb-pop"><b>Mounting holes</b> — two M3 holes.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host socket (J1)</b> — connects to a controller UART socket.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Module connector (J2)</b> — the six module pins.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Transmit translator (U2)</b> — controller to module.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Receive translator (U1)</b> — module to controller.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Series resistors</b> — R1 and R2, 100&nbsp;&Omega;.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Resistors</b> — R3 and R4, 10&nbsp;k&Omega;.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Supply capacitors</b> — C1 to C4, 100&nbsp;nF.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Mounting holes</b> — two M3 holes.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J2: module

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>2</td><td>CTS, not connected</td></tr>
    <tr><td>3</td><td>VCC from the module</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">TXO</span> module transmit</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">RXI</span> module receive</td></tr>
    <tr><td>6</td><td>DTR, not connected</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J1: host

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">TX</span> from the controller</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">RX</span> to the controller</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>2, 3, 6 to 9</td><td>Not connected</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>Built from the design files in Downloads</span></div>
  <div class="xb-card"><b>A USB serial module</b><span>Six pins in the order above, 3.3&nbsp;V logic. The example uses the SparkFun FTDI Basic 3.3 V (DEV-09873).</span></div>
  <div class="xb-card"><b>A ribbon and a USB cable</b><span>Ten-core ribbon to the controller.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

This example uses the Smoothieboard V2 Prime and the SparkFun module.

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Check the module voltage</h3>
    <p>On the DEV-09873, solder jumper SJ2 must bridge 2&ndash;3 (3.3&nbsp;V from the module), not 5&nbsp;V.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the ribbon with the power off</h3>
    <p>Prime GB/J33 to J1, contact for contact. Verify pin 1 at both ends.</p>
  </li>
  <li class="xb-step">
    <h3>Plug in the module</h3>
    <p>Module ground, VCC, TXO and RXI to J2 contacts 1, 3, 4 and 5.</p>
  </li>
  <li class="xb-step">
    <h3>Configure, connect USB and test</h3>
    <p>Add the configuration below, restart, then send <code>version</code> followed by Enter.</p>
    <p class="xb-expect">The controller replies with its build information.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>A command console on a serial port</td><td>UART console</td><td><a href="#config-main">Setup</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Setup {#config-main}

```ini
[uart console]
enable = true
console = true
channel = 1
baudrate = 115200
bits = 8
stop_bits = 1
parity = none
```

With <code>console = true</code> the UART starts after the controller has finished booting ([console source](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/Consoles.cpp#L733-L761)). On the Prime, [channel 1 transmits on PB9 and receives on PH14](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/Hal/src/Uart.cpp#L101-L135), header GB contacts 4 and 5. Reserve both pins. Use 115200 baud, 8N1 and no hardware flow control on the computer.

## How it works {#how-it-works}

Each <a href="/images/extensions/cheap-uart-adapter-breakout/datasheets/sn74lvc1t45.pdf">SN74LVC1T45</a> has one supply from the controller&rsquo;s 3.3&nbsp;V and the other from the module&rsquo;s VCC pin, so the two logic voltages stay separate. Grounds are common: the board gives no isolation.

{% include _includes/serial-adapter-board-comparison.html %}

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>No reply</td><td>Module VCC present, pin order, channel number and line ending.</td></tr>
    <tr><td>Garbled text</td><td>Match 115200 baud, 8N1 on both sides.</td></tr>
    <tr><td>Module not seen by the computer</td><td>USB cable and driver: the carrier takes no part in USB.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/cheap-uart-adapter-breakout/v14/cheap-uart-adapter-breakout-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/cheap-uart-adapter-breakout/v14/cheap-uart-adapter-breakout-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/cheap-uart-adapter-breakout/v14/cheap-uart-adapter-breakout-diagram.webp">Board drawing (WebP)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-cu-mount-t">
  <title id="xb-cu-mount-t">Mounting drawing of the cu, component side: outline 32 by 27.5 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="282.2" y="78.0" width="395.6" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M282.2 56H677.8"/><path d="M282.2 50V62"/><path d="M677.8 50V62"/><path d="M703.8 78.0V418.0"/><path d="M697.8 78.0h12"/><path d="M697.8 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">32</text>
  <text x="715.8" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">27.5</text>
  <circle cx="282.2" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="270.2" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M224.2 104.0h30" fill="none"/><path d="M258.2 104.0l-8 -4v8z"/><path d="M224.2 104.0v30" fill="none"/><path d="M224.2 138.0l-4 -8h8z"/></g>
  <text x="262.2" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="220.2" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="319.3" cy="102.7" r="19.8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M295.5 102.7h47.6M319.3 78.9v47.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="299.5" y="142.5" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  3.00, 2.00</text>
  <circle cx="319.3" cy="350.0" r="19.8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M295.5 350.0h47.6M319.3 326.2v47.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="299.5" y="320.2" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  3.00, 22.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 32 × 27.5&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>3.00</td><td>2.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>3.00</td><td>22.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Chip values come from the datasheet.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Controller-side supply</td><td>J1 contact 1</td><td>—</td><td>3.3 V</td><td>—</td><td>Design</td></tr>
    <tr><td>Module-side supply range</td><td><a href="/images/extensions/cheap-uart-adapter-breakout/datasheets/sn74lvc1t45.pdf">SN74LVC1T45</a></td><td>1.65 V</td><td>—</td><td>5.5 V</td><td>Datasheet</td></tr>
    <tr><td>Series resistance</td><td>Signal paths</td><td>—</td><td>100 Ω</td><td>—</td><td>Parts list</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: datasheets {#datasheets}

The first page of each important chip&rsquo;s datasheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/cheap-uart-adapter-breakout/datasheets/sn74lvc1t45.pdf"><img src="/images/extensions/cheap-uart-adapter-breakout/datasheets/sn74lvc1t45-page1.png" alt="First page of the SN74LVC1T45 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/cheap-uart-adapter-breakout/datasheets/sn74lvc1t45.pdf">SN74LVC1T45 single-bit dual-supply bus transceiver</a> — Texas Instruments, 42 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/cheap-uart-adapter-breakout/datasheets/tpd4e1u06.pdf"><img src="/images/extensions/cheap-uart-adapter-breakout/datasheets/tpd4e1u06-page1.png" alt="First page of the TPD4E1U06 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/cheap-uart-adapter-breakout/datasheets/tpd4e1u06.pdf">TPD4E1U06 quad-channel ESD protection device</a> — Texas Instruments, 27 pages.</figcaption>
</figure>
{:/nomarkdown}


See all boards on the [extension boards](/extension-boards) page.
