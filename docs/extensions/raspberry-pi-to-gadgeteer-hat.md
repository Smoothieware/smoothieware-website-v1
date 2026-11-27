---
layout: default
title: "Raspberry Pi to Gadgeteer HAT"
description: "A Raspberry Pi 40-pin HAT with five Gadgeteer sockets and a Qwiic port, with series resistors and ESD protection on every GPIO."
permalink: /extensions/raspberry-pi-to-gadgeteer-hat
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Host adapters</p>
    <h1 id="raspberry-pi-to-gadgeteer-hat">Raspberry Pi to Gadgeteer HAT</h1>
    <p class="xb-lead">Make a Raspberry Pi the host for small modules: five ten-contact sockets (Y, S, U, I and P) and a Qwiic port, with a protected resistor on every GPIO line.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/raspberry-pi-to-gadgeteer-hat/v03/raspberry-pi-to-gadgeteer-hat-diagram.png" alt="Top view of the Raspberry Pi to Gadgeteer HAT.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>5 sockets</b><span>Y S U I P</span></div>
  <div class="xb-stat"><b>26 GPIO</b><span>all brought out</span></div>
  <div class="xb-stat"><b>100 Ω</b><span>series each</span></div>
  <div class="xb-stat"><b>3.3 V</b><span>signals</span></div>
  <div class="xb-stat"><b>Qwiic</b><span>on the I²C bus</span></div>
  <div class="xb-stat"><b>65 × 56</b><span>millimetres</span></div>
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
  Check continuity, supplies, polarity, current and start-up states on your assembly before powering it. All signals are 3.3&nbsp;V and not 5&nbsp;V tolerant. There is no fuse or current limit on the forwarded supplies. Never cable a socket to another powered controller.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>Gadgeteer host ports for a Raspberry Pi</td></tr>
    <tr><td>Header</td><td>2&times;20 socket under the board</td></tr>
    <tr><td>Protection</td><td>100&nbsp;&Omega; and an ESD diode on every GPIO</td></tr>
    <tr><td>3.3 V</td><td>From the Pi through a ferrite bead</td></tr>
    <tr><td>5 V</td><td>From the Pi through an <a href="/images/extensions/raspberry-pi-to-gadgeteer-hat/datasheets/lm66100.pdf">LM66100</a> that blocks back-feeding; no current limit</td></tr>
    <tr><td>Qwiic</td><td>J6 (or the alternative 2.54&nbsp;mm header J7), same bus as J4</td></tr>
    <tr><td>Not connected</td><td>Pi contacts 27 and 28 (HAT ID); no EEPROM</td></tr>
    <tr><td>Size</td><td>65 &times; 56&nbsp;mm, four 2.75&nbsp;mm HAT holes, 58 &times; 49&nbsp;mm pattern</td></tr>
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
      <img src="/images/extensions/raspberry-pi-to-gadgeteer-hat/v03/raspberry-pi-to-gadgeteer-hat-diagram.png" alt="Top view of the Raspberry Pi to Gadgeteer HAT with numbered markers explained in the list below.">
      <a class="xb-mk" href="#tour-1" style="left:49.5%;top:55.1%" aria-label="1: Y socket (J1)">1<span class="xb-pop"><b>Y socket (J1)</b> — general inputs and outputs.</span></a>
      <a class="xb-mk" href="#tour-2" style="left:66.4%;top:55.1%" aria-label="2: S socket (J2)">2<span class="xb-pop"><b>S socket (J2)</b> — SPI.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:34.8%;top:55.1%" aria-label="3: U socket (J3)">3<span class="xb-pop"><b>U socket (J3)</b> — serial.</span></a>
      <a class="xb-mk xb-pl" href="#tour-4" style="left:22.3%;top:55.1%" aria-label="4: I socket (J4)">4<span class="xb-pop"><b>I socket (J4)</b> — I&sup2;C.</span></a>
      <a class="xb-mk xb-pr" href="#tour-5" style="left:82.2%;top:55.1%" aria-label="5: P socket (J5)">5<span class="xb-pop"><b>P socket (J5)</b> — PWM.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:55.1%;top:90.4%" aria-label="6: Qwiic port (J6)">6<span class="xb-pop"><b>Qwiic port (J6)</b> — 3.3&nbsp;V I&sup2;C.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:31.3%;top:79.6%" aria-label="7: Back-feed blocker (U1)">7<span class="xb-pop"><b>Back-feed blocker (U1)</b> — LM66100 on 5&nbsp;V.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:74.1%;top:72.3%" aria-label="8: 3.3 V light (LED1)">8<span class="xb-pop"><b>3.3 V light (LED1)</b> — green.</span></a>
      <a class="xb-mk" href="#tour-9" style="left:49.9%;top:72.3%" aria-label="9: 5 V light (LED2)">9<span class="xb-pop"><b>5 V light (LED2)</b> — green.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Y socket (J1)</b> — general inputs and outputs.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>S socket (J2)</b> — SPI.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>U socket (J3)</b> — serial.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>I socket (J4)</b> — I&sup2;C.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>P socket (J5)</b> — PWM.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Qwiic port (J6)</b> — 3.3&nbsp;V I&sup2;C.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Back-feed blocker (U1)</b> — <a href="/images/extensions/raspberry-pi-to-gadgeteer-hat/datasheets/lm66100.pdf">LM66100</a> on 5&nbsp;V.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>3.3 V light (LED1)</b> — green.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>5 V light (LED2)</b> — green.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

### Lights {#lights}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th>Lit means</th><th>Disable it</th></tr></thead>
  <tbody>
    <tr><td>LED1, green</td><td>3.3&nbsp;V present</td><td>Cut JP1</td></tr>
    <tr><td>LED2, green</td><td>5&nbsp;V present</td><td>Cut JP2</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Pinout {#pinout}

On every socket contact 1 is 3.3&nbsp;V, contact 2 is 5&nbsp;V and contact 10 is ground. The full socket-to-GPIO map is in the schematic below. For example, J1 contact 3 is BCM GPIO5 (header pin 29).

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Qwiic contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">SDA</span></td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">SCL</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>A Raspberry Pi</b><span>With the 40-pin header and a suitable supply.</span></div>
  <div class="xb-card"><b>This HAT</b><span>With spacers.</span></div>
  <div class="xb-card"><b>A module</b><span>3.3 V, for example the Buzzer module.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

This example drives the [Buzzer module](/extensions/buzzer-module) from the Pi.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 652" role="img" aria-labelledby="xb-raspberry-pi-to-gadgeteer-hat-wire"><title id="xb-raspberry-pi-to-gadgeteer-hat-wire">Wiring: J1 contact 1 to 3.3 V; J1 contact 2 to 5 V; J1 contact 3 to signal 3; J1 contact 4 to signal 4; J1 contact 5 to signal 5; J1 contact 6 to signal 6; J1 contact 7 to signal 7; J1 contact 8 to signal 8; J1 contact 9 to signal 9; J1 contact 10 to GND.</title><image href="/images/extensions/raspberry-pi-to-gadgeteer-hat/v03/raspberry-pi-to-gadgeteer-hat-diagram.png" x="367" y="14" width="266" height="230"/><circle cx="499" cy="141" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="480" y="160" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="499" y="174" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J1</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J1 on this board</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Buzzer module</text><rect x="700" y="304" width="270" height="330" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><rect x="815" y="419" width="130" height="100" rx="8" fill="#20365c" stroke="#7fa6e0" stroke-width="1.5"/><rect x="858" y="449" width="44" height="40" rx="3" fill="#14171c" stroke="#8b949e" stroke-width="1.5"/><circle cx="828" cy="435" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="452" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="469" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="486" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="503" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="930" cy="433" r="6" fill="#0d0f12" stroke="#c4cad3" stroke-width="1.5"/><circle cx="930" cy="505" r="6" fill="#0d0f12" stroke="#c4cad3" stroke-width="1.5"/><rect x="908" y="463" width="18" height="10" rx="1" fill="#c9a66b" stroke="#c9a66b" stroke-width="1.5"/><rect x="30" y="304" width="200" height="330" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 334.0H700" fill="none" stroke="#d92d2d" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="334" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="334" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><text x="216" y="339" text-anchor="end" font-size="14" fill="#e6ebf2">  1</text><text x="712" y="339" text-anchor="start" font-size="13" fill="#e6ebf2">3.3 V</text><rect x="340" y="323" width="220" height="22" rx="11" fill="#d92d2d" stroke="#d92d2d" stroke-width="1.5"/><text x="450" y="339" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1: 3.3 V</text><path d="M230 364.0H700" fill="none" stroke="#e8820c" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="364" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" fill="#e6ebf2">  2</text><text x="712" y="369" text-anchor="start" font-size="13" fill="#e6ebf2">5 V</text><rect x="340" y="353" width="220" height="22" rx="11" fill="#e8820c" stroke="#e8820c" stroke-width="1.5"/><text x="450" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#111">2: 5 V</text><path d="M230 394.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" fill="#e6ebf2">  3</text><text x="712" y="399" text-anchor="start" font-size="13" fill="#e6ebf2">signal 3</text><rect x="340" y="383" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">3: signal 3</text><path d="M230 424.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="429" text-anchor="end" font-size="14" fill="#e6ebf2">  4</text><text x="712" y="429" text-anchor="start" font-size="13" fill="#e6ebf2">signal 4</text><rect x="340" y="413" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="429" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">4: signal 4</text><path d="M230 454.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="454" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="454" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="459" text-anchor="end" font-size="14" fill="#e6ebf2">  5</text><text x="712" y="459" text-anchor="start" font-size="13" fill="#e6ebf2">signal 5</text><rect x="340" y="443" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="459" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">5: signal 5</text><path d="M230 484.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="484" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="484" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="489" text-anchor="end" font-size="14" fill="#e6ebf2">  6</text><text x="712" y="489" text-anchor="start" font-size="13" fill="#e6ebf2">signal 6</text><rect x="340" y="473" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="489" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">6: signal 6</text><path d="M230 514.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="514" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="514" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="519" text-anchor="end" font-size="14" fill="#e6ebf2">  7</text><text x="712" y="519" text-anchor="start" font-size="13" fill="#e6ebf2">signal 7</text><rect x="340" y="503" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="519" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">7: signal 7</text><path d="M230 544.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="544" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="544" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="549" text-anchor="end" font-size="14" fill="#e6ebf2">  8</text><text x="712" y="549" text-anchor="start" font-size="13" fill="#e6ebf2">signal 8</text><rect x="340" y="533" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="549" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">8: signal 8</text><path d="M230 574.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="574" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="574" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="579" text-anchor="end" font-size="14" fill="#e6ebf2">  9</text><text x="712" y="579" text-anchor="start" font-size="13" fill="#e6ebf2">signal 9</text><rect x="340" y="563" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="579" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">9: signal 9</text><path d="M230 604.0H700" fill="none" stroke="#8b949e" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="604" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="604" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><text x="216" y="609" text-anchor="end" font-size="14" fill="#e6ebf2">  10</text><text x="712" y="609" text-anchor="start" font-size="13" fill="#e6ebf2">GND</text><rect x="340" y="593" width="220" height="22" rx="11" fill="#8b949e" stroke="#8b949e" stroke-width="1.5"/><text x="450" y="609" text-anchor="middle" font-size="13" font-weight="700" fill="#111">10: GND</text></svg>
  </div>
  <figcaption>Cable contact for contact with the power off; bridge the module JP1 pads 1–2 only. Equipment is drawn as a typical unit, not a specific model.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Fit the HAT</h3>
    <p>Power off; seat all 40 contacts without offset.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the buzzer</h3>
    <p>On the module bridge JP1 pads 1&ndash;2 (power from the socket), then cable HAT J1 to the module&rsquo;s J1.</p>
  </li>
  <li class="xb-step">
    <h3>Check</h3>
    <p>Continuity, rails and polarity.</p>
  </li>
  <li class="xb-step">
    <h3>Run the script</h3>
    <p>Run the Python script below.</p>
    <p class="xb-expect">The buzzer sounds briefly.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Use a module from the Pi</td><td>Your Pi program; not a Smoothieboard module</td><td><a href="#config-main">Setup</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Setup {#config-main}

Smoothieware is not involved: the Pi is the host. With [GPIO Zero](https://gpiozero.readthedocs.io/en/stable/api_output.html), which uses BCM numbers:

```python
from time import sleep
from gpiozero import Buzzer

with Buzzer(5, active_high=True, initial_value=False) as buzzer:
    try:
        buzzer.on()
        sleep(0.2)
    finally:
        buzzer.off()
```

Run it with <code>GPIOZERO_PIN_FACTORY=lgpio python3 hat_buzzer.py</code>.

## How it works {#how-it-works}

Each header signal goes through 100&nbsp;&Omega; to its socket, with an ESD diode to ground. There is no level conversion. Older Pi firmware can briefly drive GPIO6, 14 and 16 during boot (J2.4, J3.4 and J2.5), so keep sensitive loads off those until checked.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 142" role="img" aria-labelledby="xb-raspberry-pi-to-gadgeteer-hat-path"><title id="xb-raspberry-pi-to-gadgeteer-hat-path">Pi header signal then 100 Ω and ESD diode then Socket, no level conversion.</title><rect x="46" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="186" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Pi header signal</text><text x="186" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="360" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">100 Ω and ESD diode</text><text x="500" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M330.0 70H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 63L358 70L349 77Z" fill="#5fb3ff"/><rect x="674" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="814" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Socket</text><text x="814" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2">no level conversion</text><path d="M644.0 70H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 63L672 70L663 77Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Nothing happens</td><td>BCM numbering, not header pin numbers; check the supply lights.</td></tr>
    <tr><td>Pi reboots</td><td>A module draws too much current; there is no limiter.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/raspberry-pi-to-gadgeteer-hat/v03/raspberry-pi-to-gadgeteer-hat-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/raspberry-pi-to-gadgeteer-hat/v03/raspberry-pi-to-gadgeteer-hat-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/raspberry-pi-to-gadgeteer-hat/v03/raspberry-pi-to-gadgeteer-hat-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-ph-mount-t">
  <title id="xb-ph-mount-t">Mounting drawing of the ph, component side: outline 65 by 56 millimetres with 4 mounting holes and 2 cable-tie holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="282.7" y="78.0" width="394.6" height="340.0" rx="18.2" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M282.7 56H677.3"/><path d="M282.7 50V62"/><path d="M677.3 50V62"/><path d="M703.3 78.0V418.0"/><path d="M697.3 78.0h12"/><path d="M697.3 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">65</text>
  <text x="715.3" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">56</text>
  <circle cx="282.7" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="270.7" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M224.7 104.0h30" fill="none"/><path d="M258.7 104.0l-8 -4v8z"/><path d="M224.7 104.0v30" fill="none"/><path d="M224.7 138.0l-4 -8h8z"/></g>
  <text x="262.7" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="220.7" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="303.9" cy="99.2" r="8.3" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M291.6 99.2h24.7M303.9 86.9v24.7" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="295.6" y="127.6" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  3.50, 3.50</text>
  <circle cx="656.1" cy="99.2" r="8.3" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M643.7 99.2h24.7M656.1 86.9v24.7" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="664.4" y="127.6" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  61.50, 3.50</text>
  <circle cx="303.9" cy="396.8" r="8.3" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M291.6 396.8h24.7M303.9 384.4v24.7" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="295.6" y="378.4" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  3.50, 52.50</text>
  <circle cx="656.1" cy="396.8" r="8.3" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M643.7 396.8h24.7M656.1 384.4v24.7" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="664.4" y="378.4" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  61.50, 52.50</text>
  <circle cx="634.8" cy="351.2" r="7.6" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <circle cx="367.7" cy="396.8" r="7.6" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <text x="501.2" y="334.6" text-anchor="middle" font-size="12" fill="#a9b4c2">cable tie</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 65 × 56&nbsp;mm, corners rounded to a 3&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>3.50</td><td>3.50</td><td>2.75&nbsp;mm, not plated</td><td>Mounting</td></tr>
    <tr><td>2</td><td>61.50</td><td>3.50</td><td>2.75&nbsp;mm, not plated</td><td>Mounting</td></tr>
    <tr><td>3</td><td>3.50</td><td>52.50</td><td>2.75&nbsp;mm, not plated</td><td>Mounting</td></tr>
    <tr><td>4</td><td>61.50</td><td>52.50</td><td>2.75&nbsp;mm, not plated</td><td>Mounting</td></tr>
    <tr><td>–</td><td>58.00</td><td>45.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
    <tr><td>–</td><td>14.00</td><td>52.50</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Values from the design.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Signals</td><td>All sockets</td><td>—</td><td>3.3 V</td><td>—</td><td>Not 5 V tolerant</td></tr>
    <tr><td>Series resistance</td><td>Each GPIO</td><td>—</td><td>100 Ω</td><td>—</td><td>Parts list</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: datasheets {#datasheets}

The first page of each important chip&rsquo;s datasheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/raspberry-pi-to-gadgeteer-hat/datasheets/lm66100.pdf"><img src="/images/extensions/raspberry-pi-to-gadgeteer-hat/datasheets/lm66100-page1.png" alt="First page of the LM66100 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/raspberry-pi-to-gadgeteer-hat/datasheets/lm66100.pdf">LM66100 ideal diode</a> — Texas Instruments, 23 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/raspberry-pi-to-gadgeteer-hat/datasheets/tpd1e10b06.pdf"><img src="/images/extensions/raspberry-pi-to-gadgeteer-hat/datasheets/tpd1e10b06-page1.png" alt="First page of the TPD1E10B06 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/raspberry-pi-to-gadgeteer-hat/datasheets/tpd1e10b06.pdf">TPD1E10B06 single-channel ESD protection diode</a> — Texas Instruments, 33 pages.</figcaption>
</figure>
{:/nomarkdown}


See all boards on the [extension boards](/extension-boards) page.
