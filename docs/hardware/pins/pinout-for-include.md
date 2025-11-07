---
permalink: /pinout-for-include
---

# Smoothieboard Pinout

This page shows the pinout diagrams for the Smoothieboard.

## Wiring Diagram

{::nomarkdown}
<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  Click the images below to view them at full size.
</sl-alert>
{:/nomarkdown}

{::nomarkdown}
<div style="text-align:center;margin:20px 0;">
  <a href="https://raw.githubusercontent.com/Bouni/smoothieboard-graphics/master/smoothieboard-wiring.png" target="_blank">
    <img src="https://github.com/Bouni/smoothieboard-graphics/blob/master/smoothieboard-wiring.png?raw=true" alt="Smoothieboard Wiring" style="min-width:640px;max-width:100%;height:auto;"/>
  </a>
  <p><em>Smoothieboard wiring diagram - click to enlarge</em></p>
</div>
{:/nomarkdown}

[View full size wiring diagram](https://raw.githubusercontent.com/Bouni/smoothieboard-graphics/master/smoothieboard-wiring.png)

## Pin Capabilities

{::nomarkdown}
<div style="text-align:center;margin:20px 0;">
  <a href="https://github.com/Bouni/smoothieboard-graphics/blob/master/smoothieboard-pin-capabilities.png?raw=true" target="_blank">
    <img src="https://github.com/Bouni/smoothieboard-graphics/blob/master/smoothieboard-pin-capabilities.png?raw=true" alt="Smoothieboard Pin Capabilities" style="min-width:640px;max-width:100%;height:auto;"/>
  </a>
  <p><em>Smoothieboard pin capabilities - click to enlarge</em></p>
</div>
{:/nomarkdown}

[View full size pin capabilities diagram](https://github.com/Bouni/smoothieboard-graphics/blob/master/smoothieboard-pin-capabilities.png?raw=true)

Also see the [pin usage table](lpc1769-pin-usage) for detailed information about each pin.

## Important Notes

{::nomarkdown}
<sl-alert variant="warning" open>
  <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
  <strong>Do not use endstop inputs as outputs</strong> (for example to control a solid state relay), this will not work.
</sl-alert>
{:/nomarkdown}
