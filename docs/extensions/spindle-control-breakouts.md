---
layout: default
title: "SPINDLE CONTROL BREAKOUTS (bouni)"
description: "Compare analog, RS-232 and RS-485 spindle connections."
permalink: /extensions/spindle-control-breakouts
redirect_from:
  - /extensions/bouni-spindle-module-boards
---

{% include _includes/extension-board-page.html %}

{::nomarkdown}
<div class="xb-hero">
  <div>
    <p class="xb-eyebrow">Extension board · Spindle</p>
    <h1 id="spindle-control-breakouts">SPINDLE CONTROL BREAKOUTS (bouni)</h1>
    <p class="xb-lead">Three boards for controlling a variable-frequency drive. Choose the one that matches the control input of your drive.</p>
  </div>
</div>

<div class="xb-stats">
  <div class="xb-stat"><b>3</b><span>boards</span></div>
  <div class="xb-stat"><b>0–10 V</b><span>analog board</span></div>
  <div class="xb-stat"><b>RS-485</b><span>serial board</span></div>
  <div class="xb-stat"><b>RS-232</b><span>three-wire serial</span></div>
</div>

<nav class="xb-nav" aria-label="On this page">
  <a href="#boards">Boards</a>
</nav>
{:/nomarkdown}

## Boards {#boards}

{::nomarkdown}
<figure class="xb-fig"><a href="/extensions/analog-spindle-control-breakout"><img src="/images/extensions/analog-spindle-control-breakout/analog-spindle-control-breakout-diagram.webp" alt="Top view of the ANALOG SPINDLE CONTROL BREAKOUT (bouni) board" style="max-width:420px;width:100%"></a><figcaption>ANALOG SPINDLE CONTROL BREAKOUT (bouni), top view.</figcaption></figure>
<figure class="xb-fig"><a href="/extensions/rs485-spindle-control-breakout"><img src="/images/extensions/rs485-spindle-control-breakout/rs485-spindle-control-breakout-diagram.webp" alt="Top view of the RS485/SPINDLE CONTROL BREAKOUT (bouni) board" style="max-width:420px;width:100%"></a><figcaption>RS485/SPINDLE CONTROL BREAKOUT (bouni), top view.</figcaption></figure>
<div class="xb-table-scroll" tabindex="0">
<table>
  <thead><tr><th>Board</th><th>Drive input</th><th>Smoothieware support</th></tr></thead>
  <tbody>
    <tr><td><a href="/extensions/analog-spindle-control-breakout">ANALOG SPINDLE CONTROL BREAKOUT (bouni)</a></td><td>Analog speed voltage and run contact</td><td>Hardware PWM switch</td></tr>
    <tr><td><a href="/extensions/rs485-spindle-control-breakout">RS485/SPINDLE CONTROL BREAKOUT (bouni)</a></td><td>Differential serial bus</td><td>No drive protocol in SmoothieV2</td></tr>
    <tr><td><a href="/extensions/rs232-breakout">RS232 BREAKOUT (bouni)</a></td><td>Three-wire serial link</td><td>No drive protocol in SmoothieV2</td></tr>
  </tbody>
</table>
</div>
{:/nomarkdown}

See all boards on the [extension boards](/extension-boards) page.
