---
layout: default
title: "Button board"
description: "Seven push buttons with pull-ups and debounce filters on one Gadgeteer port."
permalink: /extensions/button-boards
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Panels and inputs</p>
    <h1 id="button-boards">Button board</h1>
    <p class="xb-lead">Add seven push buttons to your controller with one ribbon cable. Each button has its own pin, a pull-up and a filter, so pressing it reads low.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/button-boards/v14/button-boards-diagram.png" alt="Top view of the Button board.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>7</b><span>buttons</span></div>
  <div class="xb-stat"><b>Low</b><span>when pressed</span></div>
  <div class="xb-stat"><b>10 kΩ</b><span>pull-ups</span></div>
  <div class="xb-stat"><b>100 nF</b><span>filter per button</span></div>
  <div class="xb-stat"><b>7 links</b><span>to chain, open</span></div>
  <div class="xb-stat"><b>33 × 41.5</b><span>millimetres</span></div>
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
  These buttons are not an emergency stop. Do not hot-plug the board.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>Seven push buttons on one Y Gadgeteer port</td></tr>
    <tr><td>Switches</td><td>Omron B3FS-1000P, normally open</td></tr>
    <tr><td>Per button</td><td>10&nbsp;k&Omega; pull-up to 3.3&nbsp;V, 1&nbsp;k&Omega; series resistor, 100&nbsp;nF filter</td></tr>
    <tr><td>Pins</td><td>Button 1 on contact 3, up to button 7 on contact 9</td></tr>
    <tr><td>Chain socket</td><td>J2; supplies and ground pass through, button signals only through links JP1 to JP7, open as delivered</td></tr>
    <tr><td>Poll rate</td><td>The host should poll at 100&nbsp;Hz or faster (board printing)</td></tr>
    <tr><td>Size</td><td>33 &times; 41.5&nbsp;mm, two M3 mounting holes</td></tr>
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
      <img src="/images/extensions/button-boards/v14/button-boards-diagram.png" alt="Top view of the Button board with numbered markers explained in the list below.">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:26.4%;top:11.4%" aria-label="1: Host socket (IN)">1<span class="xb-pop"><b>Host socket (IN)</b> — the ribbon cable from the controller.</span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:72.7%;top:11.4%" aria-label="2: Chain socket (CHAIN)">2<span class="xb-pop"><b>Chain socket (CHAIN)</b> — passes the port on.</span></a>
      <a class="xb-mk xb-pb" href="#tour-3" style="left:25.5%;top:22.9%" aria-label="3: Chain links (JP1 to JP7)">3<span class="xb-pop"><b>Chain links (JP1 to JP7)</b> — open as delivered; bridge one to share that button with the next board.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-4" style="left:19.5%;top:42.2%" aria-label="4: Button 1">4<span class="xb-pop"><b>Button 1</b> — contact 3.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:49.5%;top:42.2%" aria-label="5: Button 2">5<span class="xb-pop"><b>Button 2</b> — contact 4.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-6" style="left:79.5%;top:42.2%" aria-label="6: Button 3">6<span class="xb-pop"><b>Button 3</b> — contact 5.</span></a>
      <a class="xb-mk xb-pl" href="#tour-7" style="left:19.5%;top:65.2%" aria-label="7: Button 4">7<span class="xb-pop"><b>Button 4</b> — contact 6.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:49.5%;top:65.2%" aria-label="8: Button 5">8<span class="xb-pop"><b>Button 5</b> — contact 7.</span></a>
      <a class="xb-mk xb-pr" href="#tour-9" style="left:79.5%;top:65.2%" aria-label="9: Button 6">9<span class="xb-pop"><b>Button 6</b> — contact 8.</span></a>
      <a class="xb-mk" href="#tour-10" style="left:49.5%;top:88.2%" aria-label="10: Button 7">10<span class="xb-pop"><b>Button 7</b> — contact 9.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host socket (IN)</b> — the ribbon cable from the controller.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket (CHAIN)</b> — passes the port on.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Chain links (JP1 to JP7)</b> — open as delivered; bridge one to share that button with the next board.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Button 1</b> — contact 3.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Button 2</b> — contact 4.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Button 3</b> — contact 5.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Button 4</b> — contact 6.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Button 5</b> — contact 7.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Button 6</b> — contact 8.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Button 7</b> — contact 9.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

Contacts keep their numbers from the controller to the board. The controller pin names below apply to header G_F (connector J37) of Smoothieboard V2 Prime; another header or controller has other pins. Treat every signal as 3.3&nbsp;V only: PB1, PA4 and PG1 are not 5&nbsp;V tolerant.

Button 1 is on P3, button 2 on P4, and so on to button 7 on P9.

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
</div>
{:/nomarkdown}

## Get started {#get-started}

This test reads button 1 on Smoothieboard V2 Prime.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 652" role="img" aria-labelledby="xb-button-boards-wire"><title id="xb-button-boards-wire">Wiring: controller contact 1 to J1 contact 1; controller contact 2 to J1 contact 2; controller contact 3 to J1 contact 3; controller contact 4 to J1 contact 4; controller contact 5 to J1 contact 5; controller contact 6 to J1 contact 6; controller contact 7 to J1 contact 7; controller contact 8 to J1 contact 8; controller contact 9 to J1 contact 9; controller contact 10 to J1 contact 10.</title><image href="/images/extensions/button-boards/v14/button-boards-diagram.png" x="407" y="14" width="185" height="230"/><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Prime header G_F/J37</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J1 on this board</text><rect x="30" y="304" width="200" height="330" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="130" y="465" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Smoothieboard</text><text x="130" y="485" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">V2 Prime</text><rect x="770" y="304" width="200" height="330" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 334.0H770" fill="none" stroke="#d92d2d" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="334" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="334" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><text x="216" y="339" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">1</text><text x="784" y="339" text-anchor="start" font-size="14" fill="#eaeaea">1  3.3 V</text><rect x="400" y="323" width="200" height="22" rx="11" fill="#d92d2d" stroke="#d92d2d" stroke-width="1.5"/><text x="500" y="339" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1 to 1: 3.3 V</text><path d="M230 364.0H770" fill="none" stroke="#e8820c" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="364" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">2</text><text x="784" y="369" text-anchor="start" font-size="14" fill="#eaeaea">2  5 V</text><rect x="400" y="353" width="200" height="22" rx="11" fill="#e8820c" stroke="#e8820c" stroke-width="1.5"/><text x="500" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#111">2 to 2: 5 V</text><path d="M230 394.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">3</text><text x="784" y="399" text-anchor="start" font-size="14" fill="#eaeaea">3  </text><rect x="400" y="383" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">3 to 3</text><path d="M230 424.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="429" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">4</text><text x="784" y="429" text-anchor="start" font-size="14" fill="#eaeaea">4  </text><rect x="400" y="413" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="429" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">4 to 4</text><path d="M230 454.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="454" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="454" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="459" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">5</text><text x="784" y="459" text-anchor="start" font-size="14" fill="#eaeaea">5  </text><rect x="400" y="443" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="459" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">5 to 5</text><path d="M230 484.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="484" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="484" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="489" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">6</text><text x="784" y="489" text-anchor="start" font-size="14" fill="#eaeaea">6  </text><rect x="400" y="473" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="489" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">6 to 6</text><path d="M230 514.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="514" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="514" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="519" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">7</text><text x="784" y="519" text-anchor="start" font-size="14" fill="#eaeaea">7  </text><rect x="400" y="503" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="519" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">7 to 7</text><path d="M230 544.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="544" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="544" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="549" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">8</text><text x="784" y="549" text-anchor="start" font-size="14" fill="#eaeaea">8  </text><rect x="400" y="533" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="549" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">8 to 8</text><path d="M230 574.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="574" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="574" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="579" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">9</text><text x="784" y="579" text-anchor="start" font-size="14" fill="#eaeaea">9  </text><rect x="400" y="563" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="579" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">9 to 9</text><path d="M230 604.0H770" fill="none" stroke="#939393" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="604" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="604" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><text x="216" y="609" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">10</text><text x="784" y="609" text-anchor="start" font-size="14" fill="#eaeaea">10  GND</text><rect x="400" y="593" width="200" height="22" rx="11" fill="#939393" stroke="#939393" stroke-width="1.5"/><text x="500" y="609" text-anchor="middle" font-size="13" font-weight="700" fill="#111">10 to 10: GND</text></svg>
  </div>
  <figcaption>Wiring for this procedure. Yellow rings mark the connectors used. Make and change connections with the power off.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Power off and reserve the pins</h3>
    <p>All seven pins are inputs from this board. Remove any other use of PB1, PJ4, PA4, PG0, PJ3, PG1 and PJ2.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the cable</h3>
    <p>Controller G_F (J37) contact n to J1 contact n, for all ten. Leave J2 empty.</p>
  </li>
  <li class="xb-step">
    <h3>Configure</h3>
    <p>Add the settings of example 2 below and power up.</p>
  </li>
  <li class="xb-step">
    <h3>Press button 1</h3>
    <p>Watch the console.</p>
    <p class="xb-expect">The console prints <code>Button 1</code> on each press.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>A halt button</td><td>Button box</td><td><a href="#config-kill">1</a></td></tr>
    <tr><td>A command per button</td><td>Button box</td><td><a href="#config-all">2</a></td></tr>
    <tr><td>To read a button</td><td>Switch, input</td><td><a href="#config-input">3</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### 1. Halt button (button box) {#config-kill}

Button 1, on PB1. Pressing it halts the controller; releasing it does not resume.

```ini
[button box]
raw_button.enable = true
raw_button.pin = PB1!^
raw_button.press = KILL
```

<code>^</code> enables the internal pull-up and <code>!</code> inverts the input. A button already held at start-up can trigger at once. This is a software halt, not an emergency stop ([button box source](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/utils/buttonbox/buttonbox.cpp)).

### 2. A command on each button (button box) {#config-all}

Replaces example 1. Change each <code>press</code> line to the command that button should run.

```ini
[button box]
common.poll_frequency_hz = 100
button_1.enable = true
button_1.pin = PB1!^
button_1.press = echo Button 1

button_2.enable = true
button_2.pin = PJ4!^
button_2.press = echo Button 2

button_3.enable = true
button_3.pin = PA4!^
button_3.press = echo Button 3

button_4.enable = true
button_4.pin = PG0!^
button_4.press = echo Button 4

button_5.enable = true
button_5.pin = PJ3!^
button_5.press = echo Button 5

button_6.enable = true
button_6.pin = PG1!^
button_6.press = echo Button 6

button_7.enable = true
button_7.pin = PJ2!^
button_7.press = echo Button 7
```

### 3. Input that you can read (switch module) {#config-input}

Reads button 1 without doing anything else. This entry replaces the button box entry for PB1: one pin can be claimed by one entry only.

```ini
[switch]
raw_input.enable = true
raw_input.input_pin = PB1!^
raw_input.input_pin_behavior = momentary
```

Send <code>switch raw_input</code> in the console to read it ([switch source](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/switch/Switch.cpp)).

The board&rsquo;s own pull-ups hold the pins high, so the <code>^</code> internal pull-up is optional.

## How it works {#how-it-works}

A released button leaves its input pulled to 3.3&nbsp;V through 10&nbsp;k&Omega;. Pressing it connects the input to ground through 1&nbsp;k&Omega;, and the 100&nbsp;nF capacitor smooths contact bounce. Each button has its own pin, so several can be pressed together.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 142" role="img" aria-labelledby="xb-button-boards-path"><title id="xb-button-boards-path">Button released, input held at 3.3 V by 10 kΩ then Button pressed, grounded through 1 kΩ then 100 nF capacitor, smooths bounce then Controller pin, one per button.</title><rect x="20" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="127" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Button released</text><text x="127" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3">input held at 3.3 V by 10 kΩ</text><rect x="268" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="376" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Button pressed</text><text x="376" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3">grounded through 1 kΩ</text><path d="M238.5 70H259.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M258 63L266 70L258 77Z" fill="#5fb3ff"/><rect x="517" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="624" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">100 nF capacitor</text><text x="624" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3">smooths bounce</text><path d="M487.0 70H508.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M506 63L515 70L506 77Z" fill="#5fb3ff"/><rect x="766" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="873" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Controller pin</text><text x="873" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3">one per button</text><path d="M735.5 70H756.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M754 63L764 70L754 77Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board.</figcaption>
</figure>
{:/nomarkdown}


## Chaining {#chaining}

{::nomarkdown}
{% include _includes/extension-chain-figure.html id="xb-bb" board="button board" in_label="IN" chain_label="CHAIN" lane1="pin 3" lane2="pin 4" lane3="pin 5" s1="open" s2="open" s3="open" caption="As delivered every link is open: no button signal continues. Bridge a link to share that button." %}
{:/nomarkdown}

Supply rails and ground pass to the chain socket directly. A bridged button signal is shared with the next board, so nothing there may drive it high. To free a pin completely for another board, remove that button&rsquo;s two resistors and capacitor, then bridge its link (printed on the board).

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>A button does nothing</td><td>Cable contact numbers and the pin name.</td></tr>
    <tr><td>Command runs at start-up</td><td>The button is held, or the pin lacks the <code>!</code> inversion.</td></tr>
    <tr><td>Several commands from one press</td><td>Check for a short between neighbouring cable contacts.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/button-boards/v14/button-boards-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/button-boards/v14/button-boards-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/button-boards/v14/button-boards-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-bb-mount-t">
  <title id="xb-bb-mount-t">Mounting drawing of the bb, component side: outline 33 by 41.5 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="344.8" y="78.0" width="270.4" height="340.0" rx="0.0" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M344.8 56H615.2"/><path d="M344.8 50V62"/><path d="M615.2 50V62"/><path d="M641.2 78.0V418.0"/><path d="M635.2 78.0h12"/><path d="M635.2 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">33</text>
  <text x="653.2" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">41.5</text>
  <circle cx="344.8" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="332.8" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M286.8 104.0h30" fill="none"/><path d="M320.8 104.0l-8 -4v8z"/><path d="M286.8 104.0v30" fill="none"/><path d="M286.8 138.0l-4 -8h8z"/></g>
  <text x="324.8" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="282.8" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="398.1" cy="384.4" r="13.1" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M381.0 384.4h34.2M398.1 367.3v34.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="385.0" y="361.3" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  6.50, 37.40</text>
  <circle cx="561.9" cy="384.4" r="13.1" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M544.8 384.4h34.2M561.9 367.3v34.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="575.0" y="361.3" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  26.50, 37.40</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 33 × 41.5&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>6.50</td><td>37.40</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>26.50</td><td>37.40</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Values from the parts list and board printing.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Supply</td><td>3.3 V rail</td><td>—</td><td>3.3 V</td><td>—</td><td>From the controller</td></tr>
    <tr><td>Pull-up</td><td>Each input</td><td>—</td><td>10 kΩ</td><td>—</td><td>Parts list</td></tr>
    <tr><td>Series resistor</td><td>Each button</td><td>—</td><td>1 kΩ</td><td>—</td><td>Parts list</td></tr>
    <tr><td>Filter capacitor</td><td>Each input</td><td>—</td><td>100 nF</td><td>—</td><td>X7R, parts list</td></tr>
    <tr><td>Poll rate</td><td>Host</td><td>100 Hz</td><td>—</td><td>—</td><td>Board silk</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Originally designed by Bob Cousins.

See all boards on the [extension boards](/extension-boards) page.
