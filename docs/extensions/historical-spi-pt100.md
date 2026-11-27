---
layout: default
title: "SPI PT100 interface"
description: "MAX31865 PT100 resistance-sensor board: probe terminals, link options and limits."
permalink: /extensions/historical-spi-pt100
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Temperature</p>
    <h1 id="historical-spi-pt100">SPI PT100 interface</h1>
    <p class="xb-lead">Reads a platinum resistance sensor over SPI with a MAX31865 converter.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/historical-spi-pt100/directory-board-render.png" alt="Top view of the SPI PT100 interface board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>MAX31865</b><span>converter</span></div>
  <div class="xb-stat"><b>SPI</b><span>interface</span></div>
  <div class="xb-stat"><b>400 Ω</b><span>reference</span></div>
  <div class="xb-stat"><b>2-wire</b><span>as listed</span></div>
  <div class="xb-stat"><b>50 × 30 mm</b><span>board size</span></div>
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
  <b>Check the fitted links before wiring a probe.</b> The listed parts select two-wire mode. This reads a PT100 resistance sensor, not a thermocouple. This is a historical Smoothieboard2 design, not a current board.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>RTD to SPI converter</td></tr>
    <tr><td>Host connectors</td><td>P1, P4: 6 select, 7 MOSI, 8 MISO, 9 SCK, 1 supply, 10 ground</td></tr>
    <tr><td>Probe terminals</td><td>P3 and P2</td></tr>
    <tr><td>Reference resistor</td><td>R3, 400 Ω</td></tr>
    <tr><td>Input filter</td><td>C3, 10 nF</td></tr>
    <tr><td>Links</td><td>R2 fitted (0 Ω), R1 not fitted, R4 and R5 select the wiring</td></tr>
    <tr><td>Size</td><td>50 × 30 mm</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/historical-spi-pt100/directory-board-render.png" alt="Annotated top view of the SPI PT100 interface board">
      <a class="xb-mk xb-pl" href="#tour-1" style="left:23.0%;top:50.0%" aria-label="1: Host connector P1">1<span class="xb-pop"><b>Host connector P1</b> — Supply and SPI.</span></a>
      <a class="xb-mk xb-pr" href="#tour-2" style="left:77.0%;top:50.0%" aria-label="2: Host connector P4">2<span class="xb-pop"><b>Host connector P4</b> — Parallel copy.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:57.2%;top:75.3%" aria-label="3: Probe terminal P3">3<span class="xb-pop"><b>Probe terminal P3</b> — FORCE+ and RTDIN+.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:33.8%;top:75.3%" aria-label="4: Probe terminal P2">4<span class="xb-pop"><b>Probe terminal P2</b> — RTDIN− and FORCE−.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:46.0%;top:36.6%" aria-label="5: MAX31865">5<span class="xb-pop"><b>MAX31865</b> — Converter.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:58.5%;top:32.4%" aria-label="6: Resistor R1">6<span class="xb-pop"><b>Resistor R1</b> — Resistor R1, marked <code>NM</code> in the board file.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:58.5%;top:25.4%" aria-label="7: Resistor R2">7<span class="xb-pop"><b>Resistor R2</b> — Resistor R2, marked <code>0</code> in the board file. Connects to <code>GND</code>.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:46.4%;top:51.4%" aria-label="8: Capacitor C1">8<span class="xb-pop"><b>Capacitor C1</b> — Capacitor C1, marked <code>0.1u</code> in the board file. Connects to <code>GND</code>.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host connector P1</b> — Supply and SPI.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Host connector P4</b> — Parallel copy.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Probe terminal P3</b> — FORCE+ and RTDIN+.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Probe terminal P2</b> — RTDIN− and FORCE−.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>MAX31865</b> — Converter.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Resistor R1</b> — Resistor R1, marked <code>NM</code> in the board file.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Resistor R2</b> — Resistor R2, marked <code>0</code> in the board file. Connects to <code>GND</code>.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Capacitor C1</b> — Capacitor C1, marked <code>0.1u</code> in the board file. Connects to <code>GND</code>.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

<span id="connect-and-try-it"></span>

### Host connector P1

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>P1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>supply</td></tr>
    <tr><td>2</td><td>not used</td></tr>
    <tr><td>3</td><td>not used</td></tr>
    <tr><td>4</td><td>not used</td></tr>
    <tr><td>5</td><td>not used</td></tr>
    <tr><td>6</td><td>chip select</td></tr>
    <tr><td>7</td><td>MOSI</td></tr>
    <tr><td>8</td><td>MISO</td></tr>
    <tr><td>9</td><td>SCK</td></tr>
    <tr><td>10</td><td><code>GND</code></td></tr>
    <tr><td>11</td><td>not connected</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

P4 is wired in parallel with P1. Probe terminals: P3.1 FORCE+, P3.2 RTDIN+, P2.1 RTDIN−, P2.2 FORCE−.

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>PT100 board</b><span>Built from the design files</span></div>
  <div class="xb-card"><b>PT100 probe</b><span>Two-wire as listed</span></div>
  <div class="xb-card"><b>SPI port</b><span>With its own select pin</span></div>
</div>
{:/nomarkdown}

## Configuration {#configuration}

<span id="smoothieware-use"></span>

Smoothieware V2 support for the MAX31865 on this board: not specified. A MAX31855 thermocouple setting cannot read it.

## How it works {#how-it-works}

The converter drives a current through the sensor and the reference resistor and reports their ratio. In the listed two-wire population the probe goes between P3 contact 2 and P2 contact 1; leave the other two terminals empty. See the [MAX31865 datasheet](https://www.analog.com/media/en/technical-documentation/data-sheets/MAX31865.pdf).

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 142" role="img" aria-labelledby="xb-historical-spi-pt100-path"><title id="xb-historical-spi-pt100-path">PT100 sensor and reference resistor then MAX31865, drives current, measures ratio then SPI to the controller.</title><rect x="46" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="186" y="56" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">PT100 sensor and reference</text><text x="186" y="74" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">resistor</text><text x="186" y="94" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="360" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">MAX31865</text><text x="500" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2">drives current, measures ratio</text><path d="M330.0 70H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 63L358 70L349 77Z" fill="#5fb3ff"/><rect x="674" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="814" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">SPI to the controller</text><text x="814" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M644.0 70H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 63L672 70L663 77Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Nothing responds</td><td>With power off, check continuity along each lead and board path against the pinout tables. Confirm which end of the connector is contact 1.</td></tr>
    <tr><td>Fault or open reading</td><td>Check probe terminals and the R1, R2, R4, R5 population.</td></tr>
    <tr><td>Offset</td><td>Check the reference resistor value and, in two-wire mode, the lead resistance.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/SPI%20PT100">original Smoothieboard2 source</a></td><td>Design source</td></tr>
    <tr><td><a href="/images/extensions/historical-spi-pt100/guides/native-contact-reference/native-source-and-notices.zip">Download the unmodified native source, upstream licence and drawing notice</a></td><td>Download</td></tr>
    <tr><td><a href="https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/temperaturecontrol/TemperatureControl.cpp#L177-L189">V2 temperature-control factory</a></td><td>Design source</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

Outline and holes from the original board file. Millimetres, seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-al-spi-pt100-mount-t">
  <title id="xb-al-spi-pt100-mount-t">Mounting drawing of the historical-spi-pt100, component side: outline 50 by 30 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="196.7" y="78.0" width="566.7" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M196.7 56H763.3"/><path d="M196.7 50V62"/><path d="M763.3 50V62"/><path d="M789.3 78.0V418.0"/><path d="M783.3 78.0h12"/><path d="M783.3 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">50</text>
  <text x="801.3" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">30</text>
  <circle cx="196.7" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="184.7" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M138.7 104.0h30" fill="none"/><path d="M172.7 104.0l-8 -4v8z"/><path d="M138.7 104.0v30" fill="none"/><path d="M138.7 138.0l-4 -8h8z"/></g>
  <text x="176.7" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="134.7" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="253.3" cy="134.7" r="18.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M231.2 134.7h44.3M253.3 112.5v44.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="235.2" y="172.8" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.00</text>
  <circle cx="706.7" cy="134.7" r="18.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M684.5 134.7h44.3M706.7 112.5v44.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="724.8" y="172.8" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  45.00, 5.00</text>
  <circle cx="253.3" cy="361.3" r="18.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M231.2 361.3h44.3M253.3 339.2v44.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="235.2" y="333.2" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 25.00</text>
  <circle cx="706.7" cy="361.3" r="18.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M684.5 361.3h44.3M706.7 339.2v44.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="724.8" y="333.2" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  45.00, 25.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 50 × 30&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>45.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>5.00</td><td>25.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>45.00</td><td>25.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Only what the design source states or the circuit fixes. Blank cells are not specified.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Reference resistor</td><td>R3</td><td>—</td><td>400 Ω</td><td>—</td><td>Design file value</td></tr>
    <tr><td>Input filter</td><td>C3</td><td>—</td><td>10 nF</td><td>—</td><td>Design file value</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Related boards, each with its own pinout and limits: [SPI PT100 amplifier board](/extensions/spi-pt100-amplifier-board).

## Design source {#origin}

This board comes from the [original design files](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/SPI%20PT100). It was drawn for an earlier controller generation than Smoothieboard V2 Prime; match connections contact by contact.
See all boards on the [extension boards](/extension-boards) page.
