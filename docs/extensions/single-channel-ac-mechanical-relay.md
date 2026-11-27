---
layout: default
title: "Single-channel AC mechanical relay"
description: "One isolated mains relay for Smoothieboard V2: pinout, wiring, configuration and troubleshooting."
permalink: /extensions/single-channel-ac-mechanical-relay
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Relay output</p>
    <h1 id="single-channel-ac-mechanical-relay">Single-channel AC mechanical relay</h1>
    <p class="xb-lead">Switch one mains-powered device from G-code: a light, a pump, a vacuum, a heater. Three wires to your controller, one 12&nbsp;V supply, and the device is switched by an isolated relay.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/single-channel-ac-mechanical-relay/single-channel-ac-mechanical-relay-diagram.png" alt="Top view of the single-channel relay board: a green three-way screw terminal at the top left, one large relay below it, a yellow XT30 connector at the right and a two-way green screw terminal at the left edge.">
    <figcaption>Top view, drawn from the board's design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>1</b><span>isolated relay</span></div>
  <div class="xb-stat"><b>NO + NC</b><span>changeover contacts</span></div>
  <div class="xb-stat"><b>12 A</b><span>at up to 250&nbsp;V&nbsp;AC</span></div>
  <div class="xb-stat"><b>Optical</b><span>isolation between your controller and the coil circuit</span></div>
  <div class="xb-stat"><b>12 V</b><span>coil supply, about 33&nbsp;mA</span></div>
  <div class="xb-stat"><b>80 × 80</b><span>millimetres, four M3 mounting holes</span></div>
</div>

<nav class="xb-nav" aria-label="On this page">
  <a href="#specs">Tech specs</a>
  <a href="#tour">Board tour</a>
  <a href="#pinout">Pinout</a>
  <a href="#what-you-need">What you need</a>
  <a href="#get-started">Get started</a>
  <a href="#configuration">Configuration</a>
  <a href="#loads">Wiring the load</a>
  <a href="#how-it-works">How it works</a>
  <a href="#options">Power options</a>
  <a href="#chaining">Several boards</a>
  <a href="#troubleshooting">Troubleshooting</a>
  <a href="#downloads">Downloads</a>
  <a href="#mounting">Mounting</a>
  <a href="#electrical">Electrical</a>
</nav>
{:/nomarkdown}

<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="lightning-charge"></sl-icon>
  <strong>Mains voltage can kill.</strong> The three-way screw terminal at the top of this board carries mains voltage when a load is connected. Wire it only if you are competent to do mains work, always with every supply unplugged, and mount the finished board inside a closed, earthed enclosure. This board is not certified to any electrical safety standard.
</sl-alert>

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="cone-striped"></sl-icon>
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Channels</td><td>1 relay</td></tr>
    <tr><td>Contacts</td><td>Changeover (SPDT): common <b>C</b>, normally open <b>NO</b>, normally closed <b>NC</b>. Both poles of the relay are joined on the board, so one set of contacts reaches the terminal.</td></tr>
    <tr><td>Load rating</td><td>12&nbsp;A resistive at up to 250&nbsp;V&nbsp;AC, 50/60&nbsp;Hz, one throw powered at a time.</td></tr>
    <tr><td>Relay</td><td>Relpol RM85-2011-35-1012, soldered, 12&nbsp;V coil, 360&nbsp;Ω (33&nbsp;mA at 20&nbsp;°C)</td></tr>
    <tr><td>Load terminal</td><td>3-way screw terminal, 7.5&nbsp;mm pitch (Degson DG302-7.5-03P)</td></tr>
    <tr><td>Control input</td><td>One logic input, on when HIGH, 3.3&nbsp;V compatible. An unconnected or LOW input keeps the relay off.</td></tr>
    <tr><td>Control connector</td><td>3 pins: ground, 5&nbsp;V, command. The board has two footprints for it, a 2.54&nbsp;mm connector (specified as Molex 22-23-2031) and a compact 2&nbsp;mm JST PH connector. Fit one of them.</td></tr>
    <tr><td>Coil supply</td><td>Regulated external 12&nbsp;V on a 2-way screw terminal or an XT30 connector, each with its own fuse and blocking diode. Alternatively the board can make its own 12&nbsp;V from the controller's 5&nbsp;V through an isolated converter.</td></tr>
    <tr><td>Isolation</td><td>An optocoupler between the controller and the coil circuit; the relay itself between the coil circuit and the load. The layout keeps 8.2&nbsp;mm of bare board around the mains copper.</td></tr>
    <tr><td>Indicator</td><td>One green LED, lit while the coil is driven. It can be disabled with a solder link.</td></tr>
    <tr><td>Size</td><td>80 × 80&nbsp;mm, 1.6&nbsp;mm two-layer board, M3 mounting holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> and Smoothieware V2 firmware. Uses the standard <a href="/switch">Switch module</a>; nothing extra to install.</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its limits and its basis is in the [electrical specifications](#electrical) appendix; the hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side, with the mains terminal at the top.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/single-channel-ac-mechanical-relay/single-channel-ac-mechanical-relay-diagram.png" alt="Top view of the relay board with fifteen numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:15.9%;top:9.8%" aria-label="1: load terminal">1<span class="xb-pop"><b>Load terminal</b> — a three-way screw terminal marked <b>NO</b>, <b>NC</b> and <b>C</b> on the board. This is the only mains area.</span></a>
      <a class="xb-mk xb-pl" href="#tour-2" style="left:15.9%;top:54.9%" aria-label="2: relay">2<span class="xb-pop"><b>Relay</b> — one soldered 12&nbsp;V relay. You hear it click each time it switches.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:30.5%;top:65.9%" aria-label="3: indicator light">3<span class="xb-pop"><b>Indicator light</b> — a green LED, lit while the relay coil is driven.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:25.4%;top:65.9%" aria-label="4: indicator link">4<span class="xb-pop"><b>Indicator link</b> — a solder bridge, closed on delivery. Cut it to switch the green LED off for good.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:36.6%;top:81.7%" aria-label="5: optocoupler">5<span class="xb-pop"><b>Optocoupler</b> — carries the on/off command as light, so there is no electrical path from your controller to the coil circuit.</span></a>
      <a class="xb-mk xb-pl" href="#tour-6" style="left:19.5%;top:89.0%" aria-label="6: control connector">6<span class="xb-pop"><b>Control connector</b> — three pins: ground, 5&nbsp;V and the command signal. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pl" href="#tour-7" style="left:9.8%;top:69.5%" aria-label="7: TERM 12V input">7<span class="xb-pop"><b>TERM 12V input</b> — a two-way screw terminal for the 12&nbsp;V coil supply.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-8" style="left:79.3%;top:37.8%" aria-label="8: XT30 12V input">8<span class="xb-pop"><b>XT30 12V input</b> — a polarised connector for the 12&nbsp;V coil supply. <b>+</b> and <b>−</b> are printed beside it.</span></a>
      <a class="xb-mk" href="#tour-9" style="left:43.9%;top:50.0%" aria-label="9: 12 V input selector">9<span class="xb-pop"><b>12&nbsp;V input selector</b> — three pins: screw terminal or XT30. <i>Delivered with no jumper fitted, so the coil has no power until you choose.</i></span></a>
      <a class="xb-mk" href="#tour-10" style="left:74.4%;top:50.0%" aria-label="10: coil source selector">10<span class="xb-pop"><b>Coil source selector</b> — three pins: external 12&nbsp;V or the board&rsquo;s own converter. Delivered on external.</span></a>
      <a class="xb-mk" href="#tour-11" style="left:53.7%;top:95.1%" aria-label="11: host power link">11<span class="xb-pop"><b>Host power link</b> — two pins, left open. A jumper here lets the board make its own 12&nbsp;V from the controller&rsquo;s 5&nbsp;V.</span></a>
      <a class="xb-mk xb-pr" href="#tour-12" style="left:86.6%;top:93.9%" aria-label="12: isolated converter">12<span class="xb-pop"><b>Isolated 5&nbsp;V to 12&nbsp;V converter</b> — used only in host-powered mode.</span></a>
      <a class="xb-mk xb-pb" href="#tour-13" style="left:36.6%;top:47.6%" aria-label="13: input fuses">13<span class="xb-pop"><b>Coil input fuses</b> — one fuse in each 12&nbsp;V input path (here and beside the XT30 connector).</span></a>
      <a class="xb-mk" href="#tour-14" style="left:47.6%;top:87.8%" aria-label="14: host power fuse">14<span class="xb-pop"><b>Host power fuse</b> — protects the controller&rsquo;s 5&nbsp;V line when the host-powered mode is used.</span></a>
      <a class="xb-mk" href="#tour-15" style="left:62.2%;top:62.2%" aria-label="15: coil protection chip">15<span class="xb-pop"><b>Coil protection chip</b> — limits the current and the voltage rise of the coil supply.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Load terminal</b> — a three-way screw terminal marked <b>NO</b>, <b>NC</b> and <b>C</b> on the board. This is the only mains area.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Relay</b> — one soldered 12&nbsp;V relay. You hear it click each time it switches.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Indicator light</b> — a green LED, lit while the relay coil is driven.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Indicator link</b> — a solder bridge, closed on delivery. Cut it to switch the green LED off for good.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Optocoupler</b> — carries the on/off command as light, so there is no electrical path from your controller to the coil circuit.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Control connector</b> — three pins: ground, 5&nbsp;V and the command signal. <i>See the pinout.</i></div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>TERM 12V input</b> — a two-way screw terminal for the 12&nbsp;V coil supply.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>XT30 12V input</b> — a polarised connector for the 12&nbsp;V coil supply. <b>+</b> and <b>−</b> are printed beside it.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>12&nbsp;V input selector</b> — three pins: screw terminal or XT30. <i>Delivered with no jumper fitted, so the coil has no power until you choose.</i></div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Coil source selector</b> — three pins: external 12&nbsp;V or the board&rsquo;s own converter. Delivered on external.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Host power link</b> — two pins, left open. A jumper here lets the board make its own 12&nbsp;V from the controller&rsquo;s 5&nbsp;V.</div></li>
    <li id="tour-12"><span class="xb-n">12</span><div><b>Isolated 5&nbsp;V to 12&nbsp;V converter</b> — used only in host-powered mode.</div></li>
    <li id="tour-13"><span class="xb-n">13</span><div><b>Coil input fuses</b> — one fuse in each 12&nbsp;V input path (here and beside the XT30 connector).</div></li>
    <li id="tour-14"><span class="xb-n">14</span><div><b>Host power fuse</b> — protects the controller&rsquo;s 5&nbsp;V line when the host-powered mode is used.</div></li>
    <li id="tour-15"><span class="xb-n">15</span><div><b>Coil protection chip</b> — limits the current and the voltage rise of the coil supply.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### Control connector

The control connector has three pins, pin 1 at the left of the connector as the board is shown in the tour. Connect it to a free output pin of your controller, to its 5&nbsp;V pin and to ground. On the Smoothieboard V2 Prime, header **G_F** offers all three; the last column names its pins.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Pin</th><th>Function</th><th>What it does</th><th>Smoothieboard V2 Prime pin (header G_F)</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Controller ground</td><td>pin 10</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Powers the input side of the optocoupler</td><td>pin 2</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">CMD</span></td><td>Relay command: HIGH switches the relay on</td><td>pin 3, <code>PB1</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The signal is a static level, not a pulse train. The 5&nbsp;V pin only feeds the optocoupler's light; the relay coil never draws from it unless you choose the host-powered mode.

### Load terminal

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Terminal</th><th>Name</th><th>Connects to</th></tr></thead>
  <tbody>
    <tr><td>Left</td><td><b>NO</b></td><td>Common while the relay is on (normally open)</td></tr>
    <tr><td>Middle</td><td><b>NC</b></td><td>Common while the relay is off (normally closed)</td></tr>
    <tr><td>Right</td><td><b>C</b></td><td>Common contact; the live wire goes here</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The names are printed on the board, above each screw, when it is seen from the component side with the terminal at the top. When the coil is off, <b>C</b> is joined to <b>NC</b>, so <b>NC</b> can be live with the controller switched off.

### 12 V inputs

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Connector</th><th>Contact</th><th>Function</th></tr></thead>
  <tbody>
    <tr><td rowspan="2">TERM 12V (two-way screw terminal, screws one above the other)</td><td>1, lower screw</td><td>+12&nbsp;V</td></tr>
    <tr><td>2, upper screw</td><td>0&nbsp;V (coil ground)</td></tr>
    <tr><td rowspan="2">XT30</td><td>2</td><td>+12&nbsp;V</td></tr>
    <tr><td>1</td><td>0&nbsp;V (coil ground)</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The polarity of the XT30 contacts is taken from the board's design files and the connector's drawing. Check it against your own supply lead before plugging in.

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Smoothieboard V2 Prime</b><span>Running Smoothieware V2, with one free output pin, its 5&nbsp;V pin and a ground pin.</span></div>
  <div class="xb-card"><b>Three jumper leads</b><span>From the controller to the three pins of the control connector, with the plug that matches the connector you fit (2.54&nbsp;mm or 2&nbsp;mm).</span></div>
  <div class="xb-card"><b>12&nbsp;V DC power supply</b><span>Regulated, with its own isolated output. Fit it to TERM 12V or the XT30.</span></div>
  <div class="xb-card"><b>One jumper cap</b><span>2.54&nbsp;mm, for the 12&nbsp;V input selector, which is delivered without one.</span></div>
  <div class="xb-card"><b>A fuse or breaker for the load</b><span>The board does not fuse your load. Size it for the device and wire, never above 12&nbsp;A.</span></div>
  <div class="xb-card"><b>An earthed enclosure</b><span>Closed, with strain relief on the mains cable.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

These steps take you from an unconnected board to a relay that clicks on command, without any mains wiring. Connect your load only after step 6 works.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 472" role="img" aria-labelledby="xb-single-channel-ac-mechanical-relay-wire"><title id="xb-single-channel-ac-mechanical-relay-wire">Wiring: controller contact GND to Control_connector contact 1; controller contact 5V to Control_connector contact 2; controller contact command to Control_connector contact 3.</title><image href="/images/extensions/single-channel-ac-mechanical-relay/single-channel-ac-mechanical-relay-diagram.png" x="385" y="14" width="230" height="230"/><circle cx="430" cy="219" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="345" y="238" width="170" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="430" y="252" text-anchor="middle" font-size="13" font-weight="700" fill="#111">Control connector</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Controller wires</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Control connector on this board</text><image href="/images/extensions/single-channel-ac-mechanical-relay/single-channel-ac-mechanical-relay-diagram.png" x="385" y="14" width="230" height="230"/><circle cx="430" cy="219" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="345" y="238" width="170" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="430" y="252" text-anchor="middle" font-size="13" font-weight="700" fill="#111">Control connector</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Controller wires</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Control connector on this board</text><rect x="30" y="304" width="200" height="150" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><rect x="770" y="304" width="200" height="150" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 349.0H770" fill="none" stroke="#939393" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="349" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="349" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><text x="216" y="354" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">GND</text><text x="784" y="354" text-anchor="start" font-size="14" fill="#eaeaea">1  </text><rect x="400" y="338" width="200" height="22" rx="11" fill="#939393" stroke="#939393" stroke-width="1.5"/><text x="500" y="354" text-anchor="middle" font-size="13" font-weight="700" fill="#111">GND to 1</text><path d="M230 379.0H770" fill="none" stroke="#e8820c" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="379" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="379" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><text x="216" y="384" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">5V</text><text x="784" y="384" text-anchor="start" font-size="14" fill="#eaeaea">2  </text><rect x="400" y="368" width="200" height="22" rx="11" fill="#e8820c" stroke="#e8820c" stroke-width="1.5"/><text x="500" y="384" text-anchor="middle" font-size="13" font-weight="700" fill="#111">5V to 2</text><path d="M230 409.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="409" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="409" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="414" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">command</text><text x="784" y="414" text-anchor="start" font-size="14" fill="#eaeaea">3  </text><rect x="400" y="398" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="414" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">command to 3</text></svg>
  </div>
  <figcaption>Wire the controller and a 12 V supply with everything unpowered; leave the load terminal empty for the first test.</figcaption>
</figure>
{:/nomarkdown}

1. **Unplug everything.** Leave the 12&nbsp;V supply and the controller unpowered.
2. **Fit the 12&nbsp;V input selector.** Put the jumper cap on the two pins on the side of the connector you will use: the top and middle pins for TERM 12V, the middle and bottom pins for the XT30 ([markers 7, 8 and 9](#tour)).
3. **Check the coil source selector** (marker 10): it must be on external 12&nbsp;V, as delivered, and the host power link (marker 11) must be open.
4. **Wire the controller.** Connect ground, 5&nbsp;V and the command pin as in the [pinout](#pinout).
5. **Connect the 12&nbsp;V supply**, then power the controller. Leave the load terminal empty.
6. **Add the configuration** from [example 1](#config-onoff) and type `switch relay1 on`. You should hear the relay click and see the green LED light. `switch relay1 off` releases it.

If the relay does not click, go to [troubleshooting](#troubleshooting).


## Configuration {#configuration}

Smoothieware has no setting called "relay board". The relay follows one output pin of the controller, and several parts of the firmware, called modules, can drive an output pin. Pick the module that matches what the device has to do:

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Switch a device on and off from G-code or the console</td><td><a href="/switch">Switch</a>, digital output</td><td><a href="#config-onoff">1. One relay</a></td></tr>
    <tr><td>Use the usual machine commands: coolant, spindle, vacuum</td><td><a href="/switch">Switch</a>, with other commands</td><td><a href="#config-codes">2. Coolant command</a></td></tr>
    <tr><td>Hold a temperature with a mains heater</td><td><a href="/temperaturecontrol">Temperature control</a>, on/off regulation</td><td><a href="#config-heater">3. Heater</a></td></tr>
    <tr><td>Start a fan or an extractor when something gets hot</td><td><a href="/temperatureswitch">Temperature switch</a></td><td><a href="#config-tempswitch">4. Automatic extractor</a></td></tr>
    <tr><td>Switch the relay with a button on the machine</td><td><a href="/switch">Switch</a>, with an input pin</td><td><a href="#config-button">5. Push-button</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Smoothieware V2 has no separate spindle or power-supply module: commands such as `M3` and `M5` are given to a relay through the Switch module, as in example 2. A pin can be claimed by one entry only, so a relay that moves to example 3 loses its entry from example 1. The lines go into the configuration file on the controller's SD card.

### 1. One relay (Switch module) {#config-onoff}

The relay is one entry: an output pin, a command that turns it on and a command that turns it off.

```ini
[switch]
relay1.enable            = true
relay1.output_pin        = PB1        # G_F pin 3, the CMD pin
relay1.output_type       = digital    # plain on/off
relay1.input_on_command  = M64
relay1.input_off_command = M65
relay1.subcode           = 1          # M64.1 on, M65.1 off
relay1.startup_state     = false      # off when the board starts
relay1.halt_set_to       = false      # off when the machine halts
```

If your file already has a `[switch]` section, add the `relay1` lines to it instead of creating a second one. `M64.1` switches the relay on and `M65.1` switches it off; from the console, `switch relay1 on` and `switch relay1 off`. Typing `switch` on its own lists every switch and its state.

### Good to know

- **The command numbers are yours to choose.** `M64` and `M65` are used here because Smoothieware V2 does not use them for anything else.
- **The name is yours too.** `relay1` can be `vacuum` or `lights`; it is what you type after `switch` in the console.
- **The relay switches in step with the job.** When the command appears in a G-code file, Smoothieware finishes the moves before it, then switches.
- **The relay is off at power-up and on halt** as far as the firmware is concerned: `startup_state = false` and `halt_set_to = false`. While the controller is starting, its pins may not be driven; the board keeps the relay off for a floating input; check how your controller behaves during reset.
- **On and off only.** Keep `output_type = digital`. A mechanical relay cannot be dimmed or pulsed, and rapid switching wears it out.

### 2. A coolant command (Switch module) {#config-codes}

The same entry, answering to the commands that CAM programs already write. Here the relay is a coolant pump:

```ini
[switch]
relay1.enable            = true
relay1.output_pin        = PB1        # G_F pin 3
relay1.output_type       = digital
relay1.input_on_command  = M8         # coolant on
relay1.input_off_command = M9         # coolant off
```

There is no `subcode` line, so plain `M8` and `M9` match. Use `M3` and `M5` in the same way for a spindle contactor. The relay only switches: a spindle speed given with `S` is not passed on. Switch a motor through a contactor, as explained under [Wiring the load](#loads).

### 3. A mains heater held at a temperature (Temperature control module) {#config-heater}

The heater needs its own temperature sensor on one of the controller's thermistor inputs. With `bang_bang` the firmware switches the relay fully on below the target and fully off above it, which is the mode meant for relays:

```ini
[temperature control]
chamber.enable              = true
chamber.heater_pin          = PB1         # G_F pin 3
chamber.thermistor          = EPCOS100K   # the type of your sensor
chamber.thermistor_pin      = ADC1_2      # a free thermistor input (ADC1_2 is the second hotend's)
chamber.designator          = C           # letter shown in temperature reports
chamber.set_m_code          = 141         # M141 S50 sets 50 degrees C
chamber.set_and_wait_m_code = 191         # M191 S50 sets it and waits
chamber.max_temp            = 80          # the firmware refuses to go higher
chamber.bang_bang           = true        # on/off regulation: required for a relay
chamber.hysteresis          = 2           # degrees C either side of the target
```

- **Remove the `relay1` lines from `[switch]`** when you do this: the pin can belong to one entry only.
- **Never leave out `bang_bang = true`.** Without it the firmware pulses the pin many times a second, which a mechanical relay cannot follow and which wears it out. A larger `hysteresis` makes the relay switch less often.
- **The name `chamber` and the codes `M141` and `M191` are examples.** A heater with a name of your own would otherwise answer to `M140` and `M190`, the same codes as the heated bed.
- **`thermistor_pin` is the name of an analog input channel**, not of a pin. Use an input that nothing else reads.
- **The firmware watches the sensor** and halts with an alarm when the reading leaves its limits or the heater does not follow its target. That is a help, not a safety device: a relay contact can weld shut. A mains heater needs a thermal cut-out that works without the controller.

### 4. An extractor that starts by itself (Temperature switch module) {#config-tempswitch}

The temperature switch module has no pin of its own. It watches a temperature and operates a Switch entry, here `relay1` from example 1:

```ini
[temperature switch]
extract.enable         = true
extract.designator     = T        # watch the heaters whose letter is T (the hotends)
extract.switch         = relay1   # name of the Switch entry it operates
extract.threshold_temp = 50.0     # on at or above 50 degrees C, off below
extract.heatup_poll    = 15       # check every 15 s while cold
extract.cooldown_poll  = 60       # check every 60 s while hot
```

`M64.1` and `M65.1` still switch the relay by hand.

### 5. A push-button for the relay (Switch module with an input pin) {#config-button}

A second Switch entry can watch a button and send the command of the relay. The button needs an input pin of its own, on another header of the controller, because the control pin is an output. Here a button between pin 3 of header **G_C** and ground toggles the relay:

```ini
[switch]
lightbutton.enable             = true
lightbutton.input_pin          = PD14!^   # G_C pin 3; the button connects it to ground
lightbutton.input_pin_behavior = toggle   # each press changes the state
lightbutton.output_on_command  = M64.1    # relay on
lightbutton.output_off_command = M65.1    # relay off
```

The pin is checked fifty times a second, so a very short press can be missed. With `momentary` in place of `toggle` the relay is on only while the button is held.

## Wiring the load {#loads}

<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="lightning-charge"></sl-icon>
  <strong>Unplug every mains supply before you touch the load terminal.</strong> The load circuit has its own supply: switching the controller off does not make it safe.
</sl-alert>

1. **Run the live wire through the relay.** Mains live goes through a fuse or breaker to **C**. A wire from **NO** goes on to the device. Neutral and earth go straight from the supply to the device and do not pass through the board.
2. **Choose NO or NC deliberately.** On **NO** the device is off whenever the relay is off: at power-up, on halt, when the 12&nbsp;V supply or the control wires are unplugged. On **NC** the device runs in all those situations. Use NC only for something that must keep running when the controller is off.
3. **Fuse the circuit.** The board has no fuse on the load side. Fit a fuse or breaker rated for the device and its wire, and never above 12&nbsp;A.
4. **Use the right wire and tighten firmly.** Use wire rated for the mains voltage and the fuse you chose. Strip only enough to fill the terminal, leave no stray strands, and tug the wire after tightening.
5. **Enclose it.** Mount the board on standoffs in a closed, earthed enclosure, with strain relief on the mains cable, before you plug anything in.

What the LED tells you:

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-green"></span>Relay</th></tr></thead>
  <tbody>
    <tr><td>Where</td><td>One green light, at marker 3 of the <a href="#tour">board tour</a></td></tr>
    <tr><td>Lit means</td><td>The coil is driven: <b>C</b> is connected to <b>NO</b>.</td></tr>
    <tr><td>Dark means</td><td>The coil is not driven: <b>C</b> is connected to <b>NC</b>. A dark light does not prove that a terminal is safe to touch.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

There is no power light: with the relay off the light is dark even when the board is powered. To switch the light off for good, cut the indicator link (marker 4).

Three things this board does not do, and what to do about them:

- **Motors, compressors and large power supplies** draw several times their rated current when they start. The 12&nbsp;A figure is for steady, resistive loads such as heaters and incandescent lamps. For a spindle or a compressor, use the relay to switch a contactor rated for that motor.
- **It is not a safety device.** A relay contact can weld shut and keep a device running after the command to stop. Emergency stops and door interlocks must cut power independently of this board.
- **It does not tell you whether a terminal is live.** <b>NC</b> stays connected to <b>C</b> whenever the relay has not pulled in, whatever the LED shows.

## How it works {#how-it-works}

The command from the controller never touches the coil circuit. Its path is:

1. The command pin drives a small transistor through a 1.5&nbsp;kΩ resistor; a 100&nbsp;kΩ resistor holds the input low when nothing is connected.
2. The transistor lights the LED inside the optocoupler, fed from the 5&nbsp;V pin through a 620&nbsp;Ω resistor.
3. On the other side of the optocoupler, a second transistor (AO3400A) connects the coil to the coil supply's 0&nbsp;V.
4. A flyback diode absorbs the voltage spike when the coil releases, and a 6.2&nbsp;V zener diode clamps the gate.
5. The relay contacts, which are electrically separate from everything else, connect <b>C</b> to <b>NO</b>.

The coil supply is protected by a fuse and a blocking diode on each input, then by a current-limiting chip (TPS259474L) with a voltage clamp across its output. Three separate grounds are kept apart: the controller's, the coil supply's and the floating load circuit. The layout holds 8.2&nbsp;mm of bare board between the mains copper and everything else.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 142" role="img" aria-labelledby="xb-single-channel-ac-mechanical-relay-path"><title id="xb-single-channel-ac-mechanical-relay-path">Command pin, 1.5 kΩ, 100 kΩ holds it low then Small transistor then Optocoupler LED, fed from 5 V then AO3400A, connects coil to coil 0 V then Relay coil, with flyback diode.</title><rect x="20" y="14" width="165" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="102" y="57" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Command pin</text><text x="102" y="77" text-anchor="middle" font-size="13" fill="#b3b3b3">1.5 kΩ, 100 kΩ holds</text><text x="102" y="93" text-anchor="middle" font-size="13" fill="#b3b3b3">it low</text><rect x="219" y="14" width="165" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="301" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Small transistor</text><text x="301" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M188.8 70H209.8" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M208 63L217 70L208 77Z" fill="#5fb3ff"/><rect x="418" y="14" width="165" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="500" y="56" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Optocoupler LED,</text><text x="500" y="74" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">fed from 5 V</text><text x="500" y="94" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M387.6 70H408.6" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M407 63L416 70L407 77Z" fill="#5fb3ff"/><rect x="616" y="14" width="165" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="699" y="57" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">AO3400A</text><text x="699" y="77" text-anchor="middle" font-size="13" fill="#b3b3b3">connects coil to coil</text><text x="699" y="93" text-anchor="middle" font-size="13" fill="#b3b3b3">0 V</text><path d="M586.4000000000001 70H607.4000000000001" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M605 63L614 70L605 77Z" fill="#5fb3ff"/><rect x="815" y="14" width="165" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="898" y="56" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Relay coil, with</text><text x="898" y="74" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">flyback diode</text><text x="898" y="94" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M785.2 70H806.2" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M804 63L813 70L804 77Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board.</figcaption>
</figure>
{:/nomarkdown}


## Power options and jumpers {#options}

Change jumpers only with every supply unplugged.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Selector</th><th>Pins</th><th>Choice</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td rowspan="2"><b>12&nbsp;V input selector</b> (marker 9)</td><td>top + middle</td><td>TERM 12V screw terminal</td><td rowspan="2">No jumper: the coil has no power until you choose</td></tr>
    <tr><td>middle + bottom</td><td>XT30 connector</td></tr>
    <tr><td rowspan="2"><b>Coil source selector</b> (marker 10)</td><td>top + middle</td><td>External 12&nbsp;V from the input selector</td><td rowspan="2">External</td></tr>
    <tr><td>middle + bottom</td><td>The board's own converter, from the controller's 5&nbsp;V</td></tr>
    <tr><td><b>Host power link</b> (marker 11)</td><td>both pins</td><td>Arms the host-powered mode. Leave it open when you use an external supply.</td><td>Open</td></tr>
    <tr><td><b>Indicator link</b> (marker 4)</td><td>solder bridge</td><td>Cut it to disable the green LED</td><td>Closed</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The pin pairs are those of the board's netlist, with pin 1 at the top as the board is shown in the tour. **Host-powered mode** needs the coil source selector on the converter and the host power link closed: the board then makes about 12&nbsp;V from the controller's 5&nbsp;V through a 3&nbsp;W isolated converter (EVISUN WRB0512S-3WR2) and its own fuse (2&nbsp;A by its part number). The Smoothieboard's 5&nbsp;V budget must be checked before using it.

The 5&nbsp;V and 12&nbsp;V sources are never joined on the board: no jumper links the controller's ground to the coil ground.

## Several boards {#chaining}

This board has one control connector and no pass-through connector, so nothing can be chained from it. To run a second relay board, give it its own command pin and its own `[switch]` entry. The 5&nbsp;V and ground wires can go to the same controller pins as the first board's; each relay that is on takes about 6&nbsp;mA from the 5&nbsp;V pin (calculated).

For several relays on a single board, see the [seven-channel AC mechanical relay](/extensions/seven-channel-ac-mechanical-relay).

{% include _includes/relay-board-comparison.html %}

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>When you see</th><th>It means</th><th>Do this</th></tr></thead>
  <tbody>
    <tr><td>No click and no LED</td><td>The coil has no 12&nbsp;V, or no command arrives.</td><td>Check that the 12&nbsp;V input selector has a jumper on the input you are using: the board is delivered without one. Check the supply's polarity and that it is plugged in. Then check the three control wires.</td></tr>
    <tr><td>No click, no LED, but <code>switch</code> reports the relay as on</td><td>The firmware is driving the pin; the signal or the coil power is not reaching the relay.</td><td>Check the command wire goes to the pin named in your configuration and that ground and 5&nbsp;V are connected. Check the coil source selector is on external.</td></tr>
    <tr><td>The console rejects <code>switch relay1 on</code>, or <code>switch</code> does not list the relay</td><td>The configuration was not loaded.</td><td>Check the lines are under <code>[switch]</code>, that <code>enable</code> is <code>true</code>, and restart the board.</td></tr>
    <tr><td>LED lights but there is no click</td><td>The coil voltage is too low for the relay to pull in.</td><td>Measure the supply under load: the relay pulls in at about 8.4&nbsp;V at 20&nbsp;°C, and the supply should be 12&nbsp;V.</td></tr>
    <tr><td>Relay clicks and LED lights, but the device does not start</td><td>The fault is in the load wiring.</td><td>Unplug everything. Check the fuse, that live goes to C and the device to NO, and that the device's neutral is connected.</td></tr>
    <tr><td>The device runs when the relay is off and stops when it is on</td><td>The device is wired to NC instead of NO.</td><td>Unplug everything and move the wire from NC to NO.</td></tr>
    <tr><td>A device keeps running after its relay is switched off</td><td>The relay contact may have welded, usually after switching a load that was too large.</td><td>Cut the power to the device at its own switch or breaker. Do not rely on that relay again; read the notes on motors under <a href="#loads">Wiring the load</a>.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/). Say how the selectors are set, and what the `switch` command reports.

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/single-channel-ac-mechanical-relay/single-channel-ac-mechanical-relay-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/single-channel-ac-mechanical-relay/single-channel-ac-mechanical-relay-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/single-channel-ac-mechanical-relay/single-channel-ac-mechanical-relay-diagram.png">Board drawing (SVG)</a></td><td>The top view used on this page, at full resolution</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the corner marked 0, 0 with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-ac1-mount-t">
  <title id="xb-ac1-mount-t">Mounting drawing of the single-channel AC relay board, component side: outline 80 by 80 millimetres with 4 mounting holes and 2 cable-tie holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="310.0" y="78.0" width="340.0" height="340.0" rx="8.5" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M310.0 56H650.0"/><path d="M310.0 50V62"/><path d="M650.0 50V62"/><path d="M676.0 78.0V418.0"/><path d="M670.0 78.0h12"/><path d="M670.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">80</text>
  <text x="688.0" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">80</text>
  <circle cx="310.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="298.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M252.0 104.0h30" fill="none"/><path d="M286.0 104.0l-8 -4v8z"/><path d="M252.0 104.0v30" fill="none"/><path d="M252.0 138.0l-4 -8h8z"/></g>
  <text x="290.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="248.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="501.2" cy="141.8" r="6.8" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M490.4 141.8h21.6M501.2 130.9v21.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="508.1" y="168.6" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  45.00, 15.00</text>
  <circle cx="586.2" cy="141.8" r="6.8" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M575.5 141.8h21.6M586.2 130.9v21.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="593.0" y="168.6" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  65.00, 15.00</text>
  <circle cx="501.2" cy="226.8" r="6.8" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M490.4 226.8h21.6M501.2 215.9v21.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="508.1" y="253.6" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">3</tspan>  45.00, 35.00</text>
  <circle cx="331.2" cy="396.8" r="6.8" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M320.4 396.8h21.6M331.2 385.9v21.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="324.4" y="379.9" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">4</tspan>  5.00, 75.00</text>
  <circle cx="458.8" cy="90.8" r="5.3" fill="#191919" stroke="#b3b3b3" stroke-width="1.5"/>
  <circle cx="480.0" cy="90.8" r="5.3" fill="#191919" stroke="#b3b3b3" stroke-width="1.5"/>
  <text x="469.4" y="114.1" text-anchor="middle" font-size="12" fill="#b3b3b3">cable tie</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 80 × 80&nbsp;mm, corners rounded to a 2&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>45.00</td><td>15.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>65.00</td><td>15.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>45.00</td><td>35.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>5.00</td><td>75.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>–</td><td>35.00</td><td>3.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
    <tr><td>–</td><td>40.00</td><td>3.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
  </tbody>
</table></div>

{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

The last column gives the source or condition of each figure. A dash means the figure does not apply or is not specified.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Load voltage</td><td>C, NO, NC</td><td>—</td><td>—</td><td>250 V AC</td><td>50/60&nbsp;Hz</td></tr>
    <tr><td>Load current, resistive</td><td>The channel</td><td>—</td><td>—</td><td>12 A</td><td>One throw powered</td></tr>
    <tr><td>Coil supply voltage</td><td>TERM 12V or XT30</td><td>Open</td><td>12 V</td><td>Open</td><td>Regulated external 12&nbsp;V</td></tr>
    <tr><td>Coil current</td><td>Coil supply</td><td>—</td><td>33 mA</td><td>—</td><td>Relay data: 12&nbsp;V coil, 360&nbsp;Ω at 20&nbsp;°C</td></tr>
    <tr><td>Relay pick-up voltage</td><td>Coil</td><td>—</td><td>8.4 V</td><td>—</td><td>Relay data, at 20&nbsp;°C</td></tr>
    <tr><td>Coil input fuse</td><td>TERM 12V and XT30</td><td>—</td><td>500 mA</td><td>—</td><td>From the part number, 0452.500MRL, one per input</td></tr>
    <tr><td>Host-power fuse</td><td>Host-powered mode</td><td>—</td><td>2 A</td><td>—</td><td>From the part number, 0452002.MRL</td></tr>
    <tr><td>Control signal, on</td><td>Control pin 3</td><td>Open</td><td>3.3 V</td><td>Open</td><td>3.3&nbsp;V compatible by design; thresholds not measured</td></tr>
    <tr><td>Current from the control pin, relay on</td><td>Control pin 3</td><td>—</td><td>≈ 2 mA</td><td>—</td><td>Calculated from the 1.5&nbsp;kΩ input resistor</td></tr>
    <tr><td>Current from the 5 V pin, relay on</td><td>Control pin 2</td><td>—</td><td>≈ 6 mA</td><td>—</td><td>Calculated from the 620&nbsp;Ω optocoupler resistor</td></tr>
    <tr><td>Clearance around mains copper</td><td>Board</td><td>8.2 mm</td><td>—</td><td>—</td><td>Bare board between mains copper and everything else (layout)</td></tr>
    <tr><td>Isolation test voltage</td><td>Controller to coil to load</td><td>Open</td><td>Open</td><td>Open</td><td>Not tested</td></tr>
    <tr><td>Temperature rise at 12 A</td><td>Board</td><td>Open</td><td>Open</td><td>Open</td><td>Not measured</td></tr>
    <tr><td>Current available in host-powered mode</td><td>Control pin 2</td><td>Open</td><td>Open</td><td>Open</td><td>Depends on the controller</td></tr>
    <tr><td>Ambient temperature</td><td>Board</td><td>Open</td><td>Open</td><td>Open</td><td>Not specified</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Component stress limits

These are limits of individual parts, beyond which the part can be damaged. They are not operating conditions; stay inside the table above.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Circuit</th><th>Pin or device stress</th><th>Absolute limit</th></tr></thead>
  <tbody>
    <tr><td>Relay contacts</td><td>Motor, compressor or power-supply inrush</td><td>Open: the 12 A figure is for steady resistive loads only</td></tr>
    <tr><td>Coil supply inputs</td><td>Reversed polarity</td><td>Blocked by a diode on each input; not tested</td></tr>
    <tr><td>Control input</td><td>Voltage on control pin 3</td><td>Open</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
