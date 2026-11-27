---
layout: default
title: "Bouni analog spindle control"
description: "Isolated PWM to 0–10 V spindle speed board with a run contact: pinout, wiring and configuration."
permalink: /extensions/bouni-analog-spindle-control
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Spindle</p>
    <h1 id="bouni-analog-spindle-control">Bouni analog spindle control</h1>
    <p class="xb-lead">Turns a PWM signal from the controller into an isolated analog speed command for a variable-frequency drive, with a separate run contact.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/bouni-analog-spindle-control/directory-board-render.webp" alt="Top view of the Bouni analog spindle control board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>0–10 V</b><span>speed command</span></div>
  <div class="xb-stat"><b>10 bit</b><span>conversion</span></div>
  <div class="xb-stat"><b>30 Hz–25 kHz</b><span>PWM input</span></div>
  <div class="xb-stat"><b>isolated</b><span>PWM and run</span></div>
  <div class="xb-stat"><b>60 × 52 mm</b><span>board size</span></div>
  <div class="xb-stat"><b>5</b><span>drive terminals</span></div>
</div>

<nav class="xb-nav" aria-label="On this page">
  <a href="#specs">Tech specs</a>
  <a href="#tour">Board tour</a>
  <a href="#pinout">Pinout</a>
  <a href="#what-you-need">What you need</a>
  <a href="#get-started">Get started</a>
  <a href="#configuration">Configuration</a>
  <a href="#how-it-works">How it works</a>
  <a href="#chaining">Chaining</a>
  <a href="#troubleshooting">Troubleshooting</a>
  <a href="#downloads">Downloads</a>
  <a href="#mounting">Mounting dimensions</a>
  <a href="#electrical">Electrical specifications</a>
</nav>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <b>A PWM input stuck high commands full speed,</b> and RUN does not force the speed command to zero. Keep an independent way of stopping the spindle, and keep mains and motor wiring away from this board. For drives that take serial commands, see <a href="/extensions/bouni-rs485-spindle-control">Bouni RS-485 spindle control</a>.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>Isolated PWM to analog speed command, plus run contact</td></tr>
    <tr><td>Drive terminals</td><td>J3: 10V, AOUT, GND, RUN, DCM</td></tr>
    <tr><td>Host connector</td><td>J1 (Gadgeteer), chain on J2</td></tr>
    <tr><td>Isolator</td><td>ISO7710F for PWM</td></tr>
    <tr><td>Converter</td><td>LTC2644, 2.5 V full scale</td></tr>
    <tr><td>Amplifier</td><td>TS912, nominal gain 4</td></tr>
    <tr><td>Run path</td><td>ILD217T optocoupler between RUN and DCM</td></tr>
    <tr><td>Field supply</td><td>The drive&rsquo;s 10 V; TPS70930 makes 3 V</td></tr>
    <tr><td>Size</td><td>60 × 52 mm</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/bouni-analog-spindle-control/bouni-analog-spindle-control-diagram.webp" alt="Annotated top view of the Bouni analog spindle control board">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:19.0%;top:11.1%" aria-label="1: Host connector J1">1<span class="xb-pop"><b>Host connector J1</b> — PWM, run enable and 3.3 V.</span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:50.0%;top:11.1%" aria-label="2: Chain connector J2">2<span class="xb-pop"><b>Chain connector J2</b> — Next board.</span></a>
      <a class="xb-mk xb-pb" href="#tour-3" style="left:73.2%;top:41.2%" aria-label="3: Isolator U3">3<span class="xb-pop"><b>Isolator U3</b> — ISO7710F, carries PWM across the barrier.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:63.9%;top:65.9%" aria-label="4: Converter U4">4<span class="xb-pop"><b>Converter U4</b> — LTC2644, duty cycle to voltage.</span></a>
      <a class="xb-mk xb-pl" href="#tour-5" style="left:19.0%;top:65.9%" aria-label="5: Amplifier U2">5<span class="xb-pop"><b>Amplifier U2</b> — TS912, gain of 4.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:34.5%;top:41.2%" aria-label="6: Optocoupler U1">6<span class="xb-pop"><b>Optocoupler U1</b> — Run contact.</span></a>
      <a class="xb-mk xb-pr" href="#tour-7" style="left:85.6%;top:62.4%" aria-label="7: Regulator U5">7<span class="xb-pop"><b>Regulator U5</b> — TPS70930, field 3 V.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:26.8%;top:86.4%" aria-label="8: Drive terminals">8<span class="xb-pop"><b>Drive terminals</b> — 10V, AOUT, GND, RUN, DCM.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host connector J1</b> — PWM, run enable and 3.3 V.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain connector J2</b> — Next board.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Isolator U3</b> — ISO7710F, carries PWM across the barrier.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Converter U4</b> — LTC2644, duty cycle to voltage.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Amplifier U2</b> — TS912, gain of 4.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Optocoupler U1</b> — Run contact.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Regulator U5</b> — TPS70930, field 3 V.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Drive terminals</b> — 10V, AOUT, GND, RUN, DCM.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

<span id="connect-and-try-it"></span>

### Host connector J1

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+3V3</code></td></tr>
    <tr><td>2</td><td><code>+5V</code></td></tr>
    <tr><td>3</td><td><code>GAD_P3</code></td></tr>
    <tr><td>4</td><td><code>GAD_P4</code></td></tr>
    <tr><td>5</td><td><code>GAD_P5</code></td></tr>
    <tr><td>6</td><td><code>RUN_EN</code></td></tr>
    <tr><td>7</td><td><code>PWM_IN</code></td></tr>
    <tr><td>8</td><td><code>GAD_P8</code></td></tr>
    <tr><td>9</td><td><code>GAD_P9</code></td></tr>
    <tr><td>10</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Drive terminals J3

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J3 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>VFD_10V</code></td></tr>
    <tr><td>2</td><td><code>VFD_AOUT</code></td></tr>
    <tr><td>3</td><td><code>GND_VFD</code></td></tr>
    <tr><td>4</td><td><code>VFD_RUN</code></td></tr>
    <tr><td>5</td><td><code>VFD_DCM</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Chain connector J2

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J2 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+3V3</code></td></tr>
    <tr><td>2</td><td><code>+5V</code></td></tr>
    <tr><td>3</td><td><code>CHAIN_P3</code></td></tr>
    <tr><td>4</td><td><code>CHAIN_P4</code></td></tr>
    <tr><td>5</td><td><code>CHAIN_P5</code></td></tr>
    <tr><td>6</td><td><code>CHAIN_P6</code></td></tr>
    <tr><td>7</td><td><code>CHAIN_P7</code></td></tr>
    <tr><td>8</td><td><code>CHAIN_P8</code></td></tr>
    <tr><td>9</td><td><code>CHAIN_P9</code></td></tr>
    <tr><td>10</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Analog board</b><span>Built from the design files</span></div>
  <div class="xb-card"><b>Drive or voltmeter</b><span>A meter for the first test</span></div>
  <div class="xb-card"><b>10 V field supply</b><span>From the drive, or a current-limited bench supply</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

A bench test with a voltmeter and no drive, motor or mains connected.

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Wire the host side</h3>
    <p>With power off, connect Prime J34 contact 1 (3.3 V) to J1 contact 1, J34 contact 7 (PI6) to J1 contact 7 and J34 contact 10 to J1 contact 10. Leave the other J1 contacts open.</p>
  </li>
  <li class="xb-step">
    <h3>Wire the field side</h3>
    <p>Connect a current-limited 10 V supply to J3 contact 1 (positive) and contact 3 (return), and a DC voltmeter to contact 2 (positive) and contact 3. Never join the field return to the controller ground.</p>
  </li>
  <li class="xb-step">
    <h3>Configure</h3>
    <p>Add the entries from <a href="#configuration">Configuration</a>, restart, then power the field side.</p>
  </li>
  <li class="xb-step">
    <h3>Measure</h3>
    <p>Send <code>M43.21</code>, then <code>M42.21 S25</code>, then <code>M42.21 S50</code>, and finish with <code>M43.21</code>. Remove field power before disconnecting.</p>
    <p class="xb-expect">Near 0 V, then about 2.5 V, then about 5 V.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

<span id="smoothieware-use"></span>

A switch driving hardware PWM; S is percent duty, not RPM. Syntax checked against firmware commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`.

```ini
[pwm2]
frequency = 1000

[switch]
spindle_request.enable = true
spindle_request.output_type = hwpwm
spindle_request.output_pin = PWM2_2
spindle_request.input_on_command = M42
spindle_request.input_off_command = M43
spindle_request.subcode = 21
spindle_request.startup_value = 0
spindle_request.halt_set_to = 0
spindle_request.ignore_on_halt = false
```

A drive installation also needs run control, speed-to-RPM mapping and a fault and stop policy suited to your machine.

## How it works {#how-it-works}

The ISO7710F carries PWM across the isolation barrier. The [LTC2644](https://www.analog.com/media/en/technical-documentation/data-sheets/ltc2644.pdf) measures its duty cycle and outputs a voltage, which the TS912 multiplies by 4: 25 % duty gives about 2.5 V and 50 % about 5 V (nominal values). A separate optocoupler closes RUN to DCM. The field side is powered by the drive&rsquo;s 10 V terminal; field and host returns stay separate.

## Chaining {#chaining}

J2 passes the Gadgeteer socket on to a further board. The PWM and run contacts are used by this board. A solder link on each contact sets whether it is passed through: check the link labels against <a href="#pinout">Pinout</a> before stacking boards.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>No output voltage</td><td>Check 10 V between J3 contacts 1 and 3, and that PWM arrives on J1 contact 7.</td></tr>
    <tr><td>Output at full scale</td><td>The PWM input is high or held high. Send a low duty.</td></tr>
    <tr><td>Drive does not run</td><td>Check the RUN and DCM wiring and the run signal.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/robot/Robot.cpp#L1138-L1147">M3/M5 handlers</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/CommandShell.cpp#L1874-L1878">auxiliary UART shell output</a></td><td>Design source</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Wiring figures {#wiring-figures}

<details markdown="1">
<summary>Reading the connector callouts</summary>

The dark end of each pill gives the contact number. The adjoining label gives its function. Colours help locate related functions; the label and connection instructions determine how to use the contact.

- Red: 3.3 V supply.
- Orange: 5 V supply.
- Violet: Control signal.
- Green: Signal — use the printed function label.
- Near-black: Circuit ground.
- Dark grey: Other labelled contact — read its exact function.

A voltage in a signal name does not make that contact a power output. Circuit ground, cable shield and protective earth are different connections. An underside projection shows rear components through the front view; it is not a mirrored rear view.

</details>

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-analog-reader-compact-overview" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-analog/reader-compact-overview.webp" title="Spindle module analog" alt="Spindle module analog on the bsm-analog assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-analog-reader-compact-j1-1-5" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-analog/reader-compact-j1-1-5-central-pills.webp" title="J1 · Host interface" alt="J1 · Host interface on the bsm-analog assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-analog-reader-compact-j1-6-10" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-analog/reader-compact-j1-6-10-central-pills.webp" title="J1 · Host interface" alt="J1 · Host interface on the bsm-analog assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-analog-reader-compact-j2-1-5" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-analog/reader-compact-j2-1-5-central-pills.webp" title="J2 · Chain interface" alt="J2 · Chain interface on the bsm-analog assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-analog-reader-compact-j2-6-10" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-analog/reader-compact-j2-6-10-central-pills.webp" title="J2 · Chain interface" alt="J2 · Chain interface on the bsm-analog assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-analog-reader-compact-vfd-1-5" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-analog/reader-compact-vfd-1-5-central-pills.webp" title="J3 · VFD interface" alt="J3 · VFD interface on the bsm-analog assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-analog-reader-compact-links3" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-analog/reader-compact-links3.webp" title="Chain signal links" alt="Chain signal links on the bsm-analog assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-analog-reader-compact-links6" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-analog/reader-compact-links6.webp" title="Chain signal links" alt="Chain signal links on the bsm-analog assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-analog-reader-compact-links8" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-analog/reader-compact-links8.webp" title="Chain signal links" alt="Chain signal links on the bsm-analog assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-analog-reader-compact-run" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-analog/reader-compact-run.webp" title="Run control path" alt="Run control path on the bsm-analog assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-analog-reader-compact-pwm" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-analog/reader-compact-pwm.webp" title="PWM transfer stage" alt="PWM transfer stage on the bsm-analog assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-analog-reader-compact-dac" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-analog/reader-compact-dac.webp" title="PWM to analog stage" alt="PWM to analog stage on the bsm-analog assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-analog-reader-compact-gain" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-analog/reader-compact-gain.webp" title="Analog gain network" alt="Analog gain network on the bsm-analog assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-analog-reader-compact-power" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-analog/reader-compact-power.webp" title="VFD-side supply" alt="VFD-side supply on the bsm-analog assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-analog-reader-compact-tests0" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-analog/reader-compact-tests0-underside-caption.webp" title="Interface test pads" alt="Interface test pads on the bsm-analog assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-analog-reader-compact-tests5" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-analog/reader-compact-tests5-underside-caption.webp" title="Interface test pads" alt="Interface test pads on the bsm-analog assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-analog-reader-compact-mounts" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-analog/reader-compact-mounts.webp" title="Mounting holes" alt="Mounting holes on the bsm-analog assembly" caption="Component-side reference for this assembly. Use the overview and focused sheets together. Check bridge continuity and cable orientation before wiring." width=420 %}

The annotated sheets above show the board; the contact table below lists the same contacts. Follow the wiring section for the connection procedure.

### Connector contacts

Contact numbering below is the PCB pad numbering, as shown on the board-reference drawing. Duplicate lands with the same number are shown once, and unnumbered mechanical pads are omitted. Check mating orientation before connecting. `NC` means unconnected, not a spare supported function. Net names alone do not establish direction; use the signal-path explanation above.

<details markdown="1">
<summary>Contact inventory</summary>

<div class="extension-contact-table" role="region" aria-label="Contact inventory; scroll horizontally to read all columns" tabindex="0" markdown="1">

| Connector | Contact(s) | Function/net |
| --- | --- | --- |
| J1 — GADGETEER IN | 1 | `+3V3` |
| J1 — GADGETEER IN | 2 | `+5V` |
| J1 — GADGETEER IN | 3 | `GAD_P3` |
| J1 — GADGETEER IN | 4 | `GAD_P4` |
| J1 — GADGETEER IN | 5 | `GAD_P5` |
| J1 — GADGETEER IN | 6 | `RUN_EN` |
| J1 — GADGETEER IN | 7 | `PWM_IN` |
| J1 — GADGETEER IN | 8 | `GAD_P8` |
| J1 — GADGETEER IN | 9 | `GAD_P9` |
| J1 — GADGETEER IN | 10 | `GND` |
| J2 — GADGETEER CHAIN | 1 | `+3V3` |
| J2 — GADGETEER CHAIN | 2 | `+5V` |
| J2 — GADGETEER CHAIN | 3 | `CHAIN_P3` |
| J2 — GADGETEER CHAIN | 4 | `CHAIN_P4` |
| J2 — GADGETEER CHAIN | 5 | `CHAIN_P5` |
| J2 — GADGETEER CHAIN | 6 | `CHAIN_P6` |
| J2 — GADGETEER CHAIN | 7 | `CHAIN_P7` |
| J2 — GADGETEER CHAIN | 8 | `CHAIN_P8` |
| J2 — GADGETEER CHAIN | 9 | `CHAIN_P9` |
| J2 — GADGETEER CHAIN | 10 | `GND` |
| J3 — VFD 10V AOUT GND RUN DCM | 1 | `VFD_10V` |
| J3 — VFD 10V AOUT GND RUN DCM | 2 | `VFD_AOUT` |
| J3 — VFD 10V AOUT GND RUN DCM | 3 | `GND_VFD` |
| J3 — VFD 10V AOUT GND RUN DCM | 4 | `VFD_RUN` |
| J3 — VFD 10V AOUT GND RUN DCM | 5 | `VFD_DCM` |

</div>

</details>

### Links, controls and indicators

The footprint values identify each control or indication. A cut-to-disable LED link affects only the indication, not the protected circuit. Check a link's default state on your board before cutting or bridging it.

| Item | Label | Contact nets / observation |
| --- | --- | --- |
| JP7 | CHAIN P7 OPEN | 1 = PWM_IN; 2 = CHAIN_P7 |
| JP5 | CHAIN P5 BRIDGED | 1 = GAD_P5; 2 = CHAIN_P5 |
| JP3 | CHAIN P3 BRIDGED | 1 = GAD_P3; 2 = CHAIN_P3 |
| JP4 | CHAIN P4 BRIDGED | 1 = GAD_P4; 2 = CHAIN_P4 |
| JP8 | CHAIN P8 BRIDGED | 1 = GAD_P8; 2 = CHAIN_P8 |
| JP9 | CHAIN P9 BRIDGED | 1 = GAD_P9; 2 = CHAIN_P9 |
| JP6 | CHAIN P6 OPEN | 1 = RUN_EN; 2 = CHAIN_P6 |

## Practical use with Smoothieboard V2 Prime

The example measures a disconnected board with a Fluke 115. Before connecting a VFD, verify the controller header and cable orientation, the supply limits and the drive’s analog and RUN/DCM requirements.

### Analog meter wiring

The circuit below uses a Prime P12 and a Fluke 115 in ordinary DC-voltage mode. Read the setup, power, meter and limits sheets together. The 10 V field source requires a current limit chosen for your bench setup. Keep host and field returns separate. Check physical mating before powering. Keep the VFD, RUN/DCM, motor and mains disconnected.

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-0" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/bouni-meter.webp" title="Analog meter circuit" alt="Analog meter circuit" caption="Meter test circuit only; it is not a VFD installation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-1" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/SETUP.webp" title="Host setup" alt="Host setup" caption="Meter test circuit only; it is not a VFD installation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-2" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/POWER.webp" title="Field power and separate returns" alt="Field power and separate returns" caption="Meter test circuit only; it is not a VFD installation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-3" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/METER.webp" title="Meter connections" alt="Meter connections" caption="Meter test circuit only; it is not a VFD installation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-4" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/LIMITS.webp" title="Limits and unused connections" alt="Limits and unused connections" caption="Meter test circuit only; it is not a VFD installation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-5" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/LOCATOR-prime.webp" title="Prime contact-row locations" alt="Prime contact-row locations" caption="Meter test circuit only; it is not a VFD installation." width=1200 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-6" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/LOCATOR-analog.webp" title="Analog board contact-row locations" alt="Analog board contact-row locations" caption="Meter test circuit only; it is not a VFD installation." width=1200 %}

<details markdown="1">
<summary>All 49 numbered contact keys</summary>

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-0" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J1-1.webp" title="analog J1 1" alt="analog J1 1" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-1" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J1-10.webp" title="analog J1 10" alt="analog J1 10" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-2" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J1-2.webp" title="analog J1 2" alt="analog J1 2" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-3" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J1-3.webp" title="analog J1 3" alt="analog J1 3" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-4" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J1-4.webp" title="analog J1 4" alt="analog J1 4" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-5" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J1-5.webp" title="analog J1 5" alt="analog J1 5" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-6" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J1-6.webp" title="analog J1 6" alt="analog J1 6" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-7" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J1-7.webp" title="analog J1 7" alt="analog J1 7" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-8" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J1-8.webp" title="analog J1 8" alt="analog J1 8" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-9" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J1-9.webp" title="analog J1 9" alt="analog J1 9" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-10" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J2-1.webp" title="analog J2 1" alt="analog J2 1" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-11" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J2-10.webp" title="analog J2 10" alt="analog J2 10" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-12" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J2-2.webp" title="analog J2 2" alt="analog J2 2" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-13" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J2-3.webp" title="analog J2 3" alt="analog J2 3" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-14" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J2-4.webp" title="analog J2 4" alt="analog J2 4" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-15" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J2-5.webp" title="analog J2 5" alt="analog J2 5" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-16" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J2-6.webp" title="analog J2 6" alt="analog J2 6" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-17" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J2-7.webp" title="analog J2 7" alt="analog J2 7" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-18" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J2-8.webp" title="analog J2 8" alt="analog J2 8" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-19" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J2-9.webp" title="analog J2 9" alt="analog J2 9" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-20" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J3-1.webp" title="analog J3 1" alt="analog J3 1" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-21" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J3-2.webp" title="analog J3 2" alt="analog J3 2" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-22" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J3-3.webp" title="analog J3 3" alt="analog J3 3" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-23" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J3-4.webp" title="analog J3 4" alt="analog J3 4" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-24" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-J3-5.webp" title="analog J3 5" alt="analog J3 5" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-25" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-JP3-1.webp" title="analog JP3 1" alt="analog JP3 1" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-26" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-JP3-2.webp" title="analog JP3 2" alt="analog JP3 2" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-27" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-JP4-1.webp" title="analog JP4 1" alt="analog JP4 1" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-28" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-JP4-2.webp" title="analog JP4 2" alt="analog JP4 2" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-29" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-JP5-1.webp" title="analog JP5 1" alt="analog JP5 1" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-30" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-JP5-2.webp" title="analog JP5 2" alt="analog JP5 2" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-31" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-JP6-1.webp" title="analog JP6 1" alt="analog JP6 1" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-32" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-JP6-2.webp" title="analog JP6 2" alt="analog JP6 2" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-33" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-JP7-1.webp" title="analog JP7 1" alt="analog JP7 1" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-34" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-JP7-2.webp" title="analog JP7 2" alt="analog JP7 2" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-35" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-JP8-1.webp" title="analog JP8 1" alt="analog JP8 1" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-36" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-JP8-2.webp" title="analog JP8 2" alt="analog JP8 2" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-37" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-JP9-1.webp" title="analog JP9 1" alt="analog JP9 1" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-38" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/analog-JP9-2.webp" title="analog JP9 2" alt="analog JP9 2" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-39" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/prime-J34-1.webp" title="prime J34 1" alt="prime J34 1" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-40" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/prime-J34-10.webp" title="prime J34 10" alt="prime J34 10" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-41" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/prime-J34-2.webp" title="prime J34 2" alt="prime J34 2" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-42" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/prime-J34-3.webp" title="prime J34 3" alt="prime J34 3" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-43" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/prime-J34-4.webp" title="prime J34 4" alt="prime J34 4" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-44" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/prime-J34-5.webp" title="prime J34 5" alt="prime J34 5" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-45" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/prime-J34-6.webp" title="prime J34 6" alt="prime J34 6" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-46" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/prime-J34-7.webp" title="prime J34 7" alt="prime J34 7" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-47" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/prime-J34-8.webp" title="prime J34 8" alt="prime J34 8" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-native-meter-contact-48" src="/images/extensions/bouni-spindle-module-boards/guides/native-meter/reader-contact-keys/prime-J34-9.webp" title="prime J34 9" alt="prime J34 9" caption="Front-view contact identity; verify actual mating orientation." width=420 %}

</details>

## Smoothieware use

### Analog output measured with a Fluke115

Use a Fluke115 in DC-voltage mode (V/COM terminals; see the [manufacturer’s meter manual, Table 7](https://media.fluke.com/5e1db354-3a6e-49cf-9edd-b10800c0e608_original%20file.pdf) for input impedance). It is a named high-impedance analog load, not a VFD. Disconnect the VFD entirely. Do not use current/ohm/LoZ mode. J3.2 VFD_AOUT→meterV and J3.3 GND_VFD→COM. Leave J3.4 RUN/J3.5 DCM unconnected; the board's RUN LED is held off by R4 when J1.6 is left disconnected. No motor, mains or spindle is part of this test.

The separate field-side bench supply is10 V at J3.1 VFD_10V relative to J3.3; it is not an output to be fed from a Prime GPIO. U5 TPS70930 makes FIELD_3V, and TS912 uses the field10 V rail. Use only a current-limited bench setup, and verify the supply, enable and isolator connections. Keep the field and host returns separate; do not join them through another instrument/USB lead and imply preserved isolation. Also check power order, the VFD reference-current budget and physical mating for your setup.

For the host connection use Prime GC/J34.7 PI6→J1.7 PWM_IN, J34.1 host3.3 V→J1.1 and J34.10 hostground→J1.10, with all other J1 contacts disconnected. Reserve PI6 and the shared TIM8 peripheral. The ISO7710F path is non-inverting; low input is the intended idle request, not a universal cable/power-failure shutdown guarantee.

U4 LTC2644IMS-L10#PBF has INA9 PWM_ISO, IDLSEL4 GND, REFSEL11 GND, PD7 FIELD_3V, IOVCC5 FIELD_3V and VCC1 FIELD_3V. The [LTC2644 Rev. B pin functions and operating tables](https://www.analog.com/media/en/technical-documentation/data-sheets/ltc2644.pdf) establish internal2.5 V full scale, 10-bit conversion at30 Hz–25 kHz and idle LOW zero-scale/idle HIGH full-scale. Pin10 REF is the1.25 V reference output in this mode, not a2.5 V external input. R9=30.0k and R10=10.0k make TS912's nominal gain4; R8=100 ohm is series output resistance. Ideal duty25% therefore gives DAC_A0.625 V and VFD_AOUT about2.5 V under this meter load; duty50% about5 V. These are nominal values; they do not state output accuracy or guarantee a 10 V endpoint.

Merge into a valid existing configuration, with no duplicate sections:

```ini
[pwm2]
frequency = 1000
[switch]
spindle_request.enable = true
spindle_request.output_type = hwpwm
spindle_request.output_pin = PWM2_2
spindle_request.input_on_command = M42
spindle_request.input_off_command = M43
spindle_request.subcode = 21
spindle_request.startup_value = 0
spindle_request.halt_set_to = 0
spindle_request.ignore_on_halt = false
```

After the bench setup has powered and initialized, send `M43.21`; wait a second and record the actual low output. Send `M42.21 S25`; wait a second and record. Send `M42.21 S50`; wait a second and record. Finish with `M43.21`; wait and verify the low reading, then remove field power before disconnecting. S is percent duty, not RPM. These25/50% tests avoid trying to prove the op-amp's upper rail swing. At1 kHz each period is1 ms and both high/low durations are well within the 10-bit converter's range. A static HIGH can command full-scale after idle timeout; PWM loss is not inherently safe.

The firmware Switch supplies the actual PWM for this named analog-meter use; it needs no SPI register initialization for this PWM-to-voltage DAC. A VFD application still needs the actual drive's reference/output loading, RUN/DCM circuit, frequency/RPM mapping, speed feedback and fault/stop policy. This test does not cover those machine requirements.

Reserve every listed pin and command in the complete configuration. Merge entries into existing sections rather than duplicating sections.

Implementation references: [M3/M5 handlers](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/robot/Robot.cpp#L1138-L1147), [auxiliary UART shell output](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/CommandShell.cpp#L1874-L1878).

## Appendix: mounting dimensions {#mounting}

Outline and holes from the original board file. Millimetres, seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-ndle-control-mount-t">
  <title id="xb-ndle-control-mount-t">Mounting drawing of the bouni-analog-spindle-control, component side: outline 60 by 52 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="283.8" y="78.0" width="392.3" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M283.8 56H676.2"/><path d="M283.8 50V62"/><path d="M676.2 50V62"/><path d="M702.2 78.0V418.0"/><path d="M696.2 78.0h12"/><path d="M696.2 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">60</text>
  <text x="714.2" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">52</text>
  <circle cx="283.8" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="271.8" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M225.8 104.0h30" fill="none"/><path d="M259.8 104.0l-8 -4v8z"/><path d="M225.8 104.0v30" fill="none"/><path d="M225.8 138.0l-4 -8h8z"/></g>
  <text x="263.8" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="221.8" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="349.2" cy="215.3" r="10.5" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M334.8 215.3h28.9M349.2 200.8v28.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="338.8" y="245.8" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  10.00, 21.00</text>
  <circle cx="480.0" cy="215.3" r="10.5" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M465.5 215.3h28.9M480.0 200.8v28.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="490.5" y="245.8" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  30.00, 21.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 60 × 52&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>10.00</td><td>21.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>30.00</td><td>21.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Only what the design source states or the circuit fixes. Blank cells are not specified.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>PWM frequency</td><td>J1 contact 7</td><td>30 Hz</td><td>—</td><td>25 kHz</td><td>LTC2644 datasheet</td></tr>
    <tr><td>Field supply</td><td>J3 contacts 1 and 3</td><td>—</td><td>10 V</td><td>—</td><td>Design value</td></tr>
    <tr><td>Speed command</td><td>J3 contact 2</td><td>0 V</td><td>—</td><td>10 V</td><td>Nominal gain 4; swing near the rail not specified</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Design source {#sources}

The design files for this board are not published for download.
See all boards on the [extension boards](/extension-boards) page.
