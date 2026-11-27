---
layout: default
title: "Long-distance extender"
description: "An emitter and a receiver that carry three logic signals and 5 V over a dedicated cable as differential pairs."
permalink: /extensions/long-distance-extender
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Signal interfaces</p>
    <h1 id="long-distance-extender">Long-distance extender</h1>
    <p class="xb-lead">Send three logic signals to a distant place over one cable. Each travels on its own differential pair, with 5&nbsp;V to power the receiver.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/long-distance-extender/v15/long-distance-extender-emitter-diagram.png" alt="Top view of the emitter: a socket, a five-pin header, three activity lights and a cable jack.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>3 signals</b><span>emitter to receiver</span></div>
  <div class="xb-stat"><b>3.3 V</b><span>receiver outputs</span></div>
  <div class="xb-stat"><b>5 V</b><span>power in the cable</span></div>
  <div class="xb-stat"><b>Low</b><span>outputs on a link fault</span></div>
  <div class="xb-stat"><b>3 + 3</b><span>signal lights</span></div>
  <div class="xb-stat"><b>51 × 42</b><span>millimetres, each board</span></div>
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
  The jacks are not Ethernet and not PoE. One direction only, one emitter to one receiver, grounds common. Do not hot-plug.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>Extend three one-way logic signals</td></tr>
    <tr><td>Transceivers</td><td><a href="/images/extensions/long-distance-extender/datasheets/thvd1451.pdf">THVD1451</a> on each channel; <a href="/images/extensions/long-distance-extender/datasheets/sn74lvc3g14.pdf">SN74LVC3G14</a> signal conditioning</td></tr>
    <tr><td>Inputs</td><td>Ten-contact socket J1 or five-pin header J3: use one of the two</td></tr>
    <tr><td>Cable power</td><td>From the emitter through an electronic fuse; the receiver runs from it</td></tr>
    <tr><td>Protection</td><td>Overvoltage, fuse-fault and reverse-polarity lights</td></tr>
    <tr><td>Links</td><td>5&nbsp;V selection links JP1 to JP3; shield bond JP4 (close at one end only)</td></tr>
    <tr><td>Size</td><td>51 &times; 42&nbsp;mm each</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The emitter sits by the signal source, the receiver by the destination.

### Emitter

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/long-distance-extender/v15/long-distance-extender-emitter-diagram.png" alt="Top view of the emitter with numbered markers.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:18.1%;top:12.1%" aria-label="1: Input socket (J1)">1<span class="xb-pop"><b>Input socket (J1)</b> — three signals and power.</span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:48.1%;top:12.1%" aria-label="2: Chain socket (J2)">2<span class="xb-pop"><b>Chain socket (J2)</b> — passes other contacts on.</span></a>
      <a class="xb-mk xb-pb" href="#tour-3" style="left:74.5%;top:12.1%" aria-label="3: Header (J3)">3<span class="xb-pop"><b>Header (J3)</b> — alternative input.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:57.6%;top:79.4%" aria-label="4: Cable jack (J4)">4<span class="xb-pop"><b>Cable jack (J4)</b> — to the receiver.</span></a>
      <a class="xb-mk xb-pr" href="#tour-5" style="left:87.1%;top:52.2%" aria-label="5: Conditioning (U4)">5<span class="xb-pop"><b>Conditioning (U4)</b> — an SN74LVC3G14.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:66.0%;top:44.6%" aria-label="6: Drivers">6<span class="xb-pop"><b>Drivers</b> — U1 to U3.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:64.1%;top:22.4%" aria-label="7: Signal lights">7<span class="xb-pop"><b>Signal lights</b> — D6 to D8, lit when high.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-8" style="left:15.4%;top:39.7%" aria-label="8: Power light (D5)">8<span class="xb-pop"><b>Power light (D5)</b> — 3.3&nbsp;V present.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Input socket (J1)</b> — three signals and power.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket (J2)</b> — passes other contacts on.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Header (J3)</b> — alternative input.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Cable jack (J4)</b> — to the receiver.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Conditioning (U4)</b> — an <a href="/images/extensions/long-distance-extender/datasheets/sn74lvc3g14.pdf">SN74LVC3G14</a>.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Drivers</b> — U1 to U3.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Signal lights</b> — D6 to D8, lit when high.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Power light (D5)</b> — 3.3&nbsp;V present.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

### Receiver

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/long-distance-extender/v15/long-distance-extender-receiver-diagram.png" alt="Top view of the receiver with numbered markers.">
      <a class="xb-mk" href="#tour-9" style="left:57.6%;top:79.4%" aria-label="9: Cable jack (J4)">9<span class="xb-pop"><b>Cable jack (J4)</b> — from the emitter.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-10" style="left:18.1%;top:12.1%" aria-label="10: Output socket (J1)">10<span class="xb-pop"><b>Output socket (J1)</b> — three outputs and power.</span></a>
      <a class="xb-mk xb-pb" href="#tour-11" style="left:74.5%;top:12.1%" aria-label="11: Header (J3)">11<span class="xb-pop"><b>Header (J3)</b> — the same outputs.</span></a>
      <a class="xb-mk xb-pb" href="#tour-12" style="left:66.0%;top:38.8%" aria-label="12: Receivers">12<span class="xb-pop"><b>Receivers</b> — U1 to U3.</span></a>
      <a class="xb-mk xb-pb" href="#tour-13" style="left:64.1%;top:22.4%" aria-label="13: Signal lights">13<span class="xb-pop"><b>Signal lights</b> — D6 to D8, lit when high.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-14" style="left:15.4%;top:39.7%" aria-label="14: Power light (D5)">14<span class="xb-pop"><b>Power light (D5)</b> — 3.3&nbsp;V present.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="9">
    <li id="tour-9"><span class="xb-n">9</span><div><b>Cable jack (J4)</b> — from the emitter.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Output socket (J1)</b> — three outputs and power.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Header (J3)</b> — the same outputs.</div></li>
    <li id="tour-12"><span class="xb-n">12</span><div><b>Receivers</b> — U1 to U3.</div></li>
    <li id="tour-13"><span class="xb-n">13</span><div><b>Signal lights</b> — D6 to D8, lit when high.</div></li>
    <li id="tour-14"><span class="xb-n">14</span><div><b>Power light (D5)</b> — 3.3&nbsp;V present.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

### Lights {#lights}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th>Lit means</th><th>Disable it</th></tr></thead>
  <tbody>
    <tr><td>D5, both boards</td><td>3.3&nbsp;V present</td><td>Emitter JP14, receiver JP7</td></tr>
    <tr><td>D6 to D8, emitter</td><td>Signal 1 to 3 high</td><td>JP11, JP13, JP12</td></tr>
    <tr><td>D6 to D8, receiver</td><td>Signal 1 to 3 high</td><td>JP9, JP8, JP6</td></tr>
    <tr><td>D981, amber, both</td><td>Overvoltage</td><td>JP980</td></tr>
    <tr><td>D983, red, both</td><td>Electronic fuse fault</td><td>JP981</td></tr>
    <tr><td>D987, red, blinking, both</td><td>Reverse polarity</td><td>JP982</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Pinout {#pinout}

### J1 sockets

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Emitter</th><th>Receiver</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span> from host</td><td><span class="xb-pill xb-p-3v3">3.3 V</span> output</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span> from host</td><td><span class="xb-pill xb-p-5v">5 V</span> output</td></tr>
    <tr><td>3 to 5</td><td><span class="xb-pill xb-p-sig">S1 to S3</span> inputs</td><td><span class="xb-pill xb-p-sig">S1 to S3</span> outputs</td></tr>
    <tr><td>6 to 9</td><td>Passed to chain socket J2 through links</td><td>Not connected</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J3 headers

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-5v">5 V</span></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>3 to 5</td><td><span class="xb-pill xb-p-sig">S1 to S3</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Cable jacks (J4)

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1, 2</td><td>Channel 1 pair</td></tr>
    <tr><td>3, 6</td><td>Channel 2 pair</td></tr>
    <tr><td>4, 5</td><td>Channel 3 pair</td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-5v">5 V</span></td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>Shell</td><td>Shield</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Both boards</b><span>One pair, built from the design files in Downloads</span></div>
  <div class="xb-card"><b>A straight-through cable</b><span>All eight cores, only for this link.</span></div>
  <div class="xb-card"><b>A source</b><span>Up to three logic outputs and 5&nbsp;V.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

This example sends one Smoothieboard V2 Prime output down channel 1.

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Keep the links as delivered</h3>
    <p>JP1 to JP3 bridged, JP4 open.</p>
  </li>
  <li class="xb-step">
    <h3>Wire the emitter with the power off</h3>
    <p>Prime GF/J37 contacts 1, 2, 3 (PB1) and 10 to emitter J1 contacts 1, 2, 3 and 10.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the cable</h3>
    <p>Between the two J4 jacks.</p>
  </li>
  <li class="xb-step">
    <h3>Power and switch</h3>
    <p>Add the configuration below, then send <code>M42.21</code> and <code>M43.21</code>.</p>
    <p class="xb-expect">Channel 1 lights follow on both boards.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Switch a distant logic signal</td><td><a href="/switch">Switch</a>, digital output</td><td><a href="#config-main">Setup</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Setup {#config-main}

The boards need no driver; any digital output works.

```ini
[switch]
link_signal1.enable = true
link_signal1.output_pin = PB1
link_signal1.output_type = digital
link_signal1.input_on_command = M42
link_signal1.input_off_command = M43
link_signal1.subcode = 21
link_signal1.startup_state = false
link_signal1.halt_set_to = false
```

The [switch module](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/switch/Switch.cpp) starts this output LOW and returns it LOW on a software halt. That is not a hardware safety function, and it does not define the level during reset or power-up. Check that nothing else uses PB1 or M42.21 and M43.21.

## How it works {#how-it-works}

Each input is cleaned by a Schmitt-trigger inverter and driven onto a pair. The receiver converts it back and a second inversion restores the original level. Power travels on contacts 7 and 8 through protection at both ends. There is no fixed distance figure: test your signal rate and cable at the length you need.

{% include _includes/extender-board-comparison.html %}

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Receiver power light off</td><td>Cable power on contact 7, JP2 on both boards, fault lights.</td></tr>
    <tr><td>Lights follow at the emitter only</td><td>Cable pairs straight through.</td></tr>
    <tr><td>Errors on a long run</td><td>Lower the signal rate and keep each signal on its own twisted pair.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/long-distance-extender/v15/long-distance-extender-emitter-schematic.pdf">Schematic (PDF, emitter)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/long-distance-extender/v15/long-distance-extender-emitter-bom.csv">Parts list (CSV, emitter)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/long-distance-extender/v15/long-distance-extender-emitter-diagram.png">Board drawing (PNG, emitter)</a></td><td>The top view used on this page</td></tr>
    <tr><td><a href="/images/extensions/long-distance-extender/v15/long-distance-extender-receiver-schematic.pdf">Schematic (PDF, receiver)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/long-distance-extender/v15/long-distance-extender-receiver-bom.csv">Parts list (CSV, receiver)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/long-distance-extender/v15/long-distance-extender-receiver-diagram.png">Board drawing (PNG, receiver)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

### Emitter dimensions

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-lde-mount-t">
  <title id="xb-lde-mount-t">Mounting drawing of the lde, component side: outline 51 by 42 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="273.6" y="78.0" width="412.9" height="340.0" rx="8.1" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M273.6 56H686.4"/><path d="M273.6 50V62"/><path d="M686.4 50V62"/><path d="M712.4 78.0V418.0"/><path d="M706.4 78.0h12"/><path d="M706.4 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">51</text>
  <text x="724.4" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">42</text>
  <circle cx="273.6" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="261.6" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M215.6 104.0h30" fill="none"/><path d="M249.6 104.0l-8 -4v8z"/><path d="M215.6 104.0v30" fill="none"/><path d="M215.6 138.0l-4 -8h8z"/></g>
  <text x="253.6" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="211.6" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="322.1" cy="175.1" r="13.0" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M305.2 175.1h33.9M322.1 158.2v33.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="309.2" y="208.1" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  6.00, 12.00</text>
  <circle cx="646.0" cy="175.1" r="13.0" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M629.0 175.1h33.9M646.0 158.2v33.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="658.9" y="208.1" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  46.00, 12.00</text>
  <circle cx="322.1" cy="337.0" r="13.0" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M305.2 337.0h33.9M322.1 320.1v33.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="309.2" y="314.1" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  6.00, 32.00</text>
  <circle cx="646.0" cy="337.0" r="13.0" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M629.0 337.0h33.9M646.0 320.1v33.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="658.9" y="314.1" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  46.00, 32.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 51 × 42&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>6.00</td><td>12.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>46.00</td><td>12.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>6.00</td><td>32.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>46.00</td><td>32.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Receiver dimensions

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-ldr-mount-t">
  <title id="xb-ldr-mount-t">Mounting drawing of the ldr, component side: outline 51 by 42 millimetres with 4 mounting holes and 2 cable-tie holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="273.6" y="78.0" width="412.9" height="340.0" rx="8.1" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M273.6 56H686.4"/><path d="M273.6 50V62"/><path d="M686.4 50V62"/><path d="M712.4 78.0V418.0"/><path d="M706.4 78.0h12"/><path d="M706.4 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">51</text>
  <text x="724.4" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">42</text>
  <circle cx="273.6" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="261.6" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M215.6 104.0h30" fill="none"/><path d="M249.6 104.0l-8 -4v8z"/><path d="M215.6 104.0v30" fill="none"/><path d="M215.6 138.0l-4 -8h8z"/></g>
  <text x="253.6" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="211.6" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="322.1" cy="175.1" r="13.0" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M305.2 175.1h33.9M322.1 158.2v33.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="309.2" y="208.1" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  6.00, 12.00</text>
  <circle cx="646.0" cy="175.1" r="13.0" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M629.0 175.1h33.9M646.0 158.2v33.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="658.9" y="208.1" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  46.00, 12.00</text>
  <circle cx="322.1" cy="337.0" r="13.0" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M305.2 337.0h33.9M322.1 320.1v33.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="309.2" y="314.1" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  6.00, 32.00</text>
  <circle cx="646.0" cy="337.0" r="13.0" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M629.0 337.0h33.9M646.0 320.1v33.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="658.9" y="314.1" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  46.00, 32.00</text>
  <circle cx="459.8" cy="102.3" r="10.1" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <circle cx="500.2" cy="102.3" r="10.1" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <text x="480.0" y="130.4" text-anchor="middle" font-size="12" fill="#a9b4c2">cable tie</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 51 × 42&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>6.00</td><td>12.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>46.00</td><td>12.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>6.00</td><td>32.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>46.00</td><td>32.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>–</td><td>23.00</td><td>3.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
    <tr><td>–</td><td>28.00</td><td>3.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Board values come from the silk screen.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Supply from cable</td><td>Receiver</td><td>3.7 V</td><td>5 V</td><td>5.25 V</td><td>Board silk</td></tr>
    <tr><td>3.3 V output current</td><td>Receiver</td><td>—</td><td>—</td><td>50 mA</td><td>Board silk</td></tr>
    <tr><td>5 V output current</td><td>Receiver</td><td>—</td><td>—</td><td>135 mA</td><td>Board silk</td></tr>
    <tr><td>Emitter 5 V output</td><td>Cable feed</td><td>—</td><td>—</td><td>0.2 A</td><td>Board silk</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: datasheets {#datasheets}

The first page of each important chip&rsquo;s datasheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/long-distance-extender/datasheets/thvd1451.pdf"><img src="/images/extensions/long-distance-extender/datasheets/thvd1451-page1.png" alt="First page of the THVD1451 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/long-distance-extender/datasheets/thvd1451.pdf">THVD1451 3.3 V to 5 V RS-485 transceiver, full duplex</a> — Texas Instruments, 54 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/long-distance-extender/datasheets/sn74lvc3g14.pdf"><img src="/images/extensions/long-distance-extender/datasheets/sn74lvc3g14-page1.png" alt="First page of the SN74LVC3G14 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/long-distance-extender/datasheets/sn74lvc3g14.pdf">SN74LVC3G14 triple Schmitt-trigger inverter</a> — Texas Instruments, 21 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/long-distance-extender/datasheets/tps25947.pdf"><img src="/images/extensions/long-distance-extender/datasheets/tps25947-page1.png" alt="First page of the TPS259470A datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/long-distance-extender/datasheets/tps25947.pdf">TPS25947xx eFuse with reverse current blocking</a> — Texas Instruments, 75 pages.</figcaption>
</figure>
{:/nomarkdown}


See all boards on the [extension boards](/extension-boards) page.
