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
    <img src="/images/extensions/led-breakout/v18/led-breakout-diagram.webp" alt="Top view of the LED breakout.">
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
      <img src="/images/extensions/led-breakout/v18/led-breakout-diagram.webp" alt="Top view of the LED breakout with numbered markers explained in the list below.">
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
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 652" role="img" aria-labelledby="xb-led-breakout-wire"><title id="xb-led-breakout-wire">Wiring: controller contact 1 to J1 contact 1; controller contact 2 to J1 contact 2; controller contact 3 to J1 contact 3; controller contact 4 to J1 contact 4; controller contact 5 to J1 contact 5; controller contact 6 to J1 contact 6; controller contact 7 to J1 contact 7; controller contact 8 to J1 contact 8; controller contact 9 to J1 contact 9; controller contact 10 to J1 contact 10.</title><image href="/images/extensions/led-breakout/v18/led-breakout-diagram.webp" x="342" y="14" width="315" height="230"/><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Prime header G_F/J37</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J1 on this board</text><rect x="30" y="304" width="200" height="330" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="130" y="465" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Smoothieboard</text><text x="130" y="485" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">V2 Prime</text><rect x="770" y="304" width="200" height="330" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 334.0H770" fill="none" stroke="#d92d2d" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="334" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="334" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><text x="216" y="339" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">1</text><text x="784" y="339" text-anchor="start" font-size="14" fill="#eaeaea">1  3.3 V</text><rect x="400" y="323" width="200" height="22" rx="11" fill="#d92d2d" stroke="#d92d2d" stroke-width="1.5"/><text x="500" y="339" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1 to 1: 3.3 V</text><path d="M230 364.0H770" fill="none" stroke="#e8820c" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="364" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">2</text><text x="784" y="369" text-anchor="start" font-size="14" fill="#eaeaea">2  5 V</text><rect x="400" y="353" width="200" height="22" rx="11" fill="#e8820c" stroke="#e8820c" stroke-width="1.5"/><text x="500" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#111">2 to 2: 5 V</text><path d="M230 394.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">3</text><text x="784" y="399" text-anchor="start" font-size="14" fill="#eaeaea">3  </text><rect x="400" y="383" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">3 to 3</text><path d="M230 424.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="429" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">4</text><text x="784" y="429" text-anchor="start" font-size="14" fill="#eaeaea">4  </text><rect x="400" y="413" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="429" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">4 to 4</text><path d="M230 454.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="454" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="454" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="459" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">5</text><text x="784" y="459" text-anchor="start" font-size="14" fill="#eaeaea">5  </text><rect x="400" y="443" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="459" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">5 to 5</text><path d="M230 484.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="484" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="484" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="489" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">6</text><text x="784" y="489" text-anchor="start" font-size="14" fill="#eaeaea">6  </text><rect x="400" y="473" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="489" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">6 to 6</text><path d="M230 514.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="514" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="514" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="519" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">7</text><text x="784" y="519" text-anchor="start" font-size="14" fill="#eaeaea">7  </text><rect x="400" y="503" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="519" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">7 to 7</text><path d="M230 544.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="544" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="544" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="549" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">8</text><text x="784" y="549" text-anchor="start" font-size="14" fill="#eaeaea">8  </text><rect x="400" y="533" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="549" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">8 to 8</text><path d="M230 574.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="574" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="574" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="579" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">9</text><text x="784" y="579" text-anchor="start" font-size="14" fill="#eaeaea">9  </text><rect x="400" y="563" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="579" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">9 to 9</text><path d="M230 604.0H770" fill="none" stroke="#939393" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="604" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="604" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><text x="216" y="609" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">10</text><text x="784" y="609" text-anchor="start" font-size="14" fill="#eaeaea">10  GND</text><rect x="400" y="593" width="200" height="22" rx="11" fill="#939393" stroke="#939393" stroke-width="1.5"/><text x="500" y="609" text-anchor="middle" font-size="13" font-weight="700" fill="#111">10 to 10: GND</text></svg>
  </div>
  <figcaption>Wiring for this procedure. Yellow rings mark the connectors used. Make and change connections with the power off.</figcaption>
</figure>
{:/nomarkdown}

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

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 142" role="img" aria-labelledby="xb-led-breakout-path"><title id="xb-led-breakout-path">Shared 3.3 V feed then Disable link and 2.2 kΩ then Light then Pin P3 to P9, low turns light on.</title><rect x="20" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="127" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Shared 3.3 V feed</text><text x="127" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><rect x="268" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="376" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Disable link and 2.2 kΩ</text><text x="376" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M238.5 70H259.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M258 63L266 70L258 77Z" fill="#5fb3ff"/><rect x="517" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="624" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Light</text><text x="624" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M487.0 70H508.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M506 63L515 70L506 77Z" fill="#5fb3ff"/><rect x="766" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="873" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Pin P3 to P9</text><text x="873" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3">low turns light on</text><path d="M735.5 70H756.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M754 63L764 70L754 77Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board.</figcaption>
</figure>
{:/nomarkdown}


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
    <tr><td><a href="/images/extensions/led-breakout/v18/led-breakout-diagram.webp">Board drawing (WebP)</a></td><td>The top view used on this page</td></tr>
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
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="242.0" y="78.0" width="476.0" height="340.0" rx="13.6" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M242.0 56H718.0"/><path d="M242.0 50V62"/><path d="M718.0 50V62"/><path d="M744.0 78.0V418.0"/><path d="M738.0 78.0h12"/><path d="M738.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">35</text>
  <text x="756.0" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">25</text>
  <circle cx="242.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="230.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M184.0 104.0h30" fill="none"/><path d="M218.0 104.0l-8 -4v8z"/><path d="M184.0 104.0v30" fill="none"/><path d="M184.0 138.0l-4 -8h8z"/></g>
  <text x="222.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="180.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="337.2" cy="248.0" r="21.8" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M311.4 248.0h51.5M337.2 222.2v51.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="315.4" y="216.2" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  7.00, 12.50</text>
  <circle cx="609.2" cy="248.0" r="21.8" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M583.4 248.0h51.5M609.2 222.2v51.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="631.0" y="216.2" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  27.00, 12.50</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
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
