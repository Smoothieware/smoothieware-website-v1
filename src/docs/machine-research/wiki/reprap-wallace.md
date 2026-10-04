# RepRap Wallace

## Identity

Wallace is a parametric open-source Cartesian printer design described by the RepRap wiki as a robust redesign based on the Printrbot concept. Do not conflate it with Wally.

## Wiki evidence

- [RepRap Wallace, pinned revision 191374](https://reprap.org/w/index.php?title=Wallace&oldid=191374): experimental parametric design, tentative parts list, and initial build-manual link.
- [Wallace build manual, pinned revision 147252](https://reprap.org/w/index.php?title=Wallace_Build_Manual&oldid=147252): mechanical assembly guide; it directs builders to source and wire electronics separately.
- [RepRap printer-by-picture index](https://reprap.org/wiki/Printer_by_Picture): visual catalog entry and comparison table.

## Specifications and operation

The wiki says the design uses 6 mm smooth/threaded rods and NEMA 14 motors by default, with parametric alternatives. It reports a possible 200 × 200 × 140 mm build volume, 26 printed parts and approximately 0.07 mm X/Y and 0.025 mm Z positioning increments under the described microstepping. The manual covers X, Y, Z and bed assembly. The page is marked experimental/work-in-progress.

## Pinout and visuals

Neither the pinned Wallace design page nor its pinned build manual specifies an electronics board revision or connector pinout. The design page calls electronics a tentative required part category; the build manual ends its mechanical assembly by directing the builder to wire electronics, fit an extruder, and optionally add a heated bed. These sources do not establish the driver, endstop, heater, thermistor, power, or controller connector positions. The printer-by-picture index is a model comparison and likewise has no wiring schedule. The source-supported diagram therefore has no machine-side contact groups or routes; retain all unidentified interfaces as unassigned rather than borrowing a Printrbot, RepRap, or controller pinout.
