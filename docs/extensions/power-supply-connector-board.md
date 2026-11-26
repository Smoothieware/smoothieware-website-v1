---
layout: default
title: "Power supply connector board"
description: "Mount on an enclosed power supply's terminal strip to get a fused mains inlet, an always-on 5 V output and a main output switched from Smoothieboard V2: pinout, wiring, configuration and troubleshooting."
permalink: /extensions/power-supply-connector-board
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Power</p>
    <h1 id="power-supply-connector-board">Power supply connector board</h1>
    <p class="xb-lead">Turn a bare enclosed power supply into a tidy machine supply. The board sits on the supply's screw-terminal strip, brings mains in through a standard appliance inlet with two fuses, and gives you two outputs: a 5&nbsp;V output that is always on, and a main output that your Smoothieboard switches on and off from G-code.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/power-supply-connector-board/psu-connector-diagram.png" alt="Top view drawing of the power supply connector board: nine gold contacts along the top edge labelled L, N, PE, COM, COM, COM, +V, +V, +V; two fuse holders on the left; a row of status lights across the middle; two green screw terminals and one power connector along the bottom edge.">
    <figcaption>Drawing generated from the board's design files.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>9</b><span>contacts for the supply's terminal strip, 9.5 mm apart</span></div>
  <div class="xb-stat"><b>12–24 V</b><span>DC supply voltage</span></div>
  <div class="xb-stat"><b>5 A</b><span>switched main output</span></div>
  <div class="xb-stat"><b>5 V · 1 A</b><span>always-on output from an on-board converter</span></div>
  <div class="xb-stat"><b>1</b><span>controller pin switches the main output</span></div>
  <div class="xb-stat"><b>102 × 72</b><span>millimetres, four M3 mounting holes</span></div>
</div>

<nav class="xb-nav" aria-label="On this page">
  <a href="#fit">Fitting</a>
  <a href="#specs">Tech specs</a>
  <a href="#tour">Board tour</a>
  <a href="#pinout">Pinout</a>
  <a href="#what-you-need">What you need</a>
  <a href="#get-started">Get started</a>
  <a href="#configuration">Configuration</a>
  <a href="#outputs">Using the outputs</a>
  <a href="#how-it-works">How it works</a>
  <a href="#options">Options</a>
  <a href="#chaining">Chaining</a>
  <a href="#troubleshooting">Troubleshooting</a>
  <a href="#downloads">Downloads</a>
  <a href="#mounting">Mounting</a>
  <a href="#electrical">Electrical</a>
</nav>
{:/nomarkdown}

<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>This board carries mains voltage on exposed metal. Mains voltage can kill.</strong> The whole left third of the board, the three left contacts on the top edge and the solder joints underneath them are live whenever the mains cord is plugged in. Unplug the cord before you touch the board, and wait for the supply to discharge. Mount the board and the supply inside a closed enclosure that cannot be opened while plugged in, connect protective earth, and if you are not trained to work on mains wiring, have a qualified person do it.
</sl-alert>

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Do not connect this board to mains unless a qualified person has reviewed it for electrical safety.</strong> The current, voltage and distance figures on this page are not a safety certification.
</sl-alert>

## How it fits the power supply {#fit}

The board has no cable to the power supply. Its nine top contacts sit on the nine screws of the supply's terminal strip, one contact per screw, with the same 9.5 mm between them.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="How the board lines up with the power supply">
  <svg viewBox="0 0 900 540" role="img" aria-labelledby="xb-psu-fit-t" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
    <title id="xb-psu-fit-t">The terminal end of a typical enclosed power supply above the top edge of the board, drawn to the same scale. Nine dotted lines join each screw of the supply to the board contact directly below it: L to L, N to N, earth to PE, three minus V to three COM, three plus V to three plus V.</title>
    <text x="50" y="20" font-size="14" font-weight="700" fill="#e6ebf2">Power supply, terminal end</text><text x="300" y="20" font-size="13" fill="#a9b4c2">a typical unit, not a specific model</text>
    <svg x="50" y="30" width="805" height="224" viewBox="0 30 115 32"><image href="/images/extensions/equipment/bar-power-supply-9-terminal.png" width="115" height="62"/></svg>
    <svg x="36" y="330" width="728" height="175" viewBox="-0.975 -0.8714 104 25"><image href="/images/extensions/power-supply-connector-board/psu-connector-diagram.png" x="-0.975" y="-0.8714" width="104" height="77.5"/></svg>
    <path d="M113.0 214V352" stroke="#ff5252" stroke-width="3" stroke-dasharray="1 7" stroke-linecap="round"/><circle cx="113.0" cy="199.4" r="5" fill="none" stroke="#ff5252" stroke-width="2.5"/><circle cx="113.0" cy="365" r="5" fill="none" stroke="#ff5252" stroke-width="2.5"/><rect x="91.0" y="262" width="44" height="40" rx="6" fill="#161b22" stroke="#ff5252" stroke-width="1.5"/><text x="113.0" y="278" text-anchor="middle" font-size="11" fill="#a9b4c2">L</text><text x="113.0" y="295" text-anchor="middle" font-size="12" font-weight="700" fill="#e6ebf2">L</text><path d="M179.5 214V352" stroke="#ff5252" stroke-width="3" stroke-dasharray="1 7" stroke-linecap="round"/><circle cx="179.5" cy="199.4" r="5" fill="none" stroke="#ff5252" stroke-width="2.5"/><circle cx="179.5" cy="365" r="5" fill="none" stroke="#ff5252" stroke-width="2.5"/><rect x="157.5" y="262" width="44" height="40" rx="6" fill="#161b22" stroke="#ff5252" stroke-width="1.5"/><text x="179.5" y="278" text-anchor="middle" font-size="11" fill="#a9b4c2">N</text><text x="179.5" y="295" text-anchor="middle" font-size="12" font-weight="700" fill="#e6ebf2">N</text><path d="M246.0 214V352" stroke="#4be07f" stroke-width="3" stroke-dasharray="1 7" stroke-linecap="round"/><circle cx="246.0" cy="199.4" r="5" fill="none" stroke="#4be07f" stroke-width="2.5"/><circle cx="246.0" cy="365" r="5" fill="none" stroke="#4be07f" stroke-width="2.5"/><rect x="224.0" y="262" width="44" height="40" rx="6" fill="#161b22" stroke="#4be07f" stroke-width="1.5"/><text x="246.0" y="278" text-anchor="middle" font-size="11" fill="#a9b4c2">⏚</text><text x="246.0" y="295" text-anchor="middle" font-size="12" font-weight="700" fill="#e6ebf2">PE</text><path d="M312.5 214V352" stroke="#a9b4c2" stroke-width="3" stroke-dasharray="1 7" stroke-linecap="round"/><circle cx="312.5" cy="199.4" r="5" fill="none" stroke="#a9b4c2" stroke-width="2.5"/><circle cx="312.5" cy="365" r="5" fill="none" stroke="#a9b4c2" stroke-width="2.5"/><rect x="290.5" y="262" width="44" height="40" rx="6" fill="#161b22" stroke="#a9b4c2" stroke-width="1.5"/><text x="312.5" y="278" text-anchor="middle" font-size="11" fill="#a9b4c2">−V</text><text x="312.5" y="295" text-anchor="middle" font-size="12" font-weight="700" fill="#e6ebf2">COM</text><path d="M379.0 214V352" stroke="#a9b4c2" stroke-width="3" stroke-dasharray="1 7" stroke-linecap="round"/><circle cx="379.0" cy="199.4" r="5" fill="none" stroke="#a9b4c2" stroke-width="2.5"/><circle cx="379.0" cy="365" r="5" fill="none" stroke="#a9b4c2" stroke-width="2.5"/><rect x="357.0" y="262" width="44" height="40" rx="6" fill="#161b22" stroke="#a9b4c2" stroke-width="1.5"/><text x="379.0" y="278" text-anchor="middle" font-size="11" fill="#a9b4c2">−V</text><text x="379.0" y="295" text-anchor="middle" font-size="12" font-weight="700" fill="#e6ebf2">COM</text><path d="M445.5 214V352" stroke="#a9b4c2" stroke-width="3" stroke-dasharray="1 7" stroke-linecap="round"/><circle cx="445.5" cy="199.4" r="5" fill="none" stroke="#a9b4c2" stroke-width="2.5"/><circle cx="445.5" cy="365" r="5" fill="none" stroke="#a9b4c2" stroke-width="2.5"/><rect x="423.5" y="262" width="44" height="40" rx="6" fill="#161b22" stroke="#a9b4c2" stroke-width="1.5"/><text x="445.5" y="278" text-anchor="middle" font-size="11" fill="#a9b4c2">−V</text><text x="445.5" y="295" text-anchor="middle" font-size="12" font-weight="700" fill="#e6ebf2">COM</text><path d="M512.0 214V352" stroke="#ffb02e" stroke-width="3" stroke-dasharray="1 7" stroke-linecap="round"/><circle cx="512.0" cy="199.4" r="5" fill="none" stroke="#ffb02e" stroke-width="2.5"/><circle cx="512.0" cy="365" r="5" fill="none" stroke="#ffb02e" stroke-width="2.5"/><rect x="490.0" y="262" width="44" height="40" rx="6" fill="#161b22" stroke="#ffb02e" stroke-width="1.5"/><text x="512.0" y="278" text-anchor="middle" font-size="11" fill="#a9b4c2">+V</text><text x="512.0" y="295" text-anchor="middle" font-size="12" font-weight="700" fill="#e6ebf2">+V</text><path d="M578.5 214V352" stroke="#ffb02e" stroke-width="3" stroke-dasharray="1 7" stroke-linecap="round"/><circle cx="578.5" cy="199.4" r="5" fill="none" stroke="#ffb02e" stroke-width="2.5"/><circle cx="578.5" cy="365" r="5" fill="none" stroke="#ffb02e" stroke-width="2.5"/><rect x="556.5" y="262" width="44" height="40" rx="6" fill="#161b22" stroke="#ffb02e" stroke-width="1.5"/><text x="578.5" y="278" text-anchor="middle" font-size="11" fill="#a9b4c2">+V</text><text x="578.5" y="295" text-anchor="middle" font-size="12" font-weight="700" fill="#e6ebf2">+V</text><path d="M645.0 214V352" stroke="#ffb02e" stroke-width="3" stroke-dasharray="1 7" stroke-linecap="round"/><circle cx="645.0" cy="199.4" r="5" fill="none" stroke="#ffb02e" stroke-width="2.5"/><circle cx="645.0" cy="365" r="5" fill="none" stroke="#ffb02e" stroke-width="2.5"/><rect x="623.0" y="262" width="44" height="40" rx="6" fill="#161b22" stroke="#ffb02e" stroke-width="1.5"/><text x="645.0" y="278" text-anchor="middle" font-size="11" fill="#a9b4c2">+V</text><text x="645.0" y="295" text-anchor="middle" font-size="12" font-weight="700" fill="#e6ebf2">+V</text>
    <text x="760" y="278" font-size="12" fill="#a9b4c2">printed on the supply</text><text x="760" y="295" font-size="12" font-weight="700" fill="#e6ebf2">printed on the board</text>
    <text x="50" y="530" font-size="14" font-weight="700" fill="#e6ebf2">This board, top edge</text><text x="250" y="530" font-size="13" fill="#a9b4c2">the rest of the board continues below</text>
  </svg>
  </div>
  <figcaption>Both drawings are at the same scale. Each contact of the board goes onto the screw directly above it. Red: mains. Green: protective earth. Grey: negative output. Orange: positive output. In use the board's top edge lies on the terminal strip; it is drawn apart here so that both rows of labels can be read.</figcaption>
</figure>
{:/nomarkdown}

- **Compare the labels before anything is plugged in.** Read the printing on your supply screw by screw against the printing on the board. Some supplies have the same nine terminals in the opposite order; on such a supply this board would put mains on the DC outputs.
- **Count the screws and measure the spacing.** The board fits only a strip of nine screws that are 9.5 mm apart. The details of each contact are in the [pinout](#pinout).

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Fits</td><td>Enclosed power supplies with a nine-screw terminal strip at 9.5&nbsp;mm spacing, in the order L, N, earth, three negative outputs, three positive outputs. That is the layout the maker's drawing shows for the Mean Well LRS-350.</td></tr>
    <tr><td>Mains input</td><td>Appliance inlet for a standard detachable mains cord (IEC C14 type; the inlet is rated 10&nbsp;A, 250&nbsp;V AC by its maker). The board uses no mains power itself; it only passes it to the supply.</td></tr>
    <tr><td>Mains fuses</td><td>Two holders for 5 × 20&nbsp;mm fuses, one in each mains conductor.</td></tr>
    <tr><td>Supply voltage</td><td>12 to 24&nbsp;V DC. The input protection of the 5&nbsp;V path passes power only between about 10.8&nbsp;V and 28.6&nbsp;V (calculated).</td></tr>
    <tr><td>Main output</td><td>The supply's voltage, switched by the controller, on a screw terminal (<b>MAIN OUT</b>) and an XT30 connector (<b>MAIN</b>) wired in parallel. 5&nbsp;A in total.</td></tr>
    <tr><td>Main output protection</td><td>Electronic breaker. Current limit about 5.45&nbsp;A (calculated from the chip's datasheet), switches off above about 31&nbsp;V (calculated), retries by itself after a fault, and blocks current flowing back into the supply.</td></tr>
    <tr><td>5 V output</td><td>Always on while the supply runs, on a screw terminal (<b>5V OUT</b>). From a converter module rated 1&nbsp;A by its maker. The board's own status lights use a few milliamps of it.</td></tr>
    <tr><td>Control signal</td><td>One logic input, high = main output on. Works from 3.3&nbsp;V logic (the chip's switch-on level is 2&nbsp;V at most, datasheet). An unconnected input keeps the main output off.</td></tr>
    <tr><td>Controller connector</td><td><b>X IN</b>: 2×5 pins, 1.27&nbsp;mm pitch, for a 10-way ribbon cable. A second connector, <b>X CHAIN</b>, passes the same ten pins on to another board.</td></tr>
    <tr><td>Status lights</td><td>Eight on the top side, each labelled, and one more on the underside</td></tr>
    <tr><td>Isolation</td><td>The mains side is kept apart from the low-voltage side by 9.5&nbsp;mm of bare board, and from protective earth by 3.0&nbsp;mm (distances measured in the design files, not a safety certification). Protective earth is not connected to the DC side on the board. Controller ground and the supply's negative output are joined.</td></tr>
    <tr><td>Size</td><td>102 × 72&nbsp;mm, four M3 mounting holes, two cable-tie holes, two-layer board with 70&nbsp;µm copper</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> and Smoothieware V2 firmware, using its <a href="/switch">Switch module</a></td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure is in the [electrical specifications](#electrical) appendix; the hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the picture match the list below it. The board is shown from the component side, with the supply contacts along the top edge.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/power-supply-connector-board/psu-connector-diagram.png" alt="Top view drawing of the power supply connector board with fourteen numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:4.0%;top:6.5%" aria-label="1: supply contacts">1<span class="xb-pop"><b>Supply contacts</b> — nine positions along the top edge, printed <b>L</b>, <b>N</b>, <b>PE</b>, <b>COM</b> ×3 and <b>+V</b> ×3. They go onto the screws of the power supply. <i>L, N and PE carry mains and protective earth.</i></span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-2" style="left:16.3%;top:45.2%" aria-label="2: mains fuses">2<span class="xb-pop"><b>F1 and F2</b> — holders for two 5 × 20&nbsp;mm mains fuses, one per mains conductor. <i>Live when the cord is plugged in.</i></span></a>
      <a class="xb-mk xb-pl" href="#tour-3" style="left:17.3%;top:82.0%" aria-label="3: mains inlet">3<span class="xb-pop"><b>Mains inlet</b> — where the detachable mains cord plugs in. <i>The middle pad is protective earth.</i></span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:38.5%;top:29.7%" aria-label="4: 5 V source selector">4<span class="xb-pop"><b>JP2, 5&nbsp;V source</b> — a three-pin selector that decides what feeds the 5&nbsp;V output: the on-board converter or the controller's 5&nbsp;V. See Options.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:57.5%;top:27.0%" aria-label="5: main source selector">5<span class="xb-pop"><b>JP1, main source</b> — the same kind of selector for the main output: the power supply, or the controller's 5&nbsp;V for testing on the bench.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:46.2%;top:45.2%" aria-label="6: 5 V converter">6<span class="xb-pop"><b>5&nbsp;V converter</b> — a small module that makes the always-on 5&nbsp;V from the supply's voltage.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:72.0%;top:51.0%" aria-label="7: electronic breaker">7<span class="xb-pop"><b>Electronic breaker</b> — the chip that switches the main output on the controller's command and switches it off on overload or wrong voltage.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:47.0%;top:74.0%" aria-label="8: status lights">8<span class="xb-pop"><b>Status lights</b> — seven in a row, printed <b>VIN</b>, <b>5V</b>, <b>EN</b>, <b>GOOD</b>, <b>FAULT</b>, <b>GPIO4</b>, <b>GPIO5</b>. See what they mean.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-9" style="left:92.5%;top:30.3%" aria-label="9: host fault light">9<span class="xb-pop"><b>HOST FAULT light</b> — lit when the board draws too much from the controller's 5&nbsp;V pin.</span></a>
      <a class="xb-mk xb-pr" href="#tour-10" style="left:94.2%;top:63.2%" aria-label="10: X IN">10<span class="xb-pop"><b>X IN</b> — the ribbon-cable connector to your Smoothieboard. <i>See the pinout.</i></span></a>
      <a class="xb-mk" href="#tour-11" style="left:37.5%;top:63.2%" aria-label="11: X CHAIN">11<span class="xb-pop"><b>X CHAIN</b> — passes the ten pins of X IN on to a second board.</span></a>
      <a class="xb-mk" href="#tour-12" style="left:40.0%;top:90.0%" aria-label="12: 5 V output">12<span class="xb-pop"><b>5V OUT</b> — screw terminal for the always-on 5&nbsp;V. The left screw, marked with a small triangle, is positive.</span></a>
      <a class="xb-mk" href="#tour-13" style="left:59.0%;top:90.0%" aria-label="13: main output, screw terminal">13<span class="xb-pop"><b>MAIN OUT</b> — screw terminal for the switched main output. The left screw, marked with a small triangle, is positive.</span></a>
      <a class="xb-mk xb-pr" href="#tour-14" style="left:95.5%;top:86.5%" aria-label="14: main output, XT30">14<span class="xb-pop"><b>MAIN</b> — the same switched output on an XT30 connector. <b>−</b> and <b>+</b> are printed beside it. <i>Its positive pin is on the right, the opposite side from the two screw terminals.</i></span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Supply contacts</b> — nine positions along the top edge, printed <b>L</b>, <b>N</b>, <b>PE</b>, <b>COM</b> ×3 and <b>+V</b> ×3. They go onto the screws of the power supply. <small>L, N and PE carry mains and protective earth.</small></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>F1 and F2</b> — holders for two 5 × 20&nbsp;mm mains fuses, one per mains conductor. <small>Live when the cord is plugged in.</small></div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Mains inlet</b> — where the detachable mains cord plugs in. <small>The middle pad is protective earth.</small></div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>JP2, 5&nbsp;V source</b> — a three-pin selector that decides what feeds the 5&nbsp;V output: the on-board converter or the controller's 5&nbsp;V. See <a href="#options">Options</a>.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>JP1, main source</b> — the same kind of selector for the main output: the power supply, or the controller's 5&nbsp;V for testing on the bench.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>5&nbsp;V converter</b> — a small module that makes the always-on 5&nbsp;V from the supply's voltage.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Electronic breaker</b> — the chip that switches the main output on the controller's command and switches it off on overload or wrong voltage.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Status lights</b> — seven in a row, printed <b>VIN</b>, <b>5V</b>, <b>EN</b>, <b>GOOD</b>, <b>FAULT</b>, <b>GPIO4</b>, <b>GPIO5</b>. See <a href="#outputs">what they mean</a>.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>HOST FAULT light</b> — lit when the board draws too much from the controller's 5&nbsp;V pin.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>X IN</b> — the ribbon-cable connector to your Smoothieboard. <small>See the <a href="#pinout">pinout</a>.</small></div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>X CHAIN</b> — passes the ten pins of X IN on to a second board.</div></li>
    <li id="tour-12"><span class="xb-n">12</span><div><b>5V OUT</b> — screw terminal for the always-on 5&nbsp;V. The left screw, marked with a small triangle, is positive.</div></li>
    <li id="tour-13"><span class="xb-n">13</span><div><b>MAIN OUT</b> — screw terminal for the switched main output. The left screw, marked with a small triangle, is positive.</div></li>
    <li id="tour-14"><span class="xb-n">14</span><div><b>MAIN</b> — the same switched output on an XT30 connector. <b>−</b> and <b>+</b> are printed beside it. <small>Its positive pin is on the right, the opposite side from the two screw terminals.</small></div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways. The two cable-tie holes are at the top right corner. The input protection for the 5&nbsp;V path, the ten chain links and the test pads are on the underside.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### X IN, to the controller

Connect X IN to the header labelled **G_F** on the Smoothieboard V2 Prime with a 10-way ribbon cable. The board only needs pin 3 and ground. The last column is the name you use for each pin in the configuration file.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>X IN pin</th><th>Function</th><th>What the board does with it</th><th>Smoothieboard V2 Prime pin (header G_F)</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Nothing. Passed on to X CHAIN.</td><td>3.3&nbsp;V</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Optional power source, only used when a selector is set to HOST. See <a href="#options">Options</a>.</td><td>5&nbsp;V</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">ENABLE</span></td><td>High = main output on. Pulled low on the board when nothing is connected.</td><td><code>PB1</code></td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-stat">GPIO4</span></td><td>Lights the <b>GPIO4</b> LED when high. Nothing else.</td><td><code>PJ4</code></td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-stat">GPIO5</span></td><td>Lights the <b>GPIO5</b> LED when high. Nothing else.</td><td><code>PA4</code></td></tr>
    <tr><td>6 to 9</td><td><span class="xb-pill xb-p-c">Not used</span></td><td>Nothing. Passed on to X CHAIN.</td><td><code>PG0</code>, <code>PJ3</code>, <code>PG1</code>, <code>PJ2</code></td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Ground, joined to the supply's negative output</td><td>Ground</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="X IN connector pin positions">
  <svg viewBox="0 0 1000 290" role="img" aria-labelledby="xb-xin-t">
    <title id="xb-xin-t">X IN seen from above: two columns of five pins. Pin 1 at the bottom right, odd pins 1 to 9 going up the right column, even pins 2 to 10 going up the left column.</title>
    <rect x="456" y="34" width="88" height="228" rx="6" fill="#0d0f12" stroke="#59616e" stroke-width="2"/>
    <rect x="472" y="52" width="16" height="16" fill="#e0b84a" stroke="#6b5310"/><rect x="512" y="52" width="16" height="16" fill="#e0b84a" stroke="#6b5310"/><path d="M472 60H400" stroke="#8a94a3" stroke-width="2"/><path d="M528 60H600" stroke="#59616e" stroke-width="2"/><g font-size="13" font-weight="700"><rect x="304.0" y="47" width="96" height="26" rx="13" fill="#0d0f12" stroke="#8a94a3"/><text x="352" y="65" fill="#fff" text-anchor="middle">GND</text><rect x="600.0" y="47" width="96" height="26" rx="13" fill="#212936" stroke="#59616e"/><text x="648" y="65" fill="#a9b4c2" text-anchor="middle">Not used</text></g><text x="288" y="65" text-anchor="end" font-size="12" fill="#a9b4c2">10</text><text x="712" y="65" font-size="12" fill="#a9b4c2">9</text><rect x="472" y="96" width="16" height="16" fill="#e0b84a" stroke="#6b5310"/><rect x="512" y="96" width="16" height="16" fill="#e0b84a" stroke="#6b5310"/><path d="M472 104H400" stroke="#59616e" stroke-width="2"/><path d="M528 104H600" stroke="#59616e" stroke-width="2"/><g font-size="13" font-weight="700"><rect x="304.0" y="91" width="96" height="26" rx="13" fill="#212936" stroke="#59616e"/><text x="352" y="109" fill="#a9b4c2" text-anchor="middle">Not used</text><rect x="600.0" y="91" width="96" height="26" rx="13" fill="#212936" stroke="#59616e"/><text x="648" y="109" fill="#a9b4c2" text-anchor="middle">Not used</text></g><text x="288" y="109" text-anchor="end" font-size="12" fill="#a9b4c2">8</text><text x="712" y="109" font-size="12" fill="#a9b4c2">7</text><rect x="472" y="140" width="16" height="16" fill="#e0b84a" stroke="#6b5310"/><rect x="512" y="140" width="16" height="16" fill="#e0b84a" stroke="#6b5310"/><path d="M472 148H400" stroke="#59616e" stroke-width="2"/><path d="M528 148H600" stroke="#b8a1ff" stroke-width="2"/><g font-size="13" font-weight="700"><rect x="304.0" y="135" width="96" height="26" rx="13" fill="#212936" stroke="#59616e"/><text x="352" y="153" fill="#a9b4c2" text-anchor="middle">Not used</text><rect x="600.0" y="135" width="96" height="26" rx="13" fill="#b8a1ff"/><text x="648" y="153" fill="#140a33" text-anchor="middle">GPIO5</text></g><text x="288" y="153" text-anchor="end" font-size="12" fill="#a9b4c2">6</text><text x="712" y="153" font-size="12" fill="#a9b4c2">5</text><rect x="472" y="184" width="16" height="16" fill="#e0b84a" stroke="#6b5310"/><rect x="512" y="184" width="16" height="16" fill="#e0b84a" stroke="#6b5310"/><path d="M472 192H400" stroke="#b8a1ff" stroke-width="2"/><path d="M528 192H600" stroke="#5fb3ff" stroke-width="2"/><g font-size="13" font-weight="700"><rect x="304.0" y="179" width="96" height="26" rx="13" fill="#b8a1ff"/><text x="352" y="197" fill="#140a33" text-anchor="middle">GPIO4</text><rect x="600.0" y="179" width="96" height="26" rx="13" fill="#5fb3ff"/><text x="648" y="197" fill="#04182b" text-anchor="middle">ENABLE</text></g><text x="288" y="197" text-anchor="end" font-size="12" fill="#a9b4c2">4</text><text x="712" y="197" font-size="12" fill="#a9b4c2">3</text><rect x="472" y="228" width="16" height="16" fill="#e0b84a" stroke="#6b5310"/><rect x="512" y="228" width="16" height="16" fill="#e0b84a" stroke="#6b5310"/><path d="M472 236H400" stroke="#ff9f43" stroke-width="2"/><path d="M528 236H600" stroke="#ff5d5d" stroke-width="2"/><g font-size="13" font-weight="700"><rect x="304.0" y="223" width="96" height="26" rx="13" fill="#ff9f43"/><text x="352" y="241" fill="#201004" text-anchor="middle">5 V</text><rect x="600.0" y="223" width="96" height="26" rx="13" fill="#ff5d5d"/><text x="648" y="241" fill="#1c0606" text-anchor="middle">3.3 V</text></g><text x="288" y="241" text-anchor="end" font-size="12" fill="#a9b4c2">2</text><text x="712" y="241" font-size="12" fill="#a9b4c2">1</text>
    <g font-size="14" fill="#a9b4c2"><text x="770" y="60">X IN, seen from above</text><text x="770" y="80">X CHAIN has the same layout</text><text x="770" y="241">Pin 1, bottom right</text></g>
  </svg>
  </div>
  <figcaption>Pin positions of X IN with the board held as in the tour above. The drawing is enlarged; the real pins are 1.27&nbsp;mm apart. Only pin 3 and pin 10 are needed to switch the main output.</figcaption>
</figure>
{:/nomarkdown}

X IN stands upright on the right-hand side of the board: two columns of five pins. Pin 1 is at the bottom of the right-hand column. Odd pins 1 to 9 run up the right-hand column and even pins 2 to 10 up the left-hand one. The notch in the connector's outline and the red edge of the ribbon cable mark the pin 1 end.

No signal goes back to the controller: the board cannot tell the firmware whether the output is on or has tripped. That information is on the LEDs only.

Any other header of the Smoothieboard whose pin 3 is a free output pin works the same way; this page uses G_F and `PB1` throughout.

### Supply contacts, top edge

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Position, from the left</th><th>Printed</th><th>Function</th><th>Goes to the supply's terminal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>L</td><td><span class="xb-pill xb-p-nc">MAINS</span></td><td>AC line input (L)</td></tr>
    <tr><td>2</td><td>N</td><td><span class="xb-pill xb-p-nc">MAINS</span></td><td>AC neutral input (N)</td></tr>
    <tr><td>3</td><td>PE</td><td><span class="xb-pill xb-p-no">EARTH</span></td><td>Protective earth, often marked FG or with the earth symbol</td></tr>
    <tr><td>4, 5, 6</td><td>COM</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Negative DC output, often marked −V or COM</td></tr>
    <tr><td>7, 8, 9</td><td>+V</td><td><span class="xb-pill xb-p-12v">12–24 V</span></td><td>Positive DC output, +V</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Some supplies have the same nine terminals in the opposite order. On such a supply this board would put mains on the DC outputs. Compare the printing on the board with the printing on the supply, terminal by terminal, before anything is plugged in.

### Outputs and mains inlet

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Connector</th><th>Pin</th><th>Function</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td rowspan="2"><b>5V OUT</b><br>screw terminal</td><td>Left, triangle mark</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Always on while the supply runs</td></tr>
    <tr><td>Right</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td></td></tr>
    <tr><td rowspan="2"><b>MAIN OUT</b><br>screw terminal</td><td>Left, triangle mark</td><td><span class="xb-pill xb-p-12v">MAIN +</span></td><td>Switched by the controller</td></tr>
    <tr><td>Right</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td></td></tr>
    <tr><td rowspan="2"><b>MAIN</b><br>XT30</td><td>Left, printed −</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td></td></tr>
    <tr><td>Right, printed +</td><td><span class="xb-pill xb-p-12v">MAIN +</span></td><td>The same output as MAIN OUT</td></tr>
    <tr><td rowspan="2"><b>Mains inlet</b></td><td>Outer pins</td><td><span class="xb-pill xb-p-nc">MAINS</span></td><td>Each goes through its own fuse to L and N</td></tr>
    <tr><td>Middle pin</td><td><span class="xb-pill xb-p-no">EARTH</span></td><td>Straight to PE, no fuse</td></tr>
  </tbody>
</table></div>

<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Connector positions">
  <svg viewBox="0 0 1000 400" role="img" aria-labelledby="xb-psu-pin-t">
    <title id="xb-psu-pin-t">Connector positions seen from above. Nine supply contacts along the top edge: L, N, PE, three COM, three plus V. Mains inlet at the bottom left. Along the bottom edge from left to right: 5V OUT with plus on the left, MAIN OUT with plus on the left, MAIN XT30 with plus on the right. X CHAIN on the left and X IN on the right of the low-voltage area.</title>
    <rect x="150" y="60" width="700" height="290" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/>
    <rect x="150" y="60" width="238" height="290" rx="8" fill="#3a1518" stroke="#ff5d5d" stroke-width="1.5"/>
    <text x="269" y="215" text-anchor="middle" font-size="14" font-weight="700" fill="#ff8f8f">MAINS SIDE</text>
    <text x="269" y="234" text-anchor="middle" font-size="12" fill="#ff8f8f">do not touch</text>
    <text x="620" y="150" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Low-voltage side, seen from above</text>
    <g stroke="#6b5310">
      <rect x="205" y="64" width="36" height="24" rx="3" fill="#ff8f8f"/><rect x="270" y="64" width="36" height="24" rx="3" fill="#ff8f8f"/>
      <rect x="335" y="64" width="36" height="24" rx="3" fill="#35c26b"/>
      <rect x="400" y="64" width="36" height="24" rx="3" fill="#8a94a3"/><rect x="465" y="64" width="36" height="24" rx="3" fill="#8a94a3"/><rect x="530" y="64" width="36" height="24" rx="3" fill="#8a94a3"/>
      <rect x="595" y="64" width="36" height="24" rx="3" fill="#ffcc33"/><rect x="660" y="64" width="36" height="24" rx="3" fill="#ffcc33"/><rect x="725" y="64" width="36" height="24" rx="3" fill="#ffcc33"/>
    </g>
    <g font-size="13" font-weight="700" fill="#e6ebf2" text-anchor="middle">
      <text x="223" y="108">L</text><text x="288" y="108">N</text><text x="353" y="108">PE</text>
      <text x="418" y="108">COM</text><text x="483" y="108">COM</text><text x="548" y="108">COM</text>
      <text x="613" y="108">+V</text><text x="678" y="108">+V</text><text x="743" y="108">+V</text>
    </g>
    <g font-size="12" fill="#a9b4c2" text-anchor="middle">
      <text x="255" y="40">mains</text><text x="353" y="40">earth</text><text x="483" y="40">supply −</text><text x="678" y="40">supply +</text>
    </g>
    <g stroke="#59616e" stroke-width="1.5" fill="none"><path d="M207 48H303"/><path d="M402 48H564"/><path d="M597 48H759"/></g>
    <rect x="196" y="296" width="130" height="44" rx="4" fill="#0d0f12" stroke="#ff5d5d"/>
    <text x="261" y="323" text-anchor="middle" font-size="12" font-weight="700" fill="#ff8f8f">Mains inlet</text>
    <rect x="398" y="210" width="26" height="60" rx="3" fill="#0d0f12" stroke="#8a94a3"/>
    <text x="432" y="244" font-size="12" font-weight="700" fill="#e6ebf2">X CHAIN</text>
    <rect x="812" y="210" width="26" height="60" rx="3" fill="#0d0f12" stroke="#8a94a3"/>
    <text x="800" y="200" text-anchor="middle" font-size="12" font-weight="700" fill="#ffcc33">X IN</text>
    <rect x="420" y="300" width="80" height="44" rx="4" fill="#35c26b" stroke="#145a30"/>
    <rect x="560" y="300" width="80" height="44" rx="4" fill="#35c26b" stroke="#145a30"/>
    <rect x="712" y="304" width="80" height="38" rx="4" fill="#f0cf2a" stroke="#8a7410"/>
    <g fill="#0d0f12"><circle cx="441" cy="322" r="9"/><circle cx="479" cy="322" r="9"/><circle cx="581" cy="322" r="9"/><circle cx="619" cy="322" r="9"/><circle cx="733" cy="323" r="7"/><circle cx="771" cy="323" r="7"/></g>
    <g font-size="12" font-weight="700" fill="#e6ebf2" text-anchor="middle"><text x="460" y="291">5V OUT</text><text x="600" y="291">MAIN OUT</text><text x="752" y="295">MAIN</text></g>
    <g stroke-width="2" fill="none">
      <path d="M441 344V372" stroke="#ff9f43"/><path d="M479 344V372" stroke="#8a94a3"/>
      <path d="M581 344V372" stroke="#ffcc33"/><path d="M619 344V372" stroke="#8a94a3"/>
      <path d="M733 342V372" stroke="#8a94a3"/><path d="M771 342V372" stroke="#ffcc33"/>
    </g>
    <g font-size="12" font-weight="700" text-anchor="middle">
      <rect x="417" y="372" width="48" height="24" rx="12" fill="#ff9f43"/><text x="441" y="389" fill="#201004">+5 V</text>
      <rect x="467" y="372" width="44" height="24" rx="12" fill="#0d0f12" stroke="#8a94a3"/><text x="489" y="389" fill="#fff">GND</text>
      <rect x="557" y="372" width="48" height="24" rx="12" fill="#ffcc33"/><text x="581" y="389" fill="#201a02">+</text>
      <rect x="607" y="372" width="44" height="24" rx="12" fill="#0d0f12" stroke="#8a94a3"/><text x="629" y="389" fill="#fff">GND</text>
      <rect x="701" y="372" width="44" height="24" rx="12" fill="#0d0f12" stroke="#8a94a3"/><text x="723" y="389" fill="#fff">−</text>
      <rect x="747" y="372" width="48" height="24" rx="12" fill="#ffcc33"/><text x="771" y="389" fill="#201a02">+</text>
    </g>
  </svg>
  </div>
  <figcaption>Where everything connects, with the board held as in the tour above. On the two screw terminals positive is the left screw; on the XT30 it is the right pin.</figcaption>
</figure>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>An enclosed power supply</b><span>12 to 24&nbsp;V DC output, with nine screw terminals 9.5&nbsp;mm apart in the order printed on the board.</span></div>
  <div class="xb-card"><b>A closed enclosure</b><span>For the supply and the board together, with the metal parts connected to protective earth.</span></div>
  <div class="xb-card"><b>A mains cord and two fuses</b><span>A detachable cord with protective earth for the inlet, and two 5 × 20&nbsp;mm fuses.</span></div>
  <div class="xb-card"><b>Smoothieboard V2 Prime</b><span>Running Smoothieware V2, with its G_F header free.</span></div>
  <div class="xb-card"><b>10-way ribbon cable</b><span>1.27&nbsp;mm pitch, 2×5 sockets at both ends, wired pin 1 to pin 1: the standard Gadgeteer cable.</span></div>
  <div class="xb-card"><b>Output wiring</b><span>An XT30 plug or wire for the screw terminals, sized for the current your machine draws.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

These steps bring the board up in stages: the low-voltage side first, the command next, the load last. Each stage has its own LED.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring overview">
  <svg viewBox="0 0 1000 430" role="img" aria-labelledby="xb-psu-hookup-t">
    <title id="xb-psu-hookup-t">Wiring overview: the board sits on the terminal strip of the power supply. The mains cord plugs into the board's inlet. A ribbon cable goes from X IN to header G_F on the Smoothieboard. 5V OUT feeds things that are always on, and MAIN OUT feeds the machine's motors and heaters.</title>
    <!-- power supply: drawing of a typical unit (smoothie-diagrams, data/external-equipment/bar-power-supply-9-terminal) -->
    <svg x="250" y="20" width="420" height="80.3" viewBox="0 36 115 22"><image href="/images/extensions/equipment/bar-power-supply-9-terminal.png" width="115" height="62"/></svg>
    <text x="690" y="50" font-size="15" font-weight="700" fill="#e6ebf2">Enclosed power supply</text>
    <text x="690" y="70" font-size="12" fill="#a9b4c2">12 to 24 V DC, a typical unit</text>
    <g stroke-width="5" fill="none">
      <path d="M282.9 86.5V140" stroke="#ff5d5d"/><path d="M317.6 86.5V140" stroke="#ff5d5d"/><path d="M352.3 86.5V140" stroke="#35c26b"/><path d="M387.0 86.5V140" stroke="#8a94a3"/><path d="M421.7 86.5V140" stroke="#8a94a3"/><path d="M456.3 86.5V140" stroke="#8a94a3"/><path d="M491.0 86.5V140" stroke="#ffcc33"/><path d="M525.7 86.5V140" stroke="#ffcc33"/><path d="M560.4 86.5V140" stroke="#ffcc33"/>
    </g>
    <rect x="250" y="140" width="420" height="200" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/>
    <rect x="250" y="140" width="130" height="200" rx="8" fill="#3a1518" stroke="#ff5d5d" stroke-width="1.5"/>
    <text x="315" y="225" text-anchor="middle" font-size="12" font-weight="700" fill="#ff8f8f">mains side</text>
    <text x="315" y="243" text-anchor="middle" font-size="11" fill="#ff8f8f">two fuses</text>
    <text x="525" y="215" text-anchor="middle" font-size="16" font-weight="700" fill="#e6ebf2">Power supply</text>
    <text x="525" y="236" text-anchor="middle" font-size="16" font-weight="700" fill="#e6ebf2">connector board</text>
    <rect x="270" y="298" width="90" height="34" rx="4" fill="#0d0f12" stroke="#ff5d5d"/>
    <text x="315" y="319" text-anchor="middle" font-size="11" font-weight="700" fill="#ff8f8f">inlet</text>
    <path d="M315 332V390H150" stroke="#ff5d5d" stroke-width="6" fill="none"/>
    <rect x="40" y="368" width="110" height="44" rx="8" fill="#212936" stroke="#59616e"/>
    <text x="95" y="395" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">Mains cord</text>
    <rect x="636" y="170" width="26" height="60" rx="3" fill="#0d0f12" stroke="#8a94a3"/>
    <text x="628" y="163" text-anchor="end" font-size="12" font-weight="700" fill="#ffcc33">X IN</text>
    <rect x="770" y="140" width="200" height="120" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/>
    <text x="882" y="196" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Smoothieboard</text>
    <text x="882" y="216" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">V2 Prime</text>
    <rect x="778" y="170" width="26" height="60" rx="3" fill="#0d0f12" stroke="#8a94a3"/>
    <text x="791" y="162" text-anchor="middle" font-size="12" font-weight="700" fill="#ffcc33">G_F</text>
    <path d="M662 200H778" stroke="#aeb7c2" stroke-width="12" fill="none"/>
    <path d="M662 195H778" stroke="#ff5d5d" stroke-width="2" fill="none"/>
    <text x="720" y="226" text-anchor="middle" font-size="11" fill="#a9b4c2">ribbon cable</text>
    <rect x="420" y="302" width="70" height="34" rx="4" fill="#35c26b" stroke="#145a30"/>
    <rect x="540" y="302" width="100" height="34" rx="4" fill="#35c26b" stroke="#145a30"/>
    <g font-size="11" font-weight="700" fill="#e6ebf2" text-anchor="middle"><text x="455" y="294">5V OUT</text><text x="590" y="294">MAIN OUT · MAIN</text></g>
    <g stroke-width="5" fill="none"><path d="M455 336V368" stroke="#ff9f43"/><path d="M590 336V390H700" stroke="#ffcc33"/></g>
    <rect x="372" y="368" width="170" height="44" rx="8" fill="#212936" stroke="#59616e"/>
    <text x="457" y="388" text-anchor="middle" font-size="12" font-weight="700" fill="#e6ebf2">Always-on 5 V devices</text>
    <text x="457" y="404" text-anchor="middle" font-size="11" fill="#a9b4c2">optional</text>
    <rect x="700" y="368" width="270" height="44" rx="8" fill="#212936" stroke="#59616e"/>
    <text x="835" y="388" text-anchor="middle" font-size="12" font-weight="700" fill="#e6ebf2">Machine power: motors, heaters</text>
    <text x="835" y="404" text-anchor="middle" font-size="11" fill="#a9b4c2">on only when the controller says so</text>
  </svg>
  </div>
  <figcaption>The complete installation. Red is mains, green is protective earth, yellow is the supply's positive output, grey its negative. Each wire of the two outputs stands for a positive and a negative wire.</figcaption>
</figure>

<ol class="xb-steps">
  <li class="xb-step">
    <h3>Unplug everything</h3>
    <p>The mains cord must be out of the wall and out of the board. Power down the Smoothieboard. If the supply was running, give it a few minutes to discharge.</p>
  </li>
  <li class="xb-step">
    <h3>Check the supply against the board</h3>
    <p>Hold the board over the supply's terminal strip and read both sets of labels. From the left: <b>L</b>, <b>N</b>, <b>PE</b> over the supply's mains and earth terminals, three <b>COM</b> over its negative outputs, three <b>+V</b> over its positive outputs.</p>
    <p class="xb-warn"><b>If the order does not match, stop.</b> This board does not fit that supply, and forcing it would put mains voltage on the DC outputs.</p>
  </li>
  <li class="xb-step">
    <h3>Set the two source selectors</h3>
    <p>For normal use, <b>JP2</b> joins its left and middle pins (printed <b>BUCK</b> and <b>5V</b> on the underside), and <b>JP1</b> joins its left and middle pins (printed <b>PSU</b> and <b>MAIN</b>). See <a href="#options">Options</a>.</p>
  </li>
  <li class="xb-step">
    <h3>Mount the board and fit the fuses</h3>
    <p>Fasten the board to the supply's nine terminals and to its four M3 mounting holes, then put a fuse in each holder. Leave all three outputs empty for now.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the ribbon cable and add the configuration</h3>
    <p>Plug one end into the header labelled <b>G_F</b> on the Smoothieboard V2 Prime and the other into <b>X IN</b>. Pin 1 must go to pin 1: follow the red edge of the cable. Then copy the <a href="#configuration">configuration</a> below into the configuration file on the Smoothieboard's SD card.</p>
  </li>
  <li class="xb-step">
    <h3>Close the enclosure, then plug in the mains cord</h3>
    <p>The status lights must be visible with the enclosure closed, through a window or an opening; do not open it to look. Power the Smoothieboard as well. It cannot switch the main output on unless it has power of its own.</p>
    <p class="xb-expect"><b>You should see:</b> the <b>VIN</b> and <b>5V</b> LEDs light. <b>EN</b> and <b>GOOD</b> stay dark: the main output is off.</p>
  </li>
  <li class="xb-step">
    <h3>Switch the main output on</h3>
    <p>Send from the console or as G-code:</p>
    <pre><code>M80</code></pre>
    <p class="xb-expect"><b>You should see:</b> <b>EN</b> lights, then <b>GOOD</b>. Send <code>M81</code> and both go out.</p>
    <p>If <b>EN</b> or <b>GOOD</b> stays dark, go to <a href="#troubleshooting">troubleshooting</a>.</p>
  </li>
  <li class="xb-step">
    <h3>Connect what the board powers</h3>
    <p>Send <code>M81</code>, unplug the mains cord, and only then wire your machine to the outputs. Follow <a href="#outputs">Using the outputs</a>.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

Smoothieware V2 has no module for power supplies. The enable pin is an ordinary output pin, and the part of the firmware that drives it is the [Switch module](/switch). Three set-ups cover what this board can do; fewer than on other boards, because it has one control input and two indicator lights:

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Switch machine power from G-code or the console</td><td><a href="/switch">Switch</a>, digital output</td><td><a href="#config-onoff">1. Power on and off</a></td></tr>
    <tr><td>Switch machine power with a button on the machine</td><td><a href="/switch">Switch</a>, with an input pin</td><td><a href="#config-button">2. Power button</a></td></tr>
    <tr><td>Use the two spare lights as indicators</td><td><a href="/switch">Switch</a>, digital output</td><td><a href="#config-lights">3. Indicator lights</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### 1. Power on and off (Switch module) {#config-onoff}

One entry: an output pin, a command that turns it on and a command that turns it off. Add this to the configuration file on the SD card. If the file already has a `[switch]` section, add the lines to it instead of creating a second one.

```ini
[switch]
psu.enable            = true
psu.output_pin        = PB1        # G_F pin 3  ->  X IN pin 3, enable
psu.output_type       = digital    # plain on/off
psu.input_on_command  = M80
psu.input_off_command = M81
psu.startup_state     = false      # main output off when the board starts
psu.halt_set_to       = false      # main output off when the machine halts
```

### Commands

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Command</th><th>What it does</th></tr></thead>
  <tbody>
    <tr><td><code>M80</code></td><td>Main output on</td></tr>
    <tr><td><code>M81</code></td><td>Main output off</td></tr>
    <tr><td><code>switch psu on</code></td><td>Main output on, from the console</td></tr>
    <tr><td><code>switch psu off</code></td><td>Main output off, from the console</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Good to know

- **`M80` and `M81` are our choice.** They are the customary G-codes for "power on" and "power off", and Smoothieware V2 does not use them for anything else. Any other free pair works.
- **The name `psu` is yours to change.** It is what the console command uses.
- **Do not add `!` to the pin.** The board switches on when the signal is high and its input is pulled low, so the main output is off while the controller starts.
- **`halt_set_to = false` cuts machine power on a halt.** That is the cautious choice. Remember that everything on the main output loses power, and that a halt is a firmware action, not an emergency stop. See the limits in [Using the outputs](#outputs).
- **`M80` waits its turn.** A switch command runs after the moves already queued have finished.
- **Pins 4 and 5 are spare lights.** `PJ4` and `PA4` only light the GPIO4 and GPIO5 LEDs. [Example 3](#config-lights) turns them into two indicator lights you can command; otherwise leave them unused.

### 2. A power button (Switch module with an input pin) {#config-button}

A second Switch entry can watch a button and send `M80` and `M81` for you. The button needs an input pin of its own on another header of the controller. Here a push-button between pin 3 of header **G_C** and ground:

```ini
[switch]
powerbutton.enable             = true
powerbutton.input_pin          = PD14!^   # G_C pin 3; the button connects it to ground
powerbutton.input_pin_behavior = toggle   # each press changes the state
powerbutton.output_on_command  = M80      # main output on
powerbutton.output_off_command = M81      # main output off
```

The pin is checked fifty times a second, so a very short press can be missed. This button asks the firmware to switch; it is not an emergency stop and does not work when the controller has no power or has stopped responding.

### 3. Two indicator lights (Switch module) {#config-lights}

Pins 4 and 5 of X IN only light the **GPIO4** and **GPIO5** LEDs. Give each a Switch entry to command it:

```ini
[switch]
light4.enable            = true
light4.output_pin        = PJ4        # G_F pin 4  ->  X IN pin 4, GPIO4 LED
light4.output_type       = digital
light4.input_on_command  = M64
light4.input_off_command = M65
light4.subcode           = 4          # M64.4 on, M65.4 off

light5.enable            = true
light5.output_pin        = PA4        # G_F pin 5  ->  X IN pin 5, GPIO5 LED
light5.output_type       = digital
light5.input_on_command  = M64
light5.input_off_command = M65
light5.subcode           = 5          # M64.5 on, M65.5 off
```

A board on [X CHAIN](#chaining) receives these two pins as well, unless their chain links are cut.

## Using the outputs {#outputs}

<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>Unplug the mains cord before you touch any wire on this board.</strong> Switching the main output off with <code>M81</code> does not make the board safe: mains is still on its left side, and 5V OUT is still live.
</sl-alert>

1. **Mind the polarity, connector by connector.** Nothing is printed beside the screw terminals except their names. On **5V OUT** and **MAIN OUT** the left screw (triangle mark) is positive. On the XT30 the positive pin is on the right, as printed.
2. **MAIN OUT and MAIN share one budget.** They are the same output on two connectors. The figure for both together is 5&nbsp;A. Start well below that and feel for heat at the breaker chip and the connectors.
3. **5V OUT is always on.** Use it for things that must stay alive while the machine power is off. The converter module is rated 1&nbsp;A by its maker.
4. **Size the wire and add a fuse for each circuit.** The board's breaker limits the main output as a whole; it does not protect a thin wire that branches off to one device. Give each branch wire that is rated for its current, and its own fuse rated for that wire. Tighten each screw and pull on the wire to check it holds.
5. **The controller needs its own power.** The main output is off until the controller commands it on, so the controller's logic cannot be powered from the main output alone.
6. **Keep protective earth continuous.** The board passes earth from the inlet to the supply's earth terminal and nowhere else. Your enclosure and machine frame need their own earth connection.
7. **Test.** Close the enclosure, plug in, send `M80`, and check that your machine has power and that **GOOD** is lit. Send `M81` and check that it loses power.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Status lights in normal use">
  <svg viewBox="0 0 1000 150" role="img" aria-labelledby="xb-psu-leds-t">
    <title id="xb-psu-leds-t">The row of seven status lights. With the main output off, VIN and 5V are lit. With the main output on, VIN, 5V, EN and GOOD are lit.</title>
    <path d="M500 14V136" stroke="#38424f" stroke-width="2" stroke-dasharray="6 6"/>
    <text x="250" y="34" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Main output off (after M81)</text><rect x="56" y="70" width="28" height="16" rx="3" fill="#f4f1d0" stroke="#fffbe0" stroke-width="2.5"/><rect x="50" y="64" width="40" height="28" rx="6" fill="#f4f1d0" opacity=".18"/><text x="70" y="112" text-anchor="middle" font-size="11" font-weight="700" fill="#e6ebf2">VIN</text><rect x="116" y="70" width="28" height="16" rx="3" fill="#f4f1d0" stroke="#fffbe0" stroke-width="2.5"/><rect x="110" y="64" width="40" height="28" rx="6" fill="#f4f1d0" opacity=".18"/><text x="130" y="112" text-anchor="middle" font-size="11" font-weight="700" fill="#e6ebf2">5V</text><rect x="176" y="70" width="28" height="16" rx="3" fill="#2a3038" stroke="#59616e" stroke-width="1.5"/><text x="190" y="112" text-anchor="middle" font-size="11" font-weight="700" fill="#7c8794">EN</text><rect x="236" y="70" width="28" height="16" rx="3" fill="#2a3038" stroke="#59616e" stroke-width="1.5"/><text x="250" y="112" text-anchor="middle" font-size="11" font-weight="700" fill="#7c8794">GOOD</text><rect x="296" y="70" width="28" height="16" rx="3" fill="#2a3038" stroke="#59616e" stroke-width="1.5"/><text x="310" y="112" text-anchor="middle" font-size="11" font-weight="700" fill="#7c8794">FAULT</text><rect x="356" y="70" width="28" height="16" rx="3" fill="#2a3038" stroke="#59616e" stroke-width="1.5"/><text x="370" y="112" text-anchor="middle" font-size="11" font-weight="700" fill="#7c8794">GPIO4</text><rect x="416" y="70" width="28" height="16" rx="3" fill="#2a3038" stroke="#59616e" stroke-width="1.5"/><text x="430" y="112" text-anchor="middle" font-size="11" font-weight="700" fill="#7c8794">GPIO5</text><text x="750" y="34" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Main output on (after M80)</text><rect x="556" y="70" width="28" height="16" rx="3" fill="#f4f1d0" stroke="#fffbe0" stroke-width="2.5"/><rect x="550" y="64" width="40" height="28" rx="6" fill="#f4f1d0" opacity=".18"/><text x="570" y="112" text-anchor="middle" font-size="11" font-weight="700" fill="#e6ebf2">VIN</text><rect x="616" y="70" width="28" height="16" rx="3" fill="#f4f1d0" stroke="#fffbe0" stroke-width="2.5"/><rect x="610" y="64" width="40" height="28" rx="6" fill="#f4f1d0" opacity=".18"/><text x="630" y="112" text-anchor="middle" font-size="11" font-weight="700" fill="#e6ebf2">5V</text><rect x="676" y="70" width="28" height="16" rx="3" fill="#f4f1d0" stroke="#fffbe0" stroke-width="2.5"/><rect x="670" y="64" width="40" height="28" rx="6" fill="#f4f1d0" opacity=".18"/><text x="690" y="112" text-anchor="middle" font-size="11" font-weight="700" fill="#e6ebf2">EN</text><rect x="736" y="70" width="28" height="16" rx="3" fill="#f4f1d0" stroke="#fffbe0" stroke-width="2.5"/><rect x="730" y="64" width="40" height="28" rx="6" fill="#f4f1d0" opacity=".18"/><text x="750" y="112" text-anchor="middle" font-size="11" font-weight="700" fill="#e6ebf2">GOOD</text><rect x="796" y="70" width="28" height="16" rx="3" fill="#2a3038" stroke="#59616e" stroke-width="1.5"/><text x="810" y="112" text-anchor="middle" font-size="11" font-weight="700" fill="#7c8794">FAULT</text><rect x="856" y="70" width="28" height="16" rx="3" fill="#2a3038" stroke="#59616e" stroke-width="1.5"/><text x="870" y="112" text-anchor="middle" font-size="11" font-weight="700" fill="#7c8794">GPIO4</text><rect x="916" y="70" width="28" height="16" rx="3" fill="#2a3038" stroke="#59616e" stroke-width="1.5"/><text x="930" y="112" text-anchor="middle" font-size="11" font-weight="700" fill="#7c8794">GPIO5</text>
  </svg>
  </div>
  <figcaption>The row of status lights in the two normal states, in the order they are printed on the board. Lit is drawn pale; the real colours are not shown. FAULT, GPIO4 and GPIO5 are dark in both.</figcaption>
</figure>
{:/nomarkdown}

What the LEDs tell you, one column per light:

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-unknown"></span>VIN</th><th><span class="xb-led xb-led-unknown"></span>5V</th><th><span class="xb-led xb-led-unknown"></span>EN</th><th><span class="xb-led xb-led-unknown"></span>GOOD</th><th><span class="xb-led xb-led-unknown"></span>FAULT</th><th><span class="xb-led xb-led-unknown"></span>GPIO4, GPIO5</th><th><span class="xb-led xb-led-unknown"></span>HOST FAULT</th><th><span class="xb-led xb-led-red"></span>Underside</th></tr></thead>
  <tbody>
    <tr><td>Where</td><td>Status row, first from the left</td><td>Status row, second</td><td>Status row, third</td><td>Status row, fourth</td><td>Status row, fifth</td><td>Status row, last two</td><td>Alone, upper right</td><td>On the underside</td></tr>
    <tr><td>Lit means</td><td>The supply is delivering DC and the input protection of the 5&nbsp;V path is passing it.</td><td>The always-on 5&nbsp;V output has voltage.</td><td>The controller commands the main output on.</td><td>The main output has risen above about 4.2&nbsp;V (calculated). It shows that the output is on, not that its voltage is correct.</td><td>The breaker of the main output reports a fault.</td><td>Pin 4 or pin 5 of X IN is high. They do nothing else.</td><td>Too much current is being drawn from the controller's 5&nbsp;V pin through this board.</td><td>The input protection of the 5&nbsp;V path reports a fault.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

A grey dot marks a light with no specified colour; the one on the underside is red. All LEDs except VIN and the one on the underside run from the 5&nbsp;V output. If 5&nbsp;V is missing they are all dark, whatever the main output is doing. A dark LED is never proof that a wire is safe to touch.

Three things this board does not do, and what to do about them:

- **It is not an emergency stop.** The main output is switched by a chip on a firmware command. A chip can fail short and firmware can hang. A machine that can hurt someone needs a hardware emergency stop that cuts power without the controller.
- **It does not switch the mains.** `M81` leaves the power supply running and the mains side live. Only pulling the cord removes mains.
- **It does not report back.** The firmware cannot see GOOD or FAULT. If the breaker trips, the controller carries on as if power were present.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Power paths">
  <svg viewBox="0 0 1000 330" role="img" aria-labelledby="xb-psu-how-t">
    <title id="xb-psu-how-t">Mains path: inlet, two fuses, power supply. DC paths from the supply: first, input protection, 5 volt converter, 5V OUT, always on; second, electronic breaker, MAIN OUT, switched by the enable signal from the controller.</title>
    <g fill="#212936" stroke="#59616e" stroke-width="1.5">
      <rect x="20" y="130" width="120" height="70" rx="8" stroke="#ff5d5d"/>
      <rect x="190" y="130" width="120" height="70" rx="8" stroke="#ff5d5d"/>
      <rect x="360" y="130" width="130" height="70" rx="8"/>
      <rect x="560" y="40" width="150" height="70" rx="8"/>
      <rect x="760" y="40" width="110" height="70" rx="8"/>
      <rect x="560" y="220" width="150" height="70" rx="8" stroke="#ffcc33"/>
      <rect x="360" y="250" width="130" height="60" rx="8"/>
    </g>
    <g font-size="13" font-weight="700" fill="#e6ebf2" text-anchor="middle">
      <text x="80" y="162">Mains inlet</text><text x="250" y="162">Two fuses</text><text x="425" y="162">Power supply</text>
      <text x="635" y="70">Input protection</text><text x="815" y="70">5 V converter</text>
      <text x="635" y="250">Electronic breaker</text><text x="425" y="278">Controller</text>
    </g>
    <g font-size="12" fill="#a9b4c2" text-anchor="middle">
      <text x="80" y="182">cord</text><text x="250" y="182">F1, F2</text><text x="425" y="182">mains in, DC out</text>
      <text x="635" y="90">10.8 to 28.6 V only</text><text x="815" y="90">1 A</text>
      <text x="635" y="270">overload: off</text><text x="425" y="296">ENABLE</text>
    </g>
    <g stroke="#ff5d5d" stroke-width="3" fill="none"><path d="M140 165H182"/><path d="M310 165H352"/></g>
    <g fill="#ff5d5d"><path d="M190 165l-9-5v10z"/><path d="M360 165l-9-5v10z"/></g>
    <g stroke="#ffcc33" stroke-width="3" fill="none"><path d="M490 150H525V75H552"/><path d="M490 180H525V245H552"/><path d="M710 255H912"/></g>
    <g fill="#ffcc33"><path d="M560 75l-9-5v10z"/><path d="M560 245l-9-5v10z"/><path d="M920 255l-9-5v10z"/></g>
    <g stroke="#ff9f43" stroke-width="3" fill="none"><path d="M710 75H752"/><path d="M870 75H912"/></g>
    <g fill="#ff9f43"><path d="M760 75l-9-5v10z"/><path d="M920 75l-9-5v10z"/></g>
    <g stroke="#e6ebf2" stroke-width="2.5" fill="none"><path d="M490 304H635V299"/></g>
    <path d="M635 290l-5 9h10z" fill="#e6ebf2"/>
    <g font-size="13" font-weight="700" fill="#e6ebf2"><text x="926" y="72">5V OUT</text><text x="926" y="252">MAIN</text></g>
    <g font-size="12" fill="#a9b4c2"><text x="926" y="90">always on</text><text x="926" y="270">switched</text></g>
  </svg>
  </div>
  <figcaption>Red: mains. Yellow: the supply's DC output. Orange: 5&nbsp;V. White: the enable signal from the controller.</figcaption>
</figure>
{:/nomarkdown}

**Mains path.** The inlet's two current-carrying pins each pass through a fuse holder to the supply's L and N terminals. Both conductors are fused, so the protection does not depend on which way round a plug sits in the wall. Protective earth runs unfused on a wide track of its own to the supply's earth terminal. Nothing on the board runs from mains.

**Always-on 5&nbsp;V.** The supply's positive output first passes an input-protection chip that lets power through only inside its voltage window, then a diode, then a small converter module that makes 5&nbsp;V. The source selector JP2 connects the converter to the 5V OUT terminal and to the board's status lights.

**Switched main output.** The supply's positive output also goes, through the source selector JP1, to an electronic breaker: a chip that measures current and voltage and controls the path to the MAIN connectors. It conducts only while the enable signal from the controller is high, the voltage is inside its window and the current is below its limit. After a fault it switches off and then tries again by itself. A transistor in front of it stops current from flowing backwards from the output into the supply.

**Enable input.** A resistor pulls the enable line low. With the ribbon cable unplugged or the controller unpowered, the main output is off.

**X CHAIN.** Each of the ten pins of X IN continues to the same pin of X CHAIN through a small solder link on the underside. A board plugged into X CHAIN sees exactly what this board sees.

## Options {#options}

### Source selectors

JP1 and JP2 are three-pin headers. The middle pin is the board's rail; joining it to the pin on its left or on its right chooses what feeds the rail. The pin names are printed on the underside.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Selector</th><th>Join</th><th>Result</th></tr></thead>
  <tbody>
    <tr><td rowspan="2"><b>JP2</b>, 5&nbsp;V source</td><td>BUCK and 5V (left and middle)</td><td>Normal use. The 5&nbsp;V output comes from the on-board converter.</td></tr>
    <tr><td>5V and HOST (middle and right)</td><td>The 5&nbsp;V output comes from the controller's 5&nbsp;V pin, limited to about 0.43&nbsp;A (calculated). For testing without the power supply.</td></tr>
    <tr><td rowspan="2"><b>JP1</b>, main source</td><td>PSU and MAIN (left and middle)</td><td>Normal use. The main output is the supply's voltage.</td></tr>
    <tr><td>MAIN and HOST (middle and right)</td><td>The main output is the controller's 5&nbsp;V, through the same 0.43&nbsp;A limit. For checking the enable signal and the LEDs on the bench.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

{::nomarkdown}
<div class="xb-jumpers">
  <div class="xb-jumper">
    <b>JP2, 5 V source</b>
    <svg viewBox="0 0 230 86" role="img" aria-label="Three pins printed BUCK, 5V and HOST; the left and middle pins are joined.">
      <rect x="20" y="14" width="120" height="36" rx="10" fill="#33290d" stroke="#ffcc33" stroke-width="2.5"/>
      <g fill="#e0b84a" stroke="#6b5310"><circle cx="45" cy="32" r="9"/><circle cx="115" cy="32" r="9"/><circle cx="185" cy="32" r="9"/></g>
      <g font-size="12" fill="#e6ebf2" text-anchor="middle"><text x="45" y="74">BUCK</text><text x="115" y="74">5V</text><text x="185" y="74">HOST</text></g>
    </svg>
    <span>Left and middle joined (shown): normal use, 5&nbsp;V from the on-board converter. Middle and right joined: 5&nbsp;V from the controller.</span>
  </div>
  <div class="xb-jumper">
    <b>JP1, main source</b>
    <svg viewBox="0 0 230 86" role="img" aria-label="Three pins printed PSU, MAIN and HOST; the left and middle pins are joined.">
      <rect x="20" y="14" width="120" height="36" rx="10" fill="#33290d" stroke="#ffcc33" stroke-width="2.5"/>
      <g fill="#e0b84a" stroke="#6b5310"><circle cx="45" cy="32" r="9"/><circle cx="115" cy="32" r="9"/><circle cx="185" cy="32" r="9"/></g>
      <g font-size="12" fill="#e6ebf2" text-anchor="middle"><text x="45" y="74">PSU</text><text x="115" y="74">MAIN</text><text x="185" y="74">HOST</text></g>
    </svg>
    <span>Left and middle joined (shown): normal use, the main output is the supply's voltage. Middle and right joined: bench test from the controller's 5&nbsp;V.</span>
  </div>
</div>
{:/nomarkdown}

With no plug on a selector, its rail has no source: no 5&nbsp;V output without JP2, no main output without JP1. Never join all three pins.

### Chain links

Ten solder links decide which pins reach the next board. See [Chaining](#chaining).

### LED links

Each of the eight top-side LEDs has a small solder link beside it, delivered joined. Cut the link to disable that LED. The LED on the underside has one too.

### Supply contacts

Each of the nine positions on the top edge carries two alternative footprints: a metal fork that is clamped under the supply's terminal screw, or a socket that slides onto a flat blade fixed under that screw.

### Test pads

The underside has three pairs of small pads: the 5&nbsp;V output, the main output and the protected controller 5&nbsp;V, each with a ground pad beside it. They are low-voltage points, but they sit on a board that carries mains. The board prints the rule: **LV ONLY - ISOLATE MAINS BEFORE PROBING**.

## Chaining {#chaining}

**X CHAIN** repeats all ten pins of X IN. A second board plugged into it with another ribbon cable receives the same pins from the controller: the same power pins, the same enable signal on pin 3, and pins 4 to 9.

{::nomarkdown}
{% include _includes/extension-chain-figure.html id="xb-psu" board="Power supply connector board" in_label="X IN" chain_label="X CHAIN" lane1="3.3 V, 5 V and ground (pins 1, 2, 10)" s1="closed" lane2="pins 3, 4, 5: used by this board too" s2="closed" lane3="pins 6 to 9, not used by this board" s3="closed" caption="All ten links are delivered closed." %}
{:/nomarkdown}

### X CHAIN pins

X CHAIN has the same ten pins in the same positions as X IN (see the [pin positions](#pinout) drawing).

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>X CHAIN pin</th><th>Carries</th><th>Comes from</th><th>Does this board use it too?</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>X IN pin 1, the controller's 3.3&nbsp;V</td><td>No</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>X IN pin 2, the controller's 5&nbsp;V</td><td>Only when a source selector is set to HOST</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">ENABLE</span></td><td>X IN pin 3, <code>PB1</code> on header G_F</td><td>Yes: switches the main output</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-stat">GPIO4</span></td><td>X IN pin 4, <code>PJ4</code></td><td>Yes: lights the GPIO4 LED</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-stat">GPIO5</span></td><td>X IN pin 5, <code>PA4</code></td><td>Yes: lights the GPIO5 LED</td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-c">Free</span></td><td>X IN pin 6, <code>PG0</code></td><td>No</td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-c">Free</span></td><td>X IN pin 7, <code>PJ3</code></td><td>No</td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-c">Free</span></td><td>X IN pin 8, <code>PG1</code></td><td>No</td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-c">Free</span></td><td>X IN pin 9, <code>PJ2</code></td><td>No</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>X IN pin 10, ground</td><td>Yes: joined to the supply's negative output</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

It is useful for:

- **Reaching a second board from one header.** This board only uses pins 3, 4 and 5. Pins 6 to 9 pass through untouched, so a board on X CHAIN that uses those pins works as if it were plugged into the controller directly.
- **Letting another board follow the enable signal.** A board on X CHAIN that listens to pin 3 switches together with this board's main output.

**Releasing a pin.** Ten solder links on the underside, below the status lights, connect X IN to X CHAIN pin by pin. All ten are delivered joined. Cut a link to stop that pin from reaching the next board, for example pin 3 if the next board must not see this board's enable signal.

Check what the second board does with every pin before you connect it, in particular pins 1 and 2: they carry the controller's 3.3&nbsp;V and 5&nbsp;V, and whatever the second board draws from them comes from the controller.

## Troubleshooting {#troubleshooting}

Unplug the mains cord before every check that involves touching the board.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>When you see</th><th>It means</th><th>Do this</th></tr></thead>
  <tbody>
    <tr><td>No LED at all with the cord plugged in</td><td>The supply is not running, or it has no path to the board.</td><td>Unplug. Check both fuses, the cord, and that all nine contacts are tight on the supply's terminals.</td></tr>
    <tr><td>VIN dark, red LED on the underside lit</td><td>The supply's voltage is outside the window of the 5&nbsp;V path, about 10.8 to 28.6&nbsp;V (calculated), or the 5&nbsp;V path is overloaded.</td><td>Unplug. Disconnect 5V OUT and try again. Measure the supply's output voltage on its own.</td></tr>
    <tr><td>VIN lit, 5V dark</td><td>The 5&nbsp;V rail has no source.</td><td>Check that JP2 joins BUCK and 5V.</td></tr>
    <tr><td>EN stays dark on <code>M80</code></td><td>The command does not reach the board.</td><td>Check the ribbon cable and its direction, then the <code>[switch]</code> lines and that the Smoothieboard was restarted after editing.</td></tr>
    <tr><td>EN lit, GOOD dark</td><td>The breaker has nothing to switch, or it is refusing to switch on.</td><td>Check that JP1 joins PSU and MAIN. If it does, see the FAULT row below.</td></tr>
    <tr><td>FAULT lit while the output is commanded on, or the machine's power comes and goes</td><td>The breaker tripped and is retrying: too much current, a short circuit, or a supply voltage above about 31&nbsp;V (calculated).</td><td>Send <code>M81</code> and unplug. Disconnect the outputs and find the overload before trying again.</td></tr>
    <tr><td>HOST FAULT lit</td><td>A selector is set to HOST and more than about 0.43&nbsp;A is drawn from the controller's 5&nbsp;V.</td><td>Set the selectors back to normal use, or reduce what is connected.</td></tr>
    <tr><td>The main output is on without <code>M80</code></td><td>The enable line is held high, or the breaker has failed.</td><td>Unplug the ribbon cable. If the output stays on, stop using the board.</td></tr>
    <tr><td>A fuse blows as soon as the cord is plugged in</td><td>A short on the mains side or a fault in the supply.</td><td>Do not fit a bigger fuse. Unplug and have the mains wiring checked.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/). Say the make and model of your power supply, what is connected to each output, and which LEDs are lit.

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/power-supply-connector-board/psu-connector-schematic.pdf">Schematic (PDF)</a></td><td>The circuit diagram, seven pages</td></tr>
    <tr><td><a href="/images/extensions/power-supply-connector-board/psu-connector-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint. Fuses and selector plugs are not listed.</td></tr>
    <tr><td><a href="/images/extensions/power-supply-connector-board/psu-connector-diagram.png">Top view (SVG)</a></td><td>The drawing used on this page, with a transparent background</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the corner marked 0, 0 with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-psu-mount-t">
  <title id="xb-psu-mount-t">Mounting drawing of the power supply connector board, component side: outline 102 by 72 millimetres with 4 mounting holes and 2 cable-tie holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="239.2" y="78.0" width="481.7" height="340.0" rx="4.7" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M239.2 56H720.8"/><path d="M239.2 50V62"/><path d="M720.8 50V62"/><path d="M746.8 78.0V418.0"/><path d="M740.8 78.0h12"/><path d="M740.8 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">102</text>
  <text x="758.8" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">72</text>
  <circle cx="239.2" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="227.2" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M181.2 104.0h30" fill="none"/><path d="M215.2 104.0l-8 -4v8z"/><path d="M181.2 104.0v30" fill="none"/><path d="M181.2 138.0l-4 -8h8z"/></g>
  <text x="219.2" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="177.2" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="413.9" cy="186.6" r="7.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M402.3 186.6h23.1M413.9 175.1v23.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="406.3" y="214.2" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  37.00, 23.00</text>
  <circle cx="697.2" cy="186.6" r="7.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M685.7 186.6h23.1M697.2 175.1v23.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="704.8" y="214.2" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  97.00, 23.00</text>
  <circle cx="413.9" cy="375.5" r="7.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M402.3 375.5h23.1M413.9 363.9v23.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="406.3" y="357.9" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  37.00, 63.00</text>
  <circle cx="697.2" cy="375.5" r="7.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M685.7 375.5h23.1M697.2 363.9v23.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="704.8" y="357.9" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  97.00, 63.00</text>
  <circle cx="678.3" cy="92.2" r="5.9" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <circle cx="701.9" cy="92.2" r="5.9" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <text x="664.4" y="96.2" text-anchor="end" font-size="12" fill="#a9b4c2">cable tie</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 102 × 72&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>37.00</td><td>23.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>97.00</td><td>23.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>37.00</td><td>63.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>97.00</td><td>63.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>–</td><td>93.00</td><td>3.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
    <tr><td>–</td><td>98.00</td><td>3.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

A dash means no figure is given.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Conditions</th></tr></thead>
  <tbody>
    <tr><td>Supply voltage</td><td>Top contacts +V and COM</td><td>12 V</td><td>—</td><td>24 V</td><td>—</td></tr>
    <tr><td>Voltage window of the 5 V path</td><td>+V input</td><td>≈ 10.8 V</td><td>—</td><td>≈ 28.6 V</td><td>Calculated from the design</td></tr>
    <tr><td>Main output current</td><td>MAIN OUT and MAIN together</td><td>—</td><td>—</td><td>5 A</td><td>Both connectors together</td></tr>
    <tr><td>Main output current limit</td><td>Electronic breaker</td><td>—</td><td>≈ 5.45 A</td><td>—</td><td>Calculated from the chip's datasheet</td></tr>
    <tr><td>Main output overvoltage switch-off</td><td>Electronic breaker</td><td>—</td><td>≈ 31 V</td><td>—</td><td>Calculated</td></tr>
    <tr><td>5 V output current</td><td>5V OUT</td><td>—</td><td>—</td><td>1 A</td><td>Converter module rating (maker). The status lights use a few milliamps of it.</td></tr>
    <tr><td>Enable signal, switch-on level</td><td>X IN pin 3</td><td>—</td><td>—</td><td>2 V</td><td>Chip datasheet: on at 2&nbsp;V at most, so 3.3&nbsp;V logic switches it</td></tr>
    <tr><td>Current limit on the controller's 5 V</td><td>X IN pin 2, HOST modes</td><td>—</td><td>≈ 0.43 A</td><td>—</td><td>Calculated from the design</td></tr>
    <tr><td>GOOD light threshold</td><td>Main output</td><td>—</td><td>≈ 4.2 V</td><td>—</td><td>Calculated</td></tr>
    <tr><td>Mains inlet rating</td><td>Inlet</td><td>—</td><td>—</td><td>10 A, 250 V AC</td><td>Inlet maker's rating; applies to the inlet only</td></tr>
    <tr><td>Mains to low-voltage spacing</td><td>Board</td><td>9.5 mm</td><td>—</td><td>—</td><td>Measured in the design files; not a safety certification</td></tr>
    <tr><td>Mains to protective earth spacing</td><td>Board</td><td>3.0 mm</td><td>—</td><td>—</td><td>Measured in the design files; not a safety certification</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Component stress limits

These are limits of individual parts, beyond which the part can be damaged. They are not operating conditions; stay inside the table above.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Circuit</th><th>Pin or device stress</th><th>Absolute limit</th></tr></thead>
  <tbody>
    <tr><td>Supply contacts</td><td>Supply fitted with its terminals in the opposite order</td><td>No protection: mains would reach the DC side</td></tr>
    <tr><td>Main output</td><td>Voltage fed back from the load</td><td>Blocked by the breaker by design</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
