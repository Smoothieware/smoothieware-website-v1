---
layout: default
title: "Laser diode driver breakout"
description: "A constant-current driver study for one 445 nm laser diode, with hardware permission logic: pinout, permission rules, limits and what is not established."
permalink: /extensions/laser-diode-driver-breakout
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Laser</p>
    <h1 id="laser-diode-driver-breakout">Laser diode driver breakout</h1>
    <p class="xb-lead">A constant-current driver for one 445&nbsp;nm laser diode (ams OSRAM PLPT5 447KA), with hardware logic that only lets the PWM request through when the arm request, a closed loop, the temperature window and the local supply all agree. It is a study to be tried on a dummy load first. It is not a laser controller you can use.</p>
    <p class="xb-badge">Dummy-load-first design · revision v44 · not for fabrication</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Before you start</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">Permission logic</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/laser-diode-driver-breakout/laser-diode-driver-breakout-diagram.png" alt="Top view of the laser diode driver breakout: two Gadgeteer sockets at the left, a green two-screw terminal at the top and a black six-contact laser head connector at the right.">
    <figcaption>Top view, drawn from the board&rsquo;s design files (revision v44). This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>0.849 A</b><span>nominal current command from the regulator&rsquo;s divider. Not a measured current.</span></div>
  <div class="xb-stat"><b>9 to 15 V</b><span>regulated, current-limited supply, nominal 12&nbsp;V</span></div>
  <div class="xb-stat"><b>445 nm</b><span>one PLPT5 447KA diode. No optical power is claimed.</span></div>
  <div class="xb-stat"><b>Permission</b><span>arm, loop, temperature and supply logic in hardware</span></div>
  <div class="xb-stat"><b>Dummy load</b><span>the board is marked &ldquo;DUMMY LOAD ONLY&rdquo;</span></div>
  <div class="xb-stat"><b>80 × 60</b><span>millimetres, four M3 mounting holes</span></div>
</div>

<nav class="xb-nav" aria-label="On this page">
  <a href="#specs">Tech specs</a>
  <a href="#tour">Board tour</a>
  <a href="#pinout">Pinout</a>
  <a href="#what-you-need">What you need</a>
  <a href="#get-started">Before you start</a>
  <a href="#configuration">Configuration</a>
  <a href="#how-it-works">How it works</a>
  <a href="#troubleshooting">Troubleshooting</a>
  <a href="#downloads">Downloads</a>
  <a href="#mounting">Mounting</a>
  <a href="#electrical">Electrical</a>
</nav>
{:/nomarkdown}

<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>Do not fabricate this board and do not connect a real laser diode.</strong> The board is printed &ldquo;NOT FOR FABRICATION &mdash; DUMMY LOAD ONLY&rdquo; and its head connector is marked LASER_HEAD_DUMMY_ONLY. A 445&nbsp;nm laser diode can injure eyes and skin and start fires. Nothing on this page is a laser-safety statement, a safety interlock or an operating procedure.
</sl-alert>

<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="lightning-charge"></sl-icon>
  <strong>Do not power the board yet: a supply-path question is open.</strong> The design routes the supply through an electronic fuse and then diode D2 (a B340A). The design review records that the drawn footprint puts the diode&rsquo;s cathode band on the fuse side, which, with the manufacturer&rsquo;s band convention, would block the intended supply direction. The schematic does not settle the diode&rsquo;s orientation. Until this is resolved, do not apply power, even with a dummy load.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>A fixed-current, PWM-gated driver prototype for one ams OSRAM PLPT5 447KA (Q65113A0154) 445&nbsp;nm laser diode, to be tried on a dummy load first. The old request for a 2.5&nbsp;W laser is an aspiration, not a rating.</td></tr>
    <tr><td>Regulator</td><td>Analog Devices LT3474 (not the LT3474-1), set to about 0.849&nbsp;A by a 1.78&nbsp;k&Omega; and 10&nbsp;k&Omega; divider on its reference</td></tr>
    <tr><td>Input</td><td>Regulated, current-limited 9 to 15&nbsp;V DC, nominal 12&nbsp;V, through a two-screw terminal. Bench source only: automotive, inductive, long-cable, hot-plug and industrial surge environments are outside this revision.</td></tr>
    <tr><td>Permission</td><td>Arm AND closed loop AND temperature not hot AND temperature not cold or open AND local rail ready. The PWM request passes only when permission is true.</td></tr>
    <tr><td>PWM request</td><td>60&nbsp;Hz to 10&nbsp;kHz, with high pulses of at least 40&nbsp;&micro;s</td></tr>
    <tr><td>Temperature sensing</td><td>A Semitec 103AT-2 10&nbsp;k&Omega; thermistor thermally bonded to the laser mount, read by a TLV7012 window comparator</td></tr>
    <tr><td>Supply protection</td><td>A TPS26600 electronic fuse with three red, amber and red fault lights, each with a cut link. These parts are on the board but are not drawn in the top view.</td></tr>
    <tr><td>Controller sockets</td><td>Two 10-contact Gadgeteer sockets, Y IN and Y CHAIN (Samtec SHF-105, 1.27&nbsp;mm)</td></tr>
    <tr><td>Laser head connector</td><td>Molex Micro-Fit 3.0, 6 contacts (43045-0600), mating housing 43025-0600. Not first-mate, last-break and not for hot-plugging.</td></tr>
    <tr><td>Size</td><td>80 &times; 60&nbsp;mm with four M3 mounting holes and two cable-tie holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a>. No configuration is supplied; see below.</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its limits and its basis is in the [electrical specifications](#electrical) appendix; the hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side. The electronic fuse, the three fault lights and the solder links are on the board but are not drawn in this view.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/laser-diode-driver-breakout/laser-diode-driver-breakout-diagram.png" alt="Top view of the laser diode driver breakout with twelve numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:7%;top:33.9%" aria-label="1: host socket">1<span class="xb-pop"><b>Gadgeteer socket Y IN (J1)</b> — the 10-contact socket that connects to the controller. Contact 3 is the arm request, 6 the permission output and 7 the PWM request. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pl" href="#tour-2" style="left:7%;top:66.1%" aria-label="2: chain socket">2<span class="xb-pop"><b>Gadgeteer socket Y CHAIN (J2)</b> — a second socket that passes contacts on to another board through zero-ohm links. The links for the arm, permission and PWM contacts are open as delivered.</span></a>
      <a class="xb-mk xb-pb" href="#tour-3" style="left:48%;top:10.5%" aria-label="3: supply terminal">3<span class="xb-pop"><b>Supply terminal (J3)</b> — a two-screw terminal for the 9 to 15&nbsp;V supply: the left screw is +, the right screw is ground. Keep the supply within that range; see the electrical specifications.</span></a>
      <a class="xb-mk xb-pr" href="#tour-4" style="left:90.4%;top:54%" aria-label="4: laser head connector">4<span class="xb-pop"><b>Laser head connector (J4)</b> — a Molex Micro-Fit 6-contact connector marked LASER_HEAD_DUMMY_ONLY. The outer column is contacts 1, 2, 3 from top to bottom (anode, cathode, thermistor); the inner column is 4, 5, 6 (ground, loop drive, loop return). <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:74.6%;top:33.5%" aria-label="5: current regulator">5<span class="xb-pop"><b>Constant-current regulator (U1)</b> — an LT3474 LED driver chip set to a nominal 0.849&nbsp;A. Its PWM input takes the permitted request.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-6" style="left:83%;top:33.5%" aria-label="6: inductor">6<span class="xb-pop"><b>Inductor (L1)</b> — the 10&nbsp;&micro;H inductor of the regulator&rsquo;s switching stage.</span></a>
      <a class="xb-mk xb-pr" href="#tour-7" style="left:76.5%;top:53.5%" aria-label="7: cathode switch">7<span class="xb-pop"><b>Cathode switch (Q1)</b> — an AO3400A MOSFET in the laser&rsquo;s return path. It is off unless permission is given, so the laser cathode is not permanently grounded.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:44.5%;top:41.5%" aria-label="8: permission logic">8<span class="xb-pop"><b>Permission logic (U5 to U9)</b> — five SN74LVC1G97 gates in a row. They combine the arm request, the loop check, the two temperature checks and the supervisor, then pass the PWM request only when all agree.</span></a>
      <a class="xb-mk" href="#tour-9" style="left:32.8%;top:73.3%" aria-label="9: temperature comparator">9<span class="xb-pop"><b>Temperature comparator (U4)</b> — a TLV7012 dual comparator. One half trips at a calculated 54.3&nbsp;&deg;C and the other at &minus;7.1&nbsp;&deg;C (or an open or short thermistor), removing permission.</span></a>
      <a class="xb-mk xb-pb" href="#tour-10" style="left:40.8%;top:24.2%" aria-label="10: supply diode">10<span class="xb-pop"><b>Supply diode (D2)</b> — a B340A diode in the supply path after the electronic fuse. <i>The design review records a question about its orientation; see the warning above.</i></span></a>
      <a class="xb-mk xb-pb" href="#tour-11" style="left:58.5%;top:24.2%" aria-label="11: rail supervisor">11<span class="xb-pop"><b>Rail supervisor (U3)</b> — a TLV810 voltage supervisor. While the local 3.3&nbsp;V rail is not ready it clamps the PWM node low through a small MOSFET.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-12" style="left:7.3%;top:6.3%" aria-label="12: cable-tie holes">12<span class="xb-pop"><b>Cable-tie holes</b> — two holes for a cable tie that holds the supply and head cables in place.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Gadgeteer socket Y IN (J1)</b> — the 10-contact socket that connects to the controller. Contact 3 is the arm request, 6 the permission output and 7 the PWM request. <i>See the pinout.</i></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Gadgeteer socket Y CHAIN (J2)</b> — a second socket that passes contacts on to another board through zero-ohm links. The links for the arm, permission and PWM contacts are open as delivered.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Supply terminal (J3)</b> — a two-screw terminal for the 9 to 15&nbsp;V supply: the left screw is +, the right screw is ground. Keep the supply within that range; see the electrical specifications.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Laser head connector (J4)</b> — a Molex Micro-Fit 6-contact connector marked LASER_HEAD_DUMMY_ONLY. The outer column is contacts 1, 2, 3 from top to bottom (anode, cathode, thermistor); the inner column is 4, 5, 6 (ground, loop drive, loop return). <i>See the pinout.</i></div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Constant-current regulator (U1)</b> — an LT3474 LED driver chip set to a nominal 0.849&nbsp;A. Its PWM input takes the permitted request.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Inductor (L1)</b> — the 10&nbsp;&micro;H inductor of the regulator&rsquo;s switching stage.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Cathode switch (Q1)</b> — an AO3400A MOSFET in the laser&rsquo;s return path. It is off unless permission is given, so the laser cathode is not permanently grounded.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Permission logic (U5 to U9)</b> — five SN74LVC1G97 gates in a row. They combine the arm request, the loop check, the two temperature checks and the supervisor, then pass the PWM request only when all agree.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Temperature comparator (U4)</b> — a TLV7012 dual comparator. One half trips at a calculated 54.3&nbsp;&deg;C and the other at &minus;7.1&nbsp;&deg;C (or an open or short thermistor), removing permission.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Supply diode (D2)</b> — a B340A diode in the supply path after the electronic fuse. <i>The design review records a question about its orientation; see the warning above.</i></div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Rail supervisor (U3)</b> — a TLV810 voltage supervisor. While the local 3.3&nbsp;V rail is not ready it clamps the PWM node low through a small MOSFET.</div></li>
    <li id="tour-12"><span class="xb-n">12</span><div><b>Cable-tie holes</b> — two holes for a cable tie that holds the supply and head cables in place.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1: Gadgeteer socket Y IN

A 2 &times; 5 socket at the left of the board. Contact 1 is at the lower left of the socket in the tour, contact 2 directly above it, contact 3 to the right of 1, and so on, so odd contacts are in the lower row.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Function</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Host 3.3&nbsp;V. Used as the pull-up of the permission output.</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Not used by the board</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">ARM</span></td><td>Input, active high. No resistor on the board holds it low when nothing drives it.</td></tr>
    <tr><td>4, 5</td><td>—</td><td>Not connected</td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">PERMIT_N</span></td><td>Output, active low: an open-drain transistor with a 10&nbsp;k&Omega; pull-up to 3.3&nbsp;V. Low means permission is given. It does not show current, load continuity or light. Do not drive it from a push-pull output.</td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-sig">PWM_REQUEST</span></td><td>Input, active high. No resistor on the board holds it low when nothing drives it.</td></tr>
    <tr><td>8, 9</td><td>—</td><td>Not connected</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Ground</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  The board&rsquo;s own specification lists local 10&nbsp;k&Omega; pull-downs on ARM and PWM_REQUEST, but the v44 board file has no resistor on either net. A disconnected host contact must therefore not be taken as low. The board file is what this page follows.
</sl-alert>

### J2: Gadgeteer socket Y CHAIN

Ten contacts that mirror J1 through zero-ohm links, so another board can sit behind this one. The links for contacts 3, 6 and 7 (arm, permission and PWM) are open as delivered; the others are fitted.

### J3: supply

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Function</th></tr></thead>
  <tbody>
    <tr><td>1 (left screw)</td><td><span class="xb-pill xb-p-sig">+9 to 15 V</span></td></tr>
    <tr><td>2 (right screw)</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J4: laser head (dummy load only)

The outer column, nearest the board edge, is contacts 1 to 3 from top to bottom in the tour; the inner column is contacts 4 to 6.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Net</th><th>Meaning</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-sig">LD_ANODE</span></td><td>Regulated positive load connection</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-sig">LD_CATHODE</span></td><td>Switched cathode. Never treat it as a permanent ground.</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">NTC_SENSE</span></td><td>Thermistor lead</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Thermistor return</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">LOOP_DRIVE</span></td><td>Current-limited feed of the normally-closed loop</td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">LOOP_RETURN</span></td><td>Loop return. The loop must be closed for permission.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The laser&rsquo;s isolated case pin stays isolated in the head. Wire colour is not evidence of polarity: check each contact with a meter against this table.

### Fault lights and links

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Name</th><th>What it is</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>D80 with JP80</td><td>Red light for an electronic-fuse fault; the link cuts the light only</td><td>Closed</td></tr>
    <tr><td>D85 with JP81</td><td>Amber light for an over-voltage condition; the link cuts the light only</td><td>Closed</td></tr>
    <tr><td>D88 with JP82</td><td>Red blinking light for reversed supply; the link cuts the light only</td><td>Closed</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

This board is not for building. If you study it, you would need:

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>A dummy load</b><span>Never a real laser diode on this revision.</span></div>
  <div class="xb-card"><b>A bench supply</b><span>Regulated, current-limited, 9 to 15&nbsp;V.</span></div>
  <div class="xb-card"><b>Measuring equipment</b><span>To check current, ripple and the temperature trip points, none of which has been measured.</span></div>
  <div class="xb-card"><b>An answer to the D2 question</b><span>The diode orientation must be settled before any power.</span></div>
</div>
{:/nomarkdown}

## Before you start {#get-started}

There is no wiring recipe for this board, because it must not be energized in its present state. In order:

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Do not build or power it</h3>
    <p>The board is marked not for fabrication. Do not connect a laser diode to J4.</p>
  </li>
  <li class="xb-step">
    <h3>Settle the supply diode</h3>
    <p>Resolve the orientation of D2 against the supply direction, and confirm the electronic fuse and diode path with the board&rsquo;s own review. Only then could a dummy-load test be considered.</p>
  </li>
  <li class="xb-step">
    <h3>Read the permission rules</h3>
    <p>Understand <a href="#how-it-works">how permission is formed</a> and that the controller&rsquo;s request is not the permission.</p>
  </li>
  <li class="xb-step">
    <h3>Test on a dummy load first</h3>
    <p>If you continue, use a dummy load and measure the current, the ripple, the thermistor trip points and the behaviour of every permission input before any further step.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Fire or PWM-drive a laser through this board</td><td>None established</td><td>None supplied</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

**No configuration is supplied for this board.** The generic Switch, Endstops and Laser modules do not establish how to use this board&rsquo;s arm, permission, temperature and loop contract. Before an example could be written, a firmware integration would have to define the PWM request input, the allowed pulse and frequency range, the direction and meaning of the permission signal, the reset state and the fault latch, and bind each to real pins.

Two points from the review of the firmware source (SmoothieV2 revision 2a21c0108b1d095ecd8b2b9358e94055f053c003):

- The PWM request is not the permission. The arm contact and the permission output are not software enables to be swapped for one another.
- In that revision the laser command handler clears a timed manual-fire duration before its status branch, so a status query during a timed request can remove the timed shutdown. `fire off` returns to automatic control and is not a hardware disarm.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Permission logic">
  <svg viewBox="0 0 1000 300" role="img" aria-labelledby="xb-how-t">
    <title id="xb-how-t">The arm request, the closed loop, the temperature checks and the rail supervisor combine into permission. Permission and the PWM request together drive the regulator&rsquo;s PWM input and the cathode switch.</title>
    <g font-size="13" font-weight="700" text-anchor="middle" fill="#e6ebf2">
      <rect x="20" y="20" width="170" height="50" rx="8" fill="#1f2226" stroke="#dfe4ee"/><text x="105" y="50">ARM (J1 contact 3)</text>
      <rect x="20" y="85" width="170" height="50" rx="8" fill="#212936" stroke="#e0a877"/><text x="105" y="115">Loop closed (J4)</text>
      <rect x="20" y="150" width="170" height="50" rx="8" fill="#212936" stroke="#e0a877"/><text x="105" y="180">Not too hot (J4)</text>
      <rect x="20" y="215" width="170" height="50" rx="8" fill="#212936" stroke="#e0a877"/><text x="105" y="245">Not cold or open (J4)</text>
      <rect x="310" y="85" width="190" height="80" rx="8" fill="#212936" stroke="#6fe08a"/><text x="405" y="120">PERMIT</text><text x="405" y="140" font-weight="400" fill="#a9b4c2">all five agree</text>
      <rect x="310" y="215" width="190" height="50" rx="8" fill="#212936" stroke="#5fb3ff"/><text x="405" y="245">Rail ready (U3)</text>
      <rect x="610" y="20" width="170" height="50" rx="8" fill="#1f2226" stroke="#dfe4ee"/><text x="695" y="50">PWM_REQUEST (J1.7)</text>
      <rect x="610" y="100" width="170" height="70" rx="8" fill="#212936" stroke="#6fe08a"/><text x="695" y="130">PWM_SAFE</text><text x="695" y="150" font-weight="400" fill="#a9b4c2">request AND permit</text>
      <rect x="840" y="60" width="140" height="50" rx="8" fill="#212936" stroke="#5fb3ff"/><text x="910" y="90">Regulator PWM</text>
      <rect x="840" y="130" width="140" height="50" rx="8" fill="#212936" stroke="#5fb3ff"/><text x="910" y="160">Cathode switch</text>
    </g>
    <g stroke-width="3" fill="none" stroke="#a9b4c2"><path d="M190 45H250V125H310"/><path d="M190 110H310"/><path d="M190 175H250V140H310"/><path d="M190 240H250V150H310"/><path d="M405 215V165"/><path d="M500 125H610"/><path d="M695 70V100"/><path d="M780 135H810V85H840"/><path d="M780 140H810V155H840"/></g>
  </svg>
  </div>
  <figcaption>How permission is formed and where it acts.</figcaption>
</figure>
{:/nomarkdown}

Permission is true only when the arm request is high, the loop is closed, the thermistor reading is inside its window and the local rail is ready. The PWM request passes to the regulator&rsquo;s PWM input and to the cathode switch only then, through 100&nbsp;&Omega; resistors from a node called PWM_SAFE. That node has a 10&nbsp;k&Omega; pull-down, and a small MOSFET driven by the supervisor clamps it low while the local rail is not ready. Permission is removed by forcing the regulator&rsquo;s PWM low and opening the cathode switch at the same time. The regulator&rsquo;s shutdown pin is not the interlock: a divider from the supply keeps it supply-derived.

The thermistor sits in a divider from 3.3&nbsp;V. A window comparator trips the hot side at a calculated 54.3&nbsp;&deg;C and the cold or open side at &minus;7.1&nbsp;&deg;C. An open thermistor reads cold and a shorted one reads hot, so both remove permission. Calculated with the part and supply tolerances the hot edge lies between about 52.4 and 56.2&nbsp;&deg;C and the cold edge between &minus;8.7 and &minus;5.6&nbsp;&deg;C. These are calculations, not measurements.

The regulator holds the current near a fixed command and the cathode is switched, so the cathode is not a ground. If the diode opens, the regulator&rsquo;s output can charge; the design notes call for power-down and a measured discharge before reconnecting.

Two simultaneous independent faults, or a shorted cathode switch, are not claimed to be handled.

## Troubleshooting {#troubleshooting}

This board is not for building, so there is no list of symptoms from a running board. The red, amber and red fault lights near the supply input (an electronic-fuse fault, over-voltage and reversed supply) are not drawn in the tour; each has a cut link.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-red"></span>Red (D80)</th><th><span class="xb-led xb-led-amber"></span>Amber (D85)</th><th><span class="xb-led xb-led-red"></span>Red blinking (D88)</th></tr></thead>
  <tbody>
    <tr><td>Where</td><td>Top of the board, near the supply terminal. Not drawn in the tour.</td><td>Top right. Not drawn in the tour.</td><td>Upper left of the middle. Not drawn in the tour.</td></tr>
    <tr><td>Lit means</td><td>Electronic-fuse fault</td><td>Over-voltage</td><td>Reversed supply</td></tr>
    <tr><td>Disable it</td><td>Cut link JP80</td><td>Cut link JP81</td><td>Cut link JP82</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>Revision</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/laser-diode-driver-breakout/laser-diode-driver-breakout-schematic.pdf">Schematic (PDF)</a></td><td>v44</td><td>The complete circuit diagram. Its title block still reads v37.</td></tr>
    <tr><td><a href="/images/extensions/laser-diode-driver-breakout/laser-diode-driver-breakout-bom.csv">Parts list (CSV)</a></td><td>v44</td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/laser-diode-driver-breakout/laser-diode-driver-breakout-diagram.png">Board drawing (SVG)</a></td><td>v44</td><td>The top view used on this page, at full resolution</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the corner marked 0, 0 with the board seen from the component side. The laser head connector overhangs the right edge.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-ldd-mount-t">
  <title id="xb-ldd-mount-t">Mounting drawing of the laser diode driver breakout, component side: outline 80 by 60 millimetres with 4 mounting holes and 2 cable-tie holes. Hole positions are listed in the table below.</title>
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

Every figure below is a design value, a value calculated from the design or a value from a part number, as the last column says. None is a measurement on a built board. A dash means the figure does not apply. **Open** means it has not been established yet.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Supply voltage</td><td>J3</td><td>9 V</td><td>12 V</td><td>15 V</td><td>Design envelope for a regulated, current-limited bench source; surge and inductive environments excluded</td></tr>
    <tr><td>Laser current command</td><td>LD_ANODE to LD_CATHODE</td><td>0.80 A</td><td>0.849 A</td><td>0.90 A</td><td>Nominal from the LT3474 reference divider; the range is a qualification criterion, not a measured result</td></tr>
    <tr><td>Instantaneous current</td><td>Laser path</td><td>—</td><td>—</td><td>1.00 A</td><td>Qualification criterion; not measured</td></tr>
    <tr><td>Output ripple</td><td>Laser current, steady on</td><td>—</td><td>—</td><td>50 mA peak to peak</td><td>Qualification criterion; not measured</td></tr>
    <tr><td>PWM request frequency</td><td>J1 contact 7</td><td>60 Hz</td><td>—</td><td>10 kHz</td><td>Contract of the design; pulses at least 40&nbsp;&micro;s high</td></tr>
    <tr><td>Hot trip</td><td>Thermistor window</td><td>52.4 &deg;C</td><td>54.3 &deg;C</td><td>56.2 &deg;C</td><td>Calculated from 28.0&nbsp;k&Omega; and 10.0&nbsp;k&Omega; at 0.1&nbsp;% with the 103AT-2 (B25/85 3435&nbsp;K) and comparator offsets; bench measurement required</td></tr>
    <tr><td>Cold or open trip</td><td>Thermistor window</td><td>&minus;8.7 &deg;C</td><td>&minus;7.1 &deg;C</td><td>&minus;5.6 &deg;C</td><td>Calculated from 10.0&nbsp;k&Omega; and 40.2&nbsp;k&Omega; at 0.1&nbsp;%; bench measurement required</td></tr>
    <tr><td>Permission output</td><td>J1 contact 6</td><td>—</td><td>Open drain, low = permitted</td><td>—</td><td>10&nbsp;k&Omega; pull-up to host 3.3&nbsp;V</td></tr>
    <tr><td>Start-up and reset behaviour</td><td>PWM node, cathode switch</td><td>—</td><td>Held low by pull-downs and the supervisor clamp</td><td>—</td><td>Design intent; not tested</td></tr>
    <tr><td>Optical power, wavelength drift, lifetime</td><td>Laser diode</td><td>Open</td><td>Open</td><td>Open</td><td>No claim is made</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Component stress limits

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Circuit</th><th>Pin or device stress</th><th>Absolute limit</th></tr></thead>
  <tbody>
    <tr><td>Laser diode</td><td>Current and temperature</td><td>See the diode&rsquo;s data sheet; the board makes no claim for it</td></tr>
    <tr><td>Supply</td><td>Reverse, over-voltage, hot-plug</td><td>Open: the electronic fuse and fault lights are on the board, their trip points are not stated here</td></tr>
    <tr><td>Laser head connector</td><td>Mating and unmating while powered</td><td>Not allowed: not first-mate, last-break</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
