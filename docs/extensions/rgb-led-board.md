---
layout: default
title: "RGB LED board"
description: "Four RGB LEDs mixed by three PWM signals on a Gadgeteer socket: pinout, wiring, PWM configuration, limits and files."
permalink: /extensions/rgb-led-board
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Controls and displays</p>
    <h1 id="rgb-led-board">RGB LED board</h1>
    <p class="xb-lead">Four bright RGB LEDs that all show the same colour, mixed from three controller PWM pins. Use it as a coloured machine status light or workspace accent.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/rgb-led-board/rgb-led-board-diagram.png" alt="Top view of the RGB LED board: a ten-contact socket on the left and right edges and four square RGB LEDs.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>
<div class="xb-stats">
  <div class="xb-stat"><b>4 RGB LEDs</b><span>Inolux IN-P55TATRGB</span></div>
  <div class="xb-stat"><b>3 PWM inputs</b><span>red, green, blue on contacts 7, 8, 9</span></div>
  <div class="xb-stat"><b>14 to 18 mA</b><span>per LED colour, simulated</span></div>
  <div class="xb-stat"><b>&lt; 0.25 A</b><span>all on, from 5&nbsp;V</span></div>
  <div class="xb-stat"><b>2 sockets</b><span>type P input and chain</span></div>
  <div class="xb-stat"><b>80 &times; 80</b><span>millimetres, four M3 holes</span></div>
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
  Do not look directly into the LEDs at full power for long.
</sl-alert>
{:/nomarkdown}

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>A coloured status or accent light. Not a safety indicator</td></tr>
    <tr><td>LEDs</td><td>Four Inolux IN-P55TATRGB, one resistor per colour per LED</td></tr>
    <tr><td>Control</td><td>3.3&nbsp;V PWM, high is on; 100&nbsp;k&Omega; pull-downs keep the lights off</td></tr>
    <tr><td>Supply</td><td>5&nbsp;V from the socket; JP20 cuts LED power</td></tr>
    <tr><td>Sockets</td><td>Two 10-contact Gadgeteer type P sockets (Samtec SHF-105, 1.27&nbsp;mm): input and chain</td></tr>
    <tr><td>Size</td><td>80 &times; 80&nbsp;mm, four M3 holes on a 70 &times; 70&nbsp;mm pattern</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> header GD (PWM1_2, PWM1_3, PWM1_4)</td></tr>
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
      <img src="/images/extensions/rgb-led-board/rgb-led-board-diagram.png" alt="Top view of the RGB LED board with 10 numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:6.8%;top:28.0%" aria-label="1: input socket p in (j1)">1<span class="xb-pop"><b>Input socket P IN (J1)</b> — Red on contact 7, green on 8, blue on 9; 5&nbsp;V on 2.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-2" style="left:93.2%;top:28.0%" aria-label="2: chain socket chain (j2)">2<span class="xb-pop"><b>Chain socket CHAIN (J2)</b> — Next board.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:30.5%;top:51.2%" aria-label="3: rgb leds (d1 to d4)">3<span class="xb-pop"><b>RGB LEDs (D1 to D4)</b> — All four are driven together.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:50.0%;top:28.0%" aria-label="4: colour switches (q1 to q3)">4<span class="xb-pop"><b>Colour switches (Q1 to Q3)</b> — One MOSFET per colour.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:48.2%;top:22.0%" aria-label="5: gate resistors (r1 to r6)">5<span class="xb-pop"><b>Gate resistors (R1 to R6)</b> — Series resistors and pull-downs.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:30.5%;top:42.1%" aria-label="6: led resistors (r10 to r21)">6<span class="xb-pop"><b>LED resistors (R10 to R21)</b> — 180&nbsp;&Omega; for red, 120&nbsp;&Omega; for green and blue.</span></a>
      <a class="xb-mk xb-pr" href="#tour-7" style="left:85.4%;top:51.2%" aria-label="7: supply capacitor (c1)">7<span class="xb-pop"><b>Supply capacitor (C1)</b> — 10&nbsp;&micro;F on the LED supply.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-8" style="left:80.5%;top:41.5%" aria-label="8: led power link (jp20)">8<span class="xb-pop"><b>LED power link (JP20)</b> — Closed as delivered; open it to cut power to the LEDs.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-9" style="left:17.1%;top:28.0%" aria-label="9: chain links (jp7 to jp9)">9<span class="xb-pop"><b>Chain links (JP7 to JP9)</b> — Open as delivered.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-10" style="left:7.3%;top:7.3%" aria-label="10: mounting hole">10<span class="xb-pop"><b>Mounting hole</b> — One of four M3 holes.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Input socket P IN (J1)</b> — Red on contact 7, green on 8, blue on 9; 5&nbsp;V on 2.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket CHAIN (J2)</b> — Next board.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>RGB LEDs (D1 to D4)</b> — All four are driven together.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Colour switches (Q1 to Q3)</b> — One MOSFET per colour.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Gate resistors (R1 to R6)</b> — Series resistors and pull-downs.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>LED resistors (R10 to R21)</b> — 180&nbsp;&Omega; for red, 120&nbsp;&Omega; for green and blue.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Supply capacitor (C1)</b> — 10&nbsp;&micro;F on the LED supply.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>LED power link (JP20)</b> — Closed as delivered; open it to cut power to the LEDs.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Chain links (JP7 to JP9)</b> — Open as delivered.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Mounting hole</b> — One of four M3 holes.</div></li>
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
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Passed to the chain</td><td>3.3 V</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>LED supply</td><td>5 V</td></tr>
    <tr><td>3 to 6</td><td>Passed through</td><td>Not used</td><td>PE7, PD8, PB11, PE9</td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-sig">RED</span></td><td>High = red on</td><td>PE11 (PWM1_2)</td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">GREEN</span></td><td>High = green on</td><td>PE13 (PWM1_3)</td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">BLUE</span></td><td>High = blue on</td><td>PE14 (PWM1_4)</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Ground</td><td>GND</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Three PWM pins</b><span>Prime header GD contacts 7 to 9.</span></div>
  <div class="xb-card"><b>A ten-way cable</b><span>1.27&nbsp;mm Gadgeteer ribbon cable.</span></div>
  <div class="xb-card"><b>5 V budget</b><span>Up to a quarter of an ampere for this board.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Minimum wiring">
<svg viewBox="0 0 1000 280" role="img" aria-labelledby="xb-rgb-wire-t">
<title id="xb-rgb-wire-t">Minimum wiring: contact 2 to contact 2, 5 V; PE11, contact 7 to contact 7, red; PE13, contact 8 to contact 8, green; PE14, contact 9 to contact 9, blue; contact 10 to contact 10, ground.</title>
<rect x="20" y="20" width="280" height="240" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="160.0" y="145.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2"></text>
<rect x="700" y="20" width="280" height="240" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="840.0" y="145.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2"></text>
<text x="160" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Prime header GD (J35)</text>
<text x="840" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">RGB board J1</text>
<path d="M300 84H700" stroke="#ff9f43" stroke-width="3" fill="none"/><circle cx="300" cy="84" r="5" fill="#ff9f43"/><circle cx="700" cy="84" r="5" fill="#ff9f43"/><text x="286" y="89" text-anchor="end" font-size="13" fill="#e6ebf2">contact 2</text><text x="714" y="89" font-size="13" fill="#e6ebf2">contact 2</text><text x="500" y="77" text-anchor="middle" font-size="12" fill="#a9b4c2">5 V</text>
<path d="M300 122H700" stroke="#ff6b6b" stroke-width="3" fill="none"/><circle cx="300" cy="122" r="5" fill="#ff6b6b"/><circle cx="700" cy="122" r="5" fill="#ff6b6b"/><text x="286" y="127" text-anchor="end" font-size="13" fill="#e6ebf2">PE11, contact 7</text><text x="714" y="127" font-size="13" fill="#e6ebf2">contact 7</text><text x="500" y="115" text-anchor="middle" font-size="12" fill="#a9b4c2">red</text>
<path d="M300 160H700" stroke="#6fe08a" stroke-width="3" fill="none"/><circle cx="300" cy="160" r="5" fill="#6fe08a"/><circle cx="700" cy="160" r="5" fill="#6fe08a"/><text x="286" y="165" text-anchor="end" font-size="13" fill="#e6ebf2">PE13, contact 8</text><text x="714" y="165" font-size="13" fill="#e6ebf2">contact 8</text><text x="500" y="153" text-anchor="middle" font-size="12" fill="#a9b4c2">green</text>
<path d="M300 198H700" stroke="#5fb3ff" stroke-width="3" fill="none"/><circle cx="300" cy="198" r="5" fill="#5fb3ff"/><circle cx="700" cy="198" r="5" fill="#5fb3ff"/><text x="286" y="203" text-anchor="end" font-size="13" fill="#e6ebf2">PE14, contact 9</text><text x="714" y="203" font-size="13" fill="#e6ebf2">contact 9</text><text x="500" y="191" text-anchor="middle" font-size="12" fill="#a9b4c2">blue</text>
<path d="M300 236H700" stroke="#a9b4c2" stroke-width="3" fill="none"/><circle cx="300" cy="236" r="5" fill="#a9b4c2"/><circle cx="700" cy="236" r="5" fill="#a9b4c2"/><text x="286" y="241" text-anchor="end" font-size="13" fill="#e6ebf2">contact 10</text><text x="714" y="241" font-size="13" fill="#e6ebf2">contact 10</text><text x="500" y="229" text-anchor="middle" font-size="12" fill="#a9b4c2">ground</text>
</svg>
  </div>
  <figcaption>Five connections.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Mount the board</h3>
    <p>Face the LEDs where the colour should be seen.</p>
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
    <h3>Set a colour</h3>
    <p>Send M824 S50, then M826 S20, then M825.</p>
    <p class="xb-expect">Red should light at half, green should add a little, then red should go out.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Set each colour by command</td><td>Switch with hardware PWM</td><td>The entry below</td></tr>
    <tr><td>Change colour with machine state</td><td>None</td><td>Send the commands from your own macros</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Add this to `config.ini`:

```ini
[pwm1]
frequency = 1000

[switch]
red.enable = true
red.output_pin = PWM1_2
red.output_type = hwpwm
red.default_on_value = 100
red.input_on_command = M824
red.input_off_command = M825

green.enable = true
green.output_pin = PWM1_3
green.output_type = hwpwm
green.default_on_value = 100
green.input_on_command = M826
green.input_off_command = M827

blue.enable = true
blue.output_pin = PWM1_4
blue.output_type = hwpwm
blue.default_on_value = 100
blue.input_on_command = M828
blue.input_off_command = M829
```

The `S` value is the duty cycle in percent. The frequency applies to every output on PWM timer 1; if your file already has a `[pwm1]` section, keep a frequency that suits all its users. Choose other command numbers if these are in use. See the [switch module](https://github.com/Smoothieware/SmoothieV2/tree/master/Firmware/src/modules/tools/switch).

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
<svg viewBox="0 0 1000 200" role="img" aria-labelledby="xb-rgb-how-t">
<title id="xb-rgb-how-t">Each PWM pin switches one colour of all four LEDs through a transistor.</title>
<rect x="20.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="120.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J1 contacts 7 to 9</text><text x="120.0" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">PWM</text>
<path d="M220.0 51H400.0" stroke="#a9b4c2" stroke-width="3"/><path d="M400.0 51l-9 -5v10z" fill="#a9b4c2"/>
<rect x="400.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="500.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Q1 to Q3</text><text x="500.0" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">one per colour</text>
<path d="M600.0 51H780.0" stroke="#a9b4c2" stroke-width="3"/><path d="M780.0 51l-9 -5v10z" fill="#a9b4c2"/>
<rect x="780.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="880.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">D1 to D4</text><text x="880.0" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">mixed light</text>
<rect x="20.0" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="120.0" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">5 V, JP20</text><text x="120.0" y="157.0" text-anchor="middle" font-size="12" fill="#a9b4c2">LED supply</text>
<path d="M220.0 141H400.0" stroke="#a9b4c2" stroke-width="3"/><path d="M400.0 141l-9 -5v10z" fill="#a9b4c2"/>
<rect x="400.0" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="500.0" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">12 resistors</text><text x="500.0" y="157.0" text-anchor="middle" font-size="12" fill="#a9b4c2">one per die</text>
<path d="M600.0 141H780.0" stroke="#a9b4c2" stroke-width="3"/><path d="M780.0 141l-9 -5v10z" fill="#a9b4c2"/>
<rect x="780.0" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="880.0" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">D1 to D4</text><text x="880.0" y="157.0" text-anchor="middle" font-size="12" fill="#a9b4c2">to transistors</text>
</svg>
  </div>
  <figcaption>Control above, power below.</figcaption>
</figure>
{:/nomarkdown}

Each LED holds a red, a green and a blue die. A separate resistor for every die gives even brightness. Varying the duty cycle of the three signals mixes the colour. The pins only drive transistor gates, so they carry almost no current.

## Solder links {#options}

Closing JP7 to JP9 lets a second board of the same kind follow the same colour; check that the 5&nbsp;V supply can feed both.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Solder links">
<svg viewBox="0 0 1000 114" role="img" aria-labelledby="xb-rgb-jp-t">
<title id="xb-rgb-jp-t">Solder links as delivered: JP7 open; JP8 open; JP9 open; JP20 closed.</title>
<rect x="20" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="72" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="114" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="108" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP7 · open</text><text x="108" y="90" text-anchor="middle" font-size="11" fill="#a9b4c2">chain contact 7</text>
<rect x="216" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="268" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="310" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="304" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP8 · open</text><text x="304" y="90" text-anchor="middle" font-size="11" fill="#a9b4c2">chain contact 8</text>
<rect x="412" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="464" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="506" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="500" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP9 · open</text><text x="500" y="90" text-anchor="middle" font-size="11" fill="#a9b4c2">chain contact 9</text>
<rect x="608" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="660" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="702" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="686" y="34" width="20" height="10" fill="#e0b84a"/>
<text x="696" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP20 · closed</text><text x="696" y="90" text-anchor="middle" font-size="11" fill="#a9b4c2">LED power</text>
</svg>
  </div>
  <figcaption>The links as delivered. Close one with a small blob of solder across both pads; open it by removing the solder or cutting the copper between the pads.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>What it does</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>JP7</td><td>Joins contact 7 to the chain socket</td><td>Open</td></tr>
    <tr><td>JP8</td><td>Joins contact 8 to the chain socket</td><td>Open</td></tr>
    <tr><td>JP9</td><td>Joins contact 9 to the chain socket</td><td>Open</td></tr>
    <tr><td>JP20</td><td>Supplies the LEDs from 5 V</td><td>Closed</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Chaining {#chaining}

Contacts 3 to 6 are free for a further board.

{::nomarkdown}
{% include _includes/extension-chain-figure.html id="xb-rgb" board="RGB LED board" in_label="P IN" chain_label="CHAIN" lane1="pin 7, red" lane2="pin 8, green" lane3="pin 9, blue" s1="open" s2="open" s3="open" caption="The colour signals stop here until you close their links." %}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>On CHAIN</th></tr></thead>
  <tbody>
    <tr><td>1, 2, 10</td><td>Power and ground</td><td>Passed on</td></tr>
    <tr><td>3 to 6</td><td>Free</td><td>Passed on</td></tr>
    <tr><td>7 to 9</td><td>Colours</td><td>Stopped by open links</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Likely cause</th><th>What to check</th></tr></thead>
  <tbody>
    <tr><td>Nothing lights</td><td>No 5 V, JP20 open, or configuration not loaded</td><td>Test point 5 V, JP20, startup messages</td></tr>
    <tr><td>One colour missing</td><td>Wrong pin or PWM name</td><td>Measure test points SW_R, SW_G, SW_B (low when on)</td></tr>
    <tr><td>Colours exchanged</td><td>Pins crossed in the configuration</td><td>Red PWM1_2, green PWM1_3, blue PWM1_4</td></tr>
    <tr><td>Visible flicker</td><td>PWM frequency too low</td><td>Raise the [pwm1] frequency</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-unknown"></span>D1 to D4</th></tr></thead>
  <tbody>
    <tr><td>Lit means</td><td>Colour requested on contacts 7 to 9</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/rgb-led-board/rgb-led-board-schematic.pdf">Schematic (PDF)</a></td><td>The circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/rgb-led-board/rgb-led-board-bom.csv">Parts list (CSV)</a></td><td>Every component with its value, footprint and part number where one is chosen</td></tr>
    <tr><td><a href="/images/extensions/rgb-led-board/rgb-led-board-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side. 

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-rgb-mount-t">
  <title id="xb-rgb-mount-t">Mounting drawing of the RGB LED board, component side: outline 80 by 80 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="310.0" y="78.0" width="340.0" height="340.0" rx="4.2" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M310.0 56H650.0"/><path d="M310.0 50V62"/><path d="M650.0 50V62"/><path d="M676.0 78.0V418.0"/><path d="M670.0 78.0h12"/><path d="M670.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">80</text>
  <text x="688.0" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">80</text>
  <circle cx="310.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="298.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M252.0 104.0h30" fill="none"/><path d="M286.0 104.0l-8 -4v8z"/><path d="M252.0 104.0v30" fill="none"/><path d="M252.0 138.0l-4 -8h8z"/></g>
  <text x="290.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="248.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="331.2" cy="99.2" r="6.8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M320.4 99.2h21.6M331.2 88.5v21.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="324.4" y="126.0" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.00</text>
  <circle cx="628.8" cy="99.2" r="6.8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M618.0 99.2h21.6M628.8 88.5v21.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="635.5" y="126.0" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  75.00, 5.00</text>
  <circle cx="331.2" cy="396.8" r="6.8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M320.4 396.8h21.6M331.2 385.9v21.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="324.4" y="379.9" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 75.00</text>
  <circle cx="628.8" cy="396.8" r="6.8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M618.0 396.8h21.6M628.8 385.9v21.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="635.5" y="379.9" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  75.00, 75.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 80 × 80&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>75.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>5.00</td><td>75.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>75.00</td><td>75.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Every figure is a design value, a calculated or simulated value, or a manufacturer&rsquo;s data sheet value, as the last column says. A dash means no figure is given.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis</th></tr></thead>
  <tbody>
    <tr><td>Supply</td><td>5 V</td><td>&mdash;</td><td>5 V</td><td>&mdash;</td><td>Design</td></tr>
    <tr><td>Red current per LED</td><td>Each die</td><td>10 mA</td><td>16.1 mA</td><td>22 mA</td><td>Simulated; limits used for the check</td></tr>
    <tr><td>Green or blue current per LED</td><td>Each die</td><td>10 mA</td><td>16.4 mA</td><td>22 mA</td><td>Simulated; limits used for the check</td></tr>
    <tr><td>Total, all channels on</td><td>5 V</td><td>&mdash;</td><td>0.196 A</td><td>0.25 A</td><td>Simulated</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Component stress limits

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Part</th><th>Limit</th><th>Use on this board</th></tr></thead>
  <tbody>
    <tr><td>5 V supply</td><td>Shared host regulator</td><td>Up to 0.25 A for this board</td></tr>
    <tr><td>Capacitor</td><td>10 V</td><td>5 V</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: simulation {#simulation}

The LED currents were simulated with ngspice with all channels fully on.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Simulated results against limits">
<svg viewBox="0 0 1000 186" role="img" aria-labelledby="xb-rgb-sim-t">
<title id="xb-rgb-sim-t">Each simulated value (yellow mark) against its allowed range (green band).</title>
<text x="385" y="41" text-anchor="end" font-size="13" fill="#e6ebf2">Red current per LED</text>
<path d="M400 36H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M444.5 36H815.5" stroke="#2f8f5b" stroke-width="10"/><path d="M632.2 23v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="41" font-size="13" font-weight="700" fill="#ffcc33">16.1&nbsp;mA</text>
<text x="385" y="93" text-anchor="end" font-size="13" fill="#e6ebf2">Green or blue current per LED</text>
<path d="M400 88H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M444.5 88H815.5" stroke="#2f8f5b" stroke-width="10"/><path d="M642.6 75v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="93" font-size="13" font-weight="700" fill="#ffcc33">16.4&nbsp;mA</text>
<text x="385" y="145" text-anchor="end" font-size="13" fill="#e6ebf2">All channels fully on</text>
<path d="M400 140H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M400.0 140H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M721.3 127v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="145" font-size="13" font-weight="700" fill="#ffcc33">0.196&nbsp;A</text>
</svg>
  </div>
  <figcaption>Simulated value (yellow) against the limit used for it (green). Each bar has its own scale.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Result</th><th>Simulated value</th><th>Limit</th><th>Outcome</th></tr></thead>
  <tbody>
    <tr><td>Red current per LED</td><td>16.1&nbsp;mA</td><td>10&nbsp;mA to 22&nbsp;mA</td><td>Within</td></tr>
    <tr><td>Green or blue current per LED</td><td>16.4&nbsp;mA</td><td>10&nbsp;mA to 22&nbsp;mA</td><td>Within</td></tr>
    <tr><td>All channels fully on</td><td>0.196&nbsp;A</td><td>at most 250&nbsp;mA</td><td>Within</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Not simulated: brightness, colour and temperature rise.

## Appendix: datasheet {#datasheets}

The first page of each manufacturer data sheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/rgb-led-board/datasheets/in-p55tatrgb.pdf"><img src="/images/extensions/rgb-led-board/datasheets/in-p55tatrgb-page1.png" alt="First page of the IN-P55TATRGB RGB LED datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/rgb-led-board/datasheets/in-p55tatrgb.pdf">IN-P55TATRGB RGB LED</a> — Inolux, 14 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/rgb-led-board/datasheets/ao3400a.pdf"><img src="/images/extensions/rgb-led-board/datasheets/ao3400a-page1.png" alt="First page of the AO3400A N-channel MOSFET datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/rgb-led-board/datasheets/ao3400a.pdf">AO3400A N-channel MOSFET</a> — Alpha and Omega Semiconductor, 5 pages.</figcaption>
</figure>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
