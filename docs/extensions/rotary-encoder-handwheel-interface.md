---
layout: default
title: "Handwheel encoder interface"
description: "Connect a 5 V handwheel or incremental encoder to a Gadgeteer socket: differential, push-pull and open-collector wiring, solder links, MPG configuration and files."
permalink: /extensions/rotary-encoder-handwheel-interface
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Controls and displays</p>
    <h1 id="rotary-encoder-handwheel-interface">Handwheel encoder interface</h1>
    <p class="xb-lead">A receiver board for jogging handwheels and other 5&nbsp;V encoders. It accepts differential, push-pull or open-collector outputs on screw terminals, powers the encoder, and gives the controller clean 3.3&nbsp;V A, B and Z signals.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/rotary-encoder-handwheel-interface/rotary-encoder-handwheel-interface-diagram.webp" alt="Top view of the handwheel interface: an eight-way screw terminal, a receiver chip, rows of solder links and a socket on the left and right edges.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>
<div class="xb-stats">
  <div class="xb-stat"><b>A, B, Z</b><span>three receiver channels</span></div>
  <div class="xb-stat"><b>3 wiring styles</b><span>differential, push-pull, open collector</span></div>
  <div class="xb-stat"><b>&plusmn;200 mV</b><span>differential sensitivity</span></div>
  <div class="xb-stat"><b>5 V, 0.5 A</b><span>fused encoder supply</span></div>
  <div class="xb-stat"><b>Contacts 3, 4, 5</b><span>outputs to the controller</span></div>
  <div class="xb-stat"><b>70 &times; 55</b><span>millimetres, four M3 holes</span></div>
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
  A handwheel is not an emergency stop. Never connect a 12&nbsp;V or 24&nbsp;V powered encoder to this board.
</sl-alert>
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Turn the wheel only while the machine is idle.
</sl-alert>
{:/nomarkdown}

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>Conditioning a manual pulse generator or incremental encoder. Axis and step selectors and stop buttons of a pendant are not handled</td></tr>
    <tr><td>Inputs</td><td>AM26LV32E receiver on A+/A&minus;, B+/B&minus;, Z+/Z&minus;; absolute maximum &minus;14 to +14&nbsp;V</td></tr>
    <tr><td>Outputs</td><td>3.3&nbsp;V push-pull through 100&nbsp;&Omega; to contacts 3 (A), 4 (B) and 5 (Z)</td></tr>
    <tr><td>Encoder supply</td><td>5&nbsp;V from the socket through a 0.5&nbsp;A resettable fuse, with a transient suppressor</td></tr>
    <tr><td>Isolation</td><td>None</td></tr>
    <tr><td>Connectors</td><td>Eight-way 3.5&nbsp;mm screw terminal; two Gadgeteer type Y sockets (Samtec SHF-105, 1.27&nbsp;mm)</td></tr>
    <tr><td>Size</td><td>70 &times; 55&nbsp;mm, four M3 holes on a 60 &times; 40&nbsp;mm pattern</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> header GF with the mpg module</td></tr>
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
      <img src="/images/extensions/rotary-encoder-handwheel-interface/rotary-encoder-handwheel-interface-diagram.webp" alt="Top view of the handwheel interface with 11 numbered markers that are explained in the list below.">
      <a class="xb-mk" href="#tour-1" style="left:33.0%;top:87.7%" aria-label="1: handwheel terminal (j3)">1<span class="xb-pop"><b>Handwheel terminal (J3)</b> — 5V, 0V, A+, A&minus;, B+, B&minus;, Z+, Z&minus;.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-2" style="left:7.8%;top:43.9%" aria-label="2: input socket y in (j1)">2<span class="xb-pop"><b>Input socket Y IN (J1)</b> — A, B and Z on contacts 3, 4 and 5.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-3" style="left:92.2%;top:43.9%" aria-label="3: chain socket chain (j2)">3<span class="xb-pop"><b>Chain socket CHAIN (J2)</b> — Contacts 6 to 9 pass through.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:50.0%;top:35.1%" aria-label="4: receiver (u1)">4<span class="xb-pop"><b>Receiver (U1)</b> — AM26LV32E, powered from 3.3&nbsp;V.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:50.0%;top:64.9%" aria-label="5: termination links (jp10 to jp12)">5<span class="xb-pop"><b>Termination links (JP10 to JP12)</b> — Add 120&nbsp;&Omega; across a differential pair.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:54.9%;top:64.9%" aria-label="6: pull-up links (jp13 to jp15)">6<span class="xb-pop"><b>Pull-up links (JP13 to JP15)</b> — Add 2.2&nbsp;k&Omega; to 5&nbsp;V for open-collector outputs.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:59.7%;top:64.9%" aria-label="7: single-ended links (jp16 to jp18)">7<span class="xb-pop"><b>Single-ended links (JP16 to JP18)</b> — Tie the minus input to about 1.5&nbsp;V.</span></a>
      <a class="xb-mk xb-pl" href="#tour-8" style="left:20.8%;top:73.7%" aria-label="8: supply protection (f1, d1)">8<span class="xb-pop"><b>Supply protection (F1, D1)</b> — Resettable fuse and clamp on the encoder 5&nbsp;V.</span></a>
      <a class="xb-mk xb-pb" href="#tour-9" style="left:68.1%;top:34.2%" aria-label="9: threshold divider (r10, r11)">9<span class="xb-pop"><b>Threshold divider (R10, R11)</b> — Makes the single-ended reference.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-10" style="left:18.1%;top:28.1%" aria-label="10: chain links (jp3 to jp5)">10<span class="xb-pop"><b>Chain links (JP3 to JP5)</b> — Open as delivered.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-11" style="left:8.3%;top:10.5%" aria-label="11: mounting hole">11<span class="xb-pop"><b>Mounting hole</b> — One of four M3 holes.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Handwheel terminal (J3)</b> — 5V, 0V, A+, A&minus;, B+, B&minus;, Z+, Z&minus;.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Input socket Y IN (J1)</b> — A, B and Z on contacts 3, 4 and 5.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Chain socket CHAIN (J2)</b> — Contacts 6 to 9 pass through.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Receiver (U1)</b> — AM26LV32E, powered from 3.3&nbsp;V.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Termination links (JP10 to JP12)</b> — Add 120&nbsp;&Omega; across a differential pair.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Pull-up links (JP13 to JP15)</b> — Add 2.2&nbsp;k&Omega; to 5&nbsp;V for open-collector outputs.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Single-ended links (JP16 to JP18)</b> — Tie the minus input to about 1.5&nbsp;V.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Supply protection (F1, D1)</b> — Resettable fuse and clamp on the encoder 5&nbsp;V.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Threshold divider (R10, R11)</b> — Makes the single-ended reference.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Chain links (JP3 to JP5)</b> — Open as delivered.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Mounting hole</b> — One of four M3 holes.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

Check the handwheel&rsquo;s own label: pinouts and wire colours differ between makers.

### J3: handwheel terminal

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Terminal</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>5V</td><td>Encoder supply, 0.5 A maximum</td></tr>
    <tr><td>0V</td><td>Encoder ground</td></tr>
    <tr><td>A+, A&minus;</td><td>Channel A</td></tr>
    <tr><td>B+, B&minus;</td><td>Channel B</td></tr>
    <tr><td>Z+, Z&minus;</td><td>Index channel, if present</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J1: input socket (Y IN)

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>Use</th><th>Prime header GF</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Receiver supply</td><td>3.3 V</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Encoder supply</td><td>5 V</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">ENC_A</span></td><td>A output</td><td>PB1</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">ENC_B</span></td><td>B output</td><td>PJ4</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">ENC_Z</span></td><td>Z output</td><td>PA4</td></tr>
    <tr><td>6 to 9</td><td>Passed through</td><td>Not used</td><td>PG0, PJ3, PG1, PJ2</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Ground</td><td>GND</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Set the solder links per channel to suit the encoder output:

| Encoder output | Wire to | TERM link | PULLUP link | SINGLE link |
|---|---|---|---|---|
| Differential (line driver) | + and &minus; | closed for long cables | open | open |
| Push-pull or voltage | + only | open | open | closed |
| Open collector | + only | open | closed | closed |
| Channel not wired (Z) | nothing | open | open | open |

Never close the TERM and SINGLE links of the same channel.

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>A 5 V handwheel or encoder</b><span>Using less than 0.5&nbsp;A.</span></div>
  <div class="xb-card"><b>A socket with free interrupt pins</b><span>Prime header GF.</span></div>
  <div class="xb-card"><b>A ten-way cable</b><span>1.27&nbsp;mm Gadgeteer ribbon cable.</span></div>
  <div class="xb-card"><b>A soldering iron</b><span>For the solder links.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Minimum wiring">
<svg viewBox="0 0 1000 242" role="img" aria-labelledby="xb-wheel-wire-t">
<title id="xb-wheel-wire-t">Minimum wiring: +5 V to 5V, supply; 0 V to 0V, ground; A and /A to A+, A-, channel A; B and /B to B+, B-, channel B.</title>
<rect x="20" y="20" width="280" height="202" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="160.0" y="126.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea"></text>
<rect x="700" y="20" width="280" height="202" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="840.0" y="126.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea"></text>
<text x="160" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Handwheel</text>
<text x="840" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Terminal J3</text>
<path d="M300 84H700" stroke="#ff9f43" stroke-width="3" fill="none"/><circle cx="300" cy="84" r="5" fill="#ff9f43"/><circle cx="700" cy="84" r="5" fill="#ff9f43"/><text x="286" y="89" text-anchor="end" font-size="13" fill="#eaeaea">+5 V</text><text x="714" y="89" font-size="13" fill="#eaeaea">5V</text><text x="500" y="77" text-anchor="middle" font-size="12" fill="#b3b3b3">supply</text>
<path d="M300 122H700" stroke="#b3b3b3" stroke-width="3" fill="none"/><circle cx="300" cy="122" r="5" fill="#b3b3b3"/><circle cx="700" cy="122" r="5" fill="#b3b3b3"/><text x="286" y="127" text-anchor="end" font-size="13" fill="#eaeaea">0 V</text><text x="714" y="127" font-size="13" fill="#eaeaea">0V</text><text x="500" y="115" text-anchor="middle" font-size="12" fill="#b3b3b3">ground</text>
<path d="M300 160H700" stroke="#5fb3ff" stroke-width="3" fill="none"/><circle cx="300" cy="160" r="5" fill="#5fb3ff"/><circle cx="700" cy="160" r="5" fill="#5fb3ff"/><text x="286" y="165" text-anchor="end" font-size="13" fill="#eaeaea">A and /A</text><text x="714" y="165" font-size="13" fill="#eaeaea">A+, A-</text><text x="500" y="153" text-anchor="middle" font-size="12" fill="#b3b3b3">channel A</text>
<path d="M300 198H700" stroke="#6fe08a" stroke-width="3" fill="none"/><circle cx="300" cy="198" r="5" fill="#6fe08a"/><circle cx="700" cy="198" r="5" fill="#6fe08a"/><text x="286" y="203" text-anchor="end" font-size="13" fill="#eaeaea">B and /B</text><text x="714" y="203" font-size="13" fill="#eaeaea">B+, B-</text><text x="500" y="191" text-anchor="middle" font-size="12" fill="#b3b3b3">channel B</text>
</svg>
  </div>
  <figcaption>A differential handwheel. For single-ended types wire only the + terminals.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Identify the handwheel</h3>
    <p>Read its label: supply voltage and output type. Use it only if it runs from 5&nbsp;V.</p>
  </li>
  <li class="xb-step">
    <h3>Set the links</h3>
    <p>Follow the table in the pinout section, with the power off.</p>
  </li>
  <li class="xb-step">
    <h3>Wire the terminal</h3>
    <p>Then connect J1 to header GF.</p>
  </li>
  <li class="xb-step">
    <h3>Check the signals</h3>
    <p>Power up and turn the wheel slowly while measuring test points ENC_A and ENC_B.</p>
    <p class="xb-expect">By design each test point switches between about 0&nbsp;V and 3.3&nbsp;V.</p>
  </li>
  <li class="xb-step">
    <h3>Configure jogging</h3>
    <p>Add the entry below, restart, and turn the wheel with the machine idle.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Jog one axis from the wheel</td><td>MPG</td><td>The entry below</td></tr>
    <tr><td>Select axis or step size</td><td>None</td><td>Not provided by this module</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Add this to `config.ini` to move the X axis from the wheel:

```ini
[mpg]
wheel.enable = true
wheel.enca_pin = PB1
wheel.encb_pin = PJ4
wheel.axis = 0
```

`axis` is 0 for X, 1 for Y, 2 for Z, up to 5. Both pins must be able to raise interrupts on line numbers that nothing else uses (here 1 and 4); the startup messages report a failure. Each full quadrature cycle moves the motor by one step, so the movement is fine, and there is no step-size selector. Turn the wheel only while no job is running or queued: as published, the module stops handling the wheel after a movement arrives while the machine is busy. If the direction is wrong, exchange the two pin names. See the [mpg module](https://github.com/Smoothieware/SmoothieV2/tree/master/Firmware/src/modules/utils/mpg).

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
<svg viewBox="0 0 1000 200" role="img" aria-labelledby="xb-wheel-how-t">
<title id="xb-wheel-how-t">Each channel is compared by a receiver and sent to the controller at 3.3 V.</title>
<rect x="20.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="120.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J3 pair</text><text x="120.0" y="67.0" text-anchor="middle" font-size="12" fill="#b3b3b3">encoder</text>
<path d="M220.0 51H273.3" stroke="#b3b3b3" stroke-width="3"/><path d="M273.3 51l-9 -5v10z" fill="#b3b3b3"/>
<rect x="273.3" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="373.3" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Links</text><text x="373.3" y="67.0" text-anchor="middle" font-size="12" fill="#b3b3b3">term, pull-up, ref</text>
<path d="M473.3 51H526.6" stroke="#b3b3b3" stroke-width="3"/><path d="M526.6 51l-9 -5v10z" fill="#b3b3b3"/>
<rect x="526.7" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="626.7" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">U1 receiver</text><text x="626.7" y="67.0" text-anchor="middle" font-size="12" fill="#b3b3b3">compare</text>
<path d="M726.7 51H780.0" stroke="#b3b3b3" stroke-width="3"/><path d="M780.0 51l-9 -5v10z" fill="#b3b3b3"/>
<rect x="780.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="880.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J1</text><text x="880.0" y="67.0" text-anchor="middle" font-size="12" fill="#b3b3b3">3.3 V output</text>
<rect x="20.0" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="120.0" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J1 5 V</text><text x="120.0" y="157.0" text-anchor="middle" font-size="12" fill="#b3b3b3">socket</text>
<path d="M220.0 141H273.3" stroke="#b3b3b3" stroke-width="3"/><path d="M273.3 141l-9 -5v10z" fill="#b3b3b3"/>
<rect x="273.3" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="373.3" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">F1</text><text x="373.3" y="157.0" text-anchor="middle" font-size="12" fill="#b3b3b3">fuse</text>
<path d="M473.3 141H526.6" stroke="#b3b3b3" stroke-width="3"/><path d="M526.6 141l-9 -5v10z" fill="#b3b3b3"/>
<rect x="526.7" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="626.7" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">D1, C3</text><text x="626.7" y="157.0" text-anchor="middle" font-size="12" fill="#b3b3b3">clamp, store</text>
<path d="M726.7 141H780.0" stroke="#b3b3b3" stroke-width="3"/><path d="M780.0 141l-9 -5v10z" fill="#b3b3b3"/>
<rect x="780.0" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="880.0" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J3 5V</text><text x="880.0" y="157.0" text-anchor="middle" font-size="12" fill="#b3b3b3">encoder</text>
</svg>
  </div>
  <figcaption>Signal path above, encoder supply below.</figcaption>
</figure>
{:/nomarkdown}

A differential receiver outputs high when the plus input is more than 200&nbsp;mV above the minus input. That suits line-driver encoders directly. For single-ended encoders the minus input is tied to a reference of about 1.5&nbsp;V, and an optional pull-up serves open-collector outputs. An unwired input reads high.

## Solder links {#options}

All links ship open, which suits a differential encoder on a short cable.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Solder links">
<svg viewBox="0 0 1000 322" role="img" aria-labelledby="xb-wheel-jp-t">
<title id="xb-wheel-jp-t">Solder links as delivered: JP3 open; JP4 open; JP5 open; JP10 open; JP11 open; JP12 open; JP13 open; JP14 open; JP15 open; JP16 open; JP17 open; JP18 open.</title>
<rect x="20" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="72" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="114" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="108" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP3 · open</text><text x="108" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">chain contact 3</text>
<rect x="216" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="268" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="310" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="304" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP4 · open</text><text x="304" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">chain contact 4</text>
<rect x="412" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="464" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="506" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="500" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP5 · open</text><text x="500" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">chain contact 5</text>
<rect x="608" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="660" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="702" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="696" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP10 · open</text><text x="696" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">terminate A</text>
<rect x="804" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="856" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="898" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="892" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP11 · open</text><text x="892" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">terminate B</text>
<rect x="20" y="114" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="72" y="128" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="114" y="128" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="108" y="176" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP12 · open</text><text x="108" y="194" text-anchor="middle" font-size="11" fill="#b3b3b3">terminate Z</text>
<rect x="216" y="114" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="268" y="128" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="310" y="128" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="304" y="176" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP13 · open</text><text x="304" y="194" text-anchor="middle" font-size="11" fill="#b3b3b3">pull-up A</text>
<rect x="412" y="114" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="464" y="128" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="506" y="128" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="500" y="176" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP14 · open</text><text x="500" y="194" text-anchor="middle" font-size="11" fill="#b3b3b3">pull-up B</text>
<rect x="608" y="114" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="660" y="128" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="702" y="128" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="696" y="176" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP15 · open</text><text x="696" y="194" text-anchor="middle" font-size="11" fill="#b3b3b3">pull-up Z</text>
<rect x="804" y="114" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="856" y="128" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="898" y="128" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="892" y="176" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP16 · open</text><text x="892" y="194" text-anchor="middle" font-size="11" fill="#b3b3b3">single-ended A</text>
<rect x="20" y="218" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="72" y="232" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="114" y="232" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="108" y="280" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP17 · open</text><text x="108" y="298" text-anchor="middle" font-size="11" fill="#b3b3b3">single-ended B</text>
<rect x="216" y="218" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="268" y="232" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="310" y="232" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="304" y="280" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP18 · open</text><text x="304" y="298" text-anchor="middle" font-size="11" fill="#b3b3b3">single-ended Z</text>
</svg>
  </div>
  <figcaption>The links as delivered. Close one with a small blob of solder across both pads; open it by removing the solder or cutting the copper between the pads.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>What it does</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>JP3</td><td>Joins contact 3 to the chain socket</td><td>Open</td></tr>
    <tr><td>JP4</td><td>Joins contact 4 to the chain socket</td><td>Open</td></tr>
    <tr><td>JP5</td><td>Joins contact 5 to the chain socket</td><td>Open</td></tr>
    <tr><td>JP10</td><td>120 ohm across A</td><td>Open</td></tr>
    <tr><td>JP11</td><td>120 ohm across B</td><td>Open</td></tr>
    <tr><td>JP12</td><td>120 ohm across Z</td><td>Open</td></tr>
    <tr><td>JP13</td><td>2.2 k from A+ to 5 V</td><td>Open</td></tr>
    <tr><td>JP14</td><td>2.2 k from B+ to 5 V</td><td>Open</td></tr>
    <tr><td>JP15</td><td>2.2 k from Z+ to 5 V</td><td>Open</td></tr>
    <tr><td>JP16</td><td>Reference on A minus</td><td>Open</td></tr>
    <tr><td>JP17</td><td>Reference on B minus</td><td>Open</td></tr>
    <tr><td>JP18</td><td>Reference on Z minus</td><td>Open</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Chaining {#chaining}

Contacts 6 to 9 are free for a further board.

{::nomarkdown}
{% include _includes/extension-chain-figure.html id="xb-wheel" board="handwheel interface" in_label="Y IN" chain_label="CHAIN" lane1="pin 3, A" lane2="pin 4, B" lane3="pin 6, free" s1="open" s2="open" s3="closed" caption="Encoder signals stop here; pin 6 is wired straight through." %}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>On CHAIN</th></tr></thead>
  <tbody>
    <tr><td>1, 2, 10</td><td>Power and ground</td><td>Passed on</td></tr>
    <tr><td>3 to 5</td><td>A, B, Z</td><td>Stopped by open links</td></tr>
    <tr><td>6 to 9</td><td>Free</td><td>Passed on</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Likely cause</th><th>What to check</th></tr></thead>
  <tbody>
    <tr><td>No signal on a test point</td><td>Encoder unpowered or wrong link setting</td><td>Test point +5V_ENC; link table</td></tr>
    <tr><td>Test point stays high</td><td>Input not wired, or single-ended link missing</td><td>Wiring and SINGLE link</td></tr>
    <tr><td>Wheel moves nothing</td><td>Configuration not loaded or pins refused</td><td>Startup messages</td></tr>
    <tr><td>Wheel stopped working</td><td>It was turned while the machine was busy</td><td>Reset the controller</td></tr>
    <tr><td>Counts erratically</td><td>Noise on a long cable</td><td>Use differential wiring and close TERM links</td></tr>
    <tr><td>5 V disappears</td><td>Fuse tripped by overload or short</td><td>Remove power, find the fault, let it cool</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The board has no indicator lights; use the test points.

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/rotary-encoder-handwheel-interface/rotary-encoder-handwheel-interface-schematic.pdf">Schematic (PDF)</a></td><td>The circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/rotary-encoder-handwheel-interface/rotary-encoder-handwheel-interface-bom.csv">Parts list (CSV)</a></td><td>Every component with its value, footprint and part number where one is chosen</td></tr>
    <tr><td><a href="/images/extensions/rotary-encoder-handwheel-interface/rotary-encoder-handwheel-interface-diagram.webp">Board drawing (WebP)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side. 

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-wheel-mount-t">
  <title id="xb-wheel-mount-t">Mounting drawing of the handwheel interface, component side: outline 70 by 55 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="263.6" y="78.0" width="432.7" height="340.0" rx="6.2" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M263.6 56H696.4"/><path d="M263.6 50V62"/><path d="M696.4 50V62"/><path d="M722.4 78.0V418.0"/><path d="M716.4 78.0h12"/><path d="M716.4 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">70</text>
  <text x="734.4" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">55</text>
  <circle cx="263.6" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="251.6" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M205.6 104.0h30" fill="none"/><path d="M239.6 104.0l-8 -4v8z"/><path d="M205.6 104.0v30" fill="none"/><path d="M205.6 138.0l-4 -8h8z"/></g>
  <text x="243.6" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="201.6" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="294.5" cy="108.9" r="9.9" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M280.7 108.9h27.8M294.5 95.0v27.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="284.7" y="138.8" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.00</text>
  <circle cx="665.5" cy="108.9" r="9.9" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M651.6 108.9h27.8M665.5 95.0v27.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="675.3" y="138.8" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  65.00, 5.00</text>
  <circle cx="294.5" cy="356.2" r="9.9" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M280.7 356.2h27.8M294.5 342.3v27.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="284.7" y="336.3" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 45.00</text>
  <circle cx="665.5" cy="356.2" r="9.9" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M651.6 356.2h27.8M665.5 342.3v27.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="675.3" y="336.3" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">4</tspan>  65.00, 45.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 70 × 55&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>65.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>5.00</td><td>45.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>65.00</td><td>45.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Every figure is a design value, a calculated or simulated value, or a manufacturer&rsquo;s data sheet value, as the last column says. A dash means no figure is given.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis</th></tr></thead>
  <tbody>
    <tr><td>Logic supply current</td><td>3.3 V</td><td>&mdash;</td><td>11 mA</td><td>20 mA</td><td>Data sheet and calculation</td></tr>
    <tr><td>Encoder supply current</td><td>5 V</td><td>&mdash;</td><td>&mdash;</td><td>0.5 A</td><td>Fuse rating</td></tr>
    <tr><td>Signal input</td><td>J3</td><td>&minus;14 V</td><td>&mdash;</td><td>+14 V</td><td>TI absolute maximum</td></tr>
    <tr><td>Differential threshold</td><td>U1</td><td>&minus;200 mV</td><td>&mdash;</td><td>+200 mV</td><td>TI data sheet</td></tr>
    <tr><td>Receiver delay</td><td>U1</td><td>&mdash;</td><td>16 ns</td><td>26 ns</td><td>TI data sheet</td></tr>
    <tr><td>Single-ended threshold</td><td>Reference</td><td>0.8 V</td><td>1.26 V</td><td>1.6 V</td><td>Simulated, loaded case; limits used for the check</td></tr>
    <tr><td>Open-collector high level</td><td>Pull-up fitted</td><td>1.7 V</td><td>3.76 V</td><td>5 V</td><td>Simulated</td></tr>
    <tr><td>Rise with 1 nF cable</td><td>Pull-up fitted</td><td>&mdash;</td><td>0.88 &micro;s</td><td>10 &micro;s</td><td>Simulated</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Component stress limits

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Part</th><th>Limit</th><th>Use on this board</th></tr></thead>
  <tbody>
    <tr><td>Encoder supply</td><td>0.5 A hold</td><td>Keep the handwheel below it</td></tr>
    <tr><td>Signal inputs</td><td>&plusmn;14 V absolute maximum</td><td>Never connect 24 V</td></tr>
    <tr><td>Termination resistors</td><td>0.25 W</td><td>About 0.1 W at 3.5 V differential</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: simulation {#simulation}

The single-ended and open-collector input cases were simulated with ngspice.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Simulated results against limits">
<svg viewBox="0 0 1000 238" role="img" aria-labelledby="xb-wheel-sim-t">
<title id="xb-wheel-sim-t">Each simulated value (yellow mark) against its allowed range (green band).</title>
<text x="385" y="41" text-anchor="end" font-size="13" fill="#eaeaea">Input low level with open-collector output</text>
<path d="M400 36H860" stroke="#404040" stroke-width="10" stroke-linecap="round"/><path d="M400.0 36H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M416.5 23v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="41" font-size="13" font-weight="700" fill="#ffcc33">52.2&nbsp;mV</text>
<text x="385" y="93" text-anchor="end" font-size="13" fill="#eaeaea">Input high level, pull-up fitted</text>
<path d="M400 88H860" stroke="#404040" stroke-width="10" stroke-linecap="round"/><path d="M444.5 88H815.5" stroke="#2f8f5b" stroke-width="10"/><path d="M675.9 75v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="93" font-size="13" font-weight="700" fill="#ffcc33">3.76&nbsp;V</text>
<text x="385" y="145" text-anchor="end" font-size="13" fill="#eaeaea">Rise to the 1.7 V threshold with 1 nF cable</text>
<path d="M400 140H860" stroke="#404040" stroke-width="10" stroke-linecap="round"/><path d="M400.0 140H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M436.0 127v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="145" font-size="13" font-weight="700" fill="#ffcc33">0.88&nbsp;&micro;s</text>
<text x="385" y="189" text-anchor="end" font-size="13" fill="#eaeaea">Single-ended threshold, pessimistic loading to</text>
<text x="385" y="205" text-anchor="end" font-size="13" fill="#eaeaea">ground</text>
<path d="M400 192H860" stroke="#404040" stroke-width="10" stroke-linecap="round"/><path d="M444.5 192H815.5" stroke="#2f8f5b" stroke-width="10"/><path d="M659.5 179v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="197" font-size="13" font-weight="700" fill="#ffcc33">1.26&nbsp;V</text>
</svg>
  </div>
  <figcaption>Simulated value (yellow) against the limit used for it (green). Each bar has its own scale.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Result</th><th>Simulated value</th><th>Limit</th><th>Outcome</th></tr></thead>
  <tbody>
    <tr><td>Input low level with open-collector output</td><td>52.2&nbsp;mV</td><td>at most 1.3&nbsp;V</td><td>Within</td></tr>
    <tr><td>Input high level, pull-up fitted</td><td>3.76&nbsp;V</td><td>1.7&nbsp;V to 5&nbsp;V</td><td>Within</td></tr>
    <tr><td>Rise to the 1.7 V threshold with 1 nF cable</td><td>0.88&nbsp;&micro;s</td><td>at most 10&nbsp;&micro;s</td><td>Within</td></tr>
    <tr><td>Single-ended threshold, pessimistic loading to ground</td><td>1.26&nbsp;V</td><td>800&nbsp;mV to 1.6&nbsp;V</td><td>Within</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Not simulated: the receiver itself, cable noise and the protection parts.

## Appendix: datasheet {#datasheets}

The first page of the receiver data sheet. Click the page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/rotary-encoder-handwheel-interface/datasheets/am26lv32e.pdf"><img src="/images/extensions/rotary-encoder-handwheel-interface/datasheets/am26lv32e-page1.png" alt="First page of the AM26LV32E quadruple differential line receiver datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/rotary-encoder-handwheel-interface/datasheets/am26lv32e.pdf">AM26LV32E quadruple differential line receiver</a> — Texas Instruments, 28 pages.</figcaption>
</figure>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
