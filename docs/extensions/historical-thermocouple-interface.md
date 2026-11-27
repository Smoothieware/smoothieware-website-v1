---
layout: default
title: "K-type thermocouple interface"
description: "MAX31855 K-type thermocouple board: pinout and Smoothieware configuration."
permalink: /extensions/historical-thermocouple-interface
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Temperature</p>
    <h1 id="historical-thermocouple-interface">K-type thermocouple interface</h1>
    <p class="xb-lead">Reads a K-type thermocouple with a MAX31855 and reports the temperature over SPI.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/historical-thermocouple-interface/historical-thermocouple-interface-diagram.png" alt="Top view of the K-type thermocouple interface board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>MAX31855</b><span>converter</span></div>
  <div class="xb-stat"><b>K type</b><span>thermocouple</span></div>
  <div class="xb-stat"><b>SPI</b><span>read only</span></div>
  <div class="xb-stat"><b>3.3 V</b><span>supply</span></div>
  <div class="xb-stat"><b>28 × 28 mm</b><span>board size</span></div>
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
  <b>For K-type thermocouples only,</b> not thermistors or PT100 sensors. Power the chip from 3.3 V. This is a historical Smoothieboard2 design, not a current board.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>Thermocouple to SPI converter</td></tr>
    <tr><td>Probe terminal</td><td>P1</td></tr>
    <tr><td>Host connector</td><td>P2</td></tr>
    <tr><td>Series diodes</td><td>D1 on chip select, D2 on clock</td></tr>
    <tr><td>Size</td><td>28 × 28 mm</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/historical-thermocouple-interface/historical-thermocouple-interface-diagram.png" alt="Annotated top view of the K-type thermocouple interface board">
      <a class="xb-mk" href="#tour-1" style="left:26.5%;top:50.0%" aria-label="1: Probe terminal">1<span class="xb-pop"><b>Probe terminal</b> — K-type thermocouple.</span></a>
      <a class="xb-mk xb-pr" href="#tour-2" style="left:81.4%;top:50.0%" aria-label="2: Host connector">2<span class="xb-pop"><b>Host connector</b> — Supply and SPI.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:51.0%;top:50.0%" aria-label="3: MAX31855">3<span class="xb-pop"><b>MAX31855</b> — Converter.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:59.4%;top:68.8%" aria-label="4: Diode D1">4<span class="xb-pop"><b>Diode D1</b> — Chip select.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:59.4%;top:32.1%" aria-label="5: Diode D2">5<span class="xb-pop"><b>Diode D2</b> — Clock.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:38.3%;top:62.6%" aria-label="6: Capacitor C1">6<span class="xb-pop"><b>Capacitor C1</b> — Capacitor C1, marked <code>10µF</code> in the board file. Connects to <code>+3V3</code>, <code>GND</code>.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:34.9%;top:50.0%" aria-label="7: Capacitor C2">7<span class="xb-pop"><b>Capacitor C2</b> — Capacitor C2, marked <code>10nF</code> in the board file.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:48.2%;top:67.5%" aria-label="8: Resistor R1">8<span class="xb-pop"><b>Resistor R1</b> — 10 kΩ from <code>+3V3</code> to diode D1.</span></a>
      <a class="xb-mk xb-pl" href="#tour-9" style="left:21.0%;top:83.3%" aria-label="9: Mounting hole">9<span class="xb-pop"><b>Mounting hole</b> — M3; one in each corner.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Probe terminal</b> — K-type thermocouple.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Host connector</b> — Supply and SPI.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>MAX31855</b> — Converter.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Diode D1</b> — Chip select.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Diode D2</b> — Clock.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Capacitor C1</b> — Capacitor C1, marked <code>10µF</code> in the board file. Connects to <code>+3V3</code>, <code>GND</code>.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Capacitor C2</b> — Capacitor C2, marked <code>10nF</code> in the board file.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Resistor R1</b> — 10 kΩ from <code>+3V3</code> to diode D1.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Mounting hole</b> — M3; one in each corner.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

<span id="connect-and-try-it"></span>

### Host connector P2

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>P2 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+3V3</code></td></tr>
    <tr><td>2</td><td>not connected</td></tr>
    <tr><td>3</td><td>not connected</td></tr>
    <tr><td>4</td><td>not connected</td></tr>
    <tr><td>5</td><td>not connected</td></tr>
    <tr><td>6</td><td>chip select (via D1)</td></tr>
    <tr><td>7</td><td>not connected</td></tr>
    <tr><td>8</td><td>data out</td></tr>
    <tr><td>9</td><td>clock (via D2)</td></tr>
    <tr><td>10</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Probe terminal P1

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>P1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>U1 contact 2 (thermocouple −)</td></tr>
    <tr><td>2</td><td>U1 contact 3 (thermocouple +)</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Thermocouple board</b><span>Built from the design files</span></div>
  <div class="xb-card"><b>K-type probe</b><span>Polarity marked</span></div>
  <div class="xb-card"><b>SPI port</b><span>With its own select pin</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

The minimum wiring first, then the order to do it in. Facts about each contact are in the [pinout](#pinout).

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 472" role="img" aria-labelledby="xb-historical-thermocouple-interface-wire"><title id="xb-historical-thermocouple-interface-wire">Wiring: P1 contact 1 to thermocouple −; P1 contact 2 to thermocouple +.</title><image href="/images/extensions/historical-thermocouple-interface/historical-thermocouple-interface-diagram.png" x="385" y="14" width="230" height="230"/><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">P1 on this board</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">K-type probe</text><rect x="700" y="304" width="270" height="150" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><path d="M820 387.0H900M820 371.0H900" fill="none" stroke="#c9c9c9" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="916" cy="379" r="20" fill="#b5251e" stroke="#7d120d" stroke-width="3"/><rect x="30" y="304" width="200" height="150" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 364.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" fill="#eaeaea">  1</text><text x="712" y="369" text-anchor="start" font-size="13" fill="#eaeaea">thermocouple −</text><rect x="340" y="353" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1: thermocouple −</text><path d="M230 394.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" fill="#eaeaea">  2</text><text x="712" y="399" text-anchor="start" font-size="13" fill="#eaeaea">thermocouple +</text><rect x="340" y="383" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">2: thermocouple +</text></svg>
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
    <p>Observe the marked polarity and give the board its own chip-select pin.</p>
  </li>
  <li class="xb-step">
    <h3>Configure and power up</h3>
    <p>Apply the settings under <a href="#configuration">Configuration</a>, then power up.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

<span id="smoothieware-use"></span>

A monitoring sensor with no heater. Set the SPI channel and select pin to your wiring. See [temperature control](/temperaturecontrol). Syntax checked against firmware commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`.

```ini
[temperature control]
tc_monitor.enable = true
tc_monitor.sensor = max31855
tc_monitor.spi_channel = 0
tc_monitor.spi_select_pin = PD15
tc_monitor.readings_per_second = 20
tc_monitor.heater_pin = nc
tc_monitor.designator = TC
```

## How it works {#how-it-works}

The MAX31855 amplifies and digitises the thermocouple voltage and compensates for the board temperature. Clock and chip select pass through diodes. See the [MAX31855 datasheet](https://www.analog.com/media/en/technical-documentation/data-sheets/max31855.pdf): 3.0–3.6 V supply.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 270" role="img" aria-labelledby="xb-historical-thermocouple-interface-path"><title id="xb-historical-thermocouple-interface-path">Thermocouple then MAX31855, digitises, compensates temperature then Data to controller. Clock and chip select then Through diodes then MAX31855.</title><rect x="46" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="186" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Thermocouple</text><text x="186" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><rect x="360" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">MAX31855</text><text x="500" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3">digitises, compensates temperature</text><path d="M330.0 70H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 63L358 70L349 77Z" fill="#5fb3ff"/><rect x="674" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="814" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Data to controller</text><text x="814" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M644.0 70H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 63L672 70L663 77Z" fill="#5fb3ff"/><rect x="46" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="186" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Clock and chip select</text><text x="186" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><rect x="360" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="500" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Through diodes</text><text x="500" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M330.0 198H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 191L358 198L349 205Z" fill="#5fb3ff"/><rect x="674" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="814" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">MAX31855</text><text x="814" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M644.0 198H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 191L672 198L663 205Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board, one path per row.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Open-circuit fault</td><td>Check the probe and terminal.</td></tr>
    <tr><td>Temperature falls when heated</td><td>Swap the probe wires.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/Thermocouple">original Smoothieboard2 board files</a></td><td>Design source</td></tr>
    <tr><td><a href="/images/extensions/historical-thermocouple-interface/guides/native-contact-reference/native-source-and-notices.zip">Download the board source, upstream licence and drawing notice</a></td><td>Download</td></tr>
    <tr><td><a href="https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/temperaturecontrol/max31855.cpp">V2 application source</a></td><td>Design source</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

Outline and holes from the original board file. Millimetres, seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-le-interface-mount-t">
  <title id="xb-le-interface-mount-t">Mounting drawing of the historical-thermocouple-interface, component side: outline 28 by 28 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="310.0" y="78.0" width="340.0" height="340.0" rx="48.6" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M310.0 56H650.0"/><path d="M310.0 50V62"/><path d="M650.0 50V62"/><path d="M676.0 78.0V418.0"/><path d="M670.0 78.0h12"/><path d="M670.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">28</text>
  <text x="688.0" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">28</text>
  <circle cx="310.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="298.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M252.0 104.0h30" fill="none"/><path d="M286.0 104.0l-8 -4v8z"/><path d="M252.0 104.0v30" fill="none"/><path d="M252.0 138.0l-4 -8h8z"/></g>
  <text x="290.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="248.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="358.6" cy="126.6" r="19.4" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M335.1 126.6h46.9M358.6 103.1v46.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="339.1" y="166.0" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  4.00, 4.00</text>
  <circle cx="601.4" cy="126.6" r="19.4" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M578.0 126.6h46.9M601.4 103.1v46.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="620.9" y="166.0" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  24.00, 4.00</text>
  <circle cx="358.6" cy="369.4" r="19.4" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M335.1 369.4h46.9M358.6 346.0v46.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="339.1" y="340.0" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">3</tspan>  4.00, 24.00</text>
  <circle cx="601.4" cy="369.4" r="19.4" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M578.0 369.4h46.9M601.4 346.0v46.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="620.9" y="340.0" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">4</tspan>  24.00, 24.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 28 × 28&nbsp;mm, corners rounded to a 4&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>4.00</td><td>4.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>24.00</td><td>4.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>4.00</td><td>24.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>24.00</td><td>24.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Only what the design source states or the circuit fixes. Blank cells are not specified.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Supply</td><td>U1</td><td>3.0 V</td><td>3.3 V</td><td>3.6 V</td><td>Manufacturer datasheet</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Related boards, each with its own pinout and limits: [SPI Thermocouple Breakout](/extensions/spi-thermocouple-breakout).

## Design source {#origin}

This board comes from the [original design files](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/Thermocouple). It was drawn for an earlier controller generation than Smoothieboard V2 Prime; match connections contact by contact.
See all boards on the [extension boards](/extension-boards) page.
