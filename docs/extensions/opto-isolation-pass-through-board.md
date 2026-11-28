---
layout: default
title: "Opto-Isolation pass-through board"
description: "A galvanically isolated SPI and control port: six signals out, one back, with isolated power for the far side."
permalink: /extensions/opto-isolation-pass-through-board
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Signal interfaces</p>
    <h1 id="opto-isolation-pass-through-board">Opto-Isolation pass-through board</h1>
    <p class="xb-lead">Put an isolation barrier between your controller and a peripheral. Six signals cross outward, one comes back, and the board makes the isolated supply for the far side itself, so the two grounds never meet.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/opto-isolation-pass-through-board/v20/opto-isolation-pass-through-board-diagram.webp" alt="Top view of the isolation board: a ten-contact host socket at the left, a ten-contact isolated socket at the right and two isolator chips between them.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>6 + 1</b><span>signals out and back</span></div>
  <div class="xb-stat"><b>60 V DC</b><span>functional isolation at most</span></div>
  <div class="xb-stat"><b>4 MHz</b><span>maximum signal rate</span></div>
  <div class="xb-stat"><b>30 mA</b><span>isolated supply at most</span></div>
  <div class="xb-stat"><b>3.3 / 5 V</b><span>isolated logic level</span></div>
  <div class="xb-stat"><b>40 × 38</b><span>millimetres</span></div>
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
  Functional isolation only, for at most 60&nbsp;V DC across the barrier. It is not safety isolation and must never separate mains from anything. Never join host ground and isolated ground, use nylon mounting hardware, and do not hot-plug.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>Isolated fixed-direction SPI and control port</td></tr>
    <tr><td>Isolators</td><td><a href="/images/extensions/opto-isolation-pass-through-board/datasheets/isow7741.pdf">ISOW7741</a> (CS, MOSI, SCK out, MISO back, plus isolated power) and <a href="/images/extensions/opto-isolation-pass-through-board/datasheets/iso7730.pdf">ISO7730</a> (IO3, IO4, IO5 out)</td></tr>
    <tr><td>Host side</td><td>J1, ten-contact socket; 3.3&nbsp;V logic, 5&nbsp;V for the isolated supply through JP1</td></tr>
    <tr><td>Isolated side</td><td>J2, ten-contact socket with its own ground</td></tr>
    <tr><td>Isolated logic level</td><td>3.3&nbsp;V or 5&nbsp;V, chosen by JP4</td></tr>
    <tr><td>Return signal</td><td>MISO through a 74LVC1G125 buffer, enabled by chip select or always (JP5)</td></tr>
    <tr><td>Protection</td><td><a href="/images/extensions/opto-isolation-pass-through-board/datasheets/tpd4e1u06.pdf">TPD4E1U06</a> arrays on the J2 signals; ferrite beads on the supplies</td></tr>
    <tr><td>Lights</td><td>Host 3.3&nbsp;V power (D1) and isolated 3.3&nbsp;V power (D2), each with a link that disables it</td></tr>
    <tr><td>Size</td><td>40 &times; 38&nbsp;mm, two M3 holes</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/opto-isolation-pass-through-board/v20/opto-isolation-pass-through-board-diagram.webp" alt="Top view of the isolation board with numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:10.3%;top:40.0%" aria-label="1: Host socket (J1)">1<span class="xb-pop"><b>Host socket (J1)</b> — host rails, six outgoing signals, the MISO return and host ground.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-2" style="left:89.4%;top:40.0%" aria-label="2: Isolated socket (J2)">2<span class="xb-pop"><b>Isolated socket (J2)</b> — the isolated rails, signals and isolated ground.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:49.8%;top:67.5%" aria-label="3: Isolator with power (U1)">3<span class="xb-pop"><b>Isolator with power (U1)</b> — an ISOW7741: carries CS, MOSI, SCK and MISO and generates the isolated supply.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:49.8%;top:36.4%" aria-label="4: Three-channel isolator (U2)">4<span class="xb-pop"><b>Three-channel isolator (U2)</b> — an ISO7730 carrying IO3, IO4 and IO5 outward.</span></a>
      <a class="xb-mk xb-pl" href="#tour-5" style="left:22.7%;top:72.8%" aria-label="5: MISO buffer (U6)">5<span class="xb-pop"><b>MISO buffer (U6)</b> — drives the returned data onto the host contact.</span></a>
      <a class="xb-mk xb-pl" href="#tour-6" style="left:11.8%;top:64.2%" aria-label="6: 5 V feed link (JP1)">6<span class="xb-pop"><b>5 V feed link (JP1)</b> — host 5&nbsp;V to the isolated supply.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:76.0%;top:55.0%" aria-label="7: Logic level link (JP4)">7<span class="xb-pop"><b>Logic level link (JP4)</b> — isolated logic at 3.3&nbsp;V or 5&nbsp;V.</span></a>
      <a class="xb-mk xb-pl" href="#tour-8" style="left:11.5%;top:73.8%" aria-label="8: MISO enable link (JP5)">8<span class="xb-pop"><b>MISO enable link (JP5)</b> — return driven only while chip select is active, or always.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-9" style="left:92.7%;top:16.2%" aria-label="9: Isolated 5 V output link (JP2)">9<span class="xb-pop"><b>Isolated 5 V output link (JP2)</b> — connects the isolated 5&nbsp;V to J2.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-10" style="left:84.4%;top:16.2%" aria-label="10: Isolated 3.3 V output link (JP3)">10<span class="xb-pop"><b>Isolated 3.3 V output link (JP3)</b> — connects the isolated 3.3&nbsp;V to J2.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-11" style="left:8.9%;top:15.5%" aria-label="11: Host power light">11<span class="xb-pop"><b>Host power light</b> — host 3.3&nbsp;V present.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-12" style="left:89.8%;top:8.2%" aria-label="12: Isolated power light">12<span class="xb-pop"><b>Isolated power light</b> — isolated 3.3&nbsp;V present.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host socket (J1)</b> — host rails, six outgoing signals, the MISO return and host ground.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Isolated socket (J2)</b> — the isolated rails, signals and isolated ground.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Isolator with power (U1)</b> — an <a href="/images/extensions/opto-isolation-pass-through-board/datasheets/isow7741.pdf">ISOW7741</a>: carries CS, MOSI, SCK and MISO and generates the isolated supply.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Three-channel isolator (U2)</b> — an <a href="/images/extensions/opto-isolation-pass-through-board/datasheets/iso7730.pdf">ISO7730</a> carrying IO3, IO4 and IO5 outward.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>MISO buffer (U6)</b> — drives the returned data onto the host contact.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>5 V feed link (JP1)</b> — host 5&nbsp;V to the isolated supply.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Logic level link (JP4)</b> — isolated logic at 3.3&nbsp;V or 5&nbsp;V.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>MISO enable link (JP5)</b> — return driven only while chip select is active, or always.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Isolated 5 V output link (JP2)</b> — connects the isolated 5&nbsp;V to J2.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Isolated 3.3 V output link (JP3)</b> — connects the isolated 3.3&nbsp;V to J2.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Host power light</b> — host 3.3&nbsp;V present.</div></li>
    <li id="tour-12"><span class="xb-n">12</span><div><b>Isolated power light</b> — isolated 3.3&nbsp;V present.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

### Lights {#lights}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th>Lit means</th><th>Disable it</th></tr></thead>
  <tbody>
    <tr><td>D1, green</td><td>Host-side 3.3&nbsp;V present</td><td>—</td></tr>
    <tr><td>D2, green</td><td>Isolated 3.3&nbsp;V present</td><td>—</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Pinout {#pinout}

Both sockets use the same contact numbers.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>J1 (host)</th><th>J2 (isolated)</th><th>Direction</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td><span class="xb-pill xb-p-3v3">3.3 V isolated</span> through JP3</td><td>—</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td><span class="xb-pill xb-p-5v">5 V isolated</span> through JP2</td><td>—</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">IO3</span></td><td><span class="xb-pill xb-p-sig">IO3</span></td><td>Host to isolated</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">IO4</span></td><td><span class="xb-pill xb-p-sig">IO4</span></td><td>Host to isolated</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">IO5</span></td><td><span class="xb-pill xb-p-sig">IO5</span></td><td>Host to isolated</td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">CS</span></td><td><span class="xb-pill xb-p-sig">CS</span></td><td>Host to isolated</td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-sig">MOSI</span></td><td><span class="xb-pill xb-p-sig">MOSI</span></td><td>Host to isolated</td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">MISO</span></td><td><span class="xb-pill xb-p-sig">MISO</span></td><td>Isolated to host</td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">SCK</span></td><td><span class="xb-pill xb-p-sig">SCK</span></td><td>Host to isolated</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">Host ground</span></td><td><span class="xb-pill xb-p-gnd">Isolated ground</span></td><td>Separate</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Solder links

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>Effect</th><th>Setting for the first test</th></tr></thead>
  <tbody>
    <tr><td>JP1 (5V FEED)</td><td>Host 5&nbsp;V to the isolated supply</td><td>Bridged</td></tr>
    <tr><td>JP2 (5V OUT)</td><td>Isolated 5&nbsp;V to J2 contact 2</td><td>Bridged</td></tr>
    <tr><td>JP3 (3V3 OUT)</td><td>Isolated 3.3&nbsp;V to J2 contact 1</td><td>Bridged</td></tr>
    <tr><td>JP4 (LOGIC)</td><td>1&ndash;2 isolated logic 3.3&nbsp;V, 2&ndash;3 isolated logic 5&nbsp;V</td><td>1&ndash;2</td></tr>
    <tr><td>JP5 (MISO)</td><td>1&ndash;2 return enabled by chip select, 2&ndash;3 always enabled</td><td>1&ndash;2</td></tr>
    <tr><td>JP6, JP7</td><td>Cut to switch off light D1 or D2</td><td>Bridged</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Cut JP2 and JP3 when the peripheral has its own supply. Check the bridges on your board before powering it.

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>With nylon screws and spacers.</span></div>
  <div class="xb-card"><b>Five leads</b><span>From the Prime GF header to J1.</span></div>
  <div class="xb-card"><b>A multimeter</b><span>DC volts, high input impedance.</span></div>
  <div class="xb-card"><b>For your peripheral</b><span>Its logic level, current draw and signal rate.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

This first test switches one signal across the barrier and reads it on the isolated side with a meter. Nothing else is connected to J2.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 696" role="img" aria-labelledby="xb-opto-isolation-pass-through-board-wire"><title id="xb-opto-isolation-pass-through-board-wire">Wiring: controller contact 1 to J1 contact 1; controller contact 2 to J1 contact 2; controller contact 3 to J1 contact 3; controller contact 6 to J1 contact 6; controller contact 10 to J1 contact 10; J2 contact 3 to probe, isolated IO3; J2 contact 10 to common, isolated ground.</title><image href="/images/extensions/opto-isolation-pass-through-board/v20/opto-isolation-pass-through-board-diagram.webp" x="379" y="14" width="241" height="230"/><circle cx="404" cy="106" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="385" y="125" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="404" y="139" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J1</text><circle cx="595" cy="106" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="576" y="125" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="595" y="139" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J2</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Prime header GF/J37</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J1 on this board</text><rect x="30" y="304" width="200" height="180" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="130" y="390" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Smoothieboard</text><text x="130" y="410" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">V2 Prime</text><rect x="770" y="304" width="200" height="180" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 334.0H770" fill="none" stroke="#d92d2d" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="334" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="334" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><text x="216" y="339" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">1</text><text x="784" y="339" text-anchor="start" font-size="14" fill="#eaeaea">1  3.3 V</text><rect x="400" y="323" width="200" height="22" rx="11" fill="#d92d2d" stroke="#d92d2d" stroke-width="1.5"/><text x="500" y="339" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1 to 1: 3.3 V</text><path d="M230 364.0H770" fill="none" stroke="#e8820c" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="364" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">2</text><text x="784" y="369" text-anchor="start" font-size="14" fill="#eaeaea">2  5 V</text><rect x="400" y="353" width="200" height="22" rx="11" fill="#e8820c" stroke="#e8820c" stroke-width="1.5"/><text x="500" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#111">2 to 2: 5 V</text><path d="M230 394.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">3</text><text x="784" y="399" text-anchor="start" font-size="14" fill="#eaeaea">3  </text><rect x="400" y="383" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">3 to 3</text><path d="M230 424.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="429" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">6</text><text x="784" y="429" text-anchor="start" font-size="14" fill="#eaeaea">6  </text><rect x="400" y="413" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="429" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">6 to 6</text><path d="M230 454.0H770" fill="none" stroke="#939393" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="454" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="454" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><text x="216" y="459" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">10</text><text x="784" y="459" text-anchor="start" font-size="14" fill="#eaeaea">10  GND</text><rect x="400" y="443" width="200" height="22" rx="11" fill="#939393" stroke="#939393" stroke-width="1.5"/><text x="500" y="459" text-anchor="middle" font-size="13" font-weight="700" fill="#111">10 to 10: GND</text><text x="130" y="516" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J2 on this board</text><text x="870" y="516" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Voltmeter</text><rect x="700" y="528" width="270" height="150" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><rect x="835" y="543" width="90" height="120" rx="8" fill="#e5b41f" stroke="#6e560a" stroke-width="1.5"/><rect x="846" y="555" width="68" height="34" rx="3" fill="#b9c8ad" stroke="#40463c" stroke-width="1.5"/><text x="880" y="579" text-anchor="middle" font-size="16" font-weight="700" fill="#14180f">V DC</text><circle cx="880" cy="613" r="17" fill="#303030" stroke="#0d0f12" stroke-width="1.5"/><path d="M880 613.0V599.0" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/><circle cx="862" cy="645" r="7" fill="#c0262c" stroke="#0d0f12" stroke-width="1.5"/><circle cx="898" cy="645" r="7" fill="#262626" stroke="#0d0f12" stroke-width="1.5"/><rect x="30" y="528" width="200" height="150" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 588.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="588" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="588" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="593" text-anchor="end" font-size="14" fill="#eaeaea">  3</text><text x="712" y="593" text-anchor="start" font-size="13" fill="#eaeaea">probe</text><rect x="340" y="577" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="593" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">3: probe, isolated IO3</text><path d="M230 618.0H700" fill="none" stroke="#939393" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="618" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="618" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><text x="216" y="623" text-anchor="end" font-size="14" fill="#eaeaea">  10</text><text x="712" y="623" text-anchor="start" font-size="13" fill="#eaeaea">common</text><rect x="340" y="607" width="220" height="22" rx="11" fill="#939393" stroke="#939393" stroke-width="1.5"/><text x="450" y="623" text-anchor="middle" font-size="13" font-weight="700" fill="#111">10: common, isolated ground</text></svg>
  </div>
  <figcaption>Wiring for this procedure. Yellow rings mark the connectors used. Make and change connections with the power off. Equipment is drawn as a typical unit, not a specific model.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Check the links with the power off</h3>
    <p>JP1, JP2 and JP3 bridged, JP4 and JP5 on pads 1&ndash;2.</p>
  </li>
  <li class="xb-step">
    <h3>Wire the host side</h3>
    <p>Connect Prime GF/J37 contacts 1, 2, 3, 6 and 10 to the same contacts of J1.</p>
    <p class="xb-expect">The host power light comes on when the Prime is powered.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the meter</h3>
    <p>Probe on J2 contact 3 (isolated IO3), common on J2 contact 10 (isolated ground). Do not connect the meter or any other equipment between the two grounds.</p>
  </li>
  <li class="xb-step">
    <h3>Switch the output</h3>
    <p>Add the configuration below and send <code>M43.18</code>, <code>M42.18</code>, <code>M43.18</code>.</p>
    <p class="xb-expect">Near 0&nbsp;V, then near 3.3&nbsp;V, then near 0&nbsp;V again.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Drive an isolated output</td><td><a href="/switch">Switch</a>, digital output</td><td><a href="#config-main">Setup</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Setup {#config-main}

The isolators need no driver. For the test above:

```ini
[switch]
iso_test.enable = true
iso_test.output_pin = PB1
iso_test.output_type = digital
iso_test.input_on_command = M42
iso_test.input_off_command = M43
iso_test.subcode = 18
iso_test.startup_state = false
iso_test.halt_set_to = false
```

The [switch module](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/switch/Switch.cpp) starts this output LOW and returns it LOW on a software halt. That is not a hardware safety function, and it does not define the level during reset or power-up. Check that nothing else uses PB1 or M42.18 and M43.18.

For SPI use, configure the peripheral exactly as without the board, at 4&nbsp;MHz or less.

## How it works {#how-it-works}

The <a href="/images/extensions/opto-isolation-pass-through-board/datasheets/iso7730.pdf">ISO7730</a> and <a href="/images/extensions/opto-isolation-pass-through-board/datasheets/isow7741.pdf">ISOW7741</a> pass each signal across an insulating barrier in one fixed direction, so the board cannot be used as a reversible seven-bit port, and open-drain buses such as I2C do not work through it. The <a href="/images/extensions/opto-isolation-pass-through-board/datasheets/isow7741.pdf">ISOW7741</a> also transfers power across the barrier; an AP2112K regulator derives the isolated 3.3&nbsp;V from the isolated 5&nbsp;V.

Isolation lasts only as long as nothing else joins the two sides: a shared supply, a grounded oscilloscope probe, a metal screw or a cable shield connected at both ends all defeat it.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 270" role="img" aria-labelledby="xb-opto-isolation-pass-through-board-path"><title id="xb-opto-isolation-pass-through-board-path">Host signals then ISO7730 and ISOW7741, fixed direction across barrier then Isolated signals. Host power then ISOW7741 power transfer then AP2112K, isolated 3.3 V.</title><rect x="46" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="186" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Host signals</text><text x="186" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><rect x="360" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">ISO7730 and ISOW7741</text><text x="500" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3">fixed direction across barrier</text><path d="M330.0 70H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 63L358 70L349 77Z" fill="#5fb3ff"/><rect x="674" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="814" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Isolated signals</text><text x="814" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M644.0 70H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 63L672 70L663 77Z" fill="#5fb3ff"/><rect x="46" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="186" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Host power</text><text x="186" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><rect x="360" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="500" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">ISOW7741 power transfer</text><text x="500" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M330.0 198H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 191L358 198L349 205Z" fill="#5fb3ff"/><rect x="674" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="814" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">AP2112K</text><text x="814" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3">isolated 3.3 V</text><path d="M644.0 198H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 191L672 198L663 205Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board, one path per row.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Isolated light off</td><td>Host 5&nbsp;V, JP1, and the load on the isolated rails (30&nbsp;mA at most).</td></tr>
    <tr><td>No data back on MISO</td><td>JP5: with 1&ndash;2 the return is driven only while chip select is active.</td></tr>
    <tr><td>Peripheral sees the wrong level</td><td>JP4 selects 3.3&nbsp;V or 5&nbsp;V isolated logic.</td></tr>
    <tr><td>SPI errors</td><td>Lower the clock; stay at 4&nbsp;MHz or below and keep cables short.</td></tr>
    <tr><td>The grounds measure connected</td><td>Remove external ties: cable shields, metal hardware, shared supplies or instruments.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/opto-isolation-pass-through-board/v20/opto-isolation-pass-through-board-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/opto-isolation-pass-through-board/v20/opto-isolation-pass-through-board-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/opto-isolation-pass-through-board/v20/opto-isolation-pass-through-board-diagram.webp">Board drawing (WebP)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-oi-mount-t">
  <title id="xb-oi-mount-t">Mounting drawing of the oi, component side: outline 40 by 38 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="301.1" y="78.0" width="357.9" height="340.0" rx="8.9" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M301.1 56H658.9"/><path d="M301.1 50V62"/><path d="M658.9 50V62"/><path d="M684.9 78.0V418.0"/><path d="M678.9 78.0h12"/><path d="M678.9 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">40</text>
  <text x="696.9" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">38</text>
  <circle cx="301.1" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="289.1" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M243.1 104.0h30" fill="none"/><path d="M277.1 104.0l-8 -4v8z"/><path d="M243.1 104.0v30" fill="none"/><path d="M243.1 138.0l-4 -8h8z"/></g>
  <text x="281.1" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="239.1" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="372.6" cy="122.7" r="14.3" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M354.3 122.7h36.6M372.6 104.4v36.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="358.3" y="157.1" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  8.00, 5.00</text>
  <circle cx="551.6" cy="122.7" r="14.3" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M533.3 122.7h36.6M551.6 104.4v36.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="565.9" y="157.1" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  28.00, 5.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 40 × 38&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>8.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>28.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Board values come from the silk screen.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Voltage across the barrier</td><td>Host to isolated</td><td>—</td><td>—</td><td>60 V DC</td><td>Board silk: functional isolation only</td></tr>
    <tr><td>Signal rate</td><td>All channels</td><td>—</td><td>—</td><td>4 MHz</td><td>Board silk</td></tr>
    <tr><td>Isolated supply current</td><td>J2 rails together</td><td>—</td><td>—</td><td>30 mA</td><td>Board silk</td></tr>
    <tr><td>Isolated logic level</td><td>J2 signals</td><td>—</td><td>3.3 or 5 V</td><td>—</td><td>Selected by JP4</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: datasheets {#datasheets}

The first page of each important chip&rsquo;s datasheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/opto-isolation-pass-through-board/datasheets/isow7741.pdf"><img src="/images/extensions/opto-isolation-pass-through-board/datasheets/isow7741-page1.png" alt="First page of the ISOW7741 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/opto-isolation-pass-through-board/datasheets/isow7741.pdf">ISOW774x isolator with integrated power converter</a> — Texas Instruments, 66 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/opto-isolation-pass-through-board/datasheets/iso7730.pdf"><img src="/images/extensions/opto-isolation-pass-through-board/datasheets/iso7730-page1.png" alt="First page of the ISO7730 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/opto-isolation-pass-through-board/datasheets/iso7730.pdf">ISO773x triple-channel digital isolator</a> — Texas Instruments, 49 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/opto-isolation-pass-through-board/datasheets/tpd4e1u06.pdf"><img src="/images/extensions/opto-isolation-pass-through-board/datasheets/tpd4e1u06-page1.png" alt="First page of the TPD4E1U06 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/opto-isolation-pass-through-board/datasheets/tpd4e1u06.pdf">TPD4E1U06 quad-channel ESD protection device</a> — Texas Instruments, 27 pages.</figcaption>
</figure>
{:/nomarkdown}


See all boards on the [extension boards](/extension-boards) page.
