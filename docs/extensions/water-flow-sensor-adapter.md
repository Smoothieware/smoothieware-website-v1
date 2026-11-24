---
layout: default
title: "Water flow sensor adapter"
description: "An adapter for one three-wire pulse-output water flow sensor, with pulse and no-flow outputs, a protected sensor supply and two lights: pinout, limits and an observation-only configuration."
permalink: /extensions/water-flow-sensor-adapter
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Sensors</p>
    <h1 id="water-flow-sensor-adapter">Water flow sensor adapter</h1>
    <p class="xb-lead">Conditions the signal of one three-wire pulse-output flow sensor, such as a YF-S201 type, into a pulse output and a no-flow fault output for two controller inputs, and supplies the sensor from a protected 5&nbsp;V branch. It is not a universal flow meter and not a cooling interlock.</p>
    <p class="xb-badge">Design candidate · revision v20 · not yet built or tested</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/water-flow-sensor-adapter/water-flow-sensor-adapter-diagram.svg" alt="Top view of the water flow sensor adapter: sensor pads at the top left, the host socket at the top right and small logic parts below.">
    <figcaption>Top view, drawn from the board&rsquo;s design files (revision v20). This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>1 sensor</b><span>three-wire pulse output: signal, ground, 5&nbsp;V</span></div>
  <div class="xb-stat"><b>2 outputs</b><span>pulses on J1 contact 3, no-flow fault on contact 5</span></div>
  <div class="xb-stat"><b>125 mA</b><span>auto-retry limit named in the parts list for the sensor supply</span></div>
  <div class="xb-stat"><b>2 lights</b><span>flow OK, and a red supply-fault light</span></div>
  <div class="xb-stat"><b>No driver</b><span>no flow counting in the pinned source; observation only</span></div>
  <div class="xb-stat"><b>26 × 28</b><span>millimetres, two M3 holes</span></div>
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
  This is a design candidate that has not been built or tested, and it is not ready to energize. The sensor supply is 5&nbsp;V only: do not connect a 12 or 24&nbsp;V sensor. The sensor&rsquo;s raw output type and polarity, pulses per litre, minimum flow, the real timeout and the response to a disconnected cable are not established. The fault output cannot tell a stopped pump from a failure, so it is not a protection for a cooling circuit.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>Pulse telemetry and a proposed no-flow indication from one three-wire flow sensor</td></tr>
    <tr><td>Signal path</td><td>Sensor signal, pulled up to the protected 5&nbsp;V by 10&nbsp;k&Omega;, goes through 4.7&nbsp;k&Omega; and a 10&nbsp;nF filter into an SN74LVC2G14 Schmitt inverter. Its output reaches J1 contact 3 through 100&nbsp;&Omega;. The pulse output is inverted compared with the filtered sensor signal.</td></tr>
    <tr><td>No-flow timer</td><td>An SN74LVC1G123 retriggerable monostable with 220&nbsp;k&Omega; and 2.2&nbsp;&micro;F stays set while pulses recur. The second inverter gate turns its state into the fault output on J1 contact 5 (high means no recent pulses). No timeout value is established.</td></tr>
    <tr><td>Sensor supply</td><td>5&nbsp;V from the host through a TPS259631 protection switch, auto-retry, with a 125&nbsp;mA setting named in the parts list; the fault line drives a red light</td></tr>
    <tr><td>Logic</td><td>3.3&nbsp;V push-pull outputs to the host, with 100&nbsp;&Omega; series resistors</td></tr>
    <tr><td>Sockets</td><td>One 10-contact Gadgeteer X socket (Samtec SHF-105, 1.27&nbsp;mm) and one three-pad sensor connector with two alternative pad rows</td></tr>
    <tr><td>Lights</td><td>D1 FLOW OK and a red supply-fault light D83; each can be disabled by a solder link</td></tr>
    <tr><td>Test points</td><td>Eight: ground (two), 3.3&nbsp;V, 5&nbsp;V, protected 5&nbsp;V, sensor signal, pulse and fault (not drawn in the top view)</td></tr>
    <tr><td>Size</td><td>26 &times; 28&nbsp;mm with two M3 mounting holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a></td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side. The mounting holes, test points, solder links and the supply switch with its red light are not drawn.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/water-flow-sensor-adapter/water-flow-sensor-adapter-diagram.svg" alt="Top view of the water flow sensor adapter with nine numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:62.1%;top:19.4%" aria-label="1: host socket">1<span class="xb-pop"><b>Host socket X (J1)</b> — the Gadgeteer socket to the controller. Contact 3 returns the pulses and contact 5 the no-flow fault line. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:30.5%;top:15%" aria-label="2: sensor pads">2<span class="xb-pop"><b>Sensor connector (J2)</b> — three signal, ground and 5&nbsp;V pads for the flow sensor, in two alternative rows (2.54&nbsp;mm and 2.00&nbsp;mm) with different physical order. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pb" href="#tour-3" style="left:30%;top:36.7%" aria-label="3: sensor protection">3<span class="xb-pop"><b>Sensor-side surge protection (U3)</b> — a TPD4E1U06 array on the raw sensor signal and the protected 5&nbsp;V sensor supply.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:61%;top:34.5%" aria-label="4: host protection">4<span class="xb-pop"><b>Host-side surge protection (U4)</b> — a TPD4E1U06 array on the pulse and fault outputs toward the host.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:45.7%;top:50.3%" aria-label="5: timer">5<span class="xb-pop"><b>No-pulse timer (U2)</b> — an SN74LVC1G123 retriggerable monostable. It stays set while pulses keep arriving and drops after they stop.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:47.6%;top:65.4%" aria-label="6: inverter">6<span class="xb-pop"><b>Pulse and fault inverter (U1)</b> — an SN74LVC2G14 dual Schmitt inverter: one gate conditions the pulses, the other turns the timer state into the fault output.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:61%;top:54.1%" aria-label="7: timing capacitor">7<span class="xb-pop"><b>Timing capacitor (C2)</b> — 2.2&nbsp;&micro;F; with the 220&nbsp;k&Omega; resistor R5 it sets the timer interval. No timeout value is established.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:30.2%;top:46.8%" aria-label="8: input filter">8<span class="xb-pop"><b>Input filter (C1)</b> — a 10&nbsp;nF capacitor that filters the sensor signal after the 4.7&nbsp;k&Omega; series resistor.</span></a>
      <a class="xb-mk xb-pb" href="#tour-9" style="left:73.5%;top:46%" aria-label="9: flow light">9<span class="xb-pop"><b>Flow light (D1)</b> — a light labelled FLOW OK, lit while the timer reports recent pulses. Cut JP1 to disable it.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host socket X (J1)</b> — the Gadgeteer socket to the controller. Contact 3 returns the pulses and contact 5 the no-flow fault line. <i>See the pinout.</i></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Sensor connector (J2)</b> — three signal, ground and 5&nbsp;V pads for the flow sensor, in two alternative rows (2.54&nbsp;mm and 2.00&nbsp;mm) with different physical order. <i>See the pinout.</i></div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Sensor-side surge protection (U3)</b> — a TPD4E1U06 array on the raw sensor signal and the protected 5&nbsp;V sensor supply.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Host-side surge protection (U4)</b> — a TPD4E1U06 array on the pulse and fault outputs toward the host.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>No-pulse timer (U2)</b> — an SN74LVC1G123 retriggerable monostable. It stays set while pulses keep arriving and drops after they stop.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Pulse and fault inverter (U1)</b> — an SN74LVC2G14 dual Schmitt inverter: one gate conditions the pulses, the other turns the timer state into the fault output.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Timing capacitor (C2)</b> — 2.2&nbsp;&micro;F; with the 220&nbsp;k&Omega; resistor R5 it sets the timer interval. No timeout value is established.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Input filter (C1)</b> — a 10&nbsp;nF capacitor that filters the sensor signal after the 4.7&nbsp;k&Omega; series resistor.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Flow light (D1)</b> — a light labelled FLOW OK, lit while the timer reports recent pulses. Cut JP1 to disable it.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1: host socket (X)

Contact 1 is at the lower left of the socket in the tour (the white dot; the arrow marks the lower row), contact 2 directly above it, and odd contacts are in the lower row.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Function</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Logic supply for the timer and inverters</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Input to the sensor supply protection switch</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">FLOW_PULSE_OUT</span></td><td>Conditioned pulses, to the host (input)</td></tr>
    <tr><td>4</td><td>Not connected</td><td>Leave unused</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">FLOW_FAULT_OUT</span></td><td>No-flow fault, to the host (input); high means no recent pulses</td></tr>
    <tr><td>6 to 9</td><td>Not connected</td><td>Leave unused</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Ground</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J2: sensor connector

The order is signal, ground, 5&nbsp;V, which differs from the ground, 5&nbsp;V, signal order of many sensor headers.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Function</th><th>YF-S201 type wire in the old design notes</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-sig">SIG</span> raw sensor output</td><td>Yellow, OUT</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Black</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-5v">5 V</span> protected sensor supply</td><td>Red</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

There are two alternative pad rows, 2.54&nbsp;mm and 2.00&nbsp;mm, whose physical number order differs. Use one row only and confirm it by continuity with the power off; do not infer the order from left to right or from wire colour. The wire colours are from a candidate design for one sensor type, not a verified installation.

### Solder links and test points

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>Effect</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>JP1</td><td>Cut to disable the FLOW OK light D1</td><td>Bridged</td></tr>
    <tr><td>JP81</td><td>Cut to disable the red supply-fault light</td><td>Bridged</td></tr>
  </tbody>
</table></div>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Test point</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>TP1, TP8</td><td>Ground</td></tr>
    <tr><td>TP2</td><td>3.3&nbsp;V</td></tr>
    <tr><td>TP3</td><td>5&nbsp;V from the host</td></tr>
    <tr><td>TP4</td><td>Protected 5&nbsp;V to the sensor</td></tr>
    <tr><td>TP5</td><td>Sensor signal</td></tr>
    <tr><td>TP6</td><td>Pulse output</td></tr>
    <tr><td>TP7</td><td>Fault output</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>The design is not yet built.</span></div>
  <div class="xb-card"><b>A 5 V flow sensor</b><span>Three-wire, with an open-collector or push-pull pulse output that works from 5&nbsp;V. Check its data sheet first.</span></div>
  <div class="xb-card"><b>Five host wires</b><span>3.3&nbsp;V, 5&nbsp;V, pulse, fault and ground to the controller.</span></div>
  <div class="xb-card"><b>A flow policy</b><span>Your own decision about when stopped flow is expected and when it is a fault.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Check the sensor</h3>
    <p>Confirm from its data sheet that the sensor runs from 5&nbsp;V, the output type and polarity, and its pulses per litre. This board does not accept a 12 or 24&nbsp;V sensor.</p>
  </li>
  <li class="xb-step">
    <h3>Wire the controller</h3>
    <p>With the power off, connect header G_F (J37) contacts 1, 2, 3, 5 and 10 to J1 contacts 1, 2, 3, 5 and 10: 3.3&nbsp;V, 5&nbsp;V, pulses on PB1, fault on PA4 and ground. Leave the other contacts unconnected. Verify numbered continuity and which end is contact 1 by continuity, not from the cable look.</p>
    <p class="xb-expect">The rail positions on the Prime&rsquo;s physical header need checking before powering; see the Prime header note in the electrical appendix.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the sensor</h3>
    <p>Join the sensor signal, ground and 5&nbsp;V to J2 contacts 1, 2 and 3 on one pad row, checked by continuity. Power on, then measure the protected 5&nbsp;V at TP4.</p>
  </li>
  <li class="xb-step">
    <h3>Observe</h3>
    <p>Add the observation-only configuration below and send <code>M119</code> while water flows and while it does not. A single reading can miss every pulse, so an unchanged value does not prove there is no flow.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>See the pulse and fault levels</td><td>Endstops, observation only</td><td>The example below</td></tr>
    <tr><td>Count pulses or compute a flow rate</td><td>None</td><td>No such code in the pinned source</td></tr>
    <tr><td>Stop a machine on no flow</td><td>None</td><td>Not supplied; this board is not an interlock</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

This only reads the two levels. The pinned SmoothieV2 source (revision [2a21c0108b1d095ecd8b2b9358e94055f053c003](https://github.com/Smoothieware/SmoothieV2/tree/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src)) has no flow counting. Add the entries to the existing single <code>[endstops]</code> section; do not replace other endstops, and keep both pins exclusive to these entries. The trailing minus clears the default pull, since both outputs are push-pull.

```ini
[endstops]
flow_pulse_diagnostic.enable = true
flow_pulse_diagnostic.pin = PB1-
flow_pulse_diagnostic.axis = X
flow_pulse_diagnostic.homing_direction = none
flow_pulse_diagnostic.limit_enable = false

flow_fault_diagnostic.enable = true
flow_fault_diagnostic.pin = PA4-
flow_fault_diagnostic.axis = X
flow_fault_diagnostic.homing_direction = none
flow_fault_diagnostic.limit_enable = false
```

Send <code>M119</code> and look for <code>(X)PB1</code> and <code>(X)PA4</code> in the pin list. They have no homing or limit role.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Reported state</th><th>What it means</th><th>What it does not tell you</th></tr></thead>
  <tbody>
    <tr><td><code>PB1</code> 0 or 1</td><td>One instant sample of the pulse output</td><td>Frequency, volume or flow rate</td></tr>
    <tr><td><code>PA4</code> 0</td><td>Fault output low: the timer is set, pulses were recent</td><td>A calibrated flow, or that cooling is adequate</td></tr>
    <tr><td><code>PA4</code> 1</td><td>Fault output high: no recent pulses</td><td>The cause: stopped pump, startup, cable fault or a sensor problem</td></tr>
    <tr><td>No entry</td><td>The input was not created</td><td>A sensor fault; check parsing and pin allocation</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 170" role="img" aria-labelledby="xb-how-t">
    <title id="xb-how-t">The sensor signal is filtered, inverted into a pulse output, and also retriggers a timer whose state becomes the fault output.</title>
    <g font-size="13" font-weight="700" text-anchor="middle" fill="#e6ebf2">
      <rect x="20" y="55" width="150" height="60" rx="8" fill="#1f2226" stroke="#e0a877"/><text x="95" y="80">Sensor</text><text x="95" y="100" font-weight="400" fill="#a9b4c2">J2 signal</text>
      <rect x="230" y="55" width="150" height="60" rx="8" fill="#212936" stroke="#e0a877"/><text x="305" y="80">Filter</text><text x="305" y="100" font-weight="400" fill="#a9b4c2">4.7 k, 10 nF</text>
      <rect x="440" y="20" width="170" height="55" rx="8" fill="#212936" stroke="#6fe08a"/><text x="525" y="43">Inverter U1</text><text x="525" y="62" font-weight="400" fill="#a9b4c2">pulse output</text>
      <rect x="440" y="95" width="170" height="55" rx="8" fill="#212936" stroke="#6fe08a"/><text x="525" y="118">Timer U2</text><text x="525" y="137" font-weight="400" fill="#a9b4c2">220 k, 2.2 uF</text>
      <rect x="700" y="20" width="120" height="55" rx="8" fill="#1f2226" stroke="#dfe4ee"/><text x="760" y="52">J1.3 pulse</text>
      <rect x="700" y="95" width="120" height="55" rx="8" fill="#1f2226" stroke="#dfe4ee"/><text x="760" y="127">J1.5 fault</text>
    </g>
    <g stroke-width="3" fill="none" stroke="#a9b4c2"><path d="M170 85H230"/><path d="M380 85H410V47H440"/><path d="M410 85V122H440"/><path d="M610 47H700"/><path d="M610 122H700"/></g>
  </svg>
  </div>
  <figcaption>One conditioned signal feeds both the pulse output and the no-pulse timer.</figcaption>
</figure>
{:/nomarkdown}

Pulses from the sensor are filtered and squared up by a Schmitt inverter, so the pulse output is inverted compared with the sensor signal. The same pulses keep a retriggerable timer set. When pulses stop for longer than the interval set by the 220&nbsp;k&Omega; resistor and the 2.2&nbsp;&micro;F capacitor, the timer drops and a second inverter gate drives the fault output high. The interval depends on the device timing relationship and on the parts, and no value is established. The sensor supply passes a protection switch that retries automatically after a fault.

The firmware must interpret the result in the context of whether flow is expected. Intentionally stopped flow and a fault look the same. The parts are described by Texas Instruments for the [SN74LVC2G14](https://www.ti.com/product/SN74LVC2G14) and the [SN74LVC1G123](https://www.ti.com/product/SN74LVC1G123).

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-unknown"></span>FLOW OK (D1)</th><th><span class="xb-led xb-led-red"></span>Supply fault (D83)</th></tr></thead>
  <tbody>
    <tr><td>Where</td><td>Right of the middle, next to a small resistor (tour 9)</td><td>Not drawn in the top view</td></tr>
    <tr><td>Lit means</td><td>The timer reports recent pulses</td><td>The sensor-supply switch reports a fault</td></tr>
    <tr><td>Disable it</td><td>Cut JP1</td><td>Cut JP81</td></tr>
  </tbody>
</table></div>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>No pulses, FLOW OK dark</td><td>Sensor wiring order on J2, the protected 5&nbsp;V at TP4 and the sensor output at TP5.</td></tr>
    <tr><td>Red light lit</td><td>A short or overload on the sensor supply; the switch retries automatically. Check the wiring.</td></tr>
    <tr><td>Fault reads high while water flows</td><td>Sensor output polarity or type, or pulses too slow for the timer interval.</td></tr>
    <tr><td>Pulse reading never changes</td><td>A single reading can miss every pulse; this is normal for <code>M119</code>.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>Revision</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/water-flow-sensor-adapter/water-flow-sensor-adapter-schematic.pdf">Schematic (PDF)</a></td><td>v20</td><td>The circuit diagram. Its title block reads WIP.</td></tr>
    <tr><td><a href="/images/extensions/water-flow-sensor-adapter/water-flow-sensor-adapter-bom.csv">Parts list (CSV)</a></td><td>v20</td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/water-flow-sensor-adapter/water-flow-sensor-adapter-diagram.svg">Board drawing (SVG)</a></td><td>v20</td><td>The top view used on this page, at full resolution</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-wf-mount-t">
  <title id="xb-wf-mount-t">Mounting drawing of the water flow sensor adapter, component side: outline 26 by 28 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="322.1" y="78.0" width="315.7" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M322.1 56H637.9"/><path d="M322.1 50V62"/><path d="M637.9 50V62"/><path d="M663.9 78.0V418.0"/><path d="M657.9 78.0h12"/><path d="M657.9 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">26</text>
  <text x="675.9" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">28</text>
  <circle cx="322.1" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="310.1" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M264.1 104.0h30" fill="none"/><path d="M298.1 104.0l-8 -4v8z"/><path d="M264.1 104.0v30" fill="none"/><path d="M264.1 138.0l-4 -8h8z"/></g>
  <text x="302.1" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="260.1" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="358.6" cy="296.6" r="19.4" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M335.1 296.6h46.9M358.6 273.1v46.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="339.1" y="267.1" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  3.00, 18.00</text>
  <circle cx="601.4" cy="296.6" r="19.4" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M578.0 296.6h46.9M601.4 273.1v46.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="620.9" y="267.1" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  23.00, 18.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 26 × 28&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>3.00</td><td>18.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>23.00</td><td>18.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>

{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Every figure is a design value or a value from the parts list, as the last column says. None is a measurement on a built board. **Open** means not established.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Logic supply</td><td>J1 contact 1</td><td>Open</td><td>3.3 V</td><td>Open</td><td>Current budget Open</td></tr>
    <tr><td>Sensor supply input</td><td>J1 contact 2</td><td>Open</td><td>5 V</td><td>Open</td><td>Host allowance Open; 12 or 24&nbsp;V is not permitted</td></tr>
    <tr><td>Sensor supply current</td><td>J2 contact 3</td><td>—</td><td>—</td><td>125 mA</td><td>Auto-retry setting named in the parts list; actual trip not measured</td></tr>
    <tr><td>Timer parts</td><td>R5, C2</td><td>—</td><td>220 k&Omega;, 2.2 &micro;F</td><td>—</td><td>Parts list; the timeout is Open</td></tr>
    <tr><td>Output series resistance</td><td>J1 contacts 3, 5</td><td>—</td><td>100 &Omega;</td><td>—</td><td>Parts list</td></tr>
    <tr><td>Pulses per litre, minimum flow</td><td>Sensor</td><td>Open</td><td>Open</td><td>Open</td><td>Depends on the sensor, not established</td></tr>
    <tr><td>Response to a disconnected sensor</td><td>Whole board</td><td>Open</td><td>Open</td><td>Open</td><td>Not established</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Prime header G_F (J37)

On the Prime, header G_F (J37) has 3.3&nbsp;V on contact 1, 5&nbsp;V on contact 2, PB1 on 3, PA4 on 5 and ground on 10. A discrepancy in the rail positions on the physical connector has been noted: verify numbered continuity with the power removed. The header is unshrouded and the mating cable is not specified; a ribbon with a red edge does not by itself prove a straight-through cable.

See all boards on the [extension boards](/extension-boards) page.
