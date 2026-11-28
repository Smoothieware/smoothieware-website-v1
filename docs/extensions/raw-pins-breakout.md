---
layout: default
title: "Raw pins breakout"
description: "A passive board that brings the ten contacts of one Gadgeteer socket to a 2.54 mm pin header, with a chain socket and a link per pin."
permalink: /extensions/raw-pins-breakout
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Breakouts</p>
    <h1 id="raw-pins-breakout">Raw pins breakout</h1>
    <p class="xb-lead">Reach every contact of one controller port on a straight 2.54&nbsp;mm header, ready for jumper wires, while a second socket passes the port on.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/raw-pins-breakout/v15/raw-pins-breakout-diagram.webp" alt="Top view of the Raw pins breakout.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>10 pins</b><span>2.54 mm header</span></div>
  <div class="xb-stat"><b>7</b><span>signals, P3 to P9</span></div>
  <div class="xb-stat"><b>9 links</b><span>to the chain socket</span></div>
  <div class="xb-stat"><b>0.32 A</b><span>rails, shared</span></div>
  <div class="xb-stat"><b>150 mm</b><span>longest cable</span></div>
  <div class="xb-stat"><b>28.4 × 32</b><span>millimetres</span></div>
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
  3.3&nbsp;V signals only. Never short header pins 1 and 2 (3.3&nbsp;V and 5&nbsp;V), do not connect heaters or other loads, and switch off before you change wiring.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>Header access to one Y Gadgeteer port</td></tr>
    <tr><td>Host socket</td><td>J1, 2 &times; 5 at 1.27&nbsp;mm</td></tr>
    <tr><td>Header</td><td>J2, 1 &times; 10 at 2.54&nbsp;mm: 3.3&nbsp;V, 5&nbsp;V, P3 to P9, GND</td></tr>
    <tr><td>Chain socket</td><td>J3, same contacts through links JP1 to JP9; ground joined directly</td></tr>
    <tr><td>Protection</td><td>One LESD8D3.3CAT5G suppressor from each of P3 to P9 to ground (underside)</td></tr>
    <tr><td>Use</td><td>Low-speed signals, cable up to 150&nbsp;mm (board printing)</td></tr>
    <tr><td>Size</td><td>28.4 &times; 32&nbsp;mm, 1.6&nbsp;mm thick, four 3.2&nbsp;mm holes on a 20&nbsp;mm square</td></tr>
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
      <img src="/images/extensions/raw-pins-breakout/v15/raw-pins-breakout-diagram.webp" alt="Top view of the Raw pins breakout with numbered markers explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:17.8%;top:42.7%" aria-label="1: Host socket (IN Y)">1<span class="xb-pop"><b>Host socket (IN Y)</b> — the ribbon cable from the controller.</span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:49.3%;top:9.1%" aria-label="2: Pin header (J2)">2<span class="xb-pop"><b>Pin header (J2)</b> — pin 1 (3.3&nbsp;V) at the top, pin 10 (GND) at the bottom.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-3" style="left:82.2%;top:42.7%" aria-label="3: Chain socket (CHAIN Y)">3<span class="xb-pop"><b>Chain socket (CHAIN Y)</b> — carries the contacts to a second board.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:60.8%;top:9.1%" aria-label="4: 3.3 V link (JP1)">4<span class="xb-pop"><b>3.3 V link (JP1)</b> — cut to stop 3.3&nbsp;V at this board.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:60.8%;top:16.5%" aria-label="5: 5 V link (JP2)">5<span class="xb-pop"><b>5 V link (JP2)</b> — cut to stop 5&nbsp;V at this board.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:60.8%;top:24.0%" aria-label="6: Chain link 3 (JP3)">6<span class="xb-pop"><b>Chain link 3 (JP3)</b> — pin P3.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:60.8%;top:38.9%" aria-label="7: Chain link 5 (JP5)">7<span class="xb-pop"><b>Chain link 5 (JP5)</b> — pin P5.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:60.8%;top:53.9%" aria-label="8: Chain link 7 (JP7)">8<span class="xb-pop"><b>Chain link 7 (JP7)</b> — pin P7.</span></a>
      <a class="xb-mk" href="#tour-9" style="left:60.8%;top:68.8%" aria-label="9: Chain link 9 (JP9)">9<span class="xb-pop"><b>Chain link 9 (JP9)</b> — pin P9.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host socket (IN Y)</b> — the ribbon cable from the controller.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Pin header (J2)</b> — pin 1 (3.3&nbsp;V) at the top, pin 10 (GND) at the bottom.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Chain socket (CHAIN Y)</b> — carries the contacts to a second board.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>3.3 V link (JP1)</b> — cut to stop 3.3&nbsp;V at this board.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>5 V link (JP2)</b> — cut to stop 5&nbsp;V at this board.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Chain link 3 (JP3)</b> — pin P3.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Chain link 5 (JP5)</b> — pin P5.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Chain link 7 (JP7)</b> — pin P7.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Chain link 9 (JP9)</b> — pin P9.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

Contacts keep their numbers from the controller to the board. The controller pin names below apply to header G_F (connector J37) of Smoothieboard V2 Prime; another header or controller has other pins. Treat every signal as 3.3&nbsp;V only: PB1, PA4 and PG1 are not 5&nbsp;V tolerant.

Header pin n of J2 carries contact n.

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

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>Built from the design files in Downloads</span></div>
  <div class="xb-card"><b>A ten-wire cable</b><span>Both ends 2 &times; 5 contacts at 1.27&nbsp;mm pitch, wired 1 to 1. A 2.54&nbsp;mm jumper plug does not fit. The Prime header has no keyed housing, so check contact 1 at both ends.</span></div>
  <div class="xb-card"><b>Two jumper wires and a button</b><span>For the first test.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

This test reads one button on PB1 of Smoothieboard V2 Prime.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Minimal wiring: one ribbon cable and one button">
  <svg viewBox="0 0 1000 440" role="img" aria-labelledby="xb-raw-wire"><title id="xb-raw-wire">A ten-wire ribbon cable from Smoothieboard V2 Prime header G_F to the Raw Pins board connector J1, and a normally open button between header pins 3 and 10.</title><rect x="20" y="150" width="180" height="140" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="110" y="182" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Smoothieboard</text><text x="110" y="202" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">V2 Prime</text><text x="110" y="235" text-anchor="middle" font-size="12" fill="#b3b3b3">header G_F (J37)</text><clipPath id="xb-raw-clip"><rect x="357.0" y="27.0" width="346.79999999999995" height="390.0" rx="12"/></clipPath><g clip-path="url(#xb-raw-clip)"><image href="/images/extensions/raw-pins-breakout/raw-pins-breakout-diagram.webp" x="348.3" y="23.9" width="364.8" height="408.0"/></g><path d="M200 220H412.8" stroke="#a1a1a1" stroke-width="30"/><path d="M200 207H412.8" stroke="#c0262c" stroke-width="4"/><rect x="384" y="138" width="60" height="120" rx="4" fill="#2f2f2f" stroke="#a1a1a1"/><text x="280" y="260" text-anchor="middle" font-size="12" fill="#b3b3b3">ten-wire ribbon</text><rect x="780" y="130" width="150" height="150" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><circle cx="855" cy="205" r="45" fill="#e23b32" stroke="#7d120d" stroke-width="5"/><text x="855" y="308" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">button (normally open)</text><path d="M528.0 121.8H740V170H792" fill="none" stroke="#0d0f12" stroke-width="5.5" stroke-linejoin="round"/><path d="M528.0 121.8H740V170H792" fill="none" stroke="#e0b82f" stroke-width="3" stroke-linejoin="round"/><path d="M528.0 335.2H760V240H792" fill="none" stroke="#0d0f12" stroke-width="5.5" stroke-linejoin="round"/><path d="M528.0 335.2H760V240H792" fill="none" stroke="#939393" stroke-width="3" stroke-linejoin="round"/><circle cx="528.0" cy="121.8" r="3.6" fill="#e0b82f" stroke="#fff" stroke-width="1"/><circle cx="528.0" cy="335.2" r="3.6" fill="#939393" stroke="#fff" stroke-width="1"/><circle cx="792.0" cy="170.0" r="3.6" fill="#e0b82f" stroke="#fff" stroke-width="1"/><circle cx="792.0" cy="240.0" r="3.6" fill="#939393" stroke="#fff" stroke-width="1"/><text x="742" y="111.8" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">3: P3</text><text x="742" y="359.2" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">10: GND</text></svg>
  </div>
  <figcaption>Minimal wiring: one ribbon cable and one button. Make connections with the power off.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Power off and reserve the pins</h3>
    <p>Disconnect power and machine loads. Check that nothing else uses PB1.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the cable</h3>
    <p>Controller G_F (J37) contact n to board J1 contact n, for all ten. Check every contact with a meter.</p>
  </li>
  <li class="xb-step">
    <h3>Wire the button</h3>
    <p>From header pin 3 (P3) to header pin 10 (GND).</p>
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

Contact n of the host socket goes directly to header pin n. Contacts 1 to 9 also reach the chain socket through solder links, closed as delivered. The suppressors on the underside shunt short spikes on P3 to P9 to ground; they add a little capacitance and leakage and do not translate 5&nbsp;V to 3.3&nbsp;V. There are no lights, regulators or switches.

## Chaining {#chaining}

{::nomarkdown}
{% include _includes/extension-chain-figure.html id="xb-rp" board="raw pins breakout" in_label="IN Y" chain_label="CHAIN Y" lane1="pin 3" lane2="pin 4" lane3="pin 5" s1="closed" s2="closed" s3="closed" caption="As delivered every link is closed." %}
{:/nomarkdown}

The chain socket shares the original controller pins; it adds none. Check pin use and output type of everything attached, so that two outputs never drive one pin. Cutting a link stops that contact at this board; the header pin stays connected.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Input never changes</td><td>Cable contact numbers, pin name and the button wiring.</td></tr>
    <tr><td>Input always active</td><td>A short to ground or the wrong <code>!</code> inversion.</td></tr>
    <tr><td>Second board on the chain sees nothing</td><td>The link for that pin is cut.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

The wiring drawings keep the original board markings and attribution of the Smoothieboard V2 Prime and Raw Pins Breakout designs.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/raw-pins-breakout/v15/raw-pins-breakout-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/raw-pins-breakout/v15/raw-pins-breakout-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/raw-pins-breakout/v15/raw-pins-breakout-diagram.webp">Board drawing (WebP)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-rp-mount-t">
  <title id="xb-rp-mount-t">Mounting drawing of the rp, component side: outline 28.4 by 32 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="329.1" y="78.0" width="301.8" height="340.0" rx="10.6" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M329.1 56H630.9"/><path d="M329.1 50V62"/><path d="M630.9 50V62"/><path d="M656.9 78.0V418.0"/><path d="M650.9 78.0h12"/><path d="M650.9 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">28.4</text>
  <text x="668.9" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">32</text>
  <circle cx="329.1" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="317.1" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M271.1 104.0h30" fill="none"/><path d="M305.1 104.0l-8 -4v8z"/><path d="M271.1 104.0v30" fill="none"/><path d="M271.1 138.0l-4 -8h8z"/></g>
  <text x="309.1" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="267.1" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="371.6" cy="120.5" r="17.0" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M350.6 120.5h42.0M371.6 99.5v42.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="354.6" y="157.5" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  4.00, 4.00</text>
  <circle cx="584.1" cy="120.5" r="17.0" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M563.1 120.5h42.0M584.1 99.5v42.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="601.1" y="157.5" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  24.00, 4.00</text>
  <circle cx="371.6" cy="333.0" r="17.0" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M350.6 333.0h42.0M371.6 312.0v42.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="354.6" y="306.0" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">3</tspan>  4.00, 24.00</text>
  <circle cx="584.1" cy="333.0" r="17.0" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M563.1 333.0h42.0M584.1 312.0v42.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="601.1" y="306.0" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">4</tspan>  24.00, 24.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 28.4 × 32&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>4.00</td><td>4.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>24.00</td><td>4.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>4.00</td><td>24.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>24.00</td><td>24.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Values from the board printing and parts list.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Signal voltage</td><td>P3 to P9</td><td>0 V</td><td>3.3 V</td><td>3.3 V</td><td>Controller logic level</td></tr>
    <tr><td>Rail current</td><td>3.3 V and 5 V together</td><td>—</td><td>—</td><td>0.32 A</td><td>Board silk, shared</td></tr>
    <tr><td>Cable length</td><td>J1</td><td>—</td><td>—</td><td>150 mm</td><td>Board silk, low-speed signals</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Originally designed by Bob Cousins as <a href="/extensions/historical-breakoutpins">BreakoutPins</a>; the earlier board has neither the protection parts nor the chain links.

See all boards on the [extension boards](/extension-boards) page.
