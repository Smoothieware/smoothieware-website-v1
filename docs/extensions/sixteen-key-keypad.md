---
layout: default
title: "16-key keypad"
description: "A 4 by 4 keypad with per-key diodes on a PCF8574 I2C expander: pinout, wiring, scanning, addresses, limits and files."
permalink: /extensions/sixteen-key-keypad
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Controls and displays</p>
    <h1 id="sixteen-key-keypad">16-key keypad</h1>
    <p class="xb-lead">Sixteen push buttons marked like a telephone keypad plus A to D, read through two I2C wires. Each key has its own diode, so several keys can be told apart when held together. Reading it needs your own driver.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/sixteen-key-keypad/sixteen-key-keypad-diagram.webp" alt="Top view of the keypad board: sockets at the upper left and right, a Qwiic connector on top and a four by four grid of push buttons.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>
<div class="xb-stats">
  <div class="xb-stat"><b>16 keys</b><span>4 &times; 4 with a diode each</span></div>
  <div class="xb-stat"><b>0x20 to 0x27</b><span>I2C address</span></div>
  <div class="xb-stat"><b>PCF8574</b><span>expander, 100&nbsp;kHz</span></div>
  <div class="xb-stat"><b>Interrupt</b><span>contact 3</span></div>
  <div class="xb-stat"><b>I2C + Qwiic</b><span>3.3&nbsp;V</span></div>
  <div class="xb-stat"><b>90 &times; 120</b><span>millimetres, four M3 holes</span></div>
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
    <tr><td>Purpose</td><td>A numeric or macro keypad on a machine. Never an emergency stop or safety control; not sealed against coolant or chips</td></tr>
    <tr><td>Keys</td><td>16 through-hole 12&nbsp;mm switches at 17 &times; 19&nbsp;mm spacing, legends on the board</td></tr>
    <tr><td>Interface</td><td>TI PCF8574 I2C expander, 100&nbsp;kHz maximum, address 0x20 plus links</td></tr>
    <tr><td>Interrupt</td><td>Low when a column changes, with a 10&nbsp;k&Omega; pull-up</td></tr>
    <tr><td>Supply</td><td>3.3&nbsp;V</td></tr>
    <tr><td>Connectors</td><td>Two Gadgeteer type I sockets (Samtec SHF-105, 1.27&nbsp;mm) and one Qwiic</td></tr>
    <tr><td>Size</td><td>90 &times; 120&nbsp;mm, four M3 holes on an 80 &times; 110&nbsp;mm pattern</td></tr>
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
      <img src="/images/extensions/sixteen-key-keypad/sixteen-key-keypad-diagram.webp" alt="Top view of the keypad board with 10 numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:6.1%;top:20.5%" aria-label="1: input socket i in (j1)">1<span class="xb-pop"><b>Input socket I IN (J1)</b> — SDA on contact 8, SCL on 9, interrupt on 3.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-2" style="left:93.9%;top:20.5%" aria-label="2: chain socket chain (j2)">2<span class="xb-pop"><b>Chain socket CHAIN (J2)</b> — Continues the bus.</span></a>
      <a class="xb-mk xb-pb" href="#tour-3" style="left:75.0%;top:5.7%" aria-label="3: qwiic connector (j3)">3<span class="xb-pop"><b>Qwiic connector (J3)</b> — The same bus on a four-way cable.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:50.0%;top:21.3%" aria-label="4: i/o expander (u1)">4<span class="xb-pop"><b>I/O expander (U1)</b> — PCF8574: four lines drive rows, four read columns.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-5" style="left:15.5%;top:39.8%" aria-label="5: keys (sw1 to sw16)">5<span class="xb-pop"><b>Keys (SW1 to SW16)</b> — Read by row and column.</span></a>
      <a class="xb-mk xb-pl" href="#tour-6" style="left:22.3%;top:95.4%" aria-label="6: key diodes (d1 to d16)">6<span class="xb-pop"><b>Key diodes (D1 to D16)</b> — One per key, preventing false readings with several keys held.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:35.3%;top:20.9%" aria-label="7: address links (jp10 to jp12)">7<span class="xb-pop"><b>Address links (JP10 to JP12)</b> — Add 1, 2 and 4 to the base address when closed.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:70.7%;top:29.1%" aria-label="8: pull-up links (jp1, jp2)">8<span class="xb-pop"><b>Pull-up links (JP1, JP2)</b> — Closed as delivered.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-9" style="left:16.3%;top:18.0%" aria-label="9: chain links (jp3, jp8, jp9)">9<span class="xb-pop"><b>Chain links (JP3, JP8, JP9)</b> — Interrupt open; bus closed.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-10" style="left:6.5%;top:4.9%" aria-label="10: mounting hole">10<span class="xb-pop"><b>Mounting hole</b> — One of four M3 holes.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Input socket I IN (J1)</b> — SDA on contact 8, SCL on 9, interrupt on 3.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket CHAIN (J2)</b> — Continues the bus.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Qwiic connector (J3)</b> — The same bus on a four-way cable.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>I/O expander (U1)</b> — PCF8574: four lines drive rows, four read columns.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Keys (SW1 to SW16)</b> — Read by row and column.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Key diodes (D1 to D16)</b> — One per key, preventing false readings with several keys held.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Address links (JP10 to JP12)</b> — Add 1, 2 and 4 to the base address when closed.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Pull-up links (JP1, JP2)</b> — Closed as delivered.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Chain links (JP3, JP8, JP9)</b> — Interrupt open; bus closed.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Mounting hole</b> — One of four M3 holes.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

Check contact numbering with the power removed before wiring by hand.

### J1: input socket (I IN)

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>Use</th><th>Prime header GG</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Board supply</td><td>3.3 V</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Passed to the chain only</td><td>5 V</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">INT</span></td><td>Key change interrupt</td><td>PH2</td></tr>
    <tr><td>4 to 7</td><td>Passed through</td><td>Not used</td><td>PH4, PC0, PF15, PH3</td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">SDA</span></td><td>I2C data</td><td>PF0 (I2C2_SDA)</td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">SCL</span></td><td>I2C clock</td><td>PF1 (I2C2_SCL)</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Ground</td><td>GND</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Key matrix on the expander

A pressed key connects its row to its column.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Row line</th><th>P4</th><th>P5</th><th>P6</th><th>P7</th></tr></thead>
  <tbody>
    <tr><td>P0</td><td>1</td><td>2</td><td>3</td><td>A</td></tr>
    <tr><td>P1</td><td>4</td><td>5</td><td>6</td><td>B</td></tr>
    <tr><td>P2</td><td>7</td><td>8</td><td>9</td><td>C</td></tr>
    <tr><td>P3</td><td>*</td><td>0</td><td>#</td><td>D</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>An I2C port</b><span>Prime header GG or a Qwiic host.</span></div>
  <div class="xb-card"><b>A cable</b><span>Gadgeteer ten-way or Qwiic.</span></div>
  <div class="xb-card"><b>A free address</b><span>Other PCF8574 devices, such as an LCD backpack, share the 0x20 to 0x27 range.</span></div>
  <div class="xb-card"><b>Your own driver</b><span>None is supplied.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Minimum wiring">
<svg viewBox="0 0 1000 280" role="img" aria-labelledby="xb-keys-wire-t">
<title id="xb-keys-wire-t">Minimum wiring: contact 1 to contact 1, 3.3 V; PH2, contact 3 to contact 3, interrupt (optional); PF0, contact 8 to contact 8, SDA; PF1, contact 9 to contact 9, SCL; contact 10 to contact 10, ground.</title>
<rect x="20" y="20" width="280" height="240" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="160.0" y="145.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea"></text>
<rect x="700" y="20" width="280" height="240" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="840.0" y="145.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea"></text>
<text x="160" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Prime header GG (J38)</text>
<text x="840" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Keypad J1</text>
<path d="M300 84H700" stroke="#ff9f43" stroke-width="3" fill="none"/><circle cx="300" cy="84" r="5" fill="#ff9f43"/><circle cx="700" cy="84" r="5" fill="#ff9f43"/><text x="286" y="89" text-anchor="end" font-size="13" fill="#eaeaea">contact 1</text><text x="714" y="89" font-size="13" fill="#eaeaea">contact 1</text><text x="500" y="77" text-anchor="middle" font-size="12" fill="#b3b3b3">3.3 V</text>
<path d="M300 122H700" stroke="#ffd75f" stroke-width="3" fill="none"/><circle cx="300" cy="122" r="5" fill="#ffd75f"/><circle cx="700" cy="122" r="5" fill="#ffd75f"/><text x="286" y="127" text-anchor="end" font-size="13" fill="#eaeaea">PH2, contact 3</text><text x="714" y="127" font-size="13" fill="#eaeaea">contact 3</text><text x="500" y="115" text-anchor="middle" font-size="12" fill="#b3b3b3">interrupt (optional)</text>
<path d="M300 160H700" stroke="#5fb3ff" stroke-width="3" fill="none"/><circle cx="300" cy="160" r="5" fill="#5fb3ff"/><circle cx="700" cy="160" r="5" fill="#5fb3ff"/><text x="286" y="165" text-anchor="end" font-size="13" fill="#eaeaea">PF0, contact 8</text><text x="714" y="165" font-size="13" fill="#eaeaea">contact 8</text><text x="500" y="153" text-anchor="middle" font-size="12" fill="#b3b3b3">SDA</text>
<path d="M300 198H700" stroke="#6fe08a" stroke-width="3" fill="none"/><circle cx="300" cy="198" r="5" fill="#6fe08a"/><circle cx="700" cy="198" r="5" fill="#6fe08a"/><text x="286" y="203" text-anchor="end" font-size="13" fill="#eaeaea">PF1, contact 9</text><text x="714" y="203" font-size="13" fill="#eaeaea">contact 9</text><text x="500" y="191" text-anchor="middle" font-size="12" fill="#b3b3b3">SCL</text>
<path d="M300 236H700" stroke="#b3b3b3" stroke-width="3" fill="none"/><circle cx="300" cy="236" r="5" fill="#b3b3b3"/><circle cx="700" cy="236" r="5" fill="#b3b3b3"/><text x="286" y="241" text-anchor="end" font-size="13" fill="#eaeaea">contact 10</text><text x="714" y="241" font-size="13" fill="#eaeaea">contact 10</text><text x="500" y="229" text-anchor="middle" font-size="12" fill="#b3b3b3">ground</text>
</svg>
  </div>
  <figcaption>Four wires, plus the optional interrupt.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Mount the board</h3>
    <p>Use all four holes: pressing keys loads the board.</p>
  </li>
  <li class="xb-step">
    <h3>Connect with the power off</h3>
    <p>Use J1 or Qwiic.</p>
  </li>
  <li class="xb-step">
    <h3>Scan the keys</h3>
    <p>Write ones to P4 to P7, drive one row low at a time (write 0xFE, 0xFD, 0xFB, 0xF7) and read the byte.</p>
    <p class="xb-expect">A pressed key in the driven row reads as a zero in its column bit.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Read key presses</td><td>None</td><td>No SmoothieV2 driver for this expander</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

There is nothing to add to `config.ini`.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
<svg viewBox="0 0 1000 110" role="img" aria-labelledby="xb-keys-how-t">
<title id="xb-keys-how-t">The expander drives rows and reads columns; diodes isolate the keys.</title>
<rect x="20.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="120.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Rows P0 to P3</text><text x="120.0" y="67.0" text-anchor="middle" font-size="12" fill="#b3b3b3">driven low</text>
<path d="M220.0 51H273.3" stroke="#b3b3b3" stroke-width="3"/><path d="M273.3 51l-9 -5v10z" fill="#b3b3b3"/>
<rect x="273.3" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="373.3" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Diode</text><text x="373.3" y="67.0" text-anchor="middle" font-size="12" fill="#b3b3b3">one way</text>
<path d="M473.3 51H526.6" stroke="#b3b3b3" stroke-width="3"/><path d="M526.6 51l-9 -5v10z" fill="#b3b3b3"/>
<rect x="526.7" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="626.7" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Key</text><text x="626.7" y="67.0" text-anchor="middle" font-size="12" fill="#b3b3b3">closes</text>
<path d="M726.7 51H780.0" stroke="#b3b3b3" stroke-width="3"/><path d="M780.0 51l-9 -5v10z" fill="#b3b3b3"/>
<rect x="780.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="880.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Columns P4 to P7</text><text x="880.0" y="67.0" text-anchor="middle" font-size="12" fill="#b3b3b3">read low</text>
</svg>
  </div>
  <figcaption>One key position of the matrix.</figcaption>
</figure>
{:/nomarkdown}

The columns are held high by weak current sources inside the expander. The driver pulls one row low; a pressed key in that row pulls its column down through its diode to about 0.63&nbsp;V, which reads as zero. To use the interrupt, hold all rows low while idle so that any key changes a column, then scan row by row.

## Solder links {#options}

With all address links open the address is 0x20. Open JP1 and JP2 when the bus already has pull-ups.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Solder links">
<svg viewBox="0 0 1000 218" role="img" aria-labelledby="xb-keys-jp-t">
<title id="xb-keys-jp-t">Solder links as delivered: JP1 closed; JP2 closed; JP3 open; JP8 closed; JP9 closed; JP10 open; JP11 open; JP12 open.</title>
<rect x="20" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="72" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="114" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="98" y="34" width="20" height="10" fill="#e0b84a"/>
<text x="108" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP1 · closed</text><text x="108" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">SDA pull-up</text>
<rect x="216" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="268" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="310" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="294" y="34" width="20" height="10" fill="#e0b84a"/>
<text x="304" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP2 · closed</text><text x="304" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">SCL pull-up</text>
<rect x="412" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="464" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="506" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="500" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP3 · open</text><text x="500" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">chain interrupt</text>
<rect x="608" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="660" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="702" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="686" y="34" width="20" height="10" fill="#e0b84a"/>
<text x="696" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP8 · closed</text><text x="696" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">chain SDA</text>
<rect x="804" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="856" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="898" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="882" y="34" width="20" height="10" fill="#e0b84a"/>
<text x="892" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP9 · closed</text><text x="892" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">chain SCL</text>
<rect x="20" y="114" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="72" y="128" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="114" y="128" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="108" y="176" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP10 · open</text><text x="108" y="194" text-anchor="middle" font-size="11" fill="#b3b3b3">address +1</text>
<rect x="216" y="114" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="268" y="128" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="310" y="128" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="304" y="176" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP11 · open</text><text x="304" y="194" text-anchor="middle" font-size="11" fill="#b3b3b3">address +2</text>
<rect x="412" y="114" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="464" y="128" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="506" y="128" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="500" y="176" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP12 · open</text><text x="500" y="194" text-anchor="middle" font-size="11" fill="#b3b3b3">address +4</text>
</svg>
  </div>
  <figcaption>The links as delivered. Close one with a small blob of solder across both pads; open it by removing the solder or cutting the copper between the pads.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>What it does</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>JP1</td><td>Connects the SDA pull-up</td><td>Closed</td></tr>
    <tr><td>JP2</td><td>Connects the SCL pull-up</td><td>Closed</td></tr>
    <tr><td>JP3</td><td>Joins the interrupt to the chain</td><td>Open</td></tr>
    <tr><td>JP8</td><td>Continues SDA</td><td>Closed</td></tr>
    <tr><td>JP9</td><td>Continues SCL</td><td>Closed</td></tr>
    <tr><td>JP10</td><td>Adds 1 to the address</td><td>Open</td></tr>
    <tr><td>JP11</td><td>Adds 2 to the address</td><td>Open</td></tr>
    <tr><td>JP12</td><td>Adds 4 to the address</td><td>Open</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Chaining {#chaining}

Further I2C devices can follow, each with its own address.

{::nomarkdown}
{% include _includes/extension-chain-figure.html id="xb-keys" board="keypad board" in_label="I IN" chain_label="CHAIN" lane1="pin 3, interrupt" lane2="pin 8, SDA" lane3="pin 9, SCL" s1="open" s2="closed" s3="closed" caption="The bus continues; the interrupt stops here." %}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>On CHAIN</th></tr></thead>
  <tbody>
    <tr><td>1, 2, 10</td><td>Power and ground</td><td>Passed on</td></tr>
    <tr><td>3</td><td>Interrupt</td><td>Stopped by open JP3</td></tr>
    <tr><td>4 to 7</td><td>Free</td><td>Passed on</td></tr>
    <tr><td>8, 9</td><td>I2C</td><td>Passed on through closed links</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Likely cause</th><th>What to check</th></tr></thead>
  <tbody>
    <tr><td>No answer on the bus</td><td>Wiring, address or clock above 100 kHz</td><td>Check links JP10 to JP12 and use 100 kHz</td></tr>
    <tr><td>All keys read high</td><td>No row driven low</td><td>Drive one row low before reading</td></tr>
    <tr><td>A whole column reads low</td><td>Column bit written as zero</td><td>Write ones to P4 to P7</td></tr>
    <tr><td>One key dead</td><td>Soldering of its switch or diode</td><td>Inspect that key</td></tr>
    <tr><td>No interrupt</td><td>Rows not low while idle</td><td>Hold rows low while waiting</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The board has no indicator lights; use the test points.

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/sixteen-key-keypad/sixteen-key-keypad-schematic.pdf">Schematic (PDF)</a></td><td>The circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/sixteen-key-keypad/sixteen-key-keypad-bom.csv">Parts list (CSV)</a></td><td>Every component with its value, footprint and part number where one is chosen</td></tr>
    <tr><td><a href="/images/extensions/sixteen-key-keypad/sixteen-key-keypad-diagram.webp">Board drawing (WebP)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side. 

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-keys-mount-t">
  <title id="xb-keys-mount-t">Mounting drawing of the keypad board, component side: outline 90 by 120 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="352.5" y="78.0" width="255.0" height="340.0" rx="2.8" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M352.5 56H607.5"/><path d="M352.5 50V62"/><path d="M607.5 50V62"/><path d="M633.5 78.0V418.0"/><path d="M627.5 78.0h12"/><path d="M627.5 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">90</text>
  <text x="645.5" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">120</text>
  <circle cx="352.5" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="340.5" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M294.5 104.0h30" fill="none"/><path d="M328.5 104.0l-8 -4v8z"/><path d="M294.5 104.0v30" fill="none"/><path d="M294.5 138.0l-4 -8h8z"/></g>
  <text x="332.5" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="290.5" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="366.7" cy="92.2" r="4.5" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M358.1 92.2h17.1M366.7 83.6v17.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="362.1" y="116.7" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.00</text>
  <circle cx="593.3" cy="92.2" r="4.5" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M584.8 92.2h17.1M593.3 83.6v17.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="597.9" y="116.7" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  85.00, 5.00</text>
  <circle cx="366.7" cy="403.8" r="4.5" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M358.1 403.8h17.1M366.7 395.3v17.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="362.1" y="389.3" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 115.00</text>
  <circle cx="593.3" cy="403.8" r="4.5" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M584.8 403.8h17.1M593.3 395.3v17.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="597.9" y="389.3" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">4</tspan>  85.00, 115.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 90 × 120&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>85.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>5.00</td><td>115.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>85.00</td><td>115.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Every figure is a design value, a calculated or simulated value, or a manufacturer&rsquo;s data sheet value, as the last column says. A dash means no figure is given.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis</th></tr></thead>
  <tbody>
    <tr><td>Supply</td><td>J1 contact 1</td><td>&mdash;</td><td>3.3 V</td><td>&mdash;</td><td>Design</td></tr>
    <tr><td>I2C clock</td><td>U1</td><td>&mdash;</td><td>&mdash;</td><td>100 kHz</td><td>TI data sheet</td></tr>
    <tr><td>Column pull-up current</td><td>P4 to P7</td><td>30 &micro;A</td><td>&mdash;</td><td>310 &micro;A</td><td>TI data sheet</td></tr>
    <tr><td>Pressed-key column level</td><td>P4 to P7</td><td>&mdash;</td><td>0.63 V</td><td>0.99 V</td><td>Simulated; limit is the input low level</td></tr>
    <tr><td>Bus rise time, 100 pF</td><td>SDA, SCL</td><td>&mdash;</td><td>280 ns</td><td>1000 ns</td><td>Simulated</td></tr>
    <tr><td>Pull-up current, both lines low</td><td>3.3 V</td><td>&mdash;</td><td>2.0 mA</td><td>&mdash;</td><td>Calculated</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Component stress limits

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Part</th><th>Limit</th><th>Use on this board</th></tr></thead>
  <tbody>
    <tr><td>Any signal</td><td>3.3 V design</td><td>Do not connect 5 V logic</td></tr>
    <tr><td>Capacitors</td><td>10 V and 16 V</td><td>3.3 V</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: simulation {#simulation}

A pressed key with its diode, and the I2C bus loading, were simulated with ngspice.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Simulated results against limits">
<svg viewBox="0 0 1000 134" role="img" aria-labelledby="xb-keys-sim-t">
<title id="xb-keys-sim-t">Each simulated value (yellow mark) against its allowed range (green band).</title>
<text x="385" y="41" text-anchor="end" font-size="13" fill="#eaeaea">Pressed-key column level (input low limit 0.99 V)</text>
<path d="M400 36H860" stroke="#404040" stroke-width="10" stroke-linecap="round"/><path d="M400.0 36H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M661.9 23v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="41" font-size="13" font-weight="700" fill="#ffcc33">0.63&nbsp;V</text>
<text x="385" y="93" text-anchor="end" font-size="13" fill="#eaeaea">I2C rise time 30 to 70 %</text>
<path d="M400 88H860" stroke="#404040" stroke-width="10" stroke-linecap="round"/><path d="M400.0 88H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M514.8 75v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="93" font-size="13" font-weight="700" fill="#ffcc33">280&nbsp;ns</text>
</svg>
  </div>
  <figcaption>Simulated value (yellow) against the limit used for it (green). Each bar has its own scale.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Result</th><th>Simulated value</th><th>Limit</th><th>Outcome</th></tr></thead>
  <tbody>
    <tr><td>Pressed-key column level (input low limit 0.99 V)</td><td>0.63&nbsp;V</td><td>at most 990&nbsp;mV</td><td>Within</td></tr>
    <tr><td>I2C rise time 30 to 70 %</td><td>280&nbsp;ns</td><td>at most 1&nbsp;&micro;s</td><td>Within</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Not simulated: key bounce and mechanical life, because no switch part number is fixed.

## Appendix: datasheet {#datasheets}

The first page of the expander data sheet. Click the page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/sixteen-key-keypad/datasheets/pcf8574.pdf"><img src="/images/extensions/sixteen-key-keypad/datasheets/pcf8574-page1.png" alt="First page of the PCF8574 remote 8-bit I/O expander datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/sixteen-key-keypad/datasheets/pcf8574.pdf">PCF8574 remote 8-bit I/O expander</a> — Texas Instruments, 39 pages.</figcaption>
</figure>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
