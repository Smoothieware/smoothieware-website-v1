---
layout: default
title: "Historical six-axis interface board"
description: "Six-axis external-drive interface with endstops, PWM outputs, UART and E-stop input: pinout."
permalink: /extensions/historical-six-axis-breakout
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Motion</p>
    <h1 id="historical-six-axis-breakout">Historical six-axis interface board</h1>
    <p class="xb-lead">Six STEP/DIR outputs, A, B and C min/max endstops, four small MOSFET outputs, a UART and a 40-contact harness connector.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/historical-six-axis-breakout/directory-board-render.png" alt="Top view of the Historical six-axis interface board board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>6</b><span>STEP/DIR outputs</span></div>
  <div class="xb-stat"><b>6</b><span>ABC endstops</span></div>
  <div class="xb-stat"><b>4</b><span>PWM outputs</span></div>
  <div class="xb-stat"><b>40</b><span>harness contacts</span></div>
  <div class="xb-stat"><b>80 × 80 mm</b><span>board size</span></div>
  <div class="xb-stat"><b>4</b><span>host headers</span></div>
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
  <b>Do not treat J13 contacts as 3.3 V signals.</b> The raw endstop inputs are pulled to 5 V by default and appear on the 40-way harness; the 3.3 V buffered copies are on J2. Check selectors and supply before connecting. This is a design by Chris Cecil, not a current Smoothieware board.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>External-drive interface board</td></tr>
    <tr><td>Host headers</td><td>J1–J4</td></tr>
    <tr><td>Drive outputs</td><td>J7–J12: 5 V, STEP, DIR, enable, ground</td></tr>
    <tr><td>Endstops</td><td>J18–J23</td></tr>
    <tr><td>MOSFET outputs</td><td>J14–J17</td></tr>
    <tr><td>UART</td><td>J5</td></tr>
    <tr><td>Harness</td><td>J13, 40 contacts</td></tr>
    <tr><td>Supply select</td><td>JP19: 5 V or external on J24</td></tr>
    <tr><td>Size</td><td>80 × 80 mm</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/historical-six-axis-breakout/directory-board-render.png" alt="Annotated top view of the Historical six-axis interface board board">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:18.5%;top:24.4%" aria-label="1: Header J1">1<span class="xb-pop"><b>Header J1</b> — E-stop, UART and PWM.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-2" style="left:18.5%;top:41.3%" aria-label="2: Header J2">2<span class="xb-pop"><b>Header J2</b> — Buffered endstops.</span></a>
      <a class="xb-mk xb-pl" href="#tour-3" style="left:18.5%;top:58.1%" aria-label="3: Header J3">3<span class="xb-pop"><b>Header J3</b> — XYZ commands.</span></a>
      <a class="xb-mk xb-pl" href="#tour-4" style="left:18.5%;top:75.6%" aria-label="4: Header J4">4<span class="xb-pop"><b>Header J4</b> — ABC commands.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:48.5%;top:57.9%" aria-label="5: Drive outputs">5<span class="xb-pop"><b>Drive outputs</b> — X to C.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:71.8%;top:42.7%" aria-label="6: Endstop connectors">6<span class="xb-pop"><b>Endstop connectors</b> — A, B and C.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:44.4%;top:17.2%" aria-label="7: MOSFET outputs">7<span class="xb-pop"><b>MOSFET outputs</b> — Four channels.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-8" style="left:83.7%;top:22.8%" aria-label="8: Harness connector">8<span class="xb-pop"><b>Harness connector</b> — 40 contacts.</span></a>
      <a class="xb-mk xb-pb" href="#tour-9" style="left:35.4%;top:24.7%" aria-label="9: UART connector">9<span class="xb-pop"><b>UART connector</b> — Ground, receive, transmit.</span></a>
      <a class="xb-mk" href="#tour-10" style="left:34.0%;top:53.6%" aria-label="10: 74LCX07">10<span class="xb-pop"><b>74LCX07</b> — Endstop buffer.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Header J1</b> — E-stop, UART and PWM.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Header J2</b> — Buffered endstops.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Header J3</b> — XYZ commands.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Header J4</b> — ABC commands.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Drive outputs</b> — X to C.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Endstop connectors</b> — A, B and C.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>MOSFET outputs</b> — Four channels.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Harness connector</b> — 40 contacts.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>UART connector</b> — Ground, receive, transmit.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>74LCX07</b> — Endstop buffer.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

<span id="connect-and-try-it"></span>

### Host header J1

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+3V3</code></td></tr>
    <tr><td>2</td><td><code>+5V</code></td></tr>
    <tr><td>3</td><td><code>E_STOP</code></td></tr>
    <tr><td>4</td><td><code>TX0</code></td></tr>
    <tr><td>5</td><td><code>RX0</code></td></tr>
    <tr><td>6</td><td><code>PWM1_1</code></td></tr>
    <tr><td>7</td><td><code>PWM1_2</code></td></tr>
    <tr><td>8</td><td><code>PWM1_3</code></td></tr>
    <tr><td>9</td><td><code>PWM1_4</code></td></tr>
    <tr><td>10</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Host header J2 (buffered endstops)

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J2 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+3V3</code></td></tr>
    <tr><td>2</td><td><code>+5V</code></td></tr>
    <tr><td>3</td><td><code>Cmin</code></td></tr>
    <tr><td>4</td><td><code>Cmax</code></td></tr>
    <tr><td>5</td><td><code>Bmin</code></td></tr>
    <tr><td>6</td><td><code>Bmax</code></td></tr>
    <tr><td>7</td><td><code>Amin</code></td></tr>
    <tr><td>8</td><td><code>Amax</code></td></tr>
    <tr><td>9</td><td><code>Spare1</code></td></tr>
    <tr><td>10</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Host header J3 (XYZ)

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J3 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+3V3</code></td></tr>
    <tr><td>2</td><td><code>+5V</code></td></tr>
    <tr><td>3</td><td><code>Z_DIR</code></td></tr>
    <tr><td>4</td><td><code>Z_STP</code></td></tr>
    <tr><td>5</td><td><code>Y_STP</code></td></tr>
    <tr><td>6</td><td><code>X_STP</code></td></tr>
    <tr><td>7</td><td><code>Y_DIR</code></td></tr>
    <tr><td>8</td><td><code>X_DIR</code></td></tr>
    <tr><td>9</td><td><code>EN</code></td></tr>
    <tr><td>10</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Host header J4 (ABC)

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J4 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+3V3</code></td></tr>
    <tr><td>2</td><td><code>+5V</code></td></tr>
    <tr><td>3</td><td><code>C_DIR</code></td></tr>
    <tr><td>4</td><td><code>C_STP</code></td></tr>
    <tr><td>5</td><td><code>B_STP</code></td></tr>
    <tr><td>6</td><td><code>A_STP</code></td></tr>
    <tr><td>7</td><td><code>B_DIR</code></td></tr>
    <tr><td>8</td><td><code>A_DIR</code></td></tr>
    <tr><td>9</td><td><code>Spare2</code></td></tr>
    <tr><td>10</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Harness J13

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J13 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+3V3</code></td></tr>
    <tr><td>2</td><td><code>+5V</code></td></tr>
    <tr><td>3</td><td><code>+3V3</code></td></tr>
    <tr><td>4</td><td><code>+5V</code></td></tr>
    <tr><td>5</td><td><code>FET1_</code></td></tr>
    <tr><td>6</td><td><code>FET2_</code></td></tr>
    <tr><td>7</td><td><code>FET3_</code></td></tr>
    <tr><td>8</td><td><code>FET4_</code></td></tr>
    <tr><td>9</td><td><code>TX0_</code></td></tr>
    <tr><td>10</td><td><code>RX0_</code></td></tr>
    <tr><td>11</td><td><code>A_MIN_IN</code></td></tr>
    <tr><td>12</td><td><code>A_MAX_IN</code></td></tr>
    <tr><td>13</td><td><code>B_MIN_IN</code></td></tr>
    <tr><td>14</td><td><code>B_MAX_IN</code></td></tr>
    <tr><td>15</td><td><code>C_MIN_IN</code></td></tr>
    <tr><td>16</td><td><code>C_MAX_IN</code></td></tr>
    <tr><td>17</td><td><code>X_DIR_</code></td></tr>
    <tr><td>18</td><td><code>X_STP_</code></td></tr>
    <tr><td>19</td><td><code>Y_DIR_</code></td></tr>
    <tr><td>20</td><td><code>Y_STP_</code></td></tr>
    <tr><td>21</td><td><code>Z_DIR_</code></td></tr>
    <tr><td>22</td><td><code>Z_STP_</code></td></tr>
    <tr><td>23</td><td><code>A_DIR_</code></td></tr>
    <tr><td>24</td><td><code>A_STP_</code></td></tr>
    <tr><td>25</td><td><code>B_DIR_</code></td></tr>
    <tr><td>26</td><td><code>B_STP_</code></td></tr>
    <tr><td>27</td><td><code>C_DIR_</code></td></tr>
    <tr><td>28</td><td><code>C_STP_</code></td></tr>
    <tr><td>29</td><td><code>EN_</code></td></tr>
    <tr><td>30</td><td><code>E_STOP_</code></td></tr>
    <tr><td>31</td><td><code>Spare1_</code></td></tr>
    <tr><td>32</td><td><code>Spare2_</code></td></tr>
    <tr><td>33</td><td><code>GND</code></td></tr>
    <tr><td>34</td><td><code>GND</code></td></tr>
    <tr><td>35</td><td><code>GND</code></td></tr>
    <tr><td>36</td><td><code>GND</code></td></tr>
    <tr><td>37</td><td><code>GND</code></td></tr>
    <tr><td>38</td><td><code>GND</code></td></tr>
    <tr><td>39</td><td><code>GND</code></td></tr>
    <tr><td>40</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### UART J5

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J5 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>GND</code></td></tr>
    <tr><td>2</td><td><code>RX0_</code></td></tr>
    <tr><td>3</td><td><code>TX0_</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### External supply J24

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J24 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>GND</code></td></tr>
    <tr><td>2</td><td>joined to JP19 pad 3</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

J7–J12 are the X, Y, Z, A, B and C drive connectors: 1 5 V, 2 STEP, 3 DIR, 4 enable, 5 ground. J18–J23 are the endstop connectors: contact 2 ground, contact 3 raw signal. J14–J17: contact 1 output, 2 ground, 3 VS.

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Six-axis board</b><span>Built from the design files</span></div>
  <div class="xb-card"><b>Host cables</b><span>Four ten-contact ports</span></div>
  <div class="xb-card"><b>Meter</b><span>To check jumpers and levels</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

The minimum wiring first, then the order to do it in. Facts about each contact are in the [pinout](#pinout).

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 592" role="img" aria-labelledby="xb-historical-six-axis-breakout-wire"><title id="xb-historical-six-axis-breakout-wire">Wiring: J3 contact 3 to Z_DIR; J3 contact 4 to Z_STP; J3 contact 5 to Y_STP; J3 contact 6 to X_STP; J3 contact 7 to Y_DIR; J3 contact 8 to X_DIR; J3 contact 9 to EN; J3 contact 10 to GND.</title><image href="/images/extensions/historical-six-axis-breakout/directory-board-render.png" x="385" y="14" width="230" height="230"/><circle cx="428" cy="148" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="409" y="167" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="428" y="181" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J3</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J3 on this board</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Host cable, XYZ</text><rect x="700" y="304" width="270" height="270" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><rect x="870" y="405" width="60" height="68" rx="5" fill="#23262b" stroke="#9aa2ad" stroke-width="1.5"/><path d="M810 427.0H870M810 439.0H870M810 451.0H870" fill="none" stroke="#8b949e" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/><circle cx="888" cy="427" r="3.5" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="888" cy="451" r="3.5" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="900" cy="427" r="3.5" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="900" cy="451" r="3.5" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="912" cy="427" r="3.5" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="912" cy="451" r="3.5" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><rect x="30" y="304" width="200" height="270" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 334.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="334" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="334" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="339" text-anchor="end" font-size="14" fill="#e6ebf2">Z_DIR  3</text><text x="712" y="339" text-anchor="start" font-size="13" fill="#e6ebf2">Z_DIR</text><rect x="340" y="323" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="339" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">3: Z_DIR</text><path d="M230 364.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" fill="#e6ebf2">Z_STP  4</text><text x="712" y="369" text-anchor="start" font-size="13" fill="#e6ebf2">Z_STP</text><rect x="340" y="353" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">4: Z_STP</text><path d="M230 394.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" fill="#e6ebf2">Y_STP  5</text><text x="712" y="399" text-anchor="start" font-size="13" fill="#e6ebf2">Y_STP</text><rect x="340" y="383" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">5: Y_STP</text><path d="M230 424.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="424" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="429" text-anchor="end" font-size="14" fill="#e6ebf2">X_STP  6</text><text x="712" y="429" text-anchor="start" font-size="13" fill="#e6ebf2">X_STP</text><rect x="340" y="413" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="429" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">6: X_STP</text><path d="M230 454.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="454" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="454" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="459" text-anchor="end" font-size="14" fill="#e6ebf2">Y_DIR  7</text><text x="712" y="459" text-anchor="start" font-size="13" fill="#e6ebf2">Y_DIR</text><rect x="340" y="443" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="459" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">7: Y_DIR</text><path d="M230 484.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="484" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="484" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="489" text-anchor="end" font-size="14" fill="#e6ebf2">X_DIR  8</text><text x="712" y="489" text-anchor="start" font-size="13" fill="#e6ebf2">X_DIR</text><rect x="340" y="473" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="489" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">8: X_DIR</text><path d="M230 514.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="514" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="514" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="519" text-anchor="end" font-size="14" fill="#e6ebf2">EN  9</text><text x="712" y="519" text-anchor="start" font-size="13" fill="#e6ebf2">EN</text><rect x="340" y="503" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="519" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">9: EN</text><path d="M230 544.0H700" fill="none" stroke="#8b949e" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="544" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="544" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><text x="216" y="549" text-anchor="end" font-size="14" fill="#e6ebf2">GND  10</text><text x="712" y="549" text-anchor="start" font-size="13" fill="#e6ebf2">GND</text><rect x="340" y="533" width="220" height="22" rx="11" fill="#8b949e" stroke="#8b949e" stroke-width="1.5"/><text x="450" y="549" text-anchor="middle" font-size="13" font-weight="700" fill="#111">10: GND</text></svg>
  </div>
  <figcaption>Wiring drawn from the original design files. Make connections with all power off. Equipment is drawn as a typical unit, not a specific model.</figcaption>
</figure>
{:/nomarkdown}

1. With all power off, find contact 1 on each connector and check every wire against the [pinout](#pinout).
2. Check the jumpers and logic levels with a meter.
3. Apply the settings under [Configuration](#configuration), then power up.

## Configuration {#configuration}

<span id="smoothieware-use"></span>

Reading the buffered A-min signal on PB1. The output side needs a pull-up suited to your controller.

A mechanical contact read as an input that does not limit motion. See [endstops](/endstops). Syntax checked against firmware commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`.

```ini
[endstops]
buffered_amin_observation.enable = true
buffered_amin_observation.pin = PB1-
buffered_amin_observation.axis = X
buffered_amin_observation.homing_direction = none
buffered_amin_observation.limit_enable = false
```

## How it works {#how-it-works}

Command signals pass through MOSFET translators to 5 V drive connectors. Each ABC endstop reaches a 74LCX07 open-drain buffer: the raw node (pulled up through jumpers, 5 V by default) goes to the harness, and the buffered 3.3 V-side node goes to J2. For A-min: J18.3 and J13.11 are raw, J2.7 is buffered.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 270" role="img" aria-labelledby="xb-historical-six-axis-breakout-path"><title id="xb-historical-six-axis-breakout-path">Command signals then MOSFET translators then 5 V drive connectors. ABC endstop, raw node then 74LCX07 buffer then J2, buffered 3.3 V side.</title><rect x="46" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="186" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Command signals</text><text x="186" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="360" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">MOSFET translators</text><text x="500" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M330.0 70H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 63L358 70L349 77Z" fill="#5fb3ff"/><rect x="674" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="814" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">5 V drive connectors</text><text x="814" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M644.0 70H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 63L672 70L663 77Z" fill="#5fb3ff"/><rect x="46" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="186" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">ABC endstop, raw node</text><text x="186" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="360" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="500" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">74LCX07 buffer</text><text x="500" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M330.0 198H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 191L358 198L349 205Z" fill="#5fb3ff"/><rect x="674" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="814" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">J2</text><text x="814" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2">buffered 3.3 V side</text><path d="M644.0 198H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 191L672 198L663 205Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board, one path per row.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Nothing responds</td><td>With power off, check continuity along each lead and board path against the pinout tables. Confirm which end of the connector is contact 1.</td></tr>
    <tr><td>Endstop reads wrong</td><td>Check you used the buffered J2 contact and the selector jumpers.</td></tr>
    <tr><td>No drive output</td><td>Check the shared enable and JP19.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="https://github.com/Ccecil/6-Axis-Breakout/blob/045d9f7f2947d37b2818cf35008f27b3130f0c2e/6AxisBreakout/6AxisBreakout.kicad_pcb">selected original circuit</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/6-Axis-Breakout">Ccecil upstream project</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/6-Axis-Breakout/tree/045d9f7f2947d37b2818cf35008f27b3130f0c2e">Pinned original source</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/6-Axis-Breakout/blob/045d9f7f2947d37b2818cf35008f27b3130f0c2e/6AxisBreakout/6AxisBreakout.kicad_sch">Original 6AxisBreakout.kicad_sch</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/6-Axis-Breakout/blob/045d9f7f2947d37b2818cf35008f27b3130f0c2e/6AxisBreakout/LevelShifter.kicad_sch">Original LevelShifter.kicad_sch</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/6-Axis-Breakout/blob/045d9f7f2947d37b2818cf35008f27b3130f0c2e/6AxisBreakout/OutputFET.kicad_sch">Original OutputFET.kicad_sch</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/6-Axis-Breakout/blob/045d9f7f2947d37b2818cf35008f27b3130f0c2e/6AxisBreakout/Probe.kicad_sch">Original Probe.kicad_sch</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/6-Axis-Breakout/blob/045d9f7f2947d37b2818cf35008f27b3130f0c2e/6AxisBreakout/V2Endstops.kicad_sch">Original V2Endstops.kicad_sch</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/6-Axis-Breakout/blob/045d9f7f2947d37b2818cf35008f27b3130f0c2e/README.md">Original README.md</a></td><td>Design source</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

Outline and holes from the original board file. Millimetres, seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-xis-breakout-mount-t">
  <title id="xb-xis-breakout-mount-t">Mounting drawing of the historical-six-axis-breakout, component side: outline 80 by 80 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="310.0" y="78.0" width="340.0" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M310.0 56H650.0"/><path d="M310.0 50V62"/><path d="M650.0 50V62"/><path d="M676.0 78.0V418.0"/><path d="M670.0 78.0h12"/><path d="M670.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">80</text>
  <text x="688.0" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">80</text>
  <circle cx="310.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="298.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M252.0 104.0h30" fill="none"/><path d="M286.0 104.0l-8 -4v8z"/><path d="M252.0 104.0v30" fill="none"/><path d="M252.0 138.0l-4 -8h8z"/></g>
  <text x="290.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="248.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="331.2" cy="99.2" r="6.8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M320.4 99.2h21.6M331.2 88.5v21.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="324.4" y="126.0" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.00</text>
  <circle cx="628.8" cy="99.2" r="6.8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M618.0 99.2h21.6M628.8 88.5v21.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="635.5" y="126.0" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  75.00, 5.00</text>
  <circle cx="331.2" cy="396.8" r="6.8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M320.4 396.8h21.6M331.2 385.9v21.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="324.4" y="379.9" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 75.00</text>
  <circle cx="628.8" cy="396.8" r="6.8" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M618.0 396.8h21.6M628.8 385.9v21.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="635.5" y="379.9" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  75.00, 75.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 80 × 80&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>75.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>5.00</td><td>75.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>75.00</td><td>75.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
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

Designed by Chris Cecil: [original design files](https://github.com/Ccecil/6-Axis-Breakout/tree/045d9f7f2947d37b2818cf35008f27b3130f0c2e). It was drawn for the Smoothieboard V2 Gadgeteer era; check every connection against your own controller.
See all boards on the [extension boards](/extension-boards) page.
