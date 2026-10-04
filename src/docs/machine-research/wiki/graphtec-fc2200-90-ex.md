# Graphtec FC2200-90/EX

Research status: wiki-sourced plotter/cutter dossier; exact model absent from the existing repository search. Captured 2026-09-23.

## Identity and documented workflow

MakeICT lists the Graphtec FC2200-90/EX as an operational flatbed vinyl cutter/plotter. Its wiki guide documents an Inkscape-to-HPGL workflow:

1. Create or import artwork in Inkscape, convert objects to paths, and inspect strokes with fills turned off.
2. Save a copy as HPGL and set tool-offset correction to 0 for file export.
3. Tape vinyl to the table, install the selected tool, and limit blade protrusion to the intended cut depth.
4. Set condition values with the machine’s numbered panel buttons and run the built-in square/triangle test in unused media.
5. Set lower-left and upper-right area points; upload the file through the machine’s local web interface and run the selected file.

The wiki gives starting settings for a small blade (0.2 mm stickout, force 18, speed 10, quality 1), large blade (offset 28), and Sharpie (offset 0, force 5, speed 15, quality 1). These are MakeICT settings, not universal Graphtec parameters.

## Connections and pinout

The wiki references a local upload interface but does not identify its physical network connector. No USB/serial/Ethernet, actuator, blade-force, sensor, power, or control-board pinout is present. The panel’s numbered setting controls are user-interface buttons, not pin numbers.

## Visual evidence

The equipment inventory links to the machine page and its page describes test shapes; the inspected wiki text did not provide a wiring diagram. [MakeICT Graphtec FC2200-90/EX wiki page](https://wiki.makeict.org/wiki/Graphtec_FC2200-90%2FEX).

## Limits

The article says the machine “works” and the inventory lists it as operational. It does not establish firmware revision, serial number, supported media width, blade model, or electrical interface details. Do not convert cutter offset values into electrical assignments.
