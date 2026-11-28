---
layout: default
title: "VL53L1X distance sensor"
description: "An ST VL53L1X time-of-flight distance sensor on a Gadgeteer I2C socket with Qwiic: pinout, wiring, two sensors on one port, solder links, limits and files."
permalink: /extensions/vl53l1x-distance-sensor
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Sensors and inputs</p>
    <h1 id="vl53l1x-distance-sensor">VL53L1X distance sensor</h1>
    <p class="xb-lead">A laser distance sensor board: it times invisible light to a surface and reports the distance, up to 4&nbsp;m in the dark. It connects to an I2C socket or a Qwiic cable. Reading it needs your own driver.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#get-started">Get started</a>
      <a class="xb-btn" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#configuration">Configuration</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/vl53l1x-distance-sensor/vl53l1x-distance-sensor-diagram.png" alt="Top view of the sensor board: two ten-contact sockets standing side by side at the top, the small sensor module in the middle, two lights on the right and a header and Qwiic connector at the bottom.">
    <figcaption>Top view, drawn from the board&rsquo;s design files. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>
<div class="xb-stats">
  <div class="xb-stat"><b>4 m</b><span>maximum range, dark, data sheet</span></div>
  <div class="xb-stat"><b>27&deg;</b><span>field of view, diagonal</span></div>
  <div class="xb-stat"><b>0x29</b><span>I2C address at power-up</span></div>
  <div class="xb-stat"><b>3.3 V</b><span>supply and logic only</span></div>
  <div class="xb-stat"><b>40 mA</b><span>peak current</span></div>
  <div class="xb-stat"><b>30 &times; 40</b><span>millimetres, four M3 holes</span></div>
</div>
<nav class="xb-nav" aria-label="On this page">
  <a href="#specs">Tech specs</a>
  <a href="#tour">Board tour</a>
  <a href="#pinout">Pinout</a>
  <a href="#what-you-need">What you need</a>
  <a href="#get-started">Get started</a>
  <a href="#configuration">Configuration</a>
  <a href="#how-it-works">How it works</a>
  <a href="#options">Solder links</a>
  <a href="#chaining">Chaining</a>
  <a href="#troubleshooting">Troubleshooting</a>
  <a href="#downloads">Downloads</a>
  <a href="#mounting">Mounting</a>
  <a href="#electrical">Electrical</a>
  <a href="#simulation">Simulation</a>
  <a href="#datasheets">Datasheets</a>
</nav>
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  This is not a safety device. Never use it as a guard, interlock or person detector.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  Smoothieware does not support this board yet. If you have a use for it, email
  <a href="mailto:wolf.arthur@gmail.com">wolf.arthur@gmail.com</a>: we will implement it, or help you implement it.
</sl-alert>
{:/nomarkdown}

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  <tbody>
    <tr><td>Purpose</td><td>Measuring the distance to a surface without touching it</td></tr>
    <tr><td>Sensor</td><td>ST <a href="/images/extensions/vl53l1x-distance-sensor/datasheets/vl53l1x.pdf">VL53L1X</a> time-of-flight module, 940&nbsp;nm Class 1 laser</td></tr>
    <tr><td>Range</td><td>From 4&nbsp;cm; up to 4&nbsp;m on a white target in the dark, about 73&nbsp;cm in strong ambient infrared light (data sheet, long-range mode). Quoted ranging error &plusmn;20 to &plusmn;25&nbsp;mm</td></tr>
    <tr><td>Field of view</td><td>27&deg; diagonal, typical; software can narrow it to 15&deg;</td></tr>
    <tr><td>Rate</td><td>Up to 50 readings per second</td></tr>
    <tr><td>Interface</td><td>I2C up to 400&nbsp;kHz, address 0x29; interrupt output and shutdown input</td></tr>
    <tr><td>Supply</td><td>3.3&nbsp;V only, 40&nbsp;mA peak</td></tr>
    <tr><td>Pull-ups</td><td>3.3&nbsp;k&Omega; on SDA and SCL, removable</td></tr>
    <tr><td>Connectors</td><td>Two Gadgeteer type I sockets (Samtec SHF-105, 1.27&nbsp;mm), Qwiic, and holes for a 1&times;4 2.54&nbsp;mm header</td></tr>
    <tr><td>Size</td><td>30 &times; 40&nbsp;mm, four M3 holes on a 20 &times; 30&nbsp;mm rectangle</td></tr>
    <tr><td>Works with</td><td><a href="/smoothieboard-v2-prime">Smoothieboard V2 Prime</a> header GG electrically; no firmware driver</td></tr>
    <tr><td>Licence</td><td>Open hardware, CERN-OHL-S-2.0</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Every figure with its basis is in the [electrical specifications](#electrical) appendix; hole positions are in the [mounting dimensions](#mounting) appendix.

## Board tour {#tour}

The numbers on the drawing match the list below it. The board is shown from the component side.

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view of the board">
    <div class="xb-tour-stage">
      <img src="/images/extensions/vl53l1x-distance-sensor/vl53l1x-distance-sensor-diagram.png" alt="Top view of the distance sensor board with 11 numbered markers that are explained in the list below.">
      <a class="xb-mk xb-pb" href="#tour-1" style="left:40.2%;top:20.0%" aria-label="1: input socket i in">1<span class="xb-pop"><b>Input socket I IN</b> — The ribbon cable from the controller goes here.</span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:59.8%;top:20.0%" aria-label="2: chain socket chain">2<span class="xb-pop"><b>Chain socket CHAIN</b> — Passes the bus on to the next board.</span></a>
      <a class="xb-mk" href="#tour-3" style="left:50.0%;top:58.8%" aria-label="3: distance sensor">3<span class="xb-pop"><b>Distance sensor</b> — The VL53L1X module. Remove the protective film on top, and keep everything out of its view.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:36.3%;top:58.4%" aria-label="4: supply capacitors">4<span class="xb-pop"><b>Supply capacitors</b> — Smooth the supply right next to the module.</span></a>
      <a class="xb-mk" href="#tour-5" style="left:63.7%;top:58.4%" aria-label="5: interrupt and shutdown resistors">5<span class="xb-pop"><b>Interrupt and shutdown resistors</b> — Hold both lines high when nothing drives them.</span></a>
      <a class="xb-mk xb-pl" href="#tour-6" style="left:22.5%;top:56.0%" aria-label="6: bus pull-ups">6<span class="xb-pop"><b>Bus pull-ups</b> — 3.3&nbsp;k&Omega;; disconnect them with the two links underneath.</span></a>
      <a class="xb-mk xb-pb xb-pr" href="#tour-7" style="left:85.6%;top:42.9%" aria-label="7: power light pwr">7<span class="xb-pop"><b>Power light PWR</b> — Green while 3.3&nbsp;V is present.</span></a>
      <a class="xb-mk xb-pr" href="#tour-8" style="left:85.6%;top:57.1%" aria-label="8: interrupt light int">8<span class="xb-pop"><b>Interrupt light INT</b> — Blue while the sensor pulls its interrupt line low.</span></a>
      <a class="xb-mk" href="#tour-9" style="left:38.1%;top:73.8%" aria-label="9: 2.54 mm header">9<span class="xb-pop"><b>2.54 mm header</b> — Ground, 3.3&nbsp;V, SDA, SCL, for jumper wires. Solder it only if you want it.</span></a>
      <a class="xb-mk" href="#tour-10" style="left:50.0%;top:86.2%" aria-label="10: qwiic connector">10<span class="xb-pop"><b>Qwiic connector</b> — The same bus on a four-way cable.</span></a>
      <a class="xb-mk xb-pb xb-pl" href="#tour-11" style="left:18.8%;top:14.3%" aria-label="11: mounting hole">11<span class="xb-pop"><b>Mounting hole</b> — One of four M3 holes.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Input socket I IN</b> — The ribbon cable from the controller goes here.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain socket CHAIN</b> — Passes the bus on to the next board.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Distance sensor</b> — The <a href="/images/extensions/vl53l1x-distance-sensor/datasheets/vl53l1x.pdf">VL53L1X</a> module. Remove the protective film on top, and keep everything out of its view.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Supply capacitors</b> — Smooth the supply right next to the module.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Interrupt and shutdown resistors</b> — Hold both lines high when nothing drives them.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Bus pull-ups</b> — 3.3&nbsp;k&Omega;; disconnect them with the two links underneath.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Power light PWR</b> — Green while 3.3&nbsp;V is present.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Interrupt light INT</b> — Blue while the sensor pulls its interrupt line low.</div></li>
    <li id="tour-9"><span class="xb-n">9</span><div><b>2.54 mm header</b> — Ground, 3.3&nbsp;V, SDA, SCL, for jumper wires. Solder it only if you want it.</div></li>
    <li id="tour-10"><span class="xb-n">10</span><div><b>Qwiic connector</b> — The same bus on a four-way cable.</div></li>
    <li id="tour-11"><span class="xb-n">11</span><div><b>Mounting hole</b> — One of four M3 holes.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

Everything on this board is 3.3&nbsp;V. Check contact numbering with the power removed.

### J1: input socket (I IN)

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>Use</th><th>Prime header GG</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><span class="xb-pill xb-p-3v3">3.3 V</span></td><td>Board supply</td><td>3.3 V</td></tr>
    <tr><td>2</td><td><span class="xb-pill xb-p-5v">5 V</span></td><td>Not used, passed to the chain</td><td>5 V</td></tr>
    <tr><td>3</td><td><span class="xb-pill xb-p-sig">INT</span></td><td>Interrupt from the sensor</td><td>PH2</td></tr>
    <tr><td>4, 5, 7</td><td>Passed through</td><td>Not used</td><td>PH4, PC0, PH3</td></tr>
    <tr><td>6</td><td><span class="xb-pill xb-p-sig">XSHUT</span></td><td>Low holds the sensor in shutdown</td><td>PF15</td></tr>
    <tr><td>8</td><td><span class="xb-pill xb-p-sig">SDA</span></td><td>I2C data</td><td>PF0 (I2C2_SDA)</td></tr>
    <tr><td>9</td><td><span class="xb-pill xb-p-sig">SCL</span></td><td>I2C clock</td><td>PF1 (I2C2_SCL)</td></tr>
    <tr><td>10</td><td><span class="xb-pill xb-p-gnd">GND</span></td><td>Ground</td><td>GND</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### J3 Qwiic and J4 header

Both carry the same four signals.

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Pin</th><th>Signal</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>GND</td></tr>
    <tr><td>2</td><td>3.3 V</td></tr>
    <tr><td>3</td><td>SDA</td></tr>
    <tr><td>4</td><td>SCL</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>An I2C port</b><span>Prime header GG, or any 3.3&nbsp;V I2C host.</span></div>
  <div class="xb-card"><b>A cable</b><span>Gadgeteer ten-way ribbon, Qwiic, or jumper wires on the header.</span></div>
  <div class="xb-card"><b>Clear view</b><span>Nothing in front of the sensor but the target. A cover window must suit infrared light.</span></div>
  <div class="xb-card"><b>Your own driver</b><span>None is supplied.</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Minimum wiring">
  <svg viewBox="0 0 1200 500" role="img" aria-labelledby="xb-tof-wire"><title id="xb-tof-wire">Wiring: one ten-way ribbon cable from Smoothieboard V2 Prime socket G_G to the sensor board socket marked I IN.</title><image href="/images/extensions/differential-i2c-signal-extender/smoothieboard-v2-prime.webp" x="10" y="10" width="440" height="440"/><text x="230" y="480" text-anchor="middle" font-size="20" font-weight="700" fill="#e6ebf2" stroke="#0d0f12" stroke-width="4" paint-order="stroke">Smoothieboard V2 Prime, socket G_G</text><image href="/images/extensions/vl53l1x-distance-sensor/vl53l1x-distance-sensor-diagram.png" x="605" y="100" width="270.9" height="360.9"/><path d="M220 283 H470 V25 H712.1 V167.1" fill="none" stroke="#0d0f12" stroke-width="16"/><path d="M220 283 H470 V25 H712.1 V167.1" fill="none" stroke="#9aa4b2" stroke-width="12"/><circle cx="220" cy="283" r="6" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><circle cx="712.1" cy="167.1" r="6" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><text x="740" y="490" text-anchor="middle" font-size="20" font-weight="700" fill="#e6ebf2" stroke="#0d0f12" stroke-width="4" paint-order="stroke">Distance sensor board</text><text x="594" y="65" text-anchor="middle" font-size="17" font-weight="700" fill="#9fd0ff" stroke="#0d0f12" stroke-width="4" paint-order="stroke">Ten-way ribbon, G_G to I IN</text></svg>
  </div>
  <figcaption>One ribbon cable carries power, I2C, the interrupt and the shutdown line. Check pin 1 at both ends before power on.</figcaption>
</figure>
{:/nomarkdown}

{::nomarkdown}
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Remove the film</h3>
    <p>Peel the protective film off the sensor module.</p>
  </li>
  <li class="xb-step">
    <h3>Mount the board</h3>
    <p>Four M3 screws, sensor facing the target.</p>
  </li>
  <li class="xb-step">
    <h3>Connect with the power off</h3>
    <p>Ribbon cable from header GG to I IN.</p>
    <p class="xb-expect">After power on, the green PWR light is on.</p>
  </li>
  <li class="xb-step">
    <h3>Find the device</h3>
    <p>At I2C address 0x29, read one byte from register address 0x010F (the register address is two bytes long).</p>
    <p class="xb-expect">It reads 0xEA, the model ID.</p>
  </li>
  <li class="xb-step">
    <h3>Range</h3>
    <p>Start ranging with ST&rsquo;s driver for the <a href="/images/extensions/vl53l1x-distance-sensor/datasheets/vl53l1x.pdf">VL53L1X</a> or your own, then move a sheet of paper in front of it.</p>
    <p class="xb-expect">The distance follows the paper.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>You want</th><th>Module</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td>Read a distance</td><td>None</td><td>No Smoothieware driver for this sensor</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

There is nothing to add to `config.ini`. The wiring and driver settings for each use are in the next section.

## Uses {#uses}

### 1. Two sensors on one port {#use-two}

Both sensors answer at address 0x29 after power-up. The board lets the controller hold one of them in shutdown while it gives the other a new address.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Two sensors">
  <svg viewBox="0 0 1200 500" role="img" aria-labelledby="xb-tof-two"><title id="xb-tof-two">Two sensor boards: controller socket G_G to I IN of the first board, and CHAIN of the first board to I IN of the second.</title><image href="/images/extensions/differential-i2c-signal-extender/smoothieboard-v2-prime.webp" x="10" y="10" width="440" height="440"/><text x="230" y="480" text-anchor="middle" font-size="20" font-weight="700" fill="#e6ebf2" stroke="#0d0f12" stroke-width="4" paint-order="stroke">Smoothieboard V2 Prime, socket G_G</text><image href="/images/extensions/vl53l1x-distance-sensor/vl53l1x-distance-sensor-diagram.png" x="550" y="150" width="180.6" height="240.6"/><image href="/images/extensions/vl53l1x-distance-sensor/vl53l1x-distance-sensor-diagram.png" x="900" y="150" width="180.6" height="240.6"/><path d="M220 283 H470 V25 H621.4 V194.7" fill="none" stroke="#0d0f12" stroke-width="16"/><path d="M220 283 H470 V25 H621.4 V194.7" fill="none" stroke="#9aa4b2" stroke-width="12"/><circle cx="220" cy="283" r="6" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><circle cx="621.4" cy="194.7" r="6" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><path d="M659.2 194.7 V50 H971.4 V194.7" fill="none" stroke="#0d0f12" stroke-width="16"/><path d="M659.2 194.7 V50 H971.4 V194.7" fill="none" stroke="#9aa4b2" stroke-width="12"/><circle cx="659.2" cy="194.7" r="6" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><circle cx="971.4" cy="194.7" r="6" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><text x="640" y="440" text-anchor="middle" font-size="20" font-weight="700" fill="#e6ebf2" stroke="#0d0f12" stroke-width="4" paint-order="stroke">Sensor A: enabled by pin 6</text><text x="990" y="440" text-anchor="middle" font-size="20" font-weight="700" fill="#e6ebf2" stroke="#0d0f12" stroke-width="4" paint-order="stroke">Sensor B: enabled by pin 3</text></svg>
  </div>
  <figcaption>Two sensors on one port. Change the solder links on the underside as listed below before connecting.</figcaption>
</figure>
{:/nomarkdown}

| Board | Link on the underside | Set to |
|---|---|---|
| A (next to the controller) | INT-3 (JP12) | open |
| A | CHAIN P3 (JP3) | closed |
| B (second) | INT-3 (JP12) | open |
| B | XS-6 (JP13) | open |
| B | XS-3 (JP14) | closed |
| B | PULLUP SDA and SCL (JP1, JP2) | open |

Then A is enabled by contact 6 (PF15) and B by contact 3 (PH2). In your own driver: drive both low; release PF15; write the new 7-bit address of A (for example 0x30) into register 0x0001; release PH2; B answers at 0x29. Repeat after every power cycle. The register is the one used by the <a href="https://github.com/pololu/vl53l1x-arduino">Pololu driver library</a>; the ST data sheet only states that the address can be changed. Neither interrupt reaches the controller in this arrangement.

### 2. Distance and orientation on one bus {#use-imu}

Chain a <a href="/extensions/nine-axis-imu">9-axis IMU board</a> behind the sensor to measure how far away a surface is and how the carrier is tilted.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Sensor with an IMU">
  <svg viewBox="0 0 1200 500" role="img" aria-labelledby="xb-tof-imu"><title id="xb-tof-imu">A sensor board chained to a 9-axis IMU board on the same I2C bus.</title><image href="/images/extensions/differential-i2c-signal-extender/smoothieboard-v2-prime.webp" x="10" y="10" width="440" height="440"/><text x="230" y="480" text-anchor="middle" font-size="20" font-weight="700" fill="#e6ebf2" stroke="#0d0f12" stroke-width="4" paint-order="stroke">Smoothieboard V2 Prime, socket G_G</text><image href="/images/extensions/vl53l1x-distance-sensor/vl53l1x-distance-sensor-diagram.png" x="550" y="150" width="180.6" height="240.6"/><image href="/images/extensions/nine-axis-imu/nine-axis-imu-diagram.png" x="880" y="150" width="252" height="252"/><path d="M220 283 H470 V25 H621.4 V194.7" fill="none" stroke="#0d0f12" stroke-width="16"/><path d="M220 283 H470 V25 H621.4 V194.7" fill="none" stroke="#9aa4b2" stroke-width="12"/><circle cx="220" cy="283" r="6" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><circle cx="621.4" cy="194.7" r="6" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><path d="M659.2 194.7 V50 H850 V276 H912" fill="none" stroke="#0d0f12" stroke-width="16"/><path d="M659.2 194.7 V50 H850 V276 H912" fill="none" stroke="#9aa4b2" stroke-width="12"/><circle cx="659.2" cy="194.7" r="6" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><circle cx="912" cy="276" r="6" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><text x="640" y="440" text-anchor="middle" font-size="20" font-weight="700" fill="#e6ebf2" stroke="#0d0f12" stroke-width="4" paint-order="stroke">Distance sensor, 0x29</text><text x="1006" y="440" text-anchor="middle" font-size="20" font-weight="700" fill="#e6ebf2" stroke="#0d0f12" stroke-width="4" paint-order="stroke">9-axis IMU, 0x28</text></svg>
  </div>
  <figcaption>A distance sensor and an orientation sensor share the two bus wires. Their addresses differ.</figcaption>
</figure>
{:/nomarkdown}

| Setting | Value |
|---|---|
| Sensor address | 0x29 |
| IMU address | 0x28, with the address link JP4 on the IMU board left open (closed gives 0x29, which clashes) |
| Pull-ups | Keep one set: open JP1 and JP2 on one of the two boards |
| Interrupt on contact 3 | Used by the sensor. The IMU interrupt does not reach the controller through the open CHAIN P3 link |

### 3. Cable-only connection {#use-qwiic}

A Qwiic or STEMMA QT cable, or the four-pin 2.54&nbsp;mm header, connects the board to any 3.3&nbsp;V I2C host, such as a development board used to try a driver.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Qwiic cable">
  <svg viewBox="0 0 1200 420" role="img" aria-labelledby="xb-tof-qwiic"><title id="xb-tof-qwiic">Qwiic cable between the Qwiic connectors of two boards, shown with two sensor boards.</title><image href="/images/extensions/vl53l1x-distance-sensor/vl53l1x-distance-sensor-diagram.png" x="185" y="30" width="210.7" height="280.7"/><image href="/images/extensions/vl53l1x-distance-sensor/vl53l1x-distance-sensor-diagram.png" x="735" y="30" width="210.7" height="280.7"/><path d="M290.4 285.8 V380 H840.4 V285.8" fill="none" stroke="#0d0f12" stroke-width="12"/><path d="M290.4 285.8 V380 H840.4 V285.8" fill="none" stroke="#5fb3ff" stroke-width="8"/><circle cx="290.4" cy="285.8" r="6" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><circle cx="840.4" cy="285.8" r="6" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><text x="600" y="405" text-anchor="middle" font-size="20" font-weight="700" fill="#9fd0ff" stroke="#0d0f12" stroke-width="4" paint-order="stroke">Four-way Qwiic cable: ground, 3.3 V, SDA, SCL</text></svg>
  </div>
  <figcaption>Qwiic carries only power and I2C: no interrupt and no shutdown line, so two of these sensors cannot be told apart this way.</figcaption>
</figure>
{:/nomarkdown}

The shutdown line then stays high through its on-board resistor and the sensor starts by itself. Driver check: after at least 1.2&nbsp;ms, the model ID byte at register address 0x010F (a 16-bit address) reads 0xEA.

### Machine ideas {#ideas}

With your own driver the readings can show whether a lid is open, how much material is left on a spool, or whether a part is in place. The sensor sees a patch of the target, not a point: at 27 degrees the patch is about 48&nbsp;mm across at 100&nbsp;mm (calculated). It is not precise enough to level a print bed or set a tool height, and it must never guard a person or stop a machine for safety.

## How it works {#how-it-works}

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
<svg viewBox="0 0 1000 110" role="img" aria-labelledby="xb-tof-how-t">
<title id="xb-tof-how-t">The module sends laser pulses, times their return and answers over I2C.</title>
<rect x="20.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="120.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Target</text><text x="120.0" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">any surface</text>
<path d="M220.0 51H273.3" stroke="#a9b4c2" stroke-width="3"/><path d="M273.3 51l-9 -5v10z" fill="#a9b4c2"/>
<rect x="273.3" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="373.3" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">VL53L1X</text><text x="373.3" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">time of flight</text>
<path d="M473.3 51H526.6" stroke="#a9b4c2" stroke-width="3"/><path d="M526.6 51l-9 -5v10z" fill="#a9b4c2"/>
<rect x="526.7" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#5fb3ff" stroke-width="1.5"/><text x="626.7" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">I2C</text><text x="626.7" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">SDA, SCL</text>
<path d="M726.7 51H780.0" stroke="#a9b4c2" stroke-width="3"/><path d="M780.0 51l-9 -5v10z" fill="#a9b4c2"/>
<rect x="780.0" y="20" width="200" height="62" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="880.0" y="47.0" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Your driver</text><text x="880.0" y="67.0" text-anchor="middle" font-size="12" fill="#a9b4c2">distance</text>
</svg>
  </div>
  <figcaption>One measurement path.</figcaption>
</figure>
{:/nomarkdown}

The <a href="/images/extensions/vl53l1x-distance-sensor/datasheets/vl53l1x.pdf">VL53L1X</a> contains an infrared laser, a receiver made of many small light detectors and a processor. It measures how long the light takes to come back, so the reading depends much less on the colour of the target than a brightness-based sensor does; colour and ambient light still change the maximum range. It runs directly from 3.3&nbsp;V.

The shutdown line (XSHUT) is held high on the board, so the sensor starts by itself unless the controller pulls it low. The interrupt line is open drain: the sensor can only pull it low. Which level means a new reading depends on how the driver sets its polarity.

Behind a cover window, use a material that passes 940&nbsp;nm light, keep the air gap small and calibrate for crosstalk as ST&rsquo;s application note AN5231 describes. Mechanical parts must stay outside a cone above each of the two sensor openings: at a height h above the module, about 0.54&nbsp;mm + 0.36 &times; h from the centre of the opening (calculated from the data sheet), plus your assembly tolerance.

## Solder links {#options}

All links are on the underside. For one sensor, leave them as delivered. Open JP1 and JP2 when another board on the bus already has pull-ups.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Solder links">
<svg viewBox="0 0 1000 322" role="img" aria-labelledby="xb-tof-jp-t">
<title id="xb-tof-jp-t">Solder links as delivered: JP1 closed; JP2 closed; JP3 open; JP6 open; JP8 closed; JP9 closed; JP10 closed; JP11 closed; JP12 closed; JP13 closed; JP14 open.</title>
<rect x="20" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="72" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="114" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="98" y="34" width="20" height="10" fill="#e0b84a"/>
<text x="108" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP1 · closed</text><text x="108" y="90" text-anchor="middle" font-size="11" fill="#a9b4c2">SDA pull-up</text>
<rect x="216" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="268" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="310" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="294" y="34" width="20" height="10" fill="#e0b84a"/>
<text x="304" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP2 · closed</text><text x="304" y="90" text-anchor="middle" font-size="11" fill="#a9b4c2">SCL pull-up</text>
<rect x="412" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="464" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="506" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="500" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP3 · open</text><text x="500" y="90" text-anchor="middle" font-size="11" fill="#a9b4c2">chain contact 3</text>
<rect x="608" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="660" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="702" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="696" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP6 · open</text><text x="696" y="90" text-anchor="middle" font-size="11" fill="#a9b4c2">chain contact 6</text>
<rect x="804" y="10" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="856" y="24" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="898" y="24" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="882" y="34" width="20" height="10" fill="#e0b84a"/>
<text x="892" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP8 · closed</text><text x="892" y="90" text-anchor="middle" font-size="11" fill="#a9b4c2">chain SDA</text>
<rect x="20" y="114" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="72" y="128" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="114" y="128" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="98" y="138" width="20" height="10" fill="#e0b84a"/>
<text x="108" y="176" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP9 · closed</text><text x="108" y="194" text-anchor="middle" font-size="11" fill="#a9b4c2">chain SCL</text>
<rect x="216" y="114" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="268" y="128" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="310" y="128" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="294" y="138" width="20" height="10" fill="#e0b84a"/>
<text x="304" y="176" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP10 · closed</text><text x="304" y="194" text-anchor="middle" font-size="11" fill="#a9b4c2">PWR light</text>
<rect x="412" y="114" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="464" y="128" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="506" y="128" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="490" y="138" width="20" height="10" fill="#e0b84a"/>
<text x="500" y="176" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP11 · closed</text><text x="500" y="194" text-anchor="middle" font-size="11" fill="#a9b4c2">INT light</text>
<rect x="608" y="114" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="660" y="128" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="702" y="128" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="686" y="138" width="20" height="10" fill="#e0b84a"/>
<text x="696" y="176" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP12 · closed</text><text x="696" y="194" text-anchor="middle" font-size="11" fill="#a9b4c2">interrupt to 3</text>
<rect x="804" y="114" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="856" y="128" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="898" y="128" width="30" height="30" rx="6" fill="#e0b84a"/>
<rect x="882" y="138" width="20" height="10" fill="#e0b84a"/>
<text x="892" y="176" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP13 · closed</text><text x="892" y="194" text-anchor="middle" font-size="11" fill="#a9b4c2">shutdown on 6</text>
<rect x="20" y="218" width="176" height="90" rx="8" fill="#1f2226" stroke="#59616e"/><rect x="72" y="232" width="30" height="30" rx="6" fill="#e0b84a"/><rect x="114" y="232" width="30" height="30" rx="6" fill="#e0b84a"/>
<text x="108" y="280" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">JP14 · open</text><text x="108" y="298" text-anchor="middle" font-size="11" fill="#a9b4c2">shutdown on 3</text>
</svg>
  </div>
  <figcaption>The links as delivered. Close one with a small blob of solder across both pads; open it by removing the solder or cutting the copper between the pads.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Link</th><th>What it does</th><th>As delivered</th></tr></thead>
  <tbody>
    <tr><td>JP1</td><td>Connects the SDA pull-up</td><td>Closed</td></tr>
    <tr><td>JP2</td><td>Connects the SCL pull-up</td><td>Closed</td></tr>
    <tr><td>JP3</td><td>Passes contact 3 to the chain socket</td><td>Open</td></tr>
    <tr><td>JP6</td><td>Passes contact 6 to the chain socket</td><td>Open</td></tr>
    <tr><td>JP8</td><td>Continues SDA to the chain</td><td>Closed</td></tr>
    <tr><td>JP9</td><td>Continues SCL to the chain</td><td>Closed</td></tr>
    <tr><td>JP10</td><td>Powers the green light</td><td>Closed</td></tr>
    <tr><td>JP11</td><td>Powers the blue light</td><td>Closed</td></tr>
    <tr><td>JP12</td><td>Sends the interrupt to contact 3</td><td>Closed</td></tr>
    <tr><td>JP13</td><td>Takes shutdown from contact 6</td><td>Closed</td></tr>
    <tr><td>JP14</td><td>Takes shutdown from contact 3. Close only with INT-3 and XS-6 open</td><td>Open</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Chaining {#chaining}

The CHAIN socket carries the same contact numbers as the input: nothing shifts. Power, contacts 4, 5 and 7 go straight across. SDA and SCL cross through closed links. Contacts 3 and 6, which this board uses, stop here until you close their links. Two boards must never drive the same contact.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Two sensors">
  <svg viewBox="0 0 1200 500" role="img" aria-labelledby="xb-tof-chain"><title id="xb-tof-chain">Two sensor boards: controller socket G_G to I IN of the first board, and CHAIN of the first board to I IN of the second.</title><image href="/images/extensions/differential-i2c-signal-extender/smoothieboard-v2-prime.webp" x="10" y="10" width="440" height="440"/><text x="230" y="480" text-anchor="middle" font-size="20" font-weight="700" fill="#e6ebf2" stroke="#0d0f12" stroke-width="4" paint-order="stroke">Smoothieboard V2 Prime, socket G_G</text><image href="/images/extensions/vl53l1x-distance-sensor/vl53l1x-distance-sensor-diagram.png" x="550" y="150" width="180.6" height="240.6"/><image href="/images/extensions/vl53l1x-distance-sensor/vl53l1x-distance-sensor-diagram.png" x="900" y="150" width="180.6" height="240.6"/><path d="M220 283 H470 V25 H621.4 V194.7" fill="none" stroke="#0d0f12" stroke-width="16"/><path d="M220 283 H470 V25 H621.4 V194.7" fill="none" stroke="#9aa4b2" stroke-width="12"/><circle cx="220" cy="283" r="6" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><circle cx="621.4" cy="194.7" r="6" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><path d="M659.2 194.7 V50 H971.4 V194.7" fill="none" stroke="#0d0f12" stroke-width="16"/><path d="M659.2 194.7 V50 H971.4 V194.7" fill="none" stroke="#9aa4b2" stroke-width="12"/><circle cx="659.2" cy="194.7" r="6" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><circle cx="971.4" cy="194.7" r="6" fill="#5fb3ff" stroke="#0d0f12" stroke-width="1.5"/><text x="640" y="440" text-anchor="middle" font-size="20" font-weight="700" fill="#e6ebf2" stroke="#0d0f12" stroke-width="4" paint-order="stroke">Sensor A: enabled by pin 6</text><text x="990" y="440" text-anchor="middle" font-size="20" font-weight="700" fill="#e6ebf2" stroke="#0d0f12" stroke-width="4" paint-order="stroke">Sensor B: enabled by pin 3</text></svg>
  </div>
  <figcaption>Two sensors on one port. Change the solder links on the underside as listed below before connecting.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contact</th><th>Signal</th><th>On CHAIN</th></tr></thead>
  <tbody>
    <tr><td>1, 2, 10</td><td>Power and ground</td><td>Same contact, always connected</td></tr>
    <tr><td>3</td><td>Interrupt</td><td>Contact 3, only if CHAIN P3 (JP3) is closed</td></tr>
    <tr><td>4, 5, 7</td><td>Free</td><td>Same contact, always connected</td></tr>
    <tr><td>6</td><td>Shutdown</td><td>Contact 6, only if CHAIN P6 (JP6) is closed</td></tr>
    <tr><td>8, 9</td><td>I2C</td><td>Same contact, through closed links JP8 and JP9</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Likely cause</th><th>What to check</th></tr></thead>
  <tbody>
    <tr><td>PWR light off</td><td>No 3.3 V, cable reversed, or JP10 open</td><td>Cable orientation and the +3V3 test pad</td></tr>
    <tr><td>No answer at 0x29</td><td>Wiring, shutdown line held low, or less than 1.2 ms since power on</td><td>XSHUT test pad should read 3.3 V</td></tr>
    <tr><td>Reads a short distance all the time</td><td>Film still on the sensor, or something in its view or a window reflecting</td><td>Remove the film; check the view and calibrate for the window</td></tr>
    <tr><td>Short range or noisy</td><td>Sunlight or other infrared light, dark target</td><td>Shade the sensor; use the long timing budget</td></tr>
    <tr><td>Two boards, one answers wrongly</td><td>Both still at 0x29</td><td>Follow the two-sensor link table and release one at a time</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-leds">
  <thead><tr><th>Light</th><th><span class="xb-led xb-led-green"></span>PWR</th><th><span class="xb-led xb-led-blue"></span>INT</th></tr></thead>
  <tbody>
    <tr><td>Where</td><td>Right edge, upper</td><td>Right edge, lower</td></tr>
    <tr><td>Lit means</td><td>3.3 V is present</td><td>The sensor is pulling its interrupt line low</td></tr>
    <tr><td>Dark means</td><td>No 3.3 V, or its link is open</td><td>The line is high, or its link is open</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting/).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="/images/extensions/vl53l1x-distance-sensor/vl53l1x-distance-sensor-schematic.pdf">Schematic (PDF)</a></td><td>The circuit diagram</td></tr>
    <tr><td><a href="/images/extensions/vl53l1x-distance-sensor/vl53l1x-distance-sensor-bom.csv">Parts list (CSV)</a></td><td>Every component with its value, footprint and part number where one is chosen</td></tr>
    <tr><td><a href="/images/extensions/vl53l1x-distance-sensor/vl53l1x-distance-sensor-diagram.png">Board drawing (PNG)</a></td><td>The top view used on this page</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

For drilling a mounting plate or designing an enclosure. Positions are hole centres, in millimetres, measured from the top-left corner with the board seen from the component side. Leave the space above the sensor open.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-tof-mount-t">
  <title id="xb-tof-mount-t">Mounting drawing of the distance sensor board, component side: outline 30 by 40 millimetres with 4 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="352.5" y="78.0" width="255.0" height="340.0" rx="8.5" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M352.5 56H607.5"/><path d="M352.5 50V62"/><path d="M607.5 50V62"/><path d="M633.5 78.0V418.0"/><path d="M627.5 78.0h12"/><path d="M627.5 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">30</text>
  <text x="645.5" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">40</text>
  <circle cx="352.5" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="340.5" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M294.5 104.0h30" fill="none"/><path d="M328.5 104.0l-8 -4v8z"/><path d="M294.5 104.0v30" fill="none"/><path d="M294.5 138.0l-4 -8h8z"/></g>
  <text x="332.5" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="290.5" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="395.0" cy="120.5" r="13.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M377.4 120.5h35.2M395.0 102.9v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="381.4" y="154.1" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  5.00, 5.00</text>
  <circle cx="565.0" cy="120.5" r="13.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M547.4 120.5h35.2M565.0 102.9v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="578.6" y="154.1" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  25.00, 5.00</text>
  <circle cx="395.0" cy="375.5" r="13.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M377.4 375.5h35.2M395.0 357.9v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="381.4" y="351.9" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">3</tspan>  5.00, 35.00</text>
  <circle cx="565.0" cy="375.5" r="13.6" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M547.4 375.5h35.2M565.0 357.9v35.2" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="578.6" y="351.9" text-anchor="end" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">4</tspan>  25.00, 35.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 30 × 40&nbsp;mm, corners rounded to a 1&nbsp;mm radius, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>5.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>25.00</td><td>5.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>3</td><td>5.00</td><td>35.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>4</td><td>25.00</td><td>35.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Every figure is a design value, a calculated or simulated value, or a manufacturer&rsquo;s data sheet value, as the last column says. A dash means no figure is given.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis</th></tr></thead>
  <tbody>
    <tr><td>Supply</td><td>J1 contact 1</td><td>2.6 V</td><td>3.3 V</td><td>3.5 V</td><td>ST data sheet</td></tr>
    <tr><td>Absolute maximum, any pin</td><td>Supply and signals</td><td>&mdash;</td><td>&mdash;</td><td>3.6 V</td><td>ST data sheet</td></tr>
    <tr><td>Peak current, sensor</td><td>3.3 V</td><td>&mdash;</td><td>&mdash;</td><td>40 mA</td><td>ST data sheet, at 2.8 V</td></tr>
    <tr><td>Average while ranging</td><td>3.3 V</td><td>&mdash;</td><td>16 mA</td><td>18 mA</td><td>ST data sheet, at 2.8 V</td></tr>
    <tr><td>Pull-up current, both lines low</td><td>3.3 V</td><td>&mdash;</td><td>2.0 mA</td><td>&mdash;</td><td>Calculated</td></tr>
    <tr><td>Power light current</td><td>PWR</td><td>&mdash;</td><td>1.3 mA</td><td>&mdash;</td><td>Simulated, assumed light model</td></tr>
    <tr><td>Interrupt light current</td><td>INT</td><td>&mdash;</td><td>0.85 mA</td><td>&mdash;</td><td>Simulated, assumed light model</td></tr>
    <tr><td>Rise time, one pull-up set, 100 pF</td><td>SDA, SCL</td><td>&mdash;</td><td>280 ns</td><td>300 ns</td><td>Simulated; limit for 400 kHz</td></tr>
    <tr><td>Low level, two pull-up sets</td><td>SDA, SCL</td><td>&mdash;</td><td>0.12 V</td><td>0.4 V</td><td>Simulated</td></tr>
    <tr><td>Operating temperature, sensor</td><td>Module</td><td>-20 &deg;C</td><td>&mdash;</td><td>85 &deg;C</td><td>ST data sheet; the board is not rated</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Component stress limits

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Part</th><th>Limit</th><th>Use on this board</th></tr></thead>
  <tbody>
    <tr><td>Any sensor pin</td><td>3.6 V maximum</td><td>Never connect 5 V logic or a 5 V supply</td></tr>
    <tr><td>Capacitors</td><td>10 V and 16 V</td><td>3.3 V</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: simulation {#simulation}

Bus loading and indicator currents were simulated with ngspice, with 100&nbsp;pF of bus capacitance.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Simulated results against limits">
<svg viewBox="0 0 1000 342" role="img" aria-labelledby="xb-tof-sim-t">
<title id="xb-tof-sim-t">Each simulated value (yellow mark) against its allowed range (green band).</title>
<text x="385" y="33" text-anchor="end" font-size="13" fill="#e6ebf2">Rise time 30 to 70 %, one pull-up set, 100 pF (400</text>
<text x="385" y="49" text-anchor="end" font-size="13" fill="#e6ebf2">kHz limit 300 ns)</text>
<path d="M400 36H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M400.0 36H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M782.8 23v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="41" font-size="13" font-weight="700" fill="#ffcc33">280&nbsp;ns</text>
<text x="385" y="93" text-anchor="end" font-size="13" fill="#e6ebf2">Rise time with two pull-up sets</text>
<path d="M400 88H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M400.0 88H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M591.4 75v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="93" font-size="13" font-weight="700" fill="#ffcc33">140&nbsp;ns</text>
<text x="385" y="145" text-anchor="end" font-size="13" fill="#e6ebf2">Low level with two pull-up sets</text>
<path d="M400 140H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M400.0 140H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M518.9 127v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="145" font-size="13" font-weight="700" fill="#ffcc33">0.12&nbsp;V</text>
<text x="385" y="197" text-anchor="end" font-size="13" fill="#e6ebf2">Power LED current (assumed diode model)</text>
<path d="M400 192H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M444.5 192H815.5" stroke="#2f8f5b" stroke-width="10"/><path d="M623.0 179v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="197" font-size="13" font-weight="700" fill="#ffcc33">1.3&nbsp;mA</text>
<text x="385" y="241" text-anchor="end" font-size="13" fill="#e6ebf2">Interrupt LED current with GPIO1 low (assumed diode</text>
<text x="385" y="257" text-anchor="end" font-size="13" fill="#e6ebf2">model)</text>
<path d="M400 244H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M444.5 244H815.5" stroke="#2f8f5b" stroke-width="10"/><path d="M596.5 231v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="249" font-size="13" font-weight="700" fill="#ffcc33">0.85&nbsp;mA</text>
<text x="385" y="293" text-anchor="end" font-size="13" fill="#e6ebf2">GPIO1 low level with the LED and 10 k pull-up, 60</text>
<text x="385" y="309" text-anchor="end" font-size="13" fill="#e6ebf2">ohm output</text>
<path d="M400 296H860" stroke="#3a414c" stroke-width="10" stroke-linecap="round"/><path d="M400.0 296H810.7" stroke="#2f8f5b" stroke-width="10"/><path d="M472.2 283v26" stroke="#ffcc33" stroke-width="4"/><text x="880" y="301" font-size="13" font-weight="700" fill="#ffcc33">70.3&nbsp;mV</text>
</svg>
  </div>
  <figcaption>Simulated value (yellow) against the limit used for it (green). Each bar has its own scale.</figcaption>
</figure>
<div class="xb-tablewrap"><table>
  <thead><tr><th>Result</th><th>Simulated value</th><th>Limit</th><th>Outcome</th></tr></thead>
  <tbody>
    <tr><td>Rise time 30 to 70 %, one pull-up set, 100 pF (400 kHz limit 300 ns)</td><td>280&nbsp;ns</td><td>at most 300&nbsp;ns</td><td>Within</td></tr>
    <tr><td>Rise time with two pull-up sets</td><td>140&nbsp;ns</td><td>at most 300&nbsp;ns</td><td>Within</td></tr>
    <tr><td>Low level with two pull-up sets</td><td>0.12&nbsp;V</td><td>at most 400&nbsp;mV</td><td>Within</td></tr>
    <tr><td>Power LED current (assumed diode model)</td><td>1.3&nbsp;mA</td><td>200&nbsp;&micro;A to 2.5&nbsp;mA</td><td>Within</td></tr>
    <tr><td>Interrupt LED current with GPIO1 low (assumed diode model)</td><td>0.85&nbsp;mA</td><td>50&nbsp;&micro;A to 2&nbsp;mA</td><td>Within</td></tr>
    <tr><td>GPIO1 low level with the LED and 10 k pull-up, 60 ohm output</td><td>70.3&nbsp;mV</td><td>at most 400&nbsp;mV</td><td>Within</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Not simulated: the sensor, its optics and range, cover windows and cable crosstalk.

## Appendix: datasheet {#datasheets}

The first page of the sensor data sheet. Click the page to open the PDF.

{::nomarkdown}
<figure class="xb-fig">
  <a href="/images/extensions/vl53l1x-distance-sensor/datasheets/vl53l1x.pdf"><img src="/images/extensions/vl53l1x-distance-sensor/datasheets/vl53l1x-page1.png" alt="First page of the VL53L1X time-of-flight distance sensor, DS12385 datasheet" style="display:block;width:100%;max-width:480px;height:auto;margin:0 auto"></a>
  <figcaption><a href="/images/extensions/vl53l1x-distance-sensor/datasheets/vl53l1x.pdf">VL53L1X time-of-flight distance sensor, DS12385</a> — STMicroelectronics, 36 pages.</figcaption>
</figure>
{:/nomarkdown}

For a wider, sound-based measurement, see the [ultrasonic distance sensor](/extensions/ultrasonic-distance-sensor).

See all boards on the [extension boards](/extension-boards) page.
