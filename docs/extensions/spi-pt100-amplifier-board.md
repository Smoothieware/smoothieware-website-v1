---
layout: default
title: "SPI PT100 amplifier board"
description: "A MAX31865 RTD-to-digital board for one PT100 over SPI: pinout, wiring-mode links, 400 ohm reference and electrical specifications."
permalink: /extensions/spi-pt100-amplifier-board
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Temperature</p>
    <h1 id="spi-pt100-amplifier-board">SPI PT100 amplifier board</h1>
    <p class="xb-lead">A MAX31865 converter that reads one PT100 resistance and reports it over SPI, for two-, three- or four-wire sensors. It is not a thermocouple board and not the analogue PT100 amplifier. SmoothieV2 has no driver for this converter.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/spi-pt100-amplifier-board/spi-pt100-amplifier-board-diagram.png" alt="Top view of the SPI PT100 amplifier board: two ten-contact sockets at the top, the converter in the middle and a four-way screw terminal at the bottom.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>MAX31865</b><span>RTD converter with SPI</span></div>
  <div class="xb-stat"><b>2, 3 or 4 wire</b><span>chosen by solder links and converter settings</span></div>
  <div class="xb-stat"><b>400 &Omega;</b><span>reference resistor, not the common 430 &Omega;</span></div>
  <div class="xb-stat"><b>1 light</b><span>red data-ready</span></div>
  <div class="xb-stat"><b>No firmware</b><span>no driver in SmoothieV2</span></div>
  <div class="xb-stat"><b>48 × 40</b><span>millimetres, four M3 holes</span></div>
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
</nav>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  It needs a MAX31865 driver configured for your wiring mode and the 400&nbsp;&Omega; reference, with fault handling and calibration, and SmoothieV2 does not include one. Do not use it in a heater-control loop or rely on it as a temperature readout.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>Read one PT100 resistance digitally over SPI</td></tr>
    <tr><td>Converter</td><td>MAX31865AAP+ with a 400&nbsp;&Omega; 0.1&nbsp;% 25&nbsp;ppm reference resistor (R1)</td></tr>
    <tr><td>Interface</td><td>SPI on J1 contacts 6 to 9: chip select, data in, data out, clock</td></tr>
    <tr><td>Sensor</td><td>Four-way screw terminal J3 (F+, RTD+, RTD&minus;, F&minus;). Wiring mode is set by solder links JP1, JP2 and JP10 and by the converter configuration.</td></tr>
    <tr><td>Sockets</td><td>Two 10-contact Gadgeteer S sockets: J1 IN and J2 CHAIN. Chaining does not allocate an independent chip select.</td></tr>
    <tr><td>Light</td><td>One red light D1 on the data-ready line, with a cut link</td></tr>
    <tr><td>Test points</td><td>Fifteen: grounds, 3.3&nbsp;V, 5&nbsp;V, the four SPI lines, data ready, bias, REFIN&minus;, RTD sense positive and negative (not drawn in the top view)</td></tr>
    <tr><td>Size</td><td>48 &times; 40&nbsp;mm with four M3 mounting holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a></td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix. The analogue alternative is the [simple PT100 amplifier board](/extensions/simple-pt100-amplifier-board).

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side. The mounting holes, test points, solder links and small parts are not all marked on the drawing.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/spi-pt100-amplifier-board/spi-pt100-amplifier-board-diagram.png" alt="Top view of the SPI PT100 amplifier board with eight numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:32.3%;top:13.5%" aria-label="1: host socket">1<span class="xb-pop"><b>Host socket S IN (J1)</b> — the Gadgeteer socket to the controller: supply and the SPI lines. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:68.2%;top:13.5%" aria-label="2: chain socket">2<span class="xb-pop"><b>Chain socket S CHAIN (J2)</b> — a second socket that carries the lines on to the next board. Chip select is not passed on unless link JP6 is closed.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:50%;top:86.6%" aria-label="3: sensor terminal block">3<span class="xb-pop"><b>Sensor terminal block (J3)</b> — four screw terminals: force+, sense+ (RTD+), sense&minus; (RTD&minus;) and force&minus;.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:50.5%;top:47.6%" aria-label="4: converter">4<span class="xb-pop"><b>RTD converter (U1)</b> — a MAX31865 that excites the sensor, measures it and reports over SPI.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-5" style="left:20.5%;top:42.4%" aria-label="5: ready light">5<span class="xb-pop"><b>Data-ready light (D1)</b> — a red light on the converter&rsquo;s data-ready line. Cut JP12 to disable it.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-6" style="left:20.5%;top:33.5%" aria-label="6: ready link">6<span class="xb-pop"><b>Data-ready link (JP11)</b> — an open solder link that would route the data-ready line to host contact 3.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:58.2%;top:58.4%" aria-label="7: wiring-mode links">7<span class="xb-pop"><b>Wiring-mode links (JP10, JP1, JP2)</b> — JP10 (F2) selects the force-2 connection for the three-wire mode; JP1 and JP2 are the two-wire links. The links are not drawn.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:50%;top:33.3%" aria-label="8: chain link row">8<span class="xb-pop"><b>Chain link row (JP3 to JP9)</b> — solder links, marked 3 to 9 on the silk, that pass the host lines through to the chain socket.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host socket S IN (J1)</b> — the Gadgeteer socket to the controller: supply and the SPI lines. <i>See the pinout.</i></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket S CHAIN (J2)</b> — a second socket that carries the lines on to the next board. Chip select is not passed on unless link JP6 is closed.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Sensor terminal block (J3)</b> — four screw terminals: force+, sense+ (RTD+), sense&minus; (RTD&minus;) and force&minus;.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>RTD converter (U1)</b> — a MAX31865 that excites the sensor, measures it and reports over SPI.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Data-ready light (D1)</b> — a red light on the converter&rsquo;s data-ready line. Cut JP12 to disable it.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Data-ready link (JP11)</b> — an open solder link that would route the data-ready line to host contact 3.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Wiring-mode links (JP10, JP1, JP2)</b> — JP10 (F2) selects the force-2 connection for the three-wire mode; JP1 and JP2 are the two-wire links. The links are not drawn.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Chain link row (JP3 to JP9)</b> — solder links, marked 3 to 9 on the silk, that pass the host lines through to the chain socket.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1: host socket (S IN) and J2: chain socket (S CHAIN)

Contact 1 is next to the white dot beside each socket in the tour, at the left end of the lower row. The odd contacts are in the lower row and the even contacts in the upper row.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>J1 (from the controller)</th><th>J2 (to the next board)</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td><span class="xb-pill xb-p-3v3">3.3 V</span> passed on</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td><span class="xb-pill xb-p-5v">5 V</span> passed on</td></tr>
    <tr><td>3, 4, 5</td><td><span class="xb-pill xb-p-sig">P3, P4, P5</span> general lines</td><td>Chain lines P3 to P5</td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">CS</span> chip select (active low)</td><td>Chain line P6</td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-sig">MOSI</span> data to the converter</td><td>Chain MOSI</td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">MISO</span> data from the converter</td><td>Chain MISO</td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">SCK</span> clock</td><td>Chain SCK</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td><span class="xb-pill xb-p-gnd">GND</span> passed on</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J3: PT100 terminal block

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Terminal</th><th>Function</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>F+ force positive</td></tr>
    <tr><td>2</td><td>RTD+ sense positive</td></tr>
    <tr><td>3</td><td>RTD&minus; sense negative</td></tr>
    <tr><td>4</td><td>F&minus; force negative</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

No wiring mode is selected by the connector alone: two-, three- and four-wire use each need the matching links and converter configuration.

### Solder links and test points

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>Effect</th><th>Default</th></tr></thead>
  <tbody>
    <tr><td>JP1 (2W)</td><td>Joins F+ to RTD+</td><td>Open</td></tr>
    <tr><td>JP2 (2W/3W)</td><td>Joins RTD&minus; to F&minus;</td><td>Open</td></tr>
    <tr><td>JP10 (F2)</td><td>3 pads: 1&ndash;2 grounds the second force line (two- and four-wire); 2&ndash;3 joins it to F+ (three-wire, with a matching converter setting)</td><td>Pads 1&ndash;2 joined</td></tr>
    <tr><td>JP11 (DRDY&gt;P3)</td><td>Routes the data-ready line to host contact 3</td><td>Open</td></tr>
    <tr><td>JP12</td><td>Cut to disable the data-ready light</td><td>Bridged</td></tr>
    <tr><td>JP3, JP6</td><td>Chain lines P3 and P6 (the P6 line carries chip select)</td><td>Open</td></tr>
    <tr><td>JP4, JP5, JP7, JP8, JP9</td><td>Chain lines P4, P5, MOSI, MISO, SCK</td><td>Bridged</td></tr>
  </tbody>
</table></div>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Test point</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>TP1 to TP4</td><td>Ground</td></tr>
    <tr><td>TP5, TP6</td><td>3.3&nbsp;V, 5&nbsp;V</td></tr>
    <tr><td>TP7 to TP10</td><td>Chip select, MOSI, MISO, clock</td></tr>
    <tr><td>TP11</td><td>Data ready</td></tr>
    <tr><td>TP12, TP13</td><td>Bias, REFIN&minus;</td></tr>
    <tr><td>TP14, TP15</td><td>RTD sense positive, sense negative</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>The MAX31865 amplifier board.</span></div>
  <div class="xb-card"><b>A PT100</b><span>With its wiring mode and lead pairs identified from its data sheet or by continuity.</span></div>
  <div class="xb-card"><b>Six host wires</b><span>3.3&nbsp;V, chip select, MOSI, MISO, clock and ground.</span></div>
  <div class="xb-card"><b>A driver</b><span>Matching converter firmware for the 400&nbsp;&Omega; reference. SmoothieV2 does not include one.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Choose the wiring mode</h3>
    <p>Four-wire is the example here: keep JP10 pads 1&ndash;2 joined and leave JP1 and JP2 open. For three-wire, open the JP10 bridge and join pads 2&ndash;3 with a matching converter setting. Match the links to the sensor before wiring.</p>
  </li>
  <li class="xb-step">
    <h3>Wire the controller</h3>
    <p>With everything unpowered, connect Prime header GE (J36) contacts 1, 6, 7, 8, 9 and 10 to J1 contacts 1, 6, 7, 8, 9 and 10: 3.3&nbsp;V, chip select on PD15, data out, data in, clock and ground. Leave 5&nbsp;V, the other contacts and J2 unconnected.</p>
    <p class="xb-expect">Check numbered continuity, the connector orientation and the rail current available first. Check the Prime rail positions too; see the electrical appendix.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the sensor</h3>
    <p>Run four separate conductors from J3 terminals 1 to 4 (F+, RTD+, RTD&minus;, F&minus;) to the element. The force and sense pairs meet only at the element; do not add local links across J3 in four-wire mode.</p>
  </li>
  <li class="xb-step">
    <h3>Stop at the bench</h3>
    <p>Without a driver there is nothing to read. Do not attach a sensor to a live tool or a heater with this board.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>A temperature from this board</td><td>None in SmoothieV2</td><td>Not supported</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

SmoothieV2 selects only <code>thermistor</code> or <code>max31855</code> in its [temperature factory](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/temperaturecontrol/TemperatureControl.cpp#L177-L193). Any other name creates a dummy sensor, so setting a MAX31865 sensor name does not enable this converter, and the thermocouple driver does not work with it. There is no MAX31865 implementation, so no settings are given.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 170" role="img" aria-labelledby="xb-how-t">
    <title id="xb-how-t">A PT100 on the screw terminal is excited and measured by the MAX31865 against a 400 ohm reference, and the result is read over SPI on the host socket.</title>
    <g font-size="13" font-weight="700" text-anchor="middle" fill="#e6ebf2">
      <rect x="20" y="55" width="150" height="60" rx="8" fill="#1f2226" stroke="#dfe4ee"/><text x="95" y="80">J3</text><text x="95" y="100" font-weight="400" fill="#a9b4c2">PT100</text>
      <rect x="215" y="55" width="160" height="60" rx="8" fill="#212936" stroke="#e0a877"/><text x="295" y="80">Links</text><text x="295" y="100" font-weight="400" fill="#a9b4c2">JP1, JP2, JP10</text>
      <rect x="420" y="55" width="170" height="60" rx="8" fill="#212936" stroke="#6fe08a"/><text x="505" y="80">MAX31865</text><text x="505" y="100" font-weight="400" fill="#a9b4c2">400 &#937; reference</text>
      <rect x="635" y="55" width="150" height="60" rx="8" fill="#212936" stroke="#5fb3ff"/><text x="710" y="80">SPI</text><text x="710" y="100" font-weight="400" fill="#a9b4c2">CS, MOSI, MISO, SCK</text>
      <rect x="830" y="55" width="150" height="60" rx="8" fill="#1f2226" stroke="#dfe4ee"/><text x="905" y="80">J1</text><text x="905" y="100" font-weight="400" fill="#a9b4c2">host</text>
    </g>
    <g stroke-width="3" fill="none" stroke="#a9b4c2"><path d="M170 85H215"/><path d="M375 85H420"/><path d="M590 85H635"/><path d="M785 85H830"/></g>
  </svg>
  </div>
  <figcaption>The converter compares the sensor with the reference resistor and returns a digital value over SPI.</figcaption>
</figure>
{:/nomarkdown}

J3 brings out the force and sense contacts; the MAX31865 exchanges configuration, data and faults over SPI on J1 contacts 6 to 9. J2 carries chain paths: the chip-select path is open by default, so daisy-chaining does not give a following board its own chip select. The reference resistor is 400&nbsp;&Omega;, so a driver written for a 430&nbsp;&Omega; module needs this value. Excitation and self-heating depend on the sensor and the converter configuration.

{% include _includes/temperature-board-comparison.html %}

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-red"></span>DRDY (D1)</th></tr></thead>
  <tbody>
    <tr><td>Where</td><td>Upper left, below the J1 socket</td></tr>
    <tr><td>Lit means</td><td>The data-ready line is active (low); its timing depends on the converter configuration</td></tr>
    <tr><td>Disable it</td><td>Cut JP12</td></tr>
  </tbody>
</table></div>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>No SPI answer</td><td>3.3&nbsp;V at TP5, chip select at TP7, and the host wiring of J1 contacts 6 to 9.</td></tr>
    <tr><td>Reading wrong by a constant ratio</td><td>The driver assumes a different reference resistor; this board uses 400&nbsp;&Omega;.</td></tr>
    <tr><td>Fault or open-sensor reports</td><td>Wiring mode links do not match the sensor; JP1, JP2 and JP10 positions; lead continuity.</td></tr>
    <tr><td>A following chained board does not answer</td><td>Chip select is not passed on by default (JP6 open).</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/spi-pt100-amplifier-board/spi-pt100-amplifier-board-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram.</td></tr>
    <tr><td><a href="/images/extensions/spi-pt100-amplifier-board/spi-pt100-amplifier-board-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/spi-pt100-amplifier-board/spi-pt100-amplifier-board-diagram.png">Board drawing (SVG)</a></td><td>The top view used on this page, at full resolution</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-sp2-mount-t">
  <title id="xb-sp2-mount-t">Mounting drawing of the SPI PT100 amplifier board, component side: outline 48 by 40 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="276.0" y="78.0" width="408.0" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M276.0 56H684.0"/><path d="M276.0 50V62"/><path d="M684.0 50V62"/><path d="M710.0 78.0V418.0"/><path d="M704.0 78.0h12"/><path d="M704.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">48</text>
  <text x="722.0" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">40</text>
  <circle cx="276.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="264.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M218.0 104.0h30" fill="none"/><path d="M252.0 104.0l-8 -4v8z"/><path d="M218.0 104.0v30" fill="none"/><path d="M218.0 138.0l-4 -8h8z"/></g>
  <text x="256.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="214.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="310.0" cy="163.0" r="13.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M292.4 163.0h35.2M310.0 145.4v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="296.4" y="196.6" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  4.00, 10.00</text>
  <circle cx="650.0" cy="163.0" r="13.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M632.4 163.0h35.2M650.0 145.4v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="663.6" y="196.6" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  44.00, 10.00</text>
  <circle cx="310.0" cy="333.0" r="13.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M292.4 333.0h35.2M310.0 315.4v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="296.4" y="309.4" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  4.00, 30.00</text>
  <circle cx="650.0" cy="333.0" r="13.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M632.4 333.0h35.2M650.0 315.4v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="663.6" y="309.4" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  44.00, 30.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 48 × 40&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>4.00</td><td>10.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>44.00</td><td>10.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>4.00</td><td>30.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>44.00</td><td>30.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>

{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Every figure is a design value or a value from the parts list, as the last column says.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Logic supply</td><td>J1 contact 1</td><td>—</td><td>3.3 V</td><td>—</td><td>Supplied by the host</td></tr>
    <tr><td>Reference resistor</td><td>R1</td><td>—</td><td>400 &Omega;, 0.1&nbsp;%, 25&nbsp;ppm</td><td>—</td><td>Parts list</td></tr>
    <tr><td>SPI clock rate, mode</td><td>J1 contacts 6 to 9</td><td>—</td><td>—</td><td>—</td><td>Set by the converter data sheet and the driver</td></tr>
    <tr><td>Sensor excitation and self-heating</td><td>J3</td><td>—</td><td>—</td><td>—</td><td>Depends on the sensor and the converter configuration</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Prime header GE (J36)

The Prime&rsquo;s GE (J36) header is used for this board, with chip select on PD15. Before wiring, with the power removed, verify numbered continuity, the rail positions on the physical connector and the available rail current.

See all boards on the [extension boards](/extension-boards) page.
