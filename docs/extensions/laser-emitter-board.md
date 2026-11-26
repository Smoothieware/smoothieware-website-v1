---
layout: default
title: "Laser light emitter"
description: "A fail-off switch with interlock header for a Class 2 red laser dot module: safety, pinout, wiring, switch configuration, limits and files."
permalink: /extensions/laser-emitter-board
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Outputs and power</p>
    <h1 id="laser-emitter-board">Laser light emitter</h1>
    <p class="xb-lead">A switch for a finished, low-power red laser dot module used as a pointer. The laser is off unless the controller drives its pin high and the interlock contact on the board is closed. This is not a cutting or engraving laser output.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/laser-emitter-board/laser-emitter-board-diagram.png" alt="Top view of the laser emitter board: a ten-contact socket on the left and right edges and two two-pin headers near the bottom edge.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>
<div class="xb-stats">
  <div class="xb-stat"><b>On/off</b><span>high on contact 3 lights the laser</span></div>
  <div class="xb-stat"><b>5 V</b><span>module supply, switched by an AO3400A</span></div>
  <div class="xb-stat"><b>&lt; 35 mA</b><span>specified module current</span></div>
  <div class="xb-stat"><b>0.5 A</b><span>resettable fuse hold current</span></div>
  <div class="xb-stat"><b>Interlock</b><span>J3 must be closed</span></div>
  <div class="xb-stat"><b>60 &times; 55</b><span>millimetres, four M3 holes</span></div>
</div>
<nav class="xb-nav" aria-label="On this page">
  <a href="#specs">Tech specs</a>
  <a href="#tour">Board tour</a>
  <a href="#pinout">Pinout</a>
  <a href="#what-you-need">What you need</a>
  <a href="#get-started">Get started</a>
  <a href="#configuration">Configuration</a>
  <a href="#how-it-works">How it works</a>
  <a href="#options">Solder links</a>
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
  Laser radiation: do not stare into the beam or view it with optical instruments. Fit only a Class 2 (Class II) module with its own driver. Never fit a bare laser diode or a higher-class module.
</sl-alert>
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  The metal case of the specified module is connected to its positive supply. Insulate it from the machine frame.
</sl-alert>
{:/nomarkdown}

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>A pointer showing where a tool will work, or a light source for experiments. Not a safety interlock system and not for personnel protection</td></tr>
    <tr><td>Laser module</td><td>Quarton VLM-650-03 LPT, 645 to 665&nbsp;nm, under 1&nbsp;mW, Class II by its maker; the assembled product is not separately classified</td></tr>
    <tr><td>Control</td><td>3.3&nbsp;V logic through 100&nbsp;&Omega;, 10&nbsp;k&Omega; pull-down keeps the laser off. On/off only; do not modulate the supply</td></tr>
    <tr><td>Supply</td><td>5&nbsp;V from the socket through a 0.5&nbsp;A resettable fuse (1&nbsp;A trip)</td></tr>
    <tr><td>Headers</td><td>J3 interlock or key switch; J4 laser module leads (2.54&nbsp;mm)</td></tr>
    <tr><td>Sockets</td><td>Two 10-contact Gadgeteer type X sockets (Samtec SHF-105, 1.27&nbsp;mm): input and chain</td></tr>
    <tr><td>Size</td><td>60 &times; 55&nbsp;mm, four M3 holes on a 50 &times; 40&nbsp;mm pattern</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> header GF through a switch module</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/laser-emitter-board/laser-emitter-board-diagram.png" alt="Top view of the laser emitter board with 11 numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:9.0%;top:43.9%" aria-label="1: input socket x in (j1)">1<span class="xb-pop"><b>Input socket X IN (J1)</b> — Control on contact 3, power on 2 and 10.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-2" style="left:91.0%;top:43.9%" aria-label="2: chain socket chain (j2)">2<span class="xb-pop"><b>Chain socket CHAIN (J2)</b> — Passes the unused contacts on.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:30.6%;top:78.9%" aria-label="3: interlock header (j3)">3<span class="xb-pop"><b>Interlock header (J3)</b> — In series with the module supply. With nothing connected the laser cannot light.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:66.1%;top:78.9%" aria-label="4: laser module header (j4)">4<span class="xb-pop"><b>Laser module header (J4)</b> — Pin 1 is the red lead, pin 2 the black lead.</span></a>
      <a class="xb-mk xb-pl" href="#tour-5" style="left:22.6%;top:68.4%" aria-label="5: resettable fuse (f1)">5<span class="xb-pop"><b>Resettable fuse (F1)</b> — Protects the shared 5&nbsp;V rail from a short, including a module case touching a grounded frame.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:54.8%;top:54.4%" aria-label="6: switch transistor (q1)">6<span class="xb-pop"><b>Switch transistor (Q1)</b> — AO3400A MOSFET in the module&rsquo;s return lead.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:43.5%;top:55.2%" aria-label="7: gate resistors (r1, r2)">7<span class="xb-pop"><b>Gate resistors (R1, R2)</b> — Series 100&nbsp;&Omega; and 10&nbsp;k&Omega; pull-down.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:71.0%;top:63.2%" aria-label="8: indicator (d1, r3)">8<span class="xb-pop"><b>Indicator (D1, R3)</b> — Red LED, lit while the switch is on and J3 is closed.</span></a>
      <a class="xb-mk" href="#tour-9" style="left:71.0%;top:52.6%" aria-label="9: led link (jp20)">9<span class="xb-pop"><b>LED link (JP20)</b> — Closed as delivered.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-10" style="left:22.6%;top:33.3%" aria-label="10: chain link (jp3)">10<span class="xb-pop"><b>Chain link (JP3)</b> — Open as delivered, keeping the control signal off the chain.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-11" style="left:9.7%;top:10.5%" aria-label="11: mounting hole">11<span class="xb-pop"><b>Mounting hole</b> — One of four M3 holes.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Input socket X IN (J1)</b> — Control on contact 3, power on 2 and 10.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket CHAIN (J2)</b> — Passes the unused contacts on.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Interlock header (J3)</b> — In series with the module supply. With nothing connected the laser cannot light.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Laser module header (J4)</b> — Pin 1 is the red lead, pin 2 the black lead.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Resettable fuse (F1)</b> — Protects the shared 5&nbsp;V rail from a short, including a module case touching a grounded frame.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Switch transistor (Q1)</b> — AO3400A MOSFET in the module&rsquo;s return lead.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Gate resistors (R1, R2)</b> — Series 100&nbsp;&Omega; and 10&nbsp;k&Omega; pull-down.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Indicator (D1, R3)</b> — Red LED, lit while the switch is on and J3 is closed.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>LED link (JP20)</b> — Closed as delivered.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Chain link (JP3)</b> — Open as delivered, keeping the control signal off the chain.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Mounting hole</b> — One of four M3 holes.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

Check header numbering and lead colours before applying power.

### J1: input socket (X IN)

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>Use</th><th>Prime header GF</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Passed to the chain only</td><td>3.3 V</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Module supply</td><td>5 V</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">LASER_ON</span></td><td>High = on</td><td>PB1</td></tr>
    <tr><td>4 to 9</td><td>Passed through</td><td>Not used</td><td>PJ4, PA4, PG0, PJ3, PG1, PJ2</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Ground</td><td>GND</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J3: interlock

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Pin</th><th>Signal</th><th>Connect</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Fused 5 V</td><td>One side of the key switch or interlock contact</td></tr>
    <tr><td>2</td><td>Switched supply</td><td>The other side</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J4: laser module

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Pin</th><th>Signal</th><th>Module lead</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Switched supply (+)</td><td>Red</td></tr>
    <tr><td>2</td><td>Switch return (&minus;)</td><td>Black</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>The laser module</b><span>Quarton VLM-650-03 LPT or the same specification, with its own driver.</span></div>
  <div class="xb-card"><b>An interlock or key switch</b><span>Wired to J3.</span></div>
  <div class="xb-card"><b>A ten-way cable</b><span>1.27&nbsp;mm Gadgeteer ribbon cable.</span></div>
  <div class="xb-card"><b>An insulating holder</b><span>The module case must not touch metal that is grounded.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Minimum wiring">
<svg viewBox="0 0 1000 204" role="img" aria-labelledby="xb-laser-wire-t">
<title id="xb-laser-wire-t">Minimum wiring: contact 2 to contact 2, 5 V; PB1, contact 3 to contact 3, on / off; contact 10 to contact 10, ground.</title>
<rect x="20" y="20" width="280" height="164" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="160.0" y="107.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2"></text>
<rect x="700" y="20" width="280" height="164" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="840.0" y="107.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2"></text>
<text x="160" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Prime header GF (J37)</text>
<text x="840" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Laser board J1</text>
<path d="M300 84H700" stroke="#ff9f43" stroke-width="3" fill="none"/><circle cx="300" cy="84" r="5" fill="#ff9f43"/><circle cx="700" cy="84" r="5" fill="#ff9f43"/><text x="286" y="89" text-anchor="end" font-size="13" fill="#e6ebf2">contact 2</text><text x="714" y="89" font-size="13" fill="#e6ebf2">contact 2</text><text x="500" y="77" text-anchor="middle" font-size="12" fill="#a9b4c2">5 V</text>
<path d="M300 122H700" stroke="#5fb3ff" stroke-width="3" fill="none"/><circle cx="300" cy="122" r="5" fill="#5fb3ff"/><circle cx="700" cy="122" r="5" fill="#5fb3ff"/><text x="286" y="127" text-anchor="end" font-size="13" fill="#e6ebf2">PB1, contact 3</text><text x="714" y="127" font-size="13" fill="#e6ebf2">contact 3</text><text x="500" y="115" text-anchor="middle" font-size="12" fill="#a9b4c2">on / off</text>
<path d="M300 160H700" stroke="#a9b4c2" stroke-width="3" fill="none"/><circle cx="300" cy="160" r="5" fill="#a9b4c2"/><circle cx="700" cy="160" r="5" fill="#a9b4c2"/><text x="286" y="165" text-anchor="end" font-size="13" fill="#e6ebf2">contact 10</text><text x="714" y="165" font-size="13" fill="#e6ebf2">contact 10</text><text x="500" y="153" text-anchor="middle" font-size="12" fill="#a9b4c2">ground</text>
</svg>
  </div>
  <figcaption>Three connections to the controller; the interlock and module go on J3 and J4.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Mount board and module</h3>
    <p>Aim the module at a matt surface, away from eye level, in an insulating holder.</p>
  </li>
  <li class="xb-step">
    <h3>Wire J4 and J3 with the power off</h3>
    <p>Red to J4 pin 1, black to J4 pin 2, interlock contact across J3.</p>
  </li>
  <li class="xb-step">
    <h3>Add the configuration</h3>
    <p>Use the entry below. Connect J1 to header GF and power up.</p>
    <p class="xb-expect">By design the laser stays off at power up.</p>
  </li>
  <li class="xb-step">
    <h3>Switch it</h3>
    <p>Close the interlock, send M810, then M811.</p>
    <p class="xb-expect">The dot and the red LED should come on and go off. Opening the interlock should put them out at once.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Switch the pointer by command</td><td>Switch</td><td>The entry below</td></tr>
    <tr><td>Use as a cutting laser output</td><td>Not suitable</td><td>The module is on/off only</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Add this to `config.ini`:

```ini
[switch]
pointer.enable = true
pointer.output_pin = PB1
pointer.output_type = digital
pointer.input_on_command = M810
pointer.input_off_command = M811
pointer.startup_state = false
pointer.halt_set_to = false
```

`M810` turns the pointer on and `M811` off; choose other numbers if your configuration already uses these. The switch starts off and is set off when the machine halts. Do not set `ignore_on_halt`. See the [switch module](https://github.com/Smoothieware/SmoothieV2/tree/master/Firmware/src/modules/tools/switch).

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
<svg viewBox="0 0 1000 200" role="img" aria-labelledby="xb-laser-how-t">
<title id="xb-laser-how-t">The 5 V supply passes through a fuse and the interlock to the module; a transistor switches its return.</title>
<rect x="20.0" y="20" width="155.2" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="97.6" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">5 V</text><text x="97.6" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">from socket</text>
<path d="M175.2 51H221.2" stroke="#a9b4c2" stroke-width="3"/><path d="M221.2 51l-9 -5v10z" fill="#a9b4c2"/>
<rect x="221.2" y="20" width="155.2" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="298.79999999999995" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">F1</text><text x="298.79999999999995" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">resettable fuse</text>
<path d="M376.4 51H422.4" stroke="#a9b4c2" stroke-width="3"/><path d="M422.4 51l-9 -5v10z" fill="#a9b4c2"/>
<rect x="422.4" y="20" width="155.2" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="500.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J3</text><text x="500.0" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">interlock</text>
<path d="M577.6 51H623.6" stroke="#a9b4c2" stroke-width="3"/><path d="M623.6 51l-9 -5v10z" fill="#a9b4c2"/>
<rect x="623.6" y="20" width="155.2" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="701.2" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J4</text><text x="701.2" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">laser module</text>
<path d="M778.8 51H824.8" stroke="#a9b4c2" stroke-width="3"/><path d="M824.8 51l-9 -5v10z" fill="#a9b4c2"/>
<rect x="824.8" y="20" width="155.2" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="902.4" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Q1</text><text x="902.4" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">to ground</text>
<rect x="20.0" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="120.0" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J1 contact 3</text><text x="120.0" y="157.0" text-anchor="middle" font-size="12" fill="#a9b4c2">control</text>
<path d="M220.0 141H400.0" stroke="#a9b4c2" stroke-width="3"/><path d="M400.0 141l-9 -5v10z" fill="#a9b4c2"/>
<rect x="400.0" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="500.0" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">R1, R2</text><text x="500.0" y="157.0" text-anchor="middle" font-size="12" fill="#a9b4c2">gate network</text>
<path d="M600.0 141H780.0" stroke="#a9b4c2" stroke-width="3"/><path d="M780.0 141l-9 -5v10z" fill="#a9b4c2"/>
<rect x="780.0" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="880.0" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Q1</text><text x="880.0" y="157.0" text-anchor="middle" font-size="12" fill="#a9b4c2">switch</text>
</svg>
  </div>
  <figcaption>Supply path above, control path below.</figcaption>
</figure>
{:/nomarkdown}

The module regulates its own current, so the board only connects and disconnects it. The pull-down resistor holds the transistor off while the controller starts, while it is in reset, or when the cable is loose. The interlock is a plain series contact; no solder link bypasses it.

## Solder links {#options}

Keep JP3 open: another board must not be able to switch the laser. Open JP20 if the indicator is unwanted.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Solder links">
<svg viewBox="0 0 1000 114" role="img" aria-labelledby="xb-laser-jp-t">
<title id="xb-laser-jp-t">Solder links as delivered: JP3 open; JP20 closed.</title>
<rect x="20" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="72" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="114" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="108" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP3 · open</text><text x="108" y="90" text-anchor="middle" font-size="11" fill="#a9b4c2">chain contact 3</text>
<rect x="216" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="268" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="310" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="294" y="34" width="20" height="10" fill="#e0b84a"/>
<text x="304" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP20 · closed</text><text x="304" y="90" text-anchor="middle" font-size="11" fill="#a9b4c2">indicator LED</text>
</svg>
  </div>
  <figcaption>The links as delivered. Close one with a small blob of solder across both pads; open it by removing the solder or cutting the copper between the pads.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>What it does</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>JP3</td><td>Joins contact 3 to the chain socket</td><td>Open</td></tr>
    <tr><td>JP20</td><td>Powers the indicator LED</td><td>Closed</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Chaining {#chaining}

A further board on CHAIN can use contacts 4 to 9.

{::nomarkdown}
{% include _includes/extension-chain-figure.html id="xb-laser" board="laser emitter board" in_label="X IN" chain_label="CHAIN" lane1="pin 3, laser" lane2="pin 4, free" lane3="pin 5, free" s1="open" s2="closed" s3="closed" caption="Pin 3 stops here; pins 4 and 5 are wired straight through." %}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>On CHAIN</th></tr></thead>
  <tbody>
    <tr><td>1, 2, 10</td><td>Power and ground</td><td>Passed on</td></tr>
    <tr><td>3</td><td>Laser control</td><td>Stopped by open JP3</td></tr>
    <tr><td>4 to 9</td><td>Free</td><td>Passed on</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Likely cause</th><th>What to check</th></tr></thead>
  <tbody>
    <tr><td>No light, red LED off</td><td>Interlock open, no 5 V, or command not received</td><td>J3 contact, test point 5 V, test point GATE near 3.3 V when on</td></tr>
    <tr><td>Red LED on, no dot</td><td>Module leads reversed or loose</td><td>Red to J4 pin 1; check the module</td></tr>
    <tr><td>5 V drops out or fuse trips</td><td>Module case touching ground, or a shorted lead</td><td>Remove power, insulate the case, let the fuse cool</td></tr>
    <tr><td>Laser on whenever interlock is closed</td><td>Wrong pin or output driven high</td><td>Disconnect, check the configuration, test point GATE</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-red"></span>Red (D1)</th></tr></thead>
  <tbody>
    <tr><td>Lit means</td><td>Switch on and interlock closed</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/laser-emitter-board/laser-emitter-board-schematic.pdf">Schematic (PDF)</a></td><td>The circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/laser-emitter-board/laser-emitter-board-bom.csv">Parts list (CSV)</a></td><td>Every component with its value, footprint and part number where one is chosen</td></tr>
    <tr><td><a href="/images/extensions/laser-emitter-board/laser-emitter-board-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side. 

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-laser-mount-t">
  <title id="xb-laser-mount-t">Mounting drawing of the laser emitter board, component side: outline 60 by 55 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="294.5" y="78.0" width="370.9" height="340.0" rx="6.2" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M294.5 56H665.5"/><path d="M294.5 50V62"/><path d="M665.5 50V62"/><path d="M691.5 78.0V418.0"/><path d="M685.5 78.0h12"/><path d="M685.5 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">60</text>
  <text x="703.5" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">55</text>
  <circle cx="294.5" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="282.5" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M236.5 104.0h30" fill="none"/><path d="M270.5 104.0l-8 -4v8z"/><path d="M236.5 104.0v30" fill="none"/><path d="M236.5 138.0l-4 -8h8z"/></g>
  <text x="274.5" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="232.5" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="325.5" cy="108.9" r="9.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M311.6 108.9h27.8M325.5 95.0v27.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="315.6" y="138.8" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.00</text>
  <circle cx="634.5" cy="108.9" r="9.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M620.7 108.9h27.8M634.5 95.0v27.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="644.4" y="138.8" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  55.00, 5.00</text>
  <circle cx="325.5" cy="356.2" r="9.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M311.6 356.2h27.8M325.5 342.3v27.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="315.6" y="336.3" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 45.00</text>
  <circle cx="634.5" cy="356.2" r="9.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M620.7 356.2h27.8M634.5 342.3v27.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="644.4" y="336.3" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  55.00, 45.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 60 × 55&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>55.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>5.00</td><td>45.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>55.00</td><td>45.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Every figure is a design value, a calculated or simulated value, or a manufacturer&rsquo;s data sheet value, as the last column says. A dash means no figure is given.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis</th></tr></thead>
  <tbody>
    <tr><td>Supply</td><td>J1 contact 2</td><td>&mdash;</td><td>5 V</td><td>&mdash;</td><td>Design</td></tr>
    <tr><td>Module current</td><td>J4</td><td>&mdash;</td><td>&mdash;</td><td>35 mA</td><td>Quarton data sheet</td></tr>
    <tr><td>Board supply current</td><td>5 V</td><td>&mdash;</td><td>&mdash;</td><td>40 mA</td><td>Calculated</td></tr>
    <tr><td>Wavelength</td><td>Module</td><td>645 nm</td><td>&mdash;</td><td>665 nm</td><td>Quarton data sheet</td></tr>
    <tr><td>Optical power</td><td>Module</td><td>&mdash;</td><td>&mdash;</td><td>1 mW</td><td>Quarton data sheet</td></tr>
    <tr><td>Module operating temperature</td><td>Module</td><td>15 &deg;C</td><td>&mdash;</td><td>30 &deg;C</td><td>Quarton data sheet</td></tr>
    <tr><td>Fuse hold / trip</td><td>F1</td><td>0.5 A</td><td>&mdash;</td><td>1 A</td><td>Bourns data sheet</td></tr>
    <tr><td>Switch voltage drop</td><td>Q1</td><td>&mdash;</td><td>1.7 mV</td><td>&mdash;</td><td>Simulated</td></tr>
    <tr><td>Gate voltage, on</td><td>Q1</td><td>&mdash;</td><td>3.27 V</td><td>&mdash;</td><td>Simulated</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Component stress limits

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Part</th><th>Limit</th><th>Use on this board</th></tr></thead>
  <tbody>
    <tr><td>Module current</td><td>Fuse hold 0.5 A</td><td>35 mA</td></tr>
    <tr><td>Short circuit</td><td>Fuse trips at 1 A; trip time depends on fault current</td><td>Fix the fault before reuse</td></tr>
    <tr><td>Capacitors</td><td>10 V and 16 V</td><td>5 V</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: simulation {#simulation}

The switch and gate network were simulated with ngspice with the module represented as a resistive load drawing 35&nbsp;mA.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Simulated results against limits">
<svg viewBox="0 0 1000 238" role="img" aria-labelledby="xb-laser-sim-t">
<title id="xb-laser-sim-t">Each simulated value (yellow mark) against its allowed range (green band).</title>
<text x="385" y="41" text-anchor="end" font-size="13" fill="#e6ebf2">Gate voltage when driven from 3.3 V</text>
<path d="M400 36H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M444.5 36H815.5" stroke="#2f8f5b" stroke-width="10"/><path d="M775.1 23v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="41" font-size="13" font-weight="700" fill="#ffcc33">3.27&nbsp;V</text>
<text x="385" y="93" text-anchor="end" font-size="13" fill="#e6ebf2">Voltage lost in the switch</text>
<path d="M400 88H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M400.0 88H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M468.9 75v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="93" font-size="13" font-weight="700" fill="#ffcc33">1.7&nbsp;mV</text>
<text x="385" y="145" text-anchor="end" font-size="13" fill="#e6ebf2">Module current assumed</text>
<path d="M400 140H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M400.0 140H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M810.2 127v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="145" font-size="13" font-weight="700" fill="#ffcc33">35&nbsp;mA</text>
<text x="385" y="197" text-anchor="end" font-size="13" fill="#e6ebf2">Gate voltage with the signal low</text>
<path d="M400 192H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M400.0 192H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M400.0 179v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="197" font-size="13" font-weight="700" fill="#ffcc33">0&nbsp;V</text>
</svg>
  </div>
  <figcaption>Simulated value (yellow) against the limit used for it (green). Each bar has its own scale.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Result</th><th>Simulated value</th><th>Limit</th><th>Outcome</th></tr></thead>
  <tbody>
    <tr><td>Gate voltage when driven from 3.3 V</td><td>3.27&nbsp;V</td><td>3&nbsp;V to 3.3&nbsp;V</td><td>Within</td></tr>
    <tr><td>Voltage lost in the switch</td><td>1.7&nbsp;mV</td><td>at most 10&nbsp;mV</td><td>Within</td></tr>
    <tr><td>Module current assumed</td><td>35&nbsp;mA</td><td>at most 35&nbsp;mA</td><td>Within</td></tr>
    <tr><td>Gate voltage with the signal low</td><td>0&nbsp;V</td><td>at most 100&nbsp;mV</td><td>Within</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Not simulated: the laser module, its driver, optical power, start-up behaviour and fuse trip time.

## Appendix: datasheet {#datasheets}

The first page of each manufacturer data sheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/laser-emitter-board/datasheets/vlm-650-03.pdf"><img src="/images/extensions/laser-emitter-board/datasheets/vlm-650-03-page1.png" alt="First page of the VLM-650-03 series laser module (distributor copy) datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/laser-emitter-board/datasheets/vlm-650-03.pdf">VLM-650-03 series laser module (distributor copy)</a> — Quarton, 3 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/laser-emitter-board/datasheets/ao3400a.pdf"><img src="/images/extensions/laser-emitter-board/datasheets/ao3400a-page1.png" alt="First page of the AO3400A N-channel MOSFET datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/laser-emitter-board/datasheets/ao3400a.pdf">AO3400A N-channel MOSFET</a> — Alpha and Omega Semiconductor, 5 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/laser-emitter-board/datasheets/mf-msmf.pdf"><img src="/images/extensions/laser-emitter-board/datasheets/mf-msmf-page1.png" alt="First page of the MF-MSMF resettable fuses datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/laser-emitter-board/datasheets/mf-msmf.pdf">MF-MSMF resettable fuses</a> — Bourns, 16 pages.</figcaption>
</figure>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
