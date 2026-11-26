---
layout: default
title: "Mechanical endstop breakout"
description: "A normally-closed endstop board with an onboard microswitch or a remote contact input, filtered and buffered to a 3.3 V host input: pinout, configuration and limits."
permalink: /extensions/mechanical-endstop-breakout
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Endstops</p>
    <h1 id="mechanical-endstop-breakout">Mechanical endstop breakout</h1>
    <p class="xb-lead">Reads either an onboard Omron-style microswitch or an external normally-closed contact, filters it and passes it to one 3.3&nbsp;V host input through a Schmitt buffer. A broken normally-closed circuit reads as triggered.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/mechanical-endstop-breakout/mechanical-endstop-breakout-diagram.png" alt="Top view of the mechanical endstop breakout: a lever microswitch at the top, a three-pad connector area at the lower left and a 10-contact socket at the lower right.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>1 input</b><span>one endstop on one host pin, PB1 in the example</span></div>
  <div class="xb-stat"><b>NC</b><span>normally-closed contact; an open cable reads as triggered</span></div>
  <div class="xb-stat"><b>Local or remote</b><span>onboard lever switch, or an external contact, chosen by a solder jumper</span></div>
  <div class="xb-stat"><b>3.3 V out</b><span>buffered by an SN74LVC1G17 Schmitt gate</span></div>
  <div class="xb-stat"><b>Yellow LED</b><span>lights while the local switch is pressed</span></div>
  <div class="xb-stat"><b>34 × 29</b><span>millimetres, two M3 mounting holes</span></div>
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
A normally-closed loop that reads as triggered when broken does not detect every fault, for example a short; do not rely on this board as a safety limit.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>One normally-closed mechanical endstop on one host input, with filtering and buffering</td></tr>
    <tr><td>Contact source</td><td>Onboard Omron D2F-01L-A lever switch, or a remote normally-closed contact on J1, chosen with solder jumper JP1</td></tr>
    <tr><td>Buffer</td><td>Texas Instruments SN74LVC1G17 Schmitt-trigger buffer, powered from 3.3&nbsp;V</td></tr>
    <tr><td>Filter</td><td>1&nbsp;k&Omega; and 100&nbsp;nF; debounce time and maximum cable length are not specified</td></tr>
    <tr><td>Pull-up</td><td>3.3&nbsp;k&Omega; to 5&nbsp;V on the contact node, and 10&nbsp;k&Omega; to 3.3&nbsp;V on the output</td></tr>
    <tr><td>Output</td><td>High when the contact is open (triggered or cable broken), low when closed, through a 330&nbsp;&Omega; series resistor</td></tr>
    <tr><td>Protection</td><td>A 5&nbsp;V TVS diode on the remote contact and a 4.7&nbsp;V zener on the filtered node</td></tr>
    <tr><td>Indicator</td><td>Yellow LED with a 1.5&nbsp;k&Omega; resistor, lit while the local switch is pressed; cut link JP2 turns it off</td></tr>
    <tr><td>Controller socket</td><td>One 10-contact Gadgeteer socket, X (Samtec SHF-105, 1.27&nbsp;mm)</td></tr>
    <tr><td>Remote connector</td><td>3-contact, 2.54&nbsp;mm, marked S / G / 5V; exact connector series not specified</td></tr>
    <tr><td>Size</td><td>34 &times; 29&nbsp;mm with two M3 mounting holes that are not grounded</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a></td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/mechanical-endstop-breakout/mechanical-endstop-breakout-diagram.png" alt="Top view of the mechanical endstop breakout with twelve numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pr" href="#tour-1" style="left:77.8%;top:87.2%" aria-label="1: host socket">1<span class="xb-pop"><b>Gadgeteer socket X (JX)</b> — the 10-contact socket that connects to the controller. Contact 3 carries the endstop signal. <i>See the pinout.</i></span></a>
      <a class="xb-mk" href="#tour-2" style="left:30%;top:69%" aria-label="2: remote input">2<span class="xb-pop"><b>Remote contact input (J1)</b> — a 3-contact connector for an external normally-closed contact: 1 contact, 2 ground, 3 5&nbsp;V from the host for an accessory. The drawing shows two sets of pads for the same three contacts, so either connector style can be fitted.</span></a>
      <a class="xb-mk xb-pb" href="#tour-3" style="left:41.4%;top:25%" aria-label="3: local switch">3<span class="xb-pop"><b>Local microswitch (SW1)</b> — an Omron D2F-01L-A lever switch. Contact 1 is ground, 2 is the normally-open contact (it lights the LED) and 3 is the normally-closed contact.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:52.8%;top:55.8%" aria-label="4: source selector">4<span class="xb-pop"><b>Source selector (JP1)</b> — a three-pad solder jumper. As delivered it bridges pads 1 and 2, which selects the local switch; cut it and bridge 2 and 3 to select the remote input.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:66.7%;top:66.8%" aria-label="5: Schmitt buffer">5<span class="xb-pop"><b>Schmitt buffer (U1)</b> — an SN74LVC1G17 buffer powered from 3.3&nbsp;V. Its input accepts the filtered 5&nbsp;V-level node.</span></a>
      <a class="xb-mk xb-pr" href="#tour-6" style="left:88.9%;top:55.8%" aria-label="6: state LED">6<span class="xb-pop"><b>Actuation LED (D2)</b> — a yellow LED that lights while the local switch is pressed. It does not follow a remote contact.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-7" style="left:91.7%;top:49.4%" aria-label="7: LED disable link">7<span class="xb-pop"><b>LED disable link (JP2)</b> — a solder link marked CUT TO DISABLE D2. Cutting it turns the LED off.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:46.7%;top:79.5%" aria-label="8: surge diode">8<span class="xb-pop"><b>Surge diode (D1)</b> — a PESD5V0S1BA protection diode from the remote contact to ground.</span></a>
      <a class="xb-mk" href="#tour-9" style="left:50%;top:87.2%" aria-label="9: zener diode">9<span class="xb-pop"><b>Clamp diode (D3)</b> — a BZT52-C4V7 4.7&nbsp;V zener from the filtered node to ground.</span></a>
      <a class="xb-mk" href="#tour-10" style="left:55.6%;top:66.5%" aria-label="10: filter">10<span class="xb-pop"><b>Filter (R2 and C1)</b> — a 1&nbsp;k&Omega; resistor and a 100&nbsp;nF capacitor that smooth contact noise ahead of the buffer.</span></a>
      <a class="xb-mk xb-pb" href="#tour-11" style="left:32.6%;top:36.5%" aria-label="11: mounting holes">11<span class="xb-pop"><b>Mounting holes</b> — two M3 holes under the switch body, 3.2&nbsp;mm, not grounded.</span></a>
      <a class="xb-mk xb-pl" href="#tour-12" style="left:11%;top:87.4%" aria-label="12: cable-tie holes">12<span class="xb-pop"><b>Cable-tie holes</b> — two holes for a cable tie that holds the remote cable in place.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Gadgeteer socket X (JX)</b> — the 10-contact socket that connects to the controller. Contact 3 carries the endstop signal. <i>See the pinout.</i></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Remote contact input (J1)</b> — a 3-contact connector for an external normally-closed contact: 1 contact, 2 ground, 3 5&nbsp;V from the host for an accessory. The drawing shows two sets of pads for the same three contacts, so either connector style can be fitted.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Local microswitch (SW1)</b> — an Omron D2F-01L-A lever switch. Contact 1 is ground, 2 is the normally-open contact (it lights the LED) and 3 is the normally-closed contact.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Source selector (JP1)</b> — a three-pad solder jumper. As delivered it bridges pads 1 and 2, which selects the local switch; cut it and bridge 2 and 3 to select the remote input.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Schmitt buffer (U1)</b> — an SN74LVC1G17 buffer powered from 3.3&nbsp;V. Its input accepts the filtered 5&nbsp;V-level node.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Actuation LED (D2)</b> — a yellow LED that lights while the local switch is pressed. It does not follow a remote contact.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>LED disable link (JP2)</b> — a solder link marked CUT TO DISABLE D2. Cutting it turns the LED off.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Surge diode (D1)</b> — a PESD5V0S1BA protection diode from the remote contact to ground.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Clamp diode (D3)</b> — a BZT52-C4V7 4.7&nbsp;V zener from the filtered node to ground.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Filter (R2 and C1)</b> — a 1&nbsp;k&Omega; resistor and a 100&nbsp;nF capacitor that smooth contact noise ahead of the buffer.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Mounting holes</b> — two M3 holes under the switch body, 3.2&nbsp;mm, not grounded.</div></li>
    <li id="tour-12"><span class="xb-n">12</span><div><b>Cable-tie holes</b> — two holes for a cable tie that holds the remote cable in place.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### JX: Gadgeteer socket X

Contact 1 is at the lower left of the socket in the tour, contact 2 directly above it, and odd contacts are in the lower row.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Function</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Powers the buffer and the output pull-up</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Feeds the contact pull-up, the LED and J1 contact 3</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">ENDSTOP_OUT</span></td><td>Output to the host input. High means open or triggered.</td></tr>
    <tr><td>4 to 9</td><td>—</td><td>Not connected. Leave unused.</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Ground</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J1: remote contact

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Function</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-sig">REMOTE_NC</span></td><td>One side of the external normally-closed contact</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>The other side of the contact</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Host-derived 5&nbsp;V for an accessory. Do not feed an external supply in here.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Local switch SW1 and the links

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Part</th><th>Contacts or state</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>SW1</td><td>1 ground, 2 normally open (lights the LED), 3 normally closed</td><td>Fitted</td></tr>
    <tr><td>JP1</td><td>Pad 1 local contact, 2 selected source, 3 remote contact</td><td>Pads 1 and 2 bridged: local switch</td></tr>
    <tr><td>JP2</td><td>Cut to disable the LED</td><td>Bridged</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Four wires</b><span>Individual leads from header G_F to the socket: 3.3&nbsp;V, 5&nbsp;V, signal and ground.</span></div>
  <div class="xb-card"><b>A free input</b><span>PB1 in the example, if nothing else uses it.</span></div>
  <div class="xb-card"><b>A remote contact</b><span>Only for the remote option: a normally-closed switch.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Check the jumpers</h3>
    <p>With the power off, confirm JP1 bridges pads 1 and 2 for the local switch. For a remote contact, cut that bridge, bridge pads 2 and 3 and connect the contact between J1 contacts 1 and 2, leaving contact 3 unused.</p>
  </li>
  <li class="xb-step">
    <h3>Wire the host</h3>
    <p>Connect header G_F (J37) contacts 1, 2, 3 and 10 to JX contacts 1, 2, 3 and 10 with individual leads: 3.3&nbsp;V, 5&nbsp;V, PB1 and ground. Leave JX contacts 4 to 9 unused. Check the contact numbers against the real board first.</p>
    <p class="xb-expect">On the Prime the rail positions on the physical header must be checked against the board before powering; see the note on the Prime header in the electrical appendix.</p>
  </li>
  <li class="xb-step">
    <h3>Add the configuration</h3>
    <p>Add the <a href="#configuration">example</a> to the endstops section of your configuration file and reset the controller.</p>
  </li>
  <li class="xb-step">
    <h3>Check the state</h3>
    <p>With motion disabled, send <code>M119</code>, press and release the switch, then send it again.</p>
    <p class="xb-expect">The PB1 state changes from 0 when clear to 1 when triggered. Check a disconnected remote cable separately.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Read the switch state without homing</td><td>Endstops (V2)</td><td>The bench entry below</td></tr>
    <tr><td>Home an axis on this switch</td><td>Endstops (V2)</td><td>None supplied: direction, travel and rates are machine specific</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Add this input-check entry to the existing `[endstops]` section while machine loads are disabled and an X actuator is already configured:

```ini
[endstops]
bench_endstop.enable = true
bench_endstop.pin = PB1^
bench_endstop.axis = X
bench_endstop.homing_direction = none
bench_endstop.limit_enable = false
```

The `^` turns on the input pull-up and no `!` is used because triggered is high. The entry enables neither homing nor a limit. Do not use it while PB1 is allocated elsewhere. In the SmoothieV2 source (commit 2a21c0108b1d095ecd8b2b9358e94055f053c003), the [input parser](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/endstops/Endstops.cpp#L130-L200) keeps `homing_direction = none` inputs and the [M119 handler](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/endstops/Endstops.cpp#L1013-L1030) reports their state.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 170" role="img" aria-labelledby="xb-how-t">
    <title id="xb-how-t">The selected contact node is pulled up to 5 volts, filtered, buffered by a Schmitt gate and sent to the host pin.</title>
    <g font-size="13" font-weight="700" text-anchor="middle" fill="#e6ebf2">
      <rect x="20" y="55" width="170" height="60" rx="8" fill="#212936" stroke="#e0a877"/><text x="105" y="80">NC contact</text><text x="105" y="100" font-weight="400" fill="#a9b4c2">local or remote (JP1)</text>
      <rect x="250" y="55" width="170" height="60" rx="8" fill="#212936" stroke="#e0a877"/><text x="335" y="80">Pull-up 3.3 k</text><text x="335" y="100" font-weight="400" fill="#a9b4c2">to 5 V</text>
      <rect x="480" y="55" width="170" height="60" rx="8" fill="#212936" stroke="#6fe08a"/><text x="565" y="80">Filter</text><text x="565" y="100" font-weight="400" fill="#a9b4c2">1 k and 100 nF</text>
      <rect x="710" y="55" width="130" height="60" rx="8" fill="#212936" stroke="#5fb3ff"/><text x="775" y="80">Schmitt</text><text x="775" y="100" font-weight="400" fill="#a9b4c2">buffer U1</text>
      <rect x="880" y="55" width="100" height="60" rx="8" fill="#1f2226" stroke="#dfe4ee"/><text x="930" y="90">JX.3</text>
    </g>
    <g stroke-width="3" fill="none" stroke="#a9b4c2"><path d="M190 85H250"/><path d="M420 85H480"/><path d="M650 85H710"/><path d="M840 85H880"/></g>
  </svg>
  </div>
  <figcaption>The path from the contact to the host pin.</figcaption>
</figure>
{:/nomarkdown}

A closed normally-closed contact holds the node at ground, so the output is low. When the contact opens, or the cable breaks, the 3.3&nbsp;k&Omega; pull-up to 5&nbsp;V raises the node, the Schmitt buffer sees a high input and the output goes high. The buffer runs from 3.3&nbsp;V and the family is specified for 5&nbsp;V-tolerant inputs, so the host sees a 3.3&nbsp;V logic level. The LED is wired to the local switch&rsquo;s normally-open contact, so it lights only when the local lever is pressed.

If 3.3&nbsp;V is lost while 5&nbsp;V is present, do not rely on the output state.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Always reads triggered</td><td>JP1 selects a source with no contact connected, or the remote cable is open or on the wrong contacts. Check JP1 and J1 contacts 1 and 2.</td></tr>
    <tr><td>Never reads triggered</td><td>A short between the contact node and ground, or a wrong input pin in the configuration.</td></tr>
    <tr><td>The LED does not light</td><td>The LED follows only the local switch; JP2 may have been cut; 5&nbsp;V may be missing.</td></tr>
    <tr><td>Remote contact ignored</td><td>JP1 still bridges pads 1 and 2.</td></tr>
    <tr><td>Bouncing readings</td><td>Debounce time and maximum cable length are not specified; test with your cable.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-amber"></span>Yellow (D2)</th></tr></thead>
  <tbody>
    <tr><td>Where</td><td>Right of the middle, next to the LED disable link</td></tr>
    <tr><td>Lit means</td><td>The local switch is pressed (its normally-open contact is closed)</td></tr>
    <tr><td>Off means</td><td>The local switch is released, 5&nbsp;V is missing or link JP2 has been cut. It says nothing about a remote contact.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/mechanical-endstop-breakout/mechanical-endstop-breakout-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram.</td></tr>
    <tr><td><a href="/images/extensions/mechanical-endstop-breakout/mechanical-endstop-breakout-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/mechanical-endstop-breakout/mechanical-endstop-breakout-diagram.png">Board drawing (SVG)</a></td><td>The top view used on this page, at full resolution</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-mech-mount-t">
  <title id="xb-mech-mount-t">Mounting drawing of the mechanical endstop breakout, component side: outline 34 by 29 millimetres with 2 mounting holes and 2 cable-tie holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="280.7" y="78.0" width="398.6" height="340.0" rx="11.7" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M280.7 56H679.3"/><path d="M280.7 50V62"/><path d="M679.3 50V62"/><path d="M705.3 78.0V418.0"/><path d="M699.3 78.0h12"/><path d="M699.3 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">34</text>
  <text x="717.3" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">29</text>
  <circle cx="280.7" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="268.7" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M222.7 104.0h30" fill="none"/><path d="M256.7 104.0l-8 -4v8z"/><path d="M222.7 104.0v30" fill="none"/><path d="M222.7 138.0l-4 -8h8z"/></g>
  <text x="260.7" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="218.7" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="327.6" cy="136.6" r="18.8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M304.8 136.6h45.5M327.6 113.9v45.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="308.8" y="175.4" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  4.00, 5.00</text>
  <circle cx="562.1" cy="136.6" r="18.8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M539.3 136.6h45.5M562.1 113.9v45.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="580.8" y="175.4" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  24.00, 5.00</text>
  <circle cx="315.9" cy="371.1" r="14.7" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <circle cx="374.5" cy="371.1" r="14.7" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <text x="345.2" y="347.4" text-anchor="middle" font-size="12" fill="#a9b4c2">cable tie</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 34 × 29&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>4.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>24.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>–</td><td>3.00</td><td>25.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
    <tr><td>–</td><td>8.00</td><td>25.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
  </tbody>
</table></div>

{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

The table lists the supply, signal and filter values and their basis.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Logic supply</td><td>JX contact 1</td><td>—</td><td>3.3 V</td><td>—</td><td>Buffer and output pull-up supply</td></tr>
    <tr><td>Field supply</td><td>JX contact 2</td><td>—</td><td>5 V</td><td>—</td><td>Contact pull-up, LED and J1 contact 3; host-derived</td></tr>
    <tr><td>Contact pull-up current</td><td>Closed contact to ground</td><td>—</td><td>about 1.5 mA</td><td>—</td><td>Calculated: 5&nbsp;V through 3.3&nbsp;k&Omega;</td></tr>
    <tr><td>Filter corner</td><td>R2 and C1</td><td>—</td><td>about 1.6 kHz</td><td>—</td><td>Calculated from 1&nbsp;k&Omega; and 100&nbsp;nF with no source resistance counted</td></tr>
    <tr><td>Output</td><td>JX contact 3</td><td>—</td><td>High = triggered</td><td>—</td><td>Buffer through 330&nbsp;&Omega;, 10&nbsp;k&Omega; pull-up to 3.3&nbsp;V</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Prime header G_F (J37)

On the Prime, header G_F (J37) has 3.3&nbsp;V on contact 1, 5&nbsp;V on contact 2, PB1 on 3, PJ4 on 4 and ground on 10. Verify numbered continuity of the rail positions with the power removed. The header is unshrouded.

See all boards on the [extension boards](/extension-boards) page.
