---
layout: default
title: "Seven-LED GPIO board"
description: "Seven active-high LEDs on a ten-contact header: pinout, test wiring and configuration."
permalink: /extensions/historical-seven-led-breakout
redirect_from:
  - /extensions/historical-gadgeteer-led-breakout
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Indicators</p>
    <h1 id="historical-seven-led-breakout">Seven-LED GPIO board</h1>
    <p class="xb-lead">Seven indicator LEDs, one per header signal, for watching outputs on the bench.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/historical-seven-led-breakout/historical-seven-led-breakout-diagram.png" alt="Top view of the Seven-LED GPIO board board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>7</b><span>LEDs</span></div>
  <div class="xb-stat"><b>1 kΩ</b><span>per LED</span></div>
  <div class="xb-stat"><b>active high</b><span>logic</span></div>
  <div class="xb-stat"><b>1</b><span>header</span></div>
  <div class="xb-stat"><b>47.5 × 11.5 mm</b><span>board size</span></div>
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
  <a href="#troubleshooting">Troubleshooting</a>
  <a href="#downloads">Downloads</a>
  <a href="#mounting">Mounting dimensions</a>
  <a href="#electrical">Electrical specifications</a>
</nav>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <b>These LEDs light when the output is high,</b> the opposite of the current <a href="/extensions/led-breakout">LED breakout</a>. The host pin powers each LED, so check its current budget. This is a design by Chris Cecil, not a current Smoothieware board.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>Seven-channel indicator</td></tr>
    <tr><td>Header</td><td>J1 (underside)</td></tr>
    <tr><td>Signals</td><td>Contacts 3–9</td></tr>
    <tr><td>Ground</td><td>Contact 10</td></tr>
    <tr><td>Size</td><td>47.55 × 11.55 mm</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/historical-seven-led-breakout/historical-seven-led-breakout-diagram.png" alt="Annotated top view of the Seven-LED GPIO board board">
      <a class="xb-mk xb-pl" href="#tour-1" style="left:18.6%;top:50.6%" aria-label="1: D1 (contact 3)">1<span class="xb-pop"><b>D1 (contact 3)</b> — First channel.</span></a>
      <a class="xb-mk" href="#tour-2" style="left:50.0%;top:50.6%" aria-label="2: D4 (contact 6)">2<span class="xb-pop"><b>D4 (contact 6)</b> — Middle channel.</span></a>
      <a class="xb-mk xb-pr" href="#tour-3" style="left:81.6%;top:50.6%" aria-label="3: D7 (contact 9)">3<span class="xb-pop"><b>D7 (contact 9)</b> — Last channel.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:29.0%;top:50.6%" aria-label="4: LED D2">4<span class="xb-pop"><b>LED D2</b> — LED D2, marked <code>LED</code> in the board file. Connects to <code>GND</code>.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-5" style="left:18.6%;top:29.5%" aria-label="5: Resistor R1">5<span class="xb-pop"><b>Resistor R1</b> — Resistor R1, marked <code>1k</code> in the board file.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:39.6%;top:50.6%" aria-label="6: LED D3">6<span class="xb-pop"><b>LED D3</b> — LED D3, marked <code>LED</code> in the board file. Connects to <code>GND</code>.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:60.6%;top:50.6%" aria-label="7: LED D5">7<span class="xb-pop"><b>LED D5</b> — LED D5, marked <code>LED</code> in the board file. Connects to <code>GND</code>.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:71.1%;top:50.6%" aria-label="8: LED D6">8<span class="xb-pop"><b>LED D6</b> — LED D6, marked <code>LED</code> in the board file. Connects to <code>GND</code>.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>D1 (contact 3)</b> — First channel.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>D4 (contact 6)</b> — Middle channel.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>D7 (contact 9)</b> — Last channel.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>LED D2</b> — LED D2, marked <code>LED</code> in the board file. Connects to <code>GND</code>.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Resistor R1</b> — Resistor R1, marked <code>1k</code> in the board file.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>LED D3</b> — LED D3, marked <code>LED</code> in the board file. Connects to <code>GND</code>.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>LED D5</b> — LED D5, marked <code>LED</code> in the board file. Connects to <code>GND</code>.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>LED D6</b> — LED D6, marked <code>LED</code> in the board file. Connects to <code>GND</code>.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

### Lights {#lights}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th>Lit means</th><th>Disable it</th></tr></thead>
  <tbody>
    <tr><td>D1–D7</td><td>Header contacts 3–9 (D1 = contact 3) are high</td><td>Disconnect that signal</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Pinout {#pinout}

<span id="connect-and-try-it"></span>

### Header J1

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+3V3</code></td></tr>
    <tr><td>2</td><td><code>+5V</code></td></tr>
    <tr><td>3</td><td>LED D1</td></tr>
    <tr><td>4</td><td>LED D2</td></tr>
    <tr><td>5</td><td>LED D3</td></tr>
    <tr><td>6</td><td>LED D4</td></tr>
    <tr><td>7</td><td>LED D5</td></tr>
    <tr><td>8</td><td>LED D6</td></tr>
    <tr><td>9</td><td>LED D7</td></tr>
    <tr><td>10</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>LED board</b><span>Built from the design files</span></div>
  <div class="xb-card"><b>Two leads</b><span>Signal and ground</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

A one-channel test on Smoothieboard V2 Prime.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 424" role="img" aria-labelledby="xb-historical-seven-led-breakout-wire"><title id="xb-historical-seven-led-breakout-wire">Wiring: controller contact 3 to J1 contact 3; controller contact 10 to J1 contact 10.</title><image href="/images/extensions/historical-seven-led-breakout/historical-seven-led-breakout-diagram.png" x="220" y="14" width="560" height="182"/><text x="130" y="244" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Prime header J37</text><text x="870" y="244" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J1 on this board</text><rect x="30" y="256" width="200" height="150" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="130" y="327" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Smoothieboard</text><text x="130" y="347" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">V2 Prime</text><rect x="770" y="256" width="200" height="150" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 316.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="316" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="316" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="321" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">3</text><text x="784" y="321" text-anchor="start" font-size="14" fill="#eaeaea">3  LED D1</text><rect x="400" y="305" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="321" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">3 to 3: LED D1</text><path d="M230 346.0H770" fill="none" stroke="#939393" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="346" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="346" r="5" fill="#939393" stroke="#fff" stroke-width="1.5"/><text x="216" y="351" text-anchor="end" font-size="14" font-weight="700" fill="#eaeaea">10</text><text x="784" y="351" text-anchor="start" font-size="14" fill="#eaeaea">10  GND</text><rect x="400" y="335" width="200" height="22" rx="11" fill="#939393" stroke="#939393" stroke-width="1.5"/><text x="500" y="351" text-anchor="middle" font-size="13" font-weight="700" fill="#111">10 to 10: GND</text></svg>
  </div>
  <figcaption>Wiring for this procedure. Yellow rings mark the connectors used. Make and change connections with the power off.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Wire two leads</h3>
    <p>With power off connect J37 contact 3 (PB1) to J1.3 and J37 contact 10 to J1.10. Leave the other contacts open.</p>
  </li>
  <li class="xb-step">
    <h3>Configure</h3>
    <p>Add the switch from <a href="#configuration">Configuration</a> and restart.</p>
    <p class="xb-expect">D1 is dark.</p>
  </li>
  <li class="xb-step">
    <h3>Switch it</h3>
    <p>Send <code>M106.9</code>, then <code>M107.9</code>.</p>
    <p class="xb-expect">D1 lights, then goes out.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

<span id="smoothieware-use"></span>

See [switch](/switch). Syntax checked against firmware commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`.

```ini
[switch]
historical_led.enable = true
historical_led.input_on_command = M106
historical_led.input_off_command = M107
historical_led.subcode = 9
historical_led.output_pin = PB1
historical_led.output_type = digital
historical_led.startup_state = false
historical_led.halt_set_to = false
```

## How it works {#how-it-works}

Header contact 3 drives D1 through a 1 kΩ resistor to ground, and so on up to contact 9 and D7. The 3.3 V and 5 V contacts do not power the LEDs.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 142" role="img" aria-labelledby="xb-historical-seven-led-breakout-path"><title id="xb-historical-seven-led-breakout-path">Header contact 3 to 9 then 1 kΩ resistor each then LEDs D1 to D7 then Ground.</title><rect x="20" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="127" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Header contact 3 to 9</text><text x="127" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><rect x="268" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="376" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">1 kΩ resistor each</text><text x="376" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M238.5 70H259.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M258 63L266 70L258 77Z" fill="#5fb3ff"/><rect x="517" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="624" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">LEDs D1 to D7</text><text x="624" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M487.0 70H508.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M506 63L515 70L506 77Z" fill="#5fb3ff"/><rect x="766" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="873" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Ground</text><text x="873" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M735.5 70H756.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M754 63L764 70L754 77Z" fill="#5fb3ff"/></svg>
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
    <tr><td>LED stays dark</td><td>Measure that the signal goes high and that the lead reaches the right contact.</td></tr>
    <tr><td>LED is on when expected off</td><td>Do not use pin inversion with this board.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="https://github.com/Ccecil/LED_Breakout/tree/df7d5676186f403ad84463e31fd7e4100565203f">upstream project files</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/LED_Breakout/blob/df7d5676186f403ad84463e31fd7e4100565203f/LED_Breakout.kicad_pcb">original circuit</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/LED_Breakout">Ccecil upstream project</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/LED_Breakout/blob/df7d5676186f403ad84463e31fd7e4100565203f/LED_Breakout.kicad_sch">Original LED_Breakout.kicad_sch</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/LED_Breakout/blob/df7d5676186f403ad84463e31fd7e4100565203f/README.md">Original README.md</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/switch/Switch.cpp#L115-L438">V2 digital-switch implementation</a></td><td>Design source</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

Outline and holes from the original board file. Millimetres, seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 286" role="img" aria-labelledby="xb-led-breakout-mount-t">
  <title id="xb-led-breakout-mount-t">Mounting drawing of the historical-seven-led-breakout, component side: outline 47.55 by 11.55 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="180.0" y="78.0" width="600.0" height="145.7" rx="0.0" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M180.0 56H780.0"/><path d="M180.0 50V62"/><path d="M780.0 50V62"/><path d="M806.0 78.0V223.7"/><path d="M800.0 78.0h12"/><path d="M800.0 223.7h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">47.55</text>
  <text x="818.0" y="155.9" font-size="15" font-weight="700" fill="#eaeaea">11.55</text>
  <circle cx="180.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="168.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M122.0 104.0h30" fill="none"/><path d="M156.0 104.0l-8 -4v8z"/><path d="M122.0 104.0v30" fill="none"/><path d="M122.0 138.0l-4 -8h8z"/></g>
  <text x="160.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="118.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="227.9" cy="149.3" r="20.2" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M203.8 149.3h48.4M227.9 125.1v48.4" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="207.8" y="189.5" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  3.80, 5.65</text>
  <circle cx="732.7" cy="149.3" r="20.2" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M708.5 149.3h48.4M732.7 125.1v48.4" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="752.9" y="189.5" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  43.80, 5.65</text>
  <text x="480.0" y="253.7" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 47.55 × 11.55&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>3.80</td><td>5.65</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>43.80</td><td>5.65</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Only what the design source states or the circuit fixes. Blank cells are not specified.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>LED series resistance</td><td>Each channel</td><td>—</td><td>1 kΩ</td><td>—</td><td>Design file value</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Design source {#origin}

Designed by Chris Cecil: [original design files](https://github.com/Ccecil/LED_Breakout/tree/df7d5676186f403ad84463e31fd7e4100565203f). It was drawn for the Smoothieboard V2 Gadgeteer era; check every connection against your own controller.
See all boards on the [extension boards](/extension-boards) page.
