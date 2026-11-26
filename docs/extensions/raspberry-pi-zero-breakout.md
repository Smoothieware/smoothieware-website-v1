---
layout: default
title: "Raspberry Pi Zero breakout"
description: "A Raspberry Pi Zero carrier with a buffered serial link to a controller, a power input and a supply selector."
permalink: /extensions/raspberry-pi-zero-breakout
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Host adapters</p>
    <h1 id="raspberry-pi-zero-breakout">Raspberry Pi Zero breakout</h1>
    <p class="xb-lead">Mount a Raspberry Pi Zero beside the controller as a serial command host: buffered transmit and receive, its own 5&nbsp;V regulator and a power multiplexer, with lights for power and traffic.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/raspberry-pi-zero-breakout/v17/raspberry-pi-zero-breakout-diagram.png" alt="Top view of the Raspberry Pi Zero breakout.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>6.5–24 V</b><span>external input</span></div>
  <div class="xb-stat"><b>3.3 V</b><span>serial</span></div>
  <div class="xb-stat"><b>2×20</b><span>Pi header</span></div>
  <div class="xb-stat"><b>4 lights</b><span>power, source, traffic</span></div>
  <div class="xb-stat"><b>Serial</b><span>command link</span></div>
  <div class="xb-stat"><b>76 × 90</b><span>millimetres</span></div>
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
  Check your Pi model, header orientation, current needs and supply order before applying power. Never apply the external input to the Pi 5&nbsp;V pins, and use only one source at a time.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>Linux serial host for a controller</td></tr>
    <tr><td>Controller side</td><td>J1: 3.3&nbsp;V 1, 5&nbsp;V 2, transmit 4, receive 5, ground 10</td></tr>
    <tr><td>Pi side</td><td>J2: UART on contacts 8 and 10</td></tr>
    <tr><td>Buffers</td><td><a href="/images/extensions/raspberry-pi-zero-breakout/datasheets/sn74lvc1g17.pdf">SN74LVC1G17</a> in each direction</td></tr>
    <tr><td>Power</td><td><a href="/images/extensions/raspberry-pi-zero-breakout/datasheets/lmr51430.pdf">LMR51430</a> regulator from J3, <a href="/images/extensions/raspberry-pi-zero-breakout/datasheets/tps2113a.pdf">TPS2113A</a> source selection, input protection</td></tr>
    <tr><td>Size</td><td>76 &times; 90&nbsp;mm</td></tr>
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
      <img src="/images/extensions/raspberry-pi-zero-breakout/v17/raspberry-pi-zero-breakout-diagram.png" alt="Top view of the Raspberry Pi Zero breakout with numbered markers explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:6.4%;top:13.0%" aria-label="1: Controller socket (J1)">1<span class="xb-pop"><b>Controller socket (J1)</b> — serial and controller supplies.</span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:26.1%;top:6.2%" aria-label="2: Pi header (J2)">2<span class="xb-pop"><b>Pi header (J2)</b> — the Raspberry Pi Zero.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-3" style="left:8.1%;top:23.3%" aria-label="3: External input (J3)">3<span class="xb-pop"><b>External input (J3)</b> — 6.5 to 24&nbsp;V.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:51.1%;top:23.8%" aria-label="4: Regulator (U1)">4<span class="xb-pop"><b>Regulator (U1)</b> — LMR51430.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:30.1%;top:14.4%" aria-label="5: Source selector (U2)">5<span class="xb-pop"><b>Source selector (U2)</b> — TPS2113A.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-6" style="left:21.4%;top:12.9%" aria-label="6: Buffer to the Pi (U3)">6<span class="xb-pop"><b>Buffer to the Pi (U3)</b> — controller transmit to Pi receive.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-7" style="left:17.3%;top:19.5%" aria-label="7: Buffer to the controller (U4)">7<span class="xb-pop"><b>Buffer to the controller (U4)</b> — Pi transmit to controller receive.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:71.8%;top:31.5%" aria-label="8: Power light (D4)">8<span class="xb-pop"><b>Power light (D4)</b> — 5&nbsp;V present.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-9" style="left:76.9%;top:31.5%" aria-label="9: External source light (D5)">9<span class="xb-pop"><b>External source light (D5)</b> — from the selector.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-10" style="left:82.0%;top:31.4%" aria-label="10: Pi receive light (D6)">10<span class="xb-pop"><b>Pi receive light (D6)</b> — amber.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-11" style="left:87.1%;top:31.4%" aria-label="11: Pi transmit light (D7)">11<span class="xb-pop"><b>Pi transmit light (D7)</b> — amber.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Controller socket (J1)</b> — serial and controller supplies.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Pi header (J2)</b> — the Raspberry Pi Zero.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>External input (J3)</b> — 6.5 to 24&nbsp;V.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Regulator (U1)</b> — <a href="/images/extensions/raspberry-pi-zero-breakout/datasheets/lmr51430.pdf">LMR51430</a>.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Source selector (U2)</b> — <a href="/images/extensions/raspberry-pi-zero-breakout/datasheets/tps2113a.pdf">TPS2113A</a>.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Buffer to the Pi (U3)</b> — controller transmit to Pi receive.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Buffer to the controller (U4)</b> — Pi transmit to controller receive.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Power light (D4)</b> — 5&nbsp;V present.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>External source light (D5)</b> — from the selector.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Pi receive light (D6)</b> — amber.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Pi transmit light (D7)</b> — amber.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

### Lights {#lights}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th>Lit means</th><th>Disable it</th></tr></thead>
  <tbody>
    <tr><td>D4, green</td><td>5&nbsp;V present</td><td>Cut JP4</td></tr>
    <tr><td>D5, green</td><td>External source status</td><td>Cut JP3</td></tr>
    <tr><td>D6, amber</td><td>Data to the Pi</td><td>Cut JP1</td></tr>
    <tr><td>D7, amber</td><td>Data from the Pi</td><td>Cut JP2</td></tr>
    <tr><td>Fault light</td><td>Electronic fuse fault</td><td>Cut JPF101</td></tr>
    <tr><td>Overvoltage light</td><td>Input overvoltage</td><td>Cut JPF102</td></tr>
    <tr><td>Reverse light</td><td>Reverse polarity</td><td>Cut JPF103</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Pinout {#pinout}

### J1: controller socket

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">TX</span> from the controller</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">RX</span> to the controller</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>3, 6 to 9</td><td>Not connected</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J2: Pi header

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1, 17</td><td>Pi 3.3&nbsp;V</td></tr>
    <tr><td>2, 4</td><td><span class="xb-pill xb-p-5v">Pi 5 V</span></td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">Pi transmit</span></td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-sig">Pi receive</span></td></tr>
    <tr><td>6, 9, 14, 20, 25, 30, 34, 39</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J3: external input

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-5v">6.5 to 24 V</span></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>Plus four leads to the controller.</span></div>
  <div class="xb-card"><b>A Raspberry Pi Zero</b><span>With its operating system.</span></div>
  <div class="xb-card"><b>One power source</b><span>Chosen in advance.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

This wires a serial command link to Smoothieboard V2 Prime GB/J33.

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Check the Pi</h3>
    <p>Model and 40-pin orientation, before fitting.</p>
  </li>
  <li class="xb-step">
    <h3>Wire with the power off</h3>
    <p>J33 contacts 1, 4, 5 and 10 to J1 contacts with the same numbers.</p>
  </li>
  <li class="xb-step">
    <h3>Set up the Pi</h3>
    <p>Enable its serial port, remove any login console on it, 115200 baud 8N1.</p>
  </li>
  <li class="xb-step">
    <h3>Configure the controller</h3>
    <p>Add the settings below.</p>
  </li>
  <li class="xb-step">
    <h3>Power and test</h3>
    <p>With machine outputs disabled, send <code>version</code>.</p>
    <p class="xb-expect">The controller replies.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>A Raspberry Pi as command host</td><td>UART console</td><td><a href="#config-main">Setup</a></td></tr>
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

The controller transmit line passes through U3 to the Pi, powered from the Pi 3.3&nbsp;V; Pi transmit passes through U4, powered from the controller 3.3&nbsp;V. The selector chooses which 5&nbsp;V source feeds the Pi.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Pi does not start</td><td>Source voltage and polarity; check the fault lights.</td></tr>
    <tr><td>No serial data</td><td>Login console removed, correct device and baud rate.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/raspberry-pi-zero-breakout/v17/raspberry-pi-zero-breakout-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/raspberry-pi-zero-breakout/v17/raspberry-pi-zero-breakout-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/raspberry-pi-zero-breakout/v17/raspberry-pi-zero-breakout-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-rz-mount-t">
  <title id="xb-rz-mount-t">Mounting drawing of the rz, component side: outline 76 by 90 millimetres with 6 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="336.4" y="78.0" width="287.1" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M336.4 56H623.6"/><path d="M336.4 50V62"/><path d="M623.6 50V62"/><path d="M649.6 78.0V418.0"/><path d="M643.6 78.0h12"/><path d="M643.6 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">76</text>
  <text x="661.6" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">90</text>
  <circle cx="336.4" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="324.4" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M278.4 104.0h30" fill="none"/><path d="M312.4 104.0l-8 -4v8z"/><path d="M278.4 104.0v30" fill="none"/><path d="M278.4 138.0l-4 -8h8z"/></g>
  <text x="316.4" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="274.4" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="391.2" cy="91.2" r="5.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M382.1 91.2h18.2M391.2 82.1v18.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="386.1" y="116.3" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  14.50, 3.50</text>
  <circle cx="610.3" cy="91.2" r="5.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M601.2 91.2h18.2M610.3 82.1v18.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="615.4" y="116.3" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  72.50, 3.50</text>
  <circle cx="525.3" cy="115.8" r="6.0" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M515.3 115.8h20.1M525.3 105.7v20.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="531.4" y="141.8" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  50.00, 10.00</text>
  <circle cx="600.9" cy="115.8" r="6.0" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M590.8 115.8h20.1M600.9 105.7v20.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="606.9" y="141.8" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  70.00, 10.00</text>
  <circle cx="391.2" cy="178.1" r="5.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M382.1 178.1h18.2M391.2 169.0v18.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="386.1" y="203.2" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">5</tspan>  14.50, 26.50</text>
  <circle cx="610.3" cy="178.1" r="5.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M601.2 178.1h18.2M610.3 169.0v18.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="615.4" y="203.2" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">6</tspan>  72.50, 26.50</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 76 × 90&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>14.50</td><td>3.50</td><td>2.7&nbsp;mm, not plated</td><td>Mounting</td></tr>
    <tr><td>2</td><td>72.50</td><td>3.50</td><td>2.7&nbsp;mm, not plated</td><td>Mounting</td></tr>
    <tr><td>3</td><td>50.00</td><td>10.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>70.00</td><td>10.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>5</td><td>14.50</td><td>26.50</td><td>2.7&nbsp;mm, not plated</td><td>Mounting</td></tr>
    <tr><td>6</td><td>72.50</td><td>26.50</td><td>2.7&nbsp;mm, not plated</td><td>Mounting</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Values from the silk screen.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>External input</td><td>J3</td><td>6.5 V</td><td>—</td><td>24 V</td><td>Board silk</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: datasheets {#datasheets}

The first page of each important chip&rsquo;s datasheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/raspberry-pi-zero-breakout/datasheets/lmr51430.pdf"><img src="/images/extensions/raspberry-pi-zero-breakout/datasheets/lmr51430-page1.png" alt="First page of the LMR51430 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/raspberry-pi-zero-breakout/datasheets/lmr51430.pdf">LMR51430 3 A synchronous buck converter</a> — Texas Instruments, 33 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/raspberry-pi-zero-breakout/datasheets/tps2113a.pdf"><img src="/images/extensions/raspberry-pi-zero-breakout/datasheets/tps2113a-page1.png" alt="First page of the TPS2113A datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/raspberry-pi-zero-breakout/datasheets/tps2113a.pdf">TPS2113A autoswitching power multiplexer</a> — Texas Instruments, 31 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/raspberry-pi-zero-breakout/datasheets/sn74lvc1g17.pdf"><img src="/images/extensions/raspberry-pi-zero-breakout/datasheets/sn74lvc1g17-page1.png" alt="First page of the SN74LVC1G17 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/raspberry-pi-zero-breakout/datasheets/sn74lvc1g17.pdf">SN74LVC1G17 single Schmitt-trigger buffer</a> — Texas Instruments, 53 pages.</figcaption>
</figure>
{:/nomarkdown}


See all boards on the [extension boards](/extension-boards) page.
