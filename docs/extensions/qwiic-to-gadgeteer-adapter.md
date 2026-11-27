---
layout: default
title: "Qwiic-to-Gadgeteer adapter"
description: "A passive adapter from a ten-contact Gadgeteer I²C socket to two 3.3 V Qwiic ports, with a chain socket."
permalink: /extensions/qwiic-to-gadgeteer-adapter
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Bus adapters</p>
    <h1 id="qwiic-to-gadgeteer-adapter">Qwiic-to-Gadgeteer adapter</h1>
    <p class="xb-lead">Plug 3.3&nbsp;V Qwiic sensors and modules into one controller I&sup2;C bus. Two Qwiic ports share the bus, and a second ten-contact socket passes it on.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/qwiic-to-gadgeteer-adapter/v20/qwiic-to-gadgeteer-adapter-diagram.png" alt="Top view of the Qwiic-to-Gadgeteer adapter.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>2 ports</b><span>Qwiic</span></div>
  <div class="xb-stat"><b>3.3 V</b><span>from the host</span></div>
  <div class="xb-stat"><b>1 bus</b><span>shared I²C</span></div>
  <div class="xb-stat"><b>7 links</b><span>cuttable chain contacts</span></div>
  <div class="xb-stat"><b>Passive</b><span>no chips</span></div>
  <div class="xb-stat"><b>38.5 × 36</b><span>millimetres</span></div>
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
</nav>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  3.3&nbsp;V only, and no hot-plugging. Use one powered host and no external Qwiic supply. The adapter is passive: it does not add Smoothieware support for the device you plug in.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>Connect Qwiic I&sup2;C peripherals to a controller</td></tr>
    <tr><td>Host</td><td>J1, ten-contact socket: 3.3&nbsp;V on 1, SDA on 8, SCL on 9, ground on 10</td></tr>
    <tr><td>Qwiic ports</td><td>J3 and J4 in parallel: ground, 3.3&nbsp;V, SDA, SCL</td></tr>
    <tr><td>Chain</td><td>J2; contacts 3 to 9 linked through SJ3 to SJ9</td></tr>
    <tr><td>5 V</td><td>Passes from J1 to J2 only; never reaches the Qwiic ports</td></tr>
    <tr><td>Test pads</td><td>3.3&nbsp;V, 5&nbsp;V, SDA, SCL and ground, for measurement only</td></tr>
    <tr><td>Size</td><td>38.5 &times; 36&nbsp;mm, four M3 holes, two cable-tie points</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
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
      <img src="/images/extensions/qwiic-to-gadgeteer-adapter/v20/qwiic-to-gadgeteer-adapter-diagram.png" alt="Top view of the Qwiic-to-Gadgeteer adapter with numbered markers explained in the list below.">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:26.9%;top:34.1%" aria-label="1: Host socket (J1)">1<span class="xb-pop"><b>Host socket (J1)</b> — connects to the controller.</span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:75.8%;top:34.1%" aria-label="2: Chain socket (J2)">2<span class="xb-pop"><b>Chain socket (J2)</b> — passes rails and linked signals on.</span></a>
      <a class="xb-mk xb-pl" href="#tour-3" style="left:22.0%;top:86.8%" aria-label="3: Qwiic port J3">3<span class="xb-pop"><b>Qwiic port J3</b> — ground, 3.3&nbsp;V, SDA, SCL.</span></a>
      <a class="xb-mk xb-pr" href="#tour-4" style="left:80.7%;top:86.8%" aria-label="4: Qwiic port J4">4<span class="xb-pop"><b>Qwiic port J4</b> — the same bus as J3.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:26.9%;top:49.9%" aria-label="5: Chain links SJ3 to SJ7">5<span class="xb-pop"><b>Chain links SJ3 to SJ7</b> — copper links for host contacts 3 to 7; cut to disconnect.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:68.4%;top:49.9%" aria-label="6: SDA chain link (SJ8)">6<span class="xb-pop"><b>SDA chain link (SJ8)</b> — cut to keep SDA off the chain socket.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-7" style="left:76.8%;top:49.9%" aria-label="7: SCL chain link (SJ9)">7<span class="xb-pop"><b>SCL chain link (SJ9)</b> — cut to keep SCL off the chain socket.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:29.3%;top:15.7%" aria-label="8: Cable-tie point">8<span class="xb-pop"><b>Cable-tie point</b> — strain relief for the cables.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-9" style="left:14.6%;top:13.1%" aria-label="9: Mounting hole">9<span class="xb-pop"><b>Mounting hole</b> — one of four M3 holes.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host socket (J1)</b> — connects to the controller.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket (J2)</b> — passes rails and linked signals on.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Qwiic port J3</b> — ground, 3.3&nbsp;V, SDA, SCL.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Qwiic port J4</b> — the same bus as J3.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Chain links SJ3 to SJ7</b> — copper links for host contacts 3 to 7; cut to disconnect.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>SDA chain link (SJ8)</b> — cut to keep SDA off the chain socket.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>SCL chain link (SJ9)</b> — cut to keep SCL off the chain socket.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Cable-tie point</b> — strain relief for the cables.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Mounting hole</b> — one of four M3 holes.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1 and J2: ten-contact sockets

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>J1, host</th><th>J2, chain</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td><span class="xb-pill xb-p-5v">5 V</span></td></tr>
    <tr><td>3 to 7</td><td>Passed on through SJ3 to SJ7</td><td>Linked contacts</td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">SDA</span></td><td>SDA through SJ8</td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">SCL</span></td><td>SCL through SJ9</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J3 and J4: Qwiic ports

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">SDA</span></td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">SCL</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

All links SJ3 to SJ9 are closed as delivered. Cable colours in the Qwiic system are black, red, blue and yellow for contacts 1 to 4 ([SparkFun Qwiic](https://www.sparkfun.com/qwiic)).

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>Plus four leads to the controller.</span></div>
  <div class="xb-card"><b>A Qwiic device</b><span>3.3 V, with a Qwiic cable.</span></div>
  <div class="xb-card"><b>Software for the device</b><span>Check that something can actually read it.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

This wires the adapter to the I&sup2;C2 bus on Smoothieboard V2 Prime header GG/J38.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 666" role="img" aria-labelledby="xb-qwiic-to-gadgeteer-adapter-wire"><title id="xb-qwiic-to-gadgeteer-adapter-wire">Wiring: controller contact 1 to J1 contact 1; controller contact 8 to J1 contact 8; controller contact 9 to J1 contact 9; controller contact 10 to J1 contact 10; J3 contact 1 to Qwiic cable.</title><image href="/images/extensions/qwiic-to-gadgeteer-adapter/v20/qwiic-to-gadgeteer-adapter-diagram.png" x="376" y="14" width="247" height="230"/><circle cx="443" cy="92" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="424" y="111" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="443" y="125" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J1</text><circle cx="431" cy="214" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="412" y="233" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="431" y="247" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J3</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Prime header GG/J38</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J1 on this board</text><rect x="30" y="304" width="200" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="130" y="375" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Smoothieboard</text><text x="130" y="395" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">V2 Prime</text><rect x="770" y="304" width="200" height="150" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 334.0H770" fill="none" stroke="#d92d2d" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="334" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="334" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><text x="216" y="339" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">1</text><text x="784" y="339" text-anchor="start" font-size="14" fill="#e6ebf2">1  3.3 V</text><rect x="400" y="323" width="200" height="22" rx="11" fill="#d92d2d" stroke="#d92d2d" stroke-width="1.5"/><text x="500" y="339" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1 to 1: 3.3 V</text><path d="M230 364.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">8</text><text x="784" y="369" text-anchor="start" font-size="14" fill="#e6ebf2">8  </text><rect x="400" y="353" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">8 to 8</text><path d="M230 394.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">9</text><text x="784" y="399" text-anchor="start" font-size="14" fill="#e6ebf2">9  </text><rect x="400" y="383" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">9 to 9</text><path d="M230 424.0H770" fill="none" stroke="#8b949e" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="424" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="424" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><text x="216" y="429" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">10</text><text x="784" y="429" text-anchor="start" font-size="14" fill="#e6ebf2">10  GND</text><rect x="400" y="413" width="200" height="22" rx="11" fill="#8b949e" stroke="#8b949e" stroke-width="1.5"/><text x="500" y="429" text-anchor="middle" font-size="13" font-weight="700" fill="#111">10 to 10: GND</text><text x="130" y="486" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J3 on this board</text><text x="870" y="486" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Qwiic device</text><rect x="700" y="498" width="270" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><rect x="815" y="523" width="130" height="100" rx="8" fill="#20365c" stroke="#7fa6e0" stroke-width="1.5"/><rect x="858" y="553" width="44" height="40" rx="3" fill="#14171c" stroke="#8b949e" stroke-width="1.5"/><circle cx="828" cy="539" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="556" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="573" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="590" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="607" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="930" cy="537" r="6" fill="#0d0f12" stroke="#c4cad3" stroke-width="1.5"/><circle cx="930" cy="609" r="6" fill="#0d0f12" stroke="#c4cad3" stroke-width="1.5"/><rect x="908" y="567" width="18" height="10" rx="1" fill="#c9a66b" stroke="#c9a66b" stroke-width="1.5"/><rect x="30" y="498" width="200" height="150" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 573.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="573" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="573" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="578" text-anchor="end" font-size="14" fill="#e6ebf2">  1</text><text x="712" y="578" text-anchor="start" font-size="13" fill="#e6ebf2">Qwiic cable</text><rect x="340" y="562" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="578" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1: Qwiic cable</text></svg>
  </div>
  <figcaption>Wiring for this procedure. Yellow rings mark the connectors used. Make and change connections with the power off. Equipment is drawn as a typical unit, not a specific model.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Disconnect power</h3>
    <p>Check the Prime GG/J38 contact numbering before connecting.</p>
  </li>
  <li class="xb-step">
    <h3>Wire four leads</h3>
    <p>J38 contacts 1, 8, 9 and 10 to J1 contacts with the same numbers. Leave the 5&nbsp;V contact unconnected.</p>
  </li>
  <li class="xb-step">
    <h3>Plug in the device</h3>
    <p>Connect its Qwiic cable to J3 or J4.</p>
  </li>
  <li class="xb-step">
    <h3>Check addresses and current</h3>
    <p>Two devices must not share an address, pull-up resistors act in parallel, and the total current must stay within the controller&rsquo;s 3.3&nbsp;V limits.</p>
  </li>
  <li class="xb-step">
    <h3>Power up and measure</h3>
    <p>Measure between the 3.3&nbsp;V and ground test pads.</p>
    <p class="xb-expect">About 3.3&nbsp;V on the 3.3&nbsp;V pad.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Wire an I²C peripheral</td><td>None needed for the adapter</td><td><a href="#config-main">Setup</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Setup {#config-main}

The adapter needs no configuration. Smoothieware has no general-purpose I&sup2;C module, so a device works only if Smoothieware has a driver for it. For example, there is no AS7265x spectral sensor driver in Smoothieware V2.

## How it works {#how-it-works}

The board is copper only: J1, J3 and J4 share the same 3.3&nbsp;V, SDA, SCL and ground nets. J2 receives 3.3&nbsp;V, 5&nbsp;V and ground directly and the other contacts through the cut links. It does not translate levels, add pull-ups to the bus or create a second I&sup2;C controller.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 270" role="img" aria-labelledby="xb-qwiic-to-gadgeteer-adapter-path"><title id="xb-qwiic-to-gadgeteer-adapter-path">J1 3.3 V, SDA, SCL, ground then Copper only, no pull-ups or translation then J3 and J4 Qwiic sockets. J1 then Cut links then J2.</title><rect x="46" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="186" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">J1 3.3 V, SDA, SCL, ground</text><text x="186" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="360" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Copper only</text><text x="500" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2">no pull-ups or translation</text><path d="M330.0 70H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 63L358 70L349 77Z" fill="#5fb3ff"/><rect x="674" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="814" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">J3 and J4 Qwiic sockets</text><text x="814" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M644.0 70H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 63L672 70L663 77Z" fill="#5fb3ff"/><rect x="46" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="186" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">J1</text><text x="186" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="360" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="500" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Cut links</text><text x="500" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M330.0 198H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 191L358 198L349 205Z" fill="#5fb3ff"/><rect x="674" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="814" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">J2</text><text x="814" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M644.0 198H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 191L672 198L663 205Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board, one path per row.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Device not seen</td><td>Swap check: SDA on contact 8, SCL on contact 9, common ground.</td></tr>
    <tr><td>Two devices conflict</td><td>They need different addresses.</td></tr>
    <tr><td>Bus unreliable</td><td>Shorten cables and count the pull-up resistors in parallel.</td></tr>
    <tr><td>Chain board sees nothing</td><td>Check that its links SJ3 to SJ9 are still closed.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/qwiic-to-gadgeteer-adapter/v20/qwiic-to-gadgeteer-adapter-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/qwiic-to-gadgeteer-adapter/v20/qwiic-to-gadgeteer-adapter-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/qwiic-to-gadgeteer-adapter/v20/qwiic-to-gadgeteer-adapter-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-qw-mount-t">
  <title id="xb-qw-mount-t">Mounting drawing of the qw, component side: outline 38.5 by 36 millimetres with 4 mounting holes and 2 cable-tie holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="298.2" y="78.0" width="363.6" height="340.0" rx="9.4" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M298.2 56H661.8"/><path d="M298.2 50V62"/><path d="M661.8 50V62"/><path d="M687.8 78.0V418.0"/><path d="M681.8 78.0h12"/><path d="M681.8 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">38.5</text>
  <text x="699.8" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">36</text>
  <circle cx="298.2" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="286.2" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M240.2 104.0h30" fill="none"/><path d="M274.2 104.0l-8 -4v8z"/><path d="M240.2 104.0v30" fill="none"/><path d="M240.2 138.0l-4 -8h8z"/></g>
  <text x="278.2" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="236.2" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="345.4" cy="115.8" r="15.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M326.3 115.8h38.2M345.4 96.7v38.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="330.3" y="158.0" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 4.00</text>
  <circle cx="534.3" cy="115.8" r="15.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M515.2 115.8h38.2M534.3 96.7v38.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="549.4" y="158.0" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  25.00, 4.00</text>
  <circle cx="345.4" cy="304.7" r="15.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M326.3 304.7h38.2M345.4 285.6v38.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="330.3" y="279.6" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 24.00</text>
  <circle cx="534.3" cy="304.7" r="15.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M515.2 304.7h38.2M534.3 285.6v38.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="549.4" y="279.6" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  25.00, 24.00</text>
  <circle cx="402.1" cy="125.2" r="11.8" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <circle cx="449.3" cy="125.2" r="11.8" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <text x="425.7" y="104.4" text-anchor="middle" font-size="12" fill="#a9b4c2">cable tie</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 38.5 × 36&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>4.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>25.00</td><td>4.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>5.00</td><td>24.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>25.00</td><td>24.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>–</td><td>11.00</td><td>5.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
    <tr><td>–</td><td>16.00</td><td>5.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Values come from the silk screen and design files.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Supply and logic</td><td>Qwiic ports</td><td>—</td><td>3.3 V</td><td>—</td><td>Board silk: 3.3 V only, no external power</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
