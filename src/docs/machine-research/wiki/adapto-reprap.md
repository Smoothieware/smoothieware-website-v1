# Adapto RepRap printer

## Identity

Adapto is a parametric RepRap printer design built around configurable frame and rod dimensions. Its wiki build guide describes itself as a guide, not a definitive blueprint.

## Wiki evidence

- [RepRap Adapto](https://wiki.reprap.org/wiki/Adapto): component lengths, frame assembly, mechanical construction and revision caveats.
- [Adapto Flex](https://reprap.org/wiki/Adapto_Flex): a separate experimental toolhead-focused variant, linked here only for distinction.
- [RepRap machine list](https://reprap.org/wiki/RepRap_Machines): design index.

## Construction and electrical design evidence

The base Adapto page's sample bill of materials describes one X motor mount, one Y motor mount, two Z motor holders, and an extruder E-stepper. This is five mechanical motor locations. Its electronics note asks for a controller that supports four steppers and two heaters; the source does not identify how the two Z motors are driven or specify an installed controller. The same parts list names a hot end and heated bed, and includes one STL containing three endstop-holder parts. The repository README separately lists an X-axis endstop holder as a todo, so holder availability varies by revision. Neither source proves that switches were fitted.

The guide gives an example using 20 × 20 mm extrusion, with 300 mm X, 340 mm Y and 420 mm Z frame members; it notes approximate lost travel from frame to usable travel. It shows assembly of the frame, smooth rods, X ends and Z motors. The wiki cautions that part sizes/materials may differ and the guide may omit newer upgrades.

## Pinout and visuals

The base guide is a mechanical guide, not a wiring blueprint. It publishes no installed controller identity, connector designators, harness groups, contact numbering, cavity functions, polarity, electrical ratings, or mating-face views. Accordingly, this profile's source cards identify design-level motors, heater loads, and an endstop-holder count that conflicts with the repository README todo; they have no machine-side pin circles or SmoothieBox routes. No dotted guess is supportable until both electrical endpoints and an intervening driver/interface are identified. The legacy 227-position schedule is retained as historical capture, not promoted as Adapto-specific contacts.

The linked Adapto Flex should not be treated as the same exact configuration; it describes a different carriage/toolhead concept and recommends configuration swapping by toolhead. Its SmoothieBoard suggestion is not evidence for the base Adapto or this machine's fitted controller.

## Limits

The cited build information is user-contributed and under construction. Confirm the selected frame dimensions, design revision, controller, harness, and fitted switch/heater configuration before wiring.
