---
layout: default
title: "UART breakout"
description: "A Gadgeteer UART brought out to a six-contact FTDI-style 3.3 V serial header, with activity lights and an optional chain socket."
permalink: /extensions/uart-breakout
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Signal interfaces</p>
    <h1 id="uart-breakout">UART breakout</h1>
    <p class="xb-lead">Bring a controller UART out to the familiar six-contact serial-cable header. Lights show traffic in both directions, and a second socket passes the other signals on.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/uart-breakout/v17/uart-breakout-diagram.png" alt="Top view of the UART breakout: two ten-contact sockets at the top and a six-contact serial header at the bottom.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>3.3 V</b><span>logic</span></div>
  <div class="xb-stat"><b>6 contacts</b><span>FTDI-style header</span></div>
  <div class="xb-stat"><b>2 lights</b><span>TX and RX activity</span></div>
  <div class="xb-stat"><b>Chain</b><span>second socket</span></div>
  <div class="xb-stat"><b>100 Ω</b><span>series resistor each way</span></div>
  <div class="xb-stat"><b>34.6 × 30</b><span>millimetres</span></div>
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
  3.3&nbsp;V logic only. This is not RS-232 and not a USB adapter. Never connect a 5&nbsp;V logic signal, and let only one device transmit toward the controller.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>Serial console or serial peripheral on a controller UART</td></tr>
    <tr><td>Host</td><td>J1, ten-contact socket; transmit on contact 4, receive on contact 5</td></tr>
    <tr><td>Serial header</td><td>J3: ground, optional 5&nbsp;V, receive toward the controller, transmit from the controller</td></tr>
    <tr><td>Receive path</td><td>100&nbsp;&Omega; and a BAT54WS diode, with a 10&nbsp;k&Omega; pull-up</td></tr>
    <tr><td>Activity lights</td><td>Driven by an <a href="/images/extensions/uart-breakout/datasheets/sn74lvc2g14.pdf">SN74LVC2G14</a>, which only watches the signals</td></tr>
    <tr><td>Chain</td><td>J2; contacts 3 and 6 to 9 linked, transmit and receive open</td></tr>
    <tr><td>5 V on the header</td><td>Off as delivered (JP10 open)</td></tr>
    <tr><td>Protection</td><td><a href="/images/extensions/uart-breakout/datasheets/tpd4e1u06.pdf">TPD4E1U06</a> on the header</td></tr>
    <tr><td>Size</td><td>34.6 &times; 30&nbsp;mm, two M3 holes</td></tr>
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
      <img src="/images/extensions/uart-breakout/v17/uart-breakout-diagram.png" alt="Top view of the UART breakout with numbered markers explained in the list below.">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:25.6%;top:15.2%" aria-label="1: Host socket (J1)">1<span class="xb-pop"><b>Host socket (J1)</b> — connects to the controller.</span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:74.2%;top:15.2%" aria-label="2: Chain socket (J2)">2<span class="xb-pop"><b>Chain socket (J2)</b> — passes rails and signals on.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:37.2%;top:82.7%" aria-label="3: Serial header (J3)">3<span class="xb-pop"><b>Serial header (J3)</b> — for a 3.3&nbsp;V serial cable or adapter.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-4" style="left:15.2%;top:34.3%" aria-label="4: Activity driver (U1)">4<span class="xb-pop"><b>Activity driver (U1)</b> — an SN74LVC2G14 that lights the activity lamps.</span></a>
      <a class="xb-mk xb-pl" href="#tour-5" style="left:10.2%;top:65.4%" aria-label="5: Transmit light">5<span class="xb-pop"><b>Transmit light</b> — data from the controller.</span></a>
      <a class="xb-mk xb-pl" href="#tour-6" style="left:17.6%;top:65.4%" aria-label="6: Receive light">6<span class="xb-pop"><b>Receive light</b> — data toward the controller.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:68.0%;top:55.5%" aria-label="7: Header 5 V link (JP10)">7<span class="xb-pop"><b>Header 5 V link (JP10)</b> — open as delivered.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:68.0%;top:47.4%" aria-label="8: Chain links">8<span class="xb-pop"><b>Chain links</b> — JP4 (TX) and JP5 (RX) are open as delivered.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host socket (J1)</b> — connects to the controller.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket (J2)</b> — passes rails and signals on.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Serial header (J3)</b> — for a 3.3&nbsp;V serial cable or adapter.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Activity driver (U1)</b> — an <a href="/images/extensions/uart-breakout/datasheets/sn74lvc2g14.pdf">SN74LVC2G14</a> that lights the activity lamps.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Transmit light</b> — data from the controller.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Receive light</b> — data toward the controller.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Header 5 V link (JP10)</b> — open as delivered.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Chain links</b> — JP4 (TX) and JP5 (RX) are open as delivered.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

### Lights {#lights}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th>Lit means</th><th>Disable it</th></tr></thead>
  <tbody>
    <tr><td>LED1</td><td>Data from the controller (TX)</td><td>Cut JP11 or JP12, the link beside it</td></tr>
    <tr><td>LED2, amber</td><td>Data toward the controller (RX)</td><td>Cut JP11 or JP12, the link beside it</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Pinout {#pinout}

### J3: serial header

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>2</td><td>Not connected</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-5v">5 V</span> only if JP10 is closed, through a diode</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">RX</span> input: connect the cable&rsquo;s transmit wire</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">TX</span> output: connect the cable&rsquo;s receive wire</td></tr>
    <tr><td>6</td><td>Not connected</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J1: host socket

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td></tr>
    <tr><td>3, 6 to 9</td><td>Passed to J2</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">TX</span> from the controller</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">RX</span> to the controller</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Solder links

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>Effect</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>JP3, JP6 to JP9</td><td>Pass host contacts 3 and 6 to 9 to J2</td><td>Bridged</td></tr>
    <tr><td>JP4</td><td>Passes TX to J2</td><td>Open</td></tr>
    <tr><td>JP5</td><td>Passes RX from J2</td><td>Open</td></tr>
    <tr><td>JP10</td><td>5&nbsp;V on J3 contact 3</td><td>Open</td></tr>
    <tr><td>JP11, JP12</td><td>Cut to disable a light</td><td>Bridged</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>Plus leads from the controller to J1.</span></div>
  <div class="xb-card"><b>A 3.3 V serial adapter</b><span>With a known contact order.</span></div>
  <div class="xb-card"><b>A terminal program</b><span>115200 baud, 8N1.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

This example opens a command console on the Smoothieboard V2 Prime.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 666" role="img" aria-labelledby="xb-uart-breakout-wire"><title id="xb-uart-breakout-wire">Wiring: controller contact 1 to J1 contact 1; controller contact 4 to J1 contact 4; controller contact 5 to J1 contact 5; controller contact 10 to J1 contact 10; J3 contact 1 to adapter ground; J3 contact 5 to adapter receive; J3 contact 4 to adapter transmit.</title><image href="/images/extensions/uart-breakout/v17/uart-breakout-diagram.png" x="368" y="14" width="263" height="230"/><circle cx="436" cy="49" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="417" y="68" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="436" y="82" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J1</text><circle cx="466" cy="204" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="447" y="223" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="466" y="237" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J3</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Prime header GB/J33</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J1 on this board</text><rect x="30" y="304" width="200" height="150" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="130" y="375" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Smoothieboard</text><text x="130" y="395" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">V2 Prime</text><rect x="770" y="304" width="200" height="150" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 334.0H770" fill="none" stroke="#d92d2d" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="334" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="334" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><text x="216" y="339" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">1</text><text x="784" y="339" text-anchor="start" font-size="14" fill="#eaeaea">1  3.3 V</text><rect x="400" y="323" width="200" height="22" rx="11" fill="#d92d2d" stroke="#d92d2d" stroke-width="1.5"/><text x="500" y="339" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1 to 1: 3.3 V</text><path d="M230 364.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">4</text><text x="784" y="369" text-anchor="start" font-size="14" fill="#eaeaea">4  TX from host</text><rect x="400" y="353" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">4 to 4: TX from host</text><path d="M230 394.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">5</text><text x="784" y="399" text-anchor="start" font-size="14" fill="#eaeaea">5  RX to host</text><rect x="400" y="383" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">5 to 5: RX to host</text><path d="M230 424.0H770" fill="none" stroke="#939393" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="424" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="424" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><text x="216" y="429" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">10</text><text x="784" y="429" text-anchor="start" font-size="14" fill="#eaeaea">10  GND</text><rect x="400" y="413" width="200" height="22" rx="11" fill="#939393" stroke="#939393" stroke-width="1.5"/><text x="500" y="429" text-anchor="middle" font-size="13" font-weight="700" fill="#111">10 to 10: GND</text><text x="130" y="486" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J3 on this board</text><text x="870" y="486" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Serial adapter</text><rect x="700" y="498" width="270" height="150" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><rect x="815" y="525" width="130" height="84" rx="8" fill="#262626" stroke="#a1a1a1" stroke-width="1.5"/><rect x="824" y="533" width="112" height="68" rx="3" fill="#12324f" stroke="#12324f" stroke-width="1.5"/><path d="M838 555.0l12 9l-12 9M858 577.0h24" fill="none" stroke="#5df07a" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M805 621.0H955L942 609.0H818Z" fill="#5b5b5b" stroke="#a1a1a1" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/><rect x="30" y="498" width="200" height="150" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 543.0H700" fill="none" stroke="#939393" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="543" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="543" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><text x="216" y="548" text-anchor="end" font-size="14" fill="#eaeaea">GND  1</text><text x="712" y="548" text-anchor="start" font-size="13" fill="#eaeaea">adapter ground</text><rect x="340" y="532" width="220" height="22" rx="11" fill="#939393" stroke="#939393" stroke-width="1.5"/><text x="450" y="548" text-anchor="middle" font-size="13" font-weight="700" fill="#111">1: adapter ground</text><path d="M230 573.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="573" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="573" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="578" text-anchor="end" font-size="14" fill="#eaeaea">TX output…  5</text><text x="712" y="578" text-anchor="start" font-size="13" fill="#eaeaea">adapter receive</text><rect x="340" y="562" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="578" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">5: adapter receive</text><path d="M230 603.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="603" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="603" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="608" text-anchor="end" font-size="14" fill="#eaeaea">RX input: connect…  4</text><text x="712" y="608" text-anchor="start" font-size="13" fill="#eaeaea">adapter transmit</text><rect x="340" y="592" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="608" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">4: adapter transmit</text></svg>
  </div>
  <figcaption>Wiring for this procedure. Yellow rings mark the connectors used. Make and change connections with the power off. Equipment is drawn as a typical unit, not a specific model.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Wire the controller with the power off</h3>
    <p>Prime GB/J33 contacts 1, 4, 5 and 10 to J1 contacts 1, 4, 5 and 10. Leave the others unconnected.</p>
  </li>
  <li class="xb-step">
    <h3>Wire the serial adapter</h3>
    <p>Adapter ground to J3 contact 1, adapter receive to contact 5, adapter transmit to contact 4. Leave JP10 open.</p>
  </li>
  <li class="xb-step">
    <h3>Configure and restart</h3>
    <p>Add the configuration below and let the controller finish starting.</p>
  </li>
  <li class="xb-step">
    <h3>Send a command</h3>
    <p>Type <code>version</code> followed by Enter (line feed).</p>
    <p class="xb-expect">The controller replies with its build information and both lights blink.</p>
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

The controller&rsquo;s transmit line reaches J3 contact 5 through 100&nbsp;&Omega;. Data from the cable reaches the controller through 100&nbsp;&Omega; and a diode, with a pull-up holding the line high when nothing transmits. Neither path is inverted or level shifted.

{% include _includes/serial-adapter-board-comparison.html %}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 270" role="img" aria-labelledby="xb-uart-breakout-path"><title id="xb-uart-breakout-path">Controller transmit then 100 Ω then J3 contact 5. Data from cable then 100 Ω and diode, with pull-up then Controller receive.</title><rect x="46" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="186" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Controller transmit</text><text x="186" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><rect x="360" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">100 Ω</text><text x="500" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M330.0 70H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 63L358 70L349 77Z" fill="#5fb3ff"/><rect x="674" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="814" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">J3 contact 5</text><text x="814" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M644.0 70H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 63L672 70L663 77Z" fill="#5fb3ff"/><rect x="46" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="186" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Data from cable</text><text x="186" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><rect x="360" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="500" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">100 Ω and diode, with pull-up</text><text x="500" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M330.0 198H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 191L358 198L349 205Z" fill="#5fb3ff"/><rect x="674" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="814" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Controller receive</text><text x="814" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M644.0 198H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 191L672 198L663 205Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board, one path per row.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>No reply</td><td>Cross transmit and receive, check ground, the channel number and the line ending (line feed).</td></tr>
    <tr><td>Garbled text</td><td>Matching baud rate and format on both sides.</td></tr>
    <tr><td>Receive light never blinks</td><td>The adapter&rsquo;s transmit wire on J3 contact 4.</td></tr>
    <tr><td>Two devices fight</td><td>Keep JP5 open unless the chain device is the only transmitter.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/uart-breakout/v17/uart-breakout-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/uart-breakout/v17/uart-breakout-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/uart-breakout/v17/uart-breakout-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-ub-mount-t">
  <title id="xb-ub-mount-t">Mounting drawing of the ub, component side: outline 34.6 by 30 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="283.9" y="78.0" width="392.1" height="340.0" rx="0.0" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M283.9 56H676.1"/><path d="M283.9 50V62"/><path d="M676.1 50V62"/><path d="M702.1 78.0V418.0"/><path d="M696.1 78.0h12"/><path d="M696.1 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">34.6</text>
  <text x="714.1" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">30</text>
  <circle cx="283.9" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="271.9" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M225.9 104.0h30" fill="none"/><path d="M259.9 104.0l-8 -4v8z"/><path d="M225.9 104.0v30" fill="none"/><path d="M225.9 138.0l-4 -8h8z"/></g>
  <text x="263.9" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="221.9" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="397.3" cy="304.7" r="18.1" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M375.1 304.7h44.3M397.3 282.5v44.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="379.1" y="276.5" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  10.00, 20.00</text>
  <circle cx="623.9" cy="304.7" r="18.1" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M601.8 304.7h44.3M623.9 282.5v44.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="642.1" y="276.5" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  30.00, 20.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 34.6 × 30&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>10.00</td><td>20.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>30.00</td><td>20.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Board values come from the silk screen and parts list.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Logic level</td><td>J3 signals</td><td>—</td><td>3.3 V</td><td>—</td><td>Board silk: no 5 V logic</td></tr>
    <tr><td>Series resistance</td><td>Each direction</td><td>—</td><td>100 Ω</td><td>—</td><td>Parts list</td></tr>
    <tr><td>Receive pull-up</td><td>Controller RX</td><td>—</td><td>10 kΩ</td><td>—</td><td>Parts list</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: datasheets {#datasheets}

The first page of each important chip&rsquo;s datasheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/uart-breakout/datasheets/sn74lvc2g14.pdf"><img src="/images/extensions/uart-breakout/datasheets/sn74lvc2g14-page1.png" alt="First page of the SN74LVC2G14 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/uart-breakout/datasheets/sn74lvc2g14.pdf">SN74LVC2G14 dual Schmitt-trigger inverter</a> — Texas Instruments, 33 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/uart-breakout/datasheets/tpd4e1u06.pdf"><img src="/images/extensions/uart-breakout/datasheets/tpd4e1u06-page1.png" alt="First page of the TPD4E1U06 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/uart-breakout/datasheets/tpd4e1u06.pdf">TPD4E1U06 quad-channel ESD protection device</a> — Texas Instruments, 27 pages.</figcaption>
</figure>
{:/nomarkdown}


See all boards on the [extension boards](/extension-boards) page.
