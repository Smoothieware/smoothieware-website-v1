# OLSK Large CNC V1

**Evidence depth:** CNC mill; gantry. This dossier is grounded in the Appropedia wiki entry only; references from that page to vendor, GitHub, or other non-wiki pages were not used as evidence.

## Wiki-supported identity and facts

The wiki catalogue identifies Inmachines and lists 2500 × 1250 × 300 mm, with retractable and adjustable wheels.

## Use, visuals, and electrical connections

The captured wiki catalogue row does not provide a machine-specific operating procedure, connector table, electrical pinout, or transcribable wiring diagram for this model. Those items are recorded as unknown, rather than inferred from the model name or from the page's external links. The source may link further documentation, but that non-wiki content is outside this source-only research scope.

## Source

- [Tolocar / Open Source Machine Tools — Appropedia wiki](https://www.appropedia.org/Open_Source_Machine_Tools) — machine catalogue entry.


## Original-project source addendum — 2026-09-23

The [OLSK Large CNC V1 README](https://github.com/Open-Lab-Starter-Kit/OLSK-Large-CNC/blob/e7081c49c582b732ea6ab3c160bf557609754cfc/OLSK_Large_CNC_V1/README.md) identifies this generation as a 2500 × 1250 × 300 mm open CNC mill designed by InMachines Ingrassia GmbH. It describes NEMA 34 steppers, inductive homing sensors, Z tool sensor, air-cooled spindle, independent 220 V control box, modular power system, contactors, residual-current device and circuit breakers. These are design specifications, not proof of any local machine build.

The [V1 wiring schematic](https://github.com/Open-Lab-Starter-Kit/OLSK-Large-CNC/blob/e7081c49c582b732ea6ab3c160bf557609754cfc/OLSK_Large_CNC_V1/OLSK_Large_CNC_V1_Wiring_Schematic.pdf) is a one-page design drawing (PDF metadata creation date 2023-01-12; source repository commit `e7081c49c582b732ea6ab3c160bf557609754cfc`; captured PDF SHA-256 `3f14023fac39a61a7f7fb7e2fe36813fe3c93637d06ecf55d0e290696a7738ca`). It depicts machine/emergency/spindle switches, a tool sensor, USB interface, X/Y/Z and dual Y-left/Y-right drivers and motors, and X/Y/Z limits. The four external driver symbols label six logic terminals (`DIR±`, `PUL±`, `ENA±`), motor terminals (`A±`, `B±`), and supply marks (`VCC`, `GND`). These are schematic terminal names and relationships, not numbered machine-connector positions. No mating face, local build revision, fitted driver model, or installed controller configuration is established.

## SmoothieBox exterior wiring study

The current drawing places the four V1 external-driver interfaces beside the SmoothieBox: X to `DRVX`, Y-left to `DRVY`, Y-right to `DRVA`, and Z to `DRVZ`. Each logic input pair (`PUL±`, `DIR±`, `ENA±`) is shown with a dotted functional guess: the corresponding single-ended STEP/DIR/ENABLE output to the driver's `+` input and the adjacent SmoothieBox circuit GND to its `−` input. This is only a possible common-cathode arrangement for an optocoupled input. The V1 schematic does not specify that connection, input current, voltage threshold, polarity, isolation, or the installed driver's revision. It also does not establish configuring the A axis as a second Y motor or the needed Y-right direction setting.

All 24 dotted endpoints are individually marked as guesses. Before using any, identify the installed driver, confirm its optocoupler input requirements and polarity, verify the SmoothieBox output voltage/current and return behavior, and confirm the motion configuration. Keep driver `A±`/`B±` motor outputs and `VCC`/`GND` supply terminals open in this carrier diagram. The V1 spindle, inductive limits, tool sensor, mains switches, contactors and emergency-stop path are not given unsupported SmoothieBox assignments; do not replace the independent mains-rated safety chain with controller GPIO.

Keep any atlas drawing explicitly labelled **OLSK Large CNC V1 design schematic**. Do not use current V3 project details or assume the V1 drawing describes an installed machine.
