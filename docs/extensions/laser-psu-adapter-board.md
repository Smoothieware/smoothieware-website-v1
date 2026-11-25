---
layout: default
title: "Laser PSU adapter board"
description: "Connect a CO2 laser power supply to Smoothieboard V2 with four hardware interlock loops: pinout, wiring, configuration and troubleshooting."
permalink: /extensions/laser-psu-adapter-board
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Laser control</p>
    <h1 id="laser-psu-adapter-board">Laser PSU adapter board</h1>
    <p class="xb-lead">Connect a CO2 laser power supply to your Smoothieboard, and let four switches decide whether it may fire: the lid, the cooling water, and two more of your choice. When any of them opens, logic chips on the board block the laser by themselves, without waiting for the firmware.</p>
    <p class="xb-badge">Prototype design · revision v27 · not built yet</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/laser-psu-adapter-board/laser-psu-adapter-diagram.png" alt="Top view of the laser PSU adapter board: two four-way screw terminals along the top edge for the four protection loops, a six-pin PSU screw terminal at the top right, a ribbon-cable connector at the bottom and a white six-pin PSU header at the bottom right.">
    <figcaption>Top view, drawn from the board's design files (revision v27). The connector shapes are stylized.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>4</b><span>protection loops for normally closed switches</span></div>
  <div class="xb-stat"><b>3</b><span>outputs to the laser supply: power, fire, enable</span></div>
  <div class="xb-stat"><b>Hardware</b><span>gating: an open loop blocks all three outputs with no firmware involved</span></div>
  <div class="xb-stat"><b>5</b><span>status signals back to the controller, and five LEDs</span></div>
  <div class="xb-stat"><b>5 V</b><span>output levels, from 3.3&nbsp;V controller signals</span></div>
  <div class="xb-stat"><b>80 × 55.75</b><span>millimetres, four M3 mounting holes</span></div>
</div>

<nav class="xb-nav" aria-label="On this page">
  <a href="#specs">Tech specs</a>
  <a href="#tour">Board tour</a>
  <a href="#pinout">Pinout</a>
  <a href="#what-you-need">What you need</a>
  <a href="#get-started">Get started</a>
  <a href="#configuration">Configuration</a>
  <a href="#psu">Wiring the laser supply</a>
  <a href="#how-it-works">How it works</a>
  <a href="#options">Options</a>
  <a href="#troubleshooting">Troubleshooting</a>
  <a href="#downloads">Downloads</a>
  <a href="#mounting">Mounting</a>
  <a href="#electrical">Electrical</a>
</nav>
{:/nomarkdown}

<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>A CO2 laser can blind and burn in an instant, and its power supply produces lethal high voltage.</strong> This board is not a certified safety device and must not be the only thing protecting people. Keep the laser's own key switch, emergency stop and enclosure in place, wear eye protection rated for your laser, and never work on the supply's wiring while it is plugged in.
</sl-alert>

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="cone-striped"></sl-icon>
  <strong>This board is a prototype design.</strong> Revision v27 is a design candidate. It has not been built or tested on hardware. Final review, cable fit and electrical qualification are pending.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Protection loops</td><td>4 inputs for normally closed, voltage-free switch contacts (lid switch, water-flow switch, emergency stop contact, and so on). A loop is healthy while its switch connects <b>S</b> to <b>G</b>.</td></tr>
    <tr><td>Loop test current</td><td>About 1&nbsp;mA through each closed switch, from the board's 5&nbsp;V supply (calculated)</td></tr>
    <tr><td>Response</td><td>Opening a loop blocks the outputs with no added delay. After a loop closes again, the outputs return about 0.2&nbsp;s later, so a bouncing switch keeps the laser off (calculated).</td></tr>
    <tr><td>Outputs to the laser supply</td><td><b>PWM</b>: power level, 0 to 5&nbsp;V pulses. <b>TTL</b>: fire signal, 5&nbsp;V logic. <b>WP</b>: enable line, a transistor that connects the supply's enable terminal (printed P or WP) to ground while firing is permitted.</td></tr>
    <tr><td>Output polarity</td><td>As delivered: PWM active high, TTL active low. Each can be reversed with a solder link.</td></tr>
    <tr><td>Status to the controller</td><td>PERMIT (high while all loops are closed) and one fault signal per loop (high while that loop is open), 3.3&nbsp;V logic</td></tr>
    <tr><td>Indicators</td><td>4 red LEDs, one per loop, lit while that loop is open. 1 green PERMIT LED, lit while firing is permitted.</td></tr>
    <tr><td>Control connector</td><td>2×5-pin, 1.27&nbsp;mm pitch Gadgeteer socket, type Y with PWM on pin 3 and TTL on pin 4</td></tr>
    <tr><td>Laser supply connector</td><td>Two equivalent six-pin connections: a 5.00&nbsp;mm screw terminal at the top right and a 2.54&nbsp;mm Molex KK&nbsp;254 header at the bottom right</td></tr>
    <tr><td>Loop terminals</td><td>Two 4-way screw terminals, 5.00&nbsp;mm pitch</td></tr>
    <tr><td>Power</td><td>3.3&nbsp;V and 5&nbsp;V from the controller through the ribbon cable. The output stage can instead take its 5&nbsp;V from the laser supply.</td></tr>
    <tr><td>Loop input protection</td><td>Each loop input carries protection parts intended to survive an accidental connection of up to 48&nbsp;V DC (design target, not tested). The inputs are for switch contacts only: never connect a voltage to them on purpose.</td></tr>
    <tr><td>Isolation</td><td>None. Controller ground, loop ground and laser supply ground are the same net.</td></tr>
    <tr><td>Size</td><td>80 × 55.75&nbsp;mm, four M3 mounting holes, two cable-tie holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> and Smoothieware V2 firmware, using the standard <a href="/laser">laser module</a> with a chain or harness that routes a supported PWM output to adapter pin 3</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its limits and its basis is in the [electrical specifications](#electrical) appendix; the hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side, with the loop terminals at the top.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/laser-psu-adapter-board/laser-psu-adapter-diagram.png" alt="Top view of the laser PSU adapter board with twelve numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:29%;top:11%" aria-label="1: loop terminals">1<span class="xb-pop"><b>Loop terminals</b> — eight screws, a pair per loop, marked <b>S1</b> to <b>S4</b> and <b>G</b>. Each safety switch goes between an S and the G beside it. <i>Loop 1 is at the right end, loop 4 at the left.</i></span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:37.3%;top:42.6%" aria-label="2: bypass links">2<span class="xb-pop"><b>Bypass links BYP1 to BYP4</b> — solder pads, delivered open. Bridging one makes that loop permanently healthy. <i>Bridge only the loops you do not use.</i></span></a>
      <a class="xb-mk" href="#tour-3" style="left:49%;top:62%" aria-label="3: loop open lights">3<span class="xb-pop"><b>Loop open lights</b> — four red LEDs. One lights while its loop is open, which tells you which switch stopped the laser.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:59%;top:49%" aria-label="4: permit light">4<span class="xb-pop"><b>PERMIT light</b> — green, lit while all four loops are closed and firing is permitted. <i>A dark LED does not prove the laser is safe.</i></span></a>
      <a class="xb-mk" href="#tour-5" style="left:24%;top:74%" aria-label="5: loop logic">5<span class="xb-pop"><b>Loop logic</b> — three chips that clean up the four switch signals and decide PERMIT: yes only if every loop is closed.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-6" style="left:78%;top:49%" aria-label="6: output gates">6<span class="xb-pop"><b>Output gates</b> — two chips that pass the controller's PWM and fire signals only while PERMIT is yes, and convert them to 5&nbsp;V.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:67%;top:71.5%" aria-label="7: PWM polarity link">7<span class="xb-pop"><b>PWM POL</b> — solder link under this label that sets the polarity of the PWM output. Delivered active high.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:62%;top:79%" aria-label="8: TTL polarity link">8<span class="xb-pop"><b>TTL POL</b> — solder link beside this label that sets the polarity of the fire output. Delivered active low.</span></a>
      <a class="xb-mk" href="#tour-9" style="left:59.3%;top:85%" aria-label="9: 5 volt source link">9<span class="xb-pop"><b>SRC5V</b> — solder link below this label that chooses where the output stage gets its 5&nbsp;V: the controller (delivered) or the laser supply. <i>See options.</i></span></a>
      <a class="xb-mk" href="#tour-10" style="left:36%;top:88%" aria-label="10: Y IN connector">10<span class="xb-pop"><b>Y IN</b> — the ribbon-cable connector to your Smoothieboard. <i>See the pinout.</i></span></a>
      <a class="xb-mk" href="#tour-11" style="left:73%;top:88%" aria-label="11: laser supply header">11<span class="xb-pop"><b>Laser supply connectors</b> — the six-pin header and the six-way screw terminal have the same pinout. Use either connector.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-11" style="left:77%;top:12%" aria-label="12: laser supply screw terminal">12<span class="xb-pop"><b>Laser supply connectors</b> — the six-pin header and the six-way screw terminal have the same pinout. Use either connector.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Loop terminals</b> — eight screws, a pair per loop, marked <b>S1</b> to <b>S4</b> and <b>G</b>. Each safety switch goes between an S and the G beside it. <small>Loop 1 is at the right end, loop 4 at the left.</small></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Bypass links BYP1 to BYP4</b> — solder pads, delivered open. Bridging one makes that loop permanently healthy. <small>Bridge only the loops you do not use.</small></div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Loop open lights</b> — four red LEDs. One lights while its loop is open, which tells you which switch stopped the laser.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>PERMIT light</b> — green, lit while all four loops are closed and firing is permitted. <small>A dark LED does not prove the laser is safe.</small></div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Loop logic</b> — three chips that clean up the four switch signals and decide PERMIT: yes only if every loop is closed.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Output gates</b> — two chips that pass the controller's PWM and fire signals only while PERMIT is yes, and convert them to 5&nbsp;V.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>PWM POL</b> — solder link under this label that sets the polarity of the PWM output. Delivered active high.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>TTL POL</b> — solder link beside this label that sets the polarity of the fire output. Delivered active low.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>SRC5V</b> — solder link below this label that chooses where the output stage gets its 5&nbsp;V: the controller (delivered) or the laser supply. <small>See <a href="#options">options</a>.</small></div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Y IN</b> — the ribbon-cable connector to your Smoothieboard. <small>See the <a href="#pinout">pinout</a>.</small></div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Laser supply connectors</b> — the six-pin header and the six-way screw terminal have the same pinout. Use either connector.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways. The drawing omits the four M3 mounting holes. Marker 11 points to the keyed header and marker 12 to the screw terminal. The two holes along the right side are for a cable tie. Test pads and four of the LED links are on the underside.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### Y IN: control connector

PWM and TTL occupy the first two signal positions so the adapter can sit at the end of a chain with only two signals left. The chain must deliver PWM to adapter pin 3, TTL to pin 4, and the two power rails and ground to pins 1, 2 and 10. All four local protect loops still govern the outputs. Leave diagnostic pins 5–9 disconnected wherever upstream boards use those lines.

For a Prime G_C connection, use a chain or harness that brings host pin 7 (its firmware-supported PWM output) to adapter pin 3, and host pin 4 to adapter pin 4. Verify power and ground continuity and isolate unused conductors before connecting the adapter. A straight-through cable from G_C does not provide the documented PWM channel on adapter pin 3.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Y IN pin</th><th>Function</th><th>Direction</th><th>What it does</th><th>Example G_C harness connection</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Power in</td><td>Powers the loop logic</td><td>—</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Power in</td><td>Powers the output stage and the loops, as delivered</td><td>—</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">PWM</span></td><td>From controller</td><td>Power command: wider pulses request more power</td><td>Host pin 7 (<code>PWM2_2</code>)</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">TTL</span></td><td>From controller</td><td>Fire command: high while the laser should be on</td><td><code>PD12</code></td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-stat">FAULT 1</span></td><td>To controller</td><td>High while loop 1 is open</td><td>Optional host GPIO input</td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-stat">FAULT 2</span></td><td>To controller</td><td>High while loop 2 is open</td><td>Optional host GPIO input</td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-stat">PERMIT</span></td><td>To controller</td><td>High while all four loops are closed</td><td>Optional host GPIO input</td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-stat">FAULT 3</span></td><td>To controller</td><td>High while loop 3 is open</td><td>Optional host GPIO input</td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-stat">FAULT 4</span></td><td>To controller</td><td>High while loop 4 is open</td><td>Optional host GPIO input</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Power</td><td>Ground, shared with the loops and the laser supply</td><td>—</td></tr>
  </tbody>
</table></div>

<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Y IN connector pin positions">
  <svg viewBox="0 0 1000 250" role="img" aria-labelledby="xb-yin-t">
    <title id="xb-yin-t">Y IN seen from above: pin 1 at the top right. Odd pins 9, 7, 5, 3, 1 from left to right in the row towards the middle of the board; even pins 10, 8, 6, 4, 2 in the row towards the board edge.</title>
    <rect x="345" y="85" width="310" height="80" rx="6" fill="#0d0f12" stroke="#59616e" stroke-width="2"/>
    <g fill="#e0b84a" stroke="#6b5310">
      <rect x="372" y="98" width="16" height="16"/><rect x="432" y="98" width="16" height="16"/><rect x="492" y="98" width="16" height="16"/><rect x="552" y="98" width="16" height="16"/><rect x="612" y="98" width="16" height="16"/>
      <rect x="372" y="136" width="16" height="16"/><rect x="432" y="136" width="16" height="16"/><rect x="492" y="136" width="16" height="16"/><rect x="552" y="136" width="16" height="16"/><rect x="612" y="136" width="16" height="16"/>
    </g>
    <circle cx="640" cy="92" r="4" fill="#fff"/>
    <g stroke-width="2" fill="none">
      <path d="M380 98V62" stroke="#c9a6ff"/><path d="M440 98V62" stroke="#c9a6ff"/><path d="M500 98V62" stroke="#c9a6ff"/><path d="M560 98V62" stroke="#5fb3ff"/><path d="M620 98V62" stroke="#ff5d5d"/>
      <path d="M380 152V188" stroke="#8a94a3"/><path d="M440 152V188" stroke="#c9a6ff"/><path d="M500 152V188" stroke="#c9a6ff"/><path d="M560 152V188" stroke="#5fb3ff"/><path d="M620 152V188" stroke="#ff9f43"/>
    </g>
    <g font-size="12" font-weight="700" text-anchor="middle">
      <rect x="352" y="36" width="56" height="26" rx="13" fill="#c9a6ff"/><text x="380" y="53" fill="#1c0b33">FAULT 4</text>
      <rect x="412" y="36" width="56" height="26" rx="13" fill="#c9a6ff"/><text x="440" y="53" fill="#1c0b33">PERMIT</text>
      <rect x="472" y="36" width="56" height="26" rx="13" fill="#c9a6ff"/><text x="500" y="53" fill="#1c0b33">FAULT 1</text>
      <rect x="532" y="36" width="56" height="26" rx="13" fill="#5fb3ff"/><text x="560" y="53" fill="#04182b">PWM</text>
      <rect x="592" y="36" width="56" height="26" rx="13" fill="#ff5d5d"/><text x="620" y="53" fill="#1c0606">3.3 V</text>
      <rect x="352" y="188" width="56" height="26" rx="13" fill="#0d0f12" stroke="#8a94a3"/><text x="380" y="205" fill="#fff">GND</text>
      <rect x="412" y="188" width="56" height="26" rx="13" fill="#c9a6ff"/><text x="440" y="205" fill="#1c0b33">FAULT 3</text>
      <rect x="472" y="188" width="56" height="26" rx="13" fill="#c9a6ff"/><text x="500" y="205" fill="#1c0b33">FAULT 2</text>
      <rect x="532" y="188" width="56" height="26" rx="13" fill="#5fb3ff"/><text x="560" y="205" fill="#04182b">TTL</text>
      <rect x="592" y="188" width="56" height="26" rx="13" fill="#ff9f43"/><text x="620" y="205" fill="#201004">5 V</text>
    </g>
    <g font-size="12" fill="#a9b4c2" text-anchor="middle">
      <text x="380" y="28">9</text><text x="440" y="28">7</text><text x="500" y="28">5</text><text x="560" y="28">3</text><text x="620" y="28">1</text>
      <text x="380" y="232">10</text><text x="440" y="232">8</text><text x="500" y="232">6</text><text x="560" y="232">4</text><text x="620" y="232">2</text>
    </g>
    <g font-size="14" fill="#a9b4c2">
      <text x="325" y="112" text-anchor="end">Row towards the middle of the board</text>
      <text x="325" y="150" text-anchor="end">Row towards the board edge</text>
      <text x="675" y="98">Pin 1, top right,</text>
      <text x="675" y="118">marked by a dot</text>
      <text x="675" y="150">Y IN, seen from above</text>
    </g>
  </svg>
  </div>
  <figcaption>Pin positions of Y IN with the board held as in the tour above. The drawing is enlarged; the real pins are 1.27&nbsp;mm apart.</figcaption>
</figure>
{:/nomarkdown}

### Loop terminals

Each loop has two screws: **S** (the switch input) and the **G** beside it (ground). Wire a normally closed switch between the two.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Screws, left to right</th><th>G</th><th>S4</th><th>G</th><th>S3</th><th>G</th><th>S2</th><th>G</th><th>S1</th></tr></thead>
  <tbody>
    <tr><td>Belongs to</td><td colspan="2">Loop 4</td><td colspan="2">Loop 3</td><td colspan="2">Loop 2</td><td colspan="2">Loop 1</td></tr>
    <tr><td>Terminal block</td><td colspan="4">Left block</td><td colspan="4">Middle block</td></tr>
  </tbody>
</table></div>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Between S and G</th><th>The board sees</th><th>Red LED</th><th>Fault signal</th></tr></thead>
  <tbody>
    <tr><td>Switch closed (connected)</td><td>Loop healthy</td><td>Off</td><td>Low</td></tr>
    <tr><td>Switch open, wire broken or unplugged</td><td>Loop open</td><td>On</td><td>High</td></tr>
    <tr><td>BYP link bridged</td><td>Loop always healthy, whatever is connected</td><td>Off</td><td>Low</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

All four G screws are the same ground as the controller. Use switches whose contacts are not connected to anything else.

### Laser supply connectors

Use either the 5.00 mm screw terminal on the top right or the 2.54 mm keyed header on the bottom right. Both follow the example supply’s order from left to right: **H, L, P, G, IN, 5V**. H is unconnected on the adapter. Leave the supply’s H terminal empty.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Position, left to right</th><th>Pin number</th><th>Marking</th><th>Function</th><th>Typical terminal on a CO2 laser supply</th></tr></thead>
  <tbody>
    <tr><td>1st</td><td>6</td><td><span class="xb-pill xb-p-gnd">H / NC</span></td><td>Unconnected on the adapter. Leave the active-high fire terminal empty.</td><td>H / TH</td></tr>
    <tr><td>2nd</td><td>5</td><td><span class="xb-pill xb-p-sig">L / TTL</span></td><td>Active-low fire command as delivered.</td><td>L / TL</td></tr>
    <tr><td>3rd</td><td>4</td><td><span class="xb-pill xb-p-c">P / WP</span></td><td>Enable line. Connected to ground while firing is permitted.</td><td>P / WP</td></tr>
    <tr><td>4th</td><td>3</td><td><span class="xb-pill xb-p-gnd">G</span></td><td>Ground.</td><td>G</td></tr>
    <tr><td>5th</td><td>2</td><td><span class="xb-pill xb-p-sig">IN / PWM</span></td><td>Power level. 0 to 5 V pulses, held at 0 V while firing is blocked.</td><td>IN</td></tr>
    <tr><td>6th</td><td>1</td><td><span class="xb-pill xb-p-5v">5V</span></td><td>Optional 5 V input from the supply. Leave empty with the default source link.</td><td>5V</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Terminal names differ between laser supplies. The last column shows the labels most CO2 supplies use; check the manual of yours before you connect anything. Pin 1 is at the right-hand end of both connectors when viewed as in the top drawing.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Loop terminals and laser supply connector">
  <svg viewBox="0 0 1000 300" role="img" aria-labelledby="xb-lpa-terms-t">
    <title id="xb-lpa-terms-t">Left: the two loop terminal blocks, screws from left to right G, S4, G, S3 and G, S2, G, S1. Right: the matching six-position laser supply connectors, from left to right H (unconnected), L, P, G, IN, 5V.</title>
    <text x="250" y="34" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Loop terminals, top edge</text>
    <text x="741" y="34" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">PSU connectors, same pin order</text>
    <path d="M510 16V200" stroke="#38424f" stroke-width="2" stroke-dasharray="6 6"/>
    <rect x="26" y="62" width="216" height="56" rx="5" fill="#35c26b" stroke="#145a30"/><circle cx="56" cy="90" r="11" fill="#0d0f12"/><path d="M56 118V140" stroke="#8a94a3" stroke-width="2"/><g font-size="13" font-weight="700"><rect x="34.0" y="140" width="44" height="26" rx="13" fill="#0d0f12" stroke="#8a94a3"/><text x="56" y="158" fill="#fff" text-anchor="middle">G</text></g><circle cx="108" cy="90" r="11" fill="#0d0f12"/><path d="M108 118V140" stroke="#b8a1ff" stroke-width="2"/><g font-size="13" font-weight="700"><rect x="86.0" y="140" width="44" height="26" rx="13" fill="#b8a1ff"/><text x="108" y="158" fill="#140a33" text-anchor="middle">S4</text></g><circle cx="160" cy="90" r="11" fill="#0d0f12"/><path d="M160 118V140" stroke="#8a94a3" stroke-width="2"/><g font-size="13" font-weight="700"><rect x="138.0" y="140" width="44" height="26" rx="13" fill="#0d0f12" stroke="#8a94a3"/><text x="160" y="158" fill="#fff" text-anchor="middle">G</text></g><circle cx="212" cy="90" r="11" fill="#0d0f12"/><path d="M212 118V140" stroke="#b8a1ff" stroke-width="2"/><g font-size="13" font-weight="700"><rect x="190.0" y="140" width="44" height="26" rx="13" fill="#b8a1ff"/><text x="212" y="158" fill="#140a33" text-anchor="middle">S3</text></g><rect x="262" y="62" width="216" height="56" rx="5" fill="#35c26b" stroke="#145a30"/><circle cx="292" cy="90" r="11" fill="#0d0f12"/><path d="M292 118V140" stroke="#8a94a3" stroke-width="2"/><g font-size="13" font-weight="700"><rect x="270.0" y="140" width="44" height="26" rx="13" fill="#0d0f12" stroke="#8a94a3"/><text x="292" y="158" fill="#fff" text-anchor="middle">G</text></g><circle cx="344" cy="90" r="11" fill="#0d0f12"/><path d="M344 118V140" stroke="#b8a1ff" stroke-width="2"/><g font-size="13" font-weight="700"><rect x="322.0" y="140" width="44" height="26" rx="13" fill="#b8a1ff"/><text x="344" y="158" fill="#140a33" text-anchor="middle">S2</text></g><circle cx="396" cy="90" r="11" fill="#0d0f12"/><path d="M396 118V140" stroke="#8a94a3" stroke-width="2"/><g font-size="13" font-weight="700"><rect x="374.0" y="140" width="44" height="26" rx="13" fill="#0d0f12" stroke="#8a94a3"/><text x="396" y="158" fill="#fff" text-anchor="middle">G</text></g><circle cx="448" cy="90" r="11" fill="#0d0f12"/><path d="M448 118V140" stroke="#b8a1ff" stroke-width="2"/><g font-size="13" font-weight="700"><rect x="426.0" y="140" width="44" height="26" rx="13" fill="#b8a1ff"/><text x="448" y="158" fill="#140a33" text-anchor="middle">S1</text></g>
    <rect x="548" y="62" width="386" height="56" rx="5" fill="#efe6cf" stroke="#b8a878"/>
    <rect x="579" y="83" width="14" height="14" fill="#8a94a3"/><path d="M586 118V140" stroke="#8a94a3" stroke-width="2"/><g font-size="13" font-weight="700"><rect x="559.0" y="140" width="54" height="26" rx="13" fill="#0d0f12" stroke="#8a94a3"/><text x="586" y="158" fill="#fff" text-anchor="middle">H NC</text></g><rect x="641" y="83" width="14" height="14" fill="#8a94a3"/><path d="M648 118V140" stroke="#ff9f43" stroke-width="2"/><g font-size="13" font-weight="700"><rect x="621.0" y="140" width="54" height="26" rx="13" fill="#ff9f43"/><text x="648" y="158" fill="#201004" text-anchor="middle">L</text></g><rect x="703" y="83" width="14" height="14" fill="#8a94a3"/><path d="M710 118V140" stroke="#5fb3ff" stroke-width="2"/><g font-size="13" font-weight="700"><rect x="683.0" y="140" width="54" height="26" rx="13" fill="#5fb3ff"/><text x="710" y="158" fill="#04182b" text-anchor="middle">P</text></g><rect x="765" y="83" width="14" height="14" fill="#8a94a3"/><path d="M772 118V140" stroke="#5fb3ff" stroke-width="2"/><g font-size="13" font-weight="700"><rect x="745.0" y="140" width="54" height="26" rx="13" fill="#5fb3ff"/><text x="772" y="158" fill="#04182b" text-anchor="middle">G</text></g><rect x="827" y="83" width="14" height="14" fill="#8a94a3"/><path d="M834 118V140" stroke="#59616e" stroke-width="2"/><g font-size="13" font-weight="700"><rect x="807.0" y="140" width="54" height="26" rx="13" fill="#212936" stroke="#59616e"/><text x="834" y="158" fill="#a9b4c2" text-anchor="middle">IN</text></g><rect x="889" y="83" width="14" height="14" fill="#8a94a3"/><path d="M896 118V140" stroke="#8a94a3" stroke-width="2"/><g font-size="13" font-weight="700"><rect x="869.0" y="140" width="54" height="26" rx="13" fill="#0d0f12" stroke="#8a94a3"/><text x="896" y="158" fill="#fff" text-anchor="middle">5V</text></g>
    <g font-size="12" fill="#a9b4c2" text-anchor="middle"><text x="78" y="194">loop 4</text><text x="182" y="194">loop 3</text><text x="314" y="194">loop 2</text><text x="418" y="194">loop 1</text><text x="741" y="194">2.54 mm keyed header · bottom right</text></g>
      <rect x="548" y="210" width="386" height="50" rx="5" fill="#2f9e4f" stroke="#124d24"/>
    <circle cx="586" cy="235" r="10" fill="#cfd6df" stroke="#48514c"/><path d="M580 235h12" stroke="#48514c" stroke-width="2"/>
    <circle cx="648" cy="235" r="10" fill="#cfd6df" stroke="#48514c"/><path d="M642 235h12" stroke="#48514c" stroke-width="2"/>
    <circle cx="710" cy="235" r="10" fill="#cfd6df" stroke="#48514c"/><path d="M704 235h12" stroke="#48514c" stroke-width="2"/>
    <circle cx="772" cy="235" r="10" fill="#cfd6df" stroke="#48514c"/><path d="M766 235h12" stroke="#48514c" stroke-width="2"/>
    <circle cx="834" cy="235" r="10" fill="#cfd6df" stroke="#48514c"/><path d="M828 235h12" stroke="#48514c" stroke-width="2"/>
    <circle cx="896" cy="235" r="10" fill="#cfd6df" stroke="#48514c"/><path d="M890 235h12" stroke="#48514c" stroke-width="2"/>
    <text x="741" y="285" font-size="12" fill="#a9b4c2" text-anchor="middle">5.00 mm screw terminal · top right</text>
  </svg>
  </div>
  <figcaption>The screws and connector positions from left to right, with the board held as in the tour above. Each loop is one G screw and the S screw to its right. The two PSU connectors share the coloured pin labels. The drawing is enlarged for readability.</figcaption>
</figure>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Smoothieboard V2 Prime</b><span>Running Smoothieware V2 with an available PWM output and a GPIO for TTL.</span></div>
  <div class="xb-card"><b>10-way ribbon cable</b><span>1.27&nbsp;mm pitch, 2×5 connector at the adapter. Use a chain or harness with the routing in the pinout section.</span></div>
  <div class="xb-card"><b>Normally closed switches</b><span>One per loop you use: lid, water flow, and so on. Voltage-free contacts that open when something is wrong.</span></div>
  <div class="xb-card"><b>A 6-way cable for the laser supply</b><span>Use the 5.00&nbsp;mm screw terminal or a 2.54&nbsp;mm Molex KK&nbsp;254 housing at the board end.</span></div>
  <div class="xb-card"><b>The manual of your laser supply</b><span>For the names and levels of its control terminals.</span></div>
  <div class="xb-card"><b>A multimeter</b><span>To check the outputs before the laser supply is connected.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

These steps take you from an unconnected board to outputs you have checked with a multimeter, with the laser supply not connected at all. Connect the supply only after step 6 works.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring overview">
  <svg viewBox="0 0 1000 470" role="img" aria-labelledby="xb-lpa-hookup-t">
    <title id="xb-lpa-hookup-t">Wiring overview: a remapped harness or chain from the host to Y IN; a lid switch on loop 1 and a water-flow switch on loop 2, each between an S screw and the G screw beside it; loops 3 and 4 bypassed; four wires from the laser supply connector to the terminals G, IN, L and P of the supply's six-way signal block.</title>
    <!-- adapter board -->
    <rect x="330" y="150" width="380" height="250" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/>
    <text x="440" y="278" text-anchor="middle" font-size="17" font-weight="700" fill="#e6ebf2">Adapter board</text>
    <rect x="360" y="156" width="150" height="28" rx="3" fill="#2f9e4f" stroke="#124d24"/>
    <rect x="530" y="156" width="150" height="28" rx="3" fill="#2f9e4f" stroke="#124d24"/>
    <g fill="#cfd6df" stroke="#5b6570">
      <circle cx="379" cy="170" r="6"/><circle cx="416" cy="170" r="6"/><circle cx="454" cy="170" r="6"/><circle cx="491" cy="170" r="6"/>
      <circle cx="549" cy="170" r="6"/><circle cx="586" cy="170" r="6"/><circle cx="624" cy="170" r="6"/><circle cx="661" cy="170" r="6"/>
    </g>
    <g font-size="11" font-weight="700" fill="#e6ebf2" text-anchor="middle">
      <text x="379" y="200">G</text><text x="416" y="200">S4</text><text x="454" y="200">G</text><text x="491" y="200">S3</text>
      <text x="549" y="200">G</text><text x="586" y="200">S2</text><text x="624" y="200">G</text><text x="661" y="200">S1</text>
    </g>
    <text x="435" y="222" text-anchor="middle" font-size="12" fill="#ffcc33">BYP3 and BYP4 bridged</text>
    <!-- switches -->
    <g fill="none" stroke="#5fb3ff" stroke-width="4">
      <path d="M661 164V70H690"/><path d="M730 70H760V40H624V164" />
      <path d="M460 100H430V125H549V164" stroke="#57d18c"/>
    </g>
    <path d="M586 164V100H500" fill="none" stroke="#57d18c" stroke-width="4"/>
    <path d="M690 70L728 58" stroke="#5fb3ff" stroke-width="4" stroke-linecap="round"/><circle cx="690" cy="70" r="5" fill="#5fb3ff"/><circle cx="730" cy="70" r="5" fill="#5fb3ff"/>
    <path d="M500 100L462 88" stroke="#57d18c" stroke-width="4" stroke-linecap="round"/><circle cx="500" cy="100" r="5" fill="#57d18c"/><circle cx="460" cy="100" r="5" fill="#57d18c"/>
    <text x="772" y="62" font-size="13" font-weight="700" fill="#9cc3ff">Lid switch (loop 1)</text>
    <text x="772" y="80" font-size="12" fill="#a9b4c2">closed while the lid is shut</text>
    <text x="418" y="84" text-anchor="end" font-size="13" font-weight="700" fill="#8fe0b0">Water-flow switch (loop 2)</text>
    <text x="418" y="102" text-anchor="end" font-size="12" fill="#a9b4c2">closed while water flows</text>
    <!-- Y IN -->
    <rect x="380" y="352" width="58" height="30" rx="3" fill="#0d0f12" stroke="#8a94a3"/>
    <text x="409" y="342" text-anchor="middle" font-size="11" fill="#e6ebf2">Y IN</text>
    <!-- Smoothieboard -->
    <rect x="30" y="290" width="190" height="130" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/>
    <text x="112" y="346" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Smoothieboard</text>
    <text x="112" y="366" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">V2 Prime</text>
    <rect x="186" y="336" width="26" height="46" rx="3" fill="#0d0f12" stroke="#8a94a3"/>
    <text x="199" y="326" text-anchor="middle" font-size="12" font-weight="700" fill="#ffcc33">HOST</text>
    <path d="M212 360C300 360 300 367 380 367" fill="none" stroke="#8a94a3" stroke-width="16"/>
    <path d="M212 353C300 353 300 360 380 360" fill="none" stroke="#ff5d5d" stroke-width="2"/>
    <text x="270" y="444" text-anchor="middle" font-size="12" fill="#a9b4c2">Remapped harness or chain</text>
    <text x="270" y="460" text-anchor="middle" font-size="12" fill="#a9b4c2">PWM to pin 3, TTL to pin 4</text>
    <!-- PSU connector -->
    <rect x="518" y="352" width="184" height="30" rx="3" fill="#efe6cf" stroke="#b8a878"/>
    <g fill="#8a94a3"><rect x="530" y="362" width="10" height="10"/><rect x="560" y="362" width="10" height="10"/><rect x="590" y="362" width="10" height="10"/><rect x="620" y="362" width="10" height="10"/><rect x="650" y="362" width="10" height="10"/><rect x="680" y="362" width="10" height="10"/></g>
    <g font-size="10" font-weight="700" fill="#e6ebf2" text-anchor="middle"><text x="535" y="396">H NC</text><text x="565" y="396">L</text><text x="595" y="396">P</text><text x="625" y="396">G</text><text x="655" y="396">IN</text><text x="685" y="396">5V</text></g>
    <!-- PSU: drawing of a typical supply's signal block (smoothie-diagrams, data/external-equipment/co2-laser-power-supply-panel) -->
    <text x="890" y="222" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">CO2 laser supply</text>
    <text x="890" y="240" text-anchor="middle" font-size="11" fill="#a9b4c2">signal terminals of a typical unit</text>
    <svg x="800" y="250" width="180" height="110.8" viewBox="84 8 52 32"><image href="/images/extensions/equipment/co2-laser-power-supply-panel.png" width="170" height="46"/></svg>
    <g fill="none" stroke-width="4" stroke-linejoin="round">
      <path d="M655 362V306H745V425H928.7V314.7" stroke="#5fb3ff"/>
      <path d="M565 362V318H775V380H849.5V314.7" stroke="#c9a6ff"/>
      <path d="M595 362V330H765V395H875.9V314.7" stroke="#e6ebf2"/>
      <path d="M625 367H755V410H902.3V314.7" stroke="#aeb7c2" stroke-width="7"/><path d="M625 367H755V410H902.3V314.7" stroke="#0d0f12" stroke-width="4.5"/>
    </g>
    <g font-size="10.5" fill="#a9b4c2"><text x="775" y="450"><tspan fill="#5fb3ff" font-weight="700">PWM → IN</tspan> power</text><text x="775" y="466"><tspan fill="#c9a6ff" font-weight="700">TTL → L</tspan> fire</text><text x="893" y="450"><tspan fill="#e6ebf2" font-weight="700">WP → P</tspan> enable</text><text x="893" y="466"><tspan fill="#aeb7c2" font-weight="700">GND → G</tspan> ground</text></g>
  </svg>
  </div>
  <figcaption>A typical installation: two switches on loops 1 and 2, loops 3 and 4 bypassed, and four wires to the laser supply. The supply's terminal names are the common ones; yours may differ.</figcaption>
</figure>

<ol class="xb-steps">
  <li class="xb-step">
    <h3>Switch everything off</h3>
    <p>Power down the Smoothieboard. Unplug the laser supply from the mains and leave it unplugged until the last section of this page.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the ribbon cable</h3>
    <p>Connect the verified chain or harness to <b>Y IN</b>. Check the rail and ground positions and confirm that the host commands reach adapter pins 3 and 4 as shown in the pinout.</p>
  </li>
  <li class="xb-step">
    <h3>Close all four loops</h3>
    <p>For now, put a short piece of wire between each <b>S</b> screw and the <b>G</b> beside it: four wire links in total. They stand in for your switches during the test.</p>
  </li>
  <li class="xb-step">
    <h3>Power the Smoothieboard and watch the LEDs</h3>
    <p class="xb-expect"><b>You should see:</b> all four red LEDs dark and the green PERMIT LED lit.</p>
    <p>Now pull one wire link out of its S screw.</p>
    <p class="xb-expect"><b>You should see:</b> the red LED of that loop lights and PERMIT goes dark at once. Put the link back: the red LED goes out and PERMIT returns a moment later.</p>
    <p>Repeat for the other three loops. If a loop does not behave like this, go to <a href="#troubleshooting">troubleshooting</a>.</p>
  </li>
  <li class="xb-step">
    <h3>Add the laser to your configuration</h3>
    <p>Copy the <a href="#configuration">configuration</a> below into the configuration file on the Smoothieboard's SD card, then restart the board. Leave the optional kill-button block out until step 6 has passed, so that the test shows the board blocking the outputs by itself.</p>
  </li>
  <li class="xb-step">
    <h3>Check the outputs with a multimeter</h3>
    <p>Set the multimeter to DC volts, black probe on a <b>GND</b> pin of the laser supply connector. With nothing commanded, <b>TTL</b> reads about 5&nbsp;V and <b>PWM</b> about 0&nbsp;V. Then send from the console:</p>
    <pre><code>fire 20</code></pre>
    <p class="xb-expect"><b>You should measure:</b> TTL drops to about 0&nbsp;V and PWM reads about 1&nbsp;V, the average of pulses that are on 20&nbsp;% of the time. Pull out one wire link: TTL returns to 5&nbsp;V and PWM to 0&nbsp;V even though the command is still active.</p>
    <p>Send <code>fire off</code> when you are done, and put the link back.</p>
  </li>
  <li class="xb-step">
    <h3>Fit your switches, then connect the laser supply</h3>
    <p>Replace the wire links with your real switches, one loop at a time, and repeat step 4 by operating each switch. Bridge the <b>BYP</b> link of every loop you leave unused. Then follow <a href="#psu">Wiring the laser supply</a>.</p>
    <p class="xb-warn"><b>Laser hazard.</b> From the moment the supply is connected and plugged in, a command can fire the laser. Close the enclosure and wear your eye protection.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

The board's two command inputs belong to Smoothieware's [laser module](/laser); its status outputs can be read by any module that watches an input pin. Three set-ups are real for this board, fewer than on other boards because only the laser module can produce its command signals:

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Control the laser's power and firing from G-code</td><td><a href="/laser">Laser</a></td><td><a href="#config-laser">1. Laser</a></td></tr>
    <tr><td>Halt the machine when a protection loop opens</td><td><a href="/killbutton">Kill button</a></td><td><a href="#config-halt">2. Halt</a></td></tr>
    <tr><td>Pause the job while a loop is open, and resume after</td><td><a href="/switch">Switch</a>, with an input pin</td><td><a href="#config-pause">3. Pause</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Use example 2 or example 3, not both: each claims the pin that reads PERMIT.

### 1. Laser power and firing (Laser module) {#config-laser}

The example uses the G_C harness mapping above. For a different chain, use the host PWM channel and GPIO that actually reach adapter pins 3 and 4. If the file already has a `[pwm2]` or `[laser]` section, change the existing lines instead of adding a second section.

```ini
[pwm2]
frequency = 5000          # PWM frequency of header G_C, in Hz

[laser]
enable        = true
pwm_pin       = PWM2_2    # G_C pin 7 through harness to adapter pin 3
ttl_pin       = PD12      # G_C pin 4  ->  board TTL
maximum_power = 1.0       # highest duty cycle, 1.0 = 100 %
minimum_power = 0.0       # duty cycle at "zero" power
default_power = 0.8       # used when a move gives no S value
```

### 2. Halt the job when a loop opens (Kill button module) {#config-halt}

The board blocks the laser by itself, but the machine would keep moving through a job that is no longer cutting. To make Smoothieware halt as well, let it watch the PERMIT signal on adapter pin 7 with a free GPIO input. This example requires the extra wire from adapter pin 7 to host G_C pin 3:

```ini
[kill button]
enable        = true
pin           = PD14v     # Example: G_C pin 3 wired to adapter pin 7, low = not permitted
toggle_enable = true      # halted for as long as PERMIT is low
unkill_enable = true      # leaves the halted state when PERMIT returns
```

Smoothieware has one kill-button input. Use this only if you are not already using it for a real button.

### 3. Pause the job while a loop is open (Switch module with an input pin) {#config-pause}

A gentler alternative to example 2, with the same extra wire from adapter pin 7 to host G_C pin 3. A Switch entry watches PERMIT and suspends the job instead of halting the machine:

```ini
[switch]
permit.enable             = true
permit.input_pin          = PD14!v     # G_C pin 3 wired to adapter pin 7; active while PERMIT is low
permit.input_pin_behavior = momentary  # follow the signal
permit.output_on_command  = M600       # a loop opened: suspend the job
permit.output_off_command = M601       # all loops closed again: resume
```

The pin is checked fifty times a second. The board blocks the laser by itself and at once; this entry only stops the motion that would otherwise continue without cutting. Resuming a cut in the middle of a line can leave a mark: check the workpiece before you rely on it.

### Commands

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Command</th><th>What it does</th></tr></thead>
  <tbody>
    <tr><td><code>G1 X10 S0.5</code></td><td>Cutting move at 50&nbsp;% power. The laser is on only during <code>G1</code>, <code>G2</code> and <code>G3</code> moves.</td></tr>
    <tr><td><code>fire 20</code></td><td>Console command: fire at 20&nbsp;% until <code>fire off</code>. For testing.</td></tr>
    <tr><td><code>fire 20 500</code></td><td>Console command: fire at 20&nbsp;% for 500&nbsp;ms.</td></tr>
    <tr><td><code>fire off</code></td><td>Stop a test fire.</td></tr>
    <tr><td><code>fire status</code></td><td>Report whether a test fire is active.</td></tr>
    <tr><td><code>M221</code></td><td>Report the laser power scale and PWM frequency.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Good to know

- **5000 Hz is a starting value we chose**, not a requirement. Use the PWM frequency your laser supply's manual asks for. The sample configuration files set `[pwm2]` to 50 Hz for hobby servos, which is far too slow for a laser.
- **The frequency applies to the whole header.** All four PWM-capable pins of G_C share it. Check the requirements of any other device sharing that timer.
- **Do not invert the signals in the configuration.** Leave `inverted_pwm` at its default. If your supply needs the opposite polarity, change the [polarity links](#options) on the board, so that the blocked state stays correct too.
- **Check the fire signal with a multimeter before you connect the supply.** Our reading of the firmware source leaves it uncertain whether the laser module drives `ttl_pin` while firing; it has not been checked on hardware. [Step 6 of Get started](#get-started) measures exactly this. If TTL does not change on `fire 20`, do not connect the supply.
- **The four fault signals are optional.** Smoothieware does not need them, and the red LEDs show the same information. They are available on adapter pins 5, 6, 8 and 9 if you route them to free host inputs.
- **With the kill-button option, the machine starts halted if a loop is open at power-up.** Close the loop and it leaves the halted state by itself.

## Wiring the laser supply {#psu}

<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>Unplug the laser supply from the mains and wait before touching its terminals.</strong> Its high-voltage output can hold a charge after switch-off. Connect only the low-voltage control terminals described here; never open the supply or touch the tube connections.
</sl-alert>

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="The four wires between the board and the laser supply">
  <svg viewBox="0 0 900 525" role="img" aria-labelledby="xb-lpa-psu-t" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
    <title id="xb-lpa-psu-t">The connector panel of a typical CO2 laser supply above the top edge of the adapter board. Four wires: board PWM to supply IN, board TTL to supply L, board WP to supply P, board G to supply G. Supply terminals H and 5V and the board's 5V screw stay empty.</title>
    <text x="25" y="20" font-size="14" font-weight="700" fill="#e6ebf2">CO2 laser supply, connector panel</text><text x="345" y="20" font-size="13" fill="#a9b4c2">a typical unit, not a specific model</text>
    <image href="/images/extensions/equipment/co2-laser-power-supply-panel.png" x="25" y="30" width="850" height="230"/>
    <svg x="88.85" y="380" width="626.3" height="115" viewBox="-0.95 0.1683 82 15.057"><image href="/images/extensions/laser-psu-adapter-board/laser-psu-adapter-diagram.png" x="-0.95" y="0.1683" width="82" height="57.75"/></svg>
    <g fill="none" stroke-linejoin="round">
      <path d="M516.5 392V163.5" stroke="#c9a6ff" stroke-width="4"/>
      <path d="M554.7 392V163.5" stroke="#e6ebf2" stroke-width="4"/>
      <path d="M592.8 392V163.5" stroke="#aeb7c2" stroke-width="7"/><path d="M592.8 392V163.5" stroke="#0d0f12" stroke-width="4.5"/>
      <path d="M630.9 392V163.5" stroke="#5fb3ff" stroke-width="4"/>
    </g>
    <g font-size="12" fill="#a9b4c2">
      <text x="466" y="337" text-anchor="end">H: leave empty</text>
      <text x="686" y="337">5V: leave empty as delivered</text>
    </g>
    <text x="25" y="514" font-size="14" font-weight="700" fill="#e6ebf2">Adapter board, top edge</text><text x="250" y="514" font-size="13" fill="#a9b4c2">PSU SCREW terminal; the keyed header carries the same six signals</text>
  </svg>
  </div>
  <figcaption>The supply is a drawing of a typical unit, not made to one maker's dimensions; the board is drawn from its design files, with screws 5&nbsp;mm apart. Yours can have the terminals in another order or under other names, so follow the printing on your supply and its manual, not the positions in this drawing. Never connect anything to the mains block on the left of the panel from this board.</figcaption>
</figure>
{:/nomarkdown}

1. **Find the control terminals in your supply's manual.** Most CO2 supplies have a six-way block printed H, L, P, G, IN, 5V: H (fire when high, also printed TH), L (fire when low, TL), P (enable when connected to ground, WP), G (ground), IN (power level) and 5V.
2. **Choose one PSU connector and connect four wires**, as in the [wiring overview](#get-started): board **GND** to G, **PWM** to IN, **TTL** to L, **WP** to P, as shown above. The four wires run in the same order on both ends when your supply matches the example panel. Leave the board's 5V pin unconnected unless you [power the output stage from the supply](#options).
3. **Move the water-flow switch to the board.** Many machines have their flow switch wired straight between the supply's P and G terminals. Remove that connection and wire the switch to one of the board's loops instead. The board's WP output then takes its place and stands for all four loops at once.
4. **Leave H unconnected**, and remove any link the machine's previous controller had on L.
5. **Keep the cable short** and away from the high-voltage lead to the tube. Two holes along the board's right side take a cable tie for strain relief.
6. **Test at low power first.** With the enclosure closed and eye protection on, send `fire 10 200` and check that the tube fires briefly. Then open each switch in turn and check that the same command no longer fires.

What each output does, with the links as delivered:

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Situation</th><th>PERMIT LED</th><th>WP</th><th>TTL</th><th>PWM</th></tr></thead>
  <tbody>
    <tr><td>All loops closed, laser idle</td><td>On</td><td>Connected to ground</td><td>5&nbsp;V</td><td>0&nbsp;V</td></tr>
    <tr><td>All loops closed, laser commanded on</td><td>On</td><td>Connected to ground</td><td>0&nbsp;V</td><td>Pulses, 0 to 5&nbsp;V</td></tr>
    <tr><td>Any loop open, whatever is commanded</td><td>Off</td><td>Disconnected</td><td>5&nbsp;V</td><td>0&nbsp;V</td></tr>
    <tr><td>Controller switched off or ribbon cable unplugged</td><td>Off</td><td>Disconnected</td><td>Unpowered: level not defined</td><td>Unpowered: level not defined</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### What the LEDs tell you {#leds}

One column per light, in the order they sit on the board:

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-red"></span>LOOP4 OPEN</th><th><span class="xb-led xb-led-red"></span>LOOP3 OPEN</th><th><span class="xb-led xb-led-red"></span>LOOP2 OPEN</th><th><span class="xb-led xb-led-red"></span>LOOP1 OPEN</th><th><span class="xb-led xb-led-green"></span>PERMIT</th></tr></thead>
  <tbody>
    <tr><td>Where</td><td>Row of four in the middle of the board</td><td>Row of four in the middle of the board</td><td>Row of four in the middle of the board</td><td>Row of four in the middle of the board</td><td>Right of the row, printed PERMIT</td></tr>
    <tr><td>Lit means</td><td>Loop 4 is open: its switch is open, a wire is loose or broken.</td><td>Loop 3 is open: its switch is open, a wire is loose or broken.</td><td>Loop 2 is open: its switch is open, a wire is loose or broken.</td><td>Loop 1 is open: its switch is open, a wire is loose or broken.</td><td>All four loops are closed and firing is permitted.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

A red light tells you which switch stopped the laser. All lights dark means the board has no power, not that the laser is safe.

Three things this board does not do, and what to do about them:

- **It is not a certified safety device.** It has one signal path per loop, no self-checking and no approval. Keep an emergency stop that cuts the laser supply's mains, and a key switch.
- **It does not hold TTL at 5 V when the controller is off.** In the last row above, the output chips have no power, and an unpowered output can pull the supply's L terminal towards 0 V, which means "fire" as delivered. In that situation only the WP line holds the laser off. To keep TTL at 5 V in that situation too, power the output stage from the laser supply: see [options](#options).
- **It does not detect a switch that is stuck closed or bypassed.** Test every switch by operating it, when you install it and regularly afterwards.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 330" role="img" aria-labelledby="xb-lpa-how-t">
    <title id="xb-lpa-how-t">Four loop inputs are filtered and combined into one PERMIT signal. PERMIT gates the PWM and TTL commands from the controller and switches the WP output. PERMIT and the four fault signals also go back to the controller.</title>
    <g fill="#212936" stroke="#59616e" stroke-width="1.5">
      <rect x="20" y="30" width="150" height="150" rx="8"/>
      <rect x="220" y="30" width="150" height="150" rx="8"/>
      <rect x="420" y="60" width="150" height="90" rx="8" stroke="#ffcc33"/>
      <rect x="690" y="30" width="130" height="56" rx="8"/>
      <rect x="690" y="110" width="130" height="56" rx="8"/>
      <rect x="690" y="190" width="130" height="56" rx="8"/>
      <rect x="20" y="230" width="150" height="76" rx="8"/>
    </g>
    <g font-size="13" font-weight="700" fill="#e6ebf2" text-anchor="middle">
      <text x="95" y="56">4 loop inputs</text>
      <text x="295" y="56">Filter</text>
      <text x="495" y="98">All four closed?</text><text x="495" y="122" fill="#ffcc33">PERMIT</text>
      <text x="755" y="54">PWM gate</text><text x="755" y="134">TTL gate</text><text x="755" y="214">WP switch</text>
      <text x="95" y="256">Controller</text>
    </g>
    <g font-size="12" fill="#a9b4c2" text-anchor="middle">
      <text x="95" y="84">S1 · S2 · S3 · S4</text><text x="95" y="108">switch closed</text><text x="95" y="124">= healthy</text><text x="95" y="156">protected inputs</text>
      <text x="295" y="84">open: at once</text><text x="295" y="108">closed again:</text><text x="295" y="124">after ≈ 0.2 s</text><text x="295" y="156">red LED per loop</text>
      <text x="495" y="140">green LED</text>
      <text x="755" y="72">pass only if PERMIT</text><text x="755" y="152">pass only if PERMIT</text><text x="755" y="232">on only if PERMIT</text>
      <text x="95" y="278">PWM and TTL</text><text x="95" y="294">commands</text>
    </g>
    <g stroke="#e6ebf2" stroke-width="2.5" fill="none">
      <path d="M170 105H212"/><path d="M370 105H412"/>
      <path d="M570 105H630V58H682"/><path d="M630 105V218H682"/><path d="M630 138H682"/>
      <path d="M820 58H900"/><path d="M820 138H900"/><path d="M820 218H900"/>
    </g>
    <g fill="#e6ebf2"><path d="M220 105l-9-5v10z"/><path d="M420 105l-9-5v10z"/><path d="M690 58l-9-5v10z"/><path d="M690 138l-9-5v10z"/><path d="M690 218l-9-5v10z"/><path d="M908 58l-9-5v10z"/><path d="M908 138l-9-5v10z"/><path d="M908 218l-9-5v10z"/></g>
    <g stroke="#5fb3ff" stroke-width="2.5" fill="none">
      <path d="M170 256H655V74H682"/><path d="M170 282H668V154H682"/>
    </g>
    <g fill="#5fb3ff"><path d="M690 74l-9-5v10z"/><path d="M690 154l-9-5v10z"/></g>
    <g stroke="#c9a6ff" stroke-width="2.5" fill="none" stroke-dasharray="5 5">
      <path d="M495 150V206H295V180"/><path d="M295 206H200V240H178"/>
    </g>
    <path d="M170 240l9-5v10z" fill="#c9a6ff"/>
    <g font-size="13" font-weight="700"><text x="916" y="63" fill="#5fb3ff">PWM</text><text x="916" y="143" fill="#5fb3ff">TTL</text><text x="916" y="223" fill="#e6ebf2">WP</text></g>
    <text x="916" y="250" font-size="12" fill="#a9b4c2">to the laser</text><text x="916" y="266" font-size="12" fill="#a9b4c2">supply</text>
    <text x="385" y="224" font-size="12" fill="#c9a6ff" text-anchor="middle">status: PERMIT and 4 fault signals</text>
  </svg>
  </div>
  <figcaption>Solid white: the path that decides whether the laser may fire. Blue: commands from the controller. Dashed violet: status reported back.</figcaption>
</figure>
{:/nomarkdown}

**Loop inputs.** The board feeds about 1 mA into each S screw. A closed switch carries that current to ground and the input reads low: healthy. An open switch, a broken wire or an unplugged connector all leave the input high: open. A loop therefore cannot be made healthy by a wire falling off.

**Filter.** When a loop opens, its fault signal rises immediately. When it closes, the signal waits about 0.2 s before clearing. A switch that chatters keeps the laser off for as long as it chatters. The same delay holds the laser off for a moment each time the board powers up.

**PERMIT.** One gate combines the four fault signals: PERMIT is yes only when none of them is active. It lights the green LED and is reported to the controller.

**Output gates.** The PWM and fire commands from the controller each pass through a gate whose other input is PERMIT. Without PERMIT, both outputs go to their "off" level, whatever the controller commands. A third path drives a transistor that connects WP to ground only while PERMIT is yes. None of this passes through the firmware.

**Without the controller.** When the controller is off or the ribbon cable is unplugged, PERMIT is pulled low, and both command inputs are pulled low by resistors on the board.

## Options {#options}

The three options are solder links on the top side, each with three pads: the middle pad is joined to one of the outer two. All three are delivered joined to the **left** pad. To change one, cut the thin bridge on the left and put a drop of solder across the middle and right pads. Do this with the board unpowered.

{::nomarkdown}
<div class="xb-jumpers">
  <div class="xb-jumper">
    <b>PWM POL</b>
    <svg viewBox="0 0 230 86" role="img" aria-label="Three pads: left and middle joined means active high; middle and right joined means active low.">
      <rect x="20" y="14" width="120" height="36" rx="10" fill="#33290d" stroke="#ffcc33" stroke-width="2.5"/>
      <g fill="#e0b84a" stroke="#6b5310"><rect x="33" y="20" width="24" height="24" rx="5"/><rect x="103" y="20" width="24" height="24" rx="5"/><rect x="173" y="20" width="24" height="24" rx="5"/></g>
      <g font-size="12" fill="#e6ebf2" text-anchor="middle"><text x="45" y="74">high</text><text x="115" y="74" fill="#a9b4c2">common</text><text x="185" y="74">low</text></g>
    </svg>
    <span>Left, as delivered: more power means wider 5&nbsp;V pulses; blocked means 0&nbsp;V (shown). Right: reversed, blocked means 5&nbsp;V.</span>
  </div>
  <div class="xb-jumper">
    <b>TTL POL</b>
    <svg viewBox="0 0 230 86" role="img" aria-label="Three pads: left and middle joined means fire when low; middle and right joined means fire when high.">
      <rect x="20" y="14" width="120" height="36" rx="10" fill="#33290d" stroke="#ffcc33" stroke-width="2.5"/>
      <g fill="#e0b84a" stroke="#6b5310"><rect x="33" y="20" width="24" height="24" rx="5"/><rect x="103" y="20" width="24" height="24" rx="5"/><rect x="173" y="20" width="24" height="24" rx="5"/></g>
      <g font-size="12" fill="#e6ebf2" text-anchor="middle"><text x="45" y="74">low</text><text x="115" y="74" fill="#a9b4c2">common</text><text x="185" y="74">high</text></g>
    </svg>
    <span>Left, as delivered: 0&nbsp;V fires, for an L terminal (shown). Right: 5&nbsp;V fires, for an H terminal.</span>
  </div>
  <div class="xb-jumper">
    <b>SRC5V</b>
    <svg viewBox="0 0 230 86" role="img" aria-label="Three pads: left and middle joined takes 5 volts from the controller; middle and right joined takes 5 volts from the laser supply.">
      <rect x="20" y="14" width="120" height="36" rx="10" fill="#33290d" stroke="#ffcc33" stroke-width="2.5"/>
      <g fill="#e0b84a" stroke="#6b5310"><rect x="33" y="20" width="24" height="24" rx="5"/><rect x="103" y="20" width="24" height="24" rx="5"/><rect x="173" y="20" width="24" height="24" rx="5"/></g>
      <g font-size="12" fill="#e6ebf2" text-anchor="middle"><text x="45" y="74">HOST</text><text x="115" y="74" fill="#a9b4c2">common</text><text x="185" y="74">PSU</text></g>
    </svg>
    <span>Left, as delivered: the output stage runs from the controller's 5&nbsp;V (shown). Right: it runs from the laser supply's 5&nbsp;V terminal.</span>
  </div>
</div>
{:/nomarkdown}

**Powering the output stage from the laser supply.** With SRC5V on PSU and the board's 5V pin wired to the supply's 5V terminal, the output gates and the loops stay powered while the controller is off. TTL and PWM then stay at their "off" levels instead of being undefined. The 5V pin is an input only: the board never feeds 5 V into the supply.

<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>Never join all three SRC5V pads.</strong> That connects the controller's 5 V directly to the laser supply's 5 V, and one can drive current into the other.
</sl-alert>

**Bypassing unused loops.** Bridge the BYP link of each loop you do not use with solder. A wire link in the screw terminal does the same and is easier to undo. Never bypass a loop that has a switch on it "for a quick test": the board cannot tell the difference.

**Indicator LEDs.** Each LED has a small solder link in series (one on the top side for PERMIT, four on the underside). Cut a link to disable that LED. The logic works the same without it.

**Test pads.** The underside has pads for 3.3 V, the output stage's 5 V, PERMIT and ground, for checking the board with a multimeter.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>When you see</th><th>It means</th><th>Do this</th></tr></thead>
  <tbody>
    <tr><td>No LED at all, with loops open</td><td>The board has no power.</td><td>Check continuity for adapter power pins 1 and 2 and ground pin 10 through the chain or harness.</td></tr>
    <tr><td>A red LED stays lit</td><td>That loop is open.</td><td>Check its switch is closed, both wires are tight in S and G, and the wire is not broken. If the loop is unused, bridge its BYP link.</td></tr>
    <tr><td>A red LED never lights, even with the wire removed</td><td>That loop is bypassed, or its LED link is cut.</td><td>Inspect the BYP link of that loop for solder. PERMIT going dark when you remove the wire shows the loop itself works.</td></tr>
    <tr><td>All red LEDs dark but PERMIT also dark</td><td>The PERMIT LED link is cut, or the board has only part of its power.</td><td>Measure the PERMIT test pad on the underside: about 3.3&nbsp;V means the logic permits firing.</td></tr>
    <tr><td>PERMIT is lit but the laser does not fire</td><td>The command is not reaching the supply, or the polarity does not match it.</td><td>Repeat step 6 of <a href="#get-started">Get started</a> with a multimeter. If the outputs are right, compare them with what your supply's manual expects and check the <a href="#options">polarity links</a>.</td></tr>
    <tr><td>TTL and PWM do not change on <code>fire 20</code></td><td>The laser module is not configured, or uses other pins.</td><td>Check <code>enable = true</code>, <code>pwm_pin = PWM2_2</code> and <code>ttl_pin = PD12</code> under <code>[laser]</code>, then restart the board.</td></tr>
    <tr><td>The laser fires weakly or erratically</td><td>The PWM frequency does not suit the supply.</td><td>Set <code>frequency</code> under <code>[pwm2]</code> to the value in the supply's manual.</td></tr>
    <tr><td>The laser fires at full power when it should be off</td><td>A polarity link does not match the supply.</td><td>Unplug the supply at once. Check which of TL and TH you wired, and the TTL POL and PWM POL links.</td></tr>
    <tr><td>The machine halts by itself during a job</td><td>With the kill-button option: a loop opened, even briefly.</td><td>Look at the red LEDs while it happens. A flow switch near its threshold or a lid switch that rattles are the usual causes.</td></tr>
    <tr><td>The machine keeps moving after the laser was blocked</td><td>The board stops the laser, not the motion.</td><td>Add the optional <a href="#configuration">kill-button configuration</a>.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/). Say which revision you have (it is printed on the board), the model of your laser supply, how the three links are set, and which LEDs are lit.

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>Revision</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/laser-psu-adapter-board/laser-psu-adapter-schematic.pdf">Schematic (PDF)</a></td><td>v27</td><td>The complete revision 27 circuit diagram.</td></tr>
    <tr><td><a href="/images/extensions/laser-psu-adapter-board/laser-psu-adapter-bom.csv">Parts list (CSV)</a></td><td>v27</td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/laser-psu-adapter-board/laser-psu-adapter-diagram.png">Board drawing (SVG)</a></td><td>v27</td><td>The top view used on this page, at full resolution</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The KiCad design files will be linked here when the board's repository is published.

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the corner marked 0, 0 with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-lpa-mount-t">
  <title id="xb-lpa-mount-t">Mounting drawing of the laser PSU adapter board, component side: outline 80 by 55.75 millimetres with 4 mounting holes and 2 cable-tie holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="236.1" y="78.0" width="487.9" height="340.0" rx="9.1" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M236.1 56H723.9"/><path d="M236.1 50V62"/><path d="M723.9 50V62"/><path d="M749.9 78.0V418.0"/><path d="M743.9 78.0h12"/><path d="M743.9 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">80</text>
  <text x="761.9" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">55.75</text>
  <circle cx="236.1" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="224.1" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M178.1 104.0h30" fill="none"/><path d="M212.1 104.0l-8 -4v8z"/><path d="M178.1 104.0v30" fill="none"/><path d="M178.1 138.0l-4 -8h8z"/></g>
  <text x="216.1" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="174.1" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="284.8" cy="171.0" r="9.8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M271.1 171.0h27.5M284.8 157.2v27.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="275.1" y="200.8" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  8.00, 15.25</text>
  <circle cx="528.8" cy="171.0" r="9.8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M515.0 171.0h27.5M528.8 157.2v27.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="538.5" y="200.8" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  48.00, 15.25</text>
  <circle cx="284.8" cy="293.0" r="9.8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M271.1 293.0h27.5M284.8 279.2v27.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="275.1" y="273.2" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  8.00, 35.25</text>
  <circle cx="528.8" cy="293.0" r="9.8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M515.0 293.0h27.5M528.8 279.2v27.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="538.5" y="273.2" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  48.00, 35.25</text>
  <circle cx="687.4" cy="201.5" r="7.6" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <circle cx="687.4" cy="232.0" r="7.6" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <text x="687.4" y="184.9" text-anchor="middle" font-size="12" fill="#a9b4c2">cable tie</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 80 × 55.75&nbsp;mm, corners rounded to a 1.5&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>8.00</td><td>15.25</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>48.00</td><td>15.25</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>8.00</td><td>35.25</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>48.00</td><td>35.25</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>–</td><td>74.00</td><td>20.25</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
    <tr><td>–</td><td>74.00</td><td>25.25</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Every figure below is a design value, a value calculated from the design, or a value from a part's datasheet, as the last column says. None is a measurement on a built board. A dash means the figure does not apply. **Open** means it has not been established yet.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Logic supply</td><td>Y IN pin 1</td><td>—</td><td>3.3 V</td><td>—</td><td>From the controller</td></tr>
    <tr><td>Output-stage and loop supply</td><td>Y IN pin 2, or the 5V screw with SRC5V on PSU</td><td>—</td><td>5 V</td><td>—</td><td>From the controller as delivered</td></tr>
    <tr><td>Loop test current</td><td>S1 to S4, switch closed</td><td>—</td><td>≈ 1 mA</td><td>—</td><td>Calculated from the design</td></tr>
    <tr><td>Delay from loop open to outputs blocked</td><td>PWM, TTL, WP</td><td>—</td><td>No added delay</td><td>—</td><td>By design; not measured</td></tr>
    <tr><td>Delay from loop closed to outputs restored</td><td>PWM, TTL, WP</td><td>—</td><td>≈ 0.2 s</td><td>—</td><td>Calculated; not measured</td></tr>
    <tr><td>PWM output level</td><td>PWM</td><td>0 V</td><td>—</td><td>5 V</td><td>Pulses; 5&nbsp;V logic output stage</td></tr>
    <tr><td>TTL output level</td><td>TTL</td><td>0 V</td><td>—</td><td>5 V</td><td>5&nbsp;V logic. As delivered 0&nbsp;V means fire.</td></tr>
    <tr><td>WP output</td><td>WP</td><td>—</td><td>—</td><td>Open</td><td>Transistor to ground while firing is permitted; current and voltage limits not established</td></tr>
    <tr><td>Status outputs</td><td>PERMIT, FAULT 1 to 4</td><td>0 V</td><td>—</td><td>3.3 V</td><td>3.3&nbsp;V logic</td></tr>
    <tr><td>PWM frequency</td><td>PWM</td><td>Open</td><td>Open</td><td>Open</td><td>Set by the laser supply; the board's own limit is not measured</td></tr>
    <tr><td>Supply current</td><td>Y IN pins 1 and 2</td><td>Open</td><td>Open</td><td>Open</td><td>Not measured</td></tr>
    <tr><td>Isolation</td><td>Controller, loops, laser supply</td><td>—</td><td>None</td><td>—</td><td>All three grounds are one net</td></tr>
    <tr><td>Ambient temperature</td><td>Board</td><td>Open</td><td>Open</td><td>Open</td><td>Not established</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Component stress limits

These are limits of individual parts, beyond which the part can be damaged. They are not operating conditions; stay inside the table above.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Circuit</th><th>Pin or device stress</th><th>Absolute limit</th></tr></thead>
  <tbody>
    <tr><td>Loop inputs</td><td>Accidental DC voltage on S1 to S4</td><td>48 V: design target, not tested</td></tr>
    <tr><td>Outputs to the laser supply</td><td>Voltage applied to PWM, TTL or WP</td><td>Open</td></tr>
    <tr><td>5V screw</td><td>Voltage from the laser supply</td><td>Open; the terminal is an input for a 5&nbsp;V supply only</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
