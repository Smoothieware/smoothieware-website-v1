---
layout: default
title: "Pololu driver breakout board"
description: "A carrier for three Pololu 2128 A4988 stepper driver modules with separate motor power, three motor terminals and a chain socket: pinout, links and limits."
permalink: /extensions/pololu-driver-breakout-board
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Motors</p>
    <h1 id="pololu-driver-breakout-board">Pololu driver breakout board</h1>
    <p class="xb-lead">A carrier for up to three genuine Pololu 2128 A4988 Black Edition stepper modules. Each module takes STEP and DIR from the host, with one enable shared by all three. Motor power comes from its own XT60 connector and goes to three screw terminals, so motor current does not flow through the controller.</p>
    <p class="xb-badge">Design candidate · revision v34 · not yet built or tested</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/pololu-driver-breakout-board/pololu-driver-breakout-board-diagram.svg" alt="Top view of the Pololu driver breakout board: two ten-contact sockets at the top, three driver module sockets in a row, an XT60 power connector at the left and three motor terminals below.">
    <figcaption>Top view, drawn from the board&rsquo;s design files (revision v34). This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>3 &times; A4988</b><span>Pololu 2128 Black Edition carriers</span></div>
  <div class="xb-stat"><b>8 to 16 V</b><span>motor supply design target, not qualified</span></div>
  <div class="xb-stat"><b>Full step</b><span>mode inputs hard-wired low</span></div>
  <div class="xb-stat"><b>Shared enable</b><span>one active-low line for all three</span></div>
  <div class="xb-stat"><b>3 lights</b><span>red fault, over-voltage, reverse</span></div>
  <div class="xb-stat"><b>115 × 139</b><span>millimetres, four M3 holes</span></div>
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
  This is a design candidate that has not been built or tested. The input protection stage is marked unreleased on the board silk. Power the motor supply only from a separate source on the XT60 connector, and never unplug a motor while the supply is energized. The ratings below are design targets, not qualified values.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>Carry up to three Pololu stepper driver modules and bring out their motor connections</td></tr>
    <tr><td>Driver modules</td><td>Pololu 2128 A4988 Black Edition, in sockets A1, A2 and A3. Generic clones and other driver chips are not automatically substitutes.</td></tr>
    <tr><td>Host signals</td><td>J1 contacts 3 to 8: STEP and DIR for each of the three drivers; contact 9: one shared active-low enable</td></tr>
    <tr><td>Logic level</td><td>3.3&nbsp;V logic. The 5&nbsp;V contact is forwarded to the chain socket.</td></tr>
    <tr><td>Motor power</td><td>XT60 connector J3. The retained design target is 8 to 16&nbsp;V DC; the 35&nbsp;V figure of the carrier module is not permission to run a 24&nbsp;V system on this board.</td></tr>
    <tr><td>Stepping mode</td><td>The mode inputs of every module are tied low on the board, which gives full steps. Reset and sleep are pulled up, and the enable defaults to disabled.</td></tr>
    <tr><td>Motor current</td><td>Set on each module&rsquo;s own trimmer; the board does not program it</td></tr>
    <tr><td>Input protection</td><td>An LTC4368-type stage with fault, over-voltage and reverse lights, plus an SMBJ18A surge diode; marked unreleased</td></tr>
    <tr><td>Sockets</td><td>Two ten-contact sockets: J1 in, J2 chain out through ten solder links</td></tr>
    <tr><td>Size</td><td>115 &times; 139&nbsp;mm with four M3 mounting holes, four more M3 holes for the carriers and two cable-tie holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a></td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side. The mounting holes, cable-tie holes and most small parts are not marked.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/pololu-driver-breakout-board/pololu-driver-breakout-board-diagram.svg" alt="Top view of the Pololu driver breakout board with fourteen numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:18%;top:6.5%" aria-label="1: input socket">1<span class="xb-pop"><b>Input socket (J1)</b> — a ten-contact socket carrying 3.3&nbsp;V, 5&nbsp;V, STEP and DIR for three drivers, a shared active-low enable and ground. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-2" style="left:86.2%;top:6.5%" aria-label="2: chain socket">2<span class="xb-pop"><b>Chain socket (J2)</b> — a second socket that repeats the J1 signals through ten solder links, to feed another board.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-3" style="left:6.8%;top:39.4%" aria-label="3: motor power input">3<span class="xb-pop"><b>Motor power input (J3)</b> — an XT60 connector for the motor supply, kept separate from the controller. Never take motor current from the host.</span></a>
      <a class="xb-mk xb-pl" href="#tour-4" style="left:21.8%;top:52.3%" aria-label="4: motor 1 terminal">4<span class="xb-pop"><b>Motor 1 terminal (J4)</b> — a four-way screw terminal for one stepper: winding 1 on contacts 1 and 2, winding 2 on 3 and 4.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:51.8%;top:52.3%" aria-label="5: motor 2 terminal">5<span class="xb-pop"><b>Motor 2 terminal (J5)</b> — the same four-way terminal for the second driver.</span></a>
      <a class="xb-mk xb-pr" href="#tour-6" style="left:81.8%;top:52.3%" aria-label="6: motor 3 terminal">6<span class="xb-pop"><b>Motor 3 terminal (J6)</b> — the same four-way terminal for the third driver. The silk says no motor hot-plug.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-7" style="left:21.6%;top:26.6%" aria-label="7: driver socket A1">7<span class="xb-pop"><b>Driver socket A1</b> — a socket for a Pololu 2128 A4988 Black Edition carrier. Other carriers are not substitutes.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:51.5%;top:26.6%" aria-label="8: driver socket A2">8<span class="xb-pop"><b>Driver socket A2</b> — the second carrier socket, same type.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-9" style="left:81.5%;top:26.6%" aria-label="9: driver socket A3">9<span class="xb-pop"><b>Driver socket A3</b> — the third carrier socket, same type.</span></a>
      <a class="xb-mk xb-pb" href="#tour-10" style="left:41.5%;top:43.7%" aria-label="10: bulk capacitors">10<span class="xb-pop"><b>Bulk capacitors</b> — electrolytic capacitors on the motor supply near the carriers, to absorb supply spikes.</span></a>
      <a class="xb-mk xb-pb" href="#tour-11" style="left:34.5%;top:44%" aria-label="11: surge diode">11<span class="xb-pop"><b>Surge diode (D1)</b> — an SMBJ18A surge-protection diode on the motor supply.</span></a>
      <a class="xb-mk" href="#tour-12" style="left:46%;top:90.5%" aria-label="12: input protection">12<span class="xb-pop"><b>Input protection (UF101)</b> — an LTC4368-type protection stage on the motor supply, drawn in the unreleased area at the bottom of the board.</span></a>
      <a class="xb-mk xb-pl" href="#tour-13" style="left:3.5%;top:90%" aria-label="13: fault light">13<span class="xb-pop"><b>Fault light</b> — a red light for a protection fault. Cut JPF101 to disable it.</span></a>
      <a class="xb-mk xb-pb" href="#tour-14" style="left:71%;top:10%" aria-label="14: chain links">14<span class="xb-pop"><b>Chain links (SJ1 to SJ10)</b> — ten solder links that join the input signals to the chain socket J2.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Input socket (J1)</b> — a ten-contact socket carrying 3.3&nbsp;V, 5&nbsp;V, STEP and DIR for three drivers, a shared active-low enable and ground. <i>See the pinout.</i></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket (J2)</b> — a second socket that repeats the J1 signals through ten solder links, to feed another board.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Motor power input (J3)</b> — an XT60 connector for the motor supply, kept separate from the controller. Never take motor current from the host.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Motor 1 terminal (J4)</b> — a four-way screw terminal for one stepper: winding 1 on contacts 1 and 2, winding 2 on 3 and 4.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Motor 2 terminal (J5)</b> — the same four-way terminal for the second driver.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Motor 3 terminal (J6)</b> — the same four-way terminal for the third driver. The silk says no motor hot-plug.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Driver socket A1</b> — a socket for a Pololu 2128 A4988 Black Edition carrier. Other carriers are not substitutes.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Driver socket A2</b> — the second carrier socket, same type.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Driver socket A3</b> — the third carrier socket, same type.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Bulk capacitors</b> — electrolytic capacitors on the motor supply near the carriers, to absorb supply spikes.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Surge diode (D1)</b> — an SMBJ18A surge-protection diode on the motor supply.</div></li>
    <li id="tour-12"><span class="xb-n">12</span><div><b>Input protection (UF101)</b> — an LTC4368-type protection stage on the motor supply, drawn in the unreleased area at the bottom of the board.</div></li>
    <li id="tour-13"><span class="xb-n">13</span><div><b>Fault light</b> — a red light for a protection fault. Cut JPF101 to disable it.</div></li>
    <li id="tour-14"><span class="xb-n">14</span><div><b>Chain links (SJ1 to SJ10)</b> — ten solder links that join the input signals to the chain socket J2.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1: input socket and J2: chain socket

Contact 1 is at the lower left of each socket as drawn, next to the small arrow below it; the odd contacts are in the lower row. J2 repeats the J1 signals through solder links.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>J1 (input)</th><th>J2 (chain)</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td><span class="xb-pill xb-p-3v3">3.3 V</span> via SJ1</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span> forwarded to the chain</td><td><span class="xb-pill xb-p-5v">5 V</span> via SJ2</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">STEP1</span></td><td>STEP1 via SJ3</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">DIR1</span></td><td>DIR1 via SJ4</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-sig">STEP2</span></td><td>STEP2 via SJ5</td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">DIR2</span></td><td>DIR2 via SJ6</td></tr>
    <tr><td>7</td><td><span class="xb-pill xb-p-sig">STEP3</span></td><td>STEP3 via SJ7</td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">DIR3</span></td><td>DIR3 via SJ8</td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">ENABLE_N</span> shared, active low</td><td>ENABLE_N via SJ9</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td><span class="xb-pill xb-p-gnd">GND</span> via SJ10</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Power and motor connectors

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Connector</th><th>Contact</th><th>Function</th></tr></thead>
  <tbody>
    <tr><td rowspan="2">J3 power (XT60)</td><td>1</td><td><span class="xb-pill xb-p-sig">VIN</span> motor supply positive</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td rowspan="4">J4 motor 1</td><td>1, 2</td><td>Winding 1: 1A and 1B</td></tr>
    <tr><td>3, 4</td><td>Winding 2: 2A and 2B</td></tr>
    <tr><td colspan="2">J5 motor 2</td><td>The same order, for the second driver</td></tr>
    <tr><td colspan="2">J6 motor 3</td><td>The same order, for the third driver</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Identify the two winding pairs of the motor with the power removed before wiring it. The XT60 polarity is taken from the schematic; check it against the plug.

### Solder links

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>Effect</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>SJ1 to SJ10</td><td>Join each J1 signal to the same contact of J2. Cut to isolate the chain socket.</td><td>Normally-closed link part, so bridged by default; confirm on the board</td></tr>
    <tr><td>JPF101</td><td>Cut to disable the fault light</td><td>Bridged</td></tr>
    <tr><td>JPF102</td><td>Cut to disable the over-voltage light</td><td>Bridged</td></tr>
    <tr><td>JPF103</td><td>Cut to disable the reverse-connection light</td><td>Bridged</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>The design is not yet built.</span></div>
  <div class="xb-card"><b>Pololu 2128 modules</b><span>One to three genuine A4988 Black Edition carriers.</span></div>
  <div class="xb-card"><b>A motor supply</b><span>Separate from the controller, on the XT60 connector.</span></div>
  <div class="xb-card"><b>Stepper motors</b><span>With their winding pairs identified.</span></div>
  <div class="xb-card"><b>A host cable</b><span>From a Prime header to J1. The allocation is a candidate.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Identify the motor windings</h3>
    <p>With all power removed, find the two winding pairs and wire them to J4 contacts 1 and 2 and 3 and 4.</p>
  </li>
  <li class="xb-step">
    <h3>Fit one module and set its current</h3>
    <p>Check the module orientation against the motor-supply and logic pin markings. Set the current limit with the module&rsquo;s own procedure before any motor test. The board does not set it.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the host</h3>
    <p>Run a cable from the Prime header to J1. Verify the header, the rail positions and the cable orientation with the power removed. Never power the motors from the host rails.</p>
    <p class="xb-expect">The Prime allocation under Configuration is a candidate for one named revision; it implies no rail-current allowance.</p>
  </li>
  <li class="xb-step">
    <h3>Leave the other sockets empty</h3>
    <p>The enable is shared, so the board cannot disable one module on its own. For a single-motor test, leave the other two sockets empty and their motor terminals unconnected.</p>
  </li>
  <li class="xb-step">
    <h3>Power the motors last</h3>
    <p>Apply the motor supply only after the logic is verified, and never unplug a motor while the supply is energized.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>One stepper axis on an external driver</td><td>Actuator with the external driver type</td><td>The block below, for socket A1</td></tr>
    <tr><td>Module current or stepping mode set from firmware</td><td>None</td><td>Not possible: set on the module; the board ties the mode inputs low</td></tr>
    <tr><td>Independent enable per module</td><td>None</td><td>Not possible: the enable is shared</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The checked SmoothieV2 source (revision 2a21c0108b1d095ecd8b2b9358e94055f053c003) supports external STEP and DIR drivers. The block below is a single-motor example for socket A1, using a Smoothieboard V2 P12 Prime2590 candidate allocation: J37 contacts 3 to 9 map to PB1, PJ4, PA4, PG0, PJ3, PG1 and PJ2, with contacts 1, 2 and 10 as 3.3&nbsp;V, 5&nbsp;V and ground. Merge it into a working base configuration, and reserve the pins.

```ini
[actuator]
alpha.driver = external
alpha.step_pin = PB1
alpha.dir_pin = PJ4
alpha.en_pin = PJ2!
beta.en_pin = nc
gamma.en_pin = nc
```

The first actuator owns the shared enable, and the enable command enables every configured motor, so this example is for one populated socket. External mode does not program the module current or its stepping mode. This applies to that revision only; it does not describe firmware installed on a controller.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 170" role="img" aria-labelledby="xb-how-t">
    <title id="xb-how-t">The host sends STEP, DIR and a shared enable to three driver modules; the motor supply enters at the XT60 connector, passes the input protection and feeds the modules, which drive the three motor terminals.</title>
    <g font-size="13" font-weight="700" text-anchor="middle" fill="#e6ebf2">
      <rect x="20" y="55" width="150" height="60" rx="8" fill="#1f2226" stroke="#e0a877"/><text x="95" y="80">J1 input</text><text x="95" y="100" font-weight="400" fill="#a9b4c2">STEP, DIR, enable</text>
      <rect x="230" y="55" width="180" height="60" rx="8" fill="#212936" stroke="#6fe08a"/><text x="320" y="80">Three A4988 modules</text><text x="320" y="100" font-weight="400" fill="#a9b4c2">Pololu 2128 carriers</text>
      <rect x="470" y="55" width="150" height="60" rx="8" fill="#1f2226" stroke="#e0a877"/><text x="545" y="80">J4, J5, J6</text><text x="545" y="100" font-weight="400" fill="#a9b4c2">motor terminals</text>
      <rect x="680" y="55" width="150" height="60" rx="8" fill="#212936" stroke="#5fb3ff"/><text x="755" y="80">Input protection</text><text x="755" y="100" font-weight="400" fill="#a9b4c2">LTC4368, D1</text>
      <rect x="880" y="55" width="100" height="60" rx="8" fill="#1f2226" stroke="#e0a877"/><text x="930" y="80">J3</text><text x="930" y="100" font-weight="400" fill="#a9b4c2">XT60</text>
    </g>
    <g stroke-width="3" fill="none" stroke="#a9b4c2"><path d="M170 85H230"/><path d="M410 85H470"/><path d="M680 85H620"/><path d="M880 85H830"/></g>
  </svg>
  </div>
  <figcaption>Logic comes in on J1; motor power comes in separately on J3 and reaches the modules after the protection stage.</figcaption>
</figure>
{:/nomarkdown}

Each module receives its STEP and DIR from J1. The three modules share the enable, which defaults to disabled. J2 passes the same signals on to another board through ten solder links.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-red"></span>Fault</th><th><span class="xb-led xb-led-red"></span>Over-voltage</th><th><span class="xb-led xb-led-red"></span>Reverse</th></tr></thead>
  <tbody>
    <tr><td>Where</td><td>Lower left, marked FAULT</td><td>Lower left, marked OV</td><td>Lower right, marked REVERSE</td></tr>
    <tr><td>Lit means</td><td>The protection stage reports a fault</td><td>The protection stage reports over-voltage</td><td>The supply is connected the wrong way round (the silk says BLINK)</td></tr>
    <tr><td>Disable it</td><td>Cut JPF101</td><td>Cut JPF102</td><td>Cut JPF103</td></tr>
  </tbody>
</table></div>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Motor does not turn</td><td>The enable level (active low, default disabled), the motor supply on J3, the module current setting, the winding wiring.</td></tr>
    <tr><td>Motor turns the wrong way</td><td>Swap the wires of one winding with the power removed, or invert the direction pin in the configuration.</td></tr>
    <tr><td>More than one motor moves</td><td>The enable is shared; the board cannot disable one module alone.</td></tr>
    <tr><td>Steps are coarse</td><td>The mode inputs are tied low on this board, so full steps are the only mode.</td></tr>
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
    <tr><td><a href="/images/extensions/pololu-driver-breakout-board/pololu-driver-breakout-board-schematic.pdf">Schematic (PDF)</a></td><td>v34</td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/pololu-driver-breakout-board/pololu-driver-breakout-board-bom.csv">Parts list (CSV)</a></td><td>v34</td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/pololu-driver-breakout-board/pololu-driver-breakout-board-diagram.svg">Board drawing (SVG)</a></td><td>v34</td><td>The top view used on this page, at full resolution</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-pl-mount-t">
  <title id="xb-pl-mount-t">Mounting drawing of the Pololu driver breakout board, component side: outline 115 by 139 millimetres with 4 mounting holes and 2 cable-tie holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="339.4" y="78.0" width="281.3" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M339.4 56H620.6"/><path d="M339.4 50V62"/><path d="M620.6 50V62"/><path d="M646.6 78.0V418.0"/><path d="M640.6 78.0h12"/><path d="M640.6 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">115</text>
  <text x="658.6" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">139</text>
  <circle cx="339.4" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="327.4" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M281.4 104.0h30" fill="none"/><path d="M315.4 104.0l-8 -4v8z"/><path d="M281.4 104.0v30" fill="none"/><path d="M281.4 138.0l-4 -8h8z"/></g>
  <text x="319.4" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="277.4" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="363.8" cy="102.5" r="4.0" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M355.8 102.5h16.0M363.8 94.5v16.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="359.8" y="126.5" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  10.00, 10.00</text>
  <circle cx="608.4" cy="102.5" r="4.0" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M600.4 102.5h16.0M608.4 94.5v16.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="612.4" y="126.5" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  110.00, 10.00</text>
  <circle cx="363.8" cy="249.2" r="4.0" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M355.8 249.2h16.0M363.8 241.2v16.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="359.8" y="235.2" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  10.00, 70.00</text>
  <circle cx="608.4" cy="249.2" r="4.0" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M600.4 249.2h16.0M608.4 241.2v16.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="612.4" y="235.2" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  110.00, 70.00</text>
  <circle cx="346.7" cy="85.3" r="3.1" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <circle cx="358.9" cy="85.3" r="3.1" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <path d="M352.8 91.4V421.0" stroke="#a9b4c2" stroke-width="1" fill="none"/>
  <text x="352.8" y="434.0" text-anchor="middle" font-size="12" fill="#a9b4c2">cable tie</text>
  <text x="480.0" y="464.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 115 × 139&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>10.00</td><td>10.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>110.00</td><td>10.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>10.00</td><td>70.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>110.00</td><td>70.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>–</td><td>3.00</td><td>3.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
    <tr><td>–</td><td>8.00</td><td>3.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
  </tbody>
</table></div>

{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Every figure is a design value or a value from the parts list, as the last column says. None is a measurement on a built board. **Open** means not established.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Motor supply</td><td>J3</td><td>8 V</td><td>12 V (example)</td><td>16 V</td><td>Retained design target; not a qualified rating of this revision</td></tr>
    <tr><td>Module logic supply</td><td>Modules</td><td>3 V</td><td>3.3 V</td><td>5.5 V</td><td>Pololu product page for the 2128 module</td></tr>
    <tr><td>Module motor supply</td><td>Modules</td><td>8 V</td><td>—</td><td>35 V</td><td>Pololu product page; the board target is narrower</td></tr>
    <tr><td>Surge diode</td><td>D1</td><td>—</td><td>SMBJ18A</td><td>—</td><td>Parts list</td></tr>
    <tr><td>Logic supply from host</td><td>J1 contact 1</td><td>Open</td><td>3.3 V</td><td>Open</td><td>Host current allowance Open</td></tr>
    <tr><td>Motor current per module</td><td>A1 to A3</td><td>Open</td><td>Set on the module</td><td>Open</td><td>Carrier current and thermal limits Open</td></tr>
    <tr><td>Protection ratings</td><td>UF101</td><td>Open</td><td>Open</td><td>Open</td><td>Marked unreleased on the silk; not established</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Prime headers

The candidate allocation above applies only to a Smoothieboard V2 P12 Prime2590 and has not passed review. The Prime&rsquo;s physical connector carries a noted rail-position discrepancy: verify numbered continuity with the power removed, and name the Prime revision for any allocation. No timer route or bus multiplexer is implied.

See all boards on the [extension boards](/extension-boards) page.
