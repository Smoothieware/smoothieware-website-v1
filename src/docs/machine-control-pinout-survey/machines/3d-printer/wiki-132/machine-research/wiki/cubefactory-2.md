# CubeFactory 2

**Evidence depth:** portable 3D printer with recycling and off-grid features. This dossier is grounded in the Appropedia wiki entry only; references from that page to vendor, GitHub, or other non-wiki pages were not used as evidence.

## Wiki-supported identity and facts

The wiki catalogue lists 801 × 399 × 522 mm and describes integrated filament shredding/recycling, photovoltaic panels and batteries, and an example incorporating a Prusa i3 model. The integrated-Prusa example is not a separate printer model.

## Use, visuals, and electrical connections

The captured wiki catalogue row does not provide a machine-specific operating procedure, connector table, electrical pinout, or transcribable wiring diagram for this model. Those items are recorded as unknown, rather than inferred from the model name or from the page's external links. The source may link further documentation, but that non-wiki content is outside this source-only research scope.

## Source

- [Tolocar / Open Source Machine Tools — Appropedia wiki](https://www.appropedia.org/Open_Source_Machine_Tools) — machine catalogue entry.

## Primary-source extension — CubeFactory project and BQ Hephestos electronics

The Appropedia-only boundary above records the earlier evidence pass. This additive extension follows its own linked project and manufacturer sources; it does not change the fact that the wiki row alone has no electrical map.

CubeFactory2's [project repository](https://github.com/CubeFactory2/cubefactory) identifies its printer as a BQ Prusa i3 / Hephestos. BQ's [Hephestos repository](https://github.com/bq/Hephestos) describes Hephestos as a Prusa i3 revision and points to its electronics design. BQ's [ZUM repository](https://github.com/bq/zum), including the [ZUM Mega 3D design PDF](https://github.com/bq/zum/blob/master/zum-mega3d/Zum%20Mega%203D.PDF), gives source-schematics for that electronics family. The PDF title block identifies `bqCNC_Prusa.PrjPcb`, revision 1.2, dated 2015-08-26, with an 11-sheet schematic. This is a design reference, not proof of the exact board fitted to the CubeFactory machine; the project does not provide a legible serial/revision-specific installed-board record.

The design drawings name connector boundaries J8–J18 for thermistors, endstops, bed/heaters and fans, and J20–J24 for stepper-driver/motor channels. They include variant-specific DNP notes, including Hephestos 2 exclusions. Those notes are retained per connector; an unpopulated or variant-inapplicable header is not presented as a usable machine connection. Individual schedules are transcribed only where both the printed connector/pin number and net name are legible in the referenced sheet. A board-design net is not an external SmoothieBox wire: all prospective cross-machine connections remain OPEN until fitted revision, contact view, driver stage, ratings, signal levels, and continuity are established.

CubeFactory's project [powertrain notes](https://github.com/CubeFactory2/cubefactory/blob/master/recycler/Powertrain_Info.md) identify a 24 V RS Pro brushless motor and a Maxon ESCON 70/10 controller, plus a 24 V heating sleeve and Inkbird D1S-2R-24 temperature controller. Those block-level identities do not establish the CubeFactory harness pinout. The [Maxon ESCON 70/10 Hardware Reference](https://www.maxongroup.com/medias/sys_master/root/9350562709534/422969-ESCON-70-10-Hardware-Reference-En.pdf) is a separate controller-family pinout. It lists J5 six screw positions (DigIN1, DigIN2, DigIN/DigOUT3, DigIN/DigOUT4, signal GND, auxiliary +5 V) and J6 seven screw positions (two differential analog inputs, two analog outputs, and GND). Its analog setpoint and configurable digital/PWM controls are not equivalent to step/direction/enable signals. A future diagram may show a DOTTED GUESS from a SmoothieBox PWM contact to ESCON J5 DigIN1 only if the controller's configured set-value mode, PWM voltage/frequency/duty limits, reference, enables and failsafe are all shown as prerequisites; no such route is asserted here. No motor-coil connection to SmoothieBox step/dir pins is implied.

The CubeFactory project's power, solar/battery and temperature-control descriptions remain separate functional boundaries. Its [powertrain text](https://github.com/CubeFactory2/cubefactory/blob/master/recycler/Powertrain_Info.md) calls the 24 V controller “Inkbird D1S-2R-24”, but the linked [controller photograph](https://raw.githubusercontent.com/CubeFactory2/cubefactory/master/recycler/images/powertrain_images/InkBird_Temperaturcontroller.jpg) visibly has an INKBIRD / ITC face and does not show a complete model identifier. A D1S-2R-24 manual found in manufacturer-branded copies identifies the D1S family as SESTOS and gives a different product front; it cannot safely resolve the CubeFactory photograph/text conflict. The pictured controller's rear label, exact model and terminal block are not documented, so no contacts are assigned and its controller boundary stays OPEN.

This distinction matters for the 24 V, 150 W heating sleeve: its nominal load current is 6.25 A. A SESTOS D1S-2R family manual copy lists a 3 A resistive contact rating at 250 V AC, which does not qualify that relay for the project's 24 V DC heater. Because the fitted controller is unidentified, this comparison is a hazard check, not an assertion that the sleeve is actually switched by a D1S relay. No direct heater route is drawn; the actual controller, relay/contact ratings, and any external power-switching stage must be identified first.

### Source identity and limitations

- [CubeFactory2 project](https://github.com/CubeFactory2/cubefactory), especially `3d_printer/README.md`, `recycler/Powertrain_Info.md`, and the powertrain/shredder documentation — project-specific printer and process-equipment identities; no proof of fitted ZUM revision or complete harness.
- [CubeFactory2 temperature-controller photograph](https://raw.githubusercontent.com/CubeFactory2/cubefactory/master/recycler/images/powertrain_images/InkBird_Temperaturcontroller.jpg) — front face is visibly branded INKBIRD / ITC, while the project prose names “D1S-2R-24”; file SHA-256 `db49dc35d1a3a271e863c26513ca4ea9793e79903b06448791548878bd6d2714`; rear model/terminals are not shown.
- [BQ Hephestos design](https://github.com/bq/Hephestos) and [BQ ZUM Mega 3D design PDF](https://github.com/bq/zum/blob/master/zum-mega3d/Zum%20Mega%203D.PDF) — connector/net schedules for the cited design revision; not installation evidence.
- [Maxon ESCON 70/10 Hardware Reference](https://www.maxongroup.com/medias/sys_master/root/9350562709534/422969-ESCON-70-10-Hardware-Reference-En.pdf) — controller-family pin schedules and signal constraints, not CubeFactory harness evidence.
- [SESTOS D1S manual copy](https://manualzz.com/doc/6643664/sestos-d1s-digital-temperature-controller-manual) — manufacturer-branded D1S-family reference says the D1S-2R contact output is rated 3 A resistive at 250 V AC; cited only to prevent assigning that family rating or terminal map to the unidentified Inkbird-front controller.
