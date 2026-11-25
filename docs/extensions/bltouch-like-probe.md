---
layout: default
title: "BLTouch-like probe"
description: "An experimental deployable probe board with a microcontroller, a Hall-sensed solenoid and a separate trigger output: pinout, limits and what is not established."
permalink: /extensions/bltouch-like-probe
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Probes</p>
    <h1 id="bltouch-like-probe">BLTouch-like probe</h1>
    <p class="xb-lead">An experimental board for a deployable, solenoid-driven probe. A small microcontroller is meant to deploy and retract the plunger, sense it with a Hall sensor and report a trigger on a separate open-drain output. Its firmware and pulse protocol are not established, so it is not a proven replacement for a commercial BLTouch.</p>
    <p class="xb-badge">Engineering candidate · revision v18 · not built, no firmware</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/bltouch-like-probe/bltouch-like-probe-diagram.png" alt="Top view of the BLTouch-like probe board: a 10-contact socket at the left, a large microcontroller in the middle and two cream-coloured connectors at the right.">
    <figcaption>Top view, drawn from the board&rsquo;s design files (revision v18). This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>STM32G030</b><span>local microcontroller; firmware not supplied</span></div>
  <div class="xb-stat"><b>5 V solenoid</b><span>low-side switched, with a current-limited supply and flyback diode</span></div>
  <div class="xb-stat"><b>Hall sensing</b><span>a DRV5055 linear sensor reads the plunger</span></div>
  <div class="xb-stat"><b>Open-drain trigger</b><span>separate probe output, with an optional 10&nbsp;k&Omega; pull-up link</span></div>
  <div class="xb-stat"><b>3 lights + 3 faults</b><span>power, alarm and active, plus three supply protection lights</span></div>
  <div class="xb-stat"><b>46 × 34</b><span>millimetres, two M3 mounting holes</span></div>
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
  <strong>This is an experimental design, not a usable probe.</strong> No microcontroller firmware, pulse protocol, solenoid part, plunger mechanics or repeatability figure is supplied, and nothing has been built. A matching connector shape does not make it a BLTouch replacement. Do not use it as the only protection against a collision.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>Experimental deployable Z probe: control input in, probe trigger out, local sensing of the plunger</td></tr>
    <tr><td>Microcontroller</td><td>STMicroelectronics STM32G030F6P6, programmed over a serial-wire header. No firmware image is supplied.</td></tr>
    <tr><td>Plunger sensing</td><td>Texas Instruments DRV5055A2 linear Hall sensor</td></tr>
    <tr><td>Solenoid drive</td><td>5&nbsp;V supply through a TPS2553 limiter with automatic recovery, an AO3400A low-side switch and a B5819W flyback diode. The solenoid itself is not specified.</td></tr>
    <tr><td>Probe output</td><td>BSS138 open-drain transistor on J3 and on J1 contact 3, with an optional 10&nbsp;k&Omega; pull-up (link SJ4)</td></tr>
    <tr><td>Supply protection</td><td>A TPS259631 electronic fuse, a TPS3700 over-voltage cut-off, a reverse-polarity transistor, an ideal-diode selector between the two 5&nbsp;V inputs, and a 5&nbsp;V TVS diode, with three fault lights</td></tr>
    <tr><td>Controller socket</td><td>One 10-contact Gadgeteer socket, P (Samtec SHF-105, 1.27&nbsp;mm)</td></tr>
    <tr><td>Other connectors</td><td>Servo-style 3-contact input (J2), probe output (J3), solenoid (J4), serial-wire header (J5); series not specified</td></tr>
    <tr><td>Size</td><td>46 &times; 34&nbsp;mm with two M3 holes and cable-tie holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a>, for observation only</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side. The solder links and the mounting holes are not individually marked.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/bltouch-like-probe/bltouch-like-probe-diagram.png" alt="Top view of the BLTouch-like probe board with fourteen numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pl" href="#tour-1" style="left:10.4%;top:60.6%" aria-label="1: host socket">1<span class="xb-pop"><b>Gadgeteer socket P (J1)</b> — the 10-contact socket to the controller. Contact 3 is the probe output, 6 the alarm, 7 the control request. <i>See the pinout.</i></span></a>
      <a class="xb-mk" href="#tour-2" style="left:70%;top:84%" aria-label="2: servo-style input">2<span class="xb-pop"><b>Servo-style input (J2)</b> — an alternative control input, ground / 5&nbsp;V / signal. Do not power the board from both J1 and J2 without a settled power-source arrangement.</span></a>
      <a class="xb-mk xb-pb" href="#tour-3" style="left:75.8%;top:14%" aria-label="3: probe output">3<span class="xb-pop"><b>Probe output (J3)</b> — the probe trigger output as signal and ground. It must be wired to a host input separately from the control cable.</span></a>
      <a class="xb-mk xb-pr" href="#tour-4" style="left:87%;top:87.8%" aria-label="4: solenoid connector">4<span class="xb-pop"><b>Solenoid connector (J4)</b> — 2 contacts: 1 is the switched low side, 2 is the solenoid 5&nbsp;V supply.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-5" style="left:93.2%;top:40%" aria-label="5: programming header">5<span class="xb-pop"><b>Programming header (J5)</b> — a 5-contact serial-wire header for the microcontroller: ground, clock, data, reset and 3.3&nbsp;V.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:30.8%;top:56%" aria-label="6: microcontroller">6<span class="xb-pop"><b>Microcontroller (U1)</b> — an STM32G030F6P6. The board has no stated firmware image, so what it does with the control request is not established.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:43.8%;top:58.3%" aria-label="7: Hall sensor">7<span class="xb-pop"><b>Hall sensor (U2)</b> — a DRV5055A2 linear Hall sensor read by the microcontroller to sense the plunger.</span></a>
      <a class="xb-mk xb-pr" href="#tour-8" style="left:84%;top:52%" aria-label="8: solenoid switch">8<span class="xb-pop"><b>Solenoid switch (Q1)</b> — an AO3400A MOSFET that switches the solenoid&rsquo;s low side.</span></a>
      <a class="xb-mk xb-pr" href="#tour-9" style="left:76.9%;top:56%" aria-label="9: flyback diode">9<span class="xb-pop"><b>Flyback diode (D2)</b> — a B5819W Schottky diode across the solenoid for the current when the switch turns off.</span></a>
      <a class="xb-mk xb-pb" href="#tour-10" style="left:60%;top:12.2%" aria-label="10: probe transistor">10<span class="xb-pop"><b>Probe output transistor (Q3)</b> — a BSS138 open-drain transistor that forms the probe output. A solder link adds a 10&nbsp;k&Omega; pull-up.</span></a>
      <a class="xb-mk xb-pb" href="#tour-11" style="left:66.9%;top:47.4%" aria-label="11: coil current limit">11<span class="xb-pop"><b>Solenoid supply limiter (U4)</b> — a TPS2553 switch with an automatic-recovery current limit in the solenoid 5&nbsp;V path.</span></a>
      <a class="xb-mk" href="#tour-12" style="left:50.5%;top:76.9%" aria-label="12: 3.3 V regulator">12<span class="xb-pop"><b>3.3 V regulator (U3)</b> — an AP2112K-3.3 regulator for the microcontroller and the Hall sensor.</span></a>
      <a class="xb-mk xb-pb" href="#tour-13" style="left:35.4%;top:11.1%" aria-label="13: status lights">13<span class="xb-pop"><b>Status lights (D3, D4, D5)</b> — three lights, left to right PWR (green), ALM (red) and ACT (amber), each with a cut link under the row.</span></a>
      <a class="xb-mk xb-pb" href="#tour-14" style="left:52%;top:8.3%" aria-label="14: supply protection light">14<span class="xb-pop"><b>Supply protection (D81 and others)</b> — the amber 5&nbsp;V OV light. The red 5&nbsp;V FAULT light is at the top left and the red REV light at the bottom left. See the light table.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Gadgeteer socket P (J1)</b> — the 10-contact socket to the controller. Contact 3 is the probe output, 6 the alarm, 7 the control request. <i>See the pinout.</i></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Servo-style input (J2)</b> — an alternative control input, ground / 5&nbsp;V / signal. Do not power the board from both J1 and J2 without a settled power-source arrangement.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Probe output (J3)</b> — the probe trigger output as signal and ground. It must be wired to a host input separately from the control cable.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Solenoid connector (J4)</b> — 2 contacts: 1 is the switched low side, 2 is the solenoid 5&nbsp;V supply.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Programming header (J5)</b> — a 5-contact serial-wire header for the microcontroller: ground, clock, data, reset and 3.3&nbsp;V.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Microcontroller (U1)</b> — an STM32G030F6P6. The board has no stated firmware image, so what it does with the control request is not established.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Hall sensor (U2)</b> — a DRV5055A2 linear Hall sensor read by the microcontroller to sense the plunger.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Solenoid switch (Q1)</b> — an AO3400A MOSFET that switches the solenoid&rsquo;s low side.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Flyback diode (D2)</b> — a B5819W Schottky diode across the solenoid for the current when the switch turns off.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Probe output transistor (Q3)</b> — a BSS138 open-drain transistor that forms the probe output. A solder link adds a 10&nbsp;k&Omega; pull-up.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Solenoid supply limiter (U4)</b> — a TPS2553 switch with an automatic-recovery current limit in the solenoid 5&nbsp;V path.</div></li>
    <li id="tour-12"><span class="xb-n">12</span><div><b>3.3 V regulator (U3)</b> — an AP2112K-3.3 regulator for the microcontroller and the Hall sensor.</div></li>
    <li id="tour-13"><span class="xb-n">13</span><div><b>Status lights (D3, D4, D5)</b> — three lights, left to right PWR (green), ALM (red) and ACT (amber), each with a cut link under the row.</div></li>
    <li id="tour-14"><span class="xb-n">14</span><div><b>Supply protection (D81 and others)</b> — the amber 5&nbsp;V OV light. The red 5&nbsp;V FAULT light is at the top left and the red REV light at the bottom left. See the light table.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1: Gadgeteer socket P

Contact 1 is at the lower left of the socket in the tour (the arrow and the number 1 mark it), contact 2 directly above it, and odd contacts are in the lower row.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Function</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1, 4, 5, 8, 9</td><td>—</td><td>Not connected</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Host 5&nbsp;V input. Solder link SJ1 connects it to the board&rsquo;s 5&nbsp;V rail.</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">PROBE_OUT</span></td><td>Open-drain probe output, to a host input</td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">ALARM_HOST</span></td><td>Alarm output; link SJ3 connects it</td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-sig">CTRL_RAW</span></td><td>Control request input. Its protocol is not established.</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Ground</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J2, J3, J4 and J5

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Connector</th><th>Contact</th><th>Function</th></tr></thead>
  <tbody>
    <tr><td rowspan="3">J2 servo-style input</td><td>1</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span> through link SJ2</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">CTRL_RAW</span>, the same net as J1 contact 7</td></tr>
    <tr><td rowspan="2">J3 probe output</td><td>1</td><td><span class="xb-pill xb-p-sig">PROBE_OUT</span></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td rowspan="2">J4 solenoid</td><td>1</td><td><span class="xb-pill xb-p-sig">SOL_SW</span>, the switched low side</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">SOL_5V</span>, limited solenoid supply</td></tr>
    <tr><td rowspan="5">J5 serial-wire</td><td>1</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-sig">SWCLK</span></td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">SWDIO</span></td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">NRST</span></td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

J1 contact 7 and J2 contact 3 are the same signal. Do not drive both at once.

### Solder links

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>Label</th><th>What it does</th><th>Delivered state</th></tr></thead>
  <tbody>
    <tr><td>SJ1</td><td>5V:GADGETEER</td><td>Connects host 5&nbsp;V (J1.2) to the board rail</td><td>Open</td></tr>
    <tr><td>SJ2</td><td>5V:SERVO-HDR</td><td>Connects the J2 5&nbsp;V contact to the board rail</td><td>Open</td></tr>
    <tr><td>SJ3</td><td>ALARM:J1.6</td><td>Connects the alarm output to J1 contact 6</td><td>Open</td></tr>
    <tr><td>SJ4</td><td>PULLUP:10K</td><td>Adds a 10&nbsp;k&Omega; pull-up on the probe output</td><td>Open</td></tr>
    <tr><td>JP1, JP2, JP3</td><td>CUT TO DISABLE D5, D4, D3</td><td>Cut to turn the ACT, ALM and PWR lights off</td><td>Bridged</td></tr>
    <tr><td>JP80, JP81, JP82</td><td>CUT TO DISABLE</td><td>Cut to turn the over-voltage, fuse-fault and reverse lights off</td><td>Bridged</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  The delivered state of the SJ links is not recorded in the files this page was written from; the &ldquo;Open&rdquo; entries are not confirmed. Read each link on the schematic and measure before powering.
</sl-alert>

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>The design is not yet built.</span></div>
  <div class="xb-card"><b>Firmware</b><span>None is supplied; you would have to write and load it over J5.</span></div>
  <div class="xb-card"><b>A solenoid probe mechanism</b><span>Not specified by the design.</span></div>
  <div class="xb-card"><b>Two wiring paths</b><span>A control cable and a separate probe-return cable.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

There is no deploy-and-probe procedure for this board, because its firmware and pulse protocol do not exist yet. In order:

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Identify the mechanism</h3>
    <p>Choose the solenoid, its supply and current, and the sensing geometry. Settle the local firmware and the command pulses before connecting anything to a machine.</p>
  </li>
  <li class="xb-step">
    <h3>Wire control and return separately</h3>
    <p>Only after polarity and pin assignment are confirmed. A servo-style cable alone is not the whole interface: the probe output on J3 or J1 contact 3 must also reach a host input.</p>
  </li>
  <li class="xb-step">
    <h3>Bench-check with motion disabled</h3>
    <p>Check deploy, retract, contact, a stuck mechanism, alarm, reset and power loss before allowing any homing move.</p>
  </li>
  <li class="xb-step">
    <h3>Do not copy BLTouch settings</h3>
    <p>Do not carry over commercial BLTouch colours, angles, <code>M280</code> or <code>M281</code> commands or homing settings. They are not evidence of this board&rsquo;s behaviour.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Observe the probe and alarm outputs</td><td>Endstops (V2)</td><td>The observation entry below</td></tr>
    <tr><td>Deploy, retract and probe with Z-probe</td><td>None established</td><td>None supplied</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

After the power, output levels and numbering have been checked on a bench, with motion and probing disabled, a raw observation of the two outputs can be added. Prime header G_F (J37) contact 3 (PB1) carries PROBE_OUT and contact 6 (PG0) carries ALARM_HOST; leave CTRL_RAW unconnected for this test. An existing valid X actuator and exclusive use of the two pins are needed.

```ini
[endstops]
probe_observation.enable = true
probe_observation.pin = PB1-
probe_observation.axis = X
probe_observation.homing_direction = none
probe_observation.limit_enable = false
probe_alarm_observation.enable = true
probe_alarm_observation.pin = PG0-
probe_alarm_observation.axis = X
probe_alarm_observation.homing_direction = none
probe_alarm_observation.limit_enable = false
```

`M119` reports sampled logical levels only, and the minus sign disables the pulls but does not invert. This gives no deploy, alarm-clear, repeatability or homing behaviour. The entry follows the pinned SmoothieV2 source (revision 2a21c0108b1d095ecd8b2b9358e94055f053c003); it has not been run on a built board and does not show which firmware the microcontroller would run. Reserve the pins in your complete configuration and merge the entries into existing sections.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Probe block diagram">
  <svg viewBox="0 0 1000 300" role="img" aria-labelledby="xb-how-t">
    <title id="xb-how-t">The control request enters the microcontroller, which switches the solenoid and reads the Hall sensor. The microcontroller drives a separate open-drain probe output and an alarm output.</title>
    <g font-size="13" font-weight="700" text-anchor="middle" fill="#e6ebf2">
      <rect x="20" y="115" width="170" height="60" rx="8" fill="#1f2226" stroke="#dfe4ee"/><text x="105" y="140">Control request</text><text x="105" y="160" font-weight="400" fill="#a9b4c2">J1.7 or J2.3</text>
      <rect x="300" y="105" width="190" height="80" rx="8" fill="#212936" stroke="#6fe08a"/><text x="395" y="140">Microcontroller U1</text><text x="395" y="160" font-weight="400" fill="#a9b4c2">firmware not supplied</text>
      <rect x="600" y="20" width="170" height="60" rx="8" fill="#212936" stroke="#e0a877"/><text x="685" y="45">Limiter and switch</text><text x="685" y="65" font-weight="400" fill="#a9b4c2">U4, Q1, D2</text>
      <rect x="600" y="115" width="170" height="60" rx="8" fill="#212936" stroke="#e0a877"/><text x="685" y="140">Hall sensor U2</text><text x="685" y="160" font-weight="400" fill="#a9b4c2">plunger position</text>
      <rect x="600" y="210" width="170" height="60" rx="8" fill="#212936" stroke="#5fb3ff"/><text x="685" y="235">Probe output Q3</text><text x="685" y="255" font-weight="400" fill="#a9b4c2">open drain, J3 and J1.3</text>
      <rect x="840" y="20" width="140" height="60" rx="8" fill="#1f2226" stroke="#dfe4ee"/><text x="910" y="55">Solenoid J4</text>
    </g>
    <g stroke-width="3" fill="none" stroke="#a9b4c2"><path d="M190 145H300"/><path d="M490 130H545V50H600"/><path d="M600 145H490"/><path d="M490 160H545V240H600"/><path d="M770 50H840"/></g>
  </svg>
  </div>
  <figcaption>The intended signal flow. The firmware that connects them is not part of the design package.</figcaption>
</figure>
{:/nomarkdown}

The control request goes only to the microcontroller. Its program, which is not supplied, would have to decode the request, switch the solenoid through the limiter and transistor, read the plunger with the Hall sensor and set the probe and alarm outputs. The probe output is an open-drain transistor, kept separate from the control path. The supply protection (electronic fuse, over-voltage cut-off, reverse-polarity transistor and the lights) does not qualify the solenoid current, plunger travel, collision avoidance or the output state while powered off.

## Troubleshooting {#troubleshooting}

This board has not been built, so there is no list of symptoms from a running board. The lights are the main visible aid.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-green"></span>PWR (D3)</th><th><span class="xb-led xb-led-red"></span>ALM (D4)</th><th><span class="xb-led xb-led-amber"></span>ACT (D5)</th><th><span class="xb-led xb-led-amber"></span>5V OV (D81)</th><th><span class="xb-led xb-led-red"></span>5V FAULT (D83)</th><th><span class="xb-led xb-led-red"></span>REV (D87)</th></tr></thead>
  <tbody>
    <tr><td>Where</td><td>Top row, left</td><td>Top row, middle</td><td>Top row, right</td><td>Top, near the over-voltage marking</td><td>Top left</td><td>Bottom left</td></tr>
    <tr><td>Lit means</td><td>The 3.3&nbsp;V rail is present</td><td>An alarm state; its meaning depends on the missing firmware</td><td>An active state; its meaning depends on the missing firmware</td><td>Over-voltage condition on the 5&nbsp;V input</td><td>Electronic-fuse fault</td><td>Reversed supply (blinking)</td></tr>
    <tr><td>Disable it</td><td>Cut JP3</td><td>Cut JP2</td><td>Cut JP1</td><td>Cut JP80</td><td>Cut JP81</td><td>Cut JP82</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>Revision</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/bltouch-like-probe/bltouch-like-probe-schematic.pdf">Schematic (PDF)</a></td><td>v18</td><td>The complete circuit diagram. Its title block reads WIP.</td></tr>
    <tr><td><a href="/images/extensions/bltouch-like-probe/bltouch-like-probe-bom.csv">Parts list (CSV)</a></td><td>v18</td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/bltouch-like-probe/bltouch-like-probe-diagram.png">Board drawing (SVG)</a></td><td>v18</td><td>The top view used on this page, at full resolution</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-blt-mount-t">
  <title id="xb-blt-mount-t">Mounting drawing of the BLTouch-like probe, component side: outline 46 by 34 millimetres with 2 mounting holes and 2 cable-tie holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="250.0" y="78.0" width="460.0" height="340.0" rx="10.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M250.0 56H710.0"/><path d="M250.0 50V62"/><path d="M710.0 50V62"/><path d="M736.0 78.0V418.0"/><path d="M730.0 78.0h12"/><path d="M730.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">46</text>
  <text x="748.0" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">34</text>
  <circle cx="250.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="238.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M192.0 104.0h30" fill="none"/><path d="M226.0 104.0l-8 -4v8z"/><path d="M192.0 104.0v30" fill="none"/><path d="M192.0 138.0l-4 -8h8z"/></g>
  <text x="230.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="188.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="350.0" cy="178.0" r="16.0" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M330.0 178.0h40.0M350.0 158.0v40.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="334.0" y="214.0" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  10.00, 10.00</text>
  <circle cx="550.0" cy="178.0" r="16.0" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M530.0 178.0h40.0M550.0 158.0v40.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="566.0" y="214.0" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  30.00, 10.00</text>
  <circle cx="280.0" cy="108.0" r="12.5" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <circle cx="330.0" cy="108.0" r="12.5" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <text x="305.0" y="138.5" text-anchor="middle" font-size="12" fill="#a9b4c2">cable tie</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 46 × 34&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>10.00</td><td>10.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>30.00</td><td>10.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>–</td><td>3.00</td><td>3.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
    <tr><td>–</td><td>8.00</td><td>3.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
  </tbody>
</table></div>

{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Every figure is a design value, a value calculated from the design or a value from a part, as the last column says. None is a measurement on a built board. **Open** means not established.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Board supply</td><td>5 V rail</td><td>Open</td><td>5 V</td><td>Open</td><td>From J1 contact 2 or J2 contact 2 through the selection links; host power allocation Open</td></tr>
    <tr><td>Electronic-fuse current</td><td>U81 TPS259631</td><td>—</td><td>about 1.5 A</td><td>—</td><td>Marked as the nominal automatic-retry limit in the design; not measured</td></tr>
    <tr><td>Solenoid supply limit</td><td>U4 TPS2553</td><td>Open</td><td>Open</td><td>Open</td><td>Limit set by a resistor on the board; the solenoid current, inductance and flyback energy are not specified</td></tr>
    <tr><td>Probe output</td><td>J3, J1 contact 3</td><td>—</td><td>Open drain</td><td>—</td><td>Optional 10&nbsp;k&Omega; pull-up by link SJ4; levels Open</td></tr>
    <tr><td>Control request protocol</td><td>J1 contact 7, J2 contact 3</td><td>Open</td><td>Open</td><td>Open</td><td>Depends on firmware that is not supplied</td></tr>
    <tr><td>Plunger travel, force, repeatability, thermal behaviour</td><td>Mechanism</td><td>Open</td><td>Open</td><td>Open</td><td>No mechanism is specified</td></tr>
    <tr><td>Output state while unpowered</td><td>Probe output</td><td>Open</td><td>Open</td><td>Open</td><td>Not established</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Prime header G_F (J37)

On the Prime, header G_F (J37) has 3.3&nbsp;V on contact 1, 5&nbsp;V on contact 2, PB1 on 3, PJ4 on 4, PG0 on 6 and ground on 10. A discrepancy in the rail positions on the Prime&rsquo;s physical connector has been noted: verify numbered continuity with the power removed. The header is unshrouded.

See all boards on the [extension boards](/extension-boards) page.
