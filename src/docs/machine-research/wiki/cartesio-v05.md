# Cartesio V0.5 3D printer

## Identity

The RepRap wiki identifies Cartesio V0.5 as a professional-grade FFF printer design. Its general page also shows related W0.9, M0.6 and LDMP configurations; this dossier covers the V0.5 identity only and does not count those as separate machines.

## Wiki evidence

- [RepRap Cartesio](https://reprap.org/wiki/Cartesio): model generation, intended tooling, features and images.
- [RepRap machine list](https://reprap.org/wiki/RepRap_Machines): design index.

## Operating information

The page describes a rigid design intended to accept multiple tools and says machines include fume extraction and filtration. It lists a dual contactless filament runout sensor and an anti-heater-ooze feature. The page links build and user instructions but does not give a full print-start procedure. A source recheck on 2026-09-28 found the linked RepRap Cartesio Build Manual is a red link rather than an existing manual page, while its external “Here” build-instructions link resolves to a MaukCC page that returns 404. No additional V0.5 wiring source was recovered through those links.

## Source-scoped machine interfaces

The model page names the fume-extraction/filtration unit, dual contactless filament-runout sensing, and anti-heater-ooze feature. These are functional descriptions only: the page supplies no connector designators, terminal numbers, mating views, electrical levels, polarity, or harness mapping. “Can hold multiple tools” is a mechanical capability, not proof of a fitted toolchanger or its signals. Keep each feature as an OPEN machine-side context group until a V0.5-specific schematic, manual page, or clear connector photograph establishes its actual contacts.

## Pinout and visuals

The wiki page includes images of several Cartesio variants and extruders. Its V0.5 description does not identify the installed controller, stepper-driver board, motor or endstop connectors, heater/thermistor contacts, fan outputs, sensor terminal positions, or external I/O. No version-specific connector pinout was found in the inspected text; do not infer controller contacts from the mechanical photographs or transfer assignments from W0.9, M0.6, or LDMP.

## Limits

The wiki's claimed toolchanger and material-extrusion features appear in a “things to come” list and are not treated as installed features. Verify the exact Cartesio generation before relying on operational details. This is model-level design evidence, not proof that an individual machine retains the listed features.
