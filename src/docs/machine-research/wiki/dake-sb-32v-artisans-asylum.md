# Dake SB-32V drill press — Artisans Asylum

**Wiki evidence status:** exact model and local operating instructions documented. The wiki lists two units, one in each of the Metal Shop and Machine Shop; serial numbers and unit-specific differences are not identified.

## Controls and operation

The wiki describes the Dake SB-32V as reversible with variable speed. To start, release the emergency stop and use the three-position switch to select direction; the page says forward is appropriate for nearly all normal use. A small black knob adjusts spindle speed over a moderate range. To stop, set the switch to OFF or press the emergency stop.

For larger speed changes, the wiki's sequence is to unplug the machine, open the belt/pulley cover, loosen the belt-tension lock, select the belt arrangement from the local table or the referenced page in the manual, move the motor to tension the belt, close the cover, then reconnect power. The page notes the belt should deflect about 1/2 in under finger pressure. It describes an idler pulley in the drive train.

The general drill-press wiki category says to secure the workpiece, keep guards in place, wait for the tool to stop before unloading, and never side-mill with a drill press. The page identifies the shop units' restriction state as green; current local authorization rules remain authoritative.

## Visuals and pinouts

The wiki page includes images labelled as the machine, speed control, and pulley set. These illustrate visible controls and belt arrangement; they do not reveal internal wiring or connector assignments. No pinout is present in the inspected wiki article.

## Sources

- [Dake Drill Press — Artisans Asylum Wiki](https://wiki.artisansasylum.com/wiki/Dake_Drill_Press) — SB-32V identity, unit count, controls, speed changes, and page images.
- [Category:Drill Presses — Artisans Asylum Wiki](https://wiki.artisansasylum.com/wiki/Category%3ADrill_Presses) — general drill-press safety, operation, and the list of other exact models at the site.

**Unknowns:** serials and differences between the two units, electrical schematic, connector assignments, full spindle speed range, and current belt configuration on either unit.

## Primary-source extension — SB-32V electrical boundary

The 2014 SB-32V manual copy hosted by Trick-Tools identifies the machine on its cover and describes a 2 HP, 220 V, three-phase configuration in its specifications (printed p. 5). Its printed p. 19 electrical drawing has a conflicting title block: “DAKE MODEL SB-25 DRILL PRESS 120 VOLT 1-PHASE,” drawing 87384 dated 09/05/2013. That mismatch makes the drawing unsuitable as an SB-32V terminal schedule. The VFD terminals and STOP/START/FWD/REV control terminals shown in that drawing are not assigned to either Artisans Asylum SB-32V.

The manual's electrical warning describes an equipment-grounding conductor and a grounded plug, but does not provide a reliable SB-32V plug/contact view in the reviewed pages. The local wiki describes the E-stop, three-position forward/off/reverse selector, and spindle-speed control knob as operator controls. Those are functional controls, not evidence of exposed SmoothieBox connector pins. The two installed machines' serials, nameplates, internal drive variants, cable terminations, remote-control inputs, and safety-contact details remain unknown. No SmoothieBox motion, PWM, run, heater, or supply contact is routed to the drill press; every machine-side electrical boundary stays OPEN pending a revision-matched schematic and inspection by a qualified person.

The current Dake SB-32V manufacturer manual is indexed as part 977400-1V revision 01/2021 and includes an electrical-diagram section, but the official PDF URL returned HTTP 403 during this review. Its diagram could not be inspected or used to resolve the 2014 copy's SB-25 title-block conflict. This access limitation is recorded rather than filled with inferred terminals.

### Source identity and limitations

- [Dake SB-32V Instructional Manual, revision 01/2021](https://dakecorp.com/wp-content/uploads/2023/10/SB-32V-2021.pdf) — official current-model manual listing, part 977400-1V; direct retrieval was denied (HTTP 403), so it did not provide contact-level evidence in this pass.
- [SB-32V drill press manual copy (4/1/14)](https://www.trick-tools.com/common/documentation/sb-32v_manual.pdf) — reseller-hosted manufacturer manual copy; printed p. 5 specifications and p. 19 electrical drawing. The p. 19 title block says SB-25, 120 V, single phase, so its VFD and control terminals are excluded from the SB-32V contact map.
- [Dake Drill Press — Artisans Asylum Wiki](https://wiki.artisansasylum.com/wiki/Dake_Drill_Press) — local operator-facing control description and two-unit identity; serials and wiring are not documented.
