---
layout: default
title: "Cheap UART adapter breakout"
description: "A carrier that joins a low-cost six-pin USB serial module to a controller UART through two level translators."
permalink: /extensions/cheap-uart-adapter-breakout
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Signal interfaces</p>
    <h1 id="cheap-uart-adapter-breakout">Cheap UART adapter breakout</h1>
    <p class="xb-lead">Turn an inexpensive six-pin USB serial module into a controller console. Two translators match the module&rsquo;s logic voltage to the controller, one in each direction.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/cheap-uart-adapter-breakout/v14/cheap-uart-adapter-breakout-diagram.webp" alt="Top view of the adapter: a ten-contact host socket at the left and a six-pin module connector at the right.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>2 paths</b><span>TX and RX, translated</span></div>
  <div class="xb-stat"><b>3.3 V</b><span>controller side</span></div>
  <div class="xb-stat"><b>Module VCC</b><span>sets the other side</span></div>
  <div class="xb-stat"><b>6 pins</b><span>GND CTS VCC TXO RXI DTR</span></div>
  <div class="xb-stat"><b>No 5 V</b><span>taken from the controller</span></div>
  <div class="xb-stat"><b>32 × 27.5</b><span>millimetres</span></div>
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
  Plug the module in with its power off, component side as the silk shows: a reversed module is wrong. Check its pin order against the table; similar-looking modules differ.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>USB serial console through a plug-in module</td></tr>
    <tr><td>Translators</td><td>Two <a href="/images/extensions/cheap-uart-adapter-breakout/datasheets/sn74lvc1t45.pdf">SN74LVC1T45</a> with fixed directions</td></tr>
    <tr><td>Host</td><td>J1: 3.3&nbsp;V, transmit (4), receive (5), ground</td></tr>
    <tr><td>Module</td><td>J2, six pins: ground, CTS, VCC, TXO, RXI, DTR</td></tr>
    <tr><td>Module-side supply</td><td>Taken from the module&rsquo;s VCC pin; the board does not power the module</td></tr>
    <tr><td>Not connected</td><td>CTS, DTR and host 5&nbsp;V</td></tr>
    <tr><td>Protection</td><td><a href="/images/extensions/cheap-uart-adapter-breakout/datasheets/tpd4e1u06.pdf">TPD4E1U06</a> arrays on both sides</td></tr>
    <tr><td>Size</td><td>32 &times; 27.5&nbsp;mm, two M3 holes</td></tr>
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
      <img src="/images/extensions/cheap-uart-adapter-breakout/v14/cheap-uart-adapter-breakout-diagram.webp" alt="Top view of the adapter with numbered markers explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:15.4%;top:40.4%" aria-label="1: Host socket (J1)">1<span class="xb-pop"><b>Host socket (J1)</b> — connects to a controller UART socket.</span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:55.7%;top:18.9%" aria-label="2: Module connector (J2)">2<span class="xb-pop"><b>Module connector (J2)</b> — the six module pins.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:35.1%;top:60.1%" aria-label="3: Transmit translator (U2)">3<span class="xb-pop"><b>Transmit translator (U2)</b> — controller to module.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:35.1%;top:40.4%" aria-label="4: Receive translator (U1)">4<span class="xb-pop"><b>Receive translator (U1)</b> — module to controller.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:45.1%;top:59.4%" aria-label="5: Series resistors">5<span class="xb-pop"><b>Series resistors</b> — R1 and R2, 100&nbsp;&Omega;.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:31.2%;top:70.6%" aria-label="6: Resistors">6<span class="xb-pop"><b>Resistors</b> — R3 and R4, 10&nbsp;k&Omega;.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:31.2%;top:31.3%" aria-label="7: Supply capacitors">7<span class="xb-pop"><b>Supply capacitors</b> — C1 to C4, 100&nbsp;nF.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-8" style="left:11.5%;top:6.5%" aria-label="8: Mounting holes">8<span class="xb-pop"><b>Mounting holes</b> — two M3 holes.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host socket (J1)</b> — connects to a controller UART socket.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Module connector (J2)</b> — the six module pins.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Transmit translator (U2)</b> — controller to module.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Receive translator (U1)</b> — module to controller.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Series resistors</b> — R1 and R2, 100&nbsp;&Omega;.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Resistors</b> — R3 and R4, 10&nbsp;k&Omega;.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Supply capacitors</b> — C1 to C4, 100&nbsp;nF.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Mounting holes</b> — two M3 holes.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J2: module

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>2</td><td>CTS, not connected</td></tr>
    <tr><td>3</td><td>VCC from the module</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">TXO</span> module transmit</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">RXI</span> module receive</td></tr>
    <tr><td>6</td><td>DTR, not connected</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J1: host

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">TX</span> from the controller</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">RX</span> to the controller</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>2, 3, 6 to 9</td><td>Not connected</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>Built from the design files in Downloads</span></div>
  <div class="xb-card"><b>A USB serial module</b><span>Six pins in the order above, 3.3&nbsp;V logic. The example uses the SparkFun FTDI Basic 3.3 V (DEV-09873).</span></div>
  <div class="xb-card"><b>A ribbon and a USB cable</b><span>Ten-core ribbon to the controller.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

This example uses the Smoothieboard V2 Prime and the SparkFun module.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 846" role="img" aria-labelledby="xb-cheap-uart-adapter-breakout-wire"><title id="xb-cheap-uart-adapter-breakout-wire">Wiring: controller contact 1 to J1 contact 1; controller contact 2 to J1 contact 2; controller contact 3 to J1 contact 3; controller contact 4 to J1 contact 4; controller contact 5 to J1 contact 5; controller contact 6 to J1 contact 6; controller contact 7 to J1 contact 7; controller contact 8 to J1 contact 8; controller contact 9 to J1 contact 9; controller contact 10 to J1 contact 10; J2 contact 1 to GND; J2 contact 3 to VCC; J2 contact 4 to TXO; J2 contact 5 to RXI.</title><image href="/images/extensions/cheap-uart-adapter-breakout/v14/cheap-uart-adapter-breakout-diagram.webp" x="367" y="14" width="265" height="230"/><circle cx="408" cy="107" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="389" y="126" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="408" y="140" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J1</text><circle cx="515" cy="57" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="496" y="76" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="515" y="90" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J2</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Prime header GB/J33</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J1 on this board</text><rect x="30" y="304" width="200" height="330" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="130" y="465" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Smoothieboard</text><text x="130" y="485" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">V2 Prime</text><rect x="770" y="304" width="200" height="330" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 334.0H770" fill="none" stroke="#d92d2d" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="334" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="334" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><text x="216" y="339" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">1</text><text x="784" y="339" text-anchor="start" font-size="14" fill="#eaeaea">1  3.3 V</text><rect x="400" y="323" width="200" height="22" rx="11" fill="#d92d2d" stroke="#d92d2d" stroke-width="1.5"/><text x="500" y="339" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1 to 1: 3.3 V</text><path d="M230 364.0H770" fill="none" stroke="#e8820c" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="364" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">2</text><text x="784" y="369" text-anchor="start" font-size="14" fill="#eaeaea">2  5 V</text><rect x="400" y="353" width="200" height="22" rx="11" fill="#e8820c" stroke="#e8820c" stroke-width="1.5"/><text x="500" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#111">2 to 2: 5 V</text><path d="M230 394.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">3</text><text x="784" y="399" text-anchor="start" font-size="14" fill="#eaeaea">3  </text><rect x="400" y="383" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">3 to 3</text><path d="M230 424.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="429" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">4</text><text x="784" y="429" text-anchor="start" font-size="14" fill="#eaeaea">4  TX from host</text><rect x="400" y="413" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="429" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">4 to 4: TX from host</text><path d="M230 454.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="454" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="454" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="459" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">5</text><text x="784" y="459" text-anchor="start" font-size="14" fill="#eaeaea">5  RX to host</text><rect x="400" y="443" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="459" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">5 to 5: RX to host</text><path d="M230 484.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="484" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="484" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="489" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">6</text><text x="784" y="489" text-anchor="start" font-size="14" fill="#eaeaea">6  </text><rect x="400" y="473" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="489" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">6 to 6</text><path d="M230 514.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="514" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="514" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="519" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">7</text><text x="784" y="519" text-anchor="start" font-size="14" fill="#eaeaea">7  </text><rect x="400" y="503" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="519" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">7 to 7</text><path d="M230 544.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="544" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="544" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="549" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">8</text><text x="784" y="549" text-anchor="start" font-size="14" fill="#eaeaea">8  </text><rect x="400" y="533" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="549" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">8 to 8</text><path d="M230 574.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="574" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="574" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="579" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">9</text><text x="784" y="579" text-anchor="start" font-size="14" fill="#eaeaea">9  </text><rect x="400" y="563" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="579" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">9 to 9</text><path d="M230 604.0H770" fill="none" stroke="#939393" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="604" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="604" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><text x="216" y="609" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">10</text><text x="784" y="609" text-anchor="start" font-size="14" fill="#eaeaea">10  GND</text><rect x="400" y="593" width="200" height="22" rx="11" fill="#939393" stroke="#939393" stroke-width="1.5"/><text x="500" y="609" text-anchor="middle" font-size="13" font-weight="700" fill="#111">10 to 10: GND</text><text x="130" y="666" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J2 on this board</text><text x="870" y="666" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">SparkFun DEV-09873</text><rect x="700" y="678" width="270" height="150" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><rect x="815" y="703" width="130" height="100" rx="8" fill="#20365c" stroke="#7fa6e0" stroke-width="1.5"/><rect x="858" y="733" width="44" height="40" rx="3" fill="#171717" stroke="#939393" stroke-width="1.5"/><circle cx="828" cy="719" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="736" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="753" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="770" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="787" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="930" cy="717" r="6" fill="#0d0f12" stroke="#c9c9c9" stroke-width="1.5"/><circle cx="930" cy="789" r="6" fill="#0d0f12" stroke="#c9c9c9" stroke-width="1.5"/><rect x="908" y="747" width="18" height="10" rx="1" fill="#c9a66b" stroke="#c9a66b" stroke-width="1.5"/><rect x="30" y="678" width="200" height="150" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 708.0H700" fill="none" stroke="#939393" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="708" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="708" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><text x="216" y="713" text-anchor="end" font-size="14" fill="#eaeaea">  1</text><text x="712" y="713" text-anchor="start" font-size="13" fill="#eaeaea">GND</text><rect x="340" y="697" width="220" height="22" rx="11" fill="#939393" stroke="#939393" stroke-width="1.5"/><text x="450" y="713" text-anchor="middle" font-size="13" font-weight="700" fill="#111">1: GND</text><path d="M230 738.0H700" fill="none" stroke="#f2d024" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="738" r="5" fill="#f2d024" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="738" r="5" fill="#f2d024" stroke="#fff" stroke-width="1.5"/><text x="216" y="743" text-anchor="end" font-size="14" fill="#eaeaea">VCC from module  3</text><text x="712" y="743" text-anchor="start" font-size="13" fill="#eaeaea">VCC</text><rect x="340" y="727" width="220" height="22" rx="11" fill="#f2d024" stroke="#f2d024" stroke-width="1.5"/><text x="450" y="743" text-anchor="middle" font-size="13" font-weight="700" fill="#111">3: VCC</text><path d="M230 768.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="768" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="768" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="773" text-anchor="end" font-size="14" fill="#eaeaea">TXO module…  4</text><text x="712" y="773" text-anchor="start" font-size="13" fill="#eaeaea">TXO</text><rect x="340" y="757" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="773" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">4: TXO</text><path d="M230 798.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="798" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="798" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="803" text-anchor="end" font-size="14" fill="#eaeaea">RXI module receive  5</text><text x="712" y="803" text-anchor="start" font-size="13" fill="#eaeaea">RXI</text><rect x="340" y="787" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="803" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">5: RXI</text></svg>
  </div>
  <figcaption>Wiring for this procedure. Yellow rings mark the connectors used. Make and change connections with the power off. Equipment is drawn as a typical unit, not a specific model.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Check the module voltage</h3>
    <p>On the DEV-09873, solder jumper SJ2 must bridge 2&ndash;3 (3.3&nbsp;V from the module), not 5&nbsp;V.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the ribbon with the power off</h3>
    <p>Prime GB/J33 to J1, contact for contact. Verify pin 1 at both ends.</p>
  </li>
  <li class="xb-step">
    <h3>Plug in the module</h3>
    <p>Module ground, VCC, TXO and RXI to J2 contacts 1, 3, 4 and 5.</p>
  </li>
  <li class="xb-step">
    <h3>Configure, connect USB and test</h3>
    <p>Add the configuration below, restart, then send <code>version</code> followed by Enter.</p>
    <p class="xb-expect">The controller replies with its build information.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>A command console on a serial port</td><td>UART console</td><td><a href="#config-main">Setup</a></td></tr>
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

Each <a href="/images/extensions/cheap-uart-adapter-breakout/datasheets/sn74lvc1t45.pdf">SN74LVC1T45</a> has one supply from the controller&rsquo;s 3.3&nbsp;V and the other from the module&rsquo;s VCC pin, so the two logic voltages stay separate. Grounds are common: the board gives no isolation.

{% include _includes/serial-adapter-board-comparison.html %}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 270" role="img" aria-labelledby="xb-cheap-uart-adapter-breakout-path"><title id="xb-cheap-uart-adapter-breakout-path">Controller UART, 3.3 V supply then SN74LVC1T45 pair, module side powered by VCC then USB serial module, its own logic voltage. Grounds are common, no isolation.</title><rect x="46" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="186" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Controller UART</text><text x="186" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3">3.3 V supply</text><rect x="360" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">SN74LVC1T45 pair</text><text x="500" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3">module side powered by VCC</text><path d="M330.0 70H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 63L358 70L349 77Z" fill="#5fb3ff"/><rect x="674" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="814" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">USB serial module</text><text x="814" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3">its own logic voltage</text><path d="M644.0 70H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 63L672 70L663 77Z" fill="#5fb3ff"/><rect x="360" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="500" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Grounds are common</text><text x="500" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3">no isolation</text></svg>
  </div>
  <figcaption>How the signals pass through this board, one path per row.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>No reply</td><td>Module VCC present, pin order, channel number and line ending.</td></tr>
    <tr><td>Garbled text</td><td>Match 115200 baud, 8N1 on both sides.</td></tr>
    <tr><td>Module not seen by the computer</td><td>USB cable and driver: the carrier takes no part in USB.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/cheap-uart-adapter-breakout/v14/cheap-uart-adapter-breakout-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/cheap-uart-adapter-breakout/v14/cheap-uart-adapter-breakout-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/cheap-uart-adapter-breakout/v14/cheap-uart-adapter-breakout-diagram.webp">Board drawing (WebP)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-cu-mount-t">
  <title id="xb-cu-mount-t">Mounting drawing of the cu, component side: outline 32 by 27.5 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="282.2" y="78.0" width="395.6" height="340.0" rx="0.0" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M282.2 56H677.8"/><path d="M282.2 50V62"/><path d="M677.8 50V62"/><path d="M703.8 78.0V418.0"/><path d="M697.8 78.0h12"/><path d="M697.8 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">32</text>
  <text x="715.8" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">27.5</text>
  <circle cx="282.2" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="270.2" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M224.2 104.0h30" fill="none"/><path d="M258.2 104.0l-8 -4v8z"/><path d="M224.2 104.0v30" fill="none"/><path d="M224.2 138.0l-4 -8h8z"/></g>
  <text x="262.2" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="220.2" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="319.3" cy="102.7" r="19.8" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M295.5 102.7h47.6M319.3 78.9v47.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="299.5" y="142.5" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  3.00, 2.00</text>
  <circle cx="319.3" cy="350.0" r="19.8" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M295.5 350.0h47.6M319.3 326.2v47.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="299.5" y="320.2" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  3.00, 22.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 32 × 27.5&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>3.00</td><td>2.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>3.00</td><td>22.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Chip values come from the datasheet.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Controller-side supply</td><td>J1 contact 1</td><td>—</td><td>3.3 V</td><td>—</td><td>Design</td></tr>
    <tr><td>Module-side supply range</td><td><a href="/images/extensions/cheap-uart-adapter-breakout/datasheets/sn74lvc1t45.pdf">SN74LVC1T45</a></td><td>1.65 V</td><td>—</td><td>5.5 V</td><td>Datasheet</td></tr>
    <tr><td>Series resistance</td><td>Signal paths</td><td>—</td><td>100 Ω</td><td>—</td><td>Parts list</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: datasheets {#datasheets}

The first page of each important chip&rsquo;s datasheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/cheap-uart-adapter-breakout/datasheets/sn74lvc1t45.pdf"><img src="/images/extensions/cheap-uart-adapter-breakout/datasheets/sn74lvc1t45-page1.png" alt="First page of the SN74LVC1T45 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/cheap-uart-adapter-breakout/datasheets/sn74lvc1t45.pdf">SN74LVC1T45 single-bit dual-supply bus transceiver</a> — Texas Instruments, 42 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/cheap-uart-adapter-breakout/datasheets/tpd4e1u06.pdf"><img src="/images/extensions/cheap-uart-adapter-breakout/datasheets/tpd4e1u06-page1.png" alt="First page of the TPD4E1U06 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/cheap-uart-adapter-breakout/datasheets/tpd4e1u06.pdf">TPD4E1U06 quad-channel ESD protection device</a> — Texas Instruments, 27 pages.</figcaption>
</figure>
{:/nomarkdown}


See all boards on the [extension boards](/extension-boards) page.
