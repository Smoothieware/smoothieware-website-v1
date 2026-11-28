---
layout: default
title: "Perma-proto breadboard"
description: "A solderable breadboard-style prototype board on a Smoothieboard Gadgeteer port, with four worked projects."
permalink: /extensions/perma-proto-breadboard
redirect_from:
  - /extensions/perma-proto-gadgeteer
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Prototyping</p>
    <h1 id="perma-proto-breadboard">Perma-proto breadboard</h1>
    <p class="xb-lead">Solder your own circuit onto a breadboard-style board that plugs into seven controller pins with one ribbon cable.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/perma-proto-breadboard/perma-proto-breadboard-diagram.webp" alt="Top view of the perma-proto board: two fields of gold holes joined by gold copper links, four power rails, the host connector in the middle and the chain connector with its wiring holes at the left">
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
      <img src="/images/extensions/perma-proto-breadboard/perma-proto-breadboard-diagram.webp" alt="Top view of the perma-proto board with numbered markers">
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
  <a href="/images/extensions/perma-proto-breadboard/projects/button.webp"><img src="/images/extensions/perma-proto-breadboard/projects/button.webp" alt="Perma-proto board with a push button connected through a two-pin screw terminal to column 14 and ground" style="display:block;width:100%;height:auto;margin:0 auto"></a>
  <figcaption>One normally-open button on screw terminal CN1: yellow is GPIO 1 (column 14, pin PB1), black is ground. Select the drawing to open it full size.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3 id="step-terminal">Fit the terminal</h3>
    <p>With the cable unplugged, solder a two-pin screw terminal into holes <code>J12</code> and <code>J14</code>, wire entry towards the bottom edge. Add a wire from <code>L12</code> to hole 10 of the lower ground rail. Screw one button wire into each terminal.</p>
  </li>
  <li class="xb-step">
    <h3 id="step-meter">Check with a meter</h3>
    <p>Connector pin 3 and pin 10 must be open with the button released and connected with it pressed.</p>
  </li>
  <li class="xb-step">
    <h3 id="step-cable">Check the cable</h3>
    <p>Use only a cable whose pin numbering you have confirmed at both ends with a continuity test. Connect with the power off.</p>
  </li>
  <li class="xb-step">
    <h3 id="step-configure">Configure and test</h3>
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
    <tr><td>Delayed STEP and DIR for an external driver</td><td>Motion (actuator)</td><td><a href="#delay-setup">Setup</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Setup {#config-main}

The setting for the button of Get started. The four projects have their own: [touch switch](#project-touch), [tapper](#project-tapper), [handwheel](#project-wheel) and [STEP and DIR delay](#delay-setup). They share some pins, and a pin can be claimed by one setting only.

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

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 142" role="img" aria-labelledby="xb-perma-proto-breadboard-path"><title id="xb-perma-proto-breadboard-path">J1 connector pins and supplies then Fixed copper columns and rails then Your components and wires then Signals stay between 0 and 3.3 V.</title><rect x="20" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="127" y="56" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">J1 connector pins and</text><text x="127" y="74" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">supplies</text><text x="127" y="94" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><rect x="268" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="376" y="56" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Fixed copper columns</text><text x="376" y="74" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">and rails</text><text x="376" y="94" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M238.5 70H259.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M258 63L266 70L258 77Z" fill="#5fb3ff"/><rect x="517" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="624" y="56" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Your components and</text><text x="624" y="74" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">wires</text><text x="624" y="94" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M487.0 70H508.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M506 63L515 70L506 77Z" fill="#5fb3ff"/><rect x="766" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="873" y="56" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Signals stay between 0</text><text x="873" y="74" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">and 3.3 V</text><text x="873" y="94" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M735.5 70H756.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M754 63L764 70L754 77Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board.</figcaption>
</figure>
{:/nomarkdown}


## Four example projects {#projects}

Each project uses its own board. The drawings are made from the same hole list as the tables, and that list was checked by script for open and shorted connections. The circuits were designed from datasheet figures, and the numbers given are calculated, not measured. Solder with the ribbon cable unplugged, check every connection with a meter, and check the output voltage before you plug in: no signal pin may see more than 3.3 V.

Hole names follow the board printing: `H7` is row H, column 7. A rail hole such as "+5 V rail 19" is the nineteenth hole of that rail. Black wires are ground.

### Project 1: touch plate switch {#project-touch}

Touch a bare metal plate and an LED turns on; touch it again and it turns off. Your body picks up a little of the 50 or 60 Hz field from the mains wiring around you. When you touch the plate, three transistors in a chain amplify that tiny current enough to pull a controller input low. C1 fills the gaps between mains half-cycles so that the controller sees one steady press.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/perma-proto-breadboard/projects/touch.webp"><img src="/images/extensions/perma-proto-breadboard/projects/touch.webp" alt="Perma-proto board populated with three transistors, resistors, a diode, a capacitor and an LED, with a screw terminal wired to a metal touch plate" style="display:block;width:100%;height:auto;margin:0 auto"></a>
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

While a Gadgeteer signal is on, a solenoid taps about seven times a second without any further commands: shake a hopper, knock a sticking part loose or ring a small bell. The <a href="/images/extensions/perma-proto-breadboard/datasheets/tlc555.pdf">TLC555</a> runs as a repeating timer whose reset pin is the controller signal. Calculated timing: about 76 ms on and 69 ms off (the first pulse after switching on is longer).

The TLC555 straddles the gap in the middle of the board: pins 1 to 4 sit in row G and pins 5 to 8 in row F, columns 21 to 24, with the notch towards the connectors. No track needs cutting and every wire goes on top.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/perma-proto-breadboard/projects/tapper.webp"><img src="/images/extensions/perma-proto-breadboard/projects/tapper.webp" alt="Perma-proto board populated with a TLC555 timer, a MOSFET, a flyback diode, passives and two screw terminals for a solenoid and its supply" style="display:block;width:100%;height:auto;margin:0 auto"></a>
  <figcaption>The tapper. Yellow brings the on/off signal from GPIO 2 (pin PJ4). The solenoid has its own supply. Select the drawing to open it full size.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Part</th><th>What</th><th>Holes</th><th>Job</th></tr></thead>
  <tbody>
    <tr><td>CN1</td><td>2-pin screw terminal, 2.54 mm pitch</td><td>pins in A3 and A5, wire entry towards the top edge</td><td>detachable solenoid connection</td></tr>
    <tr><td>CN2</td><td>2-pin screw terminal, 2.54 mm pitch</td><td>pins in A7 and A9, wire entry towards the top edge</td><td>detachable coil supply connection</td></tr>
    <tr><td>U1</td><td><a href="/images/extensions/perma-proto-breadboard/datasheets/tlc555.pdf">TLC555</a> DIP-8 chip</td><td>pins 8, 7, 6, 5 in F21–F24; pins 1, 2, 3, 4 in G21–G24</td><td>timer in a repeating (astable) circuit</td></tr>
    <tr><td>C3</td><td>100 nF ceramic capacitor</td><td>+5 V rail 20 to upper ground rail 20</td><td>supply decoupling</td></tr>
    <tr><td>R1</td><td>10 kΩ resistor, 1/4 W</td><td>+5 V rail 26 to B26</td><td>timing</td></tr>
    <tr><td>R2</td><td>100 kΩ resistor, 1/4 W</td><td>D26 to H26</td><td>timing</td></tr>
    <tr><td>C1</td><td>1 µF electrolytic capacitor, 16 V or more</td><td>+ in L26, − in L27</td><td>timing capacitor</td></tr>
    <tr><td>C2</td><td>10 nF ceramic capacitor</td><td>C24 to upper ground rail 24</td><td>steadies the control pin</td></tr>
    <tr><td>R5</td><td>100 kΩ resistor, 1/4 W</td><td>C15 to upper ground rail 15</td><td>keeps the timer stopped when the input is not driven</td></tr>
    <tr><td>R3</td><td>100 Ω resistor, 1/4 W</td><td>K2 to K8</td><td>gate series resistor</td></tr>
    <tr><td>R4</td><td>100 kΩ resistor, 1/4 W</td><td>L2 to lower ground rail 2</td><td>keeps the transistor off</td></tr>
    <tr><td>Q1</td><td><a href="/images/extensions/perma-proto-breadboard/datasheets/irlz44n.pdf">IRLZ44N</a> logic-level N-channel MOSFET, TO-220</td><td>G in I2, D in I3, S in I4</td><td>switches the coil</td></tr>
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

Turn the shaft of a spare 4-wire stepper motor by hand and an axis moves, like the wheel on an MPG pendant. A turning stepper is a small generator: its two coils produce two alternating voltages a quarter cycle apart. The <a href="/images/extensions/perma-proto-breadboard/datasheets/lm393.pdf">LM393</a> turns each into a clean 0 / 3.3 V square wave, giving the A and B signals of an incremental encoder. R5 and R6 add about 70 mV of calculated hysteresis so that noise does not produce counts.

The LM393 straddles the gap in the middle of the board: pins 1 to 4 sit in row G and pins 5 to 8 in row F, columns 21 to 24, with the notch towards the connectors. No track needs cutting and every wire goes on top.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/perma-proto-breadboard/projects/wheel.webp"><img src="/images/extensions/perma-proto-breadboard/projects/wheel.webp" alt="Perma-proto board populated with an LM393 comparator, four diodes, passives and a four-pin screw terminal wired to a stepper motor" style="display:block;width:100%;height:auto;margin:0 auto;max-width:640px"></a>
  <figcaption>The handwheel interface. Encoder A goes to GPIO 5 (pin PJ3) and B to GPIO 7 (pin PJ2). Select the drawing to open it full size.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Part</th><th>What</th><th>Holes</th><th>Job</th></tr></thead>
  <tbody>
    <tr><td>CN1</td><td>4-pin screw terminal, 2.54 mm pitch</td><td>pins in B2, B4, B6 and B8, wire entry towards the top edge</td><td>detachable motor connection</td></tr>
    <tr><td>U1</td><td><a href="/images/extensions/perma-proto-breadboard/datasheets/lm393.pdf">LM393</a> DIP-8 chip</td><td>pins 8, 7, 6, 5 in F21–F24; pins 1, 2, 3, 4 in G21–G24</td><td>two comparators, one per coil</td></tr>
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


### Project 4: delay the STEP and DIR signals {#project-delay}

This circuit takes a STEP and a DIR signal from two Gadgeteer pins and passes them to an external stepper driver a fixed time later: about 1, 10 or 20 µs, set by the capacitors you fit. A signal turns on later and turns off later. A DIP switch chooses whether STEP, DIR or both are delayed. Use it when one signal has to arrive after the other, for example to give a driver more time between a direction change and the next step, or to line up one motor with another that has a slower signal path.

**What it looks like in time.** The graph shows the 10 µs setting. The dashed lines mark when the controller changes a pin; the white bars are the delay.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="STEP and DIR timing before and after the circuit">
  <svg viewBox="0 0 1000 546" role="img" aria-labelledby="xb-delay-timing"><title id="xb-delay-timing">Timing of STEP and DIR over 120 microseconds: at the controller pins, and at the output with both signals delayed by 10 microseconds, only STEP delayed, and only DIR delayed.</title><path d="M355.0 48V506" stroke="#505050" stroke-width="1" stroke-dasharray="3 5"/><path d="M505.0 48V506" stroke="#505050" stroke-width="1" stroke-dasharray="3 5"/><path d="M655.0 48V506" stroke="#505050" stroke-width="1" stroke-dasharray="3 5"/><path d="M830.0 48V506" stroke="#505050" stroke-width="1" stroke-dasharray="3 5"/><path d="M280.0 48V506" stroke="#505050" stroke-width="1" stroke-dasharray="3 5"/><path d="M742.5 48V506" stroke="#505050" stroke-width="1" stroke-dasharray="3 5"/><text x="20" y="36" font-size="15" font-weight="700" fill="#ffffff" text-anchor="start">At the controller pins (input)</text><text x="216" y="72" font-size="14" font-weight="700" fill="#5fb3ff" text-anchor="end">STEP in (PB1)</text><path d="M230 78 H355.0 V52 H373.8 V78 H505.0 V52 H523.8 V78 H655.0 V52 H673.8 V78 H830.0 V52 H848.8 V78 H980" fill="none" stroke="#5fb3ff" stroke-width="2.5"/><text x="216" y="118" font-size="14" font-weight="700" fill="#f2c418" text-anchor="end">DIR in (PJ4)</text><path d="M230 124 H280.0 V98 H742.5 V124 H980" fill="none" stroke="#f2c418" stroke-width="2.5"/><text x="20" y="158" font-size="15" font-weight="700" fill="#ffffff" text-anchor="start">Output: both delayed (switches 2 and 4 on)</text><text x="216" y="194" font-size="14" font-weight="700" fill="#5fb3ff" text-anchor="end">STEP out</text><path d="M230 200 H417.5 V174 H437.5 V200 H567.5 V174 H587.5 V200 H717.5 V174 H737.5 V200 H892.5 V174 H912.5 V200 H980" fill="none" stroke="#5fb3ff" stroke-width="2.5"/><text x="216" y="240" font-size="14" font-weight="700" fill="#f2c418" text-anchor="end">DIR out</text><path d="M230 246 H342.5 V220 H805.0 V246 H980" fill="none" stroke="#f2c418" stroke-width="2.5"/><path d="M505.0 166H567.5M505.0 161v10M567.5 161v10" stroke="#ffffff" stroke-width="1.5" fill="none"/><text x="499" y="171" font-size="13" font-weight="400" fill="#ffffff" text-anchor="end">10 µs</text><path d="M742.5 212H805.0M742.5 207v10M805.0 207v10" stroke="#ffffff" stroke-width="1.5" fill="none"/><text x="736" y="217" font-size="13" font-weight="400" fill="#ffffff" text-anchor="end">10 µs</text><text x="20" y="280" font-size="15" font-weight="700" fill="#ffffff" text-anchor="start">Output: only STEP delayed (switches 2 and 3 on)</text><text x="216" y="316" font-size="14" font-weight="700" fill="#5fb3ff" text-anchor="end">STEP out</text><path d="M230 322 H417.5 V296 H437.5 V322 H567.5 V296 H587.5 V322 H717.5 V296 H737.5 V322 H892.5 V296 H912.5 V322 H980" fill="none" stroke="#5fb3ff" stroke-width="2.5"/><text x="216" y="362" font-size="14" font-weight="700" fill="#f2c418" text-anchor="end">DIR out</text><path d="M230 368 H280.0 V342 H742.5 V368 H980" fill="none" stroke="#f2c418" stroke-width="2.5"/><path d="M505.0 288H567.5M505.0 283v10M567.5 283v10" stroke="#ffffff" stroke-width="1.5" fill="none"/><text x="499" y="293" font-size="13" font-weight="400" fill="#ffffff" text-anchor="end">10 µs</text><text x="20" y="402" font-size="15" font-weight="700" fill="#ffffff" text-anchor="start">Output: only DIR delayed (switches 1 and 4 on)</text><text x="216" y="438" font-size="14" font-weight="700" fill="#5fb3ff" text-anchor="end">STEP out</text><path d="M230 444 H355.0 V418 H373.8 V444 H505.0 V418 H523.8 V444 H655.0 V418 H673.8 V444 H830.0 V418 H848.8 V444 H980" fill="none" stroke="#5fb3ff" stroke-width="2.5"/><text x="216" y="484" font-size="14" font-weight="700" fill="#f2c418" text-anchor="end">DIR out</text><path d="M230 490 H342.5 V464 H805.0 V490 H980" fill="none" stroke="#f2c418" stroke-width="2.5"/><path d="M742.5 456H805.0M742.5 451v10M805.0 451v10" stroke="#ffffff" stroke-width="1.5" fill="none"/><text x="736" y="461" font-size="13" font-weight="400" fill="#ffffff" text-anchor="end">10 µs</text><path d="M230.0 510v7" stroke="#b3b3b3"/><path d="M292.5 510v7" stroke="#b3b3b3"/><path d="M355.0 510v7" stroke="#b3b3b3"/><path d="M417.5 510v7" stroke="#b3b3b3"/><path d="M480.0 510v7" stroke="#b3b3b3"/><path d="M542.5 510v7" stroke="#b3b3b3"/><path d="M605.0 510v7" stroke="#b3b3b3"/><path d="M667.5 510v7" stroke="#b3b3b3"/><path d="M730.0 510v7" stroke="#b3b3b3"/><path d="M792.5 510v7" stroke="#b3b3b3"/><path d="M855.0 510v7" stroke="#b3b3b3"/><path d="M917.5 510v7" stroke="#b3b3b3"/><path d="M980.0 510v7" stroke="#b3b3b3"/><path d="M230 510H980" stroke="#b3b3b3"/><text x="230" y="533" font-size="13" font-weight="400" fill="#b3b3b3" text-anchor="middle">0</text><text x="355" y="533" font-size="13" font-weight="400" fill="#b3b3b3" text-anchor="middle">20</text><text x="480" y="533" font-size="13" font-weight="400" fill="#b3b3b3" text-anchor="middle">40</text><text x="605" y="533" font-size="13" font-weight="400" fill="#b3b3b3" text-anchor="middle">60</text><text x="730" y="533" font-size="13" font-weight="400" fill="#b3b3b3" text-anchor="middle">80</text><text x="855" y="533" font-size="13" font-weight="400" fill="#b3b3b3" text-anchor="middle">100</text><text x="980" y="533" font-size="13" font-weight="400" fill="#b3b3b3" text-anchor="middle">120</text><text x="216" y="533" font-size="13" font-weight="400" fill="#b3b3b3" text-anchor="end">time in µs</text></svg>
  </div>
  <figcaption>Calculated, typical, not measured. The controller&rsquo;s STEP pulse is drawn 3 µs wide; a delayed STEP pulse leaves with the width set by R2 and C2, about 3.2 µs, so it ends one delay later plus any difference between the two widths. The few tens of nanoseconds the chips add are not drawn.</figcaption>
</figure>
{:/nomarkdown}

#### How it works {#delay-how}

- **STEP** pulses are only a few microseconds long, shorter than most of these delays. A resistor and capacitor alone would swallow them, so the <a href="/images/extensions/perma-proto-breadboard/datasheets/cd74hc123.pdf">CD74HC123</a> does it with two one-shot timers. The first starts when STEP rises and runs for the delay (R1 with C1). When it ends, it starts the second, which sends out a new pulse about 3.2 µs long (R2 with C2).
- **DIR** stays at one level for much longer than the delay, so a resistor slowly charging a capacitor is enough. The <a href="/images/extensions/perma-proto-breadboard/datasheets/sn74hc14.pdf">SN74HC14</a> inverter switches only when that voltage crosses its threshold. Two such stages in a row (R3 with C3, R4 with C4) invert the signal twice, and each edge passes one charging and one discharging stage, so turning on and turning off are delayed by the same calculated time.
- **SW1** connects each screw of CN1 either to the controller pin or to the delayed signal.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want delayed</th><th>Switch 1</th><th>Switch 2</th><th>Switch 3</th><th>Switch 4</th></tr></thead>
  <tbody>
    <tr><td>STEP and DIR</td><td>off</td><td><b>ON</b></td><td>off</td><td><b>ON</b></td></tr>
    <tr><td>STEP only</td><td>off</td><td><b>ON</b></td><td><b>ON</b></td><td>off</td></tr>
    <tr><td>DIR only</td><td><b>ON</b></td><td>off</td><td>off</td><td><b>ON</b></td></tr>
    <tr><td>Neither (straight through)</td><td><b>ON</b></td><td>off</td><td><b>ON</b></td><td>off</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Set switches with the controller off. In each pair (1 and 2, 3 and 4) turn exactly one on: with both off that output is not connected, and with both on the direct signal wins while R5 or R6 limits the current. The drawings show 2 and 4 on.

#### Which capacitors {#delay-capacitors}

Version A uses one fixed capacitor per position. Version B adds a screwdriver-adjustable (trimmer) capacitor beside a smaller fixed one, and uses different values for R1, R3 and R4. Use C0G (NP0) ceramic capacitors.

**Version A, fixed capacitors**

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Delay you want</th><th>C1 (STEP)</th><th>C3 and C4 (DIR)</th><th>Calculated STEP / DIR</th></tr></thead>
  <tbody>
    <tr><td>1 µs</td><td>220 pF</td><td>47 pF</td><td>1.0 / 1.0 µs</td></tr>
    <tr><td>10 µs</td><td>2.2 nF</td><td>510 pF</td><td>10.3 / 9.9 µs</td></tr>
    <tr><td>20 µs</td><td>4.3 nF</td><td>1 nF</td><td>20.2 / 19.3 µs</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

**Version B, fixed capacitor beside each trimmer**

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Delay you want</th><th>C1, beside VC1</th><th>C3 and C4, beside VC2 and VC3</th><th>Trimmer range, STEP</th><th>Trimmer range, DIR</th></tr></thead>
  <tbody>
    <tr><td>1 µs</td><td>none</td><td>none</td><td>0.6 to 2.6 µs</td><td>0.5 to 2.3 µs</td></tr>
    <tr><td>10 µs</td><td>180 pF</td><td>200 pF</td><td>9.0 to 11.0 µs</td><td>9.0 to 10.8 µs</td></tr>
    <tr><td>20 µs</td><td>390 pF</td><td>430 pF</td><td>18.9 to 20.9 µs</td><td>18.7 to 20.5 µs</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

All delays are calculated from typical datasheet figures at 3.3 V, with 5 pF assumed for the board and chip input where it matters; none has been measured. Chips differ: the DIR delay of a particular <a href="/images/extensions/perma-proto-breadboard/datasheets/sn74hc14.pdf">SN74HC14</a> can be roughly half to one and a half times the figure shown, because its switching thresholds vary. The STEP delay varies less, but the formula used here underestimates it for small capacitors, most at 1 µs. If the delay matters, build version B and set it with an oscilloscope; if the trimmer cannot reach it, change the fixed capacitor beside it by one step.

#### Version A: fixed capacitors {#delay-fixed}

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/perma-proto-breadboard/projects/delay-fixed.webp"><img src="/images/extensions/perma-proto-breadboard/projects/delay-fixed.webp" alt="Perma-proto board with a 74HC123, a 74HC14, a four-position DIP switch, fixed capacitors, resistors and a three-pin screw terminal wired to a stepper driver" style="display:block;width:100%;height:auto;margin:0 auto"></a>
  <figcaption>Version A. Green brings STEP from GPIO 1 (pin PB1); yellow brings DIR from GPIO 2 (pin PJ4). Select the drawing to open it full size.</figcaption>
</figure>
{:/nomarkdown}

#### Version B: screwdriver trimmers {#delay-trim}

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/perma-proto-breadboard/projects/delay-trim.webp"><img src="/images/extensions/perma-proto-breadboard/projects/delay-trim.webp" alt="The same delay circuit with three screwdriver trimmer capacitors VC1, VC2 and VC3 added" style="display:block;width:100%;height:auto;margin:0 auto"></a>
  <figcaption>Version B adds VC1 (STEP), VC2 and VC3 (DIR) and one wire from A20 to A23. Select the drawing to open it full size.</figcaption>
</figure>
{:/nomarkdown}

#### Parts and wires {#delay-parts}

Both chips straddle the middle gap with the notch towards the connectors. No track needs cutting. The chips run from the +3.3 V rail; the +5 V rail is not used.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Part</th><th>A: fixed capacitors</th><th>B: trimmers</th><th>Holes</th><th>Job</th></tr></thead>
  <tbody>
    <tr><td>U1</td><td><a href="/images/extensions/perma-proto-breadboard/datasheets/cd74hc123.pdf">CD74HC123</a> DIP-16 dual one-shot timer</td><td>same</td><td>pins 16 to 9 in F21–F28; pins 1 to 8 in G21–G28</td><td>delays STEP and rebuilds the pulse</td></tr>
    <tr><td>U2</td><td><a href="/images/extensions/perma-proto-breadboard/datasheets/sn74hc14.pdf">SN74HC14</a> DIP-14 Schmitt-trigger inverters</td><td>same</td><td>pins 14 to 8 in F1–F7; pins 1 to 7 in G1–G7</td><td>delays DIR</td></tr>
    <tr><td>SW1</td><td>4-position DIP switch</td><td>same</td><td>positions 1 to 4 across the gap: F9/G9, F10/G10, F11/G11, F12/G12, ON towards the top edge</td><td>picks delayed or direct for each signal</td></tr>
    <tr><td>CN1</td><td>3-pin screw terminal, 5.08 mm pitch</td><td>same</td><td>pins in B9 (STEP), B11 (DIR), B13 (GND), wire entry towards the top edge</td><td>lead to the stepper driver</td></tr>
    <tr><td>R1</td><td>10 kΩ</td><td>100 kΩ</td><td>D22 to D26</td><td>sets the STEP delay with C1</td></tr>
    <tr><td>C1</td><td>see the table above</td><td>see the table above (nothing for 1 µs)</td><td>B22 to B23</td><td>sets the STEP delay</td></tr>
    <tr><td>VC1</td><td>not fitted</td><td>7–50 pF trimmer</td><td>C20 to C22</td><td>fine adjustment of STEP</td></tr>
    <tr><td>R2</td><td>10 kΩ</td><td>10 kΩ</td><td>L27 to +3.3 V rail 27</td><td>sets the output pulse width with C2</td></tr>
    <tr><td>C2</td><td>680 pF</td><td>680 pF</td><td>K26 to K27</td><td>output STEP pulse of about 3.2 µs</td></tr>
    <tr><td>R3</td><td>10 kΩ</td><td>22 kΩ</td><td>D2 to D8</td><td>first DIR delay stage</td></tr>
    <tr><td>R4</td><td>10 kΩ</td><td>22 kΩ</td><td>L5 to L8</td><td>second DIR delay stage</td></tr>
    <tr><td>C3</td><td>see the table above</td><td>see the table above (nothing for 1 µs)</td><td>E2 to E4</td><td>first DIR delay stage</td></tr>
    <tr><td>C4</td><td>same value as C3</td><td>same value as C3</td><td>J5 to J7</td><td>second DIR delay stage</td></tr>
    <tr><td>VC2</td><td>not fitted</td><td>7–50 pF trimmer</td><td>B2 to B4</td><td>fine adjustment of the first DIR stage</td></tr>
    <tr><td>VC3</td><td>not fitted</td><td>7–50 pF trimmer</td><td>H5 to H7</td><td>fine adjustment of the second DIR stage</td></tr>
    <tr><td>R5</td><td>330 Ω</td><td>330 Ω</td><td>I25 to I29</td><td>limits current if switches 1 and 2 are both on</td></tr>
    <tr><td>R6</td><td>330 Ω</td><td>330 Ω</td><td>I6 to I12</td><td>limits current if switches 3 and 4 are both on</td></tr>
    <tr><td>R7</td><td>100 kΩ</td><td>100 kΩ</td><td>K22 to lower ground rail 22</td><td>holds STEP low while the pin is not driven</td></tr>
    <tr><td>R8</td><td>100 kΩ</td><td>100 kΩ</td><td>K11 to lower ground rail 11</td><td>holds DIR low while the pin is not driven</td></tr>
    <tr><td>C5, C6</td><td>100 nF ceramic</td><td>100 nF ceramic</td><td>C5: B21 to upper ground rail 21; C6: B1 to upper ground rail 1</td><td>supply decoupling, one per chip</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Wire</th><th>From</th><th>To</th></tr></thead>
  <tbody>
    <tr><td>Top: red</td><td>E21</td><td>E26</td></tr>
    <tr><td>Top: red</td><td>+3.3 V rail 29</td><td>B26</td></tr>
    <tr><td>Top: red</td><td>K23</td><td>+3.3 V rail 23</td></tr>
    <tr><td>Top: red</td><td>+3.3 V rail 1</td><td>D1</td></tr>
    <tr><td>Top: black</td><td>L21</td><td>lower ground rail 21</td></tr>
    <tr><td>Top: black</td><td>L28</td><td>lower ground rail 28</td></tr>
    <tr><td>Top: black</td><td>A28</td><td>upper ground rail 28</td></tr>
    <tr><td>Top: black</td><td>A4</td><td>upper ground rail 4</td></tr>
    <tr><td>Top: black</td><td>A6</td><td>upper ground rail 6</td></tr>
    <tr><td>Top: black</td><td>L1</td><td>lower ground rail 1</td></tr>
    <tr><td>Top: black</td><td>L3</td><td>lower ground rail 3</td></tr>
    <tr><td>Top: black</td><td>K7</td><td>lower ground rail 7</td></tr>
    <tr><td>Top: black</td><td>E13</td><td>upper ground rail 14</td></tr>
    <tr><td>Top: violet</td><td>J24</td><td>E27</td></tr>
    <tr><td>Top: orange</td><td>E3</td><td>J8</td></tr>
    <tr><td>Top: yellow</td><td>D15</td><td>E8</td></tr>
    <tr><td>Top: yellow</td><td>E15</td><td>H11</td></tr>
    <tr><td>Top: green</td><td>H14</td><td>H9</td></tr>
    <tr><td>Top: green</td><td>L14</td><td>J22</td></tr>
    <tr><td>Top: blue</td><td>L29</td><td>J10</td></tr>
    <tr><td>Top: white</td><td>E9</td><td>E10</td></tr>
    <tr><td>Top: yellow</td><td>E11</td><td>E12</td></tr>
    <tr><td>Version B only, top: blue</td><td>A20</td><td>A23</td></tr>
    <tr><td>Off board: white</td><td>CN1, the screw over B9</td><td>driver STEP input</td></tr>
    <tr><td>Off board: yellow</td><td>CN1, the screw over B11</td><td>driver DIR input</td></tr>
    <tr><td>Off board: black</td><td>CN1, the screw over B13</td><td>driver logic ground</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

#### Limits {#delay-limits}

- **Step rate.** A step that arrives before the STEP timer has finished restarts it, and steps are lost. Keep the step rate below about 150,000 per second at 1 µs, 70,000 at 10 µs and 35,000 at 20 µs (calculated, with margin). The step rate is `steps_per_mm` × speed in mm/s; for example 400 steps/mm at 30 mm/s is 12,000 per second.
- **Outputs** are 3.3 V logic from a small chip, through 330 Ω when delayed. Connect them to driver inputs specified for 3.3 V logic. Do not assume they can drive an opto-isolated input: check its current and voltage, and add a buffer if needed.
- **Power-up.** The timer can send one stray STEP pulse as power comes on. Home the axis after switching on.
- **Polarity.** The STEP timer reacts to the rising edge, so do not invert the step pin with `!`. DIR may be inverted.

#### Setup {#delay-setup}

Give one motor the two Gadgeteer pins as its STEP and DIR pins. This example moves the Z motor (`gamma`) to an external driver, so the controller&rsquo;s own Z driver output no longer steps; change these lines in your existing `gamma` settings. It claims PB1 and PJ4, which the other projects on this page also use.

```ini
[actuator]
gamma.driver = external
gamma.step_pin = PB1
gamma.dir_pin = PJ4
```

The controller&rsquo;s default STEP pulse (`step_pulse_us = 1` in the `[system]` section) works with this circuit and needs no change. These keys are read by the [motion setup](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/robot/Robot.cpp) in the firmware.

**Test** before connecting the driver: with an oscilloscope, put one probe on the controller pin side (column 14, rows G–L, for STEP; column 15, rows A–E, for DIR) and one on the CN1 screw, then jog Z slowly. The output edge should follow the input edge by the delay you chose. In version B, turn VC1 for STEP, and VC2 and VC3 by equal amounts for DIR, with a plastic trimming tool, and read the delay with the tool removed.

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
    <tr><td>No delayed STEP pulses</td><td>Check switch 2 is on and switch 1 off, the violet wire J24 to E27, and 3.3 V on chip pins 3, 11 and 16 of U1.</td></tr>
    <tr><td>Delayed axis loses steps</td><td>The step rate is too high for the delay: lower the speed or use a shorter delay.</td></tr>
    <tr><td>DIR delay far from the table</td><td>Normal spread between chips: change C3 and C4 together, or build version B.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/perma-proto-breadboard/v17/perma-proto-breadboard-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/perma-proto-breadboard/v17/perma-proto-breadboard-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/perma-proto-breadboard/perma-proto-breadboard-diagram.webp">Board drawing (WebP)</a></td><td>The top view used on this page</td></tr>
    <tr><td><a href="/assets/downloads/extensions/perma-proto-breadboard/perma-cad-study.zip">CAD files (ZIP)</a></td><td>KiCad 9 board, schematic, footprints and licence texts (CERN-OHL-S-2.0)</td></tr>
    <tr><td><a href="/images/extensions/perma-proto-breadboard/projects/button.webp">Button drawing (WebP)</a></td><td>Populated board, full size</td></tr>
    <tr><td><a href="/images/extensions/perma-proto-breadboard/projects/touch.webp">Touch switch drawing (WebP)</a></td><td>Populated board, full size</td></tr>
    <tr><td><a href="/images/extensions/perma-proto-breadboard/projects/tapper.webp">Tapper drawing (WebP)</a></td><td>Populated board, full size</td></tr>
    <tr><td><a href="/images/extensions/perma-proto-breadboard/projects/wheel.webp">Handwheel drawing (WebP)</a></td><td>Populated board, full size</td></tr>
    <tr><td><a href="/images/extensions/perma-proto-breadboard/projects/delay-fixed.webp">Delay drawing, fixed capacitors (WebP)</a></td><td>Populated board, full size</td></tr>
    <tr><td><a href="/images/extensions/perma-proto-breadboard/projects/delay-trim.webp">Delay drawing, trimmers (WebP)</a></td><td>Populated board, full size</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 440" role="img" aria-labelledby="xb-pp-mount-t">
  <title id="xb-pp-mount-t">Mounting drawing of the Perma-proto breadboard, component side: outline 110 by 60 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="515" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="240" y="78" width="550" height="300" rx="15" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M240 56H790"/><path d="M240 50V62"/><path d="M790 50V62"/><path d="M816 78V378"/><path d="M810 78h12"/><path d="M810 378h12"/></g>
  <text x="515" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">110</text>
  <text x="828" y="233" font-size="15" font-weight="700" fill="#eaeaea">60</text>
  <circle cx="240" cy="78" r="4" fill="#ffcc33"/>
  <text x="228" y="83" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M182 104h30" fill="none"/><path d="M216 104l-8 -4v8z"/><path d="M182 104v30" fill="none"/><path d="M182 138l-4 -8h8z"/></g>
  <text x="220" y="109" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="178" y="154" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="265" cy="103" r="8" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M252 103h26M265 90v26" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="257" y="137" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.00</text>
  <circle cx="765" cy="103" r="8" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M752 103h26M765 90v26" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="773" y="137" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  105.00, 5.00</text>
  <circle cx="265" cy="353" r="8" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M252 353h26M265 340v26" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="257" y="331" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 55.00</text>
  <circle cx="765" cy="353" r="8" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M752 353h26M765 340v26" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="773" y="331" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">4</tspan>  105.00, 55.00</text>
  <text x="515" y="414" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
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
  <a href="/images/extensions/perma-proto-breadboard/datasheets/tlc555.pdf"><img src="/images/extensions/perma-proto-breadboard/datasheets/tlc555-page1.png" alt="First page of the TLC555 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/perma-proto-breadboard/datasheets/tlc555.pdf">TLC555 LinCMOS Timer</a> — Texas Instruments, 47 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/perma-proto-breadboard/datasheets/lm393.pdf"><img src="/images/extensions/perma-proto-breadboard/datasheets/lm393-page1.png" alt="First page of the LM393 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/perma-proto-breadboard/datasheets/lm393.pdf">LM393B, LM2903B, LM193, LM293, LM393 and LM2903 Dual Comparators</a> — Texas Instruments, 56 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/perma-proto-breadboard/datasheets/irlz44n.pdf"><img src="/images/extensions/perma-proto-breadboard/datasheets/irlz44n-page1.png" alt="First page of the IRLZ44N datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/perma-proto-breadboard/datasheets/irlz44n.pdf">IRLZ44NPbF HEXFET Power MOSFET</a> — Infineon (International Rectifier), 10 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/perma-proto-breadboard/datasheets/cd74hc123.pdf"><img src="/images/extensions/perma-proto-breadboard/datasheets/cd74hc123-page1.png" alt="First page of the CD74HC123 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/perma-proto-breadboard/datasheets/cd74hc123.pdf">CD54/74HC123 Dual Retriggerable Monostable Multivibrators with Reset</a> — Texas Instruments, 24 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/perma-proto-breadboard/datasheets/sn74hc14.pdf"><img src="/images/extensions/perma-proto-breadboard/datasheets/sn74hc14-page1.png" alt="First page of the SN74HC14 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/perma-proto-breadboard/datasheets/sn74hc14.pdf">SNx4HC14 Hex Inverters with Schmitt-Trigger Inputs</a> — Texas Instruments, 38 pages.</figcaption>
</figure>
{:/nomarkdown}


See all boards on the [extension boards](/extension-boards) page.
