# Wiki machine identity audit

Capture: 2026-09-23. This audit reconciles the 125 dossiers in [`candidate-index.md`](candidate-index.md) against current repository text and the machine names in the pinout atlas. It distinguishes exact-text overlap from the harder claim of distinct model identity.

## Method and corpus

- Read the first-line machine titles and dossier identity statements from every per-machine file in this folder.
- Scanned 421 current Markdown and HTML files under `docs/` and `src/docs/`, excluding this wiki dossier folder, for literal dossier-title matches. This corpus includes the flat parallel machine-research files and the pinout atlas.
- Separately extracted and compared all 107 atlas profile labels for same-model, alias, and family overlap. Applied conservative exclusions to catalogue or family cases even where the wiki dossier is not an existing full dossier.
- Did not count repeated local installations of one model as separate machine identities. New revision suffixes are conservatively grouped with an existing family when the corpus already documents the adjacent generation.

This is a reproducible text and model-label screen, not a semantic proof against every synonym or unindexed attachment. Wiki identity pages sometimes omit model suffixes; aliases not represented in the inspected text may still exist.

## Known overlap exclusions

| Wiki dossier | Existing repository evidence | Treatment |
|---|---|---|
| `laser4diy.md` | Parallel forum research README names Laser4DIY | Exclude from new count; existing mention is not a full dossier |
| `printnc.md` | Parallel forum research README names PrintNC | Exclude from new count; existing mention is not a full dossier |
| `reprap-wallace.md` | 3D-printing landing page lists RepRap Wallace | Exclude from new count; existing mention is not a full dossier |
| `huxley-reprap.md` | 3D-printing landing page lists Huxley | Exclude conservatively; existing family/design name is already documented |
| `ultimaker-2.md` | Parallel forum dossier names Ultimaker 2 as donor electronics | Exclude from new count; existing mention is not a full dossier |
| `tormach-8l-dallas-makerspace.md` | Atlas includes Tormach 8L, serial LA10506+ | Exclude; same model already has an atlas record |
| `mpcnc.md` | Atlas includes MPCNC Primo with Jackpot | Exclude conservatively as a family/design overlap |
| `openbuilds-acro-coolpnp.md` | Atlas includes OpenBuilds ACRO + BlackBox | Exclude conservatively as an ACRO base overlap, despite the distinct CoolPnP application |
| `shapeoko-3xxl-dallas-makerspace.md` | Atlas includes Shapeoko 3 XXL with Carbide 3D OEM controller | Exclude; the Dallas wiki dossier enriches this existing exact-model record |
| `prusa-i3-mk4s-fablab-nurnberg.md` | Repository has Prusa i3 MK4 dossier | Exclude conservatively as the MK4/MK4S family overlap |

The text scan found four exact matches plus Huxley as a documented RepRap family name. The atlas/model-label review found Tormach 8L, MPCNC, OpenBuilds ACRO, and Shapeoko 3 XXL. The MK4S family exclusion was added in this pass after its local wiki inventory page was read.

## Count and status

| Measure | Count | Meaning |
|---|---:|---|
| Wiki machine dossiers | 125 | Sourced research records; includes catalogue-only entries and model-family enrichments |
| Known overlap exclusions | 10 | Listed above; excluded even when an existing repository mention is brief |
| Remaining identity candidates | 115 | No known exact or conservatively grouped repository identity overlap found in this screen |
| Appropedia catalogue-only among candidates | 29 | Unique names at catalogue-row evidence depth; not machine operation/pinout documentation |
| Other wiki-backed candidates | 86 | Have evidence beyond an Appropedia catalogue row; evidence depth varies and may still be inventory-level |

The screen produces 115 remaining candidate identities, which is above the requested threshold numerically. It does **not** establish 100 fully audited, richly documented, or installation-unique machines: the 29 catalogue-only records have identity-level evidence only, text scans can miss aliases, some community builds/designs are prototypes or retired, and only 86 remaining dossiers use other wiki evidence. Do not claim the threshold as fully accepted until remaining candidates are checked against source aliases and the intended interpretation of “machine.”

## Recent source additions

- FabLab Nürnberg's iModela page establishes model iM-01, permanent-loan status, restricted use, travel, material limits, workpiece mass, feed ranges, and command resolutions. It does not supply pin assignments. The [local Prusa inventory](https://wiki.fablab-nuernberg.de/w/3D-Drucker) lists three MK4S units; this is family-overlap evidence, not three added unique models.
- HSBNE's [router machine page](https://wiki.hsbne.org/tools/woodshop/cnc_sheet_router) and [operational guide](https://wiki.hsbne.org/tools/woodshop/cnc_sheet_router/operationalguide) describe local setup, homing, tool-offset measurement, file transfer, and work offsets. Conflicting spindle ratings and ambiguous physical fourth-axis configuration remain open.
- Dallas Makerspace's [Shapeoko 3XXL page](https://wiki.dallasmakerspace.org/wiki/Shapeoko_3XXL) supports a local machine dossier with operating limits and training context.
- Dallas Makerspace's [laser committee page](https://wiki.dallasmakerspace.org/wiki/Category%3ALaser) identifies “Big Thunder” as a Nova 63 and gives local dimensions, power, and common Nova operating notes.

No non-wiki linked page was used to support machine claims in these additions. See the individual dossiers for pinout, visual, age, and source limits.
