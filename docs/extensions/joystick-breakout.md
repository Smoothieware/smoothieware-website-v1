---
layout: default
title: "Thumb joystick breakout"
description: "A two-axis thumb joystick with a push switch on a Gadgeteer analogue socket: pinout, wiring, the switch configuration, limits and files."
permalink: /extensions/joystick-breakout
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Sensors and inputs</p>
    <h1 id="joystick-breakout">Thumb joystick breakout</h1>
    <p class="xb-lead">A console-style thumb joystick on a chainable analogue board: two potentiometers give the X and Y position as voltages, and pressing the stick closes a switch. The controller firmware can act on the switch today; reading the two axes needs a driver that does not exist yet.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/joystick-breakout/joystick-breakout-diagram.png" alt="Top view of the thumb joystick board: a ten-contact socket on the left and right edges and the square joystick with its round cap in the middle.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>
<div class="xb-stats">
  <div class="xb-stat"><b>2 axes + switch</b><span>Alps RKJXV thumb joystick, 10&nbsp;k&Omega; per axis</span></div>
  <div class="xb-stat"><b>0 to 3.3 V</b><span>ratiometric outputs, centre near half supply</span></div>
  <div class="xb-stat"><b>&plusmn;23&deg;</b><span>operating angle of the stick</span></div>
  <div class="xb-stat"><b>&lt; 1 mA</b><span>calculated, from the 3.3&nbsp;V pin only</span></div>
  <div class="xb-stat"><b>2 sockets</b><span>type A input and chain</span></div>
  <div class="xb-stat"><b>50 &times; 40</b><span>millimetres, four M3 holes</span></div>
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
    <tr><td>Purpose</td><td>Jogging two machine axes by hand, menu navigation, pointing a camera or small robot</td></tr>
    <tr><td>Joystick</td><td>Alps Alpine RKJXV1224005: two linear 10&nbsp;k&Omega; (&plusmn;30&nbsp;%) potentiometers and a push switch</td></tr>
    <tr><td>Outputs</td><td>X and Y analogue voltages through a 1&nbsp;k&Omega; and 10&nbsp;nF filter each; switch active low with a 10&nbsp;k&Omega; pull-up</td></tr>
    <tr><td>Supply</td><td>3.3&nbsp;V from the socket. 5&nbsp;V only passes through to the chain socket</td></tr>
    <tr><td>Sockets</td><td>Two 10-contact Gadgeteer type A sockets (Samtec SHF-105, 1.27&nbsp;mm): input and chain</td></tr>
    <tr><td>Test points</td><td>Six on the underside: 3.3&nbsp;V, ground, 5&nbsp;V, X, Y and switch</td></tr>
    <tr><td>Size</td><td>50 &times; 40&nbsp;mm, four M3 mounting holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a>, header GH: switch through the button box module; no firmware driver for the axes</td></tr>
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
      <img src="/images/extensions/joystick-breakout/joystick-breakout-diagram.png" alt="Top view of the thumb joystick board with 9 numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pl" href="#tour-1" style="left:10.8%;top:50.0%" aria-label="1: input socket a in (j1)">1<span class="xb-pop"><b>Input socket A IN (J1)</b> — The type A socket to the controller. Contact 3 is X, 4 is Y and 6 is the switch.</span></a>
      <a class="xb-mk xb-pr" href="#tour-2" style="left:89.2%;top:50.0%" aria-label="2: chain socket a chain (j2)">2<span class="xb-pop"><b>Chain socket A CHAIN (J2)</b> — Passes the unused contacts to a further board. The three contacts this board uses are cut off from it by open solder links.</span></a>
      <a class="xb-mk xb-pb" href="#tour-3" style="left:50.0%;top:47.6%" aria-label="3: thumb joystick (rv1)">3<span class="xb-pop"><b>Thumb joystick (RV1)</b> — Two potentiometers and a push switch in one metal-framed body. The cap is not part of the joystick part number: choose one for its 4&nbsp;mm shaft.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:28.8%;top:29.8%" aria-label="4: wiper resistors (r1, r2)">4<span class="xb-pop"><b>Wiper resistors (R1, R2)</b> — 1&nbsp;k&Omega; in series with the X and Y wipers. They also limit the current if a controller pin is driven by mistake.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:28.8%;top:44.0%" aria-label="5: axis filter capacitors (c1, c2)">5<span class="xb-pop"><b>Axis filter capacitors (C1, C2)</b> — 10&nbsp;nF to ground on the X and Y outputs, to remove high-frequency noise.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:72.4%;top:80.2%" aria-label="6: switch network (r3, r4, c3)">6<span class="xb-pop"><b>Switch network (R3, R4, C3)</b> — 10&nbsp;k&Omega; pull-up, 1&nbsp;k&Omega; series resistor and 100&nbsp;nF capacitor: a clean active-low signal.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:76.0%;top:29.8%" aria-label="7: supply capacitors (c4, c5)">7<span class="xb-pop"><b>Supply capacitors (C4, C5)</b> — 100&nbsp;nF and 10&nbsp;&micro;F on the 3.3&nbsp;V rail that feeds both potentiometers.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:25.0%;top:76.2%" aria-label="8: chain links (jp3, jp4, jp6)">8<span class="xb-pop"><b>Chain links (JP3, JP4, JP6)</b> — Open as delivered. Closing one hands that contact to the chain socket.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-9" style="left:11.5%;top:14.3%" aria-label="9: mounting hole">9<span class="xb-pop"><b>Mounting hole</b> — One of four M3 holes in the corners, not connected to ground.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Input socket A IN (J1)</b> — The type A socket to the controller. Contact 3 is X, 4 is Y and 6 is the switch.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket A CHAIN (J2)</b> — Passes the unused contacts to a further board. The three contacts this board uses are cut off from it by open solder links.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Thumb joystick (RV1)</b> — Two potentiometers and a push switch in one metal-framed body. The cap is not part of the joystick part number: choose one for its 4&nbsp;mm shaft.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Wiper resistors (R1, R2)</b> — 1&nbsp;k&Omega; in series with the X and Y wipers. They also limit the current if a controller pin is driven by mistake.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Axis filter capacitors (C1, C2)</b> — 10&nbsp;nF to ground on the X and Y outputs, to remove high-frequency noise.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Switch network (R3, R4, C3)</b> — 10&nbsp;k&Omega; pull-up, 1&nbsp;k&Omega; series resistor and 100&nbsp;nF capacitor: a clean active-low signal.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Supply capacitors (C4, C5)</b> — 100&nbsp;nF and 10&nbsp;&micro;F on the 3.3&nbsp;V rail that feeds both potentiometers.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Chain links (JP3, JP4, JP6)</b> — Open as delivered. Closing one hands that contact to the chain socket.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Mounting hole</b> — One of four M3 holes in the corners, not connected to ground.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

The Gadgeteer socket numbers contacts 1 to 10; check numbering with the power removed before wiring by hand.

### J1: input socket (A IN)

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>Use</th><th>Prime header GH</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Feeds the potentiometers and pull-up</td><td>3.3 V</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Passed to the chain socket only</td><td>5 V</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">X_OUT</span></td><td>X axis voltage</td><td>PC3 (ADC1_5)</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">Y_OUT</span></td><td>Y axis voltage</td><td>PA3 (ADC1_6)</td></tr>
    <tr><td>5</td><td>Passed through</td><td>Not used here</td><td>PC2 (ADC1_4)</td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">SW_OUT</span></td><td>Switch, low when pressed</td><td>PF2</td></tr>
    <tr><td>7, 8, 9</td><td>Passed through</td><td>Not used here</td><td>PI10, PH7, PB12</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Ground</td><td>GND</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J2: chain socket (A CHAIN)

Contacts keep their numbers. Contacts 1, 2, 5, 7, 8, 9 and 10 are joined straight to J1.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>On J2</th></tr></thead>
  <tbody>
    <tr><td>1, 2, 10</td><td>3.3 V, 5 V and ground, always connected</td></tr>
    <tr><td>3, 4</td><td>Only with JP3 or JP4 closed</td></tr>
    <tr><td>6</td><td>Only with JP6 closed</td></tr>
    <tr><td>5, 7, 8, 9</td><td>Always passed through</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>A controller socket</b><span>Prime header GH, whose contacts 3 and 4 are analogue inputs.</span></div>
  <div class="xb-card"><b>A ten-way cable</b><span>A 1.27&nbsp;mm Gadgeteer ribbon cable, or four to six wires.</span></div>
  <div class="xb-card"><b>A thumb cap</b><span>For the 4&nbsp;mm shaft; check it clears nearby parts at full tilt.</span></div>
  <div class="xb-card"><b>For the axes</b><span>Firmware or host code that reads two analogue inputs. None is supplied.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Minimum wiring">
<svg viewBox="0 0 1000 280" role="img" aria-labelledby="xb-joy-wire-t">
<title id="xb-joy-wire-t">Minimum wiring: contact 1 to contact 1, 3.3 V; PC3, contact 3 to contact 3, X axis; PA3, contact 4 to contact 4, Y axis; PF2, contact 6 to contact 6, switch; contact 10 to contact 10, ground.</title>
<rect x="20" y="20" width="280" height="240" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="160.0" y="145.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2"></text>
<rect x="700" y="20" width="280" height="240" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="840.0" y="145.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2"></text>
<text x="160" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Prime header GH (J39)</text>
<text x="840" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Joystick J1 (A IN)</text>
<path d="M300 84H700" stroke="#ff9f43" stroke-width="3" fill="none"/><circle cx="300" cy="84" r="5" fill="#ff9f43"/><circle cx="700" cy="84" r="5" fill="#ff9f43"/><text x="286" y="89" text-anchor="end" font-size="13" fill="#e6ebf2">contact 1</text><text x="714" y="89" font-size="13" fill="#e6ebf2">contact 1</text><text x="500" y="77" text-anchor="middle" font-size="12" fill="#a9b4c2">3.3 V</text>
<path d="M300 122H700" stroke="#5fb3ff" stroke-width="3" fill="none"/><circle cx="300" cy="122" r="5" fill="#5fb3ff"/><circle cx="700" cy="122" r="5" fill="#5fb3ff"/><text x="286" y="127" text-anchor="end" font-size="13" fill="#e6ebf2">PC3, contact 3</text><text x="714" y="127" font-size="13" fill="#e6ebf2">contact 3</text><text x="500" y="115" text-anchor="middle" font-size="12" fill="#a9b4c2">X axis</text>
<path d="M300 160H700" stroke="#5fb3ff" stroke-width="3" fill="none"/><circle cx="300" cy="160" r="5" fill="#5fb3ff"/><circle cx="700" cy="160" r="5" fill="#5fb3ff"/><text x="286" y="165" text-anchor="end" font-size="13" fill="#e6ebf2">PA3, contact 4</text><text x="714" y="165" font-size="13" fill="#e6ebf2">contact 4</text><text x="500" y="153" text-anchor="middle" font-size="12" fill="#a9b4c2">Y axis</text>
<path d="M300 198H700" stroke="#6fe08a" stroke-width="3" fill="none"/><circle cx="300" cy="198" r="5" fill="#6fe08a"/><circle cx="700" cy="198" r="5" fill="#6fe08a"/><text x="286" y="203" text-anchor="end" font-size="13" fill="#e6ebf2">PF2, contact 6</text><text x="714" y="203" font-size="13" fill="#e6ebf2">contact 6</text><text x="500" y="191" text-anchor="middle" font-size="12" fill="#a9b4c2">switch</text>
<path d="M300 236H700" stroke="#a9b4c2" stroke-width="3" fill="none"/><circle cx="300" cy="236" r="5" fill="#a9b4c2"/><circle cx="700" cy="236" r="5" fill="#a9b4c2"/><text x="286" y="241" text-anchor="end" font-size="13" fill="#e6ebf2">contact 10</text><text x="714" y="241" font-size="13" fill="#e6ebf2">contact 10</text><text x="500" y="229" text-anchor="middle" font-size="12" fill="#a9b4c2">ground</text>
</svg>
  </div>
  <figcaption>The five connections the board needs. A straight ten-way cable makes all of them.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Mount the board</h3>
    <p>Use the four M3 holes with insulating spacers, and leave room for the cap to tilt 23&nbsp;degrees in every direction.</p>
  </li>
  <li class="xb-step">
    <h3>Connect with the power off</h3>
    <p>Plug J1 into header GH. Never connect the element supply or a signal to 5&nbsp;V.</p>
  </li>
  <li class="xb-step">
    <h3>Check the voltages</h3>
    <p>Power up and measure between ground and test points X and Y with the stick released.</p>
    <p class="xb-expect">By the joystick data sheet each axis rests between 41&nbsp;% and 59&nbsp;% of 3.3&nbsp;V, about 1.35 to 1.95&nbsp;V; at full tilt it goes below 26&nbsp;% or above 74&nbsp;%.</p>
  </li>
  <li class="xb-step">
    <h3>Add the switch to the configuration</h3>
    <p>Use the button box entry in the next section, restart, and press the stick while watching a terminal.</p>
    <p class="xb-expect">The configured command should run once per press. Which direction raises X or Y is not given by the files: note it on your board and swap it in your own code if needed.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Act on a press of the stick</td><td>Button box</td><td>The entry below</td></tr>
    <tr><td>Read the X and Y position</td><td>None</td><td>No firmware module reads a joystick</td></tr>
    <tr><td>Jog axes with the stick</td><td>None</td><td>No analogue jogging exists</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Add this to `config.ini`. `PF2!` inverts the pin, so the button counts as pressed when the board pulls it low. Replace the `echo` command with the command you want to run.

```ini
[button box]
stick.enable = true
stick.pin = PF2!
stick.press = echo joystick pressed
```

The syntax follows the [SmoothieV2 button box module](https://github.com/Smoothieware/SmoothieV2/tree/master/Firmware/src/modules/utils/buttonbox) and its sample configuration. SmoothieV2 names the analogue inputs on PC3 and PA3 `ADC1_5` and `ADC1_6`, but has no module that turns them into jogging or menu movement.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
<svg viewBox="0 0 1000 290" role="img" aria-labelledby="xb-joy-how-t">
<title id="xb-joy-how-t">Each potentiometer wiper passes through a resistor and capacitor filter to an analogue contact; the switch pulls a resistor-held line low.</title>
<rect x="20.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="120.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Stick X</text><text x="120.0" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">10 k element</text>
<path d="M220.0 51H400.0" stroke="#a9b4c2" stroke-width="3"/><path d="M400.0 51l-9 -5v10z" fill="#a9b4c2"/>
<rect x="400.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="500.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">1 k + 10 nF</text><text x="500.0" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">filter</text>
<path d="M600.0 51H780.0" stroke="#a9b4c2" stroke-width="3"/><path d="M780.0 51l-9 -5v10z" fill="#a9b4c2"/>
<rect x="780.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="880.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J1 contact 3</text><text x="880.0" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">ADC1_5</text>
<rect x="20.0" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="120.0" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Stick Y</text><text x="120.0" y="157.0" text-anchor="middle" font-size="12" fill="#a9b4c2">10 k element</text>
<path d="M220.0 141H400.0" stroke="#a9b4c2" stroke-width="3"/><path d="M400.0 141l-9 -5v10z" fill="#a9b4c2"/>
<rect x="400.0" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="500.0" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">1 k + 10 nF</text><text x="500.0" y="157.0" text-anchor="middle" font-size="12" fill="#a9b4c2">filter</text>
<path d="M600.0 141H780.0" stroke="#a9b4c2" stroke-width="3"/><path d="M780.0 141l-9 -5v10z" fill="#a9b4c2"/>
<rect x="780.0" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="880.0" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J1 contact 4</text><text x="880.0" y="157.0" text-anchor="middle" font-size="12" fill="#a9b4c2">ADC1_6</text>
<rect x="20.0" y="200" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="120.0" y="227.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Push switch</text><text x="120.0" y="247.0" text-anchor="middle" font-size="12" fill="#a9b4c2">closes to ground</text>
<path d="M220.0 231H400.0" stroke="#a9b4c2" stroke-width="3"/><path d="M400.0 231l-9 -5v10z" fill="#a9b4c2"/>
<rect x="400.0" y="200" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="500.0" y="227.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">1 k, 10 k, 100 nF</text><text x="500.0" y="247.0" text-anchor="middle" font-size="12" fill="#a9b4c2">debounce</text>
<path d="M600.0 231H780.0" stroke="#a9b4c2" stroke-width="3"/><path d="M780.0 231l-9 -5v10z" fill="#a9b4c2"/>
<rect x="780.0" y="200" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="880.0" y="227.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J1 contact 6</text><text x="880.0" y="247.0" text-anchor="middle" font-size="12" fill="#a9b4c2">PF2</text>
</svg>
  </div>
  <figcaption>Three independent paths; there is no active electronics on the board.</figcaption>
</figure>
{:/nomarkdown}

Each axis is a voltage divider across the socket&rsquo;s 3.3&nbsp;V. Because the controller&rsquo;s converter measures against the same supply, a slightly high or low rail does not move the reading: the output is a fraction of the supply. The data sheet asks for a load above 1&nbsp;M&Omega; on the wiper, so the board adds no resistor to ground. Releasing the stick springs it to centre, but the centre voltage varies from part to part, so software needs a calibration step and a dead band.

The switch line is held at 3.3&nbsp;V by 10&nbsp;k&Omega; and pulled down through 1&nbsp;k&Omega; when pressed, which gives about 0.3&nbsp;V. The 1&nbsp;k&Omega; also limits the capacitor&rsquo;s discharge through the contact.

## Solder links {#options}

Three links keep the joystick&rsquo;s own signals off the chain. Leave them open while the joystick is in use: another device on the same contact would corrupt the reading.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Solder links">
<svg viewBox="0 0 1000 114" role="img" aria-labelledby="xb-joy-jp-t">
<title id="xb-joy-jp-t">Solder links as delivered: JP3 open; JP4 open; JP6 open.</title>
<rect x="20" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="72" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="114" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="108" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP3 · open</text><text x="108" y="90" text-anchor="middle" font-size="11" fill="#a9b4c2">chain contact 3</text>
<rect x="216" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="268" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="310" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="304" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP4 · open</text><text x="304" y="90" text-anchor="middle" font-size="11" fill="#a9b4c2">chain contact 4</text>
<rect x="412" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="464" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="506" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="500" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP6 · open</text><text x="500" y="90" text-anchor="middle" font-size="11" fill="#a9b4c2">chain contact 6</text>
</svg>
  </div>
  <figcaption>The links as delivered. Close one with a small blob of solder across both pads; open it by removing the solder or cutting the copper between the pads.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>What it does</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>JP3</td><td>Joins J1 contact 3 (X) to J2 contact 3</td><td>Open</td></tr>
    <tr><td>JP4</td><td>Joins J1 contact 4 (Y) to J2 contact 4</td><td>Open</td></tr>
    <tr><td>JP6</td><td>Joins J1 contact 6 (switch) to J2 contact 6</td><td>Open</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Chaining {#chaining}

A second board plugged into A CHAIN can use contacts 5, 7, 8 and 9. Contacts 3, 4 and 6 belong to the joystick. The chain does not create new controller pins.

{::nomarkdown}
{% include _includes/extension-chain-figure.html id="xb-joy" board="thumb joystick board" in_label="A IN" chain_label="A CHAIN" lane1="pin 3, X axis" lane2="pin 4, Y axis" lane3="pin 5, free" s1="open" s2="open" s3="closed" caption="Pins 3 and 4 stop at this board; pin 5 is wired straight through." %}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>On A CHAIN</th></tr></thead>
  <tbody>
    <tr><td>1, 2</td><td>3.3 V, 5 V</td><td>Passed on</td></tr>
    <tr><td>3, 4</td><td>X, Y</td><td>Stopped by open links</td></tr>
    <tr><td>5</td><td>Free analogue input</td><td>Passed on</td></tr>
    <tr><td>6</td><td>Switch</td><td>Stopped by an open link</td></tr>
    <tr><td>7, 8, 9</td><td>Free</td><td>Passed on</td></tr>
    <tr><td>10</td><td>GND</td><td>Passed on</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Likely cause</th><th>What to check</th></tr></thead>
  <tbody>
    <tr><td>Both axes read near zero</td><td>No 3.3 V</td><td>Test point 3.3 V; cable seating and orientation</td></tr>
    <tr><td>Centre is not half the supply</td><td>Normal part spread (41 to 59 %)</td><td>Calibrate the centre with the stick released and use a dead band</td></tr>
    <tr><td>An axis moves the wrong way</td><td>Direction is not fixed by the design files</td><td>Invert it in your software</td></tr>
    <tr><td>X and Y are exchanged</td><td>Axis assignment taken from the part drawing</td><td>Swap them in your software</td></tr>
    <tr><td>Switch never triggers</td><td>Wrong pin or missing inversion</td><td>Use PF2! and check test point SW goes to about 0.3 V when pressed</td></tr>
    <tr><td>Switch is always active</td><td>Pin not inverted</td><td>Add ! after the pin name</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The board has no indicator lights; the underside test points show every signal.

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/joystick-breakout/joystick-breakout-schematic.pdf">Schematic (PDF)</a></td><td>The circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/joystick-breakout/joystick-breakout-bom.csv">Parts list (CSV)</a></td><td>Every component with its value, footprint and part number where one is chosen</td></tr>
    <tr><td><a href="/images/extensions/joystick-breakout/joystick-breakout-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
    <tr><td><a href="/images/extensions/joystick-breakout/joystick-breakout-populated-top.png">3D view, top (PNG)</a></td><td>Rendered from the design files; the joystick body is an approximate model</td></tr>
    <tr><td><a href="/images/extensions/joystick-breakout/joystick-breakout-populated-isometric.png">3D view, angled (PNG)</a></td><td>Rendered from the design files; the joystick body is an approximate model</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side. Keep metal hardware under the board clear of the joystick&rsquo;s soldered tails.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-joy-mount-t">
  <title id="xb-joy-mount-t">Mounting drawing of the thumb joystick board, component side: outline 50 by 40 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="267.5" y="78.0" width="425.0" height="340.0" rx="8.5" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M267.5 56H692.5"/><path d="M267.5 50V62"/><path d="M692.5 50V62"/><path d="M718.5 78.0V418.0"/><path d="M712.5 78.0h12"/><path d="M712.5 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">50</text>
  <text x="730.5" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">40</text>
  <circle cx="267.5" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="255.5" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M209.5 104.0h30" fill="none"/><path d="M243.5 104.0l-8 -4v8z"/><path d="M209.5 104.0v30" fill="none"/><path d="M209.5 138.0l-4 -8h8z"/></g>
  <text x="247.5" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="205.5" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="310.0" cy="120.5" r="13.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M292.4 120.5h35.2M310.0 102.9v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="296.4" y="154.1" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.00</text>
  <circle cx="650.0" cy="120.5" r="13.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M632.4 120.5h35.2M650.0 102.9v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="663.6" y="154.1" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  45.00, 5.00</text>
  <circle cx="310.0" cy="375.5" r="13.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M292.4 375.5h35.2M310.0 357.9v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="296.4" y="351.9" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 35.00</text>
  <circle cx="650.0" cy="375.5" r="13.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M632.4 375.5h35.2M650.0 357.9v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="663.6" y="351.9" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  45.00, 35.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 50 × 40&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
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
    <tr><td>Supply voltage</td><td>J1 contact 1</td><td>&mdash;</td><td>3.3 V</td><td>5 V</td><td>Alps data sheet element maximum 5 V DC; the board is designed for 3.3 V</td></tr>
    <tr><td>Element resistance</td><td>RV1</td><td>7 k&Omega;</td><td>10 k&Omega;</td><td>13 k&Omega;</td><td>Alps data sheet</td></tr>
    <tr><td>Supply current, stick released</td><td>3.3 V</td><td>&mdash;</td><td>0.66 mA</td><td>0.94 mA</td><td>Calculated; upper at &minus;30 % element resistance</td></tr>
    <tr><td>Extra current while pressed</td><td>3.3 V</td><td>&mdash;</td><td>0.30 mA</td><td>&mdash;</td><td>Calculated</td></tr>
    <tr><td>Centre output</td><td>Contacts 3, 4</td><td>41 %</td><td>50 %</td><td>59 %</td><td>Alps data sheet, share of supply</td></tr>
    <tr><td>Full-tilt output</td><td>Contacts 3, 4</td><td>26 % or lower</td><td>&mdash;</td><td>74 % or higher</td><td>Alps data sheet, share of supply</td></tr>
    <tr><td>Operating angle</td><td>Stick</td><td>&mdash;</td><td>23&deg;</td><td>&mdash;</td><td>Alps data sheet</td></tr>
    <tr><td>Axis settling to 0.1 %</td><td>Contacts 3, 4</td><td>&mdash;</td><td>0.24 ms</td><td>&mdash;</td><td>Simulated, no controller load</td></tr>
    <tr><td>Switch low level</td><td>Contact 6</td><td>&mdash;</td><td>0.30 V</td><td>&mdash;</td><td>Simulated</td></tr>
    <tr><td>Wiper load</td><td>Contacts 3, 4</td><td>1 M&Omega;</td><td>&mdash;</td><td>&mdash;</td><td>Alps data sheet recommendation</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Component stress limits

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Part</th><th>Limit</th><th>Use on this board</th></tr></thead>
  <tbody>
    <tr><td>Joystick elements</td><td>5 V DC</td><td>3.3 V</td></tr>
    <tr><td>Push switch contact</td><td>50 mA</td><td>About 3 mA discharge peak (calculated)</td></tr>
    <tr><td>Filter capacitors</td><td>50 V</td><td>3.3 V</td></tr>
    <tr><td>Series resistors on a wrongly driven pin</td><td>3.3 mA at 3.3 V</td><td>Calculated limit set by 1 k&Omega;</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: simulation {#simulation}

The wiper filter and the switch network were simulated with ngspice. The wiper case uses the middle of a 10&nbsp;k&Omega; element, which gives the highest source resistance.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Simulated results against limits">
<svg viewBox="0 0 1000 238" role="img" aria-labelledby="xb-joy-sim-t">
<title id="xb-joy-sim-t">Each simulated value (yellow mark) against its allowed range (green band).</title>
<text x="385" y="41" text-anchor="end" font-size="13" fill="#e6ebf2">Centre output at 3.3 V, 10 k element, no load</text><path d="M400 36H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M444.5 36H815.5" stroke="#2f8f5b" stroke-width="10"/><path d="M629.6 23v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="41" font-size="13" font-weight="700" fill="#ffcc33">1.65&nbsp;V</text>
<text x="385" y="93" text-anchor="end" font-size="13" fill="#e6ebf2">Settling to 0.1 % after a step</text><path d="M400 88H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M400.0 88H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M499.3 75v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="93" font-size="13" font-weight="700" fill="#ffcc33">242&nbsp;&micro;s</text>
<text x="385" y="145" text-anchor="end" font-size="13" fill="#e6ebf2">Switch output when pressed</text><path d="M400 140H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M400.0 140H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M646.5 127v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="145" font-size="13" font-weight="700" fill="#ffcc33">300&nbsp;mV</text>
<text x="385" y="197" text-anchor="end" font-size="13" fill="#e6ebf2">Switch output 5.9 ms after release</text><path d="M400 192H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M444.5 192H815.5" stroke="#2f8f5b" stroke-width="10"/><path d="M752.9 179v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="197" font-size="13" font-weight="700" fill="#ffcc33">3.29&nbsp;V</text>
</svg>
  </div>
  <figcaption>Simulated value (yellow) against the limit used for it (green). Each bar has its own scale.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Result</th><th>Simulated value</th><th>Limit</th><th>Outcome</th></tr></thead>
  <tbody>
    <tr><td>Centre output at 3.3 V, 10 k element, no load</td><td>1.65&nbsp;V</td><td>1.64&nbsp;V to 1.66&nbsp;V</td><td>Within</td></tr>
    <tr><td>Settling to 0.1 % after a step</td><td>242&nbsp;&micro;s</td><td>at most 1&nbsp;ms</td><td>Within</td></tr>
    <tr><td>Switch output when pressed</td><td>300&nbsp;mV</td><td>at most 500&nbsp;mV</td><td>Within</td></tr>
    <tr><td>Switch output 5.9 ms after release</td><td>3.29&nbsp;V</td><td>3.2&nbsp;V to 3.31&nbsp;V</td><td>Within</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Not simulated: stick travel, wiper noise and contact bounce (the manufacturer gives no model), the controller&rsquo;s sampling load, ground offsets, electrostatic discharge and temperature.

## Appendix: datasheet {#datasheets}

The first page of the joystick&rsquo;s manufacturer specification. Click the page to open the PDF. The copy is the series specification and drawing; match the variant you buy against the drawing.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/joystick-breakout/datasheets/alps-rkjxv.pdf"><img src="/images/extensions/joystick-breakout/datasheets/alps-rkjxv-page1.png" alt="First page of the RKJXV series thumb pointer specification and drawing datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/joystick-breakout/datasheets/alps-rkjxv.pdf">RKJXV series thumb pointer specification and drawing</a> — Alps Alpine, 14 pages.</figcaption>
</figure>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
