---
layout: default
title: "Servo control"
description: "A TMC4671 servo-control interface board with encoder and Hall inputs and a 20-contact power-stage header: pinout, links and limits."
permalink: /extensions/servo-control
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Motors</p>
    <h1 id="servo-control">Servo control</h1>
    <p class="xb-lead">A controller board for a brushless servo axis. A Trinamic TMC4671 performs the servo control from step, direction and enable signals plus SPI, reads an encoder and Hall sensors, and talks to a separately specified power stage through a 20-contact header. It carries no motor current itself and is not a hobby-servo pulse distributor.</p>
    <p class="xb-badge">Design candidate · revision v24 · schematic title block reads WIP · not yet built or tested</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/servo-control/servo-control-diagram.png" alt="Top view of the servo control board: two ten-contact sockets along the top edge, the TMC4671 chip at the centre, a twenty-contact power-stage header along the bottom and an eight-pin encoder header at the right.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>TMC4671</b><span>field-oriented servo controller</span></div>
  <div class="xb-stat"><b>20 contacts</b><span>power-stage header, signals only</span></div>
  <div class="xb-stat"><b>Encoder + Hall</b><span>5&nbsp;V single-ended inputs</span></div>
  <div class="xb-stat"><b>3 protected rails</b><span>encoder, stage 5&nbsp;V, stage 3.3&nbsp;V</span></div>
  <div class="xb-stat"><b>3 lights</b><span>red, one per protected rail</span></div>
  <div class="xb-stat"><b>56 × 50</b><span>millimetres, four M3 holes</span></div>
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
  This is a design candidate that has not been built or tested. The 20-contact header J3 is a logic and analogue interface, not a motor-phase connector: never connect a motor or a DC bus to it. An unlit fault light is not permission to energize the motor stage.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>Closed-loop control of a brushless motor through a separate power stage, with encoder and Hall feedback</td></tr>
    <tr><td>Controller</td><td>Trinamic TMC4671-LA (U1) with a 25&nbsp;MHz oscillator (Y1)</td></tr>
    <tr><td>Host interface</td><td>J1, a ten-contact Gadgeteer socket: step, direction, enable and SPI; J2 is a chain socket that continues them</td></tr>
    <tr><td>Power-stage interface</td><td>J3, a 2 &times; 10 2.54&nbsp;mm header: six PWM outputs, brake, enable, two current-sense pairs, a bus-voltage feedback input and protected 3.3&nbsp;V and 5&nbsp;V outputs</td></tr>
    <tr><td>Feedback</td><td>J4, an eight-pin header: encoder A, B and index and Hall U, V and W at 5&nbsp;V, with 4.7&nbsp;k&Omega; pull-ups, 1&nbsp;k&Omega; series paths and clamp arrays</td></tr>
    <tr><td>Protected rails</td><td>Three TPS259631 stages, each followed by an LM66100 output stage: encoder 5&nbsp;V, stage 5&nbsp;V and stage 3.3&nbsp;V. Their 350&nbsp;mA and 200&nbsp;mA parts-list labels are design annotations, not qualified ratings.</td></tr>
    <tr><td>Debug</td><td>J5, a six-pin header with UART, a status node and reset</td></tr>
    <tr><td>Lights</td><td>Three red lights, one for each protected rail</td></tr>
    <tr><td>Size</td><td>56 &times; 50&nbsp;mm with four 3.2&nbsp;mm holes on a 40&nbsp;mm square</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> for the host signals; the checked firmware cannot set the controller up</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side. The mounting holes, most small parts and the underside parts are not marked.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/servo-control/servo-control-diagram.png" alt="Top view of the servo control board with twelve numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:29%;top:8%" aria-label="1: host socket">1<span class="xb-pop"><b>Host socket (J1)</b> — a ten-contact socket (Gadgeteer S): host 3.3&nbsp;V and 5&nbsp;V, step, direction, enable, four SPI lines and ground. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:60.7%;top:8%" aria-label="2: chain socket">2<span class="xb-pop"><b>Chain socket (J2)</b> — a second ten-contact socket that continues the host signals to a following board. Contacts 1, 2 and 10 are shared directly; the others depend on links JP3 to JP9.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:44.7%;top:77%" aria-label="3: power stage header">3<span class="xb-pop"><b>Power stage header (J3)</b> — a 2 &times; 10 header for the external power stage: six PWM outputs, brake and enable, current and bus-voltage feedback, and protected 3.3&nbsp;V and 5&nbsp;V outputs. It is not a motor connector.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-4" style="left:89%;top:44%" aria-label="4: encoder and Hall header">4<span class="xb-pop"><b>Encoder and Hall header (J4)</b> — an eight-pin 2.54&nbsp;mm header: encoder 5&nbsp;V, ground, encoder A, B and index, and Hall U, V and W.</span></a>
      <a class="xb-mk xb-pl" href="#tour-5" style="left:6%;top:50%" aria-label="5: debug header">5<span class="xb-pop"><b>Debug header (J5)</b> — a six-pin 2.54&nbsp;mm header: ground, 3.3&nbsp;V, UART receive and transmit, a status node and reset. It is not a USB or RS-232 connector.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:45%;top:44%" aria-label="6: motion controller">6<span class="xb-pop"><b>Motion controller (U1)</b> — a Trinamic TMC4671 that performs the servo control. It needs motor, current-loop and encoder setup before step and direction mean anything.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:65.5%;top:19.5%" aria-label="7: oscillator">7<span class="xb-pop"><b>Oscillator (Y1)</b> — the 25&nbsp;MHz 3.3&nbsp;V clock of the controller.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:50%;top:28%" aria-label="8: chain links">8<span class="xb-pop"><b>Chain links (JP3 to JP9)</b> — solder links for the chain signals: JP3 to JP6 are open (step, direction, enable and chip select not continued), JP7 to JP9 are bridged (the SPI data and clock continue).</span></a>
      <a class="xb-mk xb-pr" href="#tour-9" style="left:79.5%;top:50%" aria-label="9: encoder ESD arrays">9<span class="xb-pop"><b>Encoder protection arrays (U2, U3)</b> — TPD4E1U06 arrays that clamp the encoder A, B and index lines and the Hall lines.</span></a>
      <a class="xb-mk" href="#tour-10" style="left:30%;top:60%" aria-label="10: current clamps">10<span class="xb-pop"><b>Clamp diodes (D9 to D11 and others)</b> — BAV99 diodes that clamp the analogue feedback inputs.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-11" style="left:87%;top:5%" aria-label="11: encoder fault light">11<span class="xb-pop"><b>Encoder supply fault light (D983)</b> — a red light for the protected encoder 5&nbsp;V branch. Its link JP981 can be cut to disable it.</span></a>
      <a class="xb-mk" href="#tour-12" style="left:24%;top:95%" aria-label="12: stage fault lights">12<span class="xb-pop"><b>Power-stage fault lights (D1083, D1183)</b> — red lights for the protected 5&nbsp;V and 3.3&nbsp;V outputs to the power stage (labelled PS5 FAULT and PS3 FAULT). Links JP1081 and JP1181 can be cut to disable them.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host socket (J1)</b> — a ten-contact socket (Gadgeteer S): host 3.3&nbsp;V and 5&nbsp;V, step, direction, enable, four SPI lines and ground. <i>See the pinout.</i></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket (J2)</b> — a second ten-contact socket that continues the host signals to a following board. Contacts 1, 2 and 10 are shared directly; the others depend on links JP3 to JP9.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Power stage header (J3)</b> — a 2 &times; 10 header for the external power stage: six PWM outputs, brake and enable, current and bus-voltage feedback, and protected 3.3&nbsp;V and 5&nbsp;V outputs. It is not a motor connector.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Encoder and Hall header (J4)</b> — an eight-pin 2.54&nbsp;mm header: encoder 5&nbsp;V, ground, encoder A, B and index, and Hall U, V and W.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Debug header (J5)</b> — a six-pin 2.54&nbsp;mm header: ground, 3.3&nbsp;V, UART receive and transmit, a status node and reset. It is not a USB or RS-232 connector.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Motion controller (U1)</b> — a Trinamic TMC4671 that performs the servo control. It needs motor, current-loop and encoder setup before step and direction mean anything.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Oscillator (Y1)</b> — the 25&nbsp;MHz 3.3&nbsp;V clock of the controller.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Chain links (JP3 to JP9)</b> — solder links for the chain signals: JP3 to JP6 are open (step, direction, enable and chip select not continued), JP7 to JP9 are bridged (the SPI data and clock continue).</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Encoder protection arrays (U2, U3)</b> — TPD4E1U06 arrays that clamp the encoder A, B and index lines and the Hall lines.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Clamp diodes (D9 to D11 and others)</b> — BAV99 diodes that clamp the analogue feedback inputs.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Encoder supply fault light (D983)</b> — a red light for the protected encoder 5&nbsp;V branch. Its link JP981 can be cut to disable it.</div></li>
    <li id="tour-12"><span class="xb-n">12</span><div><b>Power-stage fault lights (D1083, D1183)</b> — red lights for the protected 5&nbsp;V and 3.3&nbsp;V outputs to the power stage (labelled PS5 FAULT and PS3 FAULT). Links JP1081 and JP1181 can be cut to disable them.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1 (host) and J2 (chain): ten-contact sockets

Contact 1 is at the left of the socket, marked by a dot; the odd contacts are in the lower row. J2 has the same contact order; the table gives the J1 roles.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>J1 signal</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Host 3.3&nbsp;V in; shared with J2</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Host 5&nbsp;V in; shared with J2</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">STEP</span></td><td>10&nbsp;k&Omega; pull-down</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">DIR</span></td><td>10&nbsp;k&Omega; pull-down</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">ENABLE</span></td><td>10&nbsp;k&Omega; pull-down</td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">CS</span></td><td>SPI chip select, 10&nbsp;k&Omega; pull-up</td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-sig">MOSI</span></td><td>SPI data to the controller</td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">MISO</span></td><td>SPI data from the controller</td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">SCK</span></td><td>SPI clock</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Shared with J2</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J3: power-stage header (2 × 10)

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>PWM_UH</td><td>2</td><td>PWM_UL</td></tr>
    <tr><td>3</td><td>PWM_VH</td><td>4</td><td>PWM_VL</td></tr>
    <tr><td>5</td><td>PWM_WH</td><td>6</td><td>PWM_WL</td></tr>
    <tr><td>7</td><td>Brake</td><td>8</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>9</td><td>Stage enable</td><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>11</td><td>Current 0 positive</td><td>12</td><td>Current 0 negative</td></tr>
    <tr><td>13</td><td>Current 1 positive</td><td>14</td><td>Current 1 negative</td></tr>
    <tr><td>15</td><td>Bus voltage feedback</td><td>16</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>17</td><td><span class="xb-pill xb-p-3v3">3.3 V</span> protected output</td><td>18</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>19</td><td><span class="xb-pill xb-p-5v">5 V</span> protected output</td><td>20</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The bus-voltage contact (15) is a feedback input with clamp circuitry, not a DC-bus power input; the external stage must scale its bus voltage. No motor-current return capability is established for the ground contacts. Check the cable&rsquo;s pin-one orientation with the power removed.

### J4 encoder and Hall, J5 debug

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Connector</th><th>Contacts</th></tr></thead>
  <tbody>
    <tr><td>J4 encoder and Hall</td><td>1 encoder 5&nbsp;V (protected output), 2 ground, 3 encoder A, 4 encoder B, 5 encoder index N, 6 Hall U, 7 Hall V, 8 Hall W</td></tr>
    <tr><td>J5 debug</td><td>1 ground, 2 3.3&nbsp;V, 3 UART receive (input), 4 UART transmit (output), 5 status, 6 reset</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

A 5&nbsp;V supply label does not qualify every encoder output type; verify the encoder&rsquo;s levels and current before connecting it.

### Solder links

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>Effect</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>JP3 to JP6</td><td>Continue the chain step, direction, enable and chip select from J1 to J2</td><td>Open</td></tr>
    <tr><td>JP7 to JP9</td><td>Continue MOSI, MISO and the clock</td><td>Bridged</td></tr>
    <tr><td>JP981, JP1081, JP1181</td><td>Cut to disable the encoder, stage 5&nbsp;V and stage 3.3&nbsp;V fault lights</td><td>Bridged</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Closing a chain link joins the host and chain signals; it does not create a separately addressable axis. Leave the chain unused until the downstream board, the selection scheme and the shared supply budget are defined.

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>A design candidate, not yet built.</span></div>
  <div class="xb-card"><b>A power stage</b><span>An external stage with a compatible 20-contact interface, a motor supply and its own protection.</span></div>
  <div class="xb-card"><b>A brushless motor</b><span>With an encoder, Hall sensors or both.</span></div>
  <div class="xb-card"><b>A cable</b><span>A 2 &times; 10 ribbon to the power stage, checked for pin one.</span></div>
  <div class="xb-card"><b>A controller that sets the TMC4671 up</b><span>The checked firmware cannot; see Configuration.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Define the whole system first</h3>
    <p>Choose the motor, encoder, power stage and supply together. This board only controls; the stage and the motor decide what can be done safely.</p>
  </li>
  <li class="xb-step">
    <h3>Connect with the power removed</h3>
    <p>Join J1 to the host, J3 to the power stage and J4 to the encoder and Hall sensors, checking numbered continuity and pin one on each.</p>
    <p class="xb-expect">No motor or bus voltage ever goes on J3.</p>
  </li>
  <li class="xb-step">
    <h3>Check the links</h3>
    <p>Leave JP3 to JP6 open unless a chain board is defined. Inspect the actual bridges before relying on the delivered state.</p>
  </li>
  <li class="xb-step">
    <h3>Commission restrained</h3>
    <p>Set up the controller from a source that supports it, with the motor unloaded and restrained, and only after the power stage has been independently cleared.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>A servo axis through this board</td><td>None in the checked firmware</td><td>Not supported</td></tr>
    <tr><td>Step and direction on a stepper driver</td><td>Actuator with a stepper driver type</td><td>Does not apply: the step and direction inputs do not configure this board</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The TMC4671 needs motor, current-loop and encoder setup before step and direction requests mean anything. The checked SmoothieV2 source (revision 2a21c0108b1d095ecd8b2b9358e94055f053c003) has no TMC4671 setup backend: its Trinamic driver factory accepts only the 2590 and 2660 types. Do not substitute a TMC2590 configuration or invent register values. A separately preconfigured controller, or later or custom firmware, would need its own verified contract. This applies to that revision only.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 170" role="img" aria-labelledby="xb-how-t">
    <title id="xb-how-t">The host on J1 talks to the TMC4671, which sends PWM commands out through J3 to an external power stage and the motor; encoder and Hall signals enter on J4, and current and bus-voltage feedback return on J3.</title>
    <g font-size="13" font-weight="700" text-anchor="middle" fill="#e6ebf2">
      <rect x="10" y="55" width="150" height="60" rx="8" fill="#1f2226" stroke="#e0a877"/><text x="85" y="80">J1 host</text><text x="85" y="100" font-weight="400" fill="#a9b4c2">step, dir, SPI</text>
      <rect x="230" y="55" width="170" height="60" rx="8" fill="#212936" stroke="#6fe08a"/><text x="315" y="80">TMC4671</text><text x="315" y="100" font-weight="400" fill="#a9b4c2">servo control</text>
      <rect x="470" y="55" width="150" height="60" rx="8" fill="#1f2226" stroke="#e0a877"/><text x="545" y="80">J3</text><text x="545" y="100" font-weight="400" fill="#a9b4c2">power-stage header</text>
      <rect x="690" y="55" width="150" height="60" rx="8" fill="#212936" stroke="#6fe08a"/><text x="765" y="80">External stage</text><text x="765" y="100" font-weight="400" fill="#a9b4c2">and motor</text>
      <rect x="230" y="135" width="170" height="30" rx="8" fill="#1f2226" stroke="#e0a877"/><text x="315" y="155">J4 encoder, Hall</text>
    </g>
    <g stroke-width="3" fill="none" stroke="#a9b4c2"><path d="M160 85H230"/><path d="M400 85H470"/><path d="M620 85H690"/><path d="M315 135V115"/></g>
  </svg>
  </div>
  <figcaption>PWM, brake and enable leave through J3; current and bus-voltage feedback return the same way. The encoder and Hall signals enter on J4.</figcaption>
</figure>
{:/nomarkdown}

Closed-loop field-oriented control uses current feedback and the rotor position to regulate torque. Analog Devices describes the chip&rsquo;s [torque, velocity and position control functions](https://www.analog.com/en/products/tmc4671.html); those capabilities do not qualify this board&rsquo;s complete system. The pull-down resistors on the PWM, brake and enable outputs describe biasing only: they do not establish the external stage&rsquo;s state during reset or loss of power.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-red"></span>Encoder fault (D983)</th><th><span class="xb-led xb-led-red"></span>PS5 fault (D1083)</th><th><span class="xb-led xb-led-red"></span>PS3 fault (D1183)</th></tr></thead>
  <tbody>
    <tr><td>Where</td><td>Top right, labelled ENC FAULT</td><td>Bottom left, labelled PS5 FAULT</td><td>Bottom left, labelled PS3 FAULT</td></tr>
    <tr><td>Lit means</td><td>The protected encoder 5&nbsp;V branch reports a fault</td><td>The protected stage 5&nbsp;V branch reports a fault</td><td>The protected stage 3.3&nbsp;V branch reports a fault</td></tr>
    <tr><td>Disable it</td><td>Cut JP981</td><td>Cut JP1081</td><td>Cut JP1181</td></tr>
  </tbody>
</table></div>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>No response to step and direction</td><td>The TMC4671 needs its registers set first; see Configuration.</td></tr>
    <tr><td>A fault light is on</td><td>The load on that protected output. Opening the light link only blanks the light; it does not disconnect the supply or prove a fault-free load.</td></tr>
    <tr><td>No encoder or Hall reading</td><td>The encoder&rsquo;s supply and output levels on J4, and the order of the contacts.</td></tr>
    <tr><td>Chain board does not respond</td><td>Which of JP3 to JP6 are closed; closing them joins host and chain signals and does not address a separate axis.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>Revision</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/servo-control/servo-control-schematic.pdf">Schematic (PDF)</a></td><td>v24</td><td>The complete circuit diagram. Its title block reads WIP.</td></tr>
    <tr><td><a href="/images/extensions/servo-control/servo-control-bom.csv">Parts list (CSV)</a></td><td>v24</td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/servo-control/servo-control-diagram.png">Board drawing (SVG)</a></td><td>v24</td><td>The top view used on this page, at full resolution</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-sc-mount-t">
  <title id="xb-sc-mount-t">Mounting drawing of the Servo control board, component side: outline 56 by 50 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="289.6" y="78.0" width="380.8" height="340.0" rx="10.2" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M289.6 56H670.4"/><path d="M289.6 50V62"/><path d="M670.4 50V62"/><path d="M696.4 78.0V418.0"/><path d="M690.4 78.0h12"/><path d="M690.4 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">56</text>
  <text x="708.4" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">50</text>
  <circle cx="289.6" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="277.6" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M231.6 104.0h30" fill="none"/><path d="M265.6 104.0l-8 -4v8z"/><path d="M231.6 104.0v30" fill="none"/><path d="M231.6 138.0l-4 -8h8z"/></g>
  <text x="269.6" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="227.6" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="323.6" cy="112.0" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M308.7 112.0h29.8M323.6 97.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="312.7" y="142.9" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.00</text>
  <circle cx="595.6" cy="112.0" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M580.7 112.0h29.8M595.6 97.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="606.5" y="142.9" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  45.00, 5.00</text>
  <circle cx="323.6" cy="384.0" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M308.7 384.0h29.8M323.6 369.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="312.7" y="363.1" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 45.00</text>
  <circle cx="595.6" cy="384.0" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M580.7 384.0h29.8M595.6 369.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="606.5" y="363.1" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  45.00, 45.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 56 × 50&nbsp;mm, corners rounded to a 1.5&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>45.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>5.00</td><td>45.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>45.00</td><td>45.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>

{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Every figure is from the parts list or the design files, as the last column says. None is a measurement on a built board. **Open** means not established.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Encoder 5 V output</td><td>J4 contact 1</td><td>Open</td><td>5 V</td><td>350 mA allocation</td><td>Parts-list label on the protection stage; a design annotation, not a qualified rating</td></tr>
    <tr><td>Stage 5 V output</td><td>J3 contact 19</td><td>Open</td><td>5 V</td><td>200 mA allocation</td><td>Parts-list label; not a qualified rating</td></tr>
    <tr><td>Stage 3.3 V output</td><td>J3 contact 17</td><td>Open</td><td>3.3 V</td><td>200 mA allocation</td><td>Parts-list label; not a qualified rating</td></tr>
    <tr><td>Host supply budget</td><td>J1 contacts 1, 2</td><td>Open</td><td>Open</td><td>Open</td><td>Not established</td></tr>
    <tr><td>Clock</td><td>Y1</td><td>—</td><td>25 MHz</td><td>—</td><td>Parts list, 3.3&nbsp;V oscillator</td></tr>
    <tr><td>Input levels, encoder types, thermal behaviour</td><td>J3, J4</td><td>Open</td><td>Open</td><td>Open</td><td>Not established</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Prime headers

No complete allocation of Prime pins has been verified for this board, and none is given here. Any allocation applies only to a named Prime revision, with numbered continuity checked with the power removed; the Prime&rsquo;s physical connector carries a noted rail-position discrepancy.

See all boards on the [extension boards](/extension-boards) page.
