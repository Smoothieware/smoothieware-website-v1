---
layout: default
title: "Laser diode driver"
description: "Constant-current driver for a bare laser diode, up to 1 A, controlled by Smoothieboard V2: pinout, wiring, configuration and troubleshooting."
permalink: /extensions/laser-diode-driver-breakout
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero"><div>
<p class="xb-eyebrow">Extension board · Laser control</p>
<h1 id="laser-diode-driver-breakout">Laser diode driver</h1>
<p class="xb-lead">Drive a bare laser diode from your Smoothieboard. The board holds the diode current constant at 0.25, 0.5, 0.75 or 1&nbsp;A, follows the controller's PWM signal, and switches the laser off in hardware when the safety loop opens, the head overheats or the supply leaves its range.</p>
<div class="xb-actions"><a class="xb-btn xb-btn-primary" href="#get-started">Get started</a><a class="xb-btn" href="#pinout">Pinout</a><a class="xb-btn" href="#configuration">Configuration</a></div>
</div><figure><img src="/images/extensions/laser-diode-driver-breakout/laser-diode-driver-breakout-diagram.png" alt="Top view of the laser diode driver: power connectors at the top, three laser head connectors at the bottom, a Gadgeteer socket on each side."><figcaption>Top view, drawn from the board's design files. The connector shapes are stylized.</figcaption></figure></div>
<div class="xb-stats">
<div class="xb-stat"><b>1 A</b><span>highest diode current, in four steps from 0.25 A</span></div>
<div class="xb-stat"><b>9–15 V</b><span>supply, protected against reversed leads and over-voltage</span></div>
<div class="xb-stat"><b>PWM</b><span>power control from 60 Hz to 10 kHz</span></div>
<div class="xb-stat"><b>3</b><span>parallel laser head connectors</span></div>
<div class="xb-stat"><b>8</b><span>status lamps</span></div>
<div class="xb-stat"><b>70 × 60</b><span>millimetres, M3 holes on a 60 × 50 mm rectangle</span></div>
</div>
<nav class="xb-nav" aria-label="On this page"><a href="#specs">Tech specs</a><a href="#tour">Board tour</a><a href="#pinout">Pinout</a><a href="#what-you-need">What you need</a><a href="#get-started">Get started</a><a href="#configuration">Configuration</a><a href="#wiring">Wiring</a><a href="#how-it-works">How it works</a><a href="#options">Options</a><a href="#troubleshooting">Troubleshooting</a><a href="#downloads">Downloads</a><a href="#mounting">Mounting</a><a href="#electrical">Electrical</a><a href="#simulation">Simulation</a></nav>
{:/nomarkdown}

<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
  <strong>A diode laser of this size can blind permanently, faster than you can blink, also from a reflection.</strong> Run it only inside a closed enclosure with the safety loop wired to its door, and wear goggles rated for the diode's wavelength whenever the enclosure is open. This board is not a certified safety device.
</sl-alert>

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="lightning-charge"></sl-icon>
  <strong>Never connect or disconnect the diode while the board is powered</strong>, and check LD+ and LD− with a meter before the first power-up. The output can rise to about 14&nbsp;V with nothing connected, and reversed laser wires are not protected against. Either mistake can destroy the diode.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec"><tbody><tr><td>Load</td><td>One laser diode without built-in electronics, forward voltage 2.4&nbsp;V to about 8&nbsp;V at 12&nbsp;V supply. Modules with their own driver board do not belong here.</td></tr><tr><td>Current</td><td>0.25&nbsp;A with no jumper cap; 0.5, 0.75 or 1&nbsp;A with one cap. Constant-current buck regulator (<a href="/images/extensions/laser-diode-driver-breakout/datasheets/lt3474.pdf">LT3474</a>), 500&nbsp;kHz.</td></tr><tr><td>Power control</td><td>PWM from the controller, 60&nbsp;Hz to 10&nbsp;kHz, pulses of at least 40&nbsp;µs</td></tr><tr><td>Arming</td><td>Output only after a fresh rising edge on ARM while loop, temperature and supply are good. Any fault disarms.</td></tr><tr><td>Safety loop</td><td>Voltage-free contacts between laser connector pins 5 and 6; must be closed. No board link bypasses it.</td></tr><tr><td>Temperature cut-out</td><td>10&nbsp;kΩ thermistor, B about 3435&nbsp;K (for example Semitec 103AT-2). Trips near 50&nbsp;°C (calculated); open or shorted sensor also blocks.</td></tr><tr><td>Supply</td><td>9 to 15&nbsp;V DC. Turns on near 8.5&nbsp;V, cuts off near 16&nbsp;V, current limit about 1.5&nbsp;A, reversed supply blocked</td></tr><tr><td>Power connectors</td><td>XT30, 5.08&nbsp;mm screw terminal and 2.54&nbsp;mm pins, in parallel</td></tr><tr><td>Laser connectors</td><td>Molex Micro-Fit 3.0 2×3, 6-way 5.08&nbsp;mm screw terminal and 1×6 2.54&nbsp;mm pins, in parallel</td></tr><tr><td>Controller connector</td><td>Gadgeteer type Y: ARM pin 3, PERMIT pin 4, PWM pin 7. Second socket for chaining.</td></tr><tr><td>Lamps</td><td>Power, ready, permit, PWM, temperature, input fault, over-voltage, reversed supply</td></tr><tr><td>Size</td><td>70 × 60&nbsp;mm, four M3 holes in the corners</td></tr><tr><td>Manufacturing</td><td>4 layers, 1.6&nbsp;mm, ENIG finish, vias under the regulator filled and capped. Six fiducials and nine test points; part numbers in the parts list.</td></tr><tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> with Smoothieware V2, standard <a href="/laser">laser</a> and <a href="/switch">switch</a> modules</td></tr><tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr></tbody></table></div>
{:/nomarkdown}

## Board tour {#tour}

Hole positions are in the [mounting dimensions](#mounting) appendix, limits in the [electrical specifications](#electrical).

{::nomarkdown}
<figure class="xb-tour"><div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board"><div class="xb-tour-stage"><img src="/images/extensions/laser-diode-driver-breakout/laser-diode-driver-breakout-diagram.png" alt="Top view of the board with numbered markers explained in the list below."><a class="xb-mk xb-pb" href="#tour-1" style="left:26.4%;top:9%" aria-label="1: XT30 power input">1<span class="xb-pop"><b>XT30 power input</b> — 9 to 15 V. The pads are marked + and −.</span></a><a class="xb-mk xb-pb" href="#tour-2" style="left:48%;top:10.5%" aria-label="2: Power screw terminal">2<span class="xb-pop"><b>Power screw terminal</b> — Same input as the XT30; + is the right-hand screw. <i>Use one supply on one connector.</i></span></a><a class="xb-mk xb-pb" href="#tour-3" style="left:48%;top:23%" aria-label="3: Power pins">3<span class="xb-pop"><b>Power pins</b> — Same input on 2.54 mm pins; + on the right. <i>Thin jumper wires are not suited to the full current.</i></span></a><a class="xb-mk xb-pb" href="#tour-4" style="left:72%;top:6.2%" aria-label="4: Fault lamps">4<span class="xb-pop"><b>Fault lamps</b> — FLT input fault, OV over-voltage, REV reversed supply.</span></a><a class="xb-mk xb-pb" href="#tour-5" style="left:72%;top:18%" aria-label="5: Status lamps">5<span class="xb-pop"><b>Status lamps</b> — PWR, RDY, PRM, PWM and TMP. <i>See what the lamps tell you.</i></span></a><a class="xb-mk xb-pb" href="#tour-6" style="left:74.6%;top:34%" aria-label="6: Current jumper">6<span class="xb-pop"><b>Current jumper</b> — No cap: 0.25 A. One cap across the top pair 0.5 A, middle 0.75 A, bottom 1 A.</span></a><a class="xb-mk xb-pl" href="#tour-7" style="left:8%;top:50%" aria-label="7: Y IN">7<span class="xb-pop"><b>Y IN</b> — Ribbon cable to the Smoothieboard.</span></a><a class="xb-mk xb-pr" href="#tour-8" style="left:92%;top:50%" aria-label="8: Y CHAIN">8<span class="xb-pop"><b>Y CHAIN</b> — Passes the unused signals to the next board.</span></a><a class="xb-mk xb-pb" href="#tour-9" style="left:32%;top:45%" aria-label="9: Arming logic">9<span class="xb-pop"><b>Arming logic</b> — Remembers that you armed, and forgets it on any fault.</span></a><a class="xb-mk" href="#tour-10" style="left:70.7%;top:51.7%" aria-label="10: Current regulator">10<span class="xb-pop"><b>Current regulator</b> — The LT3474 that sets the diode current. <i>Gets warm at 1 A.</i></span></a><a class="xb-mk xb-pl" href="#tour-11" style="left:23.6%;top:63%" aria-label="11: NO NTC pads">11<span class="xb-pop"><b>NO NTC pads</b> — Bridge only for a laser head without a thermistor.</span></a><a class="xb-mk" href="#tour-12" style="left:25%;top:87%" aria-label="12: Laser head, Micro-Fit">12<span class="xb-pop"><b>Laser head, Micro-Fit</b> — Locking 6-pin connector for the head cable.</span></a><a class="xb-mk" href="#tour-13" style="left:61%;top:89%" aria-label="13: Laser head, screw terminal">13<span class="xb-pop"><b>Laser head, screw terminal</b> — Same six signals, 5.08 mm.</span></a><a class="xb-mk" href="#tour-14" style="left:61%;top:77.6%" aria-label="14: Laser head, pins">14<span class="xb-pop"><b>Laser head, pins</b> — Same six signals, 2.54 mm.</span></a></div></div><ol class="xb-tour-list"><li id="tour-1"><span class="xb-n">1</span><div><b>XT30 power input</b> — 9 to 15 V. The pads are marked + and −.</div></li><li id="tour-2"><span class="xb-n">2</span><div><b>Power screw terminal</b> — Same input as the XT30; + is the right-hand screw. <small>Use one supply on one connector.</small></div></li><li id="tour-3"><span class="xb-n">3</span><div><b>Power pins</b> — Same input on 2.54 mm pins; + on the right. <small>Thin jumper wires are not suited to the full current.</small></div></li><li id="tour-4"><span class="xb-n">4</span><div><b>Fault lamps</b> — FLT input fault, OV over-voltage, REV reversed supply.</div></li><li id="tour-5"><span class="xb-n">5</span><div><b>Status lamps</b> — PWR, RDY, PRM, PWM and TMP. <small>See <a href="#leds">what the lamps tell you</a>.</small></div></li><li id="tour-6"><span class="xb-n">6</span><div><b>Current jumper</b> — No cap: 0.25 A. One cap across the top pair 0.5 A, middle 0.75 A, bottom 1 A.</div></li><li id="tour-7"><span class="xb-n">7</span><div><b>Y IN</b> — Ribbon cable to the Smoothieboard.</div></li><li id="tour-8"><span class="xb-n">8</span><div><b>Y CHAIN</b> — Passes the unused signals to the next board.</div></li><li id="tour-9"><span class="xb-n">9</span><div><b>Arming logic</b> — Remembers that you armed, and forgets it on any fault.</div></li><li id="tour-10"><span class="xb-n">10</span><div><b>Current regulator</b> — The <a href="/images/extensions/laser-diode-driver-breakout/datasheets/lt3474.pdf">LT3474</a> that sets the diode current. <small>Gets warm at 1 A.</small></div></li><li id="tour-11"><span class="xb-n">11</span><div><b>NO NTC pads</b> — Bridge only for a laser head without a thermistor.</div></li><li id="tour-12"><span class="xb-n">12</span><div><b>Laser head, Micro-Fit</b> — Locking 6-pin connector for the head cable.</div></li><li id="tour-13"><span class="xb-n">13</span><div><b>Laser head, screw terminal</b> — Same six signals, 5.08 mm.</div></li><li id="tour-14"><span class="xb-n">14</span><div><b>Laser head, pins</b> — Same six signals, 2.54 mm.</div></li></ol><figcaption>Point at a number, or tap it, to read what the part is. On a small screen, scroll the drawing sideways.</figcaption></figure>
{:/nomarkdown}

## Pinout {#pinout}

### Controller connector (Y IN)

The board sits on Prime header **G_C** with a straight 10-way Gadgeteer ribbon cable: pin 1 to pin 1, and so on.

{::nomarkdown}
<div class="xb-tablewrap"><table><thead><tr><th>Pin</th><th>Function</th><th>Direction</th><th>What it does</th><th>Pin on G_C</th><th>On the chain socket</th></tr></thead><tbody><tr><td>1</td><td>3.3 V</td><td>—</td><td>Passed through; the board draws nothing from it</td><td>—</td><td>Straight through</td></tr><tr><td>2</td><td>5 V</td><td>—</td><td>Passed through; the board draws nothing from it</td><td>—</td><td>Straight through</td></tr><tr><td>3</td><td><span class="xb-pill xb-p-sig">ARM</span></td><td>From controller</td><td>A change from low to high arms; low disarms</td><td><code>PD14</code></td><td>Isolated (link JP3 open)</td></tr><tr><td>4</td><td><span class="xb-pill xb-p-sig">PERMIT</span></td><td>To controller</td><td>High while armed and healthy, 3.3 V through 1 kΩ</td><td><code>PD12</code></td><td>Isolated (link JP4 open)</td></tr><tr><td>5</td><td>—</td><td>—</td><td>Not used</td><td><code>PD10</code></td><td>Straight through</td></tr><tr><td>6</td><td>—</td><td>—</td><td>Not used</td><td><code>PI5</code></td><td>Straight through</td></tr><tr><td>7</td><td><span class="xb-pill xb-p-sig">PWM</span></td><td>From controller</td><td>High while the laser should emit</td><td><code>PWM2_2</code></td><td>Isolated (link JP7 open)</td></tr><tr><td>8, 9</td><td>—</td><td>—</td><td>Not used</td><td><code>PI7</code>, <code>PI2</code></td><td>Straight through</td></tr><tr><td>10</td><td>GND</td><td>—</td><td>Ground, shared with the 12 V supply negative</td><td>—</td><td>Straight through</td></tr></tbody></table></div>
{:/nomarkdown}

Leave the three links **open**, as delivered. Pins 3, 4 and 7 belong to this board; closing a link also puts that signal on the chain socket.

### Laser head connectors

The three connectors carry the same pin numbers. On the screw terminal and the 2.54&nbsp;mm pins, pin 1 is the left-hand one with the board held as in the tour. On the Micro-Fit, the board pads, seen from above, are numbered 1, 2, 3 from right to left in the row nearer the board edge and 4, 5, 6 from right to left in the row further in. Check against the numbers moulded on your mating housing and with a continuity meter.

{::nomarkdown}
<div class="xb-tablewrap"><table><thead><tr><th>Pin</th><th>Name</th><th>Connect to</th></tr></thead><tbody><tr><td>1</td><td>LD+</td><td>Diode anode</td></tr><tr><td>2</td><td>LD−</td><td>Diode cathode. Switched by the board: <b>never connect it to ground or to the heatsink</b></td></tr><tr><td>3</td><td>NTC</td><td>One thermistor lead</td></tr><tr><td>4</td><td>GND</td><td>The other thermistor lead</td></tr><tr><td>5</td><td>LOOP A</td><td>One side of the safety contact chain</td></tr><tr><td>6</td><td>LOOP B</td><td>The other side</td></tr></tbody></table></div>
{:/nomarkdown}

### What the lamps tell you {#leds}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds"><thead><tr><th>Lamp</th><th><span class="xb-led xb-led-red"></span>FLT</th><th><span class="xb-led xb-led-red"></span>OV</th><th><span class="xb-led xb-led-red"></span>REV</th><th><span class="xb-led xb-led-green"></span>PWR</th><th><span class="xb-led xb-led-yellow"></span>RDY</th><th><span class="xb-led xb-led-green"></span>PRM</th><th><span class="xb-led xb-led-red"></span>PWM</th><th><span class="xb-led xb-led-red"></span>TMP</th></tr></thead><tbody><tr><td>Where</td><td>Top right, row 1</td><td>Top right, row 1</td><td>Top right, row 1</td><td>Top right, row 2</td><td>Top right, row 2</td><td>Top right, row 2</td><td>Top right, row 3</td><td>Top right, row 3</td></tr><tr><td>Lit means</td><td>The input protection chip reports a fault: supply out of range, overload or overheating</td><td>Supply above about 16 V</td><td>Supply leads reversed (blinks)</td><td>Logic supply present</td><td>Loop closed, temperature good, supply good: you may arm</td><td>Armed</td><td>Armed and PWM high: the laser is being driven</td><td>Head too hot, sensor shorted or missing</td></tr></tbody></table></div>
{:/nomarkdown}

## What you need {#what-you-need}

- A [Smoothieboard V2 Prime](/smoothieboard-v2-prime) running Smoothieware V2, and a 10-way Gadgeteer ribbon cable.
- A 12&nbsp;V DC supply with at least 1.5&nbsp;A to spare. At 1&nbsp;A into a 5&nbsp;V diode the board draws about 0.55&nbsp;A (calculated); the extra margin covers start-up.
- A laser diode **rated for at least the current you select**, mounted in a metal heatsink. Read its datasheet: maximum current, forward voltage, which pin is anode, and whether the case is connected to a pin.
- A 10&nbsp;kΩ thermistor fixed to the heatsink.
- A safety contact: a door switch, key switch or both in series.
- An enclosure, and goggles matched to the wavelength.
- A multimeter.

### Choosing the current

The datasheet of the common 450&nbsp;nm, 2&nbsp;W diode OSRAM PLPT5 447KA gives about 1.2&nbsp;A for 2&nbsp;W and a forward voltage of 4.6&nbsp;V typical, 5.9&nbsp;V maximum. This board stops at 1&nbsp;A, so that diode gives roughly 1.6&nbsp;W here (interpolated). A diode rated below 0.25&nbsp;A cannot be used.

## Get started {#get-started}

{::nomarkdown}
<figure class="xb-fig"><div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Minimum wiring"><svg viewBox="0 0 1200 790" role="img" aria-labelledby="xb-ldd-hook"><title id="xb-ldd-hook">Minimum wiring: 12 V to the power input, a straight ribbon cable from G_C to Y IN, the diode between pins 1 and 2, the thermistor between pins 3 and 4 and a door switch between pins 5 and 6.</title><image href="/images/extensions/equipment/smoothieboard-v2-prime-2660.webp" x="10" y="10" width="464" height="464"/><image href="/images/extensions/equipment/bar-power-supply-9-terminal.webp" x="10" y="495" width="460" height="248"/><image href="/images/extensions/laser-diode-driver-breakout/laser-diode-driver-breakout-diagram.png" x="540" y="200" width="288" height="249.7"/><image href="/images/extensions/equipment/laser-diode-head-generic.webp" x="980" y="170" width="200" height="180"/><image href="/images/extensions/equipment/door-switch-generic.webp" x="980" y="520" width="176" height="104"/><path d="M231.6 160 H505 V324 H563" fill="none" stroke="#0d0f12" stroke-width="16"/><path d="M231.6 160 H505 V324 H563" fill="none" stroke="#9aa4b2" stroke-width="12"/><circle cx="231.6" cy="160" r="5" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><circle cx="563" cy="324" r="5" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><path d="M274 712 V765 H522 V150 H688.6 V225" fill="none" stroke="#0d0f12" stroke-width="8"/><path d="M274 712 V765 H522 V150 H688.6 V225" fill="none" stroke="#ff9f43" stroke-width="4"/><path d="M236 712 V778 H506 V345 H490 V135 H668 V225" fill="none" stroke="#0d0f12" stroke-width="8"/><path d="M236 712 V778 H506 V345 H490 V135 H668 V225" fill="none" stroke="#8a94a3" stroke-width="4"/><circle cx="274" cy="712" r="5" fill="#ff9f43" stroke="#0d0f12" stroke-width="1.5"/><circle cx="236" cy="712" r="5" fill="#8a94a3" stroke="#0d0f12" stroke-width="1.5"/><circle cx="688.6" cy="225" r="5" fill="#ff9f43" stroke="#0d0f12" stroke-width="1.5"/><circle cx="668" cy="225" r="5" fill="#8a94a3" stroke="#0d0f12" stroke-width="1.5"/><path d="M665 423 V610 H950 V303.3 H992" fill="none" stroke="#0d0f12" stroke-width="8"/><path d="M665 423 V610 H950 V303.3 H992" fill="none" stroke="#ff5d5d" stroke-width="4"/><circle cx="665" cy="423" r="5" fill="#ff5d5d" stroke="#0d0f12" stroke-width="1.5"/><circle cx="992" cy="303.3" r="5" fill="#ff5d5d" stroke="#0d0f12" stroke-width="1.5"/><path d="M685.4 423 V585 H930 V276.7 H992" fill="none" stroke="#0d0f12" stroke-width="8"/><path d="M685.4 423 V585 H930 V276.7 H992" fill="none" stroke="#8a94a3" stroke-width="4"/><circle cx="685.4" cy="423" r="5" fill="#8a94a3" stroke="#0d0f12" stroke-width="1.5"/><circle cx="992" cy="276.7" r="5" fill="#8a94a3" stroke="#0d0f12" stroke-width="1.5"/><path d="M705.8 423 V560 H910 V223.3 H992" fill="none" stroke="#0d0f12" stroke-width="8"/><path d="M705.8 423 V560 H910 V223.3 H992" fill="none" stroke="#ffd75f" stroke-width="4"/><circle cx="705.8" cy="423" r="5" fill="#ffd75f" stroke="#0d0f12" stroke-width="1.5"/><circle cx="992" cy="223.3" r="5" fill="#ffd75f" stroke="#0d0f12" stroke-width="1.5"/><path d="M725.8 423 V535 H890 V196.7 H992" fill="none" stroke="#0d0f12" stroke-width="8"/><path d="M725.8 423 V535 H890 V196.7 H992" fill="none" stroke="#ffd75f" stroke-width="4"/><circle cx="725.8" cy="423" r="5" fill="#ffd75f" stroke="#0d0f12" stroke-width="1.5"/><circle cx="992" cy="196.7" r="5" fill="#ffd75f" stroke="#0d0f12" stroke-width="1.5"/><path d="M746 423 V510 H870 V560 H992" fill="none" stroke="#0d0f12" stroke-width="8"/><path d="M746 423 V510 H870 V560 H992" fill="none" stroke="#35c26b" stroke-width="4"/><path d="M766.4 423 V490 H865 V600 H992" fill="none" stroke="#0d0f12" stroke-width="8"/><path d="M766.4 423 V490 H865 V600 H992" fill="none" stroke="#35c26b" stroke-width="4"/><circle cx="992" cy="560" r="5" fill="#35c26b" stroke="#0d0f12" stroke-width="1.5"/><circle cx="992" cy="600" r="5" fill="#35c26b" stroke="#0d0f12" stroke-width="1.5"/><circle cx="746" cy="423" r="5" fill="#35c26b" stroke="#0d0f12" stroke-width="1.5"/><circle cx="766.4" cy="423" r="5" fill="#35c26b" stroke="#0d0f12" stroke-width="1.5"/><text x="665" y="408" font-size="15" text-anchor="middle" fill="#ff5d5d">1</text><text x="685.4" y="408" font-size="15" text-anchor="middle" fill="#8a94a3">2</text><text x="705.8" y="408" font-size="15" text-anchor="middle" fill="#ffd75f">3</text><text x="725.8" y="408" font-size="15" text-anchor="middle" fill="#ffd75f">4</text><text x="746" y="408" font-size="15" text-anchor="middle" fill="#35c26b">5</text><text x="766.4" y="408" font-size="15" text-anchor="middle" fill="#35c26b">6</text><text x="250" y="490" font-size="17" text-anchor="middle" fill="#ffffff">Smoothieboard V2 Prime, ribbon from G_C</text><text x="100" y="764" font-size="17" text-anchor="middle" fill="#ffffff">12 V supply</text><text x="700" y="120" font-size="17" text-anchor="middle" fill="#ffffff">12 V: + orange, − grey</text><text x="560" y="192" font-size="17" text-anchor="start" fill="#ffffff">Driver board</text><text x="1080" y="160" font-size="17" text-anchor="middle" fill="#ffffff">Laser head</text><text x="1085" y="375" font-size="15" text-anchor="middle" fill="#ffffff">pin 1 to A, pin 2 to K</text><text x="1085" y="397" font-size="15" text-anchor="middle" fill="#ffffff">pins 3, 4 to thermistor</text><text x="1080" y="505" font-size="17" text-anchor="middle" fill="#ffffff">Door switch</text></svg></div><figcaption>Minimum wiring: 12 V to the power input, a straight ribbon cable from G_C to Y IN, the diode between pins 1 and 2, the thermistor between pins 3 and 4 and a door switch between pins 5 and 6. Board and equipment drawings are illustrations: the equipment is typical, not a specific model, so follow the printing on yours.</figcaption></figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps"><li class="xb-step"><h3>Prepare</h3><p>With all power off, remove any current jumper cap: this selects 0.25&nbsp;A.</p></li><li class="xb-step"><h3>Wire the safety parts only</h3><p>Use the <b>screw terminal</b>, whose pin numbers are printed beside it. Connect the thermistor to pins 3 and 4 and the door switch to pins 5 and 6. Leave pins 1 and 2 empty.</p></li><li class="xb-step"><h3>Connect and configure</h3><p>Ribbon cable from G_C to Y IN, 12&nbsp;V supply with checked polarity, then add the <a href="#config-laser">laser</a> and <a href="#config-arm">arm switch</a> settings.</p></li><li class="xb-step"><h3>Power up and arm</h3><p>PWR and RDY light. Send <code>M810</code>: PRM lights. Do not send <code>fire</code> yet.</p></li><li class="xb-step"><h3>Test the loop</h3><p>Open the door: RDY and PRM go dark. Close it: RDY returns, PRM stays dark until you send <code>M811</code> then <code>M810</code>.</p></li><li class="xb-step"><h3>Fit the diode</h3><p>Send <code>M811</code>, switch off and wait ten seconds. Connect anode to pin 1 and cathode to pin 2; check with the meter that neither touches ground or the heatsink.</p></li><li class="xb-step"><h3>First light</h3><p>Close the enclosure, goggles on. Power up, send <code>M810</code>, then <code>fire 10 500</code>. PWM lights for half a second and the diode emits faintly: 0.25&nbsp;A is close to the threshold of a 2&nbsp;W diode.</p></li><li class="xb-step"><h3>Raise the current</h3><p>Switch off, fit the cap for the current you want, never above the diode rating, repeat step 7 and watch the heatsink temperature.</p></li></ol><p class="xb-expect">Success: the lamps behave as in steps 4 and 5 before any diode is connected, and the diode lights only during the test fire.</p>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table><thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead><tbody><tr><td>Power from G-code</td><td><a href="/laser">Laser</a></td><td><a href="#config-laser">1</a></td></tr><tr><td>Arm and disarm from G-code</td><td><a href="/switch">Switch</a>, output</td><td><a href="#config-arm">2</a></td></tr><tr><td>Arm from a push-button or key switch</td><td>Switch, input</td><td><a href="#config-key">3</a></td></tr><tr><td>Pause the job if the board disarms</td><td>Switch, input</td><td><a href="#config-pause">4</a></td></tr></tbody></table></div>
{:/nomarkdown}

Examples 1 and 2 are needed for normal use. If your file already has one of these sections, edit it instead of adding a second one.

### 1. Laser power (laser module) {#config-laser}

```ini
[pwm2]
frequency = 1000          # Hz, for every PWM pin of header G_C

[laser]
enable        = true
pwm_pin       = PWM2_2    # G_C pin 7 -> board PWM
maximum_power = 1.0       # fraction of the current set by the jumper
minimum_power = 0.04      # 4 % at 1000 Hz is a 40 us pulse, the shortest the regulator follows
default_power = 0.5       # used when a move gives no S value
```

No `ttl_pin` is needed. During `G1`, `G2` and `G3` the laser follows `S` (0 to 1), scaled between minimum and maximum power, so `S0` still gives the minimum; during `G0` it is off. The sample files set `[pwm2]` to 50&nbsp;Hz for servos, below this board's 60&nbsp;Hz limit.

### 2. Arm from G-code (switch module) {#config-arm}

```ini
[switch]
laserarm.enable            = true
laserarm.input_on_command  = M810    # arm
laserarm.input_off_command = M811    # disarm
laserarm.output_pin        = PD14    # G_C pin 3 -> board ARM
laserarm.output_type       = digital
laserarm.startup_state     = false   # disarmed after reset
laserarm.halt_set_to       = false   # a halt disarms
```

M810 and M811 are free numbers in Smoothieware chosen for this page; any unused M-code works if you change it in every entry. Put `M810` in your job's start code and `M811` in its end code (but see example 4). After a halt, send `M999` and then `M810`. If the board disarmed itself because of a fault, the pin is still high: send `M811` first, so that `M810` makes a new rising edge.

### 3. Arm with a push-button (switch module, input) {#config-key}

A button between pin 5 of the **chain socket** (this is G_C pin 5, `PD10`, passed straight through) and pin 10 sends the commands of example 2:

```ini
[switch]
armkey.enable             = true
armkey.input_pin          = PD10!^        # closed to ground = on
armkey.input_pin_behavior = toggle        # one press arms, the next disarms
armkey.output_on_command  = M810
armkey.output_off_command = M811
```

With a key switch that stays closed, use `momentary` instead of `toggle`.

### 4. Pause the job if the board disarms {#config-pause}

When a door opens the board stops the laser at once, but the machine keeps moving. This entry watches PERMIT and suspends the job:

```ini
[switch]
laserpermit.enable             = true
laserpermit.input_pin          = PD12v       # G_C pin 4 <- board PERMIT
laserpermit.input_pin_behavior = momentary
laserpermit.output_off_command = M600        # PERMIT fell: suspend
```

PERMIT also falls on `M811`, so with this entry **leave `M811` out of the job's end code**; if you send it by hand, follow it with `M601`. To continue after a trip, close the door, send `M811`, `M810`, then `M601`. Check the workpiece: a cut resumed mid-line can leave a mark.

### Commands


{::nomarkdown}
<div class="xb-tablewrap"><table><thead><tr><th>Command</th><th>What it does</th></tr></thead><tbody><tr><td><code>M810</code> / <code>M811</code></td><td>Arm / disarm (names chosen in example 2)</td></tr><tr><td><code>G1 X10 S0.5</code></td><td>Cutting move at half power</td></tr><tr><td><code>fire 10 500</code></td><td>Fire at 10 % for 500 ms</td></tr><tr><td><code>fire 10</code> / <code>fire off</code></td><td>Fire until stopped</td></tr><tr><td><code>fire status</code></td><td>Is a test fire active?</td></tr><tr><td><code>M221</code></td><td>Report power scale and PWM frequency</td></tr></tbody></table></div>
{:/nomarkdown}

## Wiring real loads {#wiring}

### A diode in a heatsink mount

The usual 9&nbsp;mm or 5.6&nbsp;mm can in a copper or aluminium holder. On the PLPT5 447KA, pin 1 is the anode, pin 3 the cathode and pin 2 the metal case: leave pin 2 unconnected. Other diodes differ, including some with a pin joined to the case, so follow your datasheet. Keep the pair of diode wires short and twisted, and solder at the diode quickly, with the leads shorted together until the cable is connected, against static electricity.

{::nomarkdown}
<figure class="xb-fig"><div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Two switches in series"><svg viewBox="0 0 1200 790" role="img" aria-labelledby="xb-ldd-two"><title id="xb-ldd-two">Full protection: the door switch and a key switch in series between pins 5 and 6, so either one opening stops the laser. A water-flow switch or an emergency-stop contact can join the same chain.</title><image href="/images/extensions/equipment/smoothieboard-v2-prime-2660.webp" x="10" y="10" width="464" height="464"/><image href="/images/extensions/equipment/bar-power-supply-9-terminal.webp" x="10" y="495" width="460" height="248"/><image href="/images/extensions/laser-diode-driver-breakout/laser-diode-driver-breakout-diagram.png" x="540" y="200" width="288" height="249.7"/><image href="/images/extensions/equipment/laser-diode-head-generic.webp" x="980" y="170" width="200" height="180"/><image href="/images/extensions/equipment/door-switch-generic.webp" x="980" y="455" width="176" height="104"/><image href="/images/extensions/equipment/key-switch-generic.webp" x="980" y="600" width="168" height="120"/><path d="M231.6 160 H505 V324 H563" fill="none" stroke="#0d0f12" stroke-width="16"/><path d="M231.6 160 H505 V324 H563" fill="none" stroke="#9aa4b2" stroke-width="12"/><circle cx="231.6" cy="160" r="5" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><circle cx="563" cy="324" r="5" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><path d="M274 712 V765 H522 V150 H688.6 V225" fill="none" stroke="#0d0f12" stroke-width="8"/><path d="M274 712 V765 H522 V150 H688.6 V225" fill="none" stroke="#ff9f43" stroke-width="4"/><path d="M236 712 V778 H506 V345 H490 V135 H668 V225" fill="none" stroke="#0d0f12" stroke-width="8"/><path d="M236 712 V778 H506 V345 H490 V135 H668 V225" fill="none" stroke="#8a94a3" stroke-width="4"/><circle cx="274" cy="712" r="5" fill="#ff9f43" stroke="#0d0f12" stroke-width="1.5"/><circle cx="236" cy="712" r="5" fill="#8a94a3" stroke="#0d0f12" stroke-width="1.5"/><circle cx="688.6" cy="225" r="5" fill="#ff9f43" stroke="#0d0f12" stroke-width="1.5"/><circle cx="668" cy="225" r="5" fill="#8a94a3" stroke="#0d0f12" stroke-width="1.5"/><path d="M665 423 V610 H950 V303.3 H992" fill="none" stroke="#0d0f12" stroke-width="8"/><path d="M665 423 V610 H950 V303.3 H992" fill="none" stroke="#ff5d5d" stroke-width="4"/><circle cx="665" cy="423" r="5" fill="#ff5d5d" stroke="#0d0f12" stroke-width="1.5"/><circle cx="992" cy="303.3" r="5" fill="#ff5d5d" stroke="#0d0f12" stroke-width="1.5"/><path d="M685.4 423 V585 H930 V276.7 H992" fill="none" stroke="#0d0f12" stroke-width="8"/><path d="M685.4 423 V585 H930 V276.7 H992" fill="none" stroke="#8a94a3" stroke-width="4"/><circle cx="685.4" cy="423" r="5" fill="#8a94a3" stroke="#0d0f12" stroke-width="1.5"/><circle cx="992" cy="276.7" r="5" fill="#8a94a3" stroke="#0d0f12" stroke-width="1.5"/><path d="M705.8 423 V560 H910 V223.3 H992" fill="none" stroke="#0d0f12" stroke-width="8"/><path d="M705.8 423 V560 H910 V223.3 H992" fill="none" stroke="#ffd75f" stroke-width="4"/><circle cx="705.8" cy="423" r="5" fill="#ffd75f" stroke="#0d0f12" stroke-width="1.5"/><circle cx="992" cy="223.3" r="5" fill="#ffd75f" stroke="#0d0f12" stroke-width="1.5"/><path d="M725.8 423 V535 H890 V196.7 H992" fill="none" stroke="#0d0f12" stroke-width="8"/><path d="M725.8 423 V535 H890 V196.7 H992" fill="none" stroke="#ffd75f" stroke-width="4"/><circle cx="725.8" cy="423" r="5" fill="#ffd75f" stroke="#0d0f12" stroke-width="1.5"/><circle cx="992" cy="196.7" r="5" fill="#ffd75f" stroke="#0d0f12" stroke-width="1.5"/><path d="M746 423 V495 H992" fill="none" stroke="#0d0f12" stroke-width="8"/><path d="M746 423 V495 H992" fill="none" stroke="#35c26b" stroke-width="4"/><path d="M992 535 H962 V640 H992" fill="none" stroke="#0d0f12" stroke-width="8"/><path d="M992 535 H962 V640 H992" fill="none" stroke="#35c26b" stroke-width="4"/><path d="M766.4 423 V470 H860 V680 H992" fill="none" stroke="#0d0f12" stroke-width="8"/><path d="M766.4 423 V470 H860 V680 H992" fill="none" stroke="#35c26b" stroke-width="4"/><circle cx="992" cy="495" r="5" fill="#35c26b" stroke="#0d0f12" stroke-width="1.5"/><circle cx="992" cy="535" r="5" fill="#35c26b" stroke="#0d0f12" stroke-width="1.5"/><circle cx="992" cy="640" r="5" fill="#35c26b" stroke="#0d0f12" stroke-width="1.5"/><circle cx="992" cy="680" r="5" fill="#35c26b" stroke="#0d0f12" stroke-width="1.5"/><circle cx="746" cy="423" r="5" fill="#35c26b" stroke="#0d0f12" stroke-width="1.5"/><circle cx="766.4" cy="423" r="5" fill="#35c26b" stroke="#0d0f12" stroke-width="1.5"/><text x="665" y="408" font-size="15" text-anchor="middle" fill="#ff5d5d">1</text><text x="685.4" y="408" font-size="15" text-anchor="middle" fill="#8a94a3">2</text><text x="705.8" y="408" font-size="15" text-anchor="middle" fill="#ffd75f">3</text><text x="725.8" y="408" font-size="15" text-anchor="middle" fill="#ffd75f">4</text><text x="746" y="408" font-size="15" text-anchor="middle" fill="#35c26b">5</text><text x="766.4" y="408" font-size="15" text-anchor="middle" fill="#35c26b">6</text><text x="250" y="490" font-size="17" text-anchor="middle" fill="#ffffff">Smoothieboard V2 Prime, ribbon from G_C</text><text x="100" y="764" font-size="17" text-anchor="middle" fill="#ffffff">12 V supply</text><text x="700" y="120" font-size="17" text-anchor="middle" fill="#ffffff">12 V: + orange, − grey</text><text x="560" y="192" font-size="17" text-anchor="start" fill="#ffffff">Driver board</text><text x="1080" y="160" font-size="17" text-anchor="middle" fill="#ffffff">Laser head</text><text x="1085" y="375" font-size="15" text-anchor="middle" fill="#ffffff">pin 1 to A, pin 2 to K</text><text x="1085" y="397" font-size="15" text-anchor="middle" fill="#ffffff">pins 3, 4 to thermistor</text><text x="1080" y="440" font-size="17" text-anchor="middle" fill="#ffffff">Door switch</text><text x="1070" y="745" font-size="17" text-anchor="middle" fill="#ffffff">Key switch, in series</text></svg></div><figcaption>Full protection: the door switch and a key switch in series between pins 5 and 6, so either one opening stops the laser. A water-flow switch or an emergency-stop contact can join the same chain. Board and equipment drawings are illustrations: the equipment is typical, not a specific model, so follow the printing on yours.</figcaption></figure>
{:/nomarkdown}

### A head without a thermistor

Bridge the **NO NTC** pads with solder. The board then reads a fixed room temperature and **cannot protect the diode from overheating**; use this only for short supervised tests.

{::nomarkdown}
<figure class="xb-fig"><div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Head without thermistor"><svg viewBox="0 0 1200 790" role="img" aria-labelledby="xb-ldd-nontc"><title id="xb-ldd-nontc">Without a thermistor: NO NTC pads bridged, pins 3 and 4 left empty, the safety loop still required.</title><image href="/images/extensions/equipment/smoothieboard-v2-prime-2660.webp" x="10" y="10" width="464" height="464"/><image href="/images/extensions/equipment/bar-power-supply-9-terminal.webp" x="10" y="495" width="460" height="248"/><image href="/images/extensions/laser-diode-driver-breakout/laser-diode-driver-breakout-diagram.png" x="540" y="200" width="288" height="249.7"/><image href="/images/extensions/equipment/laser-diode-head-generic.webp" x="980" y="170" width="200" height="180"/><image href="/images/extensions/equipment/door-switch-generic.webp" x="980" y="520" width="176" height="104"/><path d="M231.6 160 H505 V324 H563" fill="none" stroke="#0d0f12" stroke-width="16"/><path d="M231.6 160 H505 V324 H563" fill="none" stroke="#9aa4b2" stroke-width="12"/><circle cx="231.6" cy="160" r="5" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><circle cx="563" cy="324" r="5" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><path d="M274 712 V765 H522 V150 H688.6 V225" fill="none" stroke="#0d0f12" stroke-width="8"/><path d="M274 712 V765 H522 V150 H688.6 V225" fill="none" stroke="#ff9f43" stroke-width="4"/><path d="M236 712 V778 H506 V345 H490 V135 H668 V225" fill="none" stroke="#0d0f12" stroke-width="8"/><path d="M236 712 V778 H506 V345 H490 V135 H668 V225" fill="none" stroke="#8a94a3" stroke-width="4"/><circle cx="274" cy="712" r="5" fill="#ff9f43" stroke="#0d0f12" stroke-width="1.5"/><circle cx="236" cy="712" r="5" fill="#8a94a3" stroke="#0d0f12" stroke-width="1.5"/><circle cx="688.6" cy="225" r="5" fill="#ff9f43" stroke="#0d0f12" stroke-width="1.5"/><circle cx="668" cy="225" r="5" fill="#8a94a3" stroke="#0d0f12" stroke-width="1.5"/><path d="M665 423 V610 H950 V303.3 H992" fill="none" stroke="#0d0f12" stroke-width="8"/><path d="M665 423 V610 H950 V303.3 H992" fill="none" stroke="#ff5d5d" stroke-width="4"/><circle cx="665" cy="423" r="5" fill="#ff5d5d" stroke="#0d0f12" stroke-width="1.5"/><circle cx="992" cy="303.3" r="5" fill="#ff5d5d" stroke="#0d0f12" stroke-width="1.5"/><path d="M685.4 423 V585 H930 V276.7 H992" fill="none" stroke="#0d0f12" stroke-width="8"/><path d="M685.4 423 V585 H930 V276.7 H992" fill="none" stroke="#8a94a3" stroke-width="4"/><circle cx="685.4" cy="423" r="5" fill="#8a94a3" stroke="#0d0f12" stroke-width="1.5"/><circle cx="992" cy="276.7" r="5" fill="#8a94a3" stroke="#0d0f12" stroke-width="1.5"/><path d="M746 423 V510 H870 V560 H992" fill="none" stroke="#0d0f12" stroke-width="8"/><path d="M746 423 V510 H870 V560 H992" fill="none" stroke="#35c26b" stroke-width="4"/><path d="M766.4 423 V490 H865 V600 H992" fill="none" stroke="#0d0f12" stroke-width="8"/><path d="M766.4 423 V490 H865 V600 H992" fill="none" stroke="#35c26b" stroke-width="4"/><circle cx="992" cy="560" r="5" fill="#35c26b" stroke="#0d0f12" stroke-width="1.5"/><circle cx="992" cy="600" r="5" fill="#35c26b" stroke="#0d0f12" stroke-width="1.5"/><circle cx="746" cy="423" r="5" fill="#35c26b" stroke="#0d0f12" stroke-width="1.5"/><circle cx="766.4" cy="423" r="5" fill="#35c26b" stroke="#0d0f12" stroke-width="1.5"/><text x="665" y="408" font-size="15" text-anchor="middle" fill="#ff5d5d">1</text><text x="685.4" y="408" font-size="15" text-anchor="middle" fill="#8a94a3">2</text><text x="746" y="408" font-size="15" text-anchor="middle" fill="#35c26b">5</text><text x="766.4" y="408" font-size="15" text-anchor="middle" fill="#35c26b">6</text><circle cx="605" cy="356" r="20" fill="none" stroke="#ffd75f" stroke-width="4"/><text x="930" y="60" font-size="17" text-anchor="middle" fill="#ffd75f">NO NTC pads: solder bridge</text><path d="M900 68 L622 345" stroke="#ffd75f" stroke-width="2" stroke-dasharray="6 5" fill="none"/><text x="250" y="490" font-size="17" text-anchor="middle" fill="#ffffff">Smoothieboard V2 Prime, ribbon from G_C</text><text x="100" y="764" font-size="17" text-anchor="middle" fill="#ffffff">12 V supply</text><text x="700" y="120" font-size="17" text-anchor="middle" fill="#ffffff">12 V: + orange, − grey</text><text x="560" y="192" font-size="17" text-anchor="start" fill="#ffffff">Driver board</text><text x="1080" y="160" font-size="17" text-anchor="middle" fill="#ffffff">Laser head</text><text x="1085" y="375" font-size="15" text-anchor="middle" fill="#ffffff">pin 1 to A, pin 2 to K</text><text x="1080" y="505" font-size="17" text-anchor="middle" fill="#ffffff">Door switch</text></svg></div><figcaption>Without a thermistor: NO NTC pads bridged, pins 3 and 4 left empty, the safety loop still required. Board and equipment drawings are illustrations: the equipment is typical, not a specific model, so follow the printing on yours.</figcaption></figure>
{:/nomarkdown}

### Laser modules sold with electronics

A module that has its own 12&nbsp;V input and PWM or TTL input already contains a driver. Do not connect it to LD+ and LD−. Wire it to a PWM output as its manual describes, or through the [laser PSU adapter board](/extensions/laser-psu-adapter-board) if you want hardware safety loops. CO2 tubes and fibre sources never connect to this board.

## How it works {#how-it-works}

The supply passes an electronic fuse that blocks reversed leads and cuts off outside the voltage window. The regulator then holds the chosen current through a sense resistor inside the chip, whatever the diode's voltage. A transistor in the LD− lead opens in step with the PWM signal so the current starts and stops quickly.

Three conditions make the board **ready**: loop closed, thermistor in range, logic supply good. A one-bit memory is set by a rising ARM edge while ready, and cleared the moment any condition fails. **Permit** needs that memory and a high ARM; the laser is driven only while permit and PWM are both high. All of this is logic chips, not firmware.

## Options {#options}

{::nomarkdown}
<div class="xb-tablewrap"><table><thead><tr><th>Option</th><th>As delivered</th><th>Effect</th></tr></thead><tbody><tr><td>Current jumper, 2×3 pins</td><td>No cap: 0.25 A</td><td>One cap across a pair: 0.5 A (top), 0.75 A (middle), 1 A (bottom). Change with power off. A cap that falls off lowers the current.</td></tr><tr><td>NO NTC pads</td><td>Open</td><td>Bridged: fixed value instead of the thermistor</td></tr><tr><td>JP3, JP4, JP7 (underside)</td><td>Open</td><td>Closed: ARM, PERMIT or PWM also appear on the chain socket. Normally leave open.</td></tr><tr><td>JP10 to JP14, JP40 to JP42 (underside)</td><td>Closed</td><td>Cut to switch off a lamp, for example inside an enclosure with optics</td></tr></tbody></table></div>
{:/nomarkdown}

### Chaining


{::nomarkdown}
<figure class="xb-fig"><div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Chaining to a second board"><svg viewBox="0 0 1200 520" role="img" aria-labelledby="xb-ldd-chain"><title id="xb-ldd-chain">Prime header G_C to the driver board, and its chain socket to a screw-terminal breakout.</title><image href="/images/extensions/equipment/smoothieboard-v2-prime-2660.webp" x="10" y="20" width="400" height="400"/><image href="/images/extensions/laser-diode-driver-breakout/laser-diode-driver-breakout-diagram.png" x="500" y="110" width="288" height="249.7"/><image href="/images/extensions/raw-pins-screw-terminal-breakout/raw-pins-screw-terminal-breakout-diagram.png" x="900" y="110" width="280" height="250" preserveAspectRatio="xMidYMid meet"/><g fill="none" stroke="#9aa4b2" stroke-width="12"><path d="M201 149.6H455V234H523"/><path d="M765 234H860V168H945"/></g><g font-size="18" fill="#fff" text-anchor="middle"><text x="210" y="450">Smoothieboard, header G_C</text><text x="644" y="395">Laser diode driver: uses pins 3, 4, 7</text><text x="1040" y="395">Screw-terminal breakout</text><text x="1040" y="420">uses P5, P6, P8, P9</text><text x="600" y="480">Pins 5, 6, 8, 9 keep their numbers: PD10, PI5, PI7, PI2. Nothing arrives on pins 3, 4 and 7.</text></g></svg></div><figcaption>Chaining a second board. Drawings are not to a common scale.</figcaption></figure>
{:/nomarkdown}

Pins 1, 2, 5, 6, 8, 9 and 10 run straight to the chain socket, so a following board can use `PD10` and the other free signals on pins 5, 6, 8 and 9. A board that needs pin 3, 4 or 7 belongs on another header.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table><thead><tr><th>Symptom</th><th>Likely cause and remedy</th></tr></thead><tbody><tr><td>No lamp at all</td><td>No supply, or below about 8.5 V. Measure at the input.</td></tr><tr><td>REV blinks</td><td>Supply leads reversed. Swap them.</td></tr><tr><td>OV lit, nothing works</td><td>Supply above about 16 V. Use a 12 V supply.</td></tr><tr><td>FLT lit</td><td>Supply out of range, overload or overheated input chip. Switch off and check the wiring.</td></tr><tr><td>PWR lit, RDY dark, TMP lit</td><td>Hot head, missing or shorted thermistor. About 10 kΩ between pins 3 and 4 at 25 °C is correct.</td></tr><tr><td>PWR lit, RDY dark, TMP dark</td><td>Safety loop open. Pins 5 and 6 must connect when the door is closed.</td></tr><tr><td>RDY lit, PRM stays dark</td><td>No new ARM edge. Send <code>M811</code>, then <code>M810</code>. Check <code>PD14</code> and the cable.</td></tr><tr><td>PRM lit, PWM dark while firing</td><td>Check <code>pwm_pin = PWM2_2</code> and that the machine is not halted.</td></tr><tr><td>PWM lit, no light</td><td>Diode wiring reversed or open (switch off first), or the current is below the diode threshold. A diode that was connected reversed may be destroyed.</td></tr><tr><td>Weak output at low S values</td><td>Below the threshold current a diode barely emits. Raise <code>minimum_power</code>.</td></tr><tr><td>Disarms after a while</td><td>Head reaching 50 °C. Improve cooling.</td></tr></tbody></table></div>
{:/nomarkdown}

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table><thead><tr><th>File</th><th>What it is</th></tr></thead><tbody><tr><td><a href="/images/extensions/laser-diode-driver-breakout/laser-diode-driver-breakout-schematic.pdf">Schematic (PDF)</a></td><td>Complete circuit</td></tr><tr><td><a href="/images/extensions/laser-diode-driver-breakout/laser-diode-driver-breakout-bom.csv">Parts list (CSV)</a></td><td>Components and footprints</td></tr><tr><td><a href="/images/extensions/laser-diode-driver-breakout/laser-diode-driver-breakout-diagram.png">Board drawing (PNG)</a></td><td>Top view used on this page</td></tr><tr><td><a href="/images/extensions/laser-diode-driver-breakout/laser-diode-driver-breakout-populated-isometric.png">3D view</a></td><td>Rendering of the fitted board; some connector shapes are simplified</td></tr><tr><td><a href="/images/extensions/laser-diode-driver-breakout/laser-diode-driver-breakout-populated-bottom.png">Underside view</a></td><td>Solder links and test pads</td></tr></tbody></table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-ldd-mount-t">
  <title id="xb-ldd-mount-t">Mounting drawing of the laser diode driver board, component side: outline 70 by 60 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="281.7" y="78.0" width="396.7" height="340.0" rx="5.7" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M281.7 56H678.3"/><path d="M281.7 50V62"/><path d="M678.3 50V62"/><path d="M704.3 78.0V418.0"/><path d="M698.3 78.0h12"/><path d="M698.3 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">70</text>
  <text x="716.3" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">60</text>
  <circle cx="281.7" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="269.7" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M223.7 104.0h30" fill="none"/><path d="M257.7 104.0l-8 -4v8z"/><path d="M223.7 104.0v30" fill="none"/><path d="M223.7 138.0l-4 -8h8z"/></g>
  <text x="261.7" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="219.7" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="310.0" cy="106.3" r="9.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M296.9 106.3h26.1M310.0 93.3v26.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="300.9" y="135.4" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.00</text>
  <circle cx="650.0" cy="106.3" r="9.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M636.9 106.3h26.1M650.0 93.3v26.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="659.1" y="135.4" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  65.00, 5.00</text>
  <circle cx="310.0" cy="389.7" r="9.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M296.9 389.7h26.1M310.0 376.6v26.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="300.9" y="370.6" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 55.00</text>
  <circle cx="650.0" cy="389.7" r="9.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M636.9 389.7h26.1M650.0 376.6v26.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="659.1" y="370.6" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  65.00, 55.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 70 × 60&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>65.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>5.00</td><td>55.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>65.00</td><td>55.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec"><thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead><tbody><tr><td>Supply voltage</td><td>Power input</td><td>9 V</td><td>12 V</td><td>15 V</td><td>Design target</td></tr><tr><td>Turn-on / cut-off</td><td>Input protection</td><td>—</td><td>8.48 V / 16.0 V</td><td>—</td><td>Simulated</td></tr><tr><td>Input current limit</td><td>Input protection</td><td>—</td><td>1.5 A</td><td>—</td><td>Calculated</td></tr><tr><td>Input current</td><td>1 A into 5 V, 12 V supply</td><td>—</td><td>0.55 A</td><td>—</td><td>Calculated, 80 % efficiency</td></tr><tr><td>Output current setting</td><td>J8 positions</td><td>0.25 A</td><td>—</td><td>1 A</td><td>Simulated divider: 0.249, 0.499, 0.750, 1.000 A; part tolerances add</td></tr><tr><td>Diode voltage</td><td>12 V supply</td><td>2.4 V</td><td>—</td><td>about 8 V</td><td>Datasheet</td></tr><tr><td>Open-output voltage</td><td>No load</td><td>—</td><td>about 14 V</td><td>—</td><td>Datasheet</td></tr><tr><td>PWM frequency</td><td>PWM input</td><td>60 Hz</td><td>1 kHz</td><td>10 kHz</td><td>Datasheet; pulses at least 40 µs</td></tr><tr><td>Logic level</td><td>ARM, PWM, PERMIT</td><td>—</td><td>3.3 V</td><td>—</td><td>Design; ARM and PWM 11 kΩ to ground, PERMIT through 1 kΩ</td></tr><tr><td>Safety loop resistance</td><td>Pins 5–6</td><td>—</td><td>—</td><td>200 Ω</td><td>Simulated, reads closed at 2.95 V</td></tr><tr><td>Temperature trip</td><td>3435 K, 10 kΩ sensor</td><td>—</td><td>about 50 °C</td><td>—</td><td>Calculated and simulated</td></tr></tbody></table></div>
{:/nomarkdown}

### Component stress limits

{::nomarkdown}
<div class="xb-tablewrap"><table><thead><tr><th>Circuit</th><th>Pin or device stress</th><th>Absolute limit</th></tr></thead><tbody><tr><td>Power input</td><td>Supply voltage held</td><td>Keep within 9 to 15 V; reversed leads are blocked</td></tr><tr><td>LD+, LD−</td><td>Connection to ground, reverse connection, hot plugging</td><td>Not allowed</td></tr><tr><td>ARM, PWM</td><td>Input voltage</td><td>3.3 V logic only</td></tr></tbody></table></div>
{:/nomarkdown}

Watch the temperature of the board and the heatsink during first use and keep air moving over the board at 1&nbsp;A. Laser safety classification and the enclosure are the builder's responsibility.

## Appendix: simulation {#simulation}

Circuit simulations with ngspice, not measurements. They cover the networks around the regulator: current-setting divider, thermistor window, safety loop, supply window, and the transistor gate drive and switch. **The regulator itself has no simulation model, so start-up, current regulation and PWM response are not simulated.** All 17 checks pass.

{::nomarkdown}
<div class="xb-tablewrap"><table><thead><tr><th>Check (all Simulated)</th><th>Result</th><th>Required</th></tr></thead><tbody><tr><td>Current setting, four positions</td><td>0.249, 0.499, 0.750, 1.000 A</td><td>within 4 % at 0.25 A, 3 % at 0.5 A, 2 % at 0.75 A, 0.5 % at 1 A</td></tr><tr><td>Thermistor at 25 / 60 °C (comparator margin)</td><td>+0.68 V / −0.24 V</td><td>allowed / blocked</td></tr><tr><td>Sensor missing / shorted</td><td>−0.30 V / −0.99 V</td><td>blocked</td></tr><tr><td>Safety loop closed / 200 Ω / open</td><td>3.00 / 2.95 / 0.0003 V</td><td>at least 2.6 / 2.5 V, at most 0.4 V</td></tr><tr><td>Supply turn-on / cut-off</td><td>8.48 / 16.0 V</td><td>8 to 9 / 15 to 17 V</td></tr><tr><td>Voltage across the closed LD− switch at 1 A</td><td>50 mV</td><td>at most 100 mV</td></tr></tbody></table></div>
{:/nomarkdown}

{::nomarkdown}
<figure class="xb-fig"><img src="/images/extensions/laser-diode-driver-breakout/simulation/01-current-and-temperature.png" alt="Bar charts: simulated current for the four jumper positions, and temperature comparator margin positive at 25 degrees, near zero at about 50 degrees, negative at 60 degrees and with a shorted sensor."><figcaption>Simulated current settings and over-temperature margin.</figcaption></figure>
{:/nomarkdown}

## Appendix: datasheets {#datasheets}

[![First page of the LT3474 datasheet (Analog Devices): the current regulator](/images/extensions/laser-diode-driver-breakout/datasheets/lt3474-page1.png){: width="420" }](/images/extensions/laser-diode-driver-breakout/datasheets/lt3474.pdf)

LT3474 datasheet (Analog Devices): the current regulator, 20 pages. Select the picture to open it.

[![First page of the TPS2660x industrial eFuse datasheet (Texas Instruments): the input protection chip](/images/extensions/laser-diode-driver-breakout/datasheets/tps2660-page1.png){: width="420" }](/images/extensions/laser-diode-driver-breakout/datasheets/tps2660.pdf)

TPS2660x industrial eFuse datasheet (Texas Instruments): the input protection chip, 55 pages. Select the picture to open it.

[![First page of the PLPT5 447KA datasheet (ams OSRAM): the example laser diode](/images/extensions/laser-diode-driver-breakout/datasheets/plpt5-447ka-page1.png){: width="420" }](/images/extensions/laser-diode-driver-breakout/datasheets/plpt5-447ka.pdf)

PLPT5 447KA datasheet (ams OSRAM): the example laser diode, 15 pages. Select the picture to open it.

See all boards on the [extension boards](/extension-boards) page.
