---
layout: default
title: "Additional general purpose outputs breakout / Servo board"
description: "Seven buffered 3.3 V or 5 V outputs on three-pin headers, usable for servo-style pulses, relay inputs and driver logic: pinout, links, a pulse check and limits."
permalink: /extensions/general-purpose-output-servo-board
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Motors and outputs</p>
    <h1 id="general-purpose-output-servo-board">Additional general purpose outputs breakout / Servo board</h1>
    <p class="xb-lead">Seven buffered outputs on three-pin ground, power and signal headers. Each channel follows its own host input through a UCC27524A driver and a fused supply branch. Smoothieware generates the level or pulse train; this board supplies the output stage. Typical uses are servo-style pulse inputs, solid-state relay control inputs and external-driver logic, once their voltage and current needs have been checked.</p>
    <p class="xb-badge">Design candidate · revision v18 · unqualified study · not yet built or tested</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/general-purpose-output-servo-board/general-purpose-output-servo-board-diagram.png" alt="Top view of the board: seven three-pin headers along the top edge with a numbered fuse below each, a ten-contact host socket at the left, a chain socket at the right, four driver chips in the middle and a green two-way terminal at the lower left.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>7 channels</b><span>one three-pin header each</span></div>
  <div class="xb-stat"><b>UCC27524A</b><span>four dual drivers</span></div>
  <div class="xb-stat"><b>1.1 A hold</b><span>fuse in every channel supply</span></div>
  <div class="xb-stat"><b>0.12 A total</b><span>silk value for host 5&nbsp;V signal supply</span></div>
  <div class="xb-stat"><b>8 lights</b><span>seven outputs and connector power</span></div>
  <div class="xb-stat"><b>72 × 63</b><span>millimetres, four M3 holes</span></div>
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
  This is an unqualified design study that has not been built or tested, and no servo or other load has been demonstrated with it. A servo&rsquo;s supply voltage and its signal-input tolerance are separate requirements, and changing JP2 changes the driven signal amplitude. The silk says no hot-plug: power off first.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>Buffer seven controller outputs onto three-pin ground, power and signal headers</td></tr>
    <tr><td>Drivers</td><td>Four UCC27524A dual drivers: channels 1 and 2 (U1), 3 and 4 (U2), 5 and 6 (U3), 7 and a spare (U4)</td></tr>
    <tr><td>Host interface</td><td>J1, a ten-contact Gadgeteer socket: host 3.3&nbsp;V and 5&nbsp;V, seven requests IN1 to IN7, ground. J2 chains the raw requests and linked rails on.</td></tr>
    <tr><td>Outputs</td><td>J3 to J9, channels 1 to 7: ground, channel supply, driven signal</td></tr>
    <tr><td>Channel supply</td><td>Chosen by JP1 between protected external power (J10) and protected host power; each branch has a 1.1&nbsp;A hold fuse (F3 to F9)</td></tr>
    <tr><td>Driver supply</td><td>Chosen by JP2 between protected host power and connector power. The silk reads SIG: HOST 5V 0.12A TOTAL.</td></tr>
    <tr><td>External power</td><td>J10, 5 to 6&nbsp;V on the silk (5 to 12&nbsp;V for the 12&nbsp;V class), through a reverse-polarity transistor, a 6&nbsp;V-class surge diode (SMBJ6.0A) and an LTC4368 protection controller</td></tr>
    <tr><td>Lights</td><td>Seven output-high lights and a connector-power light</td></tr>
    <tr><td>Size</td><td>72 &times; 63&nbsp;mm with four 3.2&nbsp;mm holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> through the <a href="/extensions/raw-pins-screw-terminal-breakout">screw-terminal breakout</a></td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix. The schematic title block reads v10, the PCB title block v17 and the silk V18; the page documents the v18 package.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side. The mounting holes, J4 to J8, most small parts and the rear test pads are not marked.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/general-purpose-output-servo-board/general-purpose-output-servo-board-diagram.png" alt="Top view of the general purpose outputs servo board with ten numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:9%;top:32.7%" aria-label="1: host socket">1<span class="xb-pop"><b>Host socket (J1)</b> — a ten-contact socket (Gadgeteer): host 3.3&nbsp;V and 5&nbsp;V, seven requests (contacts 3 to 9) and ground. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-2" style="left:91.5%;top:32.7%" aria-label="2: chain socket">2<span class="xb-pop"><b>Chain socket (J2)</b> — a second ten-contact socket carrying the raw host requests and linked rails on to another board, not the seven buffered outputs. Its links JP11 to JP17 are open on the silk.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-3" style="left:20.8%;top:10%" aria-label="3: channel 1 output">3<span class="xb-pop"><b>Channel 1 output (J3)</b> — a three-pin header, silk 1:GND 2:VSRV1 3:OUT1. Pin 2 is the channel supply, pin 3 the driven signal.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-4" style="left:79.2%;top:10%" aria-label="4: channel 7 output">4<span class="xb-pop"><b>Channel 7 output (J9)</b> — the seventh output, same order: ground, channel supply, signal. J4 to J8 are channels 2 to 6.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-5" style="left:22.5%;top:17.5%" aria-label="5: channel fuses">5<span class="xb-pop"><b>Channel fuses (F3 to F9)</b> — seven 1.1&nbsp;A hold fuses, one in each channel supply branch, drawn as the numbered blocks 1 to 7.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-6" style="left:23%;top:31%" aria-label="6: output lights">6<span class="xb-pop"><b>Output lights (D11 to D17)</b> — green lights labelled OUT 1 HIGH to OUT 7 HIGH, one per channel, lit while that output is high.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-7" style="left:22.5%;top:47.6%" aria-label="7: drivers">7<span class="xb-pop"><b>Output drivers (U1 to U4)</b> — four UCC27524A dual drivers: U1 channels 1 and 2, U2 channels 3 and 4, U3 channels 5 and 6, U4 channel 7 and a spare.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:66%;top:68.5%" aria-label="8: supply selectors">8<span class="xb-pop"><b>Supply selectors (JP1, JP2)</b> — three-way solder links: JP1 chooses the output connectors&rsquo; power rail (external or host), JP2 the drivers&rsquo; supply (host or connector). Both are bridged 1&ndash;2 as shipped.</span></a>
      <a class="xb-mk xb-pl" href="#tour-9" style="left:21%;top:91.5%" aria-label="9: external power terminal">9<span class="xb-pop"><b>External power terminal (J10)</b> — a two-way screw terminal for external servo power: contact 1 positive, contact 2 ground. The silk reads 5 to 6&nbsp;V (5 to 12&nbsp;V for the 12&nbsp;V class).</span></a>
      <a class="xb-mk" href="#tour-10" style="left:49%;top:88%" aria-label="10: protection stage">10<span class="xb-pop"><b>Connector-power protection (Q1, D1, UF1)</b> — a reverse-polarity transistor, a 6&nbsp;V-class surge diode and a protection controller (LTC4368) in the external power path. The CONN PWR light shows connector power.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host socket (J1)</b> — a ten-contact socket (Gadgeteer): host 3.3&nbsp;V and 5&nbsp;V, seven requests (contacts 3 to 9) and ground. <i>See the pinout.</i></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket (J2)</b> — a second ten-contact socket carrying the raw host requests and linked rails on to another board, not the seven buffered outputs. Its links JP11 to JP17 are open on the silk.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Channel 1 output (J3)</b> — a three-pin header, silk 1:GND 2:VSRV1 3:OUT1. Pin 2 is the channel supply, pin 3 the driven signal.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Channel 7 output (J9)</b> — the seventh output, same order: ground, channel supply, signal. J4 to J8 are channels 2 to 6.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Channel fuses (F3 to F9)</b> — seven 1.1&nbsp;A hold fuses, one in each channel supply branch, drawn as the numbered blocks 1 to 7.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Output lights (D11 to D17)</b> — green lights labelled OUT 1 HIGH to OUT 7 HIGH, one per channel, lit while that output is high.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Output drivers (U1 to U4)</b> — four UCC27524A dual drivers: U1 channels 1 and 2, U2 channels 3 and 4, U3 channels 5 and 6, U4 channel 7 and a spare.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Supply selectors (JP1, JP2)</b> — three-way solder links: JP1 chooses the output connectors&rsquo; power rail (external or host), JP2 the drivers&rsquo; supply (host or connector). Both are bridged 1&ndash;2 as shipped.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>External power terminal (J10)</b> — a two-way screw terminal for external servo power: contact 1 positive, contact 2 ground. The silk reads 5 to 6&nbsp;V (5 to 12&nbsp;V for the 12&nbsp;V class).</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Connector-power protection (Q1, D1, UF1)</b> — a reverse-polarity transistor, a 6&nbsp;V-class surge diode and a protection controller (LTC4368) in the external power path. The CONN PWR light shows connector power.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1: host socket

Contact 1 is at the dot marked on the socket; the odd contacts are in one row.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span> host</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span> host</td></tr>
    <tr><td>3 to 9</td><td><span class="xb-pill xb-p-sig">IN1 to IN7</span> requests for channels 1 to 7</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J3 to J9: output headers, J10: external power

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Connector</th><th>Pin 1</th><th>Pin 2</th><th>Pin 3</th></tr></thead>
  <tbody>
    <tr><td>J3 to J9 (channels 1 to 7)</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Channel supply (fused)</td><td><span class="xb-pill xb-p-sig">OUT</span> driven signal</td></tr>
    <tr><td>J10 external power</td><td>Positive</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Solder links

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>Effect</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>JP1 (CONN_PWR)</td><td>Output connector power: pad 1 external, pad 3 host fused, to the common pad 2</td><td>Pads 1 and 2 bridged: external power</td></tr>
    <tr><td>JP2 (SIG_VDD)</td><td>Driver supply: pad 1 host fused, pad 3 connector power</td><td>Pads 1 and 2 bridged: host power</td></tr>
    <tr><td>JP11 to JP17</td><td>Chain links on J2</td><td>Open, as the silk says (OPEN: JP11&ndash;17)</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

To select pads 2&ndash;3 on JP1 or JP2, remove the 1&ndash;2 bridge first; bridging all three pads joins the sources. Inspect the actual bridges before relying on this table. The board has further links (JP18 to JP27) whose roles are not described on this page; the schematic shows them.

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>An unqualified design study, not yet built.</span></div>
  <div class="xb-card"><b>A screw-terminal breakout</b><span>For the contact remapping from the Prime header.</span></div>
  <div class="xb-card"><b>A ten-core ribbon</b><span>Checked core by core for continuity and isolation.</span></div>
  <div class="xb-card"><b>A pulse instrument</b><span>High impedance, with a probe rated for the driver supply.</span></div>
  <div class="xb-card"><b>For a load</b><span>The exact signal tolerance, supply range and startup or stall current of the servo or device.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

Start with the no-servo pulse check: it exercises channel 1 through the normal host-powered driver path, with nothing attached to the output but an instrument.

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Connect with the power removed</h3>
    <p>Run the ten-core ribbon from the Prime GC/J34 position <i>n</i> to breakout J1 position <i>n</i> for all ten positions, then check continuity and isolation of every core. The red edge in the drawing is the proposed pin-one side; it does not establish the connector&rsquo;s real keying.</p>
    <p class="xb-expect">The Prime timer output on contact 6 reaches IN1 (board J1 contact 3) through the breakout&rsquo;s remapping. A same-numbered ribbon straight to the board would send it to channel 4 instead.</p>
  </li>
  <li class="xb-step">
    <h3>Check the links and leave the rest alone</h3>
    <p>Keep JP2 pads 1&ndash;2 (host power to the drivers). Leave JP1 unchanged, J10 unpowered, J2 and all rear test pads untouched and outputs J4 to J9 disconnected.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the instrument to channel 1</h3>
    <p>Connect J3 pin 3 to the instrument input and J3 pin 1 to its reference. Leave J3 pin 2 (peripheral power) disconnected. No servo or other load is attached.</p>
  </li>
  <li class="xb-step">
    <h3>Send the commands</h3>
    <p>Use the configuration below, then <code>M281.18</code>, <code>M280.18 P1500</code> and <code>M281.18</code>, measuring each state.</p>
    <p class="xb-expect">Nominal 1500&nbsp;&micro;s HIGH pulses every 20&nbsp;ms, with the output LOW after <code>M281.18</code>.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Servo-style pulses on channel 1</td><td>Switch with a hardware PWM output</td><td>Below</td></tr>
    <tr><td>A plain on or off level</td><td>Switch</td><td>Use a digital output type instead of <code>hwpwm</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

This example is checked against the pinned SmoothieV2 switch and timer sources (revision 2a21c0108b1d095ecd8b2b9358e94055f053c003) but has not been tested on an installed controller. It reserves <code>PWM2_1</code> (PI5) and the timer it shares; check that allocation against the rest of your configuration.

```ini
[pwm2]
frequency = 50

[switch]
pulse_bench.enable = true
pulse_bench.output_pin = PWM2_1
pulse_bench.output_type = hwpwm
pulse_bench.input_on_command = M280
pulse_bench.input_off_command = M281
pulse_bench.subcode = 18
pulse_bench.startup_state = false
pulse_bench.startup_value = 0
pulse_bench.default_on_value = 7.5
pulse_bench.halt_set_to = false
pulse_bench.ignore_on_halt = false
```

`M280.18 S7.5` requests the equivalent 7.5&nbsp;% duty at 50&nbsp;Hz; send either <code>P</code> or <code>S</code>, and <code>S</code> wins if both are given. Neither is an angle. The configuration does not establish the waveform during reset, boot or power sequencing; measure those separately. The seven buffered channels do not mean seven hardware-PWM allocations are available.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path of one channel">
  <svg viewBox="0 0 1000 170" role="img" aria-labelledby="xb-how-t">
    <title id="xb-how-t">A host request on J1 enters a UCC27524A driver whose supply is chosen by JP2, and the driven signal leaves on the channel&rsquo;s output header; the channel supply, chosen by JP1 and passed through a fuse, reaches pin 2 of the same header.</title>
    <g font-size="13" font-weight="700" text-anchor="middle" fill="#e6ebf2">
      <rect x="10" y="30" width="170" height="60" rx="8" fill="#1f2226" stroke="#e0a877"/><text x="95" y="55">J1 contact 3 to 9</text><text x="95" y="75" font-weight="400" fill="#a9b4c2">host request</text>
      <rect x="270" y="30" width="190" height="60" rx="8" fill="#212936" stroke="#6fe08a"/><text x="365" y="55">UCC27524A</text><text x="365" y="75" font-weight="400" fill="#a9b4c2">supply set by JP2</text>
      <rect x="550" y="30" width="190" height="60" rx="8" fill="#1f2226" stroke="#e0a877"/><text x="645" y="55">Output header</text><text x="645" y="75" font-weight="400" fill="#a9b4c2">pin 3 signal</text>
      <rect x="270" y="110" width="190" height="50" rx="8" fill="#212936" stroke="#6fe08a"/><text x="365" y="132">JP1, then 1.1 A fuse</text>
    </g>
    <g stroke-width="3" fill="none" stroke="#a9b4c2"><path d="M180 60H270"/><path d="M460 60H550"/><path d="M460 135H645V90"/></g>
    <text x="800" y="140" font-size="12" fill="#a9b4c2">channel supply to pin 2</text>
  </svg>
  </div>
  <figcaption>Two independent selectors: JP1 for the connector power, JP2 for the drivers.</figcaption>
</figure>
{:/nomarkdown}

The board adds no pulse timing of its own: the controller generates the pulse train and each driver repeats it at the driver supply&rsquo;s voltage. A servo&rsquo;s supply and signal tolerances must both be met. The historical proposal of a 5 to 12&nbsp;V input and an output of at least 100&nbsp;mA is not a measured rating, and neither the host rails nor an output connector has a demonstrated servo startup or stall-current allowance here.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-green"></span>OUT 1 to 7 HIGH (D11 to D17)</th><th><span class="xb-led xb-led-green"></span>CONN PWR (D2)</th></tr></thead>
  <tbody>
    <tr><td>Where</td><td>Below the fuse row, labelled OUT n HIGH</td><td>Lower right, near J9</td></tr>
    <tr><td>Lit means</td><td>That channel&rsquo;s output is high</td><td>Connector power is present</td></tr>
  </tbody>
</table></div>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>No pulses on the instrument</td><td>JP2 (driver supply), the ribbon orientation and the core carrying contact 6, and the configuration above.</td></tr>
    <tr><td>Pulses on channel 4 instead of 1</td><td>A same-numbered ribbon without the breakout&rsquo;s remapping.</td></tr>
    <tr><td>Servo twitches or resets</td><td>Startup and stall current against the supply and the fuse; the board has no demonstrated allowance.</td></tr>
    <tr><td>Wrong signal amplitude</td><td>JP2: the driven signal takes the driver supply&rsquo;s voltage.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>Revision</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/general-purpose-output-servo-board/general-purpose-output-servo-board-schematic.pdf">Schematic (PDF)</a></td><td>v18</td><td>The complete circuit diagram. Its title block reads v10.</td></tr>
    <tr><td><a href="/images/extensions/general-purpose-output-servo-board/general-purpose-output-servo-board-bom.csv">Parts list (CSV)</a></td><td>v18</td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/general-purpose-output-servo-board/general-purpose-output-servo-board-diagram.png">Board drawing (SVG)</a></td><td>v18</td><td>The top view used on this page, at full resolution</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-gp-mount-t">
  <title id="xb-gp-mount-t">Mounting drawing of the General purpose outputs servo board, component side: outline 72 by 63 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="285.7" y="78.0" width="388.6" height="340.0" rx="10.8" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M285.7 56H674.3"/><path d="M285.7 50V62"/><path d="M674.3 50V62"/><path d="M700.3 78.0V418.0"/><path d="M694.3 78.0h12"/><path d="M694.3 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">72</text>
  <text x="712.3" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">63</text>
  <circle cx="285.7" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="273.7" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M227.7 104.0h30" fill="none"/><path d="M261.7 104.0l-8 -4v8z"/><path d="M227.7 104.0v30" fill="none"/><path d="M227.7 138.0l-4 -8h8z"/></g>
  <text x="265.7" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="223.7" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="318.1" cy="132.0" r="8.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M305.5 132.0h25.3M318.1 119.3v25.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="309.5" y="160.6" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  6.00, 10.00</text>
  <circle cx="641.9" cy="132.0" r="8.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M629.3 132.0h25.3M641.9 119.3v25.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="650.5" y="160.6" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  66.00, 10.00</text>
  <circle cx="318.1" cy="347.8" r="8.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M305.5 347.8h25.3M318.1 335.2v25.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="309.5" y="329.2" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  6.00, 50.00</text>
  <circle cx="641.9" cy="347.8" r="8.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M629.3 347.8h25.3M641.9 335.2v25.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="650.5" y="329.2" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  66.00, 50.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 72 × 63&nbsp;mm, corners rounded to a 2&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>6.00</td><td>10.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>66.00</td><td>10.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>6.00</td><td>50.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>66.00</td><td>50.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>

{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Every figure is a board silk value or a value from the parts list, as the last column says. None is a measurement on a built board. **Open** means not established.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>External power</td><td>J10</td><td>5 V</td><td>Open</td><td>6 V (12 V class: 12 V)</td><td>Silk: EXT + 5&ndash;6V, 12V class 5&ndash;12V; not a qualified rating</td></tr>
    <tr><td>Fuse per channel</td><td>F3 to F9</td><td>—</td><td>1.1 A hold</td><td>—</td><td>Parts list</td></tr>
    <tr><td>Surge diode</td><td>D1</td><td>—</td><td>SMBJ6.0A</td><td>—</td><td>Parts list (6 V class)</td></tr>
    <tr><td>Host 5 V for the signal supply</td><td>J1 contact 2</td><td>—</td><td>—</td><td>0.12 A total</td><td>Silk value (SIG: HOST 5V 0.12A TOTAL)</td></tr>
    <tr><td>Output signal level</td><td>J3 to J9 pin 3</td><td>Open</td><td>Driver supply</td><td>Open</td><td>Follows JP2; not measured</td></tr>
    <tr><td>Servo startup and stall current</td><td>J3 to J9 pin 2</td><td>Open</td><td>Open</td><td>Open</td><td>No allowance demonstrated</td></tr>
    <tr><td>Behaviour at reset, boot and power-up</td><td>Outputs</td><td>Open</td><td>Open</td><td>Open</td><td>Not established</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Prime headers

The pulse check above uses **Smoothieboard V2 P11 Prime** through the screw-terminal breakout. This is a candidate allocation from the source and is not verified on a built system: the Prime&rsquo;s physical connector carries a noted rail-position discrepancy, so check numbered continuity with the power removed.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Cable core</th><th>Prime GC/J34 signal</th><th>Breakout J3 field connection</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Limited 3.3 V</td><td>To board J1 contact 1</td></tr>
    <tr><td>2</td><td>Limited 5 V</td><td>To board J1 contact 2 (protected host driver feed)</td></tr>
    <tr><td>3, 4, 5</td><td>PD14, PD12, PD10</td><td>No field lead; insulate</td></tr>
    <tr><td>6</td><td>TIM8 channel 1 (PI5)</td><td>To board J1 contact 3, the IN1 request</td></tr>
    <tr><td>7, 8, 9</td><td>TIM8 channels 2, 3, 4</td><td>No field lead; insulate</td></tr>
    <tr><td>10</td><td>Circuit ground</td><td>To board J1 contact 10</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
