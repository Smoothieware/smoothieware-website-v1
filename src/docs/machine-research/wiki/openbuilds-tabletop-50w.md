# OpenBuilds TableTop 50W

**Source review: 2026-09-28.** Appropedia identifies a 300 × 600 mm, nominal 50 W CO₂ laser cutter and names a Ruida controller. A separately published OpenBuilds build with the same title and credited author Pedro Fernandez/pedrofernandez adds controller and machine-assembly detail. This is strong matching build context, but does not prove every catalogue copy has the same installed revision. No numbered machine connector contacts or SmoothieBox routes are admitted; OPEN does not mean electrically open or NC.

## Catalogue identity and matching owner build

The [Appropedia catalogue](https://www.appropedia.org/Open_Source_Machine_Tools) attributes this TableTop 50W entry to Pedro Fernandez and reports a stable enclosure and Ruida controller. The [OpenBuilds owner build](https://builds.openbuilds.com/builds/openbuilds-table-top-50w-co2-laser-cutter-engraver.8688/), published 2019-10-13 by `pedrofernandez`, has the same Table Top 50W title and describes a 12 × 24 in working area (609.6 × 304.8 mm). The shared author/title, matching 300 × 600 mm nominal work area and Ruida control support treating it as relevant owner-build context, not as proof that all copies or the catalogue's particular unit share its hardware.

## OpenBuilds build page: machine groups, no terminal schedule

The indexed owner-build text names a Ruida RDC6445G main controller and display, X and Y NEMA 17 motors, four separate Z motors with external TB6600/DM542 stepper drivers, a HY-T50 CO₂ laser power supply, two Meanwell 24 V supplies, two water-flow indicators with temperature probes, and an analog ammeter. The author describes the Z step/direction signal as cloned to two driver groups. These are source-reported assemblies for that build. The text supplies no connector designators, terminal numbers, mating view, cable conductor map, or numbered controller-to-machine schedule. Its prose does not establish the pins or polarity at either end of a cable.

| Interface group | Admitted evidence | Still OPEN |
| --- | --- | --- |
| Ruida controller and display | RDC6445G is named in the parts list; the text describes a main board and display panel. | Board revision, connector identities, every terminal position, and the catalogue unit's fitted controller. |
| Motion | X/Y motor roles, four Z motors, and two external driver groups are described for the owner build. | Motor winding contacts, driver input/output terminals, X/Y/Z connector positions, limit contacts, and any fitted unit transfer. |
| CO₂ process | HY-T50 laser supply and 40–50 W tube are listed. | Every high-voltage and control contact, ratings, polarity, interlocks, and cable endpoints. |
| Auxiliary groups | Water-flow indicators with temperature probes and an ammeter are named. | Connector positions, signal/return functions, safety-loop placement, and wiring. |
| DB25 / service | No DB25 or numbered USB/Ethernet connector map is transcribed from the supplied text. | Housing types, contact numbers, mating views, and service wiring. |

No grounded two-ended pin hypothesis exists, so the current diagram remains OPEN with zero dotted GUESS paths. If later source evidence establishes an actual DB25 on this machine, it must be drawn as a machine-side peripheral that SmoothieBox connects into; none is admitted from this build page.

## Retrieval limits and excluded transfers

The build-page text was recovered through the search index on 2026-09-28; direct page retrieval returned HTTP 502. Its attachment links include build photographs, but the controller-board photographs could not be fetched for inspection. Search-generated image descriptions are not used to invent connector labels or contact positions. No pin schedule from another Ruida revision, another laser, or a generic controller manual is transferred to this build.

## Retained original wiki-only dossier

<details>
<summary>Original wiki-only research; retained verbatim</summary>

# OpenBuilds TableTop 50W

**Evidence depth:** CO2 laser cutter. This dossier is grounded in the Appropedia wiki entry only; references from that page to vendor, GitHub, or other non-wiki pages were not used as evidence.

## Wiki-supported identity and facts

The wiki catalogue lists 300 × 600 mm, 50 W CO2, a stable case, and a Ruida controller. It notes that some source files are missing.

## Use, visuals, and electrical connections

The captured wiki catalogue row does not provide a machine-specific operating procedure, connector table, electrical pinout, or transcribable wiring diagram for this model. Those items are recorded as unknown, rather than inferred from the model name or from the page's external links. The source may link further documentation, but that non-wiki content is outside this source-only research scope.

## Source

- [Tolocar / Open Source Machine Tools — Appropedia wiki](https://www.appropedia.org/Open_Source_Machine_Tools) — machine catalogue entry.

</details>
