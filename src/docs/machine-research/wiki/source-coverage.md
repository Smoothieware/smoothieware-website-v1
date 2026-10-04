# Wiki source coverage

Checked 2026-09-23. This is a finite 30-site survey, not an exhaustive crawl of every page or media file on each wiki. The scope excludes vendor pages, forums, source-code hosts, and non-wiki manuals even when a wiki links to them. Per-machine findings and unknowns belong in the linked dossier where one exists.

## Site-by-site coverage

| # | Wiki | Machine-research result in this pass | Coverage / limitation |
|---:|---|---|---|
| 1 | [London Hackspace](https://wiki.london.hackspace.org.uk/) | Silvertail A0; Charmhigh CHM-T36VA; Boxford 190VMC; HPC LS3060; Denford CNC 2600 Pro; Shapeoko 2 | Equipment index and named machine pages reviewed. Some items are inventory-only or retired. `/w/` restrictions and 30 s crawl delay mean wiki media were not fetched. |
| 2 | [Dallas Makerspace](https://wiki.dallasmakerspace.org/) | Tormach 8L; Shapeoko 3XXL; Thunder Nova 63; HAAS VF-2 and machine-shop equipment; MultiCam, Polyprinter508, RostockMAX and Sable 2013 index leads | Tormach and Shapeoko pages were readable; the laser category documents Nova models and shared operating notes. Several direct page fetches failed or returned 403; do not infer details from titles. |
| 3 | [HSBNE](https://wiki.hsbne.org/) | Toptech M4; Blue Elephant ELE1325ATC-R | Machine page plus separate operational guide inspected; local setup, tool measurement, homing, file transfer, and work-offset descriptions are captured with machine-spec conflicts retained. |
| 4 | [FabLab Nürnberg](https://wiki.fablab-nuernberg.de/) | Epilog Zing 4030; Thunder Laser Nova 35; local IMES enclosed CNC mill (imes, 2004); Roland iModela (iM-01); Prusa MK4S inventory (3 units); older DIY mill marked unusable | Machine and inventory pages yielded local operating/spec evidence. The older DIY machine is explicitly out of service and remains distinct from its IMES replacement. The MK4S page is inventory-level rather than a unit-specific dossier. |
| 5 | [FabLab Karlsruhe](https://wiki.fablab-karlsruhe.de/) | ISEL CNC and Shapeoko navigation | Relevant hardware/navigation pages inspected; avoid treating generic navigation as exact installed configuration. |
| 6 | [RaumZeitLabor](https://wiki.raumzeitlabor.de/) | Shapeoko 2; Form 2; Ultimaker 3 | Machine pages yielded named models; existing repository overlap must be checked before counting as new. |
| 7 | [Happylab](https://wiki.happylab.at/) | BZT, Carvera and Trotec leads | Article pages inspected. Query/index routes were avoided; only article paths were used. |
| 8 | [Evil Mad Scientist](https://wiki.evilmadscientist.com/) | WaterColorBot | Dedicated model page inspected; version distinctions retained; 10 s crawl delay observed. |
| 9 | [RepRap](https://reprap.org/wiki/RepRap) | RepRap design families and printer pages | Named designs researched; community design names are not treated as a single physical machine configuration. |
| 10 | [CCCHH Hamburg](https://wiki.hamburg.ccc.de/) | Cameo 5, Gravograph, printers and “Major Lazer” | Wiki machine pages and equipment navigation inspected; exactness varies by individual dossier. |
| 11 | [Attraktor](https://wiki.attraktor.org/) | CNC and laser navigation | Relevant equipment navigation inspected; no unsupported machine details inferred from category labels. |
| 12 | [HackRVA](https://wiki.hackrva.org/) | CNC routing, laser cutting and equipment navigation | Relevant wiki sections inspected; candidate names treated as leads unless an exact page substantiates them. |
| 13 | [MakeICT](https://wiki.makeict.org/) | FabLab and metalshop navigation | Wiki navigation reviewed; no full inventory crawl claimed. |
| 14 | [Quelab](https://wiki.quelab.net/) | Maker-project and equipment search paths | Wiki start/search entry points inspected; no unsupported exact model dossier promoted from an unverified lead. |
| 15 | [Artisans Asylum](https://wiki.artisansasylum.com/) | Acer Dynamic 1340G manual lathe; Dake SB-32V drill press; Do-All 2013-1 metal-cutting bandsaw; also M3X, FabLight, Millport and other machine pages | Three exact-model operating pages were inspected in this pass. Additional named machines in the wiki inventory remain research leads; not an exhaustive inventory. |
| 16 | [Fabbulle](https://wiki.fabbulle.tech/) | Trotec Speedy 300 and Cloudray MP-60 LiteMarker Pro | Machine list and linked wiki article paths inspected. |
| 17 | [Makerspace Baasrode](https://wiki.makerspace-baasrode.be/) | CNC equipment | CNC wiki pages inspected; machine-specific details depend on each dossier's cited page. |
| 18 | [Munich Maker Lab](https://wiki.munichmakerlab.de/) | Archived custom CNC router | Archive page and diagram inspected; historical wiring is kept separate from current state. Special pages were not accessed. |
| 19 | [Reso-nance](https://reso-nance.org/wiki/) | Materials, projects and electronics navigation | Wiki navigation inspected; no exhaustive machine list claim. |
| 20 | [Appropedia](https://www.appropedia.org/) | Open Source Machine Tools catalogue; dedicated Maslow4 and FarmBot pages; 33 catalogue-row-only dossiers | The catalogue is a broad inventory, not 33 detailed machine pages. Maslow4 and FarmBot dossiers also use their dedicated Appropedia articles. External links were not used. |
| 21 | [Bristol Hackspace](https://wiki.bristolhackspace.org/) | Bungard CCD/MTC mill, T-962, Prusa XL, xTool S1, NeoDen 4 and Silvertail A0 | Equipment pages yielded detailed local usage/configuration evidence for several machines; image links that failed to retrieve were not treated as inspected visuals. |
| 22 | [Sorbonne FabLab](https://wiki.fablab.sorbonne-universite.fr/) | CIF Technodrill 2; Roland SRM-20 lead | CIF page inspected. A separate tutorial path was missing; SRM-20 remains an unpromoted lead. |
| 23 | [Davis Makerspace](https://wiki.davismakerspace.org/) | Equipment inventory | Gitit inventory reviewed for named candidates; inventory entries are distinguished from detailed operating pages. |
| 24 | [Amherst Makerspace](https://www.amherstmakerspace.com/wiki/) | Equipment list | Equipment list reviewed; page-level confirmation required for exact configurations. |
| 25 | [FabLab Rothenburg](https://wiki.fablab-rothenburg.de/) | CNC, laser and printer navigation | Relevant navigation inspected; the pass did not claim every machine's dedicated page was researched. |
| 26 | [FabLab Winti](https://www.profs.ch/flwiki/) | Stepcraft 840; Lasersaur 14.03 build; Schaublin 102-VM | Dedicated pages/media inspected for those dossiers; historical build and manual-lathe status remain explicit. |
| 27 | [SoMakeIt](https://wiki.somakeit.org.uk/) | CNC, Harrison M300 and Mimaki CJV30-100 leads | Wiki index and machine leads reviewed; identity and model specificity vary by page. |
| 28 | [CoMakingSpace](https://wiki.comakingspace.de/) | WorkBee, Kress portal mill, EleksMill and LaserScript LS6090 | Dedicated pages yielded local machine/electronics/workflow details; pinouts are not supplied where the pages lack them. |
| 29 | [Open Source Ecology](https://wiki.opensourceecology.org/) | CNC torch table, D3D circuit mill, D3D Pro and other machine designs | Wiki project/design pages inspected; project status and revisions are preserved rather than treated as current installed equipment. |
| 30 | [Wikipedia](https://en.wikipedia.org/wiki/Fab_lab) | General fab-lab discovery only | Used only to discover terminology/sites; no technical machine dossier claims rely on Wikipedia. |

## Access and quality boundaries

- The registry in [`wiki-registry.md`](wiki-registry.md) records the verification path and the wiki evidence for each site. A verified wiki site does not mean every page on it was read.
- London Hackspace's robots rules block the relevant `/w/` paths and request a 30-second delay. No block was bypassed. Dallas direct page access returned 403 or fetch errors for some candidates; only readable wiki search results/pages were used. Those inaccessible items remain inventory leads, not detailed dossiers.
- No failed image, attachment, or diagram fetch is represented as inspected visual evidence. Pinout fields are transcribed only where the wiki itself provides readable contact assignments; machine dimensions, controller names, or connector presence do not imply pin assignments.
- Appropedia's 35 entries are deliberately separated as catalogue-only in [`candidate-index.md`](candidate-index.md). They may help discover models but do not meet a detailed operation, visual, or pinout evidence standard on their own.
- Names found in categories, archives, prototypes, and retired-equipment pages remain candidates until exact identity, state, and overlap are reconciled. The dossier count is not a novelty count.
