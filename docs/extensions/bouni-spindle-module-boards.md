---
layout: default
title: "Bouni spindle control"
description: "Choose between the analog and RS-485 spindle control boards."
permalink: /extensions/bouni-spindle-module-boards
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Spindle</p>
    <h1 id="bouni-spindle-module-boards">Bouni spindle control</h1>
    <p class="xb-lead">Two boards for controlling a variable-frequency drive. Choose the one that matches the control input of your drive.</p>
  </div>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>2</b><span>boards</span></div>
  <div class="xb-stat"><b>0–10 V</b><span>analog board</span></div>
  <div class="xb-stat"><b>RS-485</b><span>serial board</span></div>
  <div class="xb-stat"><b>isolated</b><span>both boards</span></div>
</div>

<nav class="xb-nav" aria-label="On this page">
  <a href="#boards">Boards</a>
</nav>
{:/nomarkdown}

## Boards {#boards}

{::nomarkdown}
<figure class="xb-fig"><a href="/extensions/bouni-analog-spindle-control"><img src="/images/extensions/bouni-analog-spindle-control/bouni-analog-spindle-control-diagram.webp" alt="Top view of the Bouni analog spindle control board" style="max-width:420px;width:100%"></a><figcaption>Bouni analog spindle control, top view.</figcaption></figure>
<figure class="xb-fig"><a href="/extensions/bouni-rs485-spindle-control"><img src="/images/extensions/bouni-rs485-spindle-control/bouni-rs485-spindle-control-diagram.webp" alt="Top view of the Bouni RS-485 spindle control board" style="max-width:420px;width:100%"></a><figcaption>Bouni RS-485 spindle control, top view.</figcaption></figure>
<div class="xb-table-scroll" tabindex="0">
<table>
  <thead><tr><th>Board</th><th>Drive input</th><th>Smoothieware support</th></tr></thead>
  <tbody>
    <tr><td><a href="/extensions/bouni-analog-spindle-control">Bouni analog spindle control</a></td><td>Analog speed voltage and run contact</td><td>Hardware PWM switch</td></tr>
    <tr><td><a href="/extensions/bouni-rs485-spindle-control">Bouni RS-485 spindle control</a></td><td>Differential serial bus</td><td>No drive protocol in SmoothieV2</td></tr>
  </tbody>
</table>
</div>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
