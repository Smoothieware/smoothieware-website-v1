---
layout: default
title: "Single-channel small MOSFET basic output"
description: "A compact, externally powered DC load switch with a three-pin input and a Gadgeteer type-Y chain connection."
permalink: /extensions/single-channel-small-mosfet-basic-output
redirect_from:
  - /extensions/single-channel-budget-mosfet-output
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Power outputs</p>
    <h1 id="single-channel-small-mosfet-basic-output">Single-channel small MOSFET basic output</h1>
    <p class="xb-lead">Switch one small 12&nbsp;V load, such as a fan or a solenoid, from a 3.3&nbsp;V signal on the three-pin header or the ribbon socket. One controller socket can drive seven boards in a chain.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/single-channel-small-mosfet-basic-output/v02/single-channel-small-mosfet-basic-output-diagram.png" alt="Top view of the Single-channel small MOSFET basic output.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>1</b><span>low-side output</span></div>
  <div class="xb-stat"><b>1 A</b><span>continuous load</span></div>
  <div class="xb-stat"><b>12 V</b><span>external supply</span></div>
  <div class="xb-stat"><b>3.3 V</b><span>command</span></div>
  <div class="xb-stat"><b>7</b><span>boards per socket</span></div>
  <div class="xb-stat"><b>41 × 32</b><span>millimetres</span></div>
</div>

<nav class="xb-nav" aria-label="On this page">
  <a href="#specs">Tech specs</a>
  <a href="#tour">Board tour</a>
  <a href="#pinout">Pinout</a>
  <a href="#what-you-need">What you need</a>
  <a href="#get-started">Get started</a>
  <a href="#configuration">Configuration</a>
  <a href="#how-it-works">How it works</a>
  <a href="#chaining">Chaining</a>
  <a href="#troubleshooting">Troubleshooting</a>
  <a href="#downloads">Downloads</a>
  <a href="#mounting">Mounting</a>
  <a href="#electrical">Electrical</a>
</nav>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Use a current-limited or fused 12&nbsp;V DC supply and observe polarity: the board has no reverse-supply protection. LOAD+ stays live while the supply is on. Ground is shared with the controller.
</sl-alert>

{% include _includes/mosfet-board-comparison.html %}

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Output</td><td>One low-side DC switch with a flyback diode (Q1 AO3400A, D1 B560C)</td></tr>
    <tr><td>Control</td><td>Active-high 3.3&nbsp;V from the ribbon or the three-pin header, held off when open</td></tr>
    <tr><td>Supply</td><td>12&nbsp;V nominal, external, current limited</td></tr>
    <tr><td>Continuous load</td><td>1&nbsp;A</td></tr>
    <tr><td>Lights</td><td>POWER and ON, each with a disable link</td></tr>
    <tr><td>Chain</td><td>Y IN and Y CHAIN, with six forwarding links</td></tr>
    <tr><td>Size</td><td>41 &times; 32&nbsp;mm, M3 mounting holes and load-cable tie holes</td></tr>
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
      <img src="/images/extensions/single-channel-small-mosfet-basic-output/v02/single-channel-small-mosfet-basic-output-diagram.png" alt="Top view of the Single-channel small MOSFET basic output with numbered markers explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:10.2%;top:23.5%" aria-label="1: Three-pin input (3-PIN IN)">1<span class="xb-pop"><b>Three-pin input (3-PIN IN)</b> — 1 ground, 2 unused, 3 command.</span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:37.2%;top:14.6%" aria-label="2: Controller socket (Y IN)">2<span class="xb-pop"><b>Controller socket (Y IN)</b> — the ribbon cable.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-3" style="left:76.7%;top:14.6%" aria-label="3: Chain socket (CHAIN)">3<span class="xb-pop"><b>Chain socket (CHAIN)</b> — the remaining commands for the next board.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-4" style="left:10.9%;top:49.9%" aria-label="4: Input selector (SELECT)">4<span class="xb-pop"><b>Input selector (SELECT)</b> — ribbon (as delivered) or three-pin input.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:33.7%;top:27.9%" aria-label="5: Forwarding links">5<span class="xb-pop"><b>Forwarding links</b> — six links that move each remaining command one position along.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:37.2%;top:76.4%" aria-label="6: Supply input">6<span class="xb-pop"><b>Supply input</b> — EXT+ and GND.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:74.4%;top:76.4%" aria-label="7: Load output">7<span class="xb-pop"><b>Load output</b> — LOAD+ and LOAD&minus;.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:73.0%;top:60.2%" aria-label="8: Output transistor (Q1)">8<span class="xb-pop"><b>Output transistor (Q1)</b> — switches LOAD&minus; to ground.</span></a>
      <a class="xb-mk" href="#tour-9" style="left:56.7%;top:55.8%" aria-label="9: Flyback diode (D1)">9<span class="xb-pop"><b>Flyback diode (D1)</b> — takes the current of an inductive load at turn-off.</span></a>
      <a class="xb-mk" href="#tour-10" style="left:26.7%;top:61.7%" aria-label="10: Power light">10<span class="xb-pop"><b>Power light</b> — green.</span></a>
      <a class="xb-mk xb-pr" href="#tour-11" style="left:89.5%;top:61.7%" aria-label="11: On light">11<span class="xb-pop"><b>On light</b> — amber.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Three-pin input (3-PIN IN)</b> — 1 ground, 2 unused, 3 command.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Controller socket (Y IN)</b> — the ribbon cable.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Chain socket (CHAIN)</b> — the remaining commands for the next board.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Input selector (SELECT)</b> — ribbon (as delivered) or three-pin input.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Forwarding links</b> — six links that move each remaining command one position along.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Supply input</b> — EXT+ and GND.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Load output</b> — LOAD+ and LOAD&minus;.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Output transistor (Q1)</b> — switches LOAD&minus; to ground.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Flyback diode (D1)</b> — takes the current of an inductive load at turn-off.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Power light</b> — green.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>On light</b> — amber.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

### Lights {#lights}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th>Lit means</th><th>Disable it</th></tr></thead>
  <tbody>
    <tr><td>POWER (D2), green</td><td>External supply present</td><td>SJ7</td></tr>
    <tr><td>ON (D3), amber</td><td>Load return pulled low (can light with no load plugged in)</td><td>SJ8</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Pinout {#pinout}

### Controller socket Y IN and chain socket

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Y IN pin</th><th>Function</th><th>CHAIN pin</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Controller 3.3&nbsp;V, passed through</td><td>1</td></tr>
    <tr><td>2</td><td>Controller 5&nbsp;V, passed through</td><td>2</td></tr>
    <tr><td>3</td><td>This board&rsquo;s command</td><td>—</td></tr>
    <tr><td>4</td><td>Next board&rsquo;s command</td><td>3</td></tr>
    <tr><td>5 to 9</td><td>Further commands</td><td>4 to 8</td></tr>
    <tr><td>10</td><td>Ground, shared with the supply</td><td>10</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

CHAIN pin 9 is not connected.

### Three-pin input, supply and load

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Connector</th><th>Pins</th></tr></thead>
  <tbody>
    <tr><td>3-PIN IN</td><td>1 ground, 2 not connected, 3 command (active high)</td></tr>
    <tr><td>Supply</td><td>EXT+ and GND</td></tr>
    <tr><td>Load</td><td>LOAD+ (same as EXT+) and LOAD&minus; (switched)</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>Built from the design files in Downloads</span></div>
  <div class="xb-card"><b>A 12 V DC supply</b><span>Current limited or fused for the load.</span></div>
  <div class="xb-card"><b>A control cable</b><span>A ten-wire ribbon to a Y-type socket, or two wires to the three-pin header.</span></div>
  <div class="xb-card"><b>The load</b><span>Up to 1&nbsp;A at 12&nbsp;V.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

This switches a load from pin PB1 of Smoothieboard V2 Prime.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 472" role="img" aria-labelledby="xb-single-channel-small-mosfet-basic-output-wire"><title id="xb-single-channel-small-mosfet-basic-output-wire">Wiring: controller contact ground to 3-PIN_IN contact 1; controller contact command to 3-PIN_IN contact 3.</title><image href="/images/extensions/single-channel-small-mosfet-basic-output/v02/single-channel-small-mosfet-basic-output-diagram.png" x="355" y="14" width="291" height="230"/><circle cx="384" cy="68" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="344" y="87" width="80" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="384" y="101" text-anchor="middle" font-size="13" font-weight="700" fill="#111">3-PIN IN</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Three-pin harness</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">3-PIN IN on this board</text><image href="/images/extensions/single-channel-small-mosfet-basic-output/v02/single-channel-small-mosfet-basic-output-diagram.png" x="355" y="14" width="291" height="230"/><circle cx="384" cy="68" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="344" y="87" width="80" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="384" y="101" text-anchor="middle" font-size="13" font-weight="700" fill="#111">3-PIN IN</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Three-pin harness</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">3-PIN IN on this board</text><rect x="30" y="304" width="200" height="150" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><rect x="770" y="304" width="200" height="150" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 364.0H770" fill="none" stroke="#939393" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="364" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">ground</text><text x="784" y="369" text-anchor="start" font-size="14" fill="#eaeaea">1  ground</text><rect x="400" y="353" width="200" height="22" rx="11" fill="#939393" stroke="#939393" stroke-width="1.5"/><text x="500" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#111">ground to 1: ground</text><path d="M230 394.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">command</text><text x="784" y="399" text-anchor="start" font-size="14" fill="#eaeaea">3  command</text><rect x="400" y="383" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">command to 3: command</text></svg>
  </div>
  <figcaption>For the three-pin input, move the SELECT bridge to pads 2 and 3 first. Supply goes to EXT+ and GND, load to LOAD+ and LOAD−.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Power off and choose the input</h3>
    <p>The ribbon input is selected as delivered. For the three-pin input, cut the bridge between pads 1 and 2 of SELECT and bridge pads 2 and 3. Never bridge all three.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the command</h3>
    <p>Ribbon from the controller&rsquo;s G_F (J37) socket to Y IN, or controller ground to pin 1 and the command to pin 3.</p>
  </li>
  <li class="xb-step">
    <h3>Connect supply and load</h3>
    <p>Supply to EXT+ and GND, load to LOAD+ and LOAD&minus;.</p>
  </li>
  <li class="xb-step">
    <h3>Configure</h3>
    <p>Add the settings below.</p>
  </li>
  <li class="xb-step">
    <h3>Test</h3>
    <p>Power up and send <code>M64</code>, then <code>M65</code>.</p>
    <p class="xb-expect">The load and the ON light switch on, then off.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>To switch the load from G-code</td><td>Switch, output</td><td><a href="#config-load">1</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### 1. Load output (switch module) {#config-load}

```ini
[switch]
mosfet.enable = true
mosfet.output_pin = PB1
mosfet.output_type = digital
mosfet.input_on_command = M64
mosfet.input_off_command = M65
mosfet.startup_state = false
mosfet.halt_set_to = false
```

Use the controller pin that reaches the board&rsquo;s selected input. The board has one output and one job, so there is one example; in a chain, repeat it with another name, pin and command pair ([switch source](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/switch/Switch.cpp)).

## How it works {#how-it-works}

A high command turns on the transistor, which connects LOAD&minus; to ground; LOAD+ is wired straight to the supply. A resistor holds the transistor off when nothing drives the input. The diode across the load absorbs the voltage spike of motors, fans and solenoids at turn-off. The controller rails only pass to the chain socket.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 270" role="img" aria-labelledby="xb-single-channel-small-mosfet-basic-output-path"><title id="xb-single-channel-small-mosfet-basic-output-path">High command then Transistor, held off when undriven then LOAD− to ground. Supply then LOAD+ wired straight through then Load, with spike diode across it.</title><rect x="46" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="186" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">High command</text><text x="186" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><rect x="360" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Transistor</text><text x="500" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3">held off when undriven</text><path d="M330.0 70H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 63L358 70L349 77Z" fill="#5fb3ff"/><rect x="674" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="814" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">LOAD− to ground</text><text x="814" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M644.0 70H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 63L672 70L663 77Z" fill="#5fb3ff"/><rect x="46" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="186" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Supply</text><text x="186" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><rect x="360" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="500" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">LOAD+ wired straight through</text><text x="500" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M330.0 198H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 191L358 198L349 205Z" fill="#5fb3ff"/><rect x="674" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="814" y="184" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Load, with spike diode across</text><text x="814" y="202" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">it</text><text x="814" y="222" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M644.0 198H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 191L672 198L663 205Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board, one path per row.</figcaption>
</figure>
{:/nomarkdown}


## Chaining {#chaining}

{::nomarkdown}
{% include _includes/extension-chain-figure.html id="xb-mb-chain" board="Small MOSFET basic" in_label="Y IN" chain_label="CHAIN" lane1="Pin 3" lane2="Pin 4" lane3="Pin 5" s1="Local command" s2="Next command" s3="Third command" caption="Each board uses pin 3 and moves the remaining commands down one position." %}
{:/nomarkdown}

The seventh board in a chain uses the signal that started on host pin 9. Removing a board shifts the channel of every board after it. Power down before changing the chain.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Load stays off</td><td>Supply polarity and voltage, the SELECT link, the pin in the configuration.</td></tr>
    <tr><td>ON light on but load idle</td><td>Load wiring; the light does not detect the load.</td></tr>
    <tr><td>Wrong load switches in a chain</td><td>Board order and the forwarding links.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/single-channel-small-mosfet-basic-output/v02/single-channel-small-mosfet-basic-output-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/single-channel-small-mosfet-basic-output/v02/single-channel-small-mosfet-basic-output-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/single-channel-small-mosfet-basic-output/v02/single-channel-small-mosfet-basic-output-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-mb-mount-t">
  <title id="xb-mb-mount-t">Mounting drawing of the mb, component side: outline 41 by 32 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="262.2" y="78.0" width="435.6" height="340.0" rx="0.0" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M262.2 56H697.8"/><path d="M262.2 50V62"/><path d="M697.8 50V62"/><path d="M723.8 78.0V418.0"/><path d="M717.8 78.0h12"/><path d="M717.8 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">41</text>
  <text x="735.8" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">32</text>
  <circle cx="262.2" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="250.2" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M204.2 104.0h30" fill="none"/><path d="M238.2 104.0l-8 -4v8z"/><path d="M204.2 104.0v30" fill="none"/><path d="M204.2 138.0l-4 -8h8z"/></g>
  <text x="242.2" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="200.2" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="389.7" cy="226.8" r="17.0" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M368.7 226.8h42.0M389.7 205.8v42.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="372.7" y="263.8" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  12.00, 14.00</text>
  <circle cx="602.2" cy="226.8" r="17.0" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M581.2 226.8h42.0M602.2 205.8v42.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="619.2" y="263.8" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  32.00, 14.00</text>
  <circle cx="532.1" cy="396.8" r="15.9" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M512.1 396.8h39.9M532.1 376.8v39.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="548.0" y="370.8" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">3</tspan>  25.40, 30.00</text>
  <circle cx="651.1" cy="396.8" r="15.9" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M631.1 396.8h39.9M651.1 376.8v39.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="667.0" y="370.8" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">4</tspan>  36.60, 30.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 41 × 32&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>12.00</td><td>14.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>32.00</td><td>14.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>25.40</td><td>30.00</td><td>3&nbsp;mm, not plated</td><td>Mounting</td></tr>
    <tr><td>4</td><td>36.60</td><td>30.00</td><td>3&nbsp;mm, not plated</td><td>Mounting</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Ratings of the board design.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Supply</td><td>EXT+</td><td>—</td><td>12 V</td><td>—</td><td>External, current limited</td></tr>
    <tr><td>Continuous load</td><td>LOAD</td><td>—</td><td>—</td><td>1 A</td><td>Load rating</td></tr>
    <tr><td>Command</td><td>Selected input</td><td>—</td><td>3.3 V</td><td>—</td><td>Active high</td></tr>
    <tr><td>Reverse supply</td><td>EXT+</td><td>—</td><td>—</td><td>Not protected</td><td>Observe polarity</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

For onboard supply protection and fault lights see the <a href="/extensions/single-channel-small-mosfet-advanced-output">small MOSFET advanced board</a>.

See all boards on the [extension boards](/extension-boards) page.
