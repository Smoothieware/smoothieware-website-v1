---
layout: default
title: "Laser barrier board"
description: "A pair of boards, an infrared emitter and a receiver, that report whether a beam is unbroken, for tool-presence checks: pinout, wiring, configuration and limits."
permalink: /extensions/laser-barrier-board
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Sensors</p>
    <h1 id="laser-barrier-board">Laser barrier board</h1>
    <p class="xb-lead">Two small boards that watch a beam of modulated infrared light across a gap. The emitter sends pulses, the receiver checks that it sees them, and it tells the Smoothieboard whether the beam is unbroken. Use it to check that a tool is present, for example. Despite the name there is no laser: the light source is an infrared LED.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/laser-barrier-board/receiver-diagram.png" alt="Top view of the receiver board: a ten-contact socket at the left, three logic chips in a row, an infrared receiver module at the right edge and a link connector at the bottom.">
    <figcaption>The receiver board, drawn from the design files. The emitter is a smaller board, shown in the board tour.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>2 boards</b><span>an emitter and a receiver, joined by a three-wire cable</span></div>
  <div class="xb-stat"><b>Infrared</b><span>TSAL6100 LED, no laser. About 38&nbsp;kHz carrier.</span></div>
  <div class="xb-stat"><b>Modulated</b><span>the receiver checks for the pulses, so steady light does not count as a beam</span></div>
  <div class="xb-stat"><b>Not safety</b><span>not a light curtain, not an emergency stop</span></div>
  <div class="xb-stat"><b>44 × 34 and 34 × 20</b><span>millimetres, receiver and emitter</span></div>
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

<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>Not for protecting people.</strong> This is not a certified light curtain or emergency stop. Use it for tool-presence checks or as a supplementary interlock on a machine that is protected in other ways. A beam that is blocked, an emitter that is unplugged and a receiver that has lost power may not read the same way: test each before you rely on it.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Parts</td><td>Two boards that work as a pair: an emitter (34 &times; 20&nbsp;mm) and a receiver (44 &times; 34&nbsp;mm)</td></tr>
    <tr><td>Light source</td><td>Vishay TSAL6100 infrared LED, switched by an AO3400A MOSFET from a TLC555 carrier generator (about 38&nbsp;kHz, set by the resistors and capacitor). No laser diode.</td></tr>
    <tr><td>Receiver</td><td>Vishay TSSP4038 module for 38&nbsp;kHz modulated infrared, followed by digital logic (SN74HC14, HC393, HC74 and LVC2G08) that looks for the pulses</td></tr>
    <tr><td>Detection method</td><td>The receiver switches the emitter on and off with its own clock and checks that the signal follows. Steady light is therefore not taken as a beam.</td></tr>
    <tr><td>Output to the controller</td><td>Beam state on Gadgeteer contact 3, and a raw receiver output on contact 5. Measure the polarity before you use it.</td></tr>
    <tr><td>Controller sockets</td><td>Receiver socket J1: Gadgeteer X IN, 10 contacts (Samtec SHF-105, 1.27&nbsp;mm). The emitter has no socket.</td></tr>
    <tr><td>Link cable</td><td>Three wires from the receiver J2 to the emitter J1: ground, 5&nbsp;V and gate. The 5&nbsp;V is switched and current-limited by a TPS2553 on the receiver.</td></tr>
    <tr><td>Supply</td><td>The receiver logic runs from the controller&rsquo;s 3.3&nbsp;V. The link 5&nbsp;V comes from the controller&rsquo;s 5&nbsp;V through the receiver.</td></tr>
    <tr><td>Indicators</td><td>One green beam light on the receiver, with a solder link; the emitter has none besides the LED itself</td></tr>
    <tr><td>Test points</td><td>Eleven on the receiver and five on the emitter, named in the pinout</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> and the <a href="/switch">Switch</a> and <a href="/endstops">Endstops</a> modules</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure is in the [electrical specifications](#electrical) appendix; the hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on each drawing match the list below it. Boards are shown from the component side. The test points and the solder links are not visible in the drawings; they are named in the pinout.

### Emitter

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the emitter board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/laser-barrier-board/emitter-diagram.png" alt="Top view of the emitter board with six numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pl" href="#tour-1" style="left:15.5%;top:70%" aria-label="1: link connector">1<span class="xb-pop"><b>Link connector (J1)</b> — three contacts from the receiver: 1 ground, 2 link 5&nbsp;V, 3 gate. Two footprints for the same contacts sit side by side; fit one. In both, the contacts run 1, 2, 3 from top to bottom. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:40.9%;top:30.7%" aria-label="2: carrier generator">2<span class="xb-pop"><b>Carrier generator</b> — U1, a TLC555 timer chip that makes the pulse train (the carrier). Its resistors and capacitor are chosen for about 38&nbsp;kHz. The gate contact enables it through its reset pin.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:59.5%;top:58%" aria-label="3: LED switch">3<span class="xb-pop"><b>LED switch</b> — Q1, an AO3400A MOSFET that switches the infrared LED on and off at the carrier rate.</span></a>
      <a class="xb-mk xb-pr" href="#tour-4" style="left:86%;top:64.6%" aria-label="4: infrared LED">4<span class="xb-pop"><b>Infrared LED (D2)</b> — a TSAL6100 infrared LED on its own leads, pointing off the right-hand edge in the drawing. A solder link, JP1, disables it. It is not a laser.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:58.6%;top:73.5%" aria-label="5: LED series resistor">5<span class="xb-pop"><b>LED series resistor</b> — R7, 39&nbsp;&Omega;, 1206 size, between the link 5&nbsp;V and the LED. It limits the LED current.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Link connector (J1)</b> — three contacts from the receiver: 1 ground, 2 link 5&nbsp;V, 3 gate. Two footprints for the same contacts sit side by side; fit one. In both, the contacts run 1, 2, 3 from top to bottom. <i>See the pinout.</i></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Carrier generator</b> — U1, a TLC555 timer chip that makes the pulse train (the carrier). Its resistors and capacitor are chosen for about 38&nbsp;kHz. The gate contact enables it through its reset pin.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>LED switch</b> — Q1, an AO3400A MOSFET that switches the infrared LED on and off at the carrier rate.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Infrared LED (D2)</b> — a TSAL6100 infrared LED on its own leads, pointing off the right-hand edge in the drawing. A solder link, JP1, disables it. It is not a laser.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>LED series resistor</b> — R7, 39&nbsp;&Omega;, 1206 size, between the link 5&nbsp;V and the LED. It limits the LED current.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

### Receiver

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the receiver board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/laser-barrier-board/receiver-diagram.png" alt="Top view of the receiver board with eleven numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-6" style="left:10.5%;top:43.7%" aria-label="6: Gadgeteer socket">6<span class="xb-pop"><b>Gadgeteer socket X IN (J1)</b> — the 10-contact socket that connects to the controller. Five contacts are used: 3.3&nbsp;V, 5&nbsp;V, beam state, emitter enable and ground, plus one optional raw output. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-7" style="left:90%;top:43%" aria-label="7: infrared receiver">7<span class="xb-pop"><b>Infrared receiver (U1)</b> — a TSSP4038 receiver module for 38&nbsp;kHz modulated infrared. It sits at the right-hand edge, facing out.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:45.5%;top:15%" aria-label="8: tick generator">8<span class="xb-pop"><b>Tick generator</b> — U7, a TLC555 timer chip on the 3.3&nbsp;V rail. It makes the receiver&rsquo;s own clock, about 4.7&nbsp;kHz. The counter divides it into phases.</span></a>
      <a class="xb-mk xb-pb" href="#tour-9" style="left:27.3%;top:44.8%" aria-label="9: Schmitt inverters">9<span class="xb-pop"><b>Schmitt-trigger inverters</b> — U2, an SN74HC14 chip. It cleans up the receiver signal and the counter outputs.</span></a>
      <a class="xb-mk xb-pb" href="#tour-10" style="left:46.4%;top:44.8%" aria-label="10: counter">10<span class="xb-pop"><b>Counter</b> — U3, an SN74HC393 binary counter. It divides the tick clock into the phases that switch the emitter on and off.</span></a>
      <a class="xb-mk xb-pb" href="#tour-11" style="left:66.4%;top:44.8%" aria-label="11: flip-flops">11<span class="xb-pop"><b>Flip-flops</b> — U4, an SN74HC74 with two flip-flops. They sample the receiver on opposite phases: one while the emitter is meant to be on, one while it is meant to be off.</span></a>
      <a class="xb-mk xb-pr" href="#tour-12" style="left:82.4%;top:71%" aria-label="12: output gate">12<span class="xb-pop"><b>Output gate</b> — U5, an SN74LVC2G08 with two AND gates. They combine the two samples and the enable into the beam-valid result.</span></a>
      <a class="xb-mk" href="#tour-13" style="left:47.7%;top:71%" aria-label="13: link power switch">13<span class="xb-pop"><b>Link power switch</b> — U6, a TPS2553 current-limited power switch that feeds the 5&nbsp;V link to the emitter, with a fault output.</span></a>
      <a class="xb-mk" href="#tour-14" style="left:66.4%;top:85.6%" aria-label="14: link connector">14<span class="xb-pop"><b>Link connector (J2)</b> — three contacts to the emitter: 1 ground, 2 link 5&nbsp;V, 3 gate. Two footprints for the same contacts sit side by side, one row of larger pads and one of smaller; fit one. In both, the contacts run 1, 2, 3 from left to right. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-15" style="left:9.5%;top:21.8%" aria-label="15: beam light">15<span class="xb-pop"><b>Green beam light (D2)</b> — lit while the receiver reports a valid beam. A solder link, SJ1, disables it.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-6"><span class="xb-n">6</span><div><b>Gadgeteer socket X IN (J1)</b> — the 10-contact socket that connects to the controller. Five contacts are used: 3.3&nbsp;V, 5&nbsp;V, beam state, emitter enable and ground, plus one optional raw output. <i>See the pinout.</i></div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Infrared receiver (U1)</b> — a TSSP4038 receiver module for 38&nbsp;kHz modulated infrared. It sits at the right-hand edge, facing out.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Tick generator</b> — U7, a TLC555 timer chip on the 3.3&nbsp;V rail. It makes the receiver&rsquo;s own clock, about 4.7&nbsp;kHz. The counter divides it into phases.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Schmitt-trigger inverters</b> — U2, an SN74HC14 chip. It cleans up the receiver signal and the counter outputs.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Counter</b> — U3, an SN74HC393 binary counter. It divides the tick clock into the phases that switch the emitter on and off.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Flip-flops</b> — U4, an SN74HC74 with two flip-flops. They sample the receiver on opposite phases: one while the emitter is meant to be on, one while it is meant to be off.</div></li>
    <li id="tour-12"><span class="xb-n">12</span><div><b>Output gate</b> — U5, an SN74LVC2G08 with two AND gates. They combine the two samples and the enable into the beam-valid result.</div></li>
    <li id="tour-13"><span class="xb-n">13</span><div><b>Link power switch</b> — U6, a TPS2553 current-limited power switch that feeds the 5&nbsp;V link to the emitter, with a fault output.</div></li>
    <li id="tour-14"><span class="xb-n">14</span><div><b>Link connector (J2)</b> — three contacts to the emitter: 1 ground, 2 link 5&nbsp;V, 3 gate. Two footprints for the same contacts sit side by side, one row of larger pads and one of smaller; fit one. In both, the contacts run 1, 2, 3 from left to right. <i>See the pinout.</i></div></li>
    <li id="tour-15"><span class="xb-n">15</span><div><b>Green beam light (D2)</b> — lit while the receiver reports a valid beam. A solder link, SJ1, disables it.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### Receiver J1: Gadgeteer socket X IN

A 2 &times; 5 socket at the left of the receiver. Contact 1 is at the bottom of the right-hand column in the tour, contact 2 is beside it in the left-hand column, 3 is above 1, and so on up the board.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Function</th><th>Use</th><th>Smoothieboard V2 Prime (header G_F, J37)</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Receiver logic supply</td><td>Pin 1</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Feeds the link to the emitter</td><td>Pin 2</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">BEAM_OK</span></td><td>Output: beam state, 3.3&nbsp;V logic. Check the polarity. Never drive it.</td><td>Pin 3, <code>PB1</code></td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">EMIT_EN</span></td><td>Input: enables the emitter. High enables, low disables.</td><td>Pin 4, <code>PJ4</code></td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">RX_RAW</span></td><td>Output: the raw receiver signal. Not used in the example.</td><td>Leave open</td></tr>
    <tr><td>6–9</td><td>—</td><td>Not connected</td><td>Leave open</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Ground</td><td>Pin 10</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  The enable input is held near mid-rail by two 100&nbsp;k&Omega; resistors (one to 3.3&nbsp;V, one to ground) until the controller drives it, so the emitter&rsquo;s state at start-up is not guaranteed. Check where the 3.3&nbsp;V and 5&nbsp;V rails sit on your Prime header and cable before you apply power.
</sl-alert>

### Link connectors

The receiver J2 and the emitter J1 carry the same three contacts. Each has two footprints for them; fit one connector on each board and wire one lead per contact.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Function</th><th>Receiver J2</th><th>Emitter J1</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Left, top of the two rows</td><td>Top</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span> (link)</td><td>Middle</td><td>Middle</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">Gate</span></td><td>Right</td><td>Bottom</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Join receiver J2 contact 1 to emitter J1 contact 1, 2 to 2 and 3 to 3. Check each lead with a meter before power.

### Links and test points

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Board</th><th>Name</th><th>What it is</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>Emitter</td><td>JP1 (CUT TO DISABLE D2)</td><td>Solder link in the LED&rsquo;s path</td><td>Closed. Cutting it disables the LED: the beam is gone and the receiver will report no beam.</td></tr>
    <tr><td>Receiver</td><td>SJ1 (LED_EN)</td><td>Solder link for the green beam light</td><td>Bridged</td></tr>
    <tr><td>Emitter</td><td>TP1 to TP5</td><td>LINK_5V, GND, CARRIER, GATE, GND</td><td>Observation only</td></tr>
    <tr><td>Receiver</td><td>TP1 to TP11</td><td>3.3&nbsp;V, 5&nbsp;V, GND, GND, RX_OUT, GATE_CLK, VALID, BEAM_OK, LINK_GATE, LINK_5V, LINK_FAULT</td><td>Observation only</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Both boards</b><span>The receiver and the emitter are a pair. Do not swap their link connectors.</span></div>
  <div class="xb-card"><b>Smoothieboard V2 Prime</b><span>Running Smoothieware V2, with <code>PB1</code> and <code>PJ4</code> free on header G_F (J37).</span></div>
  <div class="xb-card"><b>A host cable</b><span>Five leads from J37 pins 1, 2, 3, 4 and 10 to the receiver socket contacts with the same numbers. This page does not specify the plug.</span></div>
  <div class="xb-card"><b>A link cable</b><span>Three conductors from the receiver J2 to the emitter J1.</span></div>
  <div class="xb-card"><b>A clear optical path</b><span>The emitter&rsquo;s LED must face the receiver module across the place you want to watch.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

Do these steps with the machine&rsquo;s motion disabled.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Minimal wiring diagram">
  <svg viewBox="0 0 1000 300" role="img" aria-labelledby="xb-hookup-t">
    <title id="xb-hookup-t">Minimal wiring: five leads from the Smoothieboard header to the receiver socket, and three leads from the receiver link connector to the emitter, which faces the receiver across a gap.</title>
    <rect x="370" y="60" width="200" height="180" rx="8" fill="#1b2028" stroke="#59616e" stroke-width="1.5"/>
    <text x="470" y="90" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">Receiver</text>
    <rect x="370" y="130" width="40" height="60" rx="3" fill="#0d0f12" stroke="#8a94a3"/><text x="390" y="165" text-anchor="middle" font-size="11" fill="#e6ebf2">J1</text>
    <rect x="450" y="200" width="60" height="36" rx="3" fill="#0d0f12" stroke="#8a94a3"/><text x="480" y="223" text-anchor="middle" font-size="11" fill="#e6ebf2">J2</text>
    <rect x="530" y="110" width="40" height="40" rx="3" fill="#212936" stroke="#e0a877"/><text x="550" y="135" text-anchor="middle" font-size="10" fill="#e6ebf2">RX</text>
    <rect x="800" y="90" width="170" height="90" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="885" y="130" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Smoothieboard</text><text x="885" y="150" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">V2 Prime</text>
    <path d="M570 130H800" stroke="#5fb3ff" stroke-width="4" stroke-dasharray="3 0"/>
    <text x="685" y="120" text-anchor="middle" font-size="11" fill="#a9b4c2">H1 to H5, five leads</text>
    <rect x="40" y="200" width="150" height="70" rx="8" fill="#1b2028" stroke="#59616e"/><text x="115" y="225" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">Emitter</text><rect x="40" y="235" width="30" height="25" fill="#212936" stroke="#e0a877"/><text x="130" y="250" text-anchor="middle" font-size="10" fill="#a9b4c2">LED faces right</text>
    <path d="M190 220H450" stroke="#a9b4c2" stroke-width="4"/><text x="320" y="212" text-anchor="middle" font-size="11" fill="#a9b4c2">L1 to L3: GND, 5 V, gate</text>
    <path d="M190 250H530" stroke="#e0a877" stroke-width="2" stroke-dasharray="8 6"/><text x="360" y="268" text-anchor="middle" font-size="11" fill="#e0a877">infrared beam</text>
  </svg>
  </div>
  <figcaption>Minimal wiring, schematic and not to scale. In the real arrangement the emitter and the receiver face each other across the gap.</figcaption>
</figure>

<ol class="xb-steps">
  <li class="xb-step">
    <h3>Switch everything off</h3>
    <p>Power down the Smoothieboard.</p>
  </li>
  <li class="xb-step">
    <h3>Mount the two boards</h3>
    <p>Fix each with two M3 screws on standoffs, using the hole positions in the <a href="#mounting">mounting appendix</a>. Point the emitter&rsquo;s LED at the receiver module with a clear path between them.</p>
  </li>
  <li class="xb-step">
    <h3>Link the boards with three leads</h3>
    <p><b>L1:</b> receiver J2 contact 1 to emitter J1 contact 1 (ground). <b>L2:</b> contact 2 to contact 2 (5&nbsp;V). <b>L3:</b> contact 3 to contact 3 (gate).</p>
  </li>
  <li class="xb-step">
    <h3>Connect the receiver to the controller with five leads</h3>
    <p>Join J37 pin <b>1</b> to receiver J1 contact <b>1</b> (3.3&nbsp;V), pin <b>2</b> to <b>2</b> (5&nbsp;V), pin <b>3</b> (<code>PB1</code>) to <b>3</b> (beam state), pin <b>4</b> (<code>PJ4</code>) to <b>4</b> (emitter enable) and pin <b>10</b> to <b>10</b> (ground). Leave contacts 5 to 9 open.</p>
  </li>
  <li class="xb-step">
    <h3>Add the configuration</h3>
    <p>Copy <a href="#config-observe">the example below</a> into the configuration file on the SD card and restart the board.</p>
  </li>
  <li class="xb-step">
    <h3>Record the two states</h3>
    <p>Send <code>M43.21</code> then <code>M119</code>, then <code>M42.21</code> and <code>M119</code> with the path clear, then again with the path blocked.</p>
    <p class="xb-expect"><b>You should see:</b> a different <code>(X)PB1</code> reading for a clear path and for a blocked one. This shows you which value means which. The green light should come on when the receiver reports a valid beam.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

The boards need no module of their own. The emitter enable is an output pin the Switch module can drive and the beam state is an input pin the Endstops module can report. The lines go into the configuration file on the controller&rsquo;s SD card.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Switch the emitter on and off from G-code, and read the beam state</td><td><a href="/switch">Switch</a> and <a href="/endstops">Endstops</a>, read only</td><td><a href="#config-observe">Emitter control and beam state</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Emitter control and beam state (Switch and Endstops modules) {#config-observe}

```ini
[switch]
barrier_emitter.enable            = true
barrier_emitter.output_pin        = PJ4        # header G_F pin 4: emitter enable
barrier_emitter.output_type       = digital
barrier_emitter.input_on_command  = M42
barrier_emitter.input_off_command = M43
barrier_emitter.subcode           = 21         # M42.21 on, M43.21 off
barrier_emitter.startup_state     = false      # off when the board starts
barrier_emitter.halt_set_to       = false      # off when the machine halts
barrier_emitter.ignore_on_halt    = false

[endstops]
barrier_valid_observation.enable           = true
barrier_valid_observation.pin              = PB1-   # header G_F pin 3: beam state, no pull
barrier_valid_observation.axis             = X
barrier_valid_observation.homing_direction = none   # read only
barrier_valid_observation.limit_enable     = false
```

If your file already has `[switch]` or `[endstops]` sections, add the lines to them, and reserve `PB1` and `PJ4` for these entries. The trailing minus on `PB1-` turns the controller&rsquo;s pull resistors off and does not invert: the board&rsquo;s own output sets the level. Never configure `PB1` as an output.

Use it like this:

1. Send `M43.21` to disable the emitter, then `M119` and note `(X)PB1`.
2. Send `M42.21` to enable it. With a clear path, send `M119` and note the reading. Block the path and read again.
3. Send `M43.21` to switch the emitter off again.

`M119` only samples the state: it cannot show how fast the board reacts. These settings configure no homing, limit, halt or tool-check action. Test an unplugged emitter, a receiver that has lost power and strong ambient light separately, with motion disabled, before you build any behaviour on the reading.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 260" role="img" aria-labelledby="xb-how-t">
    <title id="xb-how-t">The receiver gates the emitter on and off through the link; the emitter sends modulated infrared; the receiver module and logic check that the signal follows the gating and report beam state.</title>
    <g font-size="13" font-weight="700" text-anchor="middle" fill="#e6ebf2">
      <rect x="20" y="40" width="200" height="80" rx="8" fill="#212936" stroke="#5fb3ff"/><text x="120" y="75">Receiver clock</text><text x="120" y="95" font-weight="400" fill="#a9b4c2">tick, counter, phases</text>
      <rect x="300" y="40" width="200" height="80" rx="8" fill="#212936" stroke="#e0a877"/><text x="400" y="75">Emitter</text><text x="400" y="95" font-weight="400" fill="#a9b4c2">38 kHz pulses when gated on</text>
      <rect x="580" y="40" width="200" height="80" rx="8" fill="#212936" stroke="#e0a877"/><text x="680" y="75">Infrared receiver</text><text x="680" y="95" font-weight="400" fill="#a9b4c2">TSSP4038</text>
      <rect x="580" y="150" width="200" height="80" rx="8" fill="#212936" stroke="#6fe08a"/><text x="680" y="185">Flip-flops and gates</text><text x="680" y="205" font-weight="400" fill="#a9b4c2">on-phase and off-phase samples</text>
      <rect x="300" y="150" width="200" height="80" rx="8" fill="#1f2226" stroke="#dfe4ee"/><text x="400" y="185">Beam state, J1 contact 3</text><text x="400" y="205" font-weight="400" fill="#a9b4c2">to the controller</text>
    </g>
    <g stroke-width="3" fill="none" stroke="#a9b4c2"><path d="M220 80H300"/><path d="M680 120V150"/><path d="M580 190H500"/></g>
    <path d="M500 80H580" stroke="#e0a877" stroke-width="3" stroke-dasharray="8 6"/>
    <text x="540" y="70" text-anchor="middle" font-size="12" fill="#e0a877">beam</text>
    <text x="260" y="70" text-anchor="middle" font-size="12" fill="#a9b4c2">gate</text>
  </svg>
  </div>
  <figcaption>The path of the signals. The gate lead from the receiver switches the emitter.</figcaption>
</figure>
{:/nomarkdown}

On the **emitter**, the gate contact reaches the reset pin of a TLC555 timer through 1&nbsp;k&Omega;, with a 10&nbsp;k&Omega; resistor to ground. When the gate is high the timer runs and makes pulses; with the values on the board (1&nbsp;k&Omega;, 12.1&nbsp;k&Omega; and 1.5&nbsp;nF) the calculated frequency is about 38&nbsp;kHz. The pulses go through 100&nbsp;&Omega; to the gate of an AO3400A MOSFET (with 100&nbsp;k&Omega; to ground), which switches the LED&rsquo;s current through the 39&nbsp;&Omega; resistor.

On the **receiver**, a second TLC555 makes a slow clock (calculated at about 4.7&nbsp;kHz), and a counter divides it into phases. The phases drive the gate lead, so the emitter is switched on and off in a known pattern. The TSSP4038 module turns the modulated light into a logic signal. Two flip-flops sample it on opposite phases, one while the emitter should be on and one while it should be off. The logic combines the two: the beam counts as valid when the signal is present in the on phase and absent in the off phase. That tells a correctly modulated beam from steady light. Do not assume a polarity, timing or fault behaviour; test them.

## Troubleshooting {#troubleshooting}

What the light tells you:

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-green"></span>Green (beam)</th></tr></thead>
  <tbody>
    <tr><td>Where</td><td>Receiver, left of the socket, marker 15 of the <a href="#tour">board tour</a></td></tr>
    <tr><td>Lit means</td><td>The receiver reports a valid beam</td></tr>
    <tr><td>Dark means</td><td>No valid beam, the emitter is disabled, the receiver is not powered, or the light is disabled</td></tr>
    <tr><td>Disable it</td><td>Cut the solder link SJ1</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>When you see</th><th>It means</th><th>Do this</th></tr></thead>
  <tbody>
    <tr><td>The beam light never comes on</td><td>No beam reaches the receiver, or the emitter is not running.</td><td>Check <code>M42.21</code> was sent. With power off, check the three link leads and the five host leads with a meter. Check the emitter LED faces the receiver module with a clear path. Look at the GATE and CARRIER test points on the emitter with a scope or meter.</td></tr>
    <tr><td>The reading does not change when you block the path</td><td>The path is not the one the receiver sees, or steady light is reaching it.</td><td>Re-aim, shield from sunlight and lamps, and shorten the distance.</td></tr>
    <tr><td>The emitter is on at power-up with the enable lead unconnected</td><td>The enable input floats near mid-rail.</td><td>Drive it from the controller. Do not rely on its start-up level.</td></tr>
    <tr><td><code>M119</code> reads the same with the emitter on or off</td><td>The beam state does not reach <code>PB1</code>, or the receiver is not powered.</td><td>Check J1 contact 3 to J37 pin 3 and that 3.3&nbsp;V reaches contact 1.</td></tr>
    <tr><td>The link 5&nbsp;V is missing at the emitter</td><td>The receiver&rsquo;s power switch has limited or cut it, or contact 2 of the socket has no 5&nbsp;V.</td><td>Check the LINK_5V and LINK_FAULT test points on the receiver, and look for a short on the link cable.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/). Say what `M119` reports.

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/laser-barrier-board/emitter-schematic.pdf">Emitter schematic (PDF)</a></td><td>The emitter circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/laser-barrier-board/receiver-schematic.pdf">Receiver schematic (PDF)</a></td><td>The receiver circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/laser-barrier-board/emitter-bom.csv">Emitter parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/laser-barrier-board/receiver-bom.csv">Receiver parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/laser-barrier-board/emitter-diagram.png">Emitter drawing (SVG)</a></td><td>The top view at full resolution</td></tr>
    <tr><td><a href="/images/extensions/laser-barrier-board/receiver-diagram.png">Receiver drawing (SVG)</a></td><td>The top view at full resolution</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the corner marked 0, 0 with the board seen from the component side. The LED on the emitter and the module on the receiver stand on the board&rsquo;s edge: allow for them.

### Emitter

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-emitter-mount-t">
  <title id="xb-emitter-mount-t">Mounting drawing of the emitter board, component side: outline 34 by 20 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="191.0" y="78.0" width="578.0" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M191.0 56H769.0"/><path d="M191.0 50V62"/><path d="M769.0 50V62"/><path d="M795.0 78.0V418.0"/><path d="M789.0 78.0h12"/><path d="M789.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">34</text>
  <text x="807.0" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">20</text>
  <circle cx="191.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="179.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M133.0 104.0h30" fill="none"/><path d="M167.0 104.0l-8 -4v8z"/><path d="M133.0 104.0v30" fill="none"/><path d="M133.0 138.0l-4 -8h8z"/></g>
  <text x="171.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="129.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="276.0" cy="146.0" r="27.2" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M244.8 146.0h62.4M276.0 114.8v62.4" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="248.8" y="193.2" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 4.00</text>
  <circle cx="616.0" cy="146.0" r="27.2" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M584.8 146.0h62.4M616.0 114.8v62.4" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="643.2" y="193.2" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  25.00, 4.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 34 × 20&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>4.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>25.00</td><td>4.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>

{:/nomarkdown}

### Receiver

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-receiver-mount-t">
  <title id="xb-receiver-mount-t">Mounting drawing of the receiver board, component side: outline 44 by 34 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="260.0" y="78.0" width="440.0" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M260.0 56H700.0"/><path d="M260.0 50V62"/><path d="M700.0 50V62"/><path d="M726.0 78.0V418.0"/><path d="M720.0 78.0h12"/><path d="M720.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">44</text>
  <text x="738.0" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">34</text>
  <circle cx="260.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="248.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M202.0 104.0h30" fill="none"/><path d="M236.0 104.0l-8 -4v8z"/><path d="M202.0 104.0v30" fill="none"/><path d="M202.0 138.0l-4 -8h8z"/></g>
  <text x="240.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="198.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="360.0" cy="138.0" r="16.0" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M340.0 138.0h40.0M360.0 118.0v40.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="344.0" y="174.0" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  10.00, 6.00</text>
  <circle cx="560.0" cy="138.0" r="16.0" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M540.0 138.0h40.0M560.0 118.0v40.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="576.0" y="174.0" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  30.00, 6.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 44 × 34&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>10.00</td><td>6.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>30.00</td><td>6.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>

{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

A dash means no figure is given.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Conditions</th></tr></thead>
  <tbody>
    <tr><td>Carrier frequency</td><td>Emitter</td><td>—</td><td>About 38 kHz</td><td>—</td><td>1&nbsp;k&Omega;, 12.1&nbsp;k&Omega; and 1.5&nbsp;nF</td></tr>
    <tr><td>Receiver tick frequency</td><td>Receiver</td><td>—</td><td>About 4.7 kHz</td><td>—</td><td>1&nbsp;k&Omega;, 14.7&nbsp;k&Omega; and 10&nbsp;nF</td></tr>
    <tr><td>LED series resistor</td><td>Emitter R7</td><td>—</td><td>39 &Omega;</td><td>—</td><td>1206, 0.25&nbsp;W</td></tr>
    <tr><td>Logic supply</td><td>Receiver J1 contact 1</td><td>—</td><td>3.3 V</td><td>—</td><td>—</td></tr>
    <tr><td>Link supply</td><td>Receiver J1 contact 2, link</td><td>—</td><td>5 V</td><td>—</td><td>Through a current-limited TPS2553</td></tr>
    <tr><td>Enable input</td><td>Receiver J1 contact 4</td><td>—</td><td>—</td><td>—</td><td>Through 1&nbsp;k&Omega;, with 100&nbsp;k&Omega; to 3.3&nbsp;V and 100&nbsp;k&Omega; to ground; level when undriven near mid-rail</td></tr>
    <tr><td>Beam-state output</td><td>Receiver J1 contact 3</td><td>—</td><td>3.3 V logic</td><td>—</td><td>Through 100&nbsp;&Omega;</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Component stress limits

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Circuit</th><th>Pin or device stress</th><th>Absolute limit</th></tr></thead>
  <tbody>
    <tr><td>Infrared LED</td><td>Continuous and pulsed current</td><td>See the TSAL6100 data sheet</td></tr>
    <tr><td>Receiver module</td><td>Supply and output voltage</td><td>See the TSSP4038 data sheet</td></tr>
    <tr><td>Link cable</td><td>Length and shorting</td><td>The TPS2553 limits the current</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
