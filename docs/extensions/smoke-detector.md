---
layout: default
title: "SCD41 environmental sensor"
description: "A CO2, temperature and humidity sensor board (Sensirion SCD41) on I2C with a local 3.3 V regulator and a chain socket. Despite its folder name it is not a smoke, carbon monoxide or fire alarm."
permalink: /extensions/smoke-detector
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Sensors</p>
    <h1 id="smoke-detector">SCD41 environmental sensor</h1>
    <p class="xb-lead">A Sensirion SCD41 on a board: it reports carbon dioxide, temperature and relative humidity over I2C, with its own 3.3&nbsp;V regulator and a chain socket. The project folder is still called smoke-detector, but this board does not detect smoke or carbon monoxide and is not a fire alarm.</p>
    <p class="xb-badge">Design candidate · revision v18 · not yet built or tested</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/smoke-detector/smoke-detector-diagram.png" alt="Top view of the CO2 sensor board: two sockets along the top, link pads and logic parts in the middle, the square sensor at the lower right and a small connector at the lower left.">
    <figcaption>Top view, drawn from the board&rsquo;s design files (revision v18). This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>SCD41</b><span>CO2, temperature and humidity sensor</span></div>
  <div class="xb-stat"><b>I2C 0x62</b><span>the address printed on the board</span></div>
  <div class="xb-stat"><b>3.3 V local</b><span>from the 5&nbsp;V host rail through a TLV75533</span></div>
  <div class="xb-stat"><b>2 lights</b><span>sensor power, and a host-driven alarm</span></div>
  <div class="xb-stat"><b>No driver</b><span>no SCD41 code in the pinned source</span></div>
  <div class="xb-stat"><b>39 × 38</b><span>millimetres, two M3 holes</span></div>
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
  This is a design candidate that has not been built or tested, and it is not ready to energize. It is not a smoke, carbon monoxide or fire alarm and has no certification; the board itself is marked NON-CERTIFIED and NOT A SMOKE, CO OR FIRE ALARM. Do not rely on it for protection of people or property. Warm-up, calibration, sensor supply peaks, enclosure ventilation and the host rail budget are not established.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>Experimental environmental telemetry: CO2 concentration, temperature and relative humidity</td></tr>
    <tr><td>Sensor</td><td>Sensirion SCD41 (U1) on I2C, address 0x62 as printed on the board</td></tr>
    <tr><td>Sensor supply</td><td>Separate from the host 3.3&nbsp;V rail: the host 5&nbsp;V on J1 contact 2 passes link JP_5V to a TLV75533 regulator whose output feeds the sensor-local rail 3V3S</td></tr>
    <tr><td>I2C pull-ups</td><td>10&nbsp;k&Omega; to the sensor-local rail, enabled by the PU_EN link JP_PU (bridged as delivered)</td></tr>
    <tr><td>Alarm light</td><td>The red D2 is driven by the host on J1 contact 3 (through 680&nbsp;&Omega;, with a 100&nbsp;k&Omega; pull-down). It is not an output of the sensor.</td></tr>
    <tr><td>Protection</td><td>TPD4E1U06 surge-protection array on the data, clock and alarm-command lines</td></tr>
    <tr><td>Sockets</td><td>Two 10-contact Gadgeteer I sockets (Samtec SHF-105, 1.27&nbsp;mm): input and chain. A four-contact 1&nbsp;mm I2C connector J3.</td></tr>
    <tr><td>Test points</td><td>Eight: 5&nbsp;V, ground (two), data, clock, alarm input, host 3.3&nbsp;V and sensor 3.3&nbsp;V (not drawn in the top view)</td></tr>
    <tr><td>Size</td><td>39 &times; 38&nbsp;mm with two M3 mounting holes</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> (not yet usable without a driver)</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side. The mounting holes, test points and fiducials are not marked on the drawing.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/smoke-detector/smoke-detector-diagram.png" alt="Top view of the CO2 sensor board with eleven numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:26.8%;top:12.2%" aria-label="1: input socket">1<span class="xb-pop"><b>Input socket I IN (J1)</b> — the Gadgeteer socket to the controller. Contacts 8 and 9 are the I2C data and clock. <i>See the pinout.</i></span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:75%;top:12.2%" aria-label="2: chain socket">2<span class="xb-pop"><b>Chain socket I CHAIN (J2)</b> — a second socket that passes the host lines on to another board through the solder links P3 to P9.</span></a>
      <a class="xb-mk xb-pl" href="#tour-3" style="left:15%;top:77.5%" aria-label="3: Qwiic connector">3<span class="xb-pop"><b>I2C connector (J3)</b> — a four-contact 1&nbsp;mm connector (ground, 3.3&nbsp;V, data, clock) for a Qwiic-style cable. It does not power the sensor.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:51.1%;top:71.2%" aria-label="4: sensor">4<span class="xb-pop"><b>CO2 sensor (U1)</b> — a Sensirion SCD41 that measures carbon dioxide, temperature and relative humidity over I2C. The silk gives the address 0x62.</span></a>
      <a class="xb-mk xb-pl" href="#tour-5" style="left:15.9%;top:66.3%" aria-label="5: regulator">5<span class="xb-pop"><b>Sensor regulator (U2)</b> — a TLV75533 3.3&nbsp;V regulator that makes the sensor-local rail 3V3S from the 5&nbsp;V on contact 2.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:30%;top:25.9%" aria-label="6: surge protection">6<span class="xb-pop"><b>Surge protection (U3)</b> — a TPD4E1U06 array on the data, clock and alarm-command lines and chain contact 6.</span></a>
      <a class="xb-mk xb-pb" href="#tour-7" style="left:28.4%;top:35.7%" aria-label="7: pull-up resistors">7<span class="xb-pop"><b>I2C pull-ups (R_PU1, R_PU2)</b> — two 10&nbsp;k&Omega; resistors from data and clock to the sensor-local 3.3&nbsp;V, enabled by the PU_EN link JP_PU.</span></a>
      <a class="xb-mk xb-pb" href="#tour-8" style="left:38.2%;top:34.8%" aria-label="8: chain links">8<span class="xb-pop"><b>Chain links (JP3 to JP9)</b> — solder links, labelled P3 to P9 on the silk, that join each host contact to the chain socket. Only P3 is open as delivered.</span></a>
      <a class="xb-mk xb-pr" href="#tour-9" style="left:81.5%;top:68.7%" aria-label="9: power light">9<span class="xb-pop"><b>Power light (D1)</b> — a green light on the sensor-local 3.3&nbsp;V rail. Cut JP11 to disable it.</span></a>
      <a class="xb-mk xb-pr" href="#tour-10" style="left:81.5%;top:76.7%" aria-label="10: alarm light">10<span class="xb-pop"><b>Alarm light (D2)</b> — a red light that the host drives through contact 3. It is a host indicator, not a sensor output. Cut JP10 to disable it.</span></a>
      <a class="xb-mk xb-pl" href="#tour-11" style="left:7.1%;top:65.9%" aria-label="11: 5 V link">11<span class="xb-pop"><b>5&nbsp;V link (JP_5V)</b> — a solder link between the host 5&nbsp;V and the regulator input, bridged as delivered.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Input socket I IN (J1)</b> — the Gadgeteer socket to the controller. Contacts 8 and 9 are the I2C data and clock. <i>See the pinout.</i></div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket I CHAIN (J2)</b> — a second socket that passes the host lines on to another board through the solder links P3 to P9.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>I2C connector (J3)</b> — a four-contact 1&nbsp;mm connector (ground, 3.3&nbsp;V, data, clock) for a Qwiic-style cable. It does not power the sensor.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>CO2 sensor (U1)</b> — a Sensirion SCD41 that measures carbon dioxide, temperature and relative humidity over I2C. The silk gives the address 0x62.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Sensor regulator (U2)</b> — a TLV75533 3.3&nbsp;V regulator that makes the sensor-local rail 3V3S from the 5&nbsp;V on contact 2.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Surge protection (U3)</b> — a TPD4E1U06 array on the data, clock and alarm-command lines and chain contact 6.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>I2C pull-ups (R_PU1, R_PU2)</b> — two 10&nbsp;k&Omega; resistors from data and clock to the sensor-local 3.3&nbsp;V, enabled by the PU_EN link JP_PU.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Chain links (JP3 to JP9)</b> — solder links, labelled P3 to P9 on the silk, that join each host contact to the chain socket. Only P3 is open as delivered.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>Power light (D1)</b> — a green light on the sensor-local 3.3&nbsp;V rail. Cut JP11 to disable it.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Alarm light (D2)</b> — a red light that the host drives through contact 3. It is a host indicator, not a sensor output. Cut JP10 to disable it.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>5&nbsp;V link (JP_5V)</b> — a solder link between the host 5&nbsp;V and the regulator input, bridged as delivered.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

### J1: input socket (I IN)

Contact 1 is the white dot at the lower left of the socket in the tour (the arrow marks the lower row), contact 2 directly above it, and odd contacts are in the lower row.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Function</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Passed to the chain socket and the I2C connector; the sensor does not use it</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Sensor supply, through link JP_5V and the regulator</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">ALARM_IN</span></td><td>Host command for the red light D2; forwarded to the chain only if JP3 is closed</td></tr>
    <tr><td>4 to 7</td><td><span class="xb-pill xb-p-sig">P4 to P7</span></td><td>Not used here; passed to the chain through JP4 to JP7</td></tr>
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
    <tr><td>2</td><td><span class="xb-pill xb-p-3v3">3.3 V</span> host rail, not the sensor-local rail</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">SDA</span></td></tr>
    <tr><td>4</td><td><span class="xb-pill xb-p-sig">SCL</span></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Powering J3 alone does not power the sensor, because the sensor supply comes from the 5&nbsp;V path. The pads at the connector&rsquo;s sides are ground.

### J2: chain socket and solder links

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>Joins</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>JP3 (P3)</td><td>ALARM_IN to chain contact 3</td><td>Open</td></tr>
    <tr><td>JP4 to JP7</td><td>Contacts 4 to 7 to the same chain contacts</td><td>Bridged</td></tr>
    <tr><td>JP8, JP9</td><td>SDA and SCL to chain contacts 8 and 9</td><td>Bridged</td></tr>
    <tr><td>JP_5V</td><td>Host 5&nbsp;V to the regulator input</td><td>Bridged</td></tr>
    <tr><td>JP_PU (PU_EN)</td><td>Sensor-local rail to the I2C pull-ups</td><td>Bridged</td></tr>
    <tr><td>JP10</td><td>Cut to disable the red alarm light D2</td><td>Bridged</td></tr>
    <tr><td>JP11</td><td>Cut to disable the green power light D1</td><td>Bridged</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

A second board on the chain sees the same SDA and SCL, and the pull-ups here add to any it has. Confirm the delivered state on the assembled board.

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>This board</b><span>The design is not yet built.</span></div>
  <div class="xb-card"><b>Four host wires</b><span>5&nbsp;V, I2C data, I2C clock and ground to the controller.</span></div>
  <div class="xb-card"><b>A driver</b><span>Code that talks to the SCD41 and decides what the numbers mean. None is supplied.</span></div>
  <div class="xb-card"><b>A real alarm</b><span>If you need smoke or carbon monoxide detection, use a certified detector.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Check the rails</h3>
    <p>Establish the 5&nbsp;V budget of the controller&rsquo;s limited rail and the sensor&rsquo;s supply peaks before connecting the board. The 3.3&nbsp;V on J1 contact 1 is not needed.</p>
  </li>
  <li class="xb-step">
    <h3>Wire four leads</h3>
    <p>With the power off, connect header GG (J38) contacts 2 (5&nbsp;V), 8 (I2C2 data), 9 (I2C2 clock) and 10 (ground) to J1 contacts 2, 8, 9 and 10. Leave the other contacts unconnected. Check numbered continuity and the connector orientation first.</p>
    <p class="xb-expect">The rail positions on the Prime&rsquo;s physical headers need checking before powering; see the Prime header note in the electrical appendix.</p>
  </li>
  <li class="xb-step">
    <h3>Check the links and the rail</h3>
    <p>Confirm JP_5V and JP_PU are bridged, then power on and measure the sensor rail at TP7. The green light should light.</p>
  </li>
  <li class="xb-step">
    <h3>Wait for a driver</h3>
    <p>The sensor needs warm-up, calibration and a defined policy for stale or failed readings. Until a driver exists, no reading can be taken.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Read CO2, temperature, humidity</td><td>None</td><td>No driver exists; no example is given</td></tr>
    <tr><td>Light the red alarm light from a threshold</td><td>None</td><td>No matching code; the light follows contact 3</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

There is no configuration to give. The pinned SmoothieV2 source (revision [2a21c0108b1d095ecd8b2b9358e94055f053c003](https://github.com/Smoothieware/SmoothieV2/tree/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src)) contains no SCD41 driver, and generic I2C hardware alone gives neither CO2 values nor a threshold policy. A configuration here would be invented.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 170" role="img" aria-labelledby="xb-how-t">
    <title id="xb-how-t">The host 5 volt line passes a link and a regulator to the sensor; the sensor talks to the host over data and clock lines with pull-ups to the local rail.</title>
    <g font-size="13" font-weight="700" text-anchor="middle" fill="#e6ebf2">
      <rect x="20" y="55" width="150" height="60" rx="8" fill="#1f2226" stroke="#dfe4ee"/><text x="95" y="80">J1</text><text x="95" y="100" font-weight="400" fill="#a9b4c2">5 V, SDA, SCL</text>
      <rect x="230" y="55" width="150" height="60" rx="8" fill="#212936" stroke="#e0a877"/><text x="305" y="80">JP_5V, U2</text><text x="305" y="100" font-weight="400" fill="#a9b4c2">5 V to 3V3S</text>
      <rect x="440" y="55" width="170" height="60" rx="8" fill="#212936" stroke="#6fe08a"/><text x="525" y="80">SCD41</text><text x="525" y="100" font-weight="400" fill="#a9b4c2">on 3V3S</text>
      <rect x="670" y="55" width="150" height="60" rx="8" fill="#212936" stroke="#5fb3ff"/><text x="745" y="80">Pull-ups</text><text x="745" y="100" font-weight="400" fill="#a9b4c2">10 k to 3V3S</text>
      <rect x="870" y="55" width="110" height="60" rx="8" fill="#1f2226" stroke="#dfe4ee"/><text x="925" y="90">J2 chain</text>
    </g>
    <g stroke-width="3" fill="none" stroke="#a9b4c2"><path d="M170 85H230"/><path d="M380 85H440"/><path d="M610 85H670"/><path d="M820 85H870"/></g>
  </svg>
  </div>
  <figcaption>The sensor runs from its own regulated rail; the data lines go to the host and on to the chain.</figcaption>
</figure>
{:/nomarkdown}

The SCD41 is read over I2C. Because the I2C lines are pulled up to the sensor-local rail, the pull-up voltage follows the sensor supply; confirm that the bus voltage suits the host. The red light is only a host indicator: contact 3 drives it, and the sensor has no alarm output. The host has to read the sensor and apply any threshold, and nothing here is an independent alarm.

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-green"></span>POWER 3V3S (D1)</th><th><span class="xb-led xb-led-red"></span>ALARM, host (D2)</th></tr></thead>
  <tbody>
    <tr><td>Where</td><td>Lower right, upper light</td><td>Lower right, lower light</td></tr>
    <tr><td>Lit means</td><td>The sensor-local 3.3&nbsp;V rail is present</td><td>The host is driving contact 3 high</td></tr>
    <tr><td>Disable it</td><td>Cut JP11</td><td>Cut JP10</td></tr>
  </tbody>
</table></div>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>Green light dark</td><td>5&nbsp;V on J1 contact 2, link JP_5V bridged, and TP7 for the local rail.</td></tr>
    <tr><td>No answer on I2C</td><td>Contacts 8 and 9 wiring, the bus selected, and JP_PU for the pull-ups; address 0x62.</td></tr>
    <tr><td>Powered only through J3</td><td>The sensor stays unpowered: J3 carries the host 3.3&nbsp;V, not the sensor supply.</td></tr>
    <tr><td>Chain board conflicts</td><td>Both boards pull up the bus; or open JP8 and JP9 to isolate the chain.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>Revision</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/smoke-detector/smoke-detector-schematic.pdf">Schematic (PDF)</a></td><td>v18</td><td>The complete circuit diagram. Its title block reads v11.</td></tr>
    <tr><td><a href="/images/extensions/smoke-detector/smoke-detector-bom.csv">Parts list (CSV)</a></td><td>v18</td><td>Every component with its value and footprint</td></tr>
    <tr><td><a href="/images/extensions/smoke-detector/smoke-detector-diagram.png">Board drawing (SVG)</a></td><td>v18</td><td>The top view used on this page, at full resolution</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-sd-mount-t">
  <title id="xb-sd-mount-t">Mounting drawing of the SCD41 environmental sensor board, component side: outline 39 by 38 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="305.5" y="78.0" width="348.9" height="340.0" rx="8.9" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M305.5 56H654.5"/><path d="M305.5 50V62"/><path d="M654.5 50V62"/><path d="M680.5 78.0V418.0"/><path d="M674.5 78.0h12"/><path d="M674.5 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">39</text>
  <text x="692.5" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">38</text>
  <circle cx="305.5" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="293.5" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M247.5 104.0h30" fill="none"/><path d="M281.5 104.0l-8 -4v8z"/><path d="M247.5 104.0v30" fill="none"/><path d="M247.5 138.0l-4 -8h8z"/></g>
  <text x="285.5" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="243.5" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="395.0" cy="256.9" r="14.3" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M376.7 256.9h36.6M395.0 238.6v36.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="380.7" y="232.6" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  10.00, 20.00</text>
  <circle cx="573.9" cy="256.9" r="14.3" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M555.6 256.9h36.6M573.9 238.6v36.6" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="588.3" y="232.6" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  30.00, 20.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 39 × 38&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>10.00</td><td>20.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>30.00</td><td>20.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>

{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Every figure is a design value or a value from the parts list, as the last column says. None is a measurement on a built board. **Open** means not established.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Sensor supply input</td><td>J1 contact 2</td><td>Open</td><td>5 V</td><td>Open</td><td>Host allowance and sensor peak current Open</td></tr>
    <tr><td>Sensor-local rail</td><td>3V3S, TP7</td><td>—</td><td>3.3 V</td><td>—</td><td>Output of the TLV75533 regulator; not measured</td></tr>
    <tr><td>I2C pull-ups</td><td>SDA, SCL</td><td>—</td><td>10 k&Omega;</td><td>—</td><td>Parts list, to the sensor-local rail</td></tr>
    <tr><td>Power light resistor</td><td>D1</td><td>—</td><td>470 &Omega;</td><td>—</td><td>Parts list</td></tr>
    <tr><td>Alarm light resistor</td><td>D2</td><td>—</td><td>680 &Omega;</td><td>—</td><td>Parts list; pull-down 100&nbsp;k&Omega;</td></tr>
    <tr><td>Warm-up, calibration, accuracy</td><td>Whole board</td><td>Open</td><td>Open</td><td>Open</td><td>Not established</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Prime header GG (J38)

The design notes name header GG (J38) for the four leads: contact 2 is 5&nbsp;V, contacts 8 and 9 are the I2C2 data and clock, and contact 10 is ground. A discrepancy in the rail positions on the Prime&rsquo;s physical connector has been noted for the neighbouring G_F (J37) header; verify numbered continuity with the power removed.

See all boards on the [extension boards](/extension-boards) page.
