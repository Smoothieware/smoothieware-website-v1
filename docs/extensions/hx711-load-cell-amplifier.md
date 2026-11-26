---
layout: default
title: "HX711 load-cell amplifier"
description: "A load-cell amplifier built on the HX711 24-bit converter for weighing and low-speed force measurement, with a chain socket: pinout, links and wiring."
permalink: /extensions/hx711-load-cell-amplifier
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Sensors</p>
    <h1 id="hx711-load-cell-amplifier">HX711 load-cell amplifier</h1>
    <p class="xb-lead">Reads a resistive Wheatstone-bridge load cell with an AVIA HX711 and reports signed 24-bit conversions over a data and a clock line (it is not I2C). It suits weighing, such as a filament spool, and slow force measurements. It is not an overload interlock.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/hx711-load-cell-amplifier/hx711-load-cell-amplifier-diagram.png" alt="Top view of the HX711 load-cell amplifier: two sockets on the left, the converter in the middle and two green screw terminals on the right.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>HX711</b><span>24-bit converter, 10 conversions per second by default</span></div>
  <div class="xb-stat"><b>4.29878 V</b><span>nominal bridge excitation from a feedback network</span></div>
  <div class="xb-stat"><b>2 channels</b><span>A with gain 128 or 64, B with gain 32</span></div>
  <div class="xb-stat"><b>≥ 350 Ω</b><span>minimum combined bridge resistance</span></div>
  <div class="xb-stat"><b>No driver</b><span>Smoothieware has no HX711 code</span></div>
  <div class="xb-stat"><b>59 × 48</b><span>millimetres, four M3 holes and two cable-tie holes</span></div>
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
  Smoothieware has no HX711 driver, so reading the board needs your own firmware. Check the load cell&rsquo;s excitation rating and bridge resistance first; the board supplies about 4.3&nbsp;V to it. Check the host rail capacity, and calibrate your assembly.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>Read a resistive bridge load cell, for calibrated weighing or low-bandwidth force experiments</td></tr>
    <tr><td>Converter</td><td>AVIA HX711, signed 24-bit. Channel A gain 128 or 64, channel B gain 32, chosen by the number of clock pulses (25, 27 or 26) after each reading. Default 10 samples per second; 80 per second is a strap option.</td></tr>
    <tr><td>Excitation</td><td>Nominal 4.29878&nbsp;V from the HX711 driving a PNP transistor, with a 20&nbsp;k&Omega; and 8.2&nbsp;k&Omega; feedback network, from the 5&nbsp;V rail</td></tr>
    <tr><td>Logic</td><td>3.3&nbsp;V from the controller, so the data and clock lines suit the host input</td></tr>
    <tr><td>Supply budget</td><td>25&nbsp;mA from 5&nbsp;V and 2&nbsp;mA from 3.3&nbsp;V; check that the host rails can supply it</td></tr>
    <tr><td>Input range</td><td>&plusmn;0.5 &times; AVDD / gain, with both inputs between AGND + 1.2&nbsp;V and AVDD &minus; 1.3&nbsp;V</td></tr>
    <tr><td>Protection</td><td>A TPS2553 switch with fault output on the 5&nbsp;V branch and TPD4E001 / TPD1E10B06 surge-protection parts on the lines</td></tr>
    <tr><td>Sockets</td><td>Two 10-contact Gadgeteer Y sockets (Samtec SHF-105, 1.27&nbsp;mm), host and chain. The chain passes the lines on; it is not an addressed bus.</td></tr>
    <tr><td>Terminals</td><td>Five-screw terminal J3 (channel A, excitation, shield) and two-screw terminal J4 (channel B), 3.5&nbsp;mm Phoenix style</td></tr>
    <tr><td>Test points</td><td>Twenty-three, covering supplies, the bridge nodes, clock and data, the fault line and the chain rails (not drawn in the top view)</td></tr>
    <tr><td>Size</td><td>59 &times; 48&nbsp;mm with four M3 mounting holes and two cable-tie holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> (Smoothieware has no HX711 driver)</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The electrical figures are in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side. The mounting holes, test points and solder links are not marked on the drawing.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/hx711-load-cell-amplifier/hx711-load-cell-amplifier-diagram.png" alt="Top view of the HX711 load-cell amplifier board with eleven numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:11.8%;top:31.7%" aria-label="1: host socket">1<span class="xb-pop"><b>Host socket HOST Y (J1)</b> — the Gadgeteer socket to the controller. Contact 3 is the data line from the board and contact 4 the clock to it. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pl" href="#tour-2" style="left:11.8%;top:67.9%" aria-label="2: chain socket">2<span class="xb-pop"><b>Chain socket CHAIN Y (J2)</b> — a second socket that passes the host lines on to another board through solder links SJ1 to SJ10.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-3" style="left:89.5%;top:41.7%" aria-label="3: load cell terminal">3<span class="xb-pop"><b>Load cell terminal (J3)</b> — a 5-screw terminal for a four-wire load cell on channel A, plus the shield. The bottom screw in the tour is contact 1. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pr" href="#tour-4" style="left:89.5%;top:76.8%" aria-label="4: channel B terminal">4<span class="xb-pop"><b>Channel B terminal (J4)</b> — a 2-screw terminal for the auxiliary channel B differential input.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:65.3%;top:51.7%" aria-label="5: converter">5<span class="xb-pop"><b>Converter (U1)</b> — the AVIA HX711 24-bit converter for a resistive bridge, read over a data and a clock line.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:55.5%;top:25.6%" aria-label="6: excitation transistor">6<span class="xb-pop"><b>Excitation transistor (Q1)</b> — a BCP51-16 PNP transistor that the HX711 controls to make the bridge excitation voltage (nominally 4.29878&nbsp;V).</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:44.3%;top:25.9%" aria-label="7: supply switch">7<span class="xb-pop"><b>Supply switch (U2)</b> — a TPS2553 power switch for the 5&nbsp;V analogue branch, with a fault output.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-8" style="left:80%;top:49.5%" aria-label="8: input protection">8<span class="xb-pop"><b>Input protection (U3)</b> — a TPD4E001 surge-protection array on the load cell inputs (it blocks ESD pulses, not a current limit).</span></a>
      <a class="xb-mk" href="#tour-9" style="left:25%;top:86.2%" aria-label="9: host protection">9<span class="xb-pop"><b>Host-line protection (U4, U5)</b> — two TPD4E001 arrays on the host data, clock and spare lines.</span></a>
      <a class="xb-mk xb-pb" href="#tour-10" style="left:45.7%;top:39.8%" aria-label="10: bulk capacitor">10<span class="xb-pop"><b>Supply capacitors (C5, C7)</b> — 10&nbsp;&micro;F capacitors on the analogue supply; further 1&nbsp;&micro;F and 100&nbsp;nF capacitors fill the board.</span></a>
      <a class="xb-mk" href="#tour-11" style="left:45.9%;top:87.9%" aria-label="11: cable-tie holes">11<span class="xb-pop"><b>Cable-tie holes (CT1, CT2)</b> — two 2.5&nbsp;mm holes for strain relief of the load cell cable.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host socket HOST Y (J1)</b> — the Gadgeteer socket to the controller. Contact 3 is the data line from the board and contact 4 the clock to it. <i>See the pinout.</i></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket CHAIN Y (J2)</b> — a second socket that passes the host lines on to another board through solder links SJ1 to SJ10.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Load cell terminal (J3)</b> — a 5-screw terminal for a four-wire load cell on channel A, plus the shield. The bottom screw in the tour is contact 1. <i>See the pinout.</i></div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Channel B terminal (J4)</b> — a 2-screw terminal for the auxiliary channel B differential input.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Converter (U1)</b> — the AVIA HX711 24-bit converter for a resistive bridge, read over a data and a clock line.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Excitation transistor (Q1)</b> — a BCP51-16 PNP transistor that the HX711 controls to make the bridge excitation voltage (nominally 4.29878&nbsp;V).</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Supply switch (U2)</b> — a TPS2553 power switch for the 5&nbsp;V analogue branch, with a fault output.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Input protection (U3)</b> — a TPD4E001 surge-protection array on the load cell inputs (it blocks ESD pulses, not a current limit).</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Host-line protection (U4, U5)</b> — two TPD4E001 arrays on the host data, clock and spare lines.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Supply capacitors (C5, C7)</b> — 10&nbsp;&micro;F capacitors on the analogue supply; further 1&nbsp;&micro;F and 100&nbsp;nF capacitors fill the board.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Cable-tie holes (CT1, CT2)</b> — two 2.5&nbsp;mm holes for strain relief of the load cell cable.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1: host socket (HOST Y)

Contact 1 is the pad next to the arrow at the lower end of the socket in the tour. The contacts count up from there; check numbered continuity before powering.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Function</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>HX711 logic supply</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Analogue supply and excitation, through the supply switch</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">DOUT</span></td><td>Data and data-ready, from the board to the host</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">PD_SCK</span></td><td>Clock, from the host to the board</td></tr>
    <tr><td>5 to 9</td><td><span class="xb-pill xb-p-sig">GPIO 5 to 9</span></td><td>Not used on this board; passed to J2 through SJ5 to SJ9</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Ground</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J3: load cell, channel A

The bottom screw in the tour is contact 1 and the top screw is contact 5.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Function</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-5v">E+</span> bridge excitation, nominal 4.29878&nbsp;V</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-gnd">E&minus;</span> excitation return</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">A+</span> positive differential input</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">A&minus;</span> negative differential input</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-gnd">SHIELD</span> cable shield, joined to ground through a 0&nbsp;&Omega; link R12</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J4: channel B

The bottom screw in the tour is contact 1.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Function</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-sig">B+</span> positive differential input</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-sig">B&minus;</span> negative differential input</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Connect each load cell wire by its function from the cell&rsquo;s own data sheet, not by colour.

### J2: chain socket and solder links

J2 has the same contact order. Each of its contacts, except ground and the rails, is joined to J1 through its own solder link.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>Joins</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>SJ1</td><td>3.3&nbsp;V to J2 contact 1</td><td>Closed</td></tr>
    <tr><td>SJ2</td><td>5&nbsp;V to J2 contact 2</td><td>Closed</td></tr>
    <tr><td>SJ3, SJ4</td><td>DOUT and PD_SCK to J2 contacts 3 and 4</td><td>Open, so another board cannot reuse the occupied pins</td></tr>
    <tr><td>SJ5 to SJ9</td><td>GPIO 5 to 9 to J2</td><td>Closed</td></tr>
    <tr><td>SJ10</td><td>Ground to J2 contact 10</td><td>Closed</td></tr>
    <tr><td>SJ11</td><td>Converter rate-select pin to ground</td><td>Closed, which selects the default 10 samples per second.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Do not run a board on the chain socket with its ground cut while any supply or signal is connected. The HX711 has no address or chip select, so do not connect a second push-pull data output to contact 3. Several HX711 boards need their own data and clock pins, or a separately designed multiplexer.

### Test points

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Group</th><th>Names</th></tr></thead>
  <tbody>
    <tr><td>Host supplies</td><td>TP1 (3.3&nbsp;V), TP2 (5&nbsp;V), TP17, TP18, TP19 (ground)</td></tr>
    <tr><td>Analogue branch</td><td>TP4 (DVDD 3.3&nbsp;V), TP6 (switched 5&nbsp;V), TP7 (AVDD 4.3&nbsp;V), TP8 (feedback), TP9 (reference), TP12 (fault)</td></tr>
    <tr><td>Reverse-polarity sense</td><td>TP3 (3.3&nbsp;V), TP5 (5&nbsp;V)</td></tr>
    <tr><td>Bridge inputs</td><td>TP13 (A+), TP14 (A&minus;), TP15 (B+), TP16 (B&minus;)</td></tr>
    <tr><td>Clock, data, rate</td><td>TP10 (local clock), TP11 (local data), TP23 (rate select)</td></tr>
    <tr><td>Chain rails</td><td>TP20 (3.3&nbsp;V), TP21 (5&nbsp;V), TP22 (ground)</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>A bridge load cell</b><span>Four-wire, with at least 350&nbsp;&Omega; bridge resistance and an excitation rating that includes about 4.3&nbsp;V.</span></div>
  <div class="xb-card"><b>Five host wires</b><span>3.3&nbsp;V, 5&nbsp;V, data, clock and ground to the controller.</span></div>
  <div class="xb-card"><b>A driver</b><span>Firmware that clocks the HX711 and reads its data. Smoothieware does not include it.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Check the load cell</h3>
    <p>Read its data sheet: bridge resistance, rated excitation and wire functions. A three-wire half bridge needs an external combiner that this board does not have.</p>
  </li>
  <li class="xb-step">
    <h3>Wire the controller</h3>
    <p>With the power off, connect header G_F (J37) contacts 1, 2, 3, 4 and 10 to J1 contacts 1, 2, 3, 4 and 10: 3.3&nbsp;V, 5&nbsp;V, data on PB1, clock on PJ4 and ground. Leave contacts 5 to 9 and the chain socket unconnected. Check numbered continuity and the connector orientation first.</p>
    <p class="xb-expect">Check the rail positions on the Prime&rsquo;s physical header before powering; see the Prime header note in the electrical appendix. Check the available current of the 5&nbsp;V and 3.3&nbsp;V rails.</p>
  </li>
  <li class="xb-step">
    <h3>Check the board supplies first</h3>
    <p>Before connecting a load cell, measure the analogue supply at TP7 and the excitation node, and confirm the fault line TP12 is not asserted.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the load cell and read it</h3>
    <p>Join E+, E&minus;, A+, A&minus; and the shield to J3. A driver must read the 24 data bits and then send the gain-selection clock pulses. Smoothieware does not include such a driver.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Read a weight or force</td><td>None</td><td>No driver in Smoothieware</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

There is no configuration to give. SmoothieV2 has no HX711 acquisition code.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 170" role="img" aria-labelledby="xb-how-t">
    <title id="xb-how-t">The 5 volt supply passes a switch and a transistor to excite the load cell, whose differential signal passes protection to the HX711 and is read by the host over data and clock lines.</title>
    <g font-size="13" font-weight="700" text-anchor="middle" fill="#e6ebf2">
      <rect x="20" y="55" width="150" height="60" rx="8" fill="#212936" stroke="#e0a877"/><text x="95" y="80">Supply switch</text><text x="95" y="100" font-weight="400" fill="#a9b4c2">U2, from 5 V</text>
      <rect x="230" y="55" width="150" height="60" rx="8" fill="#212936" stroke="#e0a877"/><text x="305" y="80">Q1</text><text x="305" y="100" font-weight="400" fill="#a9b4c2">excitation 4.3 V</text>
      <rect x="440" y="55" width="150" height="60" rx="8" fill="#1f2226" stroke="#e0a877"/><text x="515" y="80">Load cell</text><text x="515" y="100" font-weight="400" fill="#a9b4c2">bridge on J3</text>
      <rect x="650" y="55" width="170" height="60" rx="8" fill="#212936" stroke="#6fe08a"/><text x="735" y="80">HX711</text><text x="735" y="100" font-weight="400" fill="#a9b4c2">24-bit converter</text>
      <rect x="870" y="55" width="110" height="60" rx="8" fill="#1f2226" stroke="#dfe4ee"/><text x="925" y="90">J1</text>
    </g>
    <g stroke-width="3" fill="none" stroke="#a9b4c2"><path d="M170 85H230"/><path d="M380 85H440"/><path d="M590 85H650"/><path d="M820 85H870"/></g>
  </svg>
  </div>
  <figcaption>Power flows to the load cell; the signal returns to the converter and out to the host.</figcaption>
</figure>
{:/nomarkdown}

The HX711 turns the small differential voltage of a bridge into a signed 24-bit number. When the data line goes low a conversion is ready. The host clocks out 24 bits and then sends one to three extra clock pulses (25, 27 or 26 in total) to choose channel and gain for the next reading. A clock pulse should stay high between 0.2 and 50&nbsp;&micro;s; holding it high for longer than about 60&nbsp;&micro;s puts the converter into power-down. After a change of channel or gain the output needs time to settle.

The data line is a single output, so a second HX711 cannot share it.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>No analogue supply</td><td>Measure TP6 and TP7; check TP12, the fault line, for an asserted fault.</td></tr>
    <tr><td>No excitation on J3</td><td>The 5&nbsp;V rail, the switch U2 and Q1; measure at TP7.</td></tr>
    <tr><td>Reading stuck</td><td>Clock held high too long (power-down), or an input outside the permitted common-mode range.</td></tr>
    <tr><td>Noisy reading</td><td>Cable length, shield connection (R12) and settling time after a channel change.</td></tr>
    <tr><td>Chain board silent</td><td>SJ3 and SJ4 are open as delivered, so data and clock are not passed on.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

This board has no indicator lights. Use the test points listed in the pinout.

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/hx711-load-cell-amplifier/hx711-load-cell-amplifier-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram.</td></tr>
    <tr><td><a href="/images/extensions/hx711-load-cell-amplifier/hx711-load-cell-amplifier-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/hx711-load-cell-amplifier/hx711-load-cell-amplifier-diagram.png">Board drawing (SVG)</a></td><td>The top view used on this page, at full resolution</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side. The two cable-tie holes are 2.5&nbsp;mm.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-hx-mount-t">
  <title id="xb-hx-mount-t">Mounting drawing of the HX711 load-cell amplifier, component side: outline 59.2 by 48 millimetres with 4 mounting holes and 2 cable-tie holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="270.3" y="78.0" width="419.3" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M270.3 56H689.7"/><path d="M270.3 50V62"/><path d="M689.7 50V62"/><path d="M715.7 78.0V418.0"/><path d="M709.7 78.0h12"/><path d="M709.7 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">59.2</text>
  <text x="727.7" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">48</text>
  <circle cx="270.3" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="258.3" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M212.3 104.0h30" fill="none"/><path d="M246.3 104.0l-8 -4v8z"/><path d="M212.3 104.0v30" fill="none"/><path d="M212.3 138.0l-4 -8h8z"/></g>
  <text x="250.3" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="208.3" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="298.7" cy="106.3" r="11.3" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M283.3 106.3h30.7M298.7 91.0v30.7" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="287.3" y="137.7" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  4.00, 4.00</text>
  <circle cx="582.0" cy="106.3" r="11.3" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M566.7 106.3h30.7M582.0 91.0v30.7" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="593.3" y="137.7" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  44.00, 4.00</text>
  <circle cx="298.7" cy="389.7" r="11.3" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M283.3 389.7h30.7M298.7 374.3v30.7" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="287.3" y="368.3" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  4.00, 44.00</text>
  <circle cx="582.0" cy="389.7" r="11.3" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M566.7 389.7h30.7M582.0 374.3v30.7" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="593.3" y="362.7" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  44.00, 44.00</text>
  <circle cx="461.6" cy="382.6" r="8.9" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <circle cx="497.0" cy="382.6" r="8.9" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <text x="479.3" y="409.4" text-anchor="middle" font-size="12" fill="#a9b4c2">cable tie</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 59.2 × 48&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>4.00</td><td>4.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>44.00</td><td>4.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>4.00</td><td>44.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>44.00</td><td>44.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>–</td><td>27.00</td><td>43.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
    <tr><td>–</td><td>32.00</td><td>43.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
  </tbody>
</table></div>

{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

A dash means no value is given.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Conditions</th></tr></thead>
  <tbody>
    <tr><td>Logic supply</td><td>J1 contact 1</td><td>—</td><td>3.3 V</td><td>—</td><td>Budget 2 mA</td></tr>
    <tr><td>Analogue supply</td><td>J1 contact 2</td><td>—</td><td>5 V</td><td>—</td><td>Budget 25 mA</td></tr>
    <tr><td>Excitation</td><td>J3 contact 1</td><td>—</td><td>4.29878 V</td><td>—</td><td>Calculated from the 20&nbsp;k&Omega; and 8.2&nbsp;k&Omega; feedback network</td></tr>
    <tr><td>Bridge resistance</td><td>Load cell</td><td>350 &Omega;</td><td>—</td><td>—</td><td>Minimum for the combined bridge</td></tr>
    <tr><td>Differential input</td><td>A and B inputs</td><td>—</td><td>&plusmn;0.5 &times; AVDD / gain</td><td>—</td><td>Converter data sheet; inputs must stay between AGND + 1.2&nbsp;V and AVDD &minus; 1.3&nbsp;V</td></tr>
    <tr><td>Clock high time</td><td>PD_SCK</td><td>0.2 &micro;s</td><td>—</td><td>50 &micro;s</td><td>Converter data sheet; above 60&nbsp;&micro;s the converter powers down</td></tr>
    <tr><td>Clock low time</td><td>PD_SCK</td><td>0.2 &micro;s</td><td>—</td><td>—</td><td>Converter data sheet</td></tr>
    <tr><td>Sample rate</td><td>HX711</td><td>—</td><td>10 per second</td><td>—</td><td>Default with SJ11 closed; 80 per second by strap, which needs settling after a change</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Prime header G_F (J37)

On the Prime, header G_F (J37) has 3.3&nbsp;V on contact 1, 5&nbsp;V on contact 2, PB1 on 3, PJ4 on 4 and ground on 10. Check the rail positions on the Prime&rsquo;s physical connector, and verify numbered continuity with the power removed. The header is unshrouded.

See all boards on the [extension boards](/extension-boards) page.
