# HomemadeNJ scratch-built 4 × 2 ft plasma table

**Machine identity:** owner-built CNC plasma table described as having “4' × 2' +” work area; no commercial model name. This was a completed build offered for transfer, not a standardized kit.  
**Evidence state:** one detailed owner post in LinuxCNC's Show Your Stuff forum; adequate component and use snapshot, but no wiring diagram or pinout in the inspected post.  
**Novelty check:** exact build title and owner identity not found in the current machine-control survey HTML or sibling assets on 2026-09-23.

## Reported configuration

The builder says the table followed an earlier 2 × 2 ft plasma build that was sold to fund this larger machine. The posted configuration is:

- Work area: a little over 4 × 2 ft (owner's wording).
- Motion: rack-and-pinion drive; skate-bearing Y carriages and a linear guide on X.
- Z: owner-built Microcarve Z assembly with floating torch head.
- Electronics: Probotix electronics.
- CNC software/configuration: LinuxCNC using the Toma configuration.
- Torch-height control: Proma THC.
- Plasma source: Everlast PowerPlasma 60s.
- Bed: water pan with holding tank and a software-controlled return pump.

The owner designed the layout for a one-car garage. The table was rolled against a wall; the owner describes connecting 120 V, 220 V, and shop air, then pumping water into the pan before cutting. At the end of use, the owner drained water back to the barrel and rolled the machine away to make room for a car. The forum post reports a sample cutout in 18-gauge material and squareness/hole-quality tests.

## Operation notes

The forum describes a practical mobile-shop sequence at a high level: move to work position, connect power and compressed air, fill the water pan, then cut; drain and stow the machine after work. The post does not give a full safe startup/shutdown sequence, circuit assignment, air pressure, torch consumables, cut chart, torch-height settings, or grounding scheme. Do not treat the high-level description as a safety procedure.

## Wiring / pinout

The build post identifies the controller/electronics family and THC but does not identify individual terminals, torch trigger wiring, arc-voltage scaling, limit/home inputs, or motor coil colors. No pinout can be established from this source. The system is not sufficiently documented here to reproduce electrically.

## Forum visuals

The [original LinuxCNC thread](https://forum.linuxcnc.org/show-your-stuff/33223-scratch-built-4-x-2-plasma-table) includes photos of the completed table, cutouts, and tests. The text version reports attachments without exposing their full pixels or any schematic labels; visual diagram transcription remains pending.

## Sources (forum posts only)

1. HomemadeNJ, “Scratch Built 4' x 2' Plasma Table,” LinuxCNC Forum, 2017-08-31: [thread](https://forum.linuxcnc.org/show-your-stuff/33223-scratch-built-4-x-2-plasma-table). The first post supplies the dimensions, motion, Z/torch head, electronics, control software, plasma source, water system, use sequence, and example tests.
