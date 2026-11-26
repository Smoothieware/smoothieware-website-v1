---
layout: default
title: "Position feedback board"
description: "A counter board that reads a 5 V differential ABZ quadrature encoder over SPI, with a switched encoder supply: pinout, links and wiring."
permalink: /extensions/position-feedback-board
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Sensors</p>
    <h1 id="position-feedback-board">Position feedback board</h1>
    <p class="xb-lead">Counts the pulses of a 5&nbsp;V differential incremental encoder (A, B and Z pairs) with an LS7366R counter that the controller reads over SPI, and powers the encoder through a switch that reports faults. It is not an adapter for magnetic absolute encoders, and Smoothieware has no driver for it.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/position-feedback-board/position-feedback-board-diagram.png" alt="Top view of the position feedback board: two sockets along the top, a counter and a receiver chip in the middle and a nine-contact encoder connector along the bottom.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>LS7366R</b><span>SPI quadrature counter, 16&nbsp;MHz oscillator</span></div>
  <div class="xb-stat"><b>ABZ, RS-422</b><span>three differential pairs with a 120&nbsp;&Omega; termination link each</span></div>
  <div class="xb-stat"><b>5 V encoder</b><span>switched by a TPS2553 with a fault output; the board is marked 176&nbsp;mA max</span></div>
  <div class="xb-stat"><b>2 lights</b><span>counter flag and encoder-power fault</span></div>
  <div class="xb-stat"><b>No driver</b><span>Smoothieware has no counter driver; the counter needs firmware to set it up and read it</span></div>
  <div class="xb-stat"><b>50 × 47</b><span>millimetres, two M3 mounting holes</span></div>
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
  The hardware only counts; it does not compare the measured position with commanded motion and it does not stop an axis. Smoothieware has no counter driver or following-error handling. Check count rate, cable length, encoder current, shielding and count direction for your installation.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>Measure axis position from one 5&nbsp;V differential incremental encoder, for following-error detection with suitable firmware</td></tr>
    <tr><td>Counter</td><td>LS7366R-S SPI quadrature counter with a 16&nbsp;MHz oscillator; its flag line and index input are wired to the host</td></tr>
    <tr><td>Receiver</td><td>AM26LV32 differential line receiver for the A, B and Z pairs; the Z receiver&rsquo;s inputs are reversed so the index reaches the counter active low</td></tr>
    <tr><td>Encoder supply</td><td>TPS2553 switch from the controller 5&nbsp;V with an adjustable limit (R4, 178&nbsp;k&Omega;); the board silk reads &ldquo;176mA MAX&rdquo;</td></tr>
    <tr><td>Termination</td><td>120&nbsp;&Omega; across each pair, selected by a 3-pad link per channel</td></tr>
    <tr><td>Shield</td><td>Reaches ground through 1&nbsp;M&Omega; in parallel with 10&nbsp;nF; link JPSH, open as delivered, bridges it directly</td></tr>
    <tr><td>Sockets</td><td>Two 10-contact Gadgeteer S sockets (input and chain), 1.27&nbsp;mm. Not for hot-plugging.</td></tr>
    <tr><td>Encoder connector</td><td>One 9-contact connector, J3; the exact series is not specified</td></tr>
    <tr><td>Test points</td><td>Ten: 3.3&nbsp;V, 5&nbsp;V, encoder 5&nbsp;V, two grounds, flag, power fault and the receiver outputs (not drawn in the top view)</td></tr>
    <tr><td>Size</td><td>50 &times; 47&nbsp;mm with two M3 mounting holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> (Smoothieware has no counter driver)</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The electrical figures are in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side. The mounting holes, test points and most solder links are not marked on the drawing.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/position-feedback-board/position-feedback-board-diagram.png" alt="Top view of the position feedback board with eleven numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:20.9%;top:8.7%" aria-label="1: input socket">1<span class="xb-pop"><b>Input socket S IN (J1)</b> — the Gadgeteer S socket to the controller: counter flag, encoder-power fault, chip select and the SPI lines. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:73.6%;top:8.7%" aria-label="2: chain socket">2<span class="xb-pop"><b>Chain socket S CHAIN (J2)</b> — a second S socket that passes the lines on. The seven chain links JP3 to JP9 join it to J1 and are bridged as delivered.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:31.4%;top:90.2%" aria-label="3: encoder connector">3<span class="xb-pop"><b>Encoder connector (J3)</b> — 9 contacts: encoder 5&nbsp;V, ground, the A, B and Z differential pairs and the shield. Contact 1 is at the left. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:30%;top:36.6%" aria-label="4: counter">4<span class="xb-pop"><b>Counter (U1)</b> — an LS7366R-S SPI quadrature counter. The controller must set it up and read it over SPI.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:27.7%;top:58.3%" aria-label="5: differential receiver">5<span class="xb-pop"><b>Differential receiver (U2)</b> — an AM26LV32 receiver that turns the three encoder pairs into logic levels for the counter.</span></a>
      <a class="xb-mk xb-pl" href="#tour-6" style="left:10.7%;top:69.9%" aria-label="6: encoder supply switch">6<span class="xb-pop"><b>Encoder supply switch (U3)</b> — a TPS2553 power switch that supplies the encoder 5&nbsp;V and reports an over-current fault. Its current limit is set by R4 (178&nbsp;k&Omega;).</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:44.8%;top:49.4%" aria-label="7: oscillator">7<span class="xb-pop"><b>Oscillator (Y1)</b> — the 16&nbsp;MHz oscillator that clocks the counter.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-8" style="left:6.2%;top:29.2%" aria-label="8: flag light">8<span class="xb-pop"><b>FLAG light (D1)</b> — a red light on the counter&rsquo;s active-low flag line. Cut link JP10 turns it off.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-9" style="left:12.1%;top:29.2%" aria-label="9: fault light">9<span class="xb-pop"><b>PWR FLT light (D2)</b> — a red light on the encoder-power fault line. Cut link JP11 turns it off.</span></a>
      <a class="xb-mk xb-pb" href="#tour-10" style="left:39.4%;top:21%" aria-label="10: chip select link">10<span class="xb-pop"><b>Chip-select selector (JPCS)</b> — the 3-pad link that picks which socket contact is chip select: 1&ndash;2 uses contact 6, 2&ndash;3 uses contact 5. It is bridged 1&ndash;2 as delivered.</span></a>
      <a class="xb-mk" href="#tour-11" style="left:33.9%;top:78.8%" aria-label="11: termination links">11<span class="xb-pop"><b>Termination links (JPMA, JPMB, JPMZ)</b> — one 3-pad link per channel, labelled T and SE. Bridged 1&ndash;2 as delivered, which adds a 120&nbsp;&Omega; termination across the pair.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Input socket S IN (J1)</b> — the Gadgeteer S socket to the controller: counter flag, encoder-power fault, chip select and the SPI lines. <i>See the pinout.</i></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket S CHAIN (J2)</b> — a second S socket that passes the lines on. The seven chain links JP3 to JP9 join it to J1 and are bridged as delivered.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Encoder connector (J3)</b> — 9 contacts: encoder 5&nbsp;V, ground, the A, B and Z differential pairs and the shield. Contact 1 is at the left. <i>See the pinout.</i></div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Counter (U1)</b> — an LS7366R-S SPI quadrature counter. The controller must set it up and read it over SPI.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Differential receiver (U2)</b> — an AM26LV32 receiver that turns the three encoder pairs into logic levels for the counter.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Encoder supply switch (U3)</b> — a TPS2553 power switch that supplies the encoder 5&nbsp;V and reports an over-current fault. Its current limit is set by R4 (178&nbsp;k&Omega;).</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Oscillator (Y1)</b> — the 16&nbsp;MHz oscillator that clocks the counter.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>FLAG light (D1)</b> — a red light on the counter&rsquo;s active-low flag line. Cut link JP10 turns it off.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>PWR FLT light (D2)</b> — a red light on the encoder-power fault line. Cut link JP11 turns it off.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Chip-select selector (JPCS)</b> — the 3-pad link that picks which socket contact is chip select: 1&ndash;2 uses contact 6, 2&ndash;3 uses contact 5. It is bridged 1&ndash;2 as delivered.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Termination links (JPMA, JPMB, JPMZ)</b> — one 3-pad link per channel, labelled T and SE. Bridged 1&ndash;2 as delivered, which adds a 120&nbsp;&Omega; termination across the pair.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1: input socket (S IN)

Contact 1 is at the lower left of the socket in the tour (the arrow marks the lower row), contact 2 directly above it, and odd contacts are in the lower row.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Function</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Logic supply</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Input to the encoder supply switch</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">FLAG</span></td><td>Counter flag, output to the host</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">PWR_FLT</span></td><td>Encoder-power fault, active low, output to the host</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">CS_ALT</span></td><td>Alternate chip select, input, used only when JPCS is set to 2&ndash;3</td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">CS</span></td><td>Chip select, input (JPCS 1&ndash;2)</td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-sig">MOSI</span></td><td>Host data to the counter</td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">MISO</span></td><td>Counter data to the host</td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">SCK</span></td><td>Clock</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Ground</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J3: encoder connector

Contact 1 is at the left of the connector in the tour, next to the marked 5V.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Function</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-5v">ENC 5 V</span></td><td>Switched encoder supply output</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Circuit ground</td></tr>
    <tr><td>3, 4</td><td><span class="xb-pill xb-p-sig">A+</span> <span class="xb-pill xb-p-sig">A&minus;</span></td><td>A channel differential pair</td></tr>
    <tr><td>5, 6</td><td><span class="xb-pill xb-p-sig">B+</span> <span class="xb-pill xb-p-sig">B&minus;</span></td><td>B channel differential pair</td></tr>
    <tr><td>7, 8</td><td><span class="xb-pill xb-p-sig">Z+</span> <span class="xb-pill xb-p-sig">Z&minus;</span></td><td>Z (index) differential pair</td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-gnd">SHLD</span></td><td>Cable shield node</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Keep each pair together. The minus contacts are not ground. Take the pinout and colour code from the encoder&rsquo;s own data sheet, not from wire colours.

### Solder links

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>Function</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>JPCS</td><td>1&ndash;2: chip select from J1 contact 6. 2&ndash;3: from contact 5.</td><td>1&ndash;2 bridged</td></tr>
    <tr><td>JPMA, JPMB, JPMZ</td><td>1&ndash;2: 120&nbsp;&Omega; termination across the pair. 2&ndash;3 (labelled SE) connects the minus input to a reference node. The silk adds &ldquo;SE: fit R9 R10 C8&rdquo;. Use differential encoders.</td><td>1&ndash;2 bridged</td></tr>
    <tr><td>JPSH</td><td>Bridges the shield node directly to ground</td><td>Open</td></tr>
    <tr><td>JP3 to JP9</td><td>Join the J1 contacts 3 to 9 to the chain socket J2</td><td>All bridged</td></tr>
    <tr><td>JP10, JP11</td><td>Cut to turn the FLAG and PWR FLT lights off</td><td>Bridged</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The delivered states come from the parts list; confirm them on the assembled board before changing a link.

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>A differential encoder</b><span>5&nbsp;V incremental ABZ with RS-422 style outputs; check its pinout, current and line drivers first.</span></div>
  <div class="xb-card"><b>Seven wires</b><span>3.3&nbsp;V, 5&nbsp;V, chip select, MOSI, MISO, clock and ground to the controller, plus flag and fault if wanted.</span></div>
  <div class="xb-card"><b>A driver</b><span>Firmware that sets up and reads the counter. None is supplied.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Check the encoder</h3>
    <p>Confirm it is a 5&nbsp;V differential ABZ type, its pinout, its supply current against the switch limit and that its outputs can drive the 120&nbsp;&Omega; termination. Do not use single-ended outputs in the terminated mode.</p>
  </li>
  <li class="xb-step">
    <h3>Wire the controller</h3>
    <p>With the power off, connect header GE (J36) to J1 contact for contact. Contacts 1, 2 and 10 are 3.3&nbsp;V, 5&nbsp;V and ground; 3 (PE8) receives the flag, 4 (PJ7) the power fault, 6 (PD15) is chip select and 7, 8, 9 are the SPI1 data and clock. Contact 5 (PJ8) stays unused with JPCS at 1&ndash;2. Leave J2 unconnected. Check numbered continuity and the connector orientation first.</p>
    <p class="xb-expect">Check the rail positions on the Prime&rsquo;s physical header before powering; see the Prime header note in the electrical appendix. Check the available current of the 5&nbsp;V and 3.3&nbsp;V rails.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the encoder</h3>
    <p>Join J3 contacts 1 to 9 to the encoder by function. Leave JPSH open unless you have a shield plan.</p>
  </li>
  <li class="xb-step">
    <h3>Provide a driver</h3>
    <p>The counter needs initialisation, index and filter setup and readout over SPI. Without a driver the board cannot report a position.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Read the axis position</td><td>None</td><td>No driver in Smoothieware</td></tr>
    <tr><td>Detect following error</td><td>None</td><td>Not in Smoothieware</td></tr>
    <tr><td>Use the encoder as a handwheel</td><td>Rotary encoder (V2)</td><td>Does not apply: that module reads direct A and B pins, not this counter</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

SmoothieV2 has no LS7366R initialisation, register readout, rollover or index policy, or comparison of this count with commanded motion. There is no configuration to give.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 170" role="img" aria-labelledby="xb-how-t">
    <title id="xb-how-t">The encoder A, B and Z pairs enter a differential receiver, whose outputs feed an SPI counter read by the host; a power switch supplies the encoder.</title>
    <g font-size="13" font-weight="700" text-anchor="middle" fill="#e6ebf2">
      <rect x="20" y="55" width="150" height="60" rx="8" fill="#1f2226" stroke="#e0a877"/><text x="95" y="80">Encoder</text><text x="95" y="100" font-weight="400" fill="#a9b4c2">A, B, Z pairs</text>
      <rect x="230" y="55" width="150" height="60" rx="8" fill="#212936" stroke="#e0a877"/><text x="305" y="80">120 &#937; links</text><text x="305" y="100" font-weight="400" fill="#a9b4c2">termination</text>
      <rect x="440" y="55" width="170" height="60" rx="8" fill="#212936" stroke="#6fe08a"/><text x="525" y="80">AM26LV32</text><text x="525" y="100" font-weight="400" fill="#a9b4c2">differential receiver</text>
      <rect x="670" y="55" width="150" height="60" rx="8" fill="#212936" stroke="#5fb3ff"/><text x="745" y="80">LS7366R</text><text x="745" y="100" font-weight="400" fill="#a9b4c2">counter, SPI</text>
      <rect x="870" y="55" width="110" height="60" rx="8" fill="#1f2226" stroke="#dfe4ee"/><text x="925" y="90">J1</text>
    </g>
    <g stroke-width="3" fill="none" stroke="#a9b4c2"><path d="M170 85H230"/><path d="M380 85H440"/><path d="M610 85H670"/><path d="M820 85H870"/></g>
  </svg>
  </div>
  <figcaption>The path from the encoder to the host socket. The encoder supply switch is a separate branch.</figcaption>
</figure>
{:/nomarkdown}

The receiver converts the three pairs to logic levels. Its A and B outputs go to the counter; the Z output goes to the counter&rsquo;s active-low index input. The 16&nbsp;MHz oscillator clocks the counter, and the controller sets it up and reads it over SPI. The TPS2553 switches the controller&rsquo;s 5&nbsp;V to the encoder. Its active-low fault line also reaches the counter&rsquo;s enable pin and J1 contact 4, and the counter&rsquo;s own flag reaches contact 3. These are status signals, not a motion shutdown.

The oscillator sets the counter timing; it does not by itself set a maximum count rate or cable length. The firmware must define index polarity, count direction, filtering and rollover. The silk reads &ldquo;A leads B = count up&rdquo;; check the direction on your machine.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>PWR FLT light on</td><td>The encoder is drawing more than the switch limit, or its supply is shorted.</td></tr>
    <tr><td>Encoder has no power</td><td>Measure the encoder 5&nbsp;V test point; check J1 contact 2 and the fault light.</td></tr>
    <tr><td>No counts</td><td>The counter needs a driver; check pair polarity, termination and that the encoder drives differentially.</td></tr>
    <tr><td>Counts in the wrong direction</td><td>Swap the pair polarity at the encoder or handle it in the driver.</td></tr>
    <tr><td>Chain board does not respond</td><td>Check that JP3 to JP9 are bridged.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-red"></span>FLAG (D1)</th><th><span class="xb-led xb-led-red"></span>PWR FLT (D2)</th></tr></thead>
  <tbody>
    <tr><td>Where</td><td>Upper left, left light</td><td>Upper left, right light</td></tr>
    <tr><td>Lit means</td><td>The counter flag line is low</td><td>The encoder-power fault line is low</td></tr>
    <tr><td>Disable it</td><td>Cut JP10</td><td>Cut JP11</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/position-feedback-board/position-feedback-board-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram.</td></tr>
    <tr><td><a href="/images/extensions/position-feedback-board/position-feedback-board-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/position-feedback-board/position-feedback-board-diagram.png">Board drawing (SVG)</a></td><td>The top view used on this page, at full resolution</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-pfb-mount-t">
  <title id="xb-pfb-mount-t">Mounting drawing of the position feedback board, component side: outline 50 by 47 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="299.1" y="78.0" width="361.7" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M299.1 56H660.9"/><path d="M299.1 50V62"/><path d="M660.9 50V62"/><path d="M686.9 78.0V418.0"/><path d="M680.9 78.0h12"/><path d="M680.9 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">50</text>
  <text x="698.9" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">47</text>
  <circle cx="299.1" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="287.1" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M241.1 104.0h30" fill="none"/><path d="M275.1 104.0l-8 -4v8z"/><path d="M241.1 104.0v30" fill="none"/><path d="M241.1 138.0l-4 -8h8z"/></g>
  <text x="279.1" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="237.1" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="559.6" cy="179.3" r="11.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M544.0 179.3h31.1M559.6 163.7v31.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="571.1" y="210.9" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  36.00, 14.00</text>
  <circle cx="559.6" cy="324.0" r="11.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M544.0 324.0h31.1M559.6 308.4v31.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="571.1" y="302.4" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  36.00, 34.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 50 × 47&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>36.00</td><td>14.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>36.00</td><td>34.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>

{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

A dash means no value is given.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Conditions</th></tr></thead>
  <tbody>
    <tr><td>Logic supply</td><td>J1 contact 1</td><td>—</td><td>3.3 V</td><td>—</td><td>From the controller</td></tr>
    <tr><td>Encoder supply</td><td>J3 contact 1</td><td>—</td><td>5 V switched</td><td>176 mA</td><td>Board marking; set by the 178&nbsp;k&Omega; R4</td></tr>
    <tr><td>Termination</td><td>Per pair</td><td>—</td><td>120 &Omega;</td><td>—</td><td>R5 to R7, selected by JPMA, JPMB, JPMZ</td></tr>
    <tr><td>Shield</td><td>J3 contact 9</td><td>—</td><td>1 M&Omega; and 10 nF to ground</td><td>—</td><td>R8 and C7; JPSH open as delivered</td></tr>
    <tr><td>Oscillator</td><td>Y1</td><td>—</td><td>16 MHz</td><td>—</td><td>From the parts list</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Prime header G_F (J37)

On the Prime, header G_F (J37) has 3.3&nbsp;V on contact 1, 5&nbsp;V on contact 2, PB1 on 3, PJ4 on 4 and ground on 10. Check the rail positions on the Prime&rsquo;s physical connector, and verify numbered continuity with the power removed. The header is unshrouded. For header GE (J36), use the pins listed under Get started.

See all boards on the [extension boards](/extension-boards) page.
