---
layout: default
title: "jaUART CP2104 USB-UART adapter"
description: "CP2104 USB to logic-level UART adapter: pinout, console wiring and known limits."
permalink: /extensions/historical-jauart-usb-uart-adapter
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Serial</p>
    <h1 id="historical-jauart-usb-uart-adapter">jaUART CP2104 USB-UART adapter</h1>
    <p class="xb-lead">A small CP2104 USB to logic-level UART adapter for a development console.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/historical-jauart-usb-uart-adapter/directory-board-render.png" alt="Top view of the jaUART CP2104 USB-UART adapter board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>CP2104</b><span>bridge</span></div>
  <div class="xb-stat"><b>USB</b><span>host side</span></div>
  <div class="xb-stat"><b>logic</b><span>UART levels</span></div>
  <div class="xb-stat"><b>2</b><span>activity LEDs</span></div>
  <div class="xb-stat"><b>15.7 × 26.6 mm</b><span>board size</span></div>
  <div class="xb-stat"><b>4</b><span>GPIO contacts</span></div>
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
  <a href="#electrical">Electrical specifications</a>
</nav>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <b>Check the USB socket and logic voltage before use.</b> The schematic and board disagree on the USB connector type, J2 contact 10 (RST) does not reach the chip, and this is not an RS-232 interface. This is Chris Cecil&rsquo;s jaUART, not the current <a href="/extensions/uart-breakout">UART breakout</a>.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>USB to UART adapter</td></tr>
    <tr><td>UART</td><td>J3: Vdd, Rx, Tx, ground</td></tr>
    <tr><td>Status lines</td><td>J2: ten contacts</td></tr>
    <tr><td>GPIO</td><td>J4: GP0–GP3 (CP2104 pins, not Smoothieware pins)</td></tr>
    <tr><td>USB</td><td>J5; symbol says Mini-B, footprint says Micro-B</td></tr>
    <tr><td>Isolation</td><td>None</td></tr>
    <tr><td>Size</td><td>15.675 × 26.55 mm</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/historical-jauart-usb-uart-adapter/directory-board-render.png" alt="Annotated top view of the jaUART CP2104 USB-UART adapter board">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:71.0%;top:27.8%" aria-label="1: USB socket">1<span class="xb-pop"><b>USB socket</b> — To the computer.</span></a>
      <a class="xb-mk" href="#tour-2" style="left:47.1%;top:55.1%" aria-label="2: CP2104">2<span class="xb-pop"><b>CP2104</b> — USB to UART bridge.</span></a>
      <a class="xb-mk xb-pl" href="#tour-3" style="left:17.9%;top:88.9%" aria-label="3: Status lines">3<span class="xb-pop"><b>Status lines</b> — Optional handshake signals.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:35.1%;top:39.9%" aria-label="4: GPIO">4<span class="xb-pop"><b>GPIO</b> — Bridge pins.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:40.6%;top:72.2%" aria-label="5: Rx LED">5<span class="xb-pop"><b>Rx LED</b> — Blue.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:55.9%;top:72.2%" aria-label="6: Tx LED">6<span class="xb-pop"><b>Tx LED</b> — Red.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:66.2%;top:59.1%" aria-label="7: Integrated circuit U2">7<span class="xb-pop"><b>Integrated circuit U2</b> — Integrated circuit U2, marked <code>TPD4EUSB30</code> in the board file. Connects to <code>D-</code>, <code>GND</code>, <code>D+</code>, <code>Tx</code>, <code>Rx</code>.</span></a>
      <a class="xb-mk xb-pr" href="#tour-8" style="left:77.0%;top:61.9%" aria-label="8: LED D3">8<span class="xb-pop"><b>LED D3</b> — LED D3, marked <code>LED</code> in the board file. Connects to <code>Vdd</code>.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>USB socket</b> — To the computer.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>CP2104</b> — USB to UART bridge.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Status lines</b> — Optional handshake signals.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>GPIO</b> — Bridge pins.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Rx LED</b> — Blue.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Tx LED</b> — Red.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Integrated circuit U2</b> — Integrated circuit U2, marked <code>TPD4EUSB30</code> in the board file. Connects to <code>D-</code>, <code>GND</code>, <code>D+</code>, <code>Tx</code>, <code>Rx</code>.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>LED D3</b> — LED D3, marked <code>LED</code> in the board file. Connects to <code>Vdd</code>.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

### Lights {#lights}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th>Lit means</th><th>Disable it</th></tr></thead>
  <tbody>
    <tr><td>D1 (blue)</td><td>Associated with the Rx line</td><td>Not specified</td></tr>
    <tr><td>D2 (red)</td><td>Associated with the Tx line</td><td>Not specified</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Pinout {#pinout}

<span id="connect-and-try-it"></span>

### UART J3

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J3 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>Vdd</code></td></tr>
    <tr><td>2</td><td><code>Rx</code></td></tr>
    <tr><td>3</td><td><code>Tx</code></td></tr>
    <tr><td>4</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Status lines J2

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J2 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>Vdd</code></td></tr>
    <tr><td>2</td><td><code>DTR</code></td></tr>
    <tr><td>3</td><td><code>DSR</code></td></tr>
    <tr><td>4</td><td><code>RTS</code></td></tr>
    <tr><td>5</td><td><code>CTS</code></td></tr>
    <tr><td>6</td><td><code>RI</code></td></tr>
    <tr><td>7</td><td><code>DCD</code></td></tr>
    <tr><td>8</td><td><code>SUSP</code></td></tr>
    <tr><td>9</td><td><code>_SUSP</code></td></tr>
    <tr><td>10</td><td><code>RST</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### GPIO J4

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J4 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>GP0</code></td></tr>
    <tr><td>2</td><td><code>GP1</code></td></tr>
    <tr><td>3</td><td><code>GP2</code></td></tr>
    <tr><td>4</td><td><code>GP3</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>jaUART board</b><span>Built from the design files</span></div>
  <div class="xb-card"><b>USB cable</b><span>Matching the fitted socket</span></div>
  <div class="xb-card"><b>Three leads</b><span>Tx, Rx, ground</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

A console connection to Smoothieboard V2 Prime GB/J33. USB powers the adapter, so J3 contact 1 stays open.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 666" role="img" aria-labelledby="xb-historical-jauart-usb-uart-adapter-wire"><title id="xb-historical-jauart-usb-uart-adapter-wire">Wiring: controller contact PH14 to J3 contact 3; controller contact PB9 to J3 contact 2; controller contact GND to J3 contact 4; USB contact 1 to USB cable.</title><image href="/images/extensions/historical-jauart-usb-uart-adapter/directory-board-render.png" x="421" y="14" width="157" height="230"/><circle cx="533" cy="78" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="514" y="97" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="533" y="111" text-anchor="middle" font-size="13" font-weight="700" fill="#111">USB</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Prime header GB/J33 wires</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J3 on this board</text><rect x="30" y="304" width="200" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="130" y="375" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Smoothieboard</text><text x="130" y="395" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">V2 Prime</text><rect x="770" y="304" width="200" height="150" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 349.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="349" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="349" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="354" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">PH14</text><text x="784" y="354" text-anchor="start" font-size="14" fill="#e6ebf2">3  Tx</text><rect x="400" y="338" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="354" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">PH14 to 3: Tx</text><path d="M230 379.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="379" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="379" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="384" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">PB9</text><text x="784" y="384" text-anchor="start" font-size="14" fill="#e6ebf2">2  Rx</text><rect x="400" y="368" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="384" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">PB9 to 2: Rx</text><path d="M230 409.0H770" fill="none" stroke="#8b949e" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="409" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="409" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><text x="216" y="414" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">GND</text><text x="784" y="414" text-anchor="start" font-size="14" fill="#e6ebf2">4  GND</text><rect x="400" y="398" width="200" height="22" rx="11" fill="#8b949e" stroke="#8b949e" stroke-width="1.5"/><text x="500" y="414" text-anchor="middle" font-size="13" font-weight="700" fill="#111">GND to 4: GND</text><text x="130" y="486" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">USB on this board</text><text x="870" y="486" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Computer</text><rect x="700" y="498" width="270" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><rect x="815" y="525" width="130" height="84" rx="8" fill="#23262b" stroke="#9aa2ad" stroke-width="1.5"/><rect x="824" y="533" width="112" height="68" rx="3" fill="#12324f" stroke="#12324f" stroke-width="1.5"/><path d="M838 555.0l12 9l-12 9M858 577.0h24" fill="none" stroke="#5df07a" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M805 621.0H955L942 609.0H818Z" fill="#565c65" stroke="#9aa2ad" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/><rect x="30" y="498" width="200" height="150" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 573.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="573" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="573" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="578" text-anchor="end" font-size="14" fill="#e6ebf2">  1</text><text x="712" y="578" text-anchor="start" font-size="13" fill="#e6ebf2">USB cable</text><rect x="340" y="562" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="578" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1: USB cable</text></svg>
  </div>
  <figcaption>USB powers the adapter, so J3 contact 1 stays open. Equipment is drawn as a typical unit, not a specific model.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Check the board</h3>
    <p>Confirm the socket and that J3 signals are at 3.3 V.</p>
  </li>
  <li class="xb-step">
    <h3>Wire three leads</h3>
    <p>With power off connect J3.3 (Tx) to the controller receive (PH14), J3.2 (Rx) to transmit (PB9) and J3.4 to ground.</p>
  </li>
  <li class="xb-step">
    <h3>Open the console</h3>
    <p>Add the <a href="#configuration">configuration</a>, restart, open the port at 115200 8N1 and send <code>version</code>.</p>
    <p class="xb-expect">The controller replies with its firmware version.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

<span id="smoothieware-use"></span>

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

On Smoothieboard V2 Prime, channel 1 transmits on PB9 and receives on PH14. See [UART](/uart). Syntax checked against firmware commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`.

## How it works {#how-it-works}

The CP2104 turns USB serial data into UART signals. Rx on J3 goes into the bridge and Tx comes out, so cross them with the controller. USB ground is the signal ground. See the [CP2104 datasheet](https://www.silabs.com/documents/public/data-sheets/cp2104.pdf).

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 142" role="img" aria-labelledby="xb-historical-jauart-usb-uart-adapter-path"><title id="xb-historical-jauart-usb-uart-adapter-path">Computer USB then CP2104 bridge then J3 Tx and Rx, cross to the controller.</title><rect x="46" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="186" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Computer USB</text><text x="186" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="360" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">CP2104 bridge</text><text x="500" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M330.0 70H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 63L358 70L349 77Z" fill="#5fb3ff"/><rect x="674" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="814" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">J3 Tx and Rx</text><text x="814" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2">cross to the controller</text><path d="M644.0 70H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 63L672 70L663 77Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Computer sees no port</td><td>Check the cable type and that the USB socket is the one fitted.</td></tr>
    <tr><td>No data</td><td>Cross Tx and Rx, share ground and match 115200 baud, 8N1.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="https://github.com/Ccecil/jaUART/tree/e9e69f50667e10d0af6d00339aa127826ec0522a">original source</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/Consoles.cpp#L733-L761">console parser</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/Hal/src/Uart.cpp#L101-L135">Prime UART implementation</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/Consoles.cpp#L515-L520">console task after startup</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/jaUART/blob/e9e69f50667e10d0af6d00339aa127826ec0522a/USB_Uart.kicad_pcb">original circuit</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Smoothieware/Smoothieboard2/blob/7dc4f9a972ad3e3587952171e63b278ee9997f10/V2_P11_Prime2660/smoothiev2-prime-2660.kicad_pcb">Prime PCB source</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/jaUART">Ccecil upstream project</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/jaUART/blob/e9e69f50667e10d0af6d00339aa127826ec0522a/USB_Uart.kicad_sch">Original USB_Uart.kicad_sch</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/jaUART/blob/e9e69f50667e10d0af6d00339aa127826ec0522a/readme.md">Original readme.md</a></td><td>Design source</td></tr>
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

## Design source {#origin}

Designed by Chris Cecil: [original design files](https://github.com/Ccecil/jaUART/tree/e9e69f50667e10d0af6d00339aa127826ec0522a). It was drawn for the Smoothieboard V2 Gadgeteer era; check every connection against your own controller.
See all boards on the [extension boards](/extension-boards) page.
