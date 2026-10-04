# Aaron Newsome's OpenBuilds LEAD CNC

**Machine identity:** Aaron Newsome's individual OpenBuilds LEAD CNC build, documented in the forum as “Yet Another LEAD CNC Build.” This is one owner’s specific LEAD machine, distinct from other LEAD machines discussed elsewhere. A repository search on 2026-09-23 found no match for Aaron Newsome, the thread title, or the matching build page.

**Evidence state:** OpenBuilds marks the build complete. In April 2019 the owner reported spoilboard lines followed by an engraved brushed-silver/black ABS laptop logo as the first project cut on this machine. In later forum projects, the same owner reported 3D carving in wood and making a finger-jointed plywood box on the LEAD. These establish varied reported use, but the posts do not supply independent dimensional accuracy tests or a comprehensive setup/calibration record.

## Build and control setup

The owner described following the LEAD CNC build instructions and adding some personal touches. The inspected build and discussion do not establish the exact LEAD size or travel dimensions, so no model suffix or work envelope is assigned here.

The owner's initial control setup was a Raspberry Pi running bCNC, with OpenBuilds software also planned. The owner liked remote-desktop access from a desk PC and using the bCNC web pendant from an iPad. The CAD/CAM chain they described was SolidWorks for designs and CamBam for G-code generation.

For the first completed logo cut, the owner said they replaced the original controller with an OpenBuilds BlackBox. The owner reported a 400 W brushed spindle kit sold as a 12,000 RPM unit and said they controlled spindle speed from G-code. They noted that the controller received differed from the pictured seller listing: the pictured unit had separate TTL and potentiometer connections, while their unit had a single connection, which initially caused confusion. No terminal or connector assignments are supplied, so this is functional context rather than a wiring pinout.

The owner said the LEAD's maximum motion speed was about 300 mm/min at the time and that reducing spindle speed helped avoid melting ABS at that slow feed. This is the owner's setup-specific observation, not a general machining prescription. They described the spindle as quiet and strong relative to a DeWalt router, and reported it ran fairly cool during long sessions. A printed shim was used with the spindle mount; the owner recounted one instance where insufficiently securing the spindle let it slip, damaging the work and spoilboard.

## Use and workholding

For the first workpiece, the owner used carpet tape to hold brushed ABS to a laptop and engraved a logo. After the machine was up and running, the owner reported making two logo panels, one for a MacBook Pro and one for a Dell laptop. The posts do not specify the cutter, depth, feed, RPM, or a reusable cutting recipe.

In September 2020, the owner documented a first 3D carving on the LEAD CNC using 13 mm thick stock sized 110 × 100 mm. In May 2019, the owner also posted a finger-jointed box made from 1/8-inch plywood, saying the machine was running and they wanted to try the available plywood. These forum project posts provide further examples of use, but do not establish that one control setup or parameter set was used unchanged across all projects.

In June 2019, the owner criticized the LEAD's NEMA 23 motors being mounted with only two screws and said they might later make improved mounts, potentially alongside a closed-loop-stepper upgrade. That is a contemplated modification, not evidence it was performed. Replies discuss other builders' mount changes; those are not attributed to this machine.

## Pinout and evidence limits

The forum describes a controller change, G-code spindle-speed control, and the owner's confusion about the delivered spindle controller connection. It does not document BlackBox or spindle-controller terminal numbers, TTL polarity/voltage, a connector contact map, motor-coil mapping, or a complete as-built diagram. Do not treat the vendor listing or other users' wiring as the owner's delivered-controller wiring.

The machine's size/model, axis motor ratings and driver map, travel limits, calibration values, cutting parameters and safety-circuit wiring are not specified in the inspected material. The owner-reported projects are useful operating evidence, not validated performance specifications.

## Forum visuals

The OpenBuilds thread and build page list owner-posted photos, including the first logo cut and build views. Those image attachments could not be visually inspected in this session because the browser could not resolve the forum host. The descriptions above use the forum text and owner-attributed project posts; no claim about visible wiring or construction details is made.

## Forum sources

1. OpenBuilds Forum, Aaron Newsome, [“Yet Another LEAD CNC Build” discussion](https://builds.openbuilds.com/threads/yet-another-lead-cnc-build.13994/), 2019-04 through 2020-02. Owner posts describe the build, Raspberry Pi/bCNC workflow, SolidWorks/CamBam, BlackBox controller swap, first ABS logo cuts, spindle-speed control and mount concerns.
2. OpenBuilds Forum, Aaron Newsome, [LEAD CNC build page](https://builds.openbuilds.com/builds/yet-another-lead-cnc-build.8468/), published 2019-04-30. Includes the owner's build description and photos of the machine and early cut.
3. OpenBuilds Forum, Aaron Newsome, [“Finger Jointed Box” project](https://builds.openbuilds.com/projects/finger-jointed-box.240/?direction=asc), 2019-05-08, and [“My First 3d Carving On Lead Cnc” project](https://builds.openbuilds.com/projects/my-first-3d-carving-on-lead-cnc.360/), 2020-09-15. Both attribute the reported work to the owner's LEAD CNC.
