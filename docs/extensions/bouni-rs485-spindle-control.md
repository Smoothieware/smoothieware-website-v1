---
layout: default
title: "Bouni RS-485 spindle control"
description: "Isolated RS-485 interface for variable-frequency drives: pinout and firmware limits."
permalink: /extensions/bouni-rs485-spindle-control
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Spindle</p>
    <h1 id="bouni-rs485-spindle-control">Bouni RS-485 spindle control</h1>
    <p class="xb-lead">An isolated RS-485 serial interface between the controller and a variable-frequency drive.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/bouni-rs485-spindle-control/directory-board-render.webp" alt="Top view of the Bouni RS-485 spindle control board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>RS-485</b><span>isolated</span></div>
  <div class="xb-stat"><b>ISOW1412</b><span>transceiver</span></div>
  <div class="xb-stat"><b>120 Ω</b><span>optional termination</span></div>
  <div class="xb-stat"><b>3</b><span>bus terminals</span></div>
  <div class="xb-stat"><b>40 × 42 mm</b><span>board size</span></div>
  <div class="xb-stat"><b>UART</b><span>host side</span></div>
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
  <b>SmoothieV2 has no Modbus or drive-command support for this board:</b> it provides the electrical interface only. For drives that take an analog speed command, see <a href="/extensions/bouni-analog-spindle-control">Bouni analog spindle control</a>.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>Isolated RS-485 interface</td></tr>
    <tr><td>Bus terminals</td><td>J3: D+, D−, isolated ground</td></tr>
    <tr><td>Host connector</td><td>J1 (Gadgeteer): UART transmit 4, receive 5, direction 6</td></tr>
    <tr><td>Transceiver</td><td>ISOW1412 with isolated power</td></tr>
    <tr><td>Supplies</td><td>3.3 V logic and 5 V from the host connector</td></tr>
    <tr><td>Termination</td><td>SJ1, 120 Ω, open by default</td></tr>
    <tr><td>Size</td><td>40 × 42 mm</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/bouni-rs485-spindle-control/bouni-rs485-spindle-control-diagram.webp" alt="Annotated top view of the Bouni RS-485 spindle control board">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:27.2%;top:12.9%" aria-label="1: Host connector J1">1<span class="xb-pop"><b>Host connector J1</b> — UART and direction.</span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:72.8%;top:12.9%" aria-label="2: Chain connector J2">2<span class="xb-pop"><b>Chain connector J2</b> — Next board.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:50.0%;top:53.3%" aria-label="3: ISOW1412">3<span class="xb-pop"><b>ISOW1412</b> — Isolated transceiver.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:63.7%;top:82.7%" aria-label="4: Bus terminals">4<span class="xb-pop"><b>Bus terminals</b> — D+, D−, isolated ground.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:36.3%;top:78.4%" aria-label="5: Termination link SJ1">5<span class="xb-pop"><b>Termination link SJ1</b> — 120 Ω when closed.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:51.1%;top:77.3%" aria-label="6: Diode D1">6<span class="xb-pop"><b>Diode D1</b> — Diode D1, marked <code>SM712-02HTG</code> in the board file. Connects to <code>BUS_P</code>, <code>BUS_N</code>, <code>GND_ISO</code>.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-7" style="left:77.4%;top:37.3%" aria-label="7: Resistor R1">7<span class="xb-pop"><b>Resistor R1</b> — Resistor R1, marked <code>10k</code> in the board file. Connects to <code>RS485_DIR</code>, <code>GND</code>.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:36.3%;top:83.6%" aria-label="8: Resistor R4">8<span class="xb-pop"><b>Resistor R4</b> — Resistor R4, marked <code>120R</code> in the board file. Connects to <code>TERM_MID</code>, <code>BUS_N</code>.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host connector J1</b> — UART and direction.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain connector J2</b> — Next board.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>ISOW1412</b> — Isolated transceiver.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Bus terminals</b> — D+, D−, isolated ground.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Termination link SJ1</b> — 120 Ω when closed.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Diode D1</b> — Diode D1, marked <code>SM712-02HTG</code> in the board file. Connects to <code>BUS_P</code>, <code>BUS_N</code>, <code>GND_ISO</code>.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Resistor R1</b> — Resistor R1, marked <code>10k</code> in the board file. Connects to <code>RS485_DIR</code>, <code>GND</code>.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Resistor R4</b> — Resistor R4, marked <code>120R</code> in the board file. Connects to <code>TERM_MID</code>, <code>BUS_N</code>.</div></li>
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
    <tr><td>4</td><td><code>UART_TX</code></td></tr>
    <tr><td>5</td><td><code>UART_RX</code></td></tr>
    <tr><td>6</td><td><code>RS485_DIR</code></td></tr>
    <tr><td>7</td><td><code>GAD_P7</code></td></tr>
    <tr><td>8</td><td><code>GAD_P8</code></td></tr>
    <tr><td>9</td><td><code>GAD_P9</code></td></tr>
    <tr><td>10</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Bus terminals J3

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J3 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>BUS_P</code></td></tr>
    <tr><td>2</td><td><code>BUS_N</code></td></tr>
    <tr><td>3</td><td><code>GND_ISO</code></td></tr>
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
  <div class="xb-card"><b>RS-485 board</b><span>Built from the design files</span></div>
  <div class="xb-card"><b>Compatible drive</b><span>With its serial manual</span></div>
  <div class="xb-card"><b>Host software</b><span>That speaks the drive protocol</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

An unpowered check of the board before it meets a controller or a drive.

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Set the bus ends</h3>
    <p>With all power off, close SJ1 only if this board sits at an end of the RS-485 bus; otherwise leave it open.</p>
  </li>
  <li class="xb-step">
    <h3>Check the pass-through</h3>
    <p>With a meter, check continuity from J1 to J2 on contact 1 (3.3 V), contact 2 (5 V) and contact 10 (ground), and no short between any of them.</p>
  </li>
  <li class="xb-step">
    <h3>Identify the bus wires</h3>
    <p>Compare J3 contact 1 (BUS_P), contact 2 (BUS_N) and contact 3 (isolated ground) with the terminal names in the drive manual before connecting anything.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

<span id="smoothieware-use"></span>

SmoothieV2 contains no Modbus or drive-command application: no configuration applies. The UART console does not control the bus direction. Syntax checked against firmware commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`.

## How it works {#how-it-works}

The ISOW1412 carries data and its own field-side power across the isolation barrier. The direction contact selects whether it drives or listens. Close SJ1 only if this board sits at an end of the bus.

## Chaining {#chaining}

J2 passes the Gadgeteer socket on to a further board. The UART and direction contacts are used by this board. A solder link on each contact sets whether it is passed through: check the link labels against <a href="#pinout">Pinout</a> before stacking boards.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>No reply from the drive</td><td>Check D+ and D− naming against the drive manual, the common reference and the termination.</td></tr>
    <tr><td>No data at all</td><td>SmoothieV2 sends no drive protocol by itself; check what your software transmits.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<p>The design files for this board are not published for download.</p>
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

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-rs485-reader-compact-overview" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-rs485/reader-compact-overview.webp" title="Spindle module RS485" alt="Spindle module RS485 on the RS-485 board" caption="Component-side reference. Use the overview and focused sheets together." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-rs485-reader-compact-j1-1-5" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-rs485/reader-compact-j1-1-5-central-pills.webp" title="J1 · Host interface" alt="J1 · Host interface on the RS-485 board" caption="Component-side reference. Use the overview and focused sheets together." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-rs485-reader-compact-j1-6-10" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-rs485/reader-compact-j1-6-10-central-pills.webp" title="J1 · Host interface" alt="J1 · Host interface on the RS-485 board" caption="Component-side reference. Use the overview and focused sheets together." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-rs485-reader-compact-j2-1-5" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-rs485/reader-compact-j2-1-5-central-pills.webp" title="J2 · Chain interface" alt="J2 · Chain interface on the RS-485 board" caption="Component-side reference. Use the overview and focused sheets together." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-rs485-reader-compact-j2-6-10" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-rs485/reader-compact-j2-6-10-central-pills.webp" title="J2 · Chain interface" alt="J2 · Chain interface on the RS-485 board" caption="Component-side reference. Use the overview and focused sheets together." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-rs485-reader-compact-vfd-1-3" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-rs485/reader-compact-vfd-1-3-central-pills.webp" title="J3 · RS485 bus" alt="J3 · RS485 bus on the RS-485 board" caption="Component-side reference. Use the overview and focused sheets together." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-rs485-reader-compact-links3" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-rs485/reader-compact-links3.webp" title="Chain signal links" alt="Chain signal links on the RS-485 board" caption="Component-side reference. Use the overview and focused sheets together." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-rs485-reader-compact-links6" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-rs485/reader-compact-links6.webp" title="Chain signal links" alt="Chain signal links on the RS-485 board" caption="Component-side reference. Use the overview and focused sheets together." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-rs485-reader-compact-links8" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-rs485/reader-compact-links8.webp" title="Chain signal links" alt="Chain signal links on the RS-485 board" caption="Component-side reference. Use the overview and focused sheets together." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-rs485-reader-compact-serial" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-rs485/reader-compact-serial.webp" title="Serial and direction path" alt="Serial and direction path on the RS-485 board" caption="Component-side reference. Use the overview and focused sheets together." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-rs485-reader-compact-termination" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-rs485/reader-compact-termination.webp" title="Bus end termination" alt="Bus end termination on the RS-485 board" caption="Component-side reference. Use the overview and focused sheets together." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-rs485-reader-compact-power" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-rs485/reader-compact-power.webp" title="Two supply domains" alt="Two supply domains on the RS-485 board" caption="Component-side reference. Use the overview and focused sheets together." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-rs485-reader-compact-tests0" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-rs485/reader-compact-tests0-underside-caption.webp" title="Interface test pads" alt="Interface test pads on the RS-485 board" caption="Component-side reference. Use the overview and focused sheets together." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-rs485-reader-compact-tests5" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-rs485/reader-compact-tests5-underside-caption.webp" title="Interface test pads" alt="Interface test pads on the RS-485 board" caption="Component-side reference. Use the overview and focused sheets together." width=420 %}

{% include _includes/extension-instruction-diagram.html id="bouni-spindle-module-boards-v19-bsm-rs485-reader-compact-mounts" src="/images/extensions/bouni-spindle-module-boards/guides/bsm-rs485/reader-compact-mounts.webp" title="Mounting holes" alt="Mounting holes on the RS-485 board" caption="Component-side reference. Use the overview and focused sheets together." width=420 %}

The annotated board-reference sheets above describe the board; the contact table below accompanies them. Follow the wiring section for the connection procedure and its limitations.

### Connector contacts

Contact numbering below is the PCB's pad numbering, viewed using the board-reference drawing. Same-numbered duplicate lands are combined in this table. Mechanical unnumbered pads are omitted here. `NC` means unconnected, not a spare. Named nets alone do not establish direction; use the signal-path explanation above.

<details markdown="1">
<summary>Contact inventory</summary>

| Connector | Contact(s) | Function/net |
| --- | --- | --- |
| J1 — GADGETEER IN | 1 | `+3V3` |
| J1 — GADGETEER IN | 2 | `+5V` |
| J1 — GADGETEER IN | 3 | `/GAD_P3` |
| J1 — GADGETEER IN | 4 | `/UART_TX` |
| J1 — GADGETEER IN | 5 | `/UART_RX` |
| J1 — GADGETEER IN | 6 | `/RS485_DIR` |
| J1 — GADGETEER IN | 7 | `/GAD_P7` |
| J1 — GADGETEER IN | 8 | `/GAD_P8` |
| J1 — GADGETEER IN | 9 | `/GAD_P9` |
| J1 — GADGETEER IN | 10 | `GND` |
| J2 — GADGETEER CHAIN | 1 | `+3V3` |
| J2 — GADGETEER CHAIN | 2 | `+5V` |
| J2 — GADGETEER CHAIN | 3 | `/CHAIN_P3` |
| J2 — GADGETEER CHAIN | 4 | `/CHAIN_P4` |
| J2 — GADGETEER CHAIN | 5 | `/CHAIN_P5` |
| J2 — GADGETEER CHAIN | 6 | `/CHAIN_P6` |
| J2 — GADGETEER CHAIN | 7 | `/CHAIN_P7` |
| J2 — GADGETEER CHAIN | 8 | `/CHAIN_P8` |
| J2 — GADGETEER CHAIN | 9 | `/CHAIN_P9` |
| J2 — GADGETEER CHAIN | 10 | `GND` |
| J3 — RS485 D+ D- GND | 1 | `/BUS_P` |
| J3 — RS485 D+ D- GND | 2 | `/BUS_N` |
| J3 — RS485 D+ D- GND | 3 | `/GND_ISO` |

</details>

### Links, controls and indicators

The footprint values identify the intended control or indication. A cut-to-disable LED link affects indication only. Check link population and default state before cutting or bridging.

| Item | Label | Contact nets / observation |
| --- | --- | --- |
| JP4 | CHAIN P4 OPEN | 1 = /UART_TX; 2 = /CHAIN_P4 |
| JP5 | CHAIN P5 OPEN | 1 = /UART_RX; 2 = /CHAIN_P5 |
| JP6 | CHAIN P6 OPEN | 1 = /RS485_DIR; 2 = /CHAIN_P6 |
| JP7 | CHAIN P7 BRIDGED | 1 = /GAD_P7; 2 = /CHAIN_P7 |
| JP9 | CHAIN P9 BRIDGED | 1 = /GAD_P9; 2 = /CHAIN_P9 |
| JP8 | CHAIN P8 BRIDGED | 1 = /GAD_P8; 2 = /CHAIN_P8 |
| JP3 | CHAIN P3 BRIDGED | 1 = /GAD_P3; 2 = /CHAIN_P3 |

### Termination link

These are additional solder links, including references beginning `SJ` rather than `JP`.

| Link | Label | Pad nets |
| --- | --- | --- |
| SJ1 | TERM 120R OPEN | 1=/BUS_P; 2=/TERM_MID |

## Practical use with Smoothieboard V2 Prime

Before installing, confirm the exact drive terminal mapping, protocol, addressing and direction control, as well as the host header allocation and both supply domains.

## Smoothieware use

SmoothieV2 contains no Modbus/VFD command application for this board. The UART console is not a half-duplex direction scheduler, Modbus register implementation or VFD fault controller.  Do not transfer the analog recipe to the serial board or invent Modbus registers.

This refers to SmoothieV2 commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`.

## Appendix: mounting dimensions {#mounting}

Outline and holes from the original board file. Millimetres, seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-ndle-control-mount-t">
  <title id="xb-ndle-control-mount-t">Mounting drawing of the bouni-rs485-spindle-control, component side: outline 40 by 42 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="318.1" y="78.0" width="323.8" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M318.1 56H641.9"/><path d="M318.1 50V62"/><path d="M641.9 50V62"/><path d="M667.9 78.0V418.0"/><path d="M661.9 78.0h12"/><path d="M661.9 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">40</text>
  <text x="679.9" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">42</text>
  <circle cx="318.1" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="306.1" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M260.1 104.0h30" fill="none"/><path d="M294.1 104.0l-8 -4v8z"/><path d="M260.1 104.0v30" fill="none"/><path d="M260.1 138.0l-4 -8h8z"/></g>
  <text x="298.1" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="256.1" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="358.6" cy="260.1" r="13.0" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M341.6 260.1h33.9M358.6 243.2v33.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="345.6" y="237.2" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 22.50</text>
  <circle cx="601.4" cy="260.1" r="13.0" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M584.5 260.1h33.9M601.4 243.2v33.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="614.4" y="237.2" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  35.00, 22.50</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 40 × 42&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>22.50</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>35.00</td><td>22.50</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Only what the design source states or the circuit fixes. Blank cells are not specified.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Termination</td><td>J3 bus</td><td>—</td><td>120 Ω</td><td>—</td><td>Only with SJ1 closed</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Design source {#sources}

The design files for this board are not published for download.
See all boards on the [extension boards](/extension-boards) page.
