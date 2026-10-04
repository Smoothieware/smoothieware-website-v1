# OLSK Large CNC V1

**Evidence depth:** CNC mill; gantry. This dossier is grounded in the Appropedia wiki entry only; references from that page to vendor, GitHub, or other non-wiki pages were not used as evidence.

## Wiki-supported identity and facts

The wiki catalogue identifies Inmachines and lists 2500 × 1250 × 300 mm, with retractable and adjustable wheels.

## Use, visuals, and electrical connections

The captured wiki catalogue row does not provide a machine-specific operating procedure, connector table, electrical pinout, or transcribable wiring diagram for this model. Those items are recorded as unknown, rather than inferred from the model name or from the page's external links. The source may link further documentation, but that non-wiki content is outside this source-only research scope.

## Source

- [Tolocar / Open Source Machine Tools — Appropedia wiki](https://www.appropedia.org/Open_Source_Machine_Tools) — machine catalogue entry.


## Original-project source addendum — 2026-09-23

The [OLSK Large CNC V1 README](https://github.com/Open-Lab-Starter-Kit/OLSK-Large-CNC/blob/main/OLSK_Large_CNC_V1/README.md) identifies this generation as a 2500 × 1250 × 300 mm open CNC mill designed by InMachines Ingrassia GmbH. It describes NEMA 34 steppers, inductive homing sensors, Z tool sensor, air-cooled spindle, independent 220 V control box, modular power system, contactors, residual-current device and circuit breakers. These are design specifications, not proof of any local machine build.

The [V1 wiring schematic](https://github.com/Open-Lab-Starter-Kit/OLSK-Large-CNC/blob/main/OLSK_Large_CNC_V1/OLSK_Large_CNC_V1_Wiring_Schematic.pdf) is a one-page design drawing (PDF metadata creation date 2023-01-12). It depicts machine/emergency/spindle switches, a tool sensor, USB interface, X/Y/Z and dual Y-left/Y-right drivers and motors, and X/Y/Z limits. Driver labels include `DIR±` and `PUL±`; the drawing shows other drive/power terminals as labeled nets. These are schematic terminal names and relationships, not a numbered machine-connector map. No mating face, local build revision, or installed controller configuration is established.

Keep any atlas drawing explicitly labelled **OLSK Large CNC V1 design schematic**. Do not use current V3 project details or assume the V1 drawing describes an installed machine.
