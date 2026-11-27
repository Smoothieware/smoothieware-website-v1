---
layout: default
title: "Filament encoder board"
description: "A magnetic encoder board that reads a filament-driven wheel and sends pulses to the controller, so a jam or break can be noticed: pinout, configuration and limits."
permalink: /extensions/filament-encoder-board
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Sensors</p>
    <h1 id="filament-encoder-board">Filament encoder board</h1>
    <p class="xb-lead">Reads a small diametrically magnetised wheel turned by the filament with an AS5047P magnetic encoder, and sends conditioned A, B and index pulses to the controller. The firmware counts the A pulses to notice commanded extrusion with no filament movement. It does not measure filament diameter, force or print quality.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/filament-encoder-board/filament-encoder-board-diagram.webp" alt="Top view of the filament encoder board: a 10-contact socket at the top, small chips in a column in the middle and the encoder chip at the bottom.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>AS5047P</b><span>magnetic encoder with A, B and index outputs and an SPI port</span></div>
  <div class="xb-stat"><b>26.53 pulses/mm</b><span>calculated for a 12&nbsp;mm wheel at 1000 pulses per turn; measure yours</span></div>
  <div class="xb-stat"><b>A only</b><span>the firmware counts rising edges of A; it does not decode direction</span></div>
  <div class="xb-stat"><b>3.3 V</b><span>logic supply; 5&nbsp;V is not used</span></div>
  <div class="xb-stat"><b>Not hot-pluggable</b><span>the board is marked NO HOT-PLUG</span></div>
  <div class="xb-stat"><b>28 × 30</b><span>millimetres, two M3 mounting holes</span></div>
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
  The board has no magnet or wheel: the magnet, the wheel, the air gap and the filament path are your mechanical design. The current alarm only checks for zero pulses while extrusion is required, so stray pulses at rest can hide a jam, and it is not a calibrated slip or diameter measurement.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>Detect commanded extrusion without measured filament movement</td></tr>
    <tr><td>Sensor</td><td>ams OSRAM AS5047P-ATSM magnetic position encoder, with A, B and index (ABI) outputs and an SPI port for configuration and diagnostics. Check its programmed output mode before use.</td></tr>
    <tr><td>Buffer</td><td>74LVC3G17 Schmitt-trigger buffer for A, B and index</td></tr>
    <tr><td>Magnet</td><td>Diametric N35 or better, 8&nbsp;mm diameter by 3&nbsp;mm, air gap 2.0&nbsp;mm &plusmn; 0.5&nbsp;mm, axis offset within 0.5&nbsp;mm, giving 35 to 70&nbsp;mT at the sensor. Not part of the board.</td></tr>
    <tr><td>Wheel</td><td>12&nbsp;mm filament wheel, 1000 pulses per turn, 4000 step positions per turn</td></tr>
    <tr><td>Supply</td><td>3.3&nbsp;V from the controller. About 15.84&nbsp;mA estimated; allow 25&nbsp;mA.</td></tr>
    <tr><td>Protection</td><td>Two TPD4E1U06 arrays and 100&nbsp;&Omega; series resistors in the signal lines</td></tr>
    <tr><td>SPI</td><td>Mode 1, no more than 1&nbsp;MHz and a cable no longer than 0.3&nbsp;m</td></tr>
    <tr><td>Controller socket</td><td>One 10-contact Gadgeteer socket, S (Samtec SHF-105, 1.27&nbsp;mm). Not for hot-plugging.</td></tr>
    <tr><td>Test points</td><td>Six on the board: A, B, index, 3.3&nbsp;V and two grounds (not drawn in the top view)</td></tr>
    <tr><td>Size</td><td>28 &times; 30&nbsp;mm with two M3 mounting holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a></td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side. The test points are on the underside and are not drawn.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/filament-encoder-board/filament-encoder-board-diagram.webp" alt="Top view of the filament encoder board with nine numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:50%;top:23.1%" aria-label="1: host socket">1<span class="xb-pop"><b>Gadgeteer socket S (J1)</b> — the 10-contact socket to the controller. Contact 3 is the conditioned A pulse. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:50%;top:8.9%" aria-label="2: upper protection array">2<span class="xb-pop"><b>Protection array (U3)</b> — a TPD4E1U06 surge-protection array on the sensor-to-host lines (blocks ESD pulses, not a current limit).</span></a>
      <a class="xb-mk xb-pb" href="#tour-3" style="left:50%;top:39.4%" aria-label="3: lower protection array">3<span class="xb-pop"><b>Protection array (U4)</b> — a second TPD4E1U06 array on the host-to-sensor lines.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:50%;top:70.2%" aria-label="4: buffer">4<span class="xb-pop"><b>Output buffer (U2)</b> — a 74LVC3G17 Schmitt-trigger buffer that conditions the A, B and index outputs for the host.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:50%;top:84.7%" aria-label="5: encoder sensor">5<span class="xb-pop"><b>Encoder sensor (U1)</b> — an AS5047P magnetic encoder. The white cross marks the sensor centre, over which the magnet axis must sit. The magnet and wheel are not part of the board.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:50%;top:55.7%" aria-label="6: signal resistors">6<span class="xb-pop"><b>Series resistors (R4 to R10)</b> — seven 100&nbsp;&Omega; resistors, 1&nbsp;%, in the signal lines.</span></a>
      <a class="xb-mk xb-pl" href="#tour-7" style="left:16.6%;top:67%" aria-label="7: bias resistors">7<span class="xb-pop"><b>Bias resistors (R1 to R3)</b> — three 10&nbsp;k&Omega; resistors, 1&nbsp;%; the design notes describe local bias of the unused SPI inputs.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:60%;top:63%" aria-label="8: sensor capacitor">8<span class="xb-pop"><b>Bypass capacitor (C2)</b> — a 1&nbsp;&micro;F capacitor for the sensor supply. The design asks for at least 0.7&nbsp;&micro;F effective capacitance.</span></a>
      <a class="xb-mk" href="#tour-9" style="left:65.8%;top:86%" aria-label="9: small capacitors">9<span class="xb-pop"><b>Bypass capacitors (C1, C3)</b> — two 100&nbsp;nF capacitors next to the sensor.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Gadgeteer socket S (J1)</b> — the 10-contact socket to the controller. Contact 3 is the conditioned A pulse. <i>See the pinout.</i></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Protection array (U3)</b> — a TPD4E1U06 surge-protection array on the sensor-to-host lines (blocks ESD pulses, not a current limit).</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Protection array (U4)</b> — a second TPD4E1U06 array on the host-to-sensor lines.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Output buffer (U2)</b> — a 74LVC3G17 Schmitt-trigger buffer that conditions the A, B and index outputs for the host.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Encoder sensor (U1)</b> — an AS5047P magnetic encoder. The white cross marks the sensor centre, over which the magnet axis must sit. The magnet and wheel are not part of the board.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Series resistors (R4 to R10)</b> — seven 100&nbsp;&Omega; resistors, 1&nbsp;%, in the signal lines.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Bias resistors (R1 to R3)</b> — three 10&nbsp;k&Omega; resistors, 1&nbsp;%; the design notes describe local bias of the unused SPI inputs.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Bypass capacitor (C2)</b> — a 1&nbsp;&micro;F capacitor for the sensor supply. The design asks for at least 0.7&nbsp;&micro;F effective capacitance.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Bypass capacitors (C1, C3)</b> — two 100&nbsp;nF capacitors next to the sensor.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1: Gadgeteer socket S

Contact 1 is at the lower left of the socket in the tour (the arrow marks the lower row), contact 2 directly above it, and odd contacts are in the lower row.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Function</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Board supply</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Unused: a pad with no copper connection</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">ENC_A</span></td><td>Conditioned pulse. The firmware counts its rising edges.</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">ENC_B</span></td><td>Conditioned phase output. Not used by the current jam alarm.</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">ENC_I</span></td><td>Conditioned index output. Not used by the current jam alarm.</td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">SPI_CS_N</span></td><td>Sensor configuration and diagnostics</td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-sig">SPI_MOSI</span></td><td>Sensor configuration and diagnostics</td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">SPI_MISO</span></td><td>Sensor configuration and diagnostics</td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">SPI_SCK</span></td><td>Sensor configuration and diagnostics</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Ground</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Test points

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Name</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>TP2</td><td>A, after the buffer</td></tr>
    <tr><td>TP3</td><td>B, after the buffer</td></tr>
    <tr><td>TP5</td><td>Index, after the buffer</td></tr>
    <tr><td>TP4</td><td>3.3&nbsp;V</td></tr>
    <tr><td>TP1, TP6</td><td>Ground</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>The AS5047P encoder board.</span></div>
  <div class="xb-card"><b>A magnet and wheel</b><span>Diametrically magnetised, 8&nbsp;mm by 3&nbsp;mm, on a wheel the filament turns.</span></div>
  <div class="xb-card"><b>Three wires</b><span>3.3&nbsp;V, the A pulse and ground to the controller.</span></div>
  <div class="xb-card"><b>A free interrupt input</b><span>PB1 in the example. Another pin with the same line number can conflict.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 472" role="img" aria-labelledby="xb-filament-encoder-board-wire"><title id="xb-filament-encoder-board-wire">Wiring: controller contact 1 to J1 contact 1; controller contact 3 to J1 contact 3; controller contact 10 to J1 contact 10.</title><image href="/images/extensions/filament-encoder-board/filament-encoder-board-diagram.webp" x="392" y="14" width="216" height="230"/><circle cx="500" cy="67" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="481" y="86" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="500" y="100" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J1</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Prime header G_F/J37</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J1 on this board</text><rect x="30" y="304" width="200" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="130" y="375" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Smoothieboard</text><text x="130" y="395" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">V2 Prime</text><rect x="770" y="304" width="200" height="150" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 349.0H770" fill="none" stroke="#d92d2d" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="349" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="349" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><text x="216" y="354" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">1</text><text x="784" y="354" text-anchor="start" font-size="14" fill="#e6ebf2">1  3.3 V</text><rect x="400" y="338" width="200" height="22" rx="11" fill="#d92d2d" stroke="#d92d2d" stroke-width="1.5"/><text x="500" y="354" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1 to 1: 3.3 V</text><path d="M230 379.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="379" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="379" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="384" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">3</text><text x="784" y="384" text-anchor="start" font-size="14" fill="#e6ebf2">3  ENC_A</text><rect x="400" y="368" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="384" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">3 to 3: ENC_A</text><path d="M230 409.0H770" fill="none" stroke="#8b949e" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="409" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="409" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><text x="216" y="414" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">10</text><text x="784" y="414" text-anchor="start" font-size="14" fill="#e6ebf2">10  GND</text><rect x="400" y="398" width="200" height="22" rx="11" fill="#8b949e" stroke="#8b949e" stroke-width="1.5"/><text x="500" y="414" text-anchor="middle" font-size="13" font-weight="700" fill="#111">10 to 10: GND</text></svg>
  </div>
  <figcaption>Hold the magnet 2.0 ± 0.5 mm above the sensor centre, within 0.5 mm of the axis. Leave other contacts unconnected.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Build the mechanism</h3>
    <p>Hold the magnet on the wheel axis, 2.0&nbsp;mm &plusmn; 0.5&nbsp;mm above the sensor centre (the white cross), within 0.5&nbsp;mm of the axis. The board does not provide the mechanism.</p>
  </li>
  <li class="xb-step">
    <h3>Wire three leads</h3>
    <p>With the power off, connect header G_F (J37) contacts 1, 3 and 10 to J1 contacts 1, 3 and 10: 3.3&nbsp;V, the A pulse on PB1 and ground. Leave every other contact unconnected. Check numbered continuity and the connector orientation first.</p>
    <p class="xb-expect">Check the rail positions on the Prime&rsquo;s physical header before powering; see the Prime header note in the electrical appendix.</p>
  </li>
  <li class="xb-step">
    <h3>Confirm the sensor output mode</h3>
    <p>The sensor&rsquo;s ABI outputs depend on its programmed state. Confirm that it outputs A pulses before relying on any count.</p>
  </li>
  <li class="xb-step">
    <h3>Add the configuration and calibrate</h3>
    <p>Add the <a href="#configuration">example</a>, then measure your pulses per millimetre by hand with <code>M405</code> and <code>M407</code> before enabling automatic checks.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Notice a jam or break while extruding</td><td>Filament detector (V2)</td><td>The configuration below</td></tr>
    <tr><td>Direction sensing or quadrature decoding</td><td>None</td><td>Not provided by this firmware</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The [V2 filament detector](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/filamentdetector/FilamentDetector.cpp) counts rising edges on one input. **26.53 is only the calculated 12&nbsp;mm and 1000-pulse example; replace it with your measured pulses per millimetre before automatic use.** PB1 is left uninverted, counting the rising edges of the conditioned A output.

```ini
[filament detector]
enable = true
encoder_pin = PB1
pulses_per_mm = 26.53
seconds_per_check = 2
leave_heaters_on = false
```

The module starts with checking active and there is no separate start-inactive field, so keep automatic extrusion inactive while setting up and send `M405` before the calibration below. Look at the start-up output for interrupt-allocation errors. Do not combine this PB1 allocation with button or endstop examples elsewhere, or another interrupt on line 1. Choose a check interval long enough to contain meaningful pulses at your lowest feed rate.

### Commands

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Command</th><th>Behaviour</th></tr></thead>
  <tbody>
    <tr><td><code>M404</code></td><td>Prints the parameters. Optional <code>S</code>, <code>P</code> and <code>H</code> temporarily change the check interval, pulses per millimetre and the leave-heaters-on policy. It does not save them.</td></tr>
    <tr><td><code>M405</code></td><td>Disables detection, clears the pulse count and refreshes the extrusion baseline</td></tr>
    <tr><td><code>M406</code></td><td>Enables detection, clears the pulse count and refreshes the extrusion baseline</td></tr>
    <tr><td><code>M407</code></td><td>Reports the pulse count, the enabled, triggered and suspended state and the heater policy</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

When positive extrusion needs at least one pulse but the sampled count is zero, the firmware records a jam or break alarm, prints it and requests a suspend through `M600` with the configured heater policy. Retracts and the first extrusion after a retract are ignored. The count is a current accumulation that the periodic checks reset, not total travel.

### Measure the pulses per millimetre

With the machine idle, heaters and motion off, no filament alarm pending and the detector loaded:

1. Send `M405`. This does not detach the interrupt, so pulses keep accumulating.
2. Move a measured length of filament through the wheel by hand in one direction and stop.
3. Send `M407` and divide the reported pulse count by the travel in millimetres. Repeat, sending `M405` before each measurement.
4. Do not send `M406` until you have checked the calibration and the alarm for your installation.

A halt or restart resets the count. The test counts A rising edges in either direction, so it does not give signed travel.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 170" role="img" aria-labelledby="xb-how-t">
    <title id="xb-how-t">A magnet on the filament wheel turns over the encoder chip, whose A, B and index outputs pass through a buffer and series resistors to the host socket.</title>
    <g font-size="13" font-weight="700" text-anchor="middle" fill="#e6ebf2">
      <rect x="20" y="55" width="170" height="60" rx="8" fill="#1f2226" stroke="#e0a877"/><text x="105" y="80">Magnet on wheel</text><text x="105" y="100" font-weight="400" fill="#a9b4c2">turned by the filament</text>
      <rect x="250" y="55" width="170" height="60" rx="8" fill="#212936" stroke="#6fe08a"/><text x="335" y="80">AS5047P</text><text x="335" y="100" font-weight="400" fill="#a9b4c2">A, B, index, SPI</text>
      <rect x="480" y="55" width="170" height="60" rx="8" fill="#212936" stroke="#5fb3ff"/><text x="565" y="80">Buffer U2</text><text x="565" y="100" font-weight="400" fill="#a9b4c2">74LVC3G17</text>
      <rect x="710" y="55" width="130" height="60" rx="8" fill="#212936" stroke="#5fb3ff"/><text x="775" y="80">Protection</text><text x="775" y="100" font-weight="400" fill="#a9b4c2">100 &#937; and arrays</text>
      <rect x="880" y="55" width="100" height="60" rx="8" fill="#1f2226" stroke="#dfe4ee"/><text x="930" y="90">J1</text>
    </g>
    <g stroke-width="3" fill="none" stroke="#a9b4c2"><path d="M190 85H250"/><path d="M420 85H480"/><path d="M650 85H710"/><path d="M840 85H880"/></g>
  </svg>
  </div>
  <figcaption>The path from the filament wheel to the host socket.</figcaption>
</figure>
{:/nomarkdown}

As the filament turns the wheel, the magnet turns over the sensor and it produces quadrature pulses, which the buffer conditions. At the nominal 12&nbsp;mm and 1000 pulses per turn, the A output gives about 26.53 pulses per millimetre. The sensor&rsquo;s A, B and index outputs are specified for 1&nbsp;mA and 50&nbsp;pF loads, so check the cable and the host input against that. The SPI port lets you configure the sensor, but that is not part of the pulse counting above.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>No pulses</td><td>Supply on TP4, the sensor&rsquo;s ABI mode, the magnet gap and position, and that the right input is configured.</td></tr>
    <tr><td>False jam alarms</td><td>Check interval too short for the feed rate, wrong pulses per millimetre, magnet slipping.</td></tr>
    <tr><td>Jam not noticed</td><td>Spurious pulses at rest can mask a jam; the alarm only tests for zero pulses.</td></tr>
    <tr><td>Interrupt error at start-up</td><td>Another pin with the same line number is already in use.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

This board has no indicator lights. Use the test points: TP2 shows A, TP3 B and TP5 the index after the buffer.

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/filament-encoder-board/filament-encoder-board-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram.</td></tr>
    <tr><td><a href="/images/extensions/filament-encoder-board/filament-encoder-board-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/filament-encoder-board/filament-encoder-board-diagram.webp">Board drawing (WebP)</a></td><td>The top view used on this page, at full resolution</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side. The sensor centre is at the cross on the board.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-fenc-mount-t">
  <title id="xb-fenc-mount-t">Mounting drawing of the filament encoder board, component side: outline 28 by 30 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="321.3" y="78.0" width="317.3" height="340.0" rx="11.3" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M321.3 56H638.7"/><path d="M321.3 50V62"/><path d="M638.7 50V62"/><path d="M664.7 78.0V418.0"/><path d="M658.7 78.0h12"/><path d="M658.7 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">28</text>
  <text x="676.7" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">30</text>
  <circle cx="321.3" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="309.3" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M263.3 104.0h30" fill="none"/><path d="M297.3 104.0l-8 -4v8z"/><path d="M263.3 104.0v30" fill="none"/><path d="M263.3 138.0l-4 -8h8z"/></g>
  <text x="301.3" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="259.3" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="366.7" cy="373.8" r="18.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M344.5 373.8h44.3M366.7 351.7v44.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="348.5" y="345.7" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  4.00, 26.10</text>
  <circle cx="593.3" cy="373.8" r="18.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M571.2 373.8h44.3M593.3 351.7v44.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="611.5" y="345.7" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  24.00, 26.10</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 28 × 30&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>4.00</td><td>26.10</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>24.00</td><td>26.10</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>

{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Every figure is a design value, a value calculated from the design or a value from a part, as the last column says.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Supply</td><td>J1 contact 1</td><td>—</td><td>3.3 V</td><td>—</td><td>Supplied by the controller header</td></tr>
    <tr><td>Supply current</td><td>Board</td><td>—</td><td>15.84 mA</td><td>25 mA</td><td>Estimated current; allow the upper value</td></tr>
    <tr><td>Sensor bypass</td><td>C2 at 3.3 V</td><td>0.7 &micro;F effective</td><td>1 &micro;F</td><td>—</td><td>Design minimum; check effective value over bias, tolerance, temperature and age</td></tr>
    <tr><td>Output drive</td><td>A, B, index of the sensor</td><td>—</td><td>—</td><td>1 mA at 50 pF</td><td>Device data; check the cable and host load</td></tr>
    <tr><td>Pulse density</td><td>A output</td><td>—</td><td>26.53 pulses/mm</td><td>—</td><td>Calculated for a 12&nbsp;mm wheel and 1000 pulses per turn</td></tr>
    <tr><td>Magnetic field</td><td>At the sensor</td><td>35 mT</td><td>—</td><td>70 mT</td><td>For the specified magnet and gap</td></tr>
    <tr><td>SPI</td><td>J1 contacts 6 to 9</td><td>—</td><td>Mode 1</td><td>1 MHz</td><td>Recommended limit with a cable up to 0.3&nbsp;m</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Prime header G_F (J37)

On the Prime, header G_F (J37) has 3.3&nbsp;V on contact 1, 5&nbsp;V on contact 2, PB1 on 3, PJ4 on 4 and ground on 10. Verify numbered continuity and the rail positions on the physical connector with the power removed. The header is unshrouded.

See all boards on the [extension boards](/extension-boards) page.
