---
layout: default
title: "Teensy 4.1 to Gadgeteer host board"
description: "A carrier that gives a Teensy 4.1 six Gadgeteer sockets and an I2C connector, with series resistors and ESD protection."
permalink: /extensions/teensy-to-gadgeteer-host
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Host adapters</p>
    <h1 id="teensy-to-gadgeteer-host">Teensy 4.1 to Gadgeteer host board</h1>
    <p class="xb-lead">Make a Teensy 4.1 the controller for small modules: six ten-contact sockets (Y, A, S, U, I and P) and an I&sup2;C connector. The program on the Teensy does the work.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/teensy-to-gadgeteer-host/v06/teensy-to-gadgeteer-host-diagram.png" alt="Top view of the Teensy 4.1 to Gadgeteer host board.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>6 sockets</b><span>Y A S U I P</span></div>
  <div class="xb-stat"><b>31</b><span>signals</span></div>
  <div class="xb-stat"><b>100 Ω</b><span>series each</span></div>
  <div class="xb-stat"><b>100 mA</b><span>3.3 V total</span></div>
  <div class="xb-stat"><b>500 mA</b><span>5 V total</span></div>
  <div class="xb-stat"><b>76 × 56</b><span>millimetres</span></div>
</div>

<nav class="xb-nav" aria-label="On this page">
  <a href="#specs">Tech specs</a>
  <a href="#tour">Board tour</a>
  <a href="#pinout">Pinout</a>
  <a href="#what-you-need">What you need</a>
  <a href="#get-started">Get started</a>
  <a href="#configuration">Configuration</a>
  <a href="#how-it-works">How it works</a>
  <a href="#troubleshooting">Troubleshooting</a>
  <a href="#downloads">Downloads</a>
  <a href="#mounting">Mounting</a>
  <a href="#electrical">Electrical</a>
  <a href="#datasheets">Datasheets</a>
</nav>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  3.3&nbsp;V signals only, not 5&nbsp;V tolerant. Never feed 3.3&nbsp;V in from outside, never join the board to a powered controller, and keep within the supply totals.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>Gadgeteer host ports for a Teensy 4.1</td></tr>
    <tr><td>Seating</td><td>Two 1&times;24 sockets, 15.24&nbsp;mm apart</td></tr>
    <tr><td>Protection</td><td>100&nbsp;&Omega; and <a href="/images/extensions/teensy-to-gadgeteer-host/datasheets/tpd4e1u06.pdf">TPD4E1U06</a> ESD arrays</td></tr>
    <tr><td>Supplies</td><td>5&nbsp;V from Teensy VIN through a diode; 3.3&nbsp;V through a ferrite</td></tr>
    <tr><td>I²C connector</td><td>2.54&nbsp;mm header, or a Qwiic socket, same bus as J5</td></tr>
    <tr><td>Links</td><td>JP1, JP2 lights; JP3, JP4 I&sup2;C pull-ups</td></tr>
    <tr><td>Size</td><td>76 &times; 56&nbsp;mm, four M3 holes</td></tr>
    <tr><td>Licence</td><td>CERN-OHL-S-2.0</td></tr>
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
      <img src="/images/extensions/teensy-to-gadgeteer-host/v06/teensy-to-gadgeteer-host-diagram.png" alt="Top view of the Teensy 4.1 to Gadgeteer host board with numbered markers explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:-0.2%;top:32.3%" aria-label="1: Teensy row, VIN side (J9)">1<span class="xb-pop"></span></a>
      <a class="xb-mk xb-pl" href="#tour-2" style="left:-0.2%;top:58.6%" aria-label="2: Teensy row, pin 0 side (J10)">2<span class="xb-pop"></span></a>
      <a class="xb-mk" href="#tour-3" style="left:74.1%;top:81.3%" aria-label="3: GPIO socket (J1)">3<span class="xb-pop"><b>GPIO socket (J1)</b> — type Y.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-4" style="left:15.1%;top:9.6%" aria-label="4: Analog socket (J2)">4<span class="xb-pop"><b>Analog socket (J2)</b> — type A.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:44.6%;top:81.3%" aria-label="5: SPI socket (J3)">5<span class="xb-pop"><b>SPI socket (J3)</b> — type S.</span></a>
      <a class="xb-mk xb-pl" href="#tour-6" style="left:15.1%;top:81.3%" aria-label="6: Serial socket (J4)">6<span class="xb-pop"><b>Serial socket (J4)</b> — type U.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:44.6%;top:9.6%" aria-label="7: I&sup2;C socket (J5)">7<span class="xb-pop"><b>I&sup2;C socket (J5)</b> — type I.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:74.1%;top:9.6%" aria-label="8: PWM socket (J6)">8<span class="xb-pop"><b>PWM socket (J6)</b> — type P.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-9" style="left:79.9%;top:27.3%" aria-label="9: I&sup2;C header (J8)">9<span class="xb-pop"><b>I&sup2;C header (J8)</b> — 3.3&nbsp;V.</span></a>
      <a class="xb-mk xb-pb" href="#tour-10" style="left:47.6%;top:25.3%" aria-label="10: 5 V light (D2)">10<span class="xb-pop"><b>5 V light (D2)</b> — green.</span></a>
      <a class="xb-mk xb-pb" href="#tour-11" style="left:60.6%;top:25.3%" aria-label="11: 3.3 V light (D3)">11<span class="xb-pop"><b>3.3 V light (D3)</b> — green.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Teensy row, VIN side (J9)</b> — USB end marked.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Teensy row, pin 0 side (J10)</b> — the other row.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>GPIO socket (J1)</b> — type Y.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Analog socket (J2)</b> — type A.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>SPI socket (J3)</b> — type S.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Serial socket (J4)</b> — type U.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>I&sup2;C socket (J5)</b> — type I.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>PWM socket (J6)</b> — type P.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>I&sup2;C header (J8)</b> — 3.3&nbsp;V.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>5 V light (D2)</b> — green.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>3.3 V light (D3)</b> — green.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

### Lights {#lights}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th>Lit means</th><th>Disable it</th></tr></thead>
  <tbody>
    <tr><td>D2, green</td><td>5&nbsp;V present</td><td>Cut JP1</td></tr>
    <tr><td>D3, green</td><td>3.3&nbsp;V present</td><td>Cut JP2</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Pinout {#pinout}

Contact 1 is 3.3&nbsp;V, contact 2 is 5&nbsp;V and contact 10 ground on J1 to J6; contacts not listed are not connected. Numbers are Teensy digital pins.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Socket contact</th><th>Teensy pin</th></tr></thead>
  <tbody>
    <tr><td>J1: 3 to 9</td><td>24 to 30</td></tr>
    <tr><td>J2: 3 to 6</td><td>20 (A6), 21 (A7), 22 (A8), 23</td></tr>
    <tr><td>J3: 3 to 5</td><td>4, 5, 6</td></tr>
    <tr><td>J3: 6 to 9</td><td>CS 10, MOSI 11, MISO 12, SCK 13</td></tr>
    <tr><td>J4: 3 to 6</td><td>2, TX1 1, RX1 0, 3</td></tr>
    <tr><td>J5: 3, 6, 8, 9</td><td>17, 14, SDA 18, SCL 19</td></tr>
    <tr><td>J6: 3, 6 to 9</td><td>15, 16, 7, 8, 9</td></tr>
    <tr><td>J8: 1 to 4</td><td>Ground, 3.3&nbsp;V, SDA 18, SCL 19</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Teensy 4.1</b><span>With header pins.</span></div>
  <div class="xb-card"><b>This board</b><span>And a USB lead.</span></div>
  <div class="xb-card"><b>A module</b><span>For example the Buzzer module.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

This example sounds the [Buzzer module](/extensions/buzzer-module).

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 652" role="img" aria-labelledby="xb-teensy-to-gadgeteer-host-wire"><title id="xb-teensy-to-gadgeteer-host-wire">Wiring: J1 contact 1 to J1 pin 1; J1 contact 2 to J1 pin 2; J1 contact 3 to J1 pin 3; J1 contact 4 to J1 pin 4; J1 contact 5 to J1 pin 5; J1 contact 6 to J1 pin 6; J1 contact 7 to J1 pin 7; J1 contact 8 to J1 pin 8; J1 contact 9 to J1 pin 9; J1 contact 10 to J1 pin 10.</title><image href="/images/extensions/teensy-to-gadgeteer-host/v06/teensy-to-gadgeteer-host-diagram.png" x="345" y="14" width="309" height="230"/><circle cx="575" cy="201" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="556" y="220" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="575" y="234" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J1</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J1 on this board</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Buzzer module</text><rect x="700" y="304" width="270" height="330" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><rect x="815" y="419" width="130" height="100" rx="8" fill="#20365c" stroke="#7fa6e0" stroke-width="1.5"/><rect x="858" y="449" width="44" height="40" rx="3" fill="#14171c" stroke="#8b949e" stroke-width="1.5"/><circle cx="828" cy="435" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="452" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="469" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="486" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="503" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="930" cy="433" r="6" fill="#0d0f12" stroke="#c4cad3" stroke-width="1.5"/><circle cx="930" cy="505" r="6" fill="#0d0f12" stroke="#c4cad3" stroke-width="1.5"/><rect x="908" y="463" width="18" height="10" rx="1" fill="#c9a66b" stroke="#c9a66b" stroke-width="1.5"/><rect x="30" y="304" width="200" height="330" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 334.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="334" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="334" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="339" text-anchor="end" font-size="14" fill="#e6ebf2">  1</text><text x="712" y="339" text-anchor="start" font-size="13" fill="#e6ebf2">J1 pin 1</text><rect x="340" y="323" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="339" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1: J1 pin 1</text><path d="M230 364.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" fill="#e6ebf2">  2</text><text x="712" y="369" text-anchor="start" font-size="13" fill="#e6ebf2">J1 pin 2</text><rect x="340" y="353" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">2: J1 pin 2</text><path d="M230 394.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" fill="#e6ebf2">  3</text><text x="712" y="399" text-anchor="start" font-size="13" fill="#e6ebf2">J1 pin 3</text><rect x="340" y="383" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">3: J1 pin 3</text><path d="M230 424.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="429" text-anchor="end" font-size="14" fill="#e6ebf2">  4</text><text x="712" y="429" text-anchor="start" font-size="13" fill="#e6ebf2">J1 pin 4</text><rect x="340" y="413" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="429" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">4: J1 pin 4</text><path d="M230 454.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="454" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="454" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="459" text-anchor="end" font-size="14" fill="#e6ebf2">  5</text><text x="712" y="459" text-anchor="start" font-size="13" fill="#e6ebf2">J1 pin 5</text><rect x="340" y="443" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="459" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">5: J1 pin 5</text><path d="M230 484.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="484" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="484" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="489" text-anchor="end" font-size="14" fill="#e6ebf2">  6</text><text x="712" y="489" text-anchor="start" font-size="13" fill="#e6ebf2">J1 pin 6</text><rect x="340" y="473" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="489" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">6: J1 pin 6</text><path d="M230 514.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="514" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="514" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="519" text-anchor="end" font-size="14" fill="#e6ebf2">  7</text><text x="712" y="519" text-anchor="start" font-size="13" fill="#e6ebf2">J1 pin 7</text><rect x="340" y="503" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="519" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">7: J1 pin 7</text><path d="M230 544.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="544" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="544" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="549" text-anchor="end" font-size="14" fill="#e6ebf2">  8</text><text x="712" y="549" text-anchor="start" font-size="13" fill="#e6ebf2">J1 pin 8</text><rect x="340" y="533" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="549" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">8: J1 pin 8</text><path d="M230 574.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="574" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="574" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="579" text-anchor="end" font-size="14" fill="#e6ebf2">  9</text><text x="712" y="579" text-anchor="start" font-size="13" fill="#e6ebf2">J1 pin 9</text><rect x="340" y="563" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="579" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">9: J1 pin 9</text><path d="M230 604.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="604" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="604" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="609" text-anchor="end" font-size="14" fill="#e6ebf2">  10</text><text x="712" y="609" text-anchor="start" font-size="13" fill="#e6ebf2">J1 pin 10</text><rect x="340" y="593" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="609" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">10: J1 pin 10</text></svg>
  </div>
  <figcaption>Cable contact for contact with the power off; bridge the module JP1 pads 1–2 only. Equipment is drawn as a typical unit, not a specific model.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Seat the Teensy</h3>
    <p>Power off, USB end at the marked end.</p>
  </li>
  <li class="xb-step">
    <h3>Prepare the module</h3>
    <p>Bridge its JP1 pads 1&ndash;2 only.</p>
  </li>
  <li class="xb-step">
    <h3>Cable</h3>
    <p>Join host J1 to the module&rsquo;s J1.</p>
  </li>
  <li class="xb-step">
    <h3>Upload</h3>
    <p>Select Teensy 4.1 and upload the program below.</p>
    <p class="xb-expect">100 ms of sound every second.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Use a module from the Teensy</td><td>Your Teensy program; not a Smoothieboard module</td><td><a href="#config-main">Setup</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Setup {#config-main}

Smoothieware is not involved: the Teensy is the host.

```cpp
constexpr unsigned int BUZZER_PIN = 24;  // socket J1 contact 3
void setup() {
  digitalWrite(BUZZER_PIN, LOW);
  pinMode(BUZZER_PIN, OUTPUT);
}
void loop() {
  digitalWrite(BUZZER_PIN, HIGH); delay(100);
  digitalWrite(BUZZER_PIN, LOW);  delay(900);
}
```

## How it works {#how-it-works}

Each Teensy signal reaches its socket through 100&nbsp;&Omega;, with ESD protection. There is no level conversion or second processor.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 142" role="img" aria-labelledby="xb-teensy-to-gadgeteer-host-path"><title id="xb-teensy-to-gadgeteer-host-path">Teensy signal then 100 Ω with ESD protection then Socket, no level conversion.</title><rect x="46" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="186" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Teensy signal</text><text x="186" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="360" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">100 Ω with ESD protection</text><text x="500" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M330.0 70H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 63L358 70L349 77Z" fill="#5fb3ff"/><rect x="674" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="814" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Socket</text><text x="814" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2">no level conversion</text><path d="M644.0 70H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 63L672 70L663 77Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Socket J1 dead</td><td>It needs a Teensy 4.1; a 4.0 does not reach those pins.</td></tr>
    <tr><td>Serial2 or PWM conflicts</td><td>J6 contacts 7 and 8 are also Serial2.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/teensy-to-gadgeteer-host/v06/teensy-to-gadgeteer-host-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/teensy-to-gadgeteer-host/v06/teensy-to-gadgeteer-host-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/teensy-to-gadgeteer-host/v06/teensy-to-gadgeteer-host-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-te-mount-t">
  <title id="xb-te-mount-t">Mounting drawing of the te, component side: outline 76 by 56 millimetres with 4 mounting holes and 3 cable-tie holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="249.3" y="78.0" width="461.4" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M249.3 56H710.7"/><path d="M249.3 50V62"/><path d="M710.7 50V62"/><path d="M736.7 78.0V418.0"/><path d="M730.7 78.0h12"/><path d="M730.7 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">76</text>
  <text x="748.7" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">56</text>
  <circle cx="249.3" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="237.3" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M191.3 104.0h30" fill="none"/><path d="M225.3 104.0l-8 -4v8z"/><path d="M191.3 104.0v30" fill="none"/><path d="M191.3 138.0l-4 -8h8z"/></g>
  <text x="229.3" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="187.3" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="267.5" cy="96.2" r="9.7" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M253.8 96.2h27.4M267.5 82.5v27.4" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="257.8" y="158.2" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  3.00, 3.00</text>
  <circle cx="692.5" cy="96.2" r="9.7" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M678.8 96.2h27.4M692.5 82.5v27.4" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="702.2" y="125.9" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  73.00, 3.00</text>
  <circle cx="267.5" cy="399.8" r="9.7" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M253.8 399.8h27.4M267.5 386.1v27.4" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="257.8" y="380.1" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  3.00, 53.00</text>
  <circle cx="692.5" cy="399.8" r="9.7" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M678.8 399.8h27.4M692.5 386.1v27.4" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="702.2" y="380.1" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  73.00, 53.00</text>
  <circle cx="267.5" cy="129.6" r="7.6" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <circle cx="671.2" cy="336.0" r="7.6" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <circle cx="695.5" cy="345.1" r="7.6" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <text x="544.8" y="113.0" text-anchor="middle" font-size="12" fill="#a9b4c2">cable tie</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 76 × 56&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>3.00</td><td>3.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>73.00</td><td>3.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>3.00</td><td>53.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>73.00</td><td>53.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>–</td><td>3.00</td><td>8.50</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
    <tr><td>–</td><td>69.50</td><td>42.50</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
    <tr><td>–</td><td>73.50</td><td>44.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Limits for the whole board.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>3.3 V load</td><td>All sockets</td><td>—</td><td>—</td><td>100 mA</td><td>Total</td></tr>
    <tr><td>5 V load</td><td>All sockets</td><td>—</td><td>—</td><td>500 mA</td><td>Total</td></tr>
    <tr><td>Signals</td><td>All</td><td>—</td><td>3.3 V</td><td>—</td><td>Not 5 V tolerant</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: datasheets {#datasheets}

The first page of each important chip&rsquo;s datasheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/teensy-to-gadgeteer-host/datasheets/tpd4e1u06.pdf"><img src="/images/extensions/teensy-to-gadgeteer-host/datasheets/tpd4e1u06-page1.png" alt="First page of the TPD4E1U06 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/teensy-to-gadgeteer-host/datasheets/tpd4e1u06.pdf">TPD4E1U06 four-channel ESD protection array</a> — Texas Instruments, 27 pages.</figcaption>
</figure>
{:/nomarkdown}


See all boards on the [extension boards](/extension-boards) page.
