---
layout: default
title: "DC SSR board"
description: "A solid-state relay for one DC load, switched by a Gadgeteer enable signal: pinout, wiring, configuration and limits."
permalink: /extensions/dc-ssr-board
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Solid-state DC output</p>
    <h1 id="dc-ssr-board">DC SSR board</h1>
    <p class="xb-lead">Switch one low-voltage DC load silently, from one Gadgeteer output: a heater, for example. Two MOSFETs wired back to back do the switching, and an isolated driver carries the command across.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/dc-ssr-board/dc-ssr-board-diagram.png" alt="Top view of the DC solid-state relay board: a two-screw terminal at the top left, a fuse holder and a suppressor on the left, two power transistors in the middle, a driver chip at the right and a Gadgeteer socket at the bottom right.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>1</b><span>DC channel, silent MOSFET switching</span></div>
  <div class="xb-stat"><b>0–30 V</b><span>working envelope assumed by the design, 32&nbsp;V ceiling. Not a rating.</span></div>
  <div class="xb-stat"><b>Not rated</b><span>no load current rating</span></div>
  <div class="xb-stat"><b>30 A</b><span>blade fuse named in the design</span></div>
  <div class="xb-stat"><b>3 of 10</b><span>Gadgeteer contacts used: 3.3&nbsp;V, enable, ground</span></div>
  <div class="xb-stat"><b>65 × 50</b><span>millimetres, four M3 mounting holes</span></div>
</div>

<nav class="xb-nav" aria-label="On this page">
  <a href="#specs">Tech specs</a>
  <a href="#tour">Board tour</a>
  <a href="#pinout">Pinout</a>
  <a href="#what-you-need">What you need</a>
  <a href="#get-started">Get started</a>
  <a href="#configuration">Configuration</a>
  <a href="#loads">Wiring the load</a>
  <a href="#how-it-works">How it works</a>
  <a href="#troubleshooting">Troubleshooting</a>
  <a href="#downloads">Downloads</a>
  <a href="#mounting">Mounting</a>
  <a href="#electrical">Electrical</a>
</nav>
{:/nomarkdown}

<sl-alert variant="danger" open>
  <sl-icon slot="icon" name="lightning-charge"></sl-icon>
  <strong>DC only, and not for mains.</strong> The board is printed &ldquo;DC functional only, no mains, no hipot&rdquo;. Never connect an AC or mains circuit to it: a triac SSR such as the <a href="/extensions/ac-ssr-board">AC SSR board</a> is the AC part. Its isolation is functional and not tested to any safety standard.
</sl-alert>

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="cone-striped"></sl-icon>
<strong>This board has no load current rating.</strong> It is not suitable for AC loads, and the load must be given adequate heat sinking.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Channels</td><td>One DC output on a two-screw terminal. The two terminals are not tied to the controller ground: the switched path floats.</td></tr>
    <tr><td>Switching element</td><td>Two CSD18536KTT power MOSFETs (60&nbsp;V) wired back to back, driven by a TPSI3050 isolated driver in three-wire enable mode. The back-to-back pair blocks current in both directions when off.</td></tr>
    <tr><td>Working voltage</td><td>0–30&nbsp;V DC, 32&nbsp;V maximum. Check polarity before connecting a load.</td></tr>
    <tr><td>Load current</td><td>No load current rating. Heat sinking is required and depends on voltage, duty cycle and ambient temperature. DC loads only; never AC.</td></tr>
    <tr><td>Protection</td><td>A 30&nbsp;A, 32&nbsp;V mini blade fuse in the SW A path, a 33&nbsp;V bidirectional transient suppressor across the switched path, and 100&nbsp;k&Omega; pull-downs that keep the transistors off. <b>Inductive loads need an external freewheel diode</b>: the board does not have one.</td></tr>
    <tr><td>Load terminal</td><td>One 2-way screw terminal, 10&nbsp;mm pitch, marked SW A and SW B</td></tr>
    <tr><td>Control socket</td><td>One 10-contact Gadgeteer socket (Samtec SHF-105). Three contacts are used. The board has no second socket and cannot be chained.</td></tr>
    <tr><td>Control signal</td><td>Enable, active high, with a 10&nbsp;k&Omega; pull-down</td></tr>
    <tr><td>Control supply</td><td>3.3&nbsp;V on contact 1: it powers the driver and the green light. The worst-case current is not specified yet.</td></tr>
    <tr><td>Isolation</td><td>Functional isolation inside the driver chip. Not a safety rating, not tested, and not for mains.</td></tr>
    <tr><td>Indicator</td><td>Green light for the enable input, with a solder link to disable it</td></tr>
    <tr><td>Test points</td><td>Five: 3V3, GND_H, EN, VDRV and COM</td></tr>
    <tr><td>Size</td><td>65 &times; 50&nbsp;mm, two-layer board with 2&nbsp;oz outer copper, M3 mounting holes and two cable-tie holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> and the <a href="/switch">Switch module</a></td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its limits and its basis is in the [electrical specifications](#electrical) appendix; the hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/dc-ssr-board/dc-ssr-board-diagram.png" alt="Top view of the DC solid-state relay board with thirteen numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:11.8%;top:19%" aria-label="1: terminal A">1<span class="xb-pop"><b>Terminal SW A</b> — left screw of the two-screw terminal. One end of the switched DC path. The fuse is in this path. <i>Either end can be the supply or the load: the board has no polarity marking.</i></span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:26.8%;top:19%" aria-label="2: terminal B">2<span class="xb-pop"><b>Terminal SW B</b> — right screw. The other end of the switched DC path.</span></a>
      <a class="xb-mk xb-pl" href="#tour-3" style="left:7.3%;top:52.6%" aria-label="3: fuse holder">3<span class="xb-pop"><b>Fuse holder</b> — a mini blade-fuse holder in the SW A path. The design names a 30&nbsp;A, 32&nbsp;V automotive blade fuse.</span></a>
      <a class="xb-mk xb-pl" href="#tour-4" style="left:21.6%;top:59.7%" aria-label="4: transient suppressor">4<span class="xb-pop"><b>Transient suppressor</b> — a 33&nbsp;V bidirectional suppressor across the switched path. It clips short voltage spikes; it is no replacement for a freewheel diode on an inductive load.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:38%;top:47.5%" aria-label="5: upper transistor">5<span class="xb-pop"><b>Power transistor</b> — one of two 60&nbsp;V MOSFETs wired back to back, so the switch blocks current in both directions when off. They heat up under load.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:38%;top:71%" aria-label="6: lower transistor">6<span class="xb-pop"><b>Power transistor</b> — the second MOSFET of the back-to-back pair.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:75.9%;top:49%" aria-label="7: isolated driver">7<span class="xb-pop"><b>Isolated driver</b> — the TPSI3050 chip. It carries the enable signal across an isolation barrier and makes the floating gate supply for the two transistors. <i>Functional isolation only: not a safety rating.</i></span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:62.9%;top:44.5%" aria-label="8: floating supply capacitors">8<span class="xb-pop"><b>Floating supply capacitors</b> — two 2.2&nbsp;&micro;F capacitors that smooth the gate supply made by the driver.</span></a>
      <a class="xb-mk" href="#tour-9" style="left:58.2%;top:52.6%" aria-label="9: gate resistors">9<span class="xb-pop"><b>Gate resistors</b> — 10&nbsp;&Omega; resistors (one beside each transistor) between the driver and the transistor gates.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-10" style="left:95.5%;top:27.2%" aria-label="10: green command light">10<span class="xb-pop"><b>Green command light</b> — lit while the enable input is HIGH. <i>It does not show that the load conducts.</i></span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-11" style="left:90.3%;top:27.5%" aria-label="11: indicator link">11<span class="xb-pop"><b>Indicator link</b> — solder bridge JP1, closed on delivery. Cut it to disable the green light for good.</span></a>
      <a class="xb-mk xb-pr" href="#tour-12" style="left:93.6%;top:84.5%" aria-label="12: control socket">12<span class="xb-pop"><b>Control socket</b> — the 10-contact Gadgeteer socket. Three contacts are used: 3.3&nbsp;V on contact 1, enable on contact 3 and ground on contact 10. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pb" href="#tour-13" style="left:57.5%;top:8.3%" aria-label="13: cable tie holes">13<span class="xb-pop"><b>Cable-tie holes</b> — two holes for a cable tie that holds the control cable in place.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Terminal SW A</b> — left screw of the two-screw terminal. One end of the switched DC path. The fuse is in this path. <i>Either end can be the supply or the load: the board has no polarity marking.</i></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Terminal SW B</b> — right screw. The other end of the switched DC path.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Fuse holder</b> — a mini blade-fuse holder in the SW A path. The design names a 30&nbsp;A, 32&nbsp;V automotive blade fuse.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Transient suppressor</b> — a 33&nbsp;V bidirectional suppressor across the switched path. It clips short voltage spikes; it is no replacement for a freewheel diode on an inductive load.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Power transistor</b> — one of two 60&nbsp;V MOSFETs wired back to back, so the switch blocks current in both directions when off. They heat up under load.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Power transistor</b> — the second MOSFET of the back-to-back pair.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Isolated driver</b> — the TPSI3050 chip. It carries the enable signal across an isolation barrier and makes the floating gate supply for the two transistors. <i>Functional isolation only: not a safety rating.</i></div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Floating supply capacitors</b> — two 2.2&nbsp;&micro;F capacitors that smooth the gate supply made by the driver.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Gate resistors</b> — 10&nbsp;&Omega; resistors (one beside each transistor) between the driver and the transistor gates.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Green command light</b> — lit while the enable input is HIGH. <i>It does not show that the load conducts.</i></div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Indicator link</b> — solder bridge JP1, closed on delivery. Cut it to disable the green light for good.</div></li>
    <li id="tour-12"><span class="xb-n">12</span><div><b>Control socket</b> — the 10-contact Gadgeteer socket. Three contacts are used: 3.3&nbsp;V on contact 1, enable on contact 3 and ground on contact 10. <i>See the pinout.</i></div></li>
    <li id="tour-13"><span class="xb-n">13</span><div><b>Cable-tie holes</b> — two holes for a cable tie that holds the control cable in place.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1: control socket

A 2 &times; 5 Gadgeteer socket, at the bottom right of the board in the tour. The design numbers its contacts with 1 at the upper end of the left-hand column when the socket is read on the drawing.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J1 contact</th><th>Function</th><th>Use</th><th>Smoothieboard V2 Prime (header G_F, J37)</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Supply of the driver chip and the green light</td><td>Pin 1</td></tr>
    <tr><td>2</td><td>—</td><td>Not connected</td><td>Leave open</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">EN</span></td><td>Enable: HIGH switches the load on</td><td>Pin 3, <code>PB1</code></td></tr>
    <tr><td>4–9</td><td>—</td><td>Not connected</td><td>Leave open</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Control ground</td><td>Pin 10</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  The design notes record an unresolved discrepancy about where the 3.3&nbsp;V and 5&nbsp;V rails sit on the Prime&rsquo;s physical connector. Check the contact numbers of your cable and controller against the table before you connect anything: a mix-up would put 5&nbsp;V on the 3.3&nbsp;V driver.
</sl-alert>

The control ground is not the load ground. Never join one to the other.

### J2: switched DC terminal

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Screw</th><th>Marking</th><th>Function</th></tr></thead>
  <tbody>
    <tr><td>Left</td><td>SW A</td><td>One end of the switched path, through the fuse</td></tr>
    <tr><td>Right</td><td>SW B</td><td>The other end of the switched path</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The board is printed &ldquo;SW A/B FLOAT&rdquo;: neither screw is joined to the control ground. Which end is the supply and which the load, and the polarity, are not marked; check them before connecting.

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Smoothieboard V2 Prime</b><span>Running Smoothieware V2, with one free output pin on header G_F (J37).</span></div>
  <div class="xb-card"><b>A Gadgeteer cable</b><span>A 10-contact cable between the controller and J1. This page does not specify the cable.</span></div>
  <div class="xb-card"><b>A DC supply and load</b><span>Within 0–30&nbsp;V and well within the fuse and what you have verified. A resistive load, or an inductive load with an external freewheel diode.</span></div>
  <div class="xb-card"><b>A 30&nbsp;A, 32&nbsp;V mini blade fuse</b><span>The design names this fuse. Choose one to protect your wiring and load.</span></div>
  <div class="xb-card"><b>A heat sink</b><span>The transistors&rsquo; drain tabs are live load nodes, so the cooling must be insulated. Size the heat sink for your load.</span></div>
  <div class="xb-card"><b>An enclosure</b><span>With strain relief on the load wires.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

These steps check the control side first, with no load connected.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Minimal wiring diagram">
  <svg viewBox="0 0 1000 340" role="img" aria-labelledby="xb-hookup-t">
    <title id="xb-hookup-t">Minimal wiring: the Smoothieboard connected to the control socket, and a DC supply, the board and a load in series through the two screws.</title>
    <rect x="360" y="110" width="320" height="200" rx="8" fill="#1b2028" stroke="#59616e" stroke-width="1.5"/>
    <text x="520" y="132" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">DC solid-state relay board</text>
    <text x="420" y="222" text-anchor="middle" font-size="11" fill="#a9b4c2">SW A</text>
    <text x="620" y="222" text-anchor="middle" font-size="11" fill="#a9b4c2">SW B</text>
    <rect x="365" y="262" width="60" height="28" rx="3" fill="#0d0f12" stroke="#8a94a3"/>
    <text x="395" y="280" text-anchor="middle" font-size="11" fill="#e6ebf2">J1</text>
    <rect x="30" y="230" width="150" height="80" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/>
    <text x="105" y="266" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Smoothieboard</text>
    <text x="105" y="286" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">V2 Prime</text>
    <path d="M180 276H365" stroke="#5fb3ff" stroke-width="4" fill="none"/>
    <text x="272" y="318" text-anchor="middle" font-size="11" fill="#a9b4c2">3.3 V, EN, GND</text>
    <rect x="30" y="20" width="160" height="70" rx="8" fill="#212936" stroke="#59616e"/>
    <text x="110" y="52" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">DC supply</text>
    <text x="110" y="72" text-anchor="middle" font-size="12" fill="#a9b4c2">0–30 V (design)</text>
    <rect x="810" y="20" width="160" height="70" rx="8" fill="#212936" stroke="#59616e"/>
    <text x="890" y="60" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">Your load</text>
    <path d="M190 40H420V200" fill="none" stroke="#e0a877" stroke-width="5"/>
    <path d="M620 200V40H810" fill="none" stroke="#e0a877" stroke-width="5"/>
    <path d="M190 70H810" stroke="#9cc3ff" stroke-width="5"/>
    <g font-size="12" fill="#e6ebf2">
      <text x="300" y="34" text-anchor="middle" fill="#e0a877">One supply wire, to SW A</text>
      <text x="720" y="34" text-anchor="middle" fill="#e0a877">From SW B to the load</text>
      <text x="500" y="88" text-anchor="middle" fill="#9cc3ff">The other supply wire goes straight to the load</text>
    </g>
  </svg>
  </div>
  <figcaption>Minimal wiring, schematic and not to scale. The board is in series with one wire of the DC circuit. The other wire goes round it.</figcaption>
</figure>

<ol class="xb-steps">
  <li class="xb-step">
    <h3>Switch everything off</h3>
    <p>Power down the Smoothieboard and the DC supply. Nothing is connected to the SW A and SW B screws yet.</p>
  </li>
  <li class="xb-step">
    <h3>Mount the board</h3>
    <p>Fix it with four M3 screws on standoffs, using the hole positions in the <a href="#mounting">mounting appendix</a>. Fit an insulated heat sink to the transistors.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the control side</h3>
    <p>Join J1 contacts <b>1</b> (3.3&nbsp;V), <b>3</b> (enable) and <b>10</b> (ground) to the controller.</p>
  </li>
  <li class="xb-step">
    <h3>Add the output to your configuration</h3>
    <p>Copy <a href="#configuration">example 1</a> into the configuration file on the Smoothieboard&rsquo;s SD card, then restart the board.</p>
  </li>
  <li class="xb-step">
    <h3>Test without a load</h3>
    <p>With the DC supply still off, power the Smoothieboard and send:</p>
    <pre><code>M64.1</code></pre>
    <p class="xb-expect"><b>You should see:</b> the green light at the right of the board lights. Send <code>M65.1</code>: it goes out. The switch itself cannot be tested without a supply.</p>
    <p>If the light does not follow the command, go to <a href="#troubleshooting">troubleshooting</a> before going any further.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the supply and the load</h3>
    <p>Follow <a href="#loads">Wiring the load</a>, with the supply off.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

Smoothieware has no setting called &ldquo;DC SSR board&rdquo;. The board follows one output pin of the controller, and the Switch module or the Temperature control module can drive it. The lines go into the configuration file on the controller&rsquo;s SD card.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Switch the load on and off from G-code or the console</td><td><a href="/switch">Switch</a>, digital output</td><td><a href="#config-onoff">1. On and off</a></td></tr>
    <tr><td>Hold a temperature with a resistive heater</td><td><a href="/temperaturecontrol">Temperature control</a>, on/off regulation</td><td><a href="#config-heater">2. Heater</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

A pin can be claimed by one entry only, so a pin that moves to example 2 loses its entry from example 1.

### 1. On and off (Switch module) {#config-onoff}

```ini
[switch]
dcssr.enable            = true
dcssr.output_pin        = PB1        # header G_F pin 3, the enable contact J1.3
dcssr.output_type       = digital    # plain on/off
dcssr.input_on_command  = M64
dcssr.input_off_command = M65
dcssr.subcode           = 1          # M64.1 on, M65.1 off
dcssr.startup_state     = false      # off when the board starts
dcssr.halt_set_to       = false      # off when the machine halts
```

If your file already has a `[switch]` section, add the `dcssr` lines to it instead of creating a second one. Typing `switch dcssr on` or `switch dcssr off` in the console does the same as the commands.

- **The command numbers are yours to choose.** `M64` and `M65` are used because Smoothieware V2 does not use them for anything else. Any free M-code works.
- **Off at power-up and on halt.** `startup_state = false` and `halt_set_to = false` ask for a LOW level, and a 10&nbsp;k&Omega; resistor on the board holds the input LOW when nothing drives it. Check how the pin behaves during reset and brown-out.
- **PWM is not specified.** The design makes no statement about switching speed or PWM. Keep `output_type = digital` until it has been tested.

### 2. A resistive heater held at a temperature (Temperature control module) {#config-heater}

The heater needs its own temperature sensor on one of the controller&rsquo;s thermistor inputs. With `bang_bang` the firmware switches the output fully on below the target and fully off above it:

```ini
[temperature control]
chamber.enable              = true
chamber.heater_pin          = PB1         # header G_F pin 3, the enable contact J1.3
chamber.thermistor          = EPCOS100K   # the type of your sensor
chamber.thermistor_pin      = ADC1_2      # a free thermistor input
chamber.designator          = C           # letter shown in temperature reports
chamber.set_m_code          = 141         # M141 S50 sets 50 degrees C
chamber.set_and_wait_m_code = 191         # M191 S50 sets it and waits
chamber.max_temp            = 80          # the firmware refuses to go higher
chamber.bang_bang           = true        # on/off regulation
chamber.hysteresis          = 2           # degrees C either side of the target
```

- **Remove the `dcssr` lines from `[switch]`** when you do this: the pin can belong to one entry only.
- **The name `chamber` and the codes `M141` and `M191` are examples.** A heater with a name of your own would otherwise answer to `M140` and `M190`, the same codes as the heated bed.
- **The firmware watches the sensor** and halts with an alarm when the reading leaves its limits. That is a help, not a safety device: a failed transistor can leave the heater on.
- **Slow PWM and PID regulation are not specified for this board.** Use on/off regulation until they have been tested.

## Wiring the load {#loads}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Power off before you wire.</strong> Switch the DC supply off before you touch any screw. Off is not isolated: the board does not disconnect the load, and its leakage when off is not known.
</sl-alert>

1. **One wire through the board.** Connect one wire of the DC circuit to **SW A** and continue from **SW B** to the load. The other wire of the circuit goes round the board.
2. **Do not tie the switched path to the control ground.** The board is printed &ldquo;HOST GND &ne; LOAD&rdquo;: keep the load circuit separate from the controller&rsquo;s ground.
3. **Resistive loads first.** For a coil, relay, solenoid or motor, fit a freewheel diode across the load yourself: the board has none (&ldquo;FREEWHEEL TBD&rdquo;). The 33&nbsp;V suppressor only clips short spikes.
4. **Stay inside what you have verified.** The board has no load rating. Start with a small load and measure the temperature of the transistors and the heat sink before you go higher.
5. **Fuse the circuit** with a blade fuse in the holder, and use wire sized for the current.

What the light tells you:

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-green"></span>Green (CMD)</th></tr></thead>
  <tbody>
    <tr><td>Where</td><td>At the right of the board, marker 10 of the <a href="#tour">board tour</a></td></tr>
    <tr><td>Lit means</td><td>The enable input is HIGH (a command to switch on)</td></tr>
    <tr><td>Dark means</td><td>The enable input is LOW or unconnected, or the light is disabled. It says nothing about whether the load conducts.</td></tr>
    <tr><td>Disable it</td><td>Cut the solder link beside it (marker 11)</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Three things this board does not do:

- **It is not a disconnect and not a safety device.** A transistor can fail shorted and keep the load on. An emergency stop must remove the supply independently of this board.
- **It has no fault output.** There is no current or temperature report on the connector.
- **It is not for AC or mains.** Use an AC solid-state relay for that.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 250" role="img" aria-labelledby="xb-how-t">
    <title id="xb-how-t">The enable signal enters the isolated driver; across the isolation barrier the driver makes a floating gate supply and drives two back-to-back MOSFETs that switch the DC path between SW A and SW B.</title>
    <g font-size="13" font-weight="700" text-anchor="middle" fill="#e6ebf2">
      <rect x="20" y="85" width="170" height="80" rx="8" fill="#1f2226" stroke="#dfe4ee"/><text x="105" y="120">Enable on J1</text><text x="105" y="140" font-weight="400" fill="#a9b4c2">3.3 V logic, HIGH = on</text>
      <rect x="260" y="85" width="190" height="80" rx="8" fill="#212936" stroke="#5fb3ff"/><text x="355" y="120">Isolated driver</text><text x="355" y="140" font-weight="400" fill="#a9b4c2">TPSI3050</text>
      <rect x="520" y="85" width="210" height="80" rx="8" fill="#212936" stroke="#f0b08a"/><text x="625" y="120">Two MOSFETs, back to back</text><text x="625" y="140" font-weight="400" fill="#a9b4c2">CSD18536KTT</text>
      <rect x="790" y="85" width="190" height="80" rx="8" fill="#212936" stroke="#f0b08a"/><text x="885" y="120">Switched DC path</text><text x="885" y="140" font-weight="400" fill="#a9b4c2">SW A to SW B</text>
    </g>
    <g stroke-width="3" fill="none" stroke="#a9b4c2"><path d="M190 125H260"/><path d="M450 125H520"/><path d="M730 125H790"/></g>
    <path d="M355 40V230" stroke="#59616e" stroke-width="2" stroke-dasharray="6 6"/>
    <text x="355" y="30" text-anchor="middle" font-size="12" fill="#a9b4c2">isolation barrier inside the chip</text>
    <text x="105" y="60" text-anchor="middle" font-size="12" fill="#a9b4c2">CONTROL SIDE</text>
    <text x="640" y="60" text-anchor="middle" font-size="12" fill="#f0b08a">FLOATING SIDE</text>
    <text x="625" y="205" text-anchor="middle" font-size="12" fill="#a9b4c2">fuse and transient suppressor on the switched path</text>
  </svg>
  </div>
  <figcaption>The path of one on/off command.</figcaption>
</figure>
{:/nomarkdown}

On the **control side**, a HIGH level on J1 contact 3 enables the TPSI3050 driver, which is powered from 3.3&nbsp;V on contact 1, and lights the green indicator through a 2.2&nbsp;k&Omega; resistor. A 10&nbsp;k&Omega; resistor holds the enable input LOW when nothing drives it.

Inside the chip, the signal crosses an isolation barrier. The chip also transfers power across the barrier, which makes a floating supply for the gate drive; a 9.09&nbsp;k&Omega; resistor sets how much power is transferred, and two 2.2&nbsp;&micro;F capacitors smooth the result.

On the **switched side**, the driver charges the gates of two MOSFETs through 10&nbsp;&Omega; resistors. The two transistors share their source connection, so each one blocks the current direction that the other&rsquo;s internal diode would let through. A 100&nbsp;k&Omega; resistor on each gate keeps the pair off when the driver is not driving.

{% include _includes/relay-board-comparison.html %}

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>When you see</th><th>It means</th><th>Do this</th></tr></thead>
  <tbody>
    <tr><td>Green light stays dark when you send <code>M64.1</code></td><td>The enable signal does not reach J1, or the pin is not configured.</td><td>With the supply off, check J1 contacts 3 and 10 against the table, and that <code>switch</code> lists <code>dcssr</code>. Check the enable contact with a meter: it should reach about 3.3&nbsp;V when HIGH.</td></tr>
    <tr><td>The console rejects <code>switch dcssr on</code>, or <code>switch</code> does not list it</td><td>The configuration was not loaded.</td><td>Check the lines are under <code>[switch]</code>, that <code>enable</code> is <code>true</code>, and restart the board.</td></tr>
    <tr><td>Green light on, but the load does not run</td><td>The fault is in the supply, the fuse, the load or the driver supply.</td><td>With the supply off, check the fuse and the wiring. Check that 3.3&nbsp;V reaches J1 contact 1.</td></tr>
    <tr><td>The load runs with the green light dark</td><td>A transistor may have failed shorted.</td><td>Remove the supply. Do not use the board again until the transistors have been replaced.</td></tr>
    <tr><td>The transistors or the heat sink get very hot</td><td>The load is too large for the heat sinking.</td><td>Switch off at once and use a smaller load or a larger heat sink.</td></tr>
    <tr><td>The fuse blows when the load switches off</td><td>An inductive load is producing a voltage spike.</td><td>Fit a freewheel diode across the load.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/). Say what the `switch` command reports.

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/dc-ssr-board/dc-ssr-board-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram.</td></tr>
    <tr><td><a href="/images/extensions/dc-ssr-board/dc-ssr-board-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/dc-ssr-board/dc-ssr-board-diagram.png">Board drawing (SVG)</a></td><td>The top view used on this page, at full resolution</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the corner marked 0, 0 with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-dcssr-mount-t">
  <title id="xb-dcssr-mount-t">Mounting drawing of the DC solid-state relay board, component side: outline 65 by 50 millimetres with 4 mounting holes and 2 cable-tie holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="259.0" y="78.0" width="442.0" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M259.0 56H701.0"/><path d="M259.0 50V62"/><path d="M701.0 50V62"/><path d="M727.0 78.0V418.0"/><path d="M721.0 78.0h12"/><path d="M721.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">65</text>
  <text x="739.0" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">50</text>
  <circle cx="259.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="247.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M201.0 104.0h30" fill="none"/><path d="M235.0 104.0l-8 -4v8z"/><path d="M201.0 104.0v30" fill="none"/><path d="M201.0 138.0l-4 -8h8z"/></g>
  <text x="239.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="197.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="456.2" cy="117.1" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M441.3 117.1h29.8M456.2 102.2v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="445.3" y="148.0" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  29.00, 5.75</text>
  <circle cx="592.2" cy="117.1" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M577.3 117.1h29.8M592.2 102.2v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="603.1" y="148.0" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  49.00, 5.75</text>
  <circle cx="456.2" cy="389.1" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M441.3 389.1h29.8M456.2 374.2v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="445.3" y="368.2" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  29.00, 45.75</text>
  <circle cx="592.2" cy="389.1" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M577.3 389.1h29.8M592.2 374.2v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="603.1" y="368.2" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  49.00, 45.75</text>
  <circle cx="497.0" cy="98.4" r="8.5" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <circle cx="531.0" cy="98.4" r="8.5" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <text x="514.0" y="124.9" text-anchor="middle" font-size="12" fill="#a9b4c2">cable tie</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 65 × 50&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>29.00</td><td>5.75</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>49.00</td><td>5.75</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>29.00</td><td>45.75</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>49.00</td><td>45.75</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>–</td><td>35.00</td><td>3.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
    <tr><td>–</td><td>40.00</td><td>3.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
  </tbody>
</table></div>

{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

The last column gives the source or condition of each figure. A dash means the figure does not apply or is not specified.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Switched voltage</td><td>SW A, SW B</td><td>0 V</td><td>—</td><td>30 V</td><td>32&nbsp;V maximum. Check polarity</td></tr>
    <tr><td>Load current</td><td>SW A, SW B</td><td>—</td><td>—</td><td>—</td><td>No load current rating; heat sink required</td></tr>
    <tr><td>Fuse</td><td>SW A path</td><td>—</td><td>30 A</td><td>—</td><td>Mini blade (ATM), 32&nbsp;V; Keystone 3568 holder</td></tr>
    <tr><td>Transient suppressor</td><td>Across the path</td><td>—</td><td>33 V</td><td>—</td><td>SMDJ33CA, bidirectional. Its clamp value applies to its stated surge waveform, not as a general ceiling</td></tr>
    <tr><td>MOSFET drain-source voltage</td><td>Q1, Q2</td><td>—</td><td>—</td><td>60 V</td><td>Part rating of the CSD18536KTT; it does not make the board a 60&nbsp;V product</td></tr>
    <tr><td>Control supply</td><td>J1 contact 1</td><td>—</td><td>3.3 V</td><td>3.465 V</td><td>Upper value assumed in the design; worst-case current Open</td></tr>
    <tr><td>Enable circuit current</td><td>J1 contact 3</td><td>—</td><td>—</td><td>1.94 mA</td><td>Passive upper bound at 3.465&nbsp;V through the 2.2&nbsp;k&Omega; light resistor and 10&nbsp;k&Omega; pull-down, plus the driver&rsquo;s own input current</td></tr>
    <tr><td>Green light current</td><td>J1 contact 3</td><td>—</td><td>—</td><td>1.59 mA</td><td>Bound with 1&nbsp;% resistor tolerance, ignoring the LED forward voltage</td></tr>
    <tr><td>Gate pull-down load</td><td>Floating supply</td><td>—</td><td>—</td><td>0.22 mA</td><td>Two 100&nbsp;k&Omega; resistors at 11&nbsp;V</td></tr>
    <tr><td>Power transfer setting</td><td>R3 9.09 k&Omega;</td><td>—</td><td>—</td><td>—</td><td>The driver&rsquo;s data sheet gives two different transfer figures (26.7&nbsp;% and 21.1&nbsp;%) for this value. Host current, start-up and PWM estimates stay Open</td></tr>
    <tr><td>Isolation voltage</td><td>Control to switched path</td><td>Open</td><td>Open</td><td>Open</td><td>Functional isolation only; not tested</td></tr>
    <tr><td>Off-state leakage current</td><td>SW A, SW B</td><td>Open</td><td>Open</td><td>Open</td><td>Not specified</td></tr>
    <tr><td>Conduction loss and temperature rise</td><td>Q1, Q2</td><td>Open</td><td>Open</td><td>Open</td><td>Not calculated for a stated load; no heat sink is part of the board</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Component stress limits

These are limits of individual parts, beyond which the part can be damaged. They are not operating conditions; stay inside the table above.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Circuit</th><th>Pin or device stress</th><th>Absolute limit</th></tr></thead>
  <tbody>
    <tr><td>MOSFETs</td><td>Inductive turn-off energy</td><td>Open: avalanche and safe-operating-area limits are not calculated; an external freewheel diode is required for inductive loads</td></tr>
    <tr><td>Driver supply</td><td>Voltage on J1 contact 1</td><td>Open: 5&nbsp;V on this contact must be avoided</td></tr>
    <tr><td>Enable input</td><td>Voltage on J1 contact 3</td><td>Open</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
