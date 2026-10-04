# CIF Technodrill 2

Research capture: 2026-09-23; manufacturer catalog addendum: 2026-09-27; Sorbonne French manual cross-check: 2026-09-28. Status: integrated atlas profile; installed revision and electrical contact map remain unknown.

## Identity, use and deduplication

Sorbonne FabLab’s CIF Technodrill 2, documented for PCB and 2.5-axis machining. Board revision is **unknown**. The community tutorial’s “user manual” title does not establish manufacturer authorship. Checked against every frozen atlas label, especially Nomad 3, Taig, Sherline, Genmitsu and Tormach: this is a separately named CIF machine, not another configuration of those models.

## Machine facts and use

The wiki states maximum dimensions 300 × 290 × 10 mm; whether these denote axis travel or permissible workpiece dimensions is **unknown**. It documents Galaad and formats including DXF/DWG, NC, ISO, PLT and PCB Gerber. A license dongle stays at the computer. [Community tutorial](https://wiki.fablab.sorbonne-universite.fr/wiki/doku.php?id=wiki:tutoriel:cif_technodrill_2_user_manual), [machine introduction](https://wiki.fablab.sorbonne-universite.fr/wiki/doku.php?id=wiki:cif:introduction).

## Connection evidence transcribed from the diagram

This is a **cable-role diagram**, not a numbered electrical pinout. All physical contact numbers, mating-face orientation, signal directions, logic polarity, voltage and current ratings are **unknown**.

| Diagram label / endpoints | What the visual establishes | Electrical meaning not established |
|---|---|---|
| Machine “NXY Main Bundle” → control box “N X Y” | One bundle branches toward three labelled control connections | “N” must not be silently corrected to “Z”; conductor assignment unknown |
| Control “PWR”, “Cntrl” | These labels appear along the upper edge | Supply rating, connector type and control protocol unknown |
| Control “usb” → PC USB | USB-labelled cable path | Contact numbering, USB version and allowed power unknown |
| Machine “Camera Plug1” → PC camera USB / yellow AV | Camera-related path | Converter internals and AV electrical assignments unknown |
| “Zsensor = Red”; “Black”; “Cam = Yellow” | Three machine AV-plug annotations | Color does not establish center-contact polarity or function of Black |
| Control “Zsensor”, “White”, “Cam” | Three corresponding control-side labels appear | Black/White wording mismatch is unresolved |
| PC “RED AV: Not attached” | Red AV explicitly shown unused | No authorization to reconnect it |

[Diagram source page](https://wiki.fablab.sorbonne-universite.fr/wiki/doku.php?id=wiki:cif:introduction) · [Original wiki image](https://wiki.fablab.sorbonne-universite.fr/wiki/lib/exe/fetch.php?media=wiki:cif:cif_diagram.jpg) · [Retained original](images/cif-diagram.jpg).

## Sorbonne manual cross-check (2026-09-28)

The Sorbonne French introduction repeats the “Branchement de la Technodrill 2” caption and confirms the sketch is for restoring accidentally unplugged cables. It additionally identifies a USB license key that must remain plugged into the operating computer. The source does not identify the USB receptacle/plug form or contact schedule; this is a named computer-side peripheral, not a machine-control route. The separate French user-manual index includes a “Branchement du CIF Technodrill” section, but the available indexed content adds no connector/contact table beyond the introduction and sketch. The source groups and every electrical position therefore remain OPEN; no dotted route is justified.

[French Sorbonne introduction](https://wiki.fablab.sorbonne-universite.fr/wiki/doku.php?id=wiki:fr_cif:introduction) · [French user-manual index](https://wiki.fablab.sorbonne-universite.fr/wiki/doku.php?id=wiki:projets:cif_technodrill_user_manual).

Visual layout: teal machine block, red control-box block, green PC block, connecting lines and colored AV annotations. The drawing supplies no numbered contacts or reliably defined connector viewing face. The Black/White naming conflict and “N” label remain verbatim evidence rather than guessed repairs. Source footer identifies CC BY-SA 4.0; preserve attribution and check media-specific terms before republication.

## Remaining evidence and safety boundaries

Motor power, spindle power, logic I/O, grounding and protective circuits cannot be reconstructed from this sketch. Controller model, motor ratings, homing polarity, probe input logic and E-stop circuit are **unknown**. The diagram is insufficient for live wiring. No interlock bypass or mains work is proposed.

The inspected wiki setup material is incomplete for a reproducible operation guide. Obtain a wiki-hosted manual tied to the actual installed control box before filling electrical gaps. No ordinary vendor or forum source was substituted.

## Manufacturer catalog context (2011; not an installed pinout)

CIF's *Milling/Drilling Machine 3 & 4 Axes — 3D TECHNODRILL 2*, edition 110131, lists integrated electronics, X/Y/Z stepper motors, an 800 W spindle, and a 220 V / 50 Hz supply. The catalog does not identify the Sorbonne machine's fitted configuration, expose motor-driver or spindle-control terminals, or give connector contact assignments. The catalog is therefore shown in the primary SVG as a context-only subsystem card with no contact circles and no SmoothieBox path. Its ratings must not be treated as instructions to connect the spindle or mains to the SmoothieBox.

The catalog's X/Y/Z travel (300 × 340 × 73 mm) differs from the community page's stated maximum dimensions (300 × 290 × 10 mm). These are retained as separate source claims; their measurement basis and relation to this installed unit are unresolved. The catalog and the wiki drawing do not establish matching electrical revisions.

[CIF manufacturer catalog, Ed.110131](https://docs.rs-online.com/8b90/0900766b80e12927.pdf) · [Sorbonne FabLab machine introduction and cabling drawing](https://wiki.fablab.sorbonne-universite.fr/wiki/doku.php?id=wiki:cif:introduction).

## Atlas integration and remaining wiring evidence

This profile is integrated as `wiki-124` in `machine-control-pinout-survey.html`. Its primary SmoothieBox SVG shows the 82 proposed exterior contacts, seven wiki-described cable groups as OPEN boundaries, and a separate no-contact CIF catalog context card. The French manual cross-check adds a computer-side USB license key to the evidence list, but does not change the machine connector/contact count or establish any SmoothieBox route. The source material still establishes no numbered machine contacts or routes. A matching installed controller revision, a source-scoped connector map, and electrical ratings/returns are required before drawing a physical connection.
