# David’s “Red Machine”: 1.05 m LowRider V4 in Bavaria

**Machine identity:** David (`uu3ndcp`)’s individual V1 Engineering LowRider V4, built in Bavaria, Germany. The owner calls it “The Red Machine.” His January 2026 posts document first pen plotting and subsequent cutting of fiberboard strut plates. This is one owner-built machine, not a generic LowRider configuration.

![Owner-posted photograph of the red LowRider V4 with Parkside router and first crown drawing](https://us2.dh-cdn.net/uploads/db5587/original/3X/6/0/6031e77998f27a5635e829fd7f99d675e9af50a4.jpeg)

*Visually inspected V1E forum image. The router label appears to read Parkside PPMF 710 A1; the owner separately identifies it as a six-speed 710 W model. The image shows the red printed gantry and carriage on the table.*

![Owner’s 5 mm fiberboard strut plates after the reported cutting attempts](https://us2.dh-cdn.net/uploads/db5587/original/3X/4/4/4481b455245d2c113b85a998c53527ee4b7d021e.jpeg)

*Visually inspected image from the owner’s January 28, 2026 cutting update. It shows two long plate-shaped workpieces with slots and holes. The photograph supports that parts were cut; it does not establish dimensional calibration by itself.*

## Owner-reported machine and controls

- The owner reports a 1.05 × 1.05 m square work area and says the machine is intended mainly for 1 × 1 m birch multiplex sheets.
- He self-sourced most parts because shipping from the United States was expensive. His itemized estimate is approximately €585 including router and table.
- His bill of materials lists 6 m of precision steel rail/tube at 30 mm outside diameter; five NEMA 17 steppers; one Jackpot 3 controller; five endstops; 10 m of 10 mm GT2 belt; 16-tooth pulleys and smooth idlers; two T8 leadscrews/nuts; 14 608-2RS bearings; MGN linear rails; and a touch plate. The forum BOM’s hyperlink labels for the T8 and MGN rows appear mismatched, so this summary preserves the owner’s row names and quantities without relying on the outbound shop listings.
- The machine is controlled by a Jackpot 3 board. The owner says he used Estlcam v12 64-bit on an M2 MacBook through Wine/Crossover; he chose Estlcam to remain on the supported CAM path. Firmware version, FluidNC configuration, network setup, axis mapping and connector assignments are not included in the thread.
- He built the table from stored rack profiles/roof battens and three 19 mm particle boards. The CNC sits at the table’s middle level; the top working surface can be lifted off by hand. He says this layout lets him use the top surface more often than the CNC.
- The owner reports assembly challenges including determining wire lengths, routing wires through YZ plates, and tight M8 screw/nut fits. He specifically suggested publishing approximate endstop-wire lengths for the axes.
- A FluidDial was still incomplete in the January 26 post; he says he had damaged its ESP while troubleshooting a button and was waiting for a replacement shipment. Its later completion is not established by the inspected thread.

## Owner-reported use and settings

- On January 26, 2026, David said he had drawn his first crown with the machine using a Stabilo pen and that the inexpensive pen was already destroyed during testing.
- He selected a Parkside PPMF 710 A1 six-speed router, reported at €75, to reduce initial cost and complexity instead of starting with a more expensive spindle. His listed tooling included an adapter from a 6 mm router collet to 3.175 mm, a V-bit, and single-flute end mills.
- On January 28, after about half a day learning the machine, he reported cutting 5 mm fiberboard strut plates. For one 1/8 in shank, two-flute downcut bit he reported 1 mm depth of cut, 20 mm/s feed, 3 mm/s plunge feed, and a 30° plunge angle. He says test cuts were 2 mm too long; he shortened the SVG by 2 mm for the next cut and reports that it then came out “spot on.” This is his workaround and observation, not proof that the machine was calibrated.
- He says the fiberboard settings were too slow after the cutter reached the harder MDF spoilboard, and that the machine slid off its planned path. He later reports increasing power/RPM to complete the parts, but a toolpath deviation recurred at the start of the final 1 mm downward clearance path. The thread leaves this cause unresolved; replies suggest checking core movement but do not verify it.
- He notes that installing the strut plates would require further calibration. The owner’s first cut results include successful parts as well as oversize and path-deviation attempts; do not present the workaround as a validated calibration method.

## Controller and pinout limits

| Subsystem | Explicit forum evidence | Missing or unresolved |
|---|---|---|
| Controller | Jackpot 3 board appears in the owner’s itemized parts list. | Board revision, firmware/configuration file, connector-level pinout, I/O assignment, endstop topology and signal polarity. |
| Motion | Five NEMA 17 steppers and five endstops listed; owner reports first pen movement and router cutting. | Motor winding/contact assignments, which motor drives each named axis, driver configuration, current, microstepping, steps/mm and homing configuration. |
| Workholding/coordinate setup | Owner reports test plates 2 mm too long and regenerating the SVG shorter; he says it produced a close fit. | Measured axis calibration, external metrology, dimensional tolerance and the root cause of the reported path deviation. |
| Router and tool | Parkside PPMF 710 A1, 6 mm-to-3.175 mm adapter, V-bit and 1/8 in shank cutters appear in the owner’s list. | Collet/runout measurements, actual spindle RPM, validated feeds/speeds, depth schedule beyond the reported attempts, and cut-quality measurements. |

**The thread contains no connector diagrams or pinout table.** Do not infer Jackpot 3 contacts from other LowRider builds or from the controller name alone.

## Forum source

V1E.com Forum, David (`uu3ndcp`), [“The Red Machine”](https://forum.v1e.com/t/the-red-machine/53037), owner posts dated January 26 and January 28, 2026 (posts 1 and 2). Post 1 supports machine dimensions, component list, estimated cost, table, software and first crown drawing. Post 2 supports the fiberboard material, reported toolpath settings, cut results and unresolved deviation. Other members’ diagnostic suggestions are not represented as confirmed repairs.

## Novelty and scope

Searches across repository Markdown and HTML for `The Red Machine`, `uu3ndcp`, `1.05 x 1.05m`, and `Jackpot 3` found no matching machine dossier. The README already lists other LowRider V4 builds, but this is a separate owner, 2026 Bavaria build with its own bill of materials and cut history. This text search is a candidate-level novelty check, not proof that every possible alias is absent elsewhere.
