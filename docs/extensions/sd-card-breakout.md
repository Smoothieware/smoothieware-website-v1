---
layout: default
title: "SD card breakout"
description: "A microSD socket on a Gadgeteer SPI connector, with card detect, an output buffer and a configurable chain socket."
permalink: /extensions/sd-card-breakout
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Storage</p>
    <h1 id="sd-card-breakout">SD card breakout</h1>
    <p class="xb-lead">A removable microSD socket on an SPI bus, with a card-detect signal, a light that shows when the card is selected, and a second socket for the next SPI device.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/sd-card-breakout/v21/sd-card-breakout-diagram.webp" alt="Top view of the SD card breakout.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>microSD</b><span>one socket</span></div>
  <div class="xb-stat"><b>SPI</b><span>interface</span></div>
  <div class="xb-stat"><b>≤ 10 MHz</b><span>clock</span></div>
  <div class="xb-stat"><b>3.3 V</b><span>only</span></div>
  <div class="xb-stat"><b>Chain</b><span>next device</span></div>
  <div class="xb-stat"><b>33.7 × 31</b><span>millimetres</span></div>
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
  3.3&nbsp;V only. Keep the SPI clock at 10&nbsp;MHz or less and the cable at 150&nbsp;mm or less, and do not remove a card while it is being written. Smoothieware does not provide a second storage volume over SPI: this board does not replace or add to the controller&rsquo;s own SD card.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>microSD card on an SPI bus</td></tr>
    <tr><td>Socket</td><td>Hirose DM3AT-SF-PEJM5, microSD only</td></tr>
    <tr><td>Host</td><td>J1: card detect on 3, chip select on 6, MOSI 7, MISO 8, clock 9</td></tr>
    <tr><td>Card detect</td><td>Open with no card, closed to ground with a card; 10&nbsp;k&Omega; pull-up, 1&nbsp;k&Omega; series</td></tr>
    <tr><td>Data output</td><td>Buffered by an <a href="/images/extensions/sd-card-breakout/datasheets/sn74lvc1g125.pdf">SN74LVC1G125</a>, released while the card is not selected</td></tr>
    <tr><td>Card supply</td><td>3.3&nbsp;V through a 1&nbsp;&Omega; resistor</td></tr>
    <tr><td>Chain</td><td>J2, with its own chip select or a shared one (JP6)</td></tr>
    <tr><td>Size</td><td>33.7 &times; 31&nbsp;mm, two M3 holes</td></tr>
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
      <img src="/images/extensions/sd-card-breakout/v21/sd-card-breakout-diagram.webp" alt="Top view of the SD card breakout with numbered markers explained in the list below.">
      <a class="xb-mk xb-pl" href="#tour-1" style="left:14.1%;top:72.0%" aria-label="1: Host socket (J1)">1<span class="xb-pop"><b>Host socket (J1)</b> — connects to the controller SPI bus.</span></a>
      <a class="xb-mk" href="#tour-2" style="left:49.9%;top:69.6%" aria-label="2: Card socket (J3)">2<span class="xb-pop"><b>Card socket (J3)</b> — takes a microSD card.</span></a>
      <a class="xb-mk xb-pr" href="#tour-3" style="left:85.8%;top:72.0%" aria-label="3: Chain socket (J2)">3<span class="xb-pop"><b>Chain socket (J2)</b> — for the next SPI device.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:34.8%;top:30.2%" aria-label="4: Output buffer (U1)">4<span class="xb-pop"><b>Output buffer (U1)</b> — returns card data on MISO only while the card is selected.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:49.9%;top:27.2%" aria-label="5: Protection (U2)">5<span class="xb-pop"><b>Protection (U2)</b> — ESD protection on the signals.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:57.5%;top:16.9%" aria-label="6: Select light (D1)">6<span class="xb-pop"><b>Select light (D1)</b> — lit while chip select is low.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-7" style="left:16.6%;top:42.0%" aria-label="7: Chip-select link (JP6)">7<span class="xb-pop"><b>Chip-select link (JP6)</b> — chooses what the next device uses as chip select.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-8" style="left:14.1%;top:31.4%" aria-label="8: Shift link (JP4)">8<span class="xb-pop"><b>Shift link (JP4)</b> — passes host contact 4 to chain contact 5.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-9" style="left:89.1%;top:41.7%" aria-label="9: Chain bus links">9<span class="xb-pop"><b>Chain bus links</b> — JP7, JP8 and JP9 pass MOSI, MISO and clock on.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host socket (J1)</b> — connects to the controller SPI bus.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Card socket (J3)</b> — takes a microSD card.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Chain socket (J2)</b> — for the next SPI device.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Output buffer (U1)</b> — returns card data on MISO only while the card is selected.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Protection (U2)</b> — ESD protection on the signals.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Select light (D1)</b> — lit while chip select is low.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Chip-select link (JP6)</b> — chooses what the next device uses as chip select.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Shift link (JP4)</b> — passes host contact 4 to chain contact 5.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Chain bus links</b> — JP7, JP8 and JP9 pass MOSI, MISO and clock on.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

### Lights {#lights}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th>Lit means</th><th>Disable it</th></tr></thead>
  <tbody>
    <tr><td>D1, yellow</td><td>Card selected (chip select low)</td><td>Cut JP10</td></tr>
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
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span>, passed to J2 only</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">Card detect</span></td></tr>
    <tr><td>4, 5</td><td>Chip selects passed along the chain</td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">CS</span> for this card</td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-sig">MOSI</span></td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">MISO</span></td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">SCK</span></td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J2: chain socket

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1, 2</td><td><span class="xb-pill xb-p-3v3">3.3 V</span> and <span class="xb-pill xb-p-5v">5 V</span></td></tr>
    <tr><td>3, 4</td><td>Not connected</td></tr>
    <tr><td>5</td><td>Host contact 4, through JP4</td></tr>
    <tr><td>6</td><td>Next chip select, through JP6</td></tr>
    <tr><td>7 to 9</td><td>MOSI, MISO, SCK</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### JP6

As delivered, pads 1 and 2 are bridged: host contact 5 becomes the next device&rsquo;s chip select. To make the next device share this card&rsquo;s chip select, open 1&ndash;2 first, then bridge 2&ndash;3. Never bridge both. Devices that must respond independently cannot share a chip select.

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>And a short ten-way cable or leads.</span></div>
  <div class="xb-card"><b>A microSD card</b><span>Compatible with SPI mode.</span></div>
  <div class="xb-card"><b>Host software</b><span>Firmware that can read a card over SPI.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

This wires the socket to SPI1 on Smoothieboard V2 Prime header GE/J36.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 562" role="img" aria-labelledby="xb-sd-card-breakout-wire"><title id="xb-sd-card-breakout-wire">Wiring: controller contact 1 to J1 contact 1; controller contact 3 to J1 contact 3; controller contact 6 to J1 contact 6; controller contact 7 to J1 contact 7; controller contact 8 to J1 contact 8; controller contact 9 to J1 contact 9; controller contact 10 to J1 contact 10.</title><image href="/images/extensions/sd-card-breakout/v21/sd-card-breakout-diagram.webp" x="376" y="14" width="249" height="230"/><circle cx="411" cy="180" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="392" y="199" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="411" y="213" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J1</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Prime header GE/J36</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J1 on this board</text><rect x="30" y="304" width="200" height="240" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="130" y="420" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Smoothieboard</text><text x="130" y="440" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">V2 Prime</text><rect x="770" y="304" width="200" height="240" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 334.0H770" fill="none" stroke="#d92d2d" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="334" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="334" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><text x="216" y="339" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">1</text><text x="784" y="339" text-anchor="start" font-size="14" fill="#eaeaea">1  3.3 V</text><rect x="400" y="323" width="200" height="22" rx="11" fill="#d92d2d" stroke="#d92d2d" stroke-width="1.5"/><text x="500" y="339" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1 to 1: 3.3 V</text><path d="M230 364.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">3</text><text x="784" y="369" text-anchor="start" font-size="14" fill="#eaeaea">3  Card detect</text><rect x="400" y="353" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">3 to 3: Card detect</text><path d="M230 394.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">6</text><text x="784" y="399" text-anchor="start" font-size="14" fill="#eaeaea">6  CS for this card</text><rect x="400" y="383" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">6 to 6: CS for this card</text><path d="M230 424.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="429" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">7</text><text x="784" y="429" text-anchor="start" font-size="14" fill="#eaeaea">7  MOSI</text><rect x="400" y="413" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="429" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">7 to 7: MOSI</text><path d="M230 454.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="454" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="454" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="459" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">8</text><text x="784" y="459" text-anchor="start" font-size="14" fill="#eaeaea">8  MISO</text><rect x="400" y="443" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="459" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">8 to 8: MISO</text><path d="M230 484.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="484" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="484" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="489" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">9</text><text x="784" y="489" text-anchor="start" font-size="14" fill="#eaeaea">9  SCK</text><rect x="400" y="473" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="489" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">9 to 9: SCK</text><path d="M230 514.0H770" fill="none" stroke="#939393" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="514" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="514" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><text x="216" y="519" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">10</text><text x="784" y="519" text-anchor="start" font-size="14" fill="#eaeaea">10  GND</text><rect x="400" y="503" width="200" height="22" rx="11" fill="#939393" stroke="#939393" stroke-width="1.5"/><text x="500" y="519" text-anchor="middle" font-size="13" font-weight="700" fill="#111">10 to 10: GND</text></svg>
  </div>
  <figcaption>Leave contacts 2, 4 and 5 unconnected. Keep JP6 bridged 1–2 and J2 empty.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Disconnect power</h3>
    <p>Reserve the bus and pins for this board in your whole machine.</p>
  </li>
  <li class="xb-step">
    <h3>Wire seven leads</h3>
    <p>J36 contacts 1, 3, 6, 7, 8, 9 and 10 to J1 contacts with the same numbers. Contact 3 is PE8 (card detect), 6 is PD15 (chip select), 7 to 9 are SPI1. Leave contacts 2, 4 and 5 unconnected.</p>
  </li>
  <li class="xb-step">
    <h3>Check the links</h3>
    <p>Keep JP6 bridged 1&ndash;2 and leave J2 empty.</p>
  </li>
  <li class="xb-step">
    <h3>Insert a card and power up</h3>
    <p>Check the 3.3&nbsp;V supply budget for your card.</p>
    <p class="xb-expect">The select light shows activity once software addresses the card.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Read a card on this board</td><td>No Smoothieware module</td><td><a href="#config-main">Setup</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Setup {#config-main}

There is no Smoothieware setting for this board. [SmoothieV2](https://github.com/Smoothieware/SmoothieV2/tree/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src) reads storage through the controller&rsquo;s own SDIO card and has no configurable second SPI volume.

## How it works {#how-it-works}

Chip select, MOSI and clock go straight to the card. Card data returns through U1, whose output enable follows chip select, so the line is free for other devices when this card is not selected. This does not make hot removal safe.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 270" role="img" aria-labelledby="xb-sd-card-breakout-path"><title id="xb-sd-card-breakout-path">Chip select, MOSI, clock then Straight to the card. Card data then U1, enabled by chip select then MISO, free when not selected.</title><rect x="203" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="343" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Chip select, MOSI, clock</text><text x="343" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><rect x="517" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="657" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Straight to the card</text><text x="657" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M487.0 70H508.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M506 63L515 70L506 77Z" fill="#5fb3ff"/><rect x="46" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="186" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Card data</text><text x="186" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><rect x="360" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="500" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">U1</text><text x="500" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3">enabled by chip select</text><path d="M330.0 198H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 191L358 198L349 205Z" fill="#5fb3ff"/><rect x="674" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="814" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">MISO, free when not selected</text><text x="814" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M644.0 198H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 191L672 198L663 205Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board, one path per row.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>No card detected</td><td>Contact 3 should read low with a card inserted.</td></tr>
    <tr><td>Bus conflicts</td><td>Check JP6: never both positions bridged.</td></tr>
    <tr><td>Read errors</td><td>Lower the clock and shorten the cable.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/sd-card-breakout/v21/sd-card-breakout-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/sd-card-breakout/v21/sd-card-breakout-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/sd-card-breakout/v21/sd-card-breakout-diagram.webp">Board drawing (WebP)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-sd-mount-t">
  <title id="xb-sd-mount-t">Mounting drawing of the sd, component side: outline 33.7 by 31 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="295.2" y="78.0" width="369.6" height="340.0" rx="11.0" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M295.2 56H664.8"/><path d="M295.2 50V62"/><path d="M664.8 50V62"/><path d="M690.8 78.0V418.0"/><path d="M684.8 78.0h12"/><path d="M684.8 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">33.7</text>
  <text x="702.8" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">31</text>
  <circle cx="295.2" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="283.2" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M237.2 104.0h30" fill="none"/><path d="M271.2 104.0l-8 -4v8z"/><path d="M237.2 104.0v30" fill="none"/><path d="M237.2 138.0l-4 -8h8z"/></g>
  <text x="275.2" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="233.2" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="370.3" cy="118.6" r="17.5" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M348.8 118.6h43.1M370.3 97.0v43.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="352.8" y="156.1" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  6.85, 3.70</text>
  <circle cx="589.7" cy="118.6" r="17.5" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M568.1 118.6h43.1M589.7 97.0v43.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="607.2" y="156.1" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  26.85, 3.70</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 33.7 × 31&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>6.85</td><td>3.70</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>26.85</td><td>3.70</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Limits for the board.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>SPI clock</td><td>J1</td><td>—</td><td>—</td><td>10 MHz</td><td>Board limit</td></tr>
    <tr><td>Cable length</td><td>J1</td><td>—</td><td>—</td><td>150 mm</td><td>Board limit</td></tr>
    <tr><td>Supply</td><td>Card</td><td>—</td><td>3.3 V</td><td>—</td><td>Through 1 Ω</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: datasheets {#datasheets}

The first page of each important chip&rsquo;s datasheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/sd-card-breakout/datasheets/sn74lvc1g125.pdf"><img src="/images/extensions/sd-card-breakout/datasheets/sn74lvc1g125-page1.png" alt="First page of the SN74LVC1G125 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/sd-card-breakout/datasheets/sn74lvc1g125.pdf">SN74LVC1G125 single bus buffer gate with 3-state output</a> — Texas Instruments, 52 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/sd-card-breakout/datasheets/tpd4e1u06.pdf"><img src="/images/extensions/sd-card-breakout/datasheets/tpd4e1u06-page1.png" alt="First page of the TPD4E1U06 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/sd-card-breakout/datasheets/tpd4e1u06.pdf">TPD4E1U06 quad-channel ESD protection device</a> — Texas Instruments, 27 pages.</figcaption>
</figure>
{:/nomarkdown}


See all boards on the [extension boards](/extension-boards) page.
