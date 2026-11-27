---
layout: default
title: "ATX connector board"
description: "Start and stop a standard ATX power supply from the Smoothieboard and take its 12 V, 5 V and 5 V standby rails: pinout, wiring, configuration and limits."
permalink: /extensions/atx-connector-board
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Power</p>
    <h1 id="atx-connector-board">ATX connector board</h1>
    <p class="xb-lead">Use a standard ATX computer power supply as the power source of a machine. The board takes the supply&rsquo;s 24-pin plug, lets the Smoothieboard switch the supply on and off, shows when the supply reports its outputs good, and brings the 12&nbsp;V, 5&nbsp;V and 5&nbsp;V standby rails out to connectors.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/atx-connector-board/atx-connector-board-diagram.webp" alt="Top view of the ATX connector board: a 24-pin ATX socket along the bottom, a yellow XT60 connector at the top right, two screw terminals at the sides, two Gadgeteer sockets at the top left and four green lights.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>24-pin</b><span>standard ATX plug. Not ATX12VO, not an OEM supply.</span></div>
  <div class="xb-stat"><b>3 rails</b><span>12&nbsp;V on XT60, 5&nbsp;V and 5&nbsp;V standby on screw terminals</span></div>
  <div class="xb-stat"><b>Start / stop</b><span>from one Gadgeteer contact, with a manual always-on header</span></div>
  <div class="xb-stat"><b>Power good</b><span>reported back to the controller as a 3.3&nbsp;V signal</span></div>
  <div class="xb-stat"><b>No fuses</b><span>none are fitted on the board</span></div>
  <div class="xb-stat"><b>74 × 49.5</b><span>millimetres, four M3 mounting holes</span></div>
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

<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="lightning-charge"></sl-icon>
  <strong>Mains power is inside the supply, and the board is not hot-plug.</strong> The board is printed &ldquo;NO HOT-PLUG: UNPLUG MAINS&rdquo; and &ldquo;STANDARD ATX 24-PIN ONLY, NOT ATX12VO / NOT OEM PSU&rdquo;. Unplug the supply from the mains before you connect or disconnect anything. Switching the supply off from the controller does not isolate it: the 5&nbsp;V standby rail stays live and the mains stays connected.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Supply connector</td><td>J1, Molex Mini-Fit Jr 24-pin (2 &times; 12, 4.2&nbsp;mm pitch). It is the socket that the supply&rsquo;s own 24-pin plug mates with. Standard ATX only; ATX12VO and OEM supplies are not supported.</td></tr>
    <tr><td>Outputs</td><td>12&nbsp;V on an XT60 connector (J3); 5&nbsp;V on a two-screw terminal (J4, 3.5&nbsp;mm pitch); 5&nbsp;V standby on a two-screw terminal (J5, 3.5&nbsp;mm pitch). The 3.3&nbsp;V rail of the supply is not brought out to a connector.</td></tr>
    <tr><td>Output currents</td><td>12&nbsp;V 10&nbsp;A, 5&nbsp;V 3.75&nbsp;A, 5&nbsp;V standby 1.5&nbsp;A. Design values; the board prints &ldquo;+5V OUT 3.7A&rdquo;.</td></tr>
    <tr><td>Protection</td><td><b>None.</b> There are no fuses on the board. Protect each output yourself.</td></tr>
    <tr><td>Start control</td><td>Q1, an open-drain MOSFET, pulls the supply&rsquo;s start line (PS_ON#) low when the controller&rsquo;s request is high. A 10&nbsp;k&Omega; resistor to 5&nbsp;V standby keeps the line high, so the supply stays off when nothing drives the request. A header, J6, holds the supply on with a shunt.</td></tr>
    <tr><td>Power good</td><td>The supply&rsquo;s PWR_OK signal goes through an SN74LVC1G17 buffer, powered from the controller&rsquo;s 3.3&nbsp;V, to the controller as a non-inverted 3.3&nbsp;V signal.</td></tr>
    <tr><td>Controller sockets</td><td>Two 10-contact Gadgeteer sockets, X IN and X CHAIN (Samtec SHF-105, 1.27&nbsp;mm). The chain socket passes contacts 5 to 9 on to another board. Contacts 3 and 4, the request and power good, are not passed on as delivered.</td></tr>
    <tr><td>Indicators</td><td>Four green lights: 12&nbsp;V, 5&nbsp;V, 5&nbsp;V standby and power good, each with a solder link to disable it</td></tr>
    <tr><td>Test points</td><td>Twelve: +12&nbsp;V, +5&nbsp;V, +5&nbsp;VSB, 3.3&nbsp;V, PS_ON#, PWR_OK sense, PWR_OK out, PSU_EN and four ground points</td></tr>
    <tr><td>Size</td><td>74 &times; 49.5&nbsp;mm with four M3 mounting holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> and the <a href="/switch">Switch</a> and <a href="/endstops">Endstops</a> modules</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its limits and its basis is in the [electrical specifications](#electrical) appendix; the hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side. Most of the test points are on the underside and are not visible in the drawing; they are named in the pinout.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/atx-connector-board/atx-connector-board-diagram.webp" alt="Top view of the ATX connector board with thirteen numbered markers that are explained in the list below.">
      <a class="xb-mk" href="#tour-1" style="left:50%;top:85%" aria-label="1: ATX plug">1<span class="xb-pop"><b>ATX 24-pin connector (J1)</b> — the Molex Mini-Fit Jr socket that the supply&rsquo;s 24-pin plug mates with. Along the top row, left to right, the board prints 3V3, 3V3, COM, 5V, COM, 5V, COM, OK, SB, 12V, 12V, 3V3. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:65.8%;top:18.5%" aria-label="2: 12 V output">2<span class="xb-pop"><b>12 V output (J3)</b> — an XT60 connector for the supply&rsquo;s 12&nbsp;V. The board prints + on the left and &minus; on the right of it. No fuse is fitted on the board.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-3" style="left:8.5%;top:43%" aria-label="3: 5 V output">3<span class="xb-pop"><b>5 V output (J4)</b> — a two-screw terminal: +5&nbsp;V on the top screw, ground below. The board prints &ldquo;+5V OUT 3.7A&rdquo; beside it.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-4" style="left:91%;top:37.5%" aria-label="4: standby output">4<span class="xb-pop"><b>5 V standby output (J5)</b> — a two-screw terminal, marked &ldquo;ALWAYS LIVE&rdquo;: ground on the top screw, +5&nbsp;VSB below. This rail is on whenever the supply is plugged in, even when the main outputs are commanded off.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:24.2%;top:10.5%" aria-label="5: Gadgeteer input">5<span class="xb-pop"><b>Gadgeteer socket X IN (J_X)</b> — the 10-contact socket that connects to the controller. Three contacts matter: 3.3&nbsp;V, the start request and the power-good signal. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:43.5%;top:10.7%" aria-label="6: Gadgeteer chain">6<span class="xb-pop"><b>Gadgeteer socket X CHAIN (J_C)</b> — a second socket that passes the contacts on to another board. The request and power-good contacts are not passed on as delivered (links JP3 and JP4 are open).</span></a>
      <a class="xb-mk xb-pl" href="#tour-7" style="left:19.8%;top:60%" aria-label="7: always-on header">7<span class="xb-pop"><b>Always-on header (J6)</b> — a two-pin header. A shunt on it holds the supply on by pulling its start line to ground, whatever the controller says. Leave it empty for software control.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:38.6%;top:64.5%" aria-label="8: start transistor">8<span class="xb-pop"><b>Start transistor</b> — Q1, a DMN2056U-7 MOSFET. When the controller&rsquo;s request is high it pulls the supply&rsquo;s start line (PS_ON#) to ground. When the request is low it lets go.</span></a>
      <a class="xb-mk" href="#tour-9" style="left:48.7%;top:60.2%" aria-label="9: power-good buffer">9<span class="xb-pop"><b>Power-good buffer</b> — U1, an SN74LVC1G17 chip, powered from the controller&rsquo;s 3.3&nbsp;V. It turns the supply&rsquo;s 5&nbsp;V power-good signal into a 3.3&nbsp;V signal for the controller, without inverting it.</span></a>
      <a class="xb-mk xb-pb" href="#tour-10" style="left:50%;top:49.5%" aria-label="10: power-good light">10<span class="xb-pop"><b>Green PWR_OK light (D7)</b> — lit while the supply reports its outputs good. It is driven by a second MOSFET and powered from the 5&nbsp;V standby rail. A solder link beside it disables the light.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-11" style="left:80.9%;top:13.2%" aria-label="11: 12 V light">11<span class="xb-pop"><b>Green 12 V light (D4)</b> — lit while the 12&nbsp;V output is present. A solder link below it disables the light.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-12" style="left:18.4%;top:31.1%" aria-label="12: 5 V light">12<span class="xb-pop"><b>Green 5 V light (D5)</b> — lit while the 5&nbsp;V output is present. A solder link beside it disables the light.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-13" style="left:95.4%;top:9.7%" aria-label="13: standby light">13<span class="xb-pop"><b>Green 5 V standby light (D6)</b> — lit while the 5&nbsp;V standby rail is present, which is whenever the supply is plugged in. A solder link beside it disables the light.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>ATX 24-pin connector (J1)</b> — the Molex Mini-Fit Jr socket that the supply&rsquo;s 24-pin plug mates with. Along the top row, left to right, the board prints 3V3, 3V3, COM, 5V, COM, 5V, COM, OK, SB, 12V, 12V, 3V3. <i>See the pinout.</i></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>12 V output (J3)</b> — an XT60 connector for the supply&rsquo;s 12&nbsp;V. The board prints + on the left and &minus; on the right of it. No fuse is fitted on the board.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>5 V output (J4)</b> — a two-screw terminal: +5&nbsp;V on the top screw, ground below. The board prints &ldquo;+5V OUT 3.7A&rdquo; beside it.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>5 V standby output (J5)</b> — a two-screw terminal, marked &ldquo;ALWAYS LIVE&rdquo;: ground on the top screw, +5&nbsp;VSB below. This rail is on whenever the supply is plugged in, even when the main outputs are commanded off.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Gadgeteer socket X IN (J_X)</b> — the 10-contact socket that connects to the controller. Three contacts matter: 3.3&nbsp;V, the start request and the power-good signal. <i>See the pinout.</i></div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Gadgeteer socket X CHAIN (J_C)</b> — a second socket that passes the contacts on to another board. The request and power-good contacts are not passed on as delivered (links JP3 and JP4 are open).</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Always-on header (J6)</b> — a two-pin header. A shunt on it holds the supply on by pulling its start line to ground, whatever the controller says. Leave it empty for software control.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Start transistor</b> — Q1, a DMN2056U-7 MOSFET. When the controller&rsquo;s request is high it pulls the supply&rsquo;s start line (PS_ON#) to ground. When the request is low it lets go.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Power-good buffer</b> — U1, an SN74LVC1G17 chip, powered from the controller&rsquo;s 3.3&nbsp;V. It turns the supply&rsquo;s 5&nbsp;V power-good signal into a 3.3&nbsp;V signal for the controller, without inverting it.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Green PWR_OK light (D7)</b> — lit while the supply reports its outputs good. It is driven by a second MOSFET and powered from the 5&nbsp;V standby rail. A solder link beside it disables the light.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Green 12 V light (D4)</b> — lit while the 12&nbsp;V output is present. A solder link below it disables the light.</div></li>
    <li id="tour-12"><span class="xb-n">12</span><div><b>Green 5 V light (D5)</b> — lit while the 5&nbsp;V output is present. A solder link beside it disables the light.</div></li>
    <li id="tour-13"><span class="xb-n">13</span><div><b>Green 5 V standby light (D6)</b> — lit while the 5&nbsp;V standby rail is present, which is whenever the supply is plugged in. A solder link beside it disables the light.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1: ATX 24-pin connector

The contacts follow the standard ATX numbering. Pins 1 to 12 are the top row of the connector in the tour, from left to right; pin 13 is directly below pin 1. Do not assume that the plug of a modular supply, on the supply side, follows this order: check it against the supply&rsquo;s own documentation.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Pins</th><th>Function</th></tr></thead>
  <tbody>
    <tr><td>1, 2, 12, 13</td><td><span class="xb-pill xb-p-3v3">3.3 V</span> from the supply. Not brought out to a connector.</td></tr>
    <tr><td>4, 6, 21, 22, 23</td><td><span class="xb-pill xb-p-5v">5 V</span> main rail, to J4</td></tr>
    <tr><td>10, 11</td><td><span class="xb-pill xb-p-sig">12 V</span> main rail, to J3</td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-5v">5 V standby</span>, to J5. Always live.</td></tr>
    <tr><td>16</td><td><span class="xb-pill xb-p-sig">PS_ON#</span> start line. Low turns the supply on.</td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">PWR_OK</span> power good, 5&nbsp;V logic, to the buffer</td></tr>
    <tr><td>3, 5, 7, 15, 17, 18, 19, 24</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>14, 20</td><td>Not connected</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Output connectors

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Connector</th><th>Contact</th><th>Function</th></tr></thead>
  <tbody>
    <tr><td rowspan="2">J3, 12&nbsp;V, XT60</td><td>+ (left)</td><td><span class="xb-pill xb-p-sig">+12 V</span></td></tr>
    <tr><td>&minus; (right)</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td rowspan="2">J4, 5&nbsp;V</td><td>Top screw</td><td><span class="xb-pill xb-p-5v">+5 V</span></td></tr>
    <tr><td>Bottom screw</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td rowspan="2">J5, 5&nbsp;V standby</td><td>Top screw</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>Bottom screw</td><td><span class="xb-pill xb-p-5v">+5 VSB</span> always live</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The two screw terminals have opposite orders: the live screw is on top for J4 and at the bottom for J5. Check the marking beside each before you wire.

### J_X: Gadgeteer socket X IN

A 2 &times; 5 socket. Contact 1 is at the lower left of the socket in the tour, contact 2 directly above it, contact 3 to the right of 1, and so on, so odd contacts are in the lower row.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Function</th><th>Use</th><th>Smoothieboard V2 Prime (header G_F, J37)</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Powers the power-good buffer</td><td>Pin 1</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Host 5&nbsp;V. Not used by the board&rsquo;s circuit: leave it unconnected.</td><td>Leave open</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">Request</span></td><td>High turns the supply on, low releases the start line</td><td>Pin 3, <code>PB1</code></td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">PWR_OK</span></td><td>Power good, 3.3&nbsp;V, high when the supply reports good</td><td>Pin 4, <code>PJ4</code></td></tr>
    <tr><td>5–9</td><td>—</td><td>Not used by the board; joined to the chain socket</td><td>Leave open</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Controller ground, joined to the supply ground on the board</td><td>Pin 10</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Check where the 3.3&nbsp;V and 5&nbsp;V rails sit on your Prime&rsquo;s connector against the pins above. Check the actual header and your cable before you apply power.
</sl-alert>

### J_X contacts, links and J6

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Name</th><th>What it is</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>J6 (PS_ON# MANUAL)</td><td>Two-pin header. A shunt grounds the start line, so the supply is always on.</td><td>Empty: software control</td></tr>
    <tr><td>JP3 (CHAIN pin 3)</td><td>Passes the request on to the chain socket</td><td>Open</td></tr>
    <tr><td>JP4 (CHAIN pin 4)</td><td>Passes power good on to the chain socket</td><td>Open</td></tr>
    <tr><td>JP5 to JP9 (CHAIN pins 5 to 9)</td><td>Pass contacts 5 to 9 on to the chain socket</td><td>Bridged</td></tr>
    <tr><td>JP10, JP12, JP13, JP11</td><td>Disable the 12&nbsp;V, 5&nbsp;V, 5&nbsp;V standby and power-good lights. Cutting a link affects the light only, not the rail.</td><td>Closed</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>A standard ATX supply</b><span>With a 24-pin plug. ATX12VO and OEM supplies are not supported. Its mains side stays unplugged while you wire.</span></div>
  <div class="xb-card"><b>Smoothieboard V2 Prime</b><span>Running Smoothieware V2, powered on its own, not from this board, with <code>PB1</code> and <code>PJ4</code> free on header G_F (J37).</span></div>
  <div class="xb-card"><b>A host cable</b><span>From J37 pins 1, 3, 4 and 10 to J_X contacts 1, 3, 4 and 10. This page does not specify the plug.</span></div>
  <div class="xb-card"><b>Fuses for each output</b><span>The board has none. Choose each fuse to protect your wiring and load.</span></div>
  <div class="xb-card"><b>Loads and wire</b><span>XT60 plug for the 12&nbsp;V output; wire sized for the current for the screw terminals.</span></div>
  <div class="xb-card"><b>An enclosure</b><span>The supply is a mains device: keep the mains side enclosed.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

These steps check the control side with no load connected. The controller must not take its power from the supply it controls, or it could not turn that supply back on.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Minimal wiring diagram">
  <svg viewBox="0 0 1000 320" role="img" aria-labelledby="xb-hookup-t">
    <title id="xb-hookup-t">Minimal wiring: the supply&rsquo;s 24-pin plug into J1, and four leads from the Smoothieboard header to the Gadgeteer socket X IN.</title>
    <rect x="330" y="60" width="340" height="200" rx="8" fill="#1b2028" stroke="#59616e" stroke-width="1.5"/>
    <text x="500" y="90" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">ATX connector board</text>
    <rect x="360" y="190" width="280" height="40" rx="3" fill="#0d0f12" stroke="#8a94a3"/><text x="500" y="215" text-anchor="middle" font-size="12" fill="#e6ebf2">J1, 24-pin ATX</text>
    <rect x="360" y="110" width="80" height="40" rx="3" fill="#0d0f12" stroke="#8a94a3"/><text x="400" y="135" text-anchor="middle" font-size="12" fill="#e6ebf2">X IN</text>
    <rect x="30" y="190" width="170" height="70" rx="8" fill="#212936" stroke="#59616e"/><text x="115" y="220" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">ATX supply</text><text x="115" y="240" text-anchor="middle" font-size="12" fill="#a9b4c2">mains unplugged</text>
    <path d="M200 225H360" stroke="#e0a877" stroke-width="6"/><text x="280" y="215" text-anchor="middle" font-size="11" fill="#e0a877">24-pin plug</text>
    <rect x="800" y="90" width="170" height="90" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="885" y="130" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Smoothieboard</text><text x="885" y="150" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">V2 Prime</text>
    <path d="M440 130H800" stroke="#5fb3ff" stroke-width="4"/>
    <text x="620" y="120" text-anchor="middle" font-size="11" fill="#a9b4c2">3.3 V, request PB1, power good PJ4, GND</text>
  </svg>
  </div>
  <figcaption>Minimal wiring, schematic and not to scale. The controller is powered separately.</figcaption>
</figure>

<ol class="xb-steps">
  <li class="xb-step">
    <h3>Unplug the supply from the mains</h3>
    <p>Leave it unplugged until the end of the wiring. Power the Smoothieboard separately, and keep it off too.</p>
  </li>
  <li class="xb-step">
    <h3>Mount the board</h3>
    <p>Fix it with four M3 screws on standoffs, using the hole positions in the <a href="#mounting">mounting appendix</a>.</p>
  </li>
  <li class="xb-step">
    <h3>Check the plug against J1</h3>
    <p>Check the supply&rsquo;s 24-pin connector against the table above: PS_ON# on pin 16 and 5&nbsp;V standby on pin 9. Then fit the plug into J1.</p>
  </li>
  <li class="xb-step">
    <h3>Leave J6 empty</h3>
    <p>A shunt on J6 keeps the supply on whatever the controller does. Leave it out for software control, and leave the chain links as delivered.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the control side</h3>
    <p>Join J37 pin <b>1</b> to J_X contact <b>1</b> (3.3&nbsp;V), pin <b>3</b> (<code>PB1</code>) to contact <b>3</b> (request), pin <b>4</b> (<code>PJ4</code>) to contact <b>4</b> (power good) and pin <b>10</b> to contact <b>10</b> (ground). Leave contact 2 and contacts 5 to 9 open.</p>
  </li>
  <li class="xb-step">
    <h3>Add the configuration</h3>
    <p>Copy <a href="#config-request">example 1</a> into the configuration file on the SD card. Keep every output load disconnected for this first test.</p>
  </li>
  <li class="xb-step">
    <h3>Test the request</h3>
    <p>Plug the supply into the mains, then send:</p>
    <pre><code>M42.20</code></pre>
    <p class="xb-expect"><b>You should see:</b> the supply starts, and its outputs and the green lights of the board come on. Send <code>M119</code> to read the power-good line, then <code>M43.20</code> to release the request: the outputs go off and the standby light stays on.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

Smoothieware has no setting called &ldquo;ATX board&rdquo;. The request is an output pin the Switch module can drive, and power good is an input pin the Endstops module can report. The lines go into the configuration file on the controller&rsquo;s SD card.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Switch the supply on and off from G-code</td><td><a href="/switch">Switch</a>, digital output</td><td><a href="#config-request">1. Request</a></td></tr>
    <tr><td>See whether the supply reports good</td><td><a href="/endstops">Endstops</a>, read only</td><td><a href="#config-good">2. Power good</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### 1. Request the supply on and off (Switch module) {#config-request}

```ini
[switch]
atx_bench_enable.enable            = true
atx_bench_enable.output_pin        = PB1        # header G_F pin 3, J_X contact 3
atx_bench_enable.output_type       = digital
atx_bench_enable.input_on_command  = M42
atx_bench_enable.input_off_command = M43
atx_bench_enable.subcode           = 20         # M42.20 on, M43.20 off
atx_bench_enable.startup_state     = false      # off when the board starts
atx_bench_enable.halt_set_to       = false      # off when the machine halts
atx_bench_enable.ignore_on_halt    = false
```

If your file already has a `[switch]` section, add the lines to it. The command numbers and the subcode are yours to choose; reserve `PB1` for this entry. Off at start-up and on halt applies once the firmware has loaded the configuration; during reset and boot, a pull-up on the supply side keeps the start line high (supply off) while nothing drives the request.

### 2. Read power good (Endstops module) {#config-good}

```ini
[endstops]
atx_power_good_observation.enable           = true
atx_power_good_observation.pin              = PJ4-    # header G_F pin 4, J_X contact 4, pull-down on
atx_power_good_observation.axis             = X
atx_power_good_observation.homing_direction = none    # read only
atx_power_good_observation.limit_enable     = false
```

`M119` then lists `(X)PJ4:0` or `(X)PJ4:1`. This only reports the line: it does not wait for power good, stop a move or run any start-up sequence.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 270" role="img" aria-labelledby="xb-how-t">
    <title id="xb-how-t">The controller&rsquo;s request drives a MOSFET that pulls the supply&rsquo;s start line low; the supply&rsquo;s power-good signal goes through a buffer back to the controller.</title>
    <g font-size="13" font-weight="700" text-anchor="middle" fill="#e6ebf2">
      <rect x="20" y="40" width="170" height="70" rx="8" fill="#1f2226" stroke="#dfe4ee"/><text x="105" y="70">Request, J_X 3</text><text x="105" y="90" font-weight="400" fill="#a9b4c2">high = on</text>
      <rect x="260" y="40" width="190" height="70" rx="8" fill="#212936" stroke="#5fb3ff"/><text x="355" y="70">MOSFET Q1</text><text x="355" y="90" font-weight="400" fill="#a9b4c2">pulls PS_ON# low</text>
      <rect x="520" y="40" width="200" height="70" rx="8" fill="#212936" stroke="#e0a877"/><text x="620" y="70">ATX supply</text><text x="620" y="90" font-weight="400" fill="#a9b4c2">via J1</text>
      <rect x="520" y="160" width="200" height="70" rx="8" fill="#212936" stroke="#6fe08a"/><text x="620" y="190">PWR_OK, J1 pin 8</text><text x="620" y="210" font-weight="400" fill="#a9b4c2">5 V logic</text>
      <rect x="260" y="160" width="190" height="70" rx="8" fill="#212936" stroke="#5fb3ff"/><text x="355" y="190">Buffer U1</text><text x="355" y="210" font-weight="400" fill="#a9b4c2">to 3.3 V</text>
      <rect x="20" y="160" width="170" height="70" rx="8" fill="#1f2226" stroke="#dfe4ee"/><text x="105" y="190">Power good, J_X 4</text><text x="105" y="210" font-weight="400" fill="#a9b4c2">high = good</text>
    </g>
    <g stroke-width="3" fill="none" stroke="#a9b4c2"><path d="M190 75H260"/><path d="M450 75H520"/><path d="M520 195H450"/><path d="M260 195H190"/></g>
    <path d="M620 110V160" stroke="#a9b4c2" stroke-width="3" fill="none"/>
    <text x="800" y="75" font-size="12" fill="#a9b4c2">5 V standby keeps PS_ON# high</text>
    <text x="800" y="195" font-size="12" fill="#a9b4c2">buffer powered from 3.3 V</text>
  </svg>
  </div>
  <figcaption>The two signal paths between the controller and the supply.</figcaption>
</figure>
{:/nomarkdown}

An ATX supply stays off while its PS_ON# line is high and starts when the line is pulled to ground. A 10&nbsp;k&Omega; resistor to the 5&nbsp;V standby rail keeps the line high. When the controller&rsquo;s request goes high, a 1&nbsp;k&Omega; resistor drives the gate of Q1, a DMN2056U-7 MOSFET whose drain is on the start line, and Q1 pulls the line to ground. A 100&nbsp;k&Omega; resistor on the gate keeps Q1 off when nothing drives the request. The J6 shunt grounds the line directly.

The supply&rsquo;s PWR_OK output is a 5&nbsp;V signal. It passes through a 1&nbsp;k&Omega; resistor, with a 100&nbsp;k&Omega; resistor to ground, to U1, an SN74LVC1G17 buffer powered from the controller&rsquo;s 3.3&nbsp;V. A 100&nbsp;&Omega; resistor then connects the output to the controller. A second MOSFET lights the PWR_OK light from the standby rail.

The three output lights are fed from the rails themselves through 4.7&nbsp;k&Omega; (12&nbsp;V) and 1&nbsp;k&Omega; (5&nbsp;V and standby) resistors.

## Troubleshooting {#troubleshooting}

What the lights tell you:

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-green"></span>12 V</th><th><span class="xb-led xb-led-green"></span>5 V</th><th><span class="xb-led xb-led-green"></span>5 V standby</th><th><span class="xb-led xb-led-green"></span>PWR_OK</th></tr></thead>
  <tbody>
    <tr><td>Where</td><td>Top right, marker 11 of the <a href="#tour">board tour</a></td><td>Left, marker 12</td><td>Top right corner, marker 13</td><td>Middle, marker 10</td></tr>
    <tr><td>Lit means</td><td>The 12&nbsp;V output is present</td><td>The 5&nbsp;V output is present</td><td>The standby rail is present: the supply is on the mains</td><td>The supply reports its outputs good</td></tr>
    <tr><td>Dark means</td><td>No 12&nbsp;V, or the light is disabled</td><td>No 5&nbsp;V, or the light is disabled</td><td>No standby, or the light is disabled</td><td>Not reported good, or the light is disabled</td></tr>
    <tr><td>Disable it</td><td>Cut link JP10</td><td>Cut link JP12</td><td>Cut link JP13</td><td>Cut link JP11</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>When you see</th><th>It means</th><th>Do this</th></tr></thead>
  <tbody>
    <tr><td>The standby light does not come on when you plug in the supply</td><td>The supply is not on the mains, is not a standard ATX supply, or the plug is not seated.</td><td>Unplug from the mains, check the plug and its pin order against J1, then try again.</td></tr>
    <tr><td>The supply does not start on <code>M42.20</code></td><td>The request does not reach the board, or a start line is held high.</td><td>Unplug the supply. Check J37 pin 3 to J_X contact 3 and the ground. Check the configuration lists <code>atx_bench_enable</code>. Measure the PS_ON# test point with a meter: it should fall to about 0&nbsp;V when requested.</td></tr>
    <tr><td>The supply is on and does not turn off on <code>M43.20</code></td><td>A shunt is on J6, or the request is still high.</td><td>Remove the J6 shunt. Send <code>M43.20</code> again and check the request line.</td></tr>
    <tr><td><code>M119</code> shows no power-good change</td><td>The power-good line does not reach the controller.</td><td>Check J_X contact 4 to J37 pin 4 and that 3.3&nbsp;V reaches contact 1: the buffer needs it.</td></tr>
    <tr><td>Outputs are present but PWR_OK stays dark</td><td>The supply does not report good, or it has no load.</td><td>Some supplies need a minimum load. Check the supply&rsquo;s documentation.</td></tr>
    <tr><td>The wrong rail or no rail at the terminals</td><td>The two screw terminals have opposite orders.</td><td>Check the marking beside J4 and J5.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/). Say which supply you use and what `M119` reports.

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/atx-connector-board/atx-connector-board-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram. The board has no fuses, whatever a comment in the schematic says about fused outputs.</td></tr>
    <tr><td><a href="/images/extensions/atx-connector-board/atx-connector-board-bom.csv">Parts list (CSV)</a></td><td>Every component with its value, footprint and position</td></tr>
    <tr><td><a href="/images/extensions/atx-connector-board/atx-connector-board-diagram.webp">Board drawing (WebP)</a></td><td>The top view used on this page, at full resolution</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the corner marked 0, 0 with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-atx-mount-t">
  <title id="xb-atx-mount-t">Mounting drawing of the ATX connector board, component side: outline 74 by 49.5 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="225.9" y="78.0" width="508.3" height="340.0" rx="13.7" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M225.9 56H734.1"/><path d="M225.9 50V62"/><path d="M734.1 50V62"/><path d="M760.1 78.0V418.0"/><path d="M754.1 78.0h12"/><path d="M754.1 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">74</text>
  <text x="772.1" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">49.5</text>
  <circle cx="225.9" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="213.9" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M167.9 104.0h30" fill="none"/><path d="M201.9 104.0l-8 -4v8z"/><path d="M167.9 104.0v30" fill="none"/><path d="M167.9 138.0l-4 -8h8z"/></g>
  <text x="205.9" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="163.9" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="273.9" cy="146.7" r="11.0" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M258.9 146.7h30.0M273.9 131.7v30.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="262.9" y="177.7" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  7.00, 10.00</text>
  <circle cx="686.1" cy="146.7" r="11.0" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M671.1 146.7h30.0M686.1 131.7v30.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="697.1" y="177.7" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  67.00, 10.00</text>
  <circle cx="273.9" cy="284.1" r="11.0" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M258.9 284.1h30.0M273.9 269.1v30.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="262.9" y="263.1" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  7.00, 30.00</text>
  <circle cx="686.1" cy="284.1" r="11.0" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M671.1 284.1h30.0M686.1 269.1v30.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="697.1" y="263.1" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  67.00, 30.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 74 × 49.5&nbsp;mm, corners rounded to a 2&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>7.00</td><td>10.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>67.00</td><td>10.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>7.00</td><td>30.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>67.00</td><td>30.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>

{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Every figure below is a design value, a value calculated from the design or a value from a part number, as the last column says. A dash means the figure does not apply.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>12 V output current</td><td>J3</td><td>—</td><td>—</td><td>10 A</td><td>Design value</td></tr>
    <tr><td>5 V output current</td><td>J4</td><td>—</td><td>—</td><td>3.75 A</td><td>Design value; printed &ldquo;3.7A&rdquo; on the board</td></tr>
    <tr><td>5 V standby output current</td><td>J5</td><td>—</td><td>—</td><td>1.5 A</td><td>Design value; also feeds the board&rsquo;s own start pull-up and lights</td></tr>
    <tr><td>Output fuses</td><td>J3, J4, J5</td><td>—</td><td>None</td><td>—</td><td>No fuse is fitted on the board</td></tr>
    <tr><td>Controller supply</td><td>J_X contact 1</td><td>—</td><td>3.3 V</td><td>—</td><td>Powers the power-good buffer</td></tr>
    <tr><td>PS_ON# pull-up</td><td>J1 pin 16</td><td>—</td><td>10 k&Omega;</td><td>—</td><td>To the 5&nbsp;V standby rail</td></tr>
    <tr><td>Request input</td><td>J_X contact 3</td><td>—</td><td>—</td><td>—</td><td>Through 1&nbsp;k&Omega; to the gate of Q1, with a 100&nbsp;k&Omega; pull-down</td></tr>
    <tr><td>Power-good input from the supply</td><td>J1 pin 8</td><td>—</td><td>5 V logic</td><td>—</td><td>Through 1&nbsp;k&Omega; with 100&nbsp;k&Omega; to ground into the buffer</td></tr>
    <tr><td>Power-good output</td><td>J_X contact 4</td><td>—</td><td>3.3 V logic</td><td>—</td><td>SN74LVC1G17 on the controller&rsquo;s 3.3&nbsp;V, through 100&nbsp;&Omega;; non-inverting</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Component stress limits

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Circuit</th><th>Pin or device stress</th><th>Absolute limit</th></tr></thead>
  <tbody>
    <tr><td>Output rails</td><td>Short circuit</td><td>Nothing on the board limits it; only the supply&rsquo;s own protection and your fuses</td></tr>
    <tr><td>Plug and unplug</td><td>Live connection of the ATX plug</td><td>Not allowed: the board is printed &ldquo;NO HOT-PLUG&rdquo;</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
