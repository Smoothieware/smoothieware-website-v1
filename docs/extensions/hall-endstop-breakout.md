---
layout: default
title: "Hall endstop breakout"
description: "A contactless magnetic endstop with an open-drain output for a host pull-up: pinout, configuration, homing example and what is not established."
permalink: /extensions/hall-endstop-breakout
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Endstops</p>
    <h1 id="hall-endstop-breakout">Hall endstop breakout</h1>
    <p class="xb-lead">A contactless endstop built around a DRV5033AJ Hall sensor. It detects either pole of a magnet and pulls the signal low through a transistor; the host supplies the pull-up. An unplugged signal wire therefore reads the same as a detected magnet.</p>
    <p class="xb-badge">Design candidate · revision v18 · not yet built or tested</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/hall-endstop-breakout/hall-endstop-breakout-diagram.svg" alt="Top view of the Hall endstop breakout: a small black Hall sensor at the top, a transistor at the left and a three-contact connector at the bottom.">
    <figcaption>Top view, drawn from the board&rsquo;s design files (revision v18). This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>3 wires</b><span>signal, ground and 5&nbsp;V on one connector</span></div>
  <div class="xb-stat"><b>Either pole</b><span>the sensor is omnipolar; the trip distance depends on the magnet and geometry</span></div>
  <div class="xb-stat"><b>Open drain</b><span>the board only pulls low; the host provides the pull-up</span></div>
  <div class="xb-stat"><b>High = triggered</b><span>magnet detected, signal wire open or sensor power absent</span></div>
  <div class="xb-stat"><b>Yellow LED</b><span>lights while a magnet is detected</span></div>
  <div class="xb-stat"><b>28 × 17</b><span>millimetres, two M3 mounting holes</span></div>
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
  This is a design candidate that has not been built or tested, and it is not a qualified machine limit. The sensor&rsquo;s switching field does not give a repeatable trip distance in millimetres: the magnet, its orientation and the approach path must be tested. A signal wire shorted to ground reads as clear and is not detected.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>Contactless endstop or limit sensing where a mechanical lever would wear</td></tr>
    <tr><td>Sensor</td><td>Texas Instruments DRV5033AJ, continuous, omnipolar, open drain. Its data sheet gives 3 to 12&nbsp;mT to operate and 1 to 5&nbsp;mT to release; these do not give a trip gap for your magnet.</td></tr>
    <tr><td>Output stage</td><td>A BSS138BK transistor pulls the signal low when no magnet is present. The board never drives the signal high, so the host must pull it up (3.3&nbsp;V in the example).</td></tr>
    <tr><td>Series resistor</td><td>330&nbsp;&Omega;, 1&nbsp;%, 1206</td></tr>
    <tr><td>Protection</td><td>A PESD5V0S1BA diode and a 10&nbsp;nF capacitor on the signal</td></tr>
    <tr><td>Indicator</td><td>Yellow LED with a 2.2&nbsp;k&Omega; resistor, lit while a magnet is detected; cut link JP1 turns it off</td></tr>
    <tr><td>Connector</td><td>3 contacts, S, G and 5V, at 2.54&nbsp;mm; exact connector series not specified</td></tr>
    <tr><td>Test points</td><td>Five test points on the board for 5&nbsp;V, signal, sensor output and two grounds (not drawn in the top view)</td></tr>
    <tr><td>Size</td><td>28 &times; 17&nbsp;mm with two M3 mounting holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a></td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; the hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side. The mounting holes and test points are not drawn in this view.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/hall-endstop-breakout/hall-endstop-breakout-diagram.svg" alt="Top view of the Hall endstop breakout with nine numbered markers that are explained in the list below.">
      <a class="xb-mk" href="#tour-1" style="left:49%;top:74%" aria-label="1: connector">1<span class="xb-pop"><b>Field connector (J1)</b> — a 3-contact connector marked S, G, 5V. Contact 1 (S, signal) is at the left, next to the white dot; 2 is ground; 3 is 5&nbsp;V. The drawing shows two sets of pads for the same three contacts. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:50%;top:20.5%" aria-label="2: Hall sensor">2<span class="xb-pop"><b>Hall sensor (U1)</b> — a DRV5033AJ continuous, omnipolar, open-drain Hall sensor. Either magnetic pole pulls its output low when the field is strong enough. The circle on the board marks where the magnet should be brought.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-3" style="left:17.7%;top:22.6%" aria-label="3: inverter">3<span class="xb-pop"><b>Inverter transistor (Q1)</b> — a BSS138BK MOSFET. The sensor output drives its gate; its drain, through a series resistor, is the board&rsquo;s signal output. It only pulls the signal low; it never drives it high.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:31.7%;top:20%" aria-label="4: sensor pull-up">4<span class="xb-pop"><b>Sensor pull-up (R1)</b> — a 10&nbsp;k&Omega; resistor from 5&nbsp;V to the sensor output.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-5" style="left:18%;top:37%" aria-label="5: series resistor">5<span class="xb-pop"><b>Series resistor (R2)</b> — a 330&nbsp;&Omega; resistor between the transistor and the signal contact.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:31.7%;top:61%" aria-label="6: noise capacitor">6<span class="xb-pop"><b>Signal capacitor (C2)</b> — a 10&nbsp;nF capacitor from the signal to ground that smooths noise.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:31.4%;top:80%" aria-label="7: surge diode">7<span class="xb-pop"><b>Surge diode (D1)</b> — a PESD5V0S1BA protection diode from the signal to ground.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-8" style="left:82.5%;top:20%" aria-label="8: state LED">8<span class="xb-pop"><b>Magnet LED (D2)</b> — a yellow LED, marked MAG, that lights while the sensor output is low, which is when the magnet is detected. Cut link JP1 turns it off.</span></a>
      <a class="xb-mk xb-pb" href="#tour-9" style="left:50%;top:33.5%" aria-label="9: supply capacitor">9<span class="xb-pop"><b>Supply capacitor (C1)</b> — a 100&nbsp;nF capacitor next to the sensor.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Field connector (J1)</b> — a 3-contact connector marked S, G, 5V. Contact 1 (S, signal) is at the left, next to the white dot; 2 is ground; 3 is 5&nbsp;V. The drawing shows two sets of pads for the same three contacts. <i>See the pinout.</i></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Hall sensor (U1)</b> — a DRV5033AJ continuous, omnipolar, open-drain Hall sensor. Either magnetic pole pulls its output low when the field is strong enough. The circle on the board marks where the magnet should be brought.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Inverter transistor (Q1)</b> — a BSS138BK MOSFET. The sensor output drives its gate; its drain, through a series resistor, is the board&rsquo;s signal output. It only pulls the signal low; it never drives it high.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Sensor pull-up (R1)</b> — a 10&nbsp;k&Omega; resistor from 5&nbsp;V to the sensor output.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Series resistor (R2)</b> — a 330&nbsp;&Omega; resistor between the transistor and the signal contact.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Signal capacitor (C2)</b> — a 10&nbsp;nF capacitor from the signal to ground that smooths noise.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Surge diode (D1)</b> — a PESD5V0S1BA protection diode from the signal to ground.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Magnet LED (D2)</b> — a yellow LED, marked MAG, that lights while the sensor output is low, which is when the magnet is detected. Cut link JP1 turns it off.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Supply capacitor (C1)</b> — a 100&nbsp;nF capacitor next to the sensor.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1: field connector

Seen from the component side as in the tour, contact 1 (S) is at the left next to the white dot and contact 3 (5V) at the right.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Function</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1 (S)</td><td><span class="xb-pill xb-p-sig">SIGNAL_OUT</span></td><td>Open-drain output. Needs a host pull-up; low means clear, high means triggered.</td></tr>
    <tr><td>2 (G)</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Ground shared with the controller</td></tr>
    <tr><td>3 (5V)</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Sensor supply input. Establish the source&rsquo;s current allowance before connecting.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Link and test points

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Name</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td>JP1</td><td>Solder link marked CUT TO DISABLE D2: bridged as delivered; cutting it turns the LED off</td></tr>
    <tr><td>TP1</td><td>5&nbsp;V</td></tr>
    <tr><td>TP2, TP5</td><td>Ground</td></tr>
    <tr><td>TP3</td><td>SIGNAL_OUT</td></tr>
    <tr><td>TP4</td><td>HALL_OUT, the sensor&rsquo;s own output</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>The design is not yet built.</span></div>
  <div class="xb-card"><b>A magnet</b><span>Not specified by the design; qualify the part, gap and path.</span></div>
  <div class="xb-card"><b>Three wires</b><span>Signal, ground and 5&nbsp;V to the controller, with the signal on an input that has a pull-up.</span></div>
  <div class="xb-card"><b>A free input</b><span>PB1 in the example, if nothing else uses it.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Wire the board</h3>
    <p>With the power off, connect header G_F (J37) contact 3 (PB1) to J1 contact 1 (signal), contact 10 to J1 contact 2 (ground) and contact 2 (5&nbsp;V) to J1 contact 3. Leave the host 3.3&nbsp;V contact unused: the PB1 pull-up biases the signal. Check the contact numbers on the real boards.</p>
    <p class="xb-expect">The rail positions on the Prime&rsquo;s physical header need checking against the board before powering; see the Prime header note in the electrical appendix.</p>
  </li>
  <li class="xb-step">
    <h3>Add the configuration</h3>
    <p>Add the <a href="#configuration">input-check entry</a> to the endstops section and reset the controller.</p>
  </li>
  <li class="xb-step">
    <h3>Check the state</h3>
    <p>With motion disabled, send <code>M119</code>, bring the magnet to the sensor and take it away, then send it again.</p>
    <p class="xb-expect">The PB1 state changes from 0 when clear to 1 when triggered. Test a disconnected signal wire separately.</p>
  </li>
  <li class="xb-step">
    <h3>Only then consider homing</h3>
    <p>Use the worked example below only after the check passes, and adapt every distance and speed to your machine.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Read the sensor state without homing</td><td>Endstops (V2)</td><td>The input-check entry</td></tr>
    <tr><td>Home X towards the sensor</td><td>Endstops (V2)</td><td>The worked X-min example</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Check the input without homing

With machine loads disabled and an existing configured X actuator, add this entry to the `[endstops]` section:

```ini
[endstops]
bench_endstop.enable = true
bench_endstop.pin = PB1^
bench_endstop.axis = X
bench_endstop.homing_direction = none
bench_endstop.limit_enable = false
```

`^` turns on the input pull-up and no `!` is used because triggered is high. The entry enables neither homing nor a limit. Do not use it while PB1 is allocated elsewhere. In the pinned SmoothieV2 source (revision 2a21c0108b1d095ecd8b2b9358e94055f053c003), the [input parser](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/endstops/Endstops.cpp#L130-L200) keeps `homing_direction = none` inputs and the [M119 handler](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/endstops/Endstops.cpp#L1013-L1030) reports their state. This has not been run on a built board.

### Worked X-min homing example

Use this only after the check above passes. It assumes a working Cartesian X axis moving in the negative direction towards the sensor and a carriage starting within 8&nbsp;mm of the trigger point. It allows a 10&nbsp;mm search at 5&nbsp;mm/s, retracts 2&nbsp;mm and approaches again at 1&nbsp;mm/s. The values do not qualify the magnet gap or stopping distance. Replace the check entry with this one; do not leave both enabled.

```ini
[endstops]
minx.enable = true
minx.pin = PB1^
minx.axis = X
minx.homing_direction = home_to_min
minx.homing_position = 0
minx.max_travel = 10
minx.fast_rate = 5
minx.slow_rate = 1
minx.retract = 2
minx.limit_enable = false
```

Reload the configuration, then repeat `M119` with the magnet clear and triggered. Keep an emergency stop available and the travel path clear. With `grbl_mode = false` send `G28 X0`; with `grbl_mode = true` send `G28.2 X0`, because plain `G28` is a parking command there. Stop at once if the axis moves away from the sensor or does not stop when triggered. This example deliberately leaves `limit_enable = false`, so it does not give a continuous travel limit. The pinned firmware defines the [homing direction, rates, retract and search distance](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/endstops/Endstops.cpp#L196-L235) and the [mode-dependent homing commands](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/endstops/Endstops.cpp#L919-L938). Physical operation has not been verified.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 170" role="img" aria-labelledby="xb-how-t">
    <title id="xb-how-t">A magnet pulls the Hall sensor output low, which turns the transistor off and lets the host pull-up raise the signal.</title>
    <g font-size="13" font-weight="700" text-anchor="middle" fill="#e6ebf2">
      <rect x="20" y="55" width="170" height="60" rx="8" fill="#212936" stroke="#e0a877"/><text x="105" y="80">Magnet</text><text x="105" y="100" font-weight="400" fill="#a9b4c2">either pole</text>
      <rect x="250" y="55" width="170" height="60" rx="8" fill="#212936" stroke="#6fe08a"/><text x="335" y="80">Hall sensor U1</text><text x="335" y="100" font-weight="400" fill="#a9b4c2">open drain, pull-up 10 k</text>
      <rect x="480" y="55" width="170" height="60" rx="8" fill="#212936" stroke="#5fb3ff"/><text x="565" y="80">Transistor Q1</text><text x="565" y="100" font-weight="400" fill="#a9b4c2">pulls signal low</text>
      <rect x="710" y="55" width="130" height="60" rx="8" fill="#212936" stroke="#5fb3ff"/><text x="775" y="80">330 &#937;</text><text x="775" y="100" font-weight="400" fill="#a9b4c2">series</text>
      <rect x="880" y="55" width="100" height="60" rx="8" fill="#1f2226" stroke="#dfe4ee"/><text x="930" y="90">J1.1</text>
    </g>
    <g stroke-width="3" fill="none" stroke="#a9b4c2"><path d="M190 85H250"/><path d="M420 85H480"/><path d="M650 85H710"/><path d="M840 85H880"/></g>
  </svg>
  </div>
  <figcaption>The path from the magnet to the signal contact.</figcaption>
</figure>
{:/nomarkdown}

With no magnet near, the sensor output is high through its 10&nbsp;k&Omega; pull-up, the transistor is on and the signal is pulled to ground: clear, read as 0. When a magnet is near, the sensor pulls its output low, the transistor turns off and the host pull-up raises the signal: triggered, read as 1. An unplugged signal wire or lost sensor power also lets the host pull-up raise the line, so both read as triggered. A signal shorted to ground reads as clear and is not detected.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Always reads triggered</td><td>The signal wire is open, 5&nbsp;V is missing, or the magnet sits too close. Measure TP1 and TP4.</td></tr>
    <tr><td>Never reads triggered</td><td>Signal shorted to ground, wrong input pin, or the magnet never reaches the sensor&rsquo;s operate field.</td></tr>
    <tr><td>Reads high with no pull-up</td><td>The input has no pull-up: check the <code>^</code> in the pin name.</td></tr>
    <tr><td>Trip point moves</td><td>Temperature, magnet and geometry are not specified or qualified.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-amber"></span>Yellow (D2, MAG)</th></tr></thead>
  <tbody>
    <tr><td>Where</td><td>Top right, labelled HALL ENDSTOP</td></tr>
    <tr><td>Lit means</td><td>The sensor output is low: a magnet is detected</td></tr>
    <tr><td>Off means</td><td>No magnet, 5&nbsp;V missing, or link JP1 cut</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>Revision</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/hall-endstop-breakout/hall-endstop-breakout-schematic.pdf">Schematic (PDF)</a></td><td>v18</td><td>The complete circuit diagram. Its title block reads v13.</td></tr>
    <tr><td><a href="/images/extensions/hall-endstop-breakout/hall-endstop-breakout-bom.csv">Parts list (CSV)</a></td><td>v18</td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/hall-endstop-breakout/hall-endstop-breakout-diagram.svg">Board drawing (SVG)</a></td><td>v18</td><td>The top view used on this page, at full resolution</td></tr>
    <tr><td><a href="/assets/downloads/extensions/hall-endstop-breakout/hall-cad-study.zip">CAD study (ZIP, 70 KiB)</a></td><td>v18</td><td>KiCad 9 project, schematic, local libraries and notes. A 2D design study with no fabrication or operating qualification.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side. The connector overhangs the lower edge.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-hall-mount-t">
  <title id="xb-hall-mount-t">Mounting drawing of the hall endstop breakout, component side: outline 28 by 17 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="200.0" y="78.0" width="560.0" height="340.0" rx="20.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M200.0 56H760.0"/><path d="M200.0 50V62"/><path d="M760.0 50V62"/><path d="M786.0 78.0V418.0"/><path d="M780.0 78.0h12"/><path d="M780.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">28</text>
  <text x="798.0" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">17</text>
  <circle cx="200.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="188.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M142.0 104.0h30" fill="none"/><path d="M176.0 104.0l-8 -4v8z"/><path d="M142.0 104.0v30" fill="none"/><path d="M142.0 138.0l-4 -8h8z"/></g>
  <text x="180.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="138.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="280.0" cy="338.0" r="32.0" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M244.0 338.0h72.0M280.0 302.0v72.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="248.0" y="296.0" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  4.00, 13.00</text>
  <circle cx="680.0" cy="338.0" r="32.0" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M644.0 338.0h72.0M680.0 302.0v72.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="712.0" y="296.0" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  24.00, 13.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 28 × 17&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>4.00</td><td>13.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>24.00</td><td>13.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>

{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Every figure is a design value, a value calculated from the design or a value from a part, as the last column says. None is a measurement on a built board. **Open** means not established.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Sensor supply</td><td>J1 contact 3</td><td>Open</td><td>5 V</td><td>Open</td><td>Host-derived; current allowance Open</td></tr>
    <tr><td>Operate field</td><td>DRV5033AJ</td><td>3 mT</td><td>—</td><td>12 mT</td><td>From the sensor data sheet; does not give a trip gap</td></tr>
    <tr><td>Release field</td><td>DRV5033AJ</td><td>1 mT</td><td>—</td><td>5 mT</td><td>From the sensor data sheet</td></tr>
    <tr><td>Signal output</td><td>J1 contact 1</td><td>—</td><td>Open drain, high = triggered</td><td>—</td><td>Host pull-up required; low and high levels, rise time and input compatibility Open</td></tr>
    <tr><td>Trip gap, repeatability, temperature behaviour</td><td>Whole board</td><td>Open</td><td>Open</td><td>Open</td><td>Magnet and geometry not specified</td></tr>
    <tr><td>Cable length and filtering, brownout behaviour</td><td>Whole board</td><td>Open</td><td>Open</td><td>Open</td><td>Needs testing</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Prime header G_F (J37)

On the Prime, header G_F (J37) has 3.3&nbsp;V on contact 1, 5&nbsp;V on contact 2, PB1 on 3, PJ4 on 4 and ground on 10. A discrepancy in the rail positions on the Prime&rsquo;s physical connector has been noted: verify numbered continuity with the power removed. The header is unshrouded.

See all boards on the [extension boards](/extension-boards) page.
