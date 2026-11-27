---
layout: default
title: "Input protector"
description: "An isolated digital input for a sensor signal that may be well above 3.3 V: pinout, wiring and endstop configuration."
permalink: /extensions/input-protector
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Isolated input</p>
    <h1 id="input-protector">Input protector</h1>
    <p class="xb-lead">Read a sensor signal that may be far above 3.3&nbsp;V with a Smoothieboard input. An isolated receiver separates the sensor side from the controller side, and a transistor gives the controller a plain open-collector signal, like an endstop.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/input-protector/input-protector-diagram.png" alt="Top view of the input protector: a three-contact field connector at the left, a surge diode and resistors, an eight-pin receiver chip in the middle, a transistor and a three-contact host connector at the right.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>1</b><span>isolated digital input, one open-collector output</span></div>
  <div class="xb-stat"><b>About 8.5 V</b><span>typical ON threshold calculated from the receiver&rsquo;s data sheet.</span></div>
  <div class="xb-stat"><b>&plusmn;60 V</b><span>receiver absolute maximum at its input pin</span></div>
  <div class="xb-stat"><b>Separate</b><span>field ground and host ground are not connected</span></div>
  <div class="xb-stat"><b>3 + 3</b><span>contacts on each of the two connectors</span></div>
  <div class="xb-stat"><b>43.2 × 24</b><span>millimetres, two M3 mounting holes</span></div>
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
  <strong>This board is not a surge clamp.</strong> The surge diode clamps at a voltage above the receiver&rsquo;s &plusmn;60&nbsp;V absolute maximum. Do not connect a signal you have not checked against the limits in the <a href="#electrical">electrical specifications</a>.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Channels</td><td>One isolated digital input with one open-collector output</td></tr>
    <tr><td>Receiver</td><td>TI ISO1211D, powered from the field signal itself on the field side and from host 5&nbsp;V on the host side. No separate field-side supply is needed.</td></tr>
    <tr><td>Input network</td><td>100&nbsp;&Omega; and 562&nbsp;&Omega; in series, a 27.4&nbsp;k&Omega; resistor and a 22&nbsp;nF capacitor across the input, and an SMBJ58CA surge diode</td></tr>
    <tr><td>Input threshold</td><td>About 8.5&nbsp;V typical, calculated from the receiver&rsquo;s data sheet for this resistor network.</td></tr>
    <tr><td>Output</td><td>Open collector (MMBT3904), inverting: a high field signal pulls the host output low. A pull-up is needed: the controller&rsquo;s own, or the optional 22&nbsp;k&Omega; link to 5&nbsp;V.</td></tr>
    <tr><td>Isolation</td><td>Inside the receiver chip. The field and host grounds are separate nets.</td></tr>
    <tr><td>Field connector</td><td>J1, Molex KK 2.54&nbsp;mm, three contacts: signal, ground, and one unused</td></tr>
    <tr><td>Host connector</td><td>J2, three contacts: output, ground, 5&nbsp;V. Two footprints for the same contacts: a 2.54&nbsp;mm one and a 2&nbsp;mm JST PH one. Fit one.</td></tr>
    <tr><td>Host supply</td><td>5&nbsp;V on J2 contact 3. The board needs 4.75 to 5.25&nbsp;V. There is no Gadgeteer socket.</td></tr>
    <tr><td>Indicator</td><td>One green light for the receiver state, with a solder link to disable it</td></tr>
    <tr><td>Test points</td><td>Five: field signal, field ground, host output, host ground, and a floating receiver node marked NO PROBE</td></tr>
    <tr><td>Size</td><td>43.2 &times; 24&nbsp;mm, two M3 mounting holes and two cable-tie holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a>, through the <a href="/endstops">Endstops</a> module</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The electrical figures are in the [electrical specifications](#electrical) appendix; the hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side. Most of the test points are on the underside and are not visible in the drawing; they are named in the pinout.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/input-protector/input-protector-diagram.png" alt="Top view of the input protector with eleven numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pl" href="#tour-1" style="left:10.2%;top:53.5%" aria-label="1: field connector">1<span class="xb-pop"><b>Field connector (J1)</b> — a three-contact connector for the sensor side. Contact 1 is the signal, contact 2 the field ground. Contact 3 is not connected to anything and does not power a sensor. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pl" href="#tour-2" style="left:23.2%;top:52%" aria-label="2: surge diode">2<span class="xb-pop"><b>Surge diode</b> — an SMBJ58CA bidirectional suppressor across the field signal and ground. It clips short spikes. <i>Its clamp voltage is higher than the receiver&rsquo;s absolute maximum, so it does not by itself protect the receiver from an over-voltage signal.</i></span></a>
      <a class="xb-mk" href="#tour-3" style="left:33.7%;top:52%" aria-label="3: shunt resistor and capacitor">3<span class="xb-pop"><b>Shunt resistor and capacitor</b> — a 27.4&nbsp;k&Omega; resistor and a 22&nbsp;nF capacitor between the field signal and field ground. With the series resistors they set the input threshold and filter short pulses.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:36.5%;top:22.3%" aria-label="4: series resistor R1">4<span class="xb-pop"><b>First series resistor</b> — R1, 100&nbsp;&Omega;, between the field signal and the sense node.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:43.2%;top:45%" aria-label="5: series resistor R6">5<span class="xb-pop"><b>Second series resistor</b> — R6, 562&nbsp;&Omega;, between the sense node and the receiver input.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:55.3%;top:42.3%" aria-label="6: isolated receiver">6<span class="xb-pop"><b>Isolated receiver</b> — the ISO1211D digital input receiver. It reads the field signal across an isolation barrier, takes its field-side power from the input itself, and drives the host side. Its enable pin is tied to the host 5&nbsp;V.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:75%;top:38.3%" aria-label="7: output transistor">7<span class="xb-pop"><b>Output transistor</b> — an MMBT3904 that turns the receiver&rsquo;s output into an open-collector output. <i>It inverts: a high field signal pulls the host output low.</i></span></a>
      <a class="xb-mk xb-pr" href="#tour-8" style="left:87.3%;top:53.5%" aria-label="8: host connector">8<span class="xb-pop"><b>Host connector (J2)</b> — a three-contact connector for the controller side: contact 1 output, contact 2 host ground, contact 3 host 5&nbsp;V. It has two footprints for the same contacts; fit one. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pb" href="#tour-9" style="left:65.3%;top:15.4%" aria-label="9: green light">9<span class="xb-pop"><b>Green light</b> — lit while the receiver reports a high field signal. A solder link marked &ldquo;CUT TO DISABLE D3&rdquo; disables it.</span></a>
      <a class="xb-mk xb-pr" href="#tour-10" style="left:76.2%;top:64.9%" aria-label="10: pull-up resistor">10<span class="xb-pop"><b>Pull-up resistor</b> — R5, 22&nbsp;k&Omega;, between the host output and a solder link marked PULLUP_EN, which is open as delivered. Close the link only if you want a pull-up to host 5&nbsp;V.</span></a>
      <a class="xb-mk" href="#tour-11" style="left:49.8%;top:76.8%" aria-label="11: cable-tie holes">11<span class="xb-pop"><b>Cable-tie holes</b> — two holes for a cable tie that holds the cables in place.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Field connector (J1)</b> — a three-contact connector for the sensor side. Contact 1 is the signal, contact 2 the field ground. Contact 3 is not connected to anything and does not power a sensor. <i>See the pinout.</i></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Surge diode</b> — an SMBJ58CA bidirectional suppressor across the field signal and ground. It clips short spikes. <i>Its clamp voltage is higher than the receiver&rsquo;s absolute maximum, so it does not by itself protect the receiver from an over-voltage signal.</i></div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Shunt resistor and capacitor</b> — a 27.4&nbsp;k&Omega; resistor and a 22&nbsp;nF capacitor between the field signal and field ground. With the series resistors they set the input threshold and filter short pulses.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>First series resistor</b> — R1, 100&nbsp;&Omega;, between the field signal and the sense node.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Second series resistor</b> — R6, 562&nbsp;&Omega;, between the sense node and the receiver input.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Isolated receiver</b> — the ISO1211D digital input receiver. It reads the field signal across an isolation barrier, takes its field-side power from the input itself, and drives the host side. Its enable pin is tied to the host 5&nbsp;V.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Output transistor</b> — an MMBT3904 that turns the receiver&rsquo;s output into an open-collector output. <i>It inverts: a high field signal pulls the host output low.</i></div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Host connector (J2)</b> — a three-contact connector for the controller side: contact 1 output, contact 2 host ground, contact 3 host 5&nbsp;V. It has two footprints for the same contacts; fit one. <i>See the pinout.</i></div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Green light</b> — lit while the receiver reports a high field signal. A solder link marked &ldquo;CUT TO DISABLE D3&rdquo; disables it.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Pull-up resistor</b> — R5, 22&nbsp;k&Omega;, between the host output and a solder link marked PULLUP_EN, which is open as delivered. Close the link only if you want a pull-up to host 5&nbsp;V.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Cable-tie holes</b> — two holes for a cable tie that holds the cables in place.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1: field connector

At the left of the board. The contacts are numbered from the top when the board is seen as in the tour.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Function</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-sig">Signal</span></td><td>The sensor signal</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Field ground, the return of the sensor circuit</td></tr>
    <tr><td>3</td><td>—</td><td>Not connected to anything on the board. It does not power a sensor: leave it unwired.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J2: host connector

At the right of the board. It has two footprints for the same three contacts, side by side: the larger pads (2.54&nbsp;mm) and the smaller ones (2&nbsp;mm JST PH). **They list the contacts in a different order.** Read from the top of the board, the larger pads are 1, 2, 3 and the smaller pads are 2, 3, 1. Fit one connector only, and check each contact with a meter before you wire it.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Function</th><th>Use</th><th>Smoothieboard V2 Prime (header G_F, J37)</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-sig">Output</span></td><td>Open-collector output, low when the field signal is high</td><td>Pin 3, <code>PB1</code></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Host ground</td><td>Pin 10</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Host 5&nbsp;V, for the receiver&rsquo;s host side</td><td>Pin 2</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Keep the field ground and the host ground apart. Do not join J1 contact 2 to J2 contact 2, or the isolation is defeated. Check where the 5&nbsp;V and 3.3&nbsp;V rails sit on the Prime&rsquo;s physical connector, and check your cable against the table before you connect anything.
</sl-alert>

### Links and test points

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Name</th><th>What it is</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>PULLUP_EN (SJ1)</td><td>A solder link that joins the host output to host 5&nbsp;V through a 22&nbsp;k&Omega; resistor</td><td>Open. Close it only when the controller input tolerates 5&nbsp;V and needs this pull-up.</td></tr>
    <tr><td>CUT TO DISABLE D3 (JP1)</td><td>Disables the green light</td><td>Closed</td></tr>
    <tr><td>FIELD_SIG, FIELD_GND</td><td>Test points on the field side</td><td>Observation only</td></tr>
    <tr><td>HOST_OUT, HOST_GND</td><td>Test points on the host side</td><td>Observation only</td></tr>
    <tr><td>FLOAT SUB NO PROBE</td><td>The receiver&rsquo;s floating substrate node</td><td>Do not probe. It is not a ground.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Smoothieboard V2 Prime</b><span>Running Smoothieware V2, with the pin <code>PB1</code> free on header G_F (J37).</span></div>
  <div class="xb-card"><b>A host cable</b><span>Three conductors from J37 contacts 2, 3 and 10 to J2. This page does not specify the plug.</span></div>
  <div class="xb-card"><b>A sensor or contact</b><span>The worked example is a normally-open dry contact driven by its own isolated supply, here 24&nbsp;V. A powered sensor needs its own check against the electrical specifications.</span></div>
  <div class="xb-card"><b>An isolated field supply</b><span>With its own return, not connected to the controller ground.</span></div>
  <div class="xb-card"><b>A field connector</b><span>A Molex KK 2.54&nbsp;mm housing and contacts for J1.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

The worked example reads a normally-open contact. Switch everything off before you wire.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Minimal wiring diagram">
  <svg viewBox="0 0 1000 300" role="img" aria-labelledby="xb-hookup-t">
    <title id="xb-hookup-t">Minimal wiring: three leads from the Smoothieboard header to the host connector J2, and an isolated supply through a normally-open contact to the field connector J1. The two grounds are not connected.</title>
    <rect x="370" y="60" width="260" height="180" rx="8" fill="#202020" stroke="#606060" stroke-width="1.5"/>
    <text x="500" y="90" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">Input protector</text>
    <text x="500" y="210" text-anchor="middle" font-size="11" fill="#b3b3b3">isolated receiver, grounds separate</text>
    <rect x="370" y="130" width="50" height="50" rx="3" fill="#0d0f12" stroke="#939393"/><text x="395" y="160" text-anchor="middle" font-size="12" fill="#eaeaea">J1</text>
    <rect x="580" y="130" width="50" height="50" rx="3" fill="#0d0f12" stroke="#939393"/><text x="605" y="160" text-anchor="middle" font-size="12" fill="#eaeaea">J2</text>
    <rect x="30" y="20" width="150" height="70" rx="8" fill="#292929" stroke="#606060"/><text x="105" y="50" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">Isolated supply</text><text x="105" y="70" text-anchor="middle" font-size="12" fill="#b3b3b3">24 V, own return</text>
    <rect x="30" y="140" width="150" height="50" rx="8" fill="#292929" stroke="#606060"/><text x="105" y="170" text-anchor="middle" font-size="13" font-weight="700" fill="#eaeaea">Contact (NO)</text>
    <path d="M105 90V140" stroke="#e0a877" stroke-width="4"/><text x="150" y="120" font-size="11" fill="#e0a877">F1</text>
    <path d="M180 165H370" stroke="#6fe08a" stroke-width="4"/><text x="275" y="155" text-anchor="middle" font-size="11" fill="#6fe08a">F2 to J1 contact 1</text>
    <path d="M180 40H300V190H370" stroke="#939393" stroke-width="4" fill="none"/><text x="240" y="32" text-anchor="middle" font-size="11" fill="#b3b3b3">F3 to J1 contact 2</text>
    <rect x="820" y="130" width="150" height="80" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="895" y="165" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Smoothieboard</text><text x="895" y="185" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">V2 Prime</text>
    <path d="M630 155H820" stroke="#5fb3ff" stroke-width="4"/><path d="M630 170H820" stroke="#939393" stroke-width="4"/><path d="M630 140H820" stroke="#ff9d4d" stroke-width="4"/>
    <text x="725" y="125" text-anchor="middle" font-size="11" fill="#b3b3b3">H1 5 V, H2 PB1, H3 GND</text>
  </svg>
  </div>
  <figcaption>Minimal wiring, schematic and not to scale. The field side and the host side share no ground.</figcaption>
</figure>

<ol class="xb-steps">
  <li class="xb-step">
    <h3>Switch everything off</h3>
    <p>Power down the Smoothieboard and the field supply.</p>
  </li>
  <li class="xb-step">
    <h3>Mount the board</h3>
    <p>Fix it with two M3 screws on standoffs, using the hole positions in the <a href="#mounting">mounting appendix</a>.</p>
  </li>
  <li class="xb-step">
    <h3>Wire the host side with three leads</h3>
    <p><b>H1:</b> Prime J37 pin 2 (5&nbsp;V) to J2 contact 3. <b>H2:</b> J37 pin 3 (<code>PB1</code>) to J2 contact 1. <b>H3:</b> J37 pin 10 (ground) to J2 contact 2. The other seven contacts of J37 stay unused.</p>
  </li>
  <li class="xb-step">
    <h3>Wire the field side with three leads</h3>
    <p><b>F1:</b> the isolated supply&rsquo;s +24&nbsp;V to the first contact of the switch. <b>F2:</b> the second contact of the switch to J1 contact 1. <b>F3:</b> the supply&rsquo;s 0&nbsp;V to J1 contact 2. Leave J1 contact 3 and the NO PROBE test point unwired, and keep SJ1 open.</p>
  </li>
  <li class="xb-step">
    <h3>Check before you power</h3>
    <p>With both supplies off, check with a meter that there is no connection between H3 and F3, and none between neighbouring contacts of a plug.</p>
  </li>
  <li class="xb-step">
    <h3>Add the input to your configuration</h3>
    <p>Copy <a href="#config-input">example 1</a> into the configuration file on the SD card, restart the board, power the field supply, and send <code>M119</code> with the contact open and then closed.</p>
    <p class="xb-expect"><b>You should see:</b> the entry for <code>PB1</code> changes from 0 to 1 when the contact closes, and the green light comes on.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

The board needs no module of its own: the output is an ordinary pin of the controller. The lines go into the configuration file on the controller&rsquo;s SD card.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>See the state of the input in the status report</td><td><a href="/endstops">Endstops</a>, with homing off</td><td><a href="#config-input">1. Read the input</a></td></tr>
    <tr><td>Use the input as an axis homing switch</td><td><a href="/endstops">Endstops</a>, as a homing switch</td><td><a href="#config-homing">2. Homing switch</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

A pin can be claimed by one entry only: remove example 1 before you add example 2.

### 1. Read the input (Endstops module) {#config-input}

```ini
[endstops]
field_contact.enable           = true
field_contact.pin              = PB1!^    # header G_F pin 3: J2 contact 1, inverted, with the pull-up on
field_contact.axis             = X
field_contact.homing_direction = none     # read only: no homing
field_contact.limit_enable     = false    # and no limit
```

`^` turns on the input pull-up of the controller, which the open-collector output needs, and `!` inverts the signal, since the output is low when the field signal is high. `M119` then shows the pin changing from 0 to 1 when the contact closes. These settings neither home nor limit any axis.

How to read the result:

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Situation</th><th>At the output</th><th>Expected <code>M119</code></th></tr></thead>
  <tbody>
    <tr><td>Contact open, supplies present</td><td>The pull-up holds PB1 high</td><td><code>0</code></td></tr>
    <tr><td>Contact closed, supplies present</td><td>The transistor pulls PB1 low</td><td><code>1</code></td></tr>
    <tr><td>Field wire broken</td><td>The receiver sees no signal</td><td>Normally <code>0</code>, the same as an open contact. This wiring cannot tell the two apart.</td></tr>
    <tr><td>Host power missing or restarting</td><td>The receiver&rsquo;s output is undefined</td><td>No guaranteed reading. Do not take it as a known state.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### 2. Homing switch (Endstops module) {#config-homing}

The same input as the minimum-end switch of the X axis, searching toward it for at most 10&nbsp;mm. Start with the carriage less than 8&nbsp;mm from the switch:

```ini
[endstops]
minx.enable           = true
minx.pin              = PB1!^
minx.axis             = X
minx.homing_direction = home_to_min
minx.homing_position  = 0       # the position the axis has when the switch closes
minx.max_travel       = 10      # give up after this many millimetres
minx.fast_rate        = 5       # mm/s for the first approach
minx.slow_rate        = 1       # mm/s for the second approach
minx.retract          = 2       # mm to back off between the two
minx.limit_enable     = false   # no limit
```

Choose the distances and rates for your own machine. Home with `G28 X0` when `grbl_mode` is false, or `G28.2 X0` when it is true. Keep the machine&rsquo;s independent stop within reach, and stop at once if the axis moves away from the switch. The full list of settings is on the [endstops](/endstops) page.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 250" role="img" aria-labelledby="xb-how-t">
    <title id="xb-how-t">The field signal passes the series resistors and clamp into the isolated receiver; across the barrier the receiver drives a transistor that pulls the host output low.</title>
    <g font-size="13" font-weight="700" text-anchor="middle" fill="#eaeaea">
      <rect x="20" y="85" width="170" height="80" rx="8" fill="#1f2226" stroke="#e4e4e4"/><text x="105" y="120">Field signal J1</text><text x="105" y="140" font-weight="400" fill="#b3b3b3">from a contact or sensor</text>
      <rect x="250" y="85" width="190" height="80" rx="8" fill="#292929" stroke="#e0a877"/><text x="345" y="120">Input network</text><text x="345" y="140" font-weight="400" fill="#b3b3b3">resistors, filter, surge diode</text>
      <rect x="500" y="85" width="190" height="80" rx="8" fill="#292929" stroke="#5fb3ff"/><text x="595" y="120">Isolated receiver</text><text x="595" y="140" font-weight="400" fill="#b3b3b3">ISO1211D</text>
      <rect x="750" y="85" width="230" height="80" rx="8" fill="#292929" stroke="#6fe08a"/><text x="865" y="120">Transistor and J2</text><text x="865" y="140" font-weight="400" fill="#b3b3b3">open collector, inverting</text>
    </g>
    <g stroke-width="3" fill="none" stroke="#b3b3b3"><path d="M190 125H250"/><path d="M440 125H500"/><path d="M690 125H750"/></g>
    <path d="M595 40V230" stroke="#606060" stroke-width="2" stroke-dasharray="6 6"/>
    <text x="595" y="30" text-anchor="middle" font-size="12" fill="#b3b3b3">isolation barrier inside the chip</text>
    <text x="250" y="60" text-anchor="middle" font-size="12" fill="#e0a877">FIELD SIDE</text>
    <text x="865" y="60" text-anchor="middle" font-size="12" fill="#6fe08a">HOST SIDE</text>
  </svg>
  </div>
  <figcaption>The path of the sensor signal to the controller.</figcaption>
</figure>
{:/nomarkdown}

On the **field side**, the signal goes through a 100&nbsp;&Omega; resistor and a 562&nbsp;&Omega; resistor to the receiver&rsquo;s input. A 27.4&nbsp;k&Omega; resistor and a 22&nbsp;nF capacitor across the input, with the series resistors, set the threshold at about 8.5&nbsp;V (typical, from the data sheet) and filter short pulses. The SMBJ58CA diode clips spikes. The receiver takes its field-side power from the input, so no separate field supply is needed for the board.

The receiver reports a high field signal as a high output, a low or open input as low, and has an undetermined output when it is not powered. Its enable pin is tied to host 5&nbsp;V.

On the **host side**, the receiver drives an MMBT3904 through a 27.4&nbsp;k&Omega; resistor. The transistor&rsquo;s emitter is on the host ground and its collector reaches the output through 470&nbsp;&Omega;. A high field signal turns it on and pulls the output low. A low or open field signal turns it off and leaves the output floating, which is why a pull-up is needed.

## Troubleshooting {#troubleshooting}

What the light tells you:

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-green"></span>Green (field high)</th></tr></thead>
  <tbody>
    <tr><td>Where</td><td>Top of the board, marker 9 of the <a href="#tour">board tour</a></td></tr>
    <tr><td>Lit means</td><td>The receiver reports a high field signal</td></tr>
    <tr><td>Dark means</td><td>The field signal is low or open, host 5&nbsp;V is missing, or the light is disabled</td></tr>
    <tr><td>Disable it</td><td>Cut the solder link marked &ldquo;CUT TO DISABLE D3&rdquo;</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>When you see</th><th>It means</th><th>Do this</th></tr></thead>
  <tbody>
    <tr><td><code>M119</code> stays at 0 with the contact closed</td><td>The field signal does not reach the receiver, or the host side has no 5&nbsp;V.</td><td>With the supplies off, check J1 contacts 1 and 2 and J2 contacts 1 to 3 with a meter. Check that the field supply is on and above the threshold, and that 5&nbsp;V reaches J2 contact 3.</td></tr>
    <tr><td><code>M119</code> stays at 1 with the contact open</td><td>The output is held low: a short to host ground, or a contact that is not normally open.</td><td>Check for a short between J2 contact 1 and contact 2, and check the contact type. Do not close the PULLUP_EN link as a shortcut: it selects a 5&nbsp;V pull-up and this example uses the controller&rsquo;s own.</td></tr>
    <tr><td>The green light is on but <code>M119</code> reads 0</td><td>The receiver works, but the output does not reach <code>PB1</code>.</td><td>Check J2 contact 1 to J37 pin 3, and that the configuration line has <code>^</code> and <code>!</code>.</td></tr>
    <tr><td>The reading is wrong only at some voltages</td><td>The signal is near the threshold.</td><td>Measure the field voltage at J1. The typical threshold is about 8.5&nbsp;V.</td></tr>
    <tr><td>Wrong or unreadable contact order on J2</td><td>The two connector footprints list the contacts differently.</td><td>Re-check with a meter and the table in the pinout.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/). Include the text printed on your board and what `M119` reports.

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/input-protector/input-protector-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram.</td></tr>
    <tr><td><a href="/images/extensions/input-protector/input-protector-bom-standard.csv">Parts list, 2.54 mm host connector (CSV)</a></td><td>Every component with its value, footprint and position</td></tr>
    <tr><td><a href="/images/extensions/input-protector/input-protector-bom-stemma.csv">Parts list, 2 mm JST PH host connector (CSV)</a></td><td>The same, with the compact host connector</td></tr>
    <tr><td><a href="/images/extensions/input-protector/input-protector-diagram.png">Board drawing (SVG)</a></td><td>The top view used on this page, at full resolution</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the corner marked 0, 0 with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 473" role="img" aria-labelledby="xb-inpro-mount-t">
  <title id="xb-inpro-mount-t">Mounting drawing of the input protector, component side: outline 43.2 by 24 millimetres with 2 mounting holes and 2 cable-tie holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="180.0" y="78.0" width="600.0" height="333.3" rx="20.8" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M180.0 56H780.0"/><path d="M180.0 50V62"/><path d="M780.0 50V62"/><path d="M806.0 78.0V411.3"/><path d="M800.0 78.0h12"/><path d="M800.0 411.3h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">43.2</text>
  <text x="818.0" y="249.7" font-size="15" font-weight="700" fill="#eaeaea">24</text>
  <circle cx="180.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="168.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M122.0 104.0h30" fill="none"/><path d="M156.0 104.0l-8 -4v8z"/><path d="M122.0 104.0v30" fill="none"/><path d="M122.0 138.0l-4 -8h8z"/></g>
  <text x="160.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="118.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="318.9" cy="355.8" r="22.2" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M292.7 355.8h52.4M318.9 329.6v52.4" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="296.7" y="323.6" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  10.00, 20.00</text>
  <circle cx="596.7" cy="355.8" r="22.2" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M570.4 355.8h52.4M596.7 329.6v52.4" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="618.9" y="313.5" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  30.00, 20.00</text>
  <circle cx="443.9" cy="341.9" r="17.4" fill="#191919" stroke="#b3b3b3" stroke-width="1.5"/>
  <circle cx="513.3" cy="341.9" r="17.4" fill="#191919" stroke="#b3b3b3" stroke-width="1.5"/>
  <text x="478.6" y="377.2" text-anchor="middle" font-size="12" fill="#b3b3b3">cable tie</text>
  <text x="480.0" y="441.3" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 43.2 × 24&nbsp;mm, corners rounded to a 1.5&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>10.00</td><td>20.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>30.00</td><td>20.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>–</td><td>19.00</td><td>19.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
    <tr><td>–</td><td>24.00</td><td>19.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
  </tbody>
</table></div>

{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

A dash means that no value is given or the figure does not apply.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Conditions</th></tr></thead>
  <tbody>
    <tr><td>Field signal, ON threshold</td><td>J1 contact 1</td><td>—</td><td>8.475 V</td><td>—</td><td>Typical, interpolated from the receiver&rsquo;s data sheet for the 100&nbsp;&Omega; and 562&nbsp;&Omega; series resistors.</td></tr>
    <tr><td>Surge diode</td><td>Across the field input</td><td>—</td><td>58 V</td><td>93.6 V</td><td>SMBJ58CA, bidirectional: 58&nbsp;V standoff and 93.6&nbsp;V clamp at its stated pulse. This clamp is above the receiver&rsquo;s &plusmn;60&nbsp;V absolute maximum</td></tr>
    <tr><td>Host supply</td><td>J2 contact 3</td><td>4.75 V</td><td>5 V</td><td>5.25 V</td><td>Required supply range</td></tr>
    <tr><td>Host pull-up current</td><td>Host output</td><td>—</td><td>—</td><td>0.5 mA</td><td>Limit for the combined pull-ups</td></tr>
    <tr><td>Optional pull-up</td><td>SJ1, R5</td><td>—</td><td>22 k&Omega;</td><td>—</td><td>To host 5&nbsp;V when the link is closed; open as delivered</td></tr>
    <tr><td>Output state</td><td>J2 contact 1</td><td>—</td><td>Low when the field signal is high</td><td>—</td><td>Inverting, through an MMBT3904 and 470&nbsp;&Omega;</td></tr>
    <tr><td>Behaviour when the host is unpowered</td><td>Output</td><td>—</td><td>Undefined</td><td>—</td><td>The receiver&rsquo;s output is undetermined when it is unpowered</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Component stress limits

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Circuit</th><th>Pin or device stress</th><th>Absolute limit</th></tr></thead>
  <tbody>
    <tr><td>Receiver</td><td>Voltage at its input pin</td><td>&plusmn;60&nbsp;V; the data sheet is the reference</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
