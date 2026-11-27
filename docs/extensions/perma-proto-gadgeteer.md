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
    <img src="/images/extensions/perma-proto-gadgeteer/perma-proto-gadgeteer-diagram.webp" alt="Top view of the perma-proto board: two fields of gold holes joined by gold copper links, four power rails, the host connector in the middle and the chain connector with its wiring holes at the left">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>7</b><span>controller signal pins</span></div>
  <div class="xb-stat"><b>60</b><span>strips of five or six holes</span></div>
  <div class="xb-stat"><b>4 × 30</b><span>rail holes</span></div>
  <div class="xb-stat"><b>2 × 5</b><span>holes to wire the chain connector</span></div>
  <div class="xb-stat"><b>3.3 V + 5 V</b><span>rails, each with its own lamp</span></div>
  <div class="xb-stat"><b>110 × 60 mm</b><span>board size</span></div>
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
    <tr><td>Type</td><td>Passive solderable prototype board with two power lamps</td></tr>
    <tr><td>Prototype area</td><td>30 columns in two halves, rows A–F and G–L: six holes per strip, five in columns 15–19 beside the host connector</td></tr>
    <tr><td>Rails</td><td>+5 V and ground at the top, ground and +3.3 V at the bottom, 30 holes each</td></tr>
    <tr><td>Copper links</td><td>Bare on the front between every pair of joined holes, so you can see each connection and cut it</td></tr>
    <tr><td>Hole pitch</td><td>2.54 mm; 7.62 mm across the middle, the width of a narrow DIP chip</td></tr>
    <tr><td>Host connector</td><td>J1: Gadgeteer type Y, 10 pins, 1.27 mm pitch, Samtec SHF-105-01-L-D-TH-LC</td></tr>
    <tr><td>Chain connector</td><td>J2: the same connector, left of the prototype area, wired pin for pin to ten labelled 2.54 mm holes (J3) and to nothing else</td></tr>
    <tr><td>Signals</td><td>Seven, connected straight to the controller</td></tr>
    <tr><td>Lamps</td><td>Red: 5 V rail powered. Orange: 3.3 V rail powered</td></tr>
    <tr><td>Solder jumpers</td><td>Four, closed as made: each supply rail and each lamp</td></tr>
    <tr><td>Supply load</td><td>100 mA per positive rail (design target); less if your controller or cable allows less</td></tr>
    <tr><td>Size</td><td>110 × 60 mm, four M3 mounting holes</td></tr>
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
      <img src="/images/extensions/perma-proto-gadgeteer/perma-proto-gadgeteer-diagram.webp" alt="Top view of the perma-proto board with numbered markers">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:60.2%;top:49.6%" aria-label="1: Host connector J1">1<span class="xb-pop"><b>Host connector J1</b> — Ten pins to the controller. Check the notch before plugging in.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-2" style="left:10.5%;top:40.9%" aria-label="2: Chain connector J2">2<span class="xb-pop"><b>Chain connector J2</b> — A second connector, left of the prototype area, linked only to the wiring holes below it.</span></a>
      <a class="xb-mk xb-pl" href="#tour-3" style="left:10.5%;top:58.1%" aria-label="3: Chain wiring holes J3">3<span class="xb-pop"><b>Chain wiring holes J3</b> — Solder wires here to choose what the chain connector carries; each hole is labelled with its pin.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-4" style="left:76.3%;top:12.7%" aria-label="4: +5 V rail">4<span class="xb-pop"><b>+5 V rail</b> — Thirty joined holes fed by connector pin 2.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-5" style="left:18.3%;top:12.7%" aria-label="5: 5 V lamp">5<span class="xb-pop"><b>5 V lamp</b> — Red; lit while the 5 V rail is powered.</span></a>
      <a class="xb-mk xb-pl" href="#tour-6" style="left:21.6%;top:86.5%" aria-label="6: 3.3 V rail jumper">6<span class="xb-pop"><b>3.3 V rail jumper</b> — Closed as made; cut it to separate the bottom rail from connector pin 1.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-7" style="left:80.8%;top:33.5%" aria-label="7: Upper strips">7<span class="xb-pop"><b>Upper strips</b> — Each column of rows A to F is one connection, shown by the gold link.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:53.6%;top:64.0%" aria-label="8: Column 14, GPIO 1">8<span class="xb-pop"><b>Column 14, GPIO 1</b> — The first signal arrives here. Columns 15 to 20 carry GPIO 2 to 7.</span></a>
      <a class="xb-mk xb-pb" href="#tour-9" style="left:56.9%;top:39.1%" aria-label="9: Dashed guide lines">9<span class="xb-pop"><b>Dashed guide lines</b> — Each line runs from a J1 pin to the strip or rail it feeds.</span></a>
      <a class="xb-mk xb-pr" href="#tour-10" style="left:80.8%;top:68.0%" aria-label="10: Lower strips">10<span class="xb-pop"><b>Lower strips</b> — Each column of rows G to L is one connection.</span></a>
      <a class="xb-mk xb-pr" href="#tour-11" style="left:76.3%;top:86.5%" aria-label="11: +3.3 V rail">11<span class="xb-pop"><b>+3.3 V rail</b> — Thirty joined holes fed by connector pin 1. Use it for signal pull-ups.</span></a>
      <a class="xb-mk xb-pl" href="#tour-12" style="left:18.3%;top:86.5%" aria-label="12: 3.3 V lamp">12<span class="xb-pop"><b>3.3 V lamp</b> — Orange; lit while the 3.3 V rail is powered.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-13" style="left:94.4%;top:9.3%" aria-label="13: Mounting hole">13<span class="xb-pop"><b>Mounting hole</b> — One of four; see the dimensions appendix.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host connector J1</b> — Ten pins to the controller. Check the notch before plugging in.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain connector J2</b> — A second connector, left of the prototype area, linked only to the wiring holes below it.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Chain wiring holes J3</b> — Solder wires here to choose what the chain connector carries; each hole is labelled with its pin.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>+5 V rail</b> — Thirty joined holes fed by connector pin 2.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>5 V lamp</b> — Red; lit while the 5 V rail is powered.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>3.3 V rail jumper</b> — Closed as made; cut it to separate the bottom rail from connector pin 1.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Upper strips</b> — Each column of rows A to F is one connection, shown by the gold link.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Column 14, GPIO 1</b> — The first signal arrives here. Columns 15 to 20 carry GPIO 2 to 7.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Dashed guide lines</b> — Each line runs from a J1 pin to the strip or rail it feeds.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Lower strips</b> — Each column of rows G to L is one connection.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>+3.3 V rail</b> — Thirty joined holes fed by connector pin 1. Use it for signal pull-ups.</div></li>
    <li id="tour-12"><span class="xb-n">12</span><div><b>3.3 V lamp</b> — Orange; lit while the 3.3 V rail is powered.</div></li>
    <li id="tour-13"><span class="xb-n">13</span><div><b>Mounting hole</b> — One of four; see the dimensions appendix.</div></li>
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
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>+3.3 V rail (bottom), through its jumper</td><td>Pin 1, 3.3 V</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>+5 V rail (top), through its jumper</td><td>Pin 2, 5 V</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">GPIO 1</span></td><td>Column 14, rows G–L</td><td>PB1</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">GPIO 2</span></td><td>Column 15, rows A–E</td><td>PJ4</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">GPIO 3</span></td><td>Column 16, rows H–L</td><td>PA4</td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">GPIO 4</span></td><td>Column 17, rows A–E</td><td>PG0</td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-sig">GPIO 5</span></td><td>Column 18, rows H–L</td><td>PJ3</td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">GPIO 6</span></td><td>Column 19, rows A–E</td><td>PG1</td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">GPIO 7</span></td><td>Column 20, rows G–L</td><td>PJ2</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Both ground rails</td><td>Pin 10, ground</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Each column of rows A to F is one connection, and so is each column of rows G to L. Neighbouring columns, and the two halves of one column, are separate. Columns 15–19 have five holes per half because the host connector takes the sixth. The gold lines on the front are the copper that makes these connections: to split a strip or rail, cut the line between two holes with a sharp knife and check with a meter that the two sides are separate. Do this with the cable unplugged; solder or a wire joins them again. The bare links also mean a stray blob of solder, wire or metal can touch them, so look the board over before powering it. Each of the four 30-hole rails is one connection; the two ground rails are joined. The dashed lines printed on the board lead from every J1 signal and supply to its destination.

The chain connector J2 has the same pin numbers as the wiring holes J3: J2 pin *n* is joined to J3 pin *n* only. Each J3 hole is labelled on the board: `5V`, `4`, `6`, `8`, `GND` in the upper row and `3V3` (square pad), `3`, `5`, `7`, `9` in the lower row. `5V` is pin 2, `3V3` is pin 1 and `GND` is pin 10.

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Controller</b><span>A Smoothieboard V2 Prime, or another controller whose pins you have checked against the table above.</span></div>
  <div class="xb-card"><b>Cable</b><span>A 1.27 mm, 2 × 5 ribbon cable for the board end (Samtec FFSD or FFTP families mate with the fitted header). Check the controller end separately: the Prime J37 footprint has no specified mating cable.</span></div>
  <div class="xb-card"><b>Soldering tools</b><span>Iron, solder, 0.5 mm solid insulated wire, side cutters and a multimeter.</span></div>
  <div class="xb-card"><b>Your parts</b><span>Through-hole components. Each project below lists its own.</span></div>
  <div class="xb-card"><b>Screw terminals</b><span>2.54 mm pitch, for anything that lives off the board, so that it can be disconnected.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

Start with the simplest circuit, one button between a signal and ground, to prove the cable and your pin numbering. As in the projects below, nothing off the board is soldered straight into it: the button plugs into a screw terminal.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/perma-proto-gadgeteer/projects/button.webp"><img src="/images/extensions/perma-proto-gadgeteer/projects/button.webp" alt="Perma-proto board with a push button connected through a two-pin screw terminal to column 14 and ground" style="display:block;width:100%;height:auto;margin:0 auto"></a>
  <figcaption>One normally-open button on screw terminal CN1: yellow is GPIO 1 (column 14, pin PB1), black is ground. Select the drawing to open it full size.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Fit the terminal</h3>
    <p>With the cable unplugged, solder a two-pin screw terminal into holes <code>J12</code> and <code>J14</code>, wire entry towards the bottom edge. Add a wire from <code>L12</code> to hole 10 of the lower ground rail. Screw one button wire into each terminal.</p>
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

Seven connector pins and both supplies are wired to fixed columns and rails; everything else is yours to connect with component leads and wires. The board cannot change voltage levels or protect a pin, so your circuit must keep signals between 0 and 3.3 V. A narrow (7.62 mm) DIP chip straddles the middle gap with one row of pins in row F and the other in row G, and needs no cut tracks; columns 20–30 give the longest run for this.

### Power lamps and solder jumpers {#jumpers}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds"><thead><tr><th></th><th><span class="xb-led xb-led-red"></span>5 V lamp</th><th><span class="xb-led xb-led-amber"></span>3.3 V lamp</th></tr></thead><tbody><tr><th>Where</th><td>Left end of the +5&nbsp;V rail</td><td>Left end of the +3.3&nbsp;V rail</td></tr><tr><th>Lit means</th><td>The +5&nbsp;V rail has voltage</td><td>The +3.3&nbsp;V rail has voltage</td></tr><tr><th>Dark means</th><td>No power, rail jumper cut, or lamp jumper cut</td><td>No power, rail jumper cut, or lamp jumper cut</td></tr></tbody></table></div>
{:/nomarkdown}

The red lamp sits at the left of the +5 V rail and the orange lamp at the left of the +3.3 V rail. All four jumpers are closed as made. To open one, cut the thin copper bridge between its two pads with a sharp knife and check with a meter; to close it again, bridge the pads with solder. Do this with the cable unplugged.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Printed</th><th>Part</th><th>When cut</th></tr></thead>
  <tbody>
    <tr><td>5V LINK</td><td>JP1</td><td>The +5 V rail and its lamp are separated from connector pin 2</td></tr>
    <tr><td>3V3 LINK</td><td>JP2</td><td>The +3.3 V rail and its lamp are separated from connector pin 1</td></tr>
    <tr><td>5V LED LINK</td><td>JP3</td><td>The red lamp stays dark; the rail is unaffected</td></tr>
    <tr><td>3V3 LED LINK</td><td>JP4</td><td>The orange lamp stays dark; the rail is unaffected</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The lamps show that a rail has voltage, not that the voltage is correct. The ground rails have no jumper.

### Chain connector {#chain}

J2 and its wiring holes J3 sit left of the prototype area, so they take no strip holes. J2 carries nothing until you wire it. Solder a wire from a J3 hole to a strip or rail for each line the next board needs, for example J3 pin 10 to a ground rail and a signal pin to the matching column. Wiring J3 pin *n* to the destination of J1 pin *n* passes that line straight on. Check every wire with a meter: crossing a supply onto a signal can damage the controller. Anything on the chain shares the controller&rsquo;s pins and supply budget, and signals stay limited to 3.3 V.

## Three example projects {#projects}

Each project uses its own board. The drawings are made from the same hole list as the tables, and that list was checked by script for open and shorted connections. The circuits were designed from datasheet figures, and the numbers given are calculated, not measured. Solder with the ribbon cable unplugged, check every connection with a meter, and check the output voltage before you plug in: no signal pin may see more than 3.3 V.

Hole names follow the board printing: `H7` is row H, column 7. A rail hole such as "+5 V rail 19" is the nineteenth hole of that rail. Black wires are ground.

### Project 1: touch plate switch {#project-touch}

Touch a bare metal plate and an LED turns on; touch it again and it turns off. Your body picks up a little of the 50 or 60 Hz field from the mains wiring around you. When you touch the plate, three transistors in a chain amplify that tiny current enough to pull a controller input low. C1 fills the gaps between mains half-cycles so that the controller sees one steady press.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/perma-proto-gadgeteer/projects/touch.webp"><img src="/images/extensions/perma-proto-gadgeteer/projects/touch.webp" alt="Perma-proto board populated with three transistors, resistors, a diode, a capacitor and an LED, with a screw terminal wired to a metal touch plate" style="display:block;width:100%;height:auto;margin:0 auto"></a>
  <figcaption>The touch switch. Yellow carries the signal to GPIO 1 (pin PB1); LED1 is driven by GPIO 3 (pin PA4). Select the drawing to open it full size.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Part</th><th>What</th><th>Holes</th><th>Job</th></tr></thead>
  <tbody>
    <tr><td>CN1</td><td>2-pin screw terminal, 2.54 mm pitch</td><td>pins in B2 and B4, wire entry towards the top edge</td><td>detachable lead to the plate; B4 is left unused</td></tr>
    <tr><td>R1</td><td>1 MΩ resistor, 1/4 W</td><td>E2 to E6</td><td>protects the first transistor from static on the plate</td></tr>
    <tr><td>D1</td><td>1N4148 diode (band = cathode)</td><td>band end in B6, other end in B10</td><td>gives the negative half of the pickup a path to ground</td></tr>
    <tr><td>R2</td><td>10 MΩ resistor, 1/4 W</td><td>K3 to K6</td><td>ignores very small leakage currents</td></tr>
    <tr><td>Q1</td><td>2N3904 NPN transistor, TO-92</td><td>E in I5, B in I6, C in I7</td><td>first of three amplifying transistors</td></tr>
    <tr><td>Q2</td><td>2N3904 NPN transistor, TO-92</td><td>E in I9, B in I10, C in I11</td><td>second transistor</td></tr>
    <tr><td>Q3</td><td>2N3904 NPN transistor, TO-92</td><td>E in H22, B in H23, C in H24</td><td>pulls the controller input low</td></tr>
    <tr><td>R3</td><td>100 kΩ resistor, 1/4 W</td><td>J7 to +3.3 V rail 7</td><td>limits Q1</td></tr>
    <tr><td>R4</td><td>10 kΩ resistor, 1/4 W</td><td>J11 to +3.3 V rail 11</td><td>limits Q2</td></tr>
    <tr><td>R5</td><td>100 kΩ resistor, 1/4 W</td><td>J23 to lower ground rail 23</td><td>keeps Q3 off when nothing touches</td></tr>
    <tr><td>R6</td><td>100 Ω resistor, 1/4 W</td><td>I24 to I28</td><td>limits the capacitor discharge current</td></tr>
    <tr><td>R7</td><td>10 kΩ resistor, 1/4 W</td><td>J28 to +3.3 V rail 28</td><td>holds the input high</td></tr>
    <tr><td>C1</td><td>4.7 µF electrolytic capacitor, 16 V or more</td><td>+ in H28, − in H29</td><td>keeps the input low between mains half-cycles</td></tr>
    <tr><td>R8</td><td>1 kΩ resistor, 1/4 W</td><td>H13 to H16</td><td>LED current limit</td></tr>
    <tr><td>LED1</td><td>3 mm indicator LED</td><td>− in J12, + in J13</td><td>the lamp the plate switches</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Wire</th><th>From</th><th>To</th></tr></thead>
  <tbody>
    <tr><td>Top: blue</td><td>F6</td><td>G6</td></tr>
    <tr><td>Top: black</td><td>A10</td><td>upper ground rail 10</td></tr>
    <tr><td>Top: white</td><td>F2</td><td>G2</td></tr>
    <tr><td>Top: black</td><td>L3</td><td>lower ground rail 3</td></tr>
    <tr><td>Top: green</td><td>L5</td><td>L10</td></tr>
    <tr><td>Top: violet</td><td>K9</td><td>K23</td></tr>
    <tr><td>Top: black</td><td>J22</td><td>lower ground rail 22</td></tr>
    <tr><td>Top: black</td><td>L29</td><td>lower ground rail 29</td></tr>
    <tr><td>Top: yellow</td><td>L28</td><td>L14</td></tr>
    <tr><td>Top: black</td><td>K12</td><td>lower ground rail 12</td></tr>
    <tr><td>Off board: white</td><td>CN1, the screw over B2</td><td>the metal plate</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Use a plate of copper, brass or steel, a few centimetres across, on a wire under 20 cm screwed into CN1. Connect the plate to nothing else, and never to anything powered. Sensitivity depends on the mains wiring nearby: far from any mains cable, or with a battery-powered machine outdoors, the circuit may not respond.

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

The TLC555 straddles the gap in the middle of the board: pins 1 to 4 sit in row G and pins 5 to 8 in row F, columns 21 to 24, with the notch towards the connectors. No track needs cutting and every wire goes on top.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/perma-proto-gadgeteer/projects/tapper.webp"><img src="/images/extensions/perma-proto-gadgeteer/projects/tapper.webp" alt="Perma-proto board populated with a TLC555 timer, a MOSFET, a flyback diode, passives and two screw terminals for a solenoid and its supply" style="display:block;width:100%;height:auto;margin:0 auto"></a>
  <figcaption>The tapper. Yellow brings the on/off signal from GPIO 2 (pin PJ4). The solenoid has its own supply. Select the drawing to open it full size.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Part</th><th>What</th><th>Holes</th><th>Job</th></tr></thead>
  <tbody>
    <tr><td>CN1</td><td>2-pin screw terminal, 2.54 mm pitch</td><td>pins in A3 and A5, wire entry towards the top edge</td><td>detachable solenoid connection</td></tr>
    <tr><td>CN2</td><td>2-pin screw terminal, 2.54 mm pitch</td><td>pins in A7 and A9, wire entry towards the top edge</td><td>detachable coil supply connection</td></tr>
    <tr><td>U1</td><td><a href="/images/extensions/perma-proto-gadgeteer/datasheets/tlc555.pdf">TLC555</a> DIP-8 chip</td><td>pins 8, 7, 6, 5 in F21–F24; pins 1, 2, 3, 4 in G21–G24</td><td>timer in a repeating (astable) circuit</td></tr>
    <tr><td>C3</td><td>100 nF ceramic capacitor</td><td>+5 V rail 20 to upper ground rail 20</td><td>supply decoupling</td></tr>
    <tr><td>R1</td><td>10 kΩ resistor, 1/4 W</td><td>+5 V rail 26 to B26</td><td>timing</td></tr>
    <tr><td>R2</td><td>100 kΩ resistor, 1/4 W</td><td>D26 to H26</td><td>timing</td></tr>
    <tr><td>C1</td><td>1 µF electrolytic capacitor, 16 V or more</td><td>+ in L26, − in L27</td><td>timing capacitor</td></tr>
    <tr><td>C2</td><td>10 nF ceramic capacitor</td><td>C24 to upper ground rail 24</td><td>steadies the control pin</td></tr>
    <tr><td>R5</td><td>100 kΩ resistor, 1/4 W</td><td>C15 to upper ground rail 15</td><td>keeps the timer stopped when the input is not driven</td></tr>
    <tr><td>R3</td><td>100 Ω resistor, 1/4 W</td><td>K2 to K8</td><td>gate series resistor</td></tr>
    <tr><td>R4</td><td>100 kΩ resistor, 1/4 W</td><td>L2 to lower ground rail 2</td><td>keeps the transistor off</td></tr>
    <tr><td>Q1</td><td><a href="/images/extensions/perma-proto-gadgeteer/datasheets/irlz44n.pdf">IRLZ44N</a> logic-level N-channel MOSFET, TO-220</td><td>G in I2, D in I3, S in I4</td><td>switches the coil</td></tr>
    <tr><td>D1</td><td>1N4007 diode (band = cathode)</td><td>band end in D5, other end in D3</td><td>absorbs the coil&rsquo;s voltage spike</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Wire</th><th>From</th><th>To</th></tr></thead>
  <tbody>
    <tr><td>Top: red</td><td>A21</td><td>+5 V rail 21</td></tr>
    <tr><td>Top: blue</td><td>C22</td><td>C26</td></tr>
    <tr><td>Top: green</td><td>J22</td><td>J26</td></tr>
    <tr><td>Top: green</td><td>D23</td><td>I26</td></tr>
    <tr><td>Top: black</td><td>J27</td><td>lower ground rail 27</td></tr>
    <tr><td>Top: black</td><td>J21</td><td>lower ground rail 21</td></tr>
    <tr><td>Top: black</td><td>L4</td><td>lower ground rail 4</td></tr>
    <tr><td>Top: violet</td><td>L23</td><td>L8</td></tr>
    <tr><td>Top: yellow</td><td>E15</td><td>H24</td></tr>
    <tr><td>Top: blue</td><td>E3</td><td>G3</td></tr>
    <tr><td>Top: red</td><td>E5</td><td>E7</td></tr>
    <tr><td>Top: black</td><td>D9</td><td>D11</td></tr>
    <tr><td>Top: black</td><td>A11</td><td>upper ground rail 11</td></tr>
    <tr><td>Off board: blue</td><td>CN1, the screw over A3</td><td>solenoid, second wire</td></tr>
    <tr><td>Off board: red</td><td>CN1, the screw over A5</td><td>solenoid, first wire</td></tr>
    <tr><td>Off board: orange</td><td>CN2, the screw over A7</td><td>coil supply +</td></tr>
    <tr><td>Off board: black</td><td>CN2, the screw over A9</td><td>coil supply −</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

- **The solenoid has its own power supply**, matched to the coil (for example 12 V for a 12 V coil). Never feed the coil from the board&rsquo;s rails or the ribbon cable. The only link between the two supplies is ground.
- As a starting point, choose a coil of 24 V DC or less that draws 0.5 A or less. This is a suggestion, not a rating: the current and voltage limits of this board&rsquo;s copper have not been established. Take the solenoid and its supply to the screw terminals CN1 and CN2, and keep those wires short. The terminals&rsquo; own ratings also apply.
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

The LM393 straddles the gap in the middle of the board: pins 1 to 4 sit in row G and pins 5 to 8 in row F, columns 21 to 24, with the notch towards the connectors. No track needs cutting and every wire goes on top.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/perma-proto-gadgeteer/projects/wheel.webp"><img src="/images/extensions/perma-proto-gadgeteer/projects/wheel.webp" alt="Perma-proto board populated with an LM393 comparator, four diodes, passives and a four-pin screw terminal wired to a stepper motor" style="display:block;width:100%;height:auto;margin:0 auto;max-width:640px"></a>
  <figcaption>The handwheel interface. Encoder A goes to GPIO 5 (pin PJ3) and B to GPIO 7 (pin PJ2). Select the drawing to open it full size.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Part</th><th>What</th><th>Holes</th><th>Job</th></tr></thead>
  <tbody>
    <tr><td>CN1</td><td>4-pin screw terminal, 2.54 mm pitch</td><td>pins in B2, B4, B6 and B8, wire entry towards the top edge</td><td>detachable motor connection</td></tr>
    <tr><td>U1</td><td><a href="/images/extensions/perma-proto-gadgeteer/datasheets/lm393.pdf">LM393</a> DIP-8 chip</td><td>pins 8, 7, 6, 5 in F21–F24; pins 1, 2, 3, 4 in G21–G24</td><td>two comparators, one per coil</td></tr>
    <tr><td>C2</td><td>100 nF ceramic capacitor</td><td>+5 V rail 20 to upper ground rail 20</td><td>supply decoupling</td></tr>
    <tr><td>R1</td><td>10 kΩ resistor, 1/4 W</td><td>+5 V rail 27 to B27</td><td>half of the 2.5 V reference</td></tr>
    <tr><td>R2</td><td>10 kΩ resistor, 1/4 W</td><td>C27 to C30</td><td>half of the 2.5 V reference</td></tr>
    <tr><td>C1</td><td>10 µF electrolytic capacitor, 16 V or more</td><td>+ in E27, − in E28</td><td>steadies the reference</td></tr>
    <tr><td>R3</td><td>10 kΩ resistor, 1/4 W</td><td>I5 to I9</td><td>coil A input protection</td></tr>
    <tr><td>R5</td><td>470 kΩ resistor, 1/4 W</td><td>K9 to K18</td><td>hysteresis, channel A</td></tr>
    <tr><td>R7</td><td>4.7 kΩ resistor, 1/4 W</td><td>L18 to +3.3 V rail 18</td><td>pull-up to 3.3 V, output A</td></tr>
    <tr><td>D1</td><td>BAT85 diode (band = cathode)</td><td>band end in J9, other end in lower ground rail 7</td><td>clamp to ground, channel A</td></tr>
    <tr><td>D2</td><td>BAT85 diode (band = cathode)</td><td>band end in L12, other end in L9</td><td>clamp to 5 V, channel A</td></tr>
    <tr><td>R4</td><td>10 kΩ resistor, 1/4 W</td><td>F8 to F12</td><td>coil B input protection</td></tr>
    <tr><td>R6</td><td>470 kΩ resistor, 1/4 W</td><td>K20 to K26</td><td>hysteresis, channel B</td></tr>
    <tr><td>R8</td><td>4.7 kΩ resistor, 1/4 W</td><td>L20 to +3.3 V rail 20</td><td>pull-up to 3.3 V, output B</td></tr>
    <tr><td>D3</td><td>BAT85 diode (band = cathode)</td><td>band end in J26, other end in lower ground rail 25</td><td>clamp to ground, channel B</td></tr>
    <tr><td>D4</td><td>BAT85 diode (band = cathode)</td><td>band end in L29, other end in L26</td><td>clamp to 5 V, channel B</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Wire</th><th>From</th><th>To</th></tr></thead>
  <tbody>
    <tr><td>Top: red</td><td>A21</td><td>+5 V rail 21</td></tr>
    <tr><td>Top: black</td><td>J24</td><td>lower ground rail 24</td></tr>
    <tr><td>Top: black</td><td>A30</td><td>upper ground rail 30</td></tr>
    <tr><td>Top: black</td><td>A28</td><td>upper ground rail 28</td></tr>
    <tr><td>Top: violet</td><td>A23</td><td>A27</td></tr>
    <tr><td>Top: violet</td><td>D27</td><td>K22</td></tr>
    <tr><td>Top: green</td><td>H21</td><td>H18</td></tr>
    <tr><td>Top: yellow</td><td>E22</td><td>J20</td></tr>
    <tr><td>Top: blue</td><td>H9</td><td>J23</td></tr>
    <tr><td>Top: orange</td><td>B24</td><td>H26</td></tr>
    <tr><td>Top: red</td><td>H12</td><td>+5 V rail 12</td></tr>
    <tr><td>Top: red</td><td>H29</td><td>+5 V rail 29</td></tr>
    <tr><td>Top: red</td><td>E2</td><td>H5</td></tr>
    <tr><td>Top: violet</td><td>D4</td><td>D6</td></tr>
    <tr><td>Top: violet</td><td>E6</td><td>D23</td></tr>
    <tr><td>Top: orange</td><td>C12</td><td>C24</td></tr>
    <tr><td>Off board: red</td><td>CN1, the screw over B2</td><td>motor coil A, first wire</td></tr>
    <tr><td>Off board: green</td><td>CN1, the screw over B4</td><td>motor coil A, second wire</td></tr>
    <tr><td>Off board: yellow</td><td>CN1, the screw over B6</td><td>motor coil B, second wire</td></tr>
    <tr><td>Off board: blue</td><td>CN1, the screw over B8</td><td>motor coil B, first wire</td></tr>
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
    <tr><td>A power lamp is dark</td><td>Check the cable and controller power, then that the rail jumper and the lamp jumper are closed.</td></tr>
    <tr><td>One strip hole stays dead</td><td>Check that the gold link beside it has not been cut or scratched through.</td></tr>
    <tr><td>Nothing on the chain connector</td><td>J2 carries only what you wire to J3; check each wire and the pin numbering.</td></tr>
    <tr><td>Controller resets or the supply drops</td><td>Unplug at once and check for a short between a rail and ground, then the load on the 5 V and 3.3 V rails.</td></tr>
    <tr><td>Touch plate does nothing</td><td>Test the LED with M42; touch near mains-powered equipment; check the transistor E, B, C order against its datasheet.</td></tr>
    <tr><td>Tapper silent</td><td>Measure chip pin 4 (near 3.3 V when on) and pin 8 (5 V); then check the coil supply, the chip&rsquo;s orientation and the wires.</td></tr>
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
    <tr><td><a href="/images/extensions/perma-proto-gadgeteer/v17/perma-proto-gadgeteer-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/perma-proto-gadgeteer/v17/perma-proto-gadgeteer-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/perma-proto-gadgeteer/perma-proto-gadgeteer-diagram.webp">Board drawing (WebP)</a></td><td>The top view used on this page</td></tr>
    <tr><td><a href="/assets/downloads/extensions/perma-proto-gadgeteer/perma-cad-study.zip">CAD files (ZIP)</a></td><td>KiCad 9 board, schematic, footprints and licence texts (CERN-OHL-S-2.0)</td></tr>
    <tr><td><a href="/images/extensions/perma-proto-gadgeteer/projects/button.webp">Button drawing (WebP)</a></td><td>Populated board, full size</td></tr>
    <tr><td><a href="/images/extensions/perma-proto-gadgeteer/projects/touch.webp">Touch switch drawing (WebP)</a></td><td>Populated board, full size</td></tr>
    <tr><td><a href="/images/extensions/perma-proto-gadgeteer/projects/tapper.webp">Tapper drawing (WebP)</a></td><td>Populated board, full size</td></tr>
    <tr><td><a href="/images/extensions/perma-proto-gadgeteer/projects/wheel.webp">Handwheel drawing (WebP)</a></td><td>Populated board, full size</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 440" role="img" aria-labelledby="xb-pp-mount-t">
  <title id="xb-pp-mount-t">Mounting drawing of the Gadgeteer perma-proto, component side: outline 110 by 60 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="515" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="240" y="78" width="550" height="300" rx="15" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M240 56H790"/><path d="M240 50V62"/><path d="M790 50V62"/><path d="M816 78V378"/><path d="M810 78h12"/><path d="M810 378h12"/></g>
  <text x="515" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">110</text>
  <text x="828" y="233" font-size="15" font-weight="700" fill="#e6ebf2">60</text>
  <circle cx="240" cy="78" r="4" fill="#ffcc33"/>
  <text x="228" y="83" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M182 104h30" fill="none"/><path d="M216 104l-8 -4v8z"/><path d="M182 104v30" fill="none"/><path d="M182 138l-4 -8h8z"/></g>
  <text x="220" y="109" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="178" y="154" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="265" cy="103" r="8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M252 103h26M265 90v26" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="257" y="137" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.00</text>
  <circle cx="765" cy="103" r="8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M752 103h26M765 90v26" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="773" y="137" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  105.00, 5.00</text>
  <circle cx="265" cy="353" r="8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M252 353h26M265 340v26" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="257" y="331" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 55.00</text>
  <circle cx="765" cy="353" r="8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M752 353h26M765 340v26" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="773" y="331" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  105.00, 55.00</text>
  <text x="515" y="414" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 110 × 60&nbsp;mm, corners rounded to a 3&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>105.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>5.00</td><td>55.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>105.00</td><td>55.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
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
    <tr><td>Lamp current</td><td>Red, orange</td><td>1.7 mA, 1.3 mA</td><td>—</td><td>2.0 mA, 1.9 mA</td><td>Calculated from 1.5 kΩ and 680 Ω resistors for an assumed 2.0–2.4 V lamp voltage; counts toward the rail load</td></tr>
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
