# LightObject Solo II + LO-X7s operating-manual evidence

Checked: 2026-09-27. Atlas profile: `laserplot-13`, LightObject Solo II + LO-X7s DSP.

## Source scope

The LightObject download index links the Solo II operation manual, revision 0.1, published 2021-05-26. The manufacturer currently serves it under the `Instruction_manual/Laser Machines/` path. The previously cited URL without that directory returned HTTP 404. Local capture: `/tmp/atlas-lightobject-solo2-manual-20260927.pdf`, SHA-256 `230914dfe3af9bd541e85ccd9eee3476aa589c111005c057c40950f63f1db5b9`.

LightObject's Solo II product page identifies the LO-X7s controller, a default 40 W CO2 tube, and an optional powered Z table. The operating manual says the machine may use an LO-X7s controller (“e.g.”), and gives computer connection steps for USB/LaserCAD and LAN/IP configuration. It does not identify the installed controller revision, exterior USB or Ethernet connector form, cable pin order, motor-driver input, limit contact, laser-PSU terminal, or controller signal pin.

## External equipment and safety boundary

The manual names the laser tube, water chiller and tubing, air pump or compressor, and exhaust hose/fan. Printed page 14 says the air-compressor on/off switch should be nearby and preferably on the same circuit as the chiller and exhaust fan so they operate together. This is not a low-voltage control-pin map and is not a SmoothieBox relay recommendation. The safety section calls out the machine power switch and emergency-stop button. Tube instructions distinguish its high-voltage and low-voltage sides, but do not map a controller or supply connector.

Accordingly, `laserplot-13` retains the existing published group labels and adds one manufacturer-reference context card for the named equipment/safety boundary. It has no individual contact circles and no SmoothieBox route. Do not infer contacts from USB standards, the product photograph, a different LO-X7s installation, or generic CO2-laser wiring.

## Sources

- LightObject, [Download index](https://lightobject.com/download/), “Instruction Manual / Laser Machine / Solo II”.
- LightObject, [Solo II operation manual rev. 0.1](https://lightobject.com/content/Instruction_manual/Laser%20Machines/Solo2_manual_v0_1_20210526.pdf), captured as noted above; pages 7–10, 14–15 inspected for external equipment and connections.
- LightObject, [Solo II product page](https://lightobject.com/solo-ii-500x300-19-x-11-8-laser-desktop/), controller and machine-option description.
