---
layout: default
title: "Simple PT100 amplifier board"
description: "An analogue four-wire PT100 front end that outputs a voltage for a controller analogue input: pinout, links and wiring."
permalink: /extensions/simple-pt100-amplifier-board
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Temperature</p>
    <h1 id="simple-pt100-amplifier-board">Simple PT100 amplifier board</h1>
    <p class="xb-lead">An analogue front end for a four-wire PT100 temperature sensor. It sources a constant excitation current, senses the voltage across the element and presents an amplified voltage to a controller analogue input. It does not return a digital temperature, and Smoothieware has no matching conversion for it.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/simple-pt100-amplifier-board/simple-pt100-amplifier-board-diagram.png" alt="Top view of the simple PT100 amplifier board: two ten-contact sockets at the top, an amplifier in the middle and a four-way screw terminal at the bottom.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>4-wire PT100</b><span>separate force and sense leads</span></div>
  <div class="xb-stat"><b>Analogue out</b><span>a voltage on J1 contact 3 by default</span></div>
  <div class="xb-stat"><b>~0.985 mA</b><span>calculated excitation at 3.3&nbsp;V</span></div>
  <div class="xb-stat"><b>OPA2333</b><span>precision dual amplifier</span></div>
  <div class="xb-stat"><b>No firmware</b><span>no matching Smoothieware conversion</span></div>
  <div class="xb-stat"><b>40 × 35.6</b><span>millimetres, two M3 holes</span></div>
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
  The board is not calibrated, and Smoothieware cannot convert its output to a temperature. Do not use it to control a heater. Keep the whole setup unpowered while wiring.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>Convert a four-wire PT100 resistance into a voltage for a controller analogue input</td></tr>
    <tr><td>Excitation</td><td>One amplifier half regulates a BSS84 P-channel MOSFET through a 1&nbsp;k&Omega; gate resistor until the voltage across a 332&nbsp;&Omega; 0.1&nbsp;% sense resistor follows a reference, which gives about 0.985&nbsp;mA at 3.3&nbsp;V by calculation</td></tr>
    <tr><td>Sensing</td><td>The other half amplifies the separate sense leads through a network of 0.1&nbsp;% resistors; a 332&nbsp;&Omega; and 100&nbsp;nF filter feeds the output</td></tr>
    <tr><td>Sensor</td><td>Four-wire PT100 on a four-way screw terminal J3 (F+, S+, S&minus;, F&minus;). Two-wire use is possible by closing JP10 and JP11, but is not described here.</td></tr>
    <tr><td>Output</td><td>Analogue voltage AIN_OUT, routed by solder links to J1 contact 3, 4 or 5</td></tr>
    <tr><td>Protection</td><td>A TPD4E1U06 clamp array on the sensor-side lines</td></tr>
    <tr><td>Sockets</td><td>Two 10-contact Gadgeteer A sockets (Samtec SHF-105, 1.27&nbsp;mm): J1 IN and J2 CHAIN</td></tr>
    <tr><td>Lights</td><td>None</td></tr>
    <tr><td>Test points</td><td>Five: 3.3&nbsp;V, 5&nbsp;V, AIN_OUT and two grounds (not drawn in the top view)</td></tr>
    <tr><td>Size</td><td>40 &times; 35.6&nbsp;mm with two M3 mounting holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a></td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The electrical figures are in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix. This is a different interface from the [SPI PT100 board](/extensions/spi-pt100-amplifier-board), which returns a digital value.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side. The mounting holes, test points, solder links and some small parts are not marked on the drawing.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/simple-pt100-amplifier-board/simple-pt100-amplifier-board-diagram.png" alt="Top view of the simple PT100 amplifier board with nine numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:72.3%;top:15.2%" aria-label="1: host socket">1<span class="xb-pop"><b>Host socket A IN (J1)</b> — the Gadgeteer socket to the controller: supply, one analogue output on contact 3 by default, and pass-through lines. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:26.2%;top:15.2%" aria-label="2: chain socket">2<span class="xb-pop"><b>Chain socket A CHAIN (J2)</b> — a second socket that carries the host lines on to the next board. Leave it unconnected when nothing follows.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:50%;top:81.2%" aria-label="3: sensor terminal block">3<span class="xb-pop"><b>Sensor terminal block (J3)</b> — four screw terminals for a four-wire PT100: force+, sense+, sense&minus; and force&minus;. The silk marks F+ at the left.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:50%;top:49.2%" aria-label="4: amplifier">4<span class="xb-pop"><b>Dual amplifier (U1)</b> — an OPA2333AID: one half regulates the excitation current, the other amplifies the sensed voltage.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:24.4%;top:47.2%" aria-label="5: excitation transistor">5<span class="xb-pop"><b>Excitation transistor (Q1)</b> — a BSS84 P-channel MOSFET that passes the excitation current to the sensor force line under control of the first amplifier half.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:27.7%;top:75.1%" aria-label="6: diode">6<span class="xb-pop"><b>Diode (D1)</b> — a 1N4148W small-signal diode in the force path.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:50%;top:63.8%" aria-label="7: clamp array">7<span class="xb-pop"><b>Clamp array (D2)</b> — a TPD4E1U06 protection array on the sensor-side lines.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:71%;top:67%" aria-label="8: two-wire links">8<span class="xb-pop"><b>Two-wire links (JP10, JP11)</b> — solder links marked 2W F+/S+ and 2W F&minus;/S&minus;. Open means four-wire operation. The links are not drawn.</span></a>
      <a class="xb-mk xb-pb" href="#tour-9" style="left:66.4%;top:49.7%" aria-label="9: resistor network">9<span class="xb-pop"><b>Precision resistor network (R1 to R7)</b> — 0.1&nbsp;% resistors that set the gain and offset of the sensing amplifier half.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host socket A IN (J1)</b> — the Gadgeteer socket to the controller: supply, one analogue output on contact 3 by default, and pass-through lines. <i>See the pinout.</i></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket A CHAIN (J2)</b> — a second socket that carries the host lines on to the next board. Leave it unconnected when nothing follows.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Sensor terminal block (J3)</b> — four screw terminals for a four-wire PT100: force+, sense+, sense&minus; and force&minus;. The silk marks F+ at the left.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Dual amplifier (U1)</b> — an OPA2333AID: one half regulates the excitation current, the other amplifies the sensed voltage.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Excitation transistor (Q1)</b> — a BSS84 P-channel MOSFET that passes the excitation current to the sensor force line under control of the first amplifier half.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Diode (D1)</b> — a 1N4148W small-signal diode in the force path.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Clamp array (D2)</b> — a TPD4E1U06 protection array on the sensor-side lines.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Two-wire links (JP10, JP11)</b> — solder links marked 2W F+/S+ and 2W F&minus;/S&minus;. Open means four-wire operation. The links are not drawn.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Precision resistor network (R1 to R7)</b> — 0.1&nbsp;% resistors that set the gain and offset of the sensing amplifier half.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1: host socket (A IN) and J2: chain socket (A CHAIN)

Contact 1 is next to the white dot in each socket in the tour, at the left end of the lower row. The odd contacts are in the lower row and the even contacts in the upper row. J2 carries the same numbers on the CHAIN side.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>J1 (from the controller)</th><th>J2 (to the next board)</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td><span class="xb-pill xb-p-3v3">3.3 V</span> passed on</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td><span class="xb-pill xb-p-5v">5 V</span> passed on</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">AIN P3</span> analogue pin</td><td>Chain line P3</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">AIN P4</span> analogue pin</td><td>Chain line P4</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">AIN P5</span> analogue pin</td><td>Chain line P5</td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">GPIO P6</span></td><td>Chain line P6</td></tr>
    <tr><td>7 to 9</td><td><span class="xb-pill xb-p-sig">UN P7, P8, P9</span> unassigned</td><td>Chain lines P7 to P9</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td><span class="xb-pill xb-p-gnd">GND</span> passed on</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J3: PT100 terminal block

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Terminal</th><th>Function</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>F+ force positive (excitation current out)</td></tr>
    <tr><td>2</td><td>S+ sense positive</td></tr>
    <tr><td>3</td><td>S&minus; sense negative</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-gnd">F&minus;</span> force negative, joined to ground</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Use four separate leads reaching the element: identify the same-end pairs from the sensor&rsquo;s documentation or by continuity. Do not substitute a two-wire thermistor, and do not short force and sense at the board for four-wire use.

### Solder links and test points

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>Effect</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>JP3</td><td>3 pads: 1&ndash;2 sends AIN_OUT to J1 contact 3; 2&ndash;3 passes chain line P3 to contact 3</td><td>Pads 1&ndash;2 joined</td></tr>
    <tr><td>JP4, JP5</td><td>3 pads each: 1&ndash;2 passes the chain line to contact 4 or 5; 2&ndash;3 sends AIN_OUT there instead</td><td>Pass-through (pads 1&ndash;2)</td></tr>
    <tr><td>JP6 to JP9</td><td>Pass J1 contacts 6 to 9 through to the chain socket</td><td>Bridged</td></tr>
    <tr><td>JP10</td><td>Joins F+ to S+ (two-wire)</td><td>Open</td></tr>
    <tr><td>JP11</td><td>Joins F&minus; to S&minus; (two-wire)</td><td>Open</td></tr>
  </tbody>
</table></div>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Test point</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>TP1</td><td>3.3&nbsp;V</td></tr>
    <tr><td>TP2</td><td>AIN_OUT, the amplifier output</td></tr>
    <tr><td>TP3, TP5</td><td>Ground</td></tr>
    <tr><td>TP4</td><td>5&nbsp;V</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Never join two driven outputs: open the existing bridge on a contact before selecting another source for it.

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>A four-wire PT100</b><span>Choose the element for your temperature range and identify its leads.</span></div>
  <div class="xb-card"><b>Three host wires</b><span>3.3&nbsp;V, the analogue output and ground to the controller.</span></div>
  <div class="xb-card"><b>A meter</b><span>To check AIN_OUT at TP2 against a known resistor, before any heater use.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 666" role="img" aria-labelledby="xb-simple-pt100-amplifier-board-wire"><title id="xb-simple-pt100-amplifier-board-wire">Wiring: controller contact 1 to J1 contact 1; controller contact 3 to J1 contact 3; controller contact 10 to J1 contact 10; J3 contact 1 to F+; J3 contact 2 to S+; J3 contact 3 to S−; J3 contact 4 to F−.</title><image href="/images/extensions/simple-pt100-amplifier-board/simple-pt100-amplifier-board-diagram.png" x="372" y="14" width="257" height="230"/><circle cx="557" cy="49" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="538" y="68" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="557" y="82" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J1</text><circle cx="500" cy="201" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="481" y="220" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="500" y="234" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J3</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Prime header GH/J39</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J1 on this board</text><rect x="30" y="304" width="200" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="130" y="375" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Smoothieboard</text><text x="130" y="395" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">V2 Prime</text><rect x="770" y="304" width="200" height="150" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 349.0H770" fill="none" stroke="#d92d2d" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="349" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="349" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><text x="216" y="354" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">1</text><text x="784" y="354" text-anchor="start" font-size="14" fill="#e6ebf2">1  3.3 V</text><rect x="400" y="338" width="200" height="22" rx="11" fill="#d92d2d" stroke="#d92d2d" stroke-width="1.5"/><text x="500" y="354" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1 to 1: 3.3 V</text><path d="M230 379.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="379" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="379" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="384" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">3</text><text x="784" y="384" text-anchor="start" font-size="14" fill="#e6ebf2">3  </text><rect x="400" y="368" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="384" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">3 to 3</text><path d="M230 409.0H770" fill="none" stroke="#8b949e" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="409" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="409" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><text x="216" y="414" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">10</text><text x="784" y="414" text-anchor="start" font-size="14" fill="#e6ebf2">10  GND</text><rect x="400" y="398" width="200" height="22" rx="11" fill="#8b949e" stroke="#8b949e" stroke-width="1.5"/><text x="500" y="414" text-anchor="middle" font-size="13" font-weight="700" fill="#111">10 to 10: GND</text><text x="130" y="486" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J3 on this board</text><text x="870" y="486" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">PT100, four leads</text><rect x="700" y="498" width="270" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><path d="M820 581.0H900M820 565.0H900" fill="none" stroke="#c4cad3" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="916" cy="573" r="20" fill="#b5251e" stroke="#7d120d" stroke-width="3"/><rect x="30" y="498" width="200" height="150" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 528.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="528" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="528" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="533" text-anchor="end" font-size="14" fill="#e6ebf2">F+ force positive  1</text><text x="712" y="533" text-anchor="start" font-size="13" fill="#e6ebf2">F+</text><rect x="340" y="517" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="533" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1: F+</text><path d="M230 558.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="558" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="558" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="563" text-anchor="end" font-size="14" fill="#e6ebf2">S+ sense positive  2</text><text x="712" y="563" text-anchor="start" font-size="13" fill="#e6ebf2">S+</text><rect x="340" y="547" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="563" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">2: S+</text><path d="M230 588.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="588" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="588" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="593" text-anchor="end" font-size="14" fill="#e6ebf2">S− sense negative  3</text><text x="712" y="593" text-anchor="start" font-size="13" fill="#e6ebf2">S−</text><rect x="340" y="577" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="593" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">3: S−</text><path d="M230 618.0H700" fill="none" stroke="#8b949e" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="618" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="618" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><text x="216" y="623" text-anchor="end" font-size="14" fill="#e6ebf2">F− force negative  4</text><text x="712" y="623" text-anchor="start" font-size="13" fill="#e6ebf2">F−</text><rect x="340" y="607" width="220" height="22" rx="11" fill="#8b949e" stroke="#8b949e" stroke-width="1.5"/><text x="450" y="623" text-anchor="middle" font-size="13" font-weight="700" fill="#111">4: F−</text></svg>
  </div>
  <figcaption>Check the output with a known resistor across the leads before connecting a real sensor. Leave 5 V and J2 unconnected. Equipment is drawn as a typical unit, not a specific model.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Wire the controller</h3>
    <p>With everything unpowered, connect header GH (J39) contact 1 to J1 contact 1 (3.3&nbsp;V), contact 3 to J1 contact 3 (analogue output on PC3) and contact 10 to J1 contact 10 (ground). Leave the 5&nbsp;V and all other contacts disconnected. Leave J2 unconnected.</p>
    <p class="xb-expect">Check numbered continuity and the connector orientation first. Check the rail positions on the Prime&rsquo;s physical header; see the electrical appendix.</p>
  </li>
  <li class="xb-step">
    <h3>Check the links</h3>
    <p>Keep JP3 at pads 1&ndash;2 so AIN_OUT reaches contact 3, and leave JP10 and JP11 open for four-wire use.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the sensor</h3>
    <p>Connect J3 terminals 1 to 4 (F+, S+, S&minus;, F&minus;) with four separate leads to the element.</p>
  </li>
  <li class="xb-step">
    <h3>Check the output with a fixed resistor first</h3>
    <p>Before a real sensor, power the board and read TP2 with a known resistor across the leads. Compare the reading against your own calibration. Reserve PC3 as an analogue input; never configure it as a driven output.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>A temperature from this board</td><td>None in Smoothieware</td><td>Not supported</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

SmoothieV2 has no selectable sensor for this analogue amplifier. Its [temperature factory](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/temperaturecontrol/TemperatureControl.cpp#L177-L195) selects <code>thermistor</code> or <code>max31855</code>; any other sensor name creates a dummy sensor and enables no PT100 conversion. The <code>max31855</code> option is a different digital thermocouple chip. The [thermistor conversion](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/temperaturecontrol/Thermistor.cpp#L286-L314) models a thermistor resistance, so its coefficients are not this amplifier&rsquo;s voltage-to-PT100 transfer, and no beta values or heater settings should be invented for it. Without a matching conversion there is no configuration to give.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 170" role="img" aria-labelledby="xb-how-t">
    <title id="xb-how-t">A regulated excitation current flows through the four-wire sensor; the separate sense leads feed an amplifier whose filtered output reaches the host analogue input.</title>
    <g font-size="13" font-weight="700" text-anchor="middle" fill="#e6ebf2">
      <rect x="20" y="55" width="150" height="60" rx="8" fill="#212936" stroke="#e0a877"/><text x="95" y="80">Excitation</text><text x="95" y="100" font-weight="400" fill="#a9b4c2">U1 half, Q1, R8</text>
      <rect x="215" y="55" width="150" height="60" rx="8" fill="#1f2226" stroke="#dfe4ee"/><text x="290" y="80">J3</text><text x="290" y="100" font-weight="400" fill="#a9b4c2">four-wire PT100</text>
      <rect x="410" y="55" width="160" height="60" rx="8" fill="#212936" stroke="#6fe08a"/><text x="490" y="80">Sense amplifier</text><text x="490" y="100" font-weight="400" fill="#a9b4c2">U1 half, R1 to R7</text>
      <rect x="615" y="55" width="150" height="60" rx="8" fill="#212936" stroke="#5fb3ff"/><text x="690" y="80">Filter</text><text x="690" y="100" font-weight="400" fill="#a9b4c2">332 &#937;, 100 nF</text>
      <rect x="810" y="55" width="170" height="60" rx="8" fill="#1f2226" stroke="#dfe4ee"/><text x="895" y="80">J1 contact 3</text><text x="895" y="100" font-weight="400" fill="#a9b4c2">AIN_OUT</text>
    </g>
    <g stroke-width="3" fill="none" stroke="#a9b4c2"><path d="M170 85H215"/><path d="M365 85H410"/><path d="M570 85H615"/><path d="M765 85H810"/></g>
  </svg>
  </div>
  <figcaption>The sense voltage is read on separate leads from the excitation current, which reduces the effect of lead resistance.</figcaption>
</figure>
{:/nomarkdown}

One amplifier half drives the BSS84 gate until the sense node follows the reference, so the drop across the 332&nbsp;&Omega; resistor sets the excitation current; the transistor and diode feed the force-positive lead. The other half receives the sense leads through its resistor network and produces a raw output, which a 332&nbsp;&Omega; resistor and 100&nbsp;nF capacitor filter into AIN_OUT. The board does not return a digital temperature word. Calibrate your assembly for its transfer function, and allow for excitation accuracy, sensor self-heating and amplifier output limits.

{% include _includes/temperature-board-comparison.html %}

## Troubleshooting {#troubleshooting}

This board has no indicator lights.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>No output at TP2</td><td>3.3&nbsp;V at TP1, ground, and the JP3 link position; J3 wiring.</td></tr>
    <tr><td>Output stuck at a limit</td><td>An open or reversed sensor lead; force and sense leads swapped; no element connected.</td></tr>
    <tr><td>Reading changes with lead movement</td><td>Check that all four leads reach the element separately and that JP10 and JP11 are open.</td></tr>
    <tr><td>Nothing on a different contact</td><td>The link selecting AIN_OUT for contact 4 or 5 is on pads 2&ndash;3; JP3 sends it to contact 3 by default.</td></tr>
    <tr><td>Temperature does not display</td><td>Smoothieware has no conversion for this board; see Configuration.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/simple-pt100-amplifier-board/simple-pt100-amplifier-board-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram.</td></tr>
    <tr><td><a href="/images/extensions/simple-pt100-amplifier-board/simple-pt100-amplifier-board-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/simple-pt100-amplifier-board/simple-pt100-amplifier-board-diagram.png">Board drawing (SVG)</a></td><td>The top view used on this page, at full resolution</td></tr>
    <tr><td><a href="/assets/downloads/extensions/simple-pt100-amplifier-board/simple-pt100-cad-study.zip">KiCad project (ZIP)</a></td><td>The KiCad project with libraries and licence texts</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-pt-mount-t">
  <title id="xb-pt-mount-t">Mounting drawing of the simple PT100 amplifier board, component side: outline 40 by 35.6 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="289.0" y="78.0" width="382.0" height="340.0" rx="9.6" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M289.0 56H671.0"/><path d="M289.0 50V62"/><path d="M671.0 50V62"/><path d="M697.0 78.0V418.0"/><path d="M691.0 78.0h12"/><path d="M691.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">40</text>
  <text x="709.0" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">35.6</text>
  <circle cx="289.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="277.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M231.0 104.0h30" fill="none"/><path d="M265.0 104.0l-8 -4v8z"/><path d="M231.0 104.0v30" fill="none"/><path d="M231.0 138.0l-4 -8h8z"/></g>
  <text x="269.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="227.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="336.7" cy="364.5" r="15.3" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M317.5 364.5h38.6M336.7 345.2v38.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="321.5" y="339.2" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 30.00</text>
  <circle cx="623.3" cy="364.5" r="15.3" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M604.0 364.5h38.6M623.3 345.2v38.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="638.5" y="339.2" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  35.00, 30.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 40 × 35.6&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>30.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>35.00</td><td>30.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>

{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

A dash means no value is given.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Conditions</th></tr></thead>
  <tbody>
    <tr><td>Logic supply</td><td>J1 contact 1</td><td>—</td><td>3.3 V</td><td>—</td><td>From the host</td></tr>
    <tr><td>Excitation current</td><td>F+</td><td>—</td><td>about 0.985 mA</td><td>—</td><td>Calculated at nominal 3.3&nbsp;V from the parts list</td></tr>
    <tr><td>Sense resistor</td><td>R8</td><td>—</td><td>332 &Omega;, 0.1&nbsp;%</td><td>—</td><td>Parts list</td></tr>
    <tr><td>Output filter</td><td>R10, C5</td><td>—</td><td>332 &Omega;, 100 nF</td><td>—</td><td>Parts list</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Prime header GH (J39)

On the Prime, header GH (J39) has 3.3&nbsp;V on contact 1, 5&nbsp;V on contact 2, PC3 on contact 3 and ground on 10. PC3 is hardware ADC1 channel 13, logical <code>ADC1_5</code> in SmoothieV2. Check the rail positions on the physical connector, and verify numbered continuity with the power removed.

See all boards on the [extension boards](/extension-boards) page.
