---
layout: default
title: "Breadboard board"
description: "Seven protected controller pins and current-limited 3.3 V and 5 V rails on a header that plugs into a solderless breadboard."
permalink: /extensions/breadboard-board
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Prototyping</p>
    <h1 id="breadboard-board">Breadboard board</h1>
    <p class="xb-lead">Plug the board into a solderless breadboard and get seven controller pins, each through 330&nbsp;&Omega; with ESD protection, plus current-limited 5&nbsp;V and 3.3&nbsp;V rails with power and overcurrent lights.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/breadboard-board/v18/breadboard-board-diagram.png" alt="Top view of the Breadboard board.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>7 pins</b><span>330 Ω each</span></div>
  <div class="xb-stat"><b>120 mA</b><span>5 V rail</span></div>
  <div class="xb-stat"><b>80 mA</b><span>3.3 V rail</span></div>
  <div class="xb-stat"><b>< 5 MHz</b><span>signals</span></div>
  <div class="xb-stat"><b>4 lights</b><span>power and overcurrent</span></div>
  <div class="xb-stat"><b>30 × 34</b><span>millimetres</span></div>
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
  Never feed power into the board&rsquo;s rails and never join the 3.3&nbsp;V and 5&nbsp;V rows. The pins are 3.3&nbsp;V only, not 5&nbsp;V tolerant, and float while the controller is in reset. A dark light does not mean a rail is safe to touch. Do not hot-plug it.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>Controller pins and supplies on a breadboard</td></tr>
    <tr><td>Host socket</td><td>J1, 2 &times; 5 at 1.27&nbsp;mm</td></tr>
    <tr><td>Breadboard header</td><td>J2, 1 &times; 11, mounted underneath: 5&nbsp;V, GND, 3.3&nbsp;V, GND, GPIO1 to GPIO7</td></tr>
    <tr><td>Signals</td><td>GPIO1 to GPIO7 are contacts 3 to 9, each through 330&nbsp;&Omega;, protected by two <a href="/images/extensions/breadboard-board/datasheets/tpd4e1u06.pdf">TPD4E1U06</a></td></tr>
    <tr><td>Rails</td><td>5&nbsp;V 120&nbsp;mA and 3.3&nbsp;V 80&nbsp;mA, each switched by a <a href="/images/extensions/breadboard-board/datasheets/tps2553.pdf">TPS2553</a> limiter</td></tr>
    <tr><td>Rail links</td><td>JP1 (5&nbsp;V) and JP2 (3.3&nbsp;V): bridged is on, cut is off</td></tr>
    <tr><td>Lights</td><td>Green power and amber overcurrent per rail, each with a cut link</td></tr>
    <tr><td>Size</td><td>30 &times; 34&nbsp;mm, two M3 mounting holes</td></tr>
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
      <img src="/images/extensions/breadboard-board/v18/breadboard-board-diagram.png" alt="Top view of the Breadboard board with numbered markers explained in the list below.">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:49.9%;top:14.1%" aria-label="1: Controller socket (J1)">1<span class="xb-pop"><b>Controller socket (J1)</b> — the ribbon cable.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-2" style="left:20.1%;top:32.7%" aria-label="2: 5 V limiter (U1)">2<span class="xb-pop"><b>5 V limiter (U1)</b> — switches and limits the 5&nbsp;V rail.</span></a>
      <a class="xb-mk xb-pl" href="#tour-3" style="left:20.1%;top:51.9%" aria-label="3: 3.3 V limiter (U2)">3<span class="xb-pop"><b>3.3 V limiter (U2)</b> — switches and limits the 3.3&nbsp;V rail.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-4" style="left:9.3%;top:41.3%" aria-label="4: 5 V enable link (JP1)">4<span class="xb-pop"><b>5 V enable link (JP1)</b> — cut to switch the rail off.</span></a>
      <a class="xb-mk xb-pl" href="#tour-5" style="left:9.3%;top:60.5%" aria-label="5: 3.3 V enable link (JP2)">5<span class="xb-pop"><b>3.3 V enable link (JP2)</b> — cut to switch the rail off.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:66.8%;top:36.9%" aria-label="6: 5 V light (D1)">6<span class="xb-pop"><b>5 V light (D1)</b> — green, rail powered.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-7" style="left:81.8%;top:36.9%" aria-label="7: 3.3 V light (D2)">7<span class="xb-pop"><b>3.3 V light (D2)</b> — green, rail powered.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:74.3%;top:36.9%" aria-label="8: 5 V overcurrent light (D3)">8<span class="xb-pop"><b>5 V overcurrent light (D3)</b> — amber.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-9" style="left:89.3%;top:36.9%" aria-label="9: 3.3 V overcurrent light (D4)">9<span class="xb-pop"><b>3.3 V overcurrent light (D4)</b> — amber.</span></a>
      <a class="xb-mk" href="#tour-10" style="left:54.0%;top:65.8%" aria-label="10: ESD arrays (U3, U4)">10<span class="xb-pop"><b>ESD arrays (U3, U4)</b> — protect the seven signals.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Controller socket (J1)</b> — the ribbon cable.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>5 V limiter (U1)</b> — switches and limits the 5&nbsp;V rail.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>3.3 V limiter (U2)</b> — switches and limits the 3.3&nbsp;V rail.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>5 V enable link (JP1)</b> — cut to switch the rail off.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>3.3 V enable link (JP2)</b> — cut to switch the rail off.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>5 V light (D1)</b> — green, rail powered.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>3.3 V light (D2)</b> — green, rail powered.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>5 V overcurrent light (D3)</b> — amber.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>3.3 V overcurrent light (D4)</b> — amber.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>ESD arrays (U3, U4)</b> — protect the seven signals.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

### Lights {#lights}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th>Lit means</th><th>Disable it</th></tr></thead>
  <tbody>
    <tr><td>D1, green</td><td>5&nbsp;V rail powered</td><td>JP4</td></tr>
    <tr><td>D2, green</td><td>3.3&nbsp;V rail powered</td><td>JP6</td></tr>
    <tr><td>D3, amber</td><td>5&nbsp;V overcurrent</td><td>JP3</td></tr>
    <tr><td>D4, amber</td><td>3.3&nbsp;V overcurrent</td><td>JP5</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Pinout {#pinout}

The header is on the underside; plug it into an outer row of the breadboard.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J2 pin</th><th>Signal</th><th>Controller side (Prime header G_F)</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>limited rail output</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td></td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>limited rail output</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td></td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">GPIO1</span></td><td>contact 3, <code>PB1</code></td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">GPIO2</span></td><td>contact 4, <code>PJ4</code></td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-sig">GPIO3</span></td><td>contact 5, <code>PA4</code></td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">GPIO4</span></td><td>contact 6, <code>PG0</code></td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">GPIO5</span></td><td>contact 7, <code>PJ3</code></td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-sig">GPIO6</span></td><td>contact 8, <code>PG1</code></td></tr>
    <tr><td>11</td><td><span class="xb-pill xb-p-sig">GPIO7</span></td><td>contact 9, <code>PJ2</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J1: controller socket

Contacts keep their numbers from the controller to the board. The controller pin names below apply to header G_F (connector J37) of Smoothieboard V2 Prime; another header or controller has other pins. Treat every signal as 3.3&nbsp;V only: PB1, PA4 and PG1 are not 5&nbsp;V tolerant.

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
  <div class="xb-card"><b>A breadboard and a button</b><span>For the first test.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

This reads one button on GPIO1 (PB1) of Smoothieboard V2 Prime.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 666" role="img" aria-labelledby="xb-breadboard-board-wire"><title id="xb-breadboard-board-wire">Wiring: controller contact 3 to J1 contact 3; controller contact 10 to J1 contact 10; J2 contact 5 to button leg 1; J2 contact 2 to button leg 2.</title><image href="/images/extensions/breadboard-board/v18/breadboard-board-diagram.png" x="398" y="14" width="204" height="230"/><circle cx="500" cy="46" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="481" y="65" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="500" y="79" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J1</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Prime header G_F/J37</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J1 on this board</text><rect x="30" y="304" width="200" height="150" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="130" y="375" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Smoothieboard</text><text x="130" y="395" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">V2 Prime</text><rect x="770" y="304" width="200" height="150" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 364.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">3</text><text x="784" y="369" text-anchor="start" font-size="14" fill="#eaeaea">3  </text><rect x="400" y="353" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">3 to 3</text><path d="M230 394.0H770" fill="none" stroke="#939393" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="394" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">10</text><text x="784" y="399" text-anchor="start" font-size="14" fill="#eaeaea">10  GND</text><rect x="400" y="383" width="200" height="22" rx="11" fill="#939393" stroke="#939393" stroke-width="1.5"/><text x="500" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#111">10 to 10: GND</text><text x="130" y="486" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J2 on this board</text><text x="870" y="486" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Push button</text><rect x="700" y="498" width="270" height="150" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><rect x="828" y="521" width="104" height="104" rx="12" fill="#303030" stroke="#a1a1a1" stroke-width="1.5"/><circle cx="880" cy="573" r="36" fill="#e23b32" stroke="#7d120d" stroke-width="5"/><rect x="30" y="498" width="200" height="150" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 558.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="558" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="558" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="563" text-anchor="end" font-size="14" fill="#eaeaea">  5</text><text x="712" y="563" text-anchor="start" font-size="13" fill="#eaeaea">button leg 1</text><rect x="340" y="547" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="563" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">5: button leg 1</text><path d="M230 588.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="588" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="588" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="593" text-anchor="end" font-size="14" fill="#eaeaea">  2</text><text x="712" y="593" text-anchor="start" font-size="13" fill="#eaeaea">button leg 2</text><rect x="340" y="577" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="593" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">2: button leg 2</text></svg>
  </div>
  <figcaption>Wiring for this procedure. Yellow rings mark the connectors used. Make and change connections with the power off. Equipment is drawn as a typical unit, not a specific model.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Power off and plug in</h3>
    <p>Fit J2 into the breadboard&rsquo;s outer row. Check how the breadboard rows are connected.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the controller</h3>
    <p>Controller G_F (J37) contact 3 to J1 contact 3, and contact 10 to contact 10. Add contacts 1 and 2 only if you want the rails powered.</p>
  </li>
  <li class="xb-step">
    <h3>Wire the button</h3>
    <p>Between J2 pin 5 (GPIO1) and J2 pin 2 (GND).</p>
  </li>
  <li class="xb-step">
    <h3>Configure</h3>
    <p>Add the settings of example 1 and power up.</p>
  </li>
  <li class="xb-step">
    <h3>Press the button</h3>
    <p></p>
    <p class="xb-expect">The controller halts.</p>
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

Each signal passes through a 330&nbsp;&Omega; resistor to the header and is clamped by an ESD array. Each rail goes through a current limiter that switches off or cycles when overloaded and lights its amber light. The board adds no pins and no pull-ups.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 270" role="img" aria-labelledby="xb-breadboard-board-path"><title id="xb-breadboard-board-path">J1 signal, from the controller then 330 ohm resistor, plus ESD clamp then Header pin, to the breadboard. J1 rail then Current limiter, trips on overload, amber light then Breadboard rail.</title><rect x="46" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="186" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">J1 signal</text><text x="186" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3">from the controller</text><rect x="360" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">330 ohm resistor</text><text x="500" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3">plus ESD clamp</text><path d="M330.0 70H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 63L358 70L349 77Z" fill="#5fb3ff"/><rect x="674" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="814" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Header pin</text><text x="814" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3">to the breadboard</text><path d="M644.0 70H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 63L672 70L663 77Z" fill="#5fb3ff"/><rect x="46" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="186" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">J1 rail</text><text x="186" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><rect x="360" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="500" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Current limiter</text><text x="500" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3">trips on overload, amber light</text><path d="M330.0 198H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 191L358 198L349 205Z" fill="#5fb3ff"/><rect x="674" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="814" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Breadboard rail</text><text x="814" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M644.0 198H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 191L672 198L663 205Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board, one path per row.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Rail light off</td><td>Contacts 1 and 2 connected, link JP1 or JP2.</td></tr>
    <tr><td>Amber light blinking or lit</td><td>Too much current or a short on that rail. Power off and find it.</td></tr>
    <tr><td>Input never changes</td><td>Cable contacts, pin name, breadboard row.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/breadboard-board/v18/breadboard-board-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/breadboard-board/v18/breadboard-board-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/breadboard-board/v18/breadboard-board-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-br-mount-t">
  <title id="xb-br-mount-t">Mounting drawing of the br, component side: outline 30 by 34 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="330.0" y="78.0" width="300.0" height="340.0" rx="0.0" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M330.0 56H630.0"/><path d="M330.0 50V62"/><path d="M630.0 50V62"/><path d="M656.0 78.0V418.0"/><path d="M650.0 78.0h12"/><path d="M650.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">30</text>
  <text x="668.0" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">34</text>
  <circle cx="330.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="318.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M272.0 104.0h30" fill="none"/><path d="M306.0 104.0l-8 -4v8z"/><path d="M272.0 104.0v30" fill="none"/><path d="M272.0 138.0l-4 -8h8z"/></g>
  <text x="310.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="268.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="380.0" cy="119.0" r="16.0" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M360.0 119.0h40.0M380.0 99.0v40.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="364.0" y="155.0" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 4.10</text>
  <circle cx="580.0" cy="119.0" r="16.0" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M560.0 119.0h40.0M580.0 99.0v40.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="596.0" y="155.0" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  25.00, 4.10</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 30 × 34&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>4.10</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>25.00</td><td>4.10</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Values from the board printing and parts list.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>5 V rail output</td><td>J2 pin 1</td><td>—</td><td>—</td><td>120 mA</td><td>Board silk</td></tr>
    <tr><td>3.3 V rail output</td><td>J2 pin 3</td><td>—</td><td>—</td><td>80 mA</td><td>Board silk</td></tr>
    <tr><td>Voltage applied from outside</td><td>Rails</td><td>—</td><td>—</td><td>7 V</td><td>Board silk absolute maximum; never feed power in</td></tr>
    <tr><td>Signal voltage</td><td>GPIO1 to GPIO7</td><td>0 V</td><td>3.3 V</td><td>3.3 V</td><td>Not 5 V tolerant</td></tr>
    <tr><td>Signal frequency</td><td>GPIO1 to GPIO7</td><td>—</td><td>—</td><td>5 MHz</td><td>Board silk, below this</td></tr>
    <tr><td>Series resistance</td><td>Each signal</td><td>—</td><td>330 Ω</td><td>—</td><td>Parts list</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: datasheets {#datasheets}

The first page of each important chip&rsquo;s datasheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/breadboard-board/datasheets/tps2553.pdf"><img src="/images/extensions/breadboard-board/datasheets/tps2553-page1.png" alt="First page of the TPS2553 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/breadboard-board/datasheets/tps2553.pdf">TPS2553 current-limited power-distribution switch</a> — Texas Instruments, 46 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/breadboard-board/datasheets/tpd4e1u06.pdf"><img src="/images/extensions/breadboard-board/datasheets/tpd4e1u06-page1.png" alt="First page of the TPD4E1U06 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/breadboard-board/datasheets/tpd4e1u06.pdf">TPD4E1U06 four-channel ESD protection array</a> — Texas Instruments, 27 pages.</figcaption>
</figure>
{:/nomarkdown}


See all boards on the [extension boards](/extension-boards) page.
