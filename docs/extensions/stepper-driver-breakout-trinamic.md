---
layout: default
title: "Trinamic stepper driver breakout board"
description: "A one-motor stepper driver board on a Trinamic TMC2660 configured over SPI, with separate motor power and input protection: pinout, links, current setting and limits."
permalink: /extensions/stepper-driver-breakout-trinamic
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Motors</p>
    <h1 id="stepper-driver-breakout-trinamic">Trinamic stepper driver breakout board</h1>
    <p class="xb-lead">One bipolar stepper channel on a Trinamic TMC2660, with STEP, DIR and enable from the host and the driver registers set over SPI. Motor power comes in on its own connector through an input protection stage. The input socket combines motion and SPI functions, so it is not an ordinary peripheral ribbon, and it is not pin-compatible with the Allegro driver board.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/stepper-driver-breakout-trinamic/stepper-driver-breakout-trinamic-diagram.png" alt="Top view of the Trinamic stepper driver breakout board: a yellow XT30 power connector at the top, the TMC2660 chip at the centre, a ten-contact socket at the lower left and a green four-way motor terminal at the lower centre.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>TMC2660</b><span>Trinamic driver, SPI configured</span></div>
  <div class="xb-stat"><b>9 to 26 V</b><span>silk label, not a complete rating</span></div>
  <div class="xb-stat"><b>0.100 &Omega; &times; 2</b><span>current-sense resistors</span></div>
  <div class="xb-stat"><b>1 motor</b><span>one driver channel</span></div>
  <div class="xb-stat"><b>4 lights</b><span>one green, three red</span></div>
  <div class="xb-stat"><b>55 × 62</b><span>millimetres, four M3 holes</span></div>
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
  The silk marks the driver HOT and says no hot-plug. Never power the motor supply from a Gadgeteer 5&nbsp;V pin, and never connect or disconnect a motor while the supply is energized. Do not operate the motor supply above 24&nbsp;V.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>Drive one bipolar stepper motor with a TMC2660, using STEP and DIR for motion and SPI for the driver registers</td></tr>
    <tr><td>Driver</td><td>Trinamic TMC2660-PA (U1), two 0.100&nbsp;&Omega; sense resistors (R13, R14). The part&rsquo;s headline 5 to 30&nbsp;V and 2.8&nbsp;A figures are not ratings of this board.</td></tr>
    <tr><td>Motor power</td><td>XT30 connector J2, labelled 9 to 26&nbsp;V DC. Contact 1 is ground and contact 2 is positive, the reverse order of the Allegro board&rsquo;s connector.</td></tr>
    <tr><td>Input protection</td><td>An LTC4368-type stage with fault, over-voltage and reverse lights, an SMBJ26A surge diode and a bulk capacitor</td></tr>
    <tr><td>SPI return</td><td>An SN74LVC1G125 buffer with its output enable tied to chip select, so only selected transactions drive the return line</td></tr>
    <tr><td>Socket</td><td>One ten-contact socket, J1. Contact 2 is not connected. The silk reads GA (motor SPI) host.</td></tr>
    <tr><td>Lights</td><td>Motor power (green); fault, over-voltage and reverse (red), each with a cut link</td></tr>
    <tr><td>Size</td><td>55 &times; 62&nbsp;mm with four M3 mounting holes and two cable-tie holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a></td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side. The mounting holes, cable-tie holes, test points, solder links and most small parts are not marked.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/stepper-driver-breakout-trinamic/stepper-driver-breakout-trinamic-diagram.png" alt="Top view of the Trinamic stepper driver breakout board with thirteen numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pl" href="#tour-1" style="left:20%;top:72.1%" aria-label="1: input socket">1<span class="xb-pop"><b>Input socket (J1)</b> — a ten-contact socket (the silk reads GA, motor SPI, host) carrying enable, STEP, DIR and four SPI lines. It combines motion and SPI functions. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:32%;top:8.5%" aria-label="2: motor power input">2<span class="xb-pop"><b>Motor power input (J2)</b> — an XT30 connector for the motor supply, labelled 9 to 26&nbsp;V DC. Contact 1 is ground and contact 2 is positive. No hot-plug.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:50%;top:70.3%" aria-label="3: motor terminal">3<span class="xb-pop"><b>Motor terminal (J3)</b> — a four-way screw terminal: coil A on contacts 1 and 2 (A+ and A-), coil B on 3 and 4 (B+ and B-). No hot-plug.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:50%;top:39.6%" aria-label="4: driver chip">4<span class="xb-pop"><b>Driver chip (U1)</b> — a Trinamic TMC2660-PA stepper driver, marked HOT on the silk, configured over SPI.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:26.8%;top:43.5%" aria-label="5: sense resistor A">5<span class="xb-pop"><b>Sense resistor (R13)</b> — a 0.100&nbsp;&Omega; current-sense resistor for one coil.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:73%;top:43.5%" aria-label="6: sense resistor B">6<span class="xb-pop"><b>Sense resistor (R14)</b> — a 0.100&nbsp;&Omega; current-sense resistor for the other coil.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-7" style="left:88%;top:39.6%" aria-label="7: bulk capacitor">7<span class="xb-pop"><b>Bulk capacitor (C1)</b> — a 100&nbsp;&micro;F, 35&nbsp;V electrolytic capacitor on the motor supply.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:72%;top:19.6%" aria-label="8: surge diode">8<span class="xb-pop"><b>Surge diode (D1)</b> — an SMBJ26A surge-protection diode on the motor supply.</span></a>
      <a class="xb-mk" href="#tour-9" style="left:27.8%;top:60.7%" aria-label="9: return buffer">9<span class="xb-pop"><b>Return buffer (U2)</b> — an SN74LVC1G125 buffer whose output enable is tied to chip select, so only selected transactions drive the data return.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-10" style="left:9.5%;top:8.5%" aria-label="10: power light">10<span class="xb-pop"><b>Motor power light (D7)</b> — a green light that shows motor power. Cut JP1 to disable it.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-11" style="left:91%;top:6.2%" aria-label="11: fault light">11<span class="xb-pop"><b>Fault light (DF102)</b> — a red light from the input protection stage. Cut JPF101 to disable it.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-12" style="left:91%;top:15.6%" aria-label="12: over-voltage light">12<span class="xb-pop"><b>Over-voltage light (DF103)</b> — a red light that reports over-voltage at the input. Cut JPF102 to disable it.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-13" style="left:84%;top:17.4%" aria-label="13: reverse light">13<span class="xb-pop"><b>Reverse light (DF106)</b> — a red light that reports a reversed supply. Cut JPF103 to disable it.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Input socket (J1)</b> — a ten-contact socket (the silk reads GA, motor SPI, host) carrying enable, STEP, DIR and four SPI lines. It combines motion and SPI functions. <i>See the pinout.</i></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Motor power input (J2)</b> — an XT30 connector for the motor supply, labelled 9 to 26&nbsp;V DC. Contact 1 is ground and contact 2 is positive. No hot-plug.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Motor terminal (J3)</b> — a four-way screw terminal: coil A on contacts 1 and 2 (A+ and A-), coil B on 3 and 4 (B+ and B-). No hot-plug.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Driver chip (U1)</b> — a Trinamic TMC2660-PA stepper driver, marked HOT on the silk, configured over SPI.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Sense resistor (R13)</b> — a 0.100&nbsp;&Omega; current-sense resistor for one coil.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Sense resistor (R14)</b> — a 0.100&nbsp;&Omega; current-sense resistor for the other coil.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Bulk capacitor (C1)</b> — a 100&nbsp;&micro;F, 35&nbsp;V electrolytic capacitor on the motor supply.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Surge diode (D1)</b> — an SMBJ26A surge-protection diode on the motor supply.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Return buffer (U2)</b> — an SN74LVC1G125 buffer whose output enable is tied to chip select, so only selected transactions drive the data return.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Motor power light (D7)</b> — a green light that shows motor power. Cut JP1 to disable it.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Fault light (DF102)</b> — a red light from the input protection stage. Cut JPF101 to disable it.</div></li>
    <li id="tour-12"><span class="xb-n">12</span><div><b>Over-voltage light (DF103)</b> — a red light that reports over-voltage at the input. Cut JPF102 to disable it.</div></li>
    <li id="tour-13"><span class="xb-n">13</span><div><b>Reverse light (DF106)</b> — a red light that reports a reversed supply. Cut JPF103 to disable it.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1: input socket

Contact 1 is at the lower left of the socket, next to the small arrow below it; the odd contacts are in the lower row. Contacts 3 to 5 are motion lines and 6 to 9 are SPI lines, which come from two different Prime sockets.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Logic supply</td></tr>
    <tr><td>2</td><td>Not connected</td><td>Not a 5&nbsp;V contact</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">ENN</span></td><td>Enable, active low; pulled up to 3.3&nbsp;V by a 10&nbsp;k&Omega; resistor</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">STEP</span></td><td>Through a series resistor to the driver</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">DIR</span></td><td>Through a series resistor to the driver</td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">CSN</span></td><td>SPI chip select, active low</td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-sig">MOSI</span></td><td>SPI data to the driver</td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">MISO</span></td><td>SPI data from the driver, through the buffer</td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">SCK</span></td><td>SPI clock</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Power and motor connectors

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Connector</th><th>Contact</th><th>Function</th></tr></thead>
  <tbody>
    <tr><td rowspan="2">J2 power (XT30)</td><td>1</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-sig">VMOT</span> motor supply positive</td></tr>
    <tr><td rowspan="4">J3 motor</td><td>1</td><td><span class="xb-pill xb-p-sig">OA1</span> coil A (A+)</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-sig">OA2</span> coil A (A-)</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">OB1</span> coil B (B+)</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">OB2</span> coil B (B-)</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Identify the two coil pairs of the motor with the power removed before wiring it. The XT30 order is taken from the schematic and the silk (minus at the left, plus at the right in the drawing); check it against the plug.

### Solder links

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>Effect</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>JP1</td><td>Cut to disable the motor power light (D7)</td><td>Bridged</td></tr>
    <tr><td>JPF101</td><td>Cut to disable the fault light</td><td>Bridged</td></tr>
    <tr><td>JPF102</td><td>Cut to disable the over-voltage light</td><td>Bridged</td></tr>
    <tr><td>JPF103</td><td>Cut to disable the reverse light</td><td>Bridged</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>The driver breakout.</span></div>
  <div class="xb-card"><b>A stepper motor</b><span>With its coil pairs identified.</span></div>
  <div class="xb-card"><b>A motor supply</b><span>Current-limited, on the XT30 connector, separate from the controller.</span></div>
  <div class="xb-card"><b>Firmware with TMC2660 support</b><span>A build that includes the driver and a free chip-select pin.</span></div>
  <div class="xb-card"><b>Host leads</b><span>Individual conductors from two Prime sockets to J1.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 472" role="img" aria-labelledby="xb-stepper-driver-breakout-trinamic-wire"><title id="xb-stepper-driver-breakout-trinamic-wire">Wiring: J3 contact 1 to coil A; J3 contact 2 to coil A; J3 contact 3 to coil B; J3 contact 4 to coil B.</title><image href="/images/extensions/stepper-driver-breakout-trinamic/stepper-driver-breakout-trinamic-diagram.png" x="398" y="14" width="205" height="230"/><circle cx="500" cy="176" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="481" y="195" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="500" y="209" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J3</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J3 on this board</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Stepper motor</text><rect x="700" y="304" width="270" height="150" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><rect x="828" y="327" width="104" height="104" rx="10" fill="#3f3f3f" stroke="#a1a1a1" stroke-width="1.5"/><circle cx="880" cy="379" r="34" fill="#c9c9c9" stroke="#0d0f12" stroke-width="1.5"/><circle cx="880" cy="379" r="9" fill="#717171" stroke="#0d0f12" stroke-width="1.5"/><circle cx="840" cy="339" r="5" fill="#171717" stroke="#0d0f12" stroke-width="1.5"/><circle cx="840" cy="419" r="5" fill="#171717" stroke="#0d0f12" stroke-width="1.5"/><circle cx="920" cy="339" r="5" fill="#171717" stroke="#0d0f12" stroke-width="1.5"/><circle cx="920" cy="419" r="5" fill="#171717" stroke="#0d0f12" stroke-width="1.5"/><rect x="30" y="304" width="200" height="150" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 334.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="334" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="334" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="339" text-anchor="end" font-size="14" fill="#eaeaea">  1</text><text x="712" y="339" text-anchor="start" font-size="13" fill="#eaeaea">coil A</text><rect x="340" y="323" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="339" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1: coil A</text><path d="M230 364.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" fill="#eaeaea">  2</text><text x="712" y="369" text-anchor="start" font-size="13" fill="#eaeaea">coil A</text><rect x="340" y="353" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">2: coil A</text><path d="M230 394.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" fill="#eaeaea">  3</text><text x="712" y="399" text-anchor="start" font-size="13" fill="#eaeaea">coil B</text><rect x="340" y="383" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">3: coil B</text><path d="M230 424.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="429" text-anchor="end" font-size="14" fill="#eaeaea">  4</text><text x="712" y="429" text-anchor="start" font-size="13" fill="#eaeaea">coil B</text><rect x="340" y="413" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="429" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">4: coil B</text></svg>
  </div>
  <figcaption>Pair the coils with all power removed. Motor power enters on J2 only, never through a Gadgeteer rail. Equipment is drawn as a typical unit, not a specific model.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Wire the motor</h3>
    <p>With all power removed, pair the coils and connect one pair to J3 contacts 1 and 2 and the other to 3 and 4.</p>
  </li>
  <li class="xb-step">
    <h3>Plan the two host connections</h3>
    <p>Motion lines come from one Prime socket and SPI lines from another. Verify the headers, the rail positions and the cable orientation with the power removed, and do not push loose wires into a socket.</p>
    <p class="xb-expect">Check every contact against your own Prime board.</p>
  </li>
  <li class="xb-step">
    <h3>Provide motor power separately</h3>
    <p>Motor power enters on J2, never through a Gadgeteer rail. The Prime&rsquo;s own motor-voltage monitor must also read a finite value, because the firmware&rsquo;s enable method checks that monitor.</p>
  </li>
  <li class="xb-step">
    <h3>Initialize the driver first</h3>
    <p>Set the current and microstep state through SPI, and verify the fault and reset behaviour with the motor unloaded, before enabling motion.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>One stepper axis on a TMC2660</td><td>Actuator with the tmc2660 driver type, and the tmc2660 section</td><td>The block below</td></tr>
    <tr><td>The external enable line</td><td>Switch, one digital output</td><td>The same block</td></tr>
    <tr><td>Fault return handled by firmware</td><td>None</td><td>Not provided: this example is not a fault interlock</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The SmoothieV2 source (commit 2a21c0108b1d095ecd8b2b9358e94055f053c003) has a TMC2660 implementation. The actuator uses the tmc2660 driver type, and the tmc2660 section uses the same actuator name with a chip-select pin, a sense resistor in milliohms and a maximum current in milliamps. The common SPI channel is set in mode 3 at 500&nbsp;kHz. The firmware must be built with the TMC driver option.

The example is for a Smoothieboard V2 P12 Prime2590: socket J37 contact 3 to PB1 (enable), 4 to PJ4 (STEP), 5 to PA4 (DIR) and 10 to ground; socket J36 contact 6 to PD15 (chip select), 7 to the controller data output, 8 from the driver data return and 9 to the clock. Contact 1 takes 3.3&nbsp;V; contact 2 stays unconnected. Merge the block into a working base configuration, reserve the pins and the SPI bus, and leave every other motor unconnected, because the enable command enables all registered motors.

```ini
[actuator]
alpha.driver = tmc2660
alpha.step_pin = PJ4
alpha.dir_pin = PA4
alpha.en_pin = nc
alpha.microsteps = 1

[tmc2660]
common.spi_channel = 0
alpha.spi_cs_pin = PD15
alpha.sense_resistor = 100
alpha.max_current = 450
alpha.standstill_current = 0

[current control]
alpha.current = 0.45

[switch]
external_enn.enable = true
external_enn.output_pin = PB1!
external_enn.output_type = digital
external_enn.input_on_command = M42
external_enn.input_off_command = M43
external_enn.subcode = 21
external_enn.startup_state = false
external_enn.halt_set_to = false
external_enn.ignore_on_halt = false
```

The driver enable is register-based after initialization, so the separate switch owns the external enable pin; its logical off gives a physical high, matching the active-low line. The sense resistor entry is 100 milliohms from the 0.100&nbsp;&Omega; parts; confirm the assembled network before relying on it. A 0.45&nbsp;A request does not give an exact 0.45&nbsp;A setting: the driver routine rounds the current scale, which gives a nominal sine peak of about 0.464&nbsp;A and an RMS value near 0.328&nbsp;A. The maximum-current entry only clips the request and is not a calibrated ceiling.

After checking the wiring and confirming driver initialization, a slow bench check sends `M43.21` and `M18`, then `M17`, waits five seconds, sends `M42.21`, waits five seconds, then `test pulse x 2` (about 20 seconds), and finishes with `M43.21` before `M18`. The pulses are five seconds high and five seconds low with the direction unchanged, nominally two full steps (3.6 degrees); observe movement and direction. Do not issue motion or homing commands, or infer steps per millimetre from this check. A handled halt turns the switch off, but it is not an independent fault controller. This does not describe firmware installed on a controller.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 170" role="img" aria-labelledby="xb-how-t">
    <title id="xb-how-t">The host sends STEP, DIR and enable and an SPI link on J1 to the TMC2660 driver; motor power enters at J2 through the input protection; the driver feeds two coils on J3 and returns SPI data through a buffer.</title>
    <g font-size="13" font-weight="700" text-anchor="middle" fill="#eaeaea">
      <rect x="20" y="55" width="150" height="60" rx="8" fill="#1f2226" stroke="#e0a877"/><text x="95" y="80">J1 input</text><text x="95" y="100" font-weight="400" fill="#b3b3b3">motion and SPI</text>
      <rect x="230" y="55" width="170" height="60" rx="8" fill="#292929" stroke="#6fe08a"/><text x="315" y="80">TMC2660 driver</text><text x="315" y="100" font-weight="400" fill="#b3b3b3">registers over SPI</text>
      <rect x="460" y="55" width="140" height="60" rx="8" fill="#1f2226" stroke="#e0a877"/><text x="530" y="80">J3 motor</text><text x="530" y="100" font-weight="400" fill="#b3b3b3">coil A and coil B</text>
      <rect x="660" y="55" width="170" height="60" rx="8" fill="#292929" stroke="#5fb3ff"/><text x="745" y="80">Input protection</text><text x="745" y="100" font-weight="400" fill="#b3b3b3">LTC4368, D1</text>
      <rect x="880" y="55" width="100" height="60" rx="8" fill="#1f2226" stroke="#e0a877"/><text x="930" y="80">J2</text><text x="930" y="100" font-weight="400" fill="#b3b3b3">XT30</text>
    </g>
    <g stroke-width="3" fill="none" stroke="#b3b3b3"><path d="M170 85H230"/><path d="M400 85H460"/><path d="M660 85H600"/><path d="M880 85H830"/></g>
  </svg>
  </div>
  <figcaption>Logic and SPI come in on J1; motor power comes in separately on J2 and reaches the driver after the protection stage.</figcaption>
</figure>
{:/nomarkdown}

STEP and DIR reach the driver through series resistors, and SPI sets the driver registers before motion. The protection and lights do not set a limit on driver current or temperature.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-green"></span>Motor power (D7)</th><th><span class="xb-led xb-led-red"></span>Fault</th><th><span class="xb-led xb-led-red"></span>Over-voltage</th><th><span class="xb-led xb-led-red"></span>Reverse</th></tr></thead>
  <tbody>
    <tr><td>Where</td><td>Top left</td><td>Top right (FAULT)</td><td>Top right (0V)</td><td>Upper right (REV)</td></tr>
    <tr><td>Lit means</td><td>Motor power is present</td><td>The protection stage reports a fault</td><td>The protection stage reports over-voltage</td><td>The supply is connected the wrong way round (the silk says BLINK)</td></tr>
    <tr><td>Disable it</td><td>Cut JP1</td><td>Cut JPF101</td><td>Cut JPF102</td><td>Cut JPF103</td></tr>
  </tbody>
</table></div>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Motor does not turn</td><td>The enable line, the chip-select pin and SPI wiring, the Prime motor-voltage monitor, the supply on J2 and the coil wiring.</td></tr>
    <tr><td>Driver does not respond to SPI</td><td>The firmware build includes the TMC driver, the SPI channel and chip-select pin are right, and the data return is connected to J1 contact 8.</td></tr>
    <tr><td>Current differs from the request</td><td>The current scale is rounded by the firmware; see Configuration.</td></tr>
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
    <tr><td><a href="/images/extensions/stepper-driver-breakout-trinamic/stepper-driver-breakout-trinamic-schematic.png">Schematic (SVG)</a></td><td>The circuit diagram.</td></tr>
    <tr><td><a href="/images/extensions/stepper-driver-breakout-trinamic/stepper-driver-breakout-trinamic-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/stepper-driver-breakout-trinamic/stepper-driver-breakout-trinamic-diagram.png">Board drawing (SVG)</a></td><td>The top view used on this page, at full resolution</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-tr-mount-t">
  <title id="xb-tr-mount-t">Mounting drawing of the Trinamic stepper driver breakout board, component side: outline 55 by 62 millimetres with 4 mounting holes and 2 cable-tie holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="329.2" y="78.0" width="301.6" height="340.0" rx="0.0" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M329.2 56H630.8"/><path d="M329.2 50V62"/><path d="M630.8 50V62"/><path d="M656.8 78.0V418.0"/><path d="M650.8 78.0h12"/><path d="M650.8 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">55</text>
  <text x="668.8" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">62</text>
  <circle cx="329.2" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="317.2" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M271.2 104.0h30" fill="none"/><path d="M305.2 104.0l-8 -4v8z"/><path d="M271.2 104.0v30" fill="none"/><path d="M271.2 138.0l-4 -8h8z"/></g>
  <text x="309.2" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="267.2" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="370.3" cy="160.3" r="8.8" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M357.5 160.3h25.5M370.3 147.5v25.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="361.5" y="189.0" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  7.50, 15.00</text>
  <circle cx="589.7" cy="160.3" r="8.8" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M576.9 160.3h25.5M589.7 147.5v25.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="598.5" y="189.0" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  47.50, 15.00</text>
  <circle cx="370.3" cy="269.9" r="8.8" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M357.5 269.9h25.5M370.3 257.2v25.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="361.5" y="251.2" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">3</tspan>  7.50, 35.00</text>
  <circle cx="589.7" cy="269.9" r="8.8" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M576.9 269.9h25.5M589.7 257.2v25.5" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="598.5" y="251.2" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">4</tspan>  47.50, 35.00</text>
  <circle cx="543.1" cy="313.8" r="6.9" fill="#191919" stroke="#b3b3b3" stroke-width="1.5"/>
  <circle cx="578.2" cy="313.8" r="6.9" fill="#191919" stroke="#b3b3b3" stroke-width="1.5"/>
  <text x="560.6" y="298.0" text-anchor="middle" font-size="12" fill="#b3b3b3">cable tie</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 55 × 62&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>7.50</td><td>15.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>47.50</td><td>15.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>7.50</td><td>35.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>47.50</td><td>35.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>–</td><td>39.00</td><td>43.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
    <tr><td>–</td><td>45.40</td><td>43.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
  </tbody>
</table></div>

{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

The last column gives the source of each figure. **Open** means not specified.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Motor supply</td><td>J2</td><td>9 V</td><td>Open</td><td>26 V</td><td>Silk label; the design review leaves operation above 24&nbsp;V unsupported, and no range at or below 24&nbsp;V is approved</td></tr>
    <tr><td>Sense resistors</td><td>R13, R14</td><td>—</td><td>0.100 &Omega;, 1&nbsp;%, 1 W</td><td>—</td><td>Parts list</td></tr>
    <tr><td>Example current request</td><td>Firmware</td><td>—</td><td>0.45 A request</td><td>—</td><td>Nominal sine peak about 0.464 A, RMS about 0.328 A; not calibrated</td></tr>
    <tr><td>Standstill current</td><td>U1</td><td>—</td><td>—</td><td>1 A</td><td>Board silk (STANDSTILL &le; 1A); basis Open</td></tr>
    <tr><td>Surge diode, bulk capacitor</td><td>D1, C1</td><td>—</td><td>SMBJ26A, 100 &micro;F 35 V</td><td>—</td><td>Parts list</td></tr>
    <tr><td>Logic supply from host</td><td>J1 contact 1</td><td>Open</td><td>3.3 V</td><td>Open</td><td>Host current allowance Open</td></tr>
    <tr><td>Continuous motor current, thermal rise</td><td>U1</td><td>Open</td><td>Open</td><td>Open</td><td>The chip is marked HOT</td></tr>
    <tr><td>Protection ratings, startup and fault behaviour</td><td>Board</td><td>Open</td><td>Open</td><td>Open</td><td>Not specified</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Prime headers

The allocation above applies only to a Smoothieboard V2 P12 Prime2590. The silk reads GA for the host socket while the allocation uses sockets J37 and J36; check against your Prime. Verify the rail positions and numbered continuity with the power removed.

See all boards on the [extension boards](/extension-boards) page.
