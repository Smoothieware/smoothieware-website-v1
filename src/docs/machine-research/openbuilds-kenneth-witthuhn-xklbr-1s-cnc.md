# Kenneth Witthuhn's XKLBR-1S OpenBuilds CNC router

**Machine identity:** Kenneth Witthuhn's individual Cartesian CNC router, named “witthuhnCNC XKLBR-1S” in his OpenBuilds build entry. The build page labels it complete. This is an owner-specific C-Beam/V-wheel machine, not a new OpenBuilds model.

**Novelty check:** On 2026-09-23, repository Markdown and HTML were searched for `Witthuhn`, `XKLBR-1S`, `witthuhnCNC`, and the build title. No matching machine dossier was found. The search identifies a separate physical owner build rather than another copy of the generic C-Beam design.

## Purpose and structure

Witthuhn said he began with an X-Carve, disliked its rigidity, and used it to make gantry plates for a first C-Beam-style CNC. He then designed this machine to keep its footprint compact relative to its useful work area. The build description emphasizes contained wiring, internal drag chains, and keeping electronics within the machine's outer envelope.

The forum build listing gives overall dimensions of 1110 × 1110 mm and 485 mm high. Its work-area line lists X = 813 mm, Y = 813 mm and Z = 90 mm, followed by “105mm Z-travel”; the listing does not define whether the 90 mm Z figure is usable clearance or how it relates to the 105 mm travel, so both values are retained as published.

## Owner-listed hardware

| Subsystem | Forum listing |
|---|---|
| Frame | 4080 C-Beam V-slot extrusion; 2040 V-slot extrusion supports the base |
| X/Y drive | Stainless T8 × 8 trapezoidal lead screws with anti-backlash arrangement |
| Z arrangement | Low-profile gantry using 2020 V-slot; owner says the shorter arrangement reduces leverage at the router and adds 20 mm to work area |
| Gantry plates | 5 mm carbon-fibre plates; other plate parts are aluminium |
| Linear guidance | Polycarbonate Xtreme V-wheels; owner says the C-Beam inner tracks reduce footprint and help keep dust and shavings off the V-slot track |
| Motors | NEMA 23, listed as 3 A and 270 oz-in; hand wheels on X, Y and Z for adjustment/calibration |
| Router | DeWalt D26200, 240 V, mounted in a 71 mm holder |
| Dust collection | 3D-printed dust shoe with 45 mm bristles |
| Motion controller | OpenBuilds BlackBox, 24 V, USB; listing describes four 3.2 A stepper drivers, maximum rating 4 A |
| Power supply | Transformer listed as 300 W, 12.5 A at 24 V |
| Workholding and base | 19.5 mm MDF with black gloss laminate on 2040 V-slot; four 160 mm aluminium hold-down clamps with M5 × 80 mm hand screws |
| Wiring | Listing specifies 4-core / 20 AWG and 2-core / 20 AWG wiring, with internal routing |
| Noise / safety features | Polyurethane feet; kill switches described as turning off the router and pausing G-code |

The phrase “transformer” is retained from the owner listing; the thread does not provide an electrical schematic or clarify the supply topology. No exact controller terminal assignment, switch contact wiring, or router relay connection is given in the retrieved forum material.

## Build and design changes

In a March 2020 discussion, Witthuhn said he used standard 8 mm pillow-block bearings at the far end of the T8 × 8 screws, with the NEMA 23 motor bearings supporting the other end. He said he centered the motors on their brackets and used solid aluminium couplings, and reported no backlash problems. This is the builder's report, not a measured backlash test.

The builder said the carbon-fibre plates were easier for him to work with and that he considered them two to five times as rigid as aluminium. He did not provide a test method or comparison measurements. He also explicitly warned readers that carbon-fibre dust is harmful. That forum warning is recorded as part of the build account; this dossier does not provide a fabrication procedure.

In the same exchange, he said he had recently redesigned the machine to route the drag chain more neatly and planned to post additional photographs later. The retrieved posts do not establish whether that revision changed the completed machine's dimensions, wiring, or controller map.

## Pinout, operation, and evidence limits

The listed BlackBox and router specifications are component-level descriptions only. The inspected build material does not show the BlackBox input/output terminals, motor-coil wiring, limit-switch contacts, kill-switch circuit, router switching terminals, or a complete electrical schematic. It also does not provide a controller configuration file, cutting parameters, material tests, or measured positioning accuracy. The stated kill-switch behavior should therefore be read as the author's feature description, not as a verified safety-circuit design.

OpenBuilds' indexed build entry lists several photographs, and the associated discussion lists two attached JPEGs, but direct access to the host returned `net::ERR_NAME_NOT_RESOLVED` in the browser and 502 from the page-fetch tool during this pass. The images could not be visually inspected or reproduced here. Consequently, this dossier makes no claims about visible wiring, cabinet construction, or machine condition beyond the forum text.

## Forum sources

1. OpenBuilds Builds, Kenneth Witthuhn, [“Openbuilds CNC (witthuhnCNC XKLBR-1S)”](https://builds.openbuilds.com/builds/openbuilds-cnc-witthuhncnc-xklbr-1s.9231/), build description and specification list, 25 February 2020. The host was unavailable for direct retrieval in this pass; the indexed forum build text was inspected.
2. OpenBuilds Forum, Kenneth Witthuhn, [same build discussion](https://builds.openbuilds.com/threads/openbuilds-cnc-witthuhncnc-xklbr-1s.15456/), posts 1, 3 and 5, 25 February–29 March 2020. Indexed owner posts describe screw supports/couplings, drag-chain brackets, the carbon-fibre plates, low-profile Z design, and his dust warning. Direct image access was unavailable, so attached photos were not used as visual evidence.
