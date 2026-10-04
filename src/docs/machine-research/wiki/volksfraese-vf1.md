# VolksFraese VF1

**Evidence depth:** belt-driven CNC mill; open-source-inspired catalogue entry. This dossier is grounded in the Appropedia wiki entry only; references from that page to vendor, GitHub, or other non-wiki pages were not used as evidence.

## Wiki-supported identity and facts

The wiki catalogue lists 1000 × 500 × 150 mm and notes 3D-printed parts and a control board. It labels the license non-commercial, so it is kept in the inspired section and not described as an open-source-hardware design.

## Use, visuals, and electrical connections

The captured wiki catalogue row does not provide a machine-specific operating procedure, connector table, electrical pinout, or transcribable wiring diagram for this model. Those items are recorded as unknown, rather than inferred from the model name or from the page's external links. The source may link further documentation, but that non-wiki content is outside this source-only research scope.

## Source

- [Tolocar / Open Source Machine Tools — Appropedia wiki](https://www.appropedia.org/Open_Source_Machine_Tools) — machine catalogue entry.

## Additional source review — 2026-09-29

The earlier wiki-only limitation above records the scope of that first pass. A separate source review found an author-published MPCNC Nano Estlcam Shield schematic in the [Tillboard repository at commit `6fd34eff57dfbbca657e646c6dd619017d9a0119`](https://github.com/tnn85/MPCNC-Nano-Estlcam-Shield/tree/6fd34eff57dfbbca657e646c6dd619017d9a0119). The exact `.sch` bytes are SHA-256 `f94130dd9144fa39d78b09ae7d9e361e92997c8a017004d4a03ffe6bdb24c566`; its title block identifies “MPCNC Nano Estlcam Shield”, revision 1.4, dated 2019-04-16. This supports a revision-scoped **board reference** contact inventory. It does not show that this specific VF1 has that board installed.

Sorotec's [VF1 kit description](https://www.sorotec.de/shop/Volksfraese-VF1-12186.html?language=de) says spindle, control, motors, and reference sensors with cable are excluded from the kit. Therefore those components vary by build and cannot be inferred for the local machine from the model name.

The [Tillboard connection-plan article](https://blog.seidel-philipp.de/volksfraese-vf1-tillboard-anschlussplan/) concerns an example VF1/Tillboard installation, calls its plan strongly simplified, warns of possible mistakes, and recommends qualified electrical work. Its depicted DM542T drivers, motors, sensors, spindle/VFD, touch plate, and emergency stop are not evidence of this machine's installed harness or connector pin mapping. It is retained only as an example of a possible configuration.

The source schematic defines connectors J1–J29 (94 numbered positions); its two service headers J3 and J15 are kept distinct from the other 82 board-reference positions. J2:3 has an explicit no-connect mark. The J10 function field says `Stepper2_X`, while its literal net labels are Y-family; preserve this source inconsistency rather than normalizing it. No DB25 is present in this board reference. The source contact table is not a mating-face view, fitment record, SmoothieBox mapping, or wiring approval. All SmoothieBox-to-board routes remain open unless independently evidenced.

Source files and rendered reference schedule are local atlas artifacts under `src/docs/machine-control-pinout-survey/`; the selected diagram and detailed schedule carry per-contact source labels. See also the author repository README for the board's intended MPCNC/Estlcam context.
