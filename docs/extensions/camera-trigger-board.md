---
layout: default
title: "Camera trigger board"
description: "A two-channel isolated focus and shutter closure for a compatible remote-release camera input: pinout, links and a meter-only test configuration."
permalink: /extensions/camera-trigger-board
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Sensors</p>
    <h1 id="camera-trigger-board">Camera trigger board</h1>
    <p class="xb-lead">Two isolated solid-state contacts, focus and shutter, for a camera with a compatible remote-release input, such as an E3-type 2.5&nbsp;mm jack. It suits commanded timelapse capture. It does not carry image data and does not control a camera over USB.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/camera-trigger-board/camera-trigger-board-diagram.webp" alt="Top view of the camera trigger board: a ten-contact socket on the left, two solid-state contacts in the middle and a camera jack on the right.">
    <figcaption>Top view, drawn from the board&rsquo;s design files.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>2 channels</b><span>focus and shutter, each an isolated contact</span></div>
  <div class="xb-stat"><b>Active high</b><span>J1 contact 3 shutter, contact 4 focus</span></div>
  <div class="xb-stat"><b>AQY212GS</b><span>PhotoMOS contacts, 300&nbsp;&Omega; input resistors</span></div>
  <div class="xb-stat"><b>2 lights</b><span>amber, show commands, not exposures</span></div>
  <div class="xb-stat"><b>Meter first</b><span>test closures before connecting a camera</span></div>
  <div class="xb-stat"><b>36 × 24.6</b><span>millimetres, two M3 holes</span></div>
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
</nav>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  An E3-type plug shape does not prove that a camera is compatible: the contact assignment, voltage and current must be checked against that camera&rsquo;s manual. Never join the isolated camera common to the controller&rsquo;s ground. The indicator lights show commands, not that a picture was taken.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>Close a focus path and a shutter path to a camera common, for commanded timelapse</td></tr>
    <tr><td>Contacts</td><td>Two AQY212GS PhotoMOS solid-state contacts (U1 focus, U2 shutter). Each input is fed through a 300&nbsp;&Omega; resistor and switched by a DMN2056U MOSFET from the host line.</td></tr>
    <tr><td>Control</td><td>Active high: J1 contact 3 closes the shutter contact, contact 4 closes the focus contact. Each gate has a 1&nbsp;k&Omega; series resistor and a 10&nbsp;k&Omega; pull-down.</td></tr>
    <tr><td>Camera side</td><td>2.5&nbsp;mm three-contact jack J3 (tip shutter, ring focus, sleeve common) and an unfitted three-hole header J4 (focus, common, shutter). Both carry the same nets.</td></tr>
    <tr><td>Protection</td><td>Two PESD15VL1BA surge-protection parts, one on each camera-side path</td></tr>
    <tr><td>Lights</td><td>Two amber lights LED1 (focus command) and LED2 (shutter command); each has a cut link, and JP1 enables them</td></tr>
    <tr><td>Test points</td><td>Four: 3.3&nbsp;V, ground, focus gate and shutter gate (not drawn in the top view)</td></tr>
    <tr><td>Socket</td><td>One 10-contact Gadgeteer X socket (Samtec SHF-105, 1.27&nbsp;mm). Only contacts 1, 3, 4 and 10 are connected; there is no chain socket.</td></tr>
    <tr><td>Size</td><td>36 &times; 24.6&nbsp;mm with two M3 mounting holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a></td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Full figures are in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side. The mounting holes, test points, solder links and surge-protection parts are not marked on the drawing.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/camera-trigger-board/camera-trigger-board-diagram.webp" alt="Top view of the camera trigger board with ten numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pl" href="#tour-1" style="left:13.5%;top:55.2%" aria-label="1: host socket">1<span class="xb-pop"><b>Host socket X IN (J1)</b> — the Gadgeteer socket to the controller. Contact 3 commands the shutter, contact 4 the focus. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pr" href="#tour-2" style="left:78.2%;top:54.5%" aria-label="2: camera jack">2<span class="xb-pop"><b>Camera jack (J3)</b> — a 2.5&nbsp;mm three-contact jack for an E3-type remote cable: tip shutter, ring focus, sleeve common (marked on the silk).</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-3" style="left:84.5%;top:36.1%" aria-label="3: breakout header">3<span class="xb-pop"><b>Breakout header (J4)</b> — three 2.54&nbsp;mm holes for the same camera-side contacts (focus, common, shutter). The silk reads J4 DNP, which marks it as not fitted.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:50%;top:67.5%" aria-label="4: focus relay">4<span class="xb-pop"><b>Focus PhotoMOS (U1)</b> — an AQY212GS solid-state contact that closes the focus path to the camera common when its input is driven.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:50%;top:41.6%" aria-label="5: shutter relay">5<span class="xb-pop"><b>Shutter PhotoMOS (U2)</b> — an AQY212GS solid-state contact that closes the shutter path to the camera common.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:31.1%;top:47%" aria-label="6: shutter driver">6<span class="xb-pop"><b>Shutter driver (Q2)</b> — a DMN2056U MOSFET that switches the PhotoMOS input current when the host line is high.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:31.1%;top:73.1%" aria-label="7: focus driver">7<span class="xb-pop"><b>Focus driver (Q1)</b> — a DMN2056U MOSFET that switches the focus PhotoMOS input current when the host line is high.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:42.5%;top:83.1%" aria-label="8: focus light">8<span class="xb-pop"><b>Focus light (LED1)</b> — an amber light that follows the focus command. Cut JP3 to disable it.</span></a>
      <a class="xb-mk xb-pb" href="#tour-9" style="left:42.5%;top:11.9%" aria-label="9: shutter light">9<span class="xb-pop"><b>Shutter light (LED2)</b> — an amber light that follows the shutter command. Cut JP2 to disable it.</span></a>
      <a class="xb-mk" href="#tour-10" style="left:50%;top:54.3%" aria-label="10: isolation gap">10<span class="xb-pop"><b>Isolation gap</b> — the silk ISOLATION marks the separation between the host side on the left and the camera side on the right, which must not be joined.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host socket X IN (J1)</b> — the Gadgeteer socket to the controller. Contact 3 commands the shutter, contact 4 the focus. <i>See the pinout.</i></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Camera jack (J3)</b> — a 2.5&nbsp;mm three-contact jack for an E3-type remote cable: tip shutter, ring focus, sleeve common (marked on the silk).</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Breakout header (J4)</b> — three 2.54&nbsp;mm holes for the same camera-side contacts (focus, common, shutter). The silk reads J4 DNP, which marks it as not fitted.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Focus PhotoMOS (U1)</b> — an AQY212GS solid-state contact that closes the focus path to the camera common when its input is driven.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Shutter PhotoMOS (U2)</b> — an AQY212GS solid-state contact that closes the shutter path to the camera common.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Shutter driver (Q2)</b> — a DMN2056U MOSFET that switches the PhotoMOS input current when the host line is high.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Focus driver (Q1)</b> — a DMN2056U MOSFET that switches the focus PhotoMOS input current when the host line is high.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Focus light (LED1)</b> — an amber light that follows the focus command. Cut JP3 to disable it.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Shutter light (LED2)</b> — an amber light that follows the shutter command. Cut JP2 to disable it.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Isolation gap</b> — the silk ISOLATION marks the separation between the host side on the left and the camera side on the right, which must not be joined.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1: host socket (X IN)

Contact 1 is next to the white dot beside the arrow, at the lower end of the right-hand column of the socket in the tour. The odd contacts are in that column and the even contacts in the other.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Function</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Supply for the PhotoMOS inputs and the lights</td></tr>
    <tr><td>2</td><td>Not connected</td><td>Leave unused</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">SHUTTER</span></td><td>Shutter command, active high</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">FOCUS</span></td><td>Focus command, active high</td></tr>
    <tr><td>5 to 9</td><td>Not connected</td><td>Leave unused</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Logic ground</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J3: camera jack and J4: breakout header

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Function</th><th>J3 contact</th><th>J4 contact</th></tr></thead>
  <tbody>
    <tr><td><span class="xb-pill xb-p-sig">FOCUS</span> isolated contact</td><td>Ring</td><td>1</td></tr>
    <tr><td><span class="xb-pill xb-p-gnd">COM</span> camera common</td><td>Sleeve</td><td>2</td></tr>
    <tr><td><span class="xb-pill xb-p-sig">SHUTTER</span> isolated contact</td><td>Tip</td><td>3</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Use one camera-side connector only. The camera common is isolated from the host ground; do not bridge them. A jack that fits is not proof of the assignment: check the camera&rsquo;s own manual.

### Solder links and test points

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>Effect</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>JP1 (LED_EN)</td><td>Joins the 3.3&nbsp;V supply to the indicator lights</td><td>Bridged</td></tr>
    <tr><td>JP2</td><td>Cut to disable LED2 (shutter command light)</td><td>Bridged</td></tr>
    <tr><td>JP3</td><td>Cut to disable LED1 (focus command light)</td><td>Bridged</td></tr>
  </tbody>
</table></div>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Test point</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>TP1</td><td>3.3&nbsp;V</td></tr>
    <tr><td>TP2</td><td>Ground</td></tr>
    <tr><td>TP3</td><td>Focus gate</td></tr>
    <tr><td>TP4</td><td>Shutter gate</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>The camera trigger board.</span></div>
  <div class="xb-card"><b>A camera manual</b><span>The contact assignment, open-circuit voltage and closing current of its remote input.</span></div>
  <div class="xb-card"><b>Four host wires</b><span>3.3&nbsp;V, shutter, focus and ground to the controller.</span></div>
  <div class="xb-card"><b>A meter</b><span>An isolated meter for the closure test, before any camera.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Check the camera</h3>
    <p>Confirm from its manual that its remote input is a contact closure between a common and each of focus and shutter, with a voltage and current inside what the contacts can switch. Check the contact ratings in the AQY212GS data sheet.</p>
  </li>
  <li class="xb-step">
    <h3>Wire the controller</h3>
    <p>With the power off, connect header G_F (J37) contacts 1, 3, 4 and 10 to J1 contacts 1, 3, 4 and 10: 3.3&nbsp;V, shutter on PB1, focus on PJ4 and ground. Leave contact 2 unconnected. Check numbered continuity and the connector orientation first.</p>
    <p class="xb-expect">The rail positions on the Prime&rsquo;s physical header need checking before powering; see the Prime header note in the electrical appendix.</p>
  </li>
  <li class="xb-step">
    <h3>Test with a meter, not a camera</h3>
    <p>Add the test configuration below. With the camera disconnected, measure the closure between J3 tip and sleeve (shutter) and between ring and sleeve (focus) with an isolated meter.</p>
  </li>
  <li class="xb-step">
    <h3>Then the camera</h3>
    <p>Only after the checks, connect the camera by the cable your camera requires. Focus-before-shutter timing and exposure times belong to the camera and your own settings.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Close the shutter contact</td><td>Switch</td><td><code>M42.17</code> on, <code>M43.17</code> off</td></tr>
    <tr><td>Close the focus contact</td><td>Switch</td><td><code>M44.17</code> on, <code>M45.17</code> off</td></tr>
    <tr><td>A camera-specific protocol or timing</td><td>None</td><td>Not supplied</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Two ordinary digital outputs are enough: the board needs no camera protocol. This is a bench configuration for the meter test only. It follows the [switch module](https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/modules/tools/switch/Switch.cpp). Merge the entries into your existing <code>[switch]</code> section and reserve PB1 and PJ4.

```ini
[switch]
camera_shutter_bench.enable = true
camera_shutter_bench.output_pin = PB1
camera_shutter_bench.output_type = digital
camera_shutter_bench.input_on_command = M42
camera_shutter_bench.input_off_command = M43
camera_shutter_bench.subcode = 17
camera_shutter_bench.startup_state = false
camera_shutter_bench.halt_set_to = false
camera_shutter_bench.ignore_on_halt = false
camera_focus_bench.enable = true
camera_focus_bench.output_pin = PJ4
camera_focus_bench.output_type = digital
camera_focus_bench.input_on_command = M44
camera_focus_bench.input_off_command = M45
camera_focus_bench.subcode = 17
camera_focus_bench.startup_state = false
camera_focus_bench.halt_set_to = false
camera_focus_bench.ignore_on_halt = false
```

1. Send <code>M43.17</code>, then <code>M45.17</code>: both contacts open.
2. Send <code>M42.17</code>: the shutter contact (tip to sleeve) closes; focus stays open.
3. Send <code>M43.17</code>, then <code>M44.17</code>: the shutter opens and the focus contact (ring to sleeve) closes.
4. Send <code>M42.17</code>: both close.
5. Send <code>M43.17</code>, then <code>M45.17</code>: both open before removing power.

The startup and halt states apply after a successful configuration. They do not describe reset, boot or power-sequencing behaviour.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 170" role="img" aria-labelledby="xb-how-t">
    <title id="xb-how-t">A host command line drives a MOSFET that lights the input of a PhotoMOS, whose isolated contact closes a path to the camera common.</title>
    <g font-size="13" font-weight="700" text-anchor="middle" fill="#e6ebf2">
      <rect x="20" y="55" width="140" height="60" rx="8" fill="#1f2226" stroke="#dfe4ee"/><text x="90" y="80">J1</text><text x="90" y="100" font-weight="400" fill="#a9b4c2">3.3 V, focus, shutter</text>
      <rect x="210" y="55" width="150" height="60" rx="8" fill="#212936" stroke="#e0a877"/><text x="285" y="80">MOSFET</text><text x="285" y="100" font-weight="400" fill="#a9b4c2">Q1, Q2</text>
      <rect x="410" y="55" width="170" height="60" rx="8" fill="#212936" stroke="#6fe08a"/><text x="495" y="80">PhotoMOS</text><text x="495" y="100" font-weight="400" fill="#a9b4c2">AQY212GS, isolated</text>
      <rect x="630" y="55" width="150" height="60" rx="8" fill="#212936" stroke="#5fb3ff"/><text x="705" y="80">Protection</text><text x="705" y="100" font-weight="400" fill="#a9b4c2">PESD15VL1BA</text>
      <rect x="830" y="55" width="150" height="60" rx="8" fill="#1f2226" stroke="#e0a877"/><text x="905" y="80">J3 / J4</text><text x="905" y="100" font-weight="400" fill="#a9b4c2">camera side</text>
    </g>
    <g stroke-width="3" fill="none" stroke="#a9b4c2"><path d="M160 85H210"/><path d="M360 85H410"/><path d="M580 85H630"/><path d="M780 85H830"/></g>
  </svg>
  </div>
  <figcaption>The host side and the camera side are joined only through the light inside each PhotoMOS.</figcaption>
</figure>
{:/nomarkdown}

When the host drives a command line high, the MOSFET sinks current through the PhotoMOS input, and the output contact closes its camera path to the common. A surge-protection part sits across each camera-side path. The host and camera references must not be joined just to make a trigger work. The exact-part data sheet recommends 5 to 10&nbsp;mA of input drive. Check the camera-side voltage and current against the data sheet.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-amber"></span>LED1, focus command</th><th><span class="xb-led xb-led-amber"></span>LED2, shutter command</th></tr></thead>
  <tbody>
    <tr><td>Where</td><td>Lower middle, left of the ISOLATED FOCUS CMD text</td><td>Top middle, above SHUT CMD</td></tr>
    <tr><td>Lit means</td><td>The focus command is on</td><td>The shutter command is on</td></tr>
    <tr><td>Disable it</td><td>Cut JP3</td><td>Cut JP2</td></tr>
  </tbody>
</table></div>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Light on, camera does nothing</td><td>The light only follows the command. Check the camera&rsquo;s contact assignment, the cable, and the contact closure with a meter.</td></tr>
    <tr><td>Contact never closes</td><td>3.3&nbsp;V on TP1, the command at TP3 or TP4, and the wiring of J1 contacts 3 and 4.</td></tr>
    <tr><td>Both lights stay dark</td><td>JP1 and JP2 or JP3 may have been cut; the commands may not be on.</td></tr>
    <tr><td>Camera triggers by itself</td><td>The isolated common may be joined to the host ground, or the camera input floats; check wiring.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/camera-trigger-board/camera-trigger-board-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram.</td></tr>
    <tr><td><a href="/images/extensions/camera-trigger-board/camera-trigger-board-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/camera-trigger-board/camera-trigger-board-diagram.webp">Board drawing (WebP)</a></td><td>The top view used on this page, at full resolution</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-ct-mount-t">
  <title id="xb-ct-mount-t">Mounting drawing of the camera trigger board, component side: outline 36 by 24.6 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="231.2" y="78.0" width="497.6" height="340.0" rx="13.8" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M231.2 56H728.8"/><path d="M231.2 50V62"/><path d="M728.8 50V62"/><path d="M754.8 78.0V418.0"/><path d="M748.8 78.0h12"/><path d="M748.8 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">36</text>
  <text x="766.8" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">24.6</text>
  <circle cx="231.2" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="219.2" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M173.2 104.0h30" fill="none"/><path d="M207.2 104.0l-8 -4v8z"/><path d="M173.2 104.0v30" fill="none"/><path d="M173.2 138.0l-4 -8h8z"/></g>
  <text x="211.2" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="169.2" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="369.4" cy="119.5" r="22.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M343.3 119.5h52.2M369.4 93.3v52.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="347.3" y="161.6" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  10.00, 3.00</text>
  <circle cx="645.9" cy="119.5" r="22.1" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M619.7 119.5h52.2M645.9 93.3v52.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="668.0" y="161.6" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  30.00, 3.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 36 × 24.6&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>10.00</td><td>3.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>30.00</td><td>3.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>

{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

A dash means no figure is given.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Conditions</th></tr></thead>
  <tbody>
    <tr><td>Logic supply</td><td>J1 contact 1</td><td>—</td><td>3.3 V</td><td>—</td><td>—</td></tr>
    <tr><td>Command level</td><td>J1 contacts 3, 4</td><td>—</td><td>3.3 V logic</td><td>—</td><td>Active high</td></tr>
    <tr><td>PhotoMOS input resistor</td><td>R1, R2</td><td>—</td><td>300 &Omega;, 1&nbsp;%</td><td>—</td><td>—</td></tr>
    <tr><td>PhotoMOS input current</td><td>U1, U2</td><td>5 mA</td><td>—</td><td>10 mA</td><td>Recommended range in the part data sheet</td></tr>
    <tr><td>Light resistors</td><td>LED1, LED2</td><td>—</td><td>1 k&Omega;</td><td>—</td><td>—</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Prime header G_F (J37)

On the Prime, header G_F (J37) has 3.3&nbsp;V on contact 1, 5&nbsp;V on contact 2, PB1 on 3, PJ4 on 4 and ground on 10. Before powering, check the rail positions on the physical connector: verify numbered continuity with the power removed. The header is unshrouded.

See all boards on the [extension boards](/extension-boards) page.
