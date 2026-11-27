---
layout: default
title: "Serial to Wi-Fi board"
description: "An ESP32-C3 module on a Gadgeteer UART socket, for building a network serial bridge to the controller."
permalink: /extensions/serial-to-wifi-board
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Wireless</p>
    <h1 id="serial-to-wifi-board">Serial to Wi-Fi board</h1>
    <p class="xb-lead">An <a href="/images/extensions/serial-to-wifi-board/datasheets/esp32c3mini.pdf">ESP32-C3</a> Wi-Fi module wired to a controller serial port, with its own regulator, programming header, reset button, status light and chain socket.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/serial-to-wifi-board/v16/serial-to-wifi-board-diagram.png" alt="Top view of the Serial to Wi-Fi board.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b><a href="/images/extensions/serial-to-wifi-board/datasheets/esp32c3mini.pdf">ESP32-C3</a></b><span>Wi-Fi module</span></div>
  <div class="xb-stat"><b>3.3 V</b><span>logic</span></div>
  <div class="xb-stat"><b>5 V max</b><span>supply</span></div>
  <div class="xb-stat"><b>1 light</b><span>status</span></div>
  <div class="xb-stat"><b>15 mm</b><span>antenna clearance</span></div>
  <div class="xb-stat"><b>34 × 38</b><span>millimetres</span></div>
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
  The module needs serial-bridge firmware, which is not included. A network path to a machine must be protected: use authentication, and never use it for safety functions. 3.3&nbsp;V logic, 5&nbsp;V maximum supply, no hot-plugging. Keep metal at least 15&nbsp;mm from the antenna.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>Serial to Wi-Fi bridge</td></tr>
    <tr><td>Module</td><td><a href="/images/extensions/serial-to-wifi-board/datasheets/esp32c3mini.pdf">ESP32-C3-MINI-1-N4X</a></td></tr>
    <tr><td>Bridge UART</td><td>J1 contact 4 to GPIO6 (receive), GPIO5 to contact 5 (transmit)</td></tr>
    <tr><td>Reset input</td><td>J1 contact 3: high holds the module off</td></tr>
    <tr><td>Status output</td><td>J1 contact 6, from GPIO4, set by the firmware</td></tr>
    <tr><td>Supply</td><td>Host 5&nbsp;V through JP4, or 5&nbsp;V on the programming header; <a href="/images/extensions/serial-to-wifi-board/datasheets/tlv62569.pdf">TLV62569</a> regulator</td></tr>
    <tr><td>Programming</td><td>J3: ground, boot, 5&nbsp;V, receive, transmit, enable</td></tr>
    <tr><td>Size</td><td>34 &times; 38&nbsp;mm, two M3 holes</td></tr>
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
      <img src="/images/extensions/serial-to-wifi-board/v16/serial-to-wifi-board-diagram.png" alt="Top view of the Serial to Wi-Fi board with numbered markers explained in the list below.">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:49.9%;top:24.6%" aria-label="1: Wi-Fi module (U1)">1<span class="xb-pop"><b>Wi-Fi module (U1)</b> — keep the antenna area clear.</span></a>
      <a class="xb-mk" href="#tour-2" style="left:29.4%;top:79.3%" aria-label="2: Host socket (J1)">2<span class="xb-pop"><b>Host socket (J1)</b> — supply, serial, reset and status.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:70.5%;top:79.3%" aria-label="3: Chain socket (J2)">3<span class="xb-pop"><b>Chain socket (J2)</b> — rails and contacts 7 to 9.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-4" style="left:91.9%;top:22.9%" aria-label="4: Programming header (J3)">4<span class="xb-pop"><b>Programming header (J3)</b> — 3.3&nbsp;V serial.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:27.4%;top:45.1%" aria-label="5: Reset button (SW1)">5<span class="xb-pop"><b>Reset button (SW1)</b> — holds the module in reset.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-6" style="left:12.7%;top:43.1%" aria-label="6: Regulator (U2)">6<span class="xb-pop"><b>Regulator (U2)</b> — makes the module&rsquo;s 3.3&nbsp;V.</span></a>
      <a class="xb-mk xb-pl" href="#tour-7" style="left:15.2%;top:68.9%" aria-label="7: Host 5 V link (JP4)">7<span class="xb-pop"><b>Host 5 V link (JP4)</b> — bridged as delivered; cut for an external supply.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:43.0%;top:49.5%" aria-label="8: Status light (LED1)">8<span class="xb-pop"><b>Status light (LED1)</b> — amber.</span></a>
      <a class="xb-mk" href="#tour-9" style="left:45.9%;top:70.3%" aria-label="9: Chain links">9<span class="xb-pop"><b>Chain links</b> — JP1 to JP3 for contacts 7 to 9.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Wi-Fi module (U1)</b> — keep the antenna area clear.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Host socket (J1)</b> — supply, serial, reset and status.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Chain socket (J2)</b> — rails and contacts 7 to 9.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Programming header (J3)</b> — 3.3&nbsp;V serial.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Reset button (SW1)</b> — holds the module in reset.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Regulator (U2)</b> — makes the module&rsquo;s 3.3&nbsp;V.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Host 5 V link (JP4)</b> — bridged as delivered; cut for an external supply.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Status light (LED1)</b> — amber.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Chain links</b> — JP1 to JP3 for contacts 7 to 9.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

### Lights {#lights}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th>Lit means</th><th>Disable it</th></tr></thead>
  <tbody>
    <tr><td>LED1, amber</td><td>Set by the module firmware</td><td>Cut JP5</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Pinout {#pinout}

### J1: host socket

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Host 3.3&nbsp;V, passed to J2</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span> supply through JP4</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">Reset request</span> input</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">RX</span> input: from the controller transmit</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">TX</span> output: to the controller receive</td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">Status</span> output</td></tr>
    <tr><td>7 to 9</td><td>Passed to J2 through JP1 to JP3</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J3: programming

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>2</td><td>Boot</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-5v">5 V</span> supply, not a logic level</td></tr>
    <tr><td>4</td><td>Receive, 3.3&nbsp;V</td></tr>
    <tr><td>5</td><td>Transmit, 3.3&nbsp;V</td></tr>
    <tr><td>6</td><td>Enable</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>Plus four leads to the controller.</span></div>
  <div class="xb-card"><b>A 3.3 V serial adapter</b><span>For loading firmware.</span></div>
  <div class="xb-card"><b>Bridge firmware</b><span><a href="/images/extensions/serial-to-wifi-board/datasheets/esp32c3mini.pdf">ESP32-C3</a>, using GPIO6 and GPIO5, and a network client.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

Load the module first, then wire it to Smoothieboard V2 Prime GB/J33.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 472" role="img" aria-labelledby="xb-serial-to-wifi-board-wire"><title id="xb-serial-to-wifi-board-wire">Wiring: controller contact 4 to J1 contact 4; controller contact 5 to J1 contact 5; controller contact 2 to J1 contact 2; controller contact 10 to J1 contact 10.</title><image href="/images/extensions/serial-to-wifi-board/v16/serial-to-wifi-board-diagram.png" x="420" y="14" width="161" height="230"/><circle cx="467" cy="196" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="448" y="215" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="467" y="229" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J1</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Prime header GB/J33</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J1 on this board</text><rect x="30" y="304" width="200" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="130" y="375" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Smoothieboard</text><text x="130" y="395" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">V2 Prime</text><rect x="770" y="304" width="200" height="150" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 334.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="334" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="334" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="339" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">4</text><text x="784" y="339" text-anchor="start" font-size="14" fill="#e6ebf2">4  RX input: from…</text><rect x="400" y="323" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="339" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">4 to 4: RX input: from…</text><path d="M230 364.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">5</text><text x="784" y="369" text-anchor="start" font-size="14" fill="#e6ebf2">5  TX output: to…</text><rect x="400" y="353" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">5 to 5: TX output: to…</text><path d="M230 394.0H770" fill="none" stroke="#e8820c" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="394" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">2</text><text x="784" y="399" text-anchor="start" font-size="14" fill="#e6ebf2">2  5 V supply…</text><rect x="400" y="383" width="200" height="22" rx="11" fill="#e8820c" stroke="#e8820c" stroke-width="1.5"/><text x="500" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#111">2 to 2: 5 V supply…</text><path d="M230 424.0H770" fill="none" stroke="#8b949e" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="424" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="424" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><text x="216" y="429" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">10</text><text x="784" y="429" text-anchor="start" font-size="14" fill="#e6ebf2">10  GND</text><rect x="400" y="413" width="200" height="22" rx="11" fill="#8b949e" stroke="#8b949e" stroke-width="1.5"/><text x="500" y="429" text-anchor="middle" font-size="13" font-weight="700" fill="#111">10 to 10: GND</text></svg>
  </div>
  <figcaption>Load the module firmware through J3 first. Leave JP4 bridged and J3 unused afterwards.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Load firmware</h3>
    <p>Through J3. The bridge must use GPIO6 and GPIO5; the programming port uses different pins (GPIO20 and 21).</p>
  </li>
  <li class="xb-step">
    <h3>Disconnect power and wire</h3>
    <p>J33 contact 4 to J1 contact 4, contact 5 to contact 5, contact 2 to contact 2 and contact 10 to contact 10. Leave JP4 bridged and J3 unused.</p>
  </li>
  <li class="xb-step">
    <h3>Configure the controller</h3>
    <p>Add the settings below.</p>
  </li>
  <li class="xb-step">
    <h3>Test</h3>
    <p>Power up, join the network as your firmware describes and send <code>version</code>.</p>
    <p class="xb-expect">The controller&rsquo;s build information comes back over the network.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>A console over Wi-Fi</td><td>UART console</td><td><a href="#config-main">Setup</a></td></tr>
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

Wi-Fi settings belong to the module firmware, not to Smoothieware.

## How it works {#how-it-works}

The controller sees an ordinary UART. The module firmware moves bytes between that UART and the network. A high level on contact 3 pulls the module&rsquo;s enable pin low through a transistor, and the reset button does the same.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 270" role="img" aria-labelledby="xb-serial-to-wifi-board-path"><title id="xb-serial-to-wifi-board-path">Controller UART then Module firmware, moves bytes then Wi-Fi network. Contact 3 high, or reset button then Transistor then Module enable pulled low.</title><rect x="46" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="186" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Controller UART</text><text x="186" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="360" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Module firmware</text><text x="500" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2">moves bytes</text><path d="M330.0 70H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 63L358 70L349 77Z" fill="#5fb3ff"/><rect x="674" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="814" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Wi-Fi network</text><text x="814" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M644.0 70H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 63L672 70L663 77Z" fill="#5fb3ff"/><rect x="46" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="186" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Contact 3 high, or reset button</text><text x="186" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="360" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="500" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Transistor</text><text x="500" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M330.0 198H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 191L358 198L349 205Z" fill="#5fb3ff"/><rect x="674" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="814" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Module enable pulled low</text><text x="814" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M644.0 198H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 191L672 198L663 205Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board, one path per row.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Module does not start</td><td>JP4 bridged and 5&nbsp;V present; contact 3 not held high.</td></tr>
    <tr><td>Programs but does not bridge</td><td>The firmware must use GPIO6 and GPIO5.</td></tr>
    <tr><td>Weak signal</td><td>Clear the antenna area of metal.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/serial-to-wifi-board/v16/serial-to-wifi-board-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/serial-to-wifi-board/v16/serial-to-wifi-board-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/serial-to-wifi-board/v16/serial-to-wifi-board-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-sw-mount-t">
  <title id="xb-sw-mount-t">Mounting drawing of the sw, component side: outline 34 by 38 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="327.9" y="78.0" width="304.2" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M327.9 56H632.1"/><path d="M327.9 50V62"/><path d="M632.1 50V62"/><path d="M658.1 78.0V418.0"/><path d="M652.1 78.0h12"/><path d="M652.1 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">34</text>
  <text x="670.1" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">38</text>
  <circle cx="327.9" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="315.9" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M269.9 104.0h30" fill="none"/><path d="M303.9 104.0l-8 -4v8z"/><path d="M269.9 104.0v30" fill="none"/><path d="M269.9 138.0l-4 -8h8z"/></g>
  <text x="307.9" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="265.9" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="390.5" cy="292.7" r="14.3" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M372.2 292.7h36.6M390.5 274.4v36.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="376.2" y="268.4" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  7.00, 24.00</text>
  <circle cx="569.5" cy="292.7" r="14.3" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M551.2 292.7h36.6M569.5 274.4v36.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="583.8" y="268.4" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  27.00, 24.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 34 × 38&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>7.00</td><td>24.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>27.00</td><td>24.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Values from the silk screen.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Supply</td><td>5 V inputs</td><td>—</td><td>5 V</td><td>5 V</td><td>Board silk: 5 V maximum</td></tr>
    <tr><td>Logic</td><td>Signals</td><td>—</td><td>3.3 V</td><td>—</td><td>Board silk</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: datasheets {#datasheets}

The first page of each important chip&rsquo;s datasheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/serial-to-wifi-board/datasheets/esp32c3mini.pdf"><img src="/images/extensions/serial-to-wifi-board/datasheets/esp32c3mini-page1.png" alt="First page of the ESP32-C3-MINI-1 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/serial-to-wifi-board/datasheets/esp32c3mini.pdf">ESP32-C3-MINI-1 module datasheet</a> — Espressif, 48 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/serial-to-wifi-board/datasheets/tlv62569.pdf"><img src="/images/extensions/serial-to-wifi-board/datasheets/tlv62569-page1.png" alt="First page of the TLV62569 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/serial-to-wifi-board/datasheets/tlv62569.pdf">TLV62569 2 A step-down converter</a> — Texas Instruments, 30 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/serial-to-wifi-board/datasheets/tpd4e1u06.pdf"><img src="/images/extensions/serial-to-wifi-board/datasheets/tpd4e1u06-page1.png" alt="First page of the TPD4E1U06 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/serial-to-wifi-board/datasheets/tpd4e1u06.pdf">TPD4E1U06 quad-channel ESD protection device</a> — Texas Instruments, 27 pages.</figcaption>
</figure>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
