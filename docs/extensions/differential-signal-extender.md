---
layout: default
title: "Differential signal extender"
description: "An emitter and a receiver that carry one logic signal and 5 V power over a dedicated cable as a differential pair."
permalink: /extensions/differential-signal-extender
---

{% include _includes/extension-board-page.html %}


{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Signal interfaces</p>
    <h1 id="differential-signal-extender">Differential signal extender</h1>
    <p class="xb-lead">Send one logic output to a distant logic input. The emitter turns the signal into a differential pair and sends 5&nbsp;V along the same cable; the receiver turns it back into a 5&nbsp;V logic signal.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/differential-signal-extender/v15/differential-signal-extender-emitter-diagram.webp" alt="Top view of the emitter board: a three-pin input header and a large cable jack.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>1 signal</b><span>one direction</span></div>
  <div class="xb-stat"><b>2 boards</b><span>emitter and receiver</span></div>
  <div class="xb-stat"><b>5 V</b><span>power in the cable</span></div>
  <div class="xb-stat"><b>≤ 140 mA</b><span>receiver 5 V pin plus signal</span></div>
  <div class="xb-stat"><b>Low</b><span>receiver output when the link is idle</span></div>
  <div class="xb-stat"><b>No isolation</b><span>grounds are common</span></div>
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
  The cable jacks are not Ethernet and not PoE. One direction only: this does not return a sensor signal. The output is logic, never a valve or motor coil. Do not hot-plug, and never feed 5&nbsp;V into the receiver&rsquo;s output header.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Purpose</td><td>Extend one logic signal</td></tr>
    <tr><td>Emitter</td><td><a href="/images/extensions/differential-signal-extender/datasheets/thvd1451.pdf">THVD1451</a> driver; 0.5&nbsp;A resettable fuse on the 5&nbsp;V input</td></tr>
    <tr><td>Receiver</td><td><a href="/images/extensions/differential-signal-extender/datasheets/thvd1451.pdf">THVD1451</a> receiver, <a href="/images/extensions/differential-signal-extender/datasheets/ucc27517.pdf">UCC27517</a> output driver, reverse-polarity protection, <a href="/images/extensions/differential-signal-extender/datasheets/tps61322.pdf">TPS613222A</a> boost for the driver</td></tr>
    <tr><td>Connectors</td><td>Three pins (G, 5V, S) on each board; 8P8C jack for the cable</td></tr>
    <tr><td>Cable</td><td>Straight-through, 1/2 the signal pair, 4 and 5 power, 3, 6, 7, 8 ground, shield separate</td></tr>
    <tr><td>Polarity</td><td>Output high when the input is high</td></tr>
    <tr><td>Sizes</td><td>Emitter 28 &times; 31&nbsp;mm; receiver 34 &times; 34&nbsp;mm; two M3 holes each</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The emitter is at the controller end, the receiver at the load end.

### Emitter

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/differential-signal-extender/v15/differential-signal-extender-emitter-diagram.webp" alt="Top view of the emitter with numbered markers.">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:16.6%;top:48.4%" aria-label="1: Input header (J1)">1<span class="xb-pop"><b>Input header (J1)</b> — ground, 5&nbsp;V in, signal in.</span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:50.4%;top:30.0%" aria-label="2: Cable jack (J2)">2<span class="xb-pop"><b>Cable jack (J2)</b> — to the receiver.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:72.6%;top:65.1%" aria-label="3: Driver (U1)">3<span class="xb-pop"><b>Driver (U1)</b> — a THVD1451.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:32.6%;top:69.6%" aria-label="4: Fuse (F1)">4<span class="xb-pop"><b>Fuse (F1)</b> — resettable, 0.5&nbsp;A.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:35.6%;top:80.2%" aria-label="5: Power light (D4)">5<span class="xb-pop"><b>Power light (D4)</b> — 5&nbsp;V present.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Input header (J1)</b> — ground, 5&nbsp;V in, signal in.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Cable jack (J2)</b> — to the receiver.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Driver (U1)</b> — a <a href="/images/extensions/differential-signal-extender/datasheets/thvd1451.pdf">THVD1451</a>.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Fuse (F1)</b> — resettable, 0.5&nbsp;A.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Power light (D4)</b> — 5&nbsp;V present.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

### Receiver

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/differential-signal-extender/v15/differential-signal-extender-receiver-diagram.webp" alt="Top view of the receiver with numbered markers.">
      <a class="xb-mk xb-pb" href="#tour-6" style="left:58.6%;top:27.5%" aria-label="6: Cable jack (J2)">6<span class="xb-pop"><b>Cable jack (J2)</b> — from the emitter.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-7" style="left:13.8%;top:44.4%" aria-label="7: Output header (J1)">7<span class="xb-pop"><b>Output header (J1)</b> — ground, 5&nbsp;V out, signal out.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:59.9%;top:66.3%" aria-label="8: Receiver (U1)">8<span class="xb-pop"><b>Receiver (U1)</b> — a THVD1451.</span></a>
      <a class="xb-mk xb-pb" href="#tour-9" style="left:35.2%;top:48.8%" aria-label="9: Output driver (U2)">9<span class="xb-pop"><b>Output driver (U2)</b> — a UCC27517.</span></a>
      <a class="xb-mk" href="#tour-10" style="left:36.9%;top:87.7%" aria-label="10: Power light (D4)">10<span class="xb-pop"><b>Power light (D4)</b> — 5&nbsp;V present.</span></a>
      <a class="xb-mk" href="#tour-11" style="left:36.6%;top:67.2%" aria-label="11: Output light (D5)">11<span class="xb-pop"><b>Output light (D5)</b> — lit when the output is high.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="6">
    <li id="tour-6"><span class="xb-n">6</span><div><b>Cable jack (J2)</b> — from the emitter.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Output header (J1)</b> — ground, 5&nbsp;V out, signal out.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Receiver (U1)</b> — a <a href="/images/extensions/differential-signal-extender/datasheets/thvd1451.pdf">THVD1451</a>.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Output driver (U2)</b> — a <a href="/images/extensions/differential-signal-extender/datasheets/ucc27517.pdf">UCC27517</a>.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Power light (D4)</b> — 5&nbsp;V present.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Output light (D5)</b> — lit when the output is high.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

### Lights {#lights}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th>Lit means</th><th>Disable it</th></tr></thead>
  <tbody>
    <tr><td>Emitter D4, green</td><td>5&nbsp;V present</td><td>—</td></tr>
    <tr><td>Receiver D4, green</td><td>5&nbsp;V present</td><td>Cut JP4</td></tr>
    <tr><td>Receiver D5, green</td><td>Output high</td><td>Cut JP3</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Pinout {#pinout}

### Headers

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Pin</th><th>Emitter J1</th><th>Receiver J1</th></tr></thead>
  <tbody>
    <tr><td>G</td><td>Ground</td><td>Ground</td></tr>
    <tr><td>5V</td><td>5&nbsp;V input</td><td>5&nbsp;V output from the cable</td></tr>
    <tr><td>S</td><td>Signal input</td><td>Signal output</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Cable jacks

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1, 2</td><td>Signal pair (high, low)</td></tr>
    <tr><td>4, 5</td><td><span class="xb-pill xb-p-5v">5 V</span></td></tr>
    <tr><td>3, 6, 7, 8</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>Shell</td><td>Shield</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Solder links

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Board</th><th>Link</th><th>Effect</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>Emitter</td><td>JP1 CABLE_5V</td><td>Sends 5&nbsp;V into the cable</td><td>Bridged</td></tr>
    <tr><td>Receiver</td><td>JP1 TERM_DC</td><td>Adds a DC termination path across the pair</td><td>Open</td></tr>
    <tr><td>Both</td><td>JP2 SHLD_GND</td><td>Bonds the shield to ground</td><td>Open</td></tr>
    <tr><td>Receiver</td><td>JP3, JP4</td><td>Cut to disable lights</td><td>Bridged</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Both boards</b><span>One pair, built from the design files in Downloads</span></div>
  <div class="xb-card"><b>A straight-through cable</b><span>8P8C with all eight cores, used only for this link.</span></div>
  <div class="xb-card"><b>A 5 V supply</b><span>At the emitter, sharing ground with the controller.</span></div>
  <div class="xb-card"><b>A logic load</b><span>Draws, with the 5&nbsp;V pin, 140&nbsp;mA at most.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

This example drives the input from a Smoothieboard V2 Prime output.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 666" role="img" aria-labelledby="xb-differential-signal-extender-wire"><title id="xb-differential-signal-extender-wire">Wiring: controller contact 3 to Emitter contact S; controller contact 10 to Emitter contact G; Emitter contact 5V to positive; Emitter contact G to negative.</title><image href="/images/extensions/differential-signal-extender/v15/differential-signal-extender-emitter-diagram.webp" x="395" y="14" width="209" height="230"/><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Prime header GF/J37</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Emitter on this board</text><rect x="30" y="304" width="200" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="130" y="375" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Smoothieboard</text><text x="130" y="395" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">V2 Prime</text><rect x="770" y="304" width="200" height="150" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 364.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">3</text><text x="784" y="369" text-anchor="start" font-size="14" fill="#e6ebf2">S  </text><rect x="400" y="353" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">3 to S</text><path d="M230 394.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">10</text><text x="784" y="399" text-anchor="start" font-size="14" fill="#e6ebf2">G  </text><rect x="400" y="383" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">10 to G</text><text x="130" y="486" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Emitter on this board</text><text x="870" y="486" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">5 V supply</text><rect x="700" y="498" width="270" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><rect x="810" y="528" width="140" height="90" rx="8" fill="#cfd3d9" stroke="#3a3f46" stroke-width="1.5"/><rect x="824" y="539" width="112" height="34" rx="3" fill="#101418" stroke="#101418" stroke-width="1.5"/><text x="880" y="563" text-anchor="middle" font-size="18" fill="#5df07a">00.0 V</text><circle cx="840" cy="595" r="11" fill="#2c3036" stroke="#0d0f12" stroke-width="1.5"/><circle cx="894" cy="595" r="8" fill="#c0262c" stroke="#0d0f12" stroke-width="1.5"/><circle cx="924" cy="595" r="8" fill="#23262b" stroke="#0d0f12" stroke-width="1.5"/><rect x="30" y="498" width="200" height="150" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 558.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="558" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="558" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="563" text-anchor="end" font-size="14" fill="#e6ebf2">  5V</text><text x="712" y="563" text-anchor="start" font-size="13" fill="#e6ebf2">positive</text><rect x="340" y="547" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="563" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">5V: positive</text><path d="M230 588.0H700" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="588" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="700" cy="588" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="593" text-anchor="end" font-size="14" fill="#e6ebf2">  G</text><text x="712" y="593" text-anchor="start" font-size="13" fill="#e6ebf2">negative</text><rect x="340" y="577" width="220" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="450" y="593" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">G: negative</text></svg>
  </div>
  <figcaption>Wiring for this procedure. Yellow rings mark the connectors used. Make and change connections with the power off. Equipment is drawn as a typical unit, not a specific model.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Wire the emitter with the power off</h3>
    <p>Prime GF/J37 contact 3 (PB1) to S, contact 10 and your supply&rsquo;s negative to G, the 5&nbsp;V supply to 5V.</p>
  </li>
  <li class="xb-step">
    <h3>Connect the cable</h3>
    <p>Emitter jack to receiver jack. Never plug either into network equipment.</p>
  </li>
  <li class="xb-step">
    <h3>Power up without a load</h3>
    <p>Check both power lights.</p>
    <p class="xb-expect">The output stays low.</p>
  </li>
  <li class="xb-step">
    <h3>Switch the signal</h3>
    <p>Add the configuration below, send <code>M42.21</code> then <code>M43.21</code>.</p>
    <p class="xb-expect">The output light follows. Then connect the load with the power off.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Switch a distant logic input</td><td><a href="/switch">Switch</a>, digital output</td><td><a href="#config-main">Setup</a></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Setup {#config-main}

The boards need no driver; any digital output works.

```ini
[switch]
line_request.enable = true
line_request.output_pin = PB1
line_request.output_type = digital
line_request.input_on_command = M42
line_request.input_off_command = M43
line_request.subcode = 21
line_request.startup_state = false
line_request.halt_set_to = false
```

The [switch module](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/switch/Switch.cpp) starts this output LOW and returns it LOW on a software halt. That is not a hardware safety function, and it does not define the level during reset or power-up. Check that nothing else uses PB1 or M42.21 and M43.21.

## How it works {#how-it-works}

The emitter drives the two wires in opposite directions. The receiver compares them, so noise picked up equally by both has little effect, and the output driver restores a 5&nbsp;V logic level. With the link idle or disconnected the output is meant to rest low.

{% include _includes/extender-board-comparison.html %}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 142" role="img" aria-labelledby="xb-differential-signal-extender-path"><title id="xb-differential-signal-extender-path">Input signal then Emitter, drives two wires in opposite directions then Receiver, compares them, rejects shared noise then Output driver, restores 5 V logic.</title><rect x="20" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="127" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Input signal</text><text x="127" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2"></text><rect x="268" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="376" y="57" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Emitter</text><text x="376" y="77" text-anchor="middle" font-size="13" fill="#a9b4c2">drives two wires in opposite</text><text x="376" y="93" text-anchor="middle" font-size="13" fill="#a9b4c2">directions</text><path d="M238.5 70H259.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M258 63L266 70L258 77Z" fill="#5fb3ff"/><rect x="517" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="624" y="57" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Receiver</text><text x="624" y="77" text-anchor="middle" font-size="13" fill="#a9b4c2">compares them, rejects shared</text><text x="624" y="93" text-anchor="middle" font-size="13" fill="#a9b4c2">noise</text><path d="M487.0 70H508.0" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M506 63L515 70L506 77Z" fill="#5fb3ff"/><rect x="766" y="14" width="214" height="112" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="873" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">Output driver</text><text x="873" y="85" text-anchor="middle" font-size="13" fill="#a9b4c2">restores 5 V logic</text><path d="M735.5 70H756.5" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M754 63L764 70L754 77Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>No power light at the receiver</td><td>Emitter supply, JP1 CABLE_5V bridged, all cable cores.</td></tr>
    <tr><td>Output never goes high</td><td>Signal on pin S, common ground, pair on contacts 1 and 2.</td></tr>
    <tr><td>Errors on a long run</td><td>Twisted pair for contacts 1 and 2; consider closing the receiver&rsquo;s JP1.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/differential-signal-extender/v15/differential-signal-extender-emitter-schematic.pdf">Schematic (PDF, emitter)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/differential-signal-extender/v15/differential-signal-extender-emitter-bom.csv">Parts list (CSV, emitter)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/differential-signal-extender/v15/differential-signal-extender-emitter-diagram.webp">Board drawing (PNG, emitter)</a></td><td>The top view used on this page</td></tr>
    <tr><td><a href="/images/extensions/differential-signal-extender/v15/differential-signal-extender-receiver-schematic.pdf">Schematic (PDF, receiver)</a></td><td>The complete circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/differential-signal-extender/v15/differential-signal-extender-receiver-bom.csv">Parts list (CSV, receiver)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/differential-signal-extender/v15/differential-signal-extender-receiver-diagram.webp">Board drawing (PNG, receiver)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

### Emitter dimensions

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-dse-mount-t">
  <title id="xb-dse-mount-t">Mounting drawing of the dse, component side: outline 28 by 31 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="326.5" y="78.0" width="307.1" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M326.5 56H633.5"/><path d="M326.5 50V62"/><path d="M633.5 50V62"/><path d="M659.5 78.0V418.0"/><path d="M653.5 78.0h12"/><path d="M653.5 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">28</text>
  <text x="671.5" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">31</text>
  <circle cx="326.5" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="314.5" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M268.5 104.0h30" fill="none"/><path d="M302.5 104.0l-8 -4v8z"/><path d="M268.5 104.0v30" fill="none"/><path d="M268.5 138.0l-4 -8h8z"/></g>
  <text x="306.5" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="264.5" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="370.3" cy="374.1" r="17.5" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M348.8 374.1h43.1M370.3 352.6v43.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="352.8" y="346.6" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  4.00, 27.00</text>
  <circle cx="589.7" cy="374.1" r="17.5" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M568.1 374.1h43.1M589.7 352.6v43.1" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="607.2" y="346.6" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  24.00, 27.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 28 × 31&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>4.00</td><td>27.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>24.00</td><td>27.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Receiver dimensions

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-dsr-mount-t">
  <title id="xb-dsr-mount-t">Mounting drawing of the dsr, component side: outline 34 by 34 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="310.0" y="78.0" width="340.0" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M310.0 56H650.0"/><path d="M310.0 50V62"/><path d="M650.0 50V62"/><path d="M676.0 78.0V418.0"/><path d="M670.0 78.0h12"/><path d="M670.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">34</text>
  <text x="688.0" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">34</text>
  <circle cx="310.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="298.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M252.0 104.0h30" fill="none"/><path d="M286.0 104.0l-8 -4v8z"/><path d="M252.0 104.0v30" fill="none"/><path d="M252.0 138.0l-4 -8h8z"/></g>
  <text x="290.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="248.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="380.0" cy="378.0" r="16.0" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M360.0 378.0h40.0M380.0 358.0v40.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="364.0" y="352.0" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  7.00, 30.00</text>
  <circle cx="580.0" cy="378.0" r="16.0" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M560.0 378.0h40.0M580.0 358.0v40.0" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="596.0" y="352.0" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  27.00, 30.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 34 × 34&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>7.00</td><td>30.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>27.00</td><td>30.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Board values come from the silk screen and parts list.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Receiver output current</td><td>5 V pin plus signal</td><td>—</td><td>—</td><td>140 mA</td><td>Board silk</td></tr>
    <tr><td>Supply</td><td>Emitter 5V pin</td><td>—</td><td>5 V</td><td>—</td><td>Board silk</td></tr>
    <tr><td>Fuse</td><td>Emitter 5 V</td><td>—</td><td>0.5 A</td><td>—</td><td>Resettable fuse in the parts list</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: datasheets {#datasheets}

The first page of each important chip&rsquo;s datasheet. Click a page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/differential-signal-extender/datasheets/thvd1451.pdf"><img src="/images/extensions/differential-signal-extender/datasheets/thvd1451-page1.png" alt="First page of the THVD1451 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/differential-signal-extender/datasheets/thvd1451.pdf">THVD1451 3.3 V to 5 V RS-485 transceiver, full duplex</a> — Texas Instruments, 54 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/differential-signal-extender/datasheets/ucc27517.pdf"><img src="/images/extensions/differential-signal-extender/datasheets/ucc27517-page1.png" alt="First page of the UCC27517 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/differential-signal-extender/datasheets/ucc27517.pdf">UCC27517 single-channel gate driver</a> — Texas Instruments, 37 pages.</figcaption>
</figure>
<figure class="xb-fig">
  <a href="/images/extensions/differential-signal-extender/datasheets/tps61322.pdf"><img src="/images/extensions/differential-signal-extender/datasheets/tps61322-page1.png" alt="First page of the TPS613222A datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/differential-signal-extender/datasheets/tps61322.pdf">TPS61322 family boost converter</a> — Texas Instruments, 37 pages.</figcaption>
</figure>
{:/nomarkdown}


See all boards on the [extension boards](/extension-boards) page.
