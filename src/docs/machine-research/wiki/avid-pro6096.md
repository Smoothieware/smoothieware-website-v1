# Avid PRO6096

Research status: wiki-sourced exact model dossier; adds a named PRO6096 configuration to the existing broader Avid/CRP atlas coverage. Do not count it as a wholly new manufacturer family. Captured 2026-09-23.

## Identity and revision scope

HackRVA identifies an Avid PRO6096 with a 5 × 8 ft bed, purchased January 2020 as revision 19.2. Its wiki describes a NEMA 34 CNC controller, revision 20.1 CRP800-00E-8, 2.2 kW (about 3 hp) spindle, VistaCNC P4-S pendant, and Mach4. A subsequent modification note says the frame follows revision 24.2 assembly instructions, with alternate left-side cable-track placement and electronics boxes mounted inside the frame. These revision numbers apply to different documented items; do not collapse them into one machine revision.

## Workholding and use

The spoilboard is documented as MDF slats with locating pins, X-axis aluminium T-track, 1/4-20 inserts on a 4 × 4 grid, and 3/4-inch dog holes on a 4 × 8 grid. The wiki’s workflow is design → toolpath/G-code → startup checklist → execution. The space requires certification; VCarve and Fusion 360 are both represented in its training material. It calls for a spindle warm-up, touch-plate offsets, and an air pass as part of the learning resources.

The wiki approves wood, several plastics, and foam for this installation, while explicitly prohibiting metals, fiberglass, and carbon fiber. Its local rules override generic material capabilities of the machine.

## Connections and pinout

The page names the CRP800-00E-8 controller and P4-S pendant, but the inspected wiki does not show their connector pin assignments. Wiring-layout notes describe cable-track routing and enclosure placement only; these are not signal pinouts. Do not infer DB25/DB9 pin functions from the Avid product family or another revision.

## Visual evidence and diagram transcription

The wiki embeds a four-stage CNC workflow diagram. Its accompanying caption states that it describes design and execution steps; the accessible text does not expose internal block labels, so no finer transcription is claimed. [HackRVA Avid PRO6096 wiki page](https://wiki.hackrva.org/index.php?title=Avid_PRO6096&oldid=3731).

## Evidence limits

This community configuration is useful for the exact machine/board/pendant pairing but remains distinct from the existing atlas’s other Avid revisions. Verify installed hardware locally before using any Avid family diagram.
