---
layout: default
title: "Legacy high-current level shifter"
description: "Seven buffered outputs at a higher voltage from host logic: pinout, jumpers and voltage limit."
permalink: /extensions/historical-legacy-level-shifter-high-current
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Signals</p>
    <h1 id="historical-legacy-level-shifter-high-current">Legacy high-current level shifter</h1>
    <p class="xb-lead">Seven non-inverting buffered outputs that switch between ground and a higher supply voltage, driven from host pins.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/historical-legacy-level-shifter-high-current/directory-board-render.png" alt="Top view of the Legacy high-current level shifter board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>7</b><span>outputs</span></div>
  <div class="xb-stat"><b>one-way</b><span>host to load</span></div>
  <div class="xb-stat"><b>7</b><span>selection jumpers</span></div>
  <div class="xb-stat"><b>±8 V</b><span>gate limit</span></div>
  <div class="xb-stat"><b>64.6 × 29.8 mm</b><span>board size</span></div>
  <div class="xb-stat"><b>2</b><span>host headers</span></div>
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
  <a href="#mounting">Mounting dimensions</a>
  <a href="#electrical">Electrical specifications</a>
</nav>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <b>Do not power this board from 12 V,</b> although its original notes mention 5–12 V: the FDN339AN gate limit is ±8 V, and 5 V still needs checking against the fitted parts. This is a historical Smoothieboard2 design, not a current board.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>Unidirectional buffered level shifter</td></tr>
    <tr><td>Host headers</td><td>P9, P10</td></tr>
    <tr><td>Outputs</td><td>P1–P7: VDD, ground, output</td></tr>
    <tr><td>External supply</td><td>P8: ground, VPP</td></tr>
    <tr><td>Transistors</td><td>FDN339AN and SI2301</td></tr>
    <tr><td>Supply diodes</td><td>D1, D2 feed VDD from VPP or host 5 V; grounds stay common</td></tr>
    <tr><td>Size</td><td>64.595 × 29.845 mm</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/historical-legacy-level-shifter-high-current/directory-board-render.png" alt="Annotated top view of the Legacy high-current level shifter board">
      <a class="xb-mk" href="#tour-1" style="left:26.3%;top:71.9%" aria-label="1: Host header P9">1<span class="xb-pop"><b>Host header P9</b> — Supplies and GPIO1–7.</span></a>
      <a class="xb-mk xb-pr" href="#tour-2" style="left:84.2%;top:72.6%" aria-label="2: Host header P10">2<span class="xb-pop"><b>Host header P10</b> — Same contacts.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-3" style="left:88.9%;top:16.0%" aria-label="3: Outputs P1–P7">3<span class="xb-pop"><b>Outputs P1–P7</b> — One three-contact connector per channel.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-4" style="left:9.6%;top:44.0%" aria-label="4: External supply">4<span class="xb-pop"><b>External supply</b> — Ground and VPP.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-5" style="left:91.0%;top:44.6%" aria-label="5: Input transistors">5<span class="xb-pop"><b>Input transistors</b> — First stage.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-6" style="left:86.2%;top:49.3%" aria-label="6: Output pairs">6<span class="xb-pop"><b>Output pairs</b> — Drive each output.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-7" style="left:11.7%;top:21.0%" aria-label="7: Supply diodes">7<span class="xb-pop"><b>Supply diodes</b> — Combine the two sources.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-8" style="left:81.1%;top:44.6%" aria-label="8: Transistor Q2">8<span class="xb-pop"><b>Transistor Q2</b> — Transistor Q2, marked <code>FDN339AN</code> in the board file. Connects to <code>GND</code>.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host header P9</b> — Supplies and GPIO1–7.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Host header P10</b> — Same contacts.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Outputs P1–P7</b> — One three-contact connector per channel.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>External supply</b> — Ground and VPP.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Input transistors</b> — First stage.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Output pairs</b> — Drive each output.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Supply diodes</b> — Combine the two sources.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Transistor Q2</b> — Transistor Q2, marked <code>FDN339AN</code> in the board file. Connects to <code>GND</code>.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

<span id="connect-and-try-it"></span>

### Host headers P9 and P10

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>P9 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+3V3</code></td></tr>
    <tr><td>2</td><td><code>+5V</code></td></tr>
    <tr><td>3</td><td><code>GPIO1</code></td></tr>
    <tr><td>4</td><td><code>GPIO2</code></td></tr>
    <tr><td>5</td><td><code>GPIO3</code></td></tr>
    <tr><td>6</td><td><code>GPIO4</code></td></tr>
    <tr><td>7</td><td><code>GPIO5</code></td></tr>
    <tr><td>8</td><td><code>GPIO6</code></td></tr>
    <tr><td>9</td><td><code>GPIO7</code></td></tr>
    <tr><td>10</td><td><code>GND</code></td></tr>
    <tr><td>11</td><td>not connected</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### External supply P8

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>P8 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>GND</code></td></tr>
    <tr><td>2</td><td><code>VPP</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

P1–P7: contact 1 VDD, contact 2 ground, contact 3 the output.

Header contacts follow their GPIO names; the jumpers route them to channels out of numerical order (GPIO1 uses JP4 and output P4).

### Jumper JP1

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>JP1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>GPIO6</code></td></tr>
    <tr><td>2</td><td>joined to Q1 pad 1, R2 pad 1</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Jumper JP4

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>JP4 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>GPIO1</code></td></tr>
    <tr><td>2</td><td>joined to Q4 pad 1, R5 pad 1</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Level shifter board</b><span>Built from the design files</span></div>
  <div class="xb-card"><b>Supply</b><span>Within the gate limit above</span></div>
  <div class="xb-card"><b>Meter</b><span>To check outputs before loads</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

The minimum wiring first, then the order to do it in. Facts about each contact are in the [pinout](#pinout).

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 472" role="img" aria-labelledby="xb-historical-legacy-level-shifter-high-current-wire"><title id="xb-historical-legacy-level-shifter-high-current-wire">Wiring: P8 contact 1 to GND; P8 contact 2 to VPP.</title><image href="/images/extensions/historical-legacy-level-shifter-high-current/directory-board-render.png" x="278" y="14" width="443" height="230"/><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">P8 on this board</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">External supply</text><rect x="700" y="304" width="270" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><rect x="810" y="334" width="140" height="90" rx="8" fill="#cfd3d9" stroke="#3a3f46" stroke-width="1.5"/><rect x="824" y="345" width="112" height="34" rx="3" fill="#101418" stroke="#101418" stroke-width="1.5"/><text x="880" y="369" text-anchor="middle" font-size="18" fill="#5df07a">00.0 V</text><circle cx="840" cy="401" r="11" fill="#2c3036" stroke="#0d0f12" stroke-width="1.5"/><circle cx="894" cy="401" r="8" fill="#c0262c" stroke="#0d0f12" stroke-width="1.5"/><circle cx="924" cy="401" r="8" fill="#23262b" stroke="#0d0f12" stroke-width="1.5"/><rect x="30" y="304" width="200" height="150" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 364.0H700" fill="none" stroke="#8b949e" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="364" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" fill="#e6ebf2">  1</text><text x="712" y="369" text-anchor="start" font-size="13" fill="#e6ebf2">GND</text><rect x="340" y="353" width="220" height="22" rx="11" fill="#8b949e" stroke="#8b949e" stroke-width="1.5"/><text x="450" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#111">1: GND</text><path d="M230 394.0H700" fill="none" stroke="#f2d024" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#f2d024" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="394" r="5" fill="#f2d024" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" fill="#e6ebf2">VPP  2</text><text x="712" y="399" text-anchor="start" font-size="13" fill="#e6ebf2">VPP</text><rect x="340" y="383" width="220" height="22" rx="11" fill="#f2d024" stroke="#f2d024" stroke-width="1.5"/><text x="450" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#111">2: VPP</text></svg>
  </div>
  <figcaption>Wiring drawn from the original design files. Make connections with all power off. Equipment is drawn as a typical unit, not a specific model.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Check the contacts</h3>
    <p>With all power off, find contact 1 on each connector and check every wire against the <a href="#pinout">pinout</a>.</p>
  </li>
  <li class="xb-step">
    <h3>Set up and check</h3>
    <p>Keep the supply within the gate limit under What you need and check outputs with a meter before connecting loads.</p>
  </li>
  <li class="xb-step">
    <h3>Configure and power up</h3>
    <p>Apply the settings under <a href="#configuration">Configuration</a>, then power up.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

<span id="smoothieware-use"></span>

A test of one channel from PB1. See [switch](/switch). Syntax checked against firmware commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`.

```ini
[switch]
translated_request.enable = true
translated_request.input_on_command = M42
translated_request.input_off_command = M43
translated_request.subcode = 21
translated_request.output_pin = PB1
translated_request.output_type = digital
translated_request.startup_state = false
translated_request.halt_set_to = false
translated_request.ignore_on_halt = false
```

## How it works {#how-it-works}

Each channel inverts twice, so the output follows the input: high drives the output towards VDD and low towards ground. The original notes quote 2 A per channel and 3 A total; do not treat these as continuous ratings. See the [FDN339AN datasheet](https://www.onsemi.com/pdf/datasheet/fdn339an-d.pdf).

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 142" role="img" aria-labelledby="xb-historical-legacy-level-shifter-high-current-path"><title id="xb-historical-legacy-level-shifter-high-current-path">Input signal then First inversion then Second inversion then Output, towards VDD or ground.</title><rect x="20" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="127" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Input signal</text><text x="127" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="268" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="376" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">First inversion</text><text x="376" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M238.5 70H259.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M258 63L266 70L258 77Z" fill="#5fb3ff"/><rect x="517" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="624" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Second inversion</text><text x="624" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M487.0 70H508.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M506 63L515 70L506 77Z" fill="#5fb3ff"/><rect x="766" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="873" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Output</text><text x="873" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2">towards VDD or ground</text><path d="M735.5 70H756.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M754 63L764 70L754 77Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Nothing responds</td><td>With power off, check continuity along each lead and board path against the pinout tables. Confirm which end of the connector is contact 1.</td></tr>
    <tr><td>The wrong output switches</td><td>Check the jumper map: GPIO1 is not output P1.</td></tr>
    <tr><td>Output stays low</td><td>VDD is missing or the channel jumper is open.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/level-shifter">original Smoothieboard2 board files</a></td><td>Design source</td></tr>
    <tr><td><a href="/images/extensions/historical-legacy-level-shifter-high-current/guides/native-contact-reference/native-source-and-notices.zip">Download the board source, upstream licence and drawing notice</a></td><td>Download</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

Outline and holes from the original board file. Millimetres, seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 417" role="img" aria-labelledby="xb-high-current-mount-t">
  <title id="xb-high-current-mount-t">Mounting drawing of the historical-legacy-level-shifter-high-current, component side: outline 64.59 by 29.84 millimetres with 1 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="180.0" y="78.0" width="600.0" height="277.2" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M180.0 56H780.0"/><path d="M180.0 50V62"/><path d="M780.0 50V62"/><path d="M806.0 78.0V355.2"/><path d="M800.0 78.0h12"/><path d="M800.0 355.2h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">64.59</text>
  <text x="818.0" y="221.6" font-size="15" font-weight="700" fill="#e6ebf2">29.84</text>
  <circle cx="180.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="168.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M122.0 104.0h30" fill="none"/><path d="M156.0 104.0l-8 -4v8z"/><path d="M122.0 104.0v30" fill="none"/><path d="M122.0 138.0l-4 -8h8z"/></g>
  <text x="160.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="118.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="226.4" cy="310.2" r="14.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M207.6 310.2h37.7M226.4 291.4v37.7" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="211.6" y="285.4" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 25.00</text>
  <text x="480.0" y="385.2" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 64.59 × 29.84&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>25.00</td><td>3.2&nbsp;mm, plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Only what the design source states or the circuit fixes. Blank cells are not specified.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Gate-to-source voltage</td><td>FDN339AN</td><td>—</td><td>—</td><td>8 V (absolute)</td><td>Manufacturer datasheet</td></tr>
    <tr><td>Output current</td><td>Per channel / total</td><td>—</td><td>—</td><td>Not specified</td><td>Original notes mention 2 A and 3 A; not a verified rating</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Design source {#origin}

This board comes from the [original design files](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/level-shifter). It was drawn for an earlier controller generation than Smoothieboard V2 Prime; match connections contact by contact.
See all boards on the [extension boards](/extension-boards) page.
