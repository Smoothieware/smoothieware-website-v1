---
layout: default
title: "Arduino-to-Gadgeteer shield"
description: "A shield that gives an Arduino Due six Gadgeteer sockets and a Qwiic port, with switched signals and current-limited supply rails."
permalink: /extensions/arduino-to-gadgeteer-shield
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Host adapters</p>
    <h1 id="arduino-to-gadgeteer-shield">Arduino-to-Gadgeteer shield</h1>
    <p class="xb-lead">Turn an Arduino Due into a host for small modules: six ten-contact sockets (Y, A, P, S, U and I) and a Qwiic port, with current-limited rails and signals that stay disconnected until the board is armed.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/arduino-to-gadgeteer-shield/v23/arduino-to-gadgeteer-shield-diagram.webp" alt="Top view of the Arduino-to-Gadgeteer shield.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>6 sockets</b><span>Y A P S U I</span></div>
  <div class="xb-stat"><b>3.3 V</b><span>signals</span></div>
  <div class="xb-stat"><b>80 mA</b><span>per rail</span></div>
  <div class="xb-stat"><b>Armed</b><span>by jumper JP1</span></div>
  <div class="xb-stat"><b>Qwiic</b><span>shares the I socket</span></div>
  <div class="xb-stat"><b>Due</b><span>only</span></div>
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
  For the Arduino Due only: 3.3&nbsp;V signals. The sockets are outputs of the Due, so never cable one to another powered controller. Keep each exported supply within 80&nbsp;mA.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>Gadgeteer host ports for an Arduino Due</td></tr>
    <tr><td>Sockets</td><td>J1 Y (D22 to D28), J2 A (A0 to A2), J3 P (PWM D6 to D8), J4 S (SPI, chip select D10), J5 U (Serial1), J6 I (SDA20, SCL21)</td></tr>
    <tr><td>Qwiic</td><td>J7: ground, 3.3&nbsp;V, SDA, SCL, same bus as J6</td></tr>
    <tr><td>Signal switches</td><td><a href="/images/extensions/arduino-to-gadgeteer-shield/datasheets/tmux1511.pdf">TMUX1511</a>, enabled only when armed and the rails are good</td></tr>
    <tr><td>Supply rails</td><td>3.3&nbsp;V and 5&nbsp;V, auto-retry limiters (125&nbsp;mA trip); use up to 80&nbsp;mA each</td></tr>
    <tr><td>Arming</td><td>JP1; remove it to disconnect</td></tr>
    <tr><td>Light</td><td>Red: fault or isolated</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
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
      <img src="/images/extensions/arduino-to-gadgeteer-shield/v23/arduino-to-gadgeteer-shield-diagram.webp" alt="Top view of the Arduino-to-Gadgeteer shield with numbered markers explained in the list below.">
      <a class="xb-mk xb-pb xb-pr" href="#tour-1" style="left:78.2%;top:14.6%" aria-label="1: Y socket (J1)">1<span class="xb-pop"><b>Y socket (J1)</b> — general inputs and outputs.</span></a>
      <a class="xb-mk" href="#tour-2" style="left:54.0%;top:79.6%" aria-label="2: A socket (J2)">2<span class="xb-pop"><b>A socket (J2)</b> — analog.</span></a>
      <a class="xb-mk xb-pb" href="#tour-3" style="left:54.0%;top:14.6%" aria-label="3: P socket (J3)">3<span class="xb-pop"><b>P socket (J3)</b> — PWM.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:34.7%;top:14.6%" aria-label="4: S socket (J4)">4<span class="xb-pop"><b>S socket (J4)</b> — SPI.</span></a>
      <a class="xb-mk xb-pr" href="#tour-5" style="left:78.2%;top:79.6%" aria-label="5: U socket (J5)">5<span class="xb-pop"><b>U socket (J5)</b> — serial.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:34.7%;top:79.6%" aria-label="6: I socket (J6)">6<span class="xb-pop"><b>I socket (J6)</b> — I&sup2;C.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-7" style="left:4.6%;top:43.5%" aria-label="7: Qwiic port (J7)">7<span class="xb-pop"><b>Qwiic port (J7)</b> — the I bus again.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-8" style="left:18.8%;top:36.3%" aria-label="8: Arm jumper (JP1)">8<span class="xb-pop"><b>Arm jumper (JP1)</b> — connects signals when fitted.</span></a>
      <a class="xb-mk xb-pr" href="#tour-9" style="left:97.5%;top:54.3%" aria-label="9: Fault light (D89)">9<span class="xb-pop"><b>Fault light (D89)</b> — red.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-10" style="left:80.1%;top:30.8%" aria-label="10: Signal switches">10<span class="xb-pop"><b>Signal switches</b> — TMUX1511 parts isolate the sockets.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Y socket (J1)</b> — general inputs and outputs.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>A socket (J2)</b> — analog.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>P socket (J3)</b> — PWM.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>S socket (J4)</b> — SPI.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>U socket (J5)</b> — serial.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>I socket (J6)</b> — I&sup2;C.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Qwiic port (J7)</b> — the I bus again.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Arm jumper (JP1)</b> — connects signals when fitted.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Fault light (D89)</b> — red.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Signal switches</b> — <a href="/images/extensions/arduino-to-gadgeteer-shield/datasheets/tmux1511.pdf">TMUX1511</a> parts isolate the sockets.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

### Lights {#lights}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th>Lit means</th><th>Disable it</th></tr></thead>
  <tbody>
    <tr><td>D89, red</td><td>Fault, or signals isolated</td><td>Cut JP83 (back)</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Pinout {#pinout}

### Sockets

Contact 1 is the limited 3.3&nbsp;V, contact 2 the limited 5&nbsp;V and contact 10 ground on J1 to J6.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Socket</th><th>Contacts to Due pins</th></tr></thead>
  <tbody>
    <tr><td>J1 Y</td><td>3 to 9: D22 to D28</td></tr>
    <tr><td>J2 A</td><td>3 to 5: A0 to A2; 6: D29</td></tr>
    <tr><td>J3 P</td><td>3 and 6: D30, D31; 7 to 9: D6 to D8</td></tr>
    <tr><td>J4 S</td><td>3 to 5: D32 to D34; 6: D10; 7: MOSI; 8: MISO; 9: SCK</td></tr>
    <tr><td>J5 U</td><td>3: D35; 4: D18; 5: D19; 6: D36</td></tr>
    <tr><td>J6 I</td><td>3: D37; 6: D38; 8: D20 (SDA); 9: D21 (SCL)</td></tr>
    <tr><td>J7 Qwiic</td><td>1 ground, 2 3.3&nbsp;V, 3 SDA, 4 SCL</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Arduino Due</b><span>No other Arduino model.</span></div>
  <div class="xb-card"><b>This shield</b><span>Fitted with the power off.</span></div>
  <div class="xb-card"><b>Low-current modules</b><span>3.3 V signals.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

Start with the shield disarmed.

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Fit the shield</h3>
    <p>With power off, check the header positions, including the central SPI connector.</p>
  </li>
  <li class="xb-step">
    <h3>Remove JP1</h3>
    <p>Signals stay isolated.</p>
  </li>
  <li class="xb-step">
    <h3>Load a sketch</h3>
    <p>Set safe pin modes first.</p>
  </li>
  <li class="xb-step">
    <h3>Connect one module</h3>
    <p>Check its supply current and that it has no other power source.</p>
  </li>
  <li class="xb-step">
    <h3>Arm</h3>
    <p>Fit JP1.</p>
    <p class="xb-expect">The red light goes out and the sockets are connected.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Use the sockets</td><td>Your Arduino Due sketch; not a Smoothieboard module</td><td><a href="#config-main">Setup</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Setup {#config-main}

Smoothieware does not run on the Arduino Due, so there is no Smoothieware configuration. The Due sketch sets up each pin and protocol.

## How it works {#how-it-works}

Supervisors watch the arming jumper and both limited rails. Only when all are good are the <a href="/images/extensions/arduino-to-gadgeteer-shield/datasheets/tmux1511.pdf">TMUX1511</a> switches enabled, connecting Due pins to the sockets.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Red light stays on</td><td>Fit JP1, remove the module and check for a short or an overload on a rail.</td></tr>
    <tr><td>I²C conflicts</td><td>J6 and J7 are one bus: check addresses and pull-ups.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/arduino-to-gadgeteer-shield/v23/arduino-to-gadgeteer-shield-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/arduino-to-gadgeteer-shield/v23/arduino-to-gadgeteer-shield-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/arduino-to-gadgeteer-shield/v23/arduino-to-gadgeteer-shield-diagram.webp">Board drawing (WebP)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 455" role="img" aria-labelledby="xb-ag-mount-t">
  <title id="xb-ag-mount-t">Mounting drawing of the ag, component side: outline 101.6 by 53.34 millimetres with 6 mounting holes and 2 cable-tie holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="180.0" y="78.0" width="600.0" height="315.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M180.0 56H780.0"/><path d="M180.0 50V62"/><path d="M780.0 50V62"/><path d="M806.0 78.0V393.0"/><path d="M800.0 78.0h12"/><path d="M800.0 393.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">101.6</text>
  <text x="818.0" y="240.5" font-size="15" font-weight="700" fill="#e6ebf2">53.34</text>
  <circle cx="180.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="168.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M122.0 104.0h30" fill="none"/><path d="M156.0 104.0l-8 -4v8z"/><path d="M122.0 104.0v30" fill="none"/><path d="M122.0 138.0l-4 -8h8z"/></g>
  <text x="160.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="118.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="270.0" cy="93.0" r="9.4" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M256.6 93.0h26.9M270.0 79.6v26.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="260.6" y="122.4" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  15.24, 2.54</text>
  <circle cx="712.5" cy="93.0" r="9.4" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M699.1 93.0h26.9M712.5 79.6v26.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="721.9" y="122.4" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  90.17, 2.54</text>
  <circle cx="570.0" cy="183.0" r="9.4" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M556.6 183.0h26.9M570.0 169.6v26.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="579.4" y="212.4" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  66.04, 17.78</text>
  <circle cx="570.0" cy="348.0" r="9.4" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M556.6 348.0h26.9M570.0 334.6v26.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="579.4" y="328.6" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  66.04, 45.72</text>
  <circle cx="262.5" cy="378.0" r="9.4" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M249.1 378.0h26.9M262.5 364.6v26.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="253.1" y="358.6" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">5</tspan>  13.97, 50.80</text>
  <circle cx="750.0" cy="378.0" r="9.4" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M736.6 378.0h26.9M750.0 364.6v26.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="759.4" y="358.6" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">6</tspan>  96.52, 50.80</text>
  <circle cx="197.7" cy="95.7" r="7.4" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <circle cx="227.2" cy="95.7" r="7.4" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <text x="212.5" y="121.1" text-anchor="middle" font-size="12" fill="#a9b4c2">cable tie</text>
  <text x="480.0" y="423.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 101.6 × 53.34&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>15.24</td><td>2.54</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>90.17</td><td>2.54</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>66.04</td><td>17.78</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>66.04</td><td>45.72</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>5</td><td>13.97</td><td>50.80</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>6</td><td>96.52</td><td>50.80</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>–</td><td>3.00</td><td>3.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
    <tr><td>–</td><td>8.00</td><td>3.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Values from the silk screen and parts list.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Rail current</td><td>Each rail</td><td>—</td><td>—</td><td>80 mA</td><td>Shared by all sockets</td></tr>
    <tr><td>Signal level</td><td>All signals</td><td>—</td><td>3.3 V</td><td>—</td><td>Board silk</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: datasheets {#datasheets}

The first page of each important chip&rsquo;s datasheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/arduino-to-gadgeteer-shield/datasheets/tmux1511.pdf"><img src="/images/extensions/arduino-to-gadgeteer-shield/datasheets/tmux1511-page1.png" alt="First page of the TMUX1511 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/arduino-to-gadgeteer-shield/datasheets/tmux1511.pdf">TMUX1511 four-channel signal switch with powered-off protection</a> — Texas Instruments, 45 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/arduino-to-gadgeteer-shield/datasheets/tps2596.pdf"><img src="/images/extensions/arduino-to-gadgeteer-shield/datasheets/tps2596-page1.png" alt="First page of the TPS259631 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/arduino-to-gadgeteer-shield/datasheets/tps2596.pdf">TPS2596 family eFuse</a> — Texas Instruments, 47 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/arduino-to-gadgeteer-shield/datasheets/tps3808.pdf"><img src="/images/extensions/arduino-to-gadgeteer-shield/datasheets/tps3808-page1.png" alt="First page of the TPS3808 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/arduino-to-gadgeteer-shield/datasheets/tps3808.pdf">TPS3808 low-quiescent-current supervisor</a> — Texas Instruments, 39 pages.</figcaption>
</figure>
{:/nomarkdown}


See all boards on the [extension boards](/extension-boards) page.
