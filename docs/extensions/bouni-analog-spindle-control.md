---
layout: default
title: "Bouni analog spindle control"
description: "Isolated PWM to 0–10 V spindle speed board with a run contact: pinout, wiring and configuration."
permalink: /extensions/bouni-analog-spindle-control
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Spindle</p>
    <h1 id="bouni-analog-spindle-control">Bouni analog spindle control</h1>
    <p class="xb-lead">Turns a PWM signal from the controller into an isolated analog speed command for a variable-frequency drive, with a separate run contact.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
  <figure>
    <img src="/images/extensions/bouni-analog-spindle-control/directory-board-render.webp" alt="Top view of the Bouni analog spindle control board">
    <figcaption>Top view drawn from the original board file. This is a drawing, not a photograph.</figcaption>
  </figure>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>0–10 V</b><span>speed command</span></div>
  <div class="xb-stat"><b>10 bit</b><span>conversion</span></div>
  <div class="xb-stat"><b>30 Hz–25 kHz</b><span>PWM input</span></div>
  <div class="xb-stat"><b>isolated</b><span>PWM and run</span></div>
  <div class="xb-stat"><b>60 × 52 mm</b><span>board size</span></div>
  <div class="xb-stat"><b>5</b><span>drive terminals</span></div>
</div>

<nav class="xb-nav" aria-label="On this page">
  <a href="#specs">Tech specs</a>
  <a href="#tour">Board tour</a>
  <a href="#pinout">Pinout</a>
  <a href="#what-you-need">What you need</a>
  <a href="#get-started">Get started</a>
  <a href="#configuration">Configuration</a>
  <a href="#how-it-works">How it works</a>
  <a href="#chaining">Chaining</a>
  <a href="#troubleshooting">Troubleshooting</a>
  <a href="#downloads">Downloads</a>
  <a href="#mounting">Mounting dimensions</a>
  <a href="#electrical">Electrical specifications</a>
</nav>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <b>A PWM input stuck high commands full speed,</b> and RUN does not force the speed command to zero. Keep an independent way of stopping the spindle, and keep mains and motor wiring away from this board. For drives that take serial commands, see <a href="/extensions/bouni-rs485-spindle-control">Bouni RS-485 spindle control</a>.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>Isolated PWM to analog speed command, plus run contact</td></tr>
    <tr><td>Drive terminals</td><td>J3: 10V, AOUT, GND, RUN, DCM</td></tr>
    <tr><td>Host connector</td><td>J1 (Gadgeteer), chain on J2</td></tr>
    <tr><td>Isolator</td><td>ISO7710F for PWM</td></tr>
    <tr><td>Converter</td><td>LTC2644, 2.5 V full scale</td></tr>
    <tr><td>Amplifier</td><td>TS912, nominal gain 4</td></tr>
    <tr><td>Run path</td><td>ILD217T optocoupler between RUN and DCM</td></tr>
    <tr><td>Field supply</td><td>The drive&rsquo;s 10 V; TPS70930 makes 3 V</td></tr>
    <tr><td>Size</td><td>60 × 52 mm</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Board tour {#tour}

{::nomarkdown}
<figure class="xb-tour">
  <div class="xb-tour-scroll" tabindex="0" role="region" aria-label="Annotated top view">
    <div class="xb-tour-stage">
      <img src="/images/extensions/bouni-analog-spindle-control/bouni-analog-spindle-control-diagram.webp" alt="Annotated top view of the Bouni analog spindle control board">
      <a class="xb-mk xb-pb xb-pl" href="#tour-1" style="left:19.0%;top:11.1%" aria-label="1: Host connector J1">1<span class="xb-pop"><b>Host connector J1</b> — PWM, run enable and 3.3 V.</span></a>
      <a class="xb-mk xb-pb" href="#tour-2" style="left:50.0%;top:11.1%" aria-label="2: Chain connector J2">2<span class="xb-pop"><b>Chain connector J2</b> — Next board.</span></a>
      <a class="xb-mk xb-pb" href="#tour-3" style="left:73.2%;top:41.2%" aria-label="3: Isolator U3">3<span class="xb-pop"><b>Isolator U3</b> — ISO7710F, carries PWM across the barrier.</span></a>
      <a class="xb-mk" href="#tour-4" style="left:63.9%;top:65.9%" aria-label="4: Converter U4">4<span class="xb-pop"><b>Converter U4</b> — LTC2644, duty cycle to voltage.</span></a>
      <a class="xb-mk xb-pl" href="#tour-5" style="left:19.0%;top:65.9%" aria-label="5: Amplifier U2">5<span class="xb-pop"><b>Amplifier U2</b> — TS912, gain of 4.</span></a>
      <a class="xb-mk xb-pb" href="#tour-6" style="left:34.5%;top:41.2%" aria-label="6: Optocoupler U1">6<span class="xb-pop"><b>Optocoupler U1</b> — Run contact.</span></a>
      <a class="xb-mk xb-pr" href="#tour-7" style="left:85.6%;top:62.4%" aria-label="7: Regulator U5">7<span class="xb-pop"><b>Regulator U5</b> — TPS70930, field 3 V.</span></a>
      <a class="xb-mk" href="#tour-8" style="left:26.8%;top:86.4%" aria-label="8: Drive terminals">8<span class="xb-pop"><b>Drive terminals</b> — 10V, AOUT, GND, RUN, DCM.</span></a>
    </div>
  </div>
  <ol class="xb-tour-list" start="1">
    <li id="tour-1"><span class="xb-n">1</span><div><b>Host connector J1</b> — PWM, run enable and 3.3 V.</div></li>
    <li id="tour-2"><span class="xb-n">2</span><div><b>Chain connector J2</b> — Next board.</div></li>
    <li id="tour-3"><span class="xb-n">3</span><div><b>Isolator U3</b> — ISO7710F, carries PWM across the barrier.</div></li>
    <li id="tour-4"><span class="xb-n">4</span><div><b>Converter U4</b> — LTC2644, duty cycle to voltage.</div></li>
    <li id="tour-5"><span class="xb-n">5</span><div><b>Amplifier U2</b> — TS912, gain of 4.</div></li>
    <li id="tour-6"><span class="xb-n">6</span><div><b>Optocoupler U1</b> — Run contact.</div></li>
    <li id="tour-7"><span class="xb-n">7</span><div><b>Regulator U5</b> — TPS70930, field 3 V.</div></li>
    <li id="tour-8"><span class="xb-n">8</span><div><b>Drive terminals</b> — 10V, AOUT, GND, RUN, DCM.</div></li>
  </ol>
  <figcaption>Point at a number, or tap it, to read what the part is; the same text is in the list. On a small screen, scroll the drawing sideways.</figcaption>
</figure>
{:/nomarkdown}

## Pinout {#pinout}

<span id="connect-and-try-it"></span>

### Host connector J1

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J1 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+3V3</code></td></tr>
    <tr><td>2</td><td><code>+5V</code></td></tr>
    <tr><td>3</td><td><code>GAD_P3</code></td></tr>
    <tr><td>4</td><td><code>GAD_P4</code></td></tr>
    <tr><td>5</td><td><code>GAD_P5</code></td></tr>
    <tr><td>6</td><td><code>RUN_EN</code></td></tr>
    <tr><td>7</td><td><code>PWM_IN</code></td></tr>
    <tr><td>8</td><td><code>GAD_P8</code></td></tr>
    <tr><td>9</td><td><code>GAD_P9</code></td></tr>
    <tr><td>10</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Drive terminals J3

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J3 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>VFD_10V</code></td></tr>
    <tr><td>2</td><td><code>VFD_AOUT</code></td></tr>
    <tr><td>3</td><td><code>GND_VFD</code></td></tr>
    <tr><td>4</td><td><code>VFD_RUN</code></td></tr>
    <tr><td>5</td><td><code>VFD_DCM</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

### Chain connector J2

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>J2 contact</th><th>Connected to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td><code>+3V3</code></td></tr>
    <tr><td>2</td><td><code>+5V</code></td></tr>
    <tr><td>3</td><td><code>CHAIN_P3</code></td></tr>
    <tr><td>4</td><td><code>CHAIN_P4</code></td></tr>
    <tr><td>5</td><td><code>CHAIN_P5</code></td></tr>
    <tr><td>6</td><td><code>CHAIN_P6</code></td></tr>
    <tr><td>7</td><td><code>CHAIN_P7</code></td></tr>
    <tr><td>8</td><td><code>CHAIN_P8</code></td></tr>
    <tr><td>9</td><td><code>CHAIN_P9</code></td></tr>
    <tr><td>10</td><td><code>GND</code></td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Analog board</b><span>Built from the design files</span></div>
  <div class="xb-card"><b>Drive or voltmeter</b><span>A meter for the first test</span></div>
  <div class="xb-card"><b>10 V field supply</b><span>From the drive, or a current-limited bench supply</span></div>
</div>
{:/nomarkdown}

## Get started {#get-started}

A bench test with a voltmeter and no drive, motor or mains connected.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Bench test: three wires from the controller, a 10 V supply and a voltmeter">
  <svg viewBox="0 0 1000 660" role="img" aria-labelledby="xb-bsma-wire"><title id="xb-bsma-wire">Bench test wiring: Smoothieboard V2 Prime header J34 contacts 1, 7 and 10 to J1 contacts 1, 7 and 10; a 10 volt supply to J3 contacts 1 and 3; a voltmeter between J3 contacts 2 and 3.</title><rect x="20" y="16" width="200" height="150" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="120" y="40" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">Smoothieboard V2 Prime</text><text x="120" y="56" text-anchor="middle" font-size="12" fill="#a9b4c2">header J34</text><image href="/images/extensions/bouni-analog-spindle-control/bouni-analog-spindle-control-diagram.webp" x="309.8" y="49.8" width="520.8" height="456.8"/><path d="M214 84H250V20H430.3V96.9" fill="none" stroke="#0d0f12" stroke-width="5.5" stroke-linejoin="round"/><path d="M214 84H250V20H430.3V96.9" fill="none" stroke="#8b949e" stroke-width="3" stroke-linejoin="round"/><circle cx="430.3" cy="96.9" r="3.6" fill="#8b949e" stroke="#fff" stroke-width="1"/><rect x="96" y="73" width="118" height="22" rx="11" fill="#8b949e"/><text x="155.0" y="88.5" text-anchor="middle" font-size="12.5" font-weight="700" fill="#111">10: ground</text><path d="M214 110H266V38H414.2V94.1L420.2 107.1" fill="none" stroke="#0d0f12" stroke-width="5.5" stroke-linejoin="round"/><path d="M214 110H266V38H414.2V94.1L420.2 107.1" fill="none" stroke="#2f7fe0" stroke-width="3" stroke-linejoin="round"/><circle cx="420.2" cy="107.1" r="3.6" fill="#2f7fe0" stroke="#fff" stroke-width="1"/><rect x="96" y="99" width="118" height="22" rx="11" fill="#2f7fe0"/><text x="155.0" y="114.5" text-anchor="middle" font-size="12.5" font-weight="700" fill="#fff">7: PI6 PWM</text><path d="M214 136H282V56H383.7V94.1L389.7 107.1" fill="none" stroke="#0d0f12" stroke-width="5.5" stroke-linejoin="round"/><path d="M214 136H282V56H383.7V94.1L389.7 107.1" fill="none" stroke="#d92d2d" stroke-width="3" stroke-linejoin="round"/><circle cx="389.7" cy="107.1" r="3.6" fill="#d92d2d" stroke="#fff" stroke-width="1"/><rect x="96" y="125" width="118" height="22" rx="11" fill="#d92d2d"/><text x="155.0" y="140.5" text-anchor="middle" font-size="12.5" font-weight="700" fill="#fff">1: 3.3 V</text><image href="/images/extensions/equipment/bench-power-supply-generic.webp" x="40" y="430" width="238.0" height="170.0"/><image href="/images/extensions/equipment/bench-multimeter-generic.webp" x="838" y="330" width="155.0" height="235.6"/><path d="M450.0 442.8V610H227.0V545.6" fill="none" stroke="#0d0f12" stroke-width="5.5" stroke-linejoin="round"/><path d="M450.0 442.8V610H227.0V545.6" fill="none" stroke="#d92d2d" stroke-width="3" stroke-linejoin="round"/><path d="M478.0 442.8V560H887.6V522.2" fill="none" stroke="#0d0f12" stroke-width="5.5" stroke-linejoin="round"/><path d="M478.0 442.8V560H887.6V522.2" fill="none" stroke="#e0b82f" stroke-width="3" stroke-linejoin="round"/><path d="M506.0 442.8V551a9 9 0 0 1 0 18V590H943.4V522.2" fill="none" stroke="#0d0f12" stroke-width="5.5" stroke-linejoin="round"/><path d="M506.0 442.8V551a9 9 0 0 1 0 18V590H943.4V522.2" fill="none" stroke="#8b949e" stroke-width="3" stroke-linejoin="round"/><path d="M506.0 590V640H169.2V545.6" fill="none" stroke="#0d0f12" stroke-width="5.5" stroke-linejoin="round"/><path d="M506.0 590V640H169.2V545.6" fill="none" stroke="#8b949e" stroke-width="3" stroke-linejoin="round"/><circle cx="506.0" cy="590.0" r="3.6" fill="#8b949e" stroke="#fff" stroke-width="1"/><circle cx="450.0" cy="442.8" r="3.6" fill="#d92d2d" stroke="#fff" stroke-width="1"/><circle cx="478.0" cy="442.8" r="3.6" fill="#e0b82f" stroke="#fff" stroke-width="1"/><circle cx="506.0" cy="442.8" r="3.6" fill="#8b949e" stroke="#fff" stroke-width="1"/><circle cx="227.0" cy="545.6" r="3.6" fill="#d92d2d" stroke="#fff" stroke-width="1"/><circle cx="169.2" cy="545.6" r="3.6" fill="#8b949e" stroke="#fff" stroke-width="1"/><circle cx="887.6" cy="522.2" r="3.6" fill="#e0b82f" stroke="#fff" stroke-width="1"/><circle cx="943.4" cy="522.2" r="3.6" fill="#8b949e" stroke="#fff" stroke-width="1"/><rect x="330" y="599" width="100" height="22" rx="11" fill="#d92d2d"/><text x="380.0" y="614.5" text-anchor="middle" font-size="12.5" font-weight="700" fill="#fff">1: 10V +</text><rect x="690" y="549" width="100" height="22" rx="11" fill="#e0b82f"/><text x="740.0" y="564.5" text-anchor="middle" font-size="12.5" font-weight="700" fill="#111">2: AOUT</text><rect x="560" y="579" width="100" height="22" rx="11" fill="#8b949e"/><text x="610.0" y="594.5" text-anchor="middle" font-size="12.5" font-weight="700" fill="#111">3: GND</text><text x="159" y="420" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">10 V bench supply, current limited</text><text x="916" y="320" text-anchor="middle" font-size="13" font-weight="700" fill="#e6ebf2">voltmeter, DC volts</text></svg>
  </div>
  <figcaption>Bench test: three wires from the controller, a 10 V supply and a voltmeter. No drive, motor or mains. The supply and meter are typical units, not specific models; check cable orientation by meter.</figcaption>
</figure>
<ol class="xb-steps">
  <li class="xb-step">
    <h3>Wire the host side</h3>
    <p>With power off, connect Prime J34 contact 1 (3.3 V) to J1 contact 1, J34 contact 7 (PI6) to J1 contact 7 and J34 contact 10 to J1 contact 10. Leave the other J1 contacts open.</p>
  </li>
  <li class="xb-step">
    <h3>Wire the field side</h3>
    <p>Connect a current-limited 10 V supply to J3 contact 1 (positive) and contact 3 (return), and a DC voltmeter to contact 2 (positive) and contact 3. Never join the field return to the controller ground.</p>
  </li>
  <li class="xb-step">
    <h3>Configure</h3>
    <p>Add the entries from <a href="#configuration">Configuration</a>, restart, then power the field side.</p>
  </li>
  <li class="xb-step">
    <h3>Measure</h3>
    <p>Send <code>M43.21</code>, then <code>M42.21 S25</code>, then <code>M42.21 S50</code>, and finish with <code>M43.21</code>. Remove field power before disconnecting.</p>
    <p class="xb-expect">Near 0 V, then about 2.5 V, then about 5 V.</p>
  </li>
</ol>
{:/nomarkdown}

## Configuration {#configuration}

<span id="smoothieware-use"></span>

A switch driving hardware PWM; S is percent duty, not RPM. Syntax checked against firmware commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`.

```ini
[pwm2]
frequency = 1000

[switch]
spindle_request.enable = true
spindle_request.output_type = hwpwm
spindle_request.output_pin = PWM2_2
spindle_request.input_on_command = M42
spindle_request.input_off_command = M43
spindle_request.subcode = 21
spindle_request.startup_value = 0
spindle_request.halt_set_to = 0
spindle_request.ignore_on_halt = false
```

A drive installation also needs run control, speed-to-RPM mapping and a fault and stop policy suited to your machine.

Good to know:

- Merge these entries into your existing configuration; do not duplicate sections. Reserve PI6 and the timer it shares (TIM8).
- With a 1 kHz signal, 25 % duty gives about 2.5 V and 50 % about 5 V. These are nominal values, not a stated accuracy, and a 10 V full-scale output is not guaranteed.
- A signal stuck high can command full scale: losing the PWM signal is not a safe stop.
- Never feed the 10 V field terminal from a controller pin, and do not join controller and field grounds through a meter or USB lead.

## How it works {#how-it-works}

The ISO7710F carries PWM across the isolation barrier. The [LTC2644](https://www.analog.com/media/en/technical-documentation/data-sheets/ltc2644.pdf) measures its duty cycle and outputs a voltage, which the TS912 multiplies by 4: 25 % duty gives about 2.5 V and 50 % about 5 V (nominal values). A separate optocoupler closes RUN to DCM. The field side is powered by the drive&rsquo;s 10 V terminal; field and host returns stay separate.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Speed command path: duty cycle becomes a voltage on the field side">
  <svg viewBox="0 0 1000 130" role="img" aria-labelledby="xb-bsma-path"><title id="xb-bsma-path">PWM on J1 contact 7 passes the isolator, the duty cycle converter and an amplifier to J3 contact 2.</title><rect x="20" y="20" width="168" height="90" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="104" y="58" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">PWM input</text><text x="104" y="82" text-anchor="middle" font-size="12" fill="#a9b4c2">J1 contact 7</text><rect x="218" y="20" width="168" height="90" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="302" y="58" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Isolator U3</text><text x="302" y="82" text-anchor="middle" font-size="12" fill="#a9b4c2">ISO7710F</text><path d="M190 65H210" stroke="#5fb3ff" stroke-width="3"/><path d="M208 58L217 65L208 72Z" fill="#5fb3ff"/><rect x="416" y="20" width="168" height="90" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="500" y="58" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Converter U4</text><text x="500" y="82" text-anchor="middle" font-size="12" fill="#a9b4c2">LTC2644</text><path d="M388 65H408" stroke="#5fb3ff" stroke-width="3"/><path d="M406 58L415 65L406 72Z" fill="#5fb3ff"/><rect x="614" y="20" width="168" height="90" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="698" y="58" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">Amplifier U2</text><text x="698" y="82" text-anchor="middle" font-size="12" fill="#a9b4c2">gain of 4</text><path d="M586 65H606" stroke="#5fb3ff" stroke-width="3"/><path d="M604 58L613 65L604 72Z" fill="#5fb3ff"/><rect x="812" y="20" width="168" height="90" rx="8" fill="#1f2226" stroke="#dfe4ee" stroke-width="1.5"/><text x="896" y="58" text-anchor="middle" font-size="14" font-weight="700" fill="#e6ebf2">AOUT</text><text x="896" y="82" text-anchor="middle" font-size="12" fill="#a9b4c2">J3 contact 2</text><path d="M784 65H804" stroke="#5fb3ff" stroke-width="3"/><path d="M802 58L811 65L802 72Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>Speed command path: duty cycle becomes a voltage on the field side.</figcaption>
</figure>
{:/nomarkdown}

## Chaining {#chaining}

J2 passes the Gadgeteer socket on to a further board. The PWM and run contacts are used by this board. A solder link on each contact sets whether it is passed through: check the link labels against <a href="#pinout">Pinout</a> before stacking boards.

{::nomarkdown}
{% include _includes/extension-chain-figure.html id="xb-bouni-analog-spindle-control" board="Analog board" in_label="IN" chain_label="CHAIN" lane1="pin 5" lane2="pin 6, run enable" lane3="pin 7, PWM" s1="closed" s2="open" s3="open" caption="Contacts 6 and 7 stop at this board." %}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Contacts</th><th>Link as designed</th><th>On CHAIN</th></tr></thead>
  <tbody>
    <tr><td>1, 2, 10</td><td>none, wired through</td><td>3.3 V, 5 V, ground</td></tr>
    <tr><td>3, 4, 5, 8, 9</td><td>closed</td><td>passed on</td></tr>
    <tr><td>6 (run enable), 7 (PWM)</td><td>open</td><td>stop here</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>No output voltage</td><td>Check 10 V between J3 contacts 1 and 3, and that PWM arrives on J1 contact 7.</td></tr>
    <tr><td>Output at full scale</td><td>The PWM input is high or held high. Send a low duty.</td></tr>
    <tr><td>Drive does not run</td><td>Check the RUN and DCM wiring and the run signal.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/robot/Robot.cpp#L1138-L1147">M3/M5 handlers</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Smoothieware/SmoothieV2/blob/2a21c0108b1d095ecd8b2b9358e94055f053c003/Firmware/src/CommandShell.cpp#L1874-L1878">auxiliary UART shell output</a></td><td>Design source</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: mounting dimensions {#mounting}

Outline and holes from the original board file. Millimetres, seen from the component side.

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Mounting drawing">
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="xb-ndle-control-mount-t">
  <title id="xb-ndle-control-mount-t">Mounting drawing of the bouni-analog-spindle-control, component side: outline 60 by 52 millimetres with 2 mounting holes. Hole positions are listed in the table below.</title>
  <text x="480.0" y="24" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="1" fill="#a9b4c2">COMPONENT SIDE · millimetres</text>
  <rect x="283.8" y="78.0" width="392.3" height="340.0" rx="0.0" fill="#1f2226" stroke="#e6ebf2" stroke-width="1.5"/>
  <g stroke="#a9b4c2" stroke-width="1.2" fill="none"><path d="M283.8 56H676.2"/><path d="M283.8 50V62"/><path d="M676.2 50V62"/><path d="M702.2 78.0V418.0"/><path d="M696.2 78.0h12"/><path d="M696.2 418.0h12"/></g>
  <text x="480.0" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#e6ebf2">60</text>
  <text x="714.2" y="253.0" font-size="15" font-weight="700" fill="#e6ebf2">52</text>
  <circle cx="283.8" cy="78.0" r="4" fill="#ffcc33"/>
  <text x="271.8" y="83.0" text-anchor="end" font-size="14" font-weight="700" fill="#ffcc33">0, 0</text>
  <g stroke="#ffcc33" stroke-width="1.5" fill="#ffcc33"><path d="M225.8 104.0h30" fill="none"/><path d="M259.8 104.0l-8 -4v8z"/><path d="M225.8 104.0v30" fill="none"/><path d="M225.8 138.0l-4 -8h8z"/></g>
  <text x="263.8" y="109.0" font-size="12" font-weight="700" fill="#ffcc33">X</text>
  <text x="221.8" y="154.0" font-size="12" font-weight="700" fill="#ffcc33">Y</text>
  <circle cx="349.2" cy="215.3" r="10.5" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M334.8 215.3h28.9M349.2 200.8v28.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="338.8" y="245.8" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">1</tspan>  10.00, 21.00</text>
  <circle cx="480.0" cy="215.3" r="10.5" fill="#141920" stroke="#ffcc33" stroke-width="2"/>
  <path d="M465.5 215.3h28.9M480.0 200.8v28.9" stroke="#ffcc33" stroke-width=".8" fill="none"/>
  <text x="505" y="226" text-anchor="start" font-size="13" fill="#e6ebf2"><tspan font-weight="700" fill="#ffcc33">2</tspan>  30.00, 21.00</text>
  <text x="480.0" y="448.0" text-anchor="middle" font-size="13" fill="#a9b4c2">Numbered rings are mounting holes. Positions are hole centres, X then Y, from the marked corner.</text>
  </svg>
  </div>
  <figcaption>Board outline 60 × 52&nbsp;mm, square corners, board thickness 1.6&nbsp;mm. Drawn from the design files, component side up, in the same orientation as the board tour.</figcaption>
</figure>

<div class="xb-tablewrap"><table>
  <thead><tr><th>Hole</th><th>X (mm)</th><th>Y (mm)</th><th>Diameter</th><th>Use</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>10.00</td><td>21.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
    <tr><td>2</td><td>30.00</td><td>21.00</td><td>3.2&nbsp;mm, not plated</td><td>Mounting, M3 screw</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Only what the design source states or the circuit fixes. Blank cells are not specified.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>PWM frequency</td><td>J1 contact 7</td><td>30 Hz</td><td>—</td><td>25 kHz</td><td>LTC2644 datasheet</td></tr>
    <tr><td>Field supply</td><td>J3 contacts 1 and 3</td><td>—</td><td>10 V</td><td>—</td><td>Design value</td></tr>
    <tr><td>Speed command</td><td>J3 contact 2</td><td>0 V</td><td>—</td><td>10 V</td><td>Nominal gain 4; swing near the rail not specified</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Design source {#sources}

The design files for this board are not published for download.
See all boards on the [extension boards](/extension-boards) page.
