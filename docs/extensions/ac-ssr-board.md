---
layout: default
title: "AC SSR board"
description: "A solid-state relay for one AC mains load, switched by a Gadgeteer enable signal: pinout, wiring, configuration and limits."
permalink: /extensions/ac-ssr-board
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Solid-state mains output</p>
    <h1 id="ac-ssr-board">AC SSR board</h1>
    <p class="xb-lead">Switch the live wire of one mains load silently, from one Gadgeteer output: a heater, for example. A triac does the switching, an optotriac keeps your controller isolated from the mains, and an external thermostat can cut the command.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/ac-ssr-board/ac-ssr-board-diagram.webp" alt="Top view of the AC solid-state relay board: a Gadgeteer socket and a thermostat connector at the left, a triac and its parts in the middle, a two-screw mains terminal at the bottom right and a large fuse holder at the right.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>1</b><span>mains channel, switching the live wire only</span></div>
  <div class="xb-stat"><b>100–264 V</b><span>AC, 47–63&nbsp;Hz, as printed on the board</span></div>
  <div class="xb-stat"><b>Resistive</b><span>AC resistive loads only, never DC</span></div>
  <div class="xb-stat"><b>25 A</b><span>fast-acting fuse in the live input</span></div>
  <div class="xb-stat"><b>3 of 10</b><span>Gadgeteer contacts used: 5&nbsp;V, enable, ground</span></div>
  <div class="xb-stat"><b>110 × 60</b><span>millimetres, four M3 mounting holes</span></div>
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
  <a href="#troubleshooting">Troubleshooting</a>
  <a href="#downloads">Downloads</a>
  <a href="#mounting">Mounting</a>
  <a href="#electrical">Electrical</a>
</nav>
{:/nomarkdown}

<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="lightning-charge"></sl-icon>
  <strong>Mains voltage can kill.</strong> The terminals, the fuse, the triac and the copper around them carry mains voltage. Use this board only inside a closed, earthed, finger-safe enclosure, only for AC resistive loads, and only if you are competent to do mains work. Switching the triac off does <b>not</b> disconnect the load.
</sl-alert>

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="cone-striped"></sl-icon>
  <strong>This board is marked not for mains use.</strong> Do not connect it to mains. It has no load rating and is not certified to any electrical safety standard.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Channels</td><td>One AC output. Only the live wire passes through the board: it has no neutral and no earth terminals.</td></tr>
    <tr><td>Switching element</td><td>BTA41-800BRG triac, triggered by a MOC3083TVM zero-cross optotriac. It switches at the next zero crossing of the mains, so it suits on/off (burst) control of a resistive load. It is not a dimmer or phase-angle controller.</td></tr>
    <tr><td>Mains input</td><td>100–264&nbsp;V AC, 47–63&nbsp;Hz, as printed on the board</td></tr>
    <tr><td>Load</td><td>AC resistive loads only; never DC.</td></tr>
    <tr><td>Protection</td><td>A 25&nbsp;A fast-acting 6.3 &times; 32&nbsp;mm ceramic fuse (250&nbsp;V) in a closed Schurter holder, a 275&nbsp;V varistor and an RC snubber across the triac, and an external thermostat input that cuts the command.</td></tr>
    <tr><td>Mains terminal</td><td>One 2-way screw terminal, 10&nbsp;mm pitch: line in and load out</td></tr>
    <tr><td>Control socket</td><td>One 10-contact Gadgeteer socket (Samtec SHF-105). Three contacts are used. The board has no second socket and cannot be chained.</td></tr>
    <tr><td>Control signal</td><td>Enable, HIGH switches the load on.</td></tr>
    <tr><td>Control supply</td><td>5&nbsp;V on contact 2, 25&nbsp;mA. It feeds the command circuit only, not the load.</td></tr>
    <tr><td>Thermostat input</td><td>A 2-pin JST XH connector for a normally-closed thermostat in series with the command supply.</td></tr>
    <tr><td>Isolation</td><td>An optotriac between the control side and the mains side, and a strip marked 8&nbsp;mm on the board.</td></tr>
    <tr><td>Indicator</td><td>Amber light for the low-voltage command, with a solder link to disable it</td></tr>
    <tr><td>Test points</td><td>Five, on the control side: 5V, GND (two), EN and OPTOK</td></tr>
    <tr><td>Size</td><td>110 &times; 60&nbsp;mm, two-layer board, M3 mounting holes and two cable-tie holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> and the <a href="/switch">Switch module</a></td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its limits and its basis is in the [electrical specifications](#electrical) appendix; the hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side, with the control side at the left and the mains side at the right.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/ac-ssr-board/ac-ssr-board-diagram.webp" alt="Top view of the relay board with sixteen numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pl" href="#tour-1" style="left:8.0%;top:51.7%" aria-label="1: control socket">1<span class="xb-pop"><b>Control socket</b> — the 10-contact Gadgeteer socket. Only three contacts are used: 5&nbsp;V on contact 2, the enable signal on contact 3 and ground on contact 10. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pl" href="#tour-2" style="left:8.9%;top:75.8%" aria-label="2: thermostat connector">2<span class="xb-pop"><b>Thermostat connector</b> — a two-pin connector for a normally-closed thermostat. It sits in the supply of the command circuit: when it opens, the board cannot switch on, whatever the firmware asks.</span></a>
      <a class="xb-mk xb-pl" href="#tour-3" style="left:18.8%;top:78.5%" aria-label="3: amber command light">3<span class="xb-pop"><b>Amber command light</b> — lit while the command circuit is carrying current. <i>It reports the low-voltage command only. It does not show whether the load is on or off.</i></span></a>
      <a class="xb-mk" href="#tour-4" style="left:26.8%;top:80.8%" aria-label="4: optotriac">4<span class="xb-pop"><b>Optotriac</b> — the MOC3083TVM. It triggers the triac with light, so no wire joins your controller to the mains side. It only turns on when the mains voltage is near zero.</span></a>
      <a class="xb-mk xb-pl" href="#tour-5" style="left:18.6%;top:86.5%" aria-label="5: enable transistor">5<span class="xb-pop"><b>Enable transistor</b> — a small transistor that switches the optotriac&rsquo;s light on when the enable signal is HIGH. A resistor holds the input LOW when nothing drives it.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:26.8%;top:33%" aria-label="6: isolation barrier">6<span class="xb-pop"><b>Isolation barrier</b> — the strip marked ISOLATION BARRIER 8&nbsp;mm &mdash; keep clear. Control side to its left, mains side to its right. Nothing may be placed across it.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:45.5%;top:77.5%" aria-label="7: surge absorber">7<span class="xb-pop"><b>Surge absorber</b> — a 275&nbsp;V varistor across the triac, to absorb voltage spikes.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:40.5%;top:90.8%" aria-label="8: triac">8<span class="xb-pop"><b>Triac</b> — the BTA41-800BRG that switches the load. It heats up under load. <i>The board has no heat sink; the board is marked that the heat sink must be earthed.</i></span></a>
      <a class="xb-mk" href="#tour-9" style="left:47.1%;top:60.8%" aria-label="9: snubber">9<span class="xb-pop"><b>Snubber</b> — a 56&nbsp;&Omega; resistor and a 22&nbsp;nF mains-rated capacitor in series, across the triac. The capacitor is the long brown part above it.</span></a>
      <a class="xb-mk" href="#tour-10" style="left:37.3%;top:67.5%" aria-label="10: gate resistor">10<span class="xb-pop"><b>Gate resistor</b> — 390&nbsp;&Omega;, between the optotriac and the triac gate circuit.</span></a>
      <a class="xb-mk xb-pr" href="#tour-11" style="left:89%;top:50%" aria-label="11: fuse holder">11<span class="xb-pop"><b>Fuse holder</b> — closed holder for a 6.3 &times; 32&nbsp;mm ceramic 25&nbsp;A fast-acting fuse, 250&nbsp;V, in the live input.</span></a>
      <a class="xb-mk" href="#tour-12" style="left:71.8%;top:86.7%" aria-label="12: line input terminal">12<span class="xb-pop"><b>Line in</b> — a two-screw terminal, right-hand screw marked LINE IN L: the live wire from the mains arrives here. <i>Mains voltage.</i></span></a>
      <a class="xb-mk" href="#tour-13" style="left:62.7%;top:86.7%" aria-label="13: load terminal">13<span class="xb-pop"><b>Load out</b> — left-hand screw marked LOAD OUT: the switched live wire to the load. <i>Mains voltage.</i></span></a>
      <a class="xb-mk xb-pl" href="#tour-14" style="left:12.7%;top:85%" aria-label="14: test points">14<span class="xb-pop"><b>Test points</b> — five bare pads on the control side: 5V, two GND, EN and OPTOK.</span></a>
      <a class="xb-mk xb-pl" href="#tour-15" style="left:18.4%;top:94.3%" aria-label="15: indicator link">15<span class="xb-pop"><b>Indicator link</b> — a solder bridge, closed on delivery. Cut it to disable the amber light for good.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-16" style="left:5.8%;top:7%" aria-label="16: cable tie holes">16<span class="xb-pop"><b>Cable-tie holes</b> — two holes for a cable tie that holds the control cable in place.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Control socket</b> — the 10-contact Gadgeteer socket. Only three contacts are used: 5&nbsp;V on contact 2, the enable signal on contact 3 and ground on contact 10. <i>See the pinout.</i></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Thermostat connector</b> — a two-pin connector for a normally-closed thermostat. It sits in the supply of the command circuit: when it opens, the board cannot switch on, whatever the firmware asks.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Amber command light</b> — lit while the command circuit is carrying current. <i>It reports the low-voltage command only. It does not show whether the load is on or off.</i></div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Optotriac</b> — the MOC3083TVM. It triggers the triac with light, so no wire joins your controller to the mains side. It only turns on when the mains voltage is near zero.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Enable transistor</b> — a small transistor that switches the optotriac&rsquo;s light on when the enable signal is HIGH. A resistor holds the input LOW when nothing drives it.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Isolation barrier</b> — the strip marked ISOLATION BARRIER 8&nbsp;mm &mdash; keep clear. Control side to its left, mains side to its right. Nothing may be placed across it.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Surge absorber</b> — a 275&nbsp;V varistor across the triac, to absorb voltage spikes.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Triac</b> — the BTA41-800BRG that switches the load. It heats up under load. <i>The board has no heat sink; the board is marked that the heat sink must be earthed.</i></div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Snubber</b> — a 56&nbsp;&Omega; resistor and a 22&nbsp;nF mains-rated capacitor in series, across the triac. The capacitor is the long brown part above it.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Gate resistor</b> — 390&nbsp;&Omega;, between the optotriac and the triac gate circuit.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Fuse holder</b> — closed holder for a 6.3 &times; 32&nbsp;mm ceramic 25&nbsp;A fast-acting fuse, 250&nbsp;V, in the live input.</div></li>
    <li id="tour-12"><span class="xb-n">12</span><div><b>Line in</b> — a two-screw terminal, right-hand screw marked LINE IN L: the live wire from the mains arrives here. <i>Mains voltage.</i></div></li>
    <li id="tour-13"><span class="xb-n">13</span><div><b>Load out</b> — left-hand screw marked LOAD OUT: the switched live wire to the load. <i>Mains voltage.</i></div></li>
    <li id="tour-14"><span class="xb-n">14</span><div><b>Test points</b> — five bare pads on the control side: 5V, two GND, EN and OPTOK.</div></li>
    <li id="tour-15"><span class="xb-n">15</span><div><b>Indicator link</b> — a solder bridge, closed on delivery. Cut it to disable the amber light for good.</div></li>
    <li id="tour-16"><span class="xb-n">16</span><div><b>Cable-tie holes</b> — two holes for a cable tie that holds the control cable in place.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1: control socket

A 2 &times; 5 Gadgeteer socket. Contact 1 is marked with a <b>1</b> on the board, at the lower end of the socket in the tour; the odd contacts are in the column nearer the middle of the board and the even contacts in the column nearer the edge.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J1 contact</th><th>Function</th><th>Use</th><th>Smoothieboard V2 Prime (header G_F, J37)</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>—</td><td>Not connected</td><td>Leave open</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Supply of the command circuit</td><td>Pin 2</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">EN</span></td><td>Enable: HIGH switches the load on</td><td>Pin 3, <code>PB1</code></td></tr>
    <tr><td>4–9</td><td>—</td><td>Not connected</td><td>Leave open</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Control ground</td><td>Pin 10</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Check the contact numbers of your cable and controller against the table before you connect anything.
</sl-alert>

The control ground is not protective earth. Never join one to the other.

### J3: thermostat connector

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J3 pin</th><th>Net</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5&nbsp;V from the control socket</td><td>One end of the thermostat loop</td></tr>
    <tr><td>2</td><td>5&nbsp;V to the command circuit</td><td>The other end of the loop</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The board is marked <b>EXTERNAL NC THERMOSTAT REQUIRED</b>: the command circuit receives its 5&nbsp;V through this connector. With nothing connected the board cannot switch on. This loop carries the low voltage of the control side, never mains.

### J2: mains terminal

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Screw</th><th>Marking</th><th>Function</th></tr></thead>
  <tbody>
    <tr><td>Right</td><td>LINE IN L</td><td>Live wire from the mains, to the fuse</td></tr>
    <tr><td>Left</td><td>LOAD OUT</td><td>Switched live wire to the load</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Smoothieboard V2 Prime</b><span>Running Smoothieware V2, with one free output pin on header G_F (J37).</span></div>
  <div class="xb-card"><b>A Gadgeteer cable</b><span>A 10-contact cable between the controller and J1.</span></div>
  <div class="xb-card"><b>A normally-closed thermostat</b><span>With a 2-pin cable for J3. Its model and temperature setting are yours to choose.</span></div>
  <div class="xb-card"><b>Mains cable and load</b><span>Rated for the load and the fuse. AC resistive loads only.</span></div>
  <div class="xb-card"><b>A closed, earthed enclosure</b><span>Finger-safe, with strain relief on every mains cable. Neutral and earth do not pass through the board; wire them around it.</span></div>
  <div class="xb-card"><b>A heat sink for the triac</b><span>The board has none, and its marking says it must be earthed. Size it for your load.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

These steps check the control side first, with no mains connected. Mains wiring comes last.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Minimal wiring diagram">
  <svg viewBox="0 0 1000 400" role="img" aria-labelledby="xb-hookup-t">
    <title id="xb-hookup-t">Minimal wiring: the Smoothieboard connected to the control socket, a thermostat in the command supply, mains live through the board to a load, and neutral and earth wired around the board.</title>
    <rect x="360" y="110" width="320" height="200" rx="8" fill="#202020" stroke="#606060" stroke-width="1.5"/>
    <text x="520" y="132" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">AC solid-state relay board</text>
    <text x="400" y="222" font-size="11" fill="#b3b3b3">LINE IN L</text>
    <text x="640" y="222" text-anchor="end" font-size="11" fill="#b3b3b3">LOAD OUT</text>
    <rect x="365" y="262" width="60" height="28" rx="3" fill="#0d0f12" stroke="#939393"/>
    <text x="395" y="280" text-anchor="middle" font-size="11" fill="#eaeaea">J1</text>
    <rect x="445" y="262" width="60" height="28" rx="3" fill="#0d0f12" stroke="#939393"/>
    <text x="475" y="280" text-anchor="middle" font-size="11" fill="#eaeaea">J3</text>
    <rect x="30" y="230" width="150" height="80" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/>
    <text x="105" y="266" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Smoothieboard</text>
    <text x="105" y="286" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">V2 Prime</text>
    <path d="M180 276H365" stroke="#5fb3ff" stroke-width="4" fill="none"/>
    <text x="272" y="318" text-anchor="middle" font-size="11" fill="#b3b3b3">5 V, EN, GND</text>
    <rect x="440" y="335" width="130" height="40" rx="6" fill="#292929" stroke="#ffcc33"/>
    <text x="505" y="360" text-anchor="middle" font-size="12" fill="#eaeaea">NC thermostat</text>
    <path d="M475 290V335" stroke="#ffcc33" stroke-width="3" fill="none"/>
    <rect x="30" y="20" width="160" height="70" rx="8" fill="#292929" stroke="#606060"/>
    <text x="110" y="60" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">Mains supply</text>
    <rect x="810" y="20" width="160" height="70" rx="8" fill="#292929" stroke="#606060"/>
    <text x="890" y="60" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">Your load</text>
    <path d="M190 36H810" stroke="#7ccf4a" stroke-width="5"/><path d="M190 36H810" stroke="#ffe14d" stroke-width="5" stroke-dasharray="10 10"/>
    <path d="M190 54H810" stroke="#4f8dea" stroke-width="5"/>
    <path d="M190 72H400V200" fill="none" stroke="#b0703c" stroke-width="5"/>
    <path d="M640 200V72H810" fill="none" stroke="#b0703c" stroke-width="5"/>
    <g font-size="12" fill="#eaeaea">
      <text x="500" y="30" text-anchor="middle">Earth: around the board, straight to the load</text>
      <text x="500" y="49" text-anchor="middle" fill="#9cc3ff">Neutral: around the board, straight to the load</text>
      <text x="300" y="66" text-anchor="middle" fill="#e0a877">Live: to LINE IN, through the fuse</text>
      <text x="720" y="90" text-anchor="middle" fill="#e0a877">Switched live to the load</text>
    </g>
  </svg>
  </div>
  <figcaption>Minimal wiring, schematic and not to scale. Mains colours follow the European convention: brown live, blue neutral, green-yellow earth. Only the live wire passes through the board.</figcaption>
</figure>

<ol class="xb-steps">
  <li class="xb-step">
    <h3>Switch everything off</h3>
    <p>Unplug the mains and power down the Smoothieboard. Nothing is connected to the mains terminal yet.</p>
  </li>
  <li class="xb-step">
    <h3>Mount the board</h3>
    <p>Fix it with four M3 screws on standoffs inside the enclosure, using the hole positions in the <a href="#mounting">mounting appendix</a>. Fit a heat sink to the triac and connect the heat sink to protective earth.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the control side</h3>
    <p>Join J1 contacts <b>2</b> (5&nbsp;V), <b>3</b> (enable) and <b>10</b> (ground) to the controller, and a normally-closed thermostat to <b>J3</b>.</p>
  </li>
  <li class="xb-step">
    <h3>Add the output to your configuration</h3>
    <p>Copy <a href="#configuration">example 1</a> into the configuration file on the Smoothieboard&rsquo;s SD card, then restart the board.</p>
  </li>
  <li class="xb-step">
    <h3>Test without mains</h3>
    <p>With the mains still unplugged, power the Smoothieboard and send:</p>
    <pre><code>M64.1</code></pre>
    <p class="xb-expect"><b>You should see:</b> the amber light next to the thermostat connector lights. Send <code>M65.1</code>: it goes out. The triac itself cannot be tested without mains.</p>
    <p>If the light does not follow the command, go to <a href="#troubleshooting">troubleshooting</a> before going any further.</p>
  </li>
  <li class="xb-step">
    <h3>Wire the mains and the load</h3>
    <p>Follow <a href="#loads">Wiring the load</a>, with the mains unplugged and the enclosure open.</p>
    <p class="xb-warn"><b>Mains work.</b> Never touch the terminal, the fuse or the triac while the mains is connected, even when the amber light is dark.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

Smoothieware has no setting called &ldquo;AC SSR board&rdquo;. The board follows one output pin of the controller, and the Switch module or the Temperature control module can drive it. The lines go into the configuration file on the controller&rsquo;s SD card.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Switch the load on and off from G-code or the console</td><td><a href="/switch">Switch</a>, digital output</td><td><a href="#config-onoff">1. On and off</a></td></tr>
    <tr><td>Hold a temperature with a resistive heater</td><td><a href="/temperaturecontrol">Temperature control</a>, on/off regulation</td><td><a href="#config-heater">2. Heater</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

A pin can be claimed by one entry only, so a pin that moves to example 2 loses its entry from example 1.

### 1. On and off (Switch module) {#config-onoff}

```ini
[switch]
acssr.enable            = true
acssr.output_pin        = PB1        # header G_F pin 3, the enable contact J1.3
acssr.output_type       = digital    # plain on/off
acssr.input_on_command  = M64
acssr.input_off_command = M65
acssr.subcode           = 1          # M64.1 on, M65.1 off
acssr.startup_state     = false      # off when the board starts
acssr.halt_set_to       = false      # off when the machine halts
```

If your file already has a `[switch]` section, add the `acssr` lines to it instead of creating a second one. Typing `switch acssr on` or `switch acssr off` in the console does the same as the commands.

- **The command numbers are yours to choose.** `M64` and `M65` are used because Smoothieware V2 does not use them for anything else. Any free M-code works.
- **Off at power-up and on halt.** `startup_state = false` and `halt_set_to = false` ask for a LOW level, and a resistor on the board holds the input LOW when nothing drives it.
- **On and off only.** Keep `output_type = digital`. The triac switches at the next zero crossing of the mains, so it follows slow on/off commands but not fast pulses.

### 2. A resistive heater held at a temperature (Temperature control module) {#config-heater}

The heater needs its own temperature sensor on one of the controller&rsquo;s thermistor inputs. With `bang_bang` the firmware switches the output fully on below the target and fully off above it:

```ini
[temperature control]
chamber.enable              = true
chamber.heater_pin          = PB1         # header G_F pin 3, the enable contact J1.3
chamber.thermistor          = EPCOS100K   # the type of your sensor
chamber.thermistor_pin      = ADC1_2      # a free thermistor input
chamber.designator          = C           # letter shown in temperature reports
chamber.set_m_code          = 141         # M141 S50 sets 50 degrees C
chamber.set_and_wait_m_code = 191         # M191 S50 sets it and waits
chamber.max_temp            = 80          # the firmware refuses to go higher
chamber.bang_bang           = true        # on/off regulation
chamber.hysteresis          = 2           # degrees C either side of the target
```

- **Remove the `acssr` lines from `[switch]`** when you do this: the pin can belong to one entry only.
- **The name `chamber` and the codes `M141` and `M191` are examples.** A heater with a name of your own would otherwise answer to `M140` and `M190`, the same codes as the heated bed.
- **The firmware watches the sensor** and halts with an alarm when the reading leaves its limits. That is a help, not a safety device: a triac can fail shorted and keep the heater on. Use the thermostat connector with a thermostat that works without the controller.
- **Use on/off regulation.** Do not use slow PWM or PID regulation with this board.

## Wiring the load {#loads}

<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="lightning-charge"></sl-icon>
  <strong>Unplug the mains before you touch any terminal.</strong> The off state of a triac is not a disconnection: a small current can still flow, and a failed triac stays on.
</sl-alert>

1. **Live in.** Connect the live wire from the mains to the right-hand screw, marked **LINE IN L**. It reaches the load only through the fuse and the triac.
2. **Load out.** Connect the load&rsquo;s live wire to the left-hand screw, marked **LOAD OUT**.
3. **Neutral and earth go around the board.** They have no terminal on it: join them directly between the mains and the load, with terminals of your own inside the enclosure.
4. **Earth the heat sink and the enclosure.** The board is marked that the heat sink must be earthed (PE).
5. **AC resistive loads only.** Never use the board with DC. Do not connect inductive loads (motors, transformers).
6. **Start small.** Start with a small resistive load, and measure the temperature of the triac and its heat sink before you go higher.
7. **Close the enclosure** and fit strain relief on every mains cable before you plug anything in.

What the light tells you:

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-amber"></span>Amber (CMD)</th></tr></thead>
  <tbody>
    <tr><td>Where</td><td>Beside the thermostat connector, marker 3 of the <a href="#tour">board tour</a></td></tr>
    <tr><td>Lit means</td><td>The command circuit is carrying current: enable is HIGH and the thermostat loop is closed</td></tr>
    <tr><td>Dark means</td><td>Enable is LOW, the thermostat loop is open, or the light is disabled. It does not prove the load is off.</td></tr>
    <tr><td>Disable it</td><td>Cut the solder link beside it (marker 15)</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Three things this board does not do:

- **It is not a disconnect and not a safety device.** A triac can fail shorted and keep a load running after the command to stop. Emergency stops must cut the mains independently of this board.
- **It has no mains indicator.** The amber light shows the control side only. Never treat a dark light as a safe-to-touch state.
- **It does not dim.** It switches at zero crossings: on or off, not phase-angle control.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 250" role="img" aria-labelledby="xb-how-t">
    <title id="xb-how-t">The enable signal turns on a transistor; the transistor lights the LED inside the optotriac; across the optical barrier the optotriac triggers the triac gate; the triac switches the live wire to the load.</title>
    <g font-size="13" font-weight="700" text-anchor="middle" fill="#eaeaea">
      <rect x="20" y="85" width="160" height="80" rx="8" fill="#1f2226" stroke="#e4e4e4"/><text x="100" y="120">Enable on J1</text><text x="100" y="140" font-weight="400" fill="#b3b3b3">HIGH = on</text>
      <rect x="215" y="85" width="140" height="80" rx="8" fill="#292929" stroke="#5fb3ff"/><text x="285" y="120">Transistor</text><text x="285" y="140" font-weight="400" fill="#b3b3b3">via thermostat loop</text>
      <rect x="390" y="85" width="170" height="80" rx="8" fill="#292929" stroke="#5fb3ff"/><text x="475" y="120">Optotriac</text><text x="475" y="140" font-weight="400" fill="#b3b3b3">MOC3083TVM</text>
      <rect x="600" y="85" width="150" height="80" rx="8" fill="#292929" stroke="#f0b08a"/><text x="675" y="120">Triac</text><text x="675" y="140" font-weight="400" fill="#b3b3b3">BTA41-800BRG</text>
      <rect x="790" y="85" width="190" height="80" rx="8" fill="#292929" stroke="#f0b08a"/><text x="885" y="120">Switched live</text><text x="885" y="140" font-weight="400" fill="#b3b3b3">to LOAD OUT</text>
    </g>
    <g stroke-width="3" fill="none" stroke="#b3b3b3"><path d="M180 125H215"/><path d="M355 125H390"/><path d="M560 125H600"/><path d="M750 125H790"/></g>
    <path d="M580 40V230" stroke="#606060" stroke-width="2" stroke-dasharray="6 6"/>
    <text x="580" y="30" text-anchor="middle" font-size="12" fill="#b3b3b3">optical barrier: light only</text>
    <text x="270" y="60" text-anchor="middle" font-size="12" fill="#b3b3b3">CONTROL SIDE</text>
    <text x="780" y="60" text-anchor="middle" font-size="12" fill="#f0b08a">MAINS SIDE</text>
    <text x="780" y="205" text-anchor="middle" font-size="12" fill="#b3b3b3">fuse in the live input</text>
  </svg>
  </div>
  <figcaption>The path of one on/off command.</figcaption>
</figure>
{:/nomarkdown}

On the **control side**, the 5&nbsp;V of J1 contact 2 passes through the thermostat loop (J3) to the command circuit. A HIGH level on the enable contact, through a 1&nbsp;k&Omega; resistor, turns on a small transistor. The transistor completes the current path of the optotriac&rsquo;s light (through a 330&nbsp;&Omega; resistor) and of the amber light. A 10&nbsp;k&Omega; resistor holds the transistor off when nothing drives the enable contact, and a small ESD diode protects the enable input.

Opening the thermostat therefore removes the command supply: the transistor can no longer light the optotriac, whatever the firmware requests.

On the **mains side**, the optotriac triggers the triac&rsquo;s gate through a 390&nbsp;&Omega; resistor, but only when the mains voltage is close to zero. A 275&nbsp;V varistor and a series resistor and capacitor (the snubber) sit across the triac to absorb voltage spikes.

{% include _includes/relay-board-comparison.html %}

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>When you see</th><th>It means</th><th>Do this</th></tr></thead>
  <tbody>
    <tr><td>Amber light stays dark when you send <code>M64.1</code></td><td>The enable signal or the 5&nbsp;V does not reach the board, or the thermostat loop is open.</td><td>With the mains unplugged, check J1 contacts 2, 3 and 10 against the table, and that J3 is connected through a closed thermostat. Check that <code>switch</code> lists <code>acssr</code>.</td></tr>
    <tr><td>The console rejects <code>switch acssr on</code>, or <code>switch</code> does not list it</td><td>The configuration was not loaded.</td><td>Check the lines are under <code>[switch]</code>, that <code>enable</code> is <code>true</code>, and restart the board.</td></tr>
    <tr><td>Amber light on, but the load does not run</td><td>The fault is on the mains side or the load wiring.</td><td>Unplug the mains. Check the fuse, the live wire to LINE IN and the load wire to LOAD OUT. Neutral and earth must reach the load without passing through the board.</td></tr>
    <tr><td>The load runs with the amber light dark</td><td>The triac may have failed shorted.</td><td>Cut the mains at its own breaker. Do not use this board again until the triac has been replaced.</td></tr>
    <tr><td>The triac or the heat sink gets very hot</td><td>The load is too large for the heat sinking.</td><td>Switch off at once and use a smaller load or a larger heat sink.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/). Say what the `switch` command reports.

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/ac-ssr-board/ac-ssr-board-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram.</td></tr>
    <tr><td><a href="/images/extensions/ac-ssr-board/ac-ssr-board-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/ac-ssr-board/ac-ssr-board-diagram.webp">Board drawing (WebP)</a></td><td>The top view used on this page, at full resolution</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the corner marked 0, 0 with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 467" role="img" aria-labelledby="xb-acssr-mount-t">
  <title id="xb-acssr-mount-t">Mounting drawing of the AC solid-state relay board, component side: outline 110 by 60 millimetres with 4 mounting holes and 2 cable-tie holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="180.0" y="78.0" width="600.0" height="327.3" rx="10.9" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M180.0 56H780.0"/><path d="M180.0 50V62"/><path d="M780.0 50V62"/><path d="M806.0 78.0V405.3"/><path d="M800.0 78.0h12"/><path d="M800.0 405.3h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">110</text>
  <text x="818.0" y="246.6" font-size="15" font-weight="700" fill="#eaeaea">60</text>
  <circle cx="180.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="168.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M122.0 104.0h30" fill="none"/><path d="M156.0 104.0l-8 -4v8z"/><path d="M122.0 104.0v30" fill="none"/><path d="M122.0 138.0l-4 -8h8z"/></g>
  <text x="160.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="118.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="343.6" cy="132.5" r="8.7" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M330.9 132.5h25.5M343.6 119.8v25.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="334.9" y="161.3" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  30.00, 10.00</text>
  <circle cx="289.1" cy="187.1" r="8.7" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M276.4 187.1h25.5M289.1 174.4v25.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="280.4" y="215.8" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  20.00, 20.00</text>
  <circle cx="561.8" cy="187.1" r="8.7" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M549.1 187.1h25.5M561.8 174.4v25.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="570.5" y="215.8" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">3</tspan>  70.00, 20.00</text>
  <circle cx="289.1" cy="296.2" r="8.7" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M276.4 296.2h25.5M289.1 283.5v25.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="280.4" y="277.5" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">4</tspan>  20.00, 40.00</text>
  <circle cx="196.4" cy="94.4" r="6.8" fill="#191919" stroke="#b3b3b3" stroke-width="1.5"/>
  <circle cx="223.6" cy="94.4" r="6.8" fill="#191919" stroke="#b3b3b3" stroke-width="1.5"/>
  <text x="238.5" y="98.4" text-anchor="start" font-size="12" fill="#b3b3b3">cable tie</text>
  <text x="480.0" y="435.3" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 110 × 60&nbsp;mm, corners rounded to a 2&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>30.00</td><td>10.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>20.00</td><td>20.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>70.00</td><td>20.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>20.00</td><td>40.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>–</td><td>3.00</td><td>3.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
    <tr><td>–</td><td>8.00</td><td>3.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
  </tbody>
</table></div>

{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Every figure below is a design value, a value calculated from the design, or a value from a part number, as the last column says.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Mains input voltage</td><td>LINE IN</td><td>100 V AC</td><td>—</td><td>264 V AC</td><td>Printed on the board</td></tr>
    <tr><td>Line frequency</td><td>LINE IN</td><td>47 Hz</td><td>—</td><td>63 Hz</td><td>Printed on the board</td></tr>
    <tr><td>Fuse</td><td>Live input</td><td>—</td><td>25 A</td><td>—</td><td>Fast-acting, 6.3 × 32&nbsp;mm, 250&nbsp;V, ceramic; Schurter closed holder FUP 0031.2520.</td></tr>
    <tr><td>Varistor</td><td>Across the triac</td><td>—</td><td>275 V</td><td>—</td><td>S14K275, 14&nbsp;mm</td></tr>
    <tr><td>Snubber</td><td>Across the triac</td><td>—</td><td>56 Ω and 22 nF</td><td>—</td><td>22&nbsp;nF is an X2 capacitor rated 305&nbsp;V AC</td></tr>
    <tr><td>Control supply</td><td>J1 contact 2</td><td>—</td><td>5 V</td><td>—</td><td>Command circuit supply, 25&nbsp;mA</td></tr>
    <tr><td>Enable output level</td><td>J1 contact 3</td><td>2.0 V</td><td>—</td><td>—</td><td>At 0.25&nbsp;mA; transistor DMN2056U characterised for low drive at 1.5&nbsp;V and 25&nbsp;°C</td></tr>
    <tr><td>Barrier between mains and control</td><td>Board</td><td>8 mm</td><td>—</td><td>—</td><td>Marked on the board</td></tr>
    <tr><td>Narrowest mains copper</td><td>Board</td><td>—</td><td>1.9 mm</td><td>—</td><td>—</td></tr>
    <tr><td>Triac loss and temperature</td><td>Q1</td><td>—</td><td>19.3 W</td><td>111.8 °C</td><td>Calculated at 20&nbsp;A, 50&nbsp;°C ambient, 0.9 K/W junction to case, 0.3 K/W interface, 2 K/W heat sink</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Component stress limits

These are limits of individual parts, beyond which the part can be damaged. They are not operating conditions; stay inside the table above.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Circuit</th><th>Pin or device stress</th><th>Absolute limit</th></tr></thead>
  <tbody>
    <tr><td>Triac</td><td>Failure as a short circuit</td><td>The load stays on; the fuse protects the wiring only</td></tr>
    <tr><td>Enable input</td><td>Voltage on J1 contact 3</td><td>Protected by a 3.3&nbsp;V ESD diode, with a 10&nbsp;k&Omega; pull-down</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
