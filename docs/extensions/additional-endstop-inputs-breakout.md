---
layout: default
title: "Additional endstop inputs breakout"
description: "Add six endstop or sensor inputs and one probe input to Smoothieboard V2: pinout, wiring, configuration and troubleshooting."
permalink: /extensions/additional-endstop-inputs-breakout
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Inputs</p>
    <h1 id="additional-endstop-inputs-breakout">Additional endstop inputs breakout</h1>
    <p class="xb-lead">Give your Smoothieboard seven more inputs: six for limit switches or 5&nbsp;V sensors, and one for a probe whose signal can be as high as 45&nbsp;V. One ribbon cable connects it, and the board powers your sensors itself.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/additional-endstop-inputs-breakout/endstop-inputs-diagram.png" alt="Top view drawing of the endstop inputs board: two ribbon-cable connectors along the top edge, six white three-pin input connectors numbered 1 to 6 along the bottom edge and a green three-way screw terminal at the bottom right.">
    <figcaption>Drawing generated from the board's design files, to scale. It is not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>6</b><span>inputs for switches and 5&nbsp;V sensors</span></div>
  <div class="xb-stat"><b>1</b><span>probe input for signals from 3 to 45&nbsp;V</span></div>
  <div class="xb-stat"><b>0.2 A</b><span>of 5&nbsp;V sensor power in total, current-limited</span></div>
  <div class="xb-stat"><b>3.3 V</b><span>clean logic signals to the controller</span></div>
  <div class="xb-stat"><b>3</b><span>input connector types, one chosen at assembly</span></div>
  <div class="xb-stat"><b>96 × 70.5</b><span>millimetres, four M3 mounting holes</span></div>
</div>

<nav class="xb-nav" aria-label="On this page">
  <a href="#specs">Tech specs</a>
  <a href="#tour">Board tour</a>
  <a href="#pinout">Pinout</a>
  <a href="#what-you-need">What you need</a>
  <a href="#get-started">Get started</a>
  <a href="#configuration">Configuration</a>
  <a href="#sensors">Wiring switches and sensors</a>
  <a href="#how-it-works">How it works</a>
  <a href="#options">Options</a>
  <a href="#chaining">Sharing the header</a>
  <a href="#troubleshooting">Troubleshooting</a>
  <a href="#downloads">Downloads</a>
  <a href="#mounting">Mounting</a>
  <a href="#electrical">Electrical</a>
</nav>
{:/nomarkdown}

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Inputs 1 to 6</td><td>For switch contacts to ground and for sensors with a 0 to 5&nbsp;V output. Each has three pins: signal, ground and 5&nbsp;V.</td></tr>
    <tr><td>Pull-up, inputs 1 to 6</td><td>10&nbsp;kΩ to the board's 5&nbsp;V sensor supply: about 0.5&nbsp;mA through a closed switch (calculated)</td></tr>
    <tr><td>Filtering, inputs 1 to 6</td><td>A filter of about 1&nbsp;ms (calculated) followed by a Schmitt-trigger buffer, which turns a slow or noisy edge into one clean transition</td></tr>
    <tr><td>Input 7 (probe)</td><td>For a signal between 3 and 45&nbsp;V, positive only (as printed on the board). Reads high above about 2.2&nbsp;V and low below (calculated).</td></tr>
    <tr><td>Signals to the controller</td><td>Seven 3.3&nbsp;V logic outputs, each through 330&nbsp;Ω (inputs 1 to 6) or a 10&nbsp;kΩ pull-up (input 7). Not inverted: an open switch reads high.</td></tr>
    <tr><td>Sensor power</td><td>5&nbsp;V on every input connector, taken from the controller and limited to about 0.2&nbsp;A for all seven together (as printed on the board)</td></tr>
    <tr><td>Indicators</td><td>Green <b>POWER 3V3</b> LED. Red <b>FIELD FAULT</b> LED, lit when the sensor power limiter reports a fault.</td></tr>
    <tr><td>Control connector</td><td>2×5-pin, 1.27&nbsp;mm pitch Gadgeteer socket, type Y</td></tr>
    <tr><td>Chain connector</td><td>A second 2×5-pin socket that can pass unused controller pins on to another board</td></tr>
    <tr><td>Input connectors 1 to 6</td><td>One of three types, chosen when the board is assembled: 3-pin 2.54&nbsp;mm header (Molex KK&nbsp;254), 3-pin JST&nbsp;PH, or 2.5&nbsp;mm three-contact jack</td></tr>
    <tr><td>Input connector 7</td><td>3-way screw terminal, 3.5&nbsp;mm pitch</td></tr>
    <tr><td>Isolation</td><td>None. Controller ground and sensor ground are the same net.</td></tr>
    <tr><td>Size</td><td>96 × 70.5&nbsp;mm, four M3 mounting holes, two cable-tie holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> and Smoothieware V2 firmware, using its standard <a href="/endstops">endstops</a> and <a href="/zprobe">probe</a> modules</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The electrical figures are in the [electrical specifications](#electrical) appendix; the hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the picture match the list below it. The board is shown from the component side, with the input connectors at the bottom. The picture shows the version with 2.54&nbsp;mm headers on inputs 1 to 6.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/additional-endstop-inputs-breakout/endstop-inputs-diagram.png" alt="Top view drawing of the endstop inputs board with thirteen numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:21.4%;top:9.4%" aria-label="1: controller connector">1<span class="xb-pop"><b>Controller connector (J8)</b> — the ribbon cable to your Smoothieboard goes here. <i>Pin 1 is at the left, marked <b>1</b>. See the pinout.</i></span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:68.4%;top:9.4%" aria-label="2: chain connector">2<span class="xb-pop"><b>Chain connector (J9)</b> — passes power, and any controller pins you free up, to a second board. <i>Its signal pins are not connected as delivered.</i></span></a>
      <a class="xb-mk xb-pb" href="#tour-3" style="left:48.0%;top:22.9%" aria-label="3: chain links">3<span class="xb-pop"><b>Chain links JP11 to JP20</b> — one solder link per pin of the chain connector. <i>JP11, JP12 and JP20 (power and ground) are closed as delivered; JP13 to JP19 (signals) are open.</i></span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-4" style="left:4.1%;top:29.6%" aria-label="4: power light">4<span class="xb-pop"><b>POWER 3V3 light</b> — green, lit while the board gets 3.3&nbsp;V from the controller.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-5" style="left:4.1%;top:39.1%" aria-label="5: field fault light">5<span class="xb-pop"><b>FIELD FAULT light</b> — red, lit when the sensor power limiter reports a fault, for example a short circuit on a sensor cable.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:39.3%;top:39.1%" aria-label="6: input links">6<span class="xb-pop"><b>Input links JP1 to JP7</b> — one per input, in a row across the board, closed as delivered. Cutting one disconnects that input from the controller.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:37.8%;top:48.5%" aria-label="7: sensor power limiter">7<span class="xb-pop"><b>Sensor power limiter</b> — feeds the 5&nbsp;V pin of all seven input connectors and limits the total to about 0.2&nbsp;A.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:56.1%;top:49.9%" aria-label="8: test pads">8<span class="xb-pop"><b>Test pads</b> — four labelled pads. <b>TP1 IN5V</b> is the 5&nbsp;V arriving from the controller, <b>TP2 FIELD5V</b> the 5&nbsp;V going to the sensors, <b>TP3 GND</b> is ground.</span></a>
      <a class="xb-mk xb-pl" href="#tour-9" style="left:21.0%;top:63.3%" aria-label="9: input buffers">9<span class="xb-pop"><b>Input buffers</b> — two chips that clean up the signals of inputs 1 to 6 and convert them to 3.3&nbsp;V.</span></a>
      <a class="xb-mk xb-pl" href="#tour-10" style="left:8.8%;top:87.6%" aria-label="10: inputs 1 to 6">10<span class="xb-pop"><b>Inputs 1 to 6</b> — six three-pin connectors, numbered on the board. <i>On the header version, the pins are signal, ground, 5&nbsp;V from left to right.</i></span></a>
      <a class="xb-mk" href="#tour-11" style="left:74.5%;top:70.8%" aria-label="11: probe pull-up link">11<span class="xb-pop"><b>Probe pull-up link JP21</b> — closed as delivered. Cut it for a probe that drives its own signal voltage. <i>See options.</i></span></a>
      <a class="xb-mk xb-pr" href="#tour-12" style="left:83.2%;top:88.3%" aria-label="12: probe input">12<span class="xb-pop"><b>Input 7, the probe input</b> — screw terminal marked <b>7 S G 5V</b>: signal, ground, 5&nbsp;V from left to right.</span></a>
      <a class="xb-mk xb-pr" href="#tour-13" style="left:95.9%;top:53.2%" aria-label="13: cable-tie holes">13<span class="xb-pop"><b>Cable-tie holes</b> — marked <b>TIE</b>, for strain relief of the sensor cables.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Controller connector (J8)</b> — the ribbon cable to your Smoothieboard goes here. <small>Pin 1 is at the left, marked <b>1</b>. See the <a href="#pinout">pinout</a>.</small></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain connector (J9)</b> — passes power, and any controller pins you free up, to a second board. <small>Its signal pins are not connected as delivered.</small></div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Chain links JP11 to JP20</b> — one solder link per pin of the chain connector. <small>JP11, JP12 and JP20 (power and ground) are closed as delivered; JP13 to JP19 (signals) are open.</small></div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>POWER 3V3 light</b> — green, lit while the board gets 3.3&nbsp;V from the controller.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>FIELD FAULT light</b> — red, lit when the sensor power limiter reports a fault, for example a short circuit on a sensor cable.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Input links JP1 to JP7</b> — one per input, in a row across the board, closed as delivered. Cutting one disconnects that input from the controller.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Sensor power limiter</b> — feeds the 5&nbsp;V pin of all seven input connectors and limits the total to about 0.2&nbsp;A.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Test pads</b> — four labelled pads. <b>TP1 IN5V</b> is the 5&nbsp;V arriving from the controller, <b>TP2 FIELD5V</b> the 5&nbsp;V going to the sensors, <b>TP3 GND</b> is ground.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Input buffers</b> — two chips that clean up the signals of inputs 1 to 6 and convert them to 3.3&nbsp;V.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Inputs 1 to 6</b> — six three-pin connectors, numbered on the board. <small>On the header version, the pins are signal, ground, 5&nbsp;V from left to right.</small></div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Probe pull-up link JP21</b> — closed as delivered. Cut it for a probe that drives its own signal voltage. <small>See <a href="#options">options</a>.</small></div></li>
    <li id="tour-12"><span class="xb-n">12</span><div><b>Input 7, the probe input</b> — screw terminal marked <b>7 S G 5V</b>: signal, ground, 5&nbsp;V from left to right.</div></li>
    <li id="tour-13"><span class="xb-n">13</span><div><b>Cable-tie holes</b> — marked <b>TIE</b>, for strain relief of the sensor cables.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the picture sideways. The four large holes are the M3 mounting holes. The pin names of every connector are also printed on the underside.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### Controller connector (J8)

Connect J8 to the header labelled **G_F** on the Smoothieboard V2 Prime. All seven signal pins of that header are free general-purpose pins, which is what this board needs. The last column is the name you use for each pin in the configuration file.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J8 pin</th><th>Function</th><th>What it does</th><th>Smoothieboard V2 Prime pin (header G_F)</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Powers the input buffers and the green LED</td><td>—</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Source of the sensor power, through the limiter</td><td>—</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-stat">INPUT 1</span></td><td>State of input 1: high while its switch is open</td><td><code>PB1</code></td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-stat">INPUT 2</span></td><td>State of input 2</td><td><code>PJ4</code></td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-stat">INPUT 3</span></td><td>State of input 3</td><td><code>PA4</code></td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-stat">INPUT 4</span></td><td>State of input 4</td><td><code>PG0</code></td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-stat">INPUT 5</span></td><td>State of input 5</td><td><code>PJ3</code></td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-stat">INPUT 6</span></td><td>State of input 6</td><td><code>PG1</code></td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-stat">INPUT 7</span></td><td>State of the probe input: high while its signal is above about 2.2&nbsp;V</td><td><code>PJ2</code></td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Ground, shared with all sensors</td><td>—</td></tr>
  </tbody>
</table></div>

<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Controller connector pin positions">
  <svg viewBox="0 0 1000 250" role="img" aria-labelledby="xb-es-j8-t">
    <title id="xb-es-j8-t">J8 seen from above: pin 1 at the bottom left. Even pins 2, 4, 6, 8, 10 from left to right in the row towards the board edge; odd pins 1, 3, 5, 7, 9 in the row towards the middle of the board.</title>
    <rect x="345" y="85" width="310" height="80" rx="6" fill="#0d0f12" stroke="#59616e" stroke-width="2"/>
    <g fill="#e0b84a" stroke="#6b5310">
      <rect x="372" y="98" width="16" height="16"/><rect x="432" y="98" width="16" height="16"/><rect x="492" y="98" width="16" height="16"/><rect x="552" y="98" width="16" height="16"/><rect x="612" y="98" width="16" height="16"/>
      <rect x="372" y="136" width="16" height="16"/><rect x="432" y="136" width="16" height="16"/><rect x="492" y="136" width="16" height="16"/><rect x="552" y="136" width="16" height="16"/><rect x="612" y="136" width="16" height="16"/>
    </g>
    <text x="352" y="150" font-size="14" font-weight="700" fill="#fff" text-anchor="middle">1</text>
    <g stroke-width="2" fill="none">
      <path d="M380 98V62" stroke="#ff9f43"/><path d="M440 98V62" stroke="#c9a6ff"/><path d="M500 98V62" stroke="#c9a6ff"/><path d="M560 98V62" stroke="#c9a6ff"/><path d="M620 98V62" stroke="#8a94a3"/>
      <path d="M380 152V188" stroke="#ff5d5d"/><path d="M440 152V188" stroke="#c9a6ff"/><path d="M500 152V188" stroke="#c9a6ff"/><path d="M560 152V188" stroke="#c9a6ff"/><path d="M620 152V188" stroke="#c9a6ff"/>
    </g>
    <g font-size="12" font-weight="700" text-anchor="middle">
      <rect x="352" y="36" width="56" height="26" rx="13" fill="#ff9f43"/><text x="380" y="53" fill="#201004">5 V</text>
      <rect x="412" y="36" width="56" height="26" rx="13" fill="#c9a6ff"/><text x="440" y="53" fill="#1c0b33">IN 2</text>
      <rect x="472" y="36" width="56" height="26" rx="13" fill="#c9a6ff"/><text x="500" y="53" fill="#1c0b33">IN 4</text>
      <rect x="532" y="36" width="56" height="26" rx="13" fill="#c9a6ff"/><text x="560" y="53" fill="#1c0b33">IN 6</text>
      <rect x="592" y="36" width="56" height="26" rx="13" fill="#0d0f12" stroke="#8a94a3"/><text x="620" y="53" fill="#fff">GND</text>
      <rect x="352" y="188" width="56" height="26" rx="13" fill="#ff5d5d"/><text x="380" y="205" fill="#1c0606">3.3 V</text>
      <rect x="412" y="188" width="56" height="26" rx="13" fill="#c9a6ff"/><text x="440" y="205" fill="#1c0b33">IN 1</text>
      <rect x="472" y="188" width="56" height="26" rx="13" fill="#c9a6ff"/><text x="500" y="205" fill="#1c0b33">IN 3</text>
      <rect x="532" y="188" width="56" height="26" rx="13" fill="#c9a6ff"/><text x="560" y="205" fill="#1c0b33">IN 5</text>
      <rect x="592" y="188" width="56" height="26" rx="13" fill="#c9a6ff"/><text x="620" y="205" fill="#1c0b33">IN 7</text>
    </g>
    <g font-size="12" fill="#a9b4c2" text-anchor="middle">
      <text x="380" y="28">2</text><text x="440" y="28">4</text><text x="500" y="28">6</text><text x="560" y="28">8</text><text x="620" y="28">10</text>
      <text x="380" y="232">1</text><text x="440" y="232">3</text><text x="500" y="232">5</text><text x="560" y="232">7</text><text x="620" y="232">9</text>
    </g>
    <g font-size="14" fill="#a9b4c2">
      <text x="325" y="112" text-anchor="end">Row towards the board edge</text>
      <text x="325" y="150" text-anchor="end">Row towards the middle of the board</text>
      <text x="675" y="112">J8, seen from above</text>
      <text x="675" y="150">Pin 1, bottom left, marked 1</text>
    </g>
  </svg>
  </div>
  <figcaption>Pin positions of J8 with the board held as in the tour above. The chain connector J9 uses the same positions. The drawing is enlarged; the real pins are 1.27&nbsp;mm apart.</figcaption>
</figure>
{:/nomarkdown}

### Inputs 1 to 6

Every input has the same three contacts. Their order depends on which connector type your board was assembled with. Only one type is fitted.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Connector type</th><th>Contact order</th><th>Printed on the underside</th></tr></thead>
  <tbody>
    <tr><td>3-pin 2.54&nbsp;mm header (Molex KK&nbsp;254)</td><td>Left to right: <span class="xb-pill xb-p-sig">S</span> <span class="xb-pill xb-p-gnd">G</span> <span class="xb-pill xb-p-5v">5V</span></td><td>S, G, 5V under each connector</td></tr>
    <tr><td>3-pin JST&nbsp;PH</td><td>Pin 1 <span class="xb-pill xb-p-gnd">G</span>, pin 2 <span class="xb-pill xb-p-5v">5V</span>, pin 3 <span class="xb-pill xb-p-sig">S</span></td><td>PH: G 5V S</td></tr>
    <tr><td>2.5&nbsp;mm three-contact jack</td><td>Tip <span class="xb-pill xb-p-sig">S</span>, ring <span class="xb-pill xb-p-5v">5V</span>, sleeve <span class="xb-pill xb-p-gnd">G</span></td><td>2.5 TRS: TIP=S RING=5V SLEEVE=G</td></tr>
  </tbody>
</table></div>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Function</th></tr></thead>
  <tbody>
    <tr><td><span class="xb-pill xb-p-sig">S</span></td><td>Signal. Pulled up to 5&nbsp;V by the board. Connect it to ground to make the input read low.</td></tr>
    <tr><td><span class="xb-pill xb-p-gnd">G</span></td><td>Ground</td></tr>
    <tr><td><span class="xb-pill xb-p-5v">5V</span></td><td>Sensor power from the limiter. Leave it unconnected for a plain switch.</td></tr>
  </tbody>
</table></div>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Between S and G</th><th>Signal to the controller</th><th>In the firmware (pin not inverted)</th></tr></thead>
  <tbody>
    <tr><td>Switch closed</td><td>Low</td><td>0, not triggered</td></tr>
    <tr><td>Switch open, wire broken, or nothing connected</td><td>High</td><td>1, triggered</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Input 7, the probe input

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Screw, left to right</th><th>Marking</th><th>Function</th></tr></thead>
  <tbody>
    <tr><td>1st</td><td><span class="xb-pill xb-p-sig">S</span></td><td>Signal, 0 to 45&nbsp;V, positive only. Pulled up to 5&nbsp;V through 10&nbsp;kΩ while link JP21 is closed.</td></tr>
    <tr><td>2nd</td><td><span class="xb-pill xb-p-gnd">G</span></td><td>Ground</td></tr>
    <tr><td>3rd</td><td><span class="xb-pill xb-p-5v">5V</span></td><td>Sensor power from the limiter, 5&nbsp;V only</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Chain connector (J9)

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J9 pin</th><th>Connected to</th><th>Through link</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span> from J8 pin 1</td><td>JP11</td><td>Connected</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span> from J8 pin 2, before the limiter</td><td>JP12</td><td>Connected</td></tr>
    <tr><td>3 to 9</td><td>The J8 pin with the same number</td><td>JP13 to JP19, in order</td><td>Not connected</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>JP20</td><td>Connected</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Smoothieboard V2 Prime</b><span>Running Smoothieware V2, with its G_F header free.</span></div>
  <div class="xb-card"><b>10-way ribbon cable</b><span>1.27&nbsp;mm pitch, 2×5 sockets at both ends, wired pin 1 to pin 1: the standard Gadgeteer cable.</span></div>
  <div class="xb-card"><b>Switches or sensors</b><span>Limit switches with a normally closed contact, or 5&nbsp;V sensors with a 0 to 5&nbsp;V output.</span></div>
  <div class="xb-card"><b>Matching plugs</b><span>For the connector type on your board: KK&nbsp;254 housings, JST&nbsp;PH plugs or 2.5&nbsp;mm jack plugs.</span></div>
  <div class="xb-card"><b>A small screwdriver</b><span>For the probe terminal, if you use input 7.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

These steps connect one limit switch to input 1 and show its state on the console. Nothing moves during the test.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Minimal wiring">
  <svg viewBox="0 0 1000 400" role="img" aria-labelledby="xb-es-hookup-t">
    <title id="xb-es-hookup-t">Minimal wiring: a ribbon cable from header G_F on the Smoothieboard to connector J8, and a normally closed limit switch wired between the S and G contacts of input 1. The 5V contact stays unconnected.</title>
    <rect x="30" y="40" width="190" height="130" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/>
    <text x="112" y="96" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Smoothieboard</text>
    <text x="112" y="116" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">V2 Prime</text>
    <rect x="186" y="86" width="26" height="46" rx="3" fill="#0d0f12" stroke="#8a94a3"/>
    <text x="199" y="76" text-anchor="middle" font-size="12" font-weight="700" fill="#ffcc33">G_F</text>
    <rect x="380" y="60" width="440" height="270" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/>
    <text x="640" y="190" text-anchor="middle" font-size="17" font-weight="700" fill="#e6ebf2">Endstop inputs board</text>
    <rect x="430" y="76" width="70" height="30" rx="3" fill="#0d0f12" stroke="#8a94a3"/>
    <text x="465" y="124" text-anchor="middle" font-size="12" fill="#e6ebf2">J8</text>
    <path d="M212 109C300 109 330 91 430 91" fill="none" stroke="#8a94a3" stroke-width="16"/>
    <path d="M212 102C300 102 330 84 430 84" fill="none" stroke="#ff5d5d" stroke-width="2"/>
    <text x="300" y="140" text-anchor="middle" font-size="12" fill="#a9b4c2">10-way ribbon cable,</text>
    <text x="300" y="156" text-anchor="middle" font-size="12" fill="#a9b4c2">pin 1 to pin 1</text>
    <g>
      <rect x="400" y="276" width="84" height="40" rx="3" fill="#efe6cf" stroke="#b8a878"/>
      <g fill="#8a94a3"><rect x="412" y="290" width="10" height="12"/><rect x="437" y="290" width="10" height="12"/><rect x="462" y="290" width="10" height="12"/></g>
      <g font-size="11" font-weight="700" fill="#e6ebf2" text-anchor="middle"><text x="417" y="268">S</text><text x="442" y="268">G</text><text x="467" y="268">5V</text></g>
      <text x="500" y="302" font-size="13" font-weight="700" fill="#e6ebf2">1</text>
    </g>
    <g fill="#efe6cf" stroke="#b8a878" opacity="0.45"><rect x="530" y="276" width="40" height="40" rx="3"/><rect x="585" y="276" width="40" height="40" rx="3"/><rect x="640" y="276" width="40" height="40" rx="3"/><rect x="695" y="276" width="40" height="40" rx="3"/><rect x="750" y="276" width="40" height="40" rx="3"/></g>
    <text x="660" y="262" text-anchor="middle" font-size="12" fill="#a9b4c2">inputs 2 to 6 and the probe input: unused</text>
    <g fill="none" stroke-width="4">
      <path d="M417 302V344H190V350" stroke="#5fb3ff"/>
      <path d="M442 302V374H150V350" stroke="#aeb7c2"/>
    </g>
    <path d="M150 350L188 338" stroke="#aeb7c2" stroke-width="4" stroke-linecap="round"/>
    <circle cx="150" cy="350" r="5" fill="#aeb7c2"/><circle cx="190" cy="350" r="5" fill="#5fb3ff"/>
    <text x="170" y="316" text-anchor="middle" font-size="13" font-weight="700" fill="#9cc3ff">Limit switch</text>
    <text x="170" y="332" text-anchor="middle" font-size="12" fill="#a9b4c2">normally closed contact</text>
    <text x="320" y="336" text-anchor="middle" font-size="11" fill="#a9b4c2">signal</text><text x="320" y="392" text-anchor="middle" font-size="11" fill="#a9b4c2">ground</text>
  </svg>
  </div>
  <figcaption>The smallest working setup: one ribbon cable and one two-wire switch. The contact order shown is that of the 2.54&nbsp;mm header version.</figcaption>
</figure>

<ol class="xb-steps">
  <li class="xb-step">
    <h3>Switch the Smoothieboard off</h3>
    <p>Disconnect its power before plugging anything in.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the ribbon cable</h3>
    <p>Plug one end into the header labelled <b>G_F</b> on the Smoothieboard V2 Prime and the other into <b>J8</b>, the left one of the two ribbon connectors. Pin 1 must go to pin 1: follow the red edge of the cable.</p>
  </li>
  <li class="xb-step">
    <h3>Wire one switch to input 1</h3>
    <p>Use the normally closed contact of the switch, the one that is connected while the switch is <em>not</em> pressed. Connect its two wires to <b>S</b> and <b>G</b> of input 1. Leave <b>5V</b> unconnected.</p>
  </li>
  <li class="xb-step">
    <h3>Power the Smoothieboard</h3>
    <p class="xb-expect"><b>You should see:</b> the green POWER 3V3 LED lit and the red FIELD FAULT LED dark.</p>
  </li>
  <li class="xb-step">
    <h3>Add input 1 to your configuration</h3>
    <p>Add the four <code>maxx</code> lines of the <a href="#configuration">configuration</a> below to the <code>[endstops]</code> section of the configuration file on the SD card, then restart the board.</p>
  </li>
  <li class="xb-step">
    <h3>Read the switch</h3>
    <p>Send this from the console:</p>
    <pre><code>M119</code></pre>
    <p class="xb-expect"><b>You should see:</b> the reply contains <code>PB1^:0</code>. Hold the switch pressed and send <code>M119</code> again: it now contains <code>PB1^:1</code>.</p>
    <p>If it reads 1 all the time, go to <a href="#troubleshooting">troubleshooting</a>.</p>
  </li>
  <li class="xb-step">
    <h3>Add the remaining switches and sensors</h3>
    <p>Wire them one at a time as described under <a href="#sensors">Wiring switches and sensors</a>, add each to the configuration, and check each with <code>M119</code> before you rely on it.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

The board needs no module of its own: each input is an ordinary pin of the controller, and you give that pin to whichever part of the firmware, called a module, should read it. The five most common uses:

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Stop the machine when an axis runs into its end</td><td><a href="/endstops">Endstops</a>, as limit switches</td><td><a href="#config-limits">1. Limit switches</a></td></tr>
    <tr><td>Find the machine's zero position</td><td><a href="/endstops">Endstops</a>, as homing switches</td><td><a href="#config-homing">2. Homing switch</a></td></tr>
    <tr><td>Measure a surface or a tool with a probe</td><td><a href="/zprobe">Probe</a></td><td><a href="#config-probe">3. Probe</a></td></tr>
    <tr><td>Run a command when a contact opens or closes: a door, a button</td><td><a href="/switch">Switch</a>, with an input pin</td><td><a href="#config-input">4. Door switch</a></td></tr>
    <tr><td>Stop everything with an emergency button</td><td><a href="/killbutton">Kill button</a></td><td><a href="#config-kill">5. Kill button</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Each input can go to one module only: the firmware lets each pin be claimed once. The lines go into the configuration file on the controller's SD card; if the file already has a section with the same name in square brackets, add the lines to it instead of creating a second one.

### 1. Limit switches (Endstops module) {#config-limits}

Three limit switches on inputs 1 to 3:

```ini
[endstops]
maxx.enable       = true
maxx.pin          = PB1^      # input 1  (G_F pin 3)
maxx.axis         = X
maxx.limit_enable = true      # halt when hit during a move

maxy.enable       = true
maxy.pin          = PJ4^      # input 2  (G_F pin 4)
maxy.axis         = Y
maxy.limit_enable = true

maxz.enable       = true
maxz.pin          = PA4^      # input 3  (G_F pin 5)
maxz.axis         = Z
maxz.limit_enable = true
```

A limit acts only while its axis is moving. Then the firmware halts and prints `ALARM: Hard limit +X was hit` (with the direction and axis concerned).

### 2. Homing switch (Endstops module) {#config-homing}

A switch at the low end of the X axis on input 4, used by `G28` to find the zero position:

```ini
[endstops]
minx.enable           = true
minx.pin              = PG0^         # input 4  (G_F pin 6)
minx.axis             = X
minx.homing_direction = home_to_min  # the switch is at the low end of the axis
minx.homing_position  = 0            # the position the axis has when the switch triggers
minx.max_travel       = 500          # give up after this many millimetres
minx.fast_rate        = 100          # mm/s for the first approach
minx.slow_rate        = 10           # mm/s for the second, accurate approach
minx.retract          = 5            # mm to back off between the two
minx.limit_enable     = false        # true makes it a limit switch as well
```

Set `max_travel` to a little more than the length of your axis and the rates to what your machine can do. The full list of settings is on the [endstops](/endstops) page.

### 3. Probe (Probe module) {#config-probe}

A probe on input 7, the screw terminal:

```ini
[zprobe]
enable        = true
probe_pin     = PJ2!^         # input 7  (G_F pin 9), probe that pulls its signal low
slow_feedrate = 5             # mm/s while probing
fast_feedrate = 100           # mm/s between probe points
probe_height  = 5             # mm above the surface to start from
```

The `!` is for a probe that pulls its signal low when it triggers. Leave it out for a probe whose signal goes high when it triggers.

### 4. Door switch (Switch module with an input pin) {#config-input}

The Switch module can watch a pin and send a command when it changes. Here a door contact on input 5 pauses the job while the door is open:

```ini
[switch]
door.enable             = true
door.input_pin          = PJ3^       # input 5  (G_F pin 7)
door.input_pin_behavior = momentary  # follow the contact
door.output_on_command  = M600       # contact open: suspend the job
door.output_off_command = M601       # contact closed again: resume
```

The contact is closed while the door is shut. When it opens, the input reads 1 and the firmware runs `M600`; an unplugged cable also reads 1, so a missing switch pauses the job. The pin is checked fifty times a second, so a very short press of a push-button can be missed. Any command can stand in place of `M600` and `M601`; write `_` where the command has a space.

### 5. Kill button (Kill button module) {#config-kill}

An emergency button on input 6. The module halts the machine when the pin reads 0, so use a button that closes its contact to ground when pressed:

```ini
[kill button]
enable        = true
pin           = PG1^          # input 6  (G_F pin 8)
toggle_enable = false         # true for a latching button that stays pressed
unkill_enable = true          # holding the button about 2 s clears the halt
```

The firmware has one kill button only. It is polled five times a second and acts through the firmware: it is not a substitute for an emergency stop that cuts the power.

### Commands

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Command</th><th>What it does</th></tr></thead>
  <tbody>
    <tr><td><code>M119</code></td><td>Lists every configured endstop pin and the probe with its state: 1 is triggered, 0 is not.</td></tr>
    <tr><td><code>$X</code> or <code>M999</code></td><td>Leaves the halted state after a limit switch was hit.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Good to know

- **No `!` for normally closed switches.** The board does not invert: an open switch reads 1, which the endstops module treats as triggered. Add `!` only for a sensor that pulls its signal low when it triggers, as in the probe example.
- **Keep the `^`.** It turns on the controller's own pull-up, so an unplugged ribbon cable reads as triggered and not as a random value.
- **An input with nothing connected reads triggered.** Enable in the configuration only the inputs that have a switch or sensor.
- **Filtering in the firmware.** `common.debounce_ms` under `[endstops]` adds a debounce time on top of the board's own filter.
- **Other uses.** An input can go to anything in the firmware that reads a pin.

## Wiring switches and sensors {#sensors}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Three ways to wire an input">
  <svg viewBox="0 0 1000 300" role="img" aria-labelledby="xb-es-wire-t">
    <title id="xb-es-wire-t">Three wirings. A switch uses S and G. A 5 volt sensor uses all three contacts: its output on S, its ground on G and its supply on 5V. A probe powered from an external 12 to 24 volt supply connects its output to S of input 7 and the supply's negative to G.</title>
    <g fill="#212936" stroke="#59616e" stroke-width="1.5"><rect x="20" y="20" width="300" height="260" rx="8"/><rect x="350" y="20" width="300" height="260" rx="8"/><rect x="680" y="20" width="300" height="260" rx="8"/></g>
    <g font-size="14" font-weight="700" fill="#e6ebf2" text-anchor="middle"><text x="170" y="48">Switch · inputs 1 to 6</text><text x="500" y="48">5 V sensor · inputs 1 to 6</text><text x="830" y="48">12 to 24 V probe · input 7</text></g>
    <!-- terminals -->
    <g font-size="12" font-weight="700" text-anchor="middle">
      <g fill="#5fb3ff"><rect x="40" y="90" width="44" height="24" rx="12"/><rect x="370" y="90" width="44" height="24" rx="12"/><rect x="700" y="90" width="44" height="24" rx="12"/></g>
      <g fill="#04182b"><text x="62" y="106">S</text><text x="392" y="106">S</text><text x="722" y="106">S</text></g>
      <g fill="#0d0f12" stroke="#8a94a3"><rect x="40" y="150" width="44" height="24" rx="12"/><rect x="370" y="150" width="44" height="24" rx="12"/><rect x="700" y="150" width="44" height="24" rx="12"/></g>
      <g fill="#fff"><text x="62" y="166">G</text><text x="392" y="166">G</text><text x="722" y="166">G</text></g>
      <g fill="#ff9f43"><rect x="40" y="210" width="44" height="24" rx="12"/><rect x="370" y="210" width="44" height="24" rx="12"/><rect x="700" y="210" width="44" height="24" rx="12"/></g>
      <g fill="#201004"><text x="62" y="226">5V</text><text x="392" y="226">5V</text><text x="722" y="226">5V</text></g>
    </g>
    <!-- switch -->
    <g fill="none" stroke-width="3.5"><path d="M84 102H200" stroke="#5fb3ff"/><path d="M84 162H250V102H240" stroke="#aeb7c2"/></g>
    <path d="M200 102L238 90" stroke="#5fb3ff" stroke-width="3.5" stroke-linecap="round"/><circle cx="200" cy="102" r="4.5" fill="#5fb3ff"/><circle cx="240" cy="102" r="4.5" fill="#aeb7c2"/>
    <text x="150" y="226" font-size="12" fill="#a9b4c2">not connected</text>
    <text x="170" y="262" font-size="12" fill="#a9b4c2" text-anchor="middle">normally closed contact</text>
    <!-- 5V sensor -->
    <rect x="530" y="84" width="100" height="156" rx="6" fill="#1f2226" stroke="#dfe4ee"/>
    <text x="580" y="130" font-size="13" font-weight="700" fill="#e6ebf2" text-anchor="middle">Sensor</text>
    <g font-size="11" fill="#a9b4c2"><text x="538" y="106">output</text><text x="538" y="166">0 V</text><text x="538" y="226">+5 V</text></g>
    <g fill="none" stroke-width="3.5"><path d="M414 102H530" stroke="#5fb3ff"/><path d="M414 162H530" stroke="#aeb7c2"/><path d="M414 222H530" stroke="#ff9f43"/></g>
    <text x="500" y="262" font-size="12" fill="#a9b4c2" text-anchor="middle">output must stay between 0 and 5 V</text>
    <!-- probe -->
    <rect x="860" y="70" width="100" height="70" rx="6" fill="#1f2226" stroke="#dfe4ee"/>
    <text x="910" y="100" font-size="13" font-weight="700" fill="#e6ebf2" text-anchor="middle">Probe</text>
    <rect x="860" y="170" width="100" height="70" rx="6" fill="#1f2226" stroke="#ffcc33"/>
    <text x="910" y="200" font-size="12" font-weight="700" fill="#ffcc33" text-anchor="middle">12 to 24 V</text><text x="910" y="218" font-size="12" fill="#ffcc33" text-anchor="middle">supply</text>
    <g fill="none" stroke-width="3.5"><path d="M744 102H860" stroke="#5fb3ff"/><path d="M744 162H830" stroke="#aeb7c2"/><path d="M860 126H830V226H860" stroke="#aeb7c2"/><path d="M960 190H975V110H960" stroke="#ffcc33"/></g>
    <circle cx="830" cy="162" r="4.5" fill="#aeb7c2"/>
    <g font-size="11" fill="#a9b4c2"><text x="868" y="88">out</text><text x="868" y="132">0 V</text><text x="922" y="132">+V</text><text x="868" y="234">−</text><text x="944" y="188">+</text></g>
    <text x="760" y="226" font-size="12" fill="#a9b4c2">unused</text>
    <text x="830" y="262" font-size="12" fill="#a9b4c2" text-anchor="middle">the two grounds must be joined</text>
  </svg>
  </div>
  <figcaption>Blue: signal. Grey: ground. Orange: the board's 5&nbsp;V sensor power. Yellow: a separate supply for a probe that needs more than 5&nbsp;V.</figcaption>
</figure>
{:/nomarkdown}

**Limit switches.** Use the normally closed contact, between S and G. A broken wire or a plug that fell out then reads the same as a pressed switch, and the machine stops instead of running past the switch.

**5 V sensors on inputs 1 to 6.** Power the sensor from the 5V contact and connect its output to S. Sensors that pull their output to ground (often called NPN or open-collector) and sensors that drive it between 0 and 5 V both work. All seven 5V contacts together are limited to about 0.2 A, so add up the supply currents of your sensors first.

**Never put more than 5 V on S of inputs 1 to 6.** They are built for switches and 5 V sensors. A sensor powered from 12 or 24 V whose output rises to its supply voltage belongs on input 7.

**A probe on input 7.** This input accepts a signal up to 45 V and reads high above about 2.2 V. Power a 12 to 24 V probe from its own supply, connect that supply's negative terminal to G and the probe's output to S. Then:

- If the probe **pulls its output to ground** when it triggers (NPN), leave link JP21 closed. The input reads high when idle and low when triggered, so the configuration uses `!`.
- If the probe **drives its output up to its supply voltage** when it triggers (PNP), cut link JP21. The input then reads low when idle and high when triggered, and the configuration needs no `!`.

**The signal on input 7 must never be negative**, and never above 45 V.

**Cables.** Keep sensor cables away from motor and spindle cables. The two holes marked TIE take a cable tie.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 300" role="img" aria-labelledby="xb-es-how-t">
    <title id="xb-es-how-t">Each of inputs 1 to 6 passes through a pull-up and filter, a buffer and a link to the controller connector. Input 7 passes through a divider and a comparator. The controller's 5 volts passes through a limiter to the 5V contact of every input.</title>
    <g fill="#212936" stroke="#59616e" stroke-width="1.5">
      <rect x="20" y="24" width="150" height="70" rx="8"/><rect x="230" y="24" width="150" height="70" rx="8"/><rect x="440" y="24" width="150" height="70" rx="8"/><rect x="650" y="24" width="120" height="70" rx="8"/>
      <rect x="20" y="118" width="150" height="70" rx="8"/><rect x="230" y="118" width="150" height="70" rx="8"/><rect x="440" y="118" width="150" height="70" rx="8"/><rect x="650" y="118" width="120" height="70" rx="8"/>
      <rect x="840" y="24" width="140" height="164" rx="8"/>
      <rect x="440" y="214" width="150" height="66" rx="8" stroke="#ff9f43"/>
    </g>
    <g font-size="13" font-weight="700" fill="#e6ebf2" text-anchor="middle">
      <text x="95" y="54">Inputs 1 to 6</text><text x="305" y="54">Pull-up and filter</text><text x="515" y="54">Buffer</text><text x="710" y="54">Link</text>
      <text x="95" y="148">Input 7</text><text x="305" y="148">Divider</text><text x="515" y="148">Comparator</text><text x="710" y="148">Link</text>
      <text x="910" y="100">Controller</text>
      <text x="515" y="242">Limiter</text>
    </g>
    <g font-size="12" fill="#a9b4c2" text-anchor="middle">
      <text x="95" y="76">switch or 5 V sensor</text><text x="305" y="76">10 kΩ, about 1 ms</text><text x="515" y="76">clean 3.3 V edge</text><text x="710" y="76">JP1 to JP6</text>
      <text x="95" y="170">probe, up to 45 V</text><text x="305" y="170">scales the signal down</text><text x="515" y="170">high above ≈ 2.2 V</text><text x="710" y="170">JP7</text>
      <text x="910" y="120">header G_F</text>
      <text x="515" y="262">about 0.2 A, fault LED</text>
    </g>
    <g stroke="#e6ebf2" stroke-width="2.5" fill="none">
      <path d="M170 59H222"/><path d="M380 59H432"/><path d="M590 59H642"/><path d="M770 59H832"/>
      <path d="M170 153H222"/><path d="M380 153H432"/><path d="M590 153H642"/><path d="M770 153H832"/>
    </g>
    <g fill="#e6ebf2"><path d="M230 59l-9-5v10z"/><path d="M440 59l-9-5v10z"/><path d="M650 59l-9-5v10z"/><path d="M840 59l-9-5v10z"/><path d="M230 153l-9-5v10z"/><path d="M440 153l-9-5v10z"/><path d="M650 153l-9-5v10z"/><path d="M840 153l-9-5v10z"/></g>
    <g stroke="#ff9f43" stroke-width="2.5" fill="none"><path d="M910 188V247H598"/><path d="M440 247H95V196"/></g>
    <g fill="#ff9f43"><path d="M590 247l9-5v10z"/><path d="M95 188l-5 9h10z"/></g>
    <text x="760" y="238" font-size="12" fill="#ff9f43" text-anchor="middle">5 V from the controller</text>
    <text x="250" y="238" font-size="12" fill="#ff9f43" text-anchor="middle">5 V to all seven inputs</text>
  </svg>
  </div>
  <figcaption>White: the signal paths. Orange: sensor power.</figcaption>
</figure>
{:/nomarkdown}

**Inputs 1 to 6.** A 10 kΩ resistor pulls each signal up to the 5 V sensor supply, and a small capacitor filters out spikes shorter than about a millisecond. A Schmitt-trigger buffer then decides high or low with a margin between the two thresholds, so a slowly changing or noisy signal produces one clean edge. Its 3.3 V output goes to the controller through a 330 Ω resistor and the input's link. Each signal contact also has a protection part against static discharge.

**Input 7.** A resistor divider scales the signal down by about 21, so 45 V at the screw becomes about 2.1 V inside. A comparator compares the result with a fixed reference and outputs high when the signal at the screw is above about 2.2 V. A protection diode clamps voltages above the rated range and any negative voltage.

**Sensor power.** The controller's 5 V passes through a limiter chip before reaching the 5V contacts. If the sensors draw more than about 0.2 A in total, or a sensor cable is shorted, the limiter restricts the current and the red FIELD FAULT LED lights. The switch inputs keep their pull-ups from the same limited supply, so a fault there can disturb all inputs until it is removed.

## What the LEDs tell you {#leds}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-green"></span>POWER 3V3</th><th><span class="xb-led xb-led-red"></span>FIELD FAULT</th></tr></thead>
  <tbody>
    <tr><td>Where</td><td>Left edge, upper light</td><td>Left edge, lower light</td></tr>
    <tr><td>Lit means</td><td>The board gets 3.3&nbsp;V from the controller. Lit in normal use.</td><td>The sensor power limiter reports a fault, for example a short circuit on a sensor cable or sensors drawing more than about 0.2&nbsp;A together.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

There is no light per input: use `M119` to see the state of each input. A dark light can also be a cut link (JP23 for the green light, JP22 for the red one).

## Options {#options}

All options are solder links on the top side, with their names printed beside them. A closed link has a thin bridge between its two pads: cut it with a sharp knife to open it. An open link is closed with a drop of solder. Change links with the board unpowered.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>As delivered</th><th>What it does</th><th>Change it when</th></tr></thead>
  <tbody>
    <tr><td>JP1 to JP7</td><td>Closed</td><td>Connects input 1 to 7 to its controller pin</td><td>You want that controller pin for <a href="#chaining">another board</a></td></tr>
    <tr><td>JP21</td><td>Closed</td><td>Pull-up of the probe input to 5&nbsp;V</td><td>Your probe drives its own signal voltage (PNP): cut it</td></tr>
    <tr><td>JP11, JP12, JP20</td><td>Closed</td><td>Pass 3.3&nbsp;V, 5&nbsp;V and ground to the chain connector</td><td>The chained board must not be powered from here: cut JP11 or JP12</td></tr>
    <tr><td>JP13 to JP19</td><td>Open</td><td>Pass controller pins 3 to 9 to the chain connector</td><td>See <a href="#chaining">sharing the header</a></td></tr>
    <tr><td>JP23</td><td>Closed</td><td>Green POWER 3V3 LED</td><td>You want the LED dark: cut it</td></tr>
    <tr><td>JP22</td><td>Closed</td><td>Red FIELD FAULT LED</td><td>You want the LED dark: cut it</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Sharing the header with a second board {#chaining}

If you use fewer than seven inputs, the controller pins of the unused inputs can go on to a second board plugged into the chain connector J9. For each pin you want to pass on:

1. **Cut the input's own link** (JP1 for input 1, up to JP7 for input 7). This must come first: otherwise this board's buffer and the second board would both drive the same pin.
2. **Close the chain link of the same pin**: JP13 for input 1, JP14 for input 2, and so on up to JP19 for input 7.

{::nomarkdown}
{% include _includes/extension-chain-figure.html id="xb-es" board="Endstop inputs board" in_label="J8" chain_label="J9" lane1="3.3 V, 5 V and ground (pins 1, 2, 10)" s1="closed" lane2="a pin with a switch on this board" s2="open" lane3="a pin you freed: input link cut, chain link closed" s3="closed" caption="On this board the three power links are closed as delivered and the seven signal links are open." %}
{:/nomarkdown}

That controller pin then appears on the same pin number of J9. Power and ground are passed on as delivered. The 5 V on the chain connector comes straight from the controller and does not go through this board's limiter.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>When you see</th><th>It means</th><th>Do this</th></tr></thead>
  <tbody>
    <tr><td>The green LED is dark</td><td>The board gets no 3.3&nbsp;V.</td><td>Check the ribbon cable at both ends, that it is in J8 and not J9, that it is on header G_F, and that pin 1 goes to pin 1.</td></tr>
    <tr><td>An input always reads 1</td><td>The board sees an open circuit.</td><td>Check the switch is on its normally closed contact, the wires are on S and G, and the contact order matches your <a href="#pinout">connector type</a>. Join S and G with a piece of wire: if it now reads 0, the board is fine and the fault is in the switch or cable.</td></tr>
    <tr><td>An input always reads 0</td><td>S is connected to ground all the time.</td><td>Unplug the sensor. If the input now reads 1, the sensor or its cable holds the signal low. Check whether the sensor needs the 5V contact.</td></tr>
    <tr><td><code>M119</code> does not list the pin</td><td>The input is not configured.</td><td>Check <code>enable = true</code> and the pin name in the configuration, then restart the board.</td></tr>
    <tr><td>The machine halts with <code>ALARM: Hard limit</code> as soon as an axis moves</td><td>A limit input reads triggered.</td><td>Send <code>M119</code>. An enabled input with nothing connected reads 1: disable it or connect its switch.</td></tr>
    <tr><td>The red FIELD FAULT LED is lit</td><td>The sensors draw too much current, or a 5V contact is shorted.</td><td>Unplug the sensors one by one until the LED goes out. Add up their supply currents: the total is limited to about 0.2&nbsp;A.</td></tr>
    <tr><td>The probe reads the wrong way round</td><td>The polarity does not match the probe type.</td><td>Add or remove <code>!</code> on <code>probe_pin</code>.</td></tr>
    <tr><td>The probe input never changes</td><td>The pull-up setting does not suit the probe, or the grounds are not joined.</td><td>For a probe that drives its own voltage, cut JP21. Check the probe supply's negative terminal is connected to G.</td></tr>
    <tr><td>An input triggers by itself during motion</td><td>Electrical noise on the sensor cable.</td><td>Route the cable away from motor cables, and set <code>common.debounce_ms</code> under <code>[endstops]</code>.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/). Include the text printed on your board, which connector type it has, what is connected to each input, and what `M119` replies.

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/additional-endstop-inputs-breakout/endstop-inputs-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/additional-endstop-inputs-breakout/endstop-inputs-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint. Inputs 1 to 6 are listed with the shared footprint that accepts all three connector types.</td></tr>
    <tr><td><a href="/images/extensions/additional-endstop-inputs-breakout/endstop-inputs-diagram.png">Top view (SVG)</a></td><td>The drawing used on this page, to scale: one unit is one millimetre</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the corner marked 0, 0 with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-es-mount-t">
  <title id="xb-es-mount-t">Mounting drawing of the endstop inputs board, component side: outline 96 by 70.5 millimetres with 4 mounting holes and 2 cable-tie holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="248.5" y="78.0" width="463.0" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M248.5 56H711.5"/><path d="M248.5 50V62"/><path d="M711.5 50V62"/><path d="M737.5 78.0V418.0"/><path d="M731.5 78.0h12"/><path d="M731.5 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">96</text>
  <text x="749.5" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">70.5</text>
  <circle cx="248.5" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="236.5" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M190.5 104.0h30" fill="none"/><path d="M224.5 104.0l-8 -4v8z"/><path d="M190.5 104.0v30" fill="none"/><path d="M190.5 138.0l-4 -8h8z"/></g>
  <text x="228.5" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="186.5" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="287.1" cy="126.2" r="7.7" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M275.4 126.2h23.4M287.1 114.5v23.4" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="279.4" y="153.9" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  8.00, 10.00</text>
  <circle cx="672.9" cy="126.2" r="7.7" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M661.2 126.2h23.4M672.9 114.5v23.4" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="680.6" y="153.9" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  88.00, 10.00</text>
  <circle cx="287.1" cy="319.1" r="7.7" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M275.4 319.1h23.4M287.1 307.4v23.4" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="279.4" y="301.4" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  8.00, 50.00</text>
  <circle cx="672.9" cy="319.1" r="7.7" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M661.2 319.1h23.4M672.9 307.4v23.4" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="680.6" y="301.4" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  88.00, 50.00</text>
  <circle cx="697.0" cy="246.8" r="7.7" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <circle cx="697.0" cy="280.6" r="7.7" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <text x="681.3" y="267.7" text-anchor="end" font-size="12" fill="#a9b4c2">cable tie</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 96 × 70.5&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>8.00</td><td>10.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>88.00</td><td>10.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>8.00</td><td>50.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>88.00</td><td>50.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>–</td><td>93.00</td><td>35.00</td><td>3.2&nbsp;mm, not plated</td><td>Cable tie</td></tr>
    <tr><td>–</td><td>93.00</td><td>42.00</td><td>3.2&nbsp;mm, not plated</td><td>Cable tie</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

A dash means that no value is given or the figure does not apply.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Conditions</th></tr></thead>
  <tbody>
    <tr><td>Logic supply</td><td>J8 pin 1</td><td>—</td><td>3.3 V</td><td>—</td><td>From the controller</td></tr>
    <tr><td>Sensor supply input</td><td>J8 pin 2</td><td>—</td><td>5 V</td><td>—</td><td>From the controller</td></tr>
    <tr><td>Sensor power, all seven inputs together</td><td>5V contacts</td><td>—</td><td>—</td><td>≈ 0.2 A</td><td>Printed on the board</td></tr>
    <tr><td>Sensor signal voltage</td><td>Inputs 1 to 6</td><td>0 V</td><td>—</td><td>5 V</td><td>Signal range</td></tr>
    <tr><td>Pull-up</td><td>Inputs 1 to 6</td><td>—</td><td>10 kΩ</td><td>—</td><td>Fitted part value, to the 5&nbsp;V sensor supply</td></tr>
    <tr><td>Current through a closed switch</td><td>Inputs 1 to 6</td><td>—</td><td>≈ 0.5 mA</td><td>—</td><td>Calculated</td></tr>
    <tr><td>Input filter time</td><td>Inputs 1 to 6</td><td>—</td><td>≈ 1 ms</td><td>—</td><td>Calculated</td></tr>
    <tr><td>Signal voltage</td><td>Input 7 (probe)</td><td>3 V</td><td>—</td><td>45 V</td><td>Printed on the board. Positive only.</td></tr>
    <tr><td>Switching threshold</td><td>Input 7 (probe)</td><td>—</td><td>≈ 2.2 V</td><td>—</td><td>Calculated</td></tr>
    <tr><td>Output level to the controller</td><td>J8 pins 3 to 9</td><td>0 V</td><td>—</td><td>3.3 V</td><td>Logic outputs; through 330&nbsp;Ω (inputs 1 to 6) or a 10&nbsp;kΩ pull-up (input 7)</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Component stress limits

These are limits of individual parts, beyond which the part can be damaged. They are not operating conditions; stay inside the table above.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Circuit</th><th>Pin or device stress</th><th>Absolute limit</th></tr></thead>
  <tbody>
    <tr><td>Probe input</td><td>Voltage on the S screw of input 7</td><td>45 V, positive only</td></tr>
    <tr><td>Inputs 1 to 6</td><td>Voltage on a signal pin</td><td>Stay within 0 to 5 V</td></tr>
    <tr><td>Sensor power</td><td>Short circuit on a 5V contact</td><td>Limited to about 0.2 A</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
