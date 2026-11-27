---
layout: default
title: "Gate boards"
description: "A 2-input AND logic board with a switched 5 V output: pinout, wiring and configuration."
permalink: /extensions/gate-boards
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Logic</p>
    <h1 id="gate-boards">Gate boards</h1>
    <p class="xb-lead">Combine two signals with a hardware AND gate. The output goes high only when both inputs are high, and it is a switched 5&nbsp;V line that can drive a small load or be read by the controller.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/gate-boards/gate-boards-diagram.webp" alt="Top view of the gate board: two three-contact input connectors at the top, a two-screw power terminal at the bottom left, an AND gate chip in the middle and a three-contact output connector at the bottom right.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>2 → 1</b><span>inputs to output: A AND B</span></div>
  <div class="xb-stat"><b>5 V</b><span>output level when on, from the board&rsquo;s own 5&nbsp;V supply</span></div>
  <div class="xb-stat"><b>200 mA</b><span>output current printed on the board, &ldquo;slow I/O&rdquo;</span></div>
  <div class="xb-stat"><b>250 mA</b><span>total 5&nbsp;V budget printed on the board</span></div>
  <div class="xb-stat"><b>Open = high</b><span>an unconnected input counts as HIGH</span></div>
  <div class="xb-stat"><b>48 × 40</b><span>millimetres, four M3 mounting holes</span></div>
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
</nav>
{:/nomarkdown}

<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="shield-exclamation"></sl-icon>
  <strong>Not a safety device.</strong> The board is printed &ldquo;NOT SAFETY RATED&rdquo;. Do not use it in an emergency-stop chain, an interlock or any circuit where a wrong output could hurt someone or damage a machine.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Function</td><td>One 2-input AND gate: the output is on only when input A and input B are both HIGH. The truth table is printed on the board.</td></tr>
    <tr><td>Inputs</td><td>Two, each on its own three-contact connector (signal, ground, 5&nbsp;V). Each input has a series resistor, a small filter capacitor, a clamp to the 3.3&nbsp;V supply and a protection diode to ground. An <b>unconnected input reads HIGH</b>, as printed on the board.</td></tr>
    <tr><td>Output</td><td>One three-contact connector (ground, 5&nbsp;V, output). The output is the board&rsquo;s own 5&nbsp;V, switched by a load switch. It is <b>not a 3.3&nbsp;V logic signal</b>. The board is printed &ldquo;OUT 200 mA, slow I/O&rdquo;.</td></tr>
    <tr><td>Power</td><td>5&nbsp;V on a two-screw terminal, through a reverse-polarity MOSFET and a protection circuit on the back of the board. The board is printed &ldquo;5 V / 250 mA total&rdquo;.</td></tr>
    <tr><td>Connector options</td><td>Two builds of the three connectors: the standard one, and a 2&nbsp;mm JST PH one (&ldquo;stemma&rdquo;) with the same contact order. The pinout below is the same for both.</td></tr>
    <tr><td>Indicators</td><td>Two green lights, power and output, each with a solder link to disable it. Three red lights on the back for the power-entry protection (fault, over-voltage, reverse), each with its own link.</td></tr>
    <tr><td>Size</td><td>48 &times; 40&nbsp;mm with four M3 mounting holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> and the <a href="/switch">Switch module</a>. No driver is needed.</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The electrical figures are in the [electrical specifications](#electrical) appendix; the hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side; the power-entry protection circuit is on the back, shown [further down](#how-it-works).

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/gate-boards/gate-boards-diagram.webp" alt="Top view of the gate board with eleven numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:29.7%;top:14.4%" aria-label="1: input A">1<span class="xb-pop"><b>Input A (J1)</b> — a three-contact connector marked S, G, 5V from left to right: signal, ground and 5&nbsp;V. The signal contact is the first input of the AND gate. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:65.2%;top:14.4%" aria-label="2: input B">2<span class="xb-pop"><b>Input B (J2)</b> — the same connector for the second input, marked S, G, 5V.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:29%;top:82.8%" aria-label="3: 5 V power terminal">3<span class="xb-pop"><b>5 V power terminal (J4)</b> — a two-screw terminal marked &ldquo;5V IN&rdquo;, with a + beside the left screw. The board takes its 5&nbsp;V from here, not from the connectors.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:49.4%;top:44.6%" aria-label="4: AND gate">4<span class="xb-pop"><b>AND gate</b> — the SN74LVC1G97 chip, set up as a 2-input AND gate. Its output goes HIGH only when both inputs are HIGH.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:68.8%;top:61.2%" aria-label="5: load switch">5<span class="xb-pop"><b>Output switch</b> — a TPS22919 load switch. The gate chip turns it on; it then connects the board&rsquo;s 5&nbsp;V to the output contact. <i>The output is therefore 5&nbsp;V, not 3.3&nbsp;V.</i></span></a>
      <a class="xb-mk" href="#tour-6" style="left:49.4%;top:62.2%" aria-label="6: 3.3 V regulator">6<span class="xb-pop"><b>3.3 V regulator</b> — an AP2112K-3.3 that makes the 3.3&nbsp;V the gate chip runs on.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:37.6%;top:62.2%" aria-label="7: reverse-polarity transistor">7<span class="xb-pop"><b>Reverse-polarity transistor</b> — an AO3401A MOSFET in the 5&nbsp;V supply. It blocks current if the 5&nbsp;V terminal is connected the wrong way round.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:71%;top:87%" aria-label="8: output">8<span class="xb-pop"><b>Output (J3)</b> — a three-contact connector marked G, 5V, S from left to right: ground, 5&nbsp;V and output. <i>The order differs from the inputs.</i></span></a>
      <a class="xb-mk xb-pr" href="#tour-9" style="left:79%;top:65.8%" aria-label="9: output pull-down">9<span class="xb-pop"><b>Output pull-down</b> — a 10&nbsp;k&Omega; resistor that pulls the output to ground when the output switch is off.</span></a>
      <a class="xb-mk xb-pb" href="#tour-10" style="left:49.2%;top:16.8%" aria-label="10: power light">10<span class="xb-pop"><b>Green power light</b> — lit while the board has 5&nbsp;V. A solder link on the back, marked &ldquo;CUT TO DISABLE D6&rdquo;, disables it.</span></a>
      <a class="xb-mk xb-pr" href="#tour-11" style="left:76.8%;top:73%" aria-label="11: output light">11<span class="xb-pop"><b>Green output light</b> — lit while the output switch is on. A solder link on the back, marked &ldquo;CUT TO DISABLE D5&rdquo;, disables it.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Input A (J1)</b> — a three-contact connector marked S, G, 5V from left to right: signal, ground and 5&nbsp;V. The signal contact is the first input of the AND gate. <i>See the pinout.</i></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Input B (J2)</b> — the same connector for the second input, marked S, G, 5V.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>5 V power terminal (J4)</b> — a two-screw terminal marked &ldquo;5V IN&rdquo;, with a + beside the left screw. The board takes its 5&nbsp;V from here, not from the connectors.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>AND gate</b> — the SN74LVC1G97 chip, set up as a 2-input AND gate. Its output goes HIGH only when both inputs are HIGH.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Output switch</b> — a TPS22919 load switch. The gate chip turns it on; it then connects the board&rsquo;s 5&nbsp;V to the output contact. <i>The output is therefore 5&nbsp;V, not 3.3&nbsp;V.</i></div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>3.3 V regulator</b> — an AP2112K-3.3 that makes the 3.3&nbsp;V the gate chip runs on.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Reverse-polarity transistor</b> — an AO3401A MOSFET in the 5&nbsp;V supply. It blocks current if the 5&nbsp;V terminal is connected the wrong way round.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Output (J3)</b> — a three-contact connector marked G, 5V, S from left to right: ground, 5&nbsp;V and output. <i>The order differs from the inputs.</i></div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Output pull-down</b> — a 10&nbsp;k&Omega; resistor that pulls the output to ground when the output switch is off.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Green power light</b> — lit while the board has 5&nbsp;V. A solder link on the back, marked &ldquo;CUT TO DISABLE D6&rdquo;, disables it.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Green output light</b> — lit while the output switch is on. A solder link on the back, marked &ldquo;CUT TO DISABLE D5&rdquo;, disables it.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### Input connectors: J1 (input A) and J2 (input B)

Three contacts, numbered from the left when the board is seen from the component side as in the tour. The board prints &ldquo;S G 5V&rdquo; above each.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Marking</th><th>Function</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>S</td><td><span class="xb-pill xb-p-sig">Signal</span> the input of the gate. Floating counts as HIGH.</td></tr>
    <tr><td>2</td><td>G</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>3</td><td>5V</td><td><span class="xb-pill xb-p-5v">5 V</span> the board&rsquo;s 5&nbsp;V, available to power a sensor or the sending device</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Output connector: J3

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Marking</th><th>Function</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>G</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>2</td><td>5V</td><td><span class="xb-pill xb-p-5v">5 V</span> the board&rsquo;s 5&nbsp;V</td></tr>
    <tr><td>3</td><td>S</td><td><span class="xb-pill xb-p-sig">Output</span> 5&nbsp;V when A and B are both HIGH, otherwise pulled to ground</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>The contact order differs between the inputs and the output.</strong> On an input, contact 1 is the signal and contact 3 is 5&nbsp;V. On the output, contact 1 is ground and contact 3 is the signal. A straight three-wire cable from an output to an input crosses power and signal. Wire each contact by its marking and check with a meter before you power up.
</sl-alert>

### 5 V power terminal: J4

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Screw</th><th>Marking</th><th>Function</th></tr></thead>
  <tbody>
    <tr><td>Left</td><td>+</td><td><span class="xb-pill xb-p-5v">5 V</span> input</td></tr>
    <tr><td>Right</td><td>—</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The board is powered only from this terminal: the 5&nbsp;V contact of an input connector does not power the board. Do not apply a second 5&nbsp;V source to an input or output connector.

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>A regulated 5 V supply</b><span>Able to give at least what the board and its load use. The board is printed 250&nbsp;mA total.</span></div>
  <div class="xb-card"><b>Mating connectors</b><span>For the standard build, plugs for the three-contact connectors; for the stemma build, 2&nbsp;mm JST PH plugs.</span></div>
  <div class="xb-card"><b>Two signal sources</b><span>For example two outputs of the controller, or two sensors with 3.3&nbsp;V or 5&nbsp;V signals.</span></div>
  <div class="xb-card"><b>A receiver for the output</b><span>A small 5&nbsp;V load, or an input that tolerates 5&nbsp;V. Check a controller input&rsquo;s rating first.</span></div>
  <div class="xb-card"><b>A multimeter</b><span>To check the contact order and the output level.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

This bench test needs no controller: you drive the inputs with plain wires.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 860" role="img" aria-labelledby="xb-gate-boards-wire"><title id="xb-gate-boards-wire">Wiring: J4 contact Left to 5 V; J4 contact Right to GND; J1 contact 1 to signal, to contact 2 for the test; J1 contact 2 to GND; J3 contact 3 to output, red probe; J3 contact 1 to GND.</title><image href="/images/extensions/gate-boards/gate-boards-diagram.webp" x="363" y="14" width="275" height="230"/><circle cx="442" cy="204" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="423" y="223" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="442" y="237" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J4</text><circle cx="444" cy="47" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="425" y="66" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="444" y="80" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J1</text><circle cx="558" cy="214" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="539" y="233" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="558" y="247" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J3</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J4 on this board</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">5 V supply</text><rect x="700" y="304" width="270" height="150" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><rect x="810" y="334" width="140" height="90" rx="8" fill="#d3d3d3" stroke="#3f3f3f" stroke-width="1.5"/><rect x="824" y="345" width="112" height="34" rx="3" fill="#141414" stroke="#141414" stroke-width="1.5"/><text x="880" y="369" text-anchor="middle" font-size="18" fill="#5df07a">00.0 V</text><circle cx="840" cy="401" r="11" fill="#303030" stroke="#0d0f12" stroke-width="1.5"/><circle cx="894" cy="401" r="8" fill="#c0262c" stroke="#0d0f12" stroke-width="1.5"/><circle cx="924" cy="401" r="8" fill="#262626" stroke="#0d0f12" stroke-width="1.5"/><rect x="30" y="304" width="200" height="150" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 364.0H700" fill="none" stroke="#e8820c" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="364" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" fill="#eaeaea">  Left</text><text x="712" y="369" text-anchor="start" font-size="13" fill="#eaeaea">5 V</text><rect x="340" y="353" width="220" height="22" rx="11" fill="#e8820c" stroke="#e8820c" stroke-width="1.5"/><text x="450" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#111">Left: 5 V</text><path d="M230 394.0H700" fill="none" stroke="#939393" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="394" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" fill="#eaeaea">  Right</text><text x="712" y="399" text-anchor="start" font-size="13" fill="#eaeaea">GND</text><rect x="340" y="383" width="220" height="22" rx="11" fill="#939393" stroke="#939393" stroke-width="1.5"/><text x="450" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#111">Right: GND</text><text x="130" y="486" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J1 on this board</text><text x="870" y="486" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Test wire, input A</text><rect x="700" y="498" width="270" height="150" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><rect x="870" y="539" width="60" height="68" rx="5" fill="#262626" stroke="#a1a1a1" stroke-width="1.5"/><path d="M810 561.0H870M810 573.0H870M810 585.0H870" fill="none" stroke="#939393" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/><circle cx="888" cy="561" r="3.5" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="888" cy="585" r="3.5" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="900" cy="561" r="3.5" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="900" cy="585" r="3.5" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="912" cy="561" r="3.5" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="912" cy="585" r="3.5" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><rect x="30" y="498" width="200" height="150" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 558.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="558" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="558" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="563" text-anchor="end" font-size="14" fill="#eaeaea">  1</text><text x="712" y="563" text-anchor="start" font-size="13" fill="#eaeaea">signal</text><rect x="340" y="547" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="563" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1: signal</text><path d="M230 588.0H700" fill="none" stroke="#939393" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="588" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="588" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><text x="216" y="593" text-anchor="end" font-size="14" fill="#eaeaea">  2</text><text x="712" y="593" text-anchor="start" font-size="13" fill="#eaeaea">GND</text><rect x="340" y="577" width="220" height="22" rx="11" fill="#939393" stroke="#939393" stroke-width="1.5"/><text x="450" y="593" text-anchor="middle" font-size="13" font-weight="700" fill="#111">2: GND</text><text x="130" y="680" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J3 on this board</text><text x="870" y="680" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Meter on the output</text><rect x="700" y="692" width="270" height="150" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><rect x="835" y="707" width="90" height="120" rx="8" fill="#e5b41f" stroke="#6e560a" stroke-width="1.5"/><rect x="846" y="719" width="68" height="34" rx="3" fill="#b9c8ad" stroke="#40463c" stroke-width="1.5"/><text x="880" y="743" text-anchor="middle" font-size="16" font-weight="700" fill="#14180f">V DC</text><circle cx="880" cy="777" r="17" fill="#303030" stroke="#0d0f12" stroke-width="1.5"/><path d="M880 777.0V763.0" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/><circle cx="862" cy="809" r="7" fill="#c0262c" stroke="#0d0f12" stroke-width="1.5"/><circle cx="898" cy="809" r="7" fill="#262626" stroke="#0d0f12" stroke-width="1.5"/><rect x="30" y="692" width="200" height="150" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 752.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="752" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="752" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="757" text-anchor="end" font-size="14" fill="#eaeaea">S  3</text><text x="712" y="757" text-anchor="start" font-size="13" fill="#eaeaea">output, red probe</text><rect x="340" y="741" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="757" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">3: output, red probe</text><path d="M230 782.0H700" fill="none" stroke="#939393" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="782" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="782" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><text x="216" y="787" text-anchor="end" font-size="14" fill="#eaeaea">  1</text><text x="712" y="787" text-anchor="start" font-size="13" fill="#eaeaea">GND</text><rect x="340" y="771" width="220" height="22" rx="11" fill="#939393" stroke="#939393" stroke-width="1.5"/><text x="450" y="787" text-anchor="middle" font-size="13" font-weight="700" fill="#111">1: GND</text></svg>
  </div>
  <figcaption>Bench test wiring, with no controller. Change connections with the supply off. Equipment is drawn as a typical unit, not a specific model.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Mount the board</h3>
    <p>Fix it with four M3 screws on standoffs, using the hole positions in the <a href="#mounting">mounting appendix</a>.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the power</h3>
    <p>With the supply off, wire 5&nbsp;V to the <b>left</b> screw of the terminal marked &ldquo;5V IN&rdquo; (the one with the +) and ground to the right screw. Then switch the supply on.</p>
    <p class="xb-expect"><b>You should see:</b> the green power light lights. If a red light on the back lights instead, go to <a href="#troubleshooting">troubleshooting</a>.</p>
  </li>
  <li class="xb-step">
    <h3>Check the output with open inputs</h3>
    <p>Leave both input connectors empty. Measure the voltage between contact 1 (G) and contact 3 (S) of the output connector.</p>
    <p class="xb-expect"><b>You should see:</b> about 5&nbsp;V, and the green output light on. Both inputs are open, and an open input counts as HIGH.</p>
  </li>
  <li class="xb-step">
    <h3>Pull one input low</h3>
    <p>Connect the signal contact of input A (contact 1) to its ground contact (contact 2).</p>
    <p class="xb-expect"><b>You should see:</b> the output falls to about 0&nbsp;V and the output light goes out. Do the same with input B alone: same result. Only with both inputs open or HIGH is the output on.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the real signals</h3>
    <p>Wire your two signal sources to the signal and ground contacts of the inputs and read the output with the <a href="#configuration">configuration</a> below.</p>
  </li>
</ol>
{:/nomarkdown}

The truth table, printed on the board:

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>A</th><th>B</th><th>Output</th></tr></thead>
  <tbody>
    <tr><td>0</td><td>0</td><td>0</td></tr>
    <tr><td>0</td><td>1</td><td>0</td></tr>
    <tr><td>1</td><td>0</td><td>0</td></tr>
    <tr><td>1</td><td>1</td><td>1 (5&nbsp;V)</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Configuration {#configuration}

Smoothieware has no setting called &ldquo;gate board&rdquo;: the board is plain logic. The controller can drive its inputs, and it can read the output as an ordinary input pin. The lines go into the configuration file on the controller&rsquo;s SD card.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Test the AND logic by driving both inputs from the controller</td><td><a href="/switch">Switch</a>, digital outputs</td><td><a href="#config-drive">1. Drive the inputs</a></td></tr>
    <tr><td>Run a command when the gate output changes</td><td><a href="/switch">Switch</a>, with an input pin</td><td><a href="#config-read">2. Read the output</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### 1. Drive both inputs (Switch module) {#config-drive}

Two outputs of the controller&rsquo;s header G_F (J37) feed the two inputs: pin 3 (`PB1`) goes to input A contact 1, and pin 4 (`PJ4`) goes to input B contact 1. Join a ground pin (pin 10) to the ground contact of both input connectors. Do not connect the 5&nbsp;V contacts of the inputs to the controller, and do not connect the output to any controller pin in this test; read it with a meter.

```ini
[switch]
gate_a.enable            = true
gate_a.output_pin        = PB1        # header G_F pin 3, input A
gate_a.output_type       = digital
gate_a.input_on_command  = M64
gate_a.input_off_command = M65
gate_a.subcode           = 1          # M64.1 high, M65.1 low
gate_a.startup_state     = false
gate_a.halt_set_to       = false

gate_b.enable            = true
gate_b.output_pin        = PJ4        # header G_F pin 4, input B
gate_b.output_type       = digital
gate_b.input_on_command  = M66
gate_b.input_off_command = M67
gate_b.subcode           = 1          # M66.1 high, M67.1 low
gate_b.startup_state     = false
gate_b.halt_set_to       = false
```

If your file already has a `[switch]` section, add the lines to it. The command numbers are yours to choose; any free M-codes work. Then send:

1. `M65.1` and `M67.1`: both low. The output reads about 0&nbsp;V.
2. `M64.1`: A high, B low. Output 0&nbsp;V.
3. `M65.1` then `M66.1`: A low, B high. Output 0&nbsp;V.
4. `M64.1`: both high. Output about 5&nbsp;V, and the green output light is on.

The board holds nothing at start-up: with the inputs not driven it reads them as HIGH. Check what your controller pins do during reset and boot.

### 2. Read the output (Switch module with an input pin) {#config-read}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Check the input level first.</strong> The output is 5&nbsp;V. Do not assume that a controller input accepts 5&nbsp;V. Read the input&rsquo;s rating in the <a href="/smoothieboard-v2-prime">controller&rsquo;s documentation</a>, and if it is not 5&nbsp;V tolerant, bring the level down with a resistor divider you build yourself. Do not connect the output to a controller pin until you have done this.
</sl-alert>

With a level you have checked, the Switch module can run a command when the pin changes. The pin name below is an example: use any free input pin you have checked.

```ini
[switch]
gate.enable             = true
gate.input_pin          = PJ3        # example pin: use a free input pin you have checked
gate.input_pin_behavior = momentary  # follow the output
gate.output_on_command  = M600       # output high: pause
gate.output_off_command = M601       # output low again: resume
```

The board is not a safety circuit, so do not make a pause or a stop the only protection against a hazard.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 250" role="img" aria-labelledby="xb-how-t">
    <title id="xb-how-t">Inputs A and B pass through a series resistor, a filter and clamps into the AND gate; the gate output enables the load switch, which connects 5 volts to the output connector.</title>
    <g font-size="13" font-weight="700" text-anchor="middle" fill="#eaeaea">
      <rect x="20" y="40" width="170" height="70" rx="8" fill="#1f2226" stroke="#e4e4e4"/><text x="105" y="70">Input A</text><text x="105" y="90" font-weight="400" fill="#b3b3b3">J1 signal</text>
      <rect x="20" y="140" width="170" height="70" rx="8" fill="#1f2226" stroke="#e4e4e4"/><text x="105" y="170">Input B</text><text x="105" y="190" font-weight="400" fill="#b3b3b3">J2 signal</text>
      <rect x="260" y="90" width="190" height="80" rx="8" fill="#292929" stroke="#5fb3ff"/><text x="355" y="125">AND gate</text><text x="355" y="145" font-weight="400" fill="#b3b3b3">SN74LVC1G97, 3.3 V</text>
      <rect x="520" y="90" width="190" height="80" rx="8" fill="#292929" stroke="#f0b08a"/><text x="615" y="125">Load switch</text><text x="615" y="145" font-weight="400" fill="#b3b3b3">TPS22919</text>
      <rect x="780" y="90" width="200" height="80" rx="8" fill="#292929" stroke="#f0b08a"/><text x="880" y="125">Output J3</text><text x="880" y="145" font-weight="400" fill="#b3b3b3">5 V when on</text>
    </g>
    <g stroke-width="3" fill="none" stroke="#b3b3b3"><path d="M190 75H225V115H260"/><path d="M190 175H225V145H260"/><path d="M450 130H520"/><path d="M710 130H780"/></g>
    <text x="225" y="30" text-anchor="middle" font-size="12" fill="#b3b3b3">series resistor, filter and clamps on each input</text>
  </svg>
  </div>
  <figcaption>The path of the two input signals to the output.</figcaption>
</figure>
{:/nomarkdown}

Each input goes through a 4.7&nbsp;k&Omega; series resistor and a 10&nbsp;nF filter capacitor to the gate chip. A 10&nbsp;k&Omega; resistor and a diode to the 3.3&nbsp;V supply pull an unconnected input HIGH and clamp it, and a protection diode to ground absorbs spikes. The gate chip, an SN74LVC1G97 set up as an AND gate, runs on 3.3&nbsp;V from the AP2112K regulator.

The gate output does not leave the board directly. It switches on a TPS22919 load switch, which connects the board&rsquo;s own 5&nbsp;V to the output contact; a 10&nbsp;k&Omega; resistor pulls the output to ground when the switch is off. That is why the output is 5&nbsp;V and why it is slow and current limited: the board prints &ldquo;OUT 200 mA slow I/O&rdquo;.

The back of the board holds the power-entry protection: a controller chip with a supply monitor, a protection MOSFET, and three red lights (fault, over-voltage and reverse), each with a solder link to turn it off.

What the lights tell you:

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-green"></span>Green power</th><th><span class="xb-led xb-led-green"></span>Green output</th><th><span class="xb-led xb-led-red"></span>Red, on the back (3)</th></tr></thead>
  <tbody>
    <tr><td>Where</td><td>Top, marker 10 of the <a href="#tour">board tour</a></td><td>Bottom right, marker 11</td><td>Back of the board, marked FAULT, OV and REVERSE</td></tr>
    <tr><td>Lit means</td><td>The board has 5&nbsp;V</td><td>The output switch is on: both inputs are HIGH</td><td>The power-entry protection reports a fault, over-voltage or reversed supply, one light each</td></tr>
    <tr><td>Dark means</td><td>No 5&nbsp;V, or the light is disabled</td><td>The output is off, or the light is disabled</td><td>No fault reported, or the light is disabled</td></tr>
    <tr><td>Disable it</td><td>Cut the link marked &ldquo;CUT TO DISABLE D6&rdquo;</td><td>Cut the link marked &ldquo;CUT TO DISABLE D5&rdquo;</td><td>Cut the link marked &ldquo;CUT FAULT LED&rdquo;, &ldquo;CUT OV LED&rdquo; or &ldquo;CUT REVERSE LED&rdquo;</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>When you see</th><th>It means</th><th>Do this</th></tr></thead>
  <tbody>
    <tr><td>No light at all when you power up</td><td>5&nbsp;V is missing at the terminal, or reversed.</td><td>Switch off. Check the + is on the left screw and the supply gives 5&nbsp;V. A reversed supply is blocked by the board, but leave it disconnected until you have checked.</td></tr>
    <tr><td>A red light on the back is lit</td><td>The power-entry protection has detected a fault, over-voltage or reversed supply, depending on the light.</td><td>Switch off, correct the supply, and switch on again.</td></tr>
    <tr><td>Output is always on</td><td>Both inputs read HIGH, possibly because they are not connected.</td><td>An open input counts as HIGH. Connect the inputs, or pull the one you want low to ground.</td></tr>
    <tr><td>Output never comes on</td><td>One input is held low, or the signals are not reaching the board.</td><td>Measure the signal contact of each input against ground. Check the contact order: it differs from the output&rsquo;s.</td></tr>
    <tr><td>The output has no 5&nbsp;V or sags under load</td><td>The load takes more than the output is printed for, or the supply is too small.</td><td>Disconnect the load and measure again. The printed limits are 200&nbsp;mA on the output and 250&nbsp;mA total.</td></tr>
    <tr><td>Controller sees the wrong level, or is damaged</td><td>The 5&nbsp;V output was connected to a pin that does not tolerate it.</td><td>Stop. Check the pin&rsquo;s rating before you reconnect.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/). Include which connector build you have, the text printed on your board and what you measured.

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/gate-boards/gate-boards-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/gate-boards/gate-boards-bom-standard.csv">Parts list, standard connectors (CSV)</a></td><td>Every component with its value, footprint and position</td></tr>
    <tr><td><a href="/images/extensions/gate-boards/gate-boards-bom-stemma.csv">Parts list, 2 mm JST PH connectors (CSV)</a></td><td>The same, with the stemma connector build</td></tr>
    <tr><td><a href="/images/extensions/gate-boards/gate-boards-diagram.webp">Board drawing (WebP)</a></td><td>The top view used on this page, at full resolution</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the corner marked 0, 0 with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-gate-mount-t">
  <title id="xb-gate-mount-t">Mounting drawing of the gate board, component side: outline 48 by 40 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="276.0" y="78.0" width="408.0" height="340.0" rx="8.5" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M276.0 56H684.0"/><path d="M276.0 50V62"/><path d="M684.0 50V62"/><path d="M710.0 78.0V418.0"/><path d="M704.0 78.0h12"/><path d="M704.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">48</text>
  <text x="722.0" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">40</text>
  <circle cx="276.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="264.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M218.0 104.0h30" fill="none"/><path d="M252.0 104.0l-8 -4v8z"/><path d="M218.0 104.0v30" fill="none"/><path d="M218.0 138.0l-4 -8h8z"/></g>
  <text x="256.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="214.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="310.0" cy="163.0" r="13.6" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M292.4 163.0h35.2M310.0 145.4v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="296.4" y="196.6" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  4.00, 10.00</text>
  <circle cx="650.0" cy="163.0" r="13.6" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M632.4 163.0h35.2M650.0 145.4v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="663.6" y="196.6" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  44.00, 10.00</text>
  <circle cx="310.0" cy="333.0" r="13.6" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M292.4 333.0h35.2M310.0 315.4v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="296.4" y="309.4" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">3</tspan>  4.00, 30.00</text>
  <circle cx="650.0" cy="333.0" r="13.6" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M632.4 333.0h35.2M650.0 315.4v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="663.6" y="309.4" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">4</tspan>  44.00, 30.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 48 × 40&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>4.00</td><td>10.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>44.00</td><td>10.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>4.00</td><td>30.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>44.00</td><td>30.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>

{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

A dash means that no value is given or the figure does not apply.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Conditions</th></tr></thead>
  <tbody>
    <tr><td>Supply voltage</td><td>J4</td><td>—</td><td>5 V</td><td>—</td><td>The board is a 5&nbsp;V board</td></tr>
    <tr><td>Total supply current</td><td>J4</td><td>—</td><td>—</td><td>250 mA</td><td>Printed on the board (&ldquo;5V / 250mA total&rdquo;)</td></tr>
    <tr><td>Output current</td><td>J3 contact 3</td><td>—</td><td>—</td><td>200 mA</td><td>Printed on the board (&ldquo;OUT 200mA, slow I/O&rdquo;)</td></tr>
    <tr><td>Output level, on</td><td>J3 contact 3</td><td>—</td><td>5 V</td><td>—</td><td>The board&rsquo;s 5&nbsp;V through the load switch</td></tr>
    <tr><td>Output level, off</td><td>J3 contact 3</td><td>—</td><td>0 V</td><td>—</td><td>Pulled down by a 10&nbsp;k&Omega; resistor</td></tr>
    <tr><td>Unconnected input</td><td>J1, J2 contact 1</td><td>—</td><td>HIGH</td><td>—</td><td>Printed on the board (&ldquo;open input = high&rdquo;)</td></tr>
    <tr><td>Logic supply</td><td>Gate chip</td><td>—</td><td>3.3 V</td><td>—</td><td>AP2112K-3.3 regulator</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
