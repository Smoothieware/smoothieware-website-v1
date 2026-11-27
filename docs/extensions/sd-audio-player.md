---
layout: default
title: "SD audio player"
description: "A DFPlayer Mini carrier that plays audio files from a microSD card, by serial command or push contacts: pinout, wiring, limits and files."
permalink: /extensions/sd-audio-player
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Controls and displays</p>
    <h1 id="sd-audio-player">SD audio player</h1>
    <p class="xb-lead">Plays recorded sounds or spoken messages from a microSD card through a small speaker. A bought DFPlayer Mini module does the playing; choose files over a serial port with your own driver, or step through them with two push contacts.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/sd-audio-player/sd-audio-player-diagram.png" alt="Top view of the audio player board: the DFPlayer module in the middle, a speaker screw terminal, line-out and trigger headers and a socket on the left and right edges.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>
<div class="xb-stats">
  <div class="xb-stat"><b>microSD</b><span>up to 32&nbsp;GB, FAT16 or FAT32</span></div>
  <div class="xb-stat"><b>9600 baud</b><span>3.3&nbsp;V serial control</span></div>
  <div class="xb-stat"><b>8 &Omega;</b><span>small speaker, under 3&nbsp;W</span></div>
  <div class="xb-stat"><b>Line out</b><span>for an external amplifier</span></div>
  <div class="xb-stat"><b>2 contacts</b><span>stand-alone triggers</span></div>
  <div class="xb-stat"><b>70 &times; 70</b><span>millimetres, four M3 holes</span></div>
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
  Never connect either speaker terminal to ground: the output is bridged. Do not use this board for safety alarms.
</sl-alert>
{:/nomarkdown}

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>Messages for job end, errors or tool changes</td></tr>
    <tr><td>Module</td><td>DFRobot DFPlayer Mini (DFR0299), socketed; bought separately. Copies differ in behaviour</td></tr>
    <tr><td>Control</td><td>Serial at 9600 baud on contacts 4 (to module) and 5 (from module), busy signal on contact 3, 1&nbsp;k&Omega; in series each</td></tr>
    <tr><td>Outputs</td><td>Bridged speaker terminal; line out right, left, ground</td></tr>
    <tr><td>Triggers</td><td>Two contacts to ground (J5), wired to module inputs IO1 and IO2</td></tr>
    <tr><td>Supply</td><td>5&nbsp;V from the socket; allow for peaks of several hundred milliamperes</td></tr>
    <tr><td>Connectors</td><td>Screw terminal, 2.54&nbsp;mm headers with optional STEMMA JST PH alternatives (J14, J15), two Gadgeteer type U sockets (Samtec SHF-105, 1.27&nbsp;mm)</td></tr>
    <tr><td>Size</td><td>70 &times; 70&nbsp;mm, four M3 holes on a 60 &times; 60&nbsp;mm pattern</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> header GB electrically; no firmware driver</td></tr>
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
      <img src="/images/extensions/sd-audio-player/sd-audio-player-diagram.png" alt="Top view of the audio player board with 11 numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:37.5%;top:38.9%" aria-label="1: player module (u1)">1<span class="xb-pop"><b>Player module (U1)</b> — Fit it with the card slot toward the speaker side.</span></a>
      <a class="xb-mk xb-pl" href="#tour-2" style="left:20.8%;top:87.5%" aria-label="2: speaker terminal (j3)">2<span class="xb-pop"><b>Speaker terminal (J3)</b> — 8&nbsp;&Omega; speaker between the two screws.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:44.4%;top:86.1%" aria-label="3: line out (j4)">3<span class="xb-pop"><b>Line out (J4)</b> — Right, left and ground.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:66.7%;top:86.1%" aria-label="4: trigger contacts (j5)">4<span class="xb-pop"><b>Trigger contacts (J5)</b> — Trigger 1, trigger 2, ground.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-5" style="left:7.8%;top:36.1%" aria-label="5: input socket u in (j1)">5<span class="xb-pop"><b>Input socket U IN (J1)</b> — Busy 3, transmit 4, receive 5, 5&nbsp;V on 2.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-6" style="left:92.2%;top:36.1%" aria-label="6: chain socket chain (j2)">6<span class="xb-pop"><b>Chain socket CHAIN (J2)</b> — Contacts 6 to 9 pass through.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:30.6%;top:42.4%" aria-label="7: serial resistors (r1 to r3)">7<span class="xb-pop"><b>Serial resistors (R1 to R3)</b> — 1&nbsp;k&Omega;.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:31.9%;top:69.4%" aria-label="8: output resistors (r4 to r7)">8<span class="xb-pop"><b>Output resistors (R4 to R7)</b> — 1&nbsp;k&Omega; on line out and triggers.</span></a>
      <a class="xb-mk xb-pb" href="#tour-9" style="left:35.6%;top:31.5%" aria-label="9: supply capacitors (c1 to c3)">9<span class="xb-pop"><b>Supply capacitors (C1 to C3)</b> — Including 220&nbsp;&micro;F for audio peaks.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-10" style="left:20.8%;top:30.6%" aria-label="10: chain links (jp3 to jp5)">10<span class="xb-pop"><b>Chain links (JP3 to JP5)</b> — Open as delivered.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-11" style="left:8.3%;top:8.3%" aria-label="11: mounting hole">11<span class="xb-pop"><b>Mounting hole</b> — One of four M3 holes.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Player module (U1)</b> — Fit it with the card slot toward the speaker side.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Speaker terminal (J3)</b> — 8&nbsp;&Omega; speaker between the two screws.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Line out (J4)</b> — Right, left and ground.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Trigger contacts (J5)</b> — Trigger 1, trigger 2, ground.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Input socket U IN (J1)</b> — Busy 3, transmit 4, receive 5, 5&nbsp;V on 2.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Chain socket CHAIN (J2)</b> — Contacts 6 to 9 pass through.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Serial resistors (R1 to R3)</b> — 1&nbsp;k&Omega;.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Output resistors (R4 to R7)</b> — 1&nbsp;k&Omega; on line out and triggers.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Supply capacitors (C1 to C3)</b> — Including 220&nbsp;&micro;F for audio peaks.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Chain links (JP3 to JP5)</b> — Open as delivered.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Mounting hole</b> — One of four M3 holes.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

Signal names are from the controller&rsquo;s side: transmit goes into the module.

### J1: input socket (U IN)

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>Use</th><th>Prime header GB</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Passed to the chain</td><td>3.3 V</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Module supply</td><td>5 V</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">BUSY_HOST</span></td><td>Playing indication from module</td><td>PD9</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">TX_HOST</span></td><td>Controller transmit</td><td>PB9 (UART1 TX)</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">RX_HOST</span></td><td>Controller receive</td><td>PH14 (UART1 RX)</td></tr>
    <tr><td>6 to 9</td><td>Passed through</td><td>Not used</td><td>PK0, PK1, PH8, PA8</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Ground</td><td>GND</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Speaker, line out and triggers

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Connector</th><th>Pins</th></tr></thead>
  <tbody>
    <tr><td>J3</td><td>Speaker 1, speaker 2</td></tr>
    <tr><td>J4 or J14</td><td>Right, left, ground</td></tr>
    <tr><td>J5 or J15</td><td>Trigger 1, trigger 2, ground</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>A DFPlayer Mini</b><span>Original or compatible.</span></div>
  <div class="xb-card"><b>A microSD card</b><span>FAT16 or FAT32, with your audio files.</span></div>
  <div class="xb-card"><b>A speaker</b><span>8&nbsp;&Omega;, under 3&nbsp;W.</span></div>
  <div class="xb-card"><b>5 V headroom</b><span>For audio peaks.</span></div>
  <div class="xb-card"><b>For serial control</b><span>Your own driver.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Minimum wiring">
<svg viewBox="0 0 1000 280" role="img" aria-labelledby="xb-audio-wire-t">
<title id="xb-audio-wire-t">Minimum wiring: contact 2 to contact 2, 5 V; PD9, contact 3 to contact 3, busy; PB9, contact 4 to contact 4, transmit; PH14, contact 5 to contact 5, receive; contact 10 to contact 10, ground.</title>
<rect x="20" y="20" width="280" height="240" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="160.0" y="145.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea"></text>
<rect x="700" y="20" width="280" height="240" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="840.0" y="145.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea"></text>
<text x="160" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Prime header GB (J33)</text>
<text x="840" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Audio board J1</text>
<path d="M300 84H700" stroke="#ff9f43" stroke-width="3" fill="none"/><circle cx="300" cy="84" r="5" fill="#ff9f43"/><circle cx="700" cy="84" r="5" fill="#ff9f43"/><text x="286" y="89" text-anchor="end" font-size="13" fill="#eaeaea">contact 2</text><text x="714" y="89" font-size="13" fill="#eaeaea">contact 2</text><text x="500" y="77" text-anchor="middle" font-size="12" fill="#b3b3b3">5 V</text>
<path d="M300 122H700" stroke="#ffd75f" stroke-width="3" fill="none"/><circle cx="300" cy="122" r="5" fill="#ffd75f"/><circle cx="700" cy="122" r="5" fill="#ffd75f"/><text x="286" y="127" text-anchor="end" font-size="13" fill="#eaeaea">PD9, contact 3</text><text x="714" y="127" font-size="13" fill="#eaeaea">contact 3</text><text x="500" y="115" text-anchor="middle" font-size="12" fill="#b3b3b3">busy</text>
<path d="M300 160H700" stroke="#5fb3ff" stroke-width="3" fill="none"/><circle cx="300" cy="160" r="5" fill="#5fb3ff"/><circle cx="700" cy="160" r="5" fill="#5fb3ff"/><text x="286" y="165" text-anchor="end" font-size="13" fill="#eaeaea">PB9, contact 4</text><text x="714" y="165" font-size="13" fill="#eaeaea">contact 4</text><text x="500" y="153" text-anchor="middle" font-size="12" fill="#b3b3b3">transmit</text>
<path d="M300 198H700" stroke="#6fe08a" stroke-width="3" fill="none"/><circle cx="300" cy="198" r="5" fill="#6fe08a"/><circle cx="700" cy="198" r="5" fill="#6fe08a"/><text x="286" y="203" text-anchor="end" font-size="13" fill="#eaeaea">PH14, contact 5</text><text x="714" y="203" font-size="13" fill="#eaeaea">contact 5</text><text x="500" y="191" text-anchor="middle" font-size="12" fill="#b3b3b3">receive</text>
<path d="M300 236H700" stroke="#b3b3b3" stroke-width="3" fill="none"/><circle cx="300" cy="236" r="5" fill="#b3b3b3"/><circle cx="700" cy="236" r="5" fill="#b3b3b3"/><text x="286" y="241" text-anchor="end" font-size="13" fill="#eaeaea">contact 10</text><text x="714" y="241" font-size="13" fill="#eaeaea">contact 10</text><text x="500" y="229" text-anchor="middle" font-size="12" fill="#b3b3b3">ground</text>
</svg>
  </div>
  <figcaption>For stand-alone trigger use, only 5 V and ground are needed.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Prepare the card</h3>
    <p>Format it FAT32 and copy the audio files following the module maker&rsquo;s naming rules; insert it into the module.</p>
  </li>
  <li class="xb-step">
    <h3>Fit module and speaker</h3>
    <p>With power off, card slot toward the speaker side; speaker on J3.</p>
  </li>
  <li class="xb-step">
    <h3>Connect and power</h3>
    <p>Plug J1 into header GB.</p>
    <p class="xb-expect">The module has its own light that shows activity.</p>
  </li>
  <li class="xb-step">
    <h3>Play</h3>
    <p>Briefly connect a trigger pin to ground, or send serial commands from your driver.</p>
    <p class="xb-expect">The speaker should play a file. The trigger actions are listed on the module maker&rsquo;s wiki.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Play on command</td><td>None</td><td>No SmoothieV2 driver for the DFPlayer</td></tr>
    <tr><td>Play from a contact</td><td>None</td><td>The module reads J5 by itself</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

There is nothing to add to `config.ini`. Serial commands and trigger behaviour are described on the [DFRobot wiki](https://wiki.dfrobot.com/DFPlayer_Mini_SKU_DFR0299).

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
<svg viewBox="0 0 1000 200" role="img" aria-labelledby="xb-audio-how-t">
<title id="xb-audio-how-t">The module reads the card, decodes audio and drives the speaker.</title>
<rect x="20.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="120.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J1 serial</text><text x="120.0" y="67.0" text-anchor="middle" font-size="12" fill="#b3b3b3">9600 baud</text>
<path d="M220.0 51H273.3" stroke="#b3b3b3" stroke-width="3"/><path d="M273.3 51l-9 -5v10z" fill="#b3b3b3"/>
<rect x="273.3" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="373.3" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">1 k</text><text x="373.3" y="67.0" text-anchor="middle" font-size="12" fill="#b3b3b3">series</text>
<path d="M473.3 51H526.6" stroke="#b3b3b3" stroke-width="3"/><path d="M526.6 51l-9 -5v10z" fill="#b3b3b3"/>
<rect x="526.7" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="626.7" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Module</text><text x="626.7" y="67.0" text-anchor="middle" font-size="12" fill="#b3b3b3">card, decoder</text>
<path d="M726.7 51H780.0" stroke="#b3b3b3" stroke-width="3"/><path d="M780.0 51l-9 -5v10z" fill="#b3b3b3"/>
<rect x="780.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="880.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J3 speaker</text><text x="880.0" y="67.0" text-anchor="middle" font-size="12" fill="#b3b3b3">bridged output</text>
<rect x="20.0" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="120.0" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J5 contacts</text><text x="120.0" y="157.0" text-anchor="middle" font-size="12" fill="#b3b3b3">push to ground</text>
<path d="M220.0 141H273.3" stroke="#b3b3b3" stroke-width="3"/><path d="M273.3 141l-9 -5v10z" fill="#b3b3b3"/>
<rect x="273.3" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="373.3" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">1 k</text><text x="373.3" y="157.0" text-anchor="middle" font-size="12" fill="#b3b3b3">series</text>
<path d="M473.3 141H526.6" stroke="#b3b3b3" stroke-width="3"/><path d="M526.6 141l-9 -5v10z" fill="#b3b3b3"/>
<rect x="526.7" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="626.7" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Module IO</text><text x="626.7" y="157.0" text-anchor="middle" font-size="12" fill="#b3b3b3">stand-alone</text>
<path d="M726.7 141H780.0" stroke="#b3b3b3" stroke-width="3"/><path d="M780.0 141l-9 -5v10z" fill="#b3b3b3"/>
<rect x="780.0" y="110" width="200" height="62" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="880.0" y="137.0" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J4 line out</text><text x="880.0" y="157.0" text-anchor="middle" font-size="12" fill="#b3b3b3">to amplifier</text>
</svg>
  </div>
  <figcaption>Control inputs and audio outputs.</figcaption>
</figure>
{:/nomarkdown}

All decoding and amplification happen on the module. The carrier gives it a well decoupled 5&nbsp;V supply, protects each signal with a series resistor and brings the outputs to connectors. Check the polarity of the busy signal on your module before depending on it.

## Solder links {#options}

A serial port connects two devices only, so leave these links open.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Solder links">
<svg viewBox="0 0 1000 114" role="img" aria-labelledby="xb-audio-jp-t">
<title id="xb-audio-jp-t">Solder links as delivered: JP3 open; JP4 open; JP5 open.</title>
<rect x="20" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="72" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="114" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="108" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP3 · open</text><text x="108" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">chain contact 3</text>
<rect x="216" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="268" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="310" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="304" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP4 · open</text><text x="304" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">chain contact 4</text>
<rect x="412" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#606060"/><rect x="464" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="506" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="500" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">JP5 · open</text><text x="500" y="90" text-anchor="middle" font-size="11" fill="#b3b3b3">chain contact 5</text>
</svg>
  </div>
  <figcaption>The links as delivered. Close one with a small blob of solder across both pads; open it by removing the solder or cutting the copper between the pads.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>What it does</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>JP3</td><td>Joins busy to the chain</td><td>Open</td></tr>
    <tr><td>JP4</td><td>Joins transmit to the chain</td><td>Open</td></tr>
    <tr><td>JP5</td><td>Joins receive to the chain</td><td>Open</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Chaining {#chaining}

A further board can use contacts 6 to 9.

{::nomarkdown}
{% include _includes/extension-chain-figure.html id="xb-audio" board="audio player board" in_label="U IN" chain_label="CHAIN" lane1="pin 4, transmit" lane2="pin 5, receive" lane3="pin 6, free" s1="open" s2="open" s3="closed" caption="Serial signals stop here; pin 6 is wired straight through." %}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>On CHAIN</th></tr></thead>
  <tbody>
    <tr><td>1, 2, 10</td><td>Power and ground</td><td>Passed on</td></tr>
    <tr><td>3 to 5</td><td>Busy and serial</td><td>Stopped by open links</td></tr>
    <tr><td>6 to 9</td><td>Free</td><td>Passed on</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Likely cause</th><th>What to check</th></tr></thead>
  <tbody>
    <tr><td>Silent</td><td>No card, wrong format, or speaker loose</td><td>Card, file names, J3</td></tr>
    <tr><td>No serial reply</td><td>TX and RX crossed or wrong baud</td><td>Test points M_RX and M_TX; 9600 baud</td></tr>
    <tr><td>Module resets when loud</td><td>5 V dips</td><td>Lower the volume; improve the supply</td></tr>
    <tr><td>Busy signal inverted</td><td>Module variant</td><td>Invert it in software</td></tr>
    <tr><td>Trigger does nothing</td><td>Contact not to ground, or module variant</td><td>J5 wiring; maker&rsquo;s wiki</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-unknown"></span>Light on the module</th></tr></thead>
  <tbody>
    <tr><td>Lit means</td><td>Module activity, as defined by the module maker</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/sd-audio-player/sd-audio-player-schematic.pdf">Schematic (PDF)</a></td><td>The circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/sd-audio-player/sd-audio-player-bom.csv">Parts list (CSV)</a></td><td>Every component with its value, footprint and part number where one is chosen</td></tr>
    <tr><td><a href="/images/extensions/sd-audio-player/sd-audio-player-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side. Leave access to the card.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-audio-mount-t">
  <title id="xb-audio-mount-t">Mounting drawing of the audio player board, component side: outline 70 by 70 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="310.0" y="78.0" width="340.0" height="340.0" rx="4.9" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M310.0 56H650.0"/><path d="M310.0 50V62"/><path d="M650.0 50V62"/><path d="M676.0 78.0V418.0"/><path d="M670.0 78.0h12"/><path d="M670.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">70</text>
  <text x="688.0" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">70</text>
  <circle cx="310.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="298.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M252.0 104.0h30" fill="none"/><path d="M286.0 104.0l-8 -4v8z"/><path d="M252.0 104.0v30" fill="none"/><path d="M252.0 138.0l-4 -8h8z"/></g>
  <text x="290.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="248.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="334.3" cy="102.3" r="7.8" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M322.5 102.3h23.5M334.3 90.5v23.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="326.5" y="130.1" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.00</text>
  <circle cx="625.7" cy="102.3" r="7.8" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M613.9 102.3h23.5M625.7 90.5v23.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="633.5" y="130.1" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  65.00, 5.00</text>
  <circle cx="334.3" cy="393.7" r="7.8" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M322.5 393.7h23.5M334.3 381.9v23.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="326.5" y="375.9" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 65.00</text>
  <circle cx="625.7" cy="393.7" r="7.8" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M613.9 393.7h23.5M625.7 381.9v23.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="633.5" y="375.9" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">4</tspan>  65.00, 65.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 70 × 70&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>65.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>5.00</td><td>65.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>65.00</td><td>65.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Every figure is a design value, a calculated or simulated value, or a manufacturer&rsquo;s data sheet value, as the last column says. A dash means no figure is given.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis</th></tr></thead>
  <tbody>
    <tr><td>Supply</td><td>5 V</td><td>3.2 V</td><td>5 V</td><td>5 V</td><td>Module maker</td></tr>
    <tr><td>Serial</td><td>Contacts 4, 5</td><td>&mdash;</td><td>9600 baud, 3.3 V</td><td>&mdash;</td><td>Module maker</td></tr>
    <tr><td>Speaker</td><td>J3</td><td>&mdash;</td><td>8 &Omega;</td><td>3 W</td><td>Module maker</td></tr>
    <tr><td>Serial edge time</td><td>Module input</td><td>&mdash;</td><td>66 ns</td><td>5 &micro;s</td><td>Simulated</td></tr>
    <tr><td>High level at module</td><td>Module input</td><td>3.0 V</td><td>3.3 V</td><td>3.35 V</td><td>Simulated</td></tr>
    <tr><td>5 V dip on an assumed 0.6 A, 100 &micro;s peak</td><td>5 V</td><td>&mdash;</td><td>0.11 V</td><td>0.35 V</td><td>Simulated</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Component stress limits

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Part</th><th>Limit</th><th>Use on this board</th></tr></thead>
  <tbody>
    <tr><td>Speaker output</td><td>Bridged</td><td>Never ground or short it</td></tr>
    <tr><td>5 V supply</td><td>Shared host regulator</td><td>Audio peaks</td></tr>
    <tr><td>Capacitors</td><td>10 V and 16 V</td><td>5 V</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: simulation {#simulation}

The serial input and the supply dip during an audio peak were simulated with ngspice; the peak current is an assumption.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Simulated results against limits">
<svg viewBox="0 0 1000 186" role="img" aria-labelledby="xb-audio-sim-t">
<title id="xb-audio-sim-t">Each simulated value (yellow mark) against its allowed range (green band).</title>
<text x="385" y="41" text-anchor="end" font-size="13" fill="#eaeaea">Serial edge at the module (bit time 104 us)</text>
<path d="M400 36H860" stroke="#404040" stroke-width="10" stroke-linecap="round"/><path d="M400.0 36H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M405.4 23v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="41" font-size="13" font-weight="700" fill="#ffcc33">66&nbsp;ns</text>
<text x="385" y="93" text-anchor="end" font-size="13" fill="#eaeaea">High level</text>
<path d="M400 88H860" stroke="#404040" stroke-width="10" stroke-linecap="round"/><path d="M444.5 88H815.5" stroke="#2f8f5b" stroke-width="10"/><path d="M762.5 75v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="93" font-size="13" font-weight="700" fill="#ffcc33">3.3&nbsp;V</text>
<text x="385" y="145" text-anchor="end" font-size="13" fill="#eaeaea">5 V droop for an assumed 0.6 A, 100 us audio peak</text>
<path d="M400 140H860" stroke="#404040" stroke-width="10" stroke-linecap="round"/><path d="M400.0 140H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M526.0 127v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="145" font-size="13" font-weight="700" fill="#ffcc33">0.11&nbsp;V</text>
</svg>
  </div>
  <figcaption>Simulated value (yellow) against the limit used for it (green). Each bar has its own scale.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Result</th><th>Simulated value</th><th>Limit</th><th>Outcome</th></tr></thead>
  <tbody>
    <tr><td>Serial edge at the module (bit time 104 us)</td><td>66&nbsp;ns</td><td>at most 5&nbsp;&micro;s</td><td>Within</td></tr>
    <tr><td>High level</td><td>3.3&nbsp;V</td><td>3&nbsp;V to 3.35&nbsp;V</td><td>Within</td></tr>
    <tr><td>5 V droop for an assumed 0.6 A, 100 us audio peak</td><td>0.11&nbsp;V</td><td>at most 350&nbsp;mV</td><td>Within</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Not simulated: the module, audio quality and its real current.

## Appendix: datasheet {#datasheets}

The first page of the module data sheet. Click the page to open the PDF. It is a distributor copy.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/sd-audio-player/datasheets/dfplayer.pdf"><img src="/images/extensions/sd-audio-player/datasheets/dfplayer-page1.png" alt="First page of the DFPlayer Mini (DFR0299) datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/sd-audio-player/datasheets/dfplayer.pdf">DFPlayer Mini (DFR0299)</a> — DFRobot, 2 pages.</figcaption>
</figure>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
