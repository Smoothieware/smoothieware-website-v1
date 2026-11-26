---
layout: default
title: "Inductive proximity sensor adapter"
description: "A level shifter that connects a three-wire 12 to 24 V inductive proximity sensor to a 3.3 V host input through optocouplers: pinout, selectors, configuration and limits."
permalink: /extensions/inductive-proximity-sensor-adapter
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Probes</p>
    <h1 id="inductive-proximity-sensor-adapter">Inductive proximity sensor adapter</h1>
    <p class="xb-lead">A level shifter that lets a three-wire 12 to 24&nbsp;V inductive proximity sensor feed an endstop or probe input. The sensor side and the controller side have separate grounds, joined only by optocouplers. It passes a digital state, not a distance.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/inductive-proximity-sensor-adapter/inductive-proximity-sensor-adapter-diagram.png" alt="Top view of the inductive proximity sensor adapter: two green screw terminals at the top, three optocouplers in the middle and a three-contact connector at the lower right.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>12 to 24 V</b><span>field supply design range. A rating is not proven by a part rating.</span></div>
  <div class="xb-stat"><b>NPN or PNP</b><span>selected by a solder link; must match the sensor</span></div>
  <div class="xb-stat"><b>Isolated</b><span>separate field and host grounds, three TLP291 optocouplers</span></div>
  <div class="xb-stat"><b>3 lights</b><span>NPN output, PNP output and field power</span></div>
  <div class="xb-stat"><b>1 output</b><span>signal, ground and 5&nbsp;V connector for one host input</span></div>
  <div class="xb-stat"><b>38 × 38.5</b><span>millimetres, two M3 mounting holes</span></div>
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
  A sensor&rsquo;s leakage current can affect the idle and active output levels, so check both levels with your sensor. Do not use it as a machine limit or for unplug detection.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>Translate a three-wire 12 to 24&nbsp;V inductive sensor into a signal / ground / 5&nbsp;V endstop-style output</td></tr>
    <tr><td>Isolation</td><td>Three TLP291 optocouplers between the field side (ground GF) and the host side (ground GND_H)</td></tr>
    <tr><td>Sensor type</td><td>NPN or PNP output (link SJ2) and NO or NC meaning (link SJ1). These must be matched to the real sensor.</td></tr>
    <tr><td>Output stage</td><td>BSS138 open-drain transistor; the host supplies the pull-up</td></tr>
    <tr><td>Field protection</td><td>A PMEG6010CEH reverse diode and an SMF30CA bidirectional TVS diode, a TPS26600 electronic fuse and a TL431 reference with fault lights. The last group appears in the parts list but is not drawn in the top view.</td></tr>
    <tr><td>Indicators</td><td>NPN output, PNP output and field power lights, each with a cut link; fault lights for the electronic fuse, over-voltage and reverse supply with their own links</td></tr>
    <tr><td>Connectors</td><td>3-screw sensor terminal, 2-screw field terminal (3.5&nbsp;mm style), 3-contact 2.54&nbsp;mm host connector; exact series not specified</td></tr>
    <tr><td>Size</td><td>38 &times; 38.5&nbsp;mm with two M3 mounting holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a>. The design notes name a CR5-AN-1A NPN, normally-open sensor as the example; check that your sensor suits the input.</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side. The solder links, mounting holes and the electronic-fuse circuit are not marked on the drawing.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/inductive-proximity-sensor-adapter/inductive-proximity-sensor-adapter-diagram.png" alt="Top view of the inductive proximity sensor adapter with eleven numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:26%;top:13.3%" aria-label="1: sensor terminal">1<span class="xb-pop"><b>Sensor terminal (J2)</b> — a 3-screw terminal for a three-wire sensor. From the left screw: OUT (the sensor signal), +V (protected sensor supply) and 0V (field ground). <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:53.2%;top:13.3%" aria-label="2: field power terminal">2<span class="xb-pop"><b>Field power terminal (J1)</b> — a 2-screw terminal for the 12 to 24&nbsp;V field supply: left +V, right 0V (field ground).</span></a>
      <a class="xb-mk" href="#tour-3" style="left:60.8%;top:85%" aria-label="3: host connector">3<span class="xb-pop"><b>Host connector (J3)</b> — 3 contacts marked SIG, GND and 5V: the endstop-style output to the controller, ground and 5&nbsp;V from the host. <i>See the pinout.</i></span></a>
      <a class="xb-mk" href="#tour-4" style="left:27.5%;top:63.9%" aria-label="4: NPN optocoupler">4<span class="xb-pop"><b>NPN optocoupler (U1)</b> — a TLP291 that isolates the signal of a sensor whose output pulls to ground (NPN).</span></a>
      <a class="xb-mk" href="#tour-5" style="left:37.5%;top:63.9%" aria-label="5: PNP optocoupler">5<span class="xb-pop"><b>PNP optocoupler (U2)</b> — a TLP291 that isolates the signal of a sensor whose output goes to its supply (PNP). Solder link SJ2 selects which of the two is used.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:47.5%;top:63.9%" aria-label="6: field power optocoupler">6<span class="xb-pop"><b>Field-power optocoupler (U3)</b> — a TLP291 that senses that the protected field supply is present. It shares its current path with the field power light and link JP3.</span></a>
      <a class="xb-mk xb-pl" href="#tour-7" style="left:13.8%;top:83.1%" aria-label="7: output transistor">7<span class="xb-pop"><b>Output transistor (Q1)</b> — a BSS138 open-drain transistor. Its drain is the signal on J3 contact 1 when link SJ1 is in the delivered position.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:38.8%;top:36.5%" aria-label="8: reverse diode">8<span class="xb-pop"><b>Reverse-polarity diode (D1)</b> — a PMEG6010CEH Schottky diode that blocks a reversed field supply.</span></a>
      <a class="xb-mk xb-pb" href="#tour-9" style="left:36%;top:43.3%" aria-label="9: NPN light">9<span class="xb-pop"><b>OUT LOW (NPN) light (DN)</b> — a light that follows the NPN optocoupler. Cut link JP2 turns it off.</span></a>
      <a class="xb-mk xb-pb" href="#tour-10" style="left:49.7%;top:44.9%" aria-label="10: PNP light">10<span class="xb-pop"><b>OUT HIGH (PNP) light (DP)</b> — a light that follows the PNP optocoupler. Cut link JP1 turns it off.</span></a>
      <a class="xb-mk xb-pb" href="#tour-11" style="left:65.6%;top:38.3%" aria-label="11: field power light">11<span class="xb-pop"><b>Field power light (DPWR)</b> — lit while the protected sensor supply is present. Cut link JP3 turns it off but also breaks the field-power sensing path.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Sensor terminal (J2)</b> — a 3-screw terminal for a three-wire sensor. From the left screw: OUT (the sensor signal), +V (protected sensor supply) and 0V (field ground). <i>See the pinout.</i></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Field power terminal (J1)</b> — a 2-screw terminal for the 12 to 24&nbsp;V field supply: left +V, right 0V (field ground).</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Host connector (J3)</b> — 3 contacts marked SIG, GND and 5V: the endstop-style output to the controller, ground and 5&nbsp;V from the host. <i>See the pinout.</i></div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>NPN optocoupler (U1)</b> — a TLP291 that isolates the signal of a sensor whose output pulls to ground (NPN).</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>PNP optocoupler (U2)</b> — a TLP291 that isolates the signal of a sensor whose output goes to its supply (PNP). Solder link SJ2 selects which of the two is used.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Field-power optocoupler (U3)</b> — a TLP291 that senses that the protected field supply is present. It shares its current path with the field power light and link JP3.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Output transistor (Q1)</b> — a BSS138 open-drain transistor. Its drain is the signal on J3 contact 1 when link SJ1 is in the delivered position.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Reverse-polarity diode (D1)</b> — a PMEG6010CEH Schottky diode that blocks a reversed field supply.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>OUT LOW (NPN) light (DN)</b> — a light that follows the NPN optocoupler. Cut link JP2 turns it off.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>OUT HIGH (PNP) light (DP)</b> — a light that follows the PNP optocoupler. Cut link JP1 turns it off.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Field power light (DPWR)</b> — lit while the protected sensor supply is present. Cut link JP3 turns it off but also breaks the field-power sensing path.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1: field power

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Screw in the tour</th><th>Function</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Right (0V)</td><td><span class="xb-pill xb-p-gnd">GF</span> field ground</td></tr>
    <tr><td>2</td><td>Left (+V)</td><td><span class="xb-pill xb-p-sig">+12 to 24 V</span> raw field positive</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The positive screw is the left one, so contact 1 is the ground and contact 2 the positive. This is the reverse of the usual positive-first habit; check the marking on the board.

### J2: sensor

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Screw in the tour</th><th>Function</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Right (0V)</td><td><span class="xb-pill xb-p-gnd">GF</span> sensor ground</td></tr>
    <tr><td>2</td><td>Middle (+V)</td><td><span class="xb-pill xb-p-sig">VF</span> protected sensor supply</td></tr>
    <tr><td>3</td><td>Left (OUT)</td><td><span class="xb-pill xb-p-sig">SENSOR_IN</span> the sensor&rsquo;s signal wire</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Connect each sensor wire by its function from the sensor&rsquo;s own data sheet, not by colour.

### J3: host connector

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Function</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1 (SIG)</td><td><span class="xb-pill xb-p-sig">SIG</span></td><td>Open-drain output to the host input</td></tr>
    <tr><td>2 (GND)</td><td><span class="xb-pill xb-p-gnd">GND_H</span></td><td>Host ground. Keep it separate from the field ground.</td></tr>
    <tr><td>3 (5V)</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Host 5&nbsp;V supply for the output side</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Solder links

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>Pads</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>SJ2 (NPN | PNP)</td><td>Pad 2 is the sensor output. 1&ndash;2 selects the NPN optocoupler, 2&ndash;3 the PNP optocoupler.</td><td>Pads 1 and 2 bridged: NPN</td></tr>
    <tr><td>SJ1 (NO | NC)</td><td>Pad 2 is the host SIG. 1&ndash;2 selects the output transistor&rsquo;s drain, 2&ndash;3 exposes its gate node.</td><td>Pads 1 and 2 bridged</td></tr>
    <tr><td>JP1, JP2</td><td>Cut to turn the PNP and NPN lights off</td><td>Bridged</td></tr>
    <tr><td>JP3</td><td>Labelled CUT TO DISABLE DPWR, but it is also part of the field-power sensing path</td><td>Bridged</td></tr>
    <tr><td>SJF1, SJF2, SJF3</td><td>Cut to turn the fault, over-voltage and reverse-supply lights off</td><td>Not recorded</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Open the existing bridge before choosing the other position of SJ1 or SJ2. &ldquo;NO&rdquo; and &ldquo;NC&rdquo; on the board express the intended modes: check the real sensor and its behaviour on power loss before relying on either.

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>The sensor adapter.</span></div>
  <div class="xb-card"><b>A three-wire sensor</b><span>12 to 24&nbsp;V, NPN or PNP, with its data sheet and its off-state leakage current.</span></div>
  <div class="xb-card"><b>A field supply</b><span>A separate, current-limited supply for the sensor, for example 24&nbsp;V.</span></div>
  <div class="xb-card"><b>Three host wires</b><span>Signal, ground and 5&nbsp;V to the controller, and a free input such as PB1.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Check the sensor</h3>
    <p>Establish its type (NPN or PNP), its current draw and its off-state leakage. Match solder link SJ2, and confirm SJ1, against it with the power off.</p>
  </li>
  <li class="xb-step">
    <h3>Wire the field side</h3>
    <p>Connect the field supply positive to J1 contact 2 and its return to contact 1. Connect the sensor ground to J2 contact 1, its supply to contact 2 and its signal to contact 3. Do not join the field ground to the host ground unless a separately reviewed grounding mode requires it: that bypasses the isolation.</p>
  </li>
  <li class="xb-step">
    <h3>Wire the host side</h3>
    <p>Connect header G_F (J37) contact 3 (PB1) to J3 contact 1, contact 10 to J3 contact 2 and contact 2 (5&nbsp;V) to J3 contact 3. Check numbered continuity with the power off.</p>
    <p class="xb-expect">The rail positions on the Prime&rsquo;s physical header need checking before powering; see the Prime header note in the electrical appendix.</p>
  </li>
  <li class="xb-step">
    <h3>Check the state, not a homing move</h3>
    <p>Add the <a href="#configuration">diagnostic entry</a>, send <code>M119</code> with the target far and near, and look at the lights. Do not home on this board until the output levels are verified.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Read the sensor state</td><td>Endstops (V2)</td><td>The diagnostic entry below</td></tr>
    <tr><td>Home or probe on the sensor</td><td>Endstops or Z-probe (V2)</td><td>Check output levels and polarity first</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Reserve PB1 for this input and use an existing configured X actuator. Merge the entry into the existing `[endstops]` section; keep your other entries.

```ini
[endstops]
proximity_state_diagnostic.enable = true
proximity_state_diagnostic.pin = PB1^
proximity_state_diagnostic.axis = X
proximity_state_diagnostic.homing_direction = none
proximity_state_diagnostic.limit_enable = false
```

The `^` enables the host pull-up and nothing is inverted. Homing and limit action stay disabled. Send `M119` and find `(X)PB1^:0` or `(X)PB1^:1` in the input list: 0 is low and 1 is high at that instant. The transistor pulls the signal low when it conducts and the pull-up returns it high when released. This is not a pulse counter, a distance measurement, an unplug detector or proof of the trigger polarity. The entry follows the SmoothieV2 source (commit [2a21c0108b1d095ecd8b2b9358e94055f053c003](https://github.com/Smoothieware/SmoothieV2/tree/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src)).

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 170" role="img" aria-labelledby="xb-how-t">
    <title id="xb-how-t">The sensor signal passes through a current-limiting resistor and an optocoupler to a transistor that drives the host signal.</title>
    <g font-size="13" font-weight="700" text-anchor="middle" fill="#e6ebf2">
      <rect x="20" y="55" width="170" height="60" rx="8" fill="#212936" stroke="#e0a877"/><text x="105" y="80">Sensor</text><text x="105" y="100" font-weight="400" fill="#a9b4c2">12 to 24 V field side</text>
      <rect x="250" y="55" width="170" height="60" rx="8" fill="#212936" stroke="#e0a877"/><text x="335" y="80">Resistor</text><text x="335" y="100" font-weight="400" fill="#a9b4c2">3.3 k, NPN or PNP</text>
      <rect x="480" y="55" width="170" height="60" rx="8" fill="#212936" stroke="#6fe08a"/><text x="565" y="80">Optocoupler</text><text x="565" y="100" font-weight="400" fill="#a9b4c2">U1 or U2: isolation</text>
      <rect x="710" y="55" width="130" height="60" rx="8" fill="#212936" stroke="#5fb3ff"/><text x="775" y="80">Q1</text><text x="775" y="100" font-weight="400" fill="#a9b4c2">open drain</text>
      <rect x="880" y="55" width="100" height="60" rx="8" fill="#1f2226" stroke="#dfe4ee"/><text x="930" y="90">J3.1</text>
    </g>
    <g stroke-width="3" fill="none" stroke="#a9b4c2"><path d="M190 85H250"/><path d="M420 85H480"/><path d="M650 85H710"/><path d="M840 85H880"/></g>
  </svg>
  </div>
  <figcaption>The path from the sensor to the host signal. The field and host sides share no ground.</figcaption>
</figure>
{:/nomarkdown}

A sensor output current flows through a 3.3&nbsp;k&Omega; resistor into the light-emitting side of the NPN or the PNP optocoupler, depending on link SJ2. The optocoupler&rsquo;s output side drives the gate of the BSS138 through a 100&nbsp;k&Omega; resistor, with a 1&nbsp;M&Omega; resistor to ground, and the transistor pulls the host signal low when it conducts. The field-power optocoupler U3 senses the protected supply through a 5.6&nbsp;k&Omega; resistor and the field power light.

The design does not say how the optocoupler behaves at the sensor&rsquo;s off-state leakage current, nor the margin of the gate resistors over supply and temperature. Until that is established, the idle output is not guaranteed.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>No field power light</td><td>Field supply polarity on J1 (the left screw is positive), JP3 cut, or a protection fault.</td></tr>
    <tr><td>Output never changes</td><td>SJ2 does not match the sensor type, or the sensor is unpowered. Check the NPN and PNP lights.</td></tr>
    <tr><td>Output stuck</td><td>Sensor leakage may keep the optocoupler on; this is the open margin question.</td></tr>
    <tr><td>Wrong polarity</td><td>Check SJ1 and the host pull-up; the output is only a transistor.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-amber"></span>OUT LOW (NPN) (DN)</th><th><span class="xb-led xb-led-amber"></span>OUT HIGH (PNP) (DP)</th><th><span class="xb-led xb-led-amber"></span>FIELD POWER (DPWR)</th></tr></thead>
  <tbody>
    <tr><td>Where</td><td>Middle of the board, left</td><td>Middle of the board, right</td><td>Right side, near the field terminal</td></tr>
    <tr><td>Lit means</td><td>The NPN optocoupler is conducting</td><td>The PNP optocoupler is conducting</td><td>The protected sensor supply is present</td></tr>
    <tr><td>Disable it</td><td>Cut JP2</td><td>Cut JP1</td><td>Cut JP3 (also breaks power sensing)</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The board also carries fault lights for the electronic fuse, over-voltage and reversed supply (with links SJF1, SJF2 and SJF3). They are in the parts list but not drawn in the top view, so their position is not given here.

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/inductive-proximity-sensor-adapter/inductive-proximity-sensor-adapter-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram.</td></tr>
    <tr><td><a href="/images/extensions/inductive-proximity-sensor-adapter/inductive-proximity-sensor-adapter-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/inductive-proximity-sensor-adapter/inductive-proximity-sensor-adapter-diagram.png">Board drawing (SVG)</a></td><td>The top view used on this page, at full resolution</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side. The host connector overhangs the lower edge.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-prox-mount-t">
  <title id="xb-prox-mount-t">Mounting drawing of the inductive proximity sensor adapter, component side: outline 38 by 38.5 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="312.2" y="78.0" width="335.6" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M312.2 56H647.8"/><path d="M312.2 50V62"/><path d="M647.8 50V62"/><path d="M673.8 78.0V418.0"/><path d="M667.8 78.0h12"/><path d="M667.8 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">38</text>
  <text x="685.8" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">38.5</text>
  <circle cx="312.2" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="300.2" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M254.2 104.0h30" fill="none"/><path d="M288.2 104.0l-8 -4v8z"/><path d="M254.2 104.0v30" fill="none"/><path d="M254.2 138.0l-4 -8h8z"/></g>
  <text x="292.2" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="250.2" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="347.5" cy="309.4" r="14.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M329.4 309.4h36.3M347.5 291.2v36.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="333.4" y="285.2" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  4.00, 26.20</text>
  <circle cx="524.2" cy="309.4" r="14.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M506.0 309.4h36.3M524.2 291.2v36.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="538.3" y="285.2" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  24.00, 26.20</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 38 × 38.5&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>4.00</td><td>26.20</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>24.00</td><td>26.20</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>

{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

The last column gives the source of each figure. **Open** means not specified.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Field supply</td><td>J1</td><td>12 V</td><td>—</td><td>24 V</td><td>Design range. A 48&nbsp;V tolerance is not claimed.</td></tr>
    <tr><td>Input resistors</td><td>RN and RP</td><td>—</td><td>3.3 k&Omega;</td><td>—</td><td>1&nbsp;%, 1206, from the parts list; power margin Open</td></tr>
    <tr><td>Gate feed and pull-down</td><td>RS and RPD</td><td>—</td><td>100 k&Omega; and 1 M&Omega;</td><td>—</td><td>From the parts list; margin over leakage, supply and temperature Open</td></tr>
    <tr><td>Optocoupler off-state current at sensor leakage</td><td>U1, U2</td><td>Open</td><td>Open</td><td>Open</td><td>The data sheet current transfer at 5&nbsp;mA does not give the off current at about 10&nbsp;&micro;A sensor leakage</td></tr>
    <tr><td>Output</td><td>J3 contact 1</td><td>—</td><td>Open drain</td><td>—</td><td>Host pull-up required; idle and active levels Open</td></tr>
    <tr><td>Isolation voltage</td><td>Field to host</td><td>Open</td><td>Open</td><td>Open</td><td>No isolation rating specified</td></tr>
    <tr><td>Response time, cable length</td><td>Whole board</td><td>Open</td><td>Open</td><td>Open</td><td>Not specified</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Prime header G_F (J37)

On the Prime, header G_F (J37) has 3.3&nbsp;V on contact 1, 5&nbsp;V on contact 2, PB1 on 3, PJ4 on 4 and ground on 10. A discrepancy in the rail positions on the Prime&rsquo;s physical connector has been noted: verify numbered continuity with the power removed. The header is unshrouded.

See all boards on the [extension boards](/extension-boards) page.
