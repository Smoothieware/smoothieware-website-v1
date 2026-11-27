---
layout: default
title: "LED breakout"
description: "Seven indicator lights on the signals of one Gadgeteer port: a light is on while its pin is low."
permalink: /extensions/led-breakout
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Indicators</p>
    <h1 id="led-breakout">LED breakout</h1>
    <p class="xb-lead">See what seven controller pins are doing: each light turns on while its pin is low. Plug one ribbon cable into a port, and pass the port on through the chain socket.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/led-breakout/v18/led-breakout-diagram.png" alt="Top view of the LED breakout.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>7</b><span>signal lights</span></div>
  <div class="xb-stat"><b>1</b><span>power light</span></div>
  <div class="xb-stat"><b>Low</b><span>lights the LED</span></div>
  <div class="xb-stat"><b>2.2 kΩ</b><span>per light</span></div>
  <div class="xb-stat"><b>3.3 V</b><span>supply</span></div>
  <div class="xb-stat"><b>35 × 25</b><span>millimetres</span></div>
</div>

<nav class="xb-nav" aria-label="On this page">
  <a href="#specs">Tech specs</a>
  <a href="#tour">Board tour</a>
  <a href="#pinout">Pinout</a>
  <a href="#what-you-need">What you need</a>
  <a href="#get-started">Get started</a>
  <a href="#configuration">Configuration</a>
  <a href="#how-it-works">How it works</a>
  <a href="#chaining">Chaining</a>
  <a href="#troubleshooting">Troubleshooting</a>
  <a href="#downloads">Downloads</a>
  <a href="#mounting">Mounting</a>
  <a href="#electrical">Electrical</a>
</nav>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  A light that is off means high, floating or unpowered. Do not use the board on inputs that rely on a pull-down, do not hot-plug it, and check the orientation of the lights on your assembly before the first power-up.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>Debug indicators for P3 to P9</td></tr>
    <tr><td>Host socket</td><td>J1, 2 &times; 5 at 1.27&nbsp;mm</td></tr>
    <tr><td>Chain socket</td><td>J2, through links JP3 to JP9, closed as delivered</td></tr>
    <tr><td>Signal lights</td><td>D3 to D9, yellow, from 3.3&nbsp;V through 2.2&nbsp;k&Omega; to the pin</td></tr>
    <tr><td>Power light</td><td>D1, green</td></tr>
    <tr><td>Disable links</td><td>JP1 turns off all seven signal lights; JP10 to JP17 turn off single lights; closed as delivered</td></tr>
    <tr><td>Size</td><td>35 &times; 25&nbsp;mm, two M3 mounting holes</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/led-breakout/v18/led-breakout-diagram.png" alt="Top view of the LED breakout with numbered markers explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:23.0%;top:20.3%" aria-label="1: Host socket (Y IN)">1<span class="xb-pop"><b>Host socket (Y IN)</b> — the ribbon cable from the controller.</span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:71.6%;top:20.3%" aria-label="2: Chain socket (Y CHAIN)">2<span class="xb-pop"><b>Chain socket (Y CHAIN)</b> — passes the port on.</span></a>
      <a class="xb-mk xb-pl" href="#tour-3" style="left:6.2%;top:57.3%" aria-label="3: Power light (D1)">3<span class="xb-pop"><b>Power light (D1)</b> — on when 3.3&nbsp;V is present.</span></a>
      <a class="xb-mk xb-pl" href="#tour-4" style="left:18.1%;top:78.8%" aria-label="4: Light for P3 (D3)">4<span class="xb-pop"><b>Light for P3 (D3)</b> — on while pin P3 is low.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:47.3%;top:78.8%" aria-label="5: Light for P6 (D6)">5<span class="xb-pop"><b>Light for P6 (D6)</b> — on while pin P6 is low.</span></a>
      <a class="xb-mk xb-pr" href="#tour-6" style="left:76.5%;top:78.8%" aria-label="6: Light for P9 (D9)">6<span class="xb-pop"><b>Light for P9 (D9)</b> — on while pin P9 is low.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-7" style="left:87.8%;top:39.5%" aria-label="7: Light supply link (JP1)">7<span class="xb-pop"><b>Light supply link (JP1)</b> — cut to turn off all signal lights.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:36.4%;top:41.4%" aria-label="8: Chain link 3 (JP3)">8<span class="xb-pop"><b>Chain link 3 (JP3)</b> — cut to stop P3 at this board.</span></a>
      <a class="xb-mk xb-pl" href="#tour-9" style="left:15.9%;top:69.5%" aria-label="9: Disable link of D3 (JP13)">9<span class="xb-pop"><b>Disable link of D3 (JP13)</b> — cut to turn off that light only.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host socket (Y IN)</b> — the ribbon cable from the controller.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket (Y CHAIN)</b> — passes the port on.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Power light (D1)</b> — on when 3.3&nbsp;V is present.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Light for P3 (D3)</b> — on while pin P3 is low.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Light for P6 (D6)</b> — on while pin P6 is low.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Light for P9 (D9)</b> — on while pin P9 is low.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Light supply link (JP1)</b> — cut to turn off all signal lights.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Chain link 3 (JP3)</b> — cut to stop P3 at this board.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Disable link of D3 (JP13)</b> — cut to turn off that light only.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

### Lights {#lights}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th>Lit means</th><th>Disable it</th></tr></thead>
  <tbody>
    <tr><td>D1, green</td><td>3.3&nbsp;V present</td><td>JP16</td></tr>
    <tr><td>D3, yellow</td><td>P3 is low</td><td>JP13</td></tr>
    <tr><td>D4, yellow</td><td>P4 is low</td><td>JP17</td></tr>
    <tr><td>D5, yellow</td><td>P5 is low</td><td>JP12</td></tr>
    <tr><td>D6, yellow</td><td>P6 is low</td><td>JP14</td></tr>
    <tr><td>D7, yellow</td><td>P7 is low</td><td>JP15</td></tr>
    <tr><td>D8, yellow</td><td>P8 is low</td><td>JP11</td></tr>
    <tr><td>D9, yellow</td><td>P9 is low</td><td>JP10</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Pinout {#pinout}

Contacts keep their numbers from the controller to the board. The controller pin names below apply to header G_F (connector J37) of Smoothieboard V2 Prime; another header or controller has other pins. Treat every signal as 3.3&nbsp;V only: PB1, PA4 and PG1 are not 5&nbsp;V tolerant.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>Pin on Smoothieboard V2 Prime, header G_F (J37)</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span> (the controller&rsquo;s limited rail)</td><td>not a signal</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span> (the controller&rsquo;s limited rail)</td><td>not a signal</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">P3</span></td><td><code>PB1</code></td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">P4</span></td><td><code>PJ4</code></td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">P5</span></td><td><code>PA4</code></td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">P6</span></td><td><code>PG0</code></td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-sig">P7</span></td><td><code>PJ3</code></td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">P8</span></td><td><code>PG1</code></td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">P9</span></td><td><code>PJ2</code></td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>ground</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>Built from the design files in Downloads</span></div>
  <div class="xb-card"><b>A ten-wire cable</b><span>Both ends 2 &times; 5 contacts at 1.27&nbsp;mm pitch, wired 1 to 1. A 2.54&nbsp;mm jumper plug does not fit. The Prime header has no keyed housing, so check contact 1 at both ends.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

This test switches the P3 light from G-code on Smoothieboard V2 Prime.


{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Power off and reserve the pins</h3>
    <p>Disconnect power. All seven pins are wired to lights, so make sure no other circuit on them minds a light and resistor to 3.3&nbsp;V.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the cable</h3>
    <p>Controller G_F (J37) contact n to J1 contact n, for all ten. Leave J2 empty.</p>
  </li>
  <li class="xb-step">
    <h3>Configure</h3>
    <p>Add the settings below and power up.</p>
    <p class="xb-expect">D1 lights.</p>
  </li>
  <li class="xb-step">
    <h3>Switch the light</h3>
    <p>Send <code>M106.9</code>, then <code>M107.9</code>.</p>
    <p class="xb-expect">D3 turns on, then off.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>To switch a light from G-code</td><td>Switch, output</td><td><a href="#config-light">1</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### 1. Light as a status output (switch module) {#config-light}

```ini
[switch]
led_test.enable = true
led_test.output_pin = PB1!
led_test.output_type = digital
led_test.input_on_command = M106
led_test.input_off_command = M107
led_test.subcode = 9
led_test.startup_state = false
led_test.halt_set_to = false
```

<code>!</code> inverts the pin so that <code>on</code> means light on. <code>M106.9</code> or <code>switch led_test on</code> turns D3 on. The other pins are configured the same way with their own name and subcode ([switch source](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/switch/Switch.cpp)).

The lights need no setting of their own: wired next to another module, they simply show that module&rsquo;s pins. This is the only configuration example because the board has no other function.

## How it works {#how-it-works}

Each pin P3 to P9 connects to its light, whose other side goes through a 2.2&nbsp;k&Omega; resistor and a disable link to the shared 3.3&nbsp;V feed. When the pin is low, current flows and the light is on. The board does not buffer the pin and adds no outputs.

## Chaining {#chaining}

{::nomarkdown}
{% include _includes/extension-chain-figure.html id="xb-lb" board="LED breakout" in_label="Y IN" chain_label="Y CHAIN" lane1="pin 3" lane2="pin 4" lane3="pin 5" s1="closed" s2="closed" s3="closed" caption="As delivered every link is closed, so a board on the chain shares each pin with its light." %}
{:/nomarkdown}

Chained boards share the same pins. Cut a link JP3 to JP9 to keep that pin on this board only.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>D1 off</td><td>Cable, controller power, link JP16.</td></tr>
    <tr><td>No signal light at all</td><td>Link JP1.</td></tr>
    <tr><td>One light never on</td><td>Its disable link, the pin name, and the orientation of the light.</td></tr>
    <tr><td>Light on before configuration</td><td>The pin is low or driven low at start-up.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/led-breakout/v18/led-breakout-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/led-breakout/v18/led-breakout-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/led-breakout/v18/led-breakout-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-lb-mount-t">
  <title id="xb-lb-mount-t">Mounting drawing of the lb, component side: outline 35 by 25 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="242.0" y="78.0" width="476.0" height="340.0" rx="13.6" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M242.0 56H718.0"/><path d="M242.0 50V62"/><path d="M718.0 50V62"/><path d="M744.0 78.0V418.0"/><path d="M738.0 78.0h12"/><path d="M738.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">35</text>
  <text x="756.0" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">25</text>
  <circle cx="242.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="230.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M184.0 104.0h30" fill="none"/><path d="M218.0 104.0l-8 -4v8z"/><path d="M184.0 104.0v30" fill="none"/><path d="M184.0 138.0l-4 -8h8z"/></g>
  <text x="222.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="180.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="337.2" cy="248.0" r="21.8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M311.4 248.0h51.5M337.2 222.2v51.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="315.4" y="216.2" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  7.00, 12.50</text>
  <circle cx="609.2" cy="248.0" r="21.8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M583.4 248.0h51.5M609.2 222.2v51.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="631.0" y="216.2" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  27.00, 12.50</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 35 × 25&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>7.00</td><td>12.50</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>27.00</td><td>12.50</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Values from the parts list.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Supply</td><td>3.3 V rail</td><td>—</td><td>3.3 V</td><td>—</td><td>From the controller</td></tr>
    <tr><td>Series resistance</td><td>Each light</td><td>—</td><td>2.2 kΩ</td><td>—</td><td>10%</td></tr>
    <tr><td>Current per light</td><td>D3 to D9</td><td>—</td><td>—</td><td>Open</td><td>Depends on the fitted LED; not established</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Originally designed by Bob Cousins as <a href="/extensions/historical-ledsimple">LedSimple</a>.

See all boards on the [extension boards](/extension-boards) page.
