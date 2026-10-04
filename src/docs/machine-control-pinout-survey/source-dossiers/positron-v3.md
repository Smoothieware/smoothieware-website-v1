# Positron V.3

**Evidence depth:** open-source 3D printer; FDM; foldable portable design. Identity and catalogue attributes below come from the Appropedia wiki entry. Electrical design-reference details are separately scoped to the cited creator schematic and do not establish the installed machine's wiring.

## Wiki-supported identity and facts

The wiki catalogue lists a 180 × 185 × 180 mm build volume and describes an inverted print orientation and foldable portable form. Its linked wiki field is visibly a placeholder-domain URL, so no linked design documentation is treated as verified.

## Use, visuals, and electrical connections

The captured wiki catalogue row does not provide a machine-specific operating procedure, connector table, electrical pinout, or transcribable wiring diagram for this model. Those items are recorded as unknown, rather than inferred from the model name or from the page's external links. The source may link further documentation, but that non-wiki content is outside this source-only research scope.

## Source

- [Tolocar / Open Source Machine Tools — Appropedia wiki](https://www.appropedia.org/Open_Source_Machine_Tools) — machine catalogue entry.


## Source-scoped research addendum — 2026-09-23

The creator's repository contains a one-sheet **Positron V3 support-PCB** schematic. Its title block says revision 1.0 and date 2022-05-01; the repository PDF filename contains `2022-05-20`, so preserve both dates rather than treating the filename date as the drawing date. In the drawing, U7 is a `1×6 2.2 mmP Magnetic Pogo Pin Connector 3A` for the bed:

| U7 schematic contact | Net |
|---:|---|
| 1 | `BedTempSense` |
| 2 | `BedTempGND` |
| 3, 4 | `BedGND` |
| 5, 6 | `BedVCC` |

The associated connection drawing labels the bed heater 24 V, 80–110 W with an NTC. U7 is a **support-PCB design header**, not proof of an installed board or harness. The schematic does not establish which physical side is viewed or the orientation of a mating receptacle. Other numbered headers in this file belong to the support PCB's LED, Raspberry Pi, display and shield circuits; they are not U7 contacts or SKR Pico machine-interface pins.

The current [Positron3D release repository](https://github.com/Positron3D/Positron) describes V3.2.2 as a later release developed with LDO and points to the [LDO Positron Hardware repository](https://github.com/MotorDynamicsLab/PositronHardware) for wiring and pin references. This later revision is not proven to match the Appropedia Positron V.3 entry. Its mainboard and toolhead pin assignments are deliberately excluded from this profile.

Sources: [KRALYN Positron V3 support-PCB schematic, Rev 1.0](https://github.com/KRALYN/PositronV3/blob/main/PCB%20design%20Files/Schematic_Positron%20V3%20PCB_2022-05-20.pdf) and [connection drawing, Rev 1.0 dated 2022-05-03](https://github.com/KRALYN/PositronV3/blob/main/Electronics/Positron%20V3%20Wiring%20diagram.png). The schematic PDF was retrieved and visually inspected; its title block supplies the drawing date and revision.
