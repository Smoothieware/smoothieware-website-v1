---
layout: default
title: "Flambegate — high-side heater shutoff"
description: "High-side FET board that disconnects a heater supply on an external trigger: pinout."
permalink: /extensions/historical-flambegate
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Safety add-on</p>
    <h1 id="historical-flambegate">Flambegate — high-side heater shutoff</h1>
    <p class="xb-lead">A separately controlled high-side MOSFET in a DC heater supply, meant to cut the heater when an external trigger detects a fault.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/historical-flambegate/directory-board-render.png" alt="Top view of the Flambegate — high-side heater shutoff board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>1</b><span>high-side channel</span></div>
  <div class="xb-stat"><b>28 V DC</b><span>author&rsquo;s figure</span></div>
  <div class="xb-stat"><b>8 A</b><span>author&rsquo;s figure</span></div>
  <div class="xb-stat"><b>inline</b><span>fuse</span></div>
  <div class="xb-stat"><b>55 × 26 mm</b><span>board size</span></div>
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
  <b>This is not a certified safety device.</b> The author&rsquo;s figure of about 8 A at 28 V DC is not verified; check fusing, current and heat before relying on it. Third-party design by Chris Cecil, not a current Smoothieware board.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>High-side supply disconnect</td></tr>
    <tr><td>Power in and out</td><td>J1 and J4; their contact 1 is the pass-through return, not ground</td></tr>
    <tr><td>Control supply</td><td>J3: 5 V, ground</td></tr>
    <tr><td>Trigger</td><td>J2</td></tr>
    <tr><td>Switch</td><td>Q2 (WSD30L40DN), driven by Q1</td></tr>
    <tr><td>Size</td><td>55 × 26 mm</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/historical-flambegate/directory-board-render.png" alt="Annotated top view of the Flambegate — high-side heater shutoff board">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:29.2%;top:26.6%" aria-label="1: Power input">1<span class="xb-pop"><b>Power input</b> — Supply and pass-through.</span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:70.9%;top:26.9%" aria-label="2: Power output">2<span class="xb-pop"><b>Power output</b> — To the heater circuit.</span></a>
      <a class="xb-mk xb-pb" href="#tour-3" style="left:38.8%;top:41.9%" aria-label="3: Fuse">3<span class="xb-pop"><b>Fuse</b> — In series with the input.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:63.2%;top:79.7%" aria-label="4: Trigger input">4<span class="xb-pop"><b>Trigger input</b> — From the detector.</span></a>
      <a class="xb-mk xb-pl" href="#tour-5" style="left:11.2%;top:63.2%" aria-label="5: Control supply">5<span class="xb-pop"><b>Control supply</b> — 5 V and ground.</span></a>
      <a class="xb-mk" href="#tour-6" style="left:38.1%;top:65.7%" aria-label="6: Regulator">6<span class="xb-pop"><b>Regulator</b> — Makes 5 V.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:57.3%;top:66.4%" aria-label="7: Trigger transistor">7<span class="xb-pop"><b>Trigger transistor</b> — Drives the main switch on the underside.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:52.6%;top:67.1%" aria-label="8: Resistor R1">8<span class="xb-pop"><b>Resistor R1</b> — Resistor R1, marked <code>22r</code> in the board file.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Power input</b> — Supply and pass-through.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Power output</b> — To the heater circuit.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Fuse</b> — In series with the input.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Trigger input</b> — From the detector.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Control supply</b> — 5 V and ground.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Regulator</b> — Makes 5 V.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Trigger transistor</b> — Drives the main switch on the underside.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Resistor R1</b> — Resistor R1, marked <code>22r</code> in the board file.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

<span id="connect-and-try-it"></span>

### Power input J1

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>Passthru</code></td></tr>
    <tr><td>2</td><td>joined to F1 pad 1</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Power output J4

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J4 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>Passthru</code></td></tr>
    <tr><td>2</td><td>joined to Q2 pad 5</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Control supply J3

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J3 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+5V</code></td></tr>
    <tr><td>2</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Trigger J2

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J2 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>joined to R1 pad 2</td></tr>
    <tr><td>2</td><td><code>+5V</code></td></tr>
    <tr><td>3</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Flambegate board</b><span>Built from the design files</span></div>
  <div class="xb-card"><b>Fuse</b><span>Sized for the load</span></div>
  <div class="xb-card"><b>Trigger device</b><span>External fault detector</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

The minimum wiring first, then the order to do it in. Facts about each contact are in the [pinout](#pinout).

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 666" role="img" aria-labelledby="xb-historical-flambegate-wire"><title id="xb-historical-flambegate-wire">Wiring: J3 contact 1 to +5V; J3 contact 2 to GND; J2 contact 1 to trigger; J2 contact 2 to +5V; J2 contact 3 to GND.</title><image href="/images/extensions/historical-flambegate/directory-board-render.png" x="283" y="14" width="435" height="230"/><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J3 on this board</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">5 V control supply</text><rect x="700" y="304" width="270" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><rect x="810" y="334" width="140" height="90" rx="8" fill="#cfd3d9" stroke="#3a3f46" stroke-width="1.5"/><rect x="824" y="345" width="112" height="34" rx="3" fill="#101418" stroke="#101418" stroke-width="1.5"/><text x="880" y="369" text-anchor="middle" font-size="18" fill="#5df07a">00.0 V</text><circle cx="840" cy="401" r="11" fill="#2c3036" stroke="#0d0f12" stroke-width="1.5"/><circle cx="894" cy="401" r="8" fill="#c0262c" stroke="#0d0f12" stroke-width="1.5"/><circle cx="924" cy="401" r="8" fill="#23262b" stroke="#0d0f12" stroke-width="1.5"/><rect x="30" y="304" width="200" height="150" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 364.0H700" fill="none" stroke="#e8820c" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="364" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" fill="#e6ebf2">  1</text><text x="712" y="369" text-anchor="start" font-size="13" fill="#e6ebf2">+5V</text><rect x="340" y="353" width="220" height="22" rx="11" fill="#e8820c" stroke="#e8820c" stroke-width="1.5"/><text x="450" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#111">1: +5V</text><path d="M230 394.0H700" fill="none" stroke="#8b949e" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="394" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" fill="#e6ebf2">  2</text><text x="712" y="399" text-anchor="start" font-size="13" fill="#e6ebf2">GND</text><rect x="340" y="383" width="220" height="22" rx="11" fill="#8b949e" stroke="#8b949e" stroke-width="1.5"/><text x="450" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#111">2: GND</text><text x="130" y="486" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J2 on this board</text><text x="870" y="486" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">External fault detector</text><rect x="700" y="498" width="270" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><rect x="815" y="523" width="130" height="100" rx="8" fill="#20365c" stroke="#7fa6e0" stroke-width="1.5"/><rect x="858" y="553" width="44" height="40" rx="3" fill="#14171c" stroke="#8b949e" stroke-width="1.5"/><circle cx="828" cy="539" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="556" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="573" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="590" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="828" cy="607" r="4" fill="#d9b45a" stroke="#0d0f12" stroke-width="1.5"/><circle cx="930" cy="537" r="6" fill="#0d0f12" stroke="#c4cad3" stroke-width="1.5"/><circle cx="930" cy="609" r="6" fill="#0d0f12" stroke="#c4cad3" stroke-width="1.5"/><rect x="908" y="567" width="18" height="10" rx="1" fill="#c9a66b" stroke="#c9a66b" stroke-width="1.5"/><rect x="30" y="498" width="200" height="150" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 543.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="543" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="543" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="548" text-anchor="end" font-size="14" fill="#e6ebf2">  1</text><text x="712" y="548" text-anchor="start" font-size="13" fill="#e6ebf2">trigger</text><rect x="340" y="532" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="548" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1: trigger</text><path d="M230 573.0H700" fill="none" stroke="#e8820c" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="573" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="573" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><text x="216" y="578" text-anchor="end" font-size="14" fill="#e6ebf2">  2</text><text x="712" y="578" text-anchor="start" font-size="13" fill="#e6ebf2">+5V</text><rect x="340" y="562" width="220" height="22" rx="11" fill="#e8820c" stroke="#e8820c" stroke-width="1.5"/><text x="450" y="578" text-anchor="middle" font-size="13" font-weight="700" fill="#111">2: +5V</text><path d="M230 603.0H700" fill="none" stroke="#8b949e" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="603" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="603" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><text x="216" y="608" text-anchor="end" font-size="14" fill="#e6ebf2">  3</text><text x="712" y="608" text-anchor="start" font-size="13" fill="#e6ebf2">GND</text><rect x="340" y="592" width="220" height="22" rx="11" fill="#8b949e" stroke="#8b949e" stroke-width="1.5"/><text x="450" y="608" text-anchor="middle" font-size="13" font-weight="700" fill="#111">3: GND</text></svg>
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
    <p>Fit a fuse sized for the load.</p>
  </li>
  <li class="xb-step">
    <h3>Check with a meter</h3>
    <p>Check continuity and the rail voltages with a meter before connecting anything else.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

<span id="smoothieware-use"></span>

Hardware only: no Smoothieware setting.

## How it works {#how-it-works}

The fused positive supply passes through Q2 to the output. The trigger input drives Q1, which controls Q2. U1 makes 5 V from the supply.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 398" role="img" aria-labelledby="xb-historical-flambegate-path"><title id="xb-historical-flambegate-path">Fused positive supply then Q2 then Output. Trigger input then Q1 then Controls Q2. Supply then U1 then 5 V.</title><rect x="46" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="186" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Fused positive supply</text><text x="186" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="360" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Q2</text><text x="500" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M330.0 70H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 63L358 70L349 77Z" fill="#5fb3ff"/><rect x="674" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="814" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Output</text><text x="814" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M644.0 70H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 63L672 70L663 77Z" fill="#5fb3ff"/><rect x="46" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="186" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Trigger input</text><text x="186" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="360" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="500" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Q1</text><text x="500" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M330.0 198H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 191L358 198L349 205Z" fill="#5fb3ff"/><rect x="674" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="814" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Controls Q2</text><text x="814" y="213" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M644.0 198H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 191L672 198L663 205Z" fill="#5fb3ff"/><rect x="46" y="270" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="186" y="321" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Supply</text><text x="186" y="341" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="360" y="270" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="500" y="321" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">U1</text><text x="500" y="341" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M330.0 326H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 319L358 326L349 333Z" fill="#5fb3ff"/><rect x="674" y="270" width="280" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="814" y="321" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">5 V</text><text x="814" y="341" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M644.0 326H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 319L672 326L663 333Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board, one path per row.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Output stays off</td><td>Check the fuse, the trigger input and the 5 V rail.</td></tr>
    <tr><td>Output cannot be switched off</td><td>Stop using the board and check Q2 for a short.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="https://raw.githubusercontent.com/Ccecil/Flambegate/636f6ce4abb2750abbd326615f91eb67bd025ac0/HighSideFet.kicad_pcb">HighSideFet.kicad_pcb</a></td><td>Design source</td></tr>
    <tr><td><a href="/images/extensions/historical-flambegate/guides/native-contact-reference/native-source-and-notices.zip">Download the unmodified native source, upstream licence and drawing notice</a></td><td>Download</td></tr>
    <tr><td><a href="https://raw.githubusercontent.com/Ccecil/Flambegate/636f6ce4abb2750abbd326615f91eb67bd025ac0/HighSideFet.kicad_sch">HighSideFet.kicad_sch</a></td><td>Design source</td></tr>
    <tr><td><a href="https://raw.githubusercontent.com/Ccecil/Flambegate/636f6ce4abb2750abbd326615f91eb67bd025ac0/README.md">README.md</a></td><td>Design source</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

Outline and holes from the original board file. Millimetres, seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 424" role="img" aria-labelledby="xb-l-flambegate-mount-t">
  <title id="xb-l-flambegate-mount-t">Mounting drawing of the historical-flambegate, component side: outline 55 by 26 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="180.0" y="78.0" width="600.0" height="283.6" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M180.0 56H780.0"/><path d="M180.0 50V62"/><path d="M780.0 50V62"/><path d="M806.0 78.0V361.6"/><path d="M800.0 78.0h12"/><path d="M800.0 361.6h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">55</text>
  <text x="818.0" y="224.8" font-size="15" font-weight="700" fill="#e6ebf2">26</text>
  <circle cx="180.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="168.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M122.0 104.0h30" fill="none"/><path d="M156.0 104.0l-8 -4v8z"/><path d="M122.0 104.0v30" fill="none"/><path d="M122.0 138.0l-4 -8h8z"/></g>
  <text x="160.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="118.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="207.3" cy="334.4" r="13.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M189.6 334.4h35.3M207.3 316.7v35.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="193.6" y="310.7" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  2.50, 23.50</text>
  <circle cx="752.7" cy="334.4" r="13.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M735.1 334.4h35.3M752.7 316.7v35.3" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="766.4" y="310.7" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  52.50, 23.50</text>
  <text x="480.0" y="391.6" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 55 × 26&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>2.50</td><td>23.50</td><td>2.5&nbsp;mm, not plated</td><td>Mounting</td></tr>
    <tr><td>2</td><td>52.50</td><td>23.50</td><td>2.5&nbsp;mm, not plated</td><td>Mounting</td></tr>
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

Third-party design by Chris Cecil: [original board file](https://raw.githubusercontent.com/Ccecil/Flambegate/636f6ce4abb2750abbd326615f91eb67bd025ac0/HighSideFet.kicad_pcb) (<code>HighSideFet.kicad_pcb</code>). It is a separate hardware design, not a current Smoothieware board.
See all boards on the [extension boards](/extension-boards) page.
