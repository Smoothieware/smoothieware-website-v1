---
layout: default
title: "GLCD breakout"
description: "Adapter between two controller ports and the RepRapDiscount Full Graphic Smart Controller: gated display signals, SD buffer, encoder, buttons and buzzer."
permalink: /extensions/glcd-breakout
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Displays and panels</p>
    <h1 id="glcd-breakout">GLCD breakout</h1>
    <p class="xb-lead">Connect a RepRapDiscount Full Graphic Smart Controller to two controller ports: display signals through a gate, a buffered SD card return, and the encoder, buttons and buzzer on their own pins.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/glcd-breakout/v15/glcd-breakout-diagram.webp" alt="Top view of the GLCD breakout.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>ST7920</b><span>graphic panel</span></div>
  <div class="xb-stat"><b>2 ports</b><span>S and Y</span></div>
  <div class="xb-stat"><b>EXP1+2</b><span>panel headers</span></div>
  <div class="xb-stat"><b>2 links</b><span>display source</span></div>
  <div class="xb-stat"><b>5 V</b><span>panel supply</span></div>
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
  Made for the original RepRapDiscount panel only (<a href="https://reprap.org/mediawiki/images/5/51/RRD_FULL_GRAPHIC_SMART_CONTROLER_SCHEMATIC.pdf">schematic of 2013-04-16</a>). Similar-looking panels can have different EXP pinouts. Never swap EXP1 and EXP2, do not hot-plug, and note that the panel&rsquo;s 5&nbsp;V supply has no fuse. The stop button is not an emergency stop.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>Controller ports to a graphic panel</td></tr>
    <tr><td>Host sockets</td><td>J1 (S IN): display and SD; J2 (Y IN): controls. 2 &times; 5 at 1.27&nbsp;mm</td></tr>
    <tr><td>Panel headers</td><td>J3 EXP1 and J4 EXP2, 2 &times; 5 at 2.54&nbsp;mm</td></tr>
    <tr><td>Display gate</td><td><a href="/images/extensions/glcd-breakout/datasheets/sn74ahct08.pdf">SN74AHCT08</a>, switched by the display enable signal (pulled up: enabled by default)</td></tr>
    <tr><td>Display source</td><td>JP1 clock and JP2 data: separate pins (1 to 2) or shared SPI (2 to 3)</td></tr>
    <tr><td>SD return</td><td><a href="/images/extensions/glcd-breakout/datasheets/sn74lvc1g125.pdf">SN74LVC1G125</a>, driven only while the SD card is selected</td></tr>
    <tr><td>Panel supply</td><td>5&nbsp;V passed to EXP1 pin 10, unfused</td></tr>
    <tr><td>Size</td><td>48 &times; 38&nbsp;mm, two M3 mounting holes</td></tr>
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
      <img src="/images/extensions/glcd-breakout/v15/glcd-breakout-diagram.webp" alt="Top view of the GLCD breakout with numbered markers explained in the list below.">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:31.9%;top:13.2%" aria-label="1: Display and SD socket (S IN)">1<span class="xb-pop"><b>Display and SD socket (S IN)</b> — to the controller&rsquo;s S-type port.</span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:68.0%;top:13.2%" aria-label="2: Controls socket (Y IN)">2<span class="xb-pop"><b>Controls socket (Y IN)</b> — encoder, buttons, buzzer, card detect.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-3" style="left:13.9%;top:32.4%" aria-label="3: Clock source (JP1)">3<span class="xb-pop"><b>Clock source (JP1)</b> — separate pin or SPI clock; never bridge all three pads.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-4" style="left:13.9%;top:42.9%" aria-label="4: Data source (JP2)">4<span class="xb-pop"><b>Data source (JP2)</b> — separate pin or SPI data.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:31.9%;top:37.9%" aria-label="5: Display gate (U1)">5<span class="xb-pop"><b>Display gate (U1)</b> — passes clock, data and select only while enabled.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:56.0%;top:58.7%" aria-label="6: SD buffer (U2)">6<span class="xb-pop"><b>SD buffer (U2)</b> — returns card data.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:71.5%;top:63.4%" aria-label="7: ESD array (U3)">7<span class="xb-pop"><b>ESD array (U3)</b> — protects the encoder and stop lines.</span></a>
      <a class="xb-mk xb-pl" href="#tour-8" style="left:17.4%;top:84.9%" aria-label="8: EXP1">8<span class="xb-pop"><b>EXP1</b> — buzzer, encoder button and display.</span></a>
      <a class="xb-mk" href="#tour-9" style="left:62.2%;top:84.9%" aria-label="9: EXP2">9<span class="xb-pop"><b>EXP2</b> — encoder, SD card and stop button.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Display and SD socket (S IN)</b> — to the controller&rsquo;s S-type port.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Controls socket (Y IN)</b> — encoder, buttons, buzzer, card detect.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Clock source (JP1)</b> — separate pin or SPI clock; never bridge all three pads.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Data source (JP2)</b> — separate pin or SPI data.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Display gate (U1)</b> — passes clock, data and select only while enabled.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>SD buffer (U2)</b> — returns card data.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>ESD array (U3)</b> — protects the encoder and stop lines.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>EXP1</b> — buzzer, encoder button and display.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>EXP2</b> — encoder, SD card and stop button.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1 (S IN)

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">display data</span>, separate pin</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">display clock</span>, separate pin</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">display enable</span></td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">SD select</span>, low active</td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-sig">SPI MOSI</span></td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">SPI MISO</span></td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">SPI clock</span></td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J2 (Y IN)

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">encoder A</span></td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">encoder B</span></td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">buzzer</span></td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">encoder button</span></td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-sig">stop button</span></td></tr>
    <tr><td>8</td><td>not connected</td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">SD detect</span></td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Panel headers

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Pin</th><th>J3 EXP1</th><th>J4 EXP2</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>beeper</td><td>card MISO</td></tr>
    <tr><td>2</td><td>encoder button</td><td>card clock</td></tr>
    <tr><td>3</td><td>display data</td><td>BTN_EN2 (panel name)</td></tr>
    <tr><td>4</td><td>display select</td><td>card select</td></tr>
    <tr><td>5</td><td>display clock</td><td>BTN_EN1 (panel name)</td></tr>
    <tr><td>6</td><td>not connected</td><td>card MOSI</td></tr>
    <tr><td>7</td><td>not connected</td><td>card detect</td></tr>
    <tr><td>8</td><td>not connected</td><td>stop (labelled RESET on the panel)</td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>STOP, not ground</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>Built from the design files in Downloads</span></div>
  <div class="xb-card"><b>The original panel</b><span>RepRapDiscount Full Graphic Smart Controller with both 10-wire ribbons.</span></div>
  <div class="xb-card"><b>Two 10-wire cables</b><span>1.27&nbsp;mm at both ends, to the controller.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

This connects the panel to Smoothieboard V2 Prime headers G_E (J36, to S IN) and G_F (J37, to Y IN) and checks the stop button.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 906" role="img" aria-labelledby="xb-glcd-breakout-wire"><title id="xb-glcd-breakout-wire">Wiring: controller contact 1 to J1 contact 1; controller contact 3 to J1 contact 3; controller contact 4 to J1 contact 4; controller contact 5 to J1 contact 5; controller contact 6 to J1 contact 6; controller contact 7 to J1 contact 7; controller contact 8 to J1 contact 8; controller contact 9 to J1 contact 9; controller contact 10 to J1 contact 10; controller contact 3 to J2 contact 3; controller contact 4 to J2 contact 4; controller contact 5 to J2 contact 5; controller contact 6 to J2 contact 6; controller contact 7 to J2 contact 7; controller contact 9 to J2 contact 9; controller contact 10 to J2 contact 10.</title><image href="/images/extensions/glcd-breakout/v15/glcd-breakout-diagram.webp" x="356" y="14" width="288" height="230"/><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Prime header G_E/J36</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J1 on this board</text><rect x="30" y="304" width="200" height="300" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="130" y="450" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Smoothieboard</text><text x="130" y="470" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">V2 Prime</text><rect x="770" y="304" width="200" height="300" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 334.0H770" fill="none" stroke="#d92d2d" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="334" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="334" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><text x="216" y="339" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">1</text><text x="784" y="339" text-anchor="start" font-size="14" fill="#eaeaea">1  3.3 V</text><rect x="400" y="323" width="200" height="22" rx="11" fill="#d92d2d" stroke="#d92d2d" stroke-width="1.5"/><text x="500" y="339" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1 to 1: 3.3 V</text><path d="M230 364.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">3</text><text x="784" y="369" text-anchor="start" font-size="14" fill="#eaeaea">3  display data</text><rect x="400" y="353" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">3 to 3: display data</text><path d="M230 394.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">4</text><text x="784" y="399" text-anchor="start" font-size="14" fill="#eaeaea">4  display clock</text><rect x="400" y="383" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">4 to 4: display clock</text><path d="M230 424.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="429" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">5</text><text x="784" y="429" text-anchor="start" font-size="14" fill="#eaeaea">5  display enable</text><rect x="400" y="413" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="429" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">5 to 5: display enable</text><path d="M230 454.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="454" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="454" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="459" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">6</text><text x="784" y="459" text-anchor="start" font-size="14" fill="#eaeaea">6  SD select</text><rect x="400" y="443" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="459" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">6 to 6: SD select</text><path d="M230 484.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="484" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="484" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="489" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">7</text><text x="784" y="489" text-anchor="start" font-size="14" fill="#eaeaea">7  SPI MOSI</text><rect x="400" y="473" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="489" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">7 to 7: SPI MOSI</text><path d="M230 514.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="514" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="514" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="519" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">8</text><text x="784" y="519" text-anchor="start" font-size="14" fill="#eaeaea">8  SPI MISO</text><rect x="400" y="503" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="519" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">8 to 8: SPI MISO</text><path d="M230 544.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="544" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="544" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="549" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">9</text><text x="784" y="549" text-anchor="start" font-size="14" fill="#eaeaea">9  SPI clock</text><rect x="400" y="533" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="549" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">9 to 9: SPI clock</text><path d="M230 574.0H770" fill="none" stroke="#939393" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="574" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="574" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><text x="216" y="579" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">10</text><text x="784" y="579" text-anchor="start" font-size="14" fill="#eaeaea">10  GND</text><rect x="400" y="563" width="200" height="22" rx="11" fill="#939393" stroke="#939393" stroke-width="1.5"/><text x="500" y="579" text-anchor="middle" font-size="13" font-weight="700" fill="#111">10 to 10: GND</text><text x="130" y="636" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Prime header G_F/J37</text><text x="870" y="636" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J2 on this board</text><rect x="30" y="648" width="200" height="240" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="130" y="764" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Smoothieboard</text><text x="130" y="784" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">V2 Prime</text><rect x="770" y="648" width="200" height="240" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 678.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="678" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="678" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="683" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">3</text><text x="784" y="683" text-anchor="start" font-size="14" fill="#eaeaea">3  encoder A</text><rect x="400" y="667" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="683" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">3 to 3: encoder A</text><path d="M230 708.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="708" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="708" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="713" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">4</text><text x="784" y="713" text-anchor="start" font-size="14" fill="#eaeaea">4  encoder B</text><rect x="400" y="697" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="713" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">4 to 4: encoder B</text><path d="M230 738.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="738" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="738" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="743" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">5</text><text x="784" y="743" text-anchor="start" font-size="14" fill="#eaeaea">5  buzzer</text><rect x="400" y="727" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="743" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">5 to 5: buzzer</text><path d="M230 768.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="768" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="768" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="773" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">6</text><text x="784" y="773" text-anchor="start" font-size="14" fill="#eaeaea">6  encoder button</text><rect x="400" y="757" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="773" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">6 to 6: encoder button</text><path d="M230 798.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="798" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="798" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="803" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">7</text><text x="784" y="803" text-anchor="start" font-size="14" fill="#eaeaea">7  stop button</text><rect x="400" y="787" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="803" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">7 to 7: stop button</text><path d="M230 828.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="828" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="828" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="833" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">9</text><text x="784" y="833" text-anchor="start" font-size="14" fill="#eaeaea">9  SD detect</text><rect x="400" y="817" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="833" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">9 to 9: SD detect</text><path d="M230 858.0H770" fill="none" stroke="#939393" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="858" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="858" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><text x="216" y="863" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">10</text><text x="784" y="863" text-anchor="start" font-size="14" fill="#eaeaea">10  GND</text><rect x="400" y="847" width="200" height="22" rx="11" fill="#939393" stroke="#939393" stroke-width="1.5"/><text x="500" y="863" text-anchor="middle" font-size="13" font-weight="700" fill="#111">10 to 10: GND</text></svg>
  </div>
  <figcaption>Set JP1 and JP2 to pads 1 to 2 first. Connect contact for contact with power off.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Power off and check the panel</h3>
    <p>Confirm it matches the schematic above. Reserve both headers in your configuration.</p>
  </li>
  <li class="xb-step">
    <h3>Set the links</h3>
    <p>For separate display pins, JP1 and JP2 each bridge 1 to 2 only.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the cables</h3>
    <p>G_E to S IN, G_F to Y IN, contact for contact; EXP1 to EXP1, EXP2 to EXP2. Check every contact with a meter.</p>
  </li>
  <li class="xb-step">
    <h3>Configure</h3>
    <p>Add the settings below.</p>
  </li>
  <li class="xb-step">
    <h3>Test the stop button</h3>
    <p>Power up and press the panel&rsquo;s stop button.</p>
    <p class="xb-expect">The controller halts.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>The stop button</td><td>Button box</td><td><a href="#config-stop">1</a></td></tr>
    <tr><td>The encoder button</td><td>Button box</td><td><a href="#config-press">2</a></td></tr>
    <tr><td>The buzzer</td><td>Switch, output</td><td><a href="#config-buzz">3</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### 1. Stop button (button box) {#config-stop}

Y IN contact 7 is PJ3.

```ini
[button box]
panel_stop.enable = true
panel_stop.pin = PJ3!^
panel_stop.press = KILL
```

### 2. Encoder button (button box) {#config-press}

Y IN contact 6 is PG0. Replace the command with what the press should do.

```ini
[button box]
panel_press.enable = true
panel_press.pin = PG0!^
panel_press.press = echo encoder pressed
```

### 3. Buzzer (switch module) {#config-buzz}

Y IN contact 5 is PA4.

```ini
[switch]
panel_beeper.enable = true
panel_beeper.output_pin = PA4
panel_beeper.output_type = digital
panel_beeper.input_on_command = M42
panel_beeper.input_off_command = M43
panel_beeper.subcode = 2
panel_beeper.startup_state = false
panel_beeper.halt_set_to = false
```

<code>M42.2</code> drives the buzzer line high and <code>M43.2</code> low.

The graphic display itself is not covered by these settings: showing a screen needs firmware that starts the ST7920 display and holds display enable, and no verified configuration for that is published here. That is why there are three examples.

## How it works {#how-it-works}

Display clock, data and select pass through AND gates that stay closed unless display enable is high, so shared SPI traffic cannot disturb the panel. The card&rsquo;s return data goes through a buffer that releases the bus when the card is not selected. Encoder, buttons and buzzer are wired to the Y socket through resistors with ESD protection.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 398" role="img" aria-labelledby="xb-glcd-breakout-path"><title id="xb-glcd-breakout-path">Display clock, data, select then AND gates, closed unless display enable is high then LCD panel. SD card return data then Buffer, releases the bus when not selected then Controller. Encoder, buttons, buzzer then Resistors with ESD protection then Y socket.</title><rect x="46" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="186" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Display clock, data, select</text><text x="186" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><rect x="360" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">AND gates</text><text x="500" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3">closed unless display enable is high</text><path d="M330.0 70H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 63L358 70L349 77Z" fill="#5fb3ff"/><rect x="674" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="814" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">LCD panel</text><text x="814" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M644.0 70H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 63L672 70L663 77Z" fill="#5fb3ff"/><rect x="46" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="186" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">SD card return data</text><text x="186" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><rect x="360" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="500" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Buffer</text><text x="500" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3">releases the bus when not selected</text><path d="M330.0 198H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 191L358 198L349 205Z" fill="#5fb3ff"/><rect x="674" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="814" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Controller</text><text x="814" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M644.0 198H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 191L672 198L663 205Z" fill="#5fb3ff"/><rect x="46" y="270" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="186" y="321" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Encoder, buttons, buzzer</text><text x="186" y="341" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><rect x="360" y="270" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="500" y="321" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Resistors with ESD protection</text><text x="500" y="341" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M330.0 326H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 319L358 326L349 333Z" fill="#5fb3ff"/><rect x="674" y="270" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="814" y="321" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Y socket</text><text x="814" y="341" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M644.0 326H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 319L672 326L663 333Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board, one path per row.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Blank display</td><td>Exact panel model, link positions, display firmware and enable signal.</td></tr>
    <tr><td>Encoder turns backwards</td><td>The panel and the board name the two encoder signals in opposite order; swap them in the configuration, not in the cable.</td></tr>
    <tr><td>Stop button does nothing</td><td>Cable contact 7 and pin PJ3.</td></tr>
    <tr><td>SD card disturbs other SPI devices</td><td>Check the select line; leave the slot empty if your firmware does not handle it.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/glcd-breakout/v15/glcd-breakout-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/glcd-breakout/v15/glcd-breakout-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/glcd-breakout/v15/glcd-breakout-diagram.webp">Board drawing (WebP)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-gl-mount-t">
  <title id="xb-gl-mount-t">Mounting drawing of the gl, component side: outline 48 by 38 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
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
  <circle cx="301.1" cy="113.8" r="14.3" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M282.7 113.8h36.6M301.1 95.5v36.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="286.7" y="148.1" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  4.00, 4.00</text>
  <circle cx="658.9" cy="113.8" r="14.3" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M640.6 113.8h36.6M658.9 95.5v36.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="673.3" y="148.1" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  44.00, 4.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 48 × 38&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>4.00</td><td>4.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>44.00</td><td>4.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Values from the parts list and design.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Panel supply</td><td>EXP1 pin 10</td><td>—</td><td>5 V</td><td>—</td><td>Unfused, from the controller</td></tr>
    <tr><td>Panel current</td><td>EXP1 pin 10</td><td>—</td><td>—</td><td>Open</td><td>Check the panel against your controller&rsquo;s 5 V budget</td></tr>
    <tr><td>Display signal level</td><td>EXP1</td><td>—</td><td>5 V</td><td>—</td><td>AHCT gates powered from 5 V</td></tr>
    <tr><td>Controller signals</td><td>J1, J2</td><td>—</td><td>3.3 V</td><td>—</td><td>Controller logic level</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: datasheets {#datasheets}

The first page of each important chip&rsquo;s datasheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/glcd-breakout/datasheets/sn74ahct08.pdf"><img src="/images/extensions/glcd-breakout/datasheets/sn74ahct08-page1.png" alt="First page of the SN74AHCT08 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/glcd-breakout/datasheets/sn74ahct08.pdf">SN74AHCT08 quadruple 2-input AND gates</a> — Texas Instruments, 41 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/glcd-breakout/datasheets/sn74lvc1g125.pdf"><img src="/images/extensions/glcd-breakout/datasheets/sn74lvc1g125-page1.png" alt="First page of the SN74LVC1G125 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/glcd-breakout/datasheets/sn74lvc1g125.pdf">SN74LVC1G125 single bus buffer with 3-state output</a> — Texas Instruments, 52 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/glcd-breakout/datasheets/tpd4e1u06.pdf"><img src="/images/extensions/glcd-breakout/datasheets/tpd4e1u06-page1.png" alt="First page of the TPD4E1U06 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/glcd-breakout/datasheets/tpd4e1u06.pdf">TPD4E1U06 four-channel ESD protection array</a> — Texas Instruments, 27 pages.</figcaption>
</figure>
{:/nomarkdown}

Originally designed by triffid.hunter and logxen.

See all boards on the [extension boards](/extension-boards) page.
