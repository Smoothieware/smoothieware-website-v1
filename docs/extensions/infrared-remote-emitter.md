---
layout: default
title: "Infrared remote emitter"
description: "Two 940 nm infrared LEDs switched from a PWM pin on a Gadgeteer socket: pinout, wiring, PWM configuration, limits and files."
permalink: /extensions/infrared-remote-emitter
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Outputs and power</p>
    <h1 id="infrared-remote-emitter">Infrared remote emitter</h1>
    <p class="xb-lead">Two infrared LEDs for sending remote-control signals to a camera, fan or lamp. One controller pin switches both. The firmware can produce a 38&nbsp;kHz carrier on that pin, but it cannot yet send coded remote commands: that needs your own driver.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/infrared-remote-emitter/infrared-remote-emitter-diagram.png" alt="Top view of the infrared emitter board: a ten-contact socket on the left and right edges and two round infrared LEDs near the bottom edge.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>
<div class="xb-stats">
  <div class="xb-stat"><b>940 nm</b><span>two Vishay TSAL6200 LEDs</span></div>
  <div class="xb-stat"><b>about 76 mA</b><span>simulated peak per LED</span></div>
  <div class="xb-stat"><b>17&deg;</b><span>LED half angle</span></div>
  <div class="xb-stat"><b>High = on</b><span>PWM on contact 7</span></div>
  <div class="xb-stat"><b>5 V</b><span>about 155 mA with both on</span></div>
  <div class="xb-stat"><b>50 &times; 50</b><span>millimetres, four M3 holes</span></div>
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
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  The radiation is invisible. Do not stare into the LEDs at close range; the optical safety class of the board has not been assessed.
</sl-alert>
{:/nomarkdown}

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>Sending infrared signals to appliances. Not an optical data link or safety device</td></tr>
    <tr><td>LEDs</td><td>Two Vishay TSAL6200, 940&nbsp;nm, each with its own 47&nbsp;&Omega; 1&nbsp;W resistor</td></tr>
    <tr><td>Control</td><td>3.3&nbsp;V PWM on contact 7 through 100&nbsp;&Omega;; 100&nbsp;k&Omega; pull-down keeps the LEDs off</td></tr>
    <tr><td>Supply</td><td>5&nbsp;V from the socket</td></tr>
    <tr><td>Indicator</td><td>Red LED shows activity</td></tr>
    <tr><td>Sockets</td><td>Two 10-contact Gadgeteer type P sockets (Samtec SHF-105, 1.27&nbsp;mm): input and chain</td></tr>
    <tr><td>Size</td><td>50 &times; 50&nbsp;mm, four M3 holes on a 40 &times; 40&nbsp;mm pattern</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> header GD (PWM1_2)</td></tr>
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
      <img src="/images/extensions/infrared-remote-emitter/infrared-remote-emitter-diagram.png" alt="Top view of the infrared emitter board with 11 numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:10.8%;top:44.2%" aria-label="1: input socket p in (j1)">1<span class="xb-pop"><b>Input socket P IN (J1)</b> — PWM on contact 7, 5&nbsp;V on contact 2.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-2" style="left:89.2%;top:44.2%" aria-label="2: chain socket chain (j2)">2<span class="xb-pop"><b>Chain socket CHAIN (J2)</b> — Passes the unused contacts on.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:47.6%;top:86.5%" aria-label="3: infrared leds (d1, d2)">3<span class="xb-pop"><b>Infrared LEDs (D1, D2)</b> — Upright as drawn; the leads may be bent to aim them.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:50.0%;top:67.3%" aria-label="4: led resistors (r1, r2)">4<span class="xb-pop"><b>LED resistors (R1, R2)</b> — Large 47&nbsp;&Omega; parts rated to carry the current continuously. They get warm.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:50.0%;top:53.8%" aria-label="5: switch transistor (q1)">5<span class="xb-pop"><b>Switch transistor (Q1)</b> — AO3400A MOSFET switching both LEDs.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:42.3%;top:49.0%" aria-label="6: gate resistors (r3, r4)">6<span class="xb-pop"><b>Gate resistors (R3, R4)</b> — Series resistor and pull-down.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:50.0%;top:71.2%" aria-label="7: supply capacitor (c1)">7<span class="xb-pop"><b>Supply capacitor (C1)</b> — 10&nbsp;&micro;F on 5&nbsp;V.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:65.4%;top:47.1%" aria-label="8: indicator (d3, r5)">8<span class="xb-pop"><b>Indicator (D3, R5)</b> — Red LED, lit with the infrared LEDs.</span></a>
      <a class="xb-mk xb-pb" href="#tour-9" style="left:65.4%;top:34.6%" aria-label="9: led link (jp20)">9<span class="xb-pop"><b>LED link (JP20)</b> — Closed as delivered; open it to switch the indicator off.</span></a>
      <a class="xb-mk xb-pb" href="#tour-10" style="left:26.9%;top:44.2%" aria-label="10: chain link (jp7)">10<span class="xb-pop"><b>Chain link (JP7)</b> — Open as delivered, keeping the PWM signal off the chain.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-11" style="left:11.5%;top:11.5%" aria-label="11: mounting hole">11<span class="xb-pop"><b>Mounting hole</b> — One of four M3 holes.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Input socket P IN (J1)</b> — PWM on contact 7, 5&nbsp;V on contact 2.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket CHAIN (J2)</b> — Passes the unused contacts on.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Infrared LEDs (D1, D2)</b> — Upright as drawn; the leads may be bent to aim them.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>LED resistors (R1, R2)</b> — Large 47&nbsp;&Omega; parts rated to carry the current continuously. They get warm.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Switch transistor (Q1)</b> — AO3400A MOSFET switching both LEDs.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Gate resistors (R3, R4)</b> — Series resistor and pull-down.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Supply capacitor (C1)</b> — 10&nbsp;&micro;F on 5&nbsp;V.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Indicator (D3, R5)</b> — Red LED, lit with the infrared LEDs.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>LED link (JP20)</b> — Closed as delivered; open it to switch the indicator off.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Chain link (JP7)</b> — Open as delivered, keeping the PWM signal off the chain.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Mounting hole</b> — One of four M3 holes.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

Check contact numbering with the power removed before wiring by hand.

### J1: input socket (P IN)

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>Use</th><th>Prime header GD</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Passed to the chain only</td><td>3.3 V</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>LED supply</td><td>5 V</td></tr>
    <tr><td>3 to 6</td><td>Passed through</td><td>Not used</td><td>PE7, PD8, PB11, PE9</td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-sig">PWM</span></td><td>High = LEDs on</td><td>PE11 (PWM1_2)</td></tr>
    <tr><td>8, 9</td><td>Passed through</td><td>Not used</td><td>PE13, PE14</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Ground</td><td>GND</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>A PWM socket</b><span>Prime header GD contact 7.</span></div>
  <div class="xb-card"><b>A ten-way cable</b><span>1.27&nbsp;mm Gadgeteer ribbon cable.</span></div>
  <div class="xb-card"><b>A way to see infrared</b><span>Many phone cameras show it as a faint glow.</span></div>
  <div class="xb-card"><b>Your own code sender</b><span>Needed to control an appliance.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Minimum wiring">
<svg viewBox="0 0 1000 204" role="img" aria-labelledby="xb-irtx-wire-t">
<title id="xb-irtx-wire-t">Minimum wiring: contact 2 to contact 2, 5 V; PE11, contact 7 to contact 7, carrier; contact 10 to contact 10, ground.</title>
<rect x="20" y="20" width="280" height="164" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="160.0" y="107.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2"></text>
<rect x="700" y="20" width="280" height="164" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="840.0" y="107.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2"></text>
<text x="160" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Prime header GD (J35)</text>
<text x="840" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">IR emitter J1</text>
<path d="M300 84H700" stroke="#ff9f43" stroke-width="3" fill="none"/><circle cx="300" cy="84" r="5" fill="#ff9f43"/><circle cx="700" cy="84" r="5" fill="#ff9f43"/><text x="286" y="89" text-anchor="end" font-size="13" fill="#e6ebf2">contact 2</text><text x="714" y="89" font-size="13" fill="#e6ebf2">contact 2</text><text x="500" y="77" text-anchor="middle" font-size="12" fill="#a9b4c2">5 V</text>
<path d="M300 122H700" stroke="#5fb3ff" stroke-width="3" fill="none"/><circle cx="300" cy="122" r="5" fill="#5fb3ff"/><circle cx="700" cy="122" r="5" fill="#5fb3ff"/><text x="286" y="127" text-anchor="end" font-size="13" fill="#e6ebf2">PE11, contact 7</text><text x="714" y="127" font-size="13" fill="#e6ebf2">contact 7</text><text x="500" y="115" text-anchor="middle" font-size="12" fill="#a9b4c2">carrier</text>
<path d="M300 160H700" stroke="#a9b4c2" stroke-width="3" fill="none"/><circle cx="300" cy="160" r="5" fill="#a9b4c2"/><circle cx="700" cy="160" r="5" fill="#a9b4c2"/><text x="286" y="165" text-anchor="end" font-size="13" fill="#e6ebf2">contact 10</text><text x="714" y="165" font-size="13" fill="#e6ebf2">contact 10</text><text x="500" y="153" text-anchor="middle" font-size="12" fill="#a9b4c2">ground</text>
</svg>
  </div>
  <figcaption>Three connections.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Mount the board</h3>
    <p>Aim the LEDs at the appliance&rsquo;s receiver.</p>
  </li>
  <li class="xb-step">
    <h3>Connect with the power off</h3>
    <p>Plug J1 into header GD.</p>
  </li>
  <li class="xb-step">
    <h3>Add the configuration</h3>
    <p>Use the entry below and restart.</p>
    <p class="xb-expect">By design the LEDs stay off at start.</p>
  </li>
  <li class="xb-step">
    <h3>Test the output</h3>
    <p>Send M812 and look through a phone camera, then send M813.</p>
    <p class="xb-expect">The red LED should light while the carrier is on, and go out afterwards. This sends a bare carrier, not a command the appliance understands.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Produce a 38 kHz carrier for testing</td><td>Switch with hardware PWM</td><td>The entry below</td></tr>
    <tr><td>Send remote-control codes</td><td>None</td><td>No SmoothieV2 module encodes infrared commands</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Add this to `config.ini`:

```ini
[pwm1]
frequency = 38000

[switch]
irsend.enable = true
irsend.output_pin = PWM1_2
irsend.output_type = hwpwm
irsend.startup_value = 0
irsend.default_on_value = 33
irsend.input_on_command = M812
irsend.input_off_command = M813
```

The frequency applies to every output on PWM timer 1, so do not share that timer with fans or heaters that need another frequency; if your file already has a `[pwm1]` section, check what uses it first. `default_on_value` is the duty cycle in percent. Choose other command numbers if these are in use. See the [switch module](https://github.com/Smoothieware/SmoothieV2/tree/master/Firmware/src/modules/tools/switch).

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
<svg viewBox="0 0 1000 200" role="img" aria-labelledby="xb-irtx-how-t">
<title id="xb-irtx-how-t">One transistor switches two LED and resistor branches from 5 V.</title>
<rect x="20.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="120.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J1 contact 7</text><text x="120.0" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">carrier</text>
<path d="M220.0 51H400.0" stroke="#a9b4c2" stroke-width="3"/><path d="M400.0 51l-9 -5v10z" fill="#a9b4c2"/>
<rect x="400.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="500.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Q1</text><text x="500.0" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">switch</text>
<path d="M600.0 51H780.0" stroke="#a9b4c2" stroke-width="3"/><path d="M780.0 51l-9 -5v10z" fill="#a9b4c2"/>
<rect x="780.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="880.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">D1, D2</text><text x="880.0" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">940 nm light</text>
<rect x="20.0" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="120.0" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">5 V</text><text x="120.0" y="157.0" text-anchor="middle" font-size="12" fill="#a9b4c2">from socket</text>
<path d="M220.0 141H400.0" stroke="#a9b4c2" stroke-width="3"/><path d="M400.0 141l-9 -5v10z" fill="#a9b4c2"/>
<rect x="400.0" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="500.0" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">R1, R2</text><text x="500.0" y="157.0" text-anchor="middle" font-size="12" fill="#a9b4c2">set current</text>
<path d="M600.0 141H780.0" stroke="#a9b4c2" stroke-width="3"/><path d="M780.0 141l-9 -5v10z" fill="#a9b4c2"/>
<rect x="780.0" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="880.0" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">D1, D2</text><text x="880.0" y="157.0" text-anchor="middle" font-size="12" fill="#a9b4c2">to Q1</text>
</svg>
  </div>
  <figcaption>Control path above, power path below.</figcaption>
</figure>
{:/nomarkdown}

A remote-control signal is a series of bursts of a carrier, usually 36 to 40&nbsp;kHz. The pin switches both LEDs at that rate. At one-third duty the simulated average is about 25&nbsp;mA per LED with peaks near 76&nbsp;mA. The resistors are sized so that an output stuck on stays within the LED continuous rating.

## Solder links {#options}

Leave JP7 open while the emitter is in use. Open JP20 if the indicator is unwanted.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Solder links">
<svg viewBox="0 0 1000 114" role="img" aria-labelledby="xb-irtx-jp-t">
<title id="xb-irtx-jp-t">Solder links as delivered: JP7 open; JP20 closed.</title>
<rect x="20" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="72" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="114" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="108" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP7 · open</text><text x="108" y="90" text-anchor="middle" font-size="11" fill="#a9b4c2">chain contact 7</text>
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
    <tr><td>JP7</td><td>Joins contact 7 to the chain socket</td><td>Open</td></tr>
    <tr><td>JP20</td><td>Powers the indicator LED</td><td>Closed</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Chaining {#chaining}

A further board on CHAIN can use contacts 3 to 6, 8 and 9. Allow for this board&rsquo;s share of the 5&nbsp;V budget.

{::nomarkdown}
{% include _includes/extension-chain-figure.html id="xb-irtx" board="infrared emitter board" in_label="P IN" chain_label="CHAIN" lane1="pin 7, PWM" lane2="pin 8, free" lane3="pin 9, free" s1="open" s2="closed" s3="closed" caption="Pin 7 stops here; pins 8 and 9 are wired straight through." %}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>On CHAIN</th></tr></thead>
  <tbody>
    <tr><td>1, 2, 10</td><td>Power and ground</td><td>Passed on</td></tr>
    <tr><td>3 to 6</td><td>Free</td><td>Passed on</td></tr>
    <tr><td>7</td><td>PWM</td><td>Stopped by open JP7</td></tr>
    <tr><td>8, 9</td><td>Free</td><td>Passed on</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Likely cause</th><th>What to check</th></tr></thead>
  <tbody>
    <tr><td>Nothing lights</td><td>No 5 V, wrong pin, or configuration not loaded</td><td>Test point 5 V; check the startup messages for PWM errors</td></tr>
    <tr><td>Red LED lights but camera shows nothing</td><td>Camera filters infrared</td><td>Try another camera, often the front one</td></tr>
    <tr><td>Appliance ignores the board</td><td>A bare carrier carries no command</td><td>Use a driver that sends the appliance&rsquo;s code</td></tr>
    <tr><td>Short range</td><td>LEDs aimed away</td><td>Bend the leads towards the receiver</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

| Light | Meaning |
|---|---|
| Red (D3) | Infrared LEDs being driven |
{: .xb-leds}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/infrared-remote-emitter/infrared-remote-emitter-schematic.pdf">Schematic (PDF)</a></td><td>The circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/infrared-remote-emitter/infrared-remote-emitter-bom.csv">Parts list (CSV)</a></td><td>Every component with its value, footprint and part number where one is chosen</td></tr>
    <tr><td><a href="/images/extensions/infrared-remote-emitter/infrared-remote-emitter-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
    <tr><td><a href="/images/extensions/infrared-remote-emitter/infrared-remote-emitter-populated-top.png">3D view, top (PNG)</a></td><td>Rendered from the design files</td></tr>
    <tr><td><a href="/images/extensions/infrared-remote-emitter/infrared-remote-emitter-populated-isometric.png">3D view, angled (PNG)</a></td><td>Rendered from the design files</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side. 

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-irtx-mount-t">
  <title id="xb-irtx-mount-t">Mounting drawing of the infrared emitter board, component side: outline 50 by 50 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="310.0" y="78.0" width="340.0" height="340.0" rx="6.8" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M310.0 56H650.0"/><path d="M310.0 50V62"/><path d="M650.0 50V62"/><path d="M676.0 78.0V418.0"/><path d="M670.0 78.0h12"/><path d="M670.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">50</text>
  <text x="688.0" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">50</text>
  <circle cx="310.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="298.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M252.0 104.0h30" fill="none"/><path d="M286.0 104.0l-8 -4v8z"/><path d="M252.0 104.0v30" fill="none"/><path d="M252.0 138.0l-4 -8h8z"/></g>
  <text x="290.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="248.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="344.0" cy="112.0" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M329.1 112.0h29.8M344.0 97.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="333.1" y="142.9" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.00</text>
  <circle cx="616.0" cy="112.0" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M601.1 112.0h29.8M616.0 97.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="626.9" y="142.9" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  45.00, 5.00</text>
  <circle cx="344.0" cy="384.0" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M329.1 384.0h29.8M344.0 369.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="333.1" y="363.1" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 45.00</text>
  <circle cx="616.0" cy="384.0" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M601.1 384.0h29.8M616.0 369.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="626.9" y="363.1" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  45.00, 45.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 50 × 50&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>45.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>5.00</td><td>45.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>45.00</td><td>45.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
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
    <tr><td>Peak current per LED</td><td>D1, D2</td><td>&mdash;</td><td>76 mA</td><td>&mdash;</td><td>Simulated</td></tr>
    <tr><td>Average current per LED, one-third duty</td><td>D1, D2</td><td>&mdash;</td><td>25 mA</td><td>&mdash;</td><td>Simulated</td></tr>
    <tr><td>Total current, both on</td><td>5 V</td><td>&mdash;</td><td>155 mA</td><td>&mdash;</td><td>Simulated</td></tr>
    <tr><td>Indicator current</td><td>D3</td><td>&mdash;</td><td>1.5 mA</td><td>&mdash;</td><td>Calculated</td></tr>
    <tr><td>Wavelength</td><td>D1, D2</td><td>&mdash;</td><td>940 nm</td><td>&mdash;</td><td>Vishay data sheet</td></tr>
    <tr><td>Half angle</td><td>D1, D2</td><td>&mdash;</td><td>17&deg;</td><td>&mdash;</td><td>Vishay data sheet</td></tr>
    <tr><td>Resistor power if held on</td><td>R1, R2</td><td>&mdash;</td><td>0.27 W</td><td>&mdash;</td><td>Simulated</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Component stress limits

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Part</th><th>Limit</th><th>Use on this board</th></tr></thead>
  <tbody>
    <tr><td>LED forward current</td><td>100 mA continuous</td><td>About 76 mA if held on</td></tr>
    <tr><td>LED resistors</td><td>1 W</td><td>0.27 W</td></tr>
    <tr><td>Capacitor</td><td>10 V</td><td>5 V</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: simulation {#simulation}

The LED drive was simulated with ngspice at 38&nbsp;kHz and one-third duty with a hand-fitted diode model.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Simulated results against limits">
<svg viewBox="0 0 1000 186" role="img" aria-labelledby="xb-irtx-sim-t">
<title id="xb-irtx-sim-t">Each simulated value (yellow mark) against its allowed range (green band).</title>
<text x="385" y="41" text-anchor="end" font-size="13" fill="#e6ebf2">Peak LED current</text><path d="M400 36H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M444.5 36H815.5" stroke="#2f8f5b" stroke-width="10"/><path d="M612.3 23v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="41" font-size="13" font-weight="700" fill="#ffcc33">75.8&nbsp;mA</text>
<text x="385" y="93" text-anchor="end" font-size="13" fill="#e6ebf2">Average LED current at one third duty</text><path d="M400 88H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M444.5 88H815.5" stroke="#2f8f5b" stroke-width="10"/><path d="M632.9 75v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="93" font-size="13" font-weight="700" fill="#ffcc33">25.2&nbsp;mA</text>
<text x="385" y="145" text-anchor="end" font-size="13" fill="#e6ebf2">Resistor power if held on</text><path d="M400 140H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M400.0 140H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M622.0 127v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="145" font-size="13" font-weight="700" fill="#ffcc33">270&nbsp;mW</text>
</svg>
  </div>
  <figcaption>Simulated value (yellow) against the limit used for it (green). Each bar has its own scale.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Result</th><th>Simulated value</th><th>Limit</th><th>Outcome</th></tr></thead>
  <tbody>
    <tr><td>Peak LED current</td><td>75.8&nbsp;mA</td><td>60&nbsp;mA to 95&nbsp;mA</td><td>Within</td></tr>
    <tr><td>Average LED current at one third duty</td><td>25.2&nbsp;mA</td><td>15&nbsp;mA to 35&nbsp;mA</td><td>Within</td></tr>
    <tr><td>Resistor power if held on</td><td>270&nbsp;mW</td><td>at most 500&nbsp;mW</td><td>Within</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Not simulated: optical range, beam pattern, eye safety and temperature rise.

## Appendix: datasheet {#datasheets}

The first page of each manufacturer data sheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/infrared-remote-emitter/datasheets/tsal6200.pdf"><img src="/images/extensions/infrared-remote-emitter/datasheets/tsal6200-page1.png" alt="First page of the TSAL6200 infrared emitting diode datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/infrared-remote-emitter/datasheets/tsal6200.pdf">TSAL6200 infrared emitting diode</a> — Vishay, 5 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/infrared-remote-emitter/datasheets/ao3400a.pdf"><img src="/images/extensions/infrared-remote-emitter/datasheets/ao3400a-page1.png" alt="First page of the AO3400A N-channel MOSFET datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/infrared-remote-emitter/datasheets/ao3400a.pdf">AO3400A N-channel MOSFET</a> — Alpha and Omega Semiconductor, 5 pages.</figcaption>
</figure>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
