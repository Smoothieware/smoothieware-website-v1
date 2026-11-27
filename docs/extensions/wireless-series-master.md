---
layout: default
title: "Wireless series master"
description: "A radio controller board with an ATSAMD21 microcontroller and nRF24L01+ module on a Gadgeteer socket, for remote input and output with your own firmware."
permalink: /extensions/wireless-series-master
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Wireless</p>
    <h1 id="wireless-series-master">Wireless series master</h1>
    <p class="xb-lead">The controller-side end of a radio link: an ATSAMD21 microcontroller and an <a href="/images/extensions/wireless-series-master/datasheets/nrf24l01p.pdf">nRF24L01+</a> radio module on one ten-contact socket, with status lights, a pairing button and a programming header.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/wireless-series-master/v14/wireless-series-master-diagram.png" alt="Top view of the Wireless series master.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>2.4 GHz</b><span><a href="/images/extensions/wireless-series-master/datasheets/nrf24l01p.pdf">nRF24L01+</a> radio</span></div>
  <div class="xb-stat"><b>ATSAMD21</b><span>microcontroller</span></div>
  <div class="xb-stat"><b>7 signals</b><span>host contacts 3 to 9</span></div>
  <div class="xb-stat"><b>3 lights</b><span>provision, link, fault</span></div>
  <div class="xb-stat"><b>3.3 V</b><span>only</span></div>
  <div class="xb-stat"><b>46.8 × 31.3</b><span>millimetres</span></div>
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
  Not for safety functions or motion signals. The board needs firmware on both ends of the link; none is included, and Smoothieware has no wireless mode or pairing command. 3.3&nbsp;V only, no hot-plugging.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>Radio master for low-rate remote input and output</td></tr>
    <tr><td>Microcontroller</td><td>ATSAMD21E18A</td></tr>
    <tr><td>Radio</td><td>E01-ML01S module with <a href="/images/extensions/wireless-series-master/datasheets/nrf24l01p.pdf">nRF24L01+</a></td></tr>
    <tr><td>Host</td><td>J1, ten contacts; 3 to 9 reach the board through a bus switch</td></tr>
    <tr><td>Programming</td><td>J2, SWD</td></tr>
    <tr><td>Qwiic</td><td>J3 shares host contacts 8 and 9: use only when they carry I&sup2;C</td></tr>
    <tr><td>Supply</td><td>3.3&nbsp;V from J1 through link SJ1; 5&nbsp;V contact not connected</td></tr>
    <tr><td>Size</td><td>46.8 &times; 31.3&nbsp;mm, two M3 holes</td></tr>
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
      <img src="/images/extensions/wireless-series-master/v14/wireless-series-master-diagram.png" alt="Top view of the Wireless series master with numbered markers explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:17.7%;top:44.9%" aria-label="1: Host socket (J1)">1<span class="xb-pop"><b>Host socket (J1)</b> — supplies the board and carries contacts 3 to 9.</span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:44.3%;top:44.9%" aria-label="2: Microcontroller (U1)">2<span class="xb-pop"><b>Microcontroller (U1)</b> — runs your firmware.</span></a>
      <a class="xb-mk xb-pb" href="#tour-3" style="left:62.4%;top:40.4%" aria-label="3: Radio module (U2)">3<span class="xb-pop"><b>Radio module (U2)</b> — keep metal away from its antenna.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:34.1%;top:21.6%" aria-label="4: Button (SW1)">4<span class="xb-pop"><b>Button (SW1)</b> — for pairing or provisioning in your firmware.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-5" style="left:14.0%;top:5.7%" aria-label="5: Provision light (D1)">5<span class="xb-pop"><b>Provision light (D1)</b> — amber.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-6" style="left:14.0%;top:13.8%" aria-label="6: Link light (D2)">6<span class="xb-pop"><b>Link light (D2)</b> — green.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-7" style="left:14.0%;top:21.9%" aria-label="7: Fault light (D3)">7<span class="xb-pop"><b>Fault light (D3)</b> — red.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:55.2%;top:88.7%" aria-label="8: Programming header (J2)">8<span class="xb-pop"><b>Programming header (J2)</b> — SWD.</span></a>
      <a class="xb-mk xb-pl" href="#tour-9" style="left:15.3%;top:80.3%" aria-label="9: Qwiic port (J3)">9<span class="xb-pop"><b>Qwiic port (J3)</b> — same nets as contacts 8 and 9.</span></a>
      <a class="xb-mk" href="#tour-10" style="left:27.1%;top:67.1%" aria-label="10: Supply link (SJ1)">10<span class="xb-pop"><b>Supply link (SJ1)</b> — feeds the board from the host 3.3&nbsp;V.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host socket (J1)</b> — supplies the board and carries contacts 3 to 9.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Microcontroller (U1)</b> — runs your firmware.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Radio module (U2)</b> — keep metal away from its antenna.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Button (SW1)</b> — for pairing or provisioning in your firmware.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Provision light (D1)</b> — amber.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Link light (D2)</b> — green.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Fault light (D3)</b> — red.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Programming header (J2)</b> — SWD.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Qwiic port (J3)</b> — same nets as contacts 8 and 9.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Supply link (SJ1)</b> — feeds the board from the host 3.3&nbsp;V.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

### Lights {#lights}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th>Lit means</th><th>Disable it</th></tr></thead>
  <tbody>
    <tr><td>D1, amber</td><td>Set by firmware (provisioning)</td><td>Cut JP1</td></tr>
    <tr><td>D2, green</td><td>Set by firmware (link)</td><td>Cut JP3</td></tr>
    <tr><td>D3, red</td><td>Set by firmware (fault)</td><td>Cut JP2</td></tr>
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
    <tr><td>2</td><td>Not connected</td></tr>
    <tr><td>3 to 9</td><td><span class="xb-pill xb-p-sig">Host signals</span>, function set by your firmware</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J2: SWD

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td></tr>
    <tr><td>2</td><td>SWDIO</td></tr>
    <tr><td>3</td><td>SWCLK</td></tr>
    <tr><td>4</td><td>Reset</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J3: Qwiic

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td></tr>
    <tr><td>3</td><td>Host contact 8 (SDA)</td></tr>
    <tr><td>4</td><td>Host contact 9 (SCL)</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>And a matching remote radio node.</span></div>
  <div class="xb-card"><b>An SWD programmer</b><span>To load firmware.</span></div>
  <div class="xb-card"><b>Firmware</b><span>For both ends of the link.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

Bring the board up on the bench before connecting it to a machine.

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Choose one host function</h3>
    <p>Decide what each of contacts 3 to 9 does before wiring; the radio link does not transport arbitrary buses transparently.</p>
  </li>
  <li class="xb-step">
    <h3>Wire with the power off</h3>
    <p>Connect supply, ground and only the contacts your firmware uses.</p>
  </li>
  <li class="xb-step">
    <h3>Load firmware</h3>
    <p>Through J2, at both ends.</p>
  </li>
  <li class="xb-step">
    <h3>Test failures</h3>
    <p>Remove the other node, add interference and reset each side, and check that outputs go to the state you intend.</p>
    <p class="xb-expect">The link and fault lights follow your firmware.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Use the radio link</td><td>Your own firmware; no Smoothieware module</td><td><a href="#config-main">Setup</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Setup {#config-main}

There is no Smoothieware setting for this board. Whatever the controller sees on the contacts must be configured for the function your firmware provides.

## How it works {#how-it-works}

The microcontroller drives the radio module over its own SPI bus and reads or drives host contacts 3 to 9 through an <a href="/images/extensions/wireless-series-master/datasheets/sn74cb3q3245.pdf">SN74CB3Q3245</a> bus switch.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 142" role="img" aria-labelledby="xb-wireless-series-master-path"><title id="xb-wireless-series-master-path">Host contacts 3 to 9 then SN74CB3Q3245 bus switch then Microcontroller then Radio module on its own SPI bus.</title><rect x="20" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="127" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Host contacts 3 to 9</text><text x="127" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="268" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="376" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">SN74CB3Q3245 bus switch</text><text x="376" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M238.5 70H259.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M258 63L266 70L258 77Z" fill="#5fb3ff"/><rect x="517" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="624" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Microcontroller</text><text x="624" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M487.0 70H508.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M506 63L515 70L506 77Z" fill="#5fb3ff"/><rect x="766" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="873" y="56" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Radio module on its own</text><text x="873" y="74" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">SPI bus</text><text x="873" y="94" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M735.5 70H756.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M754 63L764 70L754 77Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>No lights</td><td>Check 3.3&nbsp;V on contact 1 and the SJ1 link.</td></tr>
    <tr><td>No link</td><td>Matching firmware and protocol at both ends; keep the antenna clear of metal.</td></tr>
    <tr><td>I²C fails</td><td>J3 only works when contacts 8 and 9 are used as I&sup2;C.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/wireless-series-master/v14/wireless-series-master-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/wireless-series-master/v14/wireless-series-master-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/wireless-series-master/v14/wireless-series-master-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-wm-mount-t">
  <title id="xb-wm-mount-t">Mounting drawing of the wm, component side: outline 46.8 by 31.3 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="225.8" y="78.0" width="508.4" height="340.0" rx="10.9" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M225.8 56H734.2"/><path d="M225.8 50V62"/><path d="M734.2 50V62"/><path d="M760.2 78.0V418.0"/><path d="M754.2 78.0h12"/><path d="M754.2 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">46.8</text>
  <text x="772.2" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">31.3</text>
  <circle cx="225.8" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="213.8" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M167.8 104.0h30" fill="none"/><path d="M201.8 104.0l-8 -4v8z"/><path d="M167.8 104.0v30" fill="none"/><path d="M167.8 138.0l-4 -8h8z"/></g>
  <text x="205.8" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="163.8" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="381.2" cy="374.5" r="17.4" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M359.8 374.5h42.8M381.2 353.2v42.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="363.8" y="347.2" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  14.30, 27.30</text>
  <circle cx="598.4" cy="374.5" r="17.4" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M577.0 374.5h42.8M598.4 353.2v42.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="615.8" y="347.2" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  34.30, 27.30</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 46.8 × 31.3&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>14.30</td><td>27.30</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>34.30</td><td>27.30</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Values from the design files.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Supply</td><td>J1 contact 1</td><td>—</td><td>3.3 V</td><td>—</td><td>Board silk: 3.3 V only</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: datasheets {#datasheets}

The first page of each important chip&rsquo;s datasheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/wireless-series-master/datasheets/nrf24l01p.pdf"><img src="/images/extensions/wireless-series-master/datasheets/nrf24l01p-page1.png" alt="First page of the nRF24L01+ datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/wireless-series-master/datasheets/nrf24l01p.pdf">nRF24L01+ product specification</a> — Nordic Semiconductor, 78 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/wireless-series-master/datasheets/sn74cb3q3245.pdf"><img src="/images/extensions/wireless-series-master/datasheets/sn74cb3q3245-page1.png" alt="First page of the SN74CB3Q3245 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/wireless-series-master/datasheets/sn74cb3q3245.pdf">SN74CB3Q3245 8-bit FET bus switch</a> — Texas Instruments, 19 pages.</figcaption>
</figure>
{:/nomarkdown}


See all boards on the [extension boards](/extension-boards) page.
