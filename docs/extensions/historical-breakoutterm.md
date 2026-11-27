---
layout: default
title: "BreakoutTerm"
description: "Ten-contact screw-terminal breakout: pinout with its reversed terminal numbering."
permalink: /extensions/historical-breakoutterm
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Wiring</p>
    <h1 id="historical-breakoutterm">BreakoutTerm</h1>
    <p class="xb-lead">Moves a ten-contact host header to a row of screw terminals and repeats it on a second header.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/historical-breakoutterm/directory-board-render.png" alt="Top view of the BreakoutTerm board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>10</b><span>terminals</span></div>
  <div class="xb-stat"><b>3</b><span>connectors</span></div>
  <div class="xb-stat"><b>0</b><span>active parts</span></div>
  <div class="xb-stat"><b>reversed</b><span>numbering</span></div>
  <div class="xb-stat"><b>37 × 28.5 mm</b><span>board size</span></div>
  <div class="xb-stat"><b>2</b><span>mounting holes</span></div>
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
  <b>The terminal numbers run backwards.</b> Terminal 1 is ground and terminals 9 and 10 carry 5 V and 3.3 V. Check the pinout table before tightening a wire. This is a historical Smoothieboard2 design, not a current board.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>Passive screw-terminal breakout</td></tr>
    <tr><td>Connectors</td><td>P1 and P3: ten-contact headers. P2: ten screw terminals</td></tr>
    <tr><td>Mapping</td><td>P2 numbering is the reverse of P1 and P3</td></tr>
    <tr><td>Size</td><td>37 × 28.5 mm</td></tr>
    <tr><td>Licence</td><td>CERN-OHL-1.2</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/historical-breakoutterm/directory-board-render.png" alt="Annotated top view of the BreakoutTerm board">
      <a class="xb-mk xb-pb xb-pr" href="#tour-1" style="left:88.9%;top:21.6%" aria-label="1: Screw terminals P2">1<span class="xb-pop"><b>Screw terminals P2</b> — Terminal 1 is ground; the order is reversed against the headers.</span></a>
      <a class="xb-mk" href="#tour-2" style="left:34.2%;top:64.6%" aria-label="2: Header P1">2<span class="xb-pop"><b>Header P1</b> — Host connector.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:65.8%;top:64.6%" aria-label="3: Header P3">3<span class="xb-pop"><b>Header P3</b> — Straight-through copy of P1.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Screw terminals P2</b> — Terminal 1 is ground; the order is reversed against the headers.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Header P1</b> — Host connector.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Header P3</b> — Straight-through copy of P1.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

<span id="connect-and-try-it"></span>

### Screw terminals P2

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>P2 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>GND</code></td></tr>
    <tr><td>2</td><td><code>P9</code></td></tr>
    <tr><td>3</td><td><code>P8</code></td></tr>
    <tr><td>4</td><td><code>P7</code></td></tr>
    <tr><td>5</td><td><code>P6</code></td></tr>
    <tr><td>6</td><td><code>P5</code></td></tr>
    <tr><td>7</td><td><code>P4</code></td></tr>
    <tr><td>8</td><td><code>P3</code></td></tr>
    <tr><td>9</td><td><code>+5V</code></td></tr>
    <tr><td>10</td><td><code>+3V3</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Host headers P1 and P3

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>P1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+3V3</code></td></tr>
    <tr><td>2</td><td><code>+5V</code></td></tr>
    <tr><td>3</td><td><code>P3</code></td></tr>
    <tr><td>4</td><td><code>P4</code></td></tr>
    <tr><td>5</td><td><code>P5</code></td></tr>
    <tr><td>6</td><td><code>P6</code></td></tr>
    <tr><td>7</td><td><code>P7</code></td></tr>
    <tr><td>8</td><td><code>P8</code></td></tr>
    <tr><td>9</td><td><code>P9</code></td></tr>
    <tr><td>10</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>BreakoutTerm board</b><span>Built from the design files</span></div>
  <div class="xb-card"><b>Two host leads</b><span>Signal and ground</span></div>
  <div class="xb-card"><b>Push button</b><span>Normally open, with two wires</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

A button test on Smoothieboard V2 Prime, using four leads.

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Wire the host leads</h3>
    <p>With power off, connect Prime J37 contact 3 (PB1) to P1 contact 3, and J37 contact 10 to P1 contact 10.</p>
    <p class="xb-expect">P1.3 reaches P2.8 and P1.10 reaches P2.1.</p>
  </li>
  <li class="xb-step">
    <h3>Add the button</h3>
    <p>Wire a normally-open button between terminals P2.8 and P2.1. Leave terminals 9 and 10 empty.</p>
  </li>
  <li class="xb-step">
    <h3>Configure and test</h3>
    <p>Disable machine loads, add the entry from <a href="#configuration">Configuration</a>, restart and press the button.</p>
    <p class="xb-expect">The machine halts when the button is pressed.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

<span id="smoothieware-use"></span>

A grounded push button on PB1 that requests a halt. Merge the entry into your existing `[button box]` section; do not reuse a pin or button name.

```ini
[button box]
raw_button.enable = true
raw_button.pin = PB1!^
raw_button.press = KILL
```

`^` pulls the open contact high and `!` makes the grounded (pressed) contact active. A button held at startup halts the machine, and releasing it does not clear the halt. See [button box](/button-box). Syntax checked against firmware commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`.

## How it works {#how-it-works}

P1 and P3 are wired straight through. P2 carries the same nets in the opposite order. There are no jumpers, active parts or protection.

## Chaining {#chaining}

P3 repeats P1. Anything on P3 shares every signal with the terminals; only one device may drive each contact.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Nothing responds</td><td>With power off, check continuity along each lead and board path against the pinout tables. Confirm which end of the connector is contact 1.</td></tr>
    <tr><td>Halted at startup</td><td>The button is held, wired normally closed, or on the wrong contacts. Turn power off and recheck.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/BreakoutTerm">retained original Smoothieboard2 source</a></td><td>Design source</td></tr>
    <tr><td><a href="/images/extensions/historical-breakoutterm/guides/native-contact-reference/native-source-and-notices.zip">Matching native source, licence and notices</a></td><td>Download</td></tr>
    <tr><td><a href="https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/utils/buttonbox/buttonbox.cpp#L49-L211">button parser and KILL action</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/Hal/src/Pin.cpp#L208-L270">pin suffix parser</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Smoothieware/Smoothieboard2/blob/52ab340de33180a975b25f856c161993488e6ace/LICENSE">CERN Open Hardware Licence v1.2</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Smoothieware/Smoothieboard2/blob/52ab340de33180a975b25f856c161993488e6ace/README.md">README</a></td><td>Design source</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

Outline and holes from the original board file. Millimetres, seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-breakoutterm-mount-t">
  <title id="xb-breakoutterm-mount-t">Mounting drawing of the historical-breakoutterm, component side: outline 37 by 28.5 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="259.3" y="78.0" width="441.4" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M259.3 56H700.7"/><path d="M259.3 50V62"/><path d="M700.7 50V62"/><path d="M726.7 78.0V418.0"/><path d="M720.7 78.0h12"/><path d="M720.7 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">37</text>
  <text x="738.7" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">28.5</text>
  <circle cx="259.3" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="247.3" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M201.3 104.0h30" fill="none"/><path d="M235.3 104.0l-8 -4v8z"/><path d="M201.3 104.0v30" fill="none"/><path d="M201.3 138.0l-4 -8h8z"/></g>
  <text x="239.3" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="197.3" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="301.1" cy="376.2" r="19.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M278.0 376.2h46.2M301.1 353.2v46.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="282.0" y="347.2" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  3.50, 25.00</text>
  <circle cx="658.9" cy="376.2" r="19.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M635.9 376.2h46.2M658.9 353.2v46.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="678.0" y="347.2" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  33.50, 25.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 37 × 28.5&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>3.50</td><td>25.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>33.50</td><td>25.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Only what the design source states or the circuit fixes. Blank cells are not specified.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Voltage, current and temperature limits</td><td>Whole board</td><td>—</td><td>—</td><td>—</td><td>Not specified in the source</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Design source {#origin}

This board comes from the [original design files](https://github.com/Smoothieware/Smoothieboard2/tree/52ab340de33180a975b25f856c161993488e6ace/extensions/BreakoutTerm). It is licensed CERN-OHL-1.2. It was drawn for an earlier controller generation than Smoothieboard V2 Prime; match connections contact by contact.
See all boards on the [extension boards](/extension-boards) page.
