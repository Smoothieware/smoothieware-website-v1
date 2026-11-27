---
layout: default
title: "Raw pins screw terminal breakout"
description: "A passive board that brings the ten contacts of one Gadgeteer socket to 3.5 mm screw terminals, with a chain socket and a link per pin."
permalink: /extensions/raw-pins-screw-terminal-breakout
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Breakouts</p>
    <h1 id="raw-pins-screw-terminal-breakout">Raw pins screw terminal breakout</h1>
    <p class="xb-lead">Put all ten contacts of one controller port on screw terminals: connect one ribbon cable, then wire buttons, switches and 3.3&nbsp;V modules with a screwdriver.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/raw-pins-screw-terminal-breakout/v24/raw-pins-screw-terminal-breakout-diagram.png" alt="Top view of the Raw pins screw terminal breakout.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>10</b><span>screw terminals</span></div>
  <div class="xb-stat"><b>7</b><span>signals, P3 to P9</span></div>
  <div class="xb-stat"><b>3.5 mm</b><span>terminal pitch</span></div>
  <div class="xb-stat"><b>9 links</b><span>to the chain socket</span></div>
  <div class="xb-stat"><b>3.3 V</b><span>logic</span></div>
  <div class="xb-stat"><b>46 × 32</b><span>millimetres</span></div>
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
  3.3&nbsp;V signals only. The terminals add no drive current and translate no voltage. Do not feed external power into the 3.3&nbsp;V or 5&nbsp;V terminal, and switch off before you connect or disconnect anything.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>Screw-terminal access to one Y Gadgeteer port</td></tr>
    <tr><td>Host socket</td><td>J1, 2 &times; 5 at 1.27&nbsp;mm, shrouded (footprint: Samtec SHF-105-01-L-D-TH-LC)</td></tr>
    <tr><td>Terminals</td><td>J3, ten positions at 3.5&nbsp;mm: 3V3, 5V, P3 to P9, GND</td></tr>
    <tr><td>Chain socket</td><td>J2, same contacts through links JP1 to JP9; ground joined directly</td></tr>
    <tr><td>Four-pin socket</td><td>J4, printed QWIIC 3V3: GND, 3.3&nbsp;V, P9, P8</td></tr>
    <tr><td>Protection</td><td>One LESD8D3.3CAT5G suppressor from each of P3 to P9 to ground (underside)</td></tr>
    <tr><td>Size</td><td>46 &times; 32&nbsp;mm, two M3 mounting holes</td></tr>
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
      <img src="/images/extensions/raw-pins-screw-terminal-breakout/v24/raw-pins-screw-terminal-breakout-diagram.png" alt="Top view of the Raw pins screw terminal breakout with numbered markers explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:22.1%;top:16.1%" aria-label="1: Host socket (Y IN)">1<span class="xb-pop"><b>Host socket (Y IN)</b> — the ribbon cable from the controller.</span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:75.9%;top:16.1%" aria-label="2: Chain socket (Y CHAIN)">2<span class="xb-pop"><b>Chain socket (Y CHAIN)</b> — carries the contacts on to a second board.</span></a>
      <a class="xb-mk xb-pb" href="#tour-3" style="left:49.0%;top:13.2%" aria-label="3: Four-pin socket (J4)">3<span class="xb-pop"><b>Four-pin socket (J4)</b> — ground, 3.3&nbsp;V, P9, P8. It is not a working I&sup2;C port unless your controller pins provide one.</span></a>
      <a class="xb-mk xb-pl" href="#tour-4" style="left:16.2%;top:80.5%" aria-label="4: Screw terminals (J3)">4<span class="xb-pop"><b>Screw terminals (J3)</b> — terminal 1 (3V3) on the left, 10 (GND) on the right.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:40.7%;top:37.0%" aria-label="5: 3.3 V chain link (JP1)">5<span class="xb-pop"><b>3.3 V chain link (JP1)</b> — cut to stop 3.3&nbsp;V at this board.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:49.0%;top:37.0%" aria-label="6: 5 V chain link (JP2)">6<span class="xb-pop"><b>5 V chain link (JP2)</b> — cut to stop 5&nbsp;V at this board.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:57.3%;top:37.0%" aria-label="7: Chain link 3 (JP3)">7<span class="xb-pop"><b>Chain link 3 (JP3)</b> — pin P3.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:57.3%;top:47.0%" aria-label="8: Chain link 6 (JP6)">8<span class="xb-pop"><b>Chain link 6 (JP6)</b> — pin P6.</span></a>
      <a class="xb-mk" href="#tour-9" style="left:57.3%;top:57.0%" aria-label="9: Chain link 9 (JP9)">9<span class="xb-pop"><b>Chain link 9 (JP9)</b> — pin P9.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host socket (Y IN)</b> — the ribbon cable from the controller.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket (Y CHAIN)</b> — carries the contacts on to a second board.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Four-pin socket (J4)</b> — ground, 3.3&nbsp;V, P9, P8. It is not a working I&sup2;C port unless your controller pins provide one.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Screw terminals (J3)</b> — terminal 1 (3V3) on the left, 10 (GND) on the right.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>3.3 V chain link (JP1)</b> — cut to stop 3.3&nbsp;V at this board.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>5 V chain link (JP2)</b> — cut to stop 5&nbsp;V at this board.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Chain link 3 (JP3)</b> — pin P3.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Chain link 6 (JP6)</b> — pin P6.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Chain link 9 (JP9)</b> — pin P9.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

Contacts keep their numbers from the controller to the board. The controller pin names below apply to header G_F (connector J37) of Smoothieboard V2 Prime; another header or controller has other pins. Treat every signal as 3.3&nbsp;V only: PB1, PA4 and PG1 are not 5&nbsp;V tolerant.

Screw terminal J3.n carries contact n, printed on the board as 3V3, 5V, P3 to P9 and GND.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>Pin on Smoothieboard V2 Prime, header G_F (J37)</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span> (the controller&rsquo;s limited rail)</td><td>not a signal</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span> (the controller&rsquo;s limited rail)</td><td>not a signal</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">P3</span></td><td><code>PB1</code></td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">P4</span></td><td><code>PJ4</code></td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">P5</span></td><td><code>PA4</code></td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">P6</span></td><td><code>PG0</code></td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-sig">P7</span></td><td><code>PJ3</code></td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">P8</span></td><td><code>PG1</code></td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">P9</span></td><td><code>PJ2</code></td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>ground</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J4: four-pin socket

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">P9</span></td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">P8</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>With its screw terminals.</span></div>
  <div class="xb-card"><b>A ten-wire cable</b><span>Both ends 2 &times; 5 contacts at 1.27&nbsp;mm pitch, wired 1 to 1. A 2.54&nbsp;mm jumper plug does not fit. The Prime header has no keyed housing, so check contact 1 at both ends.</span></div>
  <div class="xb-card"><b>A normally-open button</b><span>And two wires, for the first test.</span></div>
  <div class="xb-card"><b>A small screwdriver</b><span>To fit the 3.5&nbsp;mm terminals.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

This test reads one button on PB1 of Smoothieboard V2 Prime.


{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Power off and reserve the pins</h3>
    <p>Disconnect power and machine loads. Check that nothing else in your configuration uses PB1, and that the other six pins tolerate being brought out.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the cable</h3>
    <p>Controller G_F (J37) contact n to board J1 contact n, for all ten. Check every contact with a meter.</p>
  </li>
  <li class="xb-step">
    <h3>Wire the button</h3>
    <p>One lead to terminal 3 (P3), the other to terminal 10 (GND). Insulate unused wires.</p>
  </li>
  <li class="xb-step">
    <h3>Configure</h3>
    <p>Add the halt-button settings of example 1 below.</p>
  </li>
  <li class="xb-step">
    <h3>Test</h3>
    <p>Power up and press the button.</p>
    <p class="xb-expect">The controller halts. Releasing the button does not resume it.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>A halt button</td><td>Button box</td><td><a href="#config-kill">1</a></td></tr>
    <tr><td>To read a contact</td><td>Switch, input</td><td><a href="#config-input">2</a></td></tr>
    <tr><td>To drive a logic input</td><td>Switch, output</td><td><a href="#config-output">3</a></td></tr>
    <tr><td>To check an endstop</td><td>Endstops</td><td><a href="#config-endstop">4</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### 1. Halt button (button box) {#config-kill}

A normally-open button or switch between PB1 and ground. Pressing it halts the controller; releasing it does not resume.

```ini
[button box]
raw_button.enable = true
raw_button.pin = PB1!^
raw_button.press = KILL
```

<code>^</code> enables the internal pull-up and <code>!</code> inverts the input. A button already held at start-up can trigger at once. This is a software halt, not an emergency stop ([button box source](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/utils/buttonbox/buttonbox.cpp)).

### 2. Input that you can read (switch module) {#config-input}

Reads a contact without doing anything else. This entry replaces example 1: one pin can be claimed by one entry only.

```ini
[switch]
raw_input.enable = true
raw_input.input_pin = PB1!^
raw_input.input_pin_behavior = momentary
```

Send <code>switch raw_input</code> in the console to read it ([switch source](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/switch/Switch.cpp)).

### 3. Output from G-code (switch module) {#config-output}

PB1 drives a 3.3&nbsp;V logic input of another circuit. It does not power a load. Replaces examples 1 and 2.

```ini
[switch]
raw_output.enable = true
raw_output.output_pin = PB1
raw_output.output_type = digital
raw_output.input_on_command = M42
raw_output.input_off_command = M43
raw_output.subcode = 1
raw_output.startup_state = false
raw_output.halt_set_to = false
```

<code>M42.1</code> or <code>switch raw_output on</code> sets the pin high; <code>M43.1</code> or <code>switch raw_output off</code> sets it low. The numbers are a choice: change them if another entry uses them. The level during reset and power-up is not set by this configuration.

### 4. Endstop input without limit action (endstops) {#config-endstop}

Reports a switch in <code>M119</code> without using it for homing or as a travel limit. Add it to an existing <code>[endstops]</code> section of a machine that already has an X axis. Replaces examples 1 to 3.

```ini
[endstops]
raw_check.enable = true
raw_check.pin = PB1^
raw_check.axis = X
raw_check.homing_direction = none
raw_check.limit_enable = false
```

Set <code>homing_direction</code> and <code>limit_enable</code> only after the switch reads correctly ([endstops source](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/endstops/Endstops.cpp)).

The passive board needs no driver of its own. These four uses cover what it is normally wired for; any other module that takes a 3.3&nbsp;V pin works in the same way.

## How it works {#how-it-works}

The board is copper: contact n of J1 goes to terminal n. Contacts 1 to 9 also reach the chain socket through solder links, which are closed as delivered. Contacts 8 and 9 additionally reach J4. Seven suppressors on the underside take short voltage spikes on P3 to P9 to ground; they are not a level shifter.

## Chaining {#chaining}

{::nomarkdown}
{% include _includes/extension-chain-figure.html id="xb-rs" board="screw-terminal breakout" in_label="Y IN" chain_label="CHAIN" lane1="pin 3" lane2="pin 4" lane3="pin 5" s1="closed" s2="closed" s3="closed" caption="As delivered every link is closed, so each pin continues to the chain socket." %}
{:/nomarkdown}

A board on the chain socket shares the same controller pins. Never let two outputs drive one pin, and treat a pin wired at the terminals as taken. Cutting a link JP1 to JP9 stops that contact at this board; its screw terminal stays connected. Ground cannot be cut. Do not connect a second controller.

### Several boards on one port {#fanout}

{::nomarkdown}
{% include _includes/extension-breakout-fanout.html id="xb-rsf" board="two-wire board" signal_note="Each signal terminal takes one device." %}
{:/nomarkdown}

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Input never changes</td><td>Cable contact numbers, the pin name in the configuration, and the button between the signal terminal and GND.</td></tr>
    <tr><td>Input always active</td><td>A short to ground, a normally-closed switch, or the wrong <code>!</code> inversion.</td></tr>
    <tr><td>Controller reports a pin allocation error</td><td>Another module already uses the pin.</td></tr>
    <tr><td>Second board on the chain sees nothing</td><td>The link for that pin is cut.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/raw-pins-screw-terminal-breakout/v24/raw-pins-screw-terminal-breakout-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/raw-pins-screw-terminal-breakout/v24/raw-pins-screw-terminal-breakout-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/raw-pins-screw-terminal-breakout/v24/raw-pins-screw-terminal-breakout-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
    <tr><td><a href="/assets/downloads/extensions/raw-pins-screw-terminal-breakout/raw-pins-screw-terminal-cad-study.zip">KiCad design files (ZIP)</a></td><td>Editable board and schematic with local libraries</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-rs-mount-t">
  <title id="xb-rs-mount-t">Mounting drawing of the rs, component side: outline 46 by 32 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="235.6" y="78.0" width="488.8" height="340.0" rx="10.6" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M235.6 56H724.4"/><path d="M235.6 50V62"/><path d="M724.4 50V62"/><path d="M750.4 78.0V418.0"/><path d="M744.4 78.0h12"/><path d="M744.4 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">46</text>
  <text x="762.4" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">32</text>
  <circle cx="235.6" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="223.6" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M177.6 104.0h30" fill="none"/><path d="M211.6 104.0l-8 -4v8z"/><path d="M177.6 104.0v30" fill="none"/><path d="M177.6 138.0l-4 -8h8z"/></g>
  <text x="215.6" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="173.6" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="267.5" cy="226.8" r="17.0" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M246.5 226.8h42.0M267.5 205.8v42.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="250.5" y="263.8" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  3.00, 14.00</text>
  <circle cx="692.5" cy="226.8" r="17.0" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M671.5 226.8h42.0M692.5 205.8v42.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="709.5" y="263.8" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  43.00, 14.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 46 × 32&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>3.00</td><td>14.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>43.00</td><td>14.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Passive board: limits are those of the controller, cable and fitted connectors.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Signal voltage</td><td>P3 to P9</td><td>0 V</td><td>3.3 V</td><td>3.3 V</td><td>Board silk: 3.3 V logic only</td></tr>
    <tr><td>Rail current</td><td>Terminals 1 and 2</td><td>—</td><td>—</td><td>Open</td><td>Limited by the controller&rsquo;s rails, cable and connectors</td></tr>
    <tr><td>Terminal wire size and torque</td><td>J3</td><td>—</td><td>—</td><td>Open</td><td>Take from the fitted terminal block&rsquo;s datasheet</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Originally designed by Bob Cousins as <a href="/extensions/historical-breakoutterm">BreakoutTerm</a>.

See all boards on the [extension boards](/extension-boards) page.
