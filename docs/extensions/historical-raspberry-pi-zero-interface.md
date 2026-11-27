---
layout: default
title: "Raspberry Pi Zero carrier interface"
description: "Raspberry Pi Zero carrier interface: pinout, power domains and serial console."
permalink: /extensions/historical-raspberry-pi-zero-interface
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Computer</p>
    <h1 id="historical-raspberry-pi-zero-interface">Raspberry Pi Zero carrier interface</h1>
    <p class="xb-lead">Carries a Raspberry Pi Zero next to a controller, with a regulator and serial activity indicators.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/historical-raspberry-pi-zero-interface/directory-board-render.png" alt="Top view of the Raspberry Pi Zero carrier interface board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>Pi Zero</b><span>computer</span></div>
  <div class="xb-stat"><b>40</b><span>Pi contacts</span></div>
  <div class="xb-stat"><b>R-78HB5.0</b><span>regulator</span></div>
  <div class="xb-stat"><b>2</b><span>serial LEDs</span></div>
  <div class="xb-stat"><b>65.6 × 30 mm</b><span>board size</span></div>
  <div class="xb-stat"><b>4</b><span>mounting holes</span></div>
</div>

<nav class="xb-nav" aria-label="On this page">
  <a href="#specs">Tech specs</a>
  <a href="#tour">Board tour</a>
  <a href="#pinout">Pinout</a>
  <a href="#what-you-need">What you need</a>
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
  <b>The Pi and the controller sides have separate supply rails.</b> Check the power connections and the serial direction before connecting either computer. Do not bridge the two ground domains. This is a historical Smoothieboard2 design, not a current board.
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
    <tr><td>Size</td><td>65.635 × 30 mm</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/historical-raspberry-pi-zero-interface/directory-board-render.png" alt="Annotated top view of the Raspberry Pi Zero carrier interface board">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:16.5%;top:22.5%" aria-label="1: Pi connector">1<span class="xb-pop"><b>Pi connector</b> — 40 contacts.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-2" style="left:88.7%;top:49.5%" aria-label="2: Host connector">2<span class="xb-pop"><b>Host connector</b> — Serial and supplies.</span></a>
      <a class="xb-mk xb-pl" href="#tour-3" style="left:11.7%;top:55.7%" aria-label="3: Power input">3<span class="xb-pop"><b>Power input</b> — Regulator supply.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:45.7%;top:70.3%" aria-label="4: Regulator">4<span class="xb-pop"><b>Regulator</b> — 5 V output.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:70.4%;top:82.0%" aria-label="5: Serial LED 1">5<span class="xb-pop"><b>Serial LED 1</b> — Activity.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:67.8%;top:82.0%" aria-label="6: Serial LED 2">6<span class="xb-pop"><b>Serial LED 2</b> — Activity.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:74.1%;top:82.0%" aria-label="7: Transistor Q1">7<span class="xb-pop"><b>Transistor Q1</b> — Transistor Q1, marked <code>ZXMN4A06GTA</code> in the board file. Connects to <code>GND</code>.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:24.5%;top:48.6%" aria-label="8: Diode D1">8<span class="xb-pop"><b>Diode D1</b> — Diode D1, marked <code>MBRA210LT3G</code> in the board file. Connects to <code>+5V</code>.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Pi connector</b> — 40 contacts.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Host connector</b> — Serial and supplies.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Power input</b> — Regulator supply.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Regulator</b> — 5 V output.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Serial LED 1</b> — Activity.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Serial LED 2</b> — Activity.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Transistor Q1</b> — Transistor Q1, marked <code>ZXMN4A06GTA</code> in the board file. Connects to <code>GND</code>.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Diode D1</b> — Diode D1, marked <code>MBRA210LT3G</code> in the board file. Connects to <code>+5V</code>.</div></li>
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
    <tr><td>1</td><td><code>3v3-smoothie</code></td></tr>
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
    <tr><td>19</td><td><code>GPIO010</code></td></tr>
    <tr><td>20</td><td><code>Ground</code></td></tr>
    <tr><td>21</td><td><code>GPIO09</code></td></tr>
    <tr><td>22</td><td><code>GPIO025</code></td></tr>
    <tr><td>23</td><td><code>GPIO011</code></td></tr>
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
    <tr><td><a href="https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/Rpi-zero">original Smoothieboard2 source</a></td><td>Design source</td></tr>
    <tr><td><a href="/images/extensions/historical-raspberry-pi-zero-interface/guides/native-contact-reference/native-source-and-notices.zip">Download the CAD source, upstream licence and drawing notice</a></td><td>Download</td></tr>
    <tr><td><a href="https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/Consoles.cpp#L733-L761">console parser</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/CommandShell.cpp#L1485-L1505">registered version command</a></td><td>Design source</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

Outline and holes from the original board file. Millimetres, seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 414" role="img" aria-labelledby="xb-ro-interface-mount-t">
  <title id="xb-ro-interface-mount-t">Mounting drawing of the historical-raspberry-pi-zero-interface, component side: outline 65.64 by 30 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="180.0" y="78.0" width="600.0" height="274.2" rx="32.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M180.0 56H780.0"/><path d="M180.0 50V62"/><path d="M780.0 50V62"/><path d="M806.0 78.0V352.2"/><path d="M800.0 78.0h12"/><path d="M800.0 352.2h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">65.64</text>
  <text x="818.0" y="220.1" font-size="15" font-weight="700" fill="#e6ebf2">30</text>
  <circle cx="180.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="168.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M122.0 104.0h30" fill="none"/><path d="M156.0 104.0l-8 -4v8z"/><path d="M122.0 104.0v30" fill="none"/><path d="M122.0 138.0l-4 -8h8z"/></g>
  <text x="160.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="118.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="212.0" cy="110.0" r="14.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M193.4 110.0h37.3M212.0 91.4v37.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="197.4" y="144.6" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  3.50, 3.50</text>
  <circle cx="742.2" cy="110.0" r="14.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M723.6 110.0h37.3M742.2 91.4v37.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="756.8" y="144.6" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  61.50, 3.50</text>
  <circle cx="212.0" cy="320.2" r="14.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M193.4 320.2h37.3M212.0 301.6v37.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="197.4" y="295.6" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  3.50, 26.50</text>
  <circle cx="742.2" cy="320.2" r="14.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M723.6 320.2h37.3M742.2 301.6v37.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="756.8" y="295.6" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  61.50, 26.50</text>
  <text x="480.0" y="382.2" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 65.64 × 30&nbsp;mm, corners rounded to a 3.5&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
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

Related boards, each with its own pinout and limits: [Raspberry Pi Zero carrier with Ethernet](/extensions/historical-raspberry-pi-zero-ethernet), [Raspberry Pi Zero breakout](/extensions/raspberry-pi-zero-breakout).

## Design source {#origin}

This board comes from the [original design files](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/Rpi-zero). It was drawn for an earlier controller generation than Smoothieboard V2 Prime; match connections contact by contact.
See all boards on the [extension boards](/extension-boards) page.
