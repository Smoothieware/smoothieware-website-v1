---
layout: default
title: "Differential STEP/DIR/EN extender"
description: "A host and a remote board that carry STEP, DIR and ENABLE as differential pairs to a Leadshine DM556E stepper driver."
permalink: /extensions/differential-step-dir-en-extender
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Motors and outputs</p>
    <h1 id="differential-step-dir-en-extender">Differential STEP/DIR/EN extender</h1>
    <p class="xb-lead">Carry one axis&rsquo;s STEP, DIR and ENABLE over a cable to a distant stepper driver. The remote board&rsquo;s outputs match the common-anode inputs of the Leadshine DM556E.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/differential-step-dir-en-extender/v31/differential-step-dir-en-extender-host-diagram.png" alt="Top view of the host board: a ten-contact socket and a cable jack.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>3 signals</b><span>STEP, DIR, ENABLE</span></div>
  <div class="xb-stat"><b>2 boards</b><span>host and remote</span></div>
  <div class="xb-stat"><b>DM556E</b><span>5 V input setting</span></div>
  <div class="xb-stat"><b>200 kHz</b><span>drive&rsquo;s step limit</span></div>
  <div class="xb-stat"><b>2.5 µs</b><span>minimum pulse high and low</span></div>
  <div class="xb-stat"><b>No isolation</b><span>in the link</span></div>
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
  Do not apply power to J3 on the remote board. Diode D7 points against the path from the inlet to the regulator, so the board must not be powered that way. The jacks are not Ethernet.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>Extend one axis&rsquo;s control signals; motor power stays at the drive</td></tr>
    <tr><td>Host</td><td><a href="/images/extensions/differential-step-dir-en-extender/datasheets/sn74lvc2g04.pdf">74LVC2G04</a> and three <a href="/images/extensions/differential-step-dir-en-extender/datasheets/thvd1451.pdf">THVD1451</a> drivers, powered by the controller socket</td></tr>
    <tr><td>Remote</td><td>Three <a href="/images/extensions/differential-step-dir-en-extender/datasheets/thvd1451.pdf">THVD1451</a> receivers, <a href="/images/extensions/differential-step-dir-en-extender/datasheets/sn74lvc2g04.pdf">74LVC2G04</a> and three transistor sink outputs</td></tr>
    <tr><td>Drive</td><td>Leadshine DM556E, hardware 2.0, input voltage switch at 5&nbsp;V</td></tr>
    <tr><td>Supply inlet</td><td>J3, marked 18 to 50&nbsp;V DC: see the warning above</td></tr>
    <tr><td>Sizes</td><td>Host 60 &times; 40&nbsp;mm; remote 60 &times; 60&nbsp;mm; cable-tie points</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The host board sits by the controller, the remote board by the drive.

### Host

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/differential-step-dir-en-extender/v31/differential-step-dir-en-extender-host-diagram.png" alt="Top view of the host board with numbered markers.">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:50.0%;top:11.2%" aria-label="1: Controller socket (J1)">1<span class="xb-pop"><b>Controller socket (J1)</b> — ENABLE, STEP and DIR.</span></a>
      <a class="xb-mk" href="#tour-2" style="left:50.0%;top:79.0%" aria-label="2: Link jack (J2)">2<span class="xb-pop"><b>Link jack (J2)</b> — to the remote board.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:33.8%;top:51.9%" aria-label="3: Inverter (U4)">3<span class="xb-pop"><b>Inverter (U4)</b> — a 74LVC2G04.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:30.6%;top:36.1%" aria-label="4: Drivers">4<span class="xb-pop"><b>Drivers</b> — U1 to U3.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Controller socket (J1)</b> — ENABLE, STEP and DIR.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Link jack (J2)</b> — to the remote board.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Inverter (U4)</b> — a <a href="/images/extensions/differential-step-dir-en-extender/datasheets/sn74lvc2g04.pdf">74LVC2G04</a>.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Drivers</b> — U1 to U3.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

### Remote

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/differential-step-dir-en-extender/v31/differential-step-dir-en-extender-remote-diagram.png" alt="Top view of the remote board with numbered markers.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-5" style="left:14.4%;top:48.5%" aria-label="5: Link jack (J1)">5<span class="xb-pop"><b>Link jack (J1)</b> — from the host.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-6" style="left:88.0%;top:43.7%" aria-label="6: Drive connector (J2)">6<span class="xb-pop"><b>Drive connector (J2)</b> — to the DM556E.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:36.8%;top:22.7%" aria-label="7: Receivers">7<span class="xb-pop"><b>Receivers</b> — U1 to U3.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:70.4%;top:22.7%" aria-label="8: Sink outputs">8<span class="xb-pop"><b>Sink outputs</b> — Q1 to Q3.</span></a>
      <a class="xb-mk" href="#tour-9" style="left:33.6%;top:88.8%" aria-label="9: Supply inlet (J3)">9<span class="xb-pop"><b>Supply inlet (J3)</b> — leave unpowered.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="5">
    <li id="tour-5"><span class="xb-n">5</span><div><b>Link jack (J1)</b> — from the host.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Drive connector (J2)</b> — to the DM556E.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Receivers</b> — U1 to U3.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Sink outputs</b> — Q1 to Q3.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Supply inlet (J3)</b> — leave unpowered.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

### Lights {#lights}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th>Lit means</th><th>Disable it</th></tr></thead>
  <tbody>
    <tr><td>Remote D80, red (back of the board)</td><td>Electronic fuse fault</td><td>Cut JP80</td></tr>
    <tr><td>Remote D85, amber (back of the board)</td><td>Overvoltage</td><td>Cut JP81</td></tr>
    <tr><td>Remote D88, red, blinking (back of the board)</td><td>Reverse polarity</td><td>Cut JP82</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Pinout {#pinout}

### Host J1

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">ENABLE</span></td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">STEP</span></td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">DIR</span></td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>6 to 9</td><td>Not connected</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

ENABLE is on contact 3 and STEP on contact 4.

### Link jacks

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1, 2</td><td>STEP pair</td></tr>
    <tr><td>3, 6</td><td>DIR pair</td></tr>
    <tr><td>4, 5</td><td>ENABLE pair</td></tr>
    <tr><td>7, 8</td><td><span class="xb-pill xb-p-gnd">Signal ground</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Remote J2: drive

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-5v">5 V</span> common anode</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-sig">PUL&minus;</span></td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">DIR&minus;</span></td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">ENA&minus;</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Both boards</b><span></span></div>
  <div class="xb-card"><b>A straight-through cable</b><span>All eight cores, only for this link.</span></div>
  <div class="xb-card"><b>A DM556E</b><span>Hardware 2.0.</span></div>
  <div class="xb-card"><b>A controller</b><span>With three free outputs.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

These steps wire the link with every supply off.

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Wire the controller</h3>
    <p>On the Smoothieboard V2 Prime, a same-numbered GF/J37 cable puts PB1 on ENABLE, PJ4 on STEP and PA4 on DIR.</p>
  </li>
  <li class="xb-step">
    <h3>Join the boards</h3>
    <p>Cable between host J2 and remote J1.</p>
  </li>
  <li class="xb-step">
    <h3>Wire the drive</h3>
    <p>J2 contacts 1 to 4 to the drive&rsquo;s PUL+/DIR+/ENA+ (common), PUL&minus;, DIR&minus; and ENA&minus;. Set the drive&rsquo;s signal switch to 5&nbsp;V.</p>
  </li>
  <li class="xb-step">
    <h3>Leave J3 unconnected</h3>
    <p>Check continuity of every wire.</p>
    <p class="xb-expect">No supply is connected to the remote inlet.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Assign an axis to the link</td><td>Motion axis, external driver</td><td><a href="#config-main">Setup</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Setup {#config-main}

These settings assign the three pins to the first axis:

```ini
[actuator]
alpha.driver = external
alpha.step_pin = PJ4
alpha.dir_pin = PA4
alpha.en_pin = PB1
```

The enable pin takes no <code>!</code>: a high request releases the drive&rsquo;s disable input. The DM556E needs pulses at least 2.5&nbsp;µs high and low, no more than 200&nbsp;kHz, 5&nbsp;µs from a direction change to a step, and 200&nbsp;ms from enable to motion. Smoothieware&rsquo;s step settings do not enforce the last two delays ([axis settings source](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/robot/Robot.cpp#L252-L366)).

## How it works {#how-it-works}

The host sends each command as a differential pair. The remote receives it and switches a transistor that pulls the matching drive input low against the 5&nbsp;V common. The link electronics can run faster than the drive, so the drive&rsquo;s limits apply.

Three protection lights on the back of the remote board show fuse fault, overvoltage and reverse polarity.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Cable fault suspected</td><td>Pairs 1/2, 3/6, 4/5 and ground 7/8, straight through.</td></tr>
    <tr><td>Wrong signal reaches the drive</td><td>Host contact order is ENABLE, STEP, DIR.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/differential-step-dir-en-extender/v31/differential-step-dir-en-extender-host-schematic.pdf">Schematic (PDF, host)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/differential-step-dir-en-extender/v31/differential-step-dir-en-extender-host-bom.csv">Parts list (CSV, host)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/differential-step-dir-en-extender/v31/differential-step-dir-en-extender-host-diagram.png">Board drawing (PNG, host)</a></td><td>The top view used on this page</td></tr>
    <tr><td><a href="/images/extensions/differential-step-dir-en-extender/v31/differential-step-dir-en-extender-remote-schematic.pdf">Schematic (PDF, remote)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/differential-step-dir-en-extender/v31/differential-step-dir-en-extender-remote-bom.csv">Parts list (CSV, remote)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/differential-step-dir-en-extender/v31/differential-step-dir-en-extender-remote-diagram.png">Board drawing (PNG, remote)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

### Host dimensions

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-sdh-mount-t">
  <title id="xb-sdh-mount-t">Mounting drawing of the sdh, component side: outline 60 by 40 millimetres with 4 mounting holes and 2 cable-tie holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="225.0" y="78.0" width="510.0" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M225.0 56H735.0"/><path d="M225.0 50V62"/><path d="M735.0 50V62"/><path d="M761.0 78.0V418.0"/><path d="M755.0 78.0h12"/><path d="M755.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">60</text>
  <text x="773.0" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">40</text>
  <circle cx="225.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="213.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M167.0 104.0h30" fill="none"/><path d="M201.0 104.0l-8 -4v8z"/><path d="M167.0 104.0v30" fill="none"/><path d="M167.0 138.0l-4 -8h8z"/></g>
  <text x="205.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="163.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="310.0" cy="163.0" r="13.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M292.4 163.0h35.2M310.0 145.4v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="296.4" y="196.6" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  10.00, 10.00</text>
  <circle cx="650.0" cy="163.0" r="13.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M632.4 163.0h35.2M650.0 145.4v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="663.6" y="196.6" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  50.00, 10.00</text>
  <circle cx="310.0" cy="333.0" r="13.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M292.4 333.0h35.2M310.0 315.4v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="296.4" y="309.4" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  10.00, 30.00</text>
  <circle cx="650.0" cy="333.0" r="13.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M632.4 333.0h35.2M650.0 315.4v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="663.6" y="309.4" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  50.00, 30.00</text>
  <circle cx="250.5" cy="103.5" r="10.6" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <circle cx="293.0" cy="103.5" r="10.6" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <text x="271.8" y="132.1" text-anchor="middle" font-size="12" fill="#a9b4c2">cable tie</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 60 × 40&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>10.00</td><td>10.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>50.00</td><td>10.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>10.00</td><td>30.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>50.00</td><td>30.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>–</td><td>3.00</td><td>3.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
    <tr><td>–</td><td>8.00</td><td>3.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Remote dimensions

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-sdr-mount-t">
  <title id="xb-sdr-mount-t">Mounting drawing of the sdr, component side: outline 60 by 60 millimetres with 4 mounting holes and 2 cable-tie holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="310.0" y="78.0" width="340.0" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M310.0 56H650.0"/><path d="M310.0 50V62"/><path d="M650.0 50V62"/><path d="M676.0 78.0V418.0"/><path d="M670.0 78.0h12"/><path d="M670.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">60</text>
  <text x="688.0" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">60</text>
  <circle cx="310.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="298.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M252.0 104.0h30" fill="none"/><path d="M286.0 104.0l-8 -4v8z"/><path d="M252.0 104.0v30" fill="none"/><path d="M252.0 138.0l-4 -8h8z"/></g>
  <text x="290.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="248.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="366.7" cy="134.7" r="9.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M353.6 134.7h26.1M366.7 121.6v26.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="357.6" y="163.7" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  10.00, 10.00</text>
  <circle cx="593.3" cy="134.7" r="9.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M580.3 134.7h26.1M593.3 121.6v26.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="602.4" y="163.7" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  50.00, 10.00</text>
  <circle cx="366.7" cy="361.3" r="9.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M353.6 361.3h26.1M366.7 348.3v26.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="357.6" y="342.3" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  10.00, 50.00</text>
  <circle cx="593.3" cy="361.3" r="9.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M580.3 361.3h26.1M593.3 348.3v26.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="602.4" y="342.3" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  50.00, 50.00</text>
  <circle cx="327.0" cy="95.0" r="7.1" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <circle cx="355.3" cy="95.0" r="7.1" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <text x="370.4" y="99.0" text-anchor="start" font-size="12" fill="#a9b4c2">cable tie</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 60 × 60&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>10.00</td><td>10.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>50.00</td><td>10.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>10.00</td><td>50.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>50.00</td><td>50.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>–</td><td>3.00</td><td>3.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
    <tr><td>–</td><td>8.00</td><td>3.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Drive values come from the user&rsquo;s manual of the [Leadshine DM556E](https://m.leadshine.com/product-detail/stepper-motor/stepper/DM556E.html), hardware 2.0.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Step frequency</td><td>DM556E input</td><td>—</td><td>—</td><td>200 kHz</td><td>Drive manual</td></tr>
    <tr><td>Pulse high and low</td><td>DM556E input</td><td>2.5 µs</td><td>—</td><td>—</td><td>Drive manual</td></tr>
    <tr><td>Direction setup</td><td>DM556E input</td><td>5 µs</td><td>—</td><td>—</td><td>Drive manual</td></tr>
    <tr><td>Enable lead time</td><td>DM556E input</td><td>200 ms</td><td>—</td><td>—</td><td>Drive manual</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: datasheets {#datasheets}

The first page of each important chip&rsquo;s datasheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/differential-step-dir-en-extender/datasheets/thvd1451.pdf"><img src="/images/extensions/differential-step-dir-en-extender/datasheets/thvd1451-page1.png" alt="First page of the THVD1451 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/differential-step-dir-en-extender/datasheets/thvd1451.pdf">THVD1451 3.3 V to 5 V RS-485 transceiver, full duplex</a> — Texas Instruments, 54 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/differential-step-dir-en-extender/datasheets/sn74lvc2g04.pdf"><img src="/images/extensions/differential-step-dir-en-extender/datasheets/sn74lvc2g04-page1.png" alt="First page of the 74LVC2G04 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/differential-step-dir-en-extender/datasheets/sn74lvc2g04.pdf">SN74LVC2G04 dual inverter</a> — Texas Instruments, 36 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/differential-step-dir-en-extender/datasheets/lm5164.pdf"><img src="/images/extensions/differential-step-dir-en-extender/datasheets/lm5164-page1.png" alt="First page of the LM5164 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/differential-step-dir-en-extender/datasheets/lm5164.pdf">LM5164 100 V synchronous buck converter</a> — Texas Instruments, 38 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/differential-step-dir-en-extender/datasheets/tps2660.pdf"><img src="/images/extensions/differential-step-dir-en-extender/datasheets/tps2660-page1.png" alt="First page of the TPS26600 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/differential-step-dir-en-extender/datasheets/tps2660.pdf">TPS2660x 60 V eFuse with reverse polarity protection</a> — Texas Instruments, 55 pages.</figcaption>
</figure>
{:/nomarkdown}


See all boards on the [extension boards](/extension-boards) page.
