---
layout: default
title: "Bidirectional level shifting board"
description: "Seven push-pull logic channels between 3.3 V and a 1.9 to 5.5 V peripheral, with the direction of each channel set by a solder link."
permalink: /extensions/bidirectional-level-shifting-board
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Signal interfaces</p>
    <h1 id="bidirectional-level-shifting-board">Bidirectional level shifting board</h1>
    <p class="xb-lead">Seven logic signals translated between the 3.3&nbsp;V controller side and a peripheral supply of your choice. Each channel has its own <a href="/images/extensions/bidirectional-level-shifting-board/datasheets/sn74lvc1t45.pdf">SN74LVC1T45</a> and its own direction link, so some channels can drive out while others read back.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/bidirectional-level-shifting-board/v17/bidirectional-level-shifting-board-diagram.png" alt="Top view of the level shifting board: a ten-contact socket at each side, a column of seven small translator chips in the middle with a direction label beside each, and a two-way supply connector at the lower right.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>7 channels</b><span>direction set per channel</span></div>
  <div class="xb-stat"><b>3.3 V</b><span>host side</span></div>
  <div class="xb-stat"><b>1.9–5.5 V</b><span>peripheral side supply</span></div>
  <div class="xb-stat"><b>≤ 20 MHz</b><span>up to 150 mm and 30 pF</span></div>
  <div class="xb-stat"><b>4 arrays</b><span><a href="/images/extensions/bidirectional-level-shifting-board/datasheets/tpd4e1u06.pdf">TPD4E1U06</a> ESD protection</span></div>
  <div class="xb-stat"><b>52 × 39.2</b><span>millimetres, four M3 holes</span></div>
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
  <a href="#datasheets">Datasheets</a>
</nav>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Use this board for push-pull digital signals only. It is not an I2C or open-drain translator, it does not detect direction by itself, it does not isolate (both sides share ground), and nothing may be hot-plugged. Power off before changing a solder link.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>Translate seven digital signals between two logic voltages</td></tr>
    <tr><td>Translators</td><td>Seven <a href="/images/extensions/bidirectional-level-shifting-board/datasheets/sn74lvc1t45.pdf">SN74LVC1T45</a>, one per channel (U1 to U7)</td></tr>
    <tr><td>Direction</td><td>Per channel, JP1 to JP7: A to B (as delivered) or B to A</td></tr>
    <tr><td>Host side</td><td>J1 (Y-A), ten-contact socket, 3.3&nbsp;V logic</td></tr>
    <tr><td>Peripheral side</td><td>J2 (Y-B), ten-contact socket, logic at the voltage of the B supply</td></tr>
    <tr><td>B supply</td><td>JP8: host 5&nbsp;V (as delivered) or the external input J3 through a PMEG3020ER Schottky diode</td></tr>
    <tr><td>Forwarded rails</td><td>JP10 passes host 3.3&nbsp;V and JP9 host 5&nbsp;V to J2; cut a link to separate that rail</td></tr>
    <tr><td>Signal protection</td><td><a href="/images/extensions/bidirectional-level-shifting-board/datasheets/tpd4e1u06.pdf">TPD4E1U06</a> arrays on the signal lines of both sides</td></tr>
    <tr><td>Idle level</td><td>100&nbsp;k&Omega; pull-down on every signal of both sides</td></tr>
    <tr><td>Size</td><td>52 &times; 39.2&nbsp;mm, four 3.2&nbsp;mm holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> GF header (see the example below)</td></tr>
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
      <img src="/images/extensions/bidirectional-level-shifting-board/v17/bidirectional-level-shifting-board-diagram.png" alt="Top view of the level shifting board with numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:11.1%;top:43.6%" aria-label="1: Host socket (J1, Y-A)">1<span class="xb-pop"><b>Host socket (J1, Y-A)</b> — the 3.3&nbsp;V side: host rails, signals A1 to A7 and ground.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-2" style="left:88.8%;top:43.6%" aria-label="2: Peripheral socket (J2, Y-B)">2<span class="xb-pop"><b>Peripheral socket (J2, Y-B)</b> — signals B1 to B7, the two forwarded rails and ground.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:44.0%;top:74.9%" aria-label="3: Channel 1 translator (U1)">3<span class="xb-pop"><b>Channel 1 translator (U1)</b> — one SN74LVC1T45; U2 to U7 above it serve channels 2 to 7.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:58.7%;top:71.5%" aria-label="4: Channel 1 direction link (JP1)">4<span class="xb-pop"><b>Channel 1 direction link (JP1)</b> — pads 1&ndash;2 select A to B, pads 2&ndash;3 select B to A. JP2 to JP7 do the same for channels 2 to 7.</span></a>
      <a class="xb-mk xb-pl" href="#tour-5" style="left:21.2%;top:52.6%" aria-label="5: Protection arrays">5<span class="xb-pop"><b>Protection arrays</b> — TPD4E1U06 arrays: U10 and U11 on the A side, U8 and U9 on the B side.</span></a>
      <a class="xb-mk xb-pr" href="#tour-6" style="left:77.0%;top:88.0%" aria-label="6: External B supply (J3)">6<span class="xb-pop"><b>External B supply (J3)</b> — contact 1 positive, contact 2 ground; the silk reads EXT VB 1.9&ndash;5.5V.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:59.2%;top:89.0%" aria-label="7: B supply link (JP8)">7<span class="xb-pop"><b>B supply link (JP8)</b> — pads 1&ndash;2 feed the B side from host 5&nbsp;V, pads 2&ndash;3 from J3.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:33.3%;top:89.0%" aria-label="8: Forwarded 5 V link (JP9)">8<span class="xb-pop"><b>Forwarded 5 V link (JP9)</b> — passes host 5&nbsp;V to J2 contact 2. Cut it if the peripheral has its own 5&nbsp;V.</span></a>
      <a class="xb-mk" href="#tour-9" style="left:46.2%;top:89.0%" aria-label="9: Forwarded 3.3 V link (JP10)">9<span class="xb-pop"><b>Forwarded 3.3 V link (JP10)</b> — passes host 3.3&nbsp;V to J2 contact 1.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host socket (J1, Y-A)</b> — the 3.3&nbsp;V side: host rails, signals A1 to A7 and ground.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Peripheral socket (J2, Y-B)</b> — signals B1 to B7, the two forwarded rails and ground.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Channel 1 translator (U1)</b> — one <a href="/images/extensions/bidirectional-level-shifting-board/datasheets/sn74lvc1t45.pdf">SN74LVC1T45</a>; U2 to U7 above it serve channels 2 to 7.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Channel 1 direction link (JP1)</b> — pads 1&ndash;2 select A to B, pads 2&ndash;3 select B to A. JP2 to JP7 do the same for channels 2 to 7.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Protection arrays</b> — <a href="/images/extensions/bidirectional-level-shifting-board/datasheets/tpd4e1u06.pdf">TPD4E1U06</a> arrays: U10 and U11 on the A side, U8 and U9 on the B side.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>External B supply (J3)</b> — contact 1 positive, contact 2 ground; the silk reads EXT VB 1.9&ndash;5.5V.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>B supply link (JP8)</b> — pads 1&ndash;2 feed the B side from host 5&nbsp;V, pads 2&ndash;3 from J3.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Forwarded 5 V link (JP9)</b> — passes host 5&nbsp;V to J2 contact 2. Cut it if the peripheral has its own 5&nbsp;V.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Forwarded 3.3 V link (JP10)</b> — passes host 3.3&nbsp;V to J2 contact 1.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1: host side

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span> host</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span> host</td></tr>
    <tr><td>3 to 9</td><td><span class="xb-pill xb-p-sig">A1 to A7</span> channels 1 to 7, host side</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J2: peripheral side

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span> forwarded to the peripheral through JP10</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span> forwarded to the peripheral through JP9</td></tr>
    <tr><td>3 to 9</td><td><span class="xb-pill xb-p-sig">B1 to B7</span> channels 1 to 7, peripheral side</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J3: external B supply

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Positive supply, 1.9 to 5.5&nbsp;V</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Solder links

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>Effect</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>JP1 to JP7</td><td>Direction of channels 1 to 7: 1&ndash;2 A to B, 2&ndash;3 B to A</td><td>1&ndash;2 bridged</td></tr>
    <tr><td>JP8</td><td>B-side supply: 1&ndash;2 host 5&nbsp;V, 2&ndash;3 external J3</td><td>1&ndash;2 bridged</td></tr>
    <tr><td>JP9</td><td>Forwarded 5&nbsp;V to J2 contact 2</td><td>Bridged (cut to separate)</td></tr>
    <tr><td>JP10</td><td>Forwarded 3.3&nbsp;V to J2 contact 1</td><td>Bridged (cut to separate)</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

On a three-pad link, remove the existing bridge before bridging the other side; joining all three pads connects the two choices together.



## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>With JP1 and JP8 bridged 1&ndash;2 for the example below.</span></div>
  <div class="xb-card"><b>Six leads</b><span>Four from the Prime GF header to J1, two from J2 to a meter.</span></div>
  <div class="xb-card"><b>A multimeter</b><span>DC volts, high input impedance (not a low-impedance mode).</span></div>
  <div class="xb-card"><b>For your peripheral</b><span>Its supply voltage, input thresholds and signal rate.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

This first test translates one 3.3&nbsp;V output of the Prime to the 5&nbsp;V side and reads it with a meter. No load is connected.

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Check the links with the power off</h3>
    <p>JP1 bridges 1&ndash;2 (A to B) and JP8 bridges 1&ndash;2 (B supply from host 5&nbsp;V). Leave J3 empty.</p>
  </li>
  <li class="xb-step">
    <h3>Wire the host side</h3>
    <p>Connect Prime GF/J37 to J1 with four leads: 1&rarr;1 (3.3&nbsp;V), 2&rarr;2 (5&nbsp;V), 3&rarr;3 (PB1 to A1) and 10&rarr;10 (ground). Check the viewing side and ribbon stripe of your plug.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the meter</h3>
    <p>Positive probe on J2 contact 3 (B1), common on J2 contact 10. J2 contacts 1 and 2 carry the forwarded rails: leave them unconnected. Never drive B1 while JP1 selects A to B.</p>
  </li>
  <li class="xb-step">
    <h3>Switch the output</h3>
    <p>Add the configuration below, then send <code>M43.17</code>, <code>M42.17</code> and <code>M43.17</code> again, reading B1 each time.</p>
    <p class="xb-expect">Near 0&nbsp;V after M43.17 and near the 5&nbsp;V rail voltage after M42.17.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Use a signal through the board</td><td><a href="/switch">Switch</a>, digital output</td><td><a href="#config-main">Setup</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Setup {#config-main}

A level shifter needs no driver: configure the controller pin for what it does. For the test above, reserve PB1 and check that nothing else uses M42.17 or M43.17.

```ini
[switch]
level_test.enable = true
level_test.output_pin = PB1
level_test.output_type = digital
level_test.input_on_command = M42
level_test.input_off_command = M43
level_test.subcode = 17
level_test.startup_state = false
level_test.halt_set_to = false
```

The [switch module](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/switch/Switch.cpp) starts this output LOW and returns it LOW on a software halt. That is not a hardware safety function, and it does not define the level during reset or power-up.

## How it works {#how-it-works}

Each <a href="/images/extensions/bidirectional-level-shifting-board/datasheets/sn74lvc1t45.pdf">SN74LVC1T45</a> has its A side powered from host 3.3&nbsp;V and its B side from the B supply, so each side switches at its own voltage. The direction pin is tied to 3.3&nbsp;V (A to B) or to ground (B to A) by the channel&rsquo;s link. The board silk gives the intended working envelope between 3.3&nbsp;V and the B supply: push-pull signals up to 20&nbsp;MHz over at most 150&nbsp;mm and 30&nbsp;pF.

For B to A channels the driving device must reach at least 0.7 times the B supply for a high level: with a 5&nbsp;V B supply that is 3.5&nbsp;V, so TTL-level and open-drain outputs are not suitable.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>B output stays low</td><td>The direction link of that channel, the B supply (JP8, and J3 if selected) and the ground connection.</td></tr>
    <tr><td>A high level is not seen on a B to A channel</td><td>The driver must reach 0.7 &times; the B supply.</td></tr>
    <tr><td>I2C does not work</td><td>The board does not translate open-drain buses.</td></tr>
    <tr><td>Peripheral 5 V fights the host 5 V</td><td>Cut JP9 when the peripheral has its own 5&nbsp;V.</td></tr>
    <tr><td>Fast signals are distorted</td><td>Shorten the cable and reduce the capacitance; stay within 20&nbsp;MHz, 150&nbsp;mm and 30&nbsp;pF.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/bidirectional-level-shifting-board/v17/bidirectional-level-shifting-board-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/bidirectional-level-shifting-board/v17/bidirectional-level-shifting-board-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/bidirectional-level-shifting-board/v17/bidirectional-level-shifting-board-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-ls-mount-t">
  <title id="xb-ls-mount-t">Mounting drawing of the ls, component side: outline 52 by 39.2 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="254.5" y="78.0" width="451.0" height="340.0" rx="8.7" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M254.5 56H705.5"/><path d="M254.5 50V62"/><path d="M705.5 50V62"/><path d="M731.5 78.0V418.0"/><path d="M725.5 78.0h12"/><path d="M725.5 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">52</text>
  <text x="743.5" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">39.2</text>
  <circle cx="254.5" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="242.5" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M196.5 104.0h30" fill="none"/><path d="M230.5 104.0l-8 -4v8z"/><path d="M196.5 104.0v30" fill="none"/><path d="M196.5 138.0l-4 -8h8z"/></g>
  <text x="234.5" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="192.5" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="306.5" cy="138.7" r="13.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M288.7 138.7h35.8M306.5 120.8v35.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="292.7" y="172.6" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  6.00, 7.00</text>
  <circle cx="653.5" cy="138.7" r="13.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M635.6 138.7h35.8M653.5 120.8v35.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="667.3" y="172.6" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  46.00, 7.00</text>
  <circle cx="306.5" cy="312.2" r="13.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M288.7 312.2h35.8M306.5 294.3v35.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="292.7" y="288.3" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  6.00, 27.00</text>
  <circle cx="653.5" cy="312.2" r="13.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M635.6 312.2h35.8M653.5 294.3v35.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="667.3" y="288.3" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  46.00, 27.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 52 × 39.2&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>6.00</td><td>7.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>46.00</td><td>7.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>6.00</td><td>27.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>46.00</td><td>27.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Board values come from the silk screen and parts list; chip values come from the datasheet and apply to the chip alone.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>B-side supply</td><td>J3 / VCCB</td><td>1.9 V</td><td>—</td><td>5.5 V</td><td>Board silk: EXT VB 1.9&ndash;5.5V</td></tr>
    <tr><td>Translator supply range</td><td><a href="/images/extensions/bidirectional-level-shifting-board/datasheets/sn74lvc1t45.pdf">SN74LVC1T45</a></td><td>1.65 V</td><td>—</td><td>5.5 V</td><td>Datasheet</td></tr>
    <tr><td>Signal rate</td><td>3.3 V to B supply</td><td>—</td><td>—</td><td>20 MHz</td><td>Board silk, with 150 mm and 30 pF at most</td></tr>
    <tr><td>High input level, B to A</td><td>B1 to B7</td><td>0.7 × VCCB</td><td>—</td><td>—</td><td>Board silk and datasheet</td></tr>
    <tr><td>Output current</td><td><a href="/images/extensions/bidirectional-level-shifting-board/datasheets/sn74lvc1t45.pdf">SN74LVC1T45</a> output</td><td>—</td><td>—</td><td>±50 mA</td><td>Datasheet absolute maximum: a damage limit, not a working current</td></tr>
    <tr><td>Pull-down</td><td>Every signal</td><td>—</td><td>100 kΩ</td><td>—</td><td>Parts list</td></tr>
    <tr><td>ESD rating</td><td><a href="/images/extensions/bidirectional-level-shifting-board/datasheets/tpd4e1u06.pdf">TPD4E1U06</a> alone</td><td>—</td><td>—</td><td>±15 kV</td><td>Datasheet, IEC 61000-4-2 contact and air</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: datasheets {#datasheets}

The first page of each important chip&rsquo;s datasheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/bidirectional-level-shifting-board/datasheets/sn74lvc1t45.pdf"><img src="/images/extensions/bidirectional-level-shifting-board/datasheets/sn74lvc1t45-page1.png" alt="First page of the SN74LVC1T45 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/bidirectional-level-shifting-board/datasheets/sn74lvc1t45.pdf">SN74LVC1T45 single-bit dual-supply bus transceiver</a> — Texas Instruments, 42 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/bidirectional-level-shifting-board/datasheets/tpd4e1u06.pdf"><img src="/images/extensions/bidirectional-level-shifting-board/datasheets/tpd4e1u06-page1.png" alt="First page of the TPD4E1U06 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/bidirectional-level-shifting-board/datasheets/tpd4e1u06.pdf">TPD4E1U06 quad-channel ESD protection device</a> — Texas Instruments, 27 pages.</figcaption>
</figure>
{:/nomarkdown}


See all boards on the [extension boards](/extension-boards) page.
