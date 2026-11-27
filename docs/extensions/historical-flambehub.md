---
layout: default
title: "Flambehub — trigger and power-disconnect hub"
description: "Eight-trigger hardware power disconnect hub with relays: connectors and limits."
permalink: /extensions/historical-flambehub
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Safety add-on</p>
    <h1 id="historical-flambehub">Flambehub — trigger and power-disconnect hub</h1>
    <p class="xb-lead">Collects eight hardware trigger inputs and an MCU input and drives a relay power disconnect without needing the controller to decide.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/historical-flambehub/directory-board-render.png" alt="Top view of the Flambehub — trigger and power-disconnect hub board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>8</b><span>trigger inputs</span></div>
  <div class="xb-stat"><b>2</b><span>relays</span></div>
  <div class="xb-stat"><b>MAX6818</b><span>debouncer</span></div>
  <div class="xb-stat"><b>8</b><span>indicator LEDs</span></div>
  <div class="xb-stat"><b>60 × 65 mm</b><span>board size</span></div>
  <div class="xb-stat"><b>28 V DC</b><span>author&rsquo;s figure</span></div>
</div>

<nav class="xb-nav" aria-label="On this page">
  <a href="#specs">Tech specs</a>
  <a href="#tour">Board tour</a>
  <a href="#pinout">Pinout</a>
  <a href="#what-you-need">What you need</a>
  <a href="#configuration">Configuration</a>
  <a href="#how-it-works">How it works</a>
  <a href="#troubleshooting">Troubleshooting</a>
  <a href="#downloads">Downloads</a>
  <a href="#mounting">Mounting dimensions</a>
  <a href="#electrical">Electrical specifications</a>
</nav>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <b>This is not a certified safety device,</b> and the author&rsquo;s figure of up to 30 A at 28 V DC is not verified. J12 and J13 are switched-return outputs, not 5 V supply headers. Third-party design by Chris Cecil.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>Hardware trigger and disconnect hub</td></tr>
    <tr><td>Triggers</td><td>J4–J11: ground, 5 V, input</td></tr>
    <tr><td>MCU input</td><td>J3</td></tr>
    <tr><td>Power input</td><td>J1, J2, fused by F1</td></tr>
    <tr><td>Switched outputs</td><td>J15–J17, J12–J14</td></tr>
    <tr><td>Logic</td><td>U1 MAX6818, U3 4068</td></tr>
    <tr><td>Relays</td><td>K1 power, K2 latching</td></tr>
    <tr><td>Size</td><td>60 × 65 mm</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/historical-flambehub/directory-board-render.png" alt="Annotated top view of the Flambehub — trigger and power-disconnect hub board">
      <a class="xb-mk xb-pr" href="#tour-1" style="left:78.3%;top:77.3%" aria-label="1: Trigger inputs">1<span class="xb-pop"><b>Trigger inputs</b> — J4–J11.</span></a>
      <a class="xb-mk" href="#tour-2" style="left:62.1%;top:89.6%" aria-label="2: MCU input">2<span class="xb-pop"><b>MCU input</b> — Controller signal.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-3" style="left:15.5%;top:49.2%" aria-label="3: MAX6818">3<span class="xb-pop"><b>MAX6818</b> — Debouncer.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:54.4%;top:74.1%" aria-label="4: 4068">4<span class="xb-pop"><b>4068</b> — Combines the triggers.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:48.4%;top:63.0%" aria-label="5: Power relay">5<span class="xb-pop"><b>Power relay</b> — Switches the supply.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:25.5%;top:63.2%" aria-label="6: Latching relay">6<span class="xb-pop"><b>Latching relay</b> — Holds the state.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:46.0%;top:21.3%" aria-label="7: Fuse">7<span class="xb-pop"><b>Fuse</b> — On the supply.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-8" style="left:12.1%;top:33.0%" aria-label="8: Power input">8<span class="xb-pop"><b>Power input</b> — J2 is parallel.</span></a>
      <a class="xb-mk" href="#tour-9" style="left:57.5%;top:89.1%" aria-label="9: Indicator LEDs">9<span class="xb-pop"><b>Indicator LEDs</b> — One per trigger.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Trigger inputs</b> — J4–J11.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>MCU input</b> — Controller signal.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>MAX6818</b> — Debouncer.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>4068</b> — Combines the triggers.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Power relay</b> — Switches the supply.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Latching relay</b> — Holds the state.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Fuse</b> — On the supply.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Power input</b> — J2 is parallel.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Indicator LEDs</b> — One per trigger.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

<span id="connect-and-try-it"></span>

### Trigger input J4 (IN1)

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J4 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>GND</code></td></tr>
    <tr><td>2</td><td><code>+5V</code></td></tr>
    <tr><td>3</td><td><code>IN1</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

J5–J11 follow J4 for IN2–IN8.

### MCU input J3

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J3 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>joined to R1 pad 1</td></tr>
    <tr><td>2</td><td><code>+5V</code></td></tr>
    <tr><td>3</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Power input J1

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>GND</code></td></tr>
    <tr><td>2</td><td><code>Vi</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Output J15

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J15 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>GND</code></td></tr>
    <tr><td>2</td><td><code>NC_Out</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Output J16

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J16 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>GND</code></td></tr>
    <tr><td>2</td><td><code>NO_Out</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Switched return J12

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J12 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+5V</code></td></tr>
    <tr><td>2</td><td><code>NC GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Switched return J13

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J13 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+5V</code></td></tr>
    <tr><td>2</td><td><code>NO GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Output J14

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J14 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>NC_5v</code></td></tr>
    <tr><td>2</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Flambehub board</b><span>Built from the design files</span></div>
  <div class="xb-card"><b>Fuse</b><span>Sized for the load</span></div>
  <div class="xb-card"><b>Trigger devices</b><span>Compatible logic outputs</span></div>
</div>
{:/nomarkdown}

## Configuration {#configuration}

<span id="smoothieware-use"></span>

Hardware only: no Smoothieware setting is needed for the trigger and disconnect function.

## How it works {#how-it-works}

The MAX6818 debounces the eight inputs, a 4068 combines them, and the latching relay K2 controls the power relay K1, which switches the fused supply between its normally closed and normally open outputs.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Relay does not change state</td><td>Check the supply, 5 V rail and trigger levels.</td></tr>
    <tr><td>One trigger ignored</td><td>Check its connector and indicator LED.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="https://raw.githubusercontent.com/Ccecil/Flambehub/02f355e19b2fc8b0a7baaca4e1a2e3b2ae2ffc71/Flambehub_0.2.kicad_pcb">Flambehub_0.2.kicad_pcb</a></td><td>Design source</td></tr>
    <tr><td><a href="https://raw.githubusercontent.com/Ccecil/Flambehub/02f355e19b2fc8b0a7baaca4e1a2e3b2ae2ffc71/Flambehub_0.2.kicad_sch">Flambehub_0.2.kicad_sch</a></td><td>Design source</td></tr>
    <tr><td><a href="https://raw.githubusercontent.com/Ccecil/Flambehub/02f355e19b2fc8b0a7baaca4e1a2e3b2ae2ffc71/README.md">README.md</a></td><td>Design source</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

Outline and holes from the original board file. Millimetres, seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-al-flambehub-mount-t">
  <title id="xb-al-flambehub-mount-t">Mounting drawing of the historical-flambehub, component side: outline 60 by 65 millimetres with 5 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="323.1" y="78.0" width="313.8" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M323.1 56H636.9"/><path d="M323.1 50V62"/><path d="M636.9 50V62"/><path d="M662.9 78.0V418.0"/><path d="M656.9 78.0h12"/><path d="M656.9 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">60</text>
  <text x="674.9" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">65</text>
  <circle cx="323.1" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="311.1" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M265.1 104.0h30" fill="none"/><path d="M299.1 104.0l-8 -4v8z"/><path d="M265.1 104.0v30" fill="none"/><path d="M265.1 138.0l-4 -8h8z"/></g>
  <text x="303.1" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="261.1" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="348.4" cy="119.8" r="8.4" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M336.1 119.8h24.7M348.4 107.5v24.7" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="340.1" y="148.2" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  4.85, 8.00</text>
  <circle cx="610.0" cy="119.8" r="8.4" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M597.6 119.8h24.7M610.0 107.5v24.7" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="618.4" y="148.2" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  54.85, 8.00</text>
  <circle cx="480.0" cy="234.7" r="6.5" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M469.5 234.7h21.1M480.0 224.1v21.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="486.5" y="261.2" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  30.00, 29.95</text>
  <circle cx="348.4" cy="381.4" r="8.4" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M336.1 381.4h24.7M348.4 369.0v24.7" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="340.1" y="363.0" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  4.85, 58.00</text>
  <circle cx="610.0" cy="381.4" r="8.4" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M597.6 381.4h24.7M610.0 369.0v24.7" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="618.4" y="363.0" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">5</tspan>  54.85, 58.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 60 × 65&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>4.85</td><td>8.00</td><td>3.2&nbsp;mm, plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>54.85</td><td>8.00</td><td>3.2&nbsp;mm, plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>30.00</td><td>29.95</td><td>2.5&nbsp;mm, not plated</td><td>Mounting</td></tr>
    <tr><td>4</td><td>4.85</td><td>58.00</td><td>3.2&nbsp;mm, plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>5</td><td>54.85</td><td>58.00</td><td>3.2&nbsp;mm, plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Only what the design source states or the circuit fixes. Blank cells are not specified.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Voltage, current and temperature limits</td><td>Whole board</td><td>—</td><td>—</td><td>—</td><td>Not specified in the source</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Design source {#origin}

Third-party design by Chris Cecil: [original board file](https://raw.githubusercontent.com/Ccecil/Flambehub/02f355e19b2fc8b0a7baaca4e1a2e3b2ae2ffc71/Flambehub_0.2.kicad_pcb) (<code>Flambehub_0.2.kicad_pcb</code>). It is a separate hardware design, not a current Smoothieware board.
See all boards on the [extension boards](/extension-boards) page.
