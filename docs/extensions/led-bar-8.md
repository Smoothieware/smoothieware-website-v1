---
layout: default
title: "LED bar, 8 lamps"
description: "Eight indicator LEDs on a Gadgeteer socket, seven switched by the controller and one assigned by solder links: pinout, wiring, configuration and files."
permalink: /extensions/led-bar-8
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Controls and displays</p>
    <h1 id="led-bar-8">LED bar, 8 lamps</h1>
    <p class="xb-lead">A row of eight indicator LEDs. Seven follow seven controller pins, so each can be a status lamp switched by a G-code command. The eighth shows power unless you move a solder link to make it copy a pin or an external signal.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/led-bar-8/led-bar-8-diagram.webp" alt="Top view of the LED bar board: a ten-contact socket on the left and right edges and a row of eight small LEDs.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>
<div class="xb-stats">
  <div class="xb-stat"><b>8 LEDs</b><span>seven green and one red</span></div>
  <div class="xb-stat"><b>7 outputs</b><span>contacts 3 to 9, high = lit</span></div>
  <div class="xb-stat"><b>about 1.2 mA</b><span>per LED, simulated</span></div>
  <div class="xb-stat"><b>LED 8</b><span>power, pin 3, pin 9 or external</span></div>
  <div class="xb-stat"><b>2 sockets</b><span>type Y input and chain</span></div>
  <div class="xb-stat"><b>100 &times; 60</b><span>millimetres, four M3 holes</span></div>
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
    <tr><td>Purpose</td><td>A status or level display near a machine panel, or checking that socket pins switch. Not a safety indicator</td></tr>
    <tr><td>LEDs</td><td>D1 to D7 green on contacts 3 to 9; D8 red on a selectable source. Each has a 1&nbsp;k&Omega; resistor</td></tr>
    <tr><td>Supply</td><td>3.3&nbsp;V, under 10&nbsp;mA in total</td></tr>
    <tr><td>External input</td><td>J3, 3.3&nbsp;V maximum, through 1&nbsp;k&Omega;</td></tr>
    <tr><td>Sockets</td><td>Two 10-contact Gadgeteer type Y sockets (Samtec SHF-105, 1.27&nbsp;mm): input and chain</td></tr>
    <tr><td>Size</td><td>100 &times; 60&nbsp;mm, four M3 holes on a 90 &times; 50&nbsp;mm pattern</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> header GF through switch modules</td></tr>
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
      <img src="/images/extensions/led-bar-8/led-bar-8-diagram.webp" alt="Top view of the LED bar board with 10 numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pl" href="#tour-1" style="left:5.5%;top:50.0%" aria-label="1: input socket y in (j1)">1<span class="xb-pop"><b>Input socket Y IN (J1)</b> — Seven signals on contacts 3 to 9.</span></a>
      <a class="xb-mk xb-pr" href="#tour-2" style="left:94.5%;top:50.0%" aria-label="2: chain socket chain (j2)">2<span class="xb-pop"><b>Chain socket CHAIN (J2)</b> — Next board; all signal links are open as delivered.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:48.0%;top:66.1%" aria-label="3: lamps 1 to 7 (d1 to d7)">3<span class="xb-pop"><b>Lamps 1 to 7 (D1 to D7)</b> — Lamp 1 follows contact 3, and so on to lamp 7 on contact 9.</span></a>
      <a class="xb-mk xb-pr" href="#tour-4" style="left:79.4%;top:66.1%" aria-label="4: lamp 8 (d8)">4<span class="xb-pop"><b>Lamp 8 (D8)</b> — Red; shows 3.3&nbsp;V as delivered.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:24.5%;top:54.8%" aria-label="5: lamp resistors (r1 to r8)">5<span class="xb-pop"><b>Lamp resistors (R1 to R8)</b> — 1&nbsp;k&Omega; each.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:42.2%;top:37.1%" aria-label="6: lamp 8 selectors (jp31 to jp34)">6<span class="xb-pop"><b>Lamp 8 selectors (JP31 to JP34)</b> — Close exactly one: power, contact 3, contact 9 or external.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-7" style="left:81.4%;top:24.2%" aria-label="7: external input (j3)">7<span class="xb-pop"><b>External input (J3)</b> — Pin 1 signal, pin 2 ground. Never above 3.3&nbsp;V.</span></a>
      <a class="xb-mk xb-pr" href="#tour-8" style="left:83.3%;top:77.4%" aria-label="8: all-lamps link (jp20)">8<span class="xb-pop"><b>All-lamps link (JP20)</b> — Common return of every LED; open it to switch all off.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-9" style="left:14.2%;top:48.4%" aria-label="9: chain links (jp3 to jp9)">9<span class="xb-pop"><b>Chain links (JP3 to JP9)</b> — Open as delivered.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-10" style="left:5.9%;top:9.7%" aria-label="10: mounting hole">10<span class="xb-pop"><b>Mounting hole</b> — One of four M3 holes.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Input socket Y IN (J1)</b> — Seven signals on contacts 3 to 9.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket CHAIN (J2)</b> — Next board; all signal links are open as delivered.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Lamps 1 to 7 (D1 to D7)</b> — Lamp 1 follows contact 3, and so on to lamp 7 on contact 9.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Lamp 8 (D8)</b> — Red; shows 3.3&nbsp;V as delivered.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Lamp resistors (R1 to R8)</b> — 1&nbsp;k&Omega; each.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Lamp 8 selectors (JP31 to JP34)</b> — Close exactly one: power, contact 3, contact 9 or external.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>External input (J3)</b> — Pin 1 signal, pin 2 ground. Never above 3.3&nbsp;V.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>All-lamps link (JP20)</b> — Common return of every LED; open it to switch all off.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Chain links (JP3 to JP9)</b> — Open as delivered.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Mounting hole</b> — One of four M3 holes.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

Check contact numbering with the power removed before wiring by hand.

### J1: input socket (Y IN)

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>Lamp</th><th>Prime header GF</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Lamp 8 as power light</td><td>3.3 V</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Passed to the chain</td><td>5 V</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">P3</span></td><td>1</td><td>PB1</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">P4</span></td><td>2</td><td>PJ4</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">P5</span></td><td>3</td><td>PA4</td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">P6</span></td><td>4</td><td>PG0</td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-sig">P7</span></td><td>5</td><td>PJ3</td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">P8</span></td><td>6</td><td>PG1</td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">P9</span></td><td>7</td><td>PJ2</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Return</td><td>GND</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J3: external input for lamp 8

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Pin</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Signal, 0 to 3.3 V</td></tr>
    <tr><td>2</td><td>Ground</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>A socket with seven free pins</b><span>Prime header GF.</span></div>
  <div class="xb-card"><b>A ten-way cable</b><span>1.27&nbsp;mm Gadgeteer ribbon cable.</span></div>
  <div class="xb-card"><b>A configuration entry</b><span>One switch for each lamp you use.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Minimum wiring">
<svg viewBox="0 0 1000 280" role="img" aria-labelledby="xb-bar-wire-t">
<title id="xb-bar-wire-t">Minimum wiring: contact 1 to contact 1, 3.3 V; PB1, contact 3 to contact 3, lamp 1; PJ4, contact 4 to contact 4, lamp 2; contacts 5 to 9 to contacts 5 to 9, lamps 3 to 7; contact 10 to contact 10, ground.</title>
<rect x="20" y="20" width="280" height="240" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="160.0" y="145.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea"></text>
<rect x="700" y="20" width="280" height="240" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="840.0" y="145.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea"></text>
<text x="160" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Prime header GF (J37)</text>
<text x="840" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">LED bar J1</text>
<path d="M300 84H700" stroke="#ff9f43" stroke-width="3" fill="none"/><circle cx="300" cy="84" r="5" fill="#ff9f43"/><circle cx="700" cy="84" r="5" fill="#ff9f43"/><text x="286" y="89" text-anchor="end" font-size="13" fill="#eaeaea">contact 1</text><text x="714" y="89" font-size="13" fill="#eaeaea">contact 1</text><text x="500" y="77" text-anchor="middle" font-size="12" fill="#b3b3b3">3.3 V</text>
<path d="M300 122H700" stroke="#6fe08a" stroke-width="3" fill="none"/><circle cx="300" cy="122" r="5" fill="#6fe08a"/><circle cx="700" cy="122" r="5" fill="#6fe08a"/><text x="286" y="127" text-anchor="end" font-size="13" fill="#eaeaea">PB1, contact 3</text><text x="714" y="127" font-size="13" fill="#eaeaea">contact 3</text><text x="500" y="115" text-anchor="middle" font-size="12" fill="#b3b3b3">lamp 1</text>
<path d="M300 160H700" stroke="#6fe08a" stroke-width="3" fill="none"/><circle cx="300" cy="160" r="5" fill="#6fe08a"/><circle cx="700" cy="160" r="5" fill="#6fe08a"/><text x="286" y="165" text-anchor="end" font-size="13" fill="#eaeaea">PJ4, contact 4</text><text x="714" y="165" font-size="13" fill="#eaeaea">contact 4</text><text x="500" y="153" text-anchor="middle" font-size="12" fill="#b3b3b3">lamp 2</text>
<path d="M300 198H700" stroke="#6fe08a" stroke-width="3" fill="none"/><circle cx="300" cy="198" r="5" fill="#6fe08a"/><circle cx="700" cy="198" r="5" fill="#6fe08a"/><text x="286" y="203" text-anchor="end" font-size="13" fill="#eaeaea">contacts 5 to 9</text><text x="714" y="203" font-size="13" fill="#eaeaea">contacts 5 to 9</text><text x="500" y="191" text-anchor="middle" font-size="12" fill="#b3b3b3">lamps 3 to 7</text>
<path d="M300 236H700" stroke="#b3b3b3" stroke-width="3" fill="none"/><circle cx="300" cy="236" r="5" fill="#b3b3b3"/><circle cx="700" cy="236" r="5" fill="#b3b3b3"/><text x="286" y="241" text-anchor="end" font-size="13" fill="#eaeaea">contact 10</text><text x="714" y="241" font-size="13" fill="#eaeaea">contact 10</text><text x="500" y="229" text-anchor="middle" font-size="12" fill="#b3b3b3">ground</text>
</svg>
  </div>
  <figcaption>A straight ten-way cable makes all connections.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Mount the board</h3>
    <p>Use the four M3 holes.</p>
  </li>
  <li class="xb-step">
    <h3>Connect with the power off</h3>
    <p>Plug J1 into header GF.</p>
    <p class="xb-expect">On power up lamp 8 should light.</p>
  </li>
  <li class="xb-step">
    <h3>Add the configuration</h3>
    <p>Add one switch per lamp as below and restart.</p>
  </li>
  <li class="xb-step">
    <h3>Test</h3>
    <p>Send M820, then M821.</p>
    <p class="xb-expect">Lamp 1 should come on and go off.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Switch a lamp by command</td><td>Switch</td><td>The entry below</td></tr>
    <tr><td>Show a level or progress bar</td><td>None</td><td>Send the commands from your own script</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Add one block of settings per lamp to `config.ini`. This example drives lamps 1 and 2:

```ini
[switch]
lamp1.enable = true
lamp1.output_pin = PB1
lamp1.output_type = digital
lamp1.input_on_command = M820
lamp1.input_off_command = M821

lamp2.enable = true
lamp2.output_pin = PJ4
lamp2.output_type = digital
lamp2.input_on_command = M822
lamp2.input_off_command = M823
```

The other lamps use PA4, PG0, PJ3, PG1 and PJ2 with their own names and unused command numbers. Switches turn off when the machine halts unless configured otherwise. See the [switch module](https://github.com/Smoothieware/SmoothieV2/tree/master/Firmware/src/modules/tools/switch).

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
<svg viewBox="0 0 1000 200" role="img" aria-labelledby="xb-bar-how-t">
<title id="xb-bar-how-t">Each pin lights its own LED through a resistor.</title>
<rect x="20.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="120.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Contacts 3 to 9</text><text x="120.0" y="67.0" text-anchor="middle" font-size="12" fill="#b3b3b3">controller pins</text>
<path d="M220.0 51H273.3" stroke="#b3b3b3" stroke-width="3"/><path d="M273.3 51l-9 -5v10z" fill="#b3b3b3"/>
<rect x="273.3" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="373.3" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">1 k each</text><text x="373.3" y="67.0" text-anchor="middle" font-size="12" fill="#b3b3b3">limit current</text>
<path d="M473.3 51H526.6" stroke="#b3b3b3" stroke-width="3"/><path d="M526.6 51l-9 -5v10z" fill="#b3b3b3"/>
<rect x="526.7" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="626.7" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">D1 to D7</text><text x="626.7" y="67.0" text-anchor="middle" font-size="12" fill="#b3b3b3">lamps</text>
<path d="M726.7 51H780.0" stroke="#b3b3b3" stroke-width="3"/><path d="M780.0 51l-9 -5v10z" fill="#b3b3b3"/>
<rect x="780.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="880.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">JP20</text><text x="880.0" y="67.0" text-anchor="middle" font-size="12" fill="#b3b3b3">to ground</text>
<rect x="20.0" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="120.0" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">JP31 to JP34</text><text x="120.0" y="157.0" text-anchor="middle" font-size="12" fill="#b3b3b3">source for lamp 8</text>
<path d="M220.0 141H273.3" stroke="#b3b3b3" stroke-width="3"/><path d="M273.3 141l-9 -5v10z" fill="#b3b3b3"/>
<rect x="273.3" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="373.3" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">R8 1 k</text><text x="373.3" y="157.0" text-anchor="middle" font-size="12" fill="#b3b3b3">limit current</text>
<path d="M473.3 141H526.6" stroke="#b3b3b3" stroke-width="3"/><path d="M526.6 141l-9 -5v10z" fill="#b3b3b3"/>
<rect x="526.7" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="626.7" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">D8</text><text x="626.7" y="157.0" text-anchor="middle" font-size="12" fill="#b3b3b3">red lamp</text>
<path d="M726.7 141H780.0" stroke="#b3b3b3" stroke-width="3"/><path d="M780.0 141l-9 -5v10z" fill="#b3b3b3"/>
<rect x="780.0" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="880.0" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">JP20</text><text x="880.0" y="157.0" text-anchor="middle" font-size="12" fill="#b3b3b3">to ground</text>
</svg>
  </div>
  <figcaption>Seven direct lamps and one selectable lamp.</figcaption>
</figure>
{:/nomarkdown}

A pin driven high sends about a milliampere through its LED, a light load for a controller pin. A socket carries only seven signals, which is why the eighth lamp takes its source from a link.

## Solder links {#options}

To change what lamp 8 shows, open JP31 and close exactly one of JP32, JP33 or JP34. Closing a chain link makes the next board see the same signal.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Solder links">
<svg viewBox="0 0 1000 322" role="img" aria-labelledby="xb-bar-jp-t">
<title id="xb-bar-jp-t">Solder links as delivered: JP3 open; JP4 open; JP5 open; JP6 open; JP7 open; JP8 open; JP9 open; JP20 closed; JP31 closed; JP32 open; JP33 open; JP34 open.</title>
<rect x="20" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="72" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="114" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="108" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP3 · open</text><text x="108" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">chain contact 3</text>
<rect x="216" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="268" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="310" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="304" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP4 · open</text><text x="304" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">chain contact 4</text>
<rect x="412" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="464" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="506" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="500" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP5 · open</text><text x="500" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">chain contact 5</text>
<rect x="608" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="660" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="702" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="696" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP6 · open</text><text x="696" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">chain contact 6</text>
<rect x="804" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="856" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="898" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="892" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP7 · open</text><text x="892" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">chain contact 7</text>
<rect x="20" y="114" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="72" y="128" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="114" y="128" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="108" y="176" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP8 · open</text><text x="108" y="194" text-anchor="middle" font-size="11" fill="#b3b3b3">chain contact 8</text>
<rect x="216" y="114" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="268" y="128" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="310" y="128" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="304" y="176" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP9 · open</text><text x="304" y="194" text-anchor="middle" font-size="11" fill="#b3b3b3">chain contact 9</text>
<rect x="412" y="114" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="464" y="128" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="506" y="128" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="490" y="138" width="20" height="10" fill="#e0b84a"/>
<text x="500" y="176" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP20 · closed</text><text x="500" y="194" text-anchor="middle" font-size="11" fill="#b3b3b3">all lamps</text>
<rect x="608" y="114" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="660" y="128" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="702" y="128" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="686" y="138" width="20" height="10" fill="#e0b84a"/>
<text x="696" y="176" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP31 · closed</text><text x="696" y="194" text-anchor="middle" font-size="11" fill="#b3b3b3">lamp 8: power</text>
<rect x="804" y="114" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="856" y="128" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="898" y="128" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="892" y="176" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP32 · open</text><text x="892" y="194" text-anchor="middle" font-size="11" fill="#b3b3b3">lamp 8: pin 3</text>
<rect x="20" y="218" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="72" y="232" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="114" y="232" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="108" y="280" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP33 · open</text><text x="108" y="298" text-anchor="middle" font-size="11" fill="#b3b3b3">lamp 8: pin 9</text>
<rect x="216" y="218" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="268" y="232" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="310" y="232" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="304" y="280" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP34 · open</text><text x="304" y="298" text-anchor="middle" font-size="11" fill="#b3b3b3">lamp 8: external</text>
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
    <tr><td>JP6</td><td>Joins contact 6 to the chain socket</td><td>Open</td></tr>
    <tr><td>JP7</td><td>Joins contact 7 to the chain socket</td><td>Open</td></tr>
    <tr><td>JP8</td><td>Joins contact 8 to the chain socket</td><td>Open</td></tr>
    <tr><td>JP9</td><td>Joins contact 9 to the chain socket</td><td>Open</td></tr>
    <tr><td>JP20</td><td>Connects every lamp to ground</td><td>Closed</td></tr>
    <tr><td>JP31</td><td>Lamp 8 shows 3.3 V</td><td>Closed</td></tr>
    <tr><td>JP32</td><td>Lamp 8 copies contact 3</td><td>Open</td></tr>
    <tr><td>JP33</td><td>Lamp 8 copies contact 9</td><td>Open</td></tr>
    <tr><td>JP34</td><td>Lamp 8 follows J3</td><td>Open</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Chaining {#chaining}

All seven signals light lamps here, so their links ship open. Close a link only to share that signal.

{::nomarkdown}
{% include _includes/extension-chain-figure.html id="xb-bar" board="LED bar board" in_label="Y IN" chain_label="CHAIN" lane1="pin 3, lamp 1" lane2="pin 4, lamp 2" lane3="pin 5, lamp 3" s1="open" s2="open" s3="open" caption="Each signal stops here until you close its link." %}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>On CHAIN</th></tr></thead>
  <tbody>
    <tr><td>1, 2, 10</td><td>Power and ground</td><td>Passed on</td></tr>
    <tr><td>3 to 9</td><td>Lamps 1 to 7</td><td>Stopped by open links</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Likely cause</th><th>What to check</th></tr></thead>
  <tbody>
    <tr><td>No lamp lights</td><td>JP20 open or no power</td><td>Check JP20 and test point 3.3 V</td></tr>
    <tr><td>Only lamp 8 lights</td><td>No command or wrong pin</td><td>Check the configuration names and pins</td></tr>
    <tr><td>Lamp 8 dark</td><td>No selector closed</td><td>Close exactly one of JP31 to JP34</td></tr>
    <tr><td>Two lamps move together</td><td>Same pin configured twice, or solder bridge</td><td>Check configuration and soldering</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-green"></span>Green D1 to D7</th><th><span class="xb-led xb-led-red"></span>Red D8</th></tr></thead>
  <tbody>
    <tr><td>Lit means</td><td>The matching contact is high</td><td>Selected source is present (power as delivered)</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/led-bar-8/led-bar-8-schematic.pdf">Schematic (PDF)</a></td><td>The circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/led-bar-8/led-bar-8-bom.csv">Parts list (CSV)</a></td><td>Every component with its value, footprint and part number where one is chosen</td></tr>
    <tr><td><a href="/images/extensions/led-bar-8/led-bar-8-diagram.webp">Board drawing (WebP)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side. 

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-bar-mount-t">
  <title id="xb-bar-mount-t">Mounting drawing of the LED bar board, component side: outline 100 by 60 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="196.7" y="78.0" width="566.7" height="340.0" rx="5.7" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M196.7 56H763.3"/><path d="M196.7 50V62"/><path d="M763.3 50V62"/><path d="M789.3 78.0V418.0"/><path d="M783.3 78.0h12"/><path d="M783.3 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">100</text>
  <text x="801.3" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">60</text>
  <circle cx="196.7" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="184.7" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M138.7 104.0h30" fill="none"/><path d="M172.7 104.0l-8 -4v8z"/><path d="M138.7 104.0v30" fill="none"/><path d="M138.7 138.0l-4 -8h8z"/></g>
  <text x="176.7" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="134.7" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="225.0" cy="106.3" r="9.1" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M211.9 106.3h26.1M225.0 93.3v26.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="215.9" y="135.4" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.00</text>
  <circle cx="735.0" cy="106.3" r="9.1" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M721.9 106.3h26.1M735.0 93.3v26.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="744.1" y="135.4" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  95.00, 5.00</text>
  <circle cx="225.0" cy="389.7" r="9.1" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M211.9 389.7h26.1M225.0 376.6v26.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="215.9" y="370.6" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 55.00</text>
  <circle cx="735.0" cy="389.7" r="9.1" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M721.9 389.7h26.1M735.0 376.6v26.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="744.1" y="370.6" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">4</tspan>  95.00, 55.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 100 × 60&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>95.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>5.00</td><td>55.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>95.00</td><td>55.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Every figure is a design value, a calculated or simulated value, or a manufacturer&rsquo;s data sheet value, as the last column says. A dash means no figure is given.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis</th></tr></thead>
  <tbody>
    <tr><td>Supply</td><td>3.3 V</td><td>&mdash;</td><td>3.3 V</td><td>&mdash;</td><td>Design</td></tr>
    <tr><td>Current per lamp</td><td>Contacts 3 to 9</td><td>0.4 mA</td><td>1.2 mA</td><td>2 mA</td><td>Simulated; limits used for the check</td></tr>
    <tr><td>Total current</td><td>All lamps</td><td>&mdash;</td><td>&mdash;</td><td>10 mA</td><td>Calculated</td></tr>
    <tr><td>External input</td><td>J3</td><td>0 V</td><td>&mdash;</td><td>3.3 V</td><td>Design</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Component stress limits

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Part</th><th>Limit</th><th>Use on this board</th></tr></thead>
  <tbody>
    <tr><td>External input voltage</td><td>3.3 V</td><td>Never apply 5 V</td></tr>
    <tr><td>Controller pin load</td><td>About 1.2 mA per lamp</td><td>Add any load sharing the pin</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: simulation {#simulation}

One lamp circuit was simulated with ngspice.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Simulated results against limits">
<svg viewBox="0 0 1000 82" role="img" aria-labelledby="xb-bar-sim-t">
<title id="xb-bar-sim-t">Each simulated value (yellow mark) against its allowed range (green band).</title>
<text x="385" y="41" text-anchor="end" font-size="13" fill="#eaeaea">LED current per pin</text>
<path d="M400 36H860" stroke="#404040" stroke-width="10" stroke-linecap="round"/><path d="M444.5 36H815.5" stroke="#2f8f5b" stroke-width="10"/><path d="M623.2 23v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="41" font-size="13" font-weight="700" fill="#ffcc33">1.2&nbsp;mA</text>
</svg>
  </div>
  <figcaption>Simulated value (yellow) against the limit used for it (green). Each bar has its own scale.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Result</th><th>Simulated value</th><th>Limit</th><th>Outcome</th></tr></thead>
  <tbody>
    <tr><td>LED current per pin</td><td>1.2&nbsp;mA</td><td>400&nbsp;&micro;A to 2&nbsp;mA</td><td>Within</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Not simulated: brightness and LED colour spread, because no LED part number is fixed.

## Appendix: datasheet {#datasheets}

No data sheet is linked: the LEDs and resistors are generic parts chosen by size and value.

See all boards on the [extension boards](/extension-boards) page.
