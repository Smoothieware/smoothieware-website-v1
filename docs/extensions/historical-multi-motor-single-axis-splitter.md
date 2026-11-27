---
layout: default
title: "Multi-motor single-axis command splitter"
description: "One STEP/DIR stream gated to four drivers with individual enables: pinout and limits."
permalink: /extensions/historical-multi-motor-single-axis-splitter
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Motion</p>
    <h1 id="historical-multi-motor-single-axis-splitter">Multi-motor single-axis command splitter</h1>
    <p class="xb-lead">Shares one axis STEP stream across four external drivers, each gated by its own enable, with common direction and enable.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/historical-multi-motor-single-axis-splitter/historical-multi-motor-single-axis-splitter-diagram.png" alt="Top view of the Multi-motor single-axis command splitter board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>4</b><span>driver outputs</span></div>
  <div class="xb-stat"><b>1</b><span>shared STEP in</span></div>
  <div class="xb-stat"><b>74LS132</b><span>gating</span></div>
  <div class="xb-stat"><b>74LS240</b><span>buffer</span></div>
  <div class="xb-stat"><b>40 × 45 mm</b><span>board size</span></div>
  <div class="xb-stat"><b>5 V</b><span>logic supply</span></div>
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
  <a href="#mounting">Mounting dimensions</a>
  <a href="#electrical">Electrical specifications</a>
</nav>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <b>Check the logic levels before connecting drives.</b> The outputs are TTL gates whose guaranteed high level may be too low for a 5 V drive input. This splits signals only, never motor power. This is a design by Chris Cecil, not a current Smoothieware board.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>Gated STEP distribution</td></tr>
    <tr><td>Inputs</td><td>J1, J7: STEP, DIR, M1–M4 enable, common enable</td></tr>
    <tr><td>Outputs</td><td>J2–J5: 5 V, STEP, DIR, enable, ground</td></tr>
    <tr><td>Logic</td><td>74LS132 and 74LS240</td></tr>
    <tr><td>Size</td><td>40 × 45 mm</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/historical-multi-motor-single-axis-splitter/historical-multi-motor-single-axis-splitter-diagram.png" alt="Annotated top view of the Multi-motor single-axis command splitter board">
      <a class="xb-mk" href="#tour-1" style="left:26.8%;top:51.7%" aria-label="1: Input J1">1<span class="xb-pop"><b>Input J1</b> — Host header.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-2" style="left:8.7%;top:26.0%" aria-label="2: Input row J7">2<span class="xb-pop"><b>Input row J7</b> — Same signals in one row.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:69.0%;top:90.1%" aria-label="3: Output 1">3<span class="xb-pop"><b>Output 1</b> — M1 channel.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:69.0%;top:32.3%" aria-label="4: Output 2">4<span class="xb-pop"><b>Output 2</b> — M2 channel.</span></a>
      <a class="xb-mk xb-pr" href="#tour-5" style="left:89.5%;top:77.2%" aria-label="5: Output 3">5<span class="xb-pop"><b>Output 3</b> — M3 channel.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-6" style="left:89.5%;top:45.8%" aria-label="6: Output 4">6<span class="xb-pop"><b>Output 4</b> — M4 channel.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:48.9%;top:39.9%" aria-label="7: 74LS132">7<span class="xb-pop"><b>74LS132</b> — Gates the STEP signal.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:48.8%;top:62.2%" aria-label="8: 74LS240">8<span class="xb-pop"><b>74LS240</b> — Buffers the outputs.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Input J1</b> — Host header.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Input row J7</b> — Same signals in one row.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Output 1</b> — M1 channel.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Output 2</b> — M2 channel.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Output 3</b> — M3 channel.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Output 4</b> — M4 channel.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>74LS132</b> — Gates the STEP signal.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>74LS240</b> — Buffers the outputs.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

<span id="connect-and-try-it"></span>

### Input header J1

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+3V3</code></td></tr>
    <tr><td>2</td><td><code>+5V</code></td></tr>
    <tr><td>3</td><td><code>STP</code></td></tr>
    <tr><td>4</td><td><code>DIR</code></td></tr>
    <tr><td>5</td><td><code>M1_EN</code></td></tr>
    <tr><td>6</td><td><code>M2_EN</code></td></tr>
    <tr><td>7</td><td><code>M3_EN</code></td></tr>
    <tr><td>8</td><td><code>M4_EN</code></td></tr>
    <tr><td>9</td><td><code>EN_Common</code></td></tr>
    <tr><td>10</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Output 1, J2

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J2 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+5V</code></td></tr>
    <tr><td>2</td><td><code>M1_STP</code></td></tr>
    <tr><td>3</td><td><code>DIR_Buf</code></td></tr>
    <tr><td>4</td><td><code>EN_Common_Buf</code></td></tr>
    <tr><td>5</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

J3, J4 and J5 follow J2 with M2, M3 and M4 STEP on contact 2.

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Splitter board</b><span>Built from the design files</span></div>
  <div class="xb-card"><b>External drives</b><span>Up to four</span></div>
  <div class="xb-card"><b>Oscilloscope</b><span>To check levels and pulses</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

The minimum wiring first, then the order to do it in. Facts about each contact are in the [pinout](#pinout).

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 502" role="img" aria-labelledby="xb-historical-multi-motor-single-axis-splitter-wire"><title id="xb-historical-multi-motor-single-axis-splitter-wire">Wiring: J2 contact 1 to +5V; J2 contact 2 to M1_STP; J2 contact 3 to DIR_Buf; J2 contact 4 to EN_Common_Buf; J2 contact 5 to GND.</title><image href="/images/extensions/historical-multi-motor-single-axis-splitter/historical-multi-motor-single-axis-splitter-diagram.png" x="396" y="14" width="207" height="230"/><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J2 on this board</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">External drive 1</text><rect x="700" y="304" width="270" height="180" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><rect x="815" y="336" width="130" height="116" rx="8" fill="#343434" stroke="#a1a1a1" stroke-width="1.5"/><rect x="825" y="344" width="8" height="48" rx="2" fill="#5b5b5b" stroke="#5b5b5b" stroke-width="1.5"/><rect x="841" y="344" width="8" height="48" rx="2" fill="#5b5b5b" stroke="#5b5b5b" stroke-width="1.5"/><rect x="857" y="344" width="8" height="48" rx="2" fill="#5b5b5b" stroke="#5b5b5b" stroke-width="1.5"/><rect x="873" y="344" width="8" height="48" rx="2" fill="#5b5b5b" stroke="#5b5b5b" stroke-width="1.5"/><rect x="889" y="344" width="8" height="48" rx="2" fill="#5b5b5b" stroke="#5b5b5b" stroke-width="1.5"/><rect x="905" y="344" width="8" height="48" rx="2" fill="#5b5b5b" stroke="#5b5b5b" stroke-width="1.5"/><rect x="921" y="344" width="8" height="48" rx="2" fill="#5b5b5b" stroke="#5b5b5b" stroke-width="1.5"/><rect x="828" y="408" width="104" height="32" rx="3" fill="#2f9e57" stroke="#1c6a39" stroke-width="1.5"/><circle cx="844" cy="424" r="7" fill="#c9c9c9" stroke="#0d0f12" stroke-width="1.5"/><circle cx="868" cy="424" r="7" fill="#c9c9c9" stroke="#0d0f12" stroke-width="1.5"/><circle cx="892" cy="424" r="7" fill="#c9c9c9" stroke="#0d0f12" stroke-width="1.5"/><circle cx="916" cy="424" r="7" fill="#c9c9c9" stroke="#0d0f12" stroke-width="1.5"/><rect x="30" y="304" width="200" height="180" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 334.0H700" fill="none" stroke="#e8820c" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="334" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="334" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><text x="216" y="339" text-anchor="end" font-size="14" fill="#eaeaea">+5V  1</text><text x="712" y="339" text-anchor="start" font-size="13" fill="#eaeaea">+5V</text><rect x="340" y="323" width="220" height="22" rx="11" fill="#e8820c" stroke="#e8820c" stroke-width="1.5"/><text x="450" y="339" text-anchor="middle" font-size="13" font-weight="700" fill="#111">1: +5V</text><path d="M230 364.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" fill="#eaeaea">M1_STP  2</text><text x="712" y="369" text-anchor="start" font-size="13" fill="#eaeaea">M1_STP</text><rect x="340" y="353" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">2: M1_STP</text><path d="M230 394.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" fill="#eaeaea">DIR_Buf  3</text><text x="712" y="399" text-anchor="start" font-size="13" fill="#eaeaea">DIR_Buf</text><rect x="340" y="383" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">3: DIR_Buf</text><path d="M230 424.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="429" text-anchor="end" font-size="14" fill="#eaeaea">EN_Common_Buf  4</text><text x="712" y="429" text-anchor="start" font-size="13" fill="#eaeaea">EN_Common_Buf</text><rect x="340" y="413" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="429" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">4: EN_Common_Buf</text><path d="M230 454.0H700" fill="none" stroke="#939393" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="454" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="454" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><text x="216" y="459" text-anchor="end" font-size="14" fill="#eaeaea">  5</text><text x="712" y="459" text-anchor="start" font-size="13" fill="#eaeaea">GND</text><rect x="340" y="443" width="220" height="22" rx="11" fill="#939393" stroke="#939393" stroke-width="1.5"/><text x="450" y="459" text-anchor="middle" font-size="13" font-weight="700" fill="#111">5: GND</text></svg>
  </div>
  <figcaption>Wiring drawn from the original design files. Make connections with all power off. Equipment is drawn as a typical unit, not a specific model.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Check the contacts</h3>
    <p>With all power off, find contact 1 on each connector and check every wire against the <a href="#pinout">pinout</a>.</p>
  </li>
  <li class="xb-step">
    <h3>Set up and check</h3>
    <p>Check levels and pulses with an oscilloscope before connecting the drives.</p>
  </li>
  <li class="xb-step">
    <h3>Check with a meter</h3>
    <p>Check continuity and the rail voltages with a meter before connecting anything else.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

<span id="smoothieware-use"></span>

Smoothieware has no verified configuration for the channel enables of this board: not specified. The shared STEP, DIR and enable follow an ordinary external-driver actuator setup.

## How it works {#how-it-works}

Each output STEP is the shared STEP gated by that channel&rsquo;s enable; DIR and the common enable are buffered to all four. The [TI SN74LS240 datasheet](https://www.ti.com/lit/ds/symlink/sn74ls240.pdf) guarantees only 2.4 V output high at −3 mA.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 270" role="img" aria-labelledby="xb-historical-multi-motor-single-axis-splitter-path"><title id="xb-historical-multi-motor-single-axis-splitter-path">Shared STEP then Gated by each channel enable then Four STEP outputs. DIR and common enable then Buffers then All four outputs.</title><rect x="46" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="186" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Shared STEP</text><text x="186" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><rect x="360" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Gated by each channel enable</text><text x="500" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M330.0 70H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 63L358 70L349 77Z" fill="#5fb3ff"/><rect x="674" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="814" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Four STEP outputs</text><text x="814" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M644.0 70H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 63L672 70L663 77Z" fill="#5fb3ff"/><rect x="46" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="186" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">DIR and common enable</text><text x="186" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><rect x="360" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="500" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Buffers</text><text x="500" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M330.0 198H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 191L358 198L349 205Z" fill="#5fb3ff"/><rect x="674" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="814" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">All four outputs</text><text x="814" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M644.0 198H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 191L672 198L663 205Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board, one path per row.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Nothing responds</td><td>With power off, check continuity along each lead and board path against the pinout tables. Confirm which end of the connector is contact 1.</td></tr>
    <tr><td>One drive never steps</td><td>Check its channel enable level.</td></tr>
    <tr><td>Drive ignores pulses</td><td>Compare the output high level with the drive requirement.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="https://github.com/Ccecil/MultiMotorSingleAxisSplitter/tree/78c84c17d5de61348682debc81ea5d1ebc0c7a5b">The upstream source</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/MultiMotorSingleAxisSplitter/blob/78c84c17d5de61348682debc81ea5d1ebc0c7a5b/MMSA.kicad_pcb">original circuit</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/MultiMotorSingleAxisSplitter">Ccecil upstream project</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/MultiMotorSingleAxisSplitter/blob/78c84c17d5de61348682debc81ea5d1ebc0c7a5b/MMSA.kicad_sch">Original MMSA.kicad_sch</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/MultiMotorSingleAxisSplitter/blob/78c84c17d5de61348682debc81ea5d1ebc0c7a5b/NAND_noninverting.kicad_sch">Original NAND_noninverting.kicad_sch</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/MultiMotorSingleAxisSplitter/blob/78c84c17d5de61348682debc81ea5d1ebc0c7a5b/README.md">Original README.md</a></td><td>Design source</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

Outline and holes from the original board file. Millimetres, seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-xis-splitter-mount-t">
  <title id="xb-xis-splitter-mount-t">Mounting drawing of the historical-multi-motor-single-axis-splitter, component side: outline 40 by 45 millimetres with 5 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="328.9" y="78.0" width="302.2" height="340.0" rx="0.0" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M328.9 56H631.1"/><path d="M328.9 50V62"/><path d="M631.1 50V62"/><path d="M657.1 78.0V418.0"/><path d="M651.1 78.0h12"/><path d="M651.1 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">40</text>
  <text x="669.1" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">45</text>
  <circle cx="328.9" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="316.9" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M270.9 104.0h30" fill="none"/><path d="M304.9 104.0l-8 -4v8z"/><path d="M270.9 104.0v30" fill="none"/><path d="M270.9 138.0l-4 -8h8z"/></g>
  <text x="308.9" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="266.9" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="366.7" cy="115.8" r="12.1" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M350.6 115.8h32.2M366.7 99.7v32.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="354.6" y="147.9" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.00</text>
  <circle cx="593.3" cy="115.8" r="12.1" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M577.2 115.8h32.2M593.3 99.7v32.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="605.4" y="147.9" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  35.00, 5.00</text>
  <circle cx="540.4" cy="248.0" r="9.4" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M527.0 248.0h26.9M540.4 234.6v26.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="549.9" y="228.6" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">3</tspan>  28.00, 22.50</text>
  <circle cx="366.7" cy="380.2" r="12.1" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M350.6 380.2h32.2M366.7 364.1v32.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="354.6" y="358.1" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">4</tspan>  5.00, 40.00</text>
  <circle cx="593.3" cy="380.2" r="12.1" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M577.2 380.2h32.2M593.3 364.1v32.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="605.4" y="358.1" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">5</tspan>  35.00, 40.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 40 × 45&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>35.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>28.00</td><td>22.50</td><td>2.5&nbsp;mm, not plated</td><td>Mounting</td></tr>
    <tr><td>4</td><td>5.00</td><td>40.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>5</td><td>35.00</td><td>40.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Only what the design source states or the circuit fixes. Blank cells are not specified.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Voltage, current and temperature limits</td><td>Whole board</td><td>—</td><td>—</td><td>—</td><td>Not specified in the source</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Design source {#origin}

Designed by Chris Cecil: [original design files](https://github.com/Ccecil/MultiMotorSingleAxisSplitter/tree/78c84c17d5de61348682debc81ea5d1ebc0c7a5b). It was drawn for the Smoothieboard V2 Gadgeteer era; check every connection against your own controller.
See all boards on the [extension boards](/extension-boards) page.
