---
layout: default
title: "CPLD adapter"
description: "A Lattice MachXO2 CPLD between controller STEP/DIR/ENABLE signals and a 5 V logic receiver, programmable over JTAG."
permalink: /extensions/cpld-adapter
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Motors and outputs</p>
    <h1 id="cpld-adapter">CPLD adapter</h1>
    <p class="xb-lead">Put programmable logic between your controller and a motion-signal receiver. A <a href="/images/extensions/cpld-adapter/datasheets/machxo2.pdf">MachXO2</a> CPLD processes STEP, DIR and ENABLE, a watchdog supervises it, and buffered 5&nbsp;V outputs drive the receiver.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/cpld-adapter/v19/cpld-adapter-diagram.webp" alt="Top view of the CPLD adapter: the CPLD in the middle, a JTAG header at the top left, controller and field connectors along the bottom and four lights at the right.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b><a href="/images/extensions/cpld-adapter/datasheets/machxo2.pdf">MachXO2</a></b><span><a href="/images/extensions/cpld-adapter/datasheets/machxo2.pdf">LCMXO2-640HC</a></span></div>
  <div class="xb-stat"><b>50 MHz</b><span>oscillator</span></div>
  <div class="xb-stat"><b>5 V</b><span>logic outputs</span></div>
  <div class="xb-stat"><b>JTAG</b><span>ten-pin programming header</span></div>
  <div class="xb-stat"><b>Watchdog</b><span><a href="/images/extensions/cpld-adapter/datasheets/tps3823.pdf">TPS3823</a> supervisor</span></div>
  <div class="xb-stat"><b>64 × 39</b><span>millimetres, four M3 holes</span></div>
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
  Program the CPLD with your logic image before connecting a receiver. Outputs are 5&nbsp;V logic only: never 12 or 24&nbsp;V, motor coils or motor power. An unlit fault light does not mean the system is safe.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>Programmable conditioning of one axis of STEP, DIR and ENABLE</td></tr>
    <tr><td>Logic</td><td><a href="/images/extensions/cpld-adapter/datasheets/machxo2.pdf">LCMXO2-640HC</a> CPLD, 50&nbsp;MHz oscillator</td></tr>
    <tr><td>Supervision</td><td><a href="/images/extensions/cpld-adapter/datasheets/tps3823.pdf">TPS3823-33</a> reset and watchdog; <a href="/images/extensions/cpld-adapter/datasheets/sn74lvc1g10.pdf">SN74LVC1G10</a> output gate</td></tr>
    <tr><td>Outputs</td><td><a href="/images/extensions/cpld-adapter/datasheets/sn74lv4t125.pdf">SN74LV4T125</a> buffers at 5&nbsp;V with series resistors, three-state unless enabled</td></tr>
    <tr><td>Host</td><td>J1: STEP, DIR, ENABLE, fault return, two spare signals and a clock reference</td></tr>
    <tr><td>Field</td><td>J2: STEP, DIR, ENABLE (active low), fault input, ground</td></tr>
    <tr><td>Programming</td><td>J3, ten-pin JTAG header in the USB-Blaster pin order</td></tr>
    <tr><td>Size</td><td>64 &times; 39&nbsp;mm, four M3 holes</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/cpld-adapter/v19/cpld-adapter-diagram.webp" alt="Top view of the CPLD adapter with numbered markers explained in the list below.">
      <a class="xb-mk" href="#tour-1" style="left:25.7%;top:88.2%" aria-label="1: Controller connector (J1)">1<span class="xb-pop"><b>Controller connector (J1)</b> — power and signals to and from the controller.</span></a>
      <a class="xb-mk" href="#tour-2" style="left:41.8%;top:87.7%" aria-label="2: Field connector (J2)">2<span class="xb-pop"><b>Field connector (J2)</b> — 5&nbsp;V logic to the receiver.</span></a>
      <a class="xb-mk xb-pb" href="#tour-3" style="left:31.6%;top:19.0%" aria-label="3: JTAG header (J3)">3<span class="xb-pop"><b>JTAG header (J3)</b> — programs the CPLD.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:39.4%;top:48.7%" aria-label="4: CPLD (U1)">4<span class="xb-pop"><b>CPLD (U1)</b> — LCMXO2-640HC.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:60.6%;top:48.7%" aria-label="5: Output buffer (U2)">5<span class="xb-pop"><b>Output buffer (U2)</b> — SN74LV4T125.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:69.2%;top:58.1%" aria-label="6: Supervisor (U3)">6<span class="xb-pop"><b>Supervisor (U3)</b> — TPS3823-33 reset and watchdog.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:68.7%;top:48.1%" aria-label="7: Output gate (U4)">7<span class="xb-pop"><b>Output gate (U4)</b> — enables the buffer when reset is released, the CPLD reports running and the host requests enable.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-8" style="left:21.9%;top:37.7%" aria-label="8: Oscillator (Y1)">8<span class="xb-pop"><b>Oscillator (Y1)</b> — 50&nbsp;MHz.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-9" style="left:76.6%;top:27.5%" aria-label="9: Bypass request (JP1)">9<span class="xb-pop"><b>Bypass request (JP1)</b> — an input to the CPLD, open as delivered.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-10" style="left:86.0%;top:12.1%" aria-label="10: Lights">10<span class="xb-pop"><b>Lights</b> — power, output enabled, bypass and fault (D1 to D4).</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Controller connector (J1)</b> — power and signals to and from the controller.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Field connector (J2)</b> — 5&nbsp;V logic to the receiver.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>JTAG header (J3)</b> — programs the CPLD.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>CPLD (U1)</b> — <a href="/images/extensions/cpld-adapter/datasheets/machxo2.pdf">LCMXO2-640HC</a>.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Output buffer (U2)</b> — <a href="/images/extensions/cpld-adapter/datasheets/sn74lv4t125.pdf">SN74LV4T125</a>.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Supervisor (U3)</b> — <a href="/images/extensions/cpld-adapter/datasheets/tps3823.pdf">TPS3823-33</a> reset and watchdog.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Output gate (U4)</b> — enables the buffer when reset is released, the CPLD reports running and the host requests enable.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Oscillator (Y1)</b> — 50&nbsp;MHz.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Bypass request (JP1)</b> — an input to the CPLD, open as delivered.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Lights</b> — power, output enabled, bypass and fault (D1 to D4).</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

### Lights {#lights}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th>Lit means</th><th>Disable it</th></tr></thead>
  <tbody>
    <tr><td>D1, green</td><td>3.3&nbsp;V power</td><td>Cut JP2</td></tr>
    <tr><td>D2, green</td><td>Outputs enabled</td><td>Cut JP5</td></tr>
    <tr><td>D3, amber</td><td>Bypass</td><td>Cut JP3</td></tr>
    <tr><td>D4, red</td><td>Fault. Dark does not mean safe.</td><td>Cut JP4</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Pinout {#pinout}

### J1: controller

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">STEP_IN</span></td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">DIR_IN</span></td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">ENABLE_IN</span></td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">FAULT_OUT_N</span> low means fault</td></tr>
    <tr><td>7, 8</td><td><span class="xb-pill xb-p-sig">AUX0, AUX1</span></td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">CLKREF</span></td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J2: field

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-sig">STEP_OUT</span></td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">DIR_OUT</span></td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">ENABLE_OUT_N</span></td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">FAULT_IN_N</span></td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J3: JTAG

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-sig">TCK</span></td></tr>
    <tr><td>2, 10</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">TDO</span></td></tr>
    <tr><td>4</td><td>Target reference voltage</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">TMS</span></td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">TDI</span></td></tr>
    <tr><td>6 to 8</td><td>Not connected</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The pin order follows the USB-Blaster connector. That says nothing about software: use a programmer and tool chain that support Lattice <a href="/images/extensions/cpld-adapter/datasheets/machxo2.pdf">MachXO2</a> devices.

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>Built from the design files in Downloads</span></div>
  <div class="xb-card"><b>A logic design</b><span>Your own <a href="/images/extensions/cpld-adapter/datasheets/machxo2.pdf">MachXO2</a> image; the board is delivered without one.</span></div>
  <div class="xb-card"><b>A JTAG programmer</b><span>Supporting Lattice devices.</span></div>
  <div class="xb-card"><b>A 5 V logic receiver</b><span>High-impedance inputs.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

Program and check the board before it drives anything.

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Build your logic</h3>
    <p>Create the image with Lattice tools, including the watchdog output and the CPLD_RUN signal that the output gate needs.</p>
  </li>
  <li class="xb-step">
    <h3>Program with the field connector empty</h3>
    <p>Power the board and program it through J3.</p>
    <p class="xb-expect">The power light is on.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the controller</h3>
    <p>Wire J1 contacts 1, 2, 3, 4, 5, 6 and 10, for example to the Prime GF header (PB1 STEP, PJ4 DIR, PA4 ENABLE, PG0 fault).</p>
  </li>
  <li class="xb-step">
    <h3>Verify the outputs</h3>
    <p>Check J2 with an oscilloscope, including during reset and power-down, then connect the receiver.</p>
    <p class="xb-expect">No pulses appear while the output gate is disabled.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Send step signals through the CPLD</td><td>Motion axis, external driver</td><td><a href="#config-main">Setup</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Setup {#config-main}

The controller sees an ordinary external step driver: assign the chosen STEP, DIR and ENABLE pins to one motion axis. The configuration cannot create or change the CPLD&rsquo;s logic.

## How it works {#how-it-works}

The <a href="/images/extensions/cpld-adapter/datasheets/machxo2.pdf">MachXO2</a> receives the controller&rsquo;s signals and produces the outputs according to your image. The <a href="/images/extensions/cpld-adapter/datasheets/sn74lv4t125.pdf">SN74LV4T125</a> converts them to 5&nbsp;V. A <a href="/images/extensions/cpld-adapter/datasheets/tps3823.pdf">TPS3823</a> holds the CPLD in reset on low supply voltage or when the watchdog is not serviced, and a three-input gate keeps the outputs disabled unless the board is out of reset, the CPLD says it is running and the host requests enable. The output-enable line is pulled up to 5&nbsp;V while its driving gate runs from 3.3&nbsp;V.

JP1 only signals the CPLD; it does not create a wire around it.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Outputs stay off</td><td>Reset released, watchdog serviced, CPLD_RUN high and host enable asserted.</td></tr>
    <tr><td>Programmer finds nothing</td><td>Board powered, JTAG orientation and a Lattice-capable programmer.</td></tr>
    <tr><td>Receiver does not react</td><td>It must accept 5&nbsp;V logic without drawing significant current; opto inputs of many drivers need more.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/cpld-adapter/v19/cpld-adapter-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/cpld-adapter/v19/cpld-adapter-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/cpld-adapter/v19/cpld-adapter-diagram.webp">Board drawing (WebP)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-cp-mount-t">
  <title id="xb-cp-mount-t">Mounting drawing of the cp, component side: outline 64 by 39 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="201.0" y="78.0" width="557.9" height="340.0" rx="8.7" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M201.0 56H759.0"/><path d="M201.0 50V62"/><path d="M759.0 50V62"/><path d="M785.0 78.0V418.0"/><path d="M779.0 78.0h12"/><path d="M779.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">64</text>
  <text x="797.0" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">39</text>
  <circle cx="201.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="189.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M143.0 104.0h30" fill="none"/><path d="M177.0 104.0l-8 -4v8z"/><path d="M143.0 104.0v30" fill="none"/><path d="M143.0 138.0l-4 -8h8z"/></g>
  <text x="181.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="139.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="244.6" cy="147.7" r="13.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M226.7 147.7h35.9M244.6 129.8v35.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="230.7" y="181.7" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 8.00</text>
  <circle cx="593.3" cy="147.7" r="13.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M575.4 147.7h35.9M593.3 129.8v35.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="607.3" y="181.7" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  45.00, 8.00</text>
  <circle cx="244.6" cy="322.1" r="13.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M226.7 322.1h35.9M244.6 304.2v35.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="230.7" y="298.2" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 28.00</text>
  <circle cx="593.3" cy="322.1" r="13.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M575.4 322.1h35.9M593.3 304.2v35.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="607.3" y="298.2" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  45.00, 28.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 64 × 39&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>8.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>45.00</td><td>8.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>5.00</td><td>28.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>45.00</td><td>28.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Values come from the silk screen and parts list.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Output level</td><td>J2</td><td>—</td><td>5 V logic</td><td>—</td><td>Board silk</td></tr>
    <tr><td>Logic supply</td><td>J1 contact 1</td><td>—</td><td>3.3 V</td><td>—</td><td>Design</td></tr>
    <tr><td>Output supply</td><td>J1 contact 2</td><td>—</td><td>5 V</td><td>—</td><td>Design</td></tr>
    <tr><td>Clock</td><td>Y1</td><td>—</td><td>50 MHz</td><td>—</td><td>Parts list</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: datasheets {#datasheets}

The first page of each important chip&rsquo;s datasheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/cpld-adapter/datasheets/machxo2.pdf"><img src="/images/extensions/cpld-adapter/datasheets/machxo2-page1.png" alt="First page of the MachXO2 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/cpld-adapter/datasheets/machxo2.pdf">MachXO2 family data sheet</a> — Lattice Semiconductor, 126 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/cpld-adapter/datasheets/sn74lv4t125.pdf"><img src="/images/extensions/cpld-adapter/datasheets/sn74lv4t125-page1.png" alt="First page of the SN74LV4T125 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/cpld-adapter/datasheets/sn74lv4t125.pdf">SN74LV4T125 quadruple level-shifting buffer</a> — Texas Instruments, 24 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/cpld-adapter/datasheets/sn74lvc1g10.pdf"><img src="/images/extensions/cpld-adapter/datasheets/sn74lvc1g10-page1.png" alt="First page of the SN74LVC1G10 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/cpld-adapter/datasheets/sn74lvc1g10.pdf">SN74LVC1G10 single 3-input NAND gate</a> — Texas Instruments, 39 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/cpld-adapter/datasheets/tps3823.pdf"><img src="/images/extensions/cpld-adapter/datasheets/tps3823-page1.png" alt="First page of the TPS3823 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/cpld-adapter/datasheets/tps3823.pdf">TPS382x voltage monitor with watchdog timer</a> — Texas Instruments, 34 pages.</figcaption>
</figure>
{:/nomarkdown}


See all boards on the [extension boards](/extension-boards) page.
