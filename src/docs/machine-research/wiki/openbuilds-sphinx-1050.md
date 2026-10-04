# OpenBuilds Sphinx 1050

**Source review: 2026-09-28.** Generic catalogue identity; no installed controller or machine contact map established. Zero admitted machine/reference contact positions and zero SmoothieBox routes or guesses. OPEN records an unresolved route, not an electrically open or NC pin.

## Source boundary

The [Appropedia catalogue](https://www.appropedia.org/Open_Source_Machine_Tools) names OpenBuilds, SketchUp and 834 × 325 × 85 mm. It does not identify fitted electronics. The [OpenBuilds build page](https://builds.openbuilds.com/builds/openbuilds-sphinx-1050-20-x-40.7196/), published by Mark Carew on 2019-12-13, distinguishes its variant from the original Sphinx and allows different controller packages. Its xPRO v3/v4 links and OpenCase tutorial are references, not the catalogue unit's configuration.

The currently indexed parts list also offers a BlackBox controller, four NEMA 23 motors, DeWALT DWP611 router and 24 V Meanwell supply as options. The page's publication date does not establish when those entries were added. No board revision or shared harness is established.

## Build-page parts context; no contact numbering

The following is a parts inventory, not an installed-unit schedule. Metric lengths are exact conversions of the source's feet labels. No individual core has an admitted source mark, function, colour, cavity position or axis assignment.

| Source SKU | Quantity | Item | Length per item | Source length |
| --- | --- | --- | --- | --- |
| 2556 | 2 | 4C extension | 0.9144 m | 3 ft |
| 2557 | 1 | 4C extension | 2.1336 m | 7 ft |
| 2558 | 1 | 4C extension | 3.9624 m | 13 ft |
| 2865 | 1 | 3C extension | 2.1336 m | 7 ft |
| 2870 | 2 | 3C extension | 3.9624 m | 13 ft |
| 2545-By-The-Foot | 1 | 2C wire length | 5.4864 m | 18 ft |
| 2805 | 3 | Limit-switch kit | not specified | not specified |

Keep these items in prose/tables; do not turn cable counts into numbered connector contacts or pair cables with motors/switches by matching quantities.

## Exhaustive admitted contact boundary

| Interface | Disposition |
| --- | --- |
| Motor controls / axes | X/Y/Z are logical motion labels. Motor phases, driver input contacts, motor-axis binding and any A-axis endpoint are unidentified. |
| Limit switches | Three kits are BOM context only. X/Y/Z min/max assignment, connector positions, signal, return/GND, supply and NO/NC behavior are unidentified. |
| Probe | A firmware probe setting is not evidence of a fitted probe, connector or ground contact. |
| Spindle / laser | The optional router and firmware spindle/laser settings establish no control terminals, polarity, isolation, interlock or laser installation. |
| Power / safety | The optional 24 V supply names a product class, not terminals. Mains, DC contacts, protective earth, chassis bonds and E-stop/safety circuits remain unidentified. |
| USB / service | No machine-side USB pin map or installed service connector is admitted. The four drawn service ports belong to the proposed SmoothieBox case only. |
| DB25 / other connectors | No source-supported DB25 is admitted; do not draw a 25-position form. Other machine housings, mating views and numbered endpoints remain unidentified. |

The admitted machine and controller-reference pin sets are empty. This is an evidence limit, not a claim that the machine has no contacts. Motor STEP/DIR/ENABLE functions on the case cannot be mapped to unidentified driver inputs or motor coil outputs. No grounded two-ended hypothesis exists; zero dotted GUESS paths is the required result.

The current case drawing retains 82 proposed exterior contacts in 24 banks, including each axis STEP/DIR/ENABLE and return contact and each min/max signal/GND/supply contact, plus four service-port symbols. Its separate historical 227-position schedule describes V2 Core P1 design contacts; those counts must not be combined.

## Retrieval and excluded evidence

The build-page text was recovered through the search index on 2026-09-28; direct page retrieval returned HTTP 502. Its two named xPRO illustrations remain untranscribed. The PNG attachment at [OpenBuilds attachment 33754](https://builds.openbuilds.com/attachments/openbuilds-xpro-wiring-diagram-png.33754/) could not be recovered for visual inspection. Search-generated image descriptions are not evidence of labels, positions or direction. The LeadMachine-named JPG is likewise excluded. No label is transferred from another machine or controller revision.

## Retained original wiki-only dossier

<details>
<summary>Original wiki-only research; retained verbatim</summary>

# OpenBuilds Sphinx 1050

**Evidence depth:** CNC mill; gantry. This dossier is grounded in the Appropedia wiki entry only; references from that page to vendor, GitHub, or other non-wiki pages were not used as evidence.

## Wiki-supported identity and facts

The wiki catalogue lists 834 × 325 × 85 mm and identifies OpenBuilds as the developer. It names SketchUp as a source-file format; no controller or motor assignments are provided in this entry.

## Use, visuals, and electrical connections

The captured wiki catalogue row does not provide a machine-specific operating procedure, connector table, electrical pinout, or transcribable wiring diagram for this model. Those items are recorded as unknown, rather than inferred from the model name or from the page's external links. The source may link further documentation, but that non-wiki content is outside this source-only research scope.

## Source

- [Tolocar / Open Source Machine Tools — Appropedia wiki](https://www.appropedia.org/Open_Source_Machine_Tools) — machine catalogue entry.

</details>
