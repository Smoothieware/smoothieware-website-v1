---
layout: default
title: "Wireless Gadgeteer extender"
description: "One board per end of a radio link carrying seven digital channels, based on the MDBT42Q nRF52832 module, for use with your own firmware."
permalink: /extensions/wireless-gadgeteer-extender
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Wireless</p>
    <h1 id="wireless-gadgeteer-extender">Wireless Gadgeteer extender</h1>
    <p class="xb-lead">Use a pair of these boards to carry seven slow digital signals by radio. Solder links set the direction of each channel, and each board can run from the host or from its own 5&nbsp;V supply.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/wireless-gadgeteer-extender/v19/wireless-gadgeteer-extender-diagram.png" alt="Top view of the Wireless Gadgeteer extender.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>7 channels</b><span>digital</span></div>
  <div class="xb-stat"><b>nRF52832</b><span>radio module</span></div>
  <div class="xb-stat"><b>3.3 V</b><span>logic</span></div>
  <div class="xb-stat"><b>Ext. 5 V</b><span>optional supply</span></div>
  <div class="xb-stat"><b>2 lights</b><span>link and fault</span></div>
  <div class="xb-stat"><b>32 × 36</b><span>millimetres</span></div>
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
  <a href="#datasheets">Datasheets</a>
</nav>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Not for emergency stops, step pulses or any safety function. Both boards need radio firmware, which is not included. Never join a powered host to the external 5&nbsp;V supply, and never let both ends drive the same channel.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>Low-rate remote digital input and output</td></tr>
    <tr><td>Module</td><td>Raytac MDBT42Q-512KV2 (nRF52832); contains FCC ID SH6MDBT42Q</td></tr>
    <tr><td>Channels</td><td>J1 contacts 3 to 9 are channels 1 to 7</td></tr>
    <tr><td>Direction links</td><td>DIR1 to DIR7 (JP3 to JP9): open for input, bridged for output; the two ends must be complementary</td></tr>
    <tr><td>Safe level</td><td>JP2 selects low or high</td></tr>
    <tr><td>Supply</td><td>Host 3.3&nbsp;V, or 5&nbsp;V on J2 through a <a href="/images/extensions/wireless-gadgeteer-extender/datasheets/tps709.pdf">TPS70933</a> and link JP1</td></tr>
    <tr><td>Programming</td><td>J3, SWD</td></tr>
    <tr><td>Size</td><td>32 &times; 36&nbsp;mm, two M3 holes</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/wireless-gadgeteer-extender/v19/wireless-gadgeteer-extender-diagram.png" alt="Top view of the Wireless Gadgeteer extender with numbered markers explained in the list below.">
      <a class="xb-mk" href="#tour-1" style="left:41.1%;top:84.3%" aria-label="1: Host socket (J1)">1<span class="xb-pop"><b>Host socket (J1)</b> — the seven channels and supply.</span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:41.1%;top:22.0%" aria-label="2: Radio module (U1)">2<span class="xb-pop"><b>Radio module (U1)</b> — keep the antenna area clear.</span></a>
      <a class="xb-mk xb-pr" href="#tour-3" style="left:89.3%;top:82.7%" aria-label="3: Pair button (SW1)">3<span class="xb-pop"><b>Pair button (SW1)</b> — handled by your firmware.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-4" style="left:88.2%;top:40.2%" aria-label="4: Link light (LED1)">4<span class="xb-pop"><b>Link light (LED1)</b> — green.</span></a>
      <a class="xb-mk xb-pr" href="#tour-5" style="left:88.2%;top:51.1%" aria-label="5: Fault light (LED2)">5<span class="xb-pop"><b>Fault light (LED2)</b> — red.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:72.3%;top:14.8%" aria-label="6: Direction links">6<span class="xb-pop"><b>Direction links</b> — DIR1 to DIR7.</span></a>
      <a class="xb-mk xb-pr" href="#tour-7" style="left:82.3%;top:64.9%" aria-label="7: Safe-level link (JP2)">7<span class="xb-pop"><b>Safe-level link (JP2)</b> — low or high.</span></a>
      <a class="xb-mk xb-pl" href="#tour-8" style="left:11.1%;top:55.5%" aria-label="8: External supply (J2)">8<span class="xb-pop"><b>External supply (J2)</b> — 5&nbsp;V in.</span></a>
      <a class="xb-mk xb-pl" href="#tour-9" style="left:11.1%;top:70.3%" aria-label="9: Regulator link (JP1)">9<span class="xb-pop"><b>Regulator link (JP1)</b> — connects the regulator to 3.3&nbsp;V, external supply only.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-10" style="left:91.7%;top:14.8%" aria-label="10: Programming header (J3)">10<span class="xb-pop"><b>Programming header (J3)</b> — SWD.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host socket (J1)</b> — the seven channels and supply.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Radio module (U1)</b> — keep the antenna area clear.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Pair button (SW1)</b> — handled by your firmware.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Link light (LED1)</b> — green.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Fault light (LED2)</b> — red.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Direction links</b> — DIR1 to DIR7.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Safe-level link (JP2)</b> — low or high.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>External supply (J2)</b> — 5&nbsp;V in.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Regulator link (JP1)</b> — connects the regulator to 3.3&nbsp;V, external supply only.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Programming header (J3)</b> — SWD.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

### Lights {#lights}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th>Lit means</th><th>Disable it</th></tr></thead>
  <tbody>
    <tr><td>LED1, green</td><td>Set by firmware (link)</td><td>Cut JP12</td></tr>
    <tr><td>LED2, red</td><td>Set by firmware (fault)</td><td>Cut JP11</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Pinout {#pinout}

### J1: host socket

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td></tr>
    <tr><td>2</td><td>5&nbsp;V from J2, only if JP10 is bridged</td></tr>
    <tr><td>3 to 9</td><td><span class="xb-pill xb-p-sig">Channels 1 to 7</span></td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J2: external supply

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-5v">5 V in</span></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J3: SWD

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">Reference</span></td></tr>
    <tr><td>2</td><td>SWDIO</td></tr>
    <tr><td>3</td><td>SWDCLK</td></tr>
    <tr><td>4</td><td>Reset</td></tr>
    <tr><td>5</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Two boards</b><span>One for each end.</span></div>
  <div class="xb-card"><b>An SWD programmer</b><span>To load firmware.</span></div>
  <div class="xb-card"><b>Radio firmware</b><span>Matching on both ends.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

Configure both boards before connecting either to a machine.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 472" role="img" aria-labelledby="xb-wireless-gadgeteer-extender-wire"><title id="xb-wireless-gadgeteer-extender-wire">Wiring: J2 contact 1 to 5 V in; J2 contact 2 to ground.</title><image href="/images/extensions/wireless-gadgeteer-extender/v19/wireless-gadgeteer-extender-diagram.png" x="399" y="14" width="203" height="230"/><circle cx="421" cy="142" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="402" y="161" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="421" y="175" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J2</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J2 on this board</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">External 5 V supply</text><rect x="700" y="304" width="270" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><rect x="810" y="334" width="140" height="90" rx="8" fill="#cfd3d9" stroke="#3a3f46" stroke-width="1.5"/><rect x="824" y="345" width="112" height="34" rx="3" fill="#101418" stroke="#101418" stroke-width="1.5"/><text x="880" y="369" text-anchor="middle" font-size="18" fill="#5df07a">00.0 V</text><circle cx="840" cy="401" r="11" fill="#2c3036" stroke="#0d0f12" stroke-width="1.5"/><circle cx="894" cy="401" r="8" fill="#c0262c" stroke="#0d0f12" stroke-width="1.5"/><circle cx="924" cy="401" r="8" fill="#23262b" stroke="#0d0f12" stroke-width="1.5"/><rect x="30" y="304" width="200" height="150" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 364.0H700" fill="none" stroke="#e8820c" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="364" r="5" fill="#e8820c" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" fill="#e6ebf2">5 V in  1</text><text x="712" y="369" text-anchor="start" font-size="13" fill="#e6ebf2">5 V in</text><rect x="340" y="353" width="220" height="22" rx="11" fill="#e8820c" stroke="#e8820c" stroke-width="1.5"/><text x="450" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#111">1: 5 V in</text><path d="M230 394.0H700" fill="none" stroke="#8b949e" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="394" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" fill="#e6ebf2">GND  2</text><text x="712" y="399" text-anchor="start" font-size="13" fill="#e6ebf2">ground</text><rect x="340" y="383" width="220" height="22" rx="11" fill="#8b949e" stroke="#8b949e" stroke-width="1.5"/><text x="450" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#111">2: ground</text></svg>
  </div>
  <figcaption>Only for external power: bridge JP1 and keep the host from powering 3.3 V. With host power, leave J2 empty and JP1 and JP10 open. Equipment is drawn as a typical unit, not a specific model.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Choose the power source</h3>
    <p>Host: leave JP1 and JP10 open. External 5&nbsp;V: bridge JP1 and keep the host from powering 3.3&nbsp;V.</p>
  </li>
  <li class="xb-step">
    <h3>Set directions</h3>
    <p>Set DIR1 to DIR7 on one board and the complement on the other.</p>
  </li>
  <li class="xb-step">
    <h3>Set the safe level</h3>
    <p>JP2, low or high.</p>
  </li>
  <li class="xb-step">
    <h3>Load firmware and pair</h3>
    <p>Through J3, then test loss of the link, reset and power loss before connecting loads.</p>
    <p class="xb-expect">Both link lights behave as your firmware defines.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Carry signals by radio</td><td>Your own firmware; Smoothieware sees ordinary pins</td><td><a href="#config-main">Setup</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Setup {#config-main}

Smoothieware has no setting for the radio link. Configure the controller pins for ordinary low-rate inputs or outputs.

## How it works {#how-it-works}

The module samples the channels set as inputs, sends them to its peer, and drives the channels set as outputs. Timing, pairing, timeouts and safe states are defined by the firmware.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 142" role="img" aria-labelledby="xb-wireless-gadgeteer-extender-path"><title id="xb-wireless-gadgeteer-extender-path">Channels set as inputs then Module on one board then Radio link then Peer module then Channels set as outputs.</title><rect x="20" y="14" width="165" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="102" y="56" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Channels set as</text><text x="102" y="74" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">inputs</text><text x="102" y="94" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="219" y="14" width="165" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="301" y="56" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Module on one</text><text x="301" y="74" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">board</text><text x="301" y="94" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M188.8 70H209.8" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M208 63L217 70L208 77Z" fill="#5fb3ff"/><rect x="418" y="14" width="165" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Radio link</text><text x="500" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M387.6 70H408.6" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M407 63L416 70L407 77Z" fill="#5fb3ff"/><rect x="616" y="14" width="165" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="699" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Peer module</text><text x="699" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M586.4000000000001 70H607.4000000000001" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M605 63L614 70L605 77Z" fill="#5fb3ff"/><rect x="815" y="14" width="165" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="898" y="56" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Channels set as</text><text x="898" y="74" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">outputs</text><text x="898" y="94" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><path d="M785.2 70H806.2" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M804 63L813 70L804 77Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Fault light stays on</td><td>Check that the direction links of the two boards are complementary.</td></tr>
    <tr><td>No link</td><td>Pair again; keep the antenna clear of metal.</td></tr>
    <tr><td>Board dead on external supply</td><td>Check JP1 and the J2 polarity.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/wireless-gadgeteer-extender/v19/wireless-gadgeteer-extender-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/wireless-gadgeteer-extender/v19/wireless-gadgeteer-extender-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/wireless-gadgeteer-extender/v19/wireless-gadgeteer-extender-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-wg-mount-t">
  <title id="xb-wg-mount-t">Mounting drawing of the wg, component side: outline 32 by 36 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="328.9" y="78.0" width="302.2" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M328.9 56H631.1"/><path d="M328.9 50V62"/><path d="M631.1 50V62"/><path d="M657.1 78.0V418.0"/><path d="M651.1 78.0h12"/><path d="M651.1 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">32</text>
  <text x="669.1" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">36</text>
  <circle cx="328.9" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="316.9" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M270.9 104.0h30" fill="none"/><path d="M304.9 104.0l-8 -4v8z"/><path d="M270.9 104.0v30" fill="none"/><path d="M270.9 138.0l-4 -8h8z"/></g>
  <text x="308.9" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="266.9" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="361.9" cy="172.4" r="15.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M342.8 172.4h38.2M361.9 153.3v38.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="346.8" y="207.6" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  3.50, 10.00</text>
  <circle cx="550.8" cy="361.3" r="15.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M531.7 361.3h38.2M550.8 342.2v38.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="565.9" y="336.2" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  23.50, 30.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 32 × 36&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>3.50</td><td>10.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>23.50</td><td>30.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Values from the silk screen and design files.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>External supply</td><td>J2</td><td>—</td><td>5 V</td><td>—</td><td>Board silk</td></tr>
    <tr><td>Logic</td><td>Channels</td><td>—</td><td>3.3 V</td><td>—</td><td>Board silk</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: datasheets {#datasheets}

The first page of each important chip&rsquo;s datasheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/wireless-gadgeteer-extender/datasheets/tps709.pdf"><img src="/images/extensions/wireless-gadgeteer-extender/datasheets/tps709-page1.png" alt="First page of the TPS70933 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/wireless-gadgeteer-extender/datasheets/tps709.pdf">TPS709 150 mA low-dropout regulator</a> — Texas Instruments, 43 pages.</figcaption>
</figure>
{:/nomarkdown}


See all boards on the [extension boards](/extension-boards) page.
