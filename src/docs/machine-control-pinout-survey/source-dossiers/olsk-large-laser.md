# OLSK Large Laser

**Evidence depth:** CO2 laser cutter. This dossier is grounded in the Appropedia wiki entry only; references from that page to vendor, GitHub, or other non-wiki pages were not used as evidence.

## Wiki-supported identity and facts

The wiki catalogue identifies Inmachines and lists a 1000 × 700 mm format with a 75 W CO2 laser.

## Use, visuals, and electrical connections

The captured wiki catalogue row does not provide a machine-specific operating procedure, connector table, electrical pinout, or transcribable wiring diagram for this model. Those items are recorded as unknown, rather than inferred from the model name or from the page's external links. The source may link further documentation, but that non-wiki content is outside this source-only research scope.

## Source

- [Tolocar / Open Source Machine Tools — Appropedia wiki](https://www.appropedia.org/Open_Source_Machine_Tools) — machine catalogue entry.


## Original-project source addendum — 2026-09-23

The [OLSK Large Laser V1 Board2022 schematic](https://github.com/Open-Lab-Starter-Kit/OLSK-Large-Laser/blob/main/OLSK_Large_Laser_V1/OLSK_Large_Laser_V1_Wiring%20Schematic_Board2022.pdf) is a one-page drawing whose PDF metadata creation date is 2024-04-25. It depicts X/Y drivers and endstops, a window sensor, chiller sensor, laser power supply, emergency and mains/power circuitry. The laser-supply block uses printed terminal labels including `5V`, `IN`, `G`, `P`, `L`, `H`, `N`, `V+` and `V−`. The motor-driver drawing uses `PUL±`, `DIR±` and `ENA±` terminal names.

Those labels describe the schematic's terminals and nets; they are not numbered connector contacts and do not identify a physical mating view. The source filename says `Board2022`, while the PDF metadata date is 2024; treat this as a named V1 design reference, not as proof of a particular board or local build. The Appropedia 75 W / 1000 × 700 mm catalogue values remain catalogue claims.

The original [OLSK Large Laser V1 README](https://github.com/Open-Lab-Starter-Kit/OLSK-Large-Laser/blob/main/OLSK_Large_Laser_V1/README.md) and the separate current-generation project files should be checked before selecting a design revision. No installed hardware, connector-face orientation, or complete machine terminal map is established here.


### V1 controller-source conflict

The [V1 README](https://github.com/Open-Lab-Starter-Kit/OLSK-Large-Laser/blob/main/OLSK_Large_Laser_V1/README.md) describes its controller as MKS-SBASE with grbl-LPC, but its firmware link is named `grblHAL_Teensy4_OLSK_Large_Laser.zip`. Together with the `Board2022` filename and the schematic PDF's 2024-04-25 metadata date, this leaves the controller/firmware-to-schematic relationship unresolved. Keep the diagram and firmware claims revision-labelled; do not infer a single verified V1 electronics build from these references.
