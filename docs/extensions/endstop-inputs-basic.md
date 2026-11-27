---
layout: default
title: "Endstop inputs (basic)"
description: "Connect seven endstop switches to Smoothieboard V2 over one ribbon cable, each with its own light and filter: pinout, wiring, configuration and limits."
permalink: /extensions/endstop-inputs-basic
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Inputs</p>
    <h1 id="endstop-inputs-basic">Endstop inputs (basic)</h1>
    <p class="xb-lead">Connect seven limit or homing switches to your controller through one ten-way cable. Each input has a three-pin connector, a red light that shows its state and a simple filter. A resettable fuse and protection diodes guard the wires that leave the board.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/endstop-inputs-basic/endstop-inputs-basic-diagram.png" alt="Top view of the Endstop inputs (basic) board: seven three-pin connectors along the top edge, a ten-pin connector at each end, and seven rows of small parts between them.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>7</b><span>switch inputs</span></div>
  <div class="xb-stat"><b>7 lights</b><span>one per input</span></div>
  <div class="xb-stat"><b>3.3 or 5 V</b><span>sensor supply, set by a jumper</span></div>
  <div class="xb-stat"><b>0.8 ms</b><span>delay when a switch closes, simulated</span></div>
  <div class="xb-stat"><b>1 cable</b><span>ten ways to the controller</span></div>
  <div class="xb-stat"><b>77 × 27</b><span>millimetres, two layers</span></div>
</div>

<nav class="xb-nav" aria-label="On this page">
  <a href="#compare-endstop-boards">Compare boards</a>
  <a href="#specs">Tech specs</a>
  <a href="#tour">Board tour</a>
  <a href="#pinout">Pinout</a>
  <a href="#what-you-need">What you need</a>
  <a href="#get-started">Get started</a>
  <a href="#configuration">Configuration</a>
  <a href="#sensors">Wiring switches</a>
  <a href="#how-it-works">How it works</a>
  <a href="#leds">Lights</a>
  <a href="#options">Options</a>
  <a href="#chaining">Chaining</a>
  <a href="#troubleshooting">Troubleshooting</a>
  <a href="#downloads">Downloads</a>
  <a href="#mounting">Mounting</a>
  <a href="#electrical">Electrical</a>
  <a href="#simulation">Simulation</a>
  <a href="#historical">Historical page</a>
</nav>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  The <b>+</b> pins share one <b>resettable fuse</b>. It reacts slowly, so a short from + to − still loads the controller&rsquo;s supply until it trips: wire with all power off. The inputs have no isolation, nothing here has been surge tested, and the board is not a safety device: wire an emergency stop so that it cuts power by itself.
</sl-alert>

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <b>Never put more than 5&nbsp;V on an S pin</b>, in either jumper position. An electronic sensor must also pull S below about <b>0.5&nbsp;V</b> to read low: see <a href="#sensors">before connecting one</a>.
</sl-alert>

{% include _includes/endstop-board-comparison.html %}

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Inputs</td><td>Seven, INP0 to INP6, each with signal, ground and supply pins</td></tr>
    <tr><td>Meant for</td><td>Mechanical switches, dry contacts to ground, and sensors that pull low strongly enough</td></tr>
    <tr><td>Sensor supply</td><td>3.3&nbsp;V or 5&nbsp;V from the controller, one jumper for all seven, through one resettable fuse (holds 0.2&nbsp;A at 23&nbsp;&deg;C).</td></tr>
    <tr><td>Pull-up</td><td>1&nbsp;k&Omega; to 3.3&nbsp;V in each channel, whatever the jumper says</td></tr>
    <tr><td>Filter</td><td>5.6&nbsp;k&Omega; and 100&nbsp;nF between each channel and its controller pin</td></tr>
    <tr><td>Delay</td><td>0.8&nbsp;ms to read closed and 0.7&nbsp;ms to read open (simulated)</td></tr>
    <tr><td>Signal levels at the controller</td><td>Open: 3.3&nbsp;V in both jumper positions. Closed: about 0.28&nbsp;V. Not inverted. (Simulated.)</td></tr>
    <tr><td>Indicators</td><td>One red light per input, lit while the input is pulled low</td></tr>
    <tr><td>Controller connectors</td><td>INPUT Y and CHAIN Y, 2×5 at 1.27&nbsp;mm (Gadgeteer type Y)</td></tr>
    <tr><td>Sensor connectors</td><td>Seven 3-pin 2.54&nbsp;mm keyed headers (Molex KK&nbsp;254, 22-23-2031)</td></tr>
    <tr><td>Protection</td><td>A diode against static discharge on each S pin and on the + supply. Fitted, not tested.</td></tr>
    <tr><td>Test points</td><td>Pads on the back for the seven signals, the supplies and ground</td></tr>
    <tr><td>Isolation</td><td>None. Controller ground and sensor ground are the same.</td></tr>
    <tr><td>Size</td><td>77 × 27&nbsp;mm, two copper layers, four M3 holes on 70 × 20&nbsp;mm</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> and Smoothieware V2, through the <a href="/endstops">endstops</a> and <a href="/zprobe">probe</a> modules</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN OHL v1.2</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side, with the sensor connectors at the top.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/endstop-inputs-basic/endstop-inputs-basic-diagram.png" alt="Top view of the Endstop inputs (basic) board with eleven numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pl" href="#tour-1" style="left:7.0%;top:50.0%" aria-label="1: controller connector (input y)">1<span class="xb-pop"><b>Controller connector (INPUT Y)</b> — a 2×5, 1.27 mm Gadgeteer Y shrouded header for the ribbon cable from the controller. <i>Pin 1 is the lower contact of its right-hand column.</i></span></a>
      <a class="xb-mk xb-pr" href="#tour-2" style="left:93.0%;top:50.0%" aria-label="2: chain connector (chain y)">2<span class="xb-pop"><b>Chain connector (CHAIN Y)</b> — a second header wired contact for contact to INPUT Y, for another board.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-3" style="left:15.8%;top:15.5%" aria-label="3: sensor connectors inp0 to inp6">3<span class="xb-pop"><b>Sensor connectors INP0 to INP6</b> — seven 3-pin 2.54 mm keyed headers, one per switch. <i>Printed pin order from left to right: + , − , S.</i></span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-4" style="left:12.4%;top:41.6%" aria-label="4: input lights">4<span class="xb-pop"><b>Input lights</b> — one red light per input, lit while that input is pulled low, for example while a switch to ground is closed.</span></a>
      <a class="xb-mk xb-pl" href="#tour-5" style="left:12.4%;top:50.6%" aria-label="5: input diodes">5<span class="xb-pop"><b>Input diodes</b> — one low-drop (Schottky) diode per input between the sensor’s S pin and the rest of the channel.</span></a>
      <a class="xb-mk xb-pl" href="#tour-6" style="left:20.6%;top:67.2%" aria-label="6: filter capacitors">6<span class="xb-pop"><b>Filter capacitors</b> — one 100 nF capacitor per input, which smooths contact bounce and short noise pulses.</span></a>
      <a class="xb-mk xb-pr" href="#tour-7" style="left:79.1%;top:62.0%" aria-label="7: signal links jp2 to jp8">7<span class="xb-pop"><b>Signal links JP2 to JP8</b> — one cuttable solder link per input, between the channel and its controller pin. <i>All are closed as delivered.</i></span></a>
      <a class="xb-mk" href="#tour-8" style="left:45.6%;top:82.8%" aria-label="8: supply selector jp1">8<span class="xb-pop"><b>Supply selector JP1</b> — a three-pin header whose jumper cap picks 3.3 V (left) or 5 V (right) for the + pins only. <i>The signals to the controller stay at 3.3 V.</i></span></a>
      <a class="xb-mk" href="#tour-10" style="left:21.1%;top:43.4%" aria-label="10: protection diodes">10<span class="xb-pop"><b>Protection diodes</b> — one beside each channel, from the S pin to ground, plus one on the sensor supply. They divert static discharge.</span></a>
      <a class="xb-mk xb-pr" href="#tour-11" style="left:64.5%;top:81.8%" aria-label="11: resettable fuse">11<span class="xb-pop"><b>Resettable fuse</b> — in the sensor supply, between the jumper and the + pins. It goes high-resistance on a lasting overload and recovers after the fault is removed and it cools.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-9" style="left:5.7%;top:15.5%" aria-label="9: mounting holes">9<span class="xb-pop"><b>Mounting holes</b> — four 3.2 mm holes for M3 screws on a 70 × 20 mm rectangle, not connected to anything.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Controller connector (INPUT Y)</b> — a 2×5, 1.27 mm Gadgeteer Y shrouded header for the ribbon cable from the controller. <small>Pin 1 is the lower contact of its right-hand column.</small></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain connector (CHAIN Y)</b> — a second header wired contact for contact to INPUT Y, for another board.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Sensor connectors INP0 to INP6</b> — seven 3-pin 2.54 mm keyed headers, one per switch. <small>Printed pin order from left to right: + , − , S.</small></div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Input lights</b> — one red light per input, lit while that input is pulled low, for example while a switch to ground is closed.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Input diodes</b> — one low-drop (Schottky) diode per input between the sensor’s S pin and the rest of the channel.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Filter capacitors</b> — one 100 nF capacitor per input, which smooths contact bounce and short noise pulses.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Signal links JP2 to JP8</b> — one cuttable solder link per input, between the channel and its controller pin. <small>All are closed as delivered.</small></div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Supply selector JP1</b> — a three-pin header whose jumper cap picks 3.3 V (left) or 5 V (right) for the + pins only. <small>The signals to the controller stay at 3.3 V.</small></div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Mounting holes</b> — four 3.2 mm holes for M3 screws on a 70 × 20 mm rectangle, not connected to anything.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Protection diodes</b> — one beside each channel, from the S pin to ground, plus one on the sensor supply. They divert static discharge.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Resettable fuse</b> — in the sensor supply, between the jumper and the + pins. It goes high-resistance on a lasting overload and recovers after the fault is removed and it cools.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. Repeated channels have one marker. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### INPUT Y: controller connector

Connect INPUT Y to the header labelled **G_F** on the Smoothieboard V2 Prime with a straight ten-way cable. The last column is the name you use in the configuration file.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Pin</th><th>Signal</th><th>What it does</th><th>Prime pin (header G_F)</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Feeds the lights and input pull-ups, and the + pins in the 3V3 position</td><td>3.3 V</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Feeds the + pins in the 5V position</td><td>5 V</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">INP0</span></td><td>State of input INP0: high when open, low when closed</td><td><code>PB1</code></td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">INP1</span></td><td>State of input INP1: high when open, low when closed</td><td><code>PJ4</code></td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">INP2</span></td><td>State of input INP2: high when open, low when closed</td><td><code>PA4</code></td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">INP3</span></td><td>State of input INP3: high when open, low when closed</td><td><code>PG0</code></td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-sig">INP4</span></td><td>State of input INP4: high when open, low when closed</td><td><code>PJ3</code></td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">INP5</span></td><td>State of input INP5: high when open, low when closed</td><td><code>PG1</code></td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">INP6</span></td><td>State of input INP6: high when open, low when closed</td><td><code>PJ2</code></td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Ground</td><td>GND</td></tr>
  </tbody>
</table></div>
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Controller connector pin positions">
  <svg viewBox="0 0 1000 320" role="img" aria-labelledby="xb-eb-conn">
    <title id="xb-eb-conn">INPUT Y seen from above: odd pins in the right column and even pins in the left column, pin 1 at the bottom right.</title>
    <rect x="400" y="24" width="200" height="268" rx="10" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><rect x="528" y="237" width="34" height="34" rx="5" fill="#c9a14a"/><text x="545" y="259" text-anchor="middle" font-size="14" font-weight="700" fill="#15171a">1</text><text x="750" y="259" text-anchor="start" font-size="16" fill="#ff8a65">3.3 V</text><path d="M569 254H738" fill="none" stroke="#59616e" stroke-width="1.5"/><rect x="438" y="237" width="34" height="34" rx="5" fill="#c9a14a"/><text x="455" y="259" text-anchor="middle" font-size="14" font-weight="700" fill="#15171a">2</text><text x="250" y="259" text-anchor="end" font-size="16" fill="#ffa23a">5 V</text><path d="M262 254H431" fill="none" stroke="#59616e" stroke-width="1.5"/><rect x="528" y="189" width="34" height="34" rx="5" fill="#c9a14a"/><text x="545" y="211" text-anchor="middle" font-size="14" font-weight="700" fill="#15171a">3</text><text x="750" y="211" text-anchor="start" font-size="16" fill="#5fb3ff">INP0</text><path d="M569 206H738" fill="none" stroke="#59616e" stroke-width="1.5"/><rect x="438" y="189" width="34" height="34" rx="5" fill="#c9a14a"/><text x="455" y="211" text-anchor="middle" font-size="14" font-weight="700" fill="#15171a">4</text><text x="250" y="211" text-anchor="end" font-size="16" fill="#5fb3ff">INP1</text><path d="M262 206H431" fill="none" stroke="#59616e" stroke-width="1.5"/><rect x="528" y="141" width="34" height="34" rx="5" fill="#c9a14a"/><text x="545" y="163" text-anchor="middle" font-size="14" font-weight="700" fill="#15171a">5</text><text x="750" y="163" text-anchor="start" font-size="16" fill="#5fb3ff">INP2</text><path d="M569 158H738" fill="none" stroke="#59616e" stroke-width="1.5"/><rect x="438" y="141" width="34" height="34" rx="5" fill="#c9a14a"/><text x="455" y="163" text-anchor="middle" font-size="14" font-weight="700" fill="#15171a">6</text><text x="250" y="163" text-anchor="end" font-size="16" fill="#5fb3ff">INP3</text><path d="M262 158H431" fill="none" stroke="#59616e" stroke-width="1.5"/><rect x="528" y="93" width="34" height="34" rx="5" fill="#c9a14a"/><text x="545" y="115" text-anchor="middle" font-size="14" font-weight="700" fill="#15171a">7</text><text x="750" y="115" text-anchor="start" font-size="16" fill="#5fb3ff">INP4</text><path d="M569 110H738" fill="none" stroke="#59616e" stroke-width="1.5"/><rect x="438" y="93" width="34" height="34" rx="5" fill="#c9a14a"/><text x="455" y="115" text-anchor="middle" font-size="14" font-weight="700" fill="#15171a">8</text><text x="250" y="115" text-anchor="end" font-size="16" fill="#5fb3ff">INP5</text><path d="M262 110H431" fill="none" stroke="#59616e" stroke-width="1.5"/><rect x="528" y="45" width="34" height="34" rx="5" fill="#c9a14a"/><text x="545" y="67" text-anchor="middle" font-size="14" font-weight="700" fill="#15171a">9</text><text x="750" y="67" text-anchor="start" font-size="16" fill="#5fb3ff">INP6</text><path d="M569 62H738" fill="none" stroke="#59616e" stroke-width="1.5"/><rect x="438" y="45" width="34" height="34" rx="5" fill="#c9a14a"/><text x="455" y="67" text-anchor="middle" font-size="14" font-weight="700" fill="#15171a">10</text><text x="250" y="67" text-anchor="end" font-size="16" fill="#a9b4c2">GND</text><path d="M262 62H431" fill="none" stroke="#59616e" stroke-width="1.5"/>
  </svg>
  </div>
  <figcaption>INPUT Y seen from above, in the same orientation as the board tour. CHAIN Y has the same layout. The drawing is enlarged; the real pins are 1.27&nbsp;mm apart.</figcaption>
</figure>
{:/nomarkdown}

### Sensor connectors INP0 to INP6

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Pin</th><th>Printed</th><th>Function</th></tr></thead>
  <tbody>
    <tr><td>3 (left)</td><td>+</td><td><span class="xb-pill xb-p-3v3">3.3 V or 5 V, set by JP1, fused</span></td></tr>
    <tr><td>2 (middle)</td><td>−</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>1 (right)</td><td>S</td><td><span class="xb-pill xb-p-sig">Signal</span></td></tr>
  </tbody>
</table></div>
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Sensor connector pin positions">
  <svg viewBox="0 0 1000 200" role="img" aria-labelledby="xb-eb-sensor">
    <title id="xb-eb-sensor">A sensor connector seen from above, from left to right: pin 3 supply marked plus, pin 2 ground marked minus, pin 1 signal marked S.</title>
    <rect x="310" y="40" width="380" height="120" rx="10" fill="#e9e6dc" stroke="#8a8779" stroke-width="2"/><rect x="370" y="80" width="40" height="40" rx="5" fill="#c9a14a"/><text x="390" y="106" text-anchor="middle" font-size="18" font-weight="700" fill="#15171a">3</text><text x="390" y="28" text-anchor="middle" font-size="22" font-weight="700" fill="#ff8a65">+</text><text x="390" y="188" text-anchor="middle" font-size="16" fill="#ff8a65">sensor supply</text><rect x="480" y="80" width="40" height="40" rx="5" fill="#c9a14a"/><text x="500" y="106" text-anchor="middle" font-size="18" font-weight="700" fill="#15171a">2</text><text x="500" y="28" text-anchor="middle" font-size="22" font-weight="700" fill="#a9b4c2">−</text><text x="500" y="188" text-anchor="middle" font-size="16" fill="#a9b4c2">ground</text><rect x="590" y="80" width="40" height="40" rx="5" fill="#c9a14a"/><text x="610" y="106" text-anchor="middle" font-size="18" font-weight="700" fill="#15171a">1</text><text x="610" y="28" text-anchor="middle" font-size="22" font-weight="700" fill="#5fb3ff">S</text><text x="610" y="188" text-anchor="middle" font-size="16" fill="#5fb3ff">signal</text>
  </svg>
  </div>
  <figcaption>Every sensor connector, seen from above with the connectors at the top of the board. The large numbers are pin numbers.</figcaption>
</figure>
{:/nomarkdown}

Check the order of any ready-made switch cable against the printed **+ − S** before plugging it in: a different order can short the supply.

### CHAIN Y: chain connector

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Pin</th><th>On CHAIN Y</th><th>Used by this board</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>3.3&nbsp;V from INPUT Y</td><td>Yes: lights, pull-ups and the 3V3 position</td><td>Passed through</td></tr>
    <tr><td>2</td><td>5&nbsp;V from INPUT Y</td><td>Only in the 5V position</td><td>Passed through</td></tr>
    <tr><td>3</td><td>Controller pin of INP0</td><td>Yes, through link JP2</td><td>Passed through; JP2 closed</td></tr>
    <tr><td>4</td><td>Controller pin of INP1</td><td>Yes, through link JP3</td><td>Passed through; JP3 closed</td></tr>
    <tr><td>5</td><td>Controller pin of INP2</td><td>Yes, through link JP4</td><td>Passed through; JP4 closed</td></tr>
    <tr><td>6</td><td>Controller pin of INP3</td><td>Yes, through link JP5</td><td>Passed through; JP5 closed</td></tr>
    <tr><td>7</td><td>Controller pin of INP4</td><td>Yes, through link JP6</td><td>Passed through; JP6 closed</td></tr>
    <tr><td>8</td><td>Controller pin of INP5</td><td>Yes, through link JP7</td><td>Passed through; JP7 closed</td></tr>
    <tr><td>9</td><td>Controller pin of INP6</td><td>Yes, through link JP8</td><td>Passed through; JP8 closed</td></tr>
    <tr><td>10</td><td>Ground</td><td>Yes</td><td>Passed through</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards"><div class="xb-card"><b>Controller</b><span>A Smoothieboard V2 Prime running Smoothieware V2, with its G_F header free.</span></div><div class="xb-card"><b>10-way ribbon cable</b><span>1.27&nbsp;mm pitch, 2×5 cable connectors at both ends, wired pin 1 to pin 1.</span></div><div class="xb-card"><b>Switches</b><span>Up to seven mechanical switches, normally closed for limits and homing.</span></div><div class="xb-card"><b>Switch cables</b><span>With a 3-way 2.54&nbsp;mm housing that mates with the Molex KK&nbsp;254 header.</span></div><div class="xb-card"><b>Jumper cap</b><span>One 2.54&nbsp;mm cap for the supply selector JP1.</span></div><div class="xb-card"><b>Mounting</b><span>Four M3 screws and spacers, so the underside touches no metal.</span></div></div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Minimal wiring">
  <svg viewBox="0 0 1000 280" role="img" aria-labelledby="xb-eb-wire">
    <title id="xb-eb-wire">A ribbon cable from header G_F to INPUT Y, and a normally closed limit switch between the S and minus pins of INP0.</title>
    <rect x="20" y="60" width="220" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="130.0" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Smoothieboard</text><text x="130.0" y="108" text-anchor="middle" font-size="14" fill="#a9b4c2">V2 Prime</text><text x="130.0" y="128" text-anchor="middle" font-size="14" fill="#a9b4c2">header G_F</text><rect x="400" y="40" width="260" height="190" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="530.0" y="66" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Endstop inputs</text><text x="530.0" y="88" text-anchor="middle" font-size="14" fill="#a9b4c2">(basic)</text><text x="530.0" y="108" text-anchor="middle" font-size="14" fill="#a9b4c2"></text><text x="530.0" y="128" text-anchor="middle" font-size="14" fill="#a9b4c2">INPUT Y · INP0</text><path d="M240 135H400" fill="none" stroke="#5fb3ff" stroke-width="12"/><text x="320" y="112" text-anchor="middle" font-size="14" fill="#a9b4c2">10-way ribbon cable</text><text x="320" y="164" text-anchor="middle" font-size="14" fill="#a9b4c2">pin 1 to pin 1</text><rect x="790" y="60" width="190" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="885.0" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Limit switch</text><text x="885.0" y="108" text-anchor="middle" font-size="14" fill="#a9b4c2">normally closed</text><text x="885.0" y="128" text-anchor="middle" font-size="14" fill="#a9b4c2">contact</text><path d="M660 105H790" fill="none" stroke="#5fb3ff" stroke-width="4"/><text x="725" y="95" text-anchor="middle" font-size="18" font-weight="700" fill="#5fb3ff">S</text><path d="M660 175H790" fill="none" stroke="#a9b4c2" stroke-width="4"/><text x="725" y="198" text-anchor="middle" font-size="22" font-weight="700" fill="#a9b4c2">−</text><text x="500" y="262" text-anchor="middle" font-size="14" fill="#a9b4c2">The + pin stays unconnected for a plain switch.</text>
  </svg>
  </div>
  <figcaption>Minimal wiring: one ribbon cable and one switch.</figcaption>
</figure>
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Set the supply jumper</h3>
    <p>With all power off, put the jumper cap on JP1 across the middle pin and the pin marked <b>3V3</b> (the left one) for a plain switch. Never fit a cap or solder across all three pins.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the controller</h3>
    <p>Plug the ribbon cable into the header labelled <b>G_F</b> and into <b>INPUT Y</b>, pin 1 to pin 1.</p>
  </li>
  <li class="xb-step">
    <h3>Connect one switch</h3>
    <p>Wire the normally closed contact between <b>S</b> and <b>−</b> of <b>INP0</b>.</p>
  </li>
  <li class="xb-step">
    <h3>Power the controller</h3>
    <p>No machine motion is needed for this test.</p>
    <p class="xb-expect">The red light under INP0 is lit, and goes out while you press the switch.</p>
  </li>
  <li class="xb-step">
    <h3>Configure and check</h3>
    <p>Add <a href="#config-limits">example 1</a> for the axis, restart, and send <code>M119</code> with the switch released and then pressed.</p>
    <p class="xb-expect">The reply shows 0 when released and 1 when pressed.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

The board needs no module of its own: each input is an ordinary controller pin, given to the firmware module that should read it.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Stop the machine when an axis runs into its end</td><td><a href="/endstops">Endstops</a>, as limit switches</td><td><a href="#config-limits">1. Limit switches</a></td></tr>
    <tr><td>Find the zero position</td><td><a href="/endstops">Endstops</a>, as homing switches</td><td><a href="#config-homing">2. Homing switch</a></td></tr>
    <tr><td>Touch off with a contact probe or touch plate</td><td><a href="/zprobe">Probe</a></td><td><a href="#config-probe">3. Probe</a></td></tr>
    <tr><td>Run a command when a door opens</td><td><a href="/switch">Switch</a>, with an input pin</td><td><a href="#config-input">4. Door switch</a></td></tr>
    <tr><td>Halt with a button</td><td><a href="/killbutton">Kill button</a></td><td><a href="#config-kill">5. Kill button</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

For plain switches, end each pin name with **`^`**, which turns the controller&rsquo;s pull-up on (the firmware also does so when the name has neither `^` nor `v`). A closed switch then still reads low (at most 0.94&nbsp;V simulated, below the 0.99&nbsp;V limit), and an unplugged cable reads as triggered. If a long or resistive cable makes a closed switch read open, `-` (no pull resistor) gives more margin, but an unplugged cable is then not detected. Each pin can be claimed by one entry only. Merge the lines into your configuration file, adding to a section that already exists.

### 1. Limit switches (Endstops module) {#config-limits}

Normally closed switches on INP0 to INP2:

```ini
[endstops]
maxx.enable       = true
maxx.pin          = PB1^      # INP0  (G_F pin 3)
maxx.axis         = X
maxx.limit_enable = true      # halt when hit during a move

maxy.enable       = true
maxy.pin          = PJ4^      # INP1  (G_F pin 4)
maxy.axis         = Y
maxy.limit_enable = true

maxz.enable       = true
maxz.pin          = PA4^      # INP2  (G_F pin 5)
maxz.axis         = Z
maxz.limit_enable = true
```

### 2. Homing switch (Endstops module) {#config-homing}

A normally closed switch at the low end of X on INP3, used by `G28`:

```ini
[endstops]
minx.enable           = true
minx.pin              = PG0^         # INP3  (G_F pin 6)
minx.axis             = X
minx.homing_direction = home_to_min
minx.homing_position  = 0
minx.max_travel       = 500          # a little more than the axis length, mm
minx.fast_rate        = 20           # mm/s for the first approach
minx.slow_rate        = 5            # mm/s for the accurate approach
minx.retract          = 5            # mm to back off between the two
minx.limit_enable     = false
```

Choose rates at which your axis can stop within the switch&rsquo;s spare travel. The input takes about 1&nbsp;ms to respond.

### 3. Probe (Probe module) {#config-probe}

A normally open contact on INP6, such as a touch plate that the tool connects to ground:

```ini
[zprobe]
enable        = true
probe_pin     = PJ2!^         # INP6  (G_F pin 9), contact that closes to ground
slow_feedrate = 2             # mm/s while probing
fast_feedrate = 20            # mm/s between probe points
probe_height  = 5             # mm above the surface to start from
```

Check with `M119` that the probe reads 0 at rest and 1 when you close the contact by hand, before any probing move.

### 4. Door switch (Switch module with an input pin) {#config-input}

A contact on INP4 that is closed while the door is shut:

```ini
[switch]
door.enable             = true
door.input_pin          = PJ3^        # INP4  (G_F pin 7)
door.input_pin_behavior = momentary
door.output_on_command  = M600        # contact open: suspend the job
door.output_off_command = M601        # contact closed again: resume
```

### 5. Kill button (Kill button module) {#config-kill}

A button on INP5 that closes its contact to ground when pressed:

```ini
[kill button]
enable        = true
pin           = PG1^          # INP5  (G_F pin 8)
toggle_enable = false         # true for a latching button
unkill_enable = true          # holding the button about 2 s clears the halt
```

This button acts through the firmware. It does not replace an emergency stop that cuts the power.

### Commands

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Command</th><th>What it does</th></tr></thead>
  <tbody>
    <tr><td><code>M119</code></td><td>Lists every configured endstop pin and the probe: 1 is triggered, 0 is not.</td></tr>
    <tr><td><code>$X</code> or <code>M999</code></td><td>Leaves the halted state after a limit switch was hit.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Good to know

- **No `!` for normally closed switches.** A closed switch reads 0 and an open one reads 1, which the endstops module treats as triggered.
- **An input with nothing connected reads 1.** Enable only the inputs that have a switch.
- **An unplugged ribbon cable reads 1** with `^`, so normally closed limit switches then show as triggered. Still run `M119` and press each switch after any rewiring.
- **Extra filtering.** `common.debounce_ms` under `[endstops]` adds a debounce time in the firmware.

## Wiring switches and sensors {#sensors}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Switch wiring">
  <svg viewBox="0 0 1000 230" role="img" aria-labelledby="xb-eb-switch">
    <title id="xb-eb-switch">A switch connects between S and minus. A normally closed switch reads 0 at rest; a normally open contact reads 1 at rest.</title>
    <rect x="40" y="30" width="130" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="105.0" y="56" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Board</text><text x="105.0" y="78" text-anchor="middle" font-size="14" fill="#a9b4c2">INP connector</text><rect x="270" y="30" width="220" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="380.0" y="56" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Normally closed switch</text><text x="380.0" y="78" text-anchor="middle" font-size="14" fill="#a9b4c2">recommended for limits</text><path d="M170 100H270" fill="none" stroke="#5fb3ff" stroke-width="4"/><text x="220" y="90" text-anchor="middle" font-size="18" font-weight="700" fill="#5fb3ff">S</text><path d="M170 140H270" fill="none" stroke="#a9b4c2" stroke-width="4"/><text x="220" y="166" text-anchor="middle" font-size="22" font-weight="700" fill="#a9b4c2">−</text><rect x="540" y="30" width="130" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="605.0" y="56" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Board</text><text x="605.0" y="78" text-anchor="middle" font-size="14" fill="#a9b4c2">INP connector</text><rect x="770" y="30" width="220" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="880.0" y="56" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Normally open contact</text><text x="880.0" y="78" text-anchor="middle" font-size="14" fill="#a9b4c2">probe, button</text><path d="M670 100H770" fill="none" stroke="#5fb3ff" stroke-width="4"/><text x="720" y="90" text-anchor="middle" font-size="18" font-weight="700" fill="#5fb3ff">S</text><path d="M670 140H770" fill="none" stroke="#a9b4c2" stroke-width="4"/><text x="720" y="166" text-anchor="middle" font-size="22" font-weight="700" fill="#a9b4c2">−</text><text x="265" y="215" text-anchor="middle" font-size="14" fill="#a9b4c2">Reads 0 at rest, 1 when pressed or when a wire breaks</text><text x="765" y="215" text-anchor="middle" font-size="14" fill="#a9b4c2">Reads 1 at rest, 0 when closed</text>
  </svg>
  </div>
  <figcaption>Both kinds of contact use the same two pins. The configuration decides what each level means.</figcaption>
</figure>
{:/nomarkdown}

Use the normally closed contact for limits and homing: a broken switch wire then reads as triggered.

**Electronic sensors need the `-` pin setting.** The signal passes through a diode before it reaches the controller, so the sensor must pull S close to ground while sinking about 5&nbsp;mA. With `-` (no pull resistor) it must get below about 0.50&nbsp;V down to &minus;10&nbsp;&deg;C with a worst-case diode, or 0.61&nbsp;V with a typical one. With the pull-up (`^`) the limit shrinks to about 0.06&nbsp;V worst case, or 0.17&nbsp;V typical, which most sensors cannot guarantee (all simulated). Check the sensor&rsquo;s datasheet. A 5&nbsp;V sensor can be powered with the cap on **5V**, and its output may drive S up to 5&nbsp;V. For sensors that need more than 5&nbsp;V, use the [Endstop and probe inputs (advanced)](/extensions/endstop-and-probe-inputs-advanced) board within its stated range.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="One input channel">
  <svg viewBox="0 0 1000 320" role="img" aria-labelledby="xb-eb-how">
    <title id="xb-eb-how">Each channel: the switch pulls a node low through a diode, a light shows it, and a resistor and capacitor filter the signal on its way to the controller.</title>
    <rect x="20" y="60" width="160" height="100" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="100.0" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Switch</text><text x="100.0" y="108" text-anchor="middle" font-size="14" fill="#a9b4c2">S to ground</text><rect x="270" y="60" width="160" height="100" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="350.0" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Diode</text><text x="350.0" y="108" text-anchor="middle" font-size="14" fill="#a9b4c2">blocks higher</text><text x="350.0" y="128" text-anchor="middle" font-size="14" fill="#a9b4c2">outside voltage</text><rect x="520" y="60" width="180" height="100" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="610.0" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Channel node</text><text x="610.0" y="108" text-anchor="middle" font-size="14" fill="#a9b4c2">1 kΩ pull-up to</text><text x="610.0" y="128" text-anchor="middle" font-size="14" fill="#a9b4c2">3.3 V</text><rect x="800" y="60" width="180" height="100" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="890.0" y="86" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Filter</text><text x="890.0" y="108" text-anchor="middle" font-size="14" fill="#a9b4c2">5.6 kΩ and</text><text x="890.0" y="128" text-anchor="middle" font-size="14" fill="#a9b4c2">100 nF</text><rect x="520" y="220" width="180" height="80" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="610.0" y="246" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Red light</text><text x="610.0" y="268" text-anchor="middle" font-size="14" fill="#a9b4c2">from 3.3 V, 680 Ω</text><rect x="800" y="220" width="180" height="80" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="890.0" y="246" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Controller pin</text><text x="890.0" y="268" text-anchor="middle" font-size="14" fill="#a9b4c2">through a link</text><path d="M180 110H270" fill="none" stroke="#5fb3ff" stroke-width="3"/><path d="M430 110H520" fill="none" stroke="#5fb3ff" stroke-width="3"/><path d="M700 110H800" fill="none" stroke="#5fb3ff" stroke-width="3"/><path d="M610 220V160" fill="none" stroke="#ff6b6b" stroke-width="3"/><path d="M890 160V220" fill="none" stroke="#5fb3ff" stroke-width="3"/>
  </svg>
  </div>
  <figcaption>One of the seven identical channels.</figcaption>
</figure>
{:/nomarkdown}

Each channel has a node pulled up by 1&nbsp;kΩ to 3.3&nbsp;V. A switch to ground pulls that node low through a diode, which also lights the channel&rsquo;s light.

The diode lets the sensor pull the node down but stops a higher voltage on S, up to 5&nbsp;V, from reaching the node. A second diode from S to ground diverts static discharge before it reaches the channel.

A 5.6&nbsp;kΩ resistor and a 100&nbsp;nF capacitor then smooth the signal before it goes to the controller pin.

## What the lights tell you {#leds}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds"><thead><tr><th></th><th><span class="xb-led xb-led-red"></span>INP0 to INP6</th></tr></thead><tbody><tr><th>Where</th><td>One below each sensor connector</td></tr><tr><th>Lit means</th><td>The input is pulled low: its switch to ground is closed</td></tr><tr><th>Dark means</th><td>The input is open, or the board has no 3.3&nbsp;V</td></tr></tbody></table></div>
{:/nomarkdown}

## Options {#options}

### Supply selector JP1 {#jp1}

The jumper picks only the voltage on the **+** pins. The signals to the controller are 3.3&nbsp;V in both positions.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Jumper cap</th><th>+ pins</th><th>Open input at the controller</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>Middle and <b>3V3</b> (left)</td><td>3.3&nbsp;V</td><td>3.3&nbsp;V</td><td>Switches and 3.3&nbsp;V sensors</td></tr>
    <tr><td>Middle and <b>5V</b> (right)</td><td>5&nbsp;V</td><td>3.3&nbsp;V</td><td>5&nbsp;V sensors</td></tr>
    <tr><td>No cap</td><td>Not powered</td><td>3.3&nbsp;V</td><td>Switches still work; sensors get no power</td></tr>
    <tr><td>All three joined</td><td>Never: this joins the 3.3&nbsp;V and 5&nbsp;V supplies</td><td>—</td><td>Never</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Signal links JP2 to JP8

Each link joins one channel to its controller pin: JP2 for INP0 up to JP8 for INP6, left to right. Cutting a link frees that controller pin for something plugged into CHAIN Y. The input then no longer reaches the controller; its light still works. Solder the pads together to restore it.

### Test pads

The back of the board has labelled round pads: **Y3** to **Y9** (the seven controller signals), **3V3**, **5V**, **V+** (after the jumper), **VS** (after the fuse, on the + pins) and two **GND** pads. There is also a box for writing a serial number.

## Chaining a second board {#chaining}

CHAIN Y is wired contact for contact to INPUT Y: power, ground and all seven signal pins pass through, whatever the links are set to. To give a second board a pin, first cut that pin&rsquo;s link here, so that only one board drives it. A pin used by a switch on this board is not free for the next one.

{::nomarkdown}
{% include _includes/extension-chain-figure.html id="xb-eb" board="Endstop inputs board" in_label="INPUT Y" chain_label="CHAIN Y" lane1="pins 1, 2 and 10: power and ground" lane2="a pin with a switch on this board" lane3="a pin whose link you cut" s1="closed" s2="closed" s3="closed" links="none" caption="All contacts pass straight through to CHAIN Y. The links JP2 to JP8, not drawn here, disconnect this board&rsquo;s own channel from a pin." %}
{:/nomarkdown}

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>When you see</th><th>It means</th><th>Do this</th></tr></thead>
  <tbody>
    <tr><td>A light stays dark when its switch is closed</td><td>No 3.3&nbsp;V, or the switch is not between S and −.</td><td>Check the cable is in INPUT Y and pin 1 goes to pin 1; join S and − with a wire: the light must come on.</td></tr>
    <tr><td>Every input reads wrong</td><td>JP1 has no cap, or the cable is not on G_F.</td><td>Fit the cap on 3V3 and check both cable ends.</td></tr>
    <tr><td>The light is on but <code>M119</code> shows 1</td><td>The low level does not reach the controller threshold, or the pin is not the one configured.</td><td>Check the <code>v</code> modifier is not used, try <code>-</code>, check the link JP2 to JP8 is closed, and check the <a href="#sensors">sensor limits</a>.</td></tr>
    <tr><td><code>M119</code> does not list the pin</td><td>The input is not configured.</td><td>Check <code>enable = true</code> and the pin name, then restart.</td></tr>
    <tr><td>The machine halts with <code>ALARM: Hard limit</code> as soon as an axis moves</td><td>An enabled limit input reads triggered.</td><td>Send <code>M119</code>; disable unused entries and check the switch wiring.</td></tr>
    <tr><td>The controller resets, or the + pins lose power, when a switch is plugged in</td><td>The + pin is shorted to ground; the fuse may have tripped.</td><td>Turn power off, unplug it, check the cable order against + − S, and let the fuse cool.</td></tr>
    <tr><td>An input triggers by itself during motion</td><td>Electrical noise on the switch cable.</td><td>Route it away from motor cables and set <code>common.debounce_ms</code>.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting). Include the text printed on your board, the JP1 position, what is connected to each input, and what `M119` replies.

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/endstop-inputs-basic/endstop-inputs-basic-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/endstop-inputs-basic/endstop-inputs-basic-bom.csv">Parts list (CSV)</a></td><td>Every component with its value, footprint and part number</td></tr>
    <tr><td><a href="/images/extensions/endstop-inputs-basic/endstop-inputs-basic-diagram.png">Top view (PNG)</a></td><td>The drawing used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

Positions are hole centres in millimetres from the corner marked 0, 0, seen from the component side. The four holes take M3 screws; the small locating holes of the two ten-pin connectors are not shown.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 350" role="img" aria-labelledby="xb-eb-mount-mount-t">
  <title id="xb-eb-mount-mount-t">Mounting drawing of the Endstop inputs (basic) board, component side: outline 77 by 27 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="180.0" y="78.0" width="600.0" height="210.4" rx="27.3" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M180.0 56H780.0"/><path d="M180.0 50V62"/><path d="M780.0 50V62"/><path d="M806.0 78.0V288.4"/><path d="M800.0 78.0h12"/><path d="M800.0 288.4h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">77</text>
  <text x="818.0" y="188.2" font-size="15" font-weight="700" fill="#e6ebf2">27</text>
  <circle cx="180.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="168.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M122.0 104.0h30" fill="none"/><path d="M156.0 104.0l-8 -4v8z"/><path d="M122.0 104.0v30" fill="none"/><path d="M122.0 138.0l-4 -8h8z"/></g>
  <text x="160.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="118.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="207.3" cy="105.3" r="12.5" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M190.8 105.3h32.9M207.3 88.8v32.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="194.8" y="137.7" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  3.50, 3.50</text>
  <circle cx="752.7" cy="105.3" r="12.5" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M736.3 105.3h32.9M752.7 88.8v32.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="765.2" y="137.7" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  73.50, 3.50</text>
  <circle cx="207.3" cy="261.1" r="12.5" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M190.8 261.1h32.9M207.3 244.6v32.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="194.8" y="238.6" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  3.50, 23.50</text>
  <circle cx="752.7" cy="261.1" r="12.5" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M736.3 261.1h32.9M752.7 244.6v32.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="765.2" y="238.6" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  73.50, 23.50</text>
  <text x="480.0" y="318.4" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 77 × 27&nbsp;mm, corners rounded to a 3.5&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>3.50</td><td>3.50</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>73.50</td><td>3.50</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>3.50</td><td>23.50</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>73.50</td><td>23.50</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

One channel; the seven channels are identical.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Sensor supply</td><td>+ pins, 3V3 position</td><td>—</td><td>3.3&nbsp;V</td><td>—</td><td>From the controller, less the fuse drop</td></tr>
    <tr><td>Sensor supply</td><td>+ pins, 5V position</td><td>—</td><td>5&nbsp;V</td><td>—</td><td>From the controller, less the fuse drop</td></tr>
    <tr><td>Sensor supply current, all + pins together</td><td>Fuse</td><td>—</td><td>0.2&nbsp;A hold</td><td>0.42&nbsp;A trip</td><td>Fuse datasheet at 23&nbsp;&deg;C; holds about 0.14&nbsp;A at 60&nbsp;&deg;C</td></tr>
    <tr><td>Fuse resistance</td><td>+ supply</td><td>0.65&nbsp;&Omega;</td><td>—</td><td>2.6&nbsp;&Omega;</td><td>Fuse datasheet, the upper value after a trip or reflow</td></tr>
    <tr><td>Closed input voltage</td><td>Controller pin, no pull</td><td>0.18&nbsp;V</td><td>0.28&nbsp;V</td><td>0.50&nbsp;V</td><td>Simulated: typical diode at 60 and 25&nbsp;&deg;C; worst-case diode at &minus;10&nbsp;&deg;C</td></tr>
    <tr><td>Closed input voltage</td><td>Controller pin, 30&nbsp;k&Omega; pull-up</td><td>0.67&nbsp;V</td><td>0.76&nbsp;V</td><td>0.94&nbsp;V</td><td>Simulated, same cases</td></tr>
    <tr><td>Open input voltage</td><td>Controller pin</td><td>—</td><td>3.3&nbsp;V</td><td>—</td><td>Simulated, both jumper positions, also with S driven to 5&nbsp;V</td></tr>
    <tr><td>Contact current</td><td>S pin, closed</td><td>—</td><td>5.0&nbsp;mA</td><td>—</td><td>Simulated, from 3.3&nbsp;V</td></tr>
    <tr><td>Light current</td><td>Closed input</td><td>—</td><td>2.0&nbsp;mA</td><td>—</td><td>Simulated, assumed red light model</td></tr>
    <tr><td>Total current, all seven closed</td><td>Controller 3.3&nbsp;V</td><td>—</td><td>35&nbsp;mA</td><td>—</td><td>Calculated from the simulated channel, no sensor power</td></tr>
    <tr><td>Sensor low voltage still read low</td><td>S pin, no pull</td><td>—</td><td>—</td><td>0.50&nbsp;V</td><td>Simulated, &minus;10&nbsp;&deg;C, worst-case diode, 0.99&nbsp;V controller threshold</td></tr>
    <tr><td>Sensor low voltage still read low</td><td>S pin, 30&nbsp;k&Omega; pull-up</td><td>—</td><td>0.28&nbsp;V</td><td>0.06&nbsp;V</td><td>Simulated: typical diode at 25&nbsp;&deg;C; limit with worst-case diode at &minus;10&nbsp;&deg;C</td></tr>
    <tr><td>Switch and cable resistance</td><td>S to − loop, no pull</td><td>—</td><td>—</td><td>215&nbsp;&Omega;</td><td>Simulated, 25&nbsp;&deg;C, typical diode; keep well below</td></tr>
    <tr><td>Switch and cable resistance</td><td>S to − loop, 30&nbsp;k&Omega; pull-up</td><td>—</td><td>63&nbsp;&Omega;</td><td>13&nbsp;&Omega;</td><td>Simulated: typical diode at 25&nbsp;&deg;C; limit with worst-case diode at &minus;10&nbsp;&deg;C</td></tr>
    <tr><td>Delay, closing</td><td>To 0.99&nbsp;V</td><td>—</td><td>0.8&nbsp;ms</td><td>—</td><td>Simulated</td></tr>
    <tr><td>Delay, opening</td><td>To 2.31&nbsp;V</td><td>—</td><td>0.7&nbsp;ms</td><td>—</td><td>Simulated</td></tr>
    <tr><td>Operating temperature</td><td>Board</td><td><b>Open</b></td><td>—</td><td><b>Open</b></td><td>Not established</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Component stress limits

These are limits of parts and not operating conditions.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Circuit</th><th>Pin or device stress</th><th>Absolute limit</th></tr></thead>
  <tbody>
    <tr><td>Filter capacitors</td><td>Voltage</td><td>50&nbsp;V (part value)</td></tr>
    <tr><td>S pins</td><td>Voltage to ground</td><td>5&nbsp;V (stand-off rating of the protection diode)</td></tr>
    <tr><td>Input diodes</td><td>Reverse voltage</td><td>30&nbsp;V (part rating)</td></tr>
    <tr><td>Resettable fuse</td><td>Voltage across it, fault current</td><td>24&nbsp;V, 100&nbsp;A (part rating)</td></tr>
    <tr><td>Sensor pins</td><td>Electrostatic discharge and surge</td><td><b>Open</b>: protection diodes fitted, board not tested</td></tr>
    <tr><td>Resistors and lights</td><td>Power and current</td><td><b>Open</b></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: simulation {#simulation}

One input channel was simulated in ngspice with diode models matched to the datasheet limits (typical and worst-case), a generic light model, the protection diode as 45&nbsp;pF, a 100&nbsp;MΩ controller input unless stated, and low and high thresholds of 0.99&nbsp;V and 2.31&nbsp;V. These are not measurements.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Controller pin voltage over time">
  <svg viewBox="0 0 1000 360" role="img" aria-labelledby="xb-eb-plot">
    <title id="xb-eb-plot">Simulated controller pin voltage: it falls below the low threshold 0.8 milliseconds after the switch closes and rises above the high threshold 0.7 milliseconds after it opens.</title>
    <path d="M100 300H900" fill="none" stroke="#3a414c" stroke-width="1.5"/><text x="88" y="305" text-anchor="end" font-size="14" fill="#a9b4c2">0 V</text><path d="M100 225H900" fill="none" stroke="#3a414c" stroke-width="1.5"/><text x="88" y="230" text-anchor="end" font-size="14" fill="#a9b4c2">1 V</text><path d="M100 150H900" fill="none" stroke="#3a414c" stroke-width="1.5"/><text x="88" y="155" text-anchor="end" font-size="14" fill="#a9b4c2">2 V</text><path d="M100 75H900" fill="none" stroke="#3a414c" stroke-width="1.5"/><text x="88" y="80" text-anchor="end" font-size="14" fill="#a9b4c2">3 V</text><path d="M100 225.75H900" fill="none" stroke="#ffcc33" stroke-width="1.5" stroke-dasharray="6 5"/><text x="896" y="219.75" text-anchor="end" font-size="14" fill="#ffcc33">reads low below 0.99 V</text><path d="M100 126.75H900" fill="none" stroke="#ffcc33" stroke-width="1.5" stroke-dasharray="6 5"/><text x="896" y="120.75" text-anchor="end" font-size="14" fill="#ffcc33">reads high above 2.31 V</text><text x="100.0" y="322" text-anchor="middle" font-size="14" fill="#a9b4c2">0</text><text x="200.0" y="322" text-anchor="middle" font-size="14" fill="#a9b4c2">2</text><text x="300.0" y="322" text-anchor="middle" font-size="14" fill="#a9b4c2">4</text><text x="400.0" y="322" text-anchor="middle" font-size="14" fill="#a9b4c2">6</text><text x="500.0" y="322" text-anchor="middle" font-size="14" fill="#a9b4c2">8</text><text x="600.0" y="322" text-anchor="middle" font-size="14" fill="#a9b4c2">10</text><text x="700.0" y="322" text-anchor="middle" font-size="14" fill="#a9b4c2">12</text><text x="800.0" y="322" text-anchor="middle" font-size="14" fill="#a9b4c2">14</text><text x="900.0" y="322" text-anchor="middle" font-size="14" fill="#a9b4c2">16</text><text x="500" y="345" text-anchor="middle" font-size="14" fill="#a9b4c2">time in milliseconds</text><path d="M100.0 52.5 L102.0 52.5 L104.0 52.5 L106.0 52.5 L108.1 52.5 L110.1 52.5 L112.1 52.5 L114.1 52.5 L116.1 52.5 L118.1 52.5 L120.1 52.5 L122.1 52.5 L124.1 52.5 L126.1 52.5 L128.1 52.5 L130.2 52.5 L132.2 52.5 L134.2 52.5 L136.2 52.5 L138.2 52.5 L140.2 52.5 L142.2 52.5 L144.2 52.5 L146.2 52.5 L148.2 52.5 L150.3 54.9 L152.3 70.3 L154.3 84.7 L156.3 98.0 L158.3 110.5 L160.3 122.0 L162.3 132.8 L164.3 142.9 L166.3 152.2 L168.3 160.9 L170.3 169.0 L172.3 176.6 L174.3 183.6 L176.3 190.1 L178.3 196.2 L180.3 201.9 L182.3 207.2 L184.3 212.1 L186.3 216.7 L188.3 221.0 L190.3 224.9 L192.3 228.6 L194.3 232.1 L196.3 235.3 L198.3 238.3 L200.3 241.0 L202.3 243.6 L204.3 246.0 L206.3 248.3 L208.3 250.4 L210.3 252.3 L212.3 254.1 L214.3 255.8 L216.3 257.4 L218.3 258.9 L220.3 260.2 L222.3 261.5 L224.3 262.7 L226.3 263.8 L228.3 264.8 L230.3 265.7 L232.3 266.6 L234.3 267.5 L236.3 268.2 L238.3 268.9 L240.3 269.6 L242.3 270.2 L244.3 270.8 L246.3 271.4 L248.3 271.9 L250.4 272.3 L252.4 272.8 L254.5 273.2 L256.5 273.6 L258.5 273.9 L260.5 274.3 L262.5 274.6 L264.5 274.8 L266.5 275.1 L268.5 275.3 L270.5 275.6 L272.5 275.8 L274.5 276.0 L276.5 276.2 L278.5 276.3 L280.5 276.5 L282.5 276.6 L284.5 276.8 L286.5 276.9 L288.5 277.0 L290.5 277.1 L292.5 277.2 L294.5 277.3 L296.5 277.4 L298.5 277.5 L300.5 277.6 L302.6 277.7 L304.6 277.7 L306.6 277.8 L308.6 277.9 L310.6 277.9 L312.6 278.0 L314.6 278.0 L316.6 278.1 L318.6 278.1 L320.6 278.1 L322.6 278.2 L324.6 278.2 L326.6 278.2 L328.6 278.3 L330.6 278.3 L332.6 278.3 L334.6 278.3 L336.6 278.4 L338.6 278.4 L340.6 278.4 L342.6 278.4 L344.6 278.4 L346.6 278.4 L348.6 278.5 L350.6 278.5 L352.6 278.5 L354.6 278.5 L356.6 278.5 L358.6 278.5 L360.6 278.5 L362.6 278.5 L364.7 278.5 L366.7 278.5 L368.7 278.6 L370.7 278.6 L372.7 278.6 L374.8 278.6 L376.8 278.6 L378.8 278.6 L380.8 278.6 L382.8 278.6 L384.8 278.6 L386.9 278.6 L388.9 278.6 L390.9 278.6 L392.9 278.6 L394.9 278.6 L396.9 278.6 L398.9 278.6 L400.9 278.6 L402.9 278.6 L404.9 278.6 L406.9 278.6 L408.9 278.6 L410.9 278.6 L412.9 278.6 L415.0 278.6 L417.0 278.6 L419.0 278.6 L421.0 278.6 L423.0 278.6 L425.0 278.6 L427.0 278.6 L429.0 278.6 L431.0 278.6 L433.0 278.6 L435.0 278.6 L437.0 278.6 L439.0 278.6 L441.0 278.6 L443.1 278.6 L445.1 278.6 L447.1 278.6 L449.1 278.6 L451.1 278.6 L453.1 278.6 L455.2 278.6 L457.2 278.6 L459.2 278.6 L461.2 278.6 L463.2 278.6 L465.2 278.6 L467.3 278.6 L469.3 278.6 L471.3 278.6 L473.3 278.6 L475.3 278.6 L477.3 278.6 L479.3 278.6 L481.3 278.6 L483.3 278.6 L485.3 278.6 L487.3 278.6 L489.3 278.6 L491.3 278.6 L493.3 278.6 L495.3 278.6 L497.3 278.6 L499.3 278.6 L501.3 269.9 L503.3 257.1 L505.3 245.1 L507.4 233.2 L509.4 222.6 L511.4 212.6 L513.4 203.2 L515.4 194.3 L517.4 186.0 L519.4 178.1 L521.4 170.7 L523.4 163.8 L525.4 157.2 L527.4 151.1 L529.4 145.3 L531.4 139.8 L533.4 134.7 L535.4 129.9 L537.4 125.3 L539.4 121.0 L541.4 117.0 L543.4 113.2 L545.4 109.6 L547.4 106.3 L549.4 103.1 L551.4 100.1 L553.4 97.3 L555.4 94.7 L557.4 92.2 L559.4 89.9 L561.4 87.7 L563.4 85.6 L565.4 83.7 L567.4 81.8 L569.4 80.1 L571.4 78.5 L573.4 77.0 L575.4 75.5 L577.4 74.2 L579.4 72.9 L581.4 71.7 L583.4 70.6 L585.4 69.5 L587.4 68.5 L589.4 67.6 L591.4 66.7 L593.4 65.9 L595.4 65.1 L597.4 64.3 L599.4 63.6 L601.4 63.0 L603.4 62.4 L605.4 61.8 L607.4 61.2 L609.4 60.7 L611.4 60.2 L613.4 59.8 L615.5 59.3 L617.6 58.9 L619.6 58.5 L621.7 58.2 L623.7 57.8 L625.8 57.5 L627.9 57.2 L629.9 56.9 L631.9 56.7 L633.9 56.4 L635.9 56.2 L637.9 56.0 L639.9 55.8 L641.9 55.6 L643.9 55.4 L645.9 55.2 L647.9 55.1 L649.9 54.9 L651.9 54.8 L653.9 54.7 L655.9 54.5 L657.9 54.4 L659.9 54.3 L661.9 54.2 L663.9 54.1 L666.0 54.0 L668.0 53.9 L670.1 53.8 L672.1 53.7 L674.1 53.7 L676.1 53.6 L678.1 53.5 L680.1 53.5 L682.1 53.4 L684.1 53.4 L686.1 53.3 L688.2 53.3 L690.2 53.2 L692.2 53.2 L694.2 53.1 L696.2 53.1 L698.2 53.1 L700.2 53.0 L702.2 53.0 L704.2 53.0 L706.2 53.0 L708.2 52.9 L710.2 52.9 L712.2 52.9 L714.2 52.9 L716.3 52.8 L718.3 52.8 L720.3 52.8 L722.3 52.8 L724.3 52.8 L726.3 52.8 L728.3 52.7 L730.3 52.7 L732.3 52.7 L734.3 52.7 L736.4 52.7 L738.4 52.7 L740.5 52.7 L742.5 52.7 L744.5 52.7 L746.5 52.6 L748.5 52.6 L750.5 52.6 L752.5 52.6 L754.5 52.6 L756.5 52.6 L758.5 52.6 L760.5 52.6 L762.6 52.6 L764.6 52.6 L766.6 52.6 L768.6 52.6 L770.6 52.6 L772.6 52.6 L774.6 52.6 L776.6 52.6 L778.6 52.6 L780.6 52.6 L782.6 52.6 L784.6 52.6 L786.6 52.6 L788.6 52.6 L790.6 52.6 L792.6 52.6 L794.7 52.5 L796.7 52.5 L798.7 52.5 L800.7 52.5 L802.7 52.5 L804.7 52.5 L806.7 52.5 L808.8 52.5 L810.9 52.5 L812.9 52.5 L814.9 52.5 L816.9 52.5 L818.9 52.5 L820.9 52.5 L822.9 52.5 L824.9 52.5 L826.9 52.5 L828.9 52.5 L830.9 52.5 L832.9 52.5 L834.9 52.5 L836.9 52.5 L838.9 52.5 L841.0 52.5 L843.0 52.5 L845.1 52.5 L847.2 52.5 L849.2 52.5 L851.3 52.5 L853.3 52.5 L855.4 52.5 L857.5 52.5 L859.5 52.5 L861.5 52.5 L863.5 52.5 L865.5 52.5 L867.5 52.5 L869.5 52.5 L871.5 52.5 L873.5 52.5 L875.5 52.5 L877.5 52.5 L879.5 52.5 L881.5 52.5 L883.6 52.5 L885.6 52.5 L887.6 52.5 L889.6 52.5 L891.6 52.5 L893.6 52.5 L895.7 52.5 L897.8 52.5 L899.8 52.5 L900.0 52.5" fill="none" stroke="#5fb3ff" stroke-width="3.5"/><text x="150.0" y="30" text-anchor="start" font-size="14" fill="#a9b4c2">switch closes</text><text x="500.0" y="30" text-anchor="start" font-size="14" fill="#a9b4c2">switch opens</text><path d="M150.0 40V300" fill="none" stroke="#a9b4c2" stroke-width="1"/><path d="M500.0 40V300" fill="none" stroke="#a9b4c2" stroke-width="1"/>
  </svg>
  </div>
  <figcaption>Simulated voltage at the controller pin (blue), no controller pull resistor.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Controller pin setting</th><th>Closed level, typical diode, &minus;10 to 60&nbsp;&deg;C</th><th>Reads low</th></tr></thead>
  <tbody>
    <tr><td>No pull resistor (<code>-</code>)</td><td>0.18 to 0.39&nbsp;V</td><td>Yes</td></tr>
    <tr><td>Pull-up (default or <code>^</code>), 50&nbsp;k&Omega;</td><td>0.49 to 0.68&nbsp;V</td><td>Yes</td></tr>
    <tr><td>Pull-up (default or <code>^</code>), 40&nbsp;k&Omega;</td><td>0.56 to 0.75&nbsp;V</td><td>Yes</td></tr>
    <tr><td>Pull-up (default or <code>^</code>), 30&nbsp;k&Omega;</td><td>0.67 to 0.85&nbsp;V (worst-case diode: up to 0.94)</td><td>Yes, small margin</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Not simulated: noise and surge on long cables, electrostatic discharge, the fuse, the behaviour of particular sensors, and heating.

## Appendix: historical page {#historical}

The [historical page for ExtraEndstops](/extensions/historical-extraendstops) describes the original design files.

See all boards on the [extension boards](/extension-boards) page.
