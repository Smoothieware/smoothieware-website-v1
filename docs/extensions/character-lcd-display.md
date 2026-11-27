---
layout: default
title: "Character LCD display"
description: "A 16x2 character LCD on a PCF8574 I2C backpack circuit with level shifting and Qwiic: pinout, wiring, addresses, limits and files."
permalink: /extensions/character-lcd-display
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Controls and displays</p>
    <h1 id="character-lcd-display">Character LCD display</h1>
    <p class="xb-lead">A carrier that puts a standard 16-character, two-line LCD on two I2C wires, with backlight switching and a contrast trimmer. Text appears only when your own driver sends it.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/character-lcd-display/character-lcd-display-diagram.webp" alt="Top view of the character LCD board: the display module outline covering most of the board, with sockets on the left and right edges.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>
<div class="xb-stats">
  <div class="xb-stat"><b>16 &times; 2</b><span>HD44780-style character module</span></div>
  <div class="xb-stat"><b>0x27</b><span>I2C address as delivered</span></div>
  <div class="xb-stat"><b>100 kHz</b><span>maximum bus clock</span></div>
  <div class="xb-stat"><b>5 V + 3.3 V</b><span>both taken from the socket</span></div>
  <div class="xb-stat"><b>&asymp; 80 mA</b><span>estimated backlight current</span></div>
  <div class="xb-stat"><b>110 &times; 70</b><span>millimetres, four M3 holes</span></div>
</div>
<nav class="xb-nav" aria-label="On this page">
  <a href="#specs">Tech specs</a>
  <a href="#tour">Board tour</a>
  <a href="#pinout">Pinout</a>
  <a href="#what-you-need">What you need</a>
  <a href="#get-started">Get started</a>
  <a href="#configuration">Configuration</a>
  <a href="#how-it-works">How it works</a>
  <a href="#options">Solder links</a>
  <a href="#chaining">Chaining</a>
  <a href="#troubleshooting">Troubleshooting</a>
  <a href="#downloads">Downloads</a>
  <a href="#mounting">Mounting</a>
  <a href="#electrical">Electrical</a>
  <a href="#simulation">Simulation</a>
  <a href="#datasheets">Datasheets</a>
</nav>
{:/nomarkdown}

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>Status text near the machine. Not for safety messages</td></tr>
    <tr><td>Display</td><td>16-pin 2.54&nbsp;mm module position for a 16 &times; 2 character LCD; a 20 &times; 2 module has the same signals but different size and must be cabled</td></tr>
    <tr><td>Interface</td><td>PCF8574 expander at 5&nbsp;V, level shifted to the 3.3&nbsp;V bus; 100&nbsp;kHz maximum; address 0x27, selectable down to 0x20</td></tr>
    <tr><td>Backlight</td><td>Switched by the expander through 10&nbsp;&Omega;; check your module&rsquo;s own resistor and rating</td></tr>
    <tr><td>Supply</td><td>5&nbsp;V for module and backlight, 3.3&nbsp;V for the bus</td></tr>
    <tr><td>Connectors</td><td>Two Gadgeteer type I sockets (Samtec SHF-105, 1.27&nbsp;mm) and one Qwiic</td></tr>
    <tr><td>Size</td><td>110 &times; 70&nbsp;mm, four M3 holes on a 100 &times; 60&nbsp;mm pattern</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> header GG electrically; no firmware driver</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/character-lcd-display/character-lcd-display-diagram.webp" alt="Top view of the character LCD board with 11 numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:5.0%;top:27.8%" aria-label="1: input socket i in (j1)">1<span class="xb-pop"><b>Input socket I IN (J1)</b> — SDA on contact 8, SCL on 9, 5&nbsp;V on 2.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-2" style="left:95.0%;top:27.8%" aria-label="2: chain socket chain (j2)">2<span class="xb-pop"><b>Chain socket CHAIN (J2)</b> — Continues the bus.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-3" style="left:76.8%;top:8.3%" aria-label="3: qwiic connector (j3)">3<span class="xb-pop"><b>Qwiic connector (J3)</b> — The bus on a four-way 3.3&nbsp;V cable. Qwiic alone does not supply 5&nbsp;V to the display.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-4" style="left:21.4%;top:43.1%" aria-label="4: lcd module position (ds1)">4<span class="xb-pop"><b>LCD module position (DS1)</b> — The module solders here with a pin header.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-5" style="left:18.8%;top:34.0%" aria-label="5: contrast trimmer (rv1)">5<span class="xb-pop"><b>Contrast trimmer (RV1)</b> — Turn until characters are clearly visible.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:50.0%;top:26.4%" aria-label="6: i/o expander (u1)">6<span class="xb-pop"><b>I/O expander (U1)</b> — PCF8574 with the common bit order: RS, R/W, E, backlight, data 4 to 7.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:33.5%;top:25.0%" aria-label="7: level shifters (q1, q2)">7<span class="xb-pop"><b>Level shifters (Q1, Q2)</b> — Connect the 3.3&nbsp;V bus to the 5&nbsp;V expander.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-8" style="left:79.5%;top:28.4%" aria-label="8: backlight switch (q3, r8)">8<span class="xb-pop"><b>Backlight switch (Q3, R8)</b> — Transistor and series resistor.</span></a>
      <a class="xb-mk xb-pb" href="#tour-9" style="left:66.5%;top:26.4%" aria-label="9: address links (jp10 to jp12)">9<span class="xb-pop"><b>Address links (JP10 to JP12)</b> — Closing a link clears that address bit.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-10" style="left:17.9%;top:25.7%" aria-label="10: pull-up links (jp1, jp2)">10<span class="xb-pop"><b>Pull-up links (JP1, JP2)</b> — Closed as delivered.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-11" style="left:5.4%;top:8.3%" aria-label="11: mounting hole">11<span class="xb-pop"><b>Mounting hole</b> — One of four M3 holes.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Input socket I IN (J1)</b> — SDA on contact 8, SCL on 9, 5&nbsp;V on 2.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket CHAIN (J2)</b> — Continues the bus.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Qwiic connector (J3)</b> — The bus on a four-way 3.3&nbsp;V cable. Qwiic alone does not supply 5&nbsp;V to the display.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>LCD module position (DS1)</b> — The module solders here with a pin header.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Contrast trimmer (RV1)</b> — Turn until characters are clearly visible.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>I/O expander (U1)</b> — PCF8574 with the common bit order: RS, R/W, E, backlight, data 4 to 7.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Level shifters (Q1, Q2)</b> — Connect the 3.3&nbsp;V bus to the 5&nbsp;V expander.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Backlight switch (Q3, R8)</b> — Transistor and series resistor.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Address links (JP10 to JP12)</b> — Closing a link clears that address bit.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Pull-up links (JP1, JP2)</b> — Closed as delivered.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Mounting hole</b> — One of four M3 holes.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

Check contact numbering, and the module&rsquo;s pin 1 position, before applying power.

### J1: input socket (I IN)

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>Use</th><th>Prime header GG</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Bus side supply</td><td>3.3 V</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Display and backlight</td><td>5 V</td></tr>
    <tr><td>3 to 7</td><td>Passed through</td><td>Not used</td><td>PH2, PH4, PC0, PF15, PH3</td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">SDA</span></td><td>I2C data</td><td>PF0 (I2C2_SDA)</td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">SCL</span></td><td>I2C clock</td><td>PF1 (I2C2_SCL)</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Ground</td><td>GND</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### DS1: display module

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Module pin</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1, 2</td><td>Ground, 5 V</td></tr>
    <tr><td>3</td><td>Contrast from RV1</td></tr>
    <tr><td>4, 5, 6</td><td>RS, R/W, E (expander P0, P1, P2)</td></tr>
    <tr><td>11 to 14</td><td>Data 4 to 7 (expander P4 to P7)</td></tr>
    <tr><td>15, 16</td><td>Backlight anode (through 10 ohm), cathode (switched by P3)</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>A 16 x 2 module</b><span>Standard 16-pin parallel type, 5&nbsp;V.</span></div>
  <div class="xb-card"><b>A pin header</b><span>To solder the module to DS1.</span></div>
  <div class="xb-card"><b>A ten-way cable</b><span>1.27&nbsp;mm Gadgeteer ribbon cable, which also brings 5&nbsp;V.</span></div>
  <div class="xb-card"><b>Your own driver</b><span>None is supplied.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Minimum wiring">
<svg viewBox="0 0 1000 280" role="img" aria-labelledby="xb-lcd-wire-t">
<title id="xb-lcd-wire-t">Minimum wiring: contact 1 to contact 1, 3.3 V; contact 2 to contact 2, 5 V; PF0, contact 8 to contact 8, SDA; PF1, contact 9 to contact 9, SCL; contact 10 to contact 10, ground.</title>
<rect x="20" y="20" width="280" height="240" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="160.0" y="145.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2"></text>
<rect x="700" y="20" width="280" height="240" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="840.0" y="145.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2"></text>
<text x="160" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Prime header GG (J38)</text>
<text x="840" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">LCD board J1</text>
<path d="M300 84H700" stroke="#ff9f43" stroke-width="3" fill="none"/><circle cx="300" cy="84" r="5" fill="#ff9f43"/><circle cx="700" cy="84" r="5" fill="#ff9f43"/><text x="286" y="89" text-anchor="end" font-size="13" fill="#e6ebf2">contact 1</text><text x="714" y="89" font-size="13" fill="#e6ebf2">contact 1</text><text x="500" y="77" text-anchor="middle" font-size="12" fill="#a9b4c2">3.3 V</text>
<path d="M300 122H700" stroke="#ff6b6b" stroke-width="3" fill="none"/><circle cx="300" cy="122" r="5" fill="#ff6b6b"/><circle cx="700" cy="122" r="5" fill="#ff6b6b"/><text x="286" y="127" text-anchor="end" font-size="13" fill="#e6ebf2">contact 2</text><text x="714" y="127" font-size="13" fill="#e6ebf2">contact 2</text><text x="500" y="115" text-anchor="middle" font-size="12" fill="#a9b4c2">5 V</text>
<path d="M300 160H700" stroke="#5fb3ff" stroke-width="3" fill="none"/><circle cx="300" cy="160" r="5" fill="#5fb3ff"/><circle cx="700" cy="160" r="5" fill="#5fb3ff"/><text x="286" y="165" text-anchor="end" font-size="13" fill="#e6ebf2">PF0, contact 8</text><text x="714" y="165" font-size="13" fill="#e6ebf2">contact 8</text><text x="500" y="153" text-anchor="middle" font-size="12" fill="#a9b4c2">SDA</text>
<path d="M300 198H700" stroke="#6fe08a" stroke-width="3" fill="none"/><circle cx="300" cy="198" r="5" fill="#6fe08a"/><circle cx="700" cy="198" r="5" fill="#6fe08a"/><text x="286" y="203" text-anchor="end" font-size="13" fill="#e6ebf2">PF1, contact 9</text><text x="714" y="203" font-size="13" fill="#e6ebf2">contact 9</text><text x="500" y="191" text-anchor="middle" font-size="12" fill="#a9b4c2">SCL</text>
<path d="M300 236H700" stroke="#a9b4c2" stroke-width="3" fill="none"/><circle cx="300" cy="236" r="5" fill="#a9b4c2"/><circle cx="700" cy="236" r="5" fill="#a9b4c2"/><text x="286" y="241" text-anchor="end" font-size="13" fill="#e6ebf2">contact 10</text><text x="714" y="241" font-size="13" fill="#e6ebf2">contact 10</text><text x="500" y="229" text-anchor="middle" font-size="12" fill="#a9b4c2">ground</text>
</svg>
  </div>
  <figcaption>Five connections.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Check the module</h3>
    <p>Compare its pin order, size, hole positions and backlight rating with the board.</p>
  </li>
  <li class="xb-step">
    <h3>Solder it</h3>
    <p>Fit the module to DS1 with a pin header and spacers.</p>
  </li>
  <li class="xb-step">
    <h3>Connect and power</h3>
    <p>Plug J1 into header GG and power up.</p>
    <p class="xb-expect">Turn RV1 until a row of faint blocks appears, the sign of an uninitialised module.</p>
  </li>
  <li class="xb-step">
    <h3>Initialise</h3>
    <p>Your driver starts the display in 4-bit mode at address 0x27 and writes text.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Show text</td><td>None</td><td>No SmoothieV2 driver for this display backpack</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

There is nothing to add to `config.ini`.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
<svg viewBox="0 0 1000 110" role="img" aria-labelledby="xb-lcd-how-t">
<title id="xb-lcd-how-t">The 3.3 V bus is shifted to 5 V and an expander drives the display.</title>
<rect x="20.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="120.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J1 or J3</text><text x="120.0" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">3.3 V I2C</text>
<path d="M220.0 51H273.3" stroke="#a9b4c2" stroke-width="3"/><path d="M273.3 51l-9 -5v10z" fill="#a9b4c2"/>
<rect x="273.3" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="373.3" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Q1, Q2</text><text x="373.3" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">level shift</text>
<path d="M473.3 51H526.6" stroke="#a9b4c2" stroke-width="3"/><path d="M526.6 51l-9 -5v10z" fill="#a9b4c2"/>
<rect x="526.7" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="626.7" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">U1 PCF8574</text><text x="626.7" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">eight outputs</text>
<path d="M726.7 51H780.0" stroke="#a9b4c2" stroke-width="3"/><path d="M780.0 51l-9 -5v10z" fill="#a9b4c2"/>
<rect x="780.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="880.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">DS1 LCD</text><text x="880.0" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">characters</text>
</svg>
  </div>
  <figcaption>One signal path.</figcaption>
</figure>
{:/nomarkdown}

A character display wants parallel signals. The expander turns I2C bytes into the four data lines and three control lines, and uses its eighth output to switch the backlight. It runs from 5&nbsp;V to suit common modules; two transistors let the 3.3&nbsp;V bus talk to it safely.

## Solder links {#options}

Choose a free address when other PCF8574 devices, such as a keypad, share the bus.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Solder links">
<svg viewBox="0 0 1000 218" role="img" aria-labelledby="xb-lcd-jp-t">
<title id="xb-lcd-jp-t">Solder links as delivered: JP1 closed; JP2 closed; JP8 closed; JP9 closed; JP10 open; JP11 open; JP12 open.</title>
<rect x="20" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="72" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="114" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="98" y="34" width="20" height="10" fill="#e0b84a"/>
<text x="108" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP1 · closed</text><text x="108" y="90" text-anchor="middle" font-size="11" fill="#a9b4c2">SDA pull-up</text>
<rect x="216" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="268" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="310" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="294" y="34" width="20" height="10" fill="#e0b84a"/>
<text x="304" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP2 · closed</text><text x="304" y="90" text-anchor="middle" font-size="11" fill="#a9b4c2">SCL pull-up</text>
<rect x="412" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="464" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="506" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="490" y="34" width="20" height="10" fill="#e0b84a"/>
<text x="500" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP8 · closed</text><text x="500" y="90" text-anchor="middle" font-size="11" fill="#a9b4c2">chain SDA</text>
<rect x="608" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="660" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="702" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="686" y="34" width="20" height="10" fill="#e0b84a"/>
<text x="696" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP9 · closed</text><text x="696" y="90" text-anchor="middle" font-size="11" fill="#a9b4c2">chain SCL</text>
<rect x="804" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="856" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="898" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="892" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP10 · open</text><text x="892" y="90" text-anchor="middle" font-size="11" fill="#a9b4c2">address bit 0</text>
<rect x="20" y="114" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="72" y="128" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="114" y="128" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="108" y="176" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP11 · open</text><text x="108" y="194" text-anchor="middle" font-size="11" fill="#a9b4c2">address bit 1</text>
<rect x="216" y="114" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="268" y="128" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="310" y="128" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="304" y="176" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP12 · open</text><text x="304" y="194" text-anchor="middle" font-size="11" fill="#a9b4c2">address bit 2</text>
</svg>
  </div>
  <figcaption>The links as delivered. Close one with a small blob of solder across both pads; open it by removing the solder or cutting the copper between the pads.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>What it does</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>JP1</td><td>Connects the SDA pull-up</td><td>Closed</td></tr>
    <tr><td>JP2</td><td>Connects the SCL pull-up</td><td>Closed</td></tr>
    <tr><td>JP8</td><td>Continues SDA</td><td>Closed</td></tr>
    <tr><td>JP9</td><td>Continues SCL</td><td>Closed</td></tr>
    <tr><td>JP10</td><td>Closed subtracts 1 from address 0x27</td><td>Open</td></tr>
    <tr><td>JP11</td><td>Closed subtracts 2</td><td>Open</td></tr>
    <tr><td>JP12</td><td>Closed subtracts 4</td><td>Open</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Chaining {#chaining}

Further I2C devices can follow on J2, each with its own address.

{::nomarkdown}
{% include _includes/extension-chain-figure.html id="xb-lcd" board="character LCD board" in_label="I IN" chain_label="CHAIN" lane1="pin 7, free" lane2="pin 8, SDA" lane3="pin 9, SCL" s1="closed" s2="closed" s3="closed" caption="All three continue to the next board; pin 7 is wired straight through." %}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>On CHAIN</th></tr></thead>
  <tbody>
    <tr><td>1, 2, 10</td><td>Power and ground</td><td>Passed on</td></tr>
    <tr><td>3 to 7</td><td>Free</td><td>Passed on</td></tr>
    <tr><td>8, 9</td><td>I2C</td><td>Passed on through closed links</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Likely cause</th><th>What to check</th></tr></thead>
  <tbody>
    <tr><td>Blank screen</td><td>Contrast, no 5 V, or backlight off</td><td>Turn RV1; test 5 V; enable backlight</td></tr>
    <tr><td>Only a row of blocks</td><td>Display not initialised</td><td>Check address and driver</td></tr>
    <tr><td>No answer on the bus</td><td>Address links or wiring</td><td>Test points SDA5, SCL5</td></tr>
    <tr><td>Garbled characters</td><td>Clock too fast or wrong bit order</td><td>Use 100 kHz and the bit order above</td></tr>
    <tr><td>Backlight dim or hot</td><td>Module resistor differs</td><td>Check the module backlight rating</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-unknown"></span>Display backlight</th></tr></thead>
  <tbody>
    <tr><td>Lit means</td><td>Switched on by expander output P3</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/character-lcd-display/character-lcd-display-schematic.pdf">Schematic (PDF)</a></td><td>The circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/character-lcd-display/character-lcd-display-bom.csv">Parts list (CSV)</a></td><td>Every component with its value, footprint and part number where one is chosen</td></tr>
    <tr><td><a href="/images/extensions/character-lcd-display/character-lcd-display-diagram.webp">Board drawing (WebP)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side. Compare the module&rsquo;s own mounting holes with the part you buy.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-lcd-mount-t">
  <title id="xb-lcd-mount-t">Mounting drawing of the character LCD board, component side: outline 110 by 70 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="212.9" y="78.0" width="534.3" height="340.0" rx="4.9" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M212.9 56H747.1"/><path d="M212.9 50V62"/><path d="M747.1 50V62"/><path d="M773.1 78.0V418.0"/><path d="M767.1 78.0h12"/><path d="M767.1 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">110</text>
  <text x="785.1" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">70</text>
  <circle cx="212.9" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="200.9" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M154.9 104.0h30" fill="none"/><path d="M188.9 104.0l-8 -4v8z"/><path d="M154.9 104.0v30" fill="none"/><path d="M154.9 138.0l-4 -8h8z"/></g>
  <text x="192.9" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="150.9" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="237.1" cy="102.3" r="7.8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M225.4 102.3h23.5M237.1 90.5v23.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="229.4" y="130.1" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.00</text>
  <circle cx="722.9" cy="102.3" r="7.8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M711.1 102.3h23.5M722.9 90.5v23.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="730.6" y="130.1" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  105.00, 5.00</text>
  <circle cx="237.1" cy="393.7" r="7.8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M225.4 393.7h23.5M237.1 381.9v23.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="229.4" y="375.9" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 65.00</text>
  <circle cx="722.9" cy="393.7" r="7.8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M711.1 393.7h23.5M722.9 381.9v23.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="730.6" y="375.9" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  105.00, 65.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 110 × 70&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>105.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>5.00</td><td>65.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>105.00</td><td>65.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Every figure is a design value, a calculated or simulated value, or a manufacturer&rsquo;s data sheet value, as the last column says. A dash means no figure is given.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis</th></tr></thead>
  <tbody>
    <tr><td>Supplies</td><td>J1</td><td>&mdash;</td><td>3.3 V and 5 V</td><td>&mdash;</td><td>Design</td></tr>
    <tr><td>Module logic current</td><td>5 V</td><td>&mdash;</td><td>&mdash;</td><td>4 mA</td><td>Module data sheet</td></tr>
    <tr><td>Backlight current</td><td>5 V</td><td>&mdash;</td><td>&mdash;</td><td>80 mA</td><td>Estimate from module data</td></tr>
    <tr><td>I2C clock</td><td>U1</td><td>&mdash;</td><td>&mdash;</td><td>100 kHz</td><td>PCF8574 data sheet</td></tr>
    <tr><td>Low level, 5 V side</td><td>SDA, SCL</td><td>&mdash;</td><td>43 mV</td><td>0.4 V</td><td>Simulated</td></tr>
    <tr><td>Rise time, 5 V side</td><td>SDA, SCL</td><td>&mdash;</td><td>0.41 &micro;s</td><td>1 &micro;s</td><td>Simulated</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Component stress limits

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Part</th><th>Limit</th><th>Use on this board</th></tr></thead>
  <tbody>
    <tr><td>Backlight</td><td>Set by the module</td><td>Verify resistor and current for your module</td></tr>
    <tr><td>Capacitors</td><td>10 V and 16 V</td><td>5 V</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: simulation {#simulation}

The level shifter was simulated with ngspice.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Simulated results against limits">
<svg viewBox="0 0 1000 134" role="img" aria-labelledby="xb-lcd-sim-t">
<title id="xb-lcd-sim-t">Each simulated value (yellow mark) against its allowed range (green band).</title>
<text x="385" y="41" text-anchor="end" font-size="13" fill="#e6ebf2">Low level on the 5 V side</text>
<path d="M400 36H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M400.0 36H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M444.6 23v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="41" font-size="13" font-weight="700" fill="#ffcc33">43&nbsp;mV</text>
<text x="385" y="85" text-anchor="end" font-size="13" fill="#e6ebf2">Rise time on the 5 V side (400 kHz limit 300 ns;</text>
<text x="385" y="101" text-anchor="end" font-size="13" fill="#e6ebf2">module bus 100 kHz limit 1000 ns)</text>
<path d="M400 88H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M400.0 88H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M570.2 75v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="93" font-size="13" font-weight="700" fill="#ffcc33">0.41&nbsp;&micro;s</text>
</svg>
  </div>
  <figcaption>Simulated value (yellow) against the limit used for it (green). Each bar has its own scale.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Result</th><th>Simulated value</th><th>Limit</th><th>Outcome</th></tr></thead>
  <tbody>
    <tr><td>Low level on the 5 V side</td><td>43&nbsp;mV</td><td>at most 400&nbsp;mV</td><td>Within</td></tr>
    <tr><td>Rise time on the 5 V side (400 kHz limit 300 ns; module bus 100 kHz limit 1000 ns)</td><td>0.41&nbsp;&micro;s</td><td>at most 1&nbsp;&micro;s</td><td>Within</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Not simulated: the display module and backlight; the transistor model is generic.

## Appendix: datasheet {#datasheets}

The first page of each data sheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/character-lcd-display/datasheets/gdm1602k.pdf"><img src="/images/extensions/character-lcd-display/datasheets/gdm1602k-page1.png" alt="First page of the GDM1602K character module datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/character-lcd-display/datasheets/gdm1602k.pdf">GDM1602K character module</a> — Xiamen Ocular, 1 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/character-lcd-display/datasheets/tc1602a.pdf"><img src="/images/extensions/character-lcd-display/datasheets/tc1602a-page1.png" alt="First page of the TC1602A character module datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/character-lcd-display/datasheets/tc1602a.pdf">TC1602A character module</a> — Tinsharp, 18 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/character-lcd-display/datasheets/pcf8574.pdf"><img src="/images/extensions/character-lcd-display/datasheets/pcf8574-page1.png" alt="First page of the PCF8574 remote 8-bit I/O expander datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/character-lcd-display/datasheets/pcf8574.pdf">PCF8574 remote 8-bit I/O expander</a> — Texas Instruments, 39 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/character-lcd-display/datasheets/bss138.pdf"><img src="/images/extensions/character-lcd-display/datasheets/bss138-page1.png" alt="First page of the BSS138 N-channel MOSFET datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/character-lcd-display/datasheets/bss138.pdf">BSS138 N-channel MOSFET</a> — onsemi, 8 pages.</figcaption>
</figure>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
