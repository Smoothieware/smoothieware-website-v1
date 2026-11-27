---
layout: default
title: "Raspberry Pi Zero carrier with Ethernet"
description: "Raspberry Pi Zero carrier with Ethernet: pinout, power domains and serial console."
permalink: /extensions/historical-raspberry-pi-zero-ethernet
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Computer</p>
    <h1 id="historical-raspberry-pi-zero-ethernet">Raspberry Pi Zero carrier with Ethernet</h1>
    <p class="xb-lead">Carries a Raspberry Pi Zero next to a controller, with a regulator and serial activity indicators, plus an SPI Ethernet port for the Pi.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/historical-raspberry-pi-zero-ethernet/historical-raspberry-pi-zero-ethernet-diagram.png" alt="Top view of the Raspberry Pi Zero carrier with Ethernet board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>Pi Zero</b><span>computer</span></div>
  <div class="xb-stat"><b>40</b><span>Pi contacts</span></div>
  <div class="xb-stat"><b>R-78HB5.0</b><span>regulator</span></div>
  <div class="xb-stat"><b>ENC28J60</b><span>Ethernet controller</span></div>
  <div class="xb-stat"><b>65.6 × 49.5 mm</b><span>board size</span></div>
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
  <b>The Pi and the controller sides have separate supply rails.</b> Check the power connections and the serial direction before connecting either computer. The Ethernet controller is powered from the host connector and serves the Pi, not Smoothieware. This is a historical Smoothieboard2 design, not a current board.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>Companion computer carrier</td></tr>
    <tr><td>Pi connector</td><td>P3, 40 contacts; P2 and P5 break out its rows</td></tr>
    <tr><td>Host connector</td><td>P4</td></tr>
    <tr><td>Power input</td><td>P1: ground, regulator input</td></tr>
    <tr><td>Regulator</td><td>U1, R-78HB5.0-0.5L</td></tr>
    <tr><td>Ethernet</td><td>U2 ENC28J60 on the Pi SPI bus, jack CON1</td></tr>
    <tr><td>Size</td><td>65.635 × 49.5 mm</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/historical-raspberry-pi-zero-ethernet/historical-raspberry-pi-zero-ethernet-diagram.png" alt="Annotated top view of the Raspberry Pi Zero carrier with Ethernet board">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:12.8%;top:9.6%" aria-label="1: Pi connector">1<span class="xb-pop"><b>Pi connector</b> — 40 contacts.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-2" style="left:93.0%;top:29.9%" aria-label="2: Host connector">2<span class="xb-pop"><b>Host connector</b> — Serial and supplies.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-3" style="left:7.4%;top:34.5%" aria-label="3: Power input">3<span class="xb-pop"><b>Power input</b> — Regulator supply.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:45.2%;top:45.5%" aria-label="4: Regulator">4<span class="xb-pop"><b>Regulator</b> — 5 V output.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:37.8%;top:93.7%" aria-label="5: Serial LED 1">5<span class="xb-pop"><b>Serial LED 1</b> — Activity.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:40.7%;top:93.7%" aria-label="6: Serial LED 2">6<span class="xb-pop"><b>Serial LED 2</b> — Activity.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:51.2%;top:75.7%" aria-label="7: ENC28J60">7<span class="xb-pop"><b>ENC28J60</b> — Ethernet controller.</span></a>
      <a class="xb-mk xb-pr" href="#tour-8" style="left:83.3%;top:79.3%" aria-label="8: Ethernet jack">8<span class="xb-pop"><b>Ethernet jack</b> — For the Pi.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Pi connector</b> — 40 contacts.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Host connector</b> — Serial and supplies.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Power input</b> — Regulator supply.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Regulator</b> — 5 V output.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Serial LED 1</b> — Activity.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Serial LED 2</b> — Activity.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>ENC28J60</b> — Ethernet controller.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Ethernet jack</b> — For the Pi.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

<span id="connect-and-try-it"></span>

### Power input P1

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>P1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>GND</code></td></tr>
    <tr><td>2</td><td>joined to C1 pad 1, U1 pad 1</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Host connector P4

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>P4 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+3V3</code></td></tr>
    <tr><td>2</td><td>joined to D2 pad 2</td></tr>
    <tr><td>3</td><td><code>GPIO019</code></td></tr>
    <tr><td>4</td><td><code>HTXSRX</code></td></tr>
    <tr><td>5</td><td><code>HRXSTX</code></td></tr>
    <tr><td>6</td><td><code>GPIO021</code></td></tr>
    <tr><td>7</td><td><code>GPIO026</code></td></tr>
    <tr><td>8</td><td>not connected</td></tr>
    <tr><td>9</td><td>not connected</td></tr>
    <tr><td>10</td><td><code>GND</code></td></tr>
    <tr><td>11</td><td>not connected</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Pi connector P3

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>P3 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>3v3-pi</code></td></tr>
    <tr><td>2</td><td><code>+5V</code></td></tr>
    <tr><td>3</td><td><code>GPIO02</code></td></tr>
    <tr><td>4</td><td><code>+5V</code></td></tr>
    <tr><td>5</td><td><code>GPIO03</code></td></tr>
    <tr><td>6</td><td><code>Ground</code></td></tr>
    <tr><td>7</td><td><code>GPIO04</code></td></tr>
    <tr><td>8</td><td><code>HTXSRX</code></td></tr>
    <tr><td>9</td><td><code>Ground</code></td></tr>
    <tr><td>10</td><td><code>HRXSTX</code></td></tr>
    <tr><td>11</td><td><code>GPIO017</code></td></tr>
    <tr><td>12</td><td><code>GPIO018</code></td></tr>
    <tr><td>13</td><td><code>GPIO027</code></td></tr>
    <tr><td>14</td><td><code>Ground</code></td></tr>
    <tr><td>15</td><td><code>GPIO022</code></td></tr>
    <tr><td>16</td><td><code>GPIO023</code></td></tr>
    <tr><td>17</td><td><code>3v3-pi</code></td></tr>
    <tr><td>18</td><td><code>GPIO024</code></td></tr>
    <tr><td>19</td><td><code>MOSI</code></td></tr>
    <tr><td>20</td><td><code>Ground</code></td></tr>
    <tr><td>21</td><td><code>MISO</code></td></tr>
    <tr><td>22</td><td><code>CS</code></td></tr>
    <tr><td>23</td><td><code>SCK</code></td></tr>
    <tr><td>24</td><td><code>GPIO08</code></td></tr>
    <tr><td>25</td><td><code>Ground</code></td></tr>
    <tr><td>26</td><td><code>GPIO07</code></td></tr>
    <tr><td>27</td><td><code>ID_SD</code></td></tr>
    <tr><td>28</td><td><code>ID_SC</code></td></tr>
    <tr><td>29</td><td><code>GPIO05</code></td></tr>
    <tr><td>30</td><td><code>Ground</code></td></tr>
    <tr><td>31</td><td><code>GPIO06</code></td></tr>
    <tr><td>32</td><td><code>GPIO012</code></td></tr>
    <tr><td>33</td><td><code>GPIO013</code></td></tr>
    <tr><td>34</td><td><code>Ground</code></td></tr>
    <tr><td>35</td><td><code>GPIO019</code></td></tr>
    <tr><td>36</td><td><code>GPIO016</code></td></tr>
    <tr><td>37</td><td><code>GPIO026</code></td></tr>
    <tr><td>38</td><td><code>GPIO020</code></td></tr>
    <tr><td>39</td><td><code>Ground</code></td></tr>
    <tr><td>40</td><td><code>GPIO021</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Carrier board</b><span>Built from the design files</span></div>
  <div class="xb-card"><b>Raspberry Pi Zero</b><span>With headers</span></div>
  <div class="xb-card"><b>Power supply</b><span>Within the regulator rating</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

The minimum wiring first, then the order to do it in. Facts about each contact are in the [pinout](#pinout).

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 472" role="img" aria-labelledby="xb-historical-raspberry-pi-zero-ethernet-wire"><title id="xb-historical-raspberry-pi-zero-ethernet-wire">Wiring: P1 contact 1 to GND; P1 contact 2 to positive input.</title><image href="/images/extensions/historical-raspberry-pi-zero-ethernet/historical-raspberry-pi-zero-ethernet-diagram.png" x="352" y="14" width="295" height="230"/><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">P1 on this board</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Power supply</text><rect x="700" y="304" width="270" height="150" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><rect x="810" y="334" width="140" height="90" rx="8" fill="#d3d3d3" stroke="#3f3f3f" stroke-width="1.5"/><rect x="824" y="345" width="112" height="34" rx="3" fill="#141414" stroke="#141414" stroke-width="1.5"/><text x="880" y="369" text-anchor="middle" font-size="18" fill="#5df07a">00.0 V</text><circle cx="840" cy="401" r="11" fill="#303030" stroke="#0d0f12" stroke-width="1.5"/><circle cx="894" cy="401" r="8" fill="#c0262c" stroke="#0d0f12" stroke-width="1.5"/><circle cx="924" cy="401" r="8" fill="#262626" stroke="#0d0f12" stroke-width="1.5"/><rect x="30" y="304" width="200" height="150" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 364.0H700" fill="none" stroke="#939393" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="364" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" fill="#eaeaea">  1</text><text x="712" y="369" text-anchor="start" font-size="13" fill="#eaeaea">GND</text><rect x="340" y="353" width="220" height="22" rx="11" fill="#939393" stroke="#939393" stroke-width="1.5"/><text x="450" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#111">1: GND</text><path d="M230 394.0H700" fill="none" stroke="#f2d024" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#f2d024" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="394" r="5" fill="#f2d024" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" fill="#eaeaea">  2</text><text x="712" y="399" text-anchor="start" font-size="13" fill="#eaeaea">positive input</text><rect x="340" y="383" width="220" height="22" rx="11" fill="#f2d024" stroke="#f2d024" stroke-width="1.5"/><text x="450" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#111">2: positive input</text></svg>
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
    <p>Keep the supply within the regulator rating and fit a Raspberry Pi Zero with headers.</p>
  </li>
  <li class="xb-step">
    <h3>Configure and power up</h3>
    <p>Apply the settings under <a href="#configuration">Configuration</a>, then power up.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

<span id="smoothieware-use"></span>

A UART console on the controller side. Check logic levels and wiring first.

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

The regulator makes 5 V for the Pi. The Pi serial pins (contacts 8 and 10) reach host connector contacts 4 and 5, with indicator LEDs.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 270" role="img" aria-labelledby="xb-historical-raspberry-pi-zero-ethernet-path"><title id="xb-historical-raspberry-pi-zero-ethernet-path">Supply then Regulator, 5 V then Raspberry Pi. Pi pins 8 and 10 then Indicator LEDs then Host connector contacts 4 and 5.</title><rect x="46" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="186" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Supply</text><text x="186" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><rect x="360" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Regulator</text><text x="500" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3">5 V</text><path d="M330.0 70H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 63L358 70L349 77Z" fill="#5fb3ff"/><rect x="674" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="814" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Raspberry Pi</text><text x="814" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M644.0 70H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 63L672 70L663 77Z" fill="#5fb3ff"/><rect x="46" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="186" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Pi pins 8 and 10</text><text x="186" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><rect x="360" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="500" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Indicator LEDs</text><text x="500" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M330.0 198H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 191L358 198L349 205Z" fill="#5fb3ff"/><rect x="674" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="814" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Host connector contacts 4 and 5</text><text x="814" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M644.0 198H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 191L672 198L663 205Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board, one path per row.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Pi does not start</td><td>Check the regulator input and output.</td></tr>
    <tr><td>No serial data</td><td>Cross transmit and receive and share the correct ground.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/RPi%20zero%20with%20ethernet">original Smoothieboard2 source files</a></td><td>Design source</td></tr>
    <tr><td><a href="/images/extensions/historical-raspberry-pi-zero-ethernet/guides/native-contact-reference/native-source-and-notices.zip">Download the design files, upstream licence and drawing notice</a></td><td>Download</td></tr>
    <tr><td><a href="https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/Consoles.cpp#L515-L520">console task after startup</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/Consoles.cpp#L733-L761">console parser</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/CommandShell.cpp#L1485-L1505">version command</a></td><td>Design source</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

Outline and holes from the original board file. Millimetres, seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-ero-ethernet-mount-t">
  <title id="xb-ero-ethernet-mount-t">Mounting drawing of the historical-raspberry-pi-zero-ethernet, component side: outline 65.64 by 49.5 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="254.6" y="78.0" width="450.8" height="340.0" rx="24.0" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M254.6 56H705.4"/><path d="M254.6 50V62"/><path d="M705.4 50V62"/><path d="M731.4 78.0V418.0"/><path d="M725.4 78.0h12"/><path d="M725.4 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">65.64</text>
  <text x="743.4" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">49.5</text>
  <circle cx="254.6" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="242.6" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M196.6 104.0h30" fill="none"/><path d="M230.6 104.0l-8 -4v8z"/><path d="M196.6 104.0v30" fill="none"/><path d="M196.6 138.0l-4 -8h8z"/></g>
  <text x="234.6" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="192.6" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="278.6" cy="102.0" r="11.0" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M263.6 102.0h30.0M278.6 87.1v30.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="267.6" y="133.0" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  3.50, 3.50</text>
  <circle cx="677.0" cy="102.0" r="11.0" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M662.0 102.0h30.0M677.0 87.1v30.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="688.0" y="133.0" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  61.50, 3.50</text>
  <circle cx="278.6" cy="260.0" r="11.0" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M263.6 260.0h30.0M278.6 245.0v30.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="267.6" y="239.0" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">3</tspan>  3.50, 26.50</text>
  <circle cx="677.0" cy="260.0" r="11.0" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M662.0 260.0h30.0M677.0 245.0v30.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="688.0" y="239.0" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">4</tspan>  61.50, 26.50</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 65.64 × 49.5&nbsp;mm, corners rounded to a 3.5&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>3.50</td><td>3.50</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>61.50</td><td>3.50</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>3.50</td><td>26.50</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>61.50</td><td>26.50</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
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

Related boards, each with its own pinout and limits: [Raspberry Pi Zero carrier interface](/extensions/historical-raspberry-pi-zero-interface), [Raspberry Pi Zero breakout](/extensions/raspberry-pi-zero-breakout).

## Design source {#origin}

This board comes from the [original design files](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/RPi%20zero%20with%20ethernet). It was drawn for an earlier controller generation than Smoothieboard V2 Prime; match connections contact by contact.
See all boards on the [extension boards](/extension-boards) page.
