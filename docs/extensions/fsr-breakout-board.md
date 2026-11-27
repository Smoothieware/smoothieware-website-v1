---
layout: default
title: "FSR breakout board"
description: "A breakout that turns three force-sensitive resistors into one adjustable digital contact or probe signal with comparators: pinout, thresholds, links and limits."
permalink: /extensions/fsr-breakout-board
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Probes</p>
    <h1 id="fsr-breakout-board">FSR breakout board</h1>
    <p class="xb-lead">Connects up to three force-sensitive resistors and turns them into one digital, endstop-style signal. Each sensor has its own adjustable trigger point; any one reaching it changes the output. It is not three independent force measurements and gives no calibrated force value.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/fsr-breakout-board/fsr-breakout-board-diagram.webp" alt="Top view of the FSR breakout board: three two-contact sensor connectors and a three-contact output along the top, three trimmers and a comparator chip in the middle, three small lights along the bottom.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>3 sensors</b><span>two-contact resistive sensors, no polarity</span></div>
  <div class="xb-stat"><b>1 output</b><span>combined digital signal, open drain with a link-selected pull-up</span></div>
  <div class="xb-stat"><b>3.0 to 5.5 V</b><span>supply range marked on the board</span></div>
  <div class="xb-stat"><b>3 trimmers</b><span>5&nbsp;k&Omega;, one trigger point per channel</span></div>
  <div class="xb-stat"><b>4 lights</b><span>one per channel and one for the output</span></div>
  <div class="xb-stat"><b>42 × 40</b><span>millimetres, two M3 holes and two cable-tie holes</span></div>
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
The trigger points depend on the sensor, its preload and the mechanics. The board is marked &ldquo;UNPLUGGED FSR = NO TRIGGER&rdquo;; check this on your setup before relying on it. Do not use it as a machine limit.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>Bed-contact or probe detection with up to three supported force-sensitive resistors, giving one digital result</td></tr>
    <tr><td>Sensor inputs</td><td>Three two-contact connectors (J1 to J3); contact 1 is the sensor input, contact 2 ground. The named sensor is an FSR402.</td></tr>
    <tr><td>Thresholds</td><td>One 5&nbsp;k&Omega; trimmer per channel (RV1 to RV3) sets the trigger point; the comparator has hysteresis feedback</td></tr>
    <tr><td>Combining</td><td>A fourth comparator stage combines the three channel results into one output</td></tr>
    <tr><td>Output</td><td>BSS138 transistor with a 220&nbsp;&Omega; series resistor on the signal. Solder link SJ1, bridged as delivered, connects a 47&nbsp;k&Omega; pull-up to the board supply.</td></tr>
    <tr><td>Supply</td><td>3.0 to 5.5&nbsp;V marked on the board, taken from J4 contact 3.</td></tr>
    <tr><td>Indicators</td><td>Four orange lights (one per channel and one for the output), each with a cut link</td></tr>
    <tr><td>Protection</td><td>Two TPD4E1U06 arrays on the inputs and output</td></tr>
    <tr><td>Test points</td><td>Seven: supply, two grounds, output and one for each channel node (not drawn in the top view)</td></tr>
    <tr><td>Size</td><td>42 &times; 40&nbsp;mm with two M3 mounting holes and two cable-tie holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> through an endstop-style input</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side. The mounting holes, cable-tie holes, test points and link SJ1 are not marked on the drawing.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/fsr-breakout-board/fsr-breakout-board-diagram.webp" alt="Top view of the FSR breakout board with twelve numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:11.8%;top:11%" aria-label="1: FSR 1 connector">1<span class="xb-pop"><b>FSR 1 connector (J1)</b> — a 2-contact connector for the first force-sensitive resistor. A force-sensitive resistor has no polarity, so either wire goes to either contact.</span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:33.4%;top:11%" aria-label="2: FSR 2 connector">2<span class="xb-pop"><b>FSR 2 connector (J2)</b> — the second sensor connector, identical to J1.</span></a>
      <a class="xb-mk xb-pb" href="#tour-3" style="left:55.6%;top:11%" aria-label="3: FSR 3 connector">3<span class="xb-pop"><b>FSR 3 connector (J3)</b> — the third sensor connector, identical to J1.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-4" style="left:79.1%;top:11.4%" aria-label="4: endstop connector">4<span class="xb-pop"><b>Endstop connector (J4)</b> — the combined output: signal, ground and the board supply, marked S, G and 5V. There are two sets of lands for the same three contacts (2.54&nbsp;mm and 2&nbsp;mm). <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-5" style="left:20.2%;top:24%" aria-label="5: protection arrays">5<span class="xb-pop"><b>Protection arrays (U2, U3)</b> — two TPD4E1U06 surge-protection arrays on the sensor inputs and the output (they block ESD pulses, not a current limit).</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-6" style="left:10.3%;top:37.6%" aria-label="6: threshold 1">6<span class="xb-pop"><b>Threshold control 1 (RV1)</b> — a 5&nbsp;k&Omega; trimmer that sets the trigger point of channel 1.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:31.4%;top:37.6%" aria-label="7: threshold 2">7<span class="xb-pop"><b>Threshold control 2 (RV2)</b> — the trigger-point trimmer of channel 2.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-8" style="left:80.7%;top:37.6%" aria-label="8: threshold 3">8<span class="xb-pop"><b>Threshold control 3 (RV3)</b> — the trigger-point trimmer of channel 3.</span></a>
      <a class="xb-mk" href="#tour-9" style="left:58.2%;top:60.5%" aria-label="9: comparator">9<span class="xb-pop"><b>Comparator (U1)</b> — an LMV339 quad comparator: one stage per sensor with hysteresis feedback, and a fourth that combines the three.</span></a>
      <a class="xb-mk xb-pb" href="#tour-10" style="left:49.5%;top:38%" aria-label="10: output transistor">10<span class="xb-pop"><b>Output transistor (Q4)</b> — a BSS138 transistor that drives the endstop signal through a 220&nbsp;&Omega; resistor.</span></a>
      <a class="xb-mk" href="#tour-11" style="left:31.6%;top:90.3%" aria-label="11: channel lights">11<span class="xb-pop"><b>Channel lights (T1 to T3)</b> — three orange lights, one for each channel. Cut links JP1, JP3 and JP4 turn them off. They sit under the transistors Q1 to Q3.</span></a>
      <a class="xb-mk xb-pb" href="#tour-12" style="left:50.7%;top:46.2%" aria-label="12: output light">12<span class="xb-pop"><b>Output light (OUT)</b> — an orange light for the combined result. Cut link JP2 turns it off.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>FSR 1 connector (J1)</b> — a 2-contact connector for the first force-sensitive resistor. A force-sensitive resistor has no polarity, so either wire goes to either contact.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>FSR 2 connector (J2)</b> — the second sensor connector, identical to J1.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>FSR 3 connector (J3)</b> — the third sensor connector, identical to J1.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Endstop connector (J4)</b> — the combined output: signal, ground and the board supply, marked S, G and 5V. There are two sets of lands for the same three contacts (2.54&nbsp;mm and 2&nbsp;mm). <i>See the pinout.</i></div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Protection arrays (U2, U3)</b> — two TPD4E1U06 surge-protection arrays on the sensor inputs and the output (they block ESD pulses, not a current limit).</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Threshold control 1 (RV1)</b> — a 5&nbsp;k&Omega; trimmer that sets the trigger point of channel 1.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Threshold control 2 (RV2)</b> — the trigger-point trimmer of channel 2.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Threshold control 3 (RV3)</b> — the trigger-point trimmer of channel 3.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Comparator (U1)</b> — an LMV339 quad comparator: one stage per sensor with hysteresis feedback, and a fourth that combines the three.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Output transistor (Q4)</b> — a BSS138 transistor that drives the endstop signal through a 220&nbsp;&Omega; resistor.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Channel lights (T1 to T3)</b> — three orange lights, one for each channel. Cut links JP1, JP3 and JP4 turn them off. They sit under the transistors Q1 to Q3.</div></li>
    <li id="tour-12"><span class="xb-n">12</span><div><b>Output light (OUT)</b> — an orange light for the combined result. Cut link JP2 turns it off.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1, J2, J3: sensors

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Function</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-sig">FSRn_IN</span> sensor input, and the node the trimmer and the comparator read</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-gnd">GND</span> sensor return</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The sensor has no polarity (the board is marked NO POLARITY), so either wire can go to either contact. An unplugged sensor should not trigger; check this on your setup.

### J4: endstop output

Contact 1 is at the left, next to the S in the tour. The larger lands on top and the smaller ones below are two footprints for the same three contacts.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Marking</th><th>Function</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>S</td><td><span class="xb-pill xb-p-sig">ENDSTOP</span> combined digital output, open drain</td></tr>
    <tr><td>2</td><td>G</td><td><span class="xb-pill xb-p-gnd">GND</span> ground</td></tr>
    <tr><td>3</td><td>5V</td><td><span class="xb-pill xb-p-5v">VCC</span> board supply, 3.0 to 5.5&nbsp;V</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Solder links and test points

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Item</th><th>Function</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>SJ1 (PULLUP_EN)</td><td>Connects a 47&nbsp;k&Omega; pull-up from the output to the board supply</td><td>Bridged</td></tr>
    <tr><td>JP1 to JP4</td><td>Cut to turn off the channel 1, output, channel 2 and channel 3 lights (JP1, JP2, JP3, JP4 respectively)</td><td>Bridged</td></tr>
    <tr><td>TP1, TP2, TP7</td><td>Supply, ground, ground</td><td>—</td></tr>
    <tr><td>TP3</td><td>Endstop output</td><td>—</td></tr>
    <tr><td>TP4, TP5, TP6</td><td>Channel 1, 2 and 3 nodes</td><td>—</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>The FSR breakout board.</span></div>
  <div class="xb-card"><b>Force-sensitive resistors</b><span>One to three, mechanically supported, with their data sheet; the FSR402 is the named example.</span></div>
  <div class="xb-card"><b>Three wires</b><span>Signal, ground and supply to the controller input.</span></div>
  <div class="xb-card"><b>A screwdriver</b><span>To adjust each threshold trimmer against your own sensor and preload.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Decide how SJ1 will be</h3>
    <p>The output is open drain, so something must pull it up. With SJ1 bridged the board does it with 47&nbsp;k&Omega; to its own supply. If the host provides the pull-up, open SJ1. Check which state your board has before wiring.</p>
  </li>
  <li class="xb-step">
    <h3>Wire the controller</h3>
    <p>With the power off, connect header G_F (J37) contact 3 (PB1) to J4 contact 1, contact 10 (ground) to J4 contact 2 and a supply of 3.0 to 5.5&nbsp;V to J4 contact 3. Leave the sensors disconnected for now. Check numbered continuity and the connector orientation first.</p>
    <p class="xb-expect">Check the rail positions on the Prime&rsquo;s physical header before powering; see the Prime header note in the electrical appendix.</p>
  </li>
  <li class="xb-step">
    <h3>Check the idle state</h3>
    <p>Power the board with no sensors fitted and read the input with <code>M119</code>. The board should not trigger with a sensor unplugged; confirm this on your board.</p>
  </li>
  <li class="xb-step">
    <h3>Fit the sensors and set the thresholds</h3>
    <p>Fit each sensor with its real mounting and preload, then turn its trimmer until the light just changes on the contact you want. The trigger point depends on the sensor and mechanics and cannot be read from the board.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Read the combined output</td><td>Endstops (V2)</td><td>The diagnostic entry below</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Reserve PB1 for this input and use an existing configured X actuator. Merge this into the existing `[endstops]` section.

```ini
[endstops]
fsr_state_diagnostic.enable = true
fsr_state_diagnostic.pin = PB1^
fsr_state_diagnostic.axis = X
fsr_state_diagnostic.homing_direction = none
fsr_state_diagnostic.limit_enable = false
```

The `^` enables the host pull-up and nothing is inverted. Homing and limit action stay disabled. Send `M119` and find `(X)PB1^:0` or `(X)PB1^:1`. The output is normally closed in style; compare readings with a sensor pressed and released to find its level at idle and at a trigger. This entry follows the [SmoothieV2 source](https://github.com/Smoothieware/SmoothieV2/tree/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src).

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 170" role="img" aria-labelledby="xb-how-t">
    <title id="xb-how-t">Each sensor sits in a divider read by a comparator; the three comparator results are combined and drive a transistor that is the endstop output.</title>
    <g font-size="13" font-weight="700" text-anchor="middle" fill="#e6ebf2">
      <rect x="20" y="55" width="170" height="60" rx="8" fill="#212936" stroke="#e0a877"/><text x="105" y="80">FSR and trimmer</text><text x="105" y="100" font-weight="400" fill="#a9b4c2">divider per channel</text>
      <rect x="250" y="55" width="170" height="60" rx="8" fill="#212936" stroke="#6fe08a"/><text x="335" y="80">Comparator</text><text x="335" y="100" font-weight="400" fill="#a9b4c2">with hysteresis</text>
      <rect x="480" y="55" width="170" height="60" rx="8" fill="#212936" stroke="#6fe08a"/><text x="565" y="80">Combining stage</text><text x="565" y="100" font-weight="400" fill="#a9b4c2">fourth comparator</text>
      <rect x="710" y="55" width="130" height="60" rx="8" fill="#212936" stroke="#5fb3ff"/><text x="775" y="80">Q4</text><text x="775" y="100" font-weight="400" fill="#a9b4c2">open drain</text>
      <rect x="880" y="55" width="100" height="60" rx="8" fill="#1f2226" stroke="#dfe4ee"/><text x="930" y="90">J4.1</text>
    </g>
    <g stroke-width="3" fill="none" stroke="#a9b4c2"><path d="M190 85H250"/><path d="M420 85H480"/><path d="M650 85H710"/><path d="M840 85H880"/></g>
  </svg>
  </div>
  <figcaption>The path from the sensors to the endstop output. Each channel has its own divider, trigger point and comparator.</figcaption>
</figure>
{:/nomarkdown}

A force-sensitive resistor changes resistance with pressure. On each channel a fixed 470&nbsp;&Omega; resistor, the 5&nbsp;k&Omega; trimmer and the sensor form a divider from the supply to ground, and a 4.7&nbsp;k&Omega; resistor feeds the comparator input. The reference comes from a 10&nbsp;k&Omega; divider and a 470&nbsp;k&Omega; feedback resistor gives hysteresis. The three channel results are combined by a fourth comparator stage and drive Q4, whose output is the endstop signal.

The trigger point depends on sensor variation and preload and cannot be inferred from the board. Check the behaviour with a sensor unplugged on your setup.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Output never changes</td><td>No supply on J4 contact 3, or a trimmer set beyond the sensor&rsquo;s range. Watch the channel lights.</td></tr>
    <tr><td>Output always changes</td><td>Trimmer too sensitive for the preload, or a channel node shorted.</td></tr>
    <tr><td>Floating signal</td><td>No pull-up: SJ1 open and no host pull-up.</td></tr>
    <tr><td>One sensor does not register</td><td>Watch its channel light and test point; adjust its own trimmer.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-amber"></span>T1, T2, T3</th><th><span class="xb-led xb-led-amber"></span>OUT</th></tr></thead>
  <tbody>
    <tr><td>Where</td><td>Along the bottom edge</td><td>Middle of the board, left of the comparator</td></tr>
    <tr><td>Lit means</td><td>That channel&rsquo;s comparator output is active</td><td>The combined result is active</td></tr>
    <tr><td>Disable it</td><td>Cut JP1, JP3, JP4</td><td>Cut JP2</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/fsr-breakout-board/fsr-breakout-board-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram.</td></tr>
    <tr><td><a href="/images/extensions/fsr-breakout-board/fsr-breakout-board-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/fsr-breakout-board/fsr-breakout-board-diagram.webp">Board drawing (WebP)</a></td><td>The top view used on this page, at full resolution</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side. The two cable-tie holes are 2.5&nbsp;mm.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-fsr-mount-t">
  <title id="xb-fsr-mount-t">Mounting drawing of the FSR breakout board, component side: outline 42 by 40 millimetres with 2 mounting holes and 2 cable-tie holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="301.5" y="78.0" width="357.0" height="340.0" rx="8.5" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M301.5 56H658.5"/><path d="M301.5 50V62"/><path d="M658.5 50V62"/><path d="M684.5 78.0V418.0"/><path d="M678.5 78.0h12"/><path d="M678.5 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">42</text>
  <text x="696.5" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">40</text>
  <circle cx="301.5" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="289.5" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M243.5 104.0h30" fill="none"/><path d="M277.5 104.0l-8 -4v8z"/><path d="M243.5 104.0v30" fill="none"/><path d="M243.5 138.0l-4 -8h8z"/></g>
  <text x="281.5" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="239.5" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="331.2" cy="379.8" r="13.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M313.6 379.8h35.2M331.2 362.1v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="317.6" y="356.1" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  3.50, 35.50</text>
  <circle cx="501.2" cy="379.8" r="13.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M483.6 379.8h35.2M501.2 362.1v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="514.9" y="356.1" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  23.50, 35.50</text>
  <circle cx="548.0" cy="358.5" r="10.6" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <circle cx="590.5" cy="358.5" r="10.6" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <text x="569.2" y="338.9" text-anchor="middle" font-size="12" fill="#a9b4c2">cable tie</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 42 × 40&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>3.50</td><td>35.50</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>23.50</td><td>35.50</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>–</td><td>29.00</td><td>33.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
    <tr><td>–</td><td>34.00</td><td>33.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
  </tbody>
</table></div>

{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Design values and parts-list values, as the last column says.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Supply</td><td>J4 contact 3</td><td>3.0 V</td><td>—</td><td>5.5 V</td><td>Marked on the board</td></tr>
    <tr><td>Divider resistor</td><td>R1 to R3</td><td>—</td><td>470 &Omega;</td><td>—</td><td>From the parts list, with a 5 k&Omega; trimmer</td></tr>
    <tr><td>Input resistor</td><td>R4 to R6</td><td>—</td><td>4.7 k&Omega;</td><td>—</td><td>From the parts list</td></tr>
    <tr><td>Hysteresis feedback</td><td>R13 to R15</td><td>—</td><td>470 k&Omega;</td><td>—</td><td>From the parts list</td></tr>
    <tr><td>Output series resistor</td><td>R29</td><td>—</td><td>220 &Omega;</td><td>—</td><td>From the parts list</td></tr>
    <tr><td>Output pull-up</td><td>R30 through SJ1</td><td>—</td><td>47 k&Omega;</td><td>—</td><td>Only when SJ1 is bridged</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Prime header G_F (J37)

On the Prime, header G_F (J37) has 3.3&nbsp;V on contact 1, 5&nbsp;V on contact 2, PB1 on 3, PJ4 on 4 and ground on 10. Verify numbered continuity with the power removed. The header is unshrouded.

See all boards on the [extension boards](/extension-boards) page.
