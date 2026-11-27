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
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="The connections of the board">
  <svg viewBox="0 0 1000 600" role="img" aria-labelledby="xb-bsmr-wire"><title id="xb-bsmr-wire">Wiring: controller ground, direction, UART receive, UART transmit, 5 volt and 3.3 volt to J1 contacts 10, 6, 5, 4, 2 and 1; J3 contacts 1, 2 and 3 to the drive serial port D plus, D minus and common.</title><rect x="16" y="16" width="220" height="200" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="126" y="40" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Controller</text><image href="/images/extensions/bouni-rs485-spindle-control/bouni-rs485-spindle-control-diagram.webp" x="322.4" y="102.4" width="375.7" height="392.7"/><path d="M230 62H253V14H446.6V148.6" fill="none" stroke="#0d0f12" stroke-width="5.5" stroke-linejoin="round"/><path d="M230 62H253V14H446.6V148.6" fill="none" stroke="#939393" stroke-width="3" stroke-linejoin="round"/><circle cx="446.6" cy="148.6" r="3.6" fill="#939393" stroke="#fff" stroke-width="1"/><rect x="96" y="51" width="134" height="22" rx="11" fill="#939393"/><text x="163.0" y="66.5" text-anchor="middle" font-size="12.5" font-weight="700" fill="#111">10: ground</text><path d="M230 88H266V29H425.0V148.6" fill="none" stroke="#0d0f12" stroke-width="5.5" stroke-linejoin="round"/><path d="M230 88H266V29H425.0V148.6" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round"/><circle cx="425.0" cy="148.6" r="3.6" fill="#2f7fe0" stroke="#fff" stroke-width="1"/><rect x="96" y="77" width="134" height="22" rx="11" fill="#2f7fe0"/><text x="163.0" y="92.5" text-anchor="middle" font-size="12.5" font-weight="700" fill="#fff">6: direction</text><path d="M230 114H279V44H419.0V146.4L425.0 159.4" fill="none" stroke="#0d0f12" stroke-width="5.5" stroke-linejoin="round"/><path d="M230 114H279V44H419.0V146.4L425.0 159.4" fill="none" stroke="#e0b82f" stroke-width="3" stroke-linejoin="round"/><circle cx="425.0" cy="159.4" r="3.6" fill="#e0b82f" stroke="#fff" stroke-width="1"/><rect x="96" y="103" width="134" height="22" rx="11" fill="#e0b82f"/><text x="163.0" y="118.5" text-anchor="middle" font-size="12.5" font-weight="700" fill="#111">5: UART RX</text><path d="M230 140H292V59H414.2V148.6" fill="none" stroke="#0d0f12" stroke-width="5.5" stroke-linejoin="round"/><path d="M230 140H292V59H414.2V148.6" fill="none" stroke="#2e9e5b" stroke-width="3" stroke-linejoin="round"/><circle cx="414.2" cy="148.6" r="3.6" fill="#2e9e5b" stroke="#fff" stroke-width="1"/><rect x="96" y="129" width="134" height="22" rx="11" fill="#2e9e5b"/><text x="163.0" y="144.5" text-anchor="middle" font-size="12.5" font-weight="700" fill="#fff">4: UART TX</text><path d="M230 166H305V74H403.4V148.6" fill="none" stroke="#0d0f12" stroke-width="5.5" stroke-linejoin="round"/><path d="M230 166H305V74H403.4V148.6" fill="none" stroke="#e8820c" stroke-width="3" stroke-linejoin="round"/><circle cx="403.4" cy="148.6" r="3.6" fill="#e8820c" stroke="#fff" stroke-width="1"/><rect x="96" y="155" width="134" height="22" rx="11" fill="#e8820c"/><text x="163.0" y="170.5" text-anchor="middle" font-size="12.5" font-weight="700" fill="#111">2: 5 V</text><path d="M230 192H318V89H397.4V146.4L403.4 159.4" fill="none" stroke="#0d0f12" stroke-width="5.5" stroke-linejoin="round"/><path d="M230 192H318V89H397.4V146.4L403.4 159.4" fill="none" stroke="#d92d2d" stroke-width="3" stroke-linejoin="round"/><circle cx="403.4" cy="159.4" r="3.6" fill="#d92d2d" stroke="#fff" stroke-width="1"/><rect x="96" y="181" width="134" height="22" rx="11" fill="#d92d2d"/><text x="163.0" y="196.5" text-anchor="middle" font-size="12.5" font-weight="700" fill="#fff">1: 3.3 V</text><rect x="790" y="300" width="190" height="180" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="885" y="326" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Drive serial port</text><text x="885" y="468" text-anchor="middle" font-size="12" fill="#b3b3b3">names per its manual</text><path d="M561.0 426.0V580H766V430H806" fill="none" stroke="#0d0f12" stroke-width="5.5" stroke-linejoin="round"/><path d="M561.0 426.0V580H766V430H806" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round"/><circle cx="561.0" cy="426.0" r="3.6" fill="#2f7fe0" stroke="#fff" stroke-width="1"/><circle cx="806.0" cy="430.0" r="3.6" fill="#2f7fe0" stroke="#fff" stroke-width="1"/><rect x="814" y="419" width="100" height="22" rx="11" fill="#2f7fe0"/><text x="864.0" y="434.5" text-anchor="middle" font-size="12.5" font-weight="700" fill="#fff">D+ / A</text><path d="M590.8 426.0V550H748V395H806" fill="none" stroke="#0d0f12" stroke-width="5.5" stroke-linejoin="round"/><path d="M590.8 426.0V550H748V395H806" fill="none" stroke="#e0b82f" stroke-width="3" stroke-linejoin="round"/><circle cx="590.8" cy="426.0" r="3.6" fill="#e0b82f" stroke="#fff" stroke-width="1"/><circle cx="806.0" cy="395.0" r="3.6" fill="#e0b82f" stroke="#fff" stroke-width="1"/><rect x="814" y="384" width="100" height="22" rx="11" fill="#e0b82f"/><text x="864.0" y="399.5" text-anchor="middle" font-size="12.5" font-weight="700" fill="#111">D&#8722; / B</text><path d="M620.5 426.0V520H730V360H806" fill="none" stroke="#0d0f12" stroke-width="5.5" stroke-linejoin="round"/><path d="M620.5 426.0V520H730V360H806" fill="none" stroke="#939393" stroke-width="3" stroke-linejoin="round"/><circle cx="620.5" cy="426.0" r="3.6" fill="#939393" stroke="#fff" stroke-width="1"/><circle cx="806.0" cy="360.0" r="3.6" fill="#939393" stroke="#fff" stroke-width="1"/><rect x="814" y="349" width="100" height="22" rx="11" fill="#939393"/><text x="864.0" y="364.5" text-anchor="middle" font-size="12.5" font-weight="700" fill="#111">common</text></svg>
  </div>
  <figcaption>The connections of the board. Wire it only after your controller pins, host software and the drive manual are confirmed; SmoothieV2 does not drive this link itself.</figcaption>
</figure>
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

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Data path: the direction contact selects sending or listening">
  <svg viewBox="0 0 1000 130" role="img" aria-labelledby="xb-bsmr-path"><title id="xb-bsmr-path">The controller UART signals cross the isolation barrier inside the ISOW1412 to the RS-485 bus.</title><rect x="20" y="20" width="218" height="90" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="129" y="58" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Controller UART</text><text x="129" y="82" text-anchor="middle" font-size="12" fill="#b3b3b3">J1 contacts 4, 5, 6</text><rect x="268" y="20" width="218" height="90" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="376" y="58" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Isolation barrier</text><text x="376" y="82" text-anchor="middle" font-size="12" fill="#b3b3b3">inside U1</text><path d="M240 65H260" stroke="#5fb3ff" stroke-width="3"/><path d="M258 58L266 65L258 72Z" fill="#5fb3ff"/><rect x="515" y="20" width="218" height="90" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="624" y="58" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Transceiver U1</text><text x="624" y="82" text-anchor="middle" font-size="12" fill="#b3b3b3">ISOW1412</text><path d="M487 65H507" stroke="#5fb3ff" stroke-width="3"/><path d="M505 58L514 65L505 72Z" fill="#5fb3ff"/><rect x="762" y="20" width="218" height="90" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="871" y="58" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">RS-485 bus</text><text x="871" y="82" text-anchor="middle" font-size="12" fill="#b3b3b3">J3 D+ and D&#8722;</text><path d="M734 65H754" stroke="#5fb3ff" stroke-width="3"/><path d="M752 58L762 65L752 72Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>Data path: the direction contact selects sending or listening.</figcaption>
</figure>
{:/nomarkdown}

## Chaining {#chaining}

J2 passes the Gadgeteer socket on to a further board. The UART and direction contacts are used by this board. A solder link on each contact sets whether it is passed through: check the link labels against <a href="#pinout">Pinout</a> before stacking boards.

{::nomarkdown}
{% include _includes/extension-chain-figure.html id="xb-bouni-rs485-spindle-control" board="RS-485 board" in_label="IN" chain_label="CHAIN" lane1="pin 3" lane2="pin 4, UART transmit" lane3="pin 6, direction" s1="closed" s2="open" s3="open" caption="Contacts 4, 5 and 6 stop at this board." %}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contacts</th><th>Link as designed</th><th>On CHAIN</th></tr></thead>
  <tbody>
    <tr><td>1, 2, 10</td><td>none, wired through</td><td>3.3 V, 5 V, ground</td></tr>
    <tr><td>3, 7, 8, 9</td><td>closed</td><td>passed on</td></tr>
    <tr><td>4 (transmit), 5 (receive), 6 (direction)</td><td>open</td><td>stop here</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

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

## Appendix: mounting dimensions {#mounting}

Outline and holes from the original board file. Millimetres, seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-ndle-control-mount-t">
  <title id="xb-ndle-control-mount-t">Mounting drawing of the bouni-rs485-spindle-control, component side: outline 40 by 42 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="318.1" y="78.0" width="323.8" height="340.0" rx="0.0" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M318.1 56H641.9"/><path d="M318.1 50V62"/><path d="M641.9 50V62"/><path d="M667.9 78.0V418.0"/><path d="M661.9 78.0h12"/><path d="M661.9 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">40</text>
  <text x="679.9" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">42</text>
  <circle cx="318.1" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="306.1" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M260.1 104.0h30" fill="none"/><path d="M294.1 104.0l-8 -4v8z"/><path d="M260.1 104.0v30" fill="none"/><path d="M260.1 138.0l-4 -8h8z"/></g>
  <text x="298.1" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="256.1" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="358.6" cy="260.1" r="13.0" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M341.6 260.1h33.9M358.6 243.2v33.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="345.6" y="237.2" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 22.50</text>
  <circle cx="601.4" cy="260.1" r="13.0" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M584.5 260.1h33.9M601.4 243.2v33.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="614.4" y="237.2" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  35.00, 22.50</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
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
