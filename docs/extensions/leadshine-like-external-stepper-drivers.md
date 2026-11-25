---
layout: default
title: "Leadshine-like external stepper drivers"
description: "An isolated stepper power stage on a Trinamic TMC2590 with external transistors, a separate motor supply and SPI configuration: pinout, links, current setting and limits."
permalink: /extensions/leadshine-like-external-stepper-drivers
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Motors</p>
    <h1 id="leadshine-like-external-stepper-drivers">Leadshine-like external stepper drivers</h1>
    <p class="xb-lead">An external stepper power stage built around a Trinamic TMC2590 driving four AO4611 transistor packages, with the host signals separated from the motor side by digital isolators. It takes STEP, DIR, enable and SPI from the host and a separate 18 to 32&nbsp;V motor supply. It is a board of its own design, not a terminal adapter for any commercial drive with a similar name.</p>
    <p class="xb-badge">Design candidate · revision v18 · not for fabrication yet · not yet built or tested</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/leadshine-like-external-stepper-drivers/leadshine-like-external-stepper-drivers-diagram.png" alt="Top view of the Leadshine-like external stepper driver board: a ten-contact socket at the left, the driver chip and four transistor packages at the centre, a green four-way motor terminal at the right and a green two-way supply terminal below the centre.">
    <figcaption>Top view, drawn from the board&rsquo;s design files (revision v18). This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>TMC2590</b><span>Trinamic driver with external transistors</span></div>
  <div class="xb-stat"><b>18 to 32 V</b><span>silk label, absolute maximum 36 V</span></div>
  <div class="xb-stat"><b>2.3 A RMS</b><span>silk maximum, not a qualified rating</span></div>
  <div class="xb-stat"><b>Isolated</b><span>functional isolation only</span></div>
  <div class="xb-stat"><b>5 lights</b><span>green, amber and three red</span></div>
  <div class="xb-stat"><b>80 × 118</b><span>millimetres, four M3 holes</span></div>
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
  This is a design candidate that has not been built or tested, and it is not ready to energize. The board silk reads NOT FOR FAB, REVIEW, says the isolation is functional only, and says the input protection stage is unreleased. Do not join the host ground and the motor ground, switch the motor supply off before wiring the motor, and never hot-plug the supply or the motor. The supply must be able to absorb regenerated energy.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>An isolated, separately powered stepper channel with its current, thermal and pulse-rate limits to be established on the assembled board</td></tr>
    <tr><td>Driver</td><td>Trinamic TMC2590-TA (U1) with four AO4611 transistor packages (Q1 to Q4) and two 0.100&nbsp;&Omega; sense resistors (RS1, RS2)</td></tr>
    <tr><td>Isolation</td><td>An ISO7741 (U2) and an ISO7740 (U3) between the host and motor domains; functional isolation only. The host ground and motor ground are separate and must not be joined, for example by a USB lead or a shield.</td></tr>
    <tr><td>Motor supply</td><td>Screw terminal J2. The silk reads VM 18 to 32&nbsp;V DC regulated, absolute maximum 36&nbsp;V, 2.3&nbsp;A RMS maximum, no hot-plug. A 5&nbsp;A fuse position is marked F1.</td></tr>
    <tr><td>Input protection</td><td>A reverse-polarity transistor (Q5), a SMBJ36A surge diode and an LTC4368-type stage with fault, over-voltage and reverse lights; marked unreleased</td></tr>
    <tr><td>Socket</td><td>One ten-contact socket, J1 (Gadgeteer S in). Contact 2 is not connected.</td></tr>
    <tr><td>Lights</td><td>Supply power (green), stall (amber); fault, over-voltage and reverse (red), each with a cut link</td></tr>
    <tr><td>Test points</td><td>Twelve, TP1 to TP12, for the supplies, the grounds and the control lines</td></tr>
    <tr><td>Size</td><td>80 &times; 118&nbsp;mm with four M3 mounting holes and two cable-tie holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a></td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix. Component ratings quoted in earlier architecture research (60&nbsp;V, 10&nbsp;A) are not ratings of this board.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side. The mounting holes, cable-tie holes, test points, solder links and most small parts are not marked.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/leadshine-like-external-stepper-drivers/leadshine-like-external-stepper-drivers-diagram.png" alt="Top view of the Leadshine-like external stepper driver board with sixteen numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:6.5%;top:25.8%" aria-label="1: input socket">1<span class="xb-pop"><b>Input socket (J1)</b> — a ten-contact socket (Gadgeteer S in) carrying enable, STEP, DIR and four SPI lines from the host. The host ground is separate from the motor ground. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:25%;top:46.3%" aria-label="2: motor supply terminal">2<span class="xb-pop"><b>Motor supply terminal (J2)</b> — a two-way screw terminal for the motor supply, 18 to 32&nbsp;V on the silk: contact 1 positive (red), contact 2 negative (black). The silk says no hot-plug.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-3" style="left:91.5%;top:26%" aria-label="3: motor terminal">3<span class="xb-pop"><b>Motor terminal (J3)</b> — a four-way screw terminal: coil A on contacts 1 and 2 (A1, A2), coil B on 3 and 4 (B1, B2).</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:58.5%;top:26%" aria-label="4: driver chip">4<span class="xb-pop"><b>Driver chip (U1)</b> — a Trinamic TMC2590 stepper driver that controls the external transistor bridge, configured over SPI.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:34%;top:20.8%" aria-label="5: isolator U2">5<span class="xb-pop"><b>Digital isolator (U2)</b> — an ISO7741 isolator carrying STEP, DIR, enable and the data output between the host and motor domains.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:34%;top:30.8%" aria-label="6: isolator U3">6<span class="xb-pop"><b>Digital isolator (U3)</b> — an ISO7740 isolator carrying the clock, data input and chip select. The silk says functional isolation only.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:51.2%;top:15.2%" aria-label="7: power transistors">7<span class="xb-pop"><b>Bridge transistors (Q1 to Q4)</b> — four AO4611 complementary transistor packages, two on each side of the chip, that form the two H-bridges for the motor coils.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:59.8%;top:15.4%" aria-label="8: sense resistor 1">8<span class="xb-pop"><b>Sense resistor (RS1)</b> — a 0.100&nbsp;&Omega; current-sense resistor for one coil.</span></a>
      <a class="xb-mk xb-pb" href="#tour-9" style="left:59.8%;top:36.2%" aria-label="9: sense resistor 2">9<span class="xb-pop"><b>Sense resistor (RS2)</b> — a 0.100&nbsp;&Omega; current-sense resistor for the other coil.</span></a>
      <a class="xb-mk xb-pb" href="#tour-10" style="left:57.3%;top:46%" aria-label="10: bulk capacitors">10<span class="xb-pop"><b>Bulk capacitors</b> — 220&nbsp;&micro;F, 63&nbsp;V electrolytic capacitors on the motor supply. The silk says the supply must be able to sink regenerated energy.</span></a>
      <a class="xb-mk" href="#tour-11" style="left:31.7%;top:64.2%" aria-label="11: protection MOSFETs">11<span class="xb-pop"><b>Protection MOSFETs (QF101, QF102)</b> — the two large transistors of the input protection stage, in the area the silk marks as unreleased.</span></a>
      <a class="xb-mk xb-pb" href="#tour-12" style="left:46.8%;top:49.4%" aria-label="12: power light">12<span class="xb-pop"><b>Supply power light (D3)</b> — a green light that shows the motor supply. Cut JP2 to disable it.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-13" style="left:76.8%;top:25.8%" aria-label="13: stall light">13<span class="xb-pop"><b>Stall light (D4)</b> — an amber light for the driver stall output. Cut JP1 to disable it.</span></a>
      <a class="xb-mk xb-pl" href="#tour-14" style="left:4.8%;top:88.3%" aria-label="14: fault light">14<span class="xb-pop"><b>Fault light (DF102)</b> — a red light from the input protection stage. Cut JPF101 to disable it.</span></a>
      <a class="xb-mk xb-pl" href="#tour-15" style="left:4.8%;top:95%" aria-label="15: over-voltage light">15<span class="xb-pop"><b>Over-voltage light (DF103)</b> — a red light that reports over-voltage at the input. Cut JPF102 to disable it.</span></a>
      <a class="xb-mk xb-pr" href="#tour-16" style="left:87.8%;top:95%" aria-label="16: reverse light">16<span class="xb-pop"><b>Reverse light (DF106)</b> — a red light that reports a reversed supply. Cut JPF103 to disable it.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Input socket (J1)</b> — a ten-contact socket (Gadgeteer S in) carrying enable, STEP, DIR and four SPI lines from the host. The host ground is separate from the motor ground. <i>See the pinout.</i></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Motor supply terminal (J2)</b> — a two-way screw terminal for the motor supply, 18 to 32&nbsp;V on the silk: contact 1 positive (red), contact 2 negative (black). The silk says no hot-plug.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Motor terminal (J3)</b> — a four-way screw terminal: coil A on contacts 1 and 2 (A1, A2), coil B on 3 and 4 (B1, B2).</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Driver chip (U1)</b> — a Trinamic TMC2590 stepper driver that controls the external transistor bridge, configured over SPI.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Digital isolator (U2)</b> — an ISO7741 isolator carrying STEP, DIR, enable and the data output between the host and motor domains.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Digital isolator (U3)</b> — an ISO7740 isolator carrying the clock, data input and chip select. The silk says functional isolation only.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Bridge transistors (Q1 to Q4)</b> — four AO4611 complementary transistor packages, two on each side of the chip, that form the two H-bridges for the motor coils.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Sense resistor (RS1)</b> — a 0.100&nbsp;&Omega; current-sense resistor for one coil.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Sense resistor (RS2)</b> — a 0.100&nbsp;&Omega; current-sense resistor for the other coil.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Bulk capacitors</b> — 220&nbsp;&micro;F, 63&nbsp;V electrolytic capacitors on the motor supply. The silk says the supply must be able to sink regenerated energy.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Protection MOSFETs (QF101, QF102)</b> — the two large transistors of the input protection stage, in the area the silk marks as unreleased.</div></li>
    <li id="tour-12"><span class="xb-n">12</span><div><b>Supply power light (D3)</b> — a green light that shows the motor supply. Cut JP2 to disable it.</div></li>
    <li id="tour-13"><span class="xb-n">13</span><div><b>Stall light (D4)</b> — an amber light for the driver stall output. Cut JP1 to disable it.</div></li>
    <li id="tour-14"><span class="xb-n">14</span><div><b>Fault light (DF102)</b> — a red light from the input protection stage. Cut JPF101 to disable it.</div></li>
    <li id="tour-15"><span class="xb-n">15</span><div><b>Over-voltage light (DF103)</b> — a red light that reports over-voltage at the input. Cut JPF102 to disable it.</div></li>
    <li id="tour-16"><span class="xb-n">16</span><div><b>Reverse light (DF106)</b> — a red light that reports a reversed supply. Cut JPF103 to disable it.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1: input socket

Contact 1 is at the lower left of the socket, next to the small white dot; the odd contacts are in the lower row. The silk prints the contact list beside the socket.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Host logic supply</td></tr>
    <tr><td>2</td><td>Not connected</td><td>Not a 5&nbsp;V supply input</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">ENABLE_N</span></td><td>Enable request, active low</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">STEP</span></td><td></td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">DIR</span></td><td></td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">CS_N</span></td><td>SPI chip select, active low</td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-sig">MOSI</span></td><td>SPI data to the driver</td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">MISO</span></td><td>SPI data from the driver; enabled only while chip select is low</td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">SCK</span></td><td>SPI clock</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Host ground</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Power and motor connectors

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Connector</th><th>Contact</th><th>Function</th></tr></thead>
  <tbody>
    <tr><td rowspan="2">J2 motor supply</td><td>1</td><td><span class="xb-pill xb-p-sig">VM</span> positive (red on the silk)</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-gnd">GND_M</span> motor ground (black on the silk)</td></tr>
    <tr><td rowspan="4">J3 motor</td><td>1</td><td><span class="xb-pill xb-p-sig">A1</span> coil A</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-sig">A2</span> coil A</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">B1</span> coil B</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">B2</span> coil B</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Pair the motor coils with the power removed and connect each pair to J3, never across the two coils.

### Solder links and test points

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>Effect</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>JP1</td><td>Cut to disable the stall light (D4)</td><td>Bridged</td></tr>
    <tr><td>JP2</td><td>Cut to disable the supply power light (D3)</td><td>Bridged</td></tr>
    <tr><td>JPF101</td><td>Cut to disable the fault light</td><td>Bridged</td></tr>
    <tr><td>JPF102</td><td>Cut to disable the over-voltage light</td><td>Bridged</td></tr>
    <tr><td>JPF103</td><td>Cut to disable the reverse light</td><td>Bridged</td></tr>
  </tbody>
</table></div>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Test point</th><th>Signal</th><th>Domain</th></tr></thead>
  <tbody>
    <tr><td>TP1</td><td>+VM, the motor supply</td><td>Motor</td></tr>
    <tr><td>TP2, TP4</td><td>Motor ground</td><td>Motor</td></tr>
    <tr><td>TP3</td><td>+5V_M, the motor-side 5&nbsp;V</td><td>Motor</td></tr>
    <tr><td>TP5</td><td>SG_TST, the stall test output</td><td>Motor</td></tr>
    <tr><td>TP6, TP7, TP8</td><td>ENN, STEP and DIR at the driver</td><td>Motor</td></tr>
    <tr><td>TP9</td><td>+3V3</td><td>Host</td></tr>
    <tr><td>TP10</td><td>Host ground</td><td>Host</td></tr>
    <tr><td>TP11, TP12</td><td>Enable request and chip select as received</td><td>Host</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Take host-side measurements against the host ground and motor-side measurements against the motor ground; do not mix the two references.

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>The design is not yet built or released for fabrication.</span></div>
  <div class="xb-card"><b>A stepper motor</b><span>With its coil pairs identified.</span></div>
  <div class="xb-card"><b>A motor supply</b><span>Regulated, current-limited, able to sink regenerated energy, separate from the controller.</span></div>
  <div class="xb-card"><b>Firmware with TMC2590 support</b><span>A build that includes the driver, and a free chip-select pin.</span></div>
  <div class="xb-card"><b>Host leads</b><span>Individual conductors from two Prime sockets to J1.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Wire the motor</h3>
    <p>With all power removed, find the two coil pairs and connect each pair to J3: one pair to contacts 1 and 2, the other to 3 and 4.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the host side</h3>
    <p>Motion lines come from one Prime socket and SPI lines from another, as individual conductors, not a same-numbered ribbon. Verify the headers, the rail positions and the cable orientation with the power removed.</p>
    <p class="xb-expect">Allocate every contact against one named Prime revision. Keep the host ground and the motor ground separate.</p>
  </li>
  <li class="xb-step">
    <h3>Provide the motor supply separately</h3>
    <p>The motor supply enters on J2 from its own source. The Prime&rsquo;s own motor-voltage monitor must also read a finite value of at least 6&nbsp;V, because the firmware checks that monitor before it enables any TMC driver; the supply on J2 alone does not satisfy it.</p>
  </li>
  <li class="xb-step">
    <h3>Initialize the driver first</h3>
    <p>Configure the driver over SPI with the external enable inactive, and verify the enable polarity and the disabled start-up with the motor unloaded, before applying motor power.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>One stepper axis on this TMC2590 board</td><td>Actuator with the tmc2590 driver type, and the tmc2590 section</td><td>The block below</td></tr>
    <tr><td>The external enable line</td><td>Switch, one digital output</td><td>The same block</td></tr>
    <tr><td>Supply and fault supervision</td><td>None</td><td>Not provided: this example is not a fault interlock</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

This board needs the real TMC2590 driver, not the external driver type alone. The checked SmoothieV2 source (revision 2a21c0108b1d095ecd8b2b9358e94055f053c003) constructs and initializes it in a build with the TMC driver option; its common SPI channel runs in mode 3 at 500&nbsp;kHz.

The example is a candidate for a Smoothieboard V2 P12 Prime2590: socket J37 contact 3 to PB1 (enable), 4 to PJ4 (STEP), 5 to PA4 (DIR); socket J36 contact 6 to PD15 (chip select), 7 to the controller data output, 8 from the driver data return, 9 to the clock; J1 contact 1 takes 3.3&nbsp;V and contact 10 the host ground. Merge the block into a working base configuration, reserve the pins and the SPI bus, and leave every other motor unconnected, because the enable command enables all registered motors.

```ini
[actuator]
alpha.driver = tmc2590
alpha.step_pin = PJ4
alpha.dir_pin = PA4
alpha.en_pin = nc
alpha.microsteps = 1

[tmc2590]
common.spi_channel = 0
alpha.spi_cs_pin = PD15
alpha.sense_resistor = 100
alpha.max_current = 500
alpha.standstill_current = 0

[current control]
alpha.current = 0.5

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

The two sense resistors are separate 0.100&nbsp;&Omega; coil shunts, so the entry is 100 milliohms. A 0.5&nbsp;A request does not give an exact 0.5&nbsp;A setting: the driver routine rounds the current scale, which gives a nominal sine peak of about 0.487&nbsp;A and an RMS value near 0.344&nbsp;A. The maximum-current entry only clips the request. After independent electrical qualification and verified driver readback, a slow bench check sends `M43.21` and `M18`, then `M17`, waits five seconds, sends `M42.21`, waits five seconds, then `test pulse x 2` (about 20 seconds), and ends with `M43.21` before `M18`. The pulses are five seconds high and five seconds low with the direction unchanged, nominally two full steps (3.6 degrees); movement and direction remain unmeasured, and no motion or homing command or steps-per-millimetre value follows from it.

A handled halt turns the switch off, but boot, brownout, loss of the external supply and stalled communications are not covered by it. Automatic supply and fault supervision for a machine would have to be added and qualified. The source gives no SPI propagation margin through the isolators, and the driver starts the transfer without an explicit chip-select setup delay; both need hardware verification. This applies to that source revision only; it does not describe firmware installed on a controller.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 170" role="img" aria-labelledby="xb-how-t">
    <title id="xb-how-t">Host signals on J1 cross two isolators to the TMC2590 driver, which switches four transistor packages that drive the two coils on J3; motor power enters at J2 through the input protection.</title>
    <g font-size="13" font-weight="700" text-anchor="middle" fill="#e6ebf2">
      <rect x="10" y="55" width="130" height="60" rx="8" fill="#1f2226" stroke="#e0a877"/><text x="75" y="80">J1 input</text><text x="75" y="100" font-weight="400" fill="#a9b4c2">host domain</text>
      <rect x="190" y="55" width="140" height="60" rx="8" fill="#212936" stroke="#5fb3ff"/><text x="260" y="80">Isolators</text><text x="260" y="100" font-weight="400" fill="#a9b4c2">U2 and U3</text>
      <rect x="380" y="55" width="140" height="60" rx="8" fill="#212936" stroke="#6fe08a"/><text x="450" y="80">TMC2590</text><text x="450" y="100" font-weight="400" fill="#a9b4c2">SPI configured</text>
      <rect x="570" y="55" width="140" height="60" rx="8" fill="#212936" stroke="#6fe08a"/><text x="640" y="80">Q1 to Q4</text><text x="640" y="100" font-weight="400" fill="#a9b4c2">to J3 coils</text>
      <rect x="760" y="55" width="130" height="60" rx="8" fill="#212936" stroke="#5fb3ff"/><text x="825" y="80">Protection</text><text x="825" y="100" font-weight="400" fill="#a9b4c2">Q5, D1, LTC4368</text>
      <rect x="930" y="55" width="60" height="60" rx="8" fill="#1f2226" stroke="#e0a877"/><text x="960" y="90">J2</text>
    </g>
    <g stroke-width="3" fill="none" stroke="#a9b4c2"><path d="M140 85H190"/><path d="M330 85H380"/><path d="M520 85H570"/><path d="M760 85H710"/><path d="M930 85H890"/></g>
  </svg>
  </div>
  <figcaption>Host signals cross the isolators; the motor supply enters separately on J2 and reaches the bridge after the protection stage.</figcaption>
</figure>
{:/nomarkdown}

A small inverter turns chip select into the output enable of the data-return isolator, so the data return is driven only while chip select is low. Software enabling of the chopper and the separate external enable line are different things; neither replaces the other.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-green"></span>VM power (D3)</th><th><span class="xb-led xb-led-amber"></span>Stall (D4)</th><th><span class="xb-led xb-led-red"></span>Fault</th><th><span class="xb-led xb-led-red"></span>Over-voltage</th><th><span class="xb-led xb-led-red"></span>Reverse</th></tr></thead>
  <tbody>
    <tr><td>Where</td><td>Centre, below the driver</td><td>Right of the driver</td><td>Lower left (FAULT)</td><td>Lower left (OV)</td><td>Lower right (REVERSE)</td></tr>
    <tr><td>Lit means</td><td>The motor supply is present</td><td>The driver reports a stall (SG)</td><td>The protection stage reports a fault</td><td>The protection stage reports over-voltage</td><td>The supply is connected the wrong way round (the silk says BLINK)</td></tr>
    <tr><td>Disable it</td><td>Cut JP2</td><td>Cut JP1</td><td>Cut JPF101</td><td>Cut JPF102</td><td>Cut JPF103</td></tr>
  </tbody>
</table></div>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Firmware reports the motor supply absent</td><td>The Prime&rsquo;s own motor-voltage monitor must be finite and at least 6&nbsp;V; stop rather than toggling the external enable.</td></tr>
    <tr><td>Driver does not respond to SPI</td><td>The firmware build includes the TMC driver, the SPI channel and chip-select pin are right, 3.3&nbsp;V is present on TP9, and the data return reaches J1 contact 8.</td></tr>
    <tr><td>Motor does not turn</td><td>The external enable level at TP6, STEP at TP7, the supply at TP1 and the coil wiring.</td></tr>
    <tr><td>Current differs from the request</td><td>The firmware rounds the current scale; see Configuration.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

{% include _includes/stepper-driver-board-comparison.html %}

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>Revision</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/leadshine-like-external-stepper-drivers/leadshine-like-external-stepper-drivers-schematic.pdf">Schematic (PDF)</a></td><td>v18</td><td>The complete circuit diagram. Its title block reads v10.</td></tr>
    <tr><td><a href="/images/extensions/leadshine-like-external-stepper-drivers/leadshine-like-external-stepper-drivers-bom.csv">Parts list (CSV)</a></td><td>v18</td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/leadshine-like-external-stepper-drivers/leadshine-like-external-stepper-drivers-diagram.png">Board drawing (SVG)</a></td><td>v18</td><td>The top view used on this page, at full resolution</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-ls-mount-t">
  <title id="xb-ls-mount-t">Mounting drawing of the Leadshine-like external stepper driver board, component side: outline 80 by 118 millimetres with 4 mounting holes and 2 cable-tie holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="364.7" y="78.0" width="230.5" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M364.7 56H595.3"/><path d="M364.7 50V62"/><path d="M595.3 50V62"/><path d="M621.3 78.0V418.0"/><path d="M615.3 78.0h12"/><path d="M615.3 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">80</text>
  <text x="633.3" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">118</text>
  <circle cx="364.7" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="352.7" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M306.7 104.0h30" fill="none"/><path d="M340.7 104.0l-8 -4v8z"/><path d="M306.7 104.0v30" fill="none"/><path d="M306.7 138.0l-4 -8h8z"/></g>
  <text x="344.7" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="302.7" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="393.6" cy="106.8" r="4.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M384.9 106.8h17.2M393.6 98.2v17.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="388.9" y="131.4" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  10.00, 10.00</text>
  <circle cx="566.4" cy="106.8" r="4.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M557.8 106.8h17.2M566.4 98.2v17.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="571.1" y="131.4" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  70.00, 10.00</text>
  <circle cx="393.6" cy="222.1" r="4.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M384.9 222.1h17.2M393.6 213.5v17.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="388.9" y="246.7" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  10.00, 50.00</text>
  <circle cx="566.4" cy="222.1" r="4.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M557.8 222.1h17.2M566.4 213.5v17.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="571.1" y="246.7" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  70.00, 50.00</text>
  <circle cx="390.7" cy="89.5" r="3.6" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <circle cx="405.1" cy="89.5" r="3.6" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <path d="M397.9 96.1V421.0" stroke="#a9b4c2" stroke-width="1" fill="none"/>
  <text x="397.9" y="434.0" text-anchor="middle" font-size="12" fill="#a9b4c2">cable tie</text>
  <text x="480.0" y="464.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 80 × 118&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>10.00</td><td>10.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>70.00</td><td>10.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>10.00</td><td>50.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>70.00</td><td>50.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>–</td><td>9.00</td><td>4.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
    <tr><td>–</td><td>14.00</td><td>4.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
  </tbody>
</table></div>

{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Every figure is a design value, a board silk value or a value from the parts list, as the last column says. None is a measurement on a built board. **Open** means not established.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Motor supply</td><td>J2</td><td>18 V</td><td>Open</td><td>32 V</td><td>Silk label, regulated; absolute maximum 36&nbsp;V on the silk. Design intent only</td></tr>
    <tr><td>Motor current</td><td>J3</td><td>—</td><td>—</td><td>2.3 A RMS</td><td>Silk maximum; not qualified</td></tr>
    <tr><td>Fuse position</td><td>F1</td><td>—</td><td>5 A</td><td>—</td><td>Silk marking; fitting and rating Open</td></tr>
    <tr><td>Sense resistors</td><td>RS1, RS2</td><td>—</td><td>0.100 &Omega; each</td><td>—</td><td>Parts list</td></tr>
    <tr><td>Example current request</td><td>Firmware</td><td>—</td><td>0.5 A request</td><td>—</td><td>Nominal sine peak about 0.487 A, RMS about 0.344 A; not measured</td></tr>
    <tr><td>Surge diode, bulk capacitors</td><td>D1, C1, C2</td><td>—</td><td>SMBJ36A, 220 &micro;F 63 V</td><td>—</td><td>Parts list</td></tr>
    <tr><td>Logic supply from host</td><td>J1 contact 1</td><td>Open</td><td>3.3 V</td><td>Open</td><td>Host current allowance Open</td></tr>
    <tr><td>Isolation rating</td><td>U2, U3</td><td>Open</td><td>Open</td><td>Open</td><td>The silk says functional isolation only</td></tr>
    <tr><td>Thermal rise, SPI timing, regeneration</td><td>Board</td><td>Open</td><td>Open</td><td>Open</td><td>Not established</td></tr>
    <tr><td>Protection ratings, start-up and fault behaviour</td><td>Board</td><td>Open</td><td>Open</td><td>Open</td><td>Not established; the stage is marked unreleased</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Prime headers

The candidate allocation above applies only to a Smoothieboard V2 P12 Prime2590 and has not passed review. The Prime&rsquo;s physical connector carries a noted rail-position discrepancy: verify numbered continuity with the power removed, and name the Prime revision for any allocation. No rail-current allowance, timer route or bus multiplexer is implied.

See all boards on the [extension boards](/extension-boards) page.
