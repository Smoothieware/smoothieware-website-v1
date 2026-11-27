---
layout: default
title: "Allegro stepper driver breakout board"
description: "A one-motor stepper driver board on an Allegro A5984 with separate motor power, current trimmer and input protection: pinout, links, current setting and limits."
permalink: /extensions/stepper-driver-breakout-allegro
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Motors</p>
    <h1 id="stepper-driver-breakout-allegro">Allegro stepper driver breakout board</h1>
    <p class="xb-lead">One bipolar stepper driver channel on an Allegro A5984, for a single auxiliary motor controlled by STEP and DIR plus enable, reset and two microstep lines from the host. Motor power comes in on its own connector, with an input protection stage, and a trimmer sets the current reference. It is not pin-compatible with the Trinamic SPI driver board.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#current">Set the current</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/stepper-driver-breakout-allegro/stepper-driver-breakout-allegro-diagram.png" alt="Top view of the Allegro stepper driver breakout board: a ten-contact socket at the top right, the driver chip at the centre right, a yellow XT30 power connector at the lower left and a green four-way motor terminal at the lower right.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>A5984</b><span>Allegro bipolar stepper driver</span></div>
  <div class="xb-stat"><b>12 to 24 V</b><span>input label</span></div>
  <div class="xb-stat"><b>0.100 &Omega; &times; 2</b><span>sense resistors, VREF/0.8 A</span></div>
  <div class="xb-stat"><b>1 motor</b><span>one driver channel</span></div>
  <div class="xb-stat"><b>5 lights</b><span>one green, four red</span></div>
  <div class="xb-stat"><b>52 × 56</b><span>millimetres, four M3 holes</span></div>
</div>

<nav class="xb-nav" aria-label="On this page">
  <a href="#specs">Tech specs</a>
  <a href="#tour">Board tour</a>
  <a href="#pinout">Pinout</a>
  <a href="#what-you-need">What you need</a>
  <a href="#get-started">Get started</a>
  <a href="#current">Set the current</a>
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
  Never power the motor supply from a Gadgeteer 5&nbsp;V pin, and never connect or disconnect a motor while the supply is energized. Set the current reference before stepping.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>Drive one bipolar stepper motor from STEP and DIR with host-controlled enable, reset and microstep lines</td></tr>
    <tr><td>Driver</td><td>Allegro A5984 (U1), two 0.100&nbsp;&Omega; sense resistors (RS1, RS2)</td></tr>
    <tr><td>Motor power</td><td>XT30 connector J2, labelled 12 to 24&nbsp;V. Check transient, current and thermal limits for your supply and motor.</td></tr>
    <tr><td>Current</td><td>Set with trimmer RV1; the chip relation is trip current = VREF / (8 &times; Rs), which is VREF / 0.8 A for this board. This sets the trip current; it is not a continuous-current rating.</td></tr>
    <tr><td>Input protection</td><td>An LTC4368-type stage with fault, over-voltage and reverse lights; an SMBJ24A surge diode; a bulk capacitor</td></tr>
    <tr><td>Socket</td><td>One ten-contact socket, J1 (Gadgeteer Y in). Contact 2 is not connected.</td></tr>
    <tr><td>Lights</td><td>Motor power (green), overcurrent latch, fault, over-voltage and reverse (red), each with a cut link</td></tr>
    <tr><td>Size</td><td>52 &times; 56&nbsp;mm with four M3 mounting holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a></td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side. The mounting holes, test points, most small parts and the protection stage are not marked.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/stepper-driver-breakout-allegro/stepper-driver-breakout-allegro-diagram.png" alt="Top view of the Allegro stepper driver breakout board with fourteen numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:64%;top:7.4%" aria-label="1: input socket">1<span class="xb-pop"><b>Input socket (J1)</b> — a ten-contact socket (Gadgeteer Y in) carrying the fault return, STEP, DIR, enable, reset and two microstep controls. <i>See the pinout.</i></span></a>
      <a class="xb-mk" href="#tour-2" style="left:25%;top:70%" aria-label="2: motor power input">2<span class="xb-pop"><b>Motor power input (J2)</b> — an XT30 connector for the motor supply, labelled 12 to 24 V. Never power it from a Gadgeteer 5&nbsp;V pin.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:63%;top:68%" aria-label="3: motor terminal">3<span class="xb-pop"><b>Motor terminal (J3)</b> — a four-way screw terminal: coil A on contacts 1 and 2, coil B on contacts 3 and 4.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:64.8%;top:36.8%" aria-label="4: driver chip">4<span class="xb-pop"><b>Driver chip (U1)</b> — an Allegro A5984 stepper driver, marked HOT on the silk.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:37%;top:41.9%" aria-label="5: bulk capacitor">5<span class="xb-pop"><b>Bulk capacitor (C1)</b> — a 100&nbsp;&micro;F, 50&nbsp;V capacitor on the motor supply.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-6" style="left:20.5%;top:24.7%" aria-label="6: surge diode">6<span class="xb-pop"><b>Surge diode (D1)</b> — an SMBJ24A surge-protection diode on the motor supply.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:42.5%;top:20.6%" aria-label="7: current trimmer">7<span class="xb-pop"><b>Current trimmer (RV1)</b> — a 10&nbsp;k&Omega; trimmer that sets the driver current reference. The silk reads IMAX = VREF/0.8 A.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-8" style="left:85%;top:21%" aria-label="8: mode links">8<span class="xb-pop"><b>Mode links (JP1 and JP2)</b> — two three-way solder links: JP1 selects the oscillator mode and JP2 selects the third microstep input.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-9" style="left:22.2%;top:6.8%" aria-label="9: power light">9<span class="xb-pop"><b>Motor power light (D3)</b> — a green light that shows motor power. Cut JP4 to disable it.</span></a>
      <a class="xb-mk xb-pb" href="#tour-10" style="left:42.5%;top:6.8%" aria-label="10: latch light">10<span class="xb-pop"><b>Overcurrent latch light (D4)</b> — a red light on the fault line. Cut JP3 to disable it.</span></a>
      <a class="xb-mk xb-pl" href="#tour-11" style="left:7.2%;top:65.4%" aria-label="11: fault light">11<span class="xb-pop"><b>Fault light (DF102)</b> — a red light from the input protection stage. Cut JPF101 to disable it.</span></a>
      <a class="xb-mk xb-pl" href="#tour-12" style="left:7.2%;top:75.4%" aria-label="12: over-voltage light">12<span class="xb-pop"><b>Over-voltage light (DF103)</b> — a red light that reports over-voltage at the input. Cut JPF102 to disable it.</span></a>
      <a class="xb-mk xb-pl" href="#tour-13" style="left:7.2%;top:89.6%" aria-label="13: reverse light">13<span class="xb-pop"><b>Reverse light (DF106)</b> — a red light that reports a reversed supply. Cut JPF103 to disable it.</span></a>
      <a class="xb-mk" href="#tour-14" style="left:60%;top:52.1%" aria-label="14: sense resistors">14<span class="xb-pop"><b>Sense resistors (RS1, RS2)</b> — two 0.100&nbsp;&Omega; resistors that set the current relation with the reference.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Input socket (J1)</b> — a ten-contact socket (Gadgeteer Y in) carrying the fault return, STEP, DIR, enable, reset and two microstep controls. <i>See the pinout.</i></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Motor power input (J2)</b> — an XT30 connector for the motor supply, labelled 12 to 24 V. Never power it from a Gadgeteer 5&nbsp;V pin.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Motor terminal (J3)</b> — a four-way screw terminal: coil A on contacts 1 and 2, coil B on contacts 3 and 4.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Driver chip (U1)</b> — an Allegro A5984 stepper driver, marked HOT on the silk.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Bulk capacitor (C1)</b> — a 100&nbsp;&micro;F, 50&nbsp;V capacitor on the motor supply.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Surge diode (D1)</b> — an SMBJ24A surge-protection diode on the motor supply.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Current trimmer (RV1)</b> — a 10&nbsp;k&Omega; trimmer that sets the driver current reference. The silk reads IMAX = VREF/0.8 A.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Mode links (JP1 and JP2)</b> — two three-way solder links: JP1 selects the oscillator mode and JP2 selects the third microstep input.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Motor power light (D3)</b> — a green light that shows motor power. Cut JP4 to disable it.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Overcurrent latch light (D4)</b> — a red light on the fault line. Cut JP3 to disable it.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Fault light (DF102)</b> — a red light from the input protection stage. Cut JPF101 to disable it.</div></li>
    <li id="tour-12"><span class="xb-n">12</span><div><b>Over-voltage light (DF103)</b> — a red light that reports over-voltage at the input. Cut JPF102 to disable it.</div></li>
    <li id="tour-13"><span class="xb-n">13</span><div><b>Reverse light (DF106)</b> — a red light that reports a reversed supply. Cut JPF103 to disable it.</div></li>
    <li id="tour-14"><span class="xb-n">14</span><div><b>Sense resistors (RS1, RS2)</b> — two 0.100&nbsp;&Omega; resistors that set the current relation with the reference.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1: input socket

Contact 1 is at the lower left of the socket, next to the small arrow below it; the odd contacts are in the lower row.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Logic supply and the trimmer feed</td></tr>
    <tr><td>2</td><td>Not connected</td><td>Gadgeteer 5&nbsp;V must never power the motor supply</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">FAULT_N</span></td><td>Fault return from the driver, active low. Keep it as an input.</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">STEP</span></td><td></td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">DIR</span></td><td></td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">ENABLE_N</span></td><td>Active low</td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-sig">RESET_N</span></td><td>Pulled high on the board</td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">MS1</span></td><td>Microstep control</td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">MS2</span></td><td>Microstep control</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Power and motor connectors

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Connector</th><th>Contact</th><th>Function</th></tr></thead>
  <tbody>
    <tr><td rowspan="2">J2 power (XT30)</td><td>1</td><td><span class="xb-pill xb-p-sig">VIN</span> motor supply positive</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td rowspan="4">J3 motor</td><td>1</td><td><span class="xb-pill xb-p-sig">OUT1A</span> coil A</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-sig">OUT1B</span> coil A</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">OUT2A</span> coil B</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">OUT2B</span> coil B</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Identify the two coil pairs of the motor with the power removed before wiring it. The XT30 polarity is taken from the schematic; check it against the plug.

### Solder links

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>Effect</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>JP1</td><td>Oscillator mode: pad 1 to ground, or pad 3 to 3.3&nbsp;V (silk: ROSC L, M, H)</td><td>Pads 1 and 2 bridged (to ground)</td></tr>
    <tr><td>JP2</td><td>Third microstep input: low or high (silk: MS3 L, H)</td><td>Pads 1 and 2 bridged (low)</td></tr>
    <tr><td>JP3</td><td>Cut to disable the overcurrent latch light (D4)</td><td>Bridged</td></tr>
    <tr><td>JP4</td><td>Cut to disable the motor power light (D3)</td><td>Bridged</td></tr>
    <tr><td>JPF101</td><td>Cut to disable the fault light</td><td>Bridged</td></tr>
    <tr><td>JPF102</td><td>Cut to disable the over-voltage light</td><td>Bridged</td></tr>
    <tr><td>JPF103</td><td>Cut to disable the reverse light</td><td>Bridged</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Never bridge a three-way selector to its 3.3&nbsp;V pad while its ground pad is still bridged.

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>The Allegro stepper driver breakout.</span></div>
  <div class="xb-card"><b>A stepper motor</b><span>With its coil pairs identified.</span></div>
  <div class="xb-card"><b>A motor supply</b><span>Current-limited, on the XT30 connector, separate from the controller.</span></div>
  <div class="xb-card"><b>A multimeter</b><span>To set and measure the reference voltage.</span></div>
  <div class="xb-card"><b>A host cable</b><span>From a Prime header to J1.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 472" role="img" aria-labelledby="xb-stepper-driver-breakout-allegro-wire"><title id="xb-stepper-driver-breakout-allegro-wire">Wiring: J3 contact 1 to coil A; J3 contact 2 to coil A; J3 contact 3 to coil B; J3 contact 4 to coil B.</title><image href="/images/extensions/stepper-driver-breakout-allegro/stepper-driver-breakout-allegro-diagram.png" x="393" y="14" width="214" height="230"/><circle cx="528" cy="170" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="509" y="189" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="528" y="203" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J3</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J3 on this board</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Stepper motor</text><rect x="700" y="304" width="270" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><rect x="828" y="327" width="104" height="104" rx="10" fill="#3a3f46" stroke="#9aa2ad" stroke-width="1.5"/><circle cx="880" cy="379" r="34" fill="#c4cad3" stroke="#0d0f12" stroke-width="1.5"/><circle cx="880" cy="379" r="9" fill="#6b727c" stroke="#0d0f12" stroke-width="1.5"/><circle cx="840" cy="339" r="5" fill="#14171c" stroke="#0d0f12" stroke-width="1.5"/><circle cx="840" cy="419" r="5" fill="#14171c" stroke="#0d0f12" stroke-width="1.5"/><circle cx="920" cy="339" r="5" fill="#14171c" stroke="#0d0f12" stroke-width="1.5"/><circle cx="920" cy="419" r="5" fill="#14171c" stroke="#0d0f12" stroke-width="1.5"/><rect x="30" y="304" width="200" height="150" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 334.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="334" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="334" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="339" text-anchor="end" font-size="14" fill="#e6ebf2">  1</text><text x="712" y="339" text-anchor="start" font-size="13" fill="#e6ebf2">coil A</text><rect x="340" y="323" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="339" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1: coil A</text><path d="M230 364.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" fill="#e6ebf2">  2</text><text x="712" y="369" text-anchor="start" font-size="13" fill="#e6ebf2">coil A</text><rect x="340" y="353" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">2: coil A</text><path d="M230 394.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" fill="#e6ebf2">  3</text><text x="712" y="399" text-anchor="start" font-size="13" fill="#e6ebf2">coil B</text><rect x="340" y="383" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">3: coil B</text><path d="M230 424.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="429" text-anchor="end" font-size="14" fill="#e6ebf2">  4</text><text x="712" y="429" text-anchor="start" font-size="13" fill="#e6ebf2">coil B</text><rect x="340" y="413" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="429" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">4: coil B</text></svg>
  </div>
  <figcaption>Connect coils with all power removed. Set the current reference before applying motor supply on J2. Equipment is drawn as a typical unit, not a specific model.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Wire the motor</h3>
    <p>With all power removed, connect each coil pair to J3: one pair to contacts 1 and 2, the other to 3 and 4.</p>
  </li>
  <li class="xb-step">
    <h3>Check the links</h3>
    <p>JP1 and JP2 each have pads 1 and 2 bridged as delivered, which gives full-step operation with the oscillator mode to ground.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the host</h3>
    <p>Run a cable from the Prime header to J1. Verify the header, the rail positions and the cable orientation with the power removed.</p>
    <p class="xb-expect">The Prime allocation under Configuration applies to the Prime2590 and implies no rail-current allowance.</p>
  </li>
  <li class="xb-step">
    <h3>Set the current reference</h3>
    <p>With the motor outputs disabled, set and measure the reference at the test point as described under Set the current. Choose the motor current and thermal limits first.</p>
  </li>
  <li class="xb-step">
    <h3>Power the motor last</h3>
    <p>Apply the motor supply on J2 only after the logic and the reference are verified.</p>
  </li>
</ol>
{:/nomarkdown}

## Set the current {#current}

RV1 sets the driver&rsquo;s VREF input, fed from the logic supply through a resistor. With the two 0.100&nbsp;&Omega; sense resistors, the chip relation is trip current = VREF / (8 &times; 0.100&nbsp;&Omega;), which is VREF / 0.8 A. For example, a 0.5&nbsp;A trip limit needs VREF = 0.400&nbsp;V, measured at test point TP5 against ground with the motor outputs disabled. Verify the actual fitted sense resistors and trimmer first.

This is a current-setting relation, not a continuous board-current rating, and it is not derived from the supply voltage. Check the driver temperature under your load.

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>One stepper axis on an external driver</td><td>Actuator with the external driver type</td><td>The first block below</td></tr>
    <tr><td>Reset and microstep lines driven by firmware</td><td>Switch, one digital output each</td><td>The second block below</td></tr>
    <tr><td>Fault return handled by firmware</td><td>None</td><td>Not provided: no fault interlock is configured by this example</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

SmoothieV2 supports external STEP and DIR drivers. The example below is an allocation for a Smoothieboard V2 Prime2590, header J37: contact 4 to PJ4 (STEP), 5 to PA4 (DIR), 6 to PG0 (enable), 7 to PJ3 (reset), 8 to PG1 (MS1) and 9 to PJ2 (MS2), with contact 3 (FAULT_N) returning to PB1 as an input, contact 1 as 3.3&nbsp;V and contact 10 as ground. Merge it into a working base configuration and reserve the pins.

```ini
[actuator]
alpha.driver = external
alpha.step_pin = PJ4
alpha.dir_pin = PA4
alpha.en_pin = PG0!

[switch]
a5984_reset.enable = true
a5984_reset.output_pin = PJ3
a5984_reset.output_type = digital
a5984_reset.input_on_command = M42
a5984_reset.input_off_command = M43
a5984_reset.subcode = 41
a5984_reset.startup_state = false
a5984_reset.halt_set_to = false
a5984_reset.ignore_on_halt = false

a5984_ms1.enable = true
a5984_ms1.output_pin = PG1
a5984_ms1.output_type = digital
a5984_ms1.input_on_command = M42
a5984_ms1.input_off_command = M43
a5984_ms1.subcode = 42
a5984_ms1.startup_state = false
a5984_ms1.halt_set_to = false
a5984_ms1.ignore_on_halt = false

a5984_ms2.enable = true
a5984_ms2.output_pin = PJ2
a5984_ms2.output_type = digital
a5984_ms2.input_on_command = M42
a5984_ms2.input_off_command = M43
a5984_ms2.subcode = 43
a5984_ms2.startup_state = false
a5984_ms2.halt_set_to = false
a5984_ms2.ignore_on_halt = false
```

The full-step state is MS3, MS2, MS1 all low (labelled full step, 100&nbsp;% torque); do not apply the A4988 70&nbsp;% convention. The enable command enables every configured motor, so disconnect any other motor for a bench test. After verifying that the configuration loaded, send these commands one at a time: `M18`, `M43.41`, `M43.42`, `M43.43`, `M42.41`, `M17`. Wait at least five seconds with the shaft clear, then `test pulse x 2`, followed by `M18` and `M43.41`. This produces two STEP assertions of five seconds each without changing DIR; it is not a test of position, torque or timing. This example adds no fault interlock, and a software halt does not control the reset or power-loss states.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 170" role="img" aria-labelledby="xb-how-t">
    <title id="xb-how-t">The host sends STEP, DIR, enable, reset and microstep lines on J1 to the A5984 driver; motor power enters at J2 through the input protection and the driver feeds the two motor coils on J3; a fault line returns to the host.</title>
    <g font-size="13" font-weight="700" text-anchor="middle" fill="#e6ebf2">
      <rect x="20" y="55" width="150" height="60" rx="8" fill="#1f2226" stroke="#e0a877"/><text x="95" y="80">J1 input</text><text x="95" y="100" font-weight="400" fill="#a9b4c2">STEP, DIR, enable</text>
      <rect x="230" y="55" width="170" height="60" rx="8" fill="#212936" stroke="#6fe08a"/><text x="315" y="80">A5984 driver</text><text x="315" y="100" font-weight="400" fill="#a9b4c2">current set by RV1</text>
      <rect x="460" y="55" width="140" height="60" rx="8" fill="#1f2226" stroke="#e0a877"/><text x="530" y="80">J3 motor</text><text x="530" y="100" font-weight="400" fill="#a9b4c2">coil A and coil B</text>
      <rect x="660" y="55" width="170" height="60" rx="8" fill="#212936" stroke="#5fb3ff"/><text x="745" y="80">Input protection</text><text x="745" y="100" font-weight="400" fill="#a9b4c2">LTC4368, D1</text>
      <rect x="880" y="55" width="100" height="60" rx="8" fill="#1f2226" stroke="#e0a877"/><text x="930" y="80">J2</text><text x="930" y="100" font-weight="400" fill="#a9b4c2">XT30</text>
    </g>
    <g stroke-width="3" fill="none" stroke="#a9b4c2"><path d="M170 85H230"/><path d="M400 85H460"/><path d="M660 85H600"/><path d="M880 85H830"/></g>
  </svg>
  </div>
  <figcaption>Logic comes in on J1; motor power comes in separately on J2 and reaches the driver after the protection stage.</figcaption>
</figure>
{:/nomarkdown}

J1 carries the control lines and the fault return. Motor energy enters J2 and the two coil pairs leave J3. The sleep input is pulled to a fixed level on the board and is not a host line. The correct current setting and microstep and reset states are required before stepping.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-green"></span>Motor power (D3)</th><th><span class="xb-led xb-led-red"></span>Latch (D4)</th><th><span class="xb-led xb-led-red"></span>Fault</th><th><span class="xb-led xb-led-red"></span>Over-voltage</th><th><span class="xb-led xb-led-red"></span>Reverse</th></tr></thead>
  <tbody>
    <tr><td>Where</td><td>Top, left of centre</td><td>Top, centre</td><td>Left edge, upper</td><td>Left edge, middle</td><td>Left edge, lower</td></tr>
    <tr><td>Lit means</td><td>Motor power is present</td><td>The fault line is asserted</td><td>The protection stage reports a fault</td><td>The protection stage reports over-voltage</td><td>The supply is connected the wrong way round (the silk says BLINK)</td></tr>
    <tr><td>Disable it</td><td>Cut JP4</td><td>Cut JP3</td><td>Cut JPF101</td><td>Cut JPF102</td><td>Cut JPF103</td></tr>
  </tbody>
</table></div>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Motor does not turn</td><td>Enable level (active low), reset high, the supply on J2, the reference voltage and the coil wiring.</td></tr>
    <tr><td>Latch light on</td><td>The driver fault line is asserted; check the reference setting, the motor wiring and the supply.</td></tr>
    <tr><td>Wrong step size</td><td>The states of MS1, MS2 and the JP2 link (MS3); the full-step state is all three low.</td></tr>
    <tr><td>Everything dark with supply connected</td><td>The polarity of J2 and the supply fault lights.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

{% include _includes/stepper-driver-board-comparison.html %}

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/stepper-driver-breakout-allegro/stepper-driver-breakout-allegro-schematic.png">Schematic (SVG)</a></td><td>The circuit diagram.</td></tr>
    <tr><td><a href="/images/extensions/stepper-driver-breakout-allegro/stepper-driver-breakout-allegro-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/stepper-driver-breakout-allegro/stepper-driver-breakout-allegro-diagram.png">Board drawing (SVG)</a></td><td>The top view used on this page, at full resolution</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-al-mount-t">
  <title id="xb-al-mount-t">Mounting drawing of the Allegro stepper driver breakout board, component side: outline 52 by 56 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="322.1" y="78.0" width="315.7" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M322.1 56H637.9"/><path d="M322.1 50V62"/><path d="M637.9 50V62"/><path d="M663.9 78.0V418.0"/><path d="M657.9 78.0h12"/><path d="M657.9 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">52</text>
  <text x="675.9" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">56</text>
  <circle cx="322.1" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="310.1" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M264.1 104.0h30" fill="none"/><path d="M298.1 104.0l-8 -4v8z"/><path d="M264.1 104.0v30" fill="none"/><path d="M264.1 138.0l-4 -8h8z"/></g>
  <text x="302.1" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="260.1" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="346.4" cy="102.3" r="9.7" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M332.7 102.3h27.4M346.4 88.6v27.4" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="336.7" y="132.0" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  4.00, 4.00</text>
  <circle cx="589.3" cy="102.3" r="9.7" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M575.6 102.3h27.4M589.3 88.6v27.4" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="599.0" y="132.0" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  44.00, 4.00</text>
  <circle cx="346.4" cy="223.7" r="9.7" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M332.7 223.7h27.4M346.4 210.0v27.4" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="336.7" y="253.4" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  4.00, 24.00</text>
  <circle cx="589.3" cy="223.7" r="9.7" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M575.6 223.7h27.4M589.3 210.0v27.4" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="599.0" y="253.4" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  44.00, 24.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 52 × 56&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>4.00</td><td>4.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>44.00</td><td>4.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>4.00</td><td>24.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>44.00</td><td>24.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>

{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

The last column gives the basis for each figure.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Motor supply</td><td>J2</td><td>12 V</td><td>12 V (example)</td><td>24 V</td><td>Connector label</td></tr>
    <tr><td>Current relation</td><td>U1, RS1, RS2</td><td>—</td><td>VREF / 0.8 A</td><td>—</td><td>Chip relation with two 0.100&nbsp;&Omega; resistors; not a continuous rating</td></tr>
    <tr><td>Example reference</td><td>TP5</td><td>—</td><td>0.400 V for 0.5 A</td><td>—</td><td>Calculation from the relation; check your motor's rating</td></tr>
    <tr><td>Surge diode, bulk capacitor</td><td>D1, C1</td><td>—</td><td>SMBJ24A, 100 &micro;F 50 V</td><td>—</td><td>Parts list</td></tr>
    <tr><td>Logic supply from host</td><td>J1 contact 1</td><td>—</td><td>3.3 V</td><td>—</td><td>From the host</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Prime headers

The allocation above applies only to a Smoothieboard V2 Prime2590. Check the Prime&rsquo;s rail positions by numbered continuity with the power removed, and confirm your Prime board before using any allocation.

See all boards on the [extension boards](/extension-boards) page.
