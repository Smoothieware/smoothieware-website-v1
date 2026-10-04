# OLSK Small CNC V.2

**Evidence depth:** CNC mill; gantry. This dossier is grounded in the Appropedia wiki entry only; references from that page to vendor, GitHub, or other non-wiki pages were not used as evidence.

## Wiki-supported identity and facts

The wiki catalogue identifies Inmachines as the development entity and lists 400 × 500 × 140 mm, an additional tool changer, and a coolant system.

## Use, visuals, and electrical connections

The captured wiki catalogue row does not provide a machine-specific operating procedure, connector table, electrical pinout, or transcribable wiring diagram for this model. Those items are recorded as unknown, rather than inferred from the model name or from the page's external links. The source may link further documentation, but that non-wiki content is outside this source-only research scope.

## Source

- [Tolocar / Open Source Machine Tools — Appropedia wiki](https://www.appropedia.org/Open_Source_Machine_Tools) — machine catalogue entry.


## Original-project source addendum — 2026-09-23

The [OLSK Small CNC V2 wiring schematic](https://github.com/Open-Lab-Starter-Kit/OLSK-Small-CNC/blob/main/OLSK_Small_CNC_V2/OLSK_Small_CNC_V2_Wiring.pdf) is a one-page design drawing (PDF metadata creation date 2024-03-05). It shows an electronics box, X/Z and dual Y-left/Y-right drivers and motors, X/Y/Z endstops, emergency buttons, a router, Z tool sensor, and labelled air/coolant-related signals. Driver blocks show terminal/net names such as `PUL±`, `DIR±`, `ENA±`, `A±` and `B±`; the drawing does not supply a numbered connector-contact schedule or mating view.

Use this as the V2 design schematic only. The catalogue-listed tool changer and coolant system do not establish their contacts or an installed configuration. Do not turn the schematic's labelled driver terminals into machine connector pins.
