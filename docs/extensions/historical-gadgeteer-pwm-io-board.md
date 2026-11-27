---
layout: default
title: "Four-PWM/two-input/probe interface"
description: "Four MOSFET PWM outputs, two switch inputs and a comparator probe input: pinout and limits."
permalink: /extensions/historical-gadgeteer-pwm-io-board
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Interface</p>
    <h1 id="historical-gadgeteer-pwm-io-board">Four-PWM/two-input/probe interface</h1>
    <p class="xb-lead">Four MOSFET-buffered PWM outputs, two filtered switch inputs and a comparator probe input on one header.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/historical-gadgeteer-pwm-io-board/historical-gadgeteer-pwm-io-board-diagram.png" alt="Top view of the Four-PWM/two-input/probe interface board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>4</b><span>PWM outputs</span></div>
  <div class="xb-stat"><b>2</b><span>switch inputs</span></div>
  <div class="xb-stat"><b>1</b><span>probe input</span></div>
  <div class="xb-stat"><b>2N7002</b><span>output MOSFETs</span></div>
  <div class="xb-stat"><b>LMV331</b><span>comparator</span></div>
  <div class="xb-stat"><b>40 × 50 mm</b><span>board size</span></div>
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
  <a href="#mounting">Mounting dimensions</a>
  <a href="#electrical">Electrical specifications</a>
</nav>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <b>The outputs invert and the jumpers decide the voltages.</b> A high request pulls the output low. JP2 feeds host 5 V to the output supply and must be cut before you connect another supply. Check every jumper before powering. This is a design by Chris Cecil, not a current Smoothieware board.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>PWM, switch and probe interface</td></tr>
    <tr><td>Outputs</td><td>J6–J9: signal, ground, selected supply</td></tr>
    <tr><td>Switch inputs</td><td>J3, J4</td></tr>
    <tr><td>Probe input</td><td>J5</td></tr>
    <tr><td>External output supply</td><td>J2 (cut JP2 first)</td></tr>
    <tr><td>Size</td><td>40 × 50 mm</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/historical-gadgeteer-pwm-io-board/historical-gadgeteer-pwm-io-board-diagram.png" alt="Annotated top view of the Four-PWM/two-input/probe interface board">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:49.5%;top:35.0%" aria-label="1: Host header J1">1<span class="xb-pop"><b>Host header J1</b> — All logic signals.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-2" style="left:88.7%;top:27.9%" aria-label="2: Output 1">2<span class="xb-pop"><b>Output 1</b> — J7–J9 follow below.</span></a>
      <a class="xb-mk xb-pb" href="#tour-3" style="left:73.8%;top:26.9%" aria-label="3: Output MOSFETs">3<span class="xb-pop"><b>Output MOSFETs</b> — One per output.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-4" style="left:10.0%;top:20.0%" aria-label="4: External supply">4<span class="xb-pop"><b>External supply</b> — For the outputs.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-5" style="left:10.0%;top:33.0%" aria-label="5: Switch input 1">5<span class="xb-pop"><b>Switch input 1</b> — J4 is the second.</span></a>
      <a class="xb-mk xb-pl" href="#tour-6" style="left:10.0%;top:68.9%" aria-label="6: Probe input">6<span class="xb-pop"><b>Probe input</b> — Three-contact connector.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:32.3%;top:70.6%" aria-label="7: LMV331 comparator">7<span class="xb-pop"><b>LMV331 comparator</b> — Conditions the probe.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:73.8%;top:81.0%" aria-label="8: Transistor Q1">8<span class="xb-pop"><b>Transistor Q1</b> — Transistor Q1, marked <code>2N7002</code> in the board file. Connects to <code>PWM4</code>, <code>GND</code>.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host header J1</b> — All logic signals.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Output 1</b> — J7–J9 follow below.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Output MOSFETs</b> — One per output.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>External supply</b> — For the outputs.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Switch input 1</b> — J4 is the second.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Probe input</b> — Three-contact connector.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>LMV331 comparator</b> — Conditions the probe.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Transistor Q1</b> — Transistor Q1, marked <code>2N7002</code> in the board file. Connects to <code>PWM4</code>, <code>GND</code>.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

<span id="connect-and-try-it"></span>

### Host header J1

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+3.3V</code></td></tr>
    <tr><td>2</td><td><code>+5V</code></td></tr>
    <tr><td>3</td><td><code>GPIO1</code></td></tr>
    <tr><td>4</td><td><code>GPIO2</code></td></tr>
    <tr><td>5</td><td><code>Comparator</code></td></tr>
    <tr><td>6</td><td><code>PWM1</code></td></tr>
    <tr><td>7</td><td><code>PWM2</code></td></tr>
    <tr><td>8</td><td><code>PWM3</code></td></tr>
    <tr><td>9</td><td><code>PWM4</code></td></tr>
    <tr><td>10</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### External supply J2

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J2 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>VS</code></td></tr>
    <tr><td>2</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

J6–J9: contact 1 output (PWM1–PWM4), contact 2 ground, contact 3 selected supply.

J3 and J4: contact 2 ground; contacts 1 and 3 are the switch supply and signal. J5: probe connector, same layout.

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>PWM board</b><span>Built from the design files</span></div>
  <div class="xb-card"><b>Meter</b><span>To check jumpers and levels</span></div>
  <div class="xb-card"><b>Leads</b><span>Verified contact by contact</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

The minimum wiring first, then the order to do it in. Facts about each contact are in the [pinout](#pinout).

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 472" role="img" aria-labelledby="xb-historical-gadgeteer-pwm-io-board-wire"><title id="xb-historical-gadgeteer-pwm-io-board-wire">Wiring: J2 contact 1 to VS; J2 contact 2 to GND.</title><image href="/images/extensions/historical-gadgeteer-pwm-io-board/historical-gadgeteer-pwm-io-board-diagram.png" x="406" y="14" width="189" height="230"/><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J2 on this board</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">External supply</text><rect x="700" y="304" width="270" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><rect x="810" y="334" width="140" height="90" rx="8" fill="#cfd3d9" stroke="#3a3f46" stroke-width="1.5"/><rect x="824" y="345" width="112" height="34" rx="3" fill="#101418" stroke="#101418" stroke-width="1.5"/><text x="880" y="369" text-anchor="middle" font-size="18" fill="#5df07a">00.0 V</text><circle cx="840" cy="401" r="11" fill="#2c3036" stroke="#0d0f12" stroke-width="1.5"/><circle cx="894" cy="401" r="8" fill="#c0262c" stroke="#0d0f12" stroke-width="1.5"/><circle cx="924" cy="401" r="8" fill="#23262b" stroke="#0d0f12" stroke-width="1.5"/><rect x="30" y="304" width="200" height="150" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 364.0H700" fill="none" stroke="#f2d024" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#f2d024" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="364" r="5" fill="#f2d024" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" fill="#e6ebf2">VS  1</text><text x="712" y="369" text-anchor="start" font-size="13" fill="#e6ebf2">VS</text><rect x="340" y="353" width="220" height="22" rx="11" fill="#f2d024" stroke="#f2d024" stroke-width="1.5"/><text x="450" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#111">1: VS</text><path d="M230 394.0H700" fill="none" stroke="#8b949e" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="394" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" fill="#e6ebf2">  2</text><text x="712" y="399" text-anchor="start" font-size="13" fill="#e6ebf2">GND</text><rect x="340" y="383" width="220" height="22" rx="11" fill="#8b949e" stroke="#8b949e" stroke-width="1.5"/><text x="450" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#111">2: GND</text></svg>
  </div>
  <figcaption>Wiring drawn from the original design files. Make connections with all power off. Equipment is drawn as a typical unit, not a specific model.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Check the contacts</h3>
    <p>With all power off, find contact 1 on each connector and check every wire against the <a href="#pinout">pinout</a>.</p>
  </li>
  <li class="xb-step">
    <h3>Set up and check</h3>
    <p>Check the supply-selector jumpers and logic levels with a meter.</p>
  </li>
  <li class="xb-step">
    <h3>Configure and power up</h3>
    <p>Apply the settings under <a href="#configuration">Configuration</a>, then power up.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

<span id="smoothieware-use"></span>

A contact on switch input 1 (PB1) and a digital test of one output on PG0. See [switch](/switch) and [endstops](/endstops). Syntax checked against firmware commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`.

```ini
[endstops]
pwmboard_contact_diagnostic.enable = true
pwmboard_contact_diagnostic.pin = PB1-
pwmboard_contact_diagnostic.axis = X
pwmboard_contact_diagnostic.homing_direction = none
pwmboard_contact_diagnostic.limit_enable = false

[switch]
pwmboard_sink_diagnostic.enable = true
pwmboard_sink_diagnostic.input_on_command = M42
pwmboard_sink_diagnostic.input_off_command = M43
pwmboard_sink_diagnostic.subcode = 18
pwmboard_sink_diagnostic.output_pin = PG0
pwmboard_sink_diagnostic.output_type = digital
pwmboard_sink_diagnostic.startup_state = false
pwmboard_sink_diagnostic.halt_set_to = false
pwmboard_sink_diagnostic.ignore_on_halt = false
```

## How it works {#how-it-works}

Each output is a 2N7002 that connects its output to ground when the PWM signal is high; a selectable pull-up raises it again. Without the pull-up the output is open drain. The probe input is compared by an LMV331 with a clamp network on J5. See the [LMV331 datasheet](https://www.ti.com/lit/ds/symlink/lmv331.pdf).

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 270" role="img" aria-labelledby="xb-historical-gadgeteer-pwm-io-board-path"><title id="xb-historical-gadgeteer-pwm-io-board-path">PWM signal then 2N7002, pulls output to ground then Output, with selectable pull-up. Probe input then LMV331 comparator, clamp network on J5 then Controller.</title><rect x="46" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="186" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">PWM signal</text><text x="186" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="360" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">2N7002</text><text x="500" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2">pulls output to ground</text><path d="M330.0 70H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 63L358 70L349 77Z" fill="#5fb3ff"/><rect x="674" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="814" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Output, with selectable pull-up</text><text x="814" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M644.0 70H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 63L672 70L663 77Z" fill="#5fb3ff"/><rect x="46" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="186" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Probe input</text><text x="186" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="360" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="500" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">LMV331 comparator</text><text x="500" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2">clamp network on J5</text><path d="M330.0 198H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 191L358 198L349 205Z" fill="#5fb3ff"/><rect x="674" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="814" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Controller</text><text x="814" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M644.0 198H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 191L672 198L663 205Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board, one path per row.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Nothing responds</td><td>With power off, check continuity along each lead and board path against the pinout tables. Confirm which end of the connector is contact 1.</td></tr>
    <tr><td>Output is inverted</td><td>Expected: invert the pin in the configuration if your load needs it.</td></tr>
    <tr><td>Output never rises</td><td>Its pull-up jumper is open or the supply is missing.</td></tr>
    <tr><td>Probe input does nothing</td><td>Check the probe jumpers and voltage before connecting a sensor.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="https://github.com/Ccecil/PWMBoard/tree/81b679e5a76acc3218640c740d5348ecd5ce32ed">The upstream source</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/PWMBoard/blob/81b679e5a76acc3218640c740d5348ecd5ce32ed/PWMlaserBoard.kicad_pcb">original circuit</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/PWMBoard">Ccecil upstream project</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/PWMBoard/blob/81b679e5a76acc3218640c740d5348ecd5ce32ed/PWMlaserBoard.kicad_sch">Original PWMlaserBoard.kicad_sch</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/PWMBoard/blob/81b679e5a76acc3218640c740d5348ecd5ce32ed/README.md">Original README.md</a></td><td>Design source</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

Outline and holes from the original board file. Millimetres, seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-pwm-io-board-mount-t">
  <title id="xb-pwm-io-board-mount-t">Mounting drawing of the historical-gadgeteer-pwm-io-board, component side: outline 40 by 50 millimetres with 3 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="344.0" y="78.0" width="272.0" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M344.0 56H616.0"/><path d="M344.0 50V62"/><path d="M616.0 50V62"/><path d="M642.0 78.0V418.0"/><path d="M636.0 78.0h12"/><path d="M636.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">40</text>
  <text x="654.0" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">50</text>
  <circle cx="344.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="332.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M286.0 104.0h30" fill="none"/><path d="M320.0 104.0l-8 -4v8z"/><path d="M286.0 104.0v30" fill="none"/><path d="M286.0 138.0l-4 -8h8z"/></g>
  <text x="324.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="282.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="476.6" cy="112.0" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M461.7 112.0h29.8M476.6 97.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="465.7" y="142.9" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  19.50, 5.00</text>
  <circle cx="480.0" cy="258.2" r="8.5" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M467.5 258.2h25.0M480.0 245.7v25.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="488.5" y="239.7" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  20.00, 26.50</text>
  <circle cx="476.6" cy="384.0" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M461.7 384.0h29.8M476.6 369.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="465.7" y="363.1" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  19.50, 45.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 40 × 50&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>19.50</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>20.00</td><td>26.50</td><td>2.5&nbsp;mm, not plated</td><td>Mounting</td></tr>
    <tr><td>3</td><td>19.50</td><td>45.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Only what the design source states or the circuit fixes. Blank cells are not specified.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Voltage, current and temperature limits</td><td>Whole board</td><td>—</td><td>—</td><td>—</td><td>Not specified in the source</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Design source {#origin}

Designed by Chris Cecil: [original design files](https://github.com/Ccecil/PWMBoard/tree/81b679e5a76acc3218640c740d5348ecd5ce32ed). It was drawn for the Smoothieboard V2 Gadgeteer era; check every connection against your own controller.
See all boards on the [extension boards](/extension-boards) page.
