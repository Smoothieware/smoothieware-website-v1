---
layout: default
title: "Universal panel adapter"
description: "An ATmega328P board that drives a character LCD panel with encoder and buzzer and talks to the controller over SPI."
permalink: /extensions/universal-panel-adapter
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Displays and panels</p>
    <h1 id="universal-panel-adapter">Universal panel adapter</h1>
    <p class="xb-lead">Drive an older character LCD panel from one SPI port: the adapter&rsquo;s own microcontroller runs the display, encoder and buzzer and reports back to the controller.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/universal-panel-adapter/v20/universal-panel-adapter-diagram.png" alt="Top view of the Universal panel adapter.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>ATmega328P</b><span>on board</span></div>
  <div class="xb-stat"><b>16 MHz</b><span>clock</span></div>
  <div class="xb-stat"><b>SPI</b><span>to the controller</span></div>
  <div class="xb-stat"><b>1 panel</b><span>at a time</span></div>
  <div class="xb-stat"><b>5 V</b><span>panel supply input</span></div>
  <div class="xb-stat"><b>100 × 64.6</b><span>millimetres</span></div>
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
  Smoothieware V2 has no driver for this adapter. Its protocol is supported by Smoothieware V1; the adapter&rsquo;s microcontroller must be programmed before use. Connect one panel only, feed only 5&nbsp;V into J7, and do not hot-plug.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>SPI-connected controller for character LCD panels</td></tr>
    <tr><td>Panel connectors</td><td>J4 and J5 (EXP1, EXP2 of a RepRapDiscount 2004 panel), J3 (1 &times; 16 character LCD), J6 (encoder, buzzer, I&sup2;C)</td></tr>
    <tr><td>Controller sockets</td><td>J1 (S HOST) and J2 (S CHAIN)</td></tr>
    <tr><td>Microcontroller</td><td>ATmega328P with 16&nbsp;MHz resonator; programming header J8 (no programmer on board)</td></tr>
    <tr><td>Panel supply</td><td>JP1: external J7 (as delivered) or logic 5&nbsp;V; J7 protected by a <a href="/images/extensions/universal-panel-adapter/datasheets/tps2660.pdf">TPS2660</a>0 eFuse</td></tr>
    <tr><td>Link limits</td><td>SPI mode 0, up to 1&nbsp;MHz, cable up to 150&nbsp;mm (board printing)</td></tr>
    <tr><td>Size</td><td>100 &times; 64.6&nbsp;mm, four M3 mounting holes</td></tr>
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
      <img src="/images/extensions/universal-panel-adapter/v20/universal-panel-adapter-diagram.png" alt="Top view of the Universal panel adapter with numbered markers explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:5.5%;top:29.2%" aria-label="1: Controller socket (S HOST)">1<span class="xb-pop"><b>Controller socket (S HOST)</b> — SPI, busy and stop lines.</span></a>
      <a class="xb-mk xb-pl" href="#tour-2" style="left:5.5%;top:65.2%" aria-label="2: Chain socket (S CHAIN)">2<span class="xb-pop"><b>Chain socket (S CHAIN)</b> — passes SPI to another board.</span></a>
      <a class="xb-mk xb-pb" href="#tour-3" style="left:57.8%;top:45.7%" aria-label="3: Microcontroller (U1)">3<span class="xb-pop"><b>Microcontroller (U1)</b> — runs the panel.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:47.0%;top:62.2%" aria-label="4: Programming header (J8)">4<span class="xb-pop"><b>Programming header (J8)</b> — for an external AVR programmer.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:26.4%;top:5.8%" aria-label="5: Character LCD header (J3)">5<span class="xb-pop"><b>Character LCD header (J3)</b> — 1 &times; 16.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:31.4%;top:16.6%" aria-label="6: Contrast (RV1)">6<span class="xb-pop"><b>Contrast (RV1)</b> — adjusts the character LCD.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:30.4%;top:88.8%" aria-label="7: EXP1">7<span class="xb-pop"><b>EXP1</b> — display and buzzer of a smart-controller panel.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:52.9%;top:88.8%" aria-label="8: EXP2">8<span class="xb-pop"><b>EXP2</b> — encoder and stop button.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-9" style="left:94.6%;top:17.9%" aria-label="9: Encoder and I&sup2;C header (J6)">9<span class="xb-pop"><b>Encoder and I&sup2;C header (J6)</b> —</span></a>
      <a class="xb-mk xb-pr" href="#tour-10" style="left:93.5%;top:68.2%" aria-label="10: 5 V panel input (J7)">10<span class="xb-pop"><b>5 V panel input (J7)</b> — red +, black &minus;.</span></a>
      <a class="xb-mk" href="#tour-11" style="left:71.1%;top:60.7%" aria-label="11: Panel supply link (JP1)">11<span class="xb-pop"><b>Panel supply link (JP1)</b> — external or logic 5&nbsp;V.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Controller socket (S HOST)</b> — SPI, busy and stop lines.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket (S CHAIN)</b> — passes SPI to another board.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Microcontroller (U1)</b> — runs the panel.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Programming header (J8)</b> — for an external AVR programmer.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Character LCD header (J3)</b> — 1 &times; 16.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Contrast (RV1)</b> — adjusts the character LCD.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>EXP1</b> — display and buzzer of a smart-controller panel.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>EXP2</b> — encoder and stop button.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Encoder and I&sup2;C header (J6)</b> — </div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>5 V panel input (J7)</b> — red +, black &minus;.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Panel supply link (JP1)</b> — external or logic 5&nbsp;V.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

### Lights {#lights}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th>Lit means</th><th>Disable it</th></tr></thead>
  <tbody>
    <tr><td>D3, green</td><td>5&nbsp;V logic supply present</td><td>JP13</td></tr>
    <tr><td>D4, green</td><td>5&nbsp;V panel supply present</td><td>JP12</td></tr>
    <tr><td>Underside, three</td><td>Input protection reports a fault, over-voltage or reversed input</td><td>Cut link SJF1 (fault), SJF2 (over-voltage), SJF3 (reverse)</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Pinout {#pinout}

### J1 (S HOST)

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span>, up to 100&nbsp;mA used by this board</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">busy</span>, to controller</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">stop button</span>, to controller</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">chain select</span></td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">select</span></td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-sig">SPI MOSI</span></td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">SPI MISO</span></td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">SPI clock</span></td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

On J2 contacts 3 to 5 are not connected, and contact 6 carries J1 contact 5.

### Panel connectors

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Connector</th><th>Contacts</th></tr></thead>
  <tbody>
    <tr><td>J4 EXP1</td><td>1 buzzer, 2 encoder button, 3 E, 4 RS, 5 to 8 D4 to D7, 9 GND, 10 panel 5&nbsp;V</td></tr>
    <tr><td>J5 EXP2</td><td>3 encoder B, 5 encoder A, 8 stop, 9 GND; the rest not connected (no SD card)</td></tr>
    <tr><td>J3 LCD</td><td>1 GND, 2 panel 5&nbsp;V, 3 contrast, 4 RS, 5 RW, 6 E, 11 to 14 D4 to D7, 15 and 16 backlight (links JP4, JP5)</td></tr>
    <tr><td>J6</td><td>1 panel 5&nbsp;V, 2 GND, 3 encoder A, 4 encoder B, 5 button, 6 SDA, 7 SCL, 8 buzzer</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>Built from the design files in Downloads</span></div>
  <div class="xb-card"><b>One panel</b><span>A RepRapDiscount 2004 style panel, or a character LCD with encoder.</span></div>
  <div class="xb-card"><b>An AVR programmer</b><span>To load the adapter firmware.</span></div>
  <div class="xb-card"><b>A ten-wire cable</b><span>Both ends 2 &times; 5 contacts at 1.27&nbsp;mm pitch, wired 1 to 1. A 2.54&nbsp;mm jumper plug does not fit. The Prime header has no keyed housing, so check contact 1 at both ends.</span></div>
  <div class="xb-card"><b>A 5 V supply</b><span>For the panel, unless you power it from the logic rail.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

This brings up the adapter with Smoothieware V1.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 532" role="img" aria-labelledby="xb-universal-panel-adapter-wire"><title id="xb-universal-panel-adapter-wire">Wiring: controller contact busy to J1 contact 3; controller contact select to J1 contact 6; controller contact MOSI to J1 contact 7; controller contact MISO to J1 contact 8; controller contact SCK to J1 contact 9; controller contact ground to J1 contact 10.</title><image href="/images/extensions/universal-panel-adapter/v20/universal-panel-adapter-diagram.png" x="324" y="14" width="352" height="230"/><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Host wires</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J1 on this board</text><image href="/images/extensions/universal-panel-adapter/v20/universal-panel-adapter-diagram.png" x="324" y="14" width="352" height="230"/><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Host wires</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J1 on this board</text><rect x="30" y="304" width="200" height="210" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><rect x="770" y="304" width="200" height="210" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 334.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="334" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="334" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="339" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">busy</text><text x="784" y="339" text-anchor="start" font-size="14" fill="#e6ebf2">3  busy</text><rect x="400" y="323" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="339" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">busy to 3: busy</text><path d="M230 364.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">select</text><text x="784" y="369" text-anchor="start" font-size="14" fill="#e6ebf2">6  select</text><rect x="400" y="353" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">select to 6: select</text><path d="M230 394.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">MOSI</text><text x="784" y="399" text-anchor="start" font-size="14" fill="#e6ebf2">7  MOSI</text><rect x="400" y="383" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">MOSI to 7: MOSI</text><path d="M230 424.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="429" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">MISO</text><text x="784" y="429" text-anchor="start" font-size="14" fill="#e6ebf2">8  MISO</text><rect x="400" y="413" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="429" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">MISO to 8: MISO</text><path d="M230 454.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="454" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="454" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="459" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">SCK</text><text x="784" y="459" text-anchor="start" font-size="14" fill="#e6ebf2">9  SCK</text><rect x="400" y="443" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="459" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">SCK to 9: SCK</text><path d="M230 484.0H770" fill="none" stroke="#8b949e" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="484" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="484" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><text x="216" y="489" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">ground</text><text x="784" y="489" text-anchor="start" font-size="14" fill="#e6ebf2">10  ground</text><rect x="400" y="473" width="200" height="22" rx="11" fill="#8b949e" stroke="#8b949e" stroke-width="1.5"/><text x="500" y="489" text-anchor="middle" font-size="13" font-weight="700" fill="#111">ground to 10: ground</text></svg>
  </div>
  <figcaption>Contact 5 is the chain select. Wire 5 V to J7 as the steps describe.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Program the adapter</h3>
    <p>Build or take the image from the <a href="https://github.com/wolfmanjm/universal-panel-adapter/tree/9068926646c89f1375ade245dfcc130d9c19db90">original firmware project</a>: parallel_panel_adapter.hex for a parallel LCD, viki_panel_adapter.hex for Viki or Panelolu2. Set the clock fuses for a 16&nbsp;MHz resonator and flash through J8.</p>
  </li>
  <li class="xb-step">
    <h3>Set the supply</h3>
    <p>Leave JP1 on 1 to 2 and wire 5&nbsp;V to J7, or move it to 2 to 3 to use the logic rail.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the panel</h3>
    <p>One panel only; check contact 1 on both ribbons.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the controller</h3>
    <p>Wire J1 contacts 5 to 10 and the busy line to your controller&rsquo;s SPI port and two free pins.</p>
  </li>
  <li class="xb-step">
    <h3>Configure and test</h3>
    <p>Add the settings below.</p>
    <p class="xb-expect">The panel shows the controller&rsquo;s menu.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>The panel on Smoothieware V1</td><td>Panel</td><td><a href="#config-v1">1</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### 1. Smoothieware V1 panel {#config-v1}

Replace the three pins with the ones you wired.

```ini
panel.enable                  true
panel.lcd                     universal_adapter
panel.spi_channel             0
panel.spi_cs_pin              0.16
panel.busy_pin                1.31
panel.spi_frequency           500000
```

Sources: the V1 [adapter driver](https://github.com/Smoothieware/Smoothieware/blob/38e2cc083db0e4f768535a9bf2d32cdf104ea980/src/modules/utils/panel/panels/UniversalAdapter.cpp) and [panel module](https://github.com/Smoothieware/Smoothieware/blob/38e2cc083db0e4f768535a9bf2d32cdf104ea980/src/modules/utils/panel/Panel.cpp). Smoothieware V2 has no <code>display.type</code> for this adapter, so there is no V2 example.

## How it works {#how-it-works}

The controller sends display commands over SPI and polls for button and encoder events; the busy line tells it to wait. Buffers translate between the controller&rsquo;s 3.3&nbsp;V and the adapter&rsquo;s 5&nbsp;V, and release the return line when the adapter is not selected. The panel supply input passes an eFuse that blocks reversed and over-voltage and lights a fault light on the underside.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 270" role="img" aria-labelledby="xb-universal-panel-adapter-path"><title id="xb-universal-panel-adapter-path">Controller SPI and busy line then Buffers, 3.3 V to 5 V then Adapter microcontroller then One panel. Panel supply input then eFuse, blocks reversed and over-voltage then Panel.</title><rect x="20" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="127" y="56" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Controller SPI and busy</text><text x="127" y="74" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">line</text><text x="127" y="94" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="268" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="376" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Buffers</text><text x="376" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2">3.3 V to 5 V</text><path d="M238.5 70H259.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M258 63L266 70L258 77Z" fill="#5fb3ff"/><rect x="517" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="624" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Adapter microcontroller</text><text x="624" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M487.0 70H508.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M506 63L515 70L506 77Z" fill="#5fb3ff"/><rect x="766" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="873" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">One panel</text><text x="873" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M735.5 70H756.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M754 63L764 70L754 77Z" fill="#5fb3ff"/><rect x="46" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="186" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Panel supply input</text><text x="186" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="360" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="500" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">eFuse</text><text x="500" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2">blocks reversed and over-voltage</text><path d="M330.0 198H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 191L358 198L349 205Z" fill="#5fb3ff"/><rect x="674" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="814" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Panel</text><text x="814" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M644.0 198H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 191L672 198L663 205Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board, one path per row.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Blank display</td><td>Adapter firmware, contrast, panel supply and JP1.</td></tr>
    <tr><td>Controller waits forever</td><td>Busy line wiring and the busy pin setting.</td></tr>
    <tr><td>Fault light on the underside</td><td>Voltage or polarity at J7, or panel current.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/universal-panel-adapter/v20/universal-panel-adapter-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/universal-panel-adapter/v20/universal-panel-adapter-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/universal-panel-adapter/v20/universal-panel-adapter-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-up-mount-t">
  <title id="xb-up-mount-t">Mounting drawing of the up, component side: outline 100 by 64.6 millimetres with 4 mounting holes and 2 cable-tie holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="216.8" y="78.0" width="526.3" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M216.8 56H743.2"/><path d="M216.8 50V62"/><path d="M743.2 50V62"/><path d="M769.2 78.0V418.0"/><path d="M763.2 78.0h12"/><path d="M763.2 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">100</text>
  <text x="781.2" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">64.6</text>
  <circle cx="216.8" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="204.8" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M158.8 104.0h30" fill="none"/><path d="M192.8 104.0l-8 -4v8z"/><path d="M158.8 104.0v30" fill="none"/><path d="M158.8 138.0l-4 -8h8z"/></g>
  <text x="196.8" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="154.8" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="295.8" cy="130.6" r="8.4" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M283.4 130.6h24.8M295.8 118.2v24.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="287.4" y="159.1" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  15.00, 10.00</text>
  <circle cx="611.6" cy="130.6" r="8.4" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M599.2 130.6h24.8M611.6 118.2v24.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="620.0" y="159.1" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  75.00, 10.00</text>
  <circle cx="295.8" cy="341.2" r="8.4" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M283.4 341.2h24.8M295.8 328.7v24.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="287.4" y="322.7" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  15.00, 50.00</text>
  <circle cx="611.6" cy="341.2" r="8.4" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M599.2 341.2h24.8M611.6 328.7v24.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="620.0" y="322.7" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  75.00, 50.00</text>
  <circle cx="232.6" cy="93.8" r="6.6" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <circle cx="258.9" cy="93.8" r="6.6" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <text x="273.5" y="97.8" text-anchor="start" font-size="12" fill="#a9b4c2">cable tie</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 100 × 64.6&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>15.00</td><td>10.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>75.00</td><td>10.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>15.00</td><td>50.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>75.00</td><td>50.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>–</td><td>3.00</td><td>3.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
    <tr><td>–</td><td>8.00</td><td>3.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Values from the board printing and parts list.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Panel supply input</td><td>J7</td><td>—</td><td>5 V</td><td>—</td><td>Board silk: 5 V only</td></tr>
    <tr><td>Controller 5 V used</td><td>J1 pin 2</td><td>—</td><td>—</td><td>100 mA</td><td>Board silk</td></tr>
    <tr><td>SPI clock</td><td>J1</td><td>—</td><td>500 kHz</td><td>1 MHz</td><td>Board silk maximum; V1 default</td></tr>
    <tr><td>Cable length</td><td>J1</td><td>—</td><td>—</td><td>150 mm</td><td>Board silk</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: datasheets {#datasheets}

The first page of each important chip&rsquo;s datasheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/universal-panel-adapter/datasheets/sn74ahct125.pdf"><img src="/images/extensions/universal-panel-adapter/datasheets/sn74ahct125-page1.png" alt="First page of the SN74AHCT125 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/universal-panel-adapter/datasheets/sn74ahct125.pdf">SN74AHCT125 quadruple bus buffers</a> — Texas Instruments, 41 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/universal-panel-adapter/datasheets/sn74lvc125a.pdf"><img src="/images/extensions/universal-panel-adapter/datasheets/sn74lvc125a-page1.png" alt="First page of the SN74LVC125A datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/universal-panel-adapter/datasheets/sn74lvc125a.pdf">SN74LVC125A quadruple bus buffer</a> — Texas Instruments, 37 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/universal-panel-adapter/datasheets/tps2660.pdf"><img src="/images/extensions/universal-panel-adapter/datasheets/tps2660-page1.png" alt="First page of the TPS2660 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/universal-panel-adapter/datasheets/tps2660.pdf">TPS2660 industrial eFuse with reverse-input protection</a> — Texas Instruments, 55 pages.</figcaption>
</figure>
{:/nomarkdown}

The adapter design and firmware originate from wolfmanjm&rsquo;s <a href="https://github.com/wolfmanjm/universal-panel-adapter/tree/9068926646c89f1375ade245dfcc130d9c19db90">universal panel adapter</a>.

See all boards on the [extension boards](/extension-boards) page.
