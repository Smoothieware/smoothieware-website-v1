# 3DMakerWorld Artifex (legacy design, not Artifex 2)

## Identity and applicability

The RepRap Artifex record describes 3DMakerWorld’s open-source desktop FFF printer, based on MendelMax 1.5+/2.0 but modified as a separate design. This atlas entry is a design-source study; no particular physical unit, serial, installed board revision, harness revision, or package configuration has been identified.

The current 3DMakerWorld support page exposes documents and firmware for **Artifex 2**. Those later-family instructions are not treated as evidence for this legacy Artifex entry.

## Source-backed design facts

The versioned RepRap Artifex page lists RAMBo electronics, a MakerGear hot end with a 0.35 mm nozzle, a 24 V / 200 W heated bed, three 24 V cooling fans (filament drive, print surface, electronics), and 110/220 VAC power requirements. It describes X/Y motion on linear rails and GT2 belts and Z motion on precision shafts and ACME leadscrews. These are model-design facts; they do not establish external connectors, contact counts, individual cavity roles, polarity, ratings at a connector, or fitted wiring.

The RepRap page links a January 2014 Artifex User Manual. Its third-party mirror is Cloudflare-blocked to direct retrieval; indexed text extracts identify the Artifex document and RAMBo-based electronics, but do not expose a complete pin-by-pin harness schedule. The manufacturer’s older PDF URL now redirects to its current site. This is a retrieval limit, not proof that the complete manual contains no further wiring information, and it does not establish the installed unit.

The upstream Artifex GitHub repository contains mechanical STL and CAD files plus a README linking the build and user manuals. It does not contain an electrical schematic or harness pin schedule in its published file tree. The public Artifex design files therefore do not resolve external contact numbering.

## Diagram and pinout boundary

The current diagram keeps the printer as a machine-side peripheral beside all 82 individually labeled SmoothieBox exterior positions and four separately labeled SmoothieBox service ports (USB device, USB host, Ethernet, microSD). Those four ports belong to the SmoothieBox case diagram; they are not Artifex connectors. It lists six source-reference cards: RAMBo electronics, MakerGear hot end, heated bed, three cooling-fan functions, the stated AC supply requirement, and X/Y/Z mechanical-motion context. The AC and motion cards are context, not identified mating connectors. None has a published Artifex-side mating connector/contact schedule in the accessible captured sources, so all six remain OPEN with zero numbered machine contacts and zero routes. No DB25 is identified. The visible DOTTED = GUESS legend remains, but this profile has no dotted guesses.

RAMBo’s board-level terminals and firmware roles are not substituted for the Artifex’s undocumented external harness. Likewise, the hot end, bed, fans, and mechanical axes are not mapped to SmoothieBox STEP/DIR/ENABLE, MOSFET, thermistor, endstop, ground, or power terminals. The published 110/220 VAC requirement is not an instruction to connect mains to the SmoothieBox.

## Evidence sources

- [RepRap Artifex, revision 114817](https://reprap.org/wiki/Artifex?oldid=114817): model description, electronics and electrical/mechanical specifications, and links to the named primary documents.
- [Artifex User Manual (January 2014 mirror)](https://manualzilla.com/doc/5974859/desktop-3d-printer): document text and model-specific operation; third-party hosted copy. The manufacturer’s linked legacy PDF URL is listed at the RepRap source but currently redirects to the current storefront.
- [3DMakerWorld Artifex design repository](https://github.com/3dmakerworld/artifex): public mechanical CAD/STL file tree and README; no electrical schematic or harness contact schedule found in the published tree.
- [3DMakerWorld Support](https://3dmakerworld.com/pages/support): current Artifex 2 material, kept separate from this legacy Artifex profile.

## Limits and next evidence needed

A unit-specific pinout requires an identified physical revision and source evidence that numbers each external connector contact (or clear, attributable contact-face photographs plus continuity/measurement records). Until then, all Artifex-side contact assignments remain OPEN. This is a documentation boundary, not a wiring-ready diagram.
