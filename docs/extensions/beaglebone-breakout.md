---
layout: default
title: "BeagleBone breakout"
description: "A buffered 3.3 V UART interface between a Gadgeteer U socket and the BeagleBone Black P9 header."
permalink: /extensions/beaglebone-breakout
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Host adapters</p>
    <h1 id="beaglebone-breakout">BeagleBone breakout</h1>
    <p class="xb-lead">A small board that plugs into BeagleBone Black P9 contacts 1 to 14 and carries a buffered serial link to a controller UART, so a Linux computer can act as a command host.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/beaglebone-breakout/v14/beaglebone-breakout-diagram.webp" alt="Top view of the BeagleBone breakout.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>3.3 V</b><span>UART, no RS-232</span></div>
  <div class="xb-stat"><b>2 buffers</b><span>one per direction</span></div>
  <div class="xb-stat"><b>P9 1–14</b><span>BeagleBone Black</span></div>
  <div class="xb-stat"><b>No power</b><span>transferred</span></div>
  <div class="xb-stat"><b>No isolation</b><span>common ground</span></div>
  <div class="xb-stat"><b>22 × 24</b><span>millimetres</span></div>
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
  Do not power this board from a controller and a BeagleBone without your own defined power and reset sequence: the board&rsquo;s buffer enables do not guarantee safe behaviour during start-up, shutdown or brown-out. Never join the two 3.3&nbsp;V supplies, and never apply RS-232 levels.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>Serial link between a controller and a BeagleBone Black</td></tr>
    <tr><td>Controller side</td><td>J1: 3.3&nbsp;V on 1, transmit on 4, receive on 5, ground on 10; 5&nbsp;V not connected</td></tr>
    <tr><td>Computer side</td><td>J2 under the board: P9 contacts 1 to 14 (UART4 on 11 and 13)</td></tr>
    <tr><td>Buffers</td><td>Two <a href="/images/extensions/beaglebone-breakout/datasheets/sn74lvc1g126.pdf">SN74LVC1G126</a>, enabled through an <a href="/images/extensions/beaglebone-breakout/datasheets/sn74lvc1g08.pdf">SN74LVC1G08</a> and the BeagleBone reset line</td></tr>
    <tr><td>Power</td><td>The BeagleBone is powered separately, 5&nbsp;V &plusmn;0.25&nbsp;V, at least 1&nbsp;A</td></tr>
    <tr><td>Size</td><td>22 &times; 24&nbsp;mm</td></tr>
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
      <img src="/images/extensions/beaglebone-breakout/v14/beaglebone-breakout-diagram.webp" alt="Top view of the BeagleBone breakout with numbered markers explained in the list below.">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:49.9%;top:16.7%" aria-label="1: Controller socket (J1)">1<span class="xb-pop"><b>Controller socket (J1)</b> — to the controller UART.</span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:55.4%;top:42.1%" aria-label="2: Controller-to-computer buffer (U1)">2<span class="xb-pop"><b>Controller-to-computer buffer (U1)</b> — drives BeagleBone receive.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-3" style="left:81.9%;top:42.1%" aria-label="3: Computer-to-controller buffer (U2)">3<span class="xb-pop"><b>Computer-to-controller buffer (U2)</b> — drives controller receive.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:28.3%;top:42.1%" aria-label="4: Enable gate (U3)">4<span class="xb-pop"><b>Enable gate (U3)</b> — combines reset and controller supply presence.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-5" style="left:14.1%;top:10.2%" aria-label="5: Ground test pad (TP1)">5<span class="xb-pop"><b>Ground test pad (TP1)</b> — for measurement.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-6" style="left:14.1%;top:19.7%" aria-label="6: Controller 3.3&nbsp;V pad (TP2)">6<span class="xb-pop"><b>Controller 3.3&nbsp;V pad (TP2)</b> — the controller-side supply.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-7" style="left:85.7%;top:19.7%" aria-label="7: BeagleBone 3.3&nbsp;V pad (TP5)">7<span class="xb-pop"><b>BeagleBone 3.3&nbsp;V pad (TP5)</b> — the computer-side supply.</span></a>
      <a class="xb-mk xb-pr" href="#tour-8" style="left:89.9%;top:53.5%" aria-label="8: Reset pad (TP6)">8<span class="xb-pop"><b>Reset pad (TP6)</b> — the BeagleBone reset line.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Controller socket (J1)</b> — to the controller UART.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Controller-to-computer buffer (U1)</b> — drives BeagleBone receive.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Computer-to-controller buffer (U2)</b> — drives controller receive.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Enable gate (U3)</b> — combines reset and controller supply presence.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Ground test pad (TP1)</b> — for measurement.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Controller 3.3&nbsp;V pad (TP2)</b> — the controller-side supply.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>BeagleBone 3.3&nbsp;V pad (TP5)</b> — the computer-side supply.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Reset pad (TP6)</b> — the BeagleBone reset line.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1: controller socket

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Controller 3.3&nbsp;V</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">TX</span> from the controller</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">RX</span> to the controller</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>2, 3, 6 to 9</td><td>Not connected</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J2: BeagleBone P9

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>P9 contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1, 2</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>3, 4</td><td>BeagleBone 3.3&nbsp;V (VDD_3V3B)</td></tr>
    <tr><td>10</td><td>SYS_RESETn</td></tr>
    <tr><td>11</td><td><span class="xb-pill xb-p-sig">UART4 RX</span></td></tr>
    <tr><td>13</td><td><span class="xb-pill xb-p-sig">UART4 TX</span></td></tr>
    <tr><td>5 to 9, 12, 14</td><td>Not connected</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>Plus four leads to the controller.</span></div>
  <div class="xb-card"><b>BeagleBone Black</b><span>With its own power supply.</span></div>
  <div class="xb-card"><b>A power plan</b><span>A defined start-up and reset order.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

Prepare the wiring and the software with all power off.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 666" role="img" aria-labelledby="xb-beaglebone-breakout-wire"><title id="xb-beaglebone-breakout-wire">Wiring: controller contact 1 to J1 contact 1; controller contact 4 to J1 contact 4; controller contact 5 to J1 contact 5; controller contact 10 to J1 contact 10; P9 contact 11 to UART4 RX; P9 contact 13 to UART4 TX; P9 contact 1 to ground.</title><image href="/images/extensions/beaglebone-breakout/v14/beaglebone-breakout-diagram.webp" x="395" y="14" width="209" height="230"/><circle cx="500" cy="52" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="481" y="71" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="500" y="85" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J1</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Prime header GB/J33</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J1 on this board</text><rect x="30" y="304" width="200" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="130" y="375" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Smoothieboard</text><text x="130" y="395" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">V2 Prime</text><rect x="770" y="304" width="200" height="150" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 334.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="334" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="334" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="339" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">1</text><text x="784" y="339" text-anchor="start" font-size="14" fill="#e6ebf2">1  Controller 3.3 V</text><rect x="400" y="323" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="339" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1 to 1: Controller 3.3 V</text><path d="M230 364.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">4</text><text x="784" y="369" text-anchor="start" font-size="14" fill="#e6ebf2">4  TX from host</text><rect x="400" y="353" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">4 to 4: TX from host</text><path d="M230 394.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">5</text><text x="784" y="399" text-anchor="start" font-size="14" fill="#e6ebf2">5  RX to host</text><rect x="400" y="383" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">5 to 5: RX to host</text><path d="M230 424.0H770" fill="none" stroke="#8b949e" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="424" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="424" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><text x="216" y="429" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">10</text><text x="784" y="429" text-anchor="start" font-size="14" fill="#e6ebf2">10  GND</text><rect x="400" y="413" width="200" height="22" rx="11" fill="#8b949e" stroke="#8b949e" stroke-width="1.5"/><text x="500" y="429" text-anchor="middle" font-size="13" font-weight="700" fill="#111">10 to 10: GND</text><text x="130" y="486" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">P9 on this board</text><text x="870" y="486" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">BeagleBone UART4</text><rect x="700" y="498" width="270" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><rect x="815" y="525" width="130" height="84" rx="8" fill="#23262b" stroke="#9aa2ad" stroke-width="1.5"/><rect x="824" y="533" width="112" height="68" rx="3" fill="#12324f" stroke="#12324f" stroke-width="1.5"/><path d="M838 555.0l12 9l-12 9M858 577.0h24" fill="none" stroke="#5df07a" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M805 621.0H955L942 609.0H818Z" fill="#565c65" stroke="#9aa2ad" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/><rect x="30" y="498" width="200" height="150" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 543.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="543" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="543" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="548" text-anchor="end" font-size="14" fill="#e6ebf2">UART4 RX  11</text><text x="712" y="548" text-anchor="start" font-size="13" fill="#e6ebf2">UART4 RX</text><rect x="340" y="532" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="548" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">11: UART4 RX</text><path d="M230 573.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="573" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="573" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="578" text-anchor="end" font-size="14" fill="#e6ebf2">UART4 TX  13</text><text x="712" y="578" text-anchor="start" font-size="13" fill="#e6ebf2">UART4 TX</text><rect x="340" y="562" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="578" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">13: UART4 TX</text><path d="M230 603.0H700" fill="none" stroke="#8b949e" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="603" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="603" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><text x="216" y="608" text-anchor="end" font-size="14" fill="#e6ebf2">  1</text><text x="712" y="608" text-anchor="start" font-size="13" fill="#e6ebf2">ground</text><rect x="340" y="592" width="220" height="22" rx="11" fill="#8b949e" stroke="#8b949e" stroke-width="1.5"/><text x="450" y="608" text-anchor="middle" font-size="13" font-weight="700" fill="#111">1: ground</text></svg>
  </div>
  <figcaption>Wiring for this procedure. Yellow rings mark the connectors used. Make and change connections with the power off. Equipment is drawn as a typical unit, not a specific model.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Mount on P9</h3>
    <p>Contacts 1 to 14 only, with the board in the orientation shown by the silk screen (Ethernet end).</p>
  </li>
  <li class="xb-step">
    <h3>Wire the controller</h3>
    <p>Smoothieboard V2 Prime GB/J33 contacts 1, 4, 5 and 10 to J1 contacts with the same numbers.</p>
  </li>
  <li class="xb-step">
    <h3>Prepare UART4</h3>
    <p>On the BeagleBone, enable UART4 for your Linux image and choose a client at 115200 baud, 8N1.</p>
  </li>
  <li class="xb-step">
    <h3>Configure the controller</h3>
    <p>Add the settings below.</p>
  </li>
  <li class="xb-step">
    <h3>Test with outputs disabled</h3>
    <p>Under your power and reset procedure, send <code>version</code>; never test with motion commands.</p>
    <p class="xb-expect">The build information is returned.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>A Linux computer as command host</td><td>UART console</td><td><a href="#config-main">Setup</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Setup {#config-main}

```ini
[uart console]
enable = true
console = true
channel = 1
baudrate = 115200
bits = 8
stop_bits = 1
parity = none
```

With <code>console = true</code> the UART starts after the controller has finished booting ([console source](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/Consoles.cpp#L733-L761)). On the Prime, [channel 1 transmits on PB9 and receives on PH14](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/Hal/src/Uart.cpp#L101-L135), header GB contacts 4 and 5. Reserve both pins. Use 115200 baud, 8N1 and no hardware flow control on the computer.

## How it works {#how-it-works}

Each direction passes through a buffer powered from the receiving side. The buffers are enabled according to the BeagleBone reset line and the presence of controller power. The two grounds are common.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 270" role="img" aria-labelledby="xb-beaglebone-breakout-path"><title id="xb-beaglebone-breakout-path">Sending side, UART signal then Buffer, powered by the receiving side then Receiving side, same data, own voltage. BeagleBone reset and controller power then Buffer enable, both must be present.</title><rect x="46" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="186" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Sending side</text><text x="186" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2">UART signal</text><rect x="360" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Buffer</text><text x="500" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2">powered by the receiving side</text><path d="M330.0 70H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 63L358 70L349 77Z" fill="#5fb3ff"/><rect x="674" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="814" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Receiving side</text><text x="814" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2">same data, own voltage</text><path d="M644.0 70H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 63L672 70L663 77Z" fill="#5fb3ff"/><rect x="203" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="343" y="184" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">BeagleBone reset and controller</text><text x="343" y="202" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">power</text><text x="343" y="222" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="517" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="657" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Buffer enable</text><text x="657" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2">both must be present</text><path d="M487.0 198H508.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M506 191L515 198L506 205Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board, one path per row.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>No data</td><td>UART4 enabled on the BeagleBone, crossed signals, reset released.</td></tr>
    <tr><td>Garbled text</td><td>Same baud rate and format on both sides.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/beaglebone-breakout/v14/beaglebone-breakout-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/beaglebone-breakout/v14/beaglebone-breakout-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/beaglebone-breakout/v14/beaglebone-breakout-diagram.webp">Board drawing (WebP)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

The board is 22 × 24 mm with square corners, 1.6 mm thick. It has no mounting holes.

## Appendix: electrical specifications {#electrical}

Values from the silk screen and the BeagleBone supply requirement.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Logic</td><td>Both sides</td><td>—</td><td>3.3 V</td><td>—</td><td>Board silk</td></tr>
    <tr><td>BeagleBone supply</td><td>Its own DC jack</td><td>4.75 V</td><td>5 V</td><td>5.25 V</td><td>At least 1 A</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: datasheets {#datasheets}

The first page of each important chip&rsquo;s datasheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/beaglebone-breakout/datasheets/sn74lvc1g126.pdf"><img src="/images/extensions/beaglebone-breakout/datasheets/sn74lvc1g126-page1.png" alt="First page of the SN74LVC1G126 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/beaglebone-breakout/datasheets/sn74lvc1g126.pdf">SN74LVC1G126 single bus buffer gate with 3-state output</a> — Texas Instruments, 49 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/beaglebone-breakout/datasheets/sn74lvc1g08.pdf"><img src="/images/extensions/beaglebone-breakout/datasheets/sn74lvc1g08-page1.png" alt="First page of the SN74LVC1G08 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/beaglebone-breakout/datasheets/sn74lvc1g08.pdf">SN74LVC1G08 single 2-input AND gate</a> — Texas Instruments, 50 pages.</figcaption>
</figure>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
