---
layout: default
title: "Gadgeteer RS-232 level adapter"
description: "MAX3232 RS-232 level adapter with a DE9 connector: pinout and voltage warning."
permalink: /extensions/historical-gadgeteer-rs232-adapter
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Serial</p>
    <h1 id="historical-gadgeteer-rs232-adapter">Gadgeteer RS-232 level adapter</h1>
    <p class="xb-lead">Converts host UART and handshake signals to RS-232 levels on a DE9 connector.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/historical-gadgeteer-rs232-adapter/directory-board-render.png" alt="Top view of the Gadgeteer RS-232 level adapter board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>MAX3232</b><span>transceiver</span></div>
  <div class="xb-stat"><b>DE9</b><span>connector</span></div>
  <div class="xb-stat"><b>4</b><span>signals</span></div>
  <div class="xb-stat"><b>5 V</b><span>transceiver supply</span></div>
  <div class="xb-stat"><b>40 × 40 mm</b><span>board size</span></div>
  <div class="xb-stat"><b>4</b><span>holes, 2 for the D-sub</span></div>
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
  <b>The MAX3232 runs from 5 V on this board,</b> so its receive and CTS outputs may exceed what a 3.3 V controller accepts. Do not connect them to a Smoothieboard V2 Prime input without level conversion. This is a design by Chris Cecil, not a current Smoothieware board.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>UART to RS-232 level conversion</td></tr>
    <tr><td>Headers</td><td>J2 (2 × 5), J3 (1 × 10)</td></tr>
    <tr><td>Connector</td><td>J1 DE9: 2 transmit, 3 receive, 5 ground, 7 CTS, 8 RTS</td></tr>
    <tr><td>Chip</td><td>U2 MAX3232</td></tr>
    <tr><td>Size</td><td>40 × 40 mm</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/historical-gadgeteer-rs232-adapter/directory-board-render.png" alt="Annotated top view of the Gadgeteer RS-232 level adapter board">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:68.8%;top:35.2%" aria-label="1: DE9 connector">1<span class="xb-pop"><b>DE9 connector</b> — RS-232 side.</span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:51.7%;top:49.6%" aria-label="2: MAX3232">2<span class="xb-pop"><b>MAX3232</b> — Level converter.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-3" style="left:15.4%;top:47.6%" aria-label="3: Header J2">3<span class="xb-pop"><b>Header J2</b> — Host side.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:30.7%;top:19.5%" aria-label="4: Row J3">4<span class="xb-pop"><b>Row J3</b> — Same signals in one row.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:41.8%;top:45.4%" aria-label="5: Capacitor C1">5<span class="xb-pop"><b>Capacitor C1</b> — Capacitor C1, marked <code>.47uf</code> in the board file.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:58.0%;top:41.3%" aria-label="6: Capacitor C5">6<span class="xb-pop"><b>Capacitor C5</b> — Capacitor C5, marked <code>.1uf</code> in the board file. Connects to <code>+5V</code>, <code>GND</code>.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:45.3%;top:41.3%" aria-label="7: Capacitor C2">7<span class="xb-pop"><b>Capacitor C2</b> — Capacitor C2, marked <code>.47uf</code> in the board file. Connects to <code>GND</code>.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:40.8%;top:53.7%" aria-label="8: Capacitor C3">8<span class="xb-pop"><b>Capacitor C3</b> — Capacitor C3, marked <code>.47uf</code> in the board file. Connects to <code>GND</code>.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>DE9 connector</b> — RS-232 side.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>MAX3232</b> — Level converter.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Header J2</b> — Host side.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Row J3</b> — Same signals in one row.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Capacitor C1</b> — Capacitor C1, marked <code>.47uf</code> in the board file.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Capacitor C5</b> — Capacitor C5, marked <code>.1uf</code> in the board file. Connects to <code>+5V</code>, <code>GND</code>.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Capacitor C2</b> — Capacitor C2, marked <code>.47uf</code> in the board file. Connects to <code>GND</code>.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Capacitor C3</b> — Capacitor C3, marked <code>.47uf</code> in the board file. Connects to <code>GND</code>.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

<span id="connect-and-try-it"></span>

### Headers J2 and J3

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J2 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+3V3</code></td></tr>
    <tr><td>2</td><td><code>+5V</code></td></tr>
    <tr><td>3</td><td><code>CTS</code></td></tr>
    <tr><td>4</td><td><code>Tx</code></td></tr>
    <tr><td>5</td><td><code>Rx</code></td></tr>
    <tr><td>6</td><td><code>RTS</code></td></tr>
    <tr><td>7</td><td><code>P7</code></td></tr>
    <tr><td>8</td><td><code>P8</code></td></tr>
    <tr><td>9</td><td><code>P9</code></td></tr>
    <tr><td>10</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### DE9 connector J1

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>0</td><td>not connected</td></tr>
    <tr><td>1</td><td>not connected</td></tr>
    <tr><td>2</td><td><code>TxD_</code></td></tr>
    <tr><td>3</td><td><code>RxD_</code></td></tr>
    <tr><td>4</td><td>not connected</td></tr>
    <tr><td>5</td><td><code>GND</code></td></tr>
    <tr><td>6</td><td>not connected</td></tr>
    <tr><td>7</td><td><code>CTS_</code></td></tr>
    <tr><td>8</td><td><code>RTS_</code></td></tr>
    <tr><td>9</td><td>not connected</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>RS-232 adapter</b><span>Built from the design files</span></div>
  <div class="xb-card"><b>RS-232 device</b><span>With known pinout</span></div>
  <div class="xb-card"><b>Level conversion</b><span>For any 3.3 V input</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

The minimum wiring first, then the order to do it in. Facts about each contact are in the [pinout](#pinout).

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 502" role="img" aria-labelledby="xb-historical-gadgeteer-rs232-adapter-wire"><title id="xb-historical-gadgeteer-rs232-adapter-wire">Wiring: J1 contact 2 to TxD_; J1 contact 3 to RxD_; J1 contact 5 to GND; J1 contact 7 to CTS_; J1 contact 8 to RTS_.</title><image href="/images/extensions/historical-gadgeteer-rs232-adapter/directory-board-render.png" x="368" y="14" width="263" height="230"/><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J1 on this board</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">RS-232 device</text><rect x="700" y="304" width="270" height="180" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><rect x="815" y="346" width="130" height="84" rx="8" fill="#23262b" stroke="#9aa2ad" stroke-width="1.5"/><rect x="824" y="354" width="112" height="68" rx="3" fill="#12324f" stroke="#12324f" stroke-width="1.5"/><path d="M838 376.0l12 9l-12 9M858 398.0h24" fill="none" stroke="#5df07a" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M805 442.0H955L942 430.0H818Z" fill="#565c65" stroke="#9aa2ad" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/><rect x="30" y="304" width="200" height="180" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 334.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="334" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="334" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="339" text-anchor="end" font-size="14" fill="#e6ebf2">TxD_  2</text><text x="712" y="339" text-anchor="start" font-size="13" fill="#e6ebf2">TxD_</text><rect x="340" y="323" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="339" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">2: TxD_</text><path d="M230 364.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" fill="#e6ebf2">RxD_  3</text><text x="712" y="369" text-anchor="start" font-size="13" fill="#e6ebf2">RxD_</text><rect x="340" y="353" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">3: RxD_</text><path d="M230 394.0H700" fill="none" stroke="#8b949e" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="394" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" fill="#e6ebf2">GND  5</text><text x="712" y="399" text-anchor="start" font-size="13" fill="#e6ebf2">GND</text><rect x="340" y="383" width="220" height="22" rx="11" fill="#8b949e" stroke="#8b949e" stroke-width="1.5"/><text x="450" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#111">5: GND</text><path d="M230 424.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="429" text-anchor="end" font-size="14" fill="#e6ebf2">CTS_  7</text><text x="712" y="429" text-anchor="start" font-size="13" fill="#e6ebf2">CTS_</text><rect x="340" y="413" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="429" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">7: CTS_</text><path d="M230 454.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="454" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="454" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="459" text-anchor="end" font-size="14" fill="#e6ebf2">RTS_  8</text><text x="712" y="459" text-anchor="start" font-size="13" fill="#e6ebf2">RTS_</text><rect x="340" y="443" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="459" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">8: RTS_</text></svg>
  </div>
  <figcaption>Wiring drawn from the original design files. Make connections with all power off. Equipment is drawn as a typical unit, not a specific model.</figcaption>
</figure>
{:/nomarkdown}

1. With all power off, find contact 1 on each connector and check every wire against the [pinout](#pinout).
2. Know the pinout of your RS-232 device.
3. Connect any 3.3 V input only through level conversion you have checked.
4. Apply the settings under [Configuration](#configuration), then power up.

## Configuration {#configuration}

<span id="smoothieware-use"></span>

A UART console setup. Connect the receive path only through level conversion that you have checked.

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

Host Tx reaches DE9 contact 2 through the transceiver, and DE9 contact 3 returns to host Rx. CTS and RTS are converted the same way. Check how your instrument or cable assigns transmit and receive. See the [MAX3232 datasheet](https://www.ti.com/lit/ds/symlink/max3232.pdf).

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 270" role="img" aria-labelledby="xb-historical-gadgeteer-rs232-adapter-path"><title id="xb-historical-gadgeteer-rs232-adapter-path">Host Tx and CTS/RTS then MAX3232 transceiver then DE9, Tx on contact 2. DE9 contact 3 then MAX3232 transceiver then Host Rx.</title><rect x="46" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="186" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Host Tx and CTS/RTS</text><text x="186" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="360" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">MAX3232 transceiver</text><text x="500" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M330.0 70H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 63L358 70L349 77Z" fill="#5fb3ff"/><rect x="674" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="814" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">DE9</text><text x="814" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2">Tx on contact 2</text><path d="M644.0 70H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 63L672 70L663 77Z" fill="#5fb3ff"/><rect x="46" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="186" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">DE9 contact 3</text><text x="186" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="360" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="500" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">MAX3232 transceiver</text><text x="500" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M330.0 198H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 191L358 198L349 205Z" fill="#5fb3ff"/><rect x="674" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="814" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Host Rx</text><text x="814" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M644.0 198H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 191L672 198L663 205Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board, one path per row.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>No data</td><td>Swap check: confirm DE9 contacts 2 and 3 against the other device, and match baud rate and framing.</td></tr>
    <tr><td>Handshake ignored</td><td>The Smoothieware UART driver does not use hardware flow control.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="https://github.com/Ccecil/GDGT_RS232/blob/00cfe55d207b54cdbec19a07337f7cd58e95e8ef/RS232_GDGT.kicad_pcb">selected original circuit</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Smoothieware/SmoothieV2/tree/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src">SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/GDGT_RS232">Ccecil upstream project</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/GDGT_RS232/tree/00cfe55d207b54cdbec19a07337f7cd58e95e8ef">Pinned original source</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/GDGT_RS232/blob/00cfe55d207b54cdbec19a07337f7cd58e95e8ef/README.md">Original README.md</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/GDGT_RS232/blob/00cfe55d207b54cdbec19a07337f7cd58e95e8ef/RS232_GDGT.kicad_sch">Original RS232_GDGT.kicad_sch</a></td><td>Design source</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

Outline and holes from the original board file. Millimetres, seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-s232-adapter-mount-t">
  <title id="xb-s232-adapter-mount-t">Mounting drawing of the historical-gadgeteer-rs232-adapter, component side: outline 40 by 40 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="310.0" y="78.0" width="340.0" height="340.0" rx="25.5" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M310.0 56H650.0"/><path d="M310.0 50V62"/><path d="M650.0 50V62"/><path d="M676.0 78.0V418.0"/><path d="M670.0 78.0h12"/><path d="M670.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">40</text>
  <text x="688.0" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">40</text>
  <circle cx="310.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="298.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M252.0 104.0h30" fill="none"/><path d="M286.0 104.0l-8 -4v8z"/><path d="M252.0 104.0v30" fill="none"/><path d="M252.0 138.0l-4 -8h8z"/></g>
  <text x="290.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="248.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="480.0" cy="120.5" r="13.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M462.4 120.5h35.2M480.0 102.9v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="493.6" y="154.1" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  20.00, 5.00</text>
  <circle cx="601.6" cy="138.3" r="13.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M584.0 138.3h35.2M601.6 120.8v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="615.2" y="171.9" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  34.31, 7.10</text>
  <circle cx="601.6" cy="350.9" r="13.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M584.0 350.9h35.2M601.6 333.2v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="615.2" y="327.2" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  34.31, 32.10</text>
  <circle cx="480.0" cy="375.5" r="13.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M462.4 375.5h35.2M480.0 357.9v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="493.6" y="351.9" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  20.00, 35.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 40 × 40&nbsp;mm, corners rounded to a 3&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>20.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>34.31</td><td>7.10</td><td>3.2&nbsp;mm, plated</td><td>D-sub connector fixing</td></tr>
    <tr><td>3</td><td>34.31</td><td>32.10</td><td>3.2&nbsp;mm, plated</td><td>D-sub connector fixing</td></tr>
    <tr><td>4</td><td>20.00</td><td>35.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Only what the design source states or the circuit fixes. Blank cells are not specified.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Transceiver supply</td><td>U2 pin 16</td><td>—</td><td>5 V</td><td>—</td><td>Design file connection</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Design source {#origin}

Designed by Chris Cecil: [original design files](https://github.com/Ccecil/GDGT_RS232/tree/00cfe55d207b54cdbec19a07337f7cd58e95e8ef). It was drawn for the Smoothieboard V2 Gadgeteer era; check every connection against your own controller.
See all boards on the [extension boards](/extension-boards) page.
