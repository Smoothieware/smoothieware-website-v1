---
layout: default
title: "Gadgeteer perma-proto"
description: "A solderable breadboard-style prototype board on a Smoothieboard Gadgeteer port, with three worked projects."
permalink: /extensions/perma-proto-gadgeteer
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Prototyping</p>
    <h1 id="perma-proto-gadgeteer">Gadgeteer perma-proto</h1>
    <p class="xb-lead">Solder your own circuit onto a breadboard-style board that plugs into seven controller pins with one ribbon cable.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/perma-proto-gadgeteer/perma-proto-gadgeteer-diagram.png" alt="Top view of the perma-proto board: two fields of gold holes, four power rails and the connector in the middle">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>7</b><span>controller signal pins</span></div>
  <div class="xb-stat"><b>60</b><span>five-hole strips</span></div>
  <div class="xb-stat"><b>4 × 30</b><span>rail holes</span></div>
  <div class="xb-stat"><b>3.3 V + 5 V</b><span>from the controller</span></div>
  <div class="xb-stat"><b>100 mA</b><span>per supply rail, design target</span></div>
  <div class="xb-stat"><b>86 × 62 mm</b><span>board size</span></div>
</div>

<nav class="xb-nav" aria-label="On this page">
  <a href="#specs">Tech specs</a>
  <a href="#tour">Board tour</a>
  <a href="#pinout">Pinout</a>
  <a href="#what-you-need">What you need</a>
  <a href="#get-started">Get started</a>
  <a href="#configuration">Configuration</a>
  <a href="#how-it-works">How it works</a>
  <a href="#projects">Example projects</a>
  <a href="#troubleshooting">Troubleshooting</a>
  <a href="#downloads">Downloads</a>
  <a href="#mounting">Mounting</a>
  <a href="#electrical">Electrical</a>
  <a href="#datasheets">Datasheets</a>
</nav>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  This board has no fuse, reverse-polarity, overcurrent or static protection. It carries low voltage only: never connect mains. Feed its rails from the controller only, and unplug the cable before soldering.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Type</td><td>Passive solderable prototype board</td></tr>
    <tr><td>Prototype area</td><td>30 columns in two halves of five holes (A–E, F–J)</td></tr>
    <tr><td>Rails</td><td>+5 V and ground at the top, +3.3 V and ground at the bottom, 30 holes each</td></tr>
    <tr><td>Hole pitch</td><td>2.54 mm; wider gap across the middle</td></tr>
    <tr><td>Connector</td><td>Gadgeteer type Y, 10 pins, 1.27 mm pitch, Samtec SHF-105-01-L-D-TH-LC</td></tr>
    <tr><td>Signals</td><td>Seven, connected straight to the controller</td></tr>
    <tr><td>Supply load</td><td>100 mA per positive rail (design target); less if your controller or cable allows less</td></tr>
    <tr><td>Size</td><td>86 × 62 mm, two mounting holes</td></tr>
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
      <img src="/images/extensions/perma-proto-gadgeteer/perma-proto-gadgeteer-diagram.png" alt="Top view of the perma-proto board with numbered markers">
      <a class="xb-mk" href="#tour-1" style="left:50.0%;top:51.6%" aria-label="1: Ribbon connector">1<span class="xb-pop"><b>Ribbon connector</b> — Ten pins to the controller. Check the notch before plugging in.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-2" style="left:23.9%;top:10.9%" aria-label="2: +5 V rail">2<span class="xb-pop"><b>+5 V rail</b> — Thirty joined holes fed by connector pin 2.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-3" style="left:85.2%;top:14.9%" aria-label="3: Upper ground rail">3<span class="xb-pop"><b>Upper ground rail</b> — Thirty joined ground holes.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-4" style="left:8.1%;top:32.8%" aria-label="4: Upper strips">4<span class="xb-pop"><b>Upper strips</b> — Each column of holes A to E is one connection.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:39.9%;top:25.0%" aria-label="5: Column 12, GPIO 1">5<span class="xb-pop"><b>Column 12, GPIO 1</b> — The first signal arrives here. Columns 14, 16 and 18 carry GPIO 3, 5 and 7.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:42.8%;top:78.1%" aria-label="6: Column 13, GPIO 2">6<span class="xb-pop"><b>Column 13, GPIO 2</b> — Lower half. Columns 15 and 17 carry GPIO 4 and 6.</span></a>
      <a class="xb-mk xb-pr" href="#tour-7" style="left:80.7%;top:70.3%" aria-label="7: Lower strips">7<span class="xb-pop"><b>Lower strips</b> — Each column of holes F to J is one connection.</span></a>
      <a class="xb-mk xb-pl" href="#tour-8" style="left:23.9%;top:88.2%" aria-label="8: +3.3 V rail">8<span class="xb-pop"><b>+3.3 V rail</b> — Thirty joined holes fed by connector pin 1. Use it for signal pull-ups.</span></a>
      <a class="xb-mk xb-pr" href="#tour-9" style="left:80.7%;top:92.2%" aria-label="9: Lower ground rail">9<span class="xb-pop"><b>Lower ground rail</b> — Joined to the upper ground rail.</span></a>
      <a class="xb-mk xb-pl" href="#tour-10" style="left:4.5%;top:51.6%" aria-label="10: Mounting hole">10<span class="xb-pop"><b>Mounting hole</b> — One of two; see the dimensions appendix.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Ribbon connector</b> — Ten pins to the controller. Check the notch before plugging in.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>+5 V rail</b> — Thirty joined holes fed by connector pin 2.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Upper ground rail</b> — Thirty joined ground holes.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Upper strips</b> — Each column of holes A to E is one connection.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Column 12, GPIO 1</b> — The first signal arrives here. Columns 14, 16 and 18 carry GPIO 3, 5 and 7.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Column 13, GPIO 2</b> — Lower half. Columns 15 and 17 carry GPIO 4 and 6.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Lower strips</b> — Each column of holes F to J is one connection.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>+3.3 V rail</b> — Thirty joined holes fed by connector pin 1. Use it for signal pull-ups.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Lower ground rail</b> — Joined to the upper ground rail.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Mounting hole</b> — One of two; see the dimensions appendix.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

Header `J37` (G_F) of the Smoothieboard V2 Prime. The signal pins are 3.3 V logic; do not apply 5 V to them (PB1, PA4 and PG1 are not 5 V tolerant).

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Connector pin</th><th>Signal</th><th>On this board</th><th>Prime J37</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>+3.3 V rail (bottom)</td><td>Pin 1, 3.3 V</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>+5 V rail (top)</td><td>Pin 2, 5 V</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">GPIO 1</span></td><td>Upper column 12</td><td>PB1</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">GPIO 2</span></td><td>Lower column 13</td><td>PJ4</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">GPIO 3</span></td><td>Upper column 14</td><td>PA4</td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">GPIO 4</span></td><td>Lower column 15</td><td>PG0</td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-sig">GPIO 5</span></td><td>Upper column 16</td><td>PJ3</td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">GPIO 6</span></td><td>Lower column 17</td><td>PG1</td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">GPIO 7</span></td><td>Upper column 18</td><td>PJ2</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Both ground rails</td><td>Pin 10, ground</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Each column of five holes (A to E above the middle, F to J below) is one connection. Neighbouring columns, and the upper and lower halves of one column, are separate. Each of the four 30-hole rails is one connection; the two ground rails are joined.

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Controller</b><span>A Smoothieboard V2 Prime, or another controller whose pins you have checked against the table above.</span></div>
  <div class="xb-card"><b>Cable</b><span>A 1.27 mm, 2 × 5 ribbon cable for the board end (Samtec FFSD or FFTP families mate with the fitted header). Check the controller end separately: the Prime J37 footprint has no specified mating cable.</span></div>
  <div class="xb-card"><b>Soldering tools</b><span>Iron, solder, 0.5 mm solid insulated wire, side cutters and a multimeter.</span></div>
  <div class="xb-card"><b>Your parts</b><span>Through-hole components. Each project below lists its own.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

Start with the simplest circuit, one button between a signal and ground, to prove the cable and your pin numbering.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/perma-proto-gadgeteer/projects/button.png"><img src="/images/extensions/perma-proto-gadgeteer/projects/button.png" alt="Perma-proto board with a push button wired between column 12 and the upper ground rail" style="display:block;width:100%;height:auto;margin:0 auto"></a>
  <figcaption>One normally-open button: yellow to column 12 (GPIO 1, pin PB1), black to the upper ground rail. Select the drawing to open it full size.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Solder two wires</h3>
    <p>With the cable unplugged, wire one button terminal to hole <code>A12</code> and the other to any hole of the upper ground rail.</p>
  </li>
  <li class="xb-step">
    <h3>Check with a meter</h3>
    <p>Connector pin 3 and pin 10 must be open with the button released and connected with it pressed.</p>
  </li>
  <li class="xb-step">
    <h3>Check the cable</h3>
    <p>Use only a cable whose pin numbering you have confirmed at both ends with a continuity test. Connect with the power off.</p>
  </li>
  <li class="xb-step">
    <h3>Configure and test</h3>
    <p>Add the setting below, power up with the button released, and keep machine loads disabled for the test.</p>
    <p class="xb-expect">Pressing the button halts the controller. Releasing it does not clear the halt.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>A button that halts</td><td>Button box</td><td><a href="#config-main">Setup</a></td></tr>
    <tr><td>A touch switch</td><td>Switch</td><td><a href="#project-touch">Setup</a></td></tr>
    <tr><td>A solenoid that taps while on</td><td>Switch</td><td><a href="#project-tapper">Setup</a></td></tr>
    <tr><td>A hand-turned jog wheel</td><td>MPG</td><td><a href="#project-wheel">Setup</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Setup {#config-main}

The setting for the button of Get started. The three projects have their own: [touch switch](#project-touch), [tapper](#project-tapper) and [handwheel](#project-wheel). They share some pins, and a pin can be claimed by one setting only.

```ini
[button box]
raw_button.enable = true
raw_button.pin = PB1!^
raw_button.press = KILL
```

`^` enables the pull-up and `!` makes a ground connection count as a press ([button box source](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/utils/buttonbox/buttonbox.cpp)). This is a software halt, not an emergency stop, and a broken wire goes unnoticed. A button already held at start-up can trigger at once.

## How it works {#how-it-works}

The board is copper and holes only. Seven connector pins and both supplies are wired to fixed columns and rails; everything else is yours to connect with component leads and wires. It cannot change voltage levels or protect a pin, so your circuit must keep signals between 0 and 3.3 V.

## Three example projects {#projects}

Each project uses its own board. The drawings are made from the same hole list as the tables, and that list was checked by script for open and shorted connections. The circuits were designed from datasheet figures, and the numbers given are calculated, not measured. Solder with the ribbon cable unplugged, check every connection with a meter, and check the output voltage before you plug in: no signal pin may see more than 3.3 V.

Hole names follow the board printing: `H7` is row H, column 7. A rail hole such as "+5 V rail 19" is the nineteenth hole of that rail. Black wires are ground.

### Project 1: touch plate switch {#project-touch}

Touch a bare metal plate and an LED turns on; touch it again and it turns off. Your body picks up a little of the 50 or 60 Hz field from the mains wiring around you. When you touch the plate, three transistors in a chain amplify that tiny current enough to pull a controller input low. C1 fills the gaps between mains half-cycles so that the controller sees one steady press.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/perma-proto-gadgeteer/projects/touch.png"><img src="/images/extensions/perma-proto-gadgeteer/projects/touch.png" alt="Perma-proto board populated with three transistors, resistors, a diode, a capacitor and an LED, wired to a metal touch plate" style="display:block;width:100%;height:auto;margin:0 auto"></a>
  <figcaption>The touch switch. Yellow carries the signal to GPIO 1 (pin PB1); LED1 is driven by GPIO 3 (pin PA4). Select the drawing to open it full size.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Part</th><th>What</th><th>Holes</th><th>Job</th></tr></thead>
  <tbody>
    <tr><td>R1</td><td>1 MΩ resistor, 1/4 W</td><td>H2 to H7</td><td>protects the first transistor from static on the plate</td></tr>
    <tr><td>D1</td><td>1N4148 diode (band = cathode)</td><td>band end in I7, other end in lower ground rail 7</td><td>gives the negative half of the pickup a path to ground</td></tr>
    <tr><td>R2</td><td>10 MΩ resistor, 1/4 W</td><td>J4 to J7</td><td>ignores very small leakage currents</td></tr>
    <tr><td>Q1</td><td>2N3904 NPN transistor, TO-92</td><td>E in F6, B in F7, C in F8</td><td>first of three amplifying transistors</td></tr>
    <tr><td>Q2</td><td>2N3904 NPN transistor, TO-92</td><td>E in F10, B in F11, C in F12</td><td>second transistor</td></tr>
    <tr><td>Q3</td><td>2N3904 NPN transistor, TO-92</td><td>E in F19, B in F20, C in F21</td><td>pulls the controller input low</td></tr>
    <tr><td>R3</td><td>100 kΩ resistor, 1/4 W</td><td>I8 to +3.3 V rail 8</td><td>limits Q1</td></tr>
    <tr><td>R4</td><td>10 kΩ resistor, 1/4 W</td><td>I12 to +3.3 V rail 12</td><td>limits Q2</td></tr>
    <tr><td>R5</td><td>100 kΩ resistor, 1/4 W</td><td>I20 to lower ground rail 20</td><td>keeps Q3 off when nothing touches</td></tr>
    <tr><td>R6</td><td>100 Ω resistor, 1/4 W</td><td>H21 to H25</td><td>limits the capacitor discharge current</td></tr>
    <tr><td>R7</td><td>10 kΩ resistor, 1/4 W</td><td>I25 to +3.3 V rail 25</td><td>holds the input high</td></tr>
    <tr><td>C1</td><td>4.7 µF electrolytic capacitor, 16 V or more</td><td>+ in G25, − in G26</td><td>keeps the input low between mains half-cycles</td></tr>
    <tr><td>R8</td><td>1 kΩ resistor, 1/4 W</td><td>D9 to D14</td><td>LED current limit</td></tr>
    <tr><td>LED1</td><td>3 mm LED indicator LED</td><td>− in B8, + in B9</td><td>the lamp the plate switches</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Wire</th><th>From</th><th>To</th></tr></thead>
  <tbody>
    <tr><td>Top: black</td><td>I4</td><td>lower ground rail 4</td></tr>
    <tr><td>Top: green</td><td>G6</td><td>G11</td></tr>
    <tr><td>Top: violet</td><td>H10</td><td>H20</td></tr>
    <tr><td>Top: black</td><td>J19</td><td>lower ground rail 19</td></tr>
    <tr><td>Top: black</td><td>J26</td><td>lower ground rail 26</td></tr>
    <tr><td>Top: yellow</td><td>F25</td><td>E12</td></tr>
    <tr><td>Top: black</td><td>A8</td><td>upper ground rail 8</td></tr>
    <tr><td>Off board: white</td><td>F2</td><td>the metal plate</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Use a plate of copper, brass or steel, a few centimetres across, on a wire under 20 cm. Connect the plate to nothing else, and never to anything powered. Sensitivity depends on the mains wiring nearby: far from any mains cable, or with a battery-powered machine outdoors, the circuit may not respond.

```ini
[switch]
touch.enable = true
touch.input_pin = PB1!^
touch.input_pin_behavior = toggle
touch.output_on_command = M42
touch.output_off_command = M43

lamp.enable = true
lamp.output_pin = PA4
lamp.output_type = digital
lamp.input_on_command = M42
lamp.input_off_command = M43
```

`!` makes the low signal count as a press and `^` enables the pull-up. `toggle` changes state once per touch; use `momentary` to keep the lamp on only while you touch ([switch source](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/switch/Switch.cpp)). **Test:** type `M42` and `M43` in the console and watch the LED, then touch the plate. If it flickers, shorten the plate wire or raise C1 to 10 µF.

### Project 2: 555 solenoid tapper {#project-tapper}

While a Gadgeteer signal is on, a solenoid taps about seven times a second without any further commands: shake a hopper, knock a sticking part loose or ring a small bell. The <a href="/images/extensions/perma-proto-gadgeteer/datasheets/tlc555.pdf">TLC555</a> runs as a repeating timer whose reset pin is the controller signal. Calculated timing: about 76 ms on and 69 ms off (the first pulse after switching on is longer).

**Prepare the board first.** A DIP chip cannot sit on uncut strips: each column of five holes is one connection, so the two pins in a column would be shorted. With a sharp knife, cut the copper link on the **underside** between rows C and D in columns 20, 21, 22 and 23. Confirm with a meter that row B and row E no longer connect in each of those four columns. The cuts cannot be undone without a solder bridge.

The chip covers the holes in rows C and D, so the pins in row E are wired from underneath: solder a thin insulated wire to the row D pad and bring its other end up through the hole listed. The drawing shows these as dashed light-blue lines.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/perma-proto-gadgeteer/projects/tapper.png"><img src="/images/extensions/perma-proto-gadgeteer/projects/tapper.png" alt="Perma-proto board populated with a TLC555 timer, a MOSFET, a flyback diode and passives, wired to a solenoid and its supply" style="display:block;width:100%;height:auto;margin:0 auto"></a>
  <figcaption>The tapper. Yellow brings the on/off signal from GPIO 2 (pin PJ4). The solenoid has its own supply. Select the drawing to open it full size.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Part</th><th>What</th><th>Holes</th><th>Job</th></tr></thead>
  <tbody>
    <tr><td>U1</td><td><a href="/images/extensions/perma-proto-gadgeteer/datasheets/tlc555.pdf">TLC555</a> DIP-8 chip</td><td>pins 8, 7, 6, 5 in B20–B23; pins 1, 2, 3, 4 in E20–E23</td><td>timer in a repeating (astable) circuit</td></tr>
    <tr><td>C3</td><td>100 nF ceramic capacitor</td><td>+5 V rail 19 to upper ground rail 19</td><td>supply decoupling</td></tr>
    <tr><td>R1</td><td>10 kΩ resistor, 1/4 W</td><td>+5 V rail 25 to A25</td><td>timing</td></tr>
    <tr><td>R2</td><td>100 kΩ resistor, 1/4 W</td><td>C25 to C29</td><td>timing</td></tr>
    <tr><td>C1</td><td>1 µF electrolytic capacitor, 16 V or more</td><td>+ in B29, − in B30</td><td>timing capacitor</td></tr>
    <tr><td>C2</td><td>10 nF ceramic capacitor</td><td>A23 to upper ground rail 23</td><td>steadies the control pin</td></tr>
    <tr><td>R5</td><td>100 kΩ resistor, 1/4 W</td><td>J13 to lower ground rail 13</td><td>keeps the timer stopped when the input is not driven</td></tr>
    <tr><td>R3</td><td>100 Ω resistor, 1/4 W</td><td>G22 to G26</td><td>gate series resistor</td></tr>
    <tr><td>R4</td><td>100 kΩ resistor, 1/4 W</td><td>J26 to lower ground rail 26</td><td>keeps the transistor off</td></tr>
    <tr><td>Q1</td><td><a href="/images/extensions/perma-proto-gadgeteer/datasheets/irlz44n.pdf">IRLZ44N</a> logic-level N-channel MOSFET, TO-220</td><td>G in I26, D in I27, S in I28</td><td>switches the coil</td></tr>
    <tr><td>D1</td><td>1N4007 diode (band = cathode)</td><td>band end in G29, other end in G27</td><td>absorbs the coil&rsquo;s voltage spike</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Wire</th><th>From</th><th>To</th></tr></thead>
  <tbody>
    <tr><td>Top: red</td><td>A20</td><td>+5 V rail 20</td></tr>
    <tr><td>Top: blue</td><td>A21</td><td>B25</td></tr>
    <tr><td>Top: green</td><td>A22</td><td>A29</td></tr>
    <tr><td>Top: black</td><td>A30</td><td>upper ground rail 30</td></tr>
    <tr><td>Top: black</td><td>J28</td><td>lower ground rail 28</td></tr>
    <tr><td>Top: yellow</td><td>F13</td><td>E24</td></tr>
    <tr><td><b>Underside</b>, thin insulated</td><td>pad D20 (chip pin)</td><td>upper ground rail 20</td></tr>
    <tr><td><b>Underside</b>, thin insulated</td><td>pad D22 (chip pin)</td><td>F22</td></tr>
    <tr><td><b>Underside</b>, thin insulated</td><td>pad D23 (chip pin)</td><td>D24</td></tr>
    <tr><td><b>Underside</b>, thin insulated</td><td>pad D21 (chip pin)</td><td>D29</td></tr>
    <tr><td>Off board: blue</td><td>F27</td><td>solenoid, second wire</td></tr>
    <tr><td>Off board: red</td><td>F29</td><td>solenoid, first wire</td></tr>
    <tr><td>Off board: orange</td><td>H29</td><td>coil supply +</td></tr>
    <tr><td>Off board: black</td><td>F28</td><td>coil supply −</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

- **The solenoid has its own power supply**, matched to the coil (for example 12 V for a 12 V coil). Never feed the coil from the board&rsquo;s rails or the ribbon cable. The only link between the two supplies is ground.
- As a starting point, choose a coil of 24 V DC or less that draws 0.5 A or less. This is a suggestion, not a rating: the current and voltage limits of this board&rsquo;s copper have not been established. Solder the five coil-side wires directly and keep them short.
- Check the coil&rsquo;s permitted duty cycle. Tapping holds it on about half the time, which can overheat a solenoid rated for short pulses.
- Fit D1 with its band towards the supply positive wire. Reversed, it short-circuits the coil supply.
- To change the speed, change R2: roughly 1.44 / ((R1 + 2 × R2) × C1) taps per second.

```ini
[switch]
tapper.enable = true
tapper.output_pin = PJ4
tapper.output_type = digital
tapper.input_on_command = M44
tapper.input_off_command = M45
tapper.startup_state = false
tapper.halt_set_to = false
```

**Test** with the coil supply off: `M44` should make pin 3 of the chip pulse (a meter reads about half of 5 V) and `M45` should return it to 0 V. Then switch the coil supply on. `M400` before `M44` makes the command wait for queued movement to finish. A software halt switches the output off; it is not a safety function.

### Project 3: a stepper motor as a handwheel {#project-wheel}

Turn the shaft of a spare 4-wire stepper motor by hand and an axis moves, like the wheel on an MPG pendant. A turning stepper is a small generator: its two coils produce two alternating voltages a quarter cycle apart. The <a href="/images/extensions/perma-proto-gadgeteer/datasheets/lm393.pdf">LM393</a> turns each into a clean 0 / 3.3 V square wave, giving the A and B signals of an incremental encoder. R5 and R6 add about 70 mV of calculated hysteresis so that noise does not produce counts.

**Prepare the board first.** A DIP chip cannot sit on uncut strips: each column of five holes is one connection, so the two pins in a column would be shorted. With a sharp knife, cut the copper link on the **underside** between rows C and D in columns 20, 21, 22 and 23. Confirm with a meter that row B and row E no longer connect in each of those four columns. The cuts cannot be undone without a solder bridge.

The chip covers the holes in rows C and D, so the pins in row E are wired from underneath: solder a thin insulated wire to the row D pad and bring its other end up through the hole listed. The drawing shows these as dashed light-blue lines.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/perma-proto-gadgeteer/projects/wheel.png"><img src="/images/extensions/perma-proto-gadgeteer/projects/wheel.png" alt="Perma-proto board populated with an LM393 comparator, four diodes and passives, wired to the two coils of a stepper motor" style="display:block;width:100%;height:auto;margin:0 auto;max-width:640px"></a>
  <figcaption>The handwheel interface. Encoder A goes to GPIO 5 (pin PJ3) and B to GPIO 7 (pin PJ2). Select the drawing to open it full size.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Part</th><th>What</th><th>Holes</th><th>Job</th></tr></thead>
  <tbody>
    <tr><td>U1</td><td><a href="/images/extensions/perma-proto-gadgeteer/datasheets/lm393.pdf">LM393</a> DIP-8 chip</td><td>pins 8, 7, 6, 5 in B20–B23; pins 1, 2, 3, 4 in E20–E23</td><td>two comparators, one per coil</td></tr>
    <tr><td>C2</td><td>100 nF ceramic capacitor</td><td>+5 V rail 19 to upper ground rail 19</td><td>supply decoupling</td></tr>
    <tr><td>R1</td><td>10 kΩ resistor, 1/4 W</td><td>+5 V rail 27 to A27</td><td>half of the 2.5 V reference</td></tr>
    <tr><td>R2</td><td>10 kΩ resistor, 1/4 W</td><td>D24 to D27</td><td>half of the 2.5 V reference</td></tr>
    <tr><td>C1</td><td>10 µF electrolytic capacitor, 16 V or more</td><td>+ in C27, − in C28</td><td>steadies the reference</td></tr>
    <tr><td>R3</td><td>10 kΩ resistor, 1/4 W</td><td>G2 to G6</td><td>coil A input protection</td></tr>
    <tr><td>R5</td><td>470 kΩ resistor, 1/4 W</td><td>H6 to H10</td><td>hysteresis, channel A</td></tr>
    <tr><td>R7</td><td>4.7 kΩ resistor, 1/4 W</td><td>J10 to +3.3 V rail 10</td><td>pull-up to 3.3 V, output A</td></tr>
    <tr><td>D1</td><td>BAT85 diode (band = cathode)</td><td>band end in J6, other end in lower ground rail 6</td><td>clamp to ground, channel A</td></tr>
    <tr><td>D2</td><td>BAT85 diode (band = cathode)</td><td>band end in I3, other end in I6</td><td>clamp to 5 V, channel A</td></tr>
    <tr><td>R4</td><td>10 kΩ resistor, 1/4 W</td><td>G25 to G29</td><td>coil B input protection</td></tr>
    <tr><td>R6</td><td>470 kΩ resistor, 1/4 W</td><td>H21 to H25</td><td>hysteresis, channel B</td></tr>
    <tr><td>R8</td><td>4.7 kΩ resistor, 1/4 W</td><td>J21 to +3.3 V rail 21</td><td>pull-up to 3.3 V, output B</td></tr>
    <tr><td>D3</td><td>BAT85 diode (band = cathode)</td><td>band end in J25, other end in lower ground rail 25</td><td>clamp to ground, channel B</td></tr>
    <tr><td>D4</td><td>BAT85 diode (band = cathode)</td><td>band end in I28, other end in I25</td><td>clamp to 5 V, channel B</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Wire</th><th>From</th><th>To</th></tr></thead>
  <tbody>
    <tr><td>Top: red</td><td>A20</td><td>+5 V rail 20</td></tr>
    <tr><td>Top: black</td><td>A24</td><td>upper ground rail 24</td></tr>
    <tr><td>Top: black</td><td>A28</td><td>upper ground rail 28</td></tr>
    <tr><td>Top: violet</td><td>A22</td><td>B27</td></tr>
    <tr><td>Top: violet</td><td>E27</td><td>F12</td></tr>
    <tr><td>Top: green</td><td>C19</td><td>G10</td></tr>
    <tr><td>Top: blue</td><td>C26</td><td>F6</td></tr>
    <tr><td>Top: orange</td><td>A23</td><td>F25</td></tr>
    <tr><td>Top: yellow</td><td>A21</td><td>G21</td></tr>
    <tr><td>Top: green</td><td>F10</td><td>E16</td></tr>
    <tr><td>Top: yellow</td><td>F21</td><td>E18</td></tr>
    <tr><td>Top: red</td><td>F3</td><td>+5 V rail 3</td></tr>
    <tr><td>Top: red</td><td>F28</td><td>+5 V rail 28</td></tr>
    <tr><td><b>Underside</b>, thin insulated</td><td>pad D20 (chip pin)</td><td>D19</td></tr>
    <tr><td><b>Underside</b>, thin insulated</td><td>pad D21 (chip pin)</td><td>G12</td></tr>
    <tr><td><b>Underside</b>, thin insulated</td><td>pad D22 (chip pin)</td><td>D26</td></tr>
    <tr><td><b>Underside</b>, thin insulated</td><td>pad D23 (chip pin)</td><td>upper ground rail 23</td></tr>
    <tr><td>Off board: red</td><td>J2</td><td>motor coil A, first wire</td></tr>
    <tr><td>Off board: green</td><td>H12</td><td>motor coil A, second wire</td></tr>
    <tr><td>Off board: blue</td><td>J29</td><td>motor coil B, first wire</td></tr>
    <tr><td>Off board: yellow</td><td>I12</td><td>motor coil B, second wire</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

- Use a motor that is connected to **nothing else**, in particular not to a stepper driver. Find each coil pair with a meter: the two wires of one coil show a low resistance.
- Use Schottky diodes such as BAT85 for D1 to D4. The comparator inputs must not go much below 0 V.
- Turn the shaft firmly. Very slow turning produces too little voltage to count, and a motor with more turns or a higher inductance works at lower speed. Spin it by hand only, never with a drill.
- If the axis moves the wrong way, swap the two wires of one coil.

```ini
[mpg]
x.enable = true
x.enca_pin = PJ3
x.encb_pin = PJ2
x.mmperpulse = 0.1
```

The [MPG module](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/utils/mpg/mpg.cpp) reads the two pins as interrupts and counts one pulse per full A/B cycle. A 200-step (1.8°) motor gives a calculated 50 pulses per turn, so `0.1` moves X by 5 mm per turn at the axis&rsquo;s maximum rate. `M922 X0.01` changes the distance while running. Replace `x.` with `y.` or `z.` for another axis, or use `shared.` to pick the axis with `M922`. The two pins must have different pin numbers (here 3 and 2) that no other interrupt uses. This syntax needs firmware that includes the linked version of the module; older builds used `axis =` keys instead.

**Test** with motor power disconnected from the machine&rsquo;s drivers or the axis free to move: check that A and B each switch between about 0 V and 3.3 V as you turn, then turn one revolution and compare the reported X position.


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Nothing responds</td><td>Check the pin in the table above, the cable numbering, and that the setting loaded without an error at start-up.</td></tr>
    <tr><td>A signal is always active</td><td>Look for a solder bridge between neighbouring columns, or a wire in the wrong half of a column.</td></tr>
    <tr><td>Controller resets or the supply drops</td><td>Unplug at once and check for a short between a rail and ground, then the load on the 5 V and 3.3 V rails.</td></tr>
    <tr><td>Touch plate does nothing</td><td>Test the LED with M42; touch near mains-powered equipment; check the transistor E, B, C order against its datasheet.</td></tr>
    <tr><td>Tapper silent</td><td>Measure chip pin 4 (near 3.3 V when on) and pin 8 (5 V); then check the coil supply and the four underside cuts.</td></tr>
    <tr><td>Handwheel does not move the axis</td><td>Check both outputs switch, the coil pairs, and that the start-up log shows the MPG loaded.</td></tr>
    <tr><td>Handwheel jitters back and forth</td><td>One channel is not switching: check its coil wires, feedback resistor and clamp diodes.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/perma-proto-gadgeteer/v15/perma-proto-gadgeteer-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/perma-proto-gadgeteer/v15/perma-proto-gadgeteer-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/perma-proto-gadgeteer/perma-proto-gadgeteer-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
    <tr><td><a href="/assets/downloads/extensions/perma-proto-gadgeteer/perma-cad-study.zip">CAD files (ZIP)</a></td><td>KiCad 9 board, schematic, footprints and licence texts (CERN-OHL-S-2.0)</td></tr>
    <tr><td><a href="/images/extensions/perma-proto-gadgeteer/projects/touch.png">Touch switch drawing (PNG)</a></td><td>Populated board, full size</td></tr>
    <tr><td><a href="/images/extensions/perma-proto-gadgeteer/projects/tapper.png">Tapper drawing (PNG)</a></td><td>Populated board, full size</td></tr>
    <tr><td><a href="/images/extensions/perma-proto-gadgeteer/projects/wheel.png">Handwheel drawing (PNG)</a></td><td>Populated board, full size</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-pp-mount-t">
  <title id="xb-pp-mount-t">Mounting drawing of the Gadgeteer perma-proto, component side: outline 86 by 62 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="244.2" y="78.0" width="471.6" height="340.0" rx="11.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M244.2 56H715.8"/><path d="M244.2 50V62"/><path d="M715.8 50V62"/><path d="M741.8 78.0V418.0"/><path d="M735.8 78.0h12"/><path d="M735.8 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">86</text>
  <text x="753.8" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">62</text>
  <circle cx="244.2" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="232.2" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M186.2 104.0h30" fill="none"/><path d="M220.2 104.0l-8 -4v8z"/><path d="M186.2 104.0v30" fill="none"/><path d="M186.2 138.0l-4 -8h8z"/></g>
  <text x="224.2" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="182.2" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="260.6" cy="253.5" r="8.8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M247.9 253.5h25.5M260.6 240.7v25.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="251.9" y="234.7" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  3.00, 32.00</text>
  <circle cx="699.4" cy="253.5" r="8.8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M686.6 253.5h25.5M699.4 240.7v25.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="708.1" y="234.7" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  83.00, 32.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 86 × 62&nbsp;mm, corners rounded to a 2&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>3.00</td><td>32.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>83.00</td><td>32.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Limits of the bare board. A dash means &ldquo;does not apply&rdquo;; <b>Open</b> means not established.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Supply voltage</td><td>+5 V rail</td><td>—</td><td>5 V</td><td>Open</td><td>From the controller</td></tr>
    <tr><td>Supply voltage</td><td>+3.3 V rail</td><td>—</td><td>3.3 V</td><td>Open</td><td>From the controller</td></tr>
    <tr><td>Supply current</td><td>Each positive rail</td><td>—</td><td>—</td><td>100 mA</td><td>Design target; the controller and cable may allow less</td></tr>
    <tr><td>Signal voltage</td><td>Seven GPIO columns</td><td>0 V</td><td>—</td><td>3.3 V</td><td>Controller logic level</td></tr>
    <tr><td>Copper current</td><td>Strips and rails</td><td>—</td><td>—</td><td>Open</td><td>Not established</td></tr>
    <tr><td>Voltage between neighbouring holes</td><td>Whole board</td><td>—</td><td>—</td><td>Open</td><td>Low voltage only</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: datasheets {#datasheets}

The first page of each important chip&rsquo;s datasheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/perma-proto-gadgeteer/datasheets/tlc555.pdf"><img src="/images/extensions/perma-proto-gadgeteer/datasheets/tlc555-page1.png" alt="First page of the TLC555 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/perma-proto-gadgeteer/datasheets/tlc555.pdf">TLC555 LinCMOS Timer</a> — Texas Instruments, 47 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/perma-proto-gadgeteer/datasheets/lm393.pdf"><img src="/images/extensions/perma-proto-gadgeteer/datasheets/lm393-page1.png" alt="First page of the LM393 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/perma-proto-gadgeteer/datasheets/lm393.pdf">LM393B, LM2903B, LM193, LM293, LM393 and LM2903 Dual Comparators</a> — Texas Instruments, 56 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/perma-proto-gadgeteer/datasheets/irlz44n.pdf"><img src="/images/extensions/perma-proto-gadgeteer/datasheets/irlz44n-page1.png" alt="First page of the IRLZ44N datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/perma-proto-gadgeteer/datasheets/irlz44n.pdf">IRLZ44NPbF HEXFET Power MOSFET</a> — Infineon (International Rectifier), 10 pages.</figcaption>
</figure>
{:/nomarkdown}


See all boards on the [extension boards](/extension-boards) page.
