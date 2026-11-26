---
layout: default
title: "Infrared remote receiver"
description: "A 38 kHz TSOP38238 infrared receiver on a Gadgeteer socket: pinout, wiring, limits and files."
permalink: /extensions/infrared-remote-receiver
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Sensors and inputs</p>
    <h1 id="infrared-remote-receiver">Infrared remote receiver</h1>
    <p class="xb-lead">A receiver for ordinary 38&nbsp;kHz infrared remote controls. It removes the carrier and gives a clean digital signal that is low while a burst is arriving. Turning that signal into key presses needs a decoder, which the firmware does not have.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/infrared-remote-receiver/infrared-remote-receiver-diagram.png" alt="Top view of the infrared receiver board: a ten-contact socket on the left and right edges and the receiver module below the middle.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>
<div class="xb-stats">
  <div class="xb-stat"><b>38 kHz</b><span>Vishay TSOP38238 receiver</span></div>
  <div class="xb-stat"><b>Idle high</b><span>output low during a burst</span></div>
  <div class="xb-stat"><b>0.45 mA</b><span>receiver maximum at 3.3&nbsp;V</span></div>
  <div class="xb-stat"><b>1 LED</b><span>shows reception</span></div>
  <div class="xb-stat"><b>2 sockets</b><span>type X input and chain</span></div>
  <div class="xb-stat"><b>50 &times; 45</b><span>millimetres, four M3 holes</span></div>
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
{:/nomarkdown}

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>Receiving a hand remote for menus or macros with your own decoder. Never for emergency stop or any safety function</td></tr>
    <tr><td>Receiver</td><td>Vishay TSOP38238, 38&nbsp;kHz carrier</td></tr>
    <tr><td>Output</td><td>Demodulated digital signal through 100&nbsp;&Omega;, active low, internal 30&nbsp;k&Omega; pull-up</td></tr>
    <tr><td>Supply</td><td>3.3&nbsp;V from the socket through a 100&nbsp;&Omega; and 4.7&nbsp;&micro;F filter</td></tr>
    <tr><td>Indicator</td><td>Green LED lit during reception</td></tr>
    <tr><td>Sockets</td><td>Two 10-contact Gadgeteer type X sockets (Samtec SHF-105, 1.27&nbsp;mm): input and chain</td></tr>
    <tr><td>Size</td><td>50 &times; 45&nbsp;mm, four M3 holes on a 40 &times; 30&nbsp;mm pattern</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> header GF electrically; no firmware decoder</td></tr>
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
      <img src="/images/extensions/infrared-remote-receiver/infrared-remote-receiver-diagram.png" alt="Top view of the infrared receiver board with 9 numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:10.8%;top:44.7%" aria-label="1: input socket x in (j1)">1<span class="xb-pop"><b>Input socket X IN (J1)</b> — The type X socket to the controller; the signal is on contact 3.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-2" style="left:89.2%;top:44.7%" aria-label="2: chain socket chain (j2)">2<span class="xb-pop"><b>Chain socket CHAIN (J2)</b> — Passes the unused contacts on.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:45.1%;top:72.3%" aria-label="3: receiver module (u1)">3<span class="xb-pop"><b>Receiver module (U1)</b> — Point its dome towards the remote.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:53.8%;top:57.4%" aria-label="4: supply filter (r1, c1, c2)">4<span class="xb-pop"><b>Supply filter (R1, C1, C2)</b> — Keeps supply noise away from the sensitive receiver.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:40.4%;top:57.4%" aria-label="5: output resistor (r2)">5<span class="xb-pop"><b>Output resistor (R2)</b> — 100&nbsp;&Omega; in series with contact 3.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:69.2%;top:50.0%" aria-label="6: indicator (d1, r3)">6<span class="xb-pop"><b>Indicator (D1, R3)</b> — Lights while the output is low, that is while a signal arrives.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:69.2%;top:36.2%" aria-label="7: led link (jp20)">7<span class="xb-pop"><b>LED link (JP20)</b> — Closed as delivered; open it to switch the LED off.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:26.9%;top:44.7%" aria-label="8: chain link (jp3)">8<span class="xb-pop"><b>Chain link (JP3)</b> — Open as delivered, keeping the signal off the chain.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-9" style="left:11.5%;top:12.8%" aria-label="9: mounting hole">9<span class="xb-pop"><b>Mounting hole</b> — One of four M3 holes.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Input socket X IN (J1)</b> — The type X socket to the controller; the signal is on contact 3.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket CHAIN (J2)</b> — Passes the unused contacts on.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Receiver module (U1)</b> — Point its dome towards the remote.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Supply filter (R1, C1, C2)</b> — Keeps supply noise away from the sensitive receiver.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Output resistor (R2)</b> — 100&nbsp;&Omega; in series with contact 3.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Indicator (D1, R3)</b> — Lights while the output is low, that is while a signal arrives.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>LED link (JP20)</b> — Closed as delivered; open it to switch the LED off.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Chain link (JP3)</b> — Open as delivered, keeping the signal off the chain.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Mounting hole</b> — One of four M3 holes.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

Check contact numbering with the power removed before wiring by hand.

### J1: input socket (X IN)

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>Use</th><th>Prime header GF</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Receiver supply</td><td>3.3 V</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Passed to the chain only</td><td>5 V</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">IR_OUT</span></td><td>Low during a burst</td><td>PB1</td></tr>
    <tr><td>4 to 9</td><td>Passed through</td><td>Not used</td><td>PJ4, PA4, PG0, PJ3, PG1, PJ2</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Ground</td><td>GND</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>A controller socket</b><span>An interrupt-capable input, such as contact 3 of Prime header GF.</span></div>
  <div class="xb-card"><b>A ten-way cable</b><span>1.27&nbsp;mm Gadgeteer ribbon cable.</span></div>
  <div class="xb-card"><b>A 38 kHz remote</b><span>Other carrier frequencies work poorly or not at all.</span></div>
  <div class="xb-card"><b>Your own decoder</b><span>None is supplied.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Minimum wiring">
<svg viewBox="0 0 1000 204" role="img" aria-labelledby="xb-irrx-wire-t">
<title id="xb-irrx-wire-t">Minimum wiring: contact 1 to contact 1, 3.3 V; PB1, contact 3 to contact 3, received signal; contact 10 to contact 10, ground.</title>
<rect x="20" y="20" width="280" height="164" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="160.0" y="107.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2"></text>
<rect x="700" y="20" width="280" height="164" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="840.0" y="107.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2"></text>
<text x="160" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Prime header GF (J37)</text>
<text x="840" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">IR receiver J1</text>
<path d="M300 84H700" stroke="#ff9f43" stroke-width="3" fill="none"/><circle cx="300" cy="84" r="5" fill="#ff9f43"/><circle cx="700" cy="84" r="5" fill="#ff9f43"/><text x="286" y="89" text-anchor="end" font-size="13" fill="#e6ebf2">contact 1</text><text x="714" y="89" font-size="13" fill="#e6ebf2">contact 1</text><text x="500" y="77" text-anchor="middle" font-size="12" fill="#a9b4c2">3.3 V</text>
<path d="M300 122H700" stroke="#5fb3ff" stroke-width="3" fill="none"/><circle cx="300" cy="122" r="5" fill="#5fb3ff"/><circle cx="700" cy="122" r="5" fill="#5fb3ff"/><text x="286" y="127" text-anchor="end" font-size="13" fill="#e6ebf2">PB1, contact 3</text><text x="714" y="127" font-size="13" fill="#e6ebf2">contact 3</text><text x="500" y="115" text-anchor="middle" font-size="12" fill="#a9b4c2">received signal</text>
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
    <p>Give the receiver dome a clear view of where the remote will be used, away from strong lamps.</p>
  </li>
  <li class="xb-step">
    <h3>Connect with the power off</h3>
    <p>Plug J1 into header GF.</p>
  </li>
  <li class="xb-step">
    <h3>Press a remote button</h3>
    <p>Power up and aim the remote at the dome.</p>
    <p class="xb-expect">By design the green LED flickers while the button is held.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Decode remote keys</td><td>None</td><td>No SmoothieV2 infrared decoder exists</td></tr>
    <tr><td>Check that signals arrive</td><td>None</td><td>Watch the LED or test point OUT</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

There is nothing to add to `config.ini`. Polled input modules are too slow to decode remote codes, whose pulses last well under a millisecond.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
<svg viewBox="0 0 1000 110" role="img" aria-labelledby="xb-irrx-how-t">
<title id="xb-irrx-how-t">Infrared bursts are demodulated by the receiver and passed to the controller.</title>
<rect x="20.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="120.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Remote</text><text x="120.0" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">38 kHz bursts</text>
<path d="M220.0 51H273.3" stroke="#a9b4c2" stroke-width="3"/><path d="M273.3 51l-9 -5v10z" fill="#a9b4c2"/>
<rect x="273.3" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="373.3" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">U1 TSOP38238</text><text x="373.3" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">filter, demodulate</text>
<path d="M473.3 51H526.6" stroke="#a9b4c2" stroke-width="3"/><path d="M526.6 51l-9 -5v10z" fill="#a9b4c2"/>
<rect x="526.7" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="626.7" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">R2 100 ohm</text><text x="626.7" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">protection</text>
<path d="M726.7 51H780.0" stroke="#a9b4c2" stroke-width="3"/><path d="M780.0 51l-9 -5v10z" fill="#a9b4c2"/>
<rect x="780.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="880.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J1 contact 3</text><text x="880.0" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">low = burst</text>
</svg>
  </div>
  <figcaption>One signal path.</figcaption>
</figure>
{:/nomarkdown}

The module contains the photodiode, amplifier, 38&nbsp;kHz filter and demodulator. Its output rests high and pulls low for the length of each received burst, so the timing of the pulses carries the remote&rsquo;s code. The supply passes through a resistor and capacitors as the data sheet advises for noisy rails.

## Solder links {#options}

Leave JP3 open while the receiver is in use. Open JP20 if the light is unwanted.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Solder links">
<svg viewBox="0 0 1000 114" role="img" aria-labelledby="xb-irrx-jp-t">
<title id="xb-irrx-jp-t">Solder links as delivered: JP3 open; JP20 closed.</title>
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
{% include _includes/extension-chain-figure.html id="xb-irrx" board="infrared receiver board" in_label="X IN" chain_label="CHAIN" lane1="pin 3, IR signal" lane2="pin 4, free" lane3="pin 5, free" s1="open" s2="closed" s3="closed" caption="Pin 3 stops here; pins 4 and 5 are wired straight through." %}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>On CHAIN</th></tr></thead>
  <tbody>
    <tr><td>1, 2, 10</td><td>Power and ground</td><td>Passed on</td></tr>
    <tr><td>3</td><td>IR signal</td><td>Stopped by open JP3</td></tr>
    <tr><td>4 to 9</td><td>Free</td><td>Passed on</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Likely cause</th><th>What to check</th></tr></thead>
  <tbody>
    <tr><td>LED never flickers</td><td>Wrong carrier, flat remote battery, no power or JP20 open</td><td>Try another remote; check test points 3.3 V and OUT</td></tr>
    <tr><td>Short range</td><td>Sunlight or strong lamps, dome off axis</td><td>Shade the receiver and aim it</td></tr>
    <tr><td>LED flickers with no remote</td><td>Interfering light source</td><td>Move away from lamps</td></tr>
    <tr><td>Controller sees nothing</td><td>Wrong pin, or no decoder running</td><td>Confirm PB1 and your decoder</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-green"></span>Green (D1)</th></tr></thead>
  <tbody>
    <tr><td>Lit means</td><td>Infrared signal being received</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/infrared-remote-receiver/infrared-remote-receiver-schematic.pdf">Schematic (PDF)</a></td><td>The circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/infrared-remote-receiver/infrared-remote-receiver-bom.csv">Parts list (CSV)</a></td><td>Every component with its value, footprint and part number where one is chosen</td></tr>
    <tr><td><a href="/images/extensions/infrared-remote-receiver/infrared-remote-receiver-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side. 

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-irrx-mount-t">
  <title id="xb-irrx-mount-t">Mounting drawing of the infrared receiver board, component side: outline 50 by 45 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="291.1" y="78.0" width="377.8" height="340.0" rx="7.6" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M291.1 56H668.9"/><path d="M291.1 50V62"/><path d="M668.9 50V62"/><path d="M694.9 78.0V418.0"/><path d="M688.9 78.0h12"/><path d="M688.9 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">50</text>
  <text x="706.9" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">45</text>
  <circle cx="291.1" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="279.1" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M233.1 104.0h30" fill="none"/><path d="M267.1 104.0l-8 -4v8z"/><path d="M233.1 104.0v30" fill="none"/><path d="M233.1 138.0l-4 -8h8z"/></g>
  <text x="271.1" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="229.1" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="328.9" cy="115.8" r="12.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M312.8 115.8h32.2M328.9 99.7v32.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="316.8" y="147.9" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.00</text>
  <circle cx="631.1" cy="115.8" r="12.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M615.0 115.8h32.2M631.1 99.7v32.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="643.2" y="147.9" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  45.00, 5.00</text>
  <circle cx="328.9" cy="342.4" r="12.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M312.8 342.4h32.2M328.9 326.4v32.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="316.8" y="320.4" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 35.00</text>
  <circle cx="631.1" cy="342.4" r="12.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M615.0 342.4h32.2M631.1 326.4v32.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="643.2" y="320.4" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  45.00, 35.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 50 × 45&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>45.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>5.00</td><td>35.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>45.00</td><td>35.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Every figure is a design value, a calculated or simulated value, or a manufacturer&rsquo;s data sheet value, as the last column says. A dash means no figure is given.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis</th></tr></thead>
  <tbody>
    <tr><td>Supply voltage</td><td>J1 contact 1</td><td>&mdash;</td><td>3.3 V</td><td>&mdash;</td><td>Design; receiver accepts 2.0 to 5.5 V</td></tr>
    <tr><td>Receiver current</td><td>U1</td><td>0.25 mA</td><td>&mdash;</td><td>0.45 mA</td><td>Vishay data sheet</td></tr>
    <tr><td>LED current while receiving</td><td>D1</td><td>&mdash;</td><td>0.3 mA</td><td>&mdash;</td><td>Calculated</td></tr>
    <tr><td>Carrier frequency</td><td>U1</td><td>&mdash;</td><td>38 kHz</td><td>&mdash;</td><td>Vishay data sheet</td></tr>
    <tr><td>Internal pull-up</td><td>Output</td><td>&mdash;</td><td>30 k&Omega;</td><td>&mdash;</td><td>Vishay data sheet</td></tr>
    <tr><td>Supply filter drop</td><td>R1</td><td>&mdash;</td><td>45 mV</td><td>&mdash;</td><td>Simulated</td></tr>
    <tr><td>Ripple at receiver, 200 mV peak to peak in</td><td>U1 supply</td><td>&mdash;</td><td>0.66 mV</td><td>&mdash;</td><td>Simulated at 100 kHz</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Component stress limits

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Part</th><th>Limit</th><th>Use on this board</th></tr></thead>
  <tbody>
    <tr><td>Receiver supply</td><td>2.0 to 5.5 V operating</td><td>3.3 V</td></tr>
    <tr><td>Capacitors</td><td>10 V and 16 V</td><td>3.3 V</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: simulation {#simulation}

The supply filter was simulated with ngspice with 100&nbsp;kHz ripple.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Simulated results against limits">
<svg viewBox="0 0 1000 134" role="img" aria-labelledby="xb-irrx-sim-t">
<title id="xb-irrx-sim-t">Each simulated value (yellow mark) against its allowed range (green band).</title>
<text x="385" y="41" text-anchor="end" font-size="13" fill="#e6ebf2">Ripple at the receiver from 200 mV peak to peak</text>
<path d="M400 36H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M400.0 36H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M454.5 23v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="41" font-size="13" font-weight="700" fill="#ffcc33">663&nbsp;&micro;V</text>
<text x="385" y="93" text-anchor="end" font-size="13" fill="#e6ebf2">Resistor voltage drop</text>
<path d="M400 88H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M400.0 88H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M584.8 75v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="93" font-size="13" font-weight="700" fill="#ffcc33">45&nbsp;mV</text>
</svg>
  </div>
  <figcaption>Simulated value (yellow) against the limit used for it (green). Each bar has its own scale.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Result</th><th>Simulated value</th><th>Limit</th><th>Outcome</th></tr></thead>
  <tbody>
    <tr><td>Ripple at the receiver from 200 mV peak to peak</td><td>663&nbsp;&micro;V</td><td>at most 5&nbsp;mV</td><td>Within</td></tr>
    <tr><td>Resistor voltage drop</td><td>45&nbsp;mV</td><td>at most 100&nbsp;mV</td><td>Within</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Not simulated: optical reception, range, ambient light rejection and output timing, because no model is available.

## Appendix: datasheet {#datasheets}

The first page of the manufacturer data sheet. Click the page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/infrared-remote-receiver/datasheets/tsop382.pdf"><img src="/images/extensions/infrared-remote-receiver/datasheets/tsop382-page1.png" alt="First page of the TSOP382 infrared receiver modules datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/infrared-remote-receiver/datasheets/tsop382.pdf">TSOP382 infrared receiver modules</a> — Vishay, 8 pages.</figcaption>
</figure>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
