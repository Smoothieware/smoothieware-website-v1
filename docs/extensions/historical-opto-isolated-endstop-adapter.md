---
layout: default
title: "OptoIsoStop isolated endstop interface"
description: "H11L1 optocoupler endstop input design: operation, limits and configuration."
permalink: /extensions/historical-opto-isolated-endstop-adapter
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Inputs</p>
    <h1 id="historical-opto-isolated-endstop-adapter">OptoIsoStop isolated endstop interface</h1>
    <p class="xb-lead">Isolates a 3–24 V endstop-style signal from the controller with an H11L1SM optocoupler.</p>
    <div class="xb-actions">
      <a class="xb-btn xb-btn-primary" href="#pinout">Pinout</a>
      <a class="xb-btn" href="#how-it-works">How it works</a>
      <a class="xb-btn" href="#downloads">Downloads</a>
    </div>
  </div>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>H11L1SM</b><span>optocoupler</span></div>
  <div class="xb-stat"><b>3–24 V</b><span>design input range</span></div>
  <div class="xb-stat"><b>1.5 / 5.9 kΩ</b><span>input resistors</span></div>
  <div class="xb-stat"><b>2</b><span>cuttable links</span></div>
  <div class="xb-stat"><b>1</b><span>channel</span></div>
  <div class="xb-stat"><b>0</b><span>board layouts</span></div>
</div>

<nav class="xb-nav" aria-label="On this page">
  <a href="#specs">Tech specs</a>
  <a href="#pinout">Pinout</a>
  <a href="#what-you-need">What you need</a>
  <a href="#configuration">Configuration</a>
  <a href="#how-it-works">How it works</a>
  <a href="#troubleshooting">Troubleshooting</a>
  <a href="#downloads">Downloads</a>
  <a href="#electrical">Electrical specifications</a>
</nav>
{:/nomarkdown}

<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <b>Only a schematic exists for this design: there is no board layout.</b> The schematic shares 5 V between both connectors, and the output voltage and polarity must be checked before connecting a controller. This is a design by Chris Cecil, not a current Smoothieware board.
</sl-alert>

## Tech specs {#specs}

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-spec">
  
  <tbody>
    <tr><td>Function</td><td>Isolated endstop input</td></tr>
    <tr><td>Connectors</td><td>JP1 (field), JP2 (controller)</td></tr>
    <tr><td>Input resistors</td><td>R1 1.5 kΩ, R2 5.9 kΩ</td></tr>
    <tr><td>Input selection</td><td>By cutting the links</td></tr>
    <tr><td>Output</td><td>U1 contact 4, to JP2 contact 3</td></tr>
    <tr><td>Board layout</td><td>Not available</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Pinout {#pinout}

<span id="connect-and-try-it"></span>

Take the connector pin functions from the original schematic linked under <a href="#downloads">Downloads</a>.

## What you need {#what-you-need}

{::nomarkdown}
<div class="xb-cards">
  <div class="xb-card"><b>Original schematic</b><span>To build from</span></div>
  <div class="xb-card"><b>3–24 V signal</b><span>Matched to the links</span></div>
</div>
{:/nomarkdown}

## Configuration {#configuration}

<span id="smoothieware-use"></span>

A mechanical contact read as an input that does not limit motion. See [endstops](/endstops). Syntax checked against firmware commit `2a21c0108b1d095ecd8b2b9358e94055f053c003`.

```ini
[endstops]
opto_contact_observation.enable = true
opto_contact_observation.pin = PB1-
opto_contact_observation.axis = X
opto_contact_observation.homing_direction = none
opto_contact_observation.limit_enable = false
```

## How it works {#how-it-works}

The field signal drives the LED of the H11L1SM through the resistors; a separately powered Schmitt-trigger output reports it. It is not a passive contact. See the [H11L1 datasheet](https://www.onsemi.com/pdf/datasheet/h11l1m-d.pdf).

{::nomarkdown}
<figure class="xb-fig">
  <div class="xb-fig-scroll" tabindex="0" role="region" aria-label="Signal path">
  <svg viewBox="0 0 1000 142" role="img" aria-labelledby="xb-historical-opto-isolated-endstop-adapter-path"><title id="xb-historical-opto-isolated-endstop-adapter-path">Field signal then Resistors then H11L1SM LED then Light across the barrier then Schmitt output, separately powered.</title><rect x="20" y="14" width="165" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="102" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Field signal</text><text x="102" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><rect x="219" y="14" width="165" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="301" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Resistors</text><text x="301" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M188.8 70H209.8" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M208 63L217 70L208 77Z" fill="#5fb3ff"/><rect x="418" y="14" width="165" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="500" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">H11L1SM LED</text><text x="500" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M387.6 70H408.6" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M407 63L416 70L407 77Z" fill="#5fb3ff"/><rect x="616" y="14" width="165" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="699" y="56" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Light across the</text><text x="699" y="74" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">barrier</text><text x="699" y="94" text-anchor="middle" font-size="13" fill="#b3b3b3"></text><path d="M586.4000000000001 70H607.4000000000001" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M605 63L614 70L605 77Z" fill="#5fb3ff"/><rect x="815" y="14" width="165" height="112" rx="8" fill="#1f2226" stroke="#e4e4e4" stroke-width="1.5"/><text x="898" y="65" text-anchor="middle" font-size="15" font-weight="700" fill="#eaeaea">Schmitt output</text><text x="898" y="85" text-anchor="middle" font-size="13" fill="#b3b3b3">separately powered</text><path d="M785.2 70H806.2" fill="none" stroke="#5fb3ff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M804 63L813 70L804 77Z" fill="#5fb3ff"/></svg>
  </div>
  <figcaption>How the signals pass through this board.</figcaption>
</figure>
{:/nomarkdown}


## Troubleshooting {#troubleshooting}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th></tr></thead>
  <tbody>
    <tr><td>No output change</td><td>Check the input voltage against the fitted links and the 5 V supply.</td></tr>
    <tr><td>Inverted reading</td><td>Invert the pin in the configuration.</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

Still stuck? Read [how to ask for help](/help-guidelines) or see the general [troubleshooting guide](/troubleshooting).

## Downloads {#downloads}

{::nomarkdown}
<div class="xb-tablewrap"><table>
  <thead><tr><th>File</th><th>What it is</th></tr></thead>
  <tbody>
    <tr><td><a href="https://github.com/Ccecil/OptoIsoStop/tree/d3ac5cda385b889e9ff92fccb7ba4577af19327c">original Ccecil design</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/OptoIsoStop/blob/d3ac5cda385b889e9ff92fccb7ba4577af19327c/OptoIsoStop/OES_Small%20v10.fsch">original circuit</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/OptoIsoStop">Ccecil upstream project</a></td><td>Design source</td></tr>
    <tr><td><a href="https://github.com/Ccecil/OptoIsoStop/blob/d3ac5cda385b889e9ff92fccb7ba4577af19327c/README.md">Original README.md</a></td><td>Design source</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Appendix: electrical specifications {#electrical}

Only what the design source states or the circuit fixes. Blank cells are not specified.

{::nomarkdown}
<div class="xb-tablewrap"><table class="xb-elec">
  <thead><tr><th>Parameter</th><th>Applies to</th><th>Lower</th><th>Nominal</th><th>Upper</th><th>Basis and conditions</th></tr></thead>
  <tbody>
    <tr><td>Input voltage</td><td>Field input</td><td>3 V</td><td>—</td><td>24 V</td><td>Design intent, depends on links</td></tr>
  </tbody>
</table></div>
{:/nomarkdown}

## Design source {#origin}

Designed by Chris Cecil: [original design files](https://github.com/Ccecil/OptoIsoStop/tree/d3ac5cda385b889e9ff92fccb7ba4577af19327c). It was drawn for the Smoothieboard V2 Gadgeteer era; check every connection against your own controller.
See all boards on the [extension boards](/extension-boards) page.
