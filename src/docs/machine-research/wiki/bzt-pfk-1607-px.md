# BZT PFK 1607 PX at Happylab

Research reviewed: 2026-09-27. Status: machine identity and selected specifications are source-backed; controller revision and installation-specific electrical contacts remain unknown.

## Identity and installation variants

Happylab documents the BZT PFK 1607 PX for Vienna and Berlin. Keep their specifications separate. The shared [Happylab machine page](https://wiki.happylab.at/w/BZT_Fr%C3%A4se) lists Vienna travel as X=1666 mm, Y=750 mm, Z=250 mm and Berlin Z travel as 135 mm. It lists three 4.2 A stepper motors and describes a USBCNC/VCarve workflow.

The shared page lists Vienna's HF spindle at 1.0 kW, 3500–24,000 rpm and Berlin's Elte TMPE2 9/2 RR at 1.1 kW. The [Berlin equipment page](https://www.happylab-berlin.de/equipment/details/2) instead describes a 1.0 kW HF spindle, max 24,000 rpm. This is an unresolved source discrepancy; do not combine or silently select the Berlin ratings as the verified installed spindle.

The manufacturer [PFK family page](https://www.bzt-cnc.de/produkte/baureihe-pfk) describes configurable options, including 4.2 A or optional 6 A drives, mechanical reference switches, optional switched 230 V outlets, and USB or Ethernet control connections. It does not establish which options or controller revision are fitted at Happylab.

## Controller and interface scope

The installed controller revision and machine-side connector identities have not been established. No installation-specific numbered machine/controller contact map is verified by the reviewed evidence. Motor, spindle, reference/limit, probe and E-stop contact assignments therefore remain OPEN. USBCNC software, motor ratings, the photographed stop button, and controller-family information do not identify physical contacts.

An older third-party search result titled “BZT Steuerung ST33.1” appears to describe an LPT/DB25 schedule, but a complete attributable BZT manual, exact revision, and link to either Happylab installation have not been established. Search snippets conflict about an E-stop function on pin 11. Treat this only as an unresolved research lead: no ST33.1/DB25 contacts, device connector, or route is included in the current diagram.

The separately preserved 227-position/four-row contact capture is archival source-marked material. Its source scope and relationship to this machine are unverified; those numbers and rows are not a verified contact count, connector arrangement, or installed machine map. Retain the capture in its historical disclosure and keep its paths OPEN.

## Evidence to resolve the interface

First identify the installation (Vienna or Berlin), machine serial, controller/cabinet model and serial, board revision, connector labels and any retrofit history. Then obtain the complete manufacturer manual or electrical drawing applicable to that controller revision, including contact numbering, viewing orientation, signal functions and electrical ratings. Installation drawings or qualified point-to-point evidence must establish whether a controller connector reaches an exposed machine connector through adapters or harnesses. A board-level manual alone does not establish the machine-side endpoint.

## Sources

- [Happylab shared BZT machine page](https://wiki.happylab.at/w/BZT_Fr%C3%A4se) — machine identity, separate location specifications, motor ratings and workflow.
- [Happylab Berlin equipment page](https://www.happylab-berlin.de/equipment/details/2) — Berlin description and spindle-rating discrepancy.
- [BZT PFK family page](https://www.bzt-cnc.de/produkte/baureihe-pfk) — configurable family-level features; not installation pinout evidence.
- [BZT downloads and support](https://www.bzt-cnc.de/service/downloads) — no applicable ST33.1 manual or connector schedule recovered in this review. This does not establish that BZT never published one.

This dossier records documentation evidence, not a machine inspection or wiring instruction. Do not use it to wire a machine.
