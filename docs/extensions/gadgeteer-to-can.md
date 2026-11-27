---
layout: default
title: "Gadgeteer to CAN adapter"
description: "An isolated CAN transceiver between a controller CAN transmit and receive pair and a three-way CAN bus terminal."
permalink: /extensions/gadgeteer-to-can
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Bus adapters</p>
    <h1 id="gadgeteer-to-can">Gadgeteer to CAN adapter</h1>
    <p class="xb-lead">An isolated CAN physical interface: controller transmit and receive on one side, CANH, CANL and field ground on a screw terminal on the other, with its own isolated power.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/gadgeteer-to-can/v21/gadgeteer-to-can-diagram.webp" alt="Top view of the Gadgeteer to CAN adapter.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>Isolated</b><span><a href="/images/extensions/gadgeteer-to-can/datasheets/isow1044.pdf">ISOW1044</a></span></div>
  <div class="xb-stat"><b>4.5–5.5 V</b><span>supply</span></div>
  <div class="xb-stat"><b>211 mA</b><span>bus held dominant</span></div>
  <div class="xb-stat"><b>120 Ω</b><span>optional terminator</span></div>
  <div class="xb-stat"><b>Silent</b><span>transmit inhibit input</span></div>
  <div class="xb-stat"><b>67 × 41</b><span>millimetres</span></div>
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
  This is a transceiver, not a CAN controller. Smoothieware has no CAN support: the controller needs custom firmware. Keep host ground and field ground separate. No hot-plugging.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>Connect controller CAN signals to a CAN bus</td></tr>
    <tr><td>Transceiver</td><td><a href="/images/extensions/gadgeteer-to-can/datasheets/isow1044.pdf">ISOW1044DFMR</a> with isolated DC-DC converter</td></tr>
    <tr><td>Host</td><td>J1: 3.3&nbsp;V, 5&nbsp;V, silent 3, transmit 4, receive 5, ground 10</td></tr>
    <tr><td>Field</td><td>J3: 1 field ground, 2 CANL, 3 CANH</td></tr>
    <tr><td>Silent input</td><td>High forces the recessive level; reception continues</td></tr>
    <tr><td>Terminator</td><td>120&nbsp;&Omega; through SJ10, open as delivered</td></tr>
    <tr><td>Chain</td><td>J2; contacts 6 to 9 linked, 3 to 5 open</td></tr>
    <tr><td>Size</td><td>67 &times; 41&nbsp;mm, four M3 holes, two cable-tie points</td></tr>
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
      <img src="/images/extensions/gadgeteer-to-can/v21/gadgeteer-to-can-diagram.webp" alt="Top view of the Gadgeteer to CAN adapter with numbered markers explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:12.1%;top:42.6%" aria-label="1: Host socket (J1)">1<span class="xb-pop"><b>Host socket (J1)</b> — supply and CAN logic signals.</span></a>
      <a class="xb-mk xb-pl" href="#tour-2" style="left:21.8%;top:74.5%" aria-label="2: Chain socket (J2)">2<span class="xb-pop"><b>Chain socket (J2)</b> — rails and unused contacts.</span></a>
      <a class="xb-mk xb-pb" href="#tour-3" style="left:51.0%;top:38.3%" aria-label="3: Isolated transceiver (U1)">3<span class="xb-pop"><b>Isolated transceiver (U1)</b> — the isolation barrier runs under it.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:34.3%;top:36.2%" aria-label="4: Silent gate (U2)">4<span class="xb-pop"><b>Silent gate (U2)</b> — an OR gate on the transmit line.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-5" style="left:85.7%;top:48.9%" aria-label="5: CAN terminal (J3)">5<span class="xb-pop"><b>CAN terminal (J3)</b> — field ground, CANL, CANH.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:70.2%;top:47.8%" aria-label="6: Field supply filter">6<span class="xb-pop"><b>Field supply filter</b> — ferrite beads on the isolated side.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:38.5%;top:8.5%" aria-label="7: Cable-tie points">7<span class="xb-pop"><b>Cable-tie points</b> — strain relief.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-8" style="left:7.9%;top:21.3%" aria-label="8: Mounting hole">8<span class="xb-pop"><b>Mounting hole</b> — one of four M3 holes.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host socket (J1)</b> — supply and CAN logic signals.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket (J2)</b> — rails and unused contacts.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Isolated transceiver (U1)</b> — the isolation barrier runs under it.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Silent gate (U2)</b> — an OR gate on the transmit line.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>CAN terminal (J3)</b> — field ground, CANL, CANH.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Field supply filter</b> — ferrite beads on the isolated side.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Cable-tie points</b> — strain relief.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Mounting hole</b> — one of four M3 holes.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1: host socket

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span> (4.5 to 5.5&nbsp;V)</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">Silent</span> input, high stops transmission</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">CAN TX</span> from the controller</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">CAN RX</span> to the controller</td></tr>
    <tr><td>6 to 9</td><td>Passed to J2</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J3: CAN bus

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Field ground</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-sig">CANL</span></td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">CANH</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Solder links on the back: SJ10 fits the terminator (open); SJ3 to SJ5 pass contacts 3 to 5 to the chain (open); SJ6 to SJ9 pass contacts 6 to 9 (bridged).

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>Wired to a controller CAN peripheral.</span></div>
  <div class="xb-card"><b>A CAN node</b><span>At the other end of the bus.</span></div>
  <div class="xb-card"><b>CAN firmware</b><span>Not part of Smoothieware.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

For a two-node bench bus on Smoothieboard V2 Prime pins, with your own firmware.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 726" role="img" aria-labelledby="xb-gadgeteer-to-can-wire"><title id="xb-gadgeteer-to-can-wire">Wiring: controller contact 1 to J1 contact 1; controller contact 2 to J1 contact 2; controller contact 3 to J1 contact 3; controller contact 4 to J1 contact 4; controller contact 5 to J1 contact 5; controller contact 10 to J1 contact 10; J3 contact 1 to bus ground reference; J3 contact 2 to CANL; J3 contact 3 to CANH.</title><image href="/images/extensions/gadgeteer-to-can/v21/gadgeteer-to-can-diagram.webp" x="324" y="14" width="352" height="230"/><circle cx="367" cy="112" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="348" y="131" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="367" y="145" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J1</text><circle cx="626" cy="126" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="607" y="145" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="626" y="159" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J3</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Prime header J33</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J1 on this board</text><rect x="30" y="304" width="200" height="210" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="130" y="405" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Smoothieboard</text><text x="130" y="425" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">V2 Prime</text><rect x="770" y="304" width="200" height="210" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 334.0H770" fill="none" stroke="#d92d2d" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="334" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="334" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><text x="216" y="339" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">1</text><text x="784" y="339" text-anchor="start" font-size="14" fill="#eaeaea">1  3.3 V</text><rect x="400" y="323" width="200" height="22" rx="11" fill="#d92d2d" stroke="#d92d2d" stroke-width="1.5"/><text x="500" y="339" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1 to 1: 3.3 V</text><path d="M230 364.0H770" fill="none" stroke="#e8820c" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="364" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">2</text><text x="784" y="369" text-anchor="start" font-size="14" fill="#eaeaea">2  5 V</text><rect x="400" y="353" width="200" height="22" rx="11" fill="#e8820c" stroke="#e8820c" stroke-width="1.5"/><text x="500" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#111">2 to 2: 5 V</text><path d="M230 394.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">3</text><text x="784" y="399" text-anchor="start" font-size="14" fill="#eaeaea">3  Silent input</text><rect x="400" y="383" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">3 to 3: Silent input</text><path d="M230 424.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="429" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">4</text><text x="784" y="429" text-anchor="start" font-size="14" fill="#eaeaea">4  CAN TX from host</text><rect x="400" y="413" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="429" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">4 to 4: CAN TX from host</text><path d="M230 454.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="454" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="454" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="459" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">5</text><text x="784" y="459" text-anchor="start" font-size="14" fill="#eaeaea">5  CAN RX to host</text><rect x="400" y="443" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="459" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">5 to 5: CAN RX to host</text><path d="M230 484.0H770" fill="none" stroke="#939393" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="484" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="484" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><text x="216" y="489" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">10</text><text x="784" y="489" text-anchor="start" font-size="14" fill="#eaeaea">10  GND</text><rect x="400" y="473" width="200" height="22" rx="11" fill="#939393" stroke="#939393" stroke-width="1.5"/><text x="500" y="489" text-anchor="middle" font-size="13" font-weight="700" fill="#111">10 to 10: GND</text><text x="130" y="546" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J3 on this board</text><text x="870" y="546" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Other CAN node</text><rect x="700" y="558" width="270" height="150" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><rect x="815" y="583" width="130" height="100" rx="8" fill="#20365c" stroke="#7fa6e0" stroke-width="1.5"/><rect x="858" y="613" width="44" height="40" rx="3" fill="#171717" stroke="#939393" stroke-width="1.5"/><circle cx="828" cy="599" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="616" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="633" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="650" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="667" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="930" cy="597" r="6" fill="#0d0f12" stroke="#c9c9c9" stroke-width="1.5"/><circle cx="930" cy="669" r="6" fill="#0d0f12" stroke="#c9c9c9" stroke-width="1.5"/><rect x="908" y="627" width="18" height="10" rx="1" fill="#c9a66b" stroke="#c9a66b" stroke-width="1.5"/><rect x="30" y="558" width="200" height="150" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 603.0H700" fill="none" stroke="#939393" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="603" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="603" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><text x="216" y="608" text-anchor="end" font-size="14" fill="#eaeaea">Field ground  1</text><text x="712" y="608" text-anchor="start" font-size="13" fill="#eaeaea">bus ground…</text><rect x="340" y="592" width="220" height="22" rx="11" fill="#939393" stroke="#939393" stroke-width="1.5"/><text x="450" y="608" text-anchor="middle" font-size="13" font-weight="700" fill="#111">1: bus ground reference</text><path d="M230 633.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="633" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="633" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="638" text-anchor="end" font-size="14" fill="#eaeaea">CANL  2</text><text x="712" y="638" text-anchor="start" font-size="13" fill="#eaeaea">CANL</text><rect x="340" y="622" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="638" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">2: CANL</text><path d="M230 663.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="663" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="663" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="668" text-anchor="end" font-size="14" fill="#eaeaea">CANH  3</text><text x="712" y="668" text-anchor="start" font-size="13" fill="#eaeaea">CANH</text><rect x="340" y="652" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="668" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">3: CANH</text></svg>
  </div>
  <figcaption>Wiring for this procedure. Yellow rings mark the connectors used. Make and change connections with the power off. Equipment is drawn as a typical unit, not a specific model.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Check the pins</h3>
    <p>On the Prime, PB9 (J33 contact 4) and PH14 (contact 5) can be FDCAN1 transmit and receive (<a href="https://www.st.com/resource/en/datasheet/stm32h745bi.pdf">STM32H745 datasheet</a>). Smoothieware uses the same pins for a serial port; the two cannot be used together. J33 contact 3 (PD9) can drive the silent input.</p>
  </li>
  <li class="xb-step">
    <h3>Wire the host with power off</h3>
    <p>Contacts 1, 2, 3, 4, 5 and 10. Check that the 5&nbsp;V supply can deliver pulses of 250&nbsp;mA.</p>
  </li>
  <li class="xb-step">
    <h3>Wire the bus</h3>
    <p>CANH to CANH, CANL to CANL, field ground to the bus ground reference.</p>
  </li>
  <li class="xb-step">
    <h3>Terminate</h3>
    <p>Bridge SJ10 only if this board is at an end of the bus; fit terminators at both ends and nowhere else.</p>
  </li>
  <li class="xb-step">
    <h3>Run your firmware</h3>
    <p>Set the same bit rate on both nodes and send a frame.</p>
    <p class="xb-expect">The other node acknowledges and receives it.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Talk on a CAN bus</td><td>Custom firmware; no Smoothieware module</td><td><a href="#config-main">Setup</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Setup {#config-main}

There is no Smoothieware setting for this board: [SmoothieV2](https://github.com/Smoothieware/SmoothieV2/tree/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src) contains no CAN application code.

## How it works {#how-it-works}

The OR gate combines transmit data with the silent input before the transceiver. The <a href="/images/extensions/gadgeteer-to-can/datasheets/isow1044.pdf">ISOW1044</a> carries data and its own power across the isolation barrier, so the bus side needs no external supply.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 142" role="img" aria-labelledby="xb-gadgeteer-to-can-path"><title id="xb-gadgeteer-to-can-path">TX data and silent input then OR gate then ISOW1044, data and power cross the isolation barrier then Isolated CAN bus, CANH, CANL, field ground.</title><rect x="20" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="127" y="56" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">TX data and silent</text><text x="127" y="74" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">input</text><text x="127" y="94" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><rect x="268" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="376" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">OR gate</text><text x="376" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M238.5 70H259.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M258 63L266 70L258 77Z" fill="#5fb3ff"/><rect x="517" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="624" y="57" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">ISOW1044</text><text x="624" y="77" text-anchor="middle" font-size="13" fill="#b3b3b3">data and power cross the</text><text x="624" y="93" text-anchor="middle" font-size="13" fill="#b3b3b3">isolation barrier</text><path d="M487.0 70H508.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M506 63L515 70L506 77Z" fill="#5fb3ff"/><rect x="766" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="873" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Isolated CAN bus</text><text x="873" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3">CANH, CANL, field ground</text><path d="M735.5 70H756.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M754 63L764 70L754 77Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>No frames</td><td>Termination at both ends, common bit rate, silent input low.</td></tr>
    <tr><td>Supply dips</td><td>The 5&nbsp;V rail must cover 211&nbsp;mA continuous and 250&nbsp;mA pulses.</td></tr>
    <tr><td>Errors on a long bus</td><td>Terminate only the two ends.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/gadgeteer-to-can/v21/gadgeteer-to-can-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/gadgeteer-to-can/v21/gadgeteer-to-can-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/gadgeteer-to-can/v21/gadgeteer-to-can-diagram.webp">Board drawing (WebP)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-gc-mount-t">
  <title id="xb-gc-mount-t">Mounting drawing of the gc, component side: outline 70 by 45 millimetres with 4 mounting holes and 2 cable-tie holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="215.6" y="78.0" width="528.9" height="340.0" rx="0.0" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M215.6 56H744.4"/><path d="M215.6 50V62"/><path d="M744.4 50V62"/><path d="M770.4 78.0V418.0"/><path d="M764.4 78.0h12"/><path d="M764.4 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">70</text>
  <text x="782.4" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">45</text>
  <circle cx="215.6" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="203.6" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M157.6 104.0h30" fill="none"/><path d="M191.6 104.0l-8 -4v8z"/><path d="M157.6 104.0v30" fill="none"/><path d="M157.6 138.0l-4 -8h8z"/></g>
  <text x="195.6" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="153.6" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="253.3" cy="153.6" r="12.1" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M237.2 153.6h32.2M253.3 137.5v32.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="241.2" y="185.6" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 10.00</text>
  <circle cx="404.4" cy="153.6" r="12.1" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M388.4 153.6h32.2M404.4 137.5v32.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="392.4" y="185.6" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  25.00, 10.00</text>
  <circle cx="253.3" cy="304.7" r="12.1" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M237.2 304.7h32.2M253.3 288.6v32.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="241.2" y="282.6" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 30.00</text>
  <circle cx="404.4" cy="304.7" r="12.1" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M388.4 304.7h32.2M404.4 288.6v32.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="392.4" y="282.6" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">4</tspan>  25.00, 30.00</text>
  <circle cx="419.6" cy="108.2" r="9.4" fill="#191919" stroke="#b3b3b3" stroke-width="1.5"/>
  <circle cx="366.7" cy="395.3" r="9.4" fill="#191919" stroke="#b3b3b3" stroke-width="1.5"/>
  <text x="349.2" y="255.8" text-anchor="end" font-size="12" fill="#b3b3b3">cable tie</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 70 × 45&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>10.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>25.00</td><td>10.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>5.00</td><td>30.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>25.00</td><td>30.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>–</td><td>27.00</td><td>4.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
    <tr><td>–</td><td>20.00</td><td>42.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Values for the isolated converter and board.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Supply</td><td>J1 contact 2</td><td>4.5 V</td><td>5 V</td><td>5.5 V</td><td>Host side</td></tr>
    <tr><td>Supply current</td><td>J1 contact 2</td><td>—</td><td>211 mA</td><td>250 mA pulses</td><td>Bus held dominant</td></tr>
    <tr><td>Terminator</td><td>J3 with SJ10</td><td>—</td><td>120 Ω</td><td>—</td><td>0.25 W resistor</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: datasheets {#datasheets}

The first page of each important chip&rsquo;s datasheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/gadgeteer-to-can/datasheets/isow1044.pdf"><img src="/images/extensions/gadgeteer-to-can/datasheets/isow1044-page1.png" alt="First page of the ISOW1044 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/gadgeteer-to-can/datasheets/isow1044.pdf">ISOW1044 isolated CAN FD transceiver with integrated DC-DC converter</a> — Texas Instruments, 50 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/gadgeteer-to-can/datasheets/sn74lvc1g32.pdf"><img src="/images/extensions/gadgeteer-to-can/datasheets/sn74lvc1g32-page1.png" alt="First page of the SN74LVC1G32 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/gadgeteer-to-can/datasheets/sn74lvc1g32.pdf">SN74LVC1G32 single 2-input OR gate</a> — Texas Instruments, 51 pages.</figcaption>
</figure>
{:/nomarkdown}


See all boards on the [extension boards](/extension-boards) page.
