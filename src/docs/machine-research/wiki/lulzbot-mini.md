# LulzBot Mini

Research status: wiki-sourced model dossier covering two SoMakeIt installations of the same model; exact model absent from the frozen atlas and exact-name repository search. Captured 2026-09-23.

## Wiki-recorded installations

The SoMakeIt wiki describes Mini 1 and Mini 2 as LulzBot Mini units with a 152 × 152 × 158 mm print volume and 0.5 mm nozzle. Mini 1 has a PEI bed and is listed for PLA, ABS and PETG. Mini 2 has a glass bed and a “Flexystruder”; its listed purpose is flexible filament such as TPU and NinjaFlex. The two units share an OctoPrint address according to the page; the page says to ensure the service is attached/shared with the intended unit.

The same page lists Mini 1 as stored and not in active use after the resin printer arrived; Mini 2’s status is “under investigation.” Keep these instance statuses separate.

## Workflow and use

The wiki names Cura for slicing, with printing either directly from Cura or through OctoPrint. It says material and bed configuration differ between the two instances; do not reuse Mini 1’s material list as confirmation for Mini 2.

## Connections and pinout

The wiki provides no printer-board, USB, stepper, heater, thermistor, fan, endstop, or power connector pinout. The shared OctoPrint hostname is an access detail, not an electrical map.

## Visual evidence

The page includes instance captions, but no readable wiring diagram in the inspected text. [SoMakeIt printer-model wiki page](https://wiki.somakeit.org.uk/index.php?title=3D_Printers_Models&oldid=325).

## Evidence limits

No firmware, mainboard revision, power supply, exact extruder revision, or present operational verification is stated. The old wiki source is an installation record, not a current manufacturer specification.


## Revision-scoped manufacturer wiring research (2026-09-27)

The atlas entry is unversioned, so the following guides remain separate references rather than assignments to the SoMakeIt Mini 1 or Mini 2. LulzBot’s official directory lists versions 1.0, 1.01, 1.02, 1.03, 1.04 and 2.0.0–2.0.7.

The Mini 1.0 OHAI printhead instructions describe a keyed 20-POS connector; the triangle identifies position #1 on the connector and diagram. The full schedule is: 1 red motor; 2 blue motor; 3 green motor; 4 black motor; 5 and 6 heater cartridge (these two may be switched); 7 red extrusion fan; 8 black extrusion fan; 9 red blower fan; 10 black blower fan; 11–15 empty; 16 red extruder-nozzle ground; 17 red thermistor; 18 black thermistor; 19 purple limit switch; 20 black limit switch. Colors remain source descriptions and do not by themselves establish polarity or signal function. The captured diagram is `src/docs/machine-control-pinout-survey/wiki-evidence/wiki-162-lulzbot-mini-1-0-printhead-wire-diagram.png`.

The Mini 1.01 electrical-final-assembly guide names MiniRAMBo X, Y, Z-left, Z-right and extruder motor slots; X/Y/Z MIN/MAX destinations; T0/T2 thermistor slots; separate two-position bed/extruder heater blocks; extrusion and blower fan connectors; and two bottom positions in a bank above Z MAX (blue at bottom-left, black at bottom-middle). It does not give a complete numbered contact schedule or signal polarity for those groups. The graph shows only the two spatially identified bank positions individually; other pin orders remain unknown. Neither version is confirmed to match the atlas installations. No controller STEP/DIR/ENABLE pinout, fitted board revision, wire continuity, DB25 or SmoothieBox route is established.

Sources: [Mini 1.0 printhead assembly](https://download.lulzbot.com/Mini/1.0/ohai-kit/printhead_assembly.html), [Mini 1.0 wire diagram](https://download.lulzbot.com/Mini/1.0/ohai-kit/printhead_assembly_files/Wire_Diagram_1.png.600x0_q85.png), [Mini 1.01 electrical final assembly](https://download.lulzbot.com/Mini/1.01/production_docs/ohai-kit/electrical_final_assembly.html), and [LulzBot Mini download index](https://download.lulzbot.com/Mini/). All physically unverified contacts remain OPEN and no guess is added.


The Mini 1.01 assembly text additionally names switch wire colors: X MIN green/black, X MAX purple/black, Y MIN red/black, Y MAX black only in its prose, Z MIN red/black, and Z MAX orange/black. These are listed in the generated reference graph one conductor at a time, with no SIG/GND or cavity-order assignment; the total Y MAX contact count is not established by the text. A separate Z MIN preparation step says to insert a red lead into keyed slot #1, but the relationship between that lead and the final connector's complete contact schedule is not resolved.
