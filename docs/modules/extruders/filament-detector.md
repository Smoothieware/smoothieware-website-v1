---
permalink: /filament-detector
---


# Filament detector

The filament detector module allows you to add automated hardware to your machine to check that the filament is advancing correctly.

This is done by adding an encoder, that rotates as the filament advances, and sends pulses to the Smoothieboard.

The Smoothieboard then compares those pulses against the current theoretical position of the extruder.

If a difference is detected, the filament is not advancing correctly, which means that there is a problem with the pushing of the filament.

<sl-alert variant="neutral" open>
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  Smoothie uses the host command `action:pause` to tell the host to stop sending gcode.

  Currently **ONLY** OctoPrint, Pronterface, Smoopi, and printing from SD card support this.
</sl-alert>

## M-Code Commands

{::nomarkdown}
- Use <mcode>M404</mcode> command to set filament detector parameters: S seconds per check, P pulses per mm
- Use <mcode>M405</mcode> command to disable filament detector
- Use <mcode>M406</mcode> command to enable filament detector
- Use <mcode>M407</mcode> command to check if the filament detector gets triggered and to calibrate
{:/nomarkdown}

## Configuration options

| Option | Example value | Explanation |
| ------ | ------------- | ----------- |
| <setting v1="filament_detector.enable"></setting> | `true` | This module is activated only if this is set to `true` |
| <setting v1="filament_detector.encoder_pin"></setting> | <pin>2.11</pin> | This is the pin the encoder is connected to. Must be an interrupt pin |
| <setting v1="filament_detector.bulge_pin"></setting> | <pin>1.31</pin> | OPTIONAL This is the pin the bulge switch is connected to. If this switch is triggered (by a bulge in the filament) and the filament is moving, this will trigger an alarm |
| <setting v1="filament_detector.seconds_per_check"></setting> | `2` | How many seconds between filament position checks, must be long enough for several pulses to be detected, but not too long |
| <setting v1="filament_detector.pulses_per_mm"></setting> | `0.5` | The number of pulses the encoder produces for every millimeter of filament movement |

## Calibration

{::nomarkdown}
Disable the detector with <mcode>M405</mcode>, pull a known length of filament through the detector then see how many pulses were detected with <mcode>M407</mcode>.

Set the <setting v1="filament_detector.pulses_per_mm"></setting> (in config) to the calculated number (e.g., 20mm generated 50 pulses, so pulses/mm is 50/20= 2.5)

You can set the steps per mm temporarily with <mcode>M404</mcode> P2.5 to check before changing it in config.

Enable the detector with <mcode>M406</mcode> and test with a small print.
{:/nomarkdown}

If the detector mis-triggers too often reduce the <setting v1="filament_detector.pulses_per_mm"></setting> and/or increase the check time.

## Hardware

The hardware for this is usually made of an R/C car wheel encoder like this [Wheel Encoder Kit for Robot Car](https://www.amazon.com/Wheel-Encoder-Kit-Robot-Car/dp/B00NPWGEIM).

A 3mm bolt goes through it and the filament runs over the shaft and turns the encoder wheel.

The module counts the encoder pulses and compares it to how far the filament has moved, if there are no pulses then it triggers the suspend.

This is better than a simple switch as it only triggers if the filament was actually extruded, and only triggers if no pulses were detected.

It will not trigger if there was no extrusion.

Reference model on **Thingiverse**: [Filament Tracking System](https://www.thingiverse.com/thing:2515750)

Alternative card/model on **Cults3D**: [Filament Tracking System](https://cults3d.com/en/tool/filament-tracking-system)
