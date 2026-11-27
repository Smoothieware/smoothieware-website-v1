---
layout: default
title: "ESP32 DevKit to Gadgeteer host board"
description: "A carrier that gives an ESP32-DevKitC-32E five Gadgeteer sockets and an I2C connector, with series resistors and ESD protection."
permalink: /extensions/esp32-to-gadgeteer-host
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Host adapters</p>
    <h1 id="esp32-to-gadgeteer-host">ESP32 DevKit to Gadgeteer host board</h1>
    <p class="xb-lead">Plug in an ESP32-DevKitC-32E and connect small modules: five ten-contact sockets (A, S, U, I and P) and a Qwiic or pin-header I&sup2;C connector. Your firmware does the work.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/esp32-to-gadgeteer-host/v03/esp32-to-gadgeteer-host-diagram.webp" alt="Top view of the ESP32 DevKit to Gadgeteer host board.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>5 sockets</b><span>A S U I P</span></div>
  <div class="xb-stat"><b>100 Ω</b><span>series each</span></div>
  <div class="xb-stat"><b>100 mA</b><span>3.3 V total</span></div>
  <div class="xb-stat"><b>500 mA</b><span>5 V total</span></div>
  <div class="xb-stat"><b>3 holes</b><span>M3</span></div>
  <div class="xb-stat"><b>52.4 × 56</b><span>millimetres</span></div>
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
  All signals are 3.3&nbsp;V and not 5&nbsp;V tolerant. Use exactly one DevKit power source, never feed 3.3&nbsp;V in through a socket, and never cable a socket to a powered controller. There is no current limiter.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>Gadgeteer host ports for an ESP32</td></tr>
    <tr><td>DevKit</td><td>ESP32-DevKitC-32E (V4) with WROOM-32E, two rows of 19 pins 25.4&nbsp;mm apart; no WROVER modules</td></tr>
    <tr><td>Protection</td><td>100&nbsp;&Omega; and a <a href="/images/extensions/esp32-to-gadgeteer-host/datasheets/tpd4e1u06.pdf">TPD4E1U06</a> ESD channel on every signal</td></tr>
    <tr><td>3.3 V</td><td>From the DevKit regulator through a ferrite; total load up to 100&nbsp;mA</td></tr>
    <tr><td>5 V</td><td>Through a Schottky diode, about 4.4 to 4.6&nbsp;V on USB power; up to 500&nbsp;mA</td></tr>
    <tr><td>I²C pull-ups</td><td>4.7&nbsp;k&Omega;, removable with JP3 and JP4</td></tr>
    <tr><td>I²C connector</td><td>J6: 2.54&nbsp;mm header, or a Qwiic socket on the same pads</td></tr>
    <tr><td>Size</td><td>52.4 &times; 56&nbsp;mm</td></tr>
    <tr><td>Licence</td><td>CERN OHL-S 2.0</td></tr>
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
      <img src="/images/extensions/esp32-to-gadgeteer-host/v03/esp32-to-gadgeteer-host-diagram.webp" alt="Top view of the ESP32 DevKit to Gadgeteer host board with numbered markers explained in the list below.">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:26.6%;top:6.0%" aria-label="1: Left DevKit row (J7)">1<span class="xb-pop"><b>Left DevKit row (J7)</b> — pin 1 at the antenna end.</span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:73.3%;top:6.0%" aria-label="2: Right DevKit row (J8)">2<span class="xb-pop"><b>Right DevKit row (J8)</b> — pin 1 at the antenna end.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-3" style="left:9.0%;top:15.8%" aria-label="3: Analog socket (J1)">3<span class="xb-pop"><b>Analog socket (J1)</b> — inputs.</span></a>
      <a class="xb-mk xb-pl" href="#tour-4" style="left:9.0%;top:74.8%" aria-label="4: SPI socket (J2)">4<span class="xb-pop"><b>SPI socket (J2)</b> — type S.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-5" style="left:90.9%;top:47.9%" aria-label="5: Serial socket (J3)">5<span class="xb-pop"><b>Serial socket (J3)</b> — type U.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-6" style="left:90.9%;top:21.5%" aria-label="6: I&sup2;C socket (J4)">6<span class="xb-pop"><b>I&sup2;C socket (J4)</b> — type I.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-7" style="left:9.0%;top:45.3%" aria-label="7: PWM socket (J5)">7<span class="xb-pop"><b>PWM socket (J5)</b> — type P.</span></a>
      <a class="xb-mk xb-pr" href="#tour-8" style="left:85.4%;top:76.7%" aria-label="8: I&sup2;C connector (J6)">8<span class="xb-pop"><b>I&sup2;C connector (J6)</b> — 3.3&nbsp;V.</span></a>
      <a class="xb-mk xb-pl" href="#tour-9" style="left:17.6%;top:95.0%" aria-label="9: 3.3 V light (D2)">9<span class="xb-pop"><b>3.3 V light (D2)</b> — green.</span></a>
      <a class="xb-mk xb-pr" href="#tour-10" style="left:80.1%;top:95.0%" aria-label="10: 5 V light (D3)">10<span class="xb-pop"><b>5 V light (D3)</b> — green.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Left DevKit row (J7)</b> — pin 1 at the antenna end.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Right DevKit row (J8)</b> — pin 1 at the antenna end.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Analog socket (J1)</b> — inputs.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>SPI socket (J2)</b> — type S.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Serial socket (J3)</b> — type U.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>I&sup2;C socket (J4)</b> — type I.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>PWM socket (J5)</b> — type P.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>I&sup2;C connector (J6)</b> — 3.3&nbsp;V.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>3.3 V light (D2)</b> — green.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>5 V light (D3)</b> — green.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

### Lights {#lights}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th>Lit means</th><th>Disable it</th></tr></thead>
  <tbody>
    <tr><td>D2, green</td><td>3.3&nbsp;V present</td><td>Cut JP1</td></tr>
    <tr><td>D3, green</td><td>5&nbsp;V present</td><td>Cut JP2</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Pinout {#pinout}

Contact 1 is 3.3&nbsp;V, contact 2 is 5&nbsp;V and contact 10 ground on J1 to J5; contacts not listed are not connected.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Socket contact</th><th>ESP32 pin</th></tr></thead>
  <tbody>
    <tr><td>J1: 3, 4, 5, 6</td><td>GPIO36, 39, 34 (input only), 32</td></tr>
    <tr><td>J2: 3, 4, 5</td><td>GPIO33, 13, 14</td></tr>
    <tr><td>J2: 6, 7, 8, 9</td><td>CS 5, MOSI 23, MISO 19, SCK 18</td></tr>
    <tr><td>J3: 3, 4, 5</td><td>GPIO4, TX 17, RX 16</td></tr>
    <tr><td>J4: 3, 8, 9</td><td>GPIO35 (input only), SDA 21, SCL 22</td></tr>
    <tr><td>J5: 3, 6</td><td>GPIO26, 15</td></tr>
    <tr><td>J5: 7, 8, 9</td><td>GPIO25, 27, 2</td></tr>
    <tr><td>J6: 1, 2, 3, 4</td><td>Ground, 3.3&nbsp;V, SDA, SCL</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

GPIO2, 5 and 15 set the boot mode: a module on them must not disturb their level during reset.

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>ESP32-DevKitC-32E</b><span>With header pins.</span></div>
  <div class="xb-card"><b>This board</b><span>And a USB lead.</span></div>
  <div class="xb-card"><b>A module</b><span>For example the Buzzer module.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

This example sounds the [Buzzer module](/extensions/buzzer-module).

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 652" role="img" aria-labelledby="xb-esp32-to-gadgeteer-host-wire"><title id="xb-esp32-to-gadgeteer-host-wire">Wiring: J5 contact 1 to 3.3 V; J5 contact 2 to 5 V; J5 contact 3 to signal 3; J5 contact 4 to signal 4; J5 contact 5 to signal 5; J5 contact 6 to signal 6; J5 contact 7 to signal 7; J5 contact 8 to signal 8; J5 contact 9 to signal 9; J5 contact 10 to GND.</title><image href="/images/extensions/esp32-to-gadgeteer-host/v03/esp32-to-gadgeteer-host-diagram.webp" x="392" y="14" width="216" height="230"/><circle cx="412" cy="118" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="393" y="137" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="412" y="151" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J5</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J5 on this board</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Buzzer module</text><rect x="700" y="304" width="270" height="330" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><rect x="815" y="419" width="130" height="100" rx="8" fill="#20365c" stroke="#7fa6e0" stroke-width="1.5"/><rect x="858" y="449" width="44" height="40" rx="3" fill="#171717" stroke="#939393" stroke-width="1.5"/><circle cx="828" cy="435" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="452" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="469" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="486" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="503" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="930" cy="433" r="6" fill="#0d0f12" stroke="#c9c9c9" stroke-width="1.5"/><circle cx="930" cy="505" r="6" fill="#0d0f12" stroke="#c9c9c9" stroke-width="1.5"/><rect x="908" y="463" width="18" height="10" rx="1" fill="#c9a66b" stroke="#c9a66b" stroke-width="1.5"/><rect x="30" y="304" width="200" height="330" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 334.0H700" fill="none" stroke="#d92d2d" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="334" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="334" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><text x="216" y="339" text-anchor="end" font-size="14" fill="#eaeaea">  1</text><text x="712" y="339" text-anchor="start" font-size="13" fill="#eaeaea">3.3 V</text><rect x="340" y="323" width="220" height="22" rx="11" fill="#d92d2d" stroke="#d92d2d" stroke-width="1.5"/><text x="450" y="339" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1: 3.3 V</text><path d="M230 364.0H700" fill="none" stroke="#e8820c" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="364" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" fill="#eaeaea">  2</text><text x="712" y="369" text-anchor="start" font-size="13" fill="#eaeaea">5 V</text><rect x="340" y="353" width="220" height="22" rx="11" fill="#e8820c" stroke="#e8820c" stroke-width="1.5"/><text x="450" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#111">2: 5 V</text><path d="M230 394.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" fill="#eaeaea">  3</text><text x="712" y="399" text-anchor="start" font-size="13" fill="#eaeaea">signal 3</text><rect x="340" y="383" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">3: signal 3</text><path d="M230 424.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="429" text-anchor="end" font-size="14" fill="#eaeaea">  4</text><text x="712" y="429" text-anchor="start" font-size="13" fill="#eaeaea">signal 4</text><rect x="340" y="413" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="429" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">4: signal 4</text><path d="M230 454.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="454" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="454" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="459" text-anchor="end" font-size="14" fill="#eaeaea">  5</text><text x="712" y="459" text-anchor="start" font-size="13" fill="#eaeaea">signal 5</text><rect x="340" y="443" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="459" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">5: signal 5</text><path d="M230 484.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="484" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="484" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="489" text-anchor="end" font-size="14" fill="#eaeaea">  6</text><text x="712" y="489" text-anchor="start" font-size="13" fill="#eaeaea">signal 6</text><rect x="340" y="473" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="489" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">6: signal 6</text><path d="M230 514.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="514" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="514" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="519" text-anchor="end" font-size="14" fill="#eaeaea">  7</text><text x="712" y="519" text-anchor="start" font-size="13" fill="#eaeaea">signal 7</text><rect x="340" y="503" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="519" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">7: signal 7</text><path d="M230 544.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="544" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="544" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="549" text-anchor="end" font-size="14" fill="#eaeaea">  8</text><text x="712" y="549" text-anchor="start" font-size="13" fill="#eaeaea">signal 8</text><rect x="340" y="533" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="549" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">8: signal 8</text><path d="M230 574.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="574" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="574" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="579" text-anchor="end" font-size="14" fill="#eaeaea">  9</text><text x="712" y="579" text-anchor="start" font-size="13" fill="#eaeaea">signal 9</text><rect x="340" y="563" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="579" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">9: signal 9</text><path d="M230 604.0H700" fill="none" stroke="#939393" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="604" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="604" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><text x="216" y="609" text-anchor="end" font-size="14" fill="#eaeaea">  10</text><text x="712" y="609" text-anchor="start" font-size="13" fill="#eaeaea">GND</text><rect x="340" y="593" width="220" height="22" rx="11" fill="#939393" stroke="#939393" stroke-width="1.5"/><text x="450" y="609" text-anchor="middle" font-size="13" font-weight="700" fill="#111">10: GND</text></svg>
  </div>
  <figcaption>Cable contact for contact with the power off; bridge the module JP1 pads 1–2 only. Equipment is drawn as a typical unit, not a specific model.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Seat the DevKit</h3>
    <p>Power off. Antenna at the ANTENNA mark, USB connector at the USB mark, no offset.</p>
  </li>
  <li class="xb-step">
    <h3>Prepare the module</h3>
    <p>Bridge its JP1 pads 1&ndash;2 only.</p>
  </li>
  <li class="xb-step">
    <h3>Cable</h3>
    <p>Join host J5 to the module&rsquo;s J1, contact for contact.</p>
  </li>
  <li class="xb-step">
    <h3>Load firmware</h3>
    <p>Make GPIO26 an output, low, before driving it high.</p>
  </li>
  <li class="xb-step">
    <h3>Test</h3>
    <p>Set GPIO26 high, then low.</p>
    <p class="xb-expect">The buzzer sounds, then stops.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Use a module from the ESP32</td><td>Your ESP32 firmware; not a Smoothieboard module</td><td><a href="#config-main">Setup</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Setup {#config-main}

Smoothieware is not involved: the ESP32 is the host and runs your own firmware.

## How it works {#how-it-works}

The two header rows carry the DevKit pins through 100&nbsp;&Omega; resistors to the sockets, with ESD protection. A diode stops a 5&nbsp;V source on a cable from pushing current back into the DevKit.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 270" role="img" aria-labelledby="xb-esp32-to-gadgeteer-host-path"><title id="xb-esp32-to-gadgeteer-host-path">DevKit pins, from the ESP32 then 100 Ω resistors, with ESD protection then Sockets, cables to modules. Cable carrying 5 V then Diode, no current back into the DevKit.</title><rect x="46" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="186" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">DevKit pins</text><text x="186" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3">from the ESP32</text><rect x="360" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">100 Ω resistors</text><text x="500" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3">with ESD protection</text><path d="M330.0 70H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 63L358 70L349 77Z" fill="#5fb3ff"/><rect x="674" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="814" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Sockets</text><text x="814" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3">cables to modules</text><path d="M644.0 70H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 63L672 70L663 77Z" fill="#5fb3ff"/><rect x="203" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="343" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Cable carrying 5 V</text><text x="343" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><rect x="517" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="657" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Diode</text><text x="657" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3">no current back into the DevKit</text><path d="M487.0 198H508.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M506 191L515 198L506 205Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board, one path per row.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>DevKit will not flash</td><td>Remove modules from GPIO2, 5 and 15.</td></tr>
    <tr><td>I²C fails</td><td>One set of pull-ups on the bus; correct address.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/esp32-to-gadgeteer-host/v03/esp32-to-gadgeteer-host-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/esp32-to-gadgeteer-host/v03/esp32-to-gadgeteer-host-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/esp32-to-gadgeteer-host/v03/esp32-to-gadgeteer-host-diagram.webp">Board drawing (WebP)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-es-mount-t">
  <title id="xb-es-mount-t">Mounting drawing of the es, component side: outline 52.4 by 56 millimetres with 3 mounting holes and 3 cable-tie holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="320.9" y="78.0" width="318.1" height="340.0" rx="6.1" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M320.9 56H639.1"/><path d="M320.9 50V62"/><path d="M639.1 50V62"/><path d="M665.1 78.0V418.0"/><path d="M659.1 78.0h12"/><path d="M659.1 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">52.4</text>
  <text x="677.1" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">56</text>
  <circle cx="320.9" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="308.9" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M262.9 104.0h30" fill="none"/><path d="M296.9 104.0l-8 -4v8z"/><path d="M262.9 104.0v30" fill="none"/><path d="M262.9 138.0l-4 -8h8z"/></g>
  <text x="300.9" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="258.9" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="480.0" cy="153.9" r="9.7" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M466.3 153.9h27.4M480.0 140.2v27.4" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="489.7" y="183.6" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  26.20, 12.50</text>
  <circle cx="480.0" cy="275.3" r="9.7" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M466.3 275.3h27.4M480.0 261.6v27.4" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="489.7" y="255.6" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  26.20, 32.50</text>
  <circle cx="480.0" cy="396.8" r="9.7" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M466.3 396.8h27.4M480.0 383.0v27.4" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="489.7" y="377.0" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">3</tspan>  26.20, 52.50</text>
  <circle cx="344.6" cy="179.7" r="7.6" fill="#191919" stroke="#b3b3b3" stroke-width="1.5"/>
  <circle cx="344.6" cy="283.5" r="7.6" fill="#191919" stroke="#b3b3b3" stroke-width="1.5"/>
  <circle cx="615.4" cy="295.4" r="7.6" fill="#191919" stroke="#b3b3b3" stroke-width="1.5"/>
  <text x="434.9" y="163.1" text-anchor="middle" font-size="12" fill="#b3b3b3">cable tie</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 52.4 × 56&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>26.20</td><td>12.50</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>26.20</td><td>32.50</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>26.20</td><td>52.50</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>–</td><td>3.90</td><td>16.75</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
    <tr><td>–</td><td>3.90</td><td>33.85</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
    <tr><td>–</td><td>48.50</td><td>35.80</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
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
  <a href="/images/extensions/esp32-to-gadgeteer-host/datasheets/tpd4e1u06.pdf"><img src="/images/extensions/esp32-to-gadgeteer-host/datasheets/tpd4e1u06-page1.png" alt="First page of the TPD4E1U06 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/esp32-to-gadgeteer-host/datasheets/tpd4e1u06.pdf">TPD4E1U06 four-channel ESD protection array</a> — Texas Instruments, 27 pages.</figcaption>
</figure>
{:/nomarkdown}


See all boards on the [extension boards](/extension-boards) page.
