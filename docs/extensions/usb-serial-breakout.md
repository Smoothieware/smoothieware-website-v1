---
layout: default
title: "USB serial breakout"
description: "A USB-B to 3.3 V UART interface on a Gadgeteer U connector, with an FT231XS bridge, activity lights and a chain socket."
permalink: /extensions/usb-serial-breakout
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Signal interfaces</p>
    <h1 id="usb-serial-breakout">USB serial breakout</h1>
    <p class="xb-lead">Connect a computer to a controller serial port with an ordinary USB-B cable. An FT231XS bridge and a level translator sit between USB and the ten-contact UART socket.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/usb-serial-breakout/v15/usb-serial-breakout-diagram.png" alt="Top view of the USB serial breakout.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>USB-B</b><span>to the computer</span></div>
  <div class="xb-stat"><b>3.3 V</b><span>UART</span></div>
  <div class="xb-stat"><b>≤ 3 Mbaud</b><span>8N1</span></div>
  <div class="xb-stat"><b>2 lights</b><span>traffic</span></div>
  <div class="xb-stat"><b>Chain</b><span>second socket</span></div>
  <div class="xb-stat"><b>48 × 38</b><span>millimetres</span></div>
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
  3.3&nbsp;V logic. This is a serial port, not the controller&rsquo;s native USB and not a debug probe. Connect with all power off, and never let two devices transmit toward the controller.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>Serial console from a computer</td></tr>
    <tr><td>Bridge</td><td>FTDI FT231XS-R, <a href="/images/extensions/usb-serial-breakout/datasheets/txu0202.pdf">TXU0202</a> translator</td></tr>
    <tr><td>Host</td><td>J1: transmit from the controller on contact 4, receive on 5</td></tr>
    <tr><td>USB</td><td>J3, USB-B; powers the bridge side only</td></tr>
    <tr><td>Receive source</td><td>JP5: USB bridge (as delivered) or the chain socket</td></tr>
    <tr><td>Chain</td><td>J2; contacts 3, 4 and 6 through links</td></tr>
    <tr><td>Protection</td><td>USBLC6-2SC6 on the USB data lines, ferrite on USB power</td></tr>
    <tr><td>Size</td><td>48 &times; 38&nbsp;mm, four M3 holes</td></tr>
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
      <img src="/images/extensions/usb-serial-breakout/v15/usb-serial-breakout-diagram.png" alt="Top view of the USB serial breakout with numbered markers explained in the list below.">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:30.4%;top:11.6%" aria-label="1: Host socket (J1)">1<span class="xb-pop"><b>Host socket (J1)</b> — to the controller UART.</span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:69.5%;top:11.6%" aria-label="2: Chain socket (J2)">2<span class="xb-pop"><b>Chain socket (J2)</b> — passes rails and linked signals on.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:63.7%;top:58.9%" aria-label="3: USB-B socket (J3)">3<span class="xb-pop"><b>USB-B socket (J3)</b> — to the computer.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:50.0%;top:28.8%" aria-label="4: USB bridge (U1)">4<span class="xb-pop"><b>USB bridge (U1)</b> — FT231XS.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-5" style="left:23.9%;top:38.4%" aria-label="5: Translator (U3)">5<span class="xb-pop"><b>Translator (U3)</b> — separates the two 3.3&nbsp;V domains.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:59.4%;top:49.4%" aria-label="6: USB protection (U2)">6<span class="xb-pop"><b>USB protection (U2)</b> — ESD protection.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:69.5%;top:23.5%" aria-label="7: Receive source (JP5)">7<span class="xb-pop"><b>Receive source (JP5)</b> — bridge or chain.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:26.2%;top:88.1%" aria-label="8: Light D1">8<span class="xb-pop"><b>Light D1</b> — marked U&gt;USB.</span></a>
      <a class="xb-mk" href="#tour-9" style="left:39.8%;top:88.1%" aria-label="9: Light D2">9<span class="xb-pop"><b>Light D2</b> — marked USB&gt;U.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host socket (J1)</b> — to the controller UART.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket (J2)</b> — passes rails and linked signals on.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>USB-B socket (J3)</b> — to the computer.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>USB bridge (U1)</b> — FT231XS.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Translator (U3)</b> — separates the two 3.3&nbsp;V domains.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>USB protection (U2)</b> — ESD protection.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Receive source (JP5)</b> — bridge or chain.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Light D1</b> — marked U&gt;USB.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Light D2</b> — marked USB&gt;U.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

### Lights {#lights}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th>Lit means</th><th>Disable it</th></tr></thead>
  <tbody>
    <tr><td>D1, amber (U&gt;USB)</td><td>Bridge activity output, as programmed in the FT231X</td><td>Cut JP8</td></tr>
    <tr><td>D2, amber (USB&gt;U)</td><td>Bridge activity output, as programmed in the FT231X</td><td>Cut JP7</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Pinout {#pinout}

### J1: host socket

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span>, passed to J2</td></tr>
    <tr><td>3, 6</td><td>Passed to J2 through JP3 and JP6</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">TX</span> from the controller</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">RX</span> to the controller</td></tr>
    <tr><td>7 to 9</td><td>Not connected</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Solder links

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>Effect</th></tr></thead>
  <tbody>
    <tr><td>JP5</td><td>Pads 1&ndash;2 (as delivered): controller receives from USB. Pads 2&ndash;3: from the chain socket. Open one before bridging the other; never both.</td></tr>
    <tr><td>JP3, JP4, JP6</td><td>Pass contact 3, controller transmit and contact 6 to J2</td></tr>
    <tr><td>JP7, JP8</td><td>Cut to disable D2 or D1</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>Plus four leads to the controller.</span></div>
  <div class="xb-card"><b>A USB-B cable</b><span>A data cable, to the computer.</span></div>
  <div class="xb-card"><b>FTDI serial driver</b><span>And a terminal program.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

This opens a command console on Smoothieboard V2 Prime header GB/J33.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 666" role="img" aria-labelledby="xb-usb-serial-breakout-wire"><title id="xb-usb-serial-breakout-wire">Wiring: controller contact 1 to J1 contact 1; controller contact 4 to J1 contact 4; controller contact 5 to J1 contact 5; controller contact 10 to J1 contact 10; USB contact 1 to USB cable.</title><image href="/images/extensions/usb-serial-breakout/v15/usb-serial-breakout-diagram.png" x="357" y="14" width="286" height="230"/><circle cx="444" cy="41" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="425" y="60" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="444" y="74" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J1</text><circle cx="539" cy="149" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="520" y="168" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="539" y="182" text-anchor="middle" font-size="13" font-weight="700" fill="#111">USB</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Prime header GB/J33</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J1 on this board</text><rect x="30" y="304" width="200" height="150" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="130" y="375" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Smoothieboard</text><text x="130" y="395" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">V2 Prime</text><rect x="770" y="304" width="200" height="150" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 334.0H770" fill="none" stroke="#d92d2d" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="334" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="334" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><text x="216" y="339" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">1</text><text x="784" y="339" text-anchor="start" font-size="14" fill="#eaeaea">1  3.3 V</text><rect x="400" y="323" width="200" height="22" rx="11" fill="#d92d2d" stroke="#d92d2d" stroke-width="1.5"/><text x="500" y="339" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1 to 1: 3.3 V</text><path d="M230 364.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">4</text><text x="784" y="369" text-anchor="start" font-size="14" fill="#eaeaea">4  TX from host</text><rect x="400" y="353" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">4 to 4: TX from host</text><path d="M230 394.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">5</text><text x="784" y="399" text-anchor="start" font-size="14" fill="#eaeaea">5  RX to host</text><rect x="400" y="383" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">5 to 5: RX to host</text><path d="M230 424.0H770" fill="none" stroke="#939393" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="424" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="424" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><text x="216" y="429" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">10</text><text x="784" y="429" text-anchor="start" font-size="14" fill="#eaeaea">10  GND</text><rect x="400" y="413" width="200" height="22" rx="11" fill="#939393" stroke="#939393" stroke-width="1.5"/><text x="500" y="429" text-anchor="middle" font-size="13" font-weight="700" fill="#111">10 to 10: GND</text><text x="130" y="486" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">USB on this board</text><text x="870" y="486" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Computer</text><rect x="700" y="498" width="270" height="150" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><rect x="815" y="525" width="130" height="84" rx="8" fill="#262626" stroke="#a1a1a1" stroke-width="1.5"/><rect x="824" y="533" width="112" height="68" rx="3" fill="#12324f" stroke="#12324f" stroke-width="1.5"/><path d="M838 555.0l12 9l-12 9M858 577.0h24" fill="none" stroke="#5df07a" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M805 621.0H955L942 609.0H818Z" fill="#5b5b5b" stroke="#a1a1a1" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/><rect x="30" y="498" width="200" height="150" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 573.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="573" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="573" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="578" text-anchor="end" font-size="14" fill="#eaeaea">  1</text><text x="712" y="578" text-anchor="start" font-size="13" fill="#eaeaea">USB cable</text><rect x="340" y="562" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="578" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1: USB cable</text></svg>
  </div>
  <figcaption>Wiring for this procedure. Yellow rings mark the connectors used. Make and change connections with the power off. Equipment is drawn as a typical unit, not a specific model.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Disconnect everything</h3>
    <p>Including the USB cable: USB powers the bridge even when the controller is off.</p>
  </li>
  <li class="xb-step">
    <h3>Wire four leads</h3>
    <p>J33 contacts 1, 4, 5 and 10 to J1 contacts with the same numbers. No 5&nbsp;V lead. Leave J2 empty and JP5 bridged 1&ndash;2.</p>
  </li>
  <li class="xb-step">
    <h3>Configure</h3>
    <p>Add the settings below.</p>
  </li>
  <li class="xb-step">
    <h3>Connect and test</h3>
    <p>Power the controller, plug in USB, open the serial port at 115200 baud 8N1 with no flow control and type <code>version</code> then Enter.</p>
    <p class="xb-expect">The controller replies with its build information.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>A serial console over USB</td><td>UART console</td><td><a href="#config-main">Setup</a></td></tr>
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

USB data goes to the FT231X, which produces a 3.3&nbsp;V UART from USB power. The <a href="/images/extensions/usb-serial-breakout/datasheets/txu0202.pdf">TXU0202</a> passes each direction between that supply and the controller&rsquo;s 3.3&nbsp;V, with a common ground. USB 5&nbsp;V is not connected to the controller&rsquo;s 5&nbsp;V.

{% include _includes/serial-adapter-board-comparison.html %}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 142" role="img" aria-labelledby="xb-usb-serial-breakout-path"><title id="xb-usb-serial-breakout-path">USB data then FT231X, 3.3 V UART from USB power then TXU0202, both directions then Controller UART.</title><rect x="20" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="127" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">USB data</text><text x="127" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><rect x="268" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="376" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">FT231X</text><text x="376" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3">3.3 V UART from USB power</text><path d="M238.5 70H259.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M258 63L266 70L258 77Z" fill="#5fb3ff"/><rect x="517" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="624" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">TXU0202</text><text x="624" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3">both directions</text><path d="M487.0 70H508.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M506 63L515 70L506 77Z" fill="#5fb3ff"/><rect x="766" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="873" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Controller UART</text><text x="873" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M735.5 70H756.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M754 63L764 70L754 77Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>No serial port on the computer</td><td>Data-capable cable and FTDI driver.</td></tr>
    <tr><td>No reply</td><td>Channel 1, crossed signals, ground, and a line feed at the end of the command.</td></tr>
    <tr><td>Chain device conflicts</td><td>Only one transmitter: check JP5.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/usb-serial-breakout/v15/usb-serial-breakout-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/usb-serial-breakout/v15/usb-serial-breakout-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/usb-serial-breakout/v15/usb-serial-breakout-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-us-mount-t">
  <title id="xb-us-mount-t">Mounting drawing of the us, component side: outline 48 by 38 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="265.3" y="78.0" width="429.5" height="340.0" rx="8.9" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M265.3 56H694.7"/><path d="M265.3 50V62"/><path d="M694.7 50V62"/><path d="M720.7 78.0V418.0"/><path d="M714.7 78.0h12"/><path d="M714.7 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">48</text>
  <text x="732.7" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">38</text>
  <circle cx="265.3" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="253.3" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M207.3 104.0h30" fill="none"/><path d="M241.3 104.0l-8 -4v8z"/><path d="M207.3 104.0v30" fill="none"/><path d="M207.3 138.0l-4 -8h8z"/></g>
  <text x="245.3" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="203.3" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="301.1" cy="158.5" r="14.3" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M282.7 158.5h36.6M301.1 140.2v36.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="286.7" y="192.8" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  4.00, 9.00</text>
  <circle cx="658.9" cy="158.5" r="14.3" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M640.6 158.5h36.6M658.9 140.2v36.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="673.3" y="192.8" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  44.00, 9.00</text>
  <circle cx="301.1" cy="337.5" r="14.3" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M282.7 337.5h36.6M301.1 319.2v36.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="286.7" y="313.2" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">3</tspan>  4.00, 29.00</text>
  <circle cx="658.9" cy="337.5" r="14.3" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M640.6 337.5h36.6M658.9 319.2v36.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="673.3" y="313.2" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">4</tspan>  44.00, 29.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 48 × 38&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>4.00</td><td>9.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>44.00</td><td>9.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>4.00</td><td>29.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>44.00</td><td>29.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Values from the silk screen.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Logic</td><td>J1</td><td>—</td><td>3.3 V</td><td>—</td><td>Board silk</td></tr>
    <tr><td>Baud rate</td><td>FT231X</td><td>—</td><td>—</td><td>3 Mbaud</td><td>Board silk, 8N1</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: datasheets {#datasheets}

The first page of each important chip&rsquo;s datasheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/usb-serial-breakout/datasheets/txu0202.pdf"><img src="/images/extensions/usb-serial-breakout/datasheets/txu0202-page1.png" alt="First page of the TXU0202 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/usb-serial-breakout/datasheets/txu0202.pdf">TXU0202 two-bit fixed-direction level translator</a> — Texas Instruments, 41 pages.</figcaption>
</figure>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
