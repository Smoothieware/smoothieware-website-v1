---
layout: default
title: "Single-channel solid state relay output"
description: "One optically isolated mains switch with a triac: pinout, wiring, configuration and limits."
permalink: /extensions/single-channel-solid-state-relay-output
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Solid-state mains output</p>
    <h1 id="single-channel-solid-state-relay-output">Single-channel solid state relay output</h1>
    <p class="xb-lead">Switch one mains load silently, with no clicking relay: a heater, a lamp, a heated bed. A triac does the switching and an optocoupler keeps your controller isolated from the mains.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/single-channel-solid-state-relay-output/single-channel-solid-state-relay-output-diagram.png" alt="Top view of the solid-state relay board: a fuse holder and a mains input terminal on the left, a load terminal on the right, a triac on the right side and a three-pin control connector at the bottom.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>1</b><span>mains channel, silent triac switching</span></div>
  <div class="xb-stat"><b>100–240 V</b><span>AC input, as printed on the board</span></div>
  <div class="xb-stat"><b>Resistive</b><span>loads only; the board has no load current rating</span></div>
  <div class="xb-stat"><b>4.5–6 V</b><span>HIGH signal needed. 3.3&nbsp;V is not supported</span></div>
  <div class="xb-stat"><b>12.5 A</b><span>fast-acting fuse in the live input</span></div>
  <div class="xb-stat"><b>100 × 77</b><span>millimetres, four M3 mounting holes</span></div>
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
  <strong>Mains voltage can kill.</strong> Every terminal on the upper half of this board carries mains voltage, and so do the triac, the fuse and the copper around them. Use this board only inside a closed, earthed, finger-safe enclosure, only for resistive loads, and only if you are competent to do mains work. Switching the triac off does <b>not</b> disconnect the load. This board is not certified to any electrical safety standard.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Channels</td><td>One mains output: one switched live line. Neutral and earth pass straight through the board.</td></tr>
    <tr><td>Switching element</td><td>BTA41-800BRG triac, triggered by a MOC3063TVM zero-cross optotriac. It switches on and off at the next zero crossing of the mains. It is not a dimmer or phase-angle controller.</td></tr>
    <tr><td>Mains input</td><td>100–240&nbsp;V AC, as printed on the board.</td></tr>
    <tr><td>Load rating</td><td>The board has no load current rating. Resistive loads only.</td></tr>
    <tr><td>Protection</td><td>A 12.5&nbsp;A fast-acting 6.3 × 32&nbsp;mm fuse in a Schurter holder, a 275&nbsp;V thermally protected varistor across the fused live and neutral, and a remote 110&nbsp;°C thermal link in the triac trigger path.</td></tr>
    <tr><td>Load terminals</td><td>3-way screw terminals, 5.08&nbsp;mm pitch, for mains in (L, PE, N) and load (N, PE, switched L); a 2-way terminal bonds protective earth.</td></tr>
    <tr><td>Control connector</td><td>3-pin Molex KK 2.54&nbsp;mm header: ground, control supply, signal. There is no Gadgeteer socket and the board cannot be chained.</td></tr>
    <tr><td>Control signal</td><td>HIGH switches the load on. The design needs 4.5–6&nbsp;V, about 9–11&nbsp;mA. <b>Direct 3.3&nbsp;V control is not supported.</b></td></tr>
    <tr><td>Control supply</td><td>5–12&nbsp;V on connector pin 2, for the amber load-live indicator only. It is not load power, and the board draws no load energy from the controller.</td></tr>
    <tr><td>Isolation</td><td>An optotriac between the control side and the mains side, and a slot with an 8&nbsp;mm barrier marked on the board. Not certified.</td></tr>
    <tr><td>Indicators</td><td>Green LED: signal HIGH. Amber LED: mains voltage at the load terminal. Each has a solder link to disable it.</td></tr>
    <tr><td>Test points</td><td>Five, on the control side: SIG, GND (two), VCTRL and SENSE_C</td></tr>
    <tr><td>Size</td><td>100 × 77&nbsp;mm, 1.6&nbsp;mm two-layer board, M3 mounting holes and two cable-tie holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> and the <a href="/switch">Switch module</a>, through a 4.5–6&nbsp;V signal stage that you provide</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its limits and its basis is in the [electrical specifications](#electrical) appendix; the hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side, with the mains area at the top and the control area at the bottom.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/single-channel-solid-state-relay-output/single-channel-solid-state-relay-output-diagram.png" alt="Top view of the relay board with fifteen numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:7.2%;top:17.7%" aria-label="1: mains input terminal">1<span class="xb-pop"><b>Mains input</b> — a three-way screw terminal marked <b>L</b>, <b>PE</b> and <b>N</b> from top to bottom: live, protective earth and neutral. <i>Mains voltage.</i></span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-2" style="left:7.2%;top:42.5%" aria-label="2: protective earth bond terminal">2<span class="xb-pop"><b>Earth bond</b> — two screws joined to protective earth, for bonding an enclosure or a heat sink.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-3" style="left:19.5%;top:15.2%" aria-label="3: fuse holder">3<span class="xb-pop"><b>Fuse</b> — a holder for a 6.3 × 32&nbsp;mm 12.5&nbsp;A fast-acting fuse in the live input.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:64.2%;top:12.7%" aria-label="4: surge absorber">4<span class="xb-pop"><b>Surge absorber</b> — a 275&nbsp;V varistor across the fused live and neutral, to absorb voltage spikes.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-5" style="left:92.8%;top:30.6%" aria-label="5: load terminal">5<span class="xb-pop"><b>Load terminal</b> — a three-way screw terminal. The top screw is the switched live, the middle one earth and the bottom one neutral. <i>Mains voltage.</i></span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-6" style="left:83.6%;top:48.1%" aria-label="6: triac">6<span class="xb-pop"><b>Triac</b> — the BTA41-800BRG that switches the load&rsquo;s live wire. It heats up under load. <i>The board has no heat sink.</i></span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:67.7%;top:46.2%" aria-label="7: thermal link">7<span class="xb-pop"><b>Thermal link pads</b> — two pads for a remote 110&nbsp;°C thermal link on flying leads. It stops the triac being triggered if it gets too hot. <i>Not a load disconnect.</i></span></a>
      <a class="xb-mk" href="#tour-8" style="left:52.0%;top:79.1%" aria-label="8: optotriac">8<span class="xb-pop"><b>Optotriac</b> — the MOC3063TVM. It triggers the triac with light, so no wire joins your controller to the mains side. It only turns on when the mains voltage is near zero.</span></a>
      <a class="xb-mk" href="#tour-9" style="left:65.7%;top:67.8%" aria-label="9: load sense optocoupler">9<span class="xb-pop"><b>Load-sense optocoupler</b> — the LTV-814. It senses mains voltage at the load terminal and reports it to the amber light.</span></a>
      <a class="xb-mk" href="#tour-10" style="left:42.2%;top:93.7%" aria-label="10: control connector">10<span class="xb-pop"><b>Control connector</b> — three pins: ground, control supply and signal. <i>See the pinout.</i></span></a>
      <a class="xb-mk" href="#tour-11" style="left:60.3%;top:91.1%" aria-label="11: green signal light">11<span class="xb-pop"><b>Green signal light</b> — lit while the signal input is HIGH. A solder link beside it disables the light when cut.</span></a>
      <a class="xb-mk" href="#tour-12" style="left:68.6%;top:91.1%" aria-label="12: amber load-live light">12<span class="xb-pop"><b>Amber load-live light</b> — lit while the load terminal carries mains voltage. It needs the control supply on connector pin 2. A solder link beside it disables the light.</span></a>
      <a class="xb-mk xb-pr" href="#tour-13" style="left:77.5%;top:84.8%" aria-label="13: test points">13<span class="xb-pop"><b>Test points</b> — five bare pads on the control side: SIG, two GND, VCTRL and SENSE_C.</span></a>
      <a class="xb-mk xb-pl" href="#tour-14" style="left:20%;top:70.5%" aria-label="14: isolation barrier">14<span class="xb-pop"><b>Isolation barrier</b> — the gap between the mains area (above) and the control area (below). No mains copper crosses it.</span></a>
      <a class="xb-mk xb-pb" href="#tour-15" style="left:75.5%;top:4.5%" aria-label="15: cable tie holes">15<span class="xb-pop"><b>Cable-tie holes</b> — two holes for a cable tie that holds the mains wires in place.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Mains input</b> — a three-way screw terminal marked <b>L</b>, <b>PE</b> and <b>N</b> from top to bottom: live, protective earth and neutral. <i>Mains voltage.</i></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Earth bond</b> — two screws joined to protective earth, for bonding an enclosure or a heat sink.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Fuse</b> — a holder for a 6.3 × 32&nbsp;mm 12.5&nbsp;A fast-acting fuse in the live input.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Surge absorber</b> — a 275&nbsp;V varistor across the fused live and neutral, to absorb voltage spikes.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Load terminal</b> — a three-way screw terminal. The top screw is the switched live, the middle one earth and the bottom one neutral. <i>Mains voltage.</i></div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Triac</b> — the BTA41-800BRG that switches the load&rsquo;s live wire. It heats up under load. <i>The board has no heat sink.</i></div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Thermal link pads</b> — two pads for a remote 110&nbsp;°C thermal link on flying leads. It stops the triac being triggered if it gets too hot. <i>Not a load disconnect.</i></div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Optotriac</b> — the MOC3063TVM. It triggers the triac with light, so no wire joins your controller to the mains side. It only turns on when the mains voltage is near zero.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Load-sense optocoupler</b> — the LTV-814. It senses mains voltage at the load terminal and reports it to the amber light.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Control connector</b> — three pins: ground, control supply and signal. <i>See the pinout.</i></div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Green signal light</b> — lit while the signal input is HIGH. A solder link beside it disables the light when cut.</div></li>
    <li id="tour-12"><span class="xb-n">12</span><div><b>Amber load-live light</b> — lit while the load terminal carries mains voltage. It needs the control supply on connector pin 2. A solder link beside it disables the light.</div></li>
    <li id="tour-13"><span class="xb-n">13</span><div><b>Test points</b> — five bare pads on the control side: SIG, two GND, VCTRL and SENSE_C.</div></li>
    <li id="tour-14"><span class="xb-n">14</span><div><b>Isolation barrier</b> — the gap between the mains area (above) and the control area (below). No mains copper crosses it.</div></li>
    <li id="tour-15"><span class="xb-n">15</span><div><b>Cable-tie holes</b> — two holes for a cable tie that holds the mains wires in place.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1: control connector

A three-pin Molex KK header, seen from above with the board held as in the tour. The pins are labelled on the board.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J1 pin</th><th>Function</th><th>Use</th><th>Smoothieboard V2 Prime (header GF, J37)</th></tr></thead>
  <tbody>
    <tr><td>1 (left)</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Control ground: the signal&rsquo;s return</td><td>Pin 10</td></tr>
    <tr><td>2 (middle)</td><td><span class="xb-pill xb-p-5v">5–12 V</span></td><td>Supply for the amber load-live light only</td><td>Optional</td></tr>
    <tr><td>3 (right)</td><td><span class="xb-pill xb-p-sig">SIG</span></td><td>HIGH switches the load on</td><td>Pin 3, <code>PB1</code> (through a 4.5–6&nbsp;V stage)</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Control ground is not protective earth. Never join one to the other.

### Mains terminals

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Terminal</th><th>Position (top to bottom)</th><th>Function</th></tr></thead>
  <tbody>
    <tr><td rowspan="3">Mains in (left)</td><td>1, marked L</td><td>Live, to the fuse</td></tr>
    <tr><td>2, marked PE</td><td>Protective earth</td></tr>
    <tr><td>3, marked N</td><td>Neutral</td></tr>
    <tr><td rowspan="3">Load (right)</td><td>3, marked LOAD</td><td>Switched live</td></tr>
    <tr><td>2</td><td>Protective earth</td></tr>
    <tr><td>1</td><td>Neutral</td></tr>
    <tr><td rowspan="2">PE bond (left, lower)</td><td>1</td><td>Protective earth</td></tr>
    <tr><td>2</td><td>Protective earth, joined to contact 1</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The pin numbers of the two three-way terminals run in opposite directions: the mains-in terminal is numbered live, earth, neutral from the top and the load terminal neutral, earth, live from the bottom. Use the letters printed on the board, not the numbers.

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Smoothieboard V2 Prime</b><span>Running Smoothieware V2, with one free output pin on header G_F (J37).</span></div>
  <div class="xb-card"><b>A 4.5–6&nbsp;V signal stage</b><span>The board needs a HIGH level of 4.5–6&nbsp;V; the Prime&rsquo;s outputs are 3.3&nbsp;V. The board has no such stage; you provide it.</span></div>
  <div class="xb-card"><b>A 3-pin cable for J1</b><span>A mating housing for the 2.54&nbsp;mm Molex KK header, wired pin 1 to pin 1.</span></div>
  <div class="xb-card"><b>Mains cable and load</b><span>Rated for the load and the fuse. Resistive loads only.</span></div>
  <div class="xb-card"><b>A closed, earthed enclosure</b><span>Finger-safe, with strain relief on every mains cable and an earth connection to the PE bond terminal.</span></div>
  <div class="xb-card"><b>A heat sink for the triac</b><span>The board has none. Size it for your load and check its temperature.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

These steps check the control side first, with no mains connected. Mains wiring comes last.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Minimal wiring diagram">
  <svg viewBox="0 0 1000 400" role="img" aria-labelledby="xb-hookup-t">
    <title id="xb-hookup-t">Minimal wiring: a signal stage between the Smoothieboard and the J1 connector, mains live through the fuse and the board to a load, and neutral and earth straight to the load.</title>
    <rect x="360" y="110" width="320" height="200" rx="8" fill="#1b2028" stroke="#59616e" stroke-width="1.5"/>
    <text x="520" y="132" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">Solid-state relay board</text>
    <text x="400" y="222" font-size="11" fill="#a9b4c2">MAINS IN</text>
    <text x="640" y="222" text-anchor="end" font-size="11" fill="#a9b4c2">LOAD</text>
    <rect x="410" y="262" width="60" height="28" rx="3" fill="#0d0f12" stroke="#8a94a3"/>
    <text x="440" y="280" text-anchor="middle" font-size="11" fill="#e6ebf2">J1</text>
    <rect x="30" y="230" width="150" height="80" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/>
    <text x="105" y="266" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Smoothieboard</text>
    <text x="105" y="286" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">V2 Prime</text>
    <rect x="215" y="250" width="110" height="40" rx="6" fill="#212936" stroke="#ffcc33"/>
    <text x="270" y="275" text-anchor="middle" font-size="12" fill="#e6ebf2">4.5–6 V stage</text>
    <path d="M180 270H215" stroke="#5fb3ff" stroke-width="4" fill="none"/>
    <path d="M325 276H410" stroke="#5fb3ff" stroke-width="4" fill="none"/>
    <text x="368" y="318" text-anchor="middle" font-size="11" fill="#a9b4c2">SIG and GND</text>
    <rect x="30" y="20" width="160" height="70" rx="8" fill="#212936" stroke="#59616e"/>
    <text x="110" y="60" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">Mains supply</text>
    <rect x="810" y="20" width="160" height="70" rx="8" fill="#212936" stroke="#59616e"/>
    <text x="890" y="60" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">Your load</text>
    <path d="M190 36H810" stroke="#7ccf4a" stroke-width="5"/><path d="M190 36H810" stroke="#ffe14d" stroke-width="5" stroke-dasharray="10 10"/>
    <path d="M190 54H810" stroke="#4f8dea" stroke-width="5"/>
    <path d="M190 72H400V200" fill="none" stroke="#b0703c" stroke-width="5"/>
    <path d="M640 200V72H810" fill="none" stroke="#b0703c" stroke-width="5"/>
    <g font-size="12" fill="#e6ebf2">
      <text x="500" y="30" text-anchor="middle">Earth: straight to the load</text>
      <text x="500" y="49" text-anchor="middle" fill="#9cc3ff">Neutral: straight to the load</text>
      <text x="300" y="66" text-anchor="middle" fill="#e0a877">Live: to MAINS IN, through the fuse</text>
      <text x="720" y="90" text-anchor="middle" fill="#e0a877">Switched live to the load</text>
    </g>
  </svg>
  </div>
  <figcaption>Minimal wiring, schematic and not to scale. Mains colours follow the European convention: brown live, blue neutral, green-yellow earth. Only the live wire passes through the board.</figcaption>
</figure>

<ol class="xb-steps">
  <li class="xb-step">
    <h3>Switch everything off</h3>
    <p>Unplug the mains and power down the Smoothieboard. Nothing is connected to the mains-in terminal, the load terminal or the earth bond yet.</p>
  </li>
  <li class="xb-step">
    <h3>Mount the board</h3>
    <p>Fix it with four M3 screws on standoffs inside the enclosure, using the hole positions in the <a href="#mounting">mounting appendix</a>. Fit a heat sink to the triac and connect the earth bond terminal to the enclosure&rsquo;s protective earth.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the control side</h3>
    <p>Wire <b>J1 pin 3</b> to your signal stage&rsquo;s output and <b>J1 pin 1</b> to its ground. Leave pin 2 free unless you want the amber light and have a 5–12&nbsp;V supply for it.</p>
  </li>
  <li class="xb-step">
    <h3>Add the output to your configuration</h3>
    <p>Copy <a href="#configuration">example 1</a> into the configuration file on the Smoothieboard&rsquo;s SD card, then restart the board.</p>
  </li>
  <li class="xb-step">
    <h3>Test without mains</h3>
    <p>With the mains still unplugged, power the Smoothieboard and send:</p>
    <pre><code>M64.1</code></pre>
    <p class="xb-expect"><b>You should see:</b> the green light next to the control connector lights. Send <code>M65.1</code>: it goes out. The triac itself cannot be tested without mains.</p>
    <p>If the light does not follow the command, go to <a href="#troubleshooting">troubleshooting</a> before going any further.</p>
  </li>
  <li class="xb-step">
    <h3>Wire the mains and the load</h3>
    <p>Follow <a href="#loads">Wiring the load</a>, with the mains unplugged and the enclosure open.</p>
    <p class="xb-warn"><b>Mains work.</b> Never touch the terminals, the fuse or the triac while the mains is connected, even when the green light is dark.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

Smoothieware has no setting called &ldquo;solid state relay board&rdquo;. The board follows one output pin of the controller, and the Switch module or the Temperature control module can drive it. The lines go into the configuration file on the controller&rsquo;s SD card.

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
ssr1.enable            = true
ssr1.output_pin        = PB1        # header G_F (J37) pin 3, through your 4.5-6 V stage
ssr1.output_type       = digital    # plain on/off
ssr1.input_on_command  = M64
ssr1.input_off_command = M65
ssr1.subcode           = 1          # M64.1 on, M65.1 off
ssr1.startup_state     = false      # off when the board starts
ssr1.halt_set_to       = false      # off when the machine halts
```

If your file already has a `[switch]` section, add the `ssr1` lines to it instead of creating a second one. Typing `switch ssr1 on` or `switch ssr1 off` in the console does the same as the commands.

- **The command numbers are yours to choose.** `M64` and `M65` are used because Smoothieware V2 does not use them for anything else. Any free M-code works.
- **Off at power-up and on halt.** `startup_state = false` and `halt_set_to = false` ask for a LOW level. What the pin does during reset, power loss or with the cable unplugged depends on your signal stage; check it on your machine.
- **On and off only.** Keep `output_type = digital`. The triac switches at the next zero crossing of the mains, so it follows slow on/off commands but not fast pulses.

### 2. A resistive heater held at a temperature (Temperature control module) {#config-heater}

The heater needs its own temperature sensor on one of the controller&rsquo;s thermistor inputs. With `bang_bang` the firmware switches the output fully on below the target and fully off above it:

```ini
[temperature control]
chamber.enable              = true
chamber.heater_pin          = PB1         # header G_F (J37) pin 3, through your 4.5-6 V stage
chamber.thermistor          = EPCOS100K   # the type of your sensor
chamber.thermistor_pin      = ADC1_2      # a free thermistor input
chamber.designator          = C           # letter shown in temperature reports
chamber.set_m_code          = 141         # M141 S50 sets 50 degrees C
chamber.set_and_wait_m_code = 191         # M191 S50 sets it and waits
chamber.max_temp            = 80          # the firmware refuses to go higher
chamber.bang_bang           = true        # on/off regulation
chamber.hysteresis          = 2           # degrees C either side of the target
```

- **Remove the `ssr1` lines from `[switch]`** when you do this: the pin can belong to one entry only.
- **The name `chamber` and the codes `M141` and `M191` are examples.** A heater with a name of your own would otherwise answer to `M140` and `M190`, the same codes as the heated bed.
- **The firmware watches the sensor** and halts with an alarm when the reading leaves its limits. That is a help, not a safety device: a triac can fail shorted and keep the heater on. A mains heater needs a thermal cut-out that works without the controller.
- **Use on/off regulation.** Slow PWM and PID regulation are not specified for this board.

## Wiring the load {#loads}

<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="lightning-charge"></sl-icon>
  <strong>Unplug the mains before you touch any terminal.</strong> The off state of a triac is not a disconnection: a small current can still flow, and a failed triac stays on.
</sl-alert>

1. **Mains in.** Connect live to the terminal marked **L**, earth to **PE** and neutral to **N**. Live reaches the load only through the fuse and the triac.
2. **Load.** Connect the load&rsquo;s live to the terminal marked **LOAD** (the top screw), its earth to the middle screw and its neutral to the bottom screw. Earth and neutral pass straight through the board.
3. **Earth the enclosure.** Join the earth bond terminal to the enclosure&rsquo;s protective earth, and to the triac&rsquo;s heat sink if it is metal.
4. **Resistive loads only.** Inductive loads (motors, transformers) and capacitive loads must not be connected. The board has a varistor but no snubber network for them.
5. **Raise the load carefully.** The board has no load current rating. Start with a small resistive load, and measure the temperature of the triac and its heat sink before you go higher.
6. **Close the enclosure** and fit strain relief on every mains cable before you plug anything in.

What the lights tell you:

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-green"></span>Green</th><th><span class="xb-led xb-led-amber"></span>Amber</th></tr></thead>
  <tbody>
    <tr><td>Where</td><td>Next to the control connector, markers 11 and 12 of the <a href="#tour">board tour</a></td><td>To the right of the green light</td></tr>
    <tr><td>Lit means</td><td>The signal input is HIGH (a command to switch on)</td><td>The load terminal carries mains voltage relative to neutral</td></tr>
    <tr><td>Dark means</td><td>The signal input is LOW or unconnected</td><td>No mains voltage was sensed at the load terminal, or no control supply on J1 pin 2. It does not prove the terminal is safe to touch.</td></tr>
    <tr><td>Disable it</td><td>Cut the solder link beside it (marked CUT TO DISABLE LED1)</td><td>Cut the solder link beside it (marked CUT TO DISABLE LED2)</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Three things this board does not do:

- **It is not a disconnect and not a safety device.** A triac can fail shorted and keep a load running after the command to stop. Emergency stops must cut the mains independently of this board.
- **It cannot be driven by 3.3&nbsp;V directly.** The printed warning on the board reads &ldquo;SIG 4.5–6V, 3.3V not supported&rdquo;.
- **It does not dim.** It switches at zero crossings: on or off, not phase-angle control.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 250" role="img" aria-labelledby="xb-how-t">
    <title id="xb-how-t">The control signal lights the LED inside the optotriac; across the optical barrier the optotriac triggers the triac gate; the triac switches the live wire to the load.</title>
    <g font-size="13" font-weight="700" text-anchor="middle" fill="#e6ebf2">
      <rect x="20" y="85" width="170" height="80" rx="8" fill="#1f2226" stroke="#dfe4ee"/><text x="105" y="120">Signal on J1</text><text x="105" y="140" font-weight="400" fill="#a9b4c2">4.5–6 V, HIGH = on</text>
      <rect x="260" y="85" width="190" height="80" rx="8" fill="#212936" stroke="#5fb3ff"/><text x="355" y="120">Optotriac</text><text x="355" y="140" font-weight="400" fill="#a9b4c2">MOC3063TVM, zero-cross</text>
      <rect x="520" y="85" width="170" height="80" rx="8" fill="#212936" stroke="#f0b08a"/><text x="605" y="120">Triac</text><text x="605" y="140" font-weight="400" fill="#a9b4c2">BTA41-800BRG</text>
      <rect x="760" y="85" width="220" height="80" rx="8" fill="#212936" stroke="#f0b08a"/><text x="870" y="120">Switched live</text><text x="870" y="140" font-weight="400" fill="#a9b4c2">to the LOAD terminal</text>
    </g>
    <g stroke-width="3" fill="none" stroke="#a9b4c2"><path d="M190 125H260"/><path d="M450 125H520"/><path d="M690 125H760"/></g>
    <path d="M355 40V230" stroke="#59616e" stroke-width="2" stroke-dasharray="6 6"/>
    <text x="355" y="30" text-anchor="middle" font-size="12" fill="#a9b4c2">optical barrier: light only</text>
    <text x="105" y="60" text-anchor="middle" font-size="12" fill="#a9b4c2">CONTROL SIDE</text>
    <text x="620" y="60" text-anchor="middle" font-size="12" fill="#f0b08a">MAINS SIDE</text>
    <text x="605" y="205" text-anchor="middle" font-size="12" fill="#a9b4c2">fuse and thermal link in the live and trigger paths</text>
  </svg>
  </div>
  <figcaption>The path of one on/off command.</figcaption>
</figure>
{:/nomarkdown}

On the **control side**, a HIGH level on J1 pin 3 pushes current through a 330&nbsp;Ω resistor into the LED of the optotriac, and lights the green indicator. A 10&nbsp;kΩ resistor holds the input LOW when nothing drives it, a diode protects the optotriac LED against reverse voltage, and a 12&nbsp;V transient suppressor protects the input.

On the **mains side**, the optotriac triggers the gate of the triac, but only when the mains voltage is close to zero. The trigger current flows from the fused live line through the thermal link and a 360&nbsp;Ω resistor. When the thermal link opens, the triac is no longer triggered; the main current path does not pass through it. The varistor absorbs voltage spikes between live and neutral.

The amber light works the other way round. Four 27&nbsp;kΩ resistors in series carry a small current from the switched live to neutral through the input of a second optocoupler (LTV-814). Its output pulls the amber LED to the control supply on J1 pin 2.

{% include _includes/relay-board-comparison.html %}

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>When you see</th><th>It means</th><th>Do this</th></tr></thead>
  <tbody>
    <tr><td>Green light stays dark when you send <code>M64.1</code></td><td>The signal does not reach J1, or the signal stage is not driving.</td><td>Check J1 pins 1 and 3 with the mains unplugged. Check the stage&rsquo;s output with a meter: it should reach 4.5&nbsp;V or more when HIGH. Check that <code>switch</code> lists <code>ssr1</code>.</td></tr>
    <tr><td>The console rejects <code>switch ssr1 on</code>, or <code>switch</code> does not list it</td><td>The configuration was not loaded.</td><td>Check the lines are under <code>[switch]</code>, that <code>enable</code> is <code>true</code>, and restart the board.</td></tr>
    <tr><td>Green light on, but the load does not run</td><td>The fault is on the mains side, the load wiring or the thermal link.</td><td>Unplug the mains. Check the fuse, the live wire to L and the load wire to LOAD, and that the thermal link is connected.</td></tr>
    <tr><td>Amber light never lights</td><td>No control supply on J1 pin 2, the link is cut, or no mains voltage reaches the load terminal.</td><td>Check J1 pin 2 for 5–12&nbsp;V and the link marked CUT TO DISABLE LED2.</td></tr>
    <tr><td>The load runs with the green light dark</td><td>The triac may have failed shorted.</td><td>Cut the mains at its own breaker. Do not use this board again until the triac has been replaced.</td></tr>
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
    <tr><td><a href="/images/extensions/single-channel-solid-state-relay-output/single-channel-solid-state-relay-output-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/single-channel-solid-state-relay-output/single-channel-solid-state-relay-output-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/single-channel-solid-state-relay-output/single-channel-solid-state-relay-output-diagram.png">Board drawing (SVG)</a></td><td>The top view used on this page, at full resolution</td></tr>
    <tr><td><a href="/assets/downloads/extensions/single-channel-solid-state-relay-output/single-channel-ssr-cad-study.zip">KiCad source (ZIP)</a></td><td>KiCad project, PCB, schematic and local libraries.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the corner marked 0, 0 with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-ssr1-mount-t">
  <title id="xb-ssr1-mount-t">Mounting drawing of the single-channel solid-state relay board, component side: outline 100 by 77 millimetres with 4 mounting holes and 2 cable-tie holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="259.2" y="78.0" width="441.6" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M259.2 56H700.8"/><path d="M259.2 50V62"/><path d="M700.8 50V62"/><path d="M726.8 78.0V418.0"/><path d="M720.8 78.0h12"/><path d="M720.8 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">100</text>
  <text x="738.8" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">77</text>
  <circle cx="259.2" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="247.2" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M201.2 104.0h30" fill="none"/><path d="M235.2 104.0l-8 -4v8z"/><path d="M201.2 104.0v30" fill="none"/><path d="M201.2 138.0l-4 -8h8z"/></g>
  <text x="239.2" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="197.2" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="303.4" cy="95.7" r="7.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M292.3 95.7h22.1M303.4 84.6v22.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="296.3" y="122.7" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  10.00, 4.00</text>
  <circle cx="656.6" cy="95.7" r="7.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M645.6 95.7h22.1M656.6 84.6v22.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="663.7" y="122.7" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  90.00, 4.00</text>
  <circle cx="303.4" cy="360.6" r="7.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M292.3 360.6h22.1M303.4 349.5v22.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="296.3" y="343.5" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  10.00, 64.00</text>
  <circle cx="656.6" cy="360.6" r="7.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M645.6 360.6h22.1M656.6 349.5v22.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="663.7" y="343.5" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  90.00, 64.00</text>
  <circle cx="581.6" cy="91.2" r="5.5" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <circle cx="603.6" cy="91.2" r="5.5" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <text x="568.0" y="95.2" text-anchor="end" font-size="12" fill="#a9b4c2">cable tie</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 100 × 77&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>10.00</td><td>4.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>90.00</td><td>4.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>10.00</td><td>64.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>90.00</td><td>64.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>–</td><td>73.00</td><td>3.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
    <tr><td>–</td><td>78.00</td><td>3.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
  </tbody>
</table></div>

{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Every figure below is a design value, a value calculated from the design, or a value from a part number, as the last column says. A dash means the figure does not apply.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Mains input voltage</td><td>Mains in</td><td>100 V AC</td><td>—</td><td>240 V AC</td><td>Printed on the board</td></tr>
    <tr><td>Fuse</td><td>Live input</td><td>—</td><td>12.5 A</td><td>—</td><td>Fast-acting, 6.3 × 32&nbsp;mm, 500&nbsp;V; Schurter holder 0031.8002 with fuse 8020.5079</td></tr>
    <tr><td>Thermal link</td><td>Triac trigger path</td><td>—</td><td>110 °C</td><td>—</td><td>G5 family, flying leads. Case-temperature ceiling 85&nbsp;°C. In the trigger path, not the load path</td></tr>
    <tr><td>Varistor</td><td>Fused live to neutral</td><td>—</td><td>275 V</td><td>—</td><td>TMOV14RP275E, thermally protected, 14&nbsp;mm</td></tr>
    <tr><td>Signal level, on</td><td>J1 pin 3</td><td>4.5 V</td><td>—</td><td>6 V</td><td>Design requirement. 3.3&nbsp;V is not supported</td></tr>
    <tr><td>Signal current, on</td><td>J1 pin 3</td><td>—</td><td>9–11 mA</td><td>—</td><td>From the design notes, through the 330&nbsp;Ω resistor</td></tr>
    <tr><td>Green light current</td><td>J1 pin 3</td><td>—</td><td>—</td><td>4.78 mA</td><td>Upper bound at 6&nbsp;V, assuming an LED forward voltage of at least 1.7&nbsp;V</td></tr>
    <tr><td>Control supply</td><td>J1 pin 2</td><td>5 V</td><td>—</td><td>12 V</td><td>For the amber light only; not load power</td></tr>
    <tr><td>Barrier between mains and control</td><td>Board</td><td>8 mm</td><td>—</td><td>—</td><td>Marked on the board; a slot is also provided</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Component stress limits

These are limits of individual parts, beyond which the part can be damaged. They are not operating conditions; stay inside the table above.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Circuit</th><th>Pin or device stress</th><th>Absolute limit</th></tr></thead>
  <tbody>
    <tr><td>Triac and optotriac</td><td>Inductive or capacitive load transients</td><td>The board is for resistive loads only</td></tr>
    <tr><td>Triac</td><td>Failure as a short circuit</td><td>The load stays on; the fuse protects the wiring only</td></tr>
    <tr><td>Control input</td><td>Voltage on J1 pin 3</td><td>A 12&nbsp;V transient suppressor and a 10&nbsp;kΩ pull-down are fitted</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
