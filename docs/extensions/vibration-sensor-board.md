---
layout: default
title: "Vibration sensor"
description: "A spring vibration switch with a pulse stretcher on a Gadgeteer socket: pinout, wiring, button box configuration, limits and files."
permalink: /extensions/vibration-sensor-board
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Sensors and inputs</p>
    <h1 id="vibration-sensor-board">Vibration sensor</h1>
    <p class="xb-lead">A very simple knock and shake detector. A spring switch closes for an instant when the board is shaken; the circuit stretches that into a pulse of about 34&nbsp;ms, long enough for the controller to notice and run a command.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/vibration-sensor-board/vibration-sensor-board-diagram.png" alt="Top view of the vibration sensor board: a ten-contact socket on the left and right edges and the cylindrical spring switch lying near the bottom edge.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>
<div class="xb-stats">
  <div class="xb-stat"><b>On/off</b><span>SW-18020P spring vibration switch</span></div>
  <div class="xb-stat"><b>about 34 ms</b><span>simulated pulse from a 2&nbsp;ms contact</span></div>
  <div class="xb-stat"><b>High = shake</b><span>digital output on contact 3</span></div>
  <div class="xb-stat"><b>&lt; 2 mA</b><span>calculated, from 3.3&nbsp;V</span></div>
  <div class="xb-stat"><b>2 sockets</b><span>type X input and chain</span></div>
  <div class="xb-stat"><b>50 &times; 55</b><span>millimetres, four M3 holes</span></div>
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
    <tr><td>Purpose</td><td>Detecting a knock or that a machine is moving. Not a measuring instrument and not a crash-protection or safety device</td></tr>
    <tr><td>Sensor</td><td>SW-18020P spring switch, mounted lying down</td></tr>
    <tr><td>Output</td><td>Digital, high while vibration is detected, through 100&nbsp;&Omega;</td></tr>
    <tr><td>Supply</td><td>3.3&nbsp;V from the socket, under 2&nbsp;mA</td></tr>
    <tr><td>Indicator</td><td>Green LED lit while the output is high</td></tr>
    <tr><td>Sockets</td><td>Two 10-contact Gadgeteer type X sockets (Samtec SHF-105, 1.27&nbsp;mm): input and chain</td></tr>
    <tr><td>Size</td><td>50 &times; 55&nbsp;mm, four M3 holes on a 40 &times; 40&nbsp;mm pattern</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> header GF through the button box module</td></tr>
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
      <img src="/images/extensions/vibration-sensor-board/vibration-sensor-board-diagram.png" alt="Top view of the vibration sensor board with 10 numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:10.8%;top:40.4%" aria-label="1: input socket x in (j1)">1<span class="xb-pop"><b>Input socket X IN (J1)</b> — The type X socket to the controller; the signal is on contact 3.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-2" style="left:89.2%;top:40.4%" aria-label="2: chain socket chain (j2)">2<span class="xb-pop"><b>Chain socket CHAIN (J2)</b> — Passes the unused contacts on.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:36.5%;top:82.5%" aria-label="3: vibration switch (sw1)">3<span class="xb-pop"><b>Vibration switch (SW1)</b> — A spring around a pin inside a small tube; sensitivity depends on how the board is oriented.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:44.2%;top:50.9%" aria-label="4: pulse stretcher (r1, r2, c1)">4<span class="xb-pop"><b>Pulse stretcher (R1, R2, C1)</b> — A closing switch empties the capacitor quickly; the 470&nbsp;k&Omega; resistor refills it slowly.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:61.5%;top:50.9%" aria-label="5: schmitt inverter (u1)">5<span class="xb-pop"><b>Schmitt inverter (U1)</b> — SN74LVC1G14 turns the slow capacitor voltage into a clean digital pulse.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:61.5%;top:38.6%" aria-label="6: output resistor (r3)">6<span class="xb-pop"><b>Output resistor (R3)</b> — 100&nbsp;&Omega; in series with contact 3.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:67.3%;top:75.4%" aria-label="7: indicator (d1, r4)">7<span class="xb-pop"><b>Indicator (D1, R4)</b> — Green LED, lit while the output is high.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:67.3%;top:64.9%" aria-label="8: led link (jp20)">8<span class="xb-pop"><b>LED link (JP20)</b> — Closed as delivered; open it to switch the LED off.</span></a>
      <a class="xb-mk xb-pb" href="#tour-9" style="left:26.9%;top:40.4%" aria-label="9: chain link (jp3)">9<span class="xb-pop"><b>Chain link (JP3)</b> — Open as delivered, keeping the signal off the chain.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-10" style="left:11.5%;top:10.5%" aria-label="10: mounting hole">10<span class="xb-pop"><b>Mounting hole</b> — One of four M3 holes. Mount rigidly to the part being watched.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Input socket X IN (J1)</b> — The type X socket to the controller; the signal is on contact 3.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket CHAIN (J2)</b> — Passes the unused contacts on.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Vibration switch (SW1)</b> — A spring around a pin inside a small tube; sensitivity depends on how the board is oriented.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Pulse stretcher (R1, R2, C1)</b> — A closing switch empties the capacitor quickly; the 470&nbsp;k&Omega; resistor refills it slowly.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Schmitt inverter (U1)</b> — SN74LVC1G14 turns the slow capacitor voltage into a clean digital pulse.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Output resistor (R3)</b> — 100&nbsp;&Omega; in series with contact 3.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Indicator (D1, R4)</b> — Green LED, lit while the output is high.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>LED link (JP20)</b> — Closed as delivered; open it to switch the LED off.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Chain link (JP3)</b> — Open as delivered, keeping the signal off the chain.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Mounting hole</b> — One of four M3 holes. Mount rigidly to the part being watched.</div></li>
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
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Logic and LED supply</td><td>3.3 V</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Passed to the chain only</td><td>5 V</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">VIB</span></td><td>High while shaking</td><td>PB1</td></tr>
    <tr><td>4 to 9</td><td>Passed through</td><td>Not used</td><td>PJ4, PA4, PG0, PJ3, PG1, PJ2</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Ground</td><td>GND</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>A controller socket</b><span>Prime header GF, or any input pin through three wires.</span></div>
  <div class="xb-card"><b>A ten-way cable</b><span>1.27&nbsp;mm Gadgeteer ribbon cable.</span></div>
  <div class="xb-card"><b>A rigid mounting</b><span>The vibration must reach the board.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Minimum wiring">
<svg viewBox="0 0 1000 204" role="img" aria-labelledby="xb-vib-wire-t">
<title id="xb-vib-wire-t">Minimum wiring: contact 1 to contact 1, 3.3 V; PB1, contact 3 to contact 3, vibration; contact 10 to contact 10, ground.</title>
<rect x="20" y="20" width="280" height="164" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="160.0" y="107.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2"></text>
<rect x="700" y="20" width="280" height="164" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="840.0" y="107.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2"></text>
<text x="160" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Prime header GF (J37)</text>
<text x="840" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Vibration sensor J1</text>
<path d="M300 84H700" stroke="#ff9f43" stroke-width="3" fill="none"/><circle cx="300" cy="84" r="5" fill="#ff9f43"/><circle cx="700" cy="84" r="5" fill="#ff9f43"/><text x="286" y="89" text-anchor="end" font-size="13" fill="#e6ebf2">contact 1</text><text x="714" y="89" font-size="13" fill="#e6ebf2">contact 1</text><text x="500" y="77" text-anchor="middle" font-size="12" fill="#a9b4c2">3.3 V</text>
<path d="M300 122H700" stroke="#5fb3ff" stroke-width="3" fill="none"/><circle cx="300" cy="122" r="5" fill="#5fb3ff"/><circle cx="700" cy="122" r="5" fill="#5fb3ff"/><text x="286" y="127" text-anchor="end" font-size="13" fill="#e6ebf2">PB1, contact 3</text><text x="714" y="127" font-size="13" fill="#e6ebf2">contact 3</text><text x="500" y="115" text-anchor="middle" font-size="12" fill="#a9b4c2">vibration</text>
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
    <p>Screw it firmly to the part to be monitored.</p>
  </li>
  <li class="xb-step">
    <h3>Connect with the power off</h3>
    <p>Plug J1 into header GF.</p>
  </li>
  <li class="xb-step">
    <h3>Tap the board</h3>
    <p>Power up and tap it gently while watching the LED.</p>
    <p class="xb-expect">By design the LED flashes briefly for each knock; the simulated pulse is about 34&nbsp;ms.</p>
  </li>
  <li class="xb-step">
    <h3>Add the configuration</h3>
    <p>Use the entry below, restart and tap again with a terminal open.</p>
    <p class="xb-expect">The configured command should run when the output goes high.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Run a command on a knock</td><td>Button box</td><td>The entry below</td></tr>
    <tr><td>Measure vibration strength</td><td>None</td><td>The board only gives on/off</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Add this to `config.ini`. The pulse is shorter than the button box default polling period of 50&nbsp;ms (20&nbsp;Hz), so raise the polling rate. Replace the `echo` command with your own.

```ini
[button box]
common.poll_frequency_hz = 100
shake.enable = true
shake.pin = PB1
shake.press = echo vibration detected
```

See the [SmoothieV2 button box module](https://github.com/Smoothieware/SmoothieV2/tree/master/Firmware/src/modules/utils/buttonbox). The common polling rate applies to every button in the section.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
<svg viewBox="0 0 1000 110" role="img" aria-labelledby="xb-vib-how-t">
<title id="xb-vib-how-t">Switch closure discharges a capacitor; a Schmitt inverter turns it into a high output pulse.</title>
<rect x="20.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="120.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">SW1</text><text x="120.0" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">closes on shake</text>
<path d="M220.0 51H273.3" stroke="#a9b4c2" stroke-width="3"/><path d="M273.3 51l-9 -5v10z" fill="#a9b4c2"/>
<rect x="273.3" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="373.3" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">R1, R2, C1</text><text x="373.3" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">stretch</text>
<path d="M473.3 51H526.6" stroke="#a9b4c2" stroke-width="3"/><path d="M526.6 51l-9 -5v10z" fill="#a9b4c2"/>
<rect x="526.7" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="626.7" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">U1</text><text x="626.7" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">invert</text>
<path d="M726.7 51H780.0" stroke="#a9b4c2" stroke-width="3"/><path d="M780.0 51l-9 -5v10z" fill="#a9b4c2"/>
<rect x="780.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="880.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J1 contact 3</text><text x="880.0" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">high = shake</text>
</svg>
  </div>
  <figcaption>One signal path.</figcaption>
</figure>
{:/nomarkdown}

At rest the capacitor is charged to 3.3&nbsp;V and the inverter output is low. A shake closes the spring switch for a couple of milliseconds, which discharges the capacitor through 100&nbsp;&Omega;. The output goes high and stays high while the 470&nbsp;k&Omega; resistor recharges the capacitor up to the inverter threshold. Repeated shaking keeps the output high.

## Solder links {#options}

Leave JP3 open while the sensor is in use. Open JP20 if the light is unwanted.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Solder links">
<svg viewBox="0 0 1000 114" role="img" aria-labelledby="xb-vib-jp-t">
<title id="xb-vib-jp-t">Solder links as delivered: JP3 open; JP20 closed.</title>
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
    <tr><td>JP20</td><td>Powers the indicator LED from the output</td><td>Closed</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Chaining {#chaining}

A further board on CHAIN can use contacts 4 to 9.

{::nomarkdown}
{% include _includes/extension-chain-figure.html id="xb-vib" board="vibration sensor board" in_label="X IN" chain_label="CHAIN" lane1="pin 3, vibration" lane2="pin 4, free" lane3="pin 5, free" s1="open" s2="closed" s3="closed" caption="Pin 3 stops here; pins 4 and 5 are wired straight through." %}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>On CHAIN</th></tr></thead>
  <tbody>
    <tr><td>1, 2, 10</td><td>Power and ground</td><td>Passed on</td></tr>
    <tr><td>3</td><td>Vibration</td><td>Stopped by open JP3</td></tr>
    <tr><td>4 to 9</td><td>Free</td><td>Passed on</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Likely cause</th><th>What to check</th></tr></thead>
  <tbody>
    <tr><td>LED never lights</td><td>No 3.3 V, JP20 open, or vibration too weak</td><td>Test point 3.3 V, then tap harder or turn the board</td></tr>
    <tr><td>LED lights but no command runs</td><td>Polling too slow or wrong pin</td><td>Set the polling rate to 100 Hz and use PB1</td></tr>
    <tr><td>Triggers constantly</td><td>Machine vibration or loose mounting</td><td>Mount elsewhere; the switch has no adjustment</td></tr>
    <tr><td>Misses some knocks</td><td>Knock along an insensitive direction</td><td>Change the board orientation</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-green"></span>Green (D1)</th></tr></thead>
  <tbody>
    <tr><td>Lit means</td><td>Output high: vibration detected</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/vibration-sensor-board/vibration-sensor-board-schematic.pdf">Schematic (PDF)</a></td><td>The circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/vibration-sensor-board/vibration-sensor-board-bom.csv">Parts list (CSV)</a></td><td>Every component with its value, footprint and part number where one is chosen</td></tr>
    <tr><td><a href="/images/extensions/vibration-sensor-board/vibration-sensor-board-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side. 

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-vib-mount-t">
  <title id="xb-vib-mount-t">Mounting drawing of the vibration sensor board, component side: outline 50 by 55 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="325.5" y="78.0" width="309.1" height="340.0" rx="6.2" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M325.5 56H634.5"/><path d="M325.5 50V62"/><path d="M634.5 50V62"/><path d="M660.5 78.0V418.0"/><path d="M654.5 78.0h12"/><path d="M654.5 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">50</text>
  <text x="672.5" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">55</text>
  <circle cx="325.5" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="313.5" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M267.5 104.0h30" fill="none"/><path d="M301.5 104.0l-8 -4v8z"/><path d="M267.5 104.0v30" fill="none"/><path d="M267.5 138.0l-4 -8h8z"/></g>
  <text x="305.5" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="263.5" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="356.4" cy="108.9" r="9.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M342.5 108.9h27.8M356.4 95.0v27.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="346.5" y="138.8" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.00</text>
  <circle cx="603.6" cy="108.9" r="9.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M589.7 108.9h27.8M603.6 95.0v27.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="613.5" y="138.8" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  45.00, 5.00</text>
  <circle cx="356.4" cy="356.2" r="9.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M342.5 356.2h27.8M356.4 342.3v27.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="346.5" y="336.3" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 45.00</text>
  <circle cx="603.6" cy="356.2" r="9.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M589.7 356.2h27.8M603.6 342.3v27.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="613.5" y="336.3" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  45.00, 45.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 50 × 55&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
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
    <tr><td>Supply voltage</td><td>J1 contact 1</td><td>&mdash;</td><td>3.3 V</td><td>&mdash;</td><td>Design</td></tr>
    <tr><td>Supply current</td><td>3.3 V</td><td>&mdash;</td><td>&mdash;</td><td>2 mA</td><td>Calculated, LED lit</td></tr>
    <tr><td>Output pulse from 2 ms contact</td><td>Contact 3</td><td>&mdash;</td><td>34 ms</td><td>&mdash;</td><td>Simulated; depends on inverter threshold</td></tr>
    <tr><td>Peak contact current</td><td>SW1</td><td>&mdash;</td><td>25 mA</td><td>&mdash;</td><td>Simulated</td></tr>
    <tr><td>Output series resistance</td><td>Contact 3</td><td>&mdash;</td><td>100 &Omega;</td><td>&mdash;</td><td>Design</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Component stress limits

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Part</th><th>Limit</th><th>Use on this board</th></tr></thead>
  <tbody>
    <tr><td>Switch contact current</td><td>50 mA (limit used)</td><td>25 mA peak (simulated)</td></tr>
    <tr><td>Capacitors</td><td>16 V</td><td>3.3 V</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: simulation {#simulation}

The pulse stretcher was simulated with ngspice for a 2&nbsp;ms switch closure, with an assumed 1.6&nbsp;V inverter threshold.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Simulated results against limits">
<svg viewBox="0 0 1000 186" role="img" aria-labelledby="xb-vib-sim-t">
<title id="xb-vib-sim-t">Each simulated value (yellow mark) against its allowed range (green band).</title>
<text x="385" y="41" text-anchor="end" font-size="13" fill="#e6ebf2">Output pulse from a 2 ms contact closure</text>
<path d="M400 36H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M444.5 36H815.5" stroke="#2f8f5b" stroke-width="10"/><path d="M599.4 23v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="41" font-size="13" font-weight="700" fill="#ffcc33">34&nbsp;ms</text>
<text x="385" y="93" text-anchor="end" font-size="13" fill="#e6ebf2">Peak contact current against 50 mA rating</text>
<path d="M400 88H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M400.0 88H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M608.5 75v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="93" font-size="13" font-weight="700" fill="#ffcc33">25&nbsp;mA</text>
<text x="385" y="145" text-anchor="end" font-size="13" fill="#e6ebf2">Node level while closed</text>
<path d="M400 140H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M400.0 140H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M400.9 127v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="145" font-size="13" font-weight="700" fill="#ffcc33">913&nbsp;&micro;V</text>
</svg>
  </div>
  <figcaption>Simulated value (yellow) against the limit used for it (green). Each bar has its own scale.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Result</th><th>Simulated value</th><th>Limit</th><th>Outcome</th></tr></thead>
  <tbody>
    <tr><td>Output pulse from a 2 ms contact closure</td><td>34&nbsp;ms</td><td>15&nbsp;ms to 60&nbsp;ms</td><td>Within</td></tr>
    <tr><td>Peak contact current against 50 mA rating</td><td>25&nbsp;mA</td><td>at most 50&nbsp;mA</td><td>Within</td></tr>
    <tr><td>Node level while closed</td><td>913&nbsp;&micro;V</td><td>at most 400&nbsp;mV</td><td>Within</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Not simulated: mechanical sensitivity, frequency response, contact bounce and the spread of the inverter threshold.

## Appendix: datasheet {#datasheets}

The first page of each manufacturer data sheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/vibration-sensor-board/datasheets/sw18020p.pdf"><img src="/images/extensions/vibration-sensor-board/datasheets/sw18020p-page1.png" alt="First page of the SW-180 series vibration switch datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/vibration-sensor-board/datasheets/sw18020p.pdf">SW-180 series vibration switch</a> — BaiLing, 3 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/vibration-sensor-board/datasheets/sn74lvc1g14.pdf"><img src="/images/extensions/vibration-sensor-board/datasheets/sn74lvc1g14-page1.png" alt="First page of the SN74LVC1G14 single Schmitt-trigger inverter datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/vibration-sensor-board/datasheets/sn74lvc1g14.pdf">SN74LVC1G14 single Schmitt-trigger inverter</a> — Texas Instruments, 52 pages.</figcaption>
</figure>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
