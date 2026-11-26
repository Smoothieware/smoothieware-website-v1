---
layout: default
title: "Seven-channel DC mechanical relay"
description: "Seven isolated DC relays for Smoothieboard V2: pinout, wiring, configuration and troubleshooting."
permalink: /extensions/seven-channel-dc-mechanical-relay
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Relay output</p>
    <h1 id="seven-channel-dc-mechanical-relay">Seven-channel DC mechanical relay</h1>
    <p class="xb-lead">Switch seven low-voltage DC devices from G-code: lights, pumps, fans, heater elements. One ribbon cable to your Smoothieboard, one 12&nbsp;V supply, and each device gets its own isolated relay.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/seven-channel-dc-mechanical-relay/seven-channel-dc-mechanical-relay-diagram.png" alt="Top view of the seven-channel relay board: seven green three-way screw terminals along the top edge, seven relays below them, two ribbon-cable connectors at the bottom left, a two-way screw terminal on the left edge and a yellow XT30 connector on the right edge.">
    <figcaption>Top view, drawn from the board's design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>7</b><span>independent relays</span></div>
  <div class="xb-stat"><b>NO + NC</b><span>changeover contacts on every channel</span></div>
  <div class="xb-stat"><b>5 A</b><span>per channel at up to 24&nbsp;V&nbsp;DC</span></div>
  <div class="xb-stat"><b>2 barriers</b><span>optical, then magnetic, between your controller and the load</span></div>
  <div class="xb-stat"><b>12 V</b><span>coil supply, about 0.4&nbsp;A with all seven on</span></div>
  <div class="xb-stat"><b>220 × 100</b><span>millimetres, four M3 mounting holes</span></div>
</div>

<nav class="xb-nav" aria-label="On this page">
  <a href="#specs">Tech specs</a>
  <a href="#tour">Board tour</a>
  <a href="#pinout">Pinout</a>
  <a href="#what-you-need">What you need</a>
  <a href="#get-started">Get started</a>
  <a href="#configuration">Configuration</a>
  <a href="#loads">Wiring loads</a>
  <a href="#how-it-works">How it works</a>
  <a href="#options">Power options</a>
  <a href="#chaining">Chaining</a>
  <a href="#troubleshooting">Troubleshooting</a>
  <a href="#downloads">Downloads</a>
  <a href="#mounting">Mounting</a>
  <a href="#electrical">Electrical</a>
</nav>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="lightning-charge"></sl-icon>
  <strong>This board switches DC only.</strong> It is designed for loads up to 48&nbsp;V DC. Do not connect mains to it: use the <a href="/extensions/seven-channel-ac-mechanical-relay">seven-channel AC mechanical relay</a> for that. Wire the load terminals with every supply off. This board is not certified to any electrical safety standard.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Channels</td><td>7 relays, each switched independently</td></tr>
    <tr><td>Contacts</td><td>Changeover (SPDT): common <b>C</b>, normally open <b>NO</b>, normally closed <b>NC</b>.</td></tr>
    <tr><td>Load rating</td><td>Per channel, resistive load on <b>NO</b>: 5&nbsp;A through 24&nbsp;V&nbsp;DC, or 2&nbsp;A above 24 up to 48&nbsp;V&nbsp;DC. The rating does not cover endurance on <b>NC</b>, inductive loads, 5&nbsp;A at 48&nbsp;V, very small loads or all channels at full load together.</td></tr>
    <tr><td>Relay</td><td>Finder 40.61.9.012.1000 ×7, soldered, 12&nbsp;V coil, about 55&nbsp;mA (0.66&nbsp;W) nominal. <b>C</b> is a floating contact, never a logic or coil ground.</td></tr>
    <tr><td>Load terminals</td><td>3-way screw terminals, 7.5&nbsp;mm pitch (Degson DG302-7.5-03P)</td></tr>
    <tr><td>Control inputs</td><td>7 logic inputs, on when HIGH, 3.3&nbsp;V compatible. An unconnected or LOW input keeps its relay off.</td></tr>
    <tr><td>Control connector</td><td>2×5-pin, 1.27&nbsp;mm pitch Gadgeteer socket, type Y (seven general-purpose pins). A second identical connector passes all ten pins on to another board.</td></tr>
    <tr><td>Coil supply</td><td>12&nbsp;V DC, on a 2-way screw terminal (5.08&nbsp;mm pitch) or an XT30 connector. Each input has a 1.5&nbsp;A fuse and reverse-polarity protection; an electronic fuse then limits the current and voltage reaching the coils.</td></tr>
    <tr><td>Coil current</td><td>55&nbsp;mA per relay that is on (nominal); 0.385&nbsp;A with all seven on, plus about 2&nbsp;mA per indicator. A 12&nbsp;V, 1&nbsp;A supply is recommended.</td></tr>
    <tr><td>Current drawn from the controller</td><td>About 2&nbsp;mA from each control pin and about 6&nbsp;mA from the 5&nbsp;V pin, per relay that is on (calculated from the schematic). The worst case is 3.54&nbsp;mA per control pin and 8.55&nbsp;mA from the 5&nbsp;V pin, per channel.</td></tr>
    <tr><td>Isolation</td><td>One optocoupler per channel between the controller and the 12&nbsp;V coil circuit; the relay itself between the coil circuit and the load. At least 8&nbsp;mm between load copper and the other circuits, and between neighbouring channels.</td></tr>
    <tr><td>Indicators</td><td>One green LED per channel, lit while that relay's coil is driven</td></tr>
    <tr><td>Size</td><td>220 × 100&nbsp;mm, 1.6&nbsp;mm two-layer board with 70&nbsp;µm copper, M3 mounting holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> and Smoothieware V2 firmware. Uses the standard <a href="/switch">Switch module</a>; nothing extra to install.</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its limits and conditions is in the [electrical specifications](#electrical) appendix; the hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side, with the load terminals at the top.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/seven-channel-dc-mechanical-relay/seven-channel-dc-mechanical-relay-diagram.png" alt="Top view of the relay board with fourteen numbered markers that are explained in the list below.">
      <span class="xb-ch" style="left:8.8%;top:35%">RELAY 1</span>
      <span class="xb-ch" style="left:22.2%;top:35%">RELAY 2</span>
      <span class="xb-ch" style="left:35.7%;top:35%">RELAY 3</span>
      <span class="xb-ch" style="left:49.2%;top:35%">RELAY 4</span>
      <span class="xb-ch" style="left:62.7%;top:35%">RELAY 5</span>
      <span class="xb-ch" style="left:76.2%;top:35%">RELAY 6</span>
      <span class="xb-ch" style="left:89.7%;top:35%">RELAY 7</span>
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:2.3%;top:8.2%" aria-label="1: load terminals">1<span class="xb-pop"><b>Load terminals</b> — one three-way screw terminal per relay, marked <b>NO</b>, <b>NC</b> and <b>C</b> on the board. <i>Relay 1 is on the left, relay 7 on the right.</i></span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-2" style="left:8.8%;top:24%" aria-label="2: relays">2<span class="xb-pop"><b>Relays</b> — seven soldered Finder 12&nbsp;V relays. You hear a click each time one switches.</span></a>
      <a class="xb-mk xb-pl" href="#tour-3" style="left:8.8%;top:53.5%" aria-label="3: indicator lights">3<span class="xb-pop"><b>Indicator lights</b> — a green LED per channel, lit while the coil is driven. <i>A dark LED does not prove a terminal is unpowered: NC stays connected to C when the relay is off.</i></span></a>
      <a class="xb-mk xb-pl" href="#tour-4" style="left:12.5%;top:59%" aria-label="4: optocouplers">4<span class="xb-pop"><b>Optocouplers</b> — one per channel. They carry each on/off command as light, so there is no electrical path from your controller to the coil circuit.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:45.2%;top:52.9%" aria-label="5: relay driver">5<span class="xb-pop"><b>Relay driver</b> — one chip (TPL7407L) that switches all seven coils.</span></a>
      <a class="xb-mk xb-pl" href="#tour-6" style="left:6.5%;top:87.3%" aria-label="6: HOST Y connector">6<span class="xb-pop"><b>HOST Y</b> — the ribbon-cable connector to your Smoothieboard. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pl" href="#tour-7" style="left:14.2%;top:87.3%" aria-label="7: CHAIN Y connector">7<span class="xb-pop"><b>CHAIN Y</b> — a copy of HOST Y, pin for pin, for a second board that should follow the same seven signals.</span></a>
      <a class="xb-mk xb-pl" href="#tour-8" style="left:9.2%;top:64.7%" aria-label="8: channel links">8<span class="xb-pop"><b>Channel links</b> — seven small solder bridges on the component side, one per channel (marked LOCAL GPIO cut link). Cut one to disconnect that relay from the cable. <i>See chaining.</i></span></a>
      <a class="xb-mk" href="#tour-9" style="left:30.8%;top:93%" aria-label="9: host power link">9<span class="xb-pop"><b>Host power link</b> — two pins, left open. Fit a jumper only if you want the board to make its own 12&nbsp;V from the controller&rsquo;s 5&nbsp;V. <i>See power options.</i></span></a>
      <a class="xb-mk" href="#tour-10" style="left:35.3%;top:75.5%" aria-label="10: isolated converter">10<span class="xb-pop"><b>Isolated 5&nbsp;V to 12&nbsp;V converter</b> — used only in host-powered mode.</span></a>
      <a class="xb-mk" href="#tour-11" style="left:72.6%;top:84.3%" aria-label="11: 12 volt input selector">11<span class="xb-pop"><b>12&nbsp;V input selector</b> — three pins: screw terminal (left) or XT30 (right). <i>Delivered with no jumper fitted, so the coils have no power until you choose.</i></span></a>
      <a class="xb-mk xb-pr" href="#tour-12" style="left:80.7%;top:84.3%" aria-label="12: coil source selector">12<span class="xb-pop"><b>Coil source selector</b> — three pins: external 12&nbsp;V (left) or host-powered (right). Delivered on external.</span></a>
      <a class="xb-mk xb-pr" href="#tour-13" style="left:98.2%;top:79.4%" aria-label="13: XT30 12 volt input">13<span class="xb-pop"><b>XT30 12&nbsp;V input</b> — polarised connector, + and − are printed beside it.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-14" style="left:3.8%;top:48.0%" aria-label="14: TERM 12V input">14<span class="xb-pop"><b>TERM 12V input</b> — two-way screw terminal on the left edge. Upper screw 0&nbsp;V, lower screw +12&nbsp;V.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Load terminals</b> — one three-way screw terminal per relay, marked <b>NO</b>, <b>NC</b> and <b>C</b> on the board. <small>Relay 1 is on the left, relay 7 on the right.</small></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Relays</b> — seven soldered Finder 12&nbsp;V relays. You hear a click each time one switches.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Indicator lights</b> — a green LED per channel, lit while the coil is driven. <small>A dark LED does not prove a terminal is unpowered: NC stays connected to C when the relay is off.</small></div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Optocouplers</b> — one per channel. They carry each on/off command as light, so there is no electrical path from your controller to the coil circuit.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Relay driver</b> — one chip (TPL7407L) that switches all seven coils.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>HOST Y</b> — the ribbon-cable connector to your Smoothieboard. <small>See the pinout.</small></div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>CHAIN Y</b> — a copy of HOST Y, pin for pin, for a second board that should follow the same seven signals.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Channel links</b> — seven small solder bridges on the component side, one per channel (marked LOCAL GPIO cut link). Cut one to disconnect that relay from the cable. <small>See chaining.</small></div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Host power link</b> — two pins, left open. Fit a jumper only if you want the board to make its own 12&nbsp;V from the controller&rsquo;s 5&nbsp;V. <small>See power options.</small></div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Isolated 5&nbsp;V to 12&nbsp;V converter</b> — used only in host-powered mode.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>12&nbsp;V input selector</b> — three pins: screw terminal (left) or XT30 (right). <small>Delivered with no jumper fitted, so the coils have no power until you choose.</small></div></li>
    <li id="tour-12"><span class="xb-n">12</span><div><b>Coil source selector</b> — three pins: external 12&nbsp;V (left) or host-powered (right). Delivered on external.</div></li>
    <li id="tour-13"><span class="xb-n">13</span><div><b>XT30 12&nbsp;V input</b> — polarised connector, + and − are printed beside it.</div></li>
    <li id="tour-14"><span class="xb-n">14</span><div><b>TERM 12V input</b> — two-way screw terminal on the left edge. Upper screw 0&nbsp;V, lower screw +12&nbsp;V.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### HOST Y: control connector

Connect HOST Y to the header labelled **G_F** on the Smoothieboard V2 Prime. All seven signal pins of that header are free general-purpose pins, so nothing else on the board is affected. The last column is the name you use for each pin in the configuration file.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>HOST Y pin</th><th>Function</th><th>Controls</th><th>Smoothieboard V2 Prime pin (header G_F)</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Not used by this board; passed on to CHAIN Y</td><td>—</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Powers the input side of the optocouplers</td><td>—</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">IN 1</span></td><td>Relay 1</td><td><code>PB1</code></td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">IN 2</span></td><td>Relay 2</td><td><code>PJ4</code></td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">IN 3</span></td><td>Relay 3</td><td><code>PA4</code></td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">IN 4</span></td><td>Relay 4</td><td><code>PG0</code></td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-sig">IN 5</span></td><td>Relay 5</td><td><code>PJ3</code></td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">IN 6</span></td><td>Relay 6</td><td><code>PG1</code></td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">IN 7</span></td><td>Relay 7</td><td><code>PJ2</code></td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Controller ground</td><td>—</td></tr>
  </tbody>
</table></div>

<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="HOST Y connector pin positions">
  <svg viewBox="0 0 1000 250" role="img" aria-labelledby="xb-hosty-t">
    <title id="xb-hosty-t">HOST Y seen from above: odd pins 1 to 9 in the row nearest the board edge, even pins 2 to 10 in the row behind, pin 1 at the left.</title>
    <rect x="360" y="85" width="280" height="80" rx="6" fill="#0d0f12" stroke="#59616e" stroke-width="2"/>
    <g fill="#e0b84a" stroke="#6b5310">
      <rect x="388" y="98" width="16" height="16"/><rect x="440" y="98" width="16" height="16"/><rect x="492" y="98" width="16" height="16"/><rect x="544" y="98" width="16" height="16"/><rect x="596" y="98" width="16" height="16"/>
      <rect x="388" y="136" width="16" height="16"/><rect x="440" y="136" width="16" height="16"/><rect x="492" y="136" width="16" height="16"/><rect x="544" y="136" width="16" height="16"/><rect x="596" y="136" width="16" height="16"/>
    </g>
    <g stroke-width="2" fill="none">
      <path d="M396 98V62" stroke="#ff9f43"/><path d="M448 98V62" stroke="#5fb3ff"/><path d="M500 98V62" stroke="#5fb3ff"/><path d="M552 98V62" stroke="#5fb3ff"/><path d="M604 98V62" stroke="#8a94a3"/>
      <path d="M396 152V188" stroke="#ff5d5d"/><path d="M448 152V188" stroke="#5fb3ff"/><path d="M500 152V188" stroke="#5fb3ff"/><path d="M552 152V188" stroke="#5fb3ff"/><path d="M604 152V188" stroke="#5fb3ff"/>
    </g>
    <g font-size="13" font-weight="700" text-anchor="middle">
      <rect x="372" y="36" width="48" height="26" rx="13" fill="#ff9f43"/><text x="396" y="54" fill="#201004">5 V</text>
      <rect x="424" y="36" width="48" height="26" rx="13" fill="#5fb3ff"/><text x="448" y="54" fill="#04182b">IN 2</text>
      <rect x="476" y="36" width="48" height="26" rx="13" fill="#5fb3ff"/><text x="500" y="54" fill="#04182b">IN 4</text>
      <rect x="528" y="36" width="48" height="26" rx="13" fill="#5fb3ff"/><text x="552" y="54" fill="#04182b">IN 6</text>
      <rect x="580" y="36" width="48" height="26" rx="13" fill="#0d0f12" stroke="#8a94a3"/><text x="604" y="54" fill="#fff">GND</text>
      <rect x="372" y="188" width="48" height="26" rx="13" fill="#ff5d5d"/><text x="396" y="206" fill="#1c0606">3.3 V</text>
      <rect x="424" y="188" width="48" height="26" rx="13" fill="#5fb3ff"/><text x="448" y="206" fill="#04182b">IN 1</text>
      <rect x="476" y="188" width="48" height="26" rx="13" fill="#5fb3ff"/><text x="500" y="206" fill="#04182b">IN 3</text>
      <rect x="528" y="188" width="48" height="26" rx="13" fill="#5fb3ff"/><text x="552" y="206" fill="#04182b">IN 5</text>
      <rect x="580" y="188" width="48" height="26" rx="13" fill="#5fb3ff"/><text x="604" y="206" fill="#04182b">IN 7</text>
    </g>
    <g font-size="12" fill="#a9b4c2" text-anchor="middle">
      <text x="396" y="28">2</text><text x="448" y="28">4</text><text x="500" y="28">6</text><text x="552" y="28">8</text><text x="604" y="28">10</text>
      <text x="396" y="232">1</text><text x="448" y="232">3</text><text x="500" y="232">5</text><text x="552" y="232">7</text><text x="604" y="232">9</text>
    </g>
    <g font-size="14" fill="#a9b4c2">
      <text x="340" y="130" text-anchor="end">Row towards the relays ▲</text>
      <text x="340" y="206" text-anchor="end">Pin 1, left, row towards the board edge</text>
      <text x="660" y="130">HOST Y, seen from above</text>
      <text x="660" y="150">CHAIN Y has the same layout</text>
    </g>
  </svg>
  </div>
  <figcaption>Pin positions of HOST Y with the board held as in the tour above. The drawing is enlarged; the real pins are 1.27&nbsp;mm apart.</figcaption>
</figure>
{:/nomarkdown}

### Load terminals: relay 1 to relay 7

Every relay has the same three screws. They are not connected to anything else on the board, and not to each other between channels.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Marking</th><th>Name</th><th>Relay off</th><th>Relay on</th><th>Use it for</th></tr></thead>
  <tbody>
    <tr><td><span class="xb-pill xb-p-no">NO</span></td><td>Normally open</td><td>Disconnected</td><td>Connected to C</td><td>A device that should run only when you switch it on. This is the usual choice.</td></tr>
    <tr><td><span class="xb-pill xb-p-nc">NC</span></td><td>Normally closed</td><td>Connected to C</td><td>Disconnected</td><td>A device that should run by default and stop on command.</td></tr>
    <tr><td><span class="xb-pill xb-p-c">C</span></td><td>Common</td><td colspan="2">The moving contact: always connected to one of the other two</td><td>The positive supply for that device.</td></tr>
  </tbody>
</table></div>

<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Relay contact positions">
  <svg viewBox="0 0 1000 210" role="img" aria-labelledby="xb-contacts-t">
    <title id="xb-contacts-t">With the relay off, C is connected to NC. With the relay on, C is connected to NO.</title>
    <g font-size="15" font-weight="700">
      <text x="250" y="34" text-anchor="middle" fill="#e6ebf2">Relay off (also with no power at all)</text>
      <text x="750" y="34" text-anchor="middle" fill="#e6ebf2">Relay on</text>
    </g>
    <path d="M500 20V195" stroke="#38424f" stroke-width="2" stroke-dasharray="6 6"/>
    <g>
      <path d="M90 120H190" stroke="#e6ebf2" stroke-width="5"/>
      <path d="M190 120L318 82" stroke="#e6ebf2" stroke-width="5" stroke-linecap="round"/>
      <path d="M322 78H420" stroke="#ff8f8f" stroke-width="5"/>
      <path d="M322 162H420" stroke="#57d18c" stroke-width="5" opacity=".45"/>
      <circle cx="190" cy="120" r="8" fill="#e6ebf2"/><circle cx="322" cy="78" r="8" fill="#ff8f8f"/><circle cx="322" cy="162" r="8" fill="#57d18c" opacity=".45"/>
      <g font-size="14" font-weight="700" text-anchor="middle">
        <rect x="40" y="106" width="50" height="28" rx="14" fill="#e6ebf2"/><text x="65" y="125" fill="#14181d">C</text>
        <rect x="420" y="64" width="50" height="28" rx="14" fill="#ff8f8f"/><text x="445" y="83" fill="#2b0707">NC</text>
        <rect x="420" y="148" width="50" height="28" rx="14" fill="#57d18c" opacity=".45"/><text x="445" y="167" fill="#052413">NO</text>
      </g>
      <text x="250" y="198" text-anchor="middle" font-size="13" fill="#a9b4c2">C to NC: connected · C to NO: open</text>
    </g>
    <g transform="translate(500 0)">
      <path d="M90 120H190" stroke="#e6ebf2" stroke-width="5"/>
      <path d="M190 120L318 158" stroke="#e6ebf2" stroke-width="5" stroke-linecap="round"/>
      <path d="M322 78H420" stroke="#ff8f8f" stroke-width="5" opacity=".45"/>
      <path d="M322 162H420" stroke="#57d18c" stroke-width="5"/>
      <circle cx="190" cy="120" r="8" fill="#e6ebf2"/><circle cx="322" cy="78" r="8" fill="#ff8f8f" opacity=".45"/><circle cx="322" cy="162" r="8" fill="#57d18c"/>
      <g font-size="14" font-weight="700" text-anchor="middle">
        <rect x="40" y="106" width="50" height="28" rx="14" fill="#e6ebf2"/><text x="65" y="125" fill="#14181d">C</text>
        <rect x="420" y="64" width="50" height="28" rx="14" fill="#ff8f8f" opacity=".45"/><text x="445" y="83" fill="#2b0707">NC</text>
        <rect x="420" y="148" width="50" height="28" rx="14" fill="#57d18c"/><text x="445" y="167" fill="#052413">NO</text>
      </g>
      <text x="250" y="198" text-anchor="middle" font-size="13" fill="#a9b4c2">C to NO: connected · C to NC: open</text>
    </g>
  </svg>
  </div>
  <figcaption>What happens inside each relay. The symbol shows the electrical connection, not the physical order of the screws, which is NO, NC, C from left to right.</figcaption>
</figure>
{:/nomarkdown}

### 12 V coil supply inputs

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Input</th><th>Contact</th><th>Function</th></tr></thead>
  <tbody>
    <tr><td rowspan="2">TERM 12V<br><span class="xb-note">screw terminal</span></td><td>Upper screw</td><td><span class="xb-pill xb-p-gnd">0 V</span></td></tr>
    <tr><td style="font-weight:400;color:inherit">Lower screw</td><td><span class="xb-pill xb-p-12v">+12 V</span></td></tr>
    <tr><td rowspan="2">XT30<br><span class="xb-note">polarised plug</span></td><td>Contact marked +</td><td><span class="xb-pill xb-p-12v">+12 V</span></td></tr>
    <tr><td style="font-weight:400;color:inherit">Contact marked −</td><td><span class="xb-pill xb-p-gnd">0 V</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Use one input or the other; the [12 V input selector](#options) decides which one feeds the coils. The 12 V circuit is isolated from the controller and from the loads. Do not join its 0 V to the controller's ground.

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Smoothieboard V2 Prime</b><span>Running Smoothieware V2, with its G_F header free.</span></div>
  <div class="xb-card"><b>10-way ribbon cable</b><span>1.27&nbsp;mm pitch, 2×5 sockets at both ends, wired pin 1 to pin 1: the standard Gadgeteer cable.</span></div>
  <div class="xb-card"><b>12&nbsp;V DC power supply</b><span>Regulated, isolated, 1&nbsp;A or more. A plug-in adapter is fine.</span></div>
  <div class="xb-card"><b>One jumper cap</b><span>2.54&nbsp;mm, for the 12&nbsp;V input selector, which is delivered without one.</span></div>
  <div class="xb-card"><b>A fuse for every load</b><span>The board does not fuse your loads. Size each one for its device and wire, never above 5&nbsp;A.</span></div>
  <div class="xb-card"><b>A DC supply for the loads</b><span>Up to 48&nbsp;V DC, separate from the 12&nbsp;V coil supply.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

These steps take you from an unconnected board to a relay that clicks on command, without any load wiring. Connect your loads only after step 6 works.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Minimal wiring diagram">
  <svg viewBox="0 0 1000 400" role="img" aria-labelledby="xb-hookup-t">
    <title id="xb-hookup-t">Minimal wiring: a ribbon cable from header G_F on the Smoothieboard to HOST Y, a 12 volt supply on TERM 12V, and one DC load wired through the C and NO screws of relay 1.</title>
    <rect x="400" y="100" width="300" height="200" rx="8" fill="#1b2028" stroke="#59616e" stroke-width="1.5"/>
    <text x="550" y="122" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">Relay board</text>
    <g fill="#cfd6df" stroke="#5b6570"><circle cx="470" cy="140" r="6"/><circle cx="500" cy="140" r="6"/><circle cx="530" cy="140" r="6"/></g>
    <g font-size="11" font-weight="700" text-anchor="middle"><text x="470" y="166" fill="#57d18c">NO</text><text x="500" y="166" fill="#ff8f8f">NC</text><text x="530" y="166" fill="#e6ebf2">C</text></g>
    <text x="500" y="184" text-anchor="middle" font-size="12" fill="#a9b4c2">Relay 1 load terminal</text>
    <rect x="410" y="214" width="56" height="28" rx="3" fill="#0d0f12" stroke="#8a94a3"/>
    <text x="438" y="232" text-anchor="middle" font-size="11" fill="#e6ebf2">HOST Y</text>
    <text x="620" y="264" text-anchor="middle" font-size="11" fill="#e6ebf2">TERM 12V</text>
    <rect x="30" y="170" width="190" height="130" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/>
    <text x="125" y="226" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Smoothieboard</text>
    <text x="125" y="246" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">V2 Prime</text>
    <rect x="186" y="216" width="26" height="46" rx="3" fill="#0d0f12" stroke="#8a94a3"/>
    <text x="199" y="206" text-anchor="middle" font-size="12" font-weight="700" fill="#ffcc33">G_F</text>
    <path d="M212 246C300 246 330 228 410 228" fill="none" stroke="#8a94a3" stroke-width="16"/>
    <path d="M212 239C300 239 330 221 410 221" fill="none" stroke="#ff5d5d" stroke-width="2"/>
    <text x="304" y="290" text-anchor="middle" font-size="12" fill="#a9b4c2">10-way ribbon cable,</text>
    <text x="304" y="306" text-anchor="middle" font-size="12" fill="#a9b4c2">pin 1 to pin 1</text>
    <rect x="560" y="336" width="150" height="54" rx="8" fill="#212936" stroke="#59616e"/>
    <text x="635" y="368" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">12 V DC supply</text>
    <path d="M598 270V336" stroke="#aeb7c2" stroke-width="7"/><path d="M598 270V336" stroke="#0d0f12" stroke-width="4.5"/>
    <path d="M642 270V336" stroke="#ffd84d" stroke-width="5"/>
    <text x="588" y="312" text-anchor="end" font-size="12" fill="#e6ebf2">0 V</text><text x="652" y="312" font-size="12" fill="#ffd84d">+12 V</text>
    <rect x="780" y="20" width="190" height="70" rx="8" fill="#212936" stroke="#59616e"/>
    <text x="875" y="60" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">DC load supply</text>
    <rect x="30" y="20" width="160" height="70" rx="8" fill="#212936" stroke="#59616e"/>
    <text x="110" y="60" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">Your DC device</text>
    <path d="M190 34H780" fill="none" stroke="#8a94a3" stroke-width="5"/>
    <path d="M780 70H530V140" fill="none" stroke="#b0703c" stroke-width="5"/>
    <rect x="660" y="61" width="46" height="18" rx="4" fill="#141920" stroke="#b0703c" stroke-width="2"/>
    <text x="683" y="74" text-anchor="middle" font-size="10" font-weight="700" fill="#e6ebf2">FUSE</text>
    <path d="M470 140V70H190" fill="none" stroke="#b0703c" stroke-width="5"/>
    <g font-size="12" fill="#e6ebf2">
      <text x="480" y="28" text-anchor="middle" fill="#c4ccd8">Return: straight from the device to the load supply</text>
      <text x="640" y="56" text-anchor="middle" fill="#e0a877">Positive: through a fuse to C</text>
      <text x="330" y="90" text-anchor="middle" fill="#e0a877">Switched positive: NO to the device</text>
    </g>
  </svg>
  </div>
  <figcaption>Minimal wiring with external 12&nbsp;V on the screw terminal and one device on relay&nbsp;1. The load supply is separate from the 12&nbsp;V coil supply. Only the positive wire passes through the board. The drawing is schematic, not to scale.</figcaption>
</figure>

<ol class="xb-steps">
  <li class="xb-step">
    <h3>Switch everything off</h3>
    <p>Power down the Smoothieboard and unplug the 12&nbsp;V supply. Nothing should be connected to the load terminals yet.</p>
  </li>
  <li class="xb-step">
    <h3>Set the two selectors</h3>
    <p>Hold the board with the load terminals at the top and find the two three-pin headers near the bottom right (11 and 12 in the <a href="#tour">board tour</a>).</p>
    <ul>
      <li><b>12&nbsp;V input selector</b> (the left-hand header): fit a jumper cap on the <b>left and middle</b> pins to use the TERM 12V screw terminal. The board is delivered without this jumper.</li>
      <li><b>Coil source selector</b> (the right-hand header): the jumper belongs on the <b>left and middle</b> pins, external 12&nbsp;V. This is how the board is delivered.</li>
      <li><b>Host power link</b> (two pins, bottom edge, left of centre): leave it open.</li>
    </ul>
  </li>
  <li class="xb-step">
    <h3>Connect the ribbon cable</h3>
    <p>Plug one end into the header labelled <b>G_F</b> on the Smoothieboard V2 Prime and the other into <b>HOST Y</b>. Pin 1 must go to pin 1: follow the red edge of the cable.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the 12&nbsp;V supply</h3>
    <p>On the <b>TERM 12V</b> terminal, put the supply's 0&nbsp;V wire in the upper screw and +12&nbsp;V in the lower screw. Leave the supply unplugged for now.</p>
    <p>The input has a reverse-blocking diode: with the two wires swapped, the relays simply stay off.</p>
  </li>
  <li class="xb-step">
    <h3>Add the relays to your configuration</h3>
    <p>Copy the <a href="#configuration">seven-relay configuration</a> below into the configuration file on the Smoothieboard's SD card, then restart the board.</p>
  </li>
  <li class="xb-step">
    <h3>Test without a load</h3>
    <p>Power the Smoothieboard, plug in the 12&nbsp;V supply, and send from your host software or console:</p>
    <pre><code>M64.1</code></pre>
    <p class="xb-expect"><b>You should see and hear:</b> relay 1 clicks and its green LED lights. Send <code>M65.1</code>: it clicks again and the LED goes out. Repeat with <code>.2</code> to <code>.7</code> for the other relays.</p>
    <p>If you have a multimeter, set it to continuity and check relay 1 with nothing else connected: <b>C</b> to <b>NO</b> beeps while the relay is on, <b>C</b> to <b>NC</b> while it is off.</p>
    <p>If nothing happens, go to <a href="#troubleshooting">troubleshooting</a> before going any further.</p>
  </li>
  <li class="xb-step">
    <h3>Wire your loads</h3>
    <p>Switch everything off again, then follow <a href="#loads">Wiring your loads</a>.</p>
    <p class="xb-warn"><b>Load wiring.</b> Never connect or touch the load terminals while any load supply is switched on.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

Smoothieware has no setting called "relay board". Each relay follows one output pin of the controller, and several parts of the firmware, called modules, can drive an output pin. Pick, for each relay, the module that matches what its device has to do:

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Switch devices on and off from G-code or the console</td><td><a href="/switch">Switch</a>, digital output</td><td><a href="#config-onoff">1. Seven independent relays</a></td></tr>
    <tr><td>Use the usual machine commands: coolant, fan</td><td><a href="/switch">Switch</a>, with other commands</td><td><a href="#config-codes">2. Coolant and fan commands</a></td></tr>
    <tr><td>Hold a temperature with a DC heater</td><td><a href="/temperaturecontrol">Temperature control</a>, on/off regulation</td><td><a href="#config-heater">3. Heater</a></td></tr>
    <tr><td>Start a fan or an extractor when something gets hot</td><td><a href="/temperatureswitch">Temperature switch</a></td><td><a href="#config-tempswitch">4. Automatic extractor</a></td></tr>
    <tr><td>Switch a relay with a button on the machine</td><td><a href="/switch">Switch</a>, with an input pin</td><td><a href="#config-button">5. Push-button</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Smoothieware V2 has no separate coolant or fan module: commands such as `M8`, `M9`, `M106` and `M107` are given to a relay through the Switch module, as in example 2. A pin can be claimed by one entry only, so a relay that moves to example 3 loses its entry from example 1. The lines go into the configuration file on the controller's SD card.

### 1. Seven independent relays (Switch module) {#config-onoff}

Each relay is one entry: an output pin, a command that turns it on and a command that turns it off.

```ini
[switch]
relay1.enable            = true
relay1.output_pin        = PB1        # HOST Y pin 3
relay1.output_type       = digital    # plain on/off
relay1.input_on_command  = M64
relay1.input_off_command = M65
relay1.subcode           = 1          # M64.1 on, M65.1 off
relay1.startup_state     = false      # off when the board starts
relay1.halt_set_to       = false      # off when the machine halts

relay2.enable            = true
relay2.output_pin        = PJ4
relay2.output_type       = digital
relay2.input_on_command  = M64
relay2.input_off_command = M65
relay2.subcode           = 2

relay3.enable            = true
relay3.output_pin        = PA4
relay3.output_type       = digital
relay3.input_on_command  = M64
relay3.input_off_command = M65
relay3.subcode           = 3

relay4.enable            = true
relay4.output_pin        = PG0
relay4.output_type       = digital
relay4.input_on_command  = M64
relay4.input_off_command = M65
relay4.subcode           = 4

relay5.enable            = true
relay5.output_pin        = PJ3
relay5.output_type       = digital
relay5.input_on_command  = M64
relay5.input_off_command = M65
relay5.subcode           = 5

relay6.enable            = true
relay6.output_pin        = PG1
relay6.output_type       = digital
relay6.input_on_command  = M64
relay6.input_off_command = M65
relay6.subcode           = 6

relay7.enable            = true
relay7.output_pin        = PJ2
relay7.output_type       = digital
relay7.input_on_command  = M64
relay7.input_off_command = M65
relay7.subcode           = 7
```

If your file already has a `[switch]` section, add the `relay` lines to it instead of creating a second one.

### Commands

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Relay</th><th>Pin</th><th>On</th><th>Off</th><th>From the console</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>PB1</code></td><td><code>M64.1</code></td><td><code>M65.1</code></td><td><code>switch relay1 on</code> / <code>switch relay1 off</code></td></tr>
    <tr><td>2</td><td><code>PJ4</code></td><td><code>M64.2</code></td><td><code>M65.2</code></td><td><code>switch relay2 on</code> / <code>off</code></td></tr>
    <tr><td>3</td><td><code>PA4</code></td><td><code>M64.3</code></td><td><code>M65.3</code></td><td><code>switch relay3 on</code> / <code>off</code></td></tr>
    <tr><td>4</td><td><code>PG0</code></td><td><code>M64.4</code></td><td><code>M65.4</code></td><td><code>switch relay4 on</code> / <code>off</code></td></tr>
    <tr><td>5</td><td><code>PJ3</code></td><td><code>M64.5</code></td><td><code>M65.5</code></td><td><code>switch relay5 on</code> / <code>off</code></td></tr>
    <tr><td>6</td><td><code>PG1</code></td><td><code>M64.6</code></td><td><code>M65.6</code></td><td><code>switch relay6 on</code> / <code>off</code></td></tr>
    <tr><td>7</td><td><code>PJ2</code></td><td><code>M64.7</code></td><td><code>M65.7</code></td><td><code>switch relay7 on</code> / <code>off</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Typing `switch` on its own lists every switch and its current state.

### Good to know

- **The command numbers are yours to choose.** `M64` and `M65` are used here because Smoothieware V2 does not use them for anything else. Any free M-code works, and each relay can have its own. For example, a coolant pump on relay 2 that answers to the usual coolant commands:

  ```ini
  relay2.input_on_command  = M8
  relay2.input_off_command = M9
  ```

  Remove the `relay2.subcode` line when you do this, so that plain `M8` and `M9` match.
- **The names are yours too.** `relay1` can be `pump`, `lights` or anything without spaces. The name is what you type after `switch` in the console.
- **Relays switch in step with the job.** When a relay command appears in a G-code file, Smoothieware finishes the moves before it, then switches.
- **Relays are off at power-up and on halt.** While the Smoothieboard starts, its pins are not driven and the board keeps every relay off. `startup_state = false` keeps them off afterwards, and `halt_set_to = false` switches them off on a halt or alarm. Both are the defaults; they are written out for relay 1 to make the behaviour visible.
- **On and off only.** Keep `output_type = digital`. Mechanical relays cannot be dimmed or pulsed, and rapid switching wears them out.

### 2. Coolant and fan commands (Switch module) {#config-codes}

The same entries, answering to the commands that CAM programs already write. Relay 2 as a coolant pump and relay 3 as a fan:

```ini
[switch]
relay2.enable            = true
relay2.output_pin        = PJ4        # HOST Y pin 4
relay2.output_type       = digital
relay2.input_on_command  = M8         # coolant on
relay2.input_off_command = M9         # coolant off

relay3.enable            = true
relay3.output_pin        = PA4        # HOST Y pin 5
relay3.output_type       = digital
relay3.input_on_command  = M106       # fan on
relay3.input_off_command = M107       # fan off
```

There is no `subcode` line here, so plain `M8`, `M9`, `M106` and `M107` match. The relay only switches: a fan speed or spindle speed given with `S` is not passed on. Read the notes on motors under [Wiring your loads](#loads) first.

### 3. A DC heater held at a temperature (Temperature control module) {#config-heater}

The heater needs its own temperature sensor on one of the controller's thermistor inputs. With `bang_bang` the firmware switches the relay fully on below the target and fully off above it, which is the mode meant for relays. Relay 5 as the heater of an enclosure:

```ini
[temperature control]
chamber.enable              = true
chamber.heater_pin          = PJ3         # HOST Y pin 7, relay 5
chamber.thermistor          = EPCOS100K   # the type of your sensor
chamber.thermistor_pin      = ADC1_2      # a free thermistor input (ADC1_2 is the second hotend's)
chamber.designator          = C           # letter shown in temperature reports
chamber.set_m_code          = 141         # M141 S50 sets 50 degrees C
chamber.set_and_wait_m_code = 191         # M191 S50 sets it and waits
chamber.max_temp            = 80          # the firmware refuses to go higher
chamber.bang_bang           = true        # on/off regulation: required for a relay
chamber.hysteresis          = 2           # degrees C either side of the target
```

- **Remove the `relay5` lines from `[switch]`** when you do this: the pin can belong to one entry only.
- **Never leave out `bang_bang = true`.** Without it the firmware pulses the pin many times a second, which a mechanical relay cannot follow and which wears it out. A larger `hysteresis` makes the relay switch less often.
- **The name `chamber` and the codes `M141` and `M191` are examples.** A heater with a name of your own would otherwise answer to `M140` and `M190`, the same codes as the heated bed.
- **`thermistor_pin` is the name of an analog input channel**, not of a pin. Use an input that nothing else reads.
- **The firmware watches the sensor** and halts with an alarm when the reading leaves `min_temp` to `max_temp` or the heater does not follow its target. That is a help, not a safety device: a relay contact can weld shut. A heater needs a thermal cut-out that works without the controller.

### 4. An extractor that starts by itself (Temperature switch module) {#config-tempswitch}

The temperature switch module has no pin of its own. It watches a temperature and operates a Switch entry, here `relay6` from example 1:

```ini
[temperature switch]
extract.enable         = true
extract.designator     = T        # watch the heaters whose letter is T (the hotends)
extract.switch         = relay6   # name of the Switch entry it operates
extract.threshold_temp = 50.0     # on at or above 50 degrees C, off below
extract.heatup_poll    = 15       # check every 15 s while cold
extract.cooldown_poll  = 60       # check every 60 s while hot
```

`M64.6` and `M65.6` still switch relay 6 by hand.

### 5. A push-button for a relay (Switch module with an input pin) {#config-button}

A second Switch entry can watch a button and send the command of a relay. The button needs an input pin of its own, on another header of the controller: every signal pin of HOST Y is an output to a relay. Here a button between pin 3 of header **G_C** and ground toggles relay 1:

```ini
[switch]
lightbutton.enable             = true
lightbutton.input_pin          = PD14!^   # G_C pin 3; the button connects it to ground
lightbutton.input_pin_behavior = toggle   # each press changes the state
lightbutton.output_on_command  = M64.1    # relay 1 on
lightbutton.output_off_command = M65.1    # relay 1 off
```

The pin is checked fifty times a second, so a very short press can be missed. With `momentary` in place of `toggle` the relay is on only while the button is held.

## Wiring your loads {#loads}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="lightning-charge"></sl-icon>
  <strong>Switch off every load supply before you touch the load terminals</strong>, including supplies for devices on other relays. Each channel can be fed from a different supply, so switching one off does not make the others safe.
</sl-alert>

For each device:

1. **Run the positive wire through the relay.** The load supply&rsquo;s positive goes through a fuse to **C**. A wire from **NO** goes on to the device. The device&rsquo;s return goes straight to the supply&rsquo;s negative and does not pass through the board, as in the [wiring diagram](#get-started) above. The load supply stays separate from the controller and from the coil supply.
2. **Choose NO or NC deliberately.** On **NO** the device is off whenever the relay is off: at power-up, on halt, when the 12 V supply or the ribbon cable is unplugged. On **NC** the device runs in all those situations. No endurance figure is given for **NC**; use it only for things that must keep running when the controller is off.
3. **Stay inside the rating.** 5&nbsp;A up to 24&nbsp;V DC, or 2&nbsp;A above 24 up to 48&nbsp;V DC per channel, resistive load. Do not use 5&nbsp;A at 48&nbsp;V.
4. **Fuse every circuit.** The board has no fuses on the load side. Fit a fuse rated for the device and its wire, and never above 5&nbsp;A.
5. **Use the right wire and tighten firmly.** Strip only enough to fill the terminal, leave no stray strands, and tug each wire after tightening.

What the LEDs tell you, one column per light:

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-green"></span>Relay 1</th><th><span class="xb-led xb-led-green"></span>Relay 2</th><th><span class="xb-led xb-led-green"></span>Relay 3</th><th><span class="xb-led xb-led-green"></span>Relay 4</th><th><span class="xb-led xb-led-green"></span>Relay 5</th><th><span class="xb-led xb-led-green"></span>Relay 6</th><th><span class="xb-led xb-led-green"></span>Relay 7</th></tr></thead>
  <tbody>
    <tr><td>Where</td><td colspan="7">One green light per channel, at marker 3 of the <a href="#tour">board tour</a></td></tr>
    <tr><td>Lit means</td><td colspan="7">The coil of that relay is driven: <b>C</b> is connected to <b>NO</b>.</td></tr>
    <tr><td>Dark means</td><td colspan="7">The coil is not driven: <b>C</b> is connected to <b>NC</b>. A dark light does not prove that a terminal is unpowered.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

There is no power light: with no relay on, every light is dark even when the board is powered.

Three things this board does not do, and what to do about them:

- **Inductive loads** such as motors, solenoids and relay coils are outside this board&rsquo;s rating, as are very small loads and all seven channels at full load together.
- **It is not a safety device.** A relay contact can weld shut and keep a device running after the command to stop. A stuck-high control signal or a driver failure can also keep a coil energised. Emergency stops must cut power independently of this board.
- **It does not tell you whether a terminal is powered.** The green LED shows that a coil is being driven, nothing more. **NC** stays connected to **C** whenever the relay has not pulled in, whatever the LED shows.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path of one channel">
  <svg viewBox="0 0 1000 270" role="img" aria-labelledby="xb-how-t">
    <title id="xb-how-t">One channel: the controller pin drives a transistor and an optocoupler; across the optical barrier the driver chip switches the 12 volt relay coil; the coil moves the contacts magnetically across a second barrier.</title>
    <rect x="14" y="44" width="318" height="180" rx="10" fill="#17283b" stroke="#2f4c6b"/>
    <rect x="352" y="44" width="330" height="180" rx="10" fill="#33290d" stroke="#6b5310"/>
    <rect x="702" y="44" width="284" height="180" rx="10" fill="#3a2015" stroke="#7a4426"/>
    <g font-size="12" font-weight="700" letter-spacing="1.2">
      <text x="28" y="66" fill="#9cc3ff">CONTROLLER SIDE · 3.3 V AND 5 V</text>
      <text x="366" y="66" fill="#ffe08a">COIL SIDE · 12 V</text>
      <text x="716" y="66" fill="#f0b08a">LOAD SIDE · DC</text>
    </g>
    <path d="M342 30V240" stroke="#ffcc33" stroke-width="2" stroke-dasharray="7 6"/>
    <path d="M692 30V240" stroke="#ffcc33" stroke-width="2" stroke-dasharray="7 6"/>
    <g fill="#212936" stroke="#59616e" stroke-width="1.5">
      <rect x="28" y="100" width="118" height="64" rx="8"/><rect x="170" y="100" width="118" height="64" rx="8"/>
      <rect x="300" y="100" width="84" height="64" rx="8" stroke="#ffcc33"/>
      <rect x="404" y="100" width="118" height="64" rx="8"/><rect x="546" y="100" width="118" height="64" rx="8"/>
      <rect x="738" y="100" width="212" height="64" rx="8"/>
    </g>
    <g font-size="13" font-weight="700" fill="#e6ebf2" text-anchor="middle">
      <text x="87" y="128">Controller pin</text><text x="87" y="146" font-weight="400" fill="#a9b4c2">HIGH = on</text>
      <text x="229" y="128">Transistor</text><text x="229" y="146" font-weight="400" fill="#a9b4c2">draws ≈ 2 mA</text>
      <text x="342" y="128">Opto-</text><text x="342" y="146">coupler</text>
      <text x="463" y="128">Driver chip</text><text x="463" y="146" font-weight="400" fill="#a9b4c2">+ green LED</text>
      <text x="605" y="128">Relay coil</text><text x="605" y="146" font-weight="400" fill="#a9b4c2">12 V, 33 mA</text>
      <text x="844" y="128">Relay contacts</text><text x="844" y="146" font-weight="400" fill="#a9b4c2">C, NO, NC screws</text>
    </g>
    <g stroke="#e6ebf2" stroke-width="2.5" fill="none">
      <path d="M146 132H164"/><path d="M288 132H296"/><path d="M384 132H398"/><path d="M522 132H540"/>
    </g>
    <g fill="#e6ebf2"><path d="M170 132l-9-5v10z"/><path d="M300 132l-9-5v10z"/><path d="M404 132l-9-5v10z"/><path d="M546 132l-9-5v10z"/></g>
    <path d="M664 132H730" stroke="#e6ebf2" stroke-width="2.5" stroke-dasharray="3 6"/><path d="M738 132l-9-5v10z" fill="#e6ebf2"/>
    <g font-size="12" fill="#ffcc33" text-anchor="middle">
      <text x="342" y="22">Barrier 1: light</text><text x="692" y="22">Barrier 2: magnetism</text>
      <text x="342" y="258">no wire crosses here</text><text x="692" y="258">no wire crosses here</text>
    </g>
    <g font-size="12" fill="#a9b4c2">
      <text x="28" y="200">Powered by the ribbon cable</text>
      <text x="366" y="200">Powered by your 12 V supply</text>
      <text x="716" y="200">Powered by whatever you connect</text>
    </g>
  </svg>
  </div>
  <figcaption>The path of one on/off command. All seven channels are identical.</figcaption>
</figure>
{:/nomarkdown}

The board has three electrically separate areas, and a command crosses from one to the next without any wire joining them.

On the **controller side**, a HIGH level on a control pin switches on a small transistor, which lights the LED inside that channel's optocoupler. The pin itself only has to supply about 2 mA. A resistor holds each input LOW when nothing drives it, so an unplugged cable or a controller that is still starting up leaves every relay off.

On the **coil side**, the optocoupler's light sensor tells the driver chip to pass 12 V through the relay coil, and the green LED lights. A diode across each coil absorbs the voltage spike when the coil switches off. The 12 V supply comes in through a fuse, reverse-polarity protection, surge protection and an electronic fuse that shuts the coil circuit down on overload.

On the **load side**, the energised coil pulls the contact from NC to NO. Each relay's contacts connect only to their own three screws.

## Power options and jumpers {#options}

Change jumpers only with every supply unplugged.

{::nomarkdown}
<div class="xb-jumpers">
  <div class="xb-jumper">
    <b>12 V input selector</b>
    <svg viewBox="0 0 230 86" role="img" aria-label="Three pins: jumper on the left and middle pins selects TERM; on the middle and right pins selects XT30.">
      <rect x="20" y="14" width="120" height="36" rx="10" fill="#33290d" stroke="#ffcc33" stroke-width="2.5"/>
      <g fill="#e0b84a" stroke="#6b5310"><circle cx="45" cy="32" r="9"/><circle cx="115" cy="32" r="9"/><circle cx="185" cy="32" r="9"/></g>
      <g font-size="12" fill="#e6ebf2" text-anchor="middle"><text x="45" y="74">TERM</text><text x="115" y="74" fill="#a9b4c2">common</text><text x="185" y="74">XT30</text></g>
    </svg>
    <span>Jumper left: the TERM 12V screw terminal feeds the coils (shown). Jumper right: the XT30 does. No jumper, as delivered: neither does.</span>
  </div>
  <div class="xb-jumper">
    <b>Coil source selector</b>
    <svg viewBox="0 0 230 86" role="img" aria-label="Three pins: jumper on the left and middle pins selects external 12 volts; on the middle and right pins selects host power.">
      <rect x="20" y="14" width="120" height="36" rx="10" fill="#33290d" stroke="#ffcc33" stroke-width="2.5"/>
      <g fill="#e0b84a" stroke="#6b5310"><circle cx="45" cy="32" r="9"/><circle cx="115" cy="32" r="9"/><circle cx="185" cy="32" r="9"/></g>
      <g font-size="12" fill="#e6ebf2" text-anchor="middle"><text x="45" y="74">EXT</text><text x="115" y="74" fill="#a9b4c2">common</text><text x="185" y="74">HOST</text></g>
    </svg>
    <span>Jumper left, as delivered: coils run from your external 12&nbsp;V supply (shown). Jumper right: coils run from the on-board converter.</span>
  </div>
  <div class="xb-jumper">
    <b>Host power link</b>
    <svg viewBox="0 0 230 86" role="img" aria-label="Two pins with no jumper fitted.">
      <g fill="#e0b84a" stroke="#6b5310"><circle cx="45" cy="32" r="9"/><circle cx="115" cy="32" r="9"/></g>
      <text x="80" y="74" font-size="12" fill="#e6ebf2" text-anchor="middle">open</text>
    </svg>
    <span>Open, as delivered: the converter is off (shown). Jumper fitted: the converter makes 12&nbsp;V from the controller's 5&nbsp;V.</span>
  </div>
</div>

<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>12 V input selector</th><th>Coil source selector</th><th>Host power link</th></tr></thead>
  <tbody>
    <tr><td>External 12&nbsp;V on the screw terminal <span class="xb-note">(recommended)</span></td><td>TERM</td><td>EXT</td><td>Open</td></tr>
    <tr><td>External 12&nbsp;V on the XT30</td><td>XT30</td><td>EXT</td><td>Open</td></tr>
    <tr><td>No separate supply: coils powered from the controller <span class="xb-note">(not recommended)</span></td><td>No jumper</td><td>HOST</td><td>Fitted</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

**Powering the coils from the controller** saves a power supply but loads the Smoothieboard's 5 V rail: seven relays draw 4.62&nbsp;W at 12&nbsp;V, which is at least 1.14&nbsp;A at 5&nbsp;V once the converter's losses are included. The controller's share of its 5&nbsp;V rail is 0.32&nbsp;A, which cannot support this mode with seven relays. Use an external 12&nbsp;V supply. The isolation between controller and coils is kept in both modes, because the converter is itself isolated.

**Indicator LEDs.** Each green LED has a small solder link next to it (marked CUT TO DISABLE with the LED&rsquo;s name). Cut the link to disable that LED, for example in a light-sensitive enclosure. The relay works the same without it.

## Chaining and channel links {#chaining}

**CHAIN Y** repeats all ten pins of HOST Y. A second board plugged into it receives the same seven signals, so relay 1 on both boards switches together, and so on. This does not give you fourteen independent relays: there are still only seven signals.

{::nomarkdown}
{% include _includes/extension-chain-figure.html id="xb-rl" board="Relay board" in_label="HOST Y" chain_label="CHAIN Y" links="none" lane1="3.3 V, 5 V and ground (pins 1, 2, 10)" lane2="pins 3 to 9: used by this board too" lane3="a signal this board has released (its channel link cut)" caption="On this board the two connectors are joined directly, so all ten pins always continue; the channel links only decide whether this board's own relay listens." %}
{:/nomarkdown}

It is useful for:

- **Switching two separate circuits from one command.** Relay 1 on each board follows the same signal.
- **Mixing board types.** Any other type-Y Gadgeteer board on CHAIN Y sees the same seven pins. A different kind of board can take over a signal that this board has released.

**Releasing a signal.** Each channel has a solder link between the cable and its relay (8 in the [board tour](#tour), each marked LOCAL GPIO cut link). Cut a link, and that relay ignores its signal and stays off, while the signal still continues to CHAIN Y for another board to use. To reconnect it, bridge the link with solder.

For seven more independent relays, connect a second board to a different type-Y header on the Smoothieboard and give it its own seven switch entries.

{% include _includes/relay-board-comparison.html %}

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>When you see</th><th>It means</th><th>Do this</th></tr></thead>
  <tbody>
    <tr><td>No click and no LED on any relay</td><td>The coils have no 12&nbsp;V, or no commands arrive.</td><td>Check that the 12&nbsp;V input selector has a jumper on the input you are using: the board is delivered without one. Check the supply's polarity and that it is plugged in. Then check the ribbon cable at both ends.</td></tr>
    <tr><td>No click, no LED, but <code>switch</code> reports the relay as on</td><td>The firmware is driving the pin; the signal or the coil power is not reaching the relay.</td><td>Check the ribbon cable is on header G_F and the right way round. Check the coil source selector is on EXT.</td></tr>
    <tr><td>The console rejects <code>switch relay1 on</code>, or <code>switch</code> does not list the relays</td><td>The configuration was not loaded.</td><td>Check the lines are under <code>[switch]</code>, that <code>enable</code> is <code>true</code>, and restart the board.</td></tr>
    <tr><td>The wrong relay switches</td><td>Pin names and relay numbers are mixed up, or the cable is reversed.</td><td>Compare each <code>output_pin</code> with the <a href="#pinout">pinout table</a>. Check pin 1 of the cable at both ends.</td></tr>
    <tr><td>LED lights but there is no click</td><td>The coil voltage is too low for the relay to pull in.</td><td>Measure the supply under load: it should be close to 12&nbsp;V. Use a supply rated for 1&nbsp;A or more.</td></tr>
    <tr><td>Relay clicks and LED lights, but the device does not start</td><td>The fault is in the load wiring.</td><td>Switch everything off. Check the fuse, that the load supply&rsquo;s positive goes to C and the device to NO, and that the device&rsquo;s return is connected.</td></tr>
    <tr><td>The device runs when the relay is off and stops when it is on</td><td>The device is wired to NC instead of NO.</td><td>Switch everything off and move the wire from NC to NO.</td></tr>
    <tr><td>One relay never responds, the others do</td><td>That channel's link is cut, or its entry is missing from the configuration.</td><td>Type <code>switch</code> and check the relay is listed. Inspect its channel link (the LOCAL GPIO cut link of that channel).</td></tr>
    <tr><td>All relays drop out together during use</td><td>The 12&nbsp;V supply sagged or the board's overload protection tripped.</td><td>Unplug the 12&nbsp;V supply for a few seconds, then reconnect. If it recurs, use a stronger supply.</td></tr>
    <tr><td>A device keeps running after its relay is switched off</td><td>The relay contact may have welded, usually after switching a load that was too large.</td><td>Cut the power to the device at its own switch or fuse. Do not rely on that relay again; read the notes on motors under <a href="#loads">Wiring your loads</a>.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/). Say how the three jumpers are set, and what the `switch` command reports.

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/seven-channel-dc-mechanical-relay/seven-channel-dc-mechanical-relay-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/seven-channel-dc-mechanical-relay/seven-channel-dc-mechanical-relay-bom.csv">Parts list (CSV)</a></td><td>Every component with its value, footprint and manufacturer part number</td></tr>
    <tr><td><a href="/images/extensions/seven-channel-dc-mechanical-relay/seven-channel-dc-mechanical-relay-diagram.png">Board drawing (SVG)</a></td><td>The top view used on this page, at full resolution</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the corner marked 0, 0 with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 413" role="img" aria-labelledby="xb-sdc-mount-t">
  <title id="xb-sdc-mount-t">Mounting drawing of the seven-channel DC relay board, component side: outline 220 by 100 millimetres with 4 mounting holes and 2 cable-tie holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="180.0" y="78.0" width="600.0" height="272.7" rx="5.5" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M180.0 56H780.0"/><path d="M180.0 50V62"/><path d="M780.0 50V62"/><path d="M806.0 78.0V350.7"/><path d="M800.0 78.0h12"/><path d="M800.0 350.7h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">220</text>
  <text x="818.0" y="219.4" font-size="15" font-weight="700" fill="#e6ebf2">100</text>
  <circle cx="180.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="168.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M122.0 104.0h30" fill="none"/><path d="M156.0 104.0l-8 -4v8z"/><path d="M122.0 104.0v30" fill="none"/><path d="M122.0 138.0l-4 -8h8z"/></g>
  <text x="160.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="118.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="193.6" cy="173.5" r="4.4" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M185.3 173.5h16.7M193.6 165.1v16.7" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="189.3" y="197.8" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 35.00</text>
  <circle cx="766.4" cy="173.5" r="4.4" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M758.0 173.5h16.7M766.4 165.1v16.7" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="770.7" y="197.8" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  215.00, 35.00</text>
  <circle cx="193.6" cy="337.1" r="4.4" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M185.3 337.1h16.7M193.6 328.7v16.7" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="189.3" y="322.7" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 95.00</text>
  <circle cx="766.4" cy="337.1" r="4.4" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M758.0 337.1h16.7M766.4 328.7v16.7" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="770.7" y="322.7" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  215.00, 95.00</text>
  <circle cx="493.6" cy="331.6" r="3.4" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <circle cx="507.3" cy="331.6" r="3.4" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <text x="500.5" y="319.2" text-anchor="middle" font-size="12" fill="#a9b4c2">cable tie</text>
  <text x="480.0" y="380.7" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 220 × 100&nbsp;mm, corners rounded to a 2&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>35.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>215.00</td><td>35.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>5.00</td><td>95.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>215.00</td><td>95.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>–</td><td>115.00</td><td>93.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
    <tr><td>–</td><td>120.00</td><td>93.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
  </tbody>
</table></div>

{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

A dash means no figure is given.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Conditions</th></tr></thead>
  <tbody>
    <tr><td>Load voltage and current, resistive, on NO</td><td>C, NO, each channel</td><td>—</td><td>—</td><td>5 A up to 24 V DC; 2 A above 24 up to 48 V DC</td><td>Resistive load</td></tr>
    <tr><td>Coil supply voltage</td><td>TERM 12V or XT30</td><td>8.5 V</td><td>12 V</td><td>13.44 V</td><td>Supply range</td></tr>
    <tr><td>Coil current, per relay that is on</td><td>Coil supply</td><td>—</td><td>55 mA</td><td>—</td><td>Nominal, 0.66&nbsp;W</td></tr>
    <tr><td>Coil supply current, all seven on</td><td>Coil supply</td><td>—</td><td>≈ 0.4 A</td><td>—</td><td>Calculated: 0.385&nbsp;A for the coils plus about 14&nbsp;mA for the indicators. A 1&nbsp;A supply is recommended.</td></tr>
    <tr><td>Coil supply fuse</td><td>Each 12 V input</td><td>—</td><td>1.5 A</td><td>—</td><td>Fitted part value</td></tr>
    <tr><td>Control signal, on</td><td>IN 1 to IN 7</td><td>—</td><td>3.3 V</td><td>—</td><td>3.3&nbsp;V compatible</td></tr>
    <tr><td>Current from a control pin, relay on</td><td>IN 1 to IN 7</td><td>—</td><td>≈ 2 mA</td><td>—</td><td>Calculated from the schematic</td></tr>
    <tr><td>Current from the 5 V pin, per relay on</td><td>HOST Y pin 2</td><td>—</td><td>≈ 6 mA</td><td>—</td><td>Calculated from the schematic</td></tr>
    <tr><td>Clearance around load copper</td><td>Board</td><td>8 mm</td><td>—</td><td>—</td><td>Between load copper and the other circuits, and between channels (layout rule)</td></tr>
    <tr><td>5 V current needed in host-powered mode</td><td>HOST Y pin 2</td><td>≈ 1.14 A</td><td>—</td><td>—</td><td>Calculated minimum with seven relays on. The controller&rsquo;s share is 0.32&nbsp;A, so this mode is not supported.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Component stress limits

These are limits of individual parts, beyond which the part can be damaged. They are not operating conditions; stay inside the table above.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Circuit</th><th>Pin or device stress</th><th>Absolute limit</th></tr></thead>
  <tbody>
    <tr><td>Relay contacts</td><td>Motor, solenoid or power-supply inrush</td><td>The ratings are for steady resistive loads only</td></tr>
    <tr><td>Coil supply input</td><td>Reversed polarity</td><td>Protected by design on each input</td></tr>
    <tr><td>Relay driver (TPL7407L)</td><td>Current through its shared ground pin, all channels together</td><td>2 A absolute; 500 mA per channel recommended. These are chip figures, not board ratings.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
