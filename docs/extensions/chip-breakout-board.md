---
layout: default
title: "C.H.I.P. breakout board"
description: "Carrier for a C.H.I.P. v1.0 single-board computer: serial link to the controller and a protected 7 to 24 V power input."
permalink: /extensions/chip-breakout-board
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Host computers</p>
    <h1 id="chip-breakout-board">C.H.I.P. breakout board</h1>
    <p class="xb-lead">Mount a C.H.I.P. v1.0 computer next to your controller: buffered serial lines on one ribbon cable, and a protected 7&ndash;24&nbsp;V input that powers the module.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/chip-breakout-board/v19/chip-breakout-board-diagram.webp" alt="Top view of the C.H.I.P. breakout board.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>C.H.I.P.</b><span>v1.0 module</span></div>
  <div class="xb-stat"><b>UART</b><span>3.3 V</span></div>
  <div class="xb-stat"><b>7–24 V</b><span>external input</span></div>
  <div class="xb-stat"><b>2 ways</b><span>power source</span></div>
  <div class="xb-stat"><b>3 + 3</b><span>status and fault lights</span></div>
  <div class="xb-stat"><b>67.8 × 43</b><span>millimetres</span></div>
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
  Made for the C.H.I.P. v1.0 module only, not for other computers with a similar header. Set the power selector before fitting the module, never feed external voltage into the controller rails, and do not hot-plug anything.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>C.H.I.P. carrier with serial link and power</td></tr>
    <tr><td>Host socket</td><td>J1 (U IN), 2 &times; 5 at 1.27&nbsp;mm; contacts 1, 2, 4, 5 and 10 used</td></tr>
    <tr><td>Module sockets</td><td>J3 (2 &times; 20, module U14) and J4 (2 &times; 6, module U13)</td></tr>
    <tr><td>Serial buffers</td><td>Two <a href="/images/extensions/chip-breakout-board/datasheets/sn74lvc1g126.pdf">SN74LVC1G126</a>, one per direction</td></tr>
    <tr><td>External input</td><td>J2, 7 to 24&nbsp;V DC, protected by a <a href="/images/extensions/chip-breakout-board/datasheets/tps2660.pdf">TPS2660</a>0 eFuse, regulated to 5&nbsp;V by an <a href="/images/extensions/chip-breakout-board/datasheets/lmr51430.pdf">LMR51430</a></td></tr>
    <tr><td>Power selector</td><td>SJ1: 1 to 2 external (as delivered), 2 to 3 controller 5&nbsp;V</td></tr>
    <tr><td>Size</td><td>67.8 &times; 43&nbsp;mm, two M3 mounting holes</td></tr>
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
      <img src="/images/extensions/chip-breakout-board/v19/chip-breakout-board-diagram.webp" alt="Top view of the C.H.I.P. breakout board with numbered markers explained in the list below.">
      <a class="xb-mk xb-pb xb-pr" href="#tour-1" style="left:92.4%;top:24.4%" aria-label="1: Controller socket (U IN)">1<span class="xb-pop"><b>Controller socket (U IN)</b> — serial lines and controller rails.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-2" style="left:14.8%;top:14.3%" aria-label="2: Module socket (J3)">2<span class="xb-pop"><b>Module socket (J3)</b> — serial transmit and receive pins of the module.</span></a>
      <a class="xb-mk xb-pl" href="#tour-3" style="left:14.8%;top:93.4%" aria-label="3: Module power socket (J4)">3<span class="xb-pop"><b>Module power socket (J4)</b> — 5&nbsp;V charge input and the module&rsquo;s 3.3&nbsp;V.</span></a>
      <a class="xb-mk xb-pr" href="#tour-4" style="left:89.4%;top:85.9%" aria-label="4: Power input (J2)">4<span class="xb-pop"><b>Power input (J2)</b> — 7 to 24&nbsp;V DC; observe + and &minus;.</span></a>
      <a class="xb-mk xb-pr" href="#tour-5" style="left:90.3%;top:71.7%" aria-label="5: Power selector (SJ1)">5<span class="xb-pop"><b>Power selector (SJ1)</b> — external or controller supply.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:71.0%;top:62.2%" aria-label="6: 5 V regulator (U1)">6<span class="xb-pop"><b>5 V regulator (U1)</b> — converts the external input.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-7" style="left:81.0%;top:41.1%" aria-label="7: Serial buffers (U2, U3)">7<span class="xb-pop"><b>Serial buffers (U2, U3)</b> — one per direction.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-8" style="left:89.6%;top:48.8%" aria-label="8: Send light (TXD)">8<span class="xb-pop"><b>Send light (TXD)</b> — controller to module.</span></a>
      <a class="xb-mk xb-pr" href="#tour-9" style="left:89.6%;top:55.5%" aria-label="9: Receive light (RXD)">9<span class="xb-pop"><b>Receive light (RXD)</b> — module to controller.</span></a>
      <a class="xb-mk xb-pr" href="#tour-10" style="left:89.6%;top:62.2%" aria-label="10: 5 V light (D7)">10<span class="xb-pop"><b>5 V light (D7)</b> — module supply present.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Controller socket (U IN)</b> — serial lines and controller rails.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Module socket (J3)</b> — serial transmit and receive pins of the module.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Module power socket (J4)</b> — 5&nbsp;V charge input and the module&rsquo;s 3.3&nbsp;V.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Power input (J2)</b> — 7 to 24&nbsp;V DC; observe + and &minus;.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Power selector (SJ1)</b> — external or controller supply.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>5 V regulator (U1)</b> — converts the external input.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Serial buffers (U2, U3)</b> — one per direction.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Send light (TXD)</b> — controller to module.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Receive light (RXD)</b> — module to controller.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>5 V light (D7)</b> — module supply present.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

### Lights {#lights}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th>Lit means</th><th>Disable it</th></tr></thead>
  <tbody>
    <tr><td>D5, amber (TXD)</td><td>Controller-to-module line activity</td><td>JP1</td></tr>
    <tr><td>D6, amber (RXD)</td><td>Module-to-controller line activity</td><td>JP2</td></tr>
    <tr><td>D7, green</td><td>5&nbsp;V to the module present</td><td>JP3</td></tr>
    <tr><td>Underside, three</td><td>Input protection reports a fault, over-voltage or reversed input</td><td>Cut link SJF1 (fault), SJF2 (over-voltage), SJF3 (reverse)</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Pinout {#pinout}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J1</th><th>Signal</th><th>Smoothieboard V2 Prime header G_B (J33)</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>powers the controller side of the buffers</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>used only with SJ1 on 2 to 3</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">serial TX</span> (controller sends)</td><td><code>PB9</code>, then module U14 pin 5</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">serial RX</span> (controller receives)</td><td><code>PH14</code>, from module U14 pin 3</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Contacts 3 and 6 to 9 are not used.

### Module and power connections

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Connector</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>J2 pin 1 (+), pin 2 (&minus;)</td><td>External 7 to 24&nbsp;V DC</td></tr>
    <tr><td>J3 pins 3 and 5</td><td>Module U14 transmit and receive</td></tr>
    <tr><td>J4 pin 2</td><td>5&nbsp;V to the module&rsquo;s CHG-IN</td></tr>
    <tr><td>J4 pin 5</td><td>The module&rsquo;s 3.3&nbsp;V, powers the module side of the buffers</td></tr>
    <tr><td>J3 pin 1, J4 pins 1 and 4</td><td>Ground</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>Built from the design files in Downloads</span></div>
  <div class="xb-card"><b>A C.H.I.P. v1.0 computer</b><span>With a Linux image on which you can use its first extra serial port (UART1).</span></div>
  <div class="xb-card"><b>A ten-wire cable</b><span>Both ends 2 &times; 5 contacts at 1.27&nbsp;mm pitch, wired 1 to 1. A 2.54&nbsp;mm jumper plug does not fit. The Prime header has no keyed housing, so check contact 1 at both ends.</span></div>
  <div class="xb-card"><b>A power supply</b><span>7 to 24&nbsp;V DC, or the controller&rsquo;s 5&nbsp;V if it can supply the module&rsquo;s peak current.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

This sets up a serial console between the module and Smoothieboard V2 Prime.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 502" role="img" aria-labelledby="xb-chip-breakout-board-wire"><title id="xb-chip-breakout-board-wire">Wiring: controller contact 1 to J1 contact 1; controller contact 2 to J1 contact 2; controller contact 4 to J1 contact 4; controller contact 5 to J1 contact 5; controller contact 10 to J1 contact 10.</title><image href="/images/extensions/chip-breakout-board/v19/chip-breakout-board-diagram.webp" x="322" y="14" width="357" height="230"/><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Prime header G_B/J33</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J1 on this board</text><rect x="30" y="304" width="200" height="180" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="130" y="390" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Smoothieboard</text><text x="130" y="410" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">V2 Prime</text><rect x="770" y="304" width="200" height="180" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 334.0H770" fill="none" stroke="#d92d2d" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="334" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="334" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><text x="216" y="339" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">1</text><text x="784" y="339" text-anchor="start" font-size="14" fill="#eaeaea">1  3.3 V</text><rect x="400" y="323" width="200" height="22" rx="11" fill="#d92d2d" stroke="#d92d2d" stroke-width="1.5"/><text x="500" y="339" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1 to 1: 3.3 V</text><path d="M230 364.0H770" fill="none" stroke="#e8820c" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="364" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">2</text><text x="784" y="369" text-anchor="start" font-size="14" fill="#eaeaea">2  5 V</text><rect x="400" y="353" width="200" height="22" rx="11" fill="#e8820c" stroke="#e8820c" stroke-width="1.5"/><text x="500" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#111">2 to 2: 5 V</text><path d="M230 394.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">4</text><text x="784" y="399" text-anchor="start" font-size="14" fill="#eaeaea">4  </text><rect x="400" y="383" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">4 to 4</text><path d="M230 424.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="429" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">5</text><text x="784" y="429" text-anchor="start" font-size="14" fill="#eaeaea">5  </text><rect x="400" y="413" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="429" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">5 to 5</text><path d="M230 454.0H770" fill="none" stroke="#939393" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="454" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="454" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><text x="216" y="459" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">10</text><text x="784" y="459" text-anchor="start" font-size="14" fill="#eaeaea">10  GND</text><rect x="400" y="443" width="200" height="22" rx="11" fill="#939393" stroke="#939393" stroke-width="1.5"/><text x="500" y="459" text-anchor="middle" font-size="13" font-weight="700" fill="#111">10 to 10: GND</text></svg>
  </div>
  <figcaption>Wiring for this procedure. Yellow rings mark the connectors used. Make and change connections with the power off.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Choose the supply</h3>
    <p>With everything off, set SJ1: 1 to 2 for the external input, 2 to 3 for controller power. Never bridge all three pads. Do not also power the module from another source without checking that module&rsquo;s documentation.</p>
  </li>
  <li class="xb-step">
    <h3>Fit the module</h3>
    <p>Check pin 1 of both module headers (U13 and U14) before pressing it in.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the controller</h3>
    <p>G_B (J33) contacts 1, 2, 4, 5 and 10 to the same J1 contacts.</p>
  </li>
  <li class="xb-step">
    <h3>Configure both sides</h3>
    <p>Add the controller setting below. On the module, enable UART1, remove any login console from it, and set 115200 baud, 8 data bits, no parity, 1 stop bit, no hardware flow control.</p>
  </li>
  <li class="xb-step">
    <h3>Test</h3>
    <p>With motors and heaters disabled, send <code>version</code> followed by a new line from the module.</p>
    <p class="xb-expect">The controller answers with its firmware version.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>A serial console on the controller</td><td>UART console</td><td><a href="#config-uart">1</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### 1. Serial console (UART console) {#config-uart}

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

Channel 1 uses PB9 (send) and PH14 (receive) on Prime. The module needs no special driver in the controller, only a serial program ([console source](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/Hal/src/Uart.cpp)). The board does one job, so there is one example.

## How it works {#how-it-works}

The two serial lines each pass through a buffer powered by the receiving side&rsquo;s 3.3&nbsp;V and enabled by the sending side&rsquo;s, so check that both supplies are present before expecting data. The external input goes through an eFuse that blocks reversed and out-of-range voltage and lights a fault light on the underside, then a regulator makes 5&nbsp;V. SJ1 selects whether that or the controller&rsquo;s 5&nbsp;V (through a diode) feeds the module.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 270" role="img" aria-labelledby="xb-chip-breakout-board-path"><title id="xb-chip-breakout-board-path">Serial lines, both directions then Buffers, powered by receiver, enabled by sender then Module UART. External input then eFuse, blocks reversed and wrong voltage then 5 V regulator then SJ1, feeds module from this or controller 5 V.</title><rect x="46" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="186" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Serial lines</text><text x="186" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3">both directions</text><rect x="360" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Buffers</text><text x="500" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3">powered by receiver, enabled by sender</text><path d="M330.0 70H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 63L358 70L349 77Z" fill="#5fb3ff"/><rect x="674" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="814" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Module UART</text><text x="814" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M644.0 70H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 63L672 70L663 77Z" fill="#5fb3ff"/><rect x="20" y="142" width="214" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="127" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">External input</text><text x="127" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><rect x="268" y="142" width="214" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="376" y="185" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">eFuse</text><text x="376" y="205" text-anchor="middle" font-size="13" fill="#b3b3b3">blocks reversed and wrong</text><text x="376" y="221" text-anchor="middle" font-size="13" fill="#b3b3b3">voltage</text><path d="M238.5 198H259.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M258 191L266 198L258 205Z" fill="#5fb3ff"/><rect x="517" y="142" width="214" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="624" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">5 V regulator</text><text x="624" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M487.0 198H508.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M506 191L515 198L506 205Z" fill="#5fb3ff"/><rect x="766" y="142" width="214" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="873" y="185" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">SJ1</text><text x="873" y="205" text-anchor="middle" font-size="13" fill="#b3b3b3">feeds module from this or</text><text x="873" y="221" text-anchor="middle" font-size="13" fill="#b3b3b3">controller 5 V</text><path d="M735.5 198H756.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M754 191L764 198L754 205Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board, one path per row.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>No answer</td><td>Module serial port setup, send and receive contacts, both 3.3&nbsp;V supplies.</td></tr>
    <tr><td>Module restarts</td><td>Supply too weak, especially with controller power.</td></tr>
    <tr><td>No 5 V light</td><td>SJ1 position, input polarity and voltage, underside fault lights.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/chip-breakout-board/v19/chip-breakout-board-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/chip-breakout-board/v19/chip-breakout-board-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/chip-breakout-board/v19/chip-breakout-board-diagram.webp">Board drawing (WebP)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-cb-mount-t">
  <title id="xb-cb-mount-t">Mounting drawing of the cb, component side: outline 67.8 by 43 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="212.0" y="78.0" width="536.1" height="340.0" rx="7.9" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M212.0 56H748.0"/><path d="M212.0 50V62"/><path d="M748.0 50V62"/><path d="M774.0 78.0V418.0"/><path d="M768.0 78.0h12"/><path d="M768.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">67.8</text>
  <text x="786.0" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">43</text>
  <circle cx="212.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="200.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M154.0 104.0h30" fill="none"/><path d="M188.0 104.0l-8 -4v8z"/><path d="M154.0 104.0v30" fill="none"/><path d="M154.0 138.0l-4 -8h8z"/></g>
  <text x="192.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="150.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="235.7" cy="382.4" r="12.7" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M219.0 382.4h33.3M235.7 365.8v33.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="223.0" y="359.8" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  3.00, 38.50</text>
  <circle cx="552.0" cy="382.4" r="12.7" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M535.3 382.4h33.3M552.0 365.8v33.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="564.6" y="359.8" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  43.00, 38.50</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 67.8 × 43&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>3.00</td><td>38.50</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>43.00</td><td>38.50</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Values from the board printing and design.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>External input</td><td>J2</td><td>7 V</td><td>—</td><td>24 V</td><td>Board silk</td></tr>
    <tr><td>Module charge input</td><td>J4 pin 2</td><td>—</td><td>5.0 V</td><td>6.3 V</td><td>Board silk CHG-IN</td></tr>
    <tr><td>Serial levels</td><td>J1</td><td>—</td><td>3.3 V</td><td>—</td><td>Board silk</td></tr>
    <tr><td>Module current</td><td>5 V</td><td>—</td><td>—</td><td>Open</td><td>Take from the module&rsquo;s documentation</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: datasheets {#datasheets}

The first page of each important chip&rsquo;s datasheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/chip-breakout-board/datasheets/lmr51430.pdf"><img src="/images/extensions/chip-breakout-board/datasheets/lmr51430-page1.png" alt="First page of the LMR51430 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/chip-breakout-board/datasheets/lmr51430.pdf">LMR51430 step-down converter</a> — Texas Instruments, 33 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/chip-breakout-board/datasheets/sn74lvc1g126.pdf"><img src="/images/extensions/chip-breakout-board/datasheets/sn74lvc1g126-page1.png" alt="First page of the SN74LVC1G126 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/chip-breakout-board/datasheets/sn74lvc1g126.pdf">SN74LVC1G126 single bus buffer</a> — Texas Instruments, 49 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/chip-breakout-board/datasheets/tps2660.pdf"><img src="/images/extensions/chip-breakout-board/datasheets/tps2660-page1.png" alt="First page of the TPS2660 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/chip-breakout-board/datasheets/tps2660.pdf">TPS2660 industrial eFuse with reverse-input protection</a> — Texas Instruments, 55 pages.</figcaption>
</figure>
{:/nomarkdown}


See all boards on the [extension boards](/extension-boards) page.
