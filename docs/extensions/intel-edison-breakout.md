---
layout: default
title: "Intel Edison breakout"
description: "A carrier for the Intel Edison module with its own regulator, a translated serial link to a controller and a USB Micro-B port."
permalink: /extensions/intel-edison-breakout
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Host adapters</p>
    <h1 id="intel-edison-breakout">Intel Edison breakout</h1>
    <p class="xb-lead">Carry an Intel Edison module: an on-board regulator makes its supply, a level translator links its serial port to a 3.3&nbsp;V controller, and USB is brought out.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/intel-edison-breakout/v21/intel-edison-breakout-diagram.png" alt="Top view of the Intel Edison breakout.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>5–24 V</b><span>external DC</span></div>
  <div class="xb-stat"><b>3.8 V</b><span>module supply</span></div>
  <div class="xb-stat"><b>UART</b><span>translated to 3.3 V</span></div>
  <div class="xb-stat"><b>USB</b><span>Micro-B</span></div>
  <div class="xb-stat"><b>70-pin</b><span>module connector</span></div>
  <div class="xb-stat"><b>52.5 × 47</b><span>millimetres</span></div>
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
  The Edison module is discontinued by Intel. Check your module&rsquo;s power and sequencing requirements before applying power. Never join the external and host supplies, no hot-plugging, and keep metal and copper away from the antenna end.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>Edison module carrier</td></tr>
    <tr><td>Supply</td><td>J2, 5 to 24&nbsp;V DC, or host 5&nbsp;V; JP1 selects one</td></tr>
    <tr><td>Regulator</td><td><a href="/images/extensions/intel-edison-breakout/datasheets/ap63200.pdf">AP63200</a>, about 3.8&nbsp;V for the module</td></tr>
    <tr><td>Serial</td><td>Module UART1 through an <a href="/images/extensions/intel-edison-breakout/datasheets/sn74axc4t774.pdf">SN74AXC4T774</a> to J1 contacts 4 and 5</td></tr>
    <tr><td>Control</td><td>J1 contact 3 reset output; contact 6 high switches the module off</td></tr>
    <tr><td>USB</td><td>J4 Micro-B with ESD protection; supply detect only</td></tr>
    <tr><td>Module</td><td>Fits J3 with 2.0&nbsp;mm standoffs</td></tr>
    <tr><td>Size</td><td>52.5 &times; 47&nbsp;mm</td></tr>
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
      <img src="/images/extensions/intel-edison-breakout/v21/intel-edison-breakout-diagram.png" alt="Top view of the Intel Edison breakout with numbered markers explained in the list below.">
      <a class="xb-mk xb-pb xb-pr" href="#tour-1" style="left:90.0%;top:25.6%" aria-label="1: Module connector (J3)">1<span class="xb-pop"><b>Module connector (J3)</b> — 70 contacts for the Edison.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-2" style="left:8.9%;top:16.2%" aria-label="2: Controller socket (J1)">2<span class="xb-pop"><b>Controller socket (J1)</b> — serial, reset and power-off.</span></a>
      <a class="xb-mk xb-pl" href="#tour-3" style="left:14.6%;top:73.8%" aria-label="3: External power (J2)">3<span class="xb-pop"><b>External power (J2)</b> — 5 to 24&nbsp;V DC.</span></a>
      <a class="xb-mk xb-pl" href="#tour-4" style="left:7.8%;top:59.0%" aria-label="4: Supply selector (JP1)">4<span class="xb-pop"><b>Supply selector (JP1)</b> — external or host, never both.</span></a>
      <a class="xb-mk xb-pl" href="#tour-5" style="left:17.8%;top:53.4%" aria-label="5: Regulator (U1)">5<span class="xb-pop"><b>Regulator (U1)</b> — AP63200.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:27.0%;top:20.2%" aria-label="6: Level translator (U2)">6<span class="xb-pop"><b>Level translator (U2)</b> — 3.3&nbsp;V to 1.8&nbsp;V.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:39.2%;top:76.7%" aria-label="7: USB socket (J4)">7<span class="xb-pop"><b>USB socket (J4)</b> — Micro-B.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:60.0%;top:75.4%" aria-label="8: Power light (D3)">8<span class="xb-pop"><b>Power light (D3)</b> — green.</span></a>
      <a class="xb-mk xb-pb" href="#tour-9" style="left:24.6%;top:34.9%" aria-label="9: Power-off transistor (Q1)">9<span class="xb-pop"><b>Power-off transistor (Q1)</b> — driven by contact 6.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Module connector (J3)</b> — 70 contacts for the Edison.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Controller socket (J1)</b> — serial, reset and power-off.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>External power (J2)</b> — 5 to 24&nbsp;V DC.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Supply selector (JP1)</b> — external or host, never both.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Regulator (U1)</b> — <a href="/images/extensions/intel-edison-breakout/datasheets/ap63200.pdf">AP63200</a>.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Level translator (U2)</b> — 3.3&nbsp;V to 1.8&nbsp;V.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>USB socket (J4)</b> — Micro-B.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Power light (D3)</b> — green.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Power-off transistor (Q1)</b> — driven by contact 6.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

### Lights {#lights}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th>Lit means</th><th>Disable it</th></tr></thead>
  <tbody>
    <tr><td>D3, green</td><td>Power present</td><td>Cut JP2</td></tr>
    <tr><td>Fault light (back)</td><td>Electronic fuse fault</td><td>Cut SJF1</td></tr>
    <tr><td>Overvoltage light (back)</td><td>Input overvoltage</td><td>Cut SJF2</td></tr>
    <tr><td>Reverse light (back)</td><td>Reverse polarity</td><td>Cut SJF3</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Pinout {#pinout}

### J1: controller socket

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span> (supply only if selected at JP1)</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">Reset</span> output from the module</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">RX</span> into the module</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">TX</span> from the module</td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">Power off</span>: high switches the module off</td></tr>
    <tr><td>7 to 9</td><td>Not connected</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J2: external power

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-5v">5 to 24 V +</span></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>With mounting hardware for the module.</span></div>
  <div class="xb-card"><b>An Intel Edison</b><span>With its software image.</span></div>
  <div class="xb-card"><b>A power supply</b><span>5 to 24 V DC.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

This sets up a serial link between the Edison and Smoothieboard V2 Prime.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 472" role="img" aria-labelledby="xb-intel-edison-breakout-wire"><title id="xb-intel-edison-breakout-wire">Wiring: controller contact 4 to J1 contact 4; controller contact 5 to J1 contact 5; controller contact 10 to J1 contact 10.</title><image href="/images/extensions/intel-edison-breakout/v21/intel-edison-breakout-diagram.png" x="372" y="14" width="256" height="230"/><circle cx="395" cy="51" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="376" y="70" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="395" y="84" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J1</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Prime header GB/J33</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J1 on this board</text><rect x="30" y="304" width="200" height="150" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="130" y="375" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Smoothieboard</text><text x="130" y="395" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">V2 Prime</text><rect x="770" y="304" width="200" height="150" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 349.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="349" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="349" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="354" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">4</text><text x="784" y="354" text-anchor="start" font-size="14" fill="#eaeaea">4  RX to module</text><rect x="400" y="338" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="354" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">4 to 4: RX to module</text><path d="M230 379.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="379" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="379" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="384" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">5</text><text x="784" y="384" text-anchor="start" font-size="14" fill="#eaeaea">5  TX from module</text><rect x="400" y="368" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="384" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">5 to 5: TX from module</text><path d="M230 409.0H770" fill="none" stroke="#939393" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="409" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="409" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><text x="216" y="414" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">10</text><text x="784" y="414" text-anchor="start" font-size="14" fill="#eaeaea">10  GND</text><rect x="400" y="398" width="200" height="22" rx="11" fill="#939393" stroke="#939393" stroke-width="1.5"/><text x="500" y="414" text-anchor="middle" font-size="13" font-weight="700" fill="#111">10 to 10: GND</text></svg>
  </div>
  <figcaption>Wiring for this procedure. Yellow rings mark the connectors used. Make and change connections with the power off.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Fit the module</h3>
    <p>Check J3 orientation and fit the standoffs with power off.</p>
  </li>
  <li class="xb-step">
    <h3>Select the supply</h3>
    <p>Set JP1 to external or host.</p>
  </li>
  <li class="xb-step">
    <h3>Wire the serial link</h3>
    <p>Prime GB/J33 contact 4 to J1 contact 4, contact 5 to contact 5, contact 10 to contact 10.</p>
  </li>
  <li class="xb-step">
    <h3>Configure both ends</h3>
    <p>Add the controller settings below and enable UART1 on the Edison image at 115200 baud, 8N1.</p>
  </li>
  <li class="xb-step">
    <h3>Power and test</h3>
    <p>Send <code>version</code> from the Edison.</p>
    <p class="xb-expect">The controller replies.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>A command host on the Edison</td><td>UART console</td><td><a href="#config-main">Setup</a></td></tr>
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

The regulator turns the selected input into the module supply. The translator runs between the module&rsquo;s 1.8&nbsp;V logic and the controller&rsquo;s 3.3&nbsp;V. The carrier does not run any software for shutdown or reset.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 270" role="img" aria-labelledby="xb-intel-edison-breakout-path"><title id="xb-intel-edison-breakout-path">Selected input then Regulator then Edison module supply. Module 1.8 V serial then Level translator then Controller 3.3 V serial.</title><rect x="46" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="186" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Selected input</text><text x="186" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><rect x="360" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Regulator</text><text x="500" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M330.0 70H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 63L358 70L349 77Z" fill="#5fb3ff"/><rect x="674" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="814" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Edison module supply</text><text x="814" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M644.0 70H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 63L672 70L663 77Z" fill="#5fb3ff"/><rect x="46" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="186" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Module 1.8 V serial</text><text x="186" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><rect x="360" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="500" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Level translator</text><text x="500" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M330.0 198H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 191L358 198L349 205Z" fill="#5fb3ff"/><rect x="674" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="814" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Controller 3.3 V serial</text><text x="814" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M644.0 198H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 191L672 198L663 205Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board, one path per row.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Module does not start</td><td>JP1 selection, supply polarity, power-off input low.</td></tr>
    <tr><td>No serial data</td><td>The module uses UART1, not UART2.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/intel-edison-breakout/v21/intel-edison-breakout-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/intel-edison-breakout/v21/intel-edison-breakout-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/intel-edison-breakout/v21/intel-edison-breakout-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-ie-mount-t">
  <title id="xb-ie-mount-t">Mounting drawing of the ie, component side: outline 52.5 by 47 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="290.1" y="78.0" width="379.8" height="340.0" rx="0.0" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M290.1 56H669.9"/><path d="M290.1 50V62"/><path d="M669.9 50V62"/><path d="M695.9 78.0V418.0"/><path d="M689.9 78.0h12"/><path d="M689.9 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">52.5</text>
  <text x="707.9" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">47</text>
  <circle cx="290.1" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="278.1" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M232.1 104.0h30" fill="none"/><path d="M266.1 104.0l-8 -4v8z"/><path d="M232.1 104.0v30" fill="none"/><path d="M232.1 138.0l-4 -8h8z"/></g>
  <text x="270.1" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="228.1" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="635.2" cy="97.7" r="6.5" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M624.7 97.7h21.0M635.2 87.2v21.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="641.7" y="124.3" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  47.70, 2.73</text>
  <circle cx="452.9" cy="110.6" r="11.6" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M437.3 110.6h31.1M452.9 95.0v31.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="441.3" y="142.1" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  22.50, 4.50</text>
  <circle cx="452.9" cy="255.2" r="11.6" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M437.3 255.2h31.1M452.9 239.7v31.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="441.3" y="233.7" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">3</tspan>  22.50, 24.50</text>
  <circle cx="507.1" cy="367.4" r="6.5" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M496.6 367.4h21.0M507.1 356.9v21.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="513.6" y="350.9" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">4</tspan>  30.00, 40.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 52.5 × 47&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>47.70</td><td>2.73</td><td>1.8&nbsp;mm, not plated</td><td>Mounting</td></tr>
    <tr><td>2</td><td>22.50</td><td>4.50</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>22.50</td><td>24.50</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>30.00</td><td>40.00</td><td>1.8&nbsp;mm, not plated</td><td>Mounting</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Values from the silk screen.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>External supply</td><td>J2</td><td>5 V</td><td>—</td><td>24 V</td><td>Board silk</td></tr>
    <tr><td>Module supply</td><td>VSYS</td><td>—</td><td>3.8 V</td><td>—</td><td>Board silk</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: datasheets {#datasheets}

The first page of each important chip&rsquo;s datasheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/intel-edison-breakout/datasheets/ap63200.pdf"><img src="/images/extensions/intel-edison-breakout/datasheets/ap63200-page1.png" alt="First page of the AP63200 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/intel-edison-breakout/datasheets/ap63200.pdf">AP63200 family buck converter datasheet</a> — Diodes Incorporated, 18 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/intel-edison-breakout/datasheets/sn74axc4t774.pdf"><img src="/images/extensions/intel-edison-breakout/datasheets/sn74axc4t774-page1.png" alt="First page of the SN74AXC4T774 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/intel-edison-breakout/datasheets/sn74axc4t774.pdf">SN74AXC4T774 four-bit translating transceiver</a> — Texas Instruments, 43 pages.</figcaption>
</figure>
{:/nomarkdown}


See all boards on the [extension boards](/extension-boards) page.
