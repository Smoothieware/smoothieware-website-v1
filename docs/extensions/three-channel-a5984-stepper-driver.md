---
layout: default
title: "Three-channel A5984 stepper driver board"
description: "Three stepper motor drivers on one board, using the Allegro A5984: STEP and DIR for X, Y and Z, a current trimmer per motor, 8 to 36 V motor power. Pinout, wiring, configuration and limits."
permalink: /extensions/three-channel-a5984-stepper-driver
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Motors</p>
    <h1 id="three-channel-a5984-stepper-driver">Three-channel A5984 stepper driver board</h1>
    <p class="xb-lead">Three bipolar stepper motor drivers on one 90&nbsp;mm square board, for example for the X, Y and Z axes. Each channel is an <a href="/images/extensions/three-channel-a5984-stepper-driver/datasheets/a5984.pdf">A5984</a> driver with its own current trimmer, controlled by STEP and DIR from a single ten-way cable. Motor power of 8 to 36&nbsp;V comes in on a screw terminal.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/three-channel-a5984-stepper-driver/three-channel-a5984-stepper-driver-diagram.png" alt="Top view of the Three-channel A5984 stepper driver board: two ten-pin connectors and a green power terminal on the left, three driver channels in a column with their capacitors, chips, trimmers and four-pin motor headers.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>3 motors</b><span>bipolar stepper channels</span></div>
  <div class="xb-stat"><b>A5984</b><span>Allegro driver on each channel</span></div>
  <div class="xb-stat"><b>1.65 A</b><span>peak at the top of the trimmer, calculated</span></div>
  <div class="xb-stat"><b>8 to 36 V</b><span>motor supply</span></div>
  <div class="xb-stat"><b>1/32</b><span>finest microstep setting</span></div>
  <div class="xb-stat"><b>90 × 90</b><span>millimetres, four layers</span></div>
</div>

<nav class="xb-nav" aria-label="On this page">
  <a href="#specs">Tech specs</a>
  <a href="#tour">Board tour</a>
  <a href="#pinout">Pinout</a>
  <a href="#what-you-need">What you need</a>
  <a href="#get-started">Get started</a>
  <a href="#current">Set the current</a>
  <a href="#configuration">Configuration</a>
  <a href="#motors">Motors and power</a>
  <a href="#how-it-works">How it works</a>
  <a href="#options">Microsteps</a>
  <a href="#chaining">Chaining</a>
  <a href="#troubleshooting">Troubleshooting</a>
  <a href="#downloads">Downloads</a>
  <a href="#mounting">Mounting</a>
  <a href="#electrical">Electrical</a>
  <a href="#simulation">Simulation</a>
  <a href="#datasheets">Datasheet</a>
  <a href="#historical">Historical page</a>
</nav>
{:/nomarkdown}

<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  The motor power input has <b>no protection against reversed polarity or over-voltage</b>. Check plus and minus before every first connection, never exceed 36&nbsp;V, and fit a fuse in the supply lead. Never connect or disconnect a motor while motor power is on.
</sl-alert>

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <a href="#current">Set each trimmer</a> before connecting motors: the top of the range is 1.65&nbsp;A peak with nominal parts and up to 1.96&nbsp;A with part tolerances, close to the chip&rsquo;s 2&nbsp;A absolute maximum. Cool the board with a fan from underneath.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>Drive three bipolar stepper motors from STEP and DIR signals</td></tr>
    <tr><td>Drivers</td><td>Three <a href="/images/extensions/three-channel-a5984-stepper-driver/datasheets/a5984.pdf">A5984</a>GLP, each with two 0.1&nbsp;&Omega; sense resistors</td></tr>
    <tr><td>Motor power</td><td>8 to 36&nbsp;V DC on a two-way screw terminal, common to the three channels</td></tr>
    <tr><td>Motor current</td><td>One trimmer per channel. Peak current = VREF / 0.8&nbsp;&Omega;, 0 to 1.65&nbsp;A nominal (calculated)</td></tr>
    <tr><td>Microstepping</td><td>Full step to 1/32, set per channel with three 0&nbsp;&Omega; positions</td></tr>
    <tr><td>Control</td><td>STEP and DIR per motor and one shared active-low enable, 3.3&nbsp;V logic</td></tr>
    <tr><td>Connectors</td><td>INPUT Y and CHAIN Y, 2×5 at 1.27&nbsp;mm (Gadgeteer type Y); three 1×4 motor headers at 2.54&nbsp;mm; 3.5&nbsp;mm screw terminal</td></tr>
    <tr><td>Protection</td><td>In the driver chip: overcurrent latch, thermal shutdown, undervoltage lockout. On the board: none for the power input.</td></tr>
    <tr><td>Cooling</td><td>Fan under the board; four fan holes on a 60&nbsp;mm square</td></tr>
    <tr><td>Size</td><td>90 × 90&nbsp;mm, four copper layers, eight 3&nbsp;mm holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a>, or any controller with 3.3&nbsp;V STEP and DIR outputs</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN OHL v1.2</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side; channel X is at the top, Y in the middle and Z at the bottom.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/three-channel-a5984-stepper-driver/three-channel-a5984-stepper-driver-diagram.png" alt="Top view of the Three-channel A5984 stepper driver board with thirteen numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:20.6%;top:30.9%" aria-label="1: input connector (input y)">1<span class="xb-pop"><b>Input connector (INPUT Y)</b> — a 2×5, 1.27 mm Gadgeteer Y connector that brings STEP and DIR for all three motors, the shared enable line, 3.3 V and ground from the controller.</span></a>
      <a class="xb-mk xb-pl" href="#tour-2" style="left:21.1%;top:65.7%" aria-label="2: chain connector (chain y)">2<span class="xb-pop"><b>Chain connector (CHAIN Y)</b> — a second connector wired contact for contact to the input. It passes all seven control signals on.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-3" style="left:8.6%;top:49.7%" aria-label="3: motor power terminal">3<span class="xb-pop"><b>Motor power terminal</b> — a two-way screw terminal for 8 to 36 V DC. Plus is the upper screw, minus the lower one. There is no reverse-polarity protection.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:75.5%;top:24.9%" aria-label="4: motor x header">4<span class="xb-pop"><b>Motor X header</b> — four pins for one bipolar motor: coil 1 on 1B and 1A, coil 2 on 2A and 2B.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:75.5%;top:52.1%" aria-label="5: motor y header">5<span class="xb-pop"><b>Motor Y header</b> — the same four pins for the second motor.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:75.5%;top:79.3%" aria-label="6: motor z header">6<span class="xb-pop"><b>Motor Z header</b> — the same four pins for the third motor.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:43.9%;top:20.6%" aria-label="7: driver chips">7<span class="xb-pop"><b>Driver chips</b> — three Allegro A5984 stepper drivers, one per motor, X at the top. Each has an exposed pad soldered to the board on its underside.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:64.6%;top:36.9%" aria-label="8: current trimmers">8<span class="xb-pop"><b>Current trimmers</b> — one trimmer below each driver sets that motor’s current. The single pad on the side facing its driver chip is the wiper, where you measure VREF.</span></a>
      <a class="xb-mk xb-pb" href="#tour-9" style="left:54.8%;top:11.1%" aria-label="9: microstep positions">9<span class="xb-pop"><b>Microstep positions</b> — three 0603 positions above each driver, from left to right MS3, MS2 and MS1. A fitted link makes that input high.</span></a>
      <a class="xb-mk xb-pb" href="#tour-10" style="left:60.6%;top:14.9%" aria-label="10: sense resistors">10<span class="xb-pop"><b>Sense resistors</b> — two 0.1 Ω resistors per driver that measure the coil current.</span></a>
      <a class="xb-mk xb-pb" href="#tour-11" style="left:27.6%;top:22.2%" aria-label="11: supply capacitors">11<span class="xb-pop"><b>Supply capacitors</b> — two 47 µF, 63 V capacitors next to each driver.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-12" style="left:89.0%;top:17.3%" aria-label="12: fan holes">12<span class="xb-pop"><b>Fan holes</b> — four non-plated 3 mm holes on a 60 × 60 mm square, for a fan under the board.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-13" style="left:86.9%;top:6.4%" aria-label="13: board mounting holes">13<span class="xb-pop"><b>Board mounting holes</b> — four plated 3 mm holes in the corners, connected to ground.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Input connector (INPUT Y)</b> — a 2×5, 1.27 mm Gadgeteer Y connector that brings STEP and DIR for all three motors, the shared enable line, 3.3 V and ground from the controller.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain connector (CHAIN Y)</b> — a second connector wired contact for contact to the input. It passes all seven control signals on.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Motor power terminal</b> — a two-way screw terminal for 8 to 36 V DC. Plus is the upper screw, minus the lower one. There is no reverse-polarity protection.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Motor X header</b> — four pins for one bipolar motor: coil 1 on 1B and 1A, coil 2 on 2A and 2B.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Motor Y header</b> — the same four pins for the second motor.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Motor Z header</b> — the same four pins for the third motor.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Driver chips</b> — three Allegro <a href="/images/extensions/three-channel-a5984-stepper-driver/datasheets/a5984.pdf">A5984</a> stepper drivers, one per motor, X at the top. Each has an exposed pad soldered to the board on its underside.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Current trimmers</b> — one trimmer below each driver sets that motor’s current. The single pad on the side facing its driver chip is the wiper, where you measure VREF.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Microstep positions</b> — three 0603 positions above each driver, from left to right MS3, MS2 and MS1. A fitted link makes that input high.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Sense resistors</b> — two 0.1 Ω resistors per driver that measure the coil current.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Supply capacitors</b> — two 47 µF, 63 V capacitors next to each driver.</div></li>
    <li id="tour-12"><span class="xb-n">12</span><div><b>Fan holes</b> — four non-plated 3 mm holes on a 60 × 60 mm square, for a fan under the board.</div></li>
    <li id="tour-13"><span class="xb-n">13</span><div><b>Board mounting holes</b> — four plated 3 mm holes in the corners, connected to ground.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### INPUT Y: control connector

Connect INPUT Y to the header labelled **G_F** (J37) on the Smoothieboard V2 Prime (Prime2590 and Prime2660 designs) with a straight ten-way cable. The last column is the name you use for each pin in the configuration file.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Pin</th><th>Signal</th><th>What it does</th><th>Prime pin (header G_F)</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Logic supply for the current trimmers and links</td><td>3.3 V</td></tr>
    <tr><td>2</td><td>Not connected</td><td>The board does not use 5 V</td><td>—</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">X STEP</span></td><td>Motor X moves one microstep on each rising edge</td><td><code>PB1</code></td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">X DIR</span></td><td>Motor X direction</td><td><code>PJ4</code></td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">Y STEP</span></td><td>Motor Y step</td><td><code>PA4</code></td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">Y DIR</span></td><td>Motor Y direction</td><td><code>PG0</code></td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-sig">Z STEP</span></td><td>Motor Z step</td><td><code>PJ3</code></td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">Z DIR</span></td><td>Motor Z direction</td><td><code>PG1</code></td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">ENABLE</span></td><td>All three drivers; low enables, high or unconnected disables</td><td><code>PJ2</code></td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Ground, shared with the motor supply minus</td><td>GND</td></tr>
  </tbody>
</table></div>
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Connector pin positions">
  <svg viewBox="0 0 1000 320" role="img" aria-labelledby="xb-a3-conn">
    <title id="xb-a3-conn">INPUT Y seen from above: odd pins 1 to 9 in the left column beside the notch, even pins 2 to 10 in the right column, pin 1 at the top.</title>
    <rect x="400" y="24" width="200" height="268" rx="10" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><rect x="392" y="132" width="16" height="52" fill="#0d0f12" stroke="#8a94a3"/><text x="384" y="139" text-anchor="end" font-size="13" fill="#a9b4c2">notch</text><rect x="438" y="45" width="34" height="34" rx="5" fill="#c9a14a"/><text x="455" y="67" text-anchor="middle" font-size="14" font-weight="700" fill="#15171a">1</text><text x="250" y="67" text-anchor="end" font-size="16" fill="#ff8a65">3V3</text><path d="M262 62H431" fill="none" stroke="#59616e" stroke-width="1.5"/><rect x="528" y="45" width="34" height="34" rx="5" fill="#c9a14a"/><text x="545" y="67" text-anchor="middle" font-size="14" font-weight="700" fill="#15171a">2</text><text x="750" y="67" text-anchor="start" font-size="16" fill="#8a94a3">not used</text><path d="M569 62H738" fill="none" stroke="#59616e" stroke-width="1.5"/><rect x="438" y="93" width="34" height="34" rx="5" fill="#c9a14a"/><text x="455" y="115" text-anchor="middle" font-size="14" font-weight="700" fill="#15171a">3</text><text x="250" y="115" text-anchor="end" font-size="16" fill="#5fb3ff">X STEP</text><path d="M262 110H431" fill="none" stroke="#59616e" stroke-width="1.5"/><rect x="528" y="93" width="34" height="34" rx="5" fill="#c9a14a"/><text x="545" y="115" text-anchor="middle" font-size="14" font-weight="700" fill="#15171a">4</text><text x="750" y="115" text-anchor="start" font-size="16" fill="#5fb3ff">X DIR</text><path d="M569 110H738" fill="none" stroke="#59616e" stroke-width="1.5"/><rect x="438" y="141" width="34" height="34" rx="5" fill="#c9a14a"/><text x="455" y="163" text-anchor="middle" font-size="14" font-weight="700" fill="#15171a">5</text><text x="250" y="163" text-anchor="end" font-size="16" fill="#5fb3ff">Y STEP</text><path d="M262 158H431" fill="none" stroke="#59616e" stroke-width="1.5"/><rect x="528" y="141" width="34" height="34" rx="5" fill="#c9a14a"/><text x="545" y="163" text-anchor="middle" font-size="14" font-weight="700" fill="#15171a">6</text><text x="750" y="163" text-anchor="start" font-size="16" fill="#5fb3ff">Y DIR</text><path d="M569 158H738" fill="none" stroke="#59616e" stroke-width="1.5"/><rect x="438" y="189" width="34" height="34" rx="5" fill="#c9a14a"/><text x="455" y="211" text-anchor="middle" font-size="14" font-weight="700" fill="#15171a">7</text><text x="250" y="211" text-anchor="end" font-size="16" fill="#5fb3ff">Z STEP</text><path d="M262 206H431" fill="none" stroke="#59616e" stroke-width="1.5"/><rect x="528" y="189" width="34" height="34" rx="5" fill="#c9a14a"/><text x="545" y="211" text-anchor="middle" font-size="14" font-weight="700" fill="#15171a">8</text><text x="750" y="211" text-anchor="start" font-size="16" fill="#5fb3ff">Z DIR</text><path d="M569 206H738" fill="none" stroke="#59616e" stroke-width="1.5"/><rect x="438" y="237" width="34" height="34" rx="5" fill="#c9a14a"/><text x="455" y="259" text-anchor="middle" font-size="14" font-weight="700" fill="#15171a">9</text><text x="250" y="259" text-anchor="end" font-size="16" fill="#ffcc33">ENABLE</text><path d="M262 254H431" fill="none" stroke="#59616e" stroke-width="1.5"/><rect x="528" y="237" width="34" height="34" rx="5" fill="#c9a14a"/><text x="545" y="259" text-anchor="middle" font-size="14" font-weight="700" fill="#15171a">10</text><text x="750" y="259" text-anchor="start" font-size="16" fill="#a9b4c2">GND</text><path d="M569 254H738" fill="none" stroke="#59616e" stroke-width="1.5"/>
  </svg>
  </div>
  <figcaption>INPUT Y seen from above, in the same orientation as the board tour. CHAIN Y has the same layout. The drawing is enlarged; the real pins are 1.27&nbsp;mm apart.</figcaption>
</figure>
{:/nomarkdown}

### Motor headers: X, Y and Z

The pin names are printed beside each header. Pin 1 is **1B**, at the bottom of each header.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Pin</th><th>Printed</th><th>Coil</th><th>Driver output</th></tr></thead>
  <tbody>
    <tr><td>4 (top)</td><td>2B</td><td>Coil 2</td><td>OUT2B</td></tr>
    <tr><td>3</td><td>2A</td><td>Coil 2</td><td>OUT2A</td></tr>
    <tr><td>2</td><td>1A</td><td>Coil 1</td><td>OUT1A</td></tr>
    <tr><td>1 (bottom)</td><td>1B</td><td>Coil 1</td><td>OUT1B</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Power terminal

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Marking</th><th>Signal</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td>+ (upper screw)</td><td>Motor supply</td><td>8 to 36&nbsp;V DC. No polarity protection.</td></tr>
    <tr><td>− (lower screw)</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Common with controller ground and the four corner holes</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards"><div class="xb-card"><h3>Controller</h3><p>A Smoothieboard V2 Prime, or another controller with seven free 3.3&nbsp;V outputs.</p></div><div class="xb-card"><h3>Ribbon cable</h3><p>Ten ways, 1.27&nbsp;mm connector pitch 2×5, wired pin 1 to pin 1.</p></div><div class="xb-card"><h3>Motors</h3><p>Up to three bipolar stepper motors with four leads, with 1×4 2.54&nbsp;mm plugs.</p></div><div class="xb-card"><h3>Power supply</h3><p>DC, between 8 and 36&nbsp;V, with a fuse sized for your motors and wiring.</p></div><div class="xb-card"><h3>Fan</h3><p>A fan blowing on the underside of the board, which carries no parts. The holes form a 60&nbsp;mm square; a standard 60&nbsp;mm fan frame has holes 50&nbsp;mm apart, so check yours and use a bracket if it differs.</p></div><div class="xb-card"><h3>Tools</h3><p>A multimeter and a small insulated screwdriver for the trimmers.</p></div></div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Minimal wiring">
  <svg viewBox="0 0 1000 450" role="img" aria-labelledby="xb-a3-wire">
    <title id="xb-a3-wire">The controller connects to INPUT Y with a ten-way ribbon cable, three motors connect to the motor headers and a DC supply connects to the power terminal.</title>
    <rect x="20" y="70" width="210" height="190" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="125.0" y="96" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Smoothieboard</text><text x="125.0" y="118" text-anchor="middle" font-size="13" fill="#a9b4c2">V2 Prime</text><text x="125.0" y="136" text-anchor="middle" font-size="13" fill="#a9b4c2">header G_F</text><rect x="390" y="40" width="240" height="260" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="510.0" y="66" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Stepper driver</text><text x="510.0" y="88" text-anchor="middle" font-size="13" fill="#a9b4c2">board</text><text x="510.0" y="106" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><text x="510.0" y="124" text-anchor="middle" font-size="13" fill="#a9b4c2">INPUT Y · power</text><text x="510.0" y="142" text-anchor="middle" font-size="13" fill="#a9b4c2">MOTOR X, Y, Z</text><rect x="780" y="30" width="200" height="70" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="880.0" y="56" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Motor X</text><rect x="780" y="135" width="200" height="70" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="880.0" y="161" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Motor Y</text><rect x="780" y="240" width="200" height="70" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="880.0" y="266" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Motor Z</text><path d="M230 165H390" fill="none" stroke="#5fb3ff" stroke-width="12"/><text x="310" y="142" text-anchor="middle" font-size="13" fill="#5fb3ff">10-way ribbon cable</text><text x="310" y="194" text-anchor="middle" font-size="13" fill="#a9b4c2">pin 1 to pin 1</text><path d="M630 85C700 85 710 65 780 65" fill="none" stroke="#4be07f" stroke-width="6"/><path d="M630 170C700 170 710 170 780 170" fill="none" stroke="#4be07f" stroke-width="6"/><path d="M630 255C700 255 710 275 780 275" fill="none" stroke="#4be07f" stroke-width="6"/><text x="705" y="30" text-anchor="middle" font-size="13" fill="#4be07f">4 wires each</text><rect x="390" y="345" width="240" height="80" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="510.0" y="371" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">DC power supply</text><text x="510.0" y="393" text-anchor="middle" font-size="13" fill="#a9b4c2">8 to 36 V</text><path d="M470 345V300" fill="none" stroke="#ff6b6b" stroke-width="4"/><path d="M550 345V300" fill="none" stroke="#a9b4c2" stroke-width="4"/><text x="455" y="328" text-anchor="end" font-size="20" fill="#ff6b6b">+</text><text x="568" y="328" text-anchor="start" font-size="20" fill="#a9b4c2">−</text>
  </svg>
  </div>
  <figcaption>Minimal wiring: one ribbon cable, up to three motors and the motor supply. Add the fan under the board.</figcaption>
</figure>
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Mount the board and the fan</h3>
    <p>With all power off, mount the board on spacers with the fan underneath, blowing towards the board.</p>
  </li>
  <li class="xb-step">
    <h3>Check the microstep positions</h3>
    <p>Look at the three positions above each driver and note which are fitted. This decides <a href="#configuration">steps per millimetre</a>.</p>
    <p class="xb-expect">With all three fitted on a channel, that channel runs at 1/8 step.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the controller only</h3>
    <p>Plug the ribbon cable from G_F into INPUT Y and power the controller. Leave motor power and motors disconnected.</p>
    <p class="xb-expect">About 3.3&nbsp;V is present between pin 1 of INPUT Y and the minus screw.</p>
  </li>
  <li class="xb-step">
    <h3>Set the three currents</h3>
    <p>Follow <a href="#current">Set the current</a> for X, Y and Z.</p>
  </li>
  <li class="xb-step">
    <h3>Connect motors, then power</h3>
    <p>With everything off, plug in the motors, then connect the supply to the screw terminal, plus to plus. Add the <a href="#configuration">configuration</a>, power up and make a short slow move.</p>
    <p class="xb-expect">The motor holds firmly once enabled and moves the commanded distance.</p>
  </li>
</ol>
{:/nomarkdown}

## Set the current {#current}

Each driver limits its peak coil current to VREF&nbsp;/&nbsp;(8&nbsp;×&nbsp;0.1&nbsp;Ω), so **VREF in volts = peak current in amperes × 0.8**. VREF comes from the 3.3&nbsp;V logic supply through the trimmer, so you can set it with only the controller connected. Measure between the trimmer&rsquo;s single pad (the wiper) and the minus screw, and turn slowly while watching the meter. Take care not to touch a neighbouring pad.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Peak current you want</th><th>Set VREF to</th><th>Heat in each sense resistor</th></tr></thead>
  <tbody>
    <tr><td>0.4&nbsp;A</td><td>0.32&nbsp;V</td><td>0.02&nbsp;W</td></tr>
    <tr><td>0.6&nbsp;A</td><td>0.48&nbsp;V</td><td>0.04&nbsp;W</td></tr>
    <tr><td>0.8&nbsp;A</td><td>0.64&nbsp;V</td><td>0.06&nbsp;W</td></tr>
    <tr><td>1.0&nbsp;A</td><td>0.80&nbsp;V</td><td>0.10&nbsp;W</td></tr>
    <tr><td>1.2&nbsp;A</td><td>0.96&nbsp;V</td><td>0.14&nbsp;W</td></tr>
    <tr><td>1.4&nbsp;A</td><td>1.12&nbsp;V</td><td>0.20&nbsp;W</td></tr>
    <tr><td>1.65&nbsp;A (top of range, nominal)</td><td>1.32&nbsp;V</td><td>0.27&nbsp;W</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Motor ratings are usually given as current per phase. Start at about 70&nbsp;% of that figure, never above it, and check how warm the motor and the board get. The <a href="/images/extensions/three-channel-a5984-stepper-driver/datasheets/a5984.pdf">A5984</a> accuracy is ±5&nbsp;% at the larger microstep levels.

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Three axes on this board</td><td>Actuator, external driver</td><td><a href="#config-xyz">1</a></td></tr>
    <tr><td>An axis that turns the wrong way</td><td>Actuator <code>reversed</code></td><td><a href="#config-direction">2</a></td></tr>
    <tr><td>A different microstep setting</td><td>Actuator <code>steps_per_mm</code></td><td><a href="#config-steps">3</a></td></tr>
    <tr><td>Speed and acceleration limits per axis</td><td>Actuator</td><td><a href="#config-limits">4</a></td></tr>
    <tr><td>Only the X channel, other axes unchanged</td><td>Actuator</td><td><a href="#config-one">5</a></td></tr>
    <tr><td>Motor current set from the configuration</td><td>None</td><td>Not possible: use the trimmers</td></tr>
    <tr><td>A separate enable per motor</td><td>None</td><td>Not possible: one enable line serves all three</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

These blocks are for SmoothieV2 on a Smoothieboard V2 Prime. Merge them into your existing `config.ini`, replacing the matching lines; the motors then move off the Prime&rsquo;s own drivers and onto this board, so unplug them from the Prime. Make sure nothing else in the file uses the G_F pins.

### 1. X, Y and Z on this board {#config-xyz}

The step values assume 1/8 microstepping, 200-step motors, a 20-tooth, 2&nbsp;mm pitch belt on X and Y, and an 8&nbsp;mm lead screw on Z. The `!` on the enable pin matches the active-low input. The enable pin belongs to the first actuator, and it switches all three drivers. The longer step pulse gives margin over the driver&rsquo;s 1&nbsp;µs minimum.

```ini
[actuator]
alpha.driver = external
alpha.step_pin = PB1
alpha.dir_pin = PJ4
alpha.en_pin = PJ2!
alpha.steps_per_mm = 40

beta.driver = external
beta.step_pin = PA4
beta.dir_pin = PG0
beta.en_pin = nc
beta.steps_per_mm = 40

gamma.driver = external
gamma.step_pin = PJ3
gamma.dir_pin = PG1
gamma.en_pin = nc
gamma.steps_per_mm = 200

[system]
step_pulse_us = 2
```

After a restart, `M17` enables the motors and `M84` disables them. `M18 X` disables all three here, because they share the enable line.

### 2. Reverse an axis {#config-direction}

```ini
[actuator]
beta.reversed = true
```

### 3. Steps per millimetre for another microstep setting {#config-steps}

Steps per millimetre = motor full steps per turn × microsteps ÷ millimetres moved per turn. For a 200-step motor at 1/16 with a 40&nbsp;mm-per-turn belt drive, 200 × 16 ÷ 40 = 80.

```ini
[actuator]
alpha.steps_per_mm = 80
beta.steps_per_mm = 80
```

### 4. Limit speed and acceleration {#config-limits}

`max_rate` is in millimetres per minute and `acceleration` in millimetres per second squared. Start low and raise the values once the axis moves reliably.

```ini
[actuator]
alpha.max_rate = 6000
alpha.acceleration = 500
gamma.max_rate = 600
gamma.acceleration = 100
```

### 5. Use only the X channel {#config-one}

Y and Z keep their existing settings. Leave the unused motor headers empty.

```ini
[actuator]
alpha.driver = external
alpha.step_pin = PB1
alpha.dir_pin = PJ4
alpha.en_pin = PJ2!

[system]
step_pulse_us = 2
```

## Motors and power {#motors}

A bipolar motor has two coils. With the motor unplugged, a multimeter shows a few ohms between the two leads of one coil and an open circuit between coils. Put one coil on 1B and 1A and the other on 2A and 2B. If the motor runs backwards, use [example 2](#config-direction), or swap the two leads of one coil with power off.

A higher supply voltage helps a motor keep torque at speed, and does not raise the current set by the trimmer. Leave headroom below 36&nbsp;V: a motor being slowed or pushed by hand feeds energy back and can raise the supply voltage, and the board has no clamp.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 350" role="img" aria-labelledby="xb-a3-how">
    <title id="xb-a3-how">The controller sends step, direction and enable signals to three A5984 drivers. Each driver switches two H-bridges from the motor supply and compares the voltage on two sense resistors with the reference from its trimmer.</title>
    <rect x="20" y="90" width="190" height="110" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="115.0" y="116" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Controller</text><text x="115.0" y="138" text-anchor="middle" font-size="13" fill="#a9b4c2">STEP, DIR ×3</text><text x="115.0" y="156" text-anchor="middle" font-size="13" fill="#a9b4c2">ENABLE, 3.3 V</text><rect x="300" y="90" width="190" height="110" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="395.0" y="116" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">3 × A5984</text><text x="395.0" y="138" text-anchor="middle" font-size="13" fill="#a9b4c2">translator and</text><text x="395.0" y="156" text-anchor="middle" font-size="13" fill="#a9b4c2">current chopper</text><rect x="580" y="90" width="190" height="110" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="675.0" y="116" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">6 H-bridges</text><text x="675.0" y="138" text-anchor="middle" font-size="13" fill="#a9b4c2">two per driver</text><rect x="850" y="90" width="130" height="110" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="915.0" y="116" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Motors</text><text x="915.0" y="138" text-anchor="middle" font-size="13" fill="#a9b4c2">X, Y, Z</text><rect x="300" y="250" width="190" height="90" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="395.0" y="276" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Trimmers</text><text x="395.0" y="298" text-anchor="middle" font-size="13" fill="#a9b4c2">VREF sets the</text><text x="395.0" y="316" text-anchor="middle" font-size="13" fill="#a9b4c2">peak current</text><rect x="580" y="250" width="190" height="90" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="675.0" y="276" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Sense resistors</text><text x="675.0" y="298" text-anchor="middle" font-size="13" fill="#a9b4c2">0.1 Ω, measure</text><text x="675.0" y="316" text-anchor="middle" font-size="13" fill="#a9b4c2">coil current</text><rect x="580" y="0" width="190" height="60" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="675.0" y="26" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Motor supply</text><path d="M210 145H300" fill="none" stroke="#5fb3ff" stroke-width="3"/><path d="M490 145H580" fill="none" stroke="#5fb3ff" stroke-width="3"/><path d="M770 145H850" fill="none" stroke="#4be07f" stroke-width="5"/><path d="M395 250V200" fill="none" stroke="#ffcc33" stroke-width="3"/><path d="M675 200V250" fill="none" stroke="#a9b4c2" stroke-width="3"/><path d="M580 295H530V185H490" fill="none" stroke="#a9b4c2" stroke-width="3"/><path d="M675 60V90" fill="none" stroke="#ff6b6b" stroke-width="4"/>
  </svg>
  </div>
  <figcaption>All three channels follow the same path: logic in, motor power switched out, current measured and limited on the board.</figcaption>
</figure>
{:/nomarkdown}

Each rising edge on STEP advances the <a href="/images/extensions/three-channel-a5984-stepper-driver/datasheets/a5984.pdf">A5984</a> by one microstep; its internal translator works out the two coil currents, so the controller only sends pulses and a direction level.

The driver switches each coil on until the voltage on its sense resistor reaches the level set by VREF, then lets the current decay for a short off time and repeats. This is current chopping. On this board a 0&nbsp;&Omega; link ties each ROSC pin to ground, which selects the chip&rsquo;s adaptive decay mode with a 16&nbsp;µs off time.

All three enable pins share one line with a 10&nbsp;kΩ pull-up to 3.3&nbsp;V, so the outputs stay off until the controller drives it low.

## Microstep positions {#options}

Each driver has three 0603 positions above it, from left to right MS3, MS2 and MS1. Fit a 0&nbsp;Ω resistor or a solder bridge to make the input high; leave it open for low, since the chip has its own pull-down resistors. The parts list fits all nine, giving 1/8 step. Change them only with all power off, then update the steps per millimetre.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>MS3 (left)</th><th>MS2 (middle)</th><th>MS1 (right)</th><th>Resolution</th></tr></thead>
  <tbody>
    <tr><td>open</td><td>open</td><td>open</td><td>Full step</td></tr>
    <tr><td>open</td><td>open</td><td>fitted</td><td>Half step</td></tr>
    <tr><td>open</td><td>fitted</td><td>open</td><td>1/16</td></tr>
    <tr><td>open</td><td>fitted</td><td>fitted</td><td>1/32</td></tr>
    <tr><td>fitted</td><td>open</td><td>open</td><td>Full step (modified)</td></tr>
    <tr><td>fitted</td><td>open</td><td>fitted</td><td>Half step (modified)</td></tr>
    <tr><td>fitted</td><td>fitted</td><td>open</td><td>1/4</td></tr>
    <tr><td>fitted</td><td>fitted</td><td>fitted</td><td>1/8 (parts list)</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Chaining {#chaining}

CHAIN Y is joined to INPUT Y contact for contact, with no links to cut. This board uses all seven signal pins, so anything plugged into CHAIN Y receives the same signals: a second identical board would repeat the same three movements. Do not connect a device that needs its own pins.

{::nomarkdown}
{% include _includes/extension-chain-figure.html id="xb-a3" board="stepper driver board" in_label="INPUT Y" chain_label="CHAIN Y" lane1="pin 3, X STEP" lane2="pin 4, X DIR" lane3="pin 9, ENABLE" s1="closed" s2="closed" s3="closed" links="none" caption="Every signal is shared with whatever is connected to CHAIN Y." %}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Pin</th><th>Signal</th><th>On CHAIN Y</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>3.3&nbsp;V</td><td>Passed on</td></tr>
    <tr><td>2</td><td>5&nbsp;V</td><td>Not connected on either connector</td></tr>
    <tr><td>3 to 8</td><td>STEP and DIR for X, Y, Z</td><td>Passed on, used by this board</td></tr>
    <tr><td>9</td><td>ENABLE</td><td>Passed on, used by this board</td></tr>
    <tr><td>10</td><td>GND</td><td>Passed on</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Troubleshooting {#troubleshooting}

The board has no indicator lights. A multimeter on the power terminal and on INPUT Y is the first check.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>No motor moves or holds</td><td>Motor supply of at least 8&nbsp;V on the terminal; 3.3&nbsp;V on pin 1; pin 9 goes low after <code>M17</code>; the enable pin line ends in <code>!</code>.</td></tr>
    <tr><td>Motors are released when they should hold</td><td>Remove or add the <code>!</code> on the enable pin so that enabled means pin 9 low.</td></tr>
    <tr><td>Motor buzzes or shakes without turning</td><td>Coil wiring: each coil on its own pair (1B/1A and 2A/2B). Lower the speed and acceleration.</td></tr>
    <tr><td>Motor is weak or loses steps</td><td>VREF on that channel, then speed, acceleration and supply voltage.</td></tr>
    <tr><td>Distance is wrong by a factor of 2, 4 or 8</td><td>The microstep positions and <code>steps_per_mm</code> disagree.</td></tr>
    <tr><td>One motor stops until power is cycled</td><td>The driver latched on overcurrent. Remove motor power, look for a short between motor leads or to ground, then power up again.</td></tr>
    <tr><td>Motors pause after a while, then resume</td><td>Thermal shutdown. Check the fan and reduce the current.</td></tr>
    <tr><td>Nothing works after wiring the supply</td><td>Disconnect it and check polarity. A reversed supply can destroy the drivers and capacitors.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

{% include _includes/stepper-driver-board-comparison.html %}

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/three-channel-a5984-stepper-driver/three-channel-a5984-stepper-driver-schematic.pdf">Schematic (PDF)</a></td><td>The circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/three-channel-a5984-stepper-driver/three-channel-a5984-stepper-driver-bom.csv">Parts list (CSV)</a></td><td>Every component with its value, footprint and part number where one is chosen</td></tr>
    <tr><td><a href="/images/extensions/three-channel-a5984-stepper-driver/three-channel-a5984-stepper-driver-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side. The corner holes are connected to ground: a metal screw or spacer there ties your frame to the supply minus. The inner four are the fan holes and are not connected.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-a3-mount-t">
  <title id="xb-a3-mount-t">Mounting drawing of the three-channel A5984 stepper driver board, component side: outline 90 by 90 millimetres with 8 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="310.0" y="78.0" width="340.0" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M310.0 56H650.0"/><path d="M310.0 50V62"/><path d="M650.0 50V62"/><path d="M676.0 78.0V418.0"/><path d="M670.0 78.0h12"/><path d="M670.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">90</text>
  <text x="688.0" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">90</text>
  <circle cx="310.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="298.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M252.0 104.0h30" fill="none"/><path d="M286.0 104.0l-8 -4v8z"/><path d="M252.0 104.0v30" fill="none"/><path d="M252.0 138.0l-4 -8h8z"/></g>
  <text x="290.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="248.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="328.9" cy="96.9" r="5.7" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M319.2 96.9h19.3M328.9 87.2v19.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="323.2" y="122.6" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.00</text>
  <circle cx="631.1" cy="96.9" r="5.7" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M621.4 96.9h19.3M631.1 87.2v19.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="636.8" y="122.6" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  85.00, 5.00</text>
  <circle cx="366.7" cy="134.7" r="5.7" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M357.0 134.7h19.3M366.7 125.0v19.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="361.0" y="160.3" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  15.00, 15.00</text>
  <circle cx="593.3" cy="134.7" r="5.7" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M583.7 134.7h19.3M593.3 125.0v19.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="599.0" y="160.3" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  75.00, 15.00</text>
  <circle cx="366.7" cy="361.3" r="5.7" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M357.0 361.3h19.3M366.7 351.7v19.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="361.0" y="345.7" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">5</tspan>  15.00, 75.00</text>
  <circle cx="593.3" cy="361.3" r="5.7" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M583.7 361.3h19.3M593.3 351.7v19.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="599.0" y="345.7" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">6</tspan>  75.00, 75.00</text>
  <circle cx="328.9" cy="399.1" r="5.7" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M319.2 399.1h19.3M328.9 389.4v19.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="323.2" y="383.4" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">7</tspan>  5.00, 85.00</text>
  <circle cx="631.1" cy="399.1" r="5.7" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M621.4 399.1h19.3M631.1 389.4v19.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="636.8" y="383.4" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">8</tspan>  85.00, 85.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 90 × 90&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>5.00</td><td>3&nbsp;mm, plated, connected to GND</td><td>Board mounting</td></tr>
    <tr><td>2</td><td>85.00</td><td>5.00</td><td>3&nbsp;mm, plated, connected to GND</td><td>Board mounting</td></tr>
    <tr><td>3</td><td>15.00</td><td>15.00</td><td>3&nbsp;mm, not plated</td><td>Fan</td></tr>
    <tr><td>4</td><td>75.00</td><td>15.00</td><td>3&nbsp;mm, not plated</td><td>Fan</td></tr>
    <tr><td>5</td><td>15.00</td><td>75.00</td><td>3&nbsp;mm, not plated</td><td>Fan</td></tr>
    <tr><td>6</td><td>75.00</td><td>75.00</td><td>3&nbsp;mm, not plated</td><td>Fan</td></tr>
    <tr><td>7</td><td>5.00</td><td>85.00</td><td>3&nbsp;mm, plated, connected to GND</td><td>Board mounting</td></tr>
    <tr><td>8</td><td>85.00</td><td>85.00</td><td>3&nbsp;mm, plated, connected to GND</td><td>Board mounting</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

The last column gives the basis for each figure. Datasheet values are for the driver chip at 25&nbsp;°C unless stated.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Motor supply</td><td>Power terminal</td><td>8&nbsp;V</td><td>24&nbsp;V (example)</td><td>36&nbsp;V</td><td>Board limit; the chip operates from 8 to 40&nbsp;V</td></tr>
    <tr><td>Undervoltage lockout, rising</td><td>Each driver</td><td>6.3&nbsp;V</td><td>—</td><td>6.85&nbsp;V</td><td>Datasheet</td></tr>
    <tr><td>Logic supply</td><td>Pin 1</td><td>—</td><td>3.3&nbsp;V</td><td>—</td><td>Design value</td></tr>
    <tr><td>Logic supply current</td><td>Pin 1</td><td>—</td><td>under 1&nbsp;mA</td><td>—</td><td>Calculated: trimmers, microstep links and enable pull-up</td></tr>
    <tr><td>Logic input high</td><td>STEP, DIR, ENABLE</td><td>2.0&nbsp;V</td><td>—</td><td>—</td><td>Datasheet</td></tr>
    <tr><td>Logic input low</td><td>STEP, DIR, ENABLE</td><td>—</td><td>—</td><td>0.8&nbsp;V</td><td>Datasheet</td></tr>
    <tr><td>Step pulse, high and low</td><td>STEP</td><td>1&nbsp;µs</td><td>—</td><td>—</td><td>Datasheet</td></tr>
    <tr><td>Direction setup and hold</td><td>DIR</td><td>—</td><td>400&nbsp;ns</td><td>—</td><td>Datasheet, typical</td></tr>
    <tr><td>VREF</td><td>Each trimmer</td><td>0&nbsp;V</td><td>—</td><td>1.32&nbsp;V</td><td>Simulated with nominal parts</td></tr>
    <tr><td>Peak current setting, top of trimmer</td><td>Each motor</td><td>—</td><td>1.65&nbsp;A</td><td>1.96&nbsp;A</td><td>Simulated; upper value with all tolerances at their worst. A setting, not a continuous rating.</td></tr>
    <tr><td>Output on-resistance, high plus low side</td><td>Each coil</td><td>—</td><td>0.64&nbsp;&Omega;</td><td>0.86&nbsp;&Omega;</td><td>Datasheet, at 2&nbsp;A</td></tr>
    <tr><td>Conduction heat per driver at 1.0 / 1.65&nbsp;A peak</td><td>Each driver</td><td>—</td><td>0.64 / 1.7&nbsp;W</td><td>—</td><td>Calculated for sine microstepping with typical on-resistance; switching losses extra</td></tr>
    <tr><td>Driver supply current</td><td>Each driver</td><td>—</td><td>7.5&nbsp;mA</td><td>10&nbsp;mA</td><td>Datasheet, chopping below 50&nbsp;kHz, motor current excluded</td></tr>
    <tr><td>Fixed off time</td><td>Each driver</td><td>13&nbsp;µs</td><td>16&nbsp;µs</td><td>19&nbsp;µs</td><td>Datasheet, ROSC to ground</td></tr>
    <tr><td>Overcurrent trip</td><td>Each output</td><td>2.6&nbsp;A</td><td>—</td><td>—</td><td>Datasheet minimum; latches off</td></tr>
    <tr><td>Thermal shutdown</td><td>Each driver</td><td>—</td><td>165&nbsp;°C</td><td>—</td><td>Datasheet, junction temperature; 20&nbsp;°C hysteresis</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Component stress limits

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Part</th><th>Limit</th><th>Use on this board</th></tr></thead>
  <tbody>
    <tr><td>Driver supply and outputs</td><td>40&nbsp;V absolute maximum</td><td>At most 36&nbsp;V supply, leaving 4&nbsp;V for transients</td></tr>
    <tr><td>Driver output current</td><td>±2&nbsp;A absolute maximum</td><td>Setting up to 1.96&nbsp;A at the worst corner</td></tr>
    <tr><td>Sense pins</td><td>±0.5&nbsp;V absolute maximum</td><td>0.20&nbsp;V at the worst corner (simulated)</td></tr>
    <tr><td>Sense resistors, 0.1&nbsp;&Omega;, 1&nbsp;W</td><td>1&nbsp;W</td><td>0.27&nbsp;W at 1.65&nbsp;A (calculated with continuous peak current)</td></tr>
    <tr><td>Supply capacitors, 47&nbsp;µF</td><td>63&nbsp;V</td><td>36&nbsp;V maximum supply</td></tr>
    <tr><td>100&nbsp;nF capacitors</td><td>100&nbsp;V</td><td>36&nbsp;V maximum supply</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: simulation {#simulation}

The current-setting divider of one channel (3.3&nbsp;V, 75&nbsp;k&Omega;, 50&nbsp;k&Omega; trimmer) was solved with ngspice, and the datasheet relation applied to the result. The sweep moves the trimmer across its travel. The corner run combines 3.3&nbsp;V ±3&nbsp;%, resistors ±1&nbsp;% and the trimmer&rsquo;s end-to-end value ±25&nbsp;%.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Peak current against trimmer position">
  <svg viewBox="0 0 1000 395" role="img" aria-labelledby="xb-a3-plot">
    <title id="xb-a3-plot">Simulated peak coil current rises linearly with the trimmer position from zero to 1.65 amperes; the worst tolerance corner at maximum is 1.96 amperes.</title>
    <path d="M110 330H890" fill="none" stroke="#3a414c" stroke-width="1.5"/><text x="98" y="335" text-anchor="end" font-size="13" fill="#a9b4c2">0 A</text><path d="M110 260.0H890" fill="none" stroke="#3a414c" stroke-width="1.5"/><text x="98" y="265.0" text-anchor="end" font-size="13" fill="#a9b4c2">0.5 A</text><path d="M110 190.0H890" fill="none" stroke="#3a414c" stroke-width="1.5"/><text x="98" y="195.0" text-anchor="end" font-size="13" fill="#a9b4c2">1 A</text><path d="M110 120.0H890" fill="none" stroke="#3a414c" stroke-width="1.5"/><text x="98" y="125.0" text-anchor="end" font-size="13" fill="#a9b4c2">1.5 A</text><path d="M110 50.0H890" fill="none" stroke="#ff6b6b" stroke-width="1.5"/><text x="98" y="55.0" text-anchor="end" font-size="13" fill="#a9b4c2">2 A</text><text x="890" y="42" text-anchor="end" font-size="13" fill="#ff6b6b">chip absolute maximum, 2 A</text><text x="110" y="355" text-anchor="middle" font-size="13" fill="#a9b4c2">minimum</text><text x="305.0" y="355" text-anchor="middle" font-size="13" fill="#a9b4c2">¼</text><text x="500.0" y="355" text-anchor="middle" font-size="13" fill="#a9b4c2">half</text><text x="695.0" y="355" text-anchor="middle" font-size="13" fill="#a9b4c2">¾</text><text x="890" y="355" text-anchor="middle" font-size="13" fill="#a9b4c2">maximum</text><text x="500" y="380" text-anchor="middle" font-size="13" fill="#a9b4c2">trimmer position (fraction of its electrical travel)</text><path d="M110 330.0 L305.0 272.2 L500.0 214.5 L695.0 156.8 L890.0 99.0" fill="none" stroke="#5fb3ff" stroke-width="3.5"/><circle cx="305.0" cy="272.2" r="5" fill="#5fb3ff"/><text x="297.0" y="260.25" text-anchor="end" font-size="13" fill="#e6ebf2">0.41 A</text><circle cx="500.0" cy="214.5" r="5" fill="#5fb3ff"/><text x="492.0" y="202.5" text-anchor="end" font-size="13" fill="#e6ebf2">0.82 A</text><circle cx="695.0" cy="156.8" r="5" fill="#5fb3ff"/><text x="687.0" y="144.75000000000003" text-anchor="end" font-size="13" fill="#e6ebf2">1.24 A</text><circle cx="890.0" cy="99.0" r="5" fill="#5fb3ff"/><text x="882.0" y="87.0" text-anchor="end" font-size="13" fill="#e6ebf2">1.65 A</text><circle cx="890" cy="55.4" r="6" fill="#ffcc33"/><text x="878" y="61.39618686868687" text-anchor="end" font-size="13" fill="#ffcc33">worst-case tolerances 1.96 A</text>
  </svg>
  </div>
  <figcaption>Simulated peak current of one channel against trimmer position. Blue: nominal parts. Yellow: all tolerances at their worst at the top of the range.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Result</th><th>Simulated value</th><th>Limit</th><th>Outcome</th></tr></thead>
  <tbody>
    <tr><td>Largest peak current, nominal parts</td><td>1.65&nbsp;A</td><td>2&nbsp;A absolute maximum</td><td>Within</td></tr>
    <tr><td>Largest peak current, worst corner</td><td>1.96&nbsp;A</td><td>2&nbsp;A absolute maximum</td><td>Within, with 2&nbsp;% margin</td></tr>
    <tr><td>Sense voltage, worst corner</td><td>0.198&nbsp;V</td><td>0.5&nbsp;V</td><td>Within</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The corner result does not include the driver&rsquo;s own current-accuracy error. Motor current waveforms, supply transients, heating and signal integrity were not simulated, because no usable simulation model of the driver was available and thermal results depend on the fan and mounting.

## Appendix: datasheet {#datasheets}

The first page of the driver chip&rsquo;s datasheet. Click the page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/three-channel-a5984-stepper-driver/datasheets/a5984.pdf"><img src="/images/extensions/three-channel-a5984-stepper-driver/datasheets/a5984-page1.png" alt="First page of the A5984 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/three-channel-a5984-stepper-driver/datasheets/a5984.pdf">A5984 DMOS microstepping driver with translator and overcurrent protection</a> — Allegro MicroSystems, 28 pages.</figcaption>
</figure>
{:/nomarkdown}

## Appendix: historical page {#historical}

The [historical page for the three-channel A5984 stepper driver](/extensions/historical-a5984-stepper-driver) describes the original design files.

See all boards on the [extension boards](/extension-boards) page.
