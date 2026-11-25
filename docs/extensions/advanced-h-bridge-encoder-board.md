---
layout: default
title: "Advanced H-bridge encoder board"
description: "A brushed-DC motor driver candidate with a VNH5019A H-bridge, encoder inputs, current monitoring and a hardware overcurrent latch: pinout, links and limits."
permalink: /extensions/advanced-h-bridge-encoder-board
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Motors</p>
    <h1 id="advanced-h-bridge-encoder-board">Advanced H-bridge encoder board</h1>
    <p class="xb-lead">A brushed-DC motor driver on a VNH5019A-E H-bridge, with quadrature encoder inputs, a current and supply monitor and a hardware overcurrent latch. It suits one motor axis that needs direction control and feedback. It does not by itself make a DC motor a supported closed-loop axis, because the checked firmware has no controller for it.</p>
    <p class="xb-badge">Design candidate · revision v38 · not yet built or tested</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/advanced-h-bridge-encoder-board/advanced-h-bridge-encoder-board-diagram.png" alt="Top view of the advanced H-bridge encoder board: two ten-contact sockets at the top, the H-bridge at the right, an XT60 power connector at the left and a motor terminal at the far right.">
    <figcaption>Top view, drawn from the board&rsquo;s design files (revision v38). This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>VNH5019A-E</b><span>brushed-DC H-bridge</span></div>
  <div class="xb-stat"><b>12 V, 5 A</b><span>design targets only, not qualified</span></div>
  <div class="xb-stat"><b>≤ 20 kHz</b><span>PWM, a design target</span></div>
  <div class="xb-stat"><b>Encoder</b><span>single-ended A and B inputs</span></div>
  <div class="xb-stat"><b>5 lights</b><span>red, mostly fault indicators</span></div>
  <div class="xb-stat"><b>80 × 60</b><span>millimetres, four M3 holes</span></div>
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
  This is a design candidate that has not been built or tested, and it is not ready to energize. The board silk reads CAD PROTOTYPE, 5A UNQUALIFIED. Motor power must come from a separate supply on the XT60 connector, through a fuse, and never through a Gadgeteer 5&nbsp;V pin. Keep the motor disconnected until the commands, both diagnostic lines and the overcurrent latch have been checked. The hardware cutoff timing, the reset behaviour and the power sequencing are not established.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>Drive one brushed-DC motor with direction and PWM commands and read an encoder</td></tr>
    <tr><td>Bridge</td><td>VNH5019A-E (U1), with direction inputs INA and INB, a PWM input and two enable and diagnostic lines</td></tr>
    <tr><td>Power</td><td>Motor power on an XT60 connector J3. The design targets 10.8 to 13.2&nbsp;V and 5&nbsp;A continuous; these are targets, not qualified values. The silk says 12&nbsp;V only, 8&nbsp;A fuse.</td></tr>
    <tr><td>Input protection</td><td>An LTC4368 controller with two back-to-back MOSFETs and a 6.2&nbsp;m&Omega; sense resistor in the supply path, with over-voltage, reverse and fault lights; a reverse-connection MOSFET, a bulk capacitor and an SMBJ15A surge diode on the motor supply</td></tr>
    <tr><td>Current monitor</td><td>The bridge&rsquo;s sense output is conditioned by a TLV9062 amplifier and presented on J2 contact 3</td></tr>
    <tr><td>Overcurrent cutoff</td><td>A TLV7041 comparator against a trimmer reference sets a flip-flop latch that gates the PWM; this is a hardware path, separate from any firmware loop. Its timing and reset behaviour are not established.</td></tr>
    <tr><td>Supply monitor</td><td>A divided and buffered copy of the motor supply on J2 contact 5</td></tr>
    <tr><td>Encoder</td><td>JST XH four-pin J5 with a 5&nbsp;V supply from a TPS26600 e-fuse and single-ended A and B inputs, conditioned to 3.3&nbsp;V logic on J1</td></tr>
    <tr><td>Sockets</td><td>Two keyed 10-contact Gadgeteer sockets (1.27&nbsp;mm): J1 and J2. There is no chain socket.</td></tr>
    <tr><td>Lights</td><td>Five red lights: bridge fault, supply fault, over-voltage, reverse connection and encoder-supply fault, each with a cut link</td></tr>
    <tr><td>Size</td><td>80 &times; 60&nbsp;mm with four M3 mounting holes and two cable-tie holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a></td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side. The mounting holes, cable-tie holes, solder links and four of the five lights are not marked on the drawing.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/advanced-h-bridge-encoder-board/advanced-h-bridge-encoder-board-diagram.png" alt="Top view of the advanced H-bridge encoder board with fourteen numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:22.7%;top:9.1%" aria-label="1: command socket">1<span class="xb-pop"><b>Command socket (J1)</b> — a Gadgeteer socket for the bridge direction and PWM commands, the encoder returns and two bridge diagnostic lines. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:51.8%;top:9.1%" aria-label="2: monitor socket">2<span class="xb-pop"><b>Monitor socket (J2)</b> — a second Gadgeteer socket for the current and supply monitor outputs and the overcurrent status and reset lines.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-3" style="left:7.3%;top:42.5%" aria-label="3: power input">3<span class="xb-pop"><b>Power input (J3)</b> — an XT60 connector for the separately supplied motor power. Never power the board through a Gadgeteer 5&nbsp;V pin.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-4" style="left:91.8%;top:42.5%" aria-label="4: motor terminals">4<span class="xb-pop"><b>Motor terminals (J4)</b> — a two-way screw terminal for the brushed motor. Never connect a supply here.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:31.8%;top:92.8%" aria-label="5: encoder connector">5<span class="xb-pop"><b>Encoder connector (J5)</b> — a four-pin 2.5&nbsp;mm JST XH header: encoder 5&nbsp;V, ground, channel A and channel B.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:69.5%;top:51.6%" aria-label="6: H-bridge">6<span class="xb-pop"><b>H-bridge (U1)</b> — a VNH5019A-E motor driver that switches the motor, senses its current and reports its diagnostics.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:26.4%;top:49.8%" aria-label="7: reverse MOSFET">7<span class="xb-pop"><b>Reverse-connection MOSFET (Q1)</b> — a BUK9Y12-40E in the power path, with its gate driven from the bridge.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:40%;top:46.7%" aria-label="8: bulk capacitor">8<span class="xb-pop"><b>Bulk capacitor (C1)</b> — a 1000&nbsp;&micro;F capacitor on the motor supply.</span></a>
      <a class="xb-mk" href="#tour-9" style="left:38.6%;top:64.3%" aria-label="9: surge diode">9<span class="xb-pop"><b>Surge diode (D1)</b> — an SMBJ15A surge-protection diode across the motor supply.</span></a>
      <a class="xb-mk xb-pb" href="#tour-10" style="left:52.7%;top:24.3%" aria-label="10: trimmer">10<span class="xb-pop"><b>Overcurrent trimmer (RV1)</b> — a trimmer that sets the overcurrent reference. The silk says to set it before use.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-11" style="left:77%;top:34%" aria-label="11: fault light">11<span class="xb-pop"><b>Fault light (D6)</b> — a red light driven from the overcurrent status. Cut JP1 to disable it.</span></a>
      <a class="xb-mk xb-pb" href="#tour-12" style="left:51.8%;top:34%" aria-label="12: current amplifier">12<span class="xb-pop"><b>Current amplifier (U2)</b> — a TLV9062 dual amplifier that conditions the bridge current sense and a divided copy of the motor supply.</span></a>
      <a class="xb-mk xb-pb" href="#tour-13" style="left:43.5%;top:21.5%" aria-label="13: comparator">13<span class="xb-pop"><b>Comparator (U3)</b> — a TLV7041 that compares the current signal with the trimmer reference to detect overcurrent.</span></a>
      <a class="xb-mk xb-pb" href="#tour-14" style="left:65%;top:24.3%" aria-label="14: latch">14<span class="xb-pop"><b>Latch (U4)</b> — a flip-flop that holds the overcurrent state until it is cleared. It reports on J2 contact 4 and is reset from contact 6.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Command socket (J1)</b> — a Gadgeteer socket for the bridge direction and PWM commands, the encoder returns and two bridge diagnostic lines. <i>See the pinout.</i></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Monitor socket (J2)</b> — a second Gadgeteer socket for the current and supply monitor outputs and the overcurrent status and reset lines.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Power input (J3)</b> — an XT60 connector for the separately supplied motor power. Never power the board through a Gadgeteer 5&nbsp;V pin.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Motor terminals (J4)</b> — a two-way screw terminal for the brushed motor. Never connect a supply here.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Encoder connector (J5)</b> — a four-pin 2.5&nbsp;mm JST XH header: encoder 5&nbsp;V, ground, channel A and channel B.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>H-bridge (U1)</b> — a VNH5019A-E motor driver that switches the motor, senses its current and reports its diagnostics.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Reverse-connection MOSFET (Q1)</b> — a BUK9Y12-40E in the power path, with its gate driven from the bridge.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Bulk capacitor (C1)</b> — a 1000&nbsp;&micro;F capacitor on the motor supply.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Surge diode (D1)</b> — an SMBJ15A surge-protection diode across the motor supply.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Overcurrent trimmer (RV1)</b> — a trimmer that sets the overcurrent reference. The silk says to set it before use.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Fault light (D6)</b> — a red light driven from the overcurrent status. Cut JP1 to disable it.</div></li>
    <li id="tour-12"><span class="xb-n">12</span><div><b>Current amplifier (U2)</b> — a TLV9062 dual amplifier that conditions the bridge current sense and a divided copy of the motor supply.</div></li>
    <li id="tour-13"><span class="xb-n">13</span><div><b>Comparator (U3)</b> — a TLV7041 that compares the current signal with the trimmer reference to detect overcurrent.</div></li>
    <li id="tour-14"><span class="xb-n">14</span><div><b>Latch (U4)</b> — a flip-flop that holds the overcurrent state until it is cleared. It reports on J2 contact 4 and is reset from contact 6.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1: command socket and J2: monitor socket

Contact 1 is at the top of the left column of each socket in the tour, next to the small arrow at the left edge; the odd contacts are in that column. Both sockets are keyed, so check the keying against your cable.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>J1</th><th>J2</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span> feeds the encoder supply</td><td><span class="xb-pill xb-p-5v">5 V</span></td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">ENC A</span> encoder A, 3.3&nbsp;V</td><td><span class="xb-pill xb-p-sig">CURRENT</span> current monitor, analogue</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">ENC B</span> encoder B, 3.3&nbsp;V</td><td><span class="xb-pill xb-p-sig">OCP STATUS</span> overcurrent status</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">INA</span> bridge direction A</td><td><span class="xb-pill xb-p-sig">VMOTOR</span> supply monitor, analogue</td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">INB</span> bridge direction B</td><td><span class="xb-pill xb-p-sig">OCP RESET</span> overcurrent reset</td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-sig">ENA / DIAG</span> bridge diagnostic A (active low)</td><td>Not connected</td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">ENB / DIAG</span> bridge diagnostic B (active low)</td><td>Not connected</td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">PWM</span> bridge PWM command</td><td>Not connected</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Power, motor and encoder connectors

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Connector</th><th>Contact</th><th>Function</th></tr></thead>
  <tbody>
    <tr><td rowspan="2">J3 power (XT60)</td><td>1</td><td><span class="xb-pill xb-p-sig">VIN</span> motor supply positive</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td rowspan="2">J4 motor</td><td>1</td><td><span class="xb-pill xb-p-sig">MOTOR A</span></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-sig">MOTOR B</span></td></tr>
    <tr><td rowspan="4">J5 encoder</td><td>1</td><td><span class="xb-pill xb-p-5v">ENC 5 V</span> encoder supply</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">ENC A</span> raw channel A</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">ENC B</span> raw channel B</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The XT60 contact polarity is taken from the schematic; check it against the silk and the plug before applying power. Match the encoder&rsquo;s supply and output levels to J5 before connecting it.

### Solder links

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>Effect</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>JP1</td><td>Cut to disable the bridge fault light (D6)</td><td>Bridged</td></tr>
    <tr><td>SJF1</td><td>Cut to disable the supply fault light</td><td>Bridged</td></tr>
    <tr><td>SJF2</td><td>Cut to disable the over-voltage light</td><td>Bridged</td></tr>
    <tr><td>SJF3</td><td>Cut to disable the reverse-connection light</td><td>Bridged</td></tr>
    <tr><td>SJE1</td><td>Cut to disable the encoder-supply fault light</td><td>Bridged</td></tr>
    <tr><td>SJ1</td><td>Joins the encoder 5&nbsp;V to a pull-up on encoder channel A</td><td>Open</td></tr>
    <tr><td>SJ2</td><td>Joins the encoder 5&nbsp;V to a pull-up on encoder channel B</td><td>Open</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>The design is not yet built.</span></div>
  <div class="xb-card"><b>A brushed motor</b><span>A 12&nbsp;V motor with a compatible single-ended encoder.</span></div>
  <div class="xb-card"><b>A motor supply and fuse</b><span>Separate from the controller, with the fuse the silk calls for.</span></div>
  <div class="xb-card"><b>Two host cables</b><span>One for J1 and one for J2. The Prime allocation is Open.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Tell the connectors apart</h3>
    <p>With all power removed, distinguish J3, the motor supply input, from J4, the motor output. Never connect a supply to J4.</p>
  </li>
  <li class="xb-step">
    <h3>Match the encoder</h3>
    <p>Check the encoder&rsquo;s supply and the electrical limits of its channels against J5 before connecting: J5 contact 1 is the encoder 5&nbsp;V, 2 ground, 3 channel A, 4 channel B.</p>
  </li>
  <li class="xb-step">
    <h3>Wire two host cables</h3>
    <p>J1 carries the encoder and bridge controls, and J2 the monitoring and overcurrent lines. A complete allocation of Prime pins for both sockets has not passed review, so none is given here. Verify the header, the rail positions and the cable orientation before applying power.</p>
    <p class="xb-expect">Allocate every contact against one named Prime revision; an allocation for one revision must not be copied to another.</p>
  </li>
  <li class="xb-step">
    <h3>Set the overcurrent reference</h3>
    <p>The silk says to set the overcurrent trimmer before use. The setting procedure and the trip level are not established.</p>
  </li>
  <li class="xb-step">
    <h3>Keep the motor disconnected first</h3>
    <p>Check the direction lines, the PWM line being inactive, both diagnostic lines and the independent cutoff and reset behaviour before the motor is connected.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>A closed-loop motor axis with current limiting and fault handling</td><td>None in the checked firmware</td><td>Not supported</td></tr>
    <tr><td>Open-loop switched outputs</td><td>Switch</td><td>Can switch pins on commands, but does not coordinate direction, PWM, current sampling or the overcurrent latch; no settings are given</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

This board needs software that coordinates the two direction lines and the PWM, samples the current monitor during a settled PWM window, regulates the drive, reads the quadrature encoder and handles the diagnostic lines and the latch policy. The checked SmoothieV2 source (revision 2a21c0108b1d095ecd8b2b9358e94055f053c003) provides no such controller: its rotary-encoder module is a handwheel input, its temperature control is a heater regulator, and its step and direction actuator is a different interface. Do not repurpose a heater regulator, invent current-loop gains, treat a generic PWM command as a complete motor setup, or bypass the hardware latch. This applies to that revision only; it does not describe firmware installed on a controller.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 170" role="img" aria-labelledby="xb-how-t">
    <title id="xb-how-t">Motor power passes the input protection to the H-bridge, which drives the motor; its current sense feeds a comparator and latch that can gate the PWM, and the encoder returns to the host.</title>
    <g font-size="13" font-weight="700" text-anchor="middle" fill="#e6ebf2">
      <rect x="20" y="55" width="140" height="60" rx="8" fill="#1f2226" stroke="#e0a877"/><text x="90" y="80">J3 power</text><text x="90" y="100" font-weight="400" fill="#a9b4c2">XT60</text>
      <rect x="200" y="55" width="160" height="60" rx="8" fill="#212936" stroke="#5fb3ff"/><text x="280" y="80">Input protection</text><text x="280" y="100" font-weight="400" fill="#a9b4c2">LTC4368, Q1, D1</text>
      <rect x="400" y="55" width="160" height="60" rx="8" fill="#212936" stroke="#6fe08a"/><text x="480" y="80">H-bridge</text><text x="480" y="100" font-weight="400" fill="#a9b4c2">VNH5019A-E</text>
      <rect x="600" y="55" width="140" height="60" rx="8" fill="#1f2226" stroke="#e0a877"/><text x="670" y="80">J4 motor</text><text x="670" y="100" font-weight="400" fill="#a9b4c2">and J5 encoder</text>
      <rect x="780" y="55" width="200" height="60" rx="8" fill="#212936" stroke="#e0a877"/><text x="880" y="80">Cutoff path</text><text x="880" y="100" font-weight="400" fill="#a9b4c2">U2, U3, U4 gate the PWM</text>
    </g>
    <g stroke-width="3" fill="none" stroke="#a9b4c2"><path d="M160 85H200"/><path d="M360 85H400"/><path d="M560 85H600"/><path d="M740 85H780"/></g>
  </svg>
  </div>
  <figcaption>The cutoff path watches the bridge current and gates the PWM in hardware, separately from the host.</figcaption>
</figure>
{:/nomarkdown}

J1 carries the direction and PWM commands, the encoder returns and the two diagnostic lines; J2 carries the current and supply monitoring and the overcurrent status and reset. A comparator, a latch and logic gates form a proposed hardware cutoff around the bridge. Their presence does not prove the cutoff timing, that a reset is accepted only when idle, or a verified power sequence. Motor power enters at J3 and the motor connects at J4; it must never be powered through a Gadgeteer 5&nbsp;V pin.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-red"></span>Bridge fault (D6)</th><th><span class="xb-led xb-led-red"></span>Supply fault</th><th><span class="xb-led xb-led-red"></span>Over-voltage</th><th><span class="xb-led xb-led-red"></span>Reverse</th><th><span class="xb-led xb-led-red"></span>Encoder supply fault</th></tr></thead>
  <tbody>
    <tr><td>Where</td><td>Upper right, near the motor terminals</td><td>Not drawn</td><td>Not drawn</td><td>Not drawn</td><td>Not drawn</td></tr>
    <tr><td>Lit means</td><td>The overcurrent status is active</td><td>The input protection controller reports a fault</td><td>The input protection controller reports over-voltage</td><td>The supply is connected the wrong way round</td><td>The encoder supply switch reports a fault</td></tr>
    <tr><td>Disable it</td><td>Cut JP1</td><td>Cut SJF1</td><td>Cut SJF2</td><td>Cut SJF3</td><td>Cut SJE1</td></tr>
  </tbody>
</table></div>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Motor does not turn</td><td>Supply on J3, the PWM and direction lines, the diagnostic lines, and whether the overcurrent latch has tripped.</td></tr>
    <tr><td>Bridge fault light on</td><td>The latch holds its state until reset on J2 contact 6; check the motor, the wiring and the trimmer setting.</td></tr>
    <tr><td>Encoder reads nothing</td><td>J5 supply and wiring, the pull-up links SJ1 and SJ2 for an open-collector encoder, and the encoder&rsquo;s output level.</td></tr>
    <tr><td>Everything dark with supply connected</td><td>The 8&nbsp;A fuse, the polarity of J3, and the supply fault lights.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>Revision</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/advanced-h-bridge-encoder-board/advanced-h-bridge-encoder-board-schematic.pdf">Schematic (PDF)</a></td><td>v38</td><td>The complete circuit diagram. Its title block reads v25.</td></tr>
    <tr><td><a href="/images/extensions/advanced-h-bridge-encoder-board/advanced-h-bridge-encoder-board-bom.csv">Parts list (CSV)</a></td><td>v38</td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/advanced-h-bridge-encoder-board/advanced-h-bridge-encoder-board-diagram.png">Board drawing (SVG)</a></td><td>v38</td><td>The top view used on this page, at full resolution</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-hb-mount-t">
  <title id="xb-hb-mount-t">Mounting drawing of the advanced H-bridge encoder board, component side: outline 80 by 60 millimetres with 4 mounting holes and 2 cable-tie holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="253.3" y="78.0" width="453.3" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M253.3 56H706.7"/><path d="M253.3 50V62"/><path d="M706.7 50V62"/><path d="M732.7 78.0V418.0"/><path d="M726.7 78.0h12"/><path d="M726.7 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">80</text>
  <text x="744.7" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">60</text>
  <circle cx="253.3" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="241.3" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M195.3 104.0h30" fill="none"/><path d="M229.3 104.0l-8 -4v8z"/><path d="M195.3 104.0v30" fill="none"/><path d="M195.3 138.0l-4 -8h8z"/></g>
  <text x="233.3" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="191.3" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="310.0" cy="134.7" r="9.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M296.9 134.7h26.1M310.0 121.6v26.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="300.9" y="163.7" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  10.00, 10.00</text>
  <circle cx="650.0" cy="134.7" r="9.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M636.9 134.7h26.1M650.0 121.6v26.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="659.1" y="163.7" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  70.00, 10.00</text>
  <circle cx="310.0" cy="361.3" r="9.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M296.9 361.3h26.1M310.0 348.3v26.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="300.9" y="342.3" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  10.00, 50.00</text>
  <circle cx="650.0" cy="361.3" r="9.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M636.9 361.3h26.1M650.0 348.3v26.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="659.1" y="342.3" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  70.00, 50.00</text>
  <circle cx="270.3" cy="95.0" r="7.1" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <circle cx="298.7" cy="95.0" r="7.1" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <text x="313.7" y="99.0" text-anchor="start" font-size="12" fill="#a9b4c2">cable tie</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 80 × 60&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>10.00</td><td>10.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>70.00</td><td>10.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>10.00</td><td>50.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>70.00</td><td>50.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>–</td><td>3.00</td><td>3.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
    <tr><td>–</td><td>8.00</td><td>3.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
  </tbody>
</table></div>

{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Every figure is a design value or a value from the parts list, as the last column says. None is a measurement on a built board. **Open** means not established.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Motor supply</td><td>J3</td><td>10.8 V</td><td>12 V</td><td>13.2 V</td><td>Earlier design target; not a qualified rating of this revision</td></tr>
    <tr><td>Motor current, continuous</td><td>J4</td><td>—</td><td>—</td><td>5 A</td><td>Earlier design target; the silk says 5&nbsp;A unqualified</td></tr>
    <tr><td>PWM frequency</td><td>J1 contact 9</td><td>—</td><td>—</td><td>20 kHz</td><td>Design target and board silk</td></tr>
    <tr><td>Fuse</td><td>J3 supply</td><td>—</td><td>8 A</td><td>—</td><td>Board silk; no fuse is fitted on the board</td></tr>
    <tr><td>Current sense resistor</td><td>RF5</td><td>—</td><td>6.2 m&Omega;, 1&nbsp;%, 2 W</td><td>—</td><td>Parts list</td></tr>
    <tr><td>Bulk capacitor, surge diode</td><td>C1, D1</td><td>—</td><td>1000 &micro;F, SMBJ15A</td><td>—</td><td>Parts list</td></tr>
    <tr><td>Logic supply</td><td>J1, J2 contact 1</td><td>Open</td><td>3.3 V</td><td>Open</td><td>Host current allowance Open</td></tr>
    <tr><td>Overcurrent trip level, cutoff time</td><td>RV1, U3, U4</td><td>Open</td><td>Open</td><td>Open</td><td>Not established</td></tr>
    <tr><td>Regeneration, thermal rise, fault recovery</td><td>Board</td><td>Open</td><td>Open</td><td>Open</td><td>Not established</td></tr>
    <tr><td>Encoder levels</td><td>J5</td><td>Open</td><td>Open</td><td>Open</td><td>Match to the encoder before connecting</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Prime headers

A complete allocation of Prime header pins for both sockets has not passed review. A discrepancy in the rail positions on the Prime&rsquo;s physical headers has been noted: verify numbered continuity with the power removed, and name the Prime revision for any allocation.

See all boards on the [extension boards](/extension-boards) page.
