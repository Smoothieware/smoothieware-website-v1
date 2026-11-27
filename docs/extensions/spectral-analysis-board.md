---
layout: default
title: "Spectral analysis"
description: "An 18-channel spectral sensor board (three AS7265x sensors) on I2C with a bus buffer and flash: pinout, fixture requirements and what is and is not provided."
permalink: /extensions/spectral-analysis-board
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Sensors</p>
    <h1 id="spectral-analysis-board">Spectral analysis</h1>
    <p class="xb-lead">Three AS72651, AS72652 and AS72653 spectral sensors give 18 channels of reflected light, read over I2C, for controlled reflectance experiments. The board supplies sensor data only: the light source, the calibration and the classification of materials belong to the host and to your optical fixture.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/spectral-analysis-board/spectral-analysis-board-diagram.png" alt="Top view of the spectral analysis board: three square sensor windows in a row in the middle, a ten-contact socket at the right and a small connector at the bottom.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>18 channels</b><span>three sensors, AS72651, AS72652 and AS72653</span></div>
  <div class="xb-stat"><b>I2C 0x49</b><span>address at 100&nbsp;kHz</span></div>
  <div class="xb-stat"><b>3.3 V only</b><span>no 5&nbsp;V load; 50&nbsp;mA board allocation</span></div>
  <div class="xb-stat"><b>15 ± 1 mm</b><span>sample distance for a flat matte sample</span></div>
  <div class="xb-stat"><b>No driver</b><span>no spectral sensor support in SmoothieV2</span></div>
  <div class="xb-stat"><b>70 × 50</b><span>millimetres, four M3 holes and two cable-tie holes</span></div>
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
  The board is 3.3&nbsp;V only: never connect 5&nbsp;V. Check the wiring and supply before applying power. The light source is external, and its spectrum and stability decide the quality of any result.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>Read reflected light in 18 channels from a sample, for controlled reflectance experiments</td></tr>
    <tr><td>Sensors</td><td>Three AS7265x parts: AS72651 (U1), AS72652 (U2) and AS72653 (U3). U1 coordinates the cluster.</td></tr>
    <tr><td>Host interface</td><td>I2C on J1 contacts 8 (data) and 9 (clock), through a TCA9517A bus buffer to the sensor side. Address 0x49, initial speed 100&nbsp;kHz.</td></tr>
    <tr><td>Supply</td><td>3.3&nbsp;V on J1 contact 1 only; the board is marked 3V3 ONLY / NO 5V LOAD. Allocation 50&nbsp;mA.</td></tr>
    <tr><td>Flash</td><td>An SST25PF040C serial flash (U4) supports the master sensor. A 10-contact Tag-Connect service connector J2 and four 0&nbsp;&Omega; links JP1 to JP4 isolate the flash lines for programming.</td></tr>
    <tr><td>Protection</td><td>Two TPD2E2U06 surge-protection parts on the host data and clock lines</td></tr>
    <tr><td>Connectors</td><td>One 10-contact Gadgeteer I socket (Samtec SHF-105, 1.27&nbsp;mm), a four-contact I2C connector J3, and the service connector J2</td></tr>
    <tr><td>Fixture</td><td>A flat matte sample at 15 &plusmn; 1&nbsp;mm, illuminated over at least 40&nbsp;mm diameter, with repeatable dark, white-reference and sample geometry</td></tr>
    <tr><td>Size</td><td>70 &times; 50&nbsp;mm with four M3 mounting holes and two 2.5&nbsp;mm cable-tie holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> (needs a driver, which is not supplied)</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side. The drawing shows the sockets, the three sensor windows and the silk markings; the resistors, capacitors, flash, bus buffer, surge protection, links and service connector are small parts that are not drawn, and the mounting holes are not marked.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/spectral-analysis-board/spectral-analysis-board-diagram.png" alt="Top view of the spectral analysis board with eight numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb xb-pr" href="#tour-1" style="left:85.9%;top:34.3%" aria-label="1: host socket">1<span class="xb-pop"><b>Host socket I (J1)</b> — the Gadgeteer I socket to the controller. Only contacts 1, 8, 9 and 10 are connected: 3.3&nbsp;V, I2C data, I2C clock and ground. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pr" href="#tour-2" style="left:76.4%;top:82.9%" aria-label="2: I2C connector">2<span class="xb-pop"><b>I2C connector (J3)</b> — a four-contact Qwiic-style connector (ground, 3.3&nbsp;V, data, clock) on the sensor-side I2C branch, after the bus buffer.</span></a>
      <a class="xb-mk xb-pb" href="#tour-3" style="left:38.9%;top:49.9%" aria-label="3: master sensor">3<span class="xb-pop"><b>Sensor U1 (AS72651)</b> — the first of the three sensors, which coordinates the cluster. Together the three give 18 channels.</span></a>
      <a class="xb-mk xb-pb" href="#tour-4" style="left:50%;top:49.9%" aria-label="4: second sensor">4<span class="xb-pop"><b>Sensor U2 (AS72652)</b> — the second sensor of the cluster.</span></a>
      <a class="xb-mk xb-pb" href="#tour-5" style="left:61.1%;top:49.9%" aria-label="5: third sensor">5<span class="xb-pop"><b>Sensor U3 (AS72653)</b> — the third sensor of the cluster. Keep the three apertures clear.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-6" style="left:21%;top:7.5%" aria-label="6: cable-tie holes">6<span class="xb-pop"><b>Cable-tie holes (CT1, CT2)</b> — two 2.5&nbsp;mm holes for strain relief of the cable.</span></a>
      <a class="xb-mk" href="#tour-7" style="left:50%;top:90.2%" aria-label="7: aperture marking">7<span class="xb-pop"><b>Aperture marking</b> — the silk APERTURES KEEP CLEAR reminds you not to cover the three sensor windows.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:31.8%;top:78.6%" aria-label="8: supply marking">8<span class="xb-pop"><b>Supply marking</b> — the silk 3V3 ONLY / NO 5V LOAD: the board takes only 3.3&nbsp;V.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host socket I (J1)</b> — the Gadgeteer I socket to the controller. Only contacts 1, 8, 9 and 10 are connected: 3.3&nbsp;V, I2C data, I2C clock and ground. <i>See the pinout.</i></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>I2C connector (J3)</b> — a four-contact Qwiic-style connector (ground, 3.3&nbsp;V, data, clock) on the sensor-side I2C branch, after the bus buffer.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Sensor U1 (AS72651)</b> — the first of the three sensors, which coordinates the cluster. Together the three give 18 channels.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Sensor U2 (AS72652)</b> — the second sensor of the cluster.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Sensor U3 (AS72653)</b> — the third sensor of the cluster. Keep the three apertures clear.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Cable-tie holes (CT1, CT2)</b> — two 2.5&nbsp;mm holes for strain relief of the cable.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Aperture marking</b> — the silk APERTURES KEEP CLEAR reminds you not to cover the three sensor windows.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Supply marking</b> — the silk 3V3 ONLY / NO 5V LOAD: the board takes only 3.3&nbsp;V.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1: host socket (I)

Contact 1 is at the lower left of the socket in the tour (the arrow marks the lower row), contact 2 directly above it, and odd contacts are in the lower row. The silk reads I / PIN1 above the socket.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Function</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Supply for all the parts on the board</td></tr>
    <tr><td>2 to 7</td><td>Not connected</td><td>Leave unused; there is no chain socket</td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">SDA</span></td><td>I2C data</td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">SCL</span></td><td>I2C clock</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Ground</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J3: I2C connector

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Function</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-gnd">GND</span></td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">SENSOR_SDA</span> sensor-side data, after the bus buffer</td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">SENSOR_SCL</span> sensor-side clock, after the bus buffer</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

The silk above the board lists the same four contacts. J3 joins the buffered sensor-side bus, not the host-side lines. The pads at the connector&rsquo;s sides are mechanical.

### J2 and the programming links

J2 is a Tag-Connect TC2050 style 10-contact service footprint for the flash and reset lines, with 3.3&nbsp;V on contact 1 and ground on contacts 2 and 8. It is not a normal peripheral inlet. JP1 to JP4 are 0&nbsp;&Omega; resistors that join the master sensor&rsquo;s SPI clock, data out, data in and chip select to the flash; remove them only to isolate the flash while programming. Their default is fitted; check them on your board.

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>The spectral analysis board.</span></div>
  <div class="xb-card"><b>Four host wires</b><span>3.3&nbsp;V, I2C data, I2C clock and ground to the controller.</span></div>
  <div class="xb-card"><b>An optical fixture</b><span>A stable light source, a holder at the set distance and dark and white references.</span></div>
  <div class="xb-card"><b>A driver</b><span>Sensor firmware setup, acquisition and calibration code. None is supplied.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Wiring">
  <svg viewBox="0 0 1000 472" role="img" aria-labelledby="xb-spectral-analysis-board-wire"><title id="xb-spectral-analysis-board-wire">Wiring: controller contact 1 to J1 contact 1; controller contact 8 to J1 contact 8; controller contact 9 to J1 contact 9; controller contact 10 to J1 contact 10.</title><image href="/images/extensions/spectral-analysis-board/spectral-analysis-board-diagram.png" x="341" y="14" width="318" height="230"/><circle cx="614" cy="93" r="17" fill="none" stroke="#ffcc33" stroke-width="3"/><rect x="595" y="112" width="38" height="19" rx="9" fill="#ffcc33" stroke="#ffcc33" stroke-width="1.5"/><text x="614" y="126" text-anchor="middle" font-size="13" font-weight="700" fill="#111">J1</text><text x="130" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Prime header GG/J38</text><text x="870" y="292" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">J1 on this board</text><rect x="30" y="304" width="200" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="130" y="375" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Smoothieboard</text><text x="130" y="395" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">V2 Prime</text><rect x="770" y="304" width="200" height="150" rx="8" fill="#2b2f35" stroke="#9aa2ad" stroke-width="1.5"/><path d="M230 334.0H770" fill="none" stroke="#d92d2d" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="334" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="334" r="5" fill="#d92d2d" stroke="#fff" stroke-width="1.5"/><text x="216" y="339" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">1</text><text x="784" y="339" text-anchor="start" font-size="14" fill="#e6ebf2">1  3.3 V</text><rect x="400" y="323" width="200" height="22" rx="11" fill="#d92d2d" stroke="#d92d2d" stroke-width="1.5"/><text x="500" y="339" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">1 to 1: 3.3 V</text><path d="M230 364.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="364" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="369" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">8</text><text x="784" y="369" text-anchor="start" font-size="14" fill="#e6ebf2">8  </text><rect x="400" y="353" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="369" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">8 to 8</text><path d="M230 394.0H770" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="394" r="5" fill="#2f7fe0" stroke="#fff" stroke-width="1.5"/><text x="216" y="399" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">9</text><text x="784" y="399" text-anchor="start" font-size="14" fill="#e6ebf2">9  </text><rect x="400" y="383" width="200" height="22" rx="11" fill="#2f7fe0" stroke="#2f7fe0" stroke-width="1.5"/><text x="500" y="399" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">9 to 9</text><path d="M230 424.0H770" fill="none" stroke="#8b949e" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="230" cy="424" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><circle cx="770" cy="424" r="5" fill="#8b949e" stroke="#fff" stroke-width="1.5"/><text x="216" y="429" text-anchor="end" font-size="14" font-weight="700" fill="#e6ebf2">10</text><text x="784" y="429" text-anchor="start" font-size="14" fill="#e6ebf2">10  GND</text><rect x="400" y="413" width="200" height="22" rx="11" fill="#8b949e" stroke="#8b949e" stroke-width="1.5"/><text x="500" y="429" text-anchor="middle" font-size="13" font-weight="700" fill="#111">10 to 10: GND</text></svg>
  </div>
  <figcaption>Do not connect 5 V. A driver is needed before a reading can be taken.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Wire four leads</h3>
    <p>With the power off, connect header GG (J38) contacts 1 (3.3&nbsp;V), 8 (I2C2 data), 9 (I2C2 clock) and 10 (ground) to J1 contacts 1, 8, 9 and 10. Do not connect 5&nbsp;V. Verify numbered continuity and a free bus first.</p>
    <p class="xb-expect">The rail positions on the Prime&rsquo;s physical headers need checking before powering; see the Prime header note in the electrical appendix.</p>
  </li>
  <li class="xb-step">
    <h3>Build the fixture</h3>
    <p>Hold a flat matte sample 15&nbsp;mm &plusmn; 1&nbsp;mm from the sensors and light it with an external source over at least 40&nbsp;mm. Keep the three apertures clear, and make the geometry repeatable between dark, white and sample readings.</p>
  </li>
  <li class="xb-step">
    <h3>Check the bus</h3>
    <p>Power on and look for a device at address 0x49 with a bus scan at 100&nbsp;kHz, if your firmware has one.</p>
  </li>
  <li class="xb-step">
    <h3>Provide a driver</h3>
    <p>Measure dark, reference and sample data and watch for saturation before any normalisation or classification. No reading can be taken without a driver.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Read the 18 channels</td><td>None</td><td>No driver is provided</td></tr>
    <tr><td>Classify a material</td><td>None</td><td>Not provided; a host and dataset task</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

SmoothieV2 ([source](https://github.com/Smoothieware/SmoothieV2/tree/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src)) has no spectral sensor driver, so there is no configuration for this board.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 170" role="img" aria-labelledby="xb-how-t">
    <title id="xb-how-t">The host I2C bus passes surge protection and a bus buffer to three spectral sensors that read light from an external illuminated sample.</title>
    <g font-size="13" font-weight="700" text-anchor="middle" fill="#e6ebf2">
      <rect x="20" y="55" width="140" height="60" rx="8" fill="#1f2226" stroke="#dfe4ee"/><text x="90" y="80">J1</text><text x="90" y="100" font-weight="400" fill="#a9b4c2">3.3 V, SDA, SCL</text>
      <rect x="210" y="55" width="150" height="60" rx="8" fill="#212936" stroke="#e0a877"/><text x="285" y="80">Protection</text><text x="285" y="100" font-weight="400" fill="#a9b4c2">TPD2E2U06</text>
      <rect x="410" y="55" width="150" height="60" rx="8" fill="#212936" stroke="#5fb3ff"/><text x="485" y="80">TCA9517A</text><text x="485" y="100" font-weight="400" fill="#a9b4c2">bus buffer</text>
      <rect x="610" y="55" width="190" height="60" rx="8" fill="#212936" stroke="#6fe08a"/><text x="705" y="80">U1, U2, U3</text><text x="705" y="100" font-weight="400" fill="#a9b4c2">18 channels</text>
      <rect x="850" y="55" width="130" height="60" rx="8" fill="#1f2226" stroke="#e0a877"/><text x="915" y="80">Sample</text><text x="915" y="100" font-weight="400" fill="#a9b4c2">external light</text>
    </g>
    <g stroke-width="3" fill="none" stroke="#a9b4c2"><path d="M160 85H210"/><path d="M360 85H410"/><path d="M560 85H610"/><path d="M800 85H850"/></g>
  </svg>
  </div>
  <figcaption>The host talks to the three sensors through a buffered I2C bus. The sample is lit from outside the board.</figcaption>
</figure>
{:/nomarkdown}

The master sensor U1 coordinates the other two, with a serial flash holding its supporting firmware. The host reads them over I2C through the TCA9517A buffer; J3 sits on the sensor side of that buffer. Raw or calibrated channel values need a defined sensor-firmware setup and acquisition procedure, which the board does not include.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>No device on the bus</td><td>3.3&nbsp;V on J1 contact 1, wiring of contacts 8 and 9, a free bus, and the address (0x49).</td></tr>
    <tr><td>Readings are dark or saturated</td><td>The external light source, the sample distance and the aperture cover.</td></tr>
    <tr><td>Results drift</td><td>Source spectrum and stability, and repeatable sample geometry.</td></tr>
    <tr><td>Programming the flash fails</td><td>JP1 to JP4 must be fitted for normal operation; check the service connector wiring.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

This board has no indicator lights and no test points in the design.

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/spectral-analysis-board/spectral-analysis-board-schematic.pdf">Schematic (PDF)</a></td><td>The complete circuit diagram.</td></tr>
    <tr><td><a href="/images/extensions/spectral-analysis-board/spectral-analysis-board-bom.csv">Parts list (CSV)</a></td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/spectral-analysis-board/spectral-analysis-board-diagram.png">Board drawing (SVG)</a></td><td>The top view used on this page, at full resolution</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side. The two cable-tie holes are 2.5&nbsp;mm.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-sp-mount-t">
  <title id="xb-sp-mount-t">Mounting drawing of the spectral analysis board, component side: outline 70 by 50 millimetres with 4 mounting holes and 2 cable-tie holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="242.0" y="78.0" width="476.0" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M242.0 56H718.0"/><path d="M242.0 50V62"/><path d="M718.0 50V62"/><path d="M744.0 78.0V418.0"/><path d="M738.0 78.0h12"/><path d="M738.0 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">70</text>
  <text x="756.0" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">50</text>
  <circle cx="242.0" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="230.0" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M184.0 104.0h30" fill="none"/><path d="M218.0 104.0l-8 -4v8z"/><path d="M184.0 104.0v30" fill="none"/><path d="M184.0 138.0l-4 -8h8z"/></g>
  <text x="222.0" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="180.0" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="276.0" cy="112.0" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M261.1 112.0h29.8M276.0 97.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="265.1" y="142.9" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.00</text>
  <circle cx="684.0" cy="112.0" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M669.1 112.0h29.8M684.0 97.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="694.9" y="142.9" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  65.00, 5.00</text>
  <circle cx="276.0" cy="384.0" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M261.1 384.0h29.8M276.0 369.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="265.1" y="363.1" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 45.00</text>
  <circle cx="684.0" cy="384.0" r="10.9" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M669.1 384.0h29.8M684.0 369.1v29.8" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="694.9" y="363.1" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  65.00, 45.00</text>
  <circle cx="316.8" cy="98.4" r="8.5" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <circle cx="350.8" cy="98.4" r="8.5" fill="#141920" stroke="#a9b4c2" stroke-width="1.5"/>
  <text x="333.8" y="124.9" text-anchor="middle" font-size="12" fill="#a9b4c2">cable tie</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 70 × 50&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>65.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>5.00</td><td>45.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>65.00</td><td>45.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>–</td><td>11.00</td><td>3.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
    <tr><td>–</td><td>16.00</td><td>3.00</td><td>2.5&nbsp;mm, not plated</td><td>Cable tie</td></tr>
  </tbody>
</table></div>

{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

The last column gives the basis for each figure.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Supply</td><td>J1 contact 1</td><td>—</td><td>3.3 V</td><td>—</td><td>3.3&nbsp;V only; 5&nbsp;V must not be connected</td></tr>
    <tr><td>Supply current</td><td>Board</td><td>—</td><td>—</td><td>50 mA</td><td>Board allocation</td></tr>
    <tr><td>I2C address</td><td>Sensor cluster</td><td>—</td><td>0x49</td><td>—</td><td>Sensor bus address</td></tr>
    <tr><td>I2C speed</td><td>Bus</td><td>—</td><td>100 kHz</td><td>—</td><td>Initial speed</td></tr>
    <tr><td>Pull-ups</td><td>Sensor-side bus</td><td>—</td><td>4.7 k&Omega; and 10 k&Omega;</td><td>—</td><td>Parts list values; assignment per net not stated here</td></tr>
    <tr><td>Sample distance</td><td>Optics</td><td>14 mm</td><td>15 mm</td><td>16 mm</td><td>Fixture distance of 15 &plusmn; 1&nbsp;mm</td></tr>
    <tr><td>Illuminated diameter</td><td>Sample</td><td>40 mm</td><td>—</td><td>—</td><td>Fixture</td></tr>
    <tr><td>Light source spectrum and stability</td><td>External</td><td>—</td><td>—</td><td>—</td><td>Not part of the board</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Prime header GG (J38)

Header GG (J38) carries the four leads: contact 1 is the limited 3.3&nbsp;V, contacts 8 and 9 are the I2C2 data and clock, and contact 10 is ground. Check the rail positions on the Prime&rsquo;s headers by numbered continuity with the power removed.

See all boards on the [extension boards](/extension-boards) page.
