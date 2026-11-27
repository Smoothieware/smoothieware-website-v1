---
layout: default
title: "Arduino adapter"
description: "A carrier that connects an Arduino Uno-format shield to five Gadgeteer sockets of a controller, with software-configured signal direction and two Qwiic ports."
permalink: /extensions/arduino-adapter
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Host adapters</p>
    <h1 id="arduino-adapter">Arduino adapter</h1>
    <p class="xb-lead">A carrier for Arduino Uno-format shields: five controller sockets (GB, GD, GE, GG and GC), software-selected signal direction, a 5&nbsp;V or 3.3&nbsp;V shield voltage and two Qwiic ports.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/arduino-adapter/v19/arduino-adapter-diagram.webp" alt="Top view of the Arduino adapter.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>Uno</b><span>shield format</span></div>
  <div class="xb-stat"><b>5 sockets</b><span>GB GD GE GG GC</span></div>
  <div class="xb-stat"><b>5 or 3.3 V</b><span>shield level</span></div>
  <div class="xb-stat"><b>2 Qwiic</b><span>separate buses</span></div>
  <div class="xb-stat"><b>Software</b><span>routed</span></div>
  <div class="xb-stat"><b>112 × 54</b><span>millimetres</span></div>
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
  Shield signals stay unusable until software sets the routing registers; Smoothieware has no driver for them. Check the shield&rsquo;s supply, reset and pin use before applying power, and keep it isolated until then.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>Arduino shields on a controller</td></tr>
    <tr><td>Sockets</td><td>J1 GB, J2 GD, J3 GE, J4 GG, J5 GC; not interchangeable</td></tr>
    <tr><td>Shield headers</td><td>J6 to J10, Uno layout with ICSP</td></tr>
    <tr><td>Routing</td><td>Six <a href="/images/extensions/arduino-adapter/datasheets/sn74lv595a.pdf">SN74LV595A</a> registers set direction and switches; ADS7138 reads analog</td></tr>
    <tr><td>Shield voltage</td><td>SJ21: 5&nbsp;V (as delivered) or 3.3&nbsp;V</td></tr>
    <tr><td>Qwiic</td><td>J11 (GB bus) and J12 (GG bus), 3.3&nbsp;V</td></tr>
    <tr><td>Size</td><td>112 &times; 54&nbsp;mm</td></tr>
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
      <img src="/images/extensions/arduino-adapter/v19/arduino-adapter-diagram.webp" alt="Top view of the Arduino adapter with numbered markers explained in the list below.">
      <a class="xb-mk xb-pb xb-pr" href="#tour-1" style="left:95.9%;top:25.8%" aria-label="1: Socket GB (J1)">1<span class="xb-pop"><b>Socket GB (J1)</b> — serial and I&sup2;C.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-2" style="left:4.0%;top:37.5%" aria-label="2: Socket GD (J2)">2<span class="xb-pop"><b>Socket GD (J2)</b> — serial and PWM.</span></a>
      <a class="xb-mk xb-pl" href="#tour-3" style="left:4.0%;top:63.3%" aria-label="3: Socket GE (J3)">3<span class="xb-pop"><b>Socket GE (J3)</b> — SPI.</span></a>
      <a class="xb-mk xb-pr" href="#tour-4" style="left:95.9%;top:77.6%" aria-label="4: Socket GG (J4)">4<span class="xb-pop"><b>Socket GG (J4)</b> — analog and I&sup2;C.</span></a>
      <a class="xb-mk xb-pr" href="#tour-5" style="left:95.9%;top:51.7%" aria-label="5: Socket GC (J5)">5<span class="xb-pop"><b>Socket GC (J5)</b> — PWM.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:36.4%;top:6.9%" aria-label="6: Shield digital high (J6)">6<span class="xb-pop"><b>Shield digital high (J6)</b> — D8 to SCL.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:60.0%;top:6.9%" aria-label="7: Shield digital low (J7)">7<span class="xb-pop"><b>Shield digital low (J7)</b> — D0 to D7.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:44.4%;top:93.0%" aria-label="8: Shield power (J8)">8<span class="xb-pop"><b>Shield power (J8)</b> — supplies and reset.</span></a>
      <a class="xb-mk" href="#tour-9" style="left:64.4%;top:93.0%" aria-label="9: Shield analog (J9)">9<span class="xb-pop"><b>Shield analog (J9)</b> — A0 to A5.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-10" style="left:89.0%;top:7.8%" aria-label="10: Qwiic GB (J11)">10<span class="xb-pop"><b>Qwiic GB (J11)</b> — 3.3&nbsp;V.</span></a>
      <a class="xb-mk xb-pr" href="#tour-11" style="left:89.0%;top:92.1%" aria-label="11: Qwiic GG (J12)">11<span class="xb-pop"><b>Qwiic GG (J12)</b> — 3.3&nbsp;V.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Socket GB (J1)</b> — serial and I&sup2;C.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Socket GD (J2)</b> — serial and PWM.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Socket GE (J3)</b> — SPI.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Socket GG (J4)</b> — analog and I&sup2;C.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Socket GC (J5)</b> — PWM.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Shield digital high (J6)</b> — D8 to SCL.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Shield digital low (J7)</b> — D0 to D7.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Shield power (J8)</b> — supplies and reset.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Shield analog (J9)</b> — A0 to A5.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Qwiic GB (J11)</b> — 3.3&nbsp;V.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Qwiic GG (J12)</b> — 3.3&nbsp;V.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

### Lights {#lights}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th>Lit means</th><th>Disable it</th></tr></thead>
  <tbody>
    <tr><td>Signal lights</td><td>State of shield pins D1 to D13 and A0 to A3</td><td>Cut the matching link SJ2 to SJ18</td></tr>
    <tr><td>Power light</td><td>Supply present</td><td>Cut SJ23</td></tr>
    <tr><td>Fault light</td><td>Fault</td><td>Cut SJ24</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Pinout {#pinout}

Contact 1 is 3.3&nbsp;V, contact 2 is 5&nbsp;V and contact 10 ground on J1 to J5. The other contacts feed the routing circuits shown in the schematic.

### Qwiic J11 and J12

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
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
  <div class="xb-card"><b>This adapter</b><span>And its cables.</span></div>
  <div class="xb-card"><b>Smoothieboard V2 Prime</b><span>For the example.</span></div>
  <div class="xb-card"><b>A Qwiic board</b><span>For example the spectral sensor board.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

This connects a Qwiic board to J11, with no shield fitted.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 696" role="img" aria-labelledby="xb-arduino-adapter-wire"><title id="xb-arduino-adapter-wire">Wiring: controller contact 1 to J1 contact 1; controller contact 2 to J1 contact 2; controller contact 8 to J1 contact 8; controller contact 9 to J1 contact 9; controller contact 10 to J1 contact 10; J11 contact 1 to Qwiic contact 1; J11 contact 2 to Qwiic contact 2; J11 contact 3 to Qwiic contact 3; J11 contact 4 to Qwiic contact 4.</title><image href="/images/extensions/arduino-adapter/v19/arduino-adapter-diagram.webp" x="266" y="14" width="468" height="230"/><circle cx="715" cy="73" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="696" y="92" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="715" y="106" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J1</text><circle cx="683" cy="32" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="664" y="51" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="683" y="65" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J11</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Prime header GB/J33</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J1 on this board</text><rect x="30" y="304" width="200" height="180" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="130" y="390" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Smoothieboard</text><text x="130" y="410" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">V2 Prime</text><rect x="770" y="304" width="200" height="180" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 334.0H770" fill="none" stroke="#d92d2d" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="334" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="334" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><text x="216" y="339" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">1</text><text x="784" y="339" text-anchor="start" font-size="14" fill="#e6ebf2">1  3.3 V</text><rect x="400" y="323" width="200" height="22" rx="11" fill="#d92d2d" stroke="#d92d2d" stroke-width="1.5"/><text x="500" y="339" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1 to 1: 3.3 V</text><path d="M230 364.0H770" fill="none" stroke="#e8820c" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="364" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">2</text><text x="784" y="369" text-anchor="start" font-size="14" fill="#e6ebf2">2  5 V</text><rect x="400" y="353" width="200" height="22" rx="11" fill="#e8820c" stroke="#e8820c" stroke-width="1.5"/><text x="500" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#111">2 to 2: 5 V</text><path d="M230 394.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">8</text><text x="784" y="399" text-anchor="start" font-size="14" fill="#e6ebf2">8  </text><rect x="400" y="383" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">8 to 8</text><path d="M230 424.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="429" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">9</text><text x="784" y="429" text-anchor="start" font-size="14" fill="#e6ebf2">9  </text><rect x="400" y="413" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="429" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">9 to 9</text><path d="M230 454.0H770" fill="none" stroke="#8b949e" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="454" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="454" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><text x="216" y="459" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">10</text><text x="784" y="459" text-anchor="start" font-size="14" fill="#e6ebf2">10  GND</text><rect x="400" y="443" width="200" height="22" rx="11" fill="#8b949e" stroke="#8b949e" stroke-width="1.5"/><text x="500" y="459" text-anchor="middle" font-size="13" font-weight="700" fill="#111">10 to 10: GND</text><text x="130" y="516" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J11 on this board</text><text x="870" y="516" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Qwiic board</text><rect x="700" y="528" width="270" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><rect x="815" y="553" width="130" height="100" rx="8" fill="#20365c" stroke="#7fa6e0" stroke-width="1.5"/><rect x="858" y="583" width="44" height="40" rx="3" fill="#14171c" stroke="#8b949e" stroke-width="1.5"/><circle cx="828" cy="569" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="586" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="603" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="620" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="637" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="930" cy="567" r="6" fill="#0d0f12" stroke="#c4cad3" stroke-width="1.5"/><circle cx="930" cy="639" r="6" fill="#0d0f12" stroke="#c4cad3" stroke-width="1.5"/><rect x="908" y="597" width="18" height="10" rx="1" fill="#c9a66b" stroke="#c9a66b" stroke-width="1.5"/><rect x="30" y="528" width="200" height="150" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 558.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="558" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="558" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="563" text-anchor="end" font-size="14" fill="#e6ebf2">  1</text><text x="712" y="563" text-anchor="start" font-size="13" fill="#e6ebf2">Qwiic contact 1</text><rect x="340" y="547" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="563" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1: Qwiic contact 1</text><path d="M230 588.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="588" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="588" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="593" text-anchor="end" font-size="14" fill="#e6ebf2">  2</text><text x="712" y="593" text-anchor="start" font-size="13" fill="#e6ebf2">Qwiic contact 2</text><rect x="340" y="577" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="593" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">2: Qwiic contact 2</text><path d="M230 618.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="618" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="618" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="623" text-anchor="end" font-size="14" fill="#e6ebf2">  3</text><text x="712" y="623" text-anchor="start" font-size="13" fill="#e6ebf2">Qwiic contact 3</text><rect x="340" y="607" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="623" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">3: Qwiic contact 3</text><path d="M230 648.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="648" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="648" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="653" text-anchor="end" font-size="14" fill="#e6ebf2">  4</text><text x="712" y="653" text-anchor="start" font-size="13" fill="#e6ebf2">Qwiic contact 4</text><rect x="340" y="637" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="653" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">4: Qwiic contact 4</text></svg>
  </div>
  <figcaption>Wiring for this procedure. Yellow rings mark the connectors used. Make and change connections with the power off. Equipment is drawn as a typical unit, not a specific model.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Check SJ21</h3>
    <p>Pads 1&ndash;2 (5&nbsp;V).</p>
  </li>
  <li class="xb-step">
    <h3>Wire the controller</h3>
    <p>Prime GB/J33 contacts 1, 2, 8, 9 and 10 to J1, same numbers. Both supplies are needed.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the board</h3>
    <p>J11 to the Qwiic board, contacts 1 to 4.</p>
  </li>
  <li class="xb-step">
    <h3>Add software</h3>
    <p>The attached device needs its own driver.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>A shield or Qwiic device</td><td>Your own driver; no Smoothieware module</td><td><a href="#config-main">Setup</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Setup {#config-main}

Smoothieware has no driver for the routing registers or the analog converter, so there are no settings for shields.

## How it works {#how-it-works}

Software writes the shift registers to choose, pin by pin, whether the controller drives a shield pin or reads it. Receivers and output drivers translate between the controller&rsquo;s 3.3&nbsp;V and the shield voltage.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 142" role="img" aria-labelledby="xb-arduino-adapter-path"><title id="xb-arduino-adapter-path">Controller, 3.3 V, SPI and I2C on J1 then Shift registers, software picks read or drive, pin by pin then Receivers and drivers, translate to shield voltage then Shield pins, the fitted Arduino shield.</title><rect x="20" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="127" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Controller, 3.3 V</text><text x="127" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2">SPI and I2C on J1</text><rect x="268" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="376" y="57" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Shift registers</text><text x="376" y="77" text-anchor="middle" font-size="13" fill="#a9b4c2">software picks read or drive,</text><text x="376" y="93" text-anchor="middle" font-size="13" fill="#a9b4c2">pin by pin</text><path d="M238.5 70H259.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M258 63L266 70L258 77Z" fill="#5fb3ff"/><rect x="517" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="624" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Receivers and drivers</text><text x="624" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2">translate to shield voltage</text><path d="M487.0 70H508.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M506 63L515 70L506 77Z" fill="#5fb3ff"/><rect x="766" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="873" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Shield pins</text><text x="873" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2">the fitted Arduino shield</text><path d="M735.5 70H756.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M754 63L764 70L754 77Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Shield does nothing</td><td>Routing registers not configured.</td></tr>
    <tr><td>Qwiic device missing</td><td>Both controller supplies connected; J11 and J12 are separate buses.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/arduino-adapter/v19/arduino-adapter-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/arduino-adapter/v19/arduino-adapter-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/arduino-adapter/v19/arduino-adapter-diagram.webp">Board drawing (WebP)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 429" role="img" aria-labelledby="xb-aa-mount-t">
  <title id="xb-aa-mount-t">Mounting drawing of the aa, component side: outline 112 by 54 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="180.0" y="78.0" width="600.0" height="289.3" rx="5.4" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M180.0 56H780.0"/><path d="M180.0 50V62"/><path d="M780.0 50V62"/><path d="M806.0 78.0V367.3"/><path d="M800.0 78.0h12"/><path d="M800.0 367.3h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">112</text>
  <text x="818.0" y="227.6" font-size="15" font-weight="700" fill="#e6ebf2">54</text>
  <circle cx="180.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="168.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M122.0 104.0h30" fill="none"/><path d="M156.0 104.0l-8 -4v8z"/><path d="M122.0 104.0v30" fill="none"/><path d="M122.0 138.0l-4 -8h8z"/></g>
  <text x="160.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="118.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="255.0" cy="115.5" r="8.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M242.4 115.5h25.1M255.0 102.9v25.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="246.4" y="144.1" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  14.00, 7.00</text>
  <circle cx="683.6" cy="115.5" r="8.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M671.0 115.5h25.1M683.6 102.9v25.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="692.1" y="144.1" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  94.00, 7.00</text>
  <circle cx="255.0" cy="329.8" r="8.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M242.4 329.8h25.1M255.0 317.2v25.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="246.4" y="311.2" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  14.00, 47.00</text>
  <circle cx="683.6" cy="329.8" r="8.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M671.0 329.8h25.1M683.6 317.2v25.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="692.1" y="311.2" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  94.00, 47.00</text>
  <text x="480.0" y="397.3" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 112 × 54&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>14.00</td><td>7.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>94.00</td><td>7.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>14.00</td><td>47.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>94.00</td><td>47.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Levels set on the board.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Shield level</td><td>SJ21</td><td>3.3 V</td><td>5 V</td><td>5 V</td><td>Selectable</td></tr>
    <tr><td>Qwiic</td><td>J11, J12</td><td>—</td><td>3.3 V</td><td>—</td><td>Only</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: datasheets {#datasheets}

The first page of each important chip&rsquo;s datasheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/arduino-adapter/datasheets/tmux1511.pdf"><img src="/images/extensions/arduino-adapter/datasheets/tmux1511-page1.png" alt="First page of the TMUX1511 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/arduino-adapter/datasheets/tmux1511.pdf">TMUX1511 four-channel signal switch with powered-off protection</a> — Texas Instruments, 45 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/arduino-adapter/datasheets/sn74lxc8t245.pdf"><img src="/images/extensions/arduino-adapter/datasheets/sn74lxc8t245-page1.png" alt="First page of the SN74LXC8T245 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/arduino-adapter/datasheets/sn74lxc8t245.pdf">SN74LXC8T245 eight-bit translating transceiver</a> — Texas Instruments, 39 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/arduino-adapter/datasheets/sn74lv595a.pdf"><img src="/images/extensions/arduino-adapter/datasheets/sn74lv595a-page1.png" alt="First page of the SN74LV595A datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/arduino-adapter/datasheets/sn74lv595a.pdf">SN74LV595A eight-bit shift register</a> — Texas Instruments, 39 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/arduino-adapter/datasheets/pca9306.pdf"><img src="/images/extensions/arduino-adapter/datasheets/pca9306-page1.png" alt="First page of the PCA9306 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/arduino-adapter/datasheets/pca9306.pdf">PCA9306 I2C voltage-level translator</a> — Texas Instruments, 38 pages.</figcaption>
</figure>
{:/nomarkdown}


See all boards on the [extension boards](/extension-boards) page.
