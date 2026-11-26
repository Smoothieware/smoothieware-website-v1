---
layout: default
title: "Leadshine-like external servo drivers"
description: "A three-phase servo drive on a TMC4671 and TMC6100 with current sensing, encoder and Hall inputs and a brake output: pinout, links and limits."
permalink: /extensions/leadshine-like-external-servo-drivers
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Motors</p>
    <h1 id="leadshine-like-external-servo-drivers">Leadshine-like external servo drivers</h1>
    <p class="xb-lead">A three-phase servo drive for a brushless motor. A Trinamic TMC4671 performs the servo control and a TMC6100 drives six power transistors, with current sensing, differential encoder and Hall inputs, a brake-resistor output and a 12 to 28&nbsp;V motor supply. It is a complete drive architecture of its own, not an adapter for a commercial Leadshine drive, and Smoothieware has no setup support for it.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/leadshine-like-external-servo-drivers/leadshine-like-external-servo-drivers-diagram.png" alt="Top view of the servo driver board: a ten-contact socket at the top left, the TMC4671 chip at the upper centre, the TMC6100 and six transistor packages at the centre, a green four-way motor terminal at the right and a green two-way supply terminal at the left.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>TMC4671 + TMC6100</b><span>servo controller and gate driver</span></div>
  <div class="xb-stat"><b>12 to 28 V</b><span>silk label, up to 9 A</span></div>
  <div class="xb-stat"><b>Encoder + Hall</b><span>differential ABZ and U, V, W</span></div>
  <div class="xb-stat"><b>Brake output</b><span>resistor at least 22 &Omega;, 47 W on the silk</span></div>
  <div class="xb-stat"><b>7 lights</b><span>two green, five red</span></div>
  <div class="xb-stat"><b>102 × 125</b><span>millimetres, four M3 holes</span></div>
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
Do not energize this board until its power stage has been independently checked. The silk marks the power parts hot and says no hot-plug. The link labelled STO is not a certified STO function. Never connect a braking resistor, or close the STO link, merely to suppress an unknown fault.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>A three-phase brushless servo drive with its own control chip, current sensing and feedback inputs</td></tr>
    <tr><td>Controller</td><td>Trinamic TMC4671-LA (U11) performing the servo control, with a TMC6100-LA (U2) gate driver</td></tr>
    <tr><td>Power stage</td><td>Six CSD18540Q5B transistors (Q2 to Q7), a brake transistor (Q9), two INA240A1D current-sense amplifiers (U3, U4)</td></tr>
    <tr><td>Motor supply</td><td>Screw terminal J2. The silk reads VM 12 to 28&nbsp;V DC and up to 9&nbsp;A, no hot-plug.</td></tr>
    <tr><td>Brake</td><td>Connector J4 for a braking resistor between the supply and the switched brake node. The silk asks for at least 22&nbsp;&Omega; and 47&nbsp;W.</td></tr>
    <tr><td>Feedback</td><td>J5 for 5&nbsp;V differential encoder A, B and Z through an RS-422 receiver (AM26LV32, U12); J6 for Hall U, V and W</td></tr>
    <tr><td>Logic supply</td><td>An on-board 5&nbsp;V converter (LM5164, U16) or the host 5&nbsp;V, chosen by link JP1; a 3.3&nbsp;V regulator (U17)</td></tr>
    <tr><td>Input protection</td><td>A reverse-polarity transistor (Q1) with an ideal-diode controller (LM74700-Q1, U1), a SMBJ33A surge diode and an LTC4368-type stage</td></tr>
    <tr><td>Sockets and headers</td><td>One ten-contact socket J1, the encoder and Hall headers J5 and J6, an STO link J7 and a UART header J8</td></tr>
    <tr><td>Lights</td><td>3.3&nbsp;V power and drive enable (green); motor supply live, latched fault, supply fault, over-voltage and reverse (red)</td></tr>
    <tr><td>Size</td><td>102 &times; 124.5&nbsp;mm with four M3 mounting holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> for the host signals; Smoothieware cannot set the drive up</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side. The mounting holes, most small parts, the drive-enable light and the three input-protection lights are not marked.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/leadshine-like-external-servo-drivers/leadshine-like-external-servo-drivers-diagram.png" alt="Top view of the Leadshine-like external servo driver board with sixteen numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:11%;top:4.3%" aria-label="1: input socket">1<span class="xb-pop"><b>Input socket (J1)</b> — a ten-contact socket (Gadgeteer S) carrying enable, step, direction and four SPI lines from the host. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-2" style="left:6.5%;top:24.7%" aria-label="2: motor supply terminal">2<span class="xb-pop"><b>Motor supply terminal (J2)</b> — a two-way screw terminal for the motor supply, 12 to 28&nbsp;V DC on the silk: contact 1 positive, contact 2 power ground. The silk says no hot-plug.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-3" style="left:93.5%;top:35.4%" aria-label="3: motor terminal">3<span class="xb-pop"><b>Motor terminal (J3)</b> — a four-way screw terminal: contacts 1, 2 and 3 are the motor phases U, V and W, and contact 4 is the cable shield.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:57.8%;top:18.1%" aria-label="4: motion controller">4<span class="xb-pop"><b>Motion controller (U11)</b> — a Trinamic TMC4671 that performs the servo control. It needs motor, current-loop and encoder setup before step and direction mean anything.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:57%;top:36.8%" aria-label="5: gate driver">5<span class="xb-pop"><b>Gate driver (U2)</b> — a Trinamic TMC6100 that drives the power transistors.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:44.5%;top:36.5%" aria-label="6: power transistors">6<span class="xb-pop"><b>Power transistors (Q2 to Q7)</b> — six CSD18540Q5B transistors, a high-side and a low-side pair for each of the three motor phases. A seventh transistor (Q9) switches the brake resistor.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:45.2%;top:4.5%" aria-label="7: encoder connector">7<span class="xb-pop"><b>Encoder connector (J5)</b> — an eight-pin 2.54&nbsp;mm header for 5&nbsp;V differential A, B and Z feedback.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:66.8%;top:4.3%" aria-label="8: Hall connector">8<span class="xb-pop"><b>Hall connector (J6)</b> — a five-pin 2.54&nbsp;mm header: 5&nbsp;V, ground and Hall U, V and W.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-9" style="left:5%;top:46.6%" aria-label="9: brake connector">9<span class="xb-pop"><b>Brake resistor connector (J4)</b> — a two-pin 2.54&nbsp;mm connector for a braking resistor between the motor supply and the switched brake node.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-10" style="left:86%;top:3.3%" aria-label="10: STO link">10<span class="xb-pop"><b>STO link (J7)</b> — a two-pin header the silk calls STO LINK, with RUN marked. It is not a certified STO function.</span></a>
      <a class="xb-mk xb-pb" href="#tour-11" style="left:29.2%;top:3.3%" aria-label="11: UART header">11<span class="xb-pop"><b>UART header (J8)</b> — a three-pin 3.3&nbsp;V header: ground, transmit and receive.</span></a>
      <a class="xb-mk xb-pb" href="#tour-12" style="left:73%;top:29.2%" aria-label="12: logic supply selector">12<span class="xb-pop"><b>Logic supply selector (JP1)</b> — a three-way solder link that selects the 5&nbsp;V logic source: the on-board converter or the host 5&nbsp;V.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-13" style="left:85.5%;top:19.3%" aria-label="13: buck inductor">13<span class="xb-pop"><b>Logic supply inductor (L1)</b> — a 47&nbsp;&micro;H inductor of the on-board 5&nbsp;V converter (an LM5164).</span></a>
      <a class="xb-mk xb-pb" href="#tour-14" style="left:38.5%;top:20.6%" aria-label="14: 3.3 V light">14<span class="xb-pop"><b>3.3 V power light (D3)</b> — a green light for the 3.3&nbsp;V supply. Cut JP7 to disable it.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-15" style="left:9.2%;top:41.9%" aria-label="15: VM light">15<span class="xb-pop"><b>Motor supply light (D4)</b> — a red light that shows the motor supply is live. Cut JP4 to disable it.</span></a>
      <a class="xb-mk xb-pb" href="#tour-16" style="left:24%;top:3.4%" aria-label="16: fault latch light">16<span class="xb-pop"><b>Latched fault light (D6)</b> — a red light for the latched fault. Cut JP5 to disable it.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Input socket (J1)</b> — a ten-contact socket (Gadgeteer S) carrying enable, step, direction and four SPI lines from the host. <i>See the pinout.</i></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Motor supply terminal (J2)</b> — a two-way screw terminal for the motor supply, 12 to 28&nbsp;V DC on the silk: contact 1 positive, contact 2 power ground. The silk says no hot-plug.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Motor terminal (J3)</b> — a four-way screw terminal: contacts 1, 2 and 3 are the motor phases U, V and W, and contact 4 is the cable shield.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Motion controller (U11)</b> — a Trinamic TMC4671 that performs the servo control. It needs motor, current-loop and encoder setup before step and direction mean anything.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Gate driver (U2)</b> — a Trinamic TMC6100 that drives the power transistors.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Power transistors (Q2 to Q7)</b> — six CSD18540Q5B transistors, a high-side and a low-side pair for each of the three motor phases. A seventh transistor (Q9) switches the brake resistor.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Encoder connector (J5)</b> — an eight-pin 2.54&nbsp;mm header for 5&nbsp;V differential A, B and Z feedback.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Hall connector (J6)</b> — a five-pin 2.54&nbsp;mm header: 5&nbsp;V, ground and Hall U, V and W.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Brake resistor connector (J4)</b> — a two-pin 2.54&nbsp;mm connector for a braking resistor between the motor supply and the switched brake node.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>STO link (J7)</b> — a two-pin header the silk calls STO LINK, with RUN marked. The label does not establish a certified STO function.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>UART header (J8)</b> — a three-pin 3.3&nbsp;V header: ground, transmit and receive.</div></li>
    <li id="tour-12"><span class="xb-n">12</span><div><b>Logic supply selector (JP1)</b> — a three-way solder link that selects the 5&nbsp;V logic source: the on-board converter or the host 5&nbsp;V.</div></li>
    <li id="tour-13"><span class="xb-n">13</span><div><b>Logic supply inductor (L1)</b> — a 47&nbsp;&micro;H inductor of the on-board 5&nbsp;V converter (an LM5164).</div></li>
    <li id="tour-14"><span class="xb-n">14</span><div><b>3.3 V power light (D3)</b> — a green light for the 3.3&nbsp;V supply. Cut JP7 to disable it.</div></li>
    <li id="tour-15"><span class="xb-n">15</span><div><b>Motor supply light (D4)</b> — a red light that shows the motor supply is live. Cut JP4 to disable it.</div></li>
    <li id="tour-16"><span class="xb-n">16</span><div><b>Latched fault light (D6)</b> — a red light for the latched fault. Cut JP5 to disable it.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1: input socket

Contact 1 is at the lower left of the socket, next to the small arrow below it; the odd contacts are in the lower row.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Host 3.3&nbsp;V</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Host 5&nbsp;V; usable as the logic supply through JP1</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">ENABLE</span></td><td></td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">STEP</span></td><td></td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">DIR</span></td><td></td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">CS</span></td><td>SPI chip select</td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-sig">MOSI</span></td><td>SPI data to the controller</td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">MISO</span></td><td>SPI data from the controller</td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">SCK</span></td><td>SPI clock</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Power, motor and feedback connectors

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Connector</th><th>Contact</th><th>Function</th></tr></thead>
  <tbody>
    <tr><td rowspan="2">J2 motor supply</td><td>1</td><td><span class="xb-pill xb-p-sig">VM</span> positive</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-gnd">PGND</span> power ground</td></tr>
    <tr><td rowspan="4">J3 motor</td><td>1</td><td><span class="xb-pill xb-p-sig">U</span> motor phase</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-sig">V</span> motor phase</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">W</span> motor phase</td></tr>
    <tr><td>4</td><td>Cable shield and protective earth</td></tr>
    <tr><td rowspan="2">J4 brake</td><td>1</td><td><span class="xb-pill xb-p-sig">VM</span> the motor supply</td></tr>
    <tr><td>2</td><td>The switched brake node</td></tr>
    <tr><td rowspan="8">J5 encoder</td><td>1</td><td><span class="xb-pill xb-p-5v">ENC 5 V</span></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>3, 4</td><td>A positive, A negative</td></tr>
    <tr><td>5, 6</td><td>B positive, B negative</td></tr>
    <tr><td>7, 8</td><td>Z positive, Z negative</td></tr>
    <tr><td colspan="2">J6 Hall</td><td>1 encoder 5&nbsp;V, 2 ground, 3 Hall U, 4 Hall V, 5 Hall W</td></tr>
    <tr><td colspan="2">J7 STO link</td><td>1 the source, 2 the STO input; the silk marks the link RUN</td></tr>
    <tr><td colspan="2">J8 UART</td><td>1 ground, 2 transmit, 3 receive, at 3.3&nbsp;V</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Check the phase order and the feedback polarity before energizing anything. The J2 and J3 orders are taken from the schematic; check them against the silk and your plugs.

### Solder links

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>Effect</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>JP1</td><td>Logic 5&nbsp;V source: pad 1 the on-board converter, pad 3 the host 5&nbsp;V, to the common pad 2</td><td>Pads 1 and 2 bridged (on-board converter)</td></tr>
    <tr><td>JP2</td><td>Encoder supply enable (ENC_ON)</td><td>Bridged</td></tr>
    <tr><td>JP3</td><td>Bonds the cable shield to power ground (SHLD_BOND)</td><td>Open</td></tr>
    <tr><td>JP4</td><td>Cut to disable the motor supply light (D4)</td><td>Bridged</td></tr>
    <tr><td>JP5</td><td>Cut to disable the latched fault light (D6)</td><td>Bridged</td></tr>
    <tr><td>JP6</td><td>Cut to disable the drive enable light (D5)</td><td>Bridged</td></tr>
    <tr><td>JP7</td><td>Cut to disable the 3.3&nbsp;V light (D3)</td><td>Bridged</td></tr>
    <tr><td>JPF101, JPF102, JPF103</td><td>Cut to disable the fault, over-voltage and reverse lights</td><td>Bridged</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Motor bus, logic ground, shield and braking energy need a complete grounding plan before any bonding link is changed.

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>A brushless motor</b><span>With known phase order, and an encoder, Hall sensors or both.</span></div>
  <div class="xb-card"><b>A motor supply</b><span>Current-limited, separate from the controller.</span></div>
  <div class="xb-card"><b>A braking resistor</b><span>At least 22&nbsp;&Omega; and 47&nbsp;W on the silk, if regeneration is expected.</span></div>
  <div class="xb-card"><b>A controller that sets the drive up</b><span>Smoothieware cannot; see Configuration.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Choose the motor, encoder and supply</h3>
    <p>Select a named motor and encoder and a current-limited supply, and determine the phase order and the feedback polarity on paper.</p>
  </li>
  <li class="xb-step">
    <h3>Decide how the drive is configured</h3>
    <p>The TMC4671 needs its registers set before any step or direction request means anything. Smoothieware has no such setup, so a separate configuration source is needed; see Configuration.</p>
    <p class="xb-expect">Do not assume the step and direction inputs configure this board.</p>
  </li>
  <li class="xb-step">
    <h3>Check the links</h3>
    <p>JP1 chooses the logic 5&nbsp;V source and JP3 bonds the shield; both need a grounding plan.</p>
  </li>
  <li class="xb-step">
    <h3>Commission restrained, only after the power stage is checked</h3>
    <p>Use a no-load, restrained test appropriate to the motor, and only after the power stage has been independently checked. Switch the motor supply off when wiring the motor.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>A servo axis through this board</td><td>None in Smoothieware</td><td>Not supported</td></tr>
    <tr><td>Step and direction on a stepper driver</td><td>Actuator with a stepper driver type</td><td>Does not apply: the step and direction inputs do not configure this board</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

This board needs motor, current-loop and encoder setup before step and direction requests can be meaningful. The SmoothieV2 source (commit 2a21c0108b1d095ecd8b2b9358e94055f053c003) has no TMC4671 setup backend: its Trinamic driver factory accepts only the 2590 and 2660 types, and the SPI users it implements are those stepper drivers and a thermocouple readout. Do not substitute a TMC2590 configuration or invent motor, current or encoder register values. A separately preconfigured external controller, or later or custom firmware, would need its own configuration interface. This applies to that commit only; it does not describe firmware installed on a controller.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 170" role="img" aria-labelledby="xb-how-t">
    <title id="xb-how-t">The host signals on J1 reach the TMC4671, which drives the TMC6100 and six transistors to the motor on J3; the encoder, Hall sensors and current sensing feed back to the TMC4671; motor power enters at J2.</title>
    <g font-size="13" font-weight="700" text-anchor="middle" fill="#e6ebf2">
      <rect x="10" y="55" width="130" height="60" rx="8" fill="#1f2226" stroke="#e0a877"/><text x="75" y="80">J1 input</text><text x="75" y="100" font-weight="400" fill="#a9b4c2">step, dir, SPI</text>
      <rect x="190" y="55" width="150" height="60" rx="8" fill="#212936" stroke="#6fe08a"/><text x="265" y="80">TMC4671</text><text x="265" y="100" font-weight="400" fill="#a9b4c2">servo control</text>
      <rect x="390" y="55" width="140" height="60" rx="8" fill="#212936" stroke="#6fe08a"/><text x="460" y="80">TMC6100</text><text x="460" y="100" font-weight="400" fill="#a9b4c2">gate driver</text>
      <rect x="580" y="55" width="140" height="60" rx="8" fill="#212936" stroke="#6fe08a"/><text x="650" y="80">Q2 to Q7</text><text x="650" y="100" font-weight="400" fill="#a9b4c2">three phases</text>
      <rect x="770" y="55" width="100" height="60" rx="8" fill="#1f2226" stroke="#e0a877"/><text x="820" y="80">J3</text><text x="820" y="100" font-weight="400" fill="#a9b4c2">motor</text>
      <rect x="900" y="55" width="90" height="60" rx="8" fill="#1f2226" stroke="#e0a877"/><text x="945" y="80">J2</text><text x="945" y="100" font-weight="400" fill="#a9b4c2">supply</text>
    </g>
    <g stroke-width="3" fill="none" stroke="#a9b4c2"><path d="M140 85H190"/><path d="M340 85H390"/><path d="M530 85H580"/><path d="M720 85H770"/></g>
    <text x="500" y="150" font-size="12" text-anchor="middle" fill="#a9b4c2">Feedback from J5 (encoder), J6 (Hall) and the current-sense amplifiers returns to the TMC4671.</text>
  </svg>
  </div>
  <figcaption>The controller closes the servo loop on the board; the host only supplies the interface signals.</figcaption>
</figure>
{:/nomarkdown}

Differential encoder signals reach the controller through an RS-422 receiver, and two amplifiers sense the phase currents. A brake transistor (Q9) switches an external resistor across the supply so that regenerated energy has somewhere to go, and the silk adds that the supply must be able to sink what is left. The STO link is a local jumper only.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-green"></span>3.3 V power (D3)</th><th><span class="xb-led xb-led-red"></span>VM live (D4)</th><th><span class="xb-led xb-led-green"></span>Drive enable (D5)</th><th><span class="xb-led xb-led-red"></span>Latched fault (D6)</th><th><span class="xb-led xb-led-red"></span>Fault, over-voltage, reverse</th></tr></thead>
  <tbody>
    <tr><td>Where</td><td>Upper centre-left, near the POWER label</td><td>Left, near VM LIVE</td><td>Centre-left, near DRV_EN (not marked)</td><td>Top, left of the first header</td><td>Lower left (FAULT, OV) and lower right (REVERSE); not marked</td></tr>
    <tr><td>Lit means</td><td>The 3.3&nbsp;V supply is present</td><td>The motor supply is live</td><td>The drive is enabled</td><td>A fault is latched</td><td>The input protection stage reports a fault, over-voltage or a reversed supply</td></tr>
    <tr><td>Disable it</td><td>Cut JP7</td><td>Cut JP4</td><td>Cut JP6</td><td>Cut JP5</td><td>Cut JPF101, JPF102 or JPF103</td></tr>
  </tbody>
</table></div>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Nothing happens on step and direction</td><td>The TMC4671 needs its registers set first; see Configuration.</td></tr>
    <tr><td>Latched fault light on</td><td>The motor wiring and phase order, the supply, and the braking circuit; do not close the STO link or connect a resistor merely to clear it.</td></tr>
    <tr><td>No encoder reading</td><td>The 5&nbsp;V on J5, JP2 (encoder enable), and the polarity of each differential pair.</td></tr>
    <tr><td>Everything dark with supply connected</td><td>The polarity of J2, the logic 5&nbsp;V source link JP1 and the supply fault lights.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/leadshine-like-external-servo-drivers/leadshine-like-external-servo-drivers-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram.</td></tr>
    <tr><td><a href="/images/extensions/leadshine-like-external-servo-drivers/leadshine-like-external-servo-drivers-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/leadshine-like-external-servo-drivers/leadshine-like-external-servo-drivers-diagram.png">Board drawing (SVG)</a></td><td>The top view used on this page, at full resolution</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-sv-mount-t">
  <title id="xb-sv-mount-t">Mounting drawing of the Leadshine-like external servo driver board, component side: outline 102 by 124.5 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="340.7" y="78.0" width="278.6" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M340.7 56H619.3"/><path d="M340.7 50V62"/><path d="M619.3 50V62"/><path d="M645.3 78.0V418.0"/><path d="M639.3 78.0h12"/><path d="M639.3 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">102</text>
  <text x="657.3" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">124.5</text>
  <circle cx="340.7" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="328.7" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M282.7 104.0h30" fill="none"/><path d="M316.7 104.0l-8 -4v8z"/><path d="M282.7 104.0v30" fill="none"/><path d="M282.7 138.0l-4 -8h8z"/></g>
  <text x="320.7" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="278.7" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="395.3" cy="113.5" r="4.4" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M387.0 113.5h16.7M395.3 105.1v16.7" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="391.0" y="137.9" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  20.00, 13.00</text>
  <circle cx="559.2" cy="113.5" r="4.4" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M550.8 113.5h16.7M559.2 105.1v16.7" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="563.6" y="137.9" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  80.00, 13.00</text>
  <circle cx="395.3" cy="222.7" r="4.4" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M387.0 222.7h16.7M395.3 214.4v16.7" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="391.0" y="247.1" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  20.00, 53.00</text>
  <circle cx="559.2" cy="222.7" r="4.4" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M550.8 222.7h16.7M559.2 214.4v16.7" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="563.6" y="247.1" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  80.00, 53.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 102 × 124.5&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>20.00</td><td>13.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>80.00</td><td>13.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>20.00</td><td>53.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>80.00</td><td>53.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>

{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Every figure is a board silk value or a value from the parts list, as the last column says.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Motor supply</td><td>J2</td><td>12 V</td><td>—</td><td>28 V</td><td>Silk label</td></tr>
    <tr><td>Motor current</td><td>J3</td><td>—</td><td>—</td><td>9 A</td><td>Silk value (UP TO 28V DC 9A)</td></tr>
    <tr><td>Braking resistor</td><td>J4</td><td>22 &Omega;</td><td>—</td><td>—</td><td>Silk: at least 22&nbsp;&Omega; and at least 47&nbsp;W</td></tr>
    <tr><td>Surge diode</td><td>D1</td><td>—</td><td>SMBJ33A</td><td>—</td><td>Parts list</td></tr>
    <tr><td>Logic inductor</td><td>L1</td><td>—</td><td>47 &micro;H, 2.5 A</td><td>—</td><td>Parts list</td></tr>
    <tr><td>Logic supply from host</td><td>J1 contacts 1, 2</td><td>—</td><td>3.3 V, 5 V</td><td>—</td><td>Host supplies</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
