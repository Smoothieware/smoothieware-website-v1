---
layout: default
title: "Debug Probe (Black Magic Probe clone)"
description: "A USB debug probe built on an STM32F103 for programming and debugging a controller over SWD or JTAG, with a 3.3 V UART: pinout, links and limits."
permalink: /extensions/debug-probe
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Sensors</p>
    <h1 id="debug-probe">Debug Probe (Black Magic Probe clone)</h1>
    <p class="xb-lead">A USB-C debug probe on an STM32F103 that connects a development computer to the debug interface of a controller, for programming and debugging firmware. It runs its own firmware and is not part of normal machine operation. It also has a separate 3.3&nbsp;V serial port.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/debug-probe/debug-probe-diagram.webp" alt="Top view of the debug probe board: a USB-C connector at the left, the processor in the middle and a ten-contact debug header at the right.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>STM32F103</b><span>runs the probe firmware</span></div>
  <div class="xb-stat"><b>USB 2.0</b><span>USB-C, 5&nbsp;V and data only</span></div>
  <div class="xb-stat"><b>10-pin</b><span>Cortex debug connector with a target reference input</span></div>
  <div class="xb-stat"><b>3 lights</b><span>ERR, RUN and UART</span></div>
  <div class="xb-stat"><b>Own firmware</b><span>built for this board</span></div>
  <div class="xb-stat"><b>56 × 30</b><span>millimetres, four M3 holes</span></div>
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
The probe needs firmware built for this exact board; a generic Black Magic image name does not establish the pin mappings. Do not connect it to a target without that firmware. The target reference contact is an input that senses the target&rsquo;s voltage, not a supply for the target. Keep the target powered separately, and do not assume a powered target and an unpowered probe, or the reverse, is harmless.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>Program and debug a controller over its serial-wire or JTAG debug interface from a computer</td></tr>
    <tr><td>Processor</td><td>STM32F103CBT6 with an 8&nbsp;MHz-class crystal; it runs the probe firmware</td></tr>
    <tr><td>USB</td><td>USB-C receptacle, USB 2.0 only, with a USBLC6-2 protection array. The probe takes its 5&nbsp;V from USB.</td></tr>
    <tr><td>Supply</td><td>An AP2112K-3.3 regulator makes the probe&rsquo;s own 3.3&nbsp;V</td></tr>
    <tr><td>Target side</td><td>An SN74AVC4T774 level translator adapts the debug lines to the target reference voltage; a TPD4E1U06 array clamps each side of the lines. Target reset uses a BSS138 pull-down with inverted sensing.</td></tr>
    <tr><td>Connectors</td><td>J2 10-contact Cortex debug (1.27&nbsp;mm), J3 three-contact serial port (2.54&nbsp;mm, 3.3&nbsp;V), J4 five-contact programming header for the probe itself (1.27&nbsp;mm)</td></tr>
    <tr><td>Button</td><td>SW1, labelled DFU, joined to a processor input</td></tr>
    <tr><td>Lights</td><td>Three: ERR (red), RUN (green), UART (amber); each has a cut link</td></tr>
    <tr><td>Test points</td><td>Seven: 3.3&nbsp;V, 5&nbsp;V, reference voltage, SWDIO, SWCLK and two grounds (not drawn in the top view)</td></tr>
    <tr><td>Size</td><td>56 &times; 30&nbsp;mm with four M3 mounting holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> through its J41 debug header</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side. The mounting holes, test points and solder links are not marked on the drawing.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/debug-probe/debug-probe-diagram.webp" alt="Top view of the debug probe board with thirteen numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:8.6%;top:49.8%" aria-label="1: USB-C connector">1<span class="xb-pop"><b>USB-C connector (J1)</b> — the USB 2.0 connection to the development computer. It gives 5&nbsp;V power and data only; the unused Type-C contacts add no power delivery.</span></a>
      <a class="xb-mk xb-pr" href="#tour-2" style="left:90%;top:51.5%" aria-label="2: target debug connector">2<span class="xb-pop"><b>Target debug connector (J2)</b> — a 10-contact 1.27&nbsp;mm Cortex debug header to the controller being debugged. Contact 1 is next to the white dot at the lower right. <i>See the pinout.</i></span></a>
      <a class="xb-mk" href="#tour-3" style="left:63.6%;top:89.2%" aria-label="3: UART header">3<span class="xb-pop"><b>UART header (J3)</b> — three 2.54&nbsp;mm holes: ground, transmit and receive of a fixed 3.3&nbsp;V serial port.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:35.9%;top:89.2%" aria-label="4: probe programming header">4<span class="xb-pop"><b>Probe programming header (J4)</b> — a five-contact 1.27&nbsp;mm header that programs the probe&rsquo;s own processor. It is not the target connector. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pl" href="#tour-5" style="left:22.5%;top:89.7%" aria-label="5: DFU button">5<span class="xb-pop"><b>DFU button (SW1)</b> — a push button labelled DFU. It is wired to a processor input, not to the boot pin, so pressing it does not by itself enter the ROM bootloader. It is not a machine stop.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:45.3%;top:49.3%" aria-label="6: probe processor">6<span class="xb-pop"><b>Probe processor (U1)</b> — an STM32F103CBT6 that runs the probe firmware and talks USB, the debug lines and the serial port.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:59.5%;top:23.3%" aria-label="7: level translator">7<span class="xb-pop"><b>Level translator (U2)</b> — an SN74AVC4T774 that adapts the processor&rsquo;s 3.3&nbsp;V to the target reference voltage on the debug lines.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-8" style="left:22.3%;top:49.5%" aria-label="8: USB protection">8<span class="xb-pop"><b>USB protection (U3)</b> — a USBLC6-2 array on the USB data lines.</span></a>
      <a class="xb-mk" href="#tour-9" style="left:31.7%;top:68.8%" aria-label="9: regulator">9<span class="xb-pop"><b>Regulator (U4)</b> — an AP2112K 3.3&nbsp;V regulator that makes the probe&rsquo;s own supply from the USB 5&nbsp;V.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-10" style="left:76.1%;top:45.8%" aria-label="10: debug line clamp">10<span class="xb-pop"><b>Debug line clamp (U5)</b> — a TPD4E1U06 array on the target SWDIO, SWO, TDI and SWCLK lines.</span></a>
      <a class="xb-mk xb-pr" href="#tour-11" style="left:76.1%;top:63.8%" aria-label="11: reset and UART clamp">11<span class="xb-pop"><b>Reset and serial clamp (U6)</b> — a TPD4E1U06 array on the target reset line, the serial lines and the target reference voltage.</span></a>
      <a class="xb-mk xb-pb" href="#tour-12" style="left:68.8%;top:46.3%" aria-label="12: reset transistors">12<span class="xb-pop"><b>Reset transistors (Q1, Q2)</b> — two BSS138 MOSFETs: one pulls the target reset low, the other senses it. The sense is inverted.</span></a>
      <a class="xb-mk xb-pb" href="#tour-13" style="left:32.5%;top:14.1%" aria-label="13: lights">13<span class="xb-pop"><b>Lights (D3, D2, D1)</b> — three small lights labelled ERR, RUN and UART at the top. <i>See the lights table.</i></span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>USB-C connector (J1)</b> — the USB 2.0 connection to the development computer. It gives 5&nbsp;V power and data only; the unused Type-C contacts add no power delivery.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Target debug connector (J2)</b> — a 10-contact 1.27&nbsp;mm Cortex debug header to the controller being debugged. Contact 1 is next to the white dot at the lower right. <i>See the pinout.</i></div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>UART header (J3)</b> — three 2.54&nbsp;mm holes: ground, transmit and receive of a fixed 3.3&nbsp;V serial port.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Probe programming header (J4)</b> — a five-contact 1.27&nbsp;mm header that programs the probe&rsquo;s own processor. It is not the target connector. <i>See the pinout.</i></div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>DFU button (SW1)</b> — a push button labelled DFU. It is wired to a processor input, not to the boot pin, so pressing it does not by itself enter the ROM bootloader. It is not a machine stop.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Probe processor (U1)</b> — an STM32F103CBT6 that runs the probe firmware and talks USB, the debug lines and the serial port.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Level translator (U2)</b> — an SN74AVC4T774 that adapts the processor&rsquo;s 3.3&nbsp;V to the target reference voltage on the debug lines.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>USB protection (U3)</b> — a USBLC6-2 array on the USB data lines.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Regulator (U4)</b> — an AP2112K 3.3&nbsp;V regulator that makes the probe&rsquo;s own supply from the USB 5&nbsp;V.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Debug line clamp (U5)</b> — a TPD4E1U06 array on the target SWDIO, SWO, TDI and SWCLK lines.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Reset and serial clamp (U6)</b> — a TPD4E1U06 array on the target reset line, the serial lines and the target reference voltage.</div></li>
    <li id="tour-12"><span class="xb-n">12</span><div><b>Reset transistors (Q1, Q2)</b> — two BSS138 MOSFETs: one pulls the target reset low, the other senses it. The sense is inverted.</div></li>
    <li id="tour-13"><span class="xb-n">13</span><div><b>Lights (D3, D2, D1)</b> — three small lights labelled ERR, RUN and UART at the top. <i>See the lights table.</i></div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J2: target debug connector (Cortex debug 10P)

Contact 1 is next to the white dot at the lower right of the connector in the tour. The two columns are the odd contacts and the even contacts, and the pins count along the connector.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Function</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">VTREF</span></td><td>Target reference voltage, an input that sets the translator&rsquo;s target side; not a supply</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-sig">SWDIO</span></td><td>Serial-wire data</td></tr>
    <tr><td>3, 5, 9</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Ground; connect all three</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">SWCLK</span></td><td>Serial-wire clock</td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">SWO / TDO</span></td><td>Trace output or JTAG data out</td></tr>
    <tr><td>7</td><td>Not connected</td><td>The key contact</td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">TDI</span></td><td>JTAG data in</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-sig">NRST</span></td><td>Target reset, driven low by the probe</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J3: serial port, and J4: probe programming

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Header</th><th>Contact</th><th>Function</th></tr></thead>
  <tbody>
    <tr><td rowspan="3">J3 UART 3V3</td><td>1</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-sig">TX</span> from the probe to the target</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">RX</span> from the target to the probe</td></tr>
    <tr><td rowspan="5">J4 PROG SWD</td><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-sig">SWDIO</span> of the probe&rsquo;s own processor</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">SWCLK</span> of the probe&rsquo;s own processor</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">NRST</span> of the probe&rsquo;s own processor</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

J3 contact 1 (ground) is the one marked 1 on the silk, at the left. J4 contact 1 is next to the white dot at its left end. The serial lines are fixed at 3.3&nbsp;V and are protected by the same clamp array as the reset line. J4 is only for recovering or programming the probe itself.

### Solder links and test points

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>Effect</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>JP1</td><td>Cut to disable the ERR light (D3)</td><td>Bridged</td></tr>
    <tr><td>JP2</td><td>Cut to disable the UART light (D1)</td><td>Bridged</td></tr>
    <tr><td>JP3</td><td>Cut to disable the RUN light (D2)</td><td>Bridged</td></tr>
  </tbody>
</table></div>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Test point</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>TP1</td><td>3.3&nbsp;V</td></tr>
    <tr><td>TP2, TP3</td><td>Ground</td></tr>
    <tr><td>TP4</td><td>USB 5&nbsp;V</td></tr>
    <tr><td>TP5</td><td>Target reference voltage</td></tr>
    <tr><td>TP6</td><td>SWDIO</td></tr>
    <tr><td>TP7</td><td>SWCLK</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>The debug probe.</span></div>
  <div class="xb-card"><b>Probe firmware</b><span>An image built for this exact board.</span></div>
  <div class="xb-card"><b>A debug cable</b><span>Wires or a ribbon from J2 to the target&rsquo;s debug header, checked by continuity.</span></div>
  <div class="xb-card"><b>A powered target</b><span>The controller needs its own supply; the probe does not power it.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Get matching firmware</h3>
    <p>The translator direction lines use PC15 and PA1 and the reset path uses an inverted sense. Use firmware built for this board; a generic Black Magic image name does not establish these mappings.</p>
  </li>
  <li class="xb-step">
    <h3>Wire the target</h3>
    <p>With both sides unpowered, connect the Prime&rsquo;s J41 debug header to J2 with same-numbered wires: contacts 1 (3.3&nbsp;V reference), 2 (SWDIO), 4 (SWCLK) and 10 (reset), and all three grounds 3, 5 and 9. Leave contact 6 (SWO), 8 (TDI) and 7 (key) unconnected. Check numbered continuity and the connector orientation first.</p>
    <p class="xb-expect">Check the mating cable orientation and continuity before powering either side.</p>
  </li>
  <li class="xb-step">
    <h3>Power the target, then the probe</h3>
    <p>Power the controller from its own supply, then plug the probe into the computer by USB-C. Check TP5 against the target&rsquo;s 3.3&nbsp;V.</p>
  </li>
  <li class="xb-step">
    <h3>Recovery of the probe</h3>
    <p>Use J4 only to recover or program the probe itself. The DFU button is joined to a processor input, not to the boot pin: recovery needs matching probe firmware, and pressing the button does not by itself enter the ROM bootloader.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Debug or flash the controller</td><td>Not applicable</td><td>Done from the computer through the probe firmware; the controller&rsquo;s configuration file is not involved</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

There is nothing to add to the controller&rsquo;s configuration: the probe talks to the controller&rsquo;s debug interface, not to Smoothieware. The debugger, the probe firmware image and the commands belong to the computer side, not to the controller&rsquo;s configuration.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 170" role="img" aria-labelledby="xb-how-t">
    <title id="xb-how-t">USB from the computer reaches the probe processor, whose debug lines pass a level translator and clamps to the target debug connector.</title>
    <g font-size="13" font-weight="700" text-anchor="middle" fill="#e6ebf2">
      <rect x="20" y="55" width="140" height="60" rx="8" fill="#1f2226" stroke="#dfe4ee"/><text x="90" y="80">USB-C</text><text x="90" y="100" font-weight="400" fill="#a9b4c2">J1, computer</text>
      <rect x="210" y="55" width="160" height="60" rx="8" fill="#212936" stroke="#6fe08a"/><text x="290" y="80">STM32F103</text><text x="290" y="100" font-weight="400" fill="#a9b4c2">probe firmware</text>
      <rect x="420" y="55" width="160" height="60" rx="8" fill="#212936" stroke="#5fb3ff"/><text x="500" y="80">Translator</text><text x="500" y="100" font-weight="400" fill="#a9b4c2">3.3 V to VTREF</text>
      <rect x="630" y="55" width="150" height="60" rx="8" fill="#212936" stroke="#e0a877"/><text x="705" y="80">Clamps</text><text x="705" y="100" font-weight="400" fill="#a9b4c2">TPD4E1U06</text>
      <rect x="830" y="55" width="150" height="60" rx="8" fill="#1f2226" stroke="#dfe4ee"/><text x="905" y="80">J2</text><text x="905" y="100" font-weight="400" fill="#a9b4c2">target</text>
    </g>
    <g stroke-width="3" fill="none" stroke="#a9b4c2"><path d="M160 85H210"/><path d="M370 85H420"/><path d="M580 85H630"/><path d="M780 85H830"/></g>
  </svg>
  </div>
  <figcaption>The probe processor translates the computer&rsquo;s commands into debug signals on the target.</figcaption>
</figure>
{:/nomarkdown}

The processor sets the direction of the data and clock translator lines itself, and the translator&rsquo;s target side follows the voltage that the target presents on the reference contact. Reset is an open pull-down: the processor drives a BSS138 to pull the target reset low and senses it through a second one with inverted logic. The USB-C connector gives 5&nbsp;V and USB 2.0 data only.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-red"></span>ERR (D3)</th><th><span class="xb-led xb-led-green"></span>RUN (D2)</th><th><span class="xb-led xb-led-amber"></span>UART (D1)</th></tr></thead>
  <tbody>
    <tr><td>Where</td><td>Top, left of the three</td><td>Top, middle</td><td>Top, right of the three</td></tr>
<tr><td>Lit means</td><td>Set by the probe firmware</td><td>Set by the probe firmware</td><td>Set by the probe firmware</td></tr>
    <tr><td>Disable it</td><td>Cut JP1</td><td>Cut JP3</td><td>Cut JP2</td></tr>
  </tbody>
</table></div>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Computer sees no device</td><td>The USB cable and the 3.3&nbsp;V at TP1; the probe firmware may be missing or wrong. Use J4 to program it.</td></tr>
    <tr><td>No target found</td><td>The target is powered, the reference TP5 shows its 3.3&nbsp;V, all three grounds are connected and contacts 2 and 4 are not swapped.</td></tr>
    <tr><td>Target held in reset</td><td>Contact 10 wiring; the reset path is inverted, so firmware for another board may drive it the wrong way.</td></tr>
    <tr><td>DFU button does nothing</td><td>It is not joined to the boot pin; see Get started.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/debug-probe/debug-probe-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram.</td></tr>
    <tr><td><a href="/images/extensions/debug-probe/debug-probe-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/debug-probe/debug-probe-diagram.webp">Board drawing (WebP)</a></td><td>The top view used on this page, at full resolution</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 461" role="img" aria-labelledby="xb-dp-mount-t">
  <title id="xb-dp-mount-t">Mounting drawing of the debug probe, component side: outline 56 by 30 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="180.0" y="78.0" width="600.0" height="321.4" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M180.0 56H780.0"/><path d="M180.0 50V62"/><path d="M780.0 50V62"/><path d="M806.0 78.0V399.4"/><path d="M800.0 78.0h12"/><path d="M800.0 399.4h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">56</text>
  <text x="818.0" y="243.7" font-size="15" font-weight="700" fill="#e6ebf2">30</text>
  <circle cx="180.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="168.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M122.0 104.0h30" fill="none"/><path d="M156.0 104.0l-8 -4v8z"/><path d="M122.0 104.0v30" fill="none"/><path d="M122.0 138.0l-4 -8h8z"/></g>
  <text x="160.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="118.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="233.6" cy="131.6" r="17.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M212.4 131.6h42.3M233.6 110.4v42.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="216.4" y="168.7" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.00</text>
  <circle cx="662.1" cy="131.6" r="17.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M641.0 131.6h42.3M662.1 110.4v42.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="679.3" y="168.7" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  45.00, 5.00</text>
  <circle cx="233.6" cy="345.9" r="17.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M212.4 345.9h42.3M233.6 324.7v42.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="216.4" y="318.7" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 25.00</text>
  <circle cx="662.1" cy="345.9" r="17.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M641.0 345.9h42.3M662.1 324.7v42.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="679.3" y="318.7" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  45.00, 25.00</text>
  <text x="480.0" y="429.4" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 56 × 30&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>45.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>5.00</td><td>25.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>45.00</td><td>25.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>

{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Design values and parts-list values, as the last column says.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>USB supply</td><td>J1</td><td>—</td><td>5 V</td><td>—</td><td>USB 2.0 host</td></tr>
    <tr><td>Probe logic</td><td>U1, U4</td><td>—</td><td>3.3 V</td><td>—</td><td>AP2112K-3.3 regulator output</td></tr>
    <tr><td>Target reference</td><td>J2 contact 1</td><td>—</td><td>Target&rsquo;s own level</td><td>—</td><td>Input only; the translator range is in its data sheet, not restated here</td></tr>
    <tr><td>Serial port level</td><td>J3</td><td>—</td><td>3.3 V</td><td>—</td><td>Fixed by design</td></tr>
    <tr><td>Series resistance on lines</td><td>Debug lines</td><td>—</td><td>33 &Omega;</td><td>—</td><td>Parts list (four 33&nbsp;&Omega; resistors)</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Prime debug header J41

Connect to the Prime&rsquo;s J41 debug header: contacts 1, 2, 4 and 10 as the 3.3&nbsp;V reference, data, clock and reset, and 3, 5 and 9 as ground. Verify numbered continuity with the power removed.

See all boards on the [extension boards](/extension-boards) page.
