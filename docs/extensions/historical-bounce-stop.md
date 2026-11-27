---
layout: default
title: "BounceStop hardware debounce"
description: "MAX6818 eight-switch debouncer board by Chris Cecil: pinout, jumpers and limits."
permalink: /extensions/historical-bounce-stop
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Inputs</p>
    <h1 id="historical-bounce-stop">BounceStop hardware debounce</h1>
    <p class="xb-lead">Cleans up eight noisy switch inputs in hardware with a MAX6818, with an optional change flag so it can work as an eight-input interrupt expander.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/historical-bounce-stop/historical-bounce-stop-diagram.png" alt="Top view of the BounceStop hardware debounce board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>8</b><span>debounced inputs</span></div>
  <div class="xb-stat"><b>MAX6818</b><span>debouncer</span></div>
  <div class="xb-stat"><b>3-pin</b><span>per input</span></div>
  <div class="xb-stat"><b>2</b><span>solder jumpers</span></div>
  <div class="xb-stat"><b>40 × 35 mm</b><span>board size</span></div>
  <div class="xb-stat"><b>5 V</b><span>input connector supply</span></div>
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
  <a href="#mounting">Mounting dimensions</a>
  <a href="#electrical">Electrical specifications</a>
</nav>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <b>Do not plug this board straight into a Smoothieboard.</b> Its author states that its Gadgeteer header pinouts are wrong: wire it through an adapter or single leads that you have checked against the tables below. This is a design by Chris Cecil, not a current Smoothieware board.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>Eight-channel switch debouncer</td></tr>
    <tr><td>Chip</td><td>MAX6818EAP+</td></tr>
    <tr><td>Inputs</td><td>J1–J8: signal, ground, 5 V</td></tr>
    <tr><td>Outputs</td><td>J9 (12 contacts) and J10 (10 contacts)</td></tr>
    <tr><td>Selectors</td><td>JP1: Out4 or _EN. JP2: Out2 or _CH</td></tr>
    <tr><td>Size</td><td>40 × 35 mm</td></tr>
    <tr><td>Meant for</td><td>Slow mechanical contacts, not fast pulse measurement</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/historical-bounce-stop/historical-bounce-stop-diagram.png" alt="Annotated top view of the BounceStop hardware debounce board">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:75.3%;top:26.0%" aria-label="1: Input connectors J1–J8">1<span class="xb-pop"><b>Input connectors J1–J8</b> — Three contacts each: signal, ground, 5 V. J1 is shown; the others fill the same two rows.</span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:41.0%;top:26.0%" aria-label="2: Input J5">2<span class="xb-pop"><b>Input J5</b> — Positions are marked by input number in the pinout tables.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:49.7%;top:72.8%" aria-label="3: MAX6818">3<span class="xb-pop"><b>MAX6818</b> — The eight-channel debouncer.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:73.9%;top:72.9%" aria-label="4: J10">4<span class="xb-pop"><b>J10</b> — Ten-contact output header.</span></a>
      <a class="xb-mk xb-pr" href="#tour-5" style="left:84.7%;top:93.4%" aria-label="5: J9">5<span class="xb-pop"><b>J9</b> — Twelve-contact output and control header.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:75.2%;top:50.7%" aria-label="6: Connector J2">6<span class="xb-pop"><b>Connector J2</b> — Connector J2. Connects to <code>In2</code>, <code>GND</code>, <code>5v</code>.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:60.4%;top:82.6%" aria-label="7: Capacitor C1">7<span class="xb-pop"><b>Capacitor C1</b> — Capacitor C1, marked <code>C_Small</code> in the board file. Connects to <code>5v</code>, <code>GND</code>.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:58.2%;top:26.0%" aria-label="8: Connector J3">8<span class="xb-pop"><b>Connector J3</b> — Connector J3. Connects to <code>In3</code>, <code>GND</code>, <code>5v</code>.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Input connectors J1–J8</b> — Three contacts each: signal, ground, 5 V. J1 is shown; the others fill the same two rows.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Input J5</b> — Positions are marked by input number in the pinout tables.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>MAX6818</b> — The eight-channel debouncer.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>J10</b> — Ten-contact output header.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>J9</b> — Twelve-contact output and control header.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Connector J2</b> — Connector J2. Connects to <code>In2</code>, <code>GND</code>, <code>5v</code>.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Capacitor C1</b> — Capacitor C1, marked <code>C_Small</code> in the board file. Connects to <code>5v</code>, <code>GND</code>.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Connector J3</b> — Connector J3. Connects to <code>In3</code>, <code>GND</code>, <code>5v</code>.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

<span id="connect-and-try-it"></span>

### Switch inputs

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>input signal</td></tr>
    <tr><td>2</td><td>ground</td></tr>
    <tr><td>3</td><td>5 V</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

J2 to J8 follow J1: contact 1 is that input (In2 to In8), contact 2 ground, contact 3 5 V.

### Output header J9

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J9 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>5v</code></td></tr>
    <tr><td>2</td><td><code>_EN</code></td></tr>
    <tr><td>3</td><td><code>Out1</code></td></tr>
    <tr><td>4</td><td><code>Out2</code></td></tr>
    <tr><td>5</td><td><code>Out3</code></td></tr>
    <tr><td>6</td><td><code>Out4</code></td></tr>
    <tr><td>7</td><td><code>Out5</code></td></tr>
    <tr><td>8</td><td><code>Out6</code></td></tr>
    <tr><td>9</td><td><code>Out7</code></td></tr>
    <tr><td>10</td><td><code>Out8</code></td></tr>
    <tr><td>11</td><td><code>_CH</code></td></tr>
    <tr><td>12</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Output header J10

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J10 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>3.3v</code></td></tr>
    <tr><td>2</td><td><code>5v</code></td></tr>
    <tr><td>3</td><td><code>Out1</code></td></tr>
    <tr><td>4</td><td><code>OutJ2</code></td></tr>
    <tr><td>5</td><td><code>Out3</code></td></tr>
    <tr><td>6</td><td><code>OutJ4</code></td></tr>
    <tr><td>7</td><td><code>Out5</code></td></tr>
    <tr><td>8</td><td><code>Out6</code></td></tr>
    <tr><td>9</td><td><code>Out7</code></td></tr>
    <tr><td>10</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Jumper JP1 (underside)

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>JP1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>Out4</code></td></tr>
    <tr><td>2</td><td><code>OutJ4</code></td></tr>
    <tr><td>3</td><td><code>_EN</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Jumper JP2 (underside)

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>JP2 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>Out2</code></td></tr>
    <tr><td>2</td><td><code>OutJ2</code></td></tr>
    <tr><td>3</td><td><code>_CH</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The schematic draws J9 as a 2 × 6 connector while the board footprint is a single row of 12: follow the board.

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>BounceStop board</b><span>Built from the design files</span></div>
  <div class="xb-card"><b>Switches</b><span>Up to eight mechanical contacts</span></div>
  <div class="xb-card"><b>Adapter or single leads</b><span>To replace the wrong header pinout</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

The minimum wiring first, then the order to do it in. Facts about each contact are in the [pinout](#pinout).

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 472" role="img" aria-labelledby="xb-historical-bounce-stop-wire"><title id="xb-historical-bounce-stop-wire">Wiring: J1 contact 1 to input signal; J1 contact 2 to ground.</title><image href="/images/extensions/historical-bounce-stop/historical-bounce-stop-diagram.png" x="370" y="14" width="259" height="230"/><circle cx="559" cy="80" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="540" y="99" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="559" y="113" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J1</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J1 on this board</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Switch input</text><rect x="700" y="304" width="270" height="150" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><rect x="820" y="353" width="120" height="52" rx="8" fill="#262626" stroke="#a1a1a1" stroke-width="1.5"/><circle cx="845" cy="379" r="5" fill="#c9c9c9" stroke="#0d0f12" stroke-width="1.5"/><circle cx="915" cy="379" r="5" fill="#c9c9c9" stroke="#0d0f12" stroke-width="1.5"/><path d="M834 349.0L920 327.0" fill="none" stroke="#c9c9c9" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/><circle cx="922" cy="325" r="9" fill="#939393" stroke="#0d0f12" stroke-width="1.5"/><rect x="30" y="304" width="200" height="150" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 364.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" fill="#eaeaea">  1</text><text x="712" y="369" text-anchor="start" font-size="13" fill="#eaeaea">input signal</text><rect x="340" y="353" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1: input signal</text><path d="M230 394.0H700" fill="none" stroke="#939393" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="394" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" fill="#eaeaea">  2</text><text x="712" y="399" text-anchor="start" font-size="13" fill="#eaeaea">ground</text><rect x="340" y="383" width="220" height="22" rx="11" fill="#939393" stroke="#939393" stroke-width="1.5"/><text x="450" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#111">2: ground</text></svg>
  </div>
  <figcaption>Wiring drawn from the original design files. Make connections with all power off. Equipment is drawn as a typical unit, not a specific model.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Check the contacts</h3>
    <p>With all power off, find contact 1 on each connector and check every wire against the <a href="#pinout">pinout</a>.</p>
  </li>
  <li class="xb-step">
    <h3>Set up and check</h3>
    <p>The header pinout is wrong for a direct ribbon: use an adapter or single leads.</p>
  </li>
  <li class="xb-step">
    <h3>Check with a meter</h3>
    <p>Check continuity and the rail voltages with a meter before connecting anything else.</p>
  </li>
  <li class="xb-step">
    <h3>Configure and power up</h3>
    <p>Apply the settings under <a href="#configuration">Configuration</a>, then power up.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

<span id="smoothieware-use"></span>

For a bench test, one debounced output wired to a verified input can be read as an endstop that does not limit motion. The firmware has no driver for the change and enable sequence of the MAX6818.

```ini
[endstops]
bounce_input1_diagnostic.enable = true
bounce_input1_diagnostic.pin = PB1-
bounce_input1_diagnostic.axis = X
bounce_input1_diagnostic.homing_direction = none
bounce_input1_diagnostic.limit_enable = false
```

See [endstops](/endstops). Syntax checked against firmware commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`.

## How it works {#how-it-works}

Each switch connects between a field input and ground. The MAX6818 ignores contact bounce and presents a stable level on the matching output. `_EN` enables the outputs and `_CH` flags that an input changed, until the outputs are read. The chip details are in the [MAX6816–MAX6818 datasheet](https://www.analog.com/en/products/max6816.html).

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 142" role="img" aria-labelledby="xb-historical-bounce-stop-path"><title id="xb-historical-bounce-stop-path">Switches, between field input and ground then MAX6818, ignores contact bounce then Stable outputs, enabled by _EN then _CH, flags a change until outputs are read.</title><rect x="20" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="127" y="57" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Switches</text><text x="127" y="77" text-anchor="middle" font-size="13" fill="#b3b3b3">between field input and</text><text x="127" y="93" text-anchor="middle" font-size="13" fill="#b3b3b3">ground</text><rect x="268" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="376" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">MAX6818</text><text x="376" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3">ignores contact bounce</text><path d="M238.5 70H259.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M258 63L266 70L258 77Z" fill="#5fb3ff"/><rect x="517" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="624" y="56" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Stable outputs, enabled</text><text x="624" y="74" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">by _EN</text><text x="624" y="94" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M487.0 70H508.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M506 63L515 70L506 77Z" fill="#5fb3ff"/><rect x="766" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="873" y="57" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">_CH</text><text x="873" y="77" text-anchor="middle" font-size="13" fill="#b3b3b3">flags a change until outputs</text><text x="873" y="93" text-anchor="middle" font-size="13" fill="#b3b3b3">are read</text><path d="M735.5 70H756.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M754 63L764 70L754 77Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Nothing responds</td><td>With power off, check continuity along each lead and board path against the pinout tables. Confirm which end of the connector is contact 1.</td></tr>
    <tr><td>An output on J10 does not follow its input</td><td>JP1 and JP2 decide whether J10 contacts 4 and 6 carry outputs or the `_CH` and `_EN` control lines. Inspect both jumpers.</td></tr>
    <tr><td>Outputs never change</td><td>`_EN` must be in its enabling state; see the datasheet.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="https://github.com/Ccecil/BounceStop/tree/9e938a20531446382ea9933614efd57284226b78">original source</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/BounceStop/blob/9e938a20531446382ea9933614efd57284226b78/BounceStop0.2/Bouncestop_x1.kicad_pcb">original circuit</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/BounceStop">Ccecil upstream project</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/BounceStop/blob/9e938a20531446382ea9933614efd57284226b78/BounceStop0.2/BounceStop_x1.kicad_sch">Original BounceStop_x1.kicad_sch</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/BounceStop/blob/9e938a20531446382ea9933614efd57284226b78/README.md">Original README.md</a></td><td>Design source</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

Outline and holes from the original board file. Millimetres, seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb--bounce-stop-mount-t">
  <title id="xb--bounce-stop-mount-t">Mounting drawing of the historical-bounce-stop, component side: outline 40 by 35 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="285.7" y="78.0" width="388.6" height="340.0" rx="0.0" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M285.7 56H674.3"/><path d="M285.7 50V62"/><path d="M674.3 50V62"/><path d="M700.3 78.0V418.0"/><path d="M694.3 78.0h12"/><path d="M694.3 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">40</text>
  <text x="712.3" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">35</text>
  <circle cx="285.7" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="273.7" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M227.7 104.0h30" fill="none"/><path d="M261.7 104.0l-8 -4v8z"/><path d="M227.7 104.0v30" fill="none"/><path d="M227.7 138.0l-4 -8h8z"/></g>
  <text x="265.7" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="223.7" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="309.5" cy="231.0" r="12.1" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M293.4 231.0h32.3M309.5 214.9v32.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="297.4" y="263.1" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  2.45, 15.75</text>
  <circle cx="649.5" cy="231.0" r="12.1" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M633.4 231.0h32.3M649.5 214.9v32.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="661.7" y="263.1" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  37.45, 15.75</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 40 × 35&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>2.45</td><td>15.75</td><td>2.5&nbsp;mm, not plated</td><td>Mounting</td></tr>
    <tr><td>2</td><td>37.45</td><td>15.75</td><td>2.5&nbsp;mm, not plated</td><td>Mounting</td></tr>
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

This board comes from the [original design files](https://github.com/Ccecil/BounceStop/tree/9e938a20531446382ea9933614efd57284226b78). It was drawn for an earlier controller generation than Smoothieboard V2 Prime; match connections contact by contact.
See all boards on the [extension boards](/extension-boards) page.
