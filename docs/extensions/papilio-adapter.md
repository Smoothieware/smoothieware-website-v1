---
layout: default
title: "Papilio adapter"
description: "A passive adapter from a Gadgeteer socket to the eight-signal Papilio FPGA wing header, with 470 ohm series resistors."
permalink: /extensions/papilio-adapter
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Host adapters</p>
    <h1 id="papilio-adapter">Papilio adapter</h1>
    <p class="xb-lead">Connect a 3.3&nbsp;V Papilio wing position to seven controller pins. Each signal has a 470&nbsp;&Omega; series resistor; power links stay open unless you choose otherwise.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/papilio-adapter/v17/papilio-adapter-diagram.webp" alt="Top view of the Papilio adapter.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>7 signals</b><span>Wing B0 to B6</span></div>
  <div class="xb-stat"><b>470 Ω</b><span>series each</span></div>
  <div class="xb-stat"><b>3.3 V</b><span>logic</span></div>
  <div class="xb-stat"><b>2 links</b><span>power, open</span></div>
  <div class="xb-stat"><b>Passive</b><span>no chips</span></div>
  <div class="xb-stat"><b>26.1 × 26.8</b><span>millimetres</span></div>
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
  3.3&nbsp;V logic only. The adapter does not program the FPGA and includes no FPGA design. Leave JP1 and JP2 open unless you are certain only one supply drives each rail. The row of test pads marked &ldquo;observe only&rdquo; is for measuring signals; do not inject signals there.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>Controller pins to a Papilio wing</td></tr>
    <tr><td>Host</td><td>J1 contacts 3 to 9</td></tr>
    <tr><td>Wing</td><td>J2 signals (mounted underneath), J3 power</td></tr>
    <tr><td>Series resistance</td><td>470&nbsp;&Omega; 1% on B0 to B6</td></tr>
    <tr><td>Eighth signal</td><td>Wing B7 reaches a test point only</td></tr>
    <tr><td>Power links</td><td>JP1 3.3&nbsp;V and JP2 5&nbsp;V, open as delivered</td></tr>
    <tr><td>Size</td><td>26.1 &times; 26.8&nbsp;mm</td></tr>
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
      <img src="/images/extensions/papilio-adapter/v17/papilio-adapter-diagram.webp" alt="Top view of the Papilio adapter with numbered markers explained in the list below.">
      <a class="xb-mk" href="#tour-1" style="left:49.2%;top:82.9%" aria-label="1: Controller socket (J1)">1<span class="xb-pop"><b>Controller socket (J1)</b> — seven signals, supplies and ground.</span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:42.6%;top:10.0%" aria-label="2: 3.3 V link (JP1)">2<span class="xb-pop"><b>3.3 V link (JP1)</b> — joins host and wing 3.3&nbsp;V; open.</span></a>
      <a class="xb-mk xb-pb" href="#tour-3" style="left:42.6%;top:19.0%" aria-label="3: 5 V link (JP2)">3<span class="xb-pop"><b>5 V link (JP2)</b> — joins host and wing 5&nbsp;V; open.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-4" style="left:81.2%;top:40.2%" aria-label="4: Series resistor R1">4<span class="xb-pop"><b>Series resistor R1</b> — contact 3 to B0.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:72.2%;top:40.2%" aria-label="5: Series resistor R2">5<span class="xb-pop"><b>Series resistor R2</b> — contact 4 to B1.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:63.1%;top:40.2%" aria-label="6: Series resistor R3">6<span class="xb-pop"><b>Series resistor R3</b> — contact 5 to B2.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:54.1%;top:40.2%" aria-label="7: Series resistor R4">7<span class="xb-pop"><b>Series resistor R4</b> — contact 6 to B3.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:45.1%;top:40.2%" aria-label="8: Series resistor R5">8<span class="xb-pop"><b>Series resistor R5</b> — contact 7 to B4.</span></a>
      <a class="xb-mk xb-pb" href="#tour-9" style="left:27.0%;top:40.2%" aria-label="9: Series resistor R7">9<span class="xb-pop"><b>Series resistor R7</b> — contact 9 to B6.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Controller socket (J1)</b> — seven signals, supplies and ground.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>3.3 V link (JP1)</b> — joins host and wing 3.3&nbsp;V; open.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>5 V link (JP2)</b> — joins host and wing 5&nbsp;V; open.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Series resistor R1</b> — contact 3 to B0.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Series resistor R2</b> — contact 4 to B1.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Series resistor R3</b> — contact 5 to B2.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Series resistor R4</b> — contact 6 to B3.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Series resistor R5</b> — contact 7 to B4.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Series resistor R7</b> — contact 9 to B6.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J1 contact</th><th>Wing contact</th></tr></thead>
  <tbody>
    <tr><td>3</td><td>J2.1 (B0)</td></tr>
    <tr><td>4</td><td>J2.2 (B1)</td></tr>
    <tr><td>5</td><td>J2.3 (B2)</td></tr>
    <tr><td>6</td><td>J2.4 (B3)</td></tr>
    <tr><td>7</td><td>J2.5 (B4)</td></tr>
    <tr><td>8</td><td>J2.6 (B5)</td></tr>
    <tr><td>9</td><td>J2.7 (B6)</td></tr>
    <tr><td>1</td><td>Host 3.3&nbsp;V (to J3.3 only through JP1)</td></tr>
    <tr><td>2</td><td>Host 5&nbsp;V (to J3.4 only through JP2)</td></tr>
    <tr><td>10</td><td>Ground, J3.1</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>Leads from the controller.</span></div>
  <div class="xb-card"><b>A Papilio wing position</b><span>Or a switch, as in the example.</span></div>
  <div class="xb-card"><b>One 2.2 kΩ resistor and a push button</b><span>For the example.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

This example reads a push button through the Wing B0 path on Smoothieboard V2 Prime, with no FPGA attached.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 666" role="img" aria-labelledby="xb-papilio-adapter-wire"><title id="xb-papilio-adapter-wire">Wiring: controller contact 3 to J1 contact 3; controller contact 10 to J1 contact 10; J2 contact 1 to Wing B0: button and 2.2 kΩ to J37.1.</title><image href="/images/extensions/papilio-adapter/v17/papilio-adapter-diagram.webp" x="388" y="14" width="224" height="230"/><circle cx="498" cy="205" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="479" y="224" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="498" y="238" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J1</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Prime header J37</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J1 on this board</text><rect x="30" y="304" width="200" height="150" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="130" y="375" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Smoothieboard</text><text x="130" y="395" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">V2 Prime</text><rect x="770" y="304" width="200" height="150" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 364.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">3</text><text x="784" y="369" text-anchor="start" font-size="14" fill="#eaeaea">3  </text><rect x="400" y="353" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">3 to 3</text><path d="M230 394.0H770" fill="none" stroke="#939393" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="394" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">10</text><text x="784" y="399" text-anchor="start" font-size="14" fill="#eaeaea">10  GND</text><rect x="400" y="383" width="200" height="22" rx="11" fill="#939393" stroke="#939393" stroke-width="1.5"/><text x="500" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#111">10 to 10: GND</text><text x="130" y="486" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J2 on this board</text><text x="870" y="486" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Button with pull-up</text><rect x="700" y="498" width="270" height="150" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><rect x="828" y="521" width="104" height="104" rx="12" fill="#303030" stroke="#a1a1a1" stroke-width="1.5"/><circle cx="880" cy="573" r="36" fill="#e23b32" stroke="#7d120d" stroke-width="5"/><rect x="30" y="498" width="200" height="150" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 573.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="573" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="573" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="578" text-anchor="end" font-size="14" fill="#eaeaea">  1</text><text x="712" y="578" text-anchor="start" font-size="13" fill="#eaeaea">Wing B0: button…</text><rect x="340" y="562" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="578" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1: Wing B0: button and 2.2…</text></svg>
  </div>
  <figcaption>Wire the other button leg to J3 contact 1 (ground). Keep JP1 and JP2 open. Equipment is drawn as a typical unit, not a specific model.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Wire with the power off</h3>
    <p>Prime J37.3 (PB1) to J1.3, and J37.10 to J1.10. Keep JP1 and JP2 open.</p>
  </li>
  <li class="xb-step">
    <h3>Wire the pull-up</h3>
    <p>J37.1 through 2.2&nbsp;k&Omega; to J2.1 (Wing B0).</p>
  </li>
  <li class="xb-step">
    <h3>Wire the button</h3>
    <p>From J2.1 to J3.1 (ground) through a normally-open button.</p>
  </li>
  <li class="xb-step">
    <h3>Configure</h3>
    <p>Add the settings below and power up.</p>
  </li>
  <li class="xb-step">
    <h3>Read it</h3>
    <p>Send <code>switch papilio_status</code>.</p>
    <p class="xb-expect">1 when released, 0 while held.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Read a button through the adapter</td><td><a href="/switch">Switch</a>, input</td><td><a href="#config-main">Setup</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Setup {#config-main}

```ini
[switch]
papilio_status.enable = true
papilio_status.input_pin = PB1-
papilio_status.input_pin_behavior = momentary
```

The <code>-</code> turns off the internal pull-up; the external resistor does that job. Merge the lines into an existing <code>[switch]</code> section.

## How it works {#how-it-works}

The adapter is copper and resistors: each controller contact reaches its wing signal through 470&nbsp;&Omega;. An FPGA application needs its own FPGA design and matching host software.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 142" role="img" aria-labelledby="xb-papilio-adapter-path"><title id="xb-papilio-adapter-path">Controller contact then 470 Ω resistor then Wing signal on the FPGA board.</title><rect x="46" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="186" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Controller contact</text><text x="186" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><rect x="360" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">470 Ω resistor</text><text x="500" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M330.0 70H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 63L358 70L349 77Z" fill="#5fb3ff"/><rect x="674" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="814" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Wing signal on the FPGA board</text><text x="814" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M644.0 70H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 63L672 70L663 77Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Always 0 or always 1</td><td>Check the pull-up and both button leads.</td></tr>
    <tr><td>FPGA does not respond</td><td>The FPGA design, I/O voltage and pin direction are yours to set.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/papilio-adapter/v17/papilio-adapter-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/papilio-adapter/v17/papilio-adapter-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/papilio-adapter/v17/papilio-adapter-diagram.webp">Board drawing (WebP)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-pa-mount-t">
  <title id="xb-pa-mount-t">Mounting drawing of the pa, component side: outline 26.1 by 26.8 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="314.4" y="78.0" width="331.1" height="340.0" rx="10.1" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M314.4 56H645.6"/><path d="M314.4 50V62"/><path d="M645.6 50V62"/><path d="M671.6 78.0V418.0"/><path d="M665.6 78.0h12"/><path d="M665.6 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">26.1</text>
  <text x="683.6" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">26.8</text>
  <circle cx="314.4" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="302.4" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M256.4 104.0h30" fill="none"/><path d="M290.4 104.0l-8 -4v8z"/><path d="M256.4 104.0v30" fill="none"/><path d="M256.4 138.0l-4 -8h8z"/></g>
  <text x="294.4" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="252.4" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="353.1" cy="368.5" r="20.3" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M328.8 368.5h48.6M353.1 344.2v48.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="332.8" y="338.2" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  3.05, 22.90</text>
  <circle cx="606.9" cy="368.5" r="20.3" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M582.6 368.5h48.6M606.9 344.2v48.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="627.2" y="338.2" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  23.05, 22.90</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 26.1 × 26.8&nbsp;mm, corners rounded to a 0.8&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>3.05</td><td>22.90</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>23.05</td><td>22.90</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Values from the parts list.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Logic</td><td>All signals</td><td>—</td><td>3.3 V</td><td>—</td><td>Board silk: 3.3 V only</td></tr>
    <tr><td>Series resistance</td><td>B0 to B6</td><td>—</td><td>470 Ω</td><td>—</td><td>1%</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}


See all boards on the [extension boards](/extension-boards) page.
