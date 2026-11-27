---
layout: default
title: "Parallel-port bench test jig"
description: "A bench fixture with digital isolators for exercising twelve parallel-port outputs and five inputs against a dummy DB25."
permalink: /extensions/parallel-port-breakout
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Test fixtures</p>
    <h1 id="parallel-port-breakout">Parallel-port bench test jig</h1>
    <p class="xb-lead">A bench fixture for testing parallel-port signal paths: twelve outputs and five returns cross digital isolators between ten-contact sockets and a DB25 connector.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/parallel-port-breakout/v22/parallel-port-breakout-diagram.png" alt="Top view of the Parallel-port bench test jig.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>12 out</b><span>5 back</span></div>
  <div class="xb-stat"><b><a href="/images/extensions/parallel-port-breakout/datasheets/iso7760.pdf">ISO7760</a></b><span>digital isolators</span></div>
  <div class="xb-stat"><b>2 supplies</b><span>host and field</span></div>
  <div class="xb-stat"><b>5.25 V</b><span>each, bench</span></div>
  <div class="xb-stat"><b>150 mA</b><span>source limit</span></div>
  <div class="xb-stat"><b>120 × 140</b><span>millimetres</span></div>
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
  Bench use only. Not for connection to a host computer, a controller or a machine; J4 takes a dummy DB25 only. The isolation is functional, not a safety barrier. Never link the host and field grounds, and no hot-plugging.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>Bench test fixture</td></tr>
    <tr><td>Signals</td><td>J1 and J2 carry twelve outputs; J2 and J3 return five inputs</td></tr>
    <tr><td>Isolators</td><td>Three <a href="/images/extensions/parallel-port-breakout/datasheets/iso7760.pdf">ISO7760</a> (capacitive, not optocouplers)</td></tr>
    <tr><td>Supplies</td><td>J6 host and J5 field, each 5.25&nbsp;V from a source limited to 150&nbsp;mA</td></tr>
    <tr><td>Enables</td><td>J7 field and J8 host test links</td></tr>
    <tr><td>DB25</td><td>J4; contacts 18 to 25 are field ground</td></tr>
    <tr><td>Size</td><td>120 &times; 140&nbsp;mm</td></tr>
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
      <img src="/images/extensions/parallel-port-breakout/v22/parallel-port-breakout-diagram.png" alt="Top view of the Parallel-port bench test jig with numbered markers explained in the list below.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:6.1%;top:26.7%" aria-label="1: Socket J1">1<span class="xb-pop"><b>Socket J1</b> — outputs DB25 2 to 8.</span></a>
      <a class="xb-mk xb-pl" href="#tour-2" style="left:6.1%;top:50.0%" aria-label="2: Socket J2">2<span class="xb-pop"><b>Socket J2</b> — outputs 9, 1, 14, 16, 17 and returns 10, 11.</span></a>
      <a class="xb-mk xb-pl" href="#tour-3" style="left:6.1%;top:73.2%" aria-label="3: Socket J3">3<span class="xb-pop"><b>Socket J3</b> — returns 12, 13, 15.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-4" style="left:82.0%;top:49.3%" aria-label="4: DB25 (J4)">4<span class="xb-pop"><b>DB25 (J4)</b> — dummy connector only.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:51.2%;top:23.2%" aria-label="5: Isolator U1">5<span class="xb-pop"><b>Isolator U1</b> — output channels.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:51.2%;top:48.6%" aria-label="6: Isolator U2">6<span class="xb-pop"><b>Isolator U2</b> — output channels.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:51.2%;top:73.9%" aria-label="7: Isolator U3">7<span class="xb-pop"><b>Isolator U3</b> — return channels.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-8" style="left:86.9%;top:14.8%" aria-label="8: Field supply (J5)">8<span class="xb-pop"><b>Field supply (J5)</b> — bench supply.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-9" style="left:17.2%;top:14.8%" aria-label="9: Host-side supply (J6)">9<span class="xb-pop"><b>Host-side supply (J6)</b> — bench supply.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-10" style="left:86.9%;top:26.7%" aria-label="10: Field enable (J7)">10<span class="xb-pop"><b>Field enable (J7)</b> — test link.</span></a>
      <a class="xb-mk xb-pl" href="#tour-11" style="left:17.2%;top:85.2%" aria-label="11: Host enable (J8)">11<span class="xb-pop"><b>Host enable (J8)</b> — test link.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Socket J1</b> — outputs DB25 2 to 8.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Socket J2</b> — outputs 9, 1, 14, 16, 17 and returns 10, 11.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Socket J3</b> — returns 12, 13, 15.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>DB25 (J4)</b> — dummy connector only.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Isolator U1</b> — output channels.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Isolator U2</b> — output channels.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Isolator U3</b> — return channels.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Field supply (J5)</b> — bench supply.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Host-side supply (J6)</b> — bench supply.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Field enable (J7)</b> — test link.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Host enable (J8)</b> — test link.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Socket contact</th><th>DB25 contact</th></tr></thead>
  <tbody>
    <tr><td>J1.3 to J1.9</td><td>2 to 8</td></tr>
    <tr><td>J2.3 to J2.7</td><td>9, 1, 14, 16, 17</td></tr>
    <tr><td>J2.8, J2.9</td><td>10, 11 (return)</td></tr>
    <tr><td>J3.3 to J3.5</td><td>12, 13, 15 (return)</td></tr>
    <tr><td>Contact 10</td><td>Host ground</td></tr>
    <tr><td>DB25 18 to 25</td><td>Field ground</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Contacts 1 and 2 of the sockets are not connected.

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This fixture</b><span>On an insulating surface.</span></div>
  <div class="xb-card"><b>Two limited bench supplies</b><span>5.25 V, 150 mA limit each.</span></div>
  <div class="xb-card"><b>A multimeter</b><span>And a dummy DB25.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

Begin with an inspection with everything unpowered.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 472" role="img" aria-labelledby="xb-parallel-port-breakout-wire"><title id="xb-parallel-port-breakout-wire">Wiring: J6 contact 2 to probe 1, probe 2 on TP1.</title><image href="/images/extensions/parallel-port-breakout/v22/parallel-port-breakout-diagram.png" x="401" y="14" width="198" height="230"/><circle cx="435" cy="48" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="416" y="67" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="435" y="81" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J6</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">J6 on this board</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#eaeaea">Multimeter, unpowered</text><rect x="700" y="304" width="270" height="150" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><rect x="835" y="319" width="90" height="120" rx="8" fill="#e5b41f" stroke="#6e560a" stroke-width="1.5"/><rect x="846" y="331" width="68" height="34" rx="3" fill="#b9c8ad" stroke="#40463c" stroke-width="1.5"/><text x="880" y="355" text-anchor="middle" font-size="16" font-weight="700" fill="#14180f">V DC</text><circle cx="880" cy="389" r="17" fill="#303030" stroke="#0d0f12" stroke-width="1.5"/><path d="M880 389.0V375.0" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/><circle cx="862" cy="421" r="7" fill="#c0262c" stroke="#0d0f12" stroke-width="1.5"/><circle cx="898" cy="421" r="7" fill="#262626" stroke="#0d0f12" stroke-width="1.5"/><rect x="30" y="304" width="200" height="150" rx="8" fill="#2f2f2f" stroke="#a1a1a1" stroke-width="1.5"/><path d="M230 379.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="379" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="379" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="384" text-anchor="end" font-size="14" fill="#eaeaea">  2</text><text x="712" y="384" text-anchor="start" font-size="13" fill="#eaeaea">probe 1</text><rect x="340" y="368" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="384" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">2: probe 1, probe 2 on TP1</text></svg>
  </div>
  <figcaption>Everything unpowered and both enable links removed: near zero ohms between J6 contact 2 and TP1 shows both are host ground. Equipment is drawn as a typical unit, not a specific model.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Remove everything</h3>
    <p>No supplies, no cables, both enable links removed; discharge capacitors.</p>
  </li>
  <li class="xb-step">
    <h3>Check the grounds</h3>
    <p>Measure resistance from J6 contact 2 to test point TP1.</p>
    <p class="xb-expect">Near zero: both are host ground.</p>
  </li>
  <li class="xb-step">
    <h3>Check the barrier</h3>
    <p>Measure between host and field ground.</p>
    <p class="xb-expect">No continuity.</p>
  </li>
  <li class="xb-step">
    <h3>Power on the bench</h3>
    <p>Remove the enable links before any power change; apply each limited supply separately.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Bench-test signal paths</td><td>No Smoothieware module</td><td><a href="#config-main">Setup</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Setup {#config-main}

There is no machine configuration: the fixture is not connected to a controller.

## How it works {#how-it-works}

Each <a href="/images/extensions/parallel-port-breakout/datasheets/iso7760.pdf">ISO7760</a> passes six signals across a capacitive barrier. Host and field sides have separate supplies and grounds; the enable links turn the isolator outputs on.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 270" role="img" aria-labelledby="xb-parallel-port-breakout-path"><title id="xb-parallel-port-breakout-path">Host signals then ISO7760, six signals across the barrier then Field side. Host supply and ground then Kept separate then Field supply and ground.</title><rect x="46" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="186" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Host signals</text><text x="186" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><rect x="360" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">ISO7760</text><text x="500" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3">six signals across the barrier</text><path d="M330.0 70H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 63L358 70L349 77Z" fill="#5fb3ff"/><rect x="674" y="14" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="814" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Field side</text><text x="814" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M644.0 70H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 63L672 70L663 77Z" fill="#5fb3ff"/><rect x="46" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="186" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Host supply and ground</text><text x="186" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><rect x="360" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="500" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Kept separate</text><text x="500" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M330.0 198H351.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M349 191L358 198L349 205Z" fill="#5fb3ff"/><rect x="674" y="142" width="280" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="814" y="193" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Field supply and ground</text><text x="814" y="213" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M644.0 198H665.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M663 191L672 198L663 205Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board, one path per row.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>No output</td><td>Both supplies present and the enable link fitted.</td></tr>
    <tr><td>Grounds connected</td><td>Remove whatever joins them before continuing.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/parallel-port-breakout/v22/parallel-port-breakout-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/parallel-port-breakout/v22/parallel-port-breakout-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/parallel-port-breakout/v22/parallel-port-breakout-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-pp-mount-t">
  <title id="xb-pp-mount-t">Mounting drawing of the parallel port breakout, component side: outline 120 by 140 millimetres with 6 mounting holes and 2 cable-tie holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#b3b3b3">COMPONENT SIDE · millimetres</text>
  <rect x="334.3" y="78.0" width="291.4" height="340.0" rx="0.0" fill="#1f2226" stroke="#eaeaea" stroke-width="1.5"/>
  <g stroke="#b3b3b3" stroke-width="1.2" fill="none"><path d="M334.3 56H625.7"/><path d="M334.3 50V62"/><path d="M625.7 50V62"/><path d="M651.7 78.0V418.0"/><path d="M645.7 78.0h12"/><path d="M645.7 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">120</text>
  <text x="663.7" y="253.0" font-size="15" font-weight="700" fill="#eaeaea">140</text>
  <circle cx="334.3" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="322.3" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M276.3 104.0h30" fill="none"/><path d="M310.3 104.0l-8 -4v8z"/><path d="M276.3 104.0v30" fill="none"/><path d="M276.3 138.0l-4 -8h8z"/></g>
  <text x="314.3" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="272.3" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="358.6" cy="102.3" r="4.0" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M350.6 102.3h16.0M358.6 94.3v16.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="354.6" y="126.3" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">1</tspan>  10.00, 10.00</text>
  <circle cx="601.4" cy="102.3" r="4.0" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M593.4 102.3h16.0M601.4 94.3v16.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="605.4" y="126.3" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">2</tspan>  110.00, 10.00</text>
  <circle cx="578.4" cy="228.7" r="4.0" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M570.4 228.7h16.0M578.4 220.7v16.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="582.4" y="252.7" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">3</tspan>  100.52, 62.07</text>
  <circle cx="578.4" cy="343.1" r="4.0" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M570.4 343.1h16.0M578.4 335.1v16.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="582.4" y="329.1" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">4</tspan>  100.52, 109.17</text>
  <circle cx="358.6" cy="393.7" r="4.0" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M350.6 393.7h16.0M358.6 385.7v16.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="354.6" y="379.7" text-anchor="start" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">5</tspan>  10.00, 130.00</text>
  <circle cx="601.4" cy="393.7" r="4.0" fill="#191919" stroke="#ffcc33" stroke-width="2"/>
  <path d="M593.4 393.7h16.0M601.4 385.7v16.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="605.4" y="379.7" text-anchor="end" font-size="13" fill="#eaeaea"><tspan font-weight="700" fill="#ffcc33">6</tspan>  110.00, 130.00</text>
  <circle cx="341.6" cy="85.3" r="3.0" fill="#191919" stroke="#b3b3b3" stroke-width="1.5"/>
  <circle cx="353.7" cy="85.3" r="3.0" fill="#191919" stroke="#b3b3b3" stroke-width="1.5"/>
  <path d="M347.6 91.3V421.0" stroke="#b3b3b3" stroke-width="1" fill="none"/>
  <text x="347.6" y="434.0" text-anchor="middle" font-size="12" fill="#b3b3b3">cable tie</text>
  <text x="480.0" y="464.0" text-anchor="middle" font-size="13" fill="#b3b3b3">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 120 × 140&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>10.00</td><td>10.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>110.00</td><td>10.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>100.52</td><td>62.07</td><td>3.2&nbsp;mm, plated, connected to /field_gnd</td><td>D-sub connector fixing</td></tr>
    <tr><td>4</td><td>100.52</td><td>109.17</td><td>3.2&nbsp;mm, plated, connected to /field_gnd</td><td>D-sub connector fixing</td></tr>
    <tr><td>5</td><td>10.00</td><td>130.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>6</td><td>110.00</td><td>130.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>–</td><td>3.00</td><td>3.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
    <tr><td>–</td><td>8.00</td><td>3.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Bench values from the silk screen.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Supply</td><td>J5 and J6</td><td>—</td><td>5.25 V</td><td>—</td><td>Bench source limited to 150 mA</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: datasheets {#datasheets}

The first page of each important chip&rsquo;s datasheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/parallel-port-breakout/datasheets/iso7760.pdf"><img src="/images/extensions/parallel-port-breakout/datasheets/iso7760-page1.png" alt="First page of the ISO7760 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/parallel-port-breakout/datasheets/iso7760.pdf">ISO7760 six-channel digital isolator</a> — Texas Instruments, 52 pages.</figcaption>
</figure>
{:/nomarkdown}


See all boards on the [extension boards](/extension-boards) page.
