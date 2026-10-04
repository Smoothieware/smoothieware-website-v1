# Epilog Zing 4030 laser cutter — FabLab Region Nürnberg

**Wiki evidence status:** dedicated local machine page; marked functional in the wiki when inspected. The source describes a 30 W infrared laser with 406 × 305 mm working area (also given as nominal 400 × 300 mm in the local software setup).

## Local workflow

The wiki uses VisiCut and Inkscape with SVG input; it also describes PDF input through Acrobat Reader. In the current VisiCut color convention, red is cutting, green is marking, blue is ignored, and black/other colors are engraving. SVG colors must be fully saturated, and Illustrator exports must use inline styling for VisiCut to read colors. For manually configured VisiCut settings, the wiki gives host `zing1.fablab.lan`, port 515, and a 400 × 300 mm bed size.

The machine page documents locally tested material settings by material, power, speed, and frequency, and warns that those settings depend on clean optics. The wiki calls for weekly lens/mirror cleaning and monthly checks of light barriers and rails. It prohibits materials including PVC, PTFE/fluoropolymers, polyurethane, and ABS, and explicitly distinguishes true acrylic from craft “glass”. The wiki warns that operators must remain at the machine while it runs, with extraction and compressor running and a fire extinguisher nearby.

## Visuals and pinouts

The page lists a machine photo, but it does not provide an electrical diagram or connector-level wiring map. It gives a VisiCut network-print destination (`zing1.fablab.lan`, port 515); this identifies a software submission endpoint, not the laser's physical network connector or any electrical pin.

Epilog's Zing-family service instructions identify an X-axis motor plug and a ribbon-cable connection at the X/Y Limit PCB. They establish these named internal interfaces for the Zing family, but do not publish cavity counts, contact numbers, conductor functions, or a mating view. The local wiki does not identify the installed controller/PCB revision, so the two named groups are shown with contact positions unknown and no SmoothieBox routes. They must not be treated as a complete machine harness census.

No pinout is inferred. A web-hosted manufacturer guide is linked by the wiki but is outside the wiki-only evidence used for the local operating dossier.

## Sources

- [ZING 4030 — FabLab Region Nürnberg Wiki](https://wiki.fablab-nuernberg.de/w/ZING_4030) — identity, local VisiCut configuration, material-specific settings, material restrictions, and operating workflow.
- [Lasercutter category — FabLab Region Nürnberg Wiki](https://wiki.fablab-nuernberg.de/w/Kategorie%3ALasercutter) — confirms the Zing 4030 and Nova 35 are distinct local lasers.
- [How to Replace the Home Switch (XY PCB) — Epilog Zing Support Center](https://support.epiloglaser.com/laser-machine/zing/service-and-repair/x-axis/how-to-replace-the-home-switch-xy-pcb-zing/) — Zing-family service evidence for the X-axis motor plug and ribbon cable at the X/Y Limit PCB; no contact schedule.
- [Zing — Epilog Support Center](https://support.epiloglaser.com/laser-machine/zing/) — Zing-family support index, not proof of the local unit's fitted revision.

**Unknowns:** serial number, tube/optics revision, current calibration, exact settings database revision, fitted controller/PCB revision, physical network connector, electrical schematics, contact counts, cavity identities, conductor functions, and connector pinouts.
