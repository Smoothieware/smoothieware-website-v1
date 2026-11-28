---
layout: default
title: "Differential I2C signal extender"
description: "A host board, chainable remote boards and a terminator carrying one I2C bus over two differential pairs of a Cat5e cable, with a separate 12 V feed: pinout, wiring, uses, limits and files."
permalink: /extensions/differential-i2c-signal-extender
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Signal interfaces</p>
    <h1 id="differential-i2c-signal-extender">Differential I2C signal extender</h1>
    <p class="xb-lead">A host board, one or more remote boards and a terminator carry an I2C bus from the controller to sensors, displays and expanders several metres away. The bus travels as two differential pairs in an ordinary Cat5e cable and needs no address or setting of its own.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#what-you-need">What you need</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/differential-i2c-signal-extender/v02/differential-i2c-signal-extender-host-diagram.webp" alt="Top view of the I2C extender host board: two ten-pin sockets along the top, 12 V terminals on the left and right, a link jack at the bottom.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Smoothieware does not support this board yet. If you have a use for it, email
  <a href="mailto:wolf.arthur@gmail.com">wolf.arthur@gmail.com</a>: we will implement it, or help you implement it.
</sl-alert>
<div class="xb-stats">
  <div class="xb-stat"><b>2 pairs</b><span>SDA and SCL, differential</span></div>
  <div class="xb-stat"><b>1 MHz</b><span>datasheet maximum on 3&nbsp;m</span></div>
  <div class="xb-stat"><b>Cat5e</b><span>straight-through cable</span></div>
  <div class="xb-stat"><b>12 V</b><span>on a separate two-wire lead</span></div>
  <div class="xb-stat"><b>3.3 V + 5 V</b><span>made at each remote, 100&nbsp;mA each</span></div>
  <div class="xb-stat"><b>Chainable</b><span>remote to remote, one terminator</span></div>
</div>
<nav class="xb-nav" aria-label="On this page">
  <a href="#specs">Tech specs</a>
  <a href="#tour">Board tour</a>
  <a href="#pinout">Pinout</a>
  <a href="#what-you-need">What you need</a>
  <a href="#get-started">Get started</a>
  <a href="#uses">Uses</a>
  <a href="#configuration">Configuration</a>
  <a href="#how-it-works">How it works</a>
  <a href="#chaining">Chaining</a>
  <a href="#troubleshooting">Troubleshooting</a>
  <a href="#downloads">Downloads</a>
  <a href="#mounting">Mounting</a>
  <a href="#electrical">Electrical</a>
  <a href="#simulation">Simulation</a>
  <a href="#datasheets">Datasheets</a>
</nav>
<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  The link jack looks like a network socket but is not Ethernet. Never connect it to a computer, router or switch. All boards share ground: this is not an isolating extender.
</sl-alert>
{:/nomarkdown}

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>Reach an I2C device mounted far from the controller: toolhead, gantry, enclosure wall or operator panel</td></tr>
    <tr><td>Link</td><td><a href="/images/extensions/differential-i2c-signal-extender/datasheets/pca9615.pdf">PCA9615</a> differential I2C buffer on the host and each remote; SCL on cable contacts 1 and 2, SDA on 3 and 6</td></tr>
    <tr><td>Clock and length</td><td>Datasheet figure: up to 1&nbsp;MHz over 3&nbsp;m of cable; longer runs need a lower clock</td></tr>
    <tr><td>Logic level</td><td>3.3&nbsp;V I2C on the host and remotes. Do not connect a 5&nbsp;V I2C bus</td></tr>
    <tr><td>Pull-ups</td><td>3.3&nbsp;k&Omega; on SDA and SCL on the host and each remote, removable</td></tr>
    <tr><td>Host connectors</td><td>Ten-pin socket in (I IN), ten-pin socket on (CHAIN), Qwiic, 12&nbsp;V in, 12&nbsp;V out, link jack</td></tr>
    <tr><td>Remote connectors</td><td>Two ten-pin sockets in parallel (OUT A, OUT B), Qwiic, 12&nbsp;V in, two link jacks (IN and OUT)</td></tr>
    <tr><td>Terminator</td><td>One link jack; takes its power from the last remote&rsquo;s OUT jack. Always needed</td></tr>
    <tr><td>Board sizes</td><td>Host 60 &times; 60&nbsp;mm, remote 60 &times; 70&nbsp;mm, terminator 40 &times; 40&nbsp;mm</td></tr>
    <tr><td>Power</td><td>12&nbsp;V into the host, two wires on to each remote</td></tr>
    <tr><td>Protection</td><td>Electronic fuse (<a href="/images/extensions/differential-i2c-signal-extender/datasheets/tps2660.pdf">TPS26600</a>) on the host and each remote for reverse polarity, undervoltage, overvoltage and overload, with fault lights; ESD array (<a href="/images/extensions/differential-i2c-signal-extender/datasheets/tpd4e1u06.pdf">TPD4E1U06</a>) on the cable pairs</td></tr>
    <tr><td>Remote supplies</td><td><a href="/images/extensions/differential-i2c-signal-extender/datasheets/ap63205.pdf">AP63205</a> 5&nbsp;V converter, <a href="/images/extensions/differential-i2c-signal-extender/datasheets/ap2112.pdf">AP2112K</a> 3.3&nbsp;V regulator, <a href="/images/extensions/differential-i2c-signal-extender/datasheets/tps2553.pdf">TPS2553</a> current-limited 5&nbsp;V output</td></tr>
    <tr><td>Works with</td><td>Ten-pin type I sockets of the <a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> (G_B and G_G carry I2C); no firmware driver</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on each drawing match the list below it. Boards are shown from the component side. The solder links are on the back.

### Host

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the host board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/differential-i2c-signal-extender/v02/differential-i2c-signal-extender-host-diagram.webp" alt="Top view of the I2C extender host board with numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:32.3%;top:9.4%" aria-label="1: input socket i in">1<span class="xb-pop"><b>Input socket I IN</b> — Ribbon cable from the controller.</span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:64.5%;top:9.4%" aria-label="2: chain socket">2<span class="xb-pop"><b>Chain socket</b> — Continues the controller&rsquo;s socket to a further local board.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-3" style="left:9.5%;top:42.4%" aria-label="3: 12v in">3<span class="xb-pop"><b>12V IN</b> — Supply for the whole set. Plus is the upper terminal.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-4" style="left:89.4%;top:40.0%" aria-label="4: 12v out">4<span class="xb-pop"><b>12V OUT</b> — Two wires to each remote. Plus is the lower terminal.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:50.0%;top:51.6%" aria-label="5: link buffer">5<span class="xb-pop"><b>Link buffer</b> — PCA9615: turns SDA and SCL into two differential pairs and back.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:50.0%;top:83.9%" aria-label="6: link jack">6<span class="xb-pop"><b>Link jack</b> — Cat5e cable to the first remote&rsquo;s IN jack. Not Ethernet.</span></a>
      <a class="xb-mk xb-pl" href="#tour-7" style="left:9.0%;top:66.1%" aria-label="7: qwiic socket">7<span class="xb-pop"><b>Qwiic socket</b> — The same I2C bus at 3.3&nbsp;V. The four empty pads on the right take a 2.54&nbsp;mm pin header instead: GND, 3.3&nbsp;V, SDA, SCL from the top.</span></a>
      <a class="xb-mk xb-pl" href="#tour-8" style="left:14.5%;top:59.7%" aria-label="8: lights">8<span class="xb-pop"><b>Lights</b> — From the top: FAULT, OVER V, REVERSE, 12V and 5V. See the table below.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Input socket I IN</b> — Ribbon cable from the controller.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket</b> — Continues the controller&rsquo;s socket to a further local board.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>12V IN</b> — Supply for the whole set. Plus is the upper terminal.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>12V OUT</b> — Two wires to each remote. Plus is the lower terminal.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Link buffer</b> — <a href="/images/extensions/differential-i2c-signal-extender/datasheets/pca9615.pdf">PCA9615</a>: turns SDA and SCL into two differential pairs and back.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Link jack</b> — Cat5e cable to the first remote&rsquo;s IN jack. Not Ethernet.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Qwiic socket</b> — The same I2C bus at 3.3&nbsp;V. The four empty pads on the right take a 2.54&nbsp;mm pin header instead: GND, 3.3&nbsp;V, SDA, SCL from the top.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Lights</b> — From the top: FAULT, OVER V, REVERSE, 12V and 5V. See the table below.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

### Remote

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the remote board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/differential-i2c-signal-extender/v02/differential-i2c-signal-extender-remote-diagram.webp" alt="Top view of the I2C extender remote board with numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb" href="#tour-9" style="left:32.3%;top:8.1%" aria-label="9: sockets out a and out b">9<span class="xb-pop"><b>Sockets OUT A and OUT B</b> — Two ten-pin sockets (this one and the one to its right) for boards at the far end, on the same bus and supplies.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-10" style="left:9.5%;top:36.5%" aria-label="10: 12v in">10<span class="xb-pop"><b>12V IN</b> — Two wires from the host. Plus is the upper terminal.</span></a>
      <a class="xb-mk xb-pb" href="#tour-11" style="left:50.0%;top:44.4%" aria-label="11: link buffer">11<span class="xb-pop"><b>Link buffer</b> — PCA9615: rebuilds SDA and SCL from the cable.</span></a>
      <a class="xb-mk" href="#tour-12" style="left:33.5%;top:86.2%" aria-label="12: link jack in">12<span class="xb-pop"><b>Link jack IN</b> — Cable from the host or from the previous remote.</span></a>
      <a class="xb-mk" href="#tour-13" style="left:66.5%;top:86.2%" aria-label="13: link jack out">13<span class="xb-pop"><b>Link jack OUT</b> — Cable to the next remote, or the terminator on the last one. It also carries the terminator&rsquo;s 5&nbsp;V.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-14" style="left:87.9%;top:28.5%" aria-label="14: supplies">14<span class="xb-pop"><b>Supplies</b> — AP63205 with this coil makes 5&nbsp;V from the 12&nbsp;V; below it, TPS2553 limits the 5&nbsp;V output and AP2112K makes 3.3&nbsp;V.</span></a>
      <a class="xb-mk xb-pl" href="#tour-15" style="left:9.0%;top:56.9%" aria-label="15: qwiic socket">15<span class="xb-pop"><b>Qwiic socket</b> — The remote bus at 3.3&nbsp;V. The four empty pads on the right take a pin header instead: GND, 3.3&nbsp;V, SDA, SCL from the top.</span></a>
      <a class="xb-mk xb-pl" href="#tour-16" style="left:14.5%;top:51.4%" aria-label="16: lights">16<span class="xb-pop"><b>Lights</b> — From the top: FAULT, OVER V, REVERSE, 3V3 and 5V. See the lights table below.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="9">
    <li id="tour-9"><span class="xb-n">9</span><div><b>Sockets OUT A and OUT B</b> — Two ten-pin sockets (this one and the one to its right) for boards at the far end, on the same bus and supplies.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>12V IN</b> — Two wires from the host. Plus is the upper terminal.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Link buffer</b> — <a href="/images/extensions/differential-i2c-signal-extender/datasheets/pca9615.pdf">PCA9615</a>: rebuilds SDA and SCL from the cable.</div></li>
    <li id="tour-12"><span class="xb-n">12</span><div><b>Link jack IN</b> — Cable from the host or from the previous remote.</div></li>
    <li id="tour-13"><span class="xb-n">13</span><div><b>Link jack OUT</b> — Cable to the next remote, or the terminator on the last one. It also carries the terminator&rsquo;s 5&nbsp;V.</div></li>
    <li id="tour-14"><span class="xb-n">14</span><div><b>Supplies</b> — <a href="/images/extensions/differential-i2c-signal-extender/datasheets/ap63205.pdf">AP63205</a> with this coil makes 5&nbsp;V from the 12&nbsp;V; below it, <a href="/images/extensions/differential-i2c-signal-extender/datasheets/tps2553.pdf">TPS2553</a> limits the 5&nbsp;V output and <a href="/images/extensions/differential-i2c-signal-extender/datasheets/ap2112.pdf">AP2112K</a> makes 3.3&nbsp;V.</div></li>
    <li id="tour-15"><span class="xb-n">15</span><div><b>Qwiic socket</b> — The remote bus at 3.3&nbsp;V. The four empty pads on the right take a pin header instead: GND, 3.3&nbsp;V, SDA, SCL from the top.</div></li>
    <li id="tour-16"><span class="xb-n">16</span><div><b>Lights</b> — From the top: FAULT, OVER V, REVERSE, 3V3 and 5V. See the lights table below.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

### Terminator

{::nomarkdown}
<figure>
  <img src="/images/extensions/differential-i2c-signal-extender/v02/differential-i2c-signal-extender-terminator-diagram.webp" alt="Top view of the I2C extender terminator board: six end resistors, a red 5 V light on the right and one link jack on the bottom edge." style="max-width:360px;width:100%;height:auto">
  <figcaption>The terminator has one link jack (short patch cable to the OUT jack of the last remote, not Ethernet), the end resistors of 604, 120 and 604&nbsp;&Omega; on each pair in two columns, and a 5V light that is lit while the last remote feeds it. Cut JP1 on the back to disable the light. There is nothing to configure.</figcaption>
</figure>
{:/nomarkdown}

### Lights {#lights}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th></th><th><span class="xb-led xb-led-red"></span> FAULT</th><th><span class="xb-led xb-led-red"></span> OVER V</th><th><span class="xb-led xb-led-red"></span> REVERSE</th><th><span class="xb-led xb-led-green"></span> Host 12V</th><th><span class="xb-led xb-led-green"></span> Remote 3V3</th><th><span class="xb-led xb-led-red"></span> 5V</th></tr></thead>
  <tbody>
    <tr><td>Where</td><td>Host and remote</td><td>Host and remote</td><td>Host and remote</td><td>Host</td><td>Remote</td><td>All three (D1 on the terminator)</td></tr>
    <tr><td>Lit means</td><td>The fuse is off</td><td>Supply above about 13.8&nbsp;V</td><td>12&nbsp;V connected backwards</td><td>12&nbsp;V present</td><td>3.3&nbsp;V present</td><td>5&nbsp;V present</td></tr>
    <tr><td>Disable it</td><td>Cut SJF1</td><td>Cut SJF2</td><td>Cut SJF3</td><td>Cut JP10</td><td>Cut JP10</td><td>Cut JP12; JP1 on the terminator</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Pinout {#pinout}

### Ten-pin sockets

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>Host I IN</th><th>Host CHAIN</th><th>Remote OUT A and OUT B</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>From the controller; powers the buffer&rsquo;s I2C side</td><td>Passed on</td><td>Made on the board</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>From the controller; powers the link driver</td><td>Passed on</td><td>Switched 5&nbsp;V, current limited</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">I/O</span></td><td>Passed to CHAIN (can be wired to enable, see links)</td><td>Passed on</td><td>Not connected</td></tr>
    <tr><td>4 to 7</td><td><span class="xb-pill xb-p-sig">I/O</span></td><td>Passed to CHAIN</td><td>Passed on</td><td>Not connected</td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">SDA</span></td><td>I2C data</td><td>Through link JP8</td><td>I2C data</td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">SCL</span></td><td>I2C clock</td><td>Through link JP9</td><td>I2C clock</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Ground</td><td>Ground</td><td>Ground</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Only SDA and SCL cross the cable: an interrupt or reset line of a far board cannot be returned to the controller.

### Qwiic socket and pin header

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Pin</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">SDA</span></td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">SCL</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Link jack and cable

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Jack contact</th><th>Signal</th><th>Twisted pair in the cable</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-sig">SCL +</span></td><td>First pair</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-sig">SCL −</span></td><td>First pair</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">SDA +</span></td><td>Second pair</td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">SDA −</span></td><td>Second pair</td></tr>
    <tr><td>4, 5</td><td>On a remote OUT jack and the terminator: 5&nbsp;V (4) and ground (5) for the terminator. Unconnected on the host and on IN</td><td>Third pair, or contacts 4 and 5</td></tr>
    <tr><td>7, 8</td><td>Unused</td><td>—</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Use a straight-through cable, wired the same way at both plugs (T568A or T568B). Power travels only in the short cable to the terminator; no power passes from one remote to the next. The metal shields of the host and remote jacks are joined to ground through a resistor and capacitor. Never connect OUT to OUT.

### 12 V terminals

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Terminal</th><th>Board</th><th>Connect to</th></tr></thead>
  <tbody>
    <tr><td>12V IN + and −</td><td>Host</td><td>A 12&nbsp;V DC supply</td></tr>
    <tr><td>12V OUT + and −</td><td>Host</td><td>12V IN of each remote, plus to plus</td></tr>
    <tr><td>12V IN + and −</td><td>Remote</td><td>12V OUT of the host, or the same 12&nbsp;V supply</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The positions of plus and minus differ between 12V OUT and 12V IN: read the printed signs at each terminal.

### Solder links {#options}

All links are on the back. Open a closed link by cutting the copper between its two pads; close an open one with a blob of solder.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>Board</th><th>As delivered</th><th>What it does</th></tr></thead>
  <tbody>
    <tr><td>JP1, JP2</td><td>Host and remote</td><td>Closed</td><td>The 3.3&nbsp;k&Omega; pull-ups on SDA and SCL</td></tr>
    <tr><td>JP8, JP9</td><td>Host</td><td>Closed</td><td>Pass SDA and SCL to the CHAIN socket</td></tr>
    <tr><td>JP11</td><td>Host</td><td>Closed</td><td>The link runs only while 12&nbsp;V is present at the host</td></tr>
    <tr><td>JP7</td><td>Host</td><td>Open</td><td>Lets socket contact 3 switch the link instead. Open JP11 first</td></tr>
    <tr><td>SJ2</td><td>Host</td><td>Closed</td><td>Connects the protected 12&nbsp;V to 12V OUT</td></tr>
    <tr><td>SJ1</td><td>Host and remote</td><td>Open</td><td>Joins the cable shield directly to ground</td></tr>
    <tr><td>SJF1, SJF2, SJF3</td><td>Host and remote</td><td>Closed</td><td>FAULT, OVER V and REVERSE lights</td></tr>
    <tr><td>JP10</td><td>Host and remote</td><td>Closed</td><td>12V light on the host, 3V3 light on the remote</td></tr>
    <tr><td>JP12</td><td>Host and remote</td><td>Closed</td><td>5V light</td></tr>
    <tr><td>JP1</td><td>Terminator</td><td>Closed</td><td>5V light</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>One host, one or more remotes, one terminator</b><span>The terminator is needed even with a single remote.</span></div>
  <div class="xb-card"><b>A short straight-through patch cable</b><span>From the last remote to the terminator.</span></div>
  <div class="xb-card"><b>A controller with an I2C socket</b><span>On the <a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a>, G_B or G_G.</span></div>
  <div class="xb-card"><b>Ten-pin 1.27&nbsp;mm ribbon cables</b><span>One to the host, one for each board at the remote.</span></div>
  <div class="xb-card"><b>A straight-through Cat5e cable</b><span>Or better. Keep it as short as the machine allows.</span></div>
  <div class="xb-card"><b>A 12&nbsp;V DC supply and wire</b><span>Two wires to the host and two to each remote.</span></div>
  <div class="xb-card"><b>A multimeter</b><span>To check the polarity before switching on.</span></div>
  <div class="xb-card"><b>Your own driver</b><span>The firmware has no module that reads or writes I2C devices.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Minimum wiring">
  <svg viewBox="0 0 1200 880" role="img" aria-labelledby="xb-i2c-wire"><title id="xb-i2c-wire">Wiring: a ribbon cable from controller socket G_G to host I IN, 12 volts into the host, two wires from the host 12 V output to the remote 12 V input, a straight Cat5e cable from the host to the remote jack marked IN, a short patch cable from the remote jack marked OUT to the terminator, and a sensor board on remote socket OUT A.</title><image href="/images/extensions/differential-i2c-signal-extender/smoothieboard-v2-prime.webp" x="10" y="10" width="440" height="440"/><image href="/images/extensions/equipment/bar-power-supply-9-terminal.webp" x="10" y="560" width="460" height="248"/><image href="/images/extensions/differential-i2c-signal-extender/v02/differential-i2c-signal-extender-host-diagram.webp" x="500" y="40" width="278.6" height="278.6"/><image href="/images/extensions/differential-i2c-signal-extender/v02/differential-i2c-signal-extender-remote-diagram.webp" x="840" y="40" width="278.6" height="323.6"/><image href="/images/extensions/differential-i2c-signal-extender/v02/differential-i2c-signal-extender-terminator-diagram.webp" x="860" y="540" width="188.5" height="188.5"/><image href="/images/extensions/nine-axis-imu/nine-axis-imu-diagram.webp" x="540" y="520" width="260" height="260"/><path d="M220 283 H466 V20 H589.8 V65.9" fill="none" stroke="#0d0f12" stroke-width="16"/><path d="M220 283 H466 V20 H589.8 V65.9" fill="none" stroke="#a3a3a3" stroke-width="12"/><circle cx="220" cy="283" r="5" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><circle cx="589.8" cy="65.9" r="5" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><path d="M274 777 V830 H506 V147.8 H528.6" fill="none" stroke="#0d0f12" stroke-width="8"/><path d="M274 777 V830 H506 V147.8 H528.6" fill="none" stroke="#ff9f43" stroke-width="4"/><path d="M236 777 V855 H488 V170.6 H528.6" fill="none" stroke="#0d0f12" stroke-width="8"/><path d="M236 777 V855 H488 V170.6 H528.6" fill="none" stroke="#939393" stroke-width="4"/><path d="M750.0 163.5 H796 V147.8 H868.6" fill="none" stroke="#0d0f12" stroke-width="8"/><path d="M750.0 163.5 H796 V147.8 H868.6" fill="none" stroke="#ff9f43" stroke-width="4"/><path d="M750.0 140.7 H818 V170.6 H868.6" fill="none" stroke="#0d0f12" stroke-width="8"/><path d="M750.0 140.7 H818 V170.6 H868.6" fill="none" stroke="#939393" stroke-width="4"/><path d="M639.3 314.3 V420 H933.4 V359.3" fill="none" stroke="#0d0f12" stroke-width="13"/><path d="M639.3 314.3 V420 H933.4 V359.3" fill="none" stroke="#5fb3ff" stroke-width="9"/><path d="M1025.2 359.3 V420 H1155 V790 H954.3 V724.3" fill="none" stroke="#0d0f12" stroke-width="13"/><path d="M1025.2 359.3 V420 H1155 V790 H954.3 V724.3" fill="none" stroke="#5fb3ff" stroke-width="9"/><path d="M929.8 65.9 V20 H1186 V480 H520 V650 H575" fill="none" stroke="#0d0f12" stroke-width="16"/><path d="M929.8 65.9 V20 H1186 V480 H520 V650 H575" fill="none" stroke="#a3a3a3" stroke-width="12"/><circle cx="929.8" cy="65.9" r="5" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><circle cx="575" cy="650" r="5" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><circle cx="274" cy="777" r="5" fill="#ff9f43" stroke="#0d0f12" stroke-width="1.5"/><circle cx="236" cy="777" r="5" fill="#939393" stroke="#0d0f12" stroke-width="1.5"/><circle cx="528.6" cy="147.8" r="5" fill="#ff9f43" stroke="#0d0f12" stroke-width="1.5"/><circle cx="528.6" cy="170.6" r="5" fill="#939393" stroke="#0d0f12" stroke-width="1.5"/><circle cx="750.0" cy="163.5" r="5" fill="#ff9f43" stroke="#0d0f12" stroke-width="1.5"/><circle cx="750.0" cy="140.7" r="5" fill="#939393" stroke="#0d0f12" stroke-width="1.5"/><circle cx="868.6" cy="147.8" r="5" fill="#ff9f43" stroke="#0d0f12" stroke-width="1.5"/><circle cx="868.6" cy="170.6" r="5" fill="#939393" stroke="#0d0f12" stroke-width="1.5"/><text x="230" y="478" text-anchor="middle" font-size="20" font-weight="700" fill="#eaeaea" stroke="#0d0f12" stroke-width="4" paint-order="stroke">Smoothieboard V2 Prime, socket G_G</text><text x="240" y="545" text-anchor="middle" font-size="20" font-weight="700" fill="#eaeaea" stroke="#0d0f12" stroke-width="4" paint-order="stroke">12 V supply</text><text x="640" y="360" text-anchor="middle" font-size="20" font-weight="700" fill="#eaeaea" stroke="#0d0f12" stroke-width="4" paint-order="stroke">Host</text><text x="1110" y="385" text-anchor="middle" font-size="20" font-weight="700" fill="#eaeaea" stroke="#0d0f12" stroke-width="4" paint-order="stroke">Remote</text><text x="955" y="525" text-anchor="middle" font-size="20" font-weight="700" fill="#eaeaea" stroke="#0d0f12" stroke-width="4" paint-order="stroke">Terminator</text><text x="760" y="450" text-anchor="middle" font-size="20" font-weight="700" fill="#5fb3ff" stroke="#0d0f12" stroke-width="4" paint-order="stroke">Cat5e cable</text><text x="1040" y="825" text-anchor="middle" font-size="20" font-weight="700" fill="#5fb3ff" stroke="#0d0f12" stroke-width="4" paint-order="stroke">Short patch cable</text><text x="800" y="120" text-anchor="middle" font-size="20" font-weight="700" fill="#ff9f43" stroke="#0d0f12" stroke-width="4" paint-order="stroke">12 V lead</text><text x="670" y="815" text-anchor="middle" font-size="20" font-weight="700" fill="#eaeaea" stroke="#0d0f12" stroke-width="4" paint-order="stroke">Your I2C board, on OUT A</text></svg>
  </div>
  <figcaption>The minimum wiring: plus to plus and minus to minus on both power runs, a straight Cat5e cable into IN, the terminator on OUT, one ribbon cable at each end. The supply is a typical unit; follow the printing on yours.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Switch the machine off</h3>
    <p>Do all wiring with power off.</p>
  </li>
  <li class="xb-step">
    <h3>Wire the 12&nbsp;V</h3>
    <p>Supply plus and minus to host 12V IN. Host 12V OUT plus to remote 12V IN plus, minus to minus.</p>
    <p class="xb-expect">A multimeter on the loose wires shows the right polarity before they go into the terminals.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the link cable</h3>
    <p>Plug the straight-through Cat5e cable into the host jack and into the remote jack marked IN.</p>
  </li>
  <li class="xb-step">
    <h3>Plug in the terminator</h3>
    <p>Use a short straight-through cable from the remote jack marked OUT to the terminator.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the controller</h3>
    <p>Ribbon cable from socket G_G or G_B to host I IN.</p>
  </li>
  <li class="xb-step">
    <h3>Switch on with nothing on the remote</h3>
    <p>Look at all three boards.</p>
    <p class="xb-expect">Host: 12V and 5V lights on. Remote: 3V3 and 5V lights on. Terminator: 5V light on. No FAULT, OVER V or REVERSE light.</p>
  </li>
  <li class="xb-step">
    <h3>Add your board</h3>
    <p>Switch off, connect your I2C board to OUT A, OUT B or Qwiic, and switch on again.</p>
    <p class="xb-expect">Your driver finds the device at its normal address.</p>
  </li>
</ol>
{:/nomarkdown}

## Uses {#uses}

The extender is transparent: a device at the far end keeps its address. Each example uses the host wiring shown [above](#get-started) and needs your own driver.

### A sensor on a moving part

Put a [9-axis IMU](/extensions/nine-axis-imu) or any other I2C sensor board on the gantry or toolhead, as in the wiring figure. Keep the clock at 100&nbsp;kHz at first and raise it only when it works.

### An operator panel away from the controller

A [character LCD](/extensions/character-lcd-display) (address 0x27 as delivered) and a [16-key keypad](/extensions/sixteen-key-keypad) (set it to 0x20) share the remote bus. The LCD takes both 5&nbsp;V and 3.3&nbsp;V from its socket; its estimated backlight current of about 80&nbsp;mA is most of the 100&nbsp;mA allowed for 5&nbsp;V, and both boards are limited to 100&nbsp;kHz. A keypad is never an emergency stop.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Remote operator panel">
  <svg viewBox="0 0 1200 715" role="img" aria-labelledby="xb-i2c-panel"><title id="xb-i2c-panel">A remote operator panel: the character LCD board on remote OUT A and the 16-key keypad on remote OUT B.</title><image href="/images/extensions/differential-i2c-signal-extender/v02/differential-i2c-signal-extender-remote-diagram.webp" x="450" y="40" width="278.6" height="323.6"/><image href="/images/extensions/character-lcd-display/character-lcd-display-diagram.webp" x="30" y="390" width="420" height="270"/><path d="M539.8 65.9 V18 H14 V465 H51" fill="none" stroke="#0d0f12" stroke-width="16"/><path d="M539.8 65.9 V18 H14 V465 H51" fill="none" stroke="#a3a3a3" stroke-width="12"/><circle cx="539.8" cy="65.9" r="5" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><circle cx="51" cy="465" r="5" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><text x="240.0" y="690" text-anchor="middle" font-size="20" font-weight="700" fill="#eaeaea" stroke="#0d0f12" stroke-width="4" paint-order="stroke">Character LCD, address 0x27</text><image href="/images/extensions/sixteen-key-keypad/sixteen-key-keypad-diagram.webp" x="880" y="320" width="226" height="300"/><path d="M629.8 65.9 V18 H850 V381.5 H894" fill="none" stroke="#0d0f12" stroke-width="16"/><path d="M629.8 65.9 V18 H850 V381.5 H894" fill="none" stroke="#a3a3a3" stroke-width="12"/><circle cx="629.8" cy="65.9" r="5" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><circle cx="894" cy="381.5" r="5" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><text x="993.0" y="650" text-anchor="middle" font-size="20" font-weight="700" fill="#eaeaea" stroke="#0d0f12" stroke-width="4" paint-order="stroke">16-key keypad, address 0x20</text><text x="590" y="400" text-anchor="middle" font-size="20" font-weight="700" fill="#eaeaea" stroke="#0d0f12" stroke-width="4" paint-order="stroke">Remote, wired as above</text></svg>
  </div>
  <figcaption>A remote operator panel: both boards share the bus and answer at different addresses.</figcaption>
</figure>
{:/nomarkdown}

### Two identical sensors

Two [3-axis accelerometers](/extensions/three-axis-accelerometer), one left at 0x18 and one with JP4 closed for 0x19, measure vibration at two places of the same machine. Open the pull-up links on the added boards so that the remote keeps one set.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Two sensors">
  <svg viewBox="0 0 1200 715" role="img" aria-labelledby="xb-i2c-accel"><title id="xb-i2c-accel">Two accelerometer boards on the remote, one at address 0x18 and one at 0x19.</title><image href="/images/extensions/differential-i2c-signal-extender/v02/differential-i2c-signal-extender-remote-diagram.webp" x="450" y="40" width="278.6" height="323.6"/><image href="/images/extensions/three-axis-accelerometer/three-axis-accelerometer-diagram.webp" x="60" y="340" width="260" height="260"/><path d="M539.8 65.9 V18 H14 V470 H94.6" fill="none" stroke="#0d0f12" stroke-width="16"/><path d="M539.8 65.9 V18 H14 V470 H94.6" fill="none" stroke="#a3a3a3" stroke-width="12"/><circle cx="539.8" cy="65.9" r="5" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><circle cx="94.6" cy="470" r="5" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><text x="190.0" y="630" text-anchor="middle" font-size="20" font-weight="700" fill="#eaeaea" stroke="#0d0f12" stroke-width="4" paint-order="stroke">Accelerometer, 0x18</text><image href="/images/extensions/three-axis-accelerometer/three-axis-accelerometer-diagram.webp" x="880" y="340" width="260" height="260"/><path d="M629.8 65.9 V18 H850 V470 H914.6" fill="none" stroke="#0d0f12" stroke-width="16"/><path d="M629.8 65.9 V18 H850 V470 H914.6" fill="none" stroke="#a3a3a3" stroke-width="12"/><circle cx="629.8" cy="65.9" r="5" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><circle cx="914.6" cy="470" r="5" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><text x="1010.0" y="630" text-anchor="middle" font-size="20" font-weight="700" fill="#eaeaea" stroke="#0d0f12" stroke-width="4" paint-order="stroke">Accelerometer, 0x19 (JP4 closed)</text><text x="590" y="400" text-anchor="middle" font-size="20" font-weight="700" fill="#eaeaea" stroke="#0d0f12" stroke-width="4" paint-order="stroke">Remote, wired as above</text></svg>
  </div>
  <figcaption>Two identical sensors need different addresses: close the address link on one of them.</figcaption>
</figure>
{:/nomarkdown}

### Several far places on one bus

Chain a second remote when sensors sit in two places, for example one on the gantry and one on the toolhead. All remotes are the same I2C bus, so every device on all of them needs its own address, and each remote adds its own pull-ups on its side of the buffer only. The number of remotes has no tested limit.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Several remotes">
  <svg viewBox="0 0 1200 450" role="img" aria-labelledby="xb-i2c-several"><title id="xb-i2c-several">Several remotes: the host links to the IN jack of the first remote, its OUT jack links to the IN jack of the second, and the terminator sits on the OUT jack of the last. Each remote has its own two-wire 12 volt feed from the host terminal.</title><image href="/images/extensions/differential-i2c-signal-extender/v02/differential-i2c-signal-extender-host-diagram.webp" x="20" y="60" width="222.8" height="222.8"/><image href="/images/extensions/differential-i2c-signal-extender/v02/differential-i2c-signal-extender-remote-diagram.webp" x="330" y="60" width="222.8" height="258.8"/><image href="/images/extensions/differential-i2c-signal-extender/v02/differential-i2c-signal-extender-remote-diagram.webp" x="650" y="60" width="222.8" height="258.8"/><image href="/images/extensions/differential-i2c-signal-extender/v02/differential-i2c-signal-extender-terminator-diagram.webp" x="990" y="100" width="150.8" height="150.8"/><path d="M131.4 279.4 V380 H404.7 V315.4" fill="none" stroke="#0d0f12" stroke-width="12"/><path d="M131.4 279.4 V380 H404.7 V315.4" fill="none" stroke="#5fb3ff" stroke-width="8"/><path d="M478.1 315.4 V380 H724.7 V315.4" fill="none" stroke="#0d0f12" stroke-width="12"/><path d="M478.1 315.4 V380 H724.7 V315.4" fill="none" stroke="#5fb3ff" stroke-width="8"/><path d="M798.1 315.4 V380 H1065.4 V247.4" fill="none" stroke="#0d0f12" stroke-width="12"/><path d="M798.1 315.4 V380 H1065.4 V247.4" fill="none" stroke="#5fb3ff" stroke-width="8"/><path d="M220.0 158.8 H262 V40 H308 V146.2 H352.9" fill="none" stroke="#0d0f12" stroke-width="8"/><path d="M220.0 158.8 H262 V40 H308 V146.2 H352.9" fill="none" stroke="#ff9f43" stroke-width="4"/><path d="M220.0 140.5 H282 V22 H322 V164.5 H352.9" fill="none" stroke="#0d0f12" stroke-width="8"/><path d="M220.0 140.5 H282 V22 H322 V164.5 H352.9" fill="none" stroke="#939393" stroke-width="4"/><path d="M220.0 158.8 H262 V40 H628 V146.2 H672.9" fill="none" stroke="#0d0f12" stroke-width="8"/><path d="M220.0 158.8 H262 V40 H628 V146.2 H672.9" fill="none" stroke="#ff9f43" stroke-width="4"/><path d="M220.0 140.5 H282 V22 H642 V164.5 H672.9" fill="none" stroke="#0d0f12" stroke-width="8"/><path d="M220.0 140.5 H282 V22 H642 V164.5 H672.9" fill="none" stroke="#939393" stroke-width="4"/><circle cx="308" cy="40" r="5" fill="#ff9f43" stroke="#0d0f12" stroke-width="1.5"/><circle cx="322" cy="22" r="5" fill="#939393" stroke="#0d0f12" stroke-width="1.5"/><text x="135" y="430" text-anchor="middle" font-size="20" font-weight="700" fill="#eaeaea" stroke="#0d0f12" stroke-width="4" paint-order="stroke">Host</text><text x="440" y="430" text-anchor="middle" font-size="20" font-weight="700" fill="#eaeaea" stroke="#0d0f12" stroke-width="4" paint-order="stroke">Remote 1, IN to OUT</text><text x="760" y="430" text-anchor="middle" font-size="20" font-weight="700" fill="#eaeaea" stroke="#0d0f12" stroke-width="4" paint-order="stroke">Remote 2, IN to OUT</text><text x="1070" y="430" text-anchor="middle" font-size="20" font-weight="700" fill="#eaeaea" stroke="#0d0f12" stroke-width="4" paint-order="stroke">Terminator</text></svg>
  </div>
  <figcaption>Each cable goes from a jack marked OUT (or the host) to a jack marked IN. Only the last OUT carries the terminator. Every remote gets its own 12&nbsp;V pair.</figcaption>
</figure>
{:/nomarkdown}

## Configuration {#configuration}

The boards have nothing to configure in the firmware and use no pin other than SDA and SCL (plus contact 3 if you move the enable function to it with JP7). Smoothieware has no module for I2C devices, so there is no configuration block to paste.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>What to set</th><th>Where</th></tr></thead>
  <tbody>
    <tr><td>Talk to a far device</td><td>Its normal address</td><td>Your driver</td></tr>
    <tr><td>A longer cable</td><td>A lower I2C clock</td><td>Your driver</td></tr>
    <tr><td>Switch the link off from the controller</td><td>Open JP11, close JP7, drive contact 3 low to disable</td><td>Host solder links</td></tr>
    <tr><td>Use pull-ups elsewhere</td><td>Open JP1 and JP2</td><td>The board concerned</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1200 180" role="img" aria-labelledby="xb-i2c-path"><title id="xb-i2c-path">Signal path: controller, host buffer, two differential pairs in the cable, remote buffer, your boards. Both data and clock travel in both directions.</title><rect x="20" y="40" width="170" height="100" rx="8" fill="#1f2226" stroke="#e4e4e4"/><text x="105" y="82" text-anchor="middle" font-size="18" font-weight="700" fill="#eaeaea" stroke="#0d0f12" stroke-width="4" paint-order="stroke">Controller</text><text x="105" y="112" text-anchor="middle" font-size="14" font-weight="700" fill="#b3b3b3" stroke="#0d0f12" stroke-width="4" paint-order="stroke">SDA, SCL at 3.3 V</text><path d="M190 90 H260" fill="none" stroke="#0d0f12" stroke-width="9"/><path d="M190 90 H260" fill="none" stroke="#5fb3ff" stroke-width="5"/><rect x="260" y="40" width="170" height="100" rx="8" fill="#1f2226" stroke="#e4e4e4"/><text x="345" y="82" text-anchor="middle" font-size="18" font-weight="700" fill="#eaeaea" stroke="#0d0f12" stroke-width="4" paint-order="stroke">Host PCA9615</text><text x="345" y="112" text-anchor="middle" font-size="14" font-weight="700" fill="#b3b3b3" stroke="#0d0f12" stroke-width="4" paint-order="stroke">makes two pairs</text><path d="M430 90 H520" fill="none" stroke="#0d0f12" stroke-width="9"/><path d="M430 90 H520" fill="none" stroke="#5fb3ff" stroke-width="5"/><rect x="520" y="40" width="170" height="100" rx="8" fill="#1f2226" stroke="#e4e4e4"/><text x="605" y="82" text-anchor="middle" font-size="18" font-weight="700" fill="#eaeaea" stroke="#0d0f12" stroke-width="4" paint-order="stroke">Cat5e cable</text><text x="605" y="112" text-anchor="middle" font-size="14" font-weight="700" fill="#b3b3b3" stroke="#0d0f12" stroke-width="4" paint-order="stroke">SCL 1-2, SDA 3 and 6</text><path d="M690 90 H770" fill="none" stroke="#0d0f12" stroke-width="9"/><path d="M690 90 H770" fill="none" stroke="#5fb3ff" stroke-width="5"/><rect x="770" y="40" width="170" height="100" rx="8" fill="#1f2226" stroke="#e4e4e4"/><text x="855" y="82" text-anchor="middle" font-size="18" font-weight="700" fill="#eaeaea" stroke="#0d0f12" stroke-width="4" paint-order="stroke">Remote PCA9615</text><text x="855" y="112" text-anchor="middle" font-size="14" font-weight="700" fill="#b3b3b3" stroke="#0d0f12" stroke-width="4" paint-order="stroke">makes SDA, SCL</text><path d="M940 90 H1010" fill="none" stroke="#0d0f12" stroke-width="9"/><path d="M940 90 H1010" fill="none" stroke="#5fb3ff" stroke-width="5"/><rect x="1010" y="40" width="170" height="100" rx="8" fill="#1f2226" stroke="#e4e4e4"/><text x="1095" y="82" text-anchor="middle" font-size="18" font-weight="700" fill="#eaeaea" stroke="#0d0f12" stroke-width="4" paint-order="stroke">Your boards</text><text x="1095" y="112" text-anchor="middle" font-size="14" font-weight="700" fill="#b3b3b3" stroke="#0d0f12" stroke-width="4" paint-order="stroke">3.3 V I2C</text></svg>
  </div>
  <figcaption>Data and clock both travel in either direction; a terminator ends the cable at the last remote, and no board needs an address or a setting.</figcaption>
</figure>
{:/nomarkdown}

An ordinary I2C bus is one wire for data and one for clock, each compared with ground. Noise and ground differences along a long cable upset it. The <a href="/images/extensions/differential-i2c-signal-extender/datasheets/pca9615.pdf">PCA9615</a> sends each signal as the voltage difference between two twisted wires, and the receiver at the other end only looks at that difference. Both signals stay bidirectional, so devices can answer and can slow the clock down.

Resistors at the two ends of the cable (604, 120 and 604&nbsp;&Omega;, on the host and on the terminator) end it and hold an idle line in its resting state. Remotes in between only tap the pairs, which is why they chain.

The I2C sides of the buffer pull a low signal down to about 0.47 to 0.6&nbsp;V rather than to zero, and treat only signals below 0.4&nbsp;V as a new low. This is how the chip knows which side started a signal. Normal I2C devices are unaffected; a second buffer that does the same thing must not be placed in series.

The host buffer is enabled only while 12&nbsp;V is present at the host, so with the supply off the controller&rsquo;s own bus is left alone. This does not cover a remote that loses power on its own: see [troubleshooting](#troubleshooting).

{% include _includes/extender-board-comparison.html %}

## Chaining {#chaining}

### Remote to remote

Cable the host to the IN jack of the first remote, each OUT to the next IN, and the terminator to the last OUT, as in [several far places](#uses). Each remote needs its own 12&nbsp;V pair; the host&rsquo;s 12V OUT is limited to about 0.5&nbsp;A in total, so feed further remotes straight from the supply if they draw more.

### Next to the controller

The host has a second socket, CHAIN, that carries the controller&rsquo;s socket on to a further board close to the controller. All contacts go straight through; SDA and SCL pass through the links JP8 and JP9, which you cut to give the chained board neither signal. A board on CHAIN shares the I2C bus, so it needs an address that no far device uses, and a pin used by one board is not free for the next. 

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Chaining">
  <svg viewBox="0 0 1200 500" role="img" aria-labelledby="xb-i2c-chain"><title id="xb-i2c-chain">Chaining: controller socket G_G to host I IN, and host CHAIN to an accelerometer board mounted near the controller.</title><image href="/images/extensions/differential-i2c-signal-extender/smoothieboard-v2-prime.webp" x="10" y="10" width="440" height="440"/><image href="/images/extensions/differential-i2c-signal-extender/v02/differential-i2c-signal-extender-host-diagram.webp" x="460" y="30" width="278.6" height="278.6"/><image href="/images/extensions/three-axis-accelerometer/three-axis-accelerometer-diagram.webp" x="880" y="60" width="260" height="260"/><path d="M220 283 H455 V14 H549.8 V55.9" fill="none" stroke="#0d0f12" stroke-width="16"/><path d="M220 283 H455 V14 H549.8 V55.9" fill="none" stroke="#a3a3a3" stroke-width="12"/><circle cx="220" cy="283" r="5" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><circle cx="549.8" cy="55.9" r="5" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><path d="M639.8 55.9 V14 H860 V190 H915" fill="none" stroke="#0d0f12" stroke-width="16"/><path d="M639.8 55.9 V14 H860 V190 H915" fill="none" stroke="#a3a3a3" stroke-width="12"/><circle cx="639.8" cy="55.9" r="5" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><circle cx="915" cy="190" r="5" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><text x="230" y="478" text-anchor="middle" font-size="20" font-weight="700" fill="#eaeaea" stroke="#0d0f12" stroke-width="4" paint-order="stroke">Smoothieboard V2 Prime, socket G_G</text><text x="600" y="350" text-anchor="middle" font-size="20" font-weight="700" fill="#eaeaea" stroke="#0d0f12" stroke-width="4" paint-order="stroke">Host, I IN to CHAIN</text><text x="1010" y="350" text-anchor="middle" font-size="20" font-weight="700" fill="#eaeaea" stroke="#0d0f12" stroke-width="4" paint-order="stroke">Second, local board</text></svg>
  </div>
  <figcaption>One controller socket serves the far end and a local board. Each contact leaves CHAIN on the same number; the table gives the two with links.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Arrives on I IN</th><th>Leaves on CHAIN</th><th>How</th></tr></thead>
  <tbody>
    <tr><td>Pins 1, 2 and 10 (power and ground)</td><td>Pins 1, 2 and 10</td><td>Direct</td></tr>
    <tr><td>Pins 3 to 7</td><td>Pins 3 to 7, same numbers</td><td>Direct</td></tr>
    <tr><td>Pin 8, SDA</td><td>Pin 8</td><td>Link JP8, closed</td></tr>
    <tr><td>Pin 9, SCL</td><td>Pin 9</td><td>Link JP9, closed</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>What you see</th><th>What it means</th><th>What to do</th></tr></thead>
  <tbody>
    <tr><td>Errors or no answer, power lights on</td><td>The terminator is missing, on the wrong jack, or its 5V light is off</td><td>Plug it into the OUT jack of the last remote; that remote must be powered</td></tr>
    <tr><td>No device answers at the remote</td><td>No 12&nbsp;V at the host, so the host buffer is switched off</td><td>The host 12V light must be on. Check the supply and polarity at 12V IN</td></tr>
    <tr><td>No device answers, all power lights on</td><td>A crossover cable swaps SDA and SCL</td><td>Use a straight-through cable</td></tr>
    <tr><td>No device answers, remote lights off</td><td>The 12&nbsp;V lead is missing or reversed, or link SJ2 on the host is cut</td><td>Check plus to plus and minus to minus between the two 12&nbsp;V terminals</td></tr>
    <tr><td>Works with a short cable, errors with a long one</td><td>The clock is too fast for the cable</td><td>Lower the I2C clock, for example to 100&nbsp;kHz</td></tr>
    <tr><td>Errors after adding several boards at the remote</td><td>Every added board brought its own pull-up resistors</td><td>Keep one set of pull-ups on that side: open the pull-up links on the added boards, or JP1 and JP2 on the remote</td></tr>
    <tr><td>One device answers wrongly or not at all</td><td>Two devices use the same address</td><td>Change the address link on one of them</td></tr>
    <tr><td>The whole controller bus stops when a remote loses power</td><td>The host is still powered and the far end of the cable is dead</td><td>Power the host and every remote from the same switch</td></tr>
    <tr><td>Bus stuck low with another I2C buffer in the path</td><td>Two buffers that both shift the low level are in series</td><td>Remove the other buffer, or use one without a raised low level</td></tr>
    <tr><td>Red FAULT light</td><td>The electronic fuse switched off: voltage too low or too high, overload or overheating</td><td>Check the supply voltage and what the board is powering</td></tr>
    <tr><td>Red OVER V light</td><td>Supply above about 13.8&nbsp;V</td><td>Use a 12&nbsp;V supply</td></tr>
    <tr><td>Red REVERSE light</td><td>Plus and minus swapped at 12V IN</td><td>Swap the two wires</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

If the last remote loses power while the host stays powered, the terminator is dead too: the cable is no longer held firmly in its resting state: the simulated idle voltage falls to 0.12&nbsp;V, below the 0.2&nbsp;V the receiver needs, and up to about 5&nbsp;mA flows back into the dead board. The controller&rsquo;s I2C bus may then be held low. Power the host and every remote from the same switch.

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>Board</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/differential-i2c-signal-extender/v02/differential-i2c-signal-extender-host-schematic.pdf">Host schematic (PDF)</a></td><td>Host</td></tr>
    <tr><td><a href="/images/extensions/differential-i2c-signal-extender/v02/differential-i2c-signal-extender-host-bom.csv">Host parts list (CSV)</a></td><td>Host</td></tr>
    <tr><td><a href="/images/extensions/differential-i2c-signal-extender/v02/differential-i2c-signal-extender-host-diagram.webp">Host board drawing (WebP)</a></td><td>Host</td></tr>
    <tr><td><a href="/images/extensions/differential-i2c-signal-extender/v02/differential-i2c-signal-extender-remote-schematic.pdf">Remote schematic (PDF)</a></td><td>Remote</td></tr>
    <tr><td><a href="/images/extensions/differential-i2c-signal-extender/v02/differential-i2c-signal-extender-remote-bom.csv">Remote parts list (CSV)</a></td><td>Remote</td></tr>
    <tr><td><a href="/images/extensions/differential-i2c-signal-extender/v02/differential-i2c-signal-extender-remote-diagram.webp">Remote board drawing (WebP)</a></td><td>Remote</td></tr>
    <tr><td><a href="/images/extensions/differential-i2c-signal-extender/v02/differential-i2c-signal-extender-terminator-schematic.pdf">Terminator schematic (PDF)</a></td><td>Terminator</td></tr>
    <tr><td><a href="/images/extensions/differential-i2c-signal-extender/v02/differential-i2c-signal-extender-terminator-bom.csv">Terminator parts list (CSV)</a></td><td>Terminator</td></tr>
    <tr><td><a href="/images/extensions/differential-i2c-signal-extender/v02/differential-i2c-signal-extender-terminator-diagram.webp">Terminator board drawing (WebP)</a></td><td>Terminator</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side. The terminals and the link jacks need room for wires and the plug on their side of the board.

### Host board

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-i2c-host-mount-t">
  <title id="xb-i2c-host-mount-t">Mounting drawing of the host board, component side: outline 60 by 60 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="310.0" y="78.0" width="340.0" height="340.0" rx="5.7" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M310.0 56H650.0"/><path d="M310.0 50V62"/><path d="M650.0 50V62"/><path d="M676.0 78.0V418.0"/><path d="M670.0 78.0h12"/><path d="M670.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">60</text>
  <text x="688.0" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">60</text>
  <circle cx="310.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="298.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M252.0 104.0h30" fill="none"/><path d="M286.0 104.0l-8 -4v8z"/><path d="M252.0 104.0v30" fill="none"/><path d="M252.0 138.0l-4 -8h8z"/></g>
  <text x="290.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="248.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="338.3" cy="106.3" r="9.1" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M325.3 106.3h26.1M338.3 93.3v26.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="329.3" y="135.4" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.00</text>
  <circle cx="621.7" cy="106.3" r="9.1" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M608.6 106.3h26.1M621.7 93.3v26.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="630.7" y="135.4" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  55.00, 5.00</text>
  <circle cx="338.3" cy="389.7" r="9.1" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M325.3 389.7h26.1M338.3 376.6v26.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="329.3" y="370.6" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 55.00</text>
  <circle cx="621.7" cy="389.7" r="9.1" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M608.6 389.7h26.1M621.7 376.6v26.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="630.7" y="370.6" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">4</tspan>  55.00, 55.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 60 × 60&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>55.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>5.00</td><td>55.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>55.00</td><td>55.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Remote board

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-i2c-remote-mount-t">
  <title id="xb-i2c-remote-mount-t">Mounting drawing of the remote board, component side: outline 60 by 70 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="334.3" y="78.0" width="291.4" height="340.0" rx="4.9" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M334.3 56H625.7"/><path d="M334.3 50V62"/><path d="M625.7 50V62"/><path d="M651.7 78.0V418.0"/><path d="M645.7 78.0h12"/><path d="M645.7 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">60</text>
  <text x="663.7" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">70</text>
  <circle cx="334.3" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="322.3" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M276.3 104.0h30" fill="none"/><path d="M310.3 104.0l-8 -4v8z"/><path d="M276.3 104.0v30" fill="none"/><path d="M276.3 138.0l-4 -8h8z"/></g>
  <text x="314.3" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="272.3" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="358.6" cy="102.3" r="7.8" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M346.8 102.3h23.5M358.6 90.5v23.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="350.8" y="130.1" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.00</text>
  <circle cx="601.4" cy="102.3" r="7.8" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M589.7 102.3h23.5M601.4 90.5v23.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="609.2" y="130.1" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  55.00, 5.00</text>
  <circle cx="358.6" cy="393.7" r="7.8" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M346.8 393.7h23.5M358.6 381.9v23.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="350.8" y="375.9" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 65.00</text>
  <circle cx="601.4" cy="393.7" r="7.8" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M589.7 393.7h23.5M601.4 381.9v23.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="609.2" y="375.9" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">4</tspan>  55.00, 65.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 60 × 70&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>55.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>5.00</td><td>65.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>55.00</td><td>65.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Terminator board

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-i2c-terminator-mount-t">
  <title id="xb-i2c-terminator-mount-t">Mounting drawing of the terminator board, component side: outline 40 by 40 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="310.0" y="78.0" width="340.0" height="340.0" rx="8.5" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M310.0 56H650.0"/><path d="M310.0 50V62"/><path d="M650.0 50V62"/><path d="M676.0 78.0V418.0"/><path d="M670.0 78.0h12"/><path d="M670.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">40</text>
  <text x="688.0" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">40</text>
  <circle cx="310.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="298.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M252.0 104.0h30" fill="none"/><path d="M286.0 104.0l-8 -4v8z"/><path d="M252.0 104.0v30" fill="none"/><path d="M252.0 138.0l-4 -8h8z"/></g>
  <text x="290.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="248.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="352.5" cy="120.5" r="13.6" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M334.9 120.5h35.2M352.5 102.9v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="338.9" y="154.1" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.00</text>
  <circle cx="607.5" cy="120.5" r="13.6" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M589.9 120.5h35.2M607.5 102.9v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="621.1" y="154.1" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  35.00, 5.00</text>
  <circle cx="352.5" cy="375.5" r="13.6" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M334.9 375.5h35.2M352.5 357.9v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="338.9" y="351.9" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 35.00</text>
  <circle cx="607.5" cy="375.5" r="13.6" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M589.9 375.5h35.2M607.5 357.9v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="621.1" y="351.9" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">4</tspan>  35.00, 35.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 40 × 40&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>35.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>5.00</td><td>35.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>35.00</td><td>35.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Each figure is a design, calculated, simulated or manufacturer&rsquo;s datasheet value, as the last column says. A dash means no figure is given.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Supply voltage at 12&nbsp;V IN</td><td>Host and remote</td><td>9.8&nbsp;V to start</td><td>12&nbsp;V</td><td>14.3&nbsp;V cutoff</td><td>Simulated thresholds; turns off again below 9.0&nbsp;V</td></tr>
    <tr><td>Overvoltage light threshold</td><td>Host and remote</td><td>—</td><td>13.8&nbsp;V</td><td>—</td><td>Simulated</td></tr>
    <tr><td>Input current limit</td><td>Host and each remote</td><td>—</td><td>0.5&nbsp;A</td><td>—</td><td>Calculated; the host&rsquo;s limit also covers every remote fed through it</td></tr>
    <tr><td>Terminator supply current</td><td>Remote OUT to terminator</td><td>—</td><td>7&nbsp;mA</td><td>—</td><td>Calculated: pair resistors and light</td></tr>
    <tr><td>OUT jack fuse hold current</td><td>Remote OUT, contact 4</td><td>—</td><td>120&nbsp;mA</td><td>—</td><td>Resettable fuse series figure, not tested</td></tr>
    <tr><td>Current from controller 5&nbsp;V</td><td>Host</td><td>—</td><td>70&nbsp;mA</td><td>91&nbsp;mA</td><td>Datasheet, link driver supply</td></tr>
    <tr><td>3.3&nbsp;V for your boards</td><td>Remote</td><td>—</td><td>—</td><td>100&nbsp;mA</td><td>Design target</td></tr>
    <tr><td>5&nbsp;V for your boards</td><td>Remote</td><td>—</td><td>—</td><td>100&nbsp;mA</td><td>Design target</td></tr>
    <tr><td>5&nbsp;V switch current limit</td><td>Remote</td><td>155&nbsp;mA</td><td>178&nbsp;mA</td><td>207&nbsp;mA</td><td>Calculated from the datasheet equations</td></tr>
    <tr><td>I2C clock</td><td>Link</td><td>—</td><td>—</td><td>1&nbsp;MHz</td><td>Datasheet, on 3&nbsp;m of cable; longer cable needs a lower clock</td></tr>
    <tr><td>I2C low output level</td><td>Each I2C side</td><td>0.47&nbsp;V</td><td>—</td><td>0.6&nbsp;V</td><td>Datasheet</td></tr>
    <tr><td>I2C low input level required</td><td>Each I2C side</td><td>—</td><td>—</td><td>0.4&nbsp;V</td><td>Datasheet</td></tr>
    <tr><td>Receiver threshold, differential</td><td>Link</td><td>—</td><td>200&nbsp;mV</td><td>—</td><td>Datasheet, with 30&nbsp;mV hysteresis</td></tr>
    <tr><td>Idle line voltage, differential</td><td>Link</td><td>—</td><td>0.45&nbsp;V</td><td>—</td><td>Simulated, host and terminator powered, or terminator absent</td></tr>
    <tr><td>Added delay</td><td>Each direction</td><td>—</td><td>150&nbsp;ns</td><td>—</td><td>Datasheet, approximate</td></tr>
    <tr><td>Bus rise time with 3.3&nbsp;k&Omega;</td><td>Each I2C side</td><td>—</td><td>280&nbsp;ns at 100&nbsp;pF</td><td>839&nbsp;ns at 300&nbsp;pF</td><td>Simulated; 400&nbsp;kHz needs 300&nbsp;ns or less, 100&nbsp;kHz needs 1000&nbsp;ns or less</td></tr>
    <tr><td>Board size</td><td>Host</td><td>—</td><td>60 &times; 60&nbsp;mm</td><td>—</td><td>Design</td></tr>
    <tr><td>Board size</td><td>Remote</td><td>—</td><td>60 &times; 70&nbsp;mm</td><td>—</td><td>Design</td></tr>
    <tr><td>Board size</td><td>Terminator</td><td>—</td><td>40 &times; 40&nbsp;mm</td><td>—</td><td>Design</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Component stress limits

These are limits of single parts, not operating conditions of the boards.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Circuit</th><th>Pin or device stress</th><th>Absolute limit</th></tr></thead>
  <tbody>
    <tr><td>Link buffer, <a href="/images/extensions/differential-i2c-signal-extender/datasheets/pca9615.pdf">PCA9615</a></td><td>Either supply, bus and enable pins</td><td>−0.5 to 6&nbsp;V</td></tr>
    <tr><td>Electronic fuse, <a href="/images/extensions/differential-i2c-signal-extender/datasheets/tps2660.pdf">TPS26600</a></td><td>Input pin</td><td>−60 to 62&nbsp;V</td></tr>
    <tr><td>5&nbsp;V converter, <a href="/images/extensions/differential-i2c-signal-extender/datasheets/ap63205.pdf">AP63205</a></td><td>Input pin</td><td>35&nbsp;V continuous</td></tr>
    <tr><td>3.3&nbsp;V regulator, <a href="/images/extensions/differential-i2c-signal-extender/datasheets/ap2112.pdf">AP2112K</a></td><td>Input pin</td><td>6.5&nbsp;V</td></tr>
    <tr><td>5&nbsp;V switch, <a href="/images/extensions/differential-i2c-signal-extender/datasheets/tps2553.pdf">TPS2553</a></td><td>Input and output pins</td><td>7&nbsp;V</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: simulation {#simulation}

A circuit simulation of the resistor networks, the supply thresholds and the bus rise time. It does not model the chips&rsquo; switching behaviour, the cable, noise or electrostatic discharge, and it is not a measurement of a board.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Quantity</th><th>Simulated</th><th>Limit</th><th>Verdict</th></tr></thead>
  <tbody>
    <tr><td>Idle differential with host and terminator (receiver threshold 0.2 V)</td><td>0.451&nbsp;V</td><td>at least 0.2&nbsp;V</td><td>Within</td></tr>
    <tr><td>Terminator supply after the fuse and patch lead (assumed 6 ohm fuse)</td><td>4.98&nbsp;V</td><td>4.5 to 5.5&nbsp;V</td><td>Within</td></tr>
    <tr><td>Current drawn by the terminator pair network alone (fuse hold 120 mA, assumed)</td><td>3.74&nbsp;mA</td><td>at most 100&nbsp;mA</td><td>Within</td></tr>
    <tr><td>Idle differential, terminator absent</td><td>0.452&nbsp;V</td><td>at least 0.2&nbsp;V</td><td>Within</td></tr>
    <tr><td>Idle differential at the host, last remote off, rail at ground</td><td>0.12&nbsp;V</td><td>at least 0.2&nbsp;V</td><td><b>Outside</b></td></tr>
    <tr><td>Positive line voltage, last remote off, rail at ground (datasheet "connected" test needs above 0.5 V)</td><td>0.693&nbsp;V</td><td>—</td><td>—</td></tr>
    <tr><td>Negative line voltage, last remote off, rail at ground (needs below 4.5 V)</td><td>0.573&nbsp;V</td><td>—</td><td>—</td></tr>
    <tr><td>Voltage fed back onto the unpowered 5 V rail, last remote off, rail at ground</td><td>0.00523&nbsp;V</td><td>—</td><td>—</td></tr>
    <tr><td>Current fed back through the pair, last remote off, rail at ground</td><td>5.23&nbsp;mA</td><td>at most 10&nbsp;mA</td><td>Within</td></tr>
    <tr><td>Idle differential at the host, last remote off, rail loaded by 1 kohm</td><td>0.271&nbsp;V</td><td>at least 0.2&nbsp;V</td><td>Within</td></tr>
    <tr><td>Positive line voltage, last remote off, rail loaded by 1 kohm (datasheet "connected" test needs above 0.5 V)</td><td>1.63&nbsp;V</td><td>—</td><td>—</td></tr>
    <tr><td>Negative line voltage, last remote off, rail loaded by 1 kohm (needs below 4.5 V)</td><td>1.36&nbsp;V</td><td>—</td><td>—</td></tr>
    <tr><td>Voltage fed back onto the unpowered 5 V rail, last remote off, rail loaded by 1 kohm</td><td>1.06&nbsp;V</td><td>—</td><td>—</td></tr>
    <tr><td>Current fed back through the pair, last remote off, rail loaded by 1 kohm</td><td>1.06&nbsp;mA</td><td>at most 10&nbsp;mA</td><td>Within</td></tr>
    <tr><td>Idle differential at the host, last remote off, rail loaded by 100 kohm</td><td>0.31&nbsp;V</td><td>at least 0.2&nbsp;V</td><td>Within</td></tr>
    <tr><td>Positive line voltage, last remote off, rail loaded by 100 kohm (datasheet "connected" test needs above 0.5 V)</td><td>1.87&nbsp;V</td><td>—</td><td>—</td></tr>
    <tr><td>Negative line voltage, last remote off, rail loaded by 100 kohm (needs below 4.5 V)</td><td>1.56&nbsp;V</td><td>—</td><td>—</td></tr>
    <tr><td>Voltage fed back onto the unpowered 5 V rail, last remote off, rail loaded by 100 kohm</td><td>1.86&nbsp;V</td><td>—</td><td>—</td></tr>
    <tr><td>Current fed back through the pair, last remote off, rail loaded by 100 kohm</td><td>0.0186&nbsp;mA</td><td>at most 10&nbsp;mA</td><td>Within</td></tr>
    <tr><td>Host buffer enable pin at the lowest running 12 V rail (needs 2.31 V)</td><td>2.77&nbsp;V</td><td>2.31 to 5.5&nbsp;V</td><td>Within</td></tr>
    <tr><td>Host buffer enable pin at the overvoltage cutoff (limit 5.5 V)</td><td>4.48&nbsp;V</td><td>2.31 to 5.5&nbsp;V</td><td>Within</td></tr>
    <tr><td>Host buffer enable pin with no 12 V (needs below 0.99 V)</td><td>0.318&nbsp;V</td><td>at most 0.99&nbsp;V</td><td>Within</td></tr>
    <tr><td>Input turn-on voltage</td><td>9.76&nbsp;V</td><td>9.4 to 10.2&nbsp;V</td><td>Within</td></tr>
    <tr><td>Input turn-off voltage</td><td>9.02&nbsp;V</td><td>8.6 to 9.4&nbsp;V</td><td>Within</td></tr>
    <tr><td>Input overvoltage cutoff</td><td>14.3&nbsp;V</td><td>13.8 to 14.8&nbsp;V</td><td>Within</td></tr>
    <tr><td>Overvoltage lamp threshold</td><td>13.8&nbsp;V</td><td>13.4 to 14.2&nbsp;V</td><td>Within</td></tr>
    <tr><td>I2C rise time at 100 pF (400 kHz limit 300 ns)</td><td>280&nbsp;ns</td><td>at most 300&nbsp;ns</td><td>Within</td></tr>
    <tr><td>I2C rise time at 300 pF (100 kHz limit 1000 ns)</td><td>839&nbsp;ns</td><td>at most 1000&nbsp;ns</td><td>Within</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: datasheets {#datasheets}

{::nomarkdown}
<figure>
  <a href="/images/extensions/differential-i2c-signal-extender/datasheets/pca9615.pdf"><img src="/images/extensions/differential-i2c-signal-extender/datasheets/pca9615-page1.png" alt="First page of the datasheet: PCA9615 multipoint differential I2C-bus buffer" loading="lazy" style="max-width:480px;width:100%;height:auto"></a>
  <figcaption><a href="/images/extensions/differential-i2c-signal-extender/datasheets/pca9615.pdf">PCA9615 multipoint differential I2C-bus buffer</a> — NXP Semiconductors, 30 pages.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<figure>
  <a href="/images/extensions/differential-i2c-signal-extender/datasheets/tps2660.pdf"><img src="/images/extensions/differential-i2c-signal-extender/datasheets/tps2660-page1.png" alt="First page of the datasheet: TPS2660x 60 V eFuse with reverse polarity protection" loading="lazy" style="max-width:480px;width:100%;height:auto"></a>
  <figcaption><a href="/images/extensions/differential-i2c-signal-extender/datasheets/tps2660.pdf">TPS2660x 60 V eFuse with reverse polarity protection</a> — Texas Instruments, 55 pages.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<figure>
  <a href="/images/extensions/differential-i2c-signal-extender/datasheets/tps2553.pdf"><img src="/images/extensions/differential-i2c-signal-extender/datasheets/tps2553-page1.png" alt="First page of the datasheet: TPS255x precision adjustable current-limited power switches" loading="lazy" style="max-width:480px;width:100%;height:auto"></a>
  <figcaption><a href="/images/extensions/differential-i2c-signal-extender/datasheets/tps2553.pdf">TPS255x precision adjustable current-limited power switches</a> — Texas Instruments, 46 pages.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<figure>
  <a href="/images/extensions/differential-i2c-signal-extender/datasheets/ap63205.pdf"><img src="/images/extensions/differential-i2c-signal-extender/datasheets/ap63205-page1.png" alt="First page of the datasheet: AP63205 synchronous buck converter" loading="lazy" style="max-width:480px;width:100%;height:auto"></a>
  <figcaption><a href="/images/extensions/differential-i2c-signal-extender/datasheets/ap63205.pdf">AP63205 synchronous buck converter</a> — Diodes Incorporated, 18 pages.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<figure>
  <a href="/images/extensions/differential-i2c-signal-extender/datasheets/ap2112.pdf"><img src="/images/extensions/differential-i2c-signal-extender/datasheets/ap2112-page1.png" alt="First page of the datasheet: AP2112 600 mA CMOS LDO regulator" loading="lazy" style="max-width:480px;width:100%;height:auto"></a>
  <figcaption><a href="/images/extensions/differential-i2c-signal-extender/datasheets/ap2112.pdf">AP2112 600 mA CMOS LDO regulator</a> — Diodes Incorporated, 18 pages.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<figure>
  <a href="/images/extensions/differential-i2c-signal-extender/datasheets/tpd4e1u06.pdf"><img src="/images/extensions/differential-i2c-signal-extender/datasheets/tpd4e1u06-page1.png" alt="First page of the datasheet: TPD4E1U06 four-channel ESD protection array" loading="lazy" style="max-width:480px;width:100%;height:auto"></a>
  <figcaption><a href="/images/extensions/differential-i2c-signal-extender/datasheets/tpd4e1u06.pdf">TPD4E1U06 four-channel ESD protection array</a> — Texas Instruments, 27 pages.</figcaption>
</figure>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
