# Jonathon Duerig's “Contrariwise” C-Beam router

**Machine identity:** Jonathon Duerig documented a custom C-Beam router named “Contrariwise,” built largely from standard OpenBuilds parts and incorporated into a shelf/table. This is a specific owner build, not a generic C-Beam kit entry. A repository search on 2026-09-23 found no exact `Contrariwise`, `Jonathon Duerig`, or build-id match.

**Evidence state:** OpenBuilds marks the build complete. The owner reported a first cut and then described the machine as producing ABS parts in a short prototype cycle. The stated use case is cutting known-thickness ABS sheet, up to 1/4 inch, into small parts. The owner identifies flex in the X gantry wheels, slippage in the first clamping setup, and limits in the pressure-foot arrangement; these are documented trade-offs, not independently measured rigidity or accuracy claims.

## Build and working area

The owner built the machine from C-Beam linear actuators on all axes and integrated it into an approximately 1 m × 1 m × 1 m shelf/table. The build description gives a working area of 700 × 780 mm and a maximum speed written as “500 mm/m”; because the unit notation is ambiguous, it is preserved as stated rather than silently corrected. The intended material was ABS up to 1/4 inch thick and up to 2 ft × 2 ft in size.

The shelf uses four 20 × 60 mm posts, a base shelf, two interior shelves and cross-bracing. The tabletop carries the Y-axis supports and a spoilboard. The owner reports using double-wide standard gantry plates with eight wheels per Y-axis gantry. For the X-axis, a vertical extrusion joins the standard double-wide gantry plates to the X C-Beam, using multiple L-brackets and plates rather than custom gantry plates.

The owner identified the X-axis gantry wheels as the largest flex point. They suggested that wider X-Large plates with wheels running on the outside might reduce flex and help shield the lead screw from chips, but did not claim to have implemented that change. This is a builder observation and proposed improvement, not a measured deflection result.

## Control hardware and connections

The build page lists an xPro v2 controller, NEMA 23 motors and a 300 W DC spindle. Acrylic mounts carry the controller board, fan and two power supplies, with an aluminum extrusion frame supporting the electronics assembly. The owner described barrel jacks as connectors: two jacks per motor, one per sensor, and additional connections for fan power, Z touch plate and spindle control. This is a connector-count/function description only; the page does not state jack polarity, contact order, controller terminal assignments, or a complete electrical pinout.

The E-stop was temporarily mounted to the base plate during the build; the owner planned to move it to a wall or ceiling after adding an enclosure. The build entry does not establish whether that enclosure or relocated E-stop was later completed. Treat this as a dated build detail, not an assessment of present safety configuration.

## Workholding, dust control and part workflow

The owner built a combined pressure foot and dust shoe. Its stacked (“pancake sandwich”) pieces provide a path for a vacuum hose alongside the spindle opening. The design was intended to hold small cut-out pieces without tabs while containing chips. It is specifically suited to known-thickness stock and shallow profile work; the owner warned it was unsuitable for substantial relief or pocketing.

For cutting stock, the owner clamped a large plastic sheet with beams along an edge and L-plates at corners, and used side guides to locate repeated sheets. The pressure foot with stronger springs held small parts as they were cut free. Because the dust shoe had to be removed for tool changes and Z touch probing, the owner probed the spoilboard once and based the G-code Z reference on that surface, using homing switches to retain a working origin between jobs. The first cut slipped slightly and left one side out of square; the owner said clamping needed adjustment.

After leveling the spoilboard, calibrating and developing the clamp setup, the owner described the router as producing plastic parts. Their production method used 2 ft × 4 ft plastic blanks, cut one end, flipped the sheet, then cut the other end. Parts were arranged in a single line so previous toolpaths could remain visible while only new toolpaths were exported for cutting. The owner described a short design-to-part prototype loop, but the thread does not provide measured accuracy, feed/speed settings, or a quantified cycle-time study.

## Forum visuals

The OpenBuilds build page lists numerous owner-posted photos across the shelf, gantry, electronics, clamp and first-cut stages. I could not visually inspect those attachments in this session because the browser could not resolve the forum host. The factual descriptions above come from the text of the forum build page and owner discussion; photo-dependent construction details remain unverified here.

## Pinout and limits

No connector-level pinout is published in the inspected forum material. The barrel-jack counts and intended functions do not specify contact polarity or mapping to xPro v2 terminals. The owner described the electronics shelf, temporary E-stop position and workholding arrangement, but the thread does not verify their later state. No external non-forum source is used to fill these gaps.

## Forum sources

1. OpenBuilds Forum, Jonathon Duerig, [“Contrariwise -- A C-Beam Router” build page](https://builds.openbuilds.com/builds/contrariwise-a-c-beam-router.3518/), published 2016-06-22. The forum build record contains the stated dimensions, intended ABS stock, C-Beam layout, electronics, connector functions, pressure-foot design, stock handling and production workflow.
2. OpenBuilds Forum, [discussion thread](https://builds.openbuilds.com/threads/contrariwise-a-c-beam-router.7005/), started 2016-06-07. Owner posts report first cut, completed production use and the X-gantry wheel flex observation. The forum attachment images were not visually retrieved for this dossier.
